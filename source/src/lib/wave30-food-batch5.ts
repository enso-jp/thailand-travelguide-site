import { hotelSearchLink, klookTours, stayAreaLink, stayLink } from './partners';
import type { Affiliate, Faq, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'Search stays', photo, partner: 'stay' };
}

function klook(title: string, body: string, query: string, photo: string): Affiliate {
  return { title, kicker: 'Klook', body, href: klookTours(query), cta: 'See tickets', photo, partner: 'klook' };
}

const hubs: Page[] = [
  {
    path: '/thai-food/koh-chang',
    title: 'Koh Chang food guide',
    description:
      'Koh Chang eating: Bang Bao pier seafood, Nong Anat curry rice, Kin Dee at White Sand, and a 239 THB cook-it-yourself table in Kai Bae.',
    lede:
      'Koh Chang food is known for a pier seafood bill and a 40 to 70 THB roadside curry. It fits a west-coast week, not a Bangkok stall crawl.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Koh Chang', href: '/thai-food/koh-chang' },
    ],
    facts: [
      { label: 'Curry rice', value: 'Often 40 to 70 THB on the roadside' },
      { label: 'Bang Bao', value: 'Fish often 200 to 350 THB; Ruan Thai 09:00 to 21:00' },
      { label: 'Kai Bae', value: 'Goong Ka Ta, 239 THB a person' },
      { label: 'Shakes', value: '40 to 60 THB; coconut often 40 to 50 THB' },
    ],
    chips: ['Bang Bao', 'Klong Prao', 'White Sand'],
    photo: '/photos/food-b5-koh-chang.jpg',
    geo: { lat: 12.1036, lon: 102.3518, containedIn: 'Trat' },
    paragraphs: [
      'Eat curry and noodles on the main road when you want a 40 to 70 THB plate. Nong Anat at the north end of Klong Prao village is the curry-rice room. Kin Dee, inland of White Sand, keeps a Thai menu.',
      'Bang Bao is the expensive pier. A seafood sitting is often 300 to 400 THB a person. For the island map use [Koh Chang](/koh-chang). For the quieter Trat island use [Koh Kood food](/thai-food/koh-kood).',
    ],
    portraits: [
      { title: 'Koh Chang', href: '/koh-chang', photo: '/photos/koh-chang.jpg' },
      { title: 'White Sand', href: '/koh-chang', photo: '/photos/white-sand-chang.jpg' },
      { title: 'Koh Kood food', href: '/thai-food/koh-kood', photo: '/photos/koh-kood.jpg' },
      { title: 'Ordering seafood', href: '/thai-food/ordering-thai-seafood', photo: '/photos/thai-food-southern.jpg' },
    ],
    affiliates: [
      stay('Koh Chang stays', 'White Sand or Klong Prao', 'Sleep on the beach where you will eat. Songthaews thin out after dark.', stayLink('koh-chang'), '/photos/klong-prao.jpg'),
      klook('Trat ferries', 'Name the pier. Center Point is not every operator.', 'Koh Chang ferry', '/photos/ferry-gulf.jpg'),
    ],
    faqs: [
      { q: 'Where is the cheap plate?', a: 'Roadside curry and noodles, often 40 to 70 THB. Bang Bao is the 300 to 400 THB seafood sitting.' },
      { q: 'Kai Bae on a budget?', a: 'Goong Ka Ta is 239 THB a person and you cook the food yourself.' },
    ],
  },
  {
    path: '/thai-food/khao-sok',
    title: 'Khao Sok food guide',
    description:
      'Khao Sok eating: a 06:30 village market at 40 to 80 THB, Ban Ta Khun day market until 16:00, and kitchens on the Cheow Lan rafts.',
    lede:
      'Khao Sok food is known for a short morning market and raft kitchens on the lake. It fits a village breakfast, then a night on the water.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Khao Sok', href: '/thai-food/khao-sok' },
    ],
    facts: [
      { label: 'Morning market', value: '06:30 to 09:00; breakfast often 40 to 80 THB' },
      { label: 'Ban Ta Khun', value: 'Day market 06:00 to 16:00 at the pier turnoff' },
      { label: 'Pawn', value: 'Moo 6 village room, 10:00 to 21:00' },
      { label: 'Longtail', value: 'Ratchaprapha Pier, 1,800 to 2,500 THB' },
    ],
    chips: ['Village', 'Ban Ta Khun', 'Cheow Lan'],
    photo: '/photos/food-b5-khao-sok.jpg',
    geo: { lat: 8.91, lon: 98.53, containedIn: 'Surat Thani' },
    paragraphs: [
      'The Highway 401 village feeds you before the boat. Curry pots run about 06:30 to 09:00 at 40 to 80 THB. Pawn opens at 10:00. Lab Roi Et, near the park gate, runs to 22:00.',
      'Cheow Lan meals are cooked on the raft. Buy fruit and duck at Ban Ta Khun, 06:00 to 16:00, if you want food in the boat bag. For the lake map use [Khao Sok](/khao-sok).',
    ],
    portraits: [
      { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Cheow Lan Lake', href: '/attractions/cheow-lan-lake-khao-sok', photo: '/photos/cheow-lan.jpg' },
      { title: 'Krabi food', href: '/thai-food/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Phuket food', href: '/thai-food/phuket', photo: '/photos/thai-food-southern.jpg' },
    ],
    affiliates: [
      stay('Khao Sok stays', 'Village or raft', 'The village has the restaurants. The raft has the dawn.', hotelSearchLink('Khao Sok'), '/photos/khao-lak.jpg'),
      klook('Lake boats', 'Book the boat with the transfer. Village curry is a separate meal.', 'Khao Sok lake tour', '/photos/longtail-andaman.jpg'),
    ],
    faqs: [
      { q: 'Where is breakfast?', a: 'Village centre, 06:30 to 09:00, often 40 to 80 THB. Coco Bakery opens at 07:30.' },
      { q: 'Dinner on the lake?', a: 'At the raft house. You will not ride back to the village at night.' },
    ],
  },
  {
    path: '/thai-food/khao-yai',
    title: 'Khao Yai food guide',
    description:
      'Khao Yai eating is Pak Chong Night Market, 17:00 to 22:00, with Isan plates at 40 to 80 THB and Thanarat Road cafes at higher prices.',
    lede:
      'Khao Yai food is known for Pak Chong after the park, not a trail canteen. It fits a town dinner at 80 to 150 THB, then a drive back to the room.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Khao Yai', href: '/thai-food/khao-yai' },
    ],
    facts: [
      { label: 'Night market', value: 'Daily 17:00 to 22:00; often 80 to 150 THB' },
      { label: 'Som tum', value: 'Often 40 to 80 THB a plate' },
      { label: 'Thanarat Road', value: 'Coffee often 90 to 160 THB' },
      { label: 'Park fee', value: 'About 400 THB for a foreign adult' },
    ],
    chips: ['Pak Chong', 'Som tum', 'Night market'],
    photo: '/photos/food-b5-khao-yai.jpg',
    geo: { lat: 14.439, lon: 101.372, containedIn: 'Nakhon Ratchasima' },
    paragraphs: [
      'The night market near the railway station is the dinner: skewers about 10 THB, som tum often 40 to 80 THB, a casual meal often 80 to 150 THB. It runs 17:00 to 22:00.',
      'Thanarat Road cafes are the view stop, with coffee often 90 to 160 THB. For the park day use [Khao Yai](/khao-yai). For the wider salad map use [Isan food](/thai-food/isan).',
    ],
    portraits: [
      { title: 'Khao Yai', href: '/khao-yai', photo: '/photos/khao-yai.jpg' },
      { title: 'Isan food', href: '/thai-food/isan', photo: '/photos/haew-suwat.jpg' },
      { title: 'Bangkok food', href: '/thai-food/bangkok', photo: '/photos/thai-food-bangkok-street.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg' },
    ],
    affiliates: [
      stay('Khao Yai stays', 'Pak Chong', 'Sleep in town if the market is dinner. Weekend rates jump.', hotelSearchLink('Khao Yai'), '/photos/pak-chong.jpg'),
      klook('Park vans', 'Dawn loops and a night safari. The 400 THB fee is often extra.', 'Khao Yai National Park', '/photos/khao-yai.jpg'),
    ],
    faqs: [
      { q: 'Where is dinner?', a: 'Pak Chong Night Market, daily 17:00 to 22:00.' },
      { q: 'Eat inside the park?', a: 'Bring water. The published cheap plates are in Pak Chong, not at a trailhead.' },
    ],
  },
];

