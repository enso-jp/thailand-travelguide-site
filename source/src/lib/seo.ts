import type { Page } from './content';

const TITLE_SUFFIX = ' | Thailand Guide';
const TITLE_MIN = 45;
const TITLE_MAX = 60;
const DESC_MIN = 130;
const DESC_MAX = 155;

const TITLE_CORE: Record<string, string> = {
  '/': 'Thailand Travel Guide: first trip routes',
  '/bangkok': 'Bangkok Guide: BTS, temples, first nights',
  '/chiang-mai': 'Chiang Mai Guide: Old City and Nimman',
  '/phuket': 'Phuket Guide: west beaches, HKT, Phi Phi',
  '/krabi': 'Krabi Guide: Ao Nang, Railay, KBV flights',
  '/koh-samui': 'Koh Samui Guide: USM, Chaweng, Gulf boats',
  '/get-there/bangkok-to-chiang-mai': 'Bangkok to Chiang Mai: flight vs sleeper',
  '/get-there/bangkok-to-phuket': 'Bangkok to Phuket: 80-min flight, 2026 fares',
  '/get-there/bangkok-to-koh-samui': 'Bangkok to Koh Samui: USM vs Donsak ferry',
  '/get-there/bangkok-to-krabi': 'Bangkok to Krabi: 75-min KBV flight, fares',
  '/get-there/chiang-mai-to-pai': 'Chiang Mai to Pai: 3.5-4.5 hr Route 1095 van',
  '/get-there/phuket-to-krabi-phi-phi': 'Phuket to Koh Phi Phi: morning ferry, fares',
  '/itineraries/best-14-days': '14-Day Thailand Itinerary: one south coast',
  '/itineraries/first-week-7-days': '7-Day Thailand Itinerary: Bangkok plus one',
  '/itineraries/10-days-classic-thailand': '10-Day Thailand Itinerary: city, north, coast',
  '/itineraries/south-islands-10-days': '10-Day South Thailand: one sea, realistic pace',
  '/plan/grab-and-bts': 'Grab vs Bolt Thailand, plus Bangkok BTS/MRT',
  '/plan/esim-and-sim-cards': 'Thailand eSIM and SIM: AIS vs True-dtac 2026',
  '/plan/money-atms-and-promptpay': 'Thailand Money Guide: ATM fees and PromptPay',
  '/plan/visas-and-tdac': 'Thailand Visa and TDAC 2026: 60-day visa-free',
  '/plan/when-to-go': 'When to go to Thailand: Andaman vs Gulf 2026',
  '/plan/trains-and-ferries': 'Thailand Trains and Ferries: sleeper and boats',
};

function visible(text: string): string {
  return String(text ?? '')
    .replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function trimAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const cut = slice.lastIndexOf(' ');
  const out = (cut >= 40 ? slice.slice(0, cut) : slice).trim();
  return out.replace(/[,:;.-]+$/, '');
}

function stripSuffix(text: string): string {
  return text.replace(/\s*\|\s*Thailand Guide\s*$/i, '').trim();
}

function expandCore(page: Page): string {
  if (TITLE_CORE[page.path]) return TITLE_CORE[page.path];

  const raw = stripSuffix(visible(page.title));
  const path = page.path;

  if (path.startsWith('/get-there/') && path !== '/get-there') {
    if (/min|flight|ferry|sleeper|van|fare|2026|:/i.test(raw)) return raw;
    return `${raw}: times, fares, how to go`;
  }
  if (path.startsWith('/itineraries/') && path !== '/itineraries') {
    if (/itinerary|days in|what to see/i.test(raw)) return raw;
    return `${raw}: stops and realistic pace`;
  }
  if (path.startsWith('/plan/') && path !== '/plan') {
    if (raw.length >= 28) return raw;
    return `${raw} for a first Thailand trip`;
  }
  if (path.startsWith('/thai-food/') && path !== '/thai-food') {
    return raw.toLowerCase().includes('food') ? `${raw} 2026` : `${raw} food guide: where to eat`;
  }
  if (path.startsWith('/attractions/') && path !== '/attractions') {
    return `${raw}: tickets, hours, and tips`;
  }
  if (path.startsWith('/resort-living/')) {
    return `${raw}: flagship resort stay notes`;
  }
  if (path.startsWith('/interests/nightlife/')) {
    return `${raw}: bars, clubs, and how to go`;
  }
  if (path.startsWith('/interests/') && path !== '/interests') {
    return `${raw} in Thailand: where to start`;
  }
  if (path.split('/').filter(Boolean).length >= 2 && (page.schema === 'TouristDestination' || page.schema === 'City')) {
    const parent = page.crumbs[page.crumbs.length - 2]?.name;
    return parent ? `${raw}, ${parent}: stays and how to go` : `${raw} guide: stays and first nights`;
  }
  if (page.schema === 'City' || page.schema === 'TouristDestination') {
    return `${raw} Guide: stays, food, first nights`;
  }
  if (raw.length >= 28) return raw;
  return `${raw} Thailand travel guide`;
}

