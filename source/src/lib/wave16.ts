import credits from '../../public/photos/credits.json';
import type { Affiliate, Page, Portrait, Section } from './content';
import { klookTours, stayLink, type StayCity } from './partners';

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

const PHOTO_POOL = [
  '/photos/riverside.jpg',
  '/photos/old-city.jpg',
  '/photos/sukhumvit.jpg',
  '/photos/siam.jpg',
  '/photos/nightlife.jpg',
  '/photos/lumphini.jpg',
  '/photos/jim-thompson.jpg',
  '/photos/chinatown-day.jpg',
  '/photos/silom-night.jpg',
  '/photos/patong-night.jpg',
  '/photos/chaweng-night.jpg',
  '/photos/ari.jpg',
  '/photos/hua-hin.jpg',
  '/photos/ayutthaya.jpg',
  '/photos/kanchanaburi.jpg',
  '/photos/sukhothai.jpg',
  '/photos/erawan.jpg',
  '/photos/get-there.jpg',
  '/photos/plan.jpg',
  '/photos/destinations.jpg',
  '/photos/itineraries.jpg',
  '/photos/resort.jpg',
  '/photos/koh-kood.jpg',
  '/photos/koh-chang.jpg',
  ...SOUTH_POOL,
  ...NORTH_POOL,
];

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
  { title: '3. Four Seasons Bangkok', href: '/resort-living/four-seasons-bangkok', photo: '/photos/resort-four-seasons-bangkok.jpg' },
  { title: '4. Mandarin Oriental', href: '/resort-living/mandarin-oriental-bangkok', photo: '/photos/resort-mandarin-oriental-bangkok.jpg' },
  { title: '5. Rosewood Bangkok', href: '/resort-living/rosewood-bangkok', photo: '/photos/resort-rosewood-bangkok.jpg' },
  { title: '1. Four Seasons Chiang Mai', href: '/resort-living/four-seasons-chiang-mai', photo: '/photos/resort-four-seasons-chiang-mai.jpg' },
  { title: '2. 137 Pillars House', href: '/resort-living/137-pillars-house', photo: '/photos/resort-137-pillars.jpg' },
  { title: '3. Anantara Chiang Mai', href: '/resort-living/anantara-chiang-mai', photo: '/photos/resort-anantara-chiang-mai.jpg' },
  { title: '1. Soneva Kiri', href: '/resort-living/soneva-kiri', photo: '/photos/resort-soneva-kiri.jpg' },
];

