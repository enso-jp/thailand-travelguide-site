import type { Page } from './content';
import { WAVE22_TITLE_CORE } from './wave22-bangkok';
import { WAVE22_SECONDARY_TITLE_CORE } from './wave22-secondary';
import { WAVE23_TITLE_CORE } from './wave23-itineraries';
import { DISH_TITLE_CORE } from './dish-pages';
import { WAVE22_SOUTH_TITLE_CORE } from './wave22-south';
import { WAVE22_GULF_NORTH_TITLE_CORE } from './wave22-gulf-north';

const TITLE_SUFFIX = ' | Thailand Guide';
const TITLE_MIN = 45;
const TITLE_MAX = 60;
const DESC_MIN = 130;
const DESC_MAX = 155;

const TITLE_CORE: Record<string, string> = {
  '/': 'Thailand Travel Guide: Regions, Routes, Stays',
  '/about': 'About Thailand TravelGuide and Beyond Network',
  '/about/ratings': 'Editorial Standards and 1-to-5 Dot Ratings',
  '/attractions': 'Thailand Attractions: Temples, Parks, and Bays',
  '/attractions/chatuchak-weekend-market': 'Chatuchak Weekend Market: Hours, Sections, Rail',
  '/attractions/cheow-lan-lake-khao-sok': 'Cheow Lan Lake, Khao Sok: Park Fee and Longtail',
  '/attractions/chiang-mai-ethical-elephant-sanctuaries': 'Chiang Mai Ethical Elephant Sanctuaries Guide',
  '/attractions/damnoen-saduak-and-amphawa-floating-markets': 'Damnoen Saduak and Amphawa Floating Markets',
  '/attractions/grand-palace-and-wat-phra-kaew': 'Grand Palace and Wat Phra Kaew: Tickets, Hours',
  '/attractions/muay-thai-stadiums-rajadamnern-and-lumpinee': 'Rajadamnern and Lumpinee Muay Thai Fight Nights',
  '/attractions/phang-nga-bay-and-james-bond-island': 'Phang Nga Bay and James Bond Island Tickets',
  '/attractions/phi-phi-islands-and-maya-bay': 'Phi Phi Islands and Maya Bay: Park Fee, Hours',
  '/attractions/railay-beach-and-phra-nang-cave': 'Railay Beach and Phra Nang Cave: Boats, Climb',
  '/attractions/sanctuary-of-truth-pattaya': 'Sanctuary of Truth, Pattaya: Tickets and Hours',
  '/attractions/wat-arun': 'Wat Arun: Porcelain Prang Tickets and Ferry',
  '/attractions/wat-pho': 'Wat Pho: Reclining Buddha Tickets and Hours',
  '/attractions/wat-phra-that-doi-suthep': 'Wat Phra That Doi Suthep: Tickets and Funicular',
  '/attractions/white-temple-wat-rong-khun-and-blue-temple': 'White Temple, Blue Temple, and Baan Dam Tickets',
  '/ayutthaya': 'Ayutthaya Travel Guide: Ruin Day from Bangkok',
  '/bangkok': 'Bangkok Guide: BTS, Temples, First-Night Stays',
  '/bangkok/ari': 'Ari, Bangkok: Cafes, Isan Rooms, Quiet Streets',
  '/bangkok/chinatown-yaowarat': 'Yaowarat Access and Where to Sleep in Bangkok',
  '/bangkok/old-city-rattanakosin': 'Old City and Rattanakosin Stays, Bangkok',
  '/bangkok/phrom-phong-and-thong-lo': 'Phrom Phong and Thong Lo Stays in Bangkok',
  '/bangkok/rattanakosin': 'Rattanakosin Tickets: Grand Palace, Wat Pho',
  '/bangkok/riverside-charoenkrung': 'Riverside and Charoenkrung Stays, Bangkok',
  '/bangkok/siam-silom': 'Siam and Silom Stays and Transit, Bangkok',
  '/bangkok/silom-and-sathorn': 'Silom and Sathorn Stays on Bangkok Embassy Ridge',
  '/bangkok/silom-sathon': 'Silom and Sathon Park and Rail, Bangkok',
  '/bangkok/sukhumvit': 'Sukhumvit Sois: Nana to Ekkamai, Bangkok',
  '/bangkok/sukhumvit-thonglor': 'Sukhumvit and Thonglor Stays in Bangkok',
  '/chiang-mai': 'Chiang Mai Guide: Old City Wats and Nimman',
  '/chiang-mai/doi-inthanon': 'Doi Inthanon, Chiang Mai: Peak, Trail, Pagodas',
  '/chiang-mai/nimmanhaemin': 'Nimmanhaemin, Chiang Mai: Cafes and Stays',
  '/chiang-mai/old-city': 'Chiang Mai Old City: Wats and Walking Streets',
  '/chiang-rai': 'Chiang Rai Travel Guide: White Temple and Town',
  '/destinations': 'Thailand Destinations: Cities, Islands, Parks',
  '/destinations/central-and-east': 'Central and East Thailand: Plains to Trat',
  '/destinations/northern-thailand': 'Northern Thailand: Chiang Mai, Pai, Chiang Rai',
  '/get-there': 'Thailand Routes: Flights, Sleepers, and Ferries',
  '/get-there/bangkok-to-ayutthaya': 'Bangkok to Ayutthaya by Train: Times and Stations',
  '/get-there/bangkok-to-chiang-mai': 'Bangkok to Chiang Mai: 70-Min Flight vs Sleeper',
  '/get-there/bangkok-to-kanchanaburi': 'Bangkok to Kanchanaburi: Thonburi Train or Van',
  '/get-there/bangkok-to-koh-phangan': 'Bangkok to Koh Phangan: Samui Flight or Sleeper',
  '/get-there/bangkok-to-koh-samui': 'Bangkok to Koh Samui: Fly to USM or Ferry via Donsak',
  '/get-there/bangkok-to-koh-tao': 'Bangkok to Koh Tao: Ferry via Samui or Chumphon',
  '/get-there/bangkok-to-krabi': 'Bangkok to Krabi: 75-Min KBV Flight plus Cars',
  '/get-there/bangkok-to-phuket': 'Bangkok to Phuket: 80-Min Flight and Airfares',
  '/get-there/chiang-mai-to-chiang-rai': 'Chiang Mai to Chiang Rai: Green Bus, 3.5 Hours',
  '/get-there/chiang-mai-to-pai': 'Chiang Mai to Pai: Minivan Times and Fares on 1095',
  '/get-there/krabi-to-koh-lanta': 'Krabi to Koh Lanta: Saladan Boat or Car Ferry',
  '/get-there/phuket-to-khao-sok': 'Phuket to Khao Sok: Three-Hour Van to the Lake',
  '/get-there/phuket-to-koh-samui': 'Phuket to Koh Samui: 55-Min Flight or Van and Ferry',
  '/get-there/phuket-to-krabi-phi-phi': 'Phuket to Koh Phi Phi and Krabi: Morning Boats',
  '/get-there/surat-thani-to-khao-sok': 'Surat Thani to Khao Sok: Village Van or Lake Pier',
  '/hua-hin': 'Hua Hin Travel Guide: Royal Gulf Train Beach Town',
  '/interests': 'Thailand Travel Interests: Beaches to Temples',
  '/interests/beaches-and-island-hopping': 'Thailand Beaches and Island Hopping by Season',
  '/interests/diving-and-snorkeling': 'Scuba Diving and Snorkeling in Thailand',
  '/interests/family-travel-with-kids': 'Thailand with Kids: Shallow Beaches and Slow Days',
  '/interests/festivals-songkran-and-loy-krathong': 'Thailand Festivals: Songkran, Loy Krathong, Yi Peng',
  '/interests/honeymoon-and-couples': 'Thailand Honeymoon Guide: River, Hills, Villas',
  '/interests/markets-and-shopping': 'Thailand Night Markets, Weekend Markets, Malls',
  '/interests/muay-thai-and-fitness-camps': 'Muay Thai Training, Fight Nights, and Camps',
  '/interests/nightlife': 'Thailand Nightlife: Bangkok Rooftops and Clubs',
  '/interests/nightlife/ari-pradipat': 'Ari and Pradipat: Low-Rise Bangkok Bar Village',
  '/interests/nightlife/charoenkrung-soi-nana': 'Charoenkrung and Chinatown Soi Nana Bars',
  '/interests/nightlife/koh-samui-beach-clubs': 'Koh Samui Beach Clubs: Nikki Beach and Sunset',
  '/interests/nightlife/phuket-beach-clubs': 'Phuket Beach Clubs: Catch and Cafe del Mar',
  '/interests/nightlife/phuket-kamala-bangtao': 'Phuket Kamala and Bang Tao Beach Club Addresses',
  '/interests/nightlife/samui-bophut-lamai': 'Koh Samui Bophut and Lamai Nights Away From Chaweng',
  '/interests/nightlife/silom-sathorn': 'Silom and Sathorn Nightlife: Rooftops and Bars',
  '/interests/nightlife/sukhumvit-soi-11': 'Sukhumvit Soi 11: Havana Social and the Strip',
  '/interests/nightlife/thonglor-ekkamai': 'Thonglor and Ekkamai: Dinner Then Bar Grid',
  '/interests/resort-living': 'Resort Living in Thailand: Named Luxury Stays',
  '/interests/solo-and-first-time-travel': 'Solo and First-Time Travel in Thailand',
  '/interests/temples-and-history': 'Thailand Temples, Ruins, and Historical Parks',
  '/interests/thai-massage-and-spas': 'Thai Massage, Day Spas, and Onsen Guide',
  '/itineraries': 'Thailand Itineraries: 3 Days to 3 Weeks',
  '/itineraries/10-days-bangkok-khao-sok-krabi': '10 Days in Bangkok, Khao Sok, and Krabi',
  '/itineraries/10-days-classic-thailand': '10-Day Thailand Itinerary: North Then One Beach',
  '/itineraries/10-days-gulf-islands-samui-phangan-tao': '10-Day Gulf Islands: Samui, Phangan, Tao',
  '/itineraries/2-weeks-andaman-island-hopping': '2-Week Andaman Island Hop: Phuket to Lipe',
  '/itineraries/2-weeks-thailand-honeymoon': '2-Week Thailand Honeymoon: River, Hills, Villas',
  '/itineraries/2-weeks-thailand-with-kids': '2 Weeks in Thailand with Kids: Slow Family Route',
  '/itineraries/3-days-bangkok-stopover': '3 Days in Bangkok: First-Timer Stopover Route',
  '/itineraries/3-weeks-grand-thailand': '3 Weeks in Thailand: Grand North-to-South Route',
  '/itineraries/5-days-bangkok-ayutthaya-kanchanaburi': '5 Days Bangkok, Ayutthaya, and Kanchanaburi',
  '/itineraries/5-days-chiang-mai-and-chiang-rai': '5 Days in Chiang Mai and Chiang Rai',
  '/itineraries/7-days-koh-samui-and-koh-phangan': '7 Days in Koh Samui and Koh Phangan',
  '/itineraries/7-days-northern-thailand-loop': '7-Day Northern Thailand Loop: Temples and Ridges',
  '/itineraries/7-days-phuket-krabi-phi-phi': '7 Days in Phuket, Krabi, and Phi Phi',
  '/itineraries/best-14-days': '14-Day Thailand Itinerary: Bangkok to One Coast',
  '/itineraries/first-week-7-days': '7-Day Thailand Itinerary: Bangkok Plus One Fork',
  '/itineraries/south-islands-10-days': '10-Day South Thailand: Andaman vs Gulf Coasts',
  '/kanchanaburi': 'Kanchanaburi Travel Guide: River Kwai and Falls',
  '/kanchanaburi/erawan-and-sai-yok': 'Erawan and Sai Yok Falls Days from Kanchanaburi',
  '/khao-lak': 'Khao Lak Travel Guide: Andaman and Similans',
  '/khao-lak/similan-and-surin-islands': 'Similan and Surin Islands from Khao Lak',
  '/khao-sok': 'Khao Sok Travel Guide: Rainforest and Lake',
  '/khao-yai': 'Khao Yai Travel Guide: Park Fee and Pak Chong',
  '/koh-chang': 'Koh Chang Travel Guide: West-Coast Beaches',
  '/koh-chang-and-koh-kood': 'Koh Chang and Koh Kood: Trat Island Pair',
  '/koh-kood': 'Koh Kood Travel Guide: Quiet Trat Island Stays',
  '/koh-lanta': 'Koh Lanta Travel Guide: West-Coast Beaches',
  '/koh-lipe': 'Koh Lipe Travel Guide: Walking Island Beaches',
  '/koh-phangan': 'Koh Phangan Travel Guide: Bays vs Full Moon',
  '/koh-phi-phi': 'Koh Phi Phi Travel Guide: Village and Maya Bay',
  '/koh-samui': 'Koh Samui Guide: USM Airport and Chaweng',
  '/koh-samui/ang-thong-marine-park': 'Ang Thong Marine Park from Koh Samui',
  '/koh-samui/chaweng': 'Chaweng, Koh Samui: East-Coast Sand and Dining',
  '/koh-samui/lamai': 'Lamai, Koh Samui: Second Beach and Walking Street',
  '/koh-tao': 'Koh Tao Travel Guide: Dive Courses and Sairee',
  '/krabi': 'Krabi Guide: Ao Nang, Railay, and KBV Flights',
  '/pai': 'Pai and the Mae Hong Son Loop Travel Guide',
  '/pattaya': 'Pattaya Travel Guide: Jomtien, Larn, Truth Hall',
  '/phuket': 'Phuket Guide: West Coast Beaches and HKT',
  '/phuket/kamala-and-surin': 'Kamala and Surin, Phuket: Quiet West-Coast Bays',
  '/phuket/kata-and-karon': 'Kata and Karon, Phuket: Swim Bays and Surf',
  '/phuket/rawai-and-nai-harn': 'Rawai and Nai Harn, Phuket: Far-South Peninsula',
  '/plan': 'Plan a Thailand Trip: Visas, Season, and Transit',
  '/plan/domestic-flights-and-baggage': 'Thailand Domestic Flights and Cabin Bag Limits',
  '/plan/esim-and-sim-cards': 'Thailand eSIM and SIM Cards: AIS vs True-dtac',
  '/plan/grab-and-bts': 'Grab vs Bolt Thailand and Bangkok BTS Guide',
  '/plan/money-atms-and-promptpay': 'Thailand Money Guide: ATM Fees, Cash, PromptPay',
  '/plan/monsoon-and-burn-season': 'Thailand Monsoon and Burn Season by Coast',
  '/plan/scooters-and-road-rules': 'Thailand Scooters and Road Rules: Licence Facts',
  '/plan/songkran-and-public-holidays': 'Songkran and Thailand Public Holidays Calendar',
  '/plan/trains-and-ferries': 'Thailand Trains and Ferries: Sleepers and Boats',
  '/plan/visas-and-tdac': 'Thailand Visa and TDAC 2026: 30-Day Visa-Free',
  '/plan/when-to-go': 'When to Visit Thailand: Andaman vs Gulf Season',
  '/privacy': 'Privacy Policy, Analytics, and Affiliate Notes',
  '/resort-living/137-pillars-house': '137 Pillars House Chiang Mai: Wat Gate Teak',
  '/resort-living/amanpuri': 'Amanpuri Phuket: Private Cove Pavilion Resort',
  '/resort-living/anantara-chiang-mai': 'Anantara Chiang Mai: Ping River Town Resort',
  '/resort-living/avista-hideaway-phuket': 'Avista Hideaway Phuket: West-Coast MGallery',
  '/resort-living/capella-bangkok': 'Capella Bangkok: Chao Phraya River Hotel',
  '/resort-living/four-seasons-bangkok': 'Four Seasons Bangkok at Chao Phraya River',
  '/resort-living/four-seasons-chiang-mai': 'Four Seasons Chiang Mai: Mae Rim Rice Terraces',
  '/resort-living/four-seasons-koh-samui': 'Four Seasons Koh Samui: Northwest Coast Villas',
  '/resort-living/mandarin-oriental-bangkok': 'Mandarin Oriental Bangkok: Historic River Hotel',
  '/resort-living/phulay-bay': 'Phulay Bay Krabi: Ritz-Carlton Reserve Beach Stay',
  '/resort-living/rayavadee': 'Rayavadee Krabi: Boat-Only Railay Grove Resort',
  '/resort-living/ritz-carlton-koh-samui': 'The Ritz-Carlton Koh Samui: North-Coast Bay',
  '/resort-living/rosewood-bangkok': 'Rosewood Bangkok: Ploenchit Tower Luxury Stay',
  '/resort-living/six-senses-samui': 'Six Senses Samui: Bophut Headland Villas',
  '/resort-living/six-senses-yao-noi': 'Six Senses Yao Noi: Phang Nga Bay Hill Villas',
  '/resort-living/soneva-kiri': 'Soneva Kiri Koh Kood: Private-Island Style Stay',
  '/resort-living/the-siam': 'The Siam Bangkok: Dusit River Compound',
  '/resort-living/trisara-phuket': 'Trisara Phuket: Guest-Only North-West Beach',
  '/resort-living/veranda-high-chiang-mai': 'Veranda High Chiang Mai: MGallery Hill Pool',
  '/resort-living/vie-hotel-bangkok': 'VIE Hotel Bangkok: MGallery at Ratchathewi',
  '/search': 'Search Thailand Travel Guide Pages and Routes',
  '/sukhothai': 'Sukhothai Travel Guide: Dawn Bicycle in the Park',
  '/thai-food': 'Thai Food Guide: Street Stalls and Regional Plates',
  '/thai-food/bangkok': 'Bangkok Food Guide: Rail Stalls and Queues',
  '/thai-food/bangkok-and-chiang-mai-coffee-guide': 'Bangkok and Chiang Mai Specialty Coffee Guide',
  '/thai-food/bangkok-bib-gourmand': 'Bangkok Michelin Bib Gourmand Rooms and Hours',
  '/thai-food/bangkok-rooftop-bars-and-river-dining': 'Bangkok Rooftop Bars and Chao Phraya Dining',
  '/thai-food/bangkok-street-food': 'Bangkok Street Food: Stalls, Queues, and Rail',
  '/thai-food/banthat-thong-road-food-strip': 'Banthat Thong Road Food Strip: Night Stalls',
  '/thai-food/chiang-mai': 'Chiang Mai Food Guide: Khao Soi and Markets',
  '/thai-food/chiang-mai-khao-soi-and-markets': 'Chiang Mai Khao Soi and Market Lunch Rooms',
  '/thai-food/chiang-rai': 'Chiang Rai Food Guide: Khao Soi and Bazaar',
  '/thai-food/khon-kaen': 'Khon Kaen Food Guide: Gai Yang on Mittraphap',
  '/thai-food/udon-thani': 'Udon Thani Food Guide: UD Town Night Grills',
  '/thai-food/nong-khai': 'Nong Khai Food Guide: Nam Nuang on Meechai',
  '/thai-food/ayutthaya': 'Ayutthaya Food Guide: Boat Noodles and Roti',
  '/thai-food/hua-hin': 'Hua Hin Food Guide: Soi 72 and Naresdamri Fish',
  '/thai-food/hat-yai': 'Hat Yai Food Guide: Fried Chicken at Kim Yong',
  '/thai-food/sukhothai': 'Sukhothai Food Guide: Noodles After the Park',
  '/thai-food/pattaya': 'Pattaya Food Guide: Jomtien Seafood and Naklua',
  '/thai-food/isan': 'Isan Food Guide: Som Tum, Larb, and Sticky Rice',
  '/thai-food/koh-samui': 'Koh Samui and Gulf Food Guide: Grills and Markets',
  '/thai-food/krabi': 'Krabi and Andaman Food Guide: Seafood and Markets',
  '/thai-food/night-markets': 'Thailand Night Markets: Hours and Walking Streets',
  '/thai-food/northern-lanna': 'Northern Lanna Food: Khao Soi and Larb Addresses',
  '/thai-food/or-tor-kor-and-bangkok-fresh-markets': 'Or Tor Kor and Bangkok Fresh Markets Guide',
  '/thai-food/phuket': 'Phuket Food Guide: Old Town Hokkien and Baba Rooms',
  '/thai-food/phuket-old-town-hokkien-and-peranakan-food': 'Phuket Old Town Hokkien and Peranakan Food',
  '/thai-food/southern-and-baba-nyonya': 'Southern Gaeng Som and Phuket Baba-Nyonya',
  '/thai-food/thai-cooking-classes-bangkok-and-chiang-mai': 'Thai Cooking Classes in Bangkok and Chiang Mai',
  '/thai-food/thai-dishes-to-order-first-trip': 'Thai Dishes to Order on a First Trip',
  '/thai-food/wang-lang-and-talat-noi': 'Wang Lang Market and Talat Noi Food Guide',
  '/thai-food/yaowarat-chinatown-food-walk': 'Yaowarat Chinatown Food Walk: Stalls After Dark',
  ...WAVE22_TITLE_CORE,
  ...WAVE22_SOUTH_TITLE_CORE,
  ...WAVE22_GULF_NORTH_TITLE_CORE,
  ...WAVE22_SECONDARY_TITLE_CORE,
  ...WAVE23_TITLE_CORE,
  ...DISH_TITLE_CORE,
};

