import { generatedFlightLink } from './partners';

export type SisterCard = {
  kicker: string;
  title: string;
  href: string;
  summary: string;
  cta: string;
};

export type SisterFlightCta = {
  href: string;
  route: string;
  fromCode: string;
  toCode: string;
  duration: string;
};

function flightCta(
  href: string,
  route: string,
  fromCode: string,
  toCode: string,
  duration: string,
): SisterFlightCta {
  return { href, route, fromCode, toCode, duration };
}

export type SisterSection = {
  heading: string;
  lead: string;
  sisterUrl: string;
  cards: SisterCard[];
  flights?: SisterFlightCta[];
};

const VN = 'https://vietnam-travelguide.com';
const TRIP_BASE = 'Allianceid=11105102&SID=334225872&trip_sub2=th';

export function crossBorderFlightUrl(
  fromSlug: string,
  toSlug: string,
  fromCode: string,
  toCode: string,
  sub1: string,
): string {
  const generated = generatedFlightLink(fromCode, toCode);
  if (generated) return generated;
  return `https://www.trip.com/flights/${fromSlug}-to-${toSlug}/tickets-${fromCode}-${toCode}?${TRIP_BASE}&trip_sub1=${encodeURIComponent(sub1)}`;
}

export const SISTER_CROSS_BORDER_ROUTES = [
  {
    kicker: '1h 35m nonstop · BKK / DMK to SGN',
    title: 'Bangkok to Ho Chi Minh City & Phu Quoc',
    summary:
      'Pair 4 days in Bangkok with District 1 rooftop bars, Thao Dien dining, and a short hop to Phu Quoc Island on the same Gulf of Thailand weather window.',
    links: [
      { label: 'Ho Chi Minh City guide', href: `${VN}/ho-chi-minh-city` },
      { label: 'Phu Quoc Island guide', href: `${VN}/phu-quoc` },
    ],
    flight: flightCta(
      crossBorderFlightUrl('bangkok', 'ho-chi-minh-city', 'bkk', 'sgn', 'CrossBorder_BKK_SGN'),
      'Bangkok to Ho Chi Minh City',
      'BKK',
      'SGN',
      '1h 35m nonstop',
    ),
  },
  {
    kicker: '1h 50m nonstop · BKK / DMK to HAN',
    title: 'Bangkok to Hanoi, Ha Long Bay & Ninh Binh',
    summary:
      'Combine Bangkok or Phuket with 36 streets in Hanoi Old Quarter, an overnight limestone-karst cruise on Ha Long Bay, and rowboat caves in Ninh Binh.',
    links: [
      { label: 'Hanoi Old Quarter guide', href: `${VN}/hanoi` },
      { label: 'Ha Long Bay guide', href: `${VN}/ha-long` },
      { label: 'Ninh Binh guide', href: `${VN}/ninh-binh` },
    ],
    flight: flightCta(
      crossBorderFlightUrl('bangkok', 'hanoi', 'bkk', 'han', 'CrossBorder_BKK_HAN'),
      'Bangkok to Hanoi',
      'BKK',
      'HAN',
      '1h 50m nonstop',
    ),
  },
  {
    kicker: '1h 40m nonstop · BKK / DMK to DAD',
    title: 'Bangkok to Da Nang, Hoi An & Hue',
    summary:
      'Fly nonstop from Bangkok to Central Vietnam for My Khe Beach resorts in Da Nang, lantern-lit tailor lanes in Hoi An Ancient Town, and the imperial citadel in Hue.',
    links: [
      { label: 'Da Nang beach guide', href: `${VN}/da-nang` },
      { label: 'Hoi An Ancient Town', href: `${VN}/hoi-an` },
      { label: 'Hue imperial guide', href: `${VN}/hue` },
    ],
    flight: flightCta(
      crossBorderFlightUrl('bangkok', 'da-nang', 'bkk', 'dad', 'CrossBorder_BKK_DAD'),
      'Bangkok to Da Nang',
      'BKK',
      'DAD',
      '1h 40m nonstop',
    ),
  },
  {
    kicker: 'Northern & Heritage Loop · CNX to HAN / DAD',
    title: 'Chiang Mai to Hanoi, Sapa & Hoi An',
    summary:
      'Link Lanna temples and mountain coffee in Chiang Mai with Northern Vietnam rice terraces in Sapa and the UNESCO merchant houses of Hoi An.',
    links: [
      { label: 'Hoi An Ancient Town', href: `${VN}/hoi-an` },
      { label: 'Sapa highlands guide', href: `${VN}/sapa` },
      { label: 'Hanoi guide', href: `${VN}/hanoi` },
    ],
    flight: flightCta(
      crossBorderFlightUrl('chiang-mai', 'hanoi', 'cnx', 'han', 'CrossBorder_CNX_HAN'),
      'Chiang Mai to Hanoi',
      'CNX',
      'HAN',
      'Direct or one-stop',
    ),
  },
];

