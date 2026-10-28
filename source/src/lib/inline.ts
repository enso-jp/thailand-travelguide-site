/** Turn planner markdown into safe HTML. No raw backticks or `](/` should remain. */
export function formatInline(text: string): string {
  const escaped = escapeHtml(String(text ?? ''));
  return escaped
    .replace(/\[([^\]]+)\]\((\/[a-z0-9][a-z0-9\-\/]*)\)/gi, '<a href="$2">$1</a>')
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
    if (pagePath.startsWith('/chiang-mai')) return '/chiang-mai/old-city';
    if (pagePath.startsWith('/bangkok')) return '/bangkok/old-city-rattanakosin';
    return undefined;
  }
  if (CHIP_HREF[label]) return CHIP_HREF[label];
  if (parent && label === parent.name) return parent.href;
  return undefined;
}
