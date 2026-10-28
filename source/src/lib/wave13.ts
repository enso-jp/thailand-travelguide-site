import {
  stayLink,
  stayAreaLink,
  hotelSearchLink,
  klookTours,
  klookIslandHopping,
  klookTickets,
  klookRailFerry,
  type StayCity,
} from './partners';
import type { Affiliate, Page, Portrait } from './content';
import { wave13Copy } from './wave13-copy';
import { wave13DistrictPages } from './wave13-districts';
import { depthExtras } from './wave13-pad';
import { applyWave16Finish, thaiFoodHubCards as wave16FoodCards } from './wave16';

function stay(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search stays'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string, cta = 'See tickets'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'klook' };
}

const HUB_PATHS = new Set([
  '/destinations',
  '/itineraries',
  '/plan',
  '/get-there',
  '/interests',
  '/thai-food',
  '/attractions',
  '/interests/resort-living',
  '/interests/nightlife',
]);

const DEST_HUBS = new Set([
  '/bangkok',
  '/chiang-mai',
  '/phuket',
  '/krabi',
  '/koh-samui',
  '/koh-phangan',
  '/khao-sok',
  '/koh-tao',
  '/koh-lanta',
  '/koh-lipe',
  '/koh-chang-and-koh-kood',
  '/khao-lak',
  '/pai',
  '/chiang-rai',
  '/sukhothai',
  '/ayutthaya',
  '/kanchanaburi',
  '/hua-hin',
  '/destinations/northern-thailand',
  '/destinations/central-and-east',
]);

const RESORT_PHOTO: Record<string, string> = {
  '/resort-living/amanpuri': '/photos/resort-amanpuri.jpg',
  '/resort-living/six-senses-yao-noi': '/photos/resort-six-senses-yao-noi.jpg',
  '/resort-living/six-senses-samui': '/photos/resort-six-senses-samui.jpg',
  '/resort-living/capella-bangkok': '/photos/resort-capella-bangkok.jpg',
  '/resort-living/the-siam': '/photos/resort-the-siam.jpg',
  '/resort-living/four-seasons-chiang-mai': '/photos/resort-four-seasons-chiang-mai.jpg',
  '/resort-living/four-seasons-koh-samui': '/photos/resort-four-seasons-koh-samui.jpg',
  '/resort-living/soneva-kiri': '/photos/resort-soneva-kiri.jpg',
  '/resort-living/rayavadee': '/photos/resort-rayavadee.jpg',
  '/resort-living/vie-hotel-bangkok': '/photos/resort-vie-hotel-bangkok.jpg',
  '/resort-living/veranda-high-chiang-mai': '/photos/resort-veranda-high-chiang-mai.jpg',
  '/resort-living/avista-hideaway-phuket': '/photos/resort-avista-hideaway-phuket.jpg',
  '/resort-living/four-seasons-bangkok': '/photos/resort-four-seasons-bangkok.jpg',
  '/resort-living/mandarin-oriental-bangkok': '/photos/resort-mandarin-oriental-bangkok.jpg',
  '/resort-living/rosewood-bangkok': '/photos/resort-rosewood-bangkok.jpg',
  '/resort-living/trisara-phuket': '/photos/resort-trisara-phuket.jpg',
  '/resort-living/anantara-chiang-mai': '/photos/resort-anantara-chiang-mai.jpg',
  '/resort-living/137-pillars-house': '/photos/resort-137-pillars.jpg',
  '/resort-living/phulay-bay': '/photos/resort-phulay-bay.jpg',
  '/resort-living/ritz-carlton-koh-samui': '/photos/resort-ritz-carlton-koh-samui.jpg',
};

