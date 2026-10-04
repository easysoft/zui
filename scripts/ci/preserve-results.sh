#!/usr/bin/env bash
set -euo pipefail

# Keep results outside the checkout, which actions/checkout cleans before each job.
zui_results_root="${ZUI_CI_RESULTS_DIR:-$HOME/zui-ci-results}"
zui_result_dir="$zui_results_root/${GITHUB_RUN_ID:?}/${GITHUB_RUN_ATTEMPT:?}/${1:?}"
shift
mkdir -p "$zui_result_dir"
printf '%s\n' "${GITHUB_SHA:?}" > "$zui_result_dir/commit"

zui_paths=()
for zui_path in "$@"; do
    if [[ -e "$zui_path" ]]; then
        zui_paths+=("$zui_path")
    fi
done
if ((${#zui_paths[@]})); then
    tar -czf "$zui_result_dir/results.tar.gz" -- "${zui_paths[@]}"
fi

printf 'Results on runner `%s`: `%s` (commit `%s`). Retained for 14 days.\n' \
    "${RUNNER_NAME:?}" "$zui_result_dir" "$GITHUB_SHA" | tee -a "${GITHUB_STEP_SUMMARY:?}"

# This directory is dedicated to CI results; never clean the runner workspaces.
find "$zui_results_root" -mindepth 1 -maxdepth 1 -type d \
    ! -name "$GITHUB_RUN_ID" -mtime +14 -exec rm -rf -- {} +
