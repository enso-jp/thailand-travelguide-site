import {
  stayLink,
  stayAreaLink,
  hotelSearchLink,
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

export const WAVE11_INTEREST_PAGES: Page[] = [
  {
    path: '/interests/diving-and-snorkeling',
    title: 'Scuba diving and snorkeling in Thailand',
    description:
      'Thailand diving is known for Koh Tao PADI open-water courses (9,500 to 12,000 THB, 3 to 4 days), Similan and Surin boats from Khao Lak, and Phi Phi or Koh Haa day dives.',
    lede:
      'Thai diving is known for Koh Tao PADI Open Water weeks at 9,500 to 12,000 THB and Similan liveaboards from Khao Lak. Pick the Gulf or the Andaman by month, not by a Bangkok pool lesson.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Diving and snorkeling', href: '/interests/diving-and-snorkeling' },
    ],
    facts: [
      { label: 'Koh Tao PADI', value: 'Open Water 9,500 to 12,000 THB; 3 to 4 days; best Mar to Sep' },
      { label: 'Similan / Surin', value: 'Open 15 Oct to 15 May; park fee 300 to 500 THB' },
      { label: 'Andaman day dives', value: 'Phi Phi and Koh Haa from Phuket, Krabi, Lanta; Nov to Apr' },
      { label: 'Who it fits', value: 'First certs on Tao; liveaboards from Khao Lak' },
    ],
    chips: ['Koh Tao PADI', 'Similan boats', 'Phi Phi day dives'],
    photo: '/photos/koh-tao.jpg',
    paragraphs: [
      'Koh Tao is known for cheap PADI Open Water weeks, not for a second Full Moon. A 2026 Open Water course runs 9,500 to 12,000 THB for 3 to 4 days. Visibility is easier March to September on the Lower Gulf. Sleep Sairee for the strip or Mae Haad for the pier. Book the boat on [Koh Tao](/koh-tao).',
      'The Andaman side is a different calendar. Similan and Surin national parks open 15 October to 15 May. Day boats and liveaboards leave Khao Lak (Tab Lamu). Foreign marine-park fees run 300 to 500 THB on top of the ticket. Phi Phi and Koh Haa day dives run from Phuket, Krabi, and Koh Lanta from November to April. See [Similan and Surin](/khao-lak/similan-and-surin-islands) and [Phi Phi](/attractions/phi-phi-islands-and-maya-bay).',
    ],
    sections: [
      {
        id: 'where-and-when',
        title: 'Where the water is clear, and when boats run',
        paragraphs: [
          'Pick one sea. Tao in the Gulf drier months, or Khao Lak and Phi Phi in the Andaman dry season. Do not stack a Similan liveaboard with a Tao course in the same week. Snorkel days use the same piers and the same park fees.',
        ],
        table: {
          headers: ['Base', 'Known for', '2026 clock and fee'],
          rows: [
            ['Koh Tao', 'PADI Open Water and cheap fun dives', '9,500 to 12,000 THB; 3 to 4 days; Mar to Sep viz'],
            ['Khao Lak', 'Similan and Surin day boats and liveaboards', 'Open 15 Oct to 15 May; 300 to 500 THB park fee'],
            ['Phuket / Krabi / Lanta', 'Phi Phi and Koh Haa day dives', 'November to April; park fee extra'],
            ['Snorkel-only days', 'Same parks, no tank', 'Same boat desks; confirm the park fee line'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Koh Tao', href: '/koh-tao', photo: '/photos/koh-tao.jpg' },
      { title: 'Khao Lak parks', href: '/khao-lak/similan-and-surin-islands', photo: '/photos/khao-lak.jpg' },
      { title: 'Phi Phi and Maya Bay', href: '/attractions/phi-phi-islands-and-maya-bay', photo: '/photos/krabi.jpg' },
      { title: 'Beaches and island hopping', href: '/interests/beaches-and-island-hopping', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Koh Tao stays', 'Course week', 'Sleep Sairee if the shop is on the strip. Mae Haad if the pier is the plan.', stayAreaLink('sairee'), '/photos/koh-tao.jpg'),
      stay('Khao Lak stays', 'Similan boats', 'Sleep Bang Niang if the 15 October to 15 May park window is why you came.', stayAreaLink('bang-niang'), '/photos/khao-lak.jpg'),
      klook('Dive and snorkel boats', 'Tours', 'Name the park and the date. Confirm whether the 300 to 500 THB fee is included.', klookTours('Thailand scuba diving'), '/photos/koh-tao.jpg'),
    ],
    faqs: [
      {
        q: 'Koh Tao or Similan for a first cert?',
        a: 'Koh Tao for the PADI week at 9,500 to 12,000 THB. Similan for certified divers on a Khao Lak boat in the 15 October to 15 May window.',
      },
      {
        q: 'Are marine park fees in the Klook price?',
        a: 'Often not. Similan and Surin run 300 to 500 THB for a foreign adult. Read the inclusions line.',
      },
      {
        q: 'When is Phi Phi diving easier?',
        a: 'November to April from Phuket, Krabi, or Koh Lanta. The Andaman swell is the limiter, not the PADI card.',
      },
    ],
  },
  {
    path: '/interests/thai-massage-and-spas',
    title: 'Thai massage, day spas, and onsen in Thailand',
    description:
      'Thai massage is known for Wat Pho tables at 340 to 520 THB plus Health Land and Let\'s Relax rooms. Chiang Mai adds Lanna herbal compress treatments.',
    lede:
      'Thai massage is known for Wat Pho school tables at 340 to 520 THB and clean day-spa chains. Come for a 30 to 120 minute table, a Bangkok onsen soak, or a Chiang Mai herbal compress.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Thai massage and spas', href: '/interests/thai-massage-and-spas' },
    ],
    facts: [
      { label: 'Wat Pho school', value: '340 THB / 30 min, 520 THB / 60 min plus 300 THB temple ticket' },
      { label: 'Day-spa chains', value: 'Health Land 650 THB / 2 hours; Let\'s Relax 700 to 1,200 THB' },
      { label: 'Onsen', value: 'Yunomori Sathorn Soi 10 and Sukhumvit 26; Panpuri at Gaysorn' },
      { label: 'Tip', value: '50 to 100 THB street/shop; 100 to 200 THB at day spas' },
    ],
    chips: ['Wat Pho school', 'Health Land', 'Yunomori'],
    photo: '/photos/old-city.jpg',
    paragraphs: [
      'Wat Pho is known for the massage school on the temple grounds, not a Khao San spa. A 2026 traditional session is 340 THB for 30 minutes or 520 THB for 60 minutes (1,040 THB for 120 minutes), 08:00 to 19:30. Book at the school desk after the 300 THB temple ticket, or check whether the school entrance is separate that day. See [Wat Pho](/attractions/wat-pho).',
      'For a longer, cleaner room, Health Land is about 650 THB for two hours of traditional massage. Let\'s Relax runs 700 to 1,200 THB depending on length and extras. Bangkok Japanese onsen houses: Yunomori on Sathorn Soi 10 and Sukhumvit Soi 26, and Panpuri Wellness at Gaysorn. Chiang Mai is known for Lanna herbal-compress rooms at Fah Lanna and Oasis Spa. Tip 50 to 100 THB for a street or shop therapist, 100 to 200 THB at a day spa.',
    ],
    sections: [
      {
        id: 'tables-and-tips',
        title: 'School table, chain spa, or onsen soak',
        paragraphs: [
          'Pick one format. The school is the short traditional table. The chain is the two-hour air-conditioned room. The onsen is a soak with a massage add-on. Do not book three treatments the same afternoon.',
        ],
        table: {
          headers: ['Room', 'Known for', '2026 price and tip'],
          rows: [
            ['Wat Pho massage school', 'Traditional table on the temple grounds', '340 to 520 THB / 30 to 60 min; 1,040 THB / 120 min'],
            ['Health Land', 'Clean mid-range chain, two-hour traditional', 'About 650 THB; tip 100 to 200 THB'],
            ['Let\'s Relax', 'Mall and hotel-adjacent day spa', '700 to 1,200 THB; tip 100 to 200 THB'],
            ['Yunomori / Panpuri', 'Japanese onsen soaks in Bangkok', 'Sathorn Soi 10, Sukhumvit 26, Gaysorn'],
            ['Fah Lanna / Oasis Spa', 'Chiang Mai Lanna herbal compress', 'Book the Old City or Nimman room'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Wat Pho', href: '/attractions/wat-pho', photo: '/photos/old-city.jpg' },
      { title: 'Old City', href: '/bangkok/old-city-rattanakosin', photo: '/photos/old-city.jpg' },
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Honeymoon and couples', href: '/interests/honeymoon-and-couples', photo: '/photos/resort.jpg' },
    ],
    affiliates: [
      stay('Rattanakosin stays', 'School table first', 'Sleep near Wat Pho if the school is day one. Sukhumvit if Health Land is the plan.', stayAreaLink('rattanakosin'), '/photos/old-city.jpg'),
      klook('Spa and massage bookings', 'Tickets', 'Use a named shop. A soi tout with a laminated card is how the price doubles.', klookTickets('Bangkok Thai massage'), '/photos/old-city.jpg'),
    ],
    faqs: [
      {
        q: 'Do you need the Wat Pho temple ticket for the school?',
        a: 'Often yes if you enter through the temple. Ask the school desk. The massage is 340 THB for 30 minutes or 520 THB for 60 minutes on top of the 300 THB gate fee.',
      },
      {
        q: 'How much do you tip?',
        a: '50 to 100 THB at a street or shop table. 100 to 200 THB at Health Land, Let\'s Relax, or a hotel spa.',
      },
      {
        q: 'Onsen or traditional massage?',
        a: 'Yunomori or Panpuri if you want a Japanese soak. Wat Pho or Health Land if you want a Thai table. They are different jobs.',
      },
    ],
  },
  {
    path: '/interests/beaches-and-island-hopping',
    title: 'Thailand beaches and island hopping guide',
    description:
      'Thai beaches split three ways: Andaman (Phuket, Krabi, Phi Phi, Lanta, Lipe) November to April; Lower Gulf (Samui, Phangan, Tao) January to August; east (Samet, Chang, Kood) November to April.',
    lede:
      'Thai beaches are known for three coasts with different dry months. Pick one sea first: Andaman November to April, Lower Gulf January to August, or the east coast November to April.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Beaches and island hopping', href: '/interests/beaches-and-island-hopping' },
    ],
    facts: [
      { label: 'Andaman', value: 'Phuket, Krabi, Phi Phi, Lanta, Lipe; best November to April' },
      { label: 'Lower Gulf', value: 'Samui, Phangan, Tao; drier Jan to Aug; heavy rain Oct to early Dec' },
      { label: 'Eastern seaboard', value: 'Samet, Chang, Kood; November to April' },
      { label: 'Park fees', value: 'Marine national parks 200 to 400 THB foreign adult' },
    ],
    chips: ['Andaman Nov-Apr', 'Gulf Jan-Aug', 'Longtail vs speedboat'],
    photo: '/photos/phuket.jpg',
    paragraphs: [
      'The Andaman coast (Phuket, Krabi, Phi Phi, Koh Lanta, Koh Lipe) is known for calmer seas from November to April. The Lower Gulf (Koh Samui, Koh Phangan, Koh Tao) stays drier January to August and takes its heaviest rain from October to early December. The eastern seaboard (Koh Samet, Koh Chang, Koh Kood) follows the Andaman clock: November to April. Pick one coast. See [Phuket](/phuket), [Koh Samui](/koh-samui), and [Koh Chang and Koh Kood](/koh-chang-and-koh-kood).',
      'Longtails are cheap, wet, and local: Railay crossings run about 100 THB a person. Speedboats cut time and add spray; they cancel in swell. Marine national park fees for a foreign adult sit at 200 to 400 THB at the pier or the beach desk. Confirm whether a Klook boat includes the fee. For a 10-day Andaman hop, use [2 weeks Andaman](/itineraries/2-weeks-andaman-island-hopping) or cut it to one base.',
    ],
    sections: [
      {
        id: 'coasts-and-boats',
        title: 'Three coasts, two boat types, one park fee',
        paragraphs: [
          'A longtail is a shallow inshore taxi. A speedboat is a longer crossing that hates weather. Do not book both for the same bay. Pay the park fee once per park per day unless the sign says otherwise.',
        ],
        table: {
          headers: ['Coast', 'Islands', 'Dry months and fee'],
          rows: [
            ['Andaman', 'Phuket, Krabi, Phi Phi, Lanta, Lipe', 'Nov to Apr; park fees 200 to 400 THB'],
            ['Lower Gulf', 'Samui, Phangan, Tao', 'Drier Jan to Aug; rain Oct to early Dec'],
            ['Eastern seaboard', 'Samet, Chang, Kood', 'Nov to Apr; Trat car ferry for Chang and Kood'],
            ['Longtail', 'Short hops: Railay, nearshore snorkel', 'About 100 THB a person on short Krabi runs'],
            ['Speedboat', 'Phi Phi, Lipe, Ang Thong days', 'Faster; cancels in swell; fee often extra'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
      { title: 'Koh Samui', href: '/koh-samui', photo: '/photos/koh-samui.jpg' },
      { title: 'Diving and snorkeling', href: '/interests/diving-and-snorkeling', photo: '/photos/koh-tao.jpg' },
    ],
    affiliates: [
      stay('Phuket stays', 'Andaman base', 'Sleep Kata or Kamala if the Andaman dry season is the week.', stayLink('phuket'), '/photos/phuket.jpg'),
      stay('Samui stays', 'Gulf base', 'Sleep Chaweng or Lamai if January to August is the Gulf plan.', stayLink('koh-samui'), '/photos/koh-samui.jpg'),
      klook('Island boats', 'Tours', 'Name the pier and the park. Confirm the 200 to 400 THB foreign fee.', klookIslandHopping('Phuket'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'Andaman or Gulf for a first beach week?',
        a: 'Andaman from November to April. Lower Gulf from January to August. Do not stack Phuket and Samui on a first week.',
      },
      {
        q: 'Longtail or speedboat?',
        a: 'Longtail for a short hop such as Railay. Speedboat for Phi Phi or a distant snorkel day. The park fee is still 200 to 400 THB.',
      },
      {
        q: 'When is Koh Phangan a bad swim?',
        a: 'October to early December is the heavy Gulf rain. Full Moon is a crowd plan, not a calm-beach plan.',
      },
    ],
  },
  {
    path: '/interests/temples-and-history',
    title: 'Temples, ruins, and historical parks in Thailand',
    description:
      'Thai temple days are known for Bangkok royal wats (Palace 500 THB, Wat Pho 300 THB, Wat Arun 200 THB), Ayutthaya prangs, Sukhothai bicycle loops, and Chiang Mai Lanna halls.',
    lede:
      'Thai temple days are known for Bangkok royal wats, Ayutthaya brick prangs, Sukhothai bicycle circuits, and Chiang Mai wood-and-gold halls. Covered shoulders and knees; shoes off; feet never at Buddha images.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Temples and history', href: '/interests/temples-and-history' },
    ],
    facts: [
      { label: 'Bangkok royal wats', value: 'Palace 500 THB, Wat Pho 300 THB, Wat Arun 200 THB' },
      { label: 'Ayutthaya', value: 'About 1 hour north; 50 THB per temple; train or van' },
      { label: 'Sukhothai', value: 'Historical Park 200 THB central zone; bicycle circuit' },
      { label: 'Chiang Mai', value: 'Doi Suthep 30 THB; Wat Chedi Luang 50 THB' },
    ],
    chips: ['Dress code', 'Palace 500 THB', 'Sukhothai bikes'],
    photo: '/photos/old-city.jpg',
    paragraphs: [
      'Bangkok royal temples are known for one ticketed morning: Grand Palace and Wat Phra Kaew at 500 THB via Mani Noppharat Gate, Wat Pho at 300 THB, Wat Arun at 200 THB plus the cross-river ferry. Do not add Chatuchak the same day. See [Grand Palace](/attractions/grand-palace-and-wat-phra-kaew), [Wat Pho](/attractions/wat-pho), and [Wat Arun](/attractions/wat-arun).',
      'Ayutthaya sits about 1 hour north of Bangkok by train or van. Brick prangs are 50 THB per temple. Sukhothai Historical Park is a bicycle circuit at 200 THB for the central zone. Chiang Mai Lanna wats: Doi Suthep 30 THB, Wat Chedi Luang 50 THB. Dress code is strict everywhere: covered shoulders and knees, slip-off shoes at chapel doors, feet never pointed at Buddha images.',
    ],
    sections: [
      {
        id: 'dress-and-tickets',
        title: 'Tickets, trains, and the dress code that turns you away',
        paragraphs: [
          'Rental wraps sit outside the Grand Palace if you arrive in shorts. Hats come off in the ubosot. A tuk-tuk that says the palace is closed is a gem-shop pitch. Walk to the gate. For the wider ticket board, use [Attractions](/attractions).',
        ],
        table: {
          headers: ['Site', '2026 foreign ticket', 'How you get there'],
          rows: [
            ['Grand Palace / Wat Phra Kaew', '500 THB; Mani Noppharat Gate', 'MRT Sanam Chai or Tha Chang N9'],
            ['Wat Pho', '300 THB', 'Walk south from the palace'],
            ['Wat Arun', '200 THB plus ferry', 'Tha Tien crossing'],
            ['Ayutthaya temples', '50 THB each', 'Train or van; about 1 hour north'],
            ['Sukhothai Historical Park', '200 THB central; 120 THB outer zones', 'Bicycle loop; fly or bus north'],
            ['Doi Suthep / Chedi Luang', '30 THB / 50 THB', 'Songthaew or Old City walk'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Grand Palace', href: '/attractions/grand-palace-and-wat-phra-kaew', photo: '/photos/old-city.jpg' },
      { title: 'Ayutthaya', href: '/ayutthaya', photo: '/photos/ayutthaya.jpg' },
      { title: 'Sukhothai', href: '/sukhothai', photo: '/photos/sukhothai.jpg' },
      { title: 'Doi Suthep', href: '/attractions/wat-phra-that-doi-suthep', photo: '/photos/chiang-mai.jpg' },
    ],
    affiliates: [
      stay('Old City stays', 'Palace morning', 'Sleep in Rattanakosin if day one is the royal wats.', stayAreaLink('rattanakosin'), '/photos/old-city.jpg'),
      klook('Temple tickets', 'Tickets', 'Palace, Ayutthaya vans, and Sukhothai days. Confirm the gate fee is included.', klookTickets('Thailand temple tickets'), '/photos/old-city.jpg'),
    ],
    faqs: [
      {
        q: 'Can you wear shorts in temples?',
        a: 'No. Shoulders and knees stay covered. Shoes come off at chapel doors. Feet never point at Buddha images.',
      },
      {
        q: 'Ayutthaya day trip or overnight?',
        a: 'A day trip covers the main 50 THB prangs. Overnight only if you want dawn. The train or van is about 1 hour.',
      },
      {
        q: 'Sukhothai on foot or by bike?',
        a: 'Bicycle. The park is a circuit at 200 THB for the central zone. Walking the outer zone in heat wastes the day.',
      },
    ],
  },
  {
    path: '/interests/muay-thai-and-fitness-camps',
    title: 'Muay Thai training, fight nights, and fitness camps',
    description:
      'Muay Thai is known for Rajadamnern RWS Saturdays and Petchyindee Thursdays (1,500 to 3,500 THB), ONE Lumpinee Fridays, and Phuket Soi Ta-iad camps at 400 to 600 THB a class.',
    lede:
      'Muay Thai in Thailand is known for Rajadamnern and ONE Lumpinee cards, plus Phuket Soi Ta-iad training camps. Come for one stadium night or a week of 400 to 600 THB drop-in classes.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Muay Thai and fitness camps', href: '/interests/muay-thai-and-fitness-camps' },
    ],
    facts: [
      { label: 'Rajadamnern', value: 'RWS Saturdays and Petchyindee Thursdays; 1,500 to 3,500 THB' },
      { label: 'ONE Lumpinee', value: 'Fridays; MRT Pink Line Ram Inthra 3 (PK17)' },
      { label: 'Phuket camps', value: 'Soi Ta-iad, Chalong; drop-in 400 to 600 THB; month 12,000 to 18,000 THB' },
      { label: 'Other gyms', value: 'Chiang Mai city gyms; Koh Phangan beach gyms' },
    ],
    chips: ['RWS Saturday', 'Soi Ta-iad', 'ONE Friday'],
    photo: '/photos/nightlife.jpg',
    paragraphs: [
      'Watching a card and training a week are different trips. Rajadamnern near Khao San runs Petchyindee Thursdays and RWS Saturdays at 1,500 to 3,500 THB for useful seats. ONE Lumpinee Fridays sit at the new Ram Inthra hall, a walk from MRT Pink Line Ram Inthra 3 (PK17). Ticket detail lives on [Rajadamnern and Lumpinee](/attractions/muay-thai-stadiums-rajadamnern-and-lumpinee).',
      'Phuket\'s Soi Ta-iad in Chalong is known as Fitness Street: drop-in classes 400 to 600 THB, monthly camp packages 12,000 to 18,000 THB. Chiang Mai gyms suit a cooler city week. Koh Phangan beach gyms sit near the west and south coves, not on the Full Moon sand. Book one format. A Thursday card plus a 6 a.m. Phuket class the next day is a bad transfer.',
    ],
    sections: [
      {
        id: 'watch-or-train',
        title: 'Stadium night versus a camp week',
        paragraphs: [
          'Stay Old City if Rajadamnern is the night. Stay Chalong or Rawai if Soi Ta-iad is the week. Chiang Mai if you want gyms without a beach. Phangan if the beach bag work is the point.',
        ],
        table: {
          headers: ['Format', 'Where', '2026 price'],
          rows: [
            ['Petchyindee Thursday', 'Rajadamnern, Ratchadamnoen Nok', '1,500 to 3,500 THB typical seats'],
            ['RWS Saturday', 'Rajadamnern, same stadium', '1,500 to 3,500 THB; buy a named date'],
            ['ONE Lumpinee Friday', 'New Lumpinee, Ram Inthra', 'Pink Line Ram Inthra 3 (PK17)'],
            ['Soi Ta-iad drop-in', 'Chalong, Phuket', '400 to 600 THB a class'],
            ['Soi Ta-iad month', 'Same soi camp packages', '12,000 to 18,000 THB'],
            ['Chiang Mai / Phangan gyms', 'City pads or beach bags', 'Day or week rates; ask the board'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Rajadamnern and Lumpinee', href: '/attractions/muay-thai-stadiums-rajadamnern-and-lumpinee', photo: '/photos/nightlife.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Koh Phangan', href: '/koh-phangan', photo: '/photos/koh-phangan.jpg' },
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
    ],
    affiliates: [
      stay('Phuket camp stays', 'Soi Ta-iad week', 'Sleep Chalong or Rawai if the 400 to 600 THB class is the daily plan.', stayLink('phuket'), '/photos/phuket.jpg'),
      klook('Fight night tickets', 'Tickets', 'Name Rajadamnern or ONE Lumpinee and the date. A laminated soi card is a markup.', klookTickets('Rajadamnern Muay Thai tickets'), '/photos/nightlife.jpg'),
    ],
    faqs: [
      {
        q: 'Watch a fight or join a camp?',
        a: 'A Thursday or Saturday Rajadamnern card if you have one night in Bangkok. Soi Ta-iad if you have a week and 12,000 to 18,000 THB for a month package, or 400 to 600 THB a class.',
      },
      {
        q: 'Is Lumpinee still on Rama IV?',
        a: 'No. ONE Friday nights are at the new Ram Inthra hall. Use MRT Pink Line Ram Inthra 3 (PK17).',
      },
      {
        q: 'Can beginners drop in on Soi Ta-iad?',
        a: 'Yes. Say you are new. Pads and a run still cost 400 to 600 THB. Bring wraps if you have them.',
      },
    ],
  },
  {
    path: '/interests/markets-and-shopping',
    title: 'Thailand night markets, weekend markets, and malls',
    description:
      'Thai shopping is known for Chatuchak weekends (MRT Kamphaeng Phet Exit 2, Sat to Sun 09:00 to 18:00), Siam malls, Chiang Mai walking streets, Phuket Lard Yai, and VAT refunds on 2,000 THB+.',
    lede:
      'Thai shopping is known for Chatuchak weekends, air-conditioned Bangkok malls, and walking-street nights in Chiang Mai and Phuket. Come for a Saturday stall grid or a VAT refund on 2,000 THB+ receipts.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Markets and shopping', href: '/interests/markets-and-shopping' },
    ],
    facts: [
      { label: 'Chatuchak', value: 'Sat and Sun 09:00 to 18:00; MRT Kamphaeng Phet Exit 2' },
      { label: 'Bangkok malls', value: 'Siam Paragon, CentralWorld, ICONSIAM with SookSiam' },
      { label: 'Walking streets', value: 'Chiang Mai Sat Wua Lai and Sun Ratchadamnoen 17:00 to 22:30' },
      { label: 'VAT refund', value: 'P.P.10 at 2,000 THB+ per store per day; claim at the airport' },
    ],
    chips: ['Chatuchak', 'Walking streets', 'VAT refund'],
    photo: '/photos/bangkok.jpg',
    paragraphs: [
      'Chatuchak Weekend Market is known for the Saturday and Sunday grid, 09:00 to 18:00, at MRT Kamphaeng Phet Exit 2. Go early. Sections sprawl. Full stall maps live on [Chatuchak](/attractions/chatuchak-weekend-market). Weekdays, use the air-conditioned malls: Siam Paragon, CentralWorld, and ICONSIAM (SookSiam is the indoor market wing).',
      'Chiang Mai Saturday Walking Street runs Wua Lai. Sunday Walking Street runs Ratchadamnoen from Tha Phae Gate toward Wat Phra Singh, 17:00 to 22:30. Phuket Sunday Lard Yai shuts Thalang Road in Old Town. VAT refund for tourists: ask for the P.P.10 form in stores with the "VAT Refund for Tourists" sign on purchases of 2,000 THB or more per store per day. You claim 7% VAT minus a fee at the international airport desk.',
    ],
    sections: [
      {
        id: 'stalls-malls-refunds',
        title: 'Weekend stalls, malls, and the P.P.10 form',
        paragraphs: [
          'Chatuchak is a weekend. Walking streets are evening. Malls take the heat and the VAT paperwork. Do not stack Chatuchak and a Sunday Walking Street on the same trip unless you have two cities.',
        ],
        table: {
          headers: ['Place', 'Clock', 'How you use it'],
          rows: [
            ['Chatuchak', 'Sat and Sun 09:00 to 18:00', 'MRT Kamphaeng Phet Exit 2'],
            ['Siam Paragon / CentralWorld', 'Daily mall hours', 'BTS Siam / Chit Lom'],
            ['ICONSIAM / SookSiam', 'Daily; indoor market wing', 'Boat or BTS plus shuttle'],
            ['Chiang Mai walking streets', 'Sat Wua Lai; Sun Ratchadamnoen 17:00 to 22:30', 'Old City walk'],
            ['Phuket Lard Yai', 'Sunday on Thalang Road', 'Phuket Old Town'],
            ['VAT refund', '2,000 THB+ per store per day', 'P.P.10 form; airport claim; 7% minus fee'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Chatuchak', href: '/attractions/chatuchak-weekend-market', photo: '/photos/bangkok.jpg' },
      { title: 'Siam and Silom', href: '/bangkok/siam-silom', photo: '/photos/siam.jpg' },
      { title: 'Chiang Mai Old City', href: '/chiang-mai/old-city', photo: '/photos/chiang-mai-old-city.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
    ],
    affiliates: [
      stay('Siam stays', 'Mall days', 'Sleep near BTS Siam if Paragon and CentralWorld are the air-con plan.', stayAreaLink('siam'), '/photos/siam.jpg'),
      klook('Market and city days', 'Tours', 'Chatuchak does not need a guide. Use a tour only if the group will not split.', klookTours('Chatuchak Weekend Market'), '/photos/bangkok.jpg'),
    ],
    faqs: [
      {
        q: 'Which Chatuchak MRT exit?',
        a: 'Kamphaeng Phet Exit 2. Mo Chit dumps you on the park side. Hours are Saturday and Sunday 09:00 to 18:00.',
      },
      {
        q: 'How does the VAT refund work?',
        a: 'Buy 2,000 THB or more in one store in one day at a shop with the VAT Refund for Tourists sign. Get the P.P.10 form. Claim at the international airport. You get 7% minus a fee.',
      },
      {
        q: 'Saturday or Sunday in Chiang Mai?',
        a: 'Saturday is Wua Lai. Sunday is Ratchadamnoen, 17:00 to 22:30. They are different streets.',
      },
    ],
  },
  {
    path: '/interests/family-travel-with-kids',
    title: 'Thailand with kids and families',
    description:
      'Thailand with kids is known for shallow beaches (Kata, Kamala, Bang Tao, Choeng Mon, Klong Dao), Chiang Mai ethical elephant half-days, SEA LIFE at Siam Paragon, and private vans with car seats.',
    lede:
      'Thailand with kids is known for shallow west-coast beaches, Chiang Mai ethical elephant half-days, and Bangkok aquarium breaks. Fits families who bring a travel car seat or book a private van.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Family travel with kids', href: '/interests/family-travel-with-kids' },
    ],
    facts: [
      { label: 'Car seats', value: 'Bring a seat or book a van; BKK hotel vans 1,200 to 2,000 THB' },
      { label: 'Calm beaches', value: 'Kata, Kamala, Bang Tao, Choeng Mon, Klong Dao' },
      { label: 'Indoor break', value: 'SEA LIFE Bangkok Ocean World at Siam Paragon' },
      { label: 'Hospitals', value: 'Bumrungrad and Samitivej; Bangkok Hospital Phuket and Samui' },
    ],
    chips: ['Car seats', 'Shallow beaches', 'SEA LIFE'],
    photo: '/photos/kata-and-karon.jpg',
    paragraphs: [
      'Thailand works for families because distances are short, food is mild if you ask, and hospitals in the main cities are used to foreign patients. The hard part is the road. Street taxis and many Grabs have no child seat and often no rear seatbelt you trust. Bring a travel car seat, or book a private Klook or Trip.com van that lists child seats (a 2026 BKK-to-hotel van is often 1,200 to 2,000 THB). Do not assume the airport taxi has one.',
      'Calm, shallow beaches for small kids: Kata, Kamala, and Bang Tao on Phuket; Choeng Mon on Samui; Klong Dao on Koh Lanta. Skip Patong and Chaweng as a first beach with toddlers. Chiang Mai ethical elephant half-days sit on [elephant sanctuaries](/attractions/chiang-mai-ethical-elephant-sanctuaries). Bangkok heat breaks: SEA LIFE Bangkok Ocean World at Siam Paragon. Hospitals: Bumrungrad and Samitivej in Bangkok; Bangkok Hospital Phuket and Bangkok Hospital Samui on the islands.',
    ],
    sections: [
      {
        id: 'seats-beaches-breaks',
        title: 'Seats, shallow water, and an indoor hour',
        paragraphs: [
          'Build one slow beach, one indoor break, and one animal morning that does not ride elephants. A private van with seats costs more than a taxi and removes the argument at the curb.',
        ],
        table: {
          headers: ['Need', 'Where', '2026 note'],
          rows: [
            ['Car seat', 'Bring one, or book a listed private van', 'Street taxis rarely have belts or seats'],
            ['Shallow Phuket', 'Kata, Kamala, Bang Tao', 'Calmer than Patong'],
            ['Shallow Gulf / Lanta', 'Choeng Mon; Klong Dao', 'Wade water; check flags'],
            ['Elephant half-day', 'Chiang Mai ethical camps', 'No riding; book a morning slot'],
            ['Indoor break', 'SEA LIFE at Siam Paragon', 'Adult tickets often 900 to 1,200 THB; BTS Siam'],
            ['Hospital', 'Bumrungrad, Samitivej; Phuket and Samui BH', 'Travel insurance still matters'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Kata and Karon', href: '/phuket/kata-and-karon', photo: '/photos/kata-and-karon.jpg' },
      { title: 'Elephant sanctuaries', href: '/attractions/chiang-mai-ethical-elephant-sanctuaries', photo: '/photos/chiang-mai.jpg' },
      { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
      { title: 'Siam and Silom', href: '/bangkok/siam-silom', photo: '/photos/siam.jpg' },
    ],
    affiliates: [
      stay('Kata or Kamala stays', 'Shallow beach', 'Sleep on a west Phuket bay if small kids need a short walk to calm water.', stayAreaLink('kata'), '/photos/kata-and-karon.jpg'),
      klook('Vans and family tickets', 'Tickets', 'Book a van that lists child seats. Add SEA LIFE or an ethical elephant morning.', klookTickets('SEA LIFE Bangkok Ocean World'), '/photos/siam.jpg'),
    ],
    faqs: [
      {
        q: 'Do Bangkok taxis have car seats?',
        a: 'Rarely. Bring a travel seat or book a private Klook or Trip.com van that lists child seats. Do not count on Grab.',
      },
      {
        q: 'Which beach with a toddler?',
        a: 'Kata, Kamala, or Bang Tao on Phuket; Choeng Mon on Samui; Klong Dao on Lanta. Skip Patong as a first swim.',
      },
      {
        q: 'Which hospital if a child is sick?',
        a: 'Bumrungrad or Samitivej in Bangkok. Bangkok Hospital Phuket or Bangkok Hospital Samui on those islands. Carry insurance numbers.',
      },
    ],
  },
  {
    path: '/interests/honeymoon-and-couples',
    title: 'Thailand honeymoon and couples guide',
    description:
      'A Thailand honeymoon is known for 3 river nights in Bangkok, 4 in Chiang Mai or Khao Sok, then 5 in a private-pool villa in Krabi, Phuket, Samui, or Koh Yao Noi.',
    lede:
      'A Thailand honeymoon is known for a Chao Phraya stay, a jungle or Lanna pause, then a private-pool villa on Krabi, Phuket, Samui, or Koh Yao Noi. Fits couples who split 12 nights 3-4-5.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Honeymoon and couples', href: '/interests/honeymoon-and-couples' },
    ],
    facts: [
      { label: 'Shape', value: '3 nights Bangkok river, 4 Chiang Mai or Khao Sok, 5 villa' },
      { label: 'Villa coasts', value: 'Krabi, Phuket, Samui, or Koh Yao Noi in the matching dry season' },
      { label: 'Private boat', value: 'Longtail charter at 06:30, before tour boats' },
      { label: 'Roofs', value: 'One sunset dinner; dress code; last BTS around midnight' },
    ],
    chips: ['3-4-5 split', 'Private pool', '06:30 longtail'],
    photo: '/photos/resort.jpg',
    paragraphs: [
      'A Chao Phraya river house is the first honeymoon lock: Capella, The Siam, or a Mandarin Oriental river room for three nights. Add four nights in Chiang Mai for wats and cooler air, or Khao Sok for karst lake mornings. Finish with five nights in a private-pool villa: Phulay Bay or Rayavadee in Krabi; Keemala, Trisara, or Kata Rocks in Phuket; Four Seasons, Six Senses, or Sala Samui on Samui; Six Senses Yao Noi on Koh Yao Noi. Named pages live under [resort living](/interests/resort-living).',
      'Book a private longtail at 06:30 if you want a bay before the tour boats. Sunset rooftops in Bangkok have dress codes: no flip-flops, sleeves for men. Pick one roof, not a cruise and a tower the same night. See [rooftop bars](/thai-food/bangkok-rooftop-bars-and-river-dining). Fly BKK to the villa airport on Trip.com. Do not stack Andaman and Gulf villas in one honeymoon.',
    ],
    sections: [
      {
        id: 'split-and-villas',
        title: 'River, jungle or Lanna, then one villa coast',
        paragraphs: [
          'The 3-4-5 split keeps packing to two hotel changes after Bangkok. A private pool is the villa test. A shared resort beach is a different trip. Match the coast to the monsoon.',
        ],
        table: {
          headers: ['Block', 'Where', 'Named stays'],
          rows: [
            ['3 nights', 'Chao Phraya, Bangkok', 'Capella; The Siam; Mandarin Oriental river'],
            ['4 nights', 'Chiang Mai or Khao Sok', 'Four Seasons Chiang Mai; Cheow Lan lake days'],
            ['5 nights, Krabi', 'Railay / Noppharat Thara', 'Phulay Bay; Rayavadee'],
            ['5 nights, Phuket', 'Kamala, Surin, or Cape Panwa', 'Keemala; Trisara; Kata Rocks'],
            ['5 nights, Samui / Yao Noi', 'Bophut or Yao Noi', 'Four Seasons; Six Senses; Sala; Six Senses Yao Noi'],
            ['06:30 boat', 'Private longtail', 'Before tour boats; park fees still apply'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Resort living', href: '/interests/resort-living', photo: '/photos/resort.jpg' },
      { title: 'Rayavadee', href: '/resort-living/rayavadee', photo: '/photos/krabi.jpg' },
      { title: 'Six Senses Yao Noi', href: '/resort-living/six-senses-yao-noi', photo: '/photos/krabi.jpg' },
      { title: 'Khao Sok', href: '/khao-sok', photo: '/photos/khao-sok.jpg' },
    ],
    affiliates: [
      stay('River Bangkok', 'First three nights', 'Sleep on the Chao Phraya if the honeymoon starts in the city.', stayAreaLink('riverside'), '/photos/riverside.jpg'),
      stay('Villa search', 'Last five nights', 'Search Krabi, Phuket, Samui, or Yao Noi. Match the dry season.', hotelSearchLink('private pool villa', 'krabi'), '/photos/krabi.jpg'),
      klook('Private longtails', 'Tours', 'Book 06:30. Confirm the park fee. Tour boats fill the same bays after 09:00.', klookTours('Krabi private longtail'), '/photos/krabi.jpg'),
    ],
    faqs: [
      {
        q: 'How many nights in each place?',
        a: '3 on the Bangkok river, 4 in Chiang Mai or Khao Sok, 5 at one villa coast. Two hotel changes after the city is enough.',
      },
      {
        q: 'Krabi, Phuket, Samui, or Yao Noi?',
        a: 'Andaman villas (Krabi, Phuket, Yao Noi) from November to April. Samui from January to August. Pick one sea.',
      },
      {
        q: 'When do you charter the longtail?',
        a: '06:30. Tour boats reach the same bays after 09:00. Park fees of 200 to 400 THB still apply.',
      },
    ],
  },
  {
    path: '/interests/solo-and-first-time-travel',
    title: 'Solo and first-time travel in Thailand',
    description:
      'Solo first trips are known for Grab and Bolt rides, BTS/MRT contactless tap-in, eSIM or airport SIM, 12GO and SRT D-Ticket trains, and private-room hostels in Chiang Mai, Bangkok, Lanta, and Phangan.',
    lede:
      'Solo first trips to Thailand are known for Grab and Bolt, BTS/MRT tap-in, and private-room hostels in Chiang Mai, Bangkok, Lanta, and Phangan. Land with the apps, the train, and a short list of scams to skip.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Solo and first-time travel', href: '/interests/solo-and-first-time-travel' },
    ],
    facts: [
      { label: 'Rides', value: 'Grab and Bolt in the main cities; skip unmarked tuk-tuks' },
      { label: 'Rail tap', value: 'BTS/MRT contactless Visa or Mastercard; 17 to 62 THB typical' },
      { label: 'SIM', value: 'eSIM before landing, or airport AIS / True / DTAC desk' },
      { label: 'Trains', value: '12GO or SRT D-Ticket for overnight sleepers' },
    ],
    chips: ['Grab and Bolt', 'BTS tap', 'Private-room hostels'],
    photo: '/photos/bts.jpg',
    paragraphs: [
      'Thailand is a straightforward solo first trip if you use the apps. Grab and Bolt cover Bangkok, Chiang Mai, Phuket, and Samui. BTS and MRT take contactless Visa or Mastercard tap-in; a 2026 ride is often 17 to 62 THB. Buy an eSIM before landing, or use the AIS, True, or DTAC desk after immigration. Full steps sit on [Grab and BTS](/plan/grab-and-bts) and [eSIM](/plan/esim-and-sim-cards).',
      'Overnight trains: book 12GO or the official SRT D-Ticket app. See [trains and ferries](/plan/trains-and-ferries). Social hubs with private-room hostels and cafes: Old City and Nimman in Chiang Mai; Ari and Talat Noi in Bangkok; Long Beach on Koh Lanta; Lonely Beach and the south-west of Koh Phangan. Scams to skip: the Grand Palace "closed today" tuk-tuk pitch, and jet-ski scratch deposits on island beaches. Walk to the palace gate. Photograph the jet-ski before you start.',
    ],
    sections: [
      {
        id: 'apps-hubs-scams',
        title: 'Apps, hostel pockets, and two scams to walk past',
        paragraphs: [
          'Land, tap the BTS, ride Grab after midnight. Sleep where other solo travelers already sit: Nimman, Ari, Long Beach, south-west Phangan. The palace-closed line and the jet-ski deposit are the two pitches that cost a first week.',
        ],
        table: {
          headers: ['Tool or pocket', 'Known for', '2026 note'],
          rows: [
            ['Grab / Bolt', 'Meter-beating city rides', 'Main cities; pin the hotel, not a soi nickname'],
            ['BTS / MRT tap', 'Contactless Visa or Mastercard', '17 to 62 THB typical Bangkok rides'],
            ['eSIM or airport SIM', 'Data on landing', 'AIS, True, DTAC desks after immigration'],
            ['12GO / SRT D-Ticket', 'Overnight sleepers', 'Book the berth; see the trains page'],
            ['Chiang Mai / Bangkok hubs', 'Old City, Nimman; Ari, Talat Noi', 'Private rooms, not only dorms'],
            ['Lanta / Phangan hubs', 'Long Beach; Lonely Beach and SW coast', 'Cafe days; skip the jet-ski deposit'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Grab and BTS', href: '/plan/grab-and-bts', photo: '/photos/bts.jpg' },
      { title: 'eSIM and SIM cards', href: '/plan/esim-and-sim-cards', photo: '/photos/bts.jpg' },
      { title: 'Ari', href: '/bangkok/ari', photo: '/photos/ari.jpg' },
      { title: 'Koh Lanta', href: '/koh-lanta', photo: '/photos/koh-lanta.jpg' },
    ],
    affiliates: [
      stay('Ari or Old City', 'Solo first nights', 'Sleep Ari if the BTS is the plan. Old City Chiang Mai if cafes and wats share the week.', stayAreaLink('ari'), '/photos/ari.jpg'),
      klook('Airport cars and boats', 'Transfers', 'A prepaid car beats an unmarked curb tout. Ferries still need a named pier.', klookTours('Bangkok airport transfer'), '/photos/bts.jpg'),
    ],
    faqs: [
      {
        q: 'Is Thailand safe for solo travelers?',
        a: 'In the main tourist grid, yes if you use Grab or Bolt, tap the BTS, and skip the palace-closed tuk-tuk and jet-ski scratch deposit.',
      },
      {
        q: 'eSIM or airport SIM?',
        a: 'eSIM if your phone unlocks it. Airport AIS, True, or DTAC if you want a physical card after immigration. Both beat hotel Wi-Fi only.',
      },
      {
        q: 'Where do solo travelers sleep?',
        a: 'Private-room hostels and guesthouses in Old City or Nimman (Chiang Mai), Ari or Talat Noi (Bangkok), Long Beach (Lanta), Lonely Beach or south-west Phangan.',
      },
    ],
  },
  {
    path: '/interests/festivals-songkran-and-loy-krathong',
    title: 'Thailand festivals: Songkran, Loy Krathong, and Yi Peng',
    description:
      'Thai festival travel is known for Songkran water fights 13 to 15 April, Loy Krathong and Chiang Mai Yi Peng on the November full moon, and Phuket Vegetarian Festival in the ninth lunar month.',
    lede:
      'Thai festival travel is known for Songkran in mid-April, Loy Krathong on the November full moon, and Phuket\'s Vegetarian Festival in the ninth lunar month. Pack a dry bag if April is the plan.',
    schema: 'Article',
    crumbs: [
      { name: 'Interests', href: '/interests' },
      { name: 'Songkran, Loy Krathong, and Yi Peng', href: '/interests/festivals-songkran-and-loy-krathong' },
    ],
    facts: [
      { label: 'Songkran', value: '13 to 15 April; Silom Grab 80 to 200 THB when streets close' },
      { label: 'Loy Krathong', value: 'Full moon of the 12th lunar month, usually November' },
      { label: 'Yi Peng', value: 'Chiang Mai lanterns; free Ping floats vs ticketed CAD releases' },
      { label: 'Vegetarian Festival', value: 'Phuket; Nine Emperor Gods; ninth lunar month, Sep or Oct' },
    ],
    chips: ['Songkran mid-April', 'November full moon', 'Phuket veg fest'],
    photo: '/photos/chiang-mai.jpg',
    paragraphs: [
      'Songkran is Thai New Year, 13 to 15 April nationwide. The water fights concentrate on Silom and Khao San in Bangkok, the Chiang Mai moat, Patong, and Chaweng. A waterproof phone pouch and a dry bag are the logistics, not optional kit. Hotels book out. Public-holiday notes sit on [Songkran and holidays](/plan/songkran-and-public-holidays).',
      'Loy Krathong falls on the full moon of the 12th lunar month, usually November. In Chiang Mai it overlaps Yi Peng. Free krathong floats go on the Ping at Nawarat Bridge. Ticketed CAD mass sky-lantern releases sit outside the airport flight path; 2026 field tickets often run 1,500 to 3,500 THB. Buy a named field, not a soi tout. Phuket Vegetarian Festival (Nine Emperor Gods) runs in the ninth lunar month, September or October, around Jui Tui Shrine and the Old Town processions.',
    ],
    sections: [
      {
        id: 'three-festivals',
        title: 'Water, lanterns, and the Nine Emperor Gods',
        paragraphs: [
          'Songkran is a three-day water grid. Loy Krathong is one night of floats. Yi Peng is the lantern add-on in Chiang Mai. The Vegetarian Festival is a Phuket shrine week, not a beach party. Book the city that owns the festival you came for.',
        ],
        table: {
          headers: ['Festival', 'When', 'Where and kit'],
          rows: [
            ['Songkran', '13 to 15 April', 'Silom, Khao San, Chiang Mai moat, Patong, Chaweng; dry bag'],
            ['Loy Krathong', '12th lunar full moon (usually Nov)', 'Free Ping floats at Nawarat Bridge'],
            ['Yi Peng', 'Same November window in Chiang Mai', 'CAD fields 1,500 to 3,500 THB, off the flight path'],
            ['Vegetarian Festival', 'Ninth lunar month, Sep or Oct', 'Jui Tui Shrine and Phuket Old Town'],
          ],
        },
      },
    ],
    portraits: [
      { title: 'Songkran and holidays', href: '/plan/songkran-and-public-holidays', photo: '/photos/bangkok.jpg' },
      { title: 'Chiang Mai', href: '/chiang-mai', photo: '/photos/chiang-mai.jpg' },
      { title: 'Phuket', href: '/phuket', photo: '/photos/phuket.jpg' },
      { title: 'Solo and first-time', href: '/interests/solo-and-first-time-travel', photo: '/photos/bts.jpg' },
    ],
    affiliates: [
      stay('Chiang Mai festival stays', 'November lanterns', 'Sleep Old City if Nawarat Bridge is the free float. Book early for Yi Peng week.', stayAreaLink('chiang-mai-old-city'), '/photos/chiang-mai-old-city.jpg'),
      stay('Bangkok Songkran stays', 'Mid-April water', 'Sleep Silom or the Old City if 13 to 15 April is the reason you came.', stayAreaLink('silom'), '/photos/siam.jpg'),
      klook('Festival tickets', 'Tickets', 'Buy a named Yi Peng field. Street lantern sellers near the airport path get you moved on.', klookTickets('Chiang Mai Yi Peng lantern'), '/photos/chiang-mai.jpg'),
    ],
    faqs: [
      {
        q: 'Which days is Songkran?',
        a: '13 to 15 April nationwide. Silom and Khao San in Bangkok, the Chiang Mai moat, Patong, and Chaweng are the dense water streets. Carry a dry bag.',
      },
      {
        q: 'Are Yi Peng lanterns free?',
        a: 'Ping River krathong floats at Nawarat Bridge are free. Mass sky-lantern releases are ticketed fields away from the airport flight path.',
      },
      {
        q: 'When is the Phuket Vegetarian Festival?',
        a: 'The ninth lunar month, September or October depending on the year. Jui Tui Shrine is the usual processional centre.',
      },
    ],
  },
];
