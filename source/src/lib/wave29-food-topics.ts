import { klookTours, stayAreaLink, stayLink, type StayArea, type StayCity } from './partners';
import type { Affiliate, Faq, Page } from './content';

const PORTRAITS = [
  { title: 'Thai food hub', href: '/thai-food', photo: '/photos/thai-food.jpg' },
  { title: 'Bangkok food', href: '/thai-food/bangkok', photo: '/photos/bangkok.jpg' },
  { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/yaowarat.jpg' },
];

type Draft = {
  path: string;
  title: string;
  description: string;
  lede: string;
  facts: [string, string][];
  chips: string[];
  photo: string;
  geo: { lat: number; lon: number; containedIn: string };
  paragraphs: [string, string];
  sections: { id: string; title: string; bullets: string[] }[];
  stayTitle: string;
  stayKicker: string;
  stayBody: string;
  stayHref: string;
  stayPhoto: string;
  klookTitle: string;
  klookBody: string;
  klookQuery: string;
  faqs: Faq[];
  more?: { title: string; href: string; photo: string }[];
};

function stay(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'Search stays', photo, partner: 'stay' };
}

function guide(d: Draft): Page {
  const used = new Set([d.photo, d.stayPhoto, '/photos/chatuchak.jpg', ...PORTRAITS.map((row) => row.photo)]);
  if (used.size < 6) throw new Error(`photo collision on ${d.path}`);
  return {
    path: d.path,
    title: d.title,
    description: d.description,
    lede: d.lede,
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: d.title, href: d.path },
    ],
    facts: d.facts.map(([label, value]) => ({ label, value })),
    chips: d.chips,
    photo: d.photo,
    geo: d.geo,
    paragraphs: d.paragraphs,
    sections: d.sections,
    portraits: [...PORTRAITS, ...(d.more || [])],
    affiliates: [
      stay(d.stayTitle, d.stayKicker, d.stayBody, d.stayHref, d.stayPhoto),
      {
        title: d.klookTitle,
        kicker: 'Klook',
        body: d.klookBody,
        href: klookTours(d.klookQuery),
        cta: 'See tickets',
        photo: '/photos/chatuchak.jpg',
        partner: 'klook',
      },
    ],
    faqs: d.faqs,
  };
}

function area(key: StayArea): string {
  return stayAreaLink(key);
}

function city(key: StayCity): string {
  return stayLink(key);
}

