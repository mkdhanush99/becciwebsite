# BECCI public website: content checklist

Content audit and rewrite, 23 November 2026. Sources: *Project Requirements Document* (PRD) and *Website Critique Review* (CR) supplied by BECCI.

**Rules applied on every page**
- Nothing is invented: no statistics, history, people, testimonials, events, partners, fees, dates or verification labels.
- Where approved content is missing, the page says so in one quiet line, and the item is listed below.
- Planned features are labelled as planned. Only what works today is described as available.

## Site-wide

| | |
|---|---|
| **Content completed** | Identity statement (CR §1) and founding philosophy (CR §4.1), held once in `src/data/site.ts` and reused. The brand promise "Building Businesses • Building Bharat" and the headline "Where Community Meets Commerce" are kept. |
| **Content improved** | Visitor paths now name entrepreneurs, business owners and MSMEs, students, job seekers, professionals and institutions. Each describes what that visitor can do first. |
| **Unsupported claims removed** | Wording that implied service providers or partner institutions are already in place. |
| **Missing approved information** | Logo and emblem artwork, official contact details, social media URLs, form delivery address (`PUBLIC_FORM_ENDPOINT`), photographs. |

## Page by page

### Home `/`
- **Completed**
  - The hero states the headline, the supporting line and a plain identity sentence: "BECCI is the Bahujan Entrepreneurs Chamber for Commerce & Industry, an OBC-exclusive national Chamber of Commerce", plus what the website is for.
  - The statement band explains the Community + Commerce philosophy.
  - "What BECCI can do for you" answers the four visitor questions from CR §20. Each answer carries a status: Available now, Being set up, or Request a call.
  - The opportunities section explains the three category rules (Backward Classes only / documented OBC/BC preference / open to all eligible). It says plainly that not every listing is OBC-only.
- **Improved**
  - Six audience paths, each with a specific first step.
  - The five-letter story keeps the approved statements word for word. It adds an introduction that reads the letters as one journey, the full chapter name, and a link to where each stage lives on the site.
  - Membership and partnership calls to action.
  - Highlight links: Schemes, Franchise, Services, Events, Knowledge, Success Stories, Biz Connect, Marketplace.
- **Added later (impact statistics)**
  - A colour-blocked statistics section using only NBCFDC's official 2020-25 disbursement statement.
  - Every figure shows its measure, geography, period and source.
  - Derived figures (crore conversions, the AP+TS share) are labelled.
- **Unsupported claims removed**
  - "Build capability through services", which implied services already exist. Replaced with "Being set up".
- **Missing approved information**
  - Advisors' photographs and profiles (CR §4.3). The section stays hidden until supplied.
  - Testimonials (CR §4.4). Hidden until supplied.
  - Approved public statistics (PRD §12). Hidden until supplied.

### About `/about`
- **Completed**
  - What the name means, word by word.
  - Why BECCI exists.
  - Purpose (CR §1 wording).
  - What BECCI does, in six areas, each with an honest status.
  - Whom we serve, with the membership basis.
  - Entrepreneur development journey: the five stages from PRD §14.3, with what helps at each stage.
  - Structure and reach: collective governance, chapters, sectors, Telangana and Andhra Pradesh beginnings and national ambition.
  - Why partnerships matter.
  - Founder and founding vision.
- **Improved**
  - The empty photo panel is replaced by the name breakdown until a photograph arrives.
- **Unsupported claims removed**
  - None found.
- **Missing approved information**
  - Vision statement.
  - Mission statement.
  - Objectives.
  - Organisation history and background.
  - Founder's name, photograph, background and founding statement.
  - About photographs.

### Leadership & Governance `/leadership`
- **Completed**
  - Collective governance explained.
  - The responsibilities of Advisors, National Committee, State Committees, Wing Presidents and Sector Committees.
  - "About these profiles": what each profile will show, publication only with approval and consent, no personal phone numbers, how new positions are added.
- **Improved**
  - More precise role descriptions.
- **Unsupported claims removed**
  - None. No names or designations are invented.
- **Missing approved information**
  - All names, photographs, designations, backgrounds and professional links.
  - Office-bearer titles (PRD §5.4).
  - Former leadership.

