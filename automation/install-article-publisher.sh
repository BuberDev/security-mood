#!/bin/zsh
set -euo pipefail

source_repo="$(cd "$(dirname "$0")/.." && pwd)"
remote_url="$(git -C "$source_repo" remote get-url origin)"
runtime_root="${HOME}/Library/Application Support/SecurityMoodPublisher"
runtime_repo="$runtime_root/repo"
launch_agents_directory="${HOME}/Library/LaunchAgents"
plist_path="$launch_agents_directory/com.securitymood.article-publisher.plist"
template_path="$source_repo/automation/com.securitymood.article-publisher.plist"
log_path="$runtime_root/publisher.log"
error_log_path="$runtime_root/publisher-error.log"

mkdir -p "$runtime_root" "$launch_agents_directory"

if [[ -d "$runtime_repo/.git" ]]; then
  git -C "$runtime_repo" pull --ff-only origin main
else
  git clone --branch main --single-branch "$remote_url" "$runtime_repo"
fi

npm --prefix "$runtime_repo" ci
cp "$template_path" "$plist_path"

/usr/libexec/PlistBuddy -c "Set :ProgramArguments:1 $runtime_repo/automation/run-article-publisher.sh" "$plist_path"
/usr/libexec/PlistBuddy -c "Set :EnvironmentVariables:SECURITY_MOOD_PUBLISHER_REPO $runtime_repo" "$plist_path"
/usr/libexec/PlistBuddy -c "Set :StandardOutPath $log_path" "$plist_path"
/usr/libexec/PlistBuddy -c "Set :StandardErrorPath $error_log_path" "$plist_path"

chmod +x "$runtime_repo/automation/run-article-publisher.sh"
plutil -lint "$plist_path"
launchctl bootout "gui/$(id -u)/com.securitymood.article-publisher" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$plist_path"

print "Installed com.securitymood.article-publisher."
print "Schedule: Monday and Thursday at 09:15 local time."
print "Logs: $log_path and $error_log_path"
