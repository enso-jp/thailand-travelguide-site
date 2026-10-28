import {
  hotelSearchLink,
  klookTours,
  stayLink,
  type StayCity,
} from './partners';
import type { Page, Section } from './content';

const FORBIDDEN_VISIBLE = [
  '11105102',
  '334225872',
  '793638',
  '588978',
  'city 62195',
  'click-out',
  'stays scannable',
];

const DAY_POOL = [
  '/photos/wat-pho.jpg',
  '/photos/wat-arun-night.jpg',
  '/photos/chatuchak.jpg',
  '/photos/yaowarat.jpg',
  '/photos/grand-palace.jpg',
  '/photos/phi-phi.jpg',
  '/photos/railay.jpg',
  '/photos/cheow-lan.jpg',
  '/photos/doi-suthep.jpg',
  '/photos/ferry-gulf.jpg',
  '/photos/longtail-andaman.jpg',
  '/photos/night-market-cm.jpg',
  '/photos/erawan.jpg',
  '/photos/ang-thong.jpg',
  '/photos/lumphini.jpg',
  '/photos/jim-thompson.jpg',
  '/photos/patong-night.jpg',
  '/photos/chaweng-night.jpg',
  '/photos/chinatown-day.jpg',
  '/photos/silom-night.jpg',
  '/photos/koh-kood.jpg',
  '/photos/bts.jpg',
  '/photos/ari.jpg',
  '/photos/lamai.jpg',
  '/photos/chaweng.jpg',
  '/photos/kata-and-karon.jpg',
  '/photos/kamala-and-surin.jpg',
  '/photos/rawai-and-nai-harn.jpg',
  '/photos/koh-tao.jpg',
  '/photos/koh-lanta.jpg',
  '/photos/koh-lipe.jpg',
  '/photos/pai.jpg',
  '/photos/sukhothai.jpg',
  '/photos/kanchanaburi.jpg',
  '/photos/ayutthaya.jpg',
  '/photos/hua-hin.jpg',
  '/photos/khao-lak.jpg',
  '/photos/northern.jpg',
  '/photos/riverside.jpg',
  '/photos/old-city.jpg',
  '/photos/sukhumvit.jpg',
  '/photos/siam.jpg',
  '/photos/nightlife.jpg',
  '/photos/resort.jpg',
  '/photos/bangkok.jpg',
  '/photos/chiang-mai.jpg',
  '/photos/phuket.jpg',
  '/photos/krabi.jpg',
  '/photos/koh-samui.jpg',
  '/photos/koh-phangan.jpg',
  '/photos/khao-sok.jpg',
];

function cityFor(page: Page): StayCity {
  if (page.path.includes('phuket') || page.path.includes('khao-lak') || page.path.includes('yao') || page.path.includes('avista') || page.path.includes('amanpuri') || page.path.includes('trisara')) {
    return 'phuket';
  }
  if (page.path.includes('krabi') || page.path.includes('railay') || page.path.includes('lanta') || page.path.includes('phi-phi') || page.path.includes('rayavadee') || page.path.includes('phulay')) {
    return 'krabi';
  }
  if (page.path.includes('samui') || page.path.includes('phangan') || page.path.includes('tao')) return 'koh-samui';
  if (page.path.includes('chiang-mai') || page.path.includes('nimman') || page.path.includes('pai') || page.path.includes('veranda') || page.path.includes('137-pillars') || page.path.includes('anantara-chiang')) {
    return 'chiang-mai';
  }
  if (page.path.includes('kood') || page.path.includes('soneva')) return 'koh-kood';
  if (page.path.includes('chang')) return 'koh-chang';
  if (page.path.includes('hua-hin')) return 'hua-hin';
  if (page.path.includes('ayutthaya')) return 'ayutthaya';
  if (page.path.includes('kanchanaburi')) return 'kanchanaburi';
  if (page.path.includes('chiang-rai')) return 'chiang-rai';
  return 'bangkok';
}

function scrubVisible(text: string): string {
  return text
    .replace(/city 62195/gi, 'Koh Kood')
    .replace(/click-outs/gi, 'booking links')
    .replace(/click-out/gi, 'booking link')
    .replace(/stays scannable/gi, 'stays easy to compare')
    .replace(/Allianceid\s*11105102/gi, 'Trip.com')
    .replace(/SID\s*334225872/gi, '')
    .replace(/11105102/g, '')
    .replace(/334225872/g, '')
    .replace(/588978/g, '')
    .replace(/793638/g, '')
    .replace(/[ \t]{2,}/g, ' ')
    .replace(/ +\./g, '.')
    .trim();
}

