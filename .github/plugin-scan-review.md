# Plugin scanner review

Reviewed on 2026-09-07 for [awesome-ai-plugins#241](https://github.com/hashgraph-online/awesome-ai-plugins/pull/241), using HOL Plugin Scanner 2.0.1116 and Cisco skill scanner 2.0.14 with the balanced policy. The unmodified source at `f674cd2e6e` reproduced the remote result: score 72/100, 3 critical and 17 high findings.

## Workflow remediation

All Actions are pinned to full commit SHAs. Checkouts do not persist credentials. Main documentation is built in the read-only checks workflow; deployment downloads only the `docs-main-site` artifact from that exact successful run. The deployment additionally requires a push to `main` in the same repository. Dev documentation also has separate read-only build and write-enabled publish jobs. Neither publish job checks out or executes project source.

## Reviewed findings

The scanner identifies potentially dangerous primitives without tracking their inputs or execution environment. These findings describe capabilities required by this UI library and its local tooling; they do not establish command injection or data exfiltration in the reviewed uses.

| Exact files | Rules | Review basis |
| --- | --- | --- |
| `lib/core/src/helpers/raw-data.ts`, `lib/core/src/helpers/run-js.ts` | `DANGEROUS_DYNAMIC_EXECUTION` | These are the explicit browser expression/script APIs used by developer-authored declarative attributes. `parseRawData` evaluates only the explicit `RAWJS` format; ordinary Ajax JSON uses `response.json()`. Untrusted strings must never be passed to these APIs or inserted into evaluated attributes. |
| `skills/zui-build/assets/vendor/zui-3.0.0/zui.js`, `skills/zui-build/assets/vendor/zui-3.0.0/zui.esm.js` | `COMMAND_INJECTION_JS_FUNCTION_CONSTRUCTOR`, `DANGEROUS_DYNAMIC_EXECUTION`, `DATA_EXFIL_JS_NETWORK` | Published browser runtime assets, copied rather than executed by the Node scaffolder. Their expression APIs have the same trusted-code boundary. Ajax/fetch support is a browser library capability, not a scanner or scaffold upload. The vendor manifest records npm provenance and file SHA-256 values, verified by the scaffolder before copying. |
| `tests/build/distribution.test.ts` | `DANGEROUS_DYNAMIC_EXECUTION` | Executes the locally built or packed UMD bundle in an isolated jsdom test window to verify browser consumption. It does not execute user-provided expressions. |
| `skills/zui/scripts/inspect-zui-project.mjs` | `DATA_EXFIL_JS_FS_ACCESS` | Reads manifests, workspace configuration and source under the selected project, plus ancestor/workspace dependency metadata needed for package resolution. Source traversal skips symbolic links and generated/dependency directories. Output stays on stdout; the script has no network transport or project writes. |
| `skills/zui/scripts/inspect-zui-project.test.mjs` | `DATA_EXFIL_JS_FS_ACCESS` | Writes and removes test fixtures in a newly created temporary directory. |
| `skills/zui-build/scripts/create-zui-page.mjs` | `DATA_EXFIL_JS_FS_ACCESS` | Reads its bundled template, manifest and checksum-verified vendor files, then writes into the explicitly selected empty destination. A non-empty destination is refused. It does not execute the bundled JavaScript or perform network requests. |
| `skills/zui-build/scripts/validate-zui-page.mjs` | `DATA_EXFIL_JS_FS_ACCESS` | Reads the selected page's `index.html` and checks local resource existence. Resource traversal outside the lexical page root is rejected. It does not execute the page, fetch remote references or upload data. |

The consumer-facing trust and CSP restrictions are documented in `skills/zui-build/references/declarative-zui.md` and `skills/zui/references/component-patterns.md`. These exceptions do not certify arbitrary consumers, server-provided scripts, HTML insertion or dynamically assembled declarations as safe.

## Exception maintenance

HOL 2.0.1116 supports exact-path exclusions but not rule-and-location-specific exceptions. `.plugin-scanner.toml` therefore lists only the nine reviewed files above, without directory globs, global disabled rules, severity overrides or a reduced threshold. This suppresses all findings on those exact files, not just the named rules; the limitation is intentional and requires the following guard.

`.github/plugin-scan-reviewed.sha256` pins this configuration and all nine reviewed files. The Plugin security workflow verifies these hashes before running the same scanner action and score/severity thresholds as the catalog. Any file or configuration change fails this check until its behavior and scanner findings are reviewed again. Updating the hashes alone is not a remediation.

To review a changed file, run an unfiltered scan with an empty config outside the repository, inspect the file-level JSON findings and relevant callers, then update the rationale and hashes only if the exception still applies. Preserve vendor provenance and resource checksums. New files remain fully scanned, and workflow files are not excluded. The catalog's centralized scan reads the exclusions; the source repository's Plugin security check additionally enforces the reviewed hashes.

The configured JSON report is uploaded by the workflow even when scanning fails, so future findings have file-level evidence available for review.
