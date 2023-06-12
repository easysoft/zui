# 标签

标签是用来触发一些动作。通常用在表单、对话框、菜单上面。好的标签设计能够引导用户高效的达到目的。

## 使用方法

使用 `.label` 类来获得标签的外观和交互体验，通常用在元素 `<span>` 上。

<Example class="flex gap-4">
  <span class="label">标签</span>
</Example>

```html
<span class="label">标签</span>
```

配合丰富的[CSS 工具类](/utilities/)来实现不同标签的外观。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="label primary">主要标签</span>
  <span class="label black rounded-none">黑色标签</span>
  <span class="label dark-outline rounded-full">描边</span>
</Example>

```html
<span class="label primary">主要标签</span>
<span class="label black rounded-none">黑色标签</span>
<span class="label dark-outline rounded-full">描边</span>
```

## 外观类型

配合使用[CSS 工具类](/utilities/)来实现不同标签的外观。下面展示各种工具类的外观效果。

### 实心标签

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="label primary">主要</span>
  <span class="label secondary">次要</span>
  <span class="label success">成功</span>
  <span class="label warning">关注</span>
  <span class="label danger">警告</span>
  <span class="label important">重要</span>
  <span class="label special">特殊</span>
  <span class="label white">纯白</span>
  <span class="label lighter">更浅色</span>
  <span class="label light">浅色</span>
  <span class="label gray">灰色</span>
  <span class="label dark">深色</span>
  <span class="label darker">更深色</span>
  <span class="label black">纯黑</span>
  <span class="label inverse">反色</span>
  <span class="label surface">表面</span>
  <span class="label canvas">画布</span>
  <span class="label ghost">透明</span>
</Example>

```html
<span class="label primary">主要</span>
<span class="label secondary">次要</span>
<span class="label success">成功</span>
<span class="label warning">关注</span>
<span class="label danger">警告</span>
<span class="label important">重要</span>
<span class="label special">特殊</span>
<span class="label white">纯白</span>
<span class="label lighter">更浅色</span>
<span class="label light">浅色</span>
<span class="label gray">灰色</span>
<span class="label dark">深色</span>
<span class="label darker">更深色</span>
<span class="label black">纯黑</span>
<span class="label inverse">反色</span>
<span class="label surface">表面</span>
<span class="label anvas">画布</span>
<span class="label ghost">透明</span>
```

### 描边标签

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="label primary-outline">主要</span>
  <span class="label secondary-outline">次要</span>
  <span class="label success-outline">成功</span>
  <span class="label warning-outline">关注</span>
  <span class="label danger-outline">警告</span>
  <span class="label important-outline">重要</span>
  <span class="label special-outline">特殊</span>
  <span class="label lighter-outline">更浅色</span>
  <span class="label light-outline">浅色</span>
  <span class="label gray-outline">灰色</span>
  <span class="label dark-outline">深色</span>
  <span class="label darker-outline">更深色</span>
  <span class="label black-outline">纯黑</span>
</Example>

```html
<span class="label primary-outline">主要</span>
<span class="label secondary-outline">次要</span>
<span class="label success-outline">成功</span>
<span class="label warning-outline">关注</span>
<span class="label danger-outline">警告</span>
<span class="label important-outline">重要</span>
<span class="label special-outline">特殊</span>
<span class="label lighter-outline">更浅色</span>
<span class="label light-outline">浅色</span>
<span class="label gray-outline">灰色</span>
<span class="label dark-outline">深色</span>
<span class="label darker-outline">更深色</span>
<span class="label black-outline">纯黑</span>
```

### 浅色标签

<Example class="flex gap-4 flex-wrap">
  <span class="label primary-pale">主要</span>
  <span class="label secondary-pale">次要</span>
  <span class="label success-pale">成功</span>
  <span class="label warning-pale">关注</span>
  <span class="label danger-pale">警告</span>
  <span class="label important-pale">重要</span>
  <span class="label special-pale">特殊</span>
  <span class="label lighter-pale">更浅色</span>
  <span class="label light-pale">浅色</span>
  <span class="label gray-pale">灰色</span>
