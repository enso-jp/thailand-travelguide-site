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
  "BKK-CJM": "https://www.trip.com/flights/bangkok-to-chumphon/tickets-bkk-cjm?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_bkk_cjm&trip_sub3=D20753147",
  "BKK-URT": "https://www.trip.com/flights/bangkok-to-surat-thani/tickets-bkk-urt?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_bkk_urt&trip_sub3=D20753147",
  "CNX-BKK": "https://www.trip.com/flights/chiang-mai-to-bangkok/tickets-cnx-bkk?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_cnx_bkk&trip_sub3=D20753147",
  "CNX-HKT": "https://www.trip.com/flights/chiang-mai-to-phuket/tickets-cnx-hkt?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_cnx_hkt&trip_sub3=D20753147",
  "DMK-CEI": "https://www.trip.com/flights/bangkok-to-chiang-rai/tickets-dmk-cei?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_dmk_cei&trip_sub3=D20753147",
  "DMK-CNX": "https://www.trip.com/flights/bangkok-to-chiang-mai/tickets-dmk-cnx?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_dmk_cnx&trip_sub3=D20753147",
  "DMK-HKT": "https://www.trip.com/flights/bangkok-to-phuket/tickets-dmk-hkt?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_dmk_hkt&trip_sub3=D20753189",
  "DMK-KBV": "https://www.trip.com/flights/bangkok-to-krabi/tickets-dmk-kbv?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_dmk_kbv&trip_sub3=D20753189",
  "DMK-USM": "https://www.trip.com/flights/bangkok-to-koh-samui/tickets-dmk-usm?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_dmk_usm&trip_sub3=D20753189",
  "HKT-USM": "https://www.trip.com/flights/phuket-to-koh-samui/tickets-hkt-usm?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_hkt_usm&trip_sub3=D20753189",
  "KBV-BKK": "https://www.trip.com/flights/krabi-to-bangkok/tickets-kbv-bkk?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_kbv_bkk&trip_sub3=D20753231",
  "CNX-HAN": "https://www.trip.com/flights/chiang-mai-to-hanoi/tickets-cnx-han/?Allianceid=11105102&SID=334804079&trip_sub1=th_flight_cnx_han&trip_sub3=D20729235",
};

/** Trip.com Partner tool links, batch 1, SID 334804079. Copied exactly as generated (spaces as %20). Never edit. */
const TRIP_GENERATED_HOTEL_SEARCH: Record<string, string> = {
  "Khao Sok|": "https://www.trip.com/hotels/list?keyword=Khao%20Sok&Allianceid=11105102&SID=334804079&trip_sub1=th_khao_sok_hotels&trip_sub3=D20753231",
  "Khao Yai|": "https://www.trip.com/hotels/list?keyword=Khao%20Yai&Allianceid=11105102&SID=334804079&trip_sub1=th_khao_yai_hotels&trip_sub3=D20753231",
  "Phi Phi|krabi": "https://www.trip.com/hotels/list?Allianceid=11105102&SID=334804079&city=1405&cityName=Krabi&trip_sub1=th_phi_phi_hotels&trip_sub3=D20753231&keyword=Phi%20Phi",
  "Sai Yok|kanchanaburi": "https://www.trip.com/hotels/list?Allianceid=11105102&SID=334804079&city=36027&cityName=Kanchanaburi&trip_sub1=th_sai_yok_hotels&trip_sub3=D20753231&keyword=Sai%20Yok",
  "Khao Sok raft house|": "https://www.trip.com/hotels/list?keyword=Khao%20Sok%20raft%20house&Allianceid=11105102&SID=334804079&trip_sub1=th_khao_sok_raft_house&trip_sub3=D20753231",
  "private pool villa|krabi": "https://www.trip.com/hotels/list?Allianceid=11105102&SID=334804079&city=1405&cityName=Krabi&trip_sub1=th_private_pool_villa&trip_sub3=D20753231&keyword=private%20pool%20villa",
};