export function sisterHeaderUrlForPath(path: string): string {
  const clean = path.replace(/\/$/, '') || '/';
  const sec = sisterSectionForPath(clean);
  if (sec) return sec.sisterUrl;
  if (clean === '/destinations' || clean.startsWith('/destinations/')) return `${VN}/destinations`;
  if (clean === '/itineraries' || clean.startsWith('/itineraries/')) return `${VN}/itineraries`;
  if (clean === '/get-there' || clean.startsWith('/get-there/')) return `${VN}/get-there`;
  if (clean === '/attractions' || clean.startsWith('/attractions/')) return `${VN}/destinations`;
  return `${VN}/`;
}

export function sisterSectionForPath(path: string): SisterSection | null {
  const clean = path.replace(/\/$/, '') || '/';

  // 1. Bangkok & districts
  if (clean === '/bangkok' || clean.startsWith('/bangkok/')) {
    return {
      heading: 'Compare Across Southeast Asia: Bangkok vs. Vietnam',
      lead: 'Planning a two-country Southeast Asia route? Compare Bangkok with Vietnam’s two flagship capitals, both under two hours nonstop from Suvarnabhumi (BKK) or Don Mueang (DMK).',
      sisterUrl: `${VN}/ho-chi-minh-city`,
      cards: [
        {
          kicker: 'Vietnam Southern Metropolis · 1h 35m flight',
          title: 'Ho Chi Minh City (Saigon)',
          href: `${VN}/ho-chi-minh-city`,
          summary:
            'Matches Bangkok’s rooftop cocktail energy, late-night street dining, and French-Indochinese boulevard cafés across District 1 and Thao Dien.',
          cta: 'Explore Ho Chi Minh City on Vietnam Guide',
        },
        {
          kicker: 'Vietnam Northern Capital · 1h 50m flight',
          title: 'Hanoi & the Old Quarter',
          href: `${VN}/hanoi`,
          summary:
            'Pairs well with Rattanakosin and Talat Noi: lakeside pagodas, sidewalk bia hoi corners, egg coffee shophouses, and easy hops to Ha Long Bay.',
          cta: 'Explore Hanoi on Vietnam Guide',
        },
        {
          kicker: 'Vietnam Coastal City · 1h 40m flight',
          title: 'Da Nang & Hoi An',
          href: `${VN}/da-nang`,
          summary:
            'Skip a domestic connection and fly straight from Bangkok to My Khe Beach and lantern-lit Hoi An Ancient Town.',
          cta: 'Explore Da Nang on Vietnam Guide',
        },
      ],
      flights: [
        flightCta(
          crossBorderFlightUrl('bangkok', 'ho-chi-minh-city', 'bkk', 'sgn', 'Sister_BKK_SGN'),
          'Bangkok to Ho Chi Minh City',
          'BKK',
          'SGN',
          '1h 35m nonstop',
        ),
        flightCta(
          crossBorderFlightUrl('bangkok', 'hanoi', 'bkk', 'han', 'Sister_BKK_HAN'),
          'Bangkok to Hanoi',
          'BKK',
          'HAN',
          '1h 50m nonstop',
        ),
      ],
    };
  }

  // 2. Northern Highlands: Chiang Mai, Chiang Rai, Pai
  if (
    clean === '/chiang-mai' ||
    clean.startsWith('/chiang-mai/') ||
    clean === '/chiang-rai' ||
    clean === '/pai' ||
    clean === '/destinations/northern-thailand'
  ) {
    return {
      heading: 'Compare Across Southeast Asia: Northern Thailand vs. Vietnam',
      lead: 'If you love Chiang Mai’s walled Old City, mountain valleys, and artisan markets, compare Vietnam’s northern highlands and heritage towns.',
      sisterUrl: `${VN}/hanoi`,
      cards: [
        {
          kicker: 'Northern Cultural Capital',
          title: 'Hanoi',
          href: `${VN}/hanoi`,
          summary:
            'Vietnam’s northern hub for centuries-old guild streets, temple courtyards, and specialty robusta coffee culture.',
          cta: 'Read the Hanoi guide',
        },
        {
          kicker: 'UNESCO Lantern Town',
          title: 'Hoi An Ancient Town',
          href: `${VN}/hoi-an`,
          summary:
            'Shares Chiang Mai’s walkable historic core, custom tailors, cooking schools, and relaxed bicycle-friendly pace.',
          cta: 'Read the Hoi An guide',
        },
        {
          kicker: 'Highland Terraces & Trekking',
          title: 'Sapa & the Northern Mountains',
          href: `${VN}/sapa`,
          summary:
            'Vietnam’s answer to Pai and Mae Hong Son: dramatic terraced valleys, cool mountain mist, and hill-tribe ridge trails.',
          cta: 'Read the Sapa guide',
        },
      ],
      flights: [
        flightCta(
          crossBorderFlightUrl('chiang-mai', 'hanoi', 'cnx', 'han', 'Sister_CNX_HAN'),
          'Chiang Mai to Hanoi',
          'CNX',
          'HAN',
          'Direct or one-stop',
        ),
      ],
    };
  }

  // 3. Andaman & Gulf Islands: Phuket, Koh Samui, Krabi, Koh Kood, Koh Phangan, Koh Tao, Koh Lanta, Khao Lak, Koh Lipe, Koh Chang
  if (
    clean === '/phuket' ||
    clean.startsWith('/phuket/') ||
    clean === '/koh-samui' ||
    clean.startsWith('/koh-samui/') ||
    clean === '/krabi' ||
    clean === '/koh-kood' ||
    clean === '/koh-chang' ||
    clean === '/koh-chang-and-koh-kood' ||
    clean === '/koh-phangan' ||
    clean === '/koh-tao' ||
    clean === '/koh-lanta' ||
    clean === '/koh-lipe' ||
    clean === '/khao-lak' ||
    clean.startsWith('/khao-lak/')
  ) {
    return {
      heading: 'Compare Across Southeast Asia: Thailand Islands vs. Vietnam Coast',
      lead: 'Weighing a Thai island week against Vietnam’s coast, or combining both? Compare water clarity, dry-season months, and five-star beachfront value.',
      sisterUrl: `${VN}/phu-quoc`,
      cards: [
        {
          kicker: 'Gulf of Thailand Sister Island',
          title: 'Phu Quoc Island',
          href: `${VN}/phu-quoc`,
          summary:
            'Shares the exact November to April calm-water window as Phuket and Koh Kood, with sunset beach clubs and luxury pool villas.',
          cta: 'Explore Phu Quoc on Vietnam Guide',
        },
        {
          kicker: 'Central Coast Beach & Heritage',
          title: 'Da Nang & My Khe Beach',
          href: `${VN}/da-nang`,
          summary:
            'Best February to August (matching Koh Samui): broad sandy beaches, Son Tra Peninsula resorts, and 35 minutes to Hoi An.',
          cta: 'Explore Da Nang on Vietnam Guide',
        },
        {
          kicker: 'Remote Archipelago & Diving',
          title: 'Con Dao & Nha Trang Bays',
          href: `${VN}/con-dao`,
          summary:
            'For Koh Tao and Koh Lanta fans seeking protected coral reefs, quiet coves, and hideaway luxury at Six Senses Con Dao.',
          cta: 'Explore Con Dao on Vietnam Guide',
        },
      ],
      flights: [
        flightCta(
          crossBorderFlightUrl('bangkok', 'da-nang', 'bkk', 'dad', 'Sister_Islands_DAD'),
          'Bangkok to Da Nang',
          'BKK',
          'DAD',
          '1h 40m nonstop',
        ),
      ],
    };
  }

  // 4. Heritage Ruins & River History: Ayutthaya, Sukhothai, Kanchanaburi
  if (
    clean === '/ayutthaya' ||
    clean === '/sukhothai' ||
    clean === '/kanchanaburi' ||
    clean.startsWith('/kanchanaburi/')
  ) {
    return {
      heading: 'Compare Across Southeast Asia: Royal Capitals & Heritage',
      lead: 'If temple ruins, royal citadels, and river history anchor your itinerary, compare Vietnam’s UNESCO imperial and merchant capitals.',
      sisterUrl: `${VN}/hue`,
      cards: [
        {
          kicker: 'Imperial Citadel & Royal Tombs',
          title: 'Hue',
          href: `${VN}/hue`,
          summary:
            'Vietnam’s former Nguyen Dynasty capital along the Perfume River, filled with walled palaces, garden tombs, and royal court cuisine.',
          cta: 'Explore Hue on Vietnam Guide',
        },
        {
          kicker: 'Historic River Port & Champa Ruins',
          title: 'Hoi An & My Son Sanctuary',
          href: `${VN}/hoi-an`,
          summary:
            'Pair preserved 17th-century merchant shophouses on the Thu Bon River with the forested brick temple towers of My Son.',
          cta: 'Explore Hoi An on Vietnam Guide',
        },
      ],
    };
  }

  // 5. Karst Bays & National Parks: Khao Sok, Koh Phi Phi, Khao Yai
  if (clean === '/khao-sok' || clean === '/koh-phi-phi' || clean === '/khao-yai') {
    return {
      heading: 'Compare Across Southeast Asia: Limestone Karsts & Nature',
      lead: 'Love Khao Sok’s flooded limestone towers and Phi Phi’s sheer cliffs? Vietnam’s northern karst landscapes are their geological twin.',
      sisterUrl: `${VN}/ha-long`,
      cards: [
        {
          kicker: 'UNESCO Marine Karst Bay',
          title: 'Ha Long Bay & Lan Ha Bay',
          href: `${VN}/ha-long`,
          summary:
            'Overnight wooden junk and boutique steel-ship cruises winding past nearly 2,000 emerald-water limestone islands.',
          cta: 'Explore Ha Long Bay on Vietnam Guide',
        },
        {
          kicker: 'Inland Karst Rivers & Caves',
          title: 'Ninh Binh (Trang An & Tam Coc)',
          href: `${VN}/ninh-binh`,
          summary:
            'Often called Ha Long Bay on land: sampan rowboats gliding through flooded cave tunnels beneath vertical karst peaks.',
          cta: 'Explore Ninh Binh on Vietnam Guide',
        },
      ],
    };
  }

  // 6. Easy Weekend Coast: Pattaya, Hua Hin, Central & East
  if (
    clean === '/pattaya' ||
    clean === '/hua-hin' ||
    clean === '/destinations/central-and-east'
  ) {
    return {
      heading: 'Compare Across Southeast Asia: Easy Coastal Escapes',
      lead: 'Looking for a high-energy beach city or a quick coastal drive from the capital? Compare Vietnam’s southern and south-central resort towns.',
      sisterUrl: `${VN}/nha-trang`,
      cards: [
        {
          kicker: 'Bayfront High-Rise Beach City',
          title: 'Nha Trang',
          href: `${VN}/nha-trang`,
          summary:
            'Vietnam’s closest match to Pattaya: a sweeping crescent bay, island-hopping speedboats, seafood promenades, and Cam Ranh resorts.',
          cta: 'Explore Nha Trang on Vietnam Guide',
        },
        {
          kicker: 'Saigon Weekend Coast',
          title: 'Vung Tau & Mui Ne',
          href: `${VN}/mui-ne`,
          summary:
            'Like Hua Hin from Bangkok, Mui Ne and Vung Tau deliver breezy beachfront resorts, kitesurfing dunes, and fresh harbour seafood.',
          cta: 'Explore Mui Ne on Vietnam Guide',
        },
      ],
    };
  }

  // 7. Nightlife Hub & Subpages
  if (clean === '/interests/nightlife' || clean.startsWith('/interests/nightlife/')) {
    return {
      heading: 'Compare Across Southeast Asia: Thailand vs. Vietnam Nightlife',
      lead: 'Continuing your trip to Vietnam? Compare Bangkok’s sky bars and Phuket’s beach clubs with Saigon’s District 1 rooftops and Hanoi’s craft beer lanes.',
      sisterUrl: `${VN}/interests/nightlife`,
      cards: [
        {
          kicker: 'Vietnam Nightlife Hub',
          title: 'Vietnam Nightlife Guide',
          href: `${VN}/interests/nightlife`,
          summary:
            'From Ho Chi Minh City rooftop lounges and hidden speakeasies to Ta Hien beer corner in Hanoi and beach bars in Da Nang.',
          cta: 'Read Vietnam Nightlife Guide',
        },
        {
          kicker: 'Rooftops & Cocktail Bars',
          title: 'Ho Chi Minh City After Dark',
          href: `${VN}/ho-chi-minh-city`,
          summary:
            'District 1 and Thao Dien rival Thonglor and Charoenkrung for Asia’s 50 Best cocktail bars, vinyl lounges, and late dining.',
          cta: 'Explore Saigon on Vietnam Guide',
        },
        {
          kicker: 'Bia Hoi & Old Quarter Lanes',
          title: 'Hanoi Nightlife & Street Corners',
          href: `${VN}/hanoi`,
          summary:
            'Low-stool draft beer corners, live jazz clubs near the Opera House, and late-night pho stalls around Hoan Kiem Lake.',
          cta: 'Explore Hanoi on Vietnam Guide',
        },
      ],
    };
  }

  // 8. Resort Living Hub & Subpages
  if (clean === '/interests/resort-living' || clean.startsWith('/resort-living/')) {
    return {
      heading: 'Compare Across Southeast Asia: Luxury Resort Living in Vietnam',
      lead: 'Benchmarking Amanpuri, Four Seasons Koh Samui, or Capella Bangkok against Vietnam’s flagship five-star resorts? Compare private-bay villas across the region.',
      sisterUrl: `${VN}/interests/resort-living`,
      cards: [
        {
          kicker: 'Vietnam Flagship Resorts',
          title: 'Vietnam Luxury Resort Living Hub',
          href: `${VN}/interests/resort-living`,
          summary:
            'Curated breakdown of Vietnam’s top pool-villa resorts across Amanoi, Six Senses Ninh Van Bay, InterContinental Danang, and Regent Phu Quoc.',
          cta: 'Explore Vietnam Resort Living',
        },
        {
          kicker: 'Private Peninsula Villas',
          title: 'Nha Trang & Da Nang Luxury Stays',
          href: `${VN}/resort-living/nha-trang`,
          summary:
            'Dramatic granite-boulder bays at Ninh Van Bay and monkey-inhabited rainforest coves on Da Nang’s Son Tra Peninsula.',
          cta: 'Compare Nha Trang luxury resorts',
        },
        {
          kicker: 'Island Hideaways',
          title: 'Phu Quoc & Con Dao Flagship Resorts',
          href: `${VN}/resort-living/phu-quoc`,
          summary:
            'All-pool-villa beachfront compounds on Phu Quoc and eco-luxury conservation retreats in the Con Dao archipelago.',
          cta: 'Compare Phu Quoc luxury resorts',
        },
      ],
    };
  }

  // 9. Thai Food Hub & Subpages
  if (clean === '/thai-food' || clean.startsWith('/thai-food/')) {
    return {
      heading: 'Compare Across Southeast Asia: Thai Food vs. Vietnamese Food',
      lead: 'Eating your way across Southeast Asia? Pair Thailand’s wok-fired street stalls and regional curries with Vietnam’s herb-bright broths, banh mi, and specialty coffee.',
      sisterUrl: `${VN}/food`,
      cards: [
        {
          kicker: 'Sister Culinary Guide',
          title: 'Vietnamese Food Guide & Dish Directory',
          href: `${VN}/food`,
          summary:
            'Regional dish breakdowns, street-stall addresses, and ordering rules for pho, bun cha, banh mi, cao lau, and egg coffee.',
          cta: 'Explore Vietnamese Food Guide',
        },
        {
          kicker: 'Northern Broths & Coffee',
          title: 'Hanoi Street Food Guide',
          href: `${VN}/food/hanoi`,
          summary:
            'Charcoal-grilled bun cha, beef pho at dawn, crispy crab spring rolls, and Old Quarter café culture.',
          cta: 'Read Hanoi Food Guide',
        },
        {
          kicker: 'Southern Markets & Seafood',
          title: 'Ho Chi Minh City & Da Nang Food Guides',
          href: `${VN}/food/ho-chi-minh-city`,
          summary:
            'Late-night shellfish alleys, broken rice plates (com tam), crispy banh xeo crepes, and Central Vietnamese noodle bowls.',
          cta: 'Read Saigon Food Guide',
        },
      ],
    };
  }

  // 10. Beaches & Diving Interests
  if (
    clean === '/interests/beaches-and-island-hopping' ||
    clean === '/interests/diving-and-snorkeling'
  ) {
    return {
      heading: 'Compare Across Southeast Asia: Vietnam Beaches & Islands',
      lead: 'Matching monsoon seasons across the Gulf and South China Sea? Compare Vietnam’s best beach and island-hopping bases.',
      sisterUrl: `${VN}/interests/beaches`,
      cards: [
        {
          kicker: 'Mainland & Bay Beaches',
          title: 'Vietnam Beaches Guide',
          href: `${VN}/interests/beaches`,
          summary:
            'When to pick Da Nang, An Bang (Hoi An), Nha Trang, Quy Nhon, or Mui Ne by month and swell.',
          cta: 'Explore Vietnam Beaches',
        },
        {
          kicker: 'Offshore Archipelagos',
          title: 'Vietnam Islands Guide',
          href: `${VN}/interests/islands`,
          summary:
            'Compare Phu Quoc, Con Dao, Cat Ba, and Cham Islands for reef visibility, ferries, and dry-season months.',
          cta: 'Explore Vietnam Islands',
        },
      ],
    };
  }

  // 11. Temples & History
  if (clean === '/interests/temples-and-history') {
    return {
      heading: 'Compare Across Southeast Asia: Vietnam Pagodas & Old Towns',
      lead: 'Contrast Thailand’s Theravada golden chedis with Vietnam’s Mahayana pagodas, imperial citadels, and merchant port towns.',
      sisterUrl: `${VN}/interests/pagodas`,
      cards: [
        {
          kicker: 'Sacred Architecture',
          title: 'Vietnam Pagodas & Temples',
          href: `${VN}/interests/pagodas`,
          summary:
            'From Hanoi’s One Pillar Pagoda and Perfume Pagoda to Hue’s Thien Mu Pagoda and Da Nang’s Linh Ung cliff sanctuary.',
          cta: 'Explore Vietnam Pagodas',
        },
        {
          kicker: 'Living Heritage Streets',
          title: 'Vietnam Historic Old Towns',
          href: `${VN}/interests/old-towns`,
          summary:
            'Walk Hoi An Ancient Town, Hanoi’s 36 guild streets, and Hue’s walled Imperial City.',
          cta: 'Explore Vietnam Old Towns',
        },
      ],
    };
  }

  // 12. Family Travel
  if (clean === '/interests/family-travel-with-kids') {
    return {
      heading: 'Compare Across Southeast Asia: Vietnam with Kids',
      lead: 'Planning a family school-holiday route across Thailand and Vietnam? See how Vietnam compares for stroller access, calm beaches, and family resorts.',
      sisterUrl: `${VN}/interests/family`,
      cards: [
        {
          kicker: 'Family Planning Guide',
          title: 'Vietnam Family Travel with Kids',
          href: `${VN}/interests/family`,
          summary:
            'Best family bases in Da Nang, Hoi An, Phu Quoc, and Hanoi, plus sleeper-train tips and kid-friendly boat trips.',
          cta: 'Read Vietnam Family Guide',
        },
        {
          kicker: 'Beachfront Villas',
          title: 'Da Nang & Phu Quoc Family Resorts',
          href: `${VN}/resort-living/da-nang`,
          summary:
            'Flat sandy beaches, kids clubs, and two-bedroom pool villas under two hours by air from Bangkok.',
          cta: 'Compare Da Nang family resorts',
        },
      ],
    };
  }

  // 13. Markets & Shopping
  if (clean === '/interests/markets-and-shopping') {
    return {
      heading: 'Compare Across Southeast Asia: Vietnam Markets & Tailors',
      lead: 'Love Chatuchak, Sampeng Lane, and Chiang Mai’s Sunday Walking Street? Compare Vietnam’s night markets, silk villages, and custom tailors.',
      sisterUrl: `${VN}/interests/markets`,
      cards: [
        {
          kicker: 'Bazaars & Night Markets',
          title: 'Vietnam Markets & Shopping Guide',
          href: `${VN}/interests/markets`,
          summary:
            'Ben Thanh Market in Saigon, Dong Xuan Market in Hanoi, Hoi An cloth tailors, and highland ethnic markets.',
          cta: 'Explore Vietnam Markets',
        },
        {
          kicker: 'Custom Tailoring Capital',
          title: 'Hoi An Ancient Town',
          href: `${VN}/hoi-an`,
          summary:
            '24-hour custom linen suits, leather goods, and lantern workshops along the Thu Bon River.',
          cta: 'Explore Hoi An on Vietnam Guide',
        },
      ],
    };
  }

  // 14. Interests Hub & other interest pages
  if (clean === '/interests' || clean.startsWith('/interests/')) {
    return {
      heading: 'Compare Across Southeast Asia: Explore Vietnam by Interest',
      lead: 'Building a multi-country Southeast Asia itinerary? Browse our sister publication Vietnam Guide by travel style.',
      sisterUrl: `${VN}/interests`,
      cards: [
        {
          kicker: 'All Travel Styles',
          title: 'Vietnam Interests Hub',
          href: `${VN}/interests`,
          summary:
            'Compare Vietnam beaches, islands, caves, mountain passes, pagodas, and coffee culture side by side.',
          cta: 'Browse Vietnam Interests',
        },
        {
          kicker: 'Five-Star Stays',
          title: 'Vietnam Luxury Resort Living',
          href: `${VN}/interests/resort-living`,
          summary:
            'Private-bay pool villas and heritage hotels across Phu Quoc, Nha Trang, Da Nang, and Con Dao.',
          cta: 'Browse Vietnam Resorts',
        },
        {
          kicker: 'After Dark',
          title: 'Vietnam Nightlife & Rooftops',
          href: `${VN}/interests/nightlife`,
          summary:
            'Saigon sky bars, Hanoi bia hoi corners, and coastal beach clubs.',
          cta: 'Browse Vietnam Nightlife',
        },
      ],
    };
  }

  return null;
}

