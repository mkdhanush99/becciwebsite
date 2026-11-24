// Site-wide content and destinations.
// Empty arrays / null values mean "approved content not yet supplied". Pages render an
// honest placeholder in that case, so adding content never requires a redesign.

export const site = {
  name: 'BECCI',
  fullName: 'Bahujan Entrepreneurs Chamber for Commerce & Industry',
  promise: 'Building Businesses • Building Bharat',
  headline: 'Where Community Meets Commerce',
  supporting: 'Connecting Bahujan entrepreneurs, strengthening businesses and creating opportunities for inclusive economic growth.',
  // Identity statement (Website Critique Review §1, client-approved wording)
  identity: 'BECCI is an OBC-exclusive national Chamber of Commerce dedicated to strengthening entrepreneurship, facilitating business connections, promoting enterprise development and creating economic opportunities for Bahujan communities.',
  // Founding philosophy (Critique Review §4.1 and §21)
  philosophy: 'The two Cs in BECCI stand for Community and Commerce. Until now, these two essential elements have not been sufficiently connected. BECCI brings them together, creating a continuous ecosystem of opportunity, collaboration and economic growth.',
  closing: 'Where connections turn into businesses, businesses turn into opportunities, and opportunities contribute to building Bharat.',
  origin: 'BECCI began its work in Telangana and Andhra Pradesh and is building towards a national presence.',
};

// Approved external destinations. null = not yet supplied by BECCI.
export const destinations = {
  joinApplication: null as string | null, // online membership application
  memberLogin: null as string | null, // member portal login
  formEndpoint: (import.meta.env.PUBLIC_FORM_ENDPOINT as string | undefined) || null,
  email: null as string | null,
  phone: null as string | null,
  address: null as string | null,
};

export const socials: { label: string; url: string }[] = []; // official URLs to be supplied (PRD §21)

export interface NavLink { label: string; href: string; note?: string; icon?: string; desc?: string }
export type NavTone = 'royal' | 'cyan' | 'midnight' | 'sky';
export interface NavGroup {
  label: string; href: string; intro?: string; tone?: NavTone; illo?: 'finder' | 'chamber' | 'members' | 'updates';
  children?: NavLink[]; more?: NavLink[];
  feature?: { eyebrow: string; title: string; text: string; href: string; cta: string };
}

