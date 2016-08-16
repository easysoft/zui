# 布局容器

布局容器用来包裹栅格系统和页面内容。布局容器能够在水平方向上自动居中，并且设置了左内边距和右内边距，与栅格系统 `.row` 配合使用时能够抵消 `.row` 左右两侧的负数外边距。

<div class="alert alert-warning">由于布局容器已设置内边距，不要在一个布局容器内紧邻包裹另一个布局容器，这样产生额外的内边距。</div>

ZUI 中提供了三种布局容器来适应不同的布局方式：响应式布局、液态化布局、固定宽度布局。

## 响应式布局容器

响应式布局容器会根据页面宽度自动调整容器宽度已方便内容阅读。

```html
<div class="container">
  ...
</div>
```

## 液态化布局容器

液态化布局容器宽度设置为 100%，会占据全部父级容器宽度。

```html
<div class="container-fluid">
  ...
</div>
```

## 固定宽度布局容器

固定宽度布局的宽度为固定值。提供以下 4 种尺寸的固定宽度布局容器：

<template class="table-auto table-bordered"/>

| 类名                   | 宽度   |
|-----------------------|--------|
| `.container-fixed`    | 1160px |
| `.container-fixed-md` | 960px  |
| `.container-fixed-sm` | 740px  |
| `.container-fixed-xs` | 440px  |

```html
<div class="container-fixed">
  ...
</div>
```
