#!/usr/bin/env node
// Source freshness checker. Fetches every official URL used by the opportunity records
// and portal directory, records whether the fetch succeeded, and fingerprints the page
// text so an editor can see when an official page has changed and needs re-verifying.
//
// It never edits records. A failed fetch keeps the last verified record untouched and
// only updates `lastAttempt`. Output: data/source-status.json
//
// Usage: node scripts/check-sources.mjs
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const src = (await readFile(new URL('../src/data/opportunities.ts', import.meta.url), 'utf8'))
  + (await readFile(new URL('../src/data/schemes-central.ts', import.meta.url), 'utf8'));
const urls = [...new Set([...src.matchAll(/https:\/\/[^'"\s)`]+/g)].map((m) => m[0]).filter((u) => !u.endsWith('/schemes/$')))];
const outFile = new URL('../data/source-status.json', import.meta.url);
let prev = {};
try { prev = JSON.parse(await readFile(outFile, 'utf8')); } catch {}

const text = (html) => html.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
const now = new Date().toISOString();
const result = {};
for (const url of urls) {
  const before = prev[url] ?? {};
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; source-checker)' }, signal: AbortSignal.timeout(30000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const body = text(await res.text());
    const hash = createHash('sha256').update(body).digest('hex').slice(0, 16);
    result[url] = { ok: true, lastAttempt: now, lastSuccess: now, hash, changed: before.hash ? before.hash !== hash : null, chars: body.length };
    console.log('ok     ', url, result[url].changed ? 'CHANGED — re-verify' : '');
  } catch (e) {
    result[url] = { ...before, ok: false, lastAttempt: now, error: String(e.message ?? e) };
    console.log('failed ', url, result[url].error);
  }
}
await mkdir(new URL('../data/', import.meta.url), { recursive: true });
await writeFile(outFile, JSON.stringify(result, null, 2) + '\n');
console.log(`\n${Object.values(result).filter((r) => r.ok).length}/${urls.length} sources fetched. Written to data/source-status.json`);
