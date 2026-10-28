# Thailand Travel Guide

Static Astro site for [thailand-travelguide.com](https://thailand-travelguide.com). Architecture follows the Vietnam Guide pattern: facts-first pages, FactBar, PortraitRail, `.aff-row` affiliate blocks, and JSON-LD.

## Scripts

- `npm run check:content` validates required routes, affiliate IDs, and a hard ban on em dashes.
- `npm run audit:content` loads all pages and checks leads, FactBars, filler, timings, hrefs, photos, and partner tokens.
- `npm run build` writes the static site to `dist/` (116 pages).

## Partners

Trip.com Allianceid `11105102` SID `334225872`. Klook source `588978` via Travelpayouts marker `793638`. Helpers live in `src/lib/partners.ts`.
