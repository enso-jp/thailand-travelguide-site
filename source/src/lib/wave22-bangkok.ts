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

export const WAVE22_TITLE_CORE: Record<string, string> = {
  "/bangkok/where-to-stay": "Where to Stay in Bangkok: BTS, River, Old City",
  "/bangkok/getting-around": "Bangkok Getting Around on BTS, MRT, and Boats",
  "/bangkok/best-time-to-visit": "Best Time to Visit Bangkok: Months and Heat 2026",
  "/bangkok/day-trips": "Bangkok Day Trips: Ayutthaya, Kwai, Markets 2026",
  "/bangkok/top-attractions": "Bangkok Top Attractions: Palace to Chatuchak 2026",
  "/bangkok/nightlife-districts": "Bangkok Nightlife Districts by Neighbourhood 2026",
  "/bangkok/khao-san": "Khao San Road, Bangkok: Who Should Sleep Here",
  "/bangkok/chatuchak": "Chatuchak Weekend Market Access in Bangkok 2026",
  "/bangkok/iconsiam-and-charoen-nakhon": "ICONSIAM and Charoen Nakhon River Mall Guide 2026",
  "/bangkok/victory-monument-and-pratunam": "Victory Monument and Pratunam Shopping Guide 2026",
  "/bangkok/on-nut-and-phra-khanong": "On Nut and Phra Khanong: East BTS Bangkok Stays",
  "/bangkok/khlongs-and-canal-boats": "Bangkok Khlongs and Chao Phraya Canal Boats 2026",
  "/bangkok/lumphini-and-pathum-wan": "Lumphini Park and Pathum Wan: Dawn and Malls 2026",
};

