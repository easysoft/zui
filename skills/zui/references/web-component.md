# Web Component integration

## Verify availability first

Use this surface only when the installed package or actual bundle exports it. The existence of ZUI source implementations does not imply that every ZUI release or custom build includes them. Check exports, matching CSS, types, registration functions, and browser requirements before changing application markup.

The implemented baseline below is component-owned: shared runtime APIs come from core, while each component package exports its element. Do not invent a separate `@zui/web-components` dependency or assume every `@zui/*` package has a `/web-component` export.

## Registration and imports

After verifying the corresponding entries, the baseline behaves as follows:

| Component | Registration |
| --- | --- |
| Button | `defineButton()` registers `zui-button`; the package exports `ZuiButtonElement` |
| Picker | `definePicker()` registers `zui-picker`; the package exports `ZuiPickerElement` |
| Pager | Its aggregate or `/web-component` entry registers `zui-pager` and exports `ZuiPagerElement`; `/vanilla` and `/react` do not register it |

For a scoped-package application with these exports and matching CSS already available:

```ts
import {defineButton} from '@zui/button';
import {definePicker} from '@zui/picker';
import '@zui/pager';

defineButton();
definePicker();
```

A verified full UMD build exposes the corresponding members through `zui`; ESM exposes named exports. Preserve the application's existing delivery mode and load matching CSS. Do not assume a `definePager()` export exists.

Register on the client before relying on the element API. Repeat calls using the same implementation are safe; a different constructor for an occupied tag is a conflict. Avoid mixing independent bundles containing duplicate runtimes. A changed constructor during HMR requires a full page reload, not swallowing registration errors.

Custom elements initialize through browser connection callbacks. They do not need `zui-create`, scanning, or a second vanilla instance mounted on the custom-element host.

## Attributes, properties, and events

- Use documented attributes for simple values; assign arrays, objects, and functions as JavaScript properties after registration. Do not stringify them into attributes or evaluated declarations.
- Use property assignment or `setOptions()` for supported updates. `options` is a snapshot, unknown options are rejected, and the original vanilla component's options are not automatically element options.
- HTML boolean attributes use presence semantics: `disabled="false"` still disables. Use `.disabled = false` or remove the attribute. Union properties such as Picker's `multiple` and `search` have their own boolean-or-number conversion.
- Baseline numeric attributes normalize finite integers and fall back on invalid input; use the actual element's declared range and default.
- Listen with `addEventListener()` and read typed `CustomEvent.detail`; verify the component's event contract instead of guessing framework event-prop names. For Pager, `zui-change.detail` contains the page information and original event. Programmatic updates do not represent a user change.
- `await element.ready` waits for the first render of the current connection, not every subsequent update. Handle initialization failures; the runtime also emits `zui-error`.

## Frameworks and lifecycle

Render the custom tag as a stable host. Let the element own its Light DOM descendants; do not place renderer-managed children there unless the adapter explicitly supports them. Set complex values through a ref when the framework would otherwise serialize them, and configure custom-tag recognition only if that framework requires it.

Connection initializes the adapter; actual disconnection releases its internal view or native instance. Remove application-owned listeners, observers, timers, and stale references on unmount. Do not call an assumed element `destroy()` method or instantiate the vanilla component inside it. Moves within the same turn preserve the existing instance; remounting after real disconnection starts a new connection lifecycle.

In SSR or hydration flows, register browser components at the appropriate client phase so their DOM ownership does not conflict with hydration. Core's missing-registry import guard does not prove that a whole package supports SSR, or that it server-renders element contents. Verify the selected entry and preserve the existing client-only boundary when needed.

## Forms and accessibility

Baseline Picker requires `ElementInternals` for form association. Its current `.value` is distinct from the `value` attribute/default value: use the property for controlled updates. Verify reset, restore, disabled fieldsets, validation, and submitted `FormData`; avoid adding a duplicate hidden field for the same control.

Keep accessible names on the custom element and verify they reach the real button, link, or combobox. Exercise keyboard activation, focus after popup dismissal, disabled/loading states, and platform support in a real browser. Light DOM requires the component's actual stylesheet in the document; an unstyled custom tag is not evidence of a successful integration.

## Validate the affected contract

Check registration, existing markup upgrade, initial render, property updates, user events, and cleanup through the application's normal navigation flow. When imports or delivery change, run its production build and exercise the built result as well as development mode. Scope checks to the components used; a DOM mock cannot establish native form-association behavior.