const RESORT_PARENT: Record<string, { name: string; href: string; city: StayCity }> = {
  '/resort-living/amanpuri': { name: 'Phuket', href: '/phuket', city: 'phuket' },
  '/resort-living/avista-hideaway-phuket': { name: 'Phuket', href: '/phuket', city: 'phuket' },
  '/resort-living/trisara-phuket': { name: 'Phuket', href: '/phuket', city: 'phuket' },
  '/resort-living/six-senses-yao-noi': { name: 'Krabi', href: '/krabi', city: 'phuket' },
  '/resort-living/rayavadee': { name: 'Krabi', href: '/krabi', city: 'krabi' },
  '/resort-living/phulay-bay': { name: 'Krabi', href: '/krabi', city: 'krabi' },
  '/resort-living/six-senses-samui': { name: 'Koh Samui', href: '/koh-samui', city: 'koh-samui' },
  '/resort-living/four-seasons-koh-samui': { name: 'Koh Samui', href: '/koh-samui', city: 'koh-samui' },
  '/resort-living/ritz-carlton-koh-samui': { name: 'Koh Samui', href: '/koh-samui', city: 'koh-samui' },
  '/resort-living/soneva-kiri': { name: 'Koh Chang and Koh Kood', href: '/koh-chang-and-koh-kood', city: 'koh-kood' },
  '/resort-living/capella-bangkok': { name: 'Bangkok', href: '/bangkok', city: 'bangkok' },
  '/resort-living/the-siam': { name: 'Bangkok', href: '/bangkok', city: 'bangkok' },
  '/resort-living/vie-hotel-bangkok': { name: 'Bangkok', href: '/bangkok', city: 'bangkok' },
  '/resort-living/four-seasons-bangkok': { name: 'Bangkok', href: '/bangkok', city: 'bangkok' },
  '/resort-living/mandarin-oriental-bangkok': { name: 'Bangkok', href: '/bangkok', city: 'bangkok' },
  '/resort-living/rosewood-bangkok': { name: 'Bangkok', href: '/bangkok', city: 'bangkok' },
  '/resort-living/four-seasons-chiang-mai': { name: 'Chiang Mai', href: '/chiang-mai', city: 'chiang-mai' },
  '/resort-living/veranda-high-chiang-mai': { name: 'Chiang Mai', href: '/chiang-mai', city: 'chiang-mai' },
  '/resort-living/anantara-chiang-mai': { name: 'Chiang Mai', href: '/chiang-mai', city: 'chiang-mai' },
  '/resort-living/137-pillars-house': { name: 'Chiang Mai', href: '/chiang-mai', city: 'chiang-mai' },
};

const PARENT_RULES: { test: RegExp; name: string; href: string }[] = [
  { test: /^\/bangkok(\/|$)/, name: 'Bangkok', href: '/bangkok' },
  { test: /^\/chiang-mai(\/|$)/, name: 'Chiang Mai', href: '/chiang-mai' },
  { test: /^\/phuket(\/|$)/, name: 'Phuket', href: '/phuket' },
  { test: /^\/koh-samui(\/|$)/, name: 'Koh Samui', href: '/koh-samui' },
  { test: /^\/krabi(\/|$)/, name: 'Krabi', href: '/krabi' },
  { test: /^\/khao-sok(\/|$)/, name: 'Khao Sok', href: '/khao-sok' },
  { test: /^\/koh-phangan(\/|$)/, name: 'Koh Phangan', href: '/koh-phangan' },
  { test: /^\/khao-lak(\/|$)/, name: 'Khao Lak', href: '/khao-lak' },
  { test: /^\/kanchanaburi(\/|$)/, name: 'Kanchanaburi', href: '/kanchanaburi' },
  { test: /^\/koh-tao(\/|$)/, name: 'Koh Tao', href: '/koh-tao' },
  { test: /^\/koh-lanta(\/|$)/, name: 'Koh Lanta', href: '/koh-lanta' },
  { test: /^\/koh-lipe(\/|$)/, name: 'Koh Lipe', href: '/koh-lipe' },
  { test: /^\/pai(\/|$)/, name: 'Pai', href: '/pai' },
  { test: /^\/chiang-rai(\/|$)/, name: 'Chiang Rai', href: '/chiang-rai' },
  { test: /^\/ayutthaya(\/|$)/, name: 'Ayutthaya', href: '/ayutthaya' },
  { test: /^\/hua-hin(\/|$)/, name: 'Hua Hin', href: '/hua-hin' },
  { test: /^\/sukhothai(\/|$)/, name: 'Sukhothai', href: '/sukhothai' },
];

