import {
  stayLink,
  stayAreaLink,
  transferLink,
  klookTours,
  klookIslandHopping,
  klookTickets,
} from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search stays'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string, cta = 'See tickets'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'klook' };
}

export const wave9Pages: Page[] = [
  {
    path: '/attractions',
    title: 'Thailand attractions: temples, marine parks, bays, and markets',
    description:
      'Ticketed Thailand sights for first-trip planners: Grand Palace, river wats, Chatuchak, Maya Bay, Railay, and four national park pages with 2026 fees.',
    lede:
      'The hub names ticketed sights with 2026 fees and piers. Use it for one palace morning, one Andaman bay, or one mountain wat.',
    schema: 'Article',
    crumbs: [{ name: 'Attractions', href: '/attractions' }],
    facts: [
      { label: 'Bangkok wats', value: 'Palace 500 THB, Wat Pho 300 THB, Wat Arun 200 THB' },
      { label: 'Andaman parks', value: 'Phi Phi 400 THB; Phang Nga 300 THB; Similan 500 THB' },
      { label: 'North days', value: 'Doi Suthep 30 THB; White Temple 100 THB; Inthanon 300 THB' },
      { label: 'Boats', value: 'Railay longtail 100 THB; Cheow Lan longtail 1,800 to 2,500 THB' },
    ],
    chips: ['Temples', 'Marine parks', 'Markets', 'Day boats'],
    photo: '/photos/old-city.jpg',
    paragraphs: [
      'These pages cover the sights that change a first trip: the Rattanakosin palace cluster, two floating-market days, Chiang Mai and Chiang Rai wats, Andaman bays, Cheow Lan Lake, Pattaya teak carving, and Bangkok fight nights. City pages stay districts and trains. Park pages stay under the city that owns the pier.',
      'A 2026 foreign ticket is often 200 to 500 THB at the gate. Boat days cost more: Phi Phi park fee 400 THB on top of the tour, Railay longtails 100 THB a person, Cheow Lan private longtails 1,800 to 2,500 THB. Book the hotel base on Trip.com. Book boats and timed tickets on Klook.',
    ],
    sections: [
      {
        id: 'how-to-use',
        title: 'How to use this hub',
        paragraphs: [
          'Pick one Bangkok temple morning, one market, and one boat or mountain day. Do not stack the Grand Palace, Chatuchak, and a Phi Phi speedboat on the same calendar. The four park pages already live under Khao Lak, Kanchanaburi, Chiang Mai, and Samui. This hub links them so you can see the fee board in one place.',
        ],
        table: {
          headers: ['Cluster', 'Pages', 'Who it fits'],
          rows: [
            ['Rattanakosin', 'Grand Palace, Wat Pho, Wat Arun', 'First Bangkok morning'],
            ['Markets', 'Chatuchak; Damnoen Saduak and Amphawa', 'Weekend shoppers or a canal day'],
            ['North', 'Doi Suthep, elephant sanctuaries, White and Blue Temples', 'Chiang Mai or Chiang Rai days'],
            ['Andaman and lake', 'Phang Nga, Phi Phi, Railay, Cheow Lan', 'One sea or one karst lake'],
            ['East and nights', 'Sanctuary of Truth; Rajadamnern and Lumpinee', 'Pattaya or a Bangkok fight card'],
            ['Park pages', 'Similan and Surin, Erawan, Doi Inthanon, Ang Thong', 'Season-gated boats and waterfalls'],
          ],
        },
      },
      {
        id: 'park-pages',
        title: 'National and marine park pages already on the site',
        paragraphs: [
          'Similan and Surin sit under Khao Lak: 500 THB, open 15 October to 15 May, boats from Tab Lamu. Erawan and Sai Yok sit under Kanchanaburi: 300 THB and the 08:00 bus 8170. Doi Inthanon sits under Chiang Mai: 300 THB plus 100 THB at the Twin Royal Pagodas. Ang Thong sits under Koh Samui: 300 THB, no public ferry, closed 1 November to 15 December.',
        ],
      },
    ],
    portraits: [
      { title: 'Grand Palace', href: '/attractions/grand-palace-and-wat-phra-kaew', photo: '/photos/old-city.jpg' },
      { title: 'Wat Pho', href: '/attractions/wat-pho', photo: '/photos/old-city.jpg' },
      { title: 'Wat Arun', href: '/attractions/wat-arun', photo: '/photos/riverside.jpg' },
      { title: 'Chatuchak', href: '/attractions/chatuchak-weekend-market', photo: '/photos/bangkok.jpg' },
      { title: 'Floating markets', href: '/attractions/damnoen-saduak-and-amphawa-floating-markets', photo: '/photos/riverside.jpg' },
      { title: 'Doi Suthep', href: '/attractions/wat-phra-that-doi-suthep', photo: '/photos/chiang-mai.jpg' },
      { title: 'Elephant sanctuaries', href: '/attractions/chiang-mai-ethical-elephant-sanctuaries', photo: '/photos/chiang-mai.jpg' },
      { title: 'White and Blue Temples', href: '/attractions/white-temple-wat-rong-khun-and-blue-temple', photo: '/photos/chiang-rai.jpg' },
      { title: 'Phang Nga Bay', href: '/attractions/phang-nga-bay-and-james-bond-island', photo: '/photos/phuket.jpg' },
      { title: 'Phi Phi and Maya Bay', href: '/attractions/phi-phi-islands-and-maya-bay', photo: '/photos/krabi.jpg' },
      { title: 'Railay', href: '/attractions/railay-beach-and-phra-nang-cave', photo: '/photos/krabi.jpg' },
      { title: 'Cheow Lan Lake', href: '/attractions/cheow-lan-lake-khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Sanctuary of Truth', href: '/attractions/sanctuary-of-truth-pattaya', photo: '/photos/pattaya.jpg' },
      { title: 'Muay Thai stadiums', href: '/attractions/muay-thai-stadiums-rajadamnern-and-lumpinee', photo: '/photos/nightlife.jpg' },
      { title: 'Similan and Surin', href: '/khao-lak/similan-and-surin-islands', photo: '/photos/khao-lak.jpg' },
      { title: 'Erawan and Sai Yok', href: '/kanchanaburi/erawan-and-sai-yok', photo: '/photos/kanchanaburi.jpg' },
      { title: 'Doi Inthanon', href: '/chiang-mai/doi-inthanon', photo: '/photos/northern.jpg' },
      { title: 'Ang Thong', href: '/koh-samui/ang-thong-marine-park', photo: '/photos/koh-samui.jpg' },
    ],
    affiliates: [
      stay('Bangkok first nights', 'Rattanakosin or Sukhumvit', 'Sleep near the palace if day two is the wats. Sleep on the BTS if day two is Chatuchak.', stayAreaLink('rattanakosin'), '/photos/old-city.jpg'),
      klook('Attraction tickets', 'Klook', 'Palace, Phi Phi, Railay, and fight-night desks. Confirm whether the park fee is extra.', klookTickets('Thailand attraction tickets'), '/photos/old-city.jpg'),
    ],
    faqs: [
      {
        q: 'Which attraction should a first trip book first?',
        a: 'The Grand Palace morning in Bangkok, then one boat or mountain day that matches the monsoon. Do not add a second sea.',
      },
      {
        q: 'Are park fees included in Klook tours?',
        a: 'Often not. Similan is 500 THB, Phi Phi 400 THB, Phang Nga and Cheow Lan 300 THB. Read the inclusions line.',
      },
    ],
  },
  {
    path: '/attractions/grand-palace-and-wat-phra-kaew',
    title: 'Grand Palace and Wat Phra Kaew',
    description:
      'The Grand Palace and Emerald Buddha in Bangkok: 500 THB foreign ticket including the textile museum, 08:30 to 15:30, strict dress code, Mani Noppharat Gate.',
    lede:
      'The Grand Palace is known for Wat Phra Kaew and the Emerald Buddha. Best as a first-morning visit for planners who want the chapel, not a hotel stay; pair Wat Pho after.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Grand Palace and Wat Phra Kaew', href: '/attractions/grand-palace-and-wat-phra-kaew' },
    ],
    facts: [
      { label: 'Ticket', value: '500 THB foreign adult; includes Queen Sirikit Museum of Textiles' },
      { label: 'Hours', value: '08:30 to 15:30 daily; last tickets earlier on ceremony days' },
      { label: 'Dress', value: 'Covered shoulders; ankle-length pants or skirt; no ripped jeans' },
      { label: 'Gate', value: 'Mani Noppharat Gate on Na Phra Lan Road; Tha Chang Pier N9; MRT Sanam Chai' },
    ],
    chips: ['500 THB', '08:30 opening', 'Mani Noppharat'],
    photo: '/photos/old-city.jpg',
    geo: { lat: 13.75, lon: 100.4915, containedIn: 'Bangkok' },
    paragraphs: [
      'The Grand Palace and Wat Phra Kaew share one ticketed compound on Rattanakosin. Foreign adults pay 500 THB in 2026. The stub includes the Queen Sirikit Museum of Textiles on the west side. Hours are 08:30 to 15:30 daily. Ceremony days can close courtyards without much notice. Carry cash or a card the booth accepts that morning, and keep the stub.',
      'Enter at Mani Noppharat Gate on Na Phra Lan Road, opposite Sanam Luang. The Bureau of the Royal Household moved the visitor entrance here from Viset Chaisri Gate on 10 January 2024. Tha Chang Pier (N9) is the river stop. MRT Sanam Chai Exit 1 is about 15 minutes on foot through the old lanes. Ignore tuk-tuk drivers who say the palace is closed and offer a gem shop or an out-of-town wat. If the gate is open and the queue is moving, it is open.',
    ],
    sections: [
      {
        id: 'dress-and-scams',
        title: 'Dress code and the closed-palace scam',
        paragraphs: [
          'Shoulders and knees must be covered. Ankle-length pants or a long skirt beat capris. Bare shoulders, shorts, and ripped jeans are turned away. Rental wraps sit outside the gate if you arrive underdressed. Shoes come off at chapel doors. Hats come off in the ubosot.',
          'The classic scam is a tuk-tuk that intercepts you on Na Phra Lan or near Tha Chang and claims a royal ceremony shut the palace. Walk to the gate. If tickets are selling, go in. A licensed guide inside is optional. A gem-shop detour is not.',
        ],
        table: {
          headers: ['Step', '2026 detail', 'Time'],
          rows: [
            ['Arrive', 'Mani Noppharat Gate; skip the roadside tuk-tuk pitch', '08:20 if you want the first rooms'],
            ['Pay', '500 THB foreign ticket; textile museum included', 'Keep the stub'],
            ['Walk', 'Wat Phra Kaew first, then the palace courtyards', '90 to 120 minutes'],
            ['Next', 'Walk south to Wat Pho, 300 THB, or boat to Wat Arun', 'Do not add Chatuchak'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Wat Pho', href: '/attractions/wat-pho', photo: '/photos/old-city.jpg' },
      { title: 'Wat Arun', href: '/attractions/wat-arun', photo: '/photos/riverside.jpg' },
      { title: 'Old City', href: '/bangkok/old-city-rattanakosin', photo: '/photos/old-city.jpg' },
      { title: 'Attractions hub', href: '/attractions', photo: '/photos/bangkok.jpg' },
    ],
    affiliates: [
      stay('Rattanakosin stays', 'Walk to the gate', 'Sleep here if the palace is day one. Sukhumvit if it is a one-morning raid.', stayAreaLink('rattanakosin'), '/photos/old-city.jpg'),
      klook('Palace tickets', 'Attraction tickets', 'Timed starts and licensed guides. Confirm the 500 THB gate fee is included.', klookTickets('Bangkok Grand Palace tickets'), '/photos/old-city.jpg'),
    ],
    faqs: [
      {
        q: 'Is the palace closed on weekends?',
        a: 'No. It is a daily ticketed site, 08:30 to 15:30. Royal ceremonies can close inner courts. The tuk-tuk line that it is always closed is a scam.',
      },
      {
        q: 'Does the 500 THB ticket include Wat Pho?',
        a: 'No. Wat Pho is a separate 300 THB ticket a short walk south. Wat Arun is 200 THB plus the 5 THB ferry.',
      },
      {
        q: 'MRT Sanam Chai or the river boat?',
        a: 'Sanam Chai if you already ride the Blue Line. Tha Chang N9 if you are on the Chao Phraya Express. Both beat a taxi in the old-city grid.',
      },
    ],
  },
  {
    path: '/attractions/wat-pho',
    title: 'Wat Pho',
    description:
      'Wat Pho holds the 46-metre Reclining Buddha and the massage school. Foreign entry is 300 THB, 08:00 to 19:30, a walk from MRT Sanam Chai Exit 1.',
    lede:
      'Wat Pho is known for the 46-metre Reclining Buddha and Thailand\'s best-known massage school. Best as the second stop after the Grand Palace.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Wat Pho', href: '/attractions/wat-pho' },
    ],
    facts: [
      { label: 'Ticket', value: '300 THB foreign adult; Thai nationals enter free with ID' },
      { label: 'Hours', value: '08:00 to 19:30 daily; last entry earlier' },
      { label: 'Buddha', value: '46-metre reclining figure; 108 bronze alms bowls' },
      { label: 'Rail', value: 'MRT Sanam Chai Exit 1, about 10 minutes on foot' },
    ],
    chips: ['300 THB', 'Reclining Buddha', 'Massage school'],
    photo: '/photos/old-city.jpg',
    geo: { lat: 13.7465, lon: 100.4927, containedIn: 'Bangkok' },
    paragraphs: [
      'Wat Pho sits immediately south of the Grand Palace. Foreign adults pay 300 THB in 2026. Gates run 08:00 to 19:30, which makes this the late option if the palace queue ate the morning. The reclining Buddha is 46 metres long in the vihara on the northwest side. Coins for the 108 bronze alms bowls are sold at the door. Walk the row once; it is the point.',
      'The Wat Pho Thai Traditional Massage School is on the temple grounds, not a spa on Khao San. Traditional tables are 340 THB for 30 minutes and 520 THB for 60 minutes (1,040 THB for 120 minutes), 08:00 to 19:30, plus the separate 300 THB temple ticket. Book at the school desk. MRT Sanam Chai Exit 1 is the clean rail walk. Tha Tien Pier is the 5 THB cross-river ferry to Wat Arun.',
    ],
    sections: [
      {
        id: 'order',
        title: 'Palace, reclining Buddha, then the ferry',
        paragraphs: [
          'Do the Grand Palace at 08:30, walk south into Wat Pho after you leave the palace, then take the Tha Tien ferry if you still have knees. Reverse the order only if you arrive after 15:30 and the palace booth is done. The massage is the buffer, not a third temple.',
        ],
        table: {
          headers: ['Stop', 'Fee', 'Time'],
          rows: [
            ['Grand Palace', '500 THB', '08:30 to about 11:00'],
            ['Wat Pho reclining Buddha', '300 THB', '45 to 75 minutes'],
            ['Massage school', '340 to 520 THB; 1,040 THB / 120 min', '30 to 60 minutes; 08:00 to 19:30'],
            ['Tha Tien ferry to Wat Arun', '5 THB', 'About 5 minutes on the water'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Grand Palace', href: '/attractions/grand-palace-and-wat-phra-kaew', photo: '/photos/old-city.jpg' },
      { title: 'Wat Arun', href: '/attractions/wat-arun', photo: '/photos/riverside.jpg' },
      { title: 'Old City', href: '/bangkok/old-city-rattanakosin', photo: '/photos/old-city.jpg' },
      { title: 'Bangkok street food', href: '/thai-food/bangkok-street-food', photo: '/photos/thai-food-bangkok-street.jpg' },
    ],
    affiliates: [
      stay('Old City stays', 'After the wats', 'Sleep in Rattanakosin if two temple mornings share the same hotel.', stayAreaLink('old-city'), '/photos/old-city.jpg'),
      klook('Temple tickets', 'Attraction tickets', 'Wat Pho and river combos. Confirm the 300 THB gate fee.', klookTickets('Wat Pho Bangkok tickets'), '/photos/old-city.jpg'),
    ],
    faqs: [
      {
        q: 'Is Wat Pho the same compound as the Grand Palace?',
        a: 'No. Separate gates and a separate 300 THB ticket. The walk between them is about 10 minutes.',
      },
      {
        q: 'Do you need to book the massage?',
        a: 'Walk-in often works on a weekday afternoon. Weekend evenings queue. The school desk, not a soi tout, is 340 THB for 30 minutes or 520 THB for 60 minutes (1,040 THB for 120 minutes), plus the 300 THB temple ticket.',
      },
      {
        q: 'Which MRT exit?',
        a: 'Sanam Chai Exit 1. Follow signs toward Wat Pho and the river, not toward Pak Khlong Talat unless you want the flower market.',
      },
    ],
  },
  {
    path: '/attractions/wat-arun',
    title: 'Wat Arun',
    description:
      'Wat Arun is the 82-metre porcelain prang on the Thonburi bank. Foreign entry is 200 THB, 08:00 to 18:00. The Tha Tien ferry from Wat Pho is 5 THB.',
    lede:
      'Wat Arun is known for the 82-metre porcelain prang on the Thonburi bank. Best as a morning climb or a sunset view from Tha Tien, using the 5 THB ferry rather than a taxi loop.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Wat Arun', href: '/attractions/wat-arun' },
    ],
    facts: [
      { label: 'Ticket', value: '200 THB foreign adult in 2026' },
      { label: 'Hours', value: '08:00 to 18:00; stairs can close in heavy rain' },
      { label: 'Prang', value: '82-metre central tower faced in porcelain and seashell' },
      { label: 'Ferry', value: 'Tha Tien to Tha Arun, 5 THB, about 5 minutes' },
    ],
    chips: ['200 THB', 'Tha Tien ferry', 'Sunset or climb'],
    photo: '/photos/riverside.jpg',
    geo: { lat: 13.7437, lon: 100.4887, containedIn: 'Bangkok' },
    paragraphs: [
      'Wat Arun Ratchawararam stands on the Thonburi bank, facing Wat Pho. Foreign adults pay 200 THB in 2026. Grounds are open 08:00 to 18:00. The central prang is about 82 metres and faced in Chinese porcelain and seashell. The stairs are steep. Wear shoes that stay on. The climb can close in rain or for repairs; the riverside terrace still works.',
      'The useful crossing is the local ferry from Tha Tien Pier, next to Wat Pho, to Tha Arun. It is 5 THB and about 5 minutes. Chao Phraya Express boats also stop at Tha Arun (N11) if you are already on the river. A taxi from Rattanakosin has to use a bridge and wastes the point.',
    ],
    sections: [
      {
        id: 'light',
        title: 'Morning climb versus sunset from the other bank',
        paragraphs: [
          'Climb in the morning if the stairs are the point and the tiles are cooler. Stay on the Wat Pho or Tha Tien side at dusk if you want the prang lit across the water. You cannot do a long climb and a long sunset drink in the same hour. Pick one.',
        ],
        table: {
          headers: ['Plan', 'Where you stand', 'Trade-off'],
          rows: [
            ['Morning climb', 'On the prang terraces', 'Heat and stairs. Clearer tiles.'],
            ['Sunset from Tha Tien', 'Bangkok bank cafes and the pier', 'No climb. The postcard view.'],
            ['Both banks, no climb', 'Ferry over, terrace, ferry back', 'About 45 minutes plus the 200 THB ticket'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Wat Pho', href: '/attractions/wat-pho', photo: '/photos/old-city.jpg' },
      { title: 'Grand Palace', href: '/attractions/grand-palace-and-wat-phra-kaew', photo: '/photos/old-city.jpg' },
      { title: 'Riverside', href: '/bangkok/riverside-charoenkrung', photo: '/photos/riverside.jpg' },
      { title: 'Grab and BTS', href: '/plan/grab-and-bts', photo: '/photos/bts.jpg' },
    ],
    affiliates: [
      stay('Riverside stays', 'Boats, not bridges', 'Sleep on Charoenkrung if the river is the two-day plan.', stayAreaLink('riverside'), '/photos/riverside.jpg'),
      klook('River and temple tickets', 'Tours', 'Wat Arun plus a longtail if you want the canal loop after the prang.', klookTours('Wat Arun Bangkok'), '/photos/riverside.jpg'),
    ],
    faqs: [
      {
        q: 'Is the climb included in the 200 THB ticket?',
        a: 'Yes when the stairs are open. Rain and repairs shut them. The ticket still covers the terraces and halls.',
      },
      {
        q: 'Can you see Wat Arun without crossing?',
        a: 'Yes, from Tha Tien and the Bangkok-bank cafes. You miss the porcelain close-up and the 200 THB climb.',
      },
      {
        q: 'Express boat or the 5 THB ferry?',
        a: 'The local Tha Tien ferry if you are already at Wat Pho. The Express boat if you are coming from Sathorn or Thewet.',
      },
    ],
  },
  {
    path: '/attractions/chatuchak-weekend-market',
    title: 'Chatuchak Weekend Market',
    description:
      'Chatuchak is 15,000 stalls across 27 numbered sections. Entry is free. Saturday and Sunday 09:00 to 18:00, plus Friday wholesale night. Use BTS Mo Chit or MRT Kamphaeng Phet.',
    lede:
      'Chatuchak is known for about 15,000 stalls in 27 numbered sections of plants, crafts, and food. Best on Saturday morning for shoppers who want sois, not a mall; MRT Kamphaeng Phet Exit 2 opens into Sections 1 and 2.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Chatuchak Weekend Market', href: '/attractions/chatuchak-weekend-market' },
    ],
    facts: [
      { label: 'Hours', value: 'Sat and Sun 09:00 to 18:00; Friday night wholesale about 18:00 to 00:00' },
      { label: 'Size', value: 'About 15,000 stalls in 27 numbered sections' },
      { label: 'Rail', value: 'BTS Mo Chit Exit 1 or MRT Kamphaeng Phet Exit 2' },
      { label: 'Across the street', value: 'Or Tor Kor Market for produce and prepared food' },
    ],
    chips: ['Free entry', 'Sat-Sun', '27 sections'],
    photo: '/photos/bangkok.jpg',
    geo: { lat: 13.7999, lon: 100.5503, containedIn: 'Bangkok' },
    paragraphs: [
      'Chatuchak Weekend Market (JJ) fills the grid north of the old city. Entry is free. The public days are Saturday and Sunday, 09:00 to 18:00. Friday night is the wholesale session, roughly 18:00 to midnight, louder and more bulk. About 15,000 stalls sit in 27 numbered sections. Pick two or three sections. A full loop is a lost afternoon.',
      'BTS Mo Chit Exit 1 drops you on the Kamphaeng Phet Road edge. MRT Kamphaeng Phet Exit 2 opens almost into Sections 1 and 2, which is the cleaner start in heat. Or Tor Kor Market sits across Kamphaeng Phet Road: air-conditioned produce, fruit, and curry shops, useful when JJ is a crush. A 2026 BTS tap is 17 to 62 THB. Bring cash. Cards appear, then fail at the stall you want.',
    ],
    sections: [
      {
        id: 'map',
        title: 'Which gate and which sections',
        paragraphs: [
          'Plants and pots sit toward the north-west sections. Crafts, home goods, and clothes fill the middle numbers. Food courts and drink sois shift; follow the crowd at lunch. Pets have their own rules and a separate mood. If you only have two hours, enter at MRT Kamphaeng Phet, walk Sections 1 to 8, eat at Or Tor Kor, and leave.',
        ],
        table: {
          headers: ['Entry', 'Opens into', 'Use it if'],
          rows: [
            ['MRT Kamphaeng Phet Exit 2', 'Sections 1 and 2', 'You want shade and a short first loop'],
            ['BTS Mo Chit Exit 1', 'Kamphaeng Phet Road edge', 'You already ride the BTS Sukhumvit line'],
            ['Or Tor Kor', 'Across the street, not inside JJ', 'You want produce and a sit-down curry'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
      { title: 'Night markets', href: '/thai-food/night-markets', photo: '/photos/thai-food-night-markets.jpg' },
      { title: 'Ari', href: '/bangkok/ari', photo: '/photos/ari.jpg' },
      { title: 'Grab and BTS', href: '/plan/grab-and-bts', photo: '/photos/bts.jpg' },
    ],
    affiliates: [
      stay('Sukhumvit stays', 'BTS to Mo Chit', 'Sleep on the Sukhumvit BTS if Saturday is Chatuchak and Sunday is a wat.', stayAreaLink('sukhumvit'), '/photos/sukhumvit.jpg'),
      klook('Market and city tours', 'Tours', 'Use a guide only if your group will not split. The MRT already solves the gate.', klookTours('Chatuchak Weekend Market'), '/photos/bangkok.jpg'),
    ],
    faqs: [
      {
        q: 'Is Chatuchak open on weekdays?',
        a: 'The main market is Saturday and Sunday. Friday night is wholesale. Weekday visits hit a thinner clock and closed sois.',
      },
      {
        q: 'BTS Mo Chit or MRT Kamphaeng Phet?',
        a: 'Kamphaeng Phet Exit 2 if you want to walk straight into Sections 1 and 2. Mo Chit if you are already on the BTS.',
      },
      {
        q: 'Can you do Chatuchak and the Grand Palace the same day?',
        a: 'Not well. The palace wants an 08:30 start on Rattanakosin. JJ wants a morning north of the city. Split them.',
      },
    ],
  },
  {
    path: '/attractions/damnoen-saduak-and-amphawa-floating-markets',
    title: 'Damnoen Saduak and Amphawa floating markets',
    description:
      'Damnoen Saduak runs daily 07:00 to 11:00; a private longtail is 1,500 to 2,000 THB. Amphawa is Friday to Sunday 14:00 to 20:30, with 60 to 100 THB firefly boats.',
    lede:
      'Use Damnoen Saduak if you need a morning canal on any weekday. Use Amphawa if you want local seafood on a weekend evening. Maeklong trains pass at 08:30, 11:10, 14:30, and 17:40.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Damnoen Saduak and Amphawa', href: '/attractions/damnoen-saduak-and-amphawa-floating-markets' },
    ],
    facts: [
      { label: 'Damnoen Saduak', value: 'Daily 07:00 to 11:00; private longtail 1,500 to 2,000 THB' },
      { label: 'Amphawa', value: 'Fri to Sun 14:00 to 20:30; firefly boat 60 to 100 THB' },
      { label: 'Maeklong trains', value: 'Passes about 08:30, 11:10, 14:30, and 17:40' },
      { label: 'Drive', value: 'About 1.5 to 2 hours west of Bangkok, Ratchaburi and Samut Songkhram' },
    ],
    chips: ['Weekday canal', 'Weekend seafood', 'Maeklong train'],
    photo: '/photos/riverside.jpg',
    geo: { lat: 13.5186, lon: 99.954, containedIn: 'Ratchaburi' },
    paragraphs: [
      'Damnoen Saduak in Ratchaburi is the daily morning canal. Boats and stalls run about 07:00 to 11:00. After that the water empties. A private longtail for a short loop is 1,500 to 2,000 THB in 2026. Shared boats are cheaper and more stop-start. Tour buses photograph this canal. Go early or skip it.',
      'Amphawa in Samut Songkhram is the weekend evening market, Friday to Sunday about 14:00 to 20:30. You walk the boards, eat grilled seafood, and optionally take a firefly boat for 60 to 100 THB after dusk. Maeklong Railway Market (Talad Rom Hoop) is the third stop: the train still parts the awnings at about 08:30, 11:10, 14:30, and 17:40. Confirm the board at Mae Klong station. A van from Bangkok is about 1.5 to 2 hours. A day tour that hits all three is a long Saturday, not a casual add-on.',
    ],
    sections: [
      {
        id: 'which',
        title: 'Pick one canal, or accept a long Saturday',
        paragraphs: [
          'Weekday: Damnoen Saduak at opening, then back to Bangkok for dinner. Weekend: Amphawa in the afternoon and a firefly boat. Add Maeklong only if you will stand for a train and leave. Do not promise all three plus the Grand Palace.',
        ],
        table: {
          headers: ['Stop', 'When', '2026 cash'],
          rows: [
            ['Damnoen Saduak', 'Daily 07:00 to 11:00', 'Private longtail 1,500 to 2,000 THB'],
            ['Amphawa', 'Fri to Sun 14:00 to 20:30', 'Food by plate; firefly boat 60 to 100 THB'],
            ['Maeklong Railway Market', 'Train at 08:30, 11:10, 14:30, 17:40', 'Stand back; the train still comes through'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
      { title: 'Chatuchak', href: '/attractions/chatuchak-weekend-market', photo: '/photos/bangkok.jpg' },
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { title: '5-day inland plan', href: '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi', photo: '/photos/kanchanaburi.jpg' },
    ],
    affiliates: [
      stay('Bangkok the night before', 'West-side start', 'Sleep in the city. The canals are a day, not a hotel base.', stayLink('bangkok'), '/photos/bangkok.jpg'),
      klook('Floating market day trips', 'Tours', 'Ask whether Damnoen, Amphawa, and Maeklong are all on the van, and what time you leave.', klookTours('Damnoen Saduak floating market'), '/photos/riverside.jpg'),
    ],
    faqs: [
      {
        q: 'Damnoen Saduak or Amphawa?',
        a: 'Damnoen if you only have a weekday morning. Amphawa if you can be there Friday to Sunday after 14:00 and want dinner on the canal.',
      },
      {
        q: 'Is the Maeklong train still running through the market?',
        a: 'Yes. The usual passes are about 08:30, 11:10, 14:30, and 17:40. Stand behind the stall line. Check the station board.',
      },
      {
        q: 'Can you do this without a tour?',
        a: 'Yes with a hired car or a van to Samut Songkhram. The tour is simpler if you cannot read the pier signs.',
      },
    ],
  },
  {
    path: '/attractions/wat-phra-that-doi-suthep',
    title: 'Wat Phra That Doi Suthep',
    description:
      'Doi Suthep is the gold chedi above Chiang Mai. Foreign entry is 30 THB, plus 20 THB for the funicular or 306 naga steps. Grounds run 06:00 to 20:00.',
    lede:
      'Wat Phra That Doi Suthep is known for the gold chedi and city view above Chiang Mai. Best as a first-timer morning: red songthaew from Chang Phuak Gate or the university, then 306 naga steps or the 20 THB cable car.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Wat Phra That Doi Suthep', href: '/attractions/wat-phra-that-doi-suthep' },
    ],
    facts: [
      { label: 'Ticket', value: '30 THB foreign entry; 20 THB funicular cable car' },
      { label: 'Hours', value: '06:00 to 20:00; arrive before 10:00 for cooler air' },
      { label: 'Stairs', value: '306-step naga staircase, or the cable car' },
      { label: 'Songthaew', value: '60 to 100 THB per person each way from Chang Phuak or CMU' },
    ],
    chips: ['30 THB', '306 steps', 'Red songthaew'],
    photo: '/photos/chiang-mai.jpg',
    geo: { lat: 18.8049, lon: 98.9216, containedIn: 'Chiang Mai' },
    paragraphs: [
      'Wat Phra That Doi Suthep sits on the ridge west of Chiang Mai. Foreign visitors pay 30 THB at the temple. The funicular cable car is 20 THB if you skip the 306-step naga staircase. Grounds are open 06:00 to 20:00. Dawn is for locals and cool air. Mid-morning is the tour-van hour. The chedi and the city view are the reason to go; the shops on the last bend are not.',
      'Red songthaews queue at Chang Phuak Gate and at Chiang Mai University. The usual fare is 60 to 100 THB per person each way in 2026. They wait to fill. A Grab or a hired songthaew costs more and leaves when you do. The road is steep. A first-week scooter in rain is a bad idea. Pair Bhubing Palace and the Hmong village at Doi Pui only if you have a car and a full afternoon, not after a late lunch in the moat.',
    ],
    sections: [
      {
        id: 'extensions',
        title: 'Temple only, or Bhubing and Doi Pui',
        paragraphs: [
          'The temple is a half-day from the moat if you ride a shared red truck and walk the stairs. Bhubing Palace (Phuping Ratchaniwet) sits farther up the same ridge and has its own ticket and dress rules when the royal family is not in residence. Doi Pui is the Hmong village beyond that. One extra stop is enough. Two extras turn the mountain into a car day.',
        ],
        table: {
          headers: ['Stop', 'Extra cash', 'Add it if'],
          rows: [
            ['Doi Suthep only', '30 THB plus 60 to 100 THB each way', 'You have a free morning'],
            ['Cable car', '20 THB', 'You do not want 306 steps'],
            ['Bhubing Palace', 'Separate palace ticket when open', 'You have a car and a clear afternoon'],
            ['Hmong Doi Pui', 'Village time, not a temple ticket', 'You want crafts, not a second chedi'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Doi Inthanon', href: '/chiang-mai/doi-inthanon', photo: '/photos/northern.jpg' },
      { title: 'Northern loop', href: '/itineraries/7-days-northern-thailand-loop', photo: '/photos/pai.jpg' },
    ],
    affiliates: [
      stay('Chiang Mai stays', 'Old City or Nimman', 'Sleep in the city. The mountain is a morning, not a hotel.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      klook('Doi Suthep trips', 'Tours', 'Useful if you also want Bhubing or a sunset viewpoint and do not want to flag a red truck.', klookTours('Doi Suthep Chiang Mai'), '/photos/chiang-mai.jpg'),
    ],
    faqs: [
      {
        q: 'Stairs or cable car?',
        a: 'Stairs if you want the naga and have the knees. The 20 THB funicular if you do not. Both end at the same terrace.',
      },
      {
        q: 'Where do you catch the red songthaew?',
        a: 'Chang Phuak Gate on the north moat, or the Chiang Mai University side. Expect 60 to 100 THB per person each way when the truck fills.',
      },
      {
        q: 'Can you add Doi Inthanon the same day?',
        a: 'No. Suthep is a half-day west of the city. Inthanon is a full day south-west with a 300 THB park gate.',
      },
    ],
  },
  {
    path: '/attractions/chiang-mai-ethical-elephant-sanctuaries',
    title: 'Chiang Mai ethical elephant sanctuaries',
    description:
      'Observation-only and feeding sanctuaries in Mae Taeng and Mae Wang. No riding, hooks, or shows. Half-day 1,800 to 2,500 THB; full-day 2,500 to 3,500 THB with hotel van pickup.',
    lede:
      'Use this if you want to watch and feed elephants, not ride them. Book a no-hook, no-show camp in Mae Taeng or Mae Wang. The van is part of the 2026 price.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Ethical elephant sanctuaries', href: '/attractions/chiang-mai-ethical-elephant-sanctuaries' },
    ],
    facts: [
      { label: 'Model', value: 'Observation and feeding only; zero riding, hooks, or shows' },
      { label: 'Half day', value: '1,800 to 2,500 THB including hotel van pickup' },
      { label: 'Full day', value: '2,500 to 3,500 THB; lunch and a longer forest walk' },
      { label: 'Valleys', value: 'Mae Taeng north of the city; Mae Wang south-west' },
    ],
    chips: ['No riding', 'Mae Taeng', 'Mae Wang'],
    photo: '/photos/chiang-mai.jpg',
    geo: { lat: 19.12, lon: 98.9, containedIn: 'Chiang Mai' },
    paragraphs: [
      'The useful Chiang Mai elephant day is a sanctuary that lets you walk, feed, and watch. It does not put you on a neck, in a howdah, or in a painting show. Mae Taeng is the northern valley. Mae Wang is south-west toward the Doi Inthanon roads. Half-day trips run 1,800 to 2,500 THB in 2026. Full days run 2,500 to 3,500 THB. Hotel pickup in a shared van is usually in the price. The drive is about 1 to 1.5 hours each way.',
      'A riding camp will still sell itself as a sanctuary. Ask three questions before you pay: Do guests ride? Are bullhooks on site? Are there circus tricks or painting? If any answer is yes, pick another desk. Mud spas and bathing can still stress animals when they are staged for cameras. Feeding platforms and long observation walks are the quieter model. Book direct or through a Klook listing that states no riding in the inclusions, not through a soi tout on Monday night.',
    ],
    sections: [
      {
        id: 'checks',
        title: 'How to verify a welfare-first camp',
        paragraphs: [
          'Read recent guest photos, not the homepage. You want people on a path, not on a neck. Chains for overnight medical care can exist at even careful camps; chains in the tourist yard are a different story. Group size matters. A van of 10 is already a crowd around one animal. Full-day trips add a longer forest walk and lunch. They do not add riding if the camp is the kind this page means.',
        ],
        table: {
          headers: ['Signal', 'Keep looking', 'Walk away'],
          rows: [
            ['Activity list', 'Feed, walk, observe', 'Ride, show, paint, polo'],
            ['Tools', 'Guides on foot, no hook in hand', 'Bullhook, metal seat, circus music'],
            ['Price 2026', 'Half-day 1,800 to 2,500 THB', 'A 900 THB ride that includes a show'],
            ['Pickup', 'Shared van from the Old City or Nimman', 'A scooter convoy you must drive yourself'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Doi Suthep', href: '/attractions/wat-phra-that-doi-suthep', photo: '/photos/chiang-mai.jpg' },
      { title: 'Northern Lanna food', href: '/thai-food/northern-lanna', photo: '/photos/thai-food-lanna.jpg' },
      { title: 'Chiang Mai to Pai', href: '/get-there/chiang-mai-to-pai', photo: '/photos/pai.jpg' },
    ],
    affiliates: [
      stay('Chiang Mai the night before', 'Old City pickup', 'Most vans collect inside the moat or in Nimman at about 07:30 to 08:30.', stayLink('chiang-mai'), '/photos/chiang-mai.jpg'),
      klook('No-riding elephant days', 'Tours', 'Filter for observation-only. If the listing shows a howdah, skip it.', klookTours('Chiang Mai ethical elephant sanctuary'), '/photos/chiang-mai.jpg'),
    ],
    faqs: [
      {
        q: 'Is bathing ethical?',
        a: 'It depends on whether the animals choose the water and how many guests crowd them. Feeding and walking are the simpler test. If bathing is staged every hour on a clock, treat it as a show.',
      },
      {
        q: 'Mae Taeng or Mae Wang?',
        a: 'Both work if the rules are no riding and no hook. Mae Taeng is the usual north-valley cluster. Mae Wang sits toward the Inthanon roads. Do not pair Inthanon and an elephant day.',
      },
      {
        q: 'Do prices include the van?',
        a: 'The 1,800 to 3,500 THB band almost always includes hotel pickup. Confirm the pickup window and whether a private van is extra.',
      },
    ],
  },
  {
    path: '/attractions/white-temple-wat-rong-khun-and-blue-temple',
    title: 'White Temple, Blue Temple, and Baan Dam',
    description:
      "Chalermchai Kositpipat's White Temple in Chiang Rai is 100 THB, 08:00 to 17:00. The Blue Temple is free. Baan Dam Museum is 80 THB. Greenbus VIP or a Klook van from Chiang Mai.",
    lede:
      'The White Temple is known for Chalermchai Kositpipat\'s unfinished white ubosot, paired on the same day with the Blue Temple and Baan Dam. Best as a long day from Chiang Mai or one night in Chiang Rai, not a first-week add-on to Pai.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'White Temple and Blue Temple', href: '/attractions/white-temple-wat-rong-khun-and-blue-temple' },
    ],
    facts: [
      { label: 'White Temple', value: 'Wat Rong Khun, 100 THB foreign entry, 08:00 to 17:00' },
      { label: 'Blue Temple', value: 'Wat Rong Suea Ten, free entry; donate if you want' },
      { label: 'Baan Dam', value: 'Black House museum, 80 THB; north of town' },
      { label: 'From Chiang Mai', value: 'Greenbus VIP from Arcade Terminal, or a Klook day-trip van' },
    ],
    chips: ['100 THB', 'Blue Temple free', 'Greenbus'],
    photo: '/photos/chiang-rai.jpg',
    geo: { lat: 19.8242, lon: 99.7633, containedIn: 'Chiang Rai' },
    paragraphs: [
      'Wat Rong Khun, the White Temple, is Chalermchai Kositpipat\'s unfinished art wat south of Chiang Rai city. Foreign adults pay 100 THB in 2026. Hours are 08:00 to 17:00. The bridge, the white ubosot, and the mural room are the visit. Dress like a temple: covered shoulders and knees. Drones and loud fashion shoots get stopped.',
      'Wat Rong Suea Ten, the Blue Temple, sits closer to the river in town and does not charge a foreign ticket. Baan Dam Museum, the Black House of Thawan Duchanee, is 80 THB north of the city and is a dark-wood compound, not a wat. From Chiang Mai, Greenbus VIP leaves Arcade Bus Terminal and takes about 3 to 3.5 hours. A Klook day-trip van hits the White Temple, Blue Temple, and often Baan Dam or the Golden Triangle. Sleep in Chiang Rai if you want dawn at the White Temple without a 05:00 lobby call.',
    ],
    sections: [
      {
        id: 'order',
        title: 'A workable Chiang Rai loop',
        paragraphs: [
          'Day trip: White Temple first, Blue Temple, then Baan Dam if the van still has daylight. Overnight: arrive on Greenbus, do Blue Temple and dinner in town, White Temple at opening, Baan Dam on the way out. The Golden Triangle and the Mekong are a different hour north. Do not add Pai on the same spine.',
        ],
        table: {
          headers: ['Site', 'Fee', 'Notes'],
          rows: [
            ['Wat Rong Khun (White Temple)', '100 THB foreign', '08:00 to 17:00, south of the city'],
            ['Wat Rong Suea Ten (Blue Temple)', 'Free', 'In town; still a working wat'],
            ['Baan Dam Museum', '80 THB', 'Black House; allow 45 to 75 minutes'],
            ['Greenbus VIP', 'About 3 to 3.5 hours from Arcade', 'Buy at the terminal or a day-trip van'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Chiang Rai', href: '/chiang-rai', photo: '/photos/chiang-rai.jpg' },
      { title: 'Chiang Mai to Chiang Rai', href: '/get-there/chiang-mai-to-chiang-rai', photo: '/photos/chiang-rai.jpg' },
      { title: 'Northern corridor', href: '/destinations/northern-thailand', photo: '/photos/northern.jpg' },
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
    ],
    affiliates: [
      stay('Chiang Rai overnight', 'If the van is too tight', 'One night if you want the White Temple at opening without a pre-dawn Chiang Mai lobby.', stayLink('chiang-rai'), '/photos/chiang-rai.jpg'),
      klook('White Temple day trips', 'Tours', 'Confirm White, Blue, and Baan Dam. Golden Triangle adds a long north leg.', klookTours('White Temple Chiang Rai day trip'), '/photos/chiang-rai.jpg'),
    ],
    faqs: [
      {
        q: 'Is the Blue Temple free?',
        a: 'Yes. Wat Rong Suea Ten does not sell a foreign ticket. Dress as you would at any wat. A donation box sits near the door.',
      },
      {
        q: 'Day trip or overnight?',
        a: 'Day trip if you only want the three art sites. Overnight if you refuse a 12-hour van day. Greenbus VIP is the public option from Arcade Terminal.',
      },
      {
        q: 'Can you add Pai?',
        a: 'Not on the same day. The usual Prempracha minivan to Pai is about 3 hours the other way from Chiang Mai.',
      },
    ],
  },
  {
    path: '/attractions/phang-nga-bay-and-james-bond-island',
    title: 'Phang Nga Bay and James Bond Island',
    description:
      'Ao Phang Nga National Park is 300 THB for foreign visitors. Hong and Panak caves, Khao Phing Kan, Koh Tapu, and Koh Panyi sit on the same bay. Leave Ao Po Pier by 07:30.',
    lede:
      'Phang Nga Bay is known for Hong and Panak sea-canoe caves and the Koh Tapu needle. Best as an early Ao Po day from Phuket or Phang Nga, not a Patong beach.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Phang Nga Bay', href: '/attractions/phang-nga-bay-and-james-bond-island' },
    ],
    facts: [
      { label: 'Park fee', value: '300 THB foreign adult at Ao Phang Nga National Park' },
      { label: 'Needle', value: 'Khao Phing Kan and Koh Tapu, the 1974 Bond location' },
      { label: 'Caves', value: 'Hong Island and Panak Island tidal sea-canoe tunnels' },
      { label: 'Pier', value: 'Ao Po Pier; aim for a 07:30 departure' },
    ],
    chips: ['300 THB', 'Ao Po 07:30', 'Koh Panyi'],
    photo: '/photos/phuket.jpg',
    geo: { lat: 8.2746, lon: 98.5005, containedIn: 'Phang Nga' },
    paragraphs: [
      'Ao Phang Nga National Park is the drowned limestone bay north of Phuket. Foreign adults pay 300 THB. The postcard is Khao Phing Kan and the Koh Tapu needle, the 1974 James Bond island pair. The better hour is often a canoe into the tidal caves at Hong Island or Panak Island, where the roof opens onto a hidden lagoon. Koh Panyi is the floating Muslim village on stilts. It is a lunch stop, not a hotel island.',
      'Most Phuket boats use Ao Po Pier on the island\'s northeast coast. A 07:30 departure puts you in the caves before the mid-morning fleet. Later boats spend the Bond stop in a queue of longtails. November to April is the Andaman window. May to October cancels more days. The 300 THB park fee is often extra to the Klook or hotel desk price. Ask.',
    ],
    sections: [
      {
        id: 'boats',
        title: 'Canoe, longtail, or speedboat',
        paragraphs: [
          'Sea-canoe days exist to fit the caves at the right tide. A big-boat day with a canoe add-on is the usual first-timer product. A private longtail from Phang Nga town or Ao Po costs more and can linger at Panak. Speedboats cut the transfer and roughen the ride. Do not stack this with a Phi Phi day. They are different parks and different hours.',
        ],
        table: {
          headers: ['Stop', 'What you do', 'Watch for'],
          rows: [
            ['Hong or Panak caves', 'Paddle at slack tide', 'Low ceilings; listen to the canoe guide'],
            ['Khao Phing Kan / Koh Tapu', 'Short landing and the needle view', 'Late boats share one jetty'],
            ['Koh Panyi', 'Stilt village and lunch', 'Souvenir lanes; eat and walk on'],
            ['Ao Po Pier', '07:30 start', 'Phuket northeast, not Rassada'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Phi Phi and Maya Bay', href: '/attractions/phi-phi-islands-and-maya-bay', photo: '/photos/krabi.jpg' },
      { title: 'Khao Lak', href: '/khao-lak', photo: '/photos/khao-lak.jpg' },
      { title: 'Phuket to Krabi', href: '/get-there/phuket-to-krabi-phi-phi', photo: '/photos/krabi.jpg' },
    ],
    affiliates: [
      stay('Phuket northeast or west', 'Ao Po is closer from the north', 'Kamala and Surin add a cross-island drive. The northeast cuts the 07:30 rush.', stayLink('phuket'), '/photos/phuket.jpg'),
      klook('Phang Nga canoe days', 'Island hopping', 'Ask if the 300 THB park fee and the canoe slot are included.', klookIslandHopping('Phang Nga Bay'), '/photos/phuket.jpg'),
    ],
    faqs: [
      {
        q: 'Is James Bond Island the whole park?',
        a: 'No. Khao Phing Kan and Koh Tapu are one stop. The caves at Hong and Panak are why you leave at 07:30.',
      },
      {
        q: 'Can you swim at Koh Tapu?',
        a: 'Treat it as a landing and a photo stop. The canoe lagoons are the swim or float, when the guide says the tide is right.',
      },
      {
        q: 'Phuket or Krabi as a base?',
        a: 'Phuket for Ao Po. Krabi boats exist but Phang Nga is a different bay than Phi Phi. Pick one boat day.',
      },
    ],
  },
  {
    path: '/attractions/phi-phi-islands-and-maya-bay',
    title: 'Phi Phi Islands and Maya Bay',
    description:
      'Hat Noppharat Thara-Mu Ko Phi Phi National Park is 400 THB for foreign visitors. Maya Bay uses the Loh Samah boardwalk. No swimming in the bay. Reef-recovery closures run August to September.',
    lede:
      'Maya Bay is known as the Phi Phi Leh cove you walk into from Loh Samah; swimming in the bay is banned. Best as a day boat with a swim at Pileh Lagoon or Bamboo Island, park fee 400 THB.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Phi Phi and Maya Bay', href: '/attractions/phi-phi-islands-and-maya-bay' },
    ],
    facts: [
      { label: 'Park fee', value: '400 THB foreign adult, Hat Noppharat Thara-Mu Ko Phi Phi' },
      { label: 'Maya Bay entry', value: 'Loh Samah Bay floating pier and boardwalk; no swim in Maya Bay' },
      { label: 'Closure', value: 'Annual reef-recovery shutdown August to September; check the year' },
      { label: 'Swim stops', value: 'Pileh Lagoon and Bamboo Island on most day boats' },
    ],
    chips: ['400 THB', 'No swim in Maya', 'Pileh Lagoon'],
    photo: '/photos/krabi.jpg',
    geo: { lat: 7.6778, lon: 98.7664, containedIn: 'Krabi' },
    paragraphs: [
      'Maya Bay sits on Koh Phi Phi Leh inside Hat Noppharat Thara-Mu Ko Phi Phi National Park. Foreign adults pay 400 THB. You do not land on the Maya Beach sand from the movie side. Boats use the Loh Samah Bay floating pier on the back of the island, then a boardwalk over the ridge into Maya Bay. Swimming in Maya Bay is banned. Rangers enforce it. The annual reef-recovery closure typically runs August to September; confirm the dates the year you travel because the park posts them annually.',
      'Pileh Lagoon is the emerald swim stop on the same island. Bamboo Island (Koh Mai Phai) is the sandbar snorkel many Phuket and Krabi boats add. Day boats leave Rassada Pier in Phuket or Nopparat Thara and Ao Nang in Krabi. November to April is the Andaman window. Overnight on Tonsai if you want dawn on Phi Phi Don. Do not expect a quiet Maya Bay at 11:00. The boardwalk still beats a cancelled swim rumour from 2018. The rule is no swim, not no visit.',
    ],
    sections: [
      {
        id: 'rules',
        title: 'What is open and what is banned',
        paragraphs: [
          'Maya Bay is a timed visit on a boardwalk. Pileh is the swim. Viking Cave is a longtail photo pass, not a climb. Phi Phi Don (Tonsai, Long Beach) is the hotel island. Phi Phi Leh is the park island. A speedboat from Phuket is a long sea day. A Krabi boat is shorter. Sleeping on Phi Phi Don lets you take a dawn longtail before the big boats, still through Loh Samah.',
        ],
        table: {
          headers: ['Place', 'Rule', '2026 cash'],
          rows: [
            ['Maya Bay', 'Boardwalk from Loh Samah; no swimming', '400 THB park fee, often extra to the tour'],
            ['Pileh Lagoon', 'Swim and float', 'Usually on the same ticketed day'],
            ['Bamboo Island', 'Snorkel and sand', 'Common add-on from Phuket or Krabi'],
            ['Aug to Sep', 'Reef-recovery closure window', 'Check DNP the month you book'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Railay', href: '/attractions/railay-beach-and-phra-nang-cave', photo: '/photos/krabi.jpg' },
      { title: 'Phuket to Phi Phi', href: '/get-there/phuket-to-krabi-phi-phi', photo: '/photos/phuket.jpg' },
      { title: 'Andaman 2 weeks', href: '/itineraries/2-weeks-andaman-island-hopping', photo: '/photos/koh-lanta.jpg' },
    ],
    affiliates: [
      stay('Krabi or Phuket the night before', 'Ao Nang or a Phuket west beach', 'No boat on landing day. Sleep, then take the morning speedboat.', stayLink('krabi'), '/photos/krabi.jpg'),
      klook('Phi Phi and Maya Bay boats', 'Island hopping', 'Ask if the 400 THB park fee is included and whether Maya Bay is on the itinerary that month.', klookIslandHopping('Phi Phi Maya Bay'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'Can you swim in Maya Bay in 2026?',
        a: 'No. The conservation rule still bans swimming in Maya Bay. Use Pileh Lagoon or Bamboo Island.',
      },
      {
        q: 'Is the bay closed in August?',
        a: 'The park has used August to September as a reef-recovery closure. Confirm the posted dates the year you travel. Boats still run to other Phi Phi stops when Maya is shut.',
      },
      {
        q: 'Phuket or Krabi for the boat?',
        a: 'Krabi is the shorter sea. Phuket is fine if you already sleep there. Do not add Phang Nga the same day.',
      },
    ],
  },
  {
    path: '/attractions/railay-beach-and-phra-nang-cave',
    title: 'Railay Beach and Phra Nang Cave',
    description:
      'Railay is a roadless limestone peninsula. A 15-minute longtail from Ao Nang or Ao Nam Mao is 100 THB per person in the day. Half-day bolted climbing is 1,200 to 2,000 THB.',
    lede:
      'Railay is known for Phra Nang Cave Beach and bolted limestone climbing on a roadless peninsula. Best for swimmers and climbers who will take the 15-minute longtail; West is the sunset swim, East is the boardwalk and mud flats.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Railay and Phra Nang', href: '/attractions/railay-beach-and-phra-nang-cave' },
    ],
    facts: [
      { label: 'Boat', value: '15-minute longtail from Ao Nang or Ao Nam Mao, 100 THB daytime' },
      { label: 'Night boat', value: 'After dark from Ao Nang costs more; agree the fare before you sit' },
      { label: 'Climbing', value: 'Half-day bolted limestone 1,200 to 2,000 THB with a guide' },
      { label: 'Beaches', value: 'Railay West for sunset swim; Railay East for the boardwalk' },
    ],
    chips: ['100 THB longtail', 'Phra Nang', 'Climbing'],
    photo: '/photos/krabi.jpg',
    geo: { lat: 8.0117, lon: 98.8372, containedIn: 'Krabi' },
    paragraphs: [
      'Railay has no road. You arrive by longtail from Ao Nang or Ao Nam Mao in about 15 minutes. The shared daytime fare is 100 THB per person in 2026. Boats wait to fill on the Ao Nang sand. Ao Nam Mao is useful if you sleep east of the headland or want a shorter crossing in chop. After dark the fare rises and you should lock it before you sit down.',
      'Phra Nang Cave Beach is the east-south sand under the stalactite shrine and the high karsts. Railay West is the wider sunset swim. Railay East is mangroves, a wooden boardwalk, and mud at low tide. Half-day bolted climbing with a licensed Krabi guide runs 1,200 to 2,000 THB, shoes and harness included. Tonsai Beach, over the rocks, is the dirtbag climbing cove. November to April is the Andaman swim. Sleep on Railay if the peninsula is the point. Sleep in Ao Nang if Railay is a day trip.',
    ],
    sections: [
      {
        id: 'sides',
        title: 'West swim, East walk, Phra Nang sand',
        paragraphs: [
          'Walk the path from East to West in about 10 minutes. The Phra Nang trail hugs the south rocks and can flood at a high tide. Climbing shops sit on East and near Tonsai. Book a half day if you have never belayed on limestone. A full day is for people who already climb.',
        ],
        table: {
          headers: ['Spot', 'How you use it', '2026 note'],
          rows: [
            ['Ao Nang longtail', 'Shared boat, about 15 minutes', '100 THB per person in daylight'],
            ['Railay West', 'Sunset swim and the wider sand', 'Hotels and the smoother water'],
            ['Railay East', 'Boardwalk, shops, climbing desks', 'Mud flats at low tide'],
            ['Phra Nang Cave Beach', 'Karsts and the shrine cave', 'Walk from East; watch the tide'],
            ['Half-day climb', 'Bolted routes with a guide', '1,200 to 2,000 THB'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Krabi', href: '/krabi', photo: '/photos/krabi.jpg' },
      { title: 'Phi Phi and Maya Bay', href: '/attractions/phi-phi-islands-and-maya-bay', photo: '/photos/krabi.jpg' },
      { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
      { title: 'Krabi to Lanta', href: '/get-there/krabi-to-koh-lanta', photo: '/photos/koh-lanta.jpg' },
    ],
    affiliates: [
      stay('Ao Nang or Railay', 'Boat base', 'Ao Nang if Railay is a day. Railay West if you want to skip the last longtail at dusk.', stayLink('krabi'), '/photos/krabi.jpg'),
      klook('Railay boats and climbs', 'Tours', 'Longtails are easier off the sand. Climbing packages should name the half-day rate.', klookTours('Railay Beach Krabi'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'Is 100 THB per person still the daytime fare?',
        a: 'Yes as a shared longtail from Ao Nang or Ao Nam Mao in daylight. Night boats and private charters cost more. Agree before you board.',
      },
      {
        q: 'West or East?',
        a: 'West to swim and sleep. East to walk the boardwalk and find a climbing shop. Phra Nang is the south sand, not a third village.',
      },
      {
        q: 'Can you drive to Railay?',
        a: 'No. The peninsula is water-access only. Ao Nam Mao is the closest road. Then you still boat.',
      },
    ],
  },
  {
    path: '/attractions/cheow-lan-lake-khao-sok',
    title: 'Cheow Lan Lake, Khao Sok',
    description:
      'Cheow Lan Lake is the karst reservoir at Ratchaprapha Dam. Park fee 300 THB at the dam pier. A private longtail is 1,800 to 2,500 THB for the Three Brothers and a cave.',
    lede:
      'Come for Guilin-style limestone on a reservoir, not a Gulf beach. Charter a longtail from Ratchaprapha Dam. Overnight on a floating rafthouse if one day is not enough.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Cheow Lan Lake', href: '/attractions/cheow-lan-lake-khao-sok' },
    ],
    facts: [
      { label: 'Fees', value: '300 THB national park at the dam pier' },
      { label: 'Longtail', value: 'Private charter 1,800 to 2,500 THB for karsts and a cave' },
      { label: 'Pier', value: 'Ratchaprapha Dam, not Khao Sok village on Highway 401' },
      { label: 'Sleep', value: 'Floating rafthouse tiers, or a 401 bungalow the night before' },
    ],
    chips: ['Ratchaprapha', '300 THB', 'Rafthouse'],
    photo: '/photos/khao-sok.jpg',
    geo: { lat: 8.9167, lon: 98.7667, containedIn: 'Surat Thani' },
    paragraphs: [
      'Cheow Lan Lake (Rajjaprabha) is the flooded karst basin in Khao Sok National Park, Surat Thani. The public pier is at Ratchaprapha Dam, a different place from Khao Sok village on Highway 401. Foreign adults pay 300 THB at the park gate in 2026. A private longtail charter for the Three Brothers (Khao Sam Kler), a swim stop, and either Nam Talu Cave or Coral Cave runs 1,800 to 2,500 THB depending on hours and fuel. Shared tour boats are cheaper and stick to a script.',
      'Nam Talu is a wet cave that needs a guide and settled rain. Coral Cave is the drier alternative when the park has closed Nam Talu. Overnight rafthouses sit in the coves: a basic floating room is the point, not a resort spa. Night safaris and dawn mist are why people stay. November to April is the easier lake. October rain still closes caves. Pair this with Khao Lak or Surat Thani, not with a same-day Samui boat.',
    ],
    sections: [
      {
        id: 'day-or-night',
        title: 'Day charter versus rafthouse night',
        paragraphs: [
          'A day trip from a 401 bungalow means a 07:00 to 08:00 transfer to the dam, a longtail loop, and back for dinner. A rafthouse night cuts the second road transfer and puts you on the water at dawn. Book the raft through a park-linked desk. Bring cash. There is no ATM on the lake.',
        ],
        table: {
          headers: ['Option', '2026 cash', 'Who it fits'],
          rows: [
            ['Park gate', '300 THB', 'Everyone who lands at the dam'],
            ['Private longtail', '1,800 to 2,500 THB', 'Three Brothers, swim, one cave'],
            ['Shared tour boat', 'Lower per person', 'Fixed stops, more neighbours'],
            ['Rafthouse night', 'Tiered by cove and room', 'Dawn mist; bring cash'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Surat Thani to Khao Sok', href: '/get-there/surat-thani-to-khao-sok', photo: '/photos/khao-sok.jpg' },
      { title: 'Phuket to Khao Sok', href: '/get-there/phuket-to-khao-sok', photo: '/photos/phuket.jpg' },
      { title: 'Khao Lak', href: '/khao-lak', photo: '/photos/khao-lak.jpg' },
    ],
    affiliates: [
      stay('Khao Sok village', 'Highway 401', 'Sleep on 401 the night before a dam morning, unless the rafthouse is already booked.', stayLink('khao-lak'), '/photos/khao-sok.jpg'),
      klook('Cheow Lan boats', 'Tours', 'Ask if the 300 THB park fee and cave guide are included.', klookTours('Cheow Lan Lake Khao Sok'), '/photos/khao-sok.jpg'),
      {
        title: 'URT airport car',
        kicker: 'Trip.com',
        body: 'Surat Thani Airport to Khao Sok is the inland transfer. Do not plan a same-day Samui ferry.',
        href: transferLink('URT'),
        cta: 'Book transfer',
        photo: '/photos/khao-sok.jpg',
        partner: 'transfer',
      },
    ],
    faqs: [
      {
        q: 'Is the pier in Khao Sok village?',
        a: 'No. Ratchaprapha Dam is a separate drive from the 401 village. Budget transfer time both ways.',
      },
      {
        q: 'Nam Talu or Coral Cave?',
        a: 'Nam Talu when the park says the water is safe. Coral Cave when Nam Talu is closed. Neither is a casual swim cave.',
      },
      {
        q: 'Do you need to sleep on the lake?',
        a: 'No. A day charter is enough for the Three Brothers. Stay overnight if dawn on the water is the reason you came.',
      },
    ],
  },
  {
    path: '/attractions/sanctuary-of-truth-pattaya',
    title: 'Sanctuary of Truth, Pattaya',
    description:
      'The Sanctuary of Truth in Naklua is a 105-metre-high wooden hall of teak and other hardwoods, built with traditional joinery and no metal nails. Daytime entry is 500 THB, 08:00 to 18:00, with helmets on the guided tour.',
    lede:
      'The Sanctuary of Truth is known for a 105-metre-high carved wooden hall on the Naklua waterfront, built of teak and other hardwoods with traditional joinery. Best as a Pattaya morning for a guided hard-hat walk, not a beach-club stop.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Sanctuary of Truth', href: '/attractions/sanctuary-of-truth-pattaya' },
    ],
    facts: [
      { label: 'Ticket', value: '500 THB daytime entry in 2026' },
      { label: 'Hours', value: '08:00 to 18:00 guided slots; evening session on selected nights' },
      { label: 'Build', value: '105 metres high; teak and other hardwoods; traditional joinery, no metal nails' },
      { label: 'Dress', value: 'Cover knees and shoulders; helmets issued for the tour' },
    ],
    chips: ['500 THB', 'Naklua', 'Helmet tour'],
    photo: '/photos/pattaya.jpg',
    geo: { lat: 12.9733, lon: 100.8892, containedIn: 'Pattaya' },
    paragraphs: [
      'The Sanctuary of Truth (Prasat Sut Ja-Tum) stands on the Naklua waterfront north of central Pattaya. The carved hall is 105 metres high and about 100 metres on each side. The main structure uses teak plus mai daeng, mai takien, and mai panchart, assembled with traditional wood joinery and no metal nails. Construction has been ongoing since the 1980s. Foreign daytime entry is 500 THB in 2026. Hours are 08:00 to 18:00, run as guided slots. You wear a helmet because this is still a worksite as well as a monument. An evening session with lights runs on selected nights; check the desk the week you go.',
      'Cover knees and shoulders. The same rule as a wat applies even though this is a private foundation, not a royal temple. Grab from Walking Street is 20 to 30 minutes depending on the beach road. A baht bus to Naklua is cheaper and slower. This is not a first-trip substitute for Ayutthaya or the Grand Palace. Use it if Pattaya is already the base.',
    ],
    sections: [
      {
        id: 'visit',
        title: 'Day slot versus evening lights',
        paragraphs: [
          'The day tour is the carving and the sea terrace. Guides move groups on a clock. The evening session is lighting and a shorter walk. You do not need both. Pair a morning here with a quiet Naklua lunch, not with Jomtien and a fight card the same afternoon.',
        ],
        table: {
          headers: ['Detail', '2026 fact', 'Note'],
          rows: [
            ['Day ticket', '500 THB', '08:00 to 18:00 guided slots'],
            ['Helmet', 'Issued at the start', 'Works in progress overhead'],
            ['Height and method', '105 metres high; teak and other hardwoods; no nails', 'Still being carved'],
            ['Dress', 'Knees and shoulders covered', 'Wraps at the gate if you need them'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Central and east', href: '/destinations/central-and-east', photo: '/photos/ayutthaya.jpg' },
      { title: 'Hua Hin', href: '/hua-hin', photo: '/photos/hua-hin.jpg' },
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
      { title: 'Attractions hub', href: '/attractions', photo: '/photos/old-city.jpg' },
    ],
    affiliates: [
      stay('Pattaya or Naklua stays', 'North beach if this is the morning', 'Naklua cuts the ride. Central Pattaya if the night is Walking Street.', stayLink('pattaya'), '/photos/pattaya.jpg'),
      klook('Sanctuary tickets', 'Attraction tickets', 'Day or evening. Confirm the 500 THB gate and whether a transfer is bundled.', klookTickets('Sanctuary of Truth Pattaya'), '/photos/pattaya.jpg'),
    ],
    faqs: [
      {
        q: 'Is it a Buddhist temple?',
        a: 'It is a private wooden sanctuary with Hindu and Buddhist carving. Treat the dress code like a wat. It is not Wat Phra Kaew.',
      },
      {
        q: 'Do you need the helmet tour?',
        a: 'Yes in the day. The hall is still a construction site. Evening sessions use a shorter, lit route. Check which product you bought.',
      },
      {
        q: 'Is this worth a trip from Bangkok?',
        a: 'Only if Pattaya is already on the plan. From Bangkok, Ayutthaya or the Grand Palace is the better teak-and-temple day.',
      },
    ],
  },
  {
    path: '/attractions/muay-thai-stadiums-rajadamnern-and-lumpinee',
    title: 'Rajadamnern and Lumpinee Muay Thai',
    description:
      'Rajadamnern Stadium (1945) near Khao San runs RWS Saturdays and Petchyindee Thursdays at 1,500 to 3,500 THB. ONE Lumpinee is Friday nights near MRT Pink Line Ram Inthra 3 (PK17).',
    lede:
      'Rajadamnern is known for Thursday Petchyindee cards and Saturday RWS nights near Khao San. ONE Lumpinee on Fridays at the Ram Inthra stadium suits planners who want the Pink Line hall, not the old Rama IV venue.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Attractions', href: '/attractions' },
      { name: 'Rajadamnern and Lumpinee', href: '/attractions/muay-thai-stadiums-rajadamnern-and-lumpinee' },
    ],
    facts: [
      { label: 'Rajadamnern', value: 'Founded 1945, near Khao San Road, Ratchadamnoen Nok' },
      { label: 'Traditional cards', value: 'Petchyindee Thursdays; RWS Saturday nights, 1,500 to 3,500 THB' },
      { label: 'ONE Lumpinee', value: 'Friday nights at the new Lumpinee, Ram Inthra' },
      { label: 'Rail', value: 'Pink Line Ram Inthra 3 (PK17) for ONE; Old City Grab for Rajadamnern' },
    ],
    chips: ['RWS Saturday', 'ONE Friday', '1,500 to 3,500 THB'],
    photo: '/photos/nightlife.jpg',
    geo: { lat: 13.76, lon: 100.506, containedIn: 'Bangkok' },
    paragraphs: [
      'Rajadamnern Stadium opened in 1945 on Ratchadamnoen Nok, a short Grab from Khao San and the Democracy Monument. Thursday Petchyindee cards and Saturday RWS (Rajadamnern World Series) nights are the useful 2026 products. Ringside and close-floor seats run about 1,500 to 3,500 THB depending on the card. Buy from the stadium or a Klook listing that names the exact date. A soi tout with a laminated card is how you overpay.',
      'Lumpinee Boxing Stadium is no longer on Rama IV. ONE Championship Friday nights run at the new Lumpinee on Ram Inthra, north-east Bangkok. The nearest rail is MRT Pink Line Ram Inthra 3 (PK17), about a 10-minute walk to the gate. ONE is a different show: gloves, music, and a broadcast clock. Rajadamnern on a Thursday is still the traditional stadium card. Do not book both on a first week. Pick one night and a late meal after.',
    ],
    sections: [
      {
        id: 'which-card',
        title: 'Which stadium and which night',
        paragraphs: [
          'Stay in the Old City or on Khao San if Rajadamnern is the night. Stay on Sukhumvit only if you accept a 20 to 40 minute Grab across town. For ONE Lumpinee, the Pink Line is the clean late-night rail. Last trains still matter; check the Pink Line board. Wear light, comfortable clothes. Confirm child tickets on the listing for the date you book.',
        ],
        table: {
          headers: ['Card', 'Where', '2026 seats'],
          rows: [
            ['Petchyindee Thursday', 'Rajadamnern, Ratchadamnoen Nok', '1,500 to 3,500 THB typical bands'],
            ['RWS Saturday', 'Rajadamnern, same stadium', '1,500 to 3,500 THB; buy a named date'],
            ['ONE Lumpinee Friday', 'New Lumpinee, Ram Inthra', 'ONE ticket tiers; Pink Line Ram Inthra 3'],
            ['Old Rama IV hall', 'Closed as the fight venue', 'Do not follow an old map there'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Old City', href: '/bangkok/old-city-rattanakosin', photo: '/photos/old-city.jpg' },
      { title: 'Nightlife', href: '/interests/nightlife', photo: '/photos/nightlife.jpg' },
      { title: 'Grand Palace', href: '/attractions/grand-palace-and-wat-phra-kaew', photo: '/photos/old-city.jpg' },
      { title: 'Bangkok', href: '/bangkok', photo: '/photos/bangkok.jpg' },
    ],
    affiliates: [
      stay('Old City or Khao San', 'Rajadamnern night', 'Sleep near Ratchadamnoen if Thursday or Saturday is the card.', stayAreaLink('rattanakosin'), '/photos/old-city.jpg'),
      klook('Fight night tickets', 'Attraction tickets', 'Name the stadium and the date. RWS Saturday is not a Tuesday tourist card.', klookTickets('Rajadamnern Muay Thai tickets'), '/photos/nightlife.jpg'),
    ],
    faqs: [
      {
        q: 'Is Lumpinee still on Rama IV?',
        a: 'No. ONE Friday nights are at the new Lumpinee on Ram Inthra. Use MRT Pink Line Ram Inthra 3 (PK17).',
      },
      {
        q: 'Thursday or Saturday at Rajadamnern?',
        a: 'Thursday Petchyindee is the traditional card. Saturday RWS is the branded night. Both sit in the 1,500 to 3,500 THB band for useful seats.',
      },
      {
        q: 'Can you walk from Khao San?',
        a: 'Rajadamnern is a short Grab or a long hot walk from Khao San. Do not walk it after the last fight if you do not know the blocks.',
      },
    ],
  },
];
