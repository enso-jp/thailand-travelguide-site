import type { Page } from './content';
import { UniquePhotos } from './photos';
import { REGIONS, regionForPath, type RegionSlug } from './regions';

export type ItineraryLink = {
  href: string;
  name: string;
  days: number;
  dayLabel: string;
  suits: string;
  photo: string;
};

export type ItineraryGroup = {
  id: string;
  label: string;
  items: ItineraryLink[];
};

export type ItineraryRegionGroup = {
  id: string;
  label: string;
  count: number;
  lengths: ItineraryGroup[];
};

export type TopPick = ItineraryLink & { route: string };

const TOP_PICK_DEFS: Array<{ href: string; name: string; route: string; photo: string }> = [
  {
    href: '/itineraries/3-days-bangkok-stopover',
    name: '3 days in Bangkok',
    route: 'Royal river wats, one market, one rooftop',
    photo: '/photos/old-city.jpg',
  },
  {
    href: '/itineraries/first-week-7-days',
    name: 'First week',
    route: 'Bangkok plus Chiang Mai, or Bangkok plus one beach',
    photo: '/photos/sukhumvit.jpg',
  },
  {
    href: '/itineraries/10-days-classic-thailand',
    name: 'Classic 10 days',
    route: 'Bangkok, Chiang Mai, then one coast',
    photo: '/photos/doi-suthep.jpg',
  },
  {
    href: '/itineraries/best-14-days',
    name: 'Best 14 days',
    route: 'Bangkok, Chiang Mai, then one south coast',
    photo: '/photos/chiang-mai.jpg',
  },
  {
    href: '/itineraries/7-days-phuket-krabi-phi-phi',
    name: 'Phuket Krabi and Phi Phi',
    route: 'Phuket, Phi Phi, then Krabi',
    photo: '/photos/phi-phi.jpg',
  },
  {
    href: '/itineraries/5-days-chiang-mai-and-chiang-rai',
    name: '5 days Chiang Mai and Chiang Rai',
    route: 'Old City, Doi Suthep, then Chiang Rai',
    photo: '/photos/chiang-rai.jpg',
  },
];

const LENGTH_GROUPS: Array<{ id: string; label: string; max: number }> = [
  { id: 'days-3', label: '3 to 5 days', max: 5 },
  { id: 'days-7', label: '1 week', max: 9 },
  { id: 'days-10', label: '10 days', max: 12 },
  { id: 'days-14', label: '2 weeks', max: 16 },
  { id: 'days-21', label: '3 weeks', max: 99 },
];

