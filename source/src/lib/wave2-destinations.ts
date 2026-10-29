import {
  stayLink,
  stayAreaLink,
  hotelSearchLink,
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

export const wave2Pages: Page[] = [
  {
    path: '/koh-tao',
    title: 'Koh Tao',
    description: 'The cheap Open Water island past Phangan: Mae Haad pier, Sairee vs Chalok stays, and the January to September sea.',
    lede: 'Koh Tao is known for dive courses, not for a second Full Moon. Sleep Sairee for the strip, Mae Haad for the pier, or Chalok Baan Kao for the south quiet.',
    schema: 'TouristDestination',
    alternateName: 'Ko Tao',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Tao', href: '/koh-tao' },
    ],
    facts: [
      { label: 'Season', value: 'Easier January to September (Lower Gulf)' },
      { label: 'Pier', value: 'Mae Haad, west coast; no airport' },
      { label: 'Boats', value: 'Lomprayah, Seatran, Songserm; Boonsiri nearby' },
      { label: 'Arrival fee', value: '20 THB environmental charge at the pier' },
    ],
    chips: ['Gulf', 'Dive first', 'Mae Haad'],
    photo: '/photos/koh-tao.jpg',
    geo: { lat: 10.096, lon: 99.838, containedIn: 'Gulf of Thailand' },
    paragraphs: [
      'Koh Tao is the dive island of the Samui chain: smallest, most exposed, and priced around Open Water. That is why October to December boats cancel more often than they do at Samui. There is no airport. Everyone lands at Mae Haad on the west coast.',
      'Do not add Tao on a first week unless the Open Water card is the trip. From Bangkok the useful path is a flight to USM, then Lomprayah via Phangan, or the overnight train or bus to Chumphon plus a morning catamaran. Book the boat the afternoon before. Confirm the boat if a swell is running.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay',
        paragraphs: [
          'Pick a west-coast pocket and stay put. Songthaews cost more than you expect. Agree the fare at the pier before you climb in. Scooter hills are steep and sandy; rent only if you already ride.',
        ],
        table: {
          headers: ['Area', 'Who it fits', 'Trade-off'],
          rows: [
            ['Mae Haad', 'Divers who want a two-minute walk to the boat', 'Practical village, not a postcard beach'],
            ['Sairee', 'First-timers who want dinner, bars, and a long sand walk', 'The loudest road and the busiest sunset'],
            ['Chalok Baan Kao', 'People who want a south bay and fewer scooters at night', 'Farther from most dive boats and the pier'],
            ['Ao Tanot and the east coves', 'Repeat visitors with a pickup booked', 'Steep roads, thin evening food'],
          ],
        },
      },
      {
        id: 'season',
        title: 'Monsoon note',
        paragraphs: [
          'This is Lower Gulf water, the opposite calendar from Phuket. January to September is the easier window. October to December is the wet, windy end, and Tao feels it first because it sits farther north and more open than Phangan.',
          'Do not stack Tao with an Andaman week in October. If your dates are November, go to Phuket, Krabi, or Lanta instead. If your dates are July, this is the island that still dives.',
        ],
      },
      {
        id: 'get-there',
        title: 'How you actually arrive',
        paragraphs: [
          'Lomprayah, Seatran Discovery, and Songserm use adjacent berths at Mae Haad. Boonsiri uses its own nearby pier. Read the operator name on the ticket. Chumphon boats use more than one mainland pier; Tung Makham Noi and Matapon are not the same desk.',
          'From Samui the crossing is about 1.5 to 2 hours and usually calls at Phangan. From Phangan it is about 1 to 1.5 hours. From Chumphon a fast boat is about 1.5 to 2 hours. Schedules move with weather.',
        ],
      },
    ],
    portraits: [
      { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Bangkok to Samui', href: '/get-there/bangkok-to-koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Koh Tao stays', 'Filter by bay', 'Sairee for the strip. Mae Haad if the boat is the point.', stayLink('koh-tao'), '/photos/koh-tao.jpg'),
      stay('Sairee hotels', 'West-coast default', 'Walk to dinner. Hear the road.', stayAreaLink('sairee'), '/photos/koh-tao.jpg'),
      klook('Lomprayah and island boats', 'Rail and ferry', 'Book the afternoon before, not at the pier in a swell.', klookRailFerry('Lomprayah Koh Tao'), '/photos/koh-samui.jpg'),
      klook('Dive trips', 'Klook', 'Open Water and fun dives. Confirm the shop still sails that morning.', klookTours('Koh Tao diving'), '/photos/koh-tao.jpg'),
    ],
    faqs: [
      {
        q: 'Do you need Koh Samui as well?',
        a: 'One night on Samui is enough if you fly USM. Stay on Tao if the course is the point. Phangan is the party fork, not a required stop.',
      },
      {
        q: 'Is Koh Tao worth it if you do not dive?',
        a: 'Usually no. The beaches are fine and the viewpoints are real, but the island is priced and scheduled around dive boats. Pick Phangan or Lanta if you want a bay without a regulator.',
      },
      {
        q: 'When do boats cancel?',
        a: 'Most often October to December, and more often than at Samui. Fast boats cancel first. Keep a buffer day before an international flight.',
      },
    ],
  },
  {
    path: '/koh-lanta',
    title: 'Koh Lanta',
    description: 'Long Andaman west-coast beaches south of Krabi. Quieter than Phi Phi, bigger than Railay. November to April.',
    lede: 'Lanta is the slower Andaman island: space and a scooter week, not a party village. Stay north for boats and dinner. Stay south for empty sand.',
    schema: 'TouristDestination',
    alternateName: 'Ko Lanta Yai',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Lanta', href: '/koh-lanta' },
    ],
    facts: [
      { label: 'Season', value: 'Best November to April (Andaman)' },
      { label: 'Boats', value: 'Saladan in season; road plus car ferry all year' },
      { label: 'Airport', value: 'KBV, then van and Hua Hin pier on the Krabi side' },
      { label: 'Move', value: 'No useful public bus; scooter or hotel pickup' },
    ],
    chips: ['Andaman', 'Saladan', 'West-coast road'],
    photo: '/photos/koh-lanta.jpg',
    geo: { lat: 7.624, lon: 99.042, containedIn: 'Andaman Coast' },
    paragraphs: [
      'Koh Lanta is a long west-facing island, known for space and a slower Andaman week. It is not a village around one bay. Boats from Krabi Town (Klong Jilad) and Ao Nang (Nopparat Thara) land at Saladan from about November to April and take about 2 to 2.5 hours. From May to October those boats thin out or stop. The road still works: van to the mainland Hua Hin pier (this is not the gulf resort), a short car ferry to Lanta Noi of about 15 minutes, then the bridge onto Lanta Yai.',
      'Pair Lanta with Krabi or Phuket, not with Samui. The Andaman monsoon is the rule here. Koh Rok and Koh Haa snorkel boats follow the same winter window. Many south-end resorts close in the wet months. Check that your hotel is actually open.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay',
        paragraphs: [
          'The west-coast road runs south from Saladan past each beach in order. Transfer time is the real cost of a pretty bay. Book a pickup. Tuk-tuks are not a city habit here.',
        ],
        table: {
          headers: ['Area', 'Who it fits', 'Trade-off'],
          rows: [
            ['Saladan', 'Late boats and early departures', 'Port town. Sleep on a beach instead if you can.'],
            ['Klong Dao and Long Beach', 'Families and first stays who want shallow water and dinner', 'The most built-up strip. Quiet in low season, busy in Christmas week.'],
            ['Klong Khong and Klong Nin', 'People who want a mid-island pause', 'Thinner menus, still a scooter to the south park'],
            ['Kantiang and the far south', 'Couples who want a bay and the national park at dawn', 'Long transfer from Saladan. Dining dies after the village.'],
          ],
        },
      },
      {
        id: 'season',
        title: 'Monsoon note',
        paragraphs: [
          'Andaman calendar: November to April is the trip. May to October is green-season discounts, west-coast chop, and cancelled island days. The sheltered car-ferry crossing still runs. Do not plan a Phi Phi or Rok day as a must in August.',
          'This is not Lower Gulf logic. Lanta in July is a gamble. Tao or Samui is the July island.',
        ],
      },
    ],
    portraits: [
      { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Phuket to Krabi', href: '/get-there/phuket-to-krabi-phi-phi', photo: '/photos/phuket.jpg' },
      { title: 'Koh Lipe', href: '/koh-lipe', photo: '/photos/koh-lipe.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Koh Lanta stays', 'Name the beach', 'Klong Dao if you want dinner. Kantiang if you want the bay.', stayLink('koh-lanta'), '/photos/koh-lanta.jpg'),
      stay('Klong Dao hotels', 'North-west default', 'Closest useful beach to Saladan.', stayAreaLink('klong-dao'), '/photos/koh-lanta.jpg'),
      klook('Four islands and Rok', 'Island hopping', 'Morning boats in season only. The road is the monsoon backup.', klookIslandHopping('Koh Lanta'), '/photos/koh-lanta.jpg'),
    ],
    faqs: [
      {
        q: 'Koh Lanta or Railay?',
        a: 'Railay if the cliff pocket is the whole point and you accept a longtail. Lanta if you want a week of beach with a scooter and space. They share the Andaman season, not the same mood.',
      },
      {
        q: 'Can you reach Lanta in the rainy season?',
        a: 'Yes, by road and the car ferry. Passenger boats from Krabi are the piece that fails. Confirm the hotel is open before you book a green-season rate.',
      },
      {
        q: 'How many nights?',
        a: 'Four if Lanta is the south. Two if it is a pause after Krabi. Do not day-trip it from Ao Nang; the transfer eats the morning.',
      },
    ],
  },
  {
    path: '/koh-lipe',
    title: 'Koh Lipe',
    description: 'Tiny walking island at the far south of the Andaman: three beaches, boats from Pak Bara, November to April water.',
    lede: 'Lipe is known for clear, walkable sand, not for an easy transfer. Land on Pattaya Beach, swim at Sunrise, sleep at Sunset if you want the quiet end.',
    schema: 'TouristDestination',
    alternateName: 'Ko Lipe',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Lipe', href: '/koh-lipe' },
    ],
    facts: [
      { label: 'Season', value: 'Best November to April (Andaman)' },
      { label: 'Mainland pier', value: 'Pak Bara, Satun; about 1.5 to 2.5 hours' },
      { label: 'Airports', value: 'Hat Yai or Trang, then a van to the pier' },
      { label: 'Landing', value: 'Floating pier off Pattaya Beach, then a longtail' },
    ],
    chips: ['Andaman', 'Pak Bara', 'Walking Street'],
    photo: '/photos/koh-lipe.jpg',
    geo: { lat: 6.489, lon: 99.305, containedIn: 'Andaman Coast' },
    paragraphs: [
      'Koh Lipe is a walking sandbar in Tarutao National Park, closer to Langkawi than to Phuket. That distance is the point and the cost. There is no concrete ferry pier. Boats stand off Pattaya Beach. You pay a small longtail and pier fee to reach the sand, and a national-park fee on landing. Keep the receipt. Check the posted foreign rate at the desk; older blogs disagree.',
      'High-season boats also run from Lanta, Phi Phi, and sometimes Langkawi. Those legs cancel first when the Andaman is up. From May to October, treat Pak Bara as the only serious plan and still expect morning cancellations. Do not book Lipe the night before a long-haul from HKT.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay',
        paragraphs: [
          'The island is small. Walking Street links Pattaya to Sunrise in about 10 to 15 minutes. Sunset is a shorter walk north. Scooters exist; most people do not need one.',
        ],
        table: {
          headers: ['Beach', 'Who it fits', 'Trade-off'],
          rows: [
            ['Pattaya Beach', 'People who want boats, ATMs, and dinner on the sand', 'Boat-arrival scrums. This is not the Pattaya east of Bangkok.'],
            ['Sunrise Beach', 'Swimmers and shore snorkelers', 'Longer, clearer mornings. Farther from the immigration desk.'],
            ['Sunset Beach', 'Quiet nights and the actual sunset', 'Smallest beach. Thinner restaurant row.'],
          ],
        },
      },
      {
        id: 'season',
        title: 'Monsoon note',
        paragraphs: [
          'Andaman winter sea. November to April is why you came. July here is not a Lower Gulf workaround; it is a long van to a pier that may not sail.',
          'Operators include Satun Pakbara Speed Boat Club, Bundhaya, Ploysiam, Tigerline, and others. Times cluster around late morning. Rough-day postponements are common. Keep a spare night in Hat Yai or Trang if you have a flight.',
        ],
      },
    ],
    portraits: [
      { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
      { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Koh Lipe stays', 'Name the beach', 'Pattaya for logistics. Sunrise for the swim.', stayLink('koh-lipe'), '/photos/koh-lipe.jpg'),
      klook('Pak Bara boats', 'Rail and ferry', 'Van-plus-boat combos from Hat Yai beat a freelance pier scramble.', klookRailFerry('Koh Lipe ferry Pak Bara'), '/photos/koh-lipe.jpg'),
      klook('Snorkel days', 'Island hopping', 'Adang and the nearby islets. Morning only, and only in season.', klookIslandHopping('Koh Lipe'), '/photos/koh-lipe.jpg'),
    ],
    faqs: [
      {
        q: 'Koh Lipe or Koh Lanta?',
        a: 'Lanta if you want a scooter, space, and a road escape when boats die. Lipe if you want a walking sandbar and you can defend two travel days. Do not do both on a first south week.',
      },
      {
        q: 'Which airport?',
        a: 'Hat Yai has more flights. Trang is closer for some vans. Phuket only makes sense if you already have an Andaman week and a high-season boat. There is no airport on Lipe.',
      },
      {
        q: 'Is there a pier on the island?',
        a: 'No fixed passenger pier. You transfer by longtail from a floating platform off Pattaya Beach. Wear sandals you can wet.',
      },
    ],
  },
  {
    path: '/koh-chang-and-koh-kood',
    title: 'Koh Chang and Koh Kood',
    description: 'Eastern Gulf islands off Trat: jungle and west-coast beaches on Chang, quieter resorts on Kood. November to February.',
    lede: 'These are jungle-and-beach islands on a different gulf from Samui. Chang is the car-ferry stay. Kood is the slower boat from Laem Sok.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Central and east', href: '/destinations/central-and-east' },
      { name: 'Koh Chang and Koh Kood', href: '/koh-chang-and-koh-kood' },
    ],
    facts: [
      { label: 'Season', value: 'Easier November to February; wet May to October' },
      { label: 'Chang ferry', value: 'Ao Thammachat to Ao Sapparot, about 30 minutes' },
      { label: 'Kood boats', value: 'Laem Sok pier; Boonsiri and Koh Kood Express' },
      { label: 'Airport', value: 'TDX (Trat), or the Bangkok road' },
    ],
    chips: ['Eastern Gulf', 'Trat', 'Not Samui'],
    photo: '/photos/koh-chang.jpg',
    geo: { lat: 12.1, lon: 102.35, containedIn: 'Eastern Gulf of Thailand' },
    paragraphs: [
      'Chang and Kood are Trat islands: west-coast beaches, jungle hills, and an eastern Gulf calendar. Do not apply Samui dates here. Samui and Tao are easier January to September. The dry, busy window off Trat is November to February. May to October is rain, thinner boat lists, and closed beach bars. You can still cross to Chang most days. Kood boats drop to one or two sailings in June to September.',
      'Trat Airport (TDX) is about 17 km from Ao Thammachat and about 60 km from Laem Sok. Bangkok is a five to six hour road. Bangkok Airways is the usual TDX carrier; check the day\'s last boat before you book an afternoon flight. Centrepoint / Trat Ferry to Dan Kao has been suspended since 2024. Plan on Ferry Koh Chang from Ao Thammachat unless an operator is back.',
    ],
    sections: [
      {
        id: 'chang-stay',
        title: 'Koh Chang stays',
        paragraphs: [
          'Sleep on the west coast. The east is ferry logistics and jungle. Songthaews from Ao Sapparot run the west-coast road; prices rise as you go south. The hills between beaches are real.',
        ],
        table: {
          headers: ['Area', 'Who it fits', 'Trade-off'],
          rows: [
            ['White Sand Beach (Hat Sai Khao)', 'First nights, sunset bars, easiest songthaew', 'The loudest strip on the island'],
            ['Klong Prao', 'Families and longer beaches', 'Spread out. You will ride between dinner and the room.'],
            ['Kai Bae', 'A middle stop with a village', 'Small beach at high tide'],
            ['Lonely Beach', 'Budget nights and a late bar', 'The name is historic. It is not lonely on a Saturday.'],
            ['Bang Bao', 'Divers and the boat to Kood or Mak', 'A working pier village, not a swim beach'],
          ],
        },
      },
      {
        id: 'kood',
        title: 'Koh Kood stays',
        paragraphs: [
          'Kood is the quieter, pricier island. Boonsiri and Koh Kood Express sail from Laem Sok in about 1 to 1.5 hours. From Chang, the Bang Bao catamaran is the short sea path when it runs; the reliable wet-season path is back to the mainland and down to Laem Sok.',
          'Klong Chao is the village-and-waterfall base. Ao Tapao and the west bays are the resort line. ATMs are few. Soneva Kiri is the ultra-luxe reason some people skip Chang entirely; it lives on the resort-living page.',
        ],
      },
      {
        id: 'season',
        title: 'Monsoon note',
        paragraphs: [
          'Eastern Gulf, not Andaman, not Lower Gulf. November to February is the photograph. March and April are hot. May to October is rain and short boat lists. Chang\'s car ferry is the resilient crossing. Do not treat a July Kood booking like a July Tao booking.',
        ],
      },
    ],
    portraits: [
      { title: 'Central and east', href: '/destinations/central-and-east', photo: '/photos/ayutthaya.jpg' },
      { title: 'Soneva Kiri', href: '/resort-living/soneva-kiri', photo: '/photos/resort.jpg' },
      { title: 'Hua Hin', href: '/hua-hin', photo: '/photos/hua-hin.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Koh Chang stays', 'West coast only', 'White Sand for a first night. Klong Prao for space.', stayLink('koh-chang'), '/photos/koh-chang.jpg'),
      stay('White Sand Beach', 'Hat Sai Khao', 'Closest useful strip after the car ferry.', stayAreaLink('white-sand-beach'), '/photos/koh-chang.jpg'),
      stay('Koh Kood stays', 'Laem Sok boats', 'Book the boat before the villa. June to September lists shrink.', stayLink('koh-kood'), '/photos/resort.jpg'),
      klook('Chang and Kood boats', 'Rail and ferry', 'Car ferry is cash at Ao Thammachat. Kood tickets are the ones to prebook.', klookRailFerry('Koh Chang ferry'), '/photos/koh-chang.jpg'),
    ],
    faqs: [
      {
        q: 'Koh Chang or Koh Samui?',
        a: 'Samui if you want an airport on the island and the January to September Gulf window. Chang if you want Trat, a car ferry, and a November to February week that is not Phuket.',
      },
      {
        q: 'Do you need both Chang and Kood?',
        a: 'No. Pick Chang for choice and songthaews. Pick Kood if the resort is the trip. A Bang Bao link works in high season; do not force both islands into four nights.',
      },
      {
        q: 'Is Centrepoint still running?',
        a: 'It has been suspended since 2024. Use Ferry Koh Chang at Ao Thammachat unless a desk on the ground says otherwise. Tickets are typically cash at the pier.',
      },
    ],
  },
  {
    path: '/khao-lak',
    title: 'Khao Lak and the Similan Islands',
    description: 'Long Andaman mainland beach north of Phuket, and the usual base for Similan day boats (15 October to 15 May).',
    lede: 'Khao Lak is a long, quiet Andaman beach, not a Phuket suburb. Sleep here for Similan mornings. Do not sleep here for nightlife.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Khao Lak', href: '/khao-lak' },
    ],
    facts: [
      { label: 'Season', value: 'Andaman easier November to April' },
      { label: 'Similan park', value: 'Open 15 October to 15 May; closed 16 May to 14 October' },
      { label: 'Pier', value: 'Thap Lamu, Thai Mueang, about 70 km offshore' },
      { label: 'Airport', value: 'HKT, then 70 to 90 minutes north on Highway 4' },
    ],
    chips: ['Andaman', 'Thap Lamu', 'Similan e-ticket'],
    photo: '/photos/khao-lak.jpg',
    geo: { lat: 8.672, lon: 98.25, containedIn: 'Andaman Coast' },
    paragraphs: [
      'Khao Lak is the long-beach Similan base in Phang Nga, north of the Sarasin Bridge. From Phuket Airport you drive Highway 402 off the island and north on Highway 4. Nang Thong is about 70 minutes without traffic. Bang Niang is a few minutes farther. Khuk Khak and Laem Pakarang sit later still. There is no airport and no ferry. It is a car.',
      'The Similan Islands are a national park, not a hotel strip. The Department of National Parks opens them from 15 October to 15 May and closes them from 16 May to 14 October every year so the reef can rest and so the southwest monsoon does not sink day boats. Buy the DNP e-ticket. Foreign adult park fees have been in the 500 THB range; confirm on the e-ticket site the week you go. Koh Tachai stays closed. Speedboats from Thap Lamu take about 1.5 hours. Phuket pickups add a long pre-dawn road.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay',
        paragraphs: [
          'Highway 4 is the spine. Crossing it on foot at night is the local hazard, not the sea. Stay on the beach side of the road when you can.',
        ],
        table: {
          headers: ['Area', 'Who it fits', 'Trade-off'],
          rows: [
            ['Nang Thong and Bang La On', 'First stays, walkable dinner', 'The "town" feeling. Closest useful strip after the airport drive.'],
            ['Bang Niang', 'A wider beach and a slightly later night', 'Still a highway town. Tsunami memorials sit just inland.'],
            ['Khuk Khak and Pakarang', 'Couples who want space', 'You will ride back south for most restaurants.'],
            ['Khao Lak village and Thap Lamu', 'Early Similan check-ins', 'Not the swim. Useful the night before a 6:00 pier call.'],
          ],
        },
      },
      {
        id: 'season',
        title: 'Monsoon note',
        paragraphs: [
          'Andaman rules. November to April is the beach and the park. May to October is rain measured in metres at Takua Pa, not a "green season bargain" if the Similans are why you came. They will be closed.',
          'Early and late park dates (late October, early May) still cancel on swell. If the Similans are the trip, keep a spare day. Pair Khao Lak with Phuket or Khao Sok, not with Samui.',
        ],
      },
    ],
    portraits: [
      { title: 'Similan and Surin', href: '/khao-lak/similan-and-surin-islands', photo: '/photos/khao-lak.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
    ],
    affiliates: [
      stay('Khao Lak stays', 'Name the beach', 'Bang Niang or Nang Thong unless you want a quiet north cape.', stayLink('khao-lak'), '/photos/khao-lak.jpg'),
      stay('Bang Niang hotels', 'Main strip', 'Beach plus dinner without a 20-minute hop.', stayAreaLink('bang-niang'), '/photos/khao-lak.jpg'),
      klook('Similan day boats', 'Tours', 'Only while the park is open. E-ticket plus operator. Morning departure from Thap Lamu.', klookTours('Similan Islands day trip'), '/photos/khao-lak.jpg'),
      stay('Phuket airport car', 'HKT to the strip', 'Book the transfer. The Smart Bus does not do this run.', transferLink('HKT'), '/photos/phuket.jpg', 'Search transfers'),
    ],
    faqs: [
      {
        q: 'Khao Lak or Phuket?',
        a: 'Phuket if you want an airport beach and dinner variety. Khao Lak if the Similans or a quieter Andaman shore are the point. They share the same monsoon. Do not treat Khao Lak as a cheaper Patong.',
      },
      {
        q: 'Can you visit the Similans from Phuket?',
        a: 'Yes, with a long pre-dawn pickup. Sleeping in Khao Lak saves the worst of that road. The official pier is Thap Lamu, not a Patong beach.',
      },
      {
        q: 'Are the Similans open in July?',
        a: 'No. The park is closed from 16 May to 14 October. Anyone selling a July Similan trip is selling a different island or a lie.',
      },
    ],
  },
  {
    path: '/pai',
    title: 'Pai and the Mae Hong Son Loop',
    description: 'Mountain town on Route 1095: 762 bends from Chiang Mai, then the optional 600 km Mae Hong Son Loop.',
    lede: 'Pai is a mountain night after 762 bends, not a first-week must. The Mae Hong Son Loop is about 600 km. Give it four days or skip it.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Northern Thailand', href: '/destinations/northern-thailand' },
      { name: 'Pai and the loop', href: '/pai' },
    ],
    facts: [
      { label: 'Chiang Mai to Pai', value: 'About 135 km, 3 to 4 hours, 762 bends' },
      { label: 'Loop', value: 'About 600 km; four days minimum' },
      { label: 'Season', value: 'Cool November to February; haze risk March to April' },
      { label: 'Airport', value: 'No scheduled Pai flights; start from CNX' },
    ],
    chips: ['Route 1095', 'Loop optional', 'Not a day trip'],
    photo: '/photos/pai.jpg',
    geo: { lat: 19.358, lon: 98.44, containedIn: 'Northern Thailand' },
    paragraphs: [
      'Pai is the mountain town at the end of Route 1095. From Chiang Mai you take Route 107 to Mae Malai, then 762 bends over the ridge. Minivans do it in about 3.5 hours. A scooter does it in the same time if you do not stop, and in a full day if you do. Pai Airport has had no scheduled commercial flights since 2017. Do not plan around a hop.',
      'Pai town is a walking grid of guesthouses, pizza, and canyon selfies. It is worth one or two nights if you like that mix. It is not worth a same-day out-and-back from Chiang Mai. The road is the tax. Pay it once and sleep.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay in Pai',
        paragraphs: [
          'Sleep in town if you want Walking Street and a songthaew to the canyon. Sleep across the river or toward the hot springs if you want quiet and a scooter in the morning. Weekend vans from Chiang Mai fill the soi; weekdays are the town you were sold.',
        ],
        table: {
          headers: ['Base', 'Who it fits', 'Trade-off'],
          rows: [
            ['Pai town', 'One or two nights, cafes, sunset viewpoint', 'Scooters and speakers. Not a mountain hermitage.'],
            ['Pang Mapha / Soppong', 'Loop riders who want caves more than Pai bars', 'Thin dinner. Worth it on a five-day loop.'],
            ['Mae Hong Son town', 'The real halfway, Jong Kham lake, morning market', 'Earlier nights. The point of the loop if Pai felt like a costume.'],
            ['Mae Sariang', 'The south-west corner before the long run home', 'A road town. Do not skip the sleep or you will ride Route 108 in the dark.'],
          ],
        },
      },
      {
        id: 'loop',
        title: 'The loop, if you mean it',
        paragraphs: [
          'Anticlockwise is the usual first go: Chiang Mai, Pai, Mae Hong Son, Mae Sariang, back on Route 108 via Hot. Clockwise puts the gentler 108 first, which is kinder if your last ride was a city Grab. Four days is the workable minimum. Five or six is the version that includes Ban Rak Thai or a cave stop.',
          'Thai tourism materials still warn that 1095 hurts foreign riders. Helmets are not optional. Do not ride at night. Do not drink and continue. Insurance that actually covers a 150 cc bike is the boring item that matters. A minivan-plus-hotel loop is the correct call if you have never ridden a mountain road.',
        ],
      },
      {
        id: 'season',
        title: 'Season in the hills',
        paragraphs: [
          'November to February is cool and the reason to come. March and April can sit under burn-season haze; views die even when the road is dry. July to September is rideable with rain gear and earlier days. Songkran in Pai is a water fight, not a temple circuit.',
        ],
      },
    ],
    portraits: [
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Chiang Rai', href: '/chiang-rai', photo: '/photos/chiang-rai.jpg' },
      { title: 'Northern corridor', href: '/destinations/northern-thailand', photo: '/photos/northern.jpg' },
    ],
    affiliates: [
      stay('Pai stays', 'Town or river', 'Two nights if you rode 1095. One night if a van dropped you and you leave at dawn.', stayLink('pai'), '/photos/pai.jpg'),
      stay('Chiang Mai start', 'Old City or Nimman', 'Sleep here the night before the bends.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      klook('Pai day vans', 'Tours', 'A day trip is a long sit. Overnight is the better product.', klookTours('Pai Chiang Mai'), '/photos/pai.jpg'),
    ],
    faqs: [
      {
        q: 'Is Pai worth it on a first trip?',
        a: 'Only if you want a mountain night and you already have Chiang Mai. Skip it if the week is Bangkok plus one coast. The road is not a scenic freebie.',
      },
      {
        q: 'Can you do the Mae Hong Son Loop in a weekend?',
        a: 'You can complete the tarmac. You will not have a trip. Four days is the floor. Pai alone is the weekend version.',
      },
      {
        q: 'Scooter or minivan?',
        a: 'Minivan unless you already ride. 1095 is well paved and still a clinic for first-week rentals. Cars do the loop fine.',
      },
    ],
  },
  {
    path: '/chiang-rai',
    title: 'Chiang Rai',
    description: 'White Temple, Blue Temple, and a Mekong day. One or two nights. Not a second Chiang Mai.',
    lede: 'Chiang Rai is known for the White Temple and a quieter city than Chiang Mai. Fly CEI or take the Green Bus. Do not add it on the same first week as Pai.',
    schema: 'City',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Northern Thailand', href: '/destinations/northern-thailand' },
      { name: 'Chiang Rai', href: '/chiang-rai' },
    ],
    facts: [
      { label: 'Airport', value: 'CEI (Mae Fah Luang), about 80 to 95 minutes from Bangkok' },
      { label: 'White Temple', value: '200 THB for foreigners since 1 January 2026' },
      { label: 'Hours', value: 'Generally 08:00 to 17:30; last entry about 17:00' },
      { label: 'From Chiang Mai', value: 'Green Bus about 3.5 hours' },
    ],
    chips: ['CEI', 'Wat Rong Khun', 'One night'],
    photo: '/photos/chiang-rai.jpg',
    geo: { lat: 19.907, lon: 99.831, containedIn: 'Northern Thailand' },
    paragraphs: [
      'Chiang Rai is known for Wat Rong Khun, the White Temple, and a low-rise grid that closes earlier than Nimman. Add a second day for the Golden Triangle at Chiang Saen or Sop Ruak on the Mekong. Sleep in town. Day-trip the temples. A same-day van from Chiang Mai turns the White Temple into a parking lot and a lunch stop.',
      'Wat Rong Khun sits about 13 to 15 km south on Highway 1. Chalermchai Kositpipat\'s project is a working temple and a private art site. Foreign tickets rose to 200 THB on 1 January 2026 and include the Cave of Art. Thai nationals, visitors 70 and over, and children under 120 cm enter free. Cash at the gate. Shoulders and knees covered. No photography inside the ubosot. Be there at 08:00; Chiang Mai coaches arrive late morning.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay',
        paragraphs: [
          'Stay near the night bazaar or the river if you want dinner without a tuk-tuk. Stay nearer CEI only if your flight is brutal. The White Temple is a southbound hop, not a neighbourhood.',
        ],
        table: {
          headers: ['Area', 'Who it fits', 'Trade-off'],
          rows: [
            ['City / night bazaar', 'One-night temple circuit', 'Early shutdown. Fine. You came for morning light, not clubs.'],
            ['Riverside', 'Slower evenings', 'A Grab to dinner. Better sleep.'],
            ['Chiang Saen / Golden Triangle', 'A second night on the Mekong', 'Far from CEI and from the White Temple. Only if the river is the point.'],
          ],
        },
      },
      {
        id: 'circuit',
        title: 'The useful circuit',
        paragraphs: [
          'White Temple at opening, then Wat Rong Suea Ten (Blue Temple) in town, then Baan Dam (Black House) north if you still have stomach for it. They are not one aesthetic. Do not pay for a "big Buddha plus hot spring plus lunch" van that burns the afternoon on souvenir stops.',
          'From CEI, a car to the White Temple is about 25 to 30 minutes. Local buses run from Bus Terminal 1 toward the temple on Highway 1. Check the last useful bus if you are not using a Grab back.',
        ],
      },
      {
        id: 'season',
        title: 'Season',
        paragraphs: [
          'November to February is cool and clear. March and April can be smoke season; the white plaster photographs as grey. The rainy months still work for a temple day. This is not a monsoon-coast decision.',
        ],
      },
    ],
    portraits: [
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Pai and the loop', href: '/pai', photo: '/photos/pai.jpg' },
      { title: 'Northern corridor', href: '/destinations/northern-thailand', photo: '/photos/northern.jpg' },
    ],
    affiliates: [
      stay('Chiang Rai stays', 'Town first', 'Sleep in the city. Temple hotels are a coach dump.', stayLink('chiang-rai'), '/photos/chiang-rai.jpg'),
      klook('White Temple vans', 'Tours', 'Useful from Chiang Mai only if you refuse to sleep here. Better as a local car.', klookTours('Chiang Rai White Temple'), '/photos/chiang-rai.jpg'),
    ],
    faqs: [
      {
        q: 'Chiang Rai or Pai?',
        a: 'Chiang Rai for temples and a real airport. Pai for the mountain road. Do not do both on a first week out of Chiang Mai.',
      },
      {
        q: 'Is the White Temple free?',
        a: 'Not for most foreign visitors. Budget 200 THB since 1 January 2026, cash, and ignore blogs that still say 100 or free. Check the gate if you qualify for the age or height waiver.',
      },
      {
        q: 'How many nights?',
        a: 'One if you only want the temple circuit. Two if you add the Mekong. Zero if Chiang Mai already ate the north budget.',
      },
    ],
  },
  {
    path: '/sukhothai',
    title: 'Sukhothai',
    description: 'UNESCO park you bicycle at dawn: lotus-bud chedis, Old Sukhothai stays, not a Bangkok day trip.',
    lede: 'Sukhothai is lotus-bud chedis you ride between on a bicycle, not a Bangkok day trip, so sleep in Old Sukhothai and treat the new town as a taxi if you land late.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Sukhothai', href: '/sukhothai' },
    ],
    facts: [
      { label: 'Park', value: 'UNESCO; three paid zones plus open outskirts' },
      { label: 'Central zone', value: '200 THB foreigners; 06:30 to 19:30 most days' },
      { label: 'Get there', value: 'THS on Bangkok Airways; PHS is the fallback' },
      { label: 'Move', value: 'Rent a bicycle at the central gate' },
    ],
    chips: ['UNESCO', 'Bicycle', 'Old town'],
    photo: '/photos/sukhothai.jpg',
    geo: { lat: 17.017, lon: 99.703, containedIn: 'Lower North' },
    paragraphs: [
      'Sukhothai is the 13th-century capital, known for lotus-bud chedis you bicycle at opening. The Fine Arts Department splits the park. The inner historic zone is the one you came for: Wat Mahathat, Wat Sa Si, Wat Si Sawai. Their virtual park page lists 200 THB for foreign visitors in the inner zone, 120 THB each for the northern zone (Wat Si Chum, Wat Phra Phai Luang) and the western Aranyik zone, or 400 THB as a combined rate. Thai tickets are 20 THB a zone. Bicycles pay 10 THB a zone at the gate. An older QR page still shows 100 THB. Go by the price posted at the staffed ticket booth.',
      'Inner-zone hours on that official page are 06:30 to 19:30 Monday to Friday and Sunday, and 06:30 to 21:00 on Saturday. Wat Si Chum and Wat Phra Phai Luang list 07:30 to 17:30. Aranyik lists 08:00 to 16:30. Office line: 055 697 527. Si Satchanalai is a separate park to the north. It is a second morning, not a footnote.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay',
        paragraphs: [
          'Old Sukhothai (Muang Kao) puts you at the gate for 06:30 light. New Sukhothai, about 12 km east, has more hotels and a duller dawn. Bangkok Airways flies into Sukhothai Airport (THS) when the schedule fits; Phitsanulok (PHS) is the cheaper fallback for trains and late landings. Do not try this as a Bangkok day trip.',
        ],
        table: {
          headers: ['Base', 'Who it fits', 'Trade-off'],
          rows: [
            ['Old Sukhothai', 'Dawn bikes and a quiet night', 'Thin dining after 21:00'],
            ['New Sukhothai', 'More rooms, more ATMs', 'A songthaew or Grab to the ruins every morning'],
            ['Phitsanulok', 'Same-day PHS flights', 'You will spend the useful cool hour in a van'],
          ],
        },
      },
      {
        id: 'season',
        title: 'Season',
        paragraphs: [
          'November to February is the kind park. March and April are oven-hot on bare laterite. Rain still works if you start at opening. This is inland. Coast monsoons do not decide it.',
        ],
      },
    ],
    portraits: [
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Northern corridor', href: '/destinations/northern-thailand', photo: '/photos/northern.jpg' },
    ],
    affiliates: [
      stay('Sukhothai stays', 'Old town first', 'Filter for Historical Park or Muang Kao.', stayLink('sukhothai'), '/photos/sukhothai.jpg'),
      klook('Park and bicycle tours', 'Tours', 'A guide helps if you skip the reading. A bicycle is still the right machine.', klookTours('Sukhothai Historical Park'), '/photos/sukhothai.jpg'),
    ],
    faqs: [
      {
        q: 'Sukhothai or Ayutthaya?',
        a: 'Ayutthaya if you have one ruin day from Bangkok. Sukhothai if you will sleep out of the capital and want space between the chedis. They are not interchangeable afternoons.',
      },
      {
        q: 'Do you need every zone?',
        a: 'No. Buy the inner zone. Add the north if you want the Wat Si Chum mondop face. The west is for people who still have legs at 14:00.',
      },
      {
        q: 'How do you get there from Bangkok?',
        a: 'Fly Bangkok Airways into Sukhothai Airport (THS) when the schedule fits. Phitsanulok (PHS) is about one hour east, then a van west to the park. The train-plus-bus path works and eats a day. This is not a same-day hop like Ayutthaya from Bangkok.',
      },
    ],
  },
  {
    path: '/ayutthaya',
    title: 'Ayutthaya',
    description: 'UNESCO brick temples an hour by train from Bangkok. A ruin day, or a dawn stay if you want empty prangs.',
    lede: 'Ayutthaya is the ruin day from Bangkok. Take the train from Krung Thep Aphiwat, move by bicycle or tuk-tuk, and leave on an afternoon train unless you want dawn.',
    schema: 'TouristDestination',
    alternateName: 'Phra Nakhon Si Ayutthaya',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Central and east', href: '/destinations/central-and-east' },
      { name: 'Ayutthaya', href: '/ayutthaya' },
    ],
    facts: [
      { label: 'Train', value: 'About one hour from Krung Thep Aphiwat' },
      { label: 'Tickets', value: '80 THB per paid site or 300 THB combo, foreigners' },
      { label: 'Hours', value: 'Paid sites roughly 08:00 to 16:30-18:30; check each wat' },
      { label: 'Nights', value: 'Day trip first; overnight only for dawn' },
    ],
    chips: ['UNESCO', 'Train day', 'Bicycle or tuk-tuk'],
    photo: '/photos/ayutthaya.jpg',
    geo: { lat: 14.353, lon: 100.565, containedIn: 'Central Thailand' },
    paragraphs: [
      'Ayutthaya is the island city of brick prangs and root-wrapped Buddhas, an hour north of Bangkok. The Fine Arts Department lists paid monuments at 80 THB each for foreign visitors or 300 THB as a flat ticket (Thai 10 / 40). The combo usually covers Wat Phra Si Sanphet, Wat Mahathat, Wat Ratchaburana, Wat Phra Ram, Wat Chaiwatthanaram, and a sixth site. Ask the booth which names are on today\'s stub. Hours on the department page read 08:00 or 08:30 to 18:00 or 18:30; Wat Phra Si Sanphet and Wat Ratchaburana often sell last tickets earlier. Office: 035 242 286.',
      'Ordinary and express trains still make Ayutthaya in about an hour from Krung Thep Aphiwat. SRT also runs commuter sets on this line. Weekend tourist extras appear and vanish; check the board, not a screenshot. From the station you need a tuk-tuk, a bicycle, or a long hot walk. Wat Chaiwatthanaram sits off the island to the west. Wat Mahathat\'s root-wrapped head is the photograph everyone already has. Go at opening if you want it without a queue.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Stay or day-trip',
        paragraphs: [
          'Most first trips should day-trip. Overnight if you want 07:00 brickwork or a river guesthouse after the vans leave. Sleep near the historical park, not out on the industrial ring, if you do stay.',
        ],
        table: {
          headers: ['Plan', 'Who it fits', 'Trade-off'],
          rows: [
            ['Bangkok day trip', 'First-week visitors with one spare day', 'Heat at 11:00. Last trains matter more than a sixth wat.'],
            ['One night in Ayutthaya', 'Dawn at Chaiwatthanaram or a slower bike loop', 'Evening food is thinner than Bangkok. That is the point.'],
            ['River cruise tours', 'People who want the boat more than the bricks', 'You will see three wats and a buffet. Fine if you admit it.'],
          ],
        },
      },
      {
        id: 'season',
        title: 'Season',
        paragraphs: [
          'November to February is the humane heat. September and October can flood lanes on the island; temples still open, streets do not always. This is not an Andaman decision. You can do Ayutthaya in July. You will just drink more water.',
        ],
      },
    ],
    portraits: [
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
      { title: 'Sukhothai', href: '/sukhothai', photo: '/photos/sukhothai.jpg' },
      { title: 'Kanchanaburi', href: '/kanchanaburi', photo: '/photos/kanchanaburi.jpg' },
      { title: 'Central and east', href: '/destinations/central-and-east', photo: '/photos/ayutthaya.jpg' },
    ],
    affiliates: [
      stay('Ayutthaya stays', 'Only if you overnight', 'Park-side guesthouse, not a highway box.', stayLink('ayutthaya'), '/photos/ayutthaya.jpg'),
      {
        title: 'Bangkok to Ayutthaya trains',
        kicker: 'Trip.com',
        body: 'Search the morning board from Krung Thep Aphiwat. Buy a return you can actually catch.',
        href: trainLink('Bangkok', 'Ayutthaya'),
        cta: 'Search trains',
        photo: '/photos/bts.jpg',
        partner: 'trains',
      },
      klook('Temple tickets and bikes', 'Attraction tickets', 'Combo vans make sense if you hate tuk-tuk math. A bicycle is quieter.', klookTickets('Ayutthaya Historical Park'), '/photos/ayutthaya.jpg'),
    ],
    faqs: [
      {
        q: 'Is Ayutthaya worth an overnight?',
        a: 'Only if you want dawn at the ruins or you dislike timed trains. A full day from Bangkok covers the main paid wats.',
      },
      {
        q: 'Which Bangkok station?',
        a: 'Krung Thep Aphiwat for the regular northbound sets. Do not go to Hua Lamphong unless your specific train still lists it. Grab north; the new terminal is not riverside.',
      },
      {
        q: 'Ayutthaya or Kanchanaburi if you have one day?',
        a: 'Ayutthaya for temples. Kanchanaburi for the river and the war history. They are different days. Do not combine them.',
      },
    ],
  },
  {
    path: '/kanchanaburi',
    title: 'Kanchanaburi',
    description: 'River Kwai bridge, Death Railway, and Erawan\'s seven waterfalls. Two nights from Bangkok. Trains leave Thonburi, not Bang Sue.',
    lede: 'Kanchanaburi is the River Kwai town plus Erawan falls. Give it two nights if you want both. The bridge is a morning. Hellfire Pass and the seven tiers do not fit the same afternoon.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Central and east', href: '/destinations/central-and-east' },
      { name: 'Kanchanaburi', href: '/kanchanaburi' },
    ],
    facts: [
      { label: 'Train', value: 'Thonburi station, not Krung Thep Aphiwat' },
      { label: 'Erawan fee', value: '300 THB foreign adult, cash at the gate' },
      { label: 'Erawan', value: 'Seven tiers, about 65 to 70 km from town' },
      { label: 'Nights', value: 'Two if you want falls plus the line' },
    ],
    chips: ['River Kwai', 'Erawan', 'Thonburi trains'],
    photo: '/photos/kanchanaburi.jpg',
    geo: { lat: 14.002, lon: 99.548, containedIn: 'Western Thailand' },
    paragraphs: [
      'Kanchanaburi is a river town west of Bangkok, not an island and not a ruin loop. The steel bridge and Khwae Yai Bridge station are the postcard. The Thailand-Burma Railway Centre and the allied war cemetery are the part that should take longer than the selfie. Hellfire Pass (Konyu Cutting) is about 80 km northwest, by road past Nam Tok, with an Australian-run interpretive centre. The cutting is a memorial walk, not a waterfall stop.',
      'Ordinary SRT trains to Kanchanaburi and Nam Tok leave from Thonburi station on the west bank. They have not moved to Krung Thep Aphiwat. That is the mistake first-timers make. Weekend tourist extras sometimes use Hua Lamphong; read the train number. Tickets on the ordinary sets are often day-of, third class. Foreign tourist fares apply. Floods have shut the Tha Kilen to Nam Tok stretch before; check SRT 1690 before you plan the viaduct as a must.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay',
        paragraphs: [
          'Sleep in town if you want the cemetery, the museum, and a morning train. Sleep upriver if the raft or the gorge is the mood and you have a car. Erawan is a 1.5 hour road each way; a park-gate hotel only helps if the falls are the entire next day.',
        ],
        table: {
          headers: ['Area', 'Who it fits', 'Trade-off'],
          rows: [
            ['Town and the river bend', 'Museums, night market, songthaews', 'Road noise. Easy logistics.'],
            ['Tha Makham / bridge', 'People who want the bridge at dusk', 'Tour buses. Fine for one night.'],
            ['Sai Yok / upriver', 'A quieter second night', 'Far from Erawan. Pick one hinterland, not both.'],
          ],
        },
      },
      {
        id: 'erawan',
        title: 'Erawan National Park',
        paragraphs: [
          'Seven limestone tiers along about 1.5 km of stream. Lower pools are the family stop. Tier 7 is stairs, roots, and a turnaround clock. Arrive before 09:00 if you want the top.',
        ],
        bullets: [
          '**Park fee:** 300 THB for a foreign adult, 150 THB for a child, plus 30 THB per car or 20 THB per motorbike. Thai adult tickets are 60 THB. Carry cash.',
          '**Hours:** The park shop lists 08:00 to 16:30. Gate cutoffs are not always posted.',
          '**Bus 8170:** About 1.5 hours from Kanchanaburi station. Ask the driver for the last bus back before you walk up.',
          '**After rain:** Tiers can close and the water can run red. Call 034 574 222 or the 1362 park hotline the morning you go.',
        ],
      },
      {
        id: 'season',
        title: 'Season',
        paragraphs: [
          'November to February is the comfortable inland window. Erawan\'s pools are prettier after rain, which is also when trails fail. The river town works year-round. This is not Andaman or Lower Gulf logic.',
        ],
      },
    ],
    portraits: [
      { title: 'Erawan and Sai Yok', href: '/kanchanaburi/erawan-and-sai-yok', photo: '/photos/kanchanaburi.jpg' },
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
      { title: 'Hua Hin', href: '/hua-hin', photo: '/photos/hua-hin.jpg' },
    ],
    affiliates: [
      stay('Kanchanaburi stays', 'Town or river', 'Two nights if Erawan is on the list. One night if you only want the bridge.', stayLink('kanchanaburi'), '/photos/kanchanaburi.jpg'),
      {
        title: 'Bangkok to Kanchanaburi trains',
        kicker: 'Trip.com',
        body: 'Confirm the origin station. Ordinary Nam Tok trains still mean Thonburi.',
        href: trainLink('Bangkok', 'Kanchanaburi'),
        cta: 'Search trains',
        photo: '/photos/bts.jpg',
        partner: 'trains',
      },
      klook('Erawan and Hellfire Pass', 'Tours', 'A car for both hinterland sites beats a missed 8170.', klookTours('Erawan National Park'), '/photos/khao-sok.jpg'),
    ],
    faqs: [
      {
        q: 'Which Bangkok station for the Death Railway?',
        a: 'Thonburi for the daily ordinary trains to Kanchanaburi and Nam Tok. Krung Thep Aphiwat does not run that branch. Weekend tourist trains are a separate listing; read the number.',
      },
      {
        q: 'Can you do Erawan and the bridge in one day from Bangkok?',
        a: 'You can see the bridge. You will short-change Erawan or sit in a van. Stay two nights in Kanchanaburi if the falls matter.',
      },
      {
        q: 'Is Hellfire Pass on the train?',
        a: 'No. Nam Tok is the end of the passenger line. The cutting is farther up Highway 323 by road. Arrange the car before you leave town.',
      },
    ],
  },
  {
    path: '/hua-hin',
    title: 'Hua Hin',
    description: 'Old royal Gulf beach south of Bangkok: a train town, night market, and milder rain than the islands.',
    lede: 'Hua Hin is Bangkok\'s old royal beach, the Gulf without a boat. Sleep in town for the night market, or toward Khao Takiab for the hill and Cicada.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Central and east', href: '/destinations/central-and-east' },
      { name: 'Hua Hin', href: '/hua-hin' },
    ],
    facts: [
      { label: 'Train', value: 'About 3 hours from Krung Thep Aphiwat; Special Express 43 is the useful morning set' },
      { label: 'Season', value: 'Easier November to April; October is the wet month' },
      { label: 'Cicada Market', value: 'Friday to Sunday, 16:00 to 23:00, toward Khao Takiab' },
      { label: 'Airport', value: 'HHQ is not your Bangkok hop; take the train' },
    ],
    chips: ['Upper Gulf', 'Train town', 'Weekend crowds'],
    photo: '/photos/hua-hin.jpg',
    geo: { lat: 12.57, lon: 99.958, containedIn: 'Upper Gulf of Thailand' },
    paragraphs: [
      'Hua Hin is a mainland Gulf resort in Prachuap Khiri Khan, not an island and not Pattaya. The beach runs about 7 km from the fishing pier to the limestone hill at Khao Takiab. The water is shallow and often murky after rain. You come for a walkable town, seafood, and a train you can board with a suitcase, not for a postcard lagoon.',
      'Special Express 43 leaves Krung Thep Aphiwat at 07:30 and is the clean morning option, about three hours. Other southbound trains take longer. Minivans from Ekkamai work and then dump you in traffic. Hua Hin Airport is not a useful Bangkok substitute. Avoid Thai long weekends unless you like full trains and full beach roads.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay',
        paragraphs: [
          'The town centre puts you on Soi 72 for the night market and a short walk to the station. South toward Nong Kae and Khao Takiab is quieter sand and the weekend markets. North toward Khao Tao is a different, thinner beach. Do not book "Hua Hin" as if it were one soi.',
        ],
        table: {
          headers: ['Area', 'Who it fits', 'Trade-off'],
          rows: [
            ['Town / night market', 'Trains, dinner, a first stay', 'Narrow beach. Weekend noise.'],
            ['Khao Takiab and Nong Kae', 'A longer beach and Cicada on Fri-Sun', 'A Grab to the station. Better if you have two nights.'],
            ['Khao Tao / south coves', 'People who want less town', 'Thin transport. Only with a car or a patient scooter.'],
          ],
        },
      },
      {
        id: 'season',
        title: 'Monsoon note',
        paragraphs: [
          'This is the upper western Gulf, not Samui and not the Andaman. November to April is the dry, busy window. June and July are usable; Hua Hin\'s annual rainfall is far below Phuket\'s. September and October are the months that actually get wet. Jellyfish warnings go up after heavy rain. TAT is not joking.',
          'Do not flip here the way you flip Phuket and Samui. If you need a July island, take the Lower Gulf. If you need a July train beach from Bangkok, Hua Hin still works.',
        ],
      },
    ],
    portraits: [
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { title: 'Kanchanaburi', href: '/kanchanaburi', photo: '/photos/kanchanaburi.jpg' },
      { title: 'Koh Chang and Koh Kood', href: '/koh-chang-and-koh-kood', photo: '/photos/koh-chang.jpg' },
    ],
    affiliates: [
      stay('Hua Hin stays', 'Town or Khao Takiab', 'Town if the train is late. Khao Takiab if Cicada is the evening.', stayLink('hua-hin'), '/photos/hua-hin.jpg'),
      {
        title: 'Bangkok to Hua Hin trains',
        kicker: 'Trip.com',
        body: 'Morning express if you can. Long weekends sell out.',
        href: trainLink('Bangkok', 'Hua Hin'),
        cta: 'Search trains',
        photo: '/photos/bts.jpg',
        partner: 'trains',
      },
      klook('Khao Sam Roi Yot and Phraya Nakhon', 'Tours', 'The useful day trip is inland, not another beach club.', klookTours('Hua Hin Phraya Nakhon'), '/photos/hua-hin.jpg'),
    ],
    faqs: [
      {
        q: 'Hua Hin or Pattaya?',
        a: 'Hua Hin if you want a train town and a quieter gulf. Pattaya if someone else already booked it. They are not the same night.',
      },
      {
        q: 'Hua Hin or Koh Samui in July?',
        a: 'Samui if the island is the point. Hua Hin if you want three hours of rail and a mainland beach that still functions in the Lower Gulf\'s good months.',
      },
      {
        q: 'When is Cicada Market open?',
        a: 'Friday, Saturday, and Sunday from 16:00 to 23:00, on the Khao Takiab road about 700 m from the Nong Kae junction. The in-town night market runs every evening. Confirm on a holiday week.',
      },
    ],
  },
];
