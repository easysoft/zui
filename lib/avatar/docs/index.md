# 头像

头像是用图片、图标或者文字的形式展示用户及其他信息。

## 基本用法

使用 `.avatar` 类获得头像的外观展示，通常用在元素 `<div>` 上。

<Example class="flex gap-4">
  <div class="avatar"><img src="/assets/avatar/avatar.png"></div>
</Example>

```html
<div class="avatar"><img src="/assets/avatar/avatar.png"></div>
```

## 图标头像

配合[图标组件](http://url.com/lib/icon)一起使用时，自动呈现为图标头像。

<Example class="flex gap-4">
  <div class="avatar primary">图标</div>
</Example>

```html
<div class="avatar primary">图标</div>
```

## 文字头像

配合文字一起使用时，呈现为文字头像。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="avatar warning">头像</div>
  <div class="avatar warning">Z</div>
</Example>

```html
<div class="avatar warning">头像</div>
<div class="avatar warning">Z</div>
```

## 头像形状

搭配 CSS 工具类 `rounded-*` 为头像应用不同的圆角样式。

<Example class="flex gap-4 flex-wrap">
  <div class="avatar secondary rounded-none">头像</div>
  <div class="avatar secondary rounded-xs">头像</div>
  <div class="avatar secondary rounded-sm">头像</div>
  <div class="avatar secondary rounded">头像</div>
  <div class="avatar secondary rounded-lg">头像</div>
  <div class="avatar secondary rounded-xl">头像</div>
  <div class="avatar secondary circle">头像</div>
</Example>

```html
<div class="avatar secondary rounded-none">头像</div>
<div class="avatar secondary rounded-xs">头像</div>
<div class="avatar secondary rounded-sm">头像</div>
<div class="avatar secondary rounded">头像</div>
<div class="avatar secondary rounded-lg">头像</div>
<div class="avatar secondary rounded-xl">头像</div>
<div class="avatar secondary circle">头像</div>
```
## 外观类型

配合使用[CSS 工具类](/lib/utilities/)来实现不同头像的外观。下面展示各种工具类的外观效果。

<Example class="flex gap-4 flex-wrap">
  <div class="avatar circle"><img src="/assets/avatar/avatar.png"></div>
  <div class="avatar circle primary">Z</div>
  <div class="avatar circle primary-outline">Z</div>
</Example>

```html
<div class="avatar circle"><img src="/assets/avatar/avatar.png"></div>
<div class="avatar circle primary">Z</div>
<div class="avatar circle primary-outline">Z</div>
```

## 尺寸

除了默认大小，还提供了额外的 4 种预设尺寸。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="avatar size-xs"><img src="/assets/avatar/avatar-1.png"></div>
  <div class="avatar size-sm"><img src="/assets/avatar/avatar-2.png"></div>
  <div class="avatar"><img src="/assets/avatar/avatar-3.png"></div>
  <div class="avatar size-lg"><img src="/assets/avatar/avatar-4.png"></div>
  <div class="avatar size-xl"><img src="/assets/avatar/avatar-5.png"></div>
</Example>

```html
<div class="avatar size-xs"><img src="/assets/avatar/avatar-1.png"></div>
<div class="avatar size-sm"><img src="/assets/avatar/avatar-2.png"></div>
<div class="avatar"><img src="/assets/avatar/avatar-3.png"></div>
<div class="avatar size-lg"><img src="/assets/avatar/avatar-4.png"></div>
<div class="avatar size-xl"><img src="/assets/avatar/avatar-5.png"></div>
```

## CSS 类

头像提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `avatar`      | 实体类 | 元素作为头像组件 |
| `size-xs`      | 修饰类      |   头像使用超小号尺寸 |
| `size-sm`      | 修饰类      |   头像使用小号尺寸 |
| `size-lg`      | 修饰类      |   头像使用大号尺寸 |
| `size-xl`      | 修饰类      |   头像使用超大号尺寸 |
