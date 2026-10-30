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

export const WAVE22_GULF_NORTH_TITLE_CORE: Record<string, string> = {
  "/koh-samui/where-to-stay": "Where to Stay on Koh Samui: Chaweng to Bophut",
  "/koh-samui/getting-around": "Koh Samui Getting Around: Songthaews, USM Cars",
  "/koh-samui/best-time-to-visit": "Best Time to Visit Koh Samui: Jan to Sep 2026",
  "/koh-samui/day-trips": "Koh Samui Day Trips: Ang Thong Park and Phangan",
  "/koh-samui/bophut": "Bophut, Koh Samui: Fisherman Village Stays 2026",
  "/koh-samui/top-attractions": "Koh Samui Top Attractions: Park, Beaches, Boats",
  "/koh-phangan/where-to-stay": "Where to Stay on Koh Phangan: Bays vs Haad Rin",
  "/koh-phangan/haad-rin": "Haad Rin, Koh Phangan: Full Moon Beach Only 2026",
  "/koh-phangan/best-time-to-visit": "Best Time to Visit Koh Phangan: Jan to Sep 2026",
  "/koh-tao/where-to-stay": "Where to Stay on Koh Tao: Sairee, Mae Haad or Chalok",
  "/koh-tao/dive-sites": "Koh Tao Dive Sites: Open Water and Fun Dives 2026",
  "/koh-tao/best-time-to-visit": "Best Time to Visit Koh Tao: Jan to Sep Gulf 2026",
  "/chiang-mai/where-to-stay": "Where to Stay in Chiang Mai: Old City, Nimman",
  "/chiang-mai/getting-around": "Chiang Mai Getting Around: Songthaew, Grab, CNX",
  "/chiang-mai/best-time-to-visit": "Best Time to Visit Chiang Mai: Cool Months 2026",
  "/chiang-mai/day-trips": "Chiang Mai Day Trips: Suthep, Inthanon, Pai 2026",
  "/chiang-mai/top-attractions": "Chiang Mai Top Attractions: Wats, Suthep, Markets",
  "/chiang-mai/mae-rim": "Mae Rim, Chiang Mai: Valley Resorts and Day Trips",
  "/chiang-mai/night-markets": "Chiang Mai Night Markets: Sunday, Saturday, Night",
  "/chiang-mai/riverside-wat-ket": "Wat Ket Riverside Chiang Mai: Ping Bank Stays 2026",
  "/chiang-mai/hang-dong": "Hang Dong, Chiang Mai: Crafts, Baan Tawai, Stays",
};

