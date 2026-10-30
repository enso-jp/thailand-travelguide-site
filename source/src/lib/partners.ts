const TRIP_ALLIANCE = '11105102';
const TRIP_SID = '334225872';
const KLOOK_SOURCE = '588978';
const TP_MARKER = '793638';
const TRIP_WIDGET_ID = 'S20710076';

function tripParams(extra: Record<string, string> = {}): string {
  const params = new URLSearchParams({
    Allianceid: TRIP_ALLIANCE,
    SID: TRIP_SID,
    trip_sub2: 'th',
    ...extra,
  });
  return params.toString();
}

type TripCityEntry = {
  id: number;
  name: string;
  slug: string;
  sub3: string;
};

/** Official Trip.com Thailand city IDs. IDs and slugs must match trip-cities.verified.json. */
export const tripCities = {
  bangkok: { id: 359, name: 'Bangkok', slug: 'bangkok', sub3: 'D20710097' },
  phuket: { id: 725, name: 'Phuket', slug: 'phuket', sub3: 'D20710321' },
  'chiang-mai': { id: 623, name: 'Chiang Mai', slug: 'chiang-mai', sub3: 'D20710356' },
  'koh-samui': { id: 1229, name: 'Koh Samui', slug: 'koh-samui', sub3: 'D20710097' },
  krabi: { id: 1405, name: 'Krabi', slug: 'krabi', sub3: 'D20710321' },
  pattaya: { id: 622, name: 'Pattaya', slug: 'pattaya', sub3: 'D20710097' },
  'hua-hin': { id: 3759, name: 'Hua Hin', slug: 'hua-hin', sub3: 'D20710097' },
  'khao-lak': { id: 4106, name: 'Khao Lak', slug: 'khao-lak', sub3: 'D20710321' },
  'koh-phangan': { id: 36057, name: 'Koh Phangan', slug: 'koh-phangan', sub3: 'D20710097' },
  'koh-tao': { id: 19957, name: 'Koh Tao', slug: 'koh-tao', sub3: 'D20710097' },
  ayutthaya: { id: 36030, name: 'Ayutthaya', slug: 'phra-nakhon-si-ayutthaya', sub3: 'D20710097' },
  'koh-lanta': { id: 90741, name: 'Koh Lanta', slug: 'ko-lanta', sub3: 'D20710321' },
  'koh-lipe': { id: 36062, name: 'Koh Lipe', slug: 'ko-lipe', sub3: 'D20710321' },
  'koh-chang': { id: 3764, name: 'Koh Chang', slug: 'koh-chang', sub3: 'D20710097' },
  'koh-kood': { id: 62195, name: 'Koh Kood', slug: 'koh-kood', sub3: 'D20710097' },
  'chiang-rai': { id: 647, name: 'Chiang Rai', slug: 'chiang-rai', sub3: 'D20710356' },
  sukhothai: { id: 6045, name: 'Sukhothai', slug: 'sukhothai', sub3: 'D20710356' },
  kanchanaburi: { id: 36027, name: 'Kanchanaburi', slug: 'kanchanaburi', sub3: 'D20710097' },
  pai: { id: 35981, name: 'Pai', slug: 'pai', sub3: 'D20710356' },
  'surat-thani': { id: 1479, name: 'Surat Thani', slug: 'surat-thani', sub3: 'D20710097' },
} as const satisfies Record<string, TripCityEntry>;

export type StayCity = keyof typeof tripCities;

