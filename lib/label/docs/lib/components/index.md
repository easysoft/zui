# 标签

标签通常用于对内容进行标记。

## 使用方法

使用 `.label` 类来获得标签的外观和交互体验，通常用在元素 `<span>` 上。

::: tabs

== 示例

<Example>
  <span class="label">标签</span>
</Example>

== HTML

```html
<span class="label">标签</span>
```

:::

## 外观类型

配合丰富的[CSS 工具类](/utilities/)来实现不同标签的外观。

::: tabs

== 常用

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="label primary">主要标签</span>
  <span class="label black rounded-none">黑色标签</span>
  <span class="label dark-outline rounded-full">描边</span>
  <span class="label success-pale">浅色</span>
</Example>

== 实心

<Example class="row flex-wrap gap-3" background="light-circle">
  <span v-for="skin in zui.skin.accent" class="label capitalize" :class="skin">{{skin}}</span>
</Example>

== 灰度

<Example class="row flex-wrap gap-3" background="light-circle">
  <span v-for="skin in zui.skin.gray" class="label capitalize" :class="skin">{{skin}}</span>
</Example>

== 轮廓

<Example class="row flex-wrap gap-3" background="light-circle">
  <span v-for="skin in zui.skin.outline" class="label capitalize" :class="skin">{{skin}}</span>
</Example>

== 浅色

<Example class="row flex-wrap gap-3" background="light-circle">
  <span v-for="skin in zui.skin.pale" class="label capitalize" :class="skin">{{skin}}</span>
</Example>

== 浅色描边

<Example class="row flex-wrap gap-3" background="light-circle">
  <span v-for="skin in zui.skin.pale" class="label capitalize" :class="`${skin} ring-${skin.replace('-pale', '')}`">{{skin}}</span>
</Example>

== 透明

<Example class="row flex-wrap gap-3" background="light-circle">
  <span v-for="skin in zui.skin.ghost" class="label capitalize" :class="skin">{{skin}}</span>
</Example>

== HTML

```html
<span class="label primary">...</span>
```

:::

## 尺寸

除了默认大小，标签还提供了额外的 2 种预设尺寸。

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap items-end">
  <span class="label size-sm">小标签</span>
  <span class="label">普通大小</span>
  <span class="label size-lg">大标签</span>
</Example>

== HTML

```html
<span class="label size-sm">小标签</span>
<span class="label">普通大小</span>
<span class="label size-lg">大标签</span>
```

:::

## 圆角

通过工具类 `rounded-*` 来应用不同的圆角样式。

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap items-end">
  <span class="label rounded-none">无圆角</span>
  <span class="label rounded-sm">小圆角</span>
  <span class="label rounded">普通圆角</span>
  <span class="label rounded-md">中等圆角</span>
  <span class="label rounded-lg">大圆角</span>
  <span class="label rounded-xl">超大圆角</span>
  <span class="label rounded-full">完整圆角</span>
</Example>

== HTML

```html
<span class="label rounded-none">无圆角</span>
<span class="label rounded-sm">小圆角</span>
<span class="label rounded">普通圆角</span>
<span class="label rounded-md">中等圆角</span>
<span class="label rounded-lg">大圆角</span>
<span class="label rounded-xl">超大圆角</span>
<span class="label rounded-full">完整圆角</span>
```

:::

## 圆点标签

当与工具类 `label-dot` 一起使用时则获得圆点标签。

::: tabs

== 示例

<Example class="flex gap-4 items-end">
  <span class="label label-dot"></span>
  <span class="label label-dot primary"></span>
  <span class="label label-dot secondary"></span>
  <span class="label label-dot success"></span>
  <span class="label label-dot warning"></span>
  <span class="label label-dot danger"></span>
  <span class="label label-dot important"></span>
  <span class="label label-dot special"></span>
  <span class="label label-dot lighter"></span>
  <span class="label label-dot light"></span>
  <span class="label label-dot gray"></span>
  <span class="label label-dot dark"></span>
</Example>

== HTML

```html
<span class="label label-dot"></span>
<span class="label label-dot primary"></span>
<span class="label label-dot secondary"></span>
<span class="label label-dot success"></span>
<span class="label label-dot warning"></span>
<span class="label label-dot danger"></span>
<span class="label label-dot important"></span>
<span class="label label-dot special"></span>
<span class="label label-dot lighter"></span>
<span class="label label-dot light"></span>
<span class="label label-dot gray"></span>
<span class="label label-dot dark"></span>
```

:::

## 与按钮组合使用

::: tabs

== 示例

<Example class="flex gap-4 items-end">
  <button class="btn" type="button">按钮 <span class="label size-sm rounded-full">42</span></button>
  <button class="btn success-outline" type="button">按钮 <span class="label size-sm success rounded-full">42</span></button>
  <button class="btn danger-pale" type="button">按钮 <span class="label label-dot danger"></span></button>
</Example>

== HTML

```html
<button class="btn" type="button">按钮 <span class="label size-sm rounded-full">42</span></button>
<button class="btn success-outline" type="button">按钮 <span class="label size-sm success rounded-full">42</span></button>
<button class="btn danger-pale" type="button">按钮 <span class="label label-dot danger"></span></button>
```

:::

## CSS 类

标签提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `label`      | 实体类 | 元素作为标签组件 |
| `label-dot`      | 工具类 | 标签使用圆形外观 |
| `size-sm`      | 工具类      |   标签使用小号尺寸 |
| `size-lg`      | 工具类      |   标签使用大号尺寸 |

## CSS 变量

| 变量名称 | 变量含义 |
|----------|----------|
| `--label-bg`           | 标签背景色 |
| `--label-color`        | 标签文字颜色 |
| `--label-border-color` | 标签边框颜色 |
| `--label-radius`       | 标签圆角     |
