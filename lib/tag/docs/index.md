# 标签

标签是用来触发一些动作。通常用在表单、对话框、菜单上面。好的标签设计能够引导用户高效的达到目的。

## 基本用法

使用 `.tag` 类来获得标签的外观和交互体验，通常用在元素 `<span>` 上。

<Example class="flex gap-4">
  <span class="tag">标签</span>
</Example>

```html
<span class="tag">标签</span>
```

配合丰富的[CSS 工具类](/lib/utilities/)来实现不同标签的外观。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="tag -primary">主要标签</span>
  <span class="tag -black -rounded-none">黑色标签</span>
  <span class="tag -dark-outline -circle">描边</span>
</Example>

```html
<span class="tag -primary">主要标签</span>
<span class="tag -black -rounded-none">黑色标签</span>
<span class="tag -dark-outline -circle">描边</span>
```

## 外观类型

配合使用[CSS 工具类](/lib/utilities/)来实现不同标签的外观。下面展示各种工具类的外观效果。

### 实心标签

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="tag -primary">Primary</span>
  <span class="tag -secondary">Secondary</span>
  <span class="tag -success">Success</span>
  <span class="tag -warning">Warning</span>
  <span class="tag -danger">Danger</span>
  <span class="tag -important">Important</span>
  <span class="tag -special">Special</span>
  <span class="tag -white">White</span>
  <span class="tag -lighter">Lighter</span>
  <span class="tag -light">Light</span>
  <span class="tag -gray">Gray</span>
  <span class="tag -dark">Dark</span>
  <span class="tag -darker">Darker</span>
  <span class="tag -black">Black</span>
  <span class="tag -inverse">Inverse</span>
  <span class="tag -surface">Surface</span>
  <span class="tag -canvas">Canvas</span>
  <span class="tag -ghost">Ghost</span>
</Example>

```html
<span class="tag -primary">Primary</span>
<span class="tag -secondary">Secondary</span>
<span class="tag -success">Success</span>
<span class="tag -warning">Warning</span>
<span class="tag -danger">Danger</span>
<span class="tag -important">Important</span>
<span class="tag -special">Special</span>
<span class="tag -white">White</span>
<span class="tag -lighter">Lighter</span>
<span class="tag -light">Light</span>
<span class="tag -gray">Gray</span>
<span class="tag -dark">Dark</span>
<span class="tag -darker">Darker</span>
<span class="tag -black">Black</span>
<span class="tag -inverse">Inverse</span>
<span class="tag -surface">Surface</span>
<span class="tag -canvas">Canvas</span>
<span class="tag -ghost">Ghost</span>
```

### 描边标签

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="tag -primary-outline">Primary</span>
  <span class="tag -secondary-outline">Secondary</span>
  <span class="tag -success-outline">Success</span>
  <span class="tag -warning-outline">Warning</span>
  <span class="tag -danger-outline">Danger</span>
  <span class="tag -important-outline">Important</span>
  <span class="tag -special-outline">Special</span>
  <span class="tag -lighter-outline">Lighter</span>
  <span class="tag -light-outline">Light</span>
  <span class="tag -gray-outline">Gray</span>
  <span class="tag -dark-outline">Dark</span>
  <span class="tag -darker-outline">Darker</span>
  <span class="tag -black-outline">Black</span>
</Example>

```html
<span class="tag -primary-outline">Primary</span>
<span class="tag -secondary-outline">Secondary</span>
<span class="tag -success-outline">Success</span>
<span class="tag -warning-outline">Warning</span>
<span class="tag -danger-outline">Danger</span>
<span class="tag -important-outline">Important</span>
<span class="tag -special-outline">Special</span>
<span class="tag -lighter-outline">Lighter</span>
<span class="tag -light-outline">Light</span>
<span class="tag -gray-outline">Gray</span>
<span class="tag -dark-outline">Dark</span>
<span class="tag -darker-outline">Darker</span>
<span class="tag -black-outline">Black</span>
```

### 浅色标签

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="tag -primary-pale">Primary</span>
  <span class="tag -secondary-pale">Secondary</span>
  <span class="tag -success-pale">Success</span>
  <span class="tag -warning-pale">Warning</span>
  <span class="tag -danger-pale">Danger</span>
  <span class="tag -important-pale">Important</span>
  <span class="tag -special-pale">Special</span>
  <span class="tag -lighter-pale">Lighter</span>
  <span class="tag -light-pale">Light</span>
  <span class="tag -gray-pale">Gray</span>
  <span class="tag -dark-pale">Dark</span>
</Example>

```html
<span class="tag -primary-pale">Primary</span>
<span class="tag -secondary-pale">Secondary</span>
<span class="tag -success-pale">Success</span>
<span class="tag -warning-pale">Warning</span>
<span class="tag -danger-pale">Danger</span>
<span class="tag -important-pale">Important</span>
<span class="tag -special-pale">Special</span>
<span class="tag -lighter-pale">Lighter</span>
<span class="tag -light-pale">Light</span>
<span class="tag -gray-pale">Gray</span>
<span class="tag -dark-pale">Dark</span>
```

搭配 CSS 工具类 `-border-*` 还可以为浅色标签添加描边。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="tag -primary-pale -border-primary">Primary</span>
  <span class="tag -secondary-pale -border-secondary">Secondary</span>
  <span class="tag -success-pale -border-success">Success</span>
  <span class="tag -warning-pale -border-warning">Warning</span>
  <span class="tag -danger-pale -border-danger">Danger</span>
  <span class="tag -important-pale -border-important">Important</span>
  <span class="tag -special-pale -border-special">Special</span>
  <span class="tag -lighter-pale -border-lighter">Lighter</span>
  <span class="tag -light-pale -border-light">Light</span>
  <span class="tag -gray-pale -border-gray">Gray</span>
  <span class="tag -dark-pale -border-dark">Dark</span>
