# CSS 图标

ZUI 提供一组用纯 CSS 绘制的小图标，不依赖图标字体，也不加载图片。它们全部使用 `currentColor` 取色，因此用 `color` 或文本颜色类即可改变颜色。

## 下拉图标

`.caret` 表示可以展开的下拉入口，另有四个方向变体，`.caret` 与 `.caret-down` 等价。

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <span class="caret"></span>
  <span class="caret-up"></span>
  <span class="caret-right"></span>
  <span class="caret-down"></span>
  <span class="caret-left"></span>
  <span class="caret text-primary"></span>
</Example>

== HTML

```html
<span class="caret"></span>
<span class="caret-up"></span>
<span class="caret-right"></span>
<span class="caret-down"></span>
<span class="caret-left"></span>
<span class="caret text-primary"></span>
```

:::

下拉图标默认以 `--caret-opacity`（`.5`）显示，比正文更淡，作为次要元素出现。在任意祖先元素上覆盖 `--caret-opacity` 即可调整其中所有下拉图标的深浅。

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <span class="row items-center gap-1">默认 <span class="caret"></span></span>
  <span class="row items-center gap-1" style="--caret-opacity: 1">加深 <span class="caret"></span></span>
  <span class="row items-center gap-1" style="--caret-opacity: .3">变淡 <span class="caret"></span></span>
  <span class="row items-center gap-1 disabled">禁用 <span class="caret"></span></span>
</Example>

== HTML

```html
<span class="row items-center gap-1">默认 <span class="caret"></span></span>
<span class="row items-center gap-1" style="--caret-opacity: 1">加深 <span class="caret"></span></span>
<span class="row items-center gap-1" style="--caret-opacity: .3">变淡 <span class="caret"></span></span>
<span class="row items-center gap-1 disabled">禁用 <span class="caret"></span></span>
```

:::

`.disabled` 和 `.readonly` 不会额外调暗下拉图标，它们的作用是把图标的不透明度固定在 `--caret-opacity` 上：`@zui/utilities` 的 `.disabled *` 会把容器内所有元素改成 `--opacity-disabled`，若不固定，禁用容器里的下拉图标反而会比正常状态更明显。禁用容器本身的整体变淡仍然生效。

## V 形

`.chevron-*` 是尺寸更大、跟随字号缩放的 V 形图标，没有不带方向后缀的写法。

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <span class="chevron-up"></span>
  <span class="chevron-right"></span>
  <span class="chevron-down"></span>
  <span class="chevron-left"></span>
  <span class="chevron-right text-xl"></span>
  <span class="chevron-right text-xl text-primary"></span>
</Example>

== HTML

```html
<span class="chevron-up"></span>
<span class="chevron-right"></span>
<span class="chevron-down"></span>
<span class="chevron-left"></span>
<span class="chevron-right text-xl"></span>
<span class="chevron-right text-xl text-primary"></span>
```

:::

## 切换图标

`.toggle-icon-collapse` 是加号，`.toggle-icon-expand` 是减号，用于固定显示某一种状态。

`.toggle-icon` 本身只画外框，加号或减号由祖先元素上的 `.is-collapsed` / `.is-expanded` 决定，适合挂在一个会切换状态的按钮上。

图标的圆角取自 `border-radius: inherit`，所以在图标上加 `rounded-full` 即可得到圆形。

::: tabs

== 示例

<Example class="flex items-center gap-3">
  <span class="toggle-icon-collapse"></span>
  <span class="toggle-icon-expand"></span>
  <button type="button" class="btn is-collapsed"><span class="toggle-icon"></span></button>
  <button type="button" class="btn is-expanded"><span class="toggle-icon"></span></button>
  <span class="toggle-icon-collapse rounded-full"></span>
  <span class="toggle-icon-expand rounded-full"></span>
  <button type="button" class="btn is-collapsed"><span class="toggle-icon rounded-full"></span></button>
  <button type="button" class="btn is-expanded"><span class="toggle-icon rounded-full"></span></button>
</Example>

== HTML

```html
<span class="toggle-icon-collapse"></span>
<span class="toggle-icon-expand"></span>
<button type="button" class="btn is-collapsed"><span class="toggle-icon"></span></button>
<button type="button" class="btn is-expanded"><span class="toggle-icon"></span></button>

<span class="toggle-icon-collapse rounded-full"></span>
<span class="toggle-icon-expand rounded-full"></span>
<button type="button" class="btn is-collapsed"><span class="toggle-icon rounded-full"></span></button>
<button type="button" class="btn is-expanded"><span class="toggle-icon rounded-full"></span></button>
```

