#!/usr/bin/env node
import { existsSync, writeFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'public/photos');
const UA = 'ThailandTravelGuide/1.0 (https://thailand-travelguide.com; editorial credits)';

const JOBS = [
  { key: 'dish-crab-omelette', files: ['Thai crab omelette.jpg', 'Kai jeow pu.jpg', 'Crab omelette Thailand.jpg'], q: 'Thai crab omelette' },
  { key: 'dish-khao-kha-moo-bkk', files: ['Khao kha mu 2.jpg', 'Stewed pork leg rice Bangkok.jpg'], q: 'Khao kha mu pork leg rice' },
  { key: 'dish-jok', files: ['Joke Thailand.jpg', 'Rice porridge Thailand.jpg', 'Jok mu.jpg'], q: 'Thai jok rice porridge' },
  { key: 'dish-pad-see-ew', files: ['Phat si-io.jpg', 'Pad see ew.jpg', 'Phat si io.jpg'], q: 'Phat si io noodles' },
  { key: 'dish-rad-na', files: ['Rat na.jpg', 'Rad na.jpg', 'Lad na.jpg'], q: 'Rat na Thai noodles' },
  { key: 'dish-pad-kee-mao', files: ['Phat khi mao.jpg', 'Pad kee mao.jpg', 'Drunken noodles Thailand.jpg'], q: 'Phat khi mao drunken noodles' },
  { key: 'dish-green-curry', files: ['Kaeng khiao wan.jpg', 'Green curry Thailand.jpg', 'Gaeng keow wan.jpg'], q: 'Kaeng khiao wan green curry' },
  { key: 'dish-panang', files: ['Phanaeng.jpg', 'Panang curry.jpg', 'Kaeng phanaeng.jpg'], q: 'Panang curry Thailand' },
  { key: 'dish-tom-kha', files: ['Tom kha kai.jpg', 'Tom kha gai.jpg', 'Tom kha.jpg'], q: 'Tom kha kai coconut soup' },
  { key: 'dish-moo-ping', files: ['Moo ping.jpg', 'Mu ping.jpg', 'Thai grilled pork skewer.jpg'], q: 'Moo ping grilled pork' },
  { key: 'dish-khanom-krok', files: ['Khanom krok.jpg', 'Khanom khrok.jpg', 'Coconut pancake Thailand.jpg'], q: 'Khanom krok coconut pancake' },
  { key: 'dish-pa-tong-go', files: ['Youtiao Thailand.jpg', 'Pa thong ko.jpg', 'Patongo.jpg'], q: 'Pa thong ko fried dough Thailand' },
  { key: 'dish-yen-ta-fo', files: ['Yen ta fo.jpg', 'Yentafo.jpg', 'Pink noodle soup Thailand.jpg'], q: 'Yen ta fo noodles' },
  { key: 'dish-bamee', files: ['Bami mu daeng.jpg', 'Ba mi moo daeng.jpg', 'Thai egg noodles red pork.jpg'], q: 'Bamee moo daeng Thailand' },
  { key: 'dish-khao-gaeng', files: ['Khao kaeng.jpg', 'Khao gaeng.jpg', 'Thai curry rice stall.jpg'], q: 'Khao kaeng curry rice Thailand' },
  { key: 'dish-pu-ob', files: ['Pu op wun sen.jpg', 'Crab glass noodles Thailand.jpg', 'Woon sen pu.jpg'], q: 'Pu op wun sen crab noodles' },
  { key: 'dish-khao-kluk-kapi', files: ['Khao khluk kapi.jpg', 'Khao kluk kapi.jpg', 'Shrimp paste fried rice.jpg'], q: 'Khao khluk kapi' },
  { key: 'dish-satay', files: ['Pork satay.jpg', 'Satay Thailand.jpg', 'Thai satay.jpg'], q: 'Thai pork satay' },
  { key: 'dish-tod-mun', files: ['Thot man pla.jpg', 'Tod mun pla.jpg', 'Thai fish cake.jpg'], q: 'Thot man pla fish cake' },
  { key: 'dish-khao-pad', files: ['Khao phat.jpg', 'Thai fried rice.jpg', 'Khao pad.jpg'], q: 'Khao phat Thai fried rice' },
  { key: 'dish-duck-noodle', files: ['Kuai tiao pet.jpg', 'Duck noodle soup Thailand.jpg', 'Ped noodle.jpg'], q: 'Thai duck noodle soup' },
  { key: 'dish-roti-mataba', files: ['Murtabak Thailand.jpg', 'Roti mataba.jpg', 'Mataba.jpg'], q: 'Roti mataba Thailand' },
  { key: 'dish-khanom-buang', files: ['Khanom bueang.jpg', 'Khanom buang.jpg', 'Thai crispy pancake.jpg'], q: 'Khanom bueang Thailand' },
  { key: 'dish-tub-tim-grob', files: ['Thapthim krop.jpg', 'Tub tim krob.jpg', 'Red rubies dessert.jpg'], q: 'Thapthim krop dessert' },
  { key: 'dish-khao-tom', files: ['Khao tom.jpg', 'Thai rice soup.jpg', 'Khao tom pla.jpg'], q: 'Khao tom rice soup Thailand' },
  { key: 'dish-guay-tiew-tom-yum', files: ['Kuai tiao tom yam.jpg', 'Tom yum noodles.jpg', 'Thai tom yum noodle.jpg'], q: 'Kuai tiao tom yam' },
  { key: 'dish-pla-pao', files: ['Pla phao.jpg', 'Salt crust grilled fish Thailand.jpg', 'Pla pao.jpg'], q: 'Pla phao grilled fish Thailand' },
  { key: 'dish-nam-prik-kapi', files: ['Nam phrik kapi.jpg', 'Nam prik kapi.jpg', 'Thai shrimp paste relish.jpg'], q: 'Nam phrik kapi' },
  { key: 'dish-nam-prik-noom', files: ['Nam phrik num.jpg', 'Nam prik noom.jpg', 'Green chili dip Thailand.jpg'], q: 'Nam phrik num Chiang Mai' },
  { key: 'dish-gaeng-hang-lay', files: ['Kaeng hang le.jpg', 'Gaeng hang lay.jpg', 'Hung lay curry.jpg'], q: 'Kaeng hang le pork curry' },
  { key: 'dish-larb-kua', files: ['Larb Northern Thailand.jpg', 'Laab kua.jpg', 'Northern Thai larb.jpg'], q: 'Northern Thai larb kua' },
  { key: 'dish-gaeng-ho', files: ['Kaeng ho.jpg', 'Gaeng ho.jpg', 'Northern Thai leftover curry.jpg'], q: 'Kaeng ho Northern Thai' },
  { key: 'dish-kaeng-khae', files: ['Kaeng khae.jpg', 'Gaeng kae.jpg', 'Northern Thai vegetable curry.jpg'], q: 'Kaeng khae Chiang Mai' },
  { key: 'dish-nam-prik-kha', files: ['Nam phrik kha.jpg', 'Galangal dip Thailand.jpg'], q: 'Nam phrik kha galangal' },
  { key: 'dish-naem', files: ['Naem.jpg', 'Naem sausage.jpg', 'Fermented pork Thailand.jpg'], q: 'Naem Thai fermented pork' },
  { key: 'dish-tam-khanun', files: ['Tam khanun.jpg', 'Jackfruit salad Thailand.jpg'], q: 'Tam khanun jackfruit salad' },
  { key: 'dish-gaeng-om', files: ['Kaeng om.jpg', 'Gaeng om.jpg', 'Northern Thai dill soup.jpg'], q: 'Kaeng om Northern Thai' },
  { key: 'dish-moo-ping-cm', files: ['Mu ping Chiang Mai.jpg', 'Grilled pork skewer Chiang Mai.jpg'], q: 'Mu ping Chiang Mai market' },
  { key: 'dish-khao-niew', files: ['Sticky rice Thailand.jpg', 'Khao niao.jpg', 'Glutinous rice basket Thailand.jpg'], q: 'khao niao sticky rice basket' },
  { key: 'dish-gaeng-pa', files: ['Kaeng pa.jpg', 'Jungle curry Thailand.jpg', 'Gaeng pa.jpg'], q: 'Kaeng pa jungle curry' },
  { key: 'dish-tod-mun-khao-pod', files: ['Thot man khao phot.jpg', 'Corn fritter Thailand.jpg', 'Tod mun khao pod.jpg'], q: 'Thai corn cake thot man' },
  { key: 'dish-sai-krok', files: ['Sai krok Isan.jpg', 'Sour sausage Thailand.jpg', 'Sai krok.jpg'], q: 'Thai sour sausage sai krok' },
  { key: 'dish-bua-loi', files: ['Bua loi.jpg', 'Bua loy.jpg', 'Rice ball coconut milk Thailand.jpg'], q: 'Bua loi dessert Thailand' },
  { key: 'dish-khanom-tuay', files: ['Khanom thuai.jpg', 'Khanom tuay.jpg', 'Coconut pudding cup Thailand.jpg'], q: 'Khanom thuai coconut cup' },
  { key: 'dish-jok-cm', files: ['Congee Chiang Mai.jpg', 'Jok Chiang Mai.jpg'], q: 'Thai rice porridge market' },
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

for (const row of Object.values(credits)) {
  if (row.source) usedUrls.add(row.source);
}

for (const job of JOBS) {
  const dest = join(OUT, `${job.key}.jpg`);
  if (existsSync(dest) && credits[job.key]) {
    report.push({ key: job.key, ok: true, skipped: 'exists' });
    continue;
  }
  let picked = null;
  const names = [...job.files];
  try {
    const extra = await search(job.q);
    for (const name of extra) if (!names.includes(name)) names.push(name);
  } catch {
    /* search failed */
  }
  for (const name of names) {
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
    report.push({ key: job.key, ok: false, reason: 'no licensed file' });
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
writeFileSync('/tmp/dish-photos.json', JSON.stringify(report, null, 2));
const failed = report.filter((row) => !row.ok);
console.log(`dish photos ${report.filter((r) => r.ok).length}/${report.length} failed ${failed.length}`);
for (const row of failed) console.log(`  fail ${row.key} ${row.reason}`);
