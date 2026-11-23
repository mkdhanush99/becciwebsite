// PUBLIC OPPORTUNITY RECORDS
// Every record below was checked against the official page linked in `sources`.
// Facts are restricted to what those pages state on the `lastVerified` date. Where an
// official page is silent, the field is left empty and the site says "Not stated".
// Do not add records from memory, news reports or aggregators. See SOURCES.md.

import type { DatedRecord } from '../lib/status';
import { centralSchemes } from './schemes-central.ts';

export type Category = 'tenders' | 'jobs' | 'scholarships' | 'finance' | 'schemes';

export type ObcScope =
  | 'exclusive' // only for backward classes / OBC (as defined by the scheme)
  | 'preference' // open to others, with a documented OBC/BC preference
  | 'open' // general opportunity, open to anyone who meets its rules
  | 'conditional' // OBC/BC applicants qualify only through another condition (e.g. gender, trade, State list)
  | 'not-stated';

export interface SourceLink { label: string; url: string }

export type Beneficiary = 'Entrepreneurs' | 'Students' | 'Women' | 'Artisans and craftspeople' | 'Startups' | 'Groups and cooperatives' | 'Youth';

// Story and verification layer for the Government Schemes library (/schemes).
// Every value comes from the official page named in `sources`; nothing is inferred.
export interface SchemeStory {
  short?: string; // official short name, e.g. PMEGP
  ministry: string; // issuing ministry or department
  purpose: string[]; // Chapter 1: why the scheme exists, in the source's terms
  beneficiaries: Beneficiary[];
  purposeTags: string[]; // e.g. Credit, Subsidy, Grant, Skills, Scholarship, Market access, Seed funding
  sectors: string[];
  applicantTypes: string[];
  links: {
    scheme?: SourceLink; // official scheme website or page
    guidelines?: SourceLink[]; // guidelines and notifications
    ministry?: SourceLink; // ministry or department page
    portal?: SourceLink; // application portal
    notices?: SourceLink[]; // amendments, circulars, updated notices
  };
  // Official logos are not reproduced: reuse terms for scheme logos and the State Emblem were not
  // confirmed as permitting reproduction on a non-government website. The identity panel shows the
  // scheme name and issuing authority instead, with links to the official source.
  identitySource: string;
  humanReviewed: string | null; // date a BECCI staff member checked every fact; null = not yet
}

export interface Opportunity extends DatedRecord {
  slug: string;
  title: string; // official title as published
  authority: string;
  level: 'Central' | 'State';
  categories: Category[];
  geography: string[];
  geographyNote?: string;
  summary: string;
  provides: string[];
  whoCanApply: string[];
  conditions?: string[];
  obcScope: ObcScope;
  obcRule: string; // which list the rule refers to, in the source's own terms
  documents?: string[];
  howToApply: string[];
  applyUrl: string;
  applyLabel: string;
  sources: SourceLink[];
  discrepancies?: string[];
  audience: string[]; // filter: beneficiary
  educationLevel?: string[];
  fundingType?: string[];
  stage?: string[];
  publishedDate?: string;
  lastFetched: string; // last successful automated or manual fetch of the source page
  lastVerified: string; // last editorial check of every fact against the source
  verification: string;
  scheme?: SchemeStory;
}

export const CATEGORY_META: Record<Category, { label: string; plural: string; blurb: string; path: string }> = {
  tenders: {
    label: 'Tenders & Procurement',
    plural: 'tenders',
    blurb: 'Central and State government tenders, bids and supplier registration for MSMEs. Most tenders are open to any eligible bidder; any procurement preference is stated on the listing.',
    path: '/opportunities/tenders',
  },
  jobs: {
    label: 'Jobs & Internships',
    plural: 'jobs and internships',
    blurb: 'Official portals for jobs, internships and apprenticeships, and programmes for students. Any reservation rule is set by each notice, not by BECCI.',
    path: '/opportunities/jobs',
  },
  scholarships: {
    label: 'Scholarships',
    plural: 'scholarships',
    blurb: 'Central and State scholarships for school, college and higher education, with who can apply, what each covers and the deadline.',
    path: '/opportunities/scholarships',
  },
  finance: {
    label: 'Loans & Funding',
    plural: 'loans, grants and subsidies',
    blurb: 'Loans, grants, subsidies and credit guarantees for starting or growing an enterprise, with who can apply and what each offers.',
    path: '/opportunities/finance',
  },
  schemes: {
    label: 'Government Schemes',
    plural: 'government schemes',
    blurb: 'Central and State schemes for people and businesses.',
    path: '/schemes',
  },
};

