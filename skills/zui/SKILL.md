---
name: zui
description: Use ZUI 3 safely and idiomatically in application projects that consume the framework. Use when Codex needs to detect a project's ZUI setup or version, install or import ZUI, build or refactor UI with ZUI CSS utilities, components, or helpers, integrate vanilla or Preact APIs with React, Vue, Svelte, or another framework, configure themes or languages, work with declarative `zui-*` attributes, or diagnose missing styles, initialization, lifecycle, bundler, and type errors. This skill is for ZUI consumers, not for developing the ZUI repository itself.
---

# ZUI application development

Apply ZUI through the public surface actually available in the user's application. Treat the installed version, package exports, types, and existing project conventions as authoritative; use the bundled references as ZUI 3 guidance, not as a substitute for version-specific evidence.

## Establish the project context

1. Read the applicable repository instructions and inspect nearby application code before editing.
2. Determine whether the project uses ZUI 1, ZUI 3, or an internal/custom build. Do not apply ZUI 3 syntax to ZUI 1.
3. Determine the current consumption mode:
   - downloaded or CDN-provided UMD bundle and global `zui`;
   - full npm package such as `zui`;
   - scoped packages such as `@zui/<name>`;
   - a custom bundle exposing only selected libraries;
   - CSS-only markup, vanilla components, declarative attributes, helpers, or verified Preact entries.
4. Run the bundled inspector when working in a JavaScript/TypeScript project:

```sh
node <skill-root>/scripts/inspect-zui-project.mjs --root <project-root>
```

Use `--json` when structured output is easier to inspect. The inspector discovers workspace manifests when the supplied root is a workspace, follows parent directories to the nearest package-manager context, resolves hoisted packages, and keeps representative source matches when signal volume is high. Supplement the report with targeted `rg` searches and direct reads of relevant files; the script reports signals, not API correctness.

## Resolve facts before choosing an API

Use this evidence order:

1. the user's request and repository instructions;
2. existing working code and project architecture;
3. installed `package.json` exports, declaration files, source maps, and CSS;
4. dependency manifests and lockfiles;
5. official documentation or source matching the installed version;
6. this skill's ZUI 3 baseline references.

Never invent an import path, export name, option, event, method, CSS class, CSS variable, or declarative component name. Inspect it first. Do not edit `node_modules`, rely on private deep imports, or silently change package managers.

Read [references/integration-and-discovery.md](references/integration-and-discovery.md) before adding dependencies, changing imports, choosing CDN/npm/custom-build delivery, or resolving version ambiguity.

## Choose the smallest suitable consumption surface

| Need | Prefer |
| --- | --- |
| Static control or layout | Semantic HTML plus verified ZUI CSS classes |
| Small visual adjustment | Public ZUI utility classes or documented CSS variables |
| Stateful DOM interaction | A verified vanilla constructor or static component method |
| Server-rendered markup with client enhancement | Declarative attributes or a client-only vanilla initializer |
| Preact application | A verified package `/react` entry when it exists |
| React, Vue, Svelte, or another renderer | A vanilla instance mounted through that framework's lifecycle |
| Framework-independent data operation | A verified ZUI helper import |

Prefer CSS-only markup when JavaScript adds no user value. Prefer an existing ZUI component over recreating its behavior, but do not force ZUI onto application-specific logic that has no matching public API.

Read [references/component-patterns.md](references/component-patterns.md) for CSS, vanilla, declarative, theming, language, lifecycle, security, and accessibility rules. Read [references/framework-lifecycle.md](references/framework-lifecycle.md) when a UI framework, SSR, hydration, or client-side routing owns the surrounding DOM.

## Implement within the application

1. Match the project's package manager, module system, TypeScript settings, styling strategy, and component structure.
2. Import the required CSS exactly once at an intentional application boundary. Confirm ordering relative to resets, application overrides, CSS modules, and shadow roots.
3. Use only verified public entries. If the installed full package and scoped packages expose different subpaths, keep their import forms distinct.
4. Keep renderer ownership clear. Once a ZUI component owns a host's descendants, update it through its public API rather than mutating those descendants from another renderer.
5. Create browser components only after the host element exists. Reuse or update an existing instance when supported, and call `destroy()` or the documented disposer during unmount or replacement.
6. Keep untrusted data out of evaluated declarative attributes. Prefer programmatic options for user-supplied or server-supplied values.
7. Preserve semantic elements, labels, keyboard behavior, focus handling, ARIA relationships, reduced-motion preferences, and readable contrast. ZUI styling does not replace application accessibility requirements.
8. Make the narrowest change that satisfies the request. Do not upgrade ZUI, replace the delivery mode, or migrate unrelated components unless the user asks.

## Diagnose systematically

Read [references/troubleshooting.md](references/troubleshooting.md) when styles, exports, globals, initialization, updates, overlays, SSR, language, or cleanup behave unexpectedly. Find the first failed layer—delivery, CSS, registration, DOM timing, options, lifecycle, or layout—before changing code.

## Validate the result

1. Run the project's existing formatter, lint, typecheck, tests, and production build in proportion to the change.
2. Exercise the affected UI in the project's normal browser workflow when available.
3. Verify initial render, primary interaction, disabled/loading/empty/error states when relevant, keyboard and focus behavior, responsive/theme behavior, and cleanup after navigation or unmount.
4. For declarative or routed content, verify both the initial page and dynamically inserted content.
5. Report the detected ZUI version and consumption mode, changed files, validation performed, and any behavior that could not be verified.

If the target is the ZUI source repository itself and the request changes `lib/*`, stop using this consumer workflow and follow that repository's internal ZUI development skills and confirmation gates.