const RESORT_ZONE: Record<string, { title: string; bullets: string[] }> = {
  '/resort-living/amanpuri': {
    title: 'Beach and zone versus other Phuket coasts',
    bullets: [
      '**Pansea and Surin coves:** Private-access headland water and Phuket highest villa rates. This is why Amanpuri sits here.',
      '**Naithon and Layan:** Quieter northwest hills 20 to 25 minutes from HKT. Trisara is the all-pool-villa rival.',
      '**Kamala hills:** Dinner and beach-club access without a Patong base.',
      '**Mai Khao:** Long north sand next to the airport. Quiet, far from southern piers.',
      '**Patong and Kata ridge:** Energy and family beaches. Avista trades cove privacy for a shorter Patong hop.',
    ],
  },
  '/resort-living/trisara-phuket': {
    title: 'Beach and zone versus other Phuket coasts',
    bullets: [
      '**Naithon and Layan headland:** Forested northwest privacy and sunset Andaman views. This is the Trisara lock.',
      '**Pansea and Surin:** Higher villa rates and a tighter cove. Amanpuri is the step up.',
      '**Kamala hills:** Easier dinner walks and cafe del Mar style days.',
      '**Patong ridge:** Faster nightlife. Wrong default if you booked this cove.',
    ],
  },
  '/resort-living/avista-hideaway-phuket': {
    title: 'Beach and zone versus other Phuket coasts',
    bullets: [
      '**Patong and Kata ridge:** Hill sanctuary between Patong and Freedom Beach. Faster dining, less cove privacy.',
      '**Pansea and Surin:** Amanpuri privacy if the budget jumps.',
      '**Naithon and Layan:** Trisara if you want a private-pool villa far from Patong bass.',
      '**Kamala and Surin hills:** The useful dinner and daybed belt from this hotel.',
    ],
  },
  '/resort-living/four-seasons-koh-samui': {
    title: 'Beach and zone versus other Samui coasts',
    bullets: [
      '**Laem Yai and Lipa Noi:** Northwest sunset amphitheater, 35 to 45 minutes from USM. Maximum privacy, butler-buggy living.',
      '**Choeng Mon and Bophut headland:** 15 minutes from USM and 10 minutes from Fisherman Village. Six Senses and Ritz-Carlton.',
      '**Chaweng and Chaweng Noi:** Finest powder sand and the dinner strip. Wrong default if you booked this hill.',
    ],
  },
  '/resort-living/six-senses-samui': {
    title: 'Beach and zone versus other Samui coasts',
    bullets: [
      '**Choeng Mon and Bophut headland:** Rocky 20-acre peninsula near Fisherman Village. This is the Six Senses lock.',
      '**Laem Yai northwest:** Four Seasons if sunset privacy beats a village dinner walk.',
      '**Chaweng strip:** Swim and nightlife. A different week from this hill.',
    ],
  },
  '/resort-living/ritz-carlton-koh-samui': {
    title: 'Beach and zone versus other Samui coasts',
    bullets: [
      '**Plai Laem and Choeng Mon:** Private bay estate 15 minutes from USM.',
      '**Bophut village:** Dinner without a long hill road. Six Senses is the closer headland rival.',
      '**Laem Yai:** Four Seasons if you want the sunset amphitheater and will Grab for plates.',
    ],
  },
  '/resort-living/phulay-bay': {
    title: 'Beach and zone versus other Krabi and Phang Nga coasts',
    bullets: [
      '**Tubkaek mainland beach:** Road-access sunset sand facing the Hong Islands. Direct KBV car. No boat dependency.',
      '**Koh Yao Noi:** 45-minute speedboat into Phang Nga pinnacles. Six Senses if the bay is the trip.',
      '**Railay and Phra Nang:** Boat-only karst pocket. Rayavadee if you accept a stuck storm day.',
    ],
  },
  '/resort-living/six-senses-yao-noi': {
    title: 'Beach and zone versus other Krabi and Phang Nga coasts',
    bullets: [
      '**Koh Yao Noi island:** Halfway between Phuket and Krabi. Quiet lanes and bay villas.',
      '**Tubkaek mainland:** Phulay Bay if you refuse a pier-and-boat arrival.',
      '**Railay grove:** Rayavadee if you want cliffs with no island transfer.',
    ],
  },
  '/resort-living/rayavadee': {
    title: 'Beach and zone versus other Krabi and Phang Nga coasts',
    bullets: [
      '**Phra Nang and Railay:** Boat-only limestone pocket. Zero road traffic. This is the Rayavadee lock.',
      '**Tubkaek:** Phulay Bay if you want a KBV car and a storm-proof exit.',
      '**Koh Yao Noi:** Six Senses if the Phang Nga view is the week.',
    ],
  },
  '/resort-living/capella-bangkok': {
    title: 'River and district versus other Bangkok stays',
    bullets: [
      '**Chao Phraya Charoenkrung:** Low-rise river suites, hotel boat, sunset terrace. Capella, Four Seasons, Mandarin Oriental.',
      '**Dusit upriver:** The Siam private compound and teak barge. Quieter, farther from BTS.',
      '**Phloen Chit and Siam spine:** Rosewood and VIE if you want skytrain, not a river road.',
    ],
  },
  '/resort-living/the-siam': {
    title: 'River and district versus other Bangkok stays',
    bullets: [
      '**Dusit upriver heritage reach:** Leafy bend north of Rattanakosin. Hotel boat is the point.',
      '**Charoenkrung river:** Capella and Four Seasons if you want ICONSIAM and cocktail rooms closer.',
      '**Siam and Ratchathewi:** VIE if you want ARL and BTS without a compound.',
    ],
  },
  '/resort-living/four-seasons-bangkok': {
    title: 'River and district versus other Bangkok stays',
    bullets: [
      '**Charoenkrung courtyard:** Urban river resort with shuttle boats.',
      '**Capella next door:** Higher villa rates on the same bank.',
      '**Dusit:** The Siam if you want a private garden and no promenade traffic.',
    ],
  },
  '/resort-living/mandarin-oriental-bangkok': {
    title: 'River and district versus other Bangkok stays',
    bullets: [
      '**Bang Rak historic pier:** The original river icon. Private pier, Authors Lounge, city noise at the door.',
      '**Charoenkrung new-build:** Capella and Four Seasons for newer suites.',
      '**Phloen Chit vertical:** Rosewood if BTS beats a boat.',
    ],
  },
  '/resort-living/rosewood-bangkok': {
    title: 'River and district versus other Bangkok stays',
    bullets: [
      '**Phloen Chit skytrain manor:** Direct BTS, malls, rooftop cocktails. No river road.',
      '**Chao Phraya compounds:** Capella and Mandarin if the boat is the stay.',
      '**Ratchathewi value:** VIE if you want design rooms one stop from Siam.',
    ],
  },
  '/resort-living/vie-hotel-bangkok': {
    title: 'River and district versus other Bangkok stays',
    bullets: [
      '**Ratchathewi BTS:** ARL plus one hop. City value pick, not a river compound.',
      '**Phloen Chit:** Rosewood if you want the vertical manor step up.',
      '**Charoenkrung:** Capella if two river nights are the Bangkok plan.',
    ],
  },
  '/resort-living/four-seasons-chiang-mai': {
    title: 'Valley and district versus other Chiang Mai stays',
    bullets: [
      '**Mae Rim rice valley:** 30 to 40 minutes north. Terraces and mist. This is the Four Seasons lock.',
      '**Ping River and Wat Ket:** 10 minutes from the moat. 137 Pillars and Anantara.',
      '**Hang Dong western hills:** Veranda High if you want a view pool at an accessible rate.',
    ],
  },
  '/resort-living/137-pillars-house': {
    title: 'Valley and district versus other Chiang Mai stays',
    bullets: [
      '**Wat Ket teak homestead:** 1889 house suites, walkable river lawns.',
      '**Mae Rim:** Four Seasons if the rice terrace is the trip.',
      '**Hang Dong:** Veranda High for a hill pool and a shorter Nimman taxi.',
    ],
  },
  '/resort-living/anantara-chiang-mai': {
    title: 'Valley and district versus other Chiang Mai stays',
    bullets: [
      '**Ping River contemporary:** Night Bazaar side, 10 minutes to the moat.',
      '**Wat Ket teak:** 137 Pillars if the homestead is the look.',
      '**Mae Rim:** Four Seasons if you accept a 30 to 45 minute car each way.',
    ],
  },
  '/resort-living/veranda-high-chiang-mai': {
    title: 'Valley and district versus other Chiang Mai stays',
    bullets: [
      '**Hang Dong western foothills:** Forested slopes near Doi Suthep-Pui at an accessible luxury rate.',
      '**Mae Rim:** Four Seasons if the rice terrace budget is open.',
      '**Old City on foot:** Wins if you want Wat Phra Singh at 07:00 without a taxi.',
    ],
  },
  '/resort-living/soneva-kiri': {
    title: 'Coast versus other eastern Gulf islands',
    bullets: [
      '**Koh Kood north eco-cove:** Rainforest bays, gin-clear November to April water, no mass nightlife.',
      '**Koh Chang:** Busier east-coast strip. A different product.',
      '**Hua Hin:** Mainland rail town. Do not treat it as a Soneva substitute.',
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
  if (sentence) return { label: sentence[1], rest: sentence[3], glue: sentence[2] === ':' ? 'colon' : 'colon' };
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
  return ['How to use this page', 'Timing and 2026 costs', 'Next useful page'][index] || 'Planner notes';
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
    const paras = section.paragraphs || [];
    if (paras.length < 4 && (section.bullets?.length || 0) > 0) return section;
    if (paras.length < 4) return section;
    return {
      ...section,
      paragraphs: paras.slice(0, 2),
      bullets: [...(section.bullets || []), ...toBullets(paras.slice(2))],
    };
  });

  const zone = RESORT_ZONE[page.path];
  if (zone && !sections.some((section) => section.id === 'zone-compare')) {
    sections = [{ id: 'zone-compare', title: zone.title, paragraphs: [], bullets: zone.bullets }, ...sections];
  }

  return { ...page, paragraphs, sections };
}

