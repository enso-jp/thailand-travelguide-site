import type { Page } from './content';

const TITLE_SUFFIX = ' | Thailand Guide';
const TITLE_MIN = 45;
const TITLE_MAX = 60;
const DESC_MIN = 130;
const DESC_MAX = 155;

const TITLE_CORE: Record<string, string> = {
  '/': 'Thailand Travel Guide: Regions, Routes and 2026 Stays',
  '/about': 'About Thailand TravelGuide and Beyond Guide Network',
  '/about/ratings': 'Editorial Standards and 1-to-5 Dot Ratings',
  '/privacy': 'Privacy Policy, Analytics and Affiliate Disclosure',
  '/bangkok': 'Bangkok Guide: BTS, Temples and First-Night Stays',
  '/chiang-mai': 'Chiang Mai Guide: Old City Wats, Nimman and Stays',
  '/phuket': 'Phuket Guide: West Coast Beaches, HKT and Phi Phi',
  '/krabi': 'Krabi Guide: Ao Nang, Railay Cliffs and KBV Flights',
  '/koh-samui': 'Koh Samui Guide: USM Airport, Chaweng and Ferries',
  '/get-there/bangkok-to-chiang-mai': 'Bangkok to Chiang Mai: 70-Min Flight vs SRT Sleeper',
  '/get-there/bangkok-to-phuket': 'Bangkok to Phuket: 80-Min Flight and 2026 Airfares',
  '/get-there/bangkok-to-koh-samui': 'Bangkok to Koh Samui: USM Flight vs Donsak Ferry',
  '/get-there/bangkok-to-krabi': 'Bangkok to Krabi: 75-Min KBV Flight and Ao Nang Cars',
  '/get-there/chiang-mai-to-pai': 'Chiang Mai to Pai: 3.5-4.5 Hr Route 1095 Minivan',
  '/get-there/phuket-to-krabi-phi-phi': 'Phuket to Koh Phi Phi and Krabi: Morning Ferries',
  '/itineraries/best-14-days': '14-Day Thailand Itinerary: Bangkok, North and Coast',
  '/itineraries/first-week-7-days': '7-Day Thailand Itinerary: Bangkok Plus One Coast',
  '/itineraries/10-days-classic-thailand': '10-Day Thailand Itinerary: Bangkok, North and Beach',
  '/itineraries/south-islands-10-days': '10-Day South Thailand Itinerary: Andaman vs Gulf',
  '/plan/grab-and-bts': 'Grab vs Bolt Thailand and Bangkok BTS / MRT Guide',
  '/plan/esim-and-sim-cards': 'Thailand eSIM and SIM Cards: AIS vs True-dtac 2026',
  '/plan/money-atms-and-promptpay': 'Thailand Money Guide: ATM Fees, Cash and PromptPay',
  '/plan/visas-and-tdac': 'Thailand Visa and TDAC 2026: 60-Day Visa-Free Entry',
  '/plan/when-to-go': 'When to Visit Thailand: Andaman vs Gulf Monsoon',
  '/plan/trains-and-ferries': 'Thailand Trains and Ferries: Sleeper Berths and Boats',
};

function visible(text: string): string {
  return String(text ?? '')
    .replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/&/g, 'and')
    .replace(/\s+/g, ' ')
    .trim();
}

function trimAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const cut = slice.lastIndexOf(' ');
  const out = (cut >= 32 ? slice.slice(0, cut) : slice).trim();
  return out.replace(/[,:;.\-]+$/, '').replace(/\s+(?:and|or|to|in|on|for|with|by|at|of|vs|the|a|an)$/i, '').trim();
}

function stripSuffix(text: string): string {
  return text.replace(/\s*\|\s*Thailand(?:\s+Travel)?\s+Guide\s*$/i, '').trim();
}