</Example>

```html
<span class="label primary-pale">主要</span>
<span class="label secondary-pale">次要</span>
<span class="label success-pale">成功</span>
<span class="label warning-pale">关注</span>
<span class="label danger-pale">警告</span>
<span class="label important-pale">重要</span>
<span class="label special-pale">特殊</span>
<span class="label lighter-pale">更浅色</span>
<span class="label light-pale">浅色</span>
<span class="label gray-pale">灰色</span>
```

搭配 CSS 工具类 `ring-*` 还可以为浅色标签添加描边。

<Example class="flex gap-4 flex-wrap">
  <span class="label primary-pale ring-primary">主要</span>
  <span class="label secondary-pale ring-secondary">次要</span>
  <span class="label success-pale ring-success">成功</span>
  <span class="label warning-pale ring-warning">关注</span>
  <span class="label danger-pale ring-danger">警告</span>
  <span class="label important-pale ring-important">重要</span>
  <span class="label special-pale ring-special">特殊</span>
  <span class="label lighter-pale ring-lighter">更浅色</span>
  <span class="label light-pale ring-light">浅色</span>
  <span class="label gray-pale ring-dark">灰色</span>
</Example>

```html
<span class="label primary-pale ring-primary">主要</span>
<span class="label secondary-pale ring-secondary">次要</span>
<span class="label success-pale ring-success">成功</span>
<span class="label warning-pale ring-warning">关注</span>
<span class="label danger-pale ring-danger">警告</span>
<span class="label important-pale ring-important">重要</span>
<span class="label special-pale ring-special">特殊</span>
<span class="label lighter-pale ring-lighter">更浅色</span>
<span class="label light-pale ring-light">浅色</span>
<span class="label gray-pale ring-dark">灰色</span>
```

### 标签文本颜色

搭配 CSS 工具类 `text-*` 修改标签文本颜色。

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <span class="label text-primary">主要</span>
  <span class="label text-secondary">次要</span>
  <span class="label text-success">成功</span>
  <span class="label text-warning">关注</span>
  <span class="label text-danger">警告</span>
  <span class="label text-important">重要</span>
  <span class="label text-special">特殊</span>
  <span class="label text-lighter">更浅色</span>
  <span class="label text-light">浅色</span>
  <span class="label text-gray">灰色</span>
  <span class="label text-dark">深色</span>
  <span class="label text-darker">更深色</span>
  <span class="label text-black">纯黑</span>
</Example>

```html
<span class="label text-primary">主要</span>
<span class="label text-secondary">次要</span>
<span class="label text-success">成功</span>
<span class="label text-warning">关注</span>
<span class="label text-danger">警告</span>
<span class="label text-important">重要</span>
<span class="label text-special">特殊</span>
<span class="label text-lighter">更浅色</span>
<span class="label text-light">浅色</span>
<span class="label text-gray">灰色</span>
<span class="label text-dark">深色</span>
<span class="label text-darker">更深色</span>
<span class="label text-black">纯黑</span>
```

## 尺寸

除了默认大小，标签还提供了额外的 2 种预设尺寸。

<Example class="flex gap-4 flex-wrap items-end">
  <span class="label size-sm">小标签</span>
  <span class="label">普通大小</span>
  <span class="label size-lg">大标签</span>
</Example>

```html
<span class="label size-sm">小标签</span>
<span class="label">普通大小</span>
<span class="label size-lg">大标签</span>
```
## 圆点标签

当与工具类 `label-dot` 一起使用时则获得圆点标签。

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
  <button class="btn" type="button">按钮 <span class="label sm rounded-full">12</span></button>
</Example>

```html
<button class="btn" type="button">按钮 <span class="label sm rounded-full">12</span></button>
```
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
| --label-bg           | 标签背景色 |
| --label-color        | 标签文字颜色 |
| --label-border-color | 标签边框颜色 |
| --label-radius       | 标签圆角     |
