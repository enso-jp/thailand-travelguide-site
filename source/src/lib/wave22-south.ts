import {
  stayLink,
  stayAreaLink,
  hotelSearchLink,
  transferLink,
  klookTours,
  klookTickets,
  klookIslandHopping,
  klookRailFerry,
} from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'Search stays', photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'See tickets', photo, partner: 'klook' };
}

export const WAVE22_SOUTH_TITLE_CORE: Record<string, string> = {
  "/phuket/where-to-stay": "Where to Stay in Phuket: West Coast Beaches 2026",
  "/phuket/getting-around": "Phuket Getting Around: Smart Bus, Cars, Boats",
  "/phuket/best-time-to-visit": "Best Time to Visit Phuket: Nov-Apr Andaman Sea",
  "/phuket/day-trips": "Phuket Day Trips: Phi Phi, Phang Nga, Old Town",
  "/phuket/top-attractions": "Phuket Top Attractions: Big Buddha, Boats 2026",
  "/phuket/patong": "Patong, Phuket: Bangla Strip and Who Sleeps Here",
  "/phuket/old-town": "Phuket Old Town: Sino-Portuguese Streets Guide",
  "/phuket/bang-tao-and-laguna": "Bang Tao and Laguna, Phuket: Beach, Golf Stays",
  "/phuket/nightlife-districts": "Phuket Nightlife Districts: Patong to Bang Tao",
  "/phuket/nai-yang-and-mai-khao": "Nai Yang and Mai Khao: Airport Beaches, Phuket",
  "/phuket/phi-phi-and-phang-nga-boats": "Phi Phi and Phang Nga Boats from Phuket Piers",
  "/krabi/ao-nang": "Ao Nang, Krabi: Mainland Beach Base and Longtails",
  "/krabi/railay": "Railay, Krabi: Cliff Pocket, Longtails, Phra Nang",
  "/krabi/where-to-stay": "Where to Stay in Krabi: Ao Nang vs Railay 2026",
  "/krabi/getting-around": "Krabi Getting Around: KBV Cars and Railay Boats",
  "/krabi/best-time-to-visit": "Best Time to Visit Krabi: Nov-Apr Andaman Sea",
  "/krabi/day-trips": "Krabi Day Trips: Phi Phi, Hong, Tiger Cave 2026",
  "/krabi/top-attractions": "Krabi Top Attractions: Railay, Caves, 1,237 Steps",
  "/krabi/tubkaek": "Tubkaek, Krabi: Quiet West Coast Beyond Ao Nang",
  "/koh-lanta/where-to-stay": "Where to Stay on Koh Lanta: Klong Dao to South",
  "/koh-lanta/beaches": "Koh Lanta Beaches: West Coast from Saladan South",
  "/koh-lanta/best-time-to-visit": "Best Time to Visit Koh Lanta: Nov-Apr Andaman",
  "/koh-phi-phi/where-to-stay": "Where to Stay on Phi Phi: Tonsai vs Long Beach",
  "/koh-phi-phi/maya-bay": "Maya Bay, Phi Phi: 400 THB Park, No Swim Rule",
  "/koh-phi-phi/getting-around": "Phi Phi Getting Around: Longtails, Walks, Boats",
};

