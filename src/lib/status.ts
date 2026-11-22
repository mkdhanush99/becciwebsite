// Shared status logic for opportunity records. Used at build time and in the browser
// so a static page never keeps showing "Open" after the official closing date passes.

export type Status = 'open' | 'closing-soon' | 'rolling' | 'upcoming' | 'amended' | 'closed' | 'awaiting-notice';

export interface DatedRecord {
  openingDate?: string; // ISO yyyy-mm-dd
  closingDate?: string;
  amendedDate?: string;
  rolling?: boolean;
  awaitingNotice?: boolean;
}

export const CLOSING_SOON_DAYS = 14;

const DAY = 86_400_000;

function toDay(iso: string): number {
  const [y, m, d] = iso.split('-').map(Number);
  return Date.UTC(y, m - 1, d);
}

export function todayISO(now = new Date()): string {
  // Deadlines are published in Indian Standard Time.
  const ist = new Date(now.getTime() + 5.5 * 3600_000);
  return ist.toISOString().slice(0, 10);
}

export function computeStatus(r: DatedRecord, today = todayISO()): Status {
  const t = toDay(today);
  if (r.awaitingNotice) return 'awaiting-notice';
  if (r.openingDate && toDay(r.openingDate) > t) return 'upcoming';
  if (r.closingDate) {
    const c = toDay(r.closingDate);
    if (c < t) return 'closed';
    if (r.amendedDate) return 'amended';
    if ((c - t) / DAY <= CLOSING_SOON_DAYS) return 'closing-soon';
    return 'open';
  }
  if (r.amendedDate) return 'amended';
  if (r.rolling) return 'rolling';
  return 'open';
}

export const STATUS_LABEL: Record<Status, string> = {
  open: 'Open',
  'closing-soon': 'Closing soon',
  rolling: 'Open · rolling',
  upcoming: 'Upcoming',
  amended: 'Amended',
  closed: 'Closed',
  'awaiting-notice': 'Awaiting new notice',
};

export function daysLeft(closingDate: string, today = todayISO()): number {
  return Math.round((toDay(closingDate) - toDay(today)) / DAY);
}

export function formatDate(iso?: string): string {
  if (!iso) return '';
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString('en-IN', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC',
  });
}

export function deadlineText(r: DatedRecord, today = todayISO()): string {
  if (r.awaitingNotice) return 'No current notice published';
  if (!r.closingDate) return r.rolling ? 'No deadline published · applications accepted year-round' : 'No deadline published';
  const n = daysLeft(r.closingDate, today);
  if (n < 0) return `Closed on ${formatDate(r.closingDate)}`;
  if (n === 0) return `Closes today, ${formatDate(r.closingDate)}`;
  if (n === 1) return `Closes tomorrow, ${formatDate(r.closingDate)}`;
  return `Closes ${formatDate(r.closingDate)} · ${n} days left`;
}
