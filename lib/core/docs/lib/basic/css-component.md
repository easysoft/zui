# CSS 组件

## 基本使用

CSS 组件通常提供了界面所需的基本功能，例如按钮、表单、导航、卡片、表格等，这些组件通常不需要 JS 的支持，只需要在 HTML 中使用对应的组件类名即可，例如按钮：

::: tabs

== 示例

<Example class="flex gap-4">
  <button type="button" class="btn">按钮</button>
</Example>

== HTML

```html
<button type="button" class="btn">按钮</button>
```

:::


::: tip 提示

一些 JS 组件也提供了纯 CSS 使用的方式，也就是说 CSS 组件也可能是一个 JS 组件。

:::

## 组件样式


### 通用样式修饰

CSS 组件通常提供了多种样式修饰，例如按钮的颜色、大小、形状、状态等，大部分通用样式的修饰都可以通过 [CSS 工具类](/utilities/skin/utilities/solid.html)来实现，例如：

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap" background="light-circle">
  <button type="button" class="btn primary">主要按钮</button>
  <button type="button" class="btn black rounded-none">黑色按钮</button>
  <button type="button" class="btn secondary-outline square">正</button>
  <button type="button" class="btn dark-outline circle">描边</button>
  <button type="button" class="btn danger-pale square circle">❤️</button>
  <button type="button" class="btn text-primary ghost">链接按钮</button>
</Example>

== HTML

```html
<button type="button" class="btn primary">主要按钮</button>
<button type="button" class="btn black rounded-none">黑色按钮</button>
<button type="button" class="btn secondary-outline square">正</button>
<button type="button" class="btn dark-outline circle">描边</button>
<button type="button" class="btn danger-pale square circle">❤️</button>
<button type="button" class="btn text-primary ghost">链接按钮</button>
```

:::

### 专用样式修饰

部分组件提供了专用样式修饰类，这些类名通常为组件类加后缀实现，例如按钮组件的 `btn-link`：

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn btn-link">链接按钮</button>
  <button type="button" class="btn btn-link text-fore">普通颜色文字链接</button>
</Example>

== HTML

```html
<button type="button" class="btn btn-link">链接按钮</button>
<button type="button" class="btn btn-link text-fore">普通颜色文字链接</button>
```

:::

## CSS 变量

CSS 组件通常提供了一些 CSS 变量用于自定义组件的样式，例如按钮组件提供了 `--btn-bg` 用于自定义按钮的颜色：

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap">
  <button type="button" class="btn" style="--btn-bg: red;">红色按钮</button>
</Example>

== HTML

```html
<button type="button" class="btn" style="--btn-bg: red;">红色按钮</button>
```

:::
