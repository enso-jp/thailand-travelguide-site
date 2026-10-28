import credits from '../../public/photos/credits.json';

export const PHOTO_POOL = Object.keys(credits)
  .map((key) => `/photos/${key}.jpg`)
  .sort();

export type Credit = { author: string; license: string; source: string };

export function creditFor(photo?: string): string | undefined {
  if (!photo) return undefined;
  const key = photo.replace(/^\/photos\//, '').replace(/\.[^.]+$/, '');
  const row = (credits as Record<string, Credit>)[key];
  if (!row) return undefined;
  return `Photo: ${row.author} · ${row.license}`;
}

/** Assigns distinct /photos/* files for every image on one page. */
export class UniquePhotos {
  private used = new Set<string>();
  private cursor = 0;

  constructor(reserved: string[] = []) {
    for (const photo of reserved) {
      if (photo) this.used.add(photo);
    }
  }

  has(photo: string): boolean {
    return this.used.has(photo);
  }

  peek(): string[] {
    return [...this.used];
  }

  take(preferred?: string): string {
    const exact = this.takeOrNone(preferred);
    if (exact) return exact;
    while (this.cursor < PHOTO_POOL.length) {
      const next = PHOTO_POOL[this.cursor++];
      if (!this.used.has(next) && !next.includes('/dish-')) {
        this.used.add(next);
        return next;
      }
    }
    const fallback = PHOTO_POOL.find((photo) => !this.used.has(photo) && !photo.includes('/dish-'));
    if (!fallback) {
      throw new Error('PHOTO_POOL exhausted: add more licensed photos to public/photos/');
    }
    this.used.add(fallback);
    return fallback;
  }

  /** Use the preferred file only. Never fall back to an unrelated pool photo. */
  takeOrNone(preferred?: string): string | undefined {
    if (preferred && !this.used.has(preferred) && PHOTO_POOL.includes(preferred)) {
      this.used.add(preferred);
      return preferred;
    }
    return undefined;
  }
}

export function uniqueList(preferred: Array<string | undefined>, reserved: string[] = []): string[] {
  const bag = new UniquePhotos(reserved);
  return preferred.map((photo) => bag.take(photo));
}
