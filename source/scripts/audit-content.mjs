#!/usr/bin/env node
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = process.cwd();
const HERE = dirname(fileURLToPath(import.meta.url));

const BANNED = [
  'tapestry',
  'symphony',
  'nestled',
  'hidden gem',
  'bustling',
  'vibrant',
  "whether you're a",
  'something for everyone',
  'paradise',
];

const SKIP_LENGTH = new Set(['/about', '/privacy']);
const SKIP_TIMING = new Set([
  '/',
  '/about',
  '/privacy',
  '/destinations',
  '/plan',
  '/get-there',
  '/interests',
  '/interests/resort-living',
  '/interests/nightlife',
  '/itineraries',
  '/thai-food',
]);

const PARTNER_TOKENS = ['11105102', '334225872', '588978', '793638'];

function flattenText(page) {
  const parts = [
    page.title,
    page.description,
    page.lede,
    ...(page.paragraphs ?? []),
    ...(page.facts ?? []).flatMap((f) => [f.label, f.value]),
    ...(page.chips ?? []),
    ...(page.faqs ?? []).flatMap((f) => [f.q, f.a]),
    ...(page.sections ?? []).flatMap((s) => [s.title, ...(s.paragraphs ?? [])]),
    ...(page.days ?? []).flatMap((d) => [d.title, d.body]),
    ...(page.affiliates ?? []).flatMap((a) => [a.title, a.kicker, a.body, a.cta]),
  ];
  return parts.filter(Boolean).join('\n');
}

function collectHrefs(page) {
  const hrefs = [];
  for (const crumb of page.crumbs ?? []) hrefs.push(crumb.href);
  for (const p of page.portraits ?? []) hrefs.push(p.href);
  for (const tab of page.tabs ?? []) hrefs.push(tab.href);
  return hrefs;
}

function collectPhotos(page) {
  const photos = [];
  if (page.photo) photos.push(page.photo);
  for (const p of page.portraits ?? []) if (p.photo) photos.push(p.photo);
  for (const a of page.affiliates ?? []) if (a.photo) photos.push(a.photo);
  for (const d of page.days ?? []) if (d.photo) photos.push(d.photo);
  return photos;
}

