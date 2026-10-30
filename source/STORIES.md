# Adding a story

Stories live at `/stories/` and are built from one markdown file each.

1. Add a photo to `public/photos/story-<slug>.jpg` (1440x960, licensed, not used anywhere else on the site).
2. Create `src/content/stories/<slug>.md`. The file name becomes the URL: `/stories/<slug>/`.
3. Use this frontmatter:

```yaml
---
title: "Headline, 20 to 90 characters"
seoTitle: "Optional browser title, 30 to 60 characters"
description: "Meta description, 70 to 160 characters."
date: 2026-11-05
category: Festival   # Festival | Season | Entry | Transport | Food | Nature | News
lede: "One or two sentences, 40 to 320 characters."
note: "Optional one line: what was checked and when."
photo: /photos/story-<slug>.jpg
photoAlt: "What the photo shows"
photoCredit: "Photo: Author Name · CC BY-SA 4.0"
related:             # up to 4 internal links
  - { label: "Chiang Mai guide", href: "/chiang-mai" }
stayCity: chiang-mai # optional, a key with a Partner-generated Trip.com link
tourQuery: "Chiang Mai tours" # optional, a key with a Partner-generated Klook link
draft: false
---
```

4. Body: short `##` sections, bullets with **bold lead-ins**, no walls of text, no em dashes. Only verified facts, with dates.
5. Affiliate links come only from `stayCity` and `tourQuery`, which resolve to generated links in `src/lib/partners.ts`. Unknown keys render nothing. Never paste or build affiliate URLs in the body.
6. Run the 7 checks: `check:content`, `audit:content`, `build`, `check:seo`, `check:stay`, `check:photos`, `check:facts`.

The index sorts newest first by `date`. The sitemap and Article JSON-LD are automatic.