const ATTRACTION_PARENT: Record<string, { name: string; href: string }> = {
  '/attractions/grand-palace-and-wat-phra-kaew': { name: 'Bangkok', href: '/bangkok' },
  '/attractions/wat-pho': { name: 'Bangkok', href: '/bangkok' },
  '/attractions/wat-arun': { name: 'Bangkok', href: '/bangkok' },
  '/attractions/chatuchak-weekend-market': { name: 'Bangkok', href: '/bangkok' },
  '/attractions/damnoen-saduak-and-amphawa-floating-markets': { name: 'Bangkok', href: '/bangkok' },
  '/attractions/muay-thai-stadiums-rajadamnern-and-lumpinee': { name: 'Bangkok', href: '/bangkok' },
  '/attractions/wat-phra-that-doi-suthep': { name: 'Chiang Mai', href: '/chiang-mai' },
  '/attractions/chiang-mai-ethical-elephant-sanctuaries': { name: 'Chiang Mai', href: '/chiang-mai' },
  '/attractions/white-temple-wat-rong-khun-and-blue-temple': { name: 'Chiang Rai', href: '/chiang-rai' },
  '/attractions/phang-nga-bay-and-james-bond-island': { name: 'Phuket', href: '/phuket' },
  '/attractions/phi-phi-islands-and-maya-bay': { name: 'Krabi', href: '/krabi' },
  '/attractions/railay-beach-and-phra-nang-cave': { name: 'Krabi', href: '/krabi' },
  '/attractions/cheow-lan-lake-khao-sok': { name: 'Khao Sok', href: '/khao-sok' },
  '/attractions/sanctuary-of-truth-pattaya': { name: 'Hua Hin', href: '/hua-hin' },
};

const NIGHTLIFE_PARENT: Record<string, { name: string; href: string }> = {
  '/interests/nightlife/charoenkrung-soi-nana': { name: 'Bangkok', href: '/bangkok' },
  '/interests/nightlife/thonglor-ekkamai': { name: 'Bangkok', href: '/bangkok' },
  '/interests/nightlife/sukhumvit-soi-11': { name: 'Bangkok', href: '/bangkok' },
  '/interests/nightlife/ari-pradipat': { name: 'Bangkok', href: '/bangkok' },
  '/interests/nightlife/silom-sathorn': { name: 'Bangkok', href: '/bangkok' },
  '/interests/nightlife/phuket-beach-clubs': { name: 'Phuket', href: '/phuket' },
  '/interests/nightlife/phuket-kamala-bangtao': { name: 'Phuket', href: '/phuket' },
  '/interests/nightlife/koh-samui-beach-clubs': { name: 'Koh Samui', href: '/koh-samui' },
  '/interests/nightlife/samui-bophut-lamai': { name: 'Koh Samui', href: '/koh-samui' },
};

const HUB_HERO: Record<string, string> = {
  '/destinations': '/photos/destinations.jpg',
  '/itineraries': '/photos/itineraries.jpg',
  '/plan': '/photos/plan.jpg',
  '/get-there': '/photos/get-there.jpg',
  '/interests': '/photos/interests.jpg',
  '/about': '/photos/about.jpg',
  '/privacy': '/photos/privacy.jpg',
};

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
];

function card(title: string, href: string, photo: string): Portrait {
  return { title, href, photo };
}

function destinationHubCards(): Portrait[] {
  return [
    card('Bangkok', '/bangkok', '/photos/bangkok.jpg'),
    card('Chiang Mai', '/chiang-mai', '/photos/chiang-mai.jpg'),
    card('Phuket', '/phuket', '/photos/phuket.jpg'),
    card('Krabi', '/krabi', '/photos/krabi.jpg'),
    card('Koh Samui', '/koh-samui', '/photos/koh-samui.jpg'),
    card('Koh Phangan', '/koh-phangan', '/photos/koh-phangan.jpg'),
    card('Khao Sok', '/khao-sok', '/photos/khao-sok.jpg'),
    card('Koh Tao', '/koh-tao', '/photos/koh-tao.jpg'),
    card('Koh Lanta', '/koh-lanta', '/photos/koh-lanta.jpg'),
    card('Koh Lipe', '/koh-lipe', '/photos/koh-lipe.jpg'),
    card('Koh Chang and Koh Kood', '/koh-chang-and-koh-kood', '/photos/koh-chang.jpg'),
    card('Khao Lak', '/khao-lak', '/photos/khao-lak.jpg'),
    card('Pai', '/pai', '/photos/pai.jpg'),
    card('Chiang Rai', '/chiang-rai', '/photos/chiang-rai.jpg'),
    card('Sukhothai', '/sukhothai', '/photos/sukhothai.jpg'),
    card('Ayutthaya', '/ayutthaya', '/photos/ayutthaya.jpg'),
    card('Kanchanaburi', '/kanchanaburi', '/photos/kanchanaburi.jpg'),
    card('Hua Hin', '/hua-hin', '/photos/hua-hin.jpg'),
    card('Northern corridor', '/destinations/northern-thailand', '/photos/northern.jpg'),
    card('Central and east', '/destinations/central-and-east', '/photos/hua-hin.jpg'),
  ];
}

