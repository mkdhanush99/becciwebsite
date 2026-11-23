# HANDOFF

**Branch:** `claude/zealous-lamport-mqyhzd`
**State:** Public website built (Milestones 1–2 substantially done; Milestone 3 partly done with editorial records). Astro 5 static site.

## Run
```
npm install
npm run build      # static output in dist/
npm run preview    # http://localhost:4321
npm run check      # astro check (types)
npm test           # status logic + data integrity
npm run check-sources   # in cloud env: NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt npm run check-sources
```

## What exists
- 30 public routes plus a 404 page: Home, About, Leadership, Wings (+ Women, Youth), Membership (Join, Member Login, request a call), Opportunities hub, Schemes, Tenders, Jobs, Scholarships, Loans & Funding, 5 detail pages, How we check, Events, News, Knowledge, Services, Franchise, Success Stories, Partnerships, Biz Connect, Marketplace, Contact, Policies.
- Finder (`src/components/Finder.astro`): search, OR-within/AND-across filters with live counts, chips with ×, Clear all, sort, URL state, mobile bottom sheet with "Show N results", scroll and filter restore on return, status recomputed in the browser using India time, empty state, no-feed notice, official portal directory.
- Data: `src/data/opportunities.ts` (5 verified records, 17 portals); `src/data/site.ts` (content and destinations; empty = awaiting approval). Docs: `DESIGN.md`, `SOURCES.md`, `BECCI-BRIEF.md`.

## Files touched this session
package.json, astro.config.mjs, tsconfig.json, .gitignore, public/favicon.svg, src/** (layouts, components, data, lib, pages, styles), scripts/check-sources.mjs, tests/*.test.mjs, data/source-status.json, DESIGN.md, SOURCES.md, HANDOFF.md.

## Verified (Playwright, local preview, 23 Nov 2026)
- All 30 routes return 200 at 390px and 1366px, with one h1 each, no horizontal overflow and no console errors.
- Hero search → finder with the query applied. A filter writes to the URL and narrows results. Removing a chip restores results and URL. Result → detail. The Apply link is the official URL with rel=noopener. "Back to results" returns to the same filtered URL with filters restored. The empty state appears when nothing matches.
- Tenders show the no-feed notice and 4 official portals. Header Join and Member Login go to the membership anchors, which state that applications and the portal are not open.
- Forms: empty submit flags the fields and invalid email is caught. A valid submit says that nothing was sent (no endpoint is configured).
- Keyboard: the skip link comes first; story arrow keys work and the active state resets; focus outline is visible; the nav dropdown opens with Enter and closes with Escape.
- Reduced motion shows the static infinity. Mobile: filter sheet opens, applies and shows a badge; the menu opens; tapping a story tile works.
- `astro check`: 0 errors and 0 warnings. `npm test`: 15/15 pass. `check-sources`: 11/21 official URLs fetched.

## Not verified / limitations
- Real devices, Safari and Firefox are not tested (Chromium only). There is no Lighthouse run.
- Push to GitHub has failed with 403 in this session. See the latest report for the current status.
- Visual QA covered the home, scholarships listing, a detail page and membership; the other pages were checked by automation only.

## Missing approved inputs
Logo asset and the client's typeface (fallbacks in use); exact palette values; vision, mission, objectives, founder and history; all people (advisors, leadership, wing office bearers) with photos and consent; testimonials; success stories; events; news; knowledge resources; membership fees and final benefits; Join and Member Login URLs; form endpoint (`PUBLIC_FORM_ENDPOINT`); official email, phone and address; social URLs; Privacy Policy and Terms; service providers; franchise listings; chapter list; approved statistics with their period.

## Next task
Milestone 3: expand verified records. Check PMEGP, MUDRA, Stand-Up India, CGTMSE, PM Vishwakarma and AP Jnanabhumi once their hosts are reachable. Re-run `check-sources`, re-verify any page marked changed (Telangana ePASS for a 2026-27 notice; PM-USP after 30 Nov 2026), and look for an authorised tender or jobs feed.
