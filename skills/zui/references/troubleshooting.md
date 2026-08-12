# Troubleshooting

## Styles are missing or wrong

1. Confirm the relevant ZUI CSS entry is imported or linked and successfully loaded.
2. Confirm the component is included in a custom/scoped build.
3. Inspect computed styles for import order, resets, application overrides, CSS modules, scoped styles, shadow DOM boundaries, and CSP/network failures.
4. Verify class names against the installed CSS rather than a different documentation version.
5. Check whether an overlay is being clipped by `overflow`, a containing block, stacking context, or portal configuration before increasing `z-index`.

## An import or constructor is missing

1. Read the installed package's `exports` and declarations.
2. Distinguish named ESM exports, a default export, the UMD global, scoped packages, and custom bundles.
3. Confirm the resolved version and that the component was included in the build.
4. For CDN use, confirm script ordering, HTTP success, MIME type, integrity, and that the code runs after the script.
5. Replace stale deep imports with an exported public path; do not bypass the export map by importing files under `node_modules`.

## Declarative components do not initialize

1. Confirm the JS runtime and target component registration are present.
2. Verify `zui-create`/`zui-toggle` spelling and the exact component name.
3. Check console errors from evaluated option strings and strict CSP restrictions.
4. Remember that the initial scan commonly runs once. Scan the newly inserted containing subtree with the installed version's helper.
5. Do not substitute `z-use-*`; current ZUI 3 adds it after instance creation.

## Instances duplicate, leak, or stop updating

1. Check framework development double mounts, repeated route hooks, and broad rescans.
2. Reuse a documented existing-instance query or `ensure` API when available.
3. Update through `render`, `setOptions`, or the component-specific method actually declared.
4. Call `destroy()` during unmount/replacement and remove application-owned listeners, observers, timers, and pending async work.
5. Stop another renderer from modifying ZUI-owned descendants.

## SSR or hydration fails

If the error mentions `window`, `document`, or DOM globals during server evaluation, move the JS import and initialization behind a client-only boundary. Keep hydration markup stable. Do not solve the issue with a fake DOM global unless the application intentionally runs a full DOM emulator.

## Theme or language changes do not propagate

- Confirm CSS variable scope and whether the component caches computed values.
- Confirm the language code normalization and supported translation map.
- Changing `<html lang>` after ZUI loads may not update an already captured global code. Use the verified language setter and rerender/update affected instances when required by the release.
- Check component-level `lang` or `i18n` overrides before changing global state.

## TypeScript and runtime disagree

Confirm the bundler and TypeScript resolve the same package and condition from `exports`. Inspect duplicate versions, path aliases, workspace links, `moduleResolution`, and stale generated declarations. Avoid fixing a mismatch with `any`; align resolution or use the public API supported by both runtime and types.

## Reduce to a minimal proof

When the failed layer remains unclear, create the smallest reversible local reproduction using the same installed package and bundler: one CSS import, one host, one verified constructor or markup pattern, and explicit cleanup. Compare it with the application path, then remove the temporary proof.
