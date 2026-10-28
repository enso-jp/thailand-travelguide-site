export type RegionSlug = 'central' | 'north' | 'andaman' | 'gulf' | 'east';

export type RegionPlace = {
  name: string;
  href: string;
  photo: string;
};

export type Region = {
  slug: RegionSlug;
  name: string;
  summary: string;
  href: string;
  photo: string;
  places: RegionPlace[];
};

export const REGIONS: Region[] = [
  {
    slug: 'central',
    name: 'Bangkok & Central Plains',
    href: '/destinations/central-and-east',
    photo: '/photos/bangkok.jpg',
    summary:
      'Land in Bangkok, then add Ayutthaya ruins, a Kanchanaburi waterfall day, or a Hua Hin weekend. Amphawa is the Friday canal, not a first-morning stop.',
    places: [
      { name: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
      { name: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { name: 'Kanchanaburi', href: '/kanchanaburi', photo: '/photos/kanchanaburi.jpg' },
      { name: 'Hua Hin', href: '/hua-hin', photo: '/photos/hua-hin.jpg' },
      { name: 'Amphawa', href: '/attractions/damnoen-saduak-and-amphawa-floating-markets', photo: '/photos/riverside.jpg' },
    ],
  },
  {
    slug: 'north',
    name: 'Northern Highlands',
    href: '/destinations/northern-thailand',
    photo: '/photos/chiang-mai.jpg',
    summary:
      'Chiang Mai first. Add Chiang Rai for the White Temple, Pai for the mountain road, or Sukhothai if you want a second ruin park.',
    places: [
      { name: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { name: 'Chiang Rai', href: '/chiang-rai', photo: '/photos/chiang-rai.jpg' },
      { name: 'Pai', href: '/pai', photo: '/photos/pai.jpg' },
      { name: 'Mae Hong Son', href: '/itineraries/7-days-northern-thailand-loop', photo: '/photos/northern.jpg' },
      { name: 'Sukhothai', href: '/sukhothai', photo: '/photos/sukhothai.jpg' },
    ],
  },
  {
    slug: 'andaman',
    name: 'Andaman Coast',
    href: '/destinations',
    photo: '/photos/phuket.jpg',
    summary:
      'Phuket, Krabi, Phi Phi, Lanta, Khao Lak, and Khao Sok share one sea. Use November to April. Do not add the Gulf on the same first week.',
    places: [
      { name: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { name: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
      { name: 'Koh Phi Phi', href: '/koh-phi-phi', photo: '/photos/phi-phi.jpg' },
      { name: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
      { name: 'Khao Sok', href: '/khao-sok', photo: '/photos/khao-sok.jpg' },
    ],
  },
  {
    slug: 'gulf',
    name: 'Gulf of Thailand Islands',
    href: '/destinations',
    photo: '/photos/koh-samui.jpg',
    summary:
      'Samui, Phangan, Tao, and Ang Thong sit on the Lower Gulf. Easier January to September. Fly USM or boat from Surat Thani or Chumphon.',
    places: [
      { name: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { name: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
      { name: 'Koh Tao', href: '/koh-tao', photo: '/photos/koh-tao.jpg' },
      { name: 'Ang Thong', href: '/koh-samui/ang-thong-marine-park', photo: '/photos/ang-thong.jpg' },
      { name: 'Koh Lipe', href: '/koh-lipe', photo: '/photos/koh-lipe.jpg' },
    ],
  },
  {
    slug: 'east',
    name: 'Eastern Seaboard & Isan',
    href: '/destinations/central-and-east',
    photo: '/photos/pattaya.jpg',
    summary:
      'Pattaya is the east gulf city. Koh Chang and Koh Kood need a Trat boat. Khao Yai is the park weekend. Ubon is the Isan plate, not a beach.',
    places: [
      { name: 'Pattaya', href: '/pattaya', photo: '/photos/pattaya.jpg' },
      { name: 'Koh Chang', href: '/koh-chang', photo: '/photos/koh-chang.jpg' },
      { name: 'Koh Kood', href: '/koh-kood', photo: '/photos/koh-kood.jpg' },
      { name: 'Khao Yai', href: '/khao-yai', photo: '/photos/khao-yai.jpg' },
      { name: 'Hua Hin', href: '/hua-hin', photo: '/photos/hua-hin.jpg' },
    ],
  },
];

export const MAP_PINS = [
  { name: 'Bangkok', href: '/bangkok', region: 'central' as RegionSlug, x: 198, y: 318, lx: 214, ly: 314, anchor: 'start' },
  { name: 'Ayutthaya', href: '/ayutthaya', region: 'central' as RegionSlug, x: 196, y: 292, lx: 214, ly: 288, anchor: 'start' },
  { name: 'Chiang Mai', href: '/chiang-mai', region: 'north' as RegionSlug, x: 148, y: 128, lx: 164, ly: 124, anchor: 'start' },
  { name: 'Chiang Rai', href: '/chiang-rai', region: 'north' as RegionSlug, x: 186, y: 78, lx: 202, ly: 74, anchor: 'start' },
  { name: 'Phuket', href: '/phuket', region: 'andaman' as RegionSlug, x: 92, y: 548, lx: 48, ly: 546, anchor: 'end' },
  { name: 'Krabi', href: '/krabi', region: 'andaman' as RegionSlug, x: 118, y: 532, lx: 134, ly: 528, anchor: 'start' },
  { name: 'Koh Samui', href: '/koh-samui', region: 'gulf' as RegionSlug, x: 176, y: 498, lx: 192, ly: 494, anchor: 'start' },
  { name: 'Koh Phangan', href: '/koh-phangan', region: 'gulf' as RegionSlug, x: 186, y: 480, lx: 202, ly: 476, anchor: 'start' },
  { name: 'Khao Sok', href: '/khao-sok', region: 'andaman' as RegionSlug, x: 132, y: 502, lx: 86, ly: 500, anchor: 'end' },
  { name: 'Pattaya', href: '/pattaya', region: 'east' as RegionSlug, x: 228, y: 348, lx: 244, ly: 344, anchor: 'start' },
  { name: 'Koh Kood', href: '/koh-kood', region: 'east' as RegionSlug, x: 292, y: 392, lx: 274, ly: 388, anchor: 'end' },
];

export function regionForPath(path: string): RegionSlug {
  if (/chiang-mai|chiang-rai|pai|sukhothai|northern/.test(path)) return 'north';
  if (/phuket|krabi|phi-phi|lanta|lipe|khao-lak|khao-sok|andaman/.test(path)) return 'andaman';
  if (/samui|phangan|tao|ang-thong/.test(path)) return 'gulf';
  if (/pattaya|koh-chang|koh-kood|khao-yai|ubon|isan/.test(path)) return 'east';
  return 'central';
}