</Example>

```html
<span class="tag -primary-pale -border-primary">Primary</span>
<span class="tag -secondary-pale -border-secondary">Secondary</span>
<span class="tag -success-pale -border-success">Success</span>
<span class="tag -warning-pale -border-warning">Warning</span>
<span class="tag -danger-pale -border-danger">Danger</span>
<span class="tag -important-pale -border-important">Important</span>
<span class="tag -special-pale -border-special">Special</span>
<span class="tag -lighter-pale -border-lighter">Lighter</span>
<span class="tag -light-pale -border-light">Light</span>
<span class="tag -gray-pale -border-gray">Gray</span>
<span class="tag -dark-pale -border-dark">Dark</span>
```

### 标签文本颜色

搭配 CSS 工具类 `-text-*` 修改标签文本颜色。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="tag -text-primary">Primary</span>
  <span class="tag -text-secondary">Secondary</span>
  <span class="tag -text-success">Success</span>
  <span class="tag -text-warning">Warning</span>
  <span class="tag -text-danger">Danger</span>
  <span class="tag -text-important">Important</span>
  <span class="tag -text-special">Special</span>
  <span class="tag -text-lighter">Lighter</span>
  <span class="tag -text-light">Light</span>
  <span class="tag -text-gray">Gray</span>
  <span class="tag -text-dark">Dark</span>
  <span class="tag -text-darker">Darker</span>
  <span class="tag -text-black">Black</span>
</Example>

```html
<span class="tag -text-primary">Primary</span>
<span class="tag -text-secondary">Secondary</span>
<span class="tag -text-success">Success</span>
<span class="tag -text-warning">Warning</span>
<span class="tag -text-danger">Danger</span>
<span class="tag -text-important">Important</span>
<span class="tag -text-special">Special</span>
<span class="tag -text-lighter">Lighter</span>
<span class="tag -text-light">Light</span>
<span class="tag -text-gray">Gray</span>
<span class="tag -text-dark">Dark</span>
<span class="tag -text-darker">Darker</span>
<span class="tag -text-black">Black</span>
```

### 标签边框颜色

搭配 CSS 工具类 `-border-*` 修改标签文本颜色。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="tag -border-primary">Primary</span>
  <span class="tag -border-secondary">Secondary</span>
  <span class="tag -border-success">Success</span>
  <span class="tag -border-warning">Warning</span>
  <span class="tag -border-danger">Danger</span>
  <span class="tag -border-important">Important</span>
  <span class="tag -border-special">Special</span>
  <span class="tag -border-lighter">Lighter</span>
  <span class="tag -border-light">Light</span>
  <span class="tag -border-gray">Gray</span>
  <span class="tag -border-dark">Dark</span>
  <span class="tag -border-darker">Darker</span>
  <span class="tag -border-black">Black</span>
</Example>

```html
<span class="tag -border-primary">Primary</span>
<span class="tag -border-secondary">Secondary</span>
<span class="tag -border-success">Success</span>
<span class="tag -border-warning">Warning</span>
<span class="tag -border-danger">Danger</span>
<span class="tag -border-important">Important</span>
<span class="tag -border-special">Special</span>
<span class="tag -border-lighter">Lighter</span>
<span class="tag -border-light">Light</span>
<span class="tag -border-gray">Gray</span>
<span class="tag -border-dark">Dark</span>
<span class="tag -border-darker">Darker</span>
<span class="tag -border-black">Black</span>
```

## 尺寸

除了默认大小，标签还提供了额外的 2 种预设尺寸。

<Example class="flex gap-4 flex-wrap items-end">
  <span class="tag -sm">小标签</span>
  <span class="tag">普通大小</span>
  <span class="tag -lg">大标签</span>
</Example>

```html
<span class="tag -sm">小标签</span>
<span class="tag">普通大小</span>
<span class="tag -lg">大标签</span>
```
## 圆点标签

当与修饰类 `-dot` 一起使用时则获得圆点标签。

<Example class="flex gap-4 items-end">
  <span class="tag -dot"></span>
  <span class="tag -dot -primary"></span>
  <span class="tag -dot -secondary"></span>
  <span class="tag -dot -success"></span>
  <span class="tag -dot -warning"></span>
  <span class="tag -dot -danger"></span>
  <span class="tag -dot -important"></span>
  <span class="tag -dot -special"></span>
  <span class="tag -dot -lighter"></span>
  <span class="tag -dot -light"></span>
  <span class="tag -dot -gray"></span>
  <span class="tag -dot -dark"></span>
</Example>

```html
<span class="tag -dot"></span>
<span class="tag -dot -primary"></span>
<span class="tag -dot -secondary"></span>
<span class="tag -dot -success"></span>
<span class="tag -dot -warning"></span>
<span class="tag -dot -danger"></span>
<span class="tag -dot -important"></span>
<span class="tag -dot -special"></span>
<span class="tag -dot -lighter"></span>
<span class="tag -dot -light"></span>
<span class="tag -dot -gray"></span>
<span class="tag -dot -dark"></span>
```

## CSS 类

标签提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `tag`      | 实体类 | 元素作为标签组件 |
| `-dot`      | 修饰类 | 标签使用圆形外观 |
| `-sm`      | 修饰类      |   标签使用小号尺寸 |
| `-lg`      | 修饰类      |   标签使用大号尺寸 |
