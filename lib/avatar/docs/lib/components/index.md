# 头像

头像是用图片、图标或者文字的形式展示用户及具有特殊标识的其他对象。

## 使用方法

使用一个 `<div>` 元素并添加类 `.avatar`，然后将作为图像的图片、文字或图标放置在此元素内。

<Example class="flex gap-4">
  <div class="avatar"><img src="/assets/avatar/avatar.png"></div>
  <div class="avatar"><i class="icon icon-user"></i></div>
  <div class="avatar">Z</div>
</Example>

```html
<div class="avatar"><img src="/assets/avatar/avatar.png"></div>
<div class="avatar"><i class="icon icon-user"></i></div>
<div class="avatar">Z</div>
```

::: tip 提示
当使用文字作为头像时，建议文字数目不要超过 2 个，如果需要显示更多文字进行个性化排版，推荐使用 JavaScript 增强的头像插件。
:::

## 头像形状

搭配 CSS 工具类 `rounded-*` 为头像应用不同的圆角样式。

<Example class="flex gap-4 flex-wrap">
  <div class="avatar rounded-none"><img src="/assets/avatar/avatar-1.png"></div>
  <div class="avatar rounded-xs"><img src="/assets/avatar/avatar-2.png"></div>
  <div class="avatar rounded-sm"><img src="/assets/avatar/avatar-3.png"></div>
  <div class="avatar rounded"><img src="/assets/avatar/avatar-4.png"></div>
  <div class="avatar rounded-lg"><img src="/assets/avatar/avatar-5.png"></div>
  <div class="avatar rounded-xl"><img src="/assets/avatar/avatar-6.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-7.png"></div>
</Example>

```html
<div class="avatar rounded-none"><img src="/assets/avatar/avatar-1.png"></div>
<div class="avatar rounded-xs"><img src="/assets/avatar/avatar-2.png"></div>
<div class="avatar rounded-sm"><img src="/assets/avatar/avatar-3.png"></div>
<div class="avatar rounded"><img src="/assets/avatar/avatar-4.png"></div>
<div class="avatar rounded-lg"><img src="/assets/avatar/avatar-5.png"></div>
<div class="avatar rounded-xl"><img src="/assets/avatar/avatar-6.png"></div>
<div class="avatar circle"><img src="/assets/avatar/avatar-7.png"></div>
```
## 外观类型

当使用文字或图标作为头像时，配合使用[CSS 工具类](/utilities/)来实现不同头像的外观。下面展示各种工具类的外观效果。

<Example class="flex gap-4 flex-wrap">
  <div class="avatar primary">Z</div>
  <div class="avatar primary-pale">Z</div>
  <div class="avatar primary-outline">Z</div>
  <div class="avatar black">Z</div>
</Example>

```html
<div class="avatar primary">Z</div>
<div class="avatar primary-pale">Z</div>
<div class="avatar primary-outline">Z</div>
<div class="avatar black">Z</div>
```

## 尺寸

除了默认大小，还提供了额外的 4 种预设尺寸。

<Example class="space-y-4">
  <div class="flex gap-4 flex-wrap items-end">
    <div class="avatar size-xs"><img src="/assets/avatar/avatar-1.png"></div>
    <div class="avatar size-sm"><img src="/assets/avatar/avatar-2.png"></div>
    <div class="avatar"><img src="/assets/avatar/avatar-3.png"></div>
    <div class="avatar size-lg"><img src="/assets/avatar/avatar-4.png"></div>
    <div class="avatar size-xl"><img src="/assets/avatar/avatar-5.png"></div>
  </div>
  <div class="flex gap-4 flex-wrap items-end">
    <div class="avatar size-xs">X</div>
    <div class="avatar size-sm">S</div>
    <div class="avatar">Z</div>
    <div class="avatar size-lg">LG</div>
    <div class="avatar size-xl">XL</div>
  </div>
</Example>

```html
<div class="avatar size-xs"><img src="/assets/avatar/avatar-1.png"></div>
<div class="avatar size-sm"><img src="/assets/avatar/avatar-2.png"></div>
<div class="avatar"><img src="/assets/avatar/avatar-3.png"></div>
<div class="avatar size-lg"><img src="/assets/avatar/avatar-4.png"></div>
<div class="avatar size-xl"><img src="/assets/avatar/avatar-5.png"></div>
```

## 特殊用法示例

下面演示一些特殊用法。

### 右上角未读标签

[待定]

### 右下角状态标志

[待定]

## CSS 类

头像提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `avatar`      | 实体类 | 元素作为头像组件 |
| `size-xs`      | 工具类      |   头像使用超小号尺寸 |
| `size-sm`      | 工具类      |   头像使用小号尺寸 |
| `size-lg`      | 工具类      |   头像使用大号尺寸 |
| `size-xl`      | 工具类      |   头像使用超大号尺寸 |

## CSS 变量

头像提供了如下 CSS 变量，可进行全局修改：

| CSS 变量名        | 作用           |
| ------------- |:------------- |
| `--avatar-radius`      | 头像默认圆角大小 |
| `--avatar-bg`      | 头像默认背景颜色 |
