# 按钮

按钮是用来触发一些动作。通常用在表单、对话框、菜单上面。好的按钮设计能够引导用户高效的达到目的。

## 使用方法

使用 `.btn` 类来获得按钮的外观和交互体验，通常用在元素 `<button>` 或 `<a>` 上。

<Example class="flex gap-4">
  <button type="button" class="btn">按钮</button>
</Example>

```html
<button type="button" class="btn">按钮</button>
```

配合丰富的[CSS 工具类](/utilities/)来实现不同按钮的外观。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <button type="button" class="btn primary">主要按钮</button>
  <button type="button" class="btn black rounded-none">黑色按钮</button>
  <button type="button" class="btn secondary-outline square">正</button>
  <button type="button" class="btn dark-outline circle">描边</button>
  <button type="button" class="btn danger-pale square circle">❤️</button>
  <button type="button" class="btn text-primary ghost">链接按钮</button>
</Example>

```html
<button type="button" class="btn primary">主要按钮</button>
<button type="button" class="btn black rounded-none">黑色按钮</button>
<button type="button" class="btn secondary-outline square">正</button>
<button type="button" class="btn dark-outline circle">描边</button>
<button type="button" class="btn danger-pale square circle">❤️</button>
<button type="button" class="btn text-primary ghost">链接按钮</button>
```

## 图标按钮

