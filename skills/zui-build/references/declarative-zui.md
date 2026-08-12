# Declarative ZUI patterns

Prefer semantic HTML plus ZUI CSS first. When JavaScript behavior is required, prefer the corresponding `zui-*` declaration. Move to imperative code only for dynamic application state, reusable functions, strict CSP, or public methods that declarations cannot express.

## Create a component during page initialization

Use `zui-create="<component>"` for a single component. Scalar options can use `data-*` attributes:

```html
<label for="date-picker-deadline">截止日期</label>
<div zui-create="datePicker" data-id="deadline" data-default-value="today"></div>
```

For this picker, the documented `id` option produces the inner input ID `date-picker-<id>`, allowing the external label to target the generated control.

Use a component-specific option attribute for structured values:

```html
<nav
  zui-create
  zui-create-nav="{items: [{text: '概览', url: '#overview'}, {text: '设置', url: '#settings'}]}"
></nav>
```

For several components on one element, list names in `zui-create="nameA,nameB"` and provide `zui-create-name-a` / `zui-create-name-b` options using the documented component names. Do not invent a declarative name from a CSS class.

## Trigger behavior from an element

Use `zui-toggle` for behavior initiated by click or hover. Put structured options in `zui-toggle-<component>`:

```html
<button
  class="btn"
  type="button"
  zui-toggle="dropdown"
  zui-toggle-dropdown="{items: [{text: '刷新'}, {text: '导出'}]}"
>
  更多操作
</button>
```

Use the documented trigger element and options. Do not assume every constructor supports toggle behavior.

## Bind a small page event

Use `zui-on-<event>` for short, developer-authored actions:

```html
<button
  class="btn primary"
  type="button"
  zui-on-click="zui.Messager.show('保存成功')"
>
  保存
</button>
```

Use `zui-init` only for a small action that must run after ZUI initializes the page. Move substantial logic to a named function or ordinary JavaScript module.

## Initialize dynamically inserted markup

ZUI scans declarative components once when the initial document becomes ready. After inserting new descendants, initialize their container explicitly:

```js
container.insertAdjacentHTML('beforeend', markup);
zui.$(container).zuiInit({update: true});
```

`zuiInit()` scans descendants of each selected element, not the selected root itself. Wrap or select the parent when the newly inserted root carries `zui-create`.

## Know what not to use

- Treat `z-use` and `z-use-*` as instance association markers, not creation syntax.
- Prefer `zui-create` over deprecated `data-zui`.
- Prefer `zui-on-*` over deprecated `data-on`.
- Prefer `zui-toggle` over `data-toggle` for new pages when the component documents it.
- Do not mix ZUI's documentation-only preview tags into delivered HTML.

## Protect data and CSP

ZUI evaluates structured declaration values and event code as JavaScript. Keep these attributes limited to trusted, developer-authored constants. Never concatenate user input, URL parameters, CMS HTML, API values, or other untrusted data into an evaluated attribute. Pass such data through an imperative constructor or a controlled function instead.

Evaluated declarations can conflict with a strict Content Security Policy that forbids dynamic code evaluation. If strict CSP is required, keep semantic ZUI classes but bind events and instantiate components in ordinary JavaScript. Explain this exception to the declarative-first preference.

Escape HTML attribute values correctly. Use double quotes around the HTML attribute and single quotes inside a short JavaScript expression, or serialize options deliberately; do not build nested quoting by trial and error.

## Preserve accessibility

Declarative initialization does not replace semantic markup. Keep explicit button types, associated labels, landmark and heading order, useful accessible names, keyboard reachability, visible focus, and correct disabled state. Test focus movement and dismissal for overlays instead of assuming the component handles the surrounding page semantics.
