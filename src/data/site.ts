// Site-wide content and destinations.
// Empty arrays / null values mean "approved content not yet supplied". Pages render an
// honest placeholder in that case, so adding content never requires a redesign.

export const site = {
  name: 'BECCI',
  fullName: 'Bahujan Entrepreneurs Chamber for Commerce & Industry',
  promise: 'Building Businesses • Building Bharat',
  headline: 'Where Community Meets Commerce',
  supporting: 'Connecting Bahujan entrepreneurs, strengthening businesses and creating opportunities for inclusive economic growth.',
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

export interface NavGroup { label: string; href: string; children?: { label: string; href: string; note?: string }[] }

export const nav: NavGroup[] = [
  {
    label: 'Opportunities', href: '/opportunities', children: [
      { label: 'Government Schemes', href: '/schemes' },
      { label: 'Tenders & Procurement', href: '/opportunities/tenders' },
      { label: 'Jobs & Internships', href: '/opportunities/jobs' },
      { label: 'Scholarships', href: '/opportunities/scholarships' },
      { label: 'Loans & Funding', href: '/opportunities/finance' },
      { label: 'Franchise & Enterprise', href: '/franchise' },
      { label: 'Services', href: '/services' },
    ],
  },
  {
    label: 'Chamber', href: '/about', children: [
      { label: 'About BECCI', href: '/about' },
      { label: 'Leadership & Governance', href: '/leadership' },
      { label: 'Wings, Sectors & Chapters', href: '/wings' },
      { label: "Women's Wing", href: '/wings/women' },
      { label: 'Youth Wing', href: '/wings/youth' },
      { label: 'Success Stories', href: '/success-stories' },
    ],
  },
  {
    label: 'Membership', href: '/membership', children: [
      { label: 'Membership', href: '/membership' },
      { label: 'Partner with BECCI', href: '/partnerships' },
      { label: 'Biz Connect', href: '/biz-connect', note: 'Coming later' },
      { label: 'Marketplace', href: '/marketplace', note: 'Coming later' },
    ],
  },
  {
    label: 'Updates', href: '/events', children: [
      { label: 'Event Calendar', href: '/events' },
      { label: 'News Desk', href: '/news' },
      { label: 'Knowledge Centre', href: '/knowledge' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

export const story = [
  { letter: 'B', name: 'Beginning of an Entrepreneurial Journey', title: 'The Beginning', text: 'Every great business begins with a person, an idea and a dream. The journey starts with the aspirations, skills and talents of our people.' },
  { letter: 'E', name: 'Encouragement to New Enterprises', title: 'From Ideas to Enterprises', text: 'Every dream deserves encouragement. We help aspiring entrepreneurs turn their ideas, skills and ambitions into enterprises.' },
  { letter: 'C', name: 'Community Collaboration', title: 'Strength in Collaboration', text: 'Entrepreneurs grow stronger when they come together. BECCI brings the community onto one platform to connect, collaborate, share knowledge and support one another.' },
  { letter: 'C', name: 'Commerce', title: 'Connecting Community with Commerce', text: 'Collaboration creates opportunities. Connections turn into business referrals, partnerships, markets and meaningful commercial relationships.' },
  { letter: 'I', name: 'Impact', title: 'Creating Lasting Impact', text: 'Every enterprise that grows and every opportunity created contributes to stronger communities, economic progress and a more prosperous Bharat.' },
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

export const audiences = [
  { who: 'Students', need: 'Scholarships, internships, apprenticeships and early-career openings.', href: '/opportunities/scholarships' },
  { who: 'Job seekers', need: 'Official job and internship portals, with clear qualifications.', href: '/opportunities/jobs' },
  { who: 'Aspiring entrepreneurs', need: 'Schemes, finance and training to get a first business started.', href: '/opportunities/finance' },
  { who: 'MSMEs and enterprises', need: 'Tenders, supplier registration, loans, grants and subsidies.', href: '/opportunities/tenders' },
  { who: 'Institutions', need: 'Partnerships that open doors for entrepreneurs at scale.', href: '/partnerships' },
  { who: 'Future members', need: 'What the chamber is, who it is for and how to get involved.', href: '/membership' },
];