:::

## 关闭

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <span class="close"></span>
  <span class="close text-lg"></span>
  <span class="close text-xl text-danger"></span>
</Example>

== HTML

```html
<span class="close"></span>
<span class="close text-lg"></span>
<span class="close text-xl text-danger"></span>
```

:::

## 加载中指示图标

`.spinner` 是一个持续旋转的环形指示器。

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <span class="spinner"></span>
  <span class="spinner text-lg"></span>
  <span class="spinner text-xl text-primary"></span>
</Example>

== HTML

```html
<span class="spinner"></span>
<span class="spinner text-lg"></span>
<span class="spinner text-xl text-primary"></span>
```

:::

## 放大镜

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <span class="magnifier"></span>
  <span class="magnifier text-lg"></span>
  <span class="magnifier text-xl text-primary"></span>
</Example>

== HTML

```html
<span class="magnifier"></span>
<span class="magnifier text-lg"></span>
<span class="magnifier text-xl text-primary"></span>
```

:::

## 更多

`.more` 是横向排列的三个点，`.more-vert` 是纵向排列的三个点。两者尺寸固定，不随字号变化。

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <span class="more"></span>
  <span class="more-vert"></span>
  <span class="more-vert text-primary"></span>
</Example>

== HTML

```html
<span class="more"></span>
<span class="more-vert"></span>
<span class="more-vert text-primary"></span>
```

:::

## 时间

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <span class="i-time"></span>
  <span class="i-time text-lg"></span>
  <span class="i-time text-xl text-primary"></span>
</Example>

== HTML

```html
<span class="i-time"></span>
<span class="i-time text-lg"></span>
<span class="i-time text-xl text-primary"></span>
```

:::

## 日历

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <span class="i-calendar"></span>
  <span class="i-calendar text-lg"></span>
  <span class="i-calendar text-xl text-primary"></span>
</Example>

== HTML

```html
<span class="i-calendar"></span>
<span class="i-calendar text-lg"></span>
<span class="i-calendar text-xl text-primary"></span>
```

:::

## 箭头

`.arrow` 是气泡的小尖角，`@zui/popover` 用它画弹出面板的指向。它与其他图标的用法不同：

- 它通过 `background: inherit` 和 `border: inherit` 复制父元素的背景色和边框，所以**父元素必须自身带有背景色和边框**，否则什么都看不到。
- 它是绝对定位的，父元素需要 `position: relative`，并由使用方决定它在哪条边上的位置。
- 方向类同时决定尖角朝向和它贴在哪条边上。`.arrow-top` 与 `.arrow-up` 等价，`.arrow-bottom` 与 `.arrow-down` 等价。

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
    <span class="arrow arrow-up" style="left: 50%"></span>
  </div>
  <div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
    <span class="arrow arrow-down" style="left: 50%"></span>
  </div>
  <div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
    <span class="arrow arrow-left" style="top: 50%"></span>
  </div>
  <div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
    <span class="arrow arrow-right" style="top: 50%"></span>
  </div>
</Example>

== HTML

```html
<div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
  <span class="arrow arrow-up" style="left: 50%"></span>
</div>
```

:::

尖角大小由 `--arrow-size` 控制，默认 `5px`，声明在 `.arrow` 上，在图标元素或更具体的选择器上覆盖即可。

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
    <span class="arrow arrow-down" style="left: 50%; --arrow-size: 5px"></span>
  </div>
  <div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
    <span class="arrow arrow-down" style="left: 50%; --arrow-size: 10px"></span>
  </div>
  <div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
    <span class="arrow arrow-down" style="left: 50%; --arrow-size: 16px"></span>
  </div>
</Example>

== HTML

```html
<div class="-relative -w-24 -h-16 -rounded -border -border-[--color-border] -bg-surface">
  <span class="arrow arrow-down" style="left: 50%; --arrow-size: 10px"></span>
</div>
```

:::

## 尺寸

图标分两类，混用时需要注意：

