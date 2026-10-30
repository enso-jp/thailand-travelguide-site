import { site, absUrl } from './site';
import type { Page } from './content';
import { formatInline } from './inline';
import { seoDescription, seoTitle } from './seo';
import { execSync } from 'node:child_process';

// Site launch date (first public edition) and build edition date, used when a page has no explicit dates.
const SITE_PUBLISHED = '2026-10-28';
const BUILD_MODIFIED = (() => {
  try {
    const d = execSync('git log -1 --format=%cs', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
  } catch {}
  return new Date().toISOString().slice(0, 10);
})();

function editorsLd() {
  return {
    '@type': 'Organization',
    name: 'The Beyond Editors',
    url: `${site.url}/about/`,
    parentOrganization: { '@id': `${site.url}/#organization` },
  };
}

function isAttractionPath(path: string) {
  return /^\/attractions\/[^/]+\/?$/.test(path);
}

function visibleText(text: string): string {
  return formatInline(text)
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
}

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.shortName,
    alternateName: [site.name, site.domain],
    url: `${site.url}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${site.url}/icon-512.png`,
      width: 512,
      height: 512,
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Beyond Guide Network',
      url: 'https://thailand-travelguide.com/about/',
      sameAs: [
        'https://thailand-travelguide.com/',
        'https://vietnam-travelguide.com/',
      ],
    },
    publishingPrinciples: 'https://thailand-travelguide.com/about/ratings/',
    unnamedSourcesPolicy: 'https://thailand-travelguide.com/about/',
    sameAs: [
      'https://vietnam-travelguide.com/',
    ],
  };
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.shortName,
    alternateName: [site.name, site.domain],
    url: `${site.url}/`,
    description: site.description,
    inLanguage: 'en',
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function breadcrumbLd(page: Page) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: page.crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absUrl(crumb.href),
    })),
  };
}

// Views that do not render the FAQ list. FAQPage markup must only describe visible Q&A.
const NO_VISIBLE_FAQ = new Set(['/', '/thai-food', '/destinations', '/interests']);

export function faqLd(page: Page) {
  if (!page.faqs.length || NO_VISIBLE_FAQ.has(page.path.replace(/\/+$/, '') || '/')) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map((faq) => ({
      '@type': 'Question',
      name: visibleText(faq.q),
      acceptedAnswer: { '@type': 'Answer', text: visibleText(faq.a) },
    })),
  };
}

export function pageLd(page: Page) {
  const title = seoTitle(page);
  const description = seoDescription(page);
  const common = {
    '@context': 'https://schema.org',
    name: title,
    alternateName: page.alternateName,
    description,
    url: absUrl(page.path),
    image: page.photo ? absUrl(page.photo) : undefined,
  };

  const geo = page.geo
    ? { '@type': 'GeoCoordinates', latitude: page.geo.lat, longitude: page.geo.lon }
    : undefined;
  const containedInPlace = page.geo?.containedIn
    ? { '@type': 'Place', name: page.geo.containedIn }
    : undefined;
  let place: Record<string, unknown> | null = null;

  if (isAttractionPath(page.path)) {
    place = { ...common, '@type': 'TouristAttraction', geo, containedInPlace };
  } else if (page.schema === 'City') {
    place = { ...common, '@type': 'City', geo, containedInPlace };
  } else if (page.schema === 'TouristDestination') {
    place = { ...common, '@type': 'TouristDestination', geo, containedInPlace, touristType: 'First-time visitors' };
  }

  const datePublished = page.published ?? SITE_PUBLISHED;
  const modified = page.modified ?? (page.published && page.published > BUILD_MODIFIED ? page.published : BUILD_MODIFIED);
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: (page.published ? page.title : title).slice(0, 110),
    description,
    url: absUrl(page.path),
    mainEntityOfPage: absUrl(page.path),
    image: page.photo ? absUrl(page.photo) : undefined,
    datePublished,
    dateModified: modified < datePublished ? datePublished : modified,
    inLanguage: 'en',
    author: editorsLd(),
    publisher: { '@id': `${site.url}/#organization` },
    about: place ? { '@type': place['@type'], name: title } : undefined,
  };
  return place ? [place, article] : [article];
}

export function jsonLdFor(page: Page) {
  return [organizationLd(), websiteLd(), ...(page.path === '/' ? [] : pageLd(page)), faqLd(page), breadcrumbLd(page)].filter(Boolean);
}
