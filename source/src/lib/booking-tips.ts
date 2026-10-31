// Booking tips shown as plain text next to existing booking blocks on the top money pages.
export const HOTEL_TIP = 'Tip: check Trip.com before you book. It runs promos often, and its rates regularly come in under other big booking sites. Rooms tagged Free Cancellation let you lock in a deal and still change plans.';
export const TOUR_TIP = "Tip: book tours and tickets on Klook ahead of time. It's often cheaper than paying at the counter, and the mobile voucher means no queue for a ticket.";

const STAY = ['/bangkok/where-to-stay', '/phuket/where-to-stay', '/chiang-mai/where-to-stay'];
const BOTH = [
  '/itineraries/10-days-classic-thailand',
  '/itineraries/best-14-days',
  '/get-there/bangkok-to-chiang-mai',
  '/get-there/bangkok-to-phuket',
  '/khao-lak/khao-lak-vs-phuket',
  '/itineraries/7-days-phuket-krabi-phi-phi',
  '/itineraries/10-days-gulf-islands-samui-phangan-tao',
];

export function bookingTipsFor(path: string): string[] {
  const p = path.replace(/\/$/, '');
  if (STAY.includes(p)) return [HOTEL_TIP];
  if (BOTH.includes(p)) return [HOTEL_TIP, TOUR_TIP];
  return [];
}