// Placement rule for the Bangkok to Da Nang flight CTA: only the Bangkok hub,
// the getting-there pages, and itineraries that combine Thailand and Vietnam.
const TH_VN_ITINERARY = /^\/itineraries\/[^/]*(vietnam|hanoi|ho-chi-minh|da-nang|hoi-an|saigon)/;
export function allowsBkkDadFlight(path: string): boolean {
  const clean = path.replace(/\/$/, '') || '/';
  if (clean === '/bangkok') return true;
  if (clean === '/get-there' || clean.startsWith('/get-there/')) return true;
  return TH_VN_ITINERARY.test(clean);
}

// Thailand domestic flight cards. Only Trip.com Partner tool links already in partners.ts are used;
// a route without a generated link is skipped, never hand-built.
const DOMESTIC: Record<string, { route: string; duration: string }> = {
  'BKK-CNX': { route: 'Bangkok to Chiang Mai', duration: 'About 1h 15m nonstop' },
  'BKK-HKT': { route: 'Bangkok to Phuket', duration: 'About 1h 25m nonstop' },
  'BKK-USM': { route: 'Bangkok to Koh Samui', duration: 'About 1h 5m nonstop' },
  'BKK-KBV': { route: 'Bangkok to Krabi', duration: 'About 1h 20m nonstop' },
  'BKK-CEI': { route: 'Bangkok to Chiang Rai', duration: 'About 1h 20m nonstop' },
  'BKK-URT': { route: 'Bangkok to Surat Thani', duration: 'About 1h 10m nonstop' },
  'CNX-HKT': { route: 'Chiang Mai to Phuket', duration: 'About 2h nonstop' },
  'HKT-USM': { route: 'Phuket to Koh Samui', duration: 'About 1h nonstop' },
};

