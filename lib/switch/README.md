# 开关

## 普通示例

使用组件类 .switch 来获得开关外观。


```html:example: -flex -gap-3 -flex-wrap
<div class="switch">
  <input type="checkbox" checked>
  <label>夜间模式</label>
</div>
```

## 对齐

使用 .text-left 或 .text-right 来更改文字对齐方向。

```html:example: -flex -gap-3 -flex-wrap
<div class="switch text-left">
  <input type="checkbox">
  <label>夜间模式</label>
</div>

<div class="switch text-right">
  <input type="checkbox">
  <label>夜间模式</label>
</div>
```

## 禁用

为 .switch 添加 .disabled 类，或者为 &lt;input&gt; 添加 [disabled] 属性。

```html:example: -flex -gap-3 -flex-wrap
<div class="switch disabled">
  <input type="checkbox" checked>
  <label>夜间模式</label>
</div>

<div class="switch">
  <input type="checkbox" disabled>
  <label>夜间模式</label>
</div>
```