export const wave29FoodTopics: Page[] = [
  guide({
    path: '/thai-food/bang-rak-food',
    title: 'Bang Rak food guide',
    description: 'Bang Rak food is Somtum Der on Sala Daeng Road and Charoen Krung shophouses. BTS Sala Daeng and MRT Silom. Not the Yaowarat night walk.',
    lede: 'Bang Rak is a district that eats in two moods: papaya salad pounded to order at Somtum Der on Sala Daeng Road, and Charoen Krung shophouses drifting toward the river. Come at lunch, between the Silom towers and the water, and save Yaowarat\'s night crawl for another evening.',
    facts: [
      ['Room', 'Somtum Der, 5/5 Sala Daeng Rd'],
      ['Clock', '11:00 to 23:00; last order 22:15'],
      ['Rail', 'BTS Sala Daeng Exit 4; MRT Silom Exit 2'],
      ['Street plate', 'A pavement som tum is often 40 to 80 THB'],
    ],
    chips: ['Sala Daeng', 'Som tum', 'Silom'],
    photo: '/photos/silom-and-sathorn.jpg',
    geo: { lat: 13.724, lon: 100.534, containedIn: 'Bangkok' },
    paragraphs: [
      'Somtum Der sits at 5/5 Sala Daeng Road, Silom, Bang Rak 10500. The room is open daily 11:00 to 23:00, last order 22:15. BTS Sala Daeng Exit 4 and MRT Silom Exit 2 both land you close. Phone 082 294 2363. Order papaya salad, grilled chicken, and sticky rice.',
      'A street som tum is often 40 to 80 THB. This room costs more because you sit down. Charoen Krung, still in Bang Rak, is the shophouse stretch toward the river. For the gold-shop night, leave the district and use [Yaowarat](/thai-food/yaowarat-chinatown-food-walk).',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Som tum Thai:** the sweet-hot papaya salad. Say pet nit noi.',
          '**Gai yang and sticky rice:** the Isan set with the salad.',
          '**Not Yaowarat:** Chinatown starts north of this rail stop. Do not stack both at lunch.',
        ],
      },
    ],
    stayTitle: 'Silom stays',
    stayKicker: 'Bang Rak lunch',
    stayBody: 'Sleep on Silom if Sala Daeng and Charoen Krung are the meals.',
    stayHref: area('silom'),
    stayPhoto: '/photos/silom-night.jpg',
    klookTitle: 'Bangkok food walks',
    klookBody: 'A guide is optional. Sala Daeng station already puts you at the door.',
    klookQuery: 'Bangkok food tour',
    faqs: [
      { q: 'Is Somtum Der in Thonglor?', a: 'The published Bangkok room is 5/5 Sala Daeng Road in Bang Rak. Use that address.' },
      { q: 'How hot?', a: 'Isan hot unless you say pet nit noi before they pound.' },
    ],
  }),
  guide({
    path: '/thai-food/ari-food',
    title: 'Ari neighbourhood food',
    description: 'Ari food is Soi Ari shophouses and cafes off BTS Ari. A Thai plate is often 60 to 150 THB. Pour-over sits on the same lane at 80 to 150 THB.',
    lede: 'Ari runs on Soi Ari, a shady lane off BTS Ari where shophouses ladle khao soi and pad kra pao at lunch and the cafes take over once the rush thins. It is Bangkok\'s easy weekday neighbourhood meal, built for a long lunch rather than a market crawl.',
    facts: [
      ['Rail', 'BTS Ari on the Sukhumvit line'],
      ['Lane', 'Phahonyothin Soi 7, called Soi Ari'],
      ['Plate', '60 to 150 THB for a shophouse Thai dish'],
      ['Coffee', 'Pour-over often 80 to 150 THB'],
    ],
    chips: ['Soi Ari', 'BTS Ari', 'Cafes'],
    photo: '/photos/ari.jpg',
    geo: { lat: 13.7796, lon: 100.5446, containedIn: 'Bangkok' },
    paragraphs: [
      'Soi Ari is Phahonyothin Soi 7, the lane at BTS Ari. Lunch is khao soi, pad kra pao, and noodle shops in shophouses. A Thai plate is often 60 to 150 THB. The same soi is full of cafes after the lunch rush.',
      'This is not a named night market. Eat one shophouse lunch, then a drink. For the pour-over map use the [coffee guide](/thai-food/bangkok-and-chiang-mai-coffee-guide). For a real night stall row, ride to [Soi 38](/thai-food/thonglor-and-soi-38-food).',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**One rice or noodle plate** at the first shophouse with a Thai menu and a queue of office workers.',
          '**Coffee second,** not instead of lunch. Cafe food is the dearer plate.',
          '**Say the heat** if you order a curry or a basil wok. Office kitchens still cook Thai hot.',
        ],
      },
    ],
    stayTitle: 'Ari stays',
    stayKicker: 'BTS Ari',
    stayBody: 'Sleep at Ari if Soi Ari lunch is the plan, not a Sukhumvit bar night.',
    stayHref: area('ari'),
    stayPhoto: '/photos/bts.jpg',
    klookTitle: 'Bangkok food walks',
    klookBody: 'Skip a tour. The BTS exit is the start of the soi.',
    klookQuery: 'Bangkok food tour',
    faqs: [
      { q: 'Where is the market?', a: 'There is no Ari night market on the scale of Soi 38. Eat in shophouses.' },
      { q: 'Which exit?', a: 'BTS Ari. Soi 7 is the food lane locals call Soi Ari.' },
    ],
  }),
  guide({
    path: '/thai-food/thonglor-and-soi-38-food',
    title: 'Thonglor and Soi 38 food',
    description: 'Thonglor is BTS Thong Lo sit-down rooms. Soi 38 is the night stall lane between Thong Lo and Ekkamai, plates often 40 to 120 THB from about 17:00.',
    lede: 'Thonglor is known for eating on two clocks. The booked tables sit along Soi 55, while one stop east toward Ekkamai the stalls of Sukhumvit Soi 38 light up from about 17:00 with pad thai, grilled pork and mango sticky rice, so the same night can be cheap or polished.',
    facts: [
      ['Rail', 'BTS Thong Lo; Soi 38 is toward Ekkamai'],
      ['Stalls', 'Sukhumvit Soi 38 from about 17:00'],
      ['Stall plate', 'Often 40 to 120 THB'],
      ['Sit-down', 'Soi 55 costs more than the stalls'],
    ],
    chips: ['Soi 38', 'Thong Lo', 'Night stalls'],
    photo: '/photos/phrom-phong-and-thong-lo.jpg',
    geo: { lat: 13.724, lon: 100.578, containedIn: 'Bangkok' },
    paragraphs: [
      'Sukhumvit Soi 38 is the stall lane between BTS Thong Lo and BTS Ekkamai. Stalls set up from about 17:00 and many run past 22:00. Pad thai, grilled pork, noodles, and mango sticky rice are the usual plates, often 40 to 120 THB. Bring cash.',
      'Thonglor proper is Sukhumvit Soi 55, a sit-down street. Those rooms cost more than Soi 38 and they are not the same meal. Pick one. For the next soi of shophouses use [Ekkamai](/thai-food/ekkamai-food).',
    ],
    sections: [
      {
        id: 'order',
        title: 'How to use the night',
        bullets: [
          '**Soi 38 first** if you want stall prices and an easy walk from the BTS.',
          '**Soi 55** if the table wants a reservation and a longer sit.',
          '**Do not do both** plus a rooftop. One dinner is enough.',
        ],
      },
    ],
    stayTitle: 'Thonglor stays',
    stayKicker: 'BTS Thong Lo',
    stayBody: 'Sleep on Thong Lo if Soi 38 or Soi 55 is dinner.',
    stayHref: area('thonglor'),
    stayPhoto: '/photos/sukhumvit.jpg',
    klookTitle: 'Bangkok food walks',
    klookBody: 'The BTS exits are enough. Book a walk only if the group will not navigate Soi 38.',
    klookQuery: 'Bangkok Thonglor food',
    faqs: [
      { q: 'Is Soi 38 Thonglor?', a: 'It sits between Thong Lo and Ekkamai stations. Thonglor the soi is Soi 55.' },
      { q: 'Cards?', a: 'Stalls are cash. Sit-down rooms on Soi 55 are more likely to take a card.' },
    ],
  }),
  guide({
    path: '/thai-food/banglamphu-food',
    title: 'Banglamphu food',
    description: 'Banglamphu food is Roti Mataba on Phra Athit, closed Monday, plus Khao San stalls at 40 to 100 THB and a crab-omelette lunch on Dinso Road.',
    lede: 'Banglamphu\'s food story starts at Roti Mataba on Phra Athit Road, frying roti and chicken mataba since 1967 across from Phra Sumen Fort. From there it is a short wander to the Khao San stalls, a grazing walk rather than a Michelin queue.',
    facts: [
      ['Roti Mataba', '136 Phra Athit Rd; closed Monday'],
      ['Hours', 'Tue to Sun 09:00 to 22:00'],
      ['Khao San', 'Evening stalls, often 40 to 100 THB'],
      ['Lunch', 'Crab omelette on Dinso, near Democracy'],
    ],
    chips: ['Phra Athit', 'Khao San', 'Roti'],
    photo: '/photos/old-city.jpg',
    geo: { lat: 13.761, lon: 100.497, containedIn: 'Bangkok' },
    paragraphs: [
      'Roti Mataba at 136 Phra Athit Road, Chana Songkhram, has fried roti and chicken mataba since 1967. Listed hours are Tuesday to Sunday 09:00 to 22:00, closed Monday. It faces the Phra Sumen Fort side of the road. Go mid-afternoon if you want a seat.',
      'Khao San stalls in the evening sell pad thai, mango sticky rice, and shakes, often 40 to 100 THB. For a real lunch, walk to Dinso Road near Democracy Monument. Krua Apsorn there is the shophouse known for crab omelette. Use [Nang Loeng](/thai-food/nang-loeng-market) if you want the old market instead.',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Mataba gai:** chicken-stuffed flatbread. The savoury order.',
          '**Roti with banana or condensed milk:** the sweet order. Not a dinner.',
          '**Khao San pad thai** only as a snack. The better lunch is Dinso or [Nang Loeng](/thai-food/nang-loeng-market).',
        ],
      },
    ],
    stayTitle: 'Khao San stays',
    stayKicker: 'Banglamphu',
    stayBody: 'Sleep near Khao San if Phra Athit and the market breakfast are the plan.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/riverside.jpg',
    klookTitle: 'Old City walks',
    klookBody: 'A temple ticket is separate from this meal. Roti Mataba needs no guide.',
    klookQuery: 'Bangkok Old City food',
    faqs: [
      { q: 'Open Monday?', a: 'Roti Mataba lists a Monday close. Khao San stalls still run.' },
      { q: 'Is Khao San the best Thai food?', a: 'No. It is convenient. Use it for a snack, then eat a shophouse lunch.' },
    ],
  }),
  guide({
    path: '/thai-food/nang-loeng-market',
    title: 'Nang Loeng Market food',
    description: 'Nang Loeng is Bangkok\'s old land market on Nakhon Sawan Soi 6. Curry over rice and Thai sweets from 08:00 to 15:00. Go before noon. Plates often 40 to 80 THB.',
    lede: 'Nang Loeng is a morning market that King Rama V opened in 1900, and it still feeds the Old Town on curry over rice, noodles and trays of old Thai sweets. Arrive early: it is a daytime place, and the best trays are gone well before the afternoon.',
    facts: [
      ['Address', 'Nakhon Sawan Soi 6, Wat Sommanat'],
      ['Hours', '08:00 to 15:00; go before noon'],
      ['Sunday', 'Some listings run to 17:00'],
      ['Plates', 'Often 40 to 80 THB'],
    ],
    chips: ['Morning market', 'Curry rice', 'Sweets'],
    photo: '/photos/chinatown-day.jpg',
    geo: { lat: 13.759, lon: 100.512, containedIn: 'Bangkok' },
    paragraphs: [
      'Nang Loeng Market is on Nakhon Sawan Soi 6 in Wat Sommanat, Pom Prap. King Rama V opened it in 1900 as a land market. Today it is curry over rice, noodles, and Thai sweets. Listed hours are 08:00 to 15:00 Monday to Saturday. One listing extends Sunday to 17:00. The good trays go before noon.',
      'It is about 10 minutes on foot from Democracy Monument. No BTS is close, so use a taxi or a bike. Bring cash. A plate is often 40 to 80 THB. For the evening version of old-town snacking use [Banglamphu](/thai-food/banglamphu-food).',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Khao gaeng:** point at two curries over rice before the pots empty.',
          '**Khanom bueang:** crisp Thai crepes. A sweet, not a meal.',
          '**Sakhu dumplings:** tapioca with pork or fish. Ask which filling.',
        ],
      },
    ],
    stayTitle: 'Rattanakosin stays',
    stayKicker: 'Old Town morning',
    stayBody: 'Sleep by the wats if Nang Loeng is breakfast and the palaces are the rest of the day.',
    stayHref: area('rattanakosin'),
    stayPhoto: '/photos/old-city.jpg',
    klookTitle: 'Old City food walks',
    klookBody: 'Useful if you want a guide through the sweets. The market itself is a short taxi.',
    klookQuery: 'Bangkok Nang Loeng food',
    faqs: [
      { q: 'Dinner?', a: 'No. Treat it as breakfast or early lunch. By mid-afternoon the pots are tired.' },
      { q: 'Night market?', a: 'No. For night stalls use Yaowarat or Soi 38.' },
    ],
  }),
  guide({
    path: '/thai-food/victory-monument-food',
    title: 'Victory Monument food',
    description: 'Victory Monument food is boat noodles at 15 to 20 THB a bowl from BTS Victory Monument. Stack five. The roundabout is the landmark, not a mall court.',
    lede: 'Victory Monument is the boat-noodle address of Bangkok, a knot of lanes off the roundabout where each spiced pork or beef bowl is only a few mouthfuls. Nobody stops at one; the stacked empty bowls are the bill, and BTS Victory Monument drops you right there.',
    facts: [
      ['Rail', 'BTS Victory Monument'],
      ['Bowl', '15 to 20 THB'],
      ['Order', 'Five small bowls is a lunch'],
      ['Dish page', 'The full order sits on the boat-noodle plate'],
    ],
    chips: ['Boat noodles', 'BTS', 'Lunch'],
    photo: '/photos/bts.jpg',
    geo: { lat: 13.765, lon: 100.538, containedIn: 'Bangkok' },
    paragraphs: [
      'The boat-noodle shops sit in the lanes off the Victory Monument roundabout. A bowl is 15 to 20 THB. Each one is a few mouthfuls, so order five. BTS Victory Monument is the stop. Use the [boat noodle dish page](/thai-food/bangkok--guay-tiew-reua) for the pork-or-beef choice and the chili vinegar.',
      'The monument itself is a traffic circle, not a dining room. Eat, then leave. Do not add a second famous queue the same afternoon. Grilled pork and drinks fill the side stalls if you want one extra plate at 40 to 80 THB.',
    ],
    sections: [
      {
        id: 'order',
        title: 'How to eat it',
        bullets: [
          '**Choose pork or beef** before you sit. The pots are different.',
          '**Add chili vinegar** yourself. The bowl is already seasoned.',
          '**Stop at five** unless you are still hungry. They are small on purpose.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'On the BTS',
    stayBody: 'Sleep on a Sukhumvit or Silom BTS stop if Victory Monument is one lunch, not the hotel filter.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/sukhumvit.jpg',
    klookTitle: 'Bangkok food walks',
    klookBody: 'You do not need a guide for this alley. The BTS exit faces the circle.',
    klookQuery: 'Bangkok boat noodles',
    faqs: [
      { q: 'Is one bowl enough?', a: 'No. Order about five. That is still a cheap lunch at 15 to 20 THB each.' },
      { q: 'Dinner?', a: 'These shops are a lunch trade. For night stalls use Soi 38 or Yaowarat.' },
    ],
  }),
  guide({
    path: '/thai-food/pratunam-food',
    title: 'Pratunam food guide',
    description: 'Pratunam food is Go-Ang chicken rice at 65 THB and market-lane snacks. BTS Chit Lom or Ratchathewi. The malls are for shopping, not the meal.',
    lede: 'Pratunam\'s signature plate is the poached chicken rice at Go-Ang, a busy counter amid the wholesale fashion streets. Eat there before the shopping starts, then walk it off between Platinum and the BTS.',
    facts: [
      ['Chicken rice', 'Go-Ang Pratunam, 65 THB'],
      ['Snacks', 'Market lanes, often 40 to 90 THB'],
      ['Rail', 'BTS Chit Lom or Ratchathewi, then a walk'],
      ['Skip', 'Mall courts if you want the chicken rice'],
    ],
    chips: ['Go-Ang', 'Chicken rice', 'Pratunam'],
    photo: '/photos/siam.jpg',
    geo: { lat: 13.75, lon: 100.541, containedIn: 'Bangkok' },
    paragraphs: [
      'Go-Ang in Pratunam is the chicken-rice counter at 65 THB a plate. The full order, sauce, and rice choice sit on the [khao man gai page](/thai-food/bangkok--khao-man-gai). BTS Chit Lom and Ratchathewi both need a walk. Eat before you shop.',
      'The lanes around Pratunam Market sell snacks and one-plate rice at about 40 to 90 THB. Platinum and the other malls are clothes. Use them after lunch, not as the kitchen. For a night stall row, ride to [Soi 38](/thai-food/thonglor-and-soi-38-food).',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Khao man gai** at Go-Ang. Skin or no skin. Do not skip the sauce.',
          '**A market snack** only if you are still walking. It is not a second lunch.',
          '**Water** from a sealed bottle if the stall ice looks tired.',
        ],
      },
    ],
    stayTitle: 'Pratunam stays',
    stayKicker: 'Market lunch',
    stayBody: 'Sleep near Pratunam if the chicken rice and the market are day one.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/sukhumvit.jpg',
    klookTitle: 'Bangkok food walks',
    klookBody: 'Go-Ang does not need a ticket. A wider food walk is a different booking.',
    klookQuery: 'Bangkok Pratunam food',
    faqs: [
      { q: 'Is 65 THB still the plate?', a: 'That is the 2026 figure used for Go-Ang Pratunam. Check the board if it has moved.' },
      { q: 'Which mall has the meal?', a: 'None. The meal is the street counter. The malls are shops.' },
    ],
  }),
  guide({
    path: '/thai-food/ekkamai-food',
    title: 'Ekkamai food guide',
    description: 'Ekkamai food is Soi 63 shophouses off BTS Ekkamai. Thai plates often 50 to 120 THB. Soi 38 night stalls are one stop away at Thong Lo.',
    lede: 'Ekkamai is a neighbourhood without a single famous address. Its pleasure is Sukhumvit Soi 63, where shophouses off BTS Ekkamai turn out rice plates, noodles and grilled pork, and the rule is simple: follow the Thai queue and sit down.',
    facts: [
      ['Rail', 'BTS Ekkamai'],
      ['Lane', 'Sukhumvit Soi 63'],
      ['Plate', 'Often 50 to 120 THB'],
      ['Backup', 'Soi 38, one stop toward Thong Lo'],
    ],
    chips: ['Soi 63', 'Ekkamai', 'Shophouses'],
    photo: '/photos/sukhumvit.jpg',
    geo: { lat: 13.7194, lon: 100.585, containedIn: 'Bangkok' },
    paragraphs: [
      'BTS Ekkamai opens onto Sukhumvit Soi 63. The useful food is in shophouses: rice plates, noodles, and grilled pork, often 50 to 120 THB. Walk until you see a Thai queue, then sit. This is a neighbourhood meal, not a single famous address.',
      'If the soi is quiet, ride one stop to Thong Lo and eat [Soi 38](/thai-food/thonglor-and-soi-38-food) from about 17:00. Do not expect a night market inside Ekkamai station. For pour-over, use the [coffee guide](/thai-food/bangkok-and-chiang-mai-coffee-guide).',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**A rice plate** with one curry or a basil wok. That is lunch.',
          '**Grilled pork and sticky rice** if a grill is going on the soi.',
          '**Soi 38** when you want stalls instead of a shophouse.',
        ],
      },
    ],
    stayTitle: 'Thonglor stays',
    stayKicker: 'Ekkamai is next door',
    stayBody: 'Sleep between Thong Lo and Ekkamai if both sois are in play.',
    stayHref: area('thonglor'),
    stayPhoto: '/photos/phrom-phong-and-thong-lo.jpg',
    klookTitle: 'Bangkok food walks',
    klookBody: 'The BTS is the tool. A tour only helps if the group will not walk Soi 63.',
    klookQuery: 'Bangkok Ekkamai food',
    faqs: [
      { q: 'Is there one famous shop to name?', a: 'Use the soi, not a single brand. The queue is the signal.' },
      { q: 'Far from Soi 38?', a: 'One BTS stop, Thong Lo to Ekkamai.' },
    ],
  }),
  guide({
    path: '/thai-food/sampheng-lane-food',
    title: 'Sampheng Lane food',
    description: 'Sampheng Lane is the daytime market off Yaowarat, Soi Wanit 1. Snacks and dried goods from morning into afternoon, often 20 to 60 THB. Night gold shops are a different walk.',
    lede: 'Sampheng Lane is Chinatown by daylight, a covered market lane off Yaowarat stacked with dried fruit, snacks, cloth and small bites from the morning on. It is a grazing walk before the gold shops and the night noodle stalls take over the main road.',
    facts: [
      ['Lane', 'Soi Wanit 1, off Yaowarat'],
      ['Clock', 'Morning into afternoon'],
      ['Snacks', 'Often 20 to 60 THB'],
      ['Night', 'Switch to Yaowarat after 18:00'],
    ],
    chips: ['Sampheng', 'Day market', 'Chinatown'],
    photo: '/photos/thai-food-bangkok-street.jpg',
    geo: { lat: 13.743, lon: 100.504, containedIn: 'Bangkok' },
    paragraphs: [
      'Sampheng Lane is Soi Wanit 1, the covered daytime market running off Yaowarat. It sells dried fruit, snacks, cloth, and small eats from morning into the afternoon. A snack is often 20 to 60 THB. It is not the peppery noodle night.',
      'When the lane thins, switch to the [Yaowarat walk](/thai-food/yaowarat-chinatown-food-walk) after 18:00. Doing both on one clock means you miss the point of each. MRT Wat Mangkon is the night start. For graded fresh fruit, use [Or Tor Kor](/thai-food/or-tor-kor-and-bangkok-fresh-markets) instead.',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to buy',
        bullets: [
          '**A sweet snack** you can eat while walking. This is not a curry lunch.',
          '**Dried fruit** if you want something for the hotel. Check the price per bag.',
          '**Yaowarat at night** for guay jub and Texas Lane. Different shift, different street.',
        ],
      },
    ],
    stayTitle: 'Charoenkrung stays',
    stayKicker: 'Chinatown edge',
    stayBody: 'Sleep on Charoen Krung if Sampheng in the morning and Yaowarat at night are the same stay.',
    stayHref: area('charoenkrung'),
    stayPhoto: '/photos/chinatown-day.jpg',
    klookTitle: 'Chinatown walks',
    klookBody: 'A guide helps if you want both the day lane and the night stalls explained.',
    klookQuery: 'Yaowarat Chinatown food tour',
    faqs: [
      { q: 'Is this the night market?', a: 'No. Sampheng is daytime. Yaowarat stalls thicken after 18:00.' },
      { q: 'Lunch curry?', a: 'Eat a noodle shop on the edge, or wait for Yaowarat. The lane itself is snacks and dry goods.' },
    ],
  }),
  guide({
    path: '/thai-food/thai-desserts',
    title: 'Thai desserts',
    description: 'Thai desserts are mango sticky rice, khanom krok, and coconut ices. Mango is best March to May. A portion is often 40 to 120 THB at a market stall.',
    lede: 'Thai desserts are built on coconut cream, palm sugar and ripe fruit, and mango sticky rice is the one people cross town for, at its best from March to May. Judge it by the fruit and the cream: deep golden mango, and coconut that tastes salty as well as sweet.',
    facts: [
      ['Mango rice', 'Best March to May; 50 to 120 THB'],
      ['Khanom krok', 'Coconut cups, often 20 to 40 THB'],
      ['Market', 'Nang Loeng for old sweets before noon'],
      ['Role', 'A last plate, not dinner'],
    ],
    chips: ['Mango rice', 'Coconut', 'Sweets'],
    photo: '/photos/dish-mango-sticky.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'The dessert people cross town for is mango sticky rice, best when mangoes are ripe from March to May. A portion is often 50 to 120 THB. Look at the fruit. Pale cubes are a skip. Coconut cream should taste salty-sweet, not like syrup only.',
      'The rest of the tray is khanom krok (coconut cups), tub tim krob (water chestnut in coconut ice), bua loy (rice-flour dumplings), and lod chong (pandan noodles in coconut milk). Old-style crepes sit at [Nang Loeng](/thai-food/nang-loeng-market) in the morning. Fruit by month is on the [season page](/thai-food/thai-fruit-by-season).',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Khao niao mamuang** when the mango is deep yellow.',
          '**Khanom krok** hot from the pan. The middle should still be soft.',
          '**Tub tim krob** if you want cold and crunchy. It is a cup, not a meal.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'Market sweets',
    stayBody: 'Sleep near a market morning if sweets are the plan, not a resort buffet.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/sukhumvit.jpg',
    klookTitle: 'Market walks',
    klookBody: 'A walk helps at Nang Loeng. A stall dessert needs no ticket.',
    klookQuery: 'Bangkok dessert food tour',
    faqs: [
      { q: 'All year mango?', a: 'Stalls try. March to May is the ripe season. Other months, inspect the fruit.' },
      { q: 'Vegan?', a: 'Mango sticky rice usually is, if the cream is coconut. Ask about egg.' },
    ],
  }),
  guide({
    path: '/thai-food/thai-fruit-by-season',
    title: 'Thai fruit by season',
    description: 'Thai fruit by season: mango March to May, durian and mangosteen from April, lychee in the north by June, longan from July. Buy at markets and ask the kilo price.',
    lede: 'Thai fruit is known for following the calendar. Mango peaks from March to May, eastern durian around Chanthaburi follows from about April, and mangosteen, rambutan and longan carry the markets through the wet months, so the best basket is whatever the stall has piled highest.',
    facts: [
      ['Mango', 'March to May'],
      ['Durian', 'East from April; south follows'],
      ['Mangosteen', 'May to September, with durian'],
      ['Market', 'Or Tor Kor for graded fruit, morning'],
    ],
    chips: ['Mango', 'Durian', 'Markets'],
    photo: '/photos/dish-mango-sticky-2.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Mango peaks March to May. Durian in the east, around Chanthaburi, runs from about April into June, with later waves in the south. Mangosteen and rambutan follow from May into September. Northern lychee is about April to June. Longan is about July to September. Longkong in the south is about August to October. Pineapple, banana, and papaya are year-round.',
      'Common fruit at a market is often 40 to 120 THB a kilo. Durian costs more and is always priced by weight, so ask before they cut. [Or Tor Kor](/thai-food/or-tor-kor-and-bangkok-fresh-markets) is the graded hall in Bangkok, morning only. How to eat the sweet plate is on [Thai desserts](/thai-food/thai-desserts).',
    ],
    sections: [
      {
        id: 'buy',
        title: 'How to buy',
        bullets: [
          '**Ask the kilo price** before anyone cuts durian or pomelo.',
          '**Smell mango and durian.** No smell often means it was picked green.',
          '**Pomelo** is a Nakhon Pathom crop with a long season, roughly August to February.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'Market morning',
    stayBody: 'Sleep near a morning market if fruit is the errand, not a mall.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/old-city.jpg',
    klookTitle: 'Market walks',
    klookBody: 'Or Tor Kor is walkable from MRT Kamphaeng Phet. A guide is optional.',
    klookQuery: 'Bangkok market food tour',
    faqs: [
      { q: 'When is durian?', a: 'About April to June in the east, later in the south. Hotels sell it whenever they can import it.' },
      { q: 'Best Bangkok hall?', a: 'Or Tor Kor in the morning. It is graded fruit, not a dinner market.' },
    ],
  }),
  guide({
    path: '/thai-food/thai-iced-drinks',
    title: 'Thai iced drinks',
    description: 'Thai iced drinks are cha yen and oliang at 25 to 45 THB, lime soda, and fruit shakes at 40 to 80 THB. Cafe pour-over is a different cup at 80 to 150 THB.',
    lede: 'Thailand\'s street drinks are strong and sweet over crushed ice: orange cha yen with condensed milk, dark oliang coffee, sharp lime soda and fruit shakes blended to order. They belong to the stall, not the cafe, and "mai wan" is the phrase that turns the sugar down.',
    facts: [
      ['Cha yen', 'Thai iced tea, often 25 to 45 THB'],
      ['Oliang', 'Thai iced coffee, often 25 to 45 THB'],
      ['Shake', 'Fruit, often 40 to 80 THB'],
      ['Cafe', 'Pour-over often 80 to 150 THB'],
    ],
    chips: ['Cha yen', 'Oliang', 'Lime soda'],
    photo: '/photos/dish-tub-tim-grob.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Cha yen is Thai tea with condensed milk over ice, often 25 to 45 THB. Oliang is the dark iced coffee at the same price, sweeter and heavier than a cafe filter. Nam manao is lime and soda. A fruit shake is often 40 to 80 THB. Say "mai wan" if you want less sugar.',
      'Specialty pour-over is a different drink at 80 to 150 THB. Use the [coffee guide](/thai-food/bangkok-and-chiang-mai-coffee-guide) for those cafes. Stall ice is commercial ice. If you are skipping ice, ask for the drink without it. Coconut water from a cut fruit is often 20 to 40 THB.',
    ],
    sections: [
      {
        id: 'order',
        title: 'How to order',
        bullets: [
          '**Cha yen** for tea. **Oliang** for Thai coffee. They are not the same cup.',
          '**Woon** means sweet. **Mai wan** means less sugar.',
          '**Fruit first** in mango season, March to May. See [fruit by season](/thai-food/thai-fruit-by-season).',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'Stall drinks',
    stayBody: 'Sleep on a BTS line if the plan is markets by day and a cafe at night.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/ari.jpg',
    klookTitle: 'Food walks',
    klookBody: 'A walk is for the meal. The drink is a 30 THB stop on the way.',
    klookQuery: 'Bangkok food tour',
    faqs: [
      { q: 'Is oliang a latte?', a: 'No. It is strong coffee, often with sugar and sometimes milk, poured over ice.' },
      { q: 'Where is the cafe map?', a: 'The Bangkok and Chiang Mai coffee guide covers pour-over. This page is the stall cup.' },
    ],
  }),
  guide({
    path: '/thai-food/vegetarian-and-jay-food',
    title: 'Vegetarian and jay food',
    description: 'Jay food skips meat, seafood, egg, and usually garlic and onion. Look for the yellow เจ flag. The Phuket festival runs about nine days in the ninth lunar month.',
    lede: 'Jay food, flagged by the yellow sign reading เจ, is Thailand\'s strict plant-based cooking from Chinese Buddhist practice: no meat, seafood or egg, and often no garlic or onion. It is a safer bet than a "vegetarian" line on a beach menu, which may still hide fish sauce.',
    facts: [
      ['Say', 'Jay, or gin jay'],
      ['Skips', 'Meat, seafood, egg; strict jay also garlic and onion'],
      ['Flag', 'Yellow banner with a red เจ'],
      ['Festival', 'About nine days, ninth lunar month'],
    ],
    chips: ['Jay', 'Vegetarian', 'Phuket'],
    photo: '/photos/dish-mango-sticky.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Jay (เจ) is the Thai vegan plate tied to Chinese Buddhist practice. It skips meat, seafood, and egg. Strict jay also skips garlic, onion, and other pungent bulbs. A dish called vegetarian on a beach menu may still use fish sauce. Say "gin jay" if you need the strict plate. The yellow flag with a red เจ marks a jay kitchen.',
      'The Vegetarian Festival falls in the ninth lunar month, usually late September or October, for about nine days. Phuket takes it furthest. Outside festival week, fruit and mango sticky rice (often 50 to 120 THB) are the easy orders, plus a tofu curry if the cook will skip fish sauce. [On\'s Thai-Issan](/thai-food/kanchanaburi--massaman-ons) in Kanchanaburi is a named vegan room. Read [how to order](/thai-food/thai-food-etiquette) before you sit.',
    ],
    sections: [
      {
        id: 'order',
        title: 'What is actually safe',
        bullets: [
          '**Fruit and mango sticky rice** are the low-risk sweets. Ask about egg in the cream.',
          '**Pad thai and curries** usually contain fish sauce. Jay only if the cook agrees.',
          '**Festival streets in Phuket** add jay stalls for those nine days. The rest of the year, ask.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'Markets with a jay stall',
    stayBody: 'Sleep near a day market if you want fruit and a jay stall in walking distance.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/sukhumvit.jpg',
    klookTitle: 'Food walks',
    klookBody: 'Tell the guide you need jay before you book. A standard walk will include fish sauce.',
    klookQuery: 'Bangkok vegetarian food',
    faqs: [
      { q: 'Vegetarian or jay?', a: 'Vegetarian may allow egg and garlic. Jay does not. Say which you mean.' },
      { q: 'When is the festival?', a: 'About nine days in the ninth lunar month, usually late September or October.' },
    ],
  }),
  guide({
    path: '/thai-food/thai-food-etiquette',
    title: 'Thai food etiquette',
    description: 'Thai food etiquette: spoon in the right hand, fork as a pusher, shared dishes plus one rice each. Say pet nit noi for less heat. Stalls are cash. A sit-down tip is optional.',
    lede: 'A Thai meal is shared. Plates go in the middle, everyone gets their own rice, and the spoon in the right hand does the work while the fork only pushes. Learn that, plus how to ask for your heat level, and a first meal stops being guesswork.',
    facts: [
      ['Utensil', 'Spoon in the right hand; fork pushes'],
      ['Heat', 'Pet nit noi means a little spicy'],
      ['Bill', 'Check bin'],
      ['Stalls', 'Cash; a street plate is often 40 to 80 THB'],
    ],
    chips: ['Spoon', 'Shared plates', 'Heat'],
    photo: '/photos/dish-pad-thai.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Eat rice with a spoon in the right hand. The fork pushes food onto the spoon. Chopsticks are for noodle bowls, not for a rice plate, and they should not stand upright in the rice. Dishes in the centre are shared. Each person gets a plate of rice. A one-plate meal, such as fried rice or a noodle bowl, is the exception.',
      'Say "pet nit noi" for a little heat and "mai pet" for none. "Check bin" asks for the bill. Stalls are cash. A street plate is often 40 to 80 THB. Tipping is not required. At a sit-down room, rounding up or leaving 20 to 50 THB is enough. Spice words sit on the [heat page](/thai-food/spice-levels). ATM notes are on the [money page](/plan/money-atms-and-promptpay).',
    ],
    sections: [
      {
        id: 'phrases',
        title: 'Phrases that matter',
        bullets: [
          '**Aroi** means delicious. Use it if you mean it.',
          '**Mai sai phrik** means no chili. **Pet nit noi** means a little.',
          '**Kin khao** is the meal itself. You do not need a speech before you order.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'First meals',
    stayBody: 'Sleep near a shophouse street if the first dinners should be a short walk.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/old-city.jpg',
    klookTitle: 'Food walks',
    klookBody: 'A first walk is useful if the group wants the phrases said out loud.',
    klookQuery: 'Bangkok street food tour',
    faqs: [
      { q: 'Do you tip?', a: 'Not at stalls. At a sit-down room, 20 to 50 THB or rounding up is enough.' },
      { q: 'Shoes?', a: 'Off only if the room asks, which is rare in a restaurant and normal in a home.' },
    ],
  }),
  guide({
    path: '/thai-food/thai-breakfast',
    title: 'Thai breakfast',
    description: 'Thai breakfast is jok, khao tom, and pa tong go from about 06:00. A bowl is often 40 to 80 THB. Chicken rice and coffee follow. Hotel buffets are the later option.',
    lede: 'Thai breakfast is a meal of rice soup and fried dough, eaten early. Jok porridge, clear khao tom and pa tong go dunked in coffee or soy milk fill the stalls from around 06:00, and most have packed up by 10:00, long before the hotel buffet closes.',
    facts: [
      ['Clock', 'Stalls from about 06:00'],
      ['Jok', 'Rice porridge, often 40 to 80 THB'],
      ['Pa tong go', 'Fried dough with coffee or soy milk'],
      ['Later', 'Chicken rice still works at 10:00'],
    ],
    chips: ['Jok', 'Pa tong go', 'Markets'],
    photo: '/photos/dish-pa-tong-go.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Jok is soft rice porridge, often with pork or chicken, at 40 to 80 THB. Khao tom is the clearer rice soup. Pa tong go is the fried dough stick, eaten with condensed milk, coffee, or soy milk. The serious stalls open around 06:00 and fade by 10:00.',
      'If you sleep later, khao man gai still works as a late breakfast. The Pratunam plate is on the [chicken rice page](/thai-food/bangkok--khao-man-gai). A Bangkok jok counter is on the [jok page](/thai-food/bangkok--jok). Coffee at a cafe is the [coffee guide](/thai-food/bangkok-and-chiang-mai-coffee-guide), not this stall cup.',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Jok** if you want something soft. Add ginger and chili yourself.',
          '**Pa tong go and a hot drink** if you want to walk with breakfast.',
          '**Fruit** from the same market if the porridge is enough.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'Walk to a morning stall',
    stayBody: 'Sleep near a market if 07:00 breakfast is the plan.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/chinatown-day.jpg',
    klookTitle: 'Market walks',
    klookBody: 'Morning walks start early. A 10:00 tour misses the porridge.',
    klookQuery: 'Bangkok breakfast food tour',
    faqs: [
      { q: 'Is pad thai breakfast?', a: 'Rarely. Locals eat rice soup, dough, or a rice plate. Pad thai is later.' },
      { q: 'Hotel buffet?', a: 'Fine if you want eggs. It is not the Thai breakfast this page is about.' },
    ],
  }),
  guide({
    path: '/thai-food/thai-curries',
    title: 'Thai curries',
    description: 'Thai curries split into coconut pots and sour southern pots. A market rice-and-curry plate is often 40 to 80 THB. Green is hotter than massaman. Gaeng som is sour, not sweet.',
    lede: 'Thai curry is a whole family of pots: green with basil, red, thick sweet panang, mild potato massaman and sour, fiery gaeng som. At a market tray, the local move is to point at two over one plate of rice.',
    facts: [
      ['Market plate', 'Rice and two curries, often 40 to 80 THB'],
      ['Mild', 'Massaman, with potato and peanut'],
      ['Hotter', 'Green, red, and southern gaeng som'],
      ['Tray', 'Khao gaeng is the point-and-eat lunch'],
    ],
    chips: ['Green curry', 'Massaman', 'Khao gaeng'],
    photo: '/photos/dish-green-curry.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Green curry is coconut, green chili, and Thai basil. Red curry uses the same coconut idea with a red paste. Panang is thicker and sweeter. Massaman is the mild potato and peanut pot. Gaeng som, also called gaeng leuang in the south, is sour and hot, not a coconut curry. A market set of rice and two curries is often 40 to 80 THB.',
      'Point at the tray. Do not ask for a menu essay. The [south page](/thai-food/southern-and-baba-nyonya) covers the sour pots. A named vegan massaman is [On\'s in Kanchanaburi](/thai-food/kanchanaburi--massaman-ons). Heat words are on the [spice page](/thai-food/spice-levels).',
    ],
    sections: [
      {
        id: 'order',
        title: 'Which pot',
        bullets: [
          '**Massaman** if you want mild and filling.',
          '**Green or red** if you want coconut and chili. Say pet nit noi.',
          '**Gaeng som** if you want sour fish. It is a southern lunch, not a sweet soup.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'Market curry',
    stayBody: 'Sleep near a day market if khao gaeng is lunch.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/thai-food-southern.jpg',
    klookTitle: 'Cooking classes',
    klookBody: 'A class is how the paste is made. Lunch is still the tray.',
    klookQuery: 'Thai cooking class Bangkok',
    faqs: [
      { q: 'Are all curries coconut?', a: 'No. Gaeng som is sour and watery. Jungle curry (gaeng pa) has no coconut either.' },
      { q: 'How many dishes?', a: 'Two curries over one rice is a lunch. Add a soup only if you are sharing.' },
    ],
  }),
  guide({
    path: '/thai-food/thai-noodles',
    title: 'Thai noodles',
    description: 'Thai noodles are boat noodles at 15 to 20 THB, pad thai, yen ta fo, and rad na. The broth and the noodle shape change the dish. Order by the Thai name.',
    lede: 'Thai noodles go far beyond pad thai. There are tiny spiced boat-noodle bowls at Victory Monument, tamarind-glazed wok noodles, and pink yen ta fo coloured by fermented bean curd, and at lunch one bowl is the whole meal.',
    facts: [
      ['Boat noodles', '15 to 20 THB a small bowl'],
      ['Pad thai', 'Often 60 to 150 THB'],
      ['Yen ta fo', 'Pink fermented-tofu broth'],
      ['Rad na', 'Gravy over wide rice noodles'],
    ],
    chips: ['Boat noodles', 'Pad thai', 'Yen ta fo'],
    photo: '/photos/dish-boat-noodle.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Boat noodles at Victory Monument are 15 to 20 THB a bowl. The order is on the [boat noodle page](/thai-food/bangkok--guay-tiew-reua). Pad thai is the tamarind wok, often 60 to 150 THB depending on the shop. Yen ta fo is the pink soup from fermented bean curd. Rad na is wide noodles in gravy. Ba mee is egg noodle, often with roast pork or duck.',
      'Say the noodle: sen lek (small), sen yai (wide), or ba mee (egg). Say nam for soup or haeng for dry. A Kanchanaburi pink bowl is on the [yen ta fo page](/thai-food/kanchanaburi--yen-ta-fo). First-trip context is on [dishes to order](/thai-food/thai-dishes-to-order-first-trip).',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to say',
        bullets: [
          '**Sen lek nam** for small noodles in soup.',
          '**Haeng** if you want them dry, with broth on the side.',
          '**Five boat-noodle bowls** is a lunch. One pad thai plate is also a lunch. Do not order both unless you are sharing.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'Noodle lunch',
    stayBody: 'Sleep on the BTS if Victory Monument or a shophouse noodle is the midday plan.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/bts.jpg',
    klookTitle: 'Noodle walks',
    klookBody: 'Useful the first time. After that the BTS and the Thai name are enough.',
    klookQuery: 'Bangkok noodle food tour',
    faqs: [
      { q: 'Is pad thai the local default?', a: 'It is one dish. Locals eat many more noodle soups at lunch.' },
      { q: 'Soup or dry?', a: 'Dry keeps the noodle firm. Soup is the meal in a bowl. Say which.' },
    ],
  }),
  guide({
    path: '/thai-food/thai-yam-salads',
    title: 'Thai yam salads',
    description: 'Thai yam salads are sour, salty, and hot. Som tum is the papaya one. A plate is often 40 to 90 THB. Say the heat before the pestle starts. Fish sauce is the default.',
    lede: 'A Thai yam is a salad in name only: lime, fish sauce and chili drive it, whether the base is pounded green papaya, glass noodles or crisp catfish. Pair it with grilled meat and sticky rice, the way the Isan grills do.',
    facts: [
      ['Som tum', 'Green papaya, often 40 to 90 THB'],
      ['Heat', 'Say pet nit noi before they pound'],
      ['Pair', 'Grilled chicken and sticky rice'],
      ['Fish sauce', 'Default, including most "vegetarian" requests'],
    ],
    chips: ['Som tum', 'Yam', 'Sticky rice'],
    photo: '/photos/dish-som-tum.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Yam means a sour salad. Som tum is pounded green papaya. Yam woon sen is glass noodles. Yam pla duk foo is crisp catfish. Larb and nam tok are the minced and grilled meat salads in the same heat family. A plate is often 40 to 90 THB. The Isan set adds grilled chicken and sticky rice.',
      'Tell them the heat first. Pet nit noi is a little. Pla ra is fermented fish, funkier than som tum Thai. The Khon Kaen plate is on the [som tum page](/thai-food/khon-kaen--som-tum-kk). A Bangkok sit-down version is [Somtum Der](/thai-food/bang-rak-food). Jay rules are on the [jay page](/thai-food/vegetarian-and-jay-food).',
    ],
    sections: [
      {
        id: 'order',
        title: 'Which salad',
        bullets: [
          '**Som tum Thai** first. Peanuts and dried shrimp, sweeter than the Isan pound.',
          '**Som tum pla ra** only after you know you want fermented fish.',
          '**Sticky rice**, not jasmine, when the rest of the table is Isan.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'Salad and grill',
    stayBody: 'Sleep near a night grill if som tum is dinner. Any BTS neighbourhood works.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/khao-yai.jpg',
    klookTitle: 'Isan food walks',
    klookBody: 'Worth it in Isan. In Bangkok the pound is on every grill street.',
    klookQuery: 'Bangkok som tum',
    faqs: [
      { q: 'Is it a side salad?', a: 'No. With sticky rice and a grill it is the meal.' },
      { q: 'Can it be mild?', a: 'Yes, if you say so before they start. A default pound is hot.' },
    ],
  }),
  guide({
    path: '/thai-food/ordering-thai-seafood',
    title: 'Ordering Thai seafood',
    description: 'Order Thai seafood by pointing at the fish and asking the price per kilo before it hits the grill. Garlic, lime steam, or salt crust are the usual cooks. Island bills run higher.',
    lede: 'Thai seafood is a catch sold by weight. You point at the fish, ask the price per kilo, and only then choose how it is cooked, whether steamed with lime and chili, fried with garlic or grilled in a salt crust.',
    facts: [
      ['Rule', 'Price per kilo before they cook'],
      ['Steam', 'Pla nueng manao, lime and chili'],
      ['Grill', 'Pla pao is salt crust; pla yang is coals'],
      ['Islands', 'Higher than town, because of the boat'],
    ],
    chips: ['By weight', 'Grill', 'Lime steam'],
    photo: '/photos/dish-pla-pao.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Point at the fish, ask the price per kilo, and only then choose the cook. Pla nueng manao is steamed with lime and chili. Pla thot krathiam is fried with garlic. Pla pao is salt-crust grill. Pla yang is over coals. Prawn and crab follow the same rule. If the answer is a shrug, walk.',
      'A town seafood meal can be 200 to 600 THB a person once you add rice and a soup. Islands cost more because the catch and the ice move by boat. Koh Kood and Koh Lipe pages on this site name the rooms. Do not stack a by-weight grill and a buffet the same night.',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to say',
        bullets: [
          '**Tao rai** means how much. Use it before the grill.',
          '**Kilo** is the unit. A whole fish is not a 60 THB snack.',
          '**Nam pla prik** is the fish-sauce chili dip. Ask for it if the table is plain.',
        ],
      },
    ],
    stayTitle: 'Khao Lak stays',
    stayKicker: 'Or any pier town',
    stayBody: 'Sleep near the grill you will actually use. A resort buffet is a different night.',
    stayHref: city('khao-lak'),
    stayPhoto: '/photos/khao-lak.jpg',
    klookTitle: 'Island boats',
    klookBody: 'A boat day and a seafood dinner are two bookings. Eat the dinner on land.',
    klookQuery: 'Thailand seafood tour',
    faqs: [
      { q: 'Is the displayed fish the price?', a: 'Only if a number is on it. Otherwise ask. The board can be per kilo, not per fish.' },
      { q: 'Cheap islands?', a: 'No. Phi Phi, Lipe, and Kood all cost more than a mainland town.' },
    ],
  }),
  guide({
    path: '/thai-food/halal-and-thai-muslim-food',
    title: 'Halal and Thai Muslim food',
    description: 'Halal Thai food is khao mok gai, roti, and mataba, with no pork. Look for a halal sign. A chicken-rice plate is often 50 to 120 THB. Not every Thai kitchen qualifies.',
    lede: 'Thai Muslim cooking is known for turmeric chicken rice, khao mok gai, alongside flaky roti and stuffed mataba. Halal, though, is about the kitchen: look for the sign on the door rather than assuming from the menu.',
    facts: [
      ['Plate', 'Khao mok gai, often 50 to 120 THB'],
      ['Bread', 'Roti and mataba'],
      ['Skip', 'Pork woks, even if the rest looks fine'],
      ['Sign', 'Halal on the shop, not only "no pork"'],
    ],
    chips: ['Halal', 'Khao mok', 'Roti'],
    photo: '/photos/dish-khao-mok.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Khao mok gai is turmeric chicken with rice, often 50 to 120 THB. Roti and mataba are the breads. The Banglamphu room is [Roti Mataba](/thai-food/banglamphu-food). A market chicken-rice stall can be Muslim-run and still not a certified halal kitchen. If you need halal, use a shop that says so.',
      'Pork stalls sit on the same streets. Thai Derm on Koh Lipe serves pork. The halal cafe on that street is [Sanae](/thai-food/koh-lipe--halal-sanae). Bang Niang in Khao Lak sells khao mok on market nights. Fish sauce is not pork, but it is not a vegetarian substitute either.',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Khao mok gai** with the sweet-sour sauce.',
          '**Mataba** if you want a savoury stuffed bread. Sweet roti is dessert.',
          '**Chicken or seafood** in a signed halal room. Skip a mixed grill.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'Near a halal kitchen',
    stayBody: 'Sleep in Banglamphu if Roti Mataba is breakfast. Elsewhere, check the sign before you book the street.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/old-city.jpg',
    klookTitle: 'Food walks',
    klookBody: 'Say halal when you book. A standard walk will pass pork grills.',
    klookQuery: 'Bangkok halal food',
    faqs: [
      { q: 'Is Thai food halal by default?', a: 'No. Pork, oyster sauce, and non-halal kitchens are common. Look for the sign.' },
      { q: 'Vegetarian and halal?', a: 'Possible. Say both. Fish sauce and alcohol in a sauce still need a check.' },
    ],
  }),
  guide({
    path: '/thai-food/nam-prik-and-condiments',
    title: 'Nam prik and condiments',
    description: 'Nam prik is a chili relish eaten with vegetables and fish. A market set is often 40 to 80 THB. Nam pla prik is the table fish-sauce dip. They are not the same condiment.',
    lede: 'Nam prik is the pounded chili relish at the centre of a Thai table, eaten with raw or boiled vegetables, fried fish and rice. It comes smoky green in the north as nam prik num, tomato and pork as nam prik ong, and salty with shrimp paste as nam prik kapi.',
    facts: [
      ['Set', 'Often 40 to 80 THB with vegetables'],
      ['Nam prik ong', 'Northern tomato and pork'],
      ['Nam pla prik', 'Fish sauce and cut chili, on the table'],
      ['Not', 'A free salsa. Order it.'],
    ],
    chips: ['Nam prik', 'Chili', 'Vegetables'],
    photo: '/photos/dish-nam-prik-ong.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Nam prik is a pounded chili relish. You eat it with raw or boiled vegetables, fried fish, or omelette, plus rice. Nam prik ong is the northern tomato and minced pork version. Nam prik num is green chili, smoky and hot. Nam prik kapi is shrimp paste, salty and strong. A set is often 40 to 80 THB.',
      'Nam pla prik on the table is different: fish sauce with sliced chili, used to season a finished plate. Do not confuse the two. Northern context is on the [Lanna page](/thai-food/northern-lanna). Heat control is on the [spice page](/thai-food/spice-levels).',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to order',
        bullets: [
          '**Nam prik ong** first if you want the milder northern relish.',
          '**Vegetables and an omelette** so the relish is not eaten alone.',
          '**Sticky rice** in the north. Jasmine rice is fine in Bangkok.',
        ],
      },
    ],
    stayTitle: 'Chiang Mai stays',
    stayKicker: 'Or Bangkok',
    stayBody: 'Sleep in Chiang Mai if nam prik is a lunch plan. In Bangkok any shophouse street works.',
    stayHref: city('chiang-mai'),
    stayPhoto: '/photos/thai-food-lanna.jpg',
    klookTitle: 'Cooking classes',
    klookBody: 'A mortar class shows the relish. Lunch still needs the vegetables.',
    klookQuery: 'Chiang Mai cooking class',
    faqs: [
      { q: 'Is it very hot?', a: 'Nam prik num is. Nam prik ong is gentler. Ask which pot you are getting.' },
      { q: 'Vegan?', a: 'Shrimp paste and pork show up often. Ask before you assume.' },
    ],
  }),
  guide({
    path: '/thai-food/thai-street-snacks',
    title: 'Thai street snacks',
    description: 'Thai street snacks are moo ping at 10 to 15 THB, fish balls, and coconut cups. They are a walk, not dinner. Night markets and walking streets are the stalls.',
    lede: 'Thai street snacks are the small bites between meals: sweet grilled moo ping on a stick, bagged fish balls, coconut khanom krok cups and grilled sticky rice. They make a market walk delicious, but they are a snack, not dinner.',
    facts: [
      ['Moo ping', '10 to 15 THB a stick in town'],
      ['Fish balls', 'Often 10 to 30 THB a bag'],
      ['Khanom krok', 'Coconut cups, often 20 to 40 THB'],
      ['Role', 'A snack. Eat a real plate too.'],
    ],
    chips: ['Moo ping', 'Fish balls', 'Markets'],
    photo: '/photos/dish-moo-ping.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Moo ping is sweet grilled pork on a stick, often 10 to 15 THB in a town market, more on an island. Fish balls and squid balls come in a bag for about 10 to 30 THB. Khanom krok is the coconut cup. Grilled sticky rice is the northern snack. None of these is dinner.',
      'Use [night markets](/thai-food/night-markets) for the Bangkok clocks. A full dessert list is on [Thai desserts](/thai-food/thai-desserts). If you only eat sticks, you will be hungry at 21:00. Add a rice plate or a noodle bowl.',
    ],
    sections: [
      {
        id: 'order',
        title: 'What to buy',
        bullets: [
          '**Three sticks and a rice bag** if pork is fine. That is a bridge to dinner, not dinner.',
          '**A hot pan** for khanom krok. Cold cups mean they have been sitting.',
          '**Islands:** expect a higher stick price. The boat adds cost.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'Market walk',
    stayBody: 'Sleep near the market you will walk. A snack crawl across town is a bad night.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/thai-food-night-markets.jpg',
    klookTitle: 'Market walks',
    klookBody: 'Book one only if the group wants a route. The stalls take cash either way.',
    klookQuery: 'Bangkok night market food',
    faqs: [
      { q: 'Is this a meal?', a: 'No. Add rice or noodles. Sticks are the walk.' },
      { q: 'Pork free?', a: 'Fish balls and coconut cups. Skip moo ping and most sausages.' },
    ],
  }),
  guide({
    path: '/thai-food/thai-rice-plates',
    title: 'Thai rice plates',
    description: 'Thai rice plates are khao man gai at 65 THB, khao kha moo, curry over rice, and fried rice. One plate is lunch. Market curry sets are often 40 to 80 THB.',
    lede: 'The Thai rice plate is the one-dish lunch of every shophouse: poached chicken rice, stewed pork leg khao kha moo, or curry ladled over rice from a tray. At noon, one plate is the whole order.',
    facts: [
      ['Chicken rice', 'Go-Ang Pratunam, 65 THB'],
      ['Pork leg', 'Khao kha moo, often 50 to 70 THB'],
      ['Curry rice', 'Two dishes, often 40 to 80 THB'],
      ['Fried rice', 'Often 40 to 70 THB'],
    ],
    chips: ['Khao man gai', 'Khao gaeng', 'Lunch'],
    photo: '/photos/dish-khao-man-gai.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Khao man gai is poached chicken on rice. The Pratunam plate is 65 THB on the [chicken rice page](/thai-food/bangkok--khao-man-gai). Khao kha moo is stewed pork leg, often 50 to 70 THB. Khao gaeng is curry over rice from a tray, often 40 to 80 THB for rice and two dishes. Khao pad is fried rice at about 40 to 70 THB.',
      'Order one plate. This is not the shared-curry dinner. Sauce matters on chicken rice. Point at the tray for curry rice before the best pots empty, which is early afternoon. The curry family is on [Thai curries](/thai-food/thai-curries).',
    ],
    sections: [
      {
        id: 'order',
        title: 'Which plate',
        bullets: [
          '**Khao man gai** when you want mild and fast.',
          '**Khao gaeng** when you want to point at curries.',
          '**Khao phat pu** only if you accept the crab price. It is not the cheap pork plate.',
        ],
      },
    ],
    stayTitle: 'Pratunam stays',
    stayKicker: 'Chicken rice lunch',
    stayBody: 'Sleep near Pratunam if Go-Ang is the meal. Any other shophouse street works for fried rice.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/siam.jpg',
    klookTitle: 'Food walks',
    klookBody: 'A walk strings several plates. One rice plate does not need a ticket.',
    klookQuery: 'Bangkok food tour',
    faqs: [
      { q: 'Shared or solo?', a: 'A rice plate is solo. Curries in bowls at dinner are shared.' },
      { q: 'Dinner too?', a: 'Yes, but the best curry trays are a lunch trade. Night is more often a wok or a grill.' },
    ],
  }),
  guide({
    path: '/thai-food/festival-food',
    title: 'Thai festival food',
    description: 'Thai festival food: khao chae in the hot season around April, jay food for about nine days in the ninth lunar month, and ordinary street plates at Songkran because the holiday is water, not a banquet.',
    lede: 'Thai festival food is a handful of seasonal plates rather than a new cuisine each holiday. Khao chae, rice in scented cool water with small sweet and salty sides, belongs to the April heat around Songkran, and the vegetarian festival brings its own jay food.',
    facts: [
      ['Khao chae', 'Rice in scented water, hot season, about April'],
      ['Songkran', '13 to 15 April; the event is water'],
      ['Jay festival', 'About nine days, ninth lunar month'],
      ['Street plate', 'Still often 40 to 80 THB'],
    ],
    chips: ['Khao chae', 'Songkran', 'Jay'],
    photo: '/photos/dish-khao-tom.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Khao chae is rice in jasmine or candle-scented water, served with small sweet and salty sides. It is a hot-season dish, around April, including Songkran. You find it at old Bangkok kitchens and some market stalls, not on every beach menu. A portion is a light meal, often under 150 THB where it is sold as street food.',
      'Songkran itself, 13 to 15 April, is a water holiday. Food stalls still sell the usual plates at about 40 to 80 THB. The Vegetarian Festival, about nine days in the ninth lunar month, is the real food event. Rules are on the [jay page](/thai-food/vegetarian-and-jay-food). Loy Krathong is a river night, not a dish list.',
    ],
    sections: [
      {
        id: 'order',
        title: 'What changes',
        bullets: [
          '**April:** look for khao chae if you are in Bangkok. Skip it if the rice smells like perfume only and the sides look tired.',
          '**Songkran week:** eat early. Many family shops close. Tourist streets stay open and raise nothing but the crowd.',
          '**Vegetarian festival:** follow the เจ flag. Phuket is the strictest street scene.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'April or festival week',
    stayBody: 'Sleep in Bangkok if khao chae is the goal. Sleep in Phuket only if the jay festival is the goal.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/old-city.jpg',
    klookTitle: 'Festival calendars',
    klookBody: 'A food walk in festival week needs a jay note. Songkran tours are water, not dinner.',
    klookQuery: 'Bangkok Songkran',
    faqs: [
      { q: 'What do people eat at Songkran?', a: 'Mostly ordinary Thai food. Khao chae is the seasonal plate, not a required feast.' },
      { q: 'Are shops open?', a: 'Tourist stalls yes. Many family kitchens close for a day or two. Eat earlier than usual.' },
    ],
  }),
  guide({
    path: '/thai-food/spice-levels',
    title: 'Thai spice levels',
    description: 'Thai spice starts hotter than a mild curry at home. Say mai pet for none or pet nit noi for a little. Massaman and chicken rice are the mild plates. Som tum and southern curries are not.',
    lede: 'Thai heat comes from the bird\'s eye chili, prik kee nu, pounded into the paste rather than sprinkled on top. That is why the level has to be set before the wok starts: "mai pet" for not spicy, "pet nit noi" for a little.',
    facts: [
      ['None', 'Mai pet'],
      ['A little', 'Pet nit noi'],
      ['Mild plates', 'Massaman, khao man gai, omelette'],
      ['Hot by default', 'Som tum, gaeng som, nam prik num'],
    ],
    chips: ['Mai pet', 'Som tum', 'Massaman'],
    photo: '/photos/dish-som-tum-2.jpg',
    geo: { lat: 13.756, lon: 100.502, containedIn: 'Bangkok' },
    paragraphs: [
      'Prik kee nu, the bird\'s eye chili, is the hot one. Prik chee fa is milder and used more like a vegetable. "Mai pet" means not spicy. "Pet nit noi" means a little. Say it before they cook. Adding sugar or beer later does not fix a pounded salad.',
      'Massaman and khao man gai are the mild plates. Green curry and som tum are not. Southern gaeng som and nam prik num are hotter still. A market curry plate is often 40 to 80 THB either way. Phrases for the table are on the [etiquette page](/thai-food/thai-food-etiquette). The curry map is on [Thai curries](/thai-food/thai-curries).',
    ],
    sections: [
      {
        id: 'order',
        title: 'Safe first orders',
        bullets: [
          '**Massaman or chicken rice** if you want flavour without a dare.',
          '**Pet nit noi** on green curry or a basil wok. You still get chili. You skip the top end.',
          '**Do not point at som tum** and hope. That dish is built on heat.',
        ],
      },
    ],
    stayTitle: 'Bangkok stays',
    stayKicker: 'Mild or hot, your call',
    stayBody: 'Sleep near a shophouse street so a too-hot plate can be replaced with fried rice.',
    stayHref: city('bangkok'),
    stayPhoto: '/photos/sukhumvit.jpg',
    klookTitle: 'Food walks',
    klookBody: 'Tell the guide your heat before the first stall. The default Thai order is not mild.',
    klookQuery: 'Bangkok street food tour',
    faqs: [
      { q: 'Will mai pet taste bland?', a: 'You still get fish sauce, lime, and garlic. You lose the burn, not the dish.' },
      { q: 'Which region is hotter?', a: 'The south and Isan run hotter than a Bangkok chicken-rice shop.' },
    ],
  }),
].map((page) => {
  for (const fact of page.facts) {
    if (fact.value.length > 90) throw new Error(`${page.path} fact ${fact.label} ${fact.value.length}`);
  }
  if (page.description.length < 60 || page.description.length > 230) {
    throw new Error(`${page.path} desc ${page.description.length}`);
  }
  if (page.lede.length < 70 || page.lede.length > 280) {
    throw new Error(`${page.path} lede ${page.lede.length}`);
  }
  return page;
});
