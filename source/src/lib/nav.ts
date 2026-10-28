export type NavCard = { href: string; name: string; photo: string };
export type NavCol = { title: string; href: string; links: { href: string; name: string }[] };
export type NavSlot = {
  label: string;
  href: string;
  see: string;
  cards: NavCard[];
  cols: NavCol[];
  colsClass?: string;
};

export const NAV_SLOTS: NavSlot[] = [
  {
    label: 'Destinations',
    href: '/destinations',
    see: 'See all destinations',
    cards: [
      { href: '/bangkok', name: 'Bangkok', photo: '/photos/bangkok.jpg' },
      { href: '/chiang-mai', name: 'Chiang Mai', photo: '/photos/chiang-mai.jpg' },
      { href: '/phuket', name: 'Phuket', photo: '/photos/phuket.jpg' },
    ],
    colsClass: 'nav-cols-6',
    cols: [
      {
        title: 'Bangkok & Central',
        href: '/destinations/central-and-east',
        links: [
          { href: '/bangkok', name: 'Bangkok' },
          { href: '/ayutthaya', name: 'Ayutthaya' },
          { href: '/kanchanaburi', name: 'Kanchanaburi' },
          { href: '/hua-hin', name: 'Hua Hin' },
        ],
      },
      {
        title: 'North',
        href: '/destinations/northern-thailand',
        links: [
          { href: '/chiang-mai', name: 'Chiang Mai' },
          { href: '/chiang-rai', name: 'Chiang Rai' },
          { href: '/pai', name: 'Pai' },
          { href: '/sukhothai', name: 'Sukhothai' },
        ],
      },
      {
        title: 'Andaman',
        href: '/phuket',
        links: [
          { href: '/phuket', name: 'Phuket' },
          { href: '/krabi', name: 'Krabi' },
          { href: '/koh-phi-phi', name: 'Koh Phi Phi' },
          { href: '/koh-lanta', name: 'Koh Lanta' },
          { href: '/khao-lak', name: 'Khao Lak' },
          { href: '/khao-sok', name: 'Khao Sok' },
        ],
      },
      {
        title: 'Gulf',
        href: '/koh-samui',
        links: [
          { href: '/koh-samui', name: 'Koh Samui' },
          { href: '/koh-phangan', name: 'Koh Phangan' },
          { href: '/koh-tao', name: 'Koh Tao' },
        ],
      },
      {
        title: 'East & Isan',
        href: '/destinations/central-and-east',
        links: [
          { href: '/pattaya', name: 'Pattaya' },
          { href: '/koh-chang', name: 'Koh Chang' },
          { href: '/koh-kood', name: 'Koh Kood' },
          { href: '/khao-yai', name: 'Khao Yai' },
        ],
      },
    ],
  },
  {
    label: 'Interests',
    href: '/interests',
    see: 'See all interests',
    cards: [
      { href: '/thai-food', name: 'Food and drink', photo: '/photos/thai-food.jpg' },
      { href: '/interests/beaches-and-island-hopping', name: 'Beaches', photo: '/photos/phuket.jpg' },
      { href: '/interests/temples-and-history', name: 'Temples', photo: '/photos/grand-palace.jpg' },
    ],
    cols: [
      {
        title: 'Food and the street',
        href: '/thai-food',
        links: [
          { href: '/thai-food', name: 'Thai food' },
          { href: '/interests/markets-and-shopping', name: 'Markets' },
          { href: '/interests/nightlife', name: 'Nightlife' },
        ],
      },
      {
        title: 'Coast and islands',
        href: '/interests/beaches-and-island-hopping',
        links: [
          { href: '/interests/beaches-and-island-hopping', name: 'Beaches' },
          { href: '/interests/diving-and-snorkeling', name: 'Diving' },
          { href: '/interests/resort-living', name: 'Resort living' },
        ],
      },
      {
        title: 'Towns and temples',
        href: '/interests/temples-and-history',
        links: [
          { href: '/interests/temples-and-history', name: 'Temples' },
          { href: '/interests/muay-thai-and-fitness-camps', name: 'Muay Thai' },
        ],
      },
      {
        title: 'Land and nature',
        href: '/interests/diving-and-snorkeling',
        links: [
          { href: '/khao-sok', name: 'Khao Sok' },
          { href: '/khao-yai', name: 'Khao Yai' },
          { href: '/interests/thai-massage-and-spas', name: 'Massage' },
        ],
      },
      {
        title: 'Who you travel with',
        href: '/interests',
        links: [
          { href: '/interests/family-travel-with-kids', name: 'Family' },
          { href: '/interests/honeymoon-and-couples', name: 'Honeymoon' },
          { href: '/interests/solo-and-first-time-travel', name: 'Solo' },
        ],
      },
    ],
  },
  {
    label: 'Itineraries',
    href: '/itineraries',
    see: 'See all itineraries',
    cards: [
      { href: '/itineraries/first-week-7-days', name: 'First week', photo: '/photos/sukhumvit.jpg' },
      { href: '/itineraries/best-14-days', name: 'Best 14 days', photo: '/photos/chiang-mai.jpg' },
      { href: '/itineraries/2-weeks-andaman-island-hopping', name: 'Andaman hop', photo: '/photos/phi-phi.jpg' },
    ],
    colsClass: 'nav-cols-4',
    cols: [
      {
        title: 'Nationwide',
        href: '/itineraries',
        links: [
          { href: '/itineraries/first-week-7-days', name: '7 days' },
          { href: '/itineraries/10-days-classic-thailand', name: 'Classic 10 days' },
          { href: '/itineraries/best-14-days', name: 'Best 14 days' },
          { href: '/itineraries/3-weeks-grand-thailand', name: '3 weeks' },
        ],
      },
      {
        title: 'Regional',
        href: '/itineraries',
        links: [
          { href: '/itineraries/7-days-northern-thailand-loop', name: 'Northern loop' },
          { href: '/itineraries/2-weeks-andaman-island-hopping', name: 'Andaman 2 weeks' },
          { href: '/itineraries/10-days-gulf-islands-samui-phangan-tao', name: 'Gulf islands' },
        ],
      },
      {
        title: 'Short trips',
        href: '/itineraries/3-days-bangkok-stopover',
        links: [
          { href: '/itineraries/3-days-bangkok-stopover', name: '3 days Bangkok' },
          { href: '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi', name: 'Ayutthaya and Kwai' },
          { href: '/itineraries/5-days-chiang-mai-and-chiang-rai', name: 'Chiang Mai and Rai' },
        ],
      },
      {
        title: 'Who with',
        href: '/itineraries/2-weeks-thailand-with-kids',
        links: [
          { href: '/itineraries/2-weeks-thailand-with-kids', name: 'With kids' },
          { href: '/itineraries/2-weeks-thailand-honeymoon', name: 'Honeymoon' },
        ],
      },
    ],
  },
  {
    label: 'Plan a trip',
    href: '/plan',
    see: 'See all guides',
    cards: [
      { href: '/plan/grab-and-bts', name: 'Grab and BTS', photo: '/photos/bts.jpg' },
      { href: '/get-there', name: 'Routes between places', photo: '/photos/get-there.jpg' },
      { href: '/plan/when-to-go', name: 'Before you go', photo: '/photos/plan.jpg' },
    ],
    cols: [
      {
        title: 'Before you go',
        href: '/plan/when-to-go',
        links: [
          { href: '/plan/when-to-go', name: 'When to go' },
          { href: '/plan/visas-and-tdac', name: 'Visas and TDAC' },
          { href: '/plan/monsoon-and-burn-season', name: 'Monsoon and haze' },
        ],
      },
      {
        title: 'Money and phones',
        href: '/plan/money-atms-and-promptpay',
        links: [
          { href: '/plan/money-atms-and-promptpay', name: 'Money and ATMs' },
          { href: '/plan/esim-and-sim-cards', name: 'eSIM and SIMs' },
        ],
      },
      {
        title: 'Getting around',
        href: '/plan/grab-and-bts',
        links: [
          { href: '/plan/grab-and-bts', name: 'Grab and BTS' },
          { href: '/plan/trains-and-ferries', name: 'Trains and ferries' },
          { href: '/plan/domestic-flights-and-baggage', name: 'Domestic flights' },
          { href: '/plan/scooters-and-road-rules', name: 'Scooters' },
        ],
      },
      {
        title: 'Calendar',
        href: '/plan/songkran-and-public-holidays',
        links: [
          { href: '/plan/songkran-and-public-holidays', name: 'Songkran and holidays' },
          { href: '/interests/festivals-songkran-and-loy-krathong', name: 'Festivals' },
        ],
      },
      {
        title: 'City hops',
        href: '/get-there',
        links: [
          { href: '/get-there/bangkok-to-chiang-mai', name: 'Bangkok to Chiang Mai' },
          { href: '/get-there/bangkok-to-phuket', name: 'Bangkok to Phuket' },
          { href: '/get-there/bangkok-to-koh-samui', name: 'Bangkok to Samui' },
        ],
      },
    ],
  },
];

