import { readFileSync } from 'node:fs';
import { join } from 'node:path';

let paths: Set<string> | undefined;

const key = (path: string) => path.replace(/\/+$/, '') || '/';

/** Paths in src/data/noindex-paths.txt render noindex, follow and stay out of the sitemap. */
export function isHeldFromIndex(path: string): boolean {
  if (!paths) {
    const file = join(process.cwd(), 'src', 'data', 'noindex-paths.txt');
    paths = new Set(
      readFileSync(file, 'utf8')
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('#'))
        .map(key),
    );
  }
  return paths.has(key(path));
}