export function applyResortLivingHub(page: Page): Page {
  if (page.path !== '/interests/resort-living') return page;
  return {
    ...page,
    lede: 'Use resort living when the hotel is the point. Resorts are grouped by destination and ranked from the most expensive flagship down. Pick the coast and the month first.',
    paragraphs: [
      'Seventeen named stays sit under six destinations. Rank is a 2026 nightly THB band, not a review score. Match the monsoon before you lock a villa.',
      'A HKT car to the west coast is 45 to 90 minutes. A USM car is often 15 to 40 minutes. Koh Kood is its own transfer day. Do not bolt Soneva onto a Phuket week.',
    ],
    sections: [
      {
        id: 'phuket',
        title: 'Phuket flagships',
        paragraphs: ['West-coast coves first. Patong is the nightlife strip, not the default villa week.'],
        bullets: [
          '**Pansea and Surin coves:** Private-access headlands, calm November to April water, highest villa rates. Amanpuri.',
          '**Naithon and Layan headland:** Forested northwest hills 20 to 25 minutes from HKT. Trisara.',
          '**Kamala and Surin hills:** Walkable dinner bays and beach clubs between Patong and Bang Tao.',
          '**Mai Khao north beach:** 11 km of quiet sand beside HKT. Far from southern piers.',
          '**Patong and Kata ridge:** Energy and family beaches. A different week from a private cove villa.',
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', 'Amanpuri', 'Pansea private headland', '45,000 to 120,000+ THB'],
            ['2', 'Trisara Phuket', 'Naithon pool-villa cove', '35,000 to 95,000+ THB'],
          ],
        },
      },
      {
        id: 'koh-samui',
        title: 'Koh Samui flagships',
        paragraphs: ['Pick a Gulf coast. Chaweng is the swim-and-nightlife strip. The northwest hill is the butler week.'],
        bullets: [
          '**Laem Yai and Lipa Noi:** Northwest sunset amphitheater, 35 to 45 minutes from USM. Four Seasons.',
          '**Choeng Mon and Bophut headland:** 15 minutes from USM, 10 minutes from Fisherman Village. Six Senses and Ritz-Carlton.',
          '**Chaweng and Chaweng Noi:** Powder sand and the dinner strip. Best for walkable nights, not villa silence.',
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', 'Four Seasons Koh Samui', 'Laem Yai northwest hillside', '36,000 to 90,000+ THB'],
            ['2', 'Six Senses Samui', 'Choeng Mon northern headland', '22,000 to 55,000+ THB'],
            ['3', 'The Ritz-Carlton, Koh Samui', 'Plai Laem and Choeng Mon bay', '16,000 to 42,000+ THB'],
          ],
        },
      },
      {
        id: 'krabi-phang-nga',
        title: 'Krabi and Phang Nga Bay flagships',
        paragraphs: ['Boat-only cliffs, an island bay, or a mainland sunset road. Pick one transfer story.'],
        bullets: [
          '**Tubkaek mainland beach:** Road-access sunset sand facing the Hong Islands. Phulay Bay.',
          '**Koh Yao Noi island:** 45-minute speedboat between Phuket and Krabi. Six Senses Yao Noi.',
          '**Railay and Phra Nang peninsula:** Three beaches, zero roads. Rayavadee.',
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', 'Phulay Bay, a Ritz-Carlton Reserve', 'Tubkaek mainland sunset', '28,000 to 75,000+ THB'],
            ['2', 'Six Senses Yao Noi', 'Phang Nga Bay hill villas', '26,000 to 70,000+ THB'],
            ['3', 'Rayavadee', 'Phra Nang boat-only grove', '22,000 to 60,000+ THB'],
          ],
        },
      },
      {
        id: 'bangkok',
        title: 'Bangkok river and skytrain flagships',
        paragraphs: ['River compounds versus the BTS spine. Rank the river first, then the vertical manor.'],
        bullets: [
          '**Chao Phraya river compound:** Capella, Four Seasons, Mandarin Oriental. Boats to BTS Saphan Taksin and ICONSIAM.',
          '**Dusit quiet upriver:** The Siam teak barge and garden. Near royal palaces, far from Sukhumvit bass.',
          '**Phloen Chit BTS spine:** Rosewood. Malls and rooftops without a river taxi.',
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', 'Capella Bangkok', 'Charoenkrung river suites', '32,000 to 85,000+ THB'],
            ['2', 'The Siam', 'Dusit upriver compound', '28,000 to 75,000+ THB'],
            ['3', 'Four Seasons Bangkok', 'Charoenkrung courtyard', '26,000 to 65,000+ THB'],
            ['4', 'Mandarin Oriental, Bangkok', 'Bang Rak historic pier', '25,000 to 65,000+ THB'],
            ['5', 'Rosewood Bangkok', 'Phloen Chit vertical manor', '14,000 to 32,000+ THB'],
          ],
        },
      },
      {
        id: 'chiang-mai',
        title: 'Chiang Mai valley flagships',
        paragraphs: ['Rice terrace, river teak, or a western hill pool. Haze from late February to April can sit in every view.'],
        bullets: [
          '**Mae Rim rice valley:** 30 to 40 minutes north. Four Seasons.',
          '**Ping River and Wat Ket:** 10 minutes from the moat. 137 Pillars and Anantara.',
          '**Hang Dong western hills:** View pools near Doi Suthep-Pui. A longer taxi than a river stay.',
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', 'Four Seasons Chiang Mai', 'Mae Rim rice-terrace pavilions', '30,000 to 80,000+ THB'],
            ['2', '137 Pillars House', 'Wat Ket 1889 teak homestead', '18,000 to 40,000+ THB'],
            ['3', 'Anantara Chiang Mai', 'Ping River sanctuary', '12,000 to 28,000+ THB'],
          ],
        },
      },
      {
        id: 'koh-kood',
        title: 'Koh Kood and the eastern Gulf',
        paragraphs: ['One ultra-luxury island stay. Treat it as its own trip, not a Phuket add-on.'],
        bullets: [
          '**Koh Kood north eco-cove:** Clear November to April water and no mass nightlife. Soneva private Cessna to Koh Mai Si, or Trat plus a boat.',
          '**Koh Chang and Hua Hin:** Busier coasts. Different products. Do not substitute them for this hideaway.',
        ],
        table: {
          headers: ['Rank', 'Resort', 'Zone', '2026 night band'],
          rows: [
            ['1', 'Soneva Kiri', 'Koh Kood private-plane eco-villas', '55,000 to 180,000+ THB'],
          ],
        },
      },
    ],
    portraits: RESORT_RANKED.map((row) => card(row.title, row.href, row.photo)),
  };
}

