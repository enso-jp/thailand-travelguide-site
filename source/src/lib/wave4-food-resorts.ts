import {
  stayLink,
  stayAreaLink,
  hotelSearchLink,
  klookTours,
} from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search stays'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string, cta = 'See tickets'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'klook' };
}

export const wave4Pages: Page[] = [
  {
    path: '/thai-food',
    title: 'Thai food: street stalls, Bib Gourmand, Lanna, and the south',
    description:
      'Thai food is regional. Bangkok is street stalls and cheap Michelin picks. The north is khao soi and larb. The south is sour curry and Phuket Baba-Nyonya houses.',
    lede:
      'Thai food is known for regional cooking, not one national plate. Eat Bangkok by rail. Eat Chiang Mai at lunch. Eat Phuket Town in a heritage house, not on a beach grill.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
    ],
    facts: [
      { label: 'Bangkok 2026', value: '44 Bib Gourmand in the city and nearby provinces' },
      { label: 'Chiang Mai', value: '18 Bib Gourmand; khao soi is a lunch dish' },
      { label: 'Phuket', value: '19 Bib Gourmand; Baba-Nyonya lives in Old Town' },
      { label: 'Hours', value: 'Check on arrival; pots empty and lists change yearly' },
    ],
    chips: ['Street food', 'Bib Gourmand', 'Lanna', 'Baba-Nyonya', 'Night markets'],
    photo: '/photos/bangkok.jpg',
    paragraphs: [
      'The Michelin Guide Thailand 2026 lists 137 Bib Gourmand rooms nationwide, including 44 in Bangkok and the surrounding provinces, 18 in Chiang Mai, and 19 in Phuket. Bib is the value badge, not a star. Jay Fai on Maha Chai is the one-star exception that still cooks like a street wok.',
      'Use the cluster pages. Do not stack a Jay Fai queue, a Chatuchak Saturday, and a Ratchada night market on the same calendar day. One serious meal and one market is enough.',
    ],
    portraits: [
      { title: 'Bangkok street food', href: '/thai-food/bangkok-street-food', photo: '/photos/old-city.jpg' },
      { title: 'Bangkok Bib Gourmand', href: '/thai-food/bangkok-bib-gourmand', photo: '/photos/sukhumvit.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/northern.jpg' },
      { title: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/phuket.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/nightlife.jpg' },
    ],
    affiliates: [
      stay('Stay near the stalls', 'Old City and riverside', 'Sleep in Rattanakosin or Charoenkrung if the first meals are Jay Fai, K. Panich, and Wang Lang.', stayAreaLink('rattanakosin'), '/photos/old-city.jpg'),
      stay('Thonglor for dinner nights', 'BTS Thong Lo', 'Use this when the plan is Ekkamai seafood and a late Grab, not a palace morning.', stayAreaLink('thonglor'), '/photos/sukhumvit.jpg'),
    ],
    faqs: [
      {
        q: 'Is a Michelin star the same as Bib Gourmand?',
        a: 'No. A star is a destination kitchen. Bib Gourmand is the inspector badge for good cooking at a fair price. Most of the useful Bangkok and Chiang Mai lunches are Bib or Selected, not starred.',
      },
      {
        q: 'Do you need reservations?',
        a: 'Almost never for street stalls and shophouses. Jay Fai is walk-in only, Wednesday to Saturday. A few sit-down rooms such as The Charm Dining Gallery take a phone booking. Queue early or accept a wait.',
      },
    ],
  },
  {
    path: '/thai-food/bangkok-street-food',
    title: 'Bangkok street food',
    description:
      'Bangkok street food is wok stalls and queues: Jay Fai, Thip Samai, Wang Lang, and Yaowarat, reached by BTS, MRT, or the river boat.',
    lede:
      'Bangkok street food is known for wok stalls and queues, not hotel buffets. Start on Maha Chai, Wang Lang, and Yaowarat. Walk one neighbourhood.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Bangkok street food', href: '/thai-food/bangkok-street-food' },
    ],
    facts: [
      { label: 'Jay Fai', value: '327 Maha Chai Rd; Wed-Sat 09:00-19:30; walk-in, cash' },
      { label: 'Thip Samai', value: '313 Maha Chai Rd; evenings until late' },
      { label: 'Wang Lang', value: 'Siriraj side; Chao Phraya N10 Wang Lang Pier' },
      { label: 'Yaowarat', value: 'MRT Wat Mangkon; start after 18:00' },
    ],
    chips: ['Maha Chai', 'Wang Lang', 'Yaowarat'],
    photo: '/photos/old-city.jpg',
    geo: { lat: 13.7526, lon: 100.5048, containedIn: 'Bangkok' },
    paragraphs: [
      'Street food in Bangkok is still a soi, a wok, and a queue. The Michelin street-food filter for 2026 is short on purpose: Jay Fai, K. Panich, Bunloet in Pom Prap, Tang Sui Heng on Banthat Thong, Somsak Pu Ob on Charoen Rat, Charoen Saeng Silom, Mae Prapha Crispy Pancake in Phra Nakhon, and Fried Banana Rama 5 across the Nonthaburi line. Treat that list as a filter, not a dare to hit all eight.',
      'Stay in the Old City or on Charoenkrung if these are the first two days. Sukhumvit is a different dinner. Grab home after Yaowarat. Last BTS and MRT trains are around midnight; the river boats stop earlier.',
    ],
    sections: [
      {
        id: 'maha-chai',
        title: 'Maha Chai and the Giant Swing block',
        paragraphs: [
          'Jay Fai (Raan Jay Fai) sits at 327 Maha Chai Road, Samran Rat, Phra Nakhon 10200. Michelin still gives it one star for the crab omelette and the yellow-curry prawns. The shop is walk-in only. Posted hours in 2026 are Wednesday to Saturday, 09:00 to 19:30, closed Sunday to Tuesday. Instagram (@jayfaibangkok) matches that window. Bring cash. The queue is organised; it is still a queue. Go at opening if you refuse to stand.',
          'Thip Samai, the pad thai shop Thai people still argue about, is at 313 Maha Chai Road, a short walk from Jay Fai and the Giant Swing. Evenings are the point, often until about 03:00. Check on arrival. Order the classic plate, not a fusion special. MRT Sam Yot is the nearest rail; the last stretch is a walk or a motorbike taxi.',
        ],
      },
      {
        id: 'wang-lang',
        title: 'Wang Lang, the lunch run that is not Khao San',
        paragraphs: [
          'Wang Lang Market sits on the Siriraj, Thonburi side of the river. Take the Chao Phraya Express to N10 Wang Lang Pier, or the cross-river ferry from Tha Chang / Maharaj if you are already at the palaces. The useful hours are late morning to late afternoon, roughly 08:00 to 18:00. Check on arrival. This is a local lunch market: boat noodles, khanom jeen, fruit, and stalls that empty when the hospital and office crowd leaves.',
          'Do not confuse it with the night stalls on Khao San. Eat, walk the sois behind Siriraj, and boat back. Stay on the Bangkok side at night unless you already booked Thonburi.',
        ],
      },
      {
        id: 'yaowarat',
        title: 'Yaowarat after dark',
        paragraphs: [
          'Chinatown food is a night plan. MRT Wat Mangkon Exit 1 puts you on Yaowarat Road. MRT Hua Lamphong is the south end if you want a longer walk. Stalls thicken after 18:00. Oyster omelettes, fishball soup, and roasted duck are the honest orders. Soi Nana (the Chinatown soi, not Sukhumvit Nana) is a cocktail pocket after dinner; that map lives on the nightlife page, not here.',
          'Cash and PromptPay still beat a foreign card. If you only have one Chinatown night, walk Yaowarat once, sit once, and leave. The second loop is souvenirs.',
        ],
      },
    ],
    portraits: [
      { title: 'Bangkok Bib Gourmand', href: '/thai-food/bangkok-bib-gourmand', photo: '/photos/sukhumvit.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/nightlife.jpg' },
      { title: 'Old City', href: '/bangkok/old-city-rattanakosin', photo: '/photos/old-city.jpg' },
      { title: 'Charoenkrung nights', href: '/interests/nightlife/charoenkrung-soi-nana', photo: '/photos/riverside.jpg' },
    ],
    affiliates: [
      stay('Rattanakosin stays', 'Walk to Maha Chai', 'The palace morning and the Jay Fai queue should share a neighbourhood.', stayAreaLink('rattanakosin'), '/photos/old-city.jpg'),
      stay('Charoenkrung stays', 'River and Chinatown', 'Sleep here if Yaowarat and the river boat are the same two nights.', stayAreaLink('charoenkrung'), '/photos/riverside.jpg'),
    ],
    faqs: [
      {
        q: 'Can you do Jay Fai and Thip Samai the same day?',
        a: 'Yes, they share Maha Chai Road. Jay Fai is a daytime walk-in that closes by 19:30 on open days. Thip Samai is the evening pad thai. Do not put a third queue between them.',
      },
      {
        q: 'Is a food tour worth it?',
        a: 'Only if you hate maps. The rail and the river already solve Wang Lang and Yaowarat. A tour makes sense for a first night if your group will not split.',
      },
    ],
  },
  {
    path: '/thai-food/bangkok-bib-gourmand',
    title: 'Bangkok Michelin Bib Gourmand',
    description:
      'Bib Gourmand means good food at a fair price. Bangkok has 44 of these 2026 rooms, with streets, hours, and rail exits.',
    lede:
      'Bib Gourmand is Michelin\'s value badge, not a star. Bangkok has 44 of these rooms in 2026. The ones worth a ride are still shophouses with a queue.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Bangkok Bib Gourmand', href: '/thai-food/bangkok-bib-gourmand' },
    ],
    facts: [
      { label: '2026 count', value: '44 in Bangkok and surrounding provinces; 4 newcomers' },
      { label: 'Newcomers', value: 'Jaan by Khun Jim, Keawloon, Kolun.h, SANN' },
      { label: 'Rule', value: 'Confirm the branch. Awards follow one door.' },
      { label: 'Pay', value: 'Many shops are cash only' },
    ],
    chips: ['Bib 2026', 'Branch matters', 'Lunch queues'],
    photo: '/photos/sukhumvit.jpg',
    paragraphs: [
      'Michelin published the 2026 Bib Gourmand list on 20 November 2025: 137 rooms in Thailand, 44 of them in Bangkok and the surrounding provinces. Four Bangkok-area names are new. The award moves. Recheck the current guide before you treat a 2024 blog as law.',
      'Branch names collide. Rung Rueang (Tang) is not the shop next door. Somsak Pu Ob Charoen Rat is not the Lat Ya branch. Pad Thai Fai Ta Lu is awarded at Dinso Road, not the Siam or Thong Lo copies.',
    ],
    sections: [
      {
        id: 'old-town',
        title: 'Old Town and Dusit, on purpose',
        paragraphs: [
          'K. Panich, 431-433 Tanao Road, Sao Chingcha, Phra Nakhon 10200, opposite Soi Phraeng Phuthon. Eighty years of mango sticky rice. Michelin lists Monday to Saturday about 07:00 to 17:00, closed Sunday. A dine-in room now sits across the street from the original counter. Walk from the Giant Swing. This is dessert with a pedigree, not a full lunch.',
          'Pad Thai Fai Ta Lu (Phra Nakhon) is on Dinso Road just north of Democracy Monument. Daily, roughly 10:00 to 23:00. Walk-in. Cards are usually fine. MRT Sam Yot, then a walk or a short motorbike. The giant-prawn plate is the flex; the pork plates are why locals return.',
          'Krua Apsorn (Dusit), the original Samsen shop near the National Library and Thewet. Monday to Saturday, about 10:30 to 19:30, closed Sunday. Cash at this branch. Chao Phraya Express to Thewet Pier (N15), then about seven minutes on foot. The crab omelette is the dish people boat across town for. Skip the later Dinso branch if you want the family room.',
          'Thai Tham, near MRT Sam Yot, is the century-old Thai-Chinese offal shop Michelin still writes about: stewed pig brain in the morning, Chinese liver sausage as a starter. Go early. Kolun.h, also in the Sam Yot walk, is a 2026 newcomer noodle room, often Tuesday to Sunday mornings until mid-afternoon.',
        ],
      },
      {
        id: 'sukhumvit',
        title: 'Sukhumvit and Ekkamai, if you already sleep there',
        paragraphs: [
          'Rung Rueang (Tang), Soi Sukhumvit 26, Khlong Toei. Pork noodles since 1965, in the guide since 2018. Bowls about 50 to 80 THB. Daily about 08:00 to 17:00, cash, no bookings. BTS Phrom Phong, five minutes into the soi. In 2026 the original corner is takeaway; sit in the larger shopfront across the soi by Noble Refine and the 7-Eleven. The neighbour signed only "Rung Rueang" is a different family.',
          'Here Hai (Vadhana), 112/1 Ekkamai Road (Sukhumvit 63), between sois 10 and 12. Crab fried rice is the plate. Tuesday to Sunday, about 10:00 to 15:00 and 16:00 to 17:30, closed Monday. Last plates are early. BTS Ekkamai is about 1.5 km; take a motorbike taxi from the station. Queue before 10:00 or at the 16:00 restart.',
          'Somsak Pu Ob (Charoen Rat), mouth of Soi Charoen Rat 1, Khlong San. Charcoal claypot crab and prawn noodles. Tuesday to Sunday evenings, about 16:00 to 21:30, closed Monday. Walk-in, cash. BTS Wongwian Yai, about seven minutes. Arrive before the stoves light or take the hour. The Lat Ya branch is not the Bib door.',
        ],
      },
      {
        id: 'how-to-use',
        title: 'How to use the rest of the 44',
        paragraphs: [
          'Beer Hima (Chatuchak) is Southern Thai seafood on Thetsaban Songkhro, useful after Or Tor Kor, not a substitute for Phuket Town. Janhom in Wang Thonglang is the long-running Southern auntie room if you already have a Ramkhamhaeng day. Phed Phed Bistro at The Circle Ratchaphruek is the awarded Isan table, not the Ari shop with the same name. Keawloon near Ekkamai runs two seatings; book or miss it.',
          'Hours move. "Check on arrival" is not filler. If a pot is empty, order the second dish or leave. Do not write the shop a one-star review because you arrived at 16:50 for a lunch-only room.',
        ],
        table: {
          headers: ['Shop', 'Door', 'Rail', 'Hours to treat as a start'],
          rows: [
            ['K. Panich', '431-433 Tanao Rd', 'Walk from Giant Swing', 'Mon-Sat morning to late afternoon'],
            ['Rung Rueang (Tang)', 'Sukhumvit Soi 26, sit-down shopfront', 'BTS Phrom Phong', 'Daily 08:00-17:00'],
            ['Here Hai', '112/1 Ekkamai Rd', 'BTS Ekkamai plus motorbike', 'Tue-Sun; last plates about 17:30'],
            ['Somsak Pu Ob', 'Soi Charoen Rat 1', 'BTS Wongwian Yai', 'Tue-Sun from about 16:00'],
            ['Krua Apsorn Dusit', 'Samsen / Thewet', 'Boat N15 Thewet', 'Mon-Sat; closed Sunday'],
            ['Pad Thai Fai Ta Lu', 'Dinso Rd, Phra Nakhon', 'MRT Sam Yot', 'Daily late morning to late evening'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Bangkok street food', href: '/thai-food/bangkok-street-food', photo: '/photos/old-city.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/nightlife.jpg' },
      { title: 'Sukhumvit and Thonglor', href: '/bangkok/sukhumvit-thonglor', photo: '/photos/sukhumvit.jpg' },
      { title: 'Thai food hub', href: '/thai-food', photo: '/photos/bangkok.jpg' },
    ],
    affiliates: [
      stay('Phrom Phong stays', 'Sukhumvit 24-26', 'Rung Rueang for lunch, BTS for the rest of the day.', stayAreaLink('sukhumvit'), '/photos/sukhumvit.jpg'),
      stay('Ekkamai and Thonglor', 'Dinner grid', 'Here Hai closes early. Sleep here if the night continues to Thonglor.', stayAreaLink('thonglor'), '/photos/sukhumvit.jpg'),
    ],
    faqs: [
      {
        q: 'Which Bib meal if you only have one?',
        a: 'K. Panich plus a nearby lunch if you are in the Old City. Rung Rueang (Tang) if you already live on Sukhumvit. Somsak Pu Ob if the group will share a claypot and a taxi to Thonburi.',
      },
      {
        q: 'Do surrounding-province Bibs count as a Bangkok day?',
        a: 'Only if you like traffic. Nonthaburi and Nakhon Pathom shops are real. They are not a first-trip morning. Stay inside the BTS and MRT loop unless someone local is driving.',
      },
    ],
  },
  {
    path: '/thai-food/northern-lanna',
    title: 'Northern Lanna: khao soi and larb',
    description:
      'The north is known for khao soi, a coconut curry noodle eaten at lunch, and Northern larb, which is not the Isan salad. Named Chiang Mai rooms, addresses, and hours.',
    lede:
      'Northern Thai food is known for khao soi at lunch and Northern larb, a cooked mince that is not the lime salad on Sukhumvit. Eat both near the Chiang Mai moat.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Northern Lanna', href: '/thai-food/northern-lanna' },
    ],
    facts: [
      { label: 'Khao Soi Mae Sai', value: '29/1 Ratchaphruek Rd; daily except Sunday 08:00-16:00' },
      { label: 'Khao Soi Khun Yai', value: 'Soi Sri Poom 8; Mon-Sat 10:00-14:00' },
      { label: 'Huen Muan Jai', value: '24 Ratchaphruek Rd; closed Wednesday' },
      { label: '2026 Bib', value: '18 Chiang Mai rooms, including three newcomers' },
    ],
    chips: ['Khao soi', 'Northern larb', 'Lunch clock'],
    photo: '/photos/northern.jpg',
    geo: { lat: 18.796, lon: 98.981, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Lanna cooking uses pork, herbs, and a slower heat than the northeast. Northern larb (larb Muan, larb Kua) is minced meat cooked with blood and spices, not the lime-and-toasted-rice Isan salad. Sai oua, nam prik noom, and gaeng hang lay belong on the same table. If a menu only offers som tam and sticky rice, you are in a tourist Isan room.',
      'Chiang Mai has 18 Bib Gourmand entries in 2026. Use two lunches and one sit-down Northern dinner. Do not spend the week inside a Nimman brunch loop.',
    ],
    sections: [
      {
        id: 'khao-soi',
        title: 'Khao soi: two bowls, two clocks',
        paragraphs: [
          'Khao Soi Mae Sai holds the 2026 Bib for the curry noodle. Address: 29/1 Ratchaphruek Road, Chang Phueak, Mueang Chiang Mai 50300, on the same north-of-the-moat road as Huen Muan Jai. Michelin hours: Monday to Saturday 08:00 to 16:00, closed Sunday. The broth is coconut curry with pickled mustard, shallot, lime, and a fried noodle nest. Order chicken or beef. This is a lunch. Do not arrive at 15:50 and complain.',
          'Khao Soi Khun Yai is the yard everyone still names, even without a 2026 Bib. Soi Sri Poom 8, Si Phum, just inside the north moat, in front of Wat Khuan Kha Ma, about 100 m across the moat from Wat Lok Moli. The entrance looks like a temple driveway. Monday to Saturday 10:00 to 14:00, closed Sunday. Bowls about 40 to 60 THB. Pots empty. Be there before 13:00. Walk from Chang Phueak Gate. Phone listings use 090 651 7088.',
        ],
      },
      {
        id: 'larb',
        title: 'Northern larb and the wooden rooms',
        paragraphs: [
          'Huen Muan Jai, 24 Ratchaphruek Road, Chang Phueak 50300. Wooden Lanna house in a garden, open-air tables and pavilions. Michelin hours: Monday, Tuesday, Thursday, Friday, Sunday 11:00 to 21:00; Saturday 11:00 to 15:00 and 17:00 to 21:00; closed Wednesday. Order the galangal mushroom dip and a Northern larb or the snakehead vegetable soup. This is the sit-down that teaches the difference from Isan.',
          'Huan Soontaree, also Bib, is the riverside Northern room if you want a singer-owner night on the Ping. Euang Kam Sai and Gongkham stay on the 2026 list for herb-heavy Lanna plates. Lung Khajohn Wat Ket is the Wat Gate street stall, useful if you sleep at 137 Pillars and want breakfast noodles instead of a hotel buffet.',
        ],
      },
      {
        id: 'how-to-day',
        title: 'A day that does not fight itself',
        paragraphs: [
          'Morning inside the moat, Khun Yai or Mae Sai before 13:00, Old City wats in the heat, Huen Muan Jai or a walking street at dusk. Sunday is Wat Phra Singh to Tha Phae on the walking street, not a khao soi day for Khun Yai or Mae Sai.',
          'Smoke season from late February to April sits in the valley. If the air is bad, eat and leave. Do not add a countryside cooking class you will photograph through a mask.',
        ],
        table: {
          headers: ['Room', 'Why you go', 'Closed'],
          rows: [
            ['Khao Soi Mae Sai', 'Bib curry noodles on Ratchaphruek', 'Sunday'],
            ['Khao Soi Khun Yai', 'Reference yard inside the north moat', 'Sunday, and when the pot dies'],
            ['Huen Muan Jai', 'Northern table: dips, larb, soups', 'Wednesday'],
            ['Lung Khajohn Wat Ket', 'Wat Gate street stall, east of the Ping', 'Check on arrival'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Chiang Mai Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Nimmanhaemin', href: '/chiang-mai/nimmanhaemin', photo: '/photos/nimman.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/nightlife.jpg' },
      { title: 'Four Seasons Chiang Mai', href: '/resort-living/four-seasons-chiang-mai', photo: '/photos/chiang-mai.jpg' },
    ],
    affiliates: [
      stay('Old City stays', 'Moat first', 'Walk to Khun Yai and the Sunday street. Nimman can wait.', stayAreaLink('chiang-mai-old-city'), '/photos/chiang-mai-old-city.jpg'),
      stay('Nimman stays', 'After the lunches', 'Useful if your dinners are west-gate and you want a Grab, not a songthaew argument.', stayAreaLink('nimmanhaemin'), '/photos/nimman.jpg'),
    ],
    faqs: [
      {
        q: 'Khun Yai or Mae Sai?',
        a: 'Mae Sai if you want the current Bib bowl and a proper shop. Khun Yai if you want the yard and can keep a lunch deadline. They are different rooms on opposite sides of the north moat.',
      },
      {
        q: 'Is Northern larb very spicy?',
        a: 'It is fragrant and rich more than lime-hot. Ask if blood is in the mince if that matters to you. Isan larb on the same menu is a different order.',
      },
    ],
  },
  {
    path: '/thai-food/southern-and-baba-nyonya',
    title: 'Southern gaeng som and Phuket Baba-Nyonya',
    description:
      'Southern Thai food is sour turmeric curry and shrimp paste. Phuket Town is known for Baba-Nyonya house cooking, especially moo hong. Addresses included.',
    lede:
      'The south is known for sour turmeric curry (gaeng som) and shrimp paste. Phuket Town is known for Baba-Nyonya houses and braised pork (moo hong). A Kata beach grill is a different meal.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya' },
    ],
    facts: [
      { label: 'Phuket 2026', value: '19 Bib Gourmand rooms on the island' },
      { label: 'One Chun', value: '48/1 Thep Krasatti Rd; roughly 10:00-22:00' },
      { label: 'The Charm', value: '93 Dibuk Rd; closed Wednesday' },
      { label: 'Season', value: 'Town works all year; west-coast boats follow Nov-Apr' },
    ],
    chips: ['Gaeng som', 'Moo hong', 'Old Town'],
    photo: '/photos/phuket.jpg',
    geo: { lat: 7.885, lon: 98.388, containedIn: 'Phuket Town' },
    paragraphs: [
      'Baba-Nyonya (Peranakan) cooking in Phuket is Hokkien-Chinese technique in a Southern Thai pantry: dark soy, palm sugar, salted fish, and a long simmer. Moo hong, the braised pork belly, is the house dish. Gaeng som is the sour turmeric curry, here often with fish or pumpkin, sharper than a Bangkok gaeng som. Crab curry with wild betel and rice noodles is the shared plate.',
      'Phuket Town is 45 to 70 minutes from the west-coast resorts in traffic. Book lunch in town on a day you are already inland, or sleep a night among the shophouses. Do not drive to Dibuk for a 20-minute meal and a sunset in Kamala.',
    ],
    sections: [
      {
        id: 'rooms',
        title: 'Three doors on the heritage grid',
        paragraphs: [
          'One Chun, 48/1 Thep Krasatti Road, Talat Yai, Mueang Phuket 83000. Nineteenth-century house, family recipes, Bib Gourmand through the 2026 guide. Michelin hours run about 10:00 to 22:00 most days, Tuesday often to 21:00. Walk-in. Order moo hong, shrimp with shrimp paste, and the crab yellow curry. This is the first-timer room that still tastes like a Phuket house.',
          'The Charm Dining Gallery, 93 Dibuk Road, Talat Nuea 83000, +66 76 530 199. Chef Buriphat in a hundred-year house. 2026 Bib for Southern Thai-Peranakan cooking. Michelin hours: 11:00 to 21:00, closed Wednesday. Phone ahead. Inspectors call out the moo hong and the pork-rib soup with tofu and salted fish. This is the Baba plate with a booking, not a queue in the sun.',
          'Raya, 48/1 Dibuk Road, Talat Yai, is the mansion everyone still names. It held Bib Gourmand from 2019 to 2024, moved to Selected in 2025, and is off the 2026 Phuket list. The gaeng som fak thong and crab curry remain the reason to go. Walk-in. Do not call it starred. Use it when Charm is closed Wednesday or One Chun is a circus.',
        ],
      },
      {
        id: 'gaeng-som',
        title: 'What to order, and what to skip',
        paragraphs: [
          'Gaeng som should taste sour first, then hot, with turmeric in the colour. If it is sweet coconut, you ordered a different curry. Moo hong should be glossy and soft, not a generic stew. O tao (oyster and taro omelette) and Hokkien mee are the Chinese-Phuket street cousins; hunt those at local stalls, not at a Kata hotel.',
          'Patong barbecue is not Southern food. Island hopping is not a lunch plan. If you are based at Trisara or Laguna, make Old Town a half day: house, coffee on Thalang, Sunday Lard Yai if the date matches.',
        ],
        table: {
          headers: ['Dish', 'What it is', 'Where to start'],
          rows: [
            ['Gaeng som', 'Sour turmeric curry, fish or pumpkin', 'Raya; ask at One Chun for the sour fish curry'],
            ['Moo hong', 'Hokkien-style braised pork belly', 'One Chun or The Charm'],
            ['Gaeng poo', 'Phuket crab curry, often with kanom jeen', 'One Chun'],
            ['Nam prik kung', 'Shrimp-paste shrimp, sharp and salty', 'One Chun'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/nightlife.jpg' },
      { title: 'Trisara', href: '/resort-living/trisara-phuket', photo: '/photos/phuket.jpg' },
      { title: 'Kamala and Bang Tao clubs', href: '/interests/nightlife/phuket-kamala-bangtao', photo: '/photos/nightlife.jpg' },
    ],
    affiliates: [
      stay('Phuket Town stays', 'Heritage grid', 'Sleep in Talat Yai if dinner is Dibuk and Thep Krasatti, not a west-coast transfer.', stayLink('phuket'), '/photos/phuket.jpg'),
      stay('West-coast stays', 'After the town lunch', 'Patong if you insist on the strip. Search the coast you will actually swim.', stayAreaLink('patong'), '/photos/phuket.jpg'),
      klook('Old Town and island days', 'Klook', 'Town is a taxi. Boats are a different ticket and a different monsoon.', klookTours('Phuket Old Town'), '/photos/phuket.jpg'),
    ],
    faqs: [
      {
        q: 'Is Raya still Michelin?',
        a: 'Not in the 2026 Phuket guide. It is still a local mansion kitchen. Use One Chun or The Charm if the badge is why you came. Use Raya if you want the sour curry in the old room.',
      },
      {
        q: 'Can you eat this in Krabi or Samui instead?',
        a: 'Southern sour curry exists along the Andaman and the Gulf. The Baba-Nyonya house culture is Phuket Town. Do not substitute a resort tasting menu and call it the same trip.',
      },
    ],
  },
  {
    path: '/thai-food/night-markets',
    title: 'Thailand night markets: hours and rail exits',
    description:
      'Bangkok night markets with hours and BTS or MRT exits, plus Chiang Mai walking streets and Phuket Lard Yai. Schedules move. Check on arrival.',
    lede:
      'Bangkok night markets are known for food halls with a clock and an exit number. Jodd Fairs is the nightly Ratchada food market. Chatuchak is a weekend day market.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Night markets', href: '/thai-food/night-markets' },
    ],
    facts: [
      { label: 'Jodd Fairs', value: 'Daily 17:00-01:00; MRT Thailand Cultural Centre Exit 4' },
      { label: 'Rot Fai Ratchada', value: 'Thu-Sun 17:00-01:00; same station, Esplanade side' },
      { label: 'Chatuchak', value: 'Sat-Sun 09:00-18:00; BTS Mo Chit Exit 1' },
      { label: 'Last trains', value: 'BTS and MRT around midnight; Grab after that' },
    ],
    chips: ['Exit numbers', 'Ratchada', 'Walking streets'],
    photo: '/photos/nightlife.jpg',
    paragraphs: [
      'Hours below are the posted windows used in 2026. Operators shift them for rain, exams, and royal dates. "Check on arrival" means the Facebook page or the station sign that night, not a screenshot from 2022.',
      'Jodd Fairs on Ratchadaphisek is not Train Night Market Ratchada. They sit near the same MRT station and people still mix the names. Chatuchak is a weekend day market with a Friday wholesale night. Or Tor Kor is produce, not neon.',
    ],
    sections: [
      {
        id: 'bangkok',
        title: 'Bangkok: exits first',
        paragraphs: [
          'Jodd Fairs Ratchada, 129 Ratchadaphisek Road, Din Daeng 10400. Daily 17:00 to 01:00. MRT Thailand Cultural Centre (Blue Line) Exit 4, about 100 m, three minutes on foot. Free entry. Cash or Thai QR. The Rama 9 site is closed. This is the food-first night market.',
          'Train Night Market Ratchada (Talad Rot Fai) reopened 27 March 2026 behind Esplanade on the original lot after The One Ratchada shut in May 2025. Thursday to Sunday, 17:00 to 01:00. MRT Thailand Cultural Centre, Esplanade / Exit 3 side, about five minutes. Vintage, containers, and bars. Closed Monday to Wednesday. The Srinakarin Rot Fai is a different market on the Yellow Line at Suan Luang Rama 9, Thursday to Sunday about 17:00 to 24:00.',
          'Chatuchak Weekend Market: Saturday and Sunday 09:00 to 18:00. BTS Mo Chit Exit 1, or MRT Chatuchak Park Exit 1. Friday evening wholesale is a separate, thinner session, often 18:00 to 24:00, better from MRT Kamphaeng Phet. Or Tor Kor, the national produce market, is next to MRT Kamphaeng Phet Exit 3, daily from early morning to early evening (listings vary 06:00-18:00 and 08:00-18:00). Check on arrival. Eat here at lunch, not at 21:00.',
          'Yaowarat is a street, not a ticketed market: MRT Wat Mangkon after 18:00. Asiatique The Riverfront is a built river complex at Charoenkrung; BTS Saphan Taksin then the free shuttle boat. Stalls run into the late evening; the mall side opens earlier. Wang Lang is a day market (see the street-food page). Huai Khwang Night Market, MRT Huai Khwang, runs late for local supper, often toward 03:00. Patpong stalls by BTS Sala Daeng are souvenirs on a go-go block, not a food plan.',
        ],
        table: {
          headers: ['Market', 'Hours', 'Rail exit', 'Use'],
          rows: [
            ['Jodd Fairs Ratchada', 'Daily 17:00-01:00', 'MRT TCC Exit 4', 'Food night, every night'],
            ['Rot Fai Ratchada', 'Thu-Sun 17:00-01:00', 'MRT TCC, Esplanade side', 'Vintage and bars; confirm it is open that week'],
            ['Chatuchak (JJ)', 'Sat-Sun 09:00-18:00', 'BTS Mo Chit Exit 1 / MRT Chatuchak Park Exit 1', 'Day market. Go at opening.'],
            ['Or Tor Kor', 'Daily, morning to early evening', 'MRT Kamphaeng Phet Exit 3', 'Fruit, curry pastes, lunch'],
            ['Yaowarat', 'From about 18:00', 'MRT Wat Mangkon Exit 1', 'Street supper, not a gate'],
            ['Asiatique', 'Afternoon into late evening', 'BTS Saphan Taksin plus boat', 'River complex; tourist by design'],
          ],
        },
      },
      {
        id: 'north-south',
        title: 'Chiang Mai and Phuket Town',
        paragraphs: [
          'Chiang Mai Sunday Walking Street: municipality closes Ratchadamnoen from Tha Phae Gate to Wat Phra Singh, plus the Phra Pokklao cross. Official text is approximately 17:00 to 22:00; stalls often build from 16:00. Individual Sundays get cancelled by notice. Check that week. Saturday Walking Street is Wualai Road near Chiang Mai Gate, Saturdays about 17:00 to 22:00, silver and a shorter walk. The Night Bazaar on Chang Khlan is a daily tourist strip from late afternoon; use it only if you already sleep south of the moat.',
          'Phuket Lard Yai (Lad Yai) Sunday Walking Street: Thalang Road in Old Town, Sunday 16:00 to 22:00, spreading onto Dibuk and the nearby sois. Pair it with a Baba lunch. Naka Weekend Market on Chao Fa East Road is the Saturday-Sunday suburban food field, about 16:00 to 22:00. It is a taxi from the west-coast hotels, not a walk from Patong.',
        ],
      },
    ],
    portraits: [
      { title: 'Bangkok street food', href: '/thai-food/bangkok-street-food', photo: '/photos/old-city.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/northern.jpg' },
      { title: 'Grab and BTS', href: '/plan/grab-and-bts', photo: '/photos/bts.jpg' },
      { title: 'Ari nights', href: '/interests/nightlife/ari-pradipat', photo: '/photos/sukhumvit.jpg' },
    ],
    affiliates: [
      stay('Ratchada stays', 'Same MRT as Jodd', 'Sleep on Ratchadaphisek if the night market is the plan, not a cross-city Grab at 00:30.', stayLink('bangkok'), '/photos/nightlife.jpg'),
      stay('Old City Chiang Mai', 'Walking-street nights', 'Sunday is Ratchadamnoen. Saturday is Wualai. The moat is the correct bed.', stayAreaLink('chiang-mai-old-city'), '/photos/chiang-mai-old-city.jpg'),
    ],
    faqs: [
      {
        q: 'Jodd or Rot Fai on Ratchada?',
        a: 'Jodd if you want food every night by Exit 4. Rot Fai if you want the vintage lot behind Esplanade on Thursday to Sunday. They are not the same operator.',
      },
      {
        q: 'Can you do Chatuchak at night?',
        a: 'The main market is a day. Friday wholesale is the night session, and it is thinner. For a neon food night, go to Jodd.',
      },
    ],
  },
  {
    path: '/resort-living/four-seasons-bangkok',
    title: 'Four Seasons Bangkok at Chao Phraya River',
    description:
      'Four Seasons Bangkok is a river resort at 300/1 Charoen Krung Road, Sathorn. Pools, a boat to the palaces, and a walk to the Oriental. Not a Sukhumvit business hotel.',
    lede:
      'Four Seasons Bangkok is known for a Chao Phraya resort on Charoenkrung, not a Sukhumvit tower. The stay is the pools, the river path, and a boat to the palaces.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Resort living', href: '/interests/resort-living' },
      { name: 'Four Seasons Bangkok', href: '/resort-living/four-seasons-bangkok' },
    ],
    facts: [
      { label: 'Address', value: '300/1 Charoen Krung Road, Sathorn, Bangkok 10120' },
      { label: 'Phone', value: '+66 2 032 0888' },
      { label: 'Neighbourhood', value: 'Charoenkrung / Sathorn river, no BTS at the door' },
      { label: 'Operator', value: 'Four Seasons Hotels and Resorts' },
    ],
    chips: ['Chao Phraya', 'Charoenkrung'],
    photo: '/photos/riverside.jpg',
    geo: { lat: 13.7105, lon: 100.5085, containedIn: 'Bangkok' },
    paragraphs: [
      'Four Seasons Bangkok at Chao Phraya River opened as a purpose-built river resort: two infinity pools, a 35-metre lap pool, and rooms that face the water instead of Wireless Road. The official door is 300/1 Charoen Krung Road, Sathorn 10120, +66 2 032 0888. You are between the old Bang Rak shipping offices and the Sathorn condos, on the Bangkok bank.',
      'There is no Skytrain on the doorstep. BTS Saphan Taksin is a short Grab or a walk plus heat. The hotel boat and the public river boats are the correct palace move. Capella sits further along the same bank. Mandarin Oriental is the historic neighbour at 48 Oriental Avenue. Book this when the evenings are the river path and BKK Social Club, not Soi 11.',
    ],
    sections: [
      {
        id: 'neighbourhood',
        title: 'Charoenkrung on foot',
        paragraphs: [
          'South of the hotel, Charoenkrung is warehouses turned galleries, Tropic City, and TCDC. North is Bang Rak, the Assumption Cathedral block, and the Oriental pier. Dinner can stay on property or walk to the shophouses. Do not treat this as a BTS-first stay. If you need Ploenchit retail every morning, book Rosewood instead.',
          'Airport cars from BKK take 45 to 90 minutes depending on the expressway. Confirm the transfer on the voucher. The first afternoon is a pool, not the Grand Palace.',
        ],
      },
    ],
    portraits: [
      { title: 'Mandarin Oriental', href: '/resort-living/mandarin-oriental-bangkok', photo: '/photos/riverside.jpg' },
      { title: 'Capella Bangkok', href: '/resort-living/capella-bangkok', photo: '/photos/riverside.jpg' },
      { title: 'Riverside district', href: '/bangkok/riverside-charoenkrung', photo: '/photos/riverside.jpg' },
      { title: 'Charoenkrung nights', href: '/interests/nightlife/charoenkrung-soi-nana', photo: '/photos/riverside.jpg' },
    ],
    affiliates: [
      stay('Four Seasons Bangkok rates', 'Trip.com', 'Live rates for this river house and the peers on the same bank.', hotelSearchLink('Four Seasons Bangkok Chao Phraya', 'bangkok'), '/photos/riverside.jpg'),
      stay('Charoenkrung stays', 'If the rate is the point', 'Same neighbourhood, wider price band.', stayAreaLink('charoenkrung'), '/photos/riverside.jpg'),
    ],
    faqs: [
      {
        q: 'Four Seasons river or Rosewood Ploenchit?',
        a: 'River if the hotel is the trip and you will boat. Rosewood if you want BTS Ploenchit Exit 1 in the basement and a city schedule.',
      },
    ],
  },
  {
    path: '/resort-living/mandarin-oriental-bangkok',
    title: 'Mandarin Oriental, Bangkok',
    description:
      'Mandarin Oriental, Bangkok is the historic river hotel at 48 Oriental Avenue, Bang Rak. Authors Wing, Bamboo Bar, and a private pier.',
    lede:
      'The Mandarin Oriental is known as Bangkok\'s historic river hotel. You come for the pier, the Authors Wing, and a city that arrives by boat.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Resort living', href: '/interests/resort-living' },
      { name: 'Mandarin Oriental Bangkok', href: '/resort-living/mandarin-oriental-bangkok' },
    ],
    facts: [
      { label: 'Address', value: '48 Oriental Avenue, Bang Rak, Bangkok 10500' },
      { label: 'Phone', value: '+66 2 659 9000' },
      { label: 'Neighbourhood', value: 'Bang Rak river, Charoenkrung walk' },
      { label: 'Operator', value: 'Mandarin Oriental Hotel Group' },
    ],
    chips: ['Bang Rak', 'Private pier'],
    photo: '/photos/riverside.jpg',
    geo: { lat: 13.7238, lon: 100.514, containedIn: 'Bangkok' },
    paragraphs: [
      'Mandarin Oriental, Bangkok lists 48 Oriental Avenue, Bangkok 10500, +66 2 659 9000. The hotel has sat on this Bang Rak bank for more than 150 years. The Authors Wing is the original house. The Tower and River Wings are the later rooms that still face the Chao Phraya. The hotel boat is part of the stay, not a gimmick.',
      'Bamboo Bar is the jazz room on property; book it, do not walk in on a Saturday and hope. The neighbourhood is Charoenkrung: Assumption, the old customs houses, and a short Grab to Four Seasons or Capella. BTS Saphan Taksin is the rail if you must. This is a two- or three-night Bangkok that ignores Sukhumvit on purpose.',
    ],
    sections: [
      {
        id: 'neighbourhood',
        title: 'Bang Rak, not the palace precinct',
        paragraphs: [
          'The Grand Palace is a morning boat, not a walk. Chinatown is a Grab or a river hop. Stay here when the evenings are the terrace and one planned bar. Pair with The Siam only if you want two river personalities; you do not need both on a first week.',
          'Dress codes still exist in the historic rooms after 18:00. Pack a shirt. Airport cars should be booked on the voucher. The soi in front is tight; do not self-drive a first arrival from BKK.',
        ],
      },
    ],
    portraits: [
      { title: 'Four Seasons Bangkok', href: '/resort-living/four-seasons-bangkok', photo: '/photos/riverside.jpg' },
      { title: 'The Siam', href: '/resort-living/the-siam', photo: '/photos/riverside.jpg' },
      { title: 'Charoenkrung nights', href: '/interests/nightlife/charoenkrung-soi-nana', photo: '/photos/riverside.jpg' },
      { title: 'Bangkok street food', href: '/thai-food/bangkok-street-food', photo: '/photos/old-city.jpg' },
    ],
    affiliates: [
      stay('Mandarin Oriental Bangkok rates', 'Trip.com', 'Live rates for the Oriental Avenue house.', hotelSearchLink('Mandarin Oriental Bangkok', 'bangkok'), '/photos/riverside.jpg'),
      stay('Riverside stays', 'Same bank', 'If the Oriental rate is the trip budget, stay on the river anyway.', stayAreaLink('riverside'), '/photos/riverside.jpg'),
    ],
    faqs: [
      {
        q: 'Is the Authors Wing worth specifying?',
        a: 'Yes, if the historic rooms are why you booked. They are fewer and they book out. The River Wing is still the river. Read the room name on the confirmation.',
      },
    ],
  },
  {
    path: '/resort-living/rosewood-bangkok',
    title: 'Rosewood Bangkok',
    description:
      'Rosewood Bangkok is a luxury tower at 1041/38 Ploenchit Road, linked to BTS Ploenchit Exit 1. City days and malls, not a quiet river week.',
    lede:
      'Rosewood Bangkok is known for a Ploenchit tower with the Skytrain in the basement. Use it for city days. Use the river hotels if you want water.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Resort living', href: '/interests/resort-living' },
      { name: 'Rosewood Bangkok', href: '/resort-living/rosewood-bangkok' },
    ],
    facts: [
      { label: 'Address', value: '1041/38 Ploenchit Road, Lumphini, Pathumwan 10330' },
      { label: 'Phone', value: '+66 2 080 0088' },
      { label: 'Rail', value: 'Direct to BTS Ploenchit Exit 1' },
      { label: 'Operator', value: 'Rosewood Hotels & Resorts' },
    ],
    chips: ['Ploenchit', 'BTS in the building'],
    photo: '/photos/siam.jpg',
    geo: { lat: 13.743, lon: 100.547, containedIn: 'Bangkok' },
    paragraphs: [
      'Rosewood Bangkok opened 31 March 2019 at 1041/38 Ploenchit Road, Lumphini, Pathumwan 10330, +66 2 080 0088. The tower silhouette is the wai. One hundred and fifty-eight rooms. The useful fact is the physical link to BTS Ploenchit Exit 1. You can ride to Siam, Thonglor, or the river connection at Saphan Taksin without standing in Ploenchit rain.',
      'This is central Pathumwan: Central Embassy, Wireless Road embassies, and a short walk toward Lumphini Park. It is not a quiet river path. Book it when the itinerary is city. Book Four Seasons or the Oriental when the itinerary is water.',
    ],
    sections: [
      {
        id: 'neighbourhood',
        title: 'Ploenchit and Wireless',
        paragraphs: [
          'Breakfast, then BTS. That is the stay. Dinner can be the hotel or a Grab to Thonglor. Soi 11 is one stop plus a walk if someone in the party insists. The park is the morning reset if the air is clear.',
          'BKK and DMK are both about 45 minutes in decent traffic and much more in rain. Use the hotel car. Ploenchit Road drop-offs clog; do not plan a tight international departure from a 09:00 checkout without a buffer.',
        ],
      },
    ],
    portraits: [
      { title: 'Siam and Silom', href: '/bangkok/siam-silom', photo: '/photos/siam.jpg' },
      { title: 'VIE Hotel Bangkok', href: '/resort-living/vie-hotel-bangkok', photo: '/photos/siam.jpg' },
      { title: 'Four Seasons Bangkok', href: '/resort-living/four-seasons-bangkok', photo: '/photos/riverside.jpg' },
      { title: 'Thonglor nights', href: '/interests/nightlife/thonglor-ekkamai', photo: '/photos/sukhumvit.jpg' },
    ],
    affiliates: [
      stay('Rosewood Bangkok rates', 'Trip.com', 'Live rates for the Ploenchit tower.', hotelSearchLink('Rosewood Bangkok', 'bangkok'), '/photos/siam.jpg'),
      stay('Siam stays', 'If you want the BTS without the manor rate', 'Same rail spine, broader inventory.', stayAreaLink('siam'), '/photos/siam.jpg'),
    ],
    faqs: [
      {
        q: 'Do you need a car if you stay here?',
        a: 'Not for the city core. The BTS link is the product. Keep a car for the airports and for dinner off the rail after midnight.',
      },
    ],
  },
  {
    path: '/resort-living/trisara-phuket',
    title: 'Trisara Phuket',
    description:
      'Trisara is a villa resort at 60/1 Moo 6, Srisoonthorn Road, Cherngtalay, on a guest-only north-west Phuket beach. Not Patong.',
    lede:
      'Trisara is known for private villas on a guest-only beach in Cherngtalay, north-west Phuket. Laguna is next door. Patong is a different island.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Resort living', href: '/interests/resort-living' },
      { name: 'Trisara Phuket', href: '/resort-living/trisara-phuket' },
    ],
    facts: [
      { label: 'Address', value: '60/1 Moo 6, Srisoonthorn Rd, Cherngtalay, Thalang 83110' },
      { label: 'Phone', value: '+66 76 310 100' },
      { label: 'Neighbourhood', value: 'Cherngtalay, north-west Phuket' },
      { label: 'Season', value: 'Andaman window November to April' },
    ],
    chips: ['Cherngtalay', 'Andaman'],
    photo: '/photos/phuket.jpg',
    geo: { lat: 8.007, lon: 98.297, containedIn: 'Phuket' },
    paragraphs: [
      'Trisara publishes 60/1 Moo 6, Srisoonthorn Road, Cherngtalay, Thalang, Phuket 83110, reservations@trisara.com, +66 76 310 100. The resort sits on the north-west coast above a private beach reserved for in-house guests. Villas, not a tower. Two Michelin Keys sit on the current brand page; treat keys as a hotel badge, not a restaurant star.',
      'Phuket Airport is the correct landing, closer than a town transfer. The Andaman calendar still rules: November to April for settled water. In the southwest monsoon, this coast takes wind and rain. A boat day is a desk decision, not a prepaid sure thing.',
    ],
    sections: [
      {
        id: 'neighbourhood',
        title: 'Cherngtalay, Laguna, Bang Tao',
        paragraphs: [
          'Srisoonthorn Road is the inland spine of Cherngtalay. Laguna Phuket and Bang Tao beach clubs sit a short drive south. Catch Beach Club is at 202/88 Moo 2, Cherngtalay, on Bang Tao sand. XANA is inside Angsana Laguna at 10 Moo 4 Srisoonthorn. Those are afternoon rooms, listed on the nightlife page. They are not a reason to leave Trisara at noon unless you want a DJ.',
          'Phuket Old Town is the Baba lunch, 50 minutes when the road is kind. Do it once. Do not string Patong Walking Street onto this stay. Amanpuri is the other west-coast pavilion product, further south toward Kamala and Surin. You do not need both in one week.',
        ],
      },
    ],
    portraits: [
      { title: 'Amanpuri', href: '/resort-living/amanpuri', photo: '/photos/phuket.jpg' },
      { title: 'Avista Hideaway', href: '/resort-living/avista-hideaway-phuket', photo: '/photos/phuket.jpg' },
      { title: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/phuket.jpg' },
      { title: 'Kamala and Bang Tao clubs', href: '/interests/nightlife/phuket-kamala-bangtao', photo: '/photos/nightlife.jpg' },
    ],
    affiliates: [
      stay('Trisara Phuket rates', 'Trip.com', 'Live rates for Cherngtalay villas and nearby Laguna peers.', hotelSearchLink('Trisara Phuket', 'phuket'), '/photos/phuket.jpg'),
    ],
    faqs: [
      {
        q: 'Do you need a car?',
        a: 'The resort can keep you fed. Book a driver for Old Town or a club. A scooter on Srisoonthorn after dark is a poor idea if you do not already ride.',
      },
    ],
  },
  {
    path: '/resort-living/anantara-chiang-mai',
    title: 'Anantara Chiang Mai Resort',
    description:
      'Anantara Chiang Mai is a Ping River resort at 123-123/1 Charoen Prathet Road, next to the Night Bazaar. Town access, not a Mae Rim rice terrace.',
    lede:
      'Anantara Chiang Mai is known as a river resort beside the Night Bazaar. Breakfast on the Ping. The Old City after 16:00. Not the Mae Rim valley.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Resort living', href: '/interests/resort-living' },
      { name: 'Anantara Chiang Mai', href: '/resort-living/anantara-chiang-mai' },
    ],
    facts: [
      { label: 'Address', value: '123-123/1 Charoen Prathet Road, Changklan, Mueang 50100' },
      { label: 'Phone', value: '+66 53 253 333' },
      { label: 'Neighbourhood', value: 'Changklan river, Night Bazaar' },
      { label: 'Operator', value: 'Anantara (Minor Hotels)' },
    ],
    chips: ['Ping River', 'Changklan'],
    photo: '/photos/chiang-mai.jpg',
    geo: { lat: 18.782, lon: 99.001, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Anantara Chiang Mai lists 123-123/1 Charoen Prathet Road, Changklan, Mueang Chiang Mai 50100, +66 53 253 333, chiangmai@anantara.com. The property sits on the west bank of the Ping, south of Nawarat Bridge, in the Night Bazaar grid. Rooms face the river or the garden. This is an in-town resort, not the Mae Rim valley.',
      'Four Seasons Chiang Mai is a different product 30 to 45 minutes north. 137 Pillars House is the Wat Gate teak compound across the water. Book Anantara when you want a pool and a river path without giving up dinner in the Old City.',
    ],
    sections: [
      {
        id: 'neighbourhood',
        title: 'Changklan and the eastern gates',
        paragraphs: [
          'Charoen Prathet is the river road. The Night Bazaar is behind you, tourist by design, useful for one walk. Tha Phae Gate is a short hop west. Sunday Walking Street is doable on foot if you like crowds. Wat Gate, the quieter teak neighbourhood, is across the Nawarat Bridge; that is breakfast-noodle country (Lung Khajohn) and 137 Pillars.',
          'CNX is about 15 to 25 minutes. Book the car. Smoke season still applies. Khao soi belongs at Mae Sai or Khun Yai, not as a room-service impression.',
        ],
      },
    ],
    portraits: [
      { title: '137 Pillars House', href: '/resort-living/137-pillars-house', photo: '/photos/chiang-mai.jpg' },
      { title: 'Four Seasons Chiang Mai', href: '/resort-living/four-seasons-chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/northern.jpg' },
      { title: 'Chiang Mai Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
    ],
    affiliates: [
      stay('Anantara Chiang Mai rates', 'Trip.com', 'Live rates on Charoen Prathet and nearby river peers.', hotelSearchLink('Anantara Chiang Mai', 'chiang-mai'), '/photos/chiang-mai.jpg'),
      stay('Old City stays', 'If you want the moat', 'Anantara is the river. The wats are the other side of Tha Phae.', stayAreaLink('chiang-mai-old-city'), '/photos/chiang-mai-old-city.jpg'),
    ],
    faqs: [
      {
        q: 'Anantara or Four Seasons Chiang Mai?',
        a: 'Anantara if you want town and the Night Bazaar block. Four Seasons if the rice terraces are the trip and you accept the drive.',
      },
    ],
  },
  {
    path: '/resort-living/137-pillars-house',
    title: '137 Pillars House Chiang Mai',
    description:
      '137 Pillars House is a restored teak compound at 2 Soi 1, Nawatgate Road, Wat Gate, east of the Ping. Quiet sois, not a moat guesthouse.',
    lede:
      '137 Pillars House is known for a restored teak house in Wat Gate, the old quarter east of the Ping. Quiet garden sois. The wats are one bridge away.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Resort living', href: '/interests/resort-living' },
      { name: '137 Pillars House', href: '/resort-living/137-pillars-house' },
    ],
    facts: [
      { label: 'Address', value: '2 Soi 1, Nawatgate Road, Wat Gate, Mueang 50000' },
      { label: 'Phone', value: '+66 53 247 788' },
      { label: 'Neighbourhood', value: 'Wat Gate, east of the Ping' },
      { label: 'Operator', value: '137 Pillars Hotels' },
    ],
    chips: ['Wat Gate', 'Teak house'],
    photo: '/photos/chiang-mai.jpg',
    geo: { lat: 18.7935, lon: 99.0055, containedIn: 'Chiang Mai' },
    paragraphs: [
      '137 Pillars House lists 2 Soi 1, Nawatgate Road, Tambon Watgate, Mueang Chiang Mai 50000, +66 53 247 788, reservations +66 53 249 339. The compound wraps the 1880s Borneo Company manager residence. Suites sit in garden buildings around the teak house. You are east of the Ping, in Wat Gate, where missionaries and teak firms once lived.',
      'Nawarat Bridge is the walk to Tha Phae. The Old City is close enough for late afternoon, far enough that you will Grab in the heat. This is the stay if you like a quiet soi and a house museum feel. It is not Nimman.',
    ],
    sections: [
      {
        id: 'neighbourhood',
        title: 'Wat Gate sois',
        paragraphs: [
          'Wat Ketkaram and the river path are the morning. Lung Khajohn Wat Ket is the Bib street stall if you want noodles without crossing the water. Anantara sits on the opposite bank, louder and more resort. Four Seasons is a valley drive.',
          'Do not expect a scene at the gate. Dinner is the hotel, a Wat Gate cafe, or a crossing to Tha Phae. Sunday Walking Street is the one night the west bank becomes a crowd; walk over and walk back.',
        ],
      },
    ],
    portraits: [
      { title: 'Anantara Chiang Mai', href: '/resort-living/anantara-chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/northern.jpg' },
      { title: 'Chiang Mai Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Veranda High', href: '/resort-living/veranda-high-chiang-mai', photo: '/photos/nimman.jpg' },
    ],
    affiliates: [
      stay('137 Pillars House rates', 'Trip.com', 'Live rates for the Wat Gate compound.', hotelSearchLink('137 Pillars House Chiang Mai', 'chiang-mai'), '/photos/chiang-mai.jpg'),
    ],
    faqs: [
      {
        q: 'Is Wat Gate too far from the wats?',
        a: 'It is the other side of one bridge. That is a feature in the afternoon heat. If you want to walk every temple at 08:00, sleep inside the moat instead.',
      },
    ],
  },
  {
    path: '/resort-living/phulay-bay',
    title: 'Phulay Bay, a Ritz-Carlton Reserve',
    description:
      'Phulay Bay is a Ritz-Carlton Reserve at 111 Moo 3, Nongthalay, Krabi. Private Andaman beach west of Ao Nang. The hotel is the week.',
    lede:
      'Phulay Bay is known as a sealed Krabi beach reserve, west of Ao Nang under the headland. You come for the limestone bay, not the village strip.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Resort living', href: '/interests/resort-living' },
      { name: 'Phulay Bay', href: '/resort-living/phulay-bay' },
    ],
    facts: [
      { label: 'Address', value: '111 Moo 3, Nongthalay, Mueang Krabi 81180' },
      { label: 'Phone', value: '+66 75 628 111' },
      { label: 'Airport', value: 'KBV, about 40 km; book the car' },
      { label: 'Season', value: 'Andaman November to April' },
    ],
    chips: ['Nong Thale', 'Andaman'],
    photo: '/photos/krabi.jpg',
    geo: { lat: 8.086, lon: 98.749, containedIn: 'Krabi' },
    paragraphs: [
      'Phulay Bay, a Ritz-Carlton Reserve, publishes 111 Moo 3, Nongthalay, Mueang, Krabi 81180, +66 75 628 111, reservations.phulaybay@ritzcarlton.com. The official airport note is about 40 km from Krabi International (KBV). This is the Reserve line: fewer keys, a private beach, and a price that assumes you will not hunt Ao Nang nightlife.',
      'Rayavadee is the Railay grove with no road. Phulay Bay has a road and still feels sealed. Do not book both. Pair with a Phi Phi or Hong day only in the Andaman window, and only if the marine desk agrees that morning.',
    ],
    sections: [
      {
        id: 'neighbourhood',
        title: 'Nong Thale, not the Ao Nang strip',
        paragraphs: [
          'Nong Thale (Nongthalay) is the bay west of Ao Nang, under Khao Ngon Nak. The village is thin. Dinner off-property is a decision, not a stroll of ten menus. Ao Nang beach road is a 15 to 25 minute car when the traffic is kind. Krabi Town is farther and useful only for a market or a departure.',
          'Southwest monsoon (May to October) hits this west-facing water. Green-season rates look clever until the beach closes and the longtail cancels. If your dates are July, read the Koh Tao page instead of forcing Krabi.',
        ],
      },
    ],
    portraits: [
      { title: 'Rayavadee', href: '/resort-living/rayavadee', photo: '/photos/krabi.jpg' },
      { title: 'Six Senses Yao Noi', href: '/resort-living/six-senses-yao-noi', photo: '/photos/krabi.jpg' },
      { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Phulay Bay rates', 'Trip.com', 'Live rates for the Reserve and Ao Nang peers.', hotelSearchLink('Phulay Bay Ritz-Carlton', 'krabi'), '/photos/krabi.jpg'),
      stay('Ao Nang stays', 'If you want a village', 'The strip is louder and closer to longtails.', stayAreaLink('ao-nang'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'Do you need Ao Nang as well?',
        a: 'No. One dinner run is enough. If you want nightly choice, stay in Ao Nang and skip the Reserve.',
      },
    ],
  },
  {
    path: '/resort-living/ritz-carlton-koh-samui',
    title: 'The Ritz-Carlton, Koh Samui',
    description:
      'The Ritz-Carlton, Koh Samui is a north-coast plantation bay at 9/123 Moo 5, Bophut, 6 km from the airport. Not a Chaweng party hotel.',
    lede:
      'The Ritz-Carlton Koh Samui is known for a private north-coast bay in Bophut. The airport is 6 km. Chaweng nightlife is a different island.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Resort living', href: '/interests/resort-living' },
      { name: 'Ritz-Carlton Koh Samui', href: '/resort-living/ritz-carlton-koh-samui' },
    ],
    facts: [
      { label: 'Address', value: '9/123 Moo 5, Tambon Bophut, Koh Samui 84320' },
      { label: 'Phone', value: '+66 77 915 777' },
      { label: 'Airport', value: 'USM about 6 km; book the car' },
      { label: 'Season', value: 'Lower Gulf easier January to September' },
    ],
    chips: ['Bophut', 'Gulf'],
    photo: '/photos/koh-samui.jpg',
    geo: { lat: 9.572, lon: 100.061, containedIn: 'Koh Samui' },
    paragraphs: [
      'The Ritz-Carlton, Koh Samui lists 9/123 Moo 5, Tambon Bophut, Koh Samui 84320, +66 77 915 777. Marriott puts the airport at about 6 km. The site is 58 acres of old plantation around a north-coast bay: suites and pool villas, Spa Village, a Muay Thai ring if you want it. This is Gulf water. January to September is the easier sea. October to December is the messy end.',
      'Four Seasons Samui is the north-west headland, farther from town. Six Senses Samui sits above Bophut on the hill. The Ritz is the flatter, more family-readable north-coast option. You still need a car to leave.',
    ],
    sections: [
      {
        id: 'neighbourhood',
        title: 'North Samui: Bophut and Choeng Mon',
        paragraphs: [
          'Fisherman\'s Village in Bophut is the evening if you want street food and a promenade. Friday walking street is the busy one; other nights are quieter. Choeng Mon is the next bay east, smaller and residential. Chaweng nightlife is a 20 to 30 minute drive and a different noise floor. Nikki Beach is on the south-west Lipa Noi side, a dedicated trip, already named on the island beach-club page.',
          'Boats to Phangan leave from the north-east piers. Do not add a Full Moon unless that is the point of the week. USM can cancel in weather; keep a buffer before a long-haul out of Bangkok.',
        ],
      },
    ],
    portraits: [
      { title: 'Four Seasons Koh Samui', href: '/resort-living/four-seasons-koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Six Senses Samui', href: '/resort-living/six-senses-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Bophut and Lamai nights', href: '/interests/nightlife/samui-bophut-lamai', photo: '/photos/koh-samui.jpg' },
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
    ],
    affiliates: [
      stay('Ritz-Carlton Koh Samui rates', 'Trip.com', 'Live rates for the Bophut plantation bay.', hotelSearchLink('Ritz-Carlton Koh Samui', 'koh-samui'), '/photos/koh-samui.jpg'),
      stay('Chaweng stays', 'If you want the strip', 'Louder, closer to late food, farther from this bay.', stayAreaLink('chaweng'), '/photos/koh-samui.jpg'),
    ],
    faqs: [
      {
        q: 'Is this close enough to walk to Fisherman\'s Village?',
        a: 'Plan a short taxi. The resort is its own bay, not the village high street. Walking the dark road is a poor end to a long dinner.',
      },
    ],
  },
  {
    path: '/interests/nightlife/ari-pradipat',
    title: 'Ari and Pradipat',
    description:
      'Ari is Bangkok\'s low-rise bar village around the BTS. Named sois and addresses. Not Thonglor and not Sukhumvit Soi 11.',
    lede:
      'Ari is known for low-rise bars in a residential grid around BTS Ari. Pradipat is the parallel road. You walk sois. You do not queue on Sukhumvit.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Nightlife', href: '/interests/nightlife' },
      { name: 'Ari and Pradipat', href: '/interests/nightlife/ari-pradipat' },
    ],
    facts: [
      { label: 'Rail', value: 'BTS Ari; use Exit 1 or 3 for the west sois' },
      { label: 'When', value: 'After dinner, from about 18:00' },
      { label: 'Home', value: 'BTS until midnight, then Grab' },
      { label: 'Not this page', value: 'Soi 11, Thonglor, Charoenkrung' },
    ],
    chips: ['BTS Ari', 'Low-rise sois'],
    photo: '/photos/sukhumvit.jpg',
    paragraphs: [
      'Phahonyothin splits the neighbourhood. West of the BTS, Soi Ari 1 to 4 (Ari Samphan) is the walkable bar village: wine rooms, jazz, and beer bars in converted houses. East of the tracks is a thinner, more main-road strip. Pradipat runs parallel toward Saphan Khwai and holds the home-bar holdouts. Stay in Phaya Thai or Ari if this is the night. Do not commute from Sukhumvit Soi 11 just to say you did.',
      'This is not a club district. Last trains are around midnight. After that, Grab. Do not rent a scooter because the sois look quiet.',
    ],
    sections: [
      {
        id: 'rooms',
        title: 'Rooms with a door number',
        paragraphs: [
          'Mikkeller Bar Ari, 68 Ari Samphan 1 Alley: the beer room that put the soi on visitor maps. Go for the list, not for a cocktail theatre.',
          'Tempo Bar Ari, 50/4 Ari 4 Fang Nua Alley, and Long Play Music and Bar, 19/2 Ari 4 Fang Nua Alley, sit on the same small soi. Music is the point. Check the night\'s bill; rooms this size cancel.',
          'O\'glee, 18/1 Soi Ari 1, is the early, casual stop if the group has not agreed on a room. 224 Winesphere, 2/24 Soi Ari (Phahon Yothin 5), is the wine counter for a shorter evening.',
          'On the Pradipat side: Eight Days A Week Homebar, 24 Soi Pradiphat 14, and BRUT, 29 Prachanimit 1 Alley (Pradipat 10 pocket). These are living-room bars. Message ahead on a weekend. They are not walk-in clubs.',
        ],
      },
      {
        id: 'neighbourhood',
        title: 'How the pocket sits',
        paragraphs: [
          'BTS Ari Exit 1 and Exit 3 feed the west sois. Exit numbers get relabelled; follow the signs for Soi Ari / Phaya Thai, then walk. Food here is neighbourhood Thai and cafes, not a Bib crawl. Pair a night with a separate lunch in the Old City. Do not eat three courses of western bistro and call it Bangkok.',
          'Saphan Khwai is one stop north and a different, more local energy. South is Sanam Pao and the Phaya Thai shrine. Stop when the sois repeat. Thonglor is a BTS ride if someone wants a second neighbourhood; that is a new night, not a 01:00 idea.',
        ],
      },
    ],
    portraits: [
      { title: 'Thonglor and Ekkamai', href: '/interests/nightlife/thonglor-ekkamai', photo: '/photos/sukhumvit.jpg' },
      { title: 'Silom and Sathorn', href: '/interests/nightlife/silom-sathorn', photo: '/photos/siam.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/nightlife.jpg' },
      { title: 'Nightlife hub', href: '/interests/nightlife', photo: '/photos/nightlife.jpg' },
    ],
    affiliates: [
      stay('Stay in the city core', 'Trip.com Bangkok', 'Ari is easier if you already sleep north of Siam. Search Bangkok and filter toward Phaya Thai.', stayLink('bangkok'), '/photos/sukhumvit.jpg'),
    ],
    faqs: [
      {
        q: 'Is Ari safer than Soi 11?',
        a: 'It is quieter and more residential. You still Grab home. The risk here is a dead Monday, not a tout strip.',
      },
      {
        q: 'Do you need a booking?',
        a: 'For the tiny home bars, a message helps on Friday. Mikkeller and the beer rooms are walk-in most weeknights. Check on arrival.',
      },
    ],
  },
  {
    path: '/interests/nightlife/silom-sathorn',
    title: 'Silom and Sathorn',
    description:
      'Silom is known for rooftop bars and a basement speakeasy: Sky Bar, Maggie Choo\'s, and Smalls, with addresses. Moon Bar is closed until 2 December 2026.',
    lede:
      'Silom is known for rooftops and one famous basement. Sathorn is the jazz walk. Sala Daeng is the rail. This is not RCA.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Nightlife', href: '/interests/nightlife' },
      { name: 'Silom and Sathorn', href: '/interests/nightlife/silom-sathorn' },
    ],
    facts: [
      { label: 'Sky Bar', value: '64th floor, State Tower, 1055 Silom Rd; walk-in' },
      { label: 'Maggie Choo\'s', value: 'Basement, Novotel Fenix, 320 Silom Rd' },
      { label: 'Smalls', value: '186/3-4 Suan Phlu Soi 1; Wed-Mon 18:00-02:00' },
      { label: 'Moon Bar', value: 'Closed for renovation until 2 December 2026' },
    ],
    chips: ['Silom', 'Sathorn rooftops'],
    photo: '/photos/siam.jpg',
    paragraphs: [
      'Silom is banks by day and a mixed night: rooftop tourists, a basement cabaret, and the Sala Daeng / Patpong edge you can skip. Sathorn is the embassy-and-condo ridge. Dress for the room you booked. Grab between them; the walk is possible and sweaty.',
      'BTS Sala Daeng and Chong Nonsi cover Silom. BTS Surasak and the Saphan Taksin river node sit west. MRT Silom shares Sala Daeng. After midnight, Grab.',
    ],
    sections: [
      {
        id: 'rooms',
        title: 'Rooms with a door number',
        paragraphs: [
          'Sky Bar is the Hangover rooftop. 64th floor, State Tower, 1055 Silom Road, Bang Rak 10500. Lebua says walk-in only. No table booking. Call +66 2 624 9555. Go for sunset if the view is why you came. Dress to the house rule or the lift will turn you away.',
          'Maggie Choo\'s is the Shanghai basement. Novotel Bangkok Fenix Silom, 320 Silom Road, Suriyawong 10500. Sunday to Thursday 19:00 to 02:00. Friday and Saturday 19:00 to 03:00. Jazz, a heavy door, and a weekend line. BTS Chong Nonsi is the station.',
          'Smalls is the Sathorn jazz house. 186/3-4 Suan Phlu Soi 1, Thung Maha Mek 10120. Wednesday to Monday 18:00 to 02:00. Three floors and a roof. This is not Silom Road. Grab from Chong Nonsi.',
          'Moon Bar is the Sathorn skyline room. 61st floor, Banyan Tree Bangkok, 21/100 South Sathon Road. It is closed for renovation until 2 December 2026. Do not plan a trip around it before that date.',
        ],
      },
      {
        id: 'neighbourhood',
        title: 'Silom after the office, Sathorn after dark',
        paragraphs: [
          'Silom is known for rooftops and a tourist market on Patpong. Skip Patpong if you want drinks, not souvenirs on a go-go block. Sathorn is embassies and condos. The two roads sit next to each other. Grab between them.',
          'Pair this night with a Lumpini lunch or an Or Tor Kor morning. Do not add Sukhumvit Soi 11 the same evening.',
        ],
      },
    ],
    portraits: [
      { title: 'Ari and Pradipat', href: '/interests/nightlife/ari-pradipat', photo: '/photos/sukhumvit.jpg' },
      { title: 'Charoenkrung and Soi Nana', href: '/interests/nightlife/charoenkrung-soi-nana', photo: '/photos/riverside.jpg' },
      { title: 'Siam and Silom', href: '/bangkok/siam-silom', photo: '/photos/siam.jpg' },
      { title: 'Nightlife hub', href: '/interests/nightlife', photo: '/photos/nightlife.jpg' },
    ],
    affiliates: [
      stay('Silom stays', 'Trip.com', 'Sleep on the same ridge you will Grab home from.', stayAreaLink('silom'), '/photos/siam.jpg'),
    ],
    faqs: [
      {
        q: 'Do you need a booking for Sky Bar?',
        a: 'Lebua says walk-in only for the bar. Dining next door is a different desk. Go early for sunset or accept a wait.',
      },
      {
        q: 'Is Moon Bar open?',
        a: 'Not until 2 December 2026, according to Banyan Tree. Use Sky Bar or Smalls until then.',
      },
    ],
  },
  {
    path: '/interests/nightlife/phuket-kamala-bangtao',
    title: 'Phuket: Kamala, Bang Tao, and Laguna',
    description:
      'West-coast Phuket beach clubs with addresses: Cafe del Mar in Kamala, Catch and XANA on Bang Tao and Laguna. Daybeds, not Patong Walking Street.',
    lede:
      'This coast is known for day-to-dusk beach clubs on Kamala and Bang Tao. Book a daybed. Sleep in Cherngtalay or Kamala. Patong is a different night.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Nightlife', href: '/interests/nightlife' },
      { name: 'Kamala and Bang Tao', href: '/interests/nightlife/phuket-kamala-bangtao' },
    ],
    facts: [
      { label: 'Catch', value: '202/88 Moo 2, Cherngtalay, Bang Tao; daily into late evening' },
      { label: 'Cafe del Mar', value: '118/19 Moo 3, Kamala, Kathu' },
      { label: 'XANA', value: 'Angsana Laguna, 10 Moo 4 Srisoonthorn' },
      { label: 'Season', value: 'Best November to April; check the sky in the wet months' },
    ],
    chips: ['Kamala', 'Bang Tao', 'Laguna'],
    photo: '/photos/phuket.jpg',
    paragraphs: [
      'Kamala is the village beach with Cafe del Mar. Bang Tao is the long open beach with Catch. Laguna is the hotel complex behind Bang Tao, with XANA at Angsana. They share one west-facing coast and three driveways.',
      'November to April is the settled Andaman window. In the wet months, a prepaid brunch is a gamble. Check on arrival. Book a car home. Do not rent a scooter after the second drink.',
    ],
    sections: [
      {
        id: 'rooms',
        title: 'The clubs',
        paragraphs: [
          'Catch Beach Club is the established Bang Tao daybed. 202/88 Moo 2, Cherngtalay, Thalang 83110. Often late morning to about midnight. +66 65 348 2017. Book shade if you care about a table.',
          'Cafe del Mar Phuket is the Ibiza-brand sunset in Kamala. 118/19 Moo 3, Kamala, Kathu. +66 93 580 4486. Hours move with events. Book if the name is why you came.',
          'XANA is the Laguna pool club. Angsana Laguna Phuket, 10 Moo 4, Srisoonthorn Road, Cherngtalay 83110. +66 76 358 500. Family-readable afternoons, often to about 22:00. Parking and a buggy inside Laguna. Not a 02:00 room.',
          'Pine, at InterContinental Phuket, 333/3 Moo 3, Kamala, is the quieter Kamala backup. Yona now lists Royal Phuket Marina, MC1-5, 63/102, Koh Kaew, on the east side. Confirm that address before you drive west for a boat that has moved.',
        ],
      },
      {
        id: 'neighbourhood',
        title: 'Kamala village, Bang Tao sand',
        paragraphs: [
          'Kamala is a small beach village. The road can flood in heavy rain. Bang Tao is a long beach with Laguna canals behind it. Cherngtalay is the inland name you type into Grab.',
          'Villa resorts on this coast pair well with one club afternoon. Do not glue a club day to Patong Walking Street. Phuket Airport is 30 to 50 minutes away. Leave a buffer before a flight.',
        ],
      },
    ],
    portraits: [
      { title: 'Phuket beach clubs', href: '/interests/nightlife/phuket-beach-clubs', photo: '/photos/phuket.jpg' },
      { title: 'Trisara', href: '/resort-living/trisara-phuket', photo: '/photos/phuket.jpg' },
      { title: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/phuket.jpg' },
      { title: 'Nightlife hub', href: '/interests/nightlife', photo: '/photos/nightlife.jpg' },
    ],
    affiliates: [
      stay('Stay on the same coast', 'Trip.com Phuket', 'Cherngtalay or Kamala, not a midnight transfer from Patong.', stayLink('phuket'), '/photos/phuket.jpg'),
    ],
    faqs: [
      {
        q: 'Catch or Cafe del Mar?',
        a: 'Catch if you want Bang Tao and the established club. Cafe del Mar if you are already in Kamala. They are a drive apart. Do not hop both in one afternoon unless you have a driver.',
      },
      {
        q: 'Do you need a booking?',
        a: 'Yes for weekend daybeds. Weekdays in quiet months you can walk in and still want shade reserved.',
      },
    ],
  },
  {
    path: '/interests/nightlife/samui-bophut-lamai',
    title: 'Koh Samui: Bophut and Lamai',
    description:
      'Samui nights away from Chaweng: Fisherman\'s Village in Bophut, Beach Republic on the Lamai side, and when Nikki Beach is a separate trip.',
    lede:
      'Bophut is known for Fisherman\'s Village, a walkable north-coast promenade. Lamai is a wider, older beach town. Neither is the Chaweng club strip.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Nightlife', href: '/interests/nightlife' },
      { name: 'Bophut and Lamai', href: '/interests/nightlife/samui-bophut-lamai' },
    ],
    facts: [
      { label: 'Bophut', value: 'Fisherman\'s Village; Friday walking street' },
      { label: 'Beach Republic', value: '176/34 Moo 4, Maret; +66 77 458 100' },
      { label: 'Nikki Beach', value: 'Lipa Noi, south-west; see the island beach-club page' },
      { label: 'Home', value: 'Booked car, not a new scooter' },
    ],
    chips: ['Bophut', 'Lamai'],
    photo: '/photos/koh-samui.jpg',
    paragraphs: [
      'Pick one bay for the evening. Bophut is dinner and drinks on a village street. Lamai is a broader beach with Beach Republic in Maret. Chaweng is the loud strip. Nikki Beach is on Lipa Noi, a dedicated crossing, already named on the island beach-club page.',
      'January to September is the easier Gulf sea. Book a car on the ring road. Sleep near the village you will walk.',
    ],
    sections: [
      {
        id: 'rooms',
        title: 'The village and the club',
        paragraphs: [
          'Fisherman\'s Village is Bophut\'s beach road. Low-rise bars, Coco Tam\'s on the sand, and a Friday walking street. Other nights are dinner and one drink, not a club crawl. The village is the point.',
          'Beach Republic is the Lamai-side daybed club. 176/34 Moo 4, Tambon Maret, Koh Samui 84310. +66 77 458 100. Pool, sand, and a sunset that can run late. Book a table on weekends.',
          'Nikki Beach sits on Lipa Noi, south-west Samui. It is not a hop from Bophut. Use the island beach-club page if that brand is the night.',
        ],
      },
      {
        id: 'neighbourhood',
        title: 'North coast versus south-east',
        paragraphs: [
          'Bophut to Lamai is 25 to 40 minutes around the hills. Do one pocket a night. The airport sits between Choeng Mon and Bophut. Chaweng fills the gap with the easiest late food and the most noise.',
          'Boats to Phangan leave from the north-east. A Full Moon is a different trip. Keep a buffer before a Samui flight. Island weather cancels small aircraft first.',
        ],
      },
    ],
    portraits: [
      { title: 'Samui beach clubs', href: '/interests/nightlife/koh-samui-beach-clubs', photo: '/photos/koh-samui.jpg' },
      { title: 'Ritz-Carlton Koh Samui', href: '/resort-living/ritz-carlton-koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Six Senses Samui', href: '/resort-living/six-senses-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Nightlife hub', href: '/interests/nightlife', photo: '/photos/nightlife.jpg' },
    ],
    affiliates: [
      stay('Stay on the same coast', 'Trip.com Samui', 'Bophut if the village is the night. Chaweng only if you want the strip.', stayLink('koh-samui'), '/photos/koh-samui.jpg'),
      stay('Chaweng stays', 'The loud bay', 'Use this when late food matters more than a quiet promenade.', stayAreaLink('chaweng'), '/photos/koh-samui.jpg'),
    ],
    faqs: [
      {
        q: 'Bophut or Lamai for a first stay?',
        a: 'Bophut if you want a walkable village and north-coast hotels. Lamai if you want a broader beach and a slightly older town. Chaweng if you want clubs. Do not pick all three.',
      },
      {
        q: 'Do you need a booking?',
        a: 'For Beach Republic and Nikki Beach, yes on weekends. For Fisherman\'s Village bars, walk in early on weeknights.',
      },
    ],
  },
];