const cm: Page[] = [
  {
    path: '/thai-food/chiang-mai-nimman-food',
    title: 'Nimman food guide',
    description:
      'Nimman food is Kao Soy Nimman on Soi 7, Huen Phen on Soi 5 from 11:00 to 22:00, and pour-over at 80 to 150 THB. It is west of the moat.',
    lede:
      'Nimman is known for a khao soi room and cafes west of the moat. It fits an afternoon after a market morning, not a 07:00 Warorot walk.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Chiang Mai', href: '/thai-food/chiang-mai' },
      { name: 'Nimman', href: '/thai-food/chiang-mai-nimman-food' },
    ],
    facts: [
      { label: 'Kao Soy Nimman', value: '22 Nimman Soi 7; two bowls about 220 THB' },
      { label: 'Huen Phen', value: 'Soi 5; daily 11:00 to 22:00' },
      { label: 'Coffee', value: 'Pour-over often 80 to 150 THB' },
      { label: 'Graph', value: '25 Soi 13 Sirimangkalajarn; 09:00 to 17:00' },
    ],
    chips: ['Nimman', 'Khao soi', 'Coffee'],
    photo: '/photos/food-b5-cm-nimman.jpg',
    geo: { lat: 18.798, lon: 98.967, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Kao Soy Nimman is at 22 Nimmana Haeminda Road Lane 7. Two bowls run about 220 THB. Huen Phen Nimman is at No. 2, Soi 5, daily 11:00 to 22:00 on the Thai branch page. Phone 099 242 2299.',
      'GRAPH Quarter at 25 Soi 13 Sirimangkalajarn is the pour-over stop, 09:00 to 17:00, often 80 to 150 THB. Maya basement is air-con shopping. For the classic lunch bowl use [Chang Phueak food](/thai-food/chiang-mai-chang-phueak-food).',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Khao soi** at Soi 7 if you want the curry noodle without crossing the moat.',
          '**A northern table** at Huen Phen Soi 5 after 11:00.',
          '**Coffee second.** A pour-over is often 80 to 150 THB and it is not lunch.',
        ],
      },
    ],
    portraits: [
      { title: 'Chiang Mai food', href: '/thai-food/chiang-mai', photo: '/photos/night-market-cm.jpg' },
      { title: 'Nimman', href: '/chiang-mai/nimmanhaemin', photo: '/photos/nimman.jpg' },
      { title: 'Old City food', href: '/thai-food/chiang-mai-old-city-food', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Coffee guide', href: '/thai-food/bangkok-and-chiang-mai-coffee-guide', photo: '/photos/thai-food-lanna.jpg' },
    ],
    affiliates: [
      stay('Nimman stays', 'West of the moat', 'Sleep here if dinner is Soi 5 and the cafes, not a 06:00 market.', stayAreaLink('nimmanhaemin'), '/photos/chiang-mai.jpg'),
      klook('Cooking class', 'A half-day wok if you want the paste explained.', 'Chiang Mai cooking class', '/photos/doi-suthep.jpg'),
    ],
    faqs: [
      { q: 'Is Nimman the khao soi capital?', a: 'It has a named room. The lunch-clock shops many people still cite are north of the moat in Chang Phueak.' },
      { q: 'Huen Phen hours?', a: 'The Nimman branch lists 11:00 to 22:00 daily.' },
    ],
  },
  {
    path: '/thai-food/chiang-mai-old-city-food',
    title: 'Chiang Mai Old City food',
    description:
      'Old City food is Huen Phen on Ratchamankha, Khun Yai khao soi until 14:00, and Sunday walking street snacks on Ratchadamnoen.',
    lede:
      'The Old City is known for a moat lunch and a Sunday street. It fits a walk from Tha Phae Gate, with Khun Yai bowls at 40 to 60 THB before 14:00.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Chiang Mai', href: '/thai-food/chiang-mai' },
      { name: 'Old City', href: '/thai-food/chiang-mai-old-city-food' },
    ],
    facts: [
      { label: 'Huen Phen', value: '112 Ratchamankha; 08:30 to 16:30 and 17:00 to 22:00' },
      { label: 'Khun Yai', value: 'Mon to Sat 10:00 to 14:00; closed Sunday; 40 to 60 THB' },
      { label: 'Sunday street', value: 'Ratchadamnoen, about 17:00 to 22:00' },
      { label: 'Snacks', value: 'Sunday cups often 20 to 60 THB' },
    ],
    chips: ['Old City', 'Khun Yai', 'Sunday street'],
    photo: '/photos/food-b5-cm-old-city.jpg',
    geo: { lat: 18.788, lon: 98.985, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Huen Phen at 112 Ratchamankha Road, Phra Sing, opens 08:30 to 16:30 and 17:00 to 22:00. Khao Soi Khun Yai, Soi Sri Poom 8, is Monday to Saturday 10:00 to 14:00, closed Sunday, about 40 to 60 THB.',
      'Sunday walking street fills Ratchadamnoen from about 17:00 to 22:00. Snack cups are often 20 to 60 THB. Saturday is [Wualai](/thai-food/chiang-mai-wualai-food), not this road. For coffee opposite Wat Phra Singh, Akha Ama Phrasingh is the Old City roaster room.',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Khao soi at Khun Yai** before 14:00, and not on Sunday.',
          '**A northern table** at Huen Phen, including the evening sitting after 17:00.',
          '**Sunday snacks** on Ratchadamnoen, 20 to 60 THB, after the temples.',
        ],
      },
    ],
    portraits: [
      { title: 'Chiang Mai food', href: '/thai-food/chiang-mai', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Old City', href: '/chiang-mai/old-city', photo: '/photos/wat-phra-singh.jpg' },
      { title: 'Chang Phueak food', href: '/thai-food/chiang-mai-chang-phueak-food', photo: '/photos/chiang-mai.jpg' },
      { title: 'Khao soi circuit', href: '/thai-food/chiang-mai-khao-soi-and-markets', photo: '/photos/night-market-cm.jpg' },
    ],
    affiliates: [
      stay('Old City stays', 'Inside the moat', 'Sleep here if Khun Yai and the Sunday street are the meals.', stayAreaLink('chiang-mai-old-city'), '/photos/chiang-mai-old-city.jpg'),
      klook('Old City walks', 'The moat is walkable. A class is optional.', 'Chiang Mai food tour', '/photos/doi-suthep.jpg'),
    ],
    faqs: [
      { q: 'Sunday khao soi at Khun Yai?', a: 'No. The room is closed Sunday. Use Mae Sai in Chang Phueak on Monday to Saturday, or Kao Soy Nimman.' },
      { q: 'Two Huen Phen rooms?', a: 'Ratchamankha is the Old City branch. Soi 5 is Nimman, 11:00 to 22:00.' },
    ],
  },
  {
    path: '/thai-food/chiang-mai-chang-phueak-food',
    title: 'Chang Phueak food guide',
    description:
      'Chang Phueak food is Khao Soi Mae Sai and Mae Manee north of the moat, plus Huen Muan Jai on Ratchaphruek Road. Lunch, not a night market.',
    lede:
      'Chang Phueak is known for khao soi north of the moat. It fits a late morning, with Mae Sai at 55 to 90 THB and a Sunday closure on that room.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Chiang Mai', href: '/thai-food/chiang-mai' },
      { name: 'Chang Phueak', href: '/thai-food/chiang-mai-chang-phueak-food' },
    ],
    facts: [
      { label: 'Mae Sai', value: 'Mon to Sat 08:00 to 16:00; closed Sunday; 55 to 90 THB' },
      { label: 'Mae Manee', value: '09:00 to 15:30; TAT lists 40 to 120 THB' },
      { label: 'Huen Muan Jai', value: '24 Ratchaphruek; closed Wednesday' },
      { label: 'Address', value: 'Mae Sai, 29/1 Ratchaphruek Rd' },
    ],
    chips: ['Chang Phueak', 'Mae Sai', 'Ratchaphruek'],
    photo: '/photos/food-b5-cm-chang-phueak.jpg',
    geo: { lat: 18.804, lon: 98.985, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Khao Soi Mae Sai is at 29/1 Ratchaphruek Road, Monday to Saturday 08:00 to 16:00, closed Sunday, 55 to 90 THB. Khao Soi Mae Manee is at 18 Soi Chotana 24, 09:00 to 15:30. TAT lists that bowl at 40 to 120 THB.',
      'Huen Muan Jai at 24 Ratchaphruek Road is the sit-down northern table. Michelin hours: Monday, Tuesday, Thursday, Friday, and Sunday 11:00 to 21:00; Saturday split 11:00 to 15:00 and 17:00 to 21:00; closed Wednesday. For the moat side use [Old City food](/thai-food/chiang-mai-old-city-food).',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Khao soi** at Mae Sai or Mae Manee. Arrive before 13:00. Both rooms are lunch.',
          '**Nam prik and a northern curry** at Huen Muan Jai if you want a table, not a stool.',
          '**Not Sunday at Mae Sai.** That room is closed. Khun Yai inside the moat is closed Sunday too.',
        ],
      },
    ],
    portraits: [
      { title: 'Chiang Mai food', href: '/thai-food/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Khao soi circuit', href: '/thai-food/chiang-mai-khao-soi-and-markets', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Santitham food', href: '/thai-food/chiang-mai-santitham-food', photo: '/photos/northern.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/night-market-cm.jpg' },
    ],
    affiliates: [
      stay('Old City stays', 'Walk north', 'The moat is close enough for Mae Manee. Nimman is the cafe side.', stayAreaLink('chiang-mai-old-city'), '/photos/chiang-mai-old-city.jpg'),
      klook('Chiang Mai food', 'The shops are walkable from Chang Phueak Gate.', 'Chiang Mai food tour', '/photos/doi-suthep.jpg'),
    ],
    faqs: [
      { q: 'Mae Sai or Mae Manee?', a: 'Mae Sai for the Bib-era shop on Ratchaphruek, 55 to 90 THB, closed Sunday. Mae Manee for Soi Chotana 24, open to 15:30.' },
      { q: 'Sunday lunch?', a: 'Mae Sai is closed. Use a Nimman room or a Sunday street snack.' },
    ],
  },
  {
    path: '/thai-food/chiang-mai-santitham-food',
    title: 'Santitham food guide',
    description:
      'Santitham food is the local grid north of the moat, with Akha Ama Living Factory on Hussadhisewee Soi 3 and Chang Phueak khao soi a short ride away.',
    lede:
      'Santitham is known as a residential grid with a coffee roaster, not a night bazaar. It fits a pour-over at 80 to 150 THB, then khao soi in Chang Phueak.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Chiang Mai', href: '/thai-food/chiang-mai' },
      { name: 'Santitham', href: '/thai-food/chiang-mai-santitham-food' },
    ],
    facts: [
      { label: 'Akha Ama', value: 'Living Factory, Hussadhisewee Soi 3' },
      { label: 'Pour-over', value: 'Often 80 to 150 THB in Chiang Mai' },
      { label: 'Khao soi', value: 'Mae Sai, 55 to 90 THB, a short ride south' },
      { label: 'Not here', value: 'No Sunday walking street in Santitham' },
    ],
    chips: ['Santitham', 'Akha Ama', 'Coffee'],
    photo: '/photos/food-b5-cm-santitham.jpg',
    geo: { lat: 18.81, lon: 98.988, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Akha Ama Living Factory roasts on Hussadhisewee Soi 3. The Old City cup is Akha Ama Phrasingh on Ratchadamnoen, opposite Wat Phra Singh. A Chiang Mai pour-over is often 80 to 150 THB.',
      'The curry-noodle rooms are south of here. Mae Sai on Ratchaphruek is 55 to 90 THB, Monday to Saturday 08:00 to 16:00. Use [Chang Phueak food](/thai-food/chiang-mai-chang-phueak-food) for that lunch.',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Coffee** at Living Factory if you are already in Santitham.',
          '**Khao soi elsewhere.** Do not hunt the classic bowl on a residential soi.',
          '**Sunday street** is Ratchadamnoen, inside the moat, not this neighbourhood.',
        ],
      },
    ],
    portraits: [
      { title: 'Chang Phueak food', href: '/thai-food/chiang-mai-chang-phueak-food', photo: '/photos/chiang-mai.jpg' },
      { title: 'Coffee guide', href: '/thai-food/bangkok-and-chiang-mai-coffee-guide', photo: '/photos/nimman.jpg' },
      { title: 'Chiang Mai food', href: '/thai-food/chiang-mai', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Old City food', href: '/thai-food/chiang-mai-old-city-food', photo: '/photos/chiang-mai-old-city.jpg' },
    ],
    affiliates: [
      stay('Chiang Mai stays', 'Moat or Nimman', 'Santitham is a daytime coffee grid. Sleep inside the moat if the Sunday street matters.', stayLink('chiang-mai'), '/photos/night-market-cm.jpg'),
      klook('Chiang Mai coffee and food', 'The roaster is a stop, not a tour.', 'Chiang Mai food tour', '/photos/northern.jpg'),
    ],
    faqs: [
      { q: 'Is there a night market?', a: 'No. Night snacks are the Sunday street or the Saturday Wualai walk.' },
      { q: 'Which Akha Ama?', a: 'Living Factory in Santitham. Phrasingh is the Old City room on Ratchadamnoen.' },
    ],
  },
  {
    path: '/thai-food/chiang-mai-wualai-food',
    title: 'Wualai food guide',
    description:
      'Wualai food is the Saturday walking street near Chiang Mai Gate, about 17:00 to 22:00. Sunday snacks move to Ratchadamnoen inside the moat.',
    lede:
      'Wualai is known for the Saturday walking street and silver shops. It fits a 17:00 to 22:00 snack walk, not a khao soi lunch.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Chiang Mai', href: '/thai-food/chiang-mai' },
      { name: 'Wualai', href: '/thai-food/chiang-mai-wualai-food' },
    ],
    facts: [
      { label: 'Saturday', value: 'Wua Lai Road, about 17:00 to 22:00' },
      { label: 'Sunday', value: 'That street is Ratchadamnoen, not Wualai' },
      { label: 'Lunch', value: 'Khao soi is a daytime bowl, 50 to 80 THB' },
      { label: 'Gate', value: 'Chiang Mai Gate, south of the moat' },
    ],
    chips: ['Wualai', 'Saturday', 'Walking street'],
    photo: '/photos/food-b5-cm-wualai.jpg',
    geo: { lat: 18.778, lon: 98.984, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Saturday walking street runs Wua Lai Road near Chiang Mai Gate, about 17:00 to 22:00. It is silver, crafts, and snack cups. Sunday moves to Ratchadamnoen, where cups are often 20 to 60 THB.',
      'Do not come here at noon for khao soi. Those rooms are at lunch, 50 to 80 THB in town, and many close by 15:00. Use [Old City food](/thai-food/chiang-mai-old-city-food) for Khun Yai and Huen Phen.',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**A snack, not a banquet.** The street is a walk between silver shops.',
          '**Sunday is a different road.** Ratchadamnoen, inside the moat.',
          '**Lunch earlier** at a khao soi room if you need a real bowl the same day.',
        ],
      },
    ],
    portraits: [
      { title: 'Old City food', href: '/thai-food/chiang-mai-old-city-food', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Chiang Mai food', href: '/thai-food/chiang-mai', photo: '/photos/night-market-cm.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Chiang Mai Gate area', href: '/chiang-mai/old-city', photo: '/photos/wat-phra-singh.jpg' },
    ],
    affiliates: [
      stay('Old City stays', 'South moat', 'Chiang Mai Gate is the Saturday start. Sunday is the north-south road inside the square.', stayAreaLink('chiang-mai-old-city'), '/photos/wat-phra-singh.jpg'),
      klook('Walking street', 'Saturday is Wualai. You do not need a guide to walk it.', 'Chiang Mai night market', '/photos/thai-food-lanna.jpg'),
    ],
    faqs: [
      { q: 'Which night?', a: 'Saturday on Wualai. Sunday on Ratchadamnoen.' },
      { q: 'Khao soi here?', a: 'No. Eat that at lunch, often 50 to 80 THB, then walk the street.' },
    ],
  },
];

export const wave30FoodBatch5: Page[] = [...hubs, ...cm];
