# ZUI JavaScript 核心库

## Web Component 插槽

声明 `slots` 将直属子内容映射到组件的内容 props。下面示例把 `heading`、默认内容和 `actions` 分别放入标题、正文和操作区；同名标题按顺序组合。

```html:example
<zui-slot-example class="block">
    <strong slot="heading">基本信息</strong>
    <span slot="heading"> · 内容插槽</span>
    <p>正文支持 HTML，原节点和监听器会被保留。</p>
    <label>备注 <input class="border rounded px-2 py-1" value="可以直接编辑"></label>
    <button slot="actions" type="button" class="border rounded px-3 py-1" data-slot-action>已点击 0 次</button>
</zui-slot-example>
```

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