function itineraryHubCards(): Portrait[] {
  return [
    card('3 days Bangkok', '/itineraries/3-days-bangkok-stopover', '/photos/old-city.jpg'),
    card('First week', '/itineraries/first-week-7-days', '/photos/sukhumvit.jpg'),
    card('Classic 10 days', '/itineraries/10-days-classic-thailand', '/photos/bangkok.jpg'),
    card('Best 14 days', '/itineraries/best-14-days', '/photos/chiang-mai.jpg'),
    card('5 days Chiang Mai and Chiang Rai', '/itineraries/5-days-chiang-mai-and-chiang-rai', '/photos/chiang-rai.jpg'),
    card('Northern loop', '/itineraries/7-days-northern-thailand-loop', '/photos/northern.jpg'),
    card('Bangkok to Kanchanaburi', '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi', '/photos/ayutthaya.jpg'),
    card('Bangkok, Khao Sok, Krabi', '/itineraries/10-days-bangkok-khao-sok-krabi', '/photos/khao-sok.jpg'),
    card('Phuket, Krabi, Phi Phi', '/itineraries/7-days-phuket-krabi-phi-phi', '/photos/phuket.jpg'),
    card('Samui and Phangan', '/itineraries/7-days-koh-samui-and-koh-phangan', '/photos/koh-samui.jpg'),
    card('South islands 10 days', '/itineraries/south-islands-10-days', '/photos/krabi.jpg'),
    card('Andaman 2 weeks', '/itineraries/2-weeks-andaman-island-hopping', '/photos/phi-phi.jpg'),
    card('Gulf islands 10 days', '/itineraries/10-days-gulf-islands-samui-phangan-tao', '/photos/koh-phangan.jpg'),
    card('2 weeks with kids', '/itineraries/2-weeks-thailand-with-kids', '/photos/kata-and-karon.jpg'),
    card('2 weeks honeymoon', '/itineraries/2-weeks-thailand-honeymoon', '/photos/resort.jpg'),
    card('3 weeks grand route', '/itineraries/3-weeks-grand-thailand', '/photos/itineraries.jpg'),
  ];
}

function planHubCards(): Portrait[] {
  return [
    card('When to go', '/plan/when-to-go', '/photos/phuket.jpg'),
    card('Visas and TDAC', '/plan/visas-and-tdac', '/photos/plan.jpg'),
    card('Monsoon and burn season', '/plan/monsoon-and-burn-season', '/photos/khao-lak.jpg'),
    card('eSIM and SIM cards', '/plan/esim-and-sim-cards', '/photos/bts.jpg'),
    card('Money and PromptPay', '/plan/money-atms-and-promptpay', '/photos/bangkok.jpg'),
    card('Domestic flights', '/plan/domestic-flights-and-baggage', '/photos/get-there.jpg'),
    card('Trains and ferries', '/plan/trains-and-ferries', '/photos/itineraries.jpg'),
    card('Grab and BTS', '/plan/grab-and-bts', '/photos/privacy.jpg'),
    card('Scooters and road rules', '/plan/scooters-and-road-rules', '/photos/koh-samui.jpg'),
    card('Songkran and holidays', '/plan/songkran-and-public-holidays', '/photos/chiang-mai.jpg'),
  ];
}

function getThereHubCards(): Portrait[] {
  return [
    card('Bangkok to Chiang Mai', '/get-there/bangkok-to-chiang-mai', '/photos/chiang-mai.jpg'),
    card('Bangkok to Phuket', '/get-there/bangkok-to-phuket', '/photos/phuket.jpg'),
    card('Bangkok to Koh Samui', '/get-there/bangkok-to-koh-samui', '/photos/koh-samui.jpg'),
    card('Phuket to Krabi and Phi Phi', '/get-there/phuket-to-krabi-phi-phi', '/photos/phi-phi.jpg'),
    card('Bangkok to Koh Phangan', '/get-there/bangkok-to-koh-phangan', '/photos/koh-phangan.jpg'),
    card('Bangkok to Koh Tao', '/get-there/bangkok-to-koh-tao', '/photos/koh-tao.jpg'),
    card('Bangkok to Krabi', '/get-there/bangkok-to-krabi', '/photos/krabi.jpg'),
    card('Krabi to Koh Lanta', '/get-there/krabi-to-koh-lanta', '/photos/koh-lanta.jpg'),
    card('Phuket to Koh Samui', '/get-there/phuket-to-koh-samui', '/photos/ferry-gulf.jpg'),
    card('Surat Thani to Khao Sok', '/get-there/surat-thani-to-khao-sok', '/photos/khao-sok.jpg'),
    card('Phuket to Khao Sok', '/get-there/phuket-to-khao-sok', '/photos/cheow-lan.jpg'),
    card('Chiang Mai to Pai', '/get-there/chiang-mai-to-pai', '/photos/pai.jpg'),
    card('Chiang Mai to Chiang Rai', '/get-there/chiang-mai-to-chiang-rai', '/photos/chiang-rai.jpg'),
    card('Bangkok to Ayutthaya', '/get-there/bangkok-to-ayutthaya', '/photos/ayutthaya.jpg'),
    card('Bangkok to Kanchanaburi', '/get-there/bangkok-to-kanchanaburi', '/photos/kanchanaburi.jpg'),
  ];
}

