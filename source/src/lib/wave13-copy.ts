import type { Page, Section } from './content';

function tableSection(id: string, title: string, headers: string[], rows: string[][], paragraphs: string[] = []): Section {
  return { id, title, paragraphs, table: { headers, rows } };
}

export const wave13Copy: Record<string, Partial<Page>> = {
  '/phuket': {
    paragraphs: [
      'Phuket is known for west-coast beaches and a huge airport, not for one pretty town. HKT is the Andaman hub. A car to Kamala, Surin, or Bang Tao is 45 to 75 minutes. Patong is 30 to 50. Kata and Karon sit in the middle. Old Phuket Town is a morning of sino-portuguese streets if you need a non-beach day.',
      'The useful season is November to April. May to October is the southwest monsoon: boats cancel, west-facing beaches take swell, and a daybed prepaid in July is a gamble. If your dates sit in the wet window, read [when to go](/plan/when-to-go) and consider [Koh Samui](/koh-samui) instead. In October, skip leftover raw fish on a west-coast grill and eat in Old Phuket Town or inland.',
      'Stay west. Do not sleep four nights in Patong unless that strip is the trip. Kamala and Surin are calmer. Kata works for a first beach with restaurants on the sand. Rawai and Nai Harn face south and stay usable on some west-coast wind days. Open the sub-guides: [Kata and Karon](/phuket/kata-and-karon), [Kamala and Surin](/phuket/kamala-and-surin), [Rawai and Nai Harn](/phuket/rawai-and-nai-harn).',
      'Boats leave in the morning from Rassada. Phi Phi and Phang Nga are day trips. A 2026 speedboat seat is often 1,500 to 2,500 THB plus park fees. Maya Bay is 400 THB on top of the tour. Book the hotel car from HKT on Trip.com. Book the boat on Klook the afternoon before, not at the pier in a swell.',
    ],
    sections: [
      tableSection(
        'stay-split',
        'Where to sleep on Phuket',
        ['Coast', 'Who it fits', '2026 transfer from HKT'],
        [
          ['Kamala, Surin, Bang Tao', 'Calmer west coast', '45 to 75 minutes, 900 to 1,500 THB car'],
          ['Kata and Karon', 'First beach with dinner on the sand', '45 to 70 minutes'],
          ['Rawai and Nai Harn', 'South-facing, some wind days', '50 to 80 minutes'],
          ['Patong', 'Nightlife strip only', '30 to 50 minutes; skip as a four-night base'],
          ['Old Town', 'One night if you want streets, not sand', '45 minutes inland'],
        ],
        ['Beach clubs live on [Phuket beach clubs](/interests/nightlife/phuket-beach-clubs). Amanpuri and Avista sit under [resort living](/interests/resort-living).'],
      ),
    ],
    faqs: [
      { q: 'Is Phuket a first-trip must?', a: 'It is the easy Andaman airport. Krabi is prettier on the water. Samui is the Gulf alternative when the Andaman is in monsoon.' },
      { q: 'How many nights?', a: 'Three on one beach. Add a fourth only if you want a boat day and a recovery day.' },
      { q: 'Patong or not?', a: 'One night if you want that strip. Four nights if you enjoy that strip. Never as the default base for a first trip.' },
    ],
  },
  '/chiang-mai': {
    paragraphs: [
      'Chiang Mai is known for Lanna wats inside a square moat and a cafe strip west of it. Give it three nights. Sleep inside the moat for temples on foot. Sleep in Nimman for coffee and a later evening. The Old City still closes temple doors for lunch. Nimmanhaemin, past Suan Dok, is where you eat late.',
      'Fly CNX in about 70 minutes from Bangkok, or take SRT trains 9 and 10 from Krung Thep Aphiwat. The sleeper is about 12 hours. A 2026 upper berth is often 800 to 1,200 THB. Fly if you land at noon and want dinner in the Old City. Take the train if you want the ride.',
      'Sunday Walking Street fills Ratchadamnoen. Saturday is Wua Lai, south of the moat. Temple booths at Wat Phra Singh and Chedi Luang often ask 20 to 50 THB in cash. Wat Chiang Man is generally free. Doi Suthep is 30 THB at the wat plus a songthaew, often 40 THB from the zoo or 60 THB from Chang Phuak Gate. Doi Inthanon is 300 THB for foreigners and a full day. Smoke season from late February to April can sit in the valley. Check the air before you lock March.',
      'Open [Old City](/chiang-mai/old-city) and [Nimmanhaemin](/chiang-mai/nimmanhaemin) before you book the room. Open [Doi Inthanon](/chiang-mai/doi-inthanon) only if you want the mountain day. Chiang Rai is a side trip, not a must on a first week.',
    ],
    sections: [
      tableSection(
        'split',
        'Old City versus Nimman',
        ['Base', 'Who it fits', '2026 move'],
        [
          ['Old City', 'Temple mornings, Sunday market', 'Walk the moat; 20 to 50 THB wat booths'],
          ['Nimmanhaemin', 'Cafes, later dinner', 'Grab to the moat 80 to 120 THB, 4 to 7 minutes'],
          ['Mae Rim valley', 'Resort week, not a wat base', '30 to 45 minutes each way'],
          ['CNX airport belt', 'Late landing only', 'Move into town the next morning'],
        ],
      ),
    ],
    faqs: [
      { q: 'Fly or train from Bangkok?', a: 'Fly if you land at noon and want dinner in the Old City. Take train 9 if you want a sleeper and a morning arrival at Chiang Mai station. Train 10 is the southbound return.' },
      { q: 'How many nights?', a: 'Three is the floor. Two only if you already know you will come back.' },
      { q: 'Pai or Chiang Rai?', a: 'Pick one. Pai is a mountain road. Chiang Rai is the White Temple and a longer van. Do not add both on a first week.' },
    ],
  },
  '/koh-samui': {
    paragraphs: [
      'Samui is the Lower Gulf hub with an airport on the island. Stay on Chaweng for nightlife. Stay north or south if you want a quieter coast. January to September is the easier sea. October to December takes more swell on the east coast.',
      'Fly BKK-USM in about 70 minutes when the day matters. A 2026 one-way is often 1,800 to 4,500 THB before bags. The Donsak ferry plus a van from the mainland is the slower, cheaper path. USM to Chaweng is 10 to 20 minutes by car. To Bophut or Maenam, 15 to 25. To the northwest villas, 20 to 40.',
      'Open [Chaweng](/koh-samui/chaweng) if you want the strip. Open [Lamai](/koh-samui/lamai) for a slightly quieter east-coast beach. Open [Ang Thong](/koh-samui/ang-thong-marine-park) for the day-boat park, 300 THB, no public ferry. Boats to [Koh Phangan](/koh-phangan) take about 30 minutes on Lomprayah. Seatran takes about 45.',
      'Nikki Beach and the beach-club row sit on [Samui beach clubs](/interests/nightlife/koh-samui-beach-clubs). Six Senses, Four Seasons, and Ritz-Carlton sit under [resort living](/interests/resort-living). Book the USM car on Trip.com. Book Lomprayah the afternoon before, not at the pier in a swell.',
    ],
    sections: [
      tableSection(
        'coasts',
        'Samui coasts',
        ['Coast', 'Who it fits', '2026 USM car'],
        [
          ['Chaweng', 'Nightlife and first-timers', '10 to 20 minutes, 400 to 800 THB'],
          ['Lamai', 'East coast, slightly quieter', '20 to 30 minutes'],
          ['Bophut and Maenam', 'Fisherman Village dinners', '15 to 25 minutes'],
          ['Northwest villas', 'When the hotel is the trip', '20 to 40 minutes; you will Grab for dinner'],
        ],
      ),
    ],
    faqs: [
      { q: 'Samui or Phuket?', a: 'Same job, opposite monsoon. Phuket and Krabi for November to April. Samui and Phangan for January to September, with overlap in winter.' },
      { q: 'Do you need Phangan as well?', a: 'Add it if you want a quieter bay or Full Moon. One night on Samui is enough if you fly USM and the bay is the point.' },
    ],
  },
  '/krabi': {
    paragraphs: [
      'Krabi is known for limestone cliffs and the Railay pocket, not a long resort strip. Stay in Ao Nang if you want cars and dinner. Stay on Railay if you accept a longtail and being stuck on a storm day. Fly into KBV, or transfer from HKT in about 2 to 3 hours by car.',
      'Railay has no road. A shared longtail from Ao Nang is about 10 to 15 minutes and 100 to 200 THB a person in 2026. Private boats cost more. Phra Nang sits in the same cliff pocket. [Rayavadee](/resort-living/rayavadee) is the grove resort with no road in.',
      'Phi Phi is a day trip or a night if you want the village after the boats leave. Maya Bay park fee is 400 THB on top of the tour. Four Islands and Hong are the other morning products. Cancel if the Andaman is up. The Gulf is the flip. See [Phuket to Krabi](/get-there/phuket-to-krabi-phi-phi) and [Krabi to Koh Lanta](/get-there/krabi-to-koh-lanta).',
      'Ao Nang is logistics: cars, 7-Elevens, and the pier. It is not the pretty picture. Eat there. Sleep there if you want an exit that is not a boat. KBV to Ao Nang is 30 to 45 minutes and often 600 to 1,000 THB by private car in 2026.',
    ],
    sections: [
      tableSection(
        'bases',
        'Krabi bases',
        ['Base', 'Who it fits', '2026 access'],
        [
          ['Ao Nang', 'Cars, dinner, boat desk', 'KBV 30 to 45 minutes'],
          ['Railay / Phra Nang', 'Cliffs, no road', 'Longtail 100 to 200 THB a person'],
          ['Klong Muang / Tubkaek', 'Quieter west, longer dinners', 'Car from Ao Nang 15 to 25 minutes'],
          ['Krabi Town', 'Night market, not a beach', 'Useful one night if you arrive late'],
        ],
        ['Read [Railay and Phra Nang](/attractions/railay-beach-and-phra-nang-cave) for the pocket itself.'],
      ),
    ],
    faqs: [
      { q: 'Phuket or Krabi?', a: 'Krabi if the cliffs matter. Phuket if the flight times and resort row matter. You can boat between them in a morning in season.' },
      { q: 'How many nights?', a: 'Three. Two if Railay is a day trip from Ao Nang. Four if you add Phi Phi as an overnight.' },
    ],
  },
  '/khao-sok': {
    paragraphs: [
      'Khao Sok is known for limestone cliffs on a flooded lake and a night in the forest. Sleep at the lake for dawn mist. Sleep in the village if you arrive late from Phuket or Krabi. The lake is inland. The calendar is still Andaman: November to April is the easier window. Trails go slick after rain.',
      'A van from Phuket or Krabi is about 2 to 3 hours and often 350 to 600 THB a seat in 2026. Surat Thani is the other door if you fly URT. Pair Khao Sok with those coasts, not with Samui, unless you like a longer road. See [Phuket to Khao Sok](/get-there/phuket-to-khao-sok) and [Surat Thani to Khao Sok](/get-there/surat-thani-to-khao-sok).',
      'Cheow Lan (Ratchaprapha) is the lake. A private longtail is often 1,800 to 2,500 THB for the boat, not per person. Park fees sit on top. Raft houses vary from basic to generator-quiet. Read last season\'s notes. Dawn on the water is the reason you came. A day trip is a van and a warm boat.',
      'Night safaris and lake canoes are the usual booked pieces. Leeches after rain are real. Bring dry bags. Open [Cheow Lan Lake](/attractions/cheow-lan-lake-khao-sok) for the ticket board. One or two nights is enough. Three only if you want a village day and a lake day split.',
    ],
    sections: [
      tableSection(
        'nights',
        'Village or raft',
        ['Stay', 'Who it fits', '2026 note'],
        [
          ['Lake raft house', 'Dawn mist, no late exit', 'Book boat and bed together'],
          ['Khao Sok village', 'Late van arrival', 'Cheaper; you miss 07:00 on the water'],
          ['Phuket or Krabi only', 'Day-trip people', 'Possible, weaker'],
        ],
      ),
    ],
    faqs: [
      { q: 'Day trip or overnight?', a: 'Overnight. The lake at 07:00 is the reason you came. A day trip is a van and a warm boat.' },
      { q: 'Which coast do you pair it with?', a: 'Andaman. Phuket, Krabi, or Khao Lak. Do not add Samui unless you enjoy a long transfer day.' },
    ],
  },
  '/koh-phangan': {
    paragraphs: [
      'Phangan is known for the Full Moon Party at Haad Rin. The rest of the island is west and north bays plus jungle roads. Book Haad Rin only if the party is the trip. Sleep on the west or north bays for a quieter stay. January to September is the easier sea.',
      'There is no airport. Fly to Samui then boat to Thong Sala, or take the Bangkok sleeper to Chumphon and the morning catamaran. Lomprayah from Samui is about 30 minutes. Seatran is about 45. A 2026 seat is often 400 to 700 THB. Seats sell out around Full Moon. See [Bangkok to Koh Phangan](/get-there/bangkok-to-koh-phangan).',
      'Thong Nai Pan, Srithanu, and the west coast are the usual first stays. Scooter roads are steep and sandy. A 2026 scooter day is often 200 to 300 THB. The insurance story is weak. Grab-like cars exist but thin out at night. Budget a boat taxi if you drink.',
      'Koh Tao is a further ferry if diving is the point. It is not a first-spine must. Full Moon is one beach, one night, and a different island from a Srithanu morning. Do not book a yoga week next to Haad Rin in party week and expect quiet.',
    ],
    sections: [
      tableSection(
        'bays',
        'Phangan bays',
        ['Bay', 'Who it fits', '2026 note'],
        [
          ['Haad Rin', 'Full Moon only', 'Book far ahead; skip if you want sleep'],
          ['West coast / Srithanu', 'Quieter first stay', 'Sunsets; scooter hills'],
          ['Thong Nai Pan', 'North-east sand', 'Longer from Thong Sala'],
          ['Thong Sala', 'Ferry night only', 'Logistics town, not a beach week'],
        ],
      ),
    ],
    faqs: [
      { q: 'Do you need Samui as well?', a: 'One night on Samui is enough if you fly USM. Stay on Phangan if the bay is the point.' },
      { q: 'Is Full Moon required?', a: 'No. Most of the island ignores it. Book it only if that night is why you came.' },
    ],
  },
  '/bangkok/sukhumvit-thonglor': {
    title: 'Sukhumvit and Thonglor stays',
    description:
      'First-timer hotel playbook for Bangkok\'s BTS strip from Nana to Ekkamai: which tower to book, dinner on Thonglor, and when to leave the soi.',
    lede:
      'Sukhumvit and Thonglor are known as the first-timer hotel strip. Book Asok or Phrom Phong if you want a calm walk to the BTS. Use this page to pick a stay. Open the Sukhumvit sois page for the exit map.',
    paragraphs: [
      'This is hotels, skytrain, and dinner on one line. Asok and Phrom Phong are the easiest pairing. Thonglor is one stop further. Nana is louder and cheaper. A 2026 BTS tap along this line is 17 to 47 THB. After midnight, Grab replaces the train.',
      'Stay one block off Sukhumvit Road if you want sleep. Towers that face the soi take the bass. Terminal 21 at Asok is the interchange mall, not a reason to stay four nights. EmDistrict at Phrom Phong is the air-con reset. Thong Lo is where dinner reservations actually matter.',
      'Bar Us, Rabbit Hole, and Find The Locker Room are on the [Thonglor nightlife](/interests/nightlife/thonglor-ekkamai) page. Havana Social is on [Sukhumvit Soi 11](/interests/nightlife/sukhumvit-soi-11). They are not listed here as a crawl. The shorter [Sukhumvit](/bangkok/sukhumvit) page is the soi map.',
      'Eat on Thonglor or Soi 38. Do not treat Nana beer bars as the city plan. A palace morning from here is a 07:15 Grab, often 150 to 280 THB. Chatuchak is BTS to Mo Chit plus a walk, Saturday and Sunday only.',
    ],
    sections: [
      tableSection('strip', 'Nana to Ekkamai', ['BTS', 'Use', '2026 note'], [
        ['Nana', 'Budget towers, Soi 11', 'Loud; cheap; skip as a week base'],
        ['Asok', 'Interchange, Terminal 21', 'MRT plus BTS'],
        ['Phrom Phong', 'First-timer default', 'Calmer walks, EmDistrict'],
        ['Thong Lo', 'Dinner and bars', 'Higher rates'],
        ['Ekkamai', 'Later, slightly cheaper', 'Good if you already know the grid'],
      ]),
    ],
  },
  '/bangkok/old-city-rattanakosin': {
    title: 'Old City and Rattanakosin stays',
    description:
      'Where to sleep after the Grand Palace circuit: riverside versus Sukhumvit, Tha Tien lunch, and why Khao San is a different product from the wats.',
    lede:
      'The Old City is known as a temple morning, then a hotel decision. Stay here only if the wats are the whole trip. First-timers who want dinner should sleep elsewhere and Grab in.',
    paragraphs: [
      'Come for the palace and the river wats, then leave. In 2026 the Grand Palace is 500 THB for foreign visitors and Wat Pho is 300 THB. Afternoon heat empties the lanes and fills the taxis. Eat on Tha Tien or go back to Sukhumvit for dinner.',
      'Enter at Mani Noppharat Gate at opening. Dress code is real: shoulders and knees. Wat Pho is next door. The Reclining Buddha is the room. A school table after the circuit is 520 THB for 60 minutes, 340 THB for 30, or 1,040 THB for 120 (watpho.com). Wat Arun is a 5 THB ferry from Tha Tien plus 200 THB at the gate.',
      'Sleep here only if temples are the whole stay. Evening food is thin. Khao San is a different product. Most first-timers should sleep on Sukhumvit or the river and Grab in. See [Rattanakosin tickets](/bangkok/rattanakosin) for the 2026 gate board and [Grand Palace](/attractions/grand-palace-and-wat-phra-kaew) for the gate notes.',
      'Combo tickets and licensed guides are easier on Klook than at the gate when queues spike. Do not add Chatuchak the same morning. Three to four hours covers palace, Wat Pho, and the ferry if you start at 08:30.',
    ],
    sections: [
      tableSection('circuit', 'The morning circuit', ['Stop', '2026 fee', 'Order'], [
        ['Grand Palace', '500 THB', 'First, at opening'],
        ['Wat Pho', '300 THB', 'Walk'],
        ['Tha Tien ferry', '5 THB', 'To Wat Arun'],
        ['Wat Arun', '200 THB', 'Last, then leave'],
      ]),
    ],
  },
  '/bangkok/silom-and-sathorn': {
    title: 'Silom and Sathorn stays',
    description:
      'Bangkok embassy-ridge stays between Lumphini and the river: Sala Daeng food, Convent Road, Suan Phlu dinners, and Mahanakhon SkyWalk tickets.',
    lede:
      'Silom and Sathorn are known as the office and embassy ridge. Eat at Sala Daeng. Book SkyWalk if the view is the point. Use the park and rail map for Lumphini exits and the Saphan Taksin boat.',
    paragraphs: [
      'Silom and Sathorn are the office-and-park pair south of Siam. You come for Lumphini at dawn, the Sala Daeng interchange, and a hotel that is not on Soi 11. You do not come for sois or late food. This page is the stay, food, and SkyWalk trade-off. The [park and rail map](/bangkok/silom-sathon) covers exits, dawn walks, and the orange-flag boat.',
      'A 2026 BTS tap from Sala Daeng to Siam is a 2-stop hop, often 17 THB on the adult board. MRT Si Lom to Sukhumvit is one stop. Lumphini opens about 04:30. Monitors on the lawn are the local photo, not a zoo. Food carts sit on the edge until mid-morning. Evening food thins after 21:00 except around Sala Daeng.',
      'Sathon (Sathorn) is the wider boulevard of towers and embassies. Walks are longer. Surasak BTS is the river-leaning stop. Saphan Taksin is the boat gate. A walk from Sala Daeng to the river is 20 to 30 minutes in heat. Take the BTS one stop instead.',
      'Nightlife is thinner than Thonglor. Open [Silom and Sathorn nightlife](/interests/nightlife/silom-sathorn) for the rooms that exist. Patpong is a tourist market. For seated cocktails, Grab to Charoenkrung. A Grab to Thonglor after dinner is often 80 to 150 THB and 20 minutes.',
    ],
    sections: [
      tableSection('pair', 'Silom versus Sathorn', ['Side', 'Who it fits', '2026 note'], [
        ['Silom Road', 'Walks, older hotels', 'Closer to food'],
        ['Sathorn Road', 'Towers, quieter nights', 'Longer dinner walks'],
        ['Lumphini edge', 'Dawn park', 'Thin dinner'],
        ['Saphan Taksin', 'River boats', 'BTS to the Chao Phraya'],
      ]),
    ],
  },
  '/chiang-mai/old-city': {
    paragraphs: [
      'The Old City is a moated square of Lanna wats, not a nightlife grid. The moat loop is about 6.5 km, closer to 75 to 90 minutes on foot. Wat Phra Singh and Chedi Luang often ask 20 to 50 THB in cash. Wat Chiang Man is generally free. Walk at dawn: Wat Phra Singh, Chedi Luang, and the gates. Midday is a cafe or a nap. Sunday Walking Street fills Ratchadamnoen.',
      'Sleep inside the moat if you want temple mornings on foot. Guesthouses and a few quiet hotels fill early on Sunday-market weekends. The east gates pick up bars at night. The inner lanes stay quiet. Nimman is louder and later, a 80 to 120 THB Grab and four to seven minutes.',
      'Saturday is Wua Lai, south of the Tha Phae side. Doi Suthep is the mountain wat: 30 THB plus a songthaew, often 40 THB from the zoo or 60 THB from Chang Phuak Gate. Do not stack Suthep, Inthanon, and the Sunday market on the same weekend without a rest hour.',
      'Scooters cut the corners. Sidewalks vanish. A 2026 scooter day is often 200 to 250 THB. The insurance story is weak. Walk the square. Grab the hill. See [Chiang Mai](/chiang-mai) for the city split and [Nimmanhaemin](/chiang-mai/nimmanhaemin) if you want dinner more than wats.',
    ],
    sections: [
      tableSection('wats', 'The square', ['Place', '2026 note', 'When'], [
        ['Wat Phra Singh', '20 to 50 THB booth', 'Dawn'],
        ['Wat Chedi Luang', '20 to 50 THB booth', 'Dawn or late afternoon'],
        ['Tha Phae Gate', 'Free; photo stop', 'Evening'],
        ['Sunday Walking Street', 'Cash snacks 20 to 80 THB', 'Sunday from late afternoon'],
        ['Wua Lai', 'Saturday walking street', 'South of the moat'],
      ]),
    ],
  },
  '/chiang-mai/nimmanhaemin': {
    paragraphs: [
      'Nimman is the later, cafe side of Chiang Mai. Stay here if the Old City feels too early. Soi 9 and the lanes west of Nimmanhaemin Road are the evening grid. Maya and One Nimman are the mall anchors. A 2026 Grab to the moat is often 80 to 120 THB and four to seven minutes.',
      'You can walk to the Old City. It is hot and dull. Grab is the move at 07:00 if you want Wat Phra Singh at opening. Come back for lunch. Khao soi is a lunch dish. The [khao soi guide](/thai-food/chiang-mai-khao-soi-and-markets) names rooms. Do not treat Nimman as a temple base.',
      'Students and remote workers fill the cafes. Dinner starts late. Rooms are small hotels and apartment-style stays. Book early in cool season (November to February) and around Yi Peng if the lantern dates hit your week. Smoke season still applies. A view room in March can sit in haze.',
      'Veranda High is the hill MGallery above the valley, not a Nimman walk. Four Seasons is Mae Rim, 30 to 45 minutes. Those pages sit under [resort living](/interests/resort-living). Use Nimman when you want to walk to dinner and Grab to the wats.',
    ],
    sections: [
      tableSection('use', 'How to use Nimman', ['Move', '2026 note', 'Who it fits'], [
        ['Soi 9 and west lanes', 'Dinner and cafes', 'Later nights'],
        ['Maya / One Nimman', 'Mall reset, AC', 'Hot season afternoons'],
        ['Grab to the moat', '80 to 120 THB, 4 to 7 minutes', 'Temple mornings'],
        ['Songthaew', 'Shared, slower', 'If you already know the route'],
      ]),
    ],
  },
  '/resort-living/amanpuri': {
    paragraphs: [
      'Amanpuri is known for coconut-grove pavilions above a private west-coast cove on Phuket. You come for the grove, the cove, and a week that does not need Patong. It is a pavilion resort, not a tower. Pair it with the Andaman window, November to April.',
      'The address is on the Cherngtalay / Surin-Pansea side, Thalang District. A HKT car is about 45 to 75 minutes and often 1,500 to 2,500 THB in 2026 if you book a private transfer. Do not boat on arrival day. Do not treat this as a Patong base with a long commute.',
      'Pavilions start as one-bedroom units in the grove. Villas add private pools and more bedrooms. Published starting rates in a busy 2026 dry-season week often sit from about 45,000 THB for a pavilion to 80,000 to 200,000 THB and up for larger villas. Those are planning bands, not a quote. Trip.com shows the live number.',
      'Dinner off-property means a car. Kamala and Surin restaurants are the short hops. Old Phuket Town is a morning, not a nightly plan. Beach clubs on the nightlife page are a different product. If Aman is not the budget, [Avista Hideaway](/resort-living/avista-hideaway-phuket) is the MGallery west-coast hill stay.',
    ],
    sections: [
      tableSection('rooms', 'Room and transfer board', ['Type', '2026 planning band', 'Note'], [
        ['Grove pavilion', 'From about 45,000 THB', 'One bedroom, hotel path'],
        ['Pool villa', '80,000 to 200,000 THB+', 'When the villa is the week'],
        ['HKT private car', '1,500 to 2,500 THB', '45 to 75 minutes'],
        ['Season', 'Nov to Apr', 'Southwest monsoon is the wrong week'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'Can you day-trip Phi Phi from here?', a: 'You can. It costs a dawn start and a lost grove day. One boat day is enough.' },
    ],
  },
  '/resort-living/six-senses-yao-noi': {
    paragraphs: [
      'Six Senses Yao Noi is known for hill villas over Phang Nga Bay. Use it when the bay is the trip and you accept a pier plus boat. Yao Noi sits between Phuket and Krabi. There is no road from the airports. Transfers are a pier plus a 20 to 45 minute longtail or speedboat.',
      'Fly HKT or KBV. The hotel desk assigns the pier. A 2026 combined car-and-boat transfer is often 3,000 to 6,000 THB a person or a higher private rate. Recheck the voucher. Book boats in the Andaman season. In the southwest monsoon, treat this as a weather-dependent stay.',
      'Villas step down the hill. Pool villas are the point. Starting rates in a busy dry-season week often sit from about 25,000 to 40,000 THB for an entry villa and 50,000 to 90,000 THB for larger pool villas. Those are planning bands. Trip.com shows the live number.',
      'Phang Nga boats from the hotel are the on-property day. Ao Nang dinners are a project. Phuket nightlife is the wrong pairing. If you want cliffs with a roadless pocket and no island transfer, [Rayavadee](/resort-living/rayavadee) is the Railay alternative.',
    ],
    sections: [
      tableSection('access', 'Access and rates', ['Move', '2026 planning band', 'Note'], [
        ['HKT or KBV plus boat', '20 to 45 minutes on the water', 'Car to the pier first'],
        ['Combined transfer', '3,000 to 6,000 THB pp typical', 'Confirm on the voucher'],
        ['Entry pool villa', '25,000 to 40,000 THB', 'Dry-season planning band'],
        ['Larger villa', '50,000 to 90,000 THB+', 'When the bay is the week'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'Phuket or Krabi airport?', a: 'Whichever has the better long-haul. The boat time is similar. Do not mix a late landing with a night crossing.' },
    ],
  },
  '/resort-living/six-senses-samui': {
    paragraphs: [
      'Six Senses Samui is known for hill villas above Bophut. Stay here if you want a Gulf headland, not the Chaweng strip. January to September is the easier sea. USM is about 15 to 25 minutes by car. Still book the car. The last road is steep.',
      'Bophut village is the dinner walk if you leave the hill. Fisherman Village is the evening grid. Nikki Beach is on the nightlife page, not here. A 2026 Grab down the hill is often 200 to 400 THB. A scooter at night on that hill is a bad story.',
      'Villas are the inventory. Entry pool villas in a busy 2026 week often sit from about 22,000 to 35,000 THB. Larger residences run 40,000 to 80,000 THB and up. Planning bands only. Trip.com shows the live number. Four Seasons sits on the northwest coast if you want a different Gulf view.',
      'Ang Thong is a day boat from Samui, 300 THB park fee, no public ferry. Phangan is 30 minutes from the island pier, not from the villa door. Leave a buffer before any boat. Do not land USM at 16:00 and book a 17:00 crossing.',
    ],
    sections: [
      tableSection('board', 'Villa and transfer board', ['Type', '2026 planning band', 'Note'], [
        ['Entry pool villa', '22,000 to 35,000 THB', 'Hill, not the sand strip'],
        ['Larger villa', '40,000 to 80,000 THB+', 'When the headland is the week'],
        ['USM car', '15 to 25 minutes, 600 to 1,200 THB', 'Steep last road'],
        ['Bophut dinner', 'Walk or short Grab', 'Fisherman Village'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'Chaweng or this hill?', a: 'Chaweng if you want the strip. This hill if the villa is the trip.' },
    ],
  },
  '/resort-living/capella-bangkok': {
    paragraphs: [
      'Capella Bangkok is known for a river path and a quiet bank of the Chao Phraya. Use it when the room and the river are the evenings. It is not a Sukhumvit hotel. There is no BTS at the door. A 2026 Grab to Saphan Taksin is often 80 to 150 THB.',
      'The hotel sits on the Bangkok side with a promenade. The palace is a morning boat, not a taxi loop at 10:00. Charoenkrung cocktail rooms are a short Grab. See [Charoenkrung and Soi Nana](/interests/nightlife/charoenkrung-soi-nana). The Siam is further north on the same river if you want a private compound and a hotel boat.',
      'Rooms and suites face the water or the garden. Entry rooms in a busy 2026 week often sit from about 18,000 to 28,000 THB. Suites and residences run 35,000 to 70,000 THB and up. Planning bands. Trip.com shows the live number. Airport cars from BKK are 45 to 75 minutes depending on the expressway.',
      'Eat on the river the first night. Do not schedule a late Soi 11 crawl and a 08:30 palace gate on the same stay without a nap. Two nights is the usual Capella add-on before a north or south hop.',
    ],
    sections: [
      tableSection('board', 'Room and access', ['Type', '2026 planning band', 'Note'], [
        ['River room', '18,000 to 28,000 THB', 'When the path is the evening'],
        ['Suite / residence', '35,000 to 70,000 THB+', 'Longer Bangkok stays'],
        ['Grab to Saphan Taksin', '80 to 150 THB', 'BTS and boats'],
        ['BKK car', '45 to 75 minutes', 'Book if you land late'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'Capella or The Siam?', a: 'Capella for a central river path. The Siam for a Dusit compound and a hotel boat.' },
    ],
  },
  '/resort-living/the-siam': {
    paragraphs: [
      'The Siam is known for a private Dusit compound and a hotel boat. Use it for two Bangkok nights that are not Sukhumvit. It sits north of the usual tourist river hotels. The boat is part of the stay. Budget 20 to 40 minutes on the river to the Old City piers.',
      'Art-deco rooms and Thai houses share the garden. Entry rooms in a busy 2026 week often sit from about 16,000 to 26,000 THB. Houses and suites run 30,000 to 60,000 THB and up. Planning bands. Trip.com shows the live number. A BKK car is 40 to 70 minutes. There is no BTS at the door.',
      'Pair with Old City mornings, not Soi 11. The hotel boat to Tha Tien beats a 10:00 taxi. Charoenkrung is a Grab south after dinner if you want a cocktail room. Khao San is close on a map and a different product. Skip it unless you already know why you want it.',
      'Two nights is enough. Three if the compound is the Bangkok plan. Then fly north or south. Do not keep a river house through a Chatuchak Saturday unless you like a long round trip.',
    ],
    sections: [
      tableSection('board', 'House and boat board', ['Type', '2026 planning band', 'Note'], [
        ['Entry room', '16,000 to 26,000 THB', 'Garden or river'],
        ['Thai house / suite', '30,000 to 60,000 THB+', 'When the compound is the stay'],
        ['Hotel boat to Old City', '20 to 40 minutes', 'Better than a 10:00 taxi'],
        ['BKK car', '40 to 70 minutes', 'No BTS at the door'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'Is this a good four-night base?', a: 'Two or three. After that you will want Sukhumvit dinners or a plane.' },
    ],
  },
  '/resort-living/four-seasons-chiang-mai': {
    paragraphs: [
      'Four Seasons Chiang Mai is known for rice-terrace pavilions in Mae Rim. Use it when the valley is the trip and you accept a 30 to 45 minute ride to the Old City. It is not a moat hotel. You come for terraces, cooking school, and cool-season mornings.',
      'CNX is about 25 to 40 minutes. A 2026 private car is often 800 to 1,500 THB. The Old City is 30 to 45 minutes the other way. Budget the car if you want Sunday Walking Street. Do not plan to walk anywhere off-property.',
      'Pavilions and residences sit on the terraces. Entry pavilions in a busy cool-season week often sit from about 20,000 to 32,000 THB. Larger residences run 40,000 to 80,000 THB and up. Planning bands. Smoke season (late February to April) can sit in the valley. Check the air before you lock March.',
      'Cooking school is the on-property day. Doi Suthep is a half day if you leave early. Inthanon is a full day. Elephant venues vary. Read the ethics page before you book a camp. Veranda High is the hill pool above town if you want a view and a shorter taxi to Nimman.',
    ],
    sections: [
      tableSection('board', 'Pavilion and transfer board', ['Type', '2026 planning band', 'Note'], [
        ['Rice-terrace pavilion', '20,000 to 32,000 THB', 'Valley, not the moat'],
        ['Residence', '40,000 to 80,000 THB+', 'When the terrace is the week'],
        ['CNX car', '25 to 40 minutes, 800 to 1,500 THB', 'Book with the room'],
        ['Old City car', '30 to 45 minutes', 'Sunday market needs a plan'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'Can you skip a town hotel?', a: 'Yes, if you accept the car for every wat. No, if you want to walk the moat at dawn.' },
    ],
  },
  '/resort-living/four-seasons-koh-samui': {
    paragraphs: [
      'Four Seasons Koh Samui is known for northwest-coast villas. Stay here if you want a Gulf view and will Grab for most dinners. It is a different island from Chaweng. USM is about 20 to 35 minutes by car. A 2026 private car is often 800 to 1,500 THB.',
      'Villas face the water. Entry villas in a busy 2026 Gulf week often sit from about 25,000 to 40,000 THB. Larger pool villas run 50,000 to 100,000 THB and up. Planning bands. Trip.com shows the live number. Six Senses is the Bophut headland if you want Fisherman Village closer.',
      'Off-property dinners mean a car along the hills. Lipa Noi and Taling Ngam are quiet. Chaweng is 40 to 60 minutes. Do not plan a beach-club afternoon and a late Chaweng night unless you like that road twice.',
      'Use the Gulf window, January to September. USM is the arrival. Pair with a Phangan boat only if you want a day off-property and you leave a buffer. Ang Thong is a day boat from the island, not from the villa lawn.',
    ],
    sections: [
      tableSection('board', 'Villa and transfer board', ['Type', '2026 planning band', 'Note'], [
        ['Entry villa', '25,000 to 40,000 THB', 'Northwest view'],
        ['Larger pool villa', '50,000 to 100,000 THB+', 'When the villa is the week'],
        ['USM car', '20 to 35 minutes, 800 to 1,500 THB', 'Book the car'],
        ['Chaweng dinner', '40 to 60 minutes', 'Only if you mean it'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'Northwest or Bophut?', a: 'Northwest for the view and quiet. Bophut if you want a village walk.' },
    ],
  },
  '/resort-living/soneva-kiri': {
    paragraphs: [
      'Soneva Kiri is known for a Koh Kood hideaway with its own transfer plan. Use it as its own trip, not a bolt-on to Phuket. Koh Kood is in Trat, on the eastern Gulf, not on the Samui chain.',
      'Bangkok to Trat is about 1 hour by air, then a boat of about 1 to 1.5 hours, or the resort transfer. Some stays use a charter. Transfer logistics are the first thing to book. Rates without a transfer plan are incomplete. Search Trip.com for Koh Kood stays, not Bangkok, and confirm live 2026 rates plus whether the boat is bundled.',
      'Villas sit in the trees above a small Gulf bay. Entry villas in a busy 2026 week often sit from about 40,000 to 70,000 THB. Larger family villas run 80,000 to 150,000 THB and up, often with the transfer bundled or billed apart. Planning bands. Recheck the voucher for what the boat includes.',
      'The public path is Trat plus a Koh Kood ferry from Laem Sok, often 30 to 45 minutes on the faster boats and 450 to 600 THB a seat. That is not the Soneva arrival. If you self-transfer, leave a full day. Do not land BKK at 15:00 and expect to sleep on Kood the same night without a booked chain.',
    ],
    sections: [
      tableSection('board', 'Koh Kood access and rates', ['Move', '2026 planning band', 'Note'], [
        ['BKK to Trat flight', 'About 1 hour', 'Then a boat'],
        ['Resort transfer', 'Book with the room', 'The usual Soneva path'],
        ['Public Laem Sok boat', '450 to 600 THB, 30 to 45 minutes', 'Self-transfer only'],
        ['Entry villa', '40,000 to 70,000 THB', 'Confirm if the boat is included'],
        ['Trip.com search', 'Koh Kood, not Bangkok', 'Confirm the boat on the voucher'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'Can you add this to a Phuket week?', a: 'Not as a day trip. Treat Koh Kood as its own two or three nights, or skip it.' },
    ],
  },
  '/resort-living/rayavadee': {
    paragraphs: [
      'Rayavadee is known for a boat-only grove in the Railay cliffs. Use it when the pocket is the stay and you accept being stuck on a storm day. There is no road. You arrive by boat in about 15 minutes from Ao Nang. That is not a bug.',
      'KBV is 30 to 45 minutes to the Ao Nang pier, then the hotel boat. A 2026 combined transfer is often 2,000 to 4,000 THB a person or a private rate on the voucher. Lock it in the Andaman window, November to April. A storm day here is still beautiful and fully stuck.',
      'Pavilions sit in the coconut grove between Railay and Phra Nang. Entry pavilions in a busy dry-season week often sit from about 20,000 to 35,000 THB. Larger pavilions and villas run 40,000 to 80,000 THB and up. Planning bands. Phra Nang beach is the walk. Ao Nang dinners are a boat.',
      'Climbing and longtails are the off-property days. Phi Phi is a morning product from Ao Nang, not from the grove door. If you want the same cliffs with a car, sleep in Ao Nang. If you want a bay villa with a roadless island transfer, Yao Noi is the other Andaman hideaway.',
    ],
    sections: [
      tableSection('board', 'Grove and boat board', ['Type', '2026 planning band', 'Note'], [
        ['Grove pavilion', '20,000 to 35,000 THB', 'Boat only'],
        ['Larger pavilion / villa', '40,000 to 80,000 THB+', 'When the pocket is the week'],
        ['Ao Nang boat', 'About 15 minutes', 'Shared or hotel boat'],
        ['KBV plus pier', '30 to 45 minutes, then the boat', 'Do not land late in monsoon'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'What if the sea is up?', a: 'You stay. That is the trade. Book November to April if you cannot accept a cancelled boat.' },
    ],
  },
  '/resort-living/vie-hotel-bangkok': {
    paragraphs: [
      'VIE Hotel Bangkok is known as the MGallery on Ratchathewi BTS. Stay here if you want a designed city night without a river compound. Ratchathewi puts you on the BTS between Siam and the ARL at Phaya Thai. A 2026 BTS tap from here is 17 to 47 THB.',
      'This is a tower, not a villa. Rooms are city rooms. Entry rates in a busy 2026 week often sit from about 4,000 to 7,000 THB. Suites run 8,000 to 14,000 THB and up. Planning bands. It is the useful upgrade from a generic Sukhumvit tower when you still want the train.',
      'Phaya Thai ARL is one BTS stop plus a walk or a short extra hop depending on your bags. Suvarnabhumi to Phaya Thai is about 30 minutes on the ARL, 45 THB in recent years for the full line. Recheck the ticket machine. DMK is a different airport and a different car.',
      'Siam malls are two BTS stops. The palace is a Grab, 150 to 250 THB in the morning. Soi 11 is a few BTS stops east. Use VIE as a Bangkok night that is nicer than Nana and cheaper than Capella. Two nights is the usual lock before you pick a coast.',
    ],
    sections: [
      tableSection('board', 'City hotel board', ['Type', '2026 planning band', 'Note'], [
        ['Entry room', '4,000 to 7,000 THB', 'Ratchathewi BTS'],
        ['Suite', '8,000 to 14,000 THB+', 'When you want the space'],
        ['BTS tap', '17 to 47 THB', 'Siam, Asok, Phaya Thai'],
        ['ARL from BKK', 'About 30 minutes, about 45 THB', 'Then BTS to Ratchathewi'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'VIE or a Sukhumvit tower?', a: 'VIE if you want ARL access and a designed lobby. Sukhumvit if dinner density is the point.' },
    ],
  },
  '/resort-living/veranda-high-chiang-mai': {
    paragraphs: [
      'Veranda High is known for a hill pool above the valley. Stay here if the view is the point and you will taxi to the Old City. It is an MGallery, not a moat guesthouse. The ride to the Old City is about 20 to 35 minutes. That is the trade.',
      'CNX is 25 to 40 minutes depending on traffic. A 2026 private car is often 700 to 1,300 THB. Nimman is closer than the moat on some routes. You will not walk to dinner. Budget Grab or the hotel car every time you leave.',
      'Rooms face the valley. Entry rooms in a busy cool-season week often sit from about 5,000 to 9,000 THB. Suites run 10,000 to 18,000 THB and up. Planning bands. Cool season is the point. In hot season, confirm the haze before you book a view room as the trip.',
      'Four Seasons Mae Rim is the rice-terrace alternative if the hotel is the whole week and the budget is higher. Old City stays win if you want Wat Phra Singh at 07:00 on foot. Use Veranda High for two or three nights when the pool and the view are why you came.',
    ],
    sections: [
      tableSection('board', 'Hill hotel board', ['Type', '2026 planning band', 'Note'], [
        ['View room', '5,000 to 9,000 THB', 'Hill pool'],
        ['Suite', '10,000 to 18,000 THB+', 'When the view is the stay'],
        ['Old City taxi', '20 to 35 minutes', 'Every wat needs a car'],
        ['CNX car', '25 to 40 minutes, 700 to 1,300 THB', 'Book with the room'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'Hill or moat?', a: 'Hill if the view is the point. Moat if you want to walk to the wats.' },
    ],
  },
  '/resort-living/avista-hideaway-phuket': {
    paragraphs: [
      'Avista Hideaway is known as the MGallery west-coast hill stay. Use it when you want a quieter Andaman week than Patong and Amanpuri is not the budget. Still treat it as a west-coast monsoon property. HKT is about 45 to 75 minutes by car. A 2026 private car is often 1,000 to 1,800 THB.',
      'The hotel sits above the Kamala / west-coast hills. You will need a car for the beach and for dinner. A 2026 Grab down to Kamala is often 150 to 300 THB. Do not boat on arrival day. November to April is the window.',
      'Rooms and pool access suites are the inventory. Entry rates in a busy dry-season week often sit from about 6,000 to 11,000 THB. Larger suites run 12,000 to 20,000 THB and up. Planning bands. Trisara is the northwest Phuket step up if the villa is the week.',
      'Patong is 20 to 30 minutes and the wrong default dinner. Kamala and Surin are the local plates. Old Town is a morning. Beach clubs are a booked daybed, not a walk-in from the hill. See [Phuket beach clubs](/interests/nightlife/phuket-beach-clubs).',
    ],
    sections: [
      tableSection('board', 'Hill stay board', ['Type', '2026 planning band', 'Note'], [
        ['Entry room / suite', '6,000 to 11,000 THB', 'West-coast hill'],
        ['Larger suite', '12,000 to 20,000 THB+', 'When the view is the stay'],
        ['HKT car', '45 to 75 minutes, 1,000 to 1,800 THB', 'Book the car'],
        ['Kamala dinner', '150 to 300 THB Grab', 'You will not walk it'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a tour desk?', a: 'Not on arrival day. Confirm the transfer on the hotel voucher and leave the first afternoon empty.' },
      { q: 'Avista or Amanpuri?', a: 'Amanpuri if the grove is the trip and the rate is fine. Avista if you want the same coast at an MGallery price.' },
    ],
  },
  '/interests/nightlife/koh-samui-beach-clubs': {
    paragraphs: [
      'Samui beach clubs are known for a Gulf afternoon that ends at sunset. Use Nikki Beach if the brand is why you came. Chaweng after dark is a different map. A 2026 daybed is often 2,000 to 4,000 THB before drinks. Book if you want shade. Walk-ins on a Saturday in high season wait.',
      'January to September is the easier sea. October to December can still work on a calm day. Check the sky before you prepay. A booked car back along the hills is safer than a scooter you rented at noon. USM to the usual club belt is 15 to 30 minutes.',
      'Nikki Beach Koh Samui is the named draw: daybeds, a weekend crowd, and a dress code that is more beach than Bangkok. Other rooms open and close. Recheck the page the week you travel. Fisherman Village is the dinner walk after sunset if you sleep in Bophut. Chaweng is the louder night if that is the plan.',
      'Sleep on the same coast as the club. A late scooter from Chaweng to a west-coast villa is how those weeks go wrong. See [Koh Samui](/koh-samui), [Chaweng](/koh-samui/chaweng), and [Bophut and Lamai nightlife](/interests/nightlife/samui-bophut-lamai).',
    ],
    sections: [
      tableSection('rooms', 'Rooms and 2026 spend', ['Room', 'Use', '2026 note'], [
        ['Nikki Beach', 'Named daybed afternoon', '2,000 to 4,000 THB daybed common'],
        ['Bophut village', 'Dinner after sunset', 'Walk if you sleep there'],
        ['Chaweng after dark', 'Louder night', 'Different map from the club'],
        ['Car home', 'Book it', 'Skip the night scooter'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a booking?', a: 'Beach clubs want a daybed or a table if you care about shade. Weekends fill.' },
      { q: 'Day or night?', a: 'Day to sunset. If you want a 01:00 room, that is Chaweng, not a daybed club.' },
    ],
  },
  '/interests/nightlife/sukhumvit-soi-11': {
    paragraphs: [
      'Soi 11 is known for one crafted rum room and a loud tourist strip. Use it if you already sleep at Nana or Asok. Skip it as a citywide plan. A 2026 walk-in beer is cheap. Havana Social is often 350 to 500 THB a drink. Go early or accept a wait.',
      'The soi sits off Sukhumvit between Nana and Asok BTS. After midnight the train is gone. Grab from Soi 11 to Thonglor is often 80 to 160 THB. Do not rent a scooter. The frontage road is a highway.',
      'Havana Social is the crafted room. The rest of the soi is beer, clubs, and people who landed today. That can be fine. Know which you booked. This is not Thonglor and not Charoenkrung. See those pages if you want a dinner-first night or a seated cocktail door.',
      'Sleep a block off the soi if you want rest. Towers that face Soi 11 take the bass until late. Two hours on the soi is enough to know if it is your night. Then Grab home. See [Sukhumvit](/bangkok/sukhumvit) for the hotel strip.',
    ],
    sections: [
      tableSection('rooms', 'What to open', ['Room', 'Use', '2026 note'], [
        ['Havana Social', 'Rum, packed room', '350 to 500 THB a drink; go early'],
        ['The rest of Soi 11', 'Beer and clubs', 'Walk it once'],
        ['Nana BTS', 'Access', 'Siam to Nana is about 28 to 32 THB'],
        ['Grab home', 'After midnight', '80 to 160 THB to Thonglor typical'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a booking?', a: 'For Havana, early is better than a reservation culture. Weekends fill. The rest of the soi is walk-in.' },
      { q: 'Is this the best Bangkok night?', a: 'No. It is the convenient night if you already sleep here. Thonglor and Charoenkrung are the better rooms.' },
    ],
  },
  '/interests/nightlife/phuket-beach-clubs': {
    paragraphs: [
      'Phuket beach clubs are known for afternoon daybeds that become sunset. Use them in the November to April window if the club is the day. A 2026 daybed minimum is often 2,000 to 5,000 THB before drinks. Bring sunscreen and a booked car home. Patong Walking Street is a different product and not listed here as a recommendation.',
      'Catch Beach Club and Cafe del Mar Phuket are the named rooms. They sit on the west coast. HKT plus a car is 45 to 75 minutes depending on the beach. In the wet months, check the sky before you prepay. A cancelled daybed is still a fight.',
      'Sleep on the same coast. Kamala, Surin, and Bang Tao are the usual pairings. A late scooter from Patong to a west-coast hill hotel is the wrong ending. See [Kamala and Surin](/phuket/kamala-and-surin) and [Kamala and Bang Tao nightlife](/interests/nightlife/phuket-kamala-bangtao).',
      'Dress is beach-smart, not Bangkok cocktail. Tables want a minimum. Recheck the page the week you travel. One club day per week is enough. The second day is better as a boat or a beach without a DJ.',
    ],
    sections: [
      tableSection('rooms', 'Named rooms', ['Room', 'Use', '2026 note'], [
        ['Catch Beach Club', 'West-coast daybed', 'Book the table if you want shade'],
        ['Cafe del Mar Phuket', 'Franchise sunset', 'It is what it says'],
        ['Daybed minimum', '2,000 to 5,000 THB', 'Drinks sit on top'],
        ['Patong Walking Street', 'Different product', 'Not this page'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a booking?', a: 'Yes if you care about a daybed. Weekends in December to March fill.' },
      { q: 'Can you do this in July?', a: 'Sometimes. The Andaman is in monsoon. Check the sky and keep the payment refundable.' },
    ],
  },
  '/interests/nightlife/thonglor-ekkamai': {
    paragraphs: [
      'Thonglor is known for dinner first, then bars. Stay on this BTS strip if you want a night that starts with a table, not a soi crawl. BTS Thong Lo and Ekkamai are the rails. A 2026 Grab home after midnight is often 80 to 180 THB. After midnight, Grab is faster than walking Sukhumvit Road.',
      'Rabbit Hole is a serious cocktail room. Find The Locker Room is the joke door with drinks that are not a joke. Bar Us is later and louder. Mahaniyom is dinner that becomes a night. A 2026 crafted drink is often 400 to 650 THB. Reservations help on Friday and Saturday.',
      'Eat first. Thonglor restaurants fill at 19:30. The bars fill after 21:00. This is not Soi 11. It is not Charoenkrung. You can do one room here and skip a second neighborhood the same night. A late hop to Soi Nana is a 20 to 35 minute Grab.',
      'Sleep on Thong Lo or Ekkamai if this is more than one night. Phrom Phong is one stop west and still works. Nana is a cheaper sleep and a longer late Grab. See [Sukhumvit](/bangkok/sukhumvit) and [Phrom Phong and Thong Lo](/bangkok/phrom-phong-and-thong-lo).',
    ],
    sections: [
      tableSection('rooms', 'Rooms', ['Room', 'Use', '2026 note'], [
        ['Rabbit Hole', 'Cocktail room', 'Reserve if the week is busy'],
        ['Find The Locker Room', 'Hidden door, serious drinks', '400 to 650 THB typical'],
        ['Bar Us', 'Later, louder', 'Still Thonglor'],
        ['Mahaniyom', 'Dinner that becomes a night', 'Useful for mixed groups'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a booking?', a: 'For the small cocktail rooms, a note or a walk-in early is enough most weeknights. Weekends fill.' },
      { q: 'Thonglor or Soi 11?', a: 'Thonglor if you want dinner and a door. Soi 11 if you already sleep at Nana and want a loud walk.' },
    ],
  },
  '/interests/nightlife/charoenkrung-soi-nana': {
    paragraphs: [
      'Charoenkrung is known for seated cocktail rooms, not a Walking Street crawl. Use it after a riverside dinner if you want a door and a bartender. Chinatown Soi Nana is a small soi of cocktail bars, not Nana on Sukhumvit. A 2026 crafted drink is often 400 to 650 THB.',
      'BKK Social Club at Four Seasons: jackets are not required, standards are. Go earlier than you think. Bamboo Bar at the Mandarin Oriental is the historic room. Book it. Teens of Thailand and Asia Today are the small Soi Nana rooms. Tropic City is tiki and a louder crowd. Still Charoenkrung, not Walking Street.',
      'Stay riverside or on Charoenkrung. Grab to Thonglor after if you insist on a second neighborhood the same night. A 2026 late Grab across that span is often 120 to 220 THB. The river hotels, Capella and The Siam, sit on [resort living](/interests/resort-living). Yaowarat dinner is next door. See [Chinatown](/bangkok/chinatown-yaowarat).',
      'This is not a crawl list. Pick one room. Two if the first closes. Dress the room. Do not rent a scooter at 1:00. The old international road still has trucks.',
    ],
    sections: [
      tableSection('rooms', 'Rooms', ['Room', 'Use', '2026 note'], [
        ['BKK Social Club', 'Four Seasons, earlier', 'Standards, not a club'],
        ['Bamboo Bar', 'Mandarin Oriental', 'Book the room'],
        ['Teens of Thailand', 'Soi Nana, small door', '400 to 650 THB drinks'],
        ['Asia Today', 'Soi Nana, later', 'Tighter room'],
        ['Tropic City', 'Tiki, louder', 'Still not Walking Street'],
      ]),
    ],
    faqs: [
      { q: 'Do you need a booking?', a: 'For Bamboo Bar and the small Soi Nana rooms, yes on weekends. Weeknights can be a walk-in early.' },
      { q: 'Soi Nana here or Sukhumvit Soi 11?', a: 'This Soi Nana is Chinatown cocktails. Sukhumvit Soi 11 is the loud tourist strip. They share a number, not a mood.' },
    ],
  },
};



