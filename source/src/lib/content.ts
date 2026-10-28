import {
  stayLink,
  stayAreaLink,
  hotelSearchLink,
  flightLink,
  trainLink,
  transferLink,
  klookTours,
  klookIslandHopping,
  klookTickets,
  klookRailFerry,
} from './partners';
import { wave2Pages } from './wave2-destinations';
import { wave3Pages } from './wave3-routes';
import { wave4Pages } from './wave4-food-resorts';

export type SchemaType = 'City' | 'TouristDestination' | 'Article';

export type Fact = { label: string; value: string };
export type Faq = { q: string; a: string };
export type Crumb = { name: string; href: string };
export type Portrait = { title: string; href: string; photo: string };
export type Affiliate = {
  title: string;
  kicker: string;
  body: string;
  href: string;
  cta: string;
  photo: string;
  partner?: string;
};
export type DayPlan = { n: number; title: string; body: string; photo: string };
export type Table = { headers: string[]; rows: string[][] };

export type Section = {
  id: string;
  title: string;
  paragraphs?: string[];
  table?: Table;
};

export type Page = {
  path: string;
  title: string;
  description: string;
  lede: string;
  schema: SchemaType;
  crumbs: Crumb[];
  facts: Fact[];
  chips?: string[];
  photo?: string;
  photoCredit?: string;
  paragraphs: string[];
  sections?: Section[];
  faqs: Faq[];
  portraits?: Portrait[];
  affiliates?: Affiliate[];
  days?: DayPlan[];
  tabs?: { href: string; label: string; current?: boolean }[];
  geo?: { lat: number; lon: number; containedIn?: string };
  alternateName?: string;
};

function stay(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search stays'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string, cta = 'See tickets'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'klook' };
}

