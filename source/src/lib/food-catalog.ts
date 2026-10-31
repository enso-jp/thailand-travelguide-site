import { dishHero } from './dish-heroes';
import { BANGKOK_DISHES } from './dishes-bangkok';
import { CHIANG_MAI_DISHES } from './dishes-chiang-mai';
import { AYUTTHAYA_DISHES, CHIANG_RAI_DISHES } from './dishes-north-central';
import { HUA_HIN_DISHES, PATTAYA_DISHES, SUKHOTHAI_DISHES } from './dishes-gulf-sukhothai';
import { HAT_YAI_DISHES, KOH_SAMUI_DISHES } from './dishes-hat-yai-samui';
import { KHON_KAEN_DISHES, NONG_KHAI_DISHES, UDON_THANI_DISHES } from './dishes-isan-cities';
import { KRABI_DISHES, PHUKET_DISHES } from './dishes-south';
import { KANCHANABURI_DISHES, PAI_DISHES, KHAO_LAK_DISHES, KOH_LANTA_DISHES, KOH_TAO_DISHES, KOH_PHANGAN_DISHES, KOH_PHI_PHI_DISHES, KOH_LIPE_DISHES, KOH_KOOD_DISHES } from './dishes-batch3';
import { KANCHANABURI_MORE, PAI_MORE, KHAO_LAK_MORE, KOH_LANTA_MORE, KOH_TAO_MORE, KOH_PHANGAN_MORE, KOH_PHI_PHI_MORE, KOH_LIPE_MORE, KOH_KOOD_MORE } from './dishes-batch4';
import { KHAO_SOK_DISHES, KOH_CHANG_DISHES } from './dishes-batch5';
import { AYUTTHAYA_MORE, CHIANG_RAI_MORE, HUA_HIN_MORE, KHAO_YAI_DISHES, KOH_SAMUI_MORE, KRABI_MORE, PATTAYA_MORE, PHUKET_MORE, SUKHOTHAI_MORE } from './dishes-batch5-rest';
import { KANCHANABURI_B6, KHAO_LAK_B6, KHON_KAEN_B6, KOH_KOOD_B6, KOH_LANTA_B6, KOH_LIPE_B6, KOH_PHANGAN_B6, KOH_PHI_PHI_B6, KOH_TAO_B6, PAI_B6 } from './dishes-batch6';
import { HAT_YAI_B6, KHAO_SOK_B6, KHAO_YAI_B6, KOH_CHANG_B6, NONG_KHAI_B6, UDON_THANI_B6 } from './dishes-batch6-rest';
import { AYUTTHAYA_B7, HUA_HIN_B7, KOH_PHANGAN_B7, KOH_SAMUI_B7, KRABI_B7, PATTAYA_B7 } from './dishes-batch7';
import { ALL_DISHES } from './dish-pages';
import { dishDirectoryItems, dishPath, type DishRecord, type FoodSpot } from './dish-model';

export type { FoodSpot };

export type FoodDish = {
  slug: string;
  title: string;
  nameLocal: string;
  line: string;
  photo?: string;
  href: string;
  region: string;
  find: string;
  flavour?: string;
  spots?: FoodSpot[];
};

export type FoodCityCard = {
  title: string;
  href: string;
  photo: string;
  line: string;
  find: string;
};