function expandCore(page: Page): string {
  if (TITLE_CORE[page.path]) return stripSuffix(TITLE_CORE[page.path]);

  const raw = stripSuffix(visible(page.title));
  const path = page.path;

  if (path.startsWith('/get-there/') && path !== '/get-there') {
    if (/min|flight|ferry|sleeper|van|fare|2026|:/i.test(raw)) return raw;
    return `${raw}: Flights, Trains and Ferries`;
  }
  if (path.startsWith('/itineraries/') && path !== '/itineraries') {
    if (/itinerary|days in|what to see/i.test(raw)) return raw;
    return `${raw}: Route, Stops and Transit`;
  }
  if (path.startsWith('/plan/') && path !== '/plan') {
    if (raw.length >= 28) return raw;
    return `${raw}: 2026 Thailand Travel Guide`;
  }
  if (path.startsWith('/thai-food/') && path !== '/thai-food') {
    return raw.toLowerCase().includes('food') ? `${raw} (2026 Guide)` : `${raw} Food Guide: Dishes and Stalls`;
  }
  if (path.startsWith('/attractions/') && path !== '/attractions') {
    return `${raw}: Tickets, Hours and Tips`;
  }
  if (path.startsWith('/resort-living/')) {
    const parent = page.crumbs[page.crumbs.length - 2]?.name;
    return parent && parent !== 'Resort Living'
      ? `${raw}, ${parent}: Luxury Resort Guide`
      : `${raw}: Luxury Villa and Beach Guide`;
  }
  if (path.startsWith('/interests/nightlife/')) {
    return `${raw}: Rooftops, Bars and Late Nights`;
  }
  if (path.startsWith('/interests/') && path !== '/interests') {
    return `${raw} in Thailand: Regions and Season`;
  }
  if (path.split('/').filter(Boolean).length >= 2 && (page.schema === 'TouristDestination' || page.schema === 'City')) {
    const parent = page.crumbs[page.crumbs.length - 2]?.name;
    return parent ? `${raw}, ${parent}: Stays and Transport` : `${raw} Guide: Areas, Stays and Transit`;
  }
  if (page.schema === 'City' || page.schema === 'TouristDestination') {
    return `${raw} Travel Guide: Best Areas and Stays`;
  }
  if (raw.length >= 28) return raw;
  return `${raw}: Thailand Travel Guide`;
}

export function seoTitle(page: Page): string {
  let core = expandCore(page).replace(/&/g, 'and').replace(/\s+/g, ' ').trim();
  core = stripSuffix(core);

  const withSuffix = `${core}${TITLE_SUFFIX}`;
  if (withSuffix.length >= TITLE_MIN && withSuffix.length <= TITLE_MAX) return withSuffix;

  if (withSuffix.length > TITLE_MAX) {
    const maxCore = TITLE_MAX - TITLE_SUFFIX.length;
    const trimmedCore = trimAtWord(core, maxCore);
    const next = `${trimmedCore}${TITLE_SUFFIX}`;
    if (next.length >= TITLE_MIN && next.length <= TITLE_MAX) return next;
    if (core.length >= TITLE_MIN && core.length <= TITLE_MAX) return core;
    if (core.length > TITLE_MAX) return trimAtWord(core, TITLE_MAX);
  }

  if (core.length >= TITLE_MIN && core.length <= TITLE_MAX) return core;

  const contextTail = page.geo?.containedIn ? ` in ${page.geo.containedIn}` : ' in Thailand (2026)';
  const candidate = `${core}${contextTail}${TITLE_SUFFIX}`;
  if (candidate.length >= TITLE_MIN && candidate.length <= TITLE_MAX) return candidate;
  if (candidate.length > TITLE_MAX) {
    const shortCand = `${core} (2026)${TITLE_SUFFIX}`;
    if (shortCand.length >= TITLE_MIN && shortCand.length <= TITLE_MAX) return shortCand;
    return trimAtWord(candidate, TITLE_MAX);
  }
  return `${core} (2026 Thailand Travel Guide)`.slice(0, TITLE_MAX);
}

export function seoDescription(page: Page): string {
  const parts = [
    visible(page.description),
    visible(page.lede),
    ...page.facts.map((fact) => `${visible(fact.label)}: ${visible(fact.value)}.`),
    ...(page.paragraphs || []).slice(0, 2).map((p) => visible(p)),
  ].filter(Boolean);

  let text = parts[0] || visible(page.title);
  if (text.length >= DESC_MIN && text.length <= DESC_MAX) return text;
  if (text.length > DESC_MAX) return trimAtWord(text, DESC_MAX);

  for (const extra of parts.slice(1)) {
    if (text.includes(extra)) continue;
    const sep = /[.!?]$/.test(text) ? ' ' : '. ';
    const joined = `${text}${sep}${extra}`.replace(/\s+/g, ' ').trim();
    if (joined.length >= DESC_MIN && joined.length <= DESC_MAX) return joined;
    if (joined.length > DESC_MAX) {
      const clipped = trimAtWord(joined, DESC_MAX);
      if (clipped.length >= DESC_MIN) return clipped;
      return joined.slice(0, DESC_MAX).trim();
    }
    text = joined;
  }

  const tail = ` Compare verified 2026 routes, areas, and THB costs across ${visible(page.title)}.`;
  const combined = `${text}${tail}`.replace(/\s+/g, ' ').trim();
  if (combined.length > DESC_MAX) {
    const clipped = trimAtWord(combined, DESC_MAX);
    return clipped.length >= DESC_MIN ? clipped : combined.slice(0, DESC_MAX).trim();
  }
  return combined;
}

export function assertSeoBounds(page: Page): { title: string; description: string } {
  const title = seoTitle(page);
  const description = seoDescription(page);
  return { title, description };
}
