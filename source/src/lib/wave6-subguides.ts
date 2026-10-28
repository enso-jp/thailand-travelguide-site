import { stayAreaLink, transferLink, klookTours, klookIslandHopping } from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search stays'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string, cta = 'See tickets'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'klook' };
}

export const wave6Pages: Page[] = [
  {
    path: '/phuket/kata-and-karon',
    title: 'Kata and Karon',
    description:
      'Kata and Karon are walkable west-coast swimming and a winter surf break south of Patong. Kata Noi is the small cove, Kata Yai the village, Karon the 3 km sandbar.',
    lede:
      'Kata and Karon are known for walkable west-coast swimming and a winter surf break, not Patong nightlife. Sleep on Kata or Karon, not over the hill in Patong. The Smart Bus is 100 THB; a Grab is faster with bags.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Phuket', href: '/phuket' },
      { name: 'Kata and Karon', href: '/phuket/kata-and-karon' },
    ],
    facts: [
      { label: 'Season', value: 'Best November to April (Andaman)' },
      { label: 'Smart Bus', value: '100 THB flat from HKT Exit 3; about 90 to 110 minutes' },
      { label: 'Airport car', value: 'HKT limousine board lists about 1,000 THB to Kata' },
      { label: 'Split', value: 'Kata Noi cove, Kata Yai village, 3 km Karon sand' },
    ],
    chips: ['West coast', 'Family swim', 'South of Patong'],
    photo: '/photos/kata-and-karon.jpg',
    geo: { lat: 7.821, lon: 98.298, containedIn: 'Phuket' },
    paragraphs: [
      'Kata and Karon sit on Phuket\'s west coast, one headland south of Patong. They are the first-timer beaches if you want sand you can walk, dinner on the same road, and a swim that is not a club deck. November to April is the Andaman window. May to October is cheaper and choppier. Surf picks up on Kata Yai in the wet months; that is a board, not a toddler morning.',
      'The Phuket Smart Bus from HKT Domestic Exit 3 is 100 THB to Karon Circle or Kata Night Plaza / Kata Palm. The January 2026 timetable puts Karon at about 90 minutes and Kata at about 100 to 110 minutes, traffic willing. A private car is 45 to 70 minutes. The airport limousine board listed about 1,000 THB to Kata in 2026. Grab and Bolt show a price before you book. Use the bus if you have one bag. Use a car if your hotel is up the Kata Noi hill.',
    ],
    sections: [
      {
        id: 'split',
        title: 'Kata Noi, Kata Yai, and Karon',
        paragraphs: [
          'Kata Noi is the small south cove: a short sand, a steep access road, and the quietest of the three. Katathani and The Shore sit on this pocket. You come for the swim and a slower evening, then scooter or Grab to Kata village if you want more than the hotel restaurant.',
          'Kata Yai is the village beach. The bay is wide enough to swim in the dry season, with a reef and a surf peak when the Andaman is up. Club Med Phuket sits on this beachfront at 3 Kata Road. The road behind the sand holds the useful dinner row. Stay here if you want to walk to food and still see the water.',
          'Karon is the long 3 km sandbar between Kata and the Patong hill. The beach is broader and flatter. The water is often less pretty than Kata. The trade is space, a running path, and more mid-range rooms. Mövenpick and Hilton Phuket Arcadia sit on this strip. Do not treat Karon as a cheaper Patong. It is a different, longer beach.',
        ],
        table: {
          headers: ['Beach', 'Who it fits', 'Trade-off'],
          rows: [
            ['Kata Noi', 'Couples and a quiet cove', 'Hill road. Thin village food.'],
            ['Kata Yai', 'First stays who want dinner and a swim', 'Busier bay. Surf closes the easy swim in the wet months.'],
            ['Karon', 'Families who want a long sand and more rooms', 'Less photogenic water. A scooter or songthaew to Kata dinner.'],
          ],
        },
      },
      {
        id: 'stay',
        title: 'Resorts worth a search',
        paragraphs: [
          'Search Kata Noi if the cove is the point: Katathani and The Shore. Search Kata Yai for village walks and Club Med if an all-in beach week is the brief. Search Karon for larger family rooms and a longer beach path. Book the beach name, not "Phuket" as if it were one town. Amanpuri and Trisara are a different coast; they live on the resort-living pages.',
        ],
      },
    ],
    portraits: [
      { title: 'Kamala and Surin', href: '/phuket/kamala-and-surin', photo: '/photos/kamala-and-surin.jpg' },
      { title: 'Rawai and Nai Harn', href: '/phuket/rawai-and-nai-harn', photo: '/photos/rawai-and-nai-harn.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Phuket nightlife', href: '/interests/nightlife/phuket-beach-clubs', photo: '/photos/nightlife.jpg' },
    ],
    affiliates: [
      stay('Kata hotels', 'Village and cove', 'Kata Yai to walk to dinner. Kata Noi if the small bay is the stay.', stayAreaLink('kata'), '/photos/kata-and-karon.jpg'),
      stay('Karon hotels', 'The long sand', 'More room, longer beach, a hop to Kata for the village.', stayAreaLink('karon'), '/photos/kata-and-karon.jpg'),
      {
        title: 'HKT airport car',
        kicker: 'Trip.com',
        body: 'Faster than the Smart Bus if you land late or have more than one bag.',
        href: transferLink('HKT'),
        cta: 'Book transfer',
        photo: '/photos/phuket.jpg',
        partner: 'transfer',
      },
    ],
    faqs: [
      {
        q: 'Kata or Karon for a first stay?',
        a: 'Kata Yai if you want to walk to dinner. Karon if you want a longer beach and a larger room. Kata Noi if you accept a hill and a quieter cove.',
      },
      {
        q: 'Do you need a scooter?',
        a: 'Not if you stay on one beach and eat on that road. Yes if you split Kata and Karon every night. Helmets are not optional.',
      },
    ],
  },
  {
    path: '/phuket/kamala-and-surin',
    title: 'Kamala and Surin',
    description:
      'Quiet central-west Phuket bays between Patong and Bang Tao. Kamala is the family swim beach. Surin is the white-sand cove under Millionaire\'s Mile villas.',
    lede:
      'Kamala and Surin are known for quieter west-coast swimming between Patong and Bang Tao. Kamala suits families. Surin is the small white cove. The cliff road is Millionaire\'s Mile.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Phuket', href: '/phuket' },
      { name: 'Kamala and Surin', href: '/phuket/kamala-and-surin' },
    ],
    facts: [
      { label: 'Season', value: 'Best November to April (Andaman)' },
      { label: 'Smart Bus', value: '100 THB; Surin about 45 minutes, Kamala about 60' },
      { label: 'Split', value: 'Kamala for family swim; Surin for the white cove' },
      { label: 'Cliff', value: 'Millionaire\'s Mile villas between the two bays' },
    ],
    chips: ['Central west', 'Family swim', 'White-sand cove'],
    photo: '/photos/kamala-and-surin.jpg',
    geo: { lat: 7.947, lon: 98.283, containedIn: 'Phuket' },
    paragraphs: [
      'Kamala and Surin sit on the central west coast, north of Patong and south of Bang Tao. They are the quieter Andaman stay if you still want an airport drive under an hour and a beach you can swim. This is not the Kata village strip and not the Laguna golf grid. November to April is the sea. The rest of the year is a discount and a less reliable swim.',
      'The Smart Bus from HKT is 100 THB. Surin Beach is about 45 minutes on the January 2026 timetable. Kamala (Big C) is about an hour. A car is 25 to 40 minutes in light traffic. Stay on the sand if you want to walk to dinner. Stay on the cliff if the villa view is the point and you accept a car for every meal.',
    ],
    sections: [
      {
        id: 'split',
        title: 'Kamala swim, Surin cove, cliff villas',
        paragraphs: [
          'Kamala is the longer, more useful family beach: a wide bay, a village road, and a tsunami memorial that is worth a quiet walk. Swimming is the reason to stay, not a club calendar. InterContinental Phuket sits above the north end. The nightlife page covers Pine and the Bang Tao clubs if you want one late night; do not book Kamala as a party base.',
          'Surin is the small white-sand cove under the casuarinas. The water is shallow and clear in the dry season. The village is thinner than Kamala. You come for the sand, then eat on the beach road or drive five minutes.',
          'Millionaire\'s Mile is the cliff road that links Kamala to Surin. The villas and the view are real. The walk is not a beach promenade. Book a cliff house only if you already want a car. Bang Tao and Trisara sit further north; they are a different stay.',
        ],
        table: {
          headers: ['Pocket', 'Who it fits', 'Trade-off'],
          rows: [
            ['Kamala beach road', 'Families who want a swim and a 7-Eleven', 'Not a pretty cove. Village traffic.'],
            ['Surin cove', 'A short white-sand stay', 'Fewer restaurants. Fills at lunch.'],
            ['Millionaire\'s Mile', 'Villa groups who want the view', 'Every meal is a car. Steep drives after dark.'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Kata and Karon', href: '/phuket/kata-and-karon', photo: '/photos/kata-and-karon.jpg' },
      { title: 'Rawai and Nai Harn', href: '/phuket/rawai-and-nai-harn', photo: '/photos/rawai-and-nai-harn.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Kamala and Bang Tao clubs', href: '/interests/nightlife/phuket-kamala-bangtao', photo: '/photos/nightlife.jpg' },
    ],
    affiliates: [
      stay('Kamala hotels', 'Family bay', 'Walk to the sand. Hear the road, not Bangla.', stayAreaLink('kamala'), '/photos/kamala-and-surin.jpg'),
      stay('Surin hotels', 'White cove', 'Smaller beach, quicker airport run than Kata.', stayAreaLink('surin'), '/photos/kamala-and-surin.jpg'),
      {
        title: 'HKT airport car',
        kicker: 'Trip.com',
        body: 'The short west-coast hop. Useful after a night arrival.',
        href: transferLink('HKT'),
        cta: 'Book transfer',
        photo: '/photos/phuket.jpg',
        partner: 'transfer',
      },
    ],
    faqs: [
      {
        q: 'Kamala or Surin?',
        a: 'Kamala if you want a longer swim and more dinner. Surin if you want the small white cove and will eat simply.',
      },
      {
        q: 'Is this quieter than Kata?',
        a: 'Yes, especially at night. You give up the Kata village row. Patong is a short, ugly drive if someone insists on one night out.',
      },
    ],
  },
  {
    path: '/phuket/rawai-and-nai-harn',
    title: 'Rawai and Nai Harn',
    description:
      'Phuket far-south peninsula: Nai Harn Lagoon for swimming, Rawai seafood market and longtails to Coral and Bon Island, Promthep Cape for sunset.',
    lede:
      'Rawai and Nai Harn are known as the far-south end of Phuket. Swim at Nai Harn Lagoon. Eat and boat from Rawai. Walk Promthep Cape for sunset, not as a hotel base.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Phuket', href: '/phuket' },
      { name: 'Rawai and Nai Harn', href: '/phuket/rawai-and-nai-harn' },
    ],
    facts: [
      { label: 'Season', value: 'Best November to April (Andaman)' },
      { label: 'Smart Bus', value: '100 THB; about 2 hours 10 minutes to Rawai' },
      { label: 'Airport car', value: 'HKT limousine board lists about 900 THB to Rawai' },
      { label: 'Boats', value: 'Rawai longtails to Coral (Koh Hey) and Bon Island' },
    ],
    chips: ['Far south', 'Nai Harn swim', 'Rawai boats'],
    photo: '/photos/rawai-and-nai-harn.jpg',
    geo: { lat: 7.772, lon: 98.323, containedIn: 'Phuket' },
    paragraphs: [
      'Rawai and Nai Harn are the far-south peninsula, past Kata. This is not a second Patong. Nai Harn is the swim. Rawai is the working waterfront: seafood, longtails, and a pier, not a postcard lagoon. Promthep Cape is the sunset viewpoint on the same headland. Give the cape a late afternoon, then leave.',
      'The Smart Bus is still 100 THB and takes about 2 hours 10 minutes to Rawai on the 2026 timetable. A car from HKT is 50 to 75 minutes. The airport limousine board listed about 900 THB to Rawai. Stay at Nai Harn if the beach is the trip. Stay in Rawai if the market and the boats matter more than the sand.',
    ],
    sections: [
      {
        id: 'split',
        title: 'Lagoon, market, cape',
        paragraphs: [
          'Nai Harn (Nai Harn Lagoon) is one of the island\'s better dry-season swims: a curved bay, a lake behind the beach, and a short walk to Yanui if you want a smaller cove. The sand fills on weekends. Morning is the useful hour. Hotels sit behind the beach road, not on a club deck.',
          'Rawai Beach is for boats and dinner, not for a long swim. The seafood market and the pier restaurants are the evening. Shared longtails run to Coral Island (Koh Hey) and Bon Island when the Andaman allows it. Agree the boat and the wait time on the sand. Morning only in the wet months. Check on arrival.',
          'Promthep Cape is the southern viewpoint. Go for sunset, not lunch. The lot and the stalls are crowded. Pair it with Nai Harn the same afternoon if you already have a car. Do not build a day around the cape alone.',
        ],
        table: {
          headers: ['Spot', 'Who it fits', 'Trade-off'],
          rows: [
            ['Nai Harn Lagoon', 'Swimmers who want the south bay', 'Weekend crowds. Longer airport run than Kamala.'],
            ['Rawai pier', 'Seafood and island longtails', 'Not a swim beach. Traffic on the coast road.'],
            ['Promthep Cape', 'One sunset', 'Parking and coaches. Leave after the light.'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Kata and Karon', href: '/phuket/kata-and-karon', photo: '/photos/kata-and-karon.jpg' },
      { title: 'Kamala and Surin', href: '/phuket/kamala-and-surin', photo: '/photos/kamala-and-surin.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/thai-food-southern.jpg' },
    ],
    affiliates: [
      stay('Nai Harn hotels', 'The swim', 'Book the lagoon if the beach is why you came south.', stayAreaLink('nai-harn'), '/photos/rawai-and-nai-harn.jpg'),
      stay('Rawai hotels', 'Pier and market', 'Sleep here for boats and seafood, not for a pretty swim.', stayAreaLink('rawai'), '/photos/rawai-and-nai-harn.jpg'),
      klook('Coral and Bon Island boats', 'Island hopping', 'Morning longtails from Rawai. Cancel if the Andaman is up.', klookIslandHopping('Rawai Coral Island'), '/photos/rawai-and-nai-harn.jpg'),
    ],
    faqs: [
      {
        q: 'Can you swim at Rawai?',
        a: 'Not as a main beach. Swim at Nai Harn. Use Rawai for dinner and the longtail desk.',
      },
      {
        q: 'Is the south too far from the airport?',
        a: 'It is the longest west-coast hop. Fine for four nights. Painful for one night before a dawn flight.',
      },
    ],
  },
  {
    path: '/koh-samui/chaweng',
    title: 'Chaweng',
    description:
      'Chaweng is Samui\'s 6 km east-coast white-sand strip and the main dining and nightlife bay. Split Chaweng Noi from the reef-protected centre.',
    lede:
      'Chaweng is known for the 6 km east-coast strip, dinner, and nightlife. Sleep central if you want the reef swim and the road. Sleep Chaweng Noi if you want a quieter south pocket.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Samui', href: '/koh-samui' },
      { name: 'Chaweng', href: '/koh-samui/chaweng' },
    ],
    facts: [
      { label: 'Season', value: 'Easier January to September (Lower Gulf)' },
      { label: 'Airport', value: 'USM taxi board about 400 THB; 7 to 14 minutes' },
      { label: 'Beach', value: 'About 6 km; centre is reef-protected' },
      { label: 'Songthaew', value: 'Chaweng to Lamai about 50 to 60 THB, 20 to 25 minutes' },
    ],
    chips: ['East coast', '6 km sand', 'Nightlife strip'],
    photo: '/photos/chaweng.jpg',
    geo: { lat: 9.531, lon: 100.062, containedIn: 'Koh Samui' },
    paragraphs: [
      'Chaweng is Samui\'s main east-coast bay: about 6 km of white sand, the densest dinner row, and the island nightlife that is not a Full Moon. January to September is the easier Lower Gulf sea. October to December is wetter and windier. Fly USM. The airport taxi board lists about 400 THB to Chaweng, a 7 to 14 minute drive. There is no useful songthaew from the terminal. Book the car.',
      'Central Chaweng is the reef-protected swim and the loud road. Chaweng Noi is the quieter south pocket around the next headland. Do not book "Chaweng" as if every soi were the same volume. Beach clubs sit on the Samui nightlife page. Six Senses and Four Seasons are different coasts.',
    ],
    sections: [
      {
        id: 'split',
        title: 'Central reef vs Chaweng Noi',
        paragraphs: [
          'Central and North Chaweng hold the 6 km sand, Central Festival, and the late food. The reef keeps the inner bay calmer for swimming in the dry months. You will hear the road. That is the deal if you want to walk to dinner at 22:00.',
          'Chaweng Noi is the next bay south: a smaller beach, fewer clubs, and a short hop back to the strip. Stay here if you want the east-coast light without sleeping on the bar block. A songthaew or Grab to central Chaweng is the evening move. A fair songthaew on to Lamai is about 50 to 60 THB and 20 to 25 minutes. Agree the fare before you climb in.',
        ],
        table: {
          headers: ['Pocket', 'Who it fits', 'Trade-off'],
          rows: [
            ['North / central Chaweng', 'First stays who want dinner and a swim', 'Road noise. Tourist prices.'],
            ['Chaweng Noi', 'A quieter east-coast night', 'You will Grab back for the late strip.'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Lamai', href: '/koh-samui/lamai', photo: '/photos/lamai.jpg' },
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
      { title: 'Samui nightlife', href: '/interests/nightlife/koh-samui-beach-clubs', photo: '/photos/nightlife.jpg' },
    ],
    affiliates: [
      stay('Chaweng hotels', 'The main bay', 'Walk to dinner. Hear the road. Filter by Chaweng Noi if you want the south pocket.', stayAreaLink('chaweng'), '/photos/chaweng.jpg'),
      {
        title: 'USM airport car',
        kicker: 'Trip.com',
        body: 'The short hop. The airport board is about 400 THB to Chaweng.',
        href: transferLink('USM'),
        cta: 'Book transfer',
        photo: '/photos/koh-samui.jpg',
        partner: 'transfer',
      },
      klook('Phangan and Tao boats', 'Klook', 'Book Lomprayah the afternoon before if you are hopping on.', klookTours('Lomprayah Koh Samui'), '/photos/koh-phangan.jpg'),
    ],
    faqs: [
      {
        q: 'Is Chaweng too loud?',
        a: 'The central road is. Hotels a block off the sand, or Chaweng Noi, are the usual fix. Pick Lamai if you want a calmer east-coast week.',
      },
      {
        q: 'Chaweng or the north coast?',
        a: 'Chaweng for dinner density and the airport. Bophut and Maenam for a quieter night and a different boat geometry.',
      },
    ],
  },
  {
    path: '/koh-samui/lamai',
    title: 'Lamai',
    description:
      'Lamai is Samui\'s relaxed second beach south of Chaweng: deeper water, lower resort prices, a Sunday walking street, and Hin Ta Hin Yai rocks.',
    lede:
      'Lamai is known as the calmer east-coast bay south of Chaweng. The water is deeper. Rates run lower. Come for Sunday walking street and Hin Ta Hin Yai, not for the Chaweng club row.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Samui', href: '/koh-samui' },
      { name: 'Lamai', href: '/koh-samui/lamai' },
    ],
    facts: [
      { label: 'Season', value: 'Easier January to September (Lower Gulf)' },
      { label: 'Airport', value: 'USM taxi board about 700 THB; 18 to 30 minutes' },
      { label: 'Songthaew', value: 'Lamai to Chaweng about 50 to 60 THB, 20 to 25 minutes' },
      { label: 'Sunday', value: 'Lamai Walking Street, late afternoon into the evening' },
    ],
    chips: ['Second beach', 'Deeper water', 'Sunday market'],
    photo: '/photos/lamai.jpg',
    geo: { lat: 9.466, lon: 100.04, containedIn: 'Koh Samui' },
    paragraphs: [
      'Lamai is the next east-coast bay south of Chaweng. It is the stay if you want white sand and dinner without sleeping on the island\'s main club road. The water is deeper than central Chaweng, so the swim feels less like a reef pool. Resort rates usually sit under Chaweng for a similar room. January to September is still the Gulf window.',
      'The USM taxi board lists about 700 THB to Lamai, 18 to 30 minutes. A daytime songthaew from Chaweng is about 50 to 60 THB if you agree the fare. Grab is the late option. Hin Ta and Hin Yai, the grandfather and grandmother rocks, sit on the south headland. They are a short stop, not a half-day. Sunday Walking Street is the weekly market on the Lamai road; go late afternoon, not at 21:00 when the useful food is gone.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to sleep on Lamai',
        paragraphs: [
          'North Lamai is closer to Chaweng Noi and a quicker hop to the strip. Central Lamai has the village, the walking street, and most mid-range rooms. South Lamai is quieter and nearer Hin Ta Hin Yai. The Bophut and Lamai nightlife page covers the bars if you want one late night. Do not treat Lamai as a dead bay; treat it as the second beach.',
        ],
        table: {
          headers: ['Pocket', 'Who it fits', 'Trade-off'],
          rows: [
            ['North Lamai', 'People who still want Chaweng some nights', 'You will hear more traffic.'],
            ['Central Lamai', 'Village dinners and Sunday market', 'The main road runs behind the sand.'],
            ['South Lamai / Hin Ta', 'A quieter end and the rocks at dawn', 'Thinner late food. A Grab to the village.'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Chaweng', href: '/koh-samui/chaweng', photo: '/photos/chaweng.jpg' },
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Bophut and Lamai nights', href: '/interests/nightlife/samui-bophut-lamai', photo: '/photos/koh-samui.jpg' },
      { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
    ],
    affiliates: [
      stay('Lamai hotels', 'The second bay', 'Lower rates than Chaweng. Deeper water. Filter by south if you want the rocks.', stayAreaLink('lamai'), '/photos/lamai.jpg'),
      {
        title: 'USM airport car',
        kicker: 'Trip.com',
        body: 'The board is about 700 THB to Lamai. Book it if you land with bags.',
        href: transferLink('USM'),
        cta: 'Book transfer',
        photo: '/photos/koh-samui.jpg',
        partner: 'transfer',
      },
    ],
    faqs: [
      {
        q: 'Is Lamai better for families than Chaweng?',
        a: 'Often yes. The road is calmer and the clubs are thinner. Central Chaweng still has the easier reef-protected toddler swim.',
      },
      {
        q: 'Do you need both Chaweng and Lamai?',
        a: 'No. Pick one east-coast base. Songthaew or Grab covers a dinner on the other bay.',
      },
    ],
  },
  {
    path: '/bangkok/phrom-phong-and-thong-lo',
    title: 'Phrom Phong and Thong Lo',
    description:
      'Mid-Sukhumvit for Japanese dining, specialty coffee, Benchasiri Park, and EmDistrict at Phrom Phong, plus cocktail and late lanes on Soi 55 and Thong Lo.',
    lede:
      'Phrom Phong and Thong Lo are known for Japanese kitchens, coffee, and late lanes on Soi 55. Use BTS Phrom Phong for EmDistrict and Benchasiri. Use Thong Lo for dinner and bars.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Bangkok', href: '/bangkok' },
      { name: 'Phrom Phong and Thong Lo', href: '/bangkok/phrom-phong-and-thong-lo' },
    ],
    facts: [
      { label: 'Rail', value: 'BTS Phrom Phong (E5) and Thong Lo (E6); one stop' },
      { label: 'Tap', value: 'A 2026 BTS ride along this stretch is about 17 to 32 THB' },
      { label: 'Day', value: 'EmDistrict and Benchasiri Park at Phrom Phong' },
      { label: 'Night', value: 'Soi 55 / Thong Lo cocktail and late-food lanes' },
    ],
    chips: ['Japanese dining', 'EmDistrict', 'Soi 55 nights'],
    photo: '/photos/phrom-phong-and-thong-lo.jpg',
    geo: { lat: 13.73, lon: 100.57, containedIn: 'Bangkok' },
    paragraphs: [
      'Phrom Phong and Thong Lo are the mid-Sukhumvit stay if you want Japanese dining, coffee, and a BTS hotel without starting on Nana. BTS Phrom Phong (E5) opens onto EmDistrict: Emporium, EmQuartier, and EmSphere. Benchasiri Park is the small green next to Emporium, useful at dawn or after the malls. Thong Lo (E6) is one stop east. A 2026 BTS tap on this stretch is about 17 to 32 THB.',
      'Soi 39, 33, and 24 hold the Japanese row. Specialty coffee sits in the same blocks and along Thong Lo. After dark, Soi 55 (Thong Lo) is the cocktail and late-food lane. Bar Us, Rabbit Hole, and Find The Locker Room live on the Thonglor nightlife page. The stay and the daytime map sit here, not a crawl list.',
    ],
    sections: [
      {
        id: 'split',
        title: 'Phrom Phong day, Thong Lo night',
        paragraphs: [
          'Sleep nearer Phrom Phong if the malls, the park, and the Japanese lunches are the week. Sleep nearer Thong Lo if dinner and the sois are the point. The walk between the two stations along Sukhumvit is hot and dull. Take the one-stop BTS.',
          'EmDistrict is air-con shopping, not a neighbourhood. Use it on a hot afternoon, then leave. Benchasiri is the reset. Do not stack a palace morning, Chatuchak, and a Thong Lo night on the same calendar day.',
        ],
        table: {
          headers: ['Pocket', 'Who it fits', 'Trade-off'],
          rows: [
            ['Phrom Phong / EmDistrict', 'Malls, Benchasiri, Japanese lunches', 'Less character after 22:00'],
            ['Thong Lo / Soi 55', 'Dinner, coffee, cocktail lanes', 'Higher rates. Grab home after last BTS.'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Sukhumvit and Thonglor', href: '/bangkok/sukhumvit-thonglor', photo: '/photos/sukhumvit.jpg' },
      { title: 'Ari', href: '/bangkok/ari', photo: '/photos/ari.jpg' },
      { title: 'Silom and Sathorn', href: '/bangkok/silom-and-sathorn', photo: '/photos/silom-and-sathorn.jpg' },
      { title: 'Thonglor nights', href: '/interests/nightlife/thonglor-ekkamai', photo: '/photos/sukhumvit.jpg' },
    ],
    affiliates: [
      stay('Phrom Phong hotels', 'EmDistrict and the park', 'Walk to BTS E5 and Benchasiri. Japanese lunches on the sois.', stayAreaLink('phrom-phong'), '/photos/phrom-phong-and-thong-lo.jpg'),
      stay('Thonglor hotels', 'Soi 55 dinners', 'One stop east. The late lanes are the reason.', stayAreaLink('thonglor'), '/photos/phrom-phong-and-thong-lo.jpg'),
    ],
    faqs: [
      {
        q: 'Is this better than Nana for a first stay?',
        a: 'Yes if you want dinner and rail without the Nana soi. Nana is cheaper and louder. Old City is only for a temple-first trip.',
      },
      {
        q: 'Do you need a hotel in both Phrom Phong and Thong Lo?',
        a: 'No. They are one BTS stop apart. Pick the soi you will walk at 23:00.',
      },
    ],
  },
  {
    path: '/bangkok/silom-and-sathorn',
    title: 'Silom and Sathorn',
    description:
      'Bangkok financial and embassy district between Lumphini and the Chao Phraya: Sala Daeng street food, Convent Road, Mahanakhon SkyWalk, and Suan Phlu dining.',
    lede:
      'Silom and Sathorn are known as the office and embassy ridge, not a first-timer soi strip. Eat at Sala Daeng. Walk Convent Road. Book Mahanakhon SkyWalk if the view is the point.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Bangkok', href: '/bangkok' },
      { name: 'Silom and Sathorn', href: '/bangkok/silom-and-sathorn' },
    ],
    facts: [
      { label: 'Rail', value: 'BTS Sala Daeng and Chong Nonsi; MRT Si Lom and Lumphini' },
      { label: 'SkyWalk', value: 'Adult 1,000 THB before 15:30, 1,200 THB after; 74 and 78F' },
      { label: 'Eat', value: 'Sala Daeng stalls; Convent Road; Suan Phlu dinners' },
      { label: 'Park', value: 'Lumphini at dawn; last BTS around midnight' },
    ],
    chips: ['Embassy ridge', 'Sala Daeng food', 'SkyWalk'],
    photo: '/photos/silom-and-sathorn.jpg',
    geo: { lat: 13.726, lon: 100.53, containedIn: 'Bangkok' },
    paragraphs: [
      'Silom and Sathorn sit between Lumphini Park and the Chao Phraya: offices, embassies, and hotels that work if you have meetings or want the park at dawn. This is not Thong Lo. The useful food is Sala Daeng street stalls by BTS Sala Daeng and MRT Si Lom, plus Convent Road between Silom and Sathorn. Suan Phlu, off South Sathorn, is the sit-down dinner pocket.',
      'King Power Mahanakhon is at 114 Narathiwas Ratchanakarin Road, a short walk from BTS Chong Nonsi. SkyWalk tickets in 2026 are 1,000 THB for adults from 10:00 to 15:30 and 1,200 THB from 15:30 to 19:00, covering the indoor and outdoor decks on floors 74 and 78. Children 8 to 12 and seniors 60 and over are 500 or 600 THB by the same clock. Check the operator board. A 2026 BTS tap across this knot is about 17 to 32 THB.',
    ],
    sections: [
      {
        id: 'move',
        title: 'The ridge',
        paragraphs: [
          'Stay on Silom if you want Sala Daeng food and the BTS/MRT cross. Stay on Sathorn if the hotel tower and a quieter night matter more. The river is a Grab or a walk plus heat to Saphan Taksin. Lumphini is the morning. Patpong stalls by Sala Daeng are souvenirs on a go-go block, not a food plan. The Silom nightlife page covers the bars.',
        ],
        table: {
          headers: ['Pocket', 'Who it fits', 'Trade-off'],
          rows: [
            ['Sala Daeng / Silom', 'Street food and the rail knot', 'Office crowds at 18:00. Thin character on Sundays.'],
            ['Convent Road', 'A walkable eat street between the two roads', 'Hot at noon. Fine at dusk.'],
            ['Suan Phlu / South Sathorn', 'Sit-down dinners', 'You will Grab home if you sleep on Silom.'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Siam and Silom', href: '/bangkok/siam-silom', photo: '/photos/siam.jpg' },
      { title: 'Phrom Phong and Thong Lo', href: '/bangkok/phrom-phong-and-thong-lo', photo: '/photos/phrom-phong-and-thong-lo.jpg' },
      { title: 'Ari', href: '/bangkok/ari', photo: '/photos/ari.jpg' },
      { title: 'Silom nights', href: '/interests/nightlife/silom-sathorn', photo: '/photos/siam.jpg' },
    ],
    affiliates: [
      stay('Silom hotels', 'Sala Daeng knot', 'BTS and MRT on the same walk. Street food downstairs.', stayAreaLink('silom'), '/photos/silom-and-sathorn.jpg'),
      stay('Sathorn hotels', 'Embassy ridge', 'Quieter towers. Grab to Chong Nonsi for SkyWalk.', stayAreaLink('sathorn'), '/photos/silom-and-sathorn.jpg'),
      klook('Mahanakhon SkyWalk', 'Attraction tickets', 'Book the timed deck if you refuse the walk-up queue.', klookTours('Mahanakhon SkyWalk'), '/photos/silom-and-sathorn.jpg'),
    ],
    faqs: [
      {
        q: 'Is Silom a good four-night base?',
        a: 'It works if you like the park and the rail. Move to Thong Lo or the river if evenings matter more than offices.',
      },
      {
        q: 'Do you need a separate Siam hotel?',
        a: 'No. Siam is a few BTS stops for the malls. Sleep on Silom if Lumphini or a meeting is the morning.',
      },
    ],
  },
  {
    path: '/bangkok/ari',
    title: 'Ari',
    description:
      'Leafy North Bangkok around BTS Ari (N5): specialty cafes, Bib Gourmand Isan and Hua Hin seafood, and quiet low-rise streets 15 minutes from Siam.',
    lede:
      'Ari is known for cafes and neighbourhood Thai kitchens on quiet sois west of Phahonyothin. Ride BTS Ari. Siam is about 15 minutes. This is not Sukhumvit nightlife.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Bangkok', href: '/bangkok' },
      { name: 'Ari', href: '/bangkok/ari' },
    ],
    facts: [
      { label: 'Rail', value: 'BTS Ari (N5); Siam about 15 minutes, five stops' },
      { label: 'Tap', value: 'Ari to Siam is about 32 to 37 THB in 2026' },
      { label: 'Eat', value: 'Lay Lao for Isan and Hua Hin seafood; Prik-Yuak cash only on Pradiphat' },
      { label: 'Shape', value: 'Low-rise sois west of Phahonyothin' },
    ],
    chips: ['BTS Ari', 'Cafe sois', 'Bib kitchens'],
    photo: '/photos/ari.jpg',
    geo: { lat: 13.78, lon: 100.545, containedIn: 'Bangkok' },
    paragraphs: [
      'Ari is the leafy North Bangkok neighbourhood around BTS Ari (N5). West of Phahonyothin, Soi Ari 1 to 4 is the walkable cafe and bar village. The streets stay low-rise. Siam is five Sukhumvit-line stops and about 15 minutes. A 2026 tap is about 32 to 37 THB. Stay here if you want coffee, a quieter night, and Thai kitchens that are not a Sukhumvit soi.',
      'Two 2026 Bib Gourmand rooms sit on this ridge. Lay Lao (Phaya Thai), 65 Soi Phahon Yothin 7, is Isan and Thai with Hua Hin seafood: order the deep-fried pork belly in Lay Lao sauce, fried squid with roe, and som tam, daily about 10:30 to 22:00, near BTS Ari. Prik-Yuak (Phya Thai) is at 108 Pradiphat Road: Southern-leaning home cooking, pork belly and egg stew, Tuesday to Sunday about 11:00 to 21:00, closed Monday. Michelin lists it as cash only. It is about a 15 minute walk from BTS Saphan Khwai. The Ari nightlife page covers the wine rooms. Sleep in Ari or Phaya Thai if this is the night; Sukhumvit Soi 11 is several BTS stops south.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'How to stay in Ari',
        paragraphs: [
          'Sleep west of the BTS if you want to walk the sois. Sleep toward Phaya Thai if your mornings are the ARL or a southbound train. Food here is cafes plus a few serious Thai rooms, not a palace-and-Yaowarat loop. Pair one Ari dinner with a separate Old City lunch. Last BTS trains are around midnight; Grab after that.',
        ],
        table: {
          headers: ['Pocket', 'Who it fits', 'Trade-off'],
          rows: [
            ['Soi Ari 1 to 4', 'Cafes, wine rooms, a walkable night', 'Thin late food after the sois repeat'],
            ['Pradiphat / Saphan Khwai', 'Prik-Yuak and a more local strip', 'Not as pretty as the Ari sois'],
            ['Phaya Thai', 'ARL and southbound BTS', 'Three BTS stops to the cafe village'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Phrom Phong and Thong Lo', href: '/bangkok/phrom-phong-and-thong-lo', photo: '/photos/phrom-phong-and-thong-lo.jpg' },
      { title: 'Silom and Sathorn', href: '/bangkok/silom-and-sathorn', photo: '/photos/silom-and-sathorn.jpg' },
      { title: 'Ari nights', href: '/interests/nightlife/ari-pradipat', photo: '/photos/ari.jpg' },
      { title: 'Bangkok Bib Gourmand', href: '/thai-food/bangkok-bib-gourmand', photo: '/photos/thai-food-bib.jpg' },
    ],
    affiliates: [
      stay('Ari hotels', 'West of the BTS', 'Walk the sois. Ride five stops to Siam when you need the malls.', stayAreaLink('ari'), '/photos/ari.jpg'),
      stay('Phaya Thai hotels', 'ARL side', 'Useful if you land late at Suvarnabhumi and want the train, not a Sukhumvit soi.', stayAreaLink('siam'), '/photos/bts.jpg'),
    ],
    faqs: [
      {
        q: 'Is Ari too far from the temples?',
        a: 'It is a BTS-plus-river morning, not a walk. Sleep in the Old City only if the palace is the whole stay.',
      },
      {
        q: 'Ari or Thong Lo?',
        a: 'Ari for cafes and a quieter night. Thong Lo for Japanese dining and Soi 55. They are different BTS rides, not one neighbourhood.',
      },
    ],
  },
];