/** Trip.com Partner tool links, batch 2, SID 334804079. Copied exactly as generated (spaces as %20). Never edit. */
const TRIP_GENERATED_AREAS: Record<string, string> = {
  "Ari|bangkok": "https://www.trip.com/hotels/bangkok-hotels-list-359/?keyword=Ari&Allianceid=11105102&SID=334804079&trip_sub1=th_h_ari&trip_sub3=D20757879",
  "Charoenkrung|bangkok": "https://www.trip.com/hotels/bangkok-hotels-list-359/?keyword=Charoenkrung&Allianceid=11105102&SID=334804079&trip_sub1=th_h_charoenkrung&trip_sub3=D20757942",
  "Old City|bangkok": "https://www.trip.com/hotels/bangkok-hotels-list-359/?keyword=Old%20City&Allianceid=11105102&SID=334804079&trip_sub1=th_h_old_city&trip_sub3=D20758005",
  "Phrom Phong|bangkok": "https://www.trip.com/hotels/bangkok-hotels-list-359/?keyword=Phrom%20Phong&Allianceid=11105102&SID=334804079&trip_sub1=th_h_phrom_phong&trip_sub3=D20758005",
  "Rattanakosin|bangkok": "https://www.trip.com/hotels/bangkok-hotels-list-359/?keyword=Rattanakosin&Allianceid=11105102&SID=334804079&trip_sub1=th_h_rattanakosin&trip_sub3=D20758005",
  "Riverside|bangkok": "https://www.trip.com/hotels/bangkok-hotels-list-359/?keyword=Riverside&Allianceid=11105102&SID=334804079&trip_sub1=th_h_riverside&trip_sub3=D20758005",
  "Sathorn|bangkok": "https://www.trip.com/hotels/bangkok-hotels-list-359/?keyword=Sathorn&Allianceid=11105102&SID=334804079&trip_sub1=th_h_sathorn&trip_sub3=D20758005",
  "Siam|bangkok": "https://www.trip.com/hotels/bangkok-hotels-list-359/?keyword=Siam&Allianceid=11105102&SID=334804079&trip_sub1=th_h_siam&trip_sub3=D20758026",
  "Silom|bangkok": "https://www.trip.com/hotels/bangkok-hotels-list-359/?keyword=Silom&Allianceid=11105102&SID=334804079&trip_sub1=th_h_silom&trip_sub3=D20758026",
  "Sukhumvit|bangkok": "https://www.trip.com/hotels/bangkok-hotels-list-359/?keyword=Sukhumvit&Allianceid=11105102&SID=334804079&trip_sub1=th_h_sukhumvit&trip_sub3=D20758026",
  "Thonglor|bangkok": "https://www.trip.com/hotels/bangkok-hotels-list-359/?keyword=Thonglor&Allianceid=11105102&SID=334804079&trip_sub1=th_h_thonglor&trip_sub3=D20758026",
  "Nimmanhaemin|chiang-mai": "https://www.trip.com/hotels/chiang-mai-hotels-list-623/?keyword=Nimmanhaemin&Allianceid=11105102&SID=334804079&trip_sub1=th_h_nimmanhaemin&trip_sub3=D20758026",
  "Old City|chiang-mai": "https://www.trip.com/hotels/chiang-mai-hotels-list-623/?keyword=Old%20City&Allianceid=11105102&SID=334804079&trip_sub1=th_h_old_city&trip_sub3=D20758026",
  "Bang Niang|khao-lak": "https://www.trip.com/hotels/khao-lak-hotels-list-4106/?keyword=Bang%20Niang&Allianceid=11105102&SID=334804079&trip_sub1=th_h_bang_niang&trip_sub3=D20758026",
  "Klong Dao|koh-lanta": "https://www.trip.com/hotels/ko-lanta-hotels-list-90741/?keyword=Klong%20Dao&Allianceid=11105102&SID=334804079&trip_sub1=th_h_klong_dao&trip_sub3=D20758026",
  "White Sand Beach|koh-chang": "https://www.trip.com/hotels/koh-chang-hotels-list-3764/?keyword=White%20Sand%20Beach&Allianceid=11105102&SID=334804079&trip_sub1=th_h_white_sand_beach&trip_sub3=D20758026",
  "Chaweng|koh-samui": "https://www.trip.com/hotels/koh-samui-hotels-list-1229/?keyword=Chaweng&Allianceid=11105102&SID=334804079&trip_sub1=th_h_chaweng&trip_sub3=D20758117",
  "Lamai|koh-samui": "https://www.trip.com/hotels/koh-samui-hotels-list-1229/?keyword=Lamai&Allianceid=11105102&SID=334804079&trip_sub1=th_h_lamai&trip_sub3=D20758117",
  "Sairee|koh-tao": "https://www.trip.com/hotels/koh-tao-hotels-list-19957/?keyword=Sairee&Allianceid=11105102&SID=334804079&trip_sub1=th_h_sairee&trip_sub3=D20758117",
  "Ao Nang|krabi": "https://www.trip.com/hotels/krabi-hotels-list-1405/?keyword=Ao%20Nang&Allianceid=11105102&SID=334804079&trip_sub1=th_h_ao_nang&trip_sub3=D20758117",
  "Railay|krabi": "https://www.trip.com/hotels/krabi-hotels-list-1405/?keyword=Railay&Allianceid=11105102&SID=334804079&trip_sub1=th_h_railay&trip_sub3=D20758117",
  "Jomtien|pattaya": "https://www.trip.com/hotels/pattaya-hotels-list-622/?keyword=Jomtien&Allianceid=11105102&SID=334804079&trip_sub1=th_h_jomtien&trip_sub3=D20758341",
  "Kamala|phuket": "https://www.trip.com/hotels/phuket-hotels-list-725/?keyword=Kamala&Allianceid=11105102&SID=334804079&trip_sub1=th_h_kamala&trip_sub3=D20758467",
  "Kata|phuket": "https://www.trip.com/hotels/phuket-hotels-list-725/?keyword=Kata&Allianceid=11105102&SID=334804079&trip_sub1=th_h_kata&trip_sub3=D20758467",
  "Nai Harn|phuket": "https://www.trip.com/hotels/phuket-hotels-list-725/?keyword=Nai%20Harn&Allianceid=11105102&SID=334804079&trip_sub1=th_h_nai_harn&trip_sub3=D20758467",
  "Patong|phuket": "https://www.trip.com/hotels/phuket-hotels-list-725/?keyword=Patong&Allianceid=11105102&SID=334804079&trip_sub1=th_h_patong&trip_sub3=D20758467",
};