export function applyInterestPortraits(page: Page): Page {
  const list = INTEREST_PORTRAITS[page.path] || NIGHTLIFE_SIBLINGS[page.path];
  if (!list) return page;
  return { ...page, portraits: uniquifyPortraits(list.map((row) => card(row.title, row.href, row.photo)), page.photo) };
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
  if (/railay|phra nang|ao nang|hong/.test(t)) return '/photos/railay.jpg';
  if (/maya|phi phi/.test(t)) return '/photos/phi-phi.jpg';
  if (/lanta/.test(t)) return '/photos/koh-lanta.jpg';
  if (/lipe/.test(t)) return '/photos/koh-lipe.jpg';
  if (/ang thong/.test(t)) return '/photos/ang-thong.jpg';
  if (/phangan/.test(t)) return '/photos/koh-phangan.jpg';
  if (/koh tao|dive/.test(t)) return '/photos/koh-tao.jpg';
  if (/doi suthep|bua thong|baan dam|golden triangle|mae rim/.test(t)) return '/photos/doi-suthep.jpg';
  return undefined;
}

export function fixDayPhotos(page: Page): Page {
  if (!page.days?.length) return page;
  const mapped = DAY_PHOTO_FIX[page.path] || {};
  const used = new Set<string>(page.photo ? [page.photo] : []);
  const days = page.days.map((day) => {
    let photo = mapped[day.n] || photoFromKeywords(day.title, day.body) || day.photo;
    const region = dayRegion(day.title, day.body);
    if (region === 'south' && BANGKOK_TEMPLE_PHOTOS.has(photo)) {
      photo = SOUTH_POOL.find((p) => !used.has(p)) || '/photos/railay.jpg';
    }
    if (region === 'north' && BANGKOK_TEMPLE_PHOTOS.has(photo) && !photo.includes('doi-suthep')) {
      photo = NORTH_POOL.find((p) => !used.has(p)) || '/photos/doi-suthep.jpg';
    }
    if (used.has(photo)) {
      const pool = region === 'south' ? SOUTH_POOL : region === 'north' ? NORTH_POOL : PHOTO_POOL;
      const next = pool.find((p) => !used.has(p) && p !== page.photo);
      if (next) photo = next;
    }
    used.add(photo);
    return { ...day, photo };
  });
  return { ...page, days };
}

