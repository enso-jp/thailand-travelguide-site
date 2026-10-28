import {
  stayLink,
  stayAreaLink,
  flightLink,
  trainLink,
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
    title: '10 days: Bangkok, Chiang Mai, and the south coast',
    description:
      'Ten days for Bangkok, the Chiang Mai sleeper, and one south coast. Fly the long legs. Flip Andaman vs Gulf with the monsoon.',
    lede:
      'Ten days is Bangkok, Chiang Mai, and one south coast. Take SRT 9 northbound (Krung Thep Aphiwat to Chiang Mai, about 18:40 to 07:15). Do not add a second sea.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '10 days classic', href: '/itineraries/10-days-classic-thailand' },
    ],
    facts: [
      { label: 'Duration', value: '10 days' },
      { label: 'North train', value: 'SRT 9 northbound, about 18:40 to 07:15' },
      { label: 'South flip', value: 'Andaman Nov-Apr, Gulf Jan-Sep' },
    ],
    photo: '/photos/bangkok.jpg',
    paragraphs: [
      'This is the compact classic: three Bangkok nights, the sleeper north, three Chiang Mai nights, then a south coast. The 14-day plan adds rest. This one does not. Drop Chiang Rai and a second island before you drop sleep.',
      'SRT 9 northbound (Krung Thep Aphiwat to Chiang Mai, about 18:40 to 07:15) is the useful overnight. SRT 10 is the southbound return, Chiang Mai about 18:00 to Krung Thep Aphiwat about 06:50. Confirm today\'s board on SRT the week you ride. Do not go to Hua Lamphong for this sleeper.',
    ],
    days: [
      { n: 1, title: 'Bangkok arrival', body: 'Land BKK or DMK. Airport car or ARL to Sukhumvit. Sleep.', photo: '/photos/bangkok.jpg' },
      { n: 2, title: 'Old City', body: 'Grand Palace at opening (500 THB). Wat Pho (300 THB). River boat back.', photo: '/photos/old-city.jpg' },
      { n: 3, title: 'City plus the sleeper', body: 'A river or Chinatown day. Evening to Krung Thep Aphiwat for SRT 9, about 18:40.', photo: '/photos/bts.jpg' },
      { n: 4, title: 'Chiang Mai morning', body: 'Arrive about 07:15. Sleep in the Old City. Light walk, no Doi Inthanon today.', photo: '/photos/chiang-mai.jpg' },
      { n: 5, title: 'Old City wats', body: 'Dawn circuit, 20 to 50 THB booths. Cooking class or Doi Suthep.', photo: '/photos/chiang-mai-old-city.jpg' },
      { n: 6, title: 'Nimman or a half-day', body: 'Cafes west of the moat. Do not stack Pai on this block.', photo: '/photos/nimman.jpg' },
      { n: 7, title: 'Fly south', body: 'CNX to HKT, USM, or KBV. No boat on landing day.', photo: '/photos/phuket.jpg' },
      { n: 8, title: 'Beach day', body: 'One coast only. Andaman: Kata or Railay. Gulf: Chaweng or Lamai.', photo: '/photos/koh-samui.jpg' },
      { n: 9, title: 'Boat or a second bay', body: 'One island day. Keep a buffer before the long-haul.', photo: '/photos/krabi.jpg' },
      { n: 10, title: 'Out', body: 'Fly to BKK only if the long-haul needs it. Same-day international is a gamble.', photo: '/photos/bts.jpg' },
    ],
    affiliates: [
      stay('Bangkok first nights', 'Sukhumvit', 'Keep the first two nights simple.', stayAreaLink('sukhumvit'), '/photos/sukhumvit.jpg'),
      { title: 'SRT berths', kicker: 'Trip.com', body: 'Krung Thep Aphiwat to Chiang Mai when listed.', href: trainLink('Bangkok', 'Chiang Mai'), cta: 'Search trains', photo: '/photos/chiang-mai.jpg', partner: 'trains' },
      { title: 'South flights', kicker: 'Trip.com', body: 'CNX to HKT, USM, or KBV.', href: flightLink('CNX', 'HKT'), cta: 'Search flights', photo: '/photos/phuket.jpg', partner: 'flights' },
    ],
    faqs: [
      {
        q: 'Is this the same as the 14-day plan?',
        a: 'Same spine, fewer rest days. Use 14 days if you want Khao Sok or a second beach. Use 10 if the calendar is tight.',
      },
      {
        q: 'Which station for the sleeper?',
        a: 'Krung Thep Aphiwat. SRT 9 northbound leaves about 18:40. Hua Lamphong is not this train.',
      },
    ],
  },
  {
    path: '/itineraries/2-weeks-andaman-island-hopping',
    title: '2 weeks: Andaman island hopping',
    description:
      'Fourteen Andaman days: Phuket, Krabi or Railay, Phi Phi, Lanta, and an optional Lipe or Khao Sok finish. November to April.',
    lede:
      'Two Andaman weeks hop one sea: Phuket, Krabi, Phi Phi, then Lanta. November to April is the window. Do not add Samui. The Gulf is a different monsoon.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '2 weeks Andaman', href: '/itineraries/2-weeks-andaman-island-hopping' },
    ],
    facts: [
      { label: 'Duration', value: '14 days' },
      { label: 'Season', value: 'November to April only' },
      { label: 'Airports', value: 'Land HKT or KBV; leave the same coast' },
    ],
    photo: '/photos/phuket.jpg',
    paragraphs: [
      'This plan stays on Andaman water. Phuket is the airport. Krabi or Railay is the cliff. Phi Phi is one night, not a week. Lanta is the slower finish. Khao Sok is the inland swap if you are done with boats. Lipe is the far-south extra only if you already have the days.',
      'May to October breaks this itinerary. Boats cancel, west-facing beaches take chop, and south-end Lanta resorts close. Flip to the Gulf plan instead.',
    ],
    days: [
      { n: 1, title: 'Land HKT', body: 'No boat. Sleep Kamala, Surin, or Kata. Patong only if that strip is the point.', photo: '/photos/phuket.jpg' },
      { n: 2, title: 'West-coast beach', body: 'Learn the Grab pattern. Old Phuket Town is the non-beach morning.', photo: '/photos/phuket.jpg' },
      { n: 3, title: 'Boat to Krabi or Railay', body: 'Morning ferry or speedboat. Railay if you accept a longtail.', photo: '/photos/krabi.jpg' },
      { n: 4, title: 'Cliffs', body: 'Railay and Phra Nang. Ao Nang if you want cars and dinner.', photo: '/photos/krabi.jpg' },
      { n: 5, title: 'Phi Phi night', body: 'Morning boat to Tonsai. One night is enough for most first trips.', photo: '/photos/krabi.jpg' },
      { n: 6, title: 'Phi Phi to Lanta', body: 'Bundhaya or Andaman Wave Master, Tonsai to Saladan, about 1.5 hours in season.', photo: '/photos/koh-lanta.jpg' },
      { n: 7, title: 'Lanta west coast', body: 'Klong Dao for dinner. Kantiang if you want the south bay.', photo: '/photos/koh-lanta.jpg' },
      { n: 8, title: 'Lanta beach day', body: 'Scooter or a pickup. No new island.', photo: '/photos/koh-lanta.jpg' },
      { n: 9, title: 'Rok or a rest day', body: 'Koh Rok in season only. The road is the backup.', photo: '/photos/koh-lanta.jpg' },
      { n: 10, title: 'Optional Khao Sok', body: 'Van north. One night on Cheow Lan if the lake is the point.', photo: '/photos/khao-sok.jpg' },
      { n: 11, title: 'Lake or Lanta buffer', body: 'Dawn on the lake, or a second Lanta bay.', photo: '/photos/khao-sok.jpg' },
      { n: 12, title: 'Back to an airport coast', body: 'KBV or HKT. Keep the transfer honest.', photo: '/photos/krabi.jpg' },
      { n: 13, title: 'Buffer', body: 'Weather leftovers go here. Do not book a same-day long-haul from a boat.', photo: '/photos/phuket.jpg' },
      { n: 14, title: 'Out', body: 'HKT or KBV to BKK, or a long-haul if it already lands here.', photo: '/photos/bts.jpg' },
    ],
    affiliates: [
      stay('Phuket first nights', 'West coast', 'Kata or Kamala. Not Patong unless you want that strip.', stayLink('phuket'), '/photos/phuket.jpg'),
      stay('Lanta finish', 'Name the beach', 'Klong Dao for dinner. Kantiang for the bay.', stayLink('koh-lanta'), '/photos/koh-lanta.jpg'),
      klook('Andaman boats', 'Phi Phi and Lanta', 'Morning seats. Book the afternoon before in high season.', klookRailFerry('Phi Phi Koh Lanta ferry'), '/photos/koh-lanta.jpg'),
    ],
    faqs: [
      {
        q: 'Can you add Samui?',
        a: 'Not on this plan. The Andaman and the Gulf flip seasons. Two weeks on one sea is the point.',
      },
      {
        q: 'Phi Phi to Lanta without going back to Krabi?',
        a: 'Yes, in season. Speedboats run Tonsai to Saladan. From May they thin out. The road plus car ferry is the backup from Krabi, not from Phi Phi.',
      },
    ],
  },
  {
    path: '/itineraries/10-days-gulf-islands-samui-phangan-tao',
    title: '10 days: Samui, Phangan, and Tao',
    description:
      'Ten Gulf days: Samui, Phangan, and optional Tao. January to September. May to August is the calmest, clearest sea.',
    lede:
      'Ten days on the Lower Gulf: Samui, Phangan, then Tao if you dive. January to September is the window. May to August is the calmest, clearest sea.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '10 days Gulf islands', href: '/itineraries/10-days-gulf-islands-samui-phangan-tao' },
    ],
    facts: [
      { label: 'Duration', value: '10 days' },
      { label: 'Season', value: 'January to September; May to August is the calmest, clearest sea' },
      { label: 'Airport', value: 'USM, then Lomprayah or Seatran' },
    ],
    photo: '/photos/koh-samui.jpg',
    paragraphs: [
      'This is the Samui chain, not Phuket. Land USM. Sleep Chaweng or Lamai for two nights. Boat to Phangan. Add Tao only if Open Water is the point. October to December is the wet, windy end; Tao cancels first.',
      'May to August is the calmest, clearest sea on this coast. That is the window to book the chain if you can move your dates. Morning boats. Book the afternoon before. Keep a buffer before any international flight.',
    ],
    days: [
      { n: 1, title: 'Land USM', body: 'No boat. Sleep Chaweng for the short ride, or Lamai if you want a slower east coast.', photo: '/photos/koh-samui.jpg' },
      { n: 2, title: 'Samui beach', body: 'Swim. Learn the songthaew. Ang Thong is a later day, not today.', photo: '/photos/koh-samui.jpg' },
      { n: 3, title: 'Optional Ang Thong', body: 'Full-day marine park if the sea is flat. Or a second Samui coast.', photo: '/photos/koh-samui.jpg' },
      { n: 4, title: 'Boat to Phangan', body: 'Lomprayah from Maenam or Seatran from Lipa Noi, about 30 to 45 minutes.', photo: '/photos/koh-phangan.jpg' },
      { n: 5, title: 'Phangan bay', body: 'West or north if you want quiet. Haad Rin only if Full Moon is the trip.', photo: '/photos/koh-phangan.jpg' },
      { n: 6, title: 'Phangan day', body: 'A viewpoint or a second bay. Not a new island.', photo: '/photos/koh-phangan.jpg' },
      { n: 7, title: 'Optional Tao', body: 'Mae Haad landing. Sairee if you dive. Skip Tao if you do not.', photo: '/photos/koh-tao.jpg' },
      { n: 8, title: 'Dive or a west-coast swim', body: 'Open Water days are early. Keep the last night off the boat.', photo: '/photos/koh-tao.jpg' },
      { n: 9, title: 'Back toward USM', body: 'Boat to Samui. Sleep near the airport if the flight is early.', photo: '/photos/koh-samui.jpg' },
      { n: 10, title: 'Out', body: 'USM to BKK, or a long-haul if it already uses Samui. Do not boat on exit day.', photo: '/photos/bts.jpg' },
    ],
    affiliates: [
      stay('Samui first nights', 'East coast', 'Chaweng after USM. Lamai if you want a slower week.', stayLink('koh-samui'), '/photos/koh-samui.jpg'),
      stay('Phangan bay', 'Pick a coast', 'West or north unless Full Moon is the point.', stayLink('koh-phangan'), '/photos/koh-phangan.jpg'),
      klook('Lomprayah and Seatran', 'Rail and ferry', 'Book the afternoon before, not at the pier in a swell.', klookRailFerry('Lomprayah Koh Samui'), '/photos/koh-phangan.jpg'),
    ],
    faqs: [
      {
        q: 'Do you need all three islands?',
        a: 'Samui and Phangan are the usual pair. Tao is the dive add. Two islands in 10 days is enough.',
      },
      {
        q: 'When is the water clearest?',
        a: 'May to August is the calmest, clearest sea. January to April still works. October to December is the one to avoid on Tao.',
      },
    ],
  },
  {
    path: '/itineraries/7-days-northern-thailand-loop',
    title: '7 days: Northern Thailand loop',
    description:
      'Seven northern days: Chiang Mai, optional Pai or Chiang Rai, and Doi Inthanon. Cooler November to February. Haze risk March to April.',
    lede:
      'A northern week is Chiang Mai plus one fork: Pai, Chiang Rai, or Doi Inthanon. Do not stack all three. Fly CNX or take SRT 9 from Krung Thep Aphiwat.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '7 days north', href: '/itineraries/7-days-northern-thailand-loop' },
    ],
    facts: [
      { label: 'Duration', value: '7 days' },
      { label: 'Arrive', value: 'CNX, or SRT 9 about 18:40 to 07:15' },
      { label: 'Fork', value: 'Pai or Chiang Rai, not both' },
    ],
    photo: '/photos/chiang-mai.jpg',
    paragraphs: [
      'Chiang Mai is the base. Give it three nights before you leave the moat. Pai is 762 bends and a mountain night, not a day trip. Chiang Rai is the White Temple and a quieter city. Doi Inthanon is the high-altitude day with a 300 THB foreign park fee.',
      'March and April can be smoke season. November to February is the cool, clear window. Book the sleeper 90 days out around Songkran and New Year.',
    ],
    days: [
      { n: 1, title: 'Land CNX or the sleeper', body: 'Old City stay. Light walk only if you rode SRT 9 overnight.', photo: '/photos/chiang-mai.jpg' },
      { n: 2, title: 'Old City wats', body: 'Dawn circuit. Sunday Walking Street if the calendar lines up.', photo: '/photos/chiang-mai-old-city.jpg' },
      { n: 3, title: 'Nimman and food', body: 'Khao soi at lunch. Cafes west of the moat.', photo: '/photos/nimman.jpg' },
      { n: 4, title: 'Fork day', body: 'Van to Pai, Green Bus to Chiang Rai, or Doi Inthanon with a driver.', photo: '/photos/pai.jpg' },
      { n: 5, title: 'Deepen the fork', body: 'Pai canyon or the White Temple at 08:00 (200 THB foreigners).', photo: '/photos/chiang-rai.jpg' },
      { n: 6, title: 'Return to Chiang Mai', body: 'Do not add a second mountain town. Sleep near CNX if the flight is early.', photo: '/photos/chiang-mai.jpg' },
      { n: 7, title: 'Out', body: 'CNX to BKK, or SRT 10 southbound in the evening if you have a Bangkok buffer.', photo: '/photos/bts.jpg' },
    ],
    affiliates: [
      stay('Chiang Mai block', 'Old City', 'Three nights inside or beside the moat.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      stay('Pai night', 'If you take the fork', 'One or two nights. The loop needs more days than this week has.', stayLink('pai'), '/photos/pai.jpg'),
      { title: 'CNX flights', kicker: 'Trip.com', body: 'BKK or DMK to Chiang Mai, about 70 minutes.', href: flightLink('BKK', 'CNX'), cta: 'Search flights', photo: '/photos/chiang-mai.jpg', partner: 'flights' },
    ],
    faqs: [
      {
        q: 'Pai or Chiang Rai in seven days?',
        a: 'Pai if you want a mountain town. Chiang Rai if you want the White Temple and a city. Doi Inthanon if you want a park day and you will be back in Chiang Mai that night.',
      },
      {
        q: 'Can you do the full Mae Hong Son Loop?',
        a: 'Not in seven days. The loop wants four days on the bike after Chiang Mai. That is a different trip.',
      },
    ],
  },
  {
    path: '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi',
    title: '5 days: Bangkok, Ayutthaya, and Kanchanaburi',
    description:
      'Five days west and north of Bangkok: Old City temples, an Ayutthaya ruin day, and two nights for the River Kwai and Erawan.',
    lede:
      'Five days is Bangkok plus two side trips: Ayutthaya by train from Krung Thep Aphiwat, then Kanchanaburi from Thonburi. Do not combine the ruins and the river on the same day.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '5 days west', href: '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi' },
    ],
    facts: [
      { label: 'Duration', value: '5 days' },
      { label: 'Ayutthaya', value: 'About one hour from Krung Thep Aphiwat' },
      { label: 'Kanchanaburi', value: 'Thonburi station, not Bang Sue' },
    ],
    photo: '/photos/ayutthaya.jpg',
    paragraphs: [
      'This is the no-island week. Bangkok for the palace. Ayutthaya for the ruins. Kanchanaburi for the bridge and Erawan. Two nights west if you want the seven tiers and the railway. A day trip to Kanchanaburi skips the falls.',
      'Grand Palace is 500 THB. Wat Pho is 300 THB. Erawan is 300 THB for foreign adults. Ayutthaya park tickets vary by wat; carry cash. Ordinary trains to Kanchanaburi have not moved to Krung Thep Aphiwat.',
    ],
    days: [
      { n: 1, title: 'Bangkok arrival', body: 'Sukhumvit or riverside. No palace if you land after 14:00.', photo: '/photos/bangkok.jpg' },
      { n: 2, title: 'Old City', body: 'Palace at opening, Wat Pho, Wat Arun ferry. Dinner back on your side of town.', photo: '/photos/old-city.jpg' },
      { n: 3, title: 'Ayutthaya day', body: 'Train from Krung Thep Aphiwat. Bicycle or tuk-tuk the island. Evening train back, or sleep in Ayutthaya if you want dawn.', photo: '/photos/ayutthaya.jpg' },
      { n: 4, title: 'Kanchanaburi', body: 'Thonburi ordinary train or a van. Bridge and the war museum. Sleep on the river.', photo: '/photos/kanchanaburi.jpg' },
      { n: 5, title: 'Erawan then back', body: 'Seven tiers in the morning (300 THB). Van or train to Bangkok for the night flight.', photo: '/photos/erawan.jpg' },
    ],
    affiliates: [
      stay('Bangkok nights', 'First and last', 'Sukhumvit keeps the BTS simple.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      stay('Kanchanaburi night', 'River', 'Two nights if Erawan is a must.', stayLink('kanchanaburi'), '/photos/kanchanaburi.jpg'),
      klook('Erawan and the bridge', 'Day tours', 'Useful if you refuse to navigate Thonburi. A self-planned two-night stay is calmer.', klookTours('Erawan Kanchanaburi'), '/photos/erawan.jpg'),
    ],
    faqs: [
      {
        q: 'Ayutthaya and Kanchanaburi in one day?',
        a: 'No. They sit on different lines and different sides of the story. One ruin day, one river block.',
      },
      {
        q: 'Which Bangkok station?',
        a: 'Krung Thep Aphiwat for Ayutthaya. Thonburi for the daily Kanchanaburi trains. Read the number.',
      },
    ],
  },
  {
    path: '/khao-lak/similan-and-surin-islands',
    title: 'Similan and Surin Islands',
    description:
      'The Andaman national parks off Khao Lak: Similan for granite and dive sites, Surin for snorkel villages. Mid-October to mid-May.',
    lede:
      'Similan and Surin are the Andaman marine parks you boat from Khao Lak. The parks open about mid-October to mid-May. Do not plan them as a Phuket afterthought in August.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Khao Lak', href: '/khao-lak' },
      { name: 'Similan and Surin', href: '/khao-lak/similan-and-surin-islands' },
    ],
    facts: [
      { label: 'Season', value: 'Parks open about 15 Oct to 15 May; check on arrival' },
      { label: 'Pier', value: 'Thap Lamu for Similan; Khura Buri for Surin' },
      { label: 'Park fee', value: 'About 500 THB foreign adult at Similan; confirm at the booth' },
      { label: 'Boat day', value: 'Speedboat about 1 to 1.5 hours each way' },
    ],
    chips: ['Andaman parks', 'Khao Lak', 'Closed in monsoon'],
    photo: '/photos/khao-lak.jpg',
    geo: { lat: 8.654, lon: 97.645, containedIn: 'Andaman Coast' },
    paragraphs: [
      'The Similan Islands are a granite chain west of Khao Lak, known for dive walls and a few permitted beaches. Most first-timers take a speedboat day from Thap Lamu. Liveaboards use the same season. Island 4 (Koh Miang) and Island 8 (Koh Similan) are the usual landings. Some beaches close for recovery; the park announces that at the pier.',
      'Mu Ko Surin sits farther north, off Khura Buri in Phang Nga. The Moken village and the shallow reefs are the draw. It is a longer road from Khao Lak than Similan. Do not stack both parks on the same calendar day. Park fees are cash at many desks. Foreign adult tickets have sat around 500 THB at Similan plus a boat of about 2,500 to 3,500 THB. Check on arrival.',
    ],
    portraits: [
      { title: 'Khao Lak', href: '/khao-lak', photo: '/photos/khao-lak.jpg' },
      { title: 'Phuket to Khao Sok', href: '/get-there/phuket-to-khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/phuket.jpg' },
      { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/khao-sok.jpg' },
    ],
    affiliates: [
      stay('Khao Lak stays', 'Bang Niang or Khuk Khak', 'Sleep on the mainland. The parks are day boats.', stayLink('khao-lak'), '/photos/khao-lak.jpg'),
      klook('Similan day boats', 'In season only', 'Morning speedboats from Thap Lamu. Cancel when the park is closed.', klookTours('Similan Islands Khao Lak'), '/photos/khao-lak.jpg'),
    ],
    faqs: [
      {
        q: 'Can you visit in July?',
        a: 'No. The parks close in the Andaman monsoon, roughly mid-May to mid-October. Book Khao Lak for the beach, or flip to the Gulf.',
      },
      {
        q: 'Similan from Phuket?',
        a: 'Possible as a long day, and a worse one. Sleep in Khao Lak the night before. The pier is Thap Lamu, not Rassada.',
      },
    ],
  },
  {
    path: '/kanchanaburi/erawan-and-sai-yok',
    title: 'Erawan and Sai Yok',
    description:
      'Erawan is seven waterfall tiers west of Kanchanaburi. Sai Yok is the quieter river park toward Nam Tok. Give them separate mornings.',
    lede:
      'Erawan is the seven-tier park most people come west for. Sai Yok is the longer, quieter river park. Do not treat them as one waterfall stop after the bridge selfie.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Kanchanaburi', href: '/kanchanaburi' },
      { name: 'Erawan and Sai Yok', href: '/kanchanaburi/erawan-and-sai-yok' },
    ],
    facts: [
      { label: 'Erawan fee', value: '300 THB foreign adult (DNP category 3)' },
      { label: 'Hours', value: 'Erawan about 08:00 to 16:30; last entry earlier' },
      { label: 'From town', value: 'Erawan about 65 to 70 km; Sai Yok farther west' },
      { label: 'Train', value: 'Thonburi to Kanchanaburi; not Krung Thep Aphiwat' },
    ],
    chips: ['Seven tiers', '300 THB', 'Two parks'],
    photo: '/photos/erawan.jpg',
    geo: { lat: 14.367, lon: 99.144, containedIn: 'Kanchanaburi' },
    paragraphs: [
      'Erawan National Park is the limestone waterfall most first-timers mean. Seven tiers. The lower three are busy by 10:00. The upper tiers are a hotter walk. Foreign adults pay 300 THB at the DNP booth. Thai tickets are less. Closed shoes help. The fish nibble. Carry water. Last entry is earlier than the gate close; be in a van from town by 08:00 if you want tier seven without a tour crush.',
      'Sai Yok National Park follows the Khwae Noi farther west: river, caves, and a less famous fall. It is a different morning, often paired with Hellfire Pass, not with Erawan. Nam Tok is the rail end when the line is open. Floods have shut the Tha Kilen to Nam Tok stretch before. Call SRT 1690 if the viaduct is your must.',
    ],
    portraits: [
      { title: 'Kanchanaburi', href: '/kanchanaburi', photo: '/photos/kanchanaburi.jpg' },
      { title: 'Bangkok to Kanchanaburi', href: '/get-there/bangkok-to-kanchanaburi', photo: '/photos/kanchanaburi.jpg' },
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { title: '5-day west plan', href: '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi', photo: '/photos/erawan.jpg' },
    ],
    affiliates: [
      stay('Kanchanaburi stays', 'Two nights', 'One night skips Erawan or skips the railway. Two nights does both.', stayLink('kanchanaburi'), '/photos/kanchanaburi.jpg'),
      klook('Erawan tickets and vans', 'From town', 'Useful if you do not want to charter. Self-drive still needs the 300 THB booth.', klookTickets('Erawan National Park'), '/photos/erawan.jpg'),
    ],
    faqs: [
      {
        q: 'Erawan as a Bangkok day trip?',
        a: 'Possible and a long one. You will rush the upper tiers. Sleep in Kanchanaburi and go at opening.',
      },
      {
        q: 'Sai Yok or Erawan if you have one morning?',
        a: 'Erawan. Sai Yok is the quieter add when you already have two nights west.',
      },
    ],
  },
  {
    path: '/chiang-mai/doi-inthanon',
    title: 'Doi Inthanon',
    description:
      'Thailand\'s highest peak, a national park day from Chiang Mai: the summit boardwalk, two chedis, and a 300 THB foreign fee.',
    lede:
      'Doi Inthanon is the high park day from Chiang Mai, known for the summit boardwalk and the twin chedis. It is a full day with a driver, not a scooter errand after lunch.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Chiang Mai', href: '/chiang-mai' },
      { name: 'Doi Inthanon', href: '/chiang-mai/doi-inthanon' },
    ],
    facts: [
      { label: 'Summit', value: '2,565 m; boardwalk and a small tower' },
      { label: 'Park fee', value: '300 THB foreign adult; 150 THB child' },
      { label: 'From the moat', value: 'About 1.5 to 2 hours each way' },
      { label: 'Hours', value: 'Gates about 05:30 to 18:00; check on arrival' },
    ],
    chips: ['Highest peak', '300 THB', 'Full day'],
    photo: '/photos/northern.jpg',
    geo: { lat: 18.588, lon: 98.487, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Doi Inthanon National Park is the highest ground in the country. The summit is a short boardwalk in cloud forest, often wet and 10 to 15 C cooler than the moat. The twin chedis (Naphamethinidon and Naphaphonphumisiri) sit below the top and take the tour vans. Wachirathan waterfall is the usual stop on the way down.',
      'Foreign adults pay 300 THB at the park booth. A hired car from Chiang Mai for the day often sits around 1,800 to 2,500 THB plus the tickets. Songthaews exist and then strand you. Do not scooter this as a first mountain ride. Haze in March and April can wipe the view. Start by 07:00 if you want the summit before the coaches.',
    ],
    portraits: [
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Northern week', href: '/itineraries/7-days-northern-thailand-loop', photo: '/photos/northern.jpg' },
      { title: 'Pai', href: '/pai', photo: '/photos/pai.jpg' },
    ],
    affiliates: [
      stay('Chiang Mai base', 'Old City or Nimman', 'Do the park as a day. Sleep in town.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      klook('Doi Inthanon day trips', 'With a driver', 'The honest version if you do not want to charter yourself.', klookTours('Doi Inthanon Chiang Mai'), '/photos/northern.jpg'),
    ],
    faqs: [
      {
        q: 'Can you combine Doi Inthanon and Pai?',
        a: 'Not on the same day. Pai is a mountain night on a different road. Pick one fork.',
      },
      {
        q: 'Is the summit worth it in rain?',
        a: 'The forest is still the forest. The view is not. Go anyway if the chedis and the cooler air are enough. Skip it in heavy haze.',
      },
    ],
  },
  {
    path: '/koh-samui/ang-thong-marine-park',
    title: 'Ang Thong Marine Park',
    description:
      'Ang Thong is the limestone park west of Samui: a viewpoint, a hidden lake, and a full-day boat. January to September is easier.',
    lede:
      'Ang Thong is the limestone island park you boat from Samui, known for a viewpoint and a turquoise lake. It is a full day. Book it when the Gulf is calm, not as a landing-day extra.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Koh Samui', href: '/koh-samui' },
      { name: 'Ang Thong', href: '/koh-samui/ang-thong-marine-park' },
    ],
    facts: [
      { label: 'Season', value: 'Easier January to September; May to August is the calmest, clearest sea' },
      { label: 'Park fee', value: 'About 300 THB foreign adult, often bundled in the tour' },
      { label: 'Boat day', value: 'About 8 hours door to door from Samui' },
      { label: 'From Phangan', value: 'Some boats; Samui still has more departures' },
    ],
    chips: ['Gulf park', 'Viewpoint', 'Full day'],
    photo: '/photos/koh-samui.jpg',
    geo: { lat: 9.62, lon: 99.67, containedIn: 'Gulf of Thailand' },
    paragraphs: [
      'Mu Ko Ang Thong is a cluster of limestone islands west of Samui. The usual day hits a viewpoint on Wua Talap, a snorkel stop, and the Emerald Lake (Thale Nai) on Koh Mae Ko. The climb is steep. The lake is a look, not a swim, on most tickets.',
      'Tours leave Samui in the morning and return late afternoon, about 1,500 to 2,500 THB including the park fee for many boats. Speedboats cost more and save a little time. October to December cancels more often. May to August is the calmest, clearest sea on this gulf. Do not book Ang Thong on the day you land USM, and do not book it the morning of a Phangan boat.',
    ],
    portraits: [
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Chaweng', href: '/koh-samui/chaweng', photo: '/photos/koh-samui.jpg' },
      { title: 'Gulf 10 days', href: '/itineraries/10-days-gulf-islands-samui-phangan-tao', photo: '/photos/koh-samui.jpg' },
      { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
    ],
    affiliates: [
      stay('Samui night before', 'East or north coast', 'Sleep on Samui. The park is a day boat, not a stay.', stayLink('koh-samui'), '/photos/koh-samui.jpg'),
      klook('Ang Thong tours', 'Full day', 'Morning boats. Confirm the lake climb is still open.', klookTours('Ang Thong marine park'), '/photos/koh-samui.jpg'),
    ],
    faqs: [
      {
        q: 'Ang Thong or Tao?',
        a: 'Ang Thong if you want a limestone day and you are based on Samui. Tao if you want a dive island and a night away. They are different trips.',
      },
      {
        q: 'Can you stay in the park?',
        a: 'Park bungalows exist and sell out. Most first-timers do the day boat. Check DNP if you want the night; do not assume a walk-up bed.',
      },
    ],
  },
];