const TRIP_GENERATED_HOTEL_SEARCH_B2: Record<string, string> = {
  "137 Pillars House Chiang Mai": "https://www.trip.com/hotels/list?keyword=137%20Pillars%20House%20Chiang%20Mai&Allianceid=11105102&SID=334804079&trip_sub1=th_h_137_pillars_house_chiang_mai&trip_sub3=D20758117",
  "Amanpuri Phuket": "https://www.trip.com/hotels/list?keyword=Amanpuri%20Phuket&Allianceid=11105102&SID=334804079&trip_sub1=th_h_amanpuri_phuket&trip_sub3=D20758166",
  "Anantara Chiang Mai": "https://www.trip.com/hotels/list?keyword=Anantara%20Chiang%20Mai&Allianceid=11105102&SID=334804079&trip_sub1=th_h_anantara_chiang_mai&trip_sub3=D20758166",
  "Avista Hideaway Phuket": "https://www.trip.com/hotels/list?keyword=Avista%20Hideaway%20Phuket&Allianceid=11105102&SID=334804079&trip_sub1=th_h_avista_hideaway_phuket&trip_sub3=D20758180",
  "Bang Tao": "https://www.trip.com/hotels/list?keyword=Bang%20Tao&Allianceid=11105102&SID=334804079&trip_sub1=th_h_bang_tao&trip_sub3=D20758201",
  "Bophut": "https://www.trip.com/hotels/list?keyword=Bophut&Allianceid=11105102&SID=334804079&trip_sub1=th_h_bophut&trip_sub3=D20758201",
  "Capella Bangkok": "https://www.trip.com/hotels/list?keyword=Capella%20Bangkok&Allianceid=11105102&SID=334804079&trip_sub1=th_h_capella_bangkok&trip_sub3=D20758201",
  "Four Seasons Bangkok Chao Phraya": "https://www.trip.com/hotels/list?keyword=Four%20Seasons%20Bangkok%20Chao%20Phraya&Allianceid=11105102&SID=334804079&trip_sub1=th_h_four_seasons_bangkok_chao_ph&trip_sub3=D20758257",
  "Four Seasons Chiang Mai": "https://www.trip.com/hotels/list?keyword=Four%20Seasons%20Chiang%20Mai&Allianceid=11105102&SID=334804079&trip_sub1=th_h_four_seasons_chiang_mai&trip_sub3=D20758278",
  "Four Seasons Koh Samui": "https://www.trip.com/hotels/list?keyword=Four%20Seasons%20Koh%20Samui&Allianceid=11105102&SID=334804079&trip_sub1=th_h_four_seasons_koh_samui&trip_sub3=D20758278",
  "Haad Rin": "https://www.trip.com/hotels/list?keyword=Haad%20Rin&Allianceid=11105102&SID=334804079&trip_sub1=th_h_haad_rin&trip_sub3=D20758278",
  "Jomtien": "https://www.trip.com/hotels/list?keyword=Jomtien&Allianceid=11105102&SID=334804079&trip_sub1=th_h_jomtien&trip_sub3=D20758278",
  "Khao Takiab": "https://www.trip.com/hotels/list?keyword=Khao%20Takiab&Allianceid=11105102&SID=334804079&trip_sub1=th_h_khao_takiab&trip_sub3=D20758278",
  "Mae Rim": "https://www.trip.com/hotels/list?keyword=Mae%20Rim&Allianceid=11105102&SID=334804079&trip_sub1=th_h_mae_rim&trip_sub3=D20758278",
  "Mai Khao": "https://www.trip.com/hotels/list?keyword=Mai%20Khao&Allianceid=11105102&SID=334804079&trip_sub1=th_h_mai_khao&trip_sub3=D20758278",
  "Mandarin Oriental Bangkok": "https://www.trip.com/hotels/list?keyword=Mandarin%20Oriental%20Bangkok&Allianceid=11105102&SID=334804079&trip_sub1=th_h_mandarin_oriental_bangkok&trip_sub3=D20758299",
  "Old Sukhothai": "https://www.trip.com/hotels/list?keyword=Old%20Sukhothai&Allianceid=11105102&SID=334804079&trip_sub1=th_h_old_sukhothai&trip_sub3=D20758299",
  "On Nut": "https://www.trip.com/hotels/list?keyword=On%20Nut&Allianceid=11105102&SID=334804079&trip_sub1=th_h_on_nut&trip_sub3=D20758299",
  "Phulay Bay Ritz-Carlton": "https://www.trip.com/hotels/list?keyword=Phulay%20Bay%20Ritz-Carlton&Allianceid=11105102&SID=334804079&trip_sub1=th_h_phulay_bay_ritz_carlton&trip_sub3=D20758320",
  "Railay": "https://www.trip.com/hotels/list?keyword=Railay&Allianceid=11105102&SID=334804079&trip_sub1=th_h_railay&trip_sub3=D20758320",
  "Rayavadee Krabi": "https://www.trip.com/hotels/list?keyword=Rayavadee%20Krabi&Allianceid=11105102&SID=334804079&trip_sub1=th_h_rayavadee_krabi&trip_sub3=D20758320",
  "Ritz-Carlton Koh Samui": "https://www.trip.com/hotels/list?keyword=Ritz-Carlton%20Koh%20Samui&Allianceid=11105102&SID=334804079&trip_sub1=th_h_ritz_carlton_koh_samui&trip_sub3=D20758320",
  "Rosewood Bangkok": "https://www.trip.com/hotels/list?keyword=Rosewood%20Bangkok&Allianceid=11105102&SID=334804079&trip_sub1=th_h_rosewood_bangkok&trip_sub3=D20758320",
  "Six Senses Samui": "https://www.trip.com/hotels/list?keyword=Six%20Senses%20Samui&Allianceid=11105102&SID=334804079&trip_sub1=th_h_six_senses_samui&trip_sub3=D20758320",
  "Six Senses Yao Noi": "https://www.trip.com/hotels/list?keyword=Six%20Senses%20Yao%20Noi&Allianceid=11105102&SID=334804079&trip_sub1=th_h_six_senses_yao_noi&trip_sub3=D20758320",
  "Soneva Kiri": "https://www.trip.com/hotels/list?keyword=Soneva%20Kiri&Allianceid=11105102&SID=334804079&trip_sub1=th_h_soneva_kiri&trip_sub3=D20758341",
  "The Siam Bangkok": "https://www.trip.com/hotels/list?keyword=The%20Siam%20Bangkok&Allianceid=11105102&SID=334804079&trip_sub1=th_h_the_siam_bangkok&trip_sub3=D20758341",
  "Trisara Phuket": "https://www.trip.com/hotels/list?keyword=Trisara%20Phuket&Allianceid=11105102&SID=334804079&trip_sub1=th_h_trisara_phuket&trip_sub3=D20758341",
  "VIE Hotel Bangkok MGallery": "https://www.trip.com/hotels/list?keyword=VIE%20Hotel%20Bangkok%20MGallery&Allianceid=11105102&SID=334804079&trip_sub1=th_h_vie_hotel_bangkok_mgallery&trip_sub3=D20758341",
  "Veranda High Chiang Mai": "https://www.trip.com/hotels/list?keyword=Veranda%20High%20Chiang%20Mai&Allianceid=11105102&SID=334804079&trip_sub1=th_h_veranda_high_chiang_mai&trip_sub3=D20758341",
};

