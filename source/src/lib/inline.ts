import { pageHref } from './site';

const NETWORK_HOSTS = new Set([
  'vietnam-travelguide.com',
  'www.vietnam-travelguide.com',
  'thailand-travelguide.com',
  'www.thailand-travelguide.com',
]);

const OFFICIAL_HOSTS = new Set([
  'evisa.gov.vn',
  'www.evisa.gov.vn',
  'tdac.immigration.go.th',
  'immigration.go.th',
  'www.immigration.go.th',
]);

const STATIC_FILE = /\.[a-z0-9]{2,8}$/i;
const MARKDOWN_LINK = /\[([^\]]+)\]\((https:\/\/[^)\s]+|\/[a-z0-9][a-z0-9\-\/]*)\)/gi;

function safeAbsoluteHref(raw: string): string | null {
  try {
    const url = new URL(raw);
    if (url.protocol !== 'https:') return null;
    if (url.username || url.password) return null;
    const host = url.hostname.toLowerCase();
    if (NETWORK_HOSTS.has(host)) {
      if (url.pathname && url.pathname !== '/' && !url.pathname.endsWith('/') && !STATIC_FILE.test(url.pathname)) {
        url.pathname += '/';
      }
      return url.toString();
    }
    if (OFFICIAL_HOSTS.has(host)) return url.toString();
    return null;
  } catch {
    return null;
  }
}

/** Turn planner markdown into safe HTML. No raw backticks or `](/` should remain. */
export function formatInline(text: string): string {
  const source = String(text ?? '');
  const parts: string[] = [];
  let last = 0;
  MARKDOWN_LINK.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = MARKDOWN_LINK.exec(source))) {
    parts.push(escapeHtml(source.slice(last, match.index)));
    const label = escapeHtml(match[1]);
    const hrefRaw = match[2];
    if (hrefRaw.startsWith('/')) {
      parts.push(`<a href="${pageHref(hrefRaw)}">${label}</a>`);
    } else {
      const safe = safeAbsoluteHref(hrefRaw);
      if (safe) {
        parts.push(`<a href="${escapeHtml(safe)}" rel="noopener">${label}</a>`);
      } else {
        parts.push(escapeHtml(match[0]));
      }
    }
    last = match.index + match[0].length;
  }
  parts.push(escapeHtml(source.slice(last)));
  return parts
    .join('')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<em>$1</em>');
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const CHIP_HREF: Record<string, string> = {
  Bangkok: '/bangkok',
  'Chiang Mai': '/chiang-mai',
  Phuket: '/phuket',
  'Koh Samui': '/koh-samui',
  Krabi: '/krabi',
  'Koh Phangan': '/koh-phangan',
  'Khao Sok': '/khao-sok',
  'Koh Tao': '/koh-tao',
  'Koh Lanta': '/koh-lanta',
  'Koh Lipe': '/koh-lipe',
  'Khao Lak': '/khao-lak',
  Pai: '/pai',
  'Chiang Rai': '/chiang-rai',
  Sukhothai: '/sukhothai',
  Ayutthaya: '/ayutthaya',
  Kanchanaburi: '/kanchanaburi',
  'Hua Hin': '/hua-hin',
  Pattaya: '/pattaya',
  'Koh Phi Phi': '/koh-phi-phi',
  'Koh Chang': '/koh-chang',
  'Koh Kood': '/koh-kood',
  'Khao Yai': '/khao-yai',
  'When to go': '/plan/when-to-go',
  Attractions: '/attractions',
  'Thai food': '/thai-food',
  Nightlife: '/interests/nightlife',
  'Resort living': '/interests/resort-living',
  Rattanakosin: '/bangkok/rattanakosin',
  Sukhumvit: '/bangkok/sukhumvit',
  Chinatown: '/bangkok/chinatown-yaowarat',
  Nimmanhaemin: '/chiang-mai/nimmanhaemin',
  Chaweng: '/koh-samui/chaweng',
  Lamai: '/koh-samui/lamai',
  'Kata and Karon': '/phuket/kata-and-karon',
  'Kamala and Surin': '/phuket/kamala-and-surin',
  'Rawai and Nai Harn': '/phuket/rawai-and-nai-harn',
};

export function chipHref(label: string, parent?: { name: string; href: string }, pagePath = ''): string | undefined {
  if (label === 'Old City') {
    if (pagePath.startsWith('/chiang-mai')) return pageHref('/chiang-mai/old-city');
    if (pagePath.startsWith('/bangkok')) return pageHref('/bangkok/old-city-rattanakosin');
    return undefined;
  }
  if (CHIP_HREF[label]) return pageHref(CHIP_HREF[label]);
  if (parent && label === parent.name) return pageHref(parent.href);
  return undefined;
}