function attractionsHubCards(): Portrait[] {
  return [
    card('Grand Palace', '/attractions/grand-palace-and-wat-phra-kaew', '/photos/grand-palace.jpg'),
    card('Wat Pho', '/attractions/wat-pho', '/photos/wat-pho.jpg'),
    card('Wat Arun', '/attractions/wat-arun', '/photos/wat-arun-night.jpg'),
    card('Chatuchak', '/attractions/chatuchak-weekend-market', '/photos/chatuchak.jpg'),
    card('Floating markets', '/attractions/damnoen-saduak-and-amphawa-floating-markets', '/photos/riverside.jpg'),
    card('Doi Suthep', '/attractions/wat-phra-that-doi-suthep', '/photos/doi-suthep.jpg'),
    card('Elephant sanctuaries', '/attractions/chiang-mai-ethical-elephant-sanctuaries', '/photos/chiang-mai.jpg'),
    card('White and Blue Temples', '/attractions/white-temple-wat-rong-khun-and-blue-temple', '/photos/chiang-rai.jpg'),
    card('Phang Nga Bay', '/attractions/phang-nga-bay-and-james-bond-island', '/photos/phuket.jpg'),
    card('Phi Phi and Maya Bay', '/attractions/phi-phi-islands-and-maya-bay', '/photos/phi-phi.jpg'),
    card('Railay', '/attractions/railay-beach-and-phra-nang-cave', '/photos/railay.jpg'),
    card('Cheow Lan Lake', '/attractions/cheow-lan-lake-khao-sok', '/photos/cheow-lan.jpg'),
    card('Sanctuary of Truth', '/attractions/sanctuary-of-truth-pattaya', '/photos/pattaya.jpg'),
    card('Muay Thai stadiums', '/attractions/muay-thai-stadiums-rajadamnern-and-lumpinee', '/photos/nightlife.jpg'),
    card('Similan and Surin', '/khao-lak/similan-and-surin-islands', '/photos/khao-lak.jpg'),
    card('Erawan and Sai Yok', '/kanchanaburi/erawan-and-sai-yok', '/photos/erawan.jpg'),
    card('Doi Inthanon', '/chiang-mai/doi-inthanon', '/photos/northern.jpg'),
    card('Ang Thong', '/koh-samui/ang-thong-marine-park', '/photos/ang-thong.jpg'),
  ];
}

function thaiFoodHubCards(): Portrait[] {
  return wave16FoodCards();
}

