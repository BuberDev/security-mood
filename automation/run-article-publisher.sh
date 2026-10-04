#!/bin/zsh
set -euo pipefail

publisher_repo="${SECURITY_MOOD_PUBLISHER_REPO:-}"
if [[ -z "$publisher_repo" || ! -d "$publisher_repo/.git" ]]; then
  print -u2 "SECURITY_MOOD_PUBLISHER_REPO does not point to an isolated Git checkout."
  exit 1
fi

lock_directory="$(dirname "$publisher_repo")/.publisher-lock"
if ! mkdir "$lock_directory" 2>/dev/null; then
  lock_pid=""
  [[ -f "$lock_directory/pid" ]] && read -r lock_pid < "$lock_directory/pid"
  if [[ -n "$lock_pid" ]] && kill -0 "$lock_pid" 2>/dev/null; then
    print "Publisher already running with PID $lock_pid; skipping duplicate invocation."
    exit 0
  fi
  rm -f "$lock_directory/pid"
  rmdir "$lock_directory"
  mkdir "$lock_directory"
fi
print -r -- "$$" > "$lock_directory/pid"

cleanup_lock() {
  rm -f "$lock_directory/pid"
  rmdir "$lock_directory" 2>/dev/null || true
}
trap cleanup_lock EXIT INT TERM

cd "$publisher_repo"

if [[ -n "$(git status --porcelain)" ]]; then
  print -u2 "Publisher checkout is not clean. Manual review required: $publisher_repo"
  exit 1
fi

git checkout main
git pull --ff-only origin main
npm ci
npm run article:publish
