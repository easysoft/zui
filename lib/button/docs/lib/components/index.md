# 按钮

按钮是用来触发一些动作。通常用在表单、对话框、菜单上面。好的按钮设计能够引导用户高效的达到目的。

## 使用方法

使用 `.btn` 类来获得按钮的外观和交互体验，通常用在元素 `<button>` 或 `<a>` 上。

::: tabs

== 示例

<Example class="flex gap-4">
  <button type="button" class="btn">保存草稿</button>
</Example>

== HTML

```html
<button type="button" class="btn">保存草稿</button>
```

:::

配合丰富的[CSS 工具类](/utilities/)来实现不同按钮的外观。

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <button type="button" class="btn primary">发布文章</button>
  <button type="button" class="btn black rounded-none">预览文章</button>
  <button type="button" class="btn secondary-outline square" aria-label="新建">＋</button>
  <button type="button" class="btn dark-outline circle" aria-label="帮助">？</button>
  <button type="button" class="btn danger-pale square circle" aria-label="喜欢">❤️</button>
  <button type="button" class="btn text-primary ghost">查看详情</button>
</Example>

== HTML

```html
<button type="button" class="btn primary">发布文章</button>
<button type="button" class="btn black rounded-none">预览文章</button>
<button type="button" class="btn secondary-outline square" aria-label="新建">＋</button>
<button type="button" class="btn dark-outline circle" aria-label="帮助">？</button>
<button type="button" class="btn danger-pale square circle" aria-label="喜欢">❤️</button>
<button type="button" class="btn text-primary ghost">查看详情</button>
```

:::

## 图标按钮

按钮配合[图标组件](/lib/icons/icons/)一起使用时，自动呈现为图标按钮。

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn"><i class="icon icon-star"></i> 收藏文章</button>
  <button type="button" class="btn">下一步<i class="icon icon-angle-right"></i></button>
  <button type="button" class="btn square" aria-label="点赞"><i class="icon icon-thumbs-up"></i></button>
</Example>

== HTML

```html
<button type="button" class="btn"><i class="icon icon-star"></i> 收藏文章</button>
<button type="button" class="btn">下一步<i class="icon icon-angle-right"></i></button>
<button type="button" class="btn square" aria-label="点赞"><i class="icon icon-thumbs-up"></i></button>
```

:::

## 外观

### 外观类型

配合使用[CSS 工具类](/utilities/)来实现不同按钮的外观。下面展示各种工具类的外观效果。

::: tabs

== 实心

<Example class="row flex-wrap gap-3" background="light-circle">
  <button v-for="skin in zui.skin.accent" class="btn capitalize" :class="skin">{{skin}}</button>
</Example>

== 灰度

<Example class="row flex-wrap gap-3" background="light-circle">
  <button v-for="skin in zui.skin.gray" class="btn capitalize" :class="skin">{{skin}}</button>
</Example>

== 轮廓

<Example class="row flex-wrap gap-3" background="light-circle">
  <button v-for="skin in zui.skin.outline" class="btn capitalize" :class="skin">{{skin}}</button>
</Example>

== 浅色

<Example class="row flex-wrap gap-3" background="light-circle">
  <button v-for="skin in zui.skin.pale" class="btn capitalize" :class="skin">{{skin}}</button>
</Example>

== 透明

<Example class="row flex-wrap gap-3" background="light-circle">
  <button v-for="skin in zui.skin.ghost" class="btn capitalize" :class="skin">{{skin}}</button>
</Example>

== HTML

```html
<button class="btn primary">...</button>
```

:::

### 链接按钮

使用 `.btn-link` 类来获得链接按钮的外观。

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn btn-link">查看详情</button>
  <button type="button" class="btn btn-link text-fore">返回列表</button>
</Example>

== HTML

```html
<button type="button" class="btn btn-link">查看详情</button>
<button type="button" class="btn btn-link text-fore">返回列表</button>
```

:::

### 按钮圆角

搭配 CSS 工具类 `rounded-*` 为按钮应用不同的圆角样式。

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn rounded-none">无圆角</button>
  <button type="button" class="btn rounded-sm">小圆角</button>
  <button type="button" class="btn rounded">普通圆角</button>
  <button type="button" class="btn rounded-md">中等圆角</button>
  <button type="button" class="btn rounded-lg">大圆角</button>
  <button type="button" class="btn rounded-xl">超大圆角</button>
  <button type="button" class="btn rounded-full">完整圆角</button>
</Example>

== HTML

```html
<button type="button" class="btn rounded-none">无圆角</button>
<button type="button" class="btn rounded-sm">小圆角</button>
<button type="button" class="btn rounded">普通圆角</button>
<button type="button" class="btn rounded-md">中等圆角</button>
<button type="button" class="btn rounded-lg">大圆角</button>
<button type="button" class="btn rounded-xl">超大圆角</button>
<button type="button" class="btn rounded-full">完整圆角</button>
```

:::

### 按钮阴影效果

搭配 CSS 工具类 `shadow-*` 为按钮应用不同的阴影样式。

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn shadow-inner">内阴影</button>
  <button type="button" class="btn shadow-none">无阴影</button>
  <button type="button" class="btn shadow-sm">小阴影</button>
  <button type="button" class="btn shadow">普通阴影</button>
  <button type="button" class="btn shadow-md">中等阴影</button>
  <button type="button" class="btn shadow-lg">大阴影</button>
  <button type="button" class="btn shadow-xl">超大阴影</button>
</Example>

== HTML