export const tripAreas = {
  sukhumvit: { city: 'bangkok', keyword: 'Sukhumvit' },
  thonglor: { city: 'bangkok', keyword: 'Thonglor' },
  riverside: { city: 'bangkok', keyword: 'Riverside' },
  charoenkrung: { city: 'bangkok', keyword: 'Charoenkrung' },
  rattanakosin: { city: 'bangkok', keyword: 'Rattanakosin' },
  'old-city': { city: 'bangkok', keyword: 'Old City' },
  siam: { city: 'bangkok', keyword: 'Siam' },
  silom: { city: 'bangkok', keyword: 'Silom' },
  'chiang-mai-old-city': { city: 'chiang-mai', keyword: 'Old City' },
  nimmanhaemin: { city: 'chiang-mai', keyword: 'Nimmanhaemin' },
  patong: { city: 'phuket', keyword: 'Patong' },
  kata: { city: 'phuket', keyword: 'Kata' },
  karon: { city: 'phuket', keyword: 'Karon' },
  kamala: { city: 'phuket', keyword: 'Kamala' },
  surin: { city: 'phuket', keyword: 'Surin Beach' },
  rawai: { city: 'phuket', keyword: 'Rawai' },
  'nai-harn': { city: 'phuket', keyword: 'Nai Harn' },
  chaweng: { city: 'koh-samui', keyword: 'Chaweng' },
  lamai: { city: 'koh-samui', keyword: 'Lamai' },
  'phrom-phong': { city: 'bangkok', keyword: 'Phrom Phong' },
  sathorn: { city: 'bangkok', keyword: 'Sathorn' },
  ari: { city: 'bangkok', keyword: 'Ari' },
  'ao-nang': { city: 'krabi', keyword: 'Ao Nang' },
  sairee: { city: 'koh-tao', keyword: 'Sairee' },
  'klong-dao': { city: 'koh-lanta', keyword: 'Klong Dao' },
  'white-sand-beach': { city: 'koh-chang', keyword: 'White Sand Beach' },
  'bang-niang': { city: 'khao-lak', keyword: 'Bang Niang' },
  'khao-san': { city: 'bangkok', keyword: 'Khao San' },
  pratunam: { city: 'bangkok', keyword: 'Pratunam' },
  'on-nut': { city: 'bangkok', keyword: 'On Nut' },
  'bang-tao': { city: 'phuket', keyword: 'Bang Tao' },
  'mai-khao': { city: 'phuket', keyword: 'Mai Khao' },
  railay: { city: 'krabi', keyword: 'Railay' },
  tubkaek: { city: 'krabi', keyword: 'Tubkaek' },
  bophut: { city: 'koh-samui', keyword: 'Bophut' },
  'haad-rin': { city: 'koh-phangan', keyword: 'Haad Rin' },
  jomtien: { city: 'pattaya', keyword: 'Jomtien' },
  'mae-rim': { city: 'chiang-mai', keyword: 'Mae Rim' },
} as const;

export type StayArea = keyof typeof tripAreas;

export const airports = {
  BKK: { city: 'Bangkok', name: 'Suvarnabhumi' },
  DMK: { city: 'Bangkok', name: 'Don Mueang' },
  HKT: { city: 'Phuket', name: 'Phuket' },
  CNX: { city: 'Chiang Mai', name: 'Chiang Mai' },
  USM: { city: 'Koh Samui', name: 'Samui' },
  KBV: { city: 'Krabi', name: 'Krabi' },
  CEI: { city: 'Chiang Rai', name: 'Mae Fah Luang Chiang Rai' },
  URT: { city: 'Surat Thani', name: 'Surat Thani' },
  CJM: { city: 'Chumphon', name: 'Chumphon' },
  HDY: { city: 'Hat Yai', name: 'Hat Yai' },
  TST: { city: 'Trang', name: 'Trang' },
  THS: { city: 'Sukhothai', name: 'Sukhothai' },
  SGN: { city: 'Ho Chi Minh City', name: 'Tan Son Nhat' },
  HAN: { city: 'Hanoi', name: 'Noi Bai' },
  DAD: { city: 'Da Nang', name: 'Da Nang' },
} as const;

export type AirportCode = keyof typeof airports;


