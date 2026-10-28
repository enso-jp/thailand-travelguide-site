const TRIP_ALLIANCE = '11105102';
const TRIP_SID = '334225872';
const KLOOK_SOURCE = '588978';
const TP_MARKER = '793638';

function tripParams(extra: Record<string, string> = {}): string {
  const params = new URLSearchParams({
    Allianceid: TRIP_ALLIANCE,
    SID: TRIP_SID,
    ...extra,
  });
  return params.toString();
}

/** Trip.com city IDs used for stay search. */
export const tripCities = {
  bangkok: { id: 191, name: 'Bangkok' },
  phuket: { id: 257, name: 'Phuket' },
  'chiang-mai': { id: 192, name: 'Chiang Mai' },
  'koh-samui': { id: 608, name: 'Koh Samui' },
  krabi: { id: 614, name: 'Krabi' },
  pattaya: { id: 193, name: 'Pattaya' },
  'hua-hin': { id: 726, name: 'Hua Hin' },
  'khao-lak': { id: 1075, name: 'Khao Lak' },
  'koh-phangan': { id: 1074, name: 'Koh Phangan' },
  'koh-tao': { id: 1215, name: 'Koh Tao' },
  ayutthaya: { id: 724, name: 'Ayutthaya' },
} as const;

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
  chaweng: { city: 'koh-samui', keyword: 'Chaweng' },
  'ao-nang': { city: 'krabi', keyword: 'Ao Nang' },
} as const;

export type StayArea = keyof typeof tripAreas;

export const airports = {
  BKK: { city: 'Bangkok', name: 'Suvarnabhumi' },
  DMK: { city: 'Bangkok', name: 'Don Mueang' },
  HKT: { city: 'Phuket', name: 'Phuket' },
  CNX: { city: 'Chiang Mai', name: 'Chiang Mai' },
  USM: { city: 'Koh Samui', name: 'Samui' },
  KBV: { city: 'Krabi', name: 'Krabi' },
} as const;

export type AirportCode = keyof typeof airports;

export function stayLink(city: StayCity, extra: Record<string, string> = {}): string {
  const row = tripCities[city];
  return `https://www.trip.com/hotels/list?city=${row.id}&${tripParams(extra)}`;
}

export function stayAreaLink(area: StayArea, extra: Record<string, string> = {}): string {
  const row = tripAreas[area];
  const city = tripCities[row.city as StayCity];
  return `https://www.trip.com/hotels/list?city=${city.id}&keyword=${encodeURIComponent(row.keyword)}&${tripParams(extra)}`;
}

export function hotelSearchLink(query: string, city?: StayCity): string {
  const cityPart = city ? `city=${tripCities[city].id}&` : '';
  return `https://www.trip.com/hotels/list?${cityPart}keyword=${encodeURIComponent(query)}&${tripParams()}`;
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
  klookSource: KLOOK_SOURCE,
  travelpayoutsMarker: TP_MARKER,
};