export const FOOD_CITY_CARDS: FoodCityCard[] = [
  { title: 'Bangkok', href: '/thai-food/bangkok', photo: '/photos/thai-food-bangkok-street.jpg', line: 'Bangkok eating is rail-fed stalls, Yaowarat after 18:00, and Bib rooms.', find: 'bangkok yaowarat street chinatown' },
  { title: 'Chiang Mai', href: '/thai-food/chiang-mai', photo: '/photos/thai-food-lanna.jpg', line: 'Khao soi is a lunch bowl at 50 to 80 THB. Markets start after 17:00.', find: 'chiang mai khao soi lanna' },
  { title: 'Phuket', href: '/thai-food/phuket', photo: '/photos/thai-food-southern.jpg', line: 'Hokkien and Baba-Nyonya in Old Town, not a beach grill.', find: 'phuket hokkien baba nyonya mee' },
  { title: 'Koh Samui & Gulf', href: '/thai-food/koh-samui', photo: '/photos/chaweng.jpg', line: 'Samui food is Chaweng nights and a few island plates worth a Grab.', find: 'samui gulf chaweng seafood' },
  { title: 'Krabi & Andaman', href: '/thai-food/krabi', photo: '/photos/krabi.jpg', line: 'Krabi food is Ao Nang seafood after 17:00 and a cheaper lunch clock in Town.', find: 'krabi andaman ao nang seafood' },
  { title: 'Isan & Regional Markets', href: '/thai-food/isan', photo: '/photos/khao-yai.jpg', line: 'Som tum, larb, and grilled chicken are the Isan plates. Ask for less heat on a first bowl.', find: 'isan som tum larb gai yang' },
  { title: 'Chiang Rai', href: '/thai-food/chiang-rai', photo: '/photos/chiang-rai.jpg', line: 'Khao soi at lunch and night-bazaar sausage after the White Temple.', find: 'chiang rai khao soi night bazaar' },
  { title: 'Ayutthaya', href: '/thai-food/ayutthaya', photo: '/photos/ayutthaya.jpg', line: 'Boat noodle cups, roti sai mai, and river prawns between the ruins.', find: 'ayutthaya boat noodle roti sai mai prawn' },
  { title: 'Hua Hin', href: '/thai-food/hua-hin', photo: '/photos/hua-hin.jpg', line: 'Soi 72 night market and Naresdamri fish after the train.', find: 'hua hin night market seafood' },
  { title: 'Pattaya', href: '/thai-food/pattaya', photo: '/photos/pattaya.jpg', line: 'Jomtien seafood and Naklua fish, not a Walking Street default.', find: 'pattaya jomtien seafood naklua' },
  { title: 'Sukhothai', href: '/thai-food/sukhothai', photo: '/photos/sukhothai.jpg', line: 'Sukhothai noodles after the dawn bicycle in Old Town.', find: 'sukhothai noodles kuay tiew' },
  { title: 'Hat Yai', href: '/thai-food/hat-yai', photo: '/photos/koh-lipe.jpg', line: 'Turmeric fried chicken at Kim Yong and morning dim sum.', find: 'hat yai fried chicken dim sum' },
  { title: 'Kanchanaburi', href: '/thai-food/kanchanaburi', photo: '/photos/kanchanaburi.jpg', line: 'Pink yen ta fo on Saeng Chuto Road and a night market open to 04:00.', find: 'kanchanaburi yen ta fo night market river kwai' },
  { title: 'Pai', href: '/thai-food/pai', photo: '/photos/pai.jpg', line: 'Khao Soi Zisters at lunch and Walking Street wok plates after 17:00.', find: 'pai khao soi walking street' },
  { title: 'Khao Lak', href: '/thai-food/khao-lak', photo: '/photos/khao-lak.jpg', line: 'Bang Niang Market four days a week, plus Isan heat at the junction.', find: 'khao lak bang niang market' },
  { title: 'Koh Lanta', href: '/thai-food/koh-lanta', photo: '/photos/koh-lanta.jpg', line: 'Fiery kua kling in Saladan and sour gaeng som in Old Town.', find: 'koh lanta saladan old town curry' },
  { title: 'Koh Tao', href: '/thai-food/koh-tao', photo: '/photos/koh-tao.jpg', line: 'An 80 THB massaman in Sairee and roast duck noodles at 995.', find: 'koh tao sairee massaman duck' },
  { title: 'Koh Phangan', href: '/thai-food/koh-phangan', photo: '/photos/koh-phangan.jpg', line: 'Phantip Market in Thong Sala: curry over rice for 60 to 70 THB.', find: 'koh phangan thong sala phantip market' },
  { title: 'Koh Phi Phi', href: '/thai-food/koh-phi-phi', photo: '/photos/phi-phi.jpg', line: 'Garlic 1992 in Tonsai keeps village plates near town prices.', find: 'phi phi tonsai garlic 1992' },
  { title: 'Koh Lipe', href: '/thai-food/koh-lipe', photo: '/photos/koh-lipe.jpg', line: 'Walking Street som tum and spicy Thai Derm plates before 19:30.', find: 'koh lipe walking street thai derm' },
  { title: 'Koh Kood', href: '/thai-food/koh-kood', photo: '/photos/koh-kood.jpg', line: 'Ao Yai crab and fish by weight, Klong Chao tom yum at night.', find: 'koh kood ao yai seafood crab' },
  { title: 'Koh Chang', href: '/thai-food/koh-chang', photo: '/photos/kai-bae.jpg', line: 'Bang Bao pier seafood and 40 to 70 THB curry rice on the west-coast road.', find: 'koh chang bang bao seafood klong prao' },
  { title: 'Khao Sok', href: '/thai-food/khao-sok', photo: '/photos/cheow-lan.jpg', line: 'Village curry at 40 to 80 THB before 09:00, then a raft kitchen on Cheow Lan.', find: 'khao sok morning market cheow lan' },
  { title: 'Khao Yai', href: '/thai-food/khao-yai', photo: '/photos/pak-chong.jpg', line: 'Pak Chong Night Market, 17:00 to 22:00, often 80 to 150 THB a person.', find: 'khao yai pak chong night market som tum' },
  { title: 'Chinatown Yaowarat', href: '/thai-food/yaowarat-chinatown-food-walk', photo: '/photos/yaowarat.jpg', line: 'Yaowarat is the peppery guay jub and Texas Lane walk after 18:00.', find: 'yaowarat chinatown guay jub' },
  { title: 'Night Markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg', line: 'Night markets that matter are Ratchada, Train Night Market, and city walking streets.', find: 'night market ratchada' },
  { title: 'Michelin Street Food', href: '/thai-food/bangkok-bib-gourmand', photo: '/photos/thai-food-bib.jpg', line: 'Bib Gourmand rooms are the value badge. Jay Fai is the one-star exception.', find: 'michelin bib jay fai' },
  { title: 'Rooftop Dining', href: '/thai-food/bangkok-rooftop-bars-and-river-dining', photo: '/photos/wat-arun-night.jpg', line: 'Dress-code nights over the river, not a stall crawl.', find: 'rooftop river sky bar' },
];