const TRIP_GENERATED_TRAINS: Record<string, string> = {
  "Bangkok|Ayutthaya": "https://www.trip.com/trains/list?dname=Bangkok&aname=Ayutthaya&Allianceid=11105102&SID=334804079&trip_sub1=th_train_bkk_ayutthaya&trip_sub3=D20753231",
  "Bangkok|Chiang Mai": "https://www.trip.com/trains/list?dname=Bangkok&aname=Chiang%20Mai&Allianceid=11105102&SID=334804079&trip_sub1=th_train_bkk_cnx&trip_sub3=D20753231",
  "Bangkok|Chumphon": "https://www.trip.com/trains/list?dname=Bangkok&aname=Chumphon&Allianceid=11105102&SID=334804079&trip_sub1=th_train_bkk_chumphon&trip_sub3=D20753259",
  "Bangkok|Hua Hin": "https://www.trip.com/trains/list?dname=Bangkok&aname=Hua%20Hin&Allianceid=11105102&SID=334804079&trip_sub1=th_train_bkk_hua_hin&trip_sub3=D20753259",
  "Bangkok|Surat Thani": "https://www.trip.com/trains/list?dname=Bangkok&aname=Surat%20Thani&Allianceid=11105102&SID=334804079&trip_sub1=th_train_bkk_surat_thani&trip_sub3=D20753280",
};