```html
<button type="button" class="btn shadow-inner">内阴影</button>
<button type="button" class="btn shadow-none">无阴影</button>
<button type="button" class="btn shadow-sm">小阴影</button>
<button type="button" class="btn shadow">普通阴影</button>
<button type="button" class="btn shadow-md">中等阴影</button>
<button type="button" class="btn shadow-lg">大阴影</button>
<button type="button" class="btn shadow-xl">超大阴影</button>
```

:::

## 尺寸

除了默认大小，按钮还提供了额外的 4 种预设尺寸。

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn size-xs">超小按钮</button>
  <button type="button" class="btn size-sm">小按钮</button>
  <button type="button" class="btn size-md">中号按钮</button>
  <button type="button" class="btn">普通大小按钮</button>
  <button type="button" class="btn size-lg">大按钮</button>
  <button type="button" class="btn size-xl">超大按钮</button>
</Example>

== HTML

```html
<button type="button" class="btn size-xs">超小按钮</button>
<button type="button" class="btn size-sm">小按钮</button>
<button type="button" class="btn size-md">中号按钮</button>
<button type="button" class="btn">普通大小按钮</button>
<button type="button" class="btn size-lg">大按钮</button>
<button type="button" class="btn size-xl">超大按钮</button>
```

:::

## 形状

### 正方形按钮

通过工具类 `square` 可以让按钮获得正方形外观，通常作为图标按钮使用。

::: tabs

== 示例

<Example class="flex gap-4 items-end">
  <button type="button" class="btn square size-xs">XS</button>
  <button type="button" class="btn square size-sm">S</button>
  <button type="button" class="btn square" aria-label="新建">＋</button>
  <button type="button" class="btn square size-lg">L</button>
  <button type="button" class="btn square size-xl">XL</button>
</Example>

== HTML

```html
<button type="button" class="btn square size-xs">XS</button>
<button type="button" class="btn square size-sm">S</button>
<button type="button" class="btn square" aria-label="新建">＋</button>
<button type="button" class="btn square size-lg">L</button>
<button type="button" class="btn square size-xl">XL</button>
```

:::

### 圆形按钮

当与工具类 `circle` 与 `square` 一起使用时则获得圆形按钮。

::: tabs

== 示例

<Example class="flex gap-4 items-end">
  <button type="button" class="btn square circle size-xs">XS</button>
  <button type="button" class="btn square circle size-sm">S</button>
  <button type="button" class="btn square circle">正</button>
  <button type="button" class="btn square circle size-lg">L</button>
  <button type="button" class="btn square circle size-xl">XL</button>
</Example>

== HTML

```html
<button type="button" class="btn square circle size-xs">XS</button>
<button type="button" class="btn square circle size-sm">S</button>
<button type="button" class="btn square circle">正</button>
<button type="button" class="btn square circle size-lg">L</button>
<button type="button" class="btn square circle size-xl">XL</button>
```

:::

## 状态

### 禁用状态

为原生 `<button>` 添加 `disabled` 属性来禁用按钮。浏览器会阻止用户通过鼠标或键盘激活它，将其移出 Tab 焦点顺序，并向辅助技术提供禁用状态。下面的按钮因必填项尚未填写而不可提交。

::: tabs

== 示例

<Example class="flex gap-4 items-end">
  <button type="button" class="btn" disabled title="请先填写必填项">提交审核</button>
</Example>

== HTML

```html
<button type="button" class="btn" disabled title="请先填写必填项">提交审核</button>
```

:::

`disabled` 工具类（`.disabled`）只改变光标、灰度和透明度，不会设置原生 `disabled` 属性或 `aria-disabled` 状态，也不会阻止点击、键盘激活或脚本触发。对于原生按钮，即使添加了 `.disabled` 类，仍须使用 `disabled` 属性禁用。

操作控件应优先使用原生 `<button>`。必须使用链接或其他非原生控件时，需通过 `aria-disabled="true"` 告知辅助技术，并在事件处理和业务入口检查禁用状态、阻止激活，同时按控件的键盘交互规则管理焦点。`aria-disabled` 只提供语义；`pointer-events-none` 只阻止指针命中，两者都不能单独实现完整的禁用行为。

## 激活状态

为按钮添加 `active` 类启用激活状态。

::: tabs

== 示例

<Example class="flex gap-4 items-end">
  <button type="button" class="btn active">已关注</button>
  <button type="button" class="btn">关注</button>
</Example>

== HTML

```html
<button type="button" class="btn active">已关注</button>
```

:::

### 加载中状态

为按钮提供动画图标实现加载中状态。

::: tabs

== 示例

<Example class="flex gap-4 items-end">
  <button type="button" class="btn">
    <i class="animate-spin icon icon-spinner-snake"></i>
    正在保存
  </button>
</Example>

== HTML

```html
<button type="button" class="btn">
  <i class="animate-spin icon icon-spinner-snake"></i>
  正在保存
</button>
```

:::

## CSS 类

按钮提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `btn`      | 实体类 | 元素作为按钮组件 |
| `btn-link`      | 修饰类 | 使用链接按钮外观 |
| `square`      | 工具类 | 按钮使用正方形外观 |
| `size-xs`      | 工具类      |   按钮使用超小号尺寸 |
| `size-sm`      | 工具类      |   按钮使用小号尺寸 |
| `size-lg`      | 工具类      |   按钮使用大号尺寸 |
| `size-xl`      | 工具类      |   按钮使用超大号尺寸 |


## CSS 变量

| 变量名称 | 变量含义 |
| -------- | -------- |
| `--btn-radius`       | 按钮圆角     |
| `--btn-bg`   | 按钮背景颜色 |
| `--btn-border-color` | 按钮边框颜色 |
| `--btn-height` | 按钮高度 |
