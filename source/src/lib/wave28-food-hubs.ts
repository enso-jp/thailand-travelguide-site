import { stayLink, klookTours } from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'Search stays', photo, partner: 'stay' };
}

function klook(title: string, body: string, query: string, photo: string): Affiliate {
  return { title, kicker: 'Tours', body, href: klookTours(query), cta: 'See tickets', photo, partner: 'klook' };
}

type Hub = {
  slug: string;
  path: string;
  name: string;
  description: string;
  lede: string;
  facts: [string, string][];
  chips: string[];
  photo: string;
  geo: { lat: number; lon: number; containedIn: string };
  paragraphs: string[];
  portraits: [string, string, string][];
  stay: [string, string, string, Parameters<typeof stayLink>[0], string];
  klook: [string, string, string, string];
  faqs: [string, string][];
};

const HUBS: Hub[] = [
  {
    slug: 'kanchanaburi',
    path: '/thai-food/kanchanaburi',
    name: 'Kanchanaburi',
    description: 'Kanchanaburi eating: yen ta fo on Saeng Chuto Road, moo ping at the night market by the bus terminal, and tom yum facing the River Kwai bridge.',
    lede: 'Kanchanaburi food is a town night market and a river table by the bridge. Eat dinner in town, not on a day-trip van.',
    facts: [
      ['Night market', 'By the bus terminal; 17:00 to 04:00'],
      ['Street carts', 'Saeng Chuto Road; yen ta fo 40 to 60 THB'],
      ['River table', 'Keeree Tara; 10:00 to 22:00'],
      ['Skewers', 'Moo ping 10 to 15 THB a stick'],
    ],
    chips: ['Yen ta fo', 'Night market', 'River Kwai'],
    photo: '/photos/riverside.jpg',
    geo: { lat: 14.0228, lon: 99.5328, containedIn: 'Kanchanaburi' },
    paragraphs: [
      '**Town first:** the carts on Saeng Chuto Road and the night market by the bus terminal feed mostly Thai diners at local prices.',
      '**Bridge view:** Keeree Tara sits about 100 m from the bridge. The cooking is mild; the view is the reason. For the stay map use [Kanchanaburi](/kanchanaburi).',
    ],
    portraits: [
      ['Kanchanaburi', '/kanchanaburi', '/photos/kanchanaburi.jpg'],
      ['Erawan and Sai Yok', '/kanchanaburi/erawan-and-sai-yok', '/photos/erawan.jpg'],
      ['Bangkok food', '/thai-food/bangkok', '/photos/thai-food-bangkok-street.jpg'],
      ['Night markets', '/thai-food/night-markets', '/photos/thai-food-night-markets.jpg'],
    ],
    stay: ['Kanchanaburi stays', 'Town or river', 'Sleep in town if the night market is dinner.', 'kanchanaburi', '/photos/death-railway.jpg'],
    klook: ['Kanchanaburi day trips', 'Erawan and the railway are the tickets. Dinner stays in town.', 'Kanchanaburi food tour', '/photos/erawan-tiers.jpg'],
    faqs: [
      ['Night market or JJ market?', 'The night market by the bus terminal is more local and a little cheaper.'],
      ['Halal food?', 'Yes. Several night market stalls are halal.'],
    ],
  },
  {
    slug: 'pai',
    path: '/thai-food/pai',
    name: 'Pai',
    description: 'Pai eating: khao soi at Khao Soi Zisters, nam ngiao at a Route 1095 noodle shop, and Walking Street pad thai every evening.',
    lede: 'Pai food is a khao soi lunch and a Walking Street dinner. Both fit a town stay, not a valley hut without a scooter.',
    facts: [
      ['Khao soi', 'Khao Soi Zisters; 60 to 90 THB'],
      ['Walking Street', 'Chai Songkhram Rd; nightly from about 17:00'],
      ['Noodles', 'Nam ngiao 30 to 50 THB on Route 1095'],
      ['Peak', '19:00 to 21:00 on Walking Street'],
    ],
    chips: ['Khao soi', 'Walking Street', 'Nam ngiao'],
    photo: '/photos/pai-canyon.jpg',
    geo: { lat: 19.3583, lon: 98.4405, containedIn: 'Mae Hong Son' },
    paragraphs: [
      '**Lunch:** Khao Soi Zisters in Wiang Tai is a 10 to 15 minute walk from Walking Street.',
      '**Dinner:** Walking Street stalls run nightly. Mains sit at the bus terminal end. For the town map use [Pai](/pai).',
    ],
    portraits: [
      ['Pai', '/pai', '/photos/pai.jpg'],
      ['Northern Lanna', '/thai-food/northern-lanna', '/photos/thai-food-lanna.jpg'],
      ['Chiang Mai food', '/thai-food/chiang-mai', '/photos/night-market-cm.jpg'],
      ['Chiang Mai to Pai', '/get-there/chiang-mai-to-pai', '/photos/northern.jpg'],
    ],
    stay: ['Pai stays', 'Walk to Walking Street', 'Sleep in town if the night stalls are dinner.', 'pai', '/photos/chiang-mai-old-city.jpg'],
    klook: ['Pai tours', 'Canyon and hot spring vans. Lunch is still a town bowl.', 'Pai tour', '/photos/doi-suthep.jpg'],
    faqs: [
      ['Is Walking Street every night?', 'Yes. Stalls set up from about 17:00.'],
      ['Vegetarian khao soi?', 'Tofu bowls are common in Pai. Ask for no fish sauce.'],
    ],
  },
  {
    slug: 'khao-lak',
    path: '/thai-food/khao-lak',
    name: 'Khao Lak',
    description: 'Khao Lak eating: khao mok gai at Bang Niang Market, som tum at Krua Mae Dang, and banana blossom salad at Takiang.',
    lede: 'Khao Lak food is known for Bang Niang Market, four days a week. It fits a beach stay with sit-down rooms on other nights.',
    facts: [
      ['Market days', 'Mon, Wed, Thu, Sat; 14:00 to 22:00'],
      ['Best time', '18:00 to 20:00'],
      ['Market plates', '50 to 120 THB; skewers 10 to 20 THB'],
      ['Off nights', 'Krua Mae Dang opens daily 11:00 to 22:00'],
    ],
    chips: ['Bang Niang', 'Khao mok', 'Som tum'],
    photo: '/photos/bang-niang.jpg',
    geo: { lat: 8.6367, lon: 98.2487, containedIn: 'Phang Nga' },
    paragraphs: [
      '**Market:** Bang Niang Market sits opposite the Police Boat 813 memorial. Cash only.',
      '**Other nights:** Krua Mae Dang and Takiang are both in Bang Niang. For the beach map use [Khao Lak](/khao-lak).',
    ],
    portraits: [
      ['Khao Lak', '/khao-lak', '/photos/khao-lak.jpg'],
      ['Khao Lak vs Phuket', '/khao-lak/khao-lak-vs-phuket', '/photos/khao-lak-andaman.jpg'],
      ['Phuket food', '/thai-food/phuket', '/photos/thai-food-southern.jpg'],
      ['Similan and Surin', '/khao-lak/similan-and-surin-islands', '/photos/similan.jpg'],
    ],
    stay: ['Khao Lak stays', 'Bang Niang first', 'Sleep near Bang Niang if the market is dinner.', 'khao-lak', '/photos/khao-lak-resort.jpg'],
    klook: ['Similan boats', 'Day boats run mid-October to mid-May. Lunch is on the boat.', 'Khao Lak Similan', '/photos/similan-boat.jpg'],
    faqs: [
      ['Which days is Bang Niang Market?', 'Monday, Wednesday, Thursday, and Saturday.'],
      ['Cards at the market?', 'No. Bring cash.'],
    ],
  },
  {
    slug: 'koh-lanta',
    path: '/thai-food/koh-lanta',
    name: 'Koh Lanta',
    description: 'Koh Lanta eating: fiery kua kling at Krua Dan Tai, massaman at Yawee in Saladan, and gaeng som at Fresh in Lanta Old Town.',
    lede: 'Koh Lanta food is southern heat in Saladan and a sour curry lunch in Old Town. Ask for less chili on a first plate.',
    facts: [
      ['Southern heat', 'Krua Dan Tai, Saladan; 11:00 to 22:00'],
      ['Massaman', 'Yawee; 50 to 100 THB, cash only'],
      ['Old Town', 'Fresh; dinner for two under 400 THB'],
      ['Clock', 'Saladan at night, Old Town by day'],
    ],
    chips: ['Kua kling', 'Massaman', 'Gaeng som'],
    photo: '/photos/thai-food-southern.jpg',
    geo: { lat: 7.5306, lon: 99.0428, containedIn: 'Krabi' },
    paragraphs: [
      '**Saladan:** Krua Dan Tai and Yawee sit on Highway 4245 near the pier.',
      '**Old Town:** Fresh is on Sri Raya Road on the east coast. For the island map use [Koh Lanta](/koh-lanta).',
    ],
    portraits: [
      ['Koh Lanta', '/koh-lanta', '/photos/koh-lanta.jpg'],
      ['South and Baba-Nyonya', '/thai-food/southern-and-baba-nyonya', '/photos/ferry-gulf.jpg'],
      ['Krabi food', '/thai-food/krabi', '/photos/krabi.jpg'],
      ['Krabi to Koh Lanta', '/get-there/krabi-to-koh-lanta', '/photos/longtail-andaman.jpg'],
    ],
    stay: ['Koh Lanta stays', 'Saladan or the west coast', 'Sleep near Saladan if the curry rooms are dinner.', 'koh-lanta', '/photos/railay.jpg'],
    klook: ['Koh Lanta boats', 'Four Islands boats leave from Saladan. Confirm the park fee.', 'Koh Lanta tour', '/photos/phra-nang.jpg'],
    faqs: [
      ['How spicy is Krua Dan Tai?', 'Very. Milder Thai plates are on the menu.'],
      ['Is Old Town worth the ride?', 'Yes for a daytime loop with lunch at Fresh.'],
    ],
  },
  {
    slug: 'koh-tao',
    path: '/thai-food/koh-tao',
    name: 'Koh Tao',
    description: 'Koh Tao eating: 80 THB massaman at Blue Chair, roast duck noodles at Duck 995 in Sairee, and pad kra pao at Long Thai Food in Mae Haad.',
    lede: 'Koh Tao food is known for cheap Thai lunches in Sairee. It fits divers eating between boats.',
    facts: [
      ['Massaman', 'Blue Chair; 80 THB, sells out after 19:00'],
      ['Duck', 'Duck 995; 70 to 120 THB'],
      ['Duck hours', '11:00 to 15:30 and 17:30 to 21:00'],
      ['Mae Haad', 'Long Thai Food; 09:30 to 21:30'],
    ],
    chips: ['Massaman', 'Duck noodles', 'Sairee'],
    photo: '/photos/sairee-beach.jpg',
    geo: { lat: 10.0956, lon: 99.8404, containedIn: 'Surat Thani' },
    paragraphs: [
      '**Sairee:** Blue Chair and Duck 995 are the two bowls divers name. Go at lunch.',
      '**Mae Haad:** Long Thai Food sits on the one-way street up from the pier. For the island map use [Koh Tao](/koh-tao).',
    ],
    portraits: [
      ['Koh Tao', '/koh-tao', '/photos/koh-tao.jpg'],
      ['Koh Samui food', '/thai-food/koh-samui', '/photos/chaweng.jpg'],
      ['Where to stay on Tao', '/koh-tao/where-to-stay', '/photos/nang-thong.jpg'],
      ['Dishes to order', '/thai-food/thai-dishes-to-order-first-trip', '/photos/ari.jpg'],
    ],
    stay: ['Koh Tao stays', 'Sairee or Mae Haad', 'Sleep in Sairee if lunch is Blue Chair and Duck 995.', 'koh-tao', '/photos/ferry-gulf.jpg'],
    klook: ['Koh Tao snorkel boats', 'Round-island boats include lunch. Dive courses are a separate desk.', 'Koh Tao snorkeling', '/photos/ang-thong.jpg'],
    faqs: [
      ['Why does Blue Chair run out?', 'One massaman pot a day. Come at lunch.'],
      ['Is Duck 995 open all day?', 'No. It closes from 15:30 to 17:30.'],
    ],
  },
  {
    slug: 'koh-phangan',
    path: '/thai-food/koh-phangan',
    name: 'Koh Phangan',
    description: 'Koh Phangan eating: Phantip Market in Thong Sala for khao gaeng at 60 to 70 THB, som tum, and tom kha gai every night.',
    lede: 'Koh Phangan food is known for Phantip Market in Thong Sala. It fits any night, at far less than Haad Rin.',
    facts: [
      ['Market', 'Phantip, Thong Sala; daily from about 16:00'],
      ['Curry rice', '60 to 70 THB for two dishes'],
      ['Peak', '19:00 to 21:00'],
      ['Saturday', 'Extra Walking Street on the main road'],
    ],
    chips: ['Phantip', 'Khao gaeng', 'Thong Sala'],
    photo: '/photos/koh-phangan.jpg',
    geo: { lat: 9.7126, lon: 100.0132, containedIn: 'Surat Thani' },
    paragraphs: [
      '**Where:** Phantip is 5 to 10 minutes on foot from Thong Sala Pier. Cash only.',
      '**When:** arrive before 18:30 for a quiet loop. On Full Moon night eat early. For the island map use [Koh Phangan](/koh-phangan).',
    ],
    portraits: [
      ['Koh Phangan', '/koh-phangan', '/photos/thai-food-night-markets.jpg'],
      ['Haad Rin', '/koh-phangan/haad-rin', '/photos/nightlife.jpg'],
      ['Koh Samui food', '/thai-food/koh-samui', '/photos/lamai.jpg'],
      ['Dishes to order', '/thai-food/thai-dishes-to-order-first-trip', '/photos/ari.jpg'],
    ],
    stay: ['Koh Phangan stays', 'Thong Sala or Haad Rin', 'Sleep near Thong Sala if Phantip is dinner.', 'koh-phangan', '/photos/ferry-gulf.jpg'],
    klook: ['Ang Thong boats', 'Day boats from Samui and Phangan. Confirm the 300 THB park fee.', 'Koh Phangan tour', '/photos/ang-thong.jpg'],
    faqs: [
      ['Is Phantip open every day?', 'Yes. Busiest 19:00 to 21:00.'],
      ['Cards?', 'No. Almost every stall is cash only.'],
    ],
  },
  {
    slug: 'koh-phi-phi',
    path: '/thai-food/koh-phi-phi',
    name: 'Koh Phi Phi',
    description: 'Koh Phi Phi eating: green curry and tom yum at Garlic 1992 in Tonsai, plus big massaman plates at Papaya Restaurant.',
    lede: 'Koh Phi Phi food is known for Tonsai village rooms near mainland prices. It fits an early dinner before the queues.',
    facts: [
      ['Garlic 1992', '160 Chaokoh Rd; 10:30 to 23:00'],
      ['Spend', 'About 100 to 200 THB a person'],
      ['Papaya', 'Thai and Indian plates in Tonsai'],
      ['Tip', 'Eat before 18:00 to skip queues'],
    ],
    chips: ['Tonsai', 'Green curry', 'Massaman'],
    photo: '/photos/tonsai.jpg',
    geo: { lat: 7.7407, lon: 98.7784, containedIn: 'Krabi' },
    paragraphs: [
      '**Tonsai:** Garlic 1992 and Papaya are both a short walk from the pier.',
      '**Seafood:** price grills by weight before they cook. For the island map use [Koh Phi Phi](/koh-phi-phi).',
    ],
    portraits: [
      ['Koh Phi Phi', '/koh-phi-phi', '/photos/phi-phi.jpg'],
      ['Krabi food', '/thai-food/krabi', '/photos/krabi.jpg'],
      ['Koh Lipe vs Koh Phi Phi', '/koh-lipe/koh-lipe-vs-koh-phi-phi', '/photos/phi-phi-viewpoint.jpg'],
      ['Dishes to order', '/thai-food/thai-dishes-to-order-first-trip', '/photos/ari.jpg'],
    ],
    stay: ['Phi Phi stays', 'Tonsai or Long Beach', 'Book Tonsai if dinner is the village.', 'krabi', '/photos/long-beach-pp.jpg'],
    klook: ['Phi Phi boats', 'Maya Bay boats include a park fee. Eat back in Tonsai.', 'Phi Phi tour', '/photos/maya-bay.jpg'],
    faqs: [
      ['Is food expensive on Phi Phi?', 'Yes, most of it comes by boat. Garlic 1992 stays near town prices.'],
      ['Book a table?', 'No. Arrive early.'],
    ],
  },
  {
    slug: 'koh-lipe',
    path: '/thai-food/koh-lipe',
    name: 'Koh Lipe',
    description: 'Koh Lipe eating: som tum at Papaya Mom, moo tod and spicy tom yum at Thai Derm, all on Walking Street.',
    lede: 'Koh Lipe food is known for Walking Street. It fits an early dinner, since Thai Derm fills after 19:30.',
    facts: [
      ['Thai Derm', 'Walking Street; 16:00 to 02:00'],
      ['Papaya Mom', '09:00 to 22:00; dishes 80 to 150 THB'],
      ['Queue', 'Arrive before 19:30'],
      ['Cash', 'Carry small notes'],
    ],
    chips: ['Walking Street', 'Som tum', 'Thai Derm'],
    photo: '/photos/koh-lipe.jpg',
    geo: { lat: 6.4889, lon: 99.3046, containedIn: 'Satun' },
    paragraphs: [
      '**Walking Street:** Papaya Mom and Thai Derm sit on the same strip.',
      '**Heat:** Thai Derm cooks spicy. Say pet nit noi. For the island map use [Koh Lipe](/koh-lipe).',
    ],
    portraits: [
      ['Koh Lipe vs Koh Phi Phi', '/koh-lipe/koh-lipe-vs-koh-phi-phi', '/photos/longtail-andaman.jpg'],
      ['South and Baba-Nyonya', '/thai-food/southern-and-baba-nyonya', '/photos/thai-food-southern.jpg'],
      ['Hat Yai food', '/thai-food/hat-yai', '/photos/thai-food-night-markets.jpg'],
      ['Dishes to order', '/thai-food/thai-dishes-to-order-first-trip', '/photos/ari.jpg'],
    ],
    stay: ['Koh Lipe stays', 'Walk to Walking Street', 'Sleep near Walking Street if dinner is the strip.', 'koh-lipe', '/photos/thai-food.jpg'],
    klook: ['Lipe snorkel boats', 'Longtails to Koh Adang and Rawi. The Tarutao park fee applies.', 'Koh Lipe tour', '/photos/ferry-gulf.jpg'],
    faqs: [
      ['Is Thai Derm spicy?', 'Yes. Ask for less heat.'],
      ['Late food?', 'Thai Derm lists hours to 02:00.'],
    ],
  },
  {
    slug: 'koh-kood',
    path: '/thai-food/koh-kood',
    name: 'Koh Kood',
    description: 'Koh Kood eating: mud crab by weight at Chonthicha, fried fish at Noochy in Ao Yai, and tom yum talay at Nuch Leuang in Klong Chao.',
    lede: 'Koh Kood food is known for seafood by weight. It fits an Ao Yai lunch and a Klong Chao dinner.',
    facts: [
      ['Ao Yai', 'Fishing village pier; 200 to 600 THB a person'],
      ['Klong Chao', 'Nuch Leuang; evenings'],
      ['Price', 'Ask weight and price per kilo first'],
      ['Season', 'May to October some rooms close'],
    ],
    chips: ['Seafood', 'Ao Yai', 'Klong Chao'],
    photo: '/photos/bang-bao-kood.jpg',
    geo: { lat: 11.6545, lon: 102.5634, containedIn: 'Trat' },
    paragraphs: [
      '**Ao Yai:** Noochy and Chonthicha sit at either end of the pier. Go before dark; the east roads have few lights.',
      '**Klong Chao:** Nuch Leuang is the seafood room near the hotels. For the island map use [Koh Kood](/koh-kood).',
    ],
    portraits: [
      ['Koh Kood', '/koh-kood', '/photos/koh-kood.jpg'],
      ['Koh Chang', '/koh-chang', '/photos/koh-chang.jpg'],
      ['South and Baba-Nyonya', '/thai-food/southern-and-baba-nyonya', '/photos/thai-food-southern.jpg'],
      ['Dishes to order', '/thai-food/thai-dishes-to-order-first-trip', '/photos/ari.jpg'],
    ],
    stay: ['Koh Kood stays', 'Klong Chao', 'Sleep at Klong Chao if dinner is near the hotels.', 'koh-kood', '/photos/klong-chao-fall.jpg'],
    klook: ['Koh Kood boats', 'Speedboats from Laem Sok take about an hour. Rough seas May to October.', 'Koh Kood tour', '/photos/koh-kood-boat.jpg'],
    faqs: [
      ['Is seafood cheap on Kood?', 'Better value than imported food, but crab and prawns swing with size.'],
      ['Open in monsoon?', 'Some rooms close May to October. Call ahead.'],
    ],
  },
];

export const wave28FoodHubs: Page[] = HUBS.map((hub) => ({
  path: hub.path,
  title: `${hub.name} food guide`,
  description: hub.description,
  lede: hub.lede,
  schema: 'Article',
  crumbs: [
    { name: 'Thai food', href: '/thai-food' },
    { name: hub.name, href: `/thai-food/${hub.slug}` },
  ],
  facts: hub.facts.map(([label, value]) => ({ label, value })),
  chips: hub.chips,
  photo: hub.photo,
  geo: hub.geo,
  paragraphs: hub.paragraphs,
  portraits: hub.portraits.map(([title, href, photo]) => ({ title, href, photo })),
  affiliates: [
    stay(hub.stay[0], hub.stay[1], hub.stay[2], stayLink(hub.stay[3]), hub.stay[4]),
    klook(hub.klook[0], hub.klook[1], hub.klook[2], hub.klook[3]),
  ],
  faqs: hub.faqs.map(([q, a]) => ({ q, a })),
}));