export const CATEGORY_ORDER: Category[] = ['schemes', 'tenders', 'jobs', 'scholarships', 'finance'];

export const OBC_SCOPE_LABEL: Record<ObcScope, string> = {
  exclusive: 'Backward Classes only',
  preference: 'Documented OBC/BC preference',
  open: 'Open to all eligible applicants',
  conditional: 'Depends on other conditions',
  'not-stated': 'Category rules not stated',
};

const NBCFDC_SOURCES = {
  individual: 'https://nbcfdc.gov.in/nbcfdc/web/en/individual-loan-scheme',
  group: 'https://nbcfdc.gov.in/nbcfdc/web/en/group-loan-scheme',
  how: 'https://nbcfdc.gov.in/nbcfdc/web/en/howapply',
  finance: 'https://nbcfdc.gov.in/nbcfdc/web/en/loans-pattern-of-finance',
};

export const opportunities: Opportunity[] = [
  {
    slug: 'nbcfdc-individual-loan-scheme',
    title: 'Individual Loan Scheme',
    authority: 'National Backward Classes Finance & Development Corporation (NBCFDC), Ministry of Social Justice & Empowerment',
    level: 'Central',
    categories: ['finance', 'schemes'],
    geography: ['All India'],
    geographyNote: 'Delivered through State Channelising Agencies and partner banks in each State.',
    summary: 'Loans for income-generating activities for members of Backward Classes, routed through NBCFDC channel partners.',
    provides: [
      'Loans for income-generating activities "which have potential to provide sustainable income generation for the beneficiary".',
      'Maximum loan limit of Rs. 25.00 lakh per beneficiary.',
      'Timely payment rebate of 1% on an annual basis, shared between channel partners and beneficiaries.',
    ],
    whoCanApply: [
      'Members of Backward Classes, as notified by the Central Government or State Governments from time to time.',
      'Annual family income up to Rs. 5.00 lakh (as stated on the scheme page).',
    ],
    conditions: [
      'Channel partner / beneficiary share: 15%.',
      'Loans follow the due processes of the concerned channel partner.',
    ],
    obcScope: 'exclusive',
    obcRule: 'Backward Classes notified by the Central Government or by State Governments. Either notification is referenced; the scheme page does not require both.',
    documents: [
      'Caste certificate and income certificate issued by a competent authority such as a Tehsildar, Sub-Divisional Magistrate or District Collector.',
      'A self-certified annual family income certificate endorsed by a State Government gazetted officer or by the lending bank\'s Branch Manager is also admissible.',
    ],
    howToApply: [
      'Apply on the prescribed form available with the channel partner, at the district office where you normally reside.',
      'Or register online through the registration portal on the NBCFDC website; requests are forwarded to the concerned channel partner.',
    ],
    applyUrl: NBCFDC_SOURCES.how,
    applyLabel: 'How and where to apply (NBCFDC)',
    sources: [
      { label: 'NBCFDC — Individual Loan Scheme', url: NBCFDC_SOURCES.individual },
      { label: 'NBCFDC — Pattern of Finance (w.e.f. 01.04.2025)', url: NBCFDC_SOURCES.finance },
      { label: 'NBCFDC — How and Where to Apply', url: NBCFDC_SOURCES.how },
    ],
    discrepancies: [
      'The scheme page states an income limit of Rs. 5.00 lakh, while the "How and Where to Apply" page states Rs. 3.00 lakh. Confirm the limit with your channel partner before applying.',
    ],
    rolling: true,
    audience: ['Entrepreneurs', 'Aspiring entrepreneurs'],
    fundingType: ['Loan'],
    stage: ['Aspiring entrepreneur', 'New enterprise', 'Existing enterprise'],
    lastFetched: '2026-11-22',
    lastVerified: '2026-11-22',
    verification: 'Editorial check of the official NBCFDC pages listed under Official sources.',
    scheme: {
      purpose: ['Loans for income-generating activities that can give members of Backward Classes a sustainable income, routed through NBCFDC\'s channel partners in each State.'],
      ministry: 'Ministry of Social Justice & Empowerment (NBCFDC)',
      beneficiaries: ['Entrepreneurs'],
      purposeTags: ['Credit'],
      sectors: ['Any income-generating activity'],
      applicantTypes: ['Individual'],
      links: {
        scheme: { label: 'NBCFDC — Individual Loan Scheme', url: NBCFDC_SOURCES.individual },
        ministry: { label: 'NBCFDC home', url: 'https://nbcfdc.gov.in/' },
        portal: { label: 'NBCFDC — How and Where to Apply', url: NBCFDC_SOURCES.how },
        guidelines: [{ label: 'NBCFDC — Pattern of Finance (w.e.f. 01.04.2025)', url: NBCFDC_SOURCES.finance }],
      },
      identitySource: 'Official logo not shown: reuse terms were not confirmed. Name and authority as published on nbcfdc.gov.in.',
      humanReviewed: null,
    },
  },
  {
    slug: 'nbcfdc-group-loan-scheme',
    title: 'Group Loan Scheme',
    authority: 'National Backward Classes Finance & Development Corporation (NBCFDC), Ministry of Social Justice & Empowerment',
    level: 'Central',
    categories: ['finance', 'schemes'],
    geography: ['All India'],
    geographyNote: 'Implemented through channel partners and NBFC-MFIs or similar financial institutions in rural and urban areas.',
    summary: 'Credit for Self Help Groups where most members belong to Backward Classes.',
    provides: [
      'Loan assistance to Self Help Groups (SHGs) through nominated channel partners (State Channelising Agencies / banks).',
      'Maximum of Rs. 25.00 lakh per group, per the Pattern of Finance.',
    ],
    whoCanApply: [
      'Self Help Groups whose members are Backward Classes as notified by Central or State Government from time to time.',
      'At least 60% of SHG members must belong to Backward Classes; other members must be from weaker sections, including SC/ST, minorities and persons with disabilities.',
      'Annual family income up to Rs. 5.00 lakh.',
    ],
    obcScope: 'exclusive',
    obcRule: 'Backward Classes notified by Central or State Government. The Pattern of Finance page refers to "OBC" for the 60% membership rule.',
    howToApply: [
      'Contact the State Channelising Agency, partner bank or participating NBFC-MFI in your district.',
    ],
    applyUrl: NBCFDC_SOURCES.how,
    applyLabel: 'How and where to apply (NBCFDC)',
    sources: [
      { label: 'NBCFDC — Group Loan Scheme', url: NBCFDC_SOURCES.group },
      { label: 'NBCFDC — Pattern of Finance (w.e.f. 01.04.2025)', url: NBCFDC_SOURCES.finance },
    ],
    rolling: true,
    audience: ['Self Help Groups', 'Women and community groups'],
    fundingType: ['Loan'],
    stage: ['Aspiring entrepreneur', 'Existing enterprise'],
    lastFetched: '2026-11-22',
    lastVerified: '2026-11-22',
    verification: 'Editorial check of the official NBCFDC pages listed under Official sources.',
    scheme: {
      purpose: ['Credit for Self Help Groups in which most members belong to Backward Classes, so that groups can take up income-generating activity together.'],
      ministry: 'Ministry of Social Justice & Empowerment (NBCFDC)',
      beneficiaries: ['Groups and cooperatives', 'Women'],
      purposeTags: ['Credit'],
      sectors: ['Any income-generating activity'],
      applicantTypes: ['SHG, FPO or cooperative'],
      links: {
        scheme: { label: 'NBCFDC — Group Loan Scheme', url: NBCFDC_SOURCES.group },
        ministry: { label: 'NBCFDC home', url: 'https://nbcfdc.gov.in/' },
        portal: { label: 'NBCFDC — How and Where to Apply', url: NBCFDC_SOURCES.how },
        guidelines: [{ label: 'NBCFDC — Pattern of Finance (w.e.f. 01.04.2025)', url: NBCFDC_SOURCES.finance }],
      },
      identitySource: 'Official logo not shown: reuse terms were not confirmed. Name and authority as published on nbcfdc.gov.in.',
      humanReviewed: null,
    },
  },
  {
    slug: 'pm-yasasvi-top-class-school-education',
    title: 'PM YASASVI Central Sector Scheme of Top Class Education in Schools for OBC, EBC and DNT Students',
    authority: 'Government of India, via the National Scholarship Portal',
    level: 'Central',
    categories: ['scholarships', 'schemes'],
    geography: ['All India'],
    geographyNote: 'Students from Rajasthan, Keralam and Karnataka cannot apply yet; the portal says they "need to wait for some time more".',
    summary: 'Scholarship for OBC, EBC and DNT students in top-class schools, now accepting fresh applications.',
    provides: ['Scholarship support for school education. Amounts are not stated on the portal notice — read the scheme guidelines on NSP.'],
    whoCanApply: [
      'OBC, EBC and DNT students, as named in the scheme title.',
      'Detailed eligibility (class, school list, income) is not stated in the portal notice.',
    ],
    conditions: [
      'Students may apply for one merit-based scheme and one or more welfare-based schemes from AY 2026–27, as per scheme eligibility.',
      'A One Time Registration (OTR) number is required to apply on NSP.',
    ],
    obcScope: 'exclusive',
    obcRule: 'The portal notice names OBC, EBC and DNT students. It does not say whether the Central OBC list or a State list applies — check the scheme guidelines.',
    documents: ['One Time Registration (OTR), generated using Aadhaar or Aadhaar Enrolment ID.'],
    howToApply: [
      'Generate your OTR on the National Scholarship Portal or the NSP OTR app.',
      'Submit a fresh application on NSP. NSP services are also available at Common Service Centres for a fixed fee of Rs 30.',
    ],
    applyUrl: 'https://scholarships.gov.in/',
    applyLabel: 'Apply on the National Scholarship Portal',
    sources: [{ label: 'National Scholarship Portal — homepage notices', url: 'https://scholarships.gov.in/' }],
    audience: ['Students'],
    educationLevel: ['School'],
    fundingType: ['Scholarship'],
    lastFetched: '2026-11-22',
    lastVerified: '2026-11-22',
    verification: 'Editorial check of the notice on the National Scholarship Portal homepage. No closing date was published in that notice.',
    scheme: {
      short: 'PM YASASVI',
      ministry: 'Government of India (National Scholarship Portal)',
      purpose: ['Support for OBC, EBC and DNT students in top-class schools, as named in the scheme title. The portal notice does not state further objectives; read the scheme guidelines on NSP.'],
      beneficiaries: ['Students'],
      purposeTags: ['Scholarship'],
      sectors: ['Education'],
      applicantTypes: ['Student'],
      links: { portal: { label: 'National Scholarship Portal', url: 'https://scholarships.gov.in/' } },
      identitySource: 'Official logo not shown: reuse terms were not confirmed. Name and authority as published on the National Scholarship Portal.',
      humanReviewed: null,
    },
  },
  {
    slug: 'pm-usp-csss-fresh',
    title: 'PM-USP – Central Sector Scheme of Scholarship for College and University Students (CSSS) — Fresh applications',
    authority: 'Government of India, via the National Scholarship Portal',
    level: 'Central',
    categories: ['scholarships', 'schemes'],
    geography: ['All India'],
    summary: 'Merit-based scholarship for college and university students. Fresh applications close on 30 November 2026.',
    provides: ['Scholarship for college and university students. Amounts are not stated in the portal notice.'],
    whoCanApply: ['College and university students who meet the scheme rules. The portal notice does not list eligibility details.'],
    conditions: [
      'Renewal applications under this scheme closed for students on 31-10-2026 (institute verification closes 15-11-2026; L2 verification 30-11-2026).',
      'A One Time Registration (OTR) number is required to apply on NSP.',
    ],
    obcScope: 'open',
    obcRule: 'The portal notice does not set a social-category condition. Check the scheme guidelines for any category rules.',
    documents: ['One Time Registration (OTR), generated using Aadhaar or Aadhaar Enrolment ID.'],
    howToApply: ['Log in to NSP with your OTR and submit a fresh application before the closing date.'],
    applyUrl: 'https://scholarships.gov.in/',
    applyLabel: 'Apply on the National Scholarship Portal',
    sources: [{ label: 'National Scholarship Portal — homepage notices', url: 'https://scholarships.gov.in/' }],
    closingDate: '2026-11-30',
    audience: ['Students'],
    educationLevel: ['College / University'],
    fundingType: ['Scholarship'],
    lastFetched: '2026-11-22',
    lastVerified: '2026-11-22',
    verification: 'Editorial check of the notice on the National Scholarship Portal homepage.',
    scheme: {
      short: 'PM-USP CSSS',
      ministry: 'Government of India (National Scholarship Portal)',
      purpose: ['A merit-based scholarship for college and university students. The portal notice does not state the objectives; read the scheme guidelines on NSP.'],
      beneficiaries: ['Students'],
      purposeTags: ['Scholarship'],
      sectors: ['Education'],
      applicantTypes: ['Student'],
      links: { portal: { label: 'National Scholarship Portal', url: 'https://scholarships.gov.in/' } },
      identitySource: 'Official logo not shown: reuse terms were not confirmed. Name and authority as published on the National Scholarship Portal.',
      humanReviewed: null,
    },
  },
  {
    slug: 'telangana-epass-post-matric',
    title: 'Telangana ePASS — Post-Matric Scholarships (Fresh and Renewal)',
    authority: 'Government of Telangana (ePASS portal; content owned by the Social Welfare Department)',
    level: 'State',
    categories: ['scholarships', 'schemes'],
    geography: ['Telangana'],
    summary: 'State post-matric scholarship portal. The latest registration notice on the homepage is for 2024-25 and has closed.',
    provides: ['Post-matric scholarships administered through the ePASS portal. Benefit amounts are not stated on the homepage.'],
    whoCanApply: ['Not stated on the homepage. The portal offers a grievance route for "BC and EBC Students".'],
    obcScope: 'not-stated',
    obcRule: 'The homepage mentions BC and EBC students (Telangana State classification) but does not set out eligibility rules.',
    howToApply: ['Watch the ePASS homepage for the current academic year\'s registration notice.'],
    applyUrl: 'https://telanganaepass.cgg.gov.in/',
    applyLabel: 'Open Telangana ePASS',
    sources: [{ label: 'Telangana ePASS — homepage notices', url: 'https://telanganaepass.cgg.gov.in/' }],
    discrepancies: ['Latest notice found: "Post-Matric Fresh and Renewal Registrations for 2024-25 are open, and the last date for registrations is 30-06-2025." No 2026-27 notice was found on the homepage.'],
    awaitingNotice: true,
    audience: ['Students'],
    educationLevel: ['College / University', 'Post-matric'],
    fundingType: ['Scholarship'],
    lastFetched: '2026-11-22',
    lastVerified: '2026-11-22',
    verification: 'Editorial check of the Telangana ePASS homepage.',
    scheme: {
      ministry: 'Government of Telangana',
      purpose: ['The State\'s online portal for post-matric scholarships. The homepage does not state the scheme\'s objectives; read the current notice on the portal.'],
      beneficiaries: ['Students'],
      purposeTags: ['Scholarship'],
      sectors: ['Education'],
      applicantTypes: ['Student'],
      links: { portal: { label: 'Telangana ePASS', url: 'https://telanganaepass.cgg.gov.in/' } },
      identitySource: 'Official logo not shown: reuse terms were not confirmed. Name and authority as published on the ePASS portal.',
      humanReviewed: null,
    },
  },
  ...centralSchemes,
];

