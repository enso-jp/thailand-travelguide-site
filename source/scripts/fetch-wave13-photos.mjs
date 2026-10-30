#!/usr/bin/env node
import { writeFileSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'public/photos');
const UA = 'ThailandTravelGuide/1.0 (https://thailand-travelguide.com; editorial credits)';

const JOBS = [
  { key: 'destinations', files: ['Ko Phi Phi Le.jpg', 'Phi Phi Leh Maya Bay.jpg', 'Maya Bay, Ko Phi Phi Le.jpg'] },
  { key: 'itineraries', files: ['Special Express 9 at Krung Thep Aphiwat Central Terminal (II).jpg', 'Chiang Mai Railway Station.jpg', 'Hua Lamphong Railway Station.jpg'] },
  { key: 'plan', files: ['Suvarnabhumi Airport.jpg', 'Suvarnabhumi airport 02.jpg', 'Bangkok Suvarnabhumi Airport.jpg'] },
  { key: 'get-there', files: ['Lomprayah High Speed Ferries.jpg', 'Seatran Discovery ferry.jpg', 'Ferry Koh Samui.jpg'] },
  { key: 'interests', files: ['Chatuchak Weekend Market.jpg', 'Chatuchak market Bangkok.jpg', 'JJ Market Bangkok.jpg'] },
  { key: 'about', files: ['Wat Pho Reclining Buddha.jpg', 'Reclining Buddha Wat Pho Bangkok.jpg', 'Wat Pho, Bangkok, Thailand.jpg'] },
  { key: 'privacy', files: ['BTS Skytrain Silom Line.jpg', 'Bangkok Skytrain.jpg', 'BTS train Bangkok.jpg'] },
  { key: 'koh-kood', files: ['Koh Kut, Thailand, Bang Bao Beach.jpg', 'Koh Kut, Thailand, Palms on the beach.jpg', 'Ko Kut, Thailand, Soneva Kiri, Beach - panoramio.jpg'] },
  { key: 'resort-amanpuri', files: ['Surin Beach.JPG', 'Surin Beach Phuket.jpg', 'Pansea Beach Phuket.jpg'] },
  { key: 'resort-six-senses-yao-noi', files: ['Koh Yao Noi.jpg', 'Ko Yao Noi.jpg', 'Koh Yao Yai Thailand.jpg'] },
  { key: 'resort-six-senses-samui', files: ['Big Buddha, Koh Samui.jpg', 'Wat Phra Yai Koh Samui.jpg', 'Bophut, Koh Samui.jpg'] },
  { key: 'resort-capella-bangkok', files: ['Chao Phraya River Bangkok.jpg', 'Chao Phraya from Iconsiam.jpg', 'Bangkok Chao Phraya River.jpg'] },
  { key: 'resort-the-siam', files: ['Rama VIII Bridge.jpg', 'Rama VIII Bridge Bangkok.jpg', 'Thewet Bangkok.jpg'] },
  { key: 'resort-four-seasons-chiang-mai', files: ['Rice terrace Chiang Mai.jpg', 'Mae Rim Chiang Mai.jpg', 'Chiang Mai countryside.jpg'] },
  { key: 'resort-four-seasons-koh-samui', files: ['Maenam Beach Koh Samui.jpg', 'Mae Nam Beach.jpg', 'North coast Koh Samui.jpg'] },
  { key: 'resort-soneva-kiri', files: ['Koh Kut, Thailand, Palms on the beach.jpg', 'Koh Kut, Thailand, Sand bank.jpg', 'Koh Kut, Thailand, Gulf of Thailand.jpg'] },
  { key: 'resort-rayavadee', files: ['Phra Nang Cave Beach.jpg', 'Railay Beach Krabi.jpg', 'West Railay Beach.jpg'] },
  { key: 'resort-vie-hotel-bangkok', files: ['Ratchathewi BTS Station.jpg', 'Victory Monument Bangkok.jpg', 'Phaya Thai BTS Station.jpg'] },
  { key: 'resort-veranda-high-chiang-mai', files: ['Chiang Mai from Doi Suthep.jpg', 'View from Doi Suthep.jpg', 'Doi Suthep viewpoint.jpg'] },
  { key: 'resort-avista-hideaway-phuket', files: ['Kamala Beach Phuket.jpg', 'Kamala Beach.jpg', 'Kamala, Phuket.jpg'] },
  { key: 'resort-four-seasons-bangkok', files: ['Chao Phraya River at night.jpg', 'Bangkok river night.jpg', 'Iconsiam night.jpg'] },
  { key: 'resort-mandarin-oriental-bangkok', files: ['Mandarin Oriental Bangkok.jpg', 'Oriental Hotel Bangkok.jpg', 'Mandarin Oriental pier Bangkok.jpg'] },
  { key: 'resort-rosewood-bangkok', files: ['Ploenchit Road Bangkok.jpg', 'Wireless Road Bangkok.jpg', 'Central Embassy Bangkok.jpg'] },
  { key: 'resort-trisara-phuket', files: ['Nai Thon Beach.jpg', 'Nai Thon Beach Phuket.jpg', 'Nai Yang Beach Phuket.jpg'] },
  { key: 'resort-anantara-chiang-mai', files: ['Ping River Chiang Mai.jpg', 'Mae Ping River.jpg', 'Chiang Mai river.jpg'] },
  { key: 'resort-137-pillars', files: ['Wat Ket Chiang Mai.jpg', 'Wat Gate Chiang Mai.jpg', 'Warorot Market Chiang Mai.jpg'] },
  { key: 'resort-phulay-bay', files: ['Ao Nang Beach Krabi.jpg', 'Ao Nang limestone.jpg', 'Ao Nang, Krabi.jpg'] },
  { key: 'resort-ritz-carlton-koh-samui', files: ['Choeng Mon Beach, Koh Samui (27451662213).jpg', 'Choeng Mon Beach, Koh Samui (28034183446).jpg', 'Choeng Mon Beach.jpg'] },
  { key: 'wat-pho', files: ['Wat Pho, Bangkok.jpg', 'Wat Pho temple Bangkok.jpg', 'Wat Pho courtyard.jpg'] },
  { key: 'wat-arun-night', files: ['Wat Arun at night.jpg', 'Wat Arun twilight.jpg', 'Wat Arun evening.jpg'] },
  { key: 'chatuchak', files: ['Chatuchak Weekend Market 2018.jpg', 'Chatuchak Market aisle.jpg', 'Jatujak market.jpg'] },
  { key: 'yaowarat', files: ['Yaowarat Road at night.jpg', 'Yaowarat Chinatown Bangkok.jpg', 'Chinatown Bangkok Yaowarat.jpg'] },
  { key: 'grand-palace', files: ['Grand Palace Bangkok.jpg', 'Wat Phra Kaew Bangkok.jpg', 'Emerald Buddha Temple.jpg'] },
  { key: 'phi-phi', files: ['Ko Phi Phi Don.jpg', 'Phi Phi Islands.jpg', 'Tonsai Bay Phi Phi.jpg'] },
  { key: 'railay', files: ['Railay Beach.jpg', 'East Railay Beach.jpg', 'Railay limestone.jpg'] },
  { key: 'cheow-lan', files: ['Cheow Lan Lake Khao Sok.jpg', 'Ratchaprapha Dam.jpg', 'Cheow Lan floating huts.jpg'] },
  { key: 'doi-suthep', files: ['Wat Phra That Doi Suthep.jpg', 'Doi Suthep temple.jpg', 'Doi Suthep Chiang Mai.jpg'] },
  { key: 'ferry-gulf', files: ['Lomprayah catamaran Koh Tao.jpg', 'Seatran ferry Koh Samui.jpg', 'Ferry at Nathon Pier.jpg'] },
  { key: 'longtail-andaman', files: ['Longtail boat Krabi.jpg', 'Long-tail boats Ao Nang.jpg', 'Longtail Railay.jpg'] },
  { key: 'night-market-cm', files: ['Chiang Mai Sunday Walking Street.jpg', 'Sunday Walking Street Chiang Mai.jpg', 'Warorot night market.jpg'] },
  { key: 'erawan', files: ['Erawan Waterfall.jpg', 'Erawan National Park waterfall.jpg', 'Erawan Falls Kanchanaburi.jpg'] },
  { key: 'ang-thong', files: ['Ang Thong National Park.jpg', 'Ang Thong Marine Park.jpg', 'Ko Wua Talap.jpg'] },
  { key: 'lumphini', files: ['Lumphini Park Bangkok.jpg', 'Lumpini Park.jpg', 'Lumphini Park lake.jpg'] },
  { key: 'jim-thompson', files: ['Jim Thompson House Bangkok.jpg', 'Jim Thompson House.jpg', 'Jim Thompson garden.jpg'] },
  { key: 'patong-night', files: ['Patong Beach at night.jpg', 'Bangla Road Patong.jpg', 'Patong Beach Phuket.jpg'] },
  { key: 'chaweng-night', files: ['Chaweng Beach night.jpg', 'Chaweng, Koh Samui.jpg', 'Chaweng Beach Koh Samui.jpg'] },
  { key: 'chinatown-day', files: ['Wat Traimit Golden Buddha.jpg', 'Wat Traimit Bangkok.jpg', 'Odeon Circle Chinatown.jpg'] },
  { key: 'silom-night', files: ['Saladaeng Bangkok.jpg', 'Silom Road Bangkok.jpg', 'Patpong night.jpg'] },
];

