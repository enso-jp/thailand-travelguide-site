const TRIP_ALLIANCE = '11105102';
const TRIP_SID = '334225872';
const KLOOK_SOURCE = '588978';
const TP_MARKER = '793638';
const TRIP_WIDGET_ID = 'S20710076';

function tripParams(extra: Record<string, string> = {}): string {
  const params = new URLSearchParams({
    Allianceid: TRIP_ALLIANCE,
    SID: TRIP_SID,
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
} as const;

export type AirportCode = keyof typeof airports;

export function tripSearchWidgetUrl(sub1 = 'Destination Page'): string {
  return `https://www.trip.com/partners/ad/${TRIP_WIDGET_ID}?Allianceid=${TRIP_ALLIANCE}&SID=${TRIP_SID}&trip_sub1=${encodeURIComponent(sub1)}`;
}

function hotelListPath(row: TripCityEntry): string {
  return `https://www.trip.com/hotels/${row.slug}-hotels-list-${row.id}/`;
}

export function stayLink(city: StayCity, extra: Record<string, string> = {}): string {
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
  const entry: TripCityEntry | undefined = city ? tripCities[city] : undefined;
  const base = entry ? hotelListPath(entry) : 'https://www.trip.com/hotels/list';
  return `${base}?keyword=${encodeURIComponent(query)}&${tripParams({
    trip_sub1: query,
    trip_sub3: entry ? entry.sub3 : 'D20710097',
  })}`;
}

export function flightLink(from: AirportCode, to: AirportCode): string {
  const origin = from.toLowerCase();
  const dest = to.toLowerCase();
  const fromCity = airports[from].city.toLowerCase().replace(/\s+/g, '-');
  const toCity = airports[to].city.toLowerCase().replace(/\s+/g, '-');
  return `https://www.trip.com/flights/${fromCity}-to-${toCity}/tickets-${origin}-${dest}?${tripParams()}`;
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

/** Travelpayouts click-out to a Klook URL (source 588978, marker 793638). */
export function klookLink(path: string): string {
  const dest = klookUrl(path);
  return `https://tp.media/r?marker=${TP_MARKER}&u=${encodeURIComponent(dest)}`;
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
