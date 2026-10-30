# 滚动条

## meta

```json
{"schemaVersion":1,"library":"scrollbar","summary":"提供 Preact 自定义滚动条，以及浏览器原生滚动条样式工具类。","keywords":["滚动条","scrollbar","Scrollbar"]}
```

## overview

提供 Preact 自定义滚动条，以及浏览器原生滚动条样式工具类。

主入口和 /react 的 Scrollbar 都是 Preact 类，没有 vanilla wrapper，不支持 `new Scrollbar(element,options)`。必须提供 scrollSize（内容总长度）和 clientSize（视口长度），单位像素；默认竖向、size=12px、minBarSize=3×size、defaultScrollPos=0、wheelSpeed=1。使用显式 type='vert' 可同时获得方向状态类。

scrollPos 存在时为受控：scroll/scrollOffset 只发 onScroll(newPos,type)，父组件必须回传新 scrollPos；省略时内部保存。位置会钳制到 0..maxScrollPos；无效数值按零，尺寸不为正时安全回退。scroll 与 scrollOffset 返回是否有位置变化。组件只发位置变化，不替使用方滚动实际内容。wheelContainer 字符串在 document 委托并按 closest 匹配，ref 直接绑定其元素；仅挂载时绑定，卸载解除 document/mouse/wheel 监听并取消 RAF。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/scrollbar`](src/main.ts) 直接公开 Preact 组件和类型。

Preact 入口 [`@zui/scrollbar/react`](src/main-react.ts)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/scrollbar` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

无。主入口的 Scrollbar 是 Preact 类，见下一节。

## preact

### preact-scrollbar

```json
{"name":"Scrollbar","summary":"渲染 Scrollbar Preact 视图。"}
```

入口：`import {Scrollbar} from '@zui/scrollbar/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

| 成员 | 签名与返回值 |
| --- | --- |
| `scrollPos` | `(): number` |
| `controlled` | `(): boolean` |
| `trackSize` | `(): number` |
| `contentSize` | `(): number` |
| `maxScrollPos` | `(): number` |
| `barSize` | `(): number` |
| `barTravel` | `(): number` |
| `scroll` | `(scrollPos: number): boolean` |
| `scrollOffset` | `(offset: number): boolean` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/scrollbar';
import {Scrollbar} from '@zui/scrollbar/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<Scrollbar type="vert" scrollSize={1000} clientSize={200} onScroll={position => console.log(position)} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[Scrollbar](src/component/scrollbar.tsx)。

## web-components

无。公开入口未提供本库的自定义元素标签；Preact 注册或 `z-use-*` 自动初始化不等于 Web Components。

## css

### css-structure

```json
{"name": "结构与部件", "summary": "定义根节点和内部部件的样式。", "role": "js-component"}
```

选择器保留父子和同节点条件；生成部件由组件维护，不能仅添加类获得 JavaScript 行为。下表中标记“内部样式”的 token 仅说明 CSS 实现，不是额外公开类。

| 选择器或部件 | 功能/样式契约 |
| --- | --- |
| `.scrollbar` | 绝对定位；`transition-opacity`（内部样式）；opacity: var(--scrollbar-opacity)；background: var(--scrollbar-bg)；box-shadow: var(--scrollbar-shadow)；transition-duration: var(--scrollbar-duration) |
| `.scrollbar-hover .scrollbar` | 透明 |
| `.scrollbar-hover:hover .scrollbar` | opacity: var(--scrollbar-opacity) |
| `.scrollbar-bar` | 绝对定位；background: var(--scrollbar-bar-bg)；border-radius: var(--scrollbar-radius) |
| `.scrollbar-bar:hover` | background: var(--scrollbar-hover-bg) |

来源：[src/component/scrollbar.css](src/component/scrollbar.css), [src/style/vars.css](src/style/vars.css), [src/style/scrollbar.css](src/style/scrollbar.css)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.scrollbar:hover, .scrollbar.is-dragging` | opacity: 1 |
| `.is-dragging > .scrollbar-bar` | background: var(--scrollbar-drag-bg) |
| `.is-horz > .scrollbar-bar` | 全高；`z-20`（内部样式） |
| `.is-vert> .scrollbar-bar` | 全宽；`z-20`（内部样式） |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
### css-native-scrollbar

```json
{"name":"scrollbar-thin / scrollbar-hover / scrollbar-light","summary":"调整原生滚动条细度、悬停显示和配色。","role":"utility"}
```

这些类可加在原生滚动容器上：thin 厚度为变量的一半，Firefox 使用 scrollbar-width:thin；hover 平时隐藏，hover 时显示；light 用 canvas 色系透明度。`.scrollbar-hover .scrollbar` 也会控制后代自定义滚动条显示。

环境：`browser`，已加载 base、scrollbar、utilities CSS。

```html
<div class="overflow-auto h-16 scrollbar-thin scrollbar-hover"><div class="h-32">滚动内容</div></div>
```

## css-variables

### css-variables-config

```json
{"name":"CSS 变量","summary":"配置本库主题、尺寸和状态外观。"}
```