const TRIP_GENERATED_TRANSFERS: Record<string, string> = {
  "BKK": "https://www.trip.com/airport-transfers/?keyword=BKK&Allianceid=11105102&SID=334804079&trip_sub1=th_transfer_bkk&trip_sub3=D20753280",
  "CEI": "https://www.trip.com/airport-transfers/?keyword=CEI&Allianceid=11105102&SID=334804079&trip_sub1=th_transfer_cei&trip_sub3=D20753280",
  "CNX": "https://www.trip.com/airport-transfers/?keyword=CNX&Allianceid=11105102&SID=334804079&trip_sub1=th_transfer_cnx&trip_sub3=D20753280",
  "DMK": "https://www.trip.com/airport-transfers/?keyword=DMK&Allianceid=11105102&SID=334804079&trip_sub1=th_transfer_dmk&trip_sub3=D20753280",
  "HDY": "https://www.trip.com/airport-transfers/?keyword=HDY&Allianceid=11105102&SID=334804079&trip_sub1=th_transfer_hdy&trip_sub3=D20753301",
  "HKT": "https://www.trip.com/airport-transfers/?keyword=HKT&Allianceid=11105102&SID=334804079&trip_sub1=th_transfer_hkt&trip_sub3=D20753301",
  "KBV": "https://www.trip.com/airport-transfers/?keyword=KBV&Allianceid=11105102&SID=334804079&trip_sub1=th_transfer_kbv&trip_sub3=D20753301",
  "THS": "https://www.trip.com/airport-transfers/?keyword=THS&Allianceid=11105102&SID=334804079&trip_sub1=th_transfer_ths&trip_sub3=D20753301",
  "URT": "https://www.trip.com/airport-transfers/?keyword=URT&Allianceid=11105102&SID=334804079&trip_sub1=th_transfer_urt&trip_sub3=D20753301",
  "USM": "https://www.trip.com/airport-transfers/?keyword=USM&Allianceid=11105102&SID=334804079&trip_sub1=th_transfer_usm&trip_sub3=D20753301",
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
  const generated = TRIP_GENERATED_AREAS[`${row.keyword}|${row.city}`];
  if (generated && Object.keys(extra).length === 0) return generated;
  const city: TripCityEntry = tripCities[row.city as StayCity];
  return `${hotelListPath(city)}?keyword=${encodeURIComponent(row.keyword)}&${tripParams({
    trip_sub1: row.keyword,
    trip_sub3: city.sub3,
    ...extra,
  })}`;
}

export function hotelSearchLink(query: string, city?: StayCity): string {
  const generated = TRIP_GENERATED_HOTEL_SEARCH[`${query}|${city || ''}`] || TRIP_GENERATED_HOTEL_SEARCH_B2[query];
  if (generated) return generated;
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
  'Khon Kaen', 'Lampang', 'Phitsanulok', 'Chumphon',
] as const;

/** Returns the rail destination when the place is a real rail stop from Bangkok, else null. */
export function railDestination(place?: string): string | null {
  const key = (place || '').trim().toLowerCase();
  return RAIL_DESTINATIONS.find((d) => d.toLowerCase() === key) || null;
}

export function trainLink(from = 'Bangkok', to = 'Chiang Mai'): string {
  const generated = TRIP_GENERATED_TRAINS[`${from}|${to}`];
  if (generated) return generated;
  return `https://www.trip.com/trains/list?dname=${encodeURIComponent(from)}&aname=${encodeURIComponent(to)}&${tripParams()}`;
}

export function transferLink(airport: AirportCode): string {
  const generated = TRIP_GENERATED_TRANSFERS[airport];
  if (generated) return generated;
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
