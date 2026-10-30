import { TRIP_NEIGHBOURHOOD_LINKS, TRIP_KEYWORD_LINKS } from './trip-neighbourhoods';
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
  "chiang-mai": "https://www.trip.com/hotels/list?city=623&cityName=Chiang%20Mai&Allianceid=11105102&SID=334804079&trip_sub1=th_chiang_mai_hotels&trip_sub3=D20729235",
  "chiang-rai": "https://www.trip.com/hotels/list?city=647&cityName=Chiang%20Rai&Allianceid=11105102&SID=334804079&trip_sub1=th_chiang_rai_hotels&trip_sub3=D20729235",
  "hua-hin": "https://www.trip.com/hotels/list?city=3759&cityName=Hua%20Hin&Allianceid=11105102&SID=334804079&trip_sub1=th_hua_hin_hotels&trip_sub3=D20729235",
  "kanchanaburi": "https://www.trip.com/hotels/list?city=36027&cityName=Kanchanaburi%20City&Allianceid=11105102&SID=334804079&trip_sub1=th_kanchanaburi_hotels&trip_sub3=D20729235",
  "khao-lak": "https://www.trip.com/hotels/list?city=79294&cityName=Takua%20Pa&Allianceid=11105102&SID=334804079&trip_sub1=th_khao_lak_hotels&trip_sub3=D20729235",
  "koh-lanta": "https://www.trip.com/hotels/list?city=90741&cityName=Koh%20Lanta&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_lanta_hotels&trip_sub3=D20729235",
  "koh-lipe": "https://www.trip.com/hotels/list?city=36062&cityName=Koh%20Lipe&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_lipe_hotels&trip_sub3=D20729235",
  "koh-chang": "https://www.trip.com/hotels/list?city=3764&cityName=Koh%20Chang&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_chang_hotels&trip_sub3=D20729235",
  "koh-kood": "https://www.trip.com/hotels/list?city=62195&cityName=Koh%20Kood&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_kood_hotels&trip_sub3=D20729235",
  "koh-phangan": "https://www.trip.com/hotels/list?city=36057&cityName=Koh%20Phangan&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_phangan_hotels&trip_sub3=D20729235",
  "koh-samui": "https://www.trip.com/hotels/list?city=1229&cityName=Koh%20Samui&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_samui_hotels&trip_sub3=D20729235",
  "krabi": "https://www.trip.com/hotels/list?city=1405&cityName=Krabi%20Town&Allianceid=11105102&SID=334804079&trip_sub1=th_krabi_hotels&trip_sub3=D20729235",
  "pai": "https://www.trip.com/hotels/list?city=35981&cityName=Pai&Allianceid=11105102&SID=334804079&trip_sub1=th_pai_hotels&trip_sub3=D20729235",
  "pattaya": "https://www.trip.com/hotels/list?city=622&cityName=Pattaya&Allianceid=11105102&SID=334804079&trip_sub1=th_pattaya_hotels&trip_sub3=D20729235",
  "phuket": "https://www.trip.com/hotels/list?city=725&cityName=Phuket&Allianceid=11105102&SID=334804079&trip_sub1=th_phuket_hotels&trip_sub3=D20729235",
  "ayutthaya": "https://www.trip.com/hotels/list?city=36030&cityName=Phra%20Nakhon%20Si%20Ayutthaya&Allianceid=11105102&SID=334804079&trip_sub1=th_ayutthaya_hotels&trip_sub3=D20729235",
  "sukhothai": "https://www.trip.com/hotels/list?city=6045&cityName=Sukhothai&Allianceid=11105102&SID=334804079&trip_sub1=th_sukhothai_hotels&trip_sub3=D20729235",
  "surat-thani": "https://www.trip.com/hotels/list?city=1479&cityName=Surat%20Thani&Allianceid=11105102&SID=334804079&trip_sub1=th_surat_thani_hotels&trip_sub3=D20729235",
  "koh-tao": "https://www.trip.com/hotels/list?city=19957&cityName=Koh%20Tao&Allianceid=11105102&SID=334804079&trip_sub1=th_koh_tao_hotels&trip_sub3=D20729235",
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
  // Batch 3, SID 334804079, undated Partner tool link. Copied exactly as generated (spaces as %20). Never edit.
  "Wongamat|pattaya": "https://www.trip.com/hotels/list?cityId=622&cityName=Pattaya&searchWord=Wong%20Amat%20Beach&searchType=LM&optionId=16180132&searchValue=13|16180132*13*12.9583058|100.8844263|Wong%20Amat%20Beach|16180132|1&crn=1&adult=2&Allianceid=11105102&SID=334804079&trip_sub1=th_h_wongamat&trip_sub3=D20762590",
  "Khao Sok|": "https://www.trip.com/hotels/list?keyword=Khao%20Sok&Allianceid=11105102&SID=334804079&trip_sub1=th_khao_sok_hotels&trip_sub3=D20753231",
  "Khao Yai|": "https://www.trip.com/hotels/list?keyword=Khao%20Yai&Allianceid=11105102&SID=334804079&trip_sub1=th_khao_yai_hotels&trip_sub3=D20753231",
  "Phi Phi|krabi": "https://www.trip.com/hotels/list?Allianceid=11105102&SID=334804079&city=1405&cityName=Krabi&trip_sub1=th_phi_phi_hotels&trip_sub3=D20753231&keyword=Phi%20Phi",
  "Sai Yok|kanchanaburi": "https://www.trip.com/hotels/list?Allianceid=11105102&SID=334804079&city=36027&cityName=Kanchanaburi&trip_sub1=th_sai_yok_hotels&trip_sub3=D20753231&keyword=Sai%20Yok",
  "Khao Sok raft house|": "https://www.trip.com/hotels/list?keyword=Khao%20Sok%20raft%20house&Allianceid=11105102&SID=334804079&trip_sub1=th_khao_sok_raft_house&trip_sub3=D20753231",
  "private pool villa|krabi": "https://www.trip.com/hotels/list?Allianceid=11105102&SID=334804079&city=1405&cityName=Krabi&trip_sub1=th_private_pool_villa&trip_sub3=D20753231&keyword=private%20pool%20villa",
};