async function lookup(title) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.searchParams.set('action', 'query');
  url.searchParams.set('titles', title.startsWith('File:') ? title : `File:${title}`);
  url.searchParams.set('prop', 'imageinfo');
  url.searchParams.set('iiprop', 'url|extmetadata|mime|size');
  url.searchParams.set('iiurlwidth', '1600');
  url.searchParams.set('format', 'json');
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`lookup ${title} ${res.status}`);
  const data = await res.json();
  const page = Object.values(data.query.pages)[0];
  if (!page || page.missing != null || !page.imageinfo) return null;
  const info = page.imageinfo[0];
  const meta = info.extmetadata || {};
  const license = (meta.LicenseShortName?.value || meta.UsageTerms?.value || '').replace(/<[^>]+>/g, '');
  const artist = cleanAuthor(meta.Artist?.value || 'Unknown');
  const pageUrl = info.descriptionurl;
  return {
    thumb: info.thumburl || info.url,
    license,
    artist,
    pageUrl,
    mime: info.mime,
  };
}

async function search(query) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.searchParams.set('action', 'query');
  url.searchParams.set('list', 'search');
  url.searchParams.set('srsearch', query);
  url.searchParams.set('srnamespace', '6');
  url.searchParams.set('srlimit', '8');
  url.searchParams.set('format', 'json');
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  const data = await res.json();
  return (data.query?.search || []).map((row) => row.title.replace(/^File:/, ''));
}

