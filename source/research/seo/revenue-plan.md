# Revenue plan

Network target: **$500 per month**, about **$16.67 per day**.

This site is the second Southeast Asia TravelGuide property. It should earn from planning intent, not from a blog of festival recaps.

## Mix

| Partner | What we send | Where it lives | Share of target |
| --- | --- | --- | --- |
| Trip.com stays (Allianceid 11105102, SID 334225872) | City and area hotel searches | Destination pages, itineraries, resort living | 55% ($275 / mo) |
| Trip.com flights | BKK/DMK to HKT, CNX, USM, KBV | Get-there and itinerary book rows | 20% ($100 / mo) |
| Trip.com trains and transfers | SRT 9/10, airport cars at BKK, DMK, HKT, CNX, USM | Plan and get-there | 10% ($50 / mo) |
| Klook via Travelpayouts (source 588978, marker 793638) | Tours, island hops, tickets, rail and ferry | South coasts, Old City, Chiang Mai | 15% ($75 / mo) |

## Daily math

At a $0.40 to $0.80 blended EPC on qualified clicks, $16.67/day needs about 20 to 40 partner clicks. That is roughly 400 to 800 sessions/day once the spine ranks, or fewer if hotel EPC is higher.

Do not chase 400 sessions with thin festival posts. Chase 20 clicks from pages people already need:

1. `/plan/visas-and-tdac`
2. `/plan/when-to-go`
3. `/get-there/bangkok-to-chiang-mai`
4. `/get-there/bangkok-to-phuket`
5. `/itineraries/first-week-7-days`
6. `/itineraries/south-islands-10-days`
7. `/bangkok/sukhumvit-thonglor`
8. `/phuket` and `/koh-samui` stay rows

## Page jobs

- **Hub pages** (`/`, `/destinations`, `/plan`) route. They can carry one stay row. They should not outrank the money pages for "Bangkok to Chiang Mai train".
- **District pages** convert stays. Sukhumvit and riverside should beat a generic Bangkok hotel link.
- **Get-there pages** convert flights, trains, and transfers. Keep the table honest and the book row matching the winning mode.
- **Resort living** converts high EPC stays. Low volume, high value. Do not stuff beach-club nightlife into these pages.
- **Nightlife** is brand and dwell. Put a nearby stay row only.

## Guardrails

- Zero em dashes. `npm run check:content` enforces it.
- No nightlife dump on `/bangkok`.
- One coast per south itinerary, flipped by monsoon.
- Affiliate hrefs only through `src/lib/partners.ts` so IDs stay in one file.
