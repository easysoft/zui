# ZUI resources and delivery

## Bundled release

This skill bundles the complete browser runtime from the latest npm release verified when the skill was authored:

- package: `zui@3.0.0`
- published: 2024-07-27
- source tarball and checksums: `assets/vendor/zui-3.0.0/manifest.json`
- license: `assets/vendor/zui-3.0.0/LICENSE`

The runtime directory contains `zui.css`, `zui.js`, `zui.esm.js`, and the `icons/` font files used by the CSS. Source maps are not needed to run generated pages and are intentionally omitted.

## Choose a delivery mode

Use bundled local resources unless the user explicitly requests CDN delivery or the output must avoid copied assets. Local resources make the result portable, deterministic, and usable offline.

Run the scaffold with no CDN flag:

```sh
node <skill-root>/scripts/create-zui-page.mjs --output <empty-directory> --title "Page title"
```

It copies the release to `assets/zui/`. Keep `zui.css` and `icons/` at that relative layout because the stylesheet resolves fonts through `./icons/*`. Do not link a delivered page directly to an absolute path inside the skill installation.

Use the UMD browser bundle for ordinary static pages:

```html
<link rel="stylesheet" href="./assets/zui/zui.css">
<!-- page markup -->
<script src="./assets/zui/zui.js"></script>
```

It exposes the public global object as `window.zui`. Use `zui.esm.js` only when the user asks for native modules and serve the page over HTTP rather than relying on `file://` module behavior.

## CDN mode

Generate a jsDelivr page with:

```sh
node <skill-root>/scripts/create-zui-page.mjs --output <empty-directory> --cdn --title "Page title"
```

The verified, version-pinned URLs for the bundled release are:

```text
https://cdn.jsdelivr.net/npm/zui@3.0.0/dist/zui.css
https://cdn.jsdelivr.net/npm/zui@3.0.0/dist/zui.js
https://unpkg.com/zui@3.0.0/dist/zui.css
https://unpkg.com/zui@3.0.0/dist/zui.js
```

Select unpkg with `--cdn=unpkg`. Use `--zui-version <version>` only when the user requests another CDN version and verify that version's file layout before delivery. Prefer an exact version. Use `latest` only when mutability is explicitly desired and report that choice.

Do not use protocol-relative URLs. Do not copy CDN paths from old examples without checking them; the npm release files live under `dist/zui.css` and `dist/zui.js`.

## Multiple pages

Copy the ZUI release once at the site root. Adjust relative URLs from nested pages or use root-relative URLs when a stable server root exists. Run the validator for every distinct entry page and confirm font requests resolve without 404 responses.

## Updating the bundled release

Treat the manifest as the bundled source of truth. To refresh this skill, query the npm registry, download the published tarball, copy its runtime files and licenses, update every checksum and version reference, then rerun local and CDN forward tests. Never substitute an unpublished repository build for a published release without labeling it clearly.