// Official portals: a directory of where to look, NOT individual listings.
// `reachable` records whether our checker could load the portal on `checked`.
export interface Portal {
  name: string;
  authority: string;
  url: string;
  categories: Category[];
  geography: string;
  note: string;
  checked: string;
  reachable: boolean;
}

export const portals: Portal[] = [
  { name: 'Central Public Procurement Portal (CPPP)', authority: 'Government of India', url: 'https://eprocure.gov.in/cppp/', categories: ['tenders'], geography: 'All India', note: 'Central government tenders. Opened by our checker, but listings load inside the portal and no public feed was found.', checked: '2026-11-22', reachable: true },
  { name: 'Government e-Marketplace (GeM)', authority: 'Government of India', url: 'https://gem.gov.in/', categories: ['tenders'], geography: 'All India', note: 'Seller registration and government buying. Our checker could not reach it on the date shown.', checked: '2026-11-22', reachable: false },
  { name: 'Telangana eProcurement', authority: 'Government of Telangana', url: 'https://tender.telangana.gov.in/', categories: ['tenders'], geography: 'Telangana', note: 'State tenders. The page responded but returned no readable listings to our checker.', checked: '2026-11-22', reachable: true },
  { name: 'Andhra Pradesh eProcurement', authority: 'Government of Andhra Pradesh', url: 'https://tender.apeprocurement.gov.in/', categories: ['tenders'], geography: 'Andhra Pradesh', note: 'State tenders. Our checker could not reach it on the date shown.', checked: '2026-11-22', reachable: false },
  { name: 'PM Internship Scheme', authority: 'Ministry of Corporate Affairs', url: 'https://pminternship.mca.gov.in/', categories: ['jobs'], geography: 'All India', note: 'Internship portal. Opened by our checker; listings load inside the portal.', checked: '2026-11-22', reachable: true },
  { name: 'Apprenticeship India', authority: 'Government of India', url: 'https://www.apprenticeshipindia.gov.in/', categories: ['jobs'], geography: 'All India', note: 'Apprenticeship opportunities. The portal refused our checker on the date shown.', checked: '2026-11-22', reachable: false },
  { name: 'National Career Service', authority: 'Ministry of Labour & Employment', url: 'https://www.ncs.gov.in/', categories: ['jobs'], geography: 'All India', note: 'Job search and career services. Our checker could not reach it on the date shown.', checked: '2026-11-22', reachable: false },
  { name: 'National Scholarship Portal', authority: 'Government of India', url: 'https://scholarships.gov.in/', categories: ['scholarships'], geography: 'All India', note: 'Central scholarships, including PM YASASVI for OBC, EBC and DNT students.', checked: '2026-11-22', reachable: true },
  { name: 'Telangana ePASS', authority: 'Government of Telangana', url: 'https://telanganaepass.cgg.gov.in/', categories: ['scholarships'], geography: 'Telangana', note: 'State post-matric scholarships.', checked: '2026-11-22', reachable: true },
  { name: 'Jnanabhumi', authority: 'Government of Andhra Pradesh', url: 'https://jnanabhumi.ap.gov.in/', categories: ['scholarships'], geography: 'Andhra Pradesh', note: 'State scholarships. Our checker could not reach it on the date shown.', checked: '2026-11-22', reachable: false },
  { name: 'NBCFDC', authority: 'Ministry of Social Justice & Empowerment', url: 'https://nbcfdc.gov.in/', categories: ['finance', 'schemes'], geography: 'All India', note: 'Loan schemes for Backward Classes through State Channelising Agencies and banks.', checked: '2026-11-22', reachable: true },
  { name: 'PMEGP e-Portal', authority: 'KVIC, Ministry of MSME', url: 'https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp', categories: ['finance', 'schemes'], geography: 'All India', note: 'Scheme details are in the Government Schemes library, from the official scheme pages.', checked: '2026-11-22', reachable: false },
  { name: 'PM Mudra Yojana', authority: 'MUDRA', url: 'https://www.mudra.org.in/', categories: ['finance', 'schemes'], geography: 'All India', note: 'Scheme details are in the Government Schemes library, from the official scheme pages.', checked: '2026-11-22', reachable: false },
  { name: 'Stand-Up India', authority: 'SIDBI', url: 'https://www.standupmitra.in/', categories: ['finance', 'schemes'], geography: 'All India', note: 'Scheme details are in the Government Schemes library, from the official scheme pages.', checked: '2026-11-22', reachable: false },
  { name: 'CGTMSE', authority: 'Credit Guarantee Fund Trust for Micro and Small Enterprises', url: 'https://www.cgtmse.in/', categories: ['finance'], geography: 'All India', note: 'Credit guarantee for MSE loans. Our checker could not reach it, so details are not listed here yet.', checked: '2026-11-22', reachable: false },
  { name: 'Startup India Seed Fund Scheme', authority: 'DPIIT', url: 'https://seedfund.startupindia.gov.in/', categories: ['finance', 'schemes'], geography: 'All India', note: 'Scheme details are in the Government Schemes library, from the official scheme pages.', checked: '2026-11-22', reachable: true },
  { name: 'PM Vishwakarma', authority: 'Government of India', url: 'https://pmvishwakarma.gov.in/', categories: ['finance', 'schemes'], geography: 'All India', note: 'Scheme details are in the Government Schemes library, from the official scheme pages.', checked: '2026-11-22', reachable: false },
];

export const FEED_STATUS: Record<Category, { live: boolean; message: string }> = {
  tenders: { live: false, message: 'BECCI does not yet receive an authorised tender feed. No individual tenders are listed. Use the official portals below; each opens the government site directly.' },
  jobs: { live: false, message: 'BECCI does not yet receive an authorised jobs or internships feed. No individual openings are listed. Use the official portals below.' },
  scholarships: { live: false, message: 'Scholarship records are checked by hand against official portals. There is no automatic feed.' },
  finance: { live: false, message: 'Loan and funding records are checked by hand against official pages. There is no automatic feed.' },
  schemes: { live: false, message: 'Scheme records are checked by hand against official pages. Coverage is small and growing.' },
};