/** Trip.com Partner tool links, batch 2, SID 334804079. Copied exactly as generated (spaces as %20). Never edit. */
const TRIP_GENERATED_AREAS: Record<string, string> = {
  // Batch 3, SID 334804079, undated Partner tool links. Copied exactly as generated (spaces as %20). Never edit.
  "Karon|phuket": "https://www.trip.com/hotels/list?cityId=725&cityName=Phuket&searchWord=Karon%20Beach&searchType=Z&optionId=826&searchValue=8|826*8*826&crn=1&adult=2&Allianceid=11105102&SID=334804079&trip_sub1=th_h_karon&trip_sub3=D20762520",
  "Surin Beach|phuket": "https://www.trip.com/hotels/list?cityId=725&cityName=Phuket&searchWord=Surin%20Beach&searchType=LM&optionId=15270062&searchValue=13|15270062*13*7.9754731|98.2784667|Surin%20Beach|15270062|1&crn=1&adult=2&Allianceid=11105102&SID=334804079&trip_sub1=th_h_surin&trip_sub3=D20762590",
  "Rawai|phuket": "https://www.trip.com/hotels/list?cityId=725&cityName=Phuket&searchWord=Rawai%20Beach&searchType=Z&optionId=930&searchValue=8|930*8*930&crn=1&adult=2&Allianceid=11105102&SID=334804079&trip_sub1=th_h_rawai&trip_sub3=D20762590",
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

/** Encode a decoded generated Trip.com link for rendering: each query value is URL-encoded, nothing else changes. */
export function encodeTripLink(raw: string): string {
  const q = raw.indexOf('?');
  if (q < 0) return raw;
  // Split only on & that starts a new key=, so a literal & inside a decoded value (e.g. 'Villas & Residences') stays in that value.
  const query = raw.slice(q + 1).split(/&(?=[A-Za-z_][A-Za-z0-9_]*=)/).map((pair) => {
    const eq = pair.indexOf('=');
    return eq < 0 ? pair : `${pair.slice(0, eq)}=${encodeURIComponent(pair.slice(eq + 1))}`;
  });
  return `${raw.slice(0, q)}?${query.join('&')}`;
}

/** Generated neighbourhood hotel link for an area slug, encoded for rendering. */
export function neighbourhoodLink(area: string): string | undefined {
  const row = TRIP_NEIGHBOURHOOD_LINKS[area];
  return row ? encodeTripLink(row.link) : undefined;
}

const NEIGHBOURHOOD_FALLBACK_CITY: Record<string, string> = Object.fromEntries(
  Object.values(TRIP_NEIGHBOURHOOD_LINKS).filter((r) => r.fallback).map((r) => [encodeTripLink(r.link), r.city]),
);

const NEARBY_AREAS = new Set(['kamala', 'surin', 'bang-niang']);
const KEYWORD_LABELS: Record<string, string> = {
  khao_sok_raft_house: 'Khao Sok stays',
  soneva_kiri: 'Koh Kood stays',
  private_pool_villa: 'Krabi pool villas',
};
const TRIP_HOTEL_CTA: Record<string, string> = {
  ...Object.fromEntries(
    Object.entries(TRIP_NEIGHBOURHOOD_LINKS).flatMap(([slug, r]) =>
      r.fallback ? [[encodeTripLink(r.link), `Hotels in ${r.city}`]] : NEARBY_AREAS.has(slug) ? [[encodeTripLink(r.link), `Hotels in ${r.area} and nearby`]] : [],
    ),
  ),
  ...Object.fromEntries(
    Object.values(TRIP_KEYWORD_LINKS).filter((r) => KEYWORD_LABELS[r.slug]).map((r) => [encodeTripLink(r.link), KEYWORD_LABELS[r.slug]]),
  ),
};

const AREA_LIST_TITLES: Record<string, string> = {
  soneva_kiri: 'Koh Kood hotel list',
  private_pool_villa: 'Krabi pool villa list',
};
const TRIP_HOTEL_TITLE: Record<string, string> = Object.fromEntries(
  Object.values(TRIP_KEYWORD_LINKS).filter((r) => AREA_LIST_TITLES[r.slug]).map((r) => [encodeTripLink(r.link), AREA_LIST_TITLES[r.slug]]),
);

/** Card title for a generated link that falls back to an area list instead of the named property; otherwise undefined. */
export function tripHotelTitle(href: string | undefined): string | undefined {
  return href ? TRIP_HOTEL_TITLE[href] : undefined;
}

/** Truthful button text for a generated hotel link whose list is wider than the named place; otherwise undefined. */
export function tripHotelCta(href: string | undefined): string | undefined {
  return href ? TRIP_HOTEL_CTA[href] : undefined;
}

/** If href is a neighbourhood link that falls back to the whole city, the city name; otherwise undefined. */
export function neighbourhoodFallbackCity(href: string | undefined): string | undefined {
  return href ? NEIGHBOURHOOD_FALLBACK_CITY[href] : undefined;
}

export function stayAreaLink(area: StayArea, extra: Record<string, string> = {}): string {
  const csvLink = neighbourhoodLink(area);
  if (csvLink) return csvLink;
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
  const areaSlug = (Object.keys(tripAreas) as StayArea[]).find(
    (k) => tripAreas[k].keyword === query && (!city || tripAreas[k].city === city),
  );
  const areaLink = areaSlug ? neighbourhoodLink(areaSlug) : undefined;
  if (areaLink) return areaLink;
  const kw = TRIP_KEYWORD_LINKS[query];
  if (kw) return encodeTripLink(kw.link);
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
  'Bangkok tours': 'https://klook.tpx.li/s1rHaAdO',
  'Chiang Mai tours': 'https://klook.tpx.li/wwgLEEcc',
  'Thailand itinerary tours': 'https://klook.tpx.li/hxjjyGRa',
  'Phuket Old Town food': 'https://klook.tpx.li/PQxWViIn',
  'Isan food Khon Kaen': 'https://klook.tpx.li/J6uUjL8k',
  'Krabi food tour': 'https://klook.tpx.li/TxVqaT9i',
  'Chiang Rai food tour': 'https://klook.tpx.li/CV8HJOs6',
  'Hua Hin night market': 'https://klook.tpx.li/yAA1tuig',
  'Hat Yai food': 'https://klook.tpx.li/nRuFGl2E',
  'Pattaya food tour': 'https://klook.tpx.li/FEJ8EBLw',
  'Koh Samui food tour': 'https://klook.tpx.li/PLiKjHJz',
  'Isan food Nong Khai': 'https://klook.tpx.li/r8ZASMzN',
  'Chiang Mai market food tour': 'https://klook.tpx.li/O4XbXkfh',
  'Ayutthaya food tour': 'https://klook.tpx.li/31NabRdC',
  'Isan food Udon Thani': 'https://klook.tpx.li/SChK8aLQ',
  'Chiang Mai cooking class northern': 'https://klook.tpx.li/FiFW6kpD',
  'Sukhothai food': 'https://klook.tpx.li/ybn4tMDS',
  'Yaowarat Chinatown food tour': 'https://klook.tpx.li/8xcoqsW5',
  'Pai Chiang Mai': 'https://klook.tpx.li/BB9oFQZC',
  'Chiang Mai northern food tour': 'https://klook.tpx.li/RyGrQIQQ',
  'Pai tour': 'https://klook.tpx.li/1jzWUN0h',
  'Koh Lanta tour': 'https://klook.tpx.li/e67qVx5W',
  'Khao Lak Similan': 'https://klook.tpx.li/2LvUeYPv',
  'Koh Lipe tour': 'https://klook.tpx.li/qtRE968v',
  'Phi Phi tour': 'https://klook.tpx.li/UkwOyOhl',
  'Koh Kood tour': 'https://klook.tpx.li/aXfjXuki',
  'Kanchanaburi food tour': 'https://klook.tpx.li/CIz4wxlC',
  'Koh Tao snorkeling': 'https://klook.tpx.li/PuEE87dG',
  'Bangkok Isan food tour': 'https://klook.tpx.li/ewyZc0rt',
  'Koh Phangan tour': 'https://klook.tpx.li/DzyDjucv',
  'Sukhothai Historical Park': 'https://klook.tpx.li/tV1MkIUN',
  'Chiang Mai dessert food tour': 'https://klook.tpx.li/ImXmL9jC',
  'Chiang Mai food tour khao soi': 'https://klook.tpx.li/t7LgYjUj',
  'Bangkok market food tour': 'https://klook.tpx.li/4JDXv2Dv',
  'Bangkok street food tour': 'https://klook.tpx.li/1iKcjmAa',
  'Hua Hin Phraya Nakhon': 'https://klook.tpx.li/ZFCsHXUV',
  'Koh Kood ferry': 'https://klook.tpx.li/tZY9GkMB',
  'Lomprayah Koh Phangan': 'https://klook.tpx.li/B1dTX8dM',
  'Lomprayah Koh Tao': 'https://klook.tpx.li/wQTUo9cz',
  'Ayutthaya Historical Park': 'https://klook.tpx.li/2EwuYoVR',
  'Pai canyon': 'https://klook.tpx.li/xafjcra1',
  'Or Tor Kor Market Bangkok': 'https://klook.tpx.li/gLSh1kIa',
  'Chiang Mai breakfast food tour': 'https://klook.tpx.li/Co8FCt4Y',
  'Chiang Rai tours': 'https://klook.tpx.li/8VyJARU7',
  'Pai tours': 'https://klook.tpx.li/21LAvFLh',
  'Phuket tours': 'https://klook.tpx.li/mEUxiHVY',
  'Krabi tours': 'https://klook.tpx.li/nrYR3OP7',
  'Koh Samui tours': 'https://klook.tpx.li/utWNpEl9',
  'Koh Phangan tours': 'https://klook.tpx.li/cSkSf8Lg',
  'Koh Tao tours': 'https://klook.tpx.li/4SHuvaVE',
  'Koh Lanta tours': 'https://klook.tpx.li/Mbj69cR2',
  'Koh Phi Phi tours': 'https://klook.tpx.li/2YQOmg6h',
  'Koh Lipe tours': 'https://klook.tpx.li/S2nWHDaO',
  'Koh Chang tours': 'https://klook.tpx.li/hyPngBBi',
  'Koh Kood tours': 'https://klook.tpx.li/SqwHjbnF',
  'Pattaya tours': 'https://klook.tpx.li/LlYh3wsa',
  'Hua Hin tours': 'https://klook.tpx.li/TG5XQ6Do',
  'Ayutthaya tours': 'https://klook.tpx.li/wZAD69as',
  'Sukhothai tours': 'https://klook.tpx.li/fZhhZZaN',
  'Kanchanaburi tours': 'https://klook.tpx.li/LSJFj3pH',
  'Khao Lak tours': 'https://klook.tpx.li/NoBEfwq7',
  'Udon Thani tours': 'https://klook.tpx.li/WPnWynPW',
  'Khon Kaen tours': 'https://klook.tpx.li/F3krpfS3',
  'Hat Yai tours': 'https://klook.tpx.li/RSPVQQcT',
  'Thailand tours': 'https://klook.tpx.li/26HKz5rQ',
  'Khao Sok tours': 'https://klook.tpx.li/emvmTJTO',
  'Khao Yai tours': 'https://klook.tpx.li/hdwpp8Qx',
  'Nong Khai tours': 'https://klook.tpx.li/Z7GRe6Y3',
  'Chatuchak market': 'https://klook.tpx.li/5h8c6FbZ',
  'Damnoen Saduak floating market': 'https://klook.tpx.li/E3pXdB5i',
  'Khao Lak food tour': 'https://klook.tpx.li/lpJvXHm7',
  'Koh Lanta food tour': 'https://klook.tpx.li/MqpaT1wS',
  'Koh Lipe food tour': 'https://klook.tpx.li/HliEKXi9',
  'Koh Phangan food tour': 'https://klook.tpx.li/oq8VDxpV',
  'Koh Phi Phi food tour': 'https://klook.tpx.li/RLNqOkIB',
  'Koh Tao food tour': 'https://klook.tpx.li/NhizCft5',
  'Koh Kood food tour': 'https://klook.tpx.li/GTCdoXgg',
  'Pai food tour': 'https://klook.tpx.li/2X9UQOiu',
};

/** Partner-generated per-city Klook tours links (sub_id th_k_city_*), keyed by city slug. Use exactly as issued. */
const KLOOK_CITY_LINKS: Record<string, string> = {
  'bangkok': 'https://klook.tpx.li/s1rHaAdO',
  'chiang-mai': 'https://klook.tpx.li/wwgLEEcc',
  'chiang-rai': 'https://klook.tpx.li/8VyJARU7',
  'pai': 'https://klook.tpx.li/21LAvFLh',
  'phuket': 'https://klook.tpx.li/mEUxiHVY',
  'krabi': 'https://klook.tpx.li/nrYR3OP7',
  'koh-samui': 'https://klook.tpx.li/utWNpEl9',
  'koh-phangan': 'https://klook.tpx.li/cSkSf8Lg',
  'koh-tao': 'https://klook.tpx.li/4SHuvaVE',
  'koh-lanta': 'https://klook.tpx.li/Mbj69cR2',
  'koh-phi-phi': 'https://klook.tpx.li/2YQOmg6h',
  'koh-lipe': 'https://klook.tpx.li/S2nWHDaO',
  'koh-chang': 'https://klook.tpx.li/hyPngBBi',
  'koh-kood': 'https://klook.tpx.li/SqwHjbnF',
  'pattaya': 'https://klook.tpx.li/LlYh3wsa',
  'hua-hin': 'https://klook.tpx.li/TG5XQ6Do',
  'ayutthaya': 'https://klook.tpx.li/wZAD69as',
  'sukhothai': 'https://klook.tpx.li/fZhhZZaN',
  'kanchanaburi': 'https://klook.tpx.li/LSJFj3pH',
  'khao-lak': 'https://klook.tpx.li/NoBEfwq7',
  'udon-thani': 'https://klook.tpx.li/WPnWynPW',
  'khon-kaen': 'https://klook.tpx.li/F3krpfS3',
  'hat-yai': 'https://klook.tpx.li/RSPVQQcT',
  'khao-sok': 'https://klook.tpx.li/emvmTJTO',
  'khao-yai': 'https://klook.tpx.li/hdwpp8Qx',
  'nong-khai': 'https://klook.tpx.li/Z7GRe6Y3',
};


/** City names and aliases, most specific first, mapped to KLOOK_CITY_LINKS slugs. */
const KLOOK_CITY_ALIASES: Array<[RegExp, string]> = [
  [/khao[- ]sok|cheow[- ]lan|surat[- ]thani/i, 'khao-sok'],
  [/khao[- ]yai/i, 'khao-yai'],
  [/nong[- ]khai/i, 'nong-khai'],
  [/koh[- ]?phi[- ]?phi|phi[- ]phi|maya bay/i, 'koh-phi-phi'],
  [/koh[- ]?lipe/i, 'koh-lipe'],
  [/koh[- ]?lanta/i, 'koh-lanta'],
  [/koh[- ]?kood|ko[- ]kut|soneva kiri/i, 'koh-kood'],
  [/koh[- ]?chang/i, 'koh-chang'],
  [/phangan|haad rin/i, 'koh-phangan'],
  [/koh[- ]?tao/i, 'koh-tao'],
  [/samui|bophut|lamai|chaweng|ang thong/i, 'koh-samui'],
  [/khao[- ]lak|similan|bang niang/i, 'khao-lak'],
  [/chiang[- ]rai|white temple|golden triangle|baan dam/i, 'chiang-rai'],
  [/(^|[^a-z])pai([^a-z]|$)/i, 'pai'],
  [/chiang[- ]mai|nimman|lanna|hang dong|mae rim|doi inthanon|doi suthep|wat ket/i, 'chiang-mai'],
  [/hua[- ]hin/i, 'hua-hin'],
  [/pattaya|jomtien|naklua|koh larn/i, 'pattaya'],
  [/ayutthaya/i, 'ayutthaya'],
  [/kanchanaburi|erawan|river kwai/i, 'kanchanaburi'],
  [/sukhothai|si satchanalai/i, 'sukhothai'],
  [/udon[- ]thani/i, 'udon-thani'],
  [/khon[- ]kaen/i, 'khon-kaen'],
  [/hat[- ]yai/i, 'hat-yai'],
  [/phuket|patong|kata|karon|kamala|rawai|nai harn|bang tao|laguna|nai yang|mai khao|phang nga|yao noi|amanpuri/i, 'phuket'],
  [/krabi|railay|ao[- ]nang|tubkaek|phra nang|rayavadee|phulay bay/i, 'krabi'],
  [/bangkok|yaowarat|chinatown|sukhumvit|silom|sathorn|thonglor|ekkamai|chatuchak|rattanakosin|wat pho|wat arun|grand palace|charoenkrung|khao san|ari([^a-z]|$)|pratunam|iconsiam|talat noi|wang lang|or tor kor|jim thompson|phrom phong|thong lo|lumphini|lumpinee|rajadamnern|on nut|phra khanong|khlong|the siam|jeh o chula|banthat thong|damnoen saduak|amphawa/i, 'bangkok'],
];

const KLOOK_CITY_NAMES: Record<string, string> = {
  'bangkok': 'Bangkok', 'chiang-mai': 'Chiang Mai', 'chiang-rai': 'Chiang Rai', 'pai': 'Pai', 'phuket': 'Phuket',
  'krabi': 'Krabi', 'koh-samui': 'Koh Samui', 'koh-phangan': 'Koh Phangan', 'koh-tao': 'Koh Tao', 'koh-lanta': 'Koh Lanta',
  'koh-phi-phi': 'Koh Phi Phi', 'koh-lipe': 'Koh Lipe', 'koh-chang': 'Koh Chang', 'koh-kood': 'Koh Kood', 'pattaya': 'Pattaya',
  'hua-hin': 'Hua Hin', 'ayutthaya': 'Ayutthaya', 'sukhothai': 'Sukhothai', 'kanchanaburi': 'Kanchanaburi', 'khao-lak': 'Khao Lak',
  'udon-thani': 'Udon Thani', 'khao-sok': 'Khao Sok', 'khao-yai': 'Khao Yai', 'nong-khai': 'Nong Khai', 'khon-kaen': 'Khon Kaen', 'hat-yai': 'Hat Yai',
};

/** If href is a generated per-city Klook tours link, the city name it covers; otherwise undefined. */
export function klookCityName(href: string | undefined): string | undefined {
  if (!href) return undefined;
  for (const [slug, link] of Object.entries(KLOOK_CITY_LINKS)) if (link === href) return KLOOK_CITY_NAMES[slug];
  return undefined;
}

/** Truthful label for a city tours fallback link. */
export function klookCityLabel(city: string): string {
  return `${city} tours and experiences`;
}

/** The generated per-city Klook link for any text (query, title or path), or undefined. */
export function klookCityLink(text: string): string | undefined {
  for (const [re, slug] of KLOOK_CITY_ALIASES) if (re.test(text)) return KLOOK_CITY_LINKS[slug];
  return undefined;
}

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
  if (query && /chatuchak|jj weekend/i.test(query)) return KLOOK_DEEP_LINKS['Chatuchak market'];
  if (query && /damnoen|amphawa|floating market/i.test(query)) return KLOOK_DEEP_LINKS['Damnoen Saduak floating market'];
  if (query && KLOOK_DEEP_LINKS[query]) return KLOOK_DEEP_LINKS[query];
  const foodLink = query ? klookFoodLink(query) : undefined;
  if (foodLink) return foodLink;
  const cityLink = query ? klookCityLink(query) : undefined;
  if (cityLink) return cityLink;
  // National pages and anything without a city: the generated country-wide Thailand tours link.
  return KLOOK_DEEP_LINKS['Thailand tours'];
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

/** Truthful CTA labels for generated Klook food links, keyed by the generated link. */
const KLOOK_FOOD_LABELS: Record<string, string> = {
  [KLOOK_DEEP_LINKS['Yaowarat Chinatown food tour']]: 'Yaowarat Chinatown food tours',
  [KLOOK_DEEP_LINKS['Bangkok Isan food tour']]: 'Isan food tours in Bangkok',
  [KLOOK_DEEP_LINKS['Or Tor Kor Market Bangkok']]: 'Or Tor Kor market visits',
  [KLOOK_DEEP_LINKS['Bangkok street food tour']]: 'Bangkok street food tours',
  [KLOOK_DEEP_LINKS['Bangkok market food tour']]: 'Bangkok market food tours',
  [KLOOK_DEEP_LINKS['Chiang Mai cooking class northern']]: 'Chiang Mai northern cooking classes',
  [KLOOK_DEEP_LINKS['Chiang Mai food tour khao soi']]: 'Chiang Mai khao soi food tours',
  [KLOOK_DEEP_LINKS['Chiang Mai market food tour']]: 'Chiang Mai market food tours',
  [KLOOK_DEEP_LINKS['Chiang Mai northern food tour']]: 'Chiang Mai northern food tours',
  [KLOOK_DEEP_LINKS['Chiang Mai dessert food tour']]: 'Chiang Mai dessert food tours',
  [KLOOK_DEEP_LINKS['Chiang Mai breakfast food tour']]: 'Chiang Mai breakfast food tours',
  [KLOOK_DEEP_LINKS['Phuket Old Town food']]: 'Phuket Old Town food tours',
  [KLOOK_DEEP_LINKS['Krabi food tour']]: 'Krabi food tours',
  [KLOOK_DEEP_LINKS['Chiang Rai food tour']]: 'Chiang Rai food tours',
  [KLOOK_DEEP_LINKS['Hua Hin night market']]: 'Hua Hin night market tours',
  [KLOOK_DEEP_LINKS['Hat Yai food']]: 'Hat Yai food tours',
  [KLOOK_DEEP_LINKS['Pattaya food tour']]: 'Pattaya food tours',
  [KLOOK_DEEP_LINKS['Koh Samui food tour']]: 'Koh Samui food tours',
  [KLOOK_DEEP_LINKS['Isan food Nong Khai']]: 'Nong Khai Isan food tours',
  [KLOOK_DEEP_LINKS['Isan food Khon Kaen']]: 'Khon Kaen Isan food tours',
  [KLOOK_DEEP_LINKS['Isan food Udon Thani']]: 'Udon Thani Isan food tours',
  [KLOOK_DEEP_LINKS['Ayutthaya food tour']]: 'Ayutthaya food tours',
  [KLOOK_DEEP_LINKS['Sukhothai food']]: 'Sukhothai food tours',
  [KLOOK_DEEP_LINKS['Kanchanaburi food tour']]: 'Kanchanaburi food tours',
  [KLOOK_DEEP_LINKS['Chatuchak market']]: 'Chatuchak market visits',
  [KLOOK_DEEP_LINKS['Damnoen Saduak floating market']]: 'Damnoen Saduak floating market tours',
  [KLOOK_DEEP_LINKS['Khao Lak food tour']]: 'Khao Lak food tours',
  [KLOOK_DEEP_LINKS['Koh Lanta food tour']]: 'Koh Lanta food tours',
  [KLOOK_DEEP_LINKS['Koh Lipe food tour']]: 'Koh Lipe food tours',
  [KLOOK_DEEP_LINKS['Koh Phangan food tour']]: 'Koh Phangan food tours',
  [KLOOK_DEEP_LINKS['Koh Phi Phi food tour']]: 'Koh Phi Phi food tours',
  [KLOOK_DEEP_LINKS['Koh Tao food tour']]: 'Koh Tao food tours',
  [KLOOK_DEEP_LINKS['Koh Kood food tour']]: 'Koh Kood food tours',
  [KLOOK_DEEP_LINKS['Pai food tour']]: 'Pai food tours',
};

const KLOOK_FOOD_CONTEXT = /food|market|cooking|recipe|dessert|breakfast|coffee|khao soi|street|noodle|curry|grill|seafood|snack| in [A-Z][A-Za-z ]+( food tour| tours)$/i;

function foodKey(text: string): string | undefined {
  const t = text.toLowerCase();
  if (/nong khai/.test(t)) return 'Isan food Nong Khai';
  if (/(^| )thai food isan( |$)|isan and regional markets food guide/.test(t)) return 'Bangkok Isan food tour';
  if (/khon kaen/.test(t)) return 'Isan food Khon Kaen';
  if (/udon thani/.test(t)) return 'Isan food Udon Thani';
  const slug = KLOOK_CITY_ALIASES.find(([re]) => re.test(text))?.[1];
  switch (slug) {
    case 'bangkok':
      if (/chatuchak|jj weekend/.test(t)) return 'Chatuchak market';
      if (/damnoen|amphawa|floating/.test(t)) return 'Damnoen Saduak floating market';
      if (/yaowarat|chinatown|banthat thong|talat noi|wang lang/.test(t)) return 'Yaowarat Chinatown food tour';
      if (/isan|som tum|larb|nam tok|gai yang|jim jum|tam mua/.test(t)) return 'Bangkok Isan food tour';
      if (/market|fruit|or tor kor|mango|fresh/.test(t)) return 'Or Tor Kor Market Bangkok';
      return 'Bangkok street food tour';
    case 'chiang-mai':
      if (/cooking|recipe|class/.test(t)) return 'Chiang Mai cooking class northern';
      if (/khao soi/.test(t)) return 'Chiang Mai food tour khao soi';
      if (/market/.test(t)) return 'Chiang Mai market food tour';
      if (/dessert|khanom|bua loi|mango|sticky|sweet/.test(t)) return 'Chiang Mai dessert food tour';
      if (/breakfast|jok|coffee|pa tong go/.test(t)) return 'Chiang Mai breakfast food tour';
      return 'Chiang Mai northern food tour';
    case 'khao-lak': return 'Khao Lak food tour';
    case 'koh-lanta': return 'Koh Lanta food tour';
    case 'koh-lipe': return 'Koh Lipe food tour';
    case 'koh-phangan': return 'Koh Phangan food tour';
    case 'koh-phi-phi': return 'Koh Phi Phi food tour';
    case 'koh-tao': return 'Koh Tao food tour';
    case 'koh-kood': return 'Koh Kood food tour';
    case 'pai': return 'Pai food tour';
    case 'phuket': return 'Phuket Old Town food';
    case 'krabi': return 'Krabi food tour';
    case 'chiang-rai': return 'Chiang Rai food tour';
    case 'hua-hin': return 'Hua Hin night market';
    case 'hat-yai': return 'Hat Yai food';
    case 'pattaya': return 'Pattaya food tour';
    case 'koh-samui': return 'Koh Samui food tour';
    case 'ayutthaya': return 'Ayutthaya food tour';
    case 'sukhothai': return 'Sukhothai food';
    case 'kanchanaburi': return 'Kanchanaburi food tour';
    default: return undefined;
  }
}

/** The closest generated Klook food link for food or market text (query, title or path), or undefined. */
export function klookFoodLink(text: string, force = false): string | undefined {
  if (!force && !KLOOK_FOOD_CONTEXT.test(text)) return undefined;
  const key = foodKey(text);
  return key ? KLOOK_DEEP_LINKS[key] : undefined;
}

/** Truthful CTA copy when href is a generated city or food fallback link; otherwise undefined. */
export function klookFallbackCta(href: string | undefined): { label: string; note: string; short: string } | undefined {
  if (!href) return undefined;
  const food = KLOOK_FOOD_LABELS[href];
  if (food) return { label: food, note: `Browse ${food} on Klook.`, short: food };
  if (href === KLOOK_DEEP_LINKS['Thailand tours']) return { label: 'Thailand tours and experiences', note: 'Browse tours, tickets, and day trips across Thailand.', short: 'Thailand tours' };
  const city = klookCityName(href);
  if (city) return { label: klookCityLabel(city), note: `Browse tours, tickets, and day trips in ${city}.`, short: `${city} tours` };
  return undefined;
}
