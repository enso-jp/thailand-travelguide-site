import {
  stayLink,
  stayAreaLink,
  klookTours,
  klookIslandHopping,
} from './partners';
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
    title: 'Kata and Karon, Phuket',
    description:
      'Kata and Karon are known for mid-island west-coast sand between Patong and the south cape. Families use Kata. Karon is the long open beach. November to April.',
    lede:
      'Kata and Karon are known for walkable west-coast beaches that are not Patong. Stay Kata Yai if you want dinner on foot. Stay Karon if you want the longer open sand.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Phuket', href: '/phuket' },
      { name: 'Kata and Karon', href: '/phuket/kata-and-karon' },
    ],
    facts: [
      { label: 'Season', value: 'Best November to April (Andaman)' },
      { label: 'HKT transfer', value: 'About 45 to 60 minutes by car' },
      { label: 'Kata Yai vs Noi', value: 'Yai has the town. Noi is the small south cove' },
      { label: 'Karon', value: 'The long beach between Kata and Patong' },
    ],
    chips: ['West coast', 'Family default', 'Not Patong'],
    photo: '/photos/phuket.jpg',
    geo: { lat: 7.821, lon: 98.299, containedIn: 'Phuket' },
    paragraphs: [
      'Kata Yai is the swimming beach with a compact town behind it: restaurants, a 7-Eleven row, and a small night market on the road. Kata Noi is the next cove south, quieter, with fewer dinner options and a steeper drive. Do not treat them as one hotel search. The headland between them is a walk or a short Grab, not a shared promenade.',
      'Karon is the longer, more open beach to the north. It has more space and less of a village feel than Kata. Families who want a wide morning swim pick Karon. People who want to walk to dinner after dark pick Kata Yai. Patong starts after the next headland; it is a taxi, not a stroll, and it is a different night.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay',
        table: {
          headers: ['Pocket', 'Who it fits', 'Trade-off'],
          rows: [
            ['Kata Yai', 'First stays who want sand plus a walkable dinner strip', 'More traffic on the beach road after 18:00'],
            ['Kata Noi', 'Couples who want a smaller cove', 'Thin menus. You Grab back to Kata Yai for dinner'],
            ['Karon beach road', 'Families who want a long swim and a hotel lawn', 'The town sits up the hill. The sand is the point'],
            ['Karon viewpoint / south end', 'People who already know they hate Patong noise', 'Steeper walks and fewer late kitchens'],
          ],
        },
      },
      {
        id: 'season',
        title: 'Monsoon note',
        paragraphs: [
          'This is Andaman water. November to April is the trip. May to October brings west-coast chop, red flags, and cancelled island days. The road still works. A Phi Phi boat from Rassada is not a must in August.',
        ],
      },
    ],
    portraits: [
      { title: 'Kamala and Surin', href: '/phuket/kamala-and-surin', photo: '/photos/phuket.jpg' },
      { title: 'Rawai and Nai Harn', href: '/phuket/rawai-and-nai-harn', photo: '/photos/phuket.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Phuket beach clubs', href: '/interests/nightlife/phuket-beach-clubs', photo: '/photos/nightlife.jpg' },
    ],
    affiliates: [
      stay('Kata stays', 'Family west coast', 'Search Kata, not Phuket. Yai if you want dinner on foot.', stayAreaLink('kata'), '/photos/phuket.jpg'),
      stay('Karon stays', 'Long beach', 'More sand, less village. Book the beach road, not the hill, if you walk.', stayAreaLink('karon'), '/photos/phuket.jpg'),
      klook('Phi Phi and islands', 'Morning boats', 'Leave from Rassada. Cancel when the Andaman is up.', klookIslandHopping('Phuket'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'Kata or Karon?',
        a: 'Kata Yai if you want to walk to dinner. Karon if you want a longer beach and a quieter night. Kata Noi if you already accept a Grab for food.',
      },
      {
        q: 'Is this a party strip?',
        a: 'No. That is Patong. Kata has a small evening road. Karon is even quieter after 22:00.',
      },
    ],
  },
  {
    path: '/phuket/kamala-and-surin',
    title: 'Kamala and Surin, Phuket',
    description:
      'Kamala and Surin are known for calmer west-coast water north of Patong. Surin is the short premium sand. Kamala is the village. November to April.',
    lede:
      'Kamala and Surin are known for a quieter west-coast week than Patong. Sleep Kamala for a village and dinner. Sleep Surin if you will pay for the short pretty beach.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Phuket', href: '/phuket' },
      { name: 'Kamala and Surin', href: '/phuket/kamala-and-surin' },
    ],
    facts: [
      { label: 'Season', value: 'Best November to April (Andaman)' },
      { label: 'HKT transfer', value: 'About 35 to 55 minutes by car' },
      { label: 'Kamala', value: 'Village, tsunami memorial, local dinner' },
      { label: 'Surin', value: 'Short premium beach; Bang Tao is the next bay north' },
    ],
    chips: ['West coast', 'North of Patong', 'Surin sand'],
    photo: '/photos/phuket.jpg',
    geo: { lat: 7.955, lon: 98.283, containedIn: 'Phuket' },
    paragraphs: [
      'Kamala sits in a bay with a village road, a tsunami memorial, and a more local dinner row than Kata. It is not a hidden cove. It is the useful mid-spend west beach if you want to walk to a grill and still sleep near the sand.',
      'Surin is shorter, smarter, and priced like it. The beach is the point. Bang Tao, the next bay north, holds the Laguna golf-resort grid and the big beach clubs. Catch Beach Club lists 202/88 Moo 2 Cherngtalay. Cafe del Mar lists 118/19 Moo 3 Kamala. Those rooms are on the nightlife page. Do not book a Kamala family hotel and expect a club on the same sand.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay',
        table: {
          headers: ['Pocket', 'Who it fits', 'Trade-off'],
          rows: [
            ['Kamala beach road', 'People who want a village and a swim', 'The road is close. Hear scooters'],
            ['Surin beach', 'Couples who will pay for a short, pretty sand', 'Thin nightlife. Dinner is hotel or a short taxi'],
            ['Bang Tao / Cherngtalay', 'Golf, Laguna, and the club day', 'Not a village. You need a car or a hotel shuttle'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Kata and Karon', href: '/phuket/kata-and-karon', photo: '/photos/phuket.jpg' },
      { title: 'Kamala and Bang Tao clubs', href: '/interests/nightlife/phuket-kamala-bangtao', photo: '/photos/nightlife.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Kamala stays', 'Village west coast', 'Walk to dinner. Do not expect Surin quiet.', stayAreaLink('kamala'), '/photos/phuket.jpg'),
      stay('Surin stays', 'Short premium beach', 'Book the sand, then taxi for a club day.', stayAreaLink('surin'), '/photos/phuket.jpg'),
      klook('West-coast boats', 'Island days', 'Morning only in season. The road is the wet-month plan.', klookIslandHopping('Phuket'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'Kamala or Surin?',
        a: 'Kamala if you want a village and a mid-spend room. Surin if the beach is the stay and you will pay for it. Bang Tao if the club or the golf is why you came.',
      },
      {
        q: 'How far is Patong?',
        a: 'About 15 to 25 minutes south by car, longer at 18:00. Do not walk it. Do not use Patong as your Kamala nightlife.',
      },
    ],
  },
  {
    path: '/phuket/rawai-and-nai-harn',
    title: 'Rawai and Nai Harn, Phuket',
    description:
      'Rawai is known for the south pier and seafood road, not a swim. Nai Harn is the swimming bay next door. Book them as two stays, not one sand.',
    lede:
      'Rawai is known for longtails and grills. Nai Harn is known for the south-cape swim. Promthep is the sunset lookout. Book the stay by that split.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Phuket', href: '/phuket' },
      { name: 'Rawai and Nai Harn', href: '/phuket/rawai-and-nai-harn' },
    ],
    facts: [
      { label: 'Season', value: 'Best November to April (Andaman)' },
      { label: 'HKT transfer', value: 'About 50 to 75 minutes by car' },
      { label: 'Rawai', value: 'Pier, longtails, seafood. Not the swim' },
      { label: 'Nai Harn', value: 'The swimming beach in the next bay' },
    ],
    chips: ['South Phuket', 'Nai Harn swim', 'Rawai pier'],
    photo: '/photos/phuket.jpg',
    geo: { lat: 7.772, lon: 98.321, containedIn: 'Phuket' },
    paragraphs: [
      'Rawai is a working waterfront: longtails to Koh Hae (Coral Island) and Koh Racha, a seafood row, and a pier that does not pretend to be a resort beach. You can swim off a hotel pool. You should not plan Rawai as your postcard sand. That is the usual first-timer mix-up, and it is why this page exists.',
      'Nai Harn is the next bay west: a proper swimming beach with a park behind it and a smaller hotel list. Yanui is the tiny cove between them. Promthep Cape is the sunset viewpoint on the headland, not a beach. Stay in Nai Harn if the swim is the point. Stay in Rawai if the boat or the grill is the point and you accept a taxi to the sand.',
    ],
    sections: [
      {
        id: 'stay',
        title: 'Where to stay',
        table: {
          headers: ['Pocket', 'Who it fits', 'Trade-off'],
          rows: [
            ['Nai Harn beach', 'Swimmers and couples who want a south bay', 'Fewer restaurants. Rawai is a short taxi'],
            ['Rawai pier road', 'People who want boats and seafood at the door', 'The water in front of you is a harbour, not a beach'],
            ['Yanui / Promthep side', 'Sunset and a small cove', 'Thin services after dark. You will Grab'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Kata and Karon', href: '/phuket/kata-and-karon', photo: '/photos/phuket.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Nai Harn stays', 'The swimming bay', 'Book Nai Harn if the sand is why you came south.', stayAreaLink('nai-harn'), '/photos/phuket.jpg'),
      stay('Rawai stays', 'Pier and seafood', 'Book Rawai if the boat desk matters more than the swim.', stayAreaLink('rawai'), '/photos/phuket.jpg'),
      klook('Coral Island and Racha', 'From the south pier', 'Morning longtails in season. Check on arrival in the wet months.', klookIslandHopping('Rawai Phuket'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'Is Rawai a swimming beach?',
        a: 'No. Rawai is the pier and the grill. Nai Harn is the swimming beach. Book the stay with that split or you will be disappointed at breakfast.',
      },
      {
        q: 'Can you do Promthep from Kata?',
        a: 'Yes, as a late-afternoon taxi. Do not move hotels for one sunset unless you already want a south-coast stay.',
      },
    ],
  },
  {
    path: '/koh-samui/chaweng',
    title: 'Chaweng, Koh Samui',
    description:
      'Chaweng is known for Samui\'s longest east-coast beach, the walking street, and the short ride from USM. Loud, useful, and a poor four-night quiet base.',
    lede:
      'Chaweng is known for the loud east-coast strip most first Samui nights use. Walk to dinner. Hear the road. Move to Lamai or the north if you want sleep more than a strip.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Samui', href: '/koh-samui' },
      { name: 'Chaweng', href: '/koh-samui/chaweng' },
    ],
    facts: [
      { label: 'Season', value: 'Easier January to September (Lower Gulf)' },
      { label: 'Airport', value: 'USM, about 10 to 20 minutes' },
      { label: 'Beach', value: 'Longest east-coast sand on Samui' },
      { label: 'Night', value: 'Walking street and the club row' },
    ],
    chips: ['East coast', 'USM close', 'Loud default'],
    photo: '/photos/koh-samui.jpg',
    geo: { lat: 9.531, lon: 100.062, containedIn: 'Koh Samui' },
    paragraphs: [
      'Chaweng is known for a long east-facing beach and a road that does not sleep early. Central Chaweng is the walking-street block. North Chaweng is slightly quieter. Chaweng Noi, around the headland south, is a smaller bay that still hears the east-coast energy.',
      'This is the useful first night after USM: short transfer, dinner on foot, a beach in the morning. It is a poor four-night base if you came for a quiet gulf week. Lamai is the next beach south. Bophut and Maenam are the north-coast fork. Beach clubs live on the Samui nightlife page.',
    ],
    portraits: [
      { title: 'Lamai', href: '/koh-samui/lamai', photo: '/photos/koh-samui.jpg' },
      { title: 'Ang Thong', href: '/koh-samui/ang-thong-marine-park', photo: '/photos/koh-samui.jpg' },
      { title: 'Samui beach clubs', href: '/interests/nightlife/koh-samui-beach-clubs', photo: '/photos/nightlife.jpg' },
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
    ],
    affiliates: [
      stay('Chaweng stays', 'East-coast default', 'Walk to dinner. Hear the road. Fine for two nights after USM.', stayAreaLink('chaweng'), '/photos/koh-samui.jpg'),
      stay('Samui stays', 'Pick a coast', 'Leave Chaweng if sleep is the point.', stayLink('koh-samui'), '/photos/koh-samui.jpg'),
      klook('Ang Thong and boats', 'Day boats', 'Book the afternoon before. Morning seats in swell season.', klookTours('Ang Thong Koh Samui'), '/photos/koh-samui.jpg'),
    ],
    faqs: [
      {
        q: 'How many nights on Chaweng?',
        a: 'One or two after the airport. Move if you want a quieter week. The island is small; the mood is not.',
      },
      {
        q: 'Chaweng or Lamai?',
        a: 'Chaweng for the strip and the short USM ride. Lamai for a slightly slower east-coast stay and Hin Ta Hin Yai.',
      },
    ],
  },
  {
    path: '/koh-samui/lamai',
    title: 'Lamai, Koh Samui',
    description:
      'Lamai is known for a slower east-coast town south of Chaweng, a useful swim, and the Hin Ta Hin Yai rocks. Better for a week than the walking street.',
    lede:
      'Lamai is known for an east-coast bay with a town and less walking-street noise than Chaweng. Stay here for a longer Samui week. Stay Chaweng if USM and the strip are the point.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Samui', href: '/koh-samui' },
      { name: 'Lamai', href: '/koh-samui/lamai' },
    ],
    facts: [
      { label: 'Season', value: 'Easier January to September (Lower Gulf)' },
      { label: 'From USM', value: 'About 25 to 40 minutes' },
      { label: 'Rocks', value: 'Hin Ta Hin Yai at the south end' },
      { label: 'Night', value: 'Smaller than Chaweng; Bophut is a taxi' },
    ],
    chips: ['East coast', 'Hin Ta Hin Yai', 'Slower than Chaweng'],
    photo: '/photos/koh-samui.jpg',
    geo: { lat: 9.466, lon: 100.04, containedIn: 'Koh Samui' },
    paragraphs: [
      'Lamai is the second east-coast town, known for a usable beach and a calmer road than Chaweng. Families and week-long stays use it. The south rocks, Hin Ta Hin Yai, are a short walk or a cheap songthaew. They are a viewpoint, not a half-day trip.',
      'Dinner is on the beach road and in the small town grid. For a louder night you taxi to Chaweng. For a Fisherman\'s Village evening you go north to Bophut. Beach Republic lists 176/34 Moo 4 Maret on the Samui nightlife page. That is a south-coast club, not the Lamai town strip.',
    ],
    portraits: [
      { title: 'Chaweng', href: '/koh-samui/chaweng', photo: '/photos/koh-samui.jpg' },
      { title: 'Bophut and Lamai nights', href: '/interests/nightlife/samui-bophut-lamai', photo: '/photos/koh-samui.jpg' },
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
    ],
    affiliates: [
      stay('Lamai stays', 'Slower east coast', 'A week works here. Chaweng is the louder taxi ride.', stayAreaLink('lamai'), '/photos/koh-samui.jpg'),
      stay('Chaweng stays', 'If the strip is the point', 'Shorter USM ride. Louder nights.', stayAreaLink('chaweng'), '/photos/koh-samui.jpg'),
    ],
    faqs: [
      {
        q: 'Is Lamai quiet?',
        a: 'Quieter than Chaweng. Not silent. The beach road still has bars. The north coast is the actual quiet fork.',
      },
      {
        q: 'Do you need a scooter?',
        a: 'Only if you already ride. Songthaews and Grab cover Chaweng, the rocks, and Bophut. The hills south are not a first-scooter lesson.',
      },
    ],
  },
  {
    path: '/bangkok/phrom-phong-and-thong-lo',
    title: 'Phrom Phong and Thong Lo',
    description:
      'Phrom Phong and Thong Lo are known for the easy Sukhumvit hotel pair: EmQuartier, Benjakitti, and dinner one stop on at Thong Lo.',
    lede:
      'Phrom Phong is known for BTS hotels, malls, and Benjakitti. Thong Lo is known for dinner one stop east. Stay on this pair if you want Sukhumvit without sleeping on Nana.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Bangkok', href: '/bangkok' },
      { name: 'Phrom Phong and Thong Lo', href: '/bangkok/phrom-phong-and-thong-lo' },
    ],
    facts: [
      { label: 'Rail', value: 'BTS Phrom Phong and BTS Thong Lo' },
      { label: 'Malls', value: 'EmQuartier and Emporium at Phrom Phong' },
      { label: 'Park', value: 'Benjakitti, a 10 to 20 minute walk' },
      { label: 'Late food', value: 'Sukhumvit Soi 38, one short hop west' },
    ],
    chips: ['BTS pair', 'EmQuartier', 'Dinner on Thong Lo'],
    photo: '/photos/sukhumvit.jpg',
    geo: { lat: 13.73, lon: 100.57, containedIn: 'Bangkok' },
    paragraphs: [
      'Phrom Phong is where a lot of first stays actually land: BTS on the door, EmQuartier and Emporium for air-con, and Benjakitti park if you want a morning walk that is not a mall. The sois south of Sukhumvit hold Japanese rooms and mid-spend hotels. The sois north hold more residences.',
      'Thong Lo (BTS Thong Lo, Sukhumvit Soi 55) is the dinner stop. Bar Us, Rabbit Hole, and the Thonglor nightlife map live on their own page. This page is the stay pair. Soi 38, between Thong Lo and Phrom Phong, is the late grilled-pork and boat-noodle stretch. Last BTS trains are around midnight; Grab after that.',
    ],
    portraits: [
      { title: 'Sukhumvit and Thonglor', href: '/bangkok/sukhumvit-thonglor', photo: '/photos/sukhumvit.jpg' },
      { title: 'Ari', href: '/bangkok/ari', photo: '/photos/sukhumvit.jpg' },
      { title: 'Thonglor nights', href: '/interests/nightlife/thonglor-ekkamai', photo: '/photos/sukhumvit.jpg' },
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    ],
    affiliates: [
      stay('Phrom Phong stays', 'BTS and malls', 'The easy first-timer pairing if Nana is too loud.', stayAreaLink('phrom-phong'), '/photos/sukhumvit.jpg'),
      stay('Thonglor hotels', 'Dinner density', 'Sleep here if the night is the point.', stayAreaLink('thonglor'), '/photos/sukhumvit.jpg'),
    ],
    faqs: [
      {
        q: 'Phrom Phong or Thong Lo?',
        a: 'Phrom Phong if you want malls, the park, and a slightly cheaper hotel row. Thong Lo if dinner and bars are why you picked Sukhumvit.',
      },
      {
        q: 'Is this the same as Nana?',
        a: 'No. Nana is louder and cheaper, several BTS stops west. This pair is the calmer Sukhumvit default.',
      },
    ],
  },
  {
    path: '/bangkok/silom-and-sathorn',
    title: 'Silom and Sathorn',
    description:
      'Silom and Sathorn are known for the old business core: Sala Daeng, Lumphini dawn walks, and rooftops. Moon Bar is closed until 2 Dec 2026.',
    lede:
      'Silom is known for the Sala Daeng interchange and Lumphini. Sathorn is the office ridge next to it. Stay here for the park and a rooftop, not for a first-timer soi crawl.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Bangkok', href: '/bangkok' },
      { name: 'Silom and Sathorn', href: '/bangkok/silom-and-sathorn' },
    ],
    facts: [
      { label: 'Rail', value: 'BTS Sala Daeng and MRT Silom on one block' },
      { label: 'Park', value: 'Lumphini; gates from about 04:30' },
      { label: 'Moon Bar', value: 'Lebua; closed until 2 December 2026' },
      { label: 'Sky Bar', value: 'Lebua State Tower; confirm hours the week you go' },
    ],
    chips: ['Sala Daeng', 'Lumphini', 'Rooftops'],
    photo: '/photos/siam.jpg',
    geo: { lat: 13.726, lon: 100.538, containedIn: 'Bangkok' },
    paragraphs: [
      'Silom Road runs from Lumphini toward the river. Sala Daeng is the useful interchange: BTS on the Sukhumvit line, MRT on the Blue Line, and a short walk to the park. Sathorn is the parallel office ridge with the big hotels and the embassy traffic. Evenings here are rooftops and a few rooms, not Thonglor sois.',
      'Moon Bar at Lebua is closed until 2 December 2026. Do not plan the trip around that terrace until it reopens. Sky Bar in the same tower still takes a sunset crowd; check the night you go. The broader Silom nightlife map, including the rooms that are not tourist rooftops, sits on the Silom and Sathorn nightlife page.',
    ],
    portraits: [
      { title: 'Siam and Silom', href: '/bangkok/siam-silom', photo: '/photos/siam.jpg' },
      { title: 'Silom nights', href: '/interests/nightlife/silom-sathorn', photo: '/photos/siam.jpg' },
      { title: 'Ari', href: '/bangkok/ari', photo: '/photos/sukhumvit.jpg' },
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    ],
    affiliates: [
      stay('Silom stays', 'Sala Daeng', 'MRT and BTS on the same block. Good for a park morning.', stayAreaLink('silom'), '/photos/siam.jpg'),
      stay('Sathorn stays', 'Office ridge', 'Quieter nights, longer walks to dinner.', stayAreaLink('sathorn'), '/photos/siam.jpg'),
    ],
    faqs: [
      {
        q: 'Is Silom a first-trip base?',
        a: 'It works if you want the park and the interchange. Sukhumvit is easier for dinner variety. The river is easier for boats.',
      },
      {
        q: 'Can you walk Lumphini at dawn?',
        a: 'Yes. Gates open early, often around 04:30. Go before office traffic. The park is the reason to sleep on this side.',
      },
    ],
  },
  {
    path: '/bangkok/ari',
    title: 'Ari, Bangkok',
    description:
      'Ari is the low-rise cafe and wine-bar grid around BTS Ari. It is a stay neighbourhood, not Bangkok\'s Isan district and not Thonglor.',
    lede:
      'Ari is known for low-rise cafes and wine bars around BTS Ari, not for Isan restaurants or a club strip. Sleep here if you want a residential grid. Ride to Thonglor if you want the famous Isan rooms.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Bangkok', href: '/bangkok' },
      { name: 'Ari', href: '/bangkok/ari' },
    ],
    facts: [
      { label: 'Rail', value: 'BTS Ari; Exit 1 or 3 for the west sois' },
      { label: 'From Siam', value: 'About 10 minutes on the BTS Sukhumvit line' },
      { label: 'Food', value: 'Neighbourhood Thai and cafes; Isan lunch exists, it is not the identity' },
      { label: 'Night', value: 'Wine rooms and house bars; last BTS around midnight' },
    ],
    chips: ['BTS Ari', 'Cafes', 'Not Thonglor'],
    photo: '/photos/sukhumvit.jpg',
    geo: { lat: 13.779, lon: 100.545, containedIn: 'Bangkok' },
    paragraphs: [
      'Ari sits on Phahonyothin north of Phaya Thai. West of the BTS, Soi Ari 1 to 4 is a walkable grid of cafes, wine counters, and converted-house bars. That is the stay. It is not Bangkok\'s Isan district. The well-known Isan rooms most visitors mean, including Som Tam Nua, sit on Thonglor. You can eat som tam and grilled chicken in Ari. You should not book Ari because someone called it the Isan neighbourhood.',
      'Pradipat runs parallel toward Saphan Khwai and holds quieter home bars. Stay in Ari or Phaya Thai if this is the week. Do not commute from Sukhumvit Soi 11 just to have coffee here. The nightlife door list lives on the Ari and Pradipat page.',
    ],
    portraits: [
      { title: 'Ari nights', href: '/interests/nightlife/ari-pradipat', photo: '/photos/sukhumvit.jpg' },
      { title: 'Phrom Phong and Thong Lo', href: '/bangkok/phrom-phong-and-thong-lo', photo: '/photos/sukhumvit.jpg' },
      { title: 'Siam and Silom', href: '/bangkok/siam-silom', photo: '/photos/siam.jpg' },
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    ],
    affiliates: [
      stay('Ari stays', 'BTS Ari grid', 'Low-rise sois. Book west of the tracks if you want to walk at night.', stayAreaLink('ari'), '/photos/sukhumvit.jpg'),
      stay('Phaya Thai stays', 'ARL plus BTS', 'Useful if you also want the Airport Rail Link without sleeping in Siam.', stayAreaLink('siam'), '/photos/siam.jpg'),
    ],
    faqs: [
      {
        q: 'Is Ari the place for Isan food?',
        a: 'No. Ari is a cafe and wine-bar neighbourhood. You will find local Thai and some Isan plates. The famous Isan rooms are on Thonglor. That mix-up is how people book the wrong stay.',
      },
      {
        q: 'Ari or Thonglor for a first stay?',
        a: 'Thonglor if dinner variety and BTS hotels are the point. Ari if you want a quieter residential grid and you will ride for a big night.',
      },
    ],
  },
];