export function uniquifyPortraits(items: Portrait[], hero?: string): Portrait[] {
  const used = new Set<string>(hero ? [hero] : []);
  return items.map((item) => {
    let photo = item.photo;
    if (used.has(photo)) {
      const next = PHOTO_POOL.find((p) => !used.has(p));
      if (next) photo = next;
    }
    used.add(photo);
    return { ...item, photo };
  });
}

function stayCityFor(page: Page): StayCity {
  const path = page.path;
  if (path.includes('phuket') || path.includes('khao-lak') || path.includes('yao')) return 'phuket';
  if (path.includes('krabi') || path.includes('railay') || path.includes('lanta') || path.includes('phi-phi')) return 'krabi';
  if (path.includes('samui') || path.includes('phangan') || path.includes('tao')) return 'koh-samui';
  if (path.includes('chiang-mai') || path.includes('nimman') || path.includes('pai')) return 'chiang-mai';
  if (path.includes('khao-sok') || path.includes('cheow')) return 'khao-lak';
  if (path.includes('kood') || path.includes('soneva')) return 'koh-kood';
  if (path.includes('chang')) return 'koh-chang';
  if (path.includes('hua-hin')) return 'hua-hin';
  if (path.includes('ayutthaya')) return 'ayutthaya';
  if (path.includes('kanchanaburi')) return 'kanchanaburi';
  if (path.includes('chiang-rai')) return 'chiang-rai';
  return 'bangkok';
}

