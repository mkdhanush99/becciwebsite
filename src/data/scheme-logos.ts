// Official logos shown on scheme pages, each downloaded from a Government of India source on the date given.
// Rule (BECCI Government Assets pack, rule 8): never substitute a ministry or portal logo for a scheme's own
// logo. A scheme shows its own logo, its parent initiative's, or the logo of the body that runs it as its
// own programme (NBCFDC loans, Telangana ePASS). Otherwise it shows the name and authority only.
// BECCI is not a government body; showing a logo does not imply endorsement.

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

const NBCFDC: SchemeLogo = { src: '/logos/schemes/nbcfdc.png', alt: 'NBCFDC logo', kind: 'agency', label: 'National Backward Classes Finance & Development Corporation, the implementing agency', source: { label: 'nbcfdc.gov.in', url: 'https://nbcfdc.gov.in/' }, fetched: FETCHED };

export const schemeLogos: Record<string, SchemeLogo> = {
  'pm-mudra-yojana': { src: '/logos/schemes/pm-mudra-yojana.svg', alt: 'Pradhan Mantri Mudra Yojana logo', kind: 'scheme', label: 'Pradhan Mantri Mudra Yojana', source: DBIM, fetched: FETCHED },
  'stand-up-india': { src: '/logos/schemes/stand-up-india.svg', alt: 'Stand-Up India logo', kind: 'scheme', label: 'Stand-Up India', source: DBIM, fetched: FETCHED },
  'startup-india-seed-fund': { src: '/logos/schemes/startup-india.svg', alt: 'Startup India logo', kind: 'initiative', label: 'Startup India, the initiative this fund belongs to', source: DBIM, fetched: FETCHED },
  'pm-svanidhi': { src: '/logos/schemes/pm-svanidhi.svg', alt: 'PM SVANidhi logo', kind: 'scheme', label: 'PM SVANidhi', source: DBIM, fetched: FETCHED },
  'naps-2': { src: '/logos/schemes/naps.svg', alt: 'National Apprenticeship Promotion Scheme logo', kind: 'scheme', label: 'National Apprenticeship Promotion Scheme', source: DBIM, fetched: FETCHED },
  'pmkvy-short-term-training': { src: '/logos/schemes/pmkvy.svg', alt: 'Pradhan Mantri Kaushal Vikas Yojana logo', kind: 'scheme', label: 'Pradhan Mantri Kaushal Vikas Yojana', source: DBIM, fetched: FETCHED },
  'nbcfdc-individual-loan-scheme': NBCFDC,
  'nbcfdc-group-loan-scheme': NBCFDC,
  'telangana-epass-post-matric': { src: '/logos/schemes/telangana-epass.png', alt: 'Telangana ePASS logo', kind: 'portal', label: 'Telangana ePASS, where applications are made', source: { label: 'telanganaepass.cgg.gov.in', url: 'https://telanganaepass.cgg.gov.in/' }, fetched: FETCHED },
};

export const NO_LOGO_NOTE = 'The scheme’s own logo was not found on an official source we could reach (checked 23 Nov 2026). A ministry or portal logo is not used in its place, so the scheme name and authority are shown instead.';
