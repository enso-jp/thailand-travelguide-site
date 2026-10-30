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

export const WAVE12_ITINERARY_PAGES: Page[] = [
  {
    path: '/itineraries/3-days-bangkok-stopover',
    title: '3 days in Bangkok: first-timer stopover itinerary',
    description:
      'A 3-day Bangkok stopover is known for the Rattanakosin river loop, one market day, and a skyline night. Fits first-timers with 72 hours between long-hauls.',
    lede:
      'Known for three compact Bangkok days: royal river wats, one market plus Jim Thompson House, then a canal walk or rooftop. Fits first-timers who land BKK or DMK with 72 hours, not a week.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '3 days Bangkok stopover', href: '/itineraries/3-days-bangkok-stopover' },
    ],
    facts: [
      { label: 'Day 1 tickets', value: 'Palace 500 THB, Wat Pho 300 THB, Wat Arun 200 THB' },
      { label: 'Gate and river', value: 'Mani Noppharat at 08:30; Tha Tien ferry 5 THB' },
      { label: 'Day 2 market', value: 'Chatuchak Sat-Sun; Or Tor Kor daily; MRT Kamphaeng Phet' },
      { label: 'Night view', value: 'Mahanakhon SkyWalk or Octave at Soi 57, BTS Thong Lo Exit 3' },
    ],
    chips: ['72-hour loop', 'Rattanakosin', 'One rooftop'],
    photo: '/photos/old-city.jpg',
    paragraphs: [
      'A Bangkok stopover is known for one royal river morning, one market day, and one skyline night. Sleep Sukhumvit for the BTS or riverside for boats. Day 1 stays in [Rattanakosin](/bangkok/old-city-rattanakosin): Grand Palace and Wat Phra Kaew 500 THB via Mani Noppharat Gate at 08:30, [Wat Pho](/attractions/wat-pho) 300 THB, then the Tha Tien crossing to [Wat Arun](/attractions/wat-arun) at 200 THB plus the 5 THB ferry. Dinner is Wang Lang or [Yaowarat](/thai-food/yaowarat-chinatown-food-walk) via MRT Wat Mangkon Exit 1.',
      'Day 2 is [Chatuchak](/attractions/chatuchak-weekend-market) on Saturday or Sunday, or [Or Tor Kor](/thai-food/or-tor-kor-and-bangkok-fresh-markets) any day, both at MRT Kamphaeng Phet Exits 2 and 3. Add Jim Thompson House on Soi Kasemsan 2 (BTS National Stadium) in the afternoon. Night food is the [Banthat Thong](/thai-food/banthat-thong-road-food-strip) strip. Day 3 is Khlong Lat Mayom on a weekend morning, or a [Talat Noi](/thai-food/wang-lang-and-talat-noi) walk, then Mahanakhon SkyWalk or Octave at Bangkok Marriott Hotel Sukhumvit, Sukhumvit Soi 57, BTS Thong Lo Exit 3. A 2026 BTS tap is 17 to 62 THB.',
    ],
    days: [
      {
        n: 1,
        title: 'Rattanakosin royal river loop',
        body: 'Mani Noppharat Gate at 08:30 (500 THB), Wat Pho (300 THB), Tha Tien to Wat Arun (200 THB plus 5 THB ferry). Dinner at Wang Lang or Yaowarat via MRT Wat Mangkon Exit 1.',
        photo: '/photos/old-city.jpg',
      },
      {
        n: 2,
        title: 'Market, Jim Thompson, Banthat Thong',
        body: 'Chatuchak Weekend Market Saturday or Sunday, or Or Tor Kor any day, at MRT Kamphaeng Phet Exit 2 or 3. Jim Thompson House after. Banthat Thong for dinner.',
        photo: '/photos/siam.jpg',
      },
      {
        n: 3,
        title: 'Canal or Talat Noi, then a roof',
        body: 'Khlong Lat Mayom on a weekend, or Talat Noi lanes on a weekday. Close with Mahanakhon SkyWalk or Octave at Soi 57 (BTS Thong Lo Exit 3). Airport car for the long-haul.',
        photo: '/photos/riverside.jpg',
      },
    ],
    sections: [
      {
        id: 'who-it-fits',
        title: 'Who this 72-hour loop fits',
        paragraphs: [
          'Fits a first Bangkok landing with two full days and one exit morning. Drop Chatuchak if you land Monday to Friday and use Or Tor Kor instead. Drop the rooftop if dress code or heat wins. For a longer city-plus-north week, use [first week](/itineraries/first-week-7-days). Skyline dress rules sit on [rooftop bars](/thai-food/bangkok-rooftop-bars-and-river-dining).',
        ],
        table: {
          headers: ['Block', 'Known for', '2026 clock or fee'],
          rows: [
            ['Day 1 river wats', 'Palace, Wat Pho, Wat Arun', '500 / 300 / 200 THB; ferry 5 THB'],
            ['Day 2 market', 'Chatuchak or Or Tor Kor, then Jim Thompson', 'MRT Kamphaeng Phet Exit 2 or 3'],
            ['Day 2 night', 'Banthat Thong food strip', 'Walkable from Sam Yan or a short Grab'],
            ['Day 3 close', 'Khlong Lat Mayom, Talat Noi, or a roof', 'Octave: Soi 57, BTS Thong Lo Exit 3'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Grand Palace', href: '/attractions/grand-palace-and-wat-phra-kaew', photo: '/photos/old-city.jpg' },
      { title: 'Chatuchak', href: '/attractions/chatuchak-weekend-market', photo: '/photos/bangkok.jpg' },
      { title: 'Rooftop bars', href: '/thai-food/bangkok-rooftop-bars-and-river-dining', photo: '/photos/nightlife.jpg' },
      { title: 'First week', href: '/itineraries/first-week-7-days', photo: '/photos/sukhumvit.jpg' },
    ],
    affiliates: [
      stay('Bangkok stopover nights', 'Sukhumvit or riverside', 'Two or three nights near a BTS station or a river pier.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      {
        title: 'Airport car',
        kicker: 'Trip.com',
        body: 'Book BKK or DMK to the hotel. A 2026 hotel van is often 1,200 to 2,000 THB.',
        href: transferLink('BKK'),
        cta: 'Search transfers',
        photo: '/photos/bts.jpg',
        partner: 'flights',
      },
      klook('Palace and SkyWalk tickets', 'Tickets', 'Timed palace or Mahanakhon tickets beat a midday queue.', klookTickets('Grand Palace Bangkok'), '/photos/old-city.jpg'),
    ],
    faqs: [
      {
        q: 'Can you do Chatuchak on a weekday?',
        a: 'No. Chatuchak Weekend Market runs Saturday and Sunday. Use Or Tor Kor at the same MRT on Monday to Friday.',
      },
      {
        q: 'Palace first or Wat Pho first?',
        a: 'Palace at 08:30 via Mani Noppharat Gate (500 THB). Walk south to Wat Pho (300 THB), then the Tha Tien ferry to Wat Arun (200 THB).',
      },
      {
        q: 'Octave or Mahanakhon for the last night?',
        a: 'Octave if you want a no-cover drink at Soi 57. Mahanakhon SkyWalk if you want a ticketed deck. Vertigo and Moon Bar stay closed until 2 December 2026.',
      },
    ],
  },
  {
    path: '/itineraries/5-days-chiang-mai-and-chiang-rai',
    title: '5 days in Chiang Mai and Chiang Rai: northern culture and mountains',
    description:
      'Five northern days are known for 3 Chiang Mai nights plus a Chiang Rai temple loop. Fits travellers who want Lanna wats, khao soi, and ridges, not Highway 1095.',
    lede:
      'Known for Old City wats, a 07:00 Doi Suthep run, Khao Soi Mae Sai, and a White, Blue, and Black House day. Fits first north trips that skip the Pai van.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '5 days Chiang Mai and Chiang Rai', href: '/itineraries/5-days-chiang-mai-and-chiang-rai' },
    ],
    facts: [
      { label: 'Sleep', value: '3 nights Chiang Mai Old City or Nimman; 2 nights Chiang Rai or a day van' },
      { label: 'Doi Suthep', value: 'Leave 07:00; 30 THB plus songthaew 60 to 100 THB each way' },
      { label: 'Khao soi', value: 'Mae Sai 55 to 90 THB; Ratchaphuek Rd; Mon to Sat 08:00 to 16:00' },
      { label: 'Chiang Rai loop', value: 'White Temple 100 THB; Blue Temple free; Baan Dam 80 THB' },
    ],
    chips: ['3 plus 2 nights', 'Doi Suthep 07:00', 'GreenBus VIP'],
    photo: '/photos/chiang-mai.jpg',
    paragraphs: [
      'Five north days are known for a Chiang Mai base and one Chiang Rai temple circuit. Sleep three nights in the [Old City](/chiang-mai/old-city) or Nimman. Walk Wat Chedi Luang and Wat Phra Singh. Leave at 07:00 for [Doi Suthep](/attractions/wat-phra-that-doi-suthep) (30 THB, songthaew 60 to 100 THB each way). Lunch at Khao Soi Mae Sai on Ratchaphuek Road: 55 to 90 THB, Monday to Saturday 08:00 to 16:00, closed Sunday. Book an [ethical elephant half-day](/attractions/chiang-mai-ethical-elephant-sanctuaries). Saturday is Wua Lai Walking Street. Sunday is Ratchadamnoen Walking Street.',
      'Use two nights in [Chiang Rai](/chiang-rai), or one full-day GreenBus VIP or private van if you refuse a second hotel. The [White Temple](/attractions/white-temple-wat-rong-khun-and-blue-temple) (Wat Rong Khun) is 100 THB, the Blue Temple (Wat Rong Suea Ten) is free, and Baan Dam (Black House) is 80 THB. Add Mae Salong or Doi Chang if tea and coffee ridges are the point. GreenBus VIP from Arcade Terminal 3 takes about 3 to 3.5 hours. The BKK-CNX flight is about 70 minutes. For the Pai road instead, use the [7-day northern loop](/itineraries/7-days-northern-thailand-loop).',
    ],
    days: [
      {
        n: 1,
        title: 'Chiang Mai Old City',
        body: 'Fly CNX about 70 minutes from Bangkok. Sleep inside the moat or in Nimman. Wat Chedi Luang and Wat Phra Singh. Temple booths 20 to 50 THB cash.',
        photo: '/photos/chiang-mai-old-city.jpg',
      },
      {
        n: 2,
        title: 'Doi Suthep and khao soi',
        body: 'Leave at 07:00 for Doi Suthep. Lunch at Khao Soi Mae Sai (55 to 90 THB, Mon to Sat 08:00 to 16:00). Nimman after dark.',
        photo: '/photos/northern.jpg',
      },
      {
        n: 3,
        title: 'Elephant morning or walking street',
        body: 'Ethical half-day sanctuary. Saturday Wua Lai or Sunday Ratchadamnoen if the calendar lines up. Pack for the Chiang Rai hop.',
        photo: '/photos/chiang-mai.jpg',
      },
      {
        n: 4,
        title: 'GreenBus or van to Chiang Rai',
        body: 'GreenBus VIP from Arcade Terminal 3, about 3 to 3.5 hours. White Temple 100 THB, Blue Temple free. Sleep in town or turn it as a long day.',
        photo: '/photos/chiang-rai.jpg',
      },
      {
        n: 5,
        title: 'Baan Dam, tea ridge, then out',
        body: 'Baan Dam 80 THB, or Mae Salong / Doi Chang for tea and coffee. Fly CEI or bus back to CNX.',
        photo: '/photos/chiang-rai.jpg',
      },
    ],
    sections: [
      {
        id: 'split',
        title: 'Three Chiang Mai nights, then Chiang Rai',
        paragraphs: [
          'Keep Pai off this spine. The [Chiang Mai to Chiang Rai](/get-there/chiang-mai-to-chiang-rai) hop is a coach or a booked van, not a scooter first week. Overnight in Chiang Rai if you want the White Temple at opening. Day-trip if you only want the three temple gates.',
        ],
        table: {
          headers: ['Stop', 'Known for', '2026 fee or clock'],
          rows: [
            ['Old City wats', 'Chedi Luang, Phra Singh', 'Booths 20 to 50 THB'],
            ['Doi Suthep', '07:00 hill wat', '30 THB; songthaew 60 to 100 THB'],
            ['Khao Soi Mae Sai', 'Lunch curry noodle', '55 to 90 THB; closed Sunday'],
            ['White / Blue / Baan Dam', 'Chiang Rai art wats and Black House', '100 THB / free / 80 THB'],
            ['Mae Salong or Doi Chang', 'Tea and coffee ridges', 'Add only if you have a fifth daylight block'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Chiang Mai Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Doi Suthep', href: '/attractions/wat-phra-that-doi-suthep', photo: '/photos/northern.jpg' },
      { title: 'White and Blue Temples', href: '/attractions/white-temple-wat-rong-khun-and-blue-temple', photo: '/photos/chiang-rai.jpg' },
      { title: 'Northern 7-day loop', href: '/itineraries/7-days-northern-thailand-loop', photo: '/photos/pai.jpg' },
    ],
    affiliates: [
      stay('Chiang Mai block', 'Old City or Nimman', 'Three nights before the Chiang Rai hop.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      stay('Chiang Rai nights', 'Town', 'Two nights if dawn at the White Temple matters. Skip if you only want a van day.', stayLink('chiang-rai'), '/photos/chiang-rai.jpg'),
      {
        title: 'Bangkok to Chiang Mai',
        kicker: 'Trip.com',
        body: 'BKK or DMK to CNX, about 70 minutes.',
        href: flightLink('BKK', 'CNX'),
        cta: 'Search flights',
        photo: '/photos/chiang-mai.jpg',
        partner: 'flights',
      },
      klook('White Temple and sanctuary days', 'Tours', 'Name the sanctuary (no riding). Confirm White, Blue, and Baan Dam on the van.', klookTours('Chiang Rai White Temple'), '/photos/chiang-rai.jpg'),
    ],
    faqs: [
      {
        q: 'Day trip or overnight in Chiang Rai?',
        a: 'Overnight if you want Wat Rong Khun at 08:00. A GreenBus or private van day still covers White, Blue, and Baan Dam if you leave Arcade early.',
      },
      {
        q: 'Can you add Pai on these five days?',
        a: 'No. Highway 1095 needs its own night. Use the 7-day northern loop if the ridge road is why you came.',
      },
      {
        q: 'When is Khao Soi Mae Sai open?',
        a: 'Monday to Saturday 08:00 to 16:00 on Ratchaphuek Road. Closed Sunday. Bowls are 55 to 90 THB.',
      },
    ],
  },
  {
    path: '/itineraries/7-days-phuket-krabi-phi-phi',
    title: '7 days in Phuket, Krabi, and Phi Phi',
    description:
      'Seven Andaman days are known for Phuket west-coast nights, a Phi Phi dawn at Maya Bay, and Railay or Ao Nang. Fits November to April only.',
    lede:
      'Known for a dry-season Andaman split: 3 Phuket west-coast nights, 1 or 2 Phi Phi Don nights, then Ao Nang or Railay. Fits travellers flying HKT in and KBV out from November to April.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '7 days Phuket Krabi Phi Phi', href: '/itineraries/7-days-phuket-krabi-phi-phi' },
    ],
    facts: [
      { label: 'Season', value: 'November to April dry Andaman; skip May to October swell' },
      { label: 'Sleep', value: '3 nights Kata, Kamala, or Bang Tao; 1 or 2 Phi Phi; 2 Ao Nang or Railay' },
      { label: 'Phi Phi park', value: '400 THB foreign adult; 06:30 longtail before tour boats' },
      { label: 'Airports', value: 'In HKT (Rassada boats); out KBV' },
    ],
    chips: ['Andaman winter', 'Rassada boats', 'Out KBV'],
    photo: '/photos/phuket.jpg',
    paragraphs: [
      'Seven Andaman days are known for one Phuket west-coast base, a Phi Phi Don night, and a Krabi cliff finish. Sleep three nights in Kata, Kamala, or Bang Tao, not Patong as a first beach. Walk Phuket Old Town on Thalang Road. Book a [Phang Nga Bay](/attractions/phang-nga-bay-and-james-bond-island) sunrise boat from Phuket. Passenger boats use Rassada Pier. See [Phuket to Krabi and Phi Phi](/get-there/phuket-to-krabi-phi-phi).',
      'Ferry or speedboat to [Phi Phi](/attractions/phi-phi-islands-and-maya-bay) Don. Sleep one or two nights on Long Beach or Laem Tong. Charter a 06:30 longtail to Maya Bay before the tour boats; the marine park fee is 400 THB and swimming in Maya Bay stays banned. Finish with two nights in Ao Nang or [Railay](/attractions/railay-beach-and-phra-nang-cave) for Phra Nang Cave and a Hong Islands day. Fly out of Krabi Airport (KBV). May to October is the wrong sea. For a longer Andaman hop, use [2 weeks Andaman](/itineraries/2-weeks-andaman-island-hopping).',
    ],
    days: [
      {
        n: 1,
        title: 'Land HKT, west-coast base',
        body: 'No boat on landing day. Sleep Kata, Kamala, or Bang Tao. Airport car beats a late Smart Bus.',
        photo: '/photos/phuket.jpg',
      },
      {
        n: 2,
        title: 'Old Town and a swim',
        body: 'Thalang Road in Phuket Old Town in the cooler hours. Beach afternoon. Book tomorrow\'s Phang Nga or Rassada ticket.',
        photo: '/photos/kata-and-karon.jpg',
      },
      {
        n: 3,
        title: 'Phang Nga sunrise boat',
        body: 'Sunrise on Phang Nga Bay. Back to the west coast. Pack for a morning Rassada departure tomorrow.',
        photo: '/photos/phuket.jpg',
      },
      {
        n: 4,
        title: 'Rassada to Phi Phi Don',
        body: 'Ferry or speedboat from Rassada Pier. Sleep Long Beach or Laem Tong. No Maya Bay on arrival afternoon.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 5,
        title: '06:30 Maya Bay longtail',
        body: 'Private or shared longtail at 06:30. Park fee 400 THB. Swim at Pileh, not in Maya Bay. Second Phi Phi night or boat to Krabi.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 6,
        title: 'Ao Nang or Railay',
        body: 'Two-night Krabi block. Railay longtail about 15 minutes and 100 THB daytime. Phra Nang Cave on the west sand.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 7,
        title: 'Hong Islands or buffer, then KBV',
        body: 'Hong Islands if the sea is flat. Buffer if it is not. Fly KBV. Same-day long-haul from Krabi is a gamble.',
        photo: '/photos/krabi.jpg',
      },
    ],
    sections: [
      {
        id: 'andaman-split',
        title: 'West coast, Phi Phi Don, then Krabi',
        paragraphs: [
          'Stay on one sea. A [Railay](/attractions/railay-beach-and-phra-nang-cave) longtail is 100 THB in daylight. Hong Islands cancel first when the Andaman is up. Do not add Samui on this week.',
        ],
        table: {
          headers: ['Block', 'Sleep', 'Move'],
          rows: [
            ['Nights 1 to 3', 'Kata, Kamala, or Bang Tao', 'HKT car; Thalang Road; Phang Nga boat'],
            ['Nights 4 to 5', 'Phi Phi Don, Long Beach or Laem Tong', 'Rassada ferry or speedboat; 400 THB park fee'],
            ['Nights 6 to 7', 'Ao Nang or Railay', 'Phra Nang; Hong Islands; out KBV'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Phi Phi and Maya Bay', href: '/attractions/phi-phi-islands-and-maya-bay', photo: '/photos/krabi.jpg' },
      { title: 'Railay', href: '/attractions/railay-beach-and-phra-nang-cave', photo: '/photos/krabi.jpg' },
      { title: 'Andaman 2 weeks', href: '/itineraries/2-weeks-andaman-island-hopping', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Phuket west coast', 'Kata, Kamala, Bang Tao', 'Three nights before the Rassada boat.', stayAreaLink('kata'), '/photos/kata-and-karon.jpg'),
      stay('Krabi finish', 'Ao Nang or Railay', 'Two nights before a KBV flight.', stayLink('krabi'), '/photos/krabi.jpg'),
      {
        title: 'Out of Krabi',
        kicker: 'Trip.com',
        body: 'Leave from KBV. HKT is the arrival airport, not the exit on this split.',
        href: flightLink('KBV', 'BKK'),
        cta: 'Search flights',
        photo: '/photos/krabi.jpg',
        partner: 'flights',
      },
      klook('Phi Phi and Phang Nga boats', 'Island hopping', 'Ask if the 400 THB Phi Phi park fee is included. Book 06:30 when you can.', klookIslandHopping('Phi Phi Maya Bay'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'Why November to April only?',
        a: 'That is the Andaman dry window. May to October swell cancels Phi Phi and Hong Islands first. Use the Gulf week in those months.',
      },
      {
        q: 'Can you swim in Maya Bay?',
        a: 'No. The conservation rule still bans swimming in Maya Bay. Use Pileh Lagoon. The 400 THB park fee still applies.',
      },
      {
        q: 'Land HKT or KBV?',
        a: 'Land HKT for the west-coast start and Rassada boats. Leave KBV after the Krabi nights.',
      },
    ],
  },
  {
    path: '/itineraries/7-days-koh-samui-and-koh-phangan',
    title: '7 days in Koh Samui and Koh Phangan',
    description:
      'Seven Gulf days are known for 4 Samui nights plus a 30-minute Lomprayah hop to Koh Phangan. Fits January to September, when the Andaman has monsoon swell.',
    lede:
      'Known for a Lower Gulf week: Samui north-coast sleep, an Ang Thong day boat, then Thong Sala for Haad Yuan, Bottle Beach, or Srithanu. Fits January to September.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '7 days Koh Samui and Koh Phangan', href: '/itineraries/7-days-koh-samui-and-koh-phangan' },
    ],
    facts: [
      { label: 'Season', value: 'January to September; Andaman swell runs May to September' },
      { label: 'Sleep', value: '4 nights Samui; 3 nights Phangan' },
      { label: 'Boat', value: 'Lomprayah about 30 minutes, Bangrak or Maenam to Thong Sala' },
      { label: 'Ang Thong', value: '300 THB foreign park fee; no public ferry' },
    ],
    chips: ['Lower Gulf', '30-minute hop', 'Optional Tao'],
    photo: '/photos/koh-samui.jpg',
    paragraphs: [
      'Seven Gulf days are known for a Samui airport base and a short hop to Phangan bays. Sleep four nights on [Koh Samui](/koh-samui) in Bophut Fisherman\'s Village, Choeng Mon, or Chaweng. Book [Ang Thong](/koh-samui/ang-thong-marine-park) as a day trip when the park is open (300 THB foreign adult; closed 1 November to 15 December). Fly into USM. No boat on landing day.',
      'The Lomprayah catamaran from Bangrak or Maenam Pier to Thong Sala on [Koh Phangan](/koh-phangan) takes about 30 minutes. Sleep three nights at Haad Yuan, Bottle Beach, or the Srithanu / Zen Beach west coast. Haad Rin is a Full Moon product, not a default base. Add a day snorkel or an overnight hop to [Koh Tao](/koh-tao) only if diving is the point. January to September is the dry Gulf window, the same months the Andaman carries monsoon swell (May to September). For a 10-day three-island version, use [Gulf islands](/itineraries/10-days-gulf-islands-samui-phangan-tao).',
    ],
    days: [
      {
        n: 1,
        title: 'Land USM',
        body: 'Sleep Bophut, Choeng Mon, or Chaweng. No boat. Learn the Grab or songthaew pattern.',
        photo: '/photos/koh-samui.jpg',
      },
      {
        n: 2,
        title: 'Samui beach and village',
        body: 'Bophut Fisherman\'s Village if you sleep north. Chaweng if you want lights. Book Ang Thong for tomorrow if the park is open.',
        photo: '/photos/chaweng.jpg',
      },
      {
        n: 3,
        title: 'Ang Thong day boat',
        body: 'Park fee 300 THB. No public ferry. Back to Samui before dark. Write tomorrow\'s Lomprayah pier: Bangrak or Maenam.',
        photo: '/photos/koh-samui.jpg',
      },
      {
        n: 4,
        title: 'Samui buffer',
        body: 'Swap coasts if the first beach is wrong. Pack for a morning catamaran. Fourth Samui night stays on this island.',
        photo: '/photos/lamai.jpg',
      },
      {
        n: 5,
        title: 'Lomprayah to Thong Sala',
        body: 'About 30 minutes. Sleep Haad Yuan, Bottle Beach, or Srithanu / Zen Beach. Skip Haad Rin unless Full Moon is the trip.',
        photo: '/photos/koh-phangan.jpg',
      },
      {
        n: 6,
        title: 'Phangan bay day',
        body: 'Swim the bay you booked. Optional snorkel boat. Optional overnight hop to Tao only if a dive shop is waiting.',
        photo: '/photos/koh-phangan.jpg',
      },
      {
        n: 7,
        title: 'West-coast morning, then out',
        body: 'Buffer for swell. Boat back to Samui for USM, or stay for a later Lomprayah. Same-day international from USM is tight.',
        photo: '/photos/koh-phangan.jpg',
      },
    ],
    sections: [
      {
        id: 'gulf-split',
        title: 'Four Samui nights, three Phangan nights',
        paragraphs: [
          'Read the pier name on the ticket. Bangrak and Maenam are not Nathon. Thong Sala is the useful Phangan arrival, not Haad Rin. [Bangkok to Phangan](/get-there/bangkok-to-koh-phangan) covers the Chumphon backup if USM sells out.',
        ],
        table: {
          headers: ['Block', 'Sleep', 'Move'],
          rows: [
            ['Nights 1 to 4', 'Bophut, Choeng Mon, or Chaweng', 'USM; Ang Thong day boat 300 THB'],
            ['Boat', 'Thong Sala Pier', 'Lomprayah about 30 minutes from Bangrak or Maenam'],
            ['Nights 5 to 7', 'Haad Yuan, Bottle Beach, or Srithanu', 'Optional Tao snorkel or overnight'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Ang Thong', href: '/koh-samui/ang-thong-marine-park', photo: '/photos/koh-samui.jpg' },
      { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
      { title: 'Gulf 10 days', href: '/itineraries/10-days-gulf-islands-samui-phangan-tao', photo: '/photos/koh-tao.jpg' },
    ],
    affiliates: [
      stay('Samui first block', 'Bophut, Choeng Mon, Chaweng', 'Four nights by the airport island.', stayLink('koh-samui'), '/photos/koh-samui.jpg'),
      stay('Phangan bays', 'Thong Sala side', 'Three nights at Haad Yuan, Bottle Beach, or Srithanu.', stayLink('koh-phangan'), '/photos/koh-phangan.jpg'),
      {
        title: 'USM flights',
        kicker: 'Trip.com',
        body: 'Bangkok to Koh Samui, then a named pier for Lomprayah.',
        href: flightLink('BKK', 'USM'),
        cta: 'Search flights',
        photo: '/photos/koh-samui.jpg',
        partner: 'flights',
      },
      klook('Lomprayah and Ang Thong', 'Rail and ferry', 'Book the catamaran the afternoon before. Confirm the 300 THB park fee on Ang Thong.', klookRailFerry('Lomprayah Koh Phangan'), '/photos/koh-phangan.jpg'),
    ],
    faqs: [
      {
        q: 'Why January to September?',
        a: 'That is the easier Lower Gulf window. May to September is also when Andaman swell is up, so this week is the south plan in those months.',
      },
      {
        q: 'Bangrak or Maenam for Lomprayah?',
        a: 'Read the ticket. Both run to Thong Sala in about 30 minutes. Nathon and Lipa Noi are different desks.',
      },
      {
        q: 'Do you need Koh Tao on this week?',
        a: 'Only if a dive course is the point. A day snorkel works. A full Open Water card needs the 10-day Gulf plan.',
      },
    ],
  },
  {
    path: '/itineraries/10-days-bangkok-khao-sok-krabi',
    title: '10 days in Bangkok, Khao Sok Lake, and Krabi',
    description:
      'Ten days are known for 3 Bangkok nights, 2 Khao Sok nights with a Cheow Lan raft house, then 4 Krabi nights. Fits travellers who fly BKK to URT and leave KBV.',
    lede:
      'Known for a city-to-karst-to-cliff line: Bangkok, Cheow Lan Lake, then Railay or Ao Nang. Fits 10-night trips that fly to Surat Thani (URT) and exit Krabi (KBV).',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '10 days Bangkok Khao Sok Krabi', href: '/itineraries/10-days-bangkok-khao-sok-krabi' },
    ],
    facts: [
      { label: 'Split', value: 'Bangkok 3, Khao Sok 2, Krabi 4' },
      { label: 'Lake move', value: 'Morning BKK or DMK to URT, then a 90-minute van' },
      { label: 'Park fee', value: '300 THB foreign adult at Ratchaprapha Pier' },
      { label: 'South hop', value: 'About 2.5 hours private van to Krabi; fly out KBV' },
    ],
    chips: ['URT then van', 'Raft house', 'Out KBV'],
    photo: '/photos/khao-sok.jpg',
    paragraphs: [
      'Ten days are known for a Bangkok start, a [Khao Sok](/khao-sok) lake night, and a [Krabi](/krabi) finish. Sleep three nights in the city (Sukhumvit or riverside). Take a morning flight from BKK or DMK to Surat Thani (URT), then a 90-minute van to the park. See [Surat Thani to Khao Sok](/get-there/surat-thani-to-khao-sok). Split the two park nights: one in the Highway 401 jungle valley, one on a floating raft house on [Cheow Lan Lake](/attractions/cheow-lan-lake-khao-sok) via Ratchaprapha Pier. Foreign adults pay 300 THB at the park gate.',
      'A private van south to Krabi takes about 2.5 hours. Sleep four nights split between [Railay](/attractions/railay-beach-and-phra-nang-cave) and Ao Nang, or move the last nights to [Koh Lanta](/koh-lanta) if you want a slower island. Fly out of KBV. November to April is the Andaman window for the Krabi block. Do not add Samui on this spine. For a classic city-north-beach ten days, use [classic 10 days](/itineraries/10-days-classic-thailand).',
    ],
    days: [
      {
        n: 1,
        title: 'Bangkok arrival',
        body: 'Land BKK or DMK. Sukhumvit or riverside. Walk a soi. Sleep.',
        photo: '/photos/bangkok.jpg',
      },
      {
        n: 2,
        title: 'Rattanakosin morning',
        body: 'Palace 500 THB at 08:30, Wat Pho 300 THB, Wat Arun 200 THB. Dinner back on Sukhumvit or Yaowarat.',
        photo: '/photos/old-city.jpg',
      },
      {
        n: 3,
        title: 'City buffer',
        body: 'Chinatown, a river boat, or Siam if the heat wins. Pack for a morning URT flight.',
        photo: '/photos/riverside.jpg',
      },
      {
        n: 4,
        title: 'Fly URT, van to Khao Sok',
        body: 'Morning flight, then about 90 minutes by van to the 401 village. Sleep the jungle valley. No lake boat after dark.',
        photo: '/photos/khao-sok.jpg',
      },
      {
        n: 5,
        title: 'Ratchaprapha raft house',
        body: 'Transfer to Ratchaprapha Pier. Park fee 300 THB. One night on a Cheow Lan floating raft house.',
        photo: '/photos/khao-sok.jpg',
      },
      {
        n: 6,
        title: 'Van south to Krabi',
        body: 'About 2.5 hours private van. Sleep Ao Nang or cross to Railay (100 THB daytime longtail).',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 7,
        title: 'Railay and Phra Nang',
        body: 'Phra Nang Cave and the west sand. Climb only with a named shop (1,200 to 2,000 THB half-day).',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 8,
        title: 'Ao Nang or Lanta move',
        body: 'Stay on the Krabi mainland, or boat to Koh Lanta if you want four quieter nights split 2 and 2.',
        photo: '/photos/koh-lanta.jpg',
      },
      {
        n: 9,
        title: 'Island or cliff buffer',
        body: 'Hong Islands or a Lanta beach day. Weather buffer lives here.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 10,
        title: 'KBV out',
        body: 'Fly Krabi Airport. Same-day long-haul via BKK needs a wide connection. Do not book a dawn boat on exit day.',
        photo: '/photos/krabi.jpg',
      },
    ],
    sections: [
      {
        id: 'three-bases',
        title: 'City, lake, then one Krabi coast',
        paragraphs: [
          'Ratchaprapha Pier is not the 401 village. Budget transfer time both ways. Lanta boats and vans sit on [Krabi to Koh Lanta](/get-there/krabi-to-koh-lanta). Keep the four south nights on one coast name.',
        ],
        table: {
          headers: ['Block', 'Sleep', 'Transport'],
          rows: [
            ['Bangkok, 3 nights', 'Sukhumvit or riverside', 'BTS 17 to 62 THB; river boat'],
            ['Khao Sok, 2 nights', '1 valley + 1 Cheow Lan raft house', 'URT flight; 90-minute van; 300 THB park'],
            ['Krabi, 4 nights', 'Railay and Ao Nang, or Lanta', '2.5-hour van; out KBV'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Cheow Lan Lake', href: '/attractions/cheow-lan-lake-khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Classic 10 days', href: '/itineraries/10-days-classic-thailand', photo: '/photos/bangkok.jpg' },
    ],
    affiliates: [
      stay('Bangkok start', 'Three nights', 'Sukhumvit for the BTS. Riverside for boats.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      stay('Khao Sok and the lake', 'Valley then raft house', 'Search Khao Sok for night one. Cheow Lan raft house for night two.', hotelSearchLink('Khao Sok raft house'), '/photos/khao-sok.jpg'),
      stay('Krabi finish', 'Railay, Ao Nang, or Lanta', 'Four nights before KBV.', stayLink('krabi'), '/photos/krabi.jpg'),
      {
        title: 'Bangkok to Surat Thani',
        kicker: 'Trip.com',
        body: 'Morning BKK or DMK to URT, then the 90-minute park van.',
        href: flightLink('BKK', 'URT'),
        cta: 'Search flights',
        photo: '/photos/khao-sok.jpg',
        partner: 'flights',
      },
      klook('Cheow Lan boats', 'Tours', 'Ask if the 300 THB park fee and cave guide are included.', klookTours('Cheow Lan Lake Khao Sok'), '/photos/khao-sok.jpg'),
    ],
    faqs: [
      {
        q: 'Why fly URT instead of KBV first?',
        a: 'URT puts you 90 minutes from Khao Sok. KBV first means a longer backtrack to the lake. Leave from KBV after the Krabi nights.',
      },
      {
        q: 'Is the raft house required?',
        a: 'One valley night plus one raft-house night is the point of this spine. Two valley nights skip the karst reservoir.',
      },
      {
        q: 'Railay, Ao Nang, or Lanta for the last four nights?',
        a: 'Split Railay and Ao Nang if you want cliffs and a road. Use Lanta if you want a slower island. Do not book all three.',
      },
    ],
  },
  {
    path: '/itineraries/2-weeks-thailand-with-kids',
    title: '2 weeks in Thailand with kids: slow-paced family route',
    description:
      'Two family weeks are known for a slow 3-4-6 split: Bangkok pool hotel, Chiang Mai, then a shallow Phuket or Samui beach. Fits parents who book child-seat vans.',
    lede:
      'Known for a slow family spine: 3 Bangkok nights, 4 Chiang Mai nights, 6 shallow-beach nights. Fits kids who need a pool, an aquarium hour, and a hospital within a short drive.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '2 weeks with kids', href: '/itineraries/2-weeks-thailand-with-kids' },
    ],
    facts: [
      { label: 'Split', value: 'Bangkok 3, Chiang Mai 4, Phuket or Samui 6' },
      { label: 'North flight', value: 'Direct BKK-CNX about 1 hour 15 minutes' },
      { label: 'Car seats', value: 'Pre-book Klook or Trip.com vans that list child seats' },
      { label: 'Hospitals', value: 'Bumrungrad; Bangkok Hospital Phuket; Bangkok Hospital Samui' },
    ],
    chips: ['3-4-6 split', 'Child seats', 'Shallow beach'],
    photo: '/photos/kata-and-karon.jpg',
    paragraphs: [
      'A family fortnight is known for three hotel bases and no island hop. Sleep three nights at a Bangkok riverside resort with a pool. Use the Chao Phraya tourist boat for a low-stress river hour. Book SEA LIFE Ocean World at Siam Paragon when the heat wins. Street taxis rarely have a child seat. Pre-book Klook or Trip.com private vans that list seats (a 2026 BKK hotel van is often 1,200 to 2,000 THB). Bumrungrad is the usual Bangkok hospital for foreign families. Wider notes sit on [family travel](/interests/family-travel-with-kids).',
      'Fly direct to Chiang Mai in about 1 hour 15 minutes. Sleep four nights near the moat or a Nimman pool. Book a half-day [ethical elephant sanctuary](/attractions/chiang-mai-ethical-elephant-sanctuaries) (no riding). Bua Thong sticky waterfalls are the water morning. A night market dinner works if you leave before the late crush. Finish with six nights at a shallow-water beach: Kata, Kamala, or Bang Tao on [Phuket](/phuket), or Choeng Mon or Bophut on [Koh Samui](/koh-samui). Skip Patong and Chaweng as a first toddler beach. Bangkok Hospital Phuket and Bangkok Hospital Samui sit near those coasts. Pick the sea with the monsoon. See [when to go](/plan/when-to-go).',
    ],
    days: [
      {
        n: 1,
        title: 'Bangkok pool arrival',
        body: 'Private van with a listed child seat. Riverside resort. Pool, not the palace.',
        photo: '/photos/riverside.jpg',
      },
      {
        n: 2,
        title: 'River boat, short wat',
        body: 'Chao Phraya tourist boat. One temple if energy holds. Early dinner near the hotel.',
        photo: '/photos/riverside.jpg',
      },
      {
        n: 3,
        title: 'SEA LIFE at Siam',
        body: 'SEA LIFE Ocean World at Siam Paragon. BTS if the kids can stand a short tap ride (17 to 62 THB).',
        photo: '/photos/siam.jpg',
      },
      {
        n: 4,
        title: 'Fly Chiang Mai',
        body: 'Direct about 1 hour 15 minutes. Pre-booked CNX van with seats. Pool hotel near the moat or Nimman.',
        photo: '/photos/chiang-mai.jpg',
      },
      {
        n: 5,
        title: 'Old City morning',
        body: 'One or two wats before the heat. Juice and a rest. Night market only if bedtime can move.',
        photo: '/photos/chiang-mai-old-city.jpg',
      },
      {
        n: 6,
        title: 'Ethical elephant half-day',
        body: 'Named sanctuary, no riding. Half-day, not a 10-hour loop. Van with seats both ways.',
        photo: '/photos/northern.jpg',
      },
      {
        n: 7,
        title: 'Bua Thong sticky waterfalls',
        body: 'Water morning north of the city. Grip shoes. Back before late afternoon.',
        photo: '/photos/northern.jpg',
      },
      {
        n: 8,
        title: 'Fly the beach',
        body: 'CNX to HKT or USM. Six-night shallow resort: Kata, Kamala, Bang Tao, or Choeng Mon / Bophut.',
        photo: '/photos/phuket.jpg',
      },
      {
        n: 9,
        title: 'Beach reset',
        body: 'No boat. Shallow water and the hotel pool. Learn the resort shuttle.',
        photo: '/photos/kata-and-karon.jpg',
      },
      {
        n: 10,
        title: 'Quiet bay day',
        body: 'Same beach. Optional short longtail only if the kids already nap in a boat.',
        photo: '/photos/kamala-and-surin.jpg',
      },
      {
        n: 11,
        title: 'Buffer',
        body: 'Sick day, rain day, or a second pool. This night is why the plan is slow.',
        photo: '/photos/koh-samui.jpg',
      },
      {
        n: 12,
        title: 'One easy outing',
        body: 'Aquarium, farm, or a short Old Town walk. Back for the afternoon pool.',
        photo: '/photos/phuket.jpg',
      },
      {
        n: 13,
        title: 'Last full beach day',
        body: 'No new island. Confirm the airport van and seats for exit day.',
        photo: '/photos/koh-samui.jpg',
      },
      {
        n: 14,
        title: 'Van to HKT or USM',
        body: 'Wide buffer. Same-day long-haul from a south airport needs a named connection, not a hope.',
        photo: '/photos/bts.jpg',
      },
    ],
    sections: [
      {
        id: 'slow-split',
        title: 'Three bases, child seats, one shallow sea',
        paragraphs: [
          'Two hotel changes after Bangkok is enough. International-standard hospitals: Bumrungrad in Bangkok; Bangkok Hospital Phuket; Bangkok Hospital Samui. Do not stack Andaman and Gulf beaches in one family fortnight.',
        ],
        table: {
          headers: ['Block', 'Known for', 'Book'],
          rows: [
            ['Bangkok, 3 nights', 'Pool, river boat, SEA LIFE', 'Child-seat van; Bumrungrad nearby'],
            ['Chiang Mai, 4 nights', 'Ethical elephant half-day, Bua Thong', 'Direct flight about 1 hour 15 minutes'],
            ['Phuket, 6 nights', 'Kata, Kamala, Bang Tao', 'Bangkok Hospital Phuket'],
            ['Samui, 6 nights', 'Choeng Mon or Bophut', 'Bangkok Hospital Samui; USM'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Family travel', href: '/interests/family-travel-with-kids', photo: '/photos/kata-and-karon.jpg' },
      { title: 'Ethical elephants', href: '/attractions/chiang-mai-ethical-elephant-sanctuaries', photo: '/photos/chiang-mai.jpg' },
      { title: 'Phuket west coast', href: '/phuket/kata-and-karon', photo: '/photos/kata-and-karon.jpg' },
      { title: 'Best 14 days', href: '/itineraries/best-14-days', photo: '/photos/bangkok.jpg' },
    ],
    affiliates: [
      stay('Bangkok riverside pool', 'First three nights', 'A hotel pool beats a third temple.', stayAreaLink('riverside'), '/photos/riverside.jpg'),
      stay('Chiang Mai family block', 'Four nights', 'Moat or Nimman with a pool and a short van to the sanctuary.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      stay('Shallow beach finish', 'Six nights', 'Kata, Kamala, Bang Tao, Choeng Mon, or Bophut.', stayAreaLink('kata'), '/photos/kata-and-karon.jpg'),
      {
        title: 'Family flights',
        kicker: 'Trip.com',
        body: 'BKK to CNX, then CNX to HKT or USM. Book seats that accept a car seat if you carry one on board.',
        href: flightLink('BKK', 'CNX'),
        cta: 'Search flights',
        photo: '/photos/chiang-mai.jpg',
        partner: 'flights',
      },
      klook('Vans with child seats', 'Transfers', 'Read the inclusions for a listed child seat. Street taxis rarely have one.', klookTours('Bangkok private van child seat'), '/photos/bts.jpg'),
    ],
    faqs: [
      {
        q: 'Phuket or Samui with kids?',
        a: 'Phuket (Kata, Kamala, Bang Tao) from November to April. Samui (Choeng Mon or Bophut) from January to September. Pick one sea.',
      },
      {
        q: 'Do airport taxis have child seats?',
        a: 'Rarely. Pre-book a Klook or Trip.com van that lists a seat, or bring a travel car seat.',
      },
      {
        q: 'Which hospitals sit near this route?',
        a: 'Bumrungrad in Bangkok. Bangkok Hospital Phuket on the west-coast island week. Bangkok Hospital Samui on the Gulf week.',
      },
    ],
  },
  {
    path: '/itineraries/2-weeks-thailand-honeymoon',
    title: '2 weeks in Thailand honeymoon itinerary: river, mountains, and private pool villas',
    description:
      'A 2-week honeymoon splits 3 Chao Phraya nights, 4 mountain nights, and 6 private-pool villa nights. Fly the long legs and keep one dry-season coast.',
    lede:
      'Known for a river, mountain, and villa split with private pools and 06:30 longtails. Fits couples who want a Chao Phraya hotel, a Lanna spa, then one dry-season coast.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '2 weeks honeymoon', href: '/itineraries/2-weeks-thailand-honeymoon' },
    ],
    facts: [
      { label: 'Split', value: 'Bangkok river 3, Chiang Mai or Chiang Rai 4, villa coast 6' },
      { label: 'River hotels', value: 'Capella, Mandarin Oriental, or The Siam' },
      { label: 'Spa', value: 'Fah Lanna or Oasis Spa; Four Seasons Mae Rim if you want the valley' },
      { label: 'Boat', value: 'Private longtail at 06:30; park fees still apply' },
    ],
    chips: ['3-4-6 split', 'Private pool', '06:30 longtail'],
    photo: '/photos/resort.jpg',
    paragraphs: [
      'A honeymoon fortnight is known for three named river nights, four cooler mountain nights, and six villa nights on one sea. Sleep on the Chao Phraya at Capella, Mandarin Oriental, or [The Siam](/resort-living/the-siam). Book a private longtail canal tour and one riverfront tasting dinner. Dress-code roofs sit on [rooftop bars](/thai-food/bangkok-rooftop-bars-and-river-dining). See [honeymoon and couples](/interests/honeymoon-and-couples) for the shorter 3-4-5 shape.',
      'Take four nights in Chiang Mai or Chiang Rai. [Four Seasons Chiang Mai](/resort-living/four-seasons-chiang-mai) in Mae Rim is the valley pool. A riverside boutique in town works if you want dinner without a long car. Book a Lanna herbal spa at Fah Lanna or Oasis Spa. Finish with six nights on the Andaman or Gulf: [Rayavadee](/resort-living/rayavadee) or [Phulay Bay](/resort-living/phulay-bay) in Krabi, [Six Senses Yao Noi](/resort-living/six-senses-yao-noi), Keemala or [Trisara](/resort-living/trisara-phuket) in Phuket, or [Four Seasons Koh Samui](/resort-living/four-seasons-koh-samui). Charter private 06:30 longtails. Match the coast to the monsoon. Do not stack two seas.',
    ],
    days: [
      {
        n: 1,
        title: 'Chao Phraya arrival',
        body: 'Capella, Mandarin Oriental, or The Siam. River room. No temple circuit on landing day.',
        photo: '/photos/riverside.jpg',
      },
      {
        n: 2,
        title: 'Private canal longtail',
        body: 'Charter a longtail for canals and a quiet wat. Tasting dinner on the river at night.',
        photo: '/photos/riverside.jpg',
      },
      {
        n: 3,
        title: 'One roof or one terrace',
        body: 'One dress-code skyline drink or a Wat Arun terrace. Not both. Pack for the north flight.',
        photo: '/photos/nightlife.jpg',
      },
      {
        n: 4,
        title: 'Fly the north',
        body: 'BKK to CNX or CEI, about 70 minutes. Four Seasons Mae Rim or a riverside boutique.',
        photo: '/photos/chiang-mai.jpg',
      },
      {
        n: 5,
        title: 'Lanna spa day',
        body: 'Fah Lanna or Oasis Spa herbal compress. Slow Old City walk if you sleep in town.',
        photo: '/photos/chiang-mai-old-city.jpg',
      },
      {
        n: 6,
        title: 'Valley or Chiang Rai temples',
        body: 'Mae Rim rice fields, or a White Temple morning if you chose Chiang Rai (100 THB).',
        photo: '/photos/northern.jpg',
      },
      {
        n: 7,
        title: 'North buffer',
        body: 'Second spa hour or a cooking class. Fly south tomorrow. One villa coast only.',
        photo: '/photos/chiang-mai.jpg',
      },
      {
        n: 8,
        title: 'Villa arrival',
        body: 'Krabi, Phuket, Yao Noi, or Samui. Private transfer. No shared tour boat on day one.',
        photo: '/photos/resort.jpg',
      },
      {
        n: 9,
        title: 'Pool and bay',
        body: 'Private pool test. Learn the resort boat desk if a 06:30 charter is on the list.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 10,
        title: '06:30 longtail',
        body: 'Private charter before tour boats. Park fees of 200 to 400 THB still apply.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 11,
        title: 'Villa day',
        body: 'Stay put. A second hotel on this block wastes the pool you booked.',
        photo: '/photos/phuket.jpg',
      },
      {
        n: 12,
        title: 'Second boat or spa',
        body: 'Hong Islands, a quiet Phang Nga dawn, or a resort spa. One outing.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 13,
        title: 'Buffer',
        body: 'Weather hold. Confirm the airport car. Same-day long-haul from a south airport is tight.',
        photo: '/photos/resort.jpg',
      },
      {
        n: 14,
        title: 'Out KBV, HKT, or USM',
        body: 'Named airport car. Do not add a dawn boat on exit day.',
        photo: '/photos/bts.jpg',
      },
    ],
    sections: [
      {
        id: 'villa-coast',
        title: 'River, Lanna, then one villa coast',
        paragraphs: [
          'Named villa pages live under [resort living](/interests/resort-living). Andaman villas (Krabi, Phuket, Yao Noi) from November to April. Samui from January to August. A shared resort beach is a different trip from a private pool.',
        ],
        table: {
          headers: ['Block', 'Where', 'Named stays'],
          rows: [
            ['3 nights', 'Chao Phraya, Bangkok', 'Capella; Mandarin Oriental; The Siam'],
            ['4 nights', 'Chiang Mai or Chiang Rai', 'Four Seasons Mae Rim; riverside boutique; Fah Lanna or Oasis'],
            ['6 nights, Krabi', 'Railay / Noppharat Thara', 'Rayavadee; Phulay Bay'],
            ['6 nights, Phuket or Yao Noi', 'Kamala, Surin, or Yao Noi', 'Keemala; Trisara; Six Senses Yao Noi'],
            ['6 nights, Samui', 'North-coast villa', 'Four Seasons Koh Samui'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Honeymoon guide', href: '/interests/honeymoon-and-couples', photo: '/photos/resort.jpg' },
      { title: 'The Siam', href: '/resort-living/the-siam', photo: '/photos/riverside.jpg' },
      { title: 'Rayavadee', href: '/resort-living/rayavadee', photo: '/photos/krabi.jpg' },
      { title: 'Four Seasons Samui', href: '/resort-living/four-seasons-koh-samui', photo: '/photos/koh-samui.jpg' },
    ],
    affiliates: [
      stay('River Bangkok', 'First three nights', 'Capella, Mandarin Oriental, or The Siam on the Chao Phraya.', hotelSearchLink('Capella Bangkok', 'bangkok'), '/photos/riverside.jpg'),
      stay('Mae Rim or riverside north', 'Four nights', 'Four Seasons Mae Rim, or a Chiang Rai riverside boutique.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      stay('Villa search', 'Last six nights', 'Krabi, Phuket, Yao Noi, or Samui. Private pool is the filter.', hotelSearchLink('private pool villa', 'krabi'), '/photos/resort.jpg'),
      {
        title: 'Long-leg flights',
        kicker: 'Trip.com',
        body: 'BKK to CNX or CEI, then one south airport: KBV, HKT, or USM.',
        href: flightLink('BKK', 'CNX'),
        cta: 'Search flights',
        photo: '/photos/chiang-mai.jpg',
        partner: 'flights',
      },
      klook('Private 06:30 longtails', 'Tours', 'Book before tour boats. Confirm the park fee on the voucher.', klookTours('Krabi private longtail'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'How many nights in each place?',
        a: '3 on the Bangkok river, 4 in Chiang Mai or Chiang Rai, 6 at one villa coast. Two hotel changes after the city is enough.',
      },
      {
        q: 'Krabi, Phuket, Yao Noi, or Samui?',
        a: 'Andaman villas from November to April. Samui from January to August. Pick one sea.',
      },
      {
        q: 'When do you charter the longtail?',
        a: '06:30. Tour boats reach the same bays after 09:00. Park fees of 200 to 400 THB still apply.',
      },
    ],
  },
  {
    path: '/itineraries/3-weeks-grand-thailand',
    title: '3 weeks in Thailand: grand north-to-south route',
    description:
      'The 21-day grand route is known for Bangkok, Ayutthaya, the north, Khao Sok, Krabi, and one island group. Fits travellers who fly south once and match the monsoon.',
    lede:
      'Known for the full 21-day overland and island loop: city, ruins, north, then one south sea. Fits travellers who fly north-to-south once and pick Andaman or Gulf islands by month.',
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: '3 weeks grand Thailand', href: '/itineraries/3-weeks-grand-thailand' },
    ],
    facts: [
      { label: 'Days 1 to 5', value: 'Bangkok 4 nights; Ayutthaya day or overnight train north' },
      { label: 'Days 6 to 10', value: 'Chiang Mai and Chiang Rai, or a Pai 3-hour minivan loop' },
      { label: 'Days 11 to 14', value: 'Fly south; Khao Sok (Cheow Lan) and Krabi (Railay / Ao Nang)' },
      { label: 'Days 15 to 21', value: 'Lanta or Gulf islands by monsoon; Day 21 Bangkok long-haul' },
    ],
    chips: ['21 days', 'One south flight', 'Monsoon flip'],
    photo: '/photos/bangkok.jpg',
    paragraphs: [
      'Three weeks are known for a north-to-south country loop with one long south flight. Days 1 to 4 stay in Bangkok for temples, Chinatown, and one market. Day 5 is an [Ayutthaya](/ayutthaya) day (about 60 to 90 minutes by train) or the overnight sleeper north (SRT 9, about 12 hours). Days 6 to 10 cover [Chiang Mai](/chiang-mai) and [Chiang Rai](/chiang-rai), or a Pai minivan loop of about 3 to 4.5 hours on Highway 1095. Do not do Pai and Chiang Rai as rushed same-day adds.',
      'Day 11 flies north-to-south to Phuket (HKT), Krabi (KBV), or Surat Thani (URT). Days 11 to 14 are [Khao Sok](/khao-sok) (Cheow Lan Lake, 300 THB) and [Krabi](/krabi) (Railay or Ao Nang). Days 15 to 20 pick one island group by monsoon: [Koh Lanta](/koh-lanta) on the Andaman (November to April), or Koh Tao, [Koh Phangan](/koh-phangan), and [Koh Samui](/koh-samui) on the Gulf (January to September). Day 21 returns to Bangkok for the long-haul. Fly the long legs. Drop a night before you add a second sea. Shorter spines: [best 14 days](/itineraries/best-14-days) and [classic 10 days](/itineraries/10-days-classic-thailand).',
    ],
    days: [
      {
        n: 1,
        title: 'Bangkok arrival',
        body: 'BKK or DMK. Sukhumvit or riverside. Walk, sleep.',
        photo: '/photos/bangkok.jpg',
      },
      {
        n: 2,
        title: 'Royal wats',
        body: 'Palace 500 THB, Wat Pho 300 THB, Wat Arun 200 THB. Yaowarat if you still have legs.',
        photo: '/photos/old-city.jpg',
      },
      {
        n: 3,
        title: 'Chinatown and river',
        body: 'Yaowarat in daylight. River boat. One district dinner, not a nightlife crawl.',
        photo: '/photos/riverside.jpg',
      },
      {
        n: 4,
        title: 'Market day',
        body: 'Chatuchak if it is a weekend. Or Tor Kor or Banthat Thong if it is not.',
        photo: '/photos/siam.jpg',
      },
      {
        n: 5,
        title: 'Ayutthaya or the sleeper',
        body: 'Ruins day about 60 to 90 minutes north, or board SRT 9 to Chiang Mai (about 12 hours).',
        photo: '/photos/ayutthaya.jpg',
      },
      {
        n: 6,
        title: 'Chiang Mai',
        body: 'Fly about 70 minutes if you skipped the train. Sleep inside the moat.',
        photo: '/photos/chiang-mai.jpg',
      },
      {
        n: 7,
        title: 'Old City and Suthep',
        body: 'Dawn wats. 07:00 Doi Suthep if the sky is clear. Khao Soi Mae Sai for lunch if it is not Sunday.',
        photo: '/photos/northern.jpg',
      },
      {
        n: 8,
        title: 'Chiang Rai or Pai',
        body: 'GreenBus VIP to Chiang Rai (about 3 to 3.5 hours) or Prempracha to Pai (about 3 to 4.5 hours). Not both.',
        photo: '/photos/chiang-rai.jpg',
      },
      {
        n: 9,
        title: 'Temple loop or ridge morning',
        body: 'White Temple 100 THB, Blue Temple, Baan Dam 80 THB. Or a Pai canyon morning.',
        photo: '/photos/chiang-rai.jpg',
      },
      {
        n: 10,
        title: 'North buffer',
        body: 'Second Chiang Mai night if you day-tripped. Pack for the south flight.',
        photo: '/photos/chiang-mai.jpg',
      },
      {
        n: 11,
        title: 'Fly south',
        body: 'CNX to HKT, KBV, or URT. If URT, van about 90 minutes to Khao Sok. No boat after a late landing.',
        photo: '/photos/khao-sok.jpg',
      },
      {
        n: 12,
        title: 'Cheow Lan Lake',
        body: 'Ratchaprapha Pier, 300 THB park fee. Raft house if you booked one. Valley lodge if you did not.',
        photo: '/photos/khao-sok.jpg',
      },
      {
        n: 13,
        title: 'Van to Krabi',
        body: 'About 2.5 hours to Ao Nang. Railay longtail 100 THB daytime if the cliffs are the stay.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 14,
        title: 'Railay or Ao Nang',
        body: 'Phra Nang Cave or a Hong Islands day. Book the island boat for tomorrow\'s monsoon pick.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 15,
        title: 'Island group starts',
        body: 'Andaman: boat to Koh Lanta. Gulf: van or flight toward Samui, then Lomprayah.',
        photo: '/photos/koh-lanta.jpg',
      },
      {
        n: 16,
        title: 'First island full day',
        body: 'Lanta beach, or Samui north coast, or a Phangan bay. One move, not two.',
        photo: '/photos/koh-samui.jpg',
      },
      {
        n: 17,
        title: 'Stay or one hop',
        body: 'Optional Lanta south beach, or Phangan to Tao if diving is the week.',
        photo: '/photos/koh-phangan.jpg',
      },
      {
        n: 18,
        title: 'Second island day',
        body: 'Swim. Rebook any cancelled boat. Keep a buffer night unused.',
        photo: '/photos/koh-tao.jpg',
      },
      {
        n: 19,
        title: 'Quiet bay',
        body: 'Last new boat only if the weather is flat. Most trips should stay put.',
        photo: '/photos/koh-lanta.jpg',
      },
      {
        n: 20,
        title: 'Return toward a south airport',
        body: 'Back to Lanta pier, Krabi, or USM. Sleep near the airport if the Day 21 flight is early.',
        photo: '/photos/krabi.jpg',
      },
      {
        n: 21,
        title: 'Bangkok and out',
        body: 'Fly to BKK. ARL or a booked car. No palace morning before a noon long-haul.',
        photo: '/photos/bts.jpg',
      },
    ],
    sections: [
      {
        id: 'monsoon-islands',
        title: 'One south flight, one island group',
        paragraphs: [
          'Days 15 to 20 are a monsoon choice, not a map that shows both seas. Lanta pairs with the Krabi block in November to April. Tao, Phangan, and Samui pair with the Gulf window in January to September. [When to go](/plan/when-to-go) is the lock before you buy the south ticket.',
        ],
        table: {
          headers: ['Days', 'Block', 'Move'],
          rows: [
            ['1 to 4', 'Bangkok temples, Chinatown, markets', 'BTS 17 to 62 THB; river boat'],
            ['5', 'Ayutthaya day or SRT 9 north', 'Train 60 to 90 minutes, or about 12 hours sleeper'],
            ['6 to 10', 'Chiang Mai and Chiang Rai, or Pai', 'GreenBus 3 to 3.5 hours; Pai van 3 to 4.5 hours'],
            ['11 to 14', 'Khao Sok and Krabi', 'Fly HKT, KBV, or URT; lake park 300 THB'],
            ['15 to 20', 'Lanta or Gulf islands', 'One sea only'],
            ['21', 'Bangkok long-haul', 'South airport to BKK, then home'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Best 14 days', href: '/itineraries/best-14-days', photo: '/photos/chiang-mai.jpg' },
      { title: 'Khao Sok lake', href: '/attractions/cheow-lan-lake-khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Andaman hop', href: '/itineraries/2-weeks-andaman-island-hopping', photo: '/photos/phuket.jpg' },
      { title: 'Gulf hop', href: '/itineraries/10-days-gulf-islands-samui-phangan-tao', photo: '/photos/koh-samui.jpg' },
    ],
    affiliates: [
      stay('Bangkok open', 'Days 1 to 4', 'Sukhumvit or riverside before the north.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      stay('North block', 'Days 6 to 10', 'Old City or Nimman, plus Chiang Rai or Pai.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      stay('South finish', 'Krabi or the islands', 'Khao Sok, then Lanta or the Gulf trio.', stayLink('krabi'), '/photos/krabi.jpg'),
      {
        title: 'North-to-south flight',
        kicker: 'Trip.com',
        body: 'CNX to HKT, KBV, or URT on Day 11. Book the long-haul out of BKK on Day 21.',
        href: flightLink('CNX', 'HKT'),
        cta: 'Search flights',
        photo: '/photos/phuket.jpg',
        partner: 'flights',
      },
      {
        title: 'North sleeper option',
        kicker: 'Trip.com',
        body: 'SRT 9 if Day 5 is a train night instead of Ayutthaya plus a morning flight.',
        href: trainLink('Bangkok', 'Chiang Mai'),
        cta: 'Search trains',
        photo: '/photos/chiang-mai.jpg',
        partner: 'flights',
      },
    ],
    faqs: [
      {
        q: 'Do you need both Pai and Chiang Rai?',
        a: 'No. Pick one fork for Days 8 to 9. Pai is the ridge road. Chiang Rai is the White, Blue, and Black House loop.',
      },
      {
        q: 'Lanta or the Gulf islands for Days 15 to 20?',
        a: 'Lanta if you already sit in Krabi from November to April. Samui, Phangan, and Tao if you travel January to September and want the Gulf.',
      },
      {
        q: 'Can you skip the Day 21 Bangkok night?',
        a: 'Yes if the long-haul leaves a south airport and you accept the missed-connection risk. Most tickets still route via BKK.',
      },
    ],
  },
];
