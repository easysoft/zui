# Application-local ZUI components

Use this guide to create components inside an existing application. Keep business data, callbacks, styles, and registration in its normal modules or page scripts. The examples describe ZUI 3 public APIs; verify them against the runtime the application actually loads, especially for older or custom bundles.

## Choose the component boundary

| Requirement | Implementation |
| --- | --- |
| Own DOM behavior or enhance server-rendered content | Extend `Component`; use `this.element`, `this.$element`, and `this.options` |
| Render a reactive view or compose ZUI Preact children | Extend `ReactComponent`; use `this.props` and Preact lifecycle methods |
| Mount that view through a constructor or `zui-create` | Extend `ComponentFromReact`, set `static NAME` and `static Component`, then register the wrapper |
| Reuse an existing view | Use its verified `SomeWidget.Component`, `reactComponents.SomeWidget`, or exported Preact entry |
| Expose an HTML custom element | Check the installed Web Component adapter and registration API separately; see [web-component.md](web-component.md) |

`ReactComponent` is ZUI's exported Preact component base, not the React runtime. A view used only inside another Preact view needs no vanilla wrapper or ZUI registration. Reuse composition first; subclass an existing view when its supported methods and lifecycle contract fit the task. Application-specific extension classes are not guaranteed to exist in a standard ZUI bundle.

## Use the application's runtime

For a verified UMD build, obtain only the APIs needed:

```js
const {Component, ReactComponent, ComponentFromReact, jsx, signal, computed} = zui;
```

For an ESM application, use equivalent named imports from its verified public entry, such as `zui` or an installed `@zui/core`. Do not assume every bundle exports these members or mix a second Preact/signals runtime into an existing ZUI bundle. Keep CSS and script loading at the application's established boundary.

`jsx` is an HTM tagged template bound to Preact's `h`, not a string of HTML and not a JSX compiler. Use expressions for values and component constructors:

```js
// Only when this build provides Menu and its Component member.
const MenuView = zui.Menu.Component;
const menu = jsx`<${MenuView} items=${items} onClickItem=${handleClickItem} />`;
```

Pass objects, functions, refs, arrays of VNodes, and conditional VNodes directly through `${...}`. Use stable keys for lists. A project already compiling TSX can keep that form with its Preact configuration. Do not introduce a compiler just to use templates in a plain script.

## DOM component example

This minimal component displays text from options. It starts rendering in `afterInit`, after the base has initialized the instance:

```js
class AppNotice extends zui.Component {
    static NAME = 'AppNotice';

    static DEFAULT = {text: ''};

    afterInit() {
        this.render();
    }

    render(options, reset) {
        super.render(options, reset);
        this.$element.text(this.options.text);
    }
}

AppNotice.register();
```

For resource-owning components, release listeners, timers, observers, effects, and requests in `destroy()`, then call `super.destroy()`. Preserve base behavior when overriding `render`, initialization, or cleanup methods. The base constructor calls `init()` synchronously; subclass fields are initialized only after `super()` returns. Put setup that needs those fields in `afterInit()` or after `super()` in the subclass constructor.

For asynchronous loading, represent loading/error/empty states, invalidate or abort previous requests, and ignore responses after destruction or an options change. Replacing an owned subtree must also dispose its child components. Insert remote HTML only through the application's trusted/sanitized HTML path; do not copy a business example's raw HTML insertion into unrelated consumers.

## Preact view and vanilla wrapper example

This independent example requires the verified `jsx`, `ReactComponent`, `ComponentFromReact`, `signal`, and `computed` exports. State belongs to each view instance:

```js
const {jsx, ReactComponent, ComponentFromReact, signal, computed} = zui;

class AppCounterView extends ReactComponent {
    _count$ = signal(0);

    _doubled$ = computed(() => this._count$.value * 2);

    _increment = () => {
        this._count$.value += 1;
        this.props.onChange?.(this._count$.value);
    };

    render(props) {
        return jsx`<div class="app-counter">
            <span>${props.label}: ${this._count$.value} (${this._doubled$.value})</span>
            <button type="button" class="btn" disabled=${props.disabled}
                onClick=${this._increment}>+1</button>
        </div>`;
    }
}

class AppCounter extends ComponentFromReact {
    static NAME = 'AppCounter';

    static Component = AppCounterView;

    static DEFAULT = {label: 'Count', disabled: false};
}

AppCounter.register();
```

Wrapper options become view props. The baseline wrapper schedules its initial render through `afterInit`; its `.$` view ref can be null immediately after construction. It renders into the host by default and unmounts the Preact tree on `destroy()`. Do not add a second mount in the view or overwrite its descendants with DOM helpers.

For nested components, use the actual Preact constructor, not the vanilla wrapper, inside `jsx`. When the child exposes a needed instance API, use verified `createRef()`, pass `ref=${ref}`, and access `ref.current` only after mount. If consuming a registered Preact name is actually required, verify `registerReactComponent`/`reactComponents`; this is a different registry from the wrapper's `.register()`.

