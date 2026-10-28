#!/usr/bin/env node
import { createRequire } from 'node:module';
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const EM_DASH = new RegExp(
  `${String.fromCharCode(0x2014)}|${['&', 'mdash;'].join('')}|&#${'8212;'}|&#x${'2014;'}`,
  'i',
);
const EN_CLAUSE = / \u2013 |(?<!\d)\u2013(?!\d)/;
const FILLER =
  /\b(tapestry|symphony|nestled|hidden gem|bustling|vibrant|whether you['’]re a|something for everyone|paradise)\b/i;
const THB_FIGURE = /\d[\d,]*\s*(?:THB|baht)\b|\b(?:THB|baht)\s*\d[\d,]*/i;
const TRANSIT_TIME =
  /\b\d+(?:\.\d+)?\s*(?:to|-)\s*\d+(?:\.\d+)?\s*(?:hours?|hrs?|minutes?|mins?)\b|\b(?:about|under|over)\s+\d+(?:\.\d+)?\s*(?:hours?|hrs?|minutes?|mins?)\b|\b\d+(?:\.\d+)?\s*(?:hours?|hrs?|minutes?|mins?)\b|\b\d+-\d+\s*(?:hours?|hrs?|minutes?|mins?)\b/i;
const WHO_IT_FITS =
  /\b(known for|known as|who it fits|if you|first|for [a-z]|pick|fly|come for|use|land|is the|is a|are a|not a|these are|this is|sleep|stay|fits)\b/i;

const HUBS = new Set([
  '/',
  '/destinations',
  '/itineraries',
  '/plan',
  '/get-there',
  '/interests',
  '/about',
  '/privacy',
  '/interests/resort-living',
  '/interests/nightlife',
  '/attractions',
]);

const SKIP_MONEY = new Set(['/about', '/privacy']);

const DEPTH_2500 = new Set([
  '/phuket',
  '/chiang-mai',
  '/koh-samui',
  '/krabi',
  '/khao-sok',
  '/koh-phangan',
  '/bangkok/sukhumvit',
  '/bangkok/sukhumvit-thonglor',
  '/bangkok/silom-sathon',
  '/bangkok/silom-and-sathorn',
  '/bangkok/rattanakosin',
  '/bangkok/old-city-rattanakosin',
  '/bangkok/chinatown-yaowarat',
  '/chiang-mai/old-city',
  '/chiang-mai/nimmanhaemin',
  '/resort-living/amanpuri',
  '/resort-living/six-senses-yao-noi',
  '/resort-living/six-senses-samui',
  '/resort-living/capella-bangkok',
  '/resort-living/the-siam',
  '/resort-living/four-seasons-chiang-mai',
  '/resort-living/four-seasons-koh-samui',
  '/resort-living/soneva-kiri',
  '/resort-living/rayavadee',
  '/resort-living/vie-hotel-bangkok',
  '/resort-living/veranda-high-chiang-mai',
  '/resort-living/avista-hideaway-phuket',
  '/interests/nightlife/koh-samui-beach-clubs',
  '/interests/nightlife/sukhumvit-soi-11',
  '/interests/nightlife/phuket-beach-clubs',
  '/interests/nightlife/thonglor-ekkamai',
  '/interests/nightlife/charoenkrung-soi-nana',
]);

const SKIP_AFFILIATES = new Set([
  ...HUBS,
  '/plan/visas-and-tdac',
  '/plan/when-to-go',
  '/plan/monsoon-and-burn-season',
  '/plan/scooters-and-road-rules',
  '/plan/songkran-and-public-holidays',
  '/plan/money-atms-and-promptpay',
  '/plan/esim-and-sim-cards',
]);

const errors = [];

function fail(path, message) {
  errors.push(`${path}: ${message}`);
}

function creditKey(photo) {
  return String(photo)
    .replace(/^\/photos\//, '')
    .replace(/\.[^.]+$/, '');
}

function walkStrings(value, visit) {
  if (typeof value === 'string') visit(value);
  else if (Array.isArray(value)) value.forEach((item) => walkStrings(item, visit));
  else if (value && typeof value === 'object') {
    for (const item of Object.values(value)) walkStrings(item, visit);
  }
}

function pageText(page) {
  const parts = [];
  walkStrings(page, (text) => parts.push(text));
  return parts.join('\n');
}

function visibleText(page) {
  const parts = [];
  const skip = new Set(['href', 'stayHref', 'tourHref']);
  function walk(value, key) {
    if (typeof value === 'string') {
      if (!skip.has(key)) parts.push(value);
      return;
    }
    if (Array.isArray(value)) value.forEach((item) => walk(item, key));
    else if (value && typeof value === 'object') {
      for (const [nextKey, item] of Object.entries(value)) walk(item, nextKey);
    }
  }
  walk(page, '');
  return parts.join('\n');
}

function bodyText(page) {
  const parts = [
    ...(page.paragraphs || []),
    ...(page.sections || []).flatMap((section) => [
      ...(section.paragraphs || []),
      ...(section.table?.headers || []),
      ...(section.table?.rows || []).flat(),
    ]),
    ...(page.days || []).map((day) => `${day.title} ${day.body}`),
    ...(page.faqs || []).map((faq) => `${faq.q} ${faq.a}`),
    ...(page.facts || []).map((fact) => `${fact.label} ${fact.value}`),
  ];
  return parts.join('\n');
}

function photosOf(page) {
  const out = [];
  if (page.photo) out.push(page.photo);
  for (const item of page.portraits || []) if (item.photo) out.push(item.photo);
  for (const item of page.affiliates || []) if (item.photo) out.push(item.photo);
  for (const item of page.days || []) if (item.photo) out.push(item.photo);
  return out;
}

function internalHrefs(page) {
  const hrefs = [];
  for (const crumb of page.crumbs || []) hrefs.push({ kind: 'breadcrumb', href: crumb.href });
  for (const item of page.portraits || []) hrefs.push({ kind: 'PortraitRail', href: item.href });
  for (const tab of page.tabs || []) hrefs.push({ kind: 'tab', href: tab.href });
  for (const section of page.sections || []) {
    walkStrings(section, (text) => {
      for (const match of text.matchAll(/\]\((\/[a-z0-9\-\/]+)\)/gi)) {
        hrefs.push({ kind: 'section', href: match[1] });
      }
    });
  }
  return hrefs;
}

function isInternalPath(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith('/photos/');
}

function isCommercial(page) {
  if (SKIP_AFFILIATES.has(page.path)) return false;
  return (
    page.path.startsWith('/get-there/') ||
    page.path.startsWith('/itineraries/') ||
    page.path.startsWith('/resort-living/') ||
    page.path.startsWith('/interests/nightlife/') ||
    page.path.startsWith('/thai-food') ||
    page.path.startsWith('/attractions/') ||
    page.path.startsWith('/plan/') ||
    page.schema === 'City' ||
    page.schema === 'TouristDestination'
  );
}

function needsKnownForLead(page) {
  return !['/about', '/privacy'].includes(page.path);
}

function decodeAffiliate(url) {
  try {
    const parsed = new URL(url);
    const nested = parsed.searchParams.get('u');
    return nested ? `${url}\n${decodeURIComponent(nested)}` : url;
  } catch {
    return url;
  }
}

async function loadPages() {
  const require = createRequire(import.meta.url);
  const esbuild = await import(pathToFileURL(require.resolve('esbuild')).href);
  const dir = mkdtempSync(join(tmpdir(), 'ttg-audit-'));
  const outfile = join(dir, 'content.mjs');
  try {
    await esbuild.build({
      entryPoints: [join(ROOT, 'src/lib/content.ts')],
      bundle: true,
      format: 'esm',
      platform: 'node',
      outfile,
      logLevel: 'silent',
    });
    const mod = await import(pathToFileURL(outfile).href);
    return mod.allPages();
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

const pages = await loadPages();
if (pages.length < 159) {
  fail('site', `expected 159+ routes, found ${pages.length}`);
}

const paths = new Set(pages.map((page) => page.path));
const credits = JSON.parse(readFileSync(join(ROOT, 'public/photos/credits.json'), 'utf8'));

for (const page of pages) {
  const text = pageText(page);
  const body = bodyText(page);
  const visible = visibleText(page);

  if (EM_DASH.test(text)) fail(page.path, 'em dash (U+2014) is not allowed');
  for (const token of ['11105102', '334225872', '793638', '588978', 'city 62195', 'click-out', 'stays scannable']) {
    if (visible.toLowerCase().includes(token.toLowerCase())) {
      fail(page.path, `visible text must not contain "${token}"`);
    }
  }
  if (EN_CLAUSE.test(text)) fail(page.path, 'en dash used as a clause separator');
  const filler = text.match(FILLER);
  if (filler) fail(page.path, `banned filler "${filler[0]}"`);

  const desc = page.description || '';
  const lede = page.lede || '';
  if (desc.length < 60 || desc.length > 230) {
    fail(page.path, `description must be 60-230 chars (now ${desc.length})`);
  }
  if (lede.length < 70 || lede.length > 280) {
    fail(page.path, `lede must be 70-280 chars (now ${lede.length})`);
  }
  if (needsKnownForLead(page) && desc === lede) {
    fail(page.path, 'lede must not copy the description');
  }
  if (needsKnownForLead(page) && !WHO_IT_FITS.test(lede)) {
    fail(page.path, 'lede must name what this is known for and who it fits');
  }

  if (!page.facts?.length) fail(page.path, 'factBar is empty');
  for (const fact of page.facts || []) {
    if (!String(fact.label || '').trim() || !String(fact.value || '').trim()) {
      fail(page.path, 'factBar has an empty label or value');
    }
    if (String(fact.value).length > 90) fail(page.path, `factBar value is too long: ${fact.label}`);
  }
  if (page.chips && page.chips.length === 0) fail(page.path, 'quickFacts chips are empty');
  if ((page.schema === 'City' || page.schema === 'TouristDestination') && !page.chips?.length) {
    fail(page.path, 'quickFacts chips are required on destination pages');
  }

  if (!SKIP_MONEY.has(page.path) && !THB_FIGURE.test(body) && !TRANSIT_TIME.test(body)) {
    fail(page.path, 'body needs a 2026 THB figure or a transit timing');
  }
  if (DEPTH_2500.has(page.path) && body.length < 2500) {
    fail(page.path, `Wave 13 depth page must be 2500+ chars (now ${body.length})`);
  }
  if (!page.portraits?.length) fail(page.path, 'portraits are empty');
  const days = page.days || [];
  for (let i = 1; i < days.length; i++) {
    if (days[i].photo && days[i].photo === days[i - 1].photo) {
      fail(page.path, `adjacent day cards share ${days[i].photo}`);
    }
  }

  for (const { kind, href } of internalHrefs(page)) {
    if (!isInternalPath(href)) continue;
    const clean = href.replace(/\/$/, '') || '/';
    if (!paths.has(clean) && !paths.has(href)) {
      fail(page.path, `invalid ${kind} href ${href}`);
    }
  }

  for (const photo of new Set(photosOf(page))) {
    if (!photo.startsWith('/photos/')) {
      fail(page.path, `photo path must be under /photos/: ${photo}`);
      continue;
    }
    const file = join(ROOT, 'public', photo.replace(/^\//, ''));
    if (!existsSync(file)) fail(page.path, `missing photo file ${photo}`);
    const key = creditKey(photo);
    if (!credits[key]) fail(page.path, `missing credits.json entry for ${photo} (key ${key})`);
  }

  if (isCommercial(page) && !page.affiliates?.length) {
    fail(page.path, 'commercial page needs partner booking links');
  }
  for (const row of page.affiliates || []) {
    const href = row.href || '';
    const decoded = decodeAffiliate(href);
    const trip = /trip\.com/i.test(decoded);
    const klook = /klook\.com|tp\.media/i.test(decoded);
    if (trip && (!decoded.includes('Allianceid=11105102') || !decoded.includes('SID=334225872'))) {
      fail(page.path, `Trip.com URL missing Allianceid=11105102 or SID=334225872 (${row.title})`);
    }
    if (klook && (!decoded.includes('588978') || !decoded.includes('793638'))) {
      fail(page.path, `Klook/Travelpayouts URL missing 588978 or 793638 (${row.title})`);
    }
    if (!trip && !klook) fail(page.path, `affiliate href is not Trip.com or Klook (${row.title})`);
  }
}

const resortHub = pages.find((page) => page.path === '/interests/resort-living');
if (!resortHub) {
  fail('/interests/resort-living', 'missing hub page');
} else {
  const bangkok = (resortHub.sections || []).find((section) => /bangkok/i.test(section.id || section.title || ''));
  const rows = bangkok?.table?.rows || [];
  if (rows.length !== 5) {
    fail('/interests/resort-living', `Bangkok table must have 5 rows (now ${rows.length})`);
  }
  const last = String(rows[rows.length - 1]?.[0] || '');
  if (!/rosewood/i.test(last)) {
    fail('/interests/resort-living', `Bangkok table must end with Rosewood (now ${last || 'empty'})`);
  }
  const ranked = (resortHub.sections || []).flatMap((section) => (section.table?.rows || []).map((row) => String(row[0] || '')));
  for (const banned of ['Avista Hideaway', 'VIE Hotel', 'VIE MGallery', 'Veranda High']) {
    if (ranked.some((name) => name.includes(banned))) {
      fail('/interests/resort-living', `ranking tables still list ${banned}`);
    }
  }
}

if (pages.length !== 163) {
  fail('site', `expected 163 routes, found ${pages.length}`);
}

if (errors.length) {
  console.error(`audit:content failed (${errors.length} error${errors.length === 1 ? '' : 's'})`);
  for (const err of errors) console.error(`  ${err}`);
  process.exit(1);
}

console.log(`audit:content ok (${pages.length} routes)`);
