# 标签

标签是用来触发一些动作。通常用在表单、对话框、菜单上面。好的标签设计能够引导用户高效的达到目的。

## 基本用法

使用 `.label` 类来获得标签的外观和交互体验，通常用在元素 `<span>` 上。

<Example class="flex gap-4">
  <span class="label">标签</span>
</Example>

```html
<span class="label">标签</span>
```

配合丰富的[CSS 工具类](/lib/utilities/)来实现不同标签的外观。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="label primary">主要标签</span>
  <span class="label black rounded-none">黑色标签</span>
  <span class="label dark-outline circle">描边</span>
</Example>

```html
<span class="label primary">主要标签</span>
<span class="label black rounded-none">黑色标签</span>
<span class="label dark-outline circle">描边</span>
```

## 外观类型

配合使用[CSS 工具类](/lib/utilities/)来实现不同标签的外观。下面展示各种工具类的外观效果。

### 实心标签

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="label primary">Primary</span>
  <span class="label secondary">Secondary</span>
  <span class="label success">Success</span>
  <span class="label warning">Warning</span>
  <span class="label danger">Danger</span>
  <span class="label important">Important</span>
  <span class="label special">Special</span>
  <span class="label white">White</span>
  <span class="label lighter">Lighter</span>
  <span class="label light">Light</span>
  <span class="label gray">Gray</span>
  <span class="label dark">Dark</span>
  <span class="label darker">Darker</span>
  <span class="label black">Black</span>
  <span class="label inverse">Inverse</span>
  <span class="label surface">Surface</span>
  <span class="label canvas">Canvas</span>
  <span class="label ghost">Ghost</span>
</Example>

```html
<span class="label primary">Primary</span>
<span class="label secondary">Secondary</span>
<span class="label success">Success</span>
<span class="label warning">Warning</span>
<span class="label danger">Danger</span>
<span class="label important">Important</span>
<span class="label special">Special</span>
<span class="label white">White</span>
<span class="label lighter">Lighter</span>
<span class="label light">Light</span>
<span class="label gray">Gray</span>
<span class="label dark">Dark</span>
<span class="label darker">Darker</span>
<span class="label black">Black</span>
<span class="label inverse">Inverse</span>
<span class="label surface">Surface</span>
<span class="label anvas">Canvas</span>
<span class="label ghost">Ghost</span>
```

### 描边标签

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="label primary-outline">Primary</span>
  <span class="label secondary-outline">Secondary</span>
  <span class="label success-outline">Success</span>
  <span class="label warning-outline">Warning</span>
  <span class="label danger-outline">Danger</span>
  <span class="label important-outline">Important</span>
  <span class="label special-outline">Special</span>
  <span class="label lighter-outline">Lighter</span>
  <span class="label light-outline">Light</span>
  <span class="label gray-outline">Gray</span>
  <span class="label dark-outline">Dark</span>
  <span class="label darker-outline">Darker</span>
  <span class="label black-outline">Black</span>
</Example>

```html
<span class="label primary-outline">Primary</span>
<span class="label secondary-outline">Secondary</span>
<span class="label success-outline">Success</span>
<span class="label warning-outline">Warning</span>
<span class="label danger-outline">Danger</span>
<span class="label important-outline">Important</span>
<span class="label special-outline">Special</span>
<span class="label lighter-outline">Lighter</span>
<span class="label light-outline">Light</span>
<span class="label gray-outline">Gray</span>
<span class="label dark-outline">Dark</span>
<span class="label darker-outline">Darker</span>
<span class="label black-outline">Black</span>
```

### 浅色标签

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="label primary-pale">Primary</span>
  <span class="label secondary-pale">Secondary</span>
  <span class="label success-pale">Success</span>
  <span class="label warning-pale">Warning</span>
  <span class="label danger-pale">Danger</span>
  <span class="label important-pale">Important</span>
  <span class="label special-pale">Special</span>
  <span class="label lighter-pale">Lighter</span>
  <span class="label light-pale">Light</span>
  <span class="label gray-pale">Gray</span>
  <span class="label dark-pale">Dark</span>
</Example>