function visible(text: string): string {
  return String(text ?? '')
    .replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/&/g, 'and')
    .replace(/\s+/g, ' ')
    .trim();
}

function trimAtWord(text: string, max: number): string {
  if (text.length <= max) return text;
  const slice = text.slice(0, max);
  const cut = slice.lastIndexOf(' ');
  let out = (cut >= 32 ? slice.slice(0, cut) : slice).trim();
  out = out.replace(/\s+(?:and|or|to|in|on|for|with|by|at|of|vs|the|a|an)$/i, '').trim();
  return out.replace(/[,:;.\-/]+$/, '').trim();
}

function trimComplete(text: string, max: number): string {
  let out = trimAtWord(text, max);
  while (out.length > 32 && (out.length > max || isDanglingTitle(out))) {
    const cut = out.lastIndexOf(' ');
    if (cut < 32) break;
    out = out.slice(0, cut).replace(/[,:;.\-/]+$/, '').trim();
  }
  return out;
}

const ABBREV_MARK = '%%ABBREV%%';
const ABBREV_RULES: RegExp[] = [
  /(?<![A-Za-z])approx\./gi,
  /(?<![A-Za-z])e\.g\./gi,
  /(?<![A-Za-z])i\.e\./gi,
  /(?<![A-Za-z])vs\./gi,
  /(?<![A-Za-z])St\./g,
  /(?<![A-Za-z])Mt\./g,
  /(?<![A-Za-z])No\.(?=\s*\d)/g,
];

