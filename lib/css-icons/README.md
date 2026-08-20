# CSS 图标

## 下拉图标

```html:example
<div class="row items-center bg-warning">
  <span class="caret"></span>
  <span class="caret-up"></span>
  <span class="caret-right"></span>
  <span class="caret-down"></span>
  <span class="caret-left"></span>
</div>
```

## 切换图标

```html:example:flex items-center gap-2
<span class="toggle-icon-collapse"></span>
<span class="toggle-icon-expand"></span>
<button type="button" class="btn is-collapsed"><span class="toggle-icon"></span></button>
<button type="button" class="btn is-expanded"><span class="toggle-icon"></span></button>

<span class="toggle-icon-collapse rounded-full"></span>
<span class="toggle-icon-expand rounded-full"></span>
<button type="button" class="btn is-collapsed"><span class="toggle-icon rounded-full"></span></button>
<button type="button" class="btn is-expanded"><span class="toggle-icon rounded-full"></span></button>
```

## 加载中指示图标

```html:example:flex items-center gap-2
<span class="spinner"></span>
<span class="spinner text-lg"></span>
<span class="spinner text-xl text-primary"></span>
```

## 更多

`.more` 和 `.more-vert` 尺寸固定，不随字号变化。

```html:example:flex items-center gap-2
<span class="more"></span>
<span class="more-vert"></span>
<span class="more-vert text-primary"></span>
```

## 箭头

箭头从父元素继承 `background` 和 `border`，因此必须放在一个自身带背景色和边框的元素中，并由父元素设置定位。

```html:example:flex items-center gap-4
<div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
  <span class="arrow arrow-up" style="left: 50%"></span>
</div>
<div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
  <span class="arrow arrow-down" style="left: 50%"></span>
</div>
<div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
  <span class="arrow arrow-left" style="top: 50%"></span>
</div>
<div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
  <span class="arrow arrow-right" style="top: 50%"></span>
</div>
```

## V 形

```html:example:relative
<span class="chevron-left"></span>
<span class="chevron-right"></span>
<span class="chevron-down"></span>
<span class="chevron-up"></span>
```

## 关闭

```html:example:flex items-center gap-2
<span class="close"></span>
<span class="close text-lg"></span>
<span class="close text-lg text-primary"></span>
```

## 放大镜

```html:example:flex items-center gap-2
<span class="magnifier"></span>
<span class="magnifier text-lg"></span>
<span class="magnifier text-lg text-primary"></span>
```

## 时间

```html:example:flex items-center gap-2
<span class="i-time"></span>
<span class="i-time text-primary"></span>
<span class="i-time text-xl"></span>
```

## 日历

```html:example:flex items-center gap-2
<span class="i-calendar"></span>
<span class="i-calendar text-primary"></span>
<span class="i-calendar text-xl"></span>
```
