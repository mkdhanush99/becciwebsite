import { test } from 'node:test';
import assert from 'node:assert/strict';
import { opportunities, portals } from '../src/data/opportunities.ts';

test('every record has official https sources, apply link and verification dates', () => {
  for (const o of opportunities) {
    assert.ok(o.sources.length > 0, o.slug);
    for (const s of o.sources) assert.match(s.url, /^https:\/\/[^/]*\.(gov\.in|nic\.in|in)\//, o.slug);
    assert.match(o.applyUrl, /^https:\/\//, o.slug);
    assert.match(o.lastVerified, /^\d{4}-\d{2}-\d{2}$/, o.slug);
    assert.match(o.lastFetched, /^\d{4}-\d{2}-\d{2}$/, o.slug);
    assert.ok(o.obcRule.length > 10, o.slug);
  }
});
test('slugs are unique', () => assert.equal(new Set(opportunities.map((o) => o.slug)).size, opportunities.length));
test('portals record a check date', () => portals.forEach((p) => assert.match(p.checked, /^\d{4}-\d{2}-\d{2}$/)));
