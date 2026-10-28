export type PlaceAttraction = {
  slug: string;
  name: string;
  nameLocal: string;
  summary: string;
  href: string;
  photo?: string;
  timeNeeded: string;
  fee: string;
  dots: number;
};

export const PLACE_PAGES = [
  '/bangkok',
  '/chiang-mai',
  '/phuket',
  '/koh-samui',
  '/krabi',
  '/ayutthaya',
  '/khao-sok',
  '/chiang-rai',
  '/koh-phangan',
  '/koh-tao',
  '/hua-hin',
  '/pattaya',
  '/kanchanaburi',
  '/sukhothai',
  '/pai',
  '/koh-lanta',
  '/koh-phi-phi',
  '/koh-lipe',
  '/khao-lak',
  '/koh-chang',
  '/koh-kood',
  '/khao-yai',
] as const;

export type PlacePath = (typeof PLACE_PAGES)[number];

export function isPlacePage(path: string): path is PlacePath {
  return (PLACE_PAGES as readonly string[]).includes(path);
}

export const PLACE_META: Record<
  PlacePath,
  { nameLocal: string; region: string; stayCity: string; foodHref: string; nightlifeHref?: string }
> = {
  '/bangkok': {
    nameLocal: 'กรุงเทพฯ',
    region: 'central',
    stayCity: 'bangkok',
    foodHref: '/thai-food/bangkok',
    nightlifeHref: '/interests/nightlife',
  },
  '/chiang-mai': {
    nameLocal: 'เชียงใหม่',
    region: 'north',
    stayCity: 'chiang-mai',
    foodHref: '/thai-food/chiang-mai',
    nightlifeHref: '/chiang-mai/nimmanhaemin',
  },
  '/phuket': {
    nameLocal: 'ภูเก็ต',
    region: 'andaman',
    stayCity: 'phuket',
    foodHref: '/thai-food/phuket',
    nightlifeHref: '/interests/nightlife/phuket-beach-clubs',
  },
  '/koh-samui': {
    nameLocal: 'เกาะสมุย',
    region: 'gulf',
    stayCity: 'koh-samui',
    foodHref: '/thai-food/koh-samui',
    nightlifeHref: '/interests/nightlife/koh-samui-beach-clubs',
  },
  '/krabi': {
    nameLocal: 'กระบี่',
    region: 'andaman',
    stayCity: 'krabi',
    foodHref: '/thai-food/krabi',
  },
  '/ayutthaya': {
    nameLocal: 'พระนครศรีอยุธยา',
    region: 'central',
    stayCity: 'ayutthaya',
    foodHref: '/thai-food/bangkok',
  },
  '/khao-sok': {
    nameLocal: 'เขาสก',
    region: 'andaman',
    stayCity: 'khao-lak',
    foodHref: '/thai-food/krabi',
  },
  '/chiang-rai': {
    nameLocal: 'เชียงราย',
    region: 'north',
    stayCity: 'chiang-rai',
    foodHref: '/thai-food/chiang-mai',
  },
  '/koh-phangan': {
    nameLocal: 'เกาะพะงัน',
    region: 'gulf',
    stayCity: 'koh-phangan',
    foodHref: '/thai-food/koh-samui',
    nightlifeHref: '/interests/nightlife/koh-samui-beach-clubs',
  },
  '/koh-tao': {
    nameLocal: 'เกาะเต่า',
    region: 'gulf',
    stayCity: 'koh-tao',
    foodHref: '/thai-food/koh-samui',
  },
  '/hua-hin': {
    nameLocal: 'หัวหิน',
    region: 'central',
    stayCity: 'hua-hin',
    foodHref: '/thai-food/bangkok',
  },
  '/pattaya': {
    nameLocal: 'พัทยา',
    region: 'east',
    stayCity: 'pattaya',
    foodHref: '/thai-food/bangkok',
    nightlifeHref: '/interests/nightlife',
  },
  '/kanchanaburi': {
    nameLocal: 'กาญจนบุรี',
    region: 'central',
    stayCity: 'kanchanaburi',
    foodHref: '/thai-food/bangkok',
  },
  '/sukhothai': {
    nameLocal: 'สุโขทัย',
    region: 'north',
    stayCity: 'sukhothai',
    foodHref: '/thai-food/chiang-mai',
  },
  '/pai': {
    nameLocal: 'ปาย',
    region: 'north',
    stayCity: 'pai',
    foodHref: '/thai-food/chiang-mai',
  },
  '/koh-lanta': {
    nameLocal: 'เกาะลันตา',
    region: 'andaman',
    stayCity: 'koh-lanta',
    foodHref: '/thai-food/krabi',
  },
  '/koh-phi-phi': {
    nameLocal: 'เกาะพีพี',
    region: 'andaman',
    stayCity: 'krabi',
    foodHref: '/thai-food/krabi',
  },
  '/koh-lipe': {
    nameLocal: 'เกาะหลีเป๊ะ',
    region: 'andaman',
    stayCity: 'koh-lipe',
    foodHref: '/thai-food/krabi',
  },
  '/khao-lak': {
    nameLocal: 'เขาหลัก',
    region: 'andaman',
    stayCity: 'khao-lak',
    foodHref: '/thai-food/phuket',
  },
  '/koh-chang': {
    nameLocal: 'เกาะช้าง',
    region: 'east',
    stayCity: 'koh-chang',
    foodHref: '/thai-food/isan',
  },
  '/koh-kood': {
    nameLocal: 'เกาะกูด',
    region: 'east',
    stayCity: 'koh-kood',
    foodHref: '/thai-food/isan',
  },
  '/khao-yai': {
    nameLocal: 'เขาใหญ่',
    region: 'east',
    stayCity: 'bangkok',
    foodHref: '/thai-food/isan',
  },
};

function a(
  slug: string,
  name: string,
  nameLocal: string,
  summary: string,
  href: string,
  photo: string | undefined,
  timeNeeded: string,
  fee: string,
  dots: number,
): PlaceAttraction {
  return { slug, name, nameLocal, summary, href, photo, timeNeeded, fee, dots };
}