function cleanAuthor(raw) {
  const text = String(raw || 'Unknown')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const takenBy = text.match(/taken by\s+([^.(]+)/i);
  if (takenBy) return takenBy[1].trim();
  const firstSentence = text.split(/[.!\n]/)[0].trim();
  if (firstSentence && firstSentence.length <= 80 && !/feel free|สามารถ/i.test(firstSentence)) {
    return firstSentence;
  }
  return (firstSentence || text).slice(0, 80).trim() || 'Unknown';
}

function licenseOk(license) {
  const t = license.toLowerCase();
  if (!t) return false;
  if (t.includes('nc') || t.includes('nd')) return false;
  return (
    t.includes('cc by') ||
    t.includes('cc-by') ||
    t.includes('cc0') ||
    t.includes('public domain') ||
    t.includes('pd')
  );
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

const creditsPath = join(OUT, 'credits.json');
const credits = JSON.parse(readFileSync(creditsPath, 'utf8'));
const report = [];

for (const job of JOBS) {
  const dest = join(OUT, `${job.key}.jpg`);
  let picked = null;
  const tried = [...job.files];
  for (const name of job.files) {
    try {
      const info = await lookup(name);
      if (info && licenseOk(info.license) && (info.mime || '').includes('jpeg')) {
        picked = { name, ...info };
        break;
      }
    } catch {
      /* try next */
    }
  }
  if (!picked) {
    const extra = await search(`${job.key.replace(/-/g, ' ')} Thailand`);
    for (const name of extra) {
      if (tried.includes(name)) continue;
      try {
        const info = await lookup(name);
        if (info && licenseOk(info.license) && (info.mime || '').includes('image')) {
          picked = { name, ...info };
          break;
        }
      } catch {
        /* next */
      }
    }
  }
  if (!picked) {
    report.push({ key: job.key, ok: false, reason: 'no licensed file' });
    continue;
  }
  try {
    const bytes = await download(picked.thumb, dest);
    credits[job.key] = {
      author: cleanAuthor(picked.artist),
      license: picked.license,
      source: picked.pageUrl,
    };
    report.push({ key: job.key, ok: true, file: picked.name, bytes, license: picked.license });
  } catch (err) {
    report.push({ key: job.key, ok: false, reason: String(err), file: picked.name });
  }
}

writeFileSync(creditsPath, `${JSON.stringify(credits, null, 2)}\n`);
writeFileSync('/tmp/wave13-photos.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
const failed = report.filter((row) => !row.ok);
console.log(`done ${report.filter((r) => r.ok).length}/${report.length} failed ${failed.length}`);
