import {
  stayLink,
  stayAreaLink,
  hotelSearchLink,
  transferLink,
  trainLink,
  klookTours,
  klookTickets,
  klookIslandHopping,
} from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'Search stays', photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'See tickets', photo, partner: 'klook' };
}

export const WAVE22_SECONDARY_TITLE_CORE: Record<string, string> = {
  "/pai/where-to-stay": "Where to Stay in Pai: Town Grid or River Quiet",
  "/pai/getting-around": "Pai Getting Around: Songthaew, Scooter, Route 1095",
  "/pai/best-time-to-visit": "Best Time to Visit Pai: Cool Months versus Haze",
  "/pai/day-trips": "Pai Day Trips: Canyon, Springs, Mae Hong Son Loop",
  "/pai/top-attractions": "Pai Top Attractions: Canyon and Walking Street",
  "/pattaya/where-to-stay": "Where to Stay in Pattaya: Jomtien versus Wongamat",
  "/pattaya/jomtien": "Jomtien Beach, Pattaya: Swim Sand vs Walking Street",
  "/pattaya/koh-larn": "Koh Larn from Pattaya: Ferry Fare, Time, and Pier",
  "/pattaya/best-time-to-visit": "Best Time to Visit Pattaya: Gulf Heat and Rain",
  "/pattaya/getting-around": "Pattaya Getting Around: Ekkamai, Baht Bus, Ferry",
  "/hua-hin/where-to-stay": "Where to Stay in Hua Hin: Town or Khao Takiab",
  "/hua-hin/best-time-to-visit": "Best Time to Visit Hua Hin: Gulf Months and Weekends",
  "/hua-hin/day-trips": "Hua Hin Day Trips: Sam Roi Yot, Phraya Nakhon",
  "/hua-hin/getting-around": "Hua Hin Getting Around: Southern Train and Grabs",
  "/hua-hin/top-attractions": "Hua Hin Top Attractions: Market, Hill, Royal Beach",
  "/kanchanaburi/where-to-stay": "Where to Stay in Kanchanaburi: Town or Upriver",
  "/kanchanaburi/getting-around": "Kanchanaburi Transit: Thonburi Train, Not Bang Sue",
  "/kanchanaburi/best-time-to-visit": "Best Time to Visit Kanchanaburi: Inland Months",
  "/kanchanaburi/day-trips": "Kanchanaburi Day Trips: Erawan Falls and the Line",
  "/kanchanaburi/river-kwai": "River Kwai, Kanchanaburi: Bridge, Railway, Town",
  "/khao-lak/where-to-stay": "Where to Stay in Khao Lak: Bang Niang and Nang Thong",
  "/khao-lak/best-time-to-visit": "Best Time to Visit Khao Lak: Andaman and Similan",
  "/khao-lak/getting-around": "Khao Lak Getting Around: Highway 4 and Thap Lamu",
  "/khao-lak/day-trips": "Khao Lak Day Trips: Similan Boats and Park Dates",
  "/khao-lak/bang-niang": "Bang Niang, Khao Lak: Beach Strip Stay and Dinner",
  "/sukhothai/where-to-stay": "Where to Stay in Sukhothai: Old Town at the Gate",
  "/sukhothai/historical-park": "Sukhothai Historical Park: Zones, Fees, Bicycles",
  "/sukhothai/best-time-to-visit": "Best Time to Visit Sukhothai: Cool Dawn Bike Months",
  "/sukhothai/getting-around": "Sukhothai Getting Around: THS First, PHS Fallback",
  "/sukhothai/day-trips": "Sukhothai Day Trips: Si Satchanalai and Extra Zones",
  "/ayutthaya/where-to-stay": "Where to Stay in Ayutthaya: Only If You Want Dawn",
  "/ayutthaya/historical-park": "Ayutthaya Historical Park: 80 THB Sites or Combo",
  "/ayutthaya/from-bangkok": "Ayutthaya from Bangkok: One-Hour Train Day Trip",
  "/ayutthaya/getting-around": "Ayutthaya Getting Around: Bicycle, Tuk-Tuk, Island",
  "/ayutthaya/best-time-to-visit": "Best Time to Visit Ayutthaya: Heat, Flood, Dawn",
  "/chiang-rai/where-to-stay": "Where to Stay in Chiang Rai: Town Before Temples",
  "/chiang-rai/white-temple-day": "White Temple Day in Chiang Rai: 200 THB Circuit",
  "/chiang-rai/best-time-to-visit": "Best Time to Visit Chiang Rai: Cool Air vs Haze",
  "/chiang-rai/getting-around": "Chiang Rai Getting Around: CEI, Green Bus, Grabs",
  "/chiang-rai/golden-triangle": "Golden Triangle from Chiang Rai: Mekong Day Plan",
};