function mapStrings<T>(value: T, visit: (text: string) => string): T {
  if (typeof value === 'string') return visit(value) as T;
  if (Array.isArray(value)) return value.map((item) => mapStrings(item, visit)) as T;
  if (value && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [key, item] of Object.entries(value)) {
      if (key === 'href' || key === 'stayHref' || key === 'tourHref') {
        out[key] = item;
        continue;
      }
      out[key] = mapStrings(item, visit);
    }
    return out as T;
  }
  return value;
}

function scrubPage(page: Page): Page {
  return mapStrings(page, scrubVisible);
}

function debullet(text: string): string {
  return text
    .replace(/^(?:[-*•]|\d+\.)\s+/, '')
    .replace(/\s+(?:[-*•])\s+/g, '. ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** Turn leaked markdown bullets in ledes and paragraphs into readable sentences. */
export function splitLead(page: Page): Page {
  const bulletSplit = /(?:\n|\s*[•]\s*)/;
  let lede = page.lede;
  let extras: string[] = [];
  if (/[•]|(?:^|\n)\s*(?:[-*•]|\d+\.)\s+/.test(lede)) {
    const parts = lede
      .split(bulletSplit)
      .map((part) => debullet(part))
      .filter(Boolean);
    if (parts.length > 1) {
      lede = parts[0];
      extras = parts.slice(1);
    } else {
      lede = debullet(lede);
    }
  }
  const paragraphs = [...extras, ...(page.paragraphs || [])].map(debullet).filter(Boolean);
  const sections = (page.sections || []).map((section) => ({
    ...section,
    paragraphs: (section.paragraphs || []).map(debullet).filter(Boolean),
  }));
  return { ...page, lede, paragraphs, sections: sections.length ? sections : page.sections };
}

/** Deduplicate day-card photos against the hero, portraits, and each other. */
export function uniquifyDays(page: Page): Page {
  if (!page.days?.length) return page;
  const used = new Set<string>();
  if (page.photo) used.add(page.photo);
  for (const item of page.portraits || []) used.add(item.photo);
  const extras = DAY_POOL.filter((photo) => !used.has(photo));
  let extraIndex = 0;
  const days = page.days.map((day) => {
    let photo = day.photo;
    if (used.has(photo)) {
      const next = extras[extraIndex];
      extraIndex += 1;
      if (next) photo = next;
    }
    used.add(photo);
    return { ...day, photo };
  });
  return { ...page, days };
}

function isPartnerHref(href: string): boolean {
  return /trip\.com|klook\.com|tp\.media/i.test(href);
}

/** Give each booking card a real Trip.com or Klook URL, never a duplicate placeholder. */
export function uniquifyAffiliates(page: Page): Page {
  const city = cityFor(page);
  const seen = new Set<string>();
  const affiliates = (page.affiliates || []).map((row, index) => {
    let href = row.href || '';
    const wantsStay = row.partner === 'stay' || /stay|rate|hotel|night/i.test(`${row.title} ${row.cta}`);
    if (!isPartnerHref(href)) {
      href = wantsStay
        ? hotelSearchLink(row.title || page.title, city)
        : klookTours(`${page.title} ${row.title}`.trim());
    }
    if (seen.has(href)) {
      href = wantsStay
        ? hotelSearchLink(`${row.title || page.title} ${index + 1}`, city)
        : klookTours(`${page.title} ${row.title} ${index + 1}`);
    }
    seen.add(href);
    return { ...row, href };
  });
  let bookingCta = page.bookingCta;
  if (bookingCta) {
    bookingCta = {
      ...bookingCta,
      stayHref: isPartnerHref(bookingCta.stayHref) ? bookingCta.stayHref : stayLink(city),
      tourHref: isPartnerHref(bookingCta.tourHref) ? bookingCta.tourHref : klookTours(page.title),
      stayNote: scrubVisible(bookingCta.stayNote || 'Check live 2026 rates and free-cancellation options.'),
      tourNote: scrubVisible(bookingCta.tourNote || 'Book tickets, tours, or transfers ahead for peak dates.'),
    };
  }
  return { ...page, affiliates, bookingCta };
}

function tableSection(id: string, title: string, headers: string[], rows: string[][], paragraphs: string[] = []): Section {
  return { id, title, paragraphs, table: { headers, rows } };
}

function applyResortHub(page: Page): Page {
  if (page.path !== '/interests/resort-living') return page;
  const ranking: Section[] = [
    tableSection(
      'bangkok-flagships',
      'Bangkok flagships',
      ['Stay', 'Why it is on this list', '2026 move'],
      [
        ['Capella Bangkok', 'Quiet Chao Phraya path, not a BTS tower', 'Grab to Saphan Taksin, 80 to 150 THB'],
        ['The Siam', 'Private Dusit compound and hotel boat', 'Boat to Old City piers, 20 to 40 minutes'],
        ['Four Seasons Bangkok', 'River hotel when the water is the week', 'River or Grab; no BTS at the door'],
        ['Mandarin Oriental Bangkok', 'Historic river rooms and the Oriental pier', 'Boat or Grab along Charoenkrung'],
        ['Rosewood Bangkok', 'Ploenchit tower with BTS Exit 1 in the basement', 'Ride the Skytrain; airport car 45 plus minutes'],
      ],
      ['These are the Bangkok flagships. The MGallery on Ratchathewi is a designed city night, not this river-and-rail set.'],
    ),
    tableSection(
      'phuket-flagships',
      'Phuket and the Andaman west coast',
      ['Stay', 'Why it is on this list', '2026 move'],
      [
        ['Amanpuri', 'Coconut-grove pavilions above a private cove', 'HKT car 45 to 75 minutes'],
        ['Trisara Phuket', 'Guest-only Cherngtalay villas', 'HKT car, closer than a town hop'],
      ],
      ['West-coast monsoon still rules. The hill MGallery is a quieter Andaman week, not a flagship on this table.'],
    ),
    tableSection(
      'chiang-mai-flagships',
      'Chiang Mai flagships',
      ['Stay', 'Why it is on this list', '2026 move'],
      [
        ['Four Seasons Chiang Mai', 'Mae Rim rice terraces when the valley is the trip', '30 to 45 minutes to the Old City'],
        ['Anantara Chiang Mai', 'Ping River resort beside the Night Bazaar', 'In-town; CNX 15 to 25 minutes'],
        ['137 Pillars House', 'Wat Gate teak compound east of the Ping', 'One bridge to Tha Phae'],
      ],
      ['The hill pool above the valley is a view stay, not a flagship on this table.'],
    ),
    tableSection(
      'samui-flagships',
      'Koh Samui flagships',
      ['Stay', 'Why it is on this list', '2026 move'],
      [
        ['Six Senses Samui', 'Bophut-side villas when the hotel is the week', 'USM car 15 to 30 minutes'],
        ['Four Seasons Koh Samui', 'Northwest-coast villas and a Gulf view', 'USM car 20 to 40 minutes'],
        ['Ritz-Carlton Koh Samui', 'Laid-back Gulf resort week', 'USM car; Grab for most dinners'],
      ],
    ),
    tableSection(
      'krabi-kood-flagships',
      'Krabi, Yao Noi, and Koh Kood',
      ['Stay', 'Why it is on this list', '2026 move'],
      [
        ['Rayavadee', 'Boat-only Railay grove', 'Ao Nang boat about 15 minutes'],
        ['Phulay Bay', 'Sealed Krabi reserve west of Ao Nang', 'KBV car about 40 km'],
        ['Six Senses Yao Noi', 'Hill villas over Phang Nga Bay', 'Pier plus boat; no road island'],
        ['Soneva Kiri', 'Koh Kood hideaway with its own transfer', 'Bangkok to Trat, then the resort boat'],
      ],
    ),
  ];
  return {
    ...page,
    paragraphs: [
      'Use this hub when the hotel is the itinerary. Tables list the top flagship per destination: river houses in Bangkok, Andaman villas, Mae Rim and the Ping, Samui coasts, and the sealed Krabi and Trat stays. Compare transfer time and monsoon side before you lock a week.',
      'A HKT car to the west coast is 45 to 90 minutes. A USM car is often 15 to 40 minutes. Bangkok river hotels want a boat or a Grab, not a BTS gate, except Rosewood on Ploenchit.',
    ],
    sections: ranking,
    affiliates: [
      {
        title: 'Phuket villa search',
        kicker: 'Andaman',
        body: 'West-coast searches for Amanpuri, Trisara, and nearby peers.',
        href: stayLink('phuket'),
        cta: 'Search stays',
        photo: '/photos/resort-amanpuri.jpg',
        partner: 'stay',
      },
      {
        title: 'Koh Kood hideaways',
        kicker: 'Soneva Kiri',
        body: 'Search Koh Kood stays, not Bangkok, then book the transfer with the room.',
        href: stayLink('koh-kood'),
        cta: 'Search stays',
        photo: '/photos/koh-kood.jpg',
        partner: 'stay',
      },
    ],
  };
}

export function applyWave16(pages: Page[]): Page[] {
  return pages.map((raw) => {
    let page = applyResortHub(raw);
    page = splitLead(page);
    page = uniquifyDays(page);
    page = uniquifyAffiliates(page);
    page = scrubPage(page);
    return page;
  });
}

export const wave16VisibleForbidden = FORBIDDEN_VISIBLE;
