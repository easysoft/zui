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

## 常用操作

使用 `currentColor`，边长为 `1em`，随字号缩放。仅图标按钮应在按钮上设置 `aria-label`。

```html:example:flex items-center gap-4
<span class="i-plus" title="添加" aria-hidden="true"></span>
<span class="i-minus" title="减去" aria-hidden="true"></span>
<span class="i-check" title="确认" aria-hidden="true"></span>
<span class="i-edit" title="编辑" aria-hidden="true"></span>
<span class="i-trash" title="删除" aria-hidden="true"></span>
<span class="i-info" title="信息" aria-hidden="true"></span>
<span class="i-first-page" title="首页" aria-hidden="true"></span>
<span class="i-last-page" title="末页" aria-hidden="true"></span>
<span class="i-upload" title="上传" aria-hidden="true"></span>
<span class="i-download" title="下载" aria-hidden="true"></span>
<span class="i-copy" title="复制" aria-hidden="true"></span>
<span class="i-paste" title="粘贴" aria-hidden="true"></span>
<span class="i-menu" title="菜单" aria-hidden="true"></span>
<span class="i-move" title="拖动" aria-hidden="true"></span>
```

## 组件配置

支持 `IconType` 的组件可以用 CSS 描述对象，无需字体库：

```js
{icon: {className: 'i-plus', 'aria-hidden': true}, text: '添加'}
```

复杂图形由组件库自身维护内嵌 SVG；Preact 图标可直接传入 SVG VNode。字符串图标名保持兼容，使用自定义字体名时需要由调用方加载对应字体资源。
