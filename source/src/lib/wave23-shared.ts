import type { Affiliate, DayPlan, Faq, Page, Portrait } from './content';

export function stay(title: string, kicker: string, body: string, href: string, photo: string, cta = 'Search stays'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'stay' };
}

export function klook(title: string, kicker: string, body: string, href: string, photo: string, cta = 'See tickets'): Affiliate {
  return { title, kicker, body, href, cta, photo, partner: 'klook' };
}

export function hop(
  title: string,
  kicker: string,
  body: string,
  href: string,
  photo: string,
  partner: Affiliate['partner'],
  cta: string,
): Affiliate {
  return { title, kicker, body, href, cta, photo, partner };
}

export type Wave23Spec = {
  path: string;
  title: string;
  crumb: string;
  description: string;
  lede: string;
  facts: [string, string][];
  chips: string[];
  photo: string;
  paragraphs: string[];
  days: [string, string, string][];
  sid: string;
  stitle: string;
  sp: string;
  headers: string[];
  rows: string[][];
  portraits: Portrait[];
  affiliates: Affiliate[];
  faqs: Faq[];
};

function daysOf(rows: [string, string, string][]): DayPlan[] {
  return rows.map(([title, body, photo], i) => ({ n: i + 1, title, body, photo }));
}

export function wave23Page(s: Wave23Spec): Page {
  return {
    path: s.path,
    title: s.title,
    description: s.description,
    lede: s.lede,
    schema: 'Article',
    crumbs: [
      { name: 'Itineraries', href: '/itineraries' },
      { name: s.crumb, href: s.path },
    ],
    facts: s.facts.map(([label, value]) => ({ label, value })),
    chips: s.chips,
    photo: s.photo,
    paragraphs: s.paragraphs,
    days: daysOf(s.days),
    sections: [
      {
        id: s.sid,
        title: s.stitle,
        paragraphs: [s.sp],
        table: { headers: s.headers, rows: s.rows },
      },
    ],
    portraits: s.portraits,
    affiliates: s.affiliates,
    faqs: s.faqs,
  };
}
