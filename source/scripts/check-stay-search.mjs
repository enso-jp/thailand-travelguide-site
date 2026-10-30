#!/usr/bin/env node
/**
 * Crawl built pages that include the Trip.com stay search card.
 * Fail if the form is nested, missing fields, or opens a widget URL.
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const errors = [];

function walkHtml(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (name === '404') continue;
      walkHtml(full, files);
    } else if (name === 'index.html') files.push(full);
  }
  return files;
}

function pagePath(file) {
  const rel = file.slice(DIST.length).replace(/\\/g, '/').replace(/index\.html$/, '');
  return rel === '/' || rel === '' ? '/' : rel;
}

function pathHasSlug(path, slug) {
  const escaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`).test(path);
}

function stayCityFromPath(path, strict = false) {
  const p = path.toLowerCase();
  const has = (slug) => pathHasSlug(p, slug);
  if (has('koh-lipe') || has('ko-lipe')) return 'koh-lipe';
  if (has('koh-lanta') || has('ko-lanta')) return 'koh-lanta';
  if (has('koh-kood') || has('ko-kood') || has('soneva')) return 'koh-kood';
  if (has('koh-chang') || has('ko-chang')) return 'koh-chang';
  if (has('koh-phangan') || has('phangan')) return 'koh-phangan';
  if (has('koh-tao') || has('ko-tao')) return 'koh-tao';
  if (has('koh-samui') || has('samui')) return 'koh-samui';
  if (has('khao-lak')) return 'khao-lak';
  if (has('khao-sok') || has('cheow') || has('surat-thani')) return 'surat-thani';
  if (has('chiang-rai')) return 'chiang-rai';
  if (/(^|\/)pai(\/|$)/.test(p)) return 'pai';
  if (has('chiang-mai') || has('nimman')) return 'chiang-mai';
  if (has('hua-hin')) return 'hua-hin';
  if (has('pattaya') || has('jomtien')) return 'pattaya';
  if (has('ayutthaya')) return 'ayutthaya';
  if (has('kanchanaburi') || has('erawan')) return 'kanchanaburi';
  if (has('sukhothai')) return 'sukhothai';
  if (has('phuket') || has('patong') || has('kata') || has('karon') || has('kamala') || has('koh-yao') || has('yao-noi') || has('yao-yai') || has('yao')) {
    return 'phuket';
  }
  if (has('krabi') || has('railay') || has('phi-phi') || has('ao-nang')) return 'krabi';
  if (strict) {
    const bangkokAreas = ['bangkok', 'yaowarat', 'chinatown', 'banthat-thong', 'talat-noi', 'wang-lang'];
    return bangkokAreas.some((slug) => has(slug)) ? 'bangkok' : undefined;
  }
  return 'bangkok';
}

if (!existsSync(DIST)) {
  console.error('check-stay-search skipped: dist/ missing');
  process.exit(1);
}

const ALLOWED_WIDGET = 'https://www.trip.com/partners/ad/S20729725?Allianceid=11105102&SID=334804079&trip_sub1=th_search_box';
const EMBED_HTML = '<iframe border="0" src="https://www.trip.com/partners/ad/S20729725?Allianceid=11105102&SID=334804079&trip_sub1=th_search_box" style="width:320px;height:320px" frameborder="0" scrolling="no" style="border:none" id="S20729725"></iframe>';
const CITY_BOXES = {};
for (const m of readFileSync(join(process.cwd(), 'src/lib/trip-searchboxes.ts'), 'utf8').matchAll(/"([a-z-]+)": \{ id: "(S\d+)", embed: ("(?:[^"\\]|\\.)*") \}/g)) {
  CITY_BOXES[m[1]] = JSON.parse(m[3]);
}
if (Object.keys(CITY_BOXES).length !== 20) errors.push(`expected 20 city search boxes, found ${Object.keys(CITY_BOXES).length}`);
const ALLOWED_EMBEDS = new Set([EMBED_HTML, ...Object.values(CITY_BOXES)]);
const cityCounts = {};
const pages = walkHtml(DIST);
let boxes = 0;

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const rel = pagePath(file);
  if (!html.includes('data-trip-box')) continue;
  boxes += 1;

  const widgets = html.match(/<iframe[^>]+trip\.com\/partners\/ad\/[^>]*><\/iframe>/gi) || [];
  if (widgets.length !== 1 || !ALLOWED_EMBEDS.has(widgets[0])) {
    errors.push(`${rel} must embed exactly one allowed Partner search box (found ${widgets.length})`);
  }
  const strictCity = rel === '/' ? undefined : stayCityFromPath(rel, true);
  const want = strictCity ? CITY_BOXES[strictCity] : EMBED_HTML;
  if (!want || !html.includes(want)) errors.push(`${rel} should embed the ${strictCity || 'default'} search box`);
  const key = strictCity || 'default';
  cityCounts[key] = (cityCounts[key] || 0) + 1;
  if (/class="[^"]*\bstay-box\b[^"]*"[^>]*>[\s\S]{0,400}data-trip-box/.test(html) || /class="[^"]*\bpanel\b[^"]*\bstay-box\b[^"]*"[^>]*>[\s\S]{0,600}trip-cta/.test(html)) {
    errors.push(`${rel} stay search is nested inside stay-box/panel`);
  }
  const cardCount = (html.match(/data-trip-box/g) || []).length;
  if (cardCount !== 1) {
    errors.push(`${rel} expected 1 stay search card, found ${cardCount}`);
  }
}

if (boxes < 8) {
  errors.push(`expected stay search on home, place, and food pages; found ${boxes}`);
}

if (errors.length) {
  console.error(`check-stay-search failed (${errors.length})`);
  for (const err of errors.slice(0, 80)) console.error(`  ${err}`);
  if (errors.length > 80) console.error(`  ... ${errors.length - 80} more`);
  process.exit(1);
}

console.log(`check-stay-search ok (${boxes} search cards; ${JSON.stringify(cityCounts)})`);
