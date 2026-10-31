import { UniquePhotos } from "./photos";
import { attractionsFor, isPlacePage } from "./place-attractions";
import { foodRowsFor } from "./dish-photos";
import credits from '../../public/photos/credits.json';
import type { Affiliate, EditorialCard, Page, Portrait } from './content';
import { klookTours, stayLink, stayCityFromPath } from './partners';

const BANNED = [
  /planner spine/i,
  /click-outs that matter/i,
  /ATM fee is often 220 THB/i,
  /They are not ranked/i,
];

const BANGKOK_TEMPLE_PHOTOS = new Set([
  '/photos/wat-pho.jpg',
  '/photos/wat-arun-night.jpg',
  '/photos/chatuchak.jpg',
  '/photos/yaowarat.jpg',
  '/photos/grand-palace.jpg',
  '/photos/doi-suthep.jpg',
  '/photos/bts.jpg',
]);

const SOUTH_POOL = [
  '/photos/railay.jpg',
  '/photos/phi-phi.jpg',
  '/photos/cheow-lan.jpg',
  '/photos/koh-tao.jpg',
  '/photos/koh-lanta.jpg',
  '/photos/koh-lipe.jpg',
  '/photos/koh-phangan.jpg',
  '/photos/koh-samui.jpg',
  '/photos/phuket.jpg',
  '/photos/krabi.jpg',
  '/photos/khao-sok.jpg',
  '/photos/khao-lak.jpg',
  '/photos/bang-niang.jpg',
  '/photos/khuk-khak.jpg',
  '/photos/nang-thong.jpg',
  '/photos/khao-lak-andaman.jpg',
  '/photos/bang-niang-estuary.jpg',
  '/photos/khao-lak-resort.jpg',
  '/photos/ferry-gulf.jpg',
  '/photos/longtail-andaman.jpg',
  '/photos/ang-thong.jpg',
  '/photos/resort-rayavadee.jpg',
  '/photos/resort-phulay-bay.jpg',
  '/photos/resort-six-senses-yao-noi.jpg',
  '/photos/resort-six-senses-samui.jpg',
  '/photos/kamala-and-surin.jpg',
  '/photos/rawai-and-nai-harn.jpg',
  '/photos/kata-and-karon.jpg',
  '/photos/lamai.jpg',
  '/photos/chaweng.jpg',
];

const NORTH_POOL = [
  '/photos/doi-suthep.jpg',
  '/photos/chiang-mai.jpg',
  '/photos/chiang-mai-old-city.jpg',
  '/photos/nimman.jpg',
  '/photos/chiang-rai.jpg',
  '/photos/northern.jpg',
  '/photos/pai.jpg',
  '/photos/night-market-cm.jpg',
];

const PHOTO_POOL = Object.keys(credits).map((key) => `/photos/${key}.jpg`);

const DAY_PHOTO_FIX: Record<string, Record<number, string>> = {
  '/itineraries/10-days-bangkok-khao-sok-krabi': {
    5: '/photos/cheow-lan.jpg',
    7: '/photos/railay.jpg',
    9: '/photos/resort-phulay-bay.jpg',
    10: '/photos/resort-rayavadee.jpg',
  },
  '/itineraries/10-days-classic-thailand': {
    9: '/photos/phi-phi.jpg',
  },
  '/itineraries/10-days-gulf-islands-samui-phangan-tao': {
    5: '/photos/resort-six-senses-samui.jpg',
    6: '/photos/ferry-gulf.jpg',
    8: '/photos/koh-tao.jpg',
    9: '/photos/ang-thong.jpg',
  },
  '/itineraries/2-weeks-andaman-island-hopping': {
    4: '/photos/railay.jpg',
    5: '/photos/phi-phi.jpg',
    6: '/photos/longtail-andaman.jpg',
    8: '/photos/rawai-and-nai-harn.jpg',
    9: '/photos/kamala-and-surin.jpg',
    11: '/photos/resort-rayavadee.jpg',
    12: '/photos/koh-lipe.jpg',
    13: '/photos/ferry-gulf.jpg',
    14: '/photos/get-there.jpg',
  },
  '/itineraries/2-weeks-thailand-honeymoon': {
    7: '/photos/doi-suthep.jpg',
    10: '/photos/resort-rayavadee.jpg',
    12: '/photos/resort-six-senses-yao-noi.jpg',
    13: '/photos/plan.jpg',
    14: '/photos/ferry-gulf.jpg',
  },
  '/itineraries/2-weeks-thailand-with-kids': {
    7: '/photos/doi-suthep.jpg',
    12: '/photos/resort-rayavadee.jpg',
    13: '/photos/kata-and-karon.jpg',
  },
  '/itineraries/3-weeks-grand-thailand': {
    9: '/photos/doi-suthep.jpg',
    10: '/photos/chiang-rai.jpg',
    12: '/photos/cheow-lan.jpg',
    14: '/photos/railay.jpg',
    19: '/photos/resort-rayavadee.jpg',
  },
  '/itineraries/5-days-chiang-mai-and-chiang-rai': {
    5: '/photos/doi-suthep.jpg',
  },
  '/itineraries/7-days-koh-samui-and-koh-phangan': {
    3: '/photos/ang-thong.jpg',
    6: '/photos/ferry-gulf.jpg',
    7: '/photos/koh-phangan.jpg',
  },
  '/itineraries/7-days-northern-thailand-loop': {
    5: '/photos/night-market-cm.jpg',
    7: '/photos/doi-suthep.jpg',
  },
  '/itineraries/7-days-phuket-krabi-phi-phi': {
    3: '/photos/resort-six-senses-yao-noi.jpg',
    5: '/photos/phi-phi.jpg',
    6: '/photos/railay.jpg',
    7: '/photos/resort-phulay-bay.jpg',
  },
  '/itineraries/south-islands-10-days': {
    5: '/photos/resort-rayavadee.jpg',
    6: '/photos/phi-phi.jpg',
    9: '/photos/ferry-gulf.jpg',
  },
};

