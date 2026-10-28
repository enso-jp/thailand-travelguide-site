#!/usr/bin/env node
import { writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'public/photos');
const UA = 'ThailandTravelGuide/1.0 (https://thailand-travelguide.com; editorial credits)';

const JOBS = [
  { key: 'dish-khao-soi', files: ['Khao Soi.jpg', 'Khao soi Chiang Mai.jpg', 'Khao Soi Mae Sai.jpg'], q: 'Khao soi Chiang Mai noodles' },
  { key: 'dish-khao-soi-2', files: ['Khao soi.jpg', 'Khao Soy.jpg', 'Curry noodles Chiang Mai.jpg'], q: 'Khao soi coconut curry noodle' },
  { key: 'dish-pad-kra-pao', files: ['Phat kaphrao mu sap.jpg', 'Pad krapow.jpg', 'Pad kra pao.jpg'], q: 'Phat kaphrao holy basil' },
  { key: 'dish-tom-yum', files: ['Tom yum kung 01.jpg', 'Tom yum goong.jpg', 'Tom yum.jpg'], q: 'Tom yum kung prawn soup' },
  { key: 'dish-som-tum', files: ['Som tam thai.jpg', 'Som tum.jpg', 'Green papaya salad.jpg'], q: 'Som tam papaya salad Thailand' },
  { key: 'dish-som-tum-2', files: ['Som tam.jpg', 'Tam mak hoong.jpg', 'Papaya salad Isaan.jpg'], q: 'Som tum poo plara' },
  { key: 'dish-pad-thai', files: ['Pad Thai.jpg', 'Phat Thai.jpg', 'Pad Thai prawns.jpg'], q: 'Pad Thai noodles Bangkok' },
  { key: 'dish-massaman', files: ['Massaman curry.jpg', 'Kaeng matsaman.jpg', 'Massaman beef.jpg'], q: 'Massaman curry Thailand' },
  { key: 'dish-khao-man-gai', files: ['Khao man kai.jpg', 'Hainanese chicken rice Thailand.jpg', 'Khao man gai.jpg'], q: 'Khao man gai chicken rice' },
  { key: 'dish-khao-man-gai-2', files: ['Hainanese chicken rice.jpg', 'Chicken rice Bangkok.jpg'], q: 'Khao man kai Bangkok' },
  { key: 'dish-moo-hong', files: ['Moo hong.jpg', 'Moo hong Phuket.jpg', 'Phuket stewed pork.jpg'], q: 'Moo hong Phuket pork' },
  { key: 'dish-kanom-jeen', files: ['Khanom chin nam ya.jpg', 'Kanom jeen.jpg', 'Khanom chin.jpg'], q: 'Khanom chin nam ya' },
  { key: 'dish-kanom-jeen-2', files: ['Khanom chin nam ngiao.jpg', 'Nam ngiao.jpg', 'Khanom jeen nam ngiao.jpg'], q: 'Khanom chin nam ngiao' },
  { key: 'dish-kanom-jeen-crab', files: ['Khanom chin nam ya pu.jpg', 'Crab curry noodles Thailand.jpg'], q: 'kanom jeen nam ya poo crab' },
  { key: 'dish-boat-noodle', files: ['Boat noodles.jpg', 'Kuai tiao ruea.jpg', 'Guay tiew reua.jpg'], q: 'Thai boat noodles' },
  { key: 'dish-hoi-tod', files: ['Hoy tod.jpg', 'Hoi thot.jpg', 'Oyster omelette Thailand.jpg'], q: 'Hoi tod oyster omelette Thailand' },
  { key: 'dish-mango-sticky', files: ['Mango and sticky rice.jpg', 'Khao niao mamuang.jpg', 'Mango sticky rice.jpg'], q: 'mango sticky rice Thailand' },
  { key: 'dish-mango-sticky-2', files: ['Khao niao mamuang.jpg', 'Thai mango sticky rice dessert.jpg'], q: 'ข้าวเหนียวมะม่วง' },
  { key: 'dish-guay-jub', files: ['Kuai chap.jpg', 'Guay jub.jpg', 'Rolled rice noodle soup.jpg'], q: 'Kuai chap peppery noodles' },
  { key: 'dish-crab-omelette', files: ['Thai crab omelette.jpg', 'Kai jeow pu.jpg', 'Jay Fai crab omelette.jpg'], q: 'Thai crab omelette' },
  { key: 'dish-sai-ua', files: ['Sai ua.jpg', 'Sai oua.jpg', 'Northern Thai sausage.jpg'], q: 'Sai ua Chiang Mai sausage' },
  { key: 'dish-nam-prik-ong', files: ['Nam phrik ong.jpg', 'Nam prik ong.jpg', 'Northern Thai nam prik.jpg'], q: 'Nam phrik ong' },
  { key: 'dish-khao-kha-moo', files: ['Khao kha mu.jpg', 'Khao kha moo.jpg', 'Stewed pork leg rice.jpg'], q: 'Khao kha mu Thailand' },
  { key: 'dish-hokkien-mee', files: ['Hokkien mee.jpg', 'Phuket Hokkien mee.jpg', 'Mee Hokkien.jpg'], q: 'Hokkien mee Phuket' },
  { key: 'dish-oh-aew', files: ['Oh Aew.jpg', 'Aiyu jelly.jpg', 'Grass jelly Thailand.jpg'], q: 'Oh aew Phuket dessert' },
  { key: 'dish-gaeng-som', files: ['Kaeng som.jpg', 'Gaeng som.jpg', 'Sour curry Thailand.jpg'], q: 'Kaeng som sour curry' },
  { key: 'dish-gaeng-som-2', files: ['Kaeng som pla.jpg', 'Southern sour curry.jpg'], q: 'Gaeng som fish Thailand' },
  { key: 'dish-grilled-squid', files: ['Grilled squid Thailand.jpg', 'Pla muek yang.jpg', 'Street grilled squid.jpg'], q: 'grilled squid Thailand street' },
  { key: 'dish-larb', files: ['Larb.jpg', 'Laab moo.jpg', 'Larb moo.jpg'], q: 'Larb moo Isan' },
  { key: 'dish-gai-yang', files: ['Gai yang.jpg', 'Kai yang.jpg', 'Thai grilled chicken.jpg'], q: 'Gai yang grilled chicken Thailand' },
  { key: 'dish-nam-tok', files: ['Nam tok.jpg', 'Nam tok neua.jpg', 'Thai grilled beef salad.jpg'], q: 'Nam tok Thai salad' },
  { key: 'dish-tom-saap', files: ['Tom saap.jpg', 'Tom zap.jpg', 'Isan pork bone soup.jpg'], q: 'Tom saap Isan soup' },
  { key: 'dish-khao-niew', files: ['Sticky rice Thailand.jpg', 'Khao niao.jpg', 'Glutinous rice basket Thailand.jpg'], q: 'khao niao sticky rice basket' },
  { key: 'dish-nam-prik-kung', files: ['Nam phrik.jpg', 'Nam prik kapi.jpg', 'Thai chili relish.jpg'], q: 'Nam phrik Thai relish' },
  { key: 'khao-yai', files: ['Khao Yai National Park.jpg', 'Khao Yai forest.jpg', 'Khao Yai mountains.jpg'], q: 'Khao Yai National Park Thailand' },
  { key: 'haew-suwat', files: ['Haew Suwat Waterfall.jpg', 'Heo Suwat.jpg', 'Haew Suwat Khao Yai.jpg'], q: 'Haew Suwat waterfall Khao Yai' },
  { key: 'jomtien', files: ['Jomtien Beach.jpg', 'Jomtien Beach Pattaya.jpg', 'Hat Jomtien.jpg'], q: 'Jomtien Beach Pattaya' },
  { key: 'koh-larn', files: ['Ko Lan.jpg', 'Koh Larn.jpg', 'Koh Larn Pattaya.jpg'], q: 'Koh Larn island Pattaya' },
  { key: 'wongamat', files: ['Wongamat Beach.jpg', 'Wong Amat Beach.jpg', 'Naklua Beach.jpg'], q: 'Wongamat Beach Pattaya' },
  { key: 'walking-street-pattaya', files: ['Walking Street Pattaya.jpg', 'Pattaya Walking Street.jpg'], q: 'Walking Street Pattaya night' },
  { key: 'nong-nooch', files: ['Nong Nooch Tropical Garden.jpg', 'Nongnooch.jpg', 'Nong Nooch Pattaya.jpg'], q: 'Nong Nooch garden Pattaya' },
  { key: 'sanctuary-truth', files: ['Sanctuary of Truth.jpg', 'Sanctuary of Truth Pattaya.jpg', 'Prasat Satchatham.jpg'], q: 'Sanctuary of Truth Pattaya teak' },
  { key: 'klong-prao', files: ['Klong Prao Beach.jpg', 'Khlong Phrao Beach.jpg', 'Klong Prao Koh Chang.jpg'], q: 'Klong Prao Beach Koh Chang' },
  { key: 'lonely-beach', files: ['Lonely Beach Koh Chang.jpg', 'Lonely Beach.jpg'], q: 'Lonely Beach Koh Chang' },
  { key: 'than-mayom', files: ['Than Mayom Waterfall.jpg', 'Than Mayom Koh Chang.jpg'], q: 'Than Mayom waterfall Koh Chang' },
  { key: 'kai-bae', files: ['Kai Bae Beach.jpg', 'Kai Bae viewpoint.jpg', 'Hat Kai Bae.jpg'], q: 'Kai Bae Koh Chang' },
  { key: 'ao-tapao', files: ['Ao Tapao Koh Kood.jpg', 'Ao Tapao.jpg', 'Koh Kut west beach.jpg'], q: 'Ao Tapao Koh Kood beach' },
  { key: 'klong-chao-fall', files: ['Khlong Chao Waterfall.jpg', 'Klong Chao waterfall.jpg', 'Koh Kut waterfall.jpg'], q: 'Klong Chao waterfall Koh Kood' },
  { key: 'bang-bao-kood', files: ['Bang Bao Koh Kut.jpg', 'Bang Bao Bay Koh Kood.jpg', 'Koh Kut Bang Bao.jpg'], q: 'Bang Bao Koh Kood' },
  { key: 'tonsai', files: ['Tonsai Bay Phi Phi.jpg', 'Tonsai Village.jpg', 'Tonsai Pier Phi Phi.jpg'], q: 'Tonsai Bay Koh Phi Phi' },
  { key: 'long-beach-pp', files: ['Long Beach Phi Phi.jpg', 'Hat Yao Phi Phi.jpg', 'Long Beach Ko Phi Phi Don.jpg'], q: 'Long Beach Phi Phi Don' },
  { key: 'viking-cave', files: ['Viking Cave Phi Phi.jpg', 'Viking Cave.jpg', 'Tham Viking.jpg'], q: 'Viking Cave Phi Phi Le' },
  { key: 'phi-phi-viewpoint', files: ['Phi Phi viewpoint.jpg', 'Ko Phi Phi Don viewpoint.jpg', 'Phi Phi Don from viewpoint.jpg'], q: 'Phi Phi Don viewpoint' },
  { key: 'pak-chong', files: ['Pak Chong.jpg', 'Pak Chong town.jpg', 'Pak Chong night market.jpg'], q: 'Pak Chong Nakhon Ratchasima' },
  { key: 'khao-yai-hills', files: ['Khao Yai vineyard.jpg', 'PB Valley Khao Yai.jpg', 'Khao Yai wine.jpg'], q: 'Khao Yai vineyard Thailand' },
  { key: 'wat-mahathat-ayu', files: ['Wat Mahathat Ayutthaya Buddha head.jpg', 'Buddha head Wat Mahathat.jpg', 'Wat Mahathat Ayutthaya.jpg'], q: 'Wat Mahathat Ayutthaya tree Buddha' },
  { key: 'wat-phra-si-sanphet', files: ['Wat Phra Si Sanphet.jpg', 'Wat Phra Sri Sanphet.jpg'], q: 'Wat Phra Si Sanphet Ayutthaya' },
  { key: 'bang-pa-in', files: ['Bang Pa-In Palace.jpg', 'Bang Pa In.jpg'], q: 'Bang Pa-In Palace Thailand' },
  { key: 'blue-temple', files: ['Wat Rong Suea Ten.jpg', 'Blue Temple Chiang Rai.jpg'], q: 'Blue Temple Chiang Rai Wat Rong Suea Ten' },
  { key: 'baan-dam', files: ['Baan Dam Museum.jpg', 'Black House Chiang Rai.jpg', 'Baan Dam.jpg'], q: 'Baan Dam Museum Chiang Rai' },
  { key: 'na-muang', files: ['Na Muang Waterfall.jpg', 'Namuang waterfall Koh Samui.jpg'], q: 'Na Muang waterfall Koh Samui' },
  { key: 'big-buddha-phuket', files: ['Big Buddha Phuket.jpg', 'Phuket Big Buddha.jpg'], q: 'Big Buddha Phuket Nakkerd' },
  { key: 'tiger-cave', files: ['Tiger Cave Temple.jpg', 'Wat Tham Suea.jpg', 'Tiger Cave Krabi stairs.jpg'], q: 'Tiger Cave Temple Krabi' },
  { key: 'klai-kangwon', files: ['Klai Kangwon Palace.jpg', 'Klai Kangwon.jpg'], q: 'Klai Kangwon Palace Hua Hin' },
  { key: 'sam-roi-yot', files: ['Khao Sam Roi Yot.jpg', 'Sam Roi Yot.jpg'], q: 'Khao Sam Roi Yot National Park' },
  { key: 'white-sand-chang', files: ['White Sand Beach Koh Chang.jpg', 'Hat Sai Khao.jpg', 'Sai Khao Beach.jpg'], q: 'White Sand Beach Koh Chang' },
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
  return {
    thumb: info.thumburl || info.url,
    license,
    artist,
    pageUrl: info.descriptionurl,
    mime: info.mime,
    name: title,
  };
}