export const wave22GulfNorthPages: Page[] = [
  {
    path: "/koh-samui/where-to-stay",
    title: "Where to stay on Koh Samui",
    description: "Pick a Samui coast before the brand: Chaweng for dinner and clubs, Lamai for a quieter east bay, Bophut for Fisherman Village nights.",
    lede: "Koh Samui is known for three hotel coasts rather than one downtown: Chaweng for dinner, Lamai or Bophut if you want a quieter night. Book the bay name, not a generic island pin.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Samui", href: "/koh-samui" },
      { name: "Where to stay", href: "/koh-samui/where-to-stay" },
    ],
    facts: [
      { label: "Default", value: "Chaweng for first nights" },
      { label: "Quieter east", value: "Lamai, 20 to 30 minutes from USM" },
      { label: "North", value: "Bophut and Maenam, 15 to 25 minutes" },
      { label: "Airport", value: "USM to Chaweng 10 to 20 minutes" },
    ],
    chips: [
      "Chaweng",
      "Lamai",
      "Bophut",
    ],
    photo: "/photos/koh-samui.jpg",
    geo: { lat: 9.512, lon: 100.013, containedIn: "Koh Samui" },
    paragraphs: [
      "Name the bay before the brand, and [Chaweng](/koh-samui/chaweng) is the first-timer strip: dinner, clubs, and a 10 to 20 minute ride from USM. [Lamai](/koh-samui/lamai) is the next east bay, quieter and a 20 to 30 minute car, and Bophut and Maenam sit north for Fisherman Village dinners. Northwest villas work when the hotel is the trip and you accept a 20 to 40 minute Grab for food.",
      "January to September is the easier Gulf sea, and book two nights on Trip.com near the bay you will actually walk, then move if [Koh Phangan](/koh-phangan) is next. Beach clubs sit on [Samui beach clubs](/interests/nightlife/koh-samui-beach-clubs), and do not rent a scooter from USM at night.",
    ],
    sections: [
      {
        id: "coasts",
        title: "Which coast fits which trip",
        table: {
          headers: ["Coast","Who it fits","2026 USM car"],
          rows: [
            ["Chaweng","Dinner, clubs, first nights","10 to 20 minutes"],
            ["Lamai","Quieter east sand","20 to 30 minutes"],
            ["Bophut and Maenam","Fisherman Village","15 to 25 minutes"],
            ["Northwest villas","When the hotel is the stay","20 to 40 minutes"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Chaweng", href: "/koh-samui/chaweng", photo: "/photos/chaweng.jpg" },
      { title: "Lamai", href: "/koh-samui/lamai", photo: "/photos/lamai.jpg" },
      { title: "Bophut", href: "/koh-samui/bophut", photo: "/photos/resort-six-senses-samui.jpg" },
      { title: "Getting around", href: "/koh-samui/getting-around", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Chaweng hotels", "First-timer default", "Search the east strip if you want dinner on foot.", stayAreaLink('chaweng'), "/photos/chaweng.jpg"),
    stay("Lamai hotels", "Quieter east", "Use this search if you want sand without the club road.", stayAreaLink('lamai'), "/photos/lamai.jpg"),
    ],
    faqs: [
      { q: "Chaweng or Bophut for two nights?", a: "Chaweng if you want dinner density. Bophut if Fisherman Village is the evening. Do not split one night each." },
      { q: "Do you need a villa on the first stay?", a: "No. Lock Chaweng or Lamai, then add a northwest villa only if the hotel is the point." },
    ],
  },
  {
    path: "/koh-samui/getting-around",
    title: "Getting around Koh Samui",
    description: "Samui moves by songthaew, Grab, and a named pier. USM to Chaweng is 10 to 20 minutes. Lomprayah from Bangrak or Maenam to Thong Sala is about 30 minutes.",
    lede: "Koh Samui is known for short airport hops and named boat piers rather than a rail grid, so sleep near the bay you will walk. Use a car after dark instead of a first-week scooter on the hills.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Samui", href: "/koh-samui" },
      { name: "Getting around", href: "/koh-samui/getting-around" },
    ],
    facts: [
      { label: "USM", value: "10 to 20 minutes to Chaweng" },
      { label: "Lomprayah", value: "Bangrak or Maenam to Thong Sala about 30 minutes" },
      { label: "Seatran", value: "About 45 minutes to Thong Sala" },
      { label: "Island hop", value: "Songthaew or Grab; agree the fare" },
    ],
    chips: [
      "USM cars",
      "Songthaews",
      "Named piers",
    ],
    photo: "/photos/ferry-gulf.jpg",
    geo: { lat: 9.512, lon: 100.013, containedIn: "Koh Samui" },
    paragraphs: [
      "USM to [Chaweng](/koh-samui/chaweng) is 10 to 20 minutes by car, and Bophut and Maenam run 15 to 25. [Lamai](/koh-samui/lamai) is 20 to 30, and there is no useful songthaew from the terminal; book a Trip.com car or use the taxi board. Daytime songthaews link the east-coast road, and agree the fare before you climb in.",
      "Boats to [Koh Phangan](/koh-phangan) leave named piers, and Lomprayah from Bangrak or Maenam to Thong Sala is about 30 minutes. Seatran is about 45, and a ticket that says Samui without a pier is not finished. Pair this page with [Bangkok to Koh Samui](/get-there/bangkok-to-koh-samui), and skip a rented scooter on the first night.",
    ],
    sections: [
      {
        id: "modes",
        title: "Which hop for which job",
        bullets: [
          "**USM car:** First bags. Chaweng is 10 to 20 minutes.",
          "**Songthaew:** East-coast day hops if you agree the fare.",
          "**Grab:** After dark and luggage.",
          "**Lomprayah:** Bangrak or Maenam to Thong Sala, about 30 minutes.",
          "**Seatran:** About 45 minutes if the catamaran is sold out.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/koh-samui/where-to-stay", photo: "/photos/koh-samui.jpg" },
      { title: "Chaweng", href: "/koh-samui/chaweng", photo: "/photos/chaweng.jpg" },
      { title: "Koh Phangan", href: "/koh-phangan", photo: "/photos/koh-phangan.jpg" },
      { title: "Bangkok to Samui", href: "/get-there/bangkok-to-koh-samui", photo: "/photos/koh-samui.jpg" },
    ],
    affiliates: [
    stay("Sleep near the bay you walk", "Chaweng or Lamai", "A late cross-island Grab is the real cost of the wrong pin.", stayLink('koh-samui'), "/photos/chaweng.jpg"),
    {
      title: "USM airport cars",
      kicker: "Transfers",
      body: "Book the short hop if you land with bags after dark.",
      href: transferLink('USM'),
      cta: 'Book transfer',
      photo: "/photos/koh-samui.jpg",
      partner: 'transfer',
    },
    ],
    faqs: [
      { q: "Bangrak or Maenam for Lomprayah?", a: "Both run to Thong Sala in about 30 minutes. Write the pier on the ticket. Seatran is the 45-minute backup." },
      { q: "Can you scooter from USM at night?", a: "No. Book a car. Learn the ring road in daylight if you already ride." },
    ],
  },
  {
    path: "/koh-samui/best-time-to-visit",
    title: "Best time to visit Koh Samui",
    description: "Koh Samui is easier January to September. October to December takes east-coast swell. Keep an Andaman boat plan off that same first week.",
    lede: "Koh Samui is known for a January to September Gulf sea that fits a first beach week, while October to December is wetter on the east coast. Keep Phuket boats off that same first week so you are not mixing two monsoons.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Samui", href: "/koh-samui" },
      { name: "Best time to visit", href: "/koh-samui/best-time-to-visit" },
    ],
    facts: [
      { label: "Easier sea", value: "January to September" },
      { label: "Messy Gulf", value: "October to December" },
      { label: "Andaman flip", value: "November to April is the other coast" },
      { label: "USM hop", value: "10 to 20 minutes to Chaweng any month" },
    ],
    chips: [
      "Jan to Sep",
      "Oct to Dec swell",
      "One coast first",
    ],
    photo: "/photos/lamai.jpg",
    geo: { lat: 9.512, lon: 100.013, containedIn: "Koh Samui" },
    paragraphs: [
      "The Lower Gulf is easier January to September, and that is the Samui, Phangan, and Tao window. October to December brings wind and cancelled [Ang Thong](/koh-samui/ang-thong-marine-park) days, and the Andaman (Phuket, Krabi) is the opposite winter: November to April. Do not put both coasts on a first week.",
      "USM to Chaweng is still 10 to 20 minutes in rain. Book rooms on [where to stay](/koh-samui/where-to-stay) before you lock a boat. Pair this page with [when to go](/plan/when-to-go) if the calendar is the only open question.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Jan to Apr:** Dry overlap with the Andaman. Pick one sea.",
          "**May to Sep:** Gulf still works while Andaman boats cancel.",
          "**Oct to Dec:** Swell, park closures, and more boat delays.",
        ],
      },
    ],
    portraits: [
      { title: "When to go", href: "/plan/when-to-go", photo: "/photos/koh-samui.jpg" },
      { title: "Where to stay", href: "/koh-samui/where-to-stay", photo: "/photos/chaweng.jpg" },
      { title: "Day trips", href: "/koh-samui/day-trips", photo: "/photos/ang-thong.jpg" },
      { title: "Koh Phangan", href: "/koh-phangan", photo: "/photos/koh-phangan.jpg" },
    ],
    affiliates: [
    stay("Samui in the Gulf window", "Jan to Sep", "Lock two Chaweng or Lamai nights before the boat search.", stayLink('koh-samui'), "/photos/chaweng.jpg"),
    klook("Ang Thong in season", "Tours", "The park fee is 300 THB. There is no public ferry.", klookIslandHopping('Ang Thong Marine Park'), "/photos/ang-thong.jpg"),
    ],
    faqs: [
      { q: "Is August a bad Samui month?", a: "No. August is a Gulf month. It is a bad Andaman boat month." },
      { q: "Can you do Phuket and Samui in seven days?", a: "You can fly it. You will spend the week in terminals. Pick one coast." },
    ],
  },
  {
    path: "/koh-samui/day-trips",
    title: "Koh Samui day trips",
    description: "Samui day trips: Ang Thong at 300 THB with no public ferry, plus the 30-minute Lomprayah hop to Thong Sala if you want one Phangan bay.",
    lede: "Samui day trips are known for Ang Thong limestone and one Phangan boat, and they fit a spare weekday. Keep the marine park and a Tao dive hop on separate days.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Samui", href: "/koh-samui" },
      { name: "Day trips", href: "/koh-samui/day-trips" },
    ],
    facts: [
      { label: "Ang Thong", value: "300 THB foreigners; no public ferry" },
      { label: "Lomprayah", value: "About 30 minutes to Thong Sala" },
      { label: "Seatran", value: "About 45 minutes" },
      { label: "Tao", value: "Overnight if diving is the point" },
    ],
    chips: [
      "Ang Thong",
      "Phangan hop",
      "One spare day",
    ],
    photo: "/photos/ang-thong.jpg",
    geo: { lat: 9.512, lon: 100.013, containedIn: "Koh Samui" },
    paragraphs: [
      "[Ang Thong Marine Park](/koh-samui/ang-thong-marine-park) is the usual spare-day boat: 300 THB cash for foreigners, no public ferry, tours from Nathon or Bophut. The park closes 1 November to 15 December. [Koh Phangan](/koh-phangan) is a 30-minute Lomprayah from Bangrak or Maenam, or about 45 minutes on Seatran. Sleep on Samui unless the bay is the next stay.",
      "Do not book Ang Thong and a [Koh Tao](/koh-tao) boat on the same morning, and a 2026 licensed park day often sits above the 300 THB gate. See [Bangkok to Koh Samui](/get-there/bangkok-to-koh-samui) if you still need the flight, and write tomorrow's pier before you drink.",
    ],
    sections: [
      {
        id: "picks",
        title: "Pick one spare day",
        table: {
          headers: ["Trip","Clock","Sleep after"],
          rows: [
            ["Ang Thong park","Full boat day; 300 THB gate","Samui"],
            ["Thong Sala hop","Lomprayah about 30 minutes","Samui or a Phangan bay"],
            ["Haad Rin day","Only around Full Moon","Not a default"],
            ["Koh Tao","1.5 to 2 hours via Phangan","Tao overnight"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Ang Thong", href: "/koh-samui/ang-thong-marine-park", photo: "/photos/ang-thong.jpg" },
      { title: "Koh Phangan", href: "/koh-phangan", photo: "/photos/koh-phangan.jpg" },
      { title: "Koh Tao", href: "/koh-tao", photo: "/photos/koh-tao.jpg" },
      { title: "Getting around", href: "/koh-samui/getting-around", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Keep the Samui base", "Two-night lock", "Day-trip Ang Thong. Overnight Phangan only if the bay is the point.", stayLink('koh-samui'), "/photos/koh-phangan.jpg"),
    klook("Park and ferry desks", "Tours", "Read whether the 300 THB park fee sits in the price.", klookTours('Ang Thong Koh Samui'), "/photos/ferry-gulf.jpg"),
    ],
    faqs: [
      { q: "Ang Thong as a day trip or overnight?", a: "Day trip. Park bungalows exist, but most people sleep on Samui." },
      { q: "Can you add Tao to an Ang Thong day?", a: "No. Different boats, different lunch. Tao is an overnight if you dive." },
    ],
  },
  {
    path: "/koh-samui/bophut",
    title: "Bophut",
    description: "Bophut is Samui's north-coast Fisherman Village: Friday walking street, quieter nights than Chaweng, and a 15 to 25 minute ride from USM.",
    lede: "Bophut is known for Fisherman Village and a calmer north-coast night, and it fits travellers who want dinner without the Chaweng road. Stay here if the village is the evening.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Samui", href: "/koh-samui" },
      { name: "Bophut", href: "/koh-samui/bophut" },
    ],
    facts: [
      { label: "Airport", value: "USM 15 to 25 minutes" },
      { label: "Friday", value: "Fisherman Village walking street from about 17:00" },
      { label: "Boat", value: "Maenam and Bangrak piers for Lomprayah" },
      { label: "Night", value: "Quieter than Chaweng; see Bophut and Lamai bars" },
    ],
    chips: [
      "Fisherman Village",
      "North coast",
      "Friday market",
    ],
    photo: "/photos/resort-six-senses-samui.jpg",
    geo: { lat: 9.56, lon: 100.03, containedIn: "Koh Samui" },
    paragraphs: [
      "Bophut is the north-coast village stay, and USM is 15 to 25 minutes. Friday walking street is the weekly grid; go if you already sleep here, not as a cross-island plan from [Chaweng](/koh-samui/chaweng). Maenam next door shares the quieter night and a Lomprayah pier, and six Senses sits on the Bophut headland when the villa is the trip.",
      "A 2026 Grab to Chaweng is often 200 to 400 THB and 20 to 40 minutes. Use [Bophut and Lamai nights](/interests/nightlife/samui-bophut-lamai) if you want one late street without the east-coast club row. Book the room with a Bophut keyword, not a generic Samui pin.",
    ],
    sections: [
      {
        id: "use",
        title: "When Bophut is the right pin",
        bullets: [
          "**Yes:** Fisherman Village dinners, a north-coast swim, a morning boat from Maenam or Bangrak.",
          "**No:** A two-night club week. Sleep Chaweng.",
          "**Pair:** [Lamai](/koh-samui/lamai) if you want the other quiet east bay instead.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/koh-samui/where-to-stay", photo: "/photos/koh-samui.jpg" },
      { title: "Chaweng", href: "/koh-samui/chaweng", photo: "/photos/chaweng.jpg" },
      { title: "Bophut and Lamai nights", href: "/interests/nightlife/samui-bophut-lamai", photo: "/photos/lamai.jpg" },
      { title: "Getting around", href: "/koh-samui/getting-around", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Bophut hotels", "Fisherman Village", "Search Bophut if the village walk is the evening.", hotelSearchLink('Bophut', 'koh-samui'), "/photos/lamai.jpg"),
    stay("Samui citywide", "Compare coasts", "Keep Chaweng in the tab if dinner density still wins.", stayLink('koh-samui'), "/photos/resort-four-seasons-koh-samui.jpg"),
    ],
    faqs: [
      { q: "Bophut or Chaweng for a first stay?", a: "Chaweng if you want clubs. Bophut if you want the village and a quieter night." },
      { q: "Is Friday walking street enough reason to hotel here?", a: "No. Hotel here if you like the bay. The market is one evening." },
    ],
  },
  {
    path: "/koh-samui/top-attractions",
    title: "Koh Samui top attractions",
    description: "Koh Samui sights: Chaweng and Lamai for sand, Ang Thong at 300 THB with no public ferry, and a named pier if you hop to Koh Phangan.",
    lede: "Samui attractions are known for one east-coast swim and one boat day: Ang Thong is 300 THB and Chaweng is the default sand. Phangan is a 30-minute hop if you want it, not a required add.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Samui", href: "/koh-samui" },
      { name: "Top attractions", href: "/koh-samui/top-attractions" },
    ],
    facts: [
      { label: "Ang Thong", value: "300 THB; no public ferry" },
      { label: "Chaweng", value: "6 km east-coast strip; USM 10 to 20 minutes" },
      { label: "Lamai", value: "Hin Ta Hin Yai; Sunday walking street" },
      { label: "Phangan boat", value: "Lomprayah about 30 minutes" },
    ],
    chips: [
      "East-coast sand",
      "Ang Thong",
      "One boat day",
    ],
    photo: "/photos/chaweng.jpg",
    geo: { lat: 9.512, lon: 100.013, containedIn: "Koh Samui" },
    paragraphs: [
      "Start with the bay you booked, and [Chaweng](/koh-samui/chaweng) is the reef-protected swim and the dinner road. [Lamai](/koh-samui/lamai) adds Hin Ta Hin Yai and a Sunday walking street, and [Ang Thong](/koh-samui/ang-thong-marine-park) is the limestone day: 300 THB cash, no public ferry. Do not add a [Koh Tao](/koh-tao) boat the same morning.",
      "Lomprayah from Bangrak or Maenam to Thong Sala is about 30 minutes if [Koh Phangan](/koh-phangan) is the next pin. Beach clubs sit on [Samui beach clubs](/interests/nightlife/koh-samui-beach-clubs), and a Big Buddha stop is a short north-coast add, not a half-day. Sleep stays on [where to stay](/koh-samui/where-to-stay).",
    ],
    sections: [
      {
        id: "board",
        title: "2026 ticket and boat board",
        table: {
          headers: ["Sight","Foreign cost","Pair with"],
          rows: [
            ["Ang Thong","300 THB cash","One boat day"],
            ["Chaweng swim","Free beach","First-timer default"],
            ["Lamai rocks","Free stop","Sunday market"],
            ["Thong Sala hop","Lomprayah seat","About 30 minutes"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Ang Thong", href: "/koh-samui/ang-thong-marine-park", photo: "/photos/ang-thong.jpg" },
      { title: "Chaweng", href: "/koh-samui/chaweng", photo: "/photos/chaweng-night.jpg" },
      { title: "Lamai", href: "/koh-samui/lamai", photo: "/photos/lamai.jpg" },
      { title: "Day trips", href: "/koh-samui/day-trips", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Sleep on the east coast", "Chaweng or Lamai", "Walk to sand. Boat days start from a named pickup.", stayAreaLink('chaweng'), "/photos/ang-thong.jpg"),
    klook("Park boats", "Tickets", "Ask if the 300 THB Ang Thong fee is extra.", klookTickets('Ang Thong Marine Park'), "/photos/lamai.jpg"),
    ],
    faqs: [
      { q: "Is Big Buddha worth a morning?", a: "It is a short stop on the north coast. Do not build a day around it." },
      { q: "Ang Thong or Phangan for one spare day?", a: "Ang Thong if you want a park boat. Phangan if you want a bay overnight." },
    ],
  },
  {
    path: "/koh-phangan/where-to-stay",
    title: "Where to stay on Koh Phangan",
    description: "Phangan stays split by bay: west and north for sleep, Haad Rin only if Full Moon is the trip. Thong Sala is the ferry town, not a beach week.",
    lede: "Koh Phangan is known for west and north bays rather than one party hotel, so sleep Srithanu or Thong Nai Pan for quiet. Stay at Haad Rin only if the Full Moon Party is why you came.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Phangan", href: "/koh-phangan" },
      { name: "Where to stay", href: "/koh-phangan/where-to-stay" },
    ],
    facts: [
      { label: "Default", value: "West coast or Thong Nai Pan" },
      { label: "Party", value: "Haad Rin is where the Full Moon Party is held" },
      { label: "Boat", value: "Lomprayah about 30 minutes from Samui" },
      { label: "Seatran", value: "About 45 minutes to Thong Sala" },
    ],
    chips: [
      "West bays",
      "Thong Nai Pan",
      "Haad Rin optional",
    ],
    photo: "/photos/koh-phangan.jpg",
    geo: { lat: 9.731, lon: 100.013, containedIn: "Koh Phangan" },
    paragraphs: [
      "Name the bay, and srithanu and the west coast are the usual first stay. Thong Nai Pan is the north-east sand and a longer ride from Thong Sala, and haad Rin is [Full Moon](/koh-phangan/haad-rin), not a default base. Thong Sala is the ferry town, and Lomprayah from Bangrak or Maenam on [Koh Samui](/koh-samui) is about 30 minutes. Seatran is about 45.",
      "Scooter roads are steep and sandy, and a 2026 scooter day is often 200 to 300 THB and rental insurance often excludes scooter accidents. Book the room by bay name on Trip.com, and January to September is the easier Gulf sea. [Koh Tao](/koh-tao) is a further boat if diving is the point.",
    ],
    sections: [
      {
        id: "bays",
        title: "Which bay fits which trip",
        table: {
          headers: ["Bay","Who it fits","2026 note"],
          rows: [
            ["West / Srithanu","Quieter first stay","Sunsets; scooter hills"],
            ["Thong Nai Pan","North-east sand","Longer from Thong Sala"],
            ["Haad Rin","Full Moon only","Skip if you want sleep"],
            ["Thong Sala","Ferry night","Logistics, not a beach week"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Haad Rin", href: "/koh-phangan/haad-rin", photo: "/photos/chaweng-night.jpg" },
      { title: "Koh Samui", href: "/koh-samui", photo: "/photos/koh-samui.jpg" },
      { title: "Koh Tao", href: "/koh-tao", photo: "/photos/koh-tao.jpg" },
      { title: "Best time", href: "/koh-phangan/best-time-to-visit", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Phangan stays", "Filter by bay", "Skip Haad Rin unless Full Moon is why you came.", stayLink('koh-phangan'), "/photos/ferry-gulf.jpg"),
    stay("Haad Rin rooms", "Party week only", "Search Haad Rin if that night is the trip.", hotelSearchLink('Haad Rin', 'koh-phangan'), "/photos/chaweng-night.jpg"),
    ],
    faqs: [
      { q: "Do you need a Samui hotel as well?", a: "One night on Samui is enough if you fly USM. Stay on Phangan if the bay is the point." },
      { q: "Is Haad Rin a good three-night base?", a: "Only in party week. The rest of the island is the west and north bays." },
    ],
  },
  {
    path: "/koh-phangan/haad-rin",
    title: "Haad Rin",
    description: "Haad Rin is the Full Moon beach on Koh Phangan, not a default island base. Book it for party week. Sleep west or north if you want a quiet bay.",
    lede: "Haad Rin is known for the Full Moon Party, not for a quiet Phangan week, and it fits planners who came for that night. Sleep west or north if you want a bay.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Phangan", href: "/koh-phangan" },
      { name: "Haad Rin", href: "/koh-phangan/haad-rin" },
    ],
    facts: [
      { label: "Product", value: "Full Moon beach, not the whole island" },
      { label: "Boat", value: "Haad Rin boats are a different pier on party week" },
      { label: "From Samui", value: "Lomprayah to Thong Sala about 30 minutes, then a road" },
      { label: "Default stay", value: "West or north bays instead" },
    ],
    chips: [
      "Full Moon only",
      "Not a default base",
      "Separate pier week",
    ],
    photo: "/photos/chaweng-night.jpg",
    geo: { lat: 9.68, lon: 100.08, containedIn: "Koh Phangan" },
    paragraphs: [
      "Haad Rin is one beach on the south-east tip, and that is where the Full Moon Party is held. The rest of [Koh Phangan](/koh-phangan) ignores it, and party-week boats may drop at Haad Rin instead of Thong Sala. Read the ticket. A normal Lomprayah from Bangrak or Maenam still lands at Thong Sala in about 30 minutes, then you road across.",
      "Rooms sell out around the moon, and a 2026 seat Samui to Thong Sala is often 400 to 700 THB. If you want sleep, open [where to stay](/koh-phangan/where-to-stay) and pick Srithanu or Thong Nai Pan, and do not book a yoga week next to Haad Rin in party week.",
    ],
    sections: [
      {
        id: "use",
        title: "When this beach is the right pin",
        bullets: [
          "**Yes:** Full Moon is why you flew. You accept noise and a packed boat.",
          "**No:** A first Phangan week of bays and sunsets.",
          "**Pair:** One recovery night on the west coast, not a second Haad Rin dawn.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/koh-phangan/where-to-stay", photo: "/photos/koh-phangan.jpg" },
      { title: "Koh Phangan", href: "/koh-phangan", photo: "/photos/koh-samui.jpg" },
      { title: "Koh Samui", href: "/koh-samui", photo: "/photos/chaweng.jpg" },
      { title: "Best time", href: "/koh-phangan/best-time-to-visit", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Haad Rin hotels", "Party week", "Search Haad Rin only if that night is the stay.", hotelSearchLink('Haad Rin', 'koh-phangan'), "/photos/koh-phangan.jpg"),
    klook("Full Moon week boats", "Rail and ferry", "Samui-Phangan seats sell out. Book the afternoon before.", klookRailFerry('Koh Phangan ferry'), "/photos/ferry-gulf.jpg"),
    ],
    faqs: [
      { q: "Is Full Moon required on Phangan?", a: "No. Most of the island ignores it. Book Haad Rin only if that night is why you came." },
      { q: "Can you day-trip Full Moon from Samui?", a: "People do. The last boat is the risk. Sleep on the island if the party is the trip." },
    ],
  },
  {
    path: "/koh-phangan/best-time-to-visit",
    title: "Best time to visit Koh Phangan",
    description: "Koh Phangan is easier January to September, like Samui. October to December is wetter. The Full Moon Party is always held at Haad Rin.",
    lede: "Koh Phangan is known for a January to September Gulf sea that fits a bay week, while October to December is wetter and boats cancel more. The Full Moon Party happens at Haad Rin, so it is not a reason to pick your travel month.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Phangan", href: "/koh-phangan" },
      { name: "Best time to visit", href: "/koh-phangan/best-time-to-visit" },
    ],
    facts: [
      { label: "Easier sea", value: "January to September" },
      { label: "Messy Gulf", value: "October to December" },
      { label: "Boat", value: "Lomprayah about 30 minutes from Samui" },
      { label: "Party", value: "Full Moon is Haad Rin, any month it falls" },
    ],
    chips: [
      "Jan to Sep",
      "Gulf calendar",
      "Moon is optional",
    ],
    photo: "/photos/ferry-gulf.jpg",
    geo: { lat: 9.731, lon: 100.013, containedIn: "Koh Phangan" },
    paragraphs: [
      "Use the same Gulf calendar as [Koh Samui](/koh-samui): January to September, and October to December is wetter and boats cancel more. The Andaman winter (November to April) is a different first week, and keep Phuket and Phangan off the same first seven days.",
      "Full Moon can fall in any month, and it does not make October a dry month. Lomprayah from Bangrak or Maenam is still about 30 minutes when it sails, and Seatran is about 45. Book [Haad Rin](/koh-phangan/haad-rin) only if that night is the trip.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Jan to Sep:** Bay swims and steadier boats.",
          "**Oct to Dec:** More swell. Keep a buffer before USM.",
          "**Full Moon week:** Haad Rin rooms and boat seats sell out around Full Moon.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/koh-phangan/where-to-stay", photo: "/photos/koh-phangan.jpg" },
      { title: "Haad Rin", href: "/koh-phangan/haad-rin", photo: "/photos/chaweng-night.jpg" },
      { title: "When to go", href: "/plan/when-to-go", photo: "/photos/koh-samui.jpg" },
      { title: "Koh Tao", href: "/koh-tao", photo: "/photos/koh-tao.jpg" },
    ],
    affiliates: [
    stay("Phangan in the Gulf window", "Jan to Sep", "Lock a west or north bay before you chase a moon date.", stayLink('koh-phangan'), "/photos/koh-phangan.jpg"),
    klook("Boat seats", "Rail and ferry", "Book Lomprayah the afternoon before, not at the pier in a swell.", klookRailFerry('Lomprayah Koh Phangan'), "/photos/koh-tao.jpg"),
    ],
    faqs: [
      { q: "Is August good for Phangan?", a: "Yes for the Gulf sea. Full Moon is a separate calendar." },
      { q: "Should you skip October?", a: "Skip if you need a guaranteed boat. Keep it if you have buffer nights." },
    ],
  },
  {
    path: "/koh-tao/where-to-stay",
    title: "Where to stay on Koh Tao",
    description: "Koh Tao stays split Sairee for the strip, Mae Haad for the pier, and Chalok Baan Kao for a quieter south bay. Pay 20 THB at Mae Haad.",
    lede: "Koh Tao is known for dive-week hotels rather than a second Full Moon, so sleep Sairee for dinner, Mae Haad for the pier, or Chalok for a quieter south bay. Pay the 20 THB environmental fee at Mae Haad.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Tao", href: "/koh-tao" },
      { name: "Where to stay", href: "/koh-tao/where-to-stay" },
    ],
    facts: [
      { label: "Arrival", value: "20 THB environmental charge at Mae Haad" },
      { label: "Default", value: "Sairee for the strip" },
      { label: "Pier", value: "Mae Haad if the 07:00 boat matters" },
      { label: "South", value: "Chalok Baan Kao for a quieter bay" },
    ],
    chips: [
      "Sairee",
      "Mae Haad",
      "Chalok",
    ],
    photo: "/photos/koh-tao.jpg",
    geo: { lat: 10.096, lon: 99.838, containedIn: "Koh Tao" },
    paragraphs: [
      "Everyone lands at Mae Haad and pays 20 THB, and songthaews to Sairee or Chalok cost more than the fee; agree the fare. [Sairee](/koh-tao) is the dinner strip and the usual first pin, and mae Haad is practical if the boat is at 07:00. Chalok Baan Kao is the south quiet, and east coves need a booked pickup.",
      "January to September is the easier Gulf sea, and there is no airport. Fly [USM](/get-there/bangkok-to-koh-samui) then boat via [Koh Phangan](/koh-phangan), or use the Chumphon catamaran, and book the room by bay on Trip.com. Do not add Tao on a first week unless the Open Water card is the trip.",
    ],
    sections: [
      {
        id: "bays",
        title: "Sairee vs Chalok vs the pier",
        table: {
          headers: ["Bay","Who it fits","Trade-off"],
          rows: [
            ["Sairee","Dinner, bars, long sand","Loudest road"],
            ["Mae Haad","Divers who walk to the boat","Village, not a postcard"],
            ["Chalok Baan Kao","Quieter south","Farther from most shops"],
            ["East coves","Repeat visitors","Steep roads, thin food"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Koh Tao", href: "/koh-tao", photo: "/photos/koh-tao.jpg" },
      { title: "Dive sites", href: "/koh-tao/dive-sites", photo: "/photos/ferry-gulf.jpg" },
      { title: "Koh Phangan", href: "/koh-phangan", photo: "/photos/koh-phangan.jpg" },
      { title: "Best time", href: "/koh-tao/best-time-to-visit", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Sairee hotels", "West-coast default", "Walk to dinner. Hear the road.", stayAreaLink('sairee'), "/photos/ferry-gulf.jpg"),
    stay("Koh Tao stays", "Filter by bay", "Mae Haad if the pier is the plan. Chalok if you want the south.", stayLink('koh-tao'), "/photos/koh-phangan.jpg"),
    ],
    faqs: [
      { q: "Sairee or Chalok for a first course?", a: "Sairee if the shop is on the strip. Chalok if you want a quieter night and a pickup." },
      { q: "Is the 20 THB fee per stay?", a: "It is collected on arrival at Mae Haad. Songthaews are extra." },
    ],
  },
  {
    path: "/koh-tao/dive-sites",
    title: "Koh Tao dive sites",
    description: "Koh Tao dive sites sit around a PADI week: Open Water is 9,500 to 12,000 THB for 3 to 4 days. Sleep Sairee or Mae Haad near the shop.",
    lede: "Koh Tao dive sites are known for affordable Open Water weeks rather than a second Full Moon, and a 2026 course is often 9,500 to 12,000 THB. Sleep Sairee or Mae Haad near the shop.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Tao", href: "/koh-tao" },
      { name: "Dive sites", href: "/koh-tao/dive-sites" },
    ],
    facts: [
      { label: "Open Water", value: "9,500 to 12,000 THB; 3 to 4 days" },
      { label: "Viz window", value: "Easier March to September" },
      { label: "Arrival", value: "20 THB at Mae Haad" },
      { label: "Stay split", value: "Sairee strip vs Chalok south" },
    ],
    chips: [
      "PADI week",
      "Sairee shops",
      "Gulf viz",
    ],
    photo: "/photos/ferry-gulf.jpg",
    geo: { lat: 10.096, lon: 99.838, containedIn: "Koh Tao" },
    paragraphs: [
      "Tao is priced around a first cert; open Water runs 9,500 to 12,000 THB for 3 to 4 days. Fun dives sit on the same west-coast shops; sleep Sairee if the classroom is on the strip. Sleep Mae Haad if you want a two-minute walk to the boat; chalok is quieter and farther from most morning check-ins.",
      "Pay 20 THB at Mae Haad, and visibility is easier March to September. October to December cancels first, and see [diving](/interests/diving-and-snorkeling) for the national split. Keep a Similan liveaboard off that same first week, and boats from [Koh Phangan](/koh-phangan) take about 1 to 1.5 hours.",
    ],
    sections: [
      {
        id: "week",
        title: "A workable course week",
        bullets: [
          "**Days 1 to 4:** Pool and boat. Keep evenings short.",
          "**Stay:** Sairee or Mae Haad. Chalok needs a pickup.",
          "**Buffer:** One spare night before an international flight.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/koh-tao/where-to-stay", photo: "/photos/koh-tao.jpg" },
      { title: "Koh Tao", href: "/koh-tao", photo: "/photos/koh-tao.jpg" },
      { title: "Diving hub", href: "/interests/diving-and-snorkeling", photo: "/photos/koh-tao.jpg" },
      { title: "Best time", href: "/koh-tao/best-time-to-visit", photo: "/photos/koh-samui.jpg" },
    ],
    affiliates: [
    stay("Sleep next to the shop", "Sairee", "Walk to the briefing. Mae Haad if the 07:00 boat is the point.", stayAreaLink('sairee'), "/photos/koh-tao.jpg"),
    klook("Open Water and fun dives", "Tours", "Confirm the shop still sails that morning.", klookTours('Koh Tao diving'), "/photos/koh-samui.jpg"),
    ],
    faqs: [
      { q: "Is Tao worth it if you do not dive?", a: "Usually no. Pick Phangan or Samui if you want a bay without a regulator." },
      { q: "Sairee or Chalok for the course?", a: "Sairee for the shop walk. Chalok if you accept a daily pickup." },
    ],
  },
  {
    path: "/koh-tao/best-time-to-visit",
    title: "Best time to visit Koh Tao",
    description: "Koh Tao is easier January to September. October to December cancels boats first. Do not combine a Tao course with an Andaman first week.",
    lede: "Koh Tao is known for a January to September dive window that fits an Open Water week, while October to December cancels boats first. Keep an Andaman liveaboard off that same first week.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Koh Tao", href: "/koh-tao" },
      { name: "Best time to visit", href: "/koh-tao/best-time-to-visit" },
    ],
    facts: [
      { label: "Easier sea", value: "January to September" },
      { label: "Viz peak", value: "March to September" },
      { label: "Cancel risk", value: "October to December" },
      { label: "Fee", value: "20 THB at Mae Haad any month" },
    ],
    chips: [
      "Jan to Sep",
      "Mar to Sep viz",
      "One sea first",
    ],
    photo: "/photos/koh-samui.jpg",
    geo: { lat: 10.096, lon: 99.838, containedIn: "Koh Tao" },
    paragraphs: [
      "Tao sits farther north and more open than [Koh Phangan](/koh-phangan), and January to September is the easier Gulf sea. March to September is the usual viz window for a first cert, and October to December is when fast boats cancel first. The Andaman (November to April) is a different first week.",
      "The 20 THB Mae Haad fee does not change with the month, and keep a buffer day before a USM or Chumphon exit. Pair this page with [dive sites](/koh-tao/dive-sites) and [when to go](/plan/when-to-go), and do not treat a Full Moon date as a weather forecast.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Jan to Feb:** Diveable, cooler air, still Gulf logic.",
          "**Mar to Sep:** Best first-cert window.",
          "**Oct to Dec:** Cancellations. Keep a spare night.",
        ],
      },
    ],
    portraits: [
      { title: "Dive sites", href: "/koh-tao/dive-sites", photo: "/photos/koh-tao.jpg" },
      { title: "Where to stay", href: "/koh-tao/where-to-stay", photo: "/photos/koh-tao.jpg" },
      { title: "When to go", href: "/plan/when-to-go", photo: "/photos/ferry-gulf.jpg" },
      { title: "Koh Samui", href: "/koh-samui", photo: "/photos/chaweng.jpg" },
    ],
    affiliates: [
    stay("Tao in the dive window", "Mar to Sep", "Lock Sairee or Mae Haad before you pay the course deposit.", stayLink('koh-tao'), "/photos/koh-tao.jpg"),
    klook("Course weeks", "Tours", "Read the cancel rule for October to December.", klookTours('Koh Tao Open Water'), "/photos/ferry-gulf.jpg"),
    ],
    faqs: [
      { q: "Is July good for Tao?", a: "Yes. July is a Gulf dive month. It is a bad Andaman liveaboard month." },
      { q: "November on Tao or Phuket?", a: "Phuket if you want Andaman winter boats. Tao if you accept cancel risk for a course." },
    ],
  },
  {
    path: "/chiang-mai/where-to-stay",
    title: "Where to stay in Chiang Mai",
    description: "Chiang Mai hotels split Old City for temple mornings, Nimman for later dinners, and the Ping bank if you want river rooms. CNX is 15 to 25 minutes.",
    lede: "Chiang Mai is known for two hotel grids rather than one downtown: sleep inside the moat for temples, or in Nimman if you want a later dinner. Mae Rim fits a rice-terrace resort week.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Mai", href: "/chiang-mai" },
      { name: "Where to stay", href: "/chiang-mai/where-to-stay" },
    ],
    facts: [
      { label: "Default", value: "Old City for temple mornings" },
      { label: "Later", value: "Nimmanhaemin west of the moat" },
      { label: "Airport", value: "CNX to Old City 15 to 25 minutes" },
      { label: "Valley", value: "Mae Rim 30 to 45 minutes" },
    ],
    chips: [
      "Old City",
      "Nimman",
      "Ping bank",
    ],
    photo: "/photos/chiang-mai.jpg",
    geo: { lat: 18.788, lon: 98.985, containedIn: "Chiang Mai" },
    paragraphs: [
      "Pick the walk before the brand, and the [Old City](/chiang-mai/old-city) is the moat square for dawn wats. [Nimmanhaemin](/chiang-mai/nimmanhaemin) is west for cafes and a later plate, and Wat Ket and the Ping bank sit east if you want river rooms. Mae Rim is a valley resort, 30 to 45 minutes each way, and CNX to the Old City is 15 to 25 minutes.",
      "Sunday Walking Street fills Ratchadamnoen, and Saturday is Wua Lai. Book two nights on Trip.com inside the moat or in Nimman, then move if Pai or Chiang Rai is next. Do not sleep on the airport belt unless you land late.",
    ],
    sections: [
      {
        id: "areas",
        title: "Which area fits which trip",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["Old City","Temple mornings, Sunday market","Walk the moat"],
            ["Nimmanhaemin","Cafes, later dinner","Grab to the moat 4 to 7 minutes"],
            ["Wat Ket / Ping","River rooms","East of Nawarat Bridge"],
            ["Mae Rim","Resort week","30 to 45 minutes each way"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Old City", href: "/chiang-mai/old-city", photo: "/photos/chiang-mai-old-city.jpg" },
      { title: "Nimmanhaemin", href: "/chiang-mai/nimmanhaemin", photo: "/photos/nimman.jpg" },
      { title: "Mae Rim", href: "/chiang-mai/mae-rim", photo: "/photos/resort-four-seasons-chiang-mai.jpg" },
      { title: "Getting around", href: "/chiang-mai/getting-around", photo: "/photos/doi-suthep.jpg" },
    ],
    affiliates: [
    stay("Old City hotels", "Inside the moat", "Temple mornings. Book early for Sunday-market weekends.", stayAreaLink('chiang-mai-old-city'), "/photos/chiang-mai-old-city.jpg"),
    stay("Nimman hotels", "West of the moat", "Walk to dinner. Grab to the wats at 07:00.", stayAreaLink('nimmanhaemin'), "/photos/nimman.jpg"),
    ],
    faqs: [
      { q: "Old City or Nimman for three nights?", a: "Old City if temples are the mornings. Nimman if dinner is the point. Do not split one night each." },
      { q: "Is Mae Rim a first hotel?", a: "Only if the valley is the trip. First-timers sleep in the moat or Nimman." },
    ],
  },
  {
    path: "/chiang-mai/getting-around",
    title: "Getting around Chiang Mai",
    description: "Chiang Mai moves by red songthaew, Grab, and a 15 to 25 minute CNX ride to the Old City. Doi Suthep is 30 THB plus a 60 to 100 THB truck.",
    lede: "Chiang Mai is known for red songthaews and short Grabs rather than a BTS grid, so sleep in the Old City or Nimman and use a hired truck for Doi Suthep. Skip a first-week scooter on the moat corners.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Mai", href: "/chiang-mai" },
      { name: "Getting around", href: "/chiang-mai/getting-around" },
    ],
    facts: [
      { label: "CNX", value: "15 to 25 minutes to the Old City" },
      { label: "Suthep", value: "30 THB plus songthaew 60 to 100 THB" },
      { label: "Nimman hop", value: "Grab often 80 to 120 THB, 4 to 7 minutes" },
      { label: "Leave", value: "07:00 for the hill wat" },
    ],
    chips: [
      "CNX cars",
      "Red trucks",
      "Grab in town",
    ],
    photo: "/photos/chiang-mai-old-city.jpg",
    geo: { lat: 18.788, lon: 98.985, containedIn: "Chiang Mai" },
    paragraphs: [
      "CNX to the [Old City](/chiang-mai/old-city) is 15 to 25 minutes. Book a Trip.com car if you land with bags. In town, red songthaews run shared routes; agree a charter fare before you climb in. A 2026 Grab from Nimman to the moat is often 80 to 120 THB and four to seven minutes.",
      "[Doi Suthep](/attractions/wat-phra-that-doi-suthep) is 30 THB at the wat plus a songthaew at 60 to 100 THB each way, and leave at 07:00. Do not scooter the ridge in rain on a first week, and pair this page with [where to stay](/chiang-mai/where-to-stay). Route 1095 to Pai is a different day.",
    ],
    sections: [
      {
        id: "modes",
        title: "Which mode for which hop",
        bullets: [
          "**CNX car:** 15 to 25 minutes to the moat.",
          "**Grab:** Nimman, Wat Ket, late nights.",
          "**Red songthaew:** Shared city hops; charter for Suthep.",
          "**Suthep:** 30 THB plus 60 to 100 THB each way. Leave 07:00.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/chiang-mai/where-to-stay", photo: "/photos/chiang-mai.jpg" },
      { title: "Doi Suthep", href: "/attractions/wat-phra-that-doi-suthep", photo: "/photos/doi-suthep.jpg" },
      { title: "Old City", href: "/chiang-mai/old-city", photo: "/photos/wat-phra-singh.jpg" },
      { title: "Day trips", href: "/chiang-mai/day-trips", photo: "/photos/northern.jpg" },
    ],
    affiliates: [
    stay("Sleep where you will Grab home", "Old City or Nimman", "The 23:00 truck from a valley resort is the real cost.", stayLink('chiang-mai'), "/photos/chiang-mai.jpg"),
    {
      title: "CNX airport cars",
      kicker: "Transfers",
      body: "Book the 15 to 25 minute hop if you land late with bags.",
      href: transferLink('CNX'),
      cta: 'Book transfer',
      photo: "/photos/doi-suthep.jpg",
      partner: 'transfer',
    },
    ],
    faqs: [
      { q: "Grab or songthaew to Doi Suthep?", a: "Shared red trucks from Chang Phuak or CMU are 60 to 100 THB each way. Grab costs more and leaves when you do." },
      { q: "Can you walk Nimman to the moat?", a: "You can. It is hot. Grab is four to seven minutes." },
    ],
  },
  {
    path: "/chiang-mai/best-time-to-visit",
    title: "Best time to visit Chiang Mai",
    description: "Chiang Mai is cooler November to February. March haze can sit. Songkran week in mid-April is water, not a temple plan. Leave Suthep at 07:00.",
    lede: "Chiang Mai is known for a cooler November to February city week that fits temple walks, while March haze can sit in the valley. Songkran in mid-April is a water fight, not a calm wat morning.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Mai", href: "/chiang-mai" },
      { name: "Best time to visit", href: "/chiang-mai/best-time-to-visit" },
    ],
    facts: [
      { label: "Cool dry", value: "November to February" },
      { label: "Haze", value: "Often March to April" },
      { label: "Songkran", value: "Mid-April water week" },
      { label: "Suthep", value: "Leave 07:00 any month" },
    ],
    chips: [
      "Nov to Feb",
      "Haze check",
      "Songkran week",
    ],
    photo: "/photos/northern.jpg",
    geo: { lat: 18.788, lon: 98.985, containedIn: "Chiang Mai" },
    paragraphs: [
      "November to February is the cooler dry window, and March can hold farm-burn haze. Mid-April is [Songkran](/plan/songkran-and-public-holidays): water, not silk, and May to October is green and wet on the ridges. Kew Mae Pan on [Doi Inthanon](/chiang-mai/doi-inthanon) runs November to May.",
      "Temple dress still applies in rain, and Wat Chedi Luang is 50 THB. Doi Suthep is 30 THB plus a 60 to 100 THB songthaew; leave at 07:00, and pair this page with [when to go](/plan/when-to-go). A coast week is a separate monsoon choice, not a same-week stack.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Feb:** Cooler walks. Book Sunday-market weekends early.",
          "**Mar to Apr:** Check air quality. Songkran is mid-April.",
          "**May to Oct:** Green hills. Inthanon trails go slick.",
        ],
      },
    ],
    portraits: [
      { title: "When to go", href: "/plan/when-to-go", photo: "/photos/chiang-mai.jpg" },
      { title: "Where to stay", href: "/chiang-mai/where-to-stay", photo: "/photos/chiang-mai-old-city.jpg" },
      { title: "Doi Inthanon", href: "/chiang-mai/doi-inthanon", photo: "/photos/doi-suthep.jpg" },
      { title: "Pai road", href: "/get-there/chiang-mai-to-pai", photo: "/photos/pai.jpg" },
    ],
    affiliates: [
    stay("Chiang Mai in the cool months", "Nov to Feb", "Lock two Old City nights before the valley search.", stayLink('chiang-mai'), "/photos/chiang-mai.jpg"),
    klook("Hill and wat days", "Tours", "Suthep vans beat a late shared truck if you want 07:00.", klookTours('Doi Suthep Chiang Mai'), "/photos/pai.jpg"),
    ],
    faqs: [
      { q: "Is March a bad Chiang Mai month?", a: "It can be if haze sits. Check air quality before you lock the hotel." },
      { q: "Should you skip April?", a: "Skip a calm temple plan in Songkran week. Keep April if the water festival is why you came." },
    ],
  },
  {
    path: "/chiang-mai/day-trips",
    title: "Chiang Mai day trips",
    description: "Day trips from Chiang Mai: Doi Suthep at 07:00, Doi Inthanon at 300 THB, or Route 1095 to Pai in 3 to 4.5 hours. Pick one spare day.",
    lede: "Chiang Mai day trips are known for one hill wat or one mountain road: Suthep fits a morning, while Inthanon and Pai each take a full day. Leave the second hill for another date.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Mai", href: "/chiang-mai" },
      { name: "Day trips", href: "/chiang-mai/day-trips" },
    ],
    facts: [
      { label: "Suthep", value: "Leave 07:00; 30 THB plus songthaew 60 to 100 THB" },
      { label: "Inthanon", value: "300 THB foreigners; full day" },
      { label: "Pai", value: "Route 1095, 3 to 4.5 hours, 762 bends" },
      { label: "White Temple", value: "200 THB foreigners since 1 January 2026" },
    ],
    chips: [
      "Suthep morning",
      "Inthanon day",
      "One road",
    ],
    photo: "/photos/doi-suthep.jpg",
    geo: { lat: 18.788, lon: 98.985, containedIn: "Chiang Mai" },
    paragraphs: [
      "[Doi Suthep](/attractions/wat-phra-that-doi-suthep) is the usual spare morning: leave 07:00, 30 THB at the wat, songthaew 60 to 100 THB each way. [Doi Inthanon](/chiang-mai/doi-inthanon) is a full day at 300 THB for foreigners. [Pai](/get-there/chiang-mai-to-pai) is Route 1095, 3 to 4.5 hours and 762 bends; it wants two nights, not a day return.",
      "Chiang Rai is the White Temple at 200 THB for foreigners since 1 January 2026, plus a Green Bus of about 3.5 hours. Ethical elephant half-days sit on [sanctuaries](/attractions/chiang-mai-ethical-elephant-sanctuaries), and do not book Inthanon and Pai on the same van. Sleep in Chiang Mai unless dawn on 1095 is the point.",
    ],
    sections: [
      {
        id: "picks",
        title: "Pick one spare day",
        table: {
          headers: ["Trip","Clock","Sleep after"],
          rows: [
            ["Doi Suthep","Half day; leave 07:00","Chiang Mai"],
            ["Doi Inthanon","Full day; 300 THB","Chiang Mai"],
            ["Elephant valley","1 to 1.5 hours each way","Chiang Mai"],
            ["Pai","3 to 4.5 hours, 762 bends","Pai overnight"],
            ["White Temple","3.5 hour bus plus 200 THB","Chiang Rai or a long day"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Doi Suthep", href: "/attractions/wat-phra-that-doi-suthep", photo: "/photos/doi-suthep.jpg" },
      { title: "Doi Inthanon", href: "/chiang-mai/doi-inthanon", photo: "/photos/northern.jpg" },
      { title: "Chiang Mai to Pai", href: "/get-there/chiang-mai-to-pai", photo: "/photos/pai.jpg" },
      { title: "Elephant sanctuaries", href: "/attractions/chiang-mai-ethical-elephant-sanctuaries", photo: "/photos/chiang-mai.jpg" },
    ],
    affiliates: [
    stay("Keep the Chiang Mai base", "Two-night lock", "Day-trip Suthep. Overnight Pai only if 1095 is the point.", stayLink('chiang-mai'), "/photos/northern.jpg"),
    klook("Hill and valley vans", "Day tours", "Read whether the 300 THB Inthanon fee sits in the price.", klookTours('Doi Inthanon day trip'), "/photos/pai.jpg"),
    ],
    faqs: [
      { q: "Suthep as a day trip or half day?", a: "Half day if you leave at 07:00. Do not add Inthanon the same calendar." },
      { q: "Can you add Pai to an Inthanon day?", a: "No. Different ridges. Pai wants two nights over 762 bends." },
    ],
  },
  {
    path: "/chiang-mai/top-attractions",
    title: "Chiang Mai top attractions",
    description: "Chiang Mai sights: Wat Chedi Luang at 50 THB, Wat Phra Singh, Doi Suthep at 30 THB, plus Sunday Ratchadamnoen or Saturday Wua Lai streets.",
    lede: "Chiang Mai attractions are known for the moat wats and one hill: Wat Chedi Luang is 50 THB and Doi Suthep is 30 THB plus a songthaew. Sunday is Ratchadamnoen, and Saturday is Wua Lai.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Mai", href: "/chiang-mai" },
      { name: "Top attractions", href: "/chiang-mai/top-attractions" },
    ],
    facts: [
      { label: "Chedi Luang", value: "50 THB" },
      { label: "Suthep", value: "30 THB plus songthaew 60 to 100 THB" },
      { label: "Inthanon", value: "300 THB foreigners" },
      { label: "Markets", value: "Sunday Ratchadamnoen; Saturday Wua Lai" },
    ],
    chips: [
      "Moat wats",
      "Doi Suthep",
      "Walking streets",
    ],
    photo: "/photos/wat-phra-singh.jpg",
    geo: { lat: 18.788, lon: 98.985, containedIn: "Chiang Mai" },
    paragraphs: [
      "Walk the [Old City](/chiang-mai/old-city) at dawn: Wat Phra Singh and Wat Chedi Luang (50 THB), and midday heat empties the lanes. [Doi Suthep](/attractions/wat-phra-that-doi-suthep) is the hill add: leave 07:00, 30 THB, songthaew 60 to 100 THB each way, and do not add [Doi Inthanon](/chiang-mai/doi-inthanon) the same day. Inthanon is 300 THB and a full drive.",
      "Sunday Walking Street fills Ratchadamnoen, and Saturday is Wua Lai, south of the moat. Ethical elephant half-days live on [sanctuaries](/attractions/chiang-mai-ethical-elephant-sanctuaries), and sleep stays on [where to stay](/chiang-mai/where-to-stay). One wat morning plus one hill is enough.",
    ],
    sections: [
      {
        id: "board",
        title: "2026 ticket board",
        table: {
          headers: ["Sight","Foreign ticket","Pair with"],
          rows: [
            ["Wat Chedi Luang","50 THB","Dawn in the moat"],
            ["Wat Phra Singh","Booth often 20 to 50 THB","Walk from Chedi Luang"],
            ["Doi Suthep","30 THB","Leave 07:00"],
            ["Doi Inthanon","300 THB","Separate full day"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Old City", href: "/chiang-mai/old-city", photo: "/photos/chiang-mai-old-city.jpg" },
      { title: "Doi Suthep", href: "/attractions/wat-phra-that-doi-suthep", photo: "/photos/doi-suthep.jpg" },
      { title: "Night markets", href: "/chiang-mai/night-markets", photo: "/photos/night-market-cm.jpg" },
      { title: "Day trips", href: "/chiang-mai/day-trips", photo: "/photos/northern.jpg" },
    ],
    affiliates: [
    stay("Sleep near the morning gate", "Old City", "Grab from Nimman at 07:00 if you want dinner west.", stayAreaLink('chiang-mai-old-city'), "/photos/doi-suthep.jpg"),
    klook("Suthep and city vans", "Tickets", "Useful if you want a 07:00 desk, not a shared truck wait.", klookTickets('Doi Suthep Chiang Mai'), "/photos/chiang-mai-old-city.jpg"),
    ],
    faqs: [
      { q: "How long is the moat wat loop?", a: "Two to three hours if you do Phra Singh and Chedi Luang at dawn. Add Suthep only as a separate morning." },
      { q: "Sunday or Saturday walking street?", a: "Sunday is Ratchadamnoen inside the moat. Saturday is Wua Lai south of it. Pick one." },
    ],
  },
  {
    path: "/chiang-mai/mae-rim",
    title: "Mae Rim",
    description: "Mae Rim is the valley north of Chiang Mai: rice-terrace resorts, not a temple-walk base. Budget 30 to 45 minutes each way to the Old City.",
    lede: "Mae Rim is known for rice-terrace resorts north of Chiang Mai, and it fits a valley week. Stay inside the moat if you want Wat Phra Singh at 07:00 on foot.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Mai", href: "/chiang-mai" },
      { name: "Mae Rim", href: "/chiang-mai/mae-rim" },
    ],
    facts: [
      { label: "From town", value: "30 to 45 minutes each way" },
      { label: "From CNX", value: "Often 25 to 40 minutes by booked car" },
      { label: "Who", value: "When the hotel is the trip" },
      { label: "Suthep", value: "Half day if you leave early" },
    ],
    chips: [
      "Valley resorts",
      "30 to 45 min",
      "Not a wat base",
    ],
    photo: "/photos/resort-four-seasons-chiang-mai.jpg",
    geo: { lat: 18.91, lon: 98.89, containedIn: "Chiang Mai" },
    paragraphs: [
      "Mae Rim is the valley north of the city, not a moat soi, and Four Seasons sits on rice terraces. Budget 30 to 45 minutes to the [Old City](/chiang-mai/old-city) for Sunday Walking Street, and a 2026 booked car from CNX is often 800 to 1,500 THB and 25 to 40 minutes. You will not walk off-property for dinner.",
      "Use this pin when the terrace is the week, and first-timers who want dawn wats should open [where to stay](/chiang-mai/where-to-stay) and sleep inside the moat or in [Nimman](/chiang-mai/nimmanhaemin). Doi Suthep is a half day if you leave early, and Inthanon is a full day at 300 THB.",
    ],
    sections: [
      {
        id: "use",
        title: "When the valley is the right pin",
        bullets: [
          "**Yes:** The hotel is the trip. You accept a car for every wat.",
          "**No:** Three temple mornings on foot. Sleep in the moat.",
          "**Pair:** One Old City night if Sunday Ratchadamnoen matters.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/chiang-mai/where-to-stay", photo: "/photos/chiang-mai.jpg" },
      { title: "Old City", href: "/chiang-mai/old-city", photo: "/photos/chiang-mai-old-city.jpg" },
      { title: "Four Seasons Chiang Mai", href: "/resort-living/four-seasons-chiang-mai", photo: "/photos/northern.jpg" },
      { title: "Getting around", href: "/chiang-mai/getting-around", photo: "/photos/doi-suthep.jpg" },
    ],
    affiliates: [
    stay("Mae Rim hotels", "Valley search", "Search Mae Rim if the terrace is the stay.", hotelSearchLink('Mae Rim', 'chiang-mai'), "/photos/northern.jpg"),
    stay("Old City if wats come first", "Inside the moat", "Pay less car time. Walk to Chedi Luang.", stayAreaLink('chiang-mai-old-city'), "/photos/chiang-mai.jpg"),
    ],
    faqs: [
      { q: "Mae Rim or Old City for a first stay?", a: "Old City. Mae Rim if the valley hotel is why you came." },
      { q: "Can you day-trip Mae Rim from Nimman?", a: "You can lunch there. Sleeping there only pays off if you skip the nightly town run." },
    ],
  },
  {
    path: "/chiang-mai/night-markets",
    title: "Chiang Mai night markets",
    description: "Chiang Mai night markets: Sunday Walking Street on Ratchadamnoen, Saturday on Wua Lai, and the daily Night Bazaar if you already sleep south.",
    lede: "Chiang Mai night markets are known for two walking streets rather than one bazaar: Sunday fits Ratchadamnoen and Saturday fits Wua Lai. The Night Bazaar on Chang Khlan is a daily tourist strip.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Mai", href: "/chiang-mai" },
      { name: "Night markets", href: "/chiang-mai/night-markets" },
    ],
    facts: [
      { label: "Sunday", value: "Ratchadamnoen, about 17:00 to 22:00" },
      { label: "Saturday", value: "Wua Lai, south of the moat" },
      { label: "Daily", value: "Night Bazaar on Chang Khlan" },
      { label: "Plates", value: "Often 60 to 150 THB" },
    ],
    chips: [
      "Sunday Ratchadamnoen",
      "Saturday Wua Lai",
      "Night Bazaar",
    ],
    photo: "/photos/night-market-cm.jpg",
    geo: { lat: 18.788, lon: 98.985, containedIn: "Chiang Mai" },
    paragraphs: [
      "Sunday Walking Street closes Ratchadamnoen from Tha Phae Gate toward Wat Phra Singh, about 17:00 to 22:00. Saturday is Wua Lai, south of the moat, the same evening window, and a 2026 market plate is often 60 to 150 THB. Sleep inside the [Old City](/chiang-mai/old-city) if Sunday is the night, and sleep nearer Chiang Mai Gate if Saturday is the night.",
      "The Night Bazaar on Chang Khlan is daily and tourist by design, and use it only if you already sleep south or on the Ping bank. Do not combine both walking streets and a 07:00 Suthep run on the same weekend without a nap. See [night markets](/thai-food/night-markets) for the national list.",
    ],
    sections: [
      {
        id: "which",
        title: "Which night",
        table: {
          headers: ["Market","When","Sleep near"],
          rows: [
            ["Sunday Walking Street","Ratchadamnoen, ~17:00 to 22:00","Old City"],
            ["Saturday Walking Street","Wua Lai, ~17:00 to 22:00","South moat"],
            ["Night Bazaar","Daily, late afternoon","Chang Khlan or the river"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Old City", href: "/chiang-mai/old-city", photo: "/photos/chiang-mai-old-city.jpg" },
      { title: "Top attractions", href: "/chiang-mai/top-attractions", photo: "/photos/wat-phra-singh.jpg" },
      { title: "Riverside Wat Ket", href: "/chiang-mai/riverside-wat-ket", photo: "/photos/resort-anantara-chiang-mai.jpg" },
      { title: "Where to stay", href: "/chiang-mai/where-to-stay", photo: "/photos/nimman.jpg" },
    ],
    affiliates: [
    stay("Old City for Sunday night", "Ratchadamnoen", "Walk the market. Do not hotel-hop from Mae Rim at 21:00.", stayAreaLink('chiang-mai-old-city'), "/photos/chiang-mai-old-city.jpg"),
    stay("Citywide if the night is one evening", "Compare bases", "Nimman still works with a short Grab to the moat.", stayLink('chiang-mai'), "/photos/wat-phra-singh.jpg"),
    ],
    faqs: [
      { q: "Is the Night Bazaar the same as Sunday Walking Street?", a: "No. Sunday is Ratchadamnoen. The Night Bazaar is the daily Chang Khlan strip." },
      { q: "Saturday or Sunday if you have one night?", a: "Sunday if you sleep in the moat. Saturday if you already sit on Wua Lai." },
    ],
  },
  {
    path: "/chiang-mai/riverside-wat-ket",
    title: "Wat Ket and the Ping",
    description: "Wat Ket and the Ping bank sit east of the Old City: teak lanes, river hotels, and a short hop over Nawarat Bridge. Sleep here for the river, not the moat.",
    lede: "Wat Ket is known for teak lanes on the east Ping bank, and it fits a river hotel week. Stay inside the moat if dawn wats on foot are the trip.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Mai", href: "/chiang-mai" },
      { name: "Riverside Wat Ket", href: "/chiang-mai/riverside-wat-ket" },
    ],
    facts: [
      { label: "Where", value: "East of Nawarat Bridge, Wat Ket / Wat Gate" },
      { label: "Hop", value: "Short Grab or a walk over the Ping" },
      { label: "Hotels", value: "137 Pillars and Anantara on the river" },
      { label: "Night", value: "Night Bazaar on the west bank" },
    ],
    chips: [
      "Ping bank",
      "Wat Ket",
      "River hotels",
    ],
    photo: "/photos/resort-anantara-chiang-mai.jpg",
    geo: { lat: 18.788, lon: 99.0, containedIn: "Chiang Mai" },
    paragraphs: [
      "Wat Ket (Wat Gate) sits east of the Old City across Nawarat Bridge; teak sois and river rooms are the point. Anantara faces the Ping on Charoen Prathet, beside the Night Bazaar; 137 Pillars is the homestead on the Wat Ket side. A 2026 Grab over the bridge is often 60 to 100 THB and a few minutes.",
      "Sleep here if the river is the stay, and sleep in the [Old City](/chiang-mai/old-city) if Wat Chedi Luang at 07:00 on foot is the stay. Sunday Ratchadamnoen is a walk or a short hop, and CNX is still 15 to 25 minutes to town, then a few more to the east bank. See [where to stay](/chiang-mai/where-to-stay) for the moat versus Nimman split.",
    ],
    sections: [
      {
        id: "use",
        title: "River pin versus moat pin",
        bullets: [
          "**Yes:** River breakfast, teak lanes, one Night Bazaar walk.",
          "**No:** A temple-only first stay with no car budget.",
          "**Pair:** [Night markets](/chiang-mai/night-markets) if Sunday is already on the calendar.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/chiang-mai/where-to-stay", photo: "/photos/chiang-mai.jpg" },
      { title: "Night markets", href: "/chiang-mai/night-markets", photo: "/photos/night-market-cm.jpg" },
      { title: "137 Pillars House", href: "/resort-living/137-pillars-house", photo: "/photos/resort-137-pillars.jpg" },
      { title: "Anantara Chiang Mai", href: "/resort-living/anantara-chiang-mai", photo: "/photos/chiang-mai-old-city.jpg" },
    ],
    affiliates: [
    stay("River and Wat Ket rooms", "Ping bank", "Search the river if breakfast on the water matters more than a moat walk.", stayLink('chiang-mai'), "/photos/resort-137-pillars.jpg"),
    stay("Old City if the wats come first", "Inside the moat", "Cross the bridge for lunch. Sleep where the dawn gate is.", stayAreaLink('chiang-mai-old-city'), "/photos/chiang-mai.jpg"),
    ],
    faqs: [
      { q: "Wat Ket or Old City for temples?", a: "Old City. Wat Ket is the river and teak. You will Grab or walk the bridge for Chedi Luang." },
      { q: "Is the Night Bazaar at the door?", a: "Anantara is next to it. Wat Ket rooms are a bridge away." },
    ],
  },
  {
    path: "/chiang-mai/hang-dong",
    title: "Hang Dong",
    description: "Hang Dong sits south-west of Chiang Mai: Baan Tawai crafts, hill pools, and a shorter Nimman taxi than Mae Rim. Book a hill pool or go back to town.",
    lede: "Hang Dong is known for Baan Tawai crafts and hill-pool stays south-west of town, and it fits a shopping morning or a view hotel. Stay in Nimman if dinner walks matter more than the hill.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Mai", href: "/chiang-mai" },
      { name: "Hang Dong", href: "/chiang-mai/hang-dong" },
    ],
    facts: [
      { label: "From town", value: "About 20 to 40 minutes south-west" },
      { label: "Crafts", value: "Baan Tawai wood and furniture yards" },
      { label: "Versus Mae Rim", value: "Shorter Nimman taxi than the north valley" },
      { label: "Suthep", value: "Same west ridge family; still leave 07:00 from town" },
    ],
    chips: [
      "Baan Tawai",
      "Hill pools",
      "Not a wat base",
    ],
    photo: "/photos/resort-veranda-high-chiang-mai.jpg",
    geo: { lat: 18.69, lon: 98.92, containedIn: "Chiang Mai" },
    paragraphs: [
      "Hang Dong is the south-west district for Baan Tawai craft yards and a few hill pools. A 2026 Grab from [Nimman](/chiang-mai/nimmanhaemin) is often 200 to 400 THB and 20 to 40 minutes, shorter than a Mae Rim dinner run. Veranda High sits on the west foothills if the view pool is the stay. It is not a substitute for the [Old City](/chiang-mai/old-city).",
      "Do Baan Tawai as a morning if you want wood and furniture, then return to town. Doi Suthep is still 30 THB plus a 60 to 100 THB songthaew from the city, not from a Hang Dong sofa. See [where to stay](/chiang-mai/where-to-stay) before you book a hill pin for a first three nights.",
    ],
    sections: [
      {
        id: "use",
        title: "Day yard or hill hotel",
        bullets: [
          "**Yes:** Baan Tawai morning, or a pool hotel with a Nimman taxi.",
          "**No:** A temple-first stay. Sleep in the moat.",
          "**Versus Mae Rim:** Closer to west-city dinners, fewer rice terraces.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/chiang-mai/where-to-stay", photo: "/photos/chiang-mai.jpg" },
      { title: "Nimmanhaemin", href: "/chiang-mai/nimmanhaemin", photo: "/photos/nimman.jpg" },
      { title: "Mae Rim", href: "/chiang-mai/mae-rim", photo: "/photos/resort-four-seasons-chiang-mai.jpg" },
      { title: "Doi Suthep", href: "/attractions/wat-phra-that-doi-suthep", photo: "/photos/doi-suthep.jpg" },
    ],
    affiliates: [
    stay("Hang Dong and hill pools", "South-west", "Search Hang Dong if the view hotel is the stay.", stayLink('chiang-mai'), "/photos/nimman.jpg"),
    stay("Nimman if dinner is the trip", "West of the moat", "Shop Baan Tawai by day. Sleep where you walk at night.", stayAreaLink('nimmanhaemin'), "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "Hang Dong or Mae Rim for a resort night?", a: "Mae Rim for rice terraces. Hang Dong for a shorter Nimman taxi and Baan Tawai." },
      { q: "Is Baan Tawai a full day?", a: "A morning is enough. Return to town for dinner." },
    ],
  },
];