function protectAbbrevs(text: string): { text: string; marks: string[] } {
  const marks: string[] = [];
  let out = text;
  for (const re of ABBREV_RULES) {
    out = out.replace(re, (match) => {
      marks.push(match);
      return `${ABBREV_MARK}${marks.length - 1}%%`;
    });
  }
  return { text: out, marks };
}

function restoreAbbrevs(text: string, marks: string[]): string {
  return text.replace(new RegExp(`${ABBREV_MARK}(\\d+)%%`, 'g'), (_, idx) => marks[Number(idx)] ?? '');
}

function closeSentence(text: string): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (!t) return '';
  return /[.!?]$/.test(t) ? t : `${t}.`;
}

export function splitSentences(text: string): string[] {
  const raw = visible(text);
  if (!raw) return [];
  const { text: protectedText, marks } = protectAbbrevs(raw);
  const chunks = protectedText.split(/(?<=[.!?])\s+/);
  return chunks
    .map((chunk) => closeSentence(restoreAbbrevs(chunk, marks)))
    .filter((chunk) => chunk.length > 1);
}

function collectSentences(page: Page): string[] {
  const seen = new Set<string>();
  const sentences: string[] = [];
  for (const block of pageSnippets(page)) {
    for (const sentence of splitSentences(block)) {
      if (seen.has(sentence)) continue;
      seen.add(sentence);
      sentences.push(sentence);
    }
  }
  if (!sentences.length) sentences.push(closeSentence(visible(page.title)));
  return sentences;
}

