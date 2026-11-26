// BECCI AI: builds the assistant's knowledge base from the built site and bundles the PHP backend.
// Runs after `astro build`. Reads every page in dist/, keeps the main content (no header, footer or scripts),
// splits it into sections at h2/h3, and writes dist/api/kb.json. Then copies server/becci-ai (chat.php,
// .htaccess, vendor) into dist/api/. The API key is never part of this: chat.php reads it on the server.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, cpSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const DIST = 'dist';
const OUT = join(DIST, 'api');
const SKIP = [/^demo\//, /^404\.html$/, /^api\//];

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
});

const ENT = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', rsquo: '’', lsquo: '‘', rdquo: '”', ldquo: '“', mdash: '—', ndash: '–', hellip: '…', middot: '·', rarr: '→', times: '×', copy: '©' };
const decode = (s) => s
  .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
  .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
  .replace(/&([a-z]+);/gi, (m, n) => ENT[n.toLowerCase()] ?? m);

const toText = (html) => decode(html
  .replace(/<(script|style|svg|noscript|template|video|canvas|dialog)\b[\s\S]*?<\/\1>/gi, ' ')
  .replace(/<[^>]*\baria-hidden="true"[^>]*>[\s\S]*?<\/(span|ul|div)>/gi, ' ')
  .replace(/<br\s*\/?>/gi, '\n')
  .replace(/<\/(p|li|h[1-6]|dt|dd|tr|div|section|blockquote|figcaption)>/gi, '\n')
  .replace(/<li\b[^>]*>/gi, '\n• ')
  .replace(/<[^>]+>/g, ' '))
  .replace(/[ \t\f\v]+/g, ' ')
  .replace(/ *\n */g, '\n')
  .replace(/\n{2,}/g, '\n')
  .trim();

const pages = [];
const chunks = [];

for (const file of walk(DIST)) {
  const rel = relative(DIST, file).split(sep).join('/');
  if (SKIP.some((r) => r.test(rel))) continue;
  const html = readFileSync(file, 'utf8');
  const url = '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '');
  const title = decode((html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? url).replace(/ · BECCI$/, '').trim());
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/i)?.[1] ?? '');
  const main = html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? '';
  if (!main) continue;
  pages.push({ url, title, description });

  // Split at h2/h3; each part keeps its heading and, when it has one, the id to link straight to it.
  const parts = main.split(/(?=<h[23]\b)/i);
  let lastId = '';
  parts.forEach((part, i) => {
    const h = part.match(/^<h[23]\b([^>]*)>([\s\S]*?)<\/h[23]>/i);
    const heading = h ? toText(h[2]).replace(/\n/g, ' ') : (i === 0 ? title : '');
    // A section id is on the heading or on the nearest section before it.
    const ownId = h?.[1].match(/\bid="([^"]+)"/)?.[1];
    const secIds = [...(parts[i - 1] ?? '').matchAll(/<section\b[^>]*\bid="([^"]+)"/gi)].map((m) => m[1]);
    const id = ownId || secIds.at(-1) || (i === 0 ? '' : lastId);
    if (id) lastId = id;
    let text = toText(part);
    if (text.length < 40) return;
    // Long sections become several chunks of about 1,400 characters, split at line ends.
    const lines = text.split('\n');
    let buf = '';
    const flush = () => { if (buf.trim().length >= 40) chunks.push({ url: id && i > 0 ? `${url}#${id}` : url, page: title, heading, text: buf.trim() }); buf = ''; };
    for (const l of lines) { if ((buf + '\n' + l).length > 1400) flush(); buf += (buf ? '\n' : '') + l; }
    flush();
  });
}

pages.sort((a, b) => a.url.localeCompare(b.url));
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'kb.json'), JSON.stringify({ built: new Date().toISOString(), pages, chunks }));

const SERVER = 'server/becci-ai';
for (const f of ['chat.php', '.htaccess']) cpSync(join(SERVER, f), join(OUT, f));
if (existsSync(join(SERVER, 'vendor'))) cpSync(join(SERVER, 'vendor'), join(OUT, 'vendor'), { recursive: true });
else console.warn('[becci-ai] server/becci-ai/vendor is missing: run `composer install --no-dev -o` in server/becci-ai');

console.log(`[becci-ai] ${pages.length} pages, ${chunks.length} sections -> dist/api/kb.json`);
