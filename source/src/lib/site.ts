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

export function absUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const clean = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
  return `${site.url}${clean}`;
}
