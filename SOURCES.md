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

## Homepage impact statistics (`src/data/impact.ts`)
- **Source:** NBCFDC (Ministry of Social Justice & Empowerment), *Statement showing Statewise/UT wise/PSB wise Disbursement and no. of beneficiaries assisted during 2020-21 to 2024-25 and cumulative upto (31.03.2025)*.
  - PDF: https://nbcfdc.gov.in/nbcfdc/web/sites/default/files/2025-05/Disb%20Chart%202020-25.pdf
  - Linked from: https://nbcfdc.gov.in/nbcfdc/web/en/achivement
- **Retrieved and checked:** 23 Nov 2026. File SHA-256 `41f94df3a2f0613c6657c7adf44a2166932741eed14353ebc322a1b25f81be69`.
- **Copied as published:**
  - the all-India cumulative total (3,305,532 beneficiaries; Rs. 767,433.16 lakh)
  - the yearly totals for 2020-21 to 2024-25
  - the Andhra Pradesh and Telangana rows
- **Derived by BECCI and labelled on the page:**
  - conversion from lakh to crore
  - the two States' combined share of the national total (387,003 of 3,305,532 = 11.7%)
- **Next step:** re-check whenever NBCFDC publishes a newer statement, and update `IMPACT_SOURCE.checked`.

## Government Schemes library (added 23 Nov 2026)

Scheme facts on /schemes and /schemes/[slug] come from these official pages, rendered and read on 23 Nov 2026:

| Scheme | Page read | Ministry portal opened from our checker? |
|---|---|---|
| PMEGP | https://www.myscheme.gov.in/schemes/pmegp | No (kviconline.gov.in and msme.gov.in did not respond) |
| Pradhan Mantri Mudra Yojana | https://www.myscheme.gov.in/schemes/pmmy | No (mudra.org.in, udyamimitra.in) |
| Stand-Up India (marked closed on myScheme) | https://www.myscheme.gov.in/schemes/sui | No (standupmitra.in) |
| PM Vishwakarma | https://www.myscheme.gov.in/schemes/pmv | No (pmvishwakarma.gov.in) |
| PMFME | https://www.myscheme.gov.in/schemes/pmfmpe | No (pmfme.mofpi.gov.in) |
| Startup India Seed Fund (closed 31 May 2026) | https://seedfund.startupindia.gov.in/ and /about | Yes; guidelines PDFs on port 3535 not reachable |

myScheme is the Government of India's scheme platform (National e-Governance Division, MeitY). Links to guidelines, notices and portals are copied exactly as those pages publish them; where our checker could not open a link, it is listed as published, not as independently opened. Status of PMEGP and PMFME is shown as "Status to confirm" because their approved periods on myScheme have passed without a stated extension.

The "Compendium of Schemes for MSMEs" (Grant Thornton Bharat with SIDBI, v2.0) supplied by the client was used only to choose which schemes to research. No figure on the site is taken from it.

**Official logos (added 23 Nov 2026 at the client's request).** Logos are shown only where found on a Government of India source, each labelled with what it represents (the scheme, its parent initiative, the administering ministry, the implementing agency, or the application portal), so no ministry or portal logo is presented as the scheme's own. Files are in `public/logos/schemes/`; the mapping, source and download date are in `src/data/scheme-logos.ts`. Each page states BECCI is not a government body and is not endorsed. The State Emblem is not used on its own anywhere; it appears only inside the Ministry of MSME and National Scholarship Portal logos as those bodies publish them.

| Scheme | Logo shown | What it is | Source |
|---|---|---|---|
| PM Mudra Yojana | PMMY logo | Scheme | DBIM toolkit (MeitY) Visual Components Library |
| Stand-Up India | Stand-Up India logo | Scheme | DBIM toolkit |
| Startup India Seed Fund | Startup India logo | Parent initiative | DBIM toolkit |
| PMEGP, PM Vishwakarma | Ministry of MSME logo | Administering ministry | DBIM toolkit |
| NBCFDC individual and group loans | NBCFDC logo | Implementing agency | nbcfdc.gov.in |
| PM YASASVI, PM-USP | National Scholarship Portal logo | Application portal | scholarships.gov.in |
| Telangana ePASS post-matric | Telangana ePASS logo | Application portal | telanganaepass.cgg.gov.in |
| PMFME | None | Neither the scheme nor the Ministry of Food Processing Industries is in the DBIM library; pmfme.mofpi.gov.in unreachable from our checker | — |

Reuse terms for these logos on a non-government website have not been confirmed in writing; the client should confirm before public launch.

No scheme record has been reviewed by BECCI staff yet (`humanReviewed: null`). Pages say so.
