#!/bin/zsh
set -euo pipefail

publisher_repo="${SECURITY_MOOD_PUBLISHER_REPO:-}"
if [[ -z "$publisher_repo" || ! -d "$publisher_repo/.git" ]]; then
  print -u2 "SECURITY_MOOD_PUBLISHER_REPO does not point to an isolated Git checkout."
  exit 1
fi

lock_directory="$publisher_repo/.publisher-lock"
if ! mkdir "$lock_directory" 2>/dev/null; then
  print "Publisher already running; skipping duplicate invocation."
  exit 0
fi
trap 'rmdir "$lock_directory" 2>/dev/null || true' EXIT

cd "$publisher_repo"

if [[ -n "$(git status --porcelain)" ]]; then
  print -u2 "Publisher checkout is not clean. Manual review required: $publisher_repo"
  exit 1
fi

git checkout main
git pull --ff-only origin main
npm ci
npm run article:publish