## State, props, and cleanup

- Use class lifecycle methods and the loaded runtime's `signal`, `computed`, `batch`, and `effect` as needed. Do not use Preact hooks, custom hooks, or signals hooks in these ZUI views. This does not change how an outer React/Vue application manages its own lifecycle.
- Read signal `.value` during rendering, derive signal-only values with `computed`, and use `batch` for related writes. Replace arrays, objects, `Map`, and `Set` values instead of mutating them in place; sort a copy if the source is signal state.
- Plain `this.props` is not a signal dependency. Derive props-based values in `render`, or explicitly synchronize the relevant props into signals when props change. A `computed` or `effect` that only reads props does not subscribe to future prop updates.
- Decide whether incoming props are controlled values or initial defaults. `wrapper.render(nextOptions)` updates props; it does not automatically reinitialize instance fields or local signals. When using `render(nextOptions, true)`, the baseline wrapper calls an optional view `resetState(props)`; implement reset semantics only when the component needs them.
- An `effect` runs immediately. Create it only after its inputs are initialized; create DOM-dependent effects after mount. Store and invoke its disposer during unmount. Remove application-owned external listeners, subscriptions, timers, and pending async work there as well.
- When subclassing a concrete view, preserve its parent mount/update/unmount behavior when overriding those methods. Verify override points in the installed implementation; underscore-prefixed methods from an application example are not a general public extension contract.

## Register, instantiate, update, dispose

Choose a stable application-specific `static NAME` that does not collide with built-ins or other application classes. Load the definition and register once at the application/module boundary, before a declarative scan. Avoid redeclaring and registering new constructors on each partial-page update.

In the baseline, `AppCounter.register()` makes the constructor discoverable by ZUI's component registry: `zui.getComponent('AppCounter')` returns the class, and `zui.create('AppCounter', host, options)` can create/reuse an instance. It does **not** create an instance, assign `zui.AppCounter`, install an `appCounter()` Cash/jQuery method, or add `AppCounterView` to `reactComponents`. Keep and use the local class or its module export. Web Component registration additionally requires an explicit adapter/configuration supported by that build; a plain `NAME` is insufficient.

### Programmatic route

After the host has mounted:

```js
const counter = new AppCounter(document.querySelector('#counter'), {
    label: 'Selected',
    onChange: value => console.log(value),
});

// Later, update options without replacing the host.
counter.render({label: 'Items', disabled: true});

// During application unmount, before removing the host.
counter.destroy();
```

Pass remote/user data as options objects. Do not assume registration exports the class globally; other modules should import it from the application module. Use the verified `AppCounter.get(host)` or `ensure` contract when the application may encounter an existing instance, rather than creating duplicates. Baseline `zui.create` reuses an existing single instance without applying new options unless explicitly requested; use its verified update option or call `instance.render(nextOptions)`.

### Declarative route

When the installed build includes the initializer, registration allows this trusted static markup:

```html
<div id="counter-region">
    <div zui-create="appcounter" zui-create-appcounter="{label: 'Items'}"></div>
</div>
```

Load/register `AppCounter` before the initial page scan. For a later inserted fragment, explicitly scan its containing region with the verified initializer, for example:

```js
zui.init(document.querySelector('#counter-region'));
// Equivalent when this runtime installs the Cash helper:
// zui.$('#counter-region').zuiInit();
```

Use one scan route. In the baseline, the initializer searches **descendants**, not the supplied root itself, and schedules construction in an animation frame. Do not assume `AppCounter.get(host)` or its view is ready immediately after `init`; use the verified initialization callback/lifecycle when the application needs the instance.

Registry lookup is case-insensitive, but the scan matches named option keys before that lookup: using `appcounter` consistently in both attributes ensures these options reach `AppCounter`. Do not mix a PascalCase `zui-create` value with a differently cased option key. `z-use-appcounter` is an instance association marker written after construction, not initialization syntax or a custom element tag. Registration alone does not scan the page, and later insertions are not automatically initialized merely because removal cleanup is observed.

Declarative option strings may execute JavaScript. Keep them static/trusted; use programmatic options for dynamic data or a CSP that forbids evaluated declarations. A page should use one initialization owner per host, not both a constructor and a declarative scan.

## Verify in the target application

Exercise the chosen path from its real entry point: runtime load → application definition/registration → host creation → initial view → interaction → option/prop update → teardown. For a partial-page application, repeat insertion and removal and check that effects, event handlers, requests, and child instances do not survive teardown. Test intentional local-state reset separately from ordinary props updates.

Verify actual registry lookup and visible behavior rather than checking for an assumed global export. Use the application's normal checks and browser workflow; report missing APIs or unavailable runtime validation precisely. Do not require a new library package, ZUI-source edits, or a full distribution rebuild to deliver an application component.
