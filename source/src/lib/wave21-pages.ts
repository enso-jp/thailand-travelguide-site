import { stayLink, stayAreaLink, hotelSearchLink, klookTours, klookIslandHopping } from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search stays'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string, cta = 'See tickets'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'klook' };
}

export const wave21Pages: Page[] = [
  {
    path: '/search',
    title: 'Search Thailand Travel Guide',
    description:
      'Search destinations, food guides, itineraries, and planning pages across Thailand Travel Guide. Type a city, dish, or route.',
    lede:
      'Search is known for jumping to a city, dish, or route. Use it if you already know the name and want the page, not a homepage browse.',
    schema: 'Article',
    crumbs: [{ name: 'Search', href: '/search' }],
    facts: [
      { label: 'Index', value: 'Places, food, routes, and planning pages' },
      { label: 'Tip', value: 'Type at least two letters in the header search' },
    ],
    paragraphs: [
      'Use the header search field. Results rank title matches first. A 2026 BTS tap is still 17 to 62 THB if the result sends you to Bangkok rail notes.',
    ],
    portraits: [
      { title: 'Destinations', href: '/destinations', photo: '/photos/destinations.jpg' },
      { title: 'Thai food', href: '/thai-food', photo: '/photos/thai-food.jpg' },
      { title: 'Itineraries', href: '/itineraries', photo: '/photos/itineraries.jpg' },
    ],
    faqs: [
      {
        q: 'Does search include stalls?',
        a: 'Dish names and city food guides are in the index. Individual stall addresses live on the city food pages.',
      },
    ],
  },
  {
    path: '/pattaya',
    title: 'Pattaya',
    description:
      'Pattaya is the east-gulf city an hour and a half from Bangkok: Jomtien sand, Koh Larn ferries, and the Sanctuary of Truth. Come on purpose, not as a default add-on.',
    lede:
      'Pattaya is known for Walking Street and a cheap east-gulf weekend. It fits planners who want Jomtien or Koh Larn, not a first-week Andaman substitute.',
    schema: 'City',
    alternateName: 'พัทยา',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Pattaya', href: '/pattaya' },
    ],
    facts: [
      { label: 'From Bangkok', value: '1.5 to 2.5 hours by road; buses from Ekkamai' },
      { label: 'Beach split', value: 'Jomtien and Wongamat quieter than Walking Street' },
      { label: 'Island hop', value: 'Koh Larn ferry 30 to 40 THB, about 45 minutes' },
      { label: 'Ticket', value: 'Sanctuary of Truth about 500 THB' },
    ],
    chips: ['East gulf', 'Koh Larn', 'Jomtien'],
    photo: '/photos/pattaya.jpg',
    geo: { lat: 12.9236, lon: 100.8825, containedIn: 'Eastern Thailand' },
    paragraphs: [
      'Pattaya sits on the east gulf, 1.5 to 2.5 hours by road from Bangkok depending on Friday traffic. It is not an Andaman stop and not a Samui substitute. Sleep in Jomtien or Wongamat if Walking Street is not the trip. The Sanctuary of Truth is a 500 THB teak hall on the north cape, and Koh Larn is the day-trip island from Bali Hai pier.',
      'Use Pattaya as a Bangkok weekend or a flight-gap day. Do not add it to a first week that already holds Phuket or Samui. Book the hotel on Trip.com, then book a Koh Larn seat or a Sanctuary timed ticket on Klook if you want a desk that names the transfer. Eat using the [Pattaya food guide](/thai-food/pattaya): Jomtien weight-price fish, then Naklua if you sleep north.',
    ],
    sections: [
      {
        id: 'neighbourhoods',
        title: 'Where to sleep',
        paragraphs: [
          'Pick one sand and stay put. A 2026 Grab along the beach road is often 60 to 150 THB.',
        ],
        bullets: [
          '**Jomtien:** Calmer gulf sand if you came to swim.',
          '**Naklua and Wongamat:** North hotels toward the Sanctuary of Truth.',
          '**Central Pattaya:** The Walking Street grid. Sleep here only if that night is the trip.',
        ],
      },
      {
        id: 'get-there',
        title: 'Getting around',
        paragraphs: [
          'Buses leave Ekkamai. Private cars quote 1,500 to 2,500 THB from Bangkok hotels.',
        ],
        bullets: [
          '**Songthaew:** Cheap on the beach road if you agree the fare first.',
          '**Scooter:** Skip Beach Road rentals unless you already ride. That is how people spend the afternoon at a clinic.',
        ],
      },
    ],
    portraits: [
      { title: 'Sanctuary of Truth', href: '/attractions/sanctuary-of-truth-pattaya', photo: '/photos/pattaya.jpg' },
      { title: 'Hua Hin', href: '/hua-hin', photo: '/photos/hua-hin.jpg' },
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
      { title: 'Pattaya food', href: '/thai-food/pattaya', photo: '/photos/jomtien.jpg' },
    ],
    affiliates: [
      stay('Pattaya stays', 'Jomtien or Wongamat', 'Sleep on the sand you will actually use. Walking Street is a taxi, not a hotel filter.', stayLink('pattaya'), '/photos/pattaya.jpg'),
      klook('Koh Larn and tickets', 'Tours', 'Ferry or a Sanctuary timed entry. Read whether transfer is included.', klookTours('Pattaya Koh Larn'), '/photos/koh-larn.jpg'),
    ],
    faqs: [
      {
        q: 'Is Pattaya a first-week stop?',
        a: 'Only if you already know you want the east gulf. It is not a substitute for Phuket or Samui, and it is a long car from Suvarnabhumi if you land late.',
      },
      {
        q: 'Jomtien or central Pattaya?',
        a: 'Jomtien if you want a swim. Central if Walking Street is the point. Wongamat if the Sanctuary of Truth is tomorrow morning.',
      },
    ],
  },
  {
    path: '/koh-phi-phi',
    title: 'Koh Phi Phi',
    description:
      'Phi Phi Don is the village. Maya Bay is the timed park on Phi Phi Le. 400 THB park fee, longtail or speedboat, November to April.',
    lede:
      'Koh Phi Phi is known for Maya Bay and a loud Tonsai village. It fits one Andaman boat day, or one overnight if you already refused a same-day Krabi stack.',
    schema: 'TouristDestination',
    alternateName: 'เกาะพีพี',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Phi Phi', href: '/koh-phi-phi' },
    ],
    facts: [
      { label: 'Season', value: 'November to April; boats cancel in monsoon' },
      { label: 'Maya Bay', value: '400 THB park fee; timed entry' },
      { label: 'From Krabi', value: 'Speedboat from Klong Jilad about 45 to 60 minutes' },
      { label: 'From Phuket', value: 'Rassada speedboats about 45 to 90 minutes' },
    ],
    chips: ['Andaman', 'Maya Bay', 'Tonsai'],
    photo: '/photos/phi-phi.jpg',
    geo: { lat: 7.7407, lon: 98.7784, containedIn: 'Andaman Coast' },
    paragraphs: [
      'Phi Phi is two maps. Phi Phi Don holds the village, the viewpoints, and Long Beach. Phi Phi Le holds Maya Bay, Pileh, and Viking Cave. The 400 THB park fee is often extra on a Klook boat, so read the inclusions line. November to April is the useful window. May to October is refund fights.',
      'Sleep on Don only if you want a second morning. A same-day boat from Phuket or Krabi covers Maya for most first trips. Do not book two companies for the same water. Longtails from Tonsai to Long Beach are about 100 THB a person.',
    ],
    sections: [
      {
        id: 'neighbourhoods',
        title: 'Beaches and village',
        bullets: [
          '**Tonsai:** Loud after 22:00. Sleep here only if the boat is the trip.',
          '**Long Beach:** A longtail from the village and quieter at night.',
          '**Viewpoints:** A 30 THB dawn walk above Tonsai. Bring water.',
          '**Tiger Cave:** The 1,237 steps are on the Krabi mainland, not on Phi Phi.',
        ],
      },
      {
        id: 'get-there',
        title: 'Getting around',
        paragraphs: [
          'There is no airport. Boats from Rassada in Phuket or Klong Jilad in Krabi are the doors. Last boats move with weather, so confirm the board that morning. On the island you walk, take a longtail, or hire a boat. There are no cars.',
        ],
      },
    ],
    portraits: [
      { title: 'Maya Bay', href: '/attractions/phi-phi-islands-and-maya-bay', photo: '/photos/phi-phi.jpg' },
      { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
    ],
    affiliates: [
      stay('Phi Phi stays', 'Tonsai or Long Beach', 'Book Don only if the second morning is the point. Long Beach if you want sleep.', stayLink('krabi'), '/photos/phi-phi.jpg'),
      klook('Maya Bay boats', 'Tours', 'Name the pier and the park fee. 400 THB is often extra.', klookIslandHopping('Phi Phi Maya Bay'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'Do you need to sleep on Phi Phi?',
        a: 'No. A day boat from Phuket or Krabi covers Maya Bay. Sleep on Don if you want dawn viewpoints or a second snorkel, not because a tour desk said so.',
      },
      {
        q: 'Is the 400 THB fee in the ticket?',
        a: 'Often not. Read the Klook inclusions. Maya Bay rules change. The board at the park desk is the one that matters that morning.',
      },
    ],
  },
  {
    path: '/koh-chang',
    title: 'Koh Chang',
    description:
      'Koh Chang is Trat’s large west-coast island: White Sand Beach, Klong Prao, and a car ferry from the mainland. November to February is the easy window.',
    lede:
      'Koh Chang is known for a west-coast hotel strip and a Trat car ferry. It fits a November to February week that is not Phuket, not a first-week add-on after Samui.',
    schema: 'TouristDestination',
    alternateName: 'เกาะช้าง',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Chang', href: '/koh-chang' },
    ],
    facts: [
      { label: 'Season', value: 'Easier November to February' },
      { label: 'Ferry', value: 'Center Point and other Trat piers; 80 to 150 THB' },
      { label: 'Stay', value: 'White Sand Beach north; Klong Prao mid-west' },
      { label: 'Songthaew', value: 'Agree 100 to 200 THB from the pier before you climb in' },
    ],
    chips: ['Trat', 'White Sand Beach', 'Car ferry'],
    photo: '/photos/koh-chang.jpg',
    geo: { lat: 12.1036, lon: 102.3518, containedIn: 'Eastern Thailand' },
    paragraphs: [
      'Koh Chang is the large Trat island, not a Gulf or Andaman stop. The public path is a flight or bus to Trat, then a car ferry from Center Point or a nearby pier. White Sand Beach is the north default, Klong Prao is quieter, and Lonely Beach is the south-west nightlife pocket. A 2026 songthaew from the pier is 100 to 200 THB if you agree first.',
      'Do not stack Chang with Phuket on a first trip. November to February is the useful window. Hills are steep, so rent a scooter only if you already ride. Than Mayom waterfall is an east-coast park day at about 200 THB.',
    ],
    sections: [
      {
        id: 'neighbourhoods',
        title: 'Beaches',
        bullets: [
          '**White Sand Beach:** First nights and groceries on the north strip.',
          '**Klong Prao:** Mid-west hotels on the same songthaew line.',
          '**Kai Bae:** A west-coast viewpoint if you already ride.',
          '**Lonely Beach:** The south-west nightlife pocket only if that evening is the trip.',
          '**East-coast coves:** Need a planned car, not a late songthaew.',
        ],
      },
      {
        id: 'get-there',
        title: 'Getting around',
        paragraphs: [
          'Ferries take cars. If you did not bring one, songthaews run the west coast by day and thin out after dark. A late Grab is not a Bangkok-density service. Book the first night near the sand you will actually use.',
        ],
      },
    ],
    portraits: [
      { title: 'Koh Kood', href: '/koh-kood', photo: '/photos/koh-kood.jpg' },
      { title: 'Chang and Kood hub', href: '/koh-chang-and-koh-kood', photo: '/photos/ferry-gulf.jpg' },
      { title: 'Pattaya', href: '/pattaya', photo: '/photos/pattaya.jpg' },
      { title: 'Khao Yai', href: '/khao-yai', photo: '/photos/khao-yai.jpg' },
    ],
    affiliates: [
      stay('Koh Chang stays', 'White Sand or Klong Prao', 'Book the west coast you will actually use. The pier songthaew is not a late-night plan.', stayLink('koh-chang'), '/photos/koh-chang.jpg'),
      klook('Trat boats', 'Ferries', 'If you self-transfer, name the pier. Center Point is not every operator.', klookTours('Koh Chang ferry'), '/photos/ferry-gulf.jpg'),
    ],
    faqs: [
      {
        q: 'Koh Chang or Koh Kood?',
        a: 'Chang if you want groceries, songthaews, and a west-coast strip. Kood if you want fewer roads and a booked transfer. They are not the same island and not a same-day hop.',
      },
      {
        q: 'Do you need a scooter?',
        a: 'Only if you already ride. The hills are steep and sandy after rain. Songthaews and a booked car cover White Sand to Klong Prao.',
      },
    ],
  },
  {
    path: '/koh-kood',
    title: 'Koh Kood',
    description:
      'Koh Kood is Trat’s quieter island: Klong Chao village, a waterfall walk, and hideaways such as Soneva Kiri. Boats from Laem Sok take 1 to 1.5 hours.',
    lede:
      'Koh Kood is known for slow west-coast sand and a Laem Sok boat, not a scooter loop. It fits a booked week, not a first-trip add-on after Chang.',
    schema: 'TouristDestination',
    alternateName: 'เกาะกูด',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Kood', href: '/koh-kood' },
    ],
    facts: [
      { label: 'Boat', value: 'Laem Sok; Boonsiri or Ko Kut Express; 1 to 1.5 hours' },
      { label: 'Ticket', value: '600 to 700 THB band one way in 2026' },
      { label: 'Village', value: 'Klong Chao for dinner options' },
      { label: 'Season', value: 'November to February is the easy sea' },
    ],
    chips: ['Trat', 'Klong Chao', 'Hideaways'],
    photo: '/photos/koh-kood.jpg',
    geo: { lat: 11.657, lon: 102.536, containedIn: 'Eastern Thailand' },
    paragraphs: [
      'Koh Kood is smaller and quieter than Chang. Boats leave Laem Sok, not Center Point. Read the operator: Boonsiri and Ko Kut Express use their own berths. A 2026 seat is often 600 to 700 THB and 1 to 1.5 hours. Last boats leave mid-afternoon. Miss one and you sleep on the mainland.',
      'Klong Chao is the village, the waterfall, and most dinner rooms. Ao Tapao and the south coves need a booked taxi at 300 to 700 THB. Soneva Kiri books the transfer with the room. Do not treat Kood as a Chang day trip.',
    ],
    sections: [
      {
        id: 'neighbourhoods',
        title: 'Bays',
        bullets: [
          '**Klong Chao:** Sleep here if you want to walk to food.',
          '**Booked cove:** Use it when the resort transfer is already on the voucher.',
          '**Bang Bao:** A south day if you already have a car on the island.',
        ],
      },
      {
        id: 'get-there',
        title: 'Getting around',
        paragraphs: [
          'Roads are fewer than Chang. Songthaews are not a Bangkok-density service. Agree the fare. A rented scooter after a late boat is how people start the week at a clinic.',
        ],
      },
    ],
    portraits: [
      { title: 'Soneva Kiri', href: '/resort-living/soneva-kiri', photo: '/photos/resort-soneva-kiri.jpg' },
      { title: 'Koh Chang', href: '/koh-chang', photo: '/photos/koh-chang.jpg' },
      { title: 'Chang and Kood', href: '/koh-chang-and-koh-kood', photo: '/photos/ferry-gulf.jpg' },
      { title: 'Resort living', href: '/interests/resort-living', photo: '/photos/resort.jpg' },
    ],
    affiliates: [
      stay('Koh Kood stays', 'Klong Chao or a hideaway', 'Search Koh Kood, not Bangkok. Confirm the boat on the voucher.', stayLink('koh-kood'), '/photos/koh-kood.jpg'),
      klook('Laem Sok boats', 'Ferries', 'Name Boonsiri or Ko Kut Express. Last seats leave mid-afternoon.', klookTours('Koh Kood ferry'), '/photos/ferry-gulf.jpg'),
    ],
    faqs: [
      {
        q: 'Can you day-trip Kood from Chang?',
        a: 'No. Different piers, different operators, and a 1 to 1.5 hour crossing. Book Kood as its own stay.',
      },
      {
        q: 'Where should you sleep?',
        a: 'Klong Chao if you want dinner without a taxi. A named hideaway if the transfer is already on the voucher.',
      },
    ],
  },
  {
    path: '/khao-yai',
    title: 'Khao Yai',
    description:
      'Khao Yai National Park is a 2.5 to 3.5 hour drive from Bangkok: 400 THB foreign park fee, Haew Suwat waterfall, and Pak Chong as the sleep town.',
    lede:
      'Khao Yai is known for a dawn park drive and a Pak Chong night market, not a beach. It fits a Bangkok weekend if you will hire a car and skip a 16:00 Sunday return.',
    schema: 'TouristDestination',
    alternateName: 'เขาใหญ่',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Khao Yai', href: '/khao-yai' },
    ],
    facts: [
      { label: 'From Bangkok', value: '2.5 to 3.5 hours on Mittraphap; worse on Sunday night' },
      { label: 'Park fee', value: 'About 400 THB foreign adult in 2026' },
      { label: 'Sleep', value: 'Pak Chong for markets; park-edge villas if you book a car' },
      { label: 'Dawn', value: 'Gates early; wildlife beats midday heat' },
    ],
    chips: ['National park', 'Pak Chong', 'Weekend drive'],
    photo: '/photos/khao-yai.jpg',
    geo: { lat: 14.439, lon: 101.372, containedIn: 'Isan edge' },
    paragraphs: [
      'Khao Yai is the large national park on the Bangkok-to-Isan edge. A foreign adult ticket is about 400 THB in 2026. Hire a car, because songthaews do not replace a park loop. Haew Suwat is the film-famous fall inside the ticket. Dawn wildlife beats a 13:00 arrival. Pak Chong is the sleep town with night-market gai yang at 60 to 120 THB.',
      'The drive is 2.5 to 3.5 hours. Sunday night back to Bangkok is the ugly window, so do not plan a 16:00 city dinner. Vineyard tasting rooms sit on the approach road if rain closed a trail. Night-safari vans book out on Saturday.',
    ],
    sections: [
      {
        id: 'neighbourhoods',
        title: 'Where to sleep',
        bullets: [
          '**Pak Chong:** Dinner, ATMs, and the night market after a park day.',
          '**Park-edge villas:** Useful if the car is already booked and you want a 06:00 gate.',
          '**Weekend rooms:** Often 1,000 THB and up in 2026.',
        ],
      },
      {
        id: 'get-there',
        title: 'Getting around',
        paragraphs: [
          'A hired car or a van with a driver is the useful move. Motorbikes on the park road after dark are a clinic plan. Bring a jacket for the night safari. 2026 seats sell out on Saturday.',
        ],
      },
    ],
    portraits: [
      { title: 'Isan food', href: '/thai-food/isan', photo: '/photos/dish-som-tum.jpg' },
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
      { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/cheow-lan.jpg' },
      { title: 'Family travel', href: '/interests/family-travel-with-kids', photo: '/photos/itineraries.jpg' },
    ],
    affiliates: [
      stay('Khao Yai stays', 'Pak Chong', 'Search Khao Yai or Pak Chong. Weekend rates jump. Book the car with the room.', hotelSearchLink('Khao Yai'), '/photos/khao-yai.jpg'),
      klook('Park vans', 'Tours', 'Dawn loops and night safari seats. Confirm whether the 400 THB fee is included.', klookTours('Khao Yai National Park'), '/photos/haew-suwat.jpg'),
    ],
    faqs: [
      {
        q: 'Is Khao Yai a day trip from Bangkok?',
        a: 'Only if you leave at dawn and accept a late return. Most people sleep in Pak Chong and use the second morning in the park.',
      },
      {
        q: 'Do you need a guide?',
        a: 'A driver who knows the gates is enough for Haew Suwat and a loop. Book a night-safari van separately. The 400 THB fee is often extra.',
      },
    ],
  },
  {
    path: '/thai-food/bangkok',
    title: 'Bangkok food guide',
    description:
      'Bangkok eating by rail: Thip Samai pad Thai, boat noodles at Victory Monument, Yaowarat after 18:00, Or Tor Kor fruit, and Jay Fai if you will wait.',
    lede:
      'Bangkok food is known for rail-fed stalls and a late Chinatown walk. It fits first-trip eaters who will pick one serious queue and one market, not three celebrity woks.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Bangkok', href: '/thai-food/bangkok' },
    ],
    facts: [
      { label: 'Street plates', value: '60 to 150 THB in 2026' },
      { label: 'Yaowarat', value: 'After 18:00; Monday stalls thin out' },
      { label: 'Jay Fai', value: 'Walk-in, Wed to Sat; 1,000 THB+ a head' },
      { label: 'Rail', value: 'BTS and MRT beat a dinner-hour taxi across the river' },
    ],
    chips: ['Street food', 'Yaowarat', 'Bib Gourmand'],
    photo: '/photos/thai-food-bangkok-street.jpg',
    geo: { lat: 13.746, lon: 100.535, containedIn: 'Bangkok' },
    paragraphs: [
      'Eat Bangkok by rail and by clock. Lunch is shophouses and boat-noodle alleys. Night is Yaowarat from MRT Wat Mangkon or Banthat Thong from MRT Sam Yan. A 2026 street plate is often 60 to 150 THB. Jay Fai on Maha Chai is the one-star exception that still cooks like a street wok and will take your evening.',
      'Do not stack Jay Fai, Chatuchak, and Texas Lane on the same calendar. One serious queue and one market is enough. For the stall map use [Bangkok street food](/thai-food/bangkok-street-food). For the gold-shop night use [Yaowarat](/thai-food/yaowarat-chinatown-food-walk).',
    ],
    sections: [
      {
        id: 'neighbourhoods',
        title: 'Neighbourhoods',
        bullets: [
          '**[Bang Rak](/thai-food/bang-rak-food):** Somtum Der at Sala Daeng, 11:00 to 23:00.',
          '**[Ari](/thai-food/ari-food):** Soi Ari shophouses off BTS Ari, often 60 to 150 THB.',
          '**[Thonglor and Soi 38](/thai-food/thonglor-and-soi-38-food):** night stalls from about 17:00.',
          '**[Banglamphu](/thai-food/banglamphu-food):** Roti Mataba, closed Monday.',
          '**[Nang Loeng](/thai-food/nang-loeng-market):** curry rice before noon, often 40 to 80 THB.',
          '**[Victory Monument](/thai-food/victory-monument-food):** boat noodles at 15 to 20 THB.',
          '**[Pratunam](/thai-food/pratunam-food):** Go-Ang chicken rice at 65 THB.',
          '**[Ekkamai](/thai-food/ekkamai-food)** and **[Sampheng](/thai-food/sampheng-lane-food)** if you want Soi 63 or the daytime Chinatown lane.',
        ],
      },
    ],
    portraits: [
      { title: 'Street food', href: '/thai-food/bangkok-street-food', photo: '/photos/thai-food-bangkok-street.jpg' },
      { title: 'Yaowarat', href: '/thai-food/yaowarat-chinatown-food-walk', photo: '/photos/yaowarat.jpg' },
      { title: 'Bib Gourmand', href: '/thai-food/bangkok-bib-gourmand', photo: '/photos/thai-food-bib.jpg' },
      { title: 'Bangkok city', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    ],
    affiliates: [
      stay('Rattanakosin stays', 'Palace and Maha Chai', 'Sleep near the wats if Thip Samai and Jay Fai are night one.', stayAreaLink('rattanakosin'), '/photos/old-city.jpg'),
      klook('Food walks', 'Tours', 'Use a guide only if the group will not split. The MRT already solves Yaowarat.', klookTours('Bangkok food tour'), '/photos/yaowarat.jpg'),
    ],
    faqs: [
      {
        q: 'Which Bangkok food night should you book first?',
        a: 'Yaowarat after 18:00 from Wat Mangkon, or Banthat Thong if you already sleep near Sam Yan. Do not do both.',
      },
      {
        q: 'Do you need a reservation?',
        a: 'Almost never for stalls. Jay Fai is walk-in only, Wednesday to Saturday. Queue early or skip it.',
      },
    ],
  },
  {
    path: '/thai-food/chiang-mai',
    title: 'Chiang Mai food guide',
    description:
      'Chiang Mai eating on a lunch clock: khao soi at 50 to 80 THB, sai ua at Warorot, nam prik ong at Huen Phen, and Sunday walking-street snacks.',
    lede:
      'Chiang Mai food is known for khao soi at lunch, not a 21:00 coconut curry. It fits planners who will walk the moat at 07:00 and eat before 15:00.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Chiang Mai', href: '/thai-food/chiang-mai' },
    ],
    facts: [
      { label: 'Khao soi', value: '50 to 80 THB; most rooms close by 15:00' },
      { label: 'Bib', value: '18 Bib Gourmand in Chiang Mai in 2026' },
      { label: 'Markets', value: 'Warorot in the morning; Sunday walking street after 16:00' },
      { label: 'Grab', value: 'Moat to Nimman often 80 to 120 THB' },
    ],
    chips: ['Khao soi', 'Lanna', 'Warorot'],
    photo: '/photos/night-market-cm.jpg',
    geo: { lat: 18.788, lon: 98.985, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Chiang Mai cooking is a lunch city. Khao soi rooms open late morning and empty by 15:00. A 2026 bowl is 50 to 80 THB. Warorot (Kad Luang) is the morning market for sai ua and fruit. Huen Phen still does a Lanna table at lunch. Sunday walking street is snacks on Ratchadamnoen, not a second dinner plan after a late arrival.',
      'Nimman is pour-over at 80 to 150 THB, not khao soi. Maya basement is air-con. For the bowl circuit use [khao soi and markets](/thai-food/chiang-mai-khao-soi-and-markets). For the broader north use [Northern Lanna](/thai-food/northern-lanna).',
    ],
    portraits: [
      { title: 'Khao soi circuit', href: '/thai-food/chiang-mai-khao-soi-and-markets', photo: '/photos/night-market-cm.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
    ],
    affiliates: [
      stay('Old City stays', 'Walk to lunch', 'Sleep inside the moat if khao soi and the Sunday street are the point.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      klook('Cooking class', 'Tours', 'A half-day wok if you want the curry paste explained. Morning slots beat the heat.', klookTours('Chiang Mai cooking class'), '/photos/thai-food-lanna.jpg'),
    ],
    faqs: [
      {
        q: 'When should you eat khao soi?',
        a: 'Lunch. Most named rooms close by 15:00. A 21:00 coconut curry on a tourist menu is a different dish.',
      },
      {
        q: 'Old City or Nimman for food?',
        a: 'Old City and Warorot for Lanna plates. Nimman for coffee. Do not hunt khao soi in Maya.',
      },
    ],
  },
  {
    path: '/thai-food/phuket',
    title: 'Phuket food guide',
    description:
      'Phuket Town eating: Hokkien mee, moo hong, oh aew, and Baba-Nyonya mansion rooms. Beach grills are a different map and a different price.',
    lede:
      'Phuket food is known for Hokkien and Baba-Nyonya in Old Town. It fits a weekday lunch inland, not a Patong beach grill after a boat day.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Phuket', href: '/thai-food/phuket' },
    ],
    facts: [
      { label: 'Old Town', value: 'Thalang and Dibuk for lunch; Sunday walking street' },
      { label: 'Bib', value: '19 Bib Gourmand in Phuket in 2026' },
      { label: 'Moo hong', value: '120 to 180 THB in a shophouse' },
      { label: 'Seafood', value: 'Ask the Rawai weight price before the grill' },
    ],
    chips: ['Old Town', 'Hokkien', 'Baba-Nyonya'],
    photo: '/photos/thai-food-southern.jpg',
    geo: { lat: 7.8804, lon: 98.3923, containedIn: 'Phuket' },
    paragraphs: [
      'Eat Phuket in Town. Hokkien mee, moo hong, and oh aew live on Thalang, Dibuk, and Krabi Roads. A 2026 noodle plate is 60 to 90 THB. Mansion rooms such as The Charm take a phone booking for a Baba table. Sunday walking street on Thalang is snacks, not a full dinner.',
      'Patong and Rawai grills are a different bill. Confirm seafood by weight. Named dish pages start at Kopitiam mee Hokkien, Raya moo hong, and Tu Kab Khao oh aew. For the shophouse map use [Phuket Old Town](/thai-food/phuket-old-town-hokkien-and-peranakan-food). For sour curry and the wider south use [South and Baba-Nyonya](/thai-food/southern-and-baba-nyonya).',
    ],
    portraits: [
      { title: 'Old Town food', href: '/thai-food/phuket-old-town-hokkien-and-peranakan-food', photo: '/photos/phuket.jpg' },
      { title: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/thai-food-southern.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/kata-and-karon.jpg' },
      { title: 'Krabi food', href: '/thai-food/krabi', photo: '/photos/krabi.jpg' },
    ],
    affiliates: [
      stay('Phuket Town stays', 'Walk to lunch', 'Sleep inland if Hokkien is the point. Sleep west if the boat is tomorrow.', stayLink('phuket'), '/photos/phuket.jpg'),
      klook('Old Town walks', 'Tours', 'Useful only if you want a guide through the mansions. Thalang is walkable without one.', klookTours('Phuket Old Town food'), '/photos/thai-food-southern.jpg'),
    ],
    faqs: [
      {
        q: 'Should you eat on the beach?',
        a: 'For a sunset drink, yes. For Hokkien mee and moo hong, no. Those plates live in Town at lunch prices.',
      },
      {
        q: 'How do you avoid a seafood surprise?',
        a: 'Ask the weight price in THB before the grill. Walk away from a shrug. 2026 fair plates are often 200 to 400 THB, not a silent 2,000.',
      },
    ],
  },
  {
    path: '/thai-food/koh-samui',
    title: 'Koh Samui and Gulf food guide',
    description:
      'Samui eating: Chaweng walking-street grills, Friday Fisherman Village, Lamai night market, and a few southern plates. Price the fish first.',
    lede:
      'Koh Samui food is known for Chaweng night grills and a Friday Bophut street. It fits island nights after a USM landing, not a Bangkok stall crawl.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Koh Samui and Gulf', href: '/thai-food/koh-samui' },
    ],
    facts: [
      { label: 'Chaweng', value: 'Walking-street grills 200 to 400 THB if you price the fish' },
      { label: 'Bophut', value: 'Friday Fisherman Village from 17:00' },
      { label: 'West coast', value: 'Shops thin after 22:00; Chaweng is the late strip' },
      { label: 'USM', value: 'Eat after the slow bag belt, not in a tight hop' },
    ],
    chips: ['Chaweng', 'Bophut', 'Lamai'],
    photo: '/photos/koh-samui.jpg',
    geo: { lat: 9.512, lon: 100.013, containedIn: 'Koh Samui' },
    paragraphs: [
      'Samui is an island menu. Chaweng walking street is the dinner default. Price the fish before it hits the coals. 200 to 400 THB a plate is common in 2026. Friday Fisherman Village in Bophut is useful if you already sleep there; the car from Chaweng is 20 to 40 minutes. Lamai’s night market is smaller and closer if that is your sand.',
      'West-coast 7-Elevens thin after 22:00. Chaweng is the 24-hour strip. Ang Thong boats include a boxed lunch and a 300 THB park fee. Named dish pages cover Chaweng grills, Bang Po gaeng som, and Friday Bophut. For the island stay map use [Koh Samui](/koh-samui). For sour curry history use [South and Baba-Nyonya](/thai-food/southern-and-baba-nyonya).',
    ],
    portraits: [
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Chaweng', href: '/koh-samui/chaweng', photo: '/photos/chaweng.jpg' },
      { title: 'Lamai', href: '/koh-samui/lamai', photo: '/photos/lamai.jpg' },
      { title: 'Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
    ],
    affiliates: [
      stay('Chaweng stays', 'Walk to dinner', 'Sleep on the strip if the walking street is night one. Bophut if Friday is the plan.', stayAreaLink('chaweng'), '/photos/chaweng.jpg'),
      klook('Island food and boats', 'Tours', 'A cooking class or an Ang Thong seat. Confirm the 300 THB park fee.', klookTours('Koh Samui food tour'), '/photos/ang-thong.jpg'),
    ],
    faqs: [
      {
        q: 'Where should you eat on night one?',
        a: 'Chaweng if that is your hotel. Bophut on Friday if you already sleep on that bay. Do not cross the island twice for a grill.',
      },
      {
        q: 'Is beach seafood a trap?',
        a: 'It is a priced-by-weight grill. Ask in THB first. A silent nod is how a squid becomes 2,000 THB.',
      },
    ],
  },
  {
    path: '/thai-food/krabi',
    title: 'Krabi and Andaman food guide',
    description:
      'Krabi eating: Ao Nang walking-street seafood, kanom jeen nam ya poo at the town morning market, and Railay plates that paid a longtail surcharge.',
    lede:
      'Krabi food is known for a town lunch clock and Ao Nang night grills. It fits Andaman evenings after Railay, not a Chiang Mai khao soi hunt.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Krabi and Andaman', href: '/thai-food/krabi' },
    ],
    facts: [
      { label: 'Town lunch', value: 'Kanom jeen 40 to 70 THB; pots empty by 13:00' },
      { label: 'Ao Nang', value: 'Night grills 200 to 400 THB if you price the fish' },
      { label: 'Railay', value: '150 to 300 THB; every crate came by longtail' },
      { label: 'Park days', value: 'Hong Island box lunch; 300 THB park fee extra' },
    ],
    chips: ['Ao Nang', 'Krabi Town', 'Railay'],
    photo: '/photos/krabi.jpg',
    geo: { lat: 8.0863, lon: 98.9063, containedIn: 'Krabi' },
    paragraphs: [
      'Eat lunch in Krabi Town if you can. Kanom jeen nam ya poo at the morning market is 40 to 70 THB and gone by 13:00. Ao Nang is the night grill strip. Price seafood by weight. Railay dinners cost more because every crate crossed by longtail at 100 THB a person.',
      'Khao soi is not a Krabi dish. If a beach menu lists it, order gaeng som instead. Hong Island boats include a box and a 300 THB park fee. Named dish pages cover town kanom jeen, Ao Nang pla pao, and Railay surcharge pots. For the stay map use [Krabi](/krabi). For Railay logistics use [Railay and Phra Nang](/attractions/railay-beach-and-phra-nang-cave).',
    ],
    portraits: [
      { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Railay', href: '/attractions/railay-beach-and-phra-nang-cave', photo: '/photos/railay.jpg' },
      { title: 'Phi Phi', href: '/koh-phi-phi', photo: '/photos/phi-phi.jpg' },
      { title: 'Phuket food', href: '/thai-food/phuket', photo: '/photos/thai-food-southern.jpg' },
    ],
    affiliates: [
      stay('Ao Nang stays', 'Walk the grills', 'Sleep in Ao Nang if dinner is the walking street. Sleep on Railay if the climb is the whole trip.', stayAreaLink('ao-nang'), '/photos/krabi.jpg'),
      klook('Food and longtails', 'Tours', 'A town food walk or a Hong Island seat. Confirm the 300 THB park fee.', klookTours('Krabi food tour'), '/photos/railay.jpg'),
    ],
    faqs: [
      {
        q: 'Town or Ao Nang for lunch?',
        a: 'Town for kanom jeen and khao man gai at lunch prices. Ao Nang for the night grill. Railay if you already paid the longtail.',
      },
      {
        q: 'Should you eat khao soi in Krabi?',
        a: 'No. Save it for a Chiang Mai lunch clock. Order gaeng som or nam ya poo here.',
      },
    ],
  },
  {
    path: '/thai-food/isan',
    title: 'Isan and regional markets food guide',
    description:
      'Isan plates for a first trip: som tum, larb, gai yang, and sticky rice. Eat them in Bangkok rooms or in Pak Chong and Ubon if that is where you actually are.',
    lede:
      'Isan food is known for heat, fermented fish, and grilled chicken with sticky rice. It fits eaters who will order som tum Thai first, then try poo plara on purpose.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Isan and regional markets', href: '/thai-food/isan' },
    ],
    facts: [
      { label: 'Som tum', value: 'Start Thai; poo plara is the fermented-fish step' },
      { label: 'Gai yang', value: '80 to 150 THB with sticky rice and jaew' },
      { label: 'Khao niew', value: '10 to 20 THB a basket; it is the utensil' },
      { label: 'Where', value: 'Bangkok Isan rooms, or Pak Chong and Ubon markets' },
    ],
    chips: ['Som tum', 'Larb', 'Gai yang'],
    photo: '/photos/chatuchak.jpg',
    geo: { lat: 15.228, lon: 104.856, containedIn: 'Isan' },
    paragraphs: [
      'Isan cooking is papaya salad, minced-meat larb, grilled chicken, and sticky rice. The heat is not a Bangkok tom yum. Order som tum Thai first. Poo plara adds crab and fermented fish. A 2026 plate in a Bangkok Isan room is often 60 to 140 THB. Khao niew at 10 to 22 THB is the utensil, not a side you skip.',
      'You do not have to fly to Ubon to eat this well. Named Bangkok rooms do the work. If you are actually on the plateau, use the [Khon Kaen](/thai-food/khon-kaen), [Udon Thani](/thai-food/udon-thani), and [Nong Khai](/thai-food/nong-khai) dish maps. Pak Chong after Khao Yai is gai yang at 60 to 120 THB.',
    ],
    portraits: [
      { title: 'Khao Yai', href: '/khao-yai', photo: '/photos/khao-yai.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Dishes to order', href: '/thai-food/thai-dishes-to-order-first-trip', photo: '/photos/thai-food.jpg' },
      { title: 'Bangkok food', href: '/thai-food/bangkok', photo: '/photos/thai-food-bangkok-street.jpg' },
    ],
    affiliates: [
      stay('Bangkok stays for Isan rooms', 'Sukhumvit or Ratchathewi', 'Sleep near the BTS if the som tum room is in town, not in Ubon.', stayLink('bangkok'), '/photos/sukhumvit.jpg'),
      klook('Isan food walks', 'Tours', 'Useful in Ubon or Khon Kaen if you are actually there. In Bangkok the MRT is enough.', klookTours('Isan food Bangkok'), '/photos/chatuchak.jpg'),
    ],
    faqs: [
      {
        q: 'How hot is som tum?',
        a: 'Thai is already hot. Poo plara is hotter and funkier. Say thai less spicy if you want to finish the plate. Western spicy is still a chilli count.',
      },
      {
        q: 'Do you need to go to Isan to eat this?',
        a: 'No. Bangkok Isan rooms are the first-trip move. Use the Khon Kaen, Udon, and Nong Khai dish pages when the plateau is already the trip.',
      },
    ],
  },
  {
    path: '/thai-food/chiang-rai',
    title: 'Chiang Rai food guide',
    description:
      'Chiang Rai eating: khao soi at Phor Jai, night-bazaar sai ua, nam prik ong, and nam ngiao at lunch. Temple vans are a different ticket.',
    lede:
      'Chiang Rai food is known for a town khao soi lunch and night-bazaar sausage. It fits a clock-tower night after the White Temple, not a Chiang Mai coconut curry at 21:00.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Chiang Rai', href: '/thai-food/chiang-rai' },
    ],
    facts: [
      { label: 'Khao soi', value: '50 to 80 THB at Phor Jai; lunch clock' },
      { label: 'Night bazaar', value: 'Sai ua 20 to 40 THB after 18:00' },
      { label: 'Temple day', value: 'Eat in town. White Temple canteens are a skip' },
      { label: 'From CM', value: 'Green Bus about 3.5 hours' },
    ],
    chips: ['Khao soi', 'Night bazaar', 'Lanna'],
    photo: '/photos/chiang-rai.jpg',
    geo: { lat: 19.907, lon: 99.831, containedIn: 'Chiang Rai' },
    paragraphs: [
      'Eat Chiang Rai in town. Khao Soi Phor Jai on Banphaprakan is the named lunch bowl at 50 to 80 THB. Night bazaar grills sell sai ua after 18:00. Nam ngiao is the sharper tomato noodle if coconut already filled yesterday.',
      'The White Temple is a southbound hop, not a food plan. For the city stay map use [Chiang Rai](/chiang-rai). For the wider north use [Northern Lanna](/thai-food/northern-lanna).',
    ],
    portraits: [
      { title: 'Chiang Rai', href: '/chiang-rai', photo: '/photos/blue-temple.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Chiang Mai food', href: '/thai-food/chiang-mai', photo: '/photos/night-market-cm.jpg' },
      { title: 'White Temple day', href: '/chiang-rai/white-temple-day', photo: '/photos/baan-dam.jpg' },
    ],
    affiliates: [
      stay('Chiang Rai stays', 'Town night bazaar', 'Sleep in town if dinner is the bazaar, not a temple van.', stayLink('chiang-rai'), '/photos/northern.jpg'),
      klook('Town food walks', 'Tours', 'Useful only if you already sleep in town. Temple vans are a different ticket.', klookTours('Chiang Rai food tour'), '/photos/chiang-mai.jpg'),
    ],
    faqs: [
      { q: 'Khao soi here or in Chiang Mai?', a: 'Both. Eat the town bowl you are standing in. Do not skip lunch for a temple snack.' },
      { q: 'Night bazaar or sit-down Lanna?', a: 'Bazaar for sausage. Sit-down for nam prik ong and larb kua.' },
    ],
  },
  {
    path: '/thai-food/khon-kaen',
    title: 'Khon Kaen food guide',
    description:
      'Khon Kaen eating: gai yang at Kai Yang Wanna in Khao Suan Kwang, plus larb, tam mua, sai krok, and jim jum.',
    lede:
      'Khon Kaen food is known for Khao Suan Kwang grilled chicken on Mittraphap. It fits a highway lunch north of town, not a Bangkok Isan room.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Khon Kaen', href: '/thai-food/khon-kaen' },
    ],
    facts: [
      { label: 'Gai yang', value: 'Wanna since 1973; 120 to 220 THB a bird' },
      { label: 'Clock', value: 'Morning to mid-afternoon; birds sell out' },
      { label: 'Drive', value: 'About 40 km north of Khon Kaen city' },
      { label: 'Cash', value: 'Wanna is cash only' },
    ],
    chips: ['Gai yang', 'Larb', 'Tam mua'],
    photo: '/photos/khao-yai.jpg',
    geo: { lat: 16.4419, lon: 102.836, containedIn: 'Isan' },
    paragraphs: [
      'Drive north for the bird. Kai Yang Wanna at 271 Mu 11 Mittraphap, Khao Suan Kwang, has grilled since 1973. A 2026 bird is 120 to 220 THB. Larb, som tum, and nam tok sit on the same table. Cash only.',
      'City night markets do sai krok and jim jum after the highway lunch. For the regional map use [Isan food](/thai-food/isan). For Udon night stalls use [Udon Thani](/thai-food/udon-thani).',
    ],
    portraits: [
      { title: 'Isan food', href: '/thai-food/isan', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Udon Thani food', href: '/thai-food/udon-thani', photo: '/photos/pak-chong.jpg' },
      { title: 'Nong Khai food', href: '/thai-food/nong-khai', photo: '/photos/haew-suwat.jpg' },
      { title: 'Khao Yai', href: '/khao-yai', photo: '/photos/khao-sok.jpg' },
    ],
    affiliates: [
      stay('Bangkok stays for Isan rooms', 'Or fly into Khon Kaen', 'Sleep in Khon Kaen if the grill is the trip.', stayLink('bangkok'), '/photos/sukhumvit.jpg'),
      klook('Isan food walks', 'Tours', 'Useful if you are actually in Khon Kaen. In Bangkok the MRT is enough.', klookTours('Isan food Khon Kaen'), '/photos/chatuchak.jpg'),
    ],
    faqs: [
      { q: 'Do you need the highway drive?', a: 'Yes if Khao Suan Kwang is why you came. City rooms still cook chicken. They are not this bird.' },
      { q: 'Wanna or Rabeab?', a: 'Wanna is the 1973 room. Rabeab at 99 Mittraphap is the other named grill.' },
    ],
  },
  {
    path: '/thai-food/udon-thani',
    title: 'Udon Thani food guide',
    description:
      'Udon Thani eating: UD Town night grills for som tum, sai krok, and city gai yang at 40 to 120 THB.',
    lede:
      'Udon Thani food is known for the UD Town night yard. It fits a city evening, not a same-night Mekong wrap in Nong Khai.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Udon Thani', href: '/thai-food/udon-thani' },
    ],
    facts: [
      { label: 'UD Town', value: '17:00 to 22:30; plates 40 to 120 THB' },
      { label: 'Sai krok', value: '30 to 60 THB a set' },
      { label: 'Gai yang', value: 'City bird; highway style is north of Khon Kaen' },
      { label: 'Mekong', value: 'Nong Khai is a separate day' },
    ],
    chips: ['UD Town', 'Sai krok', 'Som tum'],
    photo: '/photos/pak-chong.jpg',
    geo: { lat: 17.415, lon: 102.787, containedIn: 'Isan' },
    paragraphs: [
      'UD Town on Thong Yai is the easy night map. Som tum Thai first. Sai krok with ginger. City gai yang if you are not driving to Khao Suan Kwang.',
      'Keep Nong Khai for nam nuang. For the highway bird use [Khon Kaen](/thai-food/khon-kaen). For the regional map use [Isan food](/thai-food/isan).',
    ],
    portraits: [
      { title: 'Isan food', href: '/thai-food/isan', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Khon Kaen food', href: '/thai-food/khon-kaen', photo: '/photos/khao-yai.jpg' },
      { title: 'Nong Khai food', href: '/thai-food/nong-khai', photo: '/photos/haew-suwat.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/chatuchak.jpg' },
    ],
    affiliates: [
      stay('Bangkok stays for Isan rooms', 'Or fly into Udon', 'Sleep in Udon if UD Town is the trip.', stayLink('bangkok'), '/photos/sukhumvit.jpg'),
      klook('Isan food walks', 'Tours', 'Useful if you are actually in Udon. In Bangkok the MRT is enough.', klookTours('Isan food Udon Thani'), '/photos/chatuchak.jpg'),
    ],
    faqs: [
      { q: 'UD Town or a hotel buffet?', a: 'UD Town. The buffet is a different dinner.' },
      { q: 'Same night as Nong Khai?', a: 'No. Keep the Mekong wrap for its own day.' },
    ],
  },
  {
    path: '/thai-food/nong-khai',
    title: 'Nong Khai food guide',
    description:
      'Nong Khai eating: nam nuang at Daeng Namnuang, Mekong grilled fish, and Saturday walking-street snacks.',
    lede:
      'Nong Khai food is known for nam nuang wraps on Meechai. It fits a Mekong day, not a same-night UD Town crawl.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Nong Khai', href: '/thai-food/nong-khai' },
    ],
    facts: [
      { label: 'Nam nuang', value: 'Daeng Namnuang, 689/1 Meechai; 120 to 220 THB' },
      { label: 'River fish', value: '200 to 400 THB if you price it' },
      { label: 'Walking street', value: 'Saturday from 16:00; snacks 30 to 80 THB' },
      { label: 'From Udon', value: 'A separate Mekong day' },
    ],
    chips: ['Nam nuang', 'Mekong', 'Walking street'],
    photo: '/photos/haew-suwat.jpg',
    geo: { lat: 17.878, lon: 102.742, containedIn: 'Isan' },
    paragraphs: [
      'Daeng Namnuang at 689/1 Meechai is the named wrap table at 120 to 220 THB a set. Rimkhong rooms grill river fish if you ask the weight price. Saturday walking street is snacks, not a substitute for the wrap.',
      'Udon is UD Town. Khon Kaen is the highway bird. Use those pages if that is where you actually are.',
    ],
    portraits: [
      { title: 'Isan food', href: '/thai-food/isan', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Udon Thani food', href: '/thai-food/udon-thani', photo: '/photos/pak-chong.jpg' },
      { title: 'Khon Kaen food', href: '/thai-food/khon-kaen', photo: '/photos/khao-yai.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/chatuchak.jpg' },
    ],
    affiliates: [
      stay('Bangkok stays for Isan rooms', 'Or sleep on the Mekong', 'Sleep in Nong Khai if the wrap and the river are the trip.', stayLink('bangkok'), '/photos/sukhumvit.jpg'),
      klook('Isan food walks', 'Tours', 'Useful on the Mekong if you are actually there.', klookTours('Isan food Nong Khai'), '/photos/chatuchak.jpg'),
    ],
    faqs: [
      { q: 'Nam nuang or sai krok first?', a: 'Nam nuang. Sai krok is a walking-street snack.' },
      { q: 'From Udon the same evening?', a: 'Only if you already dropped the UD Town night. They are different dinners.' },
    ],
  },
  {
    path: '/thai-food/ayutthaya',
    title: 'Ayutthaya food guide',
    description:
      'Ayutthaya eating: Pa Lek boat noodles, roti sai mai opposite the hospital, and river prawns at Phae Krung Kao.',
    lede:
      'Ayutthaya food is known for 20 THB boat noodle cups and candy-floss roti. It fits a ruin day from Bangkok, or a river prawn night if you overnight.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Ayutthaya', href: '/thai-food/ayutthaya' },
    ],
    facts: [
      { label: 'Boat noodles', value: 'Pa Lek, about 20 THB a cup' },
      { label: 'Roti sai mai', value: 'Abeedeen, 05:30 to 19:00, 20 to 40 THB' },
      { label: 'Prawns', value: 'Phae Krung Kao; cash; 400 to 900 THB by size' },
      { label: 'Market', value: 'Chao Phrom; Monday rest' },
    ],
    chips: ['Boat noodles', 'Roti sai mai', 'River prawns'],
    photo: '/photos/ayutthaya.jpg',
    geo: { lat: 14.353, lon: 100.565, containedIn: 'Ayutthaya' },
    paragraphs: [
      'Pa Lek opposite Wat Mahathat sells 20 THB cups. Order five a head. Roti Sai Mai Abeedeen at 32/1 Mu 4 U Thong, opposite the hospital, opens 05:30. Phae Krung Kao at 4/1 U Thong grills river prawns. Cash only.',
      'Keep the last train in mind if this is a Bangkok day. For tickets and bikes use [Ayutthaya](/ayutthaya).',
    ],
    portraits: [
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/wat-mahathat-ayu.jpg' },
      { title: 'Sukhothai food', href: '/thai-food/sukhothai', photo: '/photos/sukhothai.jpg' },
      { title: 'Bangkok food', href: '/thai-food/bangkok', photo: '/photos/thai-food-bangkok-street.jpg' },
      { title: 'From Bangkok', href: '/ayutthaya/from-bangkok', photo: '/photos/wat-phra-si-sanphet.jpg' },
    ],
    affiliates: [
      stay('Ayutthaya stays', 'Only if you overnight', 'Park-side guesthouse, not a highway box.', stayLink('ayutthaya'), '/photos/kanchanaburi.jpg'),
      klook('Temple tickets and bikes', 'Tours', 'A bicycle is quieter than a combo van. The noodle shop still takes cash.', klookTours('Ayutthaya food tour'), '/photos/bang-pa-in.jpg'),
    ],
    faqs: [
      { q: 'Cups or prawns if you have one meal?', a: 'Cups if you are day-tripping. Prawns if you overnight and want a sit-down hour.' },
      { q: 'Monday market?', a: 'Chao Phrom rests Monday. Pa Lek and the roti stall still work.' },
    ],
  },
  {
    path: '/thai-food/hua-hin',
    title: 'Hua Hin food guide',
    description:
      'Hua Hin eating: Soi 72 night market, Naresdamri grilled fish, and Cicada snacks Friday to Sunday toward Khao Takiab.',
    lede:
      'Hua Hin food is known for the Soi 72 night market after the train. It fits a town dinner, or a Khao Takiab grill if you already sleep south.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Hua Hin', href: '/thai-food/hua-hin' },
    ],
    facts: [
      { label: 'Night market', value: 'Soi 72, 17:00 to 23:00, 50 to 120 THB' },
      { label: 'Fish', value: 'Naresdamri rooms; price by weight' },
      { label: 'Cicada', value: 'Friday to Sunday, 16:00 to 23:00' },
      { label: 'Train', value: 'Special Express 43 is the useful morning set' },
    ],
    chips: ['Soi 72', 'Seafood', 'Cicada'],
    photo: '/photos/hua-hin.jpg',
    geo: { lat: 12.57, lon: 99.958, containedIn: 'Hua Hin' },
    paragraphs: [
      'Soi 72 is the every-night grill if you sleep in town. Plates 50 to 120 THB. Naresdamri rooms do sit-down fish if you ask the weight price. Cicada is Friday to Sunday toward Khao Takiab, snacks not a whole dinner.',
      'For the stay split use [Hua Hin](/hua-hin). Pattaya is a different gulf. Do not treat them as the same weekend.',
    ],
    portraits: [
      { title: 'Hua Hin', href: '/hua-hin', photo: '/photos/sam-roi-yot.jpg' },
      { title: 'Pattaya food', href: '/thai-food/pattaya', photo: '/photos/pattaya.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Hua Hin stays', href: '/hua-hin/where-to-stay', photo: '/photos/jomtien.jpg' },
    ],
    affiliates: [
      stay('Hua Hin stays', 'Town or Khao Takiab', 'Sleep in town if Soi 72 is dinner.', stayLink('hua-hin'), '/photos/khao-lak.jpg'),
      klook('Hua Hin food', 'Tours', 'The night market is walkable. Book a tour only if the group will not split.', klookTours('Hua Hin night market'), '/photos/nang-thong.jpg'),
    ],
    faqs: [
      { q: 'Soi 72 or Cicada?', a: 'Soi 72 every night in town. Cicada Friday to Sunday if you already sleep south.' },
      { q: 'Train night one?', a: 'Yes if you sleep in town. Khao Takiab needs a Grab.' },
    ],
  },
  {
    path: '/thai-food/hat-yai',
    title: 'Hat Yai food guide',
    description:
      'Hat Yai eating: turmeric fried chicken at Kaitod MEENA, morning dim sum at Gookchai, and southern sour curry in Khuan Lang.',
    lede:
      'Hat Yai food is known for garlic fried chicken in front of Kim Yong Market. It fits a rail-city lunch, not a beach hop.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Hat Yai', href: '/thai-food/hat-yai' },
    ],
    facts: [
      { label: 'Fried chicken', value: 'MEENA, 10:30 to 19:00, 20 to 70 THB a piece' },
      { label: 'Dim sum', value: 'Gookchai, 06:00 to 13:00, 40 to 90 THB' },
      { label: 'Sour curry', value: 'Suan Chuen Sook, 10:30 to 21:00' },
      { label: 'Airport', value: 'HDY; this is a food city, not a sand stop' },
    ],
    chips: ['Fried chicken', 'Dim sum', 'Gaeng som'],
    photo: '/photos/koh-lipe.jpg',
    geo: { lat: 7.008, lon: 100.477, containedIn: 'Songkhla' },
    paragraphs: [
      'Kaitod MEENA on Niphat Uthit 3, in front of Kim Yong, fries turmeric chicken at 20 to 70 THB a piece from 10:30 to 19:00. Gookchai dim sum at 82 Thung Sao 1 is the morning cart, closed by 13:00. Suan Chuen Sook in Khuan Lang is the southern sour pot.',
      'This is not Phuket Town and not a beach. For Baba plates use [Phuket food](/thai-food/phuket). For the wider south use [South and Baba-Nyonya](/thai-food/southern-and-baba-nyonya).',
    ],
    portraits: [
      { title: 'South and Baba-Nyonya', href: '/thai-food/southern-and-baba-nyonya', photo: '/photos/thai-food-southern.jpg' },
      { title: 'Phuket food', href: '/thai-food/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Koh Lipe', href: '/koh-lipe', photo: '/photos/ferry-gulf.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg' },
    ],
    affiliates: [
      stay('Phuket stays if you fly on', 'Hat Yai is a food city', 'Sleep in Hat Yai if fried chicken is the trip.', stayLink('phuket'), '/photos/kata-and-karon.jpg'),
      klook('South Thailand food', 'Tours', 'Hat Yai is a rail and food city. Island boats are a different ticket.', klookTours('Hat Yai food'), '/photos/rawai-and-nai-harn.jpg'),
    ],
    faqs: [
      { q: 'Kim Yong or Khuan Lang first?', a: 'Kim Yong for the fried bird. Khuan Lang if you want a sit-down sour curry.' },
      { q: 'Is this a beach stop?', a: 'No. Eat, then move. Lipe and Phuket are different maps.' },
    ],
  },
  {
    path: '/thai-food/sukhothai',
    title: 'Sukhothai food guide',
    description:
      'Sukhothai eating: kuay tiew Sukhothai after the dawn bicycle, morning kanom jeen, and park-gate jok.',
    lede:
      'Sukhothai food is known for pork-lime-peanut noodles in Old Town. It fits lunch after the park bicycle, not a Bangkok day trip.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Sukhothai', href: '/thai-food/sukhothai' },
    ],
    facts: [
      { label: 'Noodles', value: '40 to 70 THB; pork, lime, peanut, bean' },
      { label: 'Clock', value: 'Lunch rooms 08:00 to 15:00' },
      { label: 'Park', value: 'Inner zone 200 THB; bicycle at 06:30' },
      { label: 'Night', value: 'Old town dining thins after 21:00' },
    ],
    chips: ['Sukhothai noodles', 'Kanom jeen', 'Old town'],
    photo: '/photos/sukhothai.jpg',
    geo: { lat: 17.017, lon: 99.703, containedIn: 'Sukhothai' },
    paragraphs: [
      'Old Sukhothai noodle rooms on Charotwithithong sell the namesake bowl at 40 to 70 THB. It is not boat noodles and not khao soi. Morning kanom jeen and park-gate jok match the 06:30 bicycle.',
      'New town has more rooms and a duller dawn. For tickets use [Sukhothai](/sukhothai). For Ayutthaya cups use [Ayutthaya food](/thai-food/ayutthaya).',
    ],
    portraits: [
      { title: 'Sukhothai', href: '/sukhothai', photo: '/photos/sukhothai-mahathat.jpg' },
      { title: 'Historical park', href: '/sukhothai/historical-park', photo: '/photos/wat-sa-si.jpg' },
      { title: 'Ayutthaya food', href: '/thai-food/ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { title: 'Northern Lanna', href: '/thai-food/northern-lanna', photo: '/photos/thai-food-lanna.jpg' },
    ],
    affiliates: [
      stay('Sukhothai stays', 'Old town first', 'Sleep in Muang Kao if this bowl is lunch after the dawn bicycle.', stayLink('sukhothai'), '/photos/sukhothai-lake.jpg'),
      klook('Park and food', 'Tours', 'A bicycle is the right machine. The noodle room still takes cash.', klookTours('Sukhothai food'), '/photos/si-satchanalai.jpg'),
    ],
    faqs: [
      { q: 'Sukhothai or boat noodles?', a: 'Sukhothai noodles are lighter, with peanut and bean. Boat noodles are the Ayutthaya cup.' },
      { q: 'New town lunch?', a: 'Exists. Sleep at the gate if the dawn bicycle is why you came.' },
    ],
  },
  {
    path: '/thai-food/pattaya',
    title: 'Pattaya food guide',
    description:
      'Pattaya eating: Nang Nual and Jomtien grills, Naklua fish market, and som tum. Walking Street is a late mark-up.',
    lede:
      'Pattaya food is known for Jomtien seafood if you ask the weight price. It fits an east-gulf night, not a first-week Andaman substitute.',
    schema: 'Article',
    crumbs: [
      { name: 'Thai food', href: '/thai-food' },
      { name: 'Pattaya', href: '/thai-food/pattaya' },
    ],
    facts: [
      { label: 'Jomtien', value: 'Nang Nual and beach grills; price by weight' },
      { label: 'Naklua', value: 'Morning fish market, then a grill fee' },
      { label: 'Walking Street', value: 'Late mark-up; eat a proper lunch first' },
      { label: 'Som tum', value: '60 to 100 THB with sticky rice' },
    ],
    chips: ['Jomtien', 'Naklua', 'Som tum'],
    photo: '/photos/pattaya.jpg',
    geo: { lat: 12.9236, lon: 100.8825, containedIn: 'Pattaya' },
    paragraphs: [
      'Eat in Jomtien if you came to swim. Nang Nual near the pier is the named seafood house. Naklua is the north market if you sleep Wongamat. Walking Street is a late snack strip, not the best fish.',
      'For the stay split use [Pattaya](/pattaya). Hua Hin is the train-town gulf, a different weekend.',
    ],
    portraits: [
      { title: 'Pattaya', href: '/pattaya', photo: '/photos/sanctuary-truth.jpg' },
      { title: 'Hua Hin food', href: '/thai-food/hua-hin', photo: '/photos/hua-hin.jpg' },
      { title: 'Jomtien', href: '/pattaya/where-to-stay', photo: '/photos/jomtien.jpg' },
      { title: 'Koh Larn', href: '/pattaya/koh-larn', photo: '/photos/koh-larn.jpg' },
    ],
    affiliates: [
      stay('Pattaya stays', 'Jomtien or Wongamat', 'Sleep on the sand you will actually use.', stayLink('pattaya'), '/photos/wongamat.jpg'),
      klook('Koh Larn and tickets', 'Tours', 'Ferry or a Sanctuary timed entry. Read whether transfer is included.', klookTours('Pattaya food tour'), '/photos/walking-street-pattaya.jpg'),
    ],
    faqs: [
      { q: 'Jomtien or Walking Street for dinner?', a: 'Jomtien for fish. Walking Street only if that night is already the trip.' },
      { q: 'Naklua from central Pattaya?', a: 'A long songthaew. Sleep north if the market is breakfast.' },
    ],
  },
];
