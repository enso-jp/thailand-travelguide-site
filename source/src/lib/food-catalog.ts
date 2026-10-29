import { BANGKOK_DISHES } from './dishes-bangkok';
import { CHIANG_MAI_DISHES } from './dishes-chiang-mai';
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
  { title: 'Isan & Regional Markets', href: '/thai-food/isan', photo: '/photos/dish-gai-yang.jpg', line: 'Som tum, larb, and grilled chicken are the Isan plates. Ask for less heat on a first bowl.', find: 'isan som tum larb gai yang' },
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
    href: '/thai-food/isan',
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
    href: '/thai-food/phuket',
    region: 'Phuket',
    find: 'moo hong หมูฮ้อง phuket',
  },
  {
    slug: 'kanom-jeen-nam-ya-poo',
    title: 'Kanom Jeen Nam Ya Poo',
    nameLocal: 'ขนมจีนน้ำยาปู',
    line: 'Rice noodles in crab curry. A southern lunch pot that empties by early afternoon.',
    photo: '/photos/dish-kanom-jeen-crab.jpg',
    href: '/thai-food/krabi',
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
      photo: dish.photo,
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
  ],
  '/thai-food/phuket': [
    { title: 'Mee Hokkien', nameLocal: 'หมี่ฮกเกี้ยน', href: '/thai-food/phuket-old-town-hokkien-and-peranakan-food', kind: 'dish', summary: 'Yellow noodles in dark gravy. **Kopitiam by Wilai** at 18 Thalang Road is the named Old Town lunch. 60 to 105 THB.', address: 'Kopitiam by Wilai, 18 Thalang Rd, Talat Yai, Phuket 83000', hours: '11:00 to 20:00; Sunday rest', price: '60 to 105 THB' },
    { title: 'Moo Hong', nameLocal: 'หมูฮ้อง', href: '/thai-food/phuket-old-town-hokkien-and-peranakan-food', kind: 'dish', summary: 'Stewed pork with star anise. **Raya Restaurant** on Dibuk still cooks it in a shophouse, not on Patong Beach. 120 to 180 THB.', address: 'Raya Restaurant, 48 Dibuk Rd, Talat Yai, Phuket 83000', hours: '10:00 to 22:00', price: '120 to 180 THB' },
    { title: 'Oh Aew', nameLocal: 'โอวเอ๋ว', href: '/thai-food/phuket-old-town-hokkien-and-peranakan-food', kind: 'dish', photo: '/photos/dish-oh-aew.jpg', summary: 'Fig-seed jelly dessert for the afternoon. Share one bowl after a curry on Dibuk or Thalang. 40 to 60 THB.', address: 'Oh aew carts and kopitiams, Dibuk and Thalang Roads, Phuket Town', hours: '12:00 to 18:00', price: '40 to 60 THB' },
    { title: 'Nam Prik Kung Siap', nameLocal: 'น้ำพริกกุ้งเสียบ', href: '/thai-food/southern-and-baba-nyonya', kind: 'dish', summary: 'Dried-shrimp relish with raw veg. A Baba table dish at **The Charm Dining Gallery**. Phone ahead. 150 to 300 THB.', address: 'The Charm Dining Gallery, 32 Krabi Rd, Talat Nuea, Phuket', hours: '11:30 to 21:00; phone ahead', price: '150 to 300 THB' },
    { title: 'Gaeng Som', nameLocal: 'แกงส้ม', href: '/thai-food/southern-and-baba-nyonya', kind: 'dish', photo: '/photos/dish-gaeng-som.jpg', summary: 'Sour southern curry with fish or prawn, hotter than a Bangkok gaeng. **Tu Kab Khao** on Krabi Road is the mansion room. 80 to 150 THB.', address: 'Tu Kab Khao, 20 Krabi Rd, Talat Yai, Phuket 83000', hours: '11:00 to 21:00', price: '80 to 150 THB' },
    { title: 'Lobster grill (only if priced)', nameLocal: 'กุ้งมังกร', href: '/phuket', kind: 'place', summary: 'Rawai and Chalong desks quote by weight. Confirm the THB number before the grill and walk away from a shrug.', address: 'Rawai seafood promenade, Viset Rd, Rawai, Phuket 83130', hours: '16:00 to 22:00', price: 'By weight; ask first' },
    { title: 'Local coffee', nameLocal: 'กาแฟภูเก็ต', href: '/thai-food/bangkok-and-chiang-mai-coffee-guide', kind: 'place', summary: 'Old Town drip and iced coffee before the heat. **Kopi de Phuket** sits at 61 Phuket Road, not on Thalang. 40 to 70 THB.', address: 'Kopi de Phuket, 61 Phuket Rd, Talat Yai, Phuket 83000', hours: '08:00 to 18:00', price: '40 to 70 THB' },
    { title: 'Sunday Walking Street', nameLocal: 'ถนนคนเดินภูเก็ต', href: '/thai-food/night-markets', kind: 'place', summary: 'Thalang Road on Sunday late afternoon. Snacks, not a full dinner plan. 30 to 80 THB.', address: 'Thalang Rd, Talat Yai, Phuket 83000', hours: 'Sunday from 16:00', price: '30 to 80 THB' },
    { title: 'Kanom Jeen Nam Ya', nameLocal: 'ขนมจีนน้ำยา', href: '/thai-food/southern-and-baba-nyonya', kind: 'dish', photo: '/photos/dish-kanom-jeen.jpg', summary: 'Rice noodles in fish curry from breakfast to lunch. Pots at the Ranong Road wet market empty early. 40 to 60 THB.', address: 'Kanom jeen shops, Ranong Rd wet market, Phuket Town', hours: '07:00 to 13:00', price: '40 to 60 THB' },
    { title: 'Massaman', nameLocal: 'แกงมัสมั่น', href: '/thai-food/southern-and-baba-nyonya', kind: 'dish', photo: '/photos/dish-massaman.jpg', summary: 'Muslim-root curry still cooked in Town. Beef if they have it. Milder than gaeng som. 120 to 200 THB.', address: 'Phuket Town Muslim and Baba rooms on Krabi and Dibuk Roads', hours: '11:00 to 21:00', price: '120 to 200 THB' },
  ],
  '/thai-food/koh-samui': [
    { title: 'Chaweng night grills', nameLocal: 'เฉวง', href: '/koh-samui/chaweng', kind: 'place', photo: '/photos/chaweng.jpg', summary: 'Walking-street seafood after 17:00. Price the fish before it hits the coals. 200 to 400 THB a plate is common in 2026.', address: 'Chaweng Walking Street, Bo Phut, Koh Samui 84320', hours: '17:00 to midnight', price: '200 to 400 THB' },
    { title: 'Fisherman Village Friday', nameLocal: 'บ่อผุด', href: '/interests/nightlife/samui-bophut-lamai', kind: 'place', summary: 'Friday walking street in Bophut if you already sleep on that bay. The car from Chaweng is 20 to 40 minutes. 80 to 200 THB.', address: 'Fisherman Village, Bophut, Koh Samui 84320', hours: 'Friday from 17:00', price: '80 to 200 THB' },
    { title: 'Lamai night market', nameLocal: 'ละไม', href: '/koh-samui/lamai', kind: 'place', photo: '/photos/lamai.jpg', summary: 'Smaller than Chaweng and closer if that is your sand. Sunday sessions sit on this coast. Plates 60 to 150 THB.', address: 'Lamai Night Market, Maret, Koh Samui 84310', hours: '17:00 to 22:30', price: '60 to 150 THB' },
    { title: 'Gaeng Som', nameLocal: 'แกงส้ม', href: '/thai-food/southern-and-baba-nyonya', kind: 'dish', photo: '/photos/dish-gaeng-som-2.jpg', summary: 'Sour curry still cooked in island kitchens around Bang Po and Maenam. Ask for less spicy if you want to finish it. 120 to 180 THB.', address: 'Bang Po seafood rooms, Maenam, Koh Samui 84330', hours: '11:00 to 21:00', price: '120 to 180 THB' },
    { title: 'Grilled squid', nameLocal: 'ปลาหมึกย่าง', href: '/koh-samui', kind: 'dish', photo: '/photos/dish-grilled-squid.jpg', summary: 'Beach carts at dusk. Share one squid and confirm the price first. 80 to 150 THB is the fair band.', address: 'Chaweng Beach road carts, Bo Phut, Koh Samui', hours: '16:00 to 22:00', price: '80 to 150 THB' },
    { title: 'Khao Man Gai island', nameLocal: 'ข้าวมันไก่', href: '/thai-food/thai-dishes-to-order-first-trip', kind: 'dish', photo: '/photos/dish-khao-man-gai-2.jpg', summary: 'The same Hainan plate at lunch shophouses near the hospital soi in Chaweng. 50 to 70 THB.', address: 'Chaweng lunch shophouses near the hospital soi, Bo Phut', hours: '09:00 to 15:00', price: '50 to 70 THB' },
    { title: 'Mango sticky rice cart', nameLocal: 'ข้าวเหนียวมะม่วง', href: '/thai-food/thai-dishes-to-order-first-trip', kind: 'dish', photo: '/photos/dish-mango-sticky-2.jpg', summary: 'Seasonal. Beach carts overcharge. A Lamai town shop at 80 to 120 THB is the check.', address: 'Lamai town fruit shops, Maret, Koh Samui 84310', hours: '10:00 to 20:00', price: '80 to 120 THB' },
    { title: 'USM airport snack', nameLocal: 'สนามบินสมุย', href: '/get-there/bangkok-to-koh-samui', kind: 'place', summary: 'The bag belt is slow. Eat after you clear, not in a 20-minute connection. Terminal snacks 80 to 150 THB.', address: 'Samui Airport terminal, Bo Phut, Koh Samui 84320', hours: 'Flight hours', price: '80 to 150 THB' },
    { title: 'West-coast late shops', nameLocal: 'ลิปะน้อย', href: '/koh-samui', kind: 'place', summary: 'West-coast shops thin after 22:00. Chaweng is the 24-hour strip if you need a late bowl. 40 to 80 THB.', address: 'Lipa Noi and Taling Ngam village shops, Koh Samui', hours: 'Most close by 22:00', price: '40 to 80 THB' },
    { title: 'Ang Thong picnic skip', nameLocal: 'อ่างทอง', href: '/koh-samui/ang-thong-marine-park', kind: 'place', photo: '/photos/ang-thong.jpg', summary: 'Boat lunch is boxed. Bring water. The 300 THB park fee is extra. Closed 1 Nov to 15 Dec.', address: 'Ang Thong Marine Park boats, Nathon / Maenam piers', hours: 'Boats 08:00 to 09:00', price: 'Tour plus 300 THB' },
  ],
  '/thai-food/krabi': [
    { title: 'Ao Nang night seafood', nameLocal: 'อ่าวนาง', href: '/krabi', kind: 'place', summary: 'Ao Nang walking-street grills start after 17:00. Price the fish by weight. A fair 2026 plate is 200 to 400 THB.', address: 'Ao Nang Walking Street, Mueang Krabi, Krabi 81000', hours: '17:00 to 23:00', price: '200 to 400 THB' },
    { title: 'Kanom Jeen Nam Ya Poo', nameLocal: 'ขนมจีนน้ำยาปู', href: '/thai-food/southern-and-baba-nyonya', kind: 'dish', photo: '/photos/dish-kanom-jeen-crab.jpg', summary: 'Rice noodles in crab curry at the Krabi Town morning market. Pots empty by 13:00. 40 to 70 THB.', address: 'Krabi Town morning market, Maharat Rd, Pak Nam, Krabi 81000', hours: '07:00 to 13:00', price: '40 to 70 THB' },
    { title: 'Khao Man Gai Town', nameLocal: 'ข้าวมันไก่', href: '/thai-food/thai-dishes-to-order-first-trip', kind: 'dish', photo: '/photos/dish-khao-man-gai.jpg', summary: 'Town lunch cheaper than Ao Nang. Maharat Road shophouses at 50 to 70 THB. Pair with a night in Ao Nang.', address: 'Maharat Rd shophouses, Pak Nam, Krabi 81000', hours: '08:00 to 15:00', price: '50 to 70 THB' },
    { title: 'Railay beach bars', nameLocal: 'ไร่เลย์', href: '/attractions/railay-beach-and-phra-nang-cave', kind: 'place', photo: '/photos/railay.jpg', summary: 'West Railay dinners cost more because every crate crossed by longtail. 150 to 300 THB.', address: 'Railay West beach restaurants, Krabi 81000', hours: '11:00 to 21:00', price: '150 to 300 THB' },
    { title: 'Gaeng Som fish', nameLocal: 'แกงส้มปลา', href: '/thai-food/southern-and-baba-nyonya', kind: 'dish', photo: '/photos/dish-gaeng-som.jpg', summary: 'Sour curry with local fish in Town rooms off Maharat Road. Ask how hot. 80 to 140 THB.', address: 'Krabi Town curry rooms off Maharat Rd', hours: '10:00 to 20:00', price: '80 to 140 THB' },
    { title: 'Mango sticky rice cart', nameLocal: 'ข้าวเหนียวมะม่วง', href: '/thai-food/thai-dishes-to-order-first-trip', kind: 'dish', photo: '/photos/dish-mango-sticky.jpg', summary: 'Ao Nang carts when mango is in. 80 to 120 THB is fair. Walk away from 200 THB.', address: 'Ao Nang Beach road carts, Mueang Krabi', hours: '12:00 to 20:00', price: '80 to 120 THB' },
    { title: 'Klong Jilad pier snack', nameLocal: 'คลองจิหลาด', href: '/get-there/phuket-to-krabi-phi-phi', kind: 'place', summary: 'Phi Phi boats leave from Klong Jilad Pier. Eat a proper lunch in Krabi Town first, because pier snacks run 60 to 100 THB and do not fill you.', address: 'Klong Jilad Pier, Krabi 81000', hours: 'Boat mornings 08:00 to 13:00', price: '60 to 100 THB' },
    { title: 'Tiger Cave water', nameLocal: 'วัดถ้ำเสือ', href: '/krabi', kind: 'place', summary: 'The 1,237 steps at Wat Tham Suea need water you carry yourself. The stall at the base sells bottles around 20 THB. TAT does not list a posted gate fee, so bring small notes for a donation or a possible 50 THB collection.', address: 'Wat Tham Suea, Krabi 81120', hours: '06:00 to 17:00', price: '20 THB water; donation at the gate' },
    { title: 'Hong Island boxed lunch', nameLocal: 'เกาะห้อง', href: '/krabi', kind: 'place', summary: 'Park longtail days include a box. The 300 THB park fee is extra. Leave by 08:00.', address: 'Noppharat Thara / Ao Nang longtail desks', hours: 'Boats 08:00', price: 'Tour plus 300 THB' },
    { title: 'Khao Soi (rare here)', nameLocal: 'ข้าวซอย', href: '/thai-food/chiang-mai', kind: 'dish', summary: 'Not a Krabi dish. If a beach menu lists it, order gaeng som instead and save khao soi for a Chiang Mai lunch clock.', address: 'Skip the beach-menu version', hours: 'Lunch in the north', price: '50 to 80 THB in Chiang Mai' },
  ],
  '/thai-food/isan': [
    { title: 'Som Tum Thai', nameLocal: 'ส้มตำไทย', href: '/thai-food/thai-dishes-to-order-first-trip', kind: 'dish', photo: '/photos/dish-som-tum.jpg', summary: 'Green papaya, peanut, and dried shrimp. Order this first. Thai hot is a different plate. **Somtum Der** on Sukhumvit 49 is the named Bangkok room. 80 to 140 THB.', address: 'Somtum Der, 5/3-5 Soi Sukhumvit 49, Khlong Tan Nuea, Bangkok', hours: '11:00 to 22:00', price: '80 to 140 THB' },
    { title: 'Som Tum Poo Plara', nameLocal: 'ส้มตำปูปลาร้า', href: '/thai-food/isan', kind: 'dish', photo: '/photos/dish-som-tum-2.jpg', summary: 'Crab and fermented fish. The Isan plate, not a first som tum. **Jae Koy** on Phetchaburi 12 is the named Ratchathewi room. 60 to 100 THB.', address: 'Jae Koy Somtum, 362/2-3 Phetchaburi Rd between sois 12 and 14, Ratchathewi, Bangkok 10400', hours: '10:00 to 04:00', price: '60 to 100 THB' },
    { title: 'Larb Moo', nameLocal: 'ลาบหมู', href: '/thai-food/northern-lanna', kind: 'dish', photo: '/photos/dish-larb.jpg', summary: 'Minced pork salad with toasted rice. Isan larb is hotter than the northern version. Order it at **Jae Koy** or **Somtum Der**. 80 to 120 THB.', address: 'Jae Koy Somtum, 362/2-3 Phetchaburi Rd, Ratchathewi, Bangkok 10400', hours: '10:00 to 04:00', price: '80 to 120 THB' },
    { title: 'Gai Yang', nameLocal: 'ไก่ย่าง', href: '/thai-food/isan', kind: 'dish', photo: '/photos/dish-gai-yang.jpg', summary: 'Gai yang is charcoal grilled chicken with sticky rice and jaew. **Sabai Jai Gai Yang** is at 87 Sukhumvit 63 (Soi Ekkamai 3), Khlong Tan Nuea, not on Samsen. A small bird is about 100 THB, and a large bird is about 200 THB.', address: 'Sabai Jai Gai Yang, 87 Sukhumvit 63 (Soi Ekkamai 3), Khlong Tan Nuea, Watthana, Bangkok 10110', hours: '10:30 to 22:00', price: '100 to 220 THB' },
    { title: 'Nam Tok', nameLocal: 'น้ำตก', href: '/thai-food/isan', kind: 'dish', photo: '/photos/dish-nam-tok.jpg', summary: 'Grilled-beef salad in the same herb family as larb. Sticky rice on the side. Soi Sukhumvit 38 late rooms. 80 to 140 THB.', address: 'Isan rooms on Soi Sukhumvit 38 late strip, Phra Khanong', hours: '17:00 to 02:00', price: '80 to 140 THB' },
    { title: 'Tom Saap', nameLocal: 'ต้มแซ่บ', href: '/thai-food/isan', kind: 'dish', summary: 'Hot and sour pork-bone soup meant for sharing. It is not tom yum. Victory Monument west alleys still cook it at 80 to 150 THB.', address: 'Isan shophouses, Victory Monument west alleys, Ratchathewi', hours: '10:00 to 20:00', price: '80 to 150 THB' },
    { title: 'Khao Niew', nameLocal: 'ข้าวเหนียว', href: '/thai-food/thai-dishes-to-order-first-trip', kind: 'dish', summary: 'Sticky rice is the utensil. Order a basket with every grill and ask for khao niew, not jasmine. 10 to 22 THB.', address: 'Any Isan grill; ask for khao niew, not jasmine', hours: 'With the grill', price: '10 to 22 THB' },
    { title: 'Ubon night market', nameLocal: 'อุบลราชธานี', href: '/thai-food/night-markets', kind: 'place', summary: 'If you are actually in Isan, night markets beat hotel buffets. Plates 40 to 80 THB.', address: 'Ubon Night Market, Khammalai Rd, Ubon Ratchathani 34000', hours: '17:00 to 22:00', price: '40 to 80 THB' },
    { title: 'Khao Yai grill', nameLocal: 'เขาใหญ่', href: '/khao-yai', kind: 'place', summary: 'Pak Chong night markets are the grill stop after a Khao Yai park day. Gai yang and som tum run 60 to 120 THB.', address: 'Pak Chong night market, Mittraphap Rd, Pak Chong, Nakhon Ratchasima', hours: '17:00 to 22:00', price: '60 to 120 THB' },
    { title: 'Chang and Kood seafood', nameLocal: 'ตราด', href: '/koh-chang-and-koh-kood', kind: 'place', summary: 'Trat and the east islands. Price squid by weight. 80 to 200 THB if you ask first.', address: 'White Sand Beach restaurants, Koh Chang, Trat 23170', hours: '11:00 to 21:00', price: '80 to 200 THB' },
  ],
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
    ...dishDirectoryItems([...BANGKOK_DISHES, ...CHIANG_MAI_DISHES]),
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