/** Trip.com Partner tool links for SID 334804079. Copied exactly as generated. Never edit. */
const TRIP_GENERATED_CITY_HOTELS: Partial<Record<string, string>> = {
  "bangkok": "https://www.trip.com/hotels/list?city=359&cityName=Bangkok&Allianceid=11105102&SID=334804079&trip_sub1=th_bangkok_hotels&trip_sub3=D20729235",
  "chiang-mai": "https://www.trip.com/hotels/list?city=623&cityName=Chiang Mai&Allianceid=11105102&SID=334804079&trip_sub1=th_chiang_mai_hotels&trip_sub3=D20729235",
  "chiang-rai": "https://www.trip.com/hotels/list?city=647&cityName=Chiang Rai&Allianceid=11105102&SID=334804079&trip_sub1=th_chiang_rai_hotels&trip_sub3=D20729235",
  "hua-hin": "https://www.trip.com/hotels/list?city=3759&cityName=Hua Hin&Allianceid=11105102&SID=334804079&trip_sub1=th_hua_hin_hotels&trip_sub3=D20729235",
  "kanchanaburi": "https://www.trip.com/hotels/list?city=36027&cityName=Kanchanaburi City&Allianceid=11105102&SID=334804079&trip_sub1=th_kanchanaburi_hotels&trip_sub3=D20729235",
  "khao-lak": "https://www.trip.com/hotels/list?city=79294&cityName=Takua Pa&Allianceid=11105102&SID=334804079&trip_sub1=th_khao_lak_hotels&trip_sub3=D20729235",
  "koh-lanta": "https://www.trip.com/hotels/list?city=90741&cityName=Koh Lanta&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_lanta_hotels&trip_sub3=D20729235",
  "koh-lipe": "https://www.trip.com/hotels/list?city=36062&cityName=Koh Lipe&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_lipe_hotels&trip_sub3=D20729235",
  "koh-chang": "https://www.trip.com/hotels/list?city=3764&cityName=Koh Chang&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_chang_hotels&trip_sub3=D20729235",
  "koh-kood": "https://www.trip.com/hotels/list?city=62195&cityName=Koh Kood&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_kood_hotels&trip_sub3=D20729235",
  "koh-phangan": "https://www.trip.com/hotels/list?city=36057&cityName=Koh Phangan&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_phangan_hotels&trip_sub3=D20729235",
  "koh-samui": "https://www.trip.com/hotels/list?city=1229&cityName=Koh Samui&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_samui_hotels&trip_sub3=D20729235",
  "krabi": "https://www.trip.com/hotels/list?city=1405&cityName=Krabi Town&Allianceid=11105102&SID=334804079&trip_sub1=th_krabi_hotels&trip_sub3=D20729235",
  "pai": "https://www.trip.com/hotels/list?city=35981&cityName=Pai&Allianceid=11105102&SID=334804079&trip_sub1=th_pai_hotels&trip_sub3=D20729235",
  "pattaya": "https://www.trip.com/hotels/list?city=622&cityName=Pattaya&Allianceid=11105102&SID=334804079&trip_sub1=th_pattaya_hotels&trip_sub3=D20729235",
  "phuket": "https://www.trip.com/hotels/list?city=725&cityName=Phuket&Allianceid=11105102&SID=334804079&trip_sub1=th_phuket_hotels&trip_sub3=D20729235",
  "ayutthaya": "https://www.trip.com/hotels/list?city=36030&cityName=Phra Nakhon Si Ayutthaya&Allianceid=11105102&SID=334804079&trip_sub1=th_ayutthaya_hotels&trip_sub3=D20729235",
  "sukhothai": "https://www.trip.com/hotels/list?city=6045&cityName=Sukhothai&Allianceid=11105102&SID=334804079&trip_sub1=th_sukhothai_hotels&trip_sub3=D20729235",
  "surat-thani": "https://www.trip.com/hotels/list?city=1479&cityName=Surat Thani&Allianceid=11105102&SID=334804079&trip_sub1=th_surat_thani_hotels&trip_sub3=D20729235",
  "koh-tao": "https://www.trip.com/hotels/list?city=19957&cityName=Koh Tao&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_tao_hotels&trip_sub3=D20729235",
};