```html
<span class="label primary-pale">Primary</span>
<span class="label secondary-pale">Secondary</span>
<span class="label success-pale">Success</span>
<span class="label warning-pale">Warning</span>
<span class="label danger-pale">Danger</span>
<span class="label important-pale">Important</span>
<span class="label special-pale">Special</span>
<span class="label lighter-pale">Lighter</span>
<span class="label light-pale">Light</span>
<span class="label gray-pale">Gray</span>
<span class="label dark-pale">Dark</span>
```

搭配 CSS 工具类 `border-*` 还可以为浅色标签添加描边。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="label primary-pale border-primary">Primary</span>
  <span class="label secondary-pale border-secondary">Secondary</span>
  <span class="label success-pale border-success">Success</span>
  <span class="label warning-pale border-warning">Warning</span>
  <span class="label danger-pale border-danger">Danger</span>
  <span class="label important-pale border-important">Important</span>
  <span class="label special-pale border-special">Special</span>
  <span class="label lighter-pale border-lighter">Lighter</span>
  <span class="label light-pale border-light">Light</span>
  <span class="label gray-pale border-gray">Gray</span>
  <span class="label dark-pale border-dark">Dark</span>
</Example>

```html
<span class="label primary-pale border-primary">Primary</span>
<span class="label secondary-pale border-secondary">Secondary</span>
<span class="label success-pale border-success">Success</span>
<span class="label warning-pale border-warning">Warning</span>
<span class="label danger-pale border-danger">Danger</span>
<span class="label important-pale border-important">Important</span>
<span class="label special-pale border-special">Special</span>
<span class="label lighter-pale border-lighter">Lighter</span>
<span class="label light-pale border-light">Light</span>
<span class="label gray-pale border-gray">Gray</span>
<span class="label dark-pale border-dark">Dark</span>
```

### 标签文本颜色

搭配 CSS 工具类 `text-*` 修改标签文本颜色。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="label text-primary">Primary</span>
  <span class="label text-secondary">Secondary</span>
  <span class="label text-success">Success</span>
  <span class="label text-warning">Warning</span>
  <span class="label text-danger">Danger</span>
  <span class="label text-important">Important</span>
  <span class="label text-special">Special</span>
  <span class="label text-lighter">Lighter</span>
  <span class="label text-light">Light</span>
  <span class="label text-gray">Gray</span>
  <span class="label text-dark">Dark</span>
  <span class="label text-darker">Darker</span>
  <span class="label text-black">Black</span>
</Example>

```html
<span class="label text-primary">Primary</span>
<span class="label text-secondary">Secondary</span>
<span class="label text-success">Success</span>
<span class="label text-warning">Warning</span>
<span class="label text-danger">Danger</span>
<span class="label text-important">Important</span>
<span class="label text-special">Special</span>
<span class="label text-lighter">Lighter</span>
<span class="label text-light">Light</span>
<span class="label text-gray">Gray</span>
<span class="label text-dark">Dark</span>
<span class="label text-darker">Darker</span>
<span class="label text-black">Black</span>
```

## 尺寸

除了默认大小，标签还提供了额外的 2 种预设尺寸。

<Example class="flex gap-4 flex-wrap items-end">
  <span class="label sm">小标签</span>
  <span class="label">普通大小</span>
  <span class="label lg">大标签</span>
</Example>

```html
<span class="label sm">小标签</span>
<span class="label">普通大小</span>
<span class="label lg">大标签</span>
```
## 圆点标签

当与修饰类 `label-dot` 一起使用时则获得圆点标签。

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

## 与按钮组合使用
<Example class="flex gap-4 items-end">
  <button class="btn" type="button">按钮 <span class="label sm circle">12</span></button>
</Example>

```html
<button class="btn" type="button">按钮 <span class="label sm circle">12</span></button>
```
## CSS 类

标签提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `label`      | 实体类 | 元素作为标签组件 |
| `label-dot`      | 修饰类 | 标签使用圆形外观 |
| `sm`      | 修饰类      |   标签使用小号尺寸 |
| `lg`      | 修饰类      |   标签使用大号尺寸 |