export const SIGNATURE_DISHES: FoodDish[] = [
  {
    slug: 'khao-soi',
    title: 'Khao Soi',
    nameLocal: 'ข้าวซอย',
    line: 'Khao soi is the northern coconut curry noodle with a fried-noodle nest. Eat it at lunch in Chiang Mai for 50 to 80 THB.',
    photo: '/photos/dish-khao-soi-2.jpg',
    href: '/thai-food/chiang-mai--khao-soi',
    region: 'North',
    find: 'khao soi ข้าวซอย chiang mai',
  },
  {
    slug: 'pad-kra-pao',
    title: 'Pad Kra Pao',
    nameLocal: 'ผัดกะเพรา',
    line: 'Holy-basil wok with minced pork or chicken and a fried egg. A 2026 plate is often 60 to 90 THB.',
    photo: '/photos/dish-pad-kra-pao.jpg',
    href: '/thai-food/bangkok--pad-kra-pao',
    region: 'Bangkok',
    find: 'pad kra pao gaprao ผัดกะเพรา',
  },
  {
    slug: 'tom-yum-goong',
    title: 'Tom Yum Goong',
    nameLocal: 'ต้มยำกุ้ง',
    line: 'Hot and sour prawn soup. Ask for nam khon if you want the creamy coconut version.',
    photo: '/photos/dish-tom-yum.jpg',
    href: '/thai-food/bangkok--tom-yum-goong',
    region: 'Central',
    find: 'tom yum goong ต้มยำกุ้ง',
  },
  {
    slug: 'som-tum',
    title: 'Som Tum',
    nameLocal: 'ส้มตำ',
    line: 'Green papaya salad. Thai hot is a different heat from Western spicy. Order Thai less spicy on a first plate.',
    photo: '/photos/dish-som-tum.jpg',
    href: '/thai-food/khon-kaen--som-tum-kk',
    region: 'Isan',
    find: 'som tum papaya ส้มตำ',
  },
  {
    slug: 'pad-thai',
    title: 'Pad Thai',
    nameLocal: 'ผัดไทย',
    line: 'Thip Samai on Maha Chai is the late classic plate, usually 80 to 150 THB.',
    photo: '/photos/dish-pad-thai.jpg',
    href: '/thai-food/bangkok--pad-thai',
    region: 'Bangkok',
    find: 'pad thai ผัดไทย thip samai',
  },
  {
    slug: 'massaman',
    title: 'Massaman Curry',
    nameLocal: 'แกงมัสมั่น',
    line: 'Muslim-root curry with beef or chicken, milder than a southern sour curry.',
    photo: '/photos/dish-massaman.jpg',
    href: '/thai-food/southern-and-baba-nyonya',
    region: 'South',
    find: 'massaman แกงมัสมั่น',
  },
  {
    slug: 'khao-man-gai',
    title: 'Khao Man Gai',
    nameLocal: 'ข้าวมันไก่',
    line: 'Hainan chicken rice from Pratunam lunch shophouses, usually 50 to 70 THB.',
    photo: '/photos/dish-khao-man-gai.jpg',
    href: '/thai-food/bangkok--khao-man-gai',
    region: 'Bangkok',
    find: 'khao man gai ข้าวมันไก่ chicken rice',
  },
  {
    slug: 'moo-hong',
    title: 'Moo Hong',
    nameLocal: 'หมูฮ้อง',
    line: 'Phuket stewed pork with star anise. Order it in Old Town, not on a Patong beach grill.',
    photo: '/photos/dish-khao-kha-moo.jpg',
    href: '/thai-food/phuket--moo-hong',
    region: 'Phuket',
    find: 'moo hong หมูฮ้อง phuket',
  },
  {
    slug: 'kanom-jeen-nam-ya-poo',
    title: 'Kanom Jeen Nam Ya Poo',
    nameLocal: 'ขนมจีนน้ำยาปู',
    line: 'Rice noodles in crab curry. A southern lunch pot that empties by early afternoon.',
    photo: '/photos/dish-kanom-jeen-crab.jpg',
    href: '/thai-food/krabi--kanom-jeen-nam-ya-poo',
    region: 'South',
    find: 'kanom jeen nam ya poo ขนมจีนน้ำยาปู',
  },
  {
    slug: 'guay-tiew-reua',
    title: 'Guay Tiew Reua',
    nameLocal: 'ก๋วยเตี๋ยวเรือ',
    line: 'Dark-broth boat noodles in the Victory Monument alleys, sold as 20 THB cups.',
    photo: '/photos/dish-boat-noodle.jpg',
    href: '/thai-food/bangkok--guay-tiew-reua',
    region: 'Bangkok',
    find: 'guay tiew reua boat noodle ก๋วยเตี๋ยวเรือ',
  },
  {
    slug: 'hoi-tod',
    title: 'Hoi Tod',
    nameLocal: 'หอยทอด',
    line: 'Crisp oyster omelette from Talat Phlu or Yaowarat. Share one plate.',
    photo: '/photos/dish-hoi-tod.jpg',
    href: '/thai-food/bangkok--hoi-tod',
    region: 'Bangkok',
    find: 'hoi tod หอยทอด oyster',
  },
  {
    slug: 'mango-sticky-rice',
    title: 'Mango Sticky Rice',
    nameLocal: 'ข้าวเหนียวมะม่วง',
    line: 'Seasonal mango with coconut sticky rice. Mae Varee on Thong Lo is the named box at 80 to 150 THB.',
    photo: '/photos/dish-mango-sticky.jpg',
    href: '/thai-food/bangkok--mango-sticky-rice',
    region: 'Bangkok',
    find: 'mango sticky rice ข้าวเหนียวมะม่วง mae varee',
  },
];

export type CityFoodRow = {
  title: string;
  nameLocal: string;
  href: string;
  photo?: string;
  kind: 'dish' | 'place';
  summary: string;
  address?: string;
  hours?: string;
  price?: string;
};

function dishRows(dishes: DishRecord[]): CityFoodRow[] {
  return dishes.map((dish) => {
    const spot = dish.spots[0];
    return {
      title: dish.title,
      nameLocal: dish.nameLocal,
      href: dishPath(dish),
      photo: dishHero(dish),
      kind: 'dish' as const,
      summary: `${dish.lede} **${spot.name}** is the named start. ${dish.price}.`,
      address: `${spot.name}, ${spot.address}`,
      hours: spot.hours,
      price: dish.price,
    };
  });
}