下表按实际声明节点列出默认表达式。主题颜色、圆角等上游变量见 [base](../base/ai.md) 与 [utilities](../utilities/ai.md#css-variables)；在表中所列实际节点覆盖，避免祖先值被组件同名声明盖过。长度按 CSS 单位、颜色按 CSS 颜色/渐变，opacity 为 0–1，duration/delay 为时间。

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--scrollbar-size` | `10px` | 尺寸/间距长度 | `:root, .scrollbar` | `:root, .scrollbar` 的实际匹配元素 |
| `--scrollbar-opacity` | `.6` | 透明度数值 | `:root, .scrollbar` | `:root, .scrollbar` 的实际匹配元素 |
| `--scrollbar-bg` | `rgba(var(--color-inverse-rgb), .15)` | 背景色或渐变 | `:root, .scrollbar` | `:root, .scrollbar` 的实际匹配元素 |
| `--scrollbar-inset` | `inset 0 0 0 1px rgba(var(--color-inverse-rgb), .05)` | CSS 配置值 | `:root, .scrollbar` | `:root, .scrollbar` 的实际匹配元素 |
| `--scrollbar-bar-bg` | `rgba(var(--color-inverse-rgb), .3)` | 背景色或渐变 | `:root, .scrollbar` | `:root, .scrollbar` 的实际匹配元素 |
| `--scrollbar-hover-bg` | `rgba(var(--color-inverse-rgb), .4)` | 背景色或渐变 | `:root, .scrollbar` | `:root, .scrollbar` 的实际匹配元素 |
| `--scrollbar-drag-bg` | `rgba(var(--color-inverse-rgb), .5)` | 背景色或渐变 | `:root, .scrollbar` | `:root, .scrollbar` 的实际匹配元素 |
| `--scrollbar-radius` | `var(--radius)` | 圆角长度 | `:root, .scrollbar` | `:root, .scrollbar` 的实际匹配元素 |
| `--scrollbar-duration` | `.7s` | 动画/过渡时间 | `:root, .scrollbar` | `:root, .scrollbar` 的实际匹配元素 |
| `--scrollbar-bg` | `rgba(var(--color-canvas-rgb), .05)` | 背景色或渐变 | `.scrollbar-light` | `.scrollbar-light` 的实际匹配元素 |
| `--scrollbar-inset` | `inset 0 0 0 1px rgba(var(--color-canvas-rgb), .05)` | CSS 配置值 | `.scrollbar-light` | `.scrollbar-light` 的实际匹配元素 |
| `--scrollbar-bar-bg` | `rgba(var(--color-canvas-rgb), .15)` | 背景色或渐变 | `.scrollbar-light` | `.scrollbar-light` 的实际匹配元素 |
| `--scrollbar-hover-bg` | `rgba(var(--color-canvas-rgb), .3)` | 背景色或渐变 | `.scrollbar-light` | `.scrollbar-light` 的实际匹配元素 |
| `--scrollbar-drag-bg` | `rgba(var(--color-canvas-rgb), .4)` | 背景色或渐变 | `.scrollbar-light` | `.scrollbar-light` 的实际匹配元素 |

`--scrollbar-shadow` 被原生 track 消费，但本库未声明默认值；可在滚动元素上设置合法 box-shadow。`--scrollbar-inset` 虽有声明，不能推断等价于 shadow；`--scrollbar-size` 的 CSS 默认 10px 与 Preact size 默认 12px 是不同入口。

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-on-scroll-listener

```json
{"name":"OnScrollListener","summary":"定义 OnScrollListener 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type OnScrollListener = (scrollPos: number, type: 'vert' | 'horz') => void;
```

来源：[OnScrollListener](src/component/scrollbar.tsx)。

### types-scrollbar-props

```json
{"name":"ScrollbarProps","summary":"定义 ScrollbarProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface ScrollbarProps {
    scrollSize: number;
    clientSize: number;
    type?: 'vert' | 'horz';
    defaultScrollPos?: number;
    minBarSize?: number;
    scrollPos?: number;
    size?: number;
    className?: ClassNameLike;
    onScroll?: OnScrollListener;
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
    style?: JSX.CSSProperties;
    wheelContainer?: string | RefObject<HTMLElement>;
    wheelSpeed?: number;
}
```

来源：[ScrollbarProps](src/component/scrollbar.tsx)。

### types-scrollbar-state

```json
{"name":"ScrollbarState","summary":"定义 ScrollbarState 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface ScrollbarState {
    scrollPos: number;
    dragStart: {x: number; y: number; offset: number} | false;
}
```

来源：[ScrollbarState](src/component/scrollbar.tsx)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

主入口和 /react 的 Scrollbar 都是 Preact 类，没有 vanilla wrapper，不支持 `new Scrollbar(element,options)`。必须提供 scrollSize（内容总长度）和 clientSize（视口长度），单位像素；默认竖向、size=12px、minBarSize=3×size、defaultScrollPos=0、wheelSpeed=1。使用显式 type='vert' 可同时获得方向状态类。

scrollPos 存在时为受控：scroll/scrollOffset 只发 onScroll(newPos,type)，父组件必须回传新 scrollPos；省略时内部保存。位置会钳制到 0..maxScrollPos；无效数值按零，尺寸不为正时安全回退。scroll 与 scrollOffset 返回是否有位置变化。组件只发位置变化，不替使用方滚动实际内容。wheelContainer 字符串在 document 委托并按 closest 匹配，ref 直接绑定其元素；仅挂载时绑定，卸载解除 document/mouse/wheel 监听并取消 RAF。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](package.json)
- [主入口](src/main.ts)
- [Preact 入口](src/main-react.ts)
- [正式文档](docs/lib/components/index.md)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](../../.agents/skills/zui-standards/references/consumption.md)