export const pages: Page[] = [
  {
    path: "/",
    title: "Thailand Travel Guide: destinations, monsoon notes, and how to get there",
    description: "Plan a first trip to Thailand with destination pages, Andaman vs Gulf seasons, trains, ferries, and district nightlife. Facts first, not a pitch.",
    lede: "Start with Bangkok, then pick a north or south fork. The monsoon flips: Andaman is easier November to April, the Gulf is easier January to September.",
    schema: "Article",
    crumbs: [
      {
        "name": "Thailand Guide",
        "href": "/"
      }
    ],
    facts: [
      {
        "label": "First week",
        "value": "Bangkok plus Chiang Mai or one island group"
      },
      {
        "label": "Visa",
        "value": "60-day visa-free for US, UK, and most EU passports"
      },
      {
        "label": "Season split",
        "value": "Andaman Nov-Apr, Gulf Jan-Sep"
      }
    ],
    chips: [
      "Bangkok",
      "Chiang Mai",
      "Phuket",
      "Koh Samui",
      "When to go",
      "Islands"
    ],
    photo: "/photos/bangkok.jpg",
    paragraphs: [
      "This site is for Western first-time planners who still want hyper-local utility: which BTS gate, which pier, which soi after dark.",
      "Use the 7-day and 14-day itineraries as a spine. Swap the south coast when the monsoon says so. Book stays and airport cars on Trip.com. Book island boats and attraction tickets on Klook."
    ],
    portraits: [
      {
        "title": "Bangkok",
        "href": "/bangkok",
        "photo": "/photos/bangkok.jpg"
      },
      {
        "title": "Chiang Mai",
        "href": "/chiang-mai",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "title": "Phuket",
        "href": "/phuket",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Krabi",
        "href": "/krabi",
        "photo": "/photos/krabi.jpg"
      },
      {
        "title": "Koh Samui",
        "href": "/koh-samui",
        "photo": "/photos/koh-samui.jpg"
      },
      {
        "title": "Khao Sok",
        "href": "/khao-sok",
        "photo": "/photos/khao-sok.jpg"
      },
      {
        "title": "Khao Lak",
        "href": "/khao-lak",
        "photo": "/photos/khao-lak.jpg"
      },
      {
        "title": "Hua Hin",
        "href": "/hua-hin",
        "photo": "/photos/hua-hin.jpg"
      },
      {
        "title": "Thai food",
        "href": "/thai-food",
        "photo": "/photos/bangkok.jpg"
      }
    ],
    faqs: [
      {
        "q": "How many days do you need?",
        "a": "Seven days covers Bangkok plus one more city. Fourteen days covers Bangkok, the north, and one south coast. Do not stack Phuket and Samui on a first week."
      },
      {
        "q": "Which airport for Bangkok?",
        "a": "Suvarnabhumi (BKK) handles most long-haul flights. Don Mueang (DMK) is the low-cost hub. Both have Trip.com airport cars and a rail link into town."
      }
    ],
  },
  {
    path: "/destinations",
    title: "Destinations in Thailand",
    description: "Bangkok districts, Chiang Mai, the Andaman coast, the Gulf islands, Trat, and the Northern Thailand corridor.",
    lede: "Pick a city first. Bangkok is the usual landing. Chiang Mai is the north hub. Phuket, Krabi, Lanta, Lipe, and Khao Lak share the Andaman. Samui, Phangan, and Tao sit on the Lower Gulf.",
    schema: "Article",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      }
    ],
    facts: [
      {
        "label": "Cities",
        "value": "Bangkok and Chiang Mai first"
      },
      {
        "label": "Andaman",
        "value": "Phuket, Krabi, Lanta, Lipe, Khao Lak"
      },
      {
        "label": "Gulf",
        "value": "Samui, Phangan, Tao; Chang and Kood are east"
      }
    ],
    paragraphs: [
      "District pages sit under Bangkok and Chiang Mai so the city pages stay short."
    ],
    portraits: [
      {
        "title": "Bangkok",
        "href": "/bangkok",
        "photo": "/photos/bangkok.jpg"
      },
      {
        "title": "Chiang Mai",
        "href": "/chiang-mai",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "title": "Northern corridor",
        "href": "/destinations/northern-thailand",
        "photo": "/photos/northern.jpg"
      },
      {
        "title": "Phuket",
        "href": "/phuket",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Krabi",
        "href": "/krabi",
        "photo": "/photos/krabi.jpg"
      },
      {
        "title": "Koh Samui",
        "href": "/koh-samui",
        "photo": "/photos/koh-samui.jpg"
      },
      {
        "title": "Koh Phangan",
        "href": "/koh-phangan",
        "photo": "/photos/koh-phangan.jpg"
      },
      {
        "title": "Khao Sok",
        "href": "/khao-sok",
        "photo": "/photos/khao-sok.jpg"
      },
      {
        "title": "Koh Tao",
        "href": "/koh-tao",
        "photo": "/photos/koh-tao.jpg"
      },
      {
        "title": "Koh Lanta",
        "href": "/koh-lanta",
        "photo": "/photos/krabi.jpg"
      },
      {
        "title": "Khao Lak",
        "href": "/khao-lak",
        "photo": "/photos/khao-lak.jpg"
      },
      {
        "title": "Ayutthaya",
        "href": "/ayutthaya",
        "photo": "/photos/ayutthaya.jpg"
      },
      {
        "title": "Central and east",
        "href": "/destinations/central-and-east",
        "photo": "/photos/ayutthaya.jpg"
      }
    ],
    faqs: [
      {
        "q": "Where should a first trip start?",
        "a": "Land in Bangkok. Give it two or three nights. Then fly or take the train north, or fly south once you know which monsoon window you are in."
      }
    ],
  },
  {
    path: "/destinations/northern-thailand",
    title: "Northern Thailand corridor",
    description: "Northern Thailand: Chiang Mai as the temple-and-food hub, then Chiang Rai for the White Temple or Pai for the mountain road.",
    lede: "The north is Chiang Mai first. Add Chiang Rai for the White Temple and the Mekong. Add Pai only if you want a winding mountain night.",
    schema: "TouristDestination",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Northern Thailand",
        "href": "/destinations/northern-thailand"
      }
    ],
    facts: [
      {
        "label": "Hub",
        "value": "Chiang Mai Old City and Nimman"
      },
      {
        "label": "Side trip",
        "value": "Chiang Rai in one long day or one night"
      },
      {
        "label": "Loop",
        "value": "Mae Hong Son is a 3-4 day motorbike or van circuit"
      }
    ],
    photo: "/photos/northern.jpg",
    geo: { lat: 18.788, lon: 98.985, containedIn: "Thailand" },
    paragraphs: [
      "This corridor is Lanna temples, cooler air, and one side trip from Chiang Mai. Fly into CNX or take SRT trains 9 and 10 from Krung Thep Aphiwat. The sleeper is the useful one.",
      "Do not add Pai and Chiang Rai and the full loop on a first week. Pick one fork from Chiang Mai."
    ],
    portraits: [
      {
        "title": "Chiang Mai",
        "href": "/chiang-mai",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "title": "Old City",
        "href": "/chiang-mai/old-city",
        "photo": "/photos/chiang-mai-old-city.jpg"
      },
      {
        "title": "Nimmanhaemin",
        "href": "/chiang-mai/nimmanhaemin",
        "photo": "/photos/nimman.jpg"
      },
      {
        "title": "Chiang Rai",
        "href": "/chiang-rai",
        "photo": "/photos/northern.jpg"
      },
      {
        "title": "Pai and the loop",
        "href": "/pai",
        "photo": "/photos/northern.jpg"
      }
    ],
    affiliates: [
      stay("Chiang Mai stays", "Old City and Nimman", "Sleep inside the moat for temples, or west of it for cafes.", stayLink('chiang-mai'), "/photos/chiang-mai.jpg"),
      klook("North day trips", "Klook", "White Temple, Doi Inthanon, or a cooking class from Chiang Mai.", klookTours('Chiang Mai day trip'), "/photos/northern.jpg"),
    ],
    faqs: [
      {
        "q": "Is Pai worth the drive?",
        "a": "Only if you want a mountain night and accept 3 to 4 hours of switchbacks. It is not a first-week must. Read the Pai and Mae Hong Son Loop page before you rent a scooter."
      }
    ],
  },
  {
    path: "/itineraries",
    title: "Thailand itineraries",
    description: "A first week, a 14-day spine, and a 10-day south-islands plan that flips with the monsoon.",
    lede: "Three ready routes. Use 7 days for Bangkok plus one more place. Use 14 days for north and south. Use 10 days if the islands are the point.",
    schema: "Article",
    crumbs: [
      {
        "name": "Itineraries",
        "href": "/itineraries"
      }
    ],
    facts: [
      {
        "label": "7 days",
        "value": "Bangkok plus Chiang Mai or one coast"
      },
      {
        "label": "14 days",
        "value": "Bangkok, north, and one south coast"
      },
      {
        "label": "10 days south",
        "value": "Andaman in winter, Gulf in summer"
      }
    ],
    paragraphs: [
      "Each itinerary names the transport and the booking links. Drop a night before you add a second island group."
    ],
    portraits: [
      {
        "title": "First week",
        "href": "/itineraries/first-week-7-days",
        "photo": "/photos/bangkok.jpg"
      },
      {
        "title": "Best 14 days",
        "href": "/itineraries/best-14-days",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "title": "South islands 10 days",
        "href": "/itineraries/south-islands-10-days",
        "photo": "/photos/phuket.jpg"
      }
    ],
    faqs: [
      {
        "q": "Can you see Phuket and Samui in one trip?",
        "a": "Not in a first week. In 14 days you still pick one coast unless you enjoy airport days. The 10-day south plan stays on one sea."
      }
    ],
  },
  {
    path: "/plan",
    title: "Plan a trip to Thailand",
    description: "When to go, visas and TDAC, trains, ferries, eSIM, money, monsoon, and how you move in Bangkok.",
    lede: "Start with season and visas. Then lock transport, a SIM, and cash. The pages below are the decisions that lock a first trip.",
    schema: "Article",
    crumbs: [
      {
        "name": "Plan",
        "href": "/plan"
      }
    ],
    facts: [
      {
        "label": "Entry",
        "value": "60-day visa-free plus TDAC"
      },
      {
        "label": "Season",
        "value": "Two coasts, two calendars"
      },
      {
        "label": "City move",
        "value": "BTS, MRT, ARL, Grab, Bolt"
      }
    ],
    paragraphs: [
      "Read when-to-go before you book the south. Read visas-and-tdac before you fly. Use the money, SIM, and monsoon pages before you pack."
    ],
    portraits: [
      {
        "title": "When to go",
        "href": "/plan/when-to-go",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Visas and TDAC",
        "href": "/plan/visas-and-tdac",
        "photo": "/photos/bangkok.jpg"
      },
      {
        "title": "Monsoon and burn season",
        "href": "/plan/monsoon-and-burn-season",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "eSIM and SIM cards",
        "href": "/plan/esim-and-sim-cards",
        "photo": "/photos/bts.jpg"
      },
      {
        "title": "Money and PromptPay",
        "href": "/plan/money-atms-and-promptpay",
        "photo": "/photos/bangkok.jpg"
      },
      {
        "title": "Domestic flights",
        "href": "/plan/domestic-flights-and-baggage",
        "photo": "/photos/bts.jpg"
      },
      {
        "title": "Trains and ferries",
        "href": "/plan/trains-and-ferries",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "title": "Grab and BTS",
        "href": "/plan/grab-and-bts",
        "photo": "/photos/bts.jpg"
      }
    ],
    faqs: [
      {
        "q": "What do you book before you fly?",
        "a": "A stay for the first two nights, an airport car or ARL plan, and TDAC. Island boats can wait until you see the weather the day before."
      }
    ],
  },
  {
    path: "/get-there",
    title: "Get there: Thailand routes",
    description: "How to move between Bangkok, the islands, Khao Sok, the north, Ayutthaya, and Kanchanaburi.",
    lede: "These pages are the useful hops. Fly when the day matters. Take a sleeper when you want the ride. Use a ferry only on a morning sea.",
    schema: "Article",
    crumbs: [
      {
        "name": "Get there",
        "href": "/get-there"
      }
    ],
    facts: [
      {
        "label": "North",
        "value": "Flight about 70 minutes, sleeper about 12 hours"
      },
      {
        "label": "Andaman",
        "value": "BKK or DMK to HKT or KBV"
      },
      {
        "label": "Gulf",
        "value": "BKK to USM, or ferry from Donsak"
      }
    ],
    paragraphs: [
      "Each route page lists time, mode, and the booking link. Return trips use the same page."
    ],
    portraits: [
      {
        "title": "Bangkok to Chiang Mai",
        "href": "/get-there/bangkok-to-chiang-mai",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "title": "Bangkok to Phuket",
        "href": "/get-there/bangkok-to-phuket",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Bangkok to Koh Phangan",
        "href": "/get-there/bangkok-to-koh-phangan",
        "photo": "/photos/koh-phangan.jpg"
      },
      {
        "title": "Bangkok to Koh Tao",
        "href": "/get-there/bangkok-to-koh-tao",
        "photo": "/photos/koh-tao.jpg"
      },
      {
        "title": "Bangkok to Krabi",
        "href": "/get-there/bangkok-to-krabi",
        "photo": "/photos/krabi.jpg"
      },
      {
        "title": "Phuket to Koh Samui",
        "href": "/get-there/phuket-to-koh-samui",
        "photo": "/photos/koh-samui.jpg"
      },
      {
        "title": "Phuket to Khao Sok",
        "href": "/get-there/phuket-to-khao-sok",
        "photo": "/photos/khao-sok.jpg"
      },
      {
        "title": "Bangkok to Ayutthaya",
        "href": "/get-there/bangkok-to-ayutthaya",
        "photo": "/photos/ayutthaya.jpg"
      }
    ],
    faqs: [
      {
        "q": "Should you bus the south?",
        "a": "Overnight buses exist. For a first trip, fly. Save the long road for people who already know the piers."
      }
    ],
  },
  {
    path: "/interests",
    title: "Travel interests in Thailand",
    description: "Thai food, resort living, and nightlife, kept off the main city pages so those stay scannable.",
    lede: "Thai food, nightlife, and resort living have their own trees. The main Bangkok page does not list bar crawls or stall queues.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      }
    ],
    facts: [
      {
        "label": "Nightlife",
        "value": "District pages, not a dump on Bangkok"
      },
      {
        "label": "Resorts",
        "value": "Named properties with Trip.com rate links"
      },
      {
        "label": "Food",
        "value": "Thai food cluster, not a dump on city pages"
      }
    ],
    paragraphs: [
      "Use Thai food for stalls, markets, and regional dishes. Use nightlife for sois and beach clubs. Use resort living when the hotel is the reason to go."
    ],
    portraits: [
      {
        "title": "Thai food",
        "href": "/thai-food",
        "photo": "/photos/bangkok.jpg"
      },
      {
        "title": "Nightlife",
        "href": "/interests/nightlife",
        "photo": "/photos/nightlife.jpg"
      },
      {
        "title": "Resort living",
        "href": "/interests/resort-living",
        "photo": "/photos/resort.jpg"
      }
    ],
    faqs: [
      {
        "q": "Where is Bangkok nightlife documented?",
        "a": "Under /interests/nightlife, split by district. Thai food is under /thai-food. The main Bangkok page stays districts and transport."
      }
    ],
  },
  {
    path: "/about",
    title: "About Thailand Travel Guide",
    description: "A facts-first planning site for first-time trips to Thailand.",
    lede: "We publish destination pages, routes, and season notes. Affiliate links to Trip.com and Klook help pay for the work. They do not change the facts.",
    schema: "Article",
    crumbs: [
      {
        "name": "About",
        "href": "/about"
      }
    ],
    facts: [
      {
        "label": "Audience",
        "value": "Western first-time planners"
      },
      {
        "label": "Bias",
        "value": "Utility over pitch"
      }
    ],
    paragraphs: [
      "Ratings and hotel names come from public pages and on-the-ground notes. Always recheck opening hours and ferry desks the day you travel."
    ],
    faqs: [
      {
        "q": "Do you take press trips?",
        "a": "Disclosed if they happen. This first release is a planner spine, not a hotel review magazine."
      }
    ],
  },
  {
    path: "/privacy",
    title: "Privacy",
    description: "How Thailand Travel Guide handles analytics and affiliate clicks.",
    lede: "The site is static. Affiliate clicks go to Trip.com and Travelpayouts or Klook. We do not sell email lists.",
    schema: "Article",
    crumbs: [
      {
        "name": "Privacy",
        "href": "/privacy"
      }
    ],
    facts: [
      {
        "label": "Hosting",
        "value": "Static files"
      },
      {
        "label": "Partners",
        "value": "Trip.com and Klook via Travelpayouts"
      }
    ],
    paragraphs: [
      "Browser requests log at the host. If analytics is added later, this page will say so."
    ],
    faqs: [
      {
        "q": "Do you set marketing cookies?",
        "a": "Partner sites may set their own cookies after you click out. This site does not run a cookie banner for first-party ads."
      }
    ],
  },
  {
    path: "/bangkok",
    title: "Bangkok",
    description: "Thailand's landing city: river temples, BTS hotel strips, street food, and two airports. Nightlife lives on its own pages.",
    lede: "Bangkok is the usual first stop. Sleep on Sukhumvit or in Siam for the BTS. Sleep riverside for the Chao Phraya. The Old City is for temples, not late nights.",
    schema: "City",
    alternateName: "Krung Thep Maha Nakhon",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Bangkok",
        "href": "/bangkok"
      }
    ],
    facts: [
      {
        "label": "Airports",
        "value": "BKK for long-haul, DMK for low-cost"
      },
      {
        "label": "Rail",
        "value": "BTS and MRT tap; ARL from Suvarnabhumi"
      },
      {
        "label": "Stay split",
        "value": "Sukhumvit for nights out, riverside for slower evenings"
      }
    ],
    chips: [
      "Sukhumvit and Thonglor",
      "Riverside",
      "Old City",
      "Siam and Silom"
    ],
    photo: "/photos/bangkok.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Central Thailand" },
    paragraphs: [
      "Bangkok is the capital you land in: Grand Palace and river wats by day, BTS hotel strips at night. Give it two or three nights. Eat in Thonglor or Chinatown. Nightlife lives on its own pages.",
      "From BKK, the Airport Rail Link to Phaya Thai is the cheap, predictable move. Grab and Bolt cover the last kilometer. Book a Trip.com airport car if you land late with luggage."
    ],
    sections: [
      {
        "id": "districts",
        "title": "Districts",
        "paragraphs": [
          "Sukhumvit and Thonglor: hotels, BTS Nana to Ekkamai, and most first-timer stays.",
          "Riverside and Charoenkrung: the river, warehouse bars, and the Chinatown edge.",
          "Old City and Rattanakosin: palace, wat circuit, and heat. Go early.",
          "Siam and Silom: malls, BTS interchanges, and the Sala Daeng MRT link."
        ]
      }
    ],
    portraits: [
      {
        "title": "Sukhumvit and Thonglor",
        "href": "/bangkok/sukhumvit-thonglor",
        "photo": "/photos/sukhumvit.jpg"
      },
      {
        "title": "Riverside and Charoenkrung",
        "href": "/bangkok/riverside-charoenkrung",
        "photo": "/photos/riverside.jpg"
      },
      {
        "title": "Old City",
        "href": "/bangkok/old-city-rattanakosin",
        "photo": "/photos/old-city.jpg"
      },
      {
        "title": "Siam and Silom",
        "href": "/bangkok/siam-silom",
        "photo": "/photos/siam.jpg"
      },
      {
        "title": "Nightlife",
        "href": "/interests/nightlife",
        "photo": "/photos/nightlife.jpg"
      }
    ],
    affiliates: [
      stay("Sukhumvit stays", "BTS Nana to Thong Lo", "First-timer default. Walk to food and the skytrain.", stayAreaLink('sukhumvit'), "/photos/sukhumvit.jpg"),
      stay("Riverside stays", "River boats and Charoenkrung", "Quieter evenings, longer BTS walks.", stayAreaLink('riverside'), "/photos/riverside.jpg"),
      stay("Siam stays", "Interchange malls", "Central for day trips and the ARL connection at Phaya Thai.", stayAreaLink('siam'), "/photos/siam.jpg"),
      klook("Grand Palace and temples", "Attraction tickets", "Skip the guesswork on combo tickets and licensed guides.", klookTickets('Bangkok Grand Palace tickets'), "/photos/old-city.jpg"),
    ],
    faqs: [
      {
        "q": "BKK or DMK?",
        "a": "Fly into the airport your long-haul uses. Transfers between them take 45 to 90 minutes. Do not schedule a tight same-day connection."
      },
      {
        "q": "Where should you stay on a first trip?",
        "a": "Sukhumvit if you want BTS and dinner options. Riverside if you want the river. Old City only if the palace is the whole point and you accept thin evening food."
      },
      {
        "q": "Where is nightlife?",
        "a": "District nightlife pages under Interests. The main Bangkok page stays districts, transport, and hotels."
      }
    ],
  },
  {
    path: "/bangkok/sukhumvit-thonglor",
    title: "Sukhumvit and Thonglor",
    description: "Bangkok's first-timer hotel strip: BTS Nana to Ekkamai, with Thonglor for dinner and bars.",
    lede: "Sukhumvit is the BTS hotel strip most first stays use. Nana is louder and cheaper. Asok and Phrom Phong are the easy pairing. Thonglor is one stop on for dinner.",
    schema: "TouristDestination",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Bangkok",
        "href": "/bangkok"
      },
      {
        "name": "Sukhumvit and Thonglor",
        "href": "/bangkok/sukhumvit-thonglor"
      }
    ],
    facts: [
      {
        "label": "Rail",
        "value": "BTS Sukhumvit line, Asok links to MRT"
      },
      {
        "label": "Eat",
        "value": "Thonglor for dinner, Soi 38 for late grub"
      },
      {
        "label": "Nights",
        "value": "Soi 11 and Thonglor sit on nightlife pages"
      }
    ],
    photo: "/photos/sukhumvit.jpg",
    geo: { lat: 13.736, lon: 100.56, containedIn: "Bangkok" },
    paragraphs: [
      "This is hotels, skytrain, and dinner on one line. Asok and Phrom Phong are the easiest pairing. Thonglor is one stop further. Nana is louder and cheaper.",
      "Bar Us, Rabbit Hole, and Find The Locker Room are on the Thonglor nightlife page. Havana Social is on Sukhumvit Soi 11. They are not listed here as a crawl."
    ],
    affiliates: [
      stay("Thonglor hotels", "BTS Thong Lo", "Dinner density, slightly higher rates than Nana.", stayAreaLink('thonglor'), "/photos/sukhumvit.jpg"),
      stay("Sukhumvit hotels", "Nana to Phrom Phong", "The default search if you do not yet have a soi preference.", stayAreaLink('sukhumvit'), "/photos/bangkok.jpg"),
    ],
    faqs: [
      {
        "q": "Is Nana too noisy?",
        "a": "The soi itself is. Hotels a block off Sukhumvit Road are fine if you want the price and the BTS."
      }
    ],
  },
  {
    path: "/bangkok/riverside-charoenkrung",
    title: "Riverside and Charoenkrung",
    description: "River hotels, warehouse bars, and the Chinatown edge along Charoenkrung.",
    lede: "Stay here for the Chao Phraya and a night walk on Charoenkrung. The BTS is a short Grab, not at the door.",
    schema: "TouristDestination",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Bangkok",
        "href": "/bangkok"
      },
      {
        "name": "Riverside and Charoenkrung",
        "href": "/bangkok/riverside-charoenkrung"
      }
    ],
    facts: [
      {
        "label": "Move",
        "value": "River boats, Grab, and the Saphan Taksin BTS"
      },
      {
        "label": "Eat",
        "value": "Chinatown sois and hotel restaurants"
      },
      {
        "label": "Nights",
        "value": "Soi Nana cocktail strip is a short hop"
      }
    ],
    photo: "/photos/riverside.jpg",
    geo: { lat: 13.73, lon: 100.513, containedIn: "Bangkok" },
    paragraphs: [
      "This is the river side of Bangkok: hotel docks, warehouse bars, and Chinatown sois. Charoenkrung is the old international road. Capella Bangkok and The Siam are on the resort-living pages.",
      "BKK Social Club, Bamboo Bar, Teens of Thailand, Asia Today, and Tropic City sit on the Charoenkrung nightlife page."
    ],
    affiliates: [
      stay("Riverside hotels", "River and Charoenkrung", "Book a room with a boat dock or a short walk to Saphan Taksin.", stayAreaLink('riverside'), "/photos/riverside.jpg"),
      stay("Charoenkrung hotels", "Warehouse strip", "Closer to the bars, farther from the BTS.", stayAreaLink('charoenkrung'), "/photos/nightlife.jpg"),
    ],
    faqs: [
      {
        "q": "Can you do the palace from here?",
        "a": "Yes, by river boat in the morning. Do not drive it at 10:00."
      }
    ],
  },
  {
    path: "/bangkok/old-city-rattanakosin",
    title: "Old City and Rattanakosin",
    description: "Grand Palace, Wat Pho, and Wat Arun on Rattanakosin Island. A temple morning, not a hotel base.",
    lede: "This is the temple morning. Go at opening. The Grand Palace dress code is real. Wat Arun is a ferry, not a taxi loop.",
    schema: "TouristDestination",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Bangkok",
        "href": "/bangkok"
      },
      {
        "name": "Old City and Rattanakosin",
        "href": "/bangkok/old-city-rattanakosin"
      }
    ],
    facts: [
      {
        "label": "Start",
        "value": "Grand Palace at opening, 500 THB"
      },
      {
        "label": "Pair",
        "value": "Wat Pho next at 300 THB, Wat Arun by ferry"
      },
      {
        "label": "Stay",
        "value": "Only if temples are the whole stay"
      }
    ],
    photo: "/photos/old-city.jpg",
    geo: { lat: 13.75, lon: 100.492, containedIn: "Bangkok" },
    paragraphs: [
      "Grand Palace is 500 THB for foreign visitors. Wat Pho is 300 THB. Come for the palace and the river wats, then leave. Afternoon heat empties the lanes and fills the taxis. Eat on Tha Tien or go back to Sukhumvit for dinner.",
      "Combo tickets and licensed guides are easier on Klook than at the gate when queues spike."
    ],
    affiliates: [
      stay("Old City hotels", "Rattanakosin", "Short walks to the palace, thin late-night food.", stayAreaLink('rattanakosin'), "/photos/old-city.jpg"),
      klook("Palace tickets", "Attraction tickets", "Grand Palace and temple combos with a timed start.", klookTickets('Bangkok Grand Palace tickets'), "/photos/old-city.jpg"),
    ],
    faqs: [
      {
        "q": "How long is the palace circuit?",
        "a": "Three to four hours if you include Wat Pho and the Wat Arun ferry. Do not add Chatuchak the same morning."
      }
    ],
  },
  {
    path: "/bangkok/siam-silom",
    title: "Siam and Silom",
    description: "Siam is the mall and BTS interchange. Silom is offices, Lumphini Park, and the MRT.",
    lede: "Stay here for malls and connections, not sois. Siam is the BTS knot. Silom walks to Lumphini and Sala Daeng.",
    schema: "TouristDestination",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Bangkok",
        "href": "/bangkok"
      },
      {
        "name": "Siam and Silom",
        "href": "/bangkok/siam-silom"
      }
    ],
    facts: [
      {
        "label": "Rail",
        "value": "Siam BTS interchange; ARL ends at Phaya Thai"
      },
      {
        "label": "Use",
        "value": "Malls, two BTS stops from Phaya Thai, park walks"
      },
      {
        "label": "Stay",
        "value": "Central, less character than Thonglor"
      }
    ],
    photo: "/photos/siam.jpg",
    geo: { lat: 13.746, lon: 100.534, containedIn: "Bangkok" },
    paragraphs: [
      "The Airport Rail Link ends at Phaya Thai. Change to the BTS and ride two stops to Siam (Phaya Thai, Ratchathewi, Siam). Siam is the BTS Sukhumvit and Silom interchange: air-con malls, not a soi neighbourhood. Stay one night if you land late and have not picked a neighbourhood yet. Stay at Silom if you have meetings or want Lumphini at dawn."
    ],
    affiliates: [
      stay("Siam hotels", "Interchange", "Walk to BTS and the malls. Rooms run larger in the chain towers.", stayAreaLink('siam'), "/photos/siam.jpg"),
      stay("Silom hotels", "Sala Daeng", "MRT and BTS on the same block.", stayAreaLink('silom'), "/photos/bangkok.jpg"),
    ],
    faqs: [
      {
        "q": "Is Siam a good four-night base?",
        "a": "It works. You will spend more time in malls than in sois. Move to Thonglor or the river if you want evenings."
      }
    ],
  },
  {
    path: "/chiang-mai",
    title: "Chiang Mai",
    description: "Northern Thailand's hub: Lanna temples inside the moat, Nimman cafes, and the sleeper train from Bangkok.",
    lede: "Chiang Mai is the north base. Give it three nights. Sleep inside the moat for temples on foot. Sleep in Nimman for coffee and a later evening.",
    schema: "City",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Chiang Mai",
        "href": "/chiang-mai"
      }
    ],
    facts: [
      {
        "label": "Get there",
        "value": "CNX flight about 70 minutes, SRT 9/10 sleeper about 12 hours"
      },
      {
        "label": "Split",
        "value": "Old City vs Nimmanhaemin"
      },
      {
        "label": "Day trips",
        "value": "Doi Inthanon, Chiang Rai, or a cooking class"
      }
    ],
    chips: [
      "Old City",
      "Nimmanhaemin",
      "Northern corridor"
    ],
    photo: "/photos/chiang-mai.jpg",
    geo: { lat: 18.788, lon: 98.985, containedIn: "Northern Thailand" },
    paragraphs: [
      "Chiang Mai is known for wats inside a square moat and a cafe strip west of it. The Old City still closes temple doors for lunch. Nimmanhaemin, past Suan Dok, is where you eat late.",
      "Sunday Walking Street fills Ratchadamnoen. Saturday is Wua Lai, south of the moat. Both are easier if you already have a room inside or just south."
    ],
    portraits: [
      {
        "title": "Old City",
        "href": "/chiang-mai/old-city",
        "photo": "/photos/chiang-mai-old-city.jpg"
      },
      {
        "title": "Nimmanhaemin",
        "href": "/chiang-mai/nimmanhaemin",
        "photo": "/photos/nimman.jpg"
      },
      {
        "title": "Northern corridor",
        "href": "/destinations/northern-thailand",
        "photo": "/photos/northern.jpg"
      },
      {
        "title": "Four Seasons Chiang Mai",
        "href": "/resort-living/four-seasons-chiang-mai",
        "photo": "/photos/resort.jpg"
      }
    ],
    affiliates: [
      stay("Chiang Mai stays", "Citywide", "Start with Old City if you walk temples. Shift to Nimman for cafes.", stayLink('chiang-mai'), "/photos/chiang-mai.jpg"),
      stay("Old City hotels", "Inside the moat", "Temple mornings, tuk-tuk nights.", stayAreaLink('chiang-mai-old-city'), "/photos/chiang-mai-old-city.jpg"),
      klook("Cooking and day trips", "Tours", "Doi Inthanon, elephant ethics vary; read the operator page.", klookTours('Chiang Mai tours'), "/photos/northern.jpg"),
    ],
    faqs: [
      {
        "q": "Fly or train from Bangkok?",
        "a": "Fly if you land at noon and want dinner in the Old City. Take train 9 or 10 if you want a sleeper and a morning arrival at Chiang Mai station."
      },
      {
        "q": "How many nights?",
        "a": "Three is the floor. Two only if you already know you will come back."
      }
    ],
  },
  {
    path: "/chiang-mai/old-city",
    title: "Chiang Mai Old City",
    description: "Lanna temples inside the square moat, plus Sunday Walking Street on Ratchadamnoen.",
    lede: "This is the temple square. Walk at dawn: Wat Phra Singh, Chedi Luang, and the gates. Midday is a cafe or a nap.",
    schema: "TouristDestination",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Chiang Mai",
        "href": "/chiang-mai"
      },
      {
        "name": "Old City",
        "href": "/chiang-mai/old-city"
      }
    ],
    facts: [
      {
        "label": "Shape",
        "value": "About 6.5 km; 75 to 90 minutes on foot"
      },
      {
        "label": "Market",
        "value": "Sunday Walking Street on Ratchadamnoen"
      },
      {
        "label": "Temple booths",
        "value": "20 to 50 THB cash"
      }
    ],
    photo: "/photos/chiang-mai-old-city.jpg",
    geo: { lat: 18.788, lon: 98.993, containedIn: "Chiang Mai" },
    paragraphs: [
      "The Old City is a moated square of Lanna wats, not a nightlife grid. The moat loop is about 6.5 km and takes 75 to 90 minutes on foot. Temple booths take 20 to 50 THB cash. Scooters cut the corners. Sidewalks vanish. The moat road is the easy loop if you are tired of sois."
    ],
    affiliates: [
      stay("Old City stays", "Inside the moat", "Book early for Sunday-market weekends.", stayAreaLink('chiang-mai-old-city'), "/photos/chiang-mai-old-city.jpg"),
    ],
    faqs: [
      {
        "q": "Is the Old City quiet at night?",
        "a": "The inner lanes are. The east gates pick up bars. Nimman is louder and later."
      }
    ],
  },
  {
    path: "/chiang-mai/nimmanhaemin",
    title: "Nimmanhaemin",
    description: "Chiang Mai's cafe and dinner district west of the moat, for later evenings than the Old City.",
    lede: "Nimman is the later, cafe side of Chiang Mai. Stay here if the Old City feels too early. Soi 9 and the lanes west of Nimmanhaemin are the evening grid.",
    schema: "TouristDestination",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Chiang Mai",
        "href": "/chiang-mai"
      },
      {
        "name": "Nimmanhaemin",
        "href": "/chiang-mai/nimmanhaemin"
      }
    ],
    facts: [
      {
        "label": "Who",
        "value": "Students, remote workers, dinner people"
      },
      {
        "label": "Move",
        "value": "Grab or a 15-minute songthaew from the moat"
      },
      {
        "label": "Stay",
        "value": "Small hotels and apartment-style rooms"
      }
    ],
    photo: "/photos/nimman.jpg",
    geo: { lat: 18.8, lon: 98.968, containedIn: "Chiang Mai" },
    paragraphs: [
      "Come for dinner, coffee, and a younger night, not temple mornings. Maya and One Nimman are the mall anchors. The better bowls are in the sois, not on the main road."
    ],
    affiliates: [
      stay("Nimman hotels", "West of the moat", "Walk to dinner, Grab to the temples at 7:00.", stayAreaLink('nimmanhaemin'), "/photos/nimman.jpg"),
    ],
    faqs: [
      {
        "q": "Can you walk to the Old City?",
        "a": "You can. It is hot and dull. Grab is four to seven minutes."
      }
    ],
  },
  {
    path: "/phuket",
    title: "Phuket",
    description: "Andaman island with an international airport, Patong nightlife, quieter west beaches, and boats to Phi Phi.",
    lede: "Phuket is the easy Andaman airport with beaches attached. Stay on the west coast. Use Patong for a night if you want it, not as a four-night base.",
    schema: "TouristDestination",
    alternateName: "Phuket Island",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Phuket",
        "href": "/phuket"
      }
    ],
    facts: [
      {
        "label": "Season",
        "value": "Best November to April"
      },
      {
        "label": "Airport",
        "value": "HKT, then 45-90 minutes by car"
      },
      {
        "label": "Boats",
        "value": "Phi Phi and Krabi in the morning"
      }
    ],
    chips: [
      "Andaman",
      "HKT",
      "Phi Phi boats"
    ],
    photo: "/photos/phuket.jpg",
    geo: { lat: 7.88, lon: 98.392, containedIn: "Andaman Coast" },
    paragraphs: [
      "Phuket is known for west-coast beaches and a huge airport, not for one pretty town. Kamala, Surin, and Bang Tao are calmer than Patong. Kata and Karon sit in the middle. Old Phuket Town is a morning of sino-portuguese streets if you need a non-beach day.",
      "Beach clubs (Catch, Cafe del Mar) live on the Phuket nightlife page. Amanpuri and Avista Hideaway sit under resort living."
    ],
    portraits: [
      {
        "title": "Krabi",
        "href": "/krabi",
        "photo": "/photos/krabi.jpg"
      },
      {
        "title": "Khao Sok",
        "href": "/khao-sok",
        "photo": "/photos/khao-sok.jpg"
      },
      {
        "title": "Phuket nightlife",
        "href": "/interests/nightlife/phuket-beach-clubs",
        "photo": "/photos/nightlife.jpg"
      }
    ],
    affiliates: [
      stay("Phuket stays", "West coast first", "Filter by beach name, not by \"Phuket\" as if it were one town.", stayLink('phuket'), "/photos/phuket.jpg"),
      stay("Patong hotels", "Night strip", "Only if you want that strip.", stayAreaLink('patong'), "/photos/nightlife.jpg"),
      klook("Island hopping", "Phi Phi and James Bond", "Morning boats only in the wet months.", klookIslandHopping('Phuket'), "/photos/krabi.jpg"),
    ],
    faqs: [
      {
        "q": "Is Phuket a first-trip must?",
        "a": "It is the easy Andaman airport. Krabi is prettier on the water. Samui is the Gulf alternative when the Andaman is in monsoon."
      },
      {
        "q": "How many nights?",
        "a": "Three on one beach. Add a fourth only if you want a boat day and a recovery day."
      }
    ],
  },
  {
    path: "/krabi",
    title: "Krabi",
    description: "Limestone cliffs, Railay's boat-only beach, Ao Nang logistics, and boats to Phi Phi. Fly into KBV.",
    lede: "Krabi is known for cliffs and Railay, not a long resort strip. Stay in Ao Nang if you want cars and dinner. Stay on Railay if you accept a longtail.",
    schema: "TouristDestination",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Krabi",
        "href": "/krabi"
      }
    ],
    facts: [
      {
        "label": "Season",
        "value": "Best November to April"
      },
      {
        "label": "Airport",
        "value": "KBV, or transfer from HKT"
      },
      {
        "label": "Boats",
        "value": "Railay longtail; Phi Phi ferry"
      }
    ],
    chips: [
      "Ao Nang",
      "Railay",
      "KBV"
    ],
    photo: "/photos/krabi.jpg",
    geo: { lat: 8.086, lon: 98.906, containedIn: "Andaman Coast" },
    paragraphs: [
      "The cliffs and the Railay pocket are why people come. Ao Nang is the logistics town. Railay has no road. Phi Phi is a day trip, or a night if you want the village after the boats leave.",
      "Rayavadee sits in the Railay-Phra Nang pocket and is filed under resort living."
    ],
    portraits: [
      {
        "title": "Phuket to Krabi",
        "href": "/get-there/phuket-to-krabi-phi-phi",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Koh Lanta",
        "href": "/koh-lanta",
        "photo": "/photos/krabi.jpg"
      }
    ],
    affiliates: [
      stay("Krabi stays", "Ao Nang default", "Book Ao Nang if you want cars and dinner. Book Railay if you want the cliff.", stayLink('krabi'), "/photos/krabi.jpg"),
      stay("Ao Nang hotels", "Mainland beach", "Longtails to Railay from the south end.", stayAreaLink('ao-nang'), "/photos/krabi.jpg"),
      klook("Phi Phi and four islands", "Island hopping", "Cancel if the Andaman is up. The Gulf is the flip.", klookIslandHopping('Krabi'), "/photos/phuket.jpg"),
    ],
    faqs: [
      {
        "q": "Phuket or Krabi?",
        "a": "Krabi if the cliffs matter. Phuket if the flight times and resort row matter. You can boat between them in a morning in season."
      }
    ],
  },
  {
    path: "/koh-samui",
    title: "Koh Samui",
    description: "Gulf island with its own airport, Chaweng nightlife, quieter north and south coasts, and boats to Phangan and Tao.",
    lede: "Samui is the Gulf hub with an airport on the island. January to September is the easier sea. Chaweng is loud. The north and south coasts are quieter.",
    schema: "TouristDestination",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Koh Samui",
        "href": "/koh-samui"
      }
    ],
    facts: [
      {
        "label": "Season",
        "value": "Easier January to September"
      },
      {
        "label": "Airport",
        "value": "USM, short drives to most beaches"
      },
      {
        "label": "Boats",
        "value": "Lomprayah to Phangan and Tao"
      }
    ],
    chips: [
      "Gulf",
      "USM",
      "Lomprayah"
    ],
    photo: "/photos/koh-samui.jpg",
    geo: { lat: 9.512, lon: 100.013, containedIn: "Gulf of Thailand" },
    paragraphs: [
      "Samui is the Lower Gulf base: an airport, a loud east-coast strip, and boats to Phangan and Tao. Fly BKK-USM when the day matters. The Donsak ferry plus a van from the mainland is the slower, cheaper path.",
      "Nikki Beach and the beach-club row sit on the Samui nightlife page. Six Senses and Four Seasons sit under resort living."
    ],
    portraits: [
      {
        "title": "Koh Phangan",
        "href": "/koh-phangan",
        "photo": "/photos/koh-phangan.jpg"
      },
      {
        "title": "Koh Tao",
        "href": "/koh-tao",
        "photo": "/photos/koh-tao.jpg"
      },
      {
        "title": "Samui nightlife",
        "href": "/interests/nightlife/koh-samui-beach-clubs",
        "photo": "/photos/nightlife.jpg"
      }
    ],
    affiliates: [
      stay("Samui stays", "Pick a coast", "Chaweng for action, Maenam and Bophut for quieter nights.", stayLink('koh-samui'), "/photos/koh-samui.jpg"),
      stay("Chaweng hotels", "East coast", "Walk to dinner, hear the road.", stayAreaLink('chaweng'), "/photos/koh-samui.jpg"),
      klook("Phangan and Tao boats", "Rail and ferry", "Book Lomprayah the afternoon before, not at the pier in a swell.", klookRailFerry('Lomprayah Koh Samui'), "/photos/koh-phangan.jpg"),
    ],
    faqs: [
      {
        "q": "Samui or Phuket?",
        "a": "Same job, opposite monsoon. Phuket and Krabi for November to April. Samui and Phangan for January to September, with overlap in winter."
      }
    ],
  },
  {
    path: "/koh-phangan",
    title: "Koh Phangan",
    description: "Gulf island north of Samui. Full Moon Party is one beach. The rest is bays and jungle roads.",
    lede: "Phangan is known for the Full Moon Party at Haad Rin. Book that beach only if the party is the trip. Sleep on the west or north bays for a quieter stay.",
    schema: "TouristDestination",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Koh Phangan",
        "href": "/koh-phangan"
      }
    ],
    facts: [
      {
        "label": "Season",
        "value": "Easier January to September"
      },
      {
        "label": "Get there",
        "value": "Ferry from Samui or Donsak"
      },
      {
        "label": "Party",
        "value": "Full Moon at Haad Rin, not the whole island"
      }
    ],
    chips: [
      "Gulf",
      "Full Moon is optional"
    ],
    photo: "/photos/koh-phangan.jpg",
    geo: { lat: 9.731, lon: 100.013, containedIn: "Gulf of Thailand" },
    paragraphs: [
      "The party is one beach. The island is the bays. Thong Nai Pan, Srithanu, and the west coast are the usual first stays. Scooter roads are steep and sandy. Grab exists in pockets; do not count on it after midnight.",
      "Koh Tao is a further ferry if diving is the point. It is not on this first spine as a must."
    ],
    portraits: [
      {
        "title": "Koh Tao",
        "href": "/koh-tao",
        "photo": "/photos/koh-tao.jpg"
      },
      {
        "title": "Koh Samui",
        "href": "/koh-samui",
        "photo": "/photos/koh-samui.jpg"
      }
    ],
    affiliates: [
      stay("Phangan stays", "Skip Haad Rin unless you mean it", "Filter by bay name.", stayLink('koh-phangan'), "/photos/koh-phangan.jpg"),
      klook("Ferry tickets", "Rail and ferry", "Samui-Phangan seats sell out around Full Moon.", klookRailFerry('Koh Phangan ferry'), "/photos/koh-samui.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need Samui as well?",
        "a": "One night on Samui is enough if you fly USM. Stay on Phangan if the bay is the point."
      }
    ],
  },
  {
    path: "/khao-sok",
    title: "Khao Sok",
    description: "Rainforest and Cheow Lan Lake, a flooded karst reservoir between Surat Thani and Phang Nga.",
    lede: "Come for limestone cliffs on a flooded lake, and a night in the forest. Sleep at the lake for dawn mist. Sleep in the village if you arrive late from Phuket or Krabi.",
    schema: "TouristDestination",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Khao Sok",
        "href": "/khao-sok"
      }
    ],
    facts: [
      {
        "label": "Nights",
        "value": "1-2"
      },
      {
        "label": "Get there",
        "value": "Van from Phuket, Krabi, or Surat Thani"
      },
      {
        "label": "Season",
        "value": "Pair with Andaman Nov-Apr; trails slick after rain"
      }
    ],
    chips: [
      "Lake raft",
      "Andaman side"
    ],
    photo: "/photos/khao-sok.jpg",
    geo: { lat: 8.91, lon: 98.53, containedIn: "Andaman Coast" },
    paragraphs: [
      "Khao Sok is the rainforest-and-lake stop on an Andaman week. The lake is inland; the calendar is still Andaman. Pair it with Phuket or Krabi, not with Samui, unless you like a long van.",
      "Night safaris and lake canoes are the usual Klook-booked pieces. Raft houses vary in comfort; read the last season's notes."
    ],
    portraits: [
      {
        "title": "Phuket",
        "href": "/phuket",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Krabi",
        "href": "/krabi",
        "photo": "/photos/krabi.jpg"
      },
      {
        "title": "Khao Lak",
        "href": "/khao-lak",
        "photo": "/photos/khao-lak.jpg"
      }
    ],
    affiliates: [
      klook("Lake and jungle tours", "Tours", "Book the lake boat and a village transfer together.", klookTours('Khao Sok lake tour'), "/photos/khao-sok.jpg"),
      stay("Phuket or Krabi base", "If you skip a lake raft", "Many people day-trip. A night on the lake is better.", stayLink('khao-lak'), "/photos/khao-lak.jpg"),
    ],
    faqs: [
      {
        "q": "Day trip or overnight?",
        "a": "Overnight. The lake at 7:00 is the reason you came. A day trip is a van and a warm boat."
      }
    ],
  },
  {
    path: "/itineraries/best-14-days",
    title: "Best 14 days in Thailand",
    description: "Bangkok, Chiang Mai, then one south coast. Fly the long legs. Flip Andaman vs Gulf with the monsoon.",
    lede: "Two weeks: three nights Bangkok, three Chiang Mai, then a south coast. Do not add a second sea.",
    schema: "Article",
    crumbs: [
      {
        "name": "Itineraries",
        "href": "/itineraries"
      },
      {
        "name": "Best 14 days",
        "href": "/itineraries/best-14-days"
      }
    ],
    facts: [
      {
        "label": "Duration",
        "value": "14 days"
      },
      {
        "label": "Pace",
        "value": "Steady, one domestic flight plus one south flight"
      },
      {
        "label": "South flip",
        "value": "Andaman Nov-Apr, Gulf Jan-Sep"
      }
    ],
    photo: "/photos/bangkok.jpg",
    paragraphs: [
      "The spine is city, north, islands. Drop Chiang Rai and a second island group before you drop rest days."
    ],
    days: [
      {
        "n": 1,
        "title": "Bangkok arrival",
        "body": "Land BKK or DMK. Airport car or ARL to Sukhumvit. Walk a soi, sleep.",
        "photo": "/photos/bangkok.jpg"
      },
      {
        "n": 2,
        "title": "Old City temples",
        "body": "Grand Palace at opening, Wat Pho, Wat Arun ferry. Dinner back on Sukhumvit.",
        "photo": "/photos/old-city.jpg"
      },
      {
        "n": 3,
        "title": "River or Chinatown",
        "body": "Riverside walk and a Charoenkrung evening. Nightlife is optional and on its own pages.",
        "photo": "/photos/riverside.jpg"
      },
      {
        "n": 4,
        "title": "Bangkok to Chiang Mai",
        "body": "Morning flight to CNX, or the previous night on SRT 9/10. Sleep in the Old City.",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "n": 5,
        "title": "Old City circuit",
        "body": "Dawn wats, cooking class or Doi Suthep. Sunday market if the calendar lines up.",
        "photo": "/photos/chiang-mai-old-city.jpg"
      },
      {
        "n": 6,
        "title": "Nimman and a half-day",
        "body": "Cafes west of the moat, or a Chiang Rai day if you accept a long van.",
        "photo": "/photos/nimman.jpg"
      },
      {
        "n": 7,
        "title": "Fly south",
        "body": "CNX to HKT or USM. If you must connect in Bangkok, keep the layover honest.",
        "photo": "/photos/phuket.jpg"
      },
      {
        "n": 8,
        "title": "Beach day",
        "body": "Do not boat on arrival day. Swim and reset the clock.",
        "photo": "/photos/koh-samui.jpg"
      },
      {
        "n": 9,
        "title": "Island hop or Railay",
        "body": "Andaman: Phi Phi or Railay. Gulf: Phangan day boat or a second Samui coast.",
        "photo": "/photos/krabi.jpg"
      },
      {
        "n": 10,
        "title": "Quiet bay",
        "body": "Move hotels if the first beach is wrong. This is the day people usually should have started on.",
        "photo": "/photos/koh-phangan.jpg"
      },
      {
        "n": 11,
        "title": "Optional Khao Sok",
        "body": "Andaman itinerary only. One night on the lake, then back to the airport coast.",
        "photo": "/photos/khao-sok.jpg"
      },
      {
        "n": 12,
        "title": "Buffer",
        "body": "Weather buffer. Ferry leftovers go here.",
        "photo": "/photos/khao-lak.jpg"
      },
      {
        "n": 13,
        "title": "Back to Bangkok",
        "body": "Fly to BKK. One night in Siam or riverside if you have a morning long-haul.",
        "photo": "/photos/siam.jpg"
      },
      {
        "n": 14,
        "title": "Out",
        "body": "ARL or a booked car. Do not plan a palace morning before a noon flight.",
        "photo": "/photos/bts.jpg"
      }
    ],
    affiliates: [
      stay("Bangkok first nights", "Sukhumvit", "Keep the first two nights simple.", stayAreaLink('sukhumvit'), "/photos/sukhumvit.jpg"),
      stay("Chiang Mai block", "Old City", "Three nights inside or beside the moat.", stayLink('chiang-mai'), "/photos/chiang-mai.jpg"),
      {title: "South flights", kicker: "Trip.com", body: "BKK or CNX to HKT, USM, or KBV.", href: flightLink('BKK', 'HKT'), cta: "Search flights", photo: "/photos/phuket.jpg", partner: "flights"},
    ],
    faqs: [
      {
        "q": "What do you actually see in 14 days?",
        "a": "Bangkok, Chiang Mai, and one south coast. That is the spine. Khao Sok or Phangan is a swap, not an add."
      },
      {
        "q": "What should you drop?",
        "a": "Do not stack Phuket and Samui. Do not add Pai and Chiang Rai on the same north block."
      }
    ],
  },
  {
    path: "/itineraries/first-week-7-days",
    title: "First week in Thailand (7 days)",
    description: "Seven days: Bangkok plus Chiang Mai, or Bangkok plus one south coast. Not both.",
    lede: "A first week has one fork after Bangkok. North for temples and food. South for a beach. Pick with the monsoon, not with a map that shows both.",
    schema: "Article",
    crumbs: [
      {
        "name": "Itineraries",
        "href": "/itineraries"
      },
      {
        "name": "First week",
        "href": "/itineraries/first-week-7-days"
      }
    ],
    facts: [
      {
        "label": "Duration",
        "value": "7 days"
      },
      {
        "label": "Fork",
        "value": "Chiang Mai or one coast"
      },
      {
        "label": "Do not",
        "value": "Two island groups"
      }
    ],
    photo: "/photos/bangkok.jpg",
    paragraphs: [
      "Three nights in Bangkok is enough. The remaining four nights belong to one other place."
    ],
    days: [
      {
        "n": 1,
        "title": "Bangkok arrival",
        "body": "Airport car or ARL. Sukhumvit sleep.",
        "photo": "/photos/bangkok.jpg"
      },
      {
        "n": 2,
        "title": "Palace morning",
        "body": "Rattanakosin early, river boat, dinner in Thonglor.",
        "photo": "/photos/old-city.jpg"
      },
      {
        "n": 3,
        "title": "City buffer",
        "body": "Siam, Chinatown, or a rest day. Fly or train tonight if you take the sleeper north.",
        "photo": "/photos/riverside.jpg"
      },
      {
        "n": 4,
        "title": "Fork day",
        "body": "Chiang Mai Old City, or a HKT/USM/KBV landing and a beach transfer.",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "n": 5,
        "title": "Deepen the fork",
        "body": "Nimman or a boat day. Not a new city.",
        "photo": "/photos/nimman.jpg"
      },
      {
        "n": 6,
        "title": "Second full day away",
        "body": "This is the day the trip needed.",
        "photo": "/photos/phuket.jpg"
      },
      {
        "n": 7,
        "title": "Return and out",
        "body": "Fly back to BKK only if the long-haul needs it. Same-day international is a gamble.",
        "photo": "/photos/bts.jpg"
      }
    ],
    affiliates: [
      stay("Bangkok", "First three nights", "Sukhumvit keeps the BTS simple.", stayLink('bangkok'), "/photos/bangkok.jpg"),
      {title: "The fork flight", kicker: "Trip.com", body: "BKK-CNX, BKK-HKT, or BKK-USM.", href: flightLink('BKK', 'CNX'), cta: "Search flights", photo: "/photos/chiang-mai.jpg", partner: "flights"},
    ],
    faqs: [
      {
        "q": "North or south on a first week?",
        "a": "North if you care about food and wats. South if you need a beach. The 14-day plan is how you do both."
      }
    ],
  },
  {
    path: "/itineraries/south-islands-10-days",
    title: "South islands in 10 days",
    description: "Ten days on one sea. Andaman (Phuket, Krabi, Khao Sok) in November to April. Gulf (Samui, Phangan, Tao) in January to September.",
    lede: "Pick a sea. The monsoon flip is the whole plan. Do not fly Phuket to Samui to see both on a first south trip.",
    schema: "Article",
    crumbs: [
      {
        "name": "Itineraries",
        "href": "/itineraries"
      },
      {
        "name": "South islands 10 days",
        "href": "/itineraries/south-islands-10-days"
      }
    ],
    facts: [
      {
        "label": "Andaman window",
        "value": "November to April"
      },
      {
        "label": "Gulf window",
        "value": "January to September"
      },
      {
        "label": "Airports",
        "value": "HKT or KBV vs USM"
      }
    ],
    photo: "/photos/phuket.jpg",
    paragraphs: [
      "Andaman version: Phuket two nights, Krabi or Railay three, Phi Phi one, Khao Sok one, buffer two.",
      "Gulf version: Samui three, Phangan three, optional Tao two, buffer two. Ferries in the morning."
    ],
    days: [
      {
        "n": 1,
        "title": "Land south",
        "body": "HKT, KBV, or USM. No boat on day one.",
        "photo": "/photos/phuket.jpg"
      },
      {
        "n": 2,
        "title": "Beach base",
        "body": "Learn the songthaew or Grab pattern.",
        "photo": "/photos/koh-samui.jpg"
      },
      {
        "n": 3,
        "title": "First boat or cliff",
        "body": "Railay, a west-coast hop, or a Samui north-coast move.",
        "photo": "/photos/krabi.jpg"
      },
      {
        "n": 4,
        "title": "Move once",
        "body": "Change islands or bays once, not twice.",
        "photo": "/photos/koh-phangan.jpg"
      },
      {
        "n": 5,
        "title": "Deep bay day",
        "body": "The reason you moved.",
        "photo": "/photos/krabi.jpg"
      },
      {
        "n": 6,
        "title": "Island hop",
        "body": "Phi Phi from the Andaman, Phangan or Tao from the Gulf.",
        "photo": "/photos/phuket.jpg"
      },
      {
        "n": 7,
        "title": "Recovery or Khao Sok",
        "body": "Lake night on the Andaman plan only.",
        "photo": "/photos/khao-sok.jpg"
      },
      {
        "n": 8,
        "title": "Second nature day",
        "body": "Or a second beach if the lake is not your thing.",
        "photo": "/photos/khao-lak.jpg"
      },
      {
        "n": 9,
        "title": "Back to the airport coast",
        "body": "Sleep near HKT, KBV, or USM.",
        "photo": "/photos/phuket.jpg"
      },
      {
        "n": 10,
        "title": "Out",
        "body": "Morning flight to BKK or a long-haul if the airport supports it.",
        "photo": "/photos/bts.jpg"
      }
    ],
    affiliates: [
      stay("Andaman hotels", "Phuket and Krabi", "Use this search in the winter window.", stayLink('phuket'), "/photos/phuket.jpg"),
      stay("Gulf hotels", "Samui and Phangan", "Use this search in the summer window.", stayLink('koh-samui'), "/photos/koh-samui.jpg"),
      klook("Island hopping", "Klook", "Phi Phi, four islands, or Ang Thong. Morning departures.", klookIslandHopping('Thailand'), "/photos/krabi.jpg"),
    ],
    faqs: [
      {
        "q": "What if you travel in June?",
        "a": "Prefer the Gulf. The Andaman is in the southwest monsoon. Some days are still fine; ferries are not a plan you can lock."
      },
      {
        "q": "What if you travel in December?",
        "a": "Prefer the Andaman. The Gulf can still work, with more rain risk on Samui than on Phuket."
      }
    ],
  },
  {
    path: "/plan/when-to-go",
    title: "When to go to Thailand",
    description: "Andaman coast is easier November to April. The Gulf is easier January to September. Bangkok and Chiang Mai work most months.",
    lede: "Thailand is not one season. The Andaman (Phuket, Krabi, Khao Lak, Phi Phi) is the winter sea. The Gulf (Samui, Phangan, Tao) is the summer sea. They overlap in winter. They do not overlap in autumn.",
    schema: "Article",
    crumbs: [
      {
        "name": "Plan",
        "href": "/plan"
      },
      {
        "name": "When to go",
        "href": "/plan/when-to-go"
      }
    ],
    facts: [
      {
        "label": "Andaman",
        "value": "November to April"
      },
      {
        "label": "Gulf",
        "value": "January to September"
      },
      {
        "label": "North",
        "value": "Cooler November to February"
      }
    ],
    photo: "/photos/phuket.jpg",
    paragraphs: [
      "Bangkok is hot most of the year and wettest in September and October. You still go. You walk in the morning and sit in air-con at 14:00.",
      "Chiang Mai has a cool season (November to February), a hot season (March to May, smoke risk), and a rainy season that is still usable.",
      "Songkran in mid-April is a water festival, not a sightseeing week in the Old City. Book it on purpose or avoid the Old City lanes that week."
    ],
    sections: [
      {
        "id": "coasts",
        "title": "Coast calendar",
        "table": {
          "headers": [
            "Coast",
            "Easier months",
            "Harder months",
            "Airports"
          ],
          "rows": [
            [
              "Andaman (Phuket, Krabi, Lanta, Lipe, Khao Lak, Similan)",
              "November to April",
              "May to October (Similan park shut 16 May to 14 Oct)",
              "HKT, KBV, Hat Yai for Lipe"
            ],
            [
              "Lower Gulf (Samui, Phangan, Tao)",
              "January to September",
              "October to December",
              "USM plus ferries"
            ],
            [
              "Eastern Gulf (Chang, Kood) and Hua Hin",
              "November to February for Trat; Hua Hin usable most months",
              "May to October rain; October is Hua Hin's wet month",
              "TDX or Bangkok road; Hua Hin by train"
            ],
            [
              "Bangkok and the central plains",
              "November to February for heat",
              "September to October rain",
              "BKK, DMK"
            ],
            [
              "North (Chiang Mai corridor)",
              "November to February",
              "March haze, then rain",
              "CNX"
            ]
          ]
        }
      }
    ],
    faqs: [
      {
        "q": "Is there a single best month?",
        "a": "December to February if you want both Bangkok and the Andaman. July if you want Samui and can take Bangkok heat."
      },
      {
        "q": "Can you visit Phuket in August?",
        "a": "You can. Some days are beautiful. Boat days cancel. Prefer Samui in that month unless a resort is the whole point."
      }
    ],
  },
  {
    path: "/plan/visas-and-tdac",
    title: "Visas and TDAC",
    description: "60-day visa-free stay for US, UK, and most EU passports, plus the Thailand Digital Arrival Card (TDAC) before you fly.",
    lede: "Most Western passports now get 60 days visa-free on arrival for tourism. You still submit TDAC before the flight. This is not legal advice; recheck the Immigration Bureau and your airline 72 hours out.",
    schema: "Article",
    crumbs: [
      {
        "name": "Plan",
        "href": "/plan"
      },
      {
        "name": "Visas and TDAC",
        "href": "/plan/visas-and-tdac"
      }
    ],
    facts: [
      {
        "label": "Visa-free",
        "value": "60 days for US, UK, and most EU tourist entries"
      },
      {
        "label": "TDAC",
        "value": "Submit before departure"
      },
      {
        "label": "Extensions",
        "value": "Immigration offices can extend; do not plan that on day 2"
      }
    ],
    photo: "/photos/bangkok.jpg",
    paragraphs: [
      "TDAC is the digital arrival card that replaced the old paper TM6 for most air arrivals. Complete it on the official Immigration site. Scam copies exist. Type the government address yourself.",
      "Visa-free 60 days covers a 14-day trip with room left. If you hold a passport that is not on the exemption list, you need an e-visa or a visa from a consulate before you fly.",
      "Overland arrivals and air arrivals can differ. Cruise and private-air rules differ again. Use the same official page, not a blog comment from 2022."
    ],
    faqs: [
      {
        "q": "When do you file TDAC?",
        "a": "In the days before you fly, once your flight number is stable. Keep a screenshot offline."
      },
      {
        "q": "Does visa-free mean 60 days in, 60 days out, repeat forever?",
        "a": "No. Immigration looks for tourism. Visa runs are a different hobby and not what this site is for."
      }
    ],
  },
  {
    path: "/plan/trains-and-ferries",
    title: "Trains and ferries in Thailand",
    description: "SRT sleeper trains from Krung Thep Aphiwat, plus Gulf ferries and Andaman boats.",
    lede: "The useful train is Bangkok to Chiang Mai on SRT 9 and 10. The useful boats are Lomprayah on the Gulf and morning Andaman ferries to Phi Phi.",
    schema: "Article",
    crumbs: [
      {
        "name": "Plan",
        "href": "/plan"
      },
      {
        "name": "Trains and ferries",
        "href": "/plan/trains-and-ferries"
      }
    ],
    facts: [
      {
        "label": "North train",
        "value": "SRT 9 and 10, Krung Thep Aphiwat to Chiang Mai"
      },
      {
        "label": "Gulf boats",
        "value": "Lomprayah and Seatran"
      },
      {
        "label": "Andaman boats",
        "value": "Morning only in the wet months"
      }
    ],
    photo: "/photos/chiang-mai.jpg",
    paragraphs: [
      "Long-distance trains now use Krung Thep Aphiwat Central Terminal, not Hua Lamphong, for the Chiang Mai sleepers. Budget a Grab from your hotel; the station is north of the old core.",
      "Book trains on SRT or via Trip.com when inventory is mirrored. Book Gulf ferries the afternoon before. Book Andaman boats when the weather desk is awake, not a week out in September."
    ],
    sections: [
      {
        "id": "modes",
        "title": "What to book",
        "table": {
          "headers": [
            "Route",
            "Mode",
            "Notes"
          ],
          "rows": [
            [
              "Bangkok to Chiang Mai",
              "SRT 9/10 sleeper or flight",
              "Train is the experience. Flight is the day-saver."
            ],
            [
              "Bangkok to Phuket or Krabi",
              "Flight",
              "The train south is not the first-trip move."
            ],
            [
              "Samui to Phangan or Tao",
              "Lomprayah",
              "Morning seats in swell season."
            ],
            [
              "Phuket to Phi Phi or Krabi",
              "Ferry or speedboat",
              "Cancel when the Andaman is up."
            ],
            [
              "Bangkok to Ayutthaya",
              "Train from Krung Thep Aphiwat",
              "About one hour. Day trip unless you want dawn."
            ],
            [
              "Bangkok to Kanchanaburi",
              "Ordinary train from Thonburi",
              "Not Bang Sue. Nam Tok is a separate check."
            ],
            [
              "Bangkok to Hua Hin",
              "Southbound train from Krung Thep Aphiwat",
              "Special Express 43 is the useful morning set."
            ]
          ]
        }
      }
    ],
    affiliates: [
      {title: "Train seats", kicker: "Trip.com", body: "Bangkok to Chiang Mai sleepers when they are listed.", href: trainLink('Bangkok', 'Chiang Mai'), cta: "Search trains", photo: "/photos/chiang-mai.jpg", partner: "trains"},
      klook("Ferry tickets", "Travelpayouts / Klook", "Lomprayah and Andaman boats.", klookRailFerry('Thailand ferry'), "/photos/koh-samui.jpg"),
    ],
    faqs: [
      {
        "q": "Hua Lamphong or Krung Thep Aphiwat?",
        "a": "For Chiang Mai sleepers 9 and 10, use Krung Thep Aphiwat. Hua Lamphong is still a station; it is not your sleeper."
      }
    ],
  },
  {
    path: "/plan/grab-and-bts",
    title: "Grab, Bolt, BTS, MRT, and ARL",
    description: "How to move in Bangkok: tap the BTS and MRT, ride the Airport Rail Link, and use Grab or Bolt for the last stretch.",
    lede: "Tap in. Do not cash-negotiate a taxi from the airport unless you like the sport. Grab and Bolt show a price. The BTS is faster than any of them from Asok to Siam at 18:00.",
    schema: "Article",
    crumbs: [
      {
        "name": "Plan",
        "href": "/plan"
      },
      {
        "name": "Grab and BTS",
        "href": "/plan/grab-and-bts"
      }
    ],
    facts: [
      {
        "label": "ARL",
        "value": "Suvarnabhumi to Phaya Thai"
      },
      {
        "label": "Tap",
        "value": "BTS and MRT now take contactless cards on most gates"
      },
      {
        "label": "Apps",
        "value": "Grab and Bolt; both work"
      }
    ],
    photo: "/photos/bts.jpg",
    paragraphs: [
      "Buy a Rabbit card only if you will ride BTS for many days. A contactless Visa or Mastercard tap is enough for a first week on most gates. Keep a coin stash for the odd older gate.",
      "MRT Blue intersects BTS at Si Lom/Sala Daeng, Sukhumvit/Asok, and Chatuchak. That is the useful map. You do not need the whole system.",
      "Don Mueang has no ARL. Use the A1 bus links, a booked car, or Grab. Suvarnabhumi has ARL and taxis. Book a Trip.com transfer if you land after 22:00 with three bags."
    ],
    affiliates: [
      {title: "BKK airport car", kicker: "Trip.com", body: "Suvarnabhumi to the first hotel.", href: transferLink('BKK'), cta: "Book transfer", photo: "/photos/bangkok.jpg", partner: "transfer"},
      {title: "DMK airport car", kicker: "Trip.com", body: "Don Mueang when you fly low-cost.", href: transferLink('DMK'), cta: "Book transfer", photo: "/photos/bangkok.jpg", partner: "transfer"},
      {title: "HKT airport car", kicker: "Trip.com", body: "Phuket airport to the west-coast beaches.", href: transferLink('HKT'), cta: "Book transfer", photo: "/photos/phuket.jpg", partner: "transfer"},
      {title: "CNX airport car", kicker: "Trip.com", body: "Chiang Mai airport to the moat or Nimman.", href: transferLink('CNX'), cta: "Book transfer", photo: "/photos/chiang-mai.jpg", partner: "transfer"},
      {title: "USM airport car", kicker: "Trip.com", body: "Samui airport is close; a car still beats a guessing game.", href: transferLink('USM'), cta: "Book transfer", photo: "/photos/koh-samui.jpg", partner: "transfer"},
    ],
    faqs: [
      {
        "q": "Does Grab work at the airport?",
        "a": "Yes, from the designated pickup decks. Follow the in-app pin, not a lobby tout."
      },
      {
        "q": "BTS or Grab across town?",
        "a": "BTS when both ends are near a station at rush hour. Grab when it rains or you have luggage."
      }
    ],
  },
  {
    path: "/get-there/bangkok-to-chiang-mai",
    title: "Bangkok to Chiang Mai",
    description: "The north hop: fly about 70 minutes, or take the overnight sleeper from Krung Thep Aphiwat.",
    lede: "Fly if the day matters. Take SRT trains 9 and 10 if you want the overnight ride from Krung Thep Aphiwat.",
    schema: "Article",
    crumbs: [
      {
        "name": "Get there",
        "href": "/get-there"
      },
      {
        "name": "Bangkok to Chiang Mai",
        "href": "/get-there/bangkok-to-chiang-mai"
      }
    ],
    facts: [
      {
        "label": "Flight",
        "value": "About 70 minutes, BKK or DMK to CNX"
      },
      {
        "label": "Train",
        "value": "SRT 9/10 sleeper, about 12 hours"
      },
      {
        "label": "Who should train",
        "value": "Anyone who wants the ride, not a 6:00 meeting"
      }
    ],
    photo: "/photos/chiang-mai.jpg",
    paragraphs: [
      "This is the usual Bangkok-to-north choice: a short flight or the useful Thai sleeper. The return is the same mix. Train 10 is the southbound sleeper. Confirm today's numbers on SRT the week you ride."
    ],
    sections: [
      {
        "id": "ways",
        "title": "Ways to go",
        "table": {
          "headers": [
            "Mode",
            "Time",
            "Notes"
          ],
          "rows": [
            [
              "Flight",
              "About 70 minutes",
              "Plus airport time at both ends. Book BKK-CNX or DMK-CNX."
            ],
            [
              "SRT 9 / 10",
              "About 12 hours",
              "Departs Krung Thep Aphiwat. Book a sleeper berth."
            ],
            [
              "Day train",
              "About 12 hours",
              "Seats, not berths. Fine if you like rice fields more than sleep."
            ],
            [
              "Bus",
              "9-11 hours",
              "Works. The sleeper train is the better overnight."
            ]
          ]
        }
      }
    ],
    affiliates: [
      {title: "Flights to CNX", kicker: "Trip.com", body: "BKK and DMK both serve Chiang Mai.", href: flightLink('BKK', 'CNX'), cta: "Search flights", photo: "/photos/chiang-mai.jpg", partner: "flights"},
      {title: "DMK to CNX", kicker: "Trip.com", body: "Low-cost side of Bangkok to Chiang Mai.", href: flightLink('DMK', 'CNX'), cta: "Search flights", photo: "/photos/chiang-mai.jpg", partner: "flights"},
      {title: "Train berths", kicker: "Trip.com", body: "Bangkok to Chiang Mai when listed.", href: trainLink('Bangkok', 'Chiang Mai'), cta: "Search trains", photo: "/photos/bts.jpg", partner: "trains"},
      {title: "CNX transfer", kicker: "Trip.com", body: "Airport to Old City or Nimman.", href: transferLink('CNX'), cta: "Book transfer", photo: "/photos/chiang-mai.jpg", partner: "transfer"},
    ],
    faqs: [
      {
        "q": "Which Bangkok station?",
        "a": "Krung Thep Aphiwat for trains 9 and 10. Do not go to Hua Lamphong for this sleeper."
      },
      {
        "q": "BKK or DMK to CNX?",
        "a": "Both fly it. Match the airport you already use. A cross-town airport change can erase the flight's advantage."
      }
    ],
  },
  {
    path: "/get-there/bangkok-to-phuket",
    title: "Bangkok to Phuket",
    description: "The Andaman hop: fly BKK or DMK to HKT in about 80 minutes. Skip the overnight bus.",
    lede: "Fly to HKT. Then drive 45 to 90 minutes to a west-coast beach. The bus is a night you will not get back.",
    schema: "Article",
    crumbs: [
      {
        "name": "Get there",
        "href": "/get-there"
      },
      {
        "name": "Bangkok to Phuket",
        "href": "/get-there/bangkok-to-phuket"
      }
    ],
    facts: [
      {
        "label": "Flight",
        "value": "About 80 minutes to HKT"
      },
      {
        "label": "Then",
        "value": "45-90 minutes to the west-coast beaches"
      },
      {
        "label": "Season",
        "value": "Easier November to April"
      }
    ],
    photo: "/photos/phuket.jpg",
    paragraphs: [
      "Phuket is a flight, then a beach transfer. HKT has Trip.com airport cars. Tell the driver the beach, not just Phuket."
    ],
    sections: [
      {
        "id": "ways",
        "title": "Ways to go",
        "table": {
          "headers": [
            "Mode",
            "Time",
            "Notes"
          ],
          "rows": [
            [
              "Flight",
              "About 80 minutes",
              "BKK-HKT or DMK-HKT. This is the first-trip move."
            ],
            [
              "Bus",
              "12-14 hours",
              "Exists. Fly."
            ],
            [
              "Andaman boats after landing",
              "Half day",
              "Do not boat to Phi Phi the same afternoon you landed."
            ]
          ]
        }
      }
    ],
    affiliates: [
      {title: "Flights to HKT", kicker: "Trip.com", body: "From BKK or DMK.", href: flightLink('BKK', 'HKT'), cta: "Search flights", photo: "/photos/phuket.jpg", partner: "flights"},
      {title: "DMK to HKT", kicker: "Trip.com", body: "Don Mueang to Phuket.", href: flightLink('DMK', 'HKT'), cta: "Search flights", photo: "/photos/phuket.jpg", partner: "flights"},
      {title: "HKT transfer", kicker: "Trip.com", body: "Airport to Kamala, Bang Tao, Kata, or Patong.", href: transferLink('HKT'), cta: "Book transfer", photo: "/photos/phuket.jpg", partner: "transfer"},
      stay("Phuket first night", "West coast", "Be on a beach before you plan a boat.", stayLink('phuket'), "/photos/phuket.jpg"),
    ],
    faqs: [
      {
        "q": "Can you land and boat to Phi Phi the same day?",
        "a": "Only if you land early and the sea is flat. A first trip should sleep on Phuket first."
      }
    ],
  },
  {
    path: "/get-there/bangkok-to-koh-samui",
    title: "Bangkok to Koh Samui",
    description: "The Gulf hop: fly BKK to USM in about 70 minutes, or take the van-plus-ferry via Donsak.",
    lede: "Fly to USM if the day matters. The van-plus-ferry via Donsak is the cheaper half-day.",
    schema: "Article",
    crumbs: [
      {
        "name": "Get there",
        "href": "/get-there"
      },
      {
        "name": "Bangkok to Koh Samui",
        "href": "/get-there/bangkok-to-koh-samui"
      }
    ],
    facts: [
      {
        "label": "Flight",
        "value": "About 70 minutes to USM"
      },
      {
        "label": "Ferry path",
        "value": "Van to Donsak plus boat, a half day"
      },
      {
        "label": "Season",
        "value": "Easier January to September"
      }
    ],
    photo: "/photos/koh-samui.jpg",
    paragraphs: [
      "Samui is the Gulf island with its own airport. USM transfers are short. Chaweng is close. The opposite coast still deserves a booked car at night."
    ],
    sections: [
      {
        "id": "ways",
        "title": "Ways to go",
        "table": {
          "headers": [
            "Mode",
            "Time",
            "Notes"
          ],
          "rows": [
            [
              "Flight",
              "About 70 minutes",
              "USM is the point of Samui. Bangkok Airways and others."
            ],
            [
              "Van and ferry",
              "8-10 hours",
              "Cheaper. Use it when the flight is silly money."
            ],
            [
              "Via Surat Thani train",
              "Long",
              "A romance, not a first-week plan."
            ]
          ]
        }
      }
    ],
    affiliates: [
      {title: "Flights to USM", kicker: "Trip.com", body: "BKK to Koh Samui.", href: flightLink('BKK', 'USM'), cta: "Search flights", photo: "/photos/koh-samui.jpg", partner: "flights"},
      {title: "DMK to USM", kicker: "Trip.com", body: "When a Don Mueang routing exists, price it here.", href: flightLink('DMK', 'USM'), cta: "Search flights", photo: "/photos/koh-samui.jpg", partner: "flights"},
      {title: "USM transfer", kicker: "Trip.com", body: "Airport to Chaweng, Bophut, or the south.", href: transferLink('USM'), cta: "Book transfer", photo: "/photos/koh-samui.jpg", partner: "transfer"},
      klook("Mainland ferry", "Klook", "If you skip USM and come via Donsak.", klookRailFerry('Donsak ferry Samui'), "/photos/koh-samui.jpg"),
    ],
    faqs: [
      {
        "q": "Why is the Samui flight expensive?",
        "a": "USM is a private-concession airport. Price it against a Surat ferry day before you decide it is a scam. Sometimes the ferry wins."
      }
    ],
  },
  {
    path: "/get-there/phuket-to-krabi-phi-phi",
    title: "Phuket to Krabi and Phi Phi",
    description: "A morning van links Phuket and Krabi. Boats to Phi Phi run from both in season. Skip boat days when the Andaman is up.",
    lede: "Van between Phuket and Krabi in any month. Boat to Phi Phi in the morning, November to April. Treat boat days as optional in the southwest monsoon.",
    schema: "Article",
    crumbs: [
      {
        "name": "Get there",
        "href": "/get-there"
      },
      {
        "name": "Phuket to Krabi and Phi Phi",
        "href": "/get-there/phuket-to-krabi-phi-phi"
      }
    ],
    facts: [
      {
        "label": "Phuket-Krabi van",
        "value": "About 2.5 to 3 hours via the bridge"
      },
      {
        "label": "Boat to Phi Phi",
        "value": "1.5 to 2 hours from either side"
      },
      {
        "label": "Season",
        "value": "Lock boats November to April"
      }
    ],
    photo: "/photos/krabi.jpg",
    paragraphs: [
      "This is the Andaman triangle: Phuket, Krabi cliffs, and Phi Phi in the middle. Krabi airport (KBV) is the other door. Flying BKK-KBV then boating to Phi Phi is cleaner than landing HKT at 16:00 and hoping."
    ],
    sections: [
      {
        "id": "ways",
        "title": "Ways to go",
        "table": {
          "headers": [
            "Mode",
            "Time",
            "Notes"
          ],
          "rows": [
            [
              "Van or car, Phuket to Krabi",
              "2.5-3 hours",
              "The reliable move in any month."
            ],
            [
              "Ferry to Phi Phi",
              "1.5-2 hours",
              "Morning departures. Cancel when the Andaman is up."
            ],
            [
              "Speedboat loops",
              "Long day",
              "Four-island tours. Book on Klook, sleep on land that night."
            ]
          ]
        }
      }
    ],
    affiliates: [
      {title: "BKK to KBV", kicker: "Trip.com", body: "When Krabi is the base.", href: flightLink('BKK', 'KBV'), cta: "Search flights", photo: "/photos/krabi.jpg", partner: "flights"},
      {title: "DMK to KBV", kicker: "Trip.com", body: "Low-cost Bangkok to Krabi.", href: flightLink('DMK', 'KBV'), cta: "Search flights", photo: "/photos/krabi.jpg", partner: "flights"},
      klook("Phi Phi boats", "Island hopping", "From Phuket or Krabi.", klookIslandHopping('Phi Phi'), "/photos/phuket.jpg"),
      stay("Krabi night", "Ao Nang or Railay", "Sleep on the Krabi side if Railay is the point.", stayLink('krabi'), "/photos/krabi.jpg"),
    ],
    faqs: [
      {
        "q": "Can you do Phi Phi as a day trip?",
        "a": "Yes from Phuket or Ao Nang. Stay the night if you want the village after the last tour boat."
      },
      {
        "q": "What about KBV flights?",
        "a": "Use them when Krabi or Railay is the base. Search BKK-KBV on Trip.com the same way you search HKT."
      }
    ],
  },
  {
    path: "/interests/resort-living",
    title: "Resort living in Thailand",
    description: "Named luxury and MGallery stays, with Trip.com rate links in context. The hotel is the reason to go.",
    lede: "Resort living is for trips where the hotel is the point: river houses, Andaman villas, and named Gulf bays. They are not ranked. Compare transfer time and monsoon side.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the stay is the itinerary"
      },
      {
        "label": "Rates",
        "value": "Trip.com search, not a secret allotment"
      }
    ],
    photo: "/photos/resort.jpg",
    paragraphs: [
      "They are not ranked. Compare transfer time and monsoon side before you lock a week."
    ],
    portraits: [
      {
        "title": "Amanpuri",
        "href": "/resort-living/amanpuri",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Six Senses Yao Noi",
        "href": "/resort-living/six-senses-yao-noi",
        "photo": "/photos/krabi.jpg"
      },
      {
        "title": "Six Senses Samui",
        "href": "/resort-living/six-senses-samui",
        "photo": "/photos/koh-samui.jpg"
      },
      {
        "title": "Capella Bangkok",
        "href": "/resort-living/capella-bangkok",
        "photo": "/photos/riverside.jpg"
      },
      {
        "title": "The Siam",
        "href": "/resort-living/the-siam",
        "photo": "/photos/riverside.jpg"
      },
      {
        "title": "Four Seasons Chiang Mai",
        "href": "/resort-living/four-seasons-chiang-mai",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "title": "Four Seasons Koh Samui",
        "href": "/resort-living/four-seasons-koh-samui",
        "photo": "/photos/koh-samui.jpg"
      },
      {
        "title": "Soneva Kiri",
        "href": "/resort-living/soneva-kiri",
        "photo": "/photos/koh-phangan.jpg"
      },
      {
        "title": "Rayavadee",
        "href": "/resort-living/rayavadee",
        "photo": "/photos/krabi.jpg"
      },
      {
        "title": "VIE Hotel Bangkok",
        "href": "/resort-living/vie-hotel-bangkok",
        "photo": "/photos/siam.jpg"
      },
      {
        "title": "Veranda High Chiang Mai",
        "href": "/resort-living/veranda-high-chiang-mai",
        "photo": "/photos/nimman.jpg"
      },
      {
        "title": "Avista Hideaway Phuket",
        "href": "/resort-living/avista-hideaway-phuket",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Four Seasons Bangkok",
        "href": "/resort-living/four-seasons-bangkok",
        "photo": "/photos/riverside.jpg"
      },
      {
        "title": "Mandarin Oriental Bangkok",
        "href": "/resort-living/mandarin-oriental-bangkok",
        "photo": "/photos/riverside.jpg"
      },
      {
        "title": "Rosewood Bangkok",
        "href": "/resort-living/rosewood-bangkok",
        "photo": "/photos/siam.jpg"
      },
      {
        "title": "Trisara Phuket",
        "href": "/resort-living/trisara-phuket",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Anantara Chiang Mai",
        "href": "/resort-living/anantara-chiang-mai",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "title": "137 Pillars House",
        "href": "/resort-living/137-pillars-house",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "title": "Phulay Bay",
        "href": "/resort-living/phulay-bay",
        "photo": "/photos/krabi.jpg"
      },
      {
        "title": "Ritz-Carlton Koh Samui",
        "href": "/resort-living/ritz-carlton-koh-samui",
        "photo": "/photos/koh-samui.jpg"
      }
    ],
    faqs: [
      {
        "q": "Are these sponsored reviews?",
        "a": "No. They are named properties with public pages and a Trip.com search link so you can see live rates."
      }
    ],
  },
  {
    path: "/resort-living/amanpuri",
    title: "Amanpuri",
    description: "Aman's pavilions on Phuket's west coast, above a private cove on the Andaman side.",
    lede: "Aman's pavilions on Phuket's west coast, above a private cove on the Andaman side.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "Amanpuri",
        "href": "/resort-living/amanpuri"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/phuket.jpg",
    paragraphs: [
      "Amanpuri is a pavilion resort, not a tower. You come for the coconut grove, the cove, and a week that does not need Patong.",
      "Pair it with the Andaman window (November to April). A HKT car is the correct landing, not a boat day."
    ],
    affiliates: [
      stay("Amanpuri rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('Amanpuri Phuket', 'phuket'), "/photos/phuket.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/resort-living/six-senses-yao-noi",
    title: "Six Senses Yao Noi",
    description: "A hill-villa resort on Koh Yao Noi, looking at Phang Nga Bay between Phuket and Krabi.",
    lede: "A hill-villa resort on Koh Yao Noi, looking at Phang Nga Bay between Phuket and Krabi.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "Six Senses Yao Noi",
        "href": "/resort-living/six-senses-yao-noi"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/krabi.jpg",
    paragraphs: [
      "Yao Noi is the point: limestone bay, not a nightlife strip. Transfers are a pier plus a longtail or speedboat from Phuket or Krabi, often 45 to 75 minutes after you leave the airport.",
      "Book boats in the Andaman season (November to April). In the southwest monsoon, treat this as a weather-dependent stay."
    ],
    affiliates: [
      stay("Six Senses Yao Noi rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('Six Senses Yao Noi', 'phuket'), "/photos/krabi.jpg"),
      klook("Bay boats", "Island hopping", "Phang Nga Bay only when the desk says go.", klookIslandHopping('Phang Nga'), "/photos/krabi.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/resort-living/six-senses-samui",
    title: "Six Senses Samui",
    description: "Villa resort on a headland above Bophut, on the Gulf side of Samui.",
    lede: "Villa resort on a headland above Bophut, on the Gulf side of Samui. Use it when the stay is the trip.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "Six Senses Samui",
        "href": "/resort-living/six-senses-samui"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/koh-samui.jpg",
    paragraphs: [
      "This is a Gulf-calendar property. January to September is the easier sea. USM is close; still book the car.",
      "Bophut village is the dinner walk if you leave the hill. Nikki Beach is on the nightlife page, not here."
    ],
    affiliates: [
      stay("Six Senses Samui rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('Six Senses Samui', 'koh-samui'), "/photos/koh-samui.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/resort-living/capella-bangkok",
    title: "Capella Bangkok",
    description: "A river hotel on the Bangkok side of Chao Phraya, in the Capella register.",
    lede: "A river hotel on the Bangkok side of Chao Phraya, in the Capella register.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "Capella Bangkok",
        "href": "/resort-living/capella-bangkok"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/riverside.jpg",
    paragraphs: [
      "Capella sits on the river, not on Sukhumvit. Use it when the room and the river path are the evenings. The palace is about 20 minutes by boat at opening.",
      "The palace is a morning boat. Charoenkrung bars are a short Grab. Do not expect a BTS at the door."
    ],
    affiliates: [
      stay("Capella Bangkok rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('Capella Bangkok', 'bangkok'), "/photos/riverside.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/resort-living/the-siam",
    title: "The Siam",
    description: "An art-deco river compound in Dusit, with its own boat and a city that feels far away.",
    lede: "An art-deco river compound in Dusit, with its own boat and a city that feels far away.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "The Siam",
        "href": "/resort-living/the-siam"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/riverside.jpg",
    paragraphs: [
      "The Siam is north of the usual tourist river hotels. The hotel boat is part of the stay.",
      "Use it for a two-night Bangkok that is not Sukhumvit. Pair with Old City mornings, not Soi 11."
    ],
    affiliates: [
      stay("The Siam rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('The Siam Bangkok', 'bangkok'), "/photos/riverside.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/resort-living/four-seasons-chiang-mai",
    title: "Four Seasons Chiang Mai",
    description: "Rice-terrace pavilions north of the city in the Mae Rim valley.",
    lede: "Rice-terrace pavilions north of the city in the Mae Rim valley. Budget 30 to 45 minutes to the Old City.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "Four Seasons Chiang Mai",
        "href": "/resort-living/four-seasons-chiang-mai"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/chiang-mai.jpg",
    paragraphs: [
      "This is not a moat hotel. Budget 30 to 45 minutes to the Old City. You come for the valley, cooking school, and cool-season mornings.",
      "Smoke season (late February to April) can sit in the valley. Check the air before you lock March."
    ],
    affiliates: [
      stay("Four Seasons Chiang Mai rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('Four Seasons Chiang Mai', 'chiang-mai'), "/photos/chiang-mai.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/resort-living/four-seasons-koh-samui",
    title: "Four Seasons Koh Samui",
    description: "Gulf-facing villas on the northwest coast of Samui, away from Chaweng.",
    lede: "Gulf-facing villas on the northwest coast of Samui, away from Chaweng.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "Four Seasons Koh Samui",
        "href": "/resort-living/four-seasons-koh-samui"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/koh-samui.jpg",
    paragraphs: [
      "Northwest Samui is a different island from Chaweng. You will Grab or drive 30 to 40 minutes for most off-property dinners.",
      "Use the Gulf window (January to September). USM is the arrival. Pair with a Phangan boat only if you want a day off-property."
    ],
    affiliates: [
      stay("Four Seasons Koh Samui rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('Four Seasons Koh Samui', 'koh-samui'), "/photos/koh-samui.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/resort-living/soneva-kiri",
    title: "Soneva Kiri",
    description: "A private-island style stay on Koh Kood in Trat, usually reached by Bangkok flight plus boat or the resort transfer.",
    lede: "A private-island style stay on Koh Kood in Trat, usually reached by Bangkok flight plus boat or the resort transfer.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "Soneva Kiri",
        "href": "/resort-living/soneva-kiri"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/koh-phangan.jpg",
    paragraphs: [
      "Koh Kood is not Samui and not the Andaman circuit. Treat Soneva Kiri as its own trip, not a bolt-on to Phuket. The usual window is November to February.",
      "Transfer logistics are the first thing to book. Budget most of a travel day from Bangkok. Rates without a transfer plan are incomplete."
    ],
    affiliates: [
      stay("Soneva Kiri rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('Soneva Kiri', 'bangkok'), "/photos/koh-phangan.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/resort-living/rayavadee",
    title: "Rayavadee",
    description: "A grove resort in the Railay-Phra Nang pocket, with no road in. Boats only.",
    lede: "A grove resort in the Railay-Phra Nang pocket, with no road in. Boats only.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "Rayavadee",
        "href": "/resort-living/rayavadee"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/krabi.jpg",
    paragraphs: [
      "Rayavadee is Krabi's cliff-bay stay. You arrive by boat, often 15 to 20 minutes from Ao Nang. That is not a bug.",
      "Lock it in the Andaman window (November to April). A storm day here is still beautiful and fully stuck."
    ],
    affiliates: [
      stay("Rayavadee rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('Rayavadee Krabi', 'krabi'), "/photos/krabi.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/resort-living/vie-hotel-bangkok",
    title: "VIE Hotel Bangkok (MGallery)",
    description: "MGallery tower next to Ratchathewi, useful when you want a designed city hotel on the BTS.",
    lede: "MGallery tower next to Ratchathewi, useful when you want a designed city hotel on the BTS.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "VIE Hotel Bangkok (MGallery)",
        "href": "/resort-living/vie-hotel-bangkok"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/siam.jpg",
    paragraphs: [
      "VIE is an MGallery, not a beach villa. Ratchathewi is one stop on the BTS from Siam and two stops from the Airport Rail Link at Phaya Thai.",
      "Use it as a Bangkok night that is nicer than a generic Sukhumvit tower, without going full river compound."
    ],
    affiliates: [
      stay("VIE Hotel Bangkok (MGallery) rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('VIE Hotel Bangkok MGallery', 'bangkok'), "/photos/siam.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/resort-living/veranda-high-chiang-mai",
    title: "Veranda High Chiang Mai (MGallery)",
    description: "MGallery hill hotel above Chiang Mai, for valley views rather than a moat walk.",
    lede: "MGallery hill hotel above Chiang Mai, for valley views rather than a moat walk.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "Veranda High Chiang Mai (MGallery)",
        "href": "/resort-living/veranda-high-chiang-mai"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/nimman.jpg",
    paragraphs: [
      "You will taxi 20 to 30 minutes to the Old City. That is the trade for the view and the pool.",
      "Cool season (November to February) is the point. In hot season, confirm the haze before you book a view room as the trip."
    ],
    affiliates: [
      stay("Veranda High Chiang Mai (MGallery) rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('Veranda High Chiang Mai', 'chiang-mai'), "/photos/nimman.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/resort-living/avista-hideaway-phuket",
    title: "Avista Hideaway Phuket (MGallery)",
    description: "MGallery hideaway on Phuket's west-coast hills, a quieter Andaman stay than Patong.",
    lede: "MGallery hideaway on Phuket's west-coast hills, a quieter Andaman stay than Patong.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Resort living",
        "href": "/interests/resort-living"
      },
      {
        "name": "Avista Hideaway Phuket (MGallery)",
        "href": "/resort-living/avista-hideaway-phuket"
      }
    ],
    facts: [
      {
        "label": "Use",
        "value": "When the hotel is the trip"
      },
      {
        "label": "Book",
        "value": "Trip.com rate search"
      }
    ],
    photo: "/photos/phuket.jpg",
    paragraphs: [
      "This is the MGallery answer when Amanpuri is not the budget. Still treat it as a west-coast monsoon property (November to April).",
      "HKT plus a car, often 45 to 70 minutes. Do not boat on arrival day."
    ],
    affiliates: [
      stay("Avista Hideaway Phuket (MGallery) rates", "Trip.com", "Live rates for this property and nearby peers.", hotelSearchLink('Avista Hideaway Phuket', 'phuket'), "/photos/phuket.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a tour desk?",
        "a": "Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty."
      }
    ],
  },
  {
    path: "/interests/nightlife",
    title: "Nightlife in Thailand",
    description: "Bangkok nightlife is district pockets and rooftops. The south is Phuket and Samui beach clubs. Not dumped on the main city pages.",
    lede: "Bangkok nightlife is a district choice: cocktails on Charoenkrung, dinner bars in Thonglor, one loud soi on Sukhumvit 11, plus Ari and Silom. The south is beach clubs, not those sois.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Nightlife",
        "href": "/interests/nightlife"
      }
    ],
    facts: [
      {
        "label": "Bangkok",
        "value": "District pages, not one crawl list on /bangkok"
      },
      {
        "label": "South",
        "value": "Phuket and Samui beach clubs, by coast"
      }
    ],
    photo: "/photos/nightlife.jpg",
    paragraphs: [
      "Go late, dress the room, and Grab home. Do not rent a scooter at 1:00."
    ],
    portraits: [
      {
        "title": "Charoenkrung and Soi Nana",
        "href": "/interests/nightlife/charoenkrung-soi-nana",
        "photo": "/photos/riverside.jpg"
      },
      {
        "title": "Thonglor and Ekkamai",
        "href": "/interests/nightlife/thonglor-ekkamai",
        "photo": "/photos/sukhumvit.jpg"
      },
      {
        "title": "Sukhumvit Soi 11",
        "href": "/interests/nightlife/sukhumvit-soi-11",
        "photo": "/photos/sukhumvit.jpg"
      },
      {
        "title": "Phuket beach clubs",
        "href": "/interests/nightlife/phuket-beach-clubs",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Samui beach clubs",
        "href": "/interests/nightlife/koh-samui-beach-clubs",
        "photo": "/photos/koh-samui.jpg"
      },
      {
        "title": "Ari and Pradipat",
        "href": "/interests/nightlife/ari-pradipat",
        "photo": "/photos/sukhumvit.jpg"
      },
      {
        "title": "Silom and Sathorn",
        "href": "/interests/nightlife/silom-sathorn",
        "photo": "/photos/siam.jpg"
      },
      {
        "title": "Kamala and Bang Tao",
        "href": "/interests/nightlife/phuket-kamala-bangtao",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Bophut and Lamai",
        "href": "/interests/nightlife/samui-bophut-lamai",
        "photo": "/photos/koh-samui.jpg"
      }
    ],
    faqs: [
      {
        "q": "Why is this not on the Bangkok page?",
        "a": "Because first-time planners need districts and trains first. Bars bury that. Each district has its own page."
      }
    ],
  },
  {
    path: "/interests/nightlife/charoenkrung-soi-nana",
    title: "Charoenkrung and Chinatown Soi Nana",
    description: "Cocktail rooms on and off Charoenkrung, including BKK Social Club, Bamboo Bar, Teens of Thailand, Asia Today, and Tropic City.",
    lede: "Cocktail rooms on and off Charoenkrung, including BKK Social Club, Bamboo Bar, Teens of Thailand, Asia Today, and Tropic City.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Nightlife",
        "href": "/interests/nightlife"
      },
      {
        "name": "Charoenkrung and Chinatown Soi Nana",
        "href": "/interests/nightlife/charoenkrung-soi-nana"
      }
    ],
    facts: [
      {
        "label": "When",
        "value": "After dinner, usually after 21:00"
      },
      {
        "label": "Home",
        "value": "Grab or Bolt, not a new scooter"
      }
    ],
    photo: "/photos/riverside.jpg",
    paragraphs: [
      "This is not Sukhumvit. You come for rooms with a door and a bartender who still has time. Chinatown Soi Nana is a small soi of cocktail bars, not Nana on Sukhumvit.",
      "Stay riverside or on Charoenkrung. Grab to Thonglor after if you insist on a second neighborhood the same night."
    ],
    sections: [
      {
        "id": "rooms",
        "title": "Rooms",
        "paragraphs": [
          "BKK Social Club at Four Seasons: jackets are not required, standards are. Go earlier than you think.",
          "Bamboo Bar at the Mandarin Oriental: the historic room. Book the room, not a surprise walk-in on a Saturday.",
          "Teens of Thailand: a small Soi Nana room, nameless-looking until you know the door.",
          "Asia Today: another Soi Nana room, tighter and later.",
          "Tropic City: tiki and a louder crowd than the two above. Still Charoenkrung, not Walking Street."
        ]
      }
    ],
    affiliates: [
      stay("Stay nearby", "Trip.com", "Sleep in the same district you will Grab home from.", stayAreaLink('charoenkrung'), "/photos/riverside.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a booking?",
        "a": "For the small cocktail rooms, a note on Instagram or a walk-in early is enough most weeknights. Weekends fill. Beach clubs want a daybed or a table if you care about shade."
      }
    ],
  },
  {
    path: "/interests/nightlife/thonglor-ekkamai",
    title: "Thonglor and Ekkamai",
    description: "Bangkok's dinner-and-bar grid: Rabbit Hole, Find The Locker Room, Bar Us, and Mahaniyom.",
    lede: "Bangkok's dinner-and-bar grid: Rabbit Hole, Find The Locker Room, Bar Us, and Mahaniyom.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Nightlife",
        "href": "/interests/nightlife"
      },
      {
        "name": "Thonglor and Ekkamai",
        "href": "/interests/nightlife/thonglor-ekkamai"
      }
    ],
    facts: [
      {
        "label": "When",
        "value": "After dinner, usually after 21:00"
      },
      {
        "label": "Home",
        "value": "Grab or Bolt, not a new scooter"
      }
    ],
    photo: "/photos/sukhumvit.jpg",
    paragraphs: [
      "Thonglor is where many first-timers should have stayed if they like eating. The bars sit after dinner, not instead of it.",
      "BTS Thong Lo and Ekkamai are the rails. After midnight, Grab is faster than walking Sukhumvit Road."
    ],
    sections: [
      {
        "id": "rooms",
        "title": "Rooms",
        "paragraphs": [
          "Rabbit Hole: a serious cocktail room. Go with a reservation if the week is busy.",
          "Find The Locker Room: the joke is the door. The drinks are not a joke.",
          "Bar Us: late, loud enough, still in Thonglor's orbit.",
          "Mahaniyom: dinner that becomes a night. Useful if your group will not agree on a cocktail temple."
        ]
      }
    ],
    affiliates: [
      stay("Stay nearby", "Trip.com", "Sleep in the same district you will Grab home from.", stayAreaLink('thonglor'), "/photos/sukhumvit.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a booking?",
        "a": "For the small cocktail rooms, a note on Instagram or a walk-in early is enough most weeknights. Weekends fill. Beach clubs want a daybed or a table if you care about shade."
      }
    ],
  },
  {
    path: "/interests/nightlife/sukhumvit-soi-11",
    title: "Sukhumvit Soi 11",
    description: "One soi. Havana Social is the room worth naming. The rest is a loud strip you can sample or skip.",
    lede: "One soi. Havana Social is the room worth naming. The rest is a loud strip you can sample or skip.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Nightlife",
        "href": "/interests/nightlife"
      },
      {
        "name": "Sukhumvit Soi 11",
        "href": "/interests/nightlife/sukhumvit-soi-11"
      }
    ],
    facts: [
      {
        "label": "When",
        "value": "After dinner, usually after 21:00"
      },
      {
        "label": "Home",
        "value": "Grab or Bolt, not a new scooter"
      }
    ],
    photo: "/photos/sukhumvit.jpg",
    paragraphs: [
      "Soi 11 is convenient if you already sleep at Nana or Asok. It is not a citywide nightlife plan.",
      "Havana Social is the crafted room. The rest of the soi is beer, clubs, and tourists who landed today. That can be fine. Know which you booked."
    ],
    sections: [
      {
        "id": "rooms",
        "title": "Rooms",
        "paragraphs": [
          "Havana Social: rum and a packed room. Go early or accept a wait.",
          "The rest of Soi 11: walk it once. You will know in ten minutes if it is your night."
        ]
      }
    ],
    affiliates: [
      stay("Stay nearby", "Trip.com", "Sleep in the same district you will Grab home from.", stayAreaLink('sukhumvit'), "/photos/sukhumvit.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a booking?",
        "a": "For the small cocktail rooms, a note on Instagram or a walk-in early is enough most weeknights. Weekends fill. Beach clubs want a daybed or a table if you care about shade."
      }
    ],
  },
  {
    path: "/interests/nightlife/phuket-beach-clubs",
    title: "Phuket beach clubs",
    description: "Day-to-dusk clubs on the Andaman side: Catch Beach Club and Cafe del Mar Phuket.",
    lede: "Day-to-dusk clubs on the Andaman side: Catch Beach Club and Cafe del Mar Phuket.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Nightlife",
        "href": "/interests/nightlife"
      },
      {
        "name": "Phuket beach clubs",
        "href": "/interests/nightlife/phuket-beach-clubs"
      }
    ],
    facts: [
      {
        "label": "When",
        "value": "After dinner, usually after 21:00"
      },
      {
        "label": "Home",
        "value": "Grab or Bolt, not a new scooter"
      }
    ],
    photo: "/photos/phuket.jpg",
    paragraphs: [
      "These are afternoon rooms that become nights. Bring sunscreen and a ride home. Patong Walking Street is a different product and not listed here as a recommendation.",
      "Andaman season (November to April) is when a daybed is the point. In the wet months, check the sky before you prepay."
    ],
    sections: [
      {
        "id": "rooms",
        "title": "Rooms",
        "paragraphs": [
          "Catch Beach Club: west-coast daybed culture. Book if you want a table, not a hunt.",
          "Cafe del Mar Phuket: the franchise sunset. It is what it says."
        ]
      }
    ],
    affiliates: [
      stay("Stay nearby", "Trip.com", "Sleep on the same coast as the club.", stayLink('phuket'), "/photos/phuket.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a booking?",
        "a": "For the small cocktail rooms, a note on Instagram or a walk-in early is enough most weeknights. Weekends fill. Beach clubs want a daybed or a table if you care about shade."
      }
    ],
  },
  {
    path: "/interests/nightlife/koh-samui-beach-clubs",
    title: "Koh Samui beach clubs",
    description: "Gulf-side clubs, with Nikki Beach Koh Samui as the named draw.",
    lede: "Gulf-side clubs, with Nikki Beach Koh Samui as the named draw. Use them for a daybed, not a Bangkok-style crawl.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      },
      {
        "name": "Nightlife",
        "href": "/interests/nightlife"
      },
      {
        "name": "Koh Samui beach clubs",
        "href": "/interests/nightlife/koh-samui-beach-clubs"
      }
    ],
    facts: [
      {
        "label": "When",
        "value": "After dinner, usually after 21:00"
      },
      {
        "label": "Home",
        "value": "Grab or Bolt, not a new scooter"
      }
    ],
    photo: "/photos/koh-samui.jpg",
    paragraphs: [
      "Samui clubs are a daytime-to-sunset plan. Chaweng nightlife after that is a different, louder map.",
      "Use the Gulf window. A booked car back along the hills is safer than a scooter you rented at noon."
    ],
    sections: [
      {
        "id": "rooms",
        "title": "Rooms",
        "paragraphs": [
          "Nikki Beach Koh Samui: the named beach club. Daybeds and a weekend crowd. Book if the brand is why you came."
        ]
      }
    ],
    affiliates: [
      stay("Stay nearby", "Trip.com", "Sleep on the same coast as the club.", stayLink('koh-samui'), "/photos/koh-samui.jpg"),
    ],
    faqs: [
      {
        "q": "Do you need a booking?",
        "a": "For the small cocktail rooms, a note on Instagram or a walk-in early is enough most weeknights. Weekends fill. Beach clubs want a daybed or a table if you care about shade."
      }
    ],
  },
  {
    path: "/destinations/central-and-east",
    title: "Central plains, Hua Hin, and the Trat islands",
    description: "Bangkok add-ons: Ayutthaya ruins, the River Kwai, Hua Hin's train beach, and the Trat islands.",
    lede: "These are add-ons from Bangkok, not the 14-day spine. Ayutthaya is the ruin day. Kanchanaburi needs two nights. Hua Hin is the train beach. Chang and Kood are a different gulf.",
    schema: "Article",
    crumbs: [
      {
        "name": "Destinations",
        "href": "/destinations"
      },
      {
        "name": "Central and east",
        "href": "/destinations/central-and-east"
      }
    ],
    facts: [
      {
        "label": "Ayutthaya",
        "value": "Day trip by train from Krung Thep Aphiwat"
      },
      {
        "label": "Kanchanaburi",
        "value": "Two nights; trains from Thonburi"
      },
      {
        "label": "Hua Hin",
        "value": "About 3 hours south by train"
      },
      {
        "label": "Trat islands",
        "value": "Chang and Kood, November to February"
      }
    ],
    photo: "/photos/ayutthaya.jpg",
    paragraphs: [
      "Use these pages for ruins, a river town, a mainland Gulf beach, or Trat islands. Pattaya is listed only because someone will search it. It is not a recommendation for a first trip."
    ],
    portraits: [
      {
        "title": "Ayutthaya",
        "href": "/ayutthaya",
        "photo": "/photos/ayutthaya.jpg"
      },
      {
        "title": "Kanchanaburi",
        "href": "/kanchanaburi",
        "photo": "/photos/riverside.jpg"
      },
      {
        "title": "Hua Hin",
        "href": "/hua-hin",
        "photo": "/photos/hua-hin.jpg"
      },
      {
        "title": "Koh Chang and Koh Kood",
        "href": "/koh-chang-and-koh-kood",
        "photo": "/photos/pattaya.jpg"
      }
    ],
    affiliates: [
      stay("Ayutthaya stays", "If you overnight", "Most people day-trip from Bangkok.", stayLink('ayutthaya'), "/photos/ayutthaya.jpg"),
      stay("Hua Hin stays", "Gulf beach", "Quieter than Pattaya, still a weekend crowd from Bangkok.", stayLink('hua-hin'), "/photos/hua-hin.jpg"),
      stay("Pattaya stays", "East gulf", "Book it on purpose.", stayLink('pattaya'), "/photos/pattaya.jpg"),
    ],
    faqs: [
      {
        "q": "Is Ayutthaya worth an overnight?",
        "a": "Only if you want dawn at the ruins. A day trip from Bangkok covers the main wats. See the Ayutthaya page for tickets and trains."
      },
      {
        "q": "Hua Hin or the Trat islands?",
        "a": "Hua Hin if you want a train and a mainland beach. Chang and Kood if you want a car ferry and a November to February island week that is not Phuket."
      }
    ],
  },
  ...wave2Pages,
  ...wave3Pages,
  ...wave4Pages,
];

export function getPage(path: string): Page | undefined {
  return pages.find((page) => page.path === path);
}

export function allPages(): Page[] {
  return pages;
}