// Mega-navigation: four visual panels (client brief, Nov 2026). Each panel has its own
// colour, illustration and feature card; "more" holds the secondary links for that area.
export const nav: NavGroup[] = [
  {
    label: 'Opportunities', href: '/opportunities', tone: 'royal', illo: 'finder',
    intro: 'Schemes, tenders, scholarships, jobs and funding, each checked against its official source.',
    children: [
      { label: 'Government schemes', href: '/schemes', icon: 'schemes', desc: 'Explained, with official links' },
      { label: 'Tenders and procurement', href: '/opportunities/tenders', icon: 'tenders', desc: 'Bids and supplier registration' },
      { label: 'Scholarships', href: '/opportunities/scholarships', icon: 'scholarship', desc: 'School, college and higher study' },
      { label: 'Jobs and internships', href: '/opportunities/jobs', icon: 'jobs', desc: 'Including apprenticeships' },
      { label: 'Loans and funding', href: '/opportunities/finance', icon: 'funding', desc: 'Credit, grants and subsidies' },
      { label: 'Business opportunities', href: '/franchise', icon: 'franchise', desc: 'Franchise and enterprise models' },
    ],
    more: [
      { label: 'All opportunities', href: '/opportunities' },
      { label: 'How we check listings', href: '/opportunities/about-data' },
    ],
    feature: { eyebrow: 'Opportunity Finder', title: 'Search every verified listing', text: 'Filter by category, State and who can apply. No account needed.', href: '/opportunities', cta: 'Open the finder' },
  },
  {
    label: 'Chamber', href: '/about', tone: 'cyan', illo: 'chamber',
    intro: 'Who BECCI is, who leads it and how members are organised.',
    children: [
      { label: 'About BECCI', href: '/about', icon: 'community', desc: 'Purpose, story and structure' },
      { label: 'Leadership', href: '/leadership', icon: 'leadership', desc: 'Who is accountable' },
      { label: "Women's Wing", href: '/wings/women', icon: 'women', desc: 'For women in business' },
      { label: 'Youth Wing', href: '/wings/youth', icon: 'youth', desc: 'Students and first-time founders' },
      { label: 'Chapters and sectors', href: '/wings', icon: 'chapters', desc: 'State chapters, sector committees' },
    ],
    more: [
      { label: 'Partner with BECCI', href: '/partnerships' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
    feature: { eyebrow: 'Our story', title: 'Where Community Meets Commerce', text: 'The five letters of BECCI, read as one entrepreneur’s journey.', href: '/about', cta: 'Read the story' },
  },
  {
    label: 'Membership', href: '/membership', tone: 'midnight', illo: 'members',
    intro: 'For Bahujan entrepreneurs, professionals and students on a Central or State OBC/BC list.',
    children: [
      { label: 'Membership information', href: '/membership', icon: 'membership', desc: 'Who can join and the categories' },
      { label: 'Member benefits', href: '/membership#benefits', icon: 'entrepreneur', desc: 'What membership gives you' },
      { label: 'Join BECCI', href: '/membership#join', icon: 'arrow', desc: 'Start with a call from the team' },
    ],
    more: [
      { label: 'Member login', href: '/membership#member-login' },
    ],
    feature: { eyebrow: 'Join BECCI', title: 'Become part of the chamber', text: 'Request a call and the membership team will explain each category.', href: '/membership#join', cta: 'Request a call' },
  },
  {
    label: 'Updates', href: '/news', tone: 'sky', illo: 'updates',
    intro: 'What the chamber is announcing, organising and learning.',
    children: [
      { label: 'News', href: '/news', icon: 'news', desc: 'Announcements from BECCI' },
      { label: 'Events', href: '/events', icon: 'events', desc: 'Meetings, workshops, conferences' },
      { label: 'Success stories', href: '/success-stories', icon: 'stories', desc: 'Entrepreneurs who made it work' },
      { label: 'Knowledge Centre', href: '/knowledge', icon: 'knowledge', desc: 'Guides and regulatory updates' },
    ],
    more: [
      { label: 'Biz Connect', href: '/biz-connect', note: 'Coming later' },
      { label: 'Marketplace', href: '/marketplace', note: 'Coming later' },
    ],
    feature: { eyebrow: 'Event calendar', title: 'Meet the chamber in person', text: 'Dates are published here once BECCI confirms them.', href: '/events', cta: 'See the calendar' },
  },
];

export const story = [
  { letter: 'B', name: 'Beginning of an Entrepreneurial Journey', title: 'The Beginning', text: 'Every great business begins with a person, an idea and a dream. The journey starts with the aspirations, skills and talents of our people.', link: { label: 'Scholarships, jobs and first steps', href: '/opportunities/scholarships' } },
  { letter: 'E', name: 'Encouragement to New Enterprises', title: 'From Ideas to Enterprises', text: 'Every dream deserves encouragement. We help aspiring entrepreneurs turn their ideas, skills and ambitions into enterprises.', link: { label: 'Loans, schemes and services', href: '/opportunities/finance' } },
  { letter: 'C', name: 'Community Collaboration', title: 'Strength in Collaboration', text: 'Entrepreneurs grow stronger when they come together. BECCI brings the community onto one platform to connect, collaborate, share knowledge and support one another.', link: { label: 'Wings, sectors and chapters', href: '/wings' } },
  { letter: 'C', name: 'Commerce', title: 'Connecting Community with Commerce', text: 'Collaboration creates opportunities. Connections turn into business referrals, partnerships, markets and meaningful commercial relationships.', link: { label: 'Tenders, Biz Connect and Marketplace', href: '/opportunities/tenders' } },
  { letter: 'I', name: 'Impact', title: 'Creating Lasting Impact', text: 'Every enterprise that grows and every opportunity created contributes to stronger communities, economic progress and a more prosperous Bharat.', link: { label: 'Success stories', href: '/success-stories' } },
];

// ─────────────────────────────────────────────────────────────────────────────
// SAMPLE CONTENT. Every entry marked `sample: true` is a placeholder made for layout review:
// bracketed names, illustrative AI photographs (public/images/sample), no real people or facts.
// Replace each with approved BECCI content, or set SHOW_SAMPLES to false to hide all of them at once.
export const SHOW_SAMPLES = true;
const keep = <T extends { sample?: boolean }>(xs: T[]) => xs.filter((x) => SHOW_SAMPLES || !x.sample);
const img = (n: string) => `/images/sample/${n}.webp`;

export interface Person { name: string; role: string; affiliation?: string; background?: string; intro?: string; photo?: string; links?: { label: string; url: string }[]; sample?: boolean }
const sp = (photo: string, role: string, extra: Partial<Person> = {}): Person => ({
  name: '[Name]', role, affiliation: '[Organisation]', photo: img(photo), sample: true,
  background: '[Professional background: years of experience, sectors, institutions served.]',
  intro: '[A short introduction in their own words, approved by them before publishing.]', ...extra,
});
export const advisors: Person[] = keep([
  sp('person-1', 'Advisor · [Area of expertise]'),
  sp('person-2', 'Advisor · [Area of expertise]'),
  sp('person-8', 'Advisor · [Area of expertise]'),
  sp('person-4', 'Advisor · [Area of expertise]'),
]);
export const leadershipGroups: { title: string; people: Person[] }[] = [
  { title: 'Advisors', people: advisors },
  { title: 'National Committee', people: keep([sp('person-5', '[President], National Committee'), sp('person-3', '[General Secretary], National Committee')]) },
  { title: 'State Committees', people: keep([sp('person-3', '[President], Telangana State Committee'), sp('person-5', '[President], Andhra Pradesh State Committee')]) },
  { title: 'Wings Presidents', people: keep([sp('person-6', "President, Women's Wing"), sp('person-7', 'President, Youth Wing')]) },
  { title: 'Sector Committees', people: keep([sp('person-4', 'Chair, [Sector] Committee')]) },
  { title: 'Other Officially Constituted Positions', people: [] },
];

export const testimonials: { quote: string; name: string; context: string; photo?: string; sample?: boolean }[] = keep([
  { quote: '[Sample testimonial. A member describes, in their own words, how BECCI helped: a scheme they found, a connection that led to business, or support they received.]', name: '[Member name]', context: '[Founder, business, city]', photo: img('person-1'), sample: true },
  { quote: '[Sample testimonial. What changed for their enterprise, in one or two lines.]', name: '[Member name]', context: '[Proprietor, business, district]', photo: img('person-8'), sample: true },
  { quote: '[Sample testimonial from a first-generation entrepreneur about a connection made through BECCI.]', name: '[Member name]', context: '[Director, business, city]', photo: img('person-2'), sample: true },
  { quote: '[Sample testimonial from a partner institution, published only with its written consent.]', name: '[Partner name]', context: '[Designation, institution]', photo: img('person-4'), sample: true },
  { quote: '[Sample testimonial from a Women\'s Wing member.]', name: '[Member name]', context: '[Founder, business, city]', photo: img('person-6'), sample: true },
  { quote: '[Sample testimonial from a Youth Wing member or student entrepreneur.]', name: '[Member name]', context: '[Founder, startup, city]', photo: img('person-7'), sample: true },
  { quote: '[Sample testimonial. Keep it short, specific and true: the scheme, tender, referral or guidance that made a difference, and the result it led to for the business.]', name: '[Member name]', context: '[Managing Partner, business, city]', photo: img('person-3'), sample: true },
]);
// Events. Each entry gets a detail page at /events/<slug>. Add only events BECCI has confirmed.
export interface BecciEvent {
  slug: string; title: string; date: string; // ISO yyyy-mm-dd
  time?: string; venue: string; city?: string; type: string; summary: string;
  description?: string[]; speakers?: { name: string; role?: string }[];
  registerUrl?: string; audience?: 'Public' | 'Members only';
  report?: string; photos?: { src: string; alt: string }[]; videoUrl?: string; // for past events
  image?: string; sample?: boolean;
}
export const events: BecciEvent[] = keep([
  { slug: 'sample-networking-meet', title: '[Sample] Business networking meet', date: '2027-01-16', time: '[Time]', venue: '[Venue]', city: 'Hyderabad', type: 'Business networking meeting', audience: 'Public', image: img('event-networking'), sample: true,
    summary: '[Sample event. Entrepreneurs meet to introduce their businesses and pass on referrals.]',
    description: ['[Sample description: who the event is for, what happens, and what attendees take away.]', '[Agenda, registration fee if any, and what to bring.]'],
    speakers: [{ name: '[Speaker name]', role: '[Designation, organisation]' }] },
  { slug: 'sample-scheme-workshop', title: '[Sample] Workshop: applying for government schemes', date: '2027-02-06', time: '[Time]', venue: '[Venue]', city: 'Vijayawada', type: 'Workshop', audience: 'Public', image: img('event-workshop'), sample: true,
    summary: '[Sample event. A practical session on preparing documents and applying for loan and subsidy schemes.]',
    description: ['[Sample description of the workshop, the trainer and the schemes covered.]'],
    speakers: [{ name: '[Trainer name]', role: '[Designation]' }] },
  { slug: 'sample-past-seminar', title: '[Sample] Past seminar', date: '2026-10-18', venue: '[Venue]', city: 'Hyderabad', type: 'Seminar', image: img('event-workshop'), sample: true,
    summary: '[Sample past event, kept in the archive with its report and photographs.]',
    report: '[Sample report: who attended, what was discussed and what was agreed.]',
    photos: [{ src: img('event-workshop'), alt: 'Sample photograph: participants at a seminar' }, { src: img('event-networking'), alt: 'Sample photograph: networking after the seminar' }] },
]);
export const news: { title: string; date: string; summary: string; url?: string; sample?: boolean }[] = keep([
  { title: '[Sample] BECCI announcement headline', date: '2026-11-20', summary: '[Sample announcement. One or two sentences on what was announced and what it means for members.]', sample: true },
  { title: '[Sample] Scheme update headline', date: '2026-11-12', summary: '[Sample scheme or government update, with a link to the official notice.]', sample: true },
  { title: '[Sample] Programme news headline', date: '2026-11-02', summary: '[Sample news about a BECCI programme or wing activity.]', sample: true },
]);
export interface Story { name: string; business: string; summary: string; kind?: string; photo?: string; started?: string; challenge?: string; achievement?: string; lesson?: string; sample?: boolean }
export const stories: Story[] = keep([
  { name: '[Entrepreneur name]', business: '[Garment boutique, city]', kind: 'Women entrepreneurs', photo: img('story-boutique'), sample: true,
    summary: '[Sample story. How a home tailoring business grew into a boutique with its own staff.]', started: '[Where they started]', challenge: '[What stood in the way]', achievement: '[What they achieved]', lesson: '[What others can learn]' },
  { name: '[Founder name]', business: '[Technology startup, city]', kind: 'Youth entrepreneurs', photo: img('story-startup'), sample: true,
    summary: '[Sample story. A first-generation founder who built a small software company.]', started: '[Where they started]', challenge: '[What stood in the way]', achievement: '[What they achieved]', lesson: '[What others can learn]' },
  { name: '[Artisan name]', business: '[Pottery workshop, district]', kind: 'Traditional businesses modernised', photo: img('story-pottery'), sample: true,
    summary: '[Sample story. A traditional potter who modernised the workshop and now sells online.]', started: '[Where they started]', challenge: '[What stood in the way]', achievement: '[What they achieved]', lesson: '[What others can learn]' },
]);
// Franchise and enterprise opportunities (Critique §13).
export interface FranchiseListing { title: string; model: string; investment: string; operations: string; capabilities: string; contact: string; image?: string; sample?: boolean }
export const franchiseListings: FranchiseListing[] = keep([
  { title: '[Sample] Quick-service food outlet franchise', model: '[Franchise of a regional food brand: outlet, menu and supply chain provided]', investment: '[Investment range, as stated by the franchisor]', operations: '[Space, staff, hours and equipment needed]', capabilities: '[Experience or skills expected of the owner]', contact: '[Franchisor contact, after BECCI review]', image: img('franchise-food'), sample: true },
  { title: '[Sample] Mobile and electronics service centre', model: '[Ready-to-start service business with training and parts supply]', investment: '[Investment range]', operations: '[Space, staff and equipment needed]', capabilities: '[Technical training provided or required]', contact: '[Contact, after BECCI review]', image: img('franchise-service'), sample: true },
]);
// Wing pages (Critique §8): office bearers and programmes.
export const wingContent: Record<'women' | 'youth', { bearers: Person[]; programmes: { title: string; text: string; sample?: boolean }[] }> = {
  women: {
    bearers: keep([sp('person-6', "President, Women's Wing"), sp('person-2', "[Vice President], Women's Wing")]),
    programmes: keep([
      { title: '[Sample] Women entrepreneurs’ meet', text: '[Sample programme description: format, frequency and who can join.]', sample: true },
      { title: '[Sample] Finance and schemes clinic', text: '[Sample programme description.]', sample: true },
    ]),
  },
  youth: {
    bearers: keep([sp('person-7', 'President, Youth Wing'), sp('person-3', '[Vice President], Youth Wing')]),
    programmes: keep([
      { title: '[Sample] Founder mentoring circle', text: '[Sample programme description: students and young founders paired with experienced members.]', sample: true },
      { title: '[Sample] Campus entrepreneurship talks', text: '[Sample programme description.]', sample: true },
    ]),
  },
};
export const resources: { title: string; type: string; url: string; summary: string; sample?: boolean }[] = keep([
  { title: '[Sample] Article: how to prepare a project report', type: 'Business Articles', url: '/knowledge', summary: '[Sample article summary.]', sample: true },
  { title: '[Sample] MSME update: change in registration rules', type: 'MSME Updates', url: '/knowledge', summary: '[Sample update summary, with a link to the official notification.]', sample: true },
  { title: '[Sample] Video: interview with a first-generation entrepreneur', type: 'Videos', url: '/knowledge', summary: '[Sample video description.]', sample: true },
]);
export const chapters: { name: string; level: 'National' | 'State' | 'District' | 'City'; contact?: string }[] = [];
export const stats: { label: string; value: string; period: string; basis: string }[] = [];

export const sectors = [
  'Manufacturing', 'Trading and Distribution', 'Services', 'Healthcare', 'Education and Training',
  'Agriculture and Allied Activities', 'IT and Technology', 'Construction and Infrastructure',
  'Finance and Professional Services', 'Hospitality and Tourism', 'Other industries',
];

export const serviceCategories = [
  'Business Loans', 'Insurance', 'Bank Accounts', 'Credit Cards', 'Business Consultancy', 'Business Advisory',
  'Mentorship', 'Project Report Preparation', 'Tax Filing and Compliance', 'Accounting and Financial Services',
  'Business Registration Assistance', 'Legal and Regulatory Guidance', 'Other Professional Services',
];

// Service providers (Critique §16). Add only providers BECCI has an agreed arrangement with.
// `facilitation` says plainly what BECCI does (introduces, helps prepare, negotiated terms) and what it does not.
export const serviceProviders: { name: string; service: string; url?: string; facilitation: string; sample?: boolean }[] = keep([
  { name: '[Sample] [Bank name]', service: 'Business loans and bank accounts', facilitation: '[Introduces members and helps them prepare documents; the bank decides on loans.]', sample: true },
  { name: '[Sample] [Chartered accountancy firm]', service: 'Tax filing, accounting and compliance', facilitation: '[Introduces members; fees are agreed directly with the firm.]', sample: true },
]);

export const collaborators = [
  'Government Departments', 'Banks and Financial Institutions', 'MSME Organisations', 'Industry Associations',
  'Educational Institutions', 'Incubators and Accelerators', 'Corporates', 'Export Promotion Organisations',
];

// Visitor pathways (PRD §1: existing and aspiring entrepreneurs, professionals, students,
// first-generation business owners; plus job seekers and institutions).
export const audiences = [
  { who: 'Aspiring entrepreneurs', icon: 'entrepreneur', need: 'Turn an idea into a first business: loans, schemes and the documents you will need.', href: '/opportunities/finance' },
  { who: 'Business owners and MSMEs', icon: 'tenders', need: 'Tenders, supplier registration, credit and support to grow an existing enterprise.', href: '/opportunities/tenders' },
  { who: 'Students', icon: 'scholarship', need: 'Scholarships for school, college and higher studies, with the category rule spelt out.', href: '/opportunities/scholarships' },
  { who: 'Job seekers', icon: 'jobs', need: 'Official job, internship and apprenticeship portals, checked and linked.', href: '/opportunities/jobs' },
  { who: 'Professionals', icon: 'community', need: 'Join the chamber, its wings and sector committees, and put your experience to work.', href: '/wings' },
  { who: 'Institutions and partners', icon: 'partnership', need: 'Banks, departments, colleges and industry bodies working with BECCI.', href: '/partnerships' },
];
