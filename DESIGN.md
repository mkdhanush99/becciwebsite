# DESIGN — BECCI public website

## Design system v2 (approved audit, Stage 1–2, 23 Nov 2026)
- **Brand assets:** official logo kit R2 (Option A, navy). `public/brand/becci-logo.svg` (navy wordmark, header), `becci-logo-light.svg` (white, footer), `becci-symbol-navy.svg` / `becci-symbol-white.svg` (the two Cs: brand moments, page banners, the five-letter story), favicons, app icons, manifest and share image at the site root. The symbol is never recoloured or redrawn (kit rules); `InfinityMark.astro` now renders the official file.
- **Colour tokens** (`src/styles/global.css`): Midnight `#061638` and Continuum Navy `#0A2352` (from the logo kit), Sapphire `#1B4FA8` / `#123A7E` for actions and links, silver-blue neutrals `#C9D5E6` / `#DDE5F0` / `#EDF1F7`, warm ivory `#F8F4EA`, ink `#121826`, slate `#566176`. **No gold** (client decision). Legacy `--blue-*` / `--accent-*` names alias the new tokens.
- **Type:** New Black only. Scale 13 · 14 · 16 · 18 · 22 · 28 · 40 · 56 · 72 (`--fs-label` … `--fs-4xl`); all ad-hoc sizes were replaced with tokens.
- **Space:** 4px base: 4 · 8 · 12 · 16 · 24 · 32 · 48 · 72 · 112 (`--s-1` … `--s-9`); ad-hoc values replaced.
- **Layout:** max 1280, reading 720, wide 1040, 12-column splits (5/7, 4/8, 7/5). Breakpoints 520 / 640 / 760 / 960 / 1180.
- **Buttons:** 48px, 8px radius; primary sapphire (white on dark), ghost outline; press scale 0.98.
- **Header:** 80px, logo + five groups (Opportunities, Chamber, Membership, Updates, Contact) + Member Login + Join; shrinks to 64px with a hairline once scrolled.
- **Surfaces:** ivory page, white panels with 1px silver-blue hairlines, midnight feature bands; shadow only on overlays. "Pending" content is one quiet line, not a box. Topic lists are plain inline lists, not pill tags.
- **Photography slots:** `BrandMedia.astro` + `src/data/media.ts`. Drop approved photos at `public/images/home-hero.jpg`, `about-cover.jpg`, `about-story.jpg`, `founder.jpg` and they replace the graphic panel automatically (founder/story sections stay text-only until then).
- **Motion:** one entrance on load (`data-enter`), 180ms hover feedback (2px lift, underline, press). No ambient animation; custom cursor removed. Reduced motion respected.
- **Benchmark pages:** Home (finder-first hero, "I am…" paths, featured opportunity + register list, the story, editorial pillars, membership comparison, midnight close), About (editorial cover, essay with pull quote, statement band, four ways, whom we serve, approach path, structure tree, founder), Opportunity Finder (compact header, counted tabs, sticky toolbar, register rows, collapsible portals).
- **Skills:** UI UX Pro Max (installed; design-system generator: Enterprise Gateway pattern, Accessible & Ethical style). Taste (`design-taste-frontend`, installed globally at the user's request): instructions read; adopted hero-with-action, equal edges, no image captions, one load entrance, hover layer, one moment per page; copy-lint 0 FAIL on Home/About/Finder; its "one section per screen" layout rule and dealt palettes/stock stand-ins deliberately not adopted (conflict with approved brand, real photography and an information-dense site). Impeccable (installed globally at the user's request, v4.10, telemetry off): `impeccable detect` on Home/About/Finder; fixed low-contrast story glyph and removed two kickers; remaining findings judged: cream-palette (warm ivory is client-approved), cramped-padding on full-width sections and the menu (false positive: content sits in the padded `.wrap`), hover low-contrast (false positive: every visible link hover-tested in Chromium). Scroll Craft, Lemo, Opuscar: not available.

---

## Earlier record (v1)

## Direction (selected: A)
- **A. Finder-first split (chosen).** Deep institutional-blue hero: headline, supporting line and a search box with five category chips on the left; luminous infinity on the right. The first useful action (search or pick a category) sits above the fold, ahead of any institutional history.
- B. Story-first full-bleed: the infinity animation fills the screen and the five letters follow, with search lower down. Rejected because opportunities were buried behind brand content.
- C. Newspaper front page: a dense editorial grid of news, events and schemes. Rejected because it needs content BECCI has not supplied yet, and it gives no obvious first choice.

## System
- **Colour:** Institutional Blue `#0f2b5b` (950–100 scale), lighter blue accents (`#4f7fd6` highlights and focus, `#1e4f9c` accent text on light, `#a9c3f0` accent text on dark); no gold (client direction, 23 Nov 2026), warm paper neutrals `#f7f4ec`/`#efeadc`. Status colours always come with a text label and a shape cue (dot, diamond for closing soon, hollow ring for closed).
- **Type:** New Black (client-supplied, CR §3.1), used for headings and body text, in seven weights (200–800) self-hosted from `public/fonts` (woff2 with woff fallback). Hierarchy comes from size and weight only; there is one family throughout.
- **Brand motif:** two facing Cs (deep blue = Community, light blue = Commerce) crossed into an infinity form (`src/components/InfinityMark.astro`). **It is not the approved BECCI logo**, which was not supplied. The header uses a plain "BECCI" wordmark until the logo arrives. The motif appears in the hero, page banners, footer and the two C tiles (CR §3.3).
- **Hero:** a static two-C infinity mark labelled Community and Commerce. The particle animation was removed at the client's request (23 Nov 2026); the luminous-particle concept (CR §4.1) is deferred.
- **Five-letter story:** an ordered list of buttons. Hover (fine pointer only), focus, click or tap opens one tile and resets the previous one. Arrow keys, Home and End move between tiles. The two Cs carry distinct labels, colours (deep vs light blue) and a mini infinity that highlights their own half. On mobile the tiles become an accordion.
- **Cursor:** a branded SVG cursor for fine pointers only, with a ring cursor on interactive elements. Native cursors remain on touch devices and as the fallback (CR §3.4).
- **Imagery:** no photographs. No approved photos were supplied, and stock pictures of strangers would misrepresent members. The design leans on typography and the motif; photo slots arrive with content (advisors, stories).

