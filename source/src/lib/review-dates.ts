// Review dates come only from Quill's log in src/data/review-dates.csv (site,path,checked,notes).
// Update that file to change a page's "Checked" line and dateModified. Never use the build date here.
import raw from '../data/review-dates.csv?raw';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function norm(path: string): string {
  return path.replace(/\/+$/, '') || '/';
}

const DATES = new Map<string, string>();
for (const line of raw.split(/\r?\n/).slice(1)) {
  const m = /^([^,]*),([^,]*),(\d{4}-\d{2}-\d{2})/.exec(line.trim());
  if (!m || !/thai/i.test(m[1])) continue;
  const key = norm(m[2]);
  const prev = DATES.get(key);
  if (!prev || m[3] > prev) DATES.set(key, m[3]);
}

/** ISO review date (YYYY-MM-DD) for a path, or undefined if Quill has not logged one. */
export function reviewDateFor(path: string): string | undefined {
  return DATES.get(norm(path));
}

/** "Fact-checked: 31 Oct 2026" for a logged path, otherwise undefined. */
export function checkedLabel(path: string): string | undefined {
  const iso = reviewDateFor(path);
  if (!iso) return undefined;
  const [y, mo, d] = iso.split('-').map(Number);
  return `Fact-checked: ${d} ${MONTHS[mo - 1]} ${y}`;
}
