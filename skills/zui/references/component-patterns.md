# Component consumption patterns

## CSS and markup

- Start with the semantic element the interaction requires, then add verified ZUI component and utility classes.
- Use public utility names as they appear in the installed CSS or matching documentation. ZUI's source repository uses a leading `-` for internal Tailwind `@apply`; consumer HTML normally uses the emitted unprefixed classes. Verify unusual builds.
- Prefer documented CSS variables for theme overrides. Scope overrides to the application or component boundary and retain a fallback value.
- Avoid copying documentation-only wrappers such as `<Example>`, `<ZUI>`, or `<Props>` into application code.

## Vanilla components

Use the constructor, static helper, instance query, update method, events, and destroy method documented for that exact component. A common shape is:

```js
const instance = new Widget(element, options);
instance.render?.(nextOptions);
instance.destroy();
```

This is a shape, not a universal API contract. Verify whether the component uses `render`, `setOptions`, `show`, `open`, another method, or no update API. Avoid initializing a non-multi-instance component twice on the same element. Use a verified `get`, `query`, or `ensure` method when the release provides it.

Treat the host's descendants as ZUI-owned when the component renders them. Keep application state outside that subtree and drive changes through options or public methods.

## Declarative attributes

Current ZUI 3 conventions include:

- `zui-create="name"` to create a component during a scan;
- `zui-create` plus `zui-create-<name>="{...}"` for named options;
- `zui-toggle="name"` and `zui-toggle-<name>="{...}"` for supported click/hover toggles;
- `zui-on-<event>` for supported global event expressions;
- `zui-init` for initialization code.

Verify the component name, supported toggle behavior, option parsing, and scan API in the installed version. Initial scanning commonly happens once after page readiness; initialize newly inserted descendants with the release's public scan helper, often `$(container).zuiInit()`.

Do not use `z-use` or `z-use-*` as initialization syntax. They are instance association markers in current ZUI 3. Treat `data-zui` and `data-on` as deprecated compatibility syntax. Use `data-toggle` only when the target component and installed version still document it.

Declarative option and event strings may be evaluated as JavaScript. Never concatenate untrusted content into `zui-create-*`, `zui-toggle-*`, `zui-on-*`, or `zui-init`. Prefer a constructor with an options object when values originate from users, remote data, or HTML escaping boundaries. Programmatic APIs also work better under a strict CSP that blocks evaluated inline code.

## Preact entries

ZUI 3 internally uses Preact, and some scoped libraries expose a verified `/react` entry containing Preact components. Treat the name `react` as a historical entry label, not proof of React runtime compatibility. Use it directly in a Preact application only after checking its peer/runtime dependencies and types.

For React, Vue, Svelte, Angular, or another renderer, default to a vanilla ZUI instance around an empty host unless the installed package explicitly supports that renderer.

## Theme and language

- Prefer global and component CSS variables documented by the installed build; do not override internal selectors when a public variable exists.
- Let `color-scheme`, dark-mode strategy, and theme scope follow the application rather than introducing a second theme controller.
- Current ZUI 3 derives its initial global language from `<html lang>`, normalizing case and `-` to `_`. A release may also expose `i18n.setCode`, component `lang`, or component `i18n` overrides. Verify these APIs and rerender requirements before implementing live switching.
- Preserve the translation keys and placeholders required by the component. Do not promise fallback behavior absent from the installed release.

## Accessibility

Use native buttons, links, inputs, headings, lists, and dialogs where appropriate. Confirm keyboard activation, arrow-key behavior, Escape handling, focus placement/return, labels, descriptions, live announcements, disabled semantics, and ARIA ownership for interactive components. Test behavior rather than assuming a visual ZUI state class supplies semantics.