export const wave22SouthPages: Page[] = [
  {
    path: "/phuket/where-to-stay",
    title: "Where to stay in Phuket",
    description: "Phuket stays split by west-coast beach: Kata or Kamala for first nights, Bang Tao for space, Patong only if Bangla is the night plan.",
    lede: "Phuket has no single downtown, so you pick a beach, not a town. First-timers do best in Kata or Karon for walkable sand and food, Kamala or Surin for quieter bays, or Bang Tao for long beaches and big resorts. Keep Patong for a night out.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Phuket", href: "/phuket" },
      { name: "Where to stay", href: "/phuket/where-to-stay" },
    ],
    facts: [
      { label: "Default", value: "Kata, Kamala, or Bang Tao" },
      { label: "Airport", value: "HKT, then 45 to 90 minutes west" },
      { label: "Smart Bus", value: "100 THB from HKT Exit 3" },
      { label: "Kata car", value: "Limousine board about 1,000 THB" },
    ],
    chips: [
      "West coast first",
      "Name the beach",
      "Patong last",
    ],
    photo: "/photos/phuket.jpg",
    geo: { lat: 7.88, lon: 98.392, containedIn: "Phuket" },
    paragraphs: [
      "- **Kata and Karon:** walkable first-timer pair with easy swimming and plenty of places to eat.\n- **Kamala and Surin:** quieter bays between Patong and Bang Tao.\n- **Bang Tao and Laguna:** long sand, big resorts and golf.\n- **Rawai and Nai Harn:** far south, best for calm swims.\n- **Patong:** Bangla Road nightlife, better for one night than a whole stay.",
      "HKT to the west coast takes 45 to 90 minutes. The Smart Bus costs 100 THB, and a limousine to Kata is about 1,000 THB at the airport desk. Book two nights first, then move beaches once you know what you like.",
    ],
    sections: [
      {
        id: "areas",
        title: "Which beach fits which trip",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["Kata and Karon","First swim and village dinner","Smart Bus 90 to 110 minutes"],
            ["Kamala and Surin","Quieter west, family swim","About 45 to 60 minutes on the bus"],
            ["Bang Tao and Laguna","Space, golf, longer sand","North-west of Surin"],
            ["Nai Yang and Mai Khao","Airport-close, quieter nights","Sirinat park edge"],
            ["Patong","Bangla and late rooms","Do not use as a four-night default"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Kata and Karon", href: "/phuket/kata-and-karon", photo: "/photos/kata-and-karon.jpg" },
      { title: "Kamala and Surin", href: "/phuket/kamala-and-surin", photo: "/photos/kamala-and-surin.jpg" },
      { title: "Patong", href: "/phuket/patong", photo: "/photos/patong-night.jpg" },
      { title: "Getting around", href: "/phuket/getting-around", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Kata hotels", "First-timer swim", "Search Kata if you want dinner on the same road as the sand.", stayAreaLink('kata'), "/photos/kata-and-karon.jpg"),
    stay("Kamala hotels", "Quieter west", "Use this search if Patong is a night out, not the base.", stayAreaLink('kamala'), "/photos/kamala-and-surin.jpg"),
    ],
    faqs: [
      { q: "Kata or Patong for two nights?", a: "Kata if you want a swim and a village walk. Patong if Bangla is the trip. Do not split one night each." },
      { q: "Is Old Town a good first hotel?", a: "No. Old Town is a morning of streets and Hokkien lunch. Sleep on the west coast and drive in." },
    ],
  },
  {
    path: "/phuket/getting-around",
    title: "Getting around Phuket",
    description: "Phuket has no urban rail. Use the 100 THB Smart Bus, a priced Grab, or a hotel car. West-coast rides from HKT take 45 to 90 minutes.",
    lede: "Phuket is known for cars and one airport bus rather than a Skytrain, and the Smart Bus is 100 THB from HKT Exit 3. A west-coast hop from the airport still takes 45 to 90 minutes in traffic.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Phuket", href: "/phuket" },
      { name: "Getting around", href: "/phuket/getting-around" },
    ],
    facts: [
      { label: "Smart Bus", value: "100 THB from HKT Exit 3" },
      { label: "West coast", value: "45 to 90 minutes by car" },
      { label: "Kata limo", value: "About 1,000 THB on the board" },
      { label: "Boats", value: "Rassada mornings; cancel May to October" },
    ],
    chips: [
      "Smart Bus 100 THB",
      "Grab or car",
      "Rassada boats",
    ],
    photo: "/photos/kata-and-karon.jpg",
    geo: { lat: 7.88, lon: 98.392, containedIn: "Phuket" },
    paragraphs: [
      "There is no useful rail; the Phuket Smart Bus from HKT Domestic Exit 3 is 100 THB along the west coast. A private car is faster with bags: 45 to 90 minutes depending on the beach; the airport limousine board listed about 1,000 THB to Kata in 2026. Grab and Bolt show a price before you sit.",
      "Island boats leave Rassada in the morning, and see [Phi Phi and Phang Nga boats](/phuket/phi-phi-and-phang-nga-boats). Do not rent a scooter on the Patong hill if you do not already ride, and pair this page with [where to stay](/phuket/where-to-stay) and [Bangkok to Phuket](/get-there/bangkok-to-phuket).",
    ],
    sections: [
      {
        id: "modes",
        title: "Which hop for which day",
        bullets: [
          "**Smart Bus:** One bag, daylight, named west-coast stops.",
          "**Hotel car or Grab:** Night arrivals, Kata Noi hills, families.",
          "**Songthaew:** Beach-to-beach by day. Agree the fare first.",
          "**Rassada boat:** Morning only. May to October cancels first.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/phuket/where-to-stay", photo: "/photos/phuket.jpg" },
      { title: "Boat days", href: "/phuket/phi-phi-and-phang-nga-boats", photo: "/photos/longtail-andaman.jpg" },
      { title: "HKT flight", href: "/get-there/bangkok-to-phuket", photo: "/photos/ferry-gulf.jpg" },
      { title: "Patong", href: "/phuket/patong", photo: "/photos/patong-night.jpg" },
    ],
    affiliates: [
    stay("West-coast hotels", "Name the beach", "Sleep where the Smart Bus or the car already stops.", stayLink('phuket'), "/photos/kamala-and-surin.jpg"),
    {
      title: "HKT airport cars",
      kicker: "Transfers",
      body: "Use a priced car if you land after the last useful bus.",
      href: transferLink('HKT'),
      cta: 'Book transfer',
      photo: "/photos/ferry-gulf.jpg",
      partner: 'transfer',
    },
    ],
    faqs: [
      { q: "Smart Bus or a car after a night flight?", a: "Book a Trip.com car. The bus is 100 THB and fine in daylight with one bag. It is a poor 01:00 plan." },
      { q: "Can you boat to Phi Phi the afternoon you land HKT?", a: "No. Sleep the west coast. Take a morning boat from Rassada the next day." },
    ],
  },
  {
    path: "/phuket/best-time-to-visit",
    title: "Best time to visit Phuket",
    description: "Phuket's useful sea is November to April. May to October is cheaper, choppier, and the month boats cancel. The Smart Bus is still 100 THB.",
    lede: "Phuket is known for an Andaman dry window from November to April, when boats and west-coast swims are reliable. May to October can still be cheap, but Phi Phi desks cancel often and refunds get messy.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Phuket", href: "/phuket" },
      { name: "Best time to visit", href: "/phuket/best-time-to-visit" },
    ],
    facts: [
      { label: "Dry sea", value: "November to April" },
      { label: "Wet", value: "May to October; boats cancel" },
      { label: "Smart Bus", value: "100 THB in any month" },
      { label: "Gulf flip", value: "Samui January to September" },
    ],
    chips: [
      "Nov to Apr",
      "Boat cancels May-Oct",
      "Andaman window",
    ],
    photo: "/photos/kamala-and-surin.jpg",
    geo: { lat: 7.88, lon: 98.392, containedIn: "Phuket" },
    paragraphs: [
      "The Andaman calendar is the rule, and November to April is why most first trips land HKT. May to October is green-season rates, west-coast chop, and cancelled [Phi Phi boats](/phuket/phi-phi-and-phang-nga-boats), and the Smart Bus is still 100 THB. A west-coast car is still 45 to 90 minutes.",
      "Do not combine a Phuket rain week with an island day you cannot move. If your dates are July, open [when to go](/plan/when-to-go) and look at the Gulf. Pair this page with [monsoon notes](/plan/monsoon-and-burn-season).",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Feb:** Dry, booked, cooler nights. Lock the west-coast room early.",
          "**Mar to Apr:** Still swimmable. Hotter. Songkran week is water, not temples.",
          "**May to Oct:** Rooms drop. Boats cancel. Surf can close Kata for toddlers.",
        ],
      },
    ],
    portraits: [
      { title: "When to go", href: "/plan/when-to-go", photo: "/photos/phuket.jpg" },
      { title: "Where to stay", href: "/phuket/where-to-stay", photo: "/photos/kata-and-karon.jpg" },
      { title: "Boat days", href: "/phuket/phi-phi-and-phang-nga-boats", photo: "/photos/longtail-andaman.jpg" },
      { title: "Day trips", href: "/phuket/day-trips", photo: "/photos/phi-phi.jpg" },
    ],
    affiliates: [
    stay("Phuket in the dry months", "Nov to Apr", "Lock two west-coast nights before the boat search.", stayLink('phuket'), "/photos/resort-avista-hideaway-phuket.jpg"),
    klook("Island boats in season", "Tours", "Morning only. Read the cancel line for May to October.", klookIslandHopping('Phuket'), "/photos/longtail-andaman.jpg"),
    ],
    faqs: [
      { q: "Is August a bad Phuket month?", a: "It is a bad boat month. Rooms still work. Do not treat a Maya Bay day as guaranteed." },
      { q: "Can you visit in November?", a: "Yes. It is the start of the useful sea. Book the west-coast hotel before you book the boat." },
    ],
  },
  {
    path: "/phuket/day-trips",
    title: "Phuket day trips",
    description: "Day trips from Phuket: Phi Phi or Phang Nga in the morning, Old Town for a street lunch, or Big Buddha if you already have a hired car.",
    lede: "Phuket day trips are known for one morning boat or one inland loop, and they fit a spare dry-season day. Keep Phi Phi and Phang Nga on separate mornings so you are not racing two bays.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Phuket", href: "/phuket" },
      { name: "Day trips", href: "/phuket/day-trips" },
    ],
    facts: [
      { label: "Phi Phi park", value: "400 THB at Maya Bay; no swim" },
      { label: "Boats", value: "Rassada mornings; cancel May to October" },
      { label: "Phang Nga", value: "James Bond island; park fee extra" },
      { label: "Old Town", value: "Inland morning, not a boat day" },
    ],
    chips: [
      "One boat",
      "Old Town inland",
      "Nov to Apr",
    ],
    photo: "/photos/longtail-andaman.jpg",
    geo: { lat: 7.88, lon: 98.392, containedIn: "Phuket" },
    paragraphs: [
      "Pick one water day, and [Phi Phi and Phang Nga boats](/phuket/phi-phi-and-phang-nga-boats) leave Rassada in the morning. Maya Bay is 400 THB on top of many tickets, and swimming there stays banned, and use Pileh. [Phang Nga Bay](/attractions/phang-nga-bay-and-james-bond-island) is a different trip, and do not book both.",
      "[Old Town](/phuket/old-town) and Big Buddha are the inland spare day, and sleep stays on the west coast. A 2026 licensed boat often quotes 1,500 to 2,500 THB plus park fees, and see [Phuket to Krabi and Phi Phi](/get-there/phuket-to-krabi-phi-phi) if you want to stay on Don instead of day-tripping.",
    ],
    sections: [
      {
        id: "picks",
        title: "Pick one spare day",
        table: {
          headers: ["Trip","Clock","Sleep after"],
          rows: [
            ["Phi Phi Don and Le","Morning speedboat","West-coast Phuket"],
            ["Phang Nga Bay","Morning longtail or speedboat","West-coast Phuket"],
            ["Old Town plus Big Buddha","Half day by car","Same beach hotel"],
            ["Overnight Phi Phi","Ferry, not a rushed loop","[Phi Phi stays](/koh-phi-phi/where-to-stay)"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Boat page", href: "/phuket/phi-phi-and-phang-nga-boats", photo: "/photos/phi-phi.jpg" },
      { title: "Old Town", href: "/phuket/old-town", photo: "/photos/phuket.jpg" },
      { title: "Maya Bay rules", href: "/koh-phi-phi/maya-bay", photo: "/photos/viking-cave.jpg" },
      { title: "Top attractions", href: "/phuket/top-attractions", photo: "/photos/big-buddha-phuket.jpg" },
    ],
    affiliates: [
    stay("Keep the west-coast base", "Two-night lock", "Day-trip the bay. Overnight Phi Phi only if dawn on Don is the point.", stayLink('phuket'), "/photos/kata-and-karon.jpg"),
    klook("Phi Phi and bay vans", "Day tours", "Read whether the 400 THB park fee sits in the price.", klookIslandHopping('Phuket'), "/photos/phi-phi.jpg"),
    ],
    faqs: [
      { q: "Phi Phi as a day trip or overnight?", a: "Day trip covers Maya and Pileh. Overnight only if you want a Tonsai or Long Beach second morning." },
      { q: "Can you add James Bond to a Phi Phi day?", a: "No. Different water, different lunch. Pick one boat." },
    ],
  },
  {
    path: "/phuket/top-attractions",
    title: "Phuket top attractions",
    description: "Phuket's ticket board is boats first: Maya Bay 400 THB, Phang Nga on a second day, Big Buddha free on Nakkerd Hill, Old Town as a street morning.",
    lede: "Phuket attractions are known for one Andaman boat and one inland hill: Maya Bay is 400 THB and closed to swimming, while Big Buddha is the free viewpoint. Pick the boat or the hill first, not both before lunch.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Phuket", href: "/phuket" },
      { name: "Top attractions", href: "/phuket/top-attractions" },
    ],
    facts: [
      { label: "Maya Bay", value: "400 THB; no swimming; use Pileh" },
      { label: "Big Buddha", value: "Free grounds; donation box" },
      { label: "Phang Nga", value: "Separate morning from Phi Phi" },
      { label: "Old Town", value: "Thalang Road lunch, not a hotel base" },
    ],
    chips: [
      "One boat",
      "Big Buddha",
      "Old Town streets",
    ],
    photo: "/photos/big-buddha-phuket.jpg",
    geo: { lat: 7.88, lon: 98.392, containedIn: "Phuket" },
    paragraphs: [
      "The sea days live on [Phi Phi and Phang Nga boats](/phuket/phi-phi-and-phang-nga-boats), and Maya Bay park is 400 THB. You look, you do not swim, and Pileh is the swim stop. [Phi Phi islands](/attractions/phi-phi-islands-and-maya-bay) and [Phang Nga Bay](/attractions/phang-nga-bay-and-james-bond-island) are not the same ticket.",
      "Inland, Big Buddha sits on Nakkerd Hill above Chalong, and pair it with [Old Town](/phuket/old-town) if you already have a car, not with a 07:00 Rassada boat. West-coast transfers stay 45 to 90 minutes from HKT, and nightlife is a different map on [nightlife districts](/phuket/nightlife-districts).",
    ],
    sections: [
      {
        id: "board",
        title: "2026 board",
        table: {
          headers: ["Sight","Fee","Pair with"],
          rows: [
            ["Maya Bay","400 THB","Pileh swim, not a second bay"],
            ["Phang Nga / James Bond","Park fee on the tour","A different morning"],
            ["Big Buddha","Free / donation","Wat Chalong if you have the car"],
            ["Old Town streets","Free to walk","Hokkien lunch, then leave"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Day trips", href: "/phuket/day-trips", photo: "/photos/longtail-andaman.jpg" },
      { title: "Old Town", href: "/phuket/old-town", photo: "/photos/phuket.jpg" },
      { title: "Maya Bay", href: "/koh-phi-phi/maya-bay", photo: "/photos/phi-phi.jpg" },
      { title: "Where to stay", href: "/phuket/where-to-stay", photo: "/photos/kata-and-karon.jpg" },
    ],
    affiliates: [
    stay("Sleep on the west coast", "Beach first", "Grab to Big Buddha. Do not hotel in town for a 90-minute hill.", stayLink('phuket'), "/photos/kamala-and-surin.jpg"),
    klook("Boat and park tickets", "Tickets", "Name Maya Bay and the 400 THB line before you pay.", klookTickets('Phuket Big Buddha'), "/photos/phi-phi.jpg"),
    ],
    faqs: [
      { q: "Is Big Buddha worth a whole day?", a: "No. Give it 90 minutes with Wat Chalong. Keep a boat day separate." },
      { q: "Do you swim at Maya Bay?", a: "No. The conservation rule still bans it. Swim at Pileh." },
    ],
  },
  {
    path: "/phuket/patong",
    title: "Patong",
    description: "Patong is Phuket's Bangla night strip. Sleep here if that street is the trip. Sleep Kata or Kamala if you want a swim and a quieter walk home.",
    lede: "Patong is known for Bangla Road after 21:00, not a first-timer swim week. Sleep here if the strip is the stay, and sleep Kata if you came for sand.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Phuket", href: "/phuket" },
      { name: "Patong", href: "/phuket/patong" },
    ],
    facts: [
      { label: "Who", value: "People who want Bangla, not a quiet cove" },
      { label: "HKT", value: "About 30 to 50 minutes by car" },
      { label: "Smart Bus", value: "100 THB; still a west-coast stop" },
      { label: "Night", value: "Loud after 22:00; earplugs or a soi off Bangla" },
    ],
    chips: [
      "Bangla strip",
      "Night rooms",
      "Not a four-night default",
    ],
    photo: "/photos/patong-night.jpg",
    geo: { lat: 7.896, lon: 98.296, containedIn: "Phuket" },
    paragraphs: [
      "Patong is the dense west-coast town: a usable beach by day and Bangla after dark, and rooms that face the strip get bass until late. A block off the road is quieter and still a walk, and beach clubs and the louder night sit on [Phuket nightlife](/interests/nightlife/phuket-beach-clubs) and [nightlife districts](/phuket/nightlife-districts).",
      "A car from HKT is often 30 to 50 minutes, and the Smart Bus is 100 THB. First-timers who want a swim should open [where to stay](/phuket/where-to-stay) and book [Kata](/phuket/kata-and-karon) or [Kamala](/phuket/kamala-and-surin), and come to Patong for one night if someone insists.",
    ],
    sections: [
      {
        id: "use",
        title: "When this town is the right pin",
        bullets: [
          "**Yes:** Bangla, a late room, a short HKT hop, a one-night add.",
          "**No:** A first family swim week, a quiet villa, a boat-recovery stay.",
          "**Pair:** One night here, then move to Kata or Kamala.",
        ],
      },
    ],
    portraits: [
      { title: "Nightlife districts", href: "/phuket/nightlife-districts", photo: "/photos/kamala-and-surin.jpg" },
      { title: "Beach clubs", href: "/interests/nightlife/phuket-beach-clubs", photo: "/photos/kata-and-karon.jpg" },
      { title: "Where to stay", href: "/phuket/where-to-stay", photo: "/photos/phuket.jpg" },
      { title: "Kata and Karon", href: "/phuket/kata-and-karon", photo: "/photos/rawai-and-nai-harn.jpg" },
    ],
    affiliates: [
    stay("Patong hotels", "Only if Bangla is the stay", "Filter for a soi off the road if you still want sleep.", stayAreaLink('patong'), "/photos/phuket.jpg"),
    stay("Kata if you want a swim", "South of the hill", "Walk to dinner. Grab to Patong for one night, not the reverse.", stayAreaLink('kata'), "/photos/kata-and-karon.jpg"),
    ],
    faqs: [
      { q: "Is Patong safe at night?", a: "The strip is busy and lit. Petty theft and spilled drinks are the usual problems. Sleep off Bangla if you want quiet." },
      { q: "Better than Kata for a first stay?", a: "No. Kata has the swim and the village. Patong has the night street." },
    ],
  },
  {
    path: "/phuket/old-town",
    title: "Phuket Old Town",
    description: "Phuket Old Town is a sino-Portuguese street morning on Thalang Road. Come for shophouses and Hokkien lunch, then sleep back on the west coast.",
    lede: "Phuket Old Town is known for sino-Portuguese shophouses and a Hokkien lunch, and it fits one inland morning. It is not a first west-coast hotel.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Phuket", href: "/phuket" },
      { name: "Old Town", href: "/phuket/old-town" },
    ],
    facts: [
      { label: "Where", value: "Thalang, Dibuk, and Krabi Roads" },
      { label: "Time", value: "Late morning into lunch" },
      { label: "West coast", value: "About 30 to 50 minutes by car" },
      { label: "Food", value: "Hokkien mee and moo hong" },
    ],
    chips: [
      "Street morning",
      "Hokkien lunch",
      "Not a beach stay",
    ],
    photo: "/photos/phuket.jpg",
    geo: { lat: 7.885, lon: 98.388, containedIn: "Phuket" },
    paragraphs: [
      "Old Town is the inland grid east of the west-coast hotels, and walk Thalang Road for the Sino-Portuguese fronts, then eat. The food map lives on [Old Town Hokkien](/thai-food/phuket-old-town-hokkien-and-peranakan-food) and the [Phuket food guide](/thai-food/phuket), and midday heat empties the sidewalks.",
      "A 2026 Grab from Kata or Patong is often 30 to 50 minutes and a few hundred THB, and sleep on [where to stay](/phuket/where-to-stay). Pair the streets with Big Buddha only if you already have a car, and do not add a Rassada boat the same morning.",
    ],
    sections: [
      {
        id: "visit",
        title: "One inland morning",
        bullets: [
          "**Go:** 10:00 to 14:00. Shops open late. Lunch is the point.",
          "**Eat:** Hokkien mee, moo hong, local coffee. Not a beach grill.",
          "**Leave:** Back to the west coast before the evening taxi surge.",
        ],
      },
    ],
    portraits: [
      { title: "Old Town food", href: "/thai-food/phuket-old-town-hokkien-and-peranakan-food", photo: "/photos/kata-and-karon.jpg" },
      { title: "Top attractions", href: "/phuket/top-attractions", photo: "/photos/big-buddha-phuket.jpg" },
      { title: "Where to stay", href: "/phuket/where-to-stay", photo: "/photos/kamala-and-surin.jpg" },
      { title: "Day trips", href: "/phuket/day-trips", photo: "/photos/longtail-andaman.jpg" },
    ],
    affiliates: [
    stay("West-coast hotels after lunch", "Kata or Kamala", "Old Town is a morning. Sleep where you swim.", stayLink('phuket'), "/photos/rawai-and-nai-harn.jpg"),
    klook("Town and hill vans", "Tours", "Skip a guided street walk unless you want a named meeting point.", klookTours('Phuket Old Town'), "/photos/big-buddha-phuket.jpg"),
    ],
    faqs: [
      { q: "Should you hotel in Old Town?", a: "Only if the streets are the whole stay. First-timers still sleep on the west coast." },
      { q: "Old Town and Phi Phi the same day?", a: "No. Rassada is a morning pier. Keep the streets for a land day." },
    ],
  },
  {
    path: "/phuket/bang-tao-and-laguna",
    title: "Bang Tao and Laguna",
    description: "Bang Tao is the long north-west Phuket sand. Laguna is the golf and canal grid behind it. Quieter than Patong. HKT is often under an hour.",
    lede: "Bang Tao is known for a long north-west beach and the Laguna golf grid, and it fits a quieter stay than Patong. Sleep here if space matters more than a village walk.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Phuket", href: "/phuket" },
      { name: "Bang Tao and Laguna", href: "/phuket/bang-tao-and-laguna" },
    ],
    facts: [
      { label: "Season", value: "Best November to April" },
      { label: "HKT", value: "Often 25 to 50 minutes by car" },
      { label: "Smart Bus", value: "100 THB; north-west stops" },
      { label: "Night", value: "Beach clubs, not Bangla" },
    ],
    chips: [
      "Long sand",
      "Laguna grid",
      "North-west",
    ],
    photo: "/photos/resort-amanpuri.jpg",
    geo: { lat: 8.004, lon: 98.297, containedIn: "Phuket" },
    paragraphs: [
      "Bang Tao sits north of [Kamala and Surin](/phuket/kamala-and-surin), and the beach is long. Laguna is the canal and golf pocket behind the sand, and [Amanpuri](/resort-living/amanpuri) and [Trisara](/resort-living/trisara-phuket) sit on nearby headlands if the villa is the week. Beach-club nights live on [Kamala and Bang Tao clubs](/interests/nightlife/phuket-kamala-bangtao).",
      "HKT is often 25 to 50 minutes, and the Smart Bus is 100 THB. You will want a car or Grab for dinner off the resort road, and first-timers who want a walkable village should still open [Kata](/phuket/kata-and-karon).",
    ],
    sections: [
      {
        id: "split",
        title: "Beach, lagoon, cliff",
        bullets: [
          "**Bang Tao sand:** Families and a longer walk. Clubs at the north end.",
          "**Laguna:** Golf, canals, larger rooms. Not a village street.",
          "**Headlands:** Amanpuri and Trisara if the gate is the stay.",
        ],
      },
    ],
    portraits: [
      { title: "Kamala and Surin", href: "/phuket/kamala-and-surin", photo: "/photos/kamala-and-surin.jpg" },
      { title: "Amanpuri", href: "/resort-living/amanpuri", photo: "/photos/resort-avista-hideaway-phuket.jpg" },
      { title: "Trisara", href: "/resort-living/trisara-phuket", photo: "/photos/resort-trisara-phuket.jpg" },
      { title: "Where to stay", href: "/phuket/where-to-stay", photo: "/photos/phuket.jpg" },
    ],
    affiliates: [
    stay("Bang Tao hotels", "Long sand", "Search Bang Tao if you want space and will Grab for dinner.", hotelSearchLink('Bang Tao', 'phuket'), "/photos/kamala-and-surin.jpg"),
    stay("Phuket west-coast stays", "Name the beach", "Laguna if golf is the week. Kata if you want to walk to food.", stayLink('phuket'), "/photos/kata-and-karon.jpg"),
    ],
    faqs: [
      { q: "Bang Tao or Kata for a first stay?", a: "Kata if you want a village walk. Bang Tao if you want a longer sand and accept a car for dinner." },
      { q: "Is Laguna on the beach?", a: "Some rooms are. Many sit on the canals. Read the map pin, not the area name." },
    ],
  },
  {
    path: "/phuket/nightlife-districts",
    title: "Phuket nightlife districts",
    description: "Phuket nights split by coast: Bangla in Patong, beach clubs on Kamala and Bang Tao, and a quieter Kata village. Pick one district per night.",
    lede: "Phuket nightlife is known for Bangla and a few west-coast clubs rather than one island crawl, so sleep where you will Grab home. Patong is the strip, and Bang Tao is a sunset deck.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Phuket", href: "/phuket" },
      { name: "Nightlife districts", href: "/phuket/nightlife-districts" },
    ],
    facts: [
      { label: "Patong", value: "Bangla after 21:00" },
      { label: "Clubs", value: "Kamala and Bang Tao decks" },
      { label: "Grab", value: "Budget 300 to 700 THB across the west coast after midnight" },
      { label: "Rule", value: "One district per night" },
    ],
    chips: [
      "Bangla",
      "Bang Tao decks",
      "One district",
    ],
    photo: "/photos/patong-night.jpg",
    geo: { lat: 7.896, lon: 98.296, containedIn: "Phuket" },
    paragraphs: [
      "Open [Patong](/phuket/patong) if Bangla is the night, and open [Kamala and Bang Tao clubs](/interests/nightlife/phuket-kamala-bangtao) if a daybed becomes sunset. [Phuket beach clubs](/interests/nightlife/phuket-beach-clubs) names the decks, and Kata is a village drink, not a club circuit.",
      "A 2026 late Grab from Bang Tao to Patong is often 300 to 700 THB and 25 to 40 minutes. After midnight, sleep on the same coast, and do not rent a scooter at 01:00. November to April is the useful club window.",
    ],
    sections: [
      {
        id: "pick",
        title: "Pick one district",
        bullets: [
          "**Patong / Bangla:** Loud, walkable, late. Sleep Patong.",
          "**Kamala and Bang Tao:** Daybeds, sunset, a priced car home.",
          "**Kata village:** Short drinks after a swim day. Not a crawl.",
        ],
      },
    ],
    portraits: [
      { title: "Patong", href: "/phuket/patong", photo: "/photos/phuket.jpg" },
      { title: "Beach clubs", href: "/interests/nightlife/phuket-beach-clubs", photo: "/photos/kata-and-karon.jpg" },
      { title: "Kamala and Bang Tao", href: "/interests/nightlife/phuket-kamala-bangtao", photo: "/photos/kamala-and-surin.jpg" },
      { title: "Where to stay", href: "/phuket/where-to-stay", photo: "/photos/rawai-and-nai-harn.jpg" },
    ],
    affiliates: [
    stay("Sleep on the district you drink", "Patong or Bang Tao", "The 01:00 Grab is the real cost if you hotel-hop.", stayAreaLink('patong'), "/photos/kamala-and-surin.jpg"),
    klook("Club and boat days", "Tours", "A deck is a dry-season afternoon. Do not book it on the same morning as a 07:00 Rassada boat.", klookTours('Phuket beach club'), "/photos/kata-and-karon.jpg"),
    ],
    faqs: [
      { q: "Can you do Bangla and a Bang Tao club the same night?", a: "You can. You will spend the night in a car. Pick one." },
      { q: "Where do you sleep for Bang Tao clubs?", a: "Bang Tao or Kamala. Patong adds a late, expensive Grab." },
    ],
  },
  {
    path: "/phuket/nai-yang-and-mai-khao",
    title: "Nai Yang and Mai Khao",
    description: "Nai Yang and Mai Khao sit by HKT and Sirinat park. Quieter than Patong. Useful for late flights. The swim is seasonal from November to April.",
    lede: "Nai Yang and Mai Khao are known for airport-close sand on Sirinat park, and they fit a late HKT landing or a quiet last night. They are not a first Kata swim week.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Phuket", href: "/phuket" },
      { name: "Nai Yang and Mai Khao", href: "/phuket/nai-yang-and-mai-khao" },
    ],
    facts: [
      { label: "HKT", value: "Often 10 to 25 minutes by car" },
      { label: "Season", value: "Best November to April" },
      { label: "Park", value: "Sirinat National Park edge" },
      { label: "Dinner", value: "Thinner than Kata; plan a car" },
    ],
    chips: [
      "Airport beaches",
      "Sirinat edge",
      "Quiet nights",
    ],
    photo: "/photos/resort-trisara-phuket.jpg",
    geo: { lat: 8.089, lon: 98.296, containedIn: "Phuket" },
    paragraphs: [
      "Nai Yang is the casuarina beach beside the airport fence, and mai Khao is the longer, quieter sand to the north. Both sit on or next to Sirinat National Park, and [Trisara](/resort-living/trisara-phuket) is the gated north-west stay if the villa is the week. This is not [Patong](/phuket/patong).",
      "A car from HKT is often 10 to 25 minutes, far shorter than the 45 to 90 minute west-coast run to Kata. The Smart Bus is 100 THB if it still serves your stop. Book these beaches for a late arrival or an early flight, not as a first village week. See [where to stay](/phuket/where-to-stay).",
    ],
    sections: [
      {
        id: "use",
        title: "When the airport coast is the right pin",
        bullets: [
          "**Yes:** A 22:00 landing, a 07:00 departure, a quiet last night.",
          "**No:** A first two-night swim with walkable dinner. Use Kata.",
          "**Turtles:** Mai Khao nesting is seasonal and signed. Stay off taped sand.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/phuket/where-to-stay", photo: "/photos/phuket.jpg" },
      { title: "Bang Tao", href: "/phuket/bang-tao-and-laguna", photo: "/photos/resort-amanpuri.jpg" },
      { title: "Getting around", href: "/phuket/getting-around", photo: "/photos/ferry-gulf.jpg" },
      { title: "Best time", href: "/phuket/best-time-to-visit", photo: "/photos/kamala-and-surin.jpg" },
    ],
    affiliates: [
    stay("Mai Khao hotels", "Airport-close", "Search Mai Khao if the flight time is the stay, not Bangla.", hotelSearchLink('Mai Khao', 'phuket'), "/photos/phuket.jpg"),
    stay("Nai Yang and north-west", "Sirinat edge", "Quieter than Patong. Thinner dinner. Keep a car pin.", stayLink('phuket'), "/photos/kamala-and-surin.jpg"),
    ],
    faqs: [
      { q: "Nai Yang or Kata for a first stay?", a: "Kata. Nai Yang is an airport pin with a seasonal swim." },
      { q: "Can you walk from HKT to Nai Yang?", a: "No. Take a priced car. The fence and the road are not a promenade." },
    ],
  },
  {
    path: "/phuket/phi-phi-and-phang-nga-boats",
    title: "Phi Phi and Phang Nga boats",
    description: "Rassada mornings run Phi Phi or Phang Nga, not both. Maya Bay is 400 THB and closed to swimming. Boats cancel from May to October.",
    lede: "Phuket boats are known for a Rassada morning to Phi Phi or Phang Nga, and they fit November to April. From May to October desks cancel first and you should keep a refund plan.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Phuket", href: "/phuket" },
      { name: "Phi Phi and Phang Nga boats", href: "/phuket/phi-phi-and-phang-nga-boats" },
    ],
    facts: [
      { label: "Pier", value: "Rassada, east of the town" },
      { label: "Maya Bay", value: "400 THB; no swimming; Pileh instead" },
      { label: "Season", value: "November to April; cancel May to October" },
      { label: "Clock", value: "About 45 to 90 minutes to Phi Phi" },
    ],
    chips: [
      "Rassada mornings",
      "One bay",
      "Nov to Apr",
    ],
    photo: "/photos/phi-phi.jpg",
    geo: { lat: 7.88, lon: 98.392, containedIn: "Phuket" },
    paragraphs: [
      "Passenger boats use Rassada Pier, and speedboats to [Phi Phi](/koh-phi-phi) run about 45 to 90 minutes in season. [Maya Bay](/koh-phi-phi/maya-bay) adds 400 THB and stays closed to swimming, and use Pileh. [Phang Nga Bay](/attractions/phang-nga-bay-and-james-bond-island) is a different morning, and keep those two boats on different mornings.",
      "May to October boats cancel, and read the refund line the afternoon before. A west-coast hotel car to Rassada is often 30 to 50 minutes, and overnight on Don only if a second morning is the point. Route notes sit on [Phuket to Krabi and Phi Phi](/get-there/phuket-to-krabi-phi-phi).",
    ],
    sections: [
      {
        id: "which",
        title: "Which boat",
        table: {
          headers: ["Product","Use","2026 note"],
          rows: [
            ["Phi Phi day speedboat","Maya look, Pileh swim","400 THB often extra"],
            ["Phang Nga / James Bond","Limestone bay, canoe stops","Not a Phi Phi add-on"],
            ["Overnight ferry","Sleep on Don","Long Beach or Tonsai"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Maya Bay rules", href: "/koh-phi-phi/maya-bay", photo: "/photos/viking-cave.jpg" },
      { title: "Phi Phi stays", href: "/koh-phi-phi/where-to-stay", photo: "/photos/long-beach-pp.jpg" },
      { title: "Day trips", href: "/phuket/day-trips", photo: "/photos/longtail-andaman.jpg" },
      { title: "Getting around", href: "/phuket/getting-around", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("West-coast nights around the boat", "Kata or Kamala", "No boat the afternoon you land HKT.", stayLink('phuket'), "/photos/kata-and-karon.jpg"),
    klook("Phi Phi and Phang Nga", "Island hopping", "Name the pier and the 400 THB line. Morning only.", klookIslandHopping('Phuket'), "/photos/longtail-andaman.jpg"),
    ],
    faqs: [
      { q: "Can you swim in Maya Bay?", a: "No. Use Pileh. The 400 THB park fee still applies." },
      { q: "Day trip or sleep on Phi Phi?", a: "Day trip for most first stays. Sleep on Don if you want dawn viewpoints." },
    ],
  },
  {
    path: "/krabi/ao-nang",
    title: "Ao Nang",
    description: "Ao Nang is Krabi's mainland beach base: cars, dinner, and longtails to Railay. KBV is 20 to 40 minutes. A taxi is often 400 to 800 THB.",
    lede: "Ao Nang is known for cars, dinner, and the Railay longtail desk, and it is the default Krabi stay if you do not want a boat-only pocket. The longtail to Railay is about 100 to 150 THB and 15 minutes.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Krabi", href: "/krabi" },
      { name: "Ao Nang", href: "/krabi/ao-nang" },
    ],
    facts: [
      { label: "KBV", value: "20 to 40 minutes; taxi 400 to 800 THB" },
      { label: "Railay boat", value: "100 to 150 THB, about 15 minutes" },
      { label: "Season", value: "November to April" },
      { label: "Who", value: "First Krabi nights with cars" },
    ],
    chips: [
      "Mainland base",
      "Longtail desk",
      "KBV cars",
    ],
    photo: "/photos/krabi.jpg",
    geo: { lat: 8.032, lon: 98.827, containedIn: "Krabi" },
    paragraphs: [
      "Ao Nang is the logistics beach: a walking street, hotel cars, and the south-end longtail to [Railay](/krabi/railay). Shared boats are 100 to 150 THB and about 15 minutes in daylight, and [Tubkaek](/krabi/tubkaek) is quieter to the west. Phi Phi boats are a morning outing, not an arrival-day add.",
      "KBV to Ao Nang is 20 to 40 minutes, and a taxi often quotes 400 to 800 THB. Book the first two nights here unless the cliff pocket is the whole trip, and see [where to stay](/krabi/where-to-stay) and [Bangkok to Krabi](/get-there/bangkok-to-krabi).",
    ],
    sections: [
      {
        id: "use",
        title: "What Ao Nang is for",
        bullets: [
          "**Yes:** Cars, dinner, a Railay day, a Phi Phi morning boat.",
          "**No:** A silent cove. Use Railay or Tubkaek.",
          "**Nopparat Thara:** The west beach and some Lanta boats in season.",
        ],
      },
    ],
    portraits: [
      { title: "Railay", href: "/krabi/railay", photo: "/photos/railay.jpg" },
      { title: "Where to stay", href: "/krabi/where-to-stay", photo: "/photos/resort-rayavadee.jpg" },
      { title: "Tubkaek", href: "/krabi/tubkaek", photo: "/photos/resort-phulay-bay.jpg" },
      { title: "Getting around", href: "/krabi/getting-around", photo: "/photos/longtail-andaman.jpg" },
    ],
    affiliates: [
    stay("Ao Nang hotels", "Mainland default", "Walk to dinner. Longtail to Railay from the south end.", stayAreaLink('ao-nang'), "/photos/railay.jpg"),
    klook("Railay and island boats", "Tours", "Morning only in the wet months. Name the pier.", klookIslandHopping('Krabi'), "/photos/longtail-andaman.jpg"),
    ],
    faqs: [
      { q: "Ao Nang or Railay for two nights?", a: "Ao Nang if you want cars and menus. Railay if the cliff pocket is the stay and you accept a longtail." },
      { q: "How much is the Railay boat?", a: "Shared longtails are 100 to 150 THB a person and about 15 minutes from Ao Nang." },
    ],
  },
  {
    path: "/krabi/railay",
    title: "Railay",
    description: "Railay is the no-road cliff pocket: longtail from Ao Nang 100 to 150 THB, about 15 minutes. Phra Nang is the cave beach. Boats thin May to October.",
    lede: "Railay is known for a cliff pocket with no road, so you sleep here if the rock is the stay. The Ao Nang longtail costs 100 to 150 THB and takes about 15 minutes.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Krabi", href: "/krabi" },
      { name: "Railay", href: "/krabi/railay" },
    ],
    facts: [
      { label: "Boat", value: "Ao Nang longtail 100 to 150 THB, ~15 min" },
      { label: "Road", value: "None. East or West beach landings" },
      { label: "Season", value: "November to April" },
      { label: "Resort", value: "Rayavadee is boat-only on this pocket" },
    ],
    chips: [
      "No road",
      "Phra Nang",
      "Longtail only",
    ],
    photo: "/photos/railay.jpg",
    geo: { lat: 8.011, lon: 98.838, containedIn: "Krabi" },
    paragraphs: [
      "Railay is a limestone peninsula, and west Beach is the usual Ao Nang landing. East Beach is the other pier when swell hits, and [Phra Nang cave](/attractions/railay-beach-and-phra-nang-cave) is a walk, not a second boat. [Rayavadee](/resort-living/rayavadee) sits in the grove if the hotel is the week.",
      "Shared longtails from [Ao Nang](/krabi/ao-nang) are 100 to 150 THB and about 15 minutes, and after dark, prices rise and boats thin. May to October can pin you on the pocket, and do not add [Phi Phi](/koh-phi-phi) the same day you climb.",
    ],
    sections: [
      {
        id: "split",
        title: "West, east, Phra Nang",
        bullets: [
          "**West:** Sand, bars, the usual landing.",
          "**East:** Mangrove pier, some rooms, backup landing.",
          "**Phra Nang:** Cave beach walk. Crowds at midday.",
        ],
      },
    ],
    portraits: [
      { title: "Ao Nang", href: "/krabi/ao-nang", photo: "/photos/krabi.jpg" },
      { title: "Phra Nang", href: "/attractions/railay-beach-and-phra-nang-cave", photo: "/photos/resort-rayavadee.jpg" },
      { title: "Where to stay", href: "/krabi/where-to-stay", photo: "/photos/tiger-cave.jpg" },
      { title: "Getting around", href: "/krabi/getting-around", photo: "/photos/longtail-andaman.jpg" },
    ],
    affiliates: [
    stay("Railay hotels", "Boat-only pocket", "Search Railay if you accept no road and a storm-day wait.", hotelSearchLink('Railay', 'krabi'), "/photos/krabi.jpg"),
    stay("Rayavadee grove", "Flagship on the pocket", "The stay is the week. Still a longtail in and out.", stayLink('krabi'), "/photos/resort-rayavadee.jpg"),
    ],
    faqs: [
      { q: "Can you drive to Railay?", a: "No. Longtail from Ao Nang, or a boat from Krabi Town. There is no road." },
      { q: "Railay in August?", a: "Rooms may open. Boats cancel. Ao Nang is the safer wet-season pin." },
    ],
  },
  {
    path: "/krabi/where-to-stay",
    title: "Where to stay in Krabi",
    description: "Krabi stays split cleanly: Ao Nang for cars and dinner, Railay for the cliff, Tubkaek for a quieter west sand. KBV is 20 to 40 minutes.",
    lede: "Krabi is known for two pins rather than a long strip: Ao Nang if you want cars and dinner, Railay if you accept a 15-minute longtail. Tubkaek fits a quieter west-coast stay.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Krabi", href: "/krabi" },
      { name: "Where to stay", href: "/krabi/where-to-stay" },
    ],
    facts: [
      { label: "Default", value: "Ao Nang" },
      { label: "Cliff", value: "Railay, longtail 100 to 150 THB" },
      { label: "KBV", value: "20 to 40 minutes; taxi 400 to 800 THB" },
      { label: "Quiet west", value: "Tubkaek and Phulay Bay" },
    ],
    chips: [
      "Ao Nang default",
      "Railay if cliffs",
      "Tubkaek quiet",
    ],
    photo: "/photos/krabi.jpg",
    geo: { lat: 8.086, lon: 98.906, containedIn: "Krabi" },
    paragraphs: [
      "[Ao Nang](/krabi/ao-nang) is the first-timer default: menus, cars, and the Railay desk, and [Railay](/krabi/railay) is the no-road pocket. [Tubkaek](/krabi/tubkaek) is the quieter west sand, with [Phulay Bay](/resort-living/phulay-bay) on that coast, and krabi Town is a pier and a night market, not a beach hotel.",
      "KBV to Ao Nang is 20 to 40 minutes and often 400 to 800 THB by taxi, and do not boat to Phi Phi the afternoon you land. Lock two nights, then add [Koh Lanta](/koh-lanta/where-to-stay) if you want a slower island, and pair with [getting around](/krabi/getting-around).",
    ],
    sections: [
      {
        id: "areas",
        title: "Which pin fits which trip",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["Ao Nang","Cars, dinner, boat desks","KBV 20 to 40 minutes"],
            ["Railay","Cliffs, no road","Longtail 100 to 150 THB, ~15 min"],
            ["Tubkaek","Quieter west sand","Farther from the walking street"],
            ["Krabi Town","Early boats, night market","Not a swim base"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Ao Nang", href: "/krabi/ao-nang", photo: "/photos/longtail-andaman.jpg" },
      { title: "Railay", href: "/krabi/railay", photo: "/photos/railay.jpg" },
      { title: "Tubkaek", href: "/krabi/tubkaek", photo: "/photos/resort-phulay-bay.jpg" },
      { title: "Lanta stays", href: "/koh-lanta/where-to-stay", photo: "/photos/koh-lanta.jpg" },
    ],
    affiliates: [
    stay("Ao Nang hotels", "Mainland default", "Book this strip if you want cars and a Railay day trip.", stayAreaLink('ao-nang'), "/photos/railay.jpg"),
    stay("Railay hotels", "Cliff pocket", "Use this search only if you accept a longtail and a storm wait.", hotelSearchLink('Railay', 'krabi'), "/photos/resort-rayavadee.jpg"),
    ],
    faqs: [
      { q: "Ao Nang or Railay for a first stay?", a: "Ao Nang. Railay if the cliff is why you came and you can live without a car." },
      { q: "Is Krabi Town a good hotel?", a: "Only for an early boat. Sleep Ao Nang if you want a beach." },
    ],
  },
  {
    path: "/krabi/getting-around",
    title: "Getting around Krabi",
    description: "Krabi moves by car and longtail. KBV to Ao Nang is 20 to 40 minutes and 400 to 800 THB. Railay boats are 100 to 150 THB and about 15 minutes.",
    lede: "Krabi is known for airport cars and a 15-minute Railay longtail rather than a rail map. KBV to Ao Nang is 20 to 40 minutes, and taxis often run 400 to 800 THB.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Krabi", href: "/krabi" },
      { name: "Getting around", href: "/krabi/getting-around" },
    ],
    facts: [
      { label: "KBV car", value: "20 to 40 minutes to Ao Nang" },
      { label: "Taxi", value: "400 to 800 THB to Ao Nang" },
      { label: "Railay", value: "100 to 150 THB, about 15 minutes" },
      { label: "Lanta", value: "Saladan boat in season, or van plus ferry" },
    ],
    chips: [
      "KBV cars",
      "Ao Nang longtails",
      "Saladan boats",
    ],
    photo: "/photos/longtail-andaman.jpg",
    geo: { lat: 8.086, lon: 98.906, containedIn: "Krabi" },
    paragraphs: [
      "There is no urban rail, and land KBV, then a priced car to [Ao Nang](/krabi/ao-nang). The hop is 20 to 40 minutes and often 400 to 800 THB, and shared longtails to [Railay](/krabi/railay) leave the south beach: 100 to 150 THB, about 15 minutes. After dark, book a boat or stay put.",
      "Phi Phi boats use Klong Jilad. [Koh Lanta](/get-there/krabi-to-koh-lanta) is Saladan in season, or van plus the car ferry from Hua Hin pier on the Krabi side when boats die. May to October cancels first, and pair with [where to stay](/krabi/where-to-stay) and [Bangkok to Krabi](/get-there/bangkok-to-krabi).",
    ],
    sections: [
      {
        id: "modes",
        title: "Which hop",
        bullets: [
          "**KBV taxi or Trip.com car:** Luggage and night landings.",
          "**Ao Nang longtail:** Railay in daylight, 100 to 150 THB.",
          "**Klong Jilad:** Phi Phi mornings. Not an arrival-day pier.",
          "**Lanta:** Saladan boat November to April, road plus ferry all year.",
        ],
      },
    ],
    portraits: [
      { title: "Ao Nang", href: "/krabi/ao-nang", photo: "/photos/krabi.jpg" },
      { title: "Railay", href: "/krabi/railay", photo: "/photos/railay.jpg" },
      { title: "Krabi to Lanta", href: "/get-there/krabi-to-koh-lanta", photo: "/photos/koh-lanta.jpg" },
      { title: "Phi Phi boats", href: "/get-there/phuket-to-krabi-phi-phi", photo: "/photos/phi-phi.jpg" },
    ],
    affiliates: [
    stay("Ao Nang as the car pin", "Mainland", "Sleep where the taxi already knows the soi.", stayAreaLink('ao-nang'), "/photos/krabi.jpg"),
    {
      title: "KBV airport cars",
      kicker: "Transfers",
      body: "20 to 40 minutes to Ao Nang. Useful after a late Bangkok hop.",
      href: transferLink('KBV'),
      cta: 'Book transfer',
      photo: "/photos/ferry-gulf.jpg",
      partner: 'transfer',
    },
    ],
    faqs: [
      { q: "Grab from KBV to Ao Nang?", a: "Sometimes. A Trip.com car or a posted taxi at 400 to 800 THB is the reliable plan." },
      { q: "Can you scooter to Railay?", a: "No. There is no road. Park in Ao Nang and take the longtail." },
    ],
  },
  {
    path: "/krabi/best-time-to-visit",
    title: "Best time to visit Krabi",
    description: "Krabi's useful sea is November to April. May to October cancels Railay and Phi Phi boats first. KBV cars still run in 20 to 40 minutes.",
    lede: "Krabi is known for an Andaman dry window from November to April, when Railay boats and Hong days hold. May to October can still be a cheap Ao Nang room, but do not count on a morning boat you must take.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Krabi", href: "/krabi" },
      { name: "Best time to visit", href: "/krabi/best-time-to-visit" },
    ],
    facts: [
      { label: "Dry sea", value: "November to April" },
      { label: "Wet", value: "May to October; boats cancel" },
      { label: "Railay", value: "Longtails thin in swell" },
      { label: "KBV", value: "Cars still 20 to 40 minutes" },
    ],
    chips: [
      "Nov to Apr",
      "Boat cancels May-Oct",
      "Ao Nang backup",
    ],
    photo: "/photos/railay.jpg",
    geo: { lat: 8.086, lon: 98.906, containedIn: "Krabi" },
    paragraphs: [
      "The Andaman calendar matches [Phuket](/phuket/best-time-to-visit), and November to April is the sea for Railay, Hong, and Phi Phi. May to October is cheaper Ao Nang, chop, and cancelled longtails, and the KBV car is still 20 to 40 minutes and 400 to 800 THB.",
      "If your dates are July, open [when to go](/plan/when-to-go) and look at the Gulf. Do not treat a [Maya Bay](/koh-phi-phi/maya-bay) day as fixed in September. Pair with [monsoon notes](/plan/monsoon-and-burn-season).",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Feb:** Dry, booked, the usual first trip.",
          "**Mar to Apr:** Hot, still swimmable, Songkran water in town.",
          "**May to Oct:** Sleep Ao Nang. Treat boats as optional.",
        ],
      },
    ],
    portraits: [
      { title: "When to go", href: "/plan/when-to-go", photo: "/photos/phuket.jpg" },
      { title: "Where to stay", href: "/krabi/where-to-stay", photo: "/photos/krabi.jpg" },
      { title: "Day trips", href: "/krabi/day-trips", photo: "/photos/tiger-cave.jpg" },
      { title: "Lanta season", href: "/koh-lanta/best-time-to-visit", photo: "/photos/koh-lanta.jpg" },
    ],
    affiliates: [
    stay("Krabi in the dry months", "Nov to Apr", "Lock Ao Nang or Railay before the boat search.", stayLink('krabi'), "/photos/krabi.jpg"),
    klook("Season boats", "Tours", "Morning only. Read the cancel line for May to October.", klookIslandHopping('Krabi'), "/photos/phi-phi.jpg"),
    ],
    faqs: [
      { q: "Is August a bad Krabi month?", a: "It is a bad boat month. Ao Nang rooms still work. Railay can strand you." },
      { q: "November or February?", a: "Both sit in the useful window. February is often drier. Book either early." },
    ],
  },
  {
    path: "/krabi/day-trips",
    title: "Krabi day trips",
    description: "Krabi days: Railay by longtail, Hong or Phi Phi in the morning, and Tiger Cave on the mainland. One boat day is enough for a first stay.",
    lede: "Krabi day trips are known for one boat or one mainland climb, and they fit a spare dry-season day. Railay is 15 minutes by longtail, and Tiger Cave is 1,237 steps on the mainland.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Krabi", href: "/krabi" },
      { name: "Day trips", href: "/krabi/day-trips" },
    ],
    facts: [
      { label: "Railay", value: "100 to 150 THB, about 15 minutes" },
      { label: "Maya Bay", value: "400 THB; no swimming" },
      { label: "Tiger Cave", value: "1,237 steps on the mainland" },
      { label: "Season", value: "Boats cancel May to October" },
    ],
    chips: [
      "One boat",
      "Tiger Cave inland",
      "Nov to Apr",
    ],
    photo: "/photos/tiger-cave.jpg",
    geo: { lat: 8.086, lon: 98.906, containedIn: "Krabi" },
    paragraphs: [
      "[Railay](/krabi/railay) is the short longtail, not a province hop, and Hong Island is a park morning. [Phi Phi](/attractions/phi-phi-islands-and-maya-bay) is a longer speedboat from Klong Jilad, with Maya Bay at 400 THB and no swimming. Do not book Hong and Phi Phi on the same ticket.",
      "Tiger Cave Temple (Wat Tham Suea) is 1,237 steps above Krabi Town, on the mainland, not on Phi Phi. Start at 07:00, and [Koh Lanta](/get-there/krabi-to-koh-lanta) is an overnight, not a day trip. Sleep stays on [where to stay](/krabi/where-to-stay).",
    ],
    sections: [
      {
        id: "picks",
        title: "Pick one spare day",
        table: {
          headers: ["Trip","Clock","Sleep after"],
          rows: [
            ["Railay and Phra Nang","15-minute longtail","Ao Nang or Railay"],
            ["Hong Island","Morning park boat","Ao Nang"],
            ["Phi Phi","Klong Jilad speedboat","Ao Nang, or Don overnight"],
            ["Tiger Cave","1,237 steps","Ao Nang"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Railay", href: "/krabi/railay", photo: "/photos/railay.jpg" },
      { title: "Top attractions", href: "/krabi/top-attractions", photo: "/photos/krabi.jpg" },
      { title: "Maya Bay", href: "/koh-phi-phi/maya-bay", photo: "/photos/phi-phi.jpg" },
      { title: "Lanta", href: "/koh-lanta", photo: "/photos/koh-lanta.jpg" },
    ],
    affiliates: [
    stay("Keep the Ao Nang base", "Two-night lock", "Day-trip Railay. Overnight Lanta only if the island is the week.", stayAreaLink('ao-nang'), "/photos/krabi.jpg"),
    klook("Hong and Phi Phi boats", "Day tours", "Read the 400 THB Maya line. One boat day is enough.", klookIslandHopping('Krabi'), "/photos/phi-phi.jpg"),
    ],
    faqs: [
      { q: "Railay as a day trip or overnight?", a: "Day trip if you want dinner in Ao Nang. Overnight if the pocket is the stay." },
      { q: "Is Tiger Cave on Phi Phi?", a: "No. The 1,237 steps are on the Krabi mainland." },
    ],
  },
  {
    path: "/krabi/top-attractions",
    title: "Krabi top attractions",
    description: "Krabi's board is Railay and Phra Nang, Hong Island, Maya Bay at 400 THB with no swim, plus Tiger Cave's 1,237 steps on the mainland.",
    lede: "Krabi attractions are known for the Railay cliffs and one park boat, with Tiger Cave adding 1,237 steps on the mainland. Maya Bay is 400 THB and closed to swimming, so use Pileh if you want water.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Krabi", href: "/krabi" },
      { name: "Top attractions", href: "/krabi/top-attractions" },
    ],
    facts: [
      { label: "Railay boat", value: "100 to 150 THB, about 15 minutes" },
      { label: "Maya Bay", value: "400 THB; swim at Pileh" },
      { label: "Tiger Cave", value: "1,237 steps; start at 07:00" },
      { label: "Hong", value: "Park fee on the tour" },
    ],
    chips: [
      "Railay",
      "Tiger Cave",
      "One park boat",
    ],
    photo: "/photos/railay.jpg",
    geo: { lat: 8.086, lon: 98.906, containedIn: "Krabi" },
    paragraphs: [
      "Start with [Railay and Phra Nang](/attractions/railay-beach-and-phra-nang-cave) if the cliff is why you came, and Hong is the other limestone morning. [Phi Phi](/attractions/phi-phi-islands-and-maya-bay) is a longer day: 400 THB at Maya Bay, no swimming, Pileh instead, and Full lists sit on [day trips](/krabi/day-trips).",
      "Tiger Cave Temple is 1,237 steps above Krabi Town, and TAT does not post a stable gate fee; bring small notes. Do not climb it the same day you longtail to Railay, and KBV transfers stay 20 to 40 minutes to Ao Nang.",
    ],
    sections: [
      {
        id: "board",
        title: "2026 board",
        table: {
          headers: ["Sight","Fee","Pair with"],
          rows: [
            ["Railay / Phra Nang","Longtail 100 to 150 THB","Ao Nang dinner after"],
            ["Hong Island","Park fee on the tour","A dry-season morning"],
            ["Maya Bay","400 THB","Pileh swim, not a second bay"],
            ["Tiger Cave","Donation / possible 50 THB","Mainland only, 07:00 start"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Railay", href: "/krabi/railay", photo: "/photos/krabi.jpg" },
      { title: "Day trips", href: "/krabi/day-trips", photo: "/photos/tiger-cave.jpg" },
      { title: "Maya Bay", href: "/koh-phi-phi/maya-bay", photo: "/photos/phi-phi.jpg" },
      { title: "Ao Nang", href: "/krabi/ao-nang", photo: "/photos/longtail-andaman.jpg" },
    ],
    affiliates: [
    stay("Sleep near the longtail desk", "Ao Nang", "Grab to Tiger Cave. Do not hotel in town for one climb.", stayAreaLink('ao-nang'), "/photos/krabi.jpg"),
    klook("Park and boat tickets", "Tickets", "Name Hong or Maya. The 400 THB line is often extra.", klookTickets('Krabi Hong Island'), "/photos/tiger-cave.jpg"),
    ],
    faqs: [
      { q: "How long is Tiger Cave?", a: "Plan two to three hours including the 1,237 steps. Start at 07:00." },
      { q: "Do you swim at Maya Bay?", a: "No. Use Pileh. The park fee still applies." },
    ],
  },
  {
    path: "/krabi/tubkaek",
    title: "Tubkaek",
    description: "Tubkaek is Krabi's quieter west sand past Ao Nang. Phulay Bay sits on this coast. You will want a car. KBV is longer than the 20 to 40 minute Ao Nang hop.",
    lede: "Tubkaek is known for a quieter west-coast sand and the Phulay Bay resort, and it fits travellers who want fewer walking-street scooters than Ao Nang. You will still use Ao Nang or a hotel car for most boats.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Krabi", href: "/krabi" },
      { name: "Tubkaek", href: "/krabi/tubkaek" },
    ],
    facts: [
      { label: "Where", value: "West of Ao Nang, same mainland" },
      { label: "Resort", value: "Phulay Bay, a Ritz-Carlton Reserve" },
      { label: "Cars", value: "Needed for dinner and KBV" },
      { label: "Season", value: "November to April" },
    ],
    chips: [
      "Quiet west",
      "Phulay Bay",
      "Car pin",
    ],
    photo: "/photos/resort-phulay-bay.jpg",
    geo: { lat: 8.06, lon: 98.76, containedIn: "Krabi" },
    paragraphs: [
      "Tubkaek (Hat Tub Kaek) sits west of [Ao Nang](/krabi/ao-nang) on the mainland, and the sand is quieter. Menus are thinner, and [Phulay Bay](/resort-living/phulay-bay) is the flagship on this coast if the pavilion is the week. Railay is still a drive plus a longtail, not a walk.",
      "KBV is farther than the 20 to 40 minute Ao Nang hop, and budget a longer taxi than the 400 to 800 THB Ao Nang band. Book this beach if you want space and already accept a car, and first-timers who want a walking street should stay in Ao Nang.",
    ],
    sections: [
      {
        id: "use",
        title: "When Tubkaek is the right pin",
        bullets: [
          "**Yes:** A quiet sand, a resort week, sunset without walking-street scooters.",
          "**No:** A backpacker row, a same-morning Railay climb without a booked car.",
          "**Pair:** One Ao Nang dinner if you miss menus.",
        ],
      },
    ],
    portraits: [
      { title: "Phulay Bay", href: "/resort-living/phulay-bay", photo: "/photos/krabi.jpg" },
      { title: "Ao Nang", href: "/krabi/ao-nang", photo: "/photos/longtail-andaman.jpg" },
      { title: "Where to stay", href: "/krabi/where-to-stay", photo: "/photos/railay.jpg" },
      { title: "Best time", href: "/krabi/best-time-to-visit", photo: "/photos/tiger-cave.jpg" },
    ],
    affiliates: [
    stay("Tubkaek hotels", "Quiet sand", "Search Tubkaek if you want space west of Ao Nang.", stayAreaLink('tubkaek'), "/photos/krabi.jpg"),
    stay("Phulay Bay coast", "Resort week", "Use this when the pavilion is the stay, not the walking street.", stayLink('krabi'), "/photos/resort-six-senses-yao-noi.jpg"),
    ],
    faqs: [
      { q: "Tubkaek or Ao Nang?", a: "Ao Nang if you want dinner on foot. Tubkaek if you want a quieter sand and already have a car." },
      { q: "Is Phulay Bay on Railay?", a: "No. It is a mainland Tubkaek stay with a KBV car, not a longtail pocket." },
    ],
  },
  {
    path: "/koh-lanta/where-to-stay",
    title: "Where to stay on Koh Lanta",
    description: "Lanta stays run south from Saladan: Klong Dao for dinner, Klong Nin mid-island, Kantiang for a quieter bay. November to April is the useful sea.",
    lede: "Koh Lanta is known for a long west-coast hotel road rather than one village, so sleep Klong Dao if you want dinner and sleep farther south if you want a quieter bay. Name the beach before you search the island.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Lanta", href: "/koh-lanta" },
      { name: "Where to stay", href: "/koh-lanta/where-to-stay" },
    ],
    facts: [
      { label: "Pier", value: "Saladan" },
      { label: "Default", value: "Klong Dao and Long Beach" },
      { label: "Airport", value: "KBV, then van plus Hua Hin pier ferry (Krabi side)" },
      { label: "Season", value: "November to April" },
    ],
    chips: [
      "Name the beach",
      "Klong Dao first",
      "South for quiet",
    ],
    photo: "/photos/koh-lanta.jpg",
    geo: { lat: 7.624, lon: 99.042, containedIn: "Koh Lanta" },
    paragraphs: [
      "The west-coast road drops south from Saladan, and [Klong Dao](/koh-lanta/beaches) is the first useful sand: shallow water and dinner. Long Beach is next, and Klong Khong and Klong Nin sit mid-island. Kantiang and the far south are quieter and a longer transfer, and Saladan itself is a port town. Sleep on a beach if you can.",
      "Reach Lanta from KBV by van plus the car ferry from Hua Hin pier on the Krabi side (not the Hua Hin resort town), or by Saladan passenger boat from about November to April (about 2 to 2.5 hours). Those boats thin or stop May to October, and the road still works. Book a pickup, and pair with [Krabi to Koh Lanta](/get-there/krabi-to-koh-lanta).",
    ],
    sections: [
      {
        id: "areas",
        title: "Which beach fits which trip",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["Saladan","Late boats only","Port town, not a swim stay"],
            ["Klong Dao / Long Beach","First stays, dinner, families","Closest useful sand to the pier"],
            ["Klong Nin","Mid-island pause","Thinner menus"],
            ["Kantiang and south","Couples, quieter bay","Long transfer. Check wet-season opening."],
          ],
        },
      },
    ],
    portraits: [
      { title: "Lanta beaches", href: "/koh-lanta/beaches", photo: "/photos/longtail-andaman.jpg" },
      { title: "Best time", href: "/koh-lanta/best-time-to-visit", photo: "/photos/ferry-gulf.jpg" },
      { title: "Krabi stays", href: "/krabi/where-to-stay", photo: "/photos/krabi.jpg" },
      { title: "Krabi to Lanta", href: "/get-there/krabi-to-koh-lanta", photo: "/photos/koh-lipe.jpg" },
    ],
    affiliates: [
    stay("Koh Lanta stays", "Name the beach", "Klong Dao if you want dinner. Kantiang if you want the bay.", stayLink('koh-lanta'), "/photos/ferry-gulf.jpg"),
    stay("Klong Dao hotels", "North-west default", "Closest useful beach to Saladan.", stayAreaLink('klong-dao'), "/photos/longtail-andaman.jpg"),
    ],
    faqs: [
      { q: "Klong Dao or Kantiang?", a: "Klong Dao for a first stay and dinner. Kantiang if you want a quieter bay and accept the transfer." },
      { q: "Can you day-trip Lanta from Ao Nang?", a: "Do not. The transfer eats the morning. Sleep at least three nights." },
    ],
  },
  {
    path: "/koh-lanta/beaches",
    title: "Koh Lanta beaches",
    description: "Lanta's west-coast beaches run south from Saladan: Klong Dao, Long Beach, Klong Nin, then Kantiang. November to April is the swim window.",
    lede: "Koh Lanta beaches are known for a long west-facing road rather than one postcard cove. Klong Dao fits first nights, and the south fits travellers who want fewer scooters.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Lanta", href: "/koh-lanta" },
      { name: "Beaches", href: "/koh-lanta/beaches" },
    ],
    facts: [
      { label: "Order", value: "Saladan, then south down the west road" },
      { label: "Season", value: "November to April" },
      { label: "Move", value: "Scooter or hotel pickup; no useful bus" },
      { label: "East", value: "Lanta Old Town is a half-day walk" },
    ],
    chips: [
      "West-coast road",
      "Klong Dao first",
      "South quieter",
    ],
    photo: "/photos/longtail-andaman.jpg",
    geo: { lat: 7.624, lon: 99.042, containedIn: "Koh Lanta" },
    paragraphs: [
      "Start at Saladan and count beaches south; klong Dao is the shallow first sand. Long Beach continues the strip; klong Khong and Klong Nin break the build. Kantiang is the photogenic south bay; the east-coast Old Town is wood houses and a half day when the west swell is ugly.",
      "November to April is the swim, and May to October is chop and closed south resorts. A hotel pickup from Saladan to Kantiang can run 30 to 50 minutes, and see [where to stay](/koh-lanta/where-to-stay) before you rent a scooter you do not already ride.",
    ],
    sections: [
      {
        id: "strip",
        title: "West coast in order",
        bullets: [
          "**Klong Dao:** First nights, dinner, families.",
          "**Long Beach:** Next sand south. Walkable in places at low tide.",
          "**Klong Nin:** Mid-island pause.",
          "**Kantiang:** Quieter bay, longer transfer, national park nearby.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/koh-lanta/where-to-stay", photo: "/photos/koh-lanta.jpg" },
      { title: "Best time", href: "/koh-lanta/best-time-to-visit", photo: "/photos/ferry-gulf.jpg" },
      { title: "Krabi", href: "/krabi", photo: "/photos/krabi.jpg" },
      { title: "Koh Lipe", href: "/koh-lipe", photo: "/photos/koh-lipe.jpg" },
    ],
    affiliates: [
    stay("Sleep on the sand you will use", "Klong Dao or south", "Transfer time is the cost of a pretty bay.", stayLink('koh-lanta'), "/photos/koh-lanta.jpg"),
    klook("Rok and Haa boats", "Island hopping", "Morning boats in season only. The road is the monsoon backup.", klookIslandHopping('Koh Lanta'), "/photos/ferry-gulf.jpg"),
    ],
    faqs: [
      { q: "Which beach for a first stay?", a: "Klong Dao or Long Beach. Move south later if you want fewer scooters." },
      { q: "Do you need a scooter?", a: "Yes if you split beaches every day. No if you sleep Klong Dao and eat on that road. Helmets are not optional." },
    ],
  },
  {
    path: "/koh-lanta/best-time-to-visit",
    title: "Best time to visit Koh Lanta",
    description: "Lanta's useful sea is November to April. Saladan boats follow that window. May to October is the car ferry, chop, and closed south resorts.",
    lede: "Koh Lanta is known for an Andaman dry window from November to April, when Saladan boats and Rok days hold. May to October still works by road and the Hua Hin pier ferry on the Krabi side, with discounts and more cancelled island boats.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Lanta", href: "/koh-lanta" },
      { name: "Best time to visit", href: "/koh-lanta/best-time-to-visit" },
    ],
    facts: [
      { label: "Dry sea", value: "November to April" },
      { label: "Saladan boats", value: "Same window; thin or stop in the wet" },
      { label: "Backup", value: "Van plus Hua Hin pier ferry (Krabi side) all year" },
      { label: "South resorts", value: "Many close May to October" },
    ],
    chips: [
      "Nov to Apr",
      "Saladan in season",
      "Ferry backup",
    ],
    photo: "/photos/koh-lanta.jpg",
    geo: { lat: 7.624, lon: 99.042, containedIn: "Koh Lanta" },
    paragraphs: [
      "Lanta follows the Andaman calendar, not the Gulf; november to April is why you came. Saladan boats from Krabi Town and Ao Nang run in that window and take about 2 to 2.5 hours. May to October those boats fail first; the car ferry from Hua Hin pier on the Krabi side (not the Hua Hin resort town) still runs.",
      "Confirm the hotel is open before you take a green-season rate, and koh Rok and Koh Haa follow the same winter sea. If your dates are July, open [when to go](/plan/when-to-go), and pair with [Krabi season](/krabi/best-time-to-visit).",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Feb:** Dry, booked, the usual first Lanta week.",
          "**Mar to Apr:** Still useful. Hotter. Last reliable boat month.",
          "**May to Oct:** Road and ferry only. South resorts may be shut.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/koh-lanta/where-to-stay", photo: "/photos/ferry-gulf.jpg" },
      { title: "Beaches", href: "/koh-lanta/beaches", photo: "/photos/longtail-andaman.jpg" },
      { title: "Krabi to Lanta", href: "/get-there/krabi-to-koh-lanta", photo: "/photos/krabi.jpg" },
      { title: "When to go", href: "/plan/when-to-go", photo: "/photos/phuket.jpg" },
    ],
    affiliates: [
    stay("Lanta in the dry months", "Nov to Apr", "Lock Klong Dao before you book a Rok boat.", stayLink('koh-lanta'), "/photos/ferry-gulf.jpg"),
    klook("Season island days", "Tours", "Rok and Haa cancel first when the Andaman is up.", klookIslandHopping('Koh Lanta'), "/photos/longtail-andaman.jpg"),
    ],
    faqs: [
      { q: "Can you reach Lanta in August?", a: "Yes, by van and the car ferry. Passenger boats are the piece that fails. Confirm the hotel is open." },
      { q: "Lanta or Railay in November?", a: "Railay if the cliff pocket is the point. Lanta if you want a week of sand and a scooter." },
    ],
  },
  {
    path: "/koh-phi-phi/where-to-stay",
    title: "Where to stay on Phi Phi",
    description: "Phi Phi Don holds the rooms: Tonsai if the boat is the trip, Long Beach if you want sleep. Phi Phi Le is the park. Longtails are about 100 THB.",
    lede: "Phi Phi stays are known for a loud Tonsai village and a quieter Long Beach on Don, so overnight only if you want a second morning. Phi Phi Le is the park island, not a hotel.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Phi Phi", href: "/koh-phi-phi" },
      { name: "Where to stay", href: "/koh-phi-phi/where-to-stay" },
    ],
    facts: [
      { label: "Village", value: "Tonsai on Phi Phi Don" },
      { label: "Quiet sand", value: "Long Beach; longtail about 100 THB" },
      { label: "Park island", value: "Phi Phi Le has no hotel strip" },
      { label: "Season", value: "November to April" },
    ],
    chips: [
      "Don not Le",
      "Tonsai loud",
      "Long Beach quieter",
    ],
    photo: "/photos/tonsai.jpg",
    geo: { lat: 7.7407, lon: 98.7784, containedIn: "Koh Phi Phi" },
    paragraphs: [
      "Phi Phi Don holds the village, viewpoints, and rooms, and Phi Phi Le holds [Maya Bay](/koh-phi-phi/maya-bay), Pileh, and Viking Cave. Sleep on Don only if you want a second morning, and Tonsai is loud after 22:00. Long Beach is a longtail from Tonsai, about 100 THB a person, and quieter at night. Laem Tong is the far-north resort pin.",
      "There is no airport, and the only way on and off is a boat from Rassada or Klong Jilad. November to April is the window, and May to October is when boats cancel often and refunds get messy. A day trip from [Phuket](/phuket/phi-phi-and-phang-nga-boats) or [Krabi](/krabi/day-trips) covers Maya for most first trips.",
    ],
    sections: [
      {
        id: "areas",
        title: "Which pin on Don",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["Tonsai","People who want the boat and a late street","Noise after 22:00"],
            ["Long Beach","People who want sleep","Longtail about 100 THB"],
            ["Laem Tong","Resort week, farther north","Boat transfer, thinner village"],
            ["Phi Phi Le","Nobody overnight","Park island, timed bays"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Maya Bay", href: "/koh-phi-phi/maya-bay", photo: "/photos/phi-phi.jpg" },
      { title: "Getting around", href: "/koh-phi-phi/getting-around", photo: "/photos/long-beach-pp.jpg" },
      { title: "Phi Phi hub", href: "/koh-phi-phi", photo: "/photos/phi-phi-viewpoint.jpg" },
      { title: "Krabi stays", href: "/krabi/where-to-stay", photo: "/photos/krabi.jpg" },
    ],
    affiliates: [
    stay("Phi Phi Don rooms", "Tonsai or Long Beach", "Book Don only if the second morning is the point.", hotelSearchLink('Phi Phi', 'krabi'), "/photos/long-beach-pp.jpg"),
    stay("Krabi if you day-trip", "Ao Nang default", "Sleep mainland if Maya is one boat day, not a village week.", stayLink('krabi'), "/photos/phi-phi.jpg"),
    ],
    faqs: [
      { q: "Tonsai or Long Beach?", a: "Tonsai if the boat is the trip. Long Beach if you want sleep. The longtail is about 100 THB." },
      { q: "Can you sleep on Maya Bay?", a: "No. Phi Phi Le is a park island. Rooms are on Don." },
    ],
  },
  {
    path: "/koh-phi-phi/maya-bay",
    title: "Maya Bay",
    description: "Maya Bay is a timed park on Phi Phi Le. The fee is 400 THB. Swimming stays banned. Use Pileh. Boats cancel from May to October first.",
    lede: "Maya Bay is known for a 400 THB park visit with no swimming, and it fits a dry-season morning from Tonsai, Phuket, or Krabi. Swim at Pileh instead.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Phi Phi", href: "/koh-phi-phi" },
      { name: "Maya Bay", href: "/koh-phi-phi/maya-bay" },
    ],
    facts: [
      { label: "Park fee", value: "400 THB; often extra on the tour" },
      { label: "Swim", value: "Banned in Maya Bay; use Pileh" },
      { label: "Season", value: "November to April; cancel May to October" },
      { label: "Island", value: "Phi Phi Le, not the Don village" },
    ],
    chips: [
      "400 THB",
      "No swim",
      "Pileh instead",
    ],
    photo: "/photos/phi-phi.jpg",
    geo: { lat: 7.677, lon: 98.766, containedIn: "Koh Phi Phi" },
    paragraphs: [
      "Maya Bay sits on Phi Phi Le, the park island; timed entry and a 400 THB fee apply. The conservation rule still bans swimming in the bay; pileh Lagoon is the usual swim stop on the same loop. Viking Cave is a look, not a climb-through; read the board at the desk that morning.",
      "From Don, charter or join a 06:30 longtail if you already sleep in Tonsai, and from Phuket or Krabi, a day speedboat covers the loop. November to April is the window, and May to October boats cancel. Full ticket notes sit on [Phi Phi islands](/attractions/phi-phi-islands-and-maya-bay).",
    ],
    sections: [
      {
        id: "rules",
        title: "What the bay actually allows",
        bullets: [
          "**Fee:** 400 THB. Often not inside a cheap tour price.",
          "**Swim:** No in Maya Bay. Yes at Pileh unless the board says otherwise.",
          "**Time:** Morning slots beat the midday crush.",
          "**Sleep:** On Don, not on Le.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/koh-phi-phi/where-to-stay", photo: "/photos/tonsai.jpg" },
      { title: "Getting around", href: "/koh-phi-phi/getting-around", photo: "/photos/long-beach-pp.jpg" },
      { title: "Phuket boats", href: "/phuket/phi-phi-and-phang-nga-boats", photo: "/photos/longtail-andaman.jpg" },
      { title: "Attraction page", href: "/attractions/phi-phi-islands-and-maya-bay", photo: "/photos/viking-cave.jpg" },
    ],
    affiliates: [
    stay("Sleep on Don for a dawn boat", "Long Beach or Tonsai", "Only if a second morning is why you stayed.", hotelSearchLink('Phi Phi', 'krabi'), "/photos/tonsai.jpg"),
    klook("Maya Bay boats", "Tours", "Name the pier and the 400 THB line. Swim is at Pileh.", klookIslandHopping('Phi Phi Maya Bay'), "/photos/viking-cave.jpg"),
    ],
    faqs: [
      { q: "Can you swim in Maya Bay?", a: "No. The conservation rule still bans it. Use Pileh." },
      { q: "Is the 400 THB fee in the ticket?", a: "Often not. Read the inclusions. The park desk is the one that matters that morning." },
    ],
  },
  {
    path: "/koh-phi-phi/getting-around",
    title: "Getting around Phi Phi",
    description: "Phi Phi has no cars and no airport. Walk Tonsai, take a longtail to Long Beach for about 100 THB, and use morning boats off the island.",
    lede: "Phi Phi is known for walking and longtails rather than scooters, and Tonsai to Long Beach is about 100 THB. There is no airport, and boats cancel often from May to October.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Phi Phi", href: "/koh-phi-phi" },
      { name: "Getting around", href: "/koh-phi-phi/getting-around" },
    ],
    facts: [
      { label: "On island", value: "Walk or longtail; no cars" },
      { label: "Long Beach", value: "About 100 THB from Tonsai" },
      { label: "Airports", value: "HKT or KBV, then a boat" },
      { label: "Season", value: "Last boats move; cancel May to October" },
    ],
    chips: [
      "No cars",
      "Longtail 100 THB",
      "HKT or KBV boats",
    ],
    photo: "/photos/long-beach-pp.jpg",
    geo: { lat: 7.7407, lon: 98.7784, containedIn: "Koh Phi Phi" },
    paragraphs: [
      "On Don you walk; longtails are the taxi. Tonsai to Long Beach is about 100 THB a person; viewpoints above Tonsai sit in the 30 THB band if you start at 07:00. There are no cars and no useful scooters; bags move on a cart or a shoulder.",
      "Arrive from Rassada (Phuket) or Klong Jilad (Krabi), and speedboats are about 45 to 90 minutes in season. Last boats move with weather, and May to October cancels first. Maya loops leave Tonsai in the morning, and see [Maya Bay](/koh-phi-phi/maya-bay) and [Phuket to Krabi and Phi Phi](/get-there/phuket-to-krabi-phi-phi).",
    ],
    sections: [
      {
        id: "modes",
        title: "Which hop",
        bullets: [
          "**Walk:** Tonsai village and the viewpoints.",
          "**Longtail:** Long Beach about 100 THB. Maya at dawn if you already sleep here.",
          "**Speedboat in:** Rassada or Klong Jilad. Morning preferred.",
          "**Out:** Check the last boat the night before a flight.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/koh-phi-phi/where-to-stay", photo: "/photos/tonsai.jpg" },
      { title: "Maya Bay", href: "/koh-phi-phi/maya-bay", photo: "/photos/phi-phi.jpg" },
      { title: "Phuket boats", href: "/phuket/phi-phi-and-phang-nga-boats", photo: "/photos/longtail-andaman.jpg" },
      { title: "Krabi boats", href: "/get-there/phuket-to-krabi-phi-phi", photo: "/photos/krabi.jpg" },
    ],
    affiliates: [
    stay("Rooms on the beach you can walk", "Long Beach if you want sleep", "The 100 THB longtail is the nightly taxi.", hotelSearchLink('Phi Phi', 'krabi'), "/photos/phi-phi-viewpoint.jpg"),
    klook("Boats on and off Don", "Ferries", "Name the pier. Last boats move. May to October cancels first.", klookRailFerry('Phi Phi ferry'), "/photos/longtail-andaman.jpg"),
    ],
    faqs: [
      { q: "Are there cars on Phi Phi?", a: "No. Walk or take a longtail. Do not plan a Grab." },
      { q: "How do you reach Long Beach?", a: "A shared longtail from Tonsai is about 100 THB. Some people walk the rocks at low tide. Bags go by boat." },
    ],
  },
];