### Wings, Sectors & Chapters `/wings`
- **Completed**
  - Three ways BECCI is organised.
  - The wings, with their audiences.
  - Ten sector committees plus "Other industries", each with who belongs.
  - The National → State → District → City structure and what each level does.
  - Regional presence (Telangana and Andhra Pradesh first).
  - How to take part, in three steps.
- **Improved**
  - The previous version was a bare list. It now explains purpose and participation.
- **Unsupported claims removed**
  - None.
- **Missing approved information**
  - The list of chapters and their official contacts.
  - Sector committee members.
  - Any additional wings.

### Women's Wing `/wings/women`
- **Completed**
  - Who it is for, in four groups.
  - Why a wing of its own.
  - What you can use today: loans and funding, the Stand-Up India official portal (marked as not yet verified by BECCI), and the Knowledge Centre.
  - Taking part.
  - Invite someone.
- **Improved**
  - The content is distinct from the Youth Wing. It previously duplicated the same placeholder text.
- **Unsupported claims removed**
  - A general claim about barriers women face. The page now states the wing's purpose only.
- **Missing approved information**
  - Objectives, office bearers, programmes and events.

### Youth Wing `/wings/youth`
- **Completed**
  - Who it is for: students, job seekers, young professionals and first-time founders.
  - Why start young, linked to the B of the story.
  - What you can use today: verified scholarships, the job, internship and apprenticeship portals, and funding for a first business.
  - Taking part.
  - Invite someone.
- **Improved**
  - The content is distinct from the Women's Wing.
- **Unsupported claims removed**
  - None.
- **Missing approved information**
  - Objectives, office bearers, programmes and events.
  - Minimum membership age (PRD §3.5).

### Membership `/membership`
- **Completed**
  - Why become a member.
  - Who can join: either the Central OBC list or a State BC/OBC list, with the two kept separate.
  - What is available today versus what is planned, in two clearly separated lists.
  - The three proposed categories.
  - How joining will work: the five-step process from PRD §3.2, labelled as planned.
  - Request a call.
- **Improved**
  - Clearer joining pathway.
  - Member features (directory, referrals, suggestions, Biz Connect, Marketplace) are now listed as planned.
- **Unsupported claims removed**
  - "The membership team can guide you on schemes and services". Narrowed to what the team does today.
- **Missing approved information**
  - Fees, renewal periods and final benefits for each category.
  - The online application link (Join).
  - The Member Login link.

### Opportunities `/opportunities`, `/schemes`, `/opportunities/{tenders,jobs,scholarships,finance}`
- **Completed**
  - Every finder page carries a legend that explains the three category rules and the separation of the Central OBC and State BC/OBC lists.
  - The hub introduction lists every category, including apprenticeships, and every field a listing shows.
  - Links to Franchise & Enterprise and to "How we check".
- **Improved**
  - Category introductions now say what is covered and where reservation or preference rules come from.
- **Already in place and checked**
  - Each record shows:
    - title
    - issuing authority
    - category
    - geography
    - who can apply
    - OBC/BC rule and the list it refers to
    - benefits
    - documents ("Not stated by source" when absent)
    - deadline or "No deadline published"
    - official application and source links
    - publication date
    - last fetched
    - last verified
- **Unsupported claims removed**
  - None. All 5 records remain verified against official pages.
- **Missing approved information**
  - More verified records, especially for tenders and jobs, which currently link to official portals only.

### Franchise & Enterprise `/franchise`
- **Completed**
  - Who it is for.
  - Kinds of opportunity.
  - What every listing will tell you: model, investment, operations, capabilities, contact.
  - How to propose an opportunity.
- **Improved**
  - The page explains why franchising matters. It was previously a bare list.
- **Unsupported claims removed**
  - None. No listings are invented.
- **Missing approved information**
  - Reviewed franchise and enterprise listings.

### Services `/services`
- **Completed**
  - Four service groups (Finance; Advice and mentorship; Registration and compliance; Accounts and planning) covering all 13 CR §16 categories.
  - How BECCI's facilitation role will work.
  - Service request form.
- **Improved**
  - The page now says plainly that nothing is on offer yet.
- **Unsupported claims removed**
  - The implication that services are available now.
- **Missing approved information**
  - Service provider names and the terms of BECCI's facilitation.