export function clipDescription(sentences: string[]): string {
  const pool = sentences.map((s) => closeSentence(visible(s))).filter((s) => s.length > 1);

  const build = (items: string[]): string | null => {
    let acc = '';
    for (const sentence of items) {
      const joined = acc ? `${acc} ${sentence}` : sentence;
      if (joined.length <= DESC_MAX) {
        acc = joined;
        if (acc.length >= DESC_MIN) return acc;
        continue;
      }
      // Overflow: skip this sentence and try later shorter ones. Do not trim into the window.
    }
    return acc.length >= DESC_MIN && acc.length <= DESC_MAX ? acc : null;
  };

  for (let start = 0; start < pool.length; start++) {
    const hit = build(pool.slice(start));
    if (hit) return hit;
  }

  for (const sentence of pool) {
    if (sentence.length >= DESC_MIN && sentence.length <= DESC_MAX) return sentence;
  }

  const fallback = pool[0] || '';
  if (fallback.length > DESC_MAX) return trimAtWord(fallback, DESC_MAX);
  return trimAtWord(pool.join(' '), DESC_MAX);
}

function stripSuffix(text: string): string {
  return text.replace(/\s*\|\s*Thailand(?:\s+Travel)?\s+Guide\s*$/i, '').trim();
}

function pageSnippets(page: Page): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  const push = (text: string) => {
    const value = visible(text);
    if (!value || seen.has(value)) return;
    seen.add(value);
    out.push(value);
  };

  push(page.description);
  push(page.lede);
  for (const paragraph of page.paragraphs || []) push(paragraph);
  for (const section of page.sections || []) {
    for (const paragraph of section.paragraphs || []) push(paragraph);
    for (const bullet of section.bullets || []) push(bullet);
  }
  for (const faq of page.faqs || []) push(faq.a);
  for (const fact of page.facts || []) {
    const label = visible(fact.label);
    const value = visible(fact.value);
    if (label && value) push(`${label}: ${value}.`);
  }

  return out;
}