const SUITS: Record<string, string> = {
  '/itineraries/3-days-bangkok-food-and-rooftops': 'Fits a 72-hour stopover that wants street food and one rooftop.',
  '/itineraries/3-days-bangkok-riverside-stopover': 'Fits a long-haul stopover that wants a river hotel and boats.',
  '/itineraries/4-days-bangkok-and-ayutthaya': 'Fits first-timers who want ruins without the River Kwai.',
  '/itineraries/4-days-chiang-mai-only': 'Fits a short north stay that skips Pai.',
  '/itineraries/4-days-kanchanaburi-erawan': 'Fits a river and falls weekend west of Bangkok.',
  '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi': 'Fits a short inland loop of temples and the River Kwai.',
  '/itineraries/5-days-bangkok-couples': 'Fits couples who want the river and two rooftops.',
  '/itineraries/5-days-phuket-west-coast': 'Fits a swim stay on Kata, Kamala, or Bang Tao.',
  '/itineraries/5-days-koh-samui-beaches': 'Fits a one-island Gulf stay with no boat hop.',
  '/itineraries/6-days-pai-mae-hong-son': 'Fits travelers who accept the Route 1095 van.',
  '/itineraries/6-days-bangkok-and-pattaya': 'Fits a city stay plus a Jomtien swim.',
  '/itineraries/7-days-northern-thailand-loop': 'Fits a north-only week of Chiang Mai, Pai, and Chiang Rai.',
  '/itineraries/7-days-koh-samui-and-koh-phangan': 'Fits a January to September week on two Gulf islands.',
  '/itineraries/7-days-bangkok-and-hua-hin-kids': 'Fits families who want Bangkok and a Hua Hin beach.',
  '/itineraries/7-days-chiang-mai-and-pai-couples': 'Fits couples who want the moat and a Pai night.',
  '/itineraries/7-days-khao-lak-and-similan': 'Fits park-season trips based in Khao Lak.',
  '/itineraries/7-days-krabi-and-koh-lanta': 'Fits an Andaman split of Krabi and Koh Lanta.',
  '/itineraries/7-days-sukhothai-and-chiang-mai': 'Fits a ruins morning plus nights inside the moat.',
  '/itineraries/7-days-bangkok-da-nang-hoi-an': 'Fits a short Bangkok hop to Da Nang and Hoi An.',
  '/itineraries/8-days-bangkok-and-chiang-mai': 'Fits first-timers who want hills and no beach.',
  '/itineraries/8-days-railay-phi-phi-couples': 'Fits couples on a dry-season Railay and Phi Phi week.',
  '/itineraries/8-days-samui-and-koh-tao-dive': 'Fits divers who want Samui and then Koh Tao.',
  '/itineraries/8-days-chiang-mai-rai-pai': 'Fits a north trio of Chiang Mai, Chiang Rai, and Pai.',
  '/itineraries/8-days-central-ruins': 'Fits temple days in Ayutthaya and Sukhothai.',
  '/itineraries/9-days-bangkok-and-phuket': 'Fits November to April trips that want city, then Phuket.',
  '/itineraries/10-days-gulf-islands-samui-phangan-tao': 'Fits a Gulf hop of Samui, Phangan, and Tao.',
  '/itineraries/10-days-bangkok-khao-sok-krabi': 'Fits a city, lake, and Railay line on one sea.',
  '/itineraries/10-days-first-timer-gulf': 'Fits first-timers who want Bangkok and then Samui.',
  '/itineraries/10-days-chiang-mai-hua-hin-family': 'Fits families splitting the north and Hua Hin.',
  '/itineraries/10-days-khao-lak-family': 'Fits families who want a shallow Andaman beach.',
  '/itineraries/10-days-koh-chang-and-koh-kood': 'Fits a Trat pair of Koh Chang and Koh Kood.',
  '/itineraries/10-days-backpacker-north': 'Fits backpackers on the Chiang Mai, Pai, and Chiang Rai loop.',
  '/itineraries/10-days-lanta-and-lipe': 'Fits a far-south Andaman hop to car-free Lipe.',
  '/itineraries/10-days-north-loop-slow': 'Fits a slower north trip with no beach.',
  '/itineraries/10-days-bangkok-and-ho-chi-minh': 'Fits a city pair of Bangkok and Ho Chi Minh City.',
  '/itineraries/south-islands-10-days': 'Fits travelers who will pick Andaman or Gulf, not both.',
  '/itineraries/12-days-thailand-first-timer': 'Fits a first trip of city, north, then one coast.',
  '/itineraries/12-days-andaman-honeymoon': 'Fits couples who want Phuket, Phi Phi, and Railay.',
  '/itineraries/12-days-andaman-without-phuket': 'Fits travelers who land in Krabi and skip Phuket.',
  '/itineraries/12-days-chiang-mai-and-hanoi': 'Fits a hills trip that continues to Hanoi.',
  '/itineraries/2-weeks-andaman-island-hopping': 'Fits an Andaman hop from Phuket or Krabi to Lipe.',
  '/itineraries/2-weeks-thailand-with-kids': 'Fits families who need a pool and a slow pace.',
  '/itineraries/2-weeks-thailand-honeymoon': 'Fits couples who want a river hotel, a spa, and one coast.',
  '/itineraries/14-days-samui-family-slow': 'Fits families who want to stay on one Gulf island.',
  '/itineraries/14-days-backpacker-gulf': 'Fits backpackers hopping Samui, Phangan, and Tao.',
  '/itineraries/14-days-backpacker-andaman': 'Fits backpackers flying into Phuket and finishing at Lipe.',
  '/itineraries/14-days-thailand-vietnam-first-timer': 'Fits a first dual-country trip of two Thai cities and one in Vietnam.',
  '/itineraries/16-days-thailand-vietnam-coasts': 'Fits a longer trip with one Thai sea and central Vietnam.',
  '/itineraries/3-weeks-grand-thailand': 'Fits travelers who fly north to south once and pick one sea.',
  '/itineraries/21-days-backpacker-thailand': 'Fits backpackers on vans and boats who lock one beach to the month.',
};