export const CITY_FOOD_ROWS: Record<string, CityFoodRow[]> = {
  '/thai-food/bangkok': [
    ...dishRows(BANGKOK_DISHES),
    { title: 'Or Tor Kor fruit', nameLocal: 'อ.ต.ก.', href: '/thai-food/or-tor-kor-and-bangkok-fresh-markets', kind: 'place', summary: 'Graded fruit and northern sausages in cool air. Morning only at MRT Kamphaeng Phet. This is not a dinner market.', address: 'Or Tor Kor Market, Kamphaeng Phet Rd, Chatuchak, Bangkok 10900', hours: '06:00 to 18:00', price: 'Fruit by weight' },
    { title: 'Wang Lang lunch', nameLocal: 'วังหลัง', href: '/thai-food/wang-lang-and-talat-noi', kind: 'place', summary: 'Siriraj-side ferry lunch across from Tha Chang. Pots empty by 14:00. Plates 40 to 80 THB.', address: 'Wang Lang Market, Arun Amarin Rd, Bangkok Noi', hours: '07:00 to 14:00', price: '40 to 80 THB' },
    { title: 'Banthat Thong late', nameLocal: 'บรรทัดทอง', href: '/thai-food/banthat-thong-road-food-strip', kind: 'place', summary: 'Chula night strip from MRT Sam Yan. **Jeh O Chula** (Michelin Bib Gourmand) is the Mama tom yum pot at 150 to 300 THB, not a separate shop called Jeh O Mama.', address: 'Jeh O Chula, 113 Soi Charat Mueang, Rong Mueang, Pathum Wan, Bangkok 10330', hours: '15:50 to 00:00 daily', price: '150 to 300 THB' },
  ],
  '/thai-food/chiang-mai': [
    ...dishRows(CHIANG_MAI_DISHES),
    { title: 'Khao Soi Lam Duan', nameLocal: 'ข้าวซอยลำดวน', href: '/thai-food/chiang-mai--khao-soi', kind: 'place', summary: 'Khao Soi Lam Duan on Faham Road is the darker-broth classic on the same lunch clock. Order one bowl at 50 to 70 THB, then walk the river.', address: 'Khao Soi Lam Duan Faham, 352/22 Charoenrat Rd, Wat Ket', hours: '10:00 to 15:00', price: '50 to 70 THB' },
    { title: 'Khao Soi Mae Manee', nameLocal: 'ข้าวซอยแม่มณี', href: '/thai-food/chiang-mai--khao-soi', kind: 'place', summary: 'Khao Soi Mae Manee is the Chang Phueak lunch room north of the moat, not inside the Old City. TAT lists 09:00 to 15:30 at 40 to 120 THB. Arrive before 13:00.', address: 'Khao Soi Mae Manee, 18 Soi Chotana 24, Chotana Rd, Chang Phueak, Chiang Mai 50300', hours: '09:00 to 15:30', price: '50 to 80 THB' },
    { title: 'Sunday Walking Street snacks', nameLocal: 'ถนนคนเดิน', href: '/chiang-mai/old-city', kind: 'place', summary: 'Ratchadamnoen after 16:00 on Sunday. Grills and dessert cups, not a temple substitute. 20 to 60 THB.', address: 'Ratchadamnoen Rd, Phra Sing, Chiang Mai 50200', hours: 'Sunday from 16:00', price: '20 to 60 THB' },
    { title: 'Warorot breakfast', nameLocal: 'กาดหลวง', href: '/thai-food/chiang-mai-khao-soi-and-markets', kind: 'place', summary: 'Morning wholesale hall for jok, coffee, and fruit. Go before 09:00. 30 to 60 THB.', address: 'Warorot Market, Wichayanon Rd, Chang Moi, Chiang Mai', hours: '05:00 to 17:00', price: '30 to 60 THB' },
    { title: 'Nimman pour-over', nameLocal: 'นิมมานเหมินท์', href: '/chiang-mai/nimmanhaemin', kind: 'place', summary: 'Cafe morning west of the moat. **GRAPH Quarter** sits at 25 Soi 13 Sirimangkalajarn. 80 to 150 THB. Maya basement is air-con only.', address: 'GRAPH Quarter, 25 Soi 13 Sirimangkalajarn Rd, Suthep, Chiang Mai 50200', hours: '09:00 to 17:00', price: '80 to 150 THB' },
    { title: 'Nimman food', nameLocal: 'นิมมาน', href: '/thai-food/chiang-mai-nimman-food', kind: 'place', photo: '/photos/nimman.jpg', summary: 'Kao Soy Nimman on Soi 7, about 220 THB for two bowls, and Huen Phen Soi 5 from 11:00 to 22:00.', address: '22 Nimman Soi 7, Suthep, Chiang Mai 50200', hours: 'Huen Phen 11:00 to 22:00', price: 'Two bowls about 220 THB' },
    { title: 'Old City food', nameLocal: 'เมืองเก่า', href: '/thai-food/chiang-mai-old-city-food', kind: 'place', photo: '/photos/chiang-mai-old-city.jpg', summary: 'Huen Phen on Ratchamankha and Khun Yai khao soi, Monday to Saturday 10:00 to 14:00, 40 to 60 THB.', address: '112 Ratchamankha Rd, Phra Sing, Chiang Mai 50200', hours: 'Khun Yai 10:00 to 14:00', price: '40 to 60 THB' },
    { title: 'Chang Phueak food', nameLocal: 'ช้างเผือก', href: '/thai-food/chiang-mai-chang-phueak-food', kind: 'place', photo: '/photos/doi-suthep.jpg', summary: 'Mae Sai khao soi on Ratchaphruek, Monday to Saturday 08:00 to 16:00, 55 to 90 THB. Closed Sunday.', address: '29/1 Ratchaphruek Rd, Chang Phueak, Chiang Mai 50300', hours: '08:00 to 16:00 Mon to Sat', price: '55 to 90 THB' },
    { title: 'Santitham food', nameLocal: 'สันติธรรม', href: '/thai-food/chiang-mai-santitham-food', kind: 'place', photo: '/photos/northern.jpg', summary: 'Akha Ama Living Factory on Hussadhisewee Soi 3. A pour-over in Chiang Mai is often 80 to 150 THB.', address: 'Hussadhisewee Soi 3, Santitham, Chiang Mai', price: '80 to 150 THB' },
    { title: 'Wualai food', nameLocal: 'วัวลาย', href: '/thai-food/chiang-mai-wualai-food', kind: 'place', photo: '/photos/wat-phra-singh.jpg', summary: 'Saturday walking street on Wua Lai Road near Chiang Mai Gate, about 17:00 to 22:00. Sunday is Ratchadamnoen.', address: 'Wua Lai Rd, Chiang Mai Gate, Chiang Mai', hours: 'Saturday about 17:00 to 22:00', price: 'Snack walk' },
  ],
  '/thai-food/phuket': [
    ...dishRows(PHUKET_DISHES),
    ...dishRows(PHUKET_MORE),
    { title: 'Sunday Walking Street', nameLocal: 'ถนนคนเดินภูเก็ต', href: '/thai-food/night-markets', kind: 'place', summary: 'Thalang Road on Sunday late afternoon. Snacks, not a full dinner plan. 30 to 80 THB.', address: 'Thalang Rd, Talat Yai, Phuket 83000', hours: 'Sunday from 16:00', price: '30 to 80 THB' },
    { title: 'Lobster grill (only if priced)', nameLocal: 'กุ้งมังกร', href: '/phuket', kind: 'place', summary: 'Rawai and Chalong desks quote by weight. Confirm the THB number before the grill and walk away from a shrug.', address: 'Rawai seafood promenade, Viset Rd, Rawai, Phuket 83130', hours: '16:00 to 22:00', price: 'By weight; ask first' },
  ],
  '/thai-food/koh-samui': [
    ...dishRows(KOH_SAMUI_DISHES),
    ...dishRows(KOH_SAMUI_MORE),
    ...dishRows(KOH_SAMUI_B7),
    { title: 'USM airport snack', nameLocal: 'สนามบินสมุย', href: '/get-there/bangkok-to-koh-samui', kind: 'place', summary: 'The bag belt is slow. Eat after you clear, not in a 20-minute connection. Terminal snacks 80 to 150 THB.', address: 'Samui Airport terminal, Bo Phut, Koh Samui 84320', hours: 'Flight hours', price: '80 to 150 THB' },
    { title: 'Ang Thong picnic skip', nameLocal: 'อ่างทอง', href: '/koh-samui/ang-thong-marine-park', kind: 'place', photo: '/photos/ang-thong.jpg', summary: 'Boat lunch is boxed. Bring water. The 300 THB park fee is extra. Closed 1 Nov to 15 Dec.', address: 'Ang Thong Marine Park boats, Nathon / Maenam piers', hours: 'Boats 08:00 to 09:00', price: 'Tour plus 300 THB' },
  ],
  '/thai-food/krabi': [
    ...dishRows(KRABI_DISHES),
    ...dishRows(KRABI_MORE),
    ...dishRows(KRABI_B7),
    { title: 'Klong Jilad pier snack', nameLocal: 'คลองจิหลาด', href: '/get-there/phuket-to-krabi-phi-phi', kind: 'place', summary: 'Phi Phi boats leave from Klong Jilad Pier. Eat a proper lunch in Krabi Town first, because pier snacks run 60 to 100 THB and do not fill you.', address: 'Klong Jilad Pier, Krabi 81000', hours: 'Boat mornings 08:00 to 13:00', price: '60 to 100 THB' },
    { title: 'Hong Island boxed lunch', nameLocal: 'เกาะห้อง', href: '/krabi', kind: 'place', summary: 'Park longtail days include a box. The 300 THB park fee is extra. Leave by 08:00.', address: 'Noppharat Thara / Ao Nang longtail desks', hours: 'Boats 08:00', price: 'Tour plus 300 THB' },
  ],
  '/thai-food/isan': [
    { title: 'Khon Kaen dishes', nameLocal: 'ขอนแก่น', href: '/thai-food/khon-kaen', kind: 'place', summary: 'Highway gai yang at **Kai Yang Wanna** in Khao Suan Kwang, plus larb, tam mua, and jim jum. Drive north of town for the bird.', address: 'Kai Yang Wanna, 271 Mu 11 Mittraphap Rd, Khao Suan Kwang, Khon Kaen 40280', hours: 'Morning to mid-afternoon', price: '120 to 220 THB a bird' },
    { title: 'Udon Thani dishes', nameLocal: 'อุดรธานี', href: '/thai-food/udon-thani', kind: 'place', summary: 'UD Town is the night yard for som tum, sai krok, and city gai yang at 40 to 120 THB.', address: 'UD Town, Thong Yai Rd, Mueang Udon Thani 41000', hours: '17:00 to 22:30', price: '40 to 120 THB' },
    { title: 'Nong Khai dishes', nameLocal: 'หนองคาย', href: '/thai-food/nong-khai', kind: 'place', summary: '**Daeng Namnuang** on Meechai is the named wrap table. Rimkhong fish is the river dinner.', address: 'Daeng Namnuang, 689/1 Meechai Rd, Nong Khai 43000', hours: '10:00 to 20:00', price: '120 to 220 THB a set' },
    { title: 'Som Tum Thai', nameLocal: 'ส้มตำไทย', href: '/thai-food/khon-kaen--som-tum-kk', kind: 'dish', photo: '/photos/dish-som-tum.jpg', summary: 'Green papaya, peanut, and dried shrimp. Order this first. Thai hot is a different plate. **Kai Yang Wanna** is the named highway pound. 50 to 90 THB.', address: 'Kai Yang Wanna, 271 Mu 11 Mittraphap Rd, Khao Suan Kwang, Khon Kaen 40280', hours: 'Morning to mid-afternoon', price: '50 to 90 THB' },
    { title: 'Larb Moo', nameLocal: 'ลาบหมู', href: '/thai-food/khon-kaen--larb-kk', kind: 'dish', photo: '/photos/dish-larb.jpg', summary: 'Minced pork salad with toasted rice. Isan larb is hotter than the northern version. 80 to 120 THB.', address: 'Kai Yang Wanna, 271 Mu 11 Mittraphap Rd, Khao Suan Kwang, Khon Kaen 40280', hours: 'Morning to mid-afternoon', price: '80 to 120 THB' },
    { title: 'Gai Yang', nameLocal: 'ไก่ย่าง', href: '/thai-food/khon-kaen--gai-yang-khao-suan-kwang', kind: 'dish', photo: '/photos/dish-gai-yang.jpg', summary: 'Butterflied charcoal chicken. **Kai Yang Wanna** has grilled it since 1973. A bird is 120 to 220 THB.', address: 'Kai Yang Wanna, 271 Mu 11 Mittraphap Rd, Khao Suan Kwang, Khon Kaen 40280', hours: 'Morning to mid-afternoon', price: '120 to 220 THB' },
    { title: 'Sai Krok Isan', nameLocal: 'ไส้กรอกอีสาน', href: '/thai-food/khon-kaen--sai-krok-kk', kind: 'dish', photo: '/photos/dish-sai-krok.jpg', summary: 'Sour fermented sausage from a city night grill. 30 to 60 THB a set.', address: 'Khon Kaen city night markets', hours: '17:00 to 22:00', price: '30 to 60 THB' },
    { title: 'Nam Tok', nameLocal: 'น้ำตก', href: '/thai-food/khon-kaen--nam-tok-kk', kind: 'dish', photo: '/photos/dish-nam-tok.jpg', summary: 'Grilled-beef salad in the same herb family as larb. Sticky rice on the side. 80 to 140 THB.', address: 'Kai Yang Wanna, Khao Suan Kwang, Khon Kaen 40280', hours: 'Morning to mid-afternoon', price: '80 to 140 THB' },
    { title: 'Khao Niew', nameLocal: 'ข้าวเหนียว', href: '/thai-food/khon-kaen--khao-niew-kk', kind: 'dish', photo: '/photos/dish-khao-niew.jpg', summary: 'Sticky rice is the utensil. Order a basket with every grill. 10 to 22 THB.', address: 'Any Isan grill; ask for khao niew, not jasmine', hours: 'With the grill', price: '10 to 22 THB' },
    { title: 'Ubon night market', nameLocal: 'อุบลราชธานี', href: '/thai-food/night-markets', kind: 'place', summary: 'If you are actually in Ubon, night markets beat hotel buffets. Plates 40 to 80 THB.', address: 'Ubon Night Market, Khammalai Rd, Ubon Ratchathani 34000', hours: '17:00 to 22:00', price: '40 to 80 THB' },
  ],
  '/thai-food/chiang-rai': dishRows([...CHIANG_RAI_DISHES, ...CHIANG_RAI_MORE]),
  '/thai-food/khon-kaen': dishRows([...KHON_KAEN_DISHES, ...KHON_KAEN_B6]),
  '/thai-food/udon-thani': dishRows([...UDON_THANI_DISHES, ...UDON_THANI_B6]),
  '/thai-food/nong-khai': dishRows([...NONG_KHAI_DISHES, ...NONG_KHAI_B6]),
  '/thai-food/ayutthaya': dishRows([...AYUTTHAYA_DISHES, ...AYUTTHAYA_MORE, ...AYUTTHAYA_B7]),
  '/thai-food/hua-hin': dishRows([...HUA_HIN_DISHES, ...HUA_HIN_MORE, ...HUA_HIN_B7]),
  '/thai-food/hat-yai': dishRows([...HAT_YAI_DISHES, ...HAT_YAI_B6]),
  '/thai-food/sukhothai': dishRows([...SUKHOTHAI_DISHES, ...SUKHOTHAI_MORE]),
  '/thai-food/pattaya': dishRows([...PATTAYA_DISHES, ...PATTAYA_MORE, ...PATTAYA_B7]),
  '/thai-food/kanchanaburi': dishRows([...KANCHANABURI_DISHES, ...KANCHANABURI_MORE, ...KANCHANABURI_B6]),
  '/thai-food/pai': dishRows([...PAI_DISHES, ...PAI_MORE, ...PAI_B6]),
  '/thai-food/khao-lak': dishRows([...KHAO_LAK_DISHES, ...KHAO_LAK_MORE, ...KHAO_LAK_B6]),
  '/thai-food/koh-lanta': dishRows([...KOH_LANTA_DISHES, ...KOH_LANTA_MORE, ...KOH_LANTA_B6]),
  '/thai-food/koh-tao': dishRows([...KOH_TAO_DISHES, ...KOH_TAO_MORE, ...KOH_TAO_B6]),
  '/thai-food/koh-phangan': dishRows([...KOH_PHANGAN_DISHES, ...KOH_PHANGAN_MORE, ...KOH_PHANGAN_B6, ...KOH_PHANGAN_B7]),
  '/thai-food/koh-phi-phi': dishRows([...KOH_PHI_PHI_DISHES, ...KOH_PHI_PHI_MORE, ...KOH_PHI_PHI_B6]),
  '/thai-food/koh-lipe': dishRows([...KOH_LIPE_DISHES, ...KOH_LIPE_MORE, ...KOH_LIPE_B6]),
  '/thai-food/koh-kood': dishRows([...KOH_KOOD_DISHES, ...KOH_KOOD_MORE, ...KOH_KOOD_B6]),
  '/thai-food/koh-chang': dishRows([...KOH_CHANG_DISHES, ...KOH_CHANG_B6]),
  '/thai-food/khao-sok': dishRows([...KHAO_SOK_DISHES, ...KHAO_SOK_B6]),
  '/thai-food/khao-yai': dishRows([...KHAO_YAI_DISHES, ...KHAO_YAI_B6]),
};

