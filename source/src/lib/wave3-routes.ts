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
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search stays'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string, cta = 'See tickets'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'klook' };
}

function flights(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'Search flights', photo, partner: 'flights' };
}

function trains(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'Search trains', photo, partner: 'trains' };
}

function transfer(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'Book transfer', photo, partner: 'transfer' };
}

export const wave3Pages: Page[] = [
  {
    path: '/get-there/bangkok-to-koh-phangan',
    title: 'Bangkok to Koh Phangan',
    description:
      'Koh Phangan has no airport. Fly to Samui then boat to Thong Sala, or take the Bangkok sleeper to Chumphon and the morning catamaran.',
    lede: 'Koh Phangan is the Gulf island north of Samui, known for west-coast bays and one Full Moon beach. There is no airport. Fly to Samui and boat to Thong Sala, or sleep on the Chumphon train and take the morning catamaran.',
    schema: 'Article',
    crumbs: [
      { name: 'Get there', href: '/get-there' },
      { name: 'Bangkok to Koh Phangan', href: '/get-there/bangkok-to-koh-phangan' },
    ],
    facts: [
      { label: 'Fast path', value: 'BKK or DMK to USM, then Lomprayah to Thong Sala' },
      { label: 'Night path', value: 'Sleeper to Chumphon, catamaran from Thung Makham Noi' },
      { label: 'Island pier', value: 'Thong Sala; Haad Rin is a different boat' },
      { label: 'Season', value: 'Easier January to September; swell can delay boats' },
    ],
    chips: ['Thong Sala', 'USM or Chumphon', 'Lower Gulf'],
    photo: '/photos/koh-phangan.jpg',
    paragraphs: [
      'Everyone lands at a pier. Thong Sala on the southwest is the useful one. Lomprayah, Seatran Discovery, Songserm, Raja, and Boonsiri each use a named berth. Read the operator on the ticket. Haad Rin boats are for Full Moon, not a normal arrival.',
      'The short day: fly into Samui Airport (USM), ride to the Samui boat pier, then the Lomprayah catamaran to Thong Sala in about 30 minutes (Seatran takes about 45). The cheap night: a Lomprayah bus from Khaosan or Pinklao to Thung Makham Noi in Chumphon, then a morning catamaran that often calls at Koh Tao. The train version sleeps better. Board at Krung Thep Aphiwat, the main Bangkok station, then take a booked van to the pier.',
    ],
    sections: [
      {
        id: 'ways',
        title: 'Two paths: fly and boat, or train and boat',
        table: {
          headers: ['Mode', 'Time', 'Cabin or seat', 'Notes'],
          rows: [
            [
              'Flight to Samui, then island boat',
              'About 70 minutes in the air, then 1 to 2 hours of transfer and sea',
              'Bangkok Airways Economy or Blue Ribbon business on larger jets. Low-cost Economy from Don Mueang when that hop exists',
              'Samui Airport is privately run, so fares run high. Price the whole day to the pier, not just the flight.',
            ],
            [
              'Lomprayah VIP or regular bus plus catamaran',
              'About 12 to 13 hours overnight from Khaosan or Pinklao',
              'Recliner coach, then open-deck catamaran seats. No berths on the boat.',
              'Office at 154 Thanon Ram Buttri near Khaosan, plus a Pinklao desk. Check-in about 30 minutes before.',
            ],
            [
              'SRT sleeper to Chumphon, van to Thung Makham Noi, catamaran',
              'About 7 hours on the train, then 45 minutes by van, then 2 to 3 hours at sea via Tao',
              '1st class AC berth, 2nd class AC berth, 2nd class AC seat, or 3rd class fan seat',
              'Trains 37, 31, 83, 85, 173, and 167 are the useful night sets. Confirm the number on SRT.',
            ],
            [
              'Flight to Surat Thani (URT) or Chumphon (CJM), then van and boat',
              'Half day after you land',
              'Low-cost Economy. Add a checked bag on the ticket',
              'URT vans run to Donsak or the Chumphon pier depending on the ticket. Do not mix operators at the kerb.',
            ],
          ],
        },
      },
      {
        id: 'piers',
        title: 'Piers and operators',
        paragraphs: [
          'On Samui, Lomprayah uses Nathon and the Maenam / Pralarn area. Seatran Discovery uses Bangrak. Raja uses Lipa Noi. A ticket that says "Samui" without a pier is not finished. Book the hotel pickup or a Trip.com car to the named pier.',
          'On Chumphon, Lomprayah\'s own pier is Thung Makham Noi (also written Tung Makham Noi). Boonsiri and some slow boats use nearby mainland berths such as Matapon. They are not the same desk. Songserm is slower and cheaper. Seatran is the heavier Gulf ferry. Schedules move with weather and Full Moon weeks.',
        ],
      },
      {
        id: 'season',
        title: 'When the boat is the risk',
        paragraphs: [
          'This is Lower Gulf water. January to September is the easier sea. October to December is when catamarans cancel first.',
        ],
        bullets: [
          '**Buffer night:** Keep one spare night before an international flight out of BKK or DMK.',
          '**Same-day exit:** Do not stack a Phangan arrival onto a long-haul departure.',
          '**Swell days:** Confirm the catamaran board the morning you travel.',
        ],
      },
    ],
    portraits: [
      { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
      { title: 'Bangkok to Koh Tao', href: '/get-there/bangkok-to-koh-tao', photo: '/photos/koh-tao.jpg' },
      { title: 'Bangkok to Koh Samui', href: '/get-there/bangkok-to-koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Trains and ferries', href: '/plan/trains-and-ferries', photo: '/photos/chiang-mai.jpg' },
    ],
    affiliates: [
      flights('Flights to USM', 'Trip.com', 'BKK to Samui when you want the short day.', flightLink('BKK', 'USM'), '/photos/koh-samui.jpg'),
      flights('DMK to USM', 'Trip.com', 'Price the Don Mueang hop when it exists.', flightLink('DMK', 'USM'), '/photos/koh-samui.jpg'),
      trains('Sleeper to Chumphon', 'Trip.com', 'Krung Thep Aphiwat, not Hua Lamphong, for the southbound night sets.', trainLink('Bangkok', 'Chumphon'), '/photos/bts.jpg'),
      klook('Lomprayah to Thong Sala', 'Rail and ferry', 'Book the afternoon before. Full Moon weeks sell out.', klookRailFerry('Lomprayah Koh Phangan'), '/photos/koh-phangan.jpg'),
      stay('Phangan first night', 'Name the bay', 'Thong Nai Pan, Srithanu, or the west coast. Not Haad Rin unless the party is the trip.', stayLink('koh-phangan'), '/photos/koh-phangan.jpg'),
    ],
    faqs: [
      {
        q: 'Which path for a first trip?',
        a: 'Fly to USM and boat the same day only if you land before about 14:00 and the sea is flat. Otherwise sleep one night on Samui. The Chumphon sleeper is the better overnight if you already like trains.',
      },
      {
        q: 'Thong Sala or Haad Rin?',
        a: 'Thong Sala. Haad Rin is the Full Moon beach. Landing there with a suitcase on an ordinary Tuesday is a wasted songthaew.',
      },
      {
        q: 'Do you need Koh Tao as well?',
        a: 'Only if you are diving. The Chumphon catamaran often calls at Mae Haad. That is a change of boat, not a reason to stay.',
      },
    ],
  },
  {
    path: '/get-there/bangkok-to-koh-tao',
    title: 'Bangkok to Koh Tao',
    description:
      'Koh Tao is the Gulf dive island past Phangan. There is no airport, so take a Samui boat or the Chumphon sleeper plus catamaran to Mae Haad.',
    lede: 'Koh Tao is the dive island past Phangan. There is no airport. Everyone lands at Mae Haad. Fly to Samui and boat north if Samui is already on the ticket. Take the Chumphon train plus catamaran if Tao is the only stop.',
    schema: 'Article',
    crumbs: [
      { name: 'Get there', href: '/get-there' },
      { name: 'Bangkok to Koh Tao', href: '/get-there/bangkok-to-koh-tao' },
    ],
    facts: [
      { label: 'Island pier', value: 'Mae Haad, west coast' },
      { label: 'Closest mainland', value: 'Thung Makham Noi, Chumphon' },
      { label: 'Via Samui', value: 'USM, then Lomprayah via Phangan' },
      { label: 'Arrival fee', value: '20 THB environmental charge at the pier' },
    ],
    chips: ['Dive island', 'Mae Haad pier', 'No airport'],
    photo: '/photos/koh-tao.jpg',
    paragraphs: [
      'There is no airport. Mae Haad is the west-coast pier. Lomprayah, Seatran Discovery, and Songserm use adjacent berths. Boonsiri uses its own nearby pier. A 20 THB environmental charge is collected on arrival. Songthaews to Sairee or Chalok cost more than the fee. Agree the fare before you climb in.',
      'If Tao is the only stop, the Chumphon path is the clean one: sleeper or night bus to the mainland, morning boat, Sairee by lunch. If you already fly USM for Samui or Phangan, stay on the island boats and do not backtrack through Chumphon.',
    ],
    sections: [
      {
        id: 'ways',
        title: 'Ways to go',
        table: {
          headers: ['Mode', 'Time', 'Cabin or seat', 'Notes'],
          rows: [
            [
              'SRT to Chumphon plus Lomprayah catamaran',
              'Night on the train, about 1 hour 45 minutes on the 07:00 or 13:15 catamaran',
              '1st or 2nd class AC berth on the train; open catamaran seat on the boat',
              'Lomprayah also lists a slower 05:45 ferry. Steadier in a swell.',
            ],
            [
              'Lomprayah through-ticket from Khaosan or Pinklao',
              'Overnight coach, boat about 08:15 to 08:45',
              'Regular or VIP recliner, then catamaran',
              'The return through-ticket leaves Mae Haad late morning and is back at Pinklao about 20:30.',
            ],
            [
              'Flight to USM, Lomprayah via Thong Sala',
              'About 70 minutes in the air, then 1.5 to 2 hours at sea',
              'Bangkok Airways Economy or Blue Ribbon business; catamaran seat',
              'Samui boats usually call at Phangan. Do not plan a same-day Open Water confined session.',
            ],
            [
              'Flight to CJM, van to the pier',
              'Useful only on a morning Bangkok-CJM hop',
              'Low-cost Economy. Buy the checked bag with the ticket.',
              'Lomprayah sells an airport van. A midday landing often means the afternoon boat, not the 07:00.',
            ],
          ],
        },
      },
      {
        id: 'piers',
        title: 'Do not mix Chumphon piers',
        paragraphs: [
          'Thung Makham Noi is Lomprayah. Matapon and other Chumphon berths belong to other desks. A Grab that says "Chumphon pier" is not a plan. Write the operator name in the pin.',
          'October to December is when Tao cancels first. It sits farther north and more open than Phangan. Fast boats fail before slow ferries. Keep a buffer before you must be in Bangkok.',
        ],
      },
    ],
    portraits: [
      { title: 'Koh Tao', href: '/koh-tao', photo: '/photos/koh-tao.jpg' },
      { title: 'Bangkok to Koh Phangan', href: '/get-there/bangkok-to-koh-phangan', photo: '/photos/koh-phangan.jpg' },
      { title: 'Bangkok to Koh Samui', href: '/get-there/bangkok-to-koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Domestic flights', href: '/plan/domestic-flights-and-baggage', photo: '/photos/bts.jpg' },
    ],
    affiliates: [
      flights('Flights to USM', 'Trip.com', 'When Samui is already on the ticket.', flightLink('BKK', 'USM'), '/photos/koh-samui.jpg'),
      flights('Flights to Chumphon', 'Trip.com', 'CJM only if the landing time still makes a boat.', flightLink('BKK', 'CJM'), '/photos/koh-tao.jpg'),
      trains('Bangkok to Chumphon', 'Trip.com', 'Book a berth. Third class is a night you will feel at the dive shop.', trainLink('Bangkok', 'Chumphon'), '/photos/bts.jpg'),
      klook('Mae Haad boats', 'Rail and ferry', 'Lomprayah first. Seatran and Songserm if the catamaran is sold out.', klookRailFerry('Lomprayah Koh Tao'), '/photos/koh-tao.jpg'),
      stay('Sairee or Mae Haad', 'Trip.com', 'Sairee for dinner. Mae Haad if the boat is at 07:00.', stayLink('koh-tao'), '/photos/koh-tao.jpg'),
    ],
    faqs: [
      {
        q: 'Is the Chumphon path better than Samui?',
        a: 'Yes if Tao is the only island. Yes if the Samui flight is very expensive. No if you already land on Samui for a bay week.',
      },
      {
        q: 'Can you dive the afternoon you land?',
        a: 'Confined water maybe. An open-water boat the same day you came off a swell is how people skip the first dive. Sleep, start the course at 08:00.',
      },
      {
        q: 'Which boat in October?',
        a: 'Prefer the slower ferry if a catamaran is bouncing. Keep a night of slack.',
      },
    ],
  },
  {
    path: '/get-there/bangkok-to-krabi',
    title: 'Bangkok to Krabi: 75-min KBV flight plus Ao Nang transfer',
    description:
      'Fly Bangkok to Krabi (KBV) in about 75 minutes, often 1,200 to 4,500 THB, then 30 to 50 minutes to Ao Nang or a longtail to Railay.',
    lede: 'Krabi is known for Ao Nang beaches and the Railay cliffs. Fly to Krabi Airport (KBV). The night train is not the first-trip move.',
    schema: 'Article',
    crumbs: [
      { name: 'Get there', href: '/get-there' },
      { name: 'Bangkok to Krabi', href: '/get-there/bangkok-to-krabi' },
    ],
    facts: [
      { label: 'Flight', value: 'About 75 minutes, BKK or DMK to KBV. Often 1,200-4,500 THB ($35-130) in 2026' },
      { label: 'Then', value: '30 to 50 minutes to Ao Nang; longtail to Railay' },
      { label: 'Season', value: 'Easier November to April' },
      { label: 'Cabin', value: 'Low-cost Economy, or Bangkok Airways Economy / Blue Ribbon business' },
    ],
    chips: ['KBV', 'Ao Nang', 'Andaman'],
    photo: '/photos/krabi.jpg',
    paragraphs: [
      'Krabi Airport sits north of Krabi Town, not on the beach. Ao Nang is a 30 to 50 minute car depending on the causeway. Railay is a longtail from Ao Nang or from the Klong Jilad side, not a taxi to the sand. Tell the driver the beach or the pier, not "Krabi". 2026 published BKK-KBV or DMK-KBV seats often sit at 1,200 to 4,500 THB ($35 to $130) one way.',
      'Thai AirAsia and Nok use Don Mueang. Thai Vietjet and Bangkok Airways use Suvarnabhumi. Match the Bangkok airport you already hold. A cross-town airport change can erase the flight.',
    ],
    sections: [
      {
        id: 'ways',
        title: 'Ways to go',
        table: {
          headers: ['Mode', 'Time', 'Cabin or seat', 'Notes'],
          rows: [
            [
              'BKK-KBV',
              'About 75 minutes',
              'Thai Vietjet Economy; Bangkok Airways Economy or Blue Ribbon on Airbus days',
              'Buy the checked bag on Vietjet with the ticket. Boutique Lounge is included on many PG fares.',
            ],
            [
              'DMK-KBV',
              'About 75 minutes',
              'AirAsia or Nok Economy. Cabin bag is a combined 7 kg on most low-cost fares',
              'The first-trip default when you already sleep near Don Mueang.',
            ],
            [
              'Night bus to Krabi Town',
              'About 12 hours',
              'VIP or regular recliner',
              'Exists. Fly unless the fare is a story you want to tell.',
            ],
            [
              'Southbound train toward Surat, then van',
              'A long night plus a morning van',
              'SRT berth, then minivan',
              'Not the Krabi move. Use it only if Khao Sok or Surat is already the night.',
            ],
          ],
        },
      },
      {
        id: 'after',
        title: 'After you land',
        paragraphs: [
          'Book a Trip.com airport car if you land after 20:00 or you are going to Railay. Shared vans dump you in Ao Nang or Town and call it done. From Ao Nang, longtails to Railay East or West leave from the beach and from Nopparat Thara. In the southwest monsoon, treat the last boat as optional.',
          'Do not boat to Phi Phi the same afternoon you landed. Sleep on the Krabi side first. Lanta is a separate morning: see Krabi to Koh Lanta.',
        ],
      },
    ],
    portraits: [
      { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Krabi to Koh Lanta', href: '/get-there/krabi-to-koh-lanta', photo: '/photos/krabi.jpg' },
      { title: 'Phuket to Krabi', href: '/get-there/phuket-to-krabi-phi-phi', photo: '/photos/phuket.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      flights('BKK to KBV', 'Trip.com', 'Suvarnabhumi to Krabi when that is already your Bangkok airport.', flightLink('BKK', 'KBV'), '/photos/krabi.jpg'),
      flights('DMK to KBV', 'Trip.com', 'Don Mueang to Krabi on the low-cost side.', flightLink('DMK', 'KBV'), '/photos/krabi.jpg'),
      transfer('KBV airport car', 'Trip.com', 'Name Ao Nang, Railay pier, or Town. Not just Krabi.', transferLink('KBV'), '/photos/krabi.jpg'),
      stay('Ao Nang or Railay', 'Trip.com', 'Ao Nang if you want a road. Railay if the cliff pocket is the point.', stayLink('krabi'), '/photos/krabi.jpg'),
      klook('Phi Phi and four islands', 'Island hopping', 'Morning boats in season. Cancel when the Andaman is up.', klookIslandHopping('Krabi'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'Krabi or Phuket airport?',
        a: 'KBV if Ao Nang, Railay, or Lanta is the base. HKT if the west-coast Phuket beaches are the base. Do not land at the wrong one to save a few hundred baht.',
      },
      {
        q: 'Can you reach Railay without a boat?',
        a: 'No useful road. The longtail is the last mile. In a wet afternoon, sleep Ao Nang and go at 08:00.',
      },
      {
        q: 'Is the night bus worth it?',
        a: 'Almost never on a first trip. The flight is the day you get back.',
      },
    ],
  },
  {
    path: '/get-there/krabi-to-koh-lanta',
    title: 'Krabi to Koh Lanta',
    description:
      'Koh Lanta is the long, quieter Andaman island south of Krabi. Boats land at Saladan in the dry season. The road and car ferry run all year.',
    lede: 'Koh Lanta is the long Andaman island south of Krabi, known for west-coast beaches and a slower pace than Phi Phi. In season, boat to Saladan; all year, take the road and the car ferry from Hua Hin pier on the Krabi side, which is in Krabi province, not the gulf resort town.',
    schema: 'Article',
    crumbs: [
      { name: 'Get there', href: '/get-there' },
      { name: 'Krabi to Koh Lanta', href: '/get-there/krabi-to-koh-lanta' },
    ],
    facts: [
      { label: 'Passenger pier', value: 'Saladan, north tip of Lanta Yai' },
      { label: 'Krabi Town boats', value: 'Klong Jilad, mainly November to April' },
      { label: 'Ao Nang boats', value: 'Nopparat Thara; some speedboats year-round' },
      { label: 'Road backup', value: 'Hua Hin pier on the Krabi side to Khlong Mak, Lanta Noi' },
    ],
    chips: ['Saladan', 'Car ferry all year', 'Andaman'],
    photo: '/photos/krabi.jpg',
    paragraphs: [
      'Koh Lanta Yai is a long west-facing island. Boats land at Saladan. Hotels sit down a single west-coast road. Book a pickup when you book the room. A tuk-tuk at Saladan is not a Bangkok habit. All year, the road and the car ferry from Hua Hin pier on the Krabi side still work.',
      'From Krabi Town, passenger boats leave Klong Jilad mainly November to April. From Ao Nang they leave Nopparat Thara. Bundhaya and Andaman Wave Master are the names you will see. From May to October those passenger boats thin out or stop. The road still works.',
    ],
    sections: [
      {
        id: 'ways',
        title: 'Ways to go',
        table: {
          headers: ['Mode', 'Time', 'Seat', 'Notes'],
          rows: [
            [
              'Klong Jilad ferry to Saladan',
              'About 2 hours',
              'Open-deck or indoor ferry bench',
              'November to April. No useful October departure on the Town boats.',
            ],
            [
              'Nopparat Thara or Railay East speedboat',
              'About 1 to 1.5 hours',
              'Speedboat bench. Wet bags in the nose',
              'Bundhaya lists a late-morning run that can hold in the wet months. Confirm the week you travel.',
            ],
            [
              'Airport or Town van plus car ferry',
              'About 2 to 2.5 hours from KBV, longer in December queues',
              'Minivan seat. Scooter on the ferry if you already ride',
              'Hua Hin pier on the Krabi side (Ban Hua Hin, Ko Klang) leads to Khlong Mak on Lanta Noi, then the Siri Lanta bridge onto Lanta Yai.',
            ],
            [
              'Private car from KBV',
              'About 2 hours plus the ferry wait',
              'Charter',
              'The ferry has no useful fixed timetable. It leaves when the deck is full, roughly 06:00 to 22:00.',
            ],
          ],
        },
      },
      {
        id: 'ferry',
        title: 'The car ferry people confuse',
        paragraphs: [
          'Hua Hin pier on the Krabi side is not the gulf resort of the same name. If the map pin sits in Prachuap Khiri Khan you have the wrong province. Songserm Tran Service runs the short crossing, about 15 minutes, up to about 45 cars. December and January queues can add hours. Leave slack if you have a KBV flight the same day.',
          'A mainland-to-Lanta Noi road bridge was contracted in 2026 and is not open. Until it is, every road journey still boards a ferry.',
        ],
      },
    ],
    portraits: [
      { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
      { title: 'Bangkok to Krabi', href: '/get-there/bangkok-to-krabi', photo: '/photos/krabi.jpg' },
      { title: 'Phuket to Krabi', href: '/get-there/phuket-to-krabi-phi-phi', photo: '/photos/phuket.jpg' },
      { title: 'Monsoon notes', href: '/plan/monsoon-and-burn-season', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      transfer('KBV to Lanta', 'Trip.com', 'A car is the monsoon backup. Name the beach, not just Lanta.', transferLink('KBV'), '/photos/krabi.jpg'),
      stay('Klong Dao or Kantiang', 'Trip.com', 'North for dinner. South for the bay.', stayLink('koh-lanta'), '/photos/krabi.jpg'),
      stay('Klong Dao hotels', 'North-west default', 'Closest useful beach to Saladan.', stayAreaLink('klong-dao'), '/photos/krabi.jpg'),
      klook('Saladan boats', 'Rail and ferry', 'Town and Ao Nang passenger boats in season.', klookRailFerry('Koh Lanta ferry Krabi'), '/photos/krabi.jpg'),
      klook('Rok and four islands', 'Island hopping', 'Morning boats November to April.', klookIslandHopping('Koh Lanta'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'Boat or car ferry in August?',
        a: 'Car ferry. Treat a passenger boat as a bonus if it still sails. Confirm the hotel is open before you book a green-season rate.',
      },
      {
        q: 'Can you day-trip Lanta from Ao Nang?',
        a: 'The transfer eats the morning. Stay four nights if Lanta is the south, two if it is a pause after Krabi.',
      },
      {
        q: 'Where do you land?',
        a: 'Saladan for passenger boats. Khlong Mak on Lanta Noi for the car ferry, then the bridge. They are not interchangeable pins.',
      },
    ],
  },
  {
    path: '/get-there/phuket-to-koh-samui',
    title: 'Phuket to Koh Samui',
    description:
      'This hop links Andaman Phuket to Gulf Samui. Fly Bangkok Airways in about 55 minutes, or take a van to Donsak and a ferry.',
    lede: 'Phuket and Samui face different seas. The useful hop is a Bangkok Airways flight of about 55 minutes. The cheap path is a van to Donsak plus a ferry. You will arrive late.',
    schema: 'Article',
    crumbs: [
      { name: 'Get there', href: '/get-there' },
      { name: 'Phuket to Koh Samui', href: '/get-there/phuket-to-koh-samui' },
    ],
    facts: [
      { label: 'Direct flight', value: 'Bangkok Airways HKT-USM, about 55 minutes' },
      { label: 'Cabin', value: 'Economy on this hop; Blue Ribbon lounge upgrade is extra' },
      { label: 'Road and ferry', value: 'Phuket to Donsak, then Raja, Seatran, or Lomprayah' },
      { label: 'Season split', value: 'Two coasts. Do not treat this as one monsoon' },
    ],
    chips: ['HKT-USM', 'Donsak', 'Two coasts'],
    photo: '/photos/koh-samui.jpg',
    paragraphs: [
      'Phuket and Samui face different seas. The Andaman is easier November to April. The Lower Gulf is easier January to September. Crossing them is a transport problem, not a beach hop. The useful air answer is Bangkok Airways, the only regular HKT-USM nonstop, about 55 minutes on ATR or similar. Kayak-style inventories list Economy only on this sector. Blue Ribbon Club lounge access at HKT or USM is a paid upgrade from the Boutique Lounge, not a cabin on the plane.',
      'The land answer is a morning van from the Lomprayah Phuket Town office or Phuket Bus Terminal 2 to Donsak, then a boat to Nathon, Bangrak, or Lipa Noi. Read the arrival pier. Chaweng is not next to Nathon.',
    ],
    sections: [
      {
        id: 'ways',
        title: 'Ways to go',
        table: {
          headers: ['Mode', 'Time', 'Cabin or seat', 'Notes'],
          rows: [
            [
              'Bangkok Airways HKT-USM',
              'About 55 minutes',
              'Economy. 7 kg cabin bag typical on ATR; 20 kg checked on many PG fares',
              'This is the first-trip move when both islands are already booked.',
            ],
            [
              'Lomprayah bus plus catamaran via Laem Thuat, Donsak',
              'About 6.5 to 7 hours',
              'Coach seat, then catamaran to Nathon',
              'Morning desks from the Phuket Town office. Same company on both legs.',
            ],
            [
              'Phantip or Terminal 2 van plus Seatran or Raja',
              'About 7 to 10 hours',
              'Van seat, then car ferry or discovery ferry',
              'Seatran often lands Bangrak. Raja lands Lipa Noi. Cheaper, later, more stops.',
            ],
            [
              'Self-drive to Donsak plus car ferry',
              'About 3.5 to 4 hours of road, then 1.5 to 2 hours of ferry',
              'Your rental, if the contract allows an island',
              'Confirm the car can board. Vehicles queue in arrival order.',
            ],
          ],
        },
      },
      {
        id: 'piers',
        title: 'Donsak is several desks',
        paragraphs: [
          'Donsak is a mainland strip, not one pier. Lomprayah uses Laem Thuat. Raja and Seatran use their own ramps. A Grab to "Donsak pier" is how people miss a boat. Write the operator.',
          'If you are already going to Khao Sok, do not do Phuket-Samui as a same-day add-on. Sleep at the lake or in the village, then choose one coast.',
        ],
      },
    ],
    portraits: [
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Phuket to Khao Sok', href: '/get-there/phuket-to-khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Bangkok to Koh Samui', href: '/get-there/bangkok-to-koh-samui', photo: '/photos/koh-samui.jpg' },
    ],
    affiliates: [
      flights('HKT to USM', 'Trip.com', 'Bangkok Airways is the usual nonstop.', flightLink('HKT', 'USM'), '/photos/koh-samui.jpg'),
      transfer('USM airport car', 'Trip.com', 'Chaweng is close. The south coast still wants a booked car.', transferLink('USM'), '/photos/koh-samui.jpg'),
      klook('Donsak boats', 'Rail and ferry', 'Lomprayah to Nathon, or Seatran and Raja if you are saving the fare.', klookRailFerry('Donsak ferry Samui'), '/photos/koh-samui.jpg'),
      stay('Samui first night', 'Chaweng if you land late', 'Sleep near the pier you actually used.', stayLink('koh-samui'), '/photos/koh-samui.jpg'),
    ],
    faqs: [
      {
        q: 'Why is the 55-minute flight expensive?',
        a: 'USM is a private-concession airport and PG has the useful nonstop. Price it against a 7-hour van day before you call it a scam.',
      },
      {
        q: 'Can you do Phi Phi and Samui in one week?',
        a: 'You can. You will spend a day in a van or a short expensive hop. Pick one coast on a first week.',
      },
      {
        q: 'Which Samui pier from Donsak?',
        a: 'Nathon for Lomprayah. Bangrak for many Seatran tickets. Lipa Noi for Raja. The ticket is the answer.',
      },
    ],
  },
  {
    path: '/get-there/surat-thani-to-khao-sok',
    title: 'Surat Thani to Khao Sok',
    description:
      'Khao Sok is rainforest and a flooded limestone lake. From Surat Thani, van west to the village or go straight to Ratchaprapha Pier for the lake boats.',
    lede: 'Khao Sok is known for Cheow Lan Lake and jungle trails. From Surat Thani the village and the lake pier are an hour apart. Buy the transfer that matches the bed you booked.',
    schema: 'Article',
    crumbs: [
      { name: 'Get there', href: '/get-there' },
      { name: 'Surat Thani to Khao Sok', href: '/get-there/surat-thani-to-khao-sok' },
    ],
    facts: [
      { label: 'Village', value: 'About 1.5 to 2 hours west of Surat Thani town on Highway 401' },
      { label: 'Lake pier', value: 'Ratchaprapha Pier (Cheow Lan), Ban Ta Khun' },
      { label: 'Airport', value: 'URT, then a van. Do not walk out looking for the lake' },
      { label: 'Park fee', value: '300 THB foreign adult per zone, cash; lake is a second ticket' },
    ],
    chips: ['URT', 'Ratchaprapha', 'Two zones'],
    photo: '/photos/khao-sok.jpg',
    paragraphs: [
      'Khao Sok village sits by the park headquarters and the Sok River. Cheow Lan Lake, also written Chiao Lan, sits behind Ratchaprapha Dam about 60 to 65 km east of that village. They share a park name and not a pier. A van that says "Khao Sok" will dump you at the village unless the ticket says Ratchaprapha or Cheow Lan.',
      'From Surat Thani town or Phunphin station the village is a westbound Highway 401 ride, about 1.5 to 2 hours. From URT the same vans run after the bags. If you booked a floating raft house, skip the village and go to Ratchaprapha Pier. The longtail is 35 minutes to more than an hour depending on the raft.',
    ],
    sections: [
      {
        id: 'ways',
        title: 'Ways to go',
        table: {
          headers: ['Mode', 'Time', 'Seat', 'Notes'],
          rows: [
            [
              'Shared van, URT or town to the village',
              'About 1.5 to 2 hours',
              'Minivan bench',
              'Phantip and hotel desks sell this. Fine if you sleep by headquarters.',
            ],
            [
              'Shared van to Ratchaprapha Pier',
              'About 1 to 1.5 hours from town, less from some URT routings',
              'Minivan bench',
              'Your boat does not leave from Surat. The road ends at the dam pier.',
            ],
            [
              'Private car',
              'About 90 minutes to either pin if you do not wander',
              'Charter',
              'Worth it when a raft check-in is timed. Shared vans make extra stops.',
            ],
            [
              'Train to Surat Thani (Phunphin), then van',
              'Night from Krung Thep Aphiwat, then the same 401 van',
              'SRT berth, then minivan',
              'Phunphin is not the lake. Budget a morning, not a same-day longtail at 08:00.',
            ],
          ],
        },
      },
      {
        id: 'lake',
        title: 'Ratchaprapha Pier and the longtail',
        paragraphs: [
          'Pay cash at the lake booth. Foreign adults pay 300 THB, children 150 THB. Thai tickets are 40 / 20. Headquarters and the lake are separate 24-hour tickets. Add about 40 THB as a pier fee. Cards fail here. Confirm the posted fee at the booth.',
          'Longtails are arranged by the raft house, a tour desk, or the pier queue. A private two-hour boat is the walk-up product, often quoted around 2,000 to 2,200 THB for the boat, not per person. Day-trip boats pack the late morning. Dawn is why you slept on the water.',
          'Park hours at the lake side are roughly 07:00 to 17:00. Remote caves need a licensed guide. Nam Talu is not a casual add-on after a late URT landing.',
        ],
      },
    ],
    portraits: [
      { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Phuket to Khao Sok', href: '/get-there/phuket-to-khao-sok', photo: '/photos/phuket.jpg' },
      { title: 'Bangkok to Koh Samui', href: '/get-there/bangkok-to-koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Khao Lak', href: '/khao-lak', photo: '/photos/khao-lak.jpg' },
    ],
    affiliates: [
      flights('Flights to URT', 'Trip.com', 'Surat Thani airport when the lake is the point, not Samui.', flightLink('BKK', 'URT'), '/photos/khao-sok.jpg'),
      trains('Bangkok to Surat Thani', 'Trip.com', 'Phunphin station, then a van. Not a dawn-raft plan.', trainLink('Bangkok', 'Surat Thani'), '/photos/bts.jpg'),
      klook('Cheow Lan longtail and raft', 'Tours', 'Book the boat with the transfer. Walk-up decks sell out in December.', klookTours('Cheow Lan Lake'), '/photos/khao-sok.jpg'),
      stay('Village or lake search', 'Trip.com', 'Filter Khao Sok village or Cheow Lan raft, not a random Surat hotel.', hotelSearchLink('Khao Sok'), '/photos/khao-sok.jpg'),
    ],
    faqs: [
      {
        q: 'Village or raft house?',
        a: 'Raft if dawn on the limestone is the reason you came. Village if you arrive late from URT or you want headquarters trails the next morning.',
      },
      {
        q: 'Can one ticket cover headquarters and the lake?',
        a: 'No. Two zones, two 300 THB foreign tickets, plus the pier fee. Budget cash for both days if you do both.',
      },
      {
        q: 'Same day as a Samui ferry?',
        a: 'Only if you skip the lake. Donsak and Ratchaprapha are different directions from town.',
      },
    ],
  },
  {
    path: '/get-there/phuket-to-khao-sok',
    title: 'Phuket to Khao Sok',
    description:
      'Khao Sok is the jungle-and-lake stop between Phuket and Surat Thani. A van from Phuket takes about three hours. The lake pier is another hour east.',
    lede: 'Khao Sok is known for Cheow Lan Lake, not a beach. From Phuket it is an Andaman-side van, about three hours. Sleep in the village if you leave after lunch. Go straight to Ratchaprapha Pier if the raft house is booked.',
    schema: 'Article',
    crumbs: [
      { name: 'Get there', href: '/get-there' },
      { name: 'Phuket to Khao Sok', href: '/get-there/phuket-to-khao-sok' },
    ],
    facts: [
      { label: 'Village transfer', value: 'About 2.5 to 3.5 hours from Phuket Town or HKT' },
      { label: 'Lake add-on', value: 'Another hour east to Ratchaprapha Pier' },
      { label: 'Pairing', value: 'Phuket or Krabi, not Samui, unless you like a long van' },
      { label: 'Season', value: 'Lake looks best after rain; trails get slick' },
    ],
    chips: ['Highway van', 'Ratchaprapha', 'Andaman side'],
    photo: '/photos/khao-sok.jpg',
    paragraphs: [
      'From Phuket you climb off the island, run north through Phang Nga, and join the Khao Sok approach. Shared vans leave Phuket Bus Terminal 2 and hotel desks through the morning. Private cars leave when you do. Krabi is a similar inland van, often a bit shorter from Town than from Ao Nang traffic.',
      'Do not treat the lake pier as a Phuket day trip. The road, the booth, and the longtail eat the useful light. Overnight on the water or skip it.',
    ],
    sections: [
      {
        id: 'ways',
        title: 'Ways to go',
        table: {
          headers: ['Mode', 'Time', 'Seat', 'Notes'],
          rows: [
            [
              'Shared van, Phuket to the village',
              'About 2.5 to 3.5 hours',
              'Minivan bench',
              'Morning departures. Afternoon vans exist and arrive after the park trails are done.',
            ],
            [
              'Private car, HKT or west-coast hotel to Ratchaprapha',
              'About 3.5 to 4.5 hours depending on the beach you left',
              'Charter',
              'Use this when a raft boat is timed. Shared vans will not sprint for your longtail.',
            ],
            [
              'Via Khao Lak',
              'A shorter northbound hop, then inland',
              'Car or van',
              'Makes sense if you already sleep in Bang Niang. See the Khao Lak page for Similan timing.',
            ],
            [
              'Via Surat after a Gulf boat',
              'A full reset day',
              'Van',
              'You crossed a coast. Sleep in the village. Do not add a same-day Cheow Lan check-in.',
            ],
          ],
        },
      },
      {
        id: 'lake',
        title: 'If the lake is the point',
        paragraphs: [
          'Ratchaprapha Pier, also called Cheow Lan Pier, is in Ban Ta Khun, Surat Thani. From the village it is about 60 to 65 km east, roughly an hour. From Phuket you can skip the village if the raft house already sent a pickup pin.',
          'Cash for the 300 THB foreign lake ticket and the pier fee. Headquarters is a different booth on a different day. Longtails are loud, wet, and the only machine that reaches the karsts. Pack a dry bag. After 10:00, expect a boat queue.',
        ],
      },
    ],
    portraits: [
      { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Surat Thani to Khao Sok', href: '/get-there/surat-thani-to-khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Khao Lak', href: '/khao-lak', photo: '/photos/khao-lak.jpg' },
    ],
    affiliates: [
      transfer('HKT airport car', 'Trip.com', 'Only if you land early enough to still want a village night.', transferLink('HKT'), '/photos/phuket.jpg'),
      klook('Lake boat plus transfer', 'Tours', 'Buy the Phuket pickup and the longtail as one product.', klookTours('Khao Sok from Phuket'), '/photos/khao-sok.jpg'),
      stay('Phuket night before', 'West coast', 'Sleep on Phuket if you land after 16:00. Van at 08:00.', stayLink('phuket'), '/photos/phuket.jpg'),
      stay('Khao Sok search', 'Village or raft', 'Name the pin. Village and Cheow Lan are not a shared lobby.', hotelSearchLink('Khao Sok'), '/photos/khao-sok.jpg'),
    ],
    faqs: [
      {
        q: 'Day trip from Phuket?',
        a: 'A village waterfall maybe. Cheow Lan no. You will photograph a van seat.',
      },
      {
        q: 'Phuket or Surat as the door?',
        a: 'Phuket if you already have HKT. Surat (URT) if the lake is the only south stop. Krabi sits in between.',
      },
      {
        q: 'Do you need both park tickets?',
        a: 'Only if you walk headquarters and ride the lake. Most raft stays pay the lake ticket and skip the village gate.',
      },
    ],
  },
  {
    path: '/get-there/chiang-mai-to-pai',
    title: 'Chiang Mai to Pai: 3.5-4.5 hr van on Route 1095',
    description:
      'Chiang Mai to Pai: Prempracha minivan from Arcade, about 3.5 to 4.5 hours on Route 1095. Walk-up fares about 210-250 THB ($6-7) in 2026. No scheduled Pai flights.',
    lede: 'Pai is the mountain town over Route 1095, known for 762 bends and a walking-street night. Take a Prempracha minivan from Chiang Mai Arcade. Sleep there. A same-day out-and-back is a wasted Saturday.',
    schema: 'Article',
    crumbs: [
      { name: 'Get there', href: '/get-there' },
      { name: 'Chiang Mai to Pai', href: '/get-there/chiang-mai-to-pai' },
    ],
    facts: [
      { label: 'Distance', value: 'About 131 to 135 km, 762 bends on 1095' },
      { label: 'Van', value: 'Prempracha from Arcade, about 3.5 to 4.5 hours' },
      { label: 'Airport', value: 'No scheduled Pai flights since 2017' },
      { label: 'Season', value: 'Cool November to February; haze risk March to April' },
    ],
    chips: ['Arcade', 'Route 1095', 'Minivan'],
    photo: '/photos/northern.jpg',
    paragraphs: [
      'Pai is a mountain night, not a Chiang Mai district. You leave on Route 107 to Mae Malai, then 1095 over the ridge. The local count is 762 bends. Minivans do it in about 3.5 to 4.5 hours. A scooter does it in the same time if you do not stop, and in a full day if you do. Pai Airport has had no scheduled commercial flights since 2017.',
      'Prempracha Transport holds the licensed service (route 612 toward Pang Mapha and Mae Hong Son). Vans leave Chiang Mai Arcade roughly hourly from 06:30 to 16:30, with a few minibus sets mixed in. Walk-up fares sit around 210 to 250 THB; online desks add a cut. They take a passport number. Confirm the counter letter on the ticket.',
    ],
    sections: [
      {
        id: 'ways',
        title: 'Ways to go',
        table: {
          headers: ['Mode', 'Time', 'Seat', 'Notes'],
          rows: [
            [
              'Prempracha minivan, Arcade to Pai bus station',
              'About 3.5 to 4.5 hours',
              '12 to 14-seat van. Front seats if you get queasy',
              'Arcade Terminal 2 is the usual counter; some tickets print Terminal 3. They face each other on Kaew Nawarat.',
            ],
            [
              'Hotel-pickup van (Aya and similar)',
              'Longer, because of the soi tour',
              'Van seat',
              'Useful if you refuse Arcade. Worse if you already sit near the terminal.',
            ],
            [
              'Private car',
              'About 3 hours without photo stops',
              'Charter',
              'The correct call for three people, bags, or a loop that continues to Mae Hong Son.',
            ],
            [
              'Scooter or motorbike',
              '3 to 6 hours depending on your nerve',
              'Your rental',
              'Only with a motorcycle licence and an IDP that includes category A. See scooters and road rules. Do not ride at night.',
            ],
          ],
        },
      },
      {
        id: 'terminals',
        title: 'Which Chiang Mai station',
        paragraphs: [
          'Arcade (Terminals 2 and 3) is the intercity pair. Chang Phuak (Terminal 1) is for Mae Rim, Chiang Dao, and Fang, not for Pai. Grab to "Arcade bus station" and read the terminal on the ticket. Green Bus to Chiang Rai uses Terminal 3, a different desk and a different highway.',
          'Vans arrive at the small Pai station on Chaisongkhram Road. Walking Street is about ten minutes on foot. Weekend vans fill. Book Saturday mornings.',
        ],
      },
    ],
    portraits: [
      { title: 'Pai and the loop', href: '/pai', photo: '/photos/pai.jpg' },
      { title: 'Chiang Mai to Chiang Rai', href: '/get-there/chiang-mai-to-chiang-rai', photo: '/photos/northern.jpg' },
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Scooters and road rules', href: '/plan/scooters-and-road-rules', photo: '/photos/northern.jpg' },
    ],
    affiliates: [
      stay('Pai stays', 'Town or river', 'Two nights if you rode 1095. One night if a van dropped you and you leave at dawn.', stayLink('pai'), '/photos/northern.jpg'),
      stay('Chiang Mai night before', 'Old City or Nimman', 'Sleep here. Arcade is a morning Grab, not a 05:00 walk.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      klook('Pai vans and tours', 'Tours', 'A day trip is a long sit. Overnight is the product.', klookTours('Pai Chiang Mai'), '/photos/northern.jpg'),
    ],
    faqs: [
      {
        q: 'Can you do Pai as a day trip?',
        a: 'You can complete the tarmac. You will not have a trip. Sleep there.',
      },
      {
        q: 'Scooter or van on a first visit?',
        a: 'Van unless you already ride mountain roads with a motorcycle licence. 1095 is paved and still a clinic for week-one rentals.',
      },
      {
        q: 'Pai or Chiang Rai?',
        a: 'Pai for the ridge road. Chiang Rai for temples and CEI. Do not do both on a first week out of Chiang Mai.',
      },
    ],
  },
  {
    path: '/get-there/chiang-mai-to-chiang-rai',
    title: 'Chiang Mai to Chiang Rai',
    description:
      'Chiang Rai is known for the White Temple, not as a second Chiang Mai. Take Green Bus from Arcade Terminal 3, about 3.5 hours on Highway 118.',
    lede: 'Chiang Rai is known for the White Temple, not as a second Chiang Mai. Take Green Bus from Arcade Terminal 3. The road is about 180 km. A flight between the two cities rarely beats the coach.',
    schema: 'Article',
    crumbs: [
      { name: 'Get there', href: '/get-there' },
      { name: 'Chiang Mai to Chiang Rai', href: '/get-there/chiang-mai-to-chiang-rai' },
    ],
    facts: [
      { label: 'Bus', value: 'Green Bus, Arcade Terminal 3 to Chiang Rai Terminal 1' },
      { label: 'Time', value: 'About 3 hours 20 minutes to 3 hours 45 minutes' },
      { label: 'Cabin', value: 'VIP 24-seat or standard 40-seat coach' },
      { label: 'Air', value: 'CEI is the Bangkok door, not the Chiang Mai shortcut' },
    ],
    chips: ['Green Bus', 'Arcade 3', 'CEI optional'],
    photo: '/photos/northern.jpg',
    paragraphs: [
      'Chiang Rai is one or two nights for the White Temple and, if you still have a day, the Mekong. It is not a second Chiang Mai. The useful vehicle is a Green Bus coach on Highway 118. Green Bus publishes a daily board from Chiang Mai (07:00 through 18:30, plus a few day-specific extras) and the reverse from Chiang Rai. Times move; confirm the day\'s board.',
      'Fair-facing inventories in late 2026 showed about 301 THB on the 40-seat coach and about 422 THB on the VIP 24-seat set. Sit on the VIP if you want a bag at your feet and a toilet stop that is not a sprint.',
    ],
    sections: [
      {
        id: 'ways',
        title: 'Ways to go',
        table: {
          headers: ['Mode', 'Time', 'Cabin or seat', 'Notes'],
          rows: [
            [
              'Green Bus VIP 24-seat',
              'About 3 hours 20 minutes',
              '2+1 recliner',
              'Arcade Terminal 3. Arrives Chiang Rai Bus Terminal 1, close enough to town for a Grab.',
            ],
            [
              'Green Bus standard 40-seat',
              'About 3 hours 45 minutes',
              '2+2 coach',
              'The cheap board. Fine before 09:00. Worse if you are tall.',
            ],
            [
              'Private car',
              'About 3 hours',
              'Charter',
              'Worth it for a White Temple drop on the way in, south of town on Highway 1.',
            ],
            [
              'CNX to CEI',
              'About 45 minutes in the air, half a day with airports',
              'Low-cost Economy when the hop exists',
              'Use it from Bangkok (BKK or DMK to CEI, about 80 to 95 minutes), not as a Chiang Mai shortcut.',
            ],
          ],
        },
      },
      {
        id: 'after',
        title: 'After Terminal 1',
        paragraphs: [
          'Sleep in Chiang Rai town. The White Temple is 13 to 15 km south. A same-day van from Chiang Mai turns the plaster into a coach stop. Be at the gate at 08:00. Foreign tickets have been 200 THB since 1 January 2026.',
          'Chang Phuak in Chiang Mai is the wrong station for this ride. Arcade Terminal 3 is the Green Bus building. Mae Sai and Chiang Saen are further Green Bus boards from the same family of desks, not a reason to skip the city night.',
        ],
      },
    ],
    portraits: [
      { title: 'Chiang Rai', href: '/chiang-rai', photo: '/photos/chiang-rai.jpg' },
      { title: 'Chiang Mai to Pai', href: '/get-there/chiang-mai-to-pai', photo: '/photos/northern.jpg' },
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Burn season', href: '/plan/monsoon-and-burn-season', photo: '/photos/northern.jpg' },
    ],
    affiliates: [
      flights('Bangkok to CEI', 'Trip.com', 'When Chiang Rai is the north, not Chiang Mai.', flightLink('BKK', 'CEI'), '/photos/northern.jpg'),
      flights('DMK to CEI', 'Trip.com', 'Low-cost Bangkok to Mae Fah Luang.', flightLink('DMK', 'CEI'), '/photos/northern.jpg'),
      transfer('CEI airport car', 'Trip.com', 'Town, not a temple-side hotel, unless the flight is brutal.', transferLink('CEI'), '/photos/northern.jpg'),
      stay('Chiang Rai town', 'Trip.com', 'Night bazaar or river. Temple hotels are a coach dump.', stayLink('chiang-rai'), '/photos/northern.jpg'),
      klook('White Temple car', 'Tours', 'Better as a local car than a Chiang Mai day van.', klookTours('Chiang Rai White Temple'), '/photos/northern.jpg'),
    ],
    faqs: [
      {
        q: 'Bus or flight from Chiang Mai?',
        a: 'Bus. The hop wastes two airports on a 180 km road.',
      },
      {
        q: 'Can you see the White Temple without sleeping in Chiang Rai?',
        a: 'Yes, and you will share it with every van from the Old City. Sleep here if the temple is why you came.',
      },
      {
        q: 'Pai and Chiang Rai on the same trip?',
        a: 'Not on a first week. Pick the ridge or the temples.',
      },
    ],
  },
  {
    path: '/get-there/bangkok-to-ayutthaya',
    title: 'Bangkok to Ayutthaya',
    description:
      'Ayutthaya is the ruin day north of Bangkok. Take a train from Krung Thep Aphiwat or a slow third-class set from Hua Lamphong. About one to two hours.',
    lede: 'Ayutthaya is known for its island of temples, an easy train day from Bangkok. Fast trains leave Krung Thep Aphiwat. Slow cheap trains still leave Hua Lamphong. Do not Grab the whole way unless you like the expressway.',
    schema: 'Article',
    crumbs: [
      { name: 'Get there', href: '/get-there' },
      { name: 'Bangkok to Ayutthaya', href: '/get-there/bangkok-to-ayutthaya' },
    ],
    facts: [
      { label: 'Fast trains', value: 'Krung Thep Aphiwat, about 1 to 1.5 hours' },
      { label: 'Ordinary trains', value: 'Hua Lamphong, third class, about 1.5 to 2 hours' },
      { label: 'New commuter', value: 'SRT Bangkok Connex AC sets from Bang Sue since 1 Aug 2026' },
      { label: 'On arrival', value: 'Tuk-tuk, bicycle, or a long hot walk from the station' },
    ],
    chips: ['Bang Sue or Hua Lamphong', 'Day trip', 'UNESCO'],
    photo: '/photos/ayutthaya.jpg',
    paragraphs: [
      'Ayutthaya is the ruin day that earns a first-trip slot. The island is about 70 km north. Trains beat vans once you count the expressway. Buy a return you can actually catch. The last useful afternoon train matters more than a sixth wat.',
      'Long-distance rapid and express trains that stop at Ayutthaya now start at Krung Thep Aphiwat Central Terminal (Bang Sue). Ordinary and many commuter sets still use Hua Lamphong and can pick up at Bang Sue on the way north. Since 1 August 2026, SRT Bangkok Connex has run refurbished KIHA diesel railcars from Krung Thep Aphiwat to Ayutthaya on a commuter board, weekday-heavy in the morning, weekend-heavy later. Promotional fares at launch sat at 30 to 50 THB.',
    ],
    sections: [
      {
        id: 'ways',
        title: 'Ways to go',
        table: {
          headers: ['Mode', 'Time', 'Cabin or seat', 'Notes'],
          rows: [
            [
              'Rapid or express from Krung Thep Aphiwat',
              'About 60 to 90 minutes',
              '2nd class AC seat when the set has it; otherwise 3rd class',
              'These are Chiang Mai or Nong Khai trains that happen to stop. Do not ride past Ayutthaya asleep.',
            ],
            [
              'SRT Bangkok Connex',
              'Commuter timing, AC',
              'Reserved-style commuter seat',
              'Weekday trains 9001-9006 from about 05:15. Weekend board starts later.',
            ],
            [
              'Ordinary or commuter from Hua Lamphong',
              'About 1.5 to 2 hours',
              '3rd class fan bench. Day-of ticket, cash',
              'Trains such as 201, 209, 233, 211, 207. Slower, closer to Chinatown and Silom hotels.',
            ],
            [
              'River cruise tour',
              'A full packaged day',
              'Boat seat and a buffet',
              'You will see three wats. Fine if you admit the boat is the point.',
            ],
          ],
        },
      },
      {
        id: 'station',
        title: 'Which Bangkok station',
        paragraphs: [
          'Krung Thep Aphiwat sits on the MRT Blue Line and the SRT Red Line, north of the old core. Grab north; it is not riverside. Hua Lamphong is the MRT Blue station of the same name, useful if you already sleep in Chinatown or Silom.',
          'Ayutthaya station is on the east side of the island. Wat Chaiwatthanaram is west of the river. Budget a tuk-tuk or a bicycle, not a hopeful walk in April.',
        ],
      },
    ],
    portraits: [
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { title: 'Bangkok to Kanchanaburi', href: '/get-there/bangkok-to-kanchanaburi', photo: '/photos/riverside.jpg' },
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
      { title: 'Trains and ferries', href: '/plan/trains-and-ferries', photo: '/photos/bts.jpg' },
    ],
    affiliates: [
      trains('Bangkok to Ayutthaya', 'Trip.com', 'Search the morning board. Buy a return that still exists at 16:00.', trainLink('Bangkok', 'Ayutthaya'), '/photos/bts.jpg'),
      stay('Ayutthaya overnight', 'Only for dawn', 'Park-side guesthouse, not a highway box.', stayLink('ayutthaya'), '/photos/ayutthaya.jpg'),
      klook('Temple tickets and bikes', 'Attraction tickets', 'A bicycle is quieter than a tuk-tuk package.', klookTickets('Ayutthaya Historical Park'), '/photos/ayutthaya.jpg'),
    ],
    faqs: [
      {
        q: 'Bang Sue or Hua Lamphong?',
        a: 'Express, rapid, or Connex: Krung Thep Aphiwat. Cheap ordinary third class: Hua Lamphong is still in play. Read the train number.',
      },
      {
        q: 'Do you need to reserve?',
        a: 'On long-distance sets, yes if you want a guaranteed seat. On ordinary third class, buy at the window the same morning.',
      },
      {
        q: 'Ayutthaya and Kanchanaburi in one day?',
        a: 'No. Different stations, different directions, different days.',
      },
    ],
  },
  {
    path: '/get-there/bangkok-to-kanchanaburi',
    title: 'Bangkok to Kanchanaburi',
    description:
      'Kanchanaburi is the River Kwai and Erawan town west of Bangkok. The scenic train leaves Thonburi, not the new central station. A van is faster.',
    lede: 'Kanchanaburi is known for the River Kwai bridge and Erawan Falls. The scenic train leaves Thonburi twice a day. The new central station does not run this branch. Take a van from Sai Tai Mai if you need the waterfalls tomorrow.',
    schema: 'Article',
    crumbs: [
      { name: 'Get there', href: '/get-there' },
      { name: 'Bangkok to Kanchanaburi', href: '/get-there/bangkok-to-kanchanaburi' },
    ],
    facts: [
      { label: 'Train station', value: 'Thonburi (Bangkok Noi), MRT Bang Khun Non' },
      { label: 'Trains', value: 'Ordinary 257 at 07:45, 259 at 13:55' },
      { label: 'Class', value: 'Third class only on the daily ordinary trains' },
      { label: 'Faster path', value: 'Van or bus from Sai Tai Mai, about 2 to 2.5 hours' },
    ],
    chips: ['Thonburi', 'Third class', 'Two nights'],
    photo: '/photos/riverside.jpg',
    paragraphs: [
      'Kanchanaburi is a river town, not a ruin loop and not an island. Give it two nights if you want the bridge story and Erawan. The atmospheric arrival is the ordinary train from Thonburi station, formerly Bangkok Noi. The practical arrival is a minivan from the Southern Bus Terminal (Sai Tai Mai).',
      'Thonburi is about a 750 m walk from MRT Bang Khun Non on the Blue Line. The trains also stop at Jaran Sanitwong, beside that MRT, which is easier with a suitcase. They have not moved to Krung Thep Aphiwat. Weekend tourist extras sometimes use Hua Lamphong. Read the number.',
    ],
    sections: [
      {
        id: 'ways',
        title: 'Ways to go',
        table: {
          headers: ['Mode', 'Time', 'Cabin or seat', 'Notes'],
          rows: [
            [
              'Ordinary 257 from Thonburi',
              'About 2 hours 45 minutes',
              '3rd class fan bench. Day-of ticket',
              'About 07:45 to Kanchanaburi about 10:30, River Kwai Bridge about 10:35. Local boards drift by a few minutes.',
            ],
            [
              'Ordinary 259 from Thonburi',
              'About 2.5 hours',
              '3rd class fan bench',
              'About 13:55, arriving late afternoon. Hot. Fine if the museum is tomorrow.',
            ],
            [
              'Minivan or bus from Sai Tai Mai',
              'About 2 to 2.5 hours',
              'Van seat, about 110 THB on many desks',
              'The first-trip move when Erawan is the next morning. Southern Bus Terminal, not Mo Chit.',
            ],
            [
              'Private car',
              'About 2 hours without Friday traffic',
              'Charter',
              'Worth it for three people or a same-day Hellfire Pass plan, which is not on the train.',
            ],
          ],
        },
      },
      {
        id: 'train-tickets',
        title: 'Train tickets',
        paragraphs: [
          '**Two trains a day.** Ordinary 257 leaves Thonburi at 07:45 and reaches Kanchanaburi about 10:20 to 10:30. Ordinary 259 leaves at 13:55 and arrives about 16:20.',
          '**Third class only.** Fan carriages with open windows and no reserved seats.',
          '**100 THB flat.** Foreigners pay 100 THB to any station on the line. Thai citizens pay less.',
          '**No online sale.** Buy at the Thonburi ticket window on the day. Arrive 30 to 60 minutes early.',
        ],
      },
      {
        id: 'line',
        title: 'Nam Tok is not Hellfire Pass',
        paragraphs: [
          'The passenger line continues past the bridge toward Nam Tok. Floods have shut the Tha Kilen to Nam Tok stretch before. Call SRT 1690 before you treat the viaduct as a must. Foreign tourist fares apply on these ordinary sets. Tickets are often day-of. The train cannot truly sell out the way a sleeper can.',
          '**Hellfire Pass is closed** since 27 Sep 2026 after floods, until further notice. Check the official notice before you go. Hellfire Pass (Konyu Cutting) is about 80 km northwest by road past Nam Tok. It is not a station. Arrange the car in town. Erawan is a different 65 to 70 km road, local bus 8170, last-bus questions before you walk to tier 7.',
        ],
      },
    ],
    portraits: [
      { title: 'Kanchanaburi', href: '/kanchanaburi', photo: '/photos/kanchanaburi.jpg' },
      { title: 'Bangkok to Ayutthaya', href: '/get-there/bangkok-to-ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { title: 'Hua Hin', href: '/hua-hin', photo: '/photos/hua-hin.jpg' },
      { title: 'Trains and ferries', href: '/plan/trains-and-ferries', photo: '/photos/bts.jpg' },
    ],
    affiliates: [
      stay('Town or river', 'Trip.com', 'Two nights if Erawan is on the list.', stayLink('kanchanaburi'), '/photos/riverside.jpg'),
      klook('Erawan and Hellfire Pass', 'Tours', 'A car for both hinterland sites beats a missed 8170.', klookTours('Erawan National Park'), '/photos/khao-sok.jpg'),
    ],
    faqs: [
      {
        q: 'Which Bangkok station?',
        a: 'Thonburi for daily ordinary trains 257 and 259. Krung Thep Aphiwat does not serve this branch. Hua Lamphong appears on some weekend tourist extras only.',
      },
      {
        q: 'Train or van on a first trip?',
        a: 'Van if Erawan is tomorrow. Train if the rice fields are the morning and the falls can wait a day.',
      },
      {
        q: 'Can you do this as a Bangkok day trip with Erawan?',
        a: 'You can see the bridge. You will short-change the seven tiers. Stay two nights.',
      },
    ],
  },
  {
    path: '/plan/esim-and-sim-cards',
    title: 'Thailand eSIM and SIM Cards: AIS vs True-dtac 2026',
    description:
      'Thailand eSIM and SIM 2026: AIS for islands and hills, True-dtac for city 5G. Tourist packs 8 days 499 THB, 15 days 699, 30 days 1,199. Buy before you fly or after immigration.',
    lede: 'Thailand is easy to get online. AIS covers islands and hills better. True-dtac is fine in cities. Install a tourist eSIM before you fly if the phone allows it. Otherwise buy a SIM after immigration and register it to your passport.',
    schema: 'Article',
    crumbs: [
      { name: 'Plan', href: '/plan' },
      { name: 'eSIM and SIM cards', href: '/plan/esim-and-sim-cards' },
    ],
    facts: [
      { label: 'Networks', value: 'AIS, plus True-dtac as one company with two brands' },
      { label: 'Islands and hills', value: 'AIS coverage is the safer single choice' },
      { label: 'Registration', value: 'NBTC rules: passport, max 3 SIMs per person per brand' },
      { label: 'Airport desks', value: 'BKK arrivals, DMK between T1 and T2, HKT, USM' },
    ],
    chips: ['AIS', 'True-dtac', 'Passport'],
    photo: '/photos/bts.jpg',
    paragraphs: [
      'Thailand has two networks that matter for a first trip. AIS is the wider rural and island net. True and dtac merged into True Corporation; tourist plans now sit under a shared True-dtac shop even when the sticker still says Happy Tourist. National Telecom is not a tourist counter.',
      'Keep the home SIM in a second tray or eSIM slot if you need bank codes. A Thai number helps Grab, hotel desks, and boat operators. A data-only travel eSIM is enough for maps and not enough for some Thai OTP messages.',
    ],
    sections: [
      {
        id: 'plans',
        title: 'What the tourist counters actually sell',
        table: {
          headers: ['Brand', 'Useful tier', 'What you get', 'Who it fits'],
          rows: [
            [
              'AIS Lucky / tourist eSIM',
              '8 days 499 THB, 15 days 699, 30 days 1,199, 60 days 1,599',
              'Unlimited data at max available speed on the tourist tiers, plus in-net calls on many packs',
              'Koh Tao, Lanta, Lipe, Pai, Cheow Lan roads',
            ],
            [
              'True-dtac Tourist Infinite',
              '8 / 15 / 30 days at the same 499 / 699 / 1,199 headline',
              'Unlimited 5G/4G at max available speed, local calls with a 15-minute cap per call on some packs',
              'Bangkok, Chiang Mai, Phuket town, if you never leave the corridor',
            ],
            [
              'True-dtac cheaper tourist',
              '10-day data-only or older Happy packs',
              'Data, inbound calls. Outbound voice can be off on data-only',
              'A week in malls. Read the card before you leave the desk.',
            ],
            [
              'Global travel eSIM (Airalo and similar)',
              'Priced in your home currency',
              'Data only, no Thai number',
              'Fine for maps. Weak for boat operators who want a callback.',
            ],
          ],
        },
      },
      {
        id: 'where',
        title: 'Where to buy',
        paragraphs: [
          'Physical SIMs: Suvarnabhumi arrivals (dtac has listed gate 7 on the second floor of arrivals), Don Mueang between terminals 1 and 2, Phuket terminal 2, Samui near gates 6 and 7 on departures. Hours are not a promise. 7-Eleven tourist packs still want the passport at the till.',
          'eSIM: AIS and True both sell the same tourist tiers as eSIM. Registration still happens, in the app or at a shop. The queue you skip is the airport laminate desk, not the identity rule.',
          'Ignore blogs that still say airport SIMs are always double the city price. The official 8 / 15 / 30 day Infinite ladders match in town. What you overpay for is a confused reseller and a pack you did not read.',
        ],
      },
    ],
    portraits: [
      { title: 'Grab and BTS', href: '/plan/grab-and-bts', photo: '/photos/bts.jpg' },
      { title: 'Money and PromptPay', href: '/plan/money-atms-and-promptpay', photo: '/photos/bangkok.jpg' },
      { title: 'Domestic flights', href: '/plan/domestic-flights-and-baggage', photo: '/photos/bts.jpg' },
      { title: 'Visas and TDAC', href: '/plan/visas-and-tdac', photo: '/photos/bangkok.jpg' },
    ],
    affiliates: [
      stay('First two nights', 'Trip.com', 'Book the stay before you argue with a SIM queue.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      transfer('BKK airport car', 'Trip.com', 'A car with wifi is not a SIM strategy. Buy data anyway.', transferLink('BKK'), '/photos/bangkok.jpg'),
    ],
    faqs: [
      {
        q: 'AIS or True-dtac?',
        a: 'AIS if any island, loop road, or national park is on the trip. True-dtac if you will live on BTS and a mall 5G cell.',
      },
      {
        q: 'Do you need a Thai number?',
        a: 'Yes if boats, hotels, or Grab OTP will call you. No if you only need maps and you already have WhatsApp on wifi.',
      },
      {
        q: 'Can you register more than one SIM?',
        a: 'NBTC caps tourist SIMs at three per person per brand. Do not collect drawers of dead tourist packs.',
      },
    ],
  },
  {
    path: '/plan/money-atms-and-promptpay',
    title: 'Thailand Money Guide: ATM fees, cash, PromptPay 2026',
    description:
      'Thailand ATM fees 2026: often 250 THB Visa or 350 THB Mastercard at big banks. Decline DCC. PromptPay needs a Thai bank account. Parks still want notes.',
    lede: 'Thailand is a cash-and-card country, not a foreign-phone QR country. Withdraw baht in large, rare hits at a bank ATM. Decline the machine converting to your home currency. PromptPay is for Thai bank accounts.',
    schema: 'Article',
    crumbs: [
      { name: 'Plan', href: '/plan' },
      { name: 'Money, ATMs, and PromptPay', href: '/plan/money-atms-and-promptpay' },
    ],
    facts: [
      { label: 'ATM fee', value: 'Often 250 THB Visa, 350 THB Mastercard at big banks in 2026' },
      { label: 'AEON tip', value: 'Dead. AEON wound down Thai ATMs in 2024' },
      { label: 'PromptPay', value: 'Needs a Thai bank account, or a listed cross-border app' },
      { label: 'Cash still', value: 'DNP parks, longtails, ordinary trains, street stalls' },
    ],
    chips: ['THB cash', 'Decline DCC', 'Parks take cash'],
    photo: '/photos/bangkok.jpg',
    paragraphs: [
      'Use cash plus card, not foreign-phone PromptPay. Cards work in malls, hotels, and Grab. Cash still runs national parks, many longtails, ordinary SRT windows, and the noodle stall that does not own a reader. Super-Rich and a bank booth beat an airport counter for notes. ATMs beat both if your home card refunds fees.',
      'Thai ATMs charge a flat operator fee on foreign cards, on top of whatever your bank adds. Krungsri\'s schedule effective 2026 lists 250 THB for a foreign Visa and 350 THB for a foreign Mastercard. Kasikorn and SCB have published the same split. The screen shows the number before you confirm. Go by the fee shown on the ATM screen, not the 220 THB figure in older blog posts.',
    ],
    sections: [
      {
        id: 'atm',
        title: 'How to take cash out',
        table: {
          headers: ['Move', 'Why', 'Watch for'],
          rows: [
            [
              'Use a bank ATM (Bangkok Bank, Kasikorn, SCB, Krungsri, Krungthai)',
              'Machines in 7-Eleven can fail or skim more often',
              'Daily limits often 20,000 to 30,000 THB. The fee is flat, so hit the ceiling.',
            ],
            [
              'Choose Thai baht, refuse the ATM conversion',
              'Dynamic currency conversion is the quiet extra cut',
              'The "convenient" USD or EUR total is the trap.',
            ],
            [
              'Ignore AEON advice',
              'That 150 THB network closed in February and March 2024',
              'Old island blogs still recommend it.',
            ],
            [
              'Test the card at home',
              'Some issuers block the first Thai authorisation',
              'A taxi rank is a bad place to open an authenticator.',
            ],
          ],
        },
      },
      {
        id: 'promptpay',
        title: 'PromptPay and QR',
        paragraphs: [
          'PromptPay is the Bank of Thailand system that links a Thai ID or mobile number to a Thai bank account. The QR on the stall is that system. Wise and Revolut cards do not become PromptPay because you landed. Some ASEAN and Greater China apps can scan Thai QR under cross-border schemes. If your bank is in Europe, the US, or Australia, assume they cannot.',
          'Tourist prepaid wallets exist. For a two-week trip, one large ATM withdrawal and a card for hotels is less theatre. Hotels and Trip.com stays take cards. Cheow Lan, Erawan, and Fine Arts booths want notes.',
        ],
      },
    ],
    portraits: [
      { title: 'eSIM and SIMs', href: '/plan/esim-and-sim-cards', photo: '/photos/bts.jpg' },
      { title: 'Grab and BTS', href: '/plan/grab-and-bts', photo: '/photos/bts.jpg' },
      { title: 'Visas and TDAC', href: '/plan/visas-and-tdac', photo: '/photos/bangkok.jpg' },
      { title: 'Songkran and holidays', href: '/plan/songkran-and-public-holidays', photo: '/photos/bangkok.jpg' },
    ],
    affiliates: [
      stay('Card-friendly first nights', 'Trip.com', 'Pay the hotel on a card. Keep baht for the booths.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      klook('Tickets you can prepay', 'Klook', 'Park and boat tickets paid in the app mean fewer 1,000 THB notes in a wet pocket.', klookTickets('Thailand attraction'), '/photos/ayutthaya.jpg'),
    ],
    faqs: [
      {
        q: 'How much cash on day one?',
        a: 'Enough for two park tickets, a longtail, and dinner that refuses a card. For most people that is 3,000 to 5,000 THB after the first ATM hit, not a mattress stash.',
      },
      {
        q: 'Does Wise avoid the Thai ATM fee?',
        a: 'No. The Thai operator fee still prints on the screen. Wise also publishes region-specific ATM rules. Read your own app. Some Wise cards cannot withdraw at Thai ATMs at all.',
      },
      {
        q: 'Can you live on PromptPay for two weeks?',
        a: 'Not from a typical US or EU bank app. Carry a card and cash.',
      },
    ],
  },
  {
    path: '/plan/monsoon-and-burn-season',
    title: 'Monsoon and burn season',
    description:
      'Thailand has two beach seasons and a smoky north. Andaman is easier November to April. The Lower Gulf is easier January to September. Chiang Mai haze peaks in March and April.',
    lede: 'Thailand is a two-calendar country plus a smoky north, not one winter. Phuket and Krabi are easier November to April. Samui and Phangan are easier January to September. Check Chiang Mai air before you book March.',
    schema: 'Article',
    crumbs: [
      { name: 'Plan', href: '/plan' },
      { name: 'Monsoon and burn season', href: '/plan/monsoon-and-burn-season' },
    ],
    facts: [
      { label: 'Andaman', value: 'Easier November to April; Similan park 15 Oct to 15 May' },
      { label: 'Lower Gulf', value: 'Easier January to September' },
      { label: 'Trat islands', value: 'November to February, a different gulf' },
      { label: 'North haze', value: 'Worst March to April; check air4thai.pcd.go.th' },
    ],
    chips: ['Two coasts', 'Air4Thai', 'Do not stack seas'],
    photo: '/photos/phuket.jpg',
    paragraphs: [
      'The southwest monsoon hits the Andaman first. Phuket, Krabi, Lanta, Lipe, and Khao Lak are the November to April trip. The Lower Gulf (Samui, Phangan, Tao) is the January to September trip. October is the messy overlap. Do not stack both seas on a first week. Bangkok to either coast is about 70 to 85 minutes by air.',
      'The north has a different problem. Crop and forest smoke sits in the Chiang Mai and Chiang Rai valleys at the end of the dry season. Station averages for 2023 to 2026 put Chiang Mai\'s nastiest month in April. May rain usually clears it. Bangkok heat is year-round and is not this page.',
    ],
    sections: [
      {
        id: 'coasts',
        title: 'Coast calendar',
        table: {
          headers: ['Place', 'Go', 'Think twice', 'Why'],
          rows: [
            [
              'Phuket, Krabi, Lanta, Lipe, Khao Lak',
              'November to April',
              'May to October',
              'Andaman swell. Passenger boats fail. Similan National Park is shut 16 May to 14 October.',
            ],
            [
              'Samui, Phangan, Tao',
              'January to September',
              'October to December',
              'Lower Gulf wind. Tao cancels first. Full Moon still runs in the wet; the boat may not.',
            ],
            [
              'Koh Chang and Koh Kood',
              'November to February',
              'May to October',
              'Eastern Gulf. Not the Samui calendar. Do not copy a Lower Gulf blog onto Trat.',
            ],
            [
              'Hua Hin',
              'Most months; best November to April',
              'September and October',
              'Upper Gulf mainland. Usable in July when Phuket is a coin toss.',
            ],
            [
              'Khao Sok / Cheow Lan',
              'After rain for a full lake, November to April for easier roads',
              'A same-day Phuket dash in a downpour',
              'Inland Andaman side. Trails slick. Lake tickets still cash.',
            ],
          ],
        },
      },
      {
        id: 'haze',
        title: 'Burn season in the north',
        paragraphs: [
          'Chiang Mai\'s 2026 open-burning ban ran 1 January to 31 May. That is a provincial order, not a promise of clean air. The months that photograph grey are March and April. Mae Hong Son and Chiang Rai can read worse than the city. 2025 was a mild haze year. 2026 was not as kind. Do not plan a viewpoint week on a 2025 memory.',
          'Check the Pollution Control Department live map at air4thai.pcd.go.th the week you fly, not a Facebook group. An FFP2 or N95 filters PM2.5. A cloth mask does not. If anyone in the group has asthma, pick the south in March or wait for May.',
        ],
      },
    ],
    portraits: [
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
      { title: 'Songkran and holidays', href: '/plan/songkran-and-public-holidays', photo: '/photos/bangkok.jpg' },
      { title: 'Chiang Mai to Pai', href: '/get-there/chiang-mai-to-pai', photo: '/photos/northern.jpg' },
      { title: 'Phuket to Koh Samui', href: '/get-there/phuket-to-koh-samui', photo: '/photos/koh-samui.jpg' },
    ],
    affiliates: [
      stay('Andaman stays', 'Nov to Apr', 'Phuket or Krabi when the west coast is the trip.', stayLink('phuket'), '/photos/phuket.jpg'),
      stay('Gulf stays', 'Jan to Sep', 'Samui or Phangan when the Andaman is up.', stayLink('koh-samui'), '/photos/koh-samui.jpg'),
      stay('North stays', 'Nov to Feb', 'Chiang Mai in haze months is a mall week. Book it on purpose.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
    ],
    faqs: [
      {
        q: 'Is there one best month?',
        a: 'December to February if you want Bangkok plus the Andaman. July if you want Samui and can take Bangkok heat. March is a north gamble.',
      },
      {
        q: 'Can you visit Phuket in August?',
        a: 'Yes. Some days are beautiful. Boat days cancel. Prefer Samui that month unless a resort is the whole point.',
      },
      {
        q: 'Where do you check the air?',
        a: 'air4thai.pcd.go.th, station by station. IQAir is a mirror, not the official desk.',
      },
    ],
  },
  {
    path: '/plan/domestic-flights-and-baggage',
    title: 'Domestic flights and baggage',
    description:
      'Domestic flights are cheap until the bag fee. Low-cost airlines allow 7 kg in the cabin for both bags together. Bangkok has two airports. Samui Airport costs more.',
    lede: 'Domestic flights are a cheap hop until the bag fee. Buy the bag with the ticket. A 7 kg cabin limit is both bags together. Suvarnabhumi and Don Mueang are different airports. Use the airport you already landed at.',
    schema: 'Article',
    crumbs: [
      { name: 'Plan', href: '/plan' },
      { name: 'Domestic flights and baggage', href: '/plan/domestic-flights-and-baggage' },
    ],
    facts: [
      { label: 'Low-cost cabin', value: '7 kg combined on AirAsia, Nok, Lion, Vietjet' },
      { label: 'Full service', value: 'PG about 20 kg checked; TG 23 kg economy typical' },
      { label: 'Bangkok airports', value: 'DMK for most LCCs; BKK for TG, PG, Vietjet' },
      { label: 'USM', value: 'Private-concession airport. Fares run high. PG is the useful door' },
    ],
    chips: ['7 kg', 'BKK vs DMK', 'Buy bags now'],
    photo: '/photos/bts.jpg',
    paragraphs: [
      'Domestic Thailand is two airports in Bangkok and a pile of short hops. Thai AirAsia (FD), Nok Air (DD), and Thai Lion Air (SL) live at Don Mueang. Thai Airways (TG) and Bangkok Airways (PG) live at Suvarnabhumi. Thai Vietjet (VZ) is the Suvarnabhumi low-cost. A connection that says BKK to DMK is a city transfer, not a walk.',
      'The fare you clicked is often a seat plus 7 kg. Nok Lite and Vietjet Eco include no checked bag. Airport counters sell the same kilos for more. Excess at the belt is worse again.',
    ],
    sections: [
      {
        id: 'bags',
        title: 'What each cabin actually includes',
        table: {
          headers: ['Airline', 'Bangkok airport', 'Cabin bag', 'Checked bag in the fare'],
          rows: [
            ['Thai AirAsia (FD)', 'Don Mueang', '7 kg combined, two pieces', 'None on the cheap fare. Buy 15 to 30 kg with the ticket'],
            ['Nok Air (DD)', 'Don Mueang', '7 kg combined, two pieces', 'Lite 0 kg; X-Tra 15 kg; MAX 25 kg'],
            ['Thai Lion Air (SL)', 'Don Mueang', '7 kg, watch the piece rules', 'None on the cheap fare'],
            ['Thai Vietjet (VZ)', 'Suvarnabhumi', '7 kg combined; SkyBoss 10 kg', 'Eco 0 kg; Deluxe often 20 kg; SkyBoss 30 kg'],
            ['Bangkok Airways (PG)', 'Suvarnabhumi, plus USM and HKT', '7 kg per piece; tighter on ATR72', 'About 20 kg on standard fares. Economy on many short hops, Blue Ribbon on Airbus sets'],
            ['Thai Airways (TG)', 'Suvarnabhumi', '7 kg per piece typical', 'About 23 kg economy'],
          ],
        },
      },
      {
        id: 'airports',
        title: 'Airports that change the plan',
        paragraphs: [
          'USM (Samui) is a private-concession field. Bangkok Airways is the useful operator. Fares look high because they are. Price the door-to-bay day against a Surat or Donsak ferry before you decide it is a scam. HKT-USM is a PG Economy hop of about 55 minutes.',
          'Krabi, Phuket, Chiang Mai, and Chiang Rai take a mix of low-cost and full-service flights. Chumphon and Surat Thani are the Gulf-island mainland doors. Hua Hin Airport is not a Bangkok substitute. Trat Airport is for Chang and Kood, not for Samui.',
          'Nok\'s own baggage page still sells extra kilos cheaper with the ticket than after purchase (15 kg domestic 600 THB with the ticket, 800 THB later, in the table we checked). Vietjet\'s domestic 15 kg add-on sat near 355 THB. Numbers move. Buy before you pack rocks.',
        ],
      },
    ],
    portraits: [
      { title: 'Bangkok to Krabi', href: '/get-there/bangkok-to-krabi', photo: '/photos/krabi.jpg' },
      { title: 'Bangkok to Koh Samui', href: '/get-there/bangkok-to-koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Phuket to Koh Samui', href: '/get-there/phuket-to-koh-samui', photo: '/photos/phuket.jpg' },
      { title: 'Grab and BTS', href: '/plan/grab-and-bts', photo: '/photos/bts.jpg' },
    ],
    affiliates: [
      flights('BKK to USM', 'Trip.com', 'When Samui is the island and you will pay for the concession field.', flightLink('BKK', 'USM'), '/photos/koh-samui.jpg'),
      flights('DMK to HKT', 'Trip.com', 'Don Mueang to Phuket on the low-cost side.', flightLink('DMK', 'HKT'), '/photos/phuket.jpg'),
      flights('BKK to CNX', 'Trip.com', 'Match the Bangkok airport to the airline, then book the bag.', flightLink('BKK', 'CNX'), '/photos/chiang-mai.jpg'),
      transfer('BKK airport car', 'Trip.com', 'If the next hop is DMK, a booked car beats a hopeful BTS with 23 kg.', transferLink('BKK'), '/photos/bangkok.jpg'),
    ],
    faqs: [
      {
        q: 'Can you connect BKK and DMK in two hours?',
        a: 'On paper. In rain, no. Build three hours plus immigration if you just landed international. Better: do not.',
      },
      {
        q: 'Does Bangkok Airways include a bag to Samui?',
        a: 'Usually about 20 kg checked on a standard PG fare. Confirm the fare family. The ATR cabin is smaller than an A320.',
      },
      {
        q: 'Is 7 kg each bag or both?',
        a: 'On the LCCs it is both, combined. The laptop and the water bottle count.',
      },
    ],
  },
  {
    path: '/plan/scooters-and-road-rules',
    title: 'Scooters and road rules',
    description:
      'Most visitor injuries start on a rented scooter. A car licence does not cover one. You need a motorcycle licence and an International Driving Permit that lists motorcycles.',
    lede: 'Scooters are how many visitors get hurt. A car licence does not cover a scooter, even a small automatic. You need a motorcycle licence and an International Driving Permit that lists motorcycles. If you cannot show both, take the van.',
    schema: 'Article',
    crumbs: [
      { name: 'Plan', href: '/plan' },
      { name: 'Scooters and road rules', href: '/plan/scooters-and-road-rules' },
    ],
    facts: [
      { label: 'Legal ride', value: 'Home motorcycle licence plus IDP category A, or a Thai motorcycle licence' },
      { label: 'Car IDP', value: 'Does not cover any scooter' },
      { label: 'Left side', value: 'Thailand drives on the left' },
      { label: '1095', value: 'Pai road is a clinic for week-one rentals' },
    ],
    chips: ['IDP A', 'Helmet', 'Left side'],
    photo: '/photos/northern.jpg',
    paragraphs: [
      'Thai law does not split scooters out of motorcycles. A 110 cc Honda Click and a 400 cc bike both need a motorcycle endorsement. A 2026 scooter rental is often 200 to 350 THB a day plus petrol. The tourist path is your full home motorcycle licence carried with an International Driving Permit that lists category A (or the 1949 motorcycle class). Thailand accepts 1949 and, since May 2021, 1968 convention IDPs. The IDP is a translation. It cannot add a class you do not hold.',
      'A UK CBT is training, not a full licence. An ASEAN motorcycle licence works without an IDP. A Thai car licence does not cover a scooter either. Police checkpoints on Phuket, Samui, and 1095 ask. Insurers ask after the crash. The shop that rented you a bike with a passport photocopy will not write the claim.',
    ],
    sections: [
      {
        id: 'rules',
        title: 'The boring rules that matter',
        table: {
          headers: ['Rule', 'What to do', 'What fails'],
          rows: [
            ['Helmet', 'Wear one that fits. Carry a second for a passenger', 'A chin-strap hanging off the elbow on the bypass'],
            ['Side of the road', 'Left. The opposite of the US and most of Europe', 'The first right turn out of the shop'],
            ['Night and drink', 'Neither on a rental', 'Pai canyon at 22:00. Island beach road after the second bucket'],
            ['Insurance', 'A policy that names motorcycles, not just "vehicles"', 'Travel insurance that voids two-wheel claims'],
            ['Passport as deposit', 'Prefer a cash deposit or a shop that takes a card hold', 'A shop that keeps the passport overnight'],
          ],
        },
      },
      {
        id: 'where',
        title: 'Where a scooter is the wrong machine',
        paragraphs: [
          'Bangkok: BTS, MRT, Grab. Chiang Mai Old City: walk and Grab. Pai loop: van unless you already ride. Phangan and Tao hills: sand, grades, and songthaew math. Lanta west-coast road: fine if you already ride and the hotel is mid-island.',
          'US Embassy driving notes still point residents at the Department of Land Transport for a Thai licence. Tourists should not plan a DLT morning on a 14-day trip. Take the licensed van to Pai and the songthaew on Tao.',
        ],
      },
    ],
    portraits: [
      { title: 'Chiang Mai to Pai', href: '/get-there/chiang-mai-to-pai', photo: '/photos/northern.jpg' },
      { title: 'Grab and BTS', href: '/plan/grab-and-bts', photo: '/photos/bts.jpg' },
      { title: 'Koh Tao', href: '/koh-tao', photo: '/photos/koh-tao.jpg' },
      { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
    ],
    affiliates: [
      stay('Skip the rental', 'Trip.com', 'Sleep where dinner is a walk if you will not ride.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      klook('Cars and vans', 'Tours', 'A driver to the White Temple or Erawan beats a first-week scooter story.', klookTours('Thailand private car'), '/photos/northern.jpg'),
    ],
    faqs: [
      {
        q: 'Will the shop rent without a motorcycle licence?',
        a: 'Many will. That is a shop problem, not a legal one. The checkpoint and the insurer still treat you as unlicensed.',
      },
      {
        q: 'Is a 125 cc "automatic" different?',
        a: 'No. Still a motorcycle. Still category A on the IDP.',
      },
      {
        q: 'What about cars?',
        a: 'A car licence plus an IDP that includes cars is the tourist path for a car. Drive on the left. Do not take a rental onto a Raja ferry unless the contract says so.',
      },
    ],
  },
  {
    path: '/plan/songkran-and-public-holidays',
    title: 'Songkran and public holidays',
    description:
      'Songkran is Thailand\'s New Year water festival, 13 to 15 April. Trains and hotels sell out. Banks close. Buddhist holy days ban alcohol sales.',
    lede: 'Songkran is the Thai New Year water festival, 13 to 15 April. Book it on purpose, or leave the Old City that week. Thai holidays close banks and Immigration, not noodle shops. Buddhist holy days ban alcohol sales.',
    schema: 'Article',
    crumbs: [
      { name: 'Plan', href: '/plan' },
      { name: 'Songkran and public holidays', href: '/plan/songkran-and-public-holidays' },
    ],
    facts: [
      { label: 'Songkran 2026', value: 'Monday 13 to Wednesday 15 April' },
      { label: 'What closes', value: 'Banks, government, many Immigration counters' },
      { label: 'What stays open', value: 'Malls, 7-Eleven, restaurants, most boats' },
      { label: 'Alcohol bans', value: 'Makha, Visakha, Asahna, Khao Phansa, Wan Ok Phansa' },
    ],
    chips: ['13-15 April', 'Book trains early', 'Dry holy days'],
    photo: '/photos/bangkok.jpg',
    paragraphs: [
      'Songkran is known as the mid-April water festival that sells out trains and hotels. The Bank of Thailand 2026 holiday list runs to 19 dates plus substitution Mondays when a holiday hits a weekend. Songkran 2026 is 13 to 15 April. New Year stacked into a long break at the start of January. Father\'s Day on Saturday 5 December picked up a Monday 7 December substitution. Check the BOT PDF the month you fly. Cabinets add bridge days.',
      'Songkran is a water festival, not a temple circuit in the Old City. Chiang Mai moat, Bangkok Khao San, and Pai turn into hose fights. If that is why you came, book the stay and the train 90 days out (SRT advance window). If it is not, leave the Old City or leave the north that week.',
    ],
    sections: [
      {
        id: 'calendar',
        title: '2026 dates that change a trip',
        table: {
          headers: ['Date', 'Holiday', 'Planner note'],
          rows: [
            ['1 to 2 Jan 2026', 'New Year plus a bridge day', 'Five-day New Year stack with 31 Dec 2025. Domestic flights fat.'],
            ['3 Mar 2026', 'Makha Bucha', 'Nationwide alcohol sales ban for the holy day'],
            ['13 to 15 Apr 2026', 'Songkran', 'Water. Sold-out sleepers. Wet phones. Book or avoid.'],
            ['1 May 2026', 'Labour Day', 'Banks and private sector close. Many government offices open'],
            ['31 May and 1 Jun 2026', 'Visakha Bucha plus Monday substitution', 'Sunday holy day, Monday off. Alcohol ban on the holy day'],
            ['29 to 30 Jul 2026', 'Asahna Bucha and Khao Phansa', 'Two dry days. Khao Phansa is government-heavy'],
            ['26 Oct 2026', 'Wan Ok Phansa', 'Alcohol ban. Not always an office holiday'],
            ['5 and 7 Dec 2026', 'Father\'s Day / National Day plus Monday', 'Bangkok weekend crowds move'],
          ],
        },
      },
      {
        id: 'practice',
        title: 'What actually breaks',
        paragraphs: [
          'Immigration extensions that land on a holiday move to the next working day. Do not assume a specific office is open. TDAC is digital and does not care about Songkran. Park booths and Fine Arts sites usually sell tickets. Erawan and Cheow Lan still want cash when the ATMs have queues.',
          'Alcohol bans on the five Buddhist holy days are 24 hours and nationwide. Fines hit the vendor. Your beach club will sell food and shrug. Election windows in 2026 add extra dry hours. Confirm dry hours that week.',
          'Chinese New Year is not a Thai public holiday and still fills Phuket and Samui with regional visitors. Thai long weekends fill Hua Hin and Kanchanaburi. Island boats keep a board.',
        ],
      },
    ],
    portraits: [
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
      { title: 'Monsoon and burn season', href: '/plan/monsoon-and-burn-season', photo: '/photos/phuket.jpg' },
      { title: 'Visas and TDAC', href: '/plan/visas-and-tdac', photo: '/photos/bangkok.jpg' },
      { title: 'Trains and ferries', href: '/plan/trains-and-ferries', photo: '/photos/chiang-mai.jpg' },
    ],
    affiliates: [
      stay('Book Songkran on purpose', 'Trip.com', 'Old City and Nimman sell out. So does Pai.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      trains('Holiday sleepers', 'Trip.com', 'SRT opens about 90 days ahead. Songkran and New Year vanish first.', trainLink('Bangkok', 'Chiang Mai'), '/photos/bts.jpg'),
      flights('Holiday hops', 'Trip.com', 'BKK-CNX and BKK-HKT on long weekends are not walk-up fares.', flightLink('BKK', 'CNX'), '/photos/chiang-mai.jpg'),
    ],
    faqs: [
      {
        q: 'Will my ferry run on Songkran?',
        a: 'Usually. The people problem is the seat to the pier, not the catamaran. Book the Lomprayah or the USM hop early. Confirm the boat if a swell shares the week.',
      },
      {
        q: 'Can you tour temples during Songkran?',
        a: 'Yes, early, in clothes you do not mind wet. After 10:00 in the Old City you are in the festival whether you booked it or not.',
      },
      {
        q: 'Do I need extra cash?',
        a: 'Yes. Banks close. ATMs run out in Pai and on small islands. Withdraw in Chiang Mai or Bangkok before you ride 1095.',
      },
    ],
  },
];