export const wave22SecondaryPages: Page[] = [
  {
    path: "/pai/where-to-stay",
    title: "Where to stay in Pai",
    description: "Pai hotels split the walking-street grid from quieter river guesthouses. Sleep two nights after Route 1095. Start from CNX; no scheduled Pai airport.",
    lede: "Pai is known for a short walking-street grid after the 762 bends on Route 1095, so sleep in town for dinner or across the river if you want quiet. Plan two nights so the long drive from Chiang Mai is worth it.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Pai", href: "/pai" },
      { name: "Where to stay", href: "/pai/where-to-stay" },
    ],
    facts: [
      { label: "Default", value: "Pai town, ten minutes from the van station" },
      { label: "Quiet", value: "Across the river or toward the hot springs" },
      { label: "Road in", value: "Route 1095, 135 km, 3 to 4.5 hours" },
      { label: "Airport", value: "No scheduled Pai flights; start from CNX" },
    ],
    chips: [
      "Town grid",
      "River quiet",
      "Two nights",
    ],
    photo: "/photos/pai.jpg",
    geo: { lat: 19.358, lon: 98.44, containedIn: "Northern Thailand" },
    paragraphs: [
      "Book [Pai](/pai) after you accept Route 1095, and the licensed van from [Chiang Mai](/chiang-mai) covers about 135 km in 3 to 4.5 hours and 762 bends. Sleep in town if Walking Street and a canyon songthaew are the stay, and sleep across the river if speakers until midnight are not the trip. Weekend vans fill the soi; weekdays are quieter.",
      "There is no scheduled Pai airport. Start from CNX and lock the first two nights on Trip.com before you pick a canyon tour. Pair this page with [Chiang Mai to Pai](/get-there/chiang-mai-to-pai) for Arcade counters and walk-up fares around 210 to 250 THB.",
    ],
    sections: [
      {
        id: "areas",
        title: "Which pin fits which night",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["Pai town","Cafes, Walking Street, songthaew","Ten-minute walk from the van station"],
            ["Across the river","Quieter guesthouses","Need a scooter or a morning Grab"],
            ["Hot-springs road","Pools and space","Not a first walking night"],
            ["Chiang Mai night before","Rest before 1095","CNX is the real airport"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Pai hub", href: "/pai", photo: "/photos/pai.jpg" },
      { title: "Chiang Mai to Pai", href: "/get-there/chiang-mai-to-pai", photo: "/photos/northern.jpg" },
      { title: "Getting around", href: "/pai/getting-around", photo: "/photos/doi-suthep.jpg" },
      { title: "Chiang Mai", href: "/chiang-mai", photo: "/photos/doi-suthep.jpg" },
    ],
    affiliates: [
    stay("Pai town stays", "Walking Street", "Search the grid if dinner and a canyon songthaew are the stay.", stayLink('pai'), "/photos/northern.jpg"),
    stay("Chiang Mai night before", "CNX start", "Sleep here. Arcade is a morning Grab, not a 05:00 walk.", stayLink('chiang-mai'), "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "Town or river for two nights?", a: "Town if you want Walking Street. River if you want sleep. Do not split one night each after a 4.5 hour van." },
      { q: "Can you fly into Pai?", a: "No scheduled commercial flights. Start from CNX and take Route 1095." },
    ],
  },
  {
    path: "/pai/getting-around",
    title: "Getting around Pai",
    description: "Pai is a walking town after Route 1095. Use a songthaew to the canyon. Rent a scooter only if you already ride. Vans from Chiang Mai take 3 to 4.5 hours.",
    lede: "Pai is known for a walkable town grid and a hard mountain road in, so stay on foot in town and use a songthaew for the canyon. Skip a first-week scooter on those 762 bends if Chiang Mai was your first Thai city.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Pai", href: "/pai" },
      { name: "Getting around", href: "/pai/getting-around" },
    ],
    facts: [
      { label: "Road in", value: "Route 1095, 135 km, 762 bends" },
      { label: "Van time", value: "3 to 4.5 hours from Chiang Mai Arcade" },
      { label: "Town", value: "Walk; Walking Street is ten minutes from the station" },
      { label: "Airport", value: "None scheduled; start CNX" },
    ],
    chips: [
      "Walk in town",
      "Songthaew out",
      "No Pai flights",
    ],
    photo: "/photos/northern.jpg",
    geo: { lat: 19.358, lon: 98.44, containedIn: "Northern Thailand" },
    paragraphs: [
      "Arrive on [Chiang Mai to Pai](/get-there/chiang-mai-to-pai), and Prempracha vans leave Arcade and take 3 to 4.5 hours over 135 km. The Pai station on Chaisongkhram is a short walk to [the town hub](/pai), and in town you walk. For Pai Canyon or the bamboo bridge, agree a songthaew fare before you climb in.",
      "A 2026 walk-up van seat is often 210 to 250 THB. Do not ride Route 1095 at night. Do not rent a 150 cc bike on the first morning if Chiang Mai was your first Thai city. [Chiang Mai](/chiang-mai) remains the airport and the place to land and rest before the mountain road.",
    ],
    sections: [
      {
        id: "modes",
        title: "Which mode for which hop",
        bullets: [
          "**Walk:** Town grid, Walking Street, most guesthouses.",
          "**Songthaew:** Canyon, hot springs, viewpoint. Agree the fare.",
          "**Scooter:** Only with a motorcycle licence. Not a 1095 lesson.",
          "**Van back:** Vans back to Chiang Mai's Arcade Bus Terminal; book Saturday mornings.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/pai/where-to-stay", photo: "/photos/pai.jpg" },
      { title: "Route 1095", href: "/get-there/chiang-mai-to-pai", photo: "/photos/northern.jpg" },
      { title: "Day trips", href: "/pai/day-trips", photo: "/photos/doi-suthep.jpg" },
      { title: "Pai hub", href: "/pai", photo: "/photos/pai.jpg" },
    ],
    affiliates: [
    stay("Sleep in Pai after the bends", "Two nights", "The 762-bend drive is long enough that you should sleep two nights after you arrive.", stayLink('pai'), "/photos/pai.jpg"),
    klook("Pai vans from Chiang Mai", "Tours", "A day trip is a long sit. The point of Pai is to sleep there, not to day-trip the bends.", klookTours('Pai Chiang Mai'), "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "Scooter or songthaew in Pai town?", a: "Walk in town. Songthaew for the canyon. Scooter only if you already ride mountain roads." },
      { q: "Is there a Pai airport hop?", a: "No scheduled flights. Start from CNX." },
    ],
  },
  {
    path: "/pai/best-time-to-visit",
    title: "Best time to visit Pai",
    description: "Pai is coolest from November to February. March and April can sit under haze. Route 1095 stays the only road; no scheduled Pai airport.",
    lede: "Pai is known for cool hill nights from November to February, while haze in March and April suits a cafe stay more than a ridge photo. Sleep two nights after Route 1095 in any month.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Pai", href: "/pai" },
      { name: "Best time to visit", href: "/pai/best-time-to-visit" },
    ],
    facts: [
      { label: "Cool dry", value: "November to February" },
      { label: "Haze", value: "March to April burn-season risk" },
      { label: "Rain", value: "July to September; earlier days on 1095" },
      { label: "Road", value: "135 km, 3 to 4.5 hours, 762 bends" },
    ],
    chips: [
      "Nov to Feb",
      "Haze Mar-Apr",
      "Year-round road",
    ],
    photo: "/photos/doi-suthep.jpg",
    geo: { lat: 19.358, lon: 98.44, containedIn: "Northern Thailand" },
    paragraphs: [
      "[Pai](/pai) sits in the hills, not on a coast calendar, and November to February is the cool window and the usual first go. March and April can hold farm-burn haze that kills the viewpoint even when Route 1095 is dry. Songkran in Pai is a water fight, not a temple circuit.",
      "Vans still take 3 to 4.5 hours from [Chiang Mai](/chiang-mai) in rain, and start from CNX; there is no scheduled Pai airport. Pair this page with [when to go](/plan/when-to-go) if you are also picking an Andaman week, and do not pair a haze week with [Chiang Rai](/chiang-rai) ridge photos on the same trip.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Feb:** Cool nights. Book town rooms on weekends.",
          "**Mar to Apr:** Check air quality. Views die first.",
          "**Jul to Sep:** Rideable with rain gear and earlier vans.",
          "**Any month:** 762 bends. Do not ride at night.",
        ],
      },
    ],
    portraits: [
      { title: "Pai hub", href: "/pai", photo: "/photos/pai.jpg" },
      { title: "Where to stay", href: "/pai/where-to-stay", photo: "/photos/northern.jpg" },
      { title: "Northern corridor", href: "/destinations/northern-thailand", photo: "/photos/northern.jpg" },
      { title: "Chiang Mai", href: "/chiang-mai", photo: "/photos/doi-suthep.jpg" },
    ],
    affiliates: [
    stay("Pai in the cool months", "Nov to Feb", "Lock two nights before the weekend vans fill.", stayLink('pai'), "/photos/pai.jpg"),
    klook("Hill vans in peak months", "Tours", "Read whether the canyon stop sits in the price.", klookTours('Pai Chiang Mai'), "/photos/northern.jpg"),
    ],
    faqs: [
      { q: "Is April a bad Pai month?", a: "It can be. Haze sits. Keep April if Walking Street is the trip, not the ridge." },
      { q: "Does rain close Route 1095?", a: "Rarely. It slows the van. Start earlier and skip a night ride." },
    ],
  },
  {
    path: "/pai/day-trips",
    title: "Pai day trips",
    description: "Day trips from Pai: the canyon and bamboo bridge, hot springs, or a longer Mae Hong Son hop. Route 1095 is 135 km in; do not day-trip Pai from Chiang Mai.",
    lede: "Pai day trips are known for a canyon walk and a hot-spring soak, and they fit after you already sleep in town. A same-day out-and-back from Chiang Mai wastes the 762-bend drive.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Pai", href: "/pai" },
      { name: "Day trips", href: "/pai/day-trips" },
    ],
    facts: [
      { label: "Canyon", value: "Songthaew from town; go early for shade" },
      { label: "Road in", value: "135 km, 3 to 4.5 hours, 762 bends" },
      { label: "Loop", value: "Mae Hong Son needs extra nights, not one van" },
      { label: "From CNX", value: "Overnight in Pai; not a day trip" },
    ],
    chips: [
      "Canyon",
      "Hot springs",
      "Loop later",
    ],
    photo: "/photos/pai.jpg",
    geo: { lat: 19.358, lon: 98.44, containedIn: "Northern Thailand" },
    paragraphs: [
      "From a [Pai](/pai) bed, the useful half-days are Pai Canyon, the bamboo bridge, and the hot springs. Agree the songthaew before you leave Walking Street, and [Chiang Mai to Pai](/get-there/chiang-mai-to-pai) is the inbound road, not a same-day circuit. The Mae Hong Son Loop is about 600 km; four days is the floor.",
      "A 2026 canyon songthaew is often a few hundred THB if you share the bench, and leave [Chiang Rai](/chiang-rai) off that same spare day. Start from CNX, sleep, then move, and see [top attractions](/pai/top-attractions) if you only want the in-town list.",
    ],
    sections: [
      {
        id: "picks",
        title: "Pick one spare day",
        table: {
          headers: ["Trip","Clock","Sleep after"],
          rows: [
            ["Pai Canyon and bamboo bridge","Half day","Pai town"],
            ["Hot springs","Morning or late afternoon","Pai"],
            ["Pang Mapha caves","Full day on the loop road","Soppong or Pai"],
            ["Mae Hong Son town","Too far for a day","Mae Hong Son overnight"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Pai hub", href: "/pai", photo: "/photos/pai.jpg" },
      { title: "Top attractions", href: "/pai/top-attractions", photo: "/photos/northern.jpg" },
      { title: "Chiang Mai to Pai", href: "/get-there/chiang-mai-to-pai", photo: "/photos/doi-suthep.jpg" },
      { title: "Chiang Rai", href: "/chiang-rai", photo: "/photos/chiang-rai.jpg" },
    ],
    affiliates: [
    stay("Keep the Pai base", "Two-night lock", "Day-trip the canyon. Overnight Mae Hong Son only if the loop is the trip.", stayLink('pai'), "/photos/northern.jpg"),
    klook("Canyon and spring vans", "Day tours", "Read whether the viewpoint and springs sit in one price.", klookTours('Pai canyon'), "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "Can you day-trip Pai from Chiang Mai?", a: "You can finish the tarmac. You will not have a trip. Sleep in Pai." },
      { q: "Add Chiang Rai the same day?", a: "No. Different highway, different night." },
    ],
  },
  {
    path: "/pai/top-attractions",
    title: "Pai top attractions",
    description: "Pai sights sit close to town: Walking Street, Pai Canyon, the bamboo bridge, and a hot-spring soak. The road in is Route 1095, 762 bends from CNX.",
    lede: "Pai attractions are known for a canyon rim and a walking-street night, and they fit two sleeps after Route 1095. The winding drive is the cost of getting here, not a free viewpoint on the way through.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Pai", href: "/pai" },
      { name: "Top attractions", href: "/pai/top-attractions" },
    ],
    facts: [
      { label: "Town", value: "Walking Street, ten minutes from the van station" },
      { label: "Canyon", value: "Songthaew; go before midday heat" },
      { label: "Road", value: "135 km, 3 to 4.5 hours, 762 bends" },
      { label: "Airport", value: "None scheduled; start CNX" },
    ],
    chips: [
      "Canyon",
      "Walking Street",
      "Two nights",
    ],
    photo: "/photos/northern.jpg",
    geo: { lat: 19.358, lon: 98.44, containedIn: "Northern Thailand" },
    paragraphs: [
      "Open [Pai](/pai) for the town grid first, and Walking Street is the evening. Pai Canyon and the bamboo bridge are the morning, and hot springs sit farther out; use a songthaew, not a hopeful walk. Haze in March and April can flatten the rim even when the road is dry.",
      "Arrive via [Chiang Mai to Pai](/get-there/chiang-mai-to-pai), and a 2026 van seat is often 210 to 250 THB for 3 to 4.5 hours. Do not treat a canyon selfie as a reason to skip [Chiang Mai](/chiang-mai) wats, and see [day trips](/pai/day-trips) if you want Mae Hong Son next.",
    ],
    sections: [
      {
        id: "board",
        title: "What to open first",
        table: {
          headers: ["Sight","How","Pair with"],
          rows: [
            ["Walking Street","On foot at dusk","Town stay"],
            ["Pai Canyon","Songthaew, morning","Bamboo bridge"],
            ["Hot springs","Songthaew or scooter","Not a night market add"],
            ["Sunset viewpoint","Late afternoon","Haze check in Mar-Apr"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Pai hub", href: "/pai", photo: "/photos/pai.jpg" },
      { title: "Day trips", href: "/pai/day-trips", photo: "/photos/doi-suthep.jpg" },
      { title: "Where to stay", href: "/pai/where-to-stay", photo: "/photos/pai.jpg" },
      { title: "Chiang Mai", href: "/chiang-mai", photo: "/photos/doi-suthep.jpg" },
    ],
    affiliates: [
    stay("Sleep near Walking Street", "Town pin", "The canyon is a morning songthaew, not a hotel filter.", stayLink('pai'), "/photos/pai.jpg"),
    klook("Canyon tickets and vans", "Tours", "Useful if you refuse to price a songthaew. Overnight still beats a CNX day van.", klookTours('Pai canyon'), "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "Is Pai Canyon a full day?", a: "No. It is a morning. Keep the afternoon for town or springs." },
      { q: "Worth it in haze season?", a: "The street still works. The rim does not. Check air quality in March and April." },
    ],
  },
  {
    path: "/pattaya/where-to-stay",
    title: "Where to stay in Pattaya",
    description: "Pattaya hotels split Jomtien and Wongamat from Walking Street. Sleep on the sand you will use. Bangkok is 1.5 to 2.5 hours; buses leave Ekkamai.",
    lede: "Pattaya is known for Walking Street and a cheap east-gulf weekend, so sleep in Jomtien if you came to swim and Wongamat if you want the north cape. Central rooms only fit a stay that is really about the strip.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Pattaya", href: "/pattaya" },
      { name: "Where to stay", href: "/pattaya/where-to-stay" },
    ],
    facts: [
      { label: "From Bangkok", value: "1.5 to 2.5 hours; Ekkamai buses" },
      { label: "Swim", value: "Jomtien or Wongamat, not Walking Street" },
      { label: "Island", value: "Koh Larn ferry 30 to 40 THB, about 45 minutes" },
      { label: "Ticket", value: "Sanctuary of Truth about 500 THB" },
    ],
    chips: [
      "Jomtien",
      "Wongamat",
      "Central last",
    ],
    photo: "/photos/pattaya.jpg",
    geo: { lat: 12.9236, lon: 100.8825, containedIn: "Eastern Thailand" },
    paragraphs: [
      "Pick the sand before the brand, and [Jomtien](/pattaya/jomtien) is the swim default. Wongamat and Naklua sit north toward the [Sanctuary of Truth](/attractions/sanctuary-of-truth-pattaya), and central [Pattaya](/pattaya) is Walking Street; sleep there only if that night is the trip. A 2026 Grab along the beach road is often 60 to 150 THB.",
      "Bangkok is 1.5 to 2.5 hours by road, and buses leave Ekkamai. Book the first two nights on Trip.com, then add a [Koh Larn](/pattaya/koh-larn) ferry if you want an island morning. Do not treat Pattaya as a first-week Andaman substitute after [Bangkok](/bangkok).",
    ],
    sections: [
      {
        id: "areas",
        title: "Which area fits which trip",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["Jomtien","Swim and longer stays","South of the Walking Street grid"],
            ["Wongamat and Naklua","North hotels, Sanctuary morning","Quieter than Beach Road"],
            ["Central / Walking Street","The strip night","Sleep here only on purpose"],
            ["Koh Larn","A day, not a first hotel","Ferry 30 to 40 THB, about 45 minutes"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Pattaya hub", href: "/pattaya", photo: "/photos/pattaya.jpg" },
      { title: "Jomtien", href: "/pattaya/jomtien", photo: "/photos/jomtien.jpg" },
      { title: "Koh Larn", href: "/pattaya/koh-larn", photo: "/photos/koh-larn.jpg" },
      { title: "Sanctuary of Truth", href: "/attractions/sanctuary-of-truth-pattaya", photo: "/photos/sanctuary-truth.jpg" },
    ],
    affiliates: [
    stay("Pattaya city stays", "Name the sand", "Search the city, then filter Jomtien or Wongamat.", stayLink('pattaya'), "/photos/walking-street-pattaya.jpg"),
    stay("Jomtien hotels", "Swim pin", "Use this search if a calmer gulf beach is the stay.", hotelSearchLink('Jomtien', 'pattaya'), "/photos/wongamat.jpg"),
    ],
    faqs: [
      { q: "Jomtien or Walking Street for two nights?", a: "Jomtien if you want a swim. Walking Street if the strip is the trip. Do not split one night each." },
      { q: "Wongamat for a first stay?", a: "Yes if the Sanctuary of Truth is tomorrow morning. No if you want a walkable night market without a Grab." },
    ],
  },
  {
    path: "/pattaya/jomtien",
    title: "Jomtien Beach",
    description: "Jomtien is the calmer gulf sand south of Walking Street. Sleep here to swim. Pattaya is 1.5 to 2.5 hours from Bangkok; Ekkamai buses are the cheap door.",
    lede: "Jomtien is Pattaya's calmer swimming beach, a short ride south of Walking Street, and it suits couples and families who want the sea rather than the nightlife. Stay south if you came to get in the water.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Pattaya", href: "/pattaya" },
      { name: "Jomtien", href: "/pattaya/jomtien" },
    ],
    facts: [
      { label: "Where", value: "South of central Pattaya on the same gulf" },
      { label: "Who", value: "Swimmers and longer stays" },
      { label: "From Bangkok", value: "1.5 to 2.5 hours; Ekkamai buses" },
      { label: "Hop", value: "Grab or baht bus north to Bali Hai or Naklua" },
    ],
    chips: [
      "Swim sand",
      "South strip",
      "Not Walking Street",
    ],
    photo: "/photos/jomtien.jpg",
    geo: { lat: 12.9236, lon: 100.8825, containedIn: "Eastern Thailand" },
    paragraphs: [
      "[Jomtien](/pattaya/jomtien) is the sand you actually enter, and Walking Street is a taxi north, not a hotel filter. [Wongamat](/pattaya/where-to-stay) is the quieter north alternative toward the Sanctuary, and a 2026 Grab from Jomtien to Bali Hai for the [Koh Larn](/pattaya/koh-larn) ferry is often 80 to 180 THB depending on traffic.",
      "Buses from Ekkamai still dump you in greater [Pattaya](/pattaya), and name Jomtien on the transfer pin. Pair a swim day with [Hua Hin](/hua-hin) only on a different week; they are different gulfs and different crowds. See [getting around](/pattaya/getting-around) for baht-bus notes.",
    ],
    sections: [
      {
        id: "use",
        title: "When Jomtien is the right pin",
        bullets: [
          "**Yes:** A swim, a longer stay, a quieter evening than Beach Road.",
          "**No:** A Walking Street crawl as the whole trip.",
          "**Pair:** Koh Larn from Bali Hai, not a second sand hunt.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/pattaya/where-to-stay", photo: "/photos/wongamat.jpg" },
      { title: "Koh Larn", href: "/pattaya/koh-larn", photo: "/photos/koh-larn.jpg" },
      { title: "Pattaya hub", href: "/pattaya", photo: "/photos/pattaya.jpg" },
      { title: "Hua Hin", href: "/hua-hin", photo: "/photos/hua-hin.jpg" },
    ],
    affiliates: [
    stay("Jomtien hotels", "Swim default", "Search Jomtien if the water is why you left Bangkok.", hotelSearchLink('Jomtien', 'pattaya'), "/photos/pattaya.jpg"),
    stay("Wongamat if the north cape is next", "Naklua side", "Sleep here for a Sanctuary morning without a southbound Grab.", hotelSearchLink('Wongamat', 'pattaya'), "/photos/sanctuary-truth.jpg"),
    ],
    faqs: [
      { q: "Is Jomtien quieter than Walking Street?", a: "Yes. It is still a gulf resort strip, not a village. It is not the Beach Road crawl." },
      { q: "Can you walk to Koh Larn from Jomtien?", a: "No. Grab or baht bus to Bali Hai, then the ferry." },
    ],
  },
  {
    path: "/pattaya/koh-larn",
    title: "Koh Larn",
    description: "Koh Larn is the Pattaya island day: public ferry 30 to 40 THB, about 45 minutes from Bali Hai. Sleep on the mainland, not the island.",
    lede: "Koh Larn is known for a cheap gulf ferry from Bali Hai, and it fits a single beach day from Pattaya if you sleep on the mainland and come back the same afternoon. Overnight only if you already know you want a night on the island.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Pattaya", href: "/pattaya" },
      { name: "Koh Larn", href: "/pattaya/koh-larn" },
    ],
    facts: [
      { label: "Ferry", value: "30 to 40 THB, about 45 minutes from Bali Hai" },
      { label: "Base", value: "Sleep Jomtien or Wongamat; island is the day" },
      { label: "From Bangkok", value: "1.5 to 2.5 hours to Pattaya first" },
      { label: "Last boat", value: "Check the board; do not invent a night ferry" },
    ],
    chips: [
      "45-minute ferry",
      "30-40 THB",
      "Day trip",
    ],
    photo: "/photos/koh-larn.jpg",
    geo: { lat: 12.9236, lon: 100.8825, containedIn: "Eastern Thailand" },
    paragraphs: [
      "Koh Larn is the island you can see from [Pattaya](/pattaya), and public boats from Bali Hai run about 45 minutes and cost 30 to 40 THB. Speedboat desks cost more and sell a tighter clock, and sleep in [Jomtien](/pattaya/jomtien) or Wongamat. The island is a day, not a first hotel.",
      "Do not combine Koh Larn and the [Sanctuary of Truth](/attractions/sanctuary-of-truth-pattaya) (about 500 THB) on the same rushed morning. Bangkok is still 1.5 to 2.5 hours behind you. Pair this page with [getting around](/pattaya/getting-around) for the pier hop from Jomtien.",
    ],
    sections: [
      {
        id: "day",
        title: "One island day",
        bullets: [
          "**Go:** Morning ferry. Keep the last-return time on a photo.",
          "**Sand:** Tawaen and the south coves are the usual desks. Pick one.",
          "**Skip:** A same-day Bangkok out-and-back. Sleep in Pattaya first.",
        ],
      },
    ],
    portraits: [
      { title: "Pattaya hub", href: "/pattaya", photo: "/photos/pattaya.jpg" },
      { title: "Jomtien", href: "/pattaya/jomtien", photo: "/photos/jomtien.jpg" },
      { title: "Where to stay", href: "/pattaya/where-to-stay", photo: "/photos/wongamat.jpg" },
      { title: "Sanctuary of Truth", href: "/attractions/sanctuary-of-truth-pattaya", photo: "/photos/sanctuary-truth.jpg" },
    ],
    affiliates: [
    stay("Mainland stays for the ferry", "Jomtien or Wongamat", "The island is a 45-minute boat. Sleep where you eat at night.", stayLink('pattaya'), "/photos/ferry-gulf.jpg"),
    klook("Koh Larn seats", "Tours", "Public ferry is 30 to 40 THB. A packaged boat is only useful if transfer is named.", klookIslandHopping('Koh Larn Pattaya'), "/photos/jomtien.jpg"),
    ],
    faqs: [
      { q: "Do you need to sleep on Koh Larn?", a: "No. The public ferry covers a beach day. Sleep on the mainland." },
      { q: "Ferry or speedboat?", a: "Ferry if you want 30 to 40 THB and about 45 minutes. Speedboat if a desk already named your hotel pickup." },
    ],
  },
  {
    path: "/pattaya/best-time-to-visit",
    title: "Best time to visit Pattaya",
    description: "Pattaya works as a year-round east-gulf city. November to February is cooler. Weekends fill from Bangkok, 1.5 to 2.5 hours away. Songkran is a water week.",
    lede: "Pattaya is known for a usable gulf weekend most months, with cooler air from November to February. It fits a Bangkok gap, not an Andaman boat season.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Pattaya", href: "/pattaya" },
      { name: "Best time to visit", href: "/pattaya/best-time-to-visit" },
    ],
    facts: [
      { label: "Cooler", value: "November to February" },
      { label: "Road", value: "1.5 to 2.5 hours from Bangkok" },
      { label: "Ferry", value: "Koh Larn 30 to 40 THB, about 45 minutes" },
      { label: "Crowd", value: "Thai long weekends fill Jomtien and the strip" },
    ],
    chips: [
      "Nov to Feb",
      "Weekend crowd",
      "Year-round city",
    ],
    photo: "/photos/wongamat.jpg",
    geo: { lat: 12.9236, lon: 100.8825, containedIn: "Eastern Thailand" },
    paragraphs: [
      "[Pattaya](/pattaya) is a city on the east gulf, and you can land most months. November to February is cooler for [Jomtien](/pattaya/jomtien) swims, and March to May is hot. Rain is short compared with the Andaman, and Songkran week is water, not a teak-hall morning at the Sanctuary.",
      "Friday traffic from [Bangkok](/bangkok) can push the road toward 2.5 hours, and Ekkamai buses still run. A Koh Larn ferry stays 30 to 40 THB when the sea allows, and pair this page with [Hua Hin](/hua-hin) only if you are choosing one gulf town, not both in one weekend.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Feb:** Cooler sand. Book Jomtien before a long weekend.",
          "**Mar to May:** Heat. Sanctuary of Truth is an indoor morning (about 500 THB).",
          "**Mid-April:** Songkran. Sleep only if you want water, not quiet.",
          "**Jun to Oct:** Short rain. Ferries can still cancel on wind.",
        ],
      },
    ],
    portraits: [
      { title: "Pattaya hub", href: "/pattaya", photo: "/photos/pattaya.jpg" },
      { title: "Where to stay", href: "/pattaya/where-to-stay", photo: "/photos/jomtien.jpg" },
      { title: "Hua Hin", href: "/hua-hin", photo: "/photos/hua-hin.jpg" },
      { title: "Bangkok", href: "/bangkok", photo: "/photos/riverside.jpg" },
    ],
    affiliates: [
    stay("Pattaya in the cooler months", "Nov to Feb", "Lock two Jomtien or Wongamat nights before Friday traffic.", stayLink('pattaya'), "/photos/jomtien.jpg"),
    klook("Sanctuary tickets in heat", "Tickets", "About 500 THB. Timed entry beats a midday queue.", klookTickets('Sanctuary of Truth Pattaya'), "/photos/sanctuary-truth.jpg"),
    ],
    faqs: [
      { q: "Is August a bad Pattaya month?", a: "It is hot and can rain. The city still works. August is a bad Andaman boat month, not a bad Ekkamai month." },
      { q: "Hua Hin or Pattaya in the same season?", a: "Hua Hin if you want a quieter train town. Pattaya if someone already booked the east gulf." },
    ],
  },
  {
    path: "/pattaya/getting-around",
    title: "Getting around Pattaya",
    description: "Reach Pattaya in 1.5 to 2.5 hours from Bangkok; buses leave Ekkamai. In town use baht buses and Grab. Koh Larn is 30 to 40 THB and about 45 minutes.",
    lede: "Pattaya is known for baht buses on the beach road rather than a metro, so stay on one sand and use the Ekkamai bus for the Bangkok hop. The Koh Larn ferry from Bali Hai fits one morning.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Pattaya", href: "/pattaya" },
      { name: "Getting around", href: "/pattaya/getting-around" },
    ],
    facts: [
      { label: "From Bangkok", value: "1.5 to 2.5 hours; Ekkamai buses" },
      { label: "Baht bus", value: "Cheap on the beach road if you agree the fare" },
      { label: "Koh Larn", value: "Ferry 30 to 40 THB, about 45 minutes" },
      { label: "Sanctuary", value: "North cape; Grab from Jomtien" },
    ],
    chips: [
      "Ekkamai bus",
      "Baht bus",
      "Bali Hai ferry",
    ],
    photo: "/photos/walking-street-pattaya.jpg",
    geo: { lat: 12.9236, lon: 100.8825, containedIn: "Eastern Thailand" },
    paragraphs: [
      "Buses from Ekkamai are the cheap door from [Bangkok](/bangkok), and private cars often quote 1,500 to 2,500 THB. Inside [Pattaya](/pattaya), baht buses run the beach road if you agree the fare first, and grab covers Jomtien to Naklua when you have bags. Skip Beach Road scooter rentals unless you already ride.",
      "The [Koh Larn](/pattaya/koh-larn) public ferry is 30 to 40 THB and about 45 minutes from Bali Hai. The [Sanctuary of Truth](/attractions/sanctuary-of-truth-pattaya) is a north-cape Grab, about 500 THB at the gate. Sleep in [Jomtien](/pattaya/jomtien) or Wongamat so the 22:00 hop is short.",
    ],
    sections: [
      {
        id: "modes",
        title: "Which mode for which hop",
        bullets: [
          "**Ekkamai bus:** Bangkok to Pattaya. Friday can take 2.5 hours.",
          "**Baht bus:** Beach road. Agree the fare. Not a tour.",
          "**Grab:** Jomtien to Wongamat, airport cars, late nights.",
          "**Ferry:** Bali Hai to Koh Larn, 30 to 40 THB, about 45 minutes.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/pattaya/where-to-stay", photo: "/photos/wongamat.jpg" },
      { title: "Koh Larn", href: "/pattaya/koh-larn", photo: "/photos/koh-larn.jpg" },
      { title: "Pattaya hub", href: "/pattaya", photo: "/photos/pattaya.jpg" },
      { title: "Bangkok", href: "/bangkok", photo: "/photos/riverside.jpg" },
    ],
    affiliates: [
    stay("Hotels on the sand you will ride from", "Jomtien or Wongamat", "A 01:00 Grab is the real cost if you hotel-hop the strip.", stayLink('pattaya'), "/photos/jomtien.jpg"),
    {
      title: "Bangkok to Pattaya cars",
      kicker: "Transfers",
      body: "Use a named car if you land late with bags. Ekkamai is the cheaper daylight bus.",
      href: transferLink('BKK'),
      cta: 'Book transfer',
      photo: "/photos/nong-nooch.jpg",
      partner: 'transfer',
    },
    ],
    faqs: [
      { q: "Ekkamai or a hotel car?", a: "Ekkamai in daylight. A Trip.com car if you land after the useful buses or have two suitcases." },
      { q: "Baht bus to Koh Larn?", a: "Baht bus to Bali Hai, then the ferry. The bus does not float." },
    ],
  },
  {
    path: "/hua-hin/where-to-stay",
    title: "Where to stay in Hua Hin",
    description: "Hua Hin hotels split the night-market town from Khao Takiab. Sleep in town for the train. The southern train from Bangkok takes about four hours.",
    lede: "Hua Hin is known for a walkable train town on the upper Gulf, so sleep in town for the market or toward Khao Takiab for longer sand. It stays quieter than Pattaya even on a Bangkok weekend.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Hua Hin", href: "/hua-hin" },
      { name: "Where to stay", href: "/hua-hin/where-to-stay" },
    ],
    facts: [
      { label: "Town", value: "Night market and station walks" },
      { label: "South", value: "Khao Takiab and Nong Kae for longer sand" },
      { label: "Train", value: "Southern train about 4 hours from Bangkok" },
      { label: "Crowd", value: "Bangkok weekend peak; quieter than Pattaya" },
    ],
    chips: [
      "Town first",
      "Khao Takiab",
      "Train beach",
    ],
    photo: "/photos/hua-hin.jpg",
    geo: { lat: 12.57, lon: 99.958, containedIn: "Upper Gulf of Thailand" },
    paragraphs: [
      "[Hua Hin](/hua-hin) is a mainland Gulf resort, not [Pattaya](/pattaya), and sleep near the night market if the southern train is late. Sleep toward Khao Takiab if Cicada on Friday to Sunday is the evening, and a 2026 Grab between town and the hill is often 80 to 180 THB.",
      "The southern train from [Bangkok](/bangkok) takes about four hours, and Hua Hin Airport is not a useful Bangkok substitute. Book two nights on Trip.com before a Thai long weekend, and pair this page with [getting around](/hua-hin/getting-around) for station walks.",
    ],
    sections: [
      {
        id: "areas",
        title: "Which pin fits which stay",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["Town / night market","Trains, dinner, a first stay","Narrow beach. Weekend noise."],
            ["Khao Takiab and Nong Kae","Longer sand, Cicada Fri-Sun","Grab to the station"],
            ["Khao Tao","Thinner coves","Only with a car or a patient scooter"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Hua Hin hub", href: "/hua-hin", photo: "/photos/hua-hin.jpg" },
      { title: "Day trips", href: "/hua-hin/day-trips", photo: "/photos/sam-roi-yot.jpg" },
      { title: "Getting around", href: "/hua-hin/getting-around", photo: "/photos/ferry-gulf.jpg" },
      { title: "Pattaya", href: "/pattaya", photo: "/photos/pattaya.jpg" },
    ],
    affiliates: [
    stay("Hua Hin town stays", "Train and market", "Search the town if the southern train is how you arrive.", stayLink('hua-hin'), "/photos/sam-roi-yot.jpg"),
    stay("Khao Takiab hotels", "South sand", "Use this search if Cicada and a longer beach are the stay.", hotelSearchLink('Khao Takiab', 'hua-hin'), "/photos/jomtien.jpg"),
    ],
    faqs: [
      { q: "Town or Khao Takiab for two nights?", a: "Town if you arrive by train after dark. Khao Takiab if the hill and Cicada are the evening." },
      { q: "Quieter than Pattaya?", a: "Yes, on most weekdays. Bangkok weekends still fill the beach road." },
    ],
  },
  {
    path: "/hua-hin/best-time-to-visit",
    title: "Best time to visit Hua Hin",
    description: "Hua Hin is easier from November to April. October is the wet month. Bangkok weekend crowds still come. The southern train takes about four hours.",
    lede: "Hua Hin is known for a milder Gulf calendar than the islands, and November to April fits a first stay. Bangkok weekends still fill the town, but it remains quieter than Pattaya.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Hua Hin", href: "/hua-hin" },
      { name: "Best time to visit", href: "/hua-hin/best-time-to-visit" },
    ],
    facts: [
      { label: "Dry window", value: "November to April" },
      { label: "Wet month", value: "October; September can soak too" },
      { label: "Train", value: "About 4 hours on the southern line" },
      { label: "Crowd", value: "Bangkok weekends and Thai long holidays" },
    ],
    chips: [
      "Nov to Apr",
      "October wet",
      "Weekend peak",
    ],
    photo: "/photos/sam-roi-yot.jpg",
    geo: { lat: 12.57, lon: 99.958, containedIn: "Upper Gulf of Thailand" },
    paragraphs: [
      "[Hua Hin](/hua-hin) is the upper western Gulf, not Samui and not the Andaman, and November to April is the dry, busy window. June and July still function, and September and October are the months that actually get wet. Jellyfish warnings go up after heavy rain.",
      "The southern train from [Bangkok](/bangkok) takes about four hours in any month, and long weekends sell out. Midweek is when the town feels quieter than [Pattaya](/pattaya), and pair this page with [day trips](/hua-hin/day-trips) if Sam Roi Yot is why you came.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Apr:** Dry sand. Book before a Thai long weekend.",
          "**Jun to Jul:** Usable mainland beach when you refuse an island hop.",
          "**Sep to Oct:** Real rain. Keep an indoor market plan.",
          "**Any Friday:** Bangkok traffic and full trains.",
        ],
      },
    ],
    portraits: [
      { title: "Hua Hin hub", href: "/hua-hin", photo: "/photos/hua-hin.jpg" },
      { title: "Where to stay", href: "/hua-hin/where-to-stay", photo: "/photos/hua-hin.jpg" },
      { title: "Pattaya season", href: "/pattaya/best-time-to-visit", photo: "/photos/pattaya.jpg" },
      { title: "When to go", href: "/plan/when-to-go", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Hua Hin in the dry window", "Nov to Apr", "Lock two nights before the Bangkok weekend search.", stayLink('hua-hin'), "/photos/hua-hin.jpg"),
    {
      title: "Bangkok to Hua Hin trains",
      kicker: "Trip.com",
      body: "About four hours on the southern line. Long weekends sell out.",
      href: trainLink('Bangkok', 'Hua Hin'),
      cta: 'Search trains',
      photo: "/photos/riverside.jpg",
      partner: 'trains',
    },
    ],
    faqs: [
      { q: "July in Hua Hin or Samui?", a: "Samui if the island is the point. Hua Hin if you want a mainland train beach that still functions." },
      { q: "Avoid weekends?", a: "If you can. Bangkok fills Friday trains and the beach road." },
    ],
  },
  {
    path: "/hua-hin/day-trips",
    title: "Hua Hin day trips",
    description: "The useful Hua Hin day trip is inland to Sam Roi Yot and Phraya Nakhon Cave. The southern train from Bangkok takes about four hours.",
    lede: "Hua Hin day trips are known for Sam Roi Yot cliffs and Phraya Nakhon Cave, and they fit a spare weekday if you stay in town. Pattaya is a different gulf and a different van.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Hua Hin", href: "/hua-hin" },
      { name: "Day trips", href: "/hua-hin/day-trips" },
    ],
    facts: [
      { label: "Sam Roi Yot", value: "National park south; start early" },
      { label: "Phraya Nakhon", value: "Cave pavilion; stairs and heat" },
      { label: "Train in", value: "About 4 hours from Bangkok" },
      { label: "Sleep", value: "Hua Hin; not a Bangkok day stack" },
    ],
    chips: [
      "Sam Roi Yot",
      "Phraya Nakhon",
      "One inland day",
    ],
    photo: "/photos/sam-roi-yot.jpg",
    geo: { lat: 12.57, lon: 99.958, containedIn: "Upper Gulf of Thailand" },
    paragraphs: [
      "From [Hua Hin](/hua-hin), the spare day that earns the van is Khao Sam Roi Yot and Phraya Nakhon Cave. Go early, and the pavilion sits in a cave after stairs and heat. This is not a [Pattaya](/pattaya) island hop and not a [Kanchanaburi](/kanchanaburi) waterfall day.",
      "The southern train from [Bangkok](/bangkok) takes about four hours, so do not invent a same-day cave from the capital. Sleep in Hua Hin. A 2026 licensed park van often quotes in the low thousands of THB with a driver. See [top attractions](/hua-hin/top-attractions) for the in-town list.",
    ],
    sections: [
      {
        id: "picks",
        title: "Pick one spare day",
        table: {
          headers: ["Trip","Clock","Sleep after"],
          rows: [
            ["Sam Roi Yot and Phraya Nakhon","Full day, early start","Hua Hin"],
            ["Khao Takiab hill and temple","Half day","Town or Nong Kae"],
            ["Pattaya or Koh Larn","Wrong gulf for a day","Do not combine"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Hua Hin hub", href: "/hua-hin", photo: "/photos/hua-hin.jpg" },
      { title: "Top attractions", href: "/hua-hin/top-attractions", photo: "/photos/hua-hin.jpg" },
      { title: "Kanchanaburi", href: "/kanchanaburi", photo: "/photos/kanchanaburi.jpg" },
      { title: "Pattaya", href: "/pattaya", photo: "/photos/pattaya.jpg" },
    ],
    affiliates: [
    stay("Keep the Hua Hin base", "Two-night lock", "Day-trip the park. Overnight only in town.", stayLink('hua-hin'), "/photos/hua-hin.jpg"),
    klook("Sam Roi Yot and Phraya Nakhon", "Tours", "The useful day is inland. Read whether park fees sit in the price.", klookTours('Hua Hin Phraya Nakhon'), "/photos/ferry-gulf.jpg"),
    ],
    faqs: [
      { q: "Can you do Phraya Nakhon from Bangkok in one day?", a: "You can sit in a van. You will short-change the stairs. Sleep in Hua Hin first." },
      { q: "Add Erawan the same day?", a: "No. Erawan is a Kanchanaburi day, a different road." },
    ],
  },
  {
    path: "/hua-hin/getting-around",
    title: "Getting around Hua Hin",
    description: "Hua Hin is a walkable train town. The southern train from Bangkok takes about four hours. Use Grab between the market and Khao Takiab.",
    lede: "Hua Hin is known for a station you can walk from, so stay in town if the train is late and use Grab for Khao Takiab. The southern line is about four hours from Bangkok.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Hua Hin", href: "/hua-hin" },
      { name: "Getting around", href: "/hua-hin/getting-around" },
    ],
    facts: [
      { label: "Train", value: "About 4 hours from Bangkok on the southern line" },
      { label: "Town", value: "Walk the market and the pier" },
      { label: "South hop", value: "Grab to Khao Takiab and Cicada" },
      { label: "Airport", value: "HHQ is not the Bangkok hop" },
    ],
    chips: [
      "Southern train",
      "Walk the town",
      "Grab south",
    ],
    photo: "/photos/ferry-gulf.jpg",
    geo: { lat: 12.57, lon: 99.958, containedIn: "Upper Gulf of Thailand" },
    paragraphs: [
      "Take the southern train from [Bangkok](/bangkok) to [Hua Hin](/hua-hin), and plan about four hours. Minivans from Ekkamai work and then dump you in weekend traffic, and the town centre is walkable: station, night market, pier. Khao Takiab is a Grab, often 80 to 180 THB.",
      "Hua Hin Airport is not a useful Bangkok substitute, and do not rent a scooter on the beach road on night one. Pair this page with [where to stay](/hua-hin/where-to-stay) so the station walk matches the pin, and [Pattaya](/pattaya) is a different gulf and a different bus.",
    ],
    sections: [
      {
        id: "modes",
        title: "Which mode for which hop",
        bullets: [
          "**Train:** About 4 hours. The clean suitcase door.",
          "**Walk:** Market, pier, town hotels.",
          "**Grab:** Khao Takiab, Cicada, Sam Roi Yot pickups.",
          "**Car:** Only if Phraya Nakhon is the whole next day.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/hua-hin/where-to-stay", photo: "/photos/hua-hin.jpg" },
      { title: "Day trips", href: "/hua-hin/day-trips", photo: "/photos/sam-roi-yot.jpg" },
      { title: "Hua Hin hub", href: "/hua-hin", photo: "/photos/hua-hin.jpg" },
      { title: "Bangkok", href: "/bangkok", photo: "/photos/riverside.jpg" },
    ],
    affiliates: [
    stay("Sleep near the station", "Town pin", "Walk off the southern train. Grab south the next day if you want.", stayLink('hua-hin'), "/photos/hua-hin.jpg"),
    {
      title: "Bangkok to Hua Hin trains",
      kicker: "Trip.com",
      body: "About four hours. Buy a seat before a long weekend.",
      href: trainLink('Bangkok', 'Hua Hin'),
      cta: 'Search trains',
      photo: "/photos/riverside.jpg",
      partner: 'trains',
    },
    ],
    faqs: [
      { q: "Train or van from Bangkok?", a: "Train if you have a suitcase. Van if you missed the useful set and accept traffic." },
      { q: "Do you need a scooter?", a: "No for town. Yes only if you already ride and want Khao Tao coves." },
    ],
  },
  {
    path: "/hua-hin/top-attractions",
    title: "Hua Hin top attractions",
    description: "Hua Hin sights are the night market, Khao Takiab hill, and a beach walk. Add Sam Roi Yot next day. Train from Bangkok is about four hours.",
    lede: "Hua Hin attractions are known for a market night and a limestone hill rather than a lagoon, and they fit a train weekend. Stay in town, and treat Sam Roi Yot as the inland add-on.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Hua Hin", href: "/hua-hin" },
      { name: "Top attractions", href: "/hua-hin/top-attractions" },
    ],
    facts: [
      { label: "Market", value: "In-town night market every evening" },
      { label: "Cicada", value: "Friday to Sunday, 16:00 to 23:00, Khao Takiab road" },
      { label: "Hill", value: "Khao Takiab temple and views" },
      { label: "Train", value: "About 4 hours from Bangkok" },
    ],
    chips: [
      "Night market",
      "Khao Takiab",
      "Sam Roi Yot next",
    ],
    photo: "/photos/hua-hin.jpg",
    geo: { lat: 12.57, lon: 99.958, containedIn: "Upper Gulf of Thailand" },
    paragraphs: [
      "Start with the in-town night market and a pier walk, and Khao Takiab is the hill and the weekend Cicada Market (Friday to Sunday, 16:00 to 23:00). The beach is shallow and can turn murky after rain, and this is quieter than [Pattaya](/pattaya) on a weekday and still a Bangkok weekend town.",
      "Add [Sam Roi Yot and Phraya Nakhon](/hua-hin/day-trips) on a second day, not after a four-hour southern train the same afternoon, and sleep in [Hua Hin](/hua-hin). A 2026 Grab to the hill is often 80 to 180 THB, and see [Bangkok](/bangkok) if you still need a city night first.",
    ],
    sections: [
      {
        id: "board",
        title: "What to open first",
        table: {
          headers: ["Sight","When","Pair with"],
          rows: [
            ["Night market","Every evening","Town stay"],
            ["Cicada","Fri-Sun 16:00 to 23:00","Khao Takiab hotels"],
            ["Khao Takiab hill","Morning or late afternoon","Temple dress"],
            ["Sam Roi Yot","Full spare day","Not a train-arrival add"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Hua Hin hub", href: "/hua-hin", photo: "/photos/hua-hin.jpg" },
      { title: "Day trips", href: "/hua-hin/day-trips", photo: "/photos/sam-roi-yot.jpg" },
      { title: "Where to stay", href: "/hua-hin/where-to-stay", photo: "/photos/jomtien.jpg" },
      { title: "Pattaya", href: "/pattaya", photo: "/photos/pattaya.jpg" },
    ],
    affiliates: [
    stay("Sleep in the town you will walk", "Market pin", "The hill is a Grab. The market is the evening.", stayLink('hua-hin'), "/photos/sam-roi-yot.jpg"),
    klook("Park and cave vans", "Tours", "Use a named driver for Phraya Nakhon. The town sights do not need a ticket desk.", klookTours('Hua Hin Phraya Nakhon'), "/photos/sam-roi-yot.jpg"),
    ],
    faqs: [
      { q: "Is the beach the main sight?", a: "It is a walk and a swim on a calm day. The market and the hill do more work than the water colour." },
      { q: "Cicada every night?", a: "No. Friday to Sunday, 16:00 to 23:00. The in-town market runs daily." },
    ],
  },
  {
    path: "/kanchanaburi/where-to-stay",
    title: "Where to stay in Kanchanaburi",
    description: "Kanchanaburi hotels split the town bend from upriver rafts. Sleep in town for museums. Two nights if Erawan and the railway are both planned.",
    lede: "Kanchanaburi is known for a river-town bend and the Kwai bridge, so sleep in town for the cemetery and the morning train. Book two nights if Erawan Falls and the railway story are both on the list.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Kanchanaburi", href: "/kanchanaburi" },
      { name: "Where to stay", href: "/kanchanaburi/where-to-stay" },
    ],
    facts: [
      { label: "Town", value: "Museums, night market, songthaews" },
      { label: "Bridge", value: "Tha Makham for a dusk walk" },
      { label: "Erawan", value: "300 THB foreign adult; 65 to 70 km from town" },
      { label: "Nights", value: "Two if falls plus the line" },
    ],
    chips: [
      "Town first",
      "Two nights",
      "Upriver later",
    ],
    photo: "/photos/kanchanaburi.jpg",
    geo: { lat: 14.002, lon: 99.548, containedIn: "Western Thailand" },
    paragraphs: [
      "Sleep in [Kanchanaburi](/kanchanaburi) town if the cemetery, the Thailand-Burma Railway Centre, and a morning songthaew matter. Sleep at Tha Makham if the bridge at dusk is the photo. Upriver rafts fit a second night, not a first pin without a car. Erawan is 65 to 70 km out, about 1.5 hours; a park-gate hotel only helps if the seven tiers are the entire next day.",
      "Trains still leave Thonburi station, not Krung Thep Aphiwat, and see [Bangkok to Kanchanaburi](/get-there/bangkok-to-kanchanaburi). Book two nights on Trip.com if [Erawan and Sai Yok](/kanchanaburi/erawan-and-sai-yok) and the railway are both on the list, and Foreign adults pay 300 THB at Erawan. A 2026 ordinary train ticket is a day-of third-class fare, not a sleeper.",
    ],
    sections: [
      {
        id: "areas",
        title: "Which pin fits which night",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["Town and the river bend","Museums and songthaews","Easy logistics"],
            ["Tha Makham / bridge","Dusk on the steel span","Tour buses"],
            ["Sai Yok / upriver","Quieter second night","Far from Erawan"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Kanchanaburi hub", href: "/kanchanaburi", photo: "/photos/kanchanaburi.jpg" },
      { title: "River Kwai", href: "/kanchanaburi/river-kwai", photo: "/photos/riverside.jpg" },
      { title: "Erawan and Sai Yok", href: "/kanchanaburi/erawan-and-sai-yok", photo: "/photos/erawan.jpg" },
      { title: "Bangkok to Kanchanaburi", href: "/get-there/bangkok-to-kanchanaburi", photo: "/photos/riverside.jpg" },
    ],
    affiliates: [
    stay("Kanchanaburi town stays", "Museums first", "Two nights if Erawan is on the list. One night if you only want the bridge.", stayLink('kanchanaburi'), "/photos/erawan.jpg"),
    stay("Upriver if the raft is the stay", "Sai Yok search", "Far from the seven tiers. Pick one hinterland.", hotelSearchLink('Sai Yok', 'kanchanaburi'), "/photos/riverside.jpg"),
    ],
    faqs: [
      { q: "Town or Erawan gate for two nights?", a: "Town. The gate only helps if the falls are the entire next day and you have a car." },
      { q: "One night enough?", a: "Only for the bridge and the cemetery. Two nights if you want the seven tiers as well." },
    ],
  },
  {
    path: "/kanchanaburi/getting-around",
    title: "Getting around Kanchanaburi",
    description: "Ordinary trains leave Thonburi station, not Krung Thep Aphiwat. Sai Tai Mai vans are faster. Erawan is 65 to 70 km, about 1.5 hours.",
    lede: "Kanchanaburi is known for a Thonburi train rather than a Bang Sue hop, so stay in town and use songthaews for the bridge. Erawan is a separate 65 to 70 km road.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Kanchanaburi", href: "/kanchanaburi" },
      { name: "Getting around", href: "/kanchanaburi/getting-around" },
    ],
    facts: [
      { label: "Train", value: "Thonburi station, not Krung Thep Aphiwat" },
      { label: "Faster path", value: "Van from Sai Tai Mai, about 2 to 2.5 hours" },
      { label: "Erawan", value: "65 to 70 km; bus 8170 about 1.5 hours" },
      { label: "Fee", value: "300 THB foreign adult at Erawan" },
    ],
    chips: [
      "Thonburi trains",
      "Sai Tai Mai vans",
      "Bus 8170",
    ],
    photo: "/photos/riverside.jpg",
    geo: { lat: 14.002, lon: 99.548, containedIn: "Western Thailand" },
    paragraphs: [
      "Ordinary SRT sets to [Kanchanaburi](/kanchanaburi) and Nam Tok leave Thonburi (Bangkok Noi), about a 750 m walk from MRT Bang Khun Non. They have not moved to Krung Thep Aphiwat, and that is the first-timer mistake. Read [Bangkok to Kanchanaburi](/get-there/bangkok-to-kanchanaburi) before you Grab to Bang Sue.",
      "Vans from Sai Tai Mai take about 2 to 2.5 hours, and in town, songthaews cover the bridge and the night market. [Erawan](/kanchanaburi/erawan-and-sai-yok) is 65 to 70 km: bus 8170 about 1.5 hours, 300 THB foreign adult at the gate, seven tiers. Two nights if Erawan and the railway are both planned.",
    ],
    sections: [
      {
        id: "modes",
        title: "Which mode for which hop",
        bullets: [
          "**Thonburi train:** Atmospheric, third class, not Bang Sue.",
          "**Sai Tai Mai van:** Faster if Erawan is tomorrow.",
          "**Songthaew:** Bridge, cemetery, market.",
          "**Bus 8170:** Erawan. Ask the last bus back before you climb.",
        ],
      },
    ],
    portraits: [
      { title: "Kanchanaburi hub", href: "/kanchanaburi", photo: "/photos/kanchanaburi.jpg" },
      { title: "Bangkok to Kanchanaburi", href: "/get-there/bangkok-to-kanchanaburi", photo: "/photos/riverside.jpg" },
      { title: "Erawan and Sai Yok", href: "/kanchanaburi/erawan-and-sai-yok", photo: "/photos/erawan.jpg" },
      { title: "River Kwai", href: "/kanchanaburi/river-kwai", photo: "/photos/kanchanaburi.jpg" },
    ],
    affiliates: [
    stay("Town hotels on the songthaew line", "River bend", "Sleep where the 8170 still works at 08:00.", stayLink('kanchanaburi'), "/photos/kanchanaburi.jpg"),
    {
      title: "Bangkok to Kanchanaburi trains",
      kicker: "Trip.com",
      body: "Confirm Thonburi as the origin. Ordinary Nam Tok trains have not moved to Bang Sue.",
      href: trainLink('Bangkok', 'Kanchanaburi'),
      cta: 'Search trains',
      photo: "/photos/erawan.jpg",
      partner: 'trains',
    },
    ],
    faqs: [
      { q: "Which Bangkok station?", a: "Thonburi for the daily ordinary trains. Krung Thep Aphiwat does not run that branch." },
      { q: "Can you Grab to Erawan?", a: "You can. Budget the empty return. Bus 8170 is the cheap clock if you catch the 08:00." },
    ],
  },
  {
    path: "/kanchanaburi/best-time-to-visit",
    title: "Best time to visit Kanchanaburi",
    description: "Kanchanaburi is inland. November to February is the kind window. Erawan looks better after rain. Two nights if you want the falls.",
    lede: "Kanchanaburi is known for a year-round river town and a seasonal waterfall walk, and November to February fits both. Stay two nights if Erawan and the railway are the trip.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Kanchanaburi", href: "/kanchanaburi" },
      { name: "Best time to visit", href: "/kanchanaburi/best-time-to-visit" },
    ],
    facts: [
      { label: "Cool inland", value: "November to February" },
      { label: "Erawan", value: "Prettier after rain; trails can close" },
      { label: "Fee", value: "300 THB foreign adult, seven tiers" },
      { label: "Train", value: "Thonburi station, not Krung Thep Aphiwat" },
    ],
    chips: [
      "Nov to Feb",
      "Falls after rain",
      "Two nights",
    ],
    photo: "/photos/erawan.jpg",
    geo: { lat: 14.002, lon: 99.548, containedIn: "Western Thailand" },
    paragraphs: [
      "[Kanchanaburi](/kanchanaburi) is not Andaman logic, and the river town works all year. November to February is the comfortable walk, and [Erawan](/kanchanaburi/erawan-and-sai-yok) looks better after rain and can close swimming when the water runs red. Call 034 574 222 or DNP 1362 the morning you go.",
      "Trains still leave Thonburi, not Krung Thep Aphiwat, and see [Bangkok to Kanchanaburi](/get-there/bangkok-to-kanchanaburi). Foreign adults pay 300 THB at Erawan for seven tiers, 65 to 70 km from town, and two nights if Erawan and the railway are both planned. Do not combine [Ayutthaya](/ayutthaya) on the same van.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Feb:** Cool walks. Book town rooms on Thai holidays.",
          "**Late rain months:** Fuller pools, slick stairs, possible swim bans.",
          "**Any month:** Thonburi train. Two nights if you want tier 7.",
        ],
      },
    ],
    portraits: [
      { title: "Kanchanaburi hub", href: "/kanchanaburi", photo: "/photos/kanchanaburi.jpg" },
      { title: "Erawan and Sai Yok", href: "/kanchanaburi/erawan-and-sai-yok", photo: "/photos/erawan.jpg" },
      { title: "Where to stay", href: "/kanchanaburi/where-to-stay", photo: "/photos/riverside.jpg" },
      { title: "Ayutthaya", href: "/ayutthaya", photo: "/photos/ayutthaya.jpg" },
    ],
    affiliates: [
    stay("Kanchanaburi in the cool months", "Nov to Feb", "Lock two town nights before an Erawan Saturday.", stayLink('kanchanaburi'), "/photos/kanchanaburi.jpg"),
    klook("Erawan vans in peak months", "Tours", "300 THB park fee is often extra. Read the inclusions line.", klookTours('Erawan National Park'), "/photos/riverside.jpg"),
    ],
    faqs: [
      { q: "Is August bad for Erawan?", a: "Pools can be full and stairs slick. The town still works. Check swim status the morning you go." },
      { q: "Combine with Ayutthaya in the same cool month?", a: "Yes as separate days. No as one van." },
    ],
  },
  {
    path: "/kanchanaburi/day-trips",
    title: "Kanchanaburi day trips",
    description: "Erawan is seven tiers, 300 THB for foreign adults, 65 to 70 km from town. Hellfire Pass is another road. Two nights if you want both.",
    lede: "Kanchanaburi day trips are known for Erawan Falls or the Death Railway story, not both in one afternoon, so stay two nights. The bridge itself is a morning in town.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Kanchanaburi", href: "/kanchanaburi" },
      { name: "Day trips", href: "/kanchanaburi/day-trips" },
    ],
    facts: [
      { label: "Erawan", value: "300 THB foreign adult, seven tiers, 65 to 70 km" },
      { label: "Bus", value: "8170 about 1.5 hours from the bus station" },
      { label: "Hellfire Pass", value: "By road past Nam Tok, not a station" },
      { label: "Nights", value: "Two if falls plus the line" },
    ],
    chips: [
      "Erawan",
      "One hinterland",
      "Two nights",
    ],
    photo: "/photos/erawan.jpg",
    geo: { lat: 14.002, lon: 99.548, containedIn: "Western Thailand" },
    paragraphs: [
      "[Erawan and Sai Yok](/kanchanaburi/erawan-and-sai-yok) is the waterfall day: 300 THB for a foreign adult, seven tiers, 65 to 70 km from [Kanchanaburi](/kanchanaburi) town. Bus 8170 leaves about 08:00 and takes about 1.5 hours, and treat 15:30 as the turnaround for tier 7. Hellfire Pass is a memorial walk by road, not a train stop.",
      "Do not add [Ayutthaya](/ayutthaya) to the same van, and trains in still leave Thonburi, not Krung Thep Aphiwat; see [Bangkok to Kanchanaburi](/get-there/bangkok-to-kanchanaburi). Two nights if Erawan and the railway are both planned, and the bridge itself lives on [River Kwai](/kanchanaburi/river-kwai).",
    ],
    sections: [
      {
        id: "picks",
        title: "Pick one hinterland",
        table: {
          headers: ["Trip","Clock","Sleep after"],
          rows: [
            ["Erawan seven tiers","Full day, 08:00 bus","Kanchanaburi town"],
            ["Hellfire Pass","Half to full day by car","Town"],
            ["Sai Yok Noi","Roadside near Nam Tok","Not the same as Erawan"],
            ["Ayutthaya ruins","Wrong direction","Bangkok or Ayutthaya"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Erawan and Sai Yok", href: "/kanchanaburi/erawan-and-sai-yok", photo: "/photos/erawan.jpg" },
      { title: "River Kwai", href: "/kanchanaburi/river-kwai", photo: "/photos/kanchanaburi.jpg" },
      { title: "Kanchanaburi hub", href: "/kanchanaburi", photo: "/photos/kanchanaburi.jpg" },
      { title: "Ayutthaya", href: "/ayutthaya", photo: "/photos/ayutthaya.jpg" },
    ],
    affiliates: [
    stay("Keep the town base", "Two-night lock", "Day-trip Erawan. Overnight only in Kanchanaburi.", stayLink('kanchanaburi'), "/photos/kanchanaburi.jpg"),
    klook("Erawan and Hellfire vans", "Tours", "A car for one hinterland beats a missed 8170. 300 THB is often extra.", klookTours('Erawan National Park'), "/photos/riverside.jpg"),
    ],
    faqs: [
      { q: "Erawan and Hellfire Pass the same day?", a: "A car can rush both. You will short-change tier 7 or the memorial walk. Pick one." },
      { q: "Erawan from Bangkok as a day trip?", a: "You will sit in a van. Stay two nights in Kanchanaburi if the falls matter." },
    ],
  },
  {
    path: "/kanchanaburi/river-kwai",
    title: "River Kwai",
    description: "The River Kwai visit is the steel bridge, railway centre, and cemetery. Trains leave Thonburi, not Bang Sue. Two nights if you add Erawan.",
    lede: "The River Kwai is known for a steel bridge and a war-history morning, so stay in town and give the museum more than the ten-minute selfie. Erawan is a different road and a different day.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Kanchanaburi", href: "/kanchanaburi" },
      { name: "River Kwai", href: "/kanchanaburi/river-kwai" },
    ],
    facts: [
      { label: "Bridge", value: "Tha Makham; Khwae Yai Bridge station" },
      { label: "Train in", value: "Thonburi station, not Krung Thep Aphiwat" },
      { label: "Erawan add", value: "300 THB, seven tiers, 65 to 70 km, next day" },
      { label: "Nights", value: "Two if falls plus the line" },
    ],
    chips: [
      "Bridge morning",
      "Museum first",
      "Thonburi train",
    ],
    photo: "/photos/kanchanaburi.jpg",
    geo: { lat: 14.002, lon: 99.548, containedIn: "Western Thailand" },
    paragraphs: [
      "The postcard is the steel bridge on the Khwae Yai, and the useful hour is the Thailand-Burma Railway Centre and the allied war cemetery in [Kanchanaburi](/kanchanaburi) town. Ordinary trains still leave Thonburi, not Krung Thep Aphiwat, and read [Bangkok to Kanchanaburi](/get-there/bangkok-to-kanchanaburi) before you pin Bang Sue.",
      "Hellfire Pass is about 80 km northwest by road past Nam Tok, not a passenger-train stop. [Erawan](/kanchanaburi/erawan-and-sai-yok) is a different day: 300 THB foreign adult, seven tiers, 65 to 70 km, and two nights if you want both. A 2026 songthaew to the bridge is a short fare if you agree it first.",
    ],
    sections: [
      {
        id: "order",
        title: "A workable river morning",
        bullets: [
          "**Cemetery and railway centre:** First, while you still have attention.",
          "**Bridge:** Dusk or early, not a midday tour-bus crush.",
          "**Nam Tok train:** Scenic, when the line is open. Floods have shut stretches before.",
          "**Erawan:** Tomorrow. Not the same afternoon.",
        ],
      },
    ],
    portraits: [
      { title: "Kanchanaburi hub", href: "/kanchanaburi", photo: "/photos/kanchanaburi.jpg" },
      { title: "Day trips", href: "/kanchanaburi/day-trips", photo: "/photos/erawan.jpg" },
      { title: "Bangkok to Kanchanaburi", href: "/get-there/bangkok-to-kanchanaburi", photo: "/photos/riverside.jpg" },
      { title: "Bangkok", href: "/bangkok", photo: "/photos/riverside.jpg" },
    ],
    affiliates: [
    stay("Sleep on the river bend", "Town or Tha Makham", "The bridge is a walk. Erawan is tomorrow's road.", stayLink('kanchanaburi'), "/photos/erawan.jpg"),
    klook("Railway and falls tours", "Tours", "A licensed car helps if you want Hellfire Pass. The town sights do not need an early hotel briefing.", klookTours('River Kwai Kanchanaburi'), "/photos/riverside.jpg"),
    ],
    faqs: [
      { q: "Is the bridge the whole visit?", a: "No. Budget more time for the railway centre and the cemetery than for the selfie." },
      { q: "Does the train start at Krung Thep Aphiwat?", a: "No. Ordinary Nam Tok trains leave Thonburi." },
    ],
  },
  {
    path: "/khao-lak/where-to-stay",
    title: "Where to stay in Khao Lak",
    description: "Khao Lak hotels sit on Highway 4. Bang Niang is the walkable dinner strip. HKT is 70 to 90 minutes south. Name the beach before booking.",
    lede: "Khao Lak is known for a long Andaman shore rather than a Phuket suburb, so sleep Bang Niang for dinner or Nang Thong if the HKT drive is late. Stay on the beach side of Highway 4.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Khao Lak", href: "/khao-lak" },
      { name: "Where to stay", href: "/khao-lak/where-to-stay" },
    ],
    facts: [
      { label: "Airport", value: "HKT, then 70 to 90 minutes north on Highway 4" },
      { label: "Strip", value: "Bang Niang for beach plus dinner" },
      { label: "Pier", value: "Thap Lamu for Similan boats" },
      { label: "Season", value: "Andaman November to April" },
    ],
    chips: [
      "Bang Niang",
      "Nang Thong",
      "Highway 4",
    ],
    photo: "/photos/khao-lak.jpg",
    geo: { lat: 8.672, lon: 98.25, containedIn: "Andaman Coast" },
    paragraphs: [
      "[Khao Lak](/khao-lak) is a car from Phuket Airport: 70 to 90 minutes north on Highway 4, and Nang Thong is the first useful strip. [Bang Niang](/khao-lak/bang-niang) is a few minutes farther and the usual dinner walk, and Khuk Khak and Pakarang sit later still. Crossing Highway 4 on foot at night is the local hazard.",
      "Book the beach side of the road on Trip.com, and Similan boats leave Thap Lamu only while the park is open (15 October to 15 May). See [Similan and Surin](/khao-lak/similan-and-surin-islands), and a 2026 HKT private car often beats a soi hunt after a late flight.",
    ],
    sections: [
      {
        id: "areas",
        title: "Which beach fits which stay",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["Nang Thong and Bang La On","First stays, walkable dinner","Closest useful strip after HKT"],
            ["Bang Niang","Wider beach, slightly later night","Tsunami memorials sit inland"],
            ["Khuk Khak and Pakarang","Space and couples","Ride south for most restaurants"],
            ["Thap Lamu village","06:00 pier call","Not the swim"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Khao Lak hub", href: "/khao-lak", photo: "/photos/khao-lak.jpg" },
      { title: "Bang Niang", href: "/khao-lak/bang-niang", photo: "/photos/longtail-andaman.jpg" },
      { title: "Similan and Surin", href: "/khao-lak/similan-and-surin-islands", photo: "/photos/longtail-andaman.jpg" },
      { title: "Getting around", href: "/khao-lak/getting-around", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Khao Lak stays", "Name the beach", "Search the town, then filter Bang Niang or Nang Thong.", stayLink('khao-lak'), "/photos/longtail-andaman.jpg"),
    stay("Bang Niang hotels", "Main strip", "Beach plus dinner without a 20-minute hop.", stayAreaLink('bang-niang'), "/photos/ferry-gulf.jpg"),
    ],
    faqs: [
      { q: "Bang Niang or Nang Thong?", a: "Nang Thong if you land late from HKT. Bang Niang if you want a wider beach and a slightly later walk." },
      { q: "Sleep at Thap Lamu?", a: "Only the night before a 06:00 Similan check-in. It is not the swim." },
    ],
  },
  {
    path: "/khao-lak/best-time-to-visit",
    title: "Best time to visit Khao Lak",
    description: "Khao Lak follows the Andaman: November to April. Similan park opens 15 October to 15 May and closes 16 May to 14 October. HKT then 70 to 90 minutes north.",
    lede: "Khao Lak is known for an Andaman dry window from November to April, and Similan boats run 15 October to 15 May. Stay on the mainland if the park is closed.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Khao Lak", href: "/khao-lak" },
      { name: "Best time to visit", href: "/khao-lak/best-time-to-visit" },
    ],
    facts: [
      { label: "Andaman", value: "November to April" },
      { label: "Similan park", value: "Open 15 Oct to 15 May; closed 16 May to 14 Oct" },
      { label: "Pier", value: "Thap Lamu" },
      { label: "Airport", value: "HKT, then 70 to 90 minutes north on Highway 4" },
    ],
    chips: [
      "Nov to Apr",
      "Park dates",
      "Closed mid-May",
    ],
    photo: "/photos/longtail-andaman.jpg",
    geo: { lat: 8.672, lon: 98.25, containedIn: "Andaman Coast" },
    paragraphs: [
      "[Khao Lak](/khao-lak) uses Andaman rules, and November to April is the beach and the usual first stay. [Similan and Surin](/khao-lak/similan-and-surin-islands) open 15 October to 15 May and close 16 May to 14 October, and anyone selling a July Similan trip is selling a different island or a lie.",
      "Fly into HKT, then drive 70 to 90 minutes north on Highway 4, and sleep on the [Bang Niang](/khao-lak/bang-niang) strip if dinner matters. Early and late park dates still cancel on swell, and keep a spare beach day. Pair with Phuket or Khao Sok, not with Samui.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**15 Oct to 15 May:** Park open. Book Thap Lamu boats early in peak weeks.",
          "**Nov to Apr:** Best sand. Highway 4 stays the spine.",
          "**16 May to 14 Oct:** Park closed. Come only for a quiet mainland beach in rain.",
        ],
      },
    ],
    portraits: [
      { title: "Khao Lak hub", href: "/khao-lak", photo: "/photos/khao-lak.jpg" },
      { title: "Similan and Surin", href: "/khao-lak/similan-and-surin-islands", photo: "/photos/longtail-andaman.jpg" },
      { title: "Where to stay", href: "/khao-lak/where-to-stay", photo: "/photos/khao-lak.jpg" },
      { title: "When to go", href: "/plan/when-to-go", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Khao Lak in the park window", "15 Oct to 15 May", "Lock Bang Niang or Nang Thong the night before a 06:00 pier call.", stayLink('khao-lak'), "/photos/khao-lak.jpg"),
    klook("Similan day boats", "Tours", "Only while the park is open. Ask if the park fee is included.", klookTours('Similan Islands day trip'), "/photos/khao-lak.jpg"),
    ],
    faqs: [
      { q: "Are the Similans open in July?", a: "No. Closed 16 May to 14 October." },
      { q: "Can you visit in August for the beach only?", a: "You can. You will get metres of Takua Pa rain, not a bargain Andaman week." },
    ],
  },
  {
    path: "/khao-lak/getting-around",
    title: "Getting around Khao Lak",
    description: "Khao Lak has no airport and no ferry. Fly HKT, then drive 70 to 90 minutes north on Highway 4. Similan boats leave Thap Lamu. Cross the highway with care.",
    lede: "Khao Lak is known for a Highway 4 spine and a Thap Lamu pier, so stay on one beach strip. The HKT car is 70 to 90 minutes, and there is no Smart Bus for this run.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Khao Lak", href: "/khao-lak" },
      { name: "Getting around", href: "/khao-lak/getting-around" },
    ],
    facts: [
      { label: "Airport", value: "HKT, then 70 to 90 minutes north on Highway 4" },
      { label: "Pier", value: "Thap Lamu for Similan speedboats" },
      { label: "Local hop", value: "Grab or a short scooter on the beach side" },
      { label: "Hazard", value: "Crossing Highway 4 at night" },
    ],
    chips: [
      "HKT car",
      "Highway 4",
      "Thap Lamu",
    ],
    photo: "/photos/ferry-gulf.jpg",
    geo: { lat: 8.672, lon: 98.25, containedIn: "Andaman Coast" },
    paragraphs: [
      "There is no airport in [Khao Lak](/khao-lak) and no passenger ferry, and fly HKT, then take Highway 402 off Phuket and north on Highway 4 for 70 to 90 minutes. Book a named car, and the Smart Bus does not do this run. Nang Thong comes first; [Bang Niang](/khao-lak/bang-niang) sits a few minutes later.",
      "Similan boats leave Thap Lamu in Thai Mueang while the park is open (15 October to 15 May). See [Similan and Surin](/khao-lak/similan-and-surin-islands), and a 2026 hotel-to-pier pickup is often bundled on the boat ticket. Walk the beach side of the road, and do not treat Highway 4 as a promenade.",
    ],
    sections: [
      {
        id: "modes",
        title: "Which mode for which hop",
        bullets: [
          "**HKT car:** 70 to 90 minutes. The real door.",
          "**Grab:** Strip to strip at night. Cheaper than a blind scooter.",
          "**Thap Lamu:** Operator pickup or a pre-dawn taxi.",
          "**Walk:** Beach-side sois only. The highway is the hazard.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/khao-lak/where-to-stay", photo: "/photos/khao-lak.jpg" },
      { title: "Bang Niang", href: "/khao-lak/bang-niang", photo: "/photos/khao-lak.jpg" },
      { title: "Similan and Surin", href: "/khao-lak/similan-and-surin-islands", photo: "/photos/longtail-andaman.jpg" },
      { title: "Day trips", href: "/khao-lak/day-trips", photo: "/photos/longtail-andaman.jpg" },
    ],
    affiliates: [
    stay("Sleep on the strip you will walk", "Bang Niang", "The pier is a pickup. The highway is not a sidewalk.", stayAreaLink('bang-niang'), "/photos/khao-lak.jpg"),
    {
      title: "HKT airport car",
      kicker: "Transfers",
      body: "70 to 90 minutes north. Book the car. The Smart Bus skips this coast.",
      href: transferLink('HKT'),
      cta: 'Book transfer',
      photo: "/photos/longtail-andaman.jpg",
      partner: 'transfer',
    },
    ],
    faqs: [
      { q: "Is there a bus from HKT to Khao Lak?", a: "Not a useful tourist bus. Book a car for 70 to 90 minutes on Highway 4." },
      { q: "Can you walk to Thap Lamu?", a: "No. It is a southbound road to Thai Mueang. Use the boat pickup." },
    ],
  },
  {
    path: "/khao-lak/day-trips",
    title: "Khao Lak day trips",
    description: "The Khao Lak day that matters is a Similan boat from Thap Lamu. The park is open 15 October to 15 May. Sleep on the Bang Niang strip.",
    lede: "Khao Lak day trips are known for Similan granite and a long speedboat, and they fit the 15 October to 15 May park window. Stay in Khao Lak, not Patong.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Khao Lak", href: "/khao-lak" },
      { name: "Day trips", href: "/khao-lak/day-trips" },
    ],
    facts: [
      { label: "Similan", value: "Open 15 Oct to 15 May; closed 16 May to 14 Oct" },
      { label: "Pier", value: "Thap Lamu, about 1.5 hours by speedboat" },
      { label: "Airport", value: "HKT, then 70 to 90 minutes north" },
      { label: "Sleep", value: "Bang Niang or Nang Thong the night before" },
    ],
    chips: [
      "Similan boats",
      "Thap Lamu",
      "Park dates",
    ],
    photo: "/photos/longtail-andaman.jpg",
    geo: { lat: 8.672, lon: 98.25, containedIn: "Andaman Coast" },
    paragraphs: [
      "The spare day from [Khao Lak](/khao-lak) is [Similan and Surin](/khao-lak/similan-and-surin-islands), and boats leave Thap Lamu. The park opens 15 October to 15 May and closes 16 May to 14 October, and Foreign park fees have sat in the 500 THB range; confirm on the e-ticket. Phuket pickups add a long pre-dawn road.",
      "Sleep on the [Bang Niang](/khao-lak/bang-niang) strip the night before a 06:00 call, and HKT is still 70 to 90 minutes south on Highway 4. Do not combine a Samui idea on the same calendar, and andaman November to April is the sand backup if the swell cancels.",
    ],
    sections: [
      {
        id: "picks",
        title: "Pick one spare day",
        table: {
          headers: ["Trip","Clock","Sleep after"],
          rows: [
            ["Similan speedboat","Full sea day from Thap Lamu","Khao Lak"],
            ["Surin from Khuraburi","Different pier, farther north","Only if Surin is the point"],
            ["Beach day on Bang Niang","Backup if swell cancels","Khao Lak"],
            ["Patong nightlife","Wrong plan","Do not add"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Similan and Surin", href: "/khao-lak/similan-and-surin-islands", photo: "/photos/longtail-andaman.jpg" },
      { title: "Khao Lak hub", href: "/khao-lak", photo: "/photos/khao-lak.jpg" },
      { title: "Bang Niang", href: "/khao-lak/bang-niang", photo: "/photos/khao-lak.jpg" },
      { title: "Best time", href: "/khao-lak/best-time-to-visit", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Khao Lak the night before the boat", "Bang Niang", "A Phuket hotel adds two hours of dark highway.", stayAreaLink('bang-niang'), "/photos/khao-lak.jpg"),
    klook("Similan day boats", "Tours", "Only 15 October to 15 May. Name Thap Lamu. Ask about the park fee.", klookTours('Similan Islands day trip'), "/photos/khao-lak.jpg"),
    ],
    faqs: [
      { q: "Similan from Phuket as a day trip?", a: "Possible with a pre-dawn pickup. Sleeping in Khao Lak is the cleaner clock." },
      { q: "Similan and Surin the same day?", a: "No. Different piers and different seas." },
    ],
  },
  {
    path: "/khao-lak/bang-niang",
    title: "Bang Niang",
    description: "Bang Niang is the Khao Lak main beach-and-dinner strip on Highway 4. Sleep here for Similan mornings. HKT is 70 to 90 minutes south.",
    lede: "Bang Niang is known for a wider Khao Lak beach and a walkable dinner strip, and it fits Similan weeks. Stay on the beach side of Highway 4, not across the traffic.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Khao Lak", href: "/khao-lak" },
      { name: "Bang Niang", href: "/khao-lak/bang-niang" },
    ],
    facts: [
      { label: "Where", value: "North of Nang Thong on Highway 4" },
      { label: "Airport", value: "HKT, then 70 to 90 minutes north" },
      { label: "Pier", value: "Thap Lamu pickup for Similan boats" },
      { label: "Season", value: "Andaman November to April" },
    ],
    chips: [
      "Main strip",
      "Beach side",
      "Similan base",
    ],
    photo: "/photos/khao-lak.jpg",
    geo: { lat: 8.672, lon: 98.25, containedIn: "Andaman Coast" },
    paragraphs: [
      "Bang Niang is the strip most first stays should name in [Khao Lak](/khao-lak), and the beach is wider than Nang Thong. Dinner walks sit on the beach side of Highway 4, and tsunami memorials sit just inland. Crossing the highway at night is the hazard, not the sea.",
      "Fly HKT, then 70 to 90 minutes north, and [Similan](/khao-lak/similan-and-surin-islands) pickups still go to Thap Lamu while the park is open (15 October to 15 May). A 2026 Grab to Nang Thong is a short hop if you booked the wrong soi, and see [where to stay](/khao-lak/where-to-stay) if you want Khuk Khak quiet instead.",
    ],
    sections: [
      {
        id: "use",
        title: "When Bang Niang is the right pin",
        bullets: [
          "**Yes:** Similan week, walkable dinner, a wider beach.",
          "**No:** A Patong nightlife plan. This is a highway town.",
          "**Park closed:** 16 May to 14 October. Come only if rain on a mainland beach is acceptable.",
        ],
      },
    ],
    portraits: [
      { title: "Khao Lak hub", href: "/khao-lak", photo: "/photos/khao-lak.jpg" },
      { title: "Where to stay", href: "/khao-lak/where-to-stay", photo: "/photos/longtail-andaman.jpg" },
      { title: "Similan and Surin", href: "/khao-lak/similan-and-surin-islands", photo: "/photos/longtail-andaman.jpg" },
      { title: "Getting around", href: "/khao-lak/getting-around", photo: "/photos/ferry-gulf.jpg" },
    ],
    affiliates: [
    stay("Bang Niang hotels", "Main strip", "Beach plus dinner without a 20-minute hop.", stayAreaLink('bang-niang'), "/photos/longtail-andaman.jpg"),
    stay("All Khao Lak stays", "If you still need Nang Thong", "Use the town search, then filter the beach name.", stayLink('khao-lak'), "/photos/ferry-gulf.jpg"),
    ],
    faqs: [
      { q: "Is Bang Niang quieter than Patong?", a: "Yes. It is still a highway strip with scooters. It is not a silent cape." },
      { q: "Walk to the Similan pier?", a: "No. Thap Lamu is a southbound pickup." },
    ],
  },
  {
    path: "/sukhothai/where-to-stay",
    title: "Where to stay in Sukhothai",
    description: "Sleep in Old Sukhothai at the UNESCO gate for a 06:30 bicycle. New Sukhothai is 12 km east. Fly THS first, or use PHS as the fallback.",
    lede: "Sukhothai is known for a dawn bicycle in the UNESCO park, so sleep in Old Sukhothai at the gate and treat the new town as a taxi if you land late. This is an overnight, not a Bangkok day trip.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Sukhothai", href: "/sukhothai" },
      { name: "Where to stay", href: "/sukhothai/where-to-stay" },
    ],
    facts: [
      { label: "Old town", value: "Muang Kao, at the central gate" },
      { label: "New town", value: "About 12 km east; more hotels" },
      { label: "Get there", value: "THS on Bangkok Airways; PHS is the fallback" },
      { label: "Park", value: "Central zone 200 THB foreigners, 06:30 to 19:30" },
    ],
    chips: [
      "Old Sukhothai",
      "Gate at 06:30",
      "THS, or PHS plus a van",
    ],
    photo: "/photos/sukhothai.jpg",
    geo: { lat: 17.017, lon: 99.703, containedIn: "Lower North" },
    paragraphs: [
      "Book Old Sukhothai (Muang Kao) if the [historical park](/sukhothai/historical-park) is why you came, and the central zone opens 06:30 and costs 200 THB for foreigners. Rent a bicycle at the central gate, and new Sukhothai, about 12 km east, has more ATMs and a duller dawn.",
      "Bangkok Airways flies into Sukhothai Airport (THS) when the schedule fits. If you land at Phitsanulok (PHS) instead, the city is east of the ruins and the transfer runs west into Old Sukhothai. [Ayutthaya](/ayutthaya) is the ruins day trip by train from [Bangkok](/bangkok). A 2026 songthaew or Grab from the new town uses up the cool morning in transit. See the [Sukhothai hub](/sukhothai) before you add Si Satchanalai.",
    ],
    sections: [
      {
        id: "areas",
        title: "Which base fits which dawn",
        table: {
          headers: ["Base","Who it fits","2026 note"],
          rows: [
            ["Old Sukhothai","Dawn bikes, quiet night","Thin dining after 21:00"],
            ["New Sukhothai","More rooms, more ATMs","A hop to the ruins every morning"],
            ["Phitsanulok","Late PHS flights","You will miss 06:30 light"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Sukhothai hub", href: "/sukhothai", photo: "/photos/sukhothai.jpg" },
      { title: "Historical park", href: "/sukhothai/historical-park", photo: "/photos/sukhothai.jpg" },
      { title: "Getting around", href: "/sukhothai/getting-around", photo: "/photos/northern.jpg" },
      { title: "Ayutthaya", href: "/ayutthaya", photo: "/photos/ayutthaya.jpg" },
    ],
    affiliates: [
    stay("Sukhothai stays", "Old town first", "Filter for Historical Park or Muang Kao.", stayLink('sukhothai'), "/photos/northern.jpg"),
    stay("Old Sukhothai gate hotels", "Dawn pin", "Search Old Sukhothai if 06:30 is the point.", hotelSearchLink('Old Sukhothai', 'sukhothai'), "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "Old town or new town?", a: "Old town if the park is the trip. New town if you land late and accept a morning hop." },
      { q: "Can you day-trip from Bangkok?", a: "No. Fly THS or PHS, then sleep at the gate." },
    ],
  },
  {
    path: "/sukhothai/historical-park",
    title: "Sukhothai Historical Park",
    description: "Sukhothai’s UNESCO park: central zone 200 THB for foreigners, 06:30 to 19:30. Rent a bicycle at the gate. Fly THS, or PHS as fallback.",
    lede: "Sukhothai Historical Park is known for lotus-bud chedis you bicycle at opening, and the central zone is 200 THB for foreigners from 06:30 to 19:30. Stay in Old Sukhothai so you can start cycling at opening time instead of spending that first hour on a transfer.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Sukhothai", href: "/sukhothai" },
      { name: "Historical park", href: "/sukhothai/historical-park" },
    ],
    facts: [
      { label: "UNESCO", value: "Three paid zones plus open outskirts" },
      { label: "Central zone", value: "200 THB foreigners; 06:30 to 19:30" },
      { label: "Move", value: "Rent a bicycle at the central gate" },
      { label: "Get there", value: "THS first; PHS is the one-hour fallback" },
    ],
    chips: [
      "200 THB central",
      "Bicycle",
      "06:30 open",
    ],
    photo: "/photos/sukhothai.jpg",
    geo: { lat: 17.017, lon: 99.703, containedIn: "Lower North" },
    paragraphs: [
      "The inner historic zone is the visit: Wat Mahathat, Wat Sa Si, Wat Si Sawai; foreigners pay 200 THB for the central zone. Hours are 06:30 to 19:30 most days; rent a bicycle at the central gate. Northern and western zones are extra tickets if you still have legs.",
      "Sleep in Old [Sukhothai](/sukhothai). Bangkok Airways uses Sukhothai Airport (THS) when it fits; Phitsanulok is a separate city about 70 km east, the cheaper airport fallback, then a westward van via the new town into Muang Kao, about one hour by car or 1 to 1.5 hours by bus. If you only have one day from Bangkok, [Ayutthaya](/ayutthaya) is the ruins trip by train, and Si Satchanalai is a second morning to the north; see [day trips](/sukhothai/day-trips). If an old QR page still shows 100 THB, pay the price posted at the staffed ticket booth.",
    ],
    sections: [
      {
        id: "zones",
        title: "Which ticket to buy",
        table: {
          headers: ["Zone","Foreign ticket","Note"],
          rows: [
            ["Central / inner","200 THB","06:30 to 19:30; the reason you came"],
            ["North (Si Chum, Phai Luang)","Often 120 THB","Add if you want the mondop face"],
            ["West / Aranyik","Often 120 THB","Afternoon legs"],
            ["Bicycle","About 10 THB a zone","Rent at the central gate"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Sukhothai hub", href: "/sukhothai", photo: "/photos/sukhothai.jpg" },
      { title: "Where to stay", href: "/sukhothai/where-to-stay", photo: "/photos/northern.jpg" },
      { title: "Day trips", href: "/sukhothai/day-trips", photo: "/photos/doi-suthep.jpg" },
      { title: "Ayutthaya park", href: "/ayutthaya/historical-park", photo: "/photos/ayutthaya.jpg" },
    ],
    affiliates: [
    stay("Old-town stays at the gate", "Dawn bicycle", "The cool hour is why you sleep at the gate. Sleep Muang Kao.", stayLink('sukhothai'), "/photos/northern.jpg"),
    klook("Park and bicycle tours", "Tours", "A guide helps if you skip the reading. A bicycle is still the right machine.", klookTours('Sukhothai Historical Park'), "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "Do you need every zone?", a: "No. Buy the central zone. Add the north if you want Wat Si Chum." },
      { q: "Ayutthaya or Sukhothai for one ruin day?", a: "Ayutthaya from Bangkok. Sukhothai if you will sleep out of the capital." },
    ],
  },
  {
    path: "/sukhothai/best-time-to-visit",
    title: "Best time to visit Sukhothai",
    description: "Sukhothai is kindest from November to February. March and April bake the laterite. The UNESCO central zone stays 200 THB, 06:30 to 19:30, in any month.",
    lede: "Sukhothai is known for a cool-season dawn ride from November to February, when the bicycle is kind. Heat in April still opens at 06:30, so start at the old-town gate anyway.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Sukhothai", href: "/sukhothai" },
      { name: "Best time to visit", href: "/sukhothai/best-time-to-visit" },
    ],
    facts: [
      { label: "Cool", value: "November to February" },
      { label: "Hot", value: "March and April on bare laterite" },
      { label: "Park", value: "Central zone 200 THB, 06:30 to 19:30" },
      { label: "Get there", value: "THS first; PHS is the one-hour fallback" },
    ],
    chips: [
      "Nov to Feb",
      "Dawn any month",
      "Inland heat",
    ],
    photo: "/photos/northern.jpg",
    geo: { lat: 17.017, lon: 99.703, containedIn: "Lower North" },
    paragraphs: [
      "[Sukhothai](/sukhothai) is inland, and coast monsoons do not decide it. November to February is the kind park, and March and April are oven-hot on laterite; start at 06:30 anyway. Rain still works if you ride at opening, and the central zone stays 200 THB for foreigners.",
      "Fly Bangkok Airways into Sukhothai Airport (THS) when it fits, or use Phitsanulok (PHS) and a westward van from that eastern city, and sleep in Old Sukhothai. Pair this page with [Ayutthaya](/ayutthaya) only as a different ruin week, not a same-day van. See [historical park](/sukhothai/historical-park) for zone math.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Feb:** Cool dawn. Book old-town rooms.",
          "**Mar to Apr:** Heat. Bicycle at 06:30 or skip the afternoon.",
          "**Rain months:** Opening still works. Carry a light cover.",
        ],
      },
    ],
    portraits: [
      { title: "Historical park", href: "/sukhothai/historical-park", photo: "/photos/sukhothai.jpg" },
      { title: "Where to stay", href: "/sukhothai/where-to-stay", photo: "/photos/sukhothai.jpg" },
      { title: "Sukhothai hub", href: "/sukhothai", photo: "/photos/sukhothai.jpg" },
      { title: "Ayutthaya season", href: "/ayutthaya/best-time-to-visit", photo: "/photos/ayutthaya.jpg" },
    ],
    affiliates: [
    stay("Sukhothai in the cool months", "Nov to Feb", "Lock an old-town night before the park weekend.", stayLink('sukhothai'), "/photos/sukhothai.jpg"),
    klook("Park tours in peak months", "Tours", "A bicycle at 06:30 still beats a 10:00 guided start.", klookTours('Sukhothai Historical Park'), "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "Is August a bad Sukhothai month?", a: "It is hot and can rain. Opening at 06:30 still works. It is not an Andaman boat month." },
      { q: "Haze like Chiang Mai?", a: "March can hold smoke. The chedis are still there. Haze can dull the views even when the park is open." },
    ],
  },
  {
    path: "/sukhothai/getting-around",
    title: "Getting around Sukhothai",
    description: "Reach Sukhothai via Sukhothai Airport (THS) on Bangkok Airways, or Phitsanulok (PHS) as fallback. Rent a bicycle at the park gate.",
    lede: "Sukhothai is known for cycling between 13th-century ruins in a quiet park, best for history lovers. Fly Bangkok Airways into Sukhothai Airport (THS) when you can; Phitsanulok is the cheaper fallback east of the park.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Sukhothai", href: "/sukhothai" },
      { name: "Getting around", href: "/sukhothai/getting-around" },
    ],
    facts: [
      { label: "Fly", value: "THS on Bangkok Airways; PHS is the fallback" },
      { label: "Park", value: "Bicycle at the central gate" },
      { label: "Ticket", value: "Central zone 200 THB foreigners, 06:30 to 19:30" },
      { label: "New town", value: "About 12 km east" },
    ],
    chips: [
      "THS, or PHS plus van",
      "Park bicycle",
      "Old-town walk",
    ],
    photo: "/photos/doi-suthep.jpg",
    geo: { lat: 17.017, lon: 99.703, containedIn: "Lower North" },
    paragraphs: [
      "Bangkok Airways flies into Sukhothai Airport (THS) when the schedule fits, and Phitsanulok (PHS) is the cheaper fallback. Old Sukhothai is about 70 km west of that city, about one hour by car or 1 to 1.5 hours by bus or van via the new town, about 12 km east of the old town. The train-plus-bus path works and eats a day, and this is not a same-day train hop like [Ayutthaya](/ayutthaya) from [Bangkok](/bangkok). Sleep in Old Sukhothai so 06:30 is a roll, not a transfer.",
      "Inside the [historical park](/sukhothai/historical-park), rent a bicycle at the central gate, and foreigners pay 200 THB for the central zone. A 2026 bicycle add-on is about 10 THB a zone, and songthaews link new town and old town if you booked the wrong pin. Do not tour the inner zone by idling tuk-tuk if you can ride.",
    ],
    sections: [
      {
        id: "modes",
        title: "Which mode for which hop",
        bullets: [
          "**THS or PHS, then a car or van:** THS is the closest airport. From PHS the road west to Old Sukhothai is about 70 km: one hour by car, or 1 to 1.5 hours by bus or van through new Sukhothai.",
          "**Bicycle:** Central zone at opening.",
          "**Walk:** Old-town sois after 19:30.",
          "**Grab / songthaew:** New town to the gate if you slept east.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/sukhothai/where-to-stay", photo: "/photos/sukhothai.jpg" },
      { title: "Historical park", href: "/sukhothai/historical-park", photo: "/photos/sukhothai.jpg" },
      { title: "Sukhothai hub", href: "/sukhothai", photo: "/photos/sukhothai.jpg" },
      { title: "Ayutthaya trains", href: "/get-there/bangkok-to-ayutthaya", photo: "/photos/ayutthaya.jpg" },
    ],
    affiliates: [
    stay("Sleep where the bicycle starts", "Old Sukhothai", "The cool hour is worth the thinner dinner.", stayLink('sukhothai'), "/photos/sukhothai.jpg"),
    klook("Park bicycles and vans", "Tours", "Useful from THS or PHS if you do not want to price a songthaew. The gate still sells bikes.", klookTours('Sukhothai Historical Park'), "/photos/northern.jpg"),
    ],
    faqs: [
      { q: "Is there a direct flight to Sukhothai?", a: "Yes, on Bangkok Airways into Sukhothai Airport (THS) when the schedule fits. If no THS flight suits your dates, fly to Phitsanulok (PHS) and take a van about 70 km west via the new town; allow about one hour by car or 1 to 1.5 hours by bus or van." },
      { q: "Tuk-tuk or bicycle in the park?", a: "Bicycle. A tuk-tuk is heat and idle time." },
    ],
  },
  {
    path: "/sukhothai/day-trips",
    title: "Sukhothai day trips",
    description: "From Old Sukhothai, Si Satchanalai is the second UNESCO morning north. Extra park zones are closer. Fly THS, or PHS as the fallback.",
    lede: "Sukhothai day trips are known for Si Satchanalai as a second UNESCO morning, not a rush from Bangkok. Stay in Old Sukhothai and keep the central zone as the first dawn.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Sukhothai", href: "/sukhothai" },
      { name: "Day trips", href: "/sukhothai/day-trips" },
    ],
    facts: [
      { label: "First morning", value: "Central zone 200 THB, bicycle at the gate" },
      { label: "Second morning", value: "Si Satchanalai, a separate park north" },
      { label: "Get there", value: "THS first; PHS is the one-hour fallback" },
      { label: "Not a day trip", value: "Do not start from Bangkok" },
    ],
    chips: [
      "Si Satchanalai",
      "Extra zones",
      "Two dawns",
    ],
    photo: "/photos/sukhothai.jpg",
    geo: { lat: 17.017, lon: 99.703, containedIn: "Lower North" },
    paragraphs: [
      "Day one is the [historical park](/sukhothai/historical-park) central zone: 200 THB for foreigners, 06:30 to 19:30, bicycle at the gate. Day two, if you still want chedis, is Si Satchanalai to the north, and it is a separate park, not a footnote. Northern and western Sukhothai zones are closer add-ons the same afternoon.",
      "Fly Bangkok Airways into Sukhothai Airport (THS) when it fits, or use Phitsanulok (PHS) and a westward transfer from that eastern city, and sleep in [Sukhothai](/sukhothai). [Ayutthaya](/ayutthaya) is the nearer ruins trip from Bangkok if you only have one spare day. If songthaew departures look thin, a hired car to Si Satchanalai is the most reliable way to keep to your schedule.",
    ],
    sections: [
      {
        id: "picks",
        title: "Pick one extra morning",
        table: {
          headers: ["Trip","Clock","Sleep after"],
          rows: [
            ["North and west zones","Same-day afternoon","Old Sukhothai"],
            ["Si Satchanalai","Second dawn","Old Sukhothai"],
            ["Ayutthaya from here","Wrong rail","Bangkok or Ayutthaya"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Historical park", href: "/sukhothai/historical-park", photo: "/photos/sukhothai.jpg" },
      { title: "Sukhothai hub", href: "/sukhothai", photo: "/photos/sukhothai.jpg" },
      { title: "Where to stay", href: "/sukhothai/where-to-stay", photo: "/photos/northern.jpg" },
      { title: "Ayutthaya", href: "/ayutthaya", photo: "/photos/ayutthaya.jpg" },
    ],
    affiliates: [
    stay("Keep the old-town base", "Two-night lock", "Central zone at dawn. Si Satchanalai only if you already slept here.", stayLink('sukhothai'), "/photos/northern.jpg"),
    klook("Si Satchanalai and park vans", "Tours", "A named car beats a thin songthaew board for the north park.", klookTours('Si Satchanalai'), "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "Do you need Si Satchanalai?", a: "No. The central zone is the trip. Add the north park if you have a second dawn." },
      { q: "Sukhothai and Ayutthaya in one day?", a: "No. Different centuries, different doors." },
    ],
  },
  {
    path: "/ayutthaya/where-to-stay",
    title: "Where to stay in Ayutthaya",
    description: "Most first trips should day-trip Ayutthaya. Overnight only for dawn at the prangs. The train from Krung Thep Aphiwat takes about one hour.",
    lede: "Ayutthaya is known for a ruin day from Bangkok, so stay overnight only if dawn at the bricks is the point. The train is about one hour from Krung Thep Aphiwat.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Ayutthaya", href: "/ayutthaya" },
      { name: "Where to stay", href: "/ayutthaya/where-to-stay" },
    ],
    facts: [
      { label: "Default", value: "Day trip; sleep in Bangkok" },
      { label: "Overnight", value: "Park-side guesthouse for 07:00 bricks" },
      { label: "Train", value: "About one hour from Krung Thep Aphiwat" },
      { label: "Tickets", value: "80 THB per paid site or 300 THB combo" },
    ],
    chips: [
      "Day trip first",
      "Dawn only",
      "Park-side",
    ],
    photo: "/photos/ayutthaya.jpg",
    geo: { lat: 14.353, lon: 100.565, containedIn: "Central Thailand" },
    paragraphs: [
      "Most first trips should sleep in [Bangkok](/bangkok) and ride about one hour from Krung Thep Aphiwat. See [Bangkok to Ayutthaya](/get-there/bangkok-to-ayutthaya). Overnight in [Ayutthaya](/ayutthaya) only if you want 07:00 at Wat Mahathat or Chaiwatthanaram without a capital alarm. Book park-side, not a highway box on the industrial ring.",
      "Paid sites are 80 THB each or 300 THB as a combo for foreigners, and Bang Pa-In is an add-on, not a reason to hotel in the palace suburb. A 2026 evening meal in Ayutthaya is thinner than Sukhumvit, and that is the point if you stay.",
    ],
    sections: [
      {
        id: "plans",
        title: "Stay or go home",
        table: {
          headers: ["Plan","Who it fits","2026 note"],
          rows: [
            ["Bangkok day trip","First-week spare day","Last trains matter more than a sixth wat"],
            ["One night park-side","Dawn bricks","Thin dinner after the vans leave"],
            ["River cruise hotel","The boat is the stay","You will see fewer wats"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Ayutthaya hub", href: "/ayutthaya", photo: "/photos/ayutthaya.jpg" },
      { title: "From Bangkok", href: "/ayutthaya/from-bangkok", photo: "/photos/wat-mahathat-ayu.jpg" },
      { title: "Historical park", href: "/ayutthaya/historical-park", photo: "/photos/wat-phra-si-sanphet.jpg" },
      { title: "Bangkok", href: "/bangkok", photo: "/photos/riverside.jpg" },
    ],
    affiliates: [
    stay("Ayutthaya overnight", "Only for dawn", "Park-side guesthouse, not a highway box.", stayLink('ayutthaya'), "/photos/wat-mahathat-ayu.jpg"),
    stay("Keep the Bangkok base", "Day-trip default", "The train is about one hour. Sleep on the BTS.", stayLink('bangkok'), "/photos/bang-pa-in.jpg"),
    ],
    faqs: [
      { q: "Is Ayutthaya worth an overnight?", a: "Only if you want dawn at the ruins. A full day from Bangkok covers the main paid wats." },
      { q: "Where exactly to sleep?", a: "Near the historical park. Not out on the ring road." },
    ],
  },
  {
    path: "/ayutthaya/historical-park",
    title: "Ayutthaya Historical Park",
    description: "Ayutthaya UNESCO ruins cost 80 THB per paid site or a 300 THB combo. Train about one hour from Krung Thep Aphiwat. Day trip first.",
    lede: "Ayutthaya Historical Park is known for brick prangs and a root-wrapped Buddha, and it fits a train day from Bangkok. Stay overnight only if you want empty dawn lanes.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Ayutthaya", href: "/ayutthaya" },
      { name: "Historical park", href: "/ayutthaya/historical-park" },
    ],
    facts: [
      { label: "Tickets", value: "80 THB per paid site or 300 THB combo, foreigners" },
      { label: "Hours", value: "Paid sites roughly 08:00 to 16:30-18:30" },
      { label: "Train", value: "About one hour from Krung Thep Aphiwat" },
      { label: "Add-on", value: "Bang Pa-In palace, not a sixth rushed wat" },
    ],
    chips: [
      "80 or 300 THB",
      "Bicycle or tuk-tuk",
      "Day trip first",
    ],
    photo: "/photos/wat-phra-si-sanphet.jpg",
    geo: { lat: 14.353, lon: 100.565, containedIn: "Central Thailand" },
    paragraphs: [
      "The Fine Arts Department lists paid monuments at 80 THB each for foreign visitors or 300 THB as a flat ticket. The combo usually covers Wat Phra Si Sanphet, Wat Mahathat, Wat Ratchaburana, Wat Phra Ram, Wat Chaiwatthanaram, and a sixth site. Ask the booth which names are on today's stub. Hours often read 08:00 to 18:00; some booths sell last tickets earlier.",
      "Ride about one hour from Krung Thep Aphiwat, and see [Bangkok to Ayutthaya](/get-there/bangkok-to-ayutthaya). Move by bicycle or tuk-tuk; Wat Chaiwatthanaram sits off the island, and day trip first from [Bangkok](/bangkok). Overnight only for dawn, and Bang Pa-In is the palace add-on, not a reason to skip the island. Compare [Sukhothai](/sukhothai) only if you will sleep out of the capital.",
    ],
    sections: [
      {
        id: "board",
        title: "2026 ticket board",
        table: {
          headers: ["Sight","Foreign ticket","Pair with"],
          rows: [
            ["Wat Mahathat","80 THB or combo","Opening photo, then move"],
            ["Wat Phra Si Sanphet","80 THB or combo","The royal field"],
            ["Wat Chaiwatthanaram","80 THB or combo","West of the river"],
            ["Bang Pa-In","Separate palace ticket","Add-on, not a first wat"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Ayutthaya hub", href: "/ayutthaya", photo: "/photos/ayutthaya.jpg" },
      { title: "From Bangkok", href: "/ayutthaya/from-bangkok", photo: "/photos/wat-mahathat-ayu.jpg" },
      { title: "Where to stay", href: "/ayutthaya/where-to-stay", photo: "/photos/bang-pa-in.jpg" },
      { title: "Sukhothai park", href: "/sukhothai/historical-park", photo: "/photos/sukhothai.jpg" },
    ],
    affiliates: [
    stay("Overnight only for dawn", "Park-side", "The combo is 300 THB. The 07:00 lane is why you would sleep here.", stayLink('ayutthaya'), "/photos/ayutthaya.jpg"),
    klook("Temple tickets and bikes", "Tickets", "Combo vans make sense if you hate tuk-tuk math. A bicycle is quieter.", klookTickets('Ayutthaya Historical Park'), "/photos/wat-mahathat-ayu.jpg"),
    ],
    faqs: [
      { q: "80 THB each or the 300 THB combo?", a: "Buy the combo if you will enter three or more paid sites. Buy singles if you only want Mahathat and Sanphet." },
      { q: "How long for the main island?", a: "A full day. Last trains matter more than a sixth wat." },
    ],
  },
  {
    path: "/ayutthaya/from-bangkok",
    title: "Ayutthaya from Bangkok",
    description: "Ayutthaya is about one hour by train from Krung Thep Aphiwat. Day trip first. Tickets are 80 THB or a 300 THB combo. Overnight only for dawn.",
    lede: "Ayutthaya from Bangkok is known for a one-hour train to brick prangs, and it fits a spare weekday if you sleep in Bangkok. Leave Kanchanaburi for another trip.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Ayutthaya", href: "/ayutthaya" },
      { name: "From Bangkok", href: "/ayutthaya/from-bangkok" },
    ],
    facts: [
      { label: "Train", value: "About one hour from Krung Thep Aphiwat" },
      { label: "Tickets", value: "80 THB per paid site or 300 THB combo" },
      { label: "Plan", value: "Day trip first; overnight only for dawn" },
      { label: "Add-on", value: "Bang Pa-In if you still have light" },
    ],
    chips: [
      "One-hour train",
      "Day trip first",
      "Not Kanchanaburi",
    ],
    photo: "/photos/wat-mahathat-ayu.jpg",
    geo: { lat: 14.353, lon: 100.565, containedIn: "Central Thailand" },
    paragraphs: [
      "Take a northbound set from Krung Thep Aphiwat, and ordinary and commuter trains also still use Hua Lamphong. The useful write-up is [Bangkok to Ayutthaya](/get-there/bangkok-to-ayutthaya), and from the station you need a tuk-tuk, a bicycle, or a long hot walk onto the [historical park](/ayutthaya/historical-park) island.",
      "Paid sites are 80 THB or a 300 THB combo, and day trip first from [Bangkok](/bangkok). Overnight only for dawn, and Bang Pa-In is the palace add-on south of town. Do not combine this with [Kanchanaburi](/kanchanaburi); that train leaves Thonburi and is a different day, and see [Bangkok to Kanchanaburi](/get-there/bangkok-to-kanchanaburi).",
    ],
    sections: [
      {
        id: "clock",
        title: "A workable spare day",
        bullets: [
          "**Morning train:** Krung Thep Aphiwat. Buy a return you can catch.",
          "**Island loop:** Bicycle or tuk-tuk. Combo if you will enter three-plus sites.",
          "**Bang Pa-In:** Only if light remains. Not a first wat.",
          "**Last train:** Matters more than a sixth ruin.",
        ],
      },
    ],
    portraits: [
      { title: "Bangkok to Ayutthaya", href: "/get-there/bangkok-to-ayutthaya", photo: "/photos/ayutthaya.jpg" },
      { title: "Historical park", href: "/ayutthaya/historical-park", photo: "/photos/wat-phra-si-sanphet.jpg" },
      { title: "Ayutthaya hub", href: "/ayutthaya", photo: "/photos/ayutthaya.jpg" },
      { title: "Bangkok", href: "/bangkok", photo: "/photos/riverside.jpg" },
    ],
    affiliates: [
    stay("Keep sleeping in Bangkok", "Day-trip default", "The train is about one hour. Overnight only for dawn.", stayLink('bangkok'), "/photos/bang-pa-in.jpg"),
    {
      title: "Bangkok to Ayutthaya trains",
      kicker: "Trip.com",
      body: "Search the morning board from Krung Thep Aphiwat. Buy a return that still exists at 16:00.",
      href: trainLink('Bangkok', 'Ayutthaya'),
      cta: 'Search trains',
      photo: "/photos/ayutthaya.jpg",
      partner: 'trains',
    },
    ],
    faqs: [
      { q: "Which Bangkok station?", a: "Krung Thep Aphiwat for most useful northbound sets. Hua Lamphong still has ordinary third class. Read the number." },
      { q: "Ayutthaya and Kanchanaburi in one day?", a: "No. Different stations, different directions." },
    ],
  },
  {
    path: "/ayutthaya/getting-around",
    title: "Getting around Ayutthaya",
    description: "Arrive by train in about one hour from Krung Thep Aphiwat. Use a bicycle or tuk-tuk on the island. Paid sites are 80 THB or a 300 THB combo.",
    lede: "Ayutthaya is known for an island you cannot cover on foot in April, so stay on a bicycle or a tuk-tuk. The train from Krung Thep Aphiwat is about one hour.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Ayutthaya", href: "/ayutthaya" },
      { name: "Getting around", href: "/ayutthaya/getting-around" },
    ],
    facts: [
      { label: "Train", value: "About one hour from Krung Thep Aphiwat" },
      { label: "On island", value: "Bicycle or tuk-tuk; not a hopeful walk" },
      { label: "Tickets", value: "80 THB per site or 300 THB combo" },
      { label: "West bank", value: "Wat Chaiwatthanaram needs a crossing" },
    ],
    chips: [
      "Train in",
      "Bicycle loop",
      "Tuk-tuk if heat",
    ],
    photo: "/photos/bang-pa-in.jpg",
    geo: { lat: 14.353, lon: 100.565, containedIn: "Central Thailand" },
    paragraphs: [
      "Ayutthaya station sits on the east side of the island, and read [Bangkok to Ayutthaya](/get-there/bangkok-to-ayutthaya) for Krung Thep Aphiwat versus Hua Lamphong. From the platform you need a tuk-tuk, a bicycle, or a long hot walk, and the [historical park](/ayutthaya/historical-park) is a loop, not a single gate.",
      "Foreign tickets are 80 THB per paid site or 300 THB combo, and Wat Chaiwatthanaram is west of the river. Bang Pa-In is a south add-on, and day trip first; overnight only for dawn. A 2026 bicycle rental is a few hundred THB for the day if you bargain once, and see [Ayutthaya](/ayutthaya) for the stay-or-go call.",
    ],
    sections: [
      {
        id: "modes",
        title: "Which mode for which hop",
        bullets: [
          "**Train:** About one hour from Krung Thep Aphiwat.",
          "**Bicycle:** Island loop in cooler months.",
          "**Tuk-tuk:** Heat, three-wat packages, Chaiwatthanaram.",
          "**Van to Bang Pa-In:** Only after the island, if light remains.",
        ],
      },
    ],
    portraits: [
      { title: "From Bangkok", href: "/ayutthaya/from-bangkok", photo: "/photos/ayutthaya.jpg" },
      { title: "Historical park", href: "/ayutthaya/historical-park", photo: "/photos/wat-phra-si-sanphet.jpg" },
      { title: "Where to stay", href: "/ayutthaya/where-to-stay", photo: "/photos/wat-mahathat-ayu.jpg" },
      { title: "Bangkok", href: "/bangkok", photo: "/photos/riverside.jpg" },
    ],
    affiliates: [
    stay("Park-side if you refuse the last train", "Dawn only", "Most people ride back to Bangkok.", stayLink('ayutthaya'), "/photos/wat-phra-si-sanphet.jpg"),
    klook("Bikes and ruin vans", "Tours", "A bicycle is quieter. A van is useful if you want Bang Pa-In named.", klookTours('Ayutthaya bicycle'), "/photos/wat-mahathat-ayu.jpg"),
    ],
    faqs: [
      { q: "Can you walk the island?", a: "In November, maybe a few wats. In April, no. Rent the bike." },
      { q: "Station to Wat Chaiwatthanaram on foot?", a: "Do not. It is the wrong side of the river for a hopeful walk." },
    ],
  },
  {
    path: "/ayutthaya/best-time-to-visit",
    title: "Best time to visit Ayutthaya",
    description: "Ayutthaya works all year as a Bangkok train day. November to February is cooler. The ride from Krung Thep Aphiwat is about one hour.",
    lede: "Ayutthaya is known for a year-round ruin day, and November to February fits a bicycle. Stay in Bangkok unless you want dawn; heat in April still opens the booths.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Ayutthaya", href: "/ayutthaya" },
      { name: "Best time to visit", href: "/ayutthaya/best-time-to-visit" },
    ],
    facts: [
      { label: "Cooler", value: "November to February" },
      { label: "Flood risk", value: "September and October lanes on the island" },
      { label: "Train", value: "About one hour from Krung Thep Aphiwat" },
      { label: "Tickets", value: "80 THB per site or 300 THB combo" },
    ],
    chips: [
      "Nov to Feb",
      "Year-round train",
      "Dawn in any month",
    ],
    photo: "/photos/wat-mahathat-ayu.jpg",
    geo: { lat: 14.353, lon: 100.565, containedIn: "Central Thailand" },
    paragraphs: [
      "[Ayutthaya](/ayutthaya) is not an Andaman decision, and you can do the [historical park](/ayutthaya/historical-park) in July; you will drink more water. November to February is the humane bicycle, and September and October can flood lanes; temples still open, streets do not always.",
      "The train from Krung Thep Aphiwat is about one hour in any month, and see [Bangkok to Ayutthaya](/get-there/bangkok-to-ayutthaya). Day trip first from [Bangkok](/bangkok), and overnight only for dawn. Tickets stay 80 THB per paid site or 300 THB combo, and Bang Pa-In is a dry-season add-on when the island roads are clear.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Feb:** Bicycle weather. Weekend trains fill.",
          "**Apr:** Heat. Tuk-tuk, early start, extra water.",
          "**Sep to Oct:** Check flood notes on the island lanes.",
        ],
      },
    ],
    portraits: [
      { title: "From Bangkok", href: "/ayutthaya/from-bangkok", photo: "/photos/ayutthaya.jpg" },
      { title: "Historical park", href: "/ayutthaya/historical-park", photo: "/photos/wat-phra-si-sanphet.jpg" },
      { title: "Ayutthaya hub", href: "/ayutthaya", photo: "/photos/ayutthaya.jpg" },
      { title: "Kanchanaburi season", href: "/kanchanaburi/best-time-to-visit", photo: "/photos/kanchanaburi.jpg" },
    ],
    affiliates: [
    stay("Bangkok base for a cool-season day", "Nov to Feb", "Lock the city night. Ride the morning train.", stayLink('bangkok'), "/photos/ayutthaya.jpg"),
    stay("Ayutthaya dawn in any month", "Park-side", "Only if 07:00 bricks are the trip.", stayLink('ayutthaya'), "/photos/bang-pa-in.jpg"),
    ],
    faqs: [
      { q: "Is August a bad Ayutthaya month?", a: "It is hot and can rain. The train still runs. Start early." },
      { q: "Flooding close the wats?", a: "Lanes flood more often than ticket booths. Confirm the park lanes in September and October." },
    ],
  },
  {
    path: "/chiang-rai/where-to-stay",
    title: "Where to stay in Chiang Rai",
    description: "Sleep in Chiang Rai town for the night bazaar. The White Temple is a south hop, 200 THB since 1 January 2026. Fly CEI in 80 to 95 minutes from Bangkok.",
    lede: "Chiang Rai is known for a low-rise town and a White Temple south of the grid, so sleep in the city. Stay near the night bazaar if dinner without a tuk-tuk matters.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Rai", href: "/chiang-rai" },
      { name: "Where to stay", href: "/chiang-rai/where-to-stay" },
    ],
    facts: [
      { label: "Town", value: "Night bazaar and river; temple hotels are a coach dump" },
      { label: "Airport", value: "CEI, 80 to 95 minutes from BKK" },
      { label: "White Temple", value: "200 THB foreigners since 1 January 2026" },
      { label: "From CM", value: "Green Bus about 3.5 hours" },
    ],
    chips: [
      "Town first",
      "CEI",
      "Temple is a hop",
    ],
    photo: "/photos/chiang-rai.jpg",
    geo: { lat: 19.907, lon: 99.831, containedIn: "Northern Thailand" },
    paragraphs: [
      "Stay near the night bazaar or the river in [Chiang Rai](/chiang-rai) if you want dinner without a tuk-tuk. Stay nearer CEI only if the flight is brutal, and the White Temple is 13 to 15 km south on Highway 1, not a neighbourhood. Foreign tickets are 200 THB since 1 January 2026.",
      "Fly CEI in 80 to 95 minutes from [Bangkok](/bangkok), or take the Green Bus about 3.5 hours from [Chiang Mai](/chiang-mai), and do not add [Pai](/pai) on the same first week. Book one or two nights on Trip.com, and see the [White Temple day](/chiang-rai/white-temple-day) before you pay for a souvenir van.",
    ],
    sections: [
      {
        id: "areas",
        title: "Which pin fits which night",
        table: {
          headers: ["Area","Who it fits","2026 note"],
          rows: [
            ["City / night bazaar","One-night temple circuit","Early shutdown"],
            ["Riverside","Slower evenings","Grab to dinner"],
            ["Chiang Saen / Golden Triangle","Mekong second night","Far from CEI and the White Temple"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Chiang Rai hub", href: "/chiang-rai", photo: "/photos/chiang-rai.jpg" },
      { title: "White Temple day", href: "/chiang-rai/white-temple-day", photo: "/photos/blue-temple.jpg" },
      { title: "Golden Triangle", href: "/chiang-rai/golden-triangle", photo: "/photos/baan-dam.jpg" },
      { title: "Chiang Mai", href: "/chiang-mai", photo: "/photos/doi-suthep.jpg" },
    ],
    affiliates: [
    stay("Chiang Rai town stays", "Bazaar first", "Sleep in the city. Temple hotels are a coach dump.", stayLink('chiang-rai'), "/photos/blue-temple.jpg"),
    stay("Chiang Mai if you refuse a second hotel", "Green Bus morning", "About 3.5 hours. Dawn at Wat Rong Khun then needs a 05:00 lobby.", stayLink('chiang-mai'), "/photos/doi-suthep.jpg"),
    ],
    faqs: [
      { q: "Sleep at the White Temple?", a: "No. Sleep in town. The temple is a southbound hop." },
      { q: "One night or two?", a: "One for the temple circuit. Two if the Mekong is the next day." },
    ],
  },
  {
    path: "/chiang-rai/white-temple-day",
    title: "White Temple day",
    description: "Wat Rong Khun costs 200 THB for foreigners since 1 January 2026, hours about 08:00 to 17:30. Blue Temple is free. Baan Dam is 80 THB.",
    lede: "A White Temple day is known for Wat Rong Khun at opening, then the Blue Temple in town, and it fits one Chiang Rai night. The foreign ticket is 200 THB since 1 January 2026.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Rai", href: "/chiang-rai" },
      { name: "White Temple day", href: "/chiang-rai/white-temple-day" },
    ],
    facts: [
      { label: "White Temple", value: "200 THB foreigners since 1 January 2026" },
      { label: "Hours", value: "About 08:00 to 17:30; last entry about 17:00" },
      { label: "Blue Temple", value: "Free; in town" },
      { label: "Baan Dam", value: "80 THB, north of the city" },
    ],
    chips: [
      "200 THB",
      "Blue Temple free",
      "Baan Dam 80 THB",
    ],
    photo: "/photos/blue-temple.jpg",
    geo: { lat: 19.907, lon: 99.831, containedIn: "Northern Thailand" },
    paragraphs: [
      "Open Wat Rong Khun at 08:00, before Chiang Mai coaches; foreign tickets rose to 200 THB on 1 January 2026. Hours run about 08:00 to 17:30 with last entry around 17:00; cash at the gate. Shoulders and knees covered; no photography inside the ubosot. Then Wat Rong Suea Ten (Blue Temple) in town, free, then Baan Dam at 80 THB if you still have stomach for it.",
      "The long version lives on [White Temple, Blue Temple, and Baan Dam](/attractions/white-temple-wat-rong-khun-and-blue-temple), and sleep in [Chiang Rai](/chiang-rai). Green Bus from [Chiang Mai](/chiang-mai) takes about 3.5 hours, and CEI is 80 to 95 minutes from Bangkok. Do not add [Pai](/pai) on the same spine.",
    ],
    sections: [
      {
        id: "order",
        title: "A workable circuit",
        table: {
          headers: ["Site","Fee","Note"],
          rows: [
            ["Wat Rong Khun","200 THB foreigners","08:00; last entry about 17:00"],
            ["Wat Rong Suea Ten","Free","In town; still a working wat"],
            ["Baan Dam","80 THB","North; 45 to 75 minutes"],
            ["Green Bus from CM","About 3.5 hours","Arcade Terminal, not a Pai van"],
          ],
        },
      },
    ],
    portraits: [
      { title: "Attraction page", href: "/attractions/white-temple-wat-rong-khun-and-blue-temple", photo: "/photos/chiang-rai.jpg" },
      { title: "Chiang Rai hub", href: "/chiang-rai", photo: "/photos/chiang-rai.jpg" },
      { title: "Where to stay", href: "/chiang-rai/where-to-stay", photo: "/photos/baan-dam.jpg" },
      { title: "Chiang Mai", href: "/chiang-mai", photo: "/photos/doi-suthep.jpg" },
    ],
    affiliates: [
    stay("Chiang Rai overnight", "Opening without a 05:00 lobby", "One night if you want 08:00 plaster without a Chiang Mai alarm.", stayLink('chiang-rai'), "/photos/baan-dam.jpg"),
    klook("White Temple vans", "Tours", "Useful from Chiang Mai only if you refuse to sleep here. Confirm White, Blue, and Baan Dam.", klookTours('Chiang Rai White Temple'), "/photos/chiang-rai.jpg"),
    ],
    faqs: [
      { q: "Is the White Temple still 100 THB?", a: "Not for most foreign visitors. Budget 200 THB since 1 January 2026. Ignore blogs that still say 100 or free." },
      { q: "Is the Blue Temple free?", a: "Yes. Dress as you would at any wat." },
    ],
  },
  {
    path: "/chiang-rai/best-time-to-visit",
    title: "Best time to visit Chiang Rai",
    description: "Chiang Rai is coolest from November to February. March can sit under smoke. The White Temple is 200 THB. CEI is 80 to 95 minutes from BKK.",
    lede: "Chiang Rai is known for cool, clear temple mornings from November to February, while haze in March suits a short town stay more than white plaster photos. Sleep in the city in any month.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Rai", href: "/chiang-rai" },
      { name: "Best time to visit", href: "/chiang-rai/best-time-to-visit" },
    ],
    facts: [
      { label: "Cool clear", value: "November to February" },
      { label: "Haze", value: "March and April smoke risk" },
      { label: "White Temple", value: "200 THB foreigners since 1 January 2026" },
      { label: "Flight", value: "CEI 80 to 95 minutes from BKK" },
    ],
    chips: [
      "Nov to Feb",
      "Haze Mar-Apr",
      "Year-round CEI",
    ],
    photo: "/photos/baan-dam.jpg",
    geo: { lat: 19.907, lon: 99.831, containedIn: "Northern Thailand" },
    paragraphs: [
      "[Chiang Rai](/chiang-rai) is a temple city, not a monsoon-coast call, and November to February is cool and clear. March and April can be smoke season; the white plaster photographs as grey, and rainy months still work for a [White Temple day](/chiang-rai/white-temple-day). Foreign tickets stay 200 THB since 1 January 2026.",
      "CEI is 80 to 95 minutes from [Bangkok](/bangkok) in any month, and green Bus from [Chiang Mai](/chiang-mai) takes about 3.5 hours. Do not combine a haze week with [Pai](/pai) ridge photos, and hours at Wat Rong Khun run about 08:00 to 17:30, last entry about 17:00.",
    ],
    sections: [
      {
        id: "months",
        title: "Month notes",
        bullets: [
          "**Nov to Feb:** Clear mornings. Book town rooms.",
          "**Mar to Apr:** Check air quality. Blue Temple still works; the White Temple looks dull.",
          "**Rain months:** A temple day still functions. This is not an Andaman cancel.",
        ],
      },
    ],
    portraits: [
      { title: "Chiang Rai hub", href: "/chiang-rai", photo: "/photos/chiang-rai.jpg" },
      { title: "White Temple day", href: "/chiang-rai/white-temple-day", photo: "/photos/blue-temple.jpg" },
      { title: "Pai season", href: "/pai/best-time-to-visit", photo: "/photos/pai.jpg" },
      { title: "Chiang Mai", href: "/chiang-mai", photo: "/photos/doi-suthep.jpg" },
    ],
    affiliates: [
    stay("Chiang Rai in the cool months", "Nov to Feb", "Lock a town night before a Saturday temple van.", stayLink('chiang-rai'), "/photos/chiang-rai.jpg"),
    klook("Temple vans in peak months", "Tours", "200 THB at the White Temple is often extra. Read the inclusions.", klookTours('Chiang Rai White Temple'), "/photos/blue-temple.jpg"),
    ],
    faqs: [
      { q: "Is April a bad Chiang Rai month?", a: "It can be smoky. Keep April if the town is the trip, not the white plaster photo." },
      { q: "Does rain close the White Temple?", a: "Rarely. Hours stay about 08:00 to 17:30. Bring a cover." },
    ],
  },
  {
    path: "/chiang-rai/getting-around",
    title: "Getting around Chiang Rai",
    description: "Fly CEI in 80 to 95 minutes from Bangkok, or Green Bus about 3.5 hours from Chiang Mai. In town use Grab. White Temple is 200 THB.",
    lede: "Chiang Rai is known for a small grid and a southbound temple hop, so stay in town. CEI is 80 to 95 minutes from Bangkok, and the Green Bus from Chiang Mai takes about 3.5 hours.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Rai", href: "/chiang-rai" },
      { name: "Getting around", href: "/chiang-rai/getting-around" },
    ],
    facts: [
      { label: "Airport", value: "CEI, 80 to 95 minutes from BKK" },
      { label: "Green Bus", value: "About 3.5 hours from Chiang Mai Arcade" },
      { label: "White Temple", value: "13 to 15 km south; 200 THB foreigners" },
      { label: "Town", value: "Grab or a short walk near the bazaar" },
    ],
    chips: [
      "CEI",
      "Green Bus",
      "Grab to temples",
    ],
    photo: "/photos/northern.jpg",
    geo: { lat: 19.907, lon: 99.831, containedIn: "Northern Thailand" },
    paragraphs: [
      "Fly into CEI (Mae Fah Luang) in 80 to 95 minutes from [Bangkok](/bangkok), or ride the Green Bus about 3.5 hours from [Chiang Mai](/chiang-mai) Arcade. Sleep in [Chiang Rai](/chiang-rai) town. A car from CEI to the White Temple is about 25 to 30 minutes. Local buses run from Bus Terminal 1 toward Highway 1; check the last useful bus if you are not using Grab back.",
      "Foreign tickets at Wat Rong Khun are 200 THB since 1 January 2026, hours about 08:00 to 17:30, last entry 17:00. Blue Temple is free in town, and Baan Dam is 80 THB north. See the [White Temple day](/chiang-rai/white-temple-day), and do not rent a scooter at 01:00 for the [Golden Triangle](/chiang-rai/golden-triangle).",
    ],
    sections: [
      {
        id: "modes",
        title: "Which mode for which hop",
        bullets: [
          "**CEI:** 80 to 95 minutes from BKK. Town Grab, not a temple hotel.",
          "**Green Bus:** About 3.5 hours from Chiang Mai Arcade Terminal.",
          "**Grab:** White Temple, Baan Dam, night bazaar with bags.",
          "**Walk:** Town grid only. The White Temple is not a stroll.",
        ],
      },
    ],
    portraits: [
      { title: "Where to stay", href: "/chiang-rai/where-to-stay", photo: "/photos/chiang-rai.jpg" },
      { title: "White Temple day", href: "/chiang-rai/white-temple-day", photo: "/photos/blue-temple.jpg" },
      { title: "Chiang Rai hub", href: "/chiang-rai", photo: "/photos/chiang-rai.jpg" },
      { title: "Chiang Mai", href: "/chiang-mai", photo: "/photos/doi-suthep.jpg" },
    ],
    affiliates: [
    stay("Town hotels after CEI", "Bazaar pin", "The temple is a south hop. Sleep where dinner still exists at 20:00.", stayLink('chiang-rai'), "/photos/chiang-rai.jpg"),
    {
      title: "CEI airport cars",
      kicker: "Transfers",
      body: "80 to 95 minutes in the air from BKK, then a named car to town.",
      href: transferLink('CEI'),
      cta: 'Book transfer',
      photo: "/photos/doi-suthep.jpg",
      partner: 'transfer',
    },
    ],
    faqs: [
      { q: "Green Bus or flight from Chiang Mai?", a: "Green Bus about 3.5 hours if you already sit at Arcade. Fly CEI from Bangkok, not as a CNX hop unless the fare is silly." },
      { q: "Bus to the White Temple?", a: "Yes from Bus Terminal 1 toward Highway 1. Grab if you want the 08:00 gate without a timetable argument." },
    ],
  },
  {
    path: "/chiang-rai/golden-triangle",
    title: "Golden Triangle",
    description: "The Golden Triangle is a Mekong day at Chiang Saen or Sop Ruak. Sleep in Chiang Rai town first. CEI is 80 to 95 minutes from Bangkok.",
    lede: "The Golden Triangle is known for a Mekong bend at Chiang Saen and Sop Ruak, and it fits a second Chiang Rai night. Stay in town unless the river is the whole trip.",
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: "Chiang Rai", href: "/chiang-rai" },
      { name: "Golden Triangle", href: "/chiang-rai/golden-triangle" },
    ],
    facts: [
      { label: "Where", value: "Chiang Saen and Sop Ruak on the Mekong" },
      { label: "Base", value: "Chiang Rai town; river inns only if the Mekong is the point" },
      { label: "Pair first", value: "White Temple 200 THB, Blue Temple free, Baan Dam 80 THB" },
      { label: "Get there", value: "CEI 80 to 95 minutes from BKK; Green Bus 3.5 hours from CM" },
    ],
    chips: [
      "Mekong day",
      "Second night",
      "Not the White Temple",
    ],
    photo: "/photos/baan-dam.jpg",
    geo: { lat: 19.907, lon: 99.831, containedIn: "Northern Thailand" },
    paragraphs: [
      "Add Chiang Saen or Sop Ruak only after you have slept in [Chiang Rai](/chiang-rai). The Mekong bend is a northbound hour, not a footnote on a [White Temple day](/chiang-rai/white-temple-day). Do not pay for a van that burns the afternoon on souvenir stops between the white plaster and the river.",
      "Fly CEI in 80 to 95 minutes from [Bangkok](/bangkok), or ride the Green Bus about 3.5 hours from [Chiang Mai](/chiang-mai), and Foreign tickets at Wat Rong Khun are 200 THB since 1 January 2026. Blue Temple is free, and Baan Dam is 80 THB and sits closer than the Mekong. If you would rather skip a long songthaew ride, a hired car for the triangle is the most reliable way to keep to your schedule.",
    ],
    sections: [
      {
        id: "order",
        title: "Keep the map simple",
        bullets: [
          "**Night one:** Town, Blue Temple, dinner.",
          "**Morning:** White Temple at 08:00, 200 THB, last entry 17:00.",
          "**Optional north:** Chiang Saen or Sop Ruak. Sleep town or stay on the river only if that is the trip.",
          "**Skip:** Pai on the same week. Different highway.",
        ],
      },
    ],
    portraits: [
      { title: "Chiang Rai hub", href: "/chiang-rai", photo: "/photos/chiang-rai.jpg" },
      { title: "White Temple day", href: "/chiang-rai/white-temple-day", photo: "/photos/blue-temple.jpg" },
      { title: "Where to stay", href: "/chiang-rai/where-to-stay", photo: "/photos/chiang-rai.jpg" },
      { title: "Chiang Mai", href: "/chiang-mai", photo: "/photos/doi-suthep.jpg" },
    ],
    affiliates: [
    stay("Town base for a Mekong day", "Two nights", "Sleep in Chiang Rai. River inns only if the bend is the stay.", stayLink('chiang-rai'), "/photos/blue-temple.jpg"),
    klook("Golden Triangle vans", "Tours", "Confirm whether White Temple is stuffed into the same clock. It should not be.", klookTours('Golden Triangle Chiang Rai'), "/photos/northern.jpg"),
    ],
    faqs: [
      { q: "Golden Triangle and White Temple the same day?", a: "A van can rush both. You will see parking lots. Split them." },
      { q: "Sleep in Chiang Saen?", a: "Only if the Mekong is the point. CEI and the White Temple sit closer to town." },
    ],
  },
];
