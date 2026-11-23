# BECCI UX decision report (UXPeak+ as the quality standard)

23 Nov 2026. The visual direction stays Tines (Mobbin reference). UXPeak+ decides usability, hierarchy and conversion. The palette is unchanged.

## 1. What was actually accessed

| Source | Status |
|---|---|
| UXPeak MCP `list_courses` | 18 courses listed |
| `list_modules` for psychology-of-ui, ai-designs-premium, advanced-ui-refinement, forms-and-flows, design-filters | Read |
| `get_module` advanced-ui-refinement/stop-boxing-everything | Full lesson text read |
| `get_module` advanced-ui-refinement/readable-typography | Full lesson text read |
| `get_module` design-filters/effortless-filters | Full lesson text read |
| `get_module` forms-and-flows/forms-that-earn-the-click | Full lesson text read |
| `search_course_content` "empty state" | Excerpts from onboarding/empty-states, junior-vs-senior-ui/passive-to-active, psychology-of-ui/aesthetic-usability-effect, product-copy/buttons-that-get-clicked |
| `get_design_guidance` (mega-menu task) | Returned module references only, no rule text |
| `get_module` ai-designs-premium/why-ai-websites-look-the-same | **Returned empty text.** Not used. |
| MCP resources (`ListMcpResourcesTool`) | **None exposed** by the UXPeak server |
| UXPeak UI/UX Playbook PDF | **Not received in this session.** No PDF was attached or present in the repository. The playbook principles listed in the brief were applied as a checklist from the brief itself. |

## 2. Decisions

| # | Principle (source) | BECCI component | Decision | Reason | Screenshot |
|---|---|---|---|---|---|
| 1 | Stop boxing everything; blur is a distance signal; lift one thing (Advanced UI Refinement 2) | Page banners on every inner page | Removed blurred glow fields and gradient fills. Flat colour surface plus the Tines drawing grid. Spot tiles are now flat, outlined, with a hard offset shadow. | Wide blur signalled depth that nothing had. Flat surfaces read as deliberate and match the homepage. | 01, 02 |
| 2 | Lift one thing, not twenty (Advanced UI Refinement 2) | `.tile`, `.bento` | Gradient tiles became flat colour blocks. Only clickable tiles move on hover, with an offset shadow. Static tiles never lift. | Depth now means "you can open this". | 01, 04 |
| 3 | Clear step between levels; titles ~110% line height, text ~160%; 45–75 character lines (Advanced UI Refinement 4) | Section headings, body text site-wide | Section h2 raised to 32–52 px at weight 500 (1.7–2× body). Paragraph line height 1.6, headings 1.1. Paragraphs capped at 68ch. | Headings were too close to body size to read as a new level, and long lines made people lose their place. | 02, 08 |
| 4 | Empty states acknowledge, then invite; give the screen a verb (Onboarding: empty states; Junior vs Senior: passive to active) | `Pending` component, used on 14 states: news, events, knowledge, success stories, franchise, chapters, services, wings, leadership, contact, about, policies | Each state now has an icon, a label, a plain title and **one honest next step**: "Open the opportunity finder", "Ask BECCI about upcoming events", "Tell BECCI about your enterprise", "Ask about your State", "Tell us what you need". | A grey "nothing here" box is a dead end and reads as broken. Every action points to something that works today. | 01, 03 |
| 5 | Visual cues instead of plain lists (playbook, from brief) | Women's and Youth Wing "Who it is for" | Bullets became separated rows, each with a tick badge. | People scan for "is this me?". Each row is now a distinct target for the eye. | 04, 07 |
| 6 | Show the structure, not the prose; recognition over recall (Psychology of UI 4) | Membership "Who can join" | The two eligible lists are now two side-by-side option cards with a visible **or** between them. | The most common hesitation is "do I need to be on both lists?". The layout answers it before the text does. | 08 |
| 7 | Thumb-zone placement; name the result on the button; say what happens next (playbook; Forms & Flows 5) | New `MobileCTA` on Membership, Women's Wing, Youth Wing | A bottom action bar on phones: "Request a call" with one line on what to expect. It hides while the banner or the form itself is on screen, so it never covers the form. | The primary action was at the top or the end of a long page, out of thumb reach. | 06, 07 |
| 8 | Filter rules: applied chips with ×, counts per option, state in the URL, results announced to screen readers, 44 px targets (Design Filters 3) | Opportunity Finder | **Audited, no change needed.** The finder already has removable chips, option counts, URL state that survives Back, and an `aria-live` result count, and QA checks cover it. | Preserving working behaviour beats redesigning it. | — |
| 9 | Buttons look obviously clickable and consistent (Advanced UI Refinement 3) | `.btn` site-wide | Pill geometry everywhere, matching the header and homepage. Ghost buttons use the midnight ink instead of pale silver. | One button shape across the site, so the action is never ambiguous. | 02 |
| 10 | One typeface, three weights (Advanced UI Refinement 4) | Whole site | Kept New Black only. Headings 500, body 400, labels 600. | The client font carries every level. | — |

## 3. Page psychology (summary)

| Page | Visitor | First need | Hesitation removed | Easiest action |
|---|---|---|---|---|
| Home | First-time visitor, any audience | "Is this for me, and what can I do here?" | Audience cards say "BECCI for…" | Search the finder |
| Opportunity Finder | Entrepreneur, student, job seeker | Is it open, can I apply, by when | Status, scope badge and deadline on every row | Filter, then open the official link |
| Membership | Prospective member | Am I eligible? | Either/or eligibility cards; an honest "not open yet" | Request a call (thumb bar on phones) |
| Women's and Youth Wing | Women founders; students | Is this group for me? | Ticked "who it is for" rows | Join the wing (thumb bar) |
| Events, News, Knowledge, Stories | Returning visitors | Is anything new? | Honest empty state with a useful next step | The linked next step |
| Contact | Anyone | Who do I talk to? | Route tiles by purpose | Send an enquiry |

## 4. Tests

- Browser QA: 33 of 33 checks pass. Covered: finder filters and URL state, keyboard mega-menu, reduced motion, mobile menu and filter sheet, no horizontal overflow.
- `astro check`: 0 errors. This includes three earlier icon type errors, now fixed.
- `npm test`: 15 of 15 pass.
