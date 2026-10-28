import {
  stayLink,
  stayAreaLink,
  klookTours,
  klookTickets,
} from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search stays'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string, cta = 'See tickets'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'klook' };
}

export const wave10Pages: Page[] = [
  {
    path: '/thai-food/yaowarat-chinatown-food-walk',
    title: 'Yaowarat Chinatown food walk',
    description:
      'Yaowarat is Bangkok Chinatown after dark: peppery guay jub, Texas Lane seafood, and Michelin-listed fried dough. MRT Wat Mangkon Exit 1 from 18:00. Monday stalls thin out.',
    lede:
      'Come for rolled noodles, claypot seafood, and late fried dough, not a mall court. Night walkers who pay cash after 18:00 fit this strip. Monday is the slow stall night.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Yaowarat Chinatown food walk', href: '/thai-food/yaowarat-chinatown-food-walk' },
    ],
    facts: [
      { label: 'Rail', value: 'MRT Wat Mangkon Exit 1; Hua Lamphong is the south end' },
      { label: 'Peak', value: '18:00 to 23:30; last MRT around midnight' },
      { label: 'Monday', value: 'Many street stalls rest or thin out; shops stay open' },
      { label: '2026 plates', value: 'Guay jub 60 to 100 THB; pa tong go 50 to 60 THB' },
    ],
    chips: ['Wat Mangkon', 'Texas Lane', 'Monday rest'],
    photo: '/photos/thai-food-bangkok-street.jpg',
    geo: { lat: 13.743, lon: 100.5096, containedIn: 'Bangkok' },
    paragraphs: [
      'Yaowarat Road is the Chinatown dinner walk, not a lunch market. MRT Wat Mangkon Exit 1 puts you on the gold-shop strip. Stalls thicken after 18:00 and run hard until about 23:30. Last Blue Line trains are around midnight; plan a Grab if you stay later. Cash and PromptPay still beat most foreign cards. For where to sleep and the 32 THB MRT hop from Sukhumvit, use [Yaowarat access](/bangkok/chinatown-yaowarat).',
      'Monday is the street-stall slowdown. Shophouses and a few seafood rooms stay open. If you only have one Chinatown night and it falls on Monday, sit indoors and skip the full soi crawl. For the daytime river markets, use the [Wang Lang and Talat Noi](/thai-food/wang-lang-and-talat-noi) page instead of stacking both on the same calendar.',
    ],
    sections: [
      {
        id: 'bowls-and-dough',
        title: 'Rolled noodles, fried dough, Plaeng Nam stews',
        paragraphs: [
          'Nai Ek Rolled Noodles (Nai Ek Guay Jub) is the peppery pork-offal bowl. Order guay jub with extra pepper. A 2026 bowl is 60 to 100 THB. Go early in the evening if you refuse a queue. This is a sit-down shophouse, not a folding table on Yaowarat itself.',
          'Pa Tong Go Savoey is the Michelin-listed fried-dough shop. A plate of pa tong go with condensed milk, pandan custard, or savory dips is 50 to 60 THB. It is a late snack, not dinner. Plaeng Nam Road, a quieter lane off the gold strip, is the stew and duck-noodle pocket when the main road is a photo crush.',
        ],
      },
      {
        id: 'texas-lane',
        title: 'T&K versus Lek & Rut on Texas Lane',
        paragraphs: [
          'Soi Phadung Dao is Texas Lane, the seafood alley off Yaowarat. T&K Seafood and Lek & Rut sit as rival claypot rooms. Both do grilled seafood, fried rice, and drunken noodles at tourist-plus prices. Pick one queue. Do not compare two tables in one night. Share plates. Confirm the seafood price before it hits the wok.',
        ],
        table: {
          headers: ['Stop', 'Order', '2026 note'],
          rows: [
            ['Nai Ek Rolled Noodles', 'guay jub pepper broth', '60 to 100 THB; sit-down'],
            ['T&K Seafood', 'Claypot and grilled seafood', 'Texas Lane / Soi Phadung Dao'],
            ['Lek & Rut', 'Same soi, rival queue', 'Pick one; price the fish first'],
            ['Pa Tong Go Savoey', 'Fried dough and dips', '50 to 60 THB; Michelin-listed'],
            ['Plaeng Nam Road', 'Stews and duck noodles', 'Quieter than the gold strip'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Bangkok street food', href: '/thai-food/bangkok-street-food', photo: '/photos/thai-food-bangkok-street.jpg' },
      { title: 'Wang Lang and Talat Noi', href: '/thai-food/wang-lang-and-talat-noi', photo: '/photos/riverside.jpg' },
      { title: 'Charoenkrung nights', href: '/interests/nightlife/charoenkrung-soi-nana', photo: '/photos/riverside.jpg' },
      { title: 'Thai food hub', href: '/thai-food', photo: '/photos/thai-food.jpg' },
    ],
    affiliates: [
      stay('Charoenkrung stays', 'Walk to Yaowarat', 'Sleep on the river grid if Chinatown is two nights, not a one-hour Grab.', stayAreaLink('charoenkrung'), '/photos/riverside.jpg'),
      klook('Chinatown food walks', 'Tours', 'Use a guide only if the group will not split. The MRT already solves the start.', klookTours('Yaowarat Chinatown food tour'), '/photos/thai-food-bangkok-street.jpg'),
    ],
    faqs: [
      {
        q: 'What time should you start?',
        a: 'After 18:00. Wat Mangkon Exit 1. Peak is 18:00 to 23:30. Last MRT trains are around midnight.',
      },
      {
        q: 'T&K or Lek & Rut?',
        a: 'Same soi, same job. Pick the shorter queue and price the seafood before it cooks. Do not do both.',
      },
      {
        q: 'Is Monday a bad night?',
        a: 'Street stalls thin out. Shophouses and some seafood rooms stay open. If you want the full walk, pick another night.',
      },
    ],
  },
  {
    path: '/thai-food/banthat-thong-road-food-strip',
    title: 'Banthat Thong Road food strip',
    description:
      'Banthat Thong is the Chulalongkorn night food strip from Rama I toward Rama IV: Jeh O Mama bowls, toasted milk bread, Somboon curry crab, Haeundae and CQK, and soy milk. MRT Sam Yan or BTS National Stadium.',
    lede:
      'Use this strip if you want late university food, not Chinatown gold shops. It fits night eaters from 17:00 to midnight who will wait for Jeh O or buy a Klook queue pass.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Banthat Thong Road food strip', href: '/thai-food/banthat-thong-road-food-strip' },
    ],
    facts: [
      { label: 'Hours', value: 'Most stalls 17:00 to midnight; breakfast shops open earlier' },
      { label: 'Rail', value: 'MRT Sam Yan, or BTS National Stadium plus a 10-minute walk' },
      { label: 'Jeh O', value: 'Mama Tom Yum bowls 150 to 300 THB; late-night queue' },
      { label: 'Span', value: 'Pathumwan strip running from Rama I toward Rama IV' },
    ],
    chips: ['Chula night strip', 'Jeh O', 'Sam Yan'],
    photo: '/photos/siam.jpg',
    geo: { lat: 13.7405, lon: 100.5265, containedIn: 'Bangkok' },
    paragraphs: [
      'Banthat Thong Road is the Chulalongkorn night food strip, running through Pathumwan from the Rama I end toward Rama IV. It sits east of Chinatown, not on Yaowarat. MRT Sam Yan is the clean rail. BTS National Stadium plus a 10-minute walk works if you already ride the Sukhumvit or Silom line. Useful hours are 17:00 to midnight.',
      'Jeh O Chula is the late Mama Tom Yum room. Bowls run 150 to 300 THB in 2026 depending on seafood and extras. The walk-in wait can eat an hour. A Klook queue pass is the paid skip if you refuse to stand. Do not stack Jeh O with a Yaowarat seafood alley the same night. For the Chinatown walk, use [Yaowarat](/thai-food/yaowarat-chinatown-food-walk).',
    ],
    sections: [
      {
        id: 'rooms',
        title: 'Jeh O, milk bread, Somboon, soy milk',
        paragraphs: [
          'Nueng Nom Nua is the toasted milk-bread shop. Order a loaf to share, not a second dinner. Somboon Seafood Banthat Thong is the original flagship on this road, known for the curry crab that started here. Haeundae and CQK are the Korean barbecue and hotpot rooms on the same strip when the table wants a pot, not a stool. Jae Wan is sweet soy milk and ginkgo, useful at breakfast or as a late cool-down after Jeh O. Elvis Suki\'s Michelin Bib Gourmand shop sits on Soi Yotse, off this road; do not treat it as a Banthat Thong pin.',
        ],
        table: {
          headers: ['Stop', 'What you order', 'How you use it'],
          rows: [
            ['Jeh O Chula', 'Mama Tom Yum, 150 to 300 THB', 'Klook pass or a long walk-in wait'],
            ['Nueng Nom Nua', 'Toasted milk bread', 'Share a loaf; not a main'],
            ['Somboon Seafood Banthat Thong', 'Curry crab at the original flagship', 'Sit-down seafood; this road, not a mall branch'],
            ['Haeundae / CQK', 'Korean barbecue and hotpot', 'Group table on Banthat Thong'],
            ['Jae Wan', 'Sweet soy milk and ginkgo', 'Breakfast or a late drink'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Siam and Silom', href: '/bangkok/siam-silom', photo: '/photos/siam.jpg' },
      { title: 'Bangkok street food', href: '/thai-food/bangkok-street-food', photo: '/photos/thai-food-bangkok-street.jpg' },
      { title: 'Yaowarat walk', href: '/thai-food/yaowarat-chinatown-food-walk', photo: '/photos/thai-food-bangkok-street.jpg' },
      { title: 'Thai food hub', href: '/thai-food', photo: '/photos/thai-food.jpg' },
    ],
    affiliates: [
      stay('Siam or Sam Yan stays', 'Walk the strip', 'Sleep near National Stadium or Sam Yan if Banthat Thong is two nights.', stayAreaLink('siam'), '/photos/siam.jpg'),
      klook('Jeh O queue pass', 'Tickets', 'Buy the skip only if the walk-in wait will wreck the night. The bowl is still 150 to 300 THB.', klookTickets('Jeh O Chula queue'), '/photos/thai-food-night-markets.jpg'),
    ],
    faqs: [
      {
        q: 'MRT Sam Yan or BTS National Stadium?',
        a: 'Sam Yan if you want the south end of the strip. National Stadium plus a 10-minute walk if you already ride the BTS.',
      },
      {
        q: 'Is the Klook pass worth it?',
        a: 'Yes if you arrive after 20:00 and refuse an hour in line. No if you can eat Nueng Nom Nua first and join a shorter queue.',
      },
      {
        q: 'Is this the same as Yaowarat?',
        a: 'No. Banthat Thong is the Chula night strip. Yaowarat is Chinatown. They sit on different rail lines.',
      },
    ],
  },
  {
    path: '/thai-food/wang-lang-and-talat-noi',
    title: 'Wang Lang Market and Talat Noi',
    description:
      'Wang Lang is the daytime Thonburi food market across a 4.50 to 5.50 THB, 2 to 3 minute ferry from Tha Chang or Tha Maharaj. Talat Noi is the Charoenkrung Soi 22 shophouse pocket for duck noodles and river cafes.',
    lede:
      'Use Wang Lang for southern curries, moo ping, and kanom krok between 09:00 and 17:00. Talat Noi fits a slower Hokkien-Teochew alley walk after the ferry, not a night market.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Wang Lang and Talat Noi', href: '/thai-food/wang-lang-and-talat-noi' },
    ],
    facts: [
      { label: 'Ferry', value: '4.50 to 5.50 THB; 2 to 3 min; Chang 06:00 to 19:00, Maharaj 09:00 to 21:00' },
      { label: 'Wang Lang hours', value: 'About 09:00 to 17:00; pots empty after the lunch rush' },
      { label: 'Talat Noi', value: 'Charoenkrung Soi 22; Hokkien-Teochew shophouses' },
      { label: 'Opposite', value: 'Grand Palace and Tha Maharaj on the Bangkok bank' },
    ],
    chips: ['Cross-river ferry', 'Day market', 'Soi 22'],
    photo: '/photos/riverside.jpg',
    geo: { lat: 13.758, lon: 100.488, containedIn: 'Bangkok' },
    paragraphs: [
      'Wang Lang Market sits on the Siriraj, Thonburi bank, opposite Tha Maharaj and the Grand Palace. The cross-river ferry from Tha Chang or Tha Maharaj is 4.50 to 5.50 THB (the posted Siriraj rate and the 2026 tariff) and 2 to 3 minutes. Wang Lang to Tha Chang runs 06:00 to 19:00. Wang Lang to Tha Maharaj runs 09:00 to 21:00. Useful market hours are 09:00 to 17:00. Southern curries, grilled pork moo ping, coconut pancakes kanom krok, boat noodles, and fruit fill the stalls. Stalls empty when the hospital and office crowd leaves.',
      'Talat Noi is the other half of the day. Walk Charoenkrung Soi 22 for Hokkien-Teochew shophouse duck noodles, then sit a river cafe if the heat wins. Do not confuse Talat Noi with the night cocktail pocket on Soi Nana. For that map, use [Charoenkrung nights](/interests/nightlife/charoenkrung-soi-nana). Pair a palace morning with Wang Lang lunch. Leave Yaowarat for a different evening.',
    ],
    sections: [
      {
        id: 'two-banks',
        title: 'Ferry lunch, then the Soi 22 alleys',
        paragraphs: [
          'Do the Grand Palace or Wat Pho first if that is the morning, then ferry to Wang Lang. Eat, walk the sois behind Siriraj, and boat back. Talat Noi works after the return crossing or as a separate Charoenkrung afternoon. A Chao Phraya Express stop at N10 Wang Lang is the longer-river option if you are already on a boat from Sathorn.',
        ],
        table: {
          headers: ['Stop', 'What it is', '2026 cash and time'],
          rows: [
            ['Tha Chang / Tha Maharaj ferry', 'Cross to Wang Lang', '4.50 to 5.50 THB; 2 to 3 min; Chang 06:00 to 19:00, Maharaj 09:00 to 21:00'],
            ['Wang Lang Market', 'Southern curry, moo ping, kanom krok', '09:00 to 17:00; plates 40 to 80 THB'],
            ['N10 Wang Lang Pier', 'Express-boat alternative', 'Use if you are already on the river'],
            ['Talat Noi, Charoenkrung Soi 22', 'Duck noodles and river cafes', 'Daytime shophouses, not a night bazaar'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Grand Palace', href: '/attractions/grand-palace-and-wat-phra-kaew', photo: '/photos/old-city.jpg' },
      { title: 'Wat Arun', href: '/attractions/wat-arun', photo: '/photos/riverside.jpg' },
      { title: 'Riverside', href: '/bangkok/riverside-charoenkrung', photo: '/photos/riverside.jpg' },
      { title: 'Yaowarat walk', href: '/thai-food/yaowarat-chinatown-food-walk', photo: '/photos/thai-food-bangkok-street.jpg' },
    ],
    affiliates: [
      stay('Riverside stays', 'Ferry first', 'Sleep on Charoenkrung if Wang Lang, Talat Noi, and a river dusk share two days.', stayAreaLink('riverside'), '/photos/riverside.jpg'),
      klook('River and market days', 'Tours', 'A longtail is extra. The 4.50 to 5.50 THB, 2 to 3 minute ferry already solves Wang Lang.', klookTours('Bangkok river ferry and Wang Lang'), '/photos/riverside.jpg'),
    ],
    faqs: [
      {
        q: 'Which pier for the cheap ferry?',
        a: 'Tha Chang (06:00 to 19:00 from Wang Lang) or Tha Maharaj (09:00 to 21:00 from Wang Lang) on the palace side. 4.50 to 5.50 THB, 2 to 3 minutes. N10 is the Express-boat stop on the Wang Lang bank.',
      },
      {
        q: 'Can you do Wang Lang and Yaowarat the same day?',
        a: 'Yes if Wang Lang is lunch and Yaowarat is a later night. Do not treat Talat Noi as a third market after dark.',
      },
      {
        q: 'Is Wang Lang the same as Khao San food?',
        a: 'No. Wang Lang is a daytime Thonburi market. Khao San is a different night strip.',
      },
    ],
  },
  {
    path: '/thai-food/or-tor-kor-and-bangkok-fresh-markets',
    title: 'Or Tor Kor and Bangkok fresh markets',
    description:
      'Or Tor Kor is the graded-produce hall at MRT Kamphaeng Phet Exit 3, across from Chatuchak: durian, mango sticky rice 100 to 150 THB, and air-conditioned khao gaeng 60 to 120 THB.',
    lede:
      'Come for monthong durian, Royal Project fruit, and curry-over-rice in cool air, not a night bazaar. It fits a Saturday if Chatuchak is already the plan. Khlong Toei is the raw wet-market contrast.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Or Tor Kor and fresh markets', href: '/thai-food/or-tor-kor-and-bangkok-fresh-markets' },
    ],
    facts: [
      { label: 'Or Tor Kor hours', value: 'About 06:00 to 18:00; fruit peaks in the morning' },
      { label: 'Rail', value: 'MRT Kamphaeng Phet Exit 3, across from Chatuchak' },
      { label: 'Plates', value: 'Mango sticky rice 100 to 150 THB; khao gaeng 60 to 120 THB' },
      { label: 'Contrast', value: 'Khlong Toei wet market is earlier, hotter, and more wholesale' },
    ],
    chips: ['Kamphaeng Phet', 'Durian', 'Khao gaeng'],
    photo: '/photos/bangkok.jpg',
    geo: { lat: 13.7994, lon: 100.548, containedIn: 'Bangkok' },
    paragraphs: [
      'Or Tor Kor Market (the Agricultural Wholesale Market Organization hall) sits at MRT Kamphaeng Phet Exit 3, across Kamphaeng Phet Road from Chatuchak. Hours run about 06:00 to 18:00. This is graded fruit, Royal Project highland produce, and air-conditioned curry-over-rice stalls khao gaeng at 60 to 120 THB. Monthong and kan yao durian are the season buy. Mango sticky rice is 100 to 150 THB when mangoes are in.',
      'Khlong Toei wet market is the contrast: earlier, hotter, more wholesale pork, fish, and herbs. Go at dawn if you want the working market, not a snack hall. Do not stack Khlong Toei, Or Tor Kor, and a full Chatuchak loop on the same Saturday. For the weekend grid, use [Chatuchak](/attractions/chatuchak-weekend-market).',
    ],
    sections: [
      {
        id: 'how-to-shop',
        title: 'Fruit hall versus wet market',
        paragraphs: [
          'At Or Tor Kor, walk the fruit first, then sit for khao gaeng. Ask the durian seller to open monthong or kan yao and price by kilogram. Royal Project stalls sell temperate veg and tea from the north. At Khlong Toei, stay out of the wholesale aisles if you only want breakfast noodles. Wear shoes that can get wet.',
        ],
        table: {
          headers: ['Market', 'Hours and rail', 'Who it fits'],
          rows: [
            ['Or Tor Kor', '06:00 to 18:00; MRT Kamphaeng Phet Exit 3', 'Graded fruit and a sit-down curry'],
            ['Chatuchak (JJ)', 'Sat-Sun 09:00 to 18:00; Exit 2 into the sois', 'Crafts and a weekend crowd'],
            ['Khlong Toei', 'Dawn wholesale; east of the river port', 'A raw wet market, not a snack hall'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Chatuchak', href: '/attractions/chatuchak-weekend-market', photo: '/photos/bangkok.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
      { title: 'Thai food hub', href: '/thai-food', photo: '/photos/thai-food.jpg' },
    ],
    affiliates: [
      stay('Sukhumvit stays', 'BTS to Mo Chit', 'Sleep on the Sukhumvit BTS if Saturday is Chatuchak and Or Tor Kor.', stayAreaLink('sukhumvit'), '/photos/sukhumvit.jpg'),
      klook('Market mornings', 'Tours', 'Skip a guide if you can ride MRT Kamphaeng Phet. Use one if Khlong Toei is the point.', klookTours('Or Tor Kor Market Bangkok'), '/photos/bangkok.jpg'),
    ],
    faqs: [
      {
        q: 'Or Tor Kor or Chatuchak for food?',
        a: 'Or Tor Kor for fruit and curry-over-rice in air-con. Chatuchak for a weekend shop and snack sois. They sit across the same road.',
      },
      {
        q: 'When is durian in?',
        a: 'Thai monthong and kan yao peak around April to June. Off-season fruit is imported or frozen. Ask before you pay by kilogram.',
      },
      {
        q: 'Do you need Khlong Toei as well?',
        a: 'Only if you want a wholesale wet market at dawn. It is not a first-trip snack hall.',
      },
    ],
  },
  {
    path: '/thai-food/bangkok-rooftop-bars-and-river-dining',
    title: 'Bangkok rooftop bars and river dining',
    description:
      'Bangkok sky bars and Chao Phraya dinner cruises: Lebua Sky Bar, Mahanakhon SkyBeach, Octave with 350 to 550 THB cocktails, and river boats 900 to 1,800 THB. No flip-flops. No sleeveless shirts for men.',
    lede:
      'Come for a dress-code skyline drink or a Wat Arun terrace, not a street-stall night. Octave has no cover. Vertigo and Moon Bar stay closed for renovation until 2 Dec 2026.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Rooftop bars and river dining', href: '/thai-food/bangkok-rooftop-bars-and-river-dining' },
    ],
    facts: [
      { label: 'Dress', value: 'No flip-flops; men need sleeves; many rooms refuse shorts' },
      { label: 'Octave', value: 'Bangkok Marriott Hotel Sukhumvit, Soi 57; BTS Thong Lo Exit 3' },
      { label: 'Vertigo and Moon Bar', value: 'Banyan Tree Sathon; closed until 2 Dec 2026' },
      { label: 'Cruise', value: 'Chao Phraya dinner boats 900 to 1,800 THB in 2026' },
    ],
    chips: ['Dress code', 'Octave', 'Dinner cruise'],
    photo: '/photos/nightlife.jpg',
    geo: { lat: 13.7246, lon: 100.534, containedIn: 'Bangkok' },
    paragraphs: [
      'Bangkok rooftops sell the skyline, not the wok. Dress codes are real: flip-flops are turned away, and men in sleeveless shirts do not get in. Sky Bar at Lebua sits on the 64th floor of State Tower, Sathorn. Mahanakhon SkyBeach is the 78th-floor deck on the King Power tower. Octave Rooftop Lounge and Bar sits atop Bangkok Marriott Hotel Sukhumvit on Sukhumvit Soi 57, steps from BTS Thong Lo Exit 3. It occupies floors 45 to 49, charges no cover, and pours cocktails at 350 to 550 THB in 2026. It is not the Marriott Marquis Queen\'s Park roof.',
      'Vertigo and Moon Bar at Banyan Tree Sathorn remain closed for renovation until 2 December 2026. Do not book a 2026 card that still lists that roof as open. For a Wat Arun view without a tower, use Sala Rattanakosin or Eat Sight Story Deck on the Bangkok bank. Chao Phraya dinner cruises run 900 to 1,800 THB depending on the boat and the buffet. Book a named pier. Last BTS and MRT trains are around midnight; rooftops run later.',
    ],
    sections: [
      {
        id: 'which-roof',
        title: 'Tower, terrace, or dinner boat',
        paragraphs: [
          'Pick one expensive view night. A sky bar and a dinner cruise on the same evening waste both. Sleep on Sathorn if Lebua or Mahanakhon is the plan. Sleep in Thonglor if Octave is the drink. Sleep in Rattanakosin if the terrace faces Wat Arun. For district nightlife after the drink, use [Thonglor](/interests/nightlife/thonglor-ekkamai) or [Silom and Sathorn](/interests/nightlife/silom-sathorn).',
        ],
        table: {
          headers: ['Room', 'Height or water', '2026 note'],
          rows: [
            ['Sky Bar, Lebua', '64th floor, State Tower', 'Sathorn; strict dress'],
            ['Mahanakhon SkyBeach', '78th floor', 'King Power tower; ticketed deck'],
            ['Octave, Bangkok Marriott Sukhumvit', 'Floors 45 to 49, Soi 57', 'BTS Thong Lo Exit 3; no cover; 350 to 550 THB'],
            ['Vertigo and Moon Bar', 'Banyan Tree Sathorn', 'Closed for renovation until 2 Dec 2026'],
            ['Sala Rattanakosin / Eat Sight Story', 'Wat Arun terrace', 'River, not a tower'],
            ['Dinner cruise', 'Chao Phraya', '900 to 1,800 THB; named pier'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Silom and Sathorn nights', href: '/interests/nightlife/silom-sathorn', photo: '/photos/silom-and-sathorn.jpg' },
      { title: 'Thonglor nights', href: '/interests/nightlife/thonglor-ekkamai', photo: '/photos/phrom-phong-and-thong-lo.jpg' },
      { title: 'Wat Arun', href: '/attractions/wat-arun', photo: '/photos/riverside.jpg' },
      { title: 'Thai food hub', href: '/thai-food', photo: '/photos/thai-food.jpg' },
    ],
    affiliates: [
      stay('Sathorn stays', 'Lebua and Mahanakhon', 'Sleep on Sathorn if the 64th or 78th floor is the night.', stayAreaLink('sathorn'), '/photos/silom-and-sathorn.jpg'),
      stay('Thonglor stays', 'Octave first', 'Use this when the drink is floors 45 to 49 and the Grab home is short.', stayAreaLink('thonglor'), '/photos/sukhumvit.jpg'),
      klook('Dinner cruises and sky decks', 'Tickets', 'Name the pier or the tower. Confirm whether a cover or a park-style deck ticket is extra.', klookTickets('Bangkok dinner cruise'), '/photos/riverside.jpg'),
    ],
    faqs: [
      {
        q: 'Can you wear flip-flops?',
        a: 'No. Sky bars turn flip-flops away. Men need sleeves. Carry a shirt in the bag if you came from the river.',
      },
      {
        q: 'Is Vertigo open in 2026?',
        a: 'Not until 2 December 2026. Use Lebua, Mahanakhon, Octave, or a Wat Arun terrace until then.',
      },
      {
        q: 'Cruise or rooftop?',
        a: 'Rooftop if the skyline is the point. Cruise if you want a set dinner on the water. Do not book both.',
      },
    ],
  },
  {
    path: '/thai-food/chiang-mai-khao-soi-and-markets',
    title: 'Chiang Mai khao soi and markets',
    description:
      'Chiang Mai\'s Lanna circuit: Khao Soi Mae Sai 55 to 90 THB on Ratchaphuek Road in Chang Phueak (08:00 to 16:00 Mon to Sat, closed Sunday), Khun Yai 10:00 to 14:00, Warorot sai ua, and North Gate khao kha moo.',
    lede:
      'Eat khao soi at lunch, Warorot in daylight, and stewed pork leg after dark. This circuit fits three nights inside or beside the moat. Sunday is a walking-street night, not a Mae Sai day.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Chiang Mai khao soi and markets', href: '/thai-food/chiang-mai-khao-soi-and-markets' },
    ],
    facts: [
      { label: 'Mae Sai', value: 'Ratchaphuek Rd, Chang Phueak; 55 to 90 THB; 08:00 to 16:00 Mon-Sat' },
      { label: 'Khun Yai', value: 'Between Sri Poom and Chang Moi; 10:00 to 14:00 only' },
      { label: 'North Gate', value: 'Chang Phuak evening khao kha moo 60 to 70 THB' },
      { label: 'Sunday street', value: 'Ratchadamnoen from Tha Phae toward Wat Phra Singh' },
    ],
    chips: ['Khao soi lunch', 'Warorot', 'North Gate'],
    photo: '/photos/thai-food-lanna.jpg',
    geo: { lat: 18.796, lon: 98.981, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Chiang Mai food runs on a lunch clock. Khao Soi Mae Sai on Ratchaphuek Road in Chang Phueak, north of the moat, is the coconut curry noodle at 55 to 90 THB on the 2026 menu. Hours are 08:00 to 16:00 Monday to Saturday. It is closed Sunday. Khao Soi Khun Yai sits between Sri Poom and Chang Moi, inside the north moat, and serves only 10:00 to 14:00. Pots empty. Be there before 13:00. For the wider Lanna table, use [Northern Lanna](/thai-food/northern-lanna).',
      'Warorot Market (Kad Luang) is the daytime wholesale hall for sai ua herbal sausage, nam prik noom green chili dip, and snacks you can carry. Chang Phuak (North Gate) is the evening stewed-pork-leg strip: khao kha moo at 60 to 70 THB. Sunday Walking Street closes Ratchadamnoen from Tha Phae Gate toward Wat Phra Singh from late afternoon. Do not hunt Mae Sai or Khun Yai on that Sunday.',
    ],
    sections: [
      {
        id: 'circuit',
        title: 'A three-day Lanna eat',
        paragraphs: [
          'Day one: Khun Yai before 13:00 or Mae Sai before 16:00, Old City wats, North Gate pork after dark. Day two: Warorot in the morning, a sit-down Northern dinner. Day three: Sunday Walking Street if the calendar lines up, or a Nimman coffee if it does not. Smoke season from late February to April can shut the fun. If the air is bad, eat and leave.',
        ],
        table: {
          headers: ['Stop', 'Clock', '2026 plate'],
          rows: [
            ['Khao Soi Mae Sai', '08:00 to 16:00 Mon to Sat; closed Sunday', '55 to 90 THB; Ratchaphuek Rd, Chang Phueak'],
            ['Khao Soi Khun Yai', '10:00 to 14:00 only', 'Yard inside the north moat'],
            ['Warorot / Kad Luang', 'Daytime wholesale', 'Sai ua, nam prik noom'],
            ['Chang Phuak North Gate', 'Evening', 'Khao kha moo 60 to 70 THB'],
            ['Sunday Walking Street', 'Ratchadamnoen, late afternoon', 'Snacks; not a khao soi day'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Chiang Mai Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Nimmanhaemin', href: '/chiang-mai/nimmanhaemin', photo: '/photos/nimman.jpg' },
      { title: 'Coffee guide', href: '/thai-food/bangkok-and-chiang-mai-coffee-guide', photo: '/photos/ari.jpg' },
    ],
    affiliates: [
      stay('Old City stays', 'Moat first', 'Walk to Khun Yai, Warorot, and the Sunday street. Nimman can wait.', stayAreaLink('chiang-mai-old-city'), '/photos/chiang-mai-old-city.jpg'),
      klook('Old City food walks', 'Tours', 'Useful if you want a guide through Warorot. The khao soi rooms are still a lunch deadline.', klookTours('Chiang Mai food tour'), '/photos/thai-food-lanna.jpg'),
    ],
    faqs: [
      {
        q: 'Mae Sai or Khun Yai?',
        a: 'Mae Sai if you want the Ratchaphuek Road shop in Chang Phueak and a 55 to 90 THB bowl. Khun Yai if you can keep the 10:00 to 14:00 window. Both rest Sunday.',
      },
      {
        q: 'Is Warorot a night market?',
        a: 'No. Kad Luang is a daytime wholesale hall. Sunday Walking Street is the night snack walk on Ratchadamnoen.',
      },
      {
        q: 'Where do you eat after dark if it is not Sunday?',
        a: 'Chang Phuak North Gate for khao kha moo at 60 to 70 THB, or a sit-down Northern room from the Lanna page.',
      },
    ],
  },
  {
    path: '/thai-food/phuket-old-town-hokkien-and-peranakan-food',
    title: 'Phuket Old Town Hokkien and Peranakan food',
    description:
      'Phuket Town, a UNESCO City of Gastronomy, is morning roti, Lock Tien Hokkien mee, Go Benz rice porridge, and mansion crab curry on Thalang, Dibuk, and Krabi Roads.',
    lede:
      'Eat Phuket Town for Hokkien-Peranakan house cooking, not a Kata grill. Morning roti at 30 to 60 THB, evening porridge except Monday, and crab yellow curry in a Sino-Portuguese room.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Phuket Old Town food', href: '/thai-food/phuket-old-town-hokkien-and-peranakan-food' },
    ],
    facts: [
      { label: 'Grid', value: 'Thalang, Dibuk, and Krabi Roads in Talat Yai / Talat Nuea' },
      { label: 'Morning', value: 'Rotee Thaew Nam charcoal roti 30 to 60 THB' },
      { label: 'Go Benz', value: 'Dry rice porridge 70 to 100 THB; evenings except Monday' },
      { label: 'Drive', value: '45 to 70 minutes from west-coast resorts in traffic' },
    ],
    chips: ['UNESCO gastronomy', 'Hokkien mee', 'Crab curry'],
    photo: '/photos/thai-food-southern.jpg',
    geo: { lat: 7.885, lon: 98.388, containedIn: 'Phuket Town' },
    paragraphs: [
      'Phuket Town is a UNESCO Creative City of Gastronomy. The useful circuit is Thalang, Dibuk, and Krabi Roads, not a Patong barbecue. Rotee Thaew Nam is the morning charcoal roti with massaman or fish curry at 30 to 60 THB. Lock Tien food court is the Hokkien mee and oh aew shaved-ice jelly hall. Go Benz is dry rice porridge with crispy pork at 70 to 100 THB, open evenings except Mondays.',
      'Tu Kab Khao and Raya serve the mansion plates: crab yellow curry gaeng poo bai chaplu (ใบชะพลู, wild betel) and the sour-and-sweet Peranakan set. Town is 45 to 70 minutes from the west-coast hotels. Make it a half day or sleep a night among the shophouses. For the wider southern map, use [South and Baba-Nyonya](/thai-food/southern-and-baba-nyonya).',
    ],
    sections: [
      {
        id: 'circuit',
        title: 'Morning roti to mansion curry',
        paragraphs: [
          'Start at Rotee Thaew Nam while the charcoal is hot. Walk Thalang to Lock Tien for Hokkien mee or a later oh aew. Keep Go Benz for an evening that is not Monday. Book or walk into Tu Kab Khao or Raya for crab curry when you want a table in a Sino-Portuguese room. Sunday Lard Yai on Thalang is the walking-street add-on if the date matches.',
        ],
        table: {
          headers: ['Stop', 'Order', 'Clock'],
          rows: [
            ['Rotee Thaew Nam', 'Charcoal roti, massaman or fish curry, 30 to 60 THB', 'Morning'],
            ['Lock Tien', 'Hokkien mee and oh aew', 'Food-court hours'],
            ['Go Benz', 'Dry rice porridge, crispy pork, 70 to 100 THB', 'Evenings except Monday'],
            ['Tu Kab Khao / Raya', 'Gaeng poo bai chaplu in a mansion', 'Lunch or dinner sit-down'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/thai-food-southern.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Thai food hub', href: '/thai-food', photo: '/photos/thai-food.jpg' },
    ],
    affiliates: [
      stay('Phuket Town stays', 'Heritage grid', 'Sleep in Talat Yai if dinner is Dibuk and Thalang, not a west-coast transfer.', stayLink('phuket'), '/photos/phuket.jpg'),
      klook('Old Town days', 'Tours', 'Town is a taxi. Island boats are a different ticket and a different monsoon.', klookTours('Phuket Old Town food'), '/photos/thai-food-southern.jpg'),
    ],
    faqs: [
      {
        q: 'Is Old Town worth it from Kata or Kamala?',
        a: 'Yes as a half day if you already have an inland errand. No as a 20-minute lunch before a west-coast sunset.',
      },
      {
        q: 'What is closed on Monday?',
        a: 'Go Benz rests Monday evenings. Check Raya and Tu Kab Khao on the day. Roti shops still open in the morning.',
      },
      {
        q: 'Hokkien mee or crab curry if you only have one meal?',
        a: 'Crab curry at Tu Kab Khao or Raya if you want the mansion plate. Lock Tien if you want a food-court Hokkien mee and oh aew.',
      },
    ],
  },
  {
    path: '/thai-food/thai-cooking-classes-bangkok-and-chiang-mai',
    title: 'Thai cooking classes in Bangkok and Chiang Mai',
    description:
      'Pick a half-day or full-day Thai cooking school by wok station, market tour, and mortar work. Bangkok Silom and Khlong Toei run 1,200 to 1,800 THB. Chiang Mai farm schools run 1,000 to 1,500 THB with pickup.',
    lede:
      'Use a class if you want to pound curry paste and cook 4 to 5 dishes at your own wok, not watch a demo. Bangkok fits a city morning. Chiang Mai fits a farm van outside the moat.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Thai cooking classes', href: '/thai-food/thai-cooking-classes-bangkok-and-chiang-mai' },
    ],
    facts: [
      { label: 'Format', value: 'Market tour, granite mortar, individual wok, 4 to 5 dishes' },
      { label: 'Bangkok 2026', value: 'Silom or Khlong Toei schools 1,200 to 1,800 THB' },
      { label: 'Chiang Mai 2026', value: 'Organic farm schools 1,000 to 1,500 THB with hotel pickup' },
      { label: 'Half vs full', value: 'Half day is enough; full day adds dessert and more paste' },
    ],
    chips: ['Own wok', 'Market tour', 'Mortar paste'],
    photo: '/photos/thai-food.jpg',
    paragraphs: [
      'A useful Thai cooking class is a morning wet-market walk, curry paste pounded in a granite mortar, and 4 to 5 dishes at an individual wok station. Demo-only rooms and hotel buffet classes waste the fee. Bangkok schools cluster around Silom and Khlong Toei at 1,200 to 1,800 THB in 2026. Chiang Mai organic-farm schools sit outside the moat at 1,000 to 1,500 THB and almost always include hotel pickup.',
      'Book the city that already holds you. Do not fly to Chiang Mai for a class you could take after a Silom morning. Read the inclusions: transfer, market, vegetarian menu, and if a recipe booklet comes with the fee. Klook listings are fine if they name the school and the dish list. For what to cook first at a stall, use [dishes to order](/thai-food/thai-dishes-to-order-first-trip).',
    ],
    sections: [
      {
        id: 'how-to-pick',
        title: 'How to pick the desk',
        paragraphs: [
          'Ask four questions. Do I get my own wok? Do we pound paste, or open a tub? Is there a wet-market tour before the kitchen? How many dishes in the half day? Four dishes with a mortar beat six dishes from a jar. Full-day classes add dessert, a second curry, and a longer farm walk. They also eat the only temple morning you had.',
        ],
        table: {
          headers: ['Base', '2026 fee', 'Who it fits'],
          rows: [
            ['Bangkok, Silom or Khlong Toei', '1,200 to 1,800 THB', 'City stay; market in town; BTS or a short van'],
            ['Chiang Mai, farm outside the moat', '1,000 to 1,500 THB with pickup', 'Three nights in the Old City or Nimman'],
            ['Half day', 'Morning market plus 4 dishes', 'Keep the afternoon free'],
            ['Full day', '5 dishes, dessert, longer farm time', 'Only if no wat or elephant day shares the date'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/thai-food.jpg' },
      { title: 'Silom and Sathorn', href: '/bangkok/silom-and-sathorn', photo: '/photos/silom-and-sathorn.jpg' },
      { title: 'Chiang Mai Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Thai food hub', href: '/thai-food', photo: '/photos/thai-food.jpg' },
    ],
    affiliates: [
      stay('Silom stays', 'Class then BTS', 'Sleep on Silom if the school is a morning walk, not a cross-city van.', stayAreaLink('silom'), '/photos/silom-and-sathorn.jpg'),
      stay('Chiang Mai stays', 'Farm pickup', 'Old City or Nimman vans collect about 08:00. Be packed the night before.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      klook('Cooking class tickets', 'Tours', 'Filter for an individual wok and a market tour. Confirm the 2026 THB band.', klookTours('Thai cooking class'), '/photos/thai-food.jpg'),
    ],
    faqs: [
      {
        q: 'Bangkok or Chiang Mai for a first class?',
        a: 'The city you already sleep in. Bangkok is 1,200 to 1,800 THB around Silom and Khlong Toei. Chiang Mai farm schools are 1,000 to 1,500 THB with pickup.',
      },
      {
        q: 'Half day or full day?',
        a: 'Half day if you also want a wat or a night market. Full day if the mortar and the farm are the whole date.',
      },
      {
        q: 'Do you need to book ahead?',
        a: 'Yes in high season. Walk-in works on a quiet weekday at some Bangkok rooms. Farm vans need a headcount the night before.',
      },
    ],
  },
  {
    path: '/thai-food/thai-dishes-to-order-first-trip',
    title: 'Thai dishes to order on a first trip',
    description:
      'A first-trip decoder for 12 dishes beyond Pad Thai: crispy-pork holy basil, two som tams, khao soi, massaman versus gaeng som, two tom yums, and moo ping. Street plates 50 to 120 THB.',
    lede:
      'Order these twelve if you want the Thai table past Pad Thai. Street stalls run 50 to 120 THB. Sit-down rooms run 180 to 350 THB. Say pet nit noi for a little heat or mai pet for none.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip' },
    ],
    facts: [
      { label: 'Street 2026', value: 'Most plates 50 to 120 THB' },
      { label: 'Restaurant 2026', value: 'Sit-down plates 180 to 350 THB' },
      { label: 'Heat', value: 'Pet nit noi = a little spicy; mai pet = no heat' },
      { label: 'Rice', value: 'Ask for khao niao (sticky) with grilled pork and som tam' },
    ],
    chips: ['12 dishes', 'Spice words', 'Street vs sit-down'],
    photo: '/photos/thai-food.jpg',
    paragraphs: [
      'Pad Thai is the gateway plate. The useful first-trip set is twelve others. Start with pad kra pao moo krob (crispy pork holy basil) and a fried egg khai dao on rice. Add som tam thai if you want peanut and palm sugar, or som tam poo pla ra if you want fermented crab and fish sauce and can handle the smell. Khao soi is the northern coconut noodle. Eat it at lunch in Chiang Mai.',
      'Gaeng massaman is the mild peanut-and-potato curry. Southern gaeng som is sour turmeric, not coconut-sweet. Tom yum goong nam khon is the creamy prawn soup; nam sai is the clear, sharper version. Moo ping grilled pork with sticky rice khao niao (ข้าวเหนียว) is the market snack. Street plates are 50 to 120 THB. Restaurant plates are 180 to 350 THB. Say pet nit noi for a little heat, mai pet for none. For neighbourhoods, start at the [Thai food hub](/thai-food).',
    ],
    sections: [
      {
        id: 'twelve',
        title: 'Twelve orders past Pad Thai',
        paragraphs: [
          'Also learn khao man gai (chicken rice), gaeng keow wan (sweet green curry; ask how sweet), khao niao mamuang (mango sticky rice when mangoes are in), and boat noodles if you want a dark broth. Do not order every chili condiment on the first night. One new heat word is enough.',
        ],
        table: {
          headers: ['Dish', 'What you get', 'Where it belongs'],
          rows: [
            ['Pad kra pao moo krob + khai dao', 'Crispy pork holy basil, fried egg', 'Any lunch stall, 50 to 80 THB'],
            ['Som tam thai', 'Green papaya, peanut, palm sugar', 'Central / tourist-friendly'],
            ['Som tam poo pla ra', 'Fermented crab and pla ra', 'Isan rooms; ask first'],
            ['Khao soi', 'Coconut curry noodles', 'Chiang Mai lunch'],
            ['Gaeng massaman', 'Mild peanut-potato curry', 'Sit-down rooms, 180 to 350 THB'],
            ['Gaeng som', 'Sour turmeric curry', 'South; not coconut-sweet'],
            ['Tom yum nam khon', 'Creamy prawn soup', 'Restaurants and some stalls'],
            ['Tom yum nam sai', 'Clear, sharper tom yum', 'If you want lime more than cream'],
            ['Moo ping + khao niao', 'Grilled pork, sticky rice', 'Markets, 15 to 25 THB a stick'],
            ['Khao man gai', 'Chicken rice and dip', 'Shophouse lunch'],
            ['Gaeng keow wan', 'Green curry', 'Ask how sweet before you order'],
            ['Khao niao mamuang', 'Mango sticky rice', '100 to 150 THB in season'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Cooking classes', href: '/thai-food/thai-cooking-classes-bangkok-and-chiang-mai', photo: '/photos/thai-food.jpg' },
      { title: 'Bangkok street food', href: '/thai-food/bangkok-street-food', photo: '/photos/thai-food-bangkok-street.jpg' },
      { title: 'Chiang Mai khao soi', href: '/thai-food/chiang-mai-khao-soi-and-markets', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Thai food hub', href: '/thai-food', photo: '/photos/thai-food.jpg' },
    ],
    affiliates: [
      stay('Bangkok first nights', 'Eat near the BTS', 'Sleep on Sukhumvit or Silom if the first plates are stalls, not a cruise.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      klook('Food tours', 'Tours', 'Use a tour only if you want a translator for som tam poo pla ra. The spice words still matter.', klookTours('Thai food tour first trip'), '/photos/thai-food.jpg'),
    ],
    faqs: [
      {
        q: 'How do you ask for less spice?',
        a: 'Pet nit noi is a little spicy. Mai pet is no heat. Pet mak is very spicy. Say it when you order, not after the first bite.',
      },
      {
        q: 'Street stall or restaurant?',
        a: 'Street for kra pao, som tam, moo ping, and khao soi at 50 to 120 THB. Sit-down for massaman and a creamy tom yum at 180 to 350 THB.',
      },
      {
        q: 'Is fermented som tam safe?',
        a: 'It is a normal Isan order. The smell is the point. If raw fermented crab worries you, stay on som tam thai.',
      },
    ],
  },
  {
    path: '/thai-food/bangkok-and-chiang-mai-coffee-guide',
    title: 'Bangkok and Chiang Mai coffee guide',
    description:
      'Thailand specialty Arabica from Maejantai, Doi Chang, and Doi Tung. Bangkok: Ari, Factory Coffee, Roots at The Commons Thonglor, Kaizen in Ekkamai. Chiang Mai: Graph, Akha Ama Phrasingh, Living Factory. Cups 80 to 160 THB.',
    lede:
      'Drink filter and espresso from northern Thai Arabica, not only instant on ice. This guide fits cafe hoppers in Ari or Nimman who will pay 80 to 160 THB and sit still for a pour-over.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Bangkok and Chiang Mai coffee', href: '/thai-food/bangkok-and-chiang-mai-coffee-guide' },
    ],
    facts: [
      { label: 'Origin', value: 'Maejantai in Mae Suai, Chiang Rai; also Doi Chang and Doi Tung' },
      { label: 'Bangkok pockets', value: 'Ari; Factory Coffee; Roots Commons Thonglor; Kaizen Ekkamai' },
      { label: 'Chiang Mai pockets', value: 'Graph Old City and One Nimman; Akha Ama Phrasingh and Factory' },
      { label: '2026 cups', value: 'Filter and espresso 80 to 160 THB' },
    ],
    chips: ['Doi Chang', 'Ari', 'Nimman'],
    photo: '/photos/ari.jpg',
    paragraphs: [
      'Thailand\'s specialty scene is highland Arabica from Chiang Rai (Maejantai village in Mae Suai District, Doi Chang, Doi Tung) and the Chiang Mai hills, roasted in city rooms. A 2026 filter or espresso is 80 to 160 THB. Iced is still the default; ask for hot if you want the origin. Factory Coffee sits near Phaya Thai ARL, useful on a Bangkok arrival day. Roots at The Commons Thonglor and Kaizen Coffee in Ekkamai are the Thonglor-Ekkamai evening pour-over strip. Graph Coffee Co. is a Chiang Mai roaster, not a Bangkok pin: Old City and One Nimman. Ari is the all-day cafe soi. Charoenkrung and Talat Noi mix roasters with river shophouses.',
      'In Chiang Mai, Akha Ama Coffee roasts Arabica from Maejantai village in Mae Suai District, Chiang Rai. Sit at Akha Ama Phrasingh on Ratchadamnoen Road, opposite Wat Phra Singh in the Old City, or at Akha Ama Living Factory on Hussadhisewee Soi 3 in Santitham. There is no Akha Ama cafe on Wat Ket. Ristr8to on Nimmanhaemin is the espresso and latte-art queue. Old City and Nimman both work; do not treat every wooden shop inside the moat as a specialty bar. Pair a Nimman afternoon with the [khao soi circuit](/thai-food/chiang-mai-khao-soi-and-markets), not with a farm class the same morning.',
    ],
    sections: [
      {
        id: 'where-to-sit',
        title: 'Where to sit in each city',
        paragraphs: [
          'Bangkok: Ari if you sleep north of the city, Factory Coffee if the Airport Rail Link drops you at Phaya Thai, Charoenkrung if the river is the two-day plan, Roots at The Commons or Kaizen in Ekkamai if dinner is already on Thonglor-Ekkamai. Chiang Mai: Akha Ama Phrasingh or Living Factory if you want Maejantai origin talk, Graph Coffee Co. for Old City or One Nimman, Ristr8to if you want Nimman espresso. Cups are 80 to 160 THB either city.',
        ],
        table: {
          headers: ['Pocket', 'Why you go', 'Rail or walk'],
          rows: [
            ['Ari, Bangkok', 'All-day cafe sois', 'BTS Ari; see the Ari district page'],
            ['Factory Coffee', 'Arrival-day filter near the ARL', 'Phaya Thai ARL / BTS'],
            ['Charoenkrung / Talat Noi', 'Roasters in shophouses', 'Walk from the river hotels'],
            ['Roots, The Commons Thonglor', 'Bangkok evening pour-over', 'BTS Thong Lo'],
            ['Kaizen Coffee, Ekkamai', 'Thonglor-Ekkamai specialty strip', 'BTS Ekkamai'],
            ['Graph Coffee Co., Chiang Mai', 'Old City and One Nimman rooms', 'Not a Bangkok pin'],
            ['Akha Ama Phrasingh', 'Maejantai lots; opposite Wat Phra Singh', 'Ratchadamnoen, Old City'],
            ['Akha Ama Living Factory', 'Maejantai lots; Santitham roast room', 'Hussadhisewee Soi 3'],
            ['Ristr8to, Nimman', 'Espresso queue', 'West of the moat'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Ari', href: '/bangkok/ari', photo: '/photos/ari.jpg' },
      { title: 'Nimmanhaemin', href: '/chiang-mai/nimmanhaemin', photo: '/photos/nimman.jpg' },
      { title: 'Chiang Rai', href: '/chiang-rai', photo: '/photos/chiang-rai.jpg' },
      { title: 'Thai food hub', href: '/thai-food', photo: '/photos/thai-food.jpg' },
    ],
    affiliates: [
      stay('Ari stays', 'Cafe sois', 'Sleep north of the city if Ari is two mornings and the BTS is the plan.', stayAreaLink('ari'), '/photos/ari.jpg'),
      stay('Nimman stays', 'Ristr8to and west-gate dinners', 'Use Nimman if coffee and a late dinner share the same nights.', stayAreaLink('nimmanhaemin'), '/photos/nimman.jpg'),
      klook('City cafe days', 'Tours', 'Most roasters are walk-in. Use a tour only if you want a guided origin tasting.', klookTours('Chiang Mai coffee tour'), '/photos/chiang-mai.jpg'),
    ],
    faqs: [
      {
        q: 'Is Thai coffee only iced and sweet?',
        a: 'Street coffee often is. Specialty rooms sell filter and espresso from Maejantai, Doi Chang, Doi Tung, and Chiang Mai lots at 80 to 160 THB. Ask for hot.',
      },
      {
        q: 'Factory Coffee or Ari if you just landed?',
        a: 'Factory Coffee if you come off the Airport Rail Link at Phaya Thai. Ari if you already sleep on that BTS stop.',
      },
      {
        q: 'Akha Ama or Ristr8to in Chiang Mai?',
        a: 'Akha Ama Phrasingh (Ratchadamnoen, opposite Wat Phra Singh) or Living Factory (Hussadhisewee Soi 3, Santitham) for Maejantai origin. Ristr8to for Nimman espresso. Graph Coffee Co. is the other Chiang Mai roaster, Old City and One Nimman.',
      },
    ],
  },
];
