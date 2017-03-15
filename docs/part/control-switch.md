# 开关

## 普通示例

<example>
  <div class="row">
    <div class="col-sm-4">
      <div style="border: 1px solid #ddd; padding: 10px">
        <div class="switch">
          <input type="checkbox">
          <label>夜间模式</label>
        </div>
      </div>
    </div>
  </div>
</example>

```html
<div class="switch">
  <input type="checkbox">
  <label>夜间模式</label>
</div>
```

## 对齐

使用 `.text-left` 或 `.text-right` 来更改文字对齐方向。

<example>
  <div class="row">
    <div class="col-sm-4">
      <div style="border: 1px solid #ddd; padding: 10px">
        <div class="switch text-left">
          <input type="checkbox">
          <label>夜间模式</label>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div style="border: 1px solid #ddd; padding: 10px">
        <div class="switch text-right">
          <input type="checkbox">
          <label>夜间模式</label>
        </div>
      </div>
    </div>
  </div>
</example>

```html
<div class="switch text-left">
  <input type="checkbox">
  <label>夜间模式</label>
</div>
```

```html
<div class="switch text-right">
  <input type="checkbox">
  <label>夜间模式</label>
</div>
```

## 内联样式

使用 `.switch-inline` 让 `.switch` 作为 `inline-block` 展示。

<example>
  <div class="switch switch-inline hl-warning">
    <input type="checkbox">
    <label>夜间模式</label>
  </div>
</example>

```html
<div class="switch switch-inline">
  <input type="checkbox">
  <label>夜间模式</label>
</div>
```

## 禁用

为 `.switch` 添加 `.disabled` 类，或者为 `<input>` 添加 `[disabled]` 属性。

<example>
  <div class="row">
    <div class="col-sm-4">
      <div style="border: 1px solid #ddd; padding: 10px">
        <div class="switch disabled">
          <input type="checkbox" checked>
          <label>夜间模式</label>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div style="border: 1px solid #ddd; padding: 10px">
        <div class="switch">
          <input type="checkbox" disabled>
          <label>夜间模式</label>
        </div>
      </div>
    </div>
  </div>
</example>

```html
<div class="switch disabled">
  <input type="checkbox" checked>
  <label>夜间模式</label>
</div>
```

```html
<div class="switch">
  <input type="checkbox" disabled>
  <label>夜间模式</label>
</div>
```
