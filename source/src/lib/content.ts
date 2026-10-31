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
import { wave6Pages } from './wave6-subguides';
import { wave7Pages } from './wave7-itineraries-parks';
import { wave9Pages } from './wave9-attractions';
import { wave10Pages } from './wave10-food-guides';
import { dishPages } from './dish-pages';
import { WAVE11_INTEREST_PAGES } from './wave11-interests';
import { WAVE12_ITINERARY_PAGES } from './wave12-itineraries';
import { WAVE23_ITINERARY_PAGES } from './wave23-itineraries';
import { applyWave13 } from './wave13';
import { wave21Pages } from './wave21-pages';
import { wave27Pages } from './wave27-compare';
import { wave28FoodHubs } from './wave28-food-hubs';
import { wave29FoodTopics } from './wave29-food-topics';
import { wave22Pages } from './wave22-bangkok';
import { wave22SouthPages } from './wave22-south';
import { wave22GulfNorthPages } from './wave22-gulf-north';
import { wave22SecondaryPages } from './wave22-secondary';
import { routePath } from './site';

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

export interface EditorialCard {
  kicker: string;
  title: string;
  href?: string;
  photo?: string;
  lead?: string;
  bullets: string[];
}

export type Section = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  cards?: EditorialCard[];
  table?: Table;
  affiliates?: Affiliate[];
  lead?: boolean;
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
  published?: string;
  modified?: string;
  parentPill?: { name: string; href: string };
  bookingCta?: {
    stayHref: string;
    stayLabel: string;
    stayNote: string;
    tourHref: string;
    tourLabel: string;
    tourNote: string;
  };
};

function stay(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search stays'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string, cta = 'See tickets'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'klook' };
}

function flights(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search flights'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'flights' };
}

function train(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search trains'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'train' };
}

function transfer(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Book transfer'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'transfer' };
}

