/** In-page plan links on /plan/, /plan/*, and /itineraries/. Hrefs are existing pages. */

export const PLAN_TABS = [
  { id: 'before', label: 'Before you go', href: '/plan/when-to-go' },
  { id: 'learn', label: 'Learn', href: '/plan' },
  { id: 'itineraries', label: 'Itinerary ideas', href: '/itineraries' },
  { id: 'stay', label: 'Accommodation', href: '/bangkok/where-to-stay' },
  { id: 'transport', label: 'Transportation', href: '/get-there' },
  { id: 'living', label: 'Living', href: '/interests/resort-living' },
] as const;

export type PlanTabId = (typeof PLAN_TABS)[number]['id'];

/** Getting-around guides. The tab still links to the /get-there hub. */
const TRANSPORT_PATHS = new Set([
  '/plan/trains-and-ferries',
  '/plan/grab-and-bts',
  '/plan/domestic-flights-and-baggage',
  '/plan/scooters-and-road-rules',
]);

export function showPlanTabBar(path: string): boolean {
  return path === '/plan' || path.startsWith('/plan/') || path === '/itineraries';
}

export function activePlanTab(path: string): PlanTabId | undefined {
  if (path === '/plan') return 'learn';
  if (path === '/itineraries') return 'itineraries';
  if (path === '/plan/when-to-go') return 'before';
  if (path === '/bangkok/where-to-stay') return 'stay';
  if (path === '/get-there' || TRANSPORT_PATHS.has(path)) return 'transport';
  if (path === '/interests/resort-living') return 'living';
  if (path.startsWith('/plan/')) return 'before';
  return undefined;
}
