import { site, absUrl } from './site';
import type { Page } from './content';
import { formatInline } from './inline';
import { seoDescription, seoTitle } from './seo';

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

export function faqLd(page: Page) {
  if (!page.faqs.length) return null;
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

  if (page.schema === 'City') {
    return {
      ...common,
      '@type': 'City',
      geo: page.geo
        ? { '@type': 'GeoCoordinates', latitude: page.geo.lat, longitude: page.geo.lon }
        : undefined,
      containedInPlace: page.geo?.containedIn,
    };
  }

  if (page.schema === 'TouristDestination') {
    return {
      ...common,
      '@type': 'TouristDestination',
      geo: page.geo
        ? { '@type': 'GeoCoordinates', latitude: page.geo.lat, longitude: page.geo.lon }
        : undefined,
      touristType: 'First-time visitors',
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.published ? page.title : title,
    description,
    url: absUrl(page.path),
    mainEntityOfPage: absUrl(page.path),
    image: page.photo ? absUrl(page.photo) : undefined,
    datePublished: page.published,
    dateModified: page.modified ?? page.published,
    author: page.published ? { '@id': `${site.url}/#organization` } : undefined,
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function jsonLdFor(page: Page) {
  return [organizationLd(), websiteLd(), pageLd(page), faqLd(page), breadcrumbLd(page)].filter(Boolean);
}