function isDanglingTitle(title: string): boolean {
  const core = stripSuffix(title).replace(/\s+/g, ' ').trim();
  if (!core) return true;
  if (/[:;,/]\s*$/.test(core)) return true;
  if (/\b(?:and|or|to|in|on|for|with|by|at|of|vs|the|a|an|is|are|as|from|plus)\s*$/i.test(core)) return true;
  const afterColon = core.match(/:\s*(.+)$/);
  if (afterColon) {
    const tail = afterColon[1].trim();
    if (/^[\d.,]+(?:\s*(?:THB|baht|hrs?|hours?|mins?|minutes?|days?))?$/i.test(tail)) return true;
  }
  return false;
}

function expandCore(page: Page): string {
  if (TITLE_CORE[page.path]) return stripSuffix(TITLE_CORE[page.path]);

  const raw = stripSuffix(visible(page.title));
  const path = page.path;

  if (path.startsWith('/get-there/') && path !== '/get-there') {
    if (/min|flight|ferry|sleeper|van|fare|2026|:/i.test(raw)) return raw;
    return `${raw}: Flights, Trains and Ferries`;
  }
  if (path.startsWith('/itineraries/') && path !== '/itineraries') {
    if (/itinerary|days in|what to see/i.test(raw)) return raw;
    return `${raw}: Route, Stops and Transit`;
  }
  if (path.startsWith('/plan/') && path !== '/plan') {
    if (raw.length >= 28) return raw;
    return `${raw}: 2026 Thailand Travel Guide`;
  }
  if (path.startsWith('/thai-food/') && path !== '/thai-food') {
    return raw.toLowerCase().includes('food') ? `${raw} (2026 Guide)` : `${raw} Food Guide: Dishes and Stalls`;
  }
  if (path.startsWith('/attractions/') && path !== '/attractions') {
    return `${raw}: Tickets, Hours and Tips`;
  }
  if (path.startsWith('/resort-living/')) {
    const parent = page.crumbs[page.crumbs.length - 2]?.name;
    return parent && parent !== 'Resort Living'
      ? `${raw}, ${parent}: Luxury Resort Guide`
      : `${raw}: Luxury Villa and Beach Guide`;
  }
  if (path.startsWith('/interests/nightlife/')) {
    return `${raw}: Rooftops, Bars and Late Nights`;
  }
  if (path.startsWith('/interests/') && path !== '/interests') {
    return `${raw} in Thailand: Regions and Season`;
  }
  if (path.split('/').filter(Boolean).length >= 2 && (page.schema === 'TouristDestination' || page.schema === 'City')) {
    const parent = page.crumbs[page.crumbs.length - 2]?.name;
    return parent ? `${raw}, ${parent}: Stays and Transport` : `${raw} Guide: Areas, Stays and Transit`;
  }
  if (page.schema === 'City' || page.schema === 'TouristDestination') {
    return `${raw} Travel Guide: Best Areas and Stays`;
  }
  if (raw.length >= 28) return raw;
  return `${raw}: Thailand Travel Guide`;
}