按钮配合[图标组件](http://url.com/lib/icon)一起使用时，自动呈现为图标按钮。

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn"><i class="icon icon-star"></i> 左侧图标</button>
  <button type="button" class="btn">右侧图标<i class="icon icon-angle-right"></i></button>
  <button type="button" class="btn square"><i class="icon icon-thumbs-up"></i></button>
</Example>

```html
<button type="button" class="btn"><i class="icon icon-star"></i> 左侧图标</button>
<button type="button" class="btn">右侧图标<i class="icon icon-angle-right"></i></button>
<button type="button" class="btn square"><i class="icon icon-thumbs-up"></i></button>
```

## 外观类型

配合使用[CSS 工具类](/utilities/)来实现不同按钮的外观。下面展示各种工具类的外观效果。

### 实心按钮

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <button type="button" class="btn primary">Primary</button>
  <button type="button" class="btn secondary">Secondary</button>
  <button type="button" class="btn success">Success</button>
  <button type="button" class="btn warning">Warning</button>
  <button type="button" class="btn danger">Danger</button>
  <button type="button" class="btn important">Important</button>
  <button type="button" class="btn special">Special</button>
  <button type="button" class="btn white">White</button>
  <button type="button" class="btn lighter">Lighter</button>
  <button type="button" class="btn light">Light</button>
  <button type="button" class="btn gray">Gray</button>
  <button type="button" class="btn dark">Dark</button>
  <button type="button" class="btn darker">Darker</button>
  <button type="button" class="btn black">Black</button>
  <button type="button" class="btn inverse">Inverse</button>
  <button type="button" class="btn surface">Surface</button>
  <button type="button" class="btn canvas">Canvas</button>
  <button type="button" class="btn ghost">Ghost</button>
</Example>

```html
<button type="button" class="btn primary">Primary</button>
<button type="button" class="btn secondary">Secondary</button>
<button type="button" class="btn success">Success</button>
<button type="button" class="btn warning">Warning</button>
<button type="button" class="btn danger">Danger</button>
<button type="button" class="btn important">Important</button>
<button type="button" class="btn special">Special</button>
<button type="button" class="btn white">White</button>
<button type="button" class="btn lighter">Lighter</button>
<button type="button" class="btn light">Light</button>
<button type="button" class="btn gray">Gray</button>
<button type="button" class="btn dark">Dark</button>
<button type="button" class="btn darker">Darker</button>
<button type="button" class="btn black">Black</button>
<button type="button" class="btn inverse">Inverse</button>
<button type="button" class="btn surface">Surface</button>
<button type="button" class="btn canvas">Canvas</button>
<button type="button" class="btn ghost">Ghost</button>
```

### 描边按钮

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <button type="button" class="btn primary-outline">Primary</button>
  <button type="button" class="btn secondary-outline">Secondary</button>
  <button type="button" class="btn success-outline">Success</button>
  <button type="button" class="btn warning-outline">Warning</button>
  <button type="button" class="btn danger-outline">Danger</button>
  <button type="button" class="btn important-outline">Important</button>
  <button type="button" class="btn special-outline">Special</button>
  <button type="button" class="btn lighter-outline">Lighter</button>
  <button type="button" class="btn light-outline">Light</button>
  <button type="button" class="btn gray-outline">Gray</button>
  <button type="button" class="btn dark-outline">Dark</button>
  <button type="button" class="btn darker-outline">Darker</button>
  <button type="button" class="btn black-outline">Black</button>
</Example>

```html
<button type="button" class="btn primary-outline">Primary</button>
<button type="button" class="btn secondary-outline">Secondary</button>
<button type="button" class="btn success-outline">Success</button>
<button type="button" class="btn warning-outline">Warning</button>
<button type="button" class="btn danger-outline">Danger</button>
<button type="button" class="btn important-outline">Important</button>
<button type="button" class="btn special-outline">Special</button>
<button type="button" class="btn lighter-outline">Lighter</button>
<button type="button" class="btn light-outline">Light</button>
<button type="button" class="btn gray-outline">Gray</button>
<button type="button" class="btn dark-outline">Dark</button>
<button type="button" class="btn darker-outline">Darker</button>
<button type="button" class="btn black-outline">Black</button>
```

### 浅色按钮

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <button type="button" class="btn primary-pale">Primary</button>
  <button type="button" class="btn secondary-pale">Secondary</button>
  <button type="button" class="btn success-pale">Success</button>
  <button type="button" class="btn warning-pale">Warning</button>
  <button type="button" class="btn danger-pale">Danger</button>
  <button type="button" class="btn important-pale">Important</button>
  <button type="button" class="btn special-pale">Special</button>
  <button type="button" class="btn lighter-pale">Lighter</button>
  <button type="button" class="btn light-pale">Light</button>
  <button type="button" class="btn gray-pale">Gray</button>
  <button type="button" class="btn dark-pale">Dark</button>
</Example>

```html
<button type="button" class="btn primary-pale">Primary</button>
<button type="button" class="btn secondary-pale">Secondary</button>
<button type="button" class="btn success-pale">Success</button>
<button type="button" class="btn warning-pale">Warning</button>
<button type="button" class="btn danger-pale">Danger</button>
<button type="button" class="btn important-pale">Important</button>
<button type="button" class="btn special-pale">Special</button>
<button type="button" class="btn lighter-pale">Lighter</button>
<button type="button" class="btn light-pale">Light</button>
<button type="button" class="btn gray-pale">Gray</button>
<button type="button" class="btn dark-pale">Dark</button>
```

搭配 CSS 工具类 `bd-*` 还可以为浅色按钮添加描边。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <button type="button" class="btn primary-pale bd-primary">Primary</button>
  <button type="button" class="btn secondary-pale bd-secondary">Secondary</button>
  <button type="button" class="btn success-pale bd-success">Success</button>
  <button type="button" class="btn warning-pale bd-warning">Warning</button>
  <button type="button" class="btn danger-pale bd-danger">Danger</button>
  <button type="button" class="btn important-pale bd-important">Important</button>
  <button type="button" class="btn special-pale bd-special">Special</button>
  <button type="button" class="btn lighter-pale bd-lighter">Lighter</button>
  <button type="button" class="btn light-pale bd-light">Light</button>
  <button type="button" class="btn gray-pale bd-gray">Gray</button>
  <button type="button" class="btn dark-pale bd-dark">Dark</button>
</Example>

```html
<button type="button" class="btn primary-pale bd-primary">Primary</button>
<button type="button" class="btn secondary-pale bd-secondary">Secondary</button>
<button type="button" class="btn success-pale bd-success">Success</button>
<button type="button" class="btn warning-pale bd-warning">Warning</button>
<button type="button" class="btn danger-pale bd-danger">Danger</button>
<button type="button" class="btn important-pale bd-important">Important</button>
<button type="button" class="btn special-pale bd-special">Special</button>
<button type="button" class="btn lighter-pale bd-lighter">Lighter</button>
<button type="button" class="btn light-pale bd-light">Light</button>
<button type="button" class="btn gray-pale bd-gray">Gray</button>
<button type="button" class="btn dark-pale bd-dark">Dark</button>
```

### 按钮文本颜色

搭配 CSS 工具类 `text-*` 修改按钮文本颜色。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <button type="button" class="btn text-primary">Primary</button>
  <button type="button" class="btn text-secondary">Secondary</button>
  <button type="button" class="btn text-success">Success</button>
  <button type="button" class="btn text-warning">Warning</button>
  <button type="button" class="btn text-danger">Danger</button>
  <button type="button" class="btn text-important">Important</button>
  <button type="button" class="btn text-special">Special</button>
  <button type="button" class="btn text-lighter">Lighter</button>
  <button type="button" class="btn text-light">Light</button>
  <button type="button" class="btn text-gray">Gray</button>
  <button type="button" class="btn text-dark">Dark</button>
  <button type="button" class="btn text-darker">Darker</button>
  <button type="button" class="btn text-black">Black</button>
</Example>

```html
<button type="button" class="btn text-primary">Primary</button>
<button type="button" class="btn text-secondary">Secondary</button>
<button type="button" class="btn text-success">Success</button>
<button type="button" class="btn text-warning">Warning</button>
<button type="button" class="btn text-danger">Danger</button>
<button type="button" class="btn text-important">Important</button>
<button type="button" class="btn text-special">Special</button>
<button type="button" class="btn text-lighter">Lighter</button>
<button type="button" class="btn text-light">Light</button>
<button type="button" class="btn text-gray">Gray</button>
<button type="button" class="btn text-dark">Dark</button>
<button type="button" class="btn text-darker">Darker</button>
<button type="button" class="btn text-black">Black</button>
```

搭配 CSS 工具类 `ghost` 移除按钮背景颜色，从而获得透明的按钮。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <button type="button" class="btn text-primary ghost">Primary</button>
  <button type="button" class="btn text-secondary ghost">Secondary</button>
  <button type="button" class="btn text-success ghost">Success</button>
  <button type="button" class="btn text-warning ghost">Warning</button>
  <button type="button" class="btn text-danger ghost">Danger</button>
  <button type="button" class="btn text-important ghost">Important</button>
  <button type="button" class="btn text-special ghost">Special</button>
  <button type="button" class="btn text-lighter ghost">Lighter</button>
  <button type="button" class="btn text-light ghost">Light</button>
  <button type="button" class="btn text-gray ghost">Gray</button>
  <button type="button" class="btn text-dark ghost">Dark</button>
  <button type="button" class="btn text-darker ghost">Darker</button>
  <button type="button" class="btn text-black ghost">Black</button>
</Example>

```html
<button type="button" class="btn text-primary ghost">Primary</button>
<button type="button" class="btn text-secondary ghost">Secondary</button>
<button type="button" class="btn text-success ghost">Success</button>
<button type="button" class="btn text-warning ghost">Warning</button>
<button type="button" class="btn text-danger ghost">Danger</button>
<button type="button" class="btn text-important ghost">Important</button>
<button type="button" class="btn text-special ghost">Special</button>
<button type="button" class="btn text-lighter ghost">Lighter</button>
<button type="button" class="btn text-light ghost">Light</button>
<button type="button" class="btn text-gray ghost">Gray</button>
<button type="button" class="btn text-dark ghost">Dark</button>
<button type="button" class="btn text-darker ghost">Darker</button>
<button type="button" class="btn text-black ghost">Black</button>
```

### 按钮边框颜色

搭配 CSS 工具类 `bd-*` 修改按钮文本颜色。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <button type="button" class="btn bd-primary">Primary</button>
  <button type="button" class="btn bd-secondary">Secondary</button>
  <button type="button" class="btn bd-success">Success</button>
  <button type="button" class="btn bd-warning">Warning</button>
  <button type="button" class="btn bd-danger">Danger</button>
  <button type="button" class="btn bd-important">Important</button>
  <button type="button" class="btn bd-special">Special</button>
  <button type="button" class="btn bd-lighter">Lighter</button>
  <button type="button" class="btn bd-light">Light</button>
  <button type="button" class="btn bd-gray">Gray</button>
  <button type="button" class="btn bd-dark">Dark</button>
  <button type="button" class="btn bd-darker">Darker</button>
  <button type="button" class="btn bd-black">Black</button>
</Example>

```html
<button type="button" class="btn bd-primary">Primary</button>
<button type="button" class="btn bd-secondary">Secondary</button>
<button type="button" class="btn bd-success">Success</button>
<button type="button" class="btn bd-warning">Warning</button>
<button type="button" class="btn bd-danger">Danger</button>
<button type="button" class="btn bd-important">Important</button>
<button type="button" class="btn bd-special">Special</button>
<button type="button" class="btn bd-lighter">Lighter</button>
<button type="button" class="btn bd-light">Light</button>
<button type="button" class="btn bd-gray">Gray</button>
<button type="button" class="btn bd-dark">Dark</button>
<button type="button" class="btn bd-darker">Darker</button>
<button type="button" class="btn bd-black">Black</button>
```

### 按钮圆角

搭配 CSS 工具类 `rounded-*` 为按钮应用不同的圆角样式。

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn rounded-none">无圆角</button>
  <button type="button" class="btn rounded-sm">小圆角</button>
  <button type="button" class="btn rounded">普通圆角</button>
  <button type="button" class="btn rounded-md">中等圆角</button>
  <button type="button" class="btn rounded-lg">大圆角</button>
  <button type="button" class="btn rounded-xl">超大圆角</button>
  <button type="button" class="btn circle">完整圆角</button>
</Example>

```html
<button type="button" class="btn rounded-none">无圆角</button>
<button type="button" class="btn rounded-sm">小圆角</button>
<button type="button" class="btn rounded">普通圆角</button>
<button type="button" class="btn rounded-md">中等圆角</button>
<button type="button" class="btn rounded-lg">大圆角</button>
<button type="button" class="btn rounded-xl">超大圆角</button>
<button type="button" class="btn circle">完整圆角</button>
```

### 按钮阴影效果

搭配 CSS 工具类 `shadow-*` 为按钮应用不同的阴影样式。

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn shadow-inner">内阴影</button>
  <button type="button" class="btn shadow-none">无阴影</button>
  <button type="button" class="btn shadow-sm">小阴影</button>
  <button type="button" class="btn shadow">普通阴影</button>
  <button type="button" class="btn shadow-md">中等阴影</button>
  <button type="button" class="btn shadow-lg">大阴影</button>
  <button type="button" class="btn shadow-xl">超大阴影</button>
</Example>

```html
<button type="button" class="btn shadow-inner">内阴影</button>
<button type="button" class="btn shadow-none">无阴影</button>
<button type="button" class="btn shadow-sm">小阴影</button>
<button type="button" class="btn shadow">普通阴影</button>
<button type="button" class="btn shadow-md">中等阴影</button>
<button type="button" class="btn shadow-lg">大阴影</button>
<button type="button" class="btn shadow-xl">超大阴影</button>
```

## 尺寸

除了默认大小，按钮还提供了额外的 4 种预设尺寸。

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn size-xs">超小按钮</button>
  <button type="button" class="btn size-sm">小按钮</button>
  <button type="button" class="btn">普通大小</button>
  <button type="button" class="btn size-lg">大按钮</button>
  <button type="button" class="btn size-xl">超大按钮</button>
</Example>

```html
<button type="button" class="btn size-xs">超小按钮</button>
<button type="button" class="btn size-sm">小按钮</button>
<button type="button" class="btn">普通大小</button>
<button type="button" class="btn size-lg">大按钮</button>
<button type="button" class="btn size-xl">超大按钮</button>
```

## 正方形按钮

通过工具类 `square` 可以让按钮获得正方形外观，通常作为图标按钮使用。

<Example class="flex gap-4 items-end">
  <button type="button" class="btn square size-xs">XS</button>
  <button type="button" class="btn square size-sm">S</button>
  <button type="button" class="btn square">正</button>
  <button type="button" class="btn square size-lg">L</button>
  <button type="button" class="btn square size-xl">XL</button>
</Example>

```html
<button type="button" class="btn square size-xs">XS</button>
<button type="button" class="btn square size-sm">S</button>
<button type="button" class="btn square">正</button>
<button type="button" class="btn square size-lg">L</button>
<button type="button" class="btn square size-xl">XL</button>
```

## 圆形按钮

当与工具类 `circle` 与 `square` 一起使用时则获得圆形按钮。

<Example class="flex gap-4 items-end">
  <button type="button" class="btn square circle size-xs">XS</button>
  <button type="button" class="btn square circle size-sm">S</button>
  <button type="button" class="btn square circle">正</button>
  <button type="button" class="btn square circle size-lg">L</button>
  <button type="button" class="btn square circle size-xl">XL</button>
</Example>

```html
<button type="button" class="btn square circle size-xs">XS</button>
<button type="button" class="btn square circle size-sm">S</button>
<button type="button" class="btn square circle">正</button>
<button type="button" class="btn square circle size-lg">L</button>
<button type="button" class="btn square circle size-xl">XL</button>
```

## 禁用状态

为按钮提供 `disabled="disabled"` 属性或 `disabled` 工具类来禁用按钮。被禁用的按钮将无法响应点击事件。

<Example class="flex gap-4 items-end">
  <button type="button" class="btn" disabled="disabled">被禁用的按钮</button>
  <button type="button" class="btn disabled">被禁用的按钮</button>
</Example>

```html
<button type="button" class="btn" disabled="disabled">被禁用的按钮</button>
<button type="button" class="btn disabled">被禁用的按钮</button>
```

## 加载中状态

为按钮提供 `loading` 工具类来启用加载中状态。

<Example class="flex gap-4 items-end">
  <button type="button" class="btn loading">加载中...</button>
</Example>

```html
<button type="button" class="btn loading">加载中...</button>
```

## CSS 类

按钮提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `btn`      | 实体类 | 元素作为按钮组件 |
| `square`      | 工具类 | 按钮使用正方形外观 |
| `size-xs`      | 工具类      |   按钮使用超小号尺寸 |
| `size-sm`      | 工具类      |   按钮使用小号尺寸 |
| `size-lg`      | 工具类      |   按钮使用大号尺寸 |
| `size-xl`      | 工具类      |   按钮使用超大号尺寸 |


## CSS 变量

| 变量名称 | 变量含义 |
| -------- | -------- |
| --btn-radius       | 按钮圆角     |
| --btn-bg   | 按钮背景颜色 |
| --btn-border-color | 按钮边框颜色 |
