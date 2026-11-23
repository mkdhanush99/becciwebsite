# SOURCES — opportunity data

## Method
- **Editorial verification only.** Each record in `src/data/opportunities.ts` was written from the official page linked in its `sources`, read on 22 Nov 2026 through this environment's network allowlist. Only facts stated on those pages are used; gaps say "Not stated".
- **No automatic feeds.** No authorised API or RSS feed was found for tenders, jobs, scholarships or schemes. myScheme pages render client-side, and its API needs a key that we do not have authorisation for, so it is not used. CPPP, PM Internship and Seed Fund load their content inside the portal. Tenders and Jobs therefore list **no individual records**, and the site says so.
- **Freshness checker:** `npm run check-sources` (`scripts/check-sources.mjs`). It fetches every official URL in the data file and writes `data/source-status.json` with `ok`, `lastAttempt`, `lastSuccess`, a text fingerprint and `changed`. It never edits records: a failure keeps the last verified record, and a change flags the record for re-verification. In this cloud environment, run it as `NODE_USE_ENV_PROXY=1 NODE_EXTRA_CA_CERTS=/root/.ccr/ca-bundle.crt npm run check-sources`.
- **Dates:** `publishedDate`/`amendedDate` come from the source (none of the current notices state one), `lastFetched` records the last successful fetch, and `lastVerified` records the last editorial check of every fact. Status is computed from the dates at build time and again in the browser, using India time.

## Coverage (22 Nov 2026)
| Category | Records | Geography | Source |
|---|---|---|---|
| Loans & funding / schemes | NBCFDC Individual Loan Scheme; NBCFDC Group Loan Scheme | All India | nbcfdc.gov.in (4 pages) |
| Scholarships / schemes | PM YASASVI (OBC, EBC, DNT) — open, no closing date stated; PM-USP CSSS fresh — closes 30 Nov 2026 | All India (YASASVI not yet for Rajasthan, Keralam, Karnataka) | scholarships.gov.in homepage notices |
| Scholarships | Telangana ePASS post-matric — awaiting a 2026-27 notice | Telangana | telanganaepass.cgg.gov.in |
| Tenders | none (portal directory only) | — | CPPP, GeM, TS and AP eProcurement |
| Jobs & internships | none (portal directory only) | — | PM Internship, Apprenticeship India, NCS |

Discrepancy recorded: the NBCFDC scheme page says the income limit is Rs 5.00 lakh, but the How-to-Apply page says Rs 3.00 lakh. The site shows both.

## Reachability (last check-sources run, 22–23 Nov 2026)
Reached: nbcfdc.gov.in, scholarships.gov.in, telanganaepass.cgg.gov.in, eprocure.gov.in, tender.telangana.gov.in, pminternship.mca.gov.in, seedfund.startupindia.gov.in.
Not reached (connection reset, 403 or DNS): gem.gov.in, tender.apeprocurement.gov.in, apprenticeshipindia.gov.in, ncs.gov.in, jnanabhumi.ap.gov.in, kviconline.gov.in (PMEGP), mudra.org.in, standupmitra.in, cgtmse.in, pmvishwakarma.gov.in. These appear only as portal links marked "Not reached", with no scheme details.

## Configuration
- Cloud environment `becciwebsite` (personal) allows only the official hosts above. No credentials are used.
- `PUBLIC_FORM_ENDPOINT` (optional, build-time): the URL that receives form POSTs. When unset, the forms validate input but say plainly that nothing is sent.
- Approved destinations (join, login, contact, socials) live in `src/data/site.ts`; `null` means not supplied yet.

## To add a record
Read the official page, copy only what it states, set `lastFetched`/`lastVerified`, and add it to `opportunities`. Run `npm test` (it checks for https sources, dates and unique slugs).
