// Official logos shown on scheme pages, each downloaded from a Government of India source on the date given.
// `kind` says what the logo represents, so a ministry, agency or portal logo is never presented as the
// scheme's own. Schemes with no entry show the name and authority only (no logo found on a reachable
// official source). BECCI is not a government body; showing a logo does not imply endorsement.

export type LogoKind = 'scheme' | 'initiative' | 'ministry' | 'agency' | 'portal';

export interface SchemeLogo {
  src: string;
  alt: string;
  kind: LogoKind;
  label: string; // what the logo is, in words, shown under it
  source: { label: string; url: string };
  fetched: string; // ISO date the file was downloaded
}

const DBIM = { label: 'Digital Brand Identity Manual toolkit (MeitY), Visual Components Library: Logos', url: 'https://dbimtoolkit.digifootprint.gov.in/visual-library?slug=logos' };
const FETCHED = '2026-11-23';

const MSME: SchemeLogo = { src: '/logos/schemes/msme.svg', alt: 'Ministry of Micro, Small and Medium Enterprises logo', kind: 'ministry', label: 'Ministry of Micro, Small and Medium Enterprises, the administering ministry', source: DBIM, fetched: FETCHED };
const NBCFDC: SchemeLogo = { src: '/logos/schemes/nbcfdc.png', alt: 'NBCFDC logo', kind: 'agency', label: 'National Backward Classes Finance & Development Corporation, the implementing agency', source: { label: 'nbcfdc.gov.in', url: 'https://nbcfdc.gov.in/' }, fetched: FETCHED };
const NSP: SchemeLogo = { src: '/logos/schemes/nsp.svg', alt: 'National Scholarship Portal logo', kind: 'portal', label: 'National Scholarship Portal, where applications are made', source: { label: 'scholarships.gov.in', url: 'https://scholarships.gov.in/' }, fetched: FETCHED };

export const schemeLogos: Record<string, SchemeLogo> = {
  'pm-mudra-yojana': { src: '/logos/schemes/pm-mudra-yojana.svg', alt: 'Pradhan Mantri Mudra Yojana logo', kind: 'scheme', label: 'Pradhan Mantri Mudra Yojana', source: DBIM, fetched: FETCHED },
  'stand-up-india': { src: '/logos/schemes/stand-up-india.svg', alt: 'Stand-Up India logo', kind: 'scheme', label: 'Stand-Up India', source: DBIM, fetched: FETCHED },
  'startup-india-seed-fund': { src: '/logos/schemes/startup-india.svg', alt: 'Startup India logo', kind: 'initiative', label: 'Startup India, the initiative this fund belongs to', source: DBIM, fetched: FETCHED },
  pmegp: MSME,
  'pm-vishwakarma': MSME,
  'nbcfdc-individual-loan-scheme': NBCFDC,
  'nbcfdc-group-loan-scheme': NBCFDC,
  'pm-yasasvi-top-class-school-education': NSP,
  'pm-usp-csss-fresh': NSP,
  'telangana-epass-post-matric': { src: '/logos/schemes/telangana-epass.png', alt: 'Telangana ePASS logo', kind: 'portal', label: 'Telangana ePASS, where applications are made', source: { label: 'telanganaepass.cgg.gov.in', url: 'https://telanganaepass.cgg.gov.in/' }, fetched: FETCHED },
};

export const NO_LOGO_NOTE = 'No official logo was found on an official source we could reach (checked 23 Nov 2026), so the scheme name and authority are shown instead.';
