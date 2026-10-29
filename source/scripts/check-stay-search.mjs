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
    if (st.isDirectory()) walkHtml(full, files);
    else if (name === 'index.html') files.push(full);
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

function stayCityFromPath(path) {
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
  return 'bangkok';
}

if (!existsSync(DIST)) {
  console.error('check-stay-search skipped: dist/ missing');
  process.exit(1);
}

const pages = walkHtml(DIST);
let boxes = 0;

for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const rel = pagePath(file);
  if (!html.includes('data-trip-box')) continue;
  boxes += 1;

  if (/<iframe[^>]+trip\.com\/partners\/ad/i.test(html)) {
    errors.push(`${rel} embeds Trip.com /partners/ad widget`);
  }
  if (/class="[^"]*\bstay-box\b[^"]*"[^>]*>[\s\S]{0,400}data-trip-box/.test(html) || /class="[^"]*\bpanel\b[^"]*\bstay-box\b[^"]*"[^>]*>[\s\S]{0,600}trip-cta/.test(html)) {
    errors.push(`${rel} stay search is nested inside stay-box/panel`);
  }
  const cardCount = (html.match(/data-trip-box/g) || []).length;
  if (cardCount !== 1) {
    errors.push(`${rel} expected 1 stay search card, found ${cardCount}`);
  }
  if (!html.includes('data-trip-search-form')) errors.push(`${rel} missing search form`);
  if (!html.includes('data-trip-city')) errors.push(`${rel} missing Destination`);
  if (!html.includes('data-trip-in')) errors.push(`${rel} missing Check-in`);
  if (!html.includes('data-trip-out')) errors.push(`${rel} missing Check-out`);
  if (!html.includes('data-trip-guests')) errors.push(`${rel} missing Guests / Rooms`);
  if (!/Search hotels/.test(html)) errors.push(`${rel} missing Search hotels button`);

  const json = html.match(/<script type="application\/json" data-trip-links>([\s\S]*?)<\/script>/);
  if (!json) {
    errors.push(`${rel} missing data-trip-links`);
    continue;
  }
  let links;
  try {
    links = JSON.parse(json[1]);
  } catch {
    errors.push(`${rel} data-trip-links is not JSON`);
    continue;
  }
  const expected = stayCityFromPath(rel);
  if (!links[expected]) {
    errors.push(`${rel} links missing city ${expected}`);
  }
  for (const [city, href] of Object.entries(links)) {
    if (typeof href !== 'string') {
      errors.push(`${rel} ${city} link is not a string`);
      continue;
    }
    if (!href.includes('/hotels/list?')) {
      errors.push(`${rel} ${city} is not /hotels/list?: ${href}`);
    }
    if (/\/partners\/ad\//.test(href)) {
      errors.push(`${rel} ${city} opens widget page: ${href}`);
    }
    if (!new URL(href, 'https://www.trip.com').searchParams.get('city')) {
      errors.push(`${rel} ${city} missing city= id`);
    }
  }
  const selected = html.match(/<option value="([^"]+)" selected/)?.[1];
  if (selected && selected !== expected && rel !== '/') {
    errors.push(`${rel} selected ${selected}, expected ${expected}`);
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

console.log(`check-stay-search ok (${boxes} search cards, all /hotels/list, 0 widgets)`);