const rawPages: Page[] = [
  {
    path: "/",
    title: "Thailand Travel Guide: destinations, monsoon notes, and how to get there",
    description: "Thailand is a Bangkok landing plus a north hub or one south coast. Seasons, trains, ferries, and districts sit here for first-time Western planners.",
    lede: "River temples and late-night street food set the Bangkok landing, then Chiang Mai's mountain wats and Old City lanes. A first route splits north or south: Andaman limestone bays from November to April, or Gulf islands from January to September.",
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
        "value": "30-day visa-free for US, UK, and most EU passports from 15 Sep 2026"
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
      "Bangkok is the usual first city for Western planners who still want hyper-local utility: which BTS gate, which pier, which soi after dark. Fork north or south with the monsoon.",
      "The 7-day and 14-day itineraries are the usual spine. Swap the south coast when the monsoon says so. A 2026 BTS tap is 17 to 62 THB. The Airport Rail Link is about 30 minutes to Phaya Thai. Ticketed sights live on the Attractions hub: Grand Palace 500 THB, Wat Pho 300 THB, Maya Bay park fee 400 THB. Book stays and airport cars on Trip.com. Book island boats and attraction tickets on Klook."
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
        "photo": "/photos/thai-food.jpg"
      },
      {
        "title": "Attractions",
        "href": "/attractions",
        "photo": "/photos/old-city.jpg"
      },
      {
        "title": "Grand Palace",
        "href": "/attractions/grand-palace-and-wat-phra-kaew",
        "photo": "/photos/old-city.jpg"
      },
      {
        "title": "Phi Phi and Maya Bay",
        "href": "/attractions/phi-phi-islands-and-maya-bay",
        "photo": "/photos/krabi.jpg"
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
    description: "Bangkok, Chiang Mai, the Andaman, the Lower Gulf, Trat, and the north corridor. One landing city, then a north hub or one south coast.",
    lede: "Thailand breaks into four distinct regions: Bangkok, the northern valleys around Chiang Mai, the Andaman coast, and the Gulf islands. If you fly south, the travel month decides which coast, because the two seas do not share one dry season.",
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
      "Stay trade-offs live on destination pages, not a country dump. District pages sit under Bangkok and Chiang Mai. The usual first hop after Bangkok is about 70 minutes by air to Chiang Mai, Phuket, or Samui. Ticketed temples, bays, and markets sit on the Attractions hub, not as a dump on each city page."
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
        "photo": "/photos/koh-lanta.jpg"
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
      },
      {
        "title": "Attractions",
        "href": "/attractions",
        "photo": "/photos/old-city.jpg"
      },
      {
        "title": "Grand Palace",
        "href": "/attractions/grand-palace-and-wat-phra-kaew",
        "photo": "/photos/old-city.jpg"
      },
      {
        "title": "Railay and Phra Nang",
        "href": "/attractions/railay-beach-and-phra-nang-cave",
        "photo": "/photos/krabi.jpg"
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
    description: "Northern Thailand: Chiang Mai temples and food, then one fork. Chiang Rai for the White Temple, or Pai for the mountain road.",
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
    chips: [
      "Chiang Mai first",
      "One side trip",
      "SRT 9 and 10"
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
        "photo": "/photos/chiang-rai.jpg"
      },
      {
        "title": "Pai and the loop",
        "href": "/pai",
        "photo": "/photos/pai.jpg"
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
    description: "Duration plans from a 3-day Bangkok stopover to a 21-day north-south loop, plus family and honeymoon spines. Each page names nights, fees, and the monsoon coast.",
    lede: "Known for duration and style plans: 3, 5, 7, 10, 14, and 21 days, plus kids and honeymoon routes. Use 7 or 10 days for a first trip. Keep Andaman and Gulf hops on one sea.",
    schema: "Article",
    crumbs: [
      {
        "name": "Itineraries",
        "href": "/itineraries"
      }
    ],
    facts: [
      {
        "label": "3 to 7 days",
        "value": "Bangkok stopover, north loop, or one coast"
      },
      {
        "label": "10 to 14 days",
        "value": "City, north, and one south coast or lake"
      },
      {
        "label": "2 to 3 weeks",
        "value": "Family, honeymoon, or the 21-day grand loop"
      },
      {
        "label": "Island hops",
        "value": "Andaman Nov-Apr; Gulf Jan-Sep"
      }
    ],
    paragraphs: [
      "Each itinerary names the transport and the booking links. Drop a night before you add a second island group. Fly the long legs: Bangkok to Chiang Mai is about 70 minutes."
    ],
    sections: [
      {
        id: 'all-plans',
        title: 'Every itinerary on this hub',
        paragraphs: [
          'Short city and inland plans: [3 days in Bangkok](/itineraries/3-days-bangkok-stopover), [first week](/itineraries/first-week-7-days), and [5 days Bangkok, Ayutthaya, Kanchanaburi](/itineraries/5-days-bangkok-ayutthaya-kanchanaburi). North plans: [5 days Chiang Mai and Chiang Rai](/itineraries/5-days-chiang-mai-and-chiang-rai) and the [7-day northern loop](/itineraries/7-days-northern-thailand-loop).',
          'Classic and south spines: [classic 10 days](/itineraries/10-days-classic-thailand), [best 14 days](/itineraries/best-14-days), [Bangkok, Khao Sok, and Krabi](/itineraries/10-days-bangkok-khao-sok-krabi), [south islands 10 days](/itineraries/south-islands-10-days), [Phuket, Krabi, and Phi Phi](/itineraries/7-days-phuket-krabi-phi-phi), [Samui and Phangan](/itineraries/7-days-koh-samui-and-koh-phangan), [Andaman 2 weeks](/itineraries/2-weeks-andaman-island-hopping), and [Gulf islands 10 days](/itineraries/10-days-gulf-islands-samui-phangan-tao).',
          'Style and long loops: [2 weeks with kids](/itineraries/2-weeks-thailand-with-kids), [2 weeks honeymoon](/itineraries/2-weeks-thailand-honeymoon), and the [3-week grand route](/itineraries/3-weeks-grand-thailand).',
          'Stopovers and first-timers: [Bangkok food and rooftops](/itineraries/3-days-bangkok-food-and-rooftops), [riverside stopover](/itineraries/3-days-bangkok-riverside-stopover), [Bangkok and Ayutthaya](/itineraries/4-days-bangkok-and-ayutthaya), [8 days Bangkok and Chiang Mai](/itineraries/8-days-bangkok-and-chiang-mai), [9 days Bangkok and Phuket](/itineraries/9-days-bangkok-and-phuket), [first-timer Gulf](/itineraries/10-days-first-timer-gulf), and [12-day first-timer](/itineraries/12-days-thailand-first-timer).',
          'Families, couples, and backpackers: [Bangkok and Hua Hin kids](/itineraries/7-days-bangkok-and-hua-hin-kids), [Chiang Mai and Hua Hin family](/itineraries/10-days-chiang-mai-hua-hin-family), [Samui family slow](/itineraries/14-days-samui-family-slow), [Khao Lak family](/itineraries/10-days-khao-lak-family), [Bangkok couples](/itineraries/5-days-bangkok-couples), [Chiang Mai and Pai couples](/itineraries/7-days-chiang-mai-and-pai-couples), [Railay and Phi Phi couples](/itineraries/8-days-railay-phi-phi-couples), [Chang and Kood](/itineraries/10-days-koh-chang-and-koh-kood), [Andaman honeymoon](/itineraries/12-days-andaman-honeymoon), [backpacker north](/itineraries/10-days-backpacker-north), [backpacker Gulf](/itineraries/14-days-backpacker-gulf), [backpacker Andaman](/itineraries/14-days-backpacker-andaman), and [21-day backpacker](/itineraries/21-days-backpacker-thailand).',
          'Islands, north, central, and Vietnam hops: [Phuket west coast](/itineraries/5-days-phuket-west-coast), [Samui beaches](/itineraries/5-days-koh-samui-beaches), [Krabi and Lanta](/itineraries/7-days-krabi-and-koh-lanta), [Samui and Tao dive](/itineraries/8-days-samui-and-koh-tao-dive), [Lanta and Lipe](/itineraries/10-days-lanta-and-lipe), [Andaman without Phuket](/itineraries/12-days-andaman-without-phuket), [Khao Lak and Similan](/itineraries/7-days-khao-lak-and-similan), [Chiang Mai only](/itineraries/4-days-chiang-mai-only), [Pai and Mae Hong Son](/itineraries/6-days-pai-mae-hong-son), [Mai, Rai, and Pai](/itineraries/8-days-chiang-mai-rai-pai), [slow north loop](/itineraries/10-days-north-loop-slow), [Sukhothai and Chiang Mai](/itineraries/7-days-sukhothai-and-chiang-mai), [Kanchanaburi and Erawan](/itineraries/4-days-kanchanaburi-erawan), [Bangkok and Pattaya](/itineraries/6-days-bangkok-and-pattaya), [central ruins](/itineraries/8-days-central-ruins), [Bangkok and Ho Chi Minh](/itineraries/10-days-bangkok-and-ho-chi-minh), [Chiang Mai and Hanoi](/itineraries/12-days-chiang-mai-and-hanoi), [Thailand Vietnam first-timer](/itineraries/14-days-thailand-vietnam-first-timer), [Bangkok, Da Nang, and Hoi An](/itineraries/7-days-bangkok-da-nang-hoi-an), and [Thailand Vietnam coasts](/itineraries/16-days-thailand-vietnam-coasts).',
        ],
      },
    ],
    portraits: [
      {
        "title": "3 days Bangkok",
        "href": "/itineraries/3-days-bangkok-stopover",
        "photo": "/photos/old-city.jpg"
      },
      {
        "title": "First week",
        "href": "/itineraries/first-week-7-days",
        "photo": "/photos/sukhumvit.jpg"
      },
      {
        "title": "Classic 10 days",
        "href": "/itineraries/10-days-classic-thailand",
        "photo": "/photos/bangkok.jpg"
      },
      {
        "title": "Best 14 days",
        "href": "/itineraries/best-14-days",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "title": "5 days Chiang Mai and Chiang Rai",
        "href": "/itineraries/5-days-chiang-mai-and-chiang-rai",
        "photo": "/photos/chiang-rai.jpg"
      },
      {
        "title": "Northern loop",
        "href": "/itineraries/7-days-northern-thailand-loop",
        "photo": "/photos/chiang-mai.jpg"
      },
      {
        "title": "Bangkok to Kanchanaburi",
        "href": "/itineraries/5-days-bangkok-ayutthaya-kanchanaburi",
        "photo": "/photos/ayutthaya.jpg"
      },
      {
        "title": "Bangkok, Khao Sok, Krabi",
        "href": "/itineraries/10-days-bangkok-khao-sok-krabi",
        "photo": "/photos/khao-sok.jpg"
      },
      {
        "title": "Phuket, Krabi, Phi Phi",
        "href": "/itineraries/7-days-phuket-krabi-phi-phi",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Samui and Phangan",
        "href": "/itineraries/7-days-koh-samui-and-koh-phangan",
        "photo": "/photos/koh-samui.jpg"
      },
      {
        "title": "South islands 10 days",
        "href": "/itineraries/south-islands-10-days",
        "photo": "/photos/krabi.jpg"
      },
      {
        "title": "Andaman 2 weeks",
        "href": "/itineraries/2-weeks-andaman-island-hopping",
        "photo": "/photos/phuket.jpg"
      },
      {
        "title": "Gulf islands 10 days",
        "href": "/itineraries/10-days-gulf-islands-samui-phangan-tao",
        "photo": "/photos/koh-phangan.jpg"
      },
      {
        "title": "2 weeks with kids",
        "href": "/itineraries/2-weeks-thailand-with-kids",
        "photo": "/photos/kata-and-karon.jpg"
      },
      {
        "title": "2 weeks honeymoon",
        "href": "/itineraries/2-weeks-thailand-honeymoon",
        "photo": "/photos/resort.jpg"
      },
      {
        "title": "3 weeks grand route",
        "href": "/itineraries/3-weeks-grand-thailand",
        "photo": "/photos/bangkok.jpg"
      }
    ],
    faqs: [
      {
        "q": "Can you see Phuket and Samui in one trip?",
        "a": "Not in a first week. In 14 days you still pick one coast unless you enjoy airport days. The 10-day south plan stays on one sea."
      },
      {
        "q": "Which plan fits 3 days versus 3 weeks?",
        "a": "Use the Bangkok stopover for 72 hours. Use 7 or 10 days for a first trip. Use the 21-day grand route only if you can fly south once and keep Andaman and Gulf islands on one sea."
      }
    ],
  },
  {
    path: "/plan",
    title: "Plan a trip to Thailand",
    description: "Season, visas and TDAC, trains, eSIM, money, and how you move in Bangkok: the lock-ins that decide a first trip.",
    lede: "Thailand runs two separate island monsoon calendars, not one winter. If you land on a US, UK, or most EU passport, the tourist visa-free stamp is 30 days from 15 September 2026, and you submit TDAC before the flight.",
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
        "value": "30-day visa-free plus TDAC from 15 Sep 2026"
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
      "Season decides the south coast. Visa and TDAC decide the flight. Money, a SIM, and the monsoon decide the pack list. A 2026 BTS tap is 17 to 62 THB; keep that as the city baseline."
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
    description: "Hops between Bangkok, the islands, Khao Sok, the north, Ayutthaya, and Kanchanaburi. Fly when the day matters. Sleep on the Chiang Mai train. Use a ferry only on a morning sea.",
    lede: "Fly the regional hops from Suvarnabhumi (BKK) or Don Mueang (DMK) when the day matters. The overnight Chiang Mai sleeper from Krung Thep Aphiwat is the useful night if you want the ride. In the south, morning ferries beat late arrivals.",
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
      "The long south and north legs are flights. Return trips use the same hop. Each route lists time, mode, and the booking link."
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
    description: "Activity and travel-style pages kept off city guides: diving, massage, beaches, temples, Muay Thai, markets, family and honeymoon trips, solo first weeks, festivals, nightlife, and resorts.",
    lede: "Thailand travel styles are known for one focused page each: a Koh Tao dive week, a dawn wat circuit, a Chatuchak Saturday, or a late soi. Pick the activity first, then the city that holds it.",
    schema: "Article",
    crumbs: [
      {
        "name": "Interests",
        "href": "/interests"
      }
    ],
    facts: [
      {
        "label": "Activity guides",
        "value": "Diving, massage, beaches, temples, Muay Thai, markets"
      },
      {
        "label": "Who you travel with",
        "value": "Family, couples, solo first-timers, festival weeks"
      },
      {
        "label": "Nightlife",
        "value": "District pages, not a dump on Bangkok"
      },
      {
        "label": "Resorts and food",
        "value": "Named hotels; Thai food cluster; 80 to 150 THB late Grab"
      }
    ],
    paragraphs: [
      "These guides are for Western planners who pick a travel style first, then the city: a Koh Tao dive week, a dawn wat circuit, a Chatuchak Saturday, a family beach, or a late soi. Couples, families, first-timers, and festival weeks each get one focused page. A late Grab across the river is often 80 to 150 THB in 2026."
    ],
    sections: [
      {
        id: "activity-guides",
        title: "Activity and travel-style guides",
        bullets: [
          "**[Diving](/interests/diving-and-snorkeling):** Koh Tao PADI weeks and Similan boats",
          "**[Massage](/interests/thai-massage-and-spas):** Wat Pho tables and day spas",
          "**[Beaches](/interests/beaches-and-island-hopping):** the three-coast calendar",
          "**[Temples](/interests/temples-and-history):** royal wats and historical parks",
          "**[Muay Thai](/interests/muay-thai-and-fitness-camps):** stadium cards and Soi Ta-iad camps",
          "**[Markets](/interests/markets-and-shopping):** Chatuchak, walking streets, and VAT refunds",
        ],
      },
      {
        id: "who-you-travel-with",
        title: "Family, couples, solo weeks, and festival dates",
        bullets: [
          "**[Family travel](/interests/family-travel-with-kids):** car seats and shallow beaches",
          "**[Honeymoon](/interests/honeymoon-and-couples):** a 3-4-5 river-jungle-villa split",
          "**[Solo and first-time](/interests/solo-and-first-time-travel):** Grab, BTS tap-in, and scams to skip",
          "**[Festivals](/interests/festivals-songkran-and-loy-krathong):** Songkran, Loy Krathong, Yi Peng, and the Phuket Vegetarian Festival",
        ],
      },
      {
        id: "nightlife-and-resorts",
        title: "Nightlife districts and named resorts",
        bullets: [
          "**Bangkok:** [Charoenkrung and Soi Nana](/interests/nightlife/charoenkrung-soi-nana), [Thonglor and Ekkamai](/interests/nightlife/thonglor-ekkamai), [Sukhumvit Soi 11](/interests/nightlife/sukhumvit-soi-11), [Ari and Pradipat](/interests/nightlife/ari-pradipat), and [Silom and Sathorn](/interests/nightlife/silom-sathorn). The [nightlife hub](/interests/nightlife) is the map.",
          "**Phuket:** [Phuket beach clubs](/interests/nightlife/phuket-beach-clubs) and [Kamala and Bang Tao](/interests/nightlife/phuket-kamala-bangtao).",
          "**Koh Samui:** [Samui beach clubs](/interests/nightlife/koh-samui-beach-clubs) and [Bophut and Lamai](/interests/nightlife/samui-bophut-lamai).",
          "**Resort living:** named hotels sit under [resort living](/interests/resort-living).",
          "**Thai food:** stalls stay on [Thai food](/thai-food).",
          "**Attractions:** ticketed sights stay on [Attractions](/attractions).",
        ],
      },
    ],
    portraits: [
      { title: "Diving and snorkeling", href: "/interests/diving-and-snorkeling", photo: "/photos/koh-tao.jpg" },
      { title: "Thai massage and spas", href: "/interests/thai-massage-and-spas", photo: "/photos/old-city.jpg" },
      { title: "Beaches and island hopping", href: "/interests/beaches-and-island-hopping", photo: "/photos/phuket.jpg" },
      { title: "Temples and history", href: "/interests/temples-and-history", photo: "/photos/old-city.jpg" },
      { title: "Muay Thai and camps", href: "/interests/muay-thai-and-fitness-camps", photo: "/photos/nightlife.jpg" },
      { title: "Markets and shopping", href: "/interests/markets-and-shopping", photo: "/photos/bangkok.jpg" },
      { title: "Family travel", href: "/interests/family-travel-with-kids", photo: "/photos/kata-and-karon.jpg" },
      { title: "Honeymoon and couples", href: "/interests/honeymoon-and-couples", photo: "/photos/resort.jpg" },
      { title: "Solo and first-time", href: "/interests/solo-and-first-time-travel", photo: "/photos/bts.jpg" },
      { title: "Songkran and Loy Krathong", href: "/interests/festivals-songkran-and-loy-krathong", photo: "/photos/chiang-mai.jpg" },
      { title: "Nightlife", href: "/interests/nightlife", photo: "/photos/nightlife.jpg" },
      { title: "Charoenkrung nights", href: "/interests/nightlife/charoenkrung-soi-nana", photo: "/photos/riverside.jpg" },
      { title: "Thonglor nights", href: "/interests/nightlife/thonglor-ekkamai", photo: "/photos/sukhumvit.jpg" },
      { title: "Sukhumvit Soi 11", href: "/interests/nightlife/sukhumvit-soi-11", photo: "/photos/sukhumvit.jpg" },
      { title: "Ari nights", href: "/interests/nightlife/ari-pradipat", photo: "/photos/ari.jpg" },
      { title: "Silom and Sathorn", href: "/interests/nightlife/silom-sathorn", photo: "/photos/siam.jpg" },
      { title: "Phuket beach clubs", href: "/interests/nightlife/phuket-beach-clubs", photo: "/photos/phuket.jpg" },
      { title: "Kamala and Bang Tao", href: "/interests/nightlife/phuket-kamala-bangtao", photo: "/photos/nightlife.jpg" },
      { title: "Samui beach clubs", href: "/interests/nightlife/koh-samui-beach-clubs", photo: "/photos/koh-samui.jpg" },
      { title: "Bophut and Lamai", href: "/interests/nightlife/samui-bophut-lamai", photo: "/photos/koh-samui.jpg" },
      { title: "Resort living", href: "/interests/resort-living", photo: "/photos/resort.jpg" },
    ],
    faqs: [
      {
        "q": "Where is Bangkok nightlife documented?",
        "a": "Under /interests/nightlife, split by district. Thai food is under /thai-food. Ticketed temples, bays, and markets sit on /attractions. New activity guides sit under /interests. The main Bangkok page stays districts and transport."
      },
      {
        "q": "Which interest page should a first trip open?",
        "a": "Solo and first-time travel for apps and scams, then one activity: temples, beaches, or food. Do not open every interest URL before you pick a coast."
      }
    ],
  },
  {
    path: "/about",
    title: "About Thailand TravelGuide & Beyond Guide Network",
    description: "Thailand TravelGuide is an independent Southeast Asia travel publication by Beyond Guide Network, alongside sister publication Vietnam TravelGuide.",
    lede: "Thailand TravelGuide is an independent Southeast Asia travel reference published by Beyond Guide Network, built for travelers who want verified neighborhood splits, monsoon timing, and honest hotel curation.",
    schema: "Article",
    crumbs: [
      {
        "name": "About",
        "href": "/about"
      }
    ],
    facts: [
      {
        "label": "Publisher",
        "value": "Beyond Guide Network"
      },
      {
        "label": "Sister Guide",
        "value": "Vietnam TravelGuide (vietnam-travelguide.com)"
      },
      {
        "label": "Editorial Rule",
        "value": "Rankings and ratings are never for sale"
      }
    ],
    paragraphs: [
      "Thailand TravelGuide (thailand-travelguide.com) is published by **Beyond Guide Network**, an independent travel publishing group operating across Southeast Asia alongside our sister publication **Vietnam TravelGuide** (vietnam-travelguide.com). Our editors live and travel along the corridors we cover, from Bangkok BTS neighborhoods and Lanna mountain towns to the Andaman and Lower Gulf archipelagos.",
      "Every guide is structured around the real decisions that shape a trip: which coast fits your exact month, whether a 70-minute domestic flight beats the overnight SRT sleeper, and which neighborhood or beach zone matches your pace. Read our [Editorial Standards and Ratings](/about/ratings) for how our 1-to-5 dot scale works."
    ],
    sections: [
      {
        id: "who-we-are",
        title: "Who We Are: Beyond Guide Network",
        paragraphs: [
          "Beyond Guide Network builds structured, field-verified country guides for independent travelers across Southeast Asia. Rather than generic aggregator lists of hundreds of unvetted listings, each publication focuses on clear regional geography, honest transit math, and curated neighborhood and resort breakdowns."
        ],
        bullets: [
          "**Thailand TravelGuide (thailand-travelguide.com):** Covers all five Thai regions across 175+ guides, including Bangkok districts, Northern Highlands, Andaman Coast, Gulf of Thailand Islands, and Eastern Seaboard and Isan.",
          "**Vietnam TravelGuide (vietnam-travelguide.com):** Our sister publication covering Hanoi, Ho Chi Minh City, Da Nang, Hoi An, Phu Quoc, Ha Long Bay, Ninh Binh, regional Vietnamese cuisine, and luxury coastal resorts.",
          "**Cross-Border Planning:** Because many travelers combine Bangkok, Chiang Mai, or Phuket with Hanoi, Saigon, or Da Nang on a single two-to-three-week itinerary, both publications cross-reference sister cities, seasonal monsoon flips, and sub-two-hour nonstop regional flights."
        ]
      },
      {
        id: "editorial-independence",
        title: "Editorial Independence & How We Are Funded",
        paragraphs: [
          "Editorial integrity is our core asset. Every destination ranking, 1-to-5 dot rating, neighborhood comparison, luxury resort shortlist, and street-food stall recommendation is chosen strictly by our editorial team."
        ],
        bullets: [
          "**Never for sale:** Hotels, resorts, tour operators, and restaurants cannot pay to be included, upgraded, or positively reviewed on Thailand TravelGuide.",
          "**Reader-supported partner links:** When you book a hotel, flight, train, airport transfer, or tour through our outbound links to Trip.com or Klook, Beyond Guide Network may earn an affiliate commission at no extra cost to you.",
          "**Strict separation:** Commercial links are clearly labeled in booking panels and partner rows, and they never alter the order or verdict of our editorial recommendations. See our [Privacy and Affiliate Disclosure](/privacy) for full details."
        ]
      },
      {
        id: "field-verification",
        title: "Field Verification, Pricing & Photography",
        paragraphs: [
          "Southeast Asia changes fast. New MRT lines open, national park marine closures shift, and pier schedules change between the dry season and monsoon months."
        ],
        bullets: [
          "**On-the-ground logistics:** We verify airport-to-beach transfer times, BTS and MRT interchanges, SRT sleeper berths, and Lomprayah or Andaman ferry windows in 2026 Thai baht (THB).",
          "**Curated Flagship Resorts:** On our [Resort Living](/interests/resort-living) pages, we intentionally curate only the top 2 to 5 flagship five-star resorts per destination and contrast their exact beach zones and transfer realities.",
          "**Licensed Photography:** Original editorial text and design are copyright Beyond Guide Network. Third-party photographs from Wikimedia Commons and contributors are individually verified and credited under their respective Creative Commons licenses."
        ]
      }
    ],
    faqs: [
      {
        "q": "Can a hotel, restaurant, or tour company pay to be featured?",
        "a": "No. Beyond Guide Network does not accept paid placements, sponsored rankings, or undisclosed press trips. Every venue and resort is selected by editors on merit."
      },
      {
        "q": "How are Thailand TravelGuide and Vietnam TravelGuide connected?",
        "a": "Both sites are owned and edited by Beyond Guide Network, sharing the same cartographic standards, 1-to-5 dot rating system, and strict editorial independence."
      }
    ],
  },
  {
    path: "/about/ratings",
    title: "Editorial Standards & 1-to-5 Dot Ratings",
    description: "How Beyond Guide Network rates Thailand destinations, attractions, luxury resorts, and street-food stalls on our 1-to-5 editorial dot scale.",
    lede: "Every destination, attraction, and flagship resort on Thailand TravelGuide is evaluated on the Beyond Guide Network 1-to-5 dot scale, measuring how much a stop changes a real trip.",
    schema: "Article",
    crumbs: [
      {
        "name": "About",
        "href": "/about"
      },
      {
        "name": "Editorial Standards & Ratings",
        "href": "/about/ratings"
      }
    ],
    facts: [
      {
        "label": "Rating Scale",
        "value": "1 to 5 editorial dots (●●●●●)"
      },
      {
        "label": "Resort Cap",
        "value": "Top 2 to 5 flagship resorts per destination"
      },
      {
        "label": "Audit Cycle",
        "value": "Continuous 2026 seasonal and fare verification"
      }
    ],
    paragraphs: [
      "Travelers do not need a directory of 500 unranked things to do. They need to know whether a temple, island, or night market is worth re-routing a flight for, or only worth a 45-minute walk if they are already sleeping nearby.",
      "Across **Thailand TravelGuide** and our sister publication **Vietnam TravelGuide**, **Beyond Guide Network** applies a unified 1-to-5 editorial dot scale (●●●●●) and star equivalence to every ranked destination and attraction."
    ],
    sections: [
      {
        id: "dot-scale",
        title: "The 1-to-5 Editorial Dot Scale",
        paragraphs: [
          "Our ratings measure trip impact, geographic uniqueness, and time-to-reward ratio rather than generic popularity."
        ],
        bullets: [
          "**5 Dots (●●●●● / Flagship Essential):** A landmark destination or sight worth building a Thailand itinerary around, such as Bangkok river wats, Chiang Mai Old City, Phang Nga Bay, or Khao Sok Cheow Lan Lake.",
          "**4 Dots (●●●●○ / Regional Highlight):** An outstanding stop worth a dedicated full day or two-night detour when you are in that region, such as Ayutthaya island ruins, Koh Tao coral bays, or Doi Suthep at dawn.",
          "**3 Dots (●●●○○ / Strong Corridor Stop):** A rewarding neighborhood, market, or beach when you are already based nearby or passing along that rail or ferry corridor.",
          "**2 Dots (●●○○○ / Specialist or Quick Stop):** Worth 45 to 90 minutes if you have a specific interest or a rainy afternoon, but not worth crossing town in rush-hour traffic.",
          "**1 Dot (●○○○○ / Regional Completeness):** Included so travelers understand what a transit hub, pier town, or overhyped strip actually is before booking a room there."
        ]
      },
      {
        id: "resort-and-nightlife-curation",
        title: "Luxury Resort Living & Nightlife Curation",
        paragraphs: [
          "On our [Resort Living](/interests/resort-living) and [Nightlife](/interests/nightlife) hubs, we reject pay-to-play directories in favor of tight, opinionated comparisons."
        ],
        bullets: [
          "**Top 2 to 5 Flagships per Destination:** Each destination section in Resort Living ranks strictly the two to five most accomplished ultra-luxury and design resorts in that area, such as Capella and Mandarin Oriental on the Chao Phraya, or Amanpuri and Trisara on Phuket west coast.",
          "**Beach and Zone Contrast:** Every resort entry explains the physical setting (private headland cove vs. walkable beach strip, longtail-only access vs. airport car transfer) and current 2026 nightly THB ranges.",
          "**Verified Nightlife Districts:** Nightlife guides group venues by walkable corridor (such as Charoenkrung Soi Nana, Thonglor Soi 55, or Bang Tao beach clubs) with realistic dress codes, cover charges, and last-train or Grab logistics."
        ]
      },
      {
        id: "continuous-audits",
        title: "Continuous Accuracy & Seasonal Audits",
        paragraphs: [
          "Every route, attraction card, and food guide is audited against current Thai baht (THB) admission fees, Fine Arts Department and Department of National Parks rules, and seasonal monsoon calendars."
        ],
        bullets: [
          "**Monsoon Honesty:** We explicitly flag when the Andaman Sea (May to October) or the Lower Gulf (October to mid-December) faces rough swells or marine park closures.",
          "**Street Food & Market Verification:** Our [Thai Food](/thai-food) guides pair each regional dish with Thai script names and verified street stalls, market alleys, and operating hours."
        ]
      }
    ],
    faqs: [
      {
        "q": "Why do editor ratings differ from crowd review averages?",
        "a": "Crowd review sites often rate a routine suburban mall higher than a UNESCO ruin because of air-conditioning. Our editor ratings weigh cultural depth, sense of place, and whether a stop justifies your limited vacation days."
      },
      {
        "q": "How do I report an updated ticket fee or timetable change?",
        "a": "We review timetable and ticket-fee updates continuously across the Beyond Guide Network. Check the official SRT, BTS, or National Park desk 48 hours before departure on holiday weeks."
      }
    ],
  },
  {
    path: "/privacy",
    title: "Privacy Policy, Analytics & Affiliate Disclosure",
    description: "How Beyond Guide Network handles Google Analytics 4 (G-XWN3TGDF1V), Trip.com and Klook affiliate links, cookies, and copyright on Thailand TravelGuide.",
    lede: "Thailand TravelGuide is a static publication operated by Beyond Guide Network. This page explains our anonymous analytics, affiliate partner links, Creative Commons photo credits, and terms of use.",
    schema: "Article",
    crumbs: [
      {
        "name": "Privacy & Terms",
        "href": "/privacy"
      }
    ],
    facts: [
      {
        "label": "Operator",
        "value": "Beyond Guide Network"
      },
      {
        "label": "Analytics",
        "value": "Google Analytics 4 (aggregate traffic)"
      },
      {
        "label": "Booking Partners",
        "value": "Trip.com and Klook (Travelpayouts)"
      }
    ],
    paragraphs: [
      "Thailand TravelGuide (thailand-travelguide.com) is owned and operated by **Beyond Guide Network** alongside our sister publication **Vietnam TravelGuide** (vietnam-travelguide.com). We do not require user accounts, we do not collect or sell personal email lists, and we do not run intrusive pop-up ad networks.",
      "Below is our complete disclosure covering analytics, outbound affiliate partner links, third-party photography licenses, and copyright terms."
    ],
    sections: [
      {
        id: "analytics",
        title: "Analytics & Technical Logs",
        paragraphs: [
          "We use Google Analytics 4 (`G-XWN3TGDF1V`) to understand aggregate reader traffic, such as which destination guides, regional maps, and seasonal planning pages are most useful."
        ],
        bullets: [
          "**Aggregate Measurement:** Google Analytics records standard browser metadata, referring pages, and approximate region. We do not combine analytics with personal identity or sell visitor data to third parties.",
          "**Static Hosting Logs:** Our static hosting provider (a CDN) logs standard HTTP request headers and IP addresses for security and DDoS mitigation."
        ]
      },
      {
        id: "booking",
        title: "Affiliate Disclosure (Trip.com & Klook)",
        paragraphs: [
          "Thailand TravelGuide is reader-supported. Several booking search boxes, hotel links, flight links, and activity buttons on this site are affiliate links to **Trip.com** and **Klook** (including via Travelpayouts)."
        ],
        bullets: [
          "**No Extra Cost to You:** Clicking a partner link or using our hotel search form never increases the room rate, airfare, or ticket price you pay on Trip.com or Klook.",
          "**Partner Cookies:** When you click out to Trip.com or Klook, those external platforms may set their own affiliate attribution cookies under their respective privacy policies to credit Beyond Guide Network for the referral.",
          "**Editorial Independence:** Affiliate partnerships never influence which neighborhoods, hotels, resorts, or attractions we recommend. Read our [Editorial Standards and Ratings](/about/ratings) for our full policy."
        ]
      },
      {
        id: "photos",
        title: "Photography Credits & Terms of Use",
        paragraphs: [
          "Original editorial copy, cartography, and page layouts on thailand-travelguide.com are © 2026 Beyond Guide Network. All rights reserved."
        ],
        bullets: [
          "**Creative Commons Photography:** Third-party photographs sourced from Wikimedia Commons and individual photographers remain under their stated Creative Commons licenses (such as CC BY 2.0, CC BY-SA 3.0, or CC BY-SA 4.0) with full creator and license attribution in our site metadata.",
          "**Travel Planning Disclaimer:** Timetables, visa rules, Thailand Digital Arrival Card (TDAC) procedures, national park fees, and THB fare ranges are verified for 2026 planning but can change without notice. Always confirm visa and safety rules with official Thai authorities before departure."
        ]
      }
    ],
    faqs: [
      {
        "q": "Do you sell personal data or run programmatic display ads?",
        "a": "No. Beyond Guide Network never sells personal information and does not run third-party programmatic display ad auctions on Thailand TravelGuide."
      },
      {
        "q": "What happens when I use the Book Your Stay hotel search box?",
        "a": "Selecting a destination and dates in our search box opens Trip.com in a new tab with your chosen city, dates, and guest count pre-filled so you can compare live rates directly on Trip.com."
      }
    ],
  },
  {
    path: "/bangkok",
    title: "Bangkok",
    description: "Bangkok first-trip guide: BTS and MRT, two airports, Sukhumvit vs riverside stays, and the next hop to Chiang Mai, Phuket, or Samui.",
    lede: "Bangkok is Thailand's capital, known for gilded temples on the Chao Phraya, street food past midnight and rooftop bars above the BTS. Give it two or three nights. Sleep on Sukhumvit or near Siam for the BTS, or by the river for temples and slower evenings.",
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
      "Siam and Silom",
      "Ari"
    ],
    photo: "/photos/bangkok.jpg",
    geo: { lat: 13.756, lon: 100.502, containedIn: "Central Thailand" },
    paragraphs: [
      "Bangkok is the capital you land in: Grand Palace and river wats by day, BTS hotel strips at night. Give it two or three nights. Eat in Thonglor or Chinatown. Nightlife lives on its own pages.",
      "From BKK, the [Airport Rail Link, Grab, and BTS tap](/plan/grab-and-bts) is the cheap, predictable move. Book a Trip.com airport car if you land late with luggage. The usual next hops are [Bangkok to Chiang Mai](/get-there/bangkok-to-chiang-mai), [Bangkok to Phuket](/get-there/bangkok-to-phuket), or [Bangkok to Koh Samui](/get-there/bangkok-to-koh-samui). Use the [7-day](/itineraries/first-week-7-days) or [14-day itinerary](/itineraries/best-14-days) once you pick a fork."
    ],
    sections: [
      {
        "id": "districts",
        "title": "Districts",
        "paragraphs": [
          "Sukhumvit and Thonglor: hotels, BTS Nana to Ekkamai, and most first-timer stays.",
          "Riverside and Charoenkrung: the river, warehouse bars, and the Chinatown edge.",
          "Old City and Rattanakosin: palace, wat circuit, and heat. Go early.",
          "Siam and Silom: malls, BTS interchanges, and the Sala Daeng MRT link.",
          "Phrom Phong and Thong Lo: Japanese dining, EmDistrict, and Soi 55 nights.",
          "Ari: cafes and neighbourhood kitchens 15 minutes north of Siam."
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
        "title": "Phrom Phong and Thong Lo",
        "href": "/bangkok/phrom-phong-and-thong-lo",
        "photo": "/photos/phrom-phong-and-thong-lo.jpg"
      },
      {
        "title": "Silom and Sathorn",
        "href": "/bangkok/silom-and-sathorn",
        "photo": "/photos/silom-and-sathorn.jpg"
      },
      {
        "title": "Ari",
        "href": "/bangkok/ari",
        "photo": "/photos/ari.jpg"
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
    lede: "First-timers usually sleep on Sukhumvit's Skytrain spine, from Nana and Asok through Phrom Phong to Thonglor. Book Asok or Phrom Phong if you want a calm walk to the BTS. The sois page maps the exits.",
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
    chips: [
      "BTS hotel strip",
      "Thonglor dinner",
      "First-timer default"
    ],
    photo: "/photos/sukhumvit.jpg",
    geo: { lat: 13.736, lon: 100.56, containedIn: "Bangkok" },
    paragraphs: [
      "This is hotels, skytrain, and dinner on one line. Asok and Phrom Phong are the easiest pairing. Thonglor is one stop further. Nana is louder and cheaper. A 2026 BTS tap along this line is 17 to 47 THB.",
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
    description: "River hotels, warehouse bars, and the Chinatown edge sit along Charoenkrung. BTS Saphan Taksin is a short Grab or boat ride, not a walk.",
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
    chips: [
      "Chao Phraya",
      "Charoenkrung bars",
      "Hotel docks"
    ],
    photo: "/photos/riverside.jpg",
    geo: { lat: 13.73, lon: 100.513, containedIn: "Bangkok" },
    paragraphs: [
      "This is the river side of Bangkok: hotel docks, warehouse bars, and Chinatown sois. Charoenkrung is the old international road. Capella Bangkok and The Siam are on the resort-living pages. A Grab to Saphan Taksin is often 80 to 150 THB in 2026.",
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
    description: "Grand Palace, Wat Pho, and Wat Arun on Rattanakosin Island. It is a temple morning, not a hotel base.",
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
        "value": "Grand Palace at opening"
      },
      {
        "label": "Pair",
        "value": "Wat Pho next, Wat Arun by ferry"
      },
      {
        "label": "Stay",
        "value": "Only if temples are the whole stay"
      }
    ],
    chips: [
      "Grand Palace",
      "Wat Pho",
      "Temple morning"
    ],
    photo: "/photos/old-city.jpg",
    geo: { lat: 13.75, lon: 100.492, containedIn: "Bangkok" },
    paragraphs: [
      "Come for the palace and the river wats, then leave. In 2026 the Grand Palace is 500 THB for foreign visitors and Wat Pho is 300 THB. Afternoon heat empties the lanes and fills the taxis. Eat on Tha Tien or go back to Sukhumvit for dinner.",
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
        "value": "Siam interchange; Sala Daeng to MRT Si Lom"
      },
      {
        "label": "Use",
        "value": "Malls, ARL link at Phaya Thai, park walks"
      },
      {
        "label": "Stay",
        "value": "Central, less character than Thonglor"
      }
    ],
    chips: [
      "BTS interchange",
      "Malls",
      "Lumphini"
    ],
    photo: "/photos/siam.jpg",
    geo: { lat: 13.746, lon: 100.534, containedIn: "Bangkok" },
    paragraphs: [
      "Siam is the BTS interchange for the Sukhumvit and Silom lines, plus air-con malls. The Airport Rail Link ends at Phaya Thai. Change there to the BTS and ride two stops to Siam. The ARL from Suvarnabhumi is about 30 minutes. Stay one night if you land late and have not picked a neighborhood yet. Stay at Silom if you have meetings or want Lumphini at dawn."
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
    description: "Chiang Mai first-trip guide: Old City wats, Nimman, the 70-minute flight or 12-hour sleeper from Bangkok, and the Pai van.",
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
      "Sunday Walking Street fills Ratchadamnoen. Saturday is Wua Lai, south of the moat. Arrive on the [Bangkok to Chiang Mai flight or sleeper](/get-there/bangkok-to-chiang-mai). Add [Pai over Route 1095](/get-there/chiang-mai-to-pai) only if you have two extra nights. City plates sit on the [Chiang Mai food guide](/thai-food/chiang-mai)."
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
        "title": "Doi Inthanon",
        "href": "/chiang-mai/doi-inthanon",
        "photo": "/photos/northern.jpg"
      },
      {
        "title": "Northern corridor",
        "href": "/destinations/northern-thailand",
        "photo": "/photos/northern.jpg"
      }
    ],
    affiliates: [
      stay("Chiang Mai stays", "Citywide", "Choose the Old City if you want to walk to morning temples, or Nimman for specialty coffee and evening dining.", stayLink('chiang-mai'), "/photos/chiang-mai.jpg"),
      stay("Old City hotels", "Inside the moat", "Temple mornings, tuk-tuk nights.", stayAreaLink('chiang-mai-old-city'), "/photos/chiang-mai-old-city.jpg"),
      klook("Cooking and day trips", "Tours", "Doi Inthanon, elephant ethics vary; read the operator page.", klookTours('Chiang Mai tours'), "/photos/northern.jpg"),
    ],
    faqs: [
      {
        "q": "Fly or train from Bangkok?",
        "a": "Fly if you land at noon and want dinner in the Old City. Take train 9 if you want a sleeper and a morning arrival at Chiang Mai station. Train 10 is the southbound return."
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
        "label": "Stay",
        "value": "Guesthouses and a few quiet hotels"
      }
    ],
    chips: [
      "Moat square",
      "Dawn wats",
      "Sunday market"
    ],
    photo: "/photos/chiang-mai-old-city.jpg",
    geo: { lat: 18.788, lon: 98.993, containedIn: "Chiang Mai" },
    paragraphs: [
      "The Old City is a moated square of Lanna wats, not a nightlife grid. The moat loop is about 6.5 km, closer to 75 to 90 minutes on foot. Temple booths often ask 20 to 50 THB in cash. Scooters cut the corners. Sidewalks vanish."
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
    description: "Chiang Mai's cafe and dinner district west of the moat, for later nights and a shorter walk to Maya.",
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
    chips: [
      "Cafes",
      "Dinner sois",
      "West of the moat"
    ],
    photo: "/photos/nimman.jpg",
    geo: { lat: 18.8, lon: 98.968, containedIn: "Chiang Mai" },
    paragraphs: [
      "Come for dinner, coffee, and a younger night, not temple mornings. Maya and One Nimman are the mall anchors. A 2026 Grab to the moat is often 80 to 120 THB and four to seven minutes."
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
    description: "Phuket first-trip guide: west-coast beaches, the 80-minute Bangkok flight, morning boats to Phi Phi and Krabi, and where not to base.",
    lede: "Phuket is Thailand's biggest island, known for long west-coast beaches, sunset viewpoints and boat days to Phang Nga Bay and Phi Phi. Base yourself in Kata, Kamala or Bang Tao, and keep Patong for a night out. November to April brings the calmest sea.",
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
      "West-coast beaches"
    ],
    photo: "/photos/phuket.jpg",
    geo: { lat: 7.88, lon: 98.392, containedIn: "Andaman Coast" },
    paragraphs: [
      "Phuket is known for west-coast beaches and a huge airport, not for one pretty town. Kamala, Surin, and Bang Tao are calmer than Patong. Kata and Karon sit in the middle. Old Phuket Town is a morning of sino-portuguese streets if you need a non-beach day.",
      "Fly [Bangkok to Phuket](/get-there/bangkok-to-phuket) in about 80 minutes, then a 45 to 90 minute beach transfer. Morning boats to [Krabi and Koh Phi Phi](/get-there/phuket-to-krabi-phi-phi) are the Andaman hop. Beach clubs live on the [Phuket nightlife page](/interests/nightlife/phuket-beach-clubs). Amanpuri and Trisara sit under [resort living](/interests/resort-living)."
    ],
    portraits: [
      {
        "title": "Kata and Karon",
        "href": "/phuket/kata-and-karon",
        "photo": "/photos/kata-and-karon.jpg"
      },
      {
        "title": "Kamala and Surin",
        "href": "/phuket/kamala-and-surin",
        "photo": "/photos/kamala-and-surin.jpg"
      },
      {
        "title": "Rawai and Nai Harn",
        "href": "/phuket/rawai-and-nai-harn",
        "photo": "/photos/rawai-and-nai-harn.jpg"
      },
      {
        "title": "Krabi",
        "href": "/krabi",
        "photo": "/photos/krabi.jpg"
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
    description: "Krabi first-trip guide: Ao Nang vs Railay, the 75-minute KBV flight, and morning boats to Phi Phi and Koh Lanta.",
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
      "The cliffs and the Railay pocket are why people come. Ao Nang is the logistics town. Railay has no road: a shared longtail is about 10 to 15 minutes and 100 to 200 THB a person in 2026. Phi Phi is a day trip, or a night if you want the village after the boats leave.",
      "Fly [Bangkok to Krabi](/get-there/bangkok-to-krabi) to KBV, or van from [Phuket in 2.5 to 3 hours](/get-there/phuket-to-krabi-phi-phi). [Koh Lanta](/get-there/krabi-to-koh-lanta) is a separate morning. Rayavadee sits under [resort living](/resort-living/rayavadee)."
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
        "photo": "/photos/koh-lanta.jpg"
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
    description: "Koh Samui first-trip guide: USM vs the Donsak ferry, Chaweng vs the quieter coasts, and boats to Phangan and Tao.",
    lede: "Koh Samui is the Gulf's palm-fringed island hub, known for villa resorts on quiet bays, its own airport and ferries to Koh Phangan and Koh Tao. Stay in Chaweng for nightlife, or Bophut, Maenam or the south for calm. January to September is the easier sea.",
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
      "Samui is the Lower Gulf base: an airport, a loud east-coast strip, and boats to Phangan and Tao. Fly [Bangkok to Koh Samui](/get-there/bangkok-to-koh-samui) in about 70 minutes when the day matters. The Donsak ferry plus a van is the slower, cheaper path.",
      "Use the [10-day Gulf itinerary](/itineraries/10-days-gulf-islands-samui-phangan-tao) if Phangan and Tao are on the ticket. Nikki Beach sits on the [Samui nightlife page](/interests/nightlife/koh-samui-beach-clubs). Six Senses and Four Seasons sit under [resort living](/interests/resort-living)."
    ],
    portraits: [
      {
        "title": "Chaweng",
        "href": "/koh-samui/chaweng",
        "photo": "/photos/chaweng.jpg"
      },
      {
        "title": "Lamai",
        "href": "/koh-samui/lamai",
        "photo": "/photos/lamai.jpg"
      },
      {
        "title": "Ang Thong",
        "href": "/koh-samui/ang-thong-marine-park",
        "photo": "/photos/koh-samui.jpg"
      },
      {
        "title": "Koh Phangan",
        "href": "/koh-phangan",
        "photo": "/photos/koh-phangan.jpg"
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
    description: "Koh Phangan is known for the Full Moon Party at Haad Rin. The rest of the island is west and north bays plus jungle roads.",
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
      "The party is one beach. The island is the bays. Thong Nai Pan, Srithanu, and the west coast are the usual first stays. The Lomprayah Samui-Thong Sala catamaran is about 30 minutes. Seatran takes about 45. Scooter roads are steep and sandy.",
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
      "Khao Sok is the rainforest-and-lake stop on an Andaman week. The lake is inland; the calendar is still Andaman. A van from Phuket or Krabi is about 2 to 3 hours. Pair it with those coasts, not with Samui, unless you like a longer road.",
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
    title: "14-Day Thailand Itinerary: Bangkok, Chiang Mai, one coast",
    description: "What to see in Thailand in 14 days: 3 nights Bangkok, 3 Chiang Mai, then one south coast. Fly the long legs. Flip Andaman vs Gulf with the monsoon.",
    lede: "This is the 14-day spine: three nights Bangkok, three Chiang Mai, then one south coast. Do not add a second sea.",
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
      "The spine is city, north, then one island group. Fly the long legs: Bangkok to Chiang Mai is about 70 minutes. Drop Chiang Rai and a second sea before you drop rest days."
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
        "body": "CNX to HKT or USM. If you must connect in Bangkok, stay at one airport and allow at least 1 hour 15 minutes on one ticket.",
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
    title: "7-Day Thailand Itinerary: Bangkok plus one fork",
    description: "Thailand itinerary for 7 days: 3 nights Bangkok, then Chiang Mai or one south coast. Not both seas. Fly the 70-minute hop.",
    lede: "A first week suits planners who want Bangkok plus one other place. North is temples and food. South is one beach. Pick with the monsoon, not with a map that shows both seas.",
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
      "Three Bangkok nights are enough. The remaining four nights belong to Chiang Mai, Phuket, Samui, or Krabi, not two of them. The fork flight is about 70 minutes to CNX, HKT, USM, or KBV."
    ],
    sections: [
      {
        id: 'fork',
        lead: true,
        title: 'Pick the fork before you book day 4',
        paragraphs: [
          'Do not hold both a Chiang Mai sleeper and a Phuket beach. Book the first Sukhumvit nights, then one exit. [Bangkok to Chiang Mai](/get-there/bangkok-to-chiang-mai) is the north hop. [Bangkok to Phuket](/get-there/bangkok-to-phuket) or [Bangkok to Koh Samui](/get-there/bangkok-to-koh-samui) is the coast hop. File [TDAC](/plan/visas-and-tdac) before you fly in.',
        ],
        bullets: [
          '**North:** temples and food. Fly BKK or DMK to CNX, or take SRT 9 from Krung Thep Aphiwat at 18:40, due Chiang Mai 07:15 (SRT 2026 timetable).',
          '**Andaman:** west-coast beach. Fly to HKT, then 45 to 90 minutes to Kata, Kamala, or Surin. Easier November to April.',
          '**Gulf:** Samui strip or a quieter north coast. Fly to USM. Easier January to September.',
        ],
        table: {
          headers: ['Fork', 'How', 'Book'],
          rows: [
            ['Chiang Mai', 'About 70 min air, or SRT 9 overnight', 'CNX flight or sleeper berth'],
            ['Phuket', 'About 80 min to HKT', 'West-coast hotel, not "Phuket" as one town'],
            ['Koh Samui', 'About 70 min to USM', 'Chaweng if you land late; north coast if you want quiet'],
          ],
        },
        affiliates: [
          stay('Sukhumvit first nights', 'BTS Nana to Thonglor', 'Sleep on the Skytrain spine. Asok or Phrom Phong if you want a calm walk.', stayAreaLink('sukhumvit'), '/photos/sukhumvit.jpg'),
          flights('North fork: BKK to CNX', 'Trip.com', 'About 70 minutes. Match the Bangkok airport you already use.', flightLink('BKK', 'CNX'), '/photos/chiang-mai.jpg'),
          flights('Andaman fork: BKK to HKT', 'Trip.com', 'About 80 minutes, then a west-coast car. Skip the night bus.', flightLink('BKK', 'HKT'), '/photos/phuket.jpg'),
        ],
      },
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
        "body": "Siam, Chinatown, or a rest day. If you take SRT 9, leave for Krung Thep Aphiwat (not Hua Lamphong) in the late afternoon. The 18:40 sleeper is due Chiang Mai at 07:15.",
        "photo": "/photos/riverside.jpg"
      },
      {
        "n": 4,
        "title": "Fork day",
        "body": "Chiang Mai Old City, or a HKT, USM, or KBV landing and a named-beach transfer. Do not boat to Phi Phi the same afternoon you land HKT.",
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
      train("North fork sleeper", "SRT 9 from Krung Thep Aphiwat", "18:40 to 07:15 on the 2026 board. Book a berth if you want to sleep.", trainLink('Bangkok', 'Chiang Mai'), "/photos/chiang-mai-old-city.jpg"),
      flights("Gulf fork: BKK to USM", "Trip.com", "About 70 minutes. Use this only if the monsoon points at Samui, not Phuket.", flightLink('BKK', 'USM'), '/photos/chaweng.jpg'),
      transfer("BKK airport car", "Suvarnabhumi", "Use this on night one if you land after 22:00 or with luggage.", transferLink('BKK'), "/photos/bts.jpg"),
    ],
    faqs: [
      {
        "q": "North or south on a first week?",
        "a": "North if you care about food and wats. South if you need a beach. The 14-day plan is how you do both."
      },
      {
        "q": "Flight or SRT 9 to Chiang Mai?",
        "a": "Fly if day 4 is a temple morning you want intact. Take SRT 9 if you want the overnight from Krung Thep Aphiwat (18:40 to 07:15 on the 2026 SRT board). Book the berth, not a day seat, if you need sleep."
      },
      {
        "q": "Can you add Phuket and Samui on a first week?",
        "a": "No. That is two seas and a wasted transfer day. Pick one coast, or stay north."
      }
    ],
  },
  {
    path: "/itineraries/south-islands-10-days",
    title: "10-Day South Thailand Itinerary: Andaman vs Gulf",
    description: "What to see in south Thailand in 10 days: Andaman (Phuket, Krabi, Khao Sok) Nov-Apr, or Gulf (Samui, Phangan, Tao) Jan-Sep. Do not cross seas.",
    lede: "A 10-day south trip fits travelers who will pick one sea, not both. Andaman (Phuket, Krabi, Khao Sok) from November to April. Gulf (Samui, Phangan, Tao) from January to September. Crossing Phuket to Samui burns a day you will not get back.",
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
      "Stay on one sea. Andaman version: Phuket two nights, Krabi or Railay three, Phi Phi one, Khao Sok one, buffer two. Phuket to Krabi is about 2 to 3 hours by van.",
      "Gulf version: Samui three, Phangan three, optional Tao two, buffer two. Ferries in the morning. The Lomprayah Samui to Thong Sala catamaran is about 30 minutes (lomprayah.com). Seatran Discovery from Bangrak is about 45."
    ],
    sections: [
      {
        id: 'one-sea',
        lead: true,
        title: 'Book the sea you will actually use',
        paragraphs: [
          'October sits on the Andaman wet shoulder and the Gulf wet peak. If you land in late October, prefer Samui only if you accept rain days; prefer Phuket only if a resort is the point and boats can cancel. [When to go](/plan/when-to-go) is the calendar. [Bangkok to Phuket](/get-there/bangkok-to-phuket) and [Bangkok to Koh Samui](/get-there/bangkok-to-koh-samui) are the air hops.',
        ],
        bullets: [
          '**Andaman (Nov to Apr):** land HKT or KBV. Sleep Kata, Karon, Kamala, or Ao Nang. Morning Phi Phi boats only.',
          '**Gulf (Jan to Sep):** land USM. Sleep Chaweng if you arrive late; Bophut or Maenam if you want a quieter first night.',
          '**Do not:** fly HKT then boat or fly to USM in the same 10 days. That is a day you will not get back.',
        ],
        table: {
          headers: ['Sea', 'Airport', 'First hotel search', 'First boat'],
          rows: [
            ['Andaman', 'HKT or KBV', 'Kata or Ao Nang', 'Phi Phi morning boat'],
            ['Gulf', 'USM', 'Chaweng or Bophut', 'Lomprayah to Thong Sala, about 30 min'],
          ],
        },
        affiliates: [
          stay('Andaman first nights', 'Kata and Karon', 'Name the west-coast beach. "Phuket" as a city search dumps you inland or on Patong.', stayAreaLink('kata'), '/photos/phuket.jpg'),
          stay('Gulf first nights', 'Chaweng', 'Use this if you land USM after dark. Move north later if you want quiet.', stayAreaLink('chaweng'), '/photos/koh-samui.jpg'),
          klook('Phi Phi morning boats', 'From Phuket or Krabi', 'Search the Andaman hop, not a generic Thailand tour. Cancel when the west coast is up.', klookIslandHopping('Phuket Phi Phi'), '/photos/krabi.jpg'),
        ],
      },
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
      stay("Ao Nang nights", "Krabi mainland", "Use this if you land KBV. Railay is a longtail, not a same-day van from HKT.", stayAreaLink('ao-nang'), "/photos/railay.jpg"),
      stay("Karon nights", "West-coast Phuket", "Quieter than Patong, still a short hop to Kata. Name the beach, not Phuket.", stayAreaLink('karon'), "/photos/kata-and-karon.jpg"),
      klook("Khao Sok and Cheow Lan", "Andaman inland day", "A lake night sits on the Andaman plan only. Book when you already hold HKT or KBV dates.", klookTours('Khao Sok Cheow Lan'), "/photos/khao-sok.jpg"),
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
    title: "When to go to Thailand: Andaman vs Gulf 2026",
    description: "Best time to visit Thailand: Andaman (Phuket, Krabi) November to April. Gulf (Samui, Phangan) January to September. Bangkok and Chiang Mai work most months.",
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
      "Thailand has two beach calendars, not one winter. Bangkok is hot most of the year and wettest in September and October. You still go. Walk in the morning and sit in air-con at 14:00. A 2026 BTS tap is 17 to 62 THB either month.",
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
    modified: "2026-10-31",
    title: "Thailand Visa and TDAC 2026: 30-day visa-free",
    description: "Thailand visa 2026: 30 days visa-free for US, UK, and most EU tourist entries from 15 September 2026, plus the official TDAC arrival card. Recheck Immigration before you fly.",
    lede: "This page is for first-time visitors on US, UK, or most EU passports. From 15 September 2026 the tourist visa-free stamp is 30 days, and you file a free TDAC on the official Immigration site before you fly.",
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
        "value": "30 days for US, UK, and 58 other listed passports from 15 Sep 2026"
      },
      {
        "label": "TDAC",
        "value": "Free form at tdac.immigration.go.th, within 3 days before arrival"
      },
      {
        "label": "Longer stay",
        "value": "Tourist e-visa: up to 60 days, apply before you fly"
      }
    ],
    photo: "/photos/bangkok.jpg",
    paragraphs: [
      "The 60-day visa-exemption scheme ended on 15 September 2026 (Government PRD, 4 September 2026, citing MFA Consular Affairs). Since 15 September 2026, most Western passport holders can enter Thailand visa-free for up to 30 days, for tourism only. Citizens of South Korea, Brazil, Argentina, Chile and Peru get 90 days under country-to-country agreements. For a longer trip, apply for a tourist visa at thaievisa.go.th before you fly.",
      "TDAC replaced the paper TM6. Complete the free TDAC at tdac.immigration.go.th within 3 days before arrival. Never pay a third-party site. Keep the emailed QR offline.",
    ],
    sections: [
      {
        id: 'after-tdac',
        lead: true,
        title: 'File TDAC, then lock the first two nights',
        paragraphs: [
          'TDAC asks for your first Thai address. Book the Bangkok hotel before you open the form. Do not plan a same-day island hop after a long-haul. [Grab, BTS, and the airport car](/plan/grab-and-bts) is the landing move. [First week](/itineraries/first-week-7-days) is the route after you sleep.',
        ],
        bullets: [
          '**Who files:** every non-Thai national, including visa-free and visa holders (tdac.immigration.go.th/manual).',
          '**When:** within 3 days before the arrival date. You can update the card before you travel.',
          '**What you need:** passport, flight number, and the first hotel name. That is why the stay search sits here, not on a generic homepage.',
          '**Stamp check:** the officer still decides entry. Immigration may ask you to show proof of funds: at least 20,000 THB per person or 40,000 THB per family (cash or the equivalent). Carry enough to be safe, along with an onward ticket. The Tourism Authority of Thailand quotes 10,000 THB per person, but embassies advise 20,000, so carry the higher amount.',
        ],
        table: {
          headers: ['Document', 'What it is', 'Where'],
          rows: [
            ['TDAC', 'Arrival card, not a visa', 'tdac.immigration.go.th'],
            ['Visa exemption', '30-day tourist stamp for listed passports', 'Immigration counter'],
            ['Bilateral exemption', '90 days for South Korea, Brazil, Argentina, Chile, Peru', 'Immigration counter'],
            ['Tourist e-visa', 'Stay up to 60 days, issued before you fly (not the 30-day exemption)', 'thaievisa.go.th'],
          ],
        },
        affiliates: [
          stay('First two Bangkok nights', 'Sukhumvit BTS strip', 'Name Asok or Phrom Phong on TDAC. Land, sleep, then move.', stayAreaLink('sukhumvit'), '/photos/sukhumvit.jpg'),
          transfer('BKK airport car', 'Suvarnabhumi', 'Use this if you land after 22:00 or with luggage. ARL is the cheap daylight move.', transferLink('BKK'), '/photos/bangkok.jpg'),
          transfer('DMK airport car', 'Don Mueang', 'Low-cost arrivals have no Airport Rail Link. Book the car or follow the Grab pin.', transferLink('DMK'), '/photos/bts.jpg'),
        ],
      },
    ],
    affiliates: [
      stay('Riverside first nights', 'Chao Phraya hotels', 'Use this if you want a river pin on TDAC instead of Sukhumvit. Still sleep before any island hop.', stayAreaLink('riverside'), '/photos/riverside.jpg'),
      flights('Next hop: BKK to CNX', 'Trip.com', 'About 70 minutes. Book after the first two Bangkok nights, not as a same-day connection.', flightLink('BKK', 'CNX'), '/photos/chiang-mai.jpg'),
      klook('Grand Palace tickets', 'Bangkok day-one slot', 'Timed entry is easier after you sleep. Do not stack this with a same-day island flight.', klookTickets('Grand Palace Bangkok'), '/photos/grand-palace.jpg'),
    ],
    faqs: [
      {
        "q": "When do you file TDAC?",
        "a": "Within 3 days before arrival, once the flight number is stable. Use tdac.immigration.go.th only. Keep the QR offline."
      },
      {
        "q": "How long is visa-free now?",
        "a": "Since 15 September 2026, most Western passport holders can enter Thailand visa-free for up to 30 days, for tourism only. Citizens of South Korea, Brazil, Argentina, Chile and Peru get 90 days under country-to-country agreements. Need longer? A tourist e-visa from thaievisa.go.th allows up to 60 days, and it is a separate visa you get before you fly."
      },
      {
        "q": "Can you extend the 30-day stamp?",
        "a": "Immigration offices can extend at their discretion. The London Thai Embassy describes an extension of up to 30 days. Do not plan that on day 2 of a first trip."
      }
    ],
  },
  {
    path: "/plan/trains-and-ferries",
    title: "Thailand Trains and Ferries 2026: sleeper and boats",
    description: "Thailand train and ferry guide: SRT 9/10 Bangkok-Chiang Mai sleeper (about 12 hours, 800-1,400 THB), Lomprayah Gulf boats, morning Andaman ferries.",
    lede: "The useful train is the Bangkok to Chiang Mai sleeper on SRT 9 and 10. The useful boats are Lomprayah on the Gulf and morning Andaman ferries to Phi Phi.",
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
      "The useful Thai train is the Bangkok to Chiang Mai sleeper from Krung Thep Aphiwat Central Terminal, not Hua Lamphong. The ride is about 12 hours. A 2026 lower berth is often 800 to 1,400 THB. Budget a Grab from your hotel; the station is north of the old core.",
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
              "Thonburi Station, not Krung Thep Aphiwat (Bang Sue Grand). Nam Tok is a separate check."
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
    title: "Grab vs Bolt Thailand, plus Bangkok BTS and MRT",
    description: "Grab vs Bolt in Thailand, plus a Bangkok BTS MRT guide: contactless taps 17-62 THB, Airport Rail Link about 30 minutes, and when a car beats the skytrain.",
    lede: "Contactless tap-in is the practical move on the BTS Skytrain and MRT Blue Line. The Airport Rail Link from Suvarnabhumi beats a lobby taxi, and Grab and Bolt show a price before you sit down. Do not cash-negotiate at the airport.",
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
      "Use a tap-in Skytrain, not a cash taxi from the airport. Buy a Rabbit card only if you will ride BTS for many days. A 2026 contactless tap is 17 to 62 THB. A Visa or Mastercard tap is enough for a first week on most gates. Keep a coin stash for the odd older gate.",
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
      },
      {
        "q": "Grab vs Bolt in Thailand?",
        "a": "Both work in Bangkok, Chiang Mai, Phuket, and most tourist towns. Open both apps and take the lower quote. Bolt is often a little cheaper. Grab has more airport pins and motorcycle options. Neither replaces the BTS at 8:30."
      }
    ],
  },
  {
    path: "/get-there/bangkok-to-chiang-mai",
    title: "Bangkok to Chiang Mai: 70-min flight or 12-hr sleeper",
    description: "Bangkok to Chiang Mai: fly about 70 minutes (often 1,200-4,500 THB / $35-130 in 2026) or take the 12-hour SRT 9/10 sleeper (800-1,400 THB / $23-40).",
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
        "value": "About 70 minutes, BKK or DMK to CNX. Often 1,200-4,500 THB ($35-130) in 2026"
      },
      {
        "label": "Train",
        "value": "SRT 9/10 sleeper, about 12 hours. Lower berth often 800-1,400 THB ($23-40)"
      },
      {
        "label": "Who should train",
        "value": "Anyone who wants the ride, not a 6:00 meeting"
      }
    ],
    photo: "/photos/chiang-mai.jpg",
    paragraphs: [
      "This is the usual Bangkok-to-north choice: a short flight or the useful Thai sleeper. The return is the same mix. Train 10 is the southbound sleeper. Confirm today's numbers on SRT the week you ride. 2026 published seats often sit at 1,200 to 4,500 THB ($35 to $130) on the air hop and 800 to 1,400 THB ($23 to $40) for a lower berth."
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
              "Plus airport time at both ends. Book BKK-CNX or DMK-CNX. Often 1,200-4,500 THB ($35-130) in 2026."
            ],
            [
              "SRT 9 / 10",
              "About 12 hours",
              "Departs Krung Thep Aphiwat. Lower berth often 800-1,400 THB ($23-40)."
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
      },
      {
        "id": "verdict",
        "title": "Sleeper or flight: the verdict",
        "bullets": [
          "**Verdict:** take SRT train 9 if you have a night to spare. It saves a hotel night and the ride north is the trip.",
          "**Time:** the flight is 1 hr 15 min to 1 hr 30 min in the air, about 4 hours door to door. Train 9 leaves Krung Thep Aphiwat at 18:40 and reaches Chiang Mai at 07:15 the next morning.",
          "**Cost:** BKK or DMK to CNX one-way fares on 3 November 2026 start at 1,260 to 1,490 THB before bags. A train 9 second-class sleeper is 938 THB upper or 1,038 THB lower.",
          "**Experience:** made-up bunks with curtains, a restaurant car with set meals around 200 THB, and hills at sunrise. No alcohol is sold on board.",
          "**Fly instead** if you land the same day, travel at New Year or Songkran without a booking, or need a 09:00 start in Chiang Mai."
        ]
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
      },
      {
        "q": "What does Bangkok to Chiang Mai cost in 2026?",
        "a": "Published flight seats often sit at 1,200 to 4,500 THB ($35 to $130) one way if you book a week or more out. A lower sleeper berth is often 800 to 1,400 THB ($23 to $40). Festival weeks and same-week seats run higher."
      }
    ],
  },
  {
    path: "/get-there/bangkok-to-phuket",
    title: "Bangkok to Phuket: 80-min flight, skip the night bus",
    description: "Bangkok to Phuket: fly BKK or DMK to HKT in about 80 minutes (often 1,500-5,000 THB / $43-145 in 2026), then 45-90 minutes to a west-coast beach.",
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
        "value": "About 80 minutes to HKT. Often 1,500-5,000 THB ($43-145) in 2026"
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
      "Phuket is a flight, then a beach transfer. HKT has Trip.com airport cars. Tell the driver the beach, not just Phuket. 2026 published BKK-HKT or DMK-HKT seats often sit at 1,500 to 5,000 THB ($43 to $145) one way. The night bus is 12 to 14 hours and is not the first-trip move."
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
              "BKK-HKT or DMK-HKT. Often 1,500-5,000 THB ($43-145) in 2026. This is the first-trip move."
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
      },
      {
        "q": "What does the Phuket flight cost in 2026?",
        "a": "Published one-way seats often sit at 1,500 to 5,000 THB ($43 to $145) if you book ahead. Songkran, Christmas, and same-week seats run higher. Price BKK and DMK separately."
      }
    ],
  },
  {
    path: "/get-there/bangkok-to-koh-samui",
    title: "Bangkok to Koh Samui: 70-min USM flight vs Donsak ferry",
    description: "Bangkok to Koh Samui: fly BKK to USM in about 70 minutes (often 3,500-9,000 THB / $100-260 in 2026) or take the cheaper van-plus-ferry via Donsak (about 8-10 hours).",
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
        "value": "About 70 minutes to USM. Often 3,500-9,000 THB ($100-260) in 2026"
      },
      {
        "label": "Ferry path",
        "value": "Van to Donsak plus boat, 8-10 hours. Often 700-1,500 THB ($20-43)"
      },
      {
        "label": "Season",
        "value": "Easier January to September"
      }
    ],
    photo: "/photos/koh-samui.jpg",
    paragraphs: [
      "Samui is the Gulf island with its own airport. USM transfers are short. Chaweng is close. The opposite coast still deserves a booked car at night. USM is a private-concession airport, so 2026 air fares often sit at 3,500 to 9,000 THB ($100 to $260) one way. The Donsak van-plus-ferry is often 700 to 1,500 THB ($20 to $43) and takes 8 to 10 hours."
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
              "USM is the point of Samui. Often 3,500-9,000 THB ($100-260) in 2026."
            ],
            [
              "Van and ferry",
              "8-10 hours",
              "Often 700-1,500 THB ($20-43). Use it when the flight is silly money."
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
    title: "Phuket to Koh Phi Phi and Krabi: van or morning ferry",
    description: "Phuket to Koh Phi Phi: morning ferry 1.5-2 hours, often 400-1,500 THB ($12-43) in 2026. Phuket to Krabi is a 2.5-3 hour van, often 250-600 THB ($7-17).",
    lede: "This is the Andaman hop: a van between Phuket and Krabi in any month, and a morning boat to Phi Phi from November to April. Treat boat days as optional in the southwest monsoon.",
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
        "value": "About 2.5 to 3 hours. Often 250-600 THB ($7-17) in 2026"
      },
      {
        "label": "Boat to Phi Phi",
        "value": "1.5 to 2 hours. Ferry often 400-1,500 THB ($12-43)"
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
              "Often 250-600 THB ($7-17) in 2026. The reliable move in any month."
            ],
            [
              "Ferry to Phi Phi",
              "1.5-2 hours",
              "Often 400-1,500 THB ($12-43). Morning only. Cancel when the Andaman is up."
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
      },
      {
        "q": "What does Phuket to Phi Phi cost in 2026?",
        "a": "A shared ferry is often 400 to 1,500 THB ($12 to $43) one way depending on operator and season. Speedboat day tours cost more and dump you back on Phuket or Ao Nang at dusk."
      }
    ],
  },
  {
    path: "/interests/resort-living",
    title: "Resort living in Thailand",
    description: "Named luxury and MGallery stays, with Trip.com rate links in context. The hotel is the reason to go.",
    lede: "Thailand's flagship resorts are known for private Andaman headlands, lantern-lit Mae Rim rice terraces, and Chao Phraya river sanctuaries where the stay itself shapes the journey. Compare the six regions by coast, season, and nightly tier.",
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
      "Wake to limestone karsts rising out of Phang Nga Bay, step off a mahogany river barge onto a private Bangkok pier, or trade Phuket's main beaches for a gated coconut grove on Pansea Cove. The stay is the itinerary, so the coast and the month come before the brand name.",
      "**Phuket:** West-coast villas are 25 to 75 minutes by private car from HKT. **Koh Samui:** Headlands are 15 to 45 minutes from USM. **Koh Kood:** Eco-villas need a dedicated one-hour flight to Trat or a private island plane."
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
    description: "Aman's pavilion resort above a private west-coast cove on Phuket. Andaman season, not a Patong base.",
    lede: "Amanpuri is known for coconut-grove pavilions above a private cove. Use it when the hotel is the week, not when you want Patong.",
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
      "Pair it with the Andaman window (November to April). A HKT car is about 45 to 75 minutes. Do not boat on arrival day."
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
    description: "Hill villas on Koh Yao Noi looking at Phang Nga Bay, between Phuket and Krabi. Boat access only.",
    lede: "Six Senses Yao Noi is known for hill villas over Phang Nga Bay. Use it when the bay is the trip and you accept a pier plus boat.",
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
      "Yao Noi is the point: limestone bay, not a nightlife strip. Transfers are a pier plus a 20 to 45 minute longtail or speedboat from Phuket or Krabi.",
      "Book boats in the Andaman season. In the southwest monsoon, treat this as a weather-dependent stay."
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
    description: "Villa resort on a headland above Bophut, on the Gulf side of Samui. Quieter than Chaweng.",
    lede: "Six Senses Samui is known for hill villas above Bophut. Stay here if you want a Gulf headland, not the Chaweng strip.",
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
      "Six Senses Samui is hill villas above Bophut on a Gulf calendar. January to September is the easier sea. USM is about 15 to 25 minutes by car. Still book the car.",
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
    description: "Capella's river hotel on the Bangkok bank of the Chao Phraya, for a stay that is not Sukhumvit.",
    lede: "Capella Bangkok is known for a river path and a quiet bank. Use it when the room and the Chao Phraya are the evenings.",
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
      "Capella sits on the river, not on Sukhumvit. A 2026 Grab to Saphan Taksin is often 80 to 150 THB. Use it when the room and the river path are the evenings.",
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
    description: "Art-deco river compound in Dusit with its own boat. A Bangkok stay that sits north of the usual tourist docks.",
    lede: "The Siam is known for a private Dusit compound and a hotel boat. Use it for two Bangkok nights that are not Sukhumvit.",
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
      "The Siam is north of the usual tourist river hotels. The hotel boat is part of the stay. Budget 20 to 40 minutes on the river to the Old City piers.",
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
    description: "Rice-terrace pavilions in Mae Rim make this a valley stay, not a moat hotel. CNX is 25 to 40 minutes by car; the Old City is 30 to 45.",
    lede: "Four Seasons Chiang Mai is known for rice-terrace pavilions in Mae Rim. Use it when the valley is the trip and you accept a 30 to 45 minute ride to the Old City.",
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
      "Four Seasons Chiang Mai is the Mae Rim valley, not a moat hotel. Budget 30 to 45 minutes to the Old City. You come for rice terraces, cooking school, and cool-season mornings.",
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
    description: "Gulf-facing villas on the northwest coast of Samui, away from Chaweng and the east-coast strip.",
    lede: "Four Seasons Koh Samui is known for northwest-coast villas. Stay here if you want a Gulf view and will Grab for most dinners.",
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
      "Northwest Samui is a different island from Chaweng. USM is about 20 to 35 minutes by car. You will Grab or drive for most off-property dinners.",
      "Use the Gulf window. USM is the arrival. Pair with a Phangan boat only if you want a day off-property."
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
    description: "Private-island style stay on Koh Kood in Trat. Bangkok flight plus boat, or the resort transfer. Not a Phuket add-on.",
    lede: "Soneva Kiri is known for a Koh Kood hideaway with its own transfer plan. Use it as its own trip, not a bolt-on to Phuket.",
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
      "Koh Kood is not Samui and not the Andaman circuit. Treat Soneva Kiri as its own trip. Bangkok to Trat is about 1 hour by air, then a boat of about 1 to 1.5 hours, or the resort transfer.",
      "Transfer logistics are the first thing to book. Rates without a transfer plan are incomplete."
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
    description: "Grove resort in the Railay-Phra Nang pocket. No road in. Boats only. Andaman season.",
    lede: "Rayavadee is known for a boat-only grove in the Railay cliffs. Use it when the pocket is the stay and you accept being stuck on a storm day.",
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
      "Rayavadee is Krabi's cliff-bay stay. You arrive by boat in about 15 minutes from Ao Nang. That is not a bug.",
      "Lock it in the Andaman window. A storm day here is still beautiful and fully stuck."
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
    description: "MGallery tower next to Ratchathewi BTS. A designed city hotel between Siam and the ARL.",
    lede: "VIE Hotel Bangkok is known as the MGallery on Ratchathewi BTS. Stay here if you want a designed city night without a river compound.",
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
      "VIE is an MGallery, not a beach villa. Ratchathewi puts you on the BTS between Siam and the ARL at Phaya Thai. A 2026 BTS tap from here is 17 to 47 THB.",
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
    description: "MGallery hill hotel above Chiang Mai for valley views. A taxi ride from the moat, not a temple-walk base.",
    lede: "Veranda High is known for a hill pool above the valley. Stay here if the view is the point and you will taxi to the Old City.",
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
      "Veranda High is a hill pool and a valley view. You will taxi to the Old City in about 20 to 35 minutes. That is the trade.",
      "Cool season is the point. In hot season, confirm the haze before you book a view room as the trip."
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
    description: "MGallery hideaway on Phuket's west-coast hills. A quieter Andaman stay than Patong, below Aman prices.",
    lede: "Avista Hideaway is known as the MGallery west-coast hill stay. Use it when you want a quieter Andaman week than Patong.",
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
      "Avista Hideaway is the MGallery west-coast hill stay when Amanpuri is not the budget. Still treat it as a west-coast monsoon property. HKT is about 45 to 75 minutes by car.",
      "HKT plus a car. Do not boat on arrival day."
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
    description: "Bangkok nightlife is district pockets and rooftops, while the south is Phuket and Samui beach clubs. Pick a neighbourhood or coast before the first pour.",
    lede: "Thailand after dark is known for candlelit shophouse cocktail bars along Bangkok's riverfront, velvet speakeasies in Thonglor, and sunset beach clubs on Phuket and Koh Samui. Pick your neighbourhood or coast before the first pour.",
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
      "The first pour in Bangkok can be a smoked Negroni in a 19th-century Chinatown shophouse on Soi Nana, a late slide behind an unmarked timber door in Thonglor after dinner, or an open-air rum room on Sukhumvit Soi 11. The same week on Phuket or Koh Samui stretches out on a Bang Tao or Lipa Noi daybed as the Andaman or Gulf sky turns copper.",
      "Crafted cocktails run 400 to 650 THB in Bangkok's top rooms, while a late Grab across central Bangkok is 80 to 200 THB after the midnight BTS close. Island beach clubs work on daytime-to-sunset daybed minimums of 2,000 to 5,000 THB."
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
    description: "Cocktail rooms on Charoenkrung and Chinatown Soi Nana: BKK Social Club, Bamboo Bar, Teens of Thailand, Asia Today, Tropic City.",
    lede: "Charoenkrung is known for seated cocktail rooms, not a Walking Street crawl. Use it after a riverside dinner if you want a door and a bartender.",
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
      "This is not Sukhumvit. You come for rooms with a door and a bartender who still has time. Chinatown Soi Nana is a small soi of cocktail bars, not Nana on Sukhumvit. A 2026 crafted drink is often 400 to 650 THB.",
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
    description: "Bangkok dinner-and-bar grid on Thonglor and Ekkamai: Rabbit Hole, Find The Locker Room, Bar Us, and Mahaniyom.",
    lede: "Thonglor is known for dinner first, then bars. Stay on this BTS strip if you want a night that starts with a table, not a soi crawl.",
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
      "Thonglor is where many first-timers should have stayed if they like eating. The bars sit after dinner, not instead of it. A 2026 Grab home after midnight is often 80 to 180 THB.",
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
    description: "Sukhumvit Soi 11: Havana Social is the room worth naming. The rest is a loud strip you can sample or skip.",
    lede: "Soi 11 is known for one crafted rum room and a loud tourist strip. Use it if you already sleep at Nana or Asok. Skip it as a citywide plan.",
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
      "Soi 11 is convenient if you already sleep at Nana or Asok. It is not a citywide nightlife plan. A 2026 walk-in beer is cheap; Havana is often 350 to 500 THB a drink.",
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
    description: "Day-to-dusk Andaman beach clubs: Catch Beach Club and Cafe del Mar Phuket. Book a daybed in season.",
    lede: "Phuket beach clubs are known for afternoon daybeds that become sunset. Use them in the November to April window if the club is the day.",
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
      "These are afternoon rooms that become nights. A 2026 daybed minimum is often 2,000 to 5,000 THB. Bring sunscreen and a booked car home. Patong Walking Street is a different product and not listed here as a recommendation.",
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
    description: "Gulf-side Samui beach clubs, with Nikki Beach Koh Samui as the named draw. Daytime to sunset, not Chaweng after dark.",
    lede: "Samui beach clubs are known for a Gulf afternoon that ends at sunset. Use Nikki Beach if the brand is why you came. Chaweng after dark is a different map.",
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
      "Samui clubs are a daytime-to-sunset plan. A 2026 daybed is often 2,000 to 4,000 THB. Chaweng nightlife after that is a different, louder map.",
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
      "Ayutthaya is the ruin day from Bangkok. Kanchanaburi needs two nights for the River Kwai and Erawan. Hua Hin is the old royal train beach. Pattaya is the east-coast city south of the capital. Koh Chang and Koh Kood are Trat islands, easier November to February."
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
        "photo": "/photos/kanchanaburi.jpg"
      },
      {
        "title": "Hua Hin",
        "href": "/hua-hin",
        "photo": "/photos/hua-hin.jpg"
      },
      {
        "title": "Koh Chang and Koh Kood",
        "href": "/koh-chang-and-koh-kood",
        "photo": "/photos/koh-chang.jpg"
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
  ...wave6Pages,
  ...wave7Pages,
  ...wave9Pages,
  ...wave10Pages,
  ...dishPages,
  ...WAVE11_INTEREST_PAGES,
  ...WAVE12_ITINERARY_PAGES,
  ...WAVE23_ITINERARY_PAGES,
  ...wave21Pages,
  ...wave27Pages,
  ...wave28FoodHubs,
  ...wave29FoodTopics,
  ...wave22Pages,
  ...wave22SouthPages,
  ...wave22GulfNorthPages,
  ...wave22SecondaryPages,
];

export const pages: Page[] = applyWave13(rawPages);

export function getPage(path: string): Page | undefined {
  const key = routePath(path);
  return pages.find((page) => page.path === key);
}

export function allPages(): Page[] {
  return pages;
}