| 图标 | 尺寸行为 |
| ---- | -------- |
| `chevron-*`、`close`、`spinner`、`magnifier`、`i-time`、`i-calendar` | 边长为 `1em`，跟随所在元素的 `font-size` 缩放，可用 `text-lg`、`text-xl` 等文本尺寸类调整 |
| `caret`、`caret-*` | 固定 `0.75rem`，不随字号变化 |
| `toggle-icon`、`toggle-icon-collapse`、`toggle-icon-expand` | 由 `--toggle-icon-size` 决定，不随字号变化 |
| `more`、`more-vert` | 固定尺寸，不随字号变化 |
| `arrow`、`arrow-*` | 由 `--arrow-size` 决定，不随字号变化 |

## CSS 类

CSS 图标提供了如下 CSS 类：

| 类 | 类型 | 作用 |
| --- |:---:| --- |
| `caret` | 实体类 | 元素作为向下的下拉图标，等价于 `caret-down` |
| `caret-up` | 实体类 | 元素作为向上的下拉图标 |
| `caret-down` | 实体类 | 元素作为向下的下拉图标 |
| `caret-left` | 实体类 | 元素作为向左的下拉图标 |
| `caret-right` | 实体类 | 元素作为向右的下拉图标 |
| `chevron-up` | 实体类 | 元素作为向上的 V 形图标 |
| `chevron-down` | 实体类 | 元素作为向下的 V 形图标 |
| `chevron-left` | 实体类 | 元素作为向左的 V 形图标 |
| `chevron-right` | 实体类 | 元素作为向右的 V 形图标 |
| `toggle-icon` | 实体类 | 元素作为切换图标，加号或减号由祖先元素的 `is-collapsed` / `is-expanded` 决定 |
| `toggle-icon-collapse` | 实体类 | 元素作为加号切换图标 |
| `toggle-icon-expand` | 实体类 | 元素作为减号切换图标 |
| `close` | 实体类 | 元素作为关闭图标 |
| `spinner` | 实体类 | 元素作为加载中指示图标 |
| `magnifier` | 实体类 | 元素作为放大镜图标 |
| `more` | 实体类 | 元素作为横向的更多图标 |
| `more-vert` | 实体类 | 元素作为纵向的更多图标 |
| `i-time` | 实体类 | 元素作为时间图标 |
| `i-calendar` | 实体类 | 元素作为日历图标 |
| `arrow` | 实体类 | 元素作为气泡尖角，需要父元素自身带背景色和边框 |
| `arrow-up` | 修饰类 | 与 `arrow` 搭配使用，尖角朝上并贴在父元素上边，等价于 `arrow-top` |
| `arrow-top` | 修饰类 | 与 `arrow` 搭配使用，尖角朝上并贴在父元素上边 |
| `arrow-down` | 修饰类 | 与 `arrow` 搭配使用，尖角朝下并贴在父元素下边，等价于 `arrow-bottom` |
| `arrow-bottom` | 修饰类 | 与 `arrow` 搭配使用，尖角朝下并贴在父元素下边 |
| `arrow-left` | 修饰类 | 与 `arrow` 搭配使用，尖角朝左并贴在父元素左边 |
| `arrow-right` | 修饰类 | 与 `arrow` 搭配使用，尖角朝右并贴在父元素右边 |
| `is-collapsed` | 修饰类 | 放在 `toggle-icon` 的祖先元素上，使其显示为加号 |
| `is-expanded` | 修饰类 | 放在 `toggle-icon` 的祖先元素上，使其显示为减号 |
| `disabled` | 修饰类 | 放在下拉图标的祖先元素上，把图标的不透明度固定为 `--caret-opacity` |
| `readonly` | 修饰类 | 放在下拉图标的祖先元素上，把图标的不透明度固定为 `--caret-opacity` |

## CSS 变量

CSS 图标提供了如下 CSS 变量：

| 变量名称 | 变量含义 | 默认值 | 声明位置 |
| --- | --- | --- | --- |
| `--caret-opacity` | 下拉图标的不透明度 | `.5` | `:root` |
| `--toggle-icon-size` | 切换图标的边长 | `calc((var(--font-size-root) * 3 / 4) + 1px)` | `:root` |
| `--arrow-size` | 气泡尖角的大小 | `5px` | `.arrow` |

`--caret-opacity` 与 `--toggle-icon-size` 声明在 `:root` 上，图标从祖先元素继承它们的值，因此既可以在 `:root` 上全局覆盖，也可以在任意祖先元素上局部覆盖，例如在某个工具栏上把其中的下拉图标整体加深。

`--arrow-size` 声明在 `.arrow` 自身上，继承而来的值不会生效，需要覆盖到图标元素本身，例如行内 `style` 或更具体的选择器。