const TRIP_GENERATED_FLIGHTS: Partial<Record<string, string>> = {
  "BKK-CNX": "https://www.trip.com/flights/bangkok-to-chiang-mai/tickets-bkk-cnx/?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_bkk_cnx&trip_sub3=D20729235",
  "BKK-HKT": "https://www.trip.com/flights/bangkok-to-phuket/tickets-bkk-hkt/?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_bkk_hkt&trip_sub3=D20729235",
  "BKK-KBV": "https://www.trip.com/flights/bangkok-to-krabi/tickets-bkk-kbv/?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_bkk_kbv&trip_sub3=D20729235",
  "BKK-USM": "https://www.trip.com/flights/bangkok-to-koh-samui/tickets-bkk-usm/?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_bkk_usm&trip_sub3=D20729235",
  "BKK-CEI": "https://www.trip.com/flights/bangkok-to-chiang-rai/tickets-bkk-cei/?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_bkk_cei&trip_sub3=D20729235",
  "BKK-SGN": "https://www.trip.com/flights/bangkok-to-ho-chi-minh-city/tickets-bkk-sgn/?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_bkk_sgn&trip_sub3=D20729235",
  "BKK-HAN": "https://www.trip.com/flights/bangkok-to-hanoi/tickets-bkk-han/?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_bkk_han&trip_sub3=D20729235",
  "BKK-DAD": "https://www.trip.com/flights/bangkok-to-da-nang/tickets-bkk-dad/?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_bkk_dad&trip_sub3=D20729235",
  "CNX-HAN": "https://www.trip.com/flights/chiang-mai-to-hanoi/tickets-cnx-han/?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_cnx_han&trip_sub3=D20729235",
};

export function generatedFlightLink(from: string, to: string): string | undefined {
  return TRIP_GENERATED_FLIGHTS[`${from.toUpperCase()}-${to.toUpperCase()}`];
}

function hotelListPath(row: TripCityEntry): string {
  return `https://www.trip.com/hotels/${row.slug}-hotels-list-${row.id}/`;
}

/** Live Trip.com hotel results for the search box. Never the /partners/ad widget. */
export function hotelSearchListUrl(city: StayCity, extra: Record<string, string> = {}): string {
  const row: TripCityEntry = tripCities[city];
  return `https://www.trip.com/hotels/list?${tripParams({
    city: String(row.id),
    cityName: row.name,
    trip_sub1: extra.trip_sub1 || row.name,
    trip_sub3: extra.trip_sub3 || row.sub3,
    ...extra,
  })}`;
}

