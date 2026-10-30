import { stayLink, stayAreaLink, flightLink, trainLink, transferLink, klookTours } from './partners';
import { hop, klook, stay, wave23Page } from './wave23-shared';
import type { Page } from './content';

export const WAVE23_F: Page[] = [
  wave23Page({
    path: '/itineraries/8-days-chiang-mai-rai-pai',
    title: '8 days in Chiang Mai, Chiang Rai, and Pai itinerary',
    crumb: '8 days Chiang Mai, Rai, and Pai',
    description:
      'Eight north days split Chiang Mai wats, a Green Bus to Chiang Rai, and a Pai canyon finish. Built for travellers who want the trio without a beach.',
    lede:
      'White Temple is 200 THB since 1 January 2026. Ride the Green Bus about 3.5 hours (about 301 THB coach or 422 THB VIP), and keep Route 1095 on its own day. Fits travellers who want the north trio.',
    facts: [
      ['Sleep', '3 Chiang Mai, 2 Chiang Rai, 2 Pai'],
      ['White Temple', '200 THB foreigners since 1 January 2026'],
      ['Green Bus', 'About 3.5 hours Chiang Mai to Chiang Rai'],
      ['Pai van', 'Route 1095, 3 to 4.5 hours'],
    ],
    chips: ['Two north forks', 'No coast', 'Van days'],
    photo: '/photos/chiang-rai.jpg',
    paragraphs: [
      'The north trio is moat wats, a White Temple morning, then a Pai canyon finish, with no beach. Start in [Chiang Mai](/chiang-mai) with three nights using [where to stay](/chiang-mai/where-to-stay). Dawn is [Old City](/chiang-mai/old-city) wats: Wat Chedi Luang is 50 THB. Add [Doi Suthep](/attractions/wat-phra-that-doi-suthep) at 30 THB plus a 60 to 100 THB songthaew if you leave at 07:00.',
      'Ride the [Green Bus](/get-there/chiang-mai-to-chiang-rai) for about 3.5 hours and sleep two nights in [Chiang Rai](/chiang-rai). The [White Temple day](/chiang-rai/white-temple-day) is 200 THB for foreigners since 1 January 2026. Return to Chiang Mai, then take the [Pai van](/get-there/chiang-mai-to-pai) and sleep two nights so Route 1095 is worth the bends. Leave the Andaman off this calendar.',
    ],
    days: [
      ['Land CNX', 'Old City or Nimman. No Route 1095 on landing day.', '/photos/chiang-mai.jpg'],
      ['Moat wats', 'Wat Phra Singh and Wat Chedi Luang (50 THB). Sunday is Ratchadamnoen.', '/photos/chiang-mai-old-city.jpg'],
      ['Doi Suthep', 'Leave 07:00. 30 THB plus songthaew 60 to 100 THB.', '/photos/doi-suthep.jpg'],
      ['Green Bus to Chiang Rai', 'About 3.5 hours. Sleep in town.', '/photos/northern.jpg'],
      ['White Temple morning', '200 THB. Blue Temple in town after.', '/photos/wat-phra-singh.jpg'],
      ['Back to CNX, van to Pai', 'Route 1095 takes 3 to 4.5 hours. Sleep in town.', '/photos/pai.jpg'],
      ['Pai canyon', 'Songthaew, not a first scooter on the bends.', '/photos/nimman.jpg'],
      ['Return CNX', 'Van back. Fly CNX. Same-day long-haul is tight.', '/photos/get-there.jpg'],
    ],
    sid: 'two-forks',
    stitle: 'City, temple town, then the ridge',
    sp: 'Pai and Chiang Rai both need a night. For a slower ten-day version see [slow north loop](/itineraries/10-days-north-loop-slow).',
    headers: ['Block', 'Sleep', '2026 clock or fee'],
    rows: [
      ['Nights 1 to 3', 'Chiang Mai', 'Suthep 30 THB; Chedi Luang 50 THB'],
      ['Nights 4 to 5', 'Chiang Rai', 'White Temple 200 THB; Green Bus 3.5 hours'],
      ['Nights 6 to 7', 'Pai', 'Route 1095 van 3 to 4.5 hours'],
    ],
    portraits: [
      { title: 'Chiang Mai stays', href: '/chiang-mai/where-to-stay', photo: '/photos/night-market-cm.jpg' },
      { title: 'White Temple day', href: '/chiang-rai/white-temple-day', photo: '/photos/blue-temple.jpg' },
      { title: 'Pai stays', href: '/pai/where-to-stay', photo: '/photos/baan-dam.jpg' },
      { title: 'Northern loop', href: '/itineraries/7-days-northern-thailand-loop', photo: '/photos/sukhothai.jpg' },
    ],
    affiliates: [
      stay('Chiang Mai first nights', 'Moat or Nimman', 'Three nights before the Green Bus.', stayLink('chiang-mai'), '/photos/resort-four-seasons-chiang-mai.jpg'),
      stay('Chiang Rai town', 'White Temple morning', 'Two nights in the city grid.', stayLink('chiang-rai'), '/photos/resort-anantara-chiang-mai.jpg'),
      hop('Bangkok to Chiang Mai', 'Trip.com', 'About 70 to 75 minutes to CNX.', flightLink('BKK', 'CNX'), '/photos/chiang-mai-airport.jpg', 'flights', 'Search flights'),
    ],
    faqs: [
      { q: 'Pai before Chiang Rai?', a: 'Either order works. Do the Green Bus and Route 1095 on separate days.' },
      { q: 'Add Inthanon?', a: 'Not on this eight-day spine. It is a full day at 300 THB from Chiang Mai.' },
      { q: 'Haze?', a: 'March and April can sit in the valley. November to February is the clearer window.' },
    ],
  }),
  wave23Page({
    path: '/itineraries/10-days-north-loop-slow',
    title: '10-day slow north loop: Chiang Mai, Pai, Chiang Rai',
    crumb: '10-day slow north loop',
    description:
      'A slow north loop gives extra nights in Chiang Mai, Pai, and Chiang Rai. Built for travellers who want buses, not a first scooter, and skip both Thai seas.',
    lede:
      'Three bases, no beach. Leave slack on Route 1095 and the Green Bus, and keep Inthanon or Mae Rim as the one hill add from Chiang Mai. Fits a slower north first trip.',
    facts: [
      ['Sleep', '4 Chiang Mai, 3 Pai, 2 Chiang Rai'],
      ['White Temple', '200 THB foreigners since 1 January 2026'],
      ['Pai', 'Route 1095 van 3 to 4.5 hours; two full Pai days'],
      ['Season', 'Cooler November to February'],
    ],
    chips: ['Slow vans', 'Buffer nights', 'No coast'],
    photo: '/photos/northern.jpg',
    paragraphs: [
      'The unhurried north loop adds buffer nights so Route 1095 and the Green Bus are not same-day rushes. It is the slower take on [8 days Mai, Rai, Pai](/itineraries/8-days-chiang-mai-rai-pai). Sleep four nights in [Chiang Mai](/chiang-mai) so Suthep, one walking street, and a rest day all fit. A 2026 songthaew to Suthep is still 60 to 100 THB each way.',
      'Give [Pai](/pai) three nights after the [Route 1095 van](/get-there/chiang-mai-to-pai). Return to Chiang Mai, then take the [Green Bus](/get-there/chiang-mai-to-chiang-rai) and sleep two nights for the 200 THB White Temple. Keep Phuket and Samui off this ten-day block.',
    ],
    days: [
      ['Land CNX', 'Old City. No ridge road.', '/photos/chiang-mai.jpg'],
      ['Moat dawn', 'Wat Chedi Luang 50 THB.', '/photos/chiang-mai-old-city.jpg'],
      ['Doi Suthep', '07:00 start. 30 THB.', '/photos/doi-suthep.jpg'],
      ['Walking street or Nimman', 'Sunday Ratchadamnoen or Saturday Wua Lai.', '/photos/night-market-cm.jpg'],
      ['Van to Pai', '3 to 4.5 hours. Sleep in town.', '/photos/pai.jpg'],
      ['Canyon day', 'Songthaew. No night ride.', '/photos/wat-phra-singh.jpg'],
      ['Pai rest', 'Hot springs or a cafe. Pack.', '/photos/nimman.jpg'],
      ['Back to CNX', 'Buffer night before the Green Bus.', '/photos/chiang-rai.jpg'],
      ['Chiang Rai', 'Green Bus about 3.5 hours.', '/photos/blue-temple.jpg'],
      ['White Temple, fly CEI or CNX', '200 THB. Exit from CEI if it saves a van.', '/photos/baan-dam.jpg'],
    ],
    sid: 'slow-north',
    stitle: 'Four city nights, then the two forks',
    sp: 'If you only have a week, use the [7-day northern loop](/itineraries/7-days-northern-thailand-loop) and drop Pai or Chiang Rai.',
    headers: ['Block', 'Sleep', 'Why the extra night'],
    rows: [
      ['Nights 1 to 4', 'Chiang Mai', 'Suthep plus a rest day'],
      ['Nights 5 to 7', 'Pai', 'Route 1095 is not a day trip'],
      ['Nights 8 to 9', 'Chiang Rai', 'Temple morning without a same-day bus'],
    ],
    portraits: [
      { title: 'Chiang Mai stays', href: '/chiang-mai/where-to-stay', photo: '/photos/sukhothai.jpg' },
      { title: 'Pai stays', href: '/pai/where-to-stay', photo: '/photos/resort-four-seasons-chiang-mai.jpg' },
      { title: 'Chiang Rai stays', href: '/chiang-rai/where-to-stay', photo: '/photos/resort-anantara-chiang-mai.jpg' },
      { title: 'When to go', href: '/plan/when-to-go', photo: '/photos/khao-lak.jpg' },
    ],
    affiliates: [
      stay('Chiang Mai slow start', 'Four nights', 'Lock the moat or Nimman before Sunday market.', stayLink('chiang-mai'), '/photos/thai-food-lanna.jpg'),
      stay('Pai three nights', 'After Route 1095', 'Two full days in town.', stayLink('pai'), '/photos/get-there.jpg'),
      hop('Bangkok to Chiang Mai', 'Trip.com', 'About 70 to 75 minutes.', flightLink('BKK', 'CNX'), '/photos/chiang-mai-airport.jpg', 'flights', 'Search flights'),
    ],
    faqs: [
      { q: 'Exit from Chiang Rai?', a: 'CEI works if the fare is fair. Many people van back to CNX.' },
      { q: 'Add Sukhothai?', a: 'Not on these ten days. Use the Sukhothai and Chiang Mai week instead.' },
      { q: 'March haze?', a: 'Views flatten. The wats still open. Book cafes, not ridge photos.' },
    ],
  }),
  wave23Page({
    path: '/itineraries/7-days-sukhothai-and-chiang-mai',
    title: '7 days in Sukhothai and Chiang Mai: ruin to moat',
    crumb: '7 days Sukhothai and Chiang Mai',
    description:
      'Seven days pair a Sukhothai dawn bicycle with Chiang Mai moat wats. Built for travellers who fly THS on Bangkok Airways, or use PHS as the one-hour fallback.',
    lede:
      'Sleep in Old Sukhothai beside the gate; new town is a short taxi if you land late. The central zone is 200 THB for foreigners, then four nights on the Chiang Mai moat.',
    facts: [
      ['Park', 'Central zone 200 THB foreigners, 06:30 to 19:30'],
      ['Fly', 'THS on Bangkok Airways; PHS is east, then a van west'],
      ['Sleep', '2 Old Sukhothai, 4 Chiang Mai'],
      ['Suthep', '30 THB plus songthaew 60 to 100 THB'],
    ],
    chips: ['THS first', 'Dawn bicycle', 'Then CNX'],
    photo: '/photos/sukhothai.jpg',
    paragraphs: [
      'Old Sukhothai\'s dawn bicycle and Chiang Mai\'s moat wats share one ruin-to-city week. Sleep two nights in Old [Sukhothai](/sukhothai) at the [historical park](/sukhothai/historical-park) gate. Foreigners pay 200 THB for the central zone. Rent a bicycle at opening. Bangkok Airways flies into Sukhothai Airport (THS) when the schedule fits; if you land at Phitsanulok (PHS), the city is about 70 km east of the park, and the road west takes about one hour by car or 1 to 1.5 hours by bus or van via new Sukhothai.',
      'Move to [Chiang Mai](/chiang-mai) for four nights. Use [where to stay](/chiang-mai/where-to-stay) and keep [Doi Suthep](/attractions/wat-phra-that-doi-suthep) as one morning. Si Satchanalai is a second Sukhothai dawn if you stretch the ruin block; see [day trips](/sukhothai/day-trips).',
    ],
    days: [
      ['Land THS or PHS', 'Sleep in Old Sukhothai beside the park gate. New town is a short taxi if you land after dark.', '/photos/sukhothai-lake.jpg'],
      ['Central zone bicycle', '200 THB. 06:30 open. Wat Mahathat first.', '/photos/wat-si-chum.jpg'],
      ['Move to Chiang Mai', 'Flight or van. Sleep Old City or Nimman.', '/photos/chiang-mai-old-city.jpg'],
      ['Moat wats', 'Chedi Luang 50 THB. Sunday walking street if it lands.', '/photos/wat-phra-singh.jpg'],
      ['Doi Suthep', '07:00. 30 THB plus songthaew.', '/photos/doi-suthep.jpg'],
      ['Nimman or Mae Rim', 'Cafe day or a terrace lunch. No Pai van.', '/photos/nimman.jpg'],
      ['Fly CNX', 'Airport car. Same-day long-haul is tight.', '/photos/get-there.jpg'],
    ],
    sid: 'ruin-moat',
    stitle: 'Park dawn first, then the moat',
    sp: 'For two ruin cities without Chiang Mai, use [8 days central ruins](/itineraries/8-days-central-ruins). Ayutthaya is the Bangkok train day, not this week.',
    headers: ['Block', 'Sleep', '2026 fee'],
    rows: [
      ['Nights 1 to 2', 'Old Sukhothai', 'Central zone 200 THB'],
      ['Nights 3 to 6', 'Chiang Mai', 'Suthep 30 THB; Chedi Luang 50 THB'],
    ],
    portraits: [
      { title: 'Sukhothai park', href: '/sukhothai/historical-park', photo: '/photos/wat-sa-si.jpg' },
      { title: 'Sukhothai stays', href: '/sukhothai/where-to-stay', photo: '/photos/si-satchanalai.jpg' },
      { title: 'Chiang Mai stays', href: '/chiang-mai/where-to-stay', photo: '/photos/tha-phae.jpg' },
      { title: 'Getting around Sukhothai', href: '/sukhothai/getting-around', photo: '/photos/northern.jpg' },
    ],
    affiliates: [
      stay('Old Sukhothai gate', 'Dawn bicycle', 'Two nights at Muang Kao.', stayLink('sukhothai'), '/photos/sukhothai-mahathat.jpg'),
      stay('Chiang Mai finish', 'Four nights', 'Moat or Nimman after the ruins.', stayLink('chiang-mai'), '/photos/resort-four-seasons-chiang-mai.jpg'),
      hop('Bangkok to Chiang Mai', 'Trip.com', 'About 70 to 75 minutes to Chiang Mai (CNX) for the second city.', flightLink('BKK', 'CNX'), '/photos/chiang-mai-airport.jpg', 'flights', 'Search flights'),
    ],
    faqs: [
      { q: 'Is there a flight to Sukhothai?', a: 'Yes. Bangkok Airways uses Sukhothai Airport (THS). Phitsanulok (PHS) is the cheaper airport when THS is sold out; Old Sukhothai is about 70 km / about one hour from Phitsanulok.' },
      { q: 'Day-trip Sukhothai from Bangkok?', a: 'No. Sleep at the park gate.' },
      { q: 'Add Pai?', a: 'Not on seven days. Route 1095 needs two nights of its own.' },
    ],
  }),
  wave23Page({
    path: '/itineraries/4-days-kanchanaburi-erawan',
    title: '4 days in Kanchanaburi and Erawan: river and falls',
    crumb: '4 days Kanchanaburi and Erawan',
    description:
      'Four river days put Kanchanaburi nights beside the Kwai and one 300 THB Erawan day. Built for travellers who want falls after Bangkok, not a second ruin city.',
    lede:
      'Train or van west, sleep the river, and walk Erawan early. Keep Ayutthaya on a different daylight block so both parks get a full morning.',
    facts: [
      ['Train', 'Thonburi (Bangkok Noi), not Krung Thep Aphiwat'],
      ['Erawan', '300 THB foreign adult; seven tiers; about 1.5 hours'],
      ['Sleep', 'Three nights in Kanchanaburi town'],
      ['Bridge', 'Morning in town with the railway centre'],
    ],
    chips: ['Thonburi train', '300 THB Erawan', 'Two stories'],
    photo: '/photos/kanchanaburi.jpg',
    paragraphs: [
      'River-town history plus one waterfall day is the west-of-Bangkok plan. Sleep in [Kanchanaburi](/kanchanaburi) using [where to stay](/kanchanaburi/where-to-stay). The [River Kwai](/kanchanaburi/river-kwai) morning is the steel bridge plus the Thailand-Burma Railway Centre, not a ten-minute selfie. Ordinary trains still leave Thonburi; see [Bangkok to Kanchanaburi](/get-there/bangkok-to-kanchanaburi).',
      '[Erawan](/kanchanaburi/erawan-and-sai-yok) is a separate day: 300 THB for a foreign adult, seven tiers, 65 to 70 km, bus 8170 about 1.5 hours. Turn around near 15:30 if you want tier 7. Leave [Ayutthaya](/ayutthaya) off this van. Hellfire Pass is a third road if you stretch the week.',
    ],
    days: [
      ['Thonburi train', 'Walk from MRT Bang Khun Non. Sleep in town.', '/photos/bts.jpg'],
      ['Bridge and cemetery', 'Railway centre first. Bridge at dusk if you want the photo.', '/photos/riverside.jpg'],
      ['Erawan Falls', '300 THB. Seven tiers. 15:30 turnaround.', '/photos/erawan.jpg'],
      ['Return Bangkok', 'Train or van. Do not add Ayutthaya this afternoon.', '/photos/sukhumvit.jpg'],
    ],
    sid: 'kwai-falls',
    stitle: 'Town story, then the waterfall',
    sp: 'For ruins plus this river, use [5 days Bangkok, Ayutthaya, Kanchanaburi](/itineraries/5-days-bangkok-ayutthaya-kanchanaburi).',
    headers: ['Block', 'Sleep', '2026 fee or clock'],
    rows: [
      ['Nights 1 to 3', 'Kanchanaburi town', 'Thonburi train in'],
      ['Day 3', 'Same hotel', 'Erawan 300 THB; 65 to 70 km'],
    ],
    portraits: [
      { title: 'River Kwai', href: '/kanchanaburi/river-kwai', photo: '/photos/get-there.jpg' },
      { title: 'Erawan and Sai Yok', href: '/kanchanaburi/erawan-and-sai-yok', photo: '/photos/haew-suwat.jpg' },
      { title: 'Where to stay', href: '/kanchanaburi/where-to-stay', photo: '/photos/resort.jpg' },
      { title: 'Bangkok to Kanchanaburi', href: '/get-there/bangkok-to-kanchanaburi', photo: '/photos/jim-thompson.jpg' },
    ],
    affiliates: [
      stay('Kanchanaburi town', 'Three nights', 'Bridge plus Erawan without a same-day rush.', stayLink('kanchanaburi'), '/photos/death-railway.jpg'),
      klook('Erawan vans', 'Tours', 'Check whether the 300 THB park ticket is included in the tour price.', klookTours('Erawan Falls'), '/photos/erawan-tiers.jpg'),
    ],
    faqs: [
      { q: 'Bang Sue or Thonburi?', a: 'Thonburi (Bangkok Noi). Bang Sue is the first-timer mistake.' },
      { q: 'Same day as Ayutthaya?', a: 'No. Different rail, different day.' },
      { q: 'Swim at Erawan?', a: 'When the water is clear. Parks can close swimming after heavy rain. Call 034 574 222.' },
    ],
  }),
  wave23Page({
    path: '/itineraries/6-days-bangkok-and-pattaya',
    title: '6 days in Bangkok and Pattaya: city then Jomtien',
    crumb: '6 days Bangkok and Pattaya',
    description:
      'Six days put Bangkok tickets first, then Jomtien sand south of Pattaya. Built for travellers who want a Gulf beach without a Samui airfare.',
    lede:
      'Keep Walking Street optional. Sleep Jomtien if you came to swim, and use the 300 THB-class day boats to Koh Larn only if the sea is flat.',
    facts: [
      ['Bangkok tickets', 'Palace 500 THB, Wat Pho 300 THB, Wat Arun 200 THB'],
      ['Road', '1.5 to 2.5 hours; Ekkamai buses'],
      ['Sleep', '3 Bangkok, 2 Jomtien'],
      ['Koh Larn', 'Bali Hai ferry 30 to 40 THB, about 45 minutes'],
    ],
    chips: ['BTS then Jomtien', 'Skip Walking Street', 'One ferry'],
    photo: '/photos/jomtien.jpg',
    paragraphs: [
      'Bangkok\'s ticketed river morning and Jomtien sand sit on one Gulf week that skips a Samui airfare. Sleep three nights on [Sukhumvit](/bangkok/where-to-stay) so the [old-city river temples](/bangkok/old-city-rattanakosin) happen before the 1.5 to 2.5 hour Ekkamai hop; a 2026 BTS tap is 17 to 62 THB.',
      'Move to [Jomtien](/pattaya/jomtien) for two nights using [Pattaya where to stay](/pattaya/where-to-stay). [Koh Larn](/pattaya/koh-larn) is a morning from Bali Hai if you want an island swim. Leave [Hua Hin](/hua-hin) for another week; they are different gulfs.',
    ],
    days: [
      ['Rattanakosin', 'Palace 500 THB at 08:30. Wat Pho and Wat Arun after.', '/photos/grand-palace.jpg'],
      ['Market or food night', 'Chatuchak or Yaowarat. Sleep Sukhumvit.', '/photos/yaowarat.jpg'],
      ['Buffer Bangkok', 'Jim Thompson or Lumphini. Pack for Ekkamai.', '/photos/lumphini.jpg'],
      ['Road to Jomtien', '1.5 to 2.5 hours. Sleep south of Walking Street.', '/photos/pattaya.jpg'],
      ['Koh Larn or swim', 'Ferry 30 to 40 THB. Back the same afternoon.', '/photos/koh-larn.jpg'],
      ['Return Bangkok or BKK', 'Friday traffic can add an hour.', '/photos/bts.jpg'],
    ],
    sid: 'city-gulf',
    stitle: 'Tickets first, then one swim coast',
    sp: 'Walking Street is optional after dark if that is why you came. Families should stay in Jomtien. For a quieter train beach use [Bangkok and Hua Hin](/itineraries/7-days-bangkok-and-hua-hin-kids).',
    headers: ['Block', 'Sleep', '2026 clock'],
    rows: [
      ['Nights 1 to 3', 'Sukhumvit', 'BTS 17 to 62 THB'],
      ['Nights 4 to 5', 'Jomtien', 'Koh Larn ferry 30 to 40 THB'],
    ],
    portraits: [
      { title: 'Bangkok stays', href: '/bangkok/where-to-stay', photo: '/photos/sukhumvit.jpg' },
      { title: 'Jomtien', href: '/pattaya/jomtien', photo: '/photos/wongamat.jpg' },
      { title: 'Koh Larn', href: '/pattaya/koh-larn', photo: '/photos/sanctuary-truth.jpg' },
      { title: 'Pattaya stays', href: '/pattaya/where-to-stay', photo: '/photos/nong-nooch.jpg' },
    ],
    affiliates: [
      stay('Bangkok first nights', 'BTS hotel', 'Three nights before the east-gulf hop.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      stay('Jomtien swim nights', 'South of the strip', 'Two nights if you came to get in the water.', stayAreaLink('jomtien'), '/photos/walking-street-pattaya.jpg'),
      hop('Airport car', 'Trip.com', 'BKK to the first hotel. A 2026 van is often 1,200 to 2,000 THB.', transferLink('BKK'), '/photos/suvarnabhumi-arrivals.jpg', 'flights', 'Search transfers'),
    ],
    faqs: [
      { q: 'Walking Street or Jomtien?', a: 'Jomtien to swim. Central Pattaya only if the strip is the stay.' },
      { q: 'Add Hua Hin?', a: 'Not on the same six days. Different gulf, different van.' },
      { q: 'Sanctuary of Truth same morning as Koh Larn?', a: 'No. The island ferry already fills a day.' },
    ],
  }),
  wave23Page({
    path: '/itineraries/8-days-central-ruins',
    title: '8 days in central ruins: Ayutthaya and Sukhothai itinerary',
    crumb: '8 days central ruins',
    description:
      'An eight-day central-plain week tickets the Grand Palace, rides the one-hour Ayutthaya train, then takes a Sukhothai dawn ride. Built for travellers who want two parks and no beach.',
    lede:
      'Bangkok first, Ayutthaya second, Old Sukhothai third. THS or PHS is the ruin airport; Sukhothai is not a Bangkok day trip.',
    facts: [
      ['Ayutthaya', '80 THB per site or 300 THB combo; train about one hour'],
      ['Sukhothai', 'Central zone 200 THB; 06:30 bicycle'],
      ['Fly', 'THS first; PHS is east, then a van west'],
      ['Sleep', '2 Bangkok, 2 Ayutthaya or day-trip, 3 Old Sukhothai'],
    ],
    chips: ['Two UNESCO parks', 'THS or PHS', 'No beach'],
    photo: '/photos/ayutthaya.jpg',
    paragraphs: [
      'The Grand Palace, Ayutthaya\'s brick temples, and a Sukhothai dawn ride make the two-park week with no beach. Start with two [Bangkok](/bangkok) nights and the [Ayutthaya train](/get-there/bangkok-to-ayutthaya). Paid sites are 80 THB or a 300 THB combo. Overnight in [Ayutthaya](/ayutthaya) only if dawn at the bricks is the point; see [from Bangkok](/ayutthaya/from-bangkok).',
      'Fly Bangkok Airways into Sukhothai Airport (THS) when it fits, or land Phitsanulok (PHS) about one hour east and take a van west to the park. Sleep three nights in Old [Sukhothai](/sukhothai) for the 200 THB central zone and an optional Si Satchanalai morning. Leave Kanchanaburi and Chiang Mai off this spine.',
    ],
    days: [
      ['Bangkok landing', 'No ruin day. Sleep Sukhumvit.', '/photos/sukhumvit.jpg'],
      ['Ayutthaya train', 'About one hour. 80 or 300 THB.', '/photos/wat-mahathat-ayu.jpg'],
      ['Second ruin morning or buffer', 'Overnight only for dawn. Else back to Bangkok.', '/photos/wat-phra-si-sanphet.jpg'],
      ['Fly THS or PHS', 'Sleep in Old Sukhothai beside the gate so the 06:30 bicycle is a walk.', '/photos/sukhothai.jpg'],
      ['Central zone bicycle', '200 THB. 06:30 open.', '/photos/wat-si-chum.jpg'],
      ['Si Satchanalai or extra zones', 'Second UNESCO morning north.', '/photos/si-satchanalai.jpg'],
      ['Park rest', 'Old-town walk. Pack.', '/photos/northern.jpg'],
      ['Exit via PHS or BKK', 'Not a same-day Ayutthaya add.', '/photos/get-there.jpg'],
    ],
    sid: 'two-parks',
    stitle: 'Train ruins, then the bicycle park',
    sp: 'Chiang Mai after Sukhothai is the [ruin to moat](/itineraries/7-days-sukhothai-and-chiang-mai) week. This page stays with the two parks.',
    headers: ['Block', 'Sleep', '2026 ticket'],
    rows: [
      ['Days 1 to 3', 'Bangkok or Ayutthaya', '80 THB or 300 THB combo'],
      ['Days 4 to 7', 'Old Sukhothai', 'Central zone 200 THB'],
    ],
    portraits: [
      { title: 'Ayutthaya park', href: '/ayutthaya/historical-park', photo: '/photos/wat-ratchaburana.jpg' },
      { title: 'Sukhothai park', href: '/sukhothai/historical-park', photo: '/photos/wat-sa-si.jpg' },
      { title: 'Sukhothai stays', href: '/sukhothai/where-to-stay', photo: '/photos/sukhothai-lake.jpg' },
      { title: 'Bangkok to Ayutthaya', href: '/get-there/bangkok-to-ayutthaya', photo: '/photos/riverside.jpg' },
    ],
    affiliates: [
      stay('Bangkok start', 'BTS hotel', 'Two nights before the northbound train.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      stay('Old Sukhothai', 'Dawn bicycle', 'Three nights at the gate.', stayLink('sukhothai'), '/photos/sukhothai-mahathat.jpg'),
      hop('Ayutthaya trains', 'Trip.com', 'About one hour from Krung Thep Aphiwat.', trainLink('Bangkok', 'Ayutthaya'), '/photos/bang-pa-in.jpg', 'train', 'Search trains'),
    ],
    faqs: [
      { q: 'THS or PHS?', a: 'THS on Bangkok Airways when it fits. PHS is east of the park; the van into Old Sukhothai runs west.' },
      { q: 'Add Erawan?', a: 'No. That train leaves Thonburi and is a different week.' },
      { q: 'One park only?', a: 'Ayutthaya if you stay in Bangkok. Sukhothai if you will sleep out of the capital.' },
    ],
  }),
];
