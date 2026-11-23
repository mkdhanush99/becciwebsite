# DESIGN — BECCI public website

## Direction (selected: A)
- **A. Finder-first split (chosen).** Deep institutional-blue hero: headline, supporting line and a search box with five category chips on the left; luminous infinity on the right. The first useful action (search or pick a category) sits above the fold, ahead of any institutional history.
- B. Story-first full-bleed: the infinity animation fills the screen and the five letters follow, with search lower down. Rejected because opportunities were buried behind brand content.
- C. Newspaper front page: a dense editorial grid of news, events and schemes. Rejected because it needs content BECCI has not supplied yet, and it gives no obvious first choice.

## System
- **Colour:** Institutional Blue `#0f2b5b` (950–100 scale), Gold `#d4a63a` for fills and on dark backgrounds, `#85610f` for gold text on light backgrounds (passes AA), warm paper neutrals `#f7f4ec`/`#efeadc`. Status colours always come with a text label and a shape cue (dot, diamond for closing soon, hollow ring for closed).
- **Type:** Fraunces (display) and Inter Tight (body), self-hosted through @fontsource. **This is a reversible fallback:** the client's previously named font was not supplied (CR §3.1). To swap it, change `--font-display` in `src/styles/global.css`.
- **Brand motif:** two facing Cs (blue = Community, gold = Commerce) crossed into an infinity form (`src/components/InfinityMark.astro`). **It is not the approved BECCI logo**, which was not supplied. The header uses a plain "BECCI" wordmark until the logo arrives. The motif appears in the hero, page banners, footer and the two C tiles (CR §3.3).
- **Hero animation:** a canvas animation. One particle starts circling, gathers speed and widens into a lemniscate while about 150 more particles join; then the Community/Commerce labels fade in (CR §4.1). Content can be used straight away. It pauses when off-screen or the tab is hidden, and reduced-motion users get the static motif instead.
- **Five-letter story:** an ordered list of buttons. Hover (fine pointer only), focus, click or tap opens one tile and resets the previous one. Arrow keys, Home and End move between tiles. The two Cs carry distinct labels, colours (blue vs gold) and a mini infinity that highlights their own half. On mobile the tiles become an accordion.
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
