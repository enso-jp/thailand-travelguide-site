import type { Page, Portrait } from './content';

type HubLink = { title: string; href: string; line: string; photo: string };

const HUB_CHILDREN: Record<string, HubLink[]> = {
  '/bangkok': [
    { title: 'Where to stay', href: '/bangkok/where-to-stay', line: 'BTS, river, or Old City.', photo: '/photos/sukhumvit.jpg' },
    { title: 'Getting around', href: '/bangkok/getting-around', line: 'BTS, MRT, ARL, boats.', photo: '/photos/bts.jpg' },
    { title: 'Best time to visit', href: '/bangkok/best-time-to-visit', line: 'Cool dry November to February.', photo: '/photos/bangkok.jpg' },
    { title: 'Day trips', href: '/bangkok/day-trips', line: 'Ayutthaya, Kwai, markets.', photo: '/photos/ayutthaya.jpg' },
    { title: 'Top attractions', href: '/bangkok/top-attractions', line: 'Palace 500 THB, Chatuchak weekends.', photo: '/photos/grand-palace.jpg' },
    { title: 'Nightlife districts', href: '/bangkok/nightlife-districts', line: 'One district per night.', photo: '/photos/nightlife.jpg' },
    { title: 'Khao San', href: '/bangkok/khao-san', line: 'Backpacker street, not a first BTS hotel.', photo: '/photos/old-city.jpg' },
    { title: 'Chatuchak', href: '/bangkok/chatuchak', line: 'Saturday and Sunday only.', photo: '/photos/chatuchak.jpg' },
  ],
  '/phuket': [
    { title: 'Where to stay', href: '/phuket/where-to-stay', line: 'West-coast sand, not one town.', photo: '/photos/kata-and-karon.jpg' },
    { title: 'Getting around', href: '/phuket/getting-around', line: 'Smart Bus 100 THB or a car.', photo: '/photos/phuket.jpg' },
    { title: 'Best time to visit', href: '/phuket/best-time-to-visit', line: 'November to April.', photo: '/photos/kamala-and-surin.jpg' },
    { title: 'Day trips', href: '/phuket/day-trips', line: 'Phi Phi or Phang Nga, not both rushed.', photo: '/photos/phi-phi.jpg' },
    { title: 'Patong', href: '/phuket/patong', line: 'Bangla night, not a four-night base.', photo: '/photos/patong-night.jpg' },
    { title: 'Old Town', href: '/phuket/old-town', line: 'A morning of sino-portuguese streets.', photo: '/photos/phuket.jpg' },
  ],
  '/krabi': [
    { title: 'Ao Nang', href: '/krabi/ao-nang', line: 'Mainland beach and longtail desks.', photo: '/photos/krabi.jpg' },
    { title: 'Railay', href: '/krabi/railay', line: 'Cliff pocket, boat only.', photo: '/photos/railay.jpg' },
    { title: 'Where to stay', href: '/krabi/where-to-stay', line: 'Ao Nang, Railay, or Tubkaek.', photo: '/photos/resort-rayavadee.jpg' },
    { title: 'Day trips', href: '/krabi/day-trips', line: 'Phi Phi, Hong, Tiger Cave.', photo: '/photos/tiger-cave.jpg' },
    { title: 'Koh Lanta', href: '/koh-lanta', line: 'West-coast island south of Krabi.', photo: '/photos/koh-lanta.jpg' },
    { title: 'Koh Phi Phi', href: '/koh-phi-phi', line: 'Maya Bay park and Tonsai village.', photo: '/photos/phi-phi.jpg' },
  ],
  '/koh-samui': [
    { title: 'Where to stay', href: '/koh-samui/where-to-stay', line: 'Chaweng, Lamai, or Bophut.', photo: '/photos/chaweng.jpg' },
    { title: 'Getting around', href: '/koh-samui/getting-around', line: 'USM cars and one island taxi.', photo: '/photos/koh-samui.jpg' },
    { title: 'Best time to visit', href: '/koh-samui/best-time-to-visit', line: 'January to September.', photo: '/photos/lamai.jpg' },
    { title: 'Bophut', href: '/koh-samui/bophut', line: "Fisherman's Village nights.", photo: '/photos/lamai.jpg' },
    { title: 'Ang Thong', href: '/koh-samui/ang-thong-marine-park', line: '300 THB, no public ferry.', photo: '/photos/ang-thong.jpg' },
    { title: 'Koh Phangan', href: '/koh-phangan', line: 'Lomprayah about 30 minutes.', photo: '/photos/koh-phangan.jpg' },
  ],
  '/chiang-mai': [
    { title: 'Where to stay', href: '/chiang-mai/where-to-stay', line: 'Old City, Nimman, or Mae Rim.', photo: '/photos/chiang-mai-old-city.jpg' },
    { title: 'Getting around', href: '/chiang-mai/getting-around', line: 'Grab, songthaew, no first-week scooter.', photo: '/photos/chiang-mai.jpg' },
    { title: 'Best time to visit', href: '/chiang-mai/best-time-to-visit', line: 'Cool Nov-Feb; haze Mar-Apr.', photo: '/photos/northern.jpg' },
    { title: 'Day trips', href: '/chiang-mai/day-trips', line: 'Doi Suthep, Inthanon, or one sanctuary.', photo: '/photos/doi-suthep.jpg' },
    { title: 'Night markets', href: '/chiang-mai/night-markets', line: 'Sunday moat, Saturday Wua Lai.', photo: '/photos/night-market-cm.jpg' },
    { title: 'Mae Rim', href: '/chiang-mai/mae-rim', line: 'Rice-terrace resort belt.', photo: '/photos/resort-four-seasons-chiang-mai.jpg' },
  ],
  '/koh-phangan': [
    { title: 'Where to stay', href: '/koh-phangan/where-to-stay', line: 'West coast or Thong Nai Pan, not default Haad Rin.', photo: '/photos/koh-phangan.jpg' },
    { title: 'Haad Rin', href: '/koh-phangan/haad-rin', line: 'Haad Rin only if you came for Full Moon.', photo: '/photos/chaweng-night.jpg' },
    { title: 'Best time to visit', href: '/koh-phangan/best-time-to-visit', line: 'January to September.', photo: '/photos/ferry-gulf.jpg' },
  ],
  '/koh-tao': [
    { title: 'Where to stay', href: '/koh-tao/where-to-stay', line: 'Sairee, Mae Haad, or Chalok.', photo: '/photos/koh-tao.jpg' },
    { title: 'Dive sites', href: '/koh-tao/dive-sites', line: 'Open Water island, 20 THB pier fee.', photo: '/photos/koh-tao.jpg' },
    { title: 'Best time to visit', href: '/koh-tao/best-time-to-visit', line: 'January to September.', photo: '/photos/ferry-gulf.jpg' },
  ],
  '/koh-lanta': [
    { title: 'Where to stay', href: '/koh-lanta/where-to-stay', line: 'Klong Dao to the south beaches.', photo: '/photos/koh-lanta.jpg' },
    { title: 'Beaches', href: '/koh-lanta/beaches', line: 'West-coast sand from Saladan south.', photo: '/photos/koh-lanta.jpg' },
    { title: 'Best time to visit', href: '/koh-lanta/best-time-to-visit', line: 'November to April.', photo: '/photos/longtail-andaman.jpg' },
  ],
  '/koh-phi-phi': [
    { title: 'Where to stay', href: '/koh-phi-phi/where-to-stay', line: 'Long Beach if you overnight.', photo: '/photos/long-beach-pp.jpg' },
    { title: 'Maya Bay', href: '/koh-phi-phi/maya-bay', line: '400 THB park, no swim.', photo: '/photos/phi-phi.jpg' },
    { title: 'Getting around', href: '/koh-phi-phi/getting-around', line: 'Longtails and walks, no cars.', photo: '/photos/tonsai.jpg' },
  ],
  '/pai': [
    { title: 'Where to stay', href: '/pai/where-to-stay', line: 'Town or a canyon-side hut.', photo: '/photos/pai.jpg' },
    { title: 'Getting around', href: '/pai/getting-around', line: 'The 1095 van, not a first scooter.', photo: '/photos/northern.jpg' },
    { title: 'Best time to visit', href: '/pai/best-time-to-visit', line: 'Cool Nov-Feb; haze Mar-Apr.', photo: '/photos/pai.jpg' },
    { title: 'Day trips', href: '/pai/day-trips', line: 'Canyon, hot springs, one loop day.', photo: '/photos/doi-suthep.jpg' },
    { title: 'Top attractions', href: '/pai/top-attractions', line: 'What is worth the 762 bends.', photo: '/photos/pai.jpg' },
  ],
  '/pattaya': [
    { title: 'Where to stay', href: '/pattaya/where-to-stay', line: 'Jomtien or Wongamat, not Walking Street by default.', photo: '/photos/jomtien.jpg' },
    { title: 'Jomtien', href: '/pattaya/jomtien', line: 'The swim sand.', photo: '/photos/jomtien.jpg' },
    { title: 'Koh Larn', href: '/pattaya/koh-larn', line: 'Ferry 30 to 40 THB, about 45 minutes.', photo: '/photos/koh-larn.jpg' },
    { title: 'Best time to visit', href: '/pattaya/best-time-to-visit', line: 'East gulf, not an Andaman substitute.', photo: '/photos/pattaya.jpg' },
    { title: 'Getting around', href: '/pattaya/getting-around', line: 'Ekkamai bus or a booked car.', photo: '/photos/wongamat.jpg' },
  ],
  '/hua-hin': [
    { title: 'Where to stay', href: '/hua-hin/where-to-stay', line: 'Town beach or Khao Takiab.', photo: '/photos/hua-hin.jpg' },
    { title: 'Best time to visit', href: '/hua-hin/best-time-to-visit', line: 'Gulf weekend town, drier Nov-Feb.', photo: '/photos/hua-hin.jpg' },
    { title: 'Day trips', href: '/hua-hin/day-trips', line: 'Sam Roi Yot and Phraya Nakhon.', photo: '/photos/sam-roi-yot.jpg' },
    { title: 'Getting around', href: '/hua-hin/getting-around', line: 'Southern train about 4 hours.', photo: '/photos/bts.jpg' },
    { title: 'Top attractions', href: '/hua-hin/top-attractions', line: 'Palace grounds and the hill temple.', photo: '/photos/hua-hin.jpg' },
  ],
  '/kanchanaburi': [
    { title: 'Where to stay', href: '/kanchanaburi/where-to-stay', line: 'River raft or town, two nights if Erawan.', photo: '/photos/kanchanaburi.jpg' },
    { title: 'Getting around', href: '/kanchanaburi/getting-around', line: 'Thonburi train, not Aphiwat.', photo: '/photos/kanchanaburi.jpg' },
    { title: 'Best time to visit', href: '/kanchanaburi/best-time-to-visit', line: 'Falls run better after rain.', photo: '/photos/erawan.jpg' },
    { title: 'Day trips', href: '/kanchanaburi/day-trips', line: 'Erawan is a full day.', photo: '/photos/erawan.jpg' },
    { title: 'River Kwai', href: '/kanchanaburi/river-kwai', line: 'The bridge and the line.', photo: '/photos/kanchanaburi.jpg' },
  ],
  '/khao-lak': [
    { title: 'Where to stay', href: '/khao-lak/where-to-stay', line: 'Bang Niang or a quieter beach.', photo: '/photos/khao-lak.jpg' },
    { title: 'Best time to visit', href: '/khao-lak/best-time-to-visit', line: 'Nov-Apr; Similan mid-Oct to mid-May.', photo: '/photos/khao-lak.jpg' },
    { title: 'Getting around', href: '/khao-lak/getting-around', line: 'HKT then 70 to 90 minutes north.', photo: '/photos/longtail-andaman.jpg' },
    { title: 'Day trips', href: '/khao-lak/day-trips', line: 'Similan from Thap Lamu.', photo: '/photos/khao-lak.jpg' },
    { title: 'Bang Niang', href: '/khao-lak/bang-niang', line: 'The useful hotel strip.', photo: '/photos/khao-lak.jpg' },
  ],
  '/sukhothai': [
    { title: 'Where to stay', href: '/sukhothai/where-to-stay', line: 'Old town by the park gate.', photo: '/photos/sukhothai.jpg' },
    { title: 'Historical park', href: '/sukhothai/historical-park', line: 'Central zone 200 THB, bicycle circuit.', photo: '/photos/sukhothai.jpg' },
    { title: 'Best time to visit', href: '/sukhothai/best-time-to-visit', line: 'Cooler Nov-Feb for dawn bikes.', photo: '/photos/northern.jpg' },
    { title: 'Getting around', href: '/sukhothai/getting-around', line: 'THS first; PHS is the one-hour fallback.', photo: '/photos/sukhothai.jpg' },
    { title: 'Day trips', href: '/sukhothai/day-trips', line: 'Si Satchanalai if you have a second day.', photo: '/photos/sukhothai.jpg' },
  ],
  '/ayutthaya': [
    { title: 'Where to stay', href: '/ayutthaya/where-to-stay', line: 'Overnight only for dawn.', photo: '/photos/ayutthaya.jpg' },
    { title: 'Historical park', href: '/ayutthaya/historical-park', line: '80 THB per site or 300 THB combo.', photo: '/photos/wat-mahathat-ayu.jpg' },
    { title: 'From Bangkok', href: '/ayutthaya/from-bangkok', line: 'About one hour by train.', photo: '/photos/ayutthaya.jpg' },
    { title: 'Getting around', href: '/ayutthaya/getting-around', line: 'Bicycle or a wat-hopping tuk-tuk.', photo: '/photos/wat-phra-si-sanphet.jpg' },
    { title: 'Best time to visit', href: '/ayutthaya/best-time-to-visit', line: 'Dawn in the cool months.', photo: '/photos/bang-pa-in.jpg' },
  ],
  '/chiang-rai': [
    { title: 'Where to stay', href: '/chiang-rai/where-to-stay', line: 'Town if dawn at the White Temple.', photo: '/photos/chiang-rai.jpg' },
    { title: 'White Temple day', href: '/chiang-rai/white-temple-day', line: '200 THB foreigners since 1 January 2026.', photo: '/photos/chiang-rai.jpg' },
    { title: 'Best time to visit', href: '/chiang-rai/best-time-to-visit', line: 'Cool Nov-Feb; haze Mar-Apr.', photo: '/photos/northern.jpg' },
    { title: 'Getting around', href: '/chiang-rai/getting-around', line: 'Green Bus about 3.5 hours from Chiang Mai.', photo: '/photos/blue-temple.jpg' },
    { title: 'Golden Triangle', href: '/chiang-rai/golden-triangle', line: 'A Mekong viewpoint day, not a first temple.', photo: '/photos/baan-dam.jpg' },
  ],
  '/destinations': [
    { title: 'Pattaya', href: '/pattaya', line: 'East gulf weekend, not a first Andaman add.', photo: '/photos/pattaya.jpg' },
    { title: 'Koh Phi Phi', href: '/koh-phi-phi', line: 'Maya Bay park and a loud village.', photo: '/photos/phi-phi.jpg' },
  ],
};

export function applyWave22Hubs(page: Page, paths: Set<string>): Page {
  const kids = HUB_CHILDREN[page.path];
  if (!kids?.length) return page;
  if (page.sections?.some((section) => section.id === 'subguides-2026')) return page;
  const live = kids.filter((row) => paths.has(row.href) && row.href !== page.path);
  if (!live.length) return page;
  const bullets = live.map((row) => `**[${row.title}](${row.href}):** ${row.line}`);
  const portraits: Portrait[] = [...(page.portraits || [])];
  for (const row of live) {
    if (portraits.some((item) => item.href === row.href)) continue;
    portraits.push({ title: row.title, href: row.href, photo: row.photo });
  }
  return {
    ...page,
    portraits,
    sections: [
      ...(page.sections || []),
      { id: 'subguides-2026', title: 'Area guides and planning pages', bullets },
    ],
  };
}
