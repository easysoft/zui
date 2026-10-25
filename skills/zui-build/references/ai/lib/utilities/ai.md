# CSS 工具类

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"utilities","summary":"提供布局、间距、尺寸、文字、皮肤、边框和交互状态等有界 CSS 工具类及组合样式。","keywords":["CSS","工具类","布局","主题","皮肤","间距","状态"]}
```

## overview

用于用现成 CSS 类完成布局、尺寸、排版、颜色、边框、动画和简单交互外观。多数类可直接加在普通 HTML 元素上；少数组合样式（加载指示器、状态效果、弹出层外观、分隔线）及状态辅助类在相应条目说明结构条件。

本库不提供 JavaScript 组件、事件逻辑、自动布局测量或交互状态管理。需要弹出定位、菜单控制或真实禁用语义时应结合对应组件/原生 HTML 行为。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 `@zui/*` 解析，以及仓库 Vite/PostCSS/Tailwind 配置；`@zui/base` 提供基础样式、预设及主题变量。没有 JSX 或注册步骤。

```ts
import '@zui/base';
import '@zui/utilities';
```

浏览器 HTML 示例的前提是已加载包含 base、utilities 的 ZUI CSS；展示 `.btn` 等其他组件时还需包含该组件 CSS。标准 npm 的样式入口为 `zui/css`，按目标包实际产物使用；工作区包名不等于可单独安装的 npm 包。见[接入规范](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/.agents/skills/zui-standards/references/consumption.md>)。

[src/main.ts](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/main.ts>) 导入 vars 以及全部十组 CSS，不导出 JS 成员。类名以本页明确列出的集合为边界，不能按 Tailwind 全集推导支持。HTML 使用 `p-0.5`、`w-1/2`、`hover:text-primary`，CSS 定义中转义字符不进入 HTML 类名。

## vanilla

无。

## preact

无。

## web-components

无。

## css

条目中的“支持类名”是当前实际选择器集合。普通数字间距 `n` 对应 `n × 0.25rem`，`px` 为 `1px`，分数为相应百分比；只有各条目列出的值才有效。字号、颜色、圆角、阴影等使用 ZUI 主题，不能套用 Tailwind 默认值。类名里的 x/y 是 CSS 物理方向，非 writing-mode 逻辑方向。

### css-layout-aspect-ratio

```json
{"name":"宽高比","summary":"约束元素宽高比：auto 为自动，square 为 1/1，video 为 16/9。","role":"utility"}
```

约束元素宽高比：auto 为自动，square 为 1/1，video 为 16/9。通常至少一个尺寸为自动才能体现比例。

支持类名（完整集合）：

- `aspect-auto`、`aspect-square`、`aspect-video`

来源：[layout/aspect-ratio.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/layout/aspect-ratio.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="aspect-video surface">16:9 内容区域</div>
```

### css-layout-container

```json
{"name":"居中容器","summary":"宽度为 100%，并按主题断点限制最大宽度，额外包含水平自动 margin；不是固定宽度或自带内边距的容器。","role":"utility"}
```

宽度为 100%，并按主题断点限制最大宽度，额外包含水平自动 margin；不是固定宽度或自带内边距的容器。

支持类名（完整集合）：

- `container`

来源：[layout/container.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/layout/container.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<main class="container p-4">居中页面内容</main>
```

### css-layout-display

```json
{"name":"显示方式","summary":"控制 display。","role":"utility"}
```

控制 display。`hidden` 和 `hide-children > *` 使用 `!important`，后者隐藏直接子元素；不公开 grid 或响应式显示变体。

支持类名（完整集合）：

- `block`、`inline-block`、`inline`、`flex`、`inline-flex`、`table`、`table-cell`、`table-row`、`hidden`、`hide-children`

来源：[layout/display.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/layout/display.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<span class="inline-block">行内块</span>
```

### css-layout-floats

```json
{"name":"浮动与清除","summary":"pull-left/right 设置浮动；clearfix 用块级 ::after 清除两侧浮动，应加在包住浮动子项的容器。","role":"utility"}
```

pull-left/right 设置浮动；clearfix 用块级 ::after 清除两侧浮动，应加在包住浮动子项的容器。

支持类名（完整集合）：

- `pull-right`、`pull-left`、`clearfix`

来源：[layout/floats.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/layout/floats.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="clearfix"><span class="pull-right">右侧内容</span>正文</div>
```

### css-layout-object

```json
{"name":"替换元素适配与位置","summary":"object-fit 类用于图片/视频等替换元素，需元素有约束尺寸才表现裁切；object-position 类控制内容位置。","role":"utility"}
```

object-fit 类用于图片/视频等替换元素，需元素有约束尺寸才表现裁切；object-position 类控制内容位置。

支持类名（完整集合）：

- `object-contain`、`object-cover`、`object-fill`、`object-none`、`object-scale-down`、`object-bottom`、`object-center`、`object-left`、`object-left-bottom`、`object-left-top`
- `object-right`、`object-right-bottom`、`object-right-top`、`object-top`

来源：[layout/object.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/layout/object.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。将 `./avatar.png` 替换为实际图片资源。

```html
<img class="object-cover w-16 h-16" src="./avatar.png" alt="头像">
```

### css-layout-overflow

```json
{"name":"溢出","summary":"控制全部或单轴溢出。","role":"utility"}
```

控制全部或单轴溢出。auto/scroll 需要尺寸限制才出现滚动；clip 不建立常规滚动容器；overlay 使用原生 overflow: overlay，行为受浏览器支持影响。

支持类名（完整集合）：

- `overflow-auto`、`overflow-hidden`、`overflow-clip`、`overflow-visible`、`overflow-scroll`、`overflow-x-auto`、`overflow-y-auto`、`overflow-x-hidden`、`overflow-y-hidden`、`overflow-x-clip`
- `overflow-y-clip`、`overflow-x-visible`、`overflow-y-visible`、`overflow-x-scroll`、`overflow-y-scroll`、`overflow-overlay`

来源：[layout/overflow.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/layout/overflow.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="h-16 overflow-auto"><div class="h-32">可滚动内容</div></div>
```

### css-layout-popup

```json
{"name":"弹出层外观","summary":"单个 `.popup` 元素获得 xl 阴影、低透明度外圈、85% canvas 背景、背景模糊和默认圆角。","role":"component"}
```

单个 `.popup` 元素获得 xl 阴影、低透明度外圈、85% canvas 背景、背景模糊和默认圆角。不提供定位、显隐、遮罩、焦点管理或 JS；常与定位工具类组合。

支持类名（完整集合）：

- `popup`

来源：[layout/popup.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/layout/popup.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="popup p-4">浮层外观内容</div>
```

### css-layout-position

```json
{"name":"定位模式","summary":"设置 static/fixed/absolute/relative/sticky。","role":"utility"}
```

设置 static/fixed/absolute/relative/sticky。absolute 相对定位祖先；sticky 还需 top 等偏移和足够滚动空间。

支持类名（完整集合）：

- `static`、`fixed`、`absolute`、`relative`、`sticky`

来源：[layout/position.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/layout/position.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="relative h-16"><span class="absolute top-0 right-0">右上角</span></div>
```

### css-layout-top-right-bottom-left

```json
{"name":"定位偏移","summary":"top/right/bottom/left 需配合非 static 定位。","role":"utility"}
```

top/right/bottom/left 需配合非 static 定位。full 为 100%，auto 恢复自动，inset 类同时设置多边。此处不公开负值或任意值类。

支持类名（完整集合）：

- `inset-0`、`inset-auto`、`inset-x-0`、`inset-y-0`、`top-0`、`right-0`、`bottom-0`、`left-0`、`top-full`、`right-full`
- `bottom-full`、`left-full`、`top-auto`、`right-auto`、`bottom-auto`、`left-auto`、`top-px`、`right-px`、`bottom-px`、`left-px`
- `top-0.5`、`right-0.5`、`bottom-0.5`、`left-0.5`、`top-1`、`right-1`、`bottom-1`、`left-1`、`top-1.5`、`right-1.5`
- `bottom-1.5`、`left-1.5`、`top-2`、`right-2`、`bottom-2`、`left-2`、`top-2.5`、`right-2.5`、`bottom-2.5`、`left-2.5`
- `top-3`、`right-3`、`bottom-3`、`left-3`、`top-3.5`、`right-3.5`、`bottom-3.5`、`left-3.5`、`top-4`、`right-4`
- `bottom-4`、`left-4`、`top-5`、`right-5`、`bottom-5`、`left-5`、`top-6`、`right-6`、`bottom-6`、`left-6`
- `top-7`、`right-7`、`bottom-7`、`left-7`、`top-8`、`right-8`、`bottom-8`、`left-8`

来源：[layout/top-right-bottom-left.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/layout/top-right-bottom-left.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="relative h-16"><span class="absolute top-2 right-2">偏移内容</span></div>
```

### css-layout-visibility

```json
{"name":"可见性","summary":"visible/invisible 使用 !important 控制 visibility；invisible 仍保留布局空间，不等同 hidden。","role":"utility"}
```

visible/invisible 使用 !important 控制 visibility；invisible 仍保留布局空间，不等同 hidden。

支持类名（完整集合）：

- `visible`、`invisible`

来源：[layout/visibility.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/layout/visibility.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<span class="invisible">隐藏但保留占位</span>
```

### css-layout-z-index

```json
{"name":"层叠顺序","summary":"设置 z-index。","role":"utility"}
```

设置 z-index。语义值为 base=1100、above=50、below=-50、dropdown=1200、sticky=1300、fixed=1400、modal=1500、overlay=1600、popover=1700、tooltip=1800、messager=1900；数字类按数字取值。需在定位元素或适用 flex/grid 子项上使用，并遵循父级层叠上下文。

支持类名（完整集合）：

- `z-0`、`z-1`、`z-5`、`z-10`、`z-20`、`z-30`、`z-40`、`z-50`、`z-auto`、`z-base`
- `z-above`、`z-below`、`z-dropdown`、`z-sticky`、`z-fixed`、`z-modal`、`z-overlay`、`z-popover`、`z-tooltip`、`z-messager`

来源：[layout/z-index.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/layout/z-index.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="relative z-10">当前层级内容</div>
```

### css-flex-align-content

```json
{"name":"多行交叉轴分布","summary":"用于有额外交叉轴空间的多行 flex 等布局；单行 flex 通常看不到效果。","role":"utility"}
```

用于有额外交叉轴空间的多行 flex 等布局；单行 flex 通常看不到效果。

支持类名（完整集合）：

- `content-center`、`content-start`、`content-end`、`content-between`、`content-around`、`content-evenly`

来源：[flex/align-content.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/align-content.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row flex-wrap content-between h-32"><div class="w-full">首行</div><div class="w-full">末行</div></div>
```

### css-flex-align-items

```json
{"name":"交叉轴对齐","summary":"用于 flex/grid 容器，控制子项起点、终点、居中、基线或拉伸。","role":"utility"}
```

用于 flex/grid 容器，控制子项起点、终点、居中、基线或拉伸。

支持类名（完整集合）：

- `items-start`、`items-end`、`items-center`、`items-baseline`、`items-stretch`

来源：[flex/align-items.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/align-items.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row items-center h-16"><span>交叉轴居中</span></div>
```

### css-flex-align-self

```json
{"name":"子项交叉轴对齐","summary":"放在 flex/grid 子项，覆盖容器的 align-items；auto 继承容器规则，baseline 按基线。","role":"utility"}
```

放在 flex/grid 子项，覆盖容器的 align-items；auto 继承容器规则，baseline 按基线。

支持类名（完整集合）：

- `self-auto`、`self-start`、`self-end`、`self-center`、`self-stretch`、`self-baseline`

来源：[flex/align-self.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/align-self.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row h-16"><span class="self-center">交叉轴居中</span></div>
```

### css-flex-basis

```json
{"name":"Flex 基础尺寸","summary":"设置 flex-basis，只对 flex 子项有效；auto 由内容/尺寸决定，full 为 100%，分数按比例。","role":"utility"}
```

设置 flex-basis，只对 flex 子项有效；auto 由内容/尺寸决定，full 为 100%，分数按比例。与 shrink/grow 共同决定最终尺寸。

支持类名（完整集合）：

- `basis-0`、`basis-1`、`basis-2`、`basis-3`、`basis-4`、`basis-5`、`basis-6`、`basis-7`、`basis-8`、`basis-9`
- `basis-10`、`basis-11`、`basis-12`、`basis-14`、`basis-16`、`basis-20`、`basis-24`、`basis-28`、`basis-32`、`basis-36`
- `basis-40`、`basis-44`、`basis-48`、`basis-52`、`basis-56`、`basis-60`、`basis-64`、`basis-72`、`basis-80`、`basis-96`
- `basis-auto`、`basis-px`、`basis-0.5`、`basis-1.5`、`basis-2.5`、`basis-3.5`、`basis-1/2`、`basis-1/3`、`basis-2/3`、`basis-1/4`
- `basis-2/4`、`basis-3/4`、`basis-1/5`、`basis-2/5`、`basis-3/5`、`basis-4/5`、`basis-1/6`、`basis-2/6`、`basis-3/6`、`basis-4/6`
- `basis-5/6`、`basis-1/12`、`basis-2/12`、`basis-3/12`、`basis-4/12`、`basis-5/12`、`basis-6/12`、`basis-7/12`、`basis-8/12`、`basis-9/12`
- `basis-10/12`、`basis-11/12`、`basis-full`

来源：[flex/basis.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/basis.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row"><div class="basis-1/2">一半基础宽度</div><div>其余内容</div></div>
```

### css-flex-direction

```json
{"name":"Flex 方向与居中","summary":"row/col 及 reverse 同时开启 flex 并指定方向。","role":"utility"}
```

row/col 及 reverse 同时开启 flex 并指定方向。center 为纵向 flex 且双轴居中，center-row 为横向双轴居中；center-x 是 flex + align-items:center（默认横向时为交叉轴），center-y 是 flex-column + align-items:center，不要仅凭名称推断轴向。

支持类名（完整集合）：

- `row`、`col`、`center`、`center-row`、`center-x`、`center-y`、`row-reverse`、`col-reverse`

来源：[flex/direction.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/direction.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row gap-2"><span>左侧</span><span>右侧</span></div>
```

### css-flex-flex

```json
{"name":"Flex 子项伸缩组合","summary":"用于 flex 子项：flex-1 为 1 1 0%，flex-auto 为 1 1 auto，flex-initial 为 0 1 auto，flex-none 为 0 0 auto。","role":"utility"}
```

用于 flex 子项：flex-1 为 1 1 0%，flex-auto 为 1 1 auto，flex-initial 为 0 1 auto，flex-none 为 0 0 auto。

支持类名（完整集合）：

- `flex-1`、`flex-auto`、`flex-initial`、`flex-none`

来源：[flex/flex.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/flex.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row"><div class="flex-1">占剩余宽度</div><div>固定内容</div></div>
```

### css-flex-gap

```json
{"name":"子项间隙","summary":"用于支持 gap 的 flex/grid 容器；gap-x/y 限定轴向，gap-3px 是额外的 3px 类（没有 gap-x-3px/y-3px）。","role":"utility"}
```

用于支持 gap 的 flex/grid 容器；gap-x/y 限定轴向，gap-3px 是额外的 3px 类（没有 gap-x-3px/y-3px）。

支持类名（完整集合）：

- `gap-0`、`gap-x-0`、`gap-y-0`、`gap-px`、`gap-x-px`、`gap-y-px`、`gap-0.5`、`gap-x-0.5`、`gap-y-0.5`、`gap-3px`
- `gap-1`、`gap-x-1`、`gap-y-1`、`gap-1.5`、`gap-x-1.5`、`gap-y-1.5`、`gap-2`、`gap-x-2`、`gap-y-2`、`gap-2.5`
- `gap-x-2.5`、`gap-y-2.5`、`gap-3`、`gap-x-3`、`gap-y-3`、`gap-3.5`、`gap-x-3.5`、`gap-y-3.5`、`gap-4`、`gap-x-4`
- `gap-y-4`、`gap-5`、`gap-x-5`、`gap-y-5`、`gap-6`、`gap-x-6`、`gap-y-6`、`gap-7`、`gap-x-7`、`gap-y-7`
- `gap-8`、`gap-x-8`、`gap-y-8`

来源：[flex/gap.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/gap.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row gap-2"><span>第一项</span><span>第二项</span></div>
```

### css-flex-grow

```json
{"name":"Flex 增长","summary":"用于 flex 子项，grow 为 flex-grow:1，grow-0 为 0，均使用 !important。","role":"utility"}
```

用于 flex 子项，grow 为 flex-grow:1，grow-0 为 0，均使用 !important。

支持类名（完整集合）：

- `grow`、`grow-0`

来源：[flex/grow.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/grow.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row"><div class="grow">可增长</div><div class="grow-0">不增长</div></div>
```

### css-flex-justify-content

```json
{"name":"主轴对齐","summary":"用于 flex 等支持 justify-content 的容器；start/end/center/between/around/evenly 分别对应两端、居中和三种剩余空间分配方式。","role":"utility"}
```

用于 flex 等支持 justify-content 的容器；start/end/center/between/around/evenly 分别对应两端、居中和三种剩余空间分配方式。

支持类名（完整集合）：

- `justify-start`、`justify-end`、`justify-center`、`justify-between`、`justify-around`、`justify-evenly`

来源：[flex/justify-content.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/justify-content.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row justify-between"><span>起点</span><span>终点</span></div>
```

### css-flex-order

```json
{"name":"Flex 顺序","summary":"用于 flex/grid 子项，order-1 到 order-12 设置对应整数，first=-9999、last=9999、none=0；只改变视觉顺序，不改变 DOM/键盘顺序。","role":"utility"}
```

用于 flex/grid 子项，order-1 到 order-12 设置对应整数，first=-9999、last=9999、none=0；只改变视觉顺序，不改变 DOM/键盘顺序。

支持类名（完整集合）：

- `order-1`、`order-2`、`order-3`、`order-4`、`order-5`、`order-6`、`order-7`、`order-8`、`order-9`、`order-10`
- `order-11`、`order-12`、`order-first`、`order-last`、`order-none`

来源：[flex/order.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/order.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row"><span class="order-last">视觉最后</span><span>视觉最先</span></div>
```

### css-flex-shrink

```json
{"name":"Flex 收缩","summary":"用于 flex 子项，shrink 为 flex-shrink:1，shrink-0 为 0，均使用 !important。","role":"utility"}
```

用于 flex 子项，shrink 为 flex-shrink:1，shrink-0 为 0，均使用 !important。

支持类名（完整集合）：

- `shrink`、`shrink-0`

来源：[flex/shrink.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/shrink.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row w-32"><div class="shrink-0 w-24">不收缩</div><div class="shrink w-24">可收缩</div></div>
```

### css-flex-wrap

```json
{"name":"Flex 换行","summary":"用于 flex 容器，控制不换行、换行及反向换行。","role":"utility"}
```

用于 flex 容器，控制不换行、换行及反向换行。

支持类名（完整集合）：

- `flex-wrap`、`flex-wrap-reverse`、`flex-nowrap`

来源：[flex/wrap.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/flex/wrap.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row flex-wrap gap-2"><span>第一项</span><span>第二项</span></div>
```

### css-spacing-margin

```json
{"name":"外边距","summary":"m 为四边、mx/my 为横/纵两边、mt/mr/mb/ml 为单边。","role":"utility"}
```

m 为四边、mx/my 为横/纵两边、mt/mr/mb/ml 为单边。auto 用于可分配剩余空间的布局；只支持列出的非负间距，不包含注释掉的 m-11、m-12 等类。

支持类名（完整集合）：

- `m-0`、`m-auto`、`m-px`、`m-0.5`、`m-1`、`m-1.5`、`m-2`、`m-2.5`、`m-3`、`m-3.5`
- `m-4`、`m-5`、`m-6`、`m-7`、`m-8`、`m-9`、`m-10`、`mx-0`、`my-0`、`mt-0`
- `mr-0`、`mb-0`、`ml-0`、`mx-auto`、`my-auto`、`mt-auto`、`mr-auto`、`mb-auto`、`ml-auto`、`mx-px`
- `my-px`、`mt-px`、`mr-px`、`mb-px`、`ml-px`、`mx-0.5`、`my-0.5`、`mt-0.5`、`mr-0.5`、`mb-0.5`
- `ml-0.5`、`mx-1`、`my-1`、`mt-1`、`mr-1`、`mb-1`、`ml-1`、`mx-1.5`、`my-1.5`、`mt-1.5`
- `mr-1.5`、`mb-1.5`、`ml-1.5`、`mx-2`、`my-2`、`mt-2`、`mr-2`、`mb-2`、`ml-2`、`mx-2.5`
- `my-2.5`、`mt-2.5`、`mr-2.5`、`mb-2.5`、`ml-2.5`、`mx-3`、`my-3`、`mt-3`、`mr-3`、`mb-3`
- `ml-3`、`mx-3.5`、`my-3.5`、`mt-3.5`、`mr-3.5`、`mb-3.5`、`ml-3.5`、`mx-4`、`my-4`、`mt-4`
- `mr-4`、`mb-4`、`ml-4`、`mx-5`、`my-5`、`mt-5`、`mr-5`、`mb-5`、`ml-5`、`mx-6`
- `my-6`、`mt-6`、`mr-6`、`mb-6`、`ml-6`、`mx-7`、`my-7`、`mt-7`、`mr-7`、`mb-7`
- `ml-7`、`mx-8`、`my-8`、`mt-8`、`mr-8`、`mb-8`、`ml-8`、`mx-9`、`my-9`、`mt-9`
- `mr-9`、`mb-9`、`ml-9`、`mx-10`、`my-10`、`mt-10`、`mr-10`、`mb-10`、`ml-10`

来源：[spacing/margin.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/spacing/margin.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="m-2">四边外边距</div>
```

### css-spacing-padding

```json
{"name":"内边距","summary":"p 为四边、px/py 为横/纵两边、pt/pr/pb/pl 为单边。","role":"utility"}
```

p 为四边、px/py 为横/纵两边、pt/pr/pb/pl 为单边。没有 auto、负值或大于 10 的内边距类。

支持类名（完整集合）：

- `p-0`、`p-px`、`p-0.5`、`p-1`、`p-1.5`、`p-2`、`p-2.5`、`p-3`、`p-3.5`、`p-4`
- `p-5`、`p-6`、`p-7`、`p-8`、`p-9`、`p-10`、`px-0`、`py-0`、`pt-0`、`pr-0`
- `pb-0`、`pl-0`、`px-px`、`py-px`、`pt-px`、`pr-px`、`pb-px`、`pl-px`、`px-0.5`、`py-0.5`
- `pt-0.5`、`pr-0.5`、`pb-0.5`、`pl-0.5`、`px-1`、`py-1`、`pt-1`、`pr-1`、`pb-1`、`pl-1`
- `px-1.5`、`py-1.5`、`pt-1.5`、`pr-1.5`、`pb-1.5`、`pl-1.5`、`px-2`、`py-2`、`pt-2`、`pr-2`
- `pb-2`、`pl-2`、`px-2.5`、`py-2.5`、`pt-2.5`、`pr-2.5`、`pb-2.5`、`pl-2.5`、`px-3`、`py-3`
- `pt-3`、`pr-3`、`pb-3`、`pl-3`、`px-3.5`、`py-3.5`、`pt-3.5`、`pr-3.5`、`pb-3.5`、`pl-3.5`
- `px-4`、`py-4`、`pt-4`、`pr-4`、`pb-4`、`pl-4`、`px-5`、`py-5`、`pt-5`、`pr-5`
- `pb-5`、`pl-5`、`px-6`、`py-6`、`pt-6`、`pr-6`、`pb-6`、`pl-6`、`px-7`、`py-7`
- `pt-7`、`pr-7`、`pb-7`、`pl-7`、`px-8`、`py-8`、`pt-8`、`pr-8`、`pb-8`、`pl-8`
- `px-9`、`py-9`、`pt-9`、`pr-9`、`pb-9`、`pl-9`、`px-10`、`py-10`、`pt-10`、`pr-10`
- `pb-10`、`pl-10`

来源：[spacing/padding.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/spacing/padding.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="p-4">四边内边距</div>
```

### css-spacing-space

```json
{"name":"相邻子项间距","summary":"加在容器上，以相邻未隐藏直接子元素的 margin 实现横/纵间距；不同于 gap，不应在换行布局中假定效果相同。","role":"utility"}
```

加在容器上，以相邻未隐藏直接子元素的 margin 实现横/纵间距；不同于 gap，不应在换行布局中假定效果相同。

支持类名（完整集合）：

- `space-x-0`、`space-y-0`、`space-x-0.5`、`space-y-0.5`、`space-x-1`、`space-y-1`、`space-x-1.5`、`space-y-1.5`、`space-x-2`、`space-y-2`
- `space-x-2.5`、`space-y-2.5`、`space-x-3`、`space-y-3`、`space-x-3.5`、`space-y-3.5`、`space-x-4`、`space-y-4`、`space-x-5`、`space-y-5`
- `space-x-6`、`space-y-6`、`space-x-7`、`space-y-7`、`space-x-8`、`space-y-8`、`space-x-9`、`space-y-9`、`space-x-10`、`space-y-10`
- `space-x-px`、`space-y-px`

来源：[spacing/space.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/spacing/space.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="space-y-2"><div>第一项</div><div>第二项</div></div>
```

### css-sizing-height

```json
{"name":"高度与高度限制","summary":"h 设置高度，min-h/max-h 设置上下界；百分比高度通常需要包含块具有确定高度，screen 为 100vh。","role":"utility"}
```

h 设置高度，min-h/max-h 设置上下界；百分比高度通常需要包含块具有确定高度，screen 为 100vh。与宽度类不同，不提供 h-1/12 等十二分之一类或 max-h 数字尺寸集合。

支持类名（完整集合）：

- `h-0`、`h-px`、`h-0.5`、`h-1`、`h-1.5`、`h-2`、`h-2.5`、`h-3`、`h-3.5`、`h-4`
- `h-5`、`h-6`、`h-7`、`h-8`、`h-9`、`h-10`、`h-11`、`h-12`、`h-14`、`h-16`
- `h-20`、`h-24`、`h-28`、`h-32`、`h-36`、`h-40`、`h-44`、`h-48`、`h-52`、`h-56`
- `h-60`、`h-64`、`h-72`、`h-80`、`h-96`、`h-1/2`、`h-1/3`、`h-2/3`、`h-1/4`、`h-2/4`
- `h-3/4`、`h-1/5`、`h-2/5`、`h-3/5`、`h-4/5`、`h-1/6`、`h-2/6`、`h-3/6`、`h-4/6`、`h-5/6`
- `h-auto`、`h-full`、`h-screen`、`h-min`、`h-max`、`h-fit`、`min-h-0`、`min-h-full`、`min-h-min`、`min-h-max`
- `min-h-fit`、`max-h-0`、`max-h-px`、`max-h-none`、`max-h-full`、`max-h-min`、`max-h-screen`、`max-h-max`、`max-h-fit`

来源：[sizing/height.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/sizing/height.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="h-32 overflow-auto">固定高度内容</div>
```

### css-sizing-width

```json
{"name":"宽度与宽度限制","summary":"w 设置宽度，min-w/max-w 设置上下界。","role":"utility"}
```

w 设置宽度，min-w/max-w 设置上下界。full/分数按包含块宽度，screen 为 100vw，min/max/fit 对应固有尺寸。w-12/12 等于 w-full。max-w-xs/sm/md/lg/xl/2xl/3xl/4xl/5xl/6xl/7xl 依次为 20/24/28/32/36/42/48/56/64/72/80rem。

支持类名（完整集合）：

- `w-0`、`w-px`、`w-0.5`、`w-1`、`w-1.5`、`w-2`、`w-2.5`、`w-3`、`w-3.5`、`w-4`
- `w-5`、`w-6`、`w-7`、`w-8`、`w-9`、`w-10`、`w-11`、`w-12`、`w-14`、`w-16`
- `w-20`、`w-24`、`w-28`、`w-32`、`w-36`、`w-40`、`w-44`、`w-48`、`w-52`、`w-56`
- `w-60`、`w-64`、`w-72`、`w-80`、`w-96`、`w-1/2`、`w-1/3`、`w-2/3`、`w-1/4`、`w-2/4`
- `w-3/4`、`w-1/5`、`w-2/5`、`w-3/5`、`w-4/5`、`w-1/6`、`w-2/6`、`w-3/6`、`w-4/6`、`w-5/6`
- `w-1/12`、`w-2/12`、`w-3/12`、`w-4/12`、`w-5/12`、`w-6/12`、`w-7/12`、`w-8/12`、`w-9/12`、`w-10/12`
- `w-11/12`、`w-12/12`、`w-auto`、`w-full`、`w-screen`、`w-min`、`w-max`、`w-fit`、`min-w-0`、`min-w-full`
- `min-w-min`、`min-w-max`、`min-w-fit`、`max-w-0`、`max-w-none`、`max-w-xs`、`max-w-sm`、`max-w-md`、`max-w-lg`、`max-w-xl`
- `max-w-2xl`、`max-w-3xl`、`max-w-4xl`、`max-w-5xl`、`max-w-6xl`、`max-w-7xl`、`max-w-full`、`max-w-min`、`max-w-max`、`max-w-fit`

来源：[sizing/width.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/sizing/width.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="w-full max-w-md">有最大宽度的内容</div>
```

### css-skin-ghost

```json
{"name":"幽灵皮肤","summary":"包含 skin，透明背景和透明外圈，颜色用于文字及交互状态；ghost 默认继承文字，语义 ghost 使用对应 500 色阶。","role":"utility"}
```

包含 skin，透明背景和透明外圈，颜色用于文字及交互状态；ghost 默认继承文字，语义 ghost 使用对应 500 色阶。

支持类名（完整集合）：

- `ghost`、`primary-ghost`、`secondary-ghost`、`success-ghost`、`warning-ghost`、`danger-ghost`、`important-ghost`、`special-ghost`

来源：[skin/ghost.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/skin/ghost.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="primary-ghost p-2">幽灵皮肤</div>
```

### css-skin-outline

```json
{"name":"描边皮肤","summary":"包含 skin，透明背景并使用指定颜色文字/边框/外圈；outline 默认取前景 RGB，gray-300/400-outline 文字取 gray-500。","role":"utility"}
```

包含 skin，透明背景并使用指定颜色文字/边框/外圈；outline 默认取前景 RGB，gray-300/400-outline 文字取 gray-500。dark/light-outline 对应 inverse/canvas。不是 CSS outline-style 工具类。

支持类名（完整集合）：

- `outline`、`primary-outline`、`secondary-outline`、`success-outline`、`warning-outline`、`danger-outline`、`important-outline`、`special-outline`、`gray-300-outline`、`gray-400-outline`
- `gray-outline`、`gray-600-outline`、`dark-outline`、`light-outline`

来源：[skin/outline.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/skin/outline.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="primary-outline p-2">描边皮肤</div>
```

### css-skin-pale

```json
{"name":"浅色皮肤","summary":"这些类自身包含 skin；背景取指定 RGB 的 10% 透明度，文字取相应实色，较浅 gray 50/100/200 的文字用 gray-400、gray-300/400 用 gray-500。","role":"utility"}
```

这些类自身包含 skin；背景取指定 RGB 的 10% 透明度，文字取相应实色，较浅 gray 50/100/200 的文字用 gray-400、gray-300/400 用 gray-500。gray-pale 等于 gray-500-pale。无需额外 .skin。

支持类名（完整集合）：

- `pale`、`primary-pale`、`secondary-pale`、`success-pale`、`warning-pale`、`danger-pale`、`important-pale`、`special-pale`、`gray-50-pale`、`gray-100-pale`
- `gray-200-pale`、`gray-300-pale`、`gray-400-pale`、`gray-500-pale`、`gray-pale`、`gray-600-pale`、`gray-700-pale`、`gray-800-pale`、`gray-900-pale`、`gray-950-pale`

来源：[skin/pale.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/skin/pale.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="primary-pale p-2">浅色皮肤</div>
```

### css-skin-skin

```json
{"name":"自定义皮肤","summary":"`.skin` 将 --skin-* 变量应用到背景、文字、边框和 1px 外圈，并处理 hover 背景/文字；使用前至少配置 --skin-color、--skin-text，或组合后续已有皮肤类。","role":"utility"}
```

`.skin` 将 --skin-* 变量应用到背景、文字、边框和 1px 外圈，并处理 hover 背景/文字；使用前至少配置 --skin-color、--skin-text，或组合后续已有皮肤类。内部 .-skin 不作为公开 HTML 类。

支持类名（完整集合）：

- `skin`

来源：[skin/skin.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/skin/skin.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="skin p-2" style="--skin-color: #2563eb; --skin-text: white">自定义皮肤</div>
```

### css-skin-solid

```json
{"name":"实色皮肤","summary":"这些类自身包含 skin 基础效果；语义颜色默认使用相应 500 色阶，浅灰 50/100/200/300 使用普通前景，其他实色使用深色背景前景。","role":"utility"}
```

这些类自身包含 skin 基础效果；语义颜色默认使用相应 500 色阶，浅灰 50/100/200/300 使用普通前景，其他实色使用深色背景前景。gray 是 gray-500 别名；lightest/lighter/lighten/darken/darker/darkest 是已弃用兼容别名。无需额外 .skin，且不等同仅设置 background 的 bg-*。

支持类名（完整集合）：

- `primary`、`secondary`、`success`、`warning`、`danger`、`important`、`special`、`gray-50`、`gray-100`、`gray-200`
- `lightest`、`gray-300`、`lighter`、`gray-400`、`lighten`、`gray-500`、`gray`、`gray-600`、`darken`、`gray-700`
- `darker`、`gray-800`、`darkest`、`gray-900`、`gray-950`

来源：[skin/solid.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/skin/solid.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="primary p-2">实色皮肤</div>
```

### css-skin-surface

```json
{"name":"语义表面皮肤","summary":"同时设置背景和文字（surface 系列及 white/black 还设置 ring 颜色）；transparent 仅透明背景/外圈，不设置文字。","role":"utility"}
```

同时设置背景和文字（surface 系列及 white/black 还设置 ring 颜色）；transparent 仅透明背景/外圈，不设置文字。跟随 base 主题变量；无需 .skin 基础类。

支持类名（完整集合）：

- `canvas`、`surface-light`、`surface`、`surface-strong`、`inverse`、`white`、`black`、`transparent`

来源：[skin/surface.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/skin/surface.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="surface p-4">语义表面</div>
```

### css-typography-decoration

```json
{"name":"文字装饰线","summary":"underline/overline/line-through/no-underline 分别添加或移除装饰线，不改变链接行为。","role":"utility"}
```

underline/overline/line-through/no-underline 分别添加或移除装饰线，不改变链接行为。

支持类名（完整集合）：

- `underline`、`overline`、`line-through`、`no-underline`

来源：[typography/decoration.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/decoration.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<span class="line-through">已删除的文字</span>
```

### css-typography-font-family

```json
{"name":"字体族","summary":"font-sans/serif/mono 设置对应主题字体栈，不加载字体文件。","role":"utility"}
```

font-sans/serif/mono 设置对应主题字体栈，不加载字体文件。

支持类名（完整集合）：

- `font-sans`、`font-serif`、`font-mono`

来源：[typography/font-family.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/font-family.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<p class="font-mono">const value = 42;</p>
```

### css-typography-font-size

```json
{"name":"字号","summary":"text-root 为 16px；sm/base/md/lg/xl/2xl/3xl/4xl 分别为 .75/.8125/.875/1/1.125/1.5/1.875/2.25rem，并包含配置行高。","role":"utility"}
```

text-root 为 16px；sm/base/md/lg/xl/2xl/3xl/4xl 分别为 .75/.8125/.875/1/1.125/1.5/1.875/2.25rem，并包含配置行高。text-base 在默认 16px 根字号下是 13px，不是 Tailwind 默认 16px。

支持类名（完整集合）：

- `text-root`、`text-sm`、`text-base`、`text-md`、`text-lg`、`text-xl`、`text-2xl`、`text-3xl`、`text-4xl`

来源：[typography/font-size.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/font-size.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<p class="text-base">默认 13px 字号</p>
```

### css-typography-font-weight

```json
{"name":"字重","summary":"thin/light/normal/medium/semibold/bold/black 对应 100/300/400/500/600/700/900，实际效果受字体字重支持影响。","role":"utility"}
```

thin/light/normal/medium/semibold/bold/black 对应 100/300/400/500/600/700/900，实际效果受字体字重支持影响。

支持类名（完整集合）：

- `font-thin`、`font-light`、`font-normal`、`font-medium`、`font-semibold`、`font-bold`、`font-black`

来源：[typography/font-weight.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/font-weight.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<span class="font-bold">加粗文字</span>
```

### css-typography-leading

```json
{"name":"行高","summary":"数字行高为 n×.25rem；none/tight/snug/normal/relaxed/loose 为无单位 1/1.25/1.375/1.5/1.625/2，覆盖字号类附带行高时注意层叠。","role":"utility"}
```

数字行高为 n×.25rem；none/tight/snug/normal/relaxed/loose 为无单位 1/1.25/1.375/1.5/1.625/2，覆盖字号类附带行高时注意层叠。

支持类名（完整集合）：

- `leading-3`、`leading-4`、`leading-5`、`leading-6`、`leading-7`、`leading-8`、`leading-9`、`leading-10`、`leading-none`、`leading-tight`
- `leading-snug`、`leading-normal`、`leading-relaxed`、`leading-loose`

来源：[typography/leading.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/leading.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<p class="leading-relaxed">宽松行高<br>第二行内容</p>
```

### css-typography-line-clamp

```json
{"name":"多行截断","summary":"line-clamp-1 到 6 使用 -webkit-box、纵向 box-orient、overflow:hidden 与对应行数；会改变 display，不提供 line-clamp-none。","role":"utility"}
```

line-clamp-1 到 6 使用 -webkit-box、纵向 box-orient、overflow:hidden 与对应行数；会改变 display，不提供 line-clamp-none。

支持类名（完整集合）：

- `line-clamp-1`、`line-clamp-2`、`line-clamp-3`、`line-clamp-4`、`line-clamp-5`、`line-clamp-6`

来源：[typography/line-clamp.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/line-clamp.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<p class="line-clamp-2 w-32">较长的文本超过容器宽度并折成两行后，其余内容会被截断。</p>
```

### css-typography-list-style

```json
{"name":"列表标记","summary":"list-none/disc/decimal 控制标记；list-unstyled 还去除左内边距，应用于 ul/ol 等列表容器。","role":"utility"}
```

list-none/disc/decimal 控制标记；list-unstyled 还去除左内边距，应用于 ul/ol 等列表容器。

支持类名（完整集合）：

- `list-none`、`list-disc`、`list-decimal`、`list-unstyled`

来源：[typography/list-style.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/list-style.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<ul class="list-unstyled"><li>无标记列表项</li></ul>
```

### css-typography-text-align

```json
{"name":"文字与行内对齐","summary":"text-* 设置容器文本对齐；align-* 设置 vertical-align，主要对行内/表格单元格生效，不是 flex 对齐。","role":"utility"}
```

text-* 设置容器文本对齐；align-* 设置 vertical-align，主要对行内/表格单元格生效，不是 flex 对齐。

支持类名（完整集合）：

- `text-left`、`text-center`、`text-right`、`text-justify`、`align-middle`、`align-top`、`align-bottom`、`align-sub`、`align-super`

来源：[typography/text-align.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/text-align.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<p class="text-center">水平居中文字</p>
```

### css-typography-text-color

```json
{"name":"文字颜色","summary":"设置 color。","role":"utility"}
```

设置 color。primary/secondary 公开列出的色阶，success 等语义色使用 500；text-muted/lighten 对应 gray-400，不是整体透明度。其他灰色描述别名依次映射 gray 200/300/400/500/600/700/800。

支持类名（完整集合）：

- `text-primary`、`text-secondary`、`text-success`、`text-warning`、`text-danger`、`text-important`、`text-special`、`text-primary-50`、`text-primary-100`、`text-primary-200`
- `text-primary-300`、`text-primary-400`、`text-primary-500`、`text-primary-600`、`text-primary-700`、`text-primary-800`、`text-primary-900`、`text-primary-950`、`text-secondary-50`、`text-secondary-100`
- `text-secondary-200`、`text-secondary-300`、`text-secondary-400`、`text-secondary-500`、`text-secondary-600`、`text-secondary-700`、`text-secondary-800`、`text-secondary-900`、`text-secondary-950`、`text-gray-50`
- `text-gray-100`、`text-lightest`、`text-gray-200`、`text-lighter`、`text-gray-300`、`text-muted`、`text-lighten`、`text-gray-400`、`text-gray`、`text-gray-500`
- `text-darken`、`text-gray-600`、`text-darker`、`text-gray-700`、`text-darkest`、`text-gray-800`、`text-gray-900`、`text-gray-950`、`text-white`、`text-black`
- `text-transparent`、`text-canvas`、`text-surface-light`、`text-surface`、`text-surface-strong`、`text-inverse`、`text-fore-in-light`、`text-fore-in-dark`、`text-fore`、`text-focus`
- `text-link`、`text-link-hover`、`text-current`、`text-inherit`

来源：[typography/text-color.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/text-color.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<span class="text-primary">主题色文字</span>
```

### css-typography-text-opacity

```json
{"name":"文字透明度","summary":"设置 --tw-text-opacity 为数字/100，需组合读取该变量的文字颜色；不会使子元素背景透明，且 current/inherit 等不保证受此变量控制。","role":"utility"}
```

设置 --tw-text-opacity 为数字/100，需组合读取该变量的文字颜色；不会使子元素背景透明，且 current/inherit 等不保证受此变量控制。

支持类名（完整集合）：

- `text-opacity-0`、`text-opacity-5`、`text-opacity-10`、`text-opacity-20`、`text-opacity-25`、`text-opacity-30`、`text-opacity-40`、`text-opacity-50`、`text-opacity-60`、`text-opacity-70`
- `text-opacity-80`、`text-opacity-90`、`text-opacity-95`、`text-opacity-100`

来源：[typography/text-opacity.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/text-opacity.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<span class="text-primary text-opacity-50">半透明文字</span>
```

### css-typography-text-overflow

```json
{"name":"单行溢出","summary":"text-ellipsis/ellipsis 同时开启 overflow:hidden、nowrap 和省略号；text-clip/clip 同样单行截断但不用省略号。","role":"utility"}
```

text-ellipsis/ellipsis 同时开启 overflow:hidden、nowrap 和省略号；text-clip/clip 同样单行截断但不用省略号。需要有限宽度才可见。

支持类名（完整集合）：

- `text-ellipsis`、`ellipsis`、`text-clip`、`clip`

来源：[typography/text-overflow.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/text-overflow.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="ellipsis w-32">长文字内容在有限宽度内显示省略号</div>
```

### css-typography-text-transform

```json
{"name":"大小写转换","summary":"uppercase/lowercase/capitalize/normal-case 控制文本绘制的大小写，不修改实际文本数据。","role":"utility"}
```

uppercase/lowercase/capitalize/normal-case 控制文本绘制的大小写，不修改实际文本数据。

支持类名（完整集合）：

- `uppercase`、`lowercase`、`capitalize`、`normal-case`

来源：[typography/text-transform.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/text-transform.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<span class="uppercase">hello</span>
```

### css-typography-whitespace

```json
{"name":"空白与换行","summary":"控制 CSS white-space，nowrap/pre/pre-line/pre-wrap 为同名 whitespace-* 的别名；不提供 break-spaces。","role":"utility"}
```

控制 CSS white-space，nowrap/pre/pre-line/pre-wrap 为同名 whitespace-* 的别名；不提供 break-spaces。

支持类名（完整集合）：

- `whitespace-normal`、`whitespace-nowrap`、`nowrap`、`whitespace-pre`、`pre`、`whitespace-pre-line`、`pre-line`、`whitespace-pre-wrap`、`pre-wrap`

来源：[typography/whitespace.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/whitespace.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<p class="whitespace-pre-wrap">保留空白并允许折行的文字</p>
```

### css-typography-word-break

```json
{"name":"断词","summary":"break-normal 为正常 overflow-wrap/word-break；break-words 为 overflow-wrap:break-word；break-all 为 word-break:break-all。","role":"utility"}
```

break-normal 为正常 overflow-wrap/word-break；break-words 为 overflow-wrap:break-word；break-all 为 word-break:break-all。

支持类名（完整集合）：

- `break-normal`、`break-words`、`break-all`

来源：[typography/word-break.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/typography/word-break.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<p class="break-all w-32">longwordwithoutspaces</p>
```

### css-backgrounds-background-image

```json
{"name":"背景图像布局","summary":"仅控制 background-size/repeat/position/attachment，图像 URL 由业务 CSS 或 style 提供。","role":"utility"}
```

仅控制 background-size/repeat/position/attachment，图像 URL 由业务 CSS 或 style 提供。fixed/local/scroll 的滚动参照不同。

支持类名（完整集合）：

- `bg-auto`、`bg-cover`、`bg-contain`、`bg-repeat`、`bg-no-repeat`、`bg-repeat-x`、`bg-repeat-y`、`bg-repeat-round`、`bg-repeat-space`、`bg-bottom`
- `bg-center`、`bg-left`、`bg-left-bottom`、`bg-left-top`、`bg-right`、`bg-right-bottom`、`bg-right-top`、`bg-top`、`bg-fixed`、`bg-local`
- `bg-scroll`

来源：[backgrounds/background-image.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/backgrounds/background-image.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。将 `./cover.png` 替换为实际图片资源。

```html
<div class="bg-cover bg-center h-32" style="background-image: url(./cover.png)">封面内容</div>
```

### css-backgrounds-background-opacity

```json
{"name":"背景透明度","summary":"设置 --tw-bg-opacity 为数字/100，需搭配使用该变量的背景颜色；不影响内容，区别于 opacity。","role":"utility"}
```

设置 --tw-bg-opacity 为数字/100，需搭配使用该变量的背景颜色；不影响内容，区别于 opacity。仅支持此处列出的值（没有 bg-opacity-95）。

支持类名（完整集合）：

- `bg-opacity-0`、`bg-opacity-5`、`bg-opacity-10`、`bg-opacity-20`、`bg-opacity-25`、`bg-opacity-30`、`bg-opacity-40`、`bg-opacity-50`、`bg-opacity-60`、`bg-opacity-70`
- `bg-opacity-80`、`bg-opacity-90`、`bg-opacity-100`

来源：[backgrounds/background-opacity.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/backgrounds/background-opacity.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="bg-primary bg-opacity-10 p-2">浅透明背景</div>
```

### css-backgrounds-background

```json
{"name":"背景颜色","summary":"设置背景色；bg-none 仅清除背景图像。","role":"utility"}
```

设置背景色；bg-none 仅清除背景图像。primary/secondary 公开完整列出的色阶，其他语义色只提供无色阶后缀的 500 别名。bg-lightest/lighter/light/gray/darken/darker/darkest 为对应 gray 200/300/400/500/600/700/800。

支持类名（完整集合）：

- `bg-primary`、`bg-secondary`、`bg-success`、`bg-warning`、`bg-danger`、`bg-important`、`bg-special`、`bg-primary-50`、`bg-primary-100`、`bg-primary-200`
- `bg-primary-300`、`bg-primary-400`、`bg-primary-500`、`bg-primary-600`、`bg-primary-700`、`bg-primary-800`、`bg-primary-900`、`bg-primary-950`、`bg-secondary-50`、`bg-secondary-100`
- `bg-secondary-200`、`bg-secondary-300`、`bg-secondary-400`、`bg-secondary-500`、`bg-secondary-600`、`bg-secondary-700`、`bg-secondary-800`、`bg-secondary-900`、`bg-secondary-950`、`bg-gray-50`
- `bg-gray-100`、`bg-lightest`、`bg-gray-200`、`bg-lighter`、`bg-gray-300`、`bg-light`、`bg-gray-400`、`bg-gray`、`bg-gray-500`、`bg-darken`
- `bg-gray-600`、`bg-darker`、`bg-gray-700`、`bg-darkest`、`bg-gray-800`、`bg-gray-900`、`bg-gray-950`、`bg-canvas`、`bg-surface-light`、`bg-surface`
- `bg-surface-strong`、`bg-inverse`、`bg-fore-in-light`、`bg-fore-in-dark`、`bg-fore`、`bg-focus`、`bg-white`、`bg-black`、`bg-transparent`、`bg-current`
- `bg-inherit`、`bg-none`

来源：[backgrounds/background.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/backgrounds/background.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="bg-primary text-white p-2">主题色背景</div>
```

### css-borders-border-color

```json
{"name":"边框颜色","summary":"设置边框颜色，不创建宽度；light/strong 使用主题 border-light/strong，语义色默认 500；gray 为 gray-500。","role":"utility"}
```

设置边框颜色，不创建宽度；light/strong 使用主题 border-light/strong，语义色默认 500；gray 为 gray-500。

支持类名（完整集合）：

- `border-light`、`border-strong`、`border-primary`、`border-secondary`、`border-success`、`border-warning`、`border-danger`、`border-important`、`border-special`、`border-gray-50`
- `border-gray-100`、`border-gray-200`、`border-gray-300`、`border-gray-400`、`border-gray-500`、`border-gray`、`border-gray-600`、`border-gray-700`、`border-gray-800`、`border-gray-900`
- `border-gray-950`、`border-white`、`border-black`、`border-canvas`、`border-surface-light`、`border-surface`、`border-surface-strong`、`border-inverse`、`border-fore-in-light`、`border-fore-in-dark`
- `border-fore`、`border-focus`、`border-link`、`border-link-hover`、`border-transparent`、`border-current`、`border-inherit`

来源：[borders/border-color.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/borders/border-color.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="border border-primary p-2">主题色边框</div>
```

### css-borders-border-opacity

```json
{"name":"边框透明度","summary":"设置 --tw-border-opacity 为数字/100，需与读取该变量的边框颜色组合；显式 transparent/current/inherit 等颜色不保证受此变量控制。","role":"utility"}
```

设置 --tw-border-opacity 为数字/100，需与读取该变量的边框颜色组合；显式 transparent/current/inherit 等颜色不保证受此变量控制。

支持类名（完整集合）：

- `border-opacity-0`、`border-opacity-5`、`border-opacity-10`、`border-opacity-20`、`border-opacity-25`、`border-opacity-30`、`border-opacity-40`、`border-opacity-50`、`border-opacity-60`、`border-opacity-70`
- `border-opacity-80`、`border-opacity-90`、`border-opacity-95`、`border-opacity-100`

来源：[borders/border-opacity.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/borders/border-opacity.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="border border-primary border-opacity-50 p-2">半透明边框</div>
```

### css-borders-border-style

```json
{"name":"边框线型","summary":"设置 solid/dashed/dotted/double/hidden/none，仍需边框宽度；hidden/none 会影响是否绘制。","role":"utility"}
```

设置 solid/dashed/dotted/double/hidden/none，仍需边框宽度；hidden/none 会影响是否绘制。

支持类名（完整集合）：

- `border-solid`、`border-dashed`、`border-dotted`、`border-double`、`border-hidden`、`border-none`

来源：[borders/border-style.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/borders/border-style.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="border border-dashed p-2">虚线边框</div>
```

### css-borders-border-width

```json
{"name":"边框宽度","summary":"border 是四边 1px，border-0/2/4 是四边相应像素；t/r/b/l 仅指定边。","role":"utility"}
```

border 是四边 1px，border-0/2/4 是四边相应像素；t/r/b/l 仅指定边。还需可见边框样式与颜色，基础 reset 通常提供 solid。

支持类名（完整集合）：

- `border-0`、`border`、`border-2`、`border-4`、`border-t`、`border-l`、`border-r`、`border-b`、`border-t-0`、`border-r-0`
- `border-b-0`、`border-l-0`、`border-t-2`、`border-l-2`、`border-r-2`、`border-b-2`、`border-t-4`、`border-l-4`、`border-r-4`、`border-b-4`

来源：[borders/border-width.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/borders/border-width.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="border-2 border-solid p-2">2px 边框</div>
```

### css-borders-divider

```json
{"name":"分隔线","summary":"单个 .divider 同时设置 1px 左/上边框、currentColor、10% 整体透明度与 align-self:stretch；适合放在 flex 容器子项中，横/纵实际形态由容器方向和尺寸决定。","role":"component"}
```

单个 .divider 同时设置 1px 左/上边框、currentColor、10% 整体透明度与 align-self:stretch；适合放在 flex 容器子项中，横/纵实际形态由容器方向和尺寸决定。

支持类名（完整集合）：

- `divider`

来源：[borders/divider.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/borders/divider.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="row gap-2"><span>前项</span><span class="divider" aria-hidden="true"></span><span>后项</span></div>
```

### css-borders-ring

```json
{"name":"外圈","summary":"ring 默认 1px 与主题 border 色；ring-0/2/3/4/8 设置相应像素。","role":"utility"}
```

ring 默认 1px 与主题 border 色；ring-0/2/3/4/8 设置相应像素。ring-inset 为内圈，ring-offset-* 设置偏移宽度。ring-light/gray/dark/darker/darkest 使用 inverse 色及 5/10/20/30/50% 透明度；ring-opacity-N 控制透明度（不提供 25/75/95）。外圈使用 box-shadow，不占布局空间；颜色类单独使用不创建圈宽。

支持类名（完整集合）：

- `ring`、`ring-border-light`、`ring-border`、`ring-border-strong`、`ring-light`、`ring-gray`、`ring-dark`、`ring-darker`、`ring-darkest`、`ring-primary`
- `ring-secondary`、`ring-warning`、`ring-success`、`ring-danger`、`ring-important`、`ring-special`、`ring-gray-50`、`ring-gray-100`、`ring-gray-200`、`ring-gray-300`
- `ring-gray-400`、`ring-gray-500`、`ring-gray-600`、`ring-gray-700`、`ring-gray-800`、`ring-gray-900`、`ring-gray-950`、`ring-inverse`、`ring-canvas`、`ring-surface`
- `ring-fore`、`ring-transparent`、`ring-black`、`ring-white`、`ring-inherit`、`ring-current`、`ring-opacity-0`、`ring-opacity-5`、`ring-opacity-10`、`ring-opacity-20`
- `ring-opacity-30`、`ring-opacity-40`、`ring-opacity-50`、`ring-opacity-60`、`ring-opacity-70`、`ring-opacity-80`、`ring-opacity-90`、`ring-opacity-100`、`ring-0`、`ring-2`
- `ring-3`、`ring-4`、`ring-8`、`ring-inset`、`ring-offset-0`、`ring-offset-1`、`ring-offset-2`、`ring-offset-4`、`ring-offset-8`

来源：[borders/ring.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/borders/ring.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="ring ring-primary ring-offset-2 p-2">主题色外圈</div>
```

### css-borders-rounded

```json
{"name":"圆角","summary":"普通 rounded 类使用主题 --radius-*；circle 是 rounded-full 的已弃用别名。","role":"utility"}
```

普通 rounded 类使用主题 --radius-*；circle 是 rounded-full 的已弃用别名。仅提供去除某边/某角的 -none 变体，不提供任意方向的完整尺寸类族。

支持类名（完整集合）：

- `rounded-none`、`rounded-sm`、`rounded`、`rounded-md`、`rounded-lg`、`rounded-xl`、`rounded-2xl`、`rounded-3xl`、`circle`、`rounded-full`
- `rounded-l-none`、`rounded-t-none`、`rounded-r-none`、`rounded-b-none`、`rounded-br-none`、`rounded-bl-none`、`rounded-tr-none`、`rounded-tl-none`

来源：[borders/rounded.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/borders/rounded.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="rounded-lg surface p-2">圆角区域</div>
```

### css-effects-animation

```json
{"name":"循环动画与文字渐变","summary":"animate-spin/ping/pulse/bounce 及无 animate- 别名执行对应无限动画；highlight 为 2s 无限高亮；text-shimmer/aurora/breathe 使用裁剪文字的渐变，分别为 3s/3s/4s 无限动画。","role":"utility"}
```

animate-spin/ping/pulse/bounce 及无 animate- 别名执行对应无限动画；highlight 为 2s 无限高亮；text-shimmer/aurora/breathe 使用裁剪文字的渐变，分别为 3s/3s/4s 无限动画。文字渐变会将文字填充设为透明，需浏览器支持 background-clip:text；库内没有 prefers-reduced-motion 自动禁用规则。

支持类名（完整集合）：

- `animate-spin`、`spin`、`animate-ping`、`ping`、`animate-pulse`、`pulse`、`animate-bounce`、`bounce`、`animate-highlight`、`highlight`
- `text-shimmer`、`text-aurora`、`text-breathe`

来源：[effects/animation.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/effects/animation.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<span class="text-shimmer">渐变动画文字</span>
```

### css-effects-filters

```json
{"name":"滤镜","summary":"blur/backdrop-blur 分别模糊元素/其后景；后景模糊需透明或半透明背景才能可见。","role":"utility"}
```

blur/backdrop-blur 分别模糊元素/其后景；后景模糊需透明或半透明背景才能可见。grayscale/invert 改变颜色，drop-shadow 按内容透明轮廓投影；filter-none 使用 !important 清除元素滤镜。

支持类名（完整集合）：

- `blur-none`、`blur-sm`、`blur`、`blur-md`、`blur-lg`、`blur-xl`、`grayscale`、`invert`、`filter-none`、`drop-shadow-none`
- `drop-shadow-sm`、`drop-shadow`、`drop-shadow-md`、`drop-shadow-lg`、`drop-shadow-xl`、`drop-shadow-2xl`、`backdrop-blur-none`、`backdrop-blur-sm`、`backdrop-blur`、`backdrop-blur-md`
- `backdrop-blur-lg`、`backdrop-blur-xl`、`backdrop-blur-2xl`、`backdrop-blur-3xl`

来源：[effects/filters.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/effects/filters.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="blur-sm">轻微模糊内容</div>
```

### css-effects-opacity

```json
{"name":"整体透明度","summary":"opacity-N 按 N/100 设置元素整体透明度（包括子元素）；!opacity-0/!opacity-100 是显式 important 类。","role":"utility"}
```

opacity-N 按 N/100 设置元素整体透明度（包括子元素）；!opacity-0/!opacity-100 是显式 important 类。muted 使用 --opacity-muted，默认 .5。

支持类名（完整集合）：

- `muted`、`opacity-0`、`opacity-5`、`opacity-10`、`opacity-20`、`opacity-25`、`opacity-30`、`opacity-40`、`opacity-50`、`opacity-60`
- `opacity-70`、`opacity-75`、`opacity-80`、`opacity-90`、`opacity-95`、`opacity-100`、`!opacity-0`、`!opacity-100`

来源：[effects/opacity.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/effects/opacity.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<span class="opacity-50">半透明内容</span>
```

### css-effects-shadow-color

```json
{"name":"阴影颜色","summary":"设置阴影颜色，需同时有实际阴影（例如 shadow）。","role":"utility"}
```

设置阴影颜色，需同时有实际阴影（例如 shadow）。不会自行创建阴影尺寸；语义颜色默认 500，gray 是 gray-500 别名。

支持类名（完整集合）：

- `shadow-primary`、`shadow-secondary`、`shadow-success`、`shadow-warning`、`shadow-danger`、`shadow-important`、`shadow-special`、`shadow-gray-50`、`shadow-gray-100`、`shadow-gray-200`
- `shadow-gray-300`、`shadow-gray-400`、`shadow-gray-500`、`shadow-gray`、`shadow-gray-600`、`shadow-gray-700`、`shadow-gray-800`、`shadow-gray-900`、`shadow-gray-950`、`shadow-canvas`
- `shadow-surface`、`shadow-inverse`、`shadow-fore`、`shadow-focus`、`shadow-white`、`shadow-black`、`shadow-transparent`、`shadow-current`、`shadow-inherit`

来源：[effects/shadow-color.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/effects/shadow-color.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="shadow shadow-primary p-2">带颜色的阴影</div>
```

### css-effects-shadow

```json
{"name":"阴影尺寸","summary":"设置主题 --shadow-* 对应 box-shadow；shadow-none 移除阴影，shadow-inner 为内阴影。","role":"utility"}
```

设置主题 --shadow-* 对应 box-shadow；shadow-none 移除阴影，shadow-inner 为内阴影。具体几何值由 base 主题提供。

支持类名（完整集合）：

- `shadow-sm`、`shadow`、`shadow-md`、`shadow-lg`、`shadow-xl`、`shadow-2xl`、`shadow-inner`、`shadow-none`

来源：[effects/shadow.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/effects/shadow.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="shadow p-2">阴影内容</div>
```

### css-effects-transforms

```json
{"name":"缩放与旋转","summary":"scale-N 对两个轴缩放为 N/100；flip-x/y 把对应轴缩放设为 -1；rotate-N 单位为度。","role":"utility"}
```

scale-N 对两个轴缩放为 N/100；flip-x/y 把对应轴缩放设为 -1；rotate-N 单位为度。仅影响绘制，不改变占位尺寸。

支持类名（完整集合）：

- `scale-0`、`scale-50`、`scale-75`、`scale-90`、`scale-95`、`scale-100`、`scale-105`、`scale-110`、`scale-125`、`scale-150`
- `flip-x`、`flip-y`、`rotate-0`、`rotate-1`、`rotate-2`、`rotate-3`、`rotate-6`、`rotate-12`、`rotate-45`、`rotate-90`
- `rotate-135`、`rotate-180`、`rotate-270`

来源：[effects/transforms.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/effects/transforms.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="inline-block rotate-45">旋转内容</div>
```

### css-effects-transition

```json
{"name":"过渡与淡入","summary":"transition 类限定过渡属性，默认 150ms；duration 类数字为毫秒。","role":"utility"}
```

transition 类限定过渡属性，默认 150ms；duration 类数字为毫秒。fade 初始 opacity:0；fade-from-* 还初始缩小为 .9，方向版本沿相应轴位移自身 1/4。同节点加 in 才转为 opacity:1、scale:1、零位移；CSS 不负责切换类。

支持类名（完整集合）：

- `transition`、`transition-all`、`transition-colors`、`transition-opacity`、`transition-shadow`、`transition-transform`、`transition-none`、`fade`、`fade-from-center`、`fade-from-bottom`
- `fade-from-top`、`fade-from-left`、`fade-from-right`、`duration-75`、`duration-100`、`duration-200`、`duration-300`、`duration-500`、`duration-1000`

来源：[effects/transition.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/effects/transition.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="fade-from-bottom in duration-300">移除 in 隐藏，重新加入 in 显示</div>
```

### css-interactivity-cursor

```json
{"name":"光标","summary":"设置列出的光标类型；光标只表达外观，不赋予交互能力。","role":"utility"}
```

设置列出的光标类型；光标只表达外观，不赋予交互能力。

支持类名（完整集合）：

- `cursor-auto`、`cursor-default`、`cursor-pointer`、`cursor-wait`、`cursor-text`、`cursor-move`、`cursor-help`、`cursor-not-allowed`

来源：[interactivity/cursor.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/interactivity/cursor.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<span class="cursor-help" title="说明文字">提示</span>
```

### css-interactivity-disabled

```json
{"name":"禁用外观","summary":"`.disabled` 或 [disabled] 及其后代变为禁止光标、灰度和 --opacity-disabled 透明度。","role":"utility"}
```

`.disabled` 或 [disabled] 及其后代变为禁止光标、灰度和 --opacity-disabled 透明度。仅改变外观，不阻止点击、键盘或表单提交；真正禁用原生控件仍应使用 disabled 属性，普通元素另行管理行为和 ARIA。

支持类名（完整集合）：

- `disabled`

来源：[interactivity/disabled.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/interactivity/disabled.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<button type="button" disabled>真实禁用的按钮</button>
```

### css-interactivity-hover

```json
{"name":"Hover 与 active 变体","summary":"hover:* 作用于元素 :hover；group-hover:* 需要某个祖先带 group 且处于 :hover。","role":"utility"}
```

hover:* 作用于元素 :hover；group-hover:* 需要某个祖先带 group 且处于 :hover。active:* 同时支持 :active 与 .active；group-active:* 要求祖先 group 处于 :active 或同时带 active。只有列出的组合有效：block/flex/inline-flex/scale-110/scale-125/ring-primary 只提供 hover 与 group-hover，不提供 active 版本。显示、缩放和 ring-primary 的 hover 规则带 !important。

支持类名（完整集合）：

- `group-hover:opacity-100`、`hover:opacity-100`、`group-active:opacity-100`、`active:opacity-100`、`group-hover:opacity-0`、`hover:opacity-0`、`group-active:opacity-0`、`active:opacity-0`、`group-hover:text-primary`、`hover:text-primary`
- `group-active:text-primary`、`active:text-primary`、`group-hover:text-canvas`、`hover:text-canvas`、`group-active:text-canvas`、`active:text-canvas`、`group-hover:border-primary`、`hover:border-primary`、`group-active:border-primary`、`active:border-primary`
- `group-hover:primary-pale`、`hover:primary-pale`、`group-active:primary-pale`、`active:primary-pale`、`group-hover:primary`、`hover:primary`、`group-active:primary`、`active:primary`、`group-hover:canvas`、`hover:canvas`
- `group-active:canvas`、`active:canvas`、`group-hover:font-bold`、`hover:font-bold`、`group-active:font-bold`、`active:font-bold`、`group-hover:shadow`、`hover:shadow`、`group-active:shadow`、`active:shadow`
- `group-hover:shadow-lg`、`hover:shadow-lg`、`group-active:shadow-lg`、`active:shadow-lg`、`group-hover:block`、`hover:block`、`group-hover:flex`、`hover:flex`、`group-hover:inline-flex`、`hover:inline-flex`
- `group-hover:scale-110`、`hover:scale-110`、`group-hover:scale-125`、`hover:scale-125`、`group-hover:ring-primary`、`hover:ring-primary`

来源：[interactivity/hover.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/interactivity/hover.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="group p-2"><span class="group-hover:text-primary">悬停父元素时变色</span></div>
```

### css-interactivity-loading

```json
{"name":"加载指示器","summary":"在定位容器（通常同时有 relative）上加 load-indicator，通过 ::before 创建遮罩/可选 data-loading 文案，::after 创建转圈。","role":"component"}
```

在定位容器（通常同时有 relative）上加 load-indicator，通过 ::before 创建遮罩/可选 data-loading 文案，::after 创建转圈。加 loading 后显示，初次显示延迟由 --load-indicator-delay 决定。伪元素 z-index 分别为 99/100，容器必须有尺寸；不自动维护 aria-busy。

支持类名（完整集合）：

- `load-indicator`

来源：[interactivity/loading.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/interactivity/loading.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="relative load-indicator loading h-24" data-loading="加载中" aria-busy="true">内容</div>
```

### css-interactivity-pointer-events

```json
{"name":"指针事件","summary":"pointer-events-none/events-none 禁止指针命中；auto/events-auto 恢复。","role":"utility"}
```

pointer-events-none/events-none 禁止指针命中；auto/events-auto 恢复。不会从键盘 tab 顺序移除元素，也不等同语义禁用。

支持类名（完整集合）：

- `pointer-events-none`、`events-none`、`pointer-events-auto`、`events-auto`

来源：[interactivity/pointer-events.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/interactivity/pointer-events.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="events-none">不接收指针命中</div>
```

### css-interactivity-scroll

```json
{"name":"滚动行为","summary":"在滚动容器上设置自动或平滑滚动行为，不负责触发滚动或创建溢出区域。","role":"utility"}
```

在滚动容器上设置自动或平滑滚动行为，不负责触发滚动或创建溢出区域。

支持类名（完整集合）：

- `scroll-auto`、`scroll-smooth`

来源：[interactivity/scroll.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/interactivity/scroll.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<div class="h-16 overflow-auto scroll-smooth"><div class="h-32">滚动内容</div></div>
```

### css-interactivity-state

```json
{"name":"交互状态效果","summary":"`.state` 使元素 relative、cursor:pointer，使用 ::before 展示 hover/active/focus-visible 及 selected 状态；`.btn` 和 `.item > a` 也被本文件接入此效果，但其基础结构属于 button/item 库。","role":"component"}
```

`.state` 使元素 relative、cursor:pointer，使用 ::before 展示 hover/active/focus-visible 及 selected 状态；`.btn` 和 `.item > a` 也被本文件接入此效果，但其基础结构属于 button/item 库。元素需可聚焦才有键盘焦点效果，CSS 不会自动添加 tabindex 或行为。内部 .-state 不作为公开 HTML 类。

支持类名（完整集合）：

- `state`

来源：[interactivity/state.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/interactivity/state.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<button type="button" class="state p-2">可聚焦的状态元素</button>
```

### css-interactivity-user-select

```json
{"name":"文字选择","summary":"设置 user-select 的 none/text/all/auto；不影响输入值的读取。","role":"utility"}
```

设置 user-select 的 none/text/all/auto；不影响输入值的读取。

支持类名（完整集合）：

- `select-none`、`select-text`、`select-all`、`select-auto`

来源：[interactivity/user-select.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/interactivity/user-select.css>)。

环境：`browser`，前提是页面已加载包含 base、utilities 的 CSS。

```html
<span class="select-all">一段可整体选中的文字</span>
```

### css-state-modifiers

```json
{"name":"active / selected / loading / in / group","summary":"配合基础效果或变体类的状态和分组标记。","role":"helper"}
```

| 类 | 前提与节点 | 作用 |
| --- | --- | --- |
| `active` | 与 `.state` 同节点，或与 `active:*` 同节点、与 `.group` 同节点供后代 `group-active:*` 使用 | 激活状态外观；不代表原生 :active。 |
| `selected` | 与 `.state` 同节点 | 非 hover/focus/active 情况下显示选中底色，默认透明度 .1。 |
| `disabled` | 与 `.state` 同节点时 | 隐藏状态伪元素；本类还可独立应用禁用外观，见对应条目。 |
| `loading` | 与 `.load-indicator` 同节点 | 显示遮罩和转圈。 |
| `in` | 与 `.fade` 或 `.fade-from-*` 同节点 | 进入显示状态。 |
| `group` | `group-hover:*` / `group-active:*` 元素的祖先 | 将祖先交互状态用于后代变体；自身没有通用布局或样式。 |

这些类均由调用者或具体组件维护。不得在不了解所属 JS 组件状态管理时直接改类。本库没有独立定义供某个 JS 组件专用的 `js-component` 基础类；`.btn`、`.item > a` 的状态规则只是对其他库已有基础类的增强。

## css-variables

### css-variables-state

```json
{"name":"状态和加载变量","summary":"配置交互伪元素、禁用/弱化透明度和加载动画时序。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--state-color` | `rgba(0,0,0,.05)` | 状态背景颜色 | `:root`；皮肤类会重设 | 实际 `.state` / `.btn` / `.item > a` |
| `--state-scale` | `.9` | 隐藏状态伪元素初始缩放数值 | `:root` | 状态元素 |
| `--opacity-disabled` | `.7` | 禁用元素整体透明度，0–1 | `:root` | `.disabled` / `[disabled]` 或其祖先 |
| `--opacity-muted` | `.5` | `.muted` 整体透明度，0–1 | `:root` | `.muted` 或其祖先 |
| `--load-indicator-duration` | `300ms` | 加载伪元素过渡时长 | `:root` | `.load-indicator` 或其祖先 |
| `--load-indicator-delay` | `.5s` | 加入 loading 后显示延迟 | `:root` | `.load-indicator` 或其祖先 |
| `--state-active-opacity` | 回退 `0`；`.btn` 声明 `1` | 非悬停/聚焦/按下的 active 透明度 | `.btn`；Firefox 特例在 `:root, .btn` 为 `0` | 实际状态元素 |
| `--state-selected-opacity` | 回退 `.1` | selected 透明度 | 未声明，使用点回退 | 实际状态元素 |
| `--state-hover-opacity` | 回退 `1` | 悬停透明度 | 未声明，使用点回退 | 实际状态元素 |
| `--state-pressed-opacity` | 回退 `.6` | :active 透明度 | 未声明，使用点回退 | 实际状态元素 |
| `--state-focus-opacity` | 回退 `1` | focus-visible 透明度 | Firefox 特例在 `:root, .btn` 为 `0` | 实际状态元素 |
| `--state-active-color` / `--state-selected-color` / `--state-pressed-color` / `--state-focus-color` | 回退 `var(--state-color)` | 对应状态的 CSS 颜色 | 部分实色皮肤声明 active/pressed/focus 为 `rgba(0,0,0,.1)` | 实际状态元素 |
| `--state-ring-color` | 回退 `currentColor` | 按下状态外圈颜色 | 实色皮肤声明为 `var(--skin-color)` | 实际状态元素 |

透明度变量继承到后代；禁用样式同时匹配后代时，父子透明度可能叠乘。主题或皮肤在元素上声明同名变量时，祖先覆盖不能胜过它，应在实际状态元素上覆盖。

来源：[vars.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/vars.css>)、[状态](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/interactivity/state.css>)、[加载](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/interactivity/loading.css>)、[实色皮肤](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/skin/solid.css>)。

### css-variables-skin

```json
{"name":"皮肤变量","summary":"控制 skin 组合的背景、文字、边框、外圈及悬停颜色。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--skin-color` | `.skin` 本身不声明；由具体皮肤根据 RGB 生成 | 基础 CSS 颜色 | 具体皮肤元素 | 同一皮肤元素 |
| `--skin-text` | `.skin` 本身不声明；由具体皮肤设置 | CSS 文字颜色 | 具体皮肤元素 | 同一皮肤元素 |
| `--skin-bg` | `var(--skin-color)` | 背景颜色；outline/ghost 为 transparent | `.skin` 及具体皮肤元素 | 同一皮肤元素 |
| `--skin-ring` | `var(--skin-color)` | 1px 外圈颜色；ghost 为 transparent | `.skin` 及具体皮肤元素 | 同一皮肤元素 |
| `--skin-border` | `var(--skin-color)` | 边框颜色（不决定宽度） | `.skin` 及具体皮肤元素 | 同一皮肤元素 |
| `--skin-hover-text` | `var(--skin-text)` | 悬停文字颜色 | `.skin` 及具体皮肤元素 | 同一皮肤元素 |
| `--skin-hover-bg` | `var(--skin-bg)` | 悬停背景颜色 | `.skin` 及具体皮肤元素 | 同一皮肤元素 |
| `--skin-solid-rgb` | 对应 `var(--color-<name>-rgb)` | 实色 RGB 三元组 | solid 具体类 | 同一实色皮肤元素 |
| `--skin-pale-rgb` | 对应 `var(--color-<name>-rgb)` | 浅色 RGB 三元组 | pale 具体类 | 同一浅色皮肤元素 |
| `--skin-outline-rgb` | 对应主题 RGB；无色名 outline 为 `var(--color-fore-rgb)` | 描边 RGB 三元组 | outline 具体类 | 同一描边皮肤元素 |
| `--skin-ghost-rgb` | 对应主题 RGB；无色名 ghost 为 `var(--color-fore-rgb)` | 幽灵 RGB 三元组 | ghost 具体类 | 同一幽灵皮肤元素 |

RGB 变量要求逗号分隔的通道值，不能直接填 `#rrggbb`。`.skin` 还把 `--color-link-hover` 设为 `var(--skin-text)`，使后代链接跟随皮肤。`--tw-*` 是实现变量，优先用已列出的 opacity/ring/shadow 工具类调整；不把内部变量当作完整公共主题 API。

主题的 `--color-*`、`--radius-*`、`--shadow-*` 由 base/config 提供，本库读取它们，不重复定义主题默认值。深浅主题跟随这些变量；本库不提供可随意推导的 dark:* 类。

来源：[skin.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/skin/skin.css>)、[各皮肤入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/skin/index.css>)、[主题配置](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/config/tailwind-theme/index.cjs>)。

### css-variables-text-animation

```json
{"name":"文字动画颜色","summary":"在文字渐变动画元素上覆盖各个色标。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--text-shimmer-1` | 回退 `currentColor` | 主 CSS 颜色 | 未声明，使用点回退 | `.text-shimmer` |
| `--text-shimmer-2` | 回退 `var(--color-gray-400, #f1f1f1)` | 高亮 CSS 颜色 | 未声明，使用点回退 | `.text-shimmer` |
| `--text-aurora-1` | 回退 `var(--color-special-500, #a855f7)` | 第一个色标 | 未声明，使用点回退 | `.text-aurora` |
| `--text-aurora-2` | 回退 `var(--color-secondary-500, #3b82f6)` | 第二个色标 | 未声明，使用点回退 | `.text-aurora` |
| `--text-aurora-3` | 回退 `var(--color-success-500, #06b6d4)` | 第三个色标 | 未声明，使用点回退 | `.text-aurora` |
| `--text-aurora-4` | 回退 `var(--color-primary-500, #3b82f6)` | 第四个色标 | 未声明，使用点回退 | `.text-aurora` |
| `--text-breathe-1` / `--text-breathe-3` | 回退 `var(--color-danger-500, #ec4899)` | 两端色标 | 未声明，使用点回退 | `.text-breathe` |
| `--text-breathe-2` | 回退 `var(--color-warning-500, #f97316)` | 中间色标 | 未声明，使用点回退 | `.text-breathe` |

这些变量也可从祖先继承；覆盖在动画元素上可以将影响限定到该元素。来源：[animation.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/effects/animation.css>)。

## javascript

无。

## types

无。

## recipes

### recipe-layout

```json
{"name":"带右侧操作区的布局","summary":"组合布局、间距、尺寸及文字截断类。"}
```

环境：`browser`。前提是页面已加载包含 base、utilities 的 CSS；不依赖任何 JS 组件。

```html
<div class="row items-center gap-3 p-4 surface rounded">
  <div class="flex-1 min-w-0">
    <div class="text-base font-bold ellipsis">这是一段可能很长的标题</div>
    <div class="text-sm text-muted">辅助信息</div>
  </div>
  <span class="shrink-0 text-primary">详情</span>
</div>
```

`min-w-0` 允许 flex 文本子项收缩，配合 ellipsis 才能在可用宽度中截断。

### recipe-loading

```json
{"name":"加载遮罩和状态切换","summary":"用 load-indicator 与 loading 显示加载外观，并同步原生可访问状态。"}
```

环境：`browser`。前提是页面已加载包含 base、utilities 的 CSS；示例元素与脚本一起放在页面中，脚本在元素创建后执行。

```html
<div id="loading-example" class="relative load-indicator loading p-8"
     data-loading="加载中" aria-busy="true">内容区域</div>
<script>
const panel = document.getElementById('loading-example');
function finishLoading() {
    panel.classList.remove('loading');
    panel.setAttribute('aria-busy', 'false');
}
finishLoading(); // 实际项目在请求完成或失败并完成错误展示后调用
</script>
```

### recipe-custom-skin

```json
{"name":"局部皮肤与交互效果","summary":"在实际皮肤节点配置变量，组合 state 提供 hover/focus 外观。"}
```

环境：`browser`。前提是页面已加载包含 base、utilities 的 CSS。原生 button 提供聚焦与激活语义；本示例不使用 button 库的 `.btn`。

```html
<style>
.example-action {
    --skin-color: #2563eb;
    --skin-text: white;
    --skin-hover-bg: #1d4ed8;
    --state-color: rgba(255,255,255,.15);
}
</style>
<button type="button" class="skin state rounded px-3 py-2 example-action">执行操作</button>
```

## constraints

- 只有源入口接入且这里列出的选择器可作为当前公共类；内部 `@apply -xxx`、主题值和开发环境扫描生成结果都不能证明同名无前缀类可用。
- 本库不承诺完整 Tailwind 兼容：没有通用 Grid 类、任意值、负间距或任意响应式/hover/dark 变体。
- `.hidden`、visibility 类、grow/shrink 及部分 hover 类使用 important；同节点多个冲突类按最终 CSS 层叠生效，不按 HTML 类名书写顺序生效。
- 状态、禁用、加载和淡入只提供外观；事件、焦点、ARIA、减少动画偏好和异步状态由使用方管理。
- 加载与 state 使用伪元素，需避免与业务 ::before/::after 冲突；自定义皮肤影响背景、文字、边框及阴影，不能只当作一个背景色类。
- 本页描述当前源码；单库构建仍需核实 base/主题与依赖样式是否进入目标产物，不能用完整开发页可见效果证明独立分发可用。

## references

- [公共样式入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/main.ts>)
- [全局默认变量](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/src/vars.css>)
- [正式工具类文档](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/utilities/docs/utilities/>)
- [公开工具类使用规范](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/.agents/skills/zui-standards/references/utilities.md>)
- [主题字号](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/config/tailwind-theme/font-size.cjs>)
- [主题层叠顺序](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/config/tailwind-theme/z-index.cjs>)
- [主题入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/config/tailwind-theme/index.cjs>)
