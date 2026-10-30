import {
  stayLink,
  stayAreaLink,
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

export const wave7Pages: Page[] = [
  {
    path: '/itineraries/10-days-classic-thailand',
    title: '10-Day Thailand Itinerary: Bangkok, Chiang Mai, one coast',
    description:
      'What to see in Thailand in 10 days: 3 nights Bangkok, 3 Chiang Mai, then 4 on one south coast. Phuket or Krabi Nov-Apr. Samui May-Sep. Fly the long legs.',
    lede:
      'This is the classic first trip: city, north, one beach. Use the monsoon to pick Phuket and Krabi or Samui and Tao. Do not stack both seas.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '10 days classic Thailand', href: '/itineraries/10-days-classic-thailand' },
    ],
    facts: [
      { label: 'Nights', value: 'Bangkok 3, Chiang Mai 3, one south coast 4' },
      { label: 'South flip', value: 'Phuket or Krabi Nov-Apr; Samui and Tao May-Sep' },
      { label: 'Long legs', value: 'BKK-CNX about 70 minutes, or SRT 9/10 about 12 hours' },
      { label: 'Do not', value: 'Add a second sea or Pai on this spine' },
    ],
    chips: ['City then north', 'One south coast', 'Fly or sleeper'],
    photo: '/photos/bangkok.jpg',
    paragraphs: [
      'The classic first trip is Bangkok, Chiang Mai, and one south coast. Ten nights is enough for that. It is not enough for two seas. Sleep three nights in Bangkok, three in Chiang Mai, then four on the coast the monsoon allows. Book hotel bases, not a new room every night.',
      'Fly the long legs. Bangkok to Chiang Mai is about 70 minutes. The useful night train is SRT 9 northbound (Krung Thep Aphiwat to Chiang Mai, about 18:40 to 07:15) and SRT 10 southbound (Chiang Mai to Krung Thep Aphiwat, about 18:20 to 06:30), about 12 hours, if you want to save a day-room. The south hop is a second flight: CNX or BKK to HKT or KBV in winter, USM in the Gulf summer. A 2026 BTS tap is 17 to 62 THB. Grand Palace is 500 THB. Wat Pho is 300 THB.',
    ],
    days: [
      {
        n: 1,
        title: 'Bangkok arrival',
        body: 'Land BKK or DMK. ARL to Phaya Thai, then two BTS stops to Siam, or a booked airport car to Sukhumvit. Walk a soi. Sleep.',
        photo: '/photos/bangkok.jpg',
      },
      {
        n: 2,
        title: 'Rattanakosin morning',
        body: 'Grand Palace at opening (500 THB), Wat Pho next (300 THB), Wat Arun by ferry. Dinner back on Sukhumvit or Charoenkrung.',
        photo: '/photos/old-city.jpg',
      },
      {
        n: 3,
        title: 'City buffer',
        body: 'Chinatown lunch, a river walk, or Siam malls if the heat wins. Night train 9 if you skip the morning CNX flight.',
        photo: '/photos/riverside.jpg',
      },
      {
        n: 4,
        title: 'Chiang Mai',
        body: 'Fly about 70 minutes to CNX, or wake on train 9. Sleep inside the moat. The loop is about 6.5 km and 75 to 90 minutes on foot.',
        photo: '/photos/chiang-mai.jpg',
      },
      {
        n: 5,
        title: 'Old City wats',
        body: 'Dawn at Wat Phra Singh and Chedi Luang. Temple booths often ask 20 to 50 THB cash. Cooking class or Sunday Walking Street if the calendar lines up.',
        photo: '/photos/chiang-mai-old-city.jpg',
      },
      {
        n: 6,
        title: 'Nimman or a half-day',
        body: 'Cafes west of the moat. Doi Inthanon only if you accept a full day and skip a rest. Do not add Pai here.',
        photo: '/photos/nimman.jpg',
      },
      {
        n: 7,
        title: 'Fly south',
        body: 'November to April: HKT or KBV, then Kata, Kamala, or Ao Nang. May to September: USM, then Chaweng or a north-coast bay. No boat on landing day.',
        photo: '/photos/phuket.jpg',
      },
      {
        n: 8,
        title: 'Beach base',
        body: 'Swim and learn the Grab or songthaew pattern. Andaman: Railay longtail 100 to 200 THB. Gulf: keep Tao for tomorrow, not today.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 9,
        title: 'One boat or one dive',
        body: 'Andaman: Phi Phi or a west-coast hop. Gulf: Lomprayah to Tao if diving is the point, or stay put and swim.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 10,
        title: 'Buffer and out',
        body: 'Weather buffer. Fly to BKK only if the long-haul needs it. Same-day international from a south airport is a gamble.',
        photo: '/photos/phuket.jpg',
      },
    ],
    sections: [
      {
        id: 'bases',
        title: 'Hotel bases, not a suitcase relay',
        paragraphs: [
          'Bangkok: Sukhumvit for the BTS, riverside if you want boats, Old City only if the palace is the whole stay. Chiang Mai: inside the moat for dawn wats, Nimman for later dinners. South: one beach name. Kata or Ao Nang on the Andaman. Chaweng if you want lights on Samui; Maenam or Bophut if you do not.',
        ],
        table: {
          headers: ['Block', 'Sleep', 'Transport'],
          rows: [
            ['Bangkok, 3 nights', 'Sukhumvit or riverside', 'ARL, BTS 17 to 62 THB, river boat'],
            ['Chiang Mai, 3 nights', 'Old City or Nimman', 'BKK-CNX flight or SRT 9/10'],
            ['Andaman, 4 nights', 'Phuket west coast or Ao Nang / Railay', 'HKT or KBV, then car or longtail'],
            ['Gulf, 4 nights', 'Samui plus an optional Tao night', 'USM, then Lomprayah'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'First week', href: '/itineraries/first-week-7-days', photo: '/photos/bangkok.jpg' },
      { title: 'Best 14 days', href: '/itineraries/best-14-days', photo: '/photos/chiang-mai.jpg' },
      { title: 'Gulf islands 10 days', href: '/itineraries/10-days-gulf-islands-samui-phangan-tao', photo: '/photos/koh-samui.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Bangkok first nights', 'Sukhumvit', 'Three nights near a BTS station. Keep day one simple.', stayAreaLink('sukhumvit'), '/photos/sukhumvit.jpg'),
      stay('Chiang Mai block', 'Old City', 'Three nights inside or beside the moat.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      {
        title: 'Domestic flights',
        kicker: 'Trip.com',
        body: 'BKK-CNX, then CNX or BKK to HKT, KBV, or USM.',
        href: flightLink('BKK', 'CNX'),
        cta: 'Search flights',
        photo: '/photos/chiang-mai.jpg',
        partner: 'flights',
      },
    ],
    faqs: [
      {
        q: 'Phuket or Samui on this plan?',
        a: 'Phuket or Krabi from November to April. Samui and Tao from May to September. Overlap exists in January to April; pick one sea anyway.',
      },
      {
        q: 'Fly or take the sleeper to Chiang Mai?',
        a: 'Fly if you land at noon and want dinner inside the moat. Take SRT 9 if you want to turn a night into a transfer. Do not do both.',
      },
      {
        q: 'Can you add Pai?',
        a: 'Not on this spine. Use the 7-day northern loop if the ridge road is the point.',
      },
    ],
  },
  {
    path: '/itineraries/2-weeks-andaman-island-hopping',
    title: '2 weeks Andaman island hopping',
    description:
      'A November to April Andaman hop from Phuket or Krabi: Railay, Phi Phi, Lanta, then Lipe. Tigerline or Bundhaya boats. End at Pak Bara and Hat Yai (HDY).',
    lede:
      'Two Andaman weeks, four island stops, one sea. Start at HKT or KBV. Finish at Pak Bara and fly out of Hat Yai. May to October is the wrong window.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '2 weeks Andaman island hopping', href: '/itineraries/2-weeks-andaman-island-hopping' },
    ],
    facts: [
      { label: 'Season', value: 'November to April only; boats thin or stop May to October' },
      { label: 'Start', value: 'HKT (Rassada) or KBV and Ao Nang / Nopparat Thara' },
      { label: 'Boats', value: 'Tigerline and Bundhaya; morning departures' },
      { label: 'Exit', value: 'Pak Bara pier, then Hat Yai Airport (HDY)' },
    ],
    chips: ['Andaman winter', 'Tigerline', 'Pak Bara exit'],
    photo: '/photos/phuket.jpg',
    paragraphs: [
      'Two Andaman weeks work if you move south once a stay, not twice a day. Start at Phuket or Krabi. Add Railay, a Phi Phi night, Lanta, then Lipe. End on the Satun mainland at Pak Bara and fly out of Hat Yai (HDY). Do not fly back to HKT the same afternoon the Lipe boat lands.',
      'Phuket passenger boats use Rassada Pier, not Patong Beach. Ao Nang boats use Nopparat Thara. Railay has no road: a shared longtail is about 10 to 15 minutes and 100 to 200 THB a person in 2026. Tigerline and Bundhaya are the high-season names that string Phi Phi, Lanta, and Lipe. Those legs cancel first when the Andaman is up.',
    ],
    days: [
      {
        n: 1,
        title: 'Land HKT or KBV',
        body: 'No boat on day one. Phuket: Kata or Kamala. Krabi: Ao Nang. Airport car from HKT is faster than a late Smart Bus.',
        photo: '/photos/phuket.jpg',
      },
      {
        n: 2,
        title: 'West-coast reset',
        body: 'Swim. Learn the songthaew or Grab pattern. Book tomorrow\'s longtail or the Rassada / Nopparat ticket.',
        photo: '/photos/kata-and-karon.jpg',
      },
      {
        n: 3,
        title: 'Railay',
        body: 'Longtail from Ao Nang or a transfer from Phuket. Sleep on Railay West or Tonsai if climbing is the night. East is the mud-flat pier.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 4,
        title: 'Cliffs and a buffer',
        body: 'Phra Nang cave beach in the morning. Do not add Phi Phi on the same afternoon you arrived.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 5,
        title: 'Phi Phi',
        body: 'Morning boat from Rassada or Nopparat Thara. Land Tonsai. Walk away from the pier bars if you want sleep.',
        photo: '/photos/phuket.jpg',
      },
      {
        n: 6,
        title: 'Phi Phi water',
        body: 'Maya Bay is a timed national-park call, not a hotel beach. Keep a second bay day if swell cancelled yesterday.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 7,
        title: 'Koh Lanta',
        body: 'Tigerline or Bundhaya from Phi Phi (Tonsai) to Saladan, about 30 minutes to 1 hour in season. Sleep Klong Dao if you want dinner.',
        photo: '/photos/koh-lanta.jpg',
      },
      {
        n: 8,
        title: 'Lanta west coast',
        body: 'Scooter south toward Klong Nin or Kantiang. This is the space day. No useful public bus.',
        photo: '/photos/koh-lanta.jpg',
      },
      {
        n: 9,
        title: 'Lanta buffer',
        body: 'Koh Rok only on a calm sea day. Otherwise stay on the sand. Confirm the Lipe boat the afternoon before.',
        photo: '/photos/koh-lanta.jpg',
      },
      {
        n: 10,
        title: 'Koh Lipe',
        body: 'High-season Tigerline or Bundhaya south. Boats stand off Pattaya Beach. Pay the longtail and keep the park receipt.',
        photo: '/photos/koh-lipe.jpg',
      },
      {
        n: 11,
        title: 'Sunrise and Walking Street',
        body: 'Swim Sunrise. Eat on Walking Street. Sunset Beach if you want the quiet end.',
        photo: '/photos/koh-lipe.jpg',
      },
      {
        n: 12,
        title: 'Lipe water day',
        body: 'Adang or a near-shore snorkel. Keep tomorrow morning free for the Pak Bara boat.',
        photo: '/photos/koh-lipe.jpg',
      },
      {
        n: 13,
        title: 'Pak Bara',
        body: '1.5 to 2.5 hours to Pak Bara, Satun. Van on to Hat Yai. Do not book a same-night HKT long-haul.',
        photo: '/photos/koh-lipe.jpg',
      },
      {
        n: 14,
        title: 'Hat Yai (HDY) out',
        body: 'HDY has the useful flights. Trang is closer for some vans and thinner for planes. Sleep in Hat Yai if the boat ran late.',
        photo: '/photos/koh-lipe.jpg',
      },
    ],
    sections: [
      {
        id: 'boats',
        title: 'Which pier, which operator',
        paragraphs: [
          'Write the pier on the ticket. Rassada is Phuket Town. Nopparat Thara is the Ao Nang passenger pier. Klong Jilad is Krabi Town. Saladan is Lanta. Pak Bara is the Satun mainland exit. A ticket that says "Phuket" without a pier is not finished.',
          'Tigerline and Bundhaya sell the long Andaman chain in winter. Ploysiam and Satun Pakbara Speed Boat Club handle many Pak Bara runs. Songserm is slower. Morning boats fail less than afternoon ones.',
        ],
        table: {
          headers: ['Leg', 'Usual pier pair', 'Notes'],
          rows: [
            ['Phuket to Phi Phi', 'Rassada to Tonsai', 'About 2 hours. Not a Patong beach pickup.'],
            ['Phi Phi to Lanta', 'Tonsai to Saladan', 'About 30 to 45 minutes on Tigerline or Bundhaya.'],
            ['Ao Nang or Railay to Lanta', 'Nopparat Thara to Saladan', 'Bundhaya lists a late-morning speedboat.'],
            ['Lanta to Lipe', 'Saladan to Pattaya Beach roadstead', 'High season only. Cancels first.'],
            ['Lipe to mainland', 'Pattaya Beach to Pak Bara', 'Then van to HDY. Keep a spare night.'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'South islands 10 days', href: '/itineraries/south-islands-10-days', photo: '/photos/phuket.jpg' },
      { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
      { title: 'Koh Lipe', href: '/koh-lipe', photo: '/photos/koh-lipe.jpg' },
      { title: 'Krabi to Koh Lanta', href: '/get-there/krabi-to-koh-lanta', photo: '/photos/krabi.jpg' },
    ],
    affiliates: [
      stay('Phuket or Krabi start', 'First two nights', 'Kata or Ao Nang. No boat on landing day.', stayLink('phuket'), '/photos/phuket.jpg'),
      stay('Koh Lanta block', 'Klong Dao', 'The useful dinner beach near Saladan.', stayLink('koh-lanta'), '/photos/koh-lanta.jpg'),
      klook('Tigerline and Bundhaya', 'Rail and ferry', 'Book the Lipe and Lanta legs the afternoon before.', klookRailFerry('Tigerline Koh Lipe'), '/photos/koh-lipe.jpg'),
    ],
    faqs: [
      {
        q: 'Can you reverse the hop and start at Lipe?',
        a: 'Yes if you fly into HDY first. Most first-timers still start at HKT or KBV because the international flight is already there.',
      },
      {
        q: 'What if a boat cancels?',
        a: 'Wait a day or take the Lanta road and car ferry. Do not invent a Phuket to Lipe speedboat in August.',
      },
      {
        q: 'Do you need Samui on this trip?',
        a: 'No. That is the other sea. Use the Gulf itinerary in May to August.',
      },
    ],
  },
  {
    path: '/itineraries/10-days-gulf-islands-samui-phangan-tao',
    title: '10 days Gulf islands: Samui, Phangan, Tao',
    description:
      'Ten days of Samui beaches, Phangan bays, and Tao diving. Lower Gulf is easiest January to September, and May to August is the calmest, clearest sea. Use Lomprayah.',
    lede:
      'This Gulf hop is beach nights plus Tao diving. Fly into USM. Boat with Lomprayah. Skip it in November swell if you need a guaranteed sea.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: 'Gulf islands 10 days', href: '/itineraries/10-days-gulf-islands-samui-phangan-tao' },
    ],
    facts: [
      { label: 'Season', value: 'Best January to September; May to August is the calmest sea' },
      { label: 'Airport', value: 'USM, then a named Samui pier' },
      { label: 'Boats', value: 'Lomprayah first; Seatran and Songserm as backup' },
      { label: 'Split', value: 'Samui 3, Phangan 3, Tao 3, plus a buffer night' },
    ],
    chips: ['Lower Gulf', 'Lomprayah', 'Dive or beach'],
    photo: '/photos/koh-samui.jpg',
    paragraphs: [
      'Ten Gulf days work when each island has a role. Samui is the airport and the easy beach. Phangan is bays, not only Haad Rin. Tao is the Open Water card and the west-coast viewpoints. Lomprayah is the first boat to book. Seatran Discovery and Songserm are the backup desks, not a third sea.',
      'January to September is the easier Lower Gulf window. May to August is the calmest, clearest sea, when the Andaman parks are shut. October to December is swell season; fast boats cancel first. The Lomprayah Samui to Thong Sala catamaran is about 30 minutes. Seatran takes about 45. Phangan to Tao (Thong Sala to Mae Haad) is about 1 to 1.5 hours on Lomprayah: the catamaran about 1 hour, the midday ferry about 1.5 hours. Songserm and Seatran Discovery use the same piers; check the boat on the day. Tao collects about 20 THB on arrival. Read the Samui pier: Nathon for many Lomprayah tickets, Maenam / Pralarn for others, Bangrak for Seatran, Lipa Noi for Raja.',
    ],
    days: [
      {
        n: 1,
        title: 'Land USM',
        body: 'No boat on day one. Chaweng if you want dinner on foot. Maenam or Bophut if you want a quieter north coast.',
        photo: '/photos/koh-samui.jpg',
      },
      {
        n: 2,
        title: 'Samui beach',
        body: 'Swim. Optional Ang Thong only if the park is open and you can spare the energy. Lamai if Chaweng is too loud.',
        photo: '/photos/chaweng.jpg',
      },
      {
        n: 3,
        title: 'Samui buffer',
        body: 'Move coasts if the first beach is wrong. Book Lomprayah to Thong Sala for tomorrow. Write the departure pier.',
        photo: '/photos/lamai.jpg',
      },
      {
        n: 4,
        title: 'Koh Phangan',
        body: '30 to 45 minutes to Thong Sala. Haad Rin only if Full Moon is the trip. Sleep west or north for a normal week.',
        photo: '/photos/koh-phangan.jpg',
      },
      {
        n: 5,
        title: 'Phangan bay day',
        body: 'Thong Nai Pan, Srithanu, or a west-coast sunset. Jungle roads need a real scooter licence, not a first-week rental.',
        photo: '/photos/koh-phangan.jpg',
      },
      {
        n: 6,
        title: 'Phangan water',
        body: 'Bottle Beach boat or a snorkel day. Keep the Tao ticket for a morning departure.',
        photo: '/photos/koh-phangan.jpg',
      },
      {
        n: 7,
        title: 'Koh Tao',
        body: 'Lomprayah to Mae Haad. Pay the 20 THB fee. Songthaew to Sairee if diving is the week. Chalok if you want the south.',
        photo: '/photos/koh-tao.jpg',
      },
      {
        n: 8,
        title: 'Dive or viewpoint',
        body: 'Open Water starts here for a reason. If you are not diving, walk the west-coast viewpoints and swim Sairee.',
        photo: '/photos/koh-tao.jpg',
      },
      {
        n: 9,
        title: 'Second Tao day',
        body: 'The day the island needed. Do not add a new island. Confirm the boat back toward USM or Chumphon.',
        photo: '/photos/koh-tao.jpg',
      },
      {
        n: 10,
        title: 'Return and out',
        body: 'Morning boat to Samui, then USM. Or the Chumphon catamaran plus train if Bangkok is next. Keep a swell buffer.',
        photo: '/photos/koh-tao.jpg',
      },
    ],
    sections: [
      {
        id: 'split',
        title: 'Diving days versus beach days',
        paragraphs: [
          'If the Open Water card is the trip, give Tao four nights and cut Samui to two. If the beach is the trip, stay three on Samui, three on Phangan, and treat Tao as a two-night look. Do not book Haad Rin in a non-party week and then complain about the bay.',
        ],
        table: {
          headers: ['Island', 'Who it fits', 'Boat note'],
          rows: [
            ['Samui', 'Airport, families, a first Gulf night', 'USM. Name the later pier.'],
            ['Phangan', 'Bays and one optional Full Moon', 'Thong Sala. Haad Rin is a different boat.'],
            ['Tao', 'Divers and west-coast viewpoints', 'Mae Haad. 20 THB on arrival.'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
      { title: 'Koh Tao', href: '/koh-tao', photo: '/photos/koh-tao.jpg' },
      { title: 'Ang Thong', href: '/koh-samui/ang-thong-marine-park', photo: '/photos/koh-samui.jpg' },
    ],
    affiliates: [
      stay('Samui first nights', 'Chaweng or north coast', 'Land, swim, book the boat tomorrow.', stayLink('koh-samui'), '/photos/koh-samui.jpg'),
      stay('Koh Tao', 'Sairee', 'Walk to the dive shops. Chalok if you want the south.', stayLink('koh-tao'), '/photos/koh-tao.jpg'),
      klook('Lomprayah tickets', 'Rail and ferry', 'Book the afternoon before, not at the pier in a swell.', klookRailFerry('Lomprayah Koh Tao'), '/photos/koh-phangan.jpg'),
    ],
    faqs: [
      {
        q: 'How many nights on each island?',
        a: 'Three, three, three, plus a buffer. Shift a night to Tao if you are diving. Shift a night to Phangan if a bay is the point.',
      },
      {
        q: 'Which month?',
        a: 'January to September. May to August is the cleanest swim. November needs a plan B.',
      },
      {
        q: 'Can you add Ang Thong?',
        a: 'Yes on a Samui day if the park is open. It is closed 1 November to 15 December. Do not steal a Tao dive day for it.',
      },
    ],
  },
  {
    path: '/itineraries/7-days-northern-thailand-loop',
    title: '7 days Northern Thailand loop',
    description:
      'Seven days in the north: Chiang Mai temples, Doi Inthanon, Pai over Highway 1095, then Chiang Rai or the Golden Triangle. Vans and Green Bus, not a scooter first week.',
    lede:
      'This north loop is Lanna wats, a mountain night in Pai, and Chiang Rai temples. Use Prempracha from Arcade Terminal 2. Use Green Bus VIP for Chiang Rai.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '7 days Northern Thailand', href: '/itineraries/7-days-northern-thailand-loop' },
    ],
    facts: [
      { label: 'Pai van', value: 'Prempracha from Arcade Terminal 2, Hwy 1095, 3.5 to 4.5 hours' },
      { label: 'Chiang Rai', value: 'Green Bus VIP from Arcade Terminal 3, about 3.5 hours' },
      { label: 'Peak day', value: 'Doi Inthanon 2,565 m; park 300 THB foreign' },
      { label: 'Season', value: 'Cool November to February; haze risk March to April' },
    ],
    chips: ['Lanna wats', 'Highway 1095', 'Green Bus'],
    photo: '/photos/chiang-mai.jpg',
    paragraphs: [
      'Seven north days fit Chiang Mai, one mountain day, Pai, and Chiang Rai. They do not fit the full 600 km Mae Hong Son Loop. Sleep two nights in the Old City, take Doi Inthanon as a day, ride Highway 1095 to Pai, then Green Bus to Chiang Rai. Coffee highlands sit on the Inthanon road at Mae Klang Luang and again toward Doi Chang if you have a spare morning.',
      'Prempracha holds the licensed Pai vans (route 612). Arcade Terminal 2 is the usual counter; some tickets print Terminal 3. Walk-up fares sit around 210 to 250 THB. They take a passport number. Green Bus VIP 24-seat coaches leave Arcade Terminal 3 for Chiang Rai Terminal 1. Chang Phuak (Terminal 1) is the wrong station for both rides.',
    ],
    days: [
      {
        n: 1,
        title: 'Chiang Mai arrival',
        body: 'Fly CNX about 70 minutes from Bangkok, or wake on SRT 9. Sleep inside the moat. Temple booths 20 to 50 THB cash.',
        photo: '/photos/chiang-mai.jpg',
      },
      {
        n: 2,
        title: 'Old City and Nimman',
        body: 'Wat Phra Singh, Chedi Luang, a khao soi lunch. Nimman after dark. The moat loop is 75 to 90 minutes if you walk it.',
        photo: '/photos/chiang-mai-old-city.jpg',
      },
      {
        n: 3,
        title: 'Doi Inthanon',
        body: 'Leave by 07:00. Summit 2,565 m, Wachirathan, Twin Royal Pagodas 100 THB. Kew Mae Pan November to May with a 200 THB Hmong guide.',
        photo: '/photos/northern.jpg',
      },
      {
        n: 4,
        title: 'Highway 1095 to Pai',
        body: 'Prempracha van from Arcade Terminal 2, 762 bends, about 3.5 to 4.5 hours. Sleep in Pai town. Do not ride a scooter at night.',
        photo: '/photos/pai.jpg',
      },
      {
        n: 5,
        title: 'Pai morning, then east',
        body: 'Canyon or Walking Street at dawn. Afternoon van back toward Chiang Mai, or a booked car onward if you skip the return.',
        photo: '/photos/pai.jpg',
      },
      {
        n: 6,
        title: 'Chiang Rai',
        body: 'Green Bus VIP on Highway 118, about 3.5 hours. White Temple 200 THB for foreigners in 2026. Sleep in town.',
        photo: '/photos/chiang-rai.jpg',
      },
      {
        n: 7,
        title: 'Golden Triangle or coffee, then out',
        body: 'Chiang Saen or Sop Ruak if you want the Mekong. Doi Chang coffee if you want highlands. Fly CEI or bus back to CNX.',
        photo: '/photos/chiang-rai.jpg',
      },
    ],
    sections: [
      {
        id: 'fork',
        title: 'Pai, Chiang Rai, or both',
        paragraphs: [
          'Both fit this week if Doi Inthanon stays a day trip and Pai stays one night. Drop Pai if you hate vans. Drop the Golden Triangle if the White Temple is enough. The Mae Hong Son Loop is a different, longer product.',
        ],
        table: {
          headers: ['Stop', 'Who it fits', 'Skip if'],
          rows: [
            ['Chiang Mai Old City', 'Everyone', 'You only have a weekend; then stay put'],
            ['Doi Inthanon', 'Highlands, pagodas, a cool day', 'Burn-season haze in March and April'],
            ['Pai', 'The 1095 night', 'You already feel van-sick'],
            ['Chiang Rai', 'White Temple and a quieter grid', 'You would rather add a second Chiang Mai night'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Doi Inthanon', href: '/chiang-mai/doi-inthanon', photo: '/photos/northern.jpg' },
      { title: 'Pai', href: '/pai', photo: '/photos/pai.jpg' },
      { title: 'Chiang Rai', href: '/chiang-rai', photo: '/photos/chiang-rai.jpg' },
      { title: 'Chiang Mai to Pai', href: '/get-there/chiang-mai-to-pai', photo: '/photos/northern.jpg' },
    ],
    affiliates: [
      stay('Chiang Mai start', 'Old City', 'Two nights before the mountain day.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      stay('Pai', 'Town', 'One or two nights after 1095. Walking Street is a short walk.', stayLink('pai'), '/photos/pai.jpg'),
      klook('Inthanon and White Temple', 'Tours', 'A car for Inthanon beats a late van. Green Bus is enough for Chiang Rai.', klookTours('Doi Inthanon day trip'), '/photos/northern.jpg'),
    ],
    faqs: [
      {
        q: 'Can you scooter 1095 on day four?',
        a: 'Only with a motorcycle licence and an IDP that includes category A. Most first-week rentals belong on the Prempracha van.',
      },
      {
        q: 'Pai or Chiang Rai if you must cut one?',
        a: 'Keep Chiang Rai if temples are the week. Keep Pai if the ridge road is why you came north.',
      },
      {
        q: 'Is the Mae Hong Son Loop in these seven days?',
        a: 'No. That loop needs four days on its own after Chiang Mai. This plan uses Pai as a night, not as a 600 km circuit.',
      },
    ],
  },
  {
    path: '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi',
    title: '5 days Bangkok, Ayutthaya, Kanchanaburi',
    description:
      'Five days inland: Rattanakosin and Chinatown, Ayutthaya ruins, then the Death Railway from Thonburi Station and Erawan Falls. No island day.',
    lede:
      'This is a short inland loop of temples, brick prangs, and the River Kwai line. The ordinary train from Thonburi is 100 THB for foreigners. Give Erawan its own morning.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '5 days Bangkok Ayutthaya Kanchanaburi', href: '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi' },
    ],
    facts: [
      { label: 'Bangkok', value: 'Rattanakosin morning, Chinatown evening' },
      { label: 'Ayutthaya', value: 'About 60 to 90 minutes by train; 80 or 300 THB tickets' },
      { label: 'Death Railway', value: 'Thonburi Station, ordinary 257 or 259, 100 THB foreigner' },
      { label: 'Erawan', value: '300 THB foreign; 08:00 bus 8170 from Kanchanaburi Bus Terminal' },
    ],
    chips: ['Inland', 'Thonburi train', 'Erawan morning'],
    photo: '/photos/ayutthaya.jpg',
    paragraphs: [
      'Five inland days cover Bangkok temples, Ayutthaya ruins, and the River Kwai line. They do not cover a beach. Sleep two nights in Bangkok, one near Ayutthaya or back in the city, then two in Kanchanaburi if Erawan matters. Ayutthaya and the River Kwai are different directions and different Bangkok stations.',
      'Ordinary trains 257 (about 07:45) and 259 (about 13:55) leave Thonburi Station, not Krung Thep Aphiwat (Bang Sue Grand). Foreigners pay a flat 100 THB to any station on the Nam Tok line, bought at the window the same day. The line crosses the steel bridge and, when open, the Tham Krasae viaduct. Erawan is a different road: local bus 8170 from Kanchanaburi Bus Terminal, first bus 08:00, about 1.5 hours and about 60 THB.',
    ],
    days: [
      {
        n: 1,
        title: 'Bangkok temples',
        body: 'Grand Palace 500 THB at opening, Wat Pho 300 THB, Wat Arun ferry. Sleep Sukhumvit or riverside. Chinatown dinner if you still have legs.',
        photo: '/photos/old-city.jpg',
      },
      {
        n: 2,
        title: 'Chinatown and the river',
        body: 'Yaowarat in daylight for the lanes, not only at night. River boat. Pack for an early Ayutthaya train tomorrow.',
        photo: '/photos/riverside.jpg',
      },
      {
        n: 3,
        title: 'Ayutthaya ruins',
        body: 'Krung Thep Aphiwat or Hua Lamphong, 60 to 90 minutes. Paid sites 80 THB each or 300 THB combo. Bicycle or tuk-tuk. Back by the last useful train.',
        photo: '/photos/ayutthaya.jpg',
      },
      {
        n: 4,
        title: 'Thonburi to Kanchanaburi',
        body: 'Ordinary 257 about 07:45, 100 THB foreigner. Bridge, Thailand-Burma Railway Centre, war cemetery. Sleep in town.',
        photo: '/photos/kanchanaburi.jpg',
      },
      {
        n: 5,
        title: 'Erawan, then out',
        body: '08:00 bus 8170. Seven tiers, upper close about 15:30. Last bus back about 16:30. Van to Bangkok if you have a night flight.',
        photo: '/photos/kanchanaburi.jpg',
      },
    ],
    sections: [
      {
        id: 'stations',
        title: 'Three stations, three jobs',
        paragraphs: [
          'Ayutthaya trains use Krung Thep Aphiwat for most rapid and express sets, and Hua Lamphong for many ordinary third-class boards. Kanchanaburi ordinary trains use Thonburi, about 750 m from MRT Bang Khun Non. Sai Tai Mai vans are the faster westbound backup if Erawan is tomorrow morning.',
        ],
        table: {
          headers: ['Day', 'Station', 'Ticket'],
          rows: [
            ['Ayutthaya', 'Krung Thep Aphiwat or Hua Lamphong', 'Seat on a northbound set; combo ruins 300 THB'],
            ['Kanchanaburi train', 'Thonburi', '100 THB foreigner, day-of, third class'],
            ['Erawan', 'Kanchanaburi Bus Terminal', 'Bus 8170 about 60 THB; park 300 THB cash'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { title: 'Kanchanaburi', href: '/kanchanaburi', photo: '/photos/kanchanaburi.jpg' },
      { title: 'Erawan and Sai Yok', href: '/kanchanaburi/erawan-and-sai-yok', photo: '/photos/kanchanaburi.jpg' },
      { title: 'Bangkok to Kanchanaburi', href: '/get-there/bangkok-to-kanchanaburi', photo: '/photos/riverside.jpg' },
    ],
    affiliates: [
      stay('Bangkok nights', 'Riverside or Sukhumvit', 'Two nights before the north and west day trips.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      stay('Kanchanaburi', 'Town', 'Two nights if Erawan is on the list. One night if you only want the bridge.', stayLink('kanchanaburi'), '/photos/kanchanaburi.jpg'),
    ],
    faqs: [
      {
        q: 'Can Ayutthaya and Kanchanaburi share one day?',
        a: 'No. Different stations, different directions. The 5-day plan gives each a day.',
      },
      {
        q: 'Do you need to book the Death Railway online?',
        a: 'No. Ordinary 257 and 259 are window tickets, 100 THB for foreigners, usually the same morning.',
      },
      {
        q: 'Van or train to Kanchanaburi?',
        a: 'Train if the rice fields are the morning. Van from Sai Tai Mai if the 08:00 Erawan bus is the point.',
      },
    ],
  },
  {
    path: '/khao-lak/similan-and-surin-islands',
    title: 'Similan and Surin Islands',
    description:
      'Similan and Surin are Andaman marine parks off Khao Lak: granite boulders and clear water. Open 15 October to 15 May. Closed mid-May to mid-October. Foreign park entry is 500 THB.',
    lede:
      'These parks are granite boulders, clear water, and Richelieu Rock liveaboards. Day boats leave Tab Lamu Pier. Sleep in Khao Lak, not Patong.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Khao Lak', href: '/khao-lak' },
      { name: 'Similan and Surin', href: '/khao-lak/similan-and-surin-islands' },
    ],
    facts: [
      { label: 'Season', value: 'Open 15 Oct to 15 May; closed 16 May to 14 Oct' },
      { label: 'Park fee', value: '500 THB foreign adult, 250 THB child; cash or e-ticket' },
      { label: 'Similan pier', value: 'Tab Lamu (Thap Lamu), Thai Mueang; about 1.5 hours' },
      { label: 'Surin / Richelieu', value: 'Khuraburi day boats, or a liveaboard from Khao Lak' },
    ],
    chips: ['Tab Lamu', '500 THB', 'Oct to May'],
    photo: '/photos/khao-lak.jpg',
    geo: { lat: 8.65, lon: 97.65, containedIn: 'Andaman Coast' },
    paragraphs: [
      'Mu Ko Similan and Mu Ko Surin are separate national parks in the Andaman, not hotel islands. Both open 15 October to 15 May and close 16 May to 14 October so the reef can rest and so the southwest monsoon does not sink day boats. Foreign adults pay 500 THB at each park, children 250 THB. Divers often pay an extra daily fee. Buy the DNP e-ticket when the desk is live, and still carry cash.',
      'Similan day boats leave Tab Lamu Pier (also written Thap Lamu), south of Khao Lak in Thai Mueang. The run is about 70 km and about 1.5 hours by speedboat. Phuket pickups add a long pre-dawn road. Surin sits farther north. Khuraburi is the usual Surin pier. Richelieu Rock is a Surin pinnacle, not a Similan snorkel stop. If Richelieu is the point, book a liveaboard, not a Donald Duck Bay day boat.',
    ],
    sections: [
      {
        id: 'split',
        title: 'Speedboat day versus liveaboard',
        paragraphs: [
          'A Similan speedboat is a long day: 06:00 hotel call, park landing, snorkel, a beach lunch, back by late afternoon. Boats may land from about 08:00 and must leave by 16:00. Koh Miang and Koh Similan are the usual sand stops.',
          'A liveaboard is the dive product. Three to five nights tie the southern granite (Elephant Head Rock, Christmas Point) to Koh Bon, then Surin and Richelieu Rock. "Similan liveaboard" on a brochure does not always include Richelieu. Read the site list. Sleep in Bang Niang or Nang Thong the night before a Tab Lamu check-in.',
        ],
        table: {
          headers: ['Trip', 'Who it fits', 'Trade-off'],
          rows: [
            ['Similan speedboat from Tab Lamu', 'Snorkelers with one spare day', 'A long sea day. Limited sites.'],
            ['Surin day boat from Khuraburi', 'Shallow reefs and the Moken village', 'Farther north. A different pier.'],
            ['Richelieu liveaboard', 'Certified divers who want the pinnacle', 'Cost, weather, and a 3-night minimum'],
          ],
        },
      },
      {
        id: 'season',
        title: 'Closed means closed',
        paragraphs: [
          'Anyone selling a July Similan trip is selling a different island or a lie. Early and late season days (late October, early May) still cancel on swell. Keep a spare Khao Lak beach day. Pair this coast with Phuket or Khao Sok, not with Samui.',
        ],
      },
    ],
    portraits: [
      { title: 'Khao Lak', href: '/khao-lak', photo: '/photos/khao-lak.jpg' },
      { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Khao Lak base', 'Bang Niang or Nang Thong', 'Sleep here the night before a 06:00 Tab Lamu call.', stayLink('khao-lak'), '/photos/khao-lak.jpg'),
      klook('Similan day boats', 'Tours', 'Only 15 October to 15 May. Ask if the 500 THB fee is included.', klookTours('Similan Islands day trip'), '/photos/khao-lak.jpg'),
      {
        title: 'HKT airport car',
        kicker: 'Trip.com',
        body: '70 to 90 minutes north. The Smart Bus does not do this run.',
        href: transferLink('HKT'),
        cta: 'Book transfer',
        photo: '/photos/phuket.jpg',
        partner: 'transfer',
      },
    ],
    faqs: [
      {
        q: 'Tab Lamu or Khuraburi?',
        a: 'Tab Lamu for Similan day boats. Khuraburi for most Surin day boats. Khao Lak hotels sit closer to Tab Lamu.',
      },
      {
        q: 'Can you visit both parks in one day?',
        a: 'No. They are different piers and different seas. A liveaboard is how divers string them.',
      },
      {
        q: 'Do you need to sleep in Khao Lak?',
        a: 'Yes if the boat is why you came. A Phuket hotel adds two hours of dark highway each way.',
      },
    ],
  },
  {
    path: '/kanchanaburi/erawan-and-sai-yok',
    title: 'Erawan and Sai Yok',
    description:
      'Erawan is seven limestone tiers west of Kanchanaburi. Foreign entry is 300 THB. Pair Sai Yok Noi or Hellfire Pass on a different day, not the same afternoon.',
    lede:
      'Erawan is known for seven swimming tiers, not a Bangkok day trip. Take the 08:00 bus from Kanchanaburi Bus Terminal. Upper tiers close about 15:30.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Kanchanaburi', href: '/kanchanaburi' },
      { name: 'Erawan and Sai Yok', href: '/kanchanaburi/erawan-and-sai-yok' },
    ],
    facts: [
      { label: 'Erawan fee', value: '300 THB foreign adult, 150 THB child, cash' },
      { label: 'First bus', value: '8170 at 08:00 from Kanchanaburi Bus Terminal, about 60 THB' },
      { label: 'Upper tiers', value: 'Start down by 15:30; last bus back about 16:30' },
      { label: 'Sai Yok Noi', value: 'Free roadside fall near Nam Tok; Hellfire Pass is by road' },
    ],
    chips: ['Seven tiers', 'Bus 8170', 'One hinterland'],
    photo: '/photos/kanchanaburi.jpg',
    geo: { lat: 14.37, lon: 99.144, containedIn: 'Western Thailand' },
    paragraphs: [
      'Erawan National Park is the seven-tier waterfall about 65 to 70 km from Kanchanaburi town. Foreign adults pay 300 THB, children 150 THB, plus 30 THB per car or 20 THB per motorbike. Carry cash. The useful public trip is local bus 8170 from Kanchanaburi Bus Terminal. The first bus is 08:00, about 1.5 hours and about 60 THB. Flag-downs exist on Highway 323 before the bridge.',
      'Lower pools are the family stop. Tier 7 is stairs and roots. Rangers clear the top in the mid-afternoon; treat 15:30 as the turnaround, not a debate. The last bus back leaves about 16:30. After heavy rain the park can close swimming. Call 034 574 222 or DNP 1362 the morning you go.',
    ],
    sections: [
      {
        id: 'split',
        title: 'Erawan, Sai Yok Noi, Hellfire Pass',
        paragraphs: [
          'Sai Yok Noi (Khao Phang) is the free roadside waterfall near Nam Tok station, about 60 km from town. Weekend excursion trains dump people here. It is taller than many visitors expect and not the same place as Sai Yok Yai inside Sai Yok National Park, which sits farther upriver and charges its own park fee when open.',
          'Hellfire Pass (Konyu Cutting) is an Australian-run memorial walk about 80 km northwest of Kanchanaburi town, about 1 hour by car. Nam Tok station is about 20 km south of the cutting. The passenger train ends at Nam Tok; the last stretch is by road. It is not a station and not a waterfall. Pick one hinterland besides Erawan. A car can do Erawan or Hellfire Pass. It cannot do both well with the 15:30 cutoff.',
        ],
        table: {
          headers: ['Site', 'Fee', 'How'],
          rows: [
            ['Erawan, seven tiers', '300 THB foreign adult', 'Bus 8170 at 08:00, or a car'],
            ['Sai Yok Noi', 'Free roadside', 'Nam Tok train or Highway 323'],
            ['Hellfire Pass', 'Memorial, not a DNP falls ticket', 'About 20 km past Nam Tok. Arrange the car in town.'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Kanchanaburi', href: '/kanchanaburi', photo: '/photos/kanchanaburi.jpg' },
      { title: '5-day inland plan', href: '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi', photo: '/photos/ayutthaya.jpg' },
      { title: 'Bangkok to Kanchanaburi', href: '/get-there/bangkok-to-kanchanaburi', photo: '/photos/riverside.jpg' },
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/ayutthaya.jpg' },
    ],
    affiliates: [
      stay('Kanchanaburi town', 'Two nights', 'Town if Erawan is tomorrow. Upriver only if you skip the 08:00 bus.', stayLink('kanchanaburi'), '/photos/kanchanaburi.jpg'),
      klook('Erawan or Hellfire Pass, not both', 'Tours', 'A car for one hinterland site beats a missed 16:30 bus.', klookTours('Erawan National Park'), '/photos/kanchanaburi.jpg'),
    ],
    faqs: [
      {
        q: 'Is the 08:00 bus early enough for tier 7?',
        a: 'Usually, if you walk up as soon as you pay. A later 8170 makes the 15:30 cutoff a problem.',
      },
      {
        q: 'Sai Yok Noi or Sai Yok Yai?',
        a: 'Sai Yok Noi is the free fall by Nam Tok. Sai Yok Yai is the national park on the river, farther out, and a different ticket.',
      },
      {
        q: 'Can you add Hellfire Pass after Erawan?',
        a: 'Not in one afternoon. The cutting is about 20 km past Nam Tok, and the Centre closes at 16:00. Give it its own morning.',
      },
    ],
  },
  {
    path: '/chiang-mai/doi-inthanon',
    title: 'Doi Inthanon',
    description:
      "Doi Inthanon is Thailand's highest peak at 2,565 m. Kew Mae Pan runs November to May. Foreign park entry is 300 THB. Twin Royal Pagodas add 100 THB.",
    lede:
      'Doi Inthanon is known for the 2,565 m summit, cloud-forest trails, and Wachirathan Falls. A Hmong guide on Kew Mae Pan is 200 THB per group. Leave Chiang Mai early.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Chiang Mai', href: '/chiang-mai' },
      { name: 'Doi Inthanon', href: '/chiang-mai/doi-inthanon' },
    ],
    facts: [
      { label: 'Height', value: '2,565 m, about 1.5 to 2.5 hours from Chiang Mai' },
      { label: 'Park fee', value: '300 THB foreign adult, 150 THB child, cash' },
      { label: 'Kew Mae Pan', value: 'Open November to May; 200 THB Hmong guide per group' },
      { label: 'Pagodas', value: 'Twin Royal Pagodas 100 THB, not in the park ticket' },
    ],
    chips: ['2,565 m', 'Kew Mae Pan', 'Wachirathan'],
    photo: '/photos/northern.jpg',
    geo: { lat: 18.588, lon: 98.487, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Doi Inthanon is the highest mountain in Thailand at 2,565 m, southwest of Chiang Mai on Highway 108 then 1009. The drive is 1.5 to 2.5 hours. Foreign adults pay 300 THB at the park gate, children 150 THB, plus 30 THB per car or 20 THB per motorbike. Keep the stub. Booths check it again higher up.',
      'Kew Mae Pan is the ridge trail, open 1 November to 31 May and closed in the wet months. A local Hmong (or Karen) guide is compulsory at 200 THB per group, not per person. The Twin Royal Pagodas, Napamethinidon and Napaphonphumisiri, charge a separate 100 THB. Wachirathan is the wide roadside waterfall most cars can reach without a hike. The summit boardwalk at Ang Ka is short, cold, and often in cloud. Bring a jacket.',
    ],
    sections: [
      {
        id: 'day',
        title: 'A workable day from the moat',
        paragraphs: [
          'Leave the Old City by 07:00. Do Wachirathan on the way up, Kew Mae Pan if it is in season, the pagodas, then the summit. Mae Klang Luang is the Karen coffee village on the same road if you want a highland cup instead of a second waterfall. A rented scooter on 1009 is a bad first-week idea. Book a car or a Klook day tour.',
        ],
        table: {
          headers: ['Stop', 'Time', 'Extra cash'],
          rows: [
            ['Wachirathan Falls', '30 to 45 minutes', 'Park ticket only'],
            ['Kew Mae Pan trail', '2 to 3 hours, Nov to May', '200 THB guide per group'],
            ['Twin Royal Pagodas', '45 to 60 minutes', '100 THB on top of the park fee'],
            ['Summit and Ang Ka', '20 to 40 minutes', 'Park ticket only'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Northern loop', href: '/itineraries/7-days-northern-thailand-loop', photo: '/photos/pai.jpg' },
      { title: 'Chiang Rai', href: '/chiang-rai', photo: '/photos/chiang-rai.jpg' },
      { title: 'Northern corridor', href: '/destinations/northern-thailand', photo: '/photos/northern.jpg' },
    ],
    affiliates: [
      stay('Chiang Mai the night before', 'Old City or Nimman', 'Sleep in the city. The mountain is a day, not a hotel base.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      klook('Doi Inthanon day trip', 'Tours', 'Confirm whether the 300 THB park fee and 100 THB pagodas are included.', klookTours('Doi Inthanon day trip'), '/photos/northern.jpg'),
      {
        title: 'CNX airport car',
        kicker: 'Trip.com',
        body: 'Land, sleep in the city, do the mountain tomorrow.',
        href: transferLink('CNX'),
        cta: 'Book transfer',
        photo: '/photos/chiang-mai.jpg',
        partner: 'transfer',
      },
    ],
    faqs: [
      {
        q: 'Is Kew Mae Pan open in July?',
        a: 'No. The trail runs November to May. Use Wachirathan, the pagodas, and the summit in the wet months.',
      },
      {
        q: 'Do you pay the guide per person?',
        a: 'No. The usual desk is 200 THB per group. The 300 THB park ticket and 100 THB pagodas are per person.',
      },
      {
        q: 'Can you combine Inthanon with Pai the same day?',
        a: 'No. Inthanon is a full day south-west. Pai is 3.5 to 4.5 hours north-west on 1095.',
      },
    ],
  },
  {
    path: '/koh-samui/ang-thong-marine-park',
    title: 'Ang Thong Marine Park',
    description:
      'Ang Thong is 42 limestone islands west of Samui. Foreign park entry is 300 THB. The park closes November to mid-December. Talay Nai is the inner lake.',
    lede:
      'Ang Thong is known for Talay Nai and the Wua Ta Lap viewpoint, not a public ferry. Book a big boat or a speedboat from Nathon or Bophut. Carry 300 THB cash.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Samui', href: '/koh-samui' },
      { name: 'Ang Thong Marine Park', href: '/koh-samui/ang-thong-marine-park' },
    ],
    facts: [
      { label: 'Islands', value: '42 limestone islands; HQ on Wua Ta Lap' },
      { label: 'Park fee', value: '300 THB foreign adult, 150 THB child, cash' },
      { label: 'Closed', value: '1 November to 15 December; swell can cancel boats' },
      { label: 'Boats', value: 'No public ferry; tours from Nathon or Bophut' },
    ],
    chips: ['42 islands', 'Talay Nai', '300 THB'],
    photo: '/photos/koh-samui.jpg',
    geo: { lat: 9.62, lon: 99.67, containedIn: 'Gulf of Thailand' },
    paragraphs: [
      'Mu Ko Ang Thong is a 42-island limestone park in the Lower Gulf, west of Samui. There is no public ferry. You go on a licensed tour. Foreign adults pay 300 THB cash at the park, children 150 THB. The fee is often not in the boat price. There is no ATM on Wua Ta Lap.',
      'The whole park closes 1 November to 15 December. It can also cancel on a swell day in January. The two names that matter are Talay Nai (Thale Nai), the inner saltwater lake on Koh Mae Ko, and Wua Ta Lap, the headquarters island with the steep viewpoint. Swimming in the lake is not allowed. The walk to the lake platform is about 20 minutes.',
    ],
    sections: [
      {
        id: 'boats',
        title: 'Big boat or speedboat',
        paragraphs: [
          'Big boats leave later, ride softer, and suit families. Speedboats leave earlier, hit more snorkel stops, and punish a swell. Most Samui desks pick up from Chaweng, Lamai, and Bophut, then use Nathon or a north-coast pier. Remote pickups (Lipa Noi, Nathon hotels, Thong Krut) can add about 400 THB. Phangan tours exist; Bottle Beach is usually not a pickup.',
          'January to September matches the Gulf swim. May to August is the week the Andaman parks are shut, so this is the island-hop you can still book. Do not stack Ang Thong on the same day you boat to Tao.',
        ],
        table: {
          headers: ['Boat', 'Who it fits', 'Trade-off'],
          rows: [
            ['Big boat from Nathon or Bophut', 'Families and first-timers', 'Fewer stops. A longer day on the water.'],
            ['Speedboat', 'Snorkelers who tolerate chop', 'Wet bags. More cancellations.'],
            ['Private longtail', 'Photographers with a budget', 'Weather risk sits entirely on you.'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Chaweng', href: '/koh-samui/chaweng', photo: '/photos/chaweng.jpg' },
      { title: 'Gulf islands 10 days', href: '/itineraries/10-days-gulf-islands-samui-phangan-tao', photo: '/photos/koh-phangan.jpg' },
      { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
    ],
    affiliates: [
      stay('Samui the night before', 'Bophut or Chaweng', 'Sleep on Samui. The park is a day, not a hotel.', stayLink('koh-samui'), '/photos/koh-samui.jpg'),
      klook('Ang Thong tours', 'Island hopping', 'Ask if the 300 THB park fee is extra. Morning boats only.', klookIslandHopping('Ang Thong Marine Park'), '/photos/koh-samui.jpg'),
      klook('Samui boats', 'Tours', 'Big boat if you want a softer ride. Speedboat if you want more stops.', klookTours('Ang Thong Koh Samui'), '/photos/koh-samui.jpg'),
    ],
    faqs: [
      {
        q: 'Is Ang Thong open in November?',
        a: 'No. The park is closed 1 November to 15 December. Book a south-coast island day instead.',
      },
      {
        q: 'Big boat or speedboat?',
        a: 'Big boat if anyone in the group gets seasick. Speedboat if the lake and two snorkel stops are the whole point.',
      },
      {
        q: 'Can you stay overnight?',
        a: 'Park bungalows and camping exist on Wua Ta Lap when the park is open. Most visitors still do a day trip and sleep on Samui.',
      },
    ],
  },
];
