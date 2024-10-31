# ZUI JavaScript 核心库

## `zui-toggle`

```html:example
<button type="button" class="btn primary" zui-toggle="dropdown" zui-toggle-dropdown='{"items": [{"text": "复制"}, {"text": "粘贴"}]}'>下拉菜单</button>
<button type="button" class="btn primary" data-toggle="dropdown" data-items='[{"text": "复制"}, {"text": "粘贴"}]'>下拉菜单</button>
```

## `zui-on`

```html:example
<button
    type="button"
    class="btn"
    zui-on="click ~ alert('Hello World!')"
>Click Me</button>
```

## HList

```html:example
<div id="hList"></div>
```
