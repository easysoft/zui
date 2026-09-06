# 折叠

## JS Collapsible

```html:example
<div id="collapsibleExample"></div>
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