## Opportunity finder decisions
| Decision | Evidence |
|---|---|
| Keep an active-filter row above results, each chip with its own ×, plus Clear all; on mobile the row scrolls and the last chip is cut off so the overflow is visible | UXPeak — *Design Filters Like a Senior › Making Filters Feel Effortless* |
| OR within a filter group and AND across groups; option counts follow the same rule and dim at zero | same module |
| Filters, sort and query live in the URL; scroll position is saved for the return trip; the detail page's Back link returns to the exact results | same module ("Keep filters in the page address") |
| Result count is announced politely to screen readers (`aria-live`) | same module |
| Selected checkbox uses fill and a tick, not colour alone; tap targets are 40–48px | same module; Mobbin [Venmo all-filters sheet](https://mobbin.com/screens/98fff7e5-2779-4803-94ac-2e6a91abd8a6) |
| Mobile filters open in a bottom sheet with "Clear all" and a "Show N results" button that updates live | UXPeak — *Make Mobile UI Feel Senior › Search & Discovery* (show the count); Mobbin [ClassPass](https://mobbin.com/screens/9f3b3daa-94cf-4397-8989-17b698c7852a), [IKEA](https://mobbin.com/screens/dd756cf9-8d13-47d4-a3cc-ee9d1063428d) |
| Search box at the top, category tabs as the first and obvious choice, chips with Clear inline above results | Mobbin [Mercor "Explore opportunities"](https://mobbin.com/screens/49782c05-c119-437f-8af4-fde46431657c) |
| Status shown with icon and colour beside each record; facets listed in a left column with counts | Mobbin [Featurebase](https://mobbin.com/screens/5bd29b17-0530-4b90-9e5f-1ba7211ae765), [Searchable](https://mobbin.com/screens/b5ac0f74-ee24-4737-bcaa-a46895266752) |
| Detail page has a sticky decision panel holding deadline, geography, the primary Apply action, then official sources and freshness; on mobile the panel comes first | Mobbin [Upwork job detail](https://mobbin.com/screens/c5775d88-fd8e-4054-a041-45e3c8990aae) |
| Empty results get a plain message and Clear all; categories without a feed get a "No live feed" notice and a list of official portals | UXPeak filters module (never leave a silent empty list) |

## Tools
- UXPeak MCP: `get_design_guidance` returned module pointers; two modules were read in full with `get_module`.
- Mobbin MCP: `search_screens` (web job and opportunity results, iOS filter sheets, web detail pages). Three searches in total.
- Lemo, Opuscar, Impeccable, Vercel Web Interface Guidelines and Skill Craft were **not exposed in this environment** under any name. None of them was used. The Vercel-style practices applied anyway: visible focus, URL state, `aria-live`, 16px inputs on mobile, honest loading and empty states, and `prefers-reduced-motion`.

## Known visual gaps
The leadership, advisor, testimonial, event, news and story pages use dashed "Awaiting approved content" blocks until BECCI supplies content. Swap in the logo and font when they arrive.

## v3 — Premium Blue Fusion and motion language (Nov 2026)

**Brand assets:** the logo, emblem and mascot are excluded until BECCI supplies final artwork. `Logo.astro` renders the plain-text name; `InfinityMark.astro` renders nothing.

**Palette:** royal `#2152E8` (primary action), sapphire `#1B4FA8`, electric `#3D7BFF` (light and glow), cyan `#22B8E6` (accent on dark; `#0B6F95` on light), midnight `#061638` / `#040D26`, cool light surface `#F5F8FD`. Lit text on dark is `#8FDCF7`. No gradient text.

**Motion language** (runtime `src/components/Motion.astro`, styles in `global.css` under "Motion language"):
- *Kinetic titles* (`Kinetic.astro`): words rise out of a mask in sequence on load (900ms, 70ms stagger). Used by PageHero, PageHead, the About cover and the homepage hero.
- *Luminous fields* (`.lux`): blurred royal, electric and cyan light behind banners, slowly floating. Feature banners are dark; editorial banners are light with a soft glow.
- *Curtain*: the first block after a dark banner overlaps it with a 32px rounded top edge.
- *Reveals*: content blocks in `.section > .wrap` rise in when scrolled to, with list and grid items staggered. Task surfaces (finder, opportunity detail) stay still.
- *Scrub* (`[data-scrub]`): oversized words light up as they pass (homepage statement, footer promise).
- *Grow* (`[data-grow]`), *Rise* (`[data-rise]`): panels scale into place as they enter.
- *Story drum* (`ScrollStory.astro`): the B-E-C-C-I chapters on a pinned scroll on the homepage.
- With reduced motion turned on, or without JS, nothing animates or pins and all content is visible.
