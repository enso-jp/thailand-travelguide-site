# SEO loop

Use this skill whenever you add or rewrite a page on Thailand Travel Guide.

## Goal

Grow organic sessions that convert to Trip.com stays, flights, trains, and transfers, plus Klook tours, boats, and tickets. Network target: $500 per month, about $16.67 per day. See `research/seo/revenue-plan.md`.

## Every page

1. One H1 that matches the search phrase a first-time planner would type.
2. A lede of two sentences or fewer. Facts first.
3. A FactBar with concise 1-line summary strings. No essays in the bar.
4. FAQPage JSON-LD that answers the same questions on the page.
5. BreadcrumbList that matches visible crumbs.
6. City or TouristDestination on place pages. Article on plan, itinerary, resort, and nightlife pages.
7. Internal links to the next useful page (district, route, itinerary), not a dump of the sitemap.
8. Affiliate rows use `.aff-row` and the helpers in `src/lib/partners.ts`. No raw untagged links for stays.

## Do not

- Put nightlife crawl lists on `/bangkok`.
- Stack Andaman and Gulf islands on a first-week page.
- Use em dashes anywhere. The `check:content` script fails the build if it finds one.
- Invent visa law. Point at official TDAC and Immigration pages in prose, and date-check before publish.

## After you write

1. Run `npm run check:content`.
2. Run `npm run build`.
3. Follow `playbook.md` for the weekly keyword and revenue pass.
