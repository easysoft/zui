#!/usr/bin/env bash
set -euo pipefail

# Install this hook outside the checkout, owned by root. Workflow conditions alone
# cannot protect a persistent runner from a fork that changes its workflow YAML.
python3 - <<'PY'
import json
import os
import sys

repository = 'easysoft/zui'
event = os.environ.get('GITHUB_EVENT_NAME')
ref = os.environ.get('GITHUB_REF', '')
allowed = False
if os.environ.get('GITHUB_REPOSITORY') == repository:
    if event in ('push', 'workflow_dispatch'):
        allowed = ref.startswith('refs/heads/')
    elif event == 'schedule':
        allowed = ref == 'refs/heads/main'
    elif event in ('pull_request', 'workflow_run'):
        with open(os.environ['GITHUB_EVENT_PATH']) as source:
            payload = json.load(source)
        if event == 'pull_request':
            pr = payload.get('pull_request', {})
            allowed = all(pr.get(side, {}).get('repo', {}).get('full_name') == repository for side in ('head', 'base'))
        else:
            run = payload.get('workflow_run', {})
            allowed = (
                run.get('head_repository', {}).get('full_name') == repository
                and run.get('head_branch') == 'main'
                and run.get('event') == 'push'
                and run.get('conclusion') == 'success'
            )
if not allowed:
    print('::error::This runner accepts trusted easysoft/zui branch jobs only.', file=sys.stderr)
    sys.exit(1)
print('Runner policy accepted this trusted repository job.')
PY