export const wave22Pages: Page[] = [
  {
    path: "/bangkok/where-to-stay",
    title: "Where to stay in Bangkok",
    description: "Bangkok hotel areas split by BTS: Sukhumvit for first nights, riverside for boats, Siam for malls, Old City only if temples are the whole stay.",
    lede: "Stay on Sukhumvit for a first trip, in Siam for malls and trains, on the Riverside for hotel piers, in Silom for Lumphini and business, or on Khao San for budget beds near the temples.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "Where to stay", href: "/bangkok/where-to-stay" },
    ],
    facts: [
      { label: "Default", value: "Sukhumvit Nana to Phrom Phong" },
      { label: "River", value: "Charoenkrung and the hotel piers" },
      { label: "Rail tap", value: "2026 BTS 17 to 62 THB" },
      { label: "Airport car", value: "BKK hotel van often 1,200 to 2,000 THB" },
    ],
    chips: [
      "BTS hotels",
      "Riverside",
      "Old City last",
    ],
    photo: "/photos/sukhumvit.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "Pick the BTS exit before the brand. [Sukhumvit](/bangkok/sukhumvit) is the first-timer default: Nana for short stays, Asok for the MRT interchange, Phrom Phong for a calmer walk, Thong Lo for dinner. [Riverside and Charoenkrung](/bangkok/riverside-charoenkrung) wins if you want a hotel pier, and [Siam and Silom](/bangkok/siam-silom) sits on the mall interchange. [Old City stays](/bangkok/old-city-rattanakosin) only if the palace morning is the whole trip.",
      "A 2026 BTS tap is 17 to 62 THB. After midnight the train stops; Grab from Soi 11 to Thonglor is often 80 to 160 THB. Do not rent a scooter on Sukhumvit Road. Book the first two nights on Trip.com near a named BTS exit, then move if the river or Chiang Mai is next.",
    ],
    sections: [
      {
        id: "best-areas",
        title: "Best areas to stay in Bangkok",
        bullets: [
          "**Sukhumvit:** the first-timer pick. BTS Nana to Phrom Phong, dinner and nightlife on every soi.",
          "**Siam:** the BTS interchange and the big malls. Easy for a short stay or with kids.",
          "**Riverside:** hotel piers and boats to the temples. Quieter evenings, longer BTS walks.",
          "**Silom:** Lumphini Park, offices and night food. MRT and BTS both stop here.",
          "**Khao San:** budget beds and backpacker bars, a walk from the Grand Palace.",
        ],
        affiliates: [
          stay("Sukhumvit hotels", "First trip", "Hotels near BTS Nana to Phrom Phong.", stayAreaLink('sukhumvit'), "/photos/sukhumvit.jpg"),
          stay("Siam hotels", "Malls and trains", "Hotels around the Siam interchange.", stayAreaLink('siam'), "/photos/siam.jpg"),
          stay("Riverside hotels", "Hotel piers", "Hotels on the Chao Phraya with their own docks.", stayAreaLink('riverside'), "/photos/riverside.jpg"),
          stay("Silom hotels", "Lumphini and night food", "Hotels between Silom and Sathorn.", stayAreaLink('silom'), "/photos/silom-and-sathorn.jpg"),
          stay("Khao San hotels", "Budget", "Guesthouses and hotels around Khao San Road.", stayAreaLink('khao-san'), "/photos/old-city.jpg"),
        ],
      },
      {
        id: "areas",
        title: "Which area fits which trip",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["Sukhumvit","First nights, dinner, nightlife","BTS Nana to Ekkamai"],
            ["Riverside","Boats and slower evenings","Longer BTS walks"],
            ["Siam and Silom","Malls, ARL, Lumphini","Phaya Thai links the Airport Rail Link"],
            ["Old City","Palace mornings only","Thin food after 21:00"],
            ["Ari","Cafes, quieter sois","15 minutes north of Siam"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Sukhumvit sois", href: "/bangkok/sukhumvit", photo: "/photos/sukhumvit.jpg" },
      { title: "Riverside", href: "/bangkok/riverside-charoenkrung", photo: "/photos/riverside.jpg" },
      { title: "Old City stays", href: "/bangkok/old-city-rattanakosin", photo: "/photos/old-city.jpg" },
      { title: "Getting around", href: "/bangkok/getting-around", photo: "/photos/bts.jpg" },
    ],
    // Same links as the best-areas cards; PageView hides repeats, so no second hotel and Klook pair renders.
    affiliates: [
      stay("Sukhumvit hotels", "First trip", "Hotels near BTS Nana to Phrom Phong.", stayAreaLink('sukhumvit'), "/photos/sukhumvit.jpg"),
      stay("Riverside hotels", "Hotel piers", "Hotels on the Chao Phraya with their own docks.", stayAreaLink('riverside'), "/photos/riverside.jpg"),
    ],
    faqs: [
      { q: "Sukhumvit or riverside for two nights?", a: "Sukhumvit if you want dinner and the BTS. Riverside if you want boats and a quieter evening. Do not split one night each." },
      { q: "Is the Old City a good first hotel?", a: "Only if temples are the whole stay. Evening food thins after 21:00. Most first-timers sleep on Sukhumvit and Grab in at 07:15." },
    ],
  },
  {
    path: "/bangkok/getting-around",
    title: "Getting around Bangkok",
    description: "Bangkok transit in 2026: BTS taps 17 to 62 THB, MRT one-stop hops, Airport Rail Link to Phaya Thai, and Chao Phraya boats from Saphan Taksin.",
    lede: "Bangkok is known for the BTS and MRT, not tuk-tuk circuits, so use rail by day and Grab after midnight when the Skytrain stops. River boats suit the Old City and hotel piers, not a Thonglor dinner hop.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "Getting around", href: "/bangkok/getting-around" },
    ],
    facts: [
      { label: "BTS tap", value: "17 to 62 THB in 2026" },
      { label: "ARL", value: "About 30 minutes BKK to Phaya Thai" },
      { label: "River", value: "Orange-flag boat from Saphan Taksin" },
      { label: "After 00:00", value: "Grab; the Skytrain has stopped" },
    ],
    chips: [
      "BTS and MRT",
      "Airport Rail Link",
      "River boats",
    ],
    photo: "/photos/bts.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "Tap in on the BTS for Sukhumvit, Siam, and Silom; use the MRT for Chatuchak (Kamphaeng Phet), Hua Lamphong, and the Asok interchange. A 2026 adult tap is 17 to 62 THB; the Airport Rail Link from Suvarnabhumi to Phaya Thai is about 30 minutes. From Phaya Thai, one BTS hop reaches Siam.",
      "Chao Phraya orange-flag boats start at Saphan Taksin (BTS), and the Tha Tien crossing to Wat Arun is 5 THB. Grab replaces the train after midnight; Soi 11 to Thonglor is often 80 to 160 THB. Skip rented scooters on the frontage roads, and pair this page with [Grab and BTS](/plan/grab-and-bts) for app notes.",
    ],
    sections: [
      {
        id: "modes",
        title: "Which mode for which hop",
        bullets: [
          "**BTS:** Sukhumvit, Siam, Silom, Saphan Taksin. Last trains around midnight.",
          "**MRT:** Chatuchak, Hua Lamphong, Lumphini, the Asok link.",
          "**ARL:** BKK to Phaya Thai if you have one bag and it is not 01:00.",
          "**Boat:** Old City and riverside hotels. Not a Thonglor dinner tool.",
          "**Grab or Bolt:** Late nights and luggage. Agree the pin, not a soi speech.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/bangkok/where-to-stay", photo: "/photos/sukhumvit.jpg" },
      { title: "Grab and BTS plan", href: "/plan/grab-and-bts", photo: "/photos/bts.jpg" },
      { title: "Day trips", href: "/bangkok/day-trips", photo: "/photos/ayutthaya.jpg" },
      { title: "Sukhumvit sois", href: "/bangkok/sukhumvit", photo: "/photos/sukhumvit.jpg" },
    ],
    affiliates: [
    stay("Hotels on the BTS", "Nana to Siam", "Sleep one block off the gate. The walk beats a late soi hunt.", stayAreaLink('sukhumvit'), "/photos/siam.jpg"),
    {
      title: "Airport cars and boats",
      kicker: "Transfers",
      body: "BKK or DMK hotel cars if you land late with bags.",
      href: transferLink('BKK'),
      cta: 'Book transfer',
      photo: "/photos/get-there.jpg",
      partner: 'transfer',
    },
    ],
    faqs: [
      { q: "BTS or Grab to the Grand Palace?", a: "Grab at 07:15 from Sukhumvit is often 150 to 280 THB and faster than a rail-plus-walk in heat. Rail works if you already sit near Hua Lamphong or a river pier." },
      { q: "Can you use the ARL at 01:00?", a: "No. Book a Trip.com airport car if you land after the last ARL. Do not invent a same-night island hop." },
    ],
  },
  {
    path: "/bangkok/best-time-to-visit",
    title: "Best time to visit Bangkok",
    description: "Bangkok works all year. Cooler dry air is November to February. Songkran week in mid-April is a water festival, not a temple plan. March haze can sit.",
    lede: "Bangkok is known for a usable year-round city week, with cooler dry air from November to February and Songkran in mid-April that suits a water festival more than a calm palace morning. March can hold haze that blows south from the north.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "Best time to visit", href: "/bangkok/best-time-to-visit" },
    ],
    facts: [
      { label: "Cool dry", value: "November to February" },
      { label: "Hot", value: "March to May; Songkran mid-April" },
      { label: "Rain", value: "May to October, short storms" },
      { label: "BTS", value: "Still 17 to 62 THB in any month" },
    ],
    chips: [
      "Nov to Feb",
      "Songkran week",
      "Year-round city",
    ],
    photo: "/photos/bangkok.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "Bangkok is a city first, and you can land any month. November to February is cooler and the usual first-trip window, and March can hold farm-burn haze that blows south from the north. April heat plus [Songkran](/plan/songkran-and-public-holidays) closes a calm palace morning, and May to October brings short, hard rain, not an Andaman boat cancel.",
      "Temple dress still applies in rain, and a 2026 BTS tap stays 17 to 62 THB. Pair this page with [when to go](/plan/when-to-go) if you are also picking a coast, and do not combine Bangkok rain week with a Phi Phi boat the same calendar.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Feb:** Cooler walks. Book Grand Palace early; queues still form.",
          "**Mar:** Check air quality if you also planned Chiang Mai.",
          "**Mid-April:** Songkran. Sleep Sukhumvit only if you want water, not silk.",
          "**May to Oct:** Storms after 15:00. Indoor malls and food halls still work.",
        ],
      },
    ],
    portraits: [
      { title: "When to go", href: "/plan/when-to-go", photo: "/photos/plan.jpg" },
      { title: "Songkran calendar", href: "/plan/songkran-and-public-holidays", photo: "/photos/siam.jpg" },
      { title: "Where to stay", href: "/bangkok/where-to-stay", photo: "/photos/sukhumvit.jpg" },
      { title: "Top attractions", href: "/bangkok/top-attractions", photo: "/photos/grand-palace.jpg" },
    ],
    affiliates: [
    stay("Bangkok in the cool months", "Nov to Feb", "Lock two Sukhumvit nights before the coast search.", stayLink('bangkok'), "/photos/riverside.jpg"),
    klook("Palace tickets in peak months", "Tickets", "Timed entry beats a 10:00 queue in December.", klookTickets('Bangkok Grand Palace tickets'), "/photos/grand-palace.jpg"),
    ],
    faqs: [
      { q: "Is August a bad Bangkok month?", a: "No. Storms are short. The city still works. August is a bad Andaman boat month, not a bad BTS month." },
      { q: "Should you skip April?", a: "Skip a calm temple plan in Songkran week. Keep April if the water festival is why you came." },
    ],
  },
  {
    path: "/bangkok/day-trips",
    title: "Bangkok day trips",
    description: "Day trips from Bangkok: Ayutthaya trains in about 80 minutes, Kanchanaburi for the Kwai, and weekend floating markets if you want a canal morning.",
    lede: "Bangkok day trips are known for Ayutthaya brick prangs plus one market or a longer Kwai add-on, and they fit a spare weekday if you pick a single province. Combining Ayutthaya and Kanchanaburi on the same van wastes both.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "Day trips", href: "/bangkok/day-trips" },
    ],
    facts: [
      { label: "Ayutthaya train", value: "About 80 minutes from Bangkok" },
      { label: "Temple ticket", value: "50 THB per Ayutthaya wat" },
      { label: "Kanchanaburi", value: "About 2.5 to 3.5 hours by road" },
      { label: "Floating market", value: "Weekend mornings, not a Monday plan" },
    ],
    chips: [
      "Ayutthaya",
      "Kanchanaburi",
      "Floating markets",
    ],
    photo: "/photos/ayutthaya.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "[Ayutthaya](/ayutthaya) is the usual spare-day ruin: about 80 minutes by train, 50 THB per temple, and sleep in Bangkok unless you want dawn at the prangs. [Kanchanaburi](/kanchanaburi) needs a longer road, about 2.5 to 3.5 hours, and fits better as an overnight, and floating markets live on [Damnoen Saduak and Amphawa](/attractions/damnoen-saduak-and-amphawa-floating-markets).",
      "Do not book two provinces on one van, and a 2026 licensed day tour often quotes 1,200 to 2,500 THB including a guide and lunch. Trains beat a 07:00 hotel pickup briefing if you only want Ayutthaya, and see [Bangkok to Ayutthaya](/get-there/bangkok-to-ayutthaya) and [Bangkok to Kanchanaburi](/get-there/bangkok-to-kanchanaburi).",
    ],
    sections: [
      {
        id: "picks",
        title: "Pick one spare day",
        table: {
          headers: ["Trip","Clock","Sleep after"],
          rows: [
            ["Ayutthaya ruins","About 80 minutes by train","Bangkok"],
            ["Bang Pa-In add","Short van from Ayutthaya","Bangkok"],
            ["Amphawa weekend","Morning market, evening fireflies","Bangkok or a market inn"],
            ["Kanchanaburi and Erawan","Half a day in the car","Kanchanaburi overnight"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Ayutthaya", href: "/ayutthaya", photo: "/photos/ayutthaya.jpg" },
      { title: "Kanchanaburi", href: "/kanchanaburi", photo: "/photos/kanchanaburi.jpg" },
      { title: "Floating markets", href: "/attractions/damnoen-saduak-and-amphawa-floating-markets", photo: "/photos/riverside.jpg" },
      { title: "Getting around", href: "/bangkok/getting-around", photo: "/photos/bts.jpg" },
    ],
    affiliates: [
    stay("Keep the Bangkok base", "Two-night lock", "Day-trip Ayutthaya. Overnight only if dawn at the ruins is the point.", stayLink('bangkok'), "/photos/bangkok.jpg"),
    klook("Ruin and market vans", "Day tours", "Read whether train tickets or boat fees sit in the price.", klookTours('Ayutthaya day trip'), "/photos/wat-mahathat-ayu.jpg"),
    ],
    faqs: [
      { q: "Ayutthaya as a day trip or overnight?", a: "Day trip covers the main wats. Overnight only if you want 07:00 at Wat Mahathat without a Bangkok alarm." },
      { q: "Can you add Erawan to an Ayutthaya day?", a: "No. Different roads, different lunch. Erawan is a Kanchanaburi day or night." },
    ],
  },
  {
    path: "/bangkok/top-attractions",
    title: "Bangkok top attractions",
    description: "Bangkok ticket board: Grand Palace 500 THB, Wat Pho 300 THB, Wat Arun 200 THB, Chatuchak on weekends, and one skyline deck if you want a roof.",
    lede: "Bangkok attractions are known for the royal river loop and one market: the Grand Palace is 500 THB, Wat Pho is 300 THB, and Chatuchak runs Saturday and Sunday only. Start the palace at 08:30 and leave the weekend market for a different morning.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "Top attractions", href: "/bangkok/top-attractions" },
    ],
    facts: [
      { label: "Palace", value: "500 THB; Mani Noppharat Gate 08:30" },
      { label: "Wat Pho", value: "300 THB; massage school after" },
      { label: "Wat Arun", value: "200 THB plus 5 THB ferry" },
      { label: "Chatuchak", value: "Saturday and Sunday; MRT Kamphaeng Phet" },
    ],
    chips: [
      "Royal loop",
      "Chatuchak",
      "One rooftop",
    ],
    photo: "/photos/grand-palace.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "Start the [Grand Palace](/attractions/grand-palace-and-wat-phra-kaew) at 08:30 via Mani Noppharat Gate, and keep shoulders and knees covered. Walk to [Wat Pho](/attractions/wat-pho), then the 5 THB Tha Tien ferry to [Wat Arun](/attractions/wat-arun), and the ticket circuit lives on [Rattanakosin](/bangkok/rattanakosin). Do not add Chatuchak the same morning.",
      "[Chatuchak Weekend Market](/attractions/chatuchak-weekend-market) is Saturday and Sunday at MRT Kamphaeng Phet, and weekdays use [Or Tor Kor](/thai-food/or-tor-kor-and-bangkok-fresh-markets). Jim Thompson House sits on Soi Kasemsan 2 near BTS National Stadium, and a rooftop is a night, not a third temple. See [nightlife districts](/bangkok/nightlife-districts) if the roof is the plan.",
    ],
    sections: [
      {
        id: "board",
        title: "2026 ticket board",
        table: {
          headers: ["Sight","Foreign ticket","Pair with"],
          rows: [
            ["Grand Palace and Wat Phra Kaew","500 THB","First stop at opening"],
            ["Wat Pho","300 THB","Walk from the palace"],
            ["Wat Arun","200 THB","Tha Tien ferry 5 THB"],
            ["Chatuchak","Free entry","Sat-Sun only"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Grand Palace", href: "/attractions/grand-palace-and-wat-phra-kaew", photo: "/photos/grand-palace.jpg" },
      { title: "Wat Pho", href: "/attractions/wat-pho", photo: "/photos/wat-pho.jpg" },
      { title: "Wat Arun", href: "/attractions/wat-arun", photo: "/photos/wat-arun-night.jpg" },
      { title: "Rattanakosin tickets", href: "/bangkok/rattanakosin", photo: "/photos/old-city.jpg" },
    ],
    affiliates: [
    stay("Sleep near the morning gate", "Sukhumvit or river", "Grab at 07:15. Do not sleep on Khao San just for the palace.", stayLink('bangkok'), "/photos/sukhumvit.jpg"),
    klook("Palace and SkyWalk tickets", "Tickets", "Timed palace or Mahanakhon beats a midday queue.", klookTickets('Grand Palace Bangkok'), "/photos/old-city.jpg"),
    ],
    faqs: [
      { q: "How long is the royal loop?", a: "Three to four hours if you include Wat Pho and the Wat Arun ferry. Start at 08:30." },
      { q: "Chatuchak on a Friday?", a: "No. Use Or Tor Kor at the same MRT on weekdays." },
    ],
  },
  {
    path: "/bangkok/nightlife-districts",
    title: "Bangkok nightlife districts",
    description: "Bangkok nights split by district: Soi 11 for a loud strip, Thonglor for dinner bars, Charoenkrung for shophouse cocktails, and Silom roofs.",
    lede: "Bangkok nightlife is known for five districts rather than one crawl, so sleep where you will Grab home after the last BTS. Soi 11 is the loud strip, Thonglor is dinner first, and Charoenkrung is the shophouse pour.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "Nightlife districts", href: "/bangkok/nightlife-districts" },
    ],
    facts: [
      { label: "Last BTS", value: "Around midnight" },
      { label: "Grab band", value: "80 to 200 THB across central districts" },
      { label: "Cocktails", value: "400 to 650 THB in named rooms" },
      { label: "Rule", value: "One district per night" },
    ],
    chips: [
      "Soi 11",
      "Thonglor",
      "Charoenkrung",
    ],
    photo: "/photos/nightlife.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "Open [Sukhumvit Soi 11](/interests/nightlife/sukhumvit-soi-11) if you already sleep at Nana or Asok, and open [Thonglor and Ekkamai](/interests/nightlife/thonglor-ekkamai) if dinner is first. [Charoenkrung and Soi Nana](/interests/nightlife/charoenkrung-soi-nana) is the shophouse pour near Yaowarat, and [Silom and Sathorn](/interests/nightlife/silom-sathorn) holds roofs and jazz. [Ari and Pradipat](/interests/nightlife/ari-pradipat) is gardens and vinyl.",
      "A 2026 crafted cocktail is often 400 to 650 THB, and after the last BTS, Grab home on the same side of town. Do not rent a scooter at 01:00, and the main [nightlife hub](/interests/nightlife) lists rooms. This page only names which district to open.",
    ],
    sections: [
      {
        id: "pick",
        title: "Pick one district",
        bullets: [
          "**Soi 11:** Loud, walkable, Havana Social at 20:00. Sleep Nana.",
          "**Thonglor:** Reservations, unmarked doors. Sleep Thong Lo or Ekkamai.",
          "**Charoenkrung:** River and timber rooms. No BTS at the door.",
          "**Silom:** Sky Bar walk-in, Suan Phlu jazz. Moon Bar stays closed until 2 December 2026.",
          "**Ari:** Craft beer gardens. Last BTS still matters.",
        ],
      },
    ],
    portraits: [
      { title: "Nightlife hub", href: "/interests/nightlife", photo: "/photos/nightlife.jpg" },
      { title: "Soi 11", href: "/interests/nightlife/sukhumvit-soi-11", photo: "/photos/sukhumvit.jpg" },
      { title: "Thonglor", href: "/interests/nightlife/thonglor-ekkamai", photo: "/photos/phrom-phong-and-thong-lo.jpg" },
      { title: "Charoenkrung", href: "/interests/nightlife/charoenkrung-soi-nana", photo: "/photos/riverside.jpg" },
    ],
    affiliates: [
    stay("Sleep on the district you drink", "Sukhumvit or river", "The 01:00 Grab is the real cost if you hotel-hop.", stayAreaLink('thonglor'), "/photos/silom-night.jpg"),
    klook("Rooftop tickets", "Decks", "Mahanakhon SkyWalk if you want a ticketed view, not a bar tab.", klookTickets('Mahanakhon SkyWalk'), "/photos/siam.jpg"),
    ],
    faqs: [
      { q: "Can you do Soi 11 and Thonglor the same night?", a: "You can. You will spend the night in a car. Pick one." },
      { q: "Where do you sleep for Charoenkrung bars?", a: "Riverside or a short Grab from Chinatown. There is no BTS at Soi Nana." },
    ],
  },
  {
    path: "/bangkok/khao-san",
    title: "Khao San Road",
    description: "Khao San is a backpacker street north of the old moat. It fits a cheap bunk and a late bucket, not a first-timer BTS hotel or a palace-week base.",
    lede: "Khao San is known for backpacker hostels and a late street, not a first Bangkok hotel with a BTS gate. Sleep here if that street is why you came, and sleep Sukhumvit if you want trains and dinner density.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "Khao San", href: "/bangkok/khao-san" },
    ],
    facts: [
      { label: "Where", value: "North of Rattanakosin, west of Democracy Monument" },
      { label: "Rail", value: "No BTS at the door; Grab or a river hop" },
      { label: "Palace", value: "Morning walk or a short Grab, not a reason to sleep here" },
      { label: "Night", value: "Loud after 22:00; earplugs or a soi off the strip" },
    ],
    chips: [
      "Backpacker strip",
      "No BTS",
      "Old City edge",
    ],
    photo: "/photos/old-city.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "Khao San sits one moat north of the palace island; it is a hostel and travel-desk street. Rooms that face the road get bass until late; a block off the strip is quieter and still a 10 minute walk. The palace is close at 08:00 and a different scene after dark.",
      "A 2026 Grab to Sukhumvit after midnight is often 150 to 280 THB and 25 to 45 minutes. There is no Skytrain gate. Eat on the soi, then move. First-timers who want dinner density should open [where to stay](/bangkok/where-to-stay) instead of booking a Khao San pin because it looks central on a map.",
    ],
    sections: [
      {
        id: "use",
        title: "When this street is the right pin",
        bullets: [
          "**Yes:** A bunk, a visa-run desk, a late street, a palace dawn walk.",
          "**No:** A first BTS hotel, a rooftop week, a family stay.",
          "**Pair:** [Rattanakosin tickets](/bangkok/rattanakosin) in the morning, then leave.",
        ],
      },
    ],
    portraits: [
      { title: "Old City stays", href: "/bangkok/old-city-rattanakosin", photo: "/photos/old-city.jpg" },
      { title: "Rattanakosin tickets", href: "/bangkok/rattanakosin", photo: "/photos/grand-palace.jpg" },
      { title: "Where to stay", href: "/bangkok/where-to-stay", photo: "/photos/sukhumvit.jpg" },
      { title: "Chinatown", href: "/bangkok/chinatown-yaowarat", photo: "/photos/yaowarat.jpg" },
    ],
    affiliates: [
    stay("Khao San Road hotels", "Only if the street is the stay", "Search Khao San, then filter for a soi off the road.", stayAreaLink('khao-san'), "/photos/chinatown-day.jpg"),
    klook("Palace morning tickets", "Tickets", "Walk or Grab to Mani Noppharat at 08:30. Do not buy a closed-palace tuk-tuk.", klookTickets('Grand Palace Bangkok'), "/photos/wat-pho.jpg"),
    ],
    faqs: [
      { q: "Is Khao San safe at night?", a: "The street is busy and lit. Petty theft and spilled drinks are the usual problems. Sleep off the road if you want quiet." },
      { q: "Better than Sukhumvit for a first stay?", a: "No. Sukhumvit has the BTS and dinner. Khao San has the backpacker street." },
    ],
  },
  {
    path: "/bangkok/chatuchak",
    title: "Chatuchak and JJ weekend",
    description: "Chatuchak Weekend Market runs Saturday and Sunday at MRT Kamphaeng Phet. Or Tor Kor next door is the daily fresh hall. Go early and carry cash.",
    lede: "Chatuchak is known for a Saturday and Sunday market grid at MRT Kamphaeng Phet, and it fits one morning if you go early. On weekdays use Or Tor Kor next door instead of hunting an empty JJ plan.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "Chatuchak", href: "/bangkok/chatuchak" },
    ],
    facts: [
      { label: "Days", value: "Saturday and Sunday" },
      { label: "Rail", value: "MRT Kamphaeng Phet Exits 2 and 3" },
      { label: "Hours", value: "Roughly 09:00 to 18:00; go at 09:30" },
      { label: "Weekday", value: "Or Tor Kor daily next door" },
    ],
    chips: [
      "Sat-Sun only",
      "MRT Kamphaeng Phet",
      "Or Tor Kor weekdays",
    ],
    photo: "/photos/chatuchak.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "[Chatuchak Weekend Market](/attractions/chatuchak-weekend-market) is a weekend grid, not a daily bazaar, and ride MRT Kamphaeng Phet and use Exit 2 or 3. Sections sprawl; pick plants, crafts, or clothes and leave by 15:00 when heat and tour groups peak. A 2026 MRT tap from Sukhumvit (Asok) is one line and usually under 40 THB.",
      "[Or Tor Kor](/thai-food/or-tor-kor-and-bangkok-fresh-markets) is the daily fresh hall next door, and use it Monday to Friday. Do not combine Chatuchak and the Grand Palace on the same morning, and sleep stays on [where to stay](/bangkok/where-to-stay). This page is access, not a stall map.",
    ],
    sections: [
      {
        id: "access",
        title: "How to do one market morning",
        bullets: [
          "**Rail:** MRT Kamphaeng Phet. BTS Mo Chit is a longer walk.",
          "**Cash:** Many stalls still want notes. ATMs sit at the edge.",
          "**Bag:** One tote. You will not want a suitcase in the aisles.",
          "**Exit:** 14:00 to 15:00. The last hour is heat, not bargains.",
        ],
      },
    ],
    portraits: [
      { title: "Chatuchak attraction", href: "/attractions/chatuchak-weekend-market", photo: "/photos/chatuchak.jpg" },
      { title: "Or Tor Kor", href: "/thai-food/or-tor-kor-and-bangkok-fresh-markets", photo: "/photos/thai-food-bangkok-street.jpg" },
      { title: "Getting around", href: "/bangkok/getting-around", photo: "/photos/bts.jpg" },
      { title: "Day trips", href: "/bangkok/day-trips", photo: "/photos/ayutthaya.jpg" },
    ],
    affiliates: [
    stay("Stay on the MRT, not at the market", "Asok or a north-line hotel", "Chatuchak is a morning. Sleep where you eat at night.", stayAreaLink('sukhumvit'), "/photos/sukhumvit.jpg"),
    klook("Market and city tours", "Tours", "Skip a guided Chatuchak walk unless you want a named meeting point.", klookTours('Chatuchak Weekend Market'), "/photos/yaowarat.jpg"),
    ],
    faqs: [
      { q: "Is Chatuchak open on Friday?", a: "No. Saturday and Sunday. Use Or Tor Kor on weekdays." },
      { q: "BTS Mo Chit or MRT Kamphaeng Phet?", a: "Kamphaeng Phet Exits 2 and 3 drop you closer to the weekend grid." },
    ],
  },
  {
    path: "/bangkok/iconsiam-and-charoen-nakhon",
    title: "ICONSIAM and Charoen Nakhon",
    description: "ICONSIAM is the west-bank mall on Charoen Nakhon: a free river boat from Sathorn, gold-shop halls, and a sunset deck. One afternoon is enough.",
    lede: "ICONSIAM is known for a free mall boat from Sathorn and a west-bank sunset deck, and it fits one late afternoon. Sleep on the east bank unless a river hotel on Charoen Nakhon is already the stay.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "ICONSIAM", href: "/bangkok/iconsiam-and-charoen-nakhon" },
    ],
    facts: [
      { label: "Boat", value: "Free mall shuttle from Sathorn pier" },
      { label: "Rail side", value: "BTS Saphan Taksin, then the boat" },
      { label: "Time", value: "Late afternoon into evening" },
      { label: "Hotel note", value: "Charoen Nakhon is a mall, not a first BTS base" },
    ],
    chips: [
      "West bank",
      "Free mall boat",
      "Sunset deck",
    ],
    photo: "/photos/riverside.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "Ride BTS to Saphan Taksin, walk to the Sathorn pier, and take the free ICONSIAM boat across the Chao Phraya. The mall holds a food hall, a gold-and-craft floor, and an outdoor deck that works at sunset. A 2026 BTS tap to Saphan Taksin from Siam is a few stops and often 17 to 32 THB.",
      "Sleep on [riverside Charoenkrung](/bangkok/riverside-charoenkrung) if you want an east-bank hotel pier, and Charoen Nakhon hotels exist for the view. They are not a first-timer BTS plan, and pair the mall with [Wat Arun](/attractions/wat-arun) only if you already sit on the river that morning, not as a third temple.",
    ],
    sections: [
      {
        id: "visit",
        title: "One west-bank evening",
        bullets: [
          "**Go:** 15:30 to 16:00 so the deck is open at sunset.",
          "**Boat:** Free shuttle. Keep the return time on a photo.",
          "**Eat:** Food hall first. Fine dining here is a reservation, not a wander.",
        ],
      },
    ],
    portraits: [
      { title: "Riverside stays", href: "/bangkok/riverside-charoenkrung", photo: "/photos/riverside.jpg" },
      { title: "Wat Arun", href: "/attractions/wat-arun", photo: "/photos/wat-arun-night.jpg" },
      { title: "Getting around", href: "/bangkok/getting-around", photo: "/photos/bts.jpg" },
      { title: "Nightlife districts", href: "/bangkok/nightlife-districts", photo: "/photos/nightlife.jpg" },
    ],
    affiliates: [
    stay("East-bank river hotels", "Charoenkrung", "Sleep where the orange-flag boat already stops.", stayAreaLink('riverside'), "/photos/resort-capella-bangkok.jpg"),
    klook("River and temple tickets", "Tickets", "Wat Arun is 200 THB. The mall boat is free and a different pier.", klookTickets('Wat Arun Bangkok'), "/photos/wat-arun-night.jpg"),
    ],
    faqs: [
      { q: "Do you need a ticket for the ICONSIAM boat?", a: "No. It is a mall shuttle from Sathorn. Bring a little time; boats bunch at sunset." },
      { q: "Should you hotel on Charoen Nakhon?", a: "Only for the view. First-timers still sleep Sukhumvit or east-bank riverside." },
    ],
  },
  {
    path: "/bangkok/victory-monument-and-pratunam",
    title: "Victory Monument and Pratunam",
    description: "Victory Monument is a van hub. Pratunam is a wholesale clothing grid around Platinum. Both sit north of Siam. Shop weekdays, not as a hotel base.",
    lede: "Victory Monument is known for northbound vans, and Pratunam is known for wholesale clothing halls north of Siam. Together they fit a shopping morning, not a first Bangkok hotel.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "Victory Monument", href: "/bangkok/victory-monument-and-pratunam" },
    ],
    facts: [
      { label: "Rail", value: "BTS Victory Monument; buses and vans at the circle" },
      { label: "Pratunam", value: "Platinum, Pratunam Market, wholesale sois" },
      { label: "Hours", value: "Weekday mornings for wholesale; malls run later" },
      { label: "Hotel", value: "Sleep Siam or Sukhumvit, not the circle" },
    ],
    chips: [
      "Van hub",
      "Wholesale halls",
      "North of Siam",
    ],
    photo: "/photos/siam.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "BTS Victory Monument is the circle for vans toward Ayutthaya, Pak Chong, and the north. The traffic is the point and the problem; walk or hop one BTS stop rather than crossing the roundabout at rush hour. A 2026 BTS tap from Siam is one or two stops, often 17 THB.",
      "Pratunam is the wholesale clothing grid: Platinum Fashion Mall, Pratunam Market, and sois of bulk racks. Go on a weekday morning if you want stock, not a souvenir wander, and sleep on [Siam and Silom](/bangkok/siam-silom) or Sukhumvit. This is a shopping add-on, not a stay.",
    ],
    sections: [
      {
        id: "use",
        title: "Shop or van, not both in one hour",
        bullets: [
          "**Vans:** Read the destination sign. Ayutthaya trains are still cleaner for ruins.",
          "**Platinum:** Air-con halls. Floors are wholesale; prices drop with volume.",
          "**Heat:** Midday at the circle is a waste. Shop, then BTS out.",
        ],
      },
    ],
    portraits: [
      { title: "Siam and Silom", href: "/bangkok/siam-silom", photo: "/photos/siam.jpg" },
      { title: "Where to stay", href: "/bangkok/where-to-stay", photo: "/photos/sukhumvit.jpg" },
      { title: "Day trips", href: "/bangkok/day-trips", photo: "/photos/ayutthaya.jpg" },
      { title: "Getting around", href: "/bangkok/getting-around", photo: "/photos/bts.jpg" },
    ],
    affiliates: [
    stay("Siam hotels above the halls", "Interchange", "Shop Pratunam, sleep on the BTS, not at the roundabout.", stayAreaLink('siam'), "/photos/sukhumvit.jpg"),
    klook("City vans and ruin days", "Tours", "A licensed Ayutthaya van beats a circle guess if you do not read Thai signs.", klookTours('Ayutthaya from Bangkok'), "/photos/ayutthaya.jpg"),
    ],
    faqs: [
      { q: "Is Pratunam a night market?", a: "No. It is a wholesale day grid with malls that run late. Yaowarat is the night food street." },
      { q: "Victory Monument for a hotel?", a: "No. Use it as a van or BTS node. Sleep Siam or Sukhumvit." },
    ],
  },
  {
    path: "/bangkok/on-nut-and-phra-khanong",
    title: "On Nut and Phra Khanong",
    description: "On Nut and Phra Khanong sit east of Ekkamai on the BTS. Rooms cost less than Thonglor. Dinner is local. Nightlife is a train ride back toward Soi 11.",
    lede: "On Nut is known for cheaper BTS hotels east of Ekkamai, and it fits a longer Bangkok stay on a budget. It is a weak pin for a first two nights if walkable dinner bars are the trip.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "On Nut", href: "/bangkok/on-nut-and-phra-khanong" },
    ],
    facts: [
      { label: "Rail", value: "BTS On Nut and Phra Khanong" },
      { label: "Tap", value: "Often 17 to 37 THB back to Asok" },
      { label: "Who", value: "Week-plus stays, lower rates" },
      { label: "Night", value: "Ride west for Soi 11 or Thonglor" },
    ],
    chips: [
      "East BTS",
      "Lower rates",
      "Local dinner",
    ],
    photo: "/photos/sukhumvit.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "On Nut and Phra Khanong continue the Sukhumvit BTS past Ekkamai; hotels undercut Thonglor. Street food and Isan rooms are the dinner; a 2026 tap back to Asok is usually 17 to 37 THB and under 20 minutes. After midnight you pay the Grab.",
      "Book this strip if you already know Bangkok and want a week of rail plus cheaper nights. First-timers who want walkable dinner bars should stay on [Sukhumvit](/bangkok/sukhumvit) between Nana and Thong Lo. Pair with [getting around](/bangkok/getting-around) for last-train timing.",
    ],
    sections: [
      {
        id: "stay",
        title: "When the east BTS is the right pin",
        bullets: [
          "**Yes:** Seven nights, a kitchenette, local dinner, a daily BTS commute.",
          "**No:** Two nights and a rooftop list. BTS time will eat the evenings.",
          "**On Nut night market:** Useful if you already sleep here. Not a cross-town plan.",
        ],
      },
    ],
    portraits: [
      { title: "Sukhumvit sois", href: "/bangkok/sukhumvit", photo: "/photos/sukhumvit.jpg" },
      { title: "Where to stay", href: "/bangkok/where-to-stay", photo: "/photos/siam.jpg" },
      { title: "Nightlife districts", href: "/bangkok/nightlife-districts", photo: "/photos/nightlife.jpg" },
      { title: "Ekkamai bars", href: "/interests/nightlife/thonglor-ekkamai", photo: "/photos/phrom-phong-and-thong-lo.jpg" },
    ],
    affiliates: [
    stay("On Nut hotels", "East BTS", "Search On Nut if the rate matters more than a Thonglor walk.", hotelSearchLink('On Nut', 'bangkok'), "/photos/ari.jpg"),
    stay("Thonglor if dinner is the trip", "BTS Thong Lo", "Pay more, walk to bars, skip the late eastbound Grab.", stayAreaLink('thonglor'), "/photos/phrom-phong-and-thong-lo.jpg"),
    ],
    faqs: [
      { q: "On Nut or Phrom Phong for a first stay?", a: "Phrom Phong. On Nut is a longer-stay value pin." },
      { q: "Is On Nut noisy?", a: "The BTS and Sukhumvit Road are. Sois behind the road are ordinary Bangkok residential." },
    ],
  },
  {
    path: "/bangkok/khlongs-and-canal-boats",
    title: "Khlongs and canal boats",
    description: "Bangkok canal boats cut the city on Khlong Saen Saep. Orange-flag river boats use the Chao Phraya. Weekend khlong markets are a different, slower morning.",
    lede: "Bangkok khlong boats are known for a fast Saen Saep commute and a slower weekend market, and they fit travellers who already use the BTS and want one water hop. The Chao Phraya orange flag is the temple boat.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "Khlong boats", href: "/bangkok/khlongs-and-canal-boats" },
    ],
    facts: [
      { label: "Saen Saep", value: "East-west canal boat; stand and duck" },
      { label: "River", value: "Orange-flag Chao Phraya from Saphan Taksin" },
      { label: "Tha Tien", value: "5 THB to Wat Arun" },
      { label: "Weekend", value: "Khlong Lat Mayom on a Saturday or Sunday" },
    ],
    chips: [
      "Saen Saep",
      "Chao Phraya",
      "Weekend khlong",
    ],
    photo: "/photos/riverside.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "The Khlong Saen Saep boat is a commute: low roof, spray, and a few coins; it links the old town edge toward Thonglor faster than a stuck Sukhumvit taxi at 17:30. Wear clothes you can dry; a 2026 ride is a few coins, not a tour price.",
      "Chao Phraya orange-flag boats are the tourist-useful river, and Saphan Taksin is the BTS gate. The Tha Tien crossing to Wat Arun is 5 THB. Weekend canal markets such as Khlong Lat Mayom are a Saturday or Sunday morning, not a weekday plan. See [getting around](/bangkok/getting-around) for rail first.",
    ],
    sections: [
      {
        id: "which",
        title: "Which water",
        table: {
          headers: ["Water","Use","2026 note"],
          rows: [
            ["Saen Saep boat","East-west rush-hour skip","Duck. Keep phones in a bag."],
            ["Orange-flag river","Old City and riverside hotels","Saphan Taksin BTS gate"],
            ["Tha Tien ferry","Wat Arun","5 THB"],
            ["Khlong Lat Mayom","Weekend market","Morning only"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Getting around", href: "/bangkok/getting-around", photo: "/photos/bts.jpg" },
      { title: "Wat Arun", href: "/attractions/wat-arun", photo: "/photos/wat-arun-night.jpg" },
      { title: "Riverside", href: "/bangkok/riverside-charoenkrung", photo: "/photos/riverside.jpg" },
      { title: "Day trips", href: "/bangkok/day-trips", photo: "/photos/ayutthaya.jpg" },
    ],
    affiliates: [
    stay("Hotels with a pier", "Riverside", "Sleep on the river if boats are the week, not a one-hour stunt.", stayAreaLink('riverside'), "/photos/resort-mandarin-oriental-bangkok.jpg"),
    klook("River and market tours", "Tours", "A licensed boat is useful only if you want a guide. The orange flag is enough for Wat Arun.", klookTours('Bangkok river cruise'), "/photos/wat-arun-night.jpg"),
    ],
    faqs: [
      { q: "Is the Saen Saep boat a sightseeing ride?", a: "No. It is a commute with spray. Use the Chao Phraya orange flag if you want temples from the water." },
      { q: "Khlong Lat Mayom on a Tuesday?", a: "No. Go on a weekend morning." },
    ],
  },
  {
    path: "/bangkok/lumphini-and-pathum-wan",
    title: "Lumphini and Pathum Wan",
    description: "Lumphini Park opens about 04:30 for walkers. Pathum Wan holds Siam malls, Jim Thompson House, and the BTS interchange. Dawn park, then rail shopping.",
    lede: "Lumphini is known for a dawn park walk among monitor lizards, and Pathum Wan is the Siam mall interchange. Together they fit a cooler morning, not a nightlife plan.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Bangkok", href: "/bangkok" },
      { name: "Lumphini", href: "/bangkok/lumphini-and-pathum-wan" },
    ],
    facts: [
      { label: "Park", value: "Lumphini opens about 04:30" },
      { label: "Rail", value: "MRT Lumphini and Si Lom; BTS Siam and National Stadium" },
      { label: "Jim Thompson", value: "Soi Kasemsan 2, BTS National Stadium" },
      { label: "Pair", value: "Silom stays if the park is why you came" },
    ],
    chips: [
      "Dawn park",
      "Siam malls",
      "Jim Thompson",
    ],
    photo: "/photos/lumphini.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Bangkok" },
    paragraphs: [
      "Lumphini Park is the dawn reason to sleep on [Silom and Sathon](/bangkok/silom-sathon), and gates open about 04:30. Walkers, aerobics, and monitor lizards share the lawns, and MRT Lumphini and Si Lom sit on the edge. Midday heat empties the paths.",
      "Pathum Wan is the mall box: Siam, National Stadium, and [Jim Thompson House](/bangkok/siam-silom) on Soi Kasemsan 2, and a 2026 BTS tap from Sala Daeng to Siam is a 2-stop hop, often 17 THB. Shop after the park, not before, and nightlife here is thin; use [Silom nightlife](/interests/nightlife/silom-sathorn) if you stay.",
    ],
    sections: [
      {
        id: "morning",
        title: "A park-then-mall morning",
        bullets: [
          "**05:30 to 07:30:** Park loop. Carry water. The lake path is the easy circuit.",
          "**09:00:** Coffee on Silom or a BTS hop to Siam.",
          "**Jim Thompson:** Late morning if you want teak houses, not another mall.",
        ],
      },
    ],
    portraits: [
      { title: "Silom park and rail", href: "/bangkok/silom-sathon", photo: "/photos/silom-and-sathorn.jpg" },
      { title: "Siam and Silom", href: "/bangkok/siam-silom", photo: "/photos/siam.jpg" },
      { title: "Getting around", href: "/bangkok/getting-around", photo: "/photos/bts.jpg" },
      { title: "Where to stay", href: "/bangkok/where-to-stay", photo: "/photos/sukhumvit.jpg" },
    ],
    affiliates: [
    stay("Silom hotels on the park", "Sala Daeng", "Dawn walks, then BTS. Dinner still means a hop to Thonglor.", stayAreaLink('silom'), "/photos/silom-and-sathorn.jpg"),
    klook("Jim Thompson and city tickets", "Tickets", "House tickets beat a midday guess if the queue is long.", klookTickets('Jim Thompson House'), "/photos/jim-thompson.jpg"),
    ],
    faqs: [
      { q: "Can you run in Lumphini at noon?", a: "You can. You should not. Go at dawn or after 16:30." },
      { q: "Is Pathum Wan a hotel district?", a: "Siam hotels work for malls and the ARL link. The park itself is a Silom stay." },
    ],
  }
];
