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
  slug?: string;
  sub3: string;
  url?: string;
};

/** Official Trip.com Thailand city IDs and deep-link tracking parameters. */
export const tripCities = {
  bangkok: { id: 359, name: 'Bangkok', slug: 'bangkok', sub3: 'D20710097' },
  phuket: { id: 725, name: 'Phuket', slug: 'phuket', sub3: 'D20710321' },
  'chiang-mai': { id: 623, name: 'Chiang Mai', slug: 'chiang-mai', sub3: 'D20710356' },
  'koh-samui': { id: 1229, name: 'Koh Samui', slug: 'koh-samui', sub3: 'D20710356' },
  krabi: {
    id: 10129,
    name: 'Krabi',
    sub3: 'D20710356',
    url: 'https://www.trip.com/hotels/list?provinceId=10129&countryId=4&destName=Krabi%20Province%2C%20Thailand&searchWord=Krabi%20Province&searchType=P&optionId=10129&searchValue=39%7C10129*39*10129&Allianceid=11105102&SID=334225872&trip_sub1=Krabi&trip_sub3=D20710356',
  },
  pattaya: { id: 622, name: 'Pattaya', slug: 'pattaya', sub3: 'D20710356' },
  'hua-hin': { id: 3759, name: 'Hua Hin', slug: 'hua-hin', sub3: 'D20710356' },
  'khao-lak': { id: 1075, name: 'Khao Lak', sub3: 'D20710356' },
  'koh-phangan': { id: 1074, name: 'Koh Phangan', sub3: 'D20710356' },
  'koh-tao': { id: 1215, name: 'Koh Tao', sub3: 'D20710356' },
  ayutthaya: { id: 724, name: 'Ayutthaya', sub3: 'D20710356' },
  'koh-lanta': { id: 90741, name: 'Koh Lanta', sub3: 'D20710356' },
  'koh-lipe': { id: 36062, name: 'Koh Lipe', sub3: 'D20710356' },
  'koh-chang': { id: 3764, name: 'Koh Chang', sub3: 'D20710356' },
  'koh-kood': { id: 62195, name: 'Koh Kood', sub3: 'D20710356' },
  'chiang-rai': { id: 647, name: 'Chiang Rai', sub3: 'D20710356' },
  sukhothai: { id: 6045, name: 'Sukhothai', sub3: 'D20710356' },
  kanchanaburi: { id: 36027, name: 'Kanchanaburi', sub3: 'D20710356' },
  pai: { id: 35981, name: 'Pai', sub3: 'D20710356' },
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

export function stayLink(city: StayCity, extra: Record<string, string> = {}): string {
  const row: TripCityEntry = tripCities[city];
  if (row.url && Object.keys(extra).length === 0) {
    return row.url;
  }
  const merged = { trip_sub1: row.name, trip_sub3: row.sub3, ...extra };
  if (row.slug) {
    return `https://www.trip.com/hotels/${row.slug}-hotels-list-${row.id}/?${tripParams(merged)}`;
  }
  return `https://www.trip.com/hotels/list?city=${row.id}&${tripParams(merged)}`;
}

export function stayAreaLink(area: StayArea, extra: Record<string, string> = {}): string {
  const row = tripAreas[area];
  const city: TripCityEntry = tripCities[row.city as StayCity];
  return `https://www.trip.com/hotels/list?city=${city.id}&keyword=${encodeURIComponent(row.keyword)}&${tripParams({
    trip_sub1: row.keyword,
    trip_sub3: city.sub3,
    ...extra,
  })}`;
}

export function hotelSearchLink(query: string, city?: StayCity): string {
  const entry: TripCityEntry | undefined = city ? tripCities[city] : undefined;
  const cityPart = entry ? `city=${entry.id}&` : '';
  return `https://www.trip.com/hotels/list?${cityPart}keyword=${encodeURIComponent(query)}&${tripParams({
    trip_sub1: query,
    trip_sub3: entry ? entry.sub3 : 'D20710356',
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