export function seoTitle(page: Page): string {
  let core = expandCore(page).replace(/&/g, 'and').replace(/\s+/g, ' ').trim();
  core = stripSuffix(core);

  if (core.length >= TITLE_MIN && core.length <= TITLE_MAX && !isDanglingTitle(core)) {
    return core;
  }

  const withSuffix = `${core}${TITLE_SUFFIX}`;
  if (
    withSuffix.length >= TITLE_MIN &&
    withSuffix.length <= TITLE_MAX &&
    !isDanglingTitle(withSuffix)
  ) {
    return withSuffix;
  }

  if (withSuffix.length > TITLE_MAX) {
    const maxCore = TITLE_MAX - TITLE_SUFFIX.length;
    const trimmedCore = trimComplete(core, maxCore);
    const next = `${trimmedCore}${TITLE_SUFFIX}`;
    if (next.length >= TITLE_MIN && next.length <= TITLE_MAX && !isDanglingTitle(next)) return next;
    if (core.length >= TITLE_MIN && core.length <= TITLE_MAX && !isDanglingTitle(core)) return core;
    const trimmed = trimComplete(core, TITLE_MAX);
    if (trimmed.length >= TITLE_MIN && trimmed.length <= TITLE_MAX && !isDanglingTitle(trimmed)) {
      return trimmed;
    }
    if (next.length >= TITLE_MIN && next.length <= TITLE_MAX) return next;
    if (core.length >= TITLE_MIN && core.length <= TITLE_MAX) return core;
    return trimAtWord(core, TITLE_MAX);
  }

  if (core.length >= TITLE_MIN && core.length <= TITLE_MAX && !isDanglingTitle(core)) return core;

  return withSuffix;
}

export function seoDescription(page: Page): string {
  return clipDescription(collectSentences(page));
}

export function assertSeoBounds(page: Page): { title: string; description: string } {
  const title = seoTitle(page);
  const description = seoDescription(page);
  return { title, description };
}
