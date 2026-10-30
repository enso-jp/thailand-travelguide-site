import { generatedKlookLink, generatedStayLink } from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, city: string, photo: string): Affiliate[] {
  const href = generatedStayLink(city);
  return href ? [{ title, kicker, body, href, cta: 'Search stays', photo, partner: 'stay' }] : [];
}

function klook(title: string, kicker: string, body: string, query: string, photo: string): Affiliate[] {
  const href = generatedKlookLink(query);
  return href ? [{ title, kicker, body, href, cta: 'See tickets', photo, partner: 'klook' }] : [];
}

export const wave27Pages: Page[] = [
  {
    path: '/khao-lak/khao-lak-vs-phuket',
    title: 'Khao Lak vs Phuket: Same Sea, Lower Rates',
    description:
      'Khao Lak vs Phuket in 2026: same Andaman water, quieter sand, and beachfront rooms from about 2,100 THB against 6,100 THB in Patong and Karon.',
    lede:
      'Khao Lak wins on space and price. Phuket wins on nightlife, food choice, and short transfers. Pick by how you want the evenings to go.',
    schema: 'Article',
    crumbs: [
      { name: 'Khao Lak', href: '/khao-lak' },
      { name: 'Khao Lak vs Phuket', href: '/khao-lak/khao-lak-vs-phuket' },
    ],
    facts: [
      { label: 'Verdict', value: 'Khao Lak for quiet beach days; Phuket for nightlife' },
      { label: 'Khao Lak room', value: 'Beachfront 4-star from about 2,100 THB a night' },
      { label: 'Phuket room', value: 'Patong or Karon resort from about 6,100 THB a night' },
      { label: 'Transfer', value: 'HKT to Khao Lak 70 to 90 minutes by car' },
    ],
    chips: ['Andaman', 'Beaches', 'Hotel prices'],
    photo: '/photos/khao-lak-andaman.jpg',
    paragraphs: [
      'Both coasts face the same Andaman Sea and share one airport, HKT. Khao Lak is 70 to 90 minutes north by car. Phuket beaches are 20 to 60 minutes from the gate.',
    ],
    sections: [
      {
        id: 'verdict',
        title: 'The one-line verdict',
        lead: true,
        bullets: [
          '**Khao Lak:** long, quiet sand and lower resort rates. Best for couples, families, and Similan divers.',
          '**Phuket:** more beaches, bars, and restaurants within a short ride. Best for a first trip or a group that wants nights out.',
        ],
      },
      {
        id: 'compare',
        title: 'Side by side',
        table: {
          headers: ['', 'Khao Lak', 'Phuket'],
          rows: [
            ['Beaches', 'Nang Thong, Bang Niang, Khuk Khak, Pakarang in one long strip', 'Patong, Karon, Kata, Kamala, Nai Harn in separate bays'],
            ['Crowds', 'Low-rise resorts, few day-trip boats on the sand', 'Patong is the busiest beach in the Andaman'],
            ['Beachfront 4-star', 'About 2,100 to 2,300 THB (Palm Galleria, Bangsak Village)', 'About 6,100 to 6,600 THB (Holiday Inn Patong, Mandarava Karon)'],
            ['Nightlife', 'Bar strip in Bang Niang, done by midnight', 'Bangla Road and beach clubs until late'],
            ['Islands', 'Similan boats from Thap Lamu, 15 Oct to 15 May', 'Phi Phi ferries from Rassada, 600 to 650 THB'],
          ],
        },
      },
      {
        id: 'prices',
        title: 'What the rooms cost',
        bullets: [
          '**Same night, two coasts:** KAYAK rates for 31 October to 1 November 2026 show Palm Galleria Khao Lak at $61 and Bangsak Village at $67. Holiday Inn Resort Phuket in Patong shows $181 and Mandarava Karon $195.',
          '**In baht:** at 33.75 THB to the dollar (Bank of Thailand, 29 October 2026), that is about 2,060 to 2,260 THB in Khao Lak against 6,110 to 6,580 THB in Phuket.',
          '**Peak months:** both coasts climb hard from December to February. Book Khao Lak early for Similan season.',
          '**Luxury tier:** the gap narrows. JW Marriott rooms sit in a similar bracket on both coasts.',
        ],
      },
      {
        id: 'pick',
        title: 'Who should pick which',
        bullets: [
          '**Pick Khao Lak** if you want a sunbed without a crowd and a 07:00 Similan boat.',
          '**Pick Phuket** if you want Old Town food, Bangla Road, and a 30-minute airport run.',
          '**Split it** on a week: four nights Khao Lak, then two in Phuket before the flight.',
        ],
      },
    ],
    portraits: [
      { title: 'Khao Lak guide', href: '/khao-lak', photo: '/photos/khao-lak-resort.jpg' },
      { title: 'Bang Niang', href: '/khao-lak/bang-niang', photo: '/photos/bang-niang.jpg' },
      { title: 'Phuket guide', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Kata and Karon', href: '/phuket', photo: '/photos/kata-and-karon.jpg' },
    ],
    affiliates: [
      ...stay('Khao Lak stays', 'Bang Niang or Nang Thong', 'Beachfront rooms in Khao Lak. Compare against Phuket for your dates.', 'khao-lak', '/photos/bang-niang-estuary.jpg'),
      ...stay('Phuket stays', 'Karon or Kata', 'Pick a bay first. Patong is loud after dark.', 'phuket', '/photos/patong-night.jpg'),
      ...klook('Similan day trip', 'Tours', 'Speedboats from Thap Lamu, open 15 October to 15 May.', 'Similan Islands day trip', '/photos/similan-boat.jpg'),
    ],
    faqs: [
      {
        q: 'Is Khao Lak really cheaper than Phuket?',
        a: 'At the mid-range, yes. The same Saturday night in October 2026 priced beachfront 4-star rooms at about a third of Patong and Karon resort rates.',
      },
      {
        q: 'Is the sea the same?',
        a: 'Yes. Both face the Andaman. Both get rough from May to October, when red flags go up.',
      },
    ],
  },
  {
    path: '/koh-lipe/koh-lipe-vs-koh-phi-phi',
    title: 'Koh Lipe vs Koh Phi Phi: Quiet Sand or Big Views',
    description:
      'Koh Lipe vs Koh Phi Phi in 2026: park fees of 200 THB against 400 THB, boats from 600 THB, and which island still feels quiet.',
    lede:
      'Koh Lipe is the quieter, walkable island. Phi Phi has the bigger cliffs and Maya Bay, and the day-trip crowds that come with them.',
    schema: 'Article',
    crumbs: [
      { name: 'Koh Lipe', href: '/koh-lipe' },
      { name: 'Koh Lipe vs Koh Phi Phi', href: '/koh-lipe/koh-lipe-vs-koh-phi-phi' },
    ],
    facts: [
      { label: 'Verdict', value: 'Lipe for calm beach days; Phi Phi for views and nightlife' },
      { label: 'Park fee', value: 'Lipe 200 THB; Phi Phi 400 THB plus 20 THB pier fee' },
      { label: 'Boat in', value: 'Pak Bara to Lipe 600 to 700 THB; Phuket to Phi Phi 600 to 650 THB' },
      { label: 'Season', value: 'Both best November to April' },
    ],
    chips: ['Andaman', 'Islands', 'Park fees'],
    photo: '/photos/koh-lipe.jpg',
    paragraphs: [
      'Both sit in Andaman marine parks. Lipe is a far-south sandbar near Langkawi. Phi Phi is one to two hours from Phuket and Krabi, which is why it fills by 10:00.',
    ],
    sections: [
      {
        id: 'verdict',
        title: 'The one-line verdict',
        lead: true,
        bullets: [
          '**Koh Lipe:** calm water, a walking-only island, and evenings without day boats. Worth the longer trip.',
          '**Koh Phi Phi:** the cliffs, Maya Bay, and a party strip on Tonsai. Easy to reach, hard to find quiet.',
        ],
      },
      {
        id: 'compare',
        title: 'Side by side',
        table: {
          headers: ['', 'Koh Lipe', 'Koh Phi Phi'],
          rows: [
            ['Getting there', 'Pak Bara speedboat, about 1.5 hours, 600 to 700 THB', 'Rassada ferry, about 2 hours, 600 to 650 THB'],
            ['Landing', 'Floating pontoon, longtail about 50 THB', 'Tonsai Pier, 20 THB island fee'],
            ['Park fee', '200 THB, valid five days', '400 THB for park sites like Maya Bay'],
            ['Crowds', 'No day-tour fleets from Phuket', 'Speedboat tours from Phuket and Krabi daily'],
            ['Beaches', 'Sunrise, Pattaya, Sunset, all on foot', 'Loh Dalum, Long Beach, Maya Bay by boat'],
            ['Nightlife', 'Walking Street bars, low-key', 'Tonsai beach bars and fire shows'],
          ],
        },
      },
      {
        id: 'costs',
        title: 'What it costs in 2026',
        bullets: [
          '**Lipe park fee:** 200 THB for foreign adults, paid on arrival and valid five days.',
          '**Phi Phi park fee:** 400 THB for foreign adults, plus 20 THB at Tonsai Pier.',
          '**Island to island:** the direct Lipe to Phi Phi speedboat runs about 4 hours for 1,600 to 2,500 THB, in high season only.',
          '**Maya Bay:** no swimming, and it closes every year from 1 August to 30 September.',
        ],
      },
      {
        id: 'pick',
        title: 'Who should pick which',
        bullets: [
          '**Pick Lipe** if you want to snorkel off the beach and walk to dinner.',
          '**Pick Phi Phi** if you have two nights, want the viewpoint, and like a late bar.',
          '**Do both** from November to April on the direct boat, Phi Phi first.',
        ],
      },
    ],
    portraits: [
      { title: 'Koh Lipe guide', href: '/koh-lipe', photo: '/photos/longtail-andaman.jpg' },
      { title: 'Koh Phi Phi guide', href: '/koh-phi-phi', photo: '/photos/phi-phi.jpg' },
      { title: 'Phuket to Phi Phi', href: '/get-there/phuket-to-krabi-phi-phi', photo: '/photos/tonsai.jpg' },
    ],
    affiliates: [
      ...stay('Koh Lipe stays', 'Sunrise or Sunset Beach', 'Sunrise for swimming, Sunset for quiet. Book early for December.', 'koh-lipe', '/photos/phi-phi-viewpoint.jpg'),
      ...klook('Phi Phi and Maya Bay', 'Tours', 'Go early. Confirm whether the 400 THB park fee is included.', 'Phi Phi Maya Bay island hopping', '/photos/maya-bay.jpg'),
    ],
    faqs: [
      {
        q: 'Is Koh Lipe harder to reach than Phi Phi?',
        a: 'Yes. Fly to Hat Yai or Trang, then van and boat via Pak Bara. Phi Phi is a two-hour ferry from Phuket.',
      },
      {
        q: 'Which island is cheaper to visit?',
        a: 'Boats cost about the same. Lipe has the lower park fee, 200 THB against 400 THB.',
      },
    ],
  },
  {
    path: '/thai-food/bangkok-beyond-pad-thai',
    title: 'Beyond Pad Thai: What to Order in Bangkok',
    description:
      'What to order in Bangkok beyond pad Thai: boat noodles at 15 to 20 THB a bowl, Go-Ang chicken rice at 65 THB, guay jub, hoi tod, and khao kha moo.',
    lede:
      'Bangkok is known for noodle and rice plates that beat pad Thai for less. It fits first-trip eaters who want eight orders, with 2026 prices and where to eat them.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Bangkok', href: '/thai-food/bangkok' },
      { name: 'Beyond pad Thai', href: '/thai-food/bangkok-beyond-pad-thai' },
    ],
    facts: [
      { label: 'Verdict', value: 'Order boat noodles, chicken rice, or guay jub first' },
      { label: 'Pad Thai', value: 'Thip Samai 169 THB for the egg-wrapped plate' },
      { label: 'Boat noodles', value: '15 to 20 THB a small bowl at Victory Monument' },
      { label: 'Chicken rice', value: 'Go-Ang Pratunam 65 THB a plate' },
    ],
    chips: ['Street food', 'Noodles', 'Prices'],
    photo: '/photos/dish-boat-noodle.jpg',
    paragraphs: [
      'Most visitors order pad Thai at every stop. Locals order it rarely. The plates below are what Bangkok actually eats at lunch and late at night.',
    ],
    sections: [
      {
        id: 'verdict',
        title: 'The one-line verdict',
        lead: true,
        bullets: [
          '**Skip the hotel pad Thai.** Order boat noodles at lunch and guay jub in Yaowarat at night.',
        ],
      },
      {
        id: 'order',
        title: 'Eight plates to order instead',
        bullets: [
          '**[Boat noodles](/thai-food/bangkok--guay-tiew-reua):** dark, spiced broth in small bowls, 15 to 20 THB each at Victory Monument. Stack five.',
          '**[Khao man gai](/thai-food/bangkok--khao-man-gai):** poached chicken rice, 65 THB at Go-Ang Pratunam.',
          '**[Guay jub](/thai-food/bangkok--guay-jub):** peppery rolled noodles with crispy pork, 60 to 100 THB at Nai Ek.',
          '**[Hoi tod](/thai-food/bangkok--hoi-tod):** crisp oyster omelette, 80 to 150 THB at Nai Mong.',
          '**[Khao kha moo](/thai-food/bangkok--khao-kha-moo):** stewed pork leg on rice, 50 to 70 THB at lunch shophouses.',
          '**[Jok](/thai-food/bangkok--jok):** charcoal rice porridge, 45 to 80 THB at Jok Prince.',
          '**[Pad kra pao](/thai-food/bangkok--pad-kra-pao):** holy-basil stir-fry with a fried egg, 60 to 90 THB.',
          '**[Tom yum goong](/thai-food/bangkok--tom-yum-goong):** hot-and-sour prawn soup, 180 to 320 THB sit-down.',
        ],
      },
      {
        id: 'padthai',
        title: 'If you still want pad Thai',
        bullets: [
          '**Thip Samai:** the egg-wrapped river prawn plate is 169 THB and the Siam Royal is 249 THB.',
          '**Lunch woks:** a plain plate is often 60 to 90 THB. Ask for less sweet.',
        ],
      },
    ],
    portraits: [
      { title: 'Bangkok food guide', href: '/thai-food/bangkok', photo: '/photos/thai-food-bangkok-street.jpg' },
      { title: 'Yaowarat food walk', href: '/thai-food/yaowarat-chinatown-food-walk', photo: '/photos/yaowarat.jpg' },
      { title: 'Thai food hub', href: '/thai-food', photo: '/photos/thai-food.jpg' },
    ],
    affiliates: [
      ...stay('Bangkok stays', 'Near the MRT', 'Sleep near an MRT stop so Yaowarat and Victory Monument are one ride.', 'bangkok', '/photos/chinatown-day.jpg'),
    ],
    faqs: [
      {
        q: 'Is pad Thai a tourist dish?',
        a: 'Not exactly. It is a real Bangkok plate, but locals eat it far less often than noodles, rice plates, and curries.',
      },
      {
        q: 'How much is a street meal in Bangkok in 2026?',
        a: 'Most plates on this page cost 45 to 100 THB. Tom yum goong at a sit-down room is the pricier exception.',
      },
    ],
  },
];
