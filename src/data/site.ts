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
      { label: 'Government schemes', href: '/schemes', icon: 'schemes', desc: 'Central and State schemes' },
      { label: 'Tenders and procurement', href: '/opportunities/tenders', icon: 'tenders', desc: 'Bids and supplier registration' },
      { label: 'Scholarships', href: '/opportunities/scholarships', icon: 'scholarship', desc: 'School, college and higher study' },
      { label: 'Jobs and internships', href: '/opportunities/jobs', icon: 'jobs', desc: 'Including apprenticeships' },
      { label: 'Loans and funding', href: '/opportunities/finance', icon: 'funding', desc: 'Credit, grants and subsidies' },
    ],
    more: [
      { label: 'Franchise and enterprise', href: '/franchise' },
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

export interface Person { name: string; role: string; affiliation?: string; background?: string; intro?: string; photo?: string; links?: { label: string; url: string }[] }
export const advisors: Person[] = [];
export const leadershipGroups: { title: string; people: Person[] }[] = [
  { title: 'Advisors', people: [] },
  { title: 'National Committee', people: [] },
  { title: 'State Committees', people: [] },
  { title: 'Wing Presidents', people: [] },
  { title: 'Sector Committees', people: [] },
];

export const testimonials: { quote: string; name: string; context: string }[] = [];
export const events: { slug: string; title: string; date: string; venue: string; type: string; summary: string; registerUrl?: string }[] = [];
export const news: { title: string; date: string; summary: string; url?: string }[] = [];
export const stories: { name: string; business: string; summary: string }[] = [];
export const resources: { title: string; type: string; url: string; summary: string }[] = [];
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
