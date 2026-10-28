export const site = {
  name: 'Thailand Travel Guide',
  shortName: 'Thailand Guide',
  domain: 'thailand-travelguide.com',
  url: 'https://thailand-travelguide.com',
  description:
    'Plan a first trip to Thailand with destination pages, monsoon notes, trains, ferries, and district-level nightlife. Facts first, not a pitch.',
  locale: 'en_US',
  themeColor: '#ffffff',
  gaMeasurementId: 'G-XWN3TGDF1V',
} as const;

const STATIC_FILE = /\.[a-z0-9]{2,8}$/i;

/** Internal page href with a trailing slash. Files, hashes, and absolute URLs stay as they are. */
export function pageHref(path: string): string {
  if (!path) return '/';
  if (/^(https?:|mailto:|tel:|data:)/i.test(path)) return path;
  if (path.startsWith('#')) return path;

  const hashIndex = path.indexOf('#');
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const beforeHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;

  const queryIndex = beforeHash.indexOf('?');
  const query = queryIndex >= 0 ? beforeHash.slice(queryIndex) : '';
  let pathname = queryIndex >= 0 ? beforeHash.slice(0, queryIndex) : beforeHash;

  if (!pathname || pathname === '/') return `/${query}${hash}`;
  if (!pathname.startsWith('/')) pathname = `/${pathname}`;
  if (STATIC_FILE.test(pathname)) return `${pathname}${query}${hash}`;
  if (!pathname.endsWith('/')) pathname = `${pathname}/`;
  return `${pathname}${query}${hash}`;
}

export function absUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    try {
      const url = new URL(path);
      if (url.hostname === site.domain || url.hostname === `www.${site.domain}`) {
        url.pathname = pageHref(url.pathname);
        return url.toString();
      }
    } catch {
      return path;
    }
    return path;
  }
  const href = pageHref(path);
  return href.startsWith('/') ? `${site.url}${href}` : href;
}

/** Route key used in page.path and getStaticPaths. Home is `/`; other pages have no trailing slash. */
export function routePath(path: string): string {
  if (!path || path === '/') return '/';
  const clean = path.split('#')[0].split('?')[0].replace(/\/+$/, '');
  return clean.startsWith('/') ? clean : `/${clean}`;
}
