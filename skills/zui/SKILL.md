---
name: zui
description: "在已有应用中集成、使用或排查 ZUI 3，直接创建和注册应用自定义组件，或使用已提供的 Web Components；适用于消费方项目，不用于开发 ZUI 源码仓库。"
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
   - CSS-only markup, vanilla components, Web Components, declarative attributes, helpers, or verified Preact entries.
4. When the ZUI setup is unclear in a JavaScript/TypeScript project, use the bundled inspector:

```sh
node <skill-root>/scripts/inspect-zui-project.mjs --root <project-root>
```

Reuse established project context while it remains applicable; refresh it when dependencies, delivery mode, or relevant configuration change. Use `--json` when structured output is easier to inspect. The inspector discovers workspace manifests when the supplied root is a workspace, follows parent directories to the nearest package-manager context, resolves hoisted packages, and keeps representative source matches when signal volume is high. Supplement the report with targeted `rg` searches and direct reads of relevant files; the script reports signals, not API correctness.

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
| Application-specific reusable DOM behavior | An application-local subclass of the verified `Component` base |
| Application-specific reactive view | A verified `ReactComponent` view with `ComponentFromReact` when a vanilla/declarative interface is needed |
| Server-rendered markup with client enhancement | Declarative attributes or a client-only vanilla initializer |
| Preact application | A verified package `/react` entry when it exists |
| Framework-neutral custom tags | A verified Web Component entry and its registration API |
| React, Vue, Svelte, or another renderer | A verified Web Component, or a vanilla instance mounted through that framework's lifecycle |
| Framework-independent data operation | A verified ZUI helper import |

Prefer CSS-only markup when JavaScript adds no user value. Prefer an existing ZUI component over recreating its behavior, but do not force ZUI onto application-specific logic that has no matching public API.

Read [references/web-component.md](references/web-component.md) when using custom elements; availability and registration differ by component and build.

Read [references/component-patterns.md](references/component-patterns.md) for CSS, vanilla, declarative, theming, language, lifecycle, security, and accessibility rules. Read [references/framework-lifecycle.md](references/framework-lifecycle.md) when a UI framework, SSR, hydration, or client-side routing owns the surrounding DOM.

## Create and register application components

Read [references/custom-components.md](references/custom-components.md) when defining a new ZUI component in application code, wrapping a Preact view, or extending an existing component. This is part of the consumer workflow: keep the implementation in the application's existing JS/TS modules or page scripts; it does not require a new ZUI library, extension package, or ZUI rebuild.

- Verify the bases and helpers exposed by the application's runtime, then choose `Component` for DOM behavior or `ReactComponent` for a Preact view. Add a `ComponentFromReact` wrapper with a unique `NAME` and `Component` only when needed for vanilla instances or declarative use.
- Use the existing module imports or global `zui`. In plain JavaScript, verified `zui.jsx` tagged templates support Preact rendering without introducing JSX compilation.
- Keep registration and mounting explicit. A wrapper's `.register()` registers its ZUI name; it does not by itself mount a view, export the class on global `zui`, or register a Preact name. Follow the reference for the requested initialization route.
- Author ZUI Preact views as classes without hooks, using the runtime's signals and lifecycle methods as needed. Preserve parent lifecycle behavior, and clean up application-owned effects and resources.
- Validate the component's actual creation, option updates, interaction, and disposal in its application host. Do not treat successful registration alone as a working component.

## Implement within the application

1. Match the project's package manager, module system, TypeScript settings, styling strategy, and component structure.
2. Import the required CSS exactly once at an intentional application boundary. Confirm ordering relative to resets, application overrides, CSS modules, and shadow roots.
3. Use only verified public entries. If the installed full package and scoped packages expose different subpaths, keep their import forms distinct.
4. Keep renderer ownership clear. Once a ZUI component owns a host's descendants, update it through its public API rather than mutating those descendants from another renderer.
5. Create vanilla instances after mount and call their documented disposer during unmount. Web Components initialize on connection and clean up on disconnection; update their properties and remove application-owned listeners without assuming an element exposes `destroy()`.
6. Keep untrusted data out of evaluated declarative attributes. Prefer programmatic options for user-supplied or server-supplied values.
7. Preserve semantic elements, labels, keyboard behavior, focus handling, ARIA relationships, reduced-motion preferences, and readable contrast. ZUI styling does not replace application accessibility requirements.
8. Make the narrowest change that satisfies the request. Do not upgrade ZUI, replace the delivery mode, or migrate unrelated components unless the user asks.

## Diagnose systematically

Read [references/troubleshooting.md](references/troubleshooting.md) when styles, exports, globals, initialization, updates, overlays, SSR, language, or cleanup behave unexpectedly. Find the first failed layer—delivery, CSS, registration, DOM timing, options, lifecycle, or layout—before changing code.

## Validate the result

1. Select the project's existing checks that cover the requested change. Fix failures introduced by that change within its authorized scope, then rerun affected checks. Reuse valid results for unchanged work; do not end an implementation task at a first pass with fixable failures.
2. Exercise the affected UI in the project's normal browser workflow when available.
3. Verify initial render, primary interaction, disabled/loading/empty/error states when relevant, keyboard and focus behavior, responsive/theme behavior, and cleanup after navigation or unmount.
4. For declarative or routed content, verify both the initial page and dynamically inserted content.
5. Report the detected ZUI version and consumption mode, changed files, validation performed, and any behavior that could not be verified.

If the target is the ZUI source repository itself and the request changes `lib/*`, stop using this consumer workflow and follow that repository's internal ZUI development skills and confirmation gates.
