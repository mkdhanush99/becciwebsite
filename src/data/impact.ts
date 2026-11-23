// Public statistics for the homepage impact section.
// Every figure comes from one official table and is copied as published (financial figures in Rs. lakh).
// Conversions to crore (1 crore = 100 lakh) and the derived share are marked `derived`.
//
// Source: National Backward Classes Finance & Development Corporation (NBCFDC), Ministry of Social
// Justice & Empowerment, "Statement showing Statewise/UT wise/PSB wise Disbursement and no. of
// beneficiaries assisted during 2020-21 to 2024-25 and cumulative upto (31.03.2025)".
// Published on the NBCFDC Achievements page. Retrieved and checked 23 Nov 2026.
// File SHA-256: 41f94df3a2f0613c6657c7adf44a2166932741eed14353ebc322a1b25f81be69

export const IMPACT_SOURCE = {
  publisher: 'NBCFDC, Ministry of Social Justice & Empowerment',
  short: 'NBCFDC',
  title: 'State/UT-wise disbursement and number of beneficiaries, 2020-21 to 2024-25 and cumulative up to 31.03.2025',
  url: 'https://nbcfdc.gov.in/nbcfdc/web/sites/default/files/2025-05/Disb%20Chart%202020-25.pdf',
  page: 'https://nbcfdc.gov.in/nbcfdc/web/en/achivement',
  checked: '2026-11-23',
  scope: 'Loans disbursed by NBCFDC through State Channelising Agencies, all States and Union Territories (rows I and II of the statement).',
};

// Totals, all States and UTs (row "Total (I to II)")
export const totals = {
  cumulative: { beneficiaries: 3305532, lakh: 767433.16, period: 'From inception to 31 March 2025' },
  byYear: [
    { year: '2020-21', beneficiaries: 111261, lakh: 46670.58 },
    { year: '2021-22', beneficiaries: 159717, lakh: 47137.44 },
    { year: '2022-23', beneficiaries: 140343, lakh: 51184.6 },
    { year: '2023-24', beneficiaries: 68372, lakh: 52508.9 },
    { year: '2024-25', beneficiaries: 60520, lakh: 52753.81 },
  ],
};

// BECCI's starting States (rows 1 and 24)
export const homeStates = [
  { state: 'Andhra Pradesh', cumulative: { beneficiaries: 379298, lakh: 33809.33 }, y2425: { beneficiaries: 4102, lakh: 5980.55 } },
  { state: 'Telangana', cumulative: { beneficiaries: 7705, lakh: 4108.61 }, y2425: { beneficiaries: 367, lakh: 455.61 } },
];

export const crore = (lakh: number) => lakh / 100; // derived