/** Word-bounded slug match so `yao` does not hit Yaowarat and `kata` does not hit longer tokens. */
function pathHasSlug(path: string, slug: string): boolean {
  const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`).test(path);
}

export function stayCityFromPath(path: string): StayCity;
export function stayCityFromPath(path: string, strict: true): StayCity | undefined;
export function stayCityFromPath(path: string, strict = false): StayCity | undefined {
  const p = path.toLowerCase();
  const has = (slug: string) => pathHasSlug(p, slug);
  if (has('koh-lipe') || has('ko-lipe')) return 'koh-lipe';
  if (has('koh-lanta') || has('ko-lanta')) return 'koh-lanta';
  if (has('koh-kood') || has('ko-kood') || has('soneva')) return 'koh-kood';
  if (has('koh-chang') || has('ko-chang')) return 'koh-chang';
  if (has('koh-phangan') || has('phangan')) return 'koh-phangan';
  if (has('koh-tao') || has('ko-tao')) return 'koh-tao';
  if (has('koh-samui') || has('samui')) return 'koh-samui';
  if (has('khao-lak')) return 'khao-lak';
  if (has('khao-sok') || has('cheow') || has('surat-thani')) return 'surat-thani';
  if (has('chiang-rai')) return 'chiang-rai';
  if (/(^|\/)pai(\/|$)/.test(p)) return 'pai';
  if (has('chiang-mai') || has('nimman')) return 'chiang-mai';
  if (has('hua-hin')) return 'hua-hin';
  if (has('pattaya') || has('jomtien')) return 'pattaya';
  if (has('ayutthaya')) return 'ayutthaya';
  if (has('kanchanaburi') || has('erawan')) return 'kanchanaburi';
  if (has('sukhothai')) return 'sukhothai';
  if (has('phuket') || has('patong') || has('kata') || has('karon') || has('kamala') || has('koh-yao') || has('yao-noi') || has('yao-yai') || has('yao')) {
    return 'phuket';
  }
  if (has('krabi') || has('railay') || has('phi-phi') || has('ao-nang')) return 'krabi';
  if (strict) {
    const bangkokAreas = ['bangkok', 'yaowarat', 'chinatown', 'banthat-thong', 'talat-noi', 'wang-lang'];
    return bangkokAreas.some((slug) => has(slug)) ? 'bangkok' : undefined;
  }
  return 'bangkok';
}

export const cityAirports: Record<StayCity, AirportCode> = {
  bangkok: 'BKK',
  phuket: 'HKT',
  'chiang-mai': 'CNX',
  'koh-samui': 'USM',
  krabi: 'KBV',
  pattaya: 'BKK',
  'hua-hin': 'BKK',
  'khao-lak': 'HKT',
  'koh-phangan': 'USM',
  'koh-tao': 'USM',
  ayutthaya: 'BKK',
  'koh-lanta': 'KBV',
  'koh-lipe': 'HDY',
  'koh-chang': 'BKK',
  'koh-kood': 'BKK',
  'chiang-rai': 'CEI',
  sukhothai: 'THS',
  kanchanaburi: 'BKK',
  pai: 'CNX',
  'surat-thani': 'URT',
};

export function stayLink(city: StayCity, extra: Record<string, string> = {}): string {
  const generated = TRIP_GENERATED_CITY_HOTELS[city];
  if (generated && Object.keys(extra).every((k) => k === 'trip_sub1')) return generated;
  const row: TripCityEntry = tripCities[city];
  return `${hotelListPath(row)}?${tripParams({ trip_sub1: row.name, trip_sub3: row.sub3, ...extra })}`;
}

export function tripHotelsUrl(city: StayCity, sub1?: string): string {
  return stayLink(city, sub1 ? { trip_sub1: sub1 } : {});
}

export function stayAreaLink(area: StayArea, extra: Record<string, string> = {}): string {
  const row = tripAreas[area];
  const city: TripCityEntry = tripCities[row.city as StayCity];
  return `${hotelListPath(city)}?keyword=${encodeURIComponent(row.keyword)}&${tripParams({
    trip_sub1: row.keyword,
    trip_sub3: city.sub3,
    ...extra,
  })}`;
}

export function hotelSearchLink(query: string, city?: StayCity): string {
  if (city) {
    return hotelSearchListUrl(city, { keyword: query, trip_sub1: query });
  }
  return `https://www.trip.com/hotels/list?keyword=${encodeURIComponent(query)}&${tripParams({
    trip_sub1: query,
    trip_sub3: 'D20710097',
  })}`;
}

export function flightLink(from: AirportCode, to: AirportCode): string {
  const generated = generatedFlightLink(from, to);
  if (generated) return generated;
  const origin = from.toLowerCase();
  const dest = to.toLowerCase();
  const fromCity = airports[from].city.toLowerCase().replace(/\s+/g, '-');
  const toCity = airports[to].city.toLowerCase().replace(/\s+/g, '-');
  return `https://www.trip.com/flights/${fromCity}-to-${toCity}/tickets-${origin}-${dest}?${tripParams()}`;
}

/** Destinations with a real SRT rail service from Bangkok. Train CTAs render only for these. */
export const RAIL_DESTINATIONS = [
  'Chiang Mai', 'Ayutthaya', 'Hua Hin', 'Surat Thani', 'Hat Yai', 'Nong Khai', 'Udon Thani',
  'Khon Kaen', 'Lampang', 'Phitsanulok', 'Kanchanaburi', 'Chumphon',
] as const;

/** Returns the rail destination when the place is a real rail stop from Bangkok, else null. */
export function railDestination(place?: string): string | null {
  const key = (place || '').trim().toLowerCase();
  return RAIL_DESTINATIONS.find((d) => d.toLowerCase() === key) || null;
}

export function trainLink(from = 'Bangkok', to = 'Chiang Mai'): string {
  return `https://www.trip.com/trains/list?dname=${encodeURIComponent(from)}&aname=${encodeURIComponent(to)}&${tripParams()}`;
}

export function transferLink(airport: AirportCode): string {
  return `https://www.trip.com/airport-transfers/?keyword=${encodeURIComponent(airport)}&${tripParams()}`;
}

function klookUrl(path: string): string {
  const url = new URL(path.startsWith('http') ? path : `https://www.klook.com${path}`);
  url.searchParams.set('aid', KLOOK_SOURCE);
  return url.toString();
}