export const INTEREST_PORTRAITS: Record<string, { title: string; href: string; photo: string }[]> = {
  '/interests': [
    { title: 'Beaches and island hopping', href: '/interests/beaches-and-island-hopping', photo: '/photos/phuket.jpg' },
    { title: 'Temples and history', href: '/interests/temples-and-history', photo: '/photos/grand-palace.jpg' },
    { title: 'Nightlife', href: '/interests/nightlife', photo: '/photos/nightlife.jpg' },
    { title: 'Resort living', href: '/interests/resort-living', photo: '/photos/resort.jpg' },
    { title: 'Thai massage and spas', href: '/interests/thai-massage-and-spas', photo: '/photos/wat-pho.jpg' },
    { title: 'Markets and shopping', href: '/interests/markets-and-shopping', photo: '/photos/chatuchak.jpg' },
    { title: 'Diving and snorkeling', href: '/interests/diving-and-snorkeling', photo: '/photos/koh-tao.jpg' },
    { title: 'Honeymoon and couples', href: '/interests/honeymoon-and-couples', photo: '/photos/resort-rayavadee.jpg' },
    { title: 'Family travel', href: '/interests/family-travel-with-kids', photo: '/photos/kata-and-karon.jpg' },
    { title: 'Solo and first-time', href: '/interests/solo-and-first-time-travel', photo: '/photos/bts.jpg' },
    { title: 'Muay Thai and camps', href: '/interests/muay-thai-and-fitness-camps', photo: '/photos/patong-night.jpg' },
    { title: 'Songkran and Loy Krathong', href: '/interests/festivals-songkran-and-loy-krathong', photo: '/photos/chiang-mai.jpg' },
  ],
  '/interests/nightlife': [
    { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    { title: 'Sukhumvit Soi 11', href: '/interests/nightlife/sukhumvit-soi-11', photo: '/photos/sukhumvit.jpg' },
    { title: 'Thonglor and Ekkamai', href: '/interests/nightlife/thonglor-ekkamai', photo: '/photos/silom-night.jpg' },
    { title: 'Charoenkrung and Soi Nana', href: '/interests/nightlife/charoenkrung-soi-nana', photo: '/photos/riverside.jpg' },
    { title: 'Silom and Sathorn', href: '/interests/nightlife/silom-sathorn', photo: '/photos/siam.jpg' },
    { title: 'Ari and Pradipat', href: '/interests/nightlife/ari-pradipat', photo: '/photos/ari.jpg' },
    { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
    { title: 'Phuket beach clubs', href: '/interests/nightlife/phuket-beach-clubs', photo: '/photos/patong-night.jpg' },
    { title: 'Kamala and Bang Tao', href: '/interests/nightlife/phuket-kamala-bangtao', photo: '/photos/kamala-and-surin.jpg' },
    { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
    { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
    { title: 'Samui beach clubs', href: '/interests/nightlife/koh-samui-beach-clubs', photo: '/photos/chaweng-night.jpg' },
    { title: 'Bophut and Lamai', href: '/interests/nightlife/samui-bophut-lamai', photo: '/photos/lamai.jpg' },
    { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
    { title: 'Nimmanhaemin', href: '/chiang-mai/nimmanhaemin', photo: '/photos/nimman.jpg' },
  ],
  '/interests/beaches-and-island-hopping': [
    { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
    { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
    { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
    { title: 'Phi Phi and Maya Bay', href: '/attractions/phi-phi-islands-and-maya-bay', photo: '/photos/phi-phi.jpg' },
    { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
    { title: 'Koh Tao', href: '/koh-tao', photo: '/photos/koh-tao.jpg' },
    { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
    { title: 'Koh Chang and Koh Kood', href: '/koh-chang-and-koh-kood', photo: '/photos/koh-chang.jpg' },
    { title: 'Khao Lak', href: '/khao-lak', photo: '/photos/khao-lak.jpg' },
    { title: 'Koh Lipe', href: '/koh-lipe', photo: '/photos/koh-lipe.jpg' },
  ],
  '/interests/diving-and-snorkeling': [
    { title: 'Koh Tao', href: '/koh-tao', photo: '/photos/koh-tao.jpg' },
    { title: 'Similan and Surin', href: '/khao-lak/similan-and-surin-islands', photo: '/photos/khao-lak.jpg' },
    { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
    { title: 'Koh Lipe', href: '/koh-lipe', photo: '/photos/koh-lipe.jpg' },
    { title: 'Phi Phi and Maya Bay', href: '/attractions/phi-phi-islands-and-maya-bay', photo: '/photos/phi-phi.jpg' },
    { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
    { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
    { title: 'Koh Chang and Koh Kood', href: '/koh-chang-and-koh-kood', photo: '/photos/koh-chang.jpg' },
  ],
  '/interests/family-travel-with-kids': [
    { title: 'Kata and Karon', href: '/phuket/kata-and-karon', photo: '/photos/kata-and-karon.jpg' },
    { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
    { title: 'Siam and Silom', href: '/bangkok/siam-silom', photo: '/photos/siam.jpg' },
    { title: 'Elephant sanctuaries', href: '/attractions/chiang-mai-ethical-elephant-sanctuaries', photo: '/photos/chiang-mai.jpg' },
    { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
    { title: 'Hua Hin', href: '/hua-hin', photo: '/photos/hua-hin.jpg' },
    { title: '2 weeks with kids', href: '/itineraries/2-weeks-thailand-with-kids', photo: '/photos/kata-and-karon.jpg' },
  ],
  '/interests/festivals-songkran-and-loy-krathong': [
    { title: 'Songkran and holidays', href: '/plan/songkran-and-public-holidays', photo: '/photos/plan.jpg' },
    { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
    { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    { title: 'Sukhothai', href: '/sukhothai', photo: '/photos/sukhothai.jpg' },
    { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
    { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
  ],
  '/interests/honeymoon-and-couples': [
    { title: '2 weeks honeymoon', href: '/itineraries/2-weeks-thailand-honeymoon', photo: '/photos/resort.jpg' },
    { title: 'Resort living', href: '/interests/resort-living', photo: '/photos/resort-amanpuri.jpg' },
    { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
    { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
    { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
    { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/khao-sok.jpg' },
    { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
    { title: 'Riverside Charoenkrung', href: '/bangkok/riverside-charoenkrung', photo: '/photos/riverside.jpg' },
  ],
  '/interests/markets-and-shopping': [
    { title: 'Chatuchak', href: '/attractions/chatuchak-weekend-market', photo: '/photos/chatuchak.jpg' },
    { title: 'Siam and Silom', href: '/bangkok/siam-silom', photo: '/photos/siam.jpg' },
    { title: 'Chinatown Yaowarat', href: '/bangkok/chinatown-yaowarat', photo: '/photos/yaowarat.jpg' },
    { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg' },
    { title: 'Or Tor Kor', href: '/thai-food/or-tor-kor-and-bangkok-fresh-markets', photo: '/photos/chinatown-day.jpg' },
    { title: 'Floating markets', href: '/attractions/damnoen-saduak-and-amphawa-floating-markets', photo: '/photos/riverside.jpg' },
    { title: 'Chiang Mai Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
    { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
  ],
  '/interests/muay-thai-and-fitness-camps': [
    { title: 'Rajadamnern and Lumpinee', href: '/attractions/muay-thai-stadiums-rajadamnern-and-lumpinee', photo: '/photos/nightlife.jpg' },
    { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
    { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
    { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
    { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
  ],
  '/interests/solo-and-first-time-travel': [
    { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
    { title: 'Classic 10 days', href: '/itineraries/10-days-classic-thailand', photo: '/photos/itineraries.jpg' },
    { title: 'Grab and BTS', href: '/plan/grab-and-bts', photo: '/photos/bts.jpg' },
    { title: 'eSIM and SIM cards', href: '/plan/esim-and-sim-cards', photo: '/photos/plan.jpg' },
    { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
    { title: 'Pai', href: '/pai', photo: '/photos/pai.jpg' },
    { title: 'Koh Tao', href: '/koh-tao', photo: '/photos/koh-tao.jpg' },
  ],
  '/interests/temples-and-history': [
    { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    { title: 'Grand Palace', href: '/attractions/grand-palace-and-wat-phra-kaew', photo: '/photos/grand-palace.jpg' },
    { title: 'Wat Pho', href: '/attractions/wat-pho', photo: '/photos/wat-pho.jpg' },
    { title: 'Wat Arun', href: '/attractions/wat-arun', photo: '/photos/wat-arun-night.jpg' },
    { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/ayutthaya.jpg' },
    { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
    { title: 'Doi Suthep', href: '/attractions/wat-phra-that-doi-suthep', photo: '/photos/doi-suthep.jpg' },
    { title: 'Sukhothai', href: '/sukhothai', photo: '/photos/sukhothai.jpg' },
    { title: 'Chiang Rai', href: '/chiang-rai', photo: '/photos/chiang-rai.jpg' },
    { title: 'White and Blue Temples', href: '/attractions/white-temple-wat-rong-khun-and-blue-temple', photo: '/photos/northern.jpg' },
  ],
  '/interests/thai-massage-and-spas': [
    { title: 'Wat Pho', href: '/attractions/wat-pho', photo: '/photos/wat-pho.jpg' },
    { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
    { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
    { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
    { title: 'Resort living', href: '/interests/resort-living', photo: '/photos/resort.jpg' },
  ],
};

const NIGHTLIFE_SIBLINGS: Record<string, { title: string; href: string; photo: string }[]> = {
  '/interests/nightlife/charoenkrung-soi-nana': [
    { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    { title: 'Nightlife hub', href: '/interests/nightlife', photo: '/photos/nightlife.jpg' },
    { title: 'Thonglor and Ekkamai', href: '/interests/nightlife/thonglor-ekkamai', photo: '/photos/sukhumvit.jpg' },
    { title: 'Sukhumvit Soi 11', href: '/interests/nightlife/sukhumvit-soi-11', photo: '/photos/silom-night.jpg' },
    { title: 'Silom and Sathorn', href: '/interests/nightlife/silom-sathorn', photo: '/photos/siam.jpg' },
    { title: 'Chinatown', href: '/bangkok/chinatown-yaowarat', photo: '/photos/yaowarat.jpg' },
  ],
  '/interests/nightlife/sukhumvit-soi-11': [
    { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    { title: 'Sukhumvit', href: '/bangkok/sukhumvit', photo: '/photos/sukhumvit.jpg' },
    { title: 'Nightlife hub', href: '/interests/nightlife', photo: '/photos/nightlife.jpg' },
    { title: 'Thonglor and Ekkamai', href: '/interests/nightlife/thonglor-ekkamai', photo: '/photos/silom-night.jpg' },
    { title: 'Charoenkrung and Soi Nana', href: '/interests/nightlife/charoenkrung-soi-nana', photo: '/photos/riverside.jpg' },
    { title: 'Ari and Pradipat', href: '/interests/nightlife/ari-pradipat', photo: '/photos/ari.jpg' },
  ],
  '/interests/nightlife/thonglor-ekkamai': [
    { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    { title: 'Phrom Phong and Thong Lo', href: '/bangkok/phrom-phong-and-thong-lo', photo: '/photos/phrom-phong-and-thong-lo.jpg' },
    { title: 'Nightlife hub', href: '/interests/nightlife', photo: '/photos/nightlife.jpg' },
    { title: 'Sukhumvit Soi 11', href: '/interests/nightlife/sukhumvit-soi-11', photo: '/photos/sukhumvit.jpg' },
    { title: 'Charoenkrung and Soi Nana', href: '/interests/nightlife/charoenkrung-soi-nana', photo: '/photos/riverside.jpg' },
    { title: 'Silom and Sathorn', href: '/interests/nightlife/silom-sathorn', photo: '/photos/siam.jpg' },
  ],
  '/interests/nightlife/phuket-beach-clubs': [
    { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
    { title: 'Nightlife hub', href: '/interests/nightlife', photo: '/photos/nightlife.jpg' },
    { title: 'Kamala and Bang Tao', href: '/interests/nightlife/phuket-kamala-bangtao', photo: '/photos/kamala-and-surin.jpg' },
    { title: 'Kamala and Surin', href: '/phuket/kamala-and-surin', photo: '/photos/kata-and-karon.jpg' },
    { title: 'Patong nights', href: '/phuket', photo: '/photos/patong-night.jpg' },
  ],
  '/interests/nightlife/koh-samui-beach-clubs': [
    { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
    { title: 'Nightlife hub', href: '/interests/nightlife', photo: '/photos/nightlife.jpg' },
    { title: 'Bophut and Lamai', href: '/interests/nightlife/samui-bophut-lamai', photo: '/photos/lamai.jpg' },
    { title: 'Chaweng', href: '/koh-samui/chaweng', photo: '/photos/chaweng.jpg' },
    { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
  ],
};

const RESORT_RANKED: { title: string; href: string; photo: string }[] = [
  { title: '1. Amanpuri', href: '/resort-living/amanpuri', photo: '/photos/resort-amanpuri.jpg' },
  { title: '2. Trisara Phuket', href: '/resort-living/trisara-phuket', photo: '/photos/resort-trisara-phuket.jpg' },
  { title: '1. Four Seasons Samui', href: '/resort-living/four-seasons-koh-samui', photo: '/photos/resort-four-seasons-koh-samui.jpg' },
  { title: '2. Six Senses Samui', href: '/resort-living/six-senses-samui', photo: '/photos/resort-six-senses-samui.jpg' },
  { title: '3. Ritz-Carlton Samui', href: '/resort-living/ritz-carlton-koh-samui', photo: '/photos/resort-ritz-carlton-koh-samui.jpg' },
  { title: '1. Phulay Bay', href: '/resort-living/phulay-bay', photo: '/photos/resort-phulay-bay.jpg' },
  { title: '2. Six Senses Yao Noi', href: '/resort-living/six-senses-yao-noi', photo: '/photos/resort-six-senses-yao-noi.jpg' },
  { title: '3. Rayavadee', href: '/resort-living/rayavadee', photo: '/photos/resort-rayavadee.jpg' },
  { title: '1. Capella Bangkok', href: '/resort-living/capella-bangkok', photo: '/photos/resort-capella-bangkok.jpg' },
  { title: '2. The Siam', href: '/resort-living/the-siam', photo: '/photos/resort-the-siam.jpg' },
  { title: '3. Mandarin Oriental', href: '/resort-living/mandarin-oriental-bangkok', photo: '/photos/resort-mandarin-oriental-bangkok.jpg' },
  { title: '1. Four Seasons Chiang Mai', href: '/resort-living/four-seasons-chiang-mai', photo: '/photos/resort-four-seasons-chiang-mai.jpg' },
  { title: '2. 137 Pillars House', href: '/resort-living/137-pillars-house', photo: '/photos/resort-137-pillars.jpg' },
  { title: '3. Anantara Chiang Mai', href: '/resort-living/anantara-chiang-mai', photo: '/photos/resort-anantara-chiang-mai.jpg' },
  { title: '1. Soneva Kiri', href: '/resort-living/soneva-kiri', photo: '/photos/resort-soneva-kiri.jpg' },
];

const RESORT_ZONE: Record<string, { title: string; cards: EditorialCard[] }> = {
  '/resort-living/amanpuri': {
    title: 'Beach and zone versus other Phuket coasts',
    cards: [
      {
        kicker: 'Your Cove',
        title: 'Pansea and Surin headlands',
        lead: 'A gated west-coast peninsula with calm turquoise water from November to April and almost no road noise at the sand.',
        bullets: [
          '**[Amanpuri](/resort-living/amanpuri)** locks a private white-sand cove at 45,000 to 120,000+ THB a night, with a 45 to 75 minute HKT car at 1,500 to 2,500 THB.',
          'This coast beats busy central beaches because the villa gate is the itinerary, not a Patong dinner hop.',
          'Kamala restaurants and west-coast daybeds stay a short car away when you want a plate off property.',
        ],
      },
      {
        kicker: 'Northwest Rival',
        title: 'Naithon and Layan hills',
        lead: 'Forested northwest cliffs 20 to 25 minutes south of Phuket Airport, where every key is a private pool villa.',
        bullets: [
          '**[Trisara Phuket](/resort-living/trisara-phuket)** is the all-pool-villa rival at 35,000 to 95,000+ THB, with a private Andaman cove and PRU dining.',
          'The HKT hop is shorter than Pansea, which matters if you land late and want dinner on property.',
          'Bang Tao beach clubs sit a short west-coast car away without touching Patong.',
        ],
      },
      {
        kicker: 'Livelier Base',
        title: 'Kamala ridge, Mai Khao, and Patong hills',
        lead: 'Hillside value stays and long airport beaches trade cove isolation for easier dining or a shorter flight-day transfer.',
        bullets: [
          'Kamala hills give easier west-coast plates and Cafe del Mar style days without sleeping in Patong.',
          'Mai Khao keeps 11 km of quiet north sand beside the airport, far from southern piers.',
          'Patong and Kata ridge nights are a different week from a gated Pansea villa.',
        ],
      },
    ],
  },
  '/resort-living/trisara-phuket': {
    title: 'Beach and zone versus other Phuket coasts',
    cards: [
      {
        kicker: 'Your Headland',
        title: 'Naithon and Layan headland',
        lead: 'Forested northwest privacy and sunset Andaman views, 20 to 25 minutes south of HKT.',
        bullets: [
          '**[Trisara Phuket](/resort-living/trisara-phuket)** locks every key as a private-pool villa at 35,000 to 95,000+ THB, with PRU as the on-property dining room.',
          'The airport hop is the shortest of the ultra-prime west-coast coves, useful on a late BKK connection.',
          'Bang Tao and Laguna beach clubs sit a short car south when you want a booked daybed.',
        ],
      },
      {
        kicker: 'Pansea Step-Up',
        title: 'Pansea and Surin coves',
        lead: "Tighter white-sand headlands and Phuket's highest villa rates, farther from the airport.",
        bullets: [
          '**[Amanpuri](/resort-living/amanpuri)** is the step up if you want a gated private cove and will pay 45,000 to 120,000+ THB.',
          'The HKT car stretches to 45 to 75 minutes and 1,500 to 2,500 THB, so land with a booked driver.',
          'Surin and Kamala dinner rooms stay closer to this rival than to Naithon.',
        ],
      },
      {
        kicker: 'Dinner Bays',
        title: 'Kamala hills and Patong ridge',
        lead: 'Walkable dinner bays and faster nightlife when you do not need a private-cove villa.',
        bullets: [
          'Kamala hills give easier Cafe del Mar style days and west-coast plates without a Patong base.',
          'Mai Khao is the long airport beach if you want length, not a private-cove villa.',
          'Patong ridge after 22:00 is the wrong default if you booked this quiet northwest cove.',
        ],
      },
    ],
  },
  '/resort-living/avista-hideaway-phuket': {
    title: 'Beach and zone versus other Phuket coasts',
    cards: [
      {
        kicker: 'This Hill',
        title: 'Patong and Kata ridge',
        lead: 'A hillside MGallery between Patong and Freedom Beach, with faster dining and less cove privacy.',
        bullets: [
          '**[Avista Hideaway Phuket](/resort-living/avista-hideaway-phuket)** sits at 6,000 to 20,000+ THB, a value west-coast lock when flagship coves are closed.',
          'Patong plates and Kata family beaches are 20 to 30 minutes, so you still need a car after dark.',
          'Kamala and Surin remain the useful dinner and daybed belt from this hill.',
        ],
      },
      {
        kicker: 'Cove Step-Up',
        title: 'Pansea and Surin privacy',
        lead: 'Gated headlands if the budget jumps and you want the sand to belong to the hotel.',
        bullets: [
          '**[Amanpuri](/resort-living/amanpuri)** is the privacy jump at 45,000 to 120,000+ THB on a private white-sand cove.',
          'The HKT car is longer than the Avista hop, so book the driver with the villa.',
          'This rival beats the ridge when road noise is the reason you left Patong.',
        ],
      },
      {
        kicker: 'Villa Alternative',
        title: 'Naithon villa hills',
        lead: 'All-pool-villa northwest cliffs far from Patong bass, closer to the airport.',
        bullets: [
          '**[Trisara Phuket](/resort-living/trisara-phuket)** is the private-pool-villa alternative at 35,000 to 95,000+ THB.',
          'Naithon sits 20 to 25 minutes from HKT, which helps a late arrival more than a Patong-ridge hotel.',
          'Mai Khao north sand is the quiet airport beach if you want length, not a hillside view.',
        ],
      },
    ],
  },
  '/resort-living/four-seasons-koh-samui': {
    title: 'Beach and zone versus other Samui coasts',
    cards: [
      {
        kicker: 'Your Cape',
        title: 'Laem Yai sunset amphitheater',
        lead: 'Steep coconut-palmed hillsides facing the Gulf sunset, 35 to 45 minutes from Samui Airport.',
        bullets: [
          '**[Four Seasons Koh Samui](/resort-living/four-seasons-koh-samui)** locks butler-buggy hillside villas and a private cove at 36,000 to 90,000+ THB.',
          'Do not ride a scooter down this hill after dark. The grade is steep and there is no shoulder. Book a car before the first pour off property.',
          'Lipa Noi daybeds sit on the same west-facing coast when you want a booked afternoon off property.',
        ],
      },
      {
        kicker: 'Village-Walk Rivals',
        title: 'Choeng Mon and Bophut headland',
        lead: 'Granite promontories 15 minutes from USM and 10 minutes from Fisherman Village.',
        bullets: [
          '**[Six Senses Samui](/resort-living/six-senses-samui)** is the 20-acre timber villa point at 22,000 to 55,000+ THB.',
          '**[The Ritz-Carlton, Koh Samui](/resort-living/ritz-carlton-koh-samui)** holds a 58-acre former coconut plantation bay at 16,000 to 42,000+ THB.',
          'This rival wins if a village dinner walk matters more than the sunset amphitheater.',
        ],
      },
      {
        kicker: 'East-Coast Strip',
        title: 'Chaweng walkable east coast',
        lead: 'Powder-sand swimming and the dinner strip, a different week from a northwest villa hill.',
        bullets: [
          'Sleep on Chaweng when you want walkable dining and a short USM hop, not butler-buggy silence.',
          'January to September is the easier Gulf sea on both coasts; October swell hits the east first.',
          'A late Grab from Chaweng to Laem Yai often runs 300 to 700 THB, so do not treat the strip as a nightly outing from this hill.',
        ],
      },
    ],
  },
  '/resort-living/six-senses-samui': {
    title: 'Beach and zone versus other Samui coasts',
    cards: [
      {
        kicker: 'Your Point',
        title: 'Choeng Mon northern headland',
        lead: 'A rocky 20-acre peninsula near Fisherman Village, 15 minutes from USM.',
        bullets: [
          '**[Six Senses Samui](/resort-living/six-senses-samui)** locks timber villas on the point at 22,000 to 55,000+ THB.',
          'Bophut village is the dinner walk if you leave the hill. A 2026 Grab down often runs 200 to 400 THB.',
          'Choeng Mon swimming coves sit below the villas, so you do not need Chaweng for a beach hour.',
        ],
      },
      {
        kicker: 'Sunset Step-Up',
        title: 'Laem Yai northwest cape',
        lead: 'The sunset amphitheater if privacy beats a village dinner walk.',
        bullets: [
          '**[Four Seasons Koh Samui](/resort-living/four-seasons-koh-samui)** is the butler-buggy rival at 36,000 to 90,000+ THB, 35 to 45 minutes from USM.',
          'Lipa Noi daybeds pair with that cape more cleanly than with Choeng Mon.',
          'Book this rival when the Gulf sunset, not Fisherman Village, is the week.',
        ],
      },
      {
        kicker: 'Bay or Strip',
        title: 'Chaweng strip versus Plai Laem bay',
        lead: 'Walkable nightlife sand, or a wider plantation bay 15 minutes from the airport.',
        bullets: [
          'Chaweng is swim-and-nightlife, a different week from this timber headland.',
          '**[The Ritz-Carlton, Koh Samui](/resort-living/ritz-carlton-koh-samui)** is the closer bay estate at 16,000 to 42,000+ THB if you want lawn and a gentler arrival.',
          'January to September is the swimming window on all three coasts.',
        ],
      },
    ],
  },
  '/resort-living/ritz-carlton-koh-samui': {
    title: 'Beach and zone versus other Samui coasts',
    cards: [
      {
        kicker: 'Your Bay',
        title: 'Plai Laem and Choeng Mon bay',
        lead: 'A private 58-acre former coconut plantation, 15 minutes from USM.',
        bullets: [
          '**[The Ritz-Carlton, Koh Samui](/resort-living/ritz-carlton-koh-samui)** holds the bay estate at 16,000 to 42,000+ THB.',
          'Bophut dinner is a short car, not a long hill road, which is why this lock works for mixed weeks.',
          'The swimming cove is on property, so Chaweng is optional rather than daily.',
        ],
      },
      {
        kicker: 'Timber-Point Rival',
        title: 'Six Senses timber point',
        lead: 'The closer headland rival if you want a steeper villa map and a shorter village walk.',
        bullets: [
          '**[Six Senses Samui](/resort-living/six-senses-samui)** sits on the same northern cape at 22,000 to 55,000+ THB.',
          'Fisherman Village is about 10 minutes from either door if you want wooden-shophouse plates.',
          'Pick the timber point when the rocky peninsula, not the plantation lawn, is the look.',
        ],
      },
      {
        kicker: 'Sunset Alternative',
        title: 'Laem Yai sunset hill',
        lead: 'Northwest privacy if you will Grab for plates and want the amphitheater view.',
        bullets: [
          '**[Four Seasons Koh Samui](/resort-living/four-seasons-koh-samui)** is the sunset lock at 36,000 to 90,000+ THB, 35 to 45 minutes from USM.',
          'Chaweng remains the walkable powder-sand strip if you want nightlife more than a bay estate.',
          'A late hill car home from Chaweng to the northwest often runs 300 to 700 THB.',
        ],
      },
    ],
  },
  '/resort-living/phulay-bay': {
    title: 'Beach and zone versus other Krabi and Phang Nga coasts',
    cards: [
      {
        kicker: 'Your Mainland',
        title: 'Tubkaek mainland sunset',
        lead: 'Quiet mainland sand facing the thirteen limestone islands of Koh Hong, with a direct road from Krabi Airport.',
        bullets: [
          '**[Phulay Bay, a Ritz-Carlton Reserve](/resort-living/phulay-bay)** locks oversized pavilions at 28,000 to 75,000+ THB with zero boat dependency in changeable weather.',
          'A KBV car is the arrival story, which matters when Andaman swell cancels longtails.',
          'Hong Island boats remain a booked morning, not a required transfer to reach the bed.',
        ],
      },
      {
        kicker: 'Island Rival',
        title: 'Koh Yao Noi in Phang Nga Bay',
        lead: 'A sleepy island halfway between Phuket and Krabi, with sunrise views over karst pinnacles.',
        bullets: [
          '**[Six Senses Yao Noi](/resort-living/six-senses-yao-noi)** is the bay-villa rival at 26,000 to 70,000+ THB, reached by a 45-minute speedboat from Phuket or Krabi.',
          'Book this rival when the pinnacles, not a mainland road, are the week.',
          'Ao Nang dinners become a project from the island, so plan most plates on property.',
        ],
      },
      {
        kicker: 'Boat-Only Pocket',
        title: 'Railay and Phra Nang peninsula',
        lead: 'Boat-only limestone beaches cut off from mainland roads, 15 minutes from Ao Nang by longtail.',
        bullets: [
          '**[Rayavadee](/resort-living/rayavadee)** sits in a coconut grove at 22,000 to 60,000+ THB, steps from Phra Nang cave beach.',
          'Accept a stuck storm day if you pick this pocket. There is no road exit.',
          'Ao Nang is the mainland fallback if you want the same cliffs with a car.',
        ],
      },
    ],
  },
  '/resort-living/six-senses-yao-noi': {
    title: 'Beach and zone versus other Krabi and Phang Nga coasts',
    cards: [
      {
        kicker: 'Your Island',
        title: 'Koh Yao Noi island lanes',
        lead: 'Quiet island roads and elevated pool villas halfway between Phuket and Krabi.',
        bullets: [
          '**[Six Senses Yao Noi](/resort-living/six-senses-yao-noi)** locks Phang Nga hill villas at 26,000 to 70,000+ THB after a 45-minute speedboat.',
          'Hotel boats into the bay are the on-property day. Phuket nightlife is the wrong pairing.',
          'There is no road from HKT or KBV, so land with the boat already booked.',
        ],
      },
      {
        kicker: 'Road-Access Rival',
        title: 'Tubkaek mainland road',
        lead: 'Sunset sand facing the Hong Islands if you refuse a pier-and-boat arrival.',
        bullets: [
          '**[Phulay Bay, a Ritz-Carlton Reserve](/resort-living/phulay-bay)** is the mainland rival at 28,000 to 75,000+ THB with a direct KBV car.',
          'This rival wins when weather is changeable and you want a storm-proof exit.',
          'Hong Island remains a booked morning rather than the view from the villa deck.',
        ],
      },
      {
        kicker: 'Railay Grove',
        title: 'Railay grove, no island hop',
        lead: 'Cliffs and three beaches with no island transfer, reached by a 15-minute boat from Ao Nang.',
        bullets: [
          '**[Rayavadee](/resort-living/rayavadee)** is the grove alternative at 22,000 to 60,000+ THB if you want limestone walls without a Yao Noi crossing.',
          'Phra Nang cave beach sits a short walk from the pavilions.',
          'A stuck storm day is still possible, but the hop from Ao Nang is shorter than the Phang Nga speedboat.',
        ],
      },
    ],
  },
  '/resort-living/rayavadee': {
    title: 'Beach and zone versus other Krabi and Phang Nga coasts',
    cards: [
      {
        kicker: 'Your Pocket',
        title: 'Phra Nang and Railay pocket',
        lead: 'Boat-only limestone beaches with zero road traffic and a 15-minute longtail from Ao Nang.',
        bullets: [
          '**[Rayavadee](/resort-living/rayavadee)** locks two-storey coconut-grove pavilions at 22,000 to 60,000+ THB, steps from Phra Nang cave beach.',
          'There is no car at the door. Bags move by golf cart and boat.',
          'Climbing walls and three beaches are the week, not an Ao Nang night market loop.',
        ],
      },
      {
        kicker: 'Storm-Proof Rival',
        title: 'Tubkaek storm-proof road',
        lead: 'Mainland sunset sand if you want a KBV car and an exit that does not depend on a longtail.',
        bullets: [
          '**[Phulay Bay, a Ritz-Carlton Reserve](/resort-living/phulay-bay)** is the road-access rival at 28,000 to 75,000+ THB.',
          'Hong Island views sit across the water, and the car stays booked for a weather day.',
          'Pick this rival when you refuse a stuck-storm story on Railay.',
        ],
      },
      {
        kicker: 'Bay-Villa Alternative',
        title: 'Koh Yao Noi bay villas',
        lead: 'Phang Nga pinnacles as the daily view, with a 45-minute speedboat from Phuket or Krabi.',
        bullets: [
          '**[Six Senses Yao Noi](/resort-living/six-senses-yao-noi)** is the island alternative at 26,000 to 70,000+ THB.',
          'The bay is the week. Ao Nang dinners become a project.',
          'Book this alternative when sunrise karst, not a cave beach, is the reason you came.',
        ],
      },
    ],
  },
  '/resort-living/capella-bangkok': {
    title: 'River and district versus other Bangkok stays',
    cards: [
      {
        kicker: 'Your Promenade',
        title: 'Charoenkrung river promenade',
        lead: "Low-rise waterfront courtyards, private shuttle boats to the Grand Palace piers, and Asia's top cocktail rooms next door.",
        bullets: [
          '**[Capella Bangkok](/resort-living/capella-bangkok)** locks river suites at 32,000 to 85,000+ THB with a hotel boat and a sunset terrace.',
          '**[Mandarin Oriental, Bangkok](/resort-living/mandarin-oriental-bangkok)** sits on the same bank at 25,000 to 65,000+ THB.',
          'Charoenkrung cocktail rooms are a short Grab. The palace is a morning boat, not a 10:00 taxi loop.',
        ],
      },
      {
        kicker: 'Upriver Rival',
        title: 'Dusit upriver compound',
        lead: 'A leafy bend of the Chao Phraya north of the Old City, far from Sukhumvit traffic.',
        bullets: [
          '**[The Siam](/resort-living/the-siam)** is the teak-barge rival at 28,000 to 75,000+ THB, with 38 suites and a private river compound.',
          'The hotel boat is the point. BTS is farther than on Charoenkrung.',
          'Pick this rival when you want antique teak houses more than ICONSIAM at the door.',
        ],
      },
      {
        kicker: 'Skytrain Alternative',
        title: 'Phloen Chit skytrain spine',
        lead: 'Direct BTS bridges for travellers who want central dining, embassies, and a short Airport Rail Link hop.',
        bullets: [
          'Skytrain hotels here trade a river view for BTS Ploenchit at the door.',
          'Ratchathewi is the cheaper ARL-and-BTS pocket one hop from Siam if Phloen Chit rates run high.',
          'These rooms skip the river road when skytrain, not a barge, is the Bangkok plan.',
        ],
      },
    ],
  },
  '/resort-living/the-siam': {
    title: 'River and district versus other Bangkok stays',
    cards: [
      {
        kicker: 'Your Compound',
        title: 'Dusit royal reach',
        lead: 'A tranquil leafy bend north of Rattanakosin, where the hotel boat replaces a Sukhumvit taxi.',
        bullets: [
          '**[The Siam](/resort-living/the-siam)** locks 38 suites and pool villas at 28,000 to 75,000+ THB around antique teak houses.',
          'The private river barge is the arrival story and the palace transfer.',
          'Night markets and Thonglor rooms are a planned Grab, not a walk.',
        ],
      },
      {
        kicker: 'Downriver Rivals',
        title: 'Charoenkrung cocktail bank',
        lead: 'Newer river courtyards closer to ICONSIAM and the Charoenkrung bar rooms.',
        bullets: [
          '**[Capella Bangkok](/resort-living/capella-bangkok)** sits downriver at 32,000 to 85,000+ THB.',
          'Mandarin Oriental keeps the historic Bang Rak pier if you want Authors Lounge and city noise at the door.',
          'Pick this rival when cocktail rooms and a promenade matter more than a private garden.',
        ],
      },
      {
        kicker: 'Rail Alternative',
        title: 'Siam and Ratchathewi rails',
        lead: 'Airport Rail Link and BTS without a compound, if two river nights are not the plan.',
        bullets: [
          'Skytrain hotels here trade a river view for BTS Ploenchit at the door.',
          'Ratchathewi stays the cheaper BTS-and-ARL pocket if two river nights are not the plan.',
          'These rooms win when ARL plus BTS beats a barge timetable.',
        ],
      },
    ],
  },
  '/resort-living/four-seasons-bangkok': {
    title: 'River and district versus other Bangkok stays',
    cards: [
      {
        kicker: 'Your Courtyard',
        title: 'Charoenkrung courtyard',
        lead: 'An urban river resort with shuttle boats, a spa wing, and ICONSIAM a short hop away.',
        bullets: [
          '**[Four Seasons Bangkok](/resort-living/four-seasons-bangkok)** locks the courtyard at 26,000 to 65,000+ THB.',
          'Hotel boats cover palace piers and the shopping dock, so you can skip a 10:00 taxi loop.',
          'Charoenkrung cocktail rooms sit a short Grab from the gate.',
        ],
      },
      {
        kicker: 'Next-Door Step-Up',
        title: 'Capella next door',
        lead: 'Higher villa rates on the same bank if you want more suite space and a quieter terrace.',
        bullets: [
          '**[Capella Bangkok](/resort-living/capella-bangkok)** is the step up at 32,000 to 85,000+ THB.',
          'The promenade is shared geography. The room product is the difference.',
          'Mandarin Oriental remains the historic pier alternative on Bang Rak.',
        ],
      },
      {
        kicker: 'Garden Alternative',
        title: 'Dusit private garden',
        lead: 'Upriver teak and a hotel barge if you want no promenade traffic.',
        bullets: [
          '**[The Siam](/resort-living/the-siam)** is the garden compound at 28,000 to 75,000+ THB.',
          'Phloen Chit and Ratchathewi skip the river entirely if BTS is the Bangkok week.',
          'Pick Dusit when antique houses beat a new courtyard.',
        ],
      },
    ],
  },
  '/resort-living/mandarin-oriental-bangkok': {
    title: 'River and district versus other Bangkok stays',
    cards: [
      {
        kicker: 'Your Pier',
        title: 'Bang Rak historic pier',
        lead: 'The original river icon, with a private pier, Authors Lounge, and city noise at the door.',
        bullets: [
          '**[Mandarin Oriental, Bangkok](/resort-living/mandarin-oriental-bangkok)** locks the historic rooms at 25,000 to 65,000+ THB.',
          'The pier is the arrival. Saphan Taksin BTS sits a short walk or boat hop away.',
          'This is a city-and-river hybrid, not a silent compound.',
        ],
      },
      {
        kicker: 'New-Build Rivals',
        title: 'Charoenkrung new-build suites',
        lead: 'Newer river courtyards if you want larger rooms and a quieter terrace than Bang Rak.',
        bullets: [
          '**[Capella Bangkok](/resort-living/capella-bangkok)** sits up the same bank at 32,000 to 85,000+ THB.',
          'ICONSIAM and the cocktail rooms are closer to those courtyards than to the old pier.',
          'Pick the new-builds when suite size beats Authors Lounge history.',
        ],
      },
      {
        kicker: 'Skytrain Manor',
        title: 'Phloen Chit vertical manor',
        lead: 'Skytrain living if BTS beats a boat on a short Bangkok stay.',
        bullets: [
          'Skytrain hotels here trade a river view for BTS Ploenchit at the door.',
          'Ratchathewi is the cheaper design-room pocket if Phloen Chit rates run high.',
          'The Siam remains the upriver teak alternative if you want a barge and a garden.',
        ],
      },
    ],
  },
  '/resort-living/rosewood-bangkok': {
    title: 'River and district versus other Bangkok stays',
    cards: [
      {
        kicker: 'Your Manor',
        title: 'Phloen Chit skytrain manor',
        lead: 'Direct BTS, malls, and rooftop cocktails with no river road in the way.',
        bullets: [
          '**[Rosewood Bangkok](/resort-living/rosewood-bangkok)** locks the vertical manor at 14,000 to 32,000+ THB beside BTS Ploenchit.',
          'Embassy row and Central Embassy sit a short walk, which is why this lock works for mixed business weeks.',
          'Airport Rail Link plus BTS beats a Chao Phraya taxi on a short stay.',
        ],
      },
      {
        kicker: 'River Compounds',
        title: 'Chao Phraya compounds',
        lead: 'River boats and low-rise courtyards if the barge, not the skytrain, is the stay.',
        bullets: [
          '**[Capella Bangkok](/resort-living/capella-bangkok)** and **[Mandarin Oriental, Bangkok](/resort-living/mandarin-oriental-bangkok)** sit on the water at 25,000 to 85,000+ THB.',
          'Four Seasons Bangkok shares that bank if you want a courtyard spa wing.',
          'Pick the river when palace boats matter more than a mall bridge.',
        ],
      },
      {
        kicker: 'Garden or Rails',
        title: 'Ratchathewi and Dusit contrast',
        lead: 'A cheaper ARL pocket one stop from Siam, or an upriver garden if you want teak instead of a tower.',
        bullets: [
          'Ratchathewi is the cheaper design-room pocket one stop from Siam, with ARL at the same interchange.',
          'Dusit upriver is the garden alternative if you want teak houses instead of a tower.',
          'This alternative wins when Rosewood rates run high and you still want rails, not a river road.',
        ],
      },
    ],
  },
  '/resort-living/vie-hotel-bangkok': {
    title: 'River and district versus other Bangkok stays',
    cards: [
      {
        kicker: 'Your Tower',
        title: 'Ratchathewi BTS tower',
        lead: 'Airport Rail Link plus one hop, a city value pick rather than a river compound.',
        bullets: [
          '**[VIE Hotel Bangkok](/resort-living/vie-hotel-bangkok)** locks design rooms at 4,000 to 14,000+ THB beside BTS Ratchathewi.',
          'Siam shopping and the ARL are the point. A hotel boat is not.',
          'This is the short-stay rail lock when two river nights are not in the budget.',
        ],
      },
      {
        kicker: 'Manor Step-Up',
        title: 'Phloen Chit vertical manor',
        lead: 'The step up if you want a quieter tower, rooftop cocktails, and embassy-row walks.',
        bullets: [
          '**[Rosewood Bangkok](/resort-living/rosewood-bangkok)** is the manor rival at 14,000 to 32,000+ THB beside BTS Ploenchit.',
          'The skytrain story is the same. The room product is the difference.',
          'Pick Rosewood when you still want rails but need a longer stay feel.',
        ],
      },
      {
        kicker: 'River Nights',
        title: 'Charoenkrung river nights',
        lead: 'Low-rise waterfront courtyards if two river nights are the Bangkok plan.',
        bullets: [
          '**[Capella Bangkok](/resort-living/capella-bangkok)** is the river alternative at 32,000 to 85,000+ THB.',
          'Four Seasons and Mandarin Oriental share that bank if you want a courtyard or the historic pier.',
          'The Siam remains the upriver teak compound if you want a barge and no promenade traffic.',
        ],
      },
    ],
  },
  '/resort-living/four-seasons-chiang-mai': {
    title: 'Valley and district versus other Chiang Mai stays',
    cards: [
      {
        kicker: 'Your Valley',
        title: 'Mae Rim rice-terrace valley',
        lead: 'Working terraced paddies, water buffalo, and misty foothills 30 to 40 minutes north of the moat.',
        bullets: [
          '**[Four Seasons Chiang Mai](/resort-living/four-seasons-chiang-mai)** locks Lanna pavilions and private residences at 30,000 to 80,000+ THB.',
          'November to early February is the clearest valley air. Late February to April haze can sit in every view.',
          'Wat mornings need a booked car. This is not a walk to Wat Phra Singh.',
        ],
      },
      {
        kicker: 'River Rivals',
        title: 'Wat Ket and the Ping River',
        lead: 'Walkable riverside lawns and 19th-century teak 10 minutes east of the Old City wats.',
        bullets: [
          '**[137 Pillars House](/resort-living/137-pillars-house)** is the 1889 homestead at 18,000 to 40,000+ THB, with 30 suites around the original house.',
          '**[Anantara Chiang Mai](/resort-living/anantara-chiang-mai)** holds the contemporary Ping bank at 12,000 to 28,000+ THB.',
          'These rivals win when you want a 07:00 wat without a 40-minute valley car.',
        ],
      },
      {
        kicker: 'Hill Contrast',
        title: 'Hang Dong forest slopes',
        lead: 'Elevated valley infinity pools near Doi Suthep-Pui at a fraction of Mae Rim pavilion rates.',
        bullets: [
          'Hang Dong forest slopes hold hill pools and shorter Nimman taxis than a Mae Rim run, at a fraction of pavilion rates.',
          'Nimman taxis are shorter than a Mae Rim run, so dinner in the west city is easier.',
          'Old City on foot still wins if you want Wat Phra Singh at 07:00 without any hill road.',
        ],
      },
    ],
  },
  '/resort-living/137-pillars-house': {
    title: 'Valley and district versus other Chiang Mai stays',
    cards: [
      {
        kicker: 'Your Homestead',
        title: 'Wat Ket teak homestead',
        lead: 'Walkable river lawns and an 1889 house, 10 minutes east of the Old City wats.',
        bullets: [
          '**[137 Pillars House](/resort-living/137-pillars-house)** locks 30 suites at 18,000 to 40,000+ THB around the original teak homestead.',
          'Dawn walks to the moat are realistic. A scooter through Sunday Ratchadamnoen is not.',
          'Night Bazaar sits a short Grab away on the same river side.',
        ],
      },
      {
        kicker: 'Valley Step-Up',
        title: 'Mae Rim rice terrace',
        lead: 'Valley pavilions if the working paddy, not a walkable teak lawn, is the trip.',
        bullets: [
          '**[Four Seasons Chiang Mai](/resort-living/four-seasons-chiang-mai)** is the 30,000 to 80,000+ THB rival, 30 to 40 minutes north.',
          'November to early February is the kindest air for that view.',
          'Book the valley when you accept a car for every wat morning.',
        ],
      },
      {
        kicker: 'Hill or Town',
        title: 'Hang Dong hill pool',
        lead: 'A western foothill view pool and a shorter Nimman taxi than Mae Rim.',
        bullets: [
          'Hang Dong is the western foothill view-pool option if you want a shorter Nimman taxi than Mae Rim, without pavilion rates.',
          '**[Anantara Chiang Mai](/resort-living/anantara-chiang-mai)** stays on the Ping if you want a contemporary river bank instead of teak or a hill.',
          'Old City guesthouses still win if you want the 07:00 gate without a taxi.',
        ],
      },
    ],
  },
  '/resort-living/anantara-chiang-mai': {
    title: 'Valley and district versus other Chiang Mai stays',
    cards: [
      {
        kicker: 'Your River Bank',
        title: 'Ping River contemporary bank',
        lead: 'Night Bazaar side lawns, 10 minutes to the moat, with a modern river sanctuary rather than an 1889 house.',
        bullets: [
          '**[Anantara Chiang Mai](/resort-living/anantara-chiang-mai)** locks the Ping bank at 12,000 to 28,000+ THB.',
          'Wat mornings are a short Grab. Sunday Walking Street is a planned evening, not a surprise.',
          'This is the easier river lock if teak homestead rates are closed.',
        ],
      },
      {
        kicker: 'Teak Rival',
        title: 'Wat Ket teak homestead',
        lead: 'The 1889 house look if antique timber, not a contemporary river wing, is the stay.',
        bullets: [
          '**[137 Pillars House](/resort-living/137-pillars-house)** is the homestead rival at 18,000 to 40,000+ THB.',
          'Both sit about 10 minutes from the moat. The architecture is the difference.',
          'Pick teak when the lawn and the original house are the photograph.',
        ],
      },
      {
        kicker: 'Valley or Hill',
        title: 'Mae Rim versus Hang Dong',
        lead: 'A rice-terrace pavilion week, or a western hill pool at an accessible rate.',
        bullets: [
          '**[Four Seasons Chiang Mai](/resort-living/four-seasons-chiang-mai)** is the 30,000 to 80,000+ THB valley lock if you accept a 30 to 45 minute car each way.',
          'Hang Dong hill pools give a western valley view without pavilion rates, 25 to 35 minutes from town.',
          'Haze from late February to April can sit in both valley and hill views.',
        ],
      },
    ],
  },
  '/resort-living/veranda-high-chiang-mai': {
    title: 'Valley and district versus other Chiang Mai stays',
    cards: [
      {
        kicker: 'Your Hill',
        title: 'Hang Dong western foothills',
        lead: 'Forested slopes near Doi Suthep-Pui, with an elevated infinity pool at an accessible luxury rate.',
        bullets: [
          '**[Veranda High Chiang Mai](/resort-living/veranda-high-chiang-mai)** locks the MGallery hillside retreat at 5,000 to 18,000+ THB, 25 to 35 minutes from town.',
          'Nimman dinner is a shorter taxi than a Mae Rim run.',
          'This is a view-pool week, not a walk to Wat Phra Singh at 07:00.',
        ],
      },
      {
        kicker: 'Pavilion Step-Up',
        title: 'Mae Rim pavilion valley',
        lead: 'Working rice terraces if the paddy budget is open and you want Lanna residences.',
        bullets: [
          '**[Four Seasons Chiang Mai](/resort-living/four-seasons-chiang-mai)** is the 30,000 to 80,000+ THB rival, 30 to 40 minutes north of the moat.',
          'November to early February is the kindest air for that terrace view.',
          'Book Mae Rim when the buffalo field, not a hillside pool, is the photograph.',
        ],
      },
      {
        kicker: 'River Walks',
        title: 'Ping River and Old City on foot',
        lead: 'Walkable teak or a contemporary river bank if you want wats without a hill road.',
        bullets: [
          '**[137 Pillars House](/resort-living/137-pillars-house)** and **[Anantara Chiang Mai](/resort-living/anantara-chiang-mai)** sit 10 minutes from the moat at 12,000 to 40,000+ THB.',
          'Old City rooms still win if you want Wat Phra Singh at 07:00 without a taxi.',
          'A 2026 moat Grab to Nimman often runs 80 to 120 THB, cheaper than a Hang Dong dinner run.',
        ],
      },
    ],
  },
  '/resort-living/soneva-kiri': {
    title: 'Coast versus other eastern Gulf islands',
    cards: [
      {
        kicker: 'Your Eco-Cove',
        title: 'Koh Kood northern eco-coves',
        lead: 'Untouched rainforest bays and clear eastern Gulf water near the Cambodian maritime border.',
        bullets: [
          '**[Soneva Kiri](/resort-living/soneva-kiri)** locks vast barefoot pool villas at 55,000 to 180,000+ THB, reached by private Cessna to Koh Mai Si or a one-hour flight to Trat plus a boat.',
          'November to April is the dry swimming window. Do not treat the wet months as a bargain version of the same week.',
          'There is no mass nightlife. The villa and the bay are the itinerary.',
        ],
      },
      {
        kicker: 'Chang Context',
        title: 'Koh Chang east-coast strip',
        lead: 'A busier island with road towns and a different transfer story, not a Soneva substitute.',
        bullets: [
          'Koh Chang is the hopping island with more rooms and more traffic. It is a different product from a Koh Kood eco-cove.',
          'A Trat plus boat day can reach either island, but the stay on arrival is not interchangeable.',
          'Book Chang when you want villages and a scooter map, not a private-plane sanctuary.',
        ],
      },
      {
        kicker: 'Why Not a Hop',
        title: 'Why this is not a Phuket add-on',
        lead: 'A self-contained 3- to 5-night sanctuary rather than a quick island-hopping stop.',
        bullets: [
          'Never bolt Koh Kood onto a short Phuket week. The transfer day eats the first afternoon.',
          'Hua Hin is a mainland rail town. Do not treat it as a Soneva substitute.',
          'Lock the Cessna or the Trat flight with the villa. Walk-up boats in a swell are how that week goes wrong.',
        ],
      },
    ],
  },
};

function card(title: string, href: string, photo: string): Portrait {
  return { title, href, photo };
}

function creditKey(photo: string): string {
  return photo.replace(/^\/photos\//, '').replace(/\.[^.]+$/, '');
}

export function photoCreditFor(photo?: string): string | undefined {
  if (!photo) return undefined;
  const row = (credits as Record<string, { author: string; license: string }>)[creditKey(photo)];
  if (!row) return undefined;
  return `Photo: ${row.author} (${row.license})`;
}

function isBanned(text: string): boolean {
  return BANNED.some((re) => re.test(text));
}

function sentencesOf(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function dedupeList(items: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const item of items) {
    if (isBanned(item)) continue;
    const key = item.replace(/\s+/g, ' ').trim();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

function dedupeAgainst(items: string[], used: Set<string>): string[] {
  const out: string[] = [];
  for (const item of items) {
    if (isBanned(item)) continue;
    const parts = sentencesOf(item);
    const kept = parts.filter((sentence) => {
      const key = sentence.replace(/\s+/g, ' ').trim();
      if (used.has(key)) return false;
      used.add(key);
      return true;
    });
    if (kept.length) out.push(kept.join(' '));
  }
  return out;
}

function splitLead(text: string): { label: string; rest: string; glue: 'colon' | 'period' | 'keep' } {
  const trimmed = String(text || '').trim();
  if (/^\*\*[^*].+?\*\*:/.test(trimmed) || /^\*\*[^*]+:\*\*/.test(trimmed)) {
    return { label: trimmed, rest: '', glue: 'keep' };
  }
  const sentence = trimmed.match(/^(.{6,120}?)(?<!\d)([.:])\s+(.+)$/);
  if (sentence) return { label: sentence[1], rest: sentence[3], glue: sentence[2] === ':' ? 'colon' : 'period' };
  const clause = trimmed.match(/^([^,;]{12,65})[,;]\s+(.+)$/);
  if (clause) return { label: clause[1], rest: clause[2], glue: 'colon' };
  const longFirst = trimmed.match(/^(.+?)(?<!\d)\.\s+(.+)$/);
  if (longFirst) return { label: longFirst[1], rest: longFirst[2], glue: 'period' };
  return { label: trimmed.replace(/\.$/, ''), rest: '', glue: 'keep' };
}

function toBullets(paragraphs: string[]): string[] {
  return paragraphs.map((para) => {
    const { label, rest, glue } = splitLead(para);
    if (glue === 'keep' && !rest) return label.startsWith('**') ? label : `**${label}**`;
    if (glue === 'period') return `**${label}.** ${rest}`;
    return `**${label}:** ${rest}`;
  });
}

function sectionTitleFor(page: Page, index: number): string {
  if (page.path.startsWith('/resort-living/')) {
    return ['Why stay here and beach setting', 'Rooms, villas, and 2026 rate tiers', 'Airport transfers, monsoon window, and spa'][index] || 'Stay notes';
  }
  if (page.path.startsWith('/interests/nightlife/')) {
    return ['What the night is known for', 'Getting there and 2026 spend', 'Where to sleep after'][index] || 'Night notes';
  }
  if (
    ['/bangkok', '/phuket', '/chiang-mai', '/koh-samui', '/krabi', '/khao-sok', '/koh-phangan'].includes(page.path) ||
    page.path.startsWith('/bangkok/') ||
    page.path.startsWith('/chiang-mai/')
  ) {
    return ['What it is known for and best areas', 'Getting around and 2026 fares', 'Where to stay and nightlife'][index] || 'Planner notes';
  }
  return ['What it is known for', 'Timing and 2026 costs', 'Where it leads'][index] || 'Planner notes';
}

export function stripBannedCopy(page: Page): Page {
  const used = new Set<string>();
  for (const sentence of sentencesOf(page.lede || '')) {
    used.add(sentence.replace(/\s+/g, ' ').trim());
  }
  const paragraphs = dedupeAgainst(page.paragraphs || [], used);
  const sections = (page.sections || []).map((section) => ({
    ...section,
    paragraphs: dedupeAgainst(section.paragraphs || [], used),
    bullets: section.bullets ? dedupeList(section.bullets) : section.bullets,
  }));
  const faqs = (page.faqs || []).map((faq) => ({
    ...faq,
    a: isBanned(faq.a) ? faq.a.replace(/planner spine/gi, 'short planner') : faq.a,
  }));
  const lede = page.lede.replace(/They are not ranked\.\s*/g, '');
  return { ...page, lede, paragraphs, sections, faqs };
}

const NIGHTLIFE_ZONE: Record<string, { title: string; cards: EditorialCard[] }> = {
  "/interests/nightlife/charoenkrung-soi-nana": {
    title: "How this pocket splits by room and mood",
    cards: [
      {
        kicker: "River Grand Hotels",
        title: "Four Seasons and Mandarin Oriental bars",
        photo: "/photos/resort-four-seasons-bangkok.jpg",
        lead: "Dress-code river rooms for the opening 19:00 pour before heading into the shophouse lanes.",
        bullets: [
          "**BKK Social Club** at Four Seasons pours Argentine craft cocktails in a courtyard salon at 480 to 650 THB.",
          "**The Bamboo Bar** at Mandarin Oriental pairs live jazz with heritage river cocktails.",
          "Start here at 19:00 while dressed for dinner, then take a 10-minute Grab north to Soi Nana."
        ]
      },
      {
        kicker: "Shophouse Lane",
        title: "Chinatown Soi Nana timber bars",
        photo: "/photos/yaowarat.jpg",
        lead: "A walkable two-block 19th-century lane where five cocktail rooms sit door to door.",
        bullets: [
          "**Teens of Thailand and Asia Today** pour gin and wild-honey cocktails in stripped-teak shophouses at 400 to 520 THB.",
          "**Tep Bar and Baan Rim Naam** add traditional Thai instruments and riverside warehouse tables.",
          "MRT Wat Mangkon Exit 1 is a 6-minute walk; after midnight, book an 80 to 160 THB Grab."
        ]
      },
      {
        kicker: "Rum & Late Vinyl",
        title: "Charoenkrung Soi 28 to Talat Noi",
        photo: "/photos/chinatown-day.jpg",
        lead: "High-energy tropical rum bars and late-night listening rooms between the river and Chinatown.",
        bullets: [
          "**Tropic City** on Charoenkrung Soi 28 brings neon tropical rum cocktails and a louder weekend floor after 22:00.",
          "**Talat Noi warehouse bars** offer open-air river breezes when Soi Nana standing rooms fill up.",
          "Pair with a Charoenkrung river hotel so the ride home stays under 15 minutes."
        ]
      }
    ]
  },
  "/interests/nightlife/thonglor-ekkamai": {
    title: "How Thonglor and Ekkamai split by soi",
    cards: [
      {
        kicker: "Velvet Speakeasies",
        title: "Lower and Mid-Thonglor (Soi 5 to Soi 13)",
        photo: "/photos/phrom-phong-and-thong-lo.jpg",
        lead: "Unmarked doors, multi-level cocktail rooms, and Bangkok dinner-to-drink energy.",
        bullets: [
          "**Rabbit Hole** behind its unmarked timber door between Soi 5 and Soi 7 pours 420 to 580 THB cocktails across three levels.",
          "**Find The Locker Room** on Thonglor Soi 14 hides a championship cocktail program behind a row of lockers.",
          "Book a 19:30 dinner on the same soi so you reach the bar door by 21:00 without a second taxi."
        ]
      },
      {
        kicker: "Chef-Driven Cocktail Rooms",
        title: "Phrom Phong to Thonglor Spine",
        photo: "/photos/siam.jpg",
        lead: "Savory-sweet Thai ingredient menus and intimate bartender-led counters.",
        bullets: [
          "**Bar Us and Mahaniyom** serve progressive savoury-and-fruit Thai cocktail flights at 450 to 650 THB.",
          "Seats are limited; reserve 3 to 5 days ahead for Friday or Saturday nights.",
          "BTS Thong Lo Exit 3 connects to the strip until midnight, followed by 80 to 180 THB Grab rides."
        ]
      },
      {
        kicker: "Late Live Rooms",
        title: "Ekkamai (Sukhumvit Soi 63)",
        photo: "/photos/nightlife.jpg",
        lead: "Indie live-music halls, casual beer gardens, and late Thai crowd energy one BTS stop east.",
        bullets: [
          "**Ekkamai beer houses and live rooms** run louder and looser than Thonglor speakeasies after 22:30.",
          "**Thonglor Commons** anchors early-evening craft pours and outdoor tables before the late doors open.",
          "Keep both stops on the same night only by short taxi; walking between upper Thonglor and Ekkamai in humidity takes 25 minutes."
        ]
      }
    ]
  },
  "/interests/nightlife/sukhumvit-soi-11": {
    title: "How a night on Sukhumvit Soi 11 breaks down",
    cards: [
      {
        kicker: "20:00 Speakeasy",
        title: "Havana Social and craft cocktail doors",
        photo: "/photos/nightlife.jpg",
        lead: "Pre-revolutionary 1940s Havana rum room hidden behind a phone booth code door.",
        bullets: [
          "**Havana Social** pours aged rum cocktails at 380 to 520 THB with Latin percussion and cigar lounge seating upstairs.",
          "Arrive between 19:30 and 20:30 before the weekend door line builds down the alley.",
          "Smart-casual dress (closed shoes for men) is enforced at the booth."
        ]
      },
      {
        kicker: "Rooftop Sunset",
        title: "Above Eleven and open-air decks",
        photo: "/photos/siam.jpg",
        lead: "Nikkei Peruvian-Japanese plates and park views 33 floors above the Sukhumvit neon.",
        bullets: [
          "**Above Eleven** pairs pisco sours and ceviche with open-air skyline views from 18:00 onward.",
          "Book a sunset table if you want dinner on the same block before heading downstairs.",
          "Drinks run 380 to 550 THB plus service charge and VAT."
        ]
      },
      {
        kicker: "Late Strip & Transit",
        title: "Street-level bars and BTS Nana exit",
        photo: "/photos/bts.jpg",
        lead: "High-volume open-front bars, late DJs, and straightforward midnight logistics.",
        bullets: [
          "**Late clubs on Soi 11** switch to 200 to 500 THB entry-with-drink-token covers after 22:00.",
          "**BTS Nana Exit 3** sits a 5-minute walk from the main cluster until 24:00.",
          "After midnight, hail Grab from the top or bottom of the soi rather than waiting in mid-soi taxi gridlock."
        ]
      }
    ]
  },
  "/interests/nightlife/silom-sathorn": {
    title: "Skyline rooftops versus Suan Phlu jazz lanes",
    cards: [
      {
        kicker: "64th-Floor Panorama",
        title: "Sky Bar at Lebua (River end of Silom)",
        photo: "/photos/riverside.jpg",
        lead: "Open-air dome and sweeping Chao Phraya bend views at the western end of Silom Road.",
        bullets: [
          "**Sky Bar at Lebua** opens for walk-in sunset views; signature cocktails run 800 to 1,200+ THB.",
          "**Strict dress code:** no athletic shorts, sleeveless shirts, or flip-flops at the elevator desk.",
          "Note that **Moon Bar at Banyan Tree** on Sathon Road is closed for renovation until 2 December 2026."
        ]
      },
      {
        kicker: "Late Jazz Townhouse",
        title: "Smalls on Suan Phlu Soi 1",
        photo: "/photos/nightlife.jpg",
        lead: "Three-storey corner townhouse pouring absinthe, martinis, and live jazz until late.",
        bullets: [
          "**Smalls** draws off-duty chefs, musicians, and Sathorn regulars for 380 to 520 THB cocktails.",
          "Wednesday jazz nights fill the upstairs balcony early; weeknights stay relaxed.",
          "Combine with a Suan Phlu bistro dinner 5 minutes away on foot."
        ]
      },
      {
        kicker: "Underground Vault",
        title: "Maggie Choo and lower Silom",
        photo: "/photos/siam.jpg",
        lead: "Cabaret-era velvet vaults and late weekend music below Silom Road.",
        bullets: [
          "**Maggie Choo** stages live soul, blues, and DJ sets in a subterranean bank-vault setting.",
          "BTS Sala Daeng and Chong Nonsi cover the strip until midnight.",
          "Grab back to Riverside or Sukhumvit hotels costs 80 to 160 THB after hours."
        ]
      }
    ]
  },
  "/interests/nightlife/ari-pradipat": {
    title: "Craft beer gardens, vinyl rooms, and Pradipat homebars",
    cards: [
      {
        kicker: "Craft Beer Gardens",
        title: "Ari Soi 1 to Soi 4 pours",
        photo: "/photos/nightlife.jpg",
        lead: "Leafy mid-century yards pouring rotating Thai and Nordic craft taps.",
        bullets: [
          "**Mikkeller Bar Ari and O glee** pour 250 to 420 THB craft pints under string-lit trees.",
          "Weeknights are walk-in friendly; Friday evenings fill by 19:30.",
          "Pair with grilled Northern pork or Isaan plates along Ari Soi 1 before your first pint."
        ]
      },
      {
        kicker: "Vinyl Listening",
        title: "Hi-fi bars on Ari Soi 4",
        photo: "/photos/siam.jpg",
        lead: "Intimate analog sound rooms built for conversation rather than club volume.",
        bullets: [
          "**Tempo and Long Play** spin funk, soul, and Japanese city pop on custom horn speakers.",
          "Cocktails and highballs run 340 to 480 THB in 25-seat rooms.",
          "Ideal for a two-drink evening when you want to catch the last BTS train before midnight."
        ]
      },
      {
        kicker: "Living-Room Bars",
        title: "Pradipat Road homebars",
        photo: "/photos/bts.jpg",
        lead: "Converted shophouses and second-floor bars ten minutes south toward Saphan Khwai.",
        bullets: [
          "**Eight Days A Week and BRUT** pour natural wine, craft cans, and house highballs to a local creative crowd.",
          "BTS Ari Exit 3 and BTS Saphan Khwai sit on either end of the neighbourhood walk.",
          "A Grab back to Siam or Sukhumvit after midnight runs 100 to 180 THB."
        ]
      }
    ]
  },
  "/interests/nightlife/phuket-beach-clubs": {
    title: "Andaman sunset daybeds by beach and spend",
    cards: [
      {
        kicker: "Bang Tao Flagship",
        title: "Catch Beach Club on Bang Tao sand",
        photo: "/photos/kamala-and-surin.jpg",
        lead: "Phuket original white-lounger institution for long lunches, pool sessions, and Friday night DJs.",
        bullets: [
          "**2026 daybed minimums** run 3,000 to 5,000+ THB redeemable on food and bottles during peak dry season.",
          "Direct west-facing sand on Bang Tao gives a full sunset horizon from November to April.",
          "Book weekend beds 48 hours ahead and arrange your Cherngtalay or Laguna car home before dark."
        ]
      },
      {
        kicker: "Kamala Headland",
        title: "Cafe del Mar at northern Kamala",
        photo: "/photos/phuket.jpg",
        lead: "Ibiza-born poolside club with wood-fired dining, sax-and-DJ sunsets, and cabanas.",
        bullets: [
          "**Single beds and pool cabanas** start around 2,000 to 6,000 THB minimum spend depending on row.",
          "Sits on the quiet northern end of Kamala Beach, 15 minutes from Surin and Bang Tao.",
          "Cocktails run 380 to 550 THB; sunset arrivals should check in by 16:30."
        ]
      },
      {
        kicker: "Laguna & Hotel Decks",
        title: "XANA and Pine calmer sundowners",
        photo: "/photos/kata-and-karon.jpg",
        lead: "Family-friendly and resort-backed beachfront decks with lower daytime minimums.",
        bullets: [
          "**XANA at Angsana Laguna and Pine at InterContinental Kamala** offer relaxed sunset tables without a late nightclub floor.",
          "May to October brings southwest monsoon surf and red-flag swim days; stick to pool decks in wet months.",
          "Grab between Kamala, Surin, and Bang Tao runs 250 to 500 THB each way."
        ]
      }
    ]
  },
  "/interests/nightlife/phuket-kamala-bangtao": {
    title: "How Kamala, Surin, and Bang Tao compare after dark",
    cards: [
      {
        kicker: "Cherngtalay & Boat Avenue",
        title: "Bang Tao dining and cocktail village",
        photo: "/photos/phuket.jpg",
        lead: "Phuket most polished west-coast dining pocket, combining Boat Avenue bistros with beachfront loungers.",
        bullets: [
          "**Boat Avenue and Porto de Phuket** anchor pre-club wine bars, tapas rooms, and cocktail terraces.",
          "**Catch Beach Club** sits 5 minutes west on the sand for sunset-to-midnight sessions.",
          "Best base if you want four nights of different restaurants without driving into Patong."
        ]
      },
      {
        kicker: "North Kamala Cove",
        title: "Kamala beachfront and Cafe del Mar",
        photo: "/photos/kata-and-karon.jpg",
        lead: "A curved, walkable bay with sunset decks at the northern rocks and calm family sand in the centre.",
        bullets: [
          "**Cafe del Mar and Pine** anchor the northern end with 16:30 sunset DJs and poolside beds.",
          "Central Kamala boardwalk keeps casual seafood tables at 350 to 800 THB a person.",
          "Sits 35 to 45 minutes south of Phuket Airport (HKT) by private car."
        ]
      },
      {
        kicker: "Surin Headland",
        title: "Surin and Pansea quiet luxury",
        photo: "/photos/resort-amanpuri.jpg",
        lead: "High-end villa headlands where evenings revolve around resort terraces rather than loud clubs.",
        bullets: [
          "**Amanpuri and Surin hillside dining rooms** focus on sunset Thai tables and quiet Andaman views.",
          "Ten minutes by car to either Bang Tao or Kamala when you want a beach-club afternoon.",
          "Pre-book return transfers after 22:00, as roadside taxis charge 400 to 600 THB for short hops."
        ]
      }
    ]
  },
  "/interests/nightlife/koh-samui-beach-clubs": {
    title: "Gulf beach clubs: Lipa Noi sunsets versus Chaweng nights",
    cards: [
      {
        kicker: "West Coast Sunset",
        title: "Nikki Beach on Lipa Noi",
        photo: "/photos/koh-samui.jpg",
        lead: "Samui flagship white-daybed pool club facing the Ang Thong sunset across calm western water.",
        bullets: [
          "**2026 daybed minimums** run 2,000 to 4,000+ THB, with Sunday pool brunches as the signature weekly session.",
          "Lipa Noi sits 35 to 45 minutes from Chaweng and Bophut; pre-book a 500 to 800 THB return car.",
          "Peak dry Gulf sunshine runs from January through September."
        ]
      },
      {
        kicker: "East Coast Strip",
        title: "Chaweng Beach clubs and late bars",
        photo: "/photos/chaweng.jpg",
        lead: "Walkable powder sand where afternoon loungers turn into fire-shows and late open-air DJ bars.",
        bullets: [
          "**Seen Beach Club and Ark Bar** anchor the central-to-south Chaweng beachfront from 14:00 until past midnight.",
          "Late doors after 22:00 often use a 200 to 500 THB first-drink token.",
          "Stay on Chaweng if you want to walk back to your room without a late hill taxi."
        ]
      },
      {
        kicker: "North Bay Fire & Sand",
        title: "Bophut Fisherman Village beanbags",
        photo: "/photos/resort-six-senses-samui.jpg",
        lead: "Timber shophouse cocktail bars and beachfront beanbag lounges 15 minutes from Samui Airport.",
        bullets: [
          "**Coco Tam** draws the 18:00 sunset crowd for beanbag cocktails (320 to 480 THB) and 19:30 beachfront fire spinning.",
          "Walk straight into Fisherman Village for seafood or French-Thai bistro dinners afterward.",
          "Best all-around evening pocket for couples and groups staying on the northern headlands."
        ]
      }
    ]
  },
  "/interests/nightlife/samui-bophut-lamai": {
    title: "Bophut promenade versus Lamai bay evenings",
    cards: [
      {
        kicker: "Timber Shophouse Bay",
        title: "Bophut and Fisherman Village",
        photo: "/photos/koh-samui.jpg",
        lead: "Pedestrian-friendly wooden shophouses, beachfront beanbags, and sunset cocktails facing Koh Phangan.",
        bullets: [
          "**Coco Tam and Summer by Coco Tam** anchor the western sand with open-air cocktails at 320 to 480 THB.",
          "**Friday Walking Street** closes the lane to traffic from 17:00 to 22:30 for street stalls and bar tables.",
          "15 minutes by car from USM Airport and Choeng Mon headland resorts."
        ]
      },
      {
        kicker: "Southeast Cove",
        title: "Lamai and Maret Sunday sessions",
        photo: "/photos/chaweng.jpg",
        lead: "A calmer, wider curve of southeastern sand with long-running oceanfront brunch clubs.",
        bullets: [
          "**Beach Republic** in northern Lamai hosts Sunday poolside sessions and Mediterranean tapas.",
          "Central Lamai bars pour 150 to 320 THB drinks without Chaweng high-volume club noise.",
          "Best paired with a southern Samui stay so you skip the Chaweng hill drive after dark."
        ]
      },
      {
        kicker: "Northern Cape Contrast",
        title: "Choeng Mon and Plai Laem resort bars",
        photo: "/photos/resort-ritz-carlton-koh-samui.jpg",
        lead: "Cliffside sunset decks for a quiet aperitif before a 10-minute taxi into Bophut.",
        bullets: [
          "**Dining on the Rocks at Six Senses** offers panoramic Gulf views for an early reservation.",
          "Taxis between Choeng Mon and Bophut run 300 to 500 THB each way.",
          "Never ride a rented scooter over the northern headlands after dark."
        ]
      }
    ]
  }
};


export function structureCopy(page: Page): Page {
  let paragraphs = [...(page.paragraphs || [])];
  let sections = [...(page.sections || [])];

  if (paragraphs.length > 2) {
    const extras = paragraphs.slice(2);
    paragraphs = paragraphs.slice(0, 2);
    const chunks: string[][] = [];
    for (let i = 0; i < extras.length; i += 3) chunks.push(extras.slice(i, i + 3));
    const rebuilt = chunks.map((chunk, index) => ({
      id: `scan-${index + 1}`,
      title: sectionTitleFor(page, index),
      paragraphs: [] as string[],
      bullets: toBullets(chunk),
    }));
    sections = [...rebuilt, ...sections];
  }

  sections = sections.map((section) => {
    if (section.cards?.length) return section;
    const paras = section.paragraphs || [];
    if (paras.length < 3) return section;
    return {
      ...section,
      paragraphs: paras.slice(0, 2),
      bullets: [...(section.bullets || []), ...toBullets(paras.slice(2))],
    };
  });

  const zone = RESORT_ZONE[page.path] || NIGHTLIFE_ZONE[page.path];
  if (zone && !sections.some((section) => section.id === 'zone-compare')) {
    sections = [{ id: 'zone-compare', title: zone.title, paragraphs: [], cards: zone.cards }, ...sections];
  }

  return { ...page, paragraphs, sections };
}

export function applyResortLivingHub(page: Page): Page {
  if (page.path !== '/interests/resort-living') return page;
  return curateResortHub({
    ...page,
    lede:
      "Thailand's flagship resorts are known for private Andaman headlands, lantern-lit Mae Rim rice terraces, and Chao Phraya river sanctuaries where the stay itself shapes the journey. Compare five flagships by coast and beach zone, then browse the rest by region.",
    paragraphs: [
      "Wake to limestone karsts rising out of Phang Nga Bay, step off a mahogany river barge onto a private Bangkok pier, or trade Phuket's main beaches for a gated coconut grove on Pansea Cove. The stay is the itinerary, so the coast and the month come before the brand name.",
    ],
    sections: [
      {
        id: 'transfers',
        title: 'Airport hops by coast',
        paragraphs: ['Private car or flight time from the nearest airport. Ranks in the flagship table follow coast order, not price or review score.'],
        bullets: [
          '**Phuket:** West-coast villas are 25 to 75 minutes by private car from HKT.',
          '**Koh Samui:** Headlands are 15 to 45 minutes from USM.',
          '**Koh Kood:** Eco-villas need a dedicated one-hour flight to Trat or a private island plane.',
          '**Krabi:** Tubkaek resorts are about 30 to 45 minutes by car from KBV; Railay and Phra Nang stays add a longtail boat from Ao Nang.',
          '**Bangkok:** Riverside hotels on Charoenkrung are 45 to 75 minutes by car from BKK, depending on traffic.',
        ],
      },
      {
        id: 'phuket',
        title: 'Phuket flagships',
        paragraphs: ['West-coast coves first. Patong is the nightlife strip, not the default villa week.'],
        cards: [
          {
            kicker: 'Flagship Cove',
            title: 'Pansea and Surin Headlands',
            lead: 'Gated west-coast peninsulas with calm turquoise water from November to April and complete isolation from road noise.',
            bullets: [
              '**[Amanpuri](/resort-living/amanpuri)** runs 45,000 to 120,000+ THB on a private white-sand cove, with a 45 to 75 minute HKT car at 1,500 to 2,500 THB.',
              'This lock beats busy central beaches because the villa gate is the week, not a Patong dinner hop.',
            ],
          },
          {
            kicker: 'Northwest Sanctuary',
            title: 'Naithon and Layan Hills',
            lead: 'Forested oceanfront cliffs 20 to 25 minutes south of Phuket Airport where every key is a private pool villa.',
            bullets: [
              '**[Trisara Phuket](/resort-living/trisara-phuket)** runs 35,000 to 95,000+ THB, with a private Andaman cove and PRU dining.',
              'Bang Tao beach clubs sit a short west-coast car away without touching Patong.',
            ],
          },
          {
            kicker: 'Southern Ridge vs North Sand',
            title: 'Kamala, Patong Ridge, and Mai Khao',
            lead: 'Where hillside value stays and long airport beaches differ from the ultra-prime west-coast coves.',
            bullets: [
              'Kamala and the Patong-Kata ridge trade cove isolation for easier dining. They are a different week from a gated west-coast villa.',
              'Mai Khao keeps 11 km of quiet north sand beside HKT, far from southern piers.',
            ],
          },
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', '[Amanpuri](/resort-living/amanpuri)', 'Pansea private headland', '45,000 to 120,000+ THB'],
            ['2', '[Trisara Phuket](/resort-living/trisara-phuket)', 'Naithon pool-villa cove', '35,000 to 95,000+ THB'],
          ],
        },
      },
      {
        id: 'koh-samui',
        title: 'Koh Samui flagships',
        paragraphs: ['Pick a Gulf coast. Chaweng is the swim-and-nightlife strip. The northwest hill is the butler week.'],
        cards: [
          {
            kicker: 'Sunset Amphitheater',
            title: 'Laem Yai and the Northwest Cape',
            lead: 'Steep coconut-palmed hillsides facing the Gulf sunset, 35 to 45 minutes from Samui Airport.',
            bullets: [
              '**[Four Seasons Koh Samui](/resort-living/four-seasons-koh-samui)** runs 36,000 to 90,000+ THB, with butler-buggy hillside villas and a private cove beach.',
              'Do not ride a scooter down this hill after dark. The grade is steep and there is no shoulder. Book a car before the first pour off property.',
            ],
          },
          {
            kicker: 'Northern Headland',
            title: 'Choeng Mon and Plai Laem',
            lead: 'Dramatic granite promontories 15 minutes from USM and 10 minutes from Bophut Fisherman Village.',
            bullets: [
              '**[Six Senses Samui](/resort-living/six-senses-samui)** runs 22,000 to 55,000+ THB on a 20-acre timber villa point.',
              '**[The Ritz-Carlton, Koh Samui](/resort-living/ritz-carlton-koh-samui)** runs 16,000 to 42,000+ THB on a 58-acre former coconut plantation bay.',
            ],
          },
          {
            kicker: 'Walkable East Coast',
            title: 'Chaweng vs the Villa Hills',
            lead: "How Samui's main powder-sand swimming strip compares with the private northern capes.",
            bullets: [
              'Sleep on Chaweng when you want walkable dining and a short USM hop.',
              'Lock a northern headland villa from January to September if silence and a private cove beat the strip.',
            ],
          },
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', '[Four Seasons Koh Samui](/resort-living/four-seasons-koh-samui)', 'Laem Yai northwest hillside', '36,000 to 90,000+ THB'],
            ['2', '[Six Senses Samui](/resort-living/six-senses-samui)', 'Choeng Mon northern headland', '22,000 to 55,000+ THB'],
            ['3', '[The Ritz-Carlton, Koh Samui](/resort-living/ritz-carlton-koh-samui)', 'Plai Laem and Choeng Mon bay', '16,000 to 42,000+ THB'],
          ],
        },
      },
      {
        id: 'krabi-phang-nga',
        title: 'Krabi and Phang Nga Bay flagships',
        paragraphs: ['Boat-only cliffs, an island bay, or a mainland sunset road. Pick one transfer story.'],
        cards: [
          {
            kicker: 'Mainland Sunset Beach',
            title: 'Tubkaek Beach',
            lead: 'Quiet mainland sand facing the thirteen limestone islands of Koh Hong, with direct road access from Krabi Airport.',
            bullets: [
              '**[Phulay Bay, a Ritz-Carlton Reserve](/resort-living/phulay-bay)** runs 28,000 to 75,000+ THB, with oversized pavilions and zero boat dependency in changeable weather.',
              'A KBV car is the arrival. Hong Island boats stay a booked morning, not the only way home.',
            ],
          },
          {
            kicker: 'Island Hideaway',
            title: 'Koh Yao Noi in Phang Nga Bay',
            lead: 'A sleepy island halfway between Phuket and Krabi, with front-row sunrise views over Phang Nga karst pinnacles.',
            bullets: [
              '**[Six Senses Yao Noi](/resort-living/six-senses-yao-noi)** runs 26,000 to 70,000+ THB, with elevated pool villas reached by a 45-minute speedboat from Phuket or Krabi.',
              'Phuket nightlife is the wrong pairing. Plan most plates on property.',
            ],
          },
          {
            kicker: 'Boat-Only Karst Pocket',
            title: 'Railay and Phra Nang Peninsula',
            lead: 'Soaring limestone cliffs and three beaches cut off from mainland roads, reached by a 15-minute boat from Ao Nang.',
            bullets: [
              '**[Rayavadee](/resort-living/rayavadee)** runs 22,000 to 60,000+ THB, with two-storey coconut-grove pavilions steps from Phra Nang cave beach.',
              'Accept a stuck storm day. There is no road exit from this pocket.',
            ],
          },
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', '[Phulay Bay, a Ritz-Carlton Reserve](/resort-living/phulay-bay)', 'Tubkaek mainland sunset', '28,000 to 75,000+ THB'],
            ['2', '[Six Senses Yao Noi](/resort-living/six-senses-yao-noi)', 'Phang Nga Bay hill villas', '26,000 to 70,000+ THB'],
            ['3', '[Rayavadee](/resort-living/rayavadee)', 'Phra Nang boat-only grove', '22,000 to 60,000+ THB'],
          ],
        },
      },
      {
        id: 'bangkok',
        title: 'Bangkok river and skytrain flagships',
        paragraphs: ['River compounds versus the BTS spine. Rank the river first, then the vertical manor.'],
        cards: [
          {
            kicker: 'Charoenkrung Riverfront',
            title: 'The Chao Phraya Promenade',
            lead: "Low-rise waterfront courtyards, private shuttle boats to the Grand Palace piers, and Asia's top cocktail rooms next door.",
            bullets: [
              '**[Capella Bangkok](/resort-living/capella-bangkok)** runs 32,000 to 85,000+ THB on the Bangkok-side promenade.',
              '**[Mandarin Oriental, Bangkok](/resort-living/mandarin-oriental-bangkok)** runs 25,000 to 65,000+ THB at the historic Bang Rak pier.',
            ],
          },
          {
            kicker: 'Upriver Heritage',
            title: 'Dusit Royal Reach',
            lead: 'A leafy bend of the Chao Phraya north of the Old City, far removed from Sukhumvit traffic.',
            bullets: [
              '**[The Siam](/resort-living/the-siam)** runs 28,000 to 75,000+ THB, with 38 suites and pool villas, antique teak houses, and a private river barge.',
              'The hotel boat is the palace transfer. Thonglor is a planned Grab, not a walk.',
            ],
          },
          {
            kicker: 'Skytrain Spine',
            title: 'Phloen Chit and Ratchathewi',
            lead: 'Direct BTS Skytrain bridges for travellers prioritizing central dining, embassies, and quick Airport Rail Link hops.',
            bullets: [
              'Skytrain hotels here trade a river view for BTS Ploenchit at the door.',
              'Ratchathewi is the cheaper ARL-and-BTS pocket one hop from Siam if Phloen Chit rates run high.',
            ],
          },
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', '[Capella Bangkok](/resort-living/capella-bangkok)', 'Charoenkrung river suites', '32,000 to 85,000+ THB'],
            ['2', '[The Siam](/resort-living/the-siam)', 'Dusit upriver compound', '28,000 to 75,000+ THB'],
            ['3', '[Mandarin Oriental, Bangkok](/resort-living/mandarin-oriental-bangkok)', 'Bang Rak historic pier', '25,000 to 65,000+ THB'],
          ],
        },
      },
      {
        id: 'chiang-mai',
        title: 'Chiang Mai valley flagships',
        paragraphs: ['Rice terrace, river teak, or a western hill pool. Haze from late February to April can sit in every view.'],
        cards: [
          {
            kicker: 'Rice-Terrace Valley',
            title: 'Mae Rim Countryside',
            lead: "Working terraced paddies, water buffalo, and misty foothills 30 to 40 minutes north of Chiang Mai's moat.",
            bullets: [
              '**[Four Seasons Chiang Mai](/resort-living/four-seasons-chiang-mai)** runs 30,000 to 80,000+ THB, with Lanna pavilions and private residences. Best November to early February.',
              'Wat mornings need a booked car. This is not a walk to Wat Phra Singh.',
            ],
          },
          {
            kicker: 'River & Teak Quarter',
            title: 'Wat Ket and the Ping River',
            lead: 'Walkable riverside lawns and 19th-century teak architecture 10 minutes east of the Old City wats.',
            bullets: [
              '**[137 Pillars House](/resort-living/137-pillars-house)** runs 18,000 to 40,000+ THB, with 30 suites around an 1889 homestead.',
              '**[Anantara Chiang Mai](/resort-living/anantara-chiang-mai)** runs 12,000 to 28,000+ THB on the Ping River bank.',
            ],
          },
          {
            kicker: 'Western Foothills',
            title: 'Hang Dong Forest Slopes',
            lead: 'Elevated valley infinity pools near Doi Suthep-Pui at a fraction of Mae Rim pavilion rates.',
            bullets: [
              'Hang Dong forest slopes hold elevated valley pools and a shorter Nimman taxi than Mae Rim, at a fraction of pavilion rates.',
              'Nimman dinner is a shorter taxi than a Mae Rim run. Old City on foot still wins for a 07:00 wat.',
            ],
          },
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', '[Four Seasons Chiang Mai](/resort-living/four-seasons-chiang-mai)', 'Mae Rim rice-terrace pavilions', '30,000 to 80,000+ THB'],
            ['2', '[137 Pillars House](/resort-living/137-pillars-house)', 'Wat Ket 1889 teak homestead', '18,000 to 40,000+ THB'],
            ['3', '[Anantara Chiang Mai](/resort-living/anantara-chiang-mai)', 'Ping River sanctuary', '12,000 to 28,000+ THB'],
          ],
        },
      },
      {
        id: 'koh-kood',
        title: 'Koh Kood and the eastern Gulf',
        paragraphs: ['One ultra-luxury island stay. Treat it as its own trip, not a Phuket add-on.'],
        cards: [
          {
            kicker: 'Private-Plane Eco-Island',
            title: 'Koh Kood Northern Coves',
            lead: 'Rainforest bays and clear eastern Gulf water near the Cambodian maritime border.',
            bullets: [
              '**[Soneva Kiri](/resort-living/soneva-kiri)** runs 55,000 to 180,000+ THB, with vast barefoot pool villas reached by private Cessna to Koh Mai Si or a one-hour flight to Trat plus a boat.',
              'November to April is the dry swimming window. The villa and the bay are the itinerary.',
            ],
          },
          {
            kicker: 'Eastern Coast Context',
            title: 'Why Koh Kood Stands Apart from Koh Chang',
            lead: 'A self-contained 3- to 5-night sanctuary rather than a quick island-hopping stop.',
            bullets: [
              'Never bolt Koh Kood onto a short Phuket week. The transfer day eats the first afternoon.',
              'Koh Chang is a busier hopping island. Hua Hin is a mainland rail town. Neither substitutes for this hideaway.',
            ],
          },
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', '[Soneva Kiri](/resort-living/soneva-kiri)', 'Koh Kood private-plane eco-villas', '55,000 to 180,000+ THB'],
          ],
        },
      },
    ],
    portraits: RESORT_FLAGSHIPS.map((href) => RESORT_RANKED.find((row) => row.href === href)!).map((row) => card(row.title.replace(/^\d+\. /, ''), row.href, row.photo)),
  });
}

export function applyNightlifeHub(page: Page): Page {
  if (page.path !== '/interests/nightlife') return page;
  return {
    ...page,
    lede:
      "Thailand after dark is known for candlelit shophouse cocktail bars along Bangkok's riverfront, velvet speakeasies in Thonglor, and sunset beach clubs on Phuket and Koh Samui. Pick your neighbourhood or coast before the first pour.",
    paragraphs: [
      'The first pour in Bangkok can be a smoked Negroni in a 19th-century Chinatown shophouse on Soi Nana, a late slide behind an unmarked timber door in Thonglor after dinner, or an open-air rum room on Sukhumvit Soi 11. The same week on Phuket or Koh Samui stretches out on a Bang Tao or Lipa Noi daybed as the Andaman or Gulf sky turns copper.',
      "Crafted cocktails run 400 to 650 THB in Bangkok's top rooms, while a late Grab across central Bangkok is 80 to 200 THB after the midnight BTS close. Island beach clubs work on daytime-to-sunset daybed minimums of 2,000 to 5,000 THB. Pick one district or one coast. Do not rent a scooter at 1:00.",
    ],
    sections: [
      {
        id: 'bangkok-districts',
        title: 'Bangkok after dark: five neighbourhoods, five moods',
        cards: [
          {
            kicker: 'River & Old Quarter',
            title: 'Charoenkrung and Chinatown Soi Nana',
            href: '/interests/nightlife/charoenkrung-soi-nana',
            lead: "Heritage shophouses, river breeze, and Bangkok's highest concentration of Asia 50 Best cocktail rooms.",
            bullets: [
              '**BKK Social Club and Bamboo Bar** are the river-hotel rooms. Dress the code and arrive before the late crush.',
              '**Soi Nana shophouses (Teens of Thailand, Asia Today, Tropic City)** pour 400 to 650 THB a glass in timber rooms a short walk from Yaowarat.',
              '**Getting home:** 80 to 160 THB Grab to riverside hotels. There is no BTS at the door.',
            ],
          },
          {
            kicker: 'Dinner & Speakeasies',
            title: 'Thonglor and Ekkamai',
            href: '/interests/nightlife/thonglor-ekkamai',
            lead: 'High-design cocktail dens and late-night dining rooms along Sukhumvit Soi 55 and Soi 63.',
            bullets: [
              '**Rabbit Hole and Find The Locker Room** are the unmarked doors after dinner. Book or arrive early.',
              '**Bar Us and Mahaniyom** pour 400 to 650 THB cocktails. Keep a 19:30 dinner seating before 21:00 bar doors.',
              '**BTS Thong Lo access** until midnight, then 80 to 180 THB Grab after the last train.',
            ],
          },
          {
            kicker: 'High-Energy Strip',
            title: 'Sukhumvit Soi 11',
            href: '/interests/nightlife/sukhumvit-soi-11',
            lead: 'One neon-lit Sukhumvit block combining a flagship 1940s Cuban rum room with late open-air bars.',
            bullets: [
              '**Havana Social** pours 350 to 500 THB cocktails behind the telephone-booth code door. Arrive by 20:00.',
              '**Open-air rooftops and late clubs** often ask 200 to 500 THB cover tokens after 22:00.',
              '**BTS Nana access** until midnight. Grab home on the frontage road. No rented scooter.',
            ],
          },
          {
            kicker: 'Skyline & Jazz',
            title: 'Silom and Sathorn',
            href: '/interests/nightlife/silom-sathorn',
            lead: 'Open-air 64th-floor river panoramas paired with tucked-away Suan Phlu jazz townhouses.',
            bullets: [
              '**Sky Bar at Lebua** is the walk-in sunset view on the 64th floor. Smart dress code applies.',
              '**Smalls and Maggie Choo\'s** keep late jazz and cocktails in Suan Phlu and Silom vaults.',
              '**Moon Bar note:** closed for renovation until 2 December 2026. Do not plan the Banyan Tree terrace before that date.',
            ],
          },
          {
            kicker: 'Indie & Local',
            title: 'Ari and Pradipat',
            href: '/interests/nightlife/ari-pradipat',
            lead: 'Leafy mid-century residential lanes filled with craft-beer gardens, vinyl listening bars, and living-room homebars.',
            bullets: [
              '**Mikkeller Bar Ari and O\'glee** are the garden pours. Sit early if you want a table, not a wait.',
              '**Vinyl rooms on Ari Soi 4 (Tempo, Long Play)** keep the volume conversational and the last train in mind.',
              '**Pradipat homebars (Eight Days A Week, BRUT)** pair with BTS Ari access until midnight.',
            ],
          },
        ],
      },
      {
        id: 'island-beach-clubs',
        title: 'Southern islands: Andaman sunset decks vs Gulf bays',
        cards: [
          {
            kicker: 'Andaman West Coast',
            title: 'Phuket: Bang Tao and Kamala Beach Clubs',
            href: '/interests/nightlife/phuket-beach-clubs',
            lead: 'Poolside daybeds, Mediterranean long lunches, and international sunset DJs from November to April.',
            bullets: [
              '**Catch Beach Club and Cafe del Mar** are the named west-coast rooms. Book weekend daybeds 48 hours ahead.',
              '**2026 daybed minimums** run 2,000 to 5,000 THB before drinks. Walk-ins wait on Saturday.',
              '**Car home:** 200 to 500 THB Grab along the west coast. Sleep on the same sand, not in Patong.',
            ],
          },
          {
            kicker: 'Laguna & Surin',
            title: 'Kamala, Bang Tao, and Laguna Pockets',
            href: '/interests/nightlife/phuket-kamala-bangtao',
            lead: 'Where to pair a Cherngtalay villa stay with beachfront sundowners without touching Patong.',
            bullets: [
              '**XANA at Angsana Laguna and Pine at InterContinental Kamala** are the hotel-deck sundowners.',
              '**Best season** is calmer Andaman water from November to April. May to October is swell and refund fights.',
              '**Airport buffer:** 30 to 50 minutes to HKT. Book the car with the daybed, not a Patong scooter.',
            ],
          },
          {
            kicker: 'Lower Gulf',
            title: 'Koh Samui Beach Clubs',
            href: '/interests/nightlife/koh-samui-beach-clubs',
            lead: 'Sun-drenched Gulf afternoons from January to September, split between Lipa Noi sunset beds and Chaweng late nights.',
            bullets: [
              '**Nikki Beach Koh Samui** holds 2,000 to 4,000 THB daybeds on Lipa Noi. Walk-ins wait on Saturday.',
              '**Chaweng after dark** often asks 200 to 500 THB drink-token doors after 22:00.',
              '**Hill car home** runs 300 to 700 THB. Save the number before you sit down.',
            ],
          },
          {
            kicker: 'Promenade & Bay',
            title: 'Koh Samui: Bophut and Lamai',
            href: '/interests/nightlife/samui-bophut-lamai',
            lead: "Wooden shophouse bars along Bophut's sand and relaxed Sunday sessions on the Lamai coast.",
            bullets: [
              "**Fisherman's Village and Coco Tam's** keep Bophut evenings on the sand, not in a hill villa.",
              '**Beach Republic** in Maret and Lamai is the Sunday session if you already sleep on that coast.',
              '**Easy USM transfers** run 15 to 25 minutes from the airport. Sleep on the same bay as the bar.',
            ],
          },
        ],
      },
    ],
  };
}

export function applyInterestPortraits(page: Page): Page {
  const list = INTEREST_PORTRAITS[page.path] || NIGHTLIFE_SIBLINGS[page.path];
  if (!list) return page;
  return { ...page, portraits: list.map((row) => card(row.title, row.href, row.photo)) };
}

export function thaiFoodHubCards(): Portrait[] {
  return [
    card('Dishes to order', '/thai-food/thai-dishes-to-order-first-trip', '/photos/chinatown-day.jpg'),
    card('Bangkok street food', '/thai-food/bangkok-street-food', '/photos/thai-food-bangkok-street.jpg'),
    card('Yaowarat walk', '/thai-food/yaowarat-chinatown-food-walk', '/photos/yaowarat.jpg'),
    card('Bangkok Bib Gourmand', '/thai-food/bangkok-bib-gourmand', '/photos/thai-food-bib.jpg'),
    card('Northern Lanna', '/thai-food/northern-lanna', '/photos/thai-food-lanna.jpg'),
    card('South and Baba-Nyonya', '/thai-food/southern-and-baba-nyonya', '/photos/thai-food-southern.jpg'),
    card('Night markets', '/thai-food/night-markets', '/photos/thai-food-night-markets.jpg'),
    card('Banthat Thong', '/thai-food/banthat-thong-road-food-strip', '/photos/siam.jpg'),
    card('Wang Lang and Talat Noi', '/thai-food/wang-lang-and-talat-noi', '/photos/riverside.jpg'),
    card('Or Tor Kor', '/thai-food/or-tor-kor-and-bangkok-fresh-markets', '/photos/chatuchak.jpg'),
    card('Rooftops and river', '/thai-food/bangkok-rooftop-bars-and-river-dining', '/photos/wat-arun-night.jpg'),
    card('Chiang Mai khao soi', '/thai-food/chiang-mai-khao-soi-and-markets', '/photos/night-market-cm.jpg'),
    card('Phuket Old Town food', '/thai-food/phuket-old-town-hokkien-and-peranakan-food', '/photos/phuket.jpg'),
    card('Cooking classes', '/thai-food/thai-cooking-classes-bangkok-and-chiang-mai', '/photos/thai-food.jpg'),
    card('Coffee guide', '/thai-food/bangkok-and-chiang-mai-coffee-guide', '/photos/ari.jpg'),
  ];
}

function dayRegion(title: string, body: string): 'south' | 'north' | 'bangkok' | 'other' {
  const t = `${title} ${body}`.toLowerCase();
  if (
    /railay|phra nang|ao nang|kbv|hong island|phi phi|maya|lanta|lipe|pak bara|hat yai|andaman|similan|khao sok|cheow|ratchaprapha|usm|koh tao|phangan|samui|chaweng|bophut|ang thong|longtail|kbv out|hkt|yao noi/.test(
      t,
    )
  ) {
    return 'south';
  }
  if (/doi|pai|chiang rai|baan dam|golden triangle|bua thong|mae rim|white temple|nimman|old city|north buffer/.test(t)) {
    return 'north';
  }
  if (/palace|wat pho|wat arun|chatuchak|yaowarat|sukhumvit|siam|rattanakosin/.test(t)) return 'bangkok';
  return 'other';
}

function photoFromKeywords(title: string, body: string): string | undefined {
  const t = `${title} ${body}`.toLowerCase();
  if (/ratchaprapha|cheow|raft/.test(t)) return '/photos/cheow-lan.jpg';
  if (/khao sok|urt/.test(t)) return '/photos/khao-sok.jpg';
  if (/railay|phra nang|ao nang|hong island|\bhong\b/.test(t)) return '/photos/railay.jpg';
  if (/maya|phi phi/.test(t)) return '/photos/phi-phi.jpg';
  if (/lanta/.test(t)) return '/photos/koh-lanta.jpg';
  if (/lipe/.test(t)) return '/photos/koh-lipe.jpg';
  if (/\bang thong\b/.test(t)) return '/photos/ang-thong.jpg';
  if (/phangan/.test(t)) return '/photos/koh-phangan.jpg';
  if (/koh tao|dive/.test(t)) return '/photos/koh-tao.jpg';
  if (/doi suthep|bua thong|baan dam|golden triangle|mae rim/.test(t)) return '/photos/doi-suthep.jpg';
  return undefined;
}

function nextUnusedPhoto(used: Set<string>, preferred?: string[]): string | undefined {
  if (preferred) {
    const fromPreferred = preferred.find((p) => !used.has(p));
    if (fromPreferred) return fromPreferred;
  }
  return PHOTO_POOL.find((p) => !used.has(p) && !p.includes('/dish-'));
}

export function fixDayPhotos(page: Page, used: Set<string>): Page {
  if (!page.days?.length) return page;
  const mapped = DAY_PHOTO_FIX[page.path] || {};
  const days = page.days.map((day) => {
    let photo = mapped[day.n] || photoFromKeywords(day.title, day.body) || day.photo;
    const region = dayRegion(day.title, day.body);
    if (region === 'south' && BANGKOK_TEMPLE_PHOTOS.has(photo)) {
      photo = nextUnusedPhoto(used, SOUTH_POOL) || '/photos/railay.jpg';
    }
    if (region === 'north' && BANGKOK_TEMPLE_PHOTOS.has(photo) && !photo.includes('doi-suthep')) {
      photo = nextUnusedPhoto(used, NORTH_POOL) || '/photos/doi-suthep.jpg';
    }
    if (used.has(photo)) {
      const pool = region === 'south' ? SOUTH_POOL : region === 'north' ? NORTH_POOL : PHOTO_POOL;
      photo = nextUnusedPhoto(used, pool) || nextUnusedPhoto(used) || photo;
    }
    used.add(photo);
    return { ...day, photo };
  });
  return { ...page, days };
}

export function uniquifyPortraits(items: Portrait[], used: Set<string>, pagePath = ''): Portrait[] {
  const bag = new UniquePhotos([...used]);
  const out = bag.takeBatch(items, (item) => `${pagePath} ${item.title} ${item.href}`);
  for (const row of out) used.add(row.photo);
  return out;
}

export function uniquifyAffiliates(page: Page, used: Set<string>): Page {
  const rows = [...(page.affiliates || [])];
  if (!rows.length) return page;
  if (rows.length === 1 && page.path !== '/about' && page.path !== '/about/ratings' && page.path !== '/privacy') {
    const firstIsKlook = rows[0].partner === 'klook';
    if (firstIsKlook) {
      rows.push({
        title: 'Search nearby stays',
        kicker: 'Trip.com',
        body: 'Compare live 2026 hotel rates and free-cancellation rooms on Trip.com.',
        href: stayLink(stayCityFromPath(page.path)),
        cta: 'Search stays',
        photo: '',
        partner: 'stay',
      });
    } else {
      rows.push({
        title: 'Tours and tickets',
        kicker: 'Klook',
        body: 'Book transfers, boats, and entry tickets ahead on Klook.',
        href: klookTours(page.title),
        cta: 'See tickets',
        photo: '',
        partner: 'klook',
      });
    }
  }
  const bag = new UniquePhotos([...used]);
  const affiliates: Affiliate[] = bag.takeBatch(rows, (row) => `${page.path} ${row.title} ${row.kicker} ${row.body}`);
  for (const row of affiliates) if (row.photo) used.add(row.photo);
  return { ...page, affiliates };
}

const DEPTH_PAD: Record<string, string[]> = {
  '/bangkok/sukhumvit-thonglor': [
    '**Thong Lo Exit 3:** The mall and hotel side. Exit 1 faces the restaurant soi. Put the exit number on the booking pin.',
    '**Ekkamai next stop:** One BTS hop east. Useful if Thonglor rooms are sold out and you still want dinner on this strip.',
    '**Soi 38 after 23:00:** Boat noodles at 60 to 80 THB. That is the late reset, not another cocktail room.',
  ],
  '/bangkok/old-city-rattanakosin': [
    '**Mani Noppharat Gate:** The 2026 palace door. Ignore a tuk-tuk that says the palace is closed.',
    '**Tha Tien orange ferry:** 5 THB to Wat Arun. Keep a 20 THB note. Longtails quote more for the same crossing.',
    '**Wat Pho school desk:** 340 THB for 30 minutes after the 300 THB temple ticket. Book there, not on the lane.',
  ],
  '/chiang-mai/old-city': [
    '**Tha Phae Gate at 07:00:** The square is still cool. Tour buses arrive later. Walk Phra Singh first.',
    '**Sunday Ratchadamnoen close:** From late afternoon. Do not hunt a scooter through the stalls.',
    '**Moat Grab ceiling:** 80 to 120 THB to Nimman in 2026. Tuk-tuk quotes above that are a walk-away.',
  ],
  '/chiang-mai/nimmanhaemin': [
    '**Maya basement:** Air-con reset only. Khao soi still lives on a soi or west of the moat.',
    '**Suan Dok walk:** Possible, hot, and slower than a 07:00 Grab to Wat Phra Singh.',
    '**Yi Peng room lock:** Book the Nimman night first. Surge at 21:00 is normal that week.',
    '**Pour-over band:** 80 to 150 THB in 2026 on Nimmanhaemin Road. Treat it as a cafe morning, not a temple base.',
  ],
  '/koh-samui': [
    '**USM bag belt:** Slow after two Bangkok hops. Keep the first afternoon empty.',
    '**Friday Fisherman Village:** Useful if you already sleep in Bophut. A 20 to 40 minute car from Chaweng.',
    '**West-coast 7-Eleven:** Sparse after 22:00. Chaweng is the 24-hour strip.',
  ],
  '/koh-phangan': [
    '**Thong Sala drop:** Read the pier name. Haad Rin boats are a different landing on party week.',
    '**Thong Nai Pan taxi:** 600 to 1,000 THB from Thong Sala in 2026. Shared songthaews thin out after dark.',
    '**Clinic and cash:** Fewer ATMs than Samui. A scooter rash is a real budget line.',
  ],
  '/khao-sok': [
    '**Ratchaprapha versus 401:** Different doors. The lake night is not the village 7-Eleven.',
    '**Longtail split:** 1,800 to 2,500 THB for the boat. Four people beat two.',
    '**Headlamp on the raft:** Generators or solar. Read last dry-season notes before you pay.',
  ],
  '/interests/nightlife/sukhumvit-soi-11': [
    '**Havana at 20:00:** The crafted rum room. After 23:00 the soi is a different street.',
    '**BTS gone after midnight:** Grab to Thonglor is 80 to 160 THB. Do not start a second district unless you like that car.',
    '**Frontage road buses:** No rented scooter. Bolt or Grab home.',
  ],
  '/interests/nightlife/phuket-beach-clubs': [
    '**Catch and Cafe del Mar:** Named west-coast rooms. Book weekend daybeds 48 hours ahead.',
    '**May to October decks:** Swell and refund fights. Pay only if the sky is kind.',
    '**One club day:** The second day is a boat or a beach without a DJ.',
    '**HKT car window:** 45 to 75 minutes and 900 to 1,800 THB in 2026. Book it with the daybed, not a Patong scooter.',
  ],
  '/interests/nightlife/koh-samui-beach-clubs': [
    '**Nikki Beach afternoon:** North-east sand. USM 15 to 30 minutes. Walk-ins wait on Saturday.',
    '**Chaweng after 22:00:** A different map from a sunset daybed. Cover tokens 200 to 500 THB on some doors.',
    '**Hill car home:** 300 to 700 THB late. Save the number before you sit down.',
  ],
  '/bangkok/rattanakosin': [
    '**Royal event closures:** Check royal ceremony notices before 08:30. Wat Pho often still opens.',
    '**Sarong rental:** 100 to 200 THB if you forgot long pants. Bring your own.',
    '**Licensed palace guide:** 1,000 to 2,000 THB extra. Useful only if you want the rooms explained.',
  ],
  '/bangkok/chinatown-yaowarat': [
    '**Weight before the tray:** Ask the seafood price first. A polite how-much saves a 2,000 THB surprise.',
    '**Talat Noi morning versus Yaowarat night:** Do not stack both in one 14-hour push.',
    '**Wat Mangkon incense:** Optional cash. Shoes off. Twenty minutes, not a palace substitute.',
  ],
};

function applyDepthPad(page: Page): Page {
  const extra = DEPTH_PAD[page.path];
  if (!extra) return page;
  const sections = [
    ...(page.sections || []),
    { id: 'field-notes', title: 'Field notes for 2026', paragraphs: [], bullets: extra },
  ];
  return { ...page, sections };
}


function pickCardPhoto(card: EditorialCard, page: Page, used: Set<string>): string {
  const t = `${card.kicker} ${card.title} ${card.href || ""} ${card.lead || ""} ${card.bullets.join(" ")}`.toLowerCase();
  const candidates: string[] = [];
  if (card.photo) candidates.push(card.photo);
  if (card.href === "/interests/nightlife/charoenkrung-soi-nana") candidates.push("/photos/riverside.jpg", "/photos/yaowarat.jpg", "/photos/wat-arun-night.jpg");
  if (card.href === "/interests/nightlife/thonglor-ekkamai") candidates.push("/photos/phrom-phong-and-thong-lo.jpg", "/photos/sukhumvit.jpg", "/photos/siam.jpg");
  if (card.href === "/interests/nightlife/sukhumvit-soi-11") candidates.push("/photos/sukhumvit.jpg", "/photos/silom-night.jpg", "/photos/bangkok.jpg");
  if (card.href === "/interests/nightlife/silom-sathorn") candidates.push("/photos/silom-and-sathorn.jpg", "/photos/silom-night.jpg", "/photos/lumphini.jpg");
  if (card.href === "/interests/nightlife/ari-pradipat") candidates.push("/photos/ari.jpg", "/photos/bts.jpg", "/photos/siam.jpg");
  if (card.href === "/interests/nightlife/phuket-beach-clubs") candidates.push("/photos/patong-night.jpg", "/photos/phuket.jpg", "/photos/kata-and-karon.jpg");
  if (card.href === "/interests/nightlife/phuket-kamala-bangtao") candidates.push("/photos/kamala-and-surin.jpg", "/photos/rawai-and-nai-harn.jpg", "/photos/phuket.jpg");
  if (card.href === "/interests/nightlife/koh-samui-beach-clubs") candidates.push("/photos/chaweng-night.jpg", "/photos/chaweng.jpg", "/photos/koh-samui.jpg");
  if (card.href === "/interests/nightlife/samui-bophut-lamai") candidates.push("/photos/lamai.jpg", "/photos/koh-samui.jpg", "/photos/ferry-gulf.jpg");

  if (t.includes("amanpuri") || t.includes("pansea")) candidates.push("/photos/resort-amanpuri.jpg", "/photos/kamala-and-surin.jpg", "/photos/phuket.jpg");
  if (t.includes("trisara") || t.includes("naithon") || t.includes("layan")) candidates.push("/photos/resort-trisara-phuket.jpg", "/photos/rawai-and-nai-harn.jpg", "/photos/kamala-and-surin.jpg");
  if (t.includes("kamala") || t.includes("mai khao") || t.includes("patong")) candidates.push("/photos/kata-and-karon.jpg", "/photos/kamala-and-surin.jpg", "/photos/phuket.jpg", "/photos/rawai-and-nai-harn.jpg");
  if (t.includes("four seasons koh samui") || t.includes("laem yai") || t.includes("sunset amphitheater")) candidates.push("/photos/resort-four-seasons-koh-samui.jpg", "/photos/koh-samui.jpg", "/photos/ang-thong.jpg");
  if (t.includes("six senses samui") || t.includes("choeng mon")) candidates.push("/photos/resort-six-senses-samui.jpg", "/photos/resort-ritz-carlton-koh-samui.jpg", "/photos/koh-samui.jpg");
  if (t.includes("ritz-carlton") || t.includes("plai laem")) candidates.push("/photos/resort-ritz-carlton-koh-samui.jpg", "/photos/resort-six-senses-samui.jpg", "/photos/lamai.jpg");
  if (t.includes("chaweng")) candidates.push("/photos/chaweng.jpg", "/photos/lamai.jpg", "/photos/koh-samui.jpg");
  if (t.includes("phulay bay") || t.includes("tubkaek")) candidates.push("/photos/resort-phulay-bay.jpg", "/photos/krabi.jpg", "/photos/longtail-andaman.jpg");
  if (t.includes("yao noi")) candidates.push("/photos/resort-six-senses-yao-noi.jpg", "/photos/phi-phi.jpg", "/photos/longtail-andaman.jpg");
  if (t.includes("rayavadee") || t.includes("railay") || t.includes("phra nang")) candidates.push("/photos/resort-rayavadee.jpg", "/photos/railay.jpg", "/photos/krabi.jpg");
  if (t.includes("capella") || t.includes("charoenkrung")) candidates.push("/photos/resort-capella-bangkok.jpg", "/photos/resort-four-seasons-bangkok.jpg", "/photos/riverside.jpg", "/photos/wat-arun-night.jpg");
  if (t.includes("the siam") || t.includes("dusit")) candidates.push("/photos/resort-the-siam.jpg", "/photos/riverside.jpg", "/photos/old-city.jpg");
  if (t.includes("mandarin oriental") || t.includes("bang rak")) candidates.push("/photos/resort-mandarin-oriental-bangkok.jpg", "/photos/riverside.jpg", "/photos/wat-arun-night.jpg");
  if (t.includes("four seasons bangkok")) candidates.push("/photos/resort-four-seasons-bangkok.jpg", "/photos/resort-capella-bangkok.jpg", "/photos/riverside.jpg");
  if (t.includes("rosewood") || t.includes("phloen chit") || t.includes("ratchathewi") || t.includes("skytrain")) candidates.push("/photos/resort-rosewood-bangkok.jpg", "/photos/siam.jpg", "/photos/bts.jpg", "/photos/sukhumvit.jpg");
  if (t.includes("mae rim") || t.includes("four seasons chiang mai")) candidates.push("/photos/resort-four-seasons-chiang-mai.jpg", "/photos/chiang-mai.jpg", "/photos/northern.jpg");
  if (t.includes("137 pillars") || t.includes("wat ket") || t.includes("ping river") || t.includes("anantara chiang mai")) candidates.push("/photos/resort-137-pillars.jpg", "/photos/resort-anantara-chiang-mai.jpg", "/photos/chiang-mai-old-city.jpg", "/photos/night-market-cm.jpg");
  if (t.includes("hang dong") || t.includes("western foothills")) candidates.push("/photos/doi-suthep.jpg", "/photos/nimman.jpg", "/photos/chiang-mai.jpg");
  if (t.includes("soneva kiri") || t.includes("koh kood")) candidates.push("/photos/resort-soneva-kiri.jpg", "/photos/koh-kood.jpg", "/photos/koh-chang.jpg", "/photos/ferry-gulf.jpg");

  for (const c of candidates) {
    if (c !== page.photo && !used.has(c)) {
      used.add(c);
      return c;
    }
  }
  const bag = new UniquePhotos([...used]);
  const fallback = bag.take(card.photo, `${page.path} ${card.kicker} ${card.title} ${card.href || ""}`);
  used.add(fallback);
  return fallback;
}

export function assignEditorialCardPhotos(page: Page, used: Set<string>): Page {
  if (!page.sections?.length) return page;
  const sections = page.sections.map((section) => {
    if (!section.cards?.length) return section;
    const cards = section.cards.map((c) => ({
      ...c,
      photo: pickCardPhoto(c, page, used),
    }));
    return { ...section, cards };
  });
  return { ...page, sections };
}

export function applyWave16Finish(page: Page): Page {
  let next = stripBannedCopy(page);
  next = applyResortLivingHub(next);
  next = applyNightlifeHub(next);
  next = applyInterestPortraits(next);
  next = structureCopy(next);
  const usedPhotos = new Set<string>(next.photo ? [next.photo] : []);
  if (isPlacePage(next.path)) {
    const attrBag = new UniquePhotos([...usedPhotos]);
    for (const row of attrBag.takeBatch(attractionsFor(next.path), (r) => `${next.path} ${r.name} ${r.href}`)) {
      usedPhotos.add(row.photo);
    }
  } else if (next.path.startsWith('/thai-food/')) {
    for (const row of foodRowsFor(next.path, next.photo ? [next.photo] : [])) {
      if (row.photo) usedPhotos.add(row.photo);
    }
  }
  if (next.portraits?.length) {
    next = { ...next, portraits: uniquifyPortraits(next.portraits, usedPhotos, next.path) };
  }
  next = uniquifyAffiliates(next, usedPhotos);
  next = applyDepthPad(next);
  next = fixDayPhotos(next, usedPhotos);
  next = assignEditorialCardPhotos(next, usedPhotos);
  next = { ...next, photoCredit: photoCreditFor(next.photo) };
  return next;
}

// Hub showcase: top flagships only. Every other resort page stays live and linked in the compact list.
export const RESORT_FLAGSHIPS = [
  '/resort-living/amanpuri',
  '/resort-living/four-seasons-koh-samui',
  '/resort-living/phulay-bay',
  '/resort-living/soneva-kiri',
  '/resort-living/capella-bangkok',
];

// Live resort pages missing from the coast tables; listed so the hub links them.
const RESORT_HUB_EXTRAS: [string, string, string, string][] = [
  ['Phuket', 'Avista Hideaway Phuket (MGallery)', '/resort-living/avista-hideaway-phuket', 'West-coast hills'],
  ['Bangkok river and skytrain', 'VIE Hotel Bangkok (MGallery)', '/resort-living/vie-hotel-bangkok', 'Ratchathewi BTS'],
  ['Chiang Mai valley', 'Veranda High Chiang Mai (MGallery)', '/resort-living/veranda-high-chiang-mai', 'Hill above the valley'],
];

function curateResortHub(page: Page): Page {
  const all = page.sections || [];
  const coasts = all.filter((s) => s.table?.rows?.length);
  const keep = all.filter((s) => !s.table?.rows?.length);
  const linkOf = (cell: string) => /\]\((\/resort-living\/[^)]+)\)/.exec(cell)?.[1];
  const coastName = (t: string) => t.replace(/ flagships$/, '');
  const cards: any[] = [];
  const rows: string[][] = [];
  const more: string[] = [];
  for (const href of RESORT_FLAGSHIPS) {
    for (const sec of coasts) {
      const row = sec.table!.rows.find((r) => linkOf(r[1]) === href);
      if (!row) continue;
      rows.push([String(rows.length + 1), row[1], coastName(sec.title), row[2], row[3]]);
      const card = (sec.cards || []).find((c: any) => (c.bullets || []).some((b: string) => b.includes(`](${href})`)));
      if (card) {
        cards.push({ kicker: coastName(sec.title), title: card.title, lead: card.lead, bullets: card.bullets.filter((b: string) => b.includes(`](${href})`)) });
      }
    }
  }
  for (const sec of coasts) {
    const rest = sec.table!.rows.filter((r) => !RESORT_FLAGSHIPS.includes(linkOf(r[1]) || ''));
    for (const [coast, label, href, zone] of RESORT_HUB_EXTRAS) {
      if (coastName(sec.title) === coast && !rest.some((r) => linkOf(r[1]) === href)) rest.push(['', `[${label}](${href})`, zone, '']);
    }
    if (rest.length) more.push(`**${coastName(sec.title)}:** ${rest.map((r) => `${r[1]} (${r[2]})`).join(', ')}`);
  }
  return {
    ...page,
    sections: [
      ...keep.filter((s) => s.id === 'transfers'),
      {
        id: 'flagships',
        title: 'The five flagships',
        paragraphs: ['One flagship per coast, compared by beach zone and 2026 nightly band.'],
        cards,
        table: { headers: ['Rank', 'Resort', 'Coast', 'Zone', '2026 night band'], rows },
      },
      { id: 'more-resorts', title: 'More resorts', paragraphs: [], bullets: more },
      ...keep.filter((s) => s.id !== 'transfers'),
    ],
  };
}
