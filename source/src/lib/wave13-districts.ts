import { stayAreaLink, klookTickets } from './partners';
import type { Affiliate, Page } from './content';

function stay(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'Search stays', photo, partner: 'stay' };
}

function klook(title: string, kicker: string, body: string, href: string, photo: string): Affiliate {
  return { title, kicker, body, href, cta: 'See tickets', photo, partner: 'klook' };
}

export const wave13DistrictPages: Page[] = [
  {
    path: '/bangkok/sukhumvit',
    title: 'Sukhumvit sois: Nana to Ekkamai',
    description: 'Soi-by-soi map of Bangkok\'s Sukhumvit BTS line: which exit to sleep on, what to skip at Nana, and which nightlife URL to open after dark.',
    lede: 'Sukhumvit is Bangkok\'s Skytrain hotel spine, from louder Nana and the Asok interchange through calmer Phrom Phong to dinner on Thonglor. Sleep near a BTS exit if you want the walk, not a soi hunt after dark.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Bangkok', href: '/bangkok' },
      { name: 'Sukhumvit sois', href: '/bangkok/sukhumvit' },
    ],
    facts: [
      { label: 'Rail', value: 'BTS Nana to Ekkamai; Asok links MRT Sukhumvit' },
      { label: '2026 BTS', value: '17 to 47 THB along this stretch' },
      { label: 'Pair', value: 'Hotel playbook is the Thonglor stay page' },
    ],
    chips: ['Soi map', 'BTS exits', 'Nana versus Thong Lo'],
    photo: '/photos/sukhumvit.jpg',
    geo: { lat: 13.736, lon: 100.56, containedIn: 'Bangkok' },
    paragraphs: [
      'Sukhumvit is the default Bangkok base: a hotel tower, a BTS gate, and dinner within ten minutes. The road runs east from the river. First-timers should treat it as a rail line, not one neighborhood. Nana is louder and cheaper. Asok is the interchange. Phrom Phong is Japanese dining and EmDistrict. Thong Lo and Ekkamai are one and two stops on for dinner bars.',
      'A 2026 BTS tap from Nana to Thong Lo is usually 17 to 37 THB and under 15 minutes. After midnight the train stops. Grab from Soi 11 to Thonglor is often 80 to 160 THB. Do not rent a scooter here. The frontage road is a highway with buses.',
      'Stay one block off Sukhumvit Road if you want sleep. Rooms that face the soi get the bass. The soi map names which BTS exit, what to skip, and which nightlife URL to open. [Sukhumvit and Thonglor stays](/bangkok/sukhumvit-thonglor) is the hotel playbook for the same line.',
      'Food is the reason the strip works. Soi 38 still feeds late bowls. Thonglor is the reservation grid. Chinatown is a 20 to 35 minute Grab if you want Yaowarat instead. Do not stack Soi 11, a palace morning, and Chatuchak on the same calendar day.',
    ],
    sections: [
      {
        id: 'sois',
        title: 'Which soi to sleep on',
        paragraphs: [
          'Pick the BTS exit before you pick the hotel brand. The walk from the gate matters more than the pool photo.',
        ],
        table: {
          headers: ['Zone', 'Who it fits', '2026 stay note'],
          rows: [
            ['Nana / Soi 4-11', 'Short stays, Soi 11 nights', 'Cheaper towers; street noise'],
            ['Asok / Soi 21', 'Interchange, Terminal 21', 'MRT plus BTS; easy airport car'],
            ['Phrom Phong / Soi 24-26', 'First-timer default', 'EmDistrict, calmer walks'],
            ['Thong Lo / Soi 55', 'Dinner and bars', 'Higher rates; see nightlife page'],
            ['Ekkamai / Soi 63', 'Later, slightly cheaper than Thong Lo', 'Good if you already know the grid'],
          ],
        },
      },
      {
        id: 'nights',
        title: 'Nights and tickets',
        paragraphs: [
          'Open [Sukhumvit Soi 11](/interests/nightlife/sukhumvit-soi-11) only if you already sleep at Nana or Asok. Open [Thonglor and Ekkamai](/interests/nightlife/thonglor-ekkamai) if dinner is the plan. Palace tickets stay on [Rattanakosin](/bangkok/rattanakosin).',
        ],
      },
    ],
    affiliates: [
      stay('Sukhumvit hotels', 'Nana to Phrom Phong', 'The default search if you do not yet have a soi preference.', stayAreaLink('sukhumvit'), '/photos/sukhumvit.jpg'),
      stay('Thonglor hotels', 'BTS Thong Lo', 'Dinner density, slightly higher rates than Nana.', stayAreaLink('thonglor'), '/photos/nightlife.jpg'),
    ],
    faqs: [
      { q: 'Is Nana too noisy?', a: 'The soi itself is. Hotels a block off Sukhumvit Road are fine if you want the price and the BTS.' },
      { q: 'How many nights?', a: 'Two or three. Move to the river or Chiang Mai after that. Four nights on Nana is a waste of Bangkok.' },
    ],
  },
  {
    path: '/bangkok/silom-sathon',
    title: 'Silom and Sathon park and rail',
    description: 'Lumphini Park, Sala Daeng, and Saphan Taksin from Silom and Sathon: dawn walks, BTS and MRT exits, and the orange-flag river boat.',
    lede: 'Lumphini Park is the dawn reason to sleep on Silom, with Sala Daeng and Chong Nonsi linking the Skytrain corridor down to Chao Phraya river piers. Come for the park and the boat, not a hotel hunt.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Bangkok', href: '/bangkok' },
      { name: 'Silom park and rail', href: '/bangkok/silom-sathon' },
    ],
    facts: [
      { label: 'Rail', value: 'BTS Sala Daeng; MRT Si Lom and Lumphini' },
      { label: 'Park', value: 'Lumphini opens about 04:30 for walkers' },
      { label: 'River', value: 'Saphan Taksin BTS is the boat gate' },
      { label: 'Pair', value: 'Stays and SkyWalk sit on the Sathorn page' },
    ],
    chips: ['Lumphini dawn', 'Sala Daeng rail', 'Saphan Taksin boat'],
    photo: '/photos/silom-and-sathorn.jpg',
    geo: { lat: 13.726, lon: 100.538, containedIn: 'Bangkok' },
    paragraphs: [
      'Silom is the older office spine. Sathon (also spelled Sathorn) is the wider boulevard of towers and embassies. Together they sit south of Siam and west of Sukhumvit. You come for the park, the interchange, and a hotel that is not on Soi 11.',
      'A 2026 BTS tap from Sala Daeng to Siam is a 2-stop hop, often 17 THB on the adult board. MRT Si Lom to Sukhumvit (Asok) is one stop. Dawn in Lumphini is the local move: monitors on the lawn, food carts on the edge, and the city still quiet. Hotel, SkyWalk, and Suan Phlu notes live on [Silom and Sathorn stays](/bangkok/silom-and-sathorn). Exits, the park, and the river boat sit here.',
      'Nightlife here is thinner than Thonglor. [Silom and Sathorn nightlife](/interests/nightlife/silom-sathorn) covers the rooms that exist. Patpong is a tourist market, not a first-trip plan. For seated cocktails, Grab to [Charoenkrung](/interests/nightlife/charoenkrung-soi-nana).',
      'Eat at lunch when the office crowd is out. Evening food thins after 21:00 except around Sala Daeng. A Grab to Thonglor after dinner is often 80 to 150 THB and 20 minutes if the expressway is kind.',
    ],
    sections: [
      {
        id: 'split',
        title: 'Silom versus Sathon',
        table: {
          headers: ['Side', 'Use', '2026 note'],
          rows: [
            ['Silom Road', 'Walks, older hotels, Sala Daeng', 'Closer to food; more pavement'],
            ['Sathon Road', 'Towers, embassies, wider cars', 'Longer walks; better river access via Surasak'],
            ['Lumphini edge', 'Dawn park, MRT Lumphini', 'Quiet nights; thin dinner'],
            ['Saphan Taksin', 'Chao Phraya boats', 'BTS to the river without a Sukhumvit hotel'],
          ],
        },
      },
    ],
    affiliates: [
      stay('Silom hotels', 'Sala Daeng', 'MRT and BTS on the same block.', stayAreaLink('silom'), '/photos/silom-and-sathorn.jpg'),
      stay('Sathorn hotels', 'Office boulevard', 'Quieter nights, longer dinner walks.', stayAreaLink('sathorn'), '/photos/silom-night.jpg'),
    ],
    faqs: [
      { q: 'Is this better than Sukhumvit for a first stay?', a: 'Only if you want the park and a calmer night. Sukhumvit still wins for dinner density.' },
      { q: 'Can you walk to the river?', a: 'To Saphan Taksin, yes, in about 20 to 30 minutes from Sala Daeng. In heat, take the BTS one stop.' },
    ],
  },
  {
    path: '/bangkok/rattanakosin',
    title: 'Rattanakosin tickets: Grand Palace, Wat Pho, Wat Arun',
    description: '2026 Grand Palace, Wat Pho, and Wat Arun tickets, dress code, and the Tha Tien ferry. A morning circuit board, not a hotel guide.',
    lede: 'Rattanakosin is known for the royal ticket circuit. Pay 500 THB at the Grand Palace and 300 THB at Wat Pho. Sleep notes live on the Old City stay page.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Bangkok', href: '/bangkok' },
      { name: 'Rattanakosin tickets', href: '/bangkok/rattanakosin' },
    ],
    facts: [
      { label: 'Palace', value: '500 THB foreign ticket; dress code is real' },
      { label: 'Wat Pho', value: '300 THB; Reclining Buddha is the room' },
      { label: 'Wat Arun', value: '200 THB plus a 5 THB Tha Tien ferry' },
      { label: 'Pair', value: 'Sleep notes sit on the Old City stay page' },
    ],
    chips: ['Ticket board', 'Dress code', 'Tha Tien ferry'],
    photo: '/photos/old-city.jpg',
    geo: { lat: 13.75, lon: 100.492, containedIn: 'Bangkok' },
    paragraphs: [
      'Rattanakosin is the island inside the old river bend. It is not a nightlife district. You come for the Grand Palace and Wat Phra Kaew, then Wat Pho, then the ferry to Wat Arun. The 2026 ticket board sits here. Where to sleep after the circuit lives on [Old City stays](/bangkok/old-city-rattanakosin).',
      'Enter the palace at Mani Noppharat Gate when it opens. Shoulders and knees covered. The 2026 foreign ticket is 500 THB. Wat Pho next door is 300 THB and worth the hour if you want the Reclining Buddha and a massage school table. Wat Arun is 200 THB after a 5 THB ferry from Tha Tien. Three to four hours covers the set if you start at 08:30.',
      'Sleep here only if the wats are the whole stay. Evening food is thin after 21:00. Khao San is a different product one moat over. Most first-timers should sleep on Sukhumvit or the river and Grab in for the morning. A 2026 Grab from Thonglor at 07:15 is often 150 to 280 THB.',
      'Do not add Chatuchak the same morning. Do not drive the palace loop at 10:00. Licensed guides and timed tickets are easier on Klook when the queue spikes. Combo tickets change. Recheck the gate board.',
    ],
    sections: [
      {
        id: 'tickets',
        title: '2026 ticket board',
        table: {
          headers: ['Sight', 'Foreign ticket', 'Pair with'],
          rows: [
            ['Grand Palace and Wat Phra Kaew', '500 THB', 'First stop at opening'],
            ['Wat Pho', '300 THB', 'Walk from the palace'],
            ['Wat Arun', '200 THB', 'Tha Tien ferry 5 THB'],
            ['Wat Pho massage table', '340 / 520 / 1,040 THB for 30 / 60 / 120 min', 'School desk; after the Buddha room'],
          ],
        },
      },
    ],
    affiliates: [
      stay('Old City hotels', 'Rattanakosin', 'Short walks to the palace, thin late-night food.', stayAreaLink('rattanakosin'), '/photos/old-city.jpg'),
      klook('Palace tickets', 'Attraction tickets', 'Grand Palace and temple combos with a timed start.', klookTickets('Bangkok Grand Palace tickets'), '/photos/grand-palace.jpg'),
    ],
    faqs: [
      { q: 'How long is the palace circuit?', a: 'Three to four hours if you include Wat Pho and the Wat Arun ferry. Do not add Chatuchak the same morning.' },
      { q: 'Should you sleep here?', a: 'Only if temples are the whole stay. Sukhumvit still wins for dinner. Riverside wins if you want a boat dock.' },
    ],
  },
  {
    path: '/bangkok/chinatown-yaowarat',
    title: 'Yaowarat access and where to sleep',
    description: 'How to reach Bangkok Chinatown on MRT Wat Mangkon, where to sleep, and how to use one dinner walk without booking a hotel on Yaowarat Road.',
    lede: 'Most travellers ride MRT Wat Mangkon for an evening food walk under gold-shop signs, or sleep in nearby Charoenkrung shophouse lanes. Named stalls live on the Yaowarat food walk.',
    schema: 'TouristDestination',
    crumbs: [
      { name: 'Destinations', href: '/destinations' },
      { name: 'Bangkok', href: '/bangkok' },
      { name: 'Yaowarat access', href: '/bangkok/chinatown-yaowarat' },
    ],
    facts: [
      { label: 'Rail', value: 'MRT Wat Mangkon Exit 1 is the useful door' },
      { label: 'Walk', value: 'Yaowarat Road after 18:00; 60 to 200 THB plates' },
      { label: 'Edge', value: 'Talat Noi and Charoenkrung sit next door' },
    ],
    chips: ['MRT Wat Mangkon', 'Stay trade', 'One dinner'],
    photo: '/photos/yaowarat.jpg',
    geo: { lat: 13.741, lon: 100.508, containedIn: 'Bangkok' },
    paragraphs: [
      'Chinatown here means Yaowarat Road and the sois off it, plus Talat Noi toward the river. It is a dinner district, not a four-night base. Gold shops and wholesale run the day. The street food walk starts when the tables come out, usually after 18:00.',
      'MRT Wat Mangkon Exit 1 drops you on the spine. A 2026 adult MRT single from Sukhumvit (Asok) is 32 THB for 7 stations, about 14 minutes. Odeon Circle and the dragon gate are the photo stop, not the meal. Walk west for seafood trays and noodle shops. A plate is often 60 to 200 THB. A seafood set for two can pass 1,000 THB if you point at the tank.',
      'The [Yaowarat food walk](/thai-food/yaowarat-chinatown-food-walk) names stalls. Access and stay sit here, not the stall list. Sleep riverside or on Charoenkrung if you want a short walk home. Sleep on Sukhumvit if Chinatown is one night of three. A late Grab back to Thonglor is often 120 to 220 THB.',
      'Wat Traimit at the eastern edge holds the Golden Buddha. That is a morning add-on, 40 THB for the upper rooms in recent years. Recheck the booth. Do not mix a palace morning, a Wat Traimit stop, and a full Yaowarat dinner unless you like a 14-hour day.',
    ],
    sections: [
      {
        id: 'use',
        title: 'Chinatown moves',
        table: {
          headers: ['Move', 'When', '2026 note'],
          rows: [
            ['MRT Wat Mangkon', 'Any night after 17:30', 'Exit 1 to the spine'],
            ['Yaowarat walk', '18:00 to 22:00', 'One serious meal, not eight snacks'],
            ['Talat Noi', 'Day or early evening', 'Street art and quieter sois'],
            ['Charoenkrung bars', 'After dinner', 'Soi Nana nightlife after dinner'],
          ],
        },
      },
    ],
    affiliates: [
      stay('Riverside and Charoenkrung', 'Walk or short Grab', 'Sleep here if Yaowarat is more than one night.', stayAreaLink('charoenkrung'), '/photos/riverside.jpg'),
      stay('Rattanakosin stays', 'Temple morning plus dinner', 'Works if day one is the palace and night one is Yaowarat.', stayAreaLink('rattanakosin'), '/photos/old-city.jpg'),
    ],
    faqs: [
      { q: 'Do you need a hotel in Chinatown?', a: 'No. One dinner from Sukhumvit or the river is enough. Sleep here only if you want to walk home at 22:30.' },
      { q: 'Is it the same as Charoenkrung Soi Nana?', a: 'No. Soi Nana is a cocktail pocket off Charoenkrung. Yaowarat is the food street. You can do both in one night if you eat early.' },
    ],
  },
];
