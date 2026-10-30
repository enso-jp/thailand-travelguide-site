#!/usr/bin/env bash
# Sync the built site and a public copy of the source into a site repo checkout.
# Usage: scripts/sync-site.sh <site-repo-dir>
# Internal files never leave this repo: AGENTS.md, .cursor/, .github/.
# Uses tar only, so it runs on any box without rsync.
set -euo pipefail
SITE="$(cd "${1:?site repo dir}" && pwd)"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
[ -d "$ROOT/dist" ] || { echo "Run npm run build first" >&2; exit 1; }
# Clear everything except the repo, its workflows and the source folder.
find "$SITE" -mindepth 1 -maxdepth 1 ! -name .git ! -name .github ! -name source -exec rm -rf {} +
tar -C "$ROOT/dist" -cf - . | tar -C "$SITE" -xf -
rm -rf "$SITE/source"
mkdir -p "$SITE/source"
tar -C "$ROOT" \
  --exclude=./.git --exclude=./node_modules --exclude=./dist --exclude=./.astro \
  --exclude=./AGENTS.md --exclude=./.cursor --exclude=./.github \
  -cf - . | tar -C "$SITE/source" -xf -
printf 'source/AGENTS.md\nsource/.cursor/\nsource/.github/\nsource/node_modules/\nsource/dist/\nsource/.astro/\n' > "$SITE/.gitignore"
