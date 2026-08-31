# 分栏

`Split` 基于 [split.js](https://split.js.org/) 实现可拖拽调整的分栏布局。它把根元素下的分栏子元素（默认 `.split-cell`）用可拖动的分隔条（gutter）隔开，支持水平/垂直方向、初始尺寸、折叠按钮、双击折叠与动画。

## 使用方法

### 基础用法

在根元素上添加 `split` 类，并为每个分栏添加 `split-cell` 类，然后对根元素初始化 `Split`。拖动分隔条即可调整相邻分栏尺寸。

::: tabs

== 示例

<Example>
  <div class="split ring rounded" id="splitBasic" style="height: 160px;">
    <div class="split-cell center">A</div>
    <div class="split-cell center">B</div>
    <div class="split-cell center">C</div>
  </div>
</Example>

== HTML

```html
<div class="split ring rounded" id="splitBasic" style="height: 160px;">
  <div class="split-cell center">A</div>
  <div class="split-cell center">B</div>
  <div class="split-cell center">C</div>
</div>

<script>
new zui.Split('#splitBasic');
</script>
```

:::

### 垂直分栏

设置 `vertical: true` 得到上下排列的分栏。

::: tabs

== 示例

<Example>
  <div class="split ring rounded" id="splitVertical" style="height: 240px;">
    <div class="split-cell center">上</div>
    <div class="split-cell center">下</div>
  </div>
</Example>

== HTML

```html
<div class="split ring rounded" id="splitVertical" style="height: 240px;">
  <div class="split-cell center">上</div>
  <div class="split-cell center">下</div>
</div>

<script>
new zui.Split('#splitVertical', {vertical: true});
</script>
```

:::

### 初始尺寸

通过 `sizes` 指定每个分栏的初始尺寸，支持百分比（`'50%'`）、像素（`'125px'` 或数字）、分数（`'1/3'`），或 `null`/`undefined` 表示按剩余空间自动分配。

::: tabs

== 示例

<Example>
  <div class="split ring rounded" id="splitSizes" style="height: 160px;">
    <div class="split-cell center">125px</div>
    <div class="split-cell center">auto</div>
    <div class="split-cell center">auto</div>
  </div>
</Example>

== HTML

```html
<div class="split ring rounded" id="splitSizes" style="height: 160px;">
  <div class="split-cell center">125px</div>
  <div class="split-cell center">auto</div>
  <div class="split-cell center">auto</div>
</div>

<script>
new zui.Split('#splitSizes', {
    sizes: ['125px', null, null],
});
</script>
```

:::

### 折叠按钮与双击折叠

设置 `toggleBtn: true` 在每个分隔条上生成折叠按钮；也可传布尔数组逐个分隔条控制。默认 `dblClickToggle` 为 `true`，双击分隔条即可折叠/展开相邻分栏。`animation: true` 可为折叠/展开添加过渡动画。

::: tabs

== 示例

<Example>
  <div class="split ring rounded" id="splitToggle" style="height: 160px;">
    <div class="split-cell center">A</div>
    <div class="split-cell center">B</div>
    <div class="split-cell center">C</div>
  </div>
</Example>

== HTML

```html
<div class="split ring rounded" id="splitToggle" style="height: 160px;">
  <div class="split-cell center">A</div>
  <div class="split-cell center">B</div>
  <div class="split-cell center">C</div>
</div>

<script>
new zui.Split('#splitToggle', {
    toggleBtn: true,
    animation: true,
    minSize: 0,
});
</script>
```

:::

## 程序化控制

通过 `zui.Split.query('#el')` 或 `zui.Component.get` 获取实例后，可调用以下方法进行控制：

```js
const split = new zui.Split('#splitBasic');

// 读取/设置各分栏尺寸百分比
const sizes = split.getSizes();
split.setSizes([50, 25, 25]);

// 折叠、展开、切换指定分栏
split.collapse(0);
split.expand(0);
split.toggle(2);
```

## 选项

<Props>
/** 分栏元素，默认取根元素下 `.split-cell` 子元素。可为选择器、元素或它们的数组。 */
elements?: Selector | Selector[] = ".split-cell";

/** 各分栏的初始尺寸，支持百分比、像素、分数或 null/undefined 自动分配。 */
sizes?: (SizeSetting | undefined | null)[];

/** 是否为垂直（上下）分栏，默认水平（左右）。 */
vertical?: boolean = false;

/** 分隔条尺寸（像素）。 */
gutterSize?: number = 8;

/** 是否在分隔条上生成折叠按钮，可传布尔数组逐个分隔条控制。 */
toggleBtn?: boolean | boolean[] = false;

/** 是否允许双击分隔条折叠/展开。 */
dblClickToggle?: boolean = true;

/** 折叠/展开时是否启用过渡动画。 */
animation?: boolean = false;

/** 拖动结束回调，参数为各分栏最新百分比尺寸。 */
onDragEnd?: (sizes: number[]) => void;
</Props>

> 其余选项（如 `minSize`、`snapOffset`、`direction` 等）透传给底层 [split.js](https://split.js.org/#options)。

## 方法

| 方法 | 说明 |
| --- | --- |
| `setSizes(sizes, usePercent?)` | 设置各分栏尺寸。默认按尺寸配置解析并归一化；`usePercent` 为 `true` 时直接使用百分比数组。 |
| `getSizes()` | 返回各分栏当前百分比尺寸数组。 |
| `collapse(index)` | 将指定分栏尺寸折叠为 0，并记录折叠前尺寸。 |
| `expand(index)` | 展开分栏，尽量恢复折叠前尺寸。 |
| `toggle(index)` | 在折叠与展开之间切换指定分栏。 |
| `isCollapsed(index)` | 判断指定分栏是否已折叠。 |
| `destroy(preserveStyles?, preserveGutters?)` | 销毁实例，移除分隔条与 split.js 设置的尺寸样式。 |

## 样式

组件在根元素上根据方向切换 `split-vert`/`split-horz` 类，启用动画时添加 `has-animation` 类，并输出以下 CSS 变量：

- `--split-gutter-size`：分隔条尺寸，由 `gutterSize` 选项决定。

折叠按钮使用 `@zui/css-icons` 的 `chevron` 图标；分隔条与折叠状态样式由 `split.css` 提供（`.gutter`、`.gutter-toggle`、`.is-collapsed` 等）。
