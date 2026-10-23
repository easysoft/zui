# Split.js 分栏

## meta

```json
{
  "schemaVersion": 1,
  "library": "split",
  "summary": "创建可拖动、折叠的水平或垂直分栏。",
  "keywords": [
    "分栏",
    "拖动",
    "侧栏",
    "Split"
  ]
}
```

## overview

基于 Split.js 的可拖动分栏，支持初始像素/比例尺寸、折叠按钮和水平/垂直排列。适合侧栏与主区；单纯布局不需要 JS 时使用 CSS。

## setup

workspace：`import {Split} from '@zui/split';` 主入口加载 split 样式；需要 base 主题，toggle 按钮图标需 css-icons。browser 分发包含 split 后使用 `zui.Split`。Split.js 直接随模块依赖提供，静态 `Split.SplitJS` 暴露上游函数。

## vanilla

### vanilla-split

```json
{"name": "Split", "summary": "创建、拖动并折叠分栏。"}
```

`new Split(selector,options?:SplitOptions)`；继承 [Component](../core/ai.md#vanilla-component)。容器需有可计算主轴尺寸，默认选取直接子元素 `.split-cell`。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| elements | Selector或Selector[] | 否 | .split-cell | 字符串在容器直接子元素中匹配 |
| sizes | SizeSetting[] | 否 | 上游均分 | 数字为像素，'50%'、'1/2' 为比例；null/undefined 自动分配 |
| vertical | boolean | 否 | false | 上下分栏；direction 也可指定 vertical |
| gutterSize | number | 否 | 8 | 间隔像素 |
| toggleBtn | boolean或boolean[] | 否 | 无 | 全部或按分隔索引显示按钮 |
| dblClickToggle | boolean | 否 | true | 双击间隔折叠/展开 |
| animation | boolean | 否 | 无 | 添加尺寸过渡类 |

透传 Split.js 的 minSize/maxSize（number或number[]）、expandToMin、gutterAlign、snapOffset、dragInterval、cursor、elementStyle/gutterStyle、onDragStart/onDrag/onDragEnd 等选项；ZUI 自行创建 gutter 并包装 onDragEnd。选项完整签名见 [SplitOptions](#types-split-options)。

| 方法/属性 | 语义 |
| --- | --- |
| count / isVertical / totalSize | 分栏数、方向与主轴像素 |
| getSizes():number[] | 当前百分比 |
| setSizes(sizes:number[],usePercent?):void | 默认按像素归一化，usePercent=true 才把数字直接按百分比交给上游 |
| isCollapsed(index):boolean | 主轴尺寸小于 1px |
| collapse(index) / expand(index) / toggle(index) | 折叠、恢复或切换（0 起始索引） |
| render():void | 更新状态类，不重新构造 Split.js 或接受新 options |
| destroy(preserveStyles?,preserveGutters?):void | 释放事件、rAF 和上游实例；可保留样式/间隔 |

等待 inited 后访问分栏方法。当前 expand 将备份百分比传给默认按像素处理的 setSizes，再归一化；不要依赖精确恢复像素，可自行 getSizes 后 setSizes(saved,true)。

browser：

```html
<div id="split-example" class="split" style="width:600px;height:240px">
  <aside class="split-cell">侧栏</aside><main class="split-cell">内容</main>
</div>
<script>
const split = new zui.Split('#split-example', {sizes:['30%','70%'], minSize:0});
split.one('inited', () => console.log(split.getSizes()));
// 页面卸载时调用 split.destroy()。
</script>
```

来源：[实现](src/vanilla/split.ts)。

## preact

无。

## web-components

无。

## css

### css-split

```json
{"name": ".split / .split-cell / .gutter", "summary": "为原生 Split 提供容器、分栏和间隔样式。", "role": "js-component"}
```

宿主手写 `.split`，分栏使用 `.split-cell`。JS 为分隔条生成 `.gutter` 与 `.gutter-horz/.gutter-vert`，可生成 `.gutter-toggle`；`.gutter-resize-handler` 是可配合分隔条使用的手柄外观。DOM 例子见 [Split](#vanilla-split)。


### css-split-state

```json
{"name": ".split-vert / .has-animation / .is-collapsed", "summary": "配合分栏的方向、动画与折叠标记。", "role": "helper"}
```

JS 管理宿主 split-vert/split-horz/has-animation，分栏 is-collapsed，间隔 is-first/is-last/is-next-collapsed/is-prev-collapsed；这些不是独立布局 API，不手工改变来替代 collapse/expand。

## css-variables

### variables-split

```json
{"name": "--split-gutter-size", "summary": "控制折叠间隔的偏移计算。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| --split-gutter-size | options.gutterSize + px（默认8px） | 分隔条宽度 | JS 写入宿主 | 配置 gutterSize，与上游几何同步 |

主题色来自 base，不在本库重新定义。来源：[样式](src/style/split.css)。

## javascript

### javascript-splitjs

```json
{"name": "Split.SplitJS", "summary": "访问随库提供的 Split.js 原始函数。"}
```

`Split.SplitJS(elements,options)` 返回上游 instance（setSizes/getSizes/collapse/destroy）；这是静态成员，不是单独导出的 SplitJS 命名成员。通常优先使用原生 Split wrapper 的尺寸解析与清理契约。

## types

### types-split-options

```json
{"name": "SplitOptions", "summary": "ZUI 分栏配置与 Split.js 继承项。"}
```

```ts
export interface SplitOptions extends Omit<SplitJS.Options, 'sizes'> {
    animation?: boolean;
    sizes?: (SizeSetting | undefined | null)[];
    vertical?: boolean;
    elements?: Selector | Selector[];
    toggleBtn?: boolean | boolean[];
    dblClickToggle?: boolean;
}
```

来源：[src/types/split-options.ts](src/types/split-options.ts)。

## recipes

将 sizes 设为 `[240, undefined]` 表示固定初始侧栏像素与自动分配剩余空间；使用 vertical=true 时必须约束容器高度。用 getSizes 保存百分比后，恢复调用 setSizes(saved,true)。

## constraints

尺寸方法依赖 afterInit，销毁后不再调用。minSize>0 可能限制 collapse 的几何效果；索引必须位于分栏范围内。CSS 折叠状态由实际测量同步。

## references

- [包元数据](package.json)
- [公开入口](src/main.ts)
- [类型](src/types/split-options.ts)
- [实现](src/vanilla/split.ts)
- [样式](src/style/split.css)
