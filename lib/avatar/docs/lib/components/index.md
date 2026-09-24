# 头像

头像是用图片、图标或者文字的形式展示用户及具有特殊标识的其他对象。

## 基本使用

为元素并添加类 `.avatar`，然后将作为图像的图片、文字或图标放置在此元素内。

::: tabs

== 示例

<Example class="flex gap-4">
  <div class="avatar"><img src="/assets/avatar/avatar.png" alt="林悦的头像"></div>
  <div class="avatar"><i class="icon icon-user" aria-label="尚未设置头像"></i></div>
  <div class="avatar">林</div>
</Example>

== HTML

```html
<div class="avatar"><img src="/assets/avatar/avatar.png" alt="林悦的头像"></div>
<div class="avatar"><i class="icon icon-user" aria-label="尚未设置头像"></i></div>
<div class="avatar">林</div>
```

:::

::: tip 提示
当使用文字作为头像时，建议文字数目不要超过 2 个，如果需要显示更多文字进行个性化排版，推荐使用 JavaScript 增强的头像插件。
:::

## 头像形状

搭配 CSS 工具类 `rounded-*` 为头像应用不同的圆角样式。

::: tabs

== 示例

<Example class="flex flex-wrap gap-4">
  <div class="rounded-none avatar"><img src="/assets/avatar/avatar-1.png" alt="陈晨的头像"></div>
  <div class="rounded-xs avatar"><img src="/assets/avatar/avatar-2.png" alt="王宁的头像"></div>
  <div class="rounded-sm avatar"><img src="/assets/avatar/avatar-3.png" alt="周敏的头像"></div>
  <div class="rounded avatar"><img src="/assets/avatar/avatar-4.png" alt="李航的头像"></div>
  <div class="rounded-lg avatar"><img src="/assets/avatar/avatar-5.png" alt="何雨的头像"></div>
  <div class="rounded-xl avatar"><img src="/assets/avatar/avatar-6.png" alt="宋佳的头像"></div>
  <div class="rounded-full avatar"><img src="/assets/avatar/avatar-7.png" alt="许舟的头像"></div>
</Example>

== HTML

```html
<div class="rounded-none avatar"><img src="/assets/avatar/avatar-1.png" alt="陈晨的头像"></div>
<div class="rounded-xs avatar"><img src="/assets/avatar/avatar-2.png" alt="王宁的头像"></div>
<div class="rounded-sm avatar"><img src="/assets/avatar/avatar-3.png" alt="周敏的头像"></div>
<div class="rounded avatar"><img src="/assets/avatar/avatar-4.png" alt="李航的头像"></div>
<div class="rounded-lg avatar"><img src="/assets/avatar/avatar-5.png" alt="何雨的头像"></div>
<div class="rounded-xl avatar"><img src="/assets/avatar/avatar-6.png" alt="宋佳的头像"></div>
<div class="rounded-full avatar"><img src="/assets/avatar/avatar-7.png" alt="许舟的头像"></div>
```

:::

## 外观类型

当使用文字或图标作为头像时，配合使用[CSS 工具类](/utilities/)来实现不同头像的外观。下面展示各种工具类的外观效果。


::: tabs

== 常用

<Example class="space-x-4">
  <div class="avatar primary">林</div>
  <div class="avatar primary-pale rounded-xl">林</div>
  <div class="avatar primary-outline rounded-full">林</div>
  <div class="avatar inverse rounded-none">林</div>
</Example>

== 实心

<Example class="space-x-4">
  <div v-for="skin in skinList" class="avatar" :class="skin">林</div>
</Example>

== 轮廓

<Example class="space-x-4">
  <div v-for="skin in skinList" class="avatar" :class="`${skin}-outline`">林</div>
</Example>

== 浅色

<Example class="space-x-4">
  <div v-for="skin in skinList" class="avatar" :class="`${skin}-pale`">林</div>
</Example>

== HTML

```html
<div class="avatar primary">...</div>
```

:::

## 尺寸

除了默认大小，还提供了额外的 4 种预设尺寸，通过 `size-*` 来为头像设置尺寸。

::: tabs

== 示例

<Example class="space-y-4">
  <div class="flex flex-wrap items-end gap-4">
    <div class="avatar size-xs"><img src="/assets/avatar/avatar-1.png" alt="陈晨的头像"></div>
    <div class="avatar size-sm"><img src="/assets/avatar/avatar-2.png" alt="王宁的头像"></div>
    <div class="avatar"><img src="/assets/avatar/avatar-3.png" alt="周敏的头像"></div>
    <div class="avatar size-lg"><img src="/assets/avatar/avatar-4.png" alt="李航的头像"></div>
    <div class="avatar size-xl"><img src="/assets/avatar/avatar-5.png" alt="何雨的头像"></div>
  </div>
  <div class="flex flex-wrap items-end gap-4">
    <div class="avatar size-xs">陈</div>
    <div class="avatar size-sm">王</div>
    <div class="avatar">林</div>
    <div class="avatar size-lg">周敏</div>
    <div class="avatar size-xl">李航</div>
  </div>
</Example>

== HTML

```html
<div class="avatar size-xs"><img src="/assets/avatar/avatar-1.png" alt="陈晨的头像"></div>
<div class="avatar size-sm"><img src="/assets/avatar/avatar-2.png" alt="王宁的头像"></div>
<div class="avatar"><img src="/assets/avatar/avatar-3.png" alt="周敏的头像"></div>
<div class="avatar size-lg"><img src="/assets/avatar/avatar-4.png" alt="李航的头像"></div>
<div class="avatar size-xl"><img src="/assets/avatar/avatar-5.png" alt="何雨的头像"></div>
```
:::

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

## 参考

- [头像组](/lib/components/avatar-group/index.html)

<script setup>
const skinList = 'primary,secondary,success,warning,danger,important,special,gray'.split(',');
</script>