export const ATTRACTIONS: Record<PlacePath, PlaceAttraction[]> = {
  '/bangkok': [
    a('grand-palace', 'Grand Palace and Wat Phra Kaew', 'พระบรมมหาราชวัง', 'The royal compound and Wat Phra Kaew open at Mani Noppharat Gate from 08:30 to 15:30. Foreign tickets are 500 THB. Pair Wat Pho after this visit, not Chatuchak.', '/attractions/grand-palace-and-wat-phra-kaew', '/photos/grand-palace.jpg', '2 to 3 hours', '500 THB', 5),
    a('wat-pho', 'Wat Pho', 'วัดโพธิ์', 'Wat Pho is known for the Reclining Buddha and the massage school next to the Grand Palace. The temple ticket is 300 THB, and a 30-minute table at the school desk is 340 THB.', '/attractions/wat-pho', '/photos/wat-pho.jpg', '90 minutes', '300 THB', 5),
    a('wat-arun', 'Wat Arun', 'วัดอรุณ', 'Wat Arun is the riverside prang you reach from Tha Tien on the 5 THB orange ferry. Climbing the prang costs 200 THB. Go before 09:00 or at dusk.', '/attractions/wat-arun', '/photos/wat-arun-night.jpg', '1 hour', '200 THB', 5),
    a('chatuchak', 'Chatuchak Weekend Market', 'ตลาดนัดจตุจักร', 'Chatuchak is the Saturday and Sunday market at BTS Mo Chit or MRT Chatuchak Park. Arrive between 09:00 and 12:00 if you want to walk before the heat.', '/attractions/chatuchak-weekend-market', '/photos/chatuchak.jpg', '3 to 4 hours', 'Free entry', 4),
    a('jim-thompson', 'Jim Thompson House', 'บ้านจิม ทอมป์สัน', 'Jim Thompson House is the teak-house museum off BTS National Stadium. Book a timed slot. A 2026 ticket is about 200 THB.', '/bangkok/siam-silom', '/photos/jim-thompson.jpg', '75 minutes', '200 THB', 4),
    a('yaowarat', 'Yaowarat Chinatown', 'เยาวราช', 'Yaowarat is the dinner walk from MRT Wat Mangkon after 18:00. Monday stalls thin out, so bring cash or PromptPay and skip that night if you want a full street.', '/thai-food/yaowarat-chinatown-food-walk', '/photos/yaowarat.jpg', '2 to 3 hours', 'Plates 60 to 100 THB', 4),
    a('floating', 'Damnoen Saduak and Amphawa', 'ดำเนินสะดวก / อัมพวา', 'These are the two canal days from Bangkok. Amphawa is the Friday to Sunday evening market. Pick one, and do not try both on the same trip.', '/attractions/damnoen-saduak-and-amphawa-floating-markets', '/photos/riverside.jpg', 'Half day', 'Tour 800 to 1,500 THB', 3),
    a('muay-thai', 'Rajadamnern and Lumpinee', 'ราชดำเนิน / ลุมพินี', 'Rajadamnern and Lumpinee are the stadium fight cards, not a soi gym tourist bout. Book a 2026 card. Tickets start around 1,000 THB.', '/attractions/muay-thai-stadiums-rajadamnern-and-lumpinee', '/photos/silom-night.jpg', '3 hours', '1,000 to 2,000 THB', 4),
    a('lumphini-park', 'Lumphini Park', 'สวนลุมพินี', 'Lumphini Park is the free dawn walk for monitor lizards from MRT Lumphini or Silom. Pair it with a Silom lunch, not a palace morning.', '/bangkok/silom-and-sathorn', '/photos/lumphini.jpg', '1 hour', 'Free', 3),
    a('chinatown-day', 'Talat Noi and Charoenkrung', 'ตลาดน้อย', 'Talat Noi is the morning Chinese shophouse walk, and Charoenkrung turns into warehouse bars at night. Do not stack both with a Yaowarat dinner in the same 14 hours.', '/bangkok/riverside-charoenkrung', '/photos/chinatown-day.jpg', '2 hours', 'Free to walk', 3),
    a('sukhumvit', 'Sukhumvit and Thonglor', 'สุขุมวิท / ทองหล่อ', 'Sukhumvit from BTS Nana to Ekkamai is the first-timer hotel strip. Come for dinner density, not temples. A 2026 BTS tap on this line is 17 to 47 THB.', '/bangkok/sukhumvit-thonglor', '/photos/sukhumvit.jpg', 'Evening', 'BTS 17 to 47 THB', 3),
    a('ari', 'Ari cafes', 'อารีย์', 'Ari is the cafe neighbourhood fifteen minutes north of Siam. It suits a half day of coffee at 80 to 150 THB. Skip it if you only have two Bangkok nights.', '/bangkok/ari', '/photos/ari.jpg', 'Half day', 'Coffee 80 to 150 THB', 3),
  ],
  '/chiang-mai': [
    a('doi-suthep', 'Wat Phra That Doi Suthep', 'วัดพระธาตุดอยสุเทพ', 'Doi Suthep is the gold chedi above Chiang Mai. Foreign tickets are 30 THB, then you take the 306-step naga stair or the tram. A songthaew from the Old City takes about 40 minutes.', '/attractions/wat-phra-that-doi-suthep', '/photos/doi-suthep.jpg', 'Half day', '30 THB', 5),
    a('old-city', 'Old City temples', 'เมืองเก่า', 'The Old City is the moated square of Wat Phra Singh and Wat Chedi Luang. Walk at 07:00. Sunday walking street closes Ratchadamnoen later in the day.', '/chiang-mai/old-city', '/photos/chiang-mai-old-city.jpg', '3 hours', '20 to 50 THB each', 5),
    a('sunday-street', 'Sunday Walking Street', 'ถนนคนเดินวันอาทิตย์', 'Sunday Walking Street fills Ratchadamnoen from late afternoon with craft and snacks. It is not a temple substitute. Grab to the moat and do not scooter the stalls.', '/chiang-mai/old-city', '/photos/night-market-cm.jpg', '2 hours', 'Free entry', 4),
    a('nimman', 'Nimmanhaemin', 'นิมมานเหมินท์', 'Nimmanhaemin is the cafe strip west of the moat. Maya is air-con shopping, not khao soi. Pour-over runs 80 to 150 THB.', '/chiang-mai/nimmanhaemin', '/photos/nimman.jpg', 'Evening', 'Coffee 80 to 150 THB', 3),
    a('elephants', 'Ethical elephant sanctuaries', 'ศูนย์ช้าง', 'Book a no-ride sanctuary day if elephant welfare is why you came north. Half-day vans leave the Old City. Confirm the 2026 fee on the voucher, usually 2,000 to 3,500 THB.', '/attractions/chiang-mai-ethical-elephant-sanctuaries', '/photos/northern.jpg', 'Half day', '2,000 to 3,500 THB', 4),
    a('inthanon', 'Doi Inthanon', 'ดอยอินทนนท์', 'Doi Inthanon is the mountain day: 300 THB park fee plus 100 THB at the Twin Royal Pagodas. Leave by 07:00 and give it the whole day.', '/chiang-mai/doi-inthanon', '/photos/chiang-mai.jpg', 'Full day', '300 THB', 4),
    a('night-bazaar', 'Night bazaar', 'ไนท์บาซาร์', 'The night bazaar on Chang Khlan after 18:00 is a tourist stall strip. Use it for a cheap dinner at 60 to 120 THB, then leave.', '/thai-food/chiang-mai-khao-soi-and-markets', '/photos/thai-food-night-markets.jpg', '90 minutes', 'Plates 60 to 120 THB', 3),
    a('wat-phra-singh', 'Wat Phra Singh', 'วัดพระสิงห์', 'Wat Phra Singh is the lion wat at the west end of Ratchadamnoen. Booths often ask 20 to 50 THB. It is the first walk of an Old City morning.', '/chiang-mai/old-city', '/photos/wat-phra-singh.jpg', '45 minutes', '20 to 50 THB', 4),
  ],
  '/phuket': [
    a('old-town', 'Phuket Old Town', 'เมืองเก่าภูเก็ต', 'Phuket Old Town is the Sino-Portuguese shophouse grid for a Hokkien lunch. Use a weekday morning. Beach grills sit on a different map.', '/thai-food/phuket-old-town-hokkien-and-peranakan-food', '/photos/phuket.jpg', '3 hours', 'Free to walk', 4),
    a('kata-karon', 'Kata and Karon', 'กะตะ / กะรน', 'Kata and Karon are the family beaches south of Patong, with walkable sand. Swell hits from May to October.', '/phuket/kata-and-karon', '/photos/kata-and-karon.jpg', 'Full day', 'Free beach', 4),
    a('kamala-surin', 'Kamala and Surin', 'กมลา / สุรินทร์', 'Kamala and Surin are the quieter west-coast coves. Daybeds from about 2,000 THB book out on Saturday in high season.', '/phuket/kamala-and-surin', '/photos/kamala-and-surin.jpg', 'Full day', 'Daybed 2,000 THB+', 4),
    a('rawai', 'Rawai and Nai Harn', 'ราไวย์ / ในหาน', 'Rawai and Nai Harn sit on the south tip. Swim at Nai Harn and use Rawai for longtail desks to nearby islands, usually 1,500 to 2,500 THB.', '/phuket/rawai-and-nai-harn', '/photos/rawai-and-nai-harn.jpg', 'Half day', 'Longtail 1,500 to 2,500 THB', 3),
    a('phang-nga', 'Phang Nga Bay', 'อ่าวพังงา', 'Phang Nga Bay is the James Bond Island boat day. The park fee is 300 THB on top of the tour. Go from Phuket or Krabi, not both.', '/attractions/phang-nga-bay-and-james-bond-island', '/photos/longtail-andaman.jpg', 'Full day', 'Tour 1,500 to 2,500 THB', 5),
    a('phi-phi-day', 'Phi Phi day boat', 'เกาะพีพี', 'A Phi Phi day boat adds a 400 THB Maya Bay park fee. The useful window is November to April. Sleep on Phi Phi only if you want a second day.', '/attractions/phi-phi-islands-and-maya-bay', '/photos/phi-phi.jpg', 'Full day', 'Tour plus 400 THB', 4),
    a('patong-night', 'Patong night strip', 'ป่าตอง', 'Patong is Bangla Road after 21:00, with drinks from about 150 THB. Stay here if that strip is the trip. Sleep elsewhere if it is not.', '/interests/nightlife/phuket-beach-clubs', '/photos/patong-night.jpg', 'Evening', 'Drinks from 150 THB', 3),
    a('big-buddha', 'Big Buddha', 'พระใหญ่', 'Phuket Big Buddha is the free Nakkerd Hill viewpoint with a donation box. It suits a morning with Wat Chalong, not a boat day.', '/phuket', '/photos/big-buddha-phuket.jpg', '90 minutes', 'Free', 3),
  ],
  '/koh-samui': [
    a('chaweng', 'Chaweng Beach', 'เฉวง', 'Chaweng is the loud sand and the 24-hour strip. Sleep here for dinner density. USM is 15 to 25 minutes away.', '/koh-samui/chaweng', '/photos/chaweng.jpg', 'Full day', 'Free beach', 4),
    a('lamai', 'Lamai', 'ละไม', 'Lamai sits south of Chaweng with a quieter evening and a still-easy grocery run. Sunday sessions sit on this coast.', '/koh-samui/lamai', '/photos/lamai.jpg', 'Full day', 'Free beach', 3),
    a('ang-thong', 'Ang Thong Marine Park', 'หมู่เกาะอ่างทอง', 'Ang Thong is a booked boat day with a 300 THB park fee and no public ferry. The park closes from 1 November to 15 December, so book the day before.', '/koh-samui/ang-thong-marine-park', '/photos/ang-thong.jpg', 'Full day', 'Tour plus 300 THB', 5),
    a('bophut', "Fisherman's Village", 'บ่อผุด', 'Fisherman\'s Village is the Friday walking street in Bophut. It is useful if you already sleep on that bay. The car from Chaweng is 20 to 40 minutes.', '/interests/nightlife/samui-bophut-lamai', '/photos/koh-samui.jpg', 'Evening', 'Free to walk', 3),
    a('na-muang', 'Na Muang waterfall', 'น้ำตกนาเมือง', 'Na Muang is the inland waterfall half day by songthaew or a booked car, usually 20 to 50 THB. Do not add Ang Thong on the same date.', '/koh-samui', undefined, '3 hours', '20 to 50 THB', 3),
    a('big-buddha-samui', 'Big Buddha', 'พระใหญ่สมุย', 'Samui Big Buddha sits on the north-east tip near Choeng Mon with free grounds. Pair it with breakfast, not a boat.', '/koh-samui', '/photos/resort-six-senses-samui.jpg', '1 hour', 'Free', 3),
    a('lipa-noi', 'Lipa Noi sunset', 'ลิปะน้อย', 'Lipa Noi is the west-coast sundown sand. Nikki Beach daybeds run 2,000 to 4,000 THB. Sleep on the same coast if that evening is the point.', '/interests/nightlife/koh-samui-beach-clubs', '/photos/chaweng-night.jpg', 'Evening', 'Daybed 2,000 THB+', 3),
    a('lomprayah', 'Thong Yang pier', 'ท่าเรือท้องหยาง', 'Thong Yang is the Lomprayah and Seatran pier to Phangan and Tao. Read the operator name. Boats cost 400 to 700 THB and move with weather.', '/get-there/bangkok-to-koh-samui', '/photos/ferry-gulf.jpg', 'Transfer', 'Boat 400 to 700 THB', 3),
  ],
  '/krabi': [
    a('railay', 'Railay and Phra Nang', 'ไร่เลย์ / พระนาง', 'Railay and Phra Nang are the no-road peninsula you reach by longtail, 100 THB a person from Ao Nang. Climb or swim. Do not add Phi Phi the same day.', '/attractions/railay-beach-and-phra-nang-cave', '/photos/railay.jpg', 'Half to full day', 'Longtail 100 THB', 5),
    a('ao-nang', 'Ao Nang', 'อ่าวนาง', 'Ao Nang is the mainland base for hotels, longtail desks, and the walking street. Sleep here unless Railay is the whole trip.', '/krabi', '/photos/krabi.jpg', 'Full day', 'Free beach', 4),
    a('hong', 'Hong Island', 'เกาะห้อง', 'Hong Island is the national-park longtail day with a 300 THB park fee. The useful window is November to April. Leave by 08:00.', '/krabi', '/photos/longtail-andaman.jpg', 'Full day', 'Tour plus 300 THB', 4),
    a('phi-phi-krabi', 'Phi Phi from Krabi', 'เกาะพีพี', 'Phi Phi speedboats leave from Klong Jilad Pier. Maya Bay adds 400 THB. Treat it as one sea day.', '/attractions/phi-phi-islands-and-maya-bay', '/photos/phi-phi.jpg', 'Full day', 'Tour plus 400 THB', 4),
    a('tiger-cave', 'Tiger Cave Temple', 'วัดถ้ำเสือ', 'Tiger Cave Temple (Wat Tham Suea) is the 1,237-step climb above Krabi Town. TAT does not list a posted gate fee, so bring small notes for a donation or a possible 50 THB collection. Start at 07:00, and skip it if your knees already did Railay.', '/krabi', '/photos/tiger-cave.jpg', '2 to 3 hours', 'Donation', 3),
    a('nong-thalay', 'Nong Thalay viewpoint', 'หนองทะเล', 'Nong Thalay is the karst viewpoint west of Krabi Town. Hire a car for 600 to 1,000 THB. It is not a first-morning walk.', '/krabi', '/photos/khao-lak.jpg', '90 minutes', 'Car 600 to 1,000 THB', 3),
    a('railay-west', 'Railay West beach', 'หาดไร่เลย์ตะวันตก', 'Railay West is the sand the longtail lands on, with bars and climbs. East Railay is the other pier when a swell hits.', '/attractions/railay-beach-and-phra-nang-cave', '/photos/resort-rayavadee.jpg', 'Half day', 'Longtail 100 THB', 4),
    a('tubkaek', 'Tubkaek Beach', 'หาดทับแขก', 'Tubkaek sits west of Ao Nang with quieter hotels. Phulay Bay is on this coast.', '/krabi', '/photos/resort-phulay-bay.jpg', 'Full day', 'Free beach', 3),
  ],
  '/ayutthaya': [
    a('chaiwatthanaram', 'Wat Chaiwatthanaram', 'วัดไชยวัฒนาราม', 'Wat Chaiwatthanaram is the river prang at sunset. The ticket is 50 THB. Most first trips day-trip from Bangkok on the 05:00 to 08:00 train.', '/ayutthaya', '/photos/ayutthaya.jpg', '1 hour', '50 THB', 5),
    a('mahathat', 'Wat Mahathat', 'วัดมหาธาตุ', 'Wat Mahathat is the tree-root Buddha head, with a 50 THB ticket. Go early. Tuk-tuk loops quote 200 to 400 THB for a set.', '/ayutthaya', '/photos/wat-mahathat-ayu.jpg', '45 minutes', '50 THB', 5),
    a('phra-si-sanphet', 'Wat Phra Si Sanphet', 'วัดพระศรีสรรเพชญ์', 'Wat Phra Si Sanphet is the three-chedi ruin in the old royal palace grounds. The ticket is 50 THB. Pair it with Mahathat, not a night market.', '/ayutthaya', '/photos/wat-phra-si-sanphet.jpg', '1 hour', '50 THB', 4),
    a('bang-pa-in', 'Bang Pa-In Palace', 'พระราชวังบางปะอิน', 'Bang Pa-In Palace is the summer palace on the train line south of Ayutthaya island. Foreign tickets sit around 100 THB. Add it if you overnight, not as a squeeze after a ruin loop.', '/ayutthaya', '/photos/bang-pa-in.jpg', '90 minutes', '100 THB', 3),
    a('night-market-ayu', 'Ayutthaya night market', 'ตลาดน้ำยามเย็น', 'The night market is useful only if you stay the night. Plates run 40 to 80 THB. Otherwise take the last train back to Bangkok.', '/ayutthaya', '/photos/thai-food-night-markets.jpg', '1 hour', 'Plates 40 to 80 THB', 3),
    a('chao-phraya', 'River longtail', 'แม่น้ำเจ้าพระยา', 'A Chao Phraya longtail is worth hiring only if walking the island in the heat failed. Agree a 400 to 800 THB loop price first.', '/ayutthaya', '/photos/ferry-gulf.jpg', '1 hour', '400 to 800 THB', 3),
  ],
  '/khao-sok': [
    a('cheow-lan', 'Cheow Lan Lake', 'เชี่ยวหลาน', 'Cheow Lan Lake starts at Ratchaprapha pier, not the Highway 401 village. A longtail is 1,800 to 2,500 THB. Sleep on a raft one night if you can.', '/attractions/cheow-lan-lake-khao-sok', '/photos/cheow-lan.jpg', '1 or 2 days', 'Longtail 1,800 to 2,500 THB', 5),
    a('park-trails', 'Khao Sok trails', 'อุทยานเขาสก', 'The park trails cost 300 THB at the gate. Night-safari vans leave the 401 village. Bring a headlamp if you sleep on a raft.', '/khao-sok', '/photos/khao-sok.jpg', 'Half day', '300 THB', 4),
    a('401-village', 'Highway 401 village', 'บ้านเขาสก', 'The Highway 401 village is the 7-Eleven base if you are not on the lake. Rooms run 800 to 1,800 THB. It is a different door from Ratchaprapha.', '/khao-sok', '/photos/get-there.jpg', 'Overnight', 'Room 800 to 1,800 THB', 3),
    a('khao-sok-to-krabi', 'South fork to Krabi', 'กระบี่', 'The van south to Krabi takes about 2.5 to 3 hours and costs 300 to 500 THB. Do not add a lake night and a Railay climb on the same date.', '/get-there/phuket-to-khao-sok', '/photos/krabi.jpg', 'Transfer', 'Van 300 to 500 THB', 3),
    a('urt', 'Surat Thani arrival', 'สุราษฎร์ธานี', 'Most people land at URT and take a van. The ride to the village is about 2 hours and 200 to 400 THB.', '/get-there/surat-thani-to-khao-sok', '/photos/itineraries.jpg', '2 hours', 'Van 200 to 400 THB', 3),
    a('khlong-sok', 'Khlong Sok river', 'คลองสก', 'Khlong Sok is the tube or canoe stretch from the village. It is a 300 to 600 THB half day if the lake is sold out.', '/khao-sok', '/photos/longtail-andaman.jpg', '3 hours', '300 to 600 THB', 3),
  ],
  '/chiang-rai': [
    a('white-temple', 'White Temple', 'วัดร่องขุ่น', 'The White Temple (Wat Rong Khun) is 100 THB and sits south of town, 20 to 30 minutes by car. Pair it with the Blue Temple, not a Pai drive.', '/attractions/white-temple-wat-rong-khun-and-blue-temple', '/photos/chiang-rai.jpg', '90 minutes', '100 THB', 5),
    a('blue-temple', 'Blue Temple', 'วัดร่องเสือเต้น', 'The Blue Temple is free or a small donation, north of the river. It is about 15 minutes from the clock tower.', '/attractions/white-temple-wat-rong-khun-and-blue-temple', '/photos/blue-temple.jpg', '45 minutes', 'Donation', 4),
    a('clock-tower', 'Clock tower', 'หอนาฬิกา', 'The clock tower runs a free night light show on the hour. It is useful if you overnight. Skip it if the van returns to Chiang Mai at 16:00.', '/chiang-rai', '/photos/nightlife.jpg', '30 minutes', 'Free', 3),
    a('baan-dam', 'Baan Dam Museum', 'บ้านดำ', 'Baan Dam is Thawan Duchanee black-house museum north of Chiang Rai town. Tickets sit around 80 THB. Use it as one more stop after the White Temple, not a third wat.', '/chiang-rai', '/photos/baan-dam.jpg', '1 hour', '80 THB', 3),
    a('mekong', 'Golden Triangle', 'สามเหลี่ยมทองคำ', 'The Golden Triangle is a 60 to 90 minute drive north and a 1,500 to 2,500 THB car. Add it only if you have a second night. It is not a first-day extra.', '/chiang-rai', '/photos/ferry-gulf.jpg', 'Half day', 'Car 1,500 to 2,500 THB', 3),
    a('night-bazaar-cr', 'Night bazaar', 'ไนท์บาซาร์เชียงราย', 'The Chiang Rai night bazaar is walkable from most town hotels. Use it for dinner at 50 to 100 THB after the White Temple.', '/chiang-rai', '/photos/thai-food-lanna.jpg', '90 minutes', 'Plates 50 to 100 THB', 3),
  ],
  '/koh-phangan': [
    a('haad-rin', 'Haad Rin', 'หาดริ้น', 'Haad Rin is the Full Moon beach. Book the boat to the right pier. Party week is a different island from a quiet west-coast stay.', '/koh-phangan', '/photos/koh-phangan.jpg', 'Evening', 'Party ticket varies', 4),
    a('thong-sala', 'Thong Sala', 'ทองศาลา', 'Thong Sala is the main pier. Read the operator name. Boats cost 400 to 700 THB, and Haad Rin landings are a different stop on party week.', '/get-there/bangkok-to-koh-phangan', '/photos/ferry-gulf.jpg', 'Arrival', 'Boat 400 to 700 THB', 3),
    a('thong-nai-pan', 'Thong Nai Pan', 'ท้องนายปาน', 'Thong Nai Pan is the east-cove stay. A taxi from Thong Sala is 600 to 1,000 THB. Shared songthaews thin out after dark.', '/koh-phangan', undefined, 'Full day', 'Taxi 600 to 1,000 THB', 4),
    a('srithanu', 'Srithanu and west coast', 'ศรีธนู', 'Srithanu and the west coast are the yoga and quiet-evening side of Koh Phangan. Stay here when you want the opposite calendar from Haad Rin party week.', '/koh-phangan', undefined, 'Full day', 'Free beach', 3),
    a('ang-thong-pgn', 'Ang Thong from Phangan', 'อ่างทอง', 'Ang Thong boats from Phangan visit the same park as the Samui boats. The park fee is 300 THB. Confirm the pier the night before.', '/koh-samui/ang-thong-marine-park', '/photos/ang-thong.jpg', 'Full day', 'Tour plus 300 THB', 4),
    a('bottle-beach', 'Bottle Beach', 'หาดขวด', 'Bottle Beach is the north cove, reached by a 100 to 200 THB boat or a steep road. It is not a first-afternoon add after a late ferry.', '/koh-phangan', undefined, 'Half day', 'Boat 100 to 200 THB', 3),
  ],
  '/koh-tao': [
    a('sairee', 'Sairee Beach', 'หาดทรายรี', 'Sairee is the dive-shop strip. Sleep here for the course week. An Open Water course is 9,500 to 12,000 THB.', '/koh-tao', '/photos/koh-tao.jpg', '3 to 4 days', 'PADI 9,500 to 12,000 THB', 5),
    a('mae-haad', 'Mae Haad pier', 'แม่หาด', 'Every boat lands at Mae Haad. The environmental charge is 20 THB. This is a practical village, not a postcard beach.', '/get-there/bangkok-to-koh-tao', '/photos/ferry-gulf.jpg', 'Arrival', '20 THB pier fee', 4),
    a('chalok', 'Chalok Baan Kao', 'โฉลกบ้านเก่า', 'Chalok Baan Kao is the south bay with fewer scooters at night. It sits farther from most dive boats.', '/koh-tao', undefined, 'Full day', 'Free beach', 3),
    a('shark-bay', 'Shark Bay and Hin Wong', 'อ่าวฉลาม', 'Shark Bay and Hin Wong are the east-side snorkel coves on steep roads. Rent a scooter for about 200 THB only if you already ride.', '/interests/diving-and-snorkeling', '/photos/longtail-andaman.jpg', 'Half day', 'Scooter 200 THB', 3),
    a('john-suwan', 'John Suwan viewpoint', 'จุดชมวิว', 'John Suwan is the free south viewpoint above Chalok. The walk takes 15 to 20 minutes. Go at 07:00.', '/koh-tao', undefined, '1 hour', 'Free', 3),
    a('ao-tanot', 'Ao Tanot', 'อ่าวโตนด', 'Ao Tanot is the east cove. Book a 300 to 500 THB pickup. It is not a walk from Mae Haad.', '/koh-tao', undefined, 'Half day', 'Taxi 300 to 500 THB', 3),
  ],
  '/hua-hin': [
    a('hua-hin-beach', 'Hua Hin Beach', 'หาดหัวหิน', 'Hua Hin Beach is the mainland Gulf sand that fills with Bangkok weekenders. The SRT train from the capital takes about 4 hours.', '/hua-hin', '/photos/hua-hin.jpg', 'Full day', 'Free beach', 4),
    a('cicada', 'Cicada Market', 'ซิเคด้า มาร์เก็ต', 'Cicada is the Friday to Sunday craft market. It is free to enter and is not a Chatuchak substitute.', '/hua-hin', '/photos/chatuchak.jpg', '2 hours', 'Free entry', 3),
    a('klai-kangwon', 'Klai Kangwon Palace', 'วังไกลกังวล', 'Klai Kangwon is the royal palace grounds when the gate is open. Check hours on the day. Pair it with the beach, not a night club.', '/hua-hin', undefined, '1 hour', 'Check gate', 3),
    a('sam-phraya', 'Khao Sam Roi Yot', 'เขาสามร้อยยอด', 'Khao Sam Roi Yot is the park day south of town, in the 200 THB band. Phraya Nakhon Cave is the famous stop.', '/hua-hin', '/photos/sam-roi-yot.jpg', 'Full day', '200 THB', 4),
    a('night-market-hh', 'Hua Hin night market', 'ตลาดโต้รุ่ง', 'The Hua Hin night market is the dinner walk near the train station. Plates run 50 to 120 THB.', '/hua-hin', '/photos/thai-food-night-markets.jpg', '90 minutes', 'Plates 50 to 120 THB', 3),
    a('train-hh', 'Hua Hin station', 'สถานีหัวหิน', 'Hua Hin station is the SRT stop from Bangkok, about 4 hours and 200 to 500 THB. Book a seat. Do not plan a same-day scooter loop.', '/plan/trains-and-ferries', '/photos/get-there.jpg', '4 hours', 'Train 200 to 500 THB', 3),
  ],
  '/pattaya': [
    a('sanctuary', 'Sanctuary of Truth', 'ปราสาทสัจธรรม', 'The Sanctuary of Truth is the teak carving hall on the north cape. Tickets are about 500 THB. Book it if that hall is why you came.', '/attractions/sanctuary-of-truth-pattaya', '/photos/sanctuary-truth.jpg', '2 hours', '500 THB', 4),
    a('jomtien', 'Jomtien Beach', 'จอมเทียน', 'Jomtien is the calmer gulf sand south of Walking Street. Sleep here if the city strip is not the trip.', '/pattaya', '/photos/jomtien.jpg', 'Full day', 'Free beach', 3),
    a('walking-street', 'Walking Street', 'วอล์คกิ้งสตรีท', 'Walking Street is the night strip. Go on purpose and sleep a taxi away if you want quiet.', '/interests/nightlife', '/photos/walking-street-pattaya.jpg', 'Evening', 'Cover varies', 3),
    a('koh-larn', 'Koh Larn', 'เกาะล้าน', 'Koh Larn is the day-trip island, 30 to 40 THB on the ferry from Bali Hai in about 45 minutes. It crowds on weekends.', '/pattaya', '/photos/koh-larn.jpg', 'Full day', 'Ferry 30 to 40 THB', 4),
    a('nong-nooch', 'Nong Nooch garden', 'หนองนุช', 'Nong Nooch is the south-of-town garden at about 500 THB. It is useful with kids, not a first-night add.', '/interests/family-travel-with-kids', '/photos/nong-nooch.jpg', 'Half day', '500 THB band', 3),
    a('naklua', 'Naklua and Wongamat', 'นาเกลือ', 'Naklua and Wongamat are the north hotels and quieter sand. The Sanctuary of Truth sits on this cape.', '/pattaya', '/photos/wongamat.jpg', 'Full day', 'Free beach', 3),
  ],
  '/kanchanaburi': [
    a('erawan', 'Erawan Falls', 'น้ำตกเอราวัณ', 'Erawan Falls is the seven-tier park day at 300 THB. Take bus 8170 from 08:00 and wear water shoes.', '/kanchanaburi/erawan-and-sai-yok', '/photos/erawan.jpg', 'Full day', '300 THB', 5),
    a('bridge', 'River Kwai bridge', 'สะพานข้ามแม่น้ำแคว', 'The River Kwai bridge is the free town landmark. The war museum next door is the context, not a selfie stop only.', '/kanchanaburi', '/photos/kanchanaburi.jpg', '1 hour', 'Free / museum fee', 4),
    a('sai-yok', 'Sai Yok', 'ไทรโยค', 'Sai Yok is the farther west park at 300 THB. Pair it with Erawan only if you overnight.', '/kanchanaburi/erawan-and-sai-yok', '/photos/khao-sok.jpg', 'Half day', '300 THB', 3),
    a('death-railway', 'Death Railway train', 'รถไฟสายมรณะ', 'The Death Railway is a short historic hop at 100 to 300 THB. Book the seat. It is not a Bangkok sleeper substitute.', '/get-there/bangkok-to-kanchanaburi', '/photos/get-there.jpg', '2 hours', 'Train 100 to 300 THB', 3),
    a('elephant-kwai', 'River camps', 'แพริมน้ำ', 'River camps are the raft hotels on the Kwai at 1,500 to 3,000 THB. Stay one night if you want dawn mist. A day trip already covers the bridge.', '/kanchanaburi', '/photos/riverside.jpg', 'Overnight', 'Raft 1,500 to 3,000 THB', 3),
    a('hellfire', 'Hellfire Pass', 'ช่องเขาขาด', 'Hellfire Pass is the museum and railway cutting 80 km west. Entry is free or a donation. Hire a car and give it one history day.', '/kanchanaburi', '/photos/plan.jpg', 'Half day', 'Free / donation', 4),
  ],
  '/sukhothai': [
    a('historical-park', 'Sukhothai Historical Park', 'อุทยานประวัติศาสตร์สุโขทัย', 'Sukhothai Historical Park is the bicycle loop of the old capital. Foreign tickets sit around 100 THB. Dawn beats midday.', '/sukhothai', '/photos/sukhothai.jpg', '3 to 4 hours', '100 THB', 5),
    a('wat-mahathat-suk', 'Wat Mahathat', 'วัดมหาธาตุ', 'Wat Mahathat is the main chedi of the old capital. It sits inside the central-zone ticket.', '/sukhothai', '/photos/ayutthaya.jpg', '45 minutes', 'Included', 4),
    a('si-satchanalai', 'Si Satchanalai', 'ศรีสัชนาลัย', 'Si Satchanalai is the second park north, also about 100 THB. Add it only if you overnight. It is not a same-morning extra.', '/sukhothai', '/photos/northern.jpg', 'Half day', '100 THB', 3),
    a('new-town', 'New Sukhothai', 'เมืองสุโขทัย', 'New Sukhothai is where you sleep and eat. A songthaew or Grab to the park is 20 to 40 THB. The night market plates run 40 to 80 THB.', '/sukhothai', '/photos/night-market-cm.jpg', 'Evening', 'Songthaew 20 to 40 THB', 3),
    a('ramkhamhaeng', 'Ramkhamhaeng museum', 'พิพิธภัณฑสถาน', 'The Ramkhamhaeng museum is the context stop before the ruins, around 150 THB. It is useful if the heat already won.', '/sukhothai', '/photos/old-city.jpg', '1 hour', '150 THB', 3),
    a('sukhothai-airport', 'From Bangkok', 'กรุงเทพฯ', 'Reach Sukhothai by bus or a flight to THS. A bus is 300 to 500 THB. The park is not a Bangkok day trip.', '/sukhothai', '/photos/itineraries.jpg', 'Transfer', 'Bus 300 to 500 THB', 3),
  ],
  '/pai': [
    a('pai-canyon', 'Pai Canyon', 'แปะแคนยอน', 'Pai Canyon is the free sunset viewpoint south of town. Do not add a Chiang Rai van the same day.', '/pai', '/photos/pai.jpg', '1 hour', 'Free', 4),
    a('pai-town', 'Walking street', 'ถนนคนเดินปาย', 'The Pai walking street is the night-stall strip at 50 to 100 THB a plate. Sleep in town if you came for the road, not a temple circuit.', '/pai', '/photos/night-market-cm.jpg', '2 hours', 'Plates 50 to 100 THB', 3),
    a('memorial-bridge', 'Pai Memorial Bridge', 'สะพานประวัติศาสตร์', 'Pai Memorial Bridge is the free World War II span west of town. It is a 10-minute ride on a scooter you already know how to ride.', '/pai', '/photos/kanchanaburi.jpg', '30 minutes', 'Free', 3),
    a('mae-yen', 'Mae Yen waterfall', 'น้ำตกแม่เย็น', 'Mae Yen is the east-of-town waterfall at about 20 THB. Give it a half day. Wet season changes the flow.', '/pai', '/photos/erawan.jpg', '3 hours', '20 THB', 3),
    a('pai-road', 'Route 1095', 'ถนน 1095', 'Route 1095 is the 762-curve road from Chiang Mai. The van takes about 3 to 4 hours and costs 180 to 250 THB. Do not self-drive at night on a first trip.', '/get-there/chiang-mai-to-pai', '/photos/northern.jpg', '3 to 4 hours', 'Van 180 to 250 THB', 4),
    a('yun-lai', 'Yun Lai viewpoint', 'ยูนลาย', 'Yun Lai is the free Chinese-village viewpoint. Go at dawn if you already sleep west of town.', '/pai', '/photos/chiang-mai.jpg', '90 minutes', 'Free', 3),
  ],
  '/koh-lanta': [
    a('klong-dao', 'Klong Dao', 'คลองดาว', 'Klong Dao is the north beach near Saladan and the usual first-night stay. The useful window is November to April.', '/koh-lanta', '/photos/koh-lanta.jpg', 'Full day', 'Free beach', 4),
    a('long-beach', 'Long Beach', 'หาดยาว', 'Long Beach is the next sand south of Klong Dao. You can walk it at low tide in some months.', '/koh-lanta', undefined, 'Full day', 'Free beach', 3),
    a('kantiang', 'Kantiang Bay', 'อ่าวกันตัง', 'Kantiang Bay is the quieter south sand, farther from the pier. Sleep here if you want fewer scooters.', '/koh-lanta', undefined, 'Full day', 'Free beach', 3),
    a('koh-haa', 'Koh Haa dives', 'เกาะห้า', 'Koh Haa is the November to April day-dive run from Saladan. Park fees sit on top of a 3,000 to 4,500 THB dive.', '/interests/diving-and-snorkeling', '/photos/koh-tao.jpg', 'Full day', 'Dive 3,000 to 4,500 THB', 4),
    a('old-town-lanta', 'Lanta Old Town', 'เมืองเก่าลันตา', 'Lanta Old Town is the east-coast wood-house walk. Use a half day if the west swell is ugly.', '/koh-lanta', '/photos/thai-food-southern.jpg', '2 hours', 'Free to walk', 3),
    a('saladan', 'Saladan pier', 'ศาลาด่าน', 'Saladan is the pier for boats from Krabi and Phi Phi at 400 to 800 THB. Read the operator name. Last boats move with weather.', '/get-there/krabi-to-koh-lanta', '/photos/ferry-gulf.jpg', 'Arrival', 'Boat 400 to 800 THB', 3),
  ],
  '/koh-phi-phi': [
    a('maya', 'Maya Bay', 'อ่าวมาหยา', 'Maya Bay uses timed entry and a 400 THB park fee. Morning boats leave Tonsai. Swim rules change, so read the board.', '/attractions/phi-phi-islands-and-maya-bay', undefined, 'Half day', '400 THB park fee', 5),
    a('tonsai', 'Tonsai village', 'ต้นไทร', 'Tonsai is the crowded village on Phi Phi Don. Rooms start around 1,200 THB. Sleep here only if the boat is the trip, because noise starts after 22:00.', '/koh-phi-phi', '/photos/tonsai.jpg', 'Overnight', 'Room 1,200 THB+', 3),
    a('long-beach-pp', 'Long Beach', 'หาดยาว', 'Long Beach is the east sand a 100 THB longtail from Tonsai. It stays quieter at night than the village.', '/koh-phi-phi', '/photos/long-beach-pp.jpg', 'Full day', 'Longtail 100 THB', 4),
    a('viking', 'Viking Cave viewpoint', 'ถ้ำไวกิ้ง', 'The Viking Cave viewpoint is the east-coast hike on Phi Phi Le. Go early. Park rules apply, and a donation is sometimes asked.', '/koh-phi-phi', '/photos/viking-cave.jpg', '2 hours', 'Included / donation', 3),
    a('mosquito', 'Phi Phi Le boat', 'พีพีเล', 'The Phi Phi Le loop covers Maya, Pileh, and Viking for 800 to 1,500 THB. Do not book two companies for the same water.', '/attractions/phi-phi-islands-and-maya-bay', '/photos/longtail-andaman.jpg', 'Full day', 'Tour 800 to 1,500 THB', 4),
    a('phi-phi-don', 'Phi Phi Don viewpoints', 'พีพีดอน', 'The two viewpoints above Tonsai sit in the 30 THB band. A 07:00 start beats the heat.', '/koh-phi-phi', '/photos/phi-phi-viewpoint.jpg', '90 minutes', '30 THB', 3),
  ],
  '/koh-lipe': [
    a('sunrise', 'Sunrise Beach', 'หาดซันไรส์', 'Sunrise Beach is the east sand, walkable from Walking Street. The useful window is November to April.', '/koh-lipe', '/photos/koh-lipe.jpg', 'Full day', 'Free beach', 4),
    a('sunset-lipe', 'Sunset Beach', 'หาดซันเซ็ต', 'Sunset Beach is the west sand, about 15 minutes on foot. It is the better evening than Sunrise.', '/koh-lipe', undefined, 'Evening', 'Free beach', 3),
    a('walking-street-lp', 'Walking Street', 'วอล์คกิ้งสตรีท', 'Walking Street is the island spine for ATMs and dinner. Plates run 80 to 150 THB. Cash still wins.', '/koh-lipe', '/photos/thai-food-southern.jpg', 'Evening', 'Plates 80 to 150 THB', 3),
    a('adang', 'Koh Adang', 'เกาะอาดัง', 'Koh Adang is the park longtail day in the 200 THB band, plus a boat from about 1,500 THB. Give it one quiet island day.', '/koh-lipe', '/photos/longtail-andaman.jpg', 'Full day', 'Longtail 1,500 THB+', 4),
    a('pak-bara', 'Pak Bara pier', 'ปากบารา', 'Pak Bara is the mainland door. Hat Yai plus a van is the usual path, then a 600 to 800 THB boat. Last boats move with weather.', '/koh-lipe', '/photos/ferry-gulf.jpg', 'Transfer', 'Boat 600 to 800 THB', 3),
    a('snorkel-lp', 'Lipe snorkel loop', 'ดำน้ำตื้น', 'The Lipe snorkel loop circles the island for 800 to 1,200 THB. Book one boat. Visibility is better from November to April.', '/interests/diving-and-snorkeling', '/photos/koh-lanta.jpg', 'Half day', '800 to 1,200 THB', 3),
  ],
  '/khao-lak': [
    a('similan', 'Similan Islands', 'หมู่เกาะสิมิลัน', 'The Similan Islands open from 15 October to 15 May. The park fee is 500 THB. Boats leave from Tab Lamu.', '/khao-lak/similan-and-surin-islands', '/photos/khao-lak.jpg', 'Full day', 'Tour plus 500 THB', 5),
    a('surin', 'Surin Islands', 'หมู่เกาะสุรินทร์', 'The Surin Islands share the same season window on a different boat. Do not stack them with Similan in two days.', '/khao-lak/similan-and-surin-islands', undefined, 'Full day', 'Tour plus 500 THB', 4),
    a('bang-niang', 'Bang Niang', 'บางเนียง', 'Bang Niang is the hotel strip. Sleep here for the 15 October to 15 May park window. Rooms start around 1,200 THB.', '/khao-lak', undefined, 'Overnight', 'Room 1,200 THB+', 3),
    a('tab-lamu', 'Tab Lamu pier', 'ท่าเรือทับละมุ', 'Tab Lamu is the Similan desk. Confirm whether the 500 THB park fee is already in the Klook price. Transfers run 200 to 400 THB.', '/khao-lak/similan-and-surin-islands', '/photos/ferry-gulf.jpg', 'Morning', 'Transfer 200 to 400 THB', 4),
    a('khao-lak-beach', 'Khao Lak beach', 'หาดเขาหลัก', 'Khao Lak beach is the long mainland sand. Swell hits from May to October. The islands are the reason to come.', '/khao-lak', undefined, 'Full day', 'Free beach', 3),
    a('takua-pa', 'Takua Pa Old Town', 'ตะกั่วป่า', 'Takua Pa Old Town is the inland shophouse walk. Use a half day if a boat cancelled.', '/khao-lak', '/photos/thai-food-southern.jpg', '2 hours', 'Free to walk', 3),
  ],
  '/koh-chang': [
    a('white-sand', 'White Sand Beach', 'หาดทรายขาว', 'White Sand Beach is the north stay default. A songthaew from the pier is 100 to 200 THB. Agree the fare first.', '/koh-chang', '/photos/white-sand-chang.jpg', 'Full day', 'Songthaew 100 to 200 THB', 4),
    a('klang-beach', 'Klong Prao', 'คลองพร้าว', 'Klong Prao is the mid-west hotel sand, quieter than White Sand, on the same songthaew line.', '/koh-chang', '/photos/klong-prao.jpg', 'Full day', 'Free beach', 3),
    a('lonely-beach', 'Lonely Beach', 'หาดลอนลี่', 'Lonely Beach is the south-west nightlife pocket, with drinks from about 80 THB. Sleep here only if that evening is the trip.', '/koh-chang', '/photos/lonely-beach.jpg', 'Evening', 'Drinks from 80 THB', 3),
    a('than-mayom', 'Than Mayom waterfall', 'น้ำตกธารมะยม', 'Than Mayom is the east-coast park day at about 200 THB. Give it half a day from the west coast.', '/koh-chang', '/photos/than-mayom.jpg', '3 hours', '200 THB', 3),
    a('center-point', 'Center Point pier', 'ท่าเรือเซ็นเตอร์พอยท์', 'Center Point is the car-ferry pier from the mainland. Trat plus the 80 to 150 THB boat is the public path.', '/koh-chang-and-koh-kood', '/photos/ferry-gulf.jpg', 'Arrival', 'Ferry 80 to 150 THB', 3),
    a('kai-bae', 'Kai Bae viewpoint', 'จุดชมวิวไก่แบ๊ะ', 'Kai Bae is the free west-coast view. Scooter only if you already ride. The hills are steep.', '/koh-chang', '/photos/kai-bae.jpg', '1 hour', 'Free', 3),
  ],
  '/koh-kood': [
    a('klong-chao', 'Klong Chao', 'คลองเจ้า', 'Klong Chao is the main village and waterfall. Sleep nearby if you want dinner options.', '/koh-kood', undefined, 'Full day', 'Free beach', 4),
    a('soneva', 'Soneva Kiri', 'โซเนว่า คีรี', 'Soneva Kiri is the north-east hideaway. Book the transfer with the room.', '/resort-living/soneva-kiri', '/photos/resort-soneva-kiri.jpg', 'Stay', 'Resort rates', 4),
    a('ao-tapao', 'Ao Tapao', 'อ่าวตะเภา', 'Ao Tapao is the west sand, quieter than Klong Chao. A taxi is 300 to 600 THB. Confirm the songthaew.', '/koh-kood', undefined, 'Full day', 'Taxi 300 to 600 THB', 3),
    a('kood-boat', 'Boonsiri and Ko Kut Express', 'ท่าเรือ', 'Boonsiri and Ko Kut Express leave from Laem Sok in 1 to 1.5 hours for 600 to 700 THB. Read the operator name. Last boats leave mid-afternoon.', '/koh-chang-and-koh-kood', '/photos/ferry-gulf.jpg', '1 to 1.5 hours', 'Boat 600 to 700 THB', 4),
    a('klong-chao-fall', 'Klong Chao waterfall', 'น้ำตกคลองเจ้า', 'Klong Chao waterfall is the inland walk, free or a donation. Go early. Wet season changes the pool.', '/koh-kood', '/photos/klong-chao-fall.jpg', '2 hours', 'Free / donation', 3),
    a('bang-bao-kood', 'Bang Bao bay', 'บางเบ้า', 'Bang Bao is the south cove. Use it as a 400 to 700 THB day trip if you already sleep mid-island.', '/koh-kood', '/photos/bang-bao-kood.jpg', 'Half day', 'Taxi 400 to 700 THB', 3),
  ],
  '/khao-yai': [
    a('park-gate', 'Khao Yai National Park', 'อุทยานแห่งชาติเขาใหญ่', 'Khao Yai National Park charges about 400 THB for a foreign adult. Hire a car. Dawn wildlife beats midday heat.', '/khao-yai', undefined, 'Full day', '400 THB', 5),
    a('heaw-suwat', 'Haew Suwat waterfall', 'น้ำตกเหวนรก', 'Haew Suwat is the film-famous fall inside the park ticket. The steps stay wet.', '/khao-yai', '/photos/haew-suwat.jpg', '1 hour', 'Included', 4),
    a('pak-chong', 'Pak Chong', 'ปากช่อง', 'Pak Chong is the sleep-and-eat town, with rooms from about 1,000 THB. Night markets sit in town. The park gate is a morning drive.', '/khao-yai', '/photos/pak-chong.jpg', 'Overnight', 'Room 1,000 THB+', 3),
    a('wine-hills', 'Khao Yai hills', 'เขาใหญ่ไวน์', 'The Khao Yai hills hold vineyard tasting rooms on the approach road at 300 to 800 THB. They are useful if rain closed a trail.', '/khao-yai', undefined, '2 hours', 'Tasting 300 to 800 THB', 3),
    a('pb-highway', 'From Bangkok', 'ถนนมิตรภาพ', 'The drive from Bangkok on Mittraphap Road takes 2.5 to 3.5 hours and costs 800 to 1,500 THB by car or van. Sunday night traffic back is ugly, so do not plan a 16:00 city dinner.', '/khao-yai', '/photos/get-there.jpg', '3 hours', 'Car / van 800 to 1,500 THB', 3),
    a('night-safari-ky', 'Night safari', 'ไนท์ซาฟารี', 'The night safari is the park van after dusk, 800 to 1,500 THB. Book the desk and bring a jacket. 2026 Saturday seats sell out.', '/khao-yai', undefined, '3 hours', 'Tour 800 to 1,500 THB', 4),
  ],
};

export function attractionsFor(path: string): PlaceAttraction[] {
  if (!isPlacePage(path)) return [];
  return [...ATTRACTIONS[path]].sort((a, b) => b.dots - a.dots);
}