export function uniquifyAffiliates(page: Page): Page {
  const rows = [...(page.affiliates || [])];
  if (!rows.length) return page;
  if (rows.length === 1 && page.path !== '/about' && page.path !== '/privacy') {
    const firstIsKlook = rows[0].partner === 'klook';
    if (firstIsKlook) {
      rows.push({
        title: 'Search nearby stays',
        kicker: 'Trip.com',
        body: 'Compare live 2026 hotel rates and free-cancellation rooms on Trip.com.',
        href: stayLink(stayCityFor(page)),
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
  const used = new Set<string>(page.photo ? [page.photo] : []);
  const affiliates: Affiliate[] = rows.map((row) => {
    let photo = row.photo;
    if (!photo || used.has(photo) || photo === page.photo) {
      const next = PHOTO_POOL.find((p) => !used.has(p) && p !== page.photo);
      if (next) photo = next;
    }
    used.add(photo);
    return { ...row, photo };
  });
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
    '**Catch and Cafe del Mar:** Named west-coast rooms. Recheck the daybed page the week you travel.',
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
    '**Royal event closures:** Recheck the morning of. Wat Pho often still opens.',
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

export function applyWave16Finish(page: Page): Page {
  let next = stripBannedCopy(page);
  next = applyResortLivingHub(next);
  next = applyInterestPortraits(next);
  next = structureCopy(next);
  next = applyDepthPad(next);
  next = fixDayPhotos(next);
  if (next.portraits?.length) {
    next = { ...next, portraits: uniquifyPortraits(next.portraits, next.photo) };
  }
  next = uniquifyAffiliates(next);
  next = { ...next, photoCredit: photoCreditFor(next.photo) };
  return next;
}