function domesticCta(key: string): SisterFlightCta | null {
  const [from, to] = key.split('-');
  const href = generatedFlightLink(from, to);
  const meta = DOMESTIC[key];
  return href && meta ? flightCta(href, meta.route, from, to, meta.duration) : null;
}

function domesticKeysForPath(clean: string): string[] {
  const has = (re: RegExp) => re.test(clean);
  if (has(/^\/get-there\/bangkok-to-chiang-mai/)) return ['BKK-CNX', 'CNX-HKT'];
  if (has(/^\/get-there\/bangkok-to-chiang-rai/)) return ['BKK-CEI', 'BKK-CNX'];
  if (has(/^\/get-there\/bangkok-to-phuket/)) return ['BKK-HKT', 'HKT-USM'];
  if (has(/^\/get-there\/bangkok-to-krabi/)) return ['BKK-KBV', 'BKK-HKT'];
  if (has(/^\/get-there\/bangkok-to-(koh-samui|samui|koh-phangan|koh-tao|surat-thani)/)) return ['BKK-USM', 'BKK-URT'];
  if (has(/^\/(chiang-mai|pai)(\/|$)|^\/destinations\/northern-thailand/)) return ['BKK-CNX', 'CNX-HKT'];
  if (has(/^\/chiang-rai(\/|$)/)) return ['BKK-CEI', 'BKK-CNX'];
  if (has(/^\/(phuket|khao-lak)(\/|$)/)) return ['BKK-HKT', 'HKT-USM'];
  if (has(/^\/(krabi|koh-lanta|koh-lipe)(\/|$)/)) return ['BKK-KBV', 'BKK-HKT'];
  if (has(/^\/(koh-samui|koh-phangan|koh-tao)(\/|$)/)) return ['BKK-USM', 'BKK-URT'];
  if (has(/^\/itineraries\/.*(gulf|samui|phangan|tao)/)) return ['BKK-USM', 'BKK-URT'];
  if (has(/^\/itineraries\/.*(phuket|krabi|phi-phi|andaman)/)) return ['BKK-HKT', 'BKK-KBV'];
  if (has(/^\/itineraries\/.*(chiang|north)/)) return ['BKK-CNX', 'BKK-CEI'];
  return ['BKK-CNX', 'BKK-HKT', 'BKK-USM'];
}

/** Thai domestic flight cards for a Thailand page, from generated links only. */
export function thaiDomesticFlightsForPath(path: string): SisterFlightCta[] {
  const clean = path.replace(/\/$/, '') || '/';
  return domesticKeysForPath(clean).map(domesticCta).filter((f): f is SisterFlightCta => f !== null);
}

/** Vietnam flight cards only where the page is about a Thailand and Vietnam trip. */
export function allowsVietnamFlights(path: string): boolean {
  const clean = path.replace(/\/$/, '') || '/';
  return clean === '/' || TH_VN_ITINERARY.test(clean);
}
