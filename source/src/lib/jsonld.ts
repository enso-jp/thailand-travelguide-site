import { site, absUrl } from './site';
import type { Page } from './content';

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
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function pageLd(page: Page) {
  const common = {
    '@context': 'https://schema.org',
    name: page.title,
    alternateName: page.alternateName,
    description: page.description,
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
    headline: page.title,
    description: page.description,
    url: absUrl(page.path),
    mainEntityOfPage: absUrl(page.path),
    image: page.photo ? absUrl(page.photo) : undefined,
    publisher: { '@id': `${site.url}/#organization` },
  };
}

export function jsonLdFor(page: Page) {
  return [organizationLd(), websiteLd(), pageLd(page), faqLd(page), breadcrumbLd(page)].filter(Boolean);
}