export function seoTitle(page: Page): string {
  let core = expandCore(page).replace(/\s+/g, ' ').trim();
  core = stripSuffix(core);

  const withSuffix = `${core}${TITLE_SUFFIX}`;
  if (withSuffix.length >= TITLE_MIN && withSuffix.length <= TITLE_MAX) return withSuffix;

  if (withSuffix.length > TITLE_MAX) {
    const maxCore = TITLE_MAX - TITLE_SUFFIX.length;
    core = trimAtWord(core, maxCore);
    const next = `${core}${TITLE_SUFFIX}`;
    if (next.length >= TITLE_MIN && next.length <= TITLE_MAX) return next;
    if (core.length >= TITLE_MIN && core.length <= TITLE_MAX) return core;
  }

  if (core.length >= TITLE_MIN && core.length <= TITLE_MAX) return core;

  const pads = [' 2026', ' planner', ' first trip', ': key facts'];
  let padded = core;
  for (const pad of pads) {
    const candidate = `${padded}${pad}${TITLE_SUFFIX}`;
    if (candidate.length >= TITLE_MIN && candidate.length <= TITLE_MAX) return candidate;
    if (`${padded}${pad}`.length <= TITLE_MAX - TITLE_SUFFIX.length) padded = `${padded}${pad}`;
  }

  const fallback = `${padded}${TITLE_SUFFIX}`;
  if (fallback.length >= TITLE_MIN && fallback.length <= TITLE_MAX) return fallback;
  if (fallback.length > TITLE_MAX) return trimAtWord(fallback, TITLE_MAX);
  return `${fallback} 2026`.slice(0, TITLE_MAX);
}

export function seoDescription(page: Page): string {
  const parts = [
    visible(page.description),
    visible(page.lede),
    ...page.facts.map((fact) => `${fact.label}: ${fact.value}`),
  ].filter(Boolean);

  let text = parts[0] || visible(page.title);
  if (text.length >= DESC_MIN && text.length <= DESC_MAX) return text;
  if (text.length > DESC_MAX) return trimAtWord(text, DESC_MAX);

  for (const extra of parts.slice(1)) {
    const joined = `${text} ${extra}`.replace(/\s+/g, ' ').trim();
    if (joined.length >= DESC_MIN && joined.length <= DESC_MAX) return joined;
    if (joined.length > DESC_MAX) {
      const clipped = trimAtWord(joined, DESC_MAX);
      if (clipped.length >= DESC_MIN) return clipped;
    }
    text = joined;
  }

  const closer = ' Facts first for a first Thailand trip in 2026.';
  const padded = `${text}${closer}`.replace(/\s+/g, ' ').trim();
  if (padded.length >= DESC_MIN && padded.length <= DESC_MAX) return padded;
  if (padded.length > DESC_MAX) {
    const clipped = trimAtWord(padded, DESC_MAX);
    return clipped.length >= DESC_MIN ? clipped : padded.slice(0, DESC_MAX);
  }
  return `${padded} Book stays and tickets in context.`.slice(0, DESC_MAX);
}

export function assertSeoBounds(page: Page): { title: string; description: string } {
  const title = seoTitle(page);
  const description = seoDescription(page);
  return { title, description };
}