export const NAV_LINKS = [
  { href: '/thai-food', label: 'Food' },
  { href: '/attractions', label: 'Attractions' },
];

export const INTEREST_GROUPS = [
  {
    title: 'Food and the street',
    items: [
      { href: '/thai-food', label: 'Thai food', photo: '/photos/thai-food.jpg' },
      { href: '/interests/markets-and-shopping', label: 'Markets', photo: '/photos/chatuchak.jpg' },
      { href: '/thai-food/night-markets', label: 'Night markets', photo: '/photos/thai-food-night-markets.jpg' },
      { href: '/interests/nightlife', label: 'Nightlife', photo: '/photos/nightlife.jpg' },
    ],
  },
  {
    title: 'Islands and beaches',
    items: [
      { href: '/interests/beaches-and-island-hopping', label: 'Beaches and islands', photo: '/photos/phuket.jpg' },
      { href: '/interests/diving-and-snorkeling', label: 'Diving', photo: '/photos/koh-tao.jpg' },
      { href: '/koh-samui', label: 'Gulf islands', photo: '/photos/koh-samui.jpg' },
      { href: '/krabi', label: 'Andaman coast', photo: '/photos/krabi.jpg' },
    ],
  },
  {
    title: 'Temples and heritage',
    items: [
      { href: '/interests/temples-and-history', label: 'Temples and history', photo: '/photos/grand-palace.jpg' },
      { href: '/ayutthaya', label: 'Ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { href: '/sukhothai', label: 'Sukhothai', photo: '/photos/sukhothai.jpg' },
      { href: '/interests/festivals-songkran-and-loy-krathong', label: 'Festivals', photo: '/photos/chiang-mai.jpg' },
    ],
  },
  {
    title: 'Nightlife and beach clubs',
    items: [
      { href: '/interests/nightlife', label: 'Nightlife hub', photo: '/photos/silom-night.jpg' },
      { href: '/interests/nightlife/phuket-beach-clubs', label: 'Phuket beach clubs', photo: '/photos/patong-night.jpg' },
      { href: '/interests/nightlife/koh-samui-beach-clubs', label: 'Samui beach clubs', photo: '/photos/chaweng-night.jpg' },
      { href: '/interests/muay-thai-and-fitness-camps', label: 'Muay Thai', photo: '/photos/lumphini.jpg' },
    ],
  },
  {
    title: 'Resort living and wellness',
    items: [
      { href: '/interests/resort-living', label: 'Resort living', photo: '/photos/resort.jpg' },
      { href: '/interests/thai-massage-and-spas', label: 'Massage and spas', photo: '/photos/wat-pho.jpg' },
      { href: '/interests/honeymoon-and-couples', label: 'Honeymoon', photo: '/photos/resort-rayavadee.jpg' },
      { href: '/interests/family-travel-with-kids', label: 'Family travel', photo: '/photos/kata-and-karon.jpg' },
    ],
  },
  {
    title: 'Jungle, diving, and national parks',
    items: [
      { href: '/khao-sok', label: 'Khao Sok', photo: '/photos/khao-sok.jpg' },
      { href: '/khao-yai', label: 'Khao Yai', photo: '/photos/khao-yai.jpg' },
      { href: '/interests/diving-and-snorkeling', label: 'Similan and Tao', photo: '/photos/khao-lak.jpg' },
      { href: '/interests/solo-and-first-time-travel', label: 'Solo and first-time', photo: '/photos/bts.jpg' },
    ],
  },
];
