/** Strip scraper notes and keep FactBar cells short. */

export const FACT_MAX = 160;

const SOURCE_TAG =
  /\(\s*(?:loop(?:\s+page)?|wikipedia|wikivoyage|wikidata|wiki|commons|unesco|dnp(?:\s+category\s+\d+)?|official(?:\s+(?:page|site|source))?|source|research|scrape|park page|seat61)\s*\)/gi;

const ARRIVAL_FILLER =
  /(?:\s*[.;,]?\s*)?(?:please\s+)?check on arrival(?:\s+(?:if|for|that|in)\s+[^.]*?)?[.!]*/gi;

export function stripSourceAnnotations(text: string): string {
  let next = String(text || '');
  next = next.replace(SOURCE_TAG, '');
  next = next.replace(ARRIVAL_FILLER, (match, offset, full) => {
    const before = full.slice(0, offset);
    if (/confirm the|confirm that|recheck/i.test(match)) return '';
    if (/[a-z0-9)]$/i.test(before.trimEnd())) return '.';
    return '';
  });
  next = next.replace(/\s{2,}/g, ' ');
  next = next.replace(/\s+([,.;:])/g, '$1');
  next = next.replace(/\.\s*\./g, '.');
  next = next.replace(/\s+\./g, '.');
  return next.trim();
}

/** Strip scraper notes only. Overlong facts fail in check:facts; do not clip here. */
export function clipFactValue(value: string): string {
  return stripSourceAnnotations(value);
}

export function looksLikeResearchDump(text: string): boolean {
  const value = String(text || '');
  if (SOURCE_TAG.test(value) || /check on arrival/i.test(value)) return true;
  SOURCE_TAG.lastIndex = 0;
  return false;
}