function resortHubCards(): Portrait[] {
  return Object.entries(RESORT_PHOTO).map(([href, photo]) => {
    const title = href.replace('/resort-living/', '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    return card(title, href, photo);
  });
}

function uniquifyList(items: Portrait[]): Portrait[] {
  const used = new Set<string>();
  const extras = DAY_POOL.filter((p) => !items.some((i) => i.photo === p));
  return items.map((item) => {
    if (!used.has(item.photo)) {
      used.add(item.photo);
      return item;
    }
    const next = extras.find((p) => !used.has(p));
    if (!next) return item;
    used.add(next);
    return { ...item, photo: next };
  });
}

function uniquifyDays(page: Page): Page {
  if (!page.days?.length) return page;
  const temple = new Set([
    '/photos/wat-pho.jpg',
    '/photos/wat-arun-night.jpg',
    '/photos/chatuchak.jpg',
    '/photos/yaowarat.jpg',
    '/photos/grand-palace.jpg',
    '/photos/doi-suthep.jpg',
    '/photos/bts.jpg',
  ]);
  const used = new Set<string>(page.photo ? [page.photo] : []);
  const days = page.days.map((day) => {
    let photo = day.photo;
    const south = /railay|phi phi|samui|phuket|krabi|andaman|tao|phangan|lanta|lipe|khao sok|cheow/i.test(
      `${day.title} ${day.body}`,
    );
    if (!photo || used.has(photo)) {
      const next = DAY_POOL.find((p) => !used.has(p) && p !== page.photo && (!south || !temple.has(p)));
      if (next) photo = next;
    }
    used.add(photo);
    return { ...day, photo };
  });
  return { ...page, days };
}

function parentFor(page: Page): { name: string; href: string } | undefined {
  if (RESORT_PARENT[page.path]) {
    const row = RESORT_PARENT[page.path];
    return { name: row.name, href: row.href };
  }
  if (NIGHTLIFE_PARENT[page.path]) return NIGHTLIFE_PARENT[page.path];
  if (ATTRACTION_PARENT[page.path]) return ATTRACTION_PARENT[page.path];
  if (page.path === '/koh-chang-and-koh-kood') return undefined;
  for (const rule of PARENT_RULES) {
    if (rule.test.test(page.path) && page.path !== rule.href) {
      return { name: rule.name, href: rule.href };
    }
  }
  return undefined;
}

function cityFor(page: Page): StayCity {
  if (RESORT_PARENT[page.path]) return RESORT_PARENT[page.path].city;
  if (page.path.includes('phuket') || page.path.includes('khao-lak') || page.path.includes('yao')) return 'phuket';
  if (page.path.includes('krabi') || page.path.includes('railay') || page.path.includes('lanta') || page.path.includes('phi-phi')) return 'krabi';
  if (page.path.includes('samui') || page.path.includes('phangan') || page.path.includes('tao')) return 'koh-samui';
  if (page.path.includes('chiang-mai') || page.path.includes('nimman') || page.path.includes('pai')) return 'chiang-mai';
  if (page.path.includes('khao-sok') || page.path.includes('cheow')) return 'khao-lak';
  if (page.path.includes('kood') || page.path.includes('soneva')) return 'koh-kood';
  if (page.path.includes('chang')) return 'koh-chang';
  if (page.path.includes('hua-hin')) return 'hua-hin';
  if (page.path.includes('ayutthaya')) return 'ayutthaya';
  if (page.path.includes('kanchanaburi')) return 'kanchanaburi';
  if (page.path.includes('chiang-rai')) return 'chiang-rai';
  return 'bangkok';
}

function defaultPortraits(page: Page, paths: Set<string>): Portrait[] {
  const parent = parentFor(page);
  const out: Portrait[] = [];
  const add = (title: string, href: string, photo: string) => {
    if (!paths.has(href) && href !== '/') return;
    if (href === page.path) return;
    if (out.some((row) => row.href === href)) return;
    out.push(card(title, href, photo));
  };
  if (parent) add(parent.name, parent.href, photoForPath(parent.href));
  if (page.path.startsWith('/resort-living/')) {
    add('Resort living', '/interests/resort-living', '/photos/resort.jpg');
    const siblings = Object.keys(RESORT_PHOTO).filter((href) => href !== page.path).slice(0, 4);
    for (const href of siblings) add(labelFromHref(href), href, RESORT_PHOTO[href]);
  }
  if (page.path.startsWith('/interests/nightlife/')) {
    add('Nightlife hub', '/interests/nightlife', '/photos/nightlife.jpg');
  }
  if (page.path.startsWith('/bangkok/')) {
    add('Sukhumvit', '/bangkok/sukhumvit', '/photos/sukhumvit.jpg');
    add('Rattanakosin', '/bangkok/rattanakosin', '/photos/old-city.jpg');
    add('Chinatown', '/bangkok/chinatown-yaowarat', '/photos/yaowarat.jpg');
  }
  if (page.path.startsWith('/chiang-mai/')) {
    add('Old City', '/chiang-mai/old-city', '/photos/chiang-mai-old-city.jpg');
    add('Nimmanhaemin', '/chiang-mai/nimmanhaemin', '/photos/nimman.jpg');
  }
  if (page.path.startsWith('/plan/')) {
    add('When to go', '/plan/when-to-go', '/photos/plan.jpg');
    add('Visas and TDAC', '/plan/visas-and-tdac', '/photos/bangkok.jpg');
    add('Grab and BTS', '/plan/grab-and-bts', '/photos/bts.jpg');
  }
  if (page.path.startsWith('/get-there/')) {
    add('Get there hub', '/get-there', '/photos/get-there.jpg');
  }
  if (page.path.startsWith('/itineraries/')) {
    add('Itineraries', '/itineraries', '/photos/itineraries.jpg');
    add('First week', '/itineraries/first-week-7-days', '/photos/sukhumvit.jpg');
    add('Best 14 days', '/itineraries/best-14-days', '/photos/chiang-mai.jpg');
  }
  if (page.path === '/about' || page.path === '/privacy') {
    add('Destinations', '/destinations', '/photos/destinations.jpg');
    add('Itineraries', '/itineraries', '/photos/itineraries.jpg');
    add('Plan', '/plan', '/photos/plan.jpg');
  }
  if (out.length < 3) {
    add('Destinations', '/destinations', '/photos/destinations.jpg');
    add('Thai food', '/thai-food', '/photos/thai-food.jpg');
    add('Attractions', '/attractions', '/photos/grand-palace.jpg');
  }
  return uniquifyList(out).slice(0, 8);
}

function labelFromHref(href: string): string {
  return href.split('/').filter(Boolean).slice(-1)[0].replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function photoForPath(href: string): string {
  if (RESORT_PHOTO[href]) return RESORT_PHOTO[href];
  const aliases: Record<string, string> = {
    '/koh-chang-and-koh-kood': '/photos/koh-chang.jpg',
    '/destinations/northern-thailand': '/photos/northern.jpg',
    '/destinations/central-and-east': '/photos/ayutthaya.jpg',
    '/interests/resort-living': '/photos/resort.jpg',
    '/interests/nightlife': '/photos/nightlife.jpg',
  };
  if (aliases[href]) return aliases[href];
  const slug = href.replace(/^\//, '').split('/').filter(Boolean).pop() || 'bangkok';
  return `/photos/${slug}.jpg`;
}

function defaultAffiliates(page: Page): Affiliate[] {
  const city = cityFor(page);
  if (page.path === '/about' || page.path === '/privacy') {
    return [
      stay('Plan the first nights', 'Trip.com', 'A Bangkok stay search if you are still locking the landing city.', stayLink('bangkok'), '/photos/bangkok.jpg'),
    ];
  }
  if (page.path === '/' || page.path === '/destinations' || page.path === '/itineraries' || page.path === '/plan' || page.path === '/interests') {
    return [
      stay('Bangkok first nights', 'Trip.com', 'Lock two nights near a BTS station before you pick a coast.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      klook('First tickets', 'Klook', 'Palace tickets, cooking classes, and island boats.', klookTours('Thailand'), '/photos/grand-palace.jpg'),
    ];
  }
  if (page.path === '/get-there') {
    return [
      stay('Sleep at the landing city', 'Trip.com', 'Book the first two nights before you buy the hop.', stayLink('bangkok'), '/photos/get-there.jpg'),
      klook('Boats and vans', 'Klook', 'Phi Phi, Lomprayah, and Khao Sok vans.', klookRailFerry('Thailand ferry'), '/photos/ferry-gulf.jpg'),
    ];
  }
  if (page.path === '/plan/when-to-go') {
    return [
      stay('Andaman stays', 'Nov to Apr', 'Phuket and Krabi when that coast is the dry window.', stayLink('phuket'), '/photos/phuket.jpg'),
      stay('Gulf stays', 'Jan to Sep', 'Samui and Phangan when the Andaman is in monsoon.', stayLink('koh-samui'), '/photos/koh-samui.jpg'),
    ];
  }
  if (page.path === '/plan/visas-and-tdac') {
    return [
      stay('First two Bangkok nights', 'After TDAC', 'Land, sleep, then move. Do not plan a same-day island hop.', stayLink('bangkok'), '/photos/plan.jpg'),
    ];
  }
  if (page.path === '/interests/resort-living') {
    return [
      stay('Phuket villas', 'Andaman', 'West-coast searches for Amanpuri, Trisara, and nearby cove peers.', stayLink('phuket'), '/photos/resort-amanpuri.jpg'),
      stay('Koh Kood hideaways', 'Soneva Kiri', 'Search Koh Kood stays, not Bangkok, and confirm the boat on the voucher.', stayLink('koh-kood'), '/photos/koh-kood.jpg'),
    ];
  }
  if (page.path === '/interests/nightlife') {
    return [
      stay('Sukhumvit nights', 'BTS strip', 'Sleep where you will Grab home.', stayAreaLink('sukhumvit'), '/photos/sukhumvit.jpg'),
      stay('Thonglor dinner bars', 'BTS Thong Lo', 'Dinner first, then the rooms.', stayAreaLink('thonglor'), '/photos/nightlife.jpg'),
    ];
  }
  return [
    stay(`${city} stays`, 'Trip.com', 'Live 2026 rates for this place.', stayLink(city), '/photos/get-there.jpg'),
    klook('Tours and tickets', 'Klook', 'Boats, vans, and temple tickets for this area.', klookTours(page.title), '/photos/longtail-andaman.jpg'),
  ];
}

function bookingCta(page: Page) {
  if (page.path === '/about' || page.path === '/privacy') return undefined;
  const city = cityFor(page);
  const tourQ = page.path.startsWith('/resort-living/')
    ? page.title
    : page.path.startsWith('/itineraries/')
      ? 'Thailand itinerary tours'
      : `${page.title} tours`;
  return {
    stayHref: stayLink(city),
    stayLabel: 'Search stays on Trip.com',
    stayNote: 'Check live 2026 rates and free-cancellation options.',
    tourHref: klookTours(tourQ),
    tourLabel: 'Book tickets on Klook',
    tourNote: 'Book tickets, tours, or transfers ahead for peak dates.',
  };
}

function applyHubCards(page: Page): Page {
  if (page.path === '/destinations') return { ...page, portraits: uniquifyList(destinationHubCards()) };
  if (page.path === '/itineraries') return { ...page, portraits: uniquifyList(itineraryHubCards()) };
  if (page.path === '/plan') return { ...page, portraits: uniquifyList(planHubCards()) };
  if (page.path === '/get-there') return { ...page, portraits: uniquifyList(getThereHubCards()) };
  if (page.path === '/attractions') return { ...page, portraits: uniquifyList(attractionsHubCards()) };
  if (page.path === '/thai-food') return { ...page, portraits: uniquifyList(thaiFoodHubCards()) };
  if (page.path === '/interests/resort-living') return { ...page, portraits: uniquifyList(resortHubCards()) };
  if (page.path === '/interests') {
    return { ...page, portraits: uniquifyList(page.portraits || []) };
  }
  return page;
}

function applySoneva(page: Page): Page {
  if (page.path !== '/resort-living/soneva-kiri') return page;
  return {
    ...page,
    photo: '/photos/resort-soneva-kiri.jpg',
    affiliates: [
      stay(
        'Soneva Kiri rates',
        'Koh Kood island resort',
        'Search this Koh Kood hideaway and book the transfer with the room.',
        hotelSearchLink('Soneva Kiri', 'koh-kood'),
        '/photos/resort-soneva-kiri.jpg',
      ),
      klook('Trat and island boats', 'Klook', 'If you self-transfer, Trat plus a Koh Kood boat is the public path.', klookRailFerry('Koh Kood ferry'), '/photos/koh-kood.jpg'),
    ],
  };
}

export function applyWave13(pages: Page[]): Page[] {
  const merged = [...pages, ...wave13DistrictPages];
  const paths = new Set(merged.map((page) => page.path));
  return merged.map((raw) => {
    const copy = wave13Copy[raw.path];
    let page: Page = copy ? { ...raw, ...copy, path: raw.path } : { ...raw };
    if (depthExtras[page.path]?.length) {
      page = { ...page, paragraphs: [...page.paragraphs, ...depthExtras[page.path]] };
    }
    if (HUB_HERO[page.path]) page = { ...page, photo: HUB_HERO[page.path] };
    if (RESORT_PHOTO[page.path]) {
      page = { ...page, photo: RESORT_PHOTO[page.path] };
    }
    page = applyHubCards(page);
    page = applySoneva(page);
    if (!page.portraits || page.portraits.length === 0) {
      page = { ...page, portraits: defaultPortraits(page, paths) };
    } else if (!HUB_PATHS.has(page.path)) {
      page = { ...page, portraits: uniquifyList(page.portraits) };
    }
    if (!page.affiliates || page.affiliates.length === 0) {
      page = { ...page, affiliates: defaultAffiliates(page) };
    }
    const parent = parentFor(page);
    if (parent && parent.href !== page.path) {
      page = { ...page, parentPill: parent };
    }
    const cta = bookingCta(page);
    if (cta) page = { ...page, bookingCta: cta };
    page = applyWave16Finish(page);
    page = uniquifyDays(page);
    return page;
  });
}