export function itineraryDayCount(path: string): number {
  const slug = path.split('/').filter(Boolean).pop() || '';
  const weeks = slug.match(/(?:^|-)(\d+)-weeks?(?:-|$)/);
  if (weeks) return Number(weeks[1]) * 7;
  const days = slug.match(/(?:^|-)(\d+)-days?(?:-|$)/);
  if (days) return Number(days[1]);
  return 0;
}

export function dayLabel(days: number): string {
  if (days <= 0) return 'Route';
  return days === 1 ? '1 day' : `${days} days`;
}

function shortName(page: Page): string {
  const crumb = page.crumbs?.[1]?.name?.trim();
  if (crumb && crumb !== 'Itineraries') return crumb;
  return page.title.replace(/\s+itinerary$/i, '').replace(/:.*/, '').trim();
}

function suitsFor(page: Page): string {
  const curated = SUITS[page.path];
  if (curated) return curated;
  const lede = page.lede.replace(/\s+/g, ' ').trim();
  const sentences = lede.split(/(?<=[.!?])\s+/).filter(Boolean);
  const who = sentences.find((sentence) => /\b(fits|suits|for|first|families|couples|backpack)/i.test(sentence));
  const line = (who || sentences[0] || shortName(page)).replace(/\s+/g, ' ').trim();
  if (line.length <= 140) return line;
  const cut = line.slice(0, 137);
  const word = cut.lastIndexOf(' ');
  return `${(word > 80 ? cut.slice(0, word) : cut).replace(/[,:;]$/, '')}.`;
}

function groupFor(days: number): { id: string; label: string } {
  return LENGTH_GROUPS.find((group) => days <= group.max) || LENGTH_GROUPS[LENGTH_GROUPS.length - 1];
}

type HubRegion = RegionSlug | 'multi';

const REGION_ORDER: HubRegion[] = ['central', 'north', 'andaman', 'gulf', 'east', 'multi'];

const REGION_LABELS: Record<HubRegion, string> = {
  central: 'Bangkok & Central',
  north: 'North',
  andaman: 'Andaman',
  gulf: 'Gulf',
  east: 'East & Isan',
  multi: 'More than one region',
};

const SLUG_REGIONS: Array<{ region: RegionSlug; pattern: RegExp }> = [
  { region: 'north', pattern: /(^|-)(chiang-mai|chiang-rai|pai|sukhothai|northern|north)(-|$)/ },
  { region: 'andaman', pattern: /(^|-)(phuket|krabi|phi-phi|lanta|lipe|khao-lak|khao-sok|andaman|railay|similan)(-|$)/ },
  { region: 'gulf', pattern: /(^|-)(samui|phangan|tao|ang-thong|gulf)(-|$)/ },
  { region: 'east', pattern: /(^|-)(pattaya|koh-chang|koh-kood|khao-yai)(-|$)/ },
  { region: 'central', pattern: /(^|-)(bangkok|ayutthaya|kanchanaburi|hua-hin|central)(-|$)/ },
];

const PLACE_ALIASES: Array<{ name: string; region: RegionSlug }> = [
  { name: 'Andaman', region: 'andaman' },
  { name: 'Gulf', region: 'gulf' },
  { name: 'Railay', region: 'andaman' },
  { name: 'Similan', region: 'andaman' },
  { name: 'Khao Lak', region: 'andaman' },
  { name: 'Phi Phi', region: 'andaman' },
  { name: 'Lanta', region: 'andaman' },
  { name: 'Lipe', region: 'andaman' },
  { name: 'Samui', region: 'gulf' },
  { name: 'Phangan', region: 'gulf' },
  { name: 'Ang Thong', region: 'gulf' },
  { name: 'Northern', region: 'north' },
];

const PLACE_NAMES: Array<{ name: string; region: RegionSlug }> = (() => {
  const seen = new Set<string>();
  const places: Array<{ name: string; region: RegionSlug }> = [];
  for (const region of REGIONS) {
    for (const place of region.places) {
      const key = place.name.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      places.push({ name: place.name, region: regionForPath(place.href) });
    }
  }
  for (const alias of PLACE_ALIASES) {
    const key = alias.name.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    places.push(alias);
  }
  return places.sort((a, b) => b.name.length - a.name.length);
})();

