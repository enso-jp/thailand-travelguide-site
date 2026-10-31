import { klookTours, stayAreaLink, stayLink } from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'Search stays', photo, partner: 'stay' };
}

function klook(title: string, body: string, query: string, photo: string): Affiliate {
  return { title, kicker: 'Klook', body, href: klookTours(query), cta: 'See tickets', photo, partner: 'klook' };
}

export const wave31FoodBatch8: Page[] = [
  {
    path: '/thai-food/chiang-mai-sam-lan-food',
    title: 'Sam Lan food guide',
    description:
      'Sam Lan food is the charcoal chicken at SP Chicken, 105 THB for half a bird, daily from 10:00 to 17:00 beside Wat Phra Singh.',
    lede:
      'Sam Lan is known for a garlic-stuffed chicken turned over charcoal. The grill sits on Soi 1 and shuts at 17:00, which makes it a lunch lane, not a night market.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Chiang Mai', href: '/thai-food/chiang-mai' },
      { name: 'Sam Lan', href: '/thai-food/chiang-mai-sam-lan-food' },
    ],
    facts: [
      { label: 'Chicken', value: 'Half 105 THB, whole 190 THB' },
      { label: 'Hours', value: '10:00 to 17:00 daily' },
      { label: 'Address', value: '9/1 Sam Lan Soi 1, Phra Sing' },
      { label: 'Rice', value: 'Sticky rice 15 THB' },
    ],
    chips: ['Sam Lan', 'Gai yang', 'Lunch'],
    photo: '/photos/food-b8-sam-lan.jpg',
    geo: { lat: 18.788, lon: 98.981, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Order the half chicken at 105 THB, som tum at 40 THB, and a sticky-rice basket at 15 THB. The full bird is 190 THB. Larb on the same board is 60 THB and it is the lime version, not northern larb kua.',
      'For a curry noodle after 17:00, leave the lane. [Huen Phen khao soi](/thai-food/chiang-mai--hp-khao-soi) on Ratchamankha stays open until 22:00, with a break from 16:30 to 17:00. The chicken page is [charcoal grilled chicken](/thai-food/chiang-mai--sp-gai-yang).',
    ],
    portraits: [
      { title: 'Chiang Mai food', href: '/thai-food/chiang-mai', photo: '/photos/night-market-cm.jpg' },
      { title: 'Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Khao soi walk', href: '/thai-food/chiang-mai-khao-soi-and-markets', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Old City walks', href: '/chiang-mai/old-city', photo: '/photos/wat-phra-singh.jpg' },
    ],
    affiliates: [
      stay('Old City stays', 'Walk to the grill', 'Sleep inside the moat if lunch is Sam Lan, not a Grab from Nimman.', stayAreaLink('chiang-mai-old-city'), '/photos/chiang-mai.jpg'),
      klook('Cooking class', 'A half-day wok if you want the paste explained.', 'Chiang Mai cooking class', '/photos/doi-suthep.jpg'),
    ],
    faqs: [
      { q: 'How late is the chicken grill?', a: 'SP Chicken runs daily from 10:00 to 17:00, so do not plan it as dinner.' },
      { q: 'What should I add to the bird?', a: 'Som tum is 40 THB and sticky rice is 15 THB on the same board.' },
    ],
  },
  {
    path: '/thai-food/chiang-mai-faham-food',
    title: 'Fa Ham food guide',
    description:
      'Fa Ham food is khao soi at Samer Jai, 60 to 70 THB, daily 08:00 to 17:00 on Charoenrat Road beside Wat Fa Ham.',
    lede:
      'Fa Ham is known for a lunch khao soi on the Ping river road. Samer Jai opens at 08:00 and stops at 17:00, which is earlier than a Nimman dinner.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Chiang Mai', href: '/thai-food/chiang-mai' },
      { name: 'Fa Ham', href: '/thai-food/chiang-mai-faham-food' },
    ],
    facts: [
      { label: 'Samer Jai', value: '391 Charoenrat Rd; 08:00 to 17:00' },
      { label: 'Bowl', value: '60 to 70 THB' },
      { label: 'Comedara', value: '193 Charoenrat; 11:00 to 23:00' },
      { label: 'Hang lay', value: 'Price not posted; ask first' },
    ],
    chips: ['Fa Ham', 'Khao soi', 'River'],
    photo: '/photos/food-b8-faham.jpg',
    geo: { lat: 18.803, lon: 99.003, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Samer Jai at 391 Charoenrat Road is the lunch bowl, 60 to 70 THB, daily until 17:00. Comedara at 193 Charoenrat Road stays open until 23:00 for hang lay. It posts no current pot price, so ask before you order.',
      'If you need the curry at a posted 120 THB, use [Huen Phen](/thai-food/chiang-mai--hp-hang-lay) inside the moat. The Fa Ham bowl is [Samer Jai khao soi](/thai-food/chiang-mai--samer-jai-khao-soi).',
    ],
    portraits: [
      { title: 'Chiang Mai food', href: '/thai-food/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Old City food', href: '/thai-food/chiang-mai-old-city-food', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Sam Lan chicken', href: '/thai-food/chiang-mai-sam-lan-food', photo: '/photos/wat-phra-singh.jpg' },
    ],
    affiliates: [
      stay('Old City stays', 'Short ride to the river', 'Sleep in the moat and ride to Fa Ham for lunch.', stayAreaLink('chiang-mai-old-city'), '/photos/night-market-cm.jpg'),
      klook('Food walk', 'Book a walk only if the group stays together.', 'Chiang Mai food tour', '/photos/doi-suthep.jpg'),
    ],
    faqs: [
      { q: 'Can I eat khao soi here at night?', a: 'Samer Jai closes at 17:00. Comedara on the same road runs until 23:00, and that order is hang lay, not the noodle.' },
      { q: 'How much is the bowl?', a: 'A 2026 shop-board roundup puts Samer Jai at 60 to 70 THB.' },
    ],
  },
  {
    path: '/thai-food/chiang-rai-phahonyothin-food',
    title: 'Phahonyothin food guide',
    description:
      'Phahonyothin food is Salung Kham at 834/3, open 10:30 to 22:00, with sai ua at 275 THB a half kilo.',
    lede:
      'This stretch of Phahonyothin Road is known for Salung Kham, a northern kitchen that sells sausage and curry by the pack. It is open 10:30 to 22:00 every day.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Chiang Rai', href: '/thai-food/chiang-rai' },
      { name: 'Phahonyothin', href: '/thai-food/chiang-rai-phahonyothin-food' },
    ],
    facts: [
      { label: 'Sausage', value: '275 THB a half kilo' },
      { label: 'Hang lay', value: '250 THB a half kilo' },
      { label: 'Naem', value: '60 THB for 120 grams' },
      { label: 'Hours', value: '10:30 to 22:00 daily' },
    ],
    chips: ['Salung Kham', 'Sai ua', 'Hang lay'],
    photo: '/photos/dish-b8-chiang-mai-hp-sai-ua.jpg',
    geo: { lat: 19.91, lon: 99.832, containedIn: 'Chiang Rai' },
    paragraphs: [
      'Read the unit before you order. Sai ua is 275 THB a half kilo. Nam prik noom and nam prik eke are 180 THB a half kilo. Naem is the small buy, 60 THB for 120 grams.',
      'The sausage page is [half-kilo northern sausage](/thai-food/chiang-rai--salung-sai-ua). For a lunch bowl in town, use the [Chiang Rai food hub](/thai-food/chiang-rai).',
    ],
    portraits: [
      { title: 'Chiang Rai food', href: '/thai-food/chiang-rai', photo: '/photos/chiang-rai.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Chiang Rai', href: '/chiang-rai', photo: '/photos/blue-temple.jpg' },
      { title: 'Chiang Mai food', href: '/thai-food/chiang-mai', photo: '/photos/chiang-mai.jpg' },
    ],
    affiliates: [
      stay('Chiang Rai stays', 'Town, not a temple van', 'Sleep in town if dinner is this road, not a White Temple day trip.', stayLink('chiang-rai'), '/photos/northern.jpg'),
      klook('Temple day', 'Temple vans are a different ticket from this kitchen.', 'Chiang Rai food tour', '/photos/blue-temple.jpg'),
    ],
    faqs: [
      { q: 'Is 275 THB a single plate of sausage?', a: 'No. 275 THB buys half a kilo, which is more than one diner needs. Ask for a sliced plate if you are eating in.' },
      { q: 'How late is Salung Kham?', a: 'Every day from 10:30 to 22:00. Read the unit before you order, because several plates are sold by the half kilo.' },
    ],
  },
  {
    path: '/thai-food/phuket-dibuk-food',
    title: 'Dibuk Road food guide',
    description:
      'Dibuk Road food is Raya, open 10:00 to 22:00 with last order at 21:30. Crab curry is 400 THB small and 600 THB large.',
    lede:
      'Dibuk Road is known for Raya, a southern kitchen in an old shophouse. A small crab curry is 400 THB and a large one is 600 THB, with last order at 21:30.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Phuket', href: '/thai-food/phuket' },
      { name: 'Dibuk', href: '/thai-food/phuket-dibuk-food' },
    ],
    facts: [
      { label: 'Raya', value: '48/1 Dibuk; last order 21:30' },
      { label: 'Crab curry', value: '400 THB small; 600 large' },
      { label: 'Tu Kab Khao', value: 'Fern salad 185 THB; until 21:00' },
      { label: 'Noodles', value: 'Mee Ton Poe from 70 THB; until 18:00' },
    ],
    chips: ['Dibuk', 'Moo hong', 'Crab curry'],
    photo: '/photos/dish-b8-phuket-raya-crab-curry.jpg',
    geo: { lat: 7.884, lon: 98.388, containedIn: 'Phuket' },
    paragraphs: [
      'Raya at 48/1 Dibuk Road is the crab curry with betel leaf, and the pepper pork sits on the same menu. A 2026 diner paid 400 THB for a small pot and 600 THB for a large one. Last order is 21:30.',
      'If you want a lighter plate the same afternoon, [Tu Kab Khao](/thai-food/phuket--tu-kab-khao-yam) on Phang Nga Road has a fern and prawn salad at 185 THB. [Mee Ton Poe](/thai-food/phuket--mee-ton-poe-hokkien) noodles start at 70 THB and close at 18:00.',
    ],
    portraits: [
      { title: 'Phuket food', href: '/thai-food/phuket', photo: '/photos/thai-food-southern.jpg' },
      { title: 'Old Town food', href: '/thai-food/phuket-old-town-hokkien-and-peranakan-food', photo: '/photos/phuket.jpg' },
      { title: 'Old Town', href: '/phuket/old-town', photo: '/photos/kata-and-karon.jpg' },
      { title: 'South food', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/rawai-and-nai-harn.jpg' },
    ],
    affiliates: [
      stay('Phuket Town stays', 'Walk to Dibuk', 'Sleep in Town if this lunch is the plan, not a Patong grill.', stayLink('phuket'), '/photos/kamala-and-surin.jpg'),
      klook('Old Town walk', 'Useful only if you want a guide through the mansions.', 'Phuket Old Town food', '/photos/thai-food.jpg'),
    ],
    faqs: [
      { q: 'How much is the crab curry?', a: 'A 2026 diner paid 400 THB small and 600 THB large. Confirm the size, because a March 2025 visit put the pot around 450 to 650 THB.' },
      { q: 'Where is a nearby plate with a number?', a: 'Tu Kab Khao sells a fern and prawn salad for 185 THB and closes at 21:00.' },
    ],
  },
  {
    path: '/thai-food/pattaya-naklua-seafood',
    title: 'Naklua seafood guide',
    description:
      'Naklua seafood is Moom Aroi at the end of Na Kluea Alley 4, 10:30 to 21:30, with lime sea bass at 480 THB.',
    lede:
      'Naklua is known for a waterfront seafood room with a printed menu, not a Walking Street grill. Moom Aroi runs 10:30 to 21:30.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Pattaya', href: '/thai-food/pattaya' },
      { name: 'Naklua', href: '/thai-food/pattaya-naklua-seafood' },
    ],
    facts: [
      { label: 'Sea bass', value: 'Steamed with lime, 480 THB' },
      { label: 'Papaya crab', value: '150 THB' },
      { label: 'Mud crab', value: '1,500 THB a kilogram' },
      { label: 'Hours', value: '10:30 to 21:30 daily' },
    ],
    chips: ['Naklua', 'Sea bass', 'Crab'],
    photo: '/photos/food-b8-naklua.jpg',
    geo: { lat: 12.972, lon: 100.905, containedIn: 'Pattaya' },
    paragraphs: [
      'The fixed plates are the useful ones. Lime sea bass is 480 THB. Blue-crab papaya is 150 THB. Picked crab in curry powder is 680 THB. Mud crab in the same sauce is 1,500 THB a kilogram, so ask the weight before they cook it.',
      'Start with [steamed sea bass](/thai-food/pattaya--mum-pla-nueng). Walking Street is a different night. The city hub is [Pattaya food](/thai-food/pattaya).',
    ],
    portraits: [
      { title: 'Pattaya food', href: '/thai-food/pattaya', photo: '/photos/pattaya.jpg' },
      { title: 'Jomtien', href: '/pattaya/jomtien', photo: '/photos/jomtien.jpg' },
      { title: 'Where to stay', href: '/pattaya/where-to-stay', photo: '/photos/wongamat.jpg' },
      { title: 'Seafood order', href: '/thai-food/ordering-thai-seafood', photo: '/photos/thai-food-southern.jpg' },
    ],
    affiliates: [
      stay('Pattaya stays', 'North of Walking Street', 'Sleep toward Naklua if this waterfront table is dinner.', stayLink('pattaya'), '/photos/walking-street-pattaya.jpg'),
      klook('Koh Larn boat', 'A day boat is a different plan from this dinner.', 'Pattaya Koh Larn', '/photos/koh-larn.jpg'),
    ],
    faqs: [
      { q: 'Is the mud crab a fixed price?', a: 'No. Mud crab is 1,500 THB a kilogram, so ask the weight before they cook it.' },
      { q: 'What is a fixed fish price?', a: 'Steamed sea bass with lime is 480 THB on the house menu.' },
    ],
  },
  {
    path: '/thai-food/hua-hin-phetkasem-food',
    title: 'Phetkasem food guide',
    description:
      'Phetkasem food in Hua Hin is Jek Pia at 69/7, open 06:15 to 14:30 and 17:30 to 21:00, with chicken rice at 50 THB.',
    lede:
      'This corner of Phetkasem Road is known for Jek Pia, an old coffee shop that still does jok and chicken rice. Chicken rice was 50 THB on a 13 August 2024 bill.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Hua Hin', href: '/thai-food/hua-hin' },
      { name: 'Phetkasem', href: '/thai-food/hua-hin-phetkasem-food' },
    ],
    facts: [
      { label: 'Morning', value: '06:15 to 14:30' },
      { label: 'Evening', value: '17:30 to 21:00' },
      { label: 'Chicken rice', value: '50 THB on a 2024 bill' },
      { label: 'Address', value: '69/7 Phetkasem Road' },
    ],
    chips: ['Jek Pia', 'Jok', 'Chicken rice'],
    photo: '/photos/dish-b8-hua-hin-jek-pia-satay.jpg',
    geo: { lat: 12.571, lon: 99.957, containedIn: 'Hua Hin' },
    paragraphs: [
      'Come in the morning for jok and chicken rice. Chicken rice was 50 THB on a 13 August 2024 bill. The evening sitting, from 17:30, is when the pork satay comes out, 40 THB for 10 sticks on a 2021 bill.',
      'The rice plate is [chicken rice](/thai-food/hua-hin--jek-pia-khao-man). Night-market fish is a different plan on the [Hua Hin food hub](/thai-food/hua-hin).',
    ],
    portraits: [
      { title: 'Hua Hin food', href: '/thai-food/hua-hin', photo: '/photos/hua-hin.jpg' },
      { title: 'Hua Hin', href: '/hua-hin', photo: '/photos/sam-roi-yot.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Pattaya food', href: '/thai-food/pattaya', photo: '/photos/pattaya.jpg' },
    ],
    affiliates: [
      stay('Hua Hin stays', 'Walk to the corner', 'Sleep near the train if breakfast is this shop.', stayLink('hua-hin'), '/photos/jomtien.jpg'),
      klook('Hua Hin train', 'The morning shop is the reason to arrive early.', 'Hua Hin train', '/photos/ferry-gulf.jpg'),
    ],
    faqs: [
      { q: 'What time should I go for jok?', a: 'The morning session is 06:15 to 14:30. The shop opens again at 17:30.' },
      { q: 'How much is chicken rice?', a: 'A 13 August 2024 bill put it at 50 THB. Pork satay, in the evening sitting, was 40 THB for 10 sticks in September 2021, so ask if that set has moved.' },
    ],
  },
  {
    path: '/thai-food/koh-samui-maenam-food',
    title: 'Maenam food guide',
    description:
      'Maenam food is Ko Seng, open 10:00 to 21:00 at 226/9 Moo 1. Ask the grilled-fish price per kilo before it hits the charcoal.',
    lede:
      'Maenam is known for Ko Seng, a seafood room a short ride from the beach. The grill runs 10:00 to 21:00, and whole fish is sold by the kilo.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Koh Samui', href: '/thai-food/koh-samui' },
      { name: 'Maenam', href: '/thai-food/koh-samui-maenam-food' },
    ],
    facts: [
      { label: 'Ko Seng', value: '226/9 Moo 1; 10:00 to 21:00' },
      { label: 'Fish price', value: 'By the kilo; ask first' },
      { label: 'Airport', value: 'About 25 minutes' },
      { label: 'Lamai', value: 'Sabienglae until 22:00' },
    ],
    chips: ['Maenam', 'Grilled fish', 'Ko Seng'],
    photo: '/photos/food-b8-maenam.jpg',
    geo: { lat: 9.57, lon: 100.01, containedIn: 'Koh Samui' },
    paragraphs: [
      'Point at the fish and ask the price per kilo before it goes on the charcoal. Recent shared dinners have run about 800 to 1,000 THB a person. The airport ride is about 25 minutes.',
      'The south-coast soup room is [Sabienglae](/thai-food/koh-samui--sabienglae-tom-yum), open until 22:00. Ask that bowl price too. The island hub is [Koh Samui food](/thai-food/koh-samui).',
    ],
    portraits: [
      { title: 'Koh Samui food', href: '/thai-food/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Chaweng', href: '/koh-samui/chaweng', photo: '/photos/chaweng.jpg' },
      { title: 'Lamai', href: '/koh-samui/lamai', photo: '/photos/lamai.jpg' },
      { title: 'Seafood order', href: '/thai-food/ordering-thai-seafood', photo: '/photos/thai-food-southern.jpg' },
    ],
    affiliates: [
      stay('Koh Samui stays', 'Maenam or Chaweng', 'Sleep on the beach you will actually eat near.', stayLink('koh-samui'), '/photos/ang-thong.jpg'),
      klook('Ang Thong boat', 'The park boat is a different day from this grill.', 'Koh Samui Ang Thong', '/photos/ferry-gulf.jpg'),
    ],
    faqs: [
      { q: 'How much is the fish?', a: 'It is sold by the kilo. Ask before they grill it. Recent shared dinners have been about 800 to 1,000 THB a person.' },
      { q: 'How do I get there?', a: 'The ride from Samui Airport to Mae Nam is about 25 minutes. The room is at 226/9 Moo 1 and runs 10:00 to 21:00.' },
    ],
  },
  {
    path: '/thai-food/krabi-sai-thai-food',
    title: 'Sai Thai food guide',
    description:
      'Sai Thai food is Ruen Mai at 117 Moo 3, open 10:30 to 15:00 and 17:00 to 21:00. The crab curry is 350 THB.',
    lede:
      'Sai Thai is known for Ruen Mai, a southern kitchen between Krabi Town and Ao Nang. The day is split, with a break from 15:00 to 17:00.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Krabi', href: '/thai-food/krabi' },
      { name: 'Sai Thai', href: '/thai-food/krabi-sai-thai-food' },
    ],
    facts: [
      { label: 'Lunch', value: '10:30 to 15:00' },
      { label: 'Dinner', value: '17:00 to 21:00' },
      { label: 'Town bowl', value: 'Kanom jeen 40 to 70 THB' },
      { label: 'Address', value: '117 Moo 3, Sai Thai' },
    ],
    chips: ['Sai Thai', 'Crab curry', 'Ruen Mai'],
    photo: '/photos/dish-b8-krabi-ruen-mai-crab-curry.jpg',
    geo: { lat: 8.07, lon: 98.85, containedIn: 'Krabi' },
    paragraphs: [
      'The crab curry with betel leaf is the southern order, at 350 THB on itemized bills. Do not arrive between 15:00 and 17:00.',
      'The cheap numbered lunch is still town: kanom jeen at 40 to 70 THB, done by 13:00. The garden curry page is [garden crab curry](/thai-food/krabi--ruen-mai-crab-curry).',
    ],
    portraits: [
      { title: 'Krabi food', href: '/thai-food/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Ao Nang', href: '/krabi/ao-nang', photo: '/photos/railay.jpg' },
      { title: 'Railay', href: '/krabi/railay', photo: '/photos/longtail-andaman.jpg' },
      { title: 'South food', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/thai-food-southern.jpg' },
    ],
    affiliates: [
      stay('Ao Nang stays', 'Or town, if lunch is the market', 'Sleep in Ao Nang for the night grill. Ride to Sai Thai for this kitchen.', stayLink('krabi'), '/photos/tiger-cave.jpg'),
      klook('Hong Island', 'A park boat is separate from this lunch.', 'Krabi Hong Island', '/photos/phi-phi.jpg'),
    ],
    faqs: [
      { q: 'Is Ruen Mai open all afternoon?', a: 'No. Lunch ends at 15:00 and dinner starts at 17:00.' },
      { q: 'Where is the 40 THB lunch?', a: 'Krabi Town morning market sells kanom jeen for 40 to 70 THB and finishes by 13:00.' },
    ],
  },
  {
    path: '/thai-food/kanchanaburi-river-road-food',
    title: 'River road food guide',
    description:
      'River-road food in Kanchanaburi is On\'s Thai-Issan at 77/9 Mae Nam Kwai Road, open 10:00 to 21:00, with plates at 80 THB.',
    lede:
      'Mae Nam Kwai Road is known for a vegan Isan kitchen a short walk from the railway. On\'s runs 10:00 to 21:00, and a December 2024 visit put the plates at 80 THB.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Kanchanaburi', href: '/thai-food/kanchanaburi' },
      { name: 'River road', href: '/thai-food/kanchanaburi-river-road-food' },
    ],
    facts: [
      { label: "On's", value: '77/9 Mae Nam Kwai; 10:00 to 21:00' },
      { label: 'Plates', value: '80 THB; khao soi 100' },
      { label: 'Spice', value: 'Say pet nit noi' },
      { label: 'Khao soi', value: '100 THB, the exception' },
    ],
    chips: ["On's", 'Massaman', 'Som tum'],
    photo: '/photos/food-b8-ons.jpg',
    geo: { lat: 14.04, lon: 99.505, containedIn: 'Kanchanaburi' },
    paragraphs: [
      "On's is the plant-based room: massaman and som tum without fish sauce. A December 2024 diner put every plate except khao soi at 80 THB. Khao soi was 100 THB.",
      "The curry page is [vegan massaman](/thai-food/kanchanaburi--ons-massaman). The town hub is [Kanchanaburi food](/thai-food/kanchanaburi).",
    ],
    portraits: [
      { title: 'Kanchanaburi food', href: '/thai-food/kanchanaburi', photo: '/photos/kanchanaburi.jpg' },
      { title: 'River Kwai', href: '/kanchanaburi/river-kwai', photo: '/photos/kanchanaburi.jpg' },
      { title: 'Kanchanaburi', href: '/kanchanaburi', photo: '/photos/erawan.jpg' },
      { title: 'Isan food', href: '/thai-food/isan', photo: '/photos/khao-yai.jpg' },
    ],
    affiliates: [
      stay('Kanchanaburi stays', 'River or town', 'Sleep by the river if this road is dinner.', stayLink('kanchanaburi'), '/photos/erawan.jpg'),
      klook('Bridge day', 'The bridge and the railway are a different ticket from lunch.', 'Kanchanaburi bridge', '/photos/riverside.jpg'),
    ],
    faqs: [
      { q: 'How much is the massaman?', a: '80 THB on a December 2024 visit that priced the rest of the menu the same way, except khao soi at 100 THB. Say pet nit noi if you want it mild.' },
      { q: 'Is the som tum vegan?', a: 'This kitchen builds it without fish sauce. Ask them to confirm the paste, and say how hot you want the mortar.' },
    ],
  },
  {
    path: '/thai-food/ayutthaya-unite-market',
    title: 'Unite Market food guide',
    description:
      'Ayutthaya Unite Market in Pratuchai sells foi thong and thong yip Friday to Sunday, 16:00 to 21:00. Ask the piece price at the stall.',
    lede:
      'Unite Market is known for a weekend sweet row in Pratuchai, for the end of a ruin day rather than a morning stop. It runs Friday to Sunday, 16:00 to 21:00.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Ayutthaya', href: '/thai-food/ayutthaya' },
      { name: 'Unite Market', href: '/thai-food/ayutthaya-unite-market' },
    ],
    facts: [
      { label: 'Days', value: 'Friday to Sunday' },
      { label: 'Hours', value: '16:00 to 21:00' },
      { label: 'Sweets', value: 'Ask the piece price' },
      { label: 'Morning ride', value: 'Bicycle 50 THB a day' },
    ],
    chips: ['Pratuchai', 'Foi thong', 'Weekend'],
    photo: '/photos/food-b8-unite.jpg',
    geo: { lat: 14.355, lon: 100.568, containedIn: 'Ayutthaya' },
    paragraphs: [
      'Foi thong and thong yip are the egg-yolk sweets to look for. Ask the piece price before you buy a box, and eat it the same night.',
      'If you ride the ruins that morning, a bicycle is 50 THB a day, then come back after 16:00. Monday to Thursday, use the [Ayutthaya food hub](/thai-food/ayutthaya). The thread sweet is [golden egg threads](/thai-food/ayutthaya--unite-foi-thong).',
    ],
    portraits: [
      { title: 'Ayutthaya food', href: '/thai-food/ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/wat-chaiwatthanaram.jpg' },
      { title: 'From Bangkok', href: '/ayutthaya/from-bangkok', photo: '/photos/thonburi-station.jpg' },
      { title: 'Desserts', href: '/thai-food/thai-desserts', photo: '/photos/dish-mango-sticky.jpg' },
    ],
    affiliates: [
      stay('Ayutthaya stays', 'Inside the island', 'Sleep by the ruins if you want dawn, then this market after 16:00.', stayLink('ayutthaya'), '/photos/wat-mahathat-ayutthaya.jpg'),
      klook('Day trip', 'A Bangkok day ticket will miss the evening market.', 'Ayutthaya day trip', '/photos/old-city.jpg'),
    ],
    faqs: [
      { q: 'Which days can I buy the sweets here?', a: 'Friday, Saturday, and Sunday, from 16:00 to 21:00.' },
      { q: 'How much is a piece of foi thong?', a: 'Ask the stall. No piece price is posted. Buy a small box and eat it that night.' },
    ],
  },
  {
    path: '/thai-food/koh-tao-sairee-beach-food',
    title: 'Sairee beach food guide',
    description:
      'Sairee beach food at Barracuda on the Beach runs 10:30 to 22:30, with crab curry at 390 THB and fried snapper at 420 THB.',
    lede:
      'Sairee Beach is known for a beachfront room with fixed main prices, which is rare on this island. Barracuda on the Beach opens at 10:30 and closes at 22:30.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Koh Tao', href: '/thai-food/koh-tao' },
      { name: 'Sairee beach', href: '/thai-food/koh-tao-sairee-beach-food' },
    ],
    facts: [
      { label: 'Beach hours', value: '10:30 to 22:30 daily' },
      { label: 'Crab curry', value: '390 THB' },
      { label: 'Snapper', value: 'Fried with fish sauce, 420 THB' },
      { label: 'Rooftop', value: 'A different room, from 16:00' },
    ],
    chips: ['Sairee', 'Crab curry', 'Snapper'],
    photo: '/photos/food-b8-sairee.jpg',
    geo: { lat: 10.099, lon: 99.826, containedIn: 'Koh Tao' },
    paragraphs: [
      'The beach menu sells Thai crab curry for 390 THB and a fried snapper with fish sauce at 420 THB, with a side included on the fish. That is a fixed bill, not a weighed tank.',
      'The rooftop is the 16:00 room. Use [beach crab curry](/thai-food/koh-tao--barracuda-crab-curry) at lunch. The island hub is [Koh Tao food](/thai-food/koh-tao).',
    ],
    portraits: [
      { title: 'Koh Tao food', href: '/thai-food/koh-tao', photo: '/photos/koh-tao.jpg' },
      { title: 'Koh Tao', href: '/koh-tao', photo: '/photos/koh-phangan.jpg' },
      { title: 'Koh Samui food', href: '/thai-food/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Seafood order', href: '/thai-food/ordering-thai-seafood', photo: '/photos/thai-food-southern.jpg' },
    ],
    affiliates: [
      stay('Koh Tao stays', 'Sairee if this is dinner', 'Sleep on Sairee if the beach room is the meal.', stayLink('koh-tao'), '/photos/ferry-gulf.jpg'),
      klook('Snorkel day', 'A boat is separate from this lunch.', 'Koh Tao snorkeling', '/photos/ang-thong.jpg'),
    ],
    faqs: [
      { q: 'Can I eat the crab curry at noon?', a: 'Yes. The beach room opens at 10:30. The rooftop opens at 16:00.' },
      { q: 'What is the fried fish price?', a: 'The beach menu sells the fish-sauce snapper for 420 THB, with a side.' },
    ],
  },
];
