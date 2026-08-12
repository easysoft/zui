---
name: zui-build
description: Create new standalone ZUI 3 Web pages and small static sites from scratch without requiring an existing project, package installation, or build tool. Use when Codex needs to turn a brief into a runnable landing page, dashboard, admin screen, form, report, prototype, demo, or other Web UI with ZUI as the interface framework; scaffold the bundled latest published ZUI CSS/JS assets by default, optionally use pinned CDN resources, and prefer semantic ZUI markup plus declarative `zui-create`, `zui-toggle`, and `zui-on-*` behavior. Do not use for integrating ZUI into an existing application; use the ZUI consumer integration skill for that case.
---

# Build standalone pages with ZUI

Create a portable static Web project that opens without package installation. Treat the user's intent as the design brief, ZUI as the interface foundation, and the bundled published release as the default runtime.

## Establish the output

1. Read applicable workspace instructions and inspect the requested destination before writing.
2. Default to one responsive static page with `index.html`, `app.css`, and local ZUI assets when the user does not specify a stack.
3. Choose a new empty directory. Never run the scaffold over an existing or non-empty project; it intentionally refuses to overwrite files.
4. If the request is actually to add ZUI to an existing application, stop this workflow and use the separate `$zui` integration skill.

Do not add npm, a framework, a bundler, or a development server dependency unless the user asks. A simple static page is the fastest default and still supports ZUI's full browser bundle.

## Scaffold with bundled resources

Run:

```sh
node <skill-root>/scripts/create-zui-page.mjs \
  --output <empty-page-directory> \
  --title "<page title>" \
  --lang <language-tag>
```

Omit `--lang` to use `zh-CN`. The command copies the bundled ZUI release, including the icon fonts and licenses, into `assets/zui/`.

Use CDN delivery only when the user requests it or the result must not carry local vendor assets:

```sh
node <skill-root>/scripts/create-zui-page.mjs \
  --output <empty-page-directory> \
  --title "<page title>" \
  --cdn
```

Read [references/resources-and-delivery.md](references/resources-and-delivery.md) before selecting CDN, ESM, another ZUI version, multiple pages, or updating the bundled release. Prefer the bundled exact version over network retrieval for speed and reproducibility.

If Node is unavailable, copy `assets/starter/` and `assets/vendor/zui-3.0.0/` manually, preserve the CSS-to-`icons/` layout, replace every `{{TOKEN}}`, and apply the same empty-destination safety rule.

## Turn the starter into the requested interface

Do not deliver the starter unchanged. Replace its information architecture, content, visual direction, sample data, accessible names, and interactions so they serve the user's actual goal. Delete irrelevant sections instead of filling every starter slot.

Read [references/page-quality.md](references/page-quality.md) before making substantive layout or visual decisions. In particular:

- use semantic HTML and verified ZUI component classes for matching controls and structures;
- place page-specific CSS after `zui.css` and build on ZUI color, radius, shadow, and spacing variables;
- keep one clear primary task and a coherent responsive hierarchy;
- make content credible and specific without inventing business claims;
- preserve accessibility, keyboard behavior, focus, contrast, reduced motion, and meaningful states.

Use images only when they materially support the brief. Store output-owned assets locally unless the user requests remote URLs, and give every meaningful image suitable alternative text.

## Prefer declarative ZUI behavior

Choose the smallest working surface in this order:

1. semantic HTML plus ZUI CSS;
2. `zui-create` for a component initialized with the page;
3. `zui-toggle` for click or hover behavior;
4. `zui-on-*` or a small `zui-init` action;
5. imperative `zui.*` code only when state, lifecycle, CSP, dynamic data, or a public method requires it.

Read [references/declarative-zui.md](references/declarative-zui.md) before adding interactive components or dynamically inserted markup. Verify every component name, option, event, method, CSS class, and variable against the bundled release or version-matched official documentation. Do not infer APIs.

Keep evaluated declarative values developer-authored. Never interpolate untrusted user, URL, CMS, or API data into `zui-create-*`, `zui-toggle-*`, `zui-on-*`, or `zui-init` attributes. Use controlled JavaScript when data is dynamic or a strict CSP forbids evaluated declarations.

## Validate the result

Run the deterministic structural and resource check:

```sh
node <skill-root>/scripts/validate-zui-page.mjs --root <page-directory>
```

Then preview the actual page, for example:

```sh
python3 -m http.server 4173 --directory <page-directory>
```

Inspect it in a browser at narrow and wide widths. Exercise the primary flow with pointer and keyboard; verify declared components, focus and dismissal, dynamic initialization, responsive layout, theme behavior, console output, and every local or CDN resource request. Fix discovered problems rather than merely reporting validator success.

Deliver the runnable entry path, resource mode and ZUI version, changed files, validation performed, and any browser behavior that could not be checked. Do not publish or deploy unless the user asks.