function photoKey(photo) {
  const name = photo.replace(/^\/photos\//, '').replace(/\.[^.]+$/, '');
  return name;
}

function hasTimingOrThb(text) {
  return (
    /\d[\d,]*\s*THB/i.test(text) ||
    /\b\d{1,2}:\d{2}\b/.test(text) ||
    /\b\d+\s*(minute|minutes|hour|hours|night|nights|day|days|stop|stops)\b/i.test(text) ||
    /\b(one|two|three|four|five|six|seven|eight|nine|ten)[\s-]+(minute|minutes|hour|hours|night|nights|day|days|stop|stops)\b/i.test(
      text,
    ) ||
    /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\b/i.test(text) ||
    /\b(November|December|January|February|March|April|June|July|August|September|October)\b/.test(
      text,
    )
  );
}

async function loadPages() {
  const esbuild = await import('esbuild');
  const outDir = join(tmpdir(), `tg-audit-${process.pid}`);
  mkdirSync(outDir, { recursive: true });
  const outfile = join(outDir, 'pages.mjs');
  try {
    await esbuild.build({
      absWorkingDir: ROOT,
      entryPoints: [join(ROOT, 'src/lib/content.ts')],
      bundle: true,
      format: 'esm',
      platform: 'node',
      outfile,
      logLevel: 'silent',
    });
    const mod = await import(pathToFileURL(outfile).href + `?t=${Date.now()}`);
    if (!Array.isArray(mod.pages)) {
      throw new Error('src/lib/content.ts did not export pages[]');
    }
    return mod.pages;
  } finally {
    rmSync(outDir, { recursive: true, force: true });
  }
}

const errors = [];
const pages = await loadPages();
const paths = new Set(pages.map((p) => p.path));

if (pages.length !== 116) {
  errors.push(`expected 116 routes, found ${pages.length}`);
}

const credits = JSON.parse(readFileSync(join(ROOT, 'public/photos/credits.json'), 'utf8'));
const photoFiles = new Set(
  readdirSync(join(ROOT, 'public/photos')).filter((name) => name !== 'credits.json'),
);

const emDash = new RegExp(String.fromCharCode(0x2014));
const enClause = new RegExp(`\\s${String.fromCharCode(0x2013)}\\s`);

for (const page of pages) {
  const text = flattenText(page);
  const loc = page.path;

  if (emDash.test(text)) errors.push(`${loc} contains an em dash`);
  if (enClause.test(text)) errors.push(`${loc} uses an en dash as a clause separator`);

  const lower = text.toLowerCase();
  for (const word of BANNED) {
    if (lower.includes(word)) errors.push(`${loc} banned filler: ${word}`);
  }

  if (!SKIP_LENGTH.has(loc)) {
    if (page.description.length < 60 || page.description.length > 230) {
      errors.push(`${loc} description length ${page.description.length} (need 60-230)`);
    }
    if (page.lede.length < 70 || page.lede.length > 280) {
      errors.push(`${loc} lede length ${page.lede.length} (need 70-280)`);
    }
  }

  if (!page.facts || page.facts.length < 2) {
    errors.push(`${loc} needs a FactBar with at least two facts`);
  }

  if ((page.schema === 'City' || page.schema === 'TouristDestination') && !page.chips?.length) {
    const isHub = loc.split('/').filter(Boolean).length === 1;
    if (isHub && page.schema === 'City' && !page.chips?.length) {
      errors.push(`${loc} destination hub needs chips`);
    }
  }

  if (!SKIP_TIMING.has(loc) && !hasTimingOrThb(text)) {
    errors.push(`${loc} missing 2026 THB figure or transit timing`);
  }

  for (const href of collectHrefs(page)) {
    if (!href || !href.startsWith('/') || href.startsWith('//')) continue;
    const clean = href.replace(/#.*$/, '').replace(/\/$/, '') || '/';
    if (!paths.has(clean) && !paths.has(href)) {
      errors.push(`${loc} broken internal href ${href}`);
    }
  }

  for (const photo of collectPhotos(page)) {
    const file = photo.replace(/^\//, '').replace(/^photos\//, '');
    const filename = photo.split('/').pop();
    if (!photoFiles.has(filename)) {
      errors.push(`${loc} missing photo file ${photo}`);
    }
    const key = photoKey(photo);
    if (!credits[key]) {
      errors.push(`${loc} photo ${photo} has no credits.json key ${key}`);
    }
  }

  if (page.affiliates?.length) {
    const hrefs = page.affiliates.map((a) => a.href || '').join('\n');
    const needsStay = page.affiliates.some((a) => a.partner === 'stay');
    const needsKlook = page.affiliates.some((a) => a.partner === 'klook');
    if (needsStay && (!hrefs.includes('11105102') || !hrefs.includes('334225872'))) {
      errors.push(`${loc} commercial stay links missing Trip.com Allianceid/SID`);
    }
    if (needsKlook && !hrefs.includes('793638') && !hrefs.includes('588978')) {
      errors.push(`${loc} commercial Klook links missing Travelpayouts marker`);
    }
  }
}

const partners = readFileSync(join(ROOT, 'src/lib/partners.ts'), 'utf8');
for (const token of PARTNER_TOKENS) {
  if (!partners.includes(token)) errors.push(`partners.ts missing ${token}`);
}

const unused = HERE;
void unused;

if (errors.length) {
  console.error(`audit:content failed (${errors.length} issue${errors.length === 1 ? '' : 's'})`);
  for (const err of errors) console.error(`  ${err}`);
  process.exit(1);
}

console.log(`audit:content ok (${pages.length} routes)`);
