# 折叠

## JS Collapsible

标题和切换按钮使用原生 `<details>` 切换，复用 `.details` 的显隐与过渡样式。标题工具栏保留自身操作。

```html:example
<div id="collapsibleExample"></div>
```

### 仅通过按钮切换

设置 `toggleOnClickHeader: false`，点击标题不切换；Tab 聚焦切换按钮后可按 Enter 或空格操作。

```html:example
<div id="collapsibleButtonOnly"></div>
```

### 受控状态

切换请求触发 `onChange`，本示例由回调更新 `collapsed` 和说明文字。

```html:example
<div id="collapsibleControlled"></div>
```

### 收起时卸载内容

设置 `onlyHideOnCollapsed: false`。点击内容中的计数按钮，再收起并展开，计数会重置。挂载与卸载在原生 `toggle` 事件中更新，卸载模式不保证收起动画。

```html:example
<div id="collapsibleUnmount"></div>
```

## Details（纯 CSS）

默认启用内容展开、收起和箭头旋转动画，添加 `.no-transition` 可禁用动画。系统开启“减少动态效果”时也会禁用动画。

```html:example
<details class="details">
  <summary>标题</summary>
  内容
</details>
```

## 禁用动画

```html:example
<details class="details no-transition">
  <summary>标题</summary>
  <p>点击标题可立即展开或收起内容。</p>
  <p>内容高度和箭头方向会直接切换。</p>
</details>
```

## 面板外观

```html:example
<details class="details panel">
  <summary class="panel-heading">
    <div class="panel-title">
      标题
    </div>
  </summary>
  <div class="panel-body">内容</div>
</details>
```