### Events `/events`
- **Completed**
  - Purpose of events.
  - Upcoming and past events, with honest empty states.
  - Six event types, each with a one-line description.
  - Note on members-only events (PRD §5.6).
- **Improved**
  - Each event will show date, time, venue, speakers and registration.
- **Unsupported claims removed**
  - None. No events are invented.
- **Missing approved information**
  - Events, venues, speakers, registration links and archive media.

### News Desk `/news`
- **Completed**
  - Purpose and topics.
  - Honest empty state.
  - How the News Desk differs from the Knowledge Centre.
- **Improved**
  - Clearer introduction.
- **Unsupported claims removed**
  - None.
- **Missing approved information**
  - Announcements.

### Knowledge Centre `/knowledge`
- **Completed**
  - Purpose.
  - Categories.
  - Search, which turns on when resources exist.
  - "Useful today" links to three existing explainers.
- **Improved**
  - The empty page now offers something useful straight away.
- **Unsupported claims removed**
  - None.
- **Missing approved information**
  - Guides, articles, reports and videos.

### Success Stories `/success-stories`
- **Completed**
  - Purpose.
  - Kinds of story.
  - What each story includes.
  - Consent and fact-check rule.
  - "Have a story to share?" call to action.
- **Improved**
  - Clear invitation for entrepreneurs to share their stories.
- **Unsupported claims removed**
  - None. No stories or testimonials are invented.
- **Missing approved information**
  - Consented stories with photographs.

### Partner with BECCI `/partnerships`
- **Completed**
  - Why partner with BECCI.
  - Who BECCI works with (8 institution types).
  - Six areas of collaboration.
  - What a good proposal includes.
  - Proposal form.
- **Improved**
  - A stronger opening that explains what partners gain.
- **Unsupported claims removed**
  - A sentence implying an existing member base across both States. It now reads "organising… beginning in Telangana and Andhra Pradesh".
- **Missing approved information**
  - Named partners (only once agreements are confirmed).

### Contact `/contact`
- **Completed**
  - "Who to contact for what", routing membership, partnership, services and scheme questions.
  - Official contact details.
  - General enquiry form.
- **Improved**
  - The visitor reaches the right channel faster.
- **Unsupported claims removed**
  - None.
- **Missing approved information**
  - Official email, office phone and address.
  - Form delivery address.

### Biz Connect `/biz-connect` and Marketplace `/marketplace`
- **Completed**
  - Public explainers with honest "Coming later" status, planned features, how each relates to membership, and what to do until then.
- **Improved**
  - Plainer opening lines.
- **Unsupported claims removed**
  - None. No signup is simulated.
- **Missing approved information**
  - Launch dates.
  - Biz Connect fee structure.

### Privacy Policy and Terms `/policies`
- **Completed**
  - A plain statement of what the site does today: no accounts, no tracking, forms not yet connected.
- **Improved**
  - None.
- **Unsupported claims removed**
  - None.
- **Missing approved information**
  - The legally reviewed Privacy Policy and Terms of use.

### 404 page
- **Completed**
  - Two ways back: the homepage and the opportunity finder.

## Remaining client inputs, in priority order

1. **Contact details and form delivery address.** Today no form can reach BECCI.
2. **Vision, mission, objectives and organisation history.** Needed on the About page.
3. **Leadership and advisor profiles.** Name, photograph, designation, background, introduction and links, each with consent.
4. **Founder profile and founding statement.**
5. **Membership details.**
   - fees, renewals, minimum age and final benefits
   - the Join link
   - the Member Login link
6. **Women's Wing and Youth Wing.** Objectives, office bearers and first programmes.
7. **Chapters.** The list, with official contacts.
8. **Content for the empty sections.** Events, news, Knowledge Centre resources, success stories and testimonials, all with consent.
9. **Service providers.** Names, and the terms of BECCI's facilitation.
10. **Partnerships and franchise listings.** Confirmed partnerships and reviewed franchise listings.
11. **Policies and links.** Privacy Policy, Terms of use and social media URLs.
12. **Public statistics.** Approved figures, each with its period and basis (PRD §12).
13. **Brand assets and photographs.** Final logo and emblem artwork, and photographs.