export type DirectoryItem = {
  title: string;
  nameLocal?: string;
  href: string;
  line: string;
  find: string;
  letter: string;
};

export function foodDirectory(): DirectoryItem[] {
  const items: DirectoryItem[] = [
    ...FOOD_CITY_CARDS.map((card) => ({
      title: card.title,
      href: card.href,
      line: card.line,
      find: card.find,
      letter: card.title[0].toUpperCase(),
    })),
    ...SIGNATURE_DISHES.map((dish) => ({
      title: dish.title,
      nameLocal: dish.nameLocal,
      href: dish.href,
      line: `${dish.line} · ${dish.region}`,
      find: dish.find,
      letter: dish.title[0].toUpperCase(),
    })),
    ...dishDirectoryItems(ALL_DISHES),
  ];
  const extra: DirectoryItem[] = [
    { title: 'Bangkok street food', href: '/thai-food/bangkok-street-food', line: 'Bangkok street food is rail-fed stalls and lunch shophouses.', find: 'bangkok street', letter: 'B' },
    { title: 'Bangkok Bib Gourmand', href: '/thai-food/bangkok-bib-gourmand', line: 'Michelin lists 44 Bib rooms in the city and nearby provinces.', find: 'bib gourmand michelin', letter: 'B' },
    { title: 'Banthat Thong', href: '/thai-food/banthat-thong-road-food-strip', line: 'Banthat Thong is the Chula night strip for Jeh O Chula Mama pots.', find: 'banthat thong jeh o', letter: 'B' },
    { title: 'Cooking classes', href: '/thai-food/thai-cooking-classes-bangkok-and-chiang-mai', line: 'A cooking class is a wok station in Bangkok or Chiang Mai.', find: 'cooking class', letter: 'C' },
    { title: 'Coffee guide', href: '/thai-food/bangkok-and-chiang-mai-coffee-guide', line: 'Pour-over in Bangkok and Chiang Mai runs 80 to 150 THB.', find: 'coffee cafe', letter: 'C' },
    { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', line: 'This is the first-trip decoder for 12 plates.', find: 'dishes order first', letter: 'D' },
    { title: 'Northern Lanna', href: '/thai-food/northern-lanna', line: 'Northern Lanna food is khao soi, larb, and sai ua at lunch.', find: 'lanna northern', letter: 'N' },
    { title: 'Or Tor Kor', href: '/thai-food/or-tor-kor-and-bangkok-fresh-markets', line: 'Or Tor Kor is graded fruit at MRT Kamphaeng Phet.', find: 'or tor kor fruit', letter: 'O' },
    { title: 'Phuket Old Town food', href: '/thai-food/phuket-old-town-hokkien-and-peranakan-food', line: 'Old Town lunch is Hokkien mee and moo hong, not a beach grill.', find: 'phuket old town hokkien', letter: 'P' },
    { title: 'Rooftops and river', href: '/thai-food/bangkok-rooftop-bars-and-river-dining', line: 'Rooftops are dress-code nights over the river.', find: 'rooftop river', letter: 'R' },
    { title: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya', line: 'Southern rooms cook sour curry and mansion Baba plates.', find: 'south baba nyonya', letter: 'S' },
    { title: 'Wang Lang and Talat Noi', href: '/thai-food/wang-lang-and-talat-noi', line: 'Wang Lang is the ferry lunch; Talat Noi is the morning lane.', find: 'wang lang talat noi', letter: 'W' },
    { title: 'Yaowarat walk', href: '/thai-food/yaowarat-chinatown-food-walk', line: 'The Yaowarat walk starts after 18:00 from MRT Wat Mangkon.', find: 'yaowarat chinatown', letter: 'Y' },
    { title: 'Ari food', href: '/thai-food/ari-food', line: 'Ari food is Soi Ari shophouses and cafes off BTS Ari.', find: 'ari soi food cafe', letter: 'A' },
    { title: 'Bang Rak food', href: '/thai-food/bang-rak-food', line: 'Bang Rak food is Somtum Der on Sala Daeng Road.', find: 'bang rak somtum der sala daeng', letter: 'B' },
    { title: 'Banglamphu food', href: '/thai-food/banglamphu-food', line: 'Banglamphu food is Roti Mataba and a short Khao San graze.', find: 'banglamphu roti mataba khao san', letter: 'B' },
    { title: 'Ekkamai food', href: '/thai-food/ekkamai-food', line: 'Ekkamai food is Soi 63 shophouses off BTS Ekkamai.', find: 'ekkamai soi 63', letter: 'E' },
    { title: 'Halal and Thai Muslim food', href: '/thai-food/halal-and-thai-muslim-food', line: 'Halal Thai plates are khao mok gai, roti, and a signed kitchen.', find: 'halal khao mok roti', letter: 'H' },
    { title: 'Nang Loeng Market food', href: '/thai-food/nang-loeng-market', line: 'Nang Loeng is morning curry rice and old sweets before noon.', find: 'nang loeng market sweets', letter: 'N' },
    { title: 'Nam prik and condiments', href: '/thai-food/nam-prik-and-condiments', line: 'Nam prik is a chili relish with vegetables, often 40 to 80 THB.', find: 'nam prik chili relish', letter: 'N' },
    { title: 'Ordering Thai seafood', href: '/thai-food/ordering-thai-seafood', line: 'Price Thai seafood per kilo before the grill starts.', find: 'seafood kilo grill', letter: 'O' },
    { title: 'Pratunam food', href: '/thai-food/pratunam-food', line: 'Pratunam food is Go-Ang chicken rice at 65 THB.', find: 'pratunam go ang chicken rice', letter: 'P' },
    { title: 'Sampheng Lane food', href: '/thai-food/sampheng-lane-food', line: 'Sampheng is the daytime snack lane off Yaowarat.', find: 'sampheng lane yaowarat day', letter: 'S' },
    { title: 'Spice levels', href: '/thai-food/spice-levels', line: 'Say mai pet or pet nit noi before a Thai wok starts.', find: 'spice mai pet chili', letter: 'S' },
    { title: 'Thai breakfast', href: '/thai-food/thai-breakfast', line: 'Thai breakfast is jok and pa tong go from about 06:00.', find: 'breakfast jok pa tong go', letter: 'T' },
    { title: 'Thai curries', href: '/thai-food/thai-curries', line: 'Thai curries are a family of pots. Market sets are often 40 to 80 THB.', find: 'curry green massaman gaeng som', letter: 'T' },
    { title: 'Thai desserts', href: '/thai-food/thai-desserts', line: 'Thai desserts are mango sticky rice and coconut sweets.', find: 'dessert mango sticky khanom', letter: 'T' },
    { title: 'Thai festival food', href: '/thai-food/festival-food', line: 'Festival food is khao chae in April and jay food in the ninth lunar month.', find: 'festival khao chae songkran jay', letter: 'T' },
    { title: 'Thai food etiquette', href: '/thai-food/thai-food-etiquette', line: 'Use a spoon, share the dishes, and say how hot you want it.', find: 'etiquette spoon order', letter: 'T' },
    { title: 'Thai fruit by season', href: '/thai-food/thai-fruit-by-season', line: 'Mango peaks March to May. Durian follows from April.', find: 'fruit season mango durian', letter: 'T' },
    { title: 'Thai iced drinks', href: '/thai-food/thai-iced-drinks', line: 'Cha yen and oliang are often 25 to 45 THB. Pour-over is separate.', find: 'cha yen oliang iced tea', letter: 'T' },
    { title: 'Thai noodles', href: '/thai-food/thai-noodles', line: 'Boat noodles are 15 to 20 THB. Pad thai is only one of the bowls.', find: 'noodles boat pad thai yen ta fo', letter: 'T' },
    { title: 'Thai rice plates', href: '/thai-food/thai-rice-plates', line: 'Rice plates are chicken rice, pork leg, and curry over rice.', find: 'khao man gai khao gaeng', letter: 'T' },
    { title: 'Thai street snacks', href: '/thai-food/thai-street-snacks', line: 'Moo ping is 10 to 15 THB a stick. It is a snack, not dinner.', find: 'snack moo ping fish ball', letter: 'T' },
    { title: 'Thai yam salads', href: '/thai-food/thai-yam-salads', line: 'Yam salads are som tum and sour plates. Say the heat first.', find: 'yam som tum salad', letter: 'T' },
    { title: 'Thonglor and Soi 38 food', href: '/thai-food/thonglor-and-soi-38-food', line: 'Soi 38 is the night stall lane between Thong Lo and Ekkamai.', find: 'thonglor soi 38 night', letter: 'T' },
    { title: 'Vegetarian and jay food', href: '/thai-food/vegetarian-and-jay-food', line: 'Jay food follows the yellow เจ flag and skips fish sauce.', find: 'jay vegetarian vegan', letter: 'V' },
    { title: 'Victory Monument food', href: '/thai-food/victory-monument-food', line: 'Victory Monument is boat noodles at 15 to 20 THB a bowl.', find: 'victory monument boat noodles', letter: 'V' },
    { title: 'Chang Phueak food', href: '/thai-food/chiang-mai-chang-phueak-food', line: 'Mae Sai khao soi north of the moat, 55 to 90 THB, closed Sunday.', find: 'chang phueak mae sai khao soi', letter: 'C' },
    { title: 'Nimman food', href: '/thai-food/chiang-mai-nimman-food', line: 'Kao Soy Nimman and Huen Phen Soi 5, west of the moat.', find: 'nimman khao soi huen phen', letter: 'N' },
    { title: 'Old City Chiang Mai food', href: '/thai-food/chiang-mai-old-city-food', line: 'Khun Yai and Huen Phen inside the moat.', find: 'old city khun yai huen phen', letter: 'O' },
    { title: 'Santitham food', href: '/thai-food/chiang-mai-santitham-food', line: 'Akha Ama Living Factory and a short ride to Chang Phueak khao soi.', find: 'santitham akha ama', letter: 'S' },
    { title: 'Wualai food', href: '/thai-food/chiang-mai-wualai-food', line: 'Saturday walking street near Chiang Mai Gate, about 17:00 to 22:00.', find: 'wualai saturday walking street', letter: 'W' },
  ];
  return [...items, ...extra].sort((a, b) => a.title.localeCompare(b.title));
}

export function directoryGroups(): { letter: string; items: DirectoryItem[] }[] {
  const map = new Map<string, DirectoryItem[]>();
  for (const item of foodDirectory()) {
    const letter = /[A-Z]/.test(item.letter) ? item.letter : '#';
    const list = map.get(letter) || [];
    list.push(item);
    map.set(letter, list);
  }
  const letters = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
  return letters
    .filter((letter) => map.has(letter))
    .map((letter) => ({ letter, items: map.get(letter)! }));
}

export const CITY_FOOD_PATHS = new Set(Object.keys(CITY_FOOD_ROWS));