/** Partner-generated Klook deep links (Travelpayouts short links), keyed by search query. Use exactly as issued. */
const KLOOK_DEEP_LINKS: Record<string, string> = {
  'Bangkok Grand Palace tickets': 'https://klook.tpx.li/Af6UqxKX',
  'Grand Palace Bangkok': 'https://klook.tpx.li/Af6UqxKX',
  'Phuket island hopping': 'https://klook.tpx.li/wRUJ1dV5',
  'Krabi island hopping': 'https://klook.tpx.li/OCeCYWuV',
  'Phi Phi Maya Bay island hopping': 'https://klook.tpx.li/LYSfwuai',
  'Doi Suthep Chiang Mai': 'https://klook.tpx.li/Kdfxxkiz',
  'Doi Inthanon day trip': 'https://klook.tpx.li/O1H3g2wg',
  'Chatuchak Weekend Market': 'https://klook.tpx.li/omItio4V',
  'Ang Thong Marine Park island hopping': 'https://klook.tpx.li/QdS0CN7t',
  'Ang Thong Koh Samui': 'https://klook.tpx.li/QdS0CN7t',
  'Ang Thong Marine Park': 'https://klook.tpx.li/QdS0CN7t',
  'Lomprayah Koh Samui': 'https://klook.tpx.li/QlYvza34',
  'Mahanakhon SkyWalk': 'https://klook.tpx.li/P3ETIlIr',
  'Wat Arun Bangkok': 'https://klook.tpx.li/PvWOgyV1',
  'Chiang Rai White Temple': 'https://klook.tpx.li/0FyiIKCD',
  'Erawan National Park': 'https://klook.tpx.li/8N4fluS4',
  'Sanctuary of Truth Pattaya': 'https://klook.tpx.li/49lJelOT',
  'Cheow Lan Lake Khao Sok': 'https://klook.tpx.li/ipCYqbaK',
  'Rajadamnern Muay Thai tickets': 'https://klook.tpx.li/RKAYvktO',
  'Similan Islands day trip': 'https://klook.tpx.li/efblW5oA',
  'Koh Lanta island hopping': 'https://klook.tpx.li/FO9nnzZC',
  'Bangkok tours': 'https://klook.tpx.li/lGtSENES',
  'Chiang Mai tours': 'https://klook.tpx.li/HDIsZLqg',
  'Thailand itinerary tours': 'https://klook.tpx.li/hxjjyGRa',
};

/** A Partner-generated Klook link for a known query, or undefined. Never builds a URL. */
export function generatedKlookLink(query: string): string | undefined {
  return KLOOK_DEEP_LINKS[query];
}

/** Generated Trip.com city hotel list, or undefined. */
export function generatedStayLink(city: string): string | undefined {
  return TRIP_GENERATED_CITY_HOTELS[city];
}

/** Travelpayouts click-out to a Klook URL (source 588978, marker 793638). */
export function klookLink(path: string): string {
  const dest = klookUrl(path);
  const query = new URL(dest).searchParams.get('query');
  if (query && KLOOK_DEEP_LINKS[query]) return KLOOK_DEEP_LINKS[query];
  return `https://tp.media/r?marker=${TP_MARKER}&trs=${KLOOK_SOURCE}&sub_id=th&u=${encodeURIComponent(dest)}`;
}

export function klookTours(query: string): string {
  return klookLink(`/en-US/search/?query=${encodeURIComponent(query)}`);
}

export function klookIslandHopping(place: string): string {
  return klookLink(`/en-US/search/?query=${encodeURIComponent(`${place} island hopping`)}`);
}

export function klookTickets(query: string): string {
  return klookLink(`/en-US/search/?query=${encodeURIComponent(query)}`);
}

export function klookRailFerry(query: string): string {
  return klookLink(`/en-US/search/?query=${encodeURIComponent(query)}`);
}

export const partners = {
  tripAllianceId: TRIP_ALLIANCE,
  tripSid: TRIP_SID,
  tripWidgetId: TRIP_WIDGET_ID,
  klookSource: KLOOK_SOURCE,
  travelpayoutsMarker: TP_MARKER,
};