function regionsInSlug(path: string): Set<RegionSlug> {
  const slug = path.split('/').filter(Boolean).pop() || '';
  const found = new Set<RegionSlug>();
  for (const rule of SLUG_REGIONS) {
    if (rule.pattern.test(slug)) found.add(rule.region);
  }
  return found;
}

function regionsInText(text: string): Set<RegionSlug> {
  const found = new Set<RegionSlug>();
  for (const place of PLACE_NAMES) {
    const escaped = place.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (new RegExp(`(^|[^A-Za-z])${escaped}([^A-Za-z]|$)`, 'i').test(text)) found.add(place.region);
  }
  if (/\bthe north\b/i.test(text)) found.add('north');
  return found;
}

function planningSentences(page: Page): string {
  const raw = [page.lede, ...(page.facts || []).map((fact) => fact.value)].join('\n');
  return raw
    .split(/\n+|(?<=[.!?])\s+/)
    .filter((sentence) => !/\b(skip|keep|do not|don't|without|off this|off the|different trip)\b/i.test(sentence))
    .join('\n');
}

function hubRegionFor(page: Page): HubRegion {
  const found = regionsInSlug(page.path);
  for (const region of regionsInText(page.title)) found.add(region);
  if (found.size < 2 && regionsInSlug(page.path).size === 0) {
    for (const region of regionsInText(planningSentences(page))) found.add(region);
  }
  if (found.size === 0) throw new Error(`Unclassified itinerary region: ${page.path}`);
  if (found.size > 1) return 'multi';
  return [...found][0];
}

function byDaysThenName(a: ItineraryLink, b: ItineraryLink): number {
  return a.days - b.days || a.name.localeCompare(b.name);
}

export function buildItineraryHub(pages: Page[], reservedPhotos: string[] = []): {
  picks: TopPick[];
  regions: ItineraryRegionGroup[];
  all: ItineraryLink[];
} {
  const itineraries = pages.filter((page) => page.path.startsWith('/itineraries/'));
  const byPath = new Map(itineraries.map((page) => [page.path, page]));
  const bag = new UniquePhotos(reservedPhotos);
  const picks: TopPick[] = TOP_PICK_DEFS.map((pick) => {
    const page = byPath.get(pick.href);
    if (!page) throw new Error(`Missing itinerary top pick ${pick.href}`);
    const days = itineraryDayCount(page.path);
    return {
      href: page.path,
      name: pick.name,
      route: pick.route,
      days,
      dayLabel: dayLabel(days),
      suits: suitsFor(page),
      photo: bag.take(pick.photo, `${page.path} ${pick.name}`),
    };
  });
  const featured = new Set(picks.map((pick) => pick.href));
  const links: ItineraryLink[] = itineraries.map((page) => {
    const days = itineraryDayCount(page.path);
    const featuredPick = picks.find((pick) => pick.href === page.path);
    return {
      href: page.path,
      name: featuredPick?.name || shortName(page),
      days,
      dayLabel: dayLabel(days),
      suits: suitsFor(page),
      photo: featuredPick?.photo || bag.take(page.photo, `${page.path} ${page.title}`),
    };
  });
  const listed = links.filter((item) => !featured.has(item.href));
  const regionByHref = new Map(itineraries.map((page) => [page.path, hubRegionFor(page)]));
  const regions = REGION_ORDER.map((region) => {
    const items = listed.filter((item) => regionByHref.get(item.href) === region);
    const lengths = LENGTH_GROUPS.map((group) => ({
      id: `region-${region}-${group.id}`,
      label: group.label,
      items: items.filter((item) => groupFor(item.days).id === group.id).sort(byDaysThenName),
    })).filter((group) => group.items.length > 0);
    return {
      id: `region-${region}`,
      label: REGION_LABELS[region],
      count: items.length,
      lengths,
    };
  }).filter((region) => region.count > 0);
  const order = new Map(LENGTH_GROUPS.map((group, index) => [group.id, index]));
  const all = [...links].sort(
    (a, b) => (order.get(groupFor(a.days).id)! - order.get(groupFor(b.days).id)!) || byDaysThenName(a, b),
  );
  return { picks, regions, all };
}