async function search(query) {
  const url = new URL('https://commons.wikimedia.org/w/api.php');
  url.searchParams.set('action', 'query');
  url.searchParams.set('list', 'search');
  url.searchParams.set('srsearch', query);
  url.searchParams.set('srnamespace', '6');
  url.searchParams.set('srlimit', '12');
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
  return t.includes('cc by') || t.includes('cc-by') || t.includes('cc0') || t.includes('public domain') || t.includes('pd');
}

async function download(url, dest) {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`download ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return buf.length;
}

const usedUrls = new Set();
const creditsPath = join(OUT, 'credits.json');
const credits = JSON.parse(readFileSync(creditsPath, 'utf8'));
const report = [];

for (const job of JOBS) {
  const dest = join(OUT, `${job.key}.jpg`);
  let picked = null;
  const tried = [];
  const names = [...job.files];
  try {
    const extra = await search(job.q);
    for (const name of extra) if (!names.includes(name)) names.push(name);
  } catch {
    /* search failed */
  }
  for (const name of names) {
    tried.push(name);
    try {
      const info = await lookup(name);
      if (!info) continue;
      if (!licenseOk(info.license)) continue;
      if (!(info.mime || '').includes('image')) continue;
      if (usedUrls.has(info.pageUrl)) continue;
      picked = info;
      break;
    } catch {
      /* next */
    }
  }
  if (!picked) {
    report.push({ key: job.key, ok: false, reason: 'no licensed file', tried: tried.slice(0, 8) });
    continue;
  }
  try {
    const bytes = await download(picked.thumb, dest);
    usedUrls.add(picked.pageUrl);
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
writeFileSync('/tmp/audit-photos.json', JSON.stringify(report, null, 2));
const failed = report.filter((row) => !row.ok);
console.log(JSON.stringify(report, null, 2));
console.log(`done ${report.filter((r) => r.ok).length}/${report.length} failed ${failed.length}`);
