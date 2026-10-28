import { allPages, type Page } from './content';
import { pageHref } from './site';
import { SIGNATURE_DISHES } from './food-catalog';
import { ATTRACTIONS, isPlacePage } from './place-attractions';

export type SearchGroup =
  | 'Places'
  | 'Attractions'
  | 'Routes'
  | 'Food'
  | 'Interests'
  | 'Practical'
  | 'Resorts'
  | 'Stories';

export type SearchItem = {
  title: string;
  localScript?: string;
  th?: string;
  sub: string;
  group: SearchGroup;
  href: string;
  body: string;
  text: string;
};

function groupFor(page: Page): SearchGroup {
  if (page.path.startsWith('/attractions')) return 'Attractions';
  if (page.path.startsWith('/thai-food')) return 'Food';
  if (page.path.startsWith('/get-there') || page.path.startsWith('/itineraries')) return 'Routes';
  if (page.path.startsWith('/plan')) return 'Practical';
  if (page.path.startsWith('/resort-living') || page.path.startsWith('/interests/resort-living')) return 'Resorts';
  if (page.path.startsWith('/interests')) return 'Interests';
  if (
    page.schema === 'City' ||
    page.schema === 'TouristDestination' ||
    page.path.startsWith('/destinations') ||
    page.path === '/bangkok' ||
    isPlacePage(page.path)
  ) {
    return 'Places';
  }
  return 'Stories';
}

function localFor(page: Page): string | undefined {
  if (page.alternateName && /[^\u0000-\u00ff]/.test(page.alternateName)) return page.alternateName;
  return undefined;
}

export function searchIndex(): SearchItem[] {
  const pages = allPages();
  const items: SearchItem[] = pages.map((page) => {
    const body = [page.lede, ...(page.paragraphs || []), ...(page.facts || []).map((f) => f.value)].join(' ');
    const local = localFor(page);
    return {
      title: page.title,
      localScript: local,
      th: local,
      sub: page.lede,
      group: groupFor(page),
      href: pageHref(page.path),
      body,
      text: `${page.title} ${local || ''} ${page.description} ${body}`,
    };
  });

  for (const dish of SIGNATURE_DISHES) {
    items.push({
      title: dish.title,
      localScript: dish.nameLocal,
      th: dish.nameLocal,
      sub: dish.line,
      group: 'Food',
        href: pageHref(dish.href),
      body: dish.line,
      text: `${dish.title} ${dish.nameLocal} ${dish.line} ${dish.find}`,
    });
  }

  for (const [place, list] of Object.entries(ATTRACTIONS)) {
    for (const row of list) {
      if (items.some((item) => item.href === row.href && item.title === row.name)) continue;
      items.push({
        title: row.name,
        localScript: row.nameLocal,
        th: row.nameLocal,
        sub: row.summary,
        group: 'Attractions',
        href: pageHref(row.href),
        body: `${row.summary} ${row.timeNeeded} ${row.fee}`,
        text: `${row.name} ${row.nameLocal} ${row.summary} ${place}`,
      });
    }
  }

  return items;
}
