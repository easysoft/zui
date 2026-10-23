# 弹出面板

## meta

```json
{"schemaVersion":1,"library":"popover","summary":"提供触发定位、动态面板、箭头及显示隐藏生命周期的浮层。","keywords":["弹出面板","popover","PopoverPanel","Popover"]}
```

## overview

提供触发定位、动态面板、箭头及显示隐藏生命周期的浮层。

Popover 绑定触发元素，自动创建面板或使用 target 指定的已有面板；target 支持选择器、元素、回调及 $next（后一个元素）/ $target:选择器（最近祖先）。element 可是 DOM 或 Floating UI 虚拟元素。container 默认 body，默认 top、absolute、flip=true、arrow=true、offset=1；箭头默认 5px，会计入实际偏移。width='100%' 取触发元素宽度，尺寸数字为像素。

show({delay?,event?,hideOthers?})、hide(destroy?)、toggle(options?) 控制显示，updateLayout/updatePosition/layout 管理位置观察；delayHide 默认 150ms。onShow/onHide 返回 false 可取消，对应 show/shown/hide/hidden 事件无额外载荷；shown/hidden 基于库内计时器，不等价于 transitionend。mask 控制点击外部时隐藏，不生成 Modal 式遮罩。

默认触发 click；hover 带移入/移出延迟，manual 表示由使用方调用。静态 create(options?,element?) 返回实例，show(options) 创建并显示，默认设置 destroyOnHide=true；事件坐标定位应提供 event。destroy 清除定时器、自动定位监听、触发关联和动态面板；用户提供的静态 target 不由组件删除。PopoverPanel 只是内容渲染器，独立使用不会自动定位或显示控制。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/popover`](src/main.ts) 公开原生组件和相应类型。

Preact 入口 [`@zui/popover/react`](src/main-react.ts)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/popover` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-popover-panel

```json
{"name":"PopoverPanel","summary":"创建和管理 PopoverPanel 原生实例。"}
```

入口：`import {PopoverPanel} from '@zui/popover';`。

构造 `new PopoverPanel(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {PopoverPanel} from '@zui/popover';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new PopoverPanel(host, {title: '说明', content: '面板内容', popup: true});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[PopoverPanel](src/vanilla/popover-panel.ts)。

### vanilla-popover

```json
{"name":"Popover","summary":"创建和管理 Popover 原生实例。"}
```

入口：`import {Popover} from '@zui/popover';`。

构造、实例查询和选项/事件基础契约见 [Component](../core/ai.md#vanilla-component)。`setOptions` 合并参数不等于重建 DOM；本类特定方法如下。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

默认值（类内源码声明参考，不是独立脚本）：

```ts
static DEFAULT: Partial<PopoverOptions> = {
        placement: 'top',
        strategy: 'absolute',
        flip: true,
        arrow: true,
        offset: 1,
        trigger: 'click',
        mask: true,
        delay: 0,
        animation: true,
        closeBtn: true,
        popup: true,
        elementShowClass: 'with-popover-show',
        hideNewOnHide: true,
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `shown` | `(): boolean` |
| `id` | `(): string` |
| `zIndex` | `(): number` |
| `trigger` | `(): HTMLElement \| VirtualElement` |
| `target` | `(): HTMLElement \| undefined` |
| `getTriggerElement` | `(): HTMLElement \| VirtualElement` |
| `initTarget` | `(): HTMLElement \| undefined` |
| `show` | `(options?: PopoverShowOptions \| undefined): void` |
| `hide` | `(destroy?: boolean \| undefined): void` |
| `toggle` | `(options?: PopoverShowOptions \| undefined): void` |
| `destroy` | `(): void` |
| `updateLayout` | `(): void` |
| `updatePosition` | `(): void` |
| `layout` | `(): void` |
| `handleClickOutside` | `(event: MouseEvent): boolean \| void` |
| `handleClickTarget` | `(_event: MouseEvent): boolean \| void` |
| `delayHide` | `(delay?: number): void` |
| `Popover.create` | `<O extends PopoverOptions, E extends ComponentEvents, T extends typeof Popover<O, E>>(this: T, options?: (O & { event?: Event \| undefined; }) \| undefined, element?: HTMLElement \| undefined): InstanceType<T>` |
| `Popover.show` | `<O extends PopoverOptions, E extends ComponentEvents, T extends typeof Popover<O, E>>(this: T, options: O & { event?: Event \| undefined; }): InstanceType<T>` |

带类名前缀的是 static 方法；其余在实例/ref 上使用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {Popover} from '@zui/popover';

const host = document.createElement('button');
host.textContent = '操作';
document.body.append(host);
const instance = new Popover(host, {title: '说明', content: '面板内容', trigger: 'click'});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[Popover](src/vanilla/popover.ts)。

## preact

### preact-popover-panel

```json
{"name":"PopoverPanel","summary":"渲染 PopoverPanel Preact 视图。"}
```

入口：`import {PopoverPanel} from '@zui/popover/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/popover';
import {PopoverPanel} from '@zui/popover/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<PopoverPanel title="说明" content="面板内容" popup={true} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[PopoverPanel](src/component/popover-panel.tsx)。

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
| `.popover` | 绝对定位；`left-0`（内部样式）；`top-0`（内部样式）；`w-max`（内部样式）；隐藏 |
| `.popover-heading` | `bg-surface`（内部样式）；`h-10`（内部样式）；`gap-4`（内部样式）；Flex 布局；交叉轴居中；`pl-3`（内部样式）；`pr-2`（内部样式）；主轴两端分布；`rounded-t-[inherit]`（内部样式）；相对定位；`z-[1]`（内部样式） |
| `.popover-title` | `flex-auto`（内部样式）；加粗 |
| `.popover-content` | `p-3`（内部样式）；相对定位；`z-[1]`（内部样式） |
| `.popover-arrow` | `z-0`（内部样式） |
| `.popover > .btn-close` | 绝对定位；`right-2`（内部样式）；`top-2.5`（内部样式）；`z-[2]`（内部样式） |
| `.btn-close + .popover-content` | `pr-12`（内部样式） |

来源：[src/style/popover.css](src/style/popover.css)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.popover.show` | 块级显示 |
| `.has-heading > .popover-arrow.arrow-up, .has-heading > .popover-arrow.arrow-top` | `bg-surface`（内部样式） |
| `.btn.with-popover-show` | `shadow-inner`（内部样式） |
| `.with-popover-show[data-pop-placement="top"] > .caret` | `rotate-180`（内部样式） |
| `.with-popover-show[data-pop-placement="left"] > .caret` | `rotate-90`（内部样式） |
| `.with-popover-show[data-pop-placement="right"] > .caret` | `-rotate-90`（内部样式） |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
## css-variables

本库没有新增可配置的 CSS 变量声明。依赖组件的变量按其 [AI 索引](../../ai.md) 查找；外部主题变量的使用不等于由本库定义。

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-popover-side

```json
{"name":"PopoverSide","summary":"定义 PopoverSide 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type PopoverSide = 'top' | 'right' | 'bottom' | 'left';
```

来源：[PopoverSide](src/types/popover-options.ts)。

### types-popover-layout-info

```json
{"name":"PopoverLayoutInfo","summary":"定义 PopoverLayoutInfo 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type PopoverLayoutInfo = {
    popSide: PopoverSide;
    arrowSide: PopoverSide;
    x: number;
    y: number;
    placement: Placement;
    strategy: Strategy;
    trigger: HTMLElement | VirtualElement;
    target: HTMLElement;
};
```

来源：[PopoverLayoutInfo](src/types/popover-options.ts)。

### types-popover-options

```json
{"name":"PopoverOptions","summary":"定义 PopoverOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type PopoverOptions = Omit<PopoverPanelOptions, 'arrow' | 'arrowStyle' | 'onlyInner'> & {
    name?: string;

    /* The panel target element. */
    target?: Selector | (() => HTMLElement);

    /* The trigger element. */
    element?: HTMLElement | VirtualElement;
    elementShowClass?: string;
    width?: number | 'auto' | '100%' | (() => number | 'auto');
    minWidth?: SizeSetting;
    minHeight?: SizeSetting;
    maxWidth?: SizeSetting;
    maxHeight?: SizeSetting;
    height?: number | (() => number | 'auto');
    limitSize?: boolean;
    limitInScreen?: boolean;
    container?: Selector;
    trigger?: 'click' | 'hover' | 'manual' | (string & {});
    triggerEvent?: Event;
    placement?: Placement;
    strategy?: Strategy;
    flip?: boolean;
    shift?: boolean | ShiftOptions | Derivable<ShiftOptions>;
    arrow?: boolean | number;
    autoHide?: boolean | HideOptions;
    offset?: OffsetOptions;
    mask?: boolean;
    delay?: number;
    show?: boolean | number;
    animation?: boolean | string;
    destroyOnHide?: boolean | number;
    hideOthers?: boolean;
    hideNewOnHide?: boolean;

    onLayout?: (info: PopoverLayoutInfo) => void;
    onShow?: () => boolean | void;
    onShown?: () => void;
    onHide?: () => boolean | void;
    onHidden?: () => void;
};
```

来源：[PopoverOptions](src/types/popover-options.ts)。

### types-popover-events

```json
{"name":"PopoverEvents","summary":"定义 PopoverEvents 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type PopoverEvents = {
    show: [];
    shown: [];
    hide: [];
    hidden: [];
};
```

来源：[PopoverEvents](src/types/popover-events.ts)。

### types-popover-panel-options

```json
{"name":"PopoverPanelOptions","summary":"定义 PopoverPanelOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type PopoverPanelOptions = {
    id?: string;
    popup?: boolean;
    onlyInner?: boolean;
    title?: CustomContentType;
    titleClass?: string;
    headingClass?: string;
    content?: CustomContentType;
    contentClass?: string;
    style?: JSX.CSSProperties;
    className?: ClassNameLike;
    closeBtn?: boolean;
    arrow?: boolean | string;
    arrowStyle?: JSX.CSSProperties;
    footer?: CustomContentType;
    footerClass?: string;
};
```

来源：[PopoverPanelOptions](src/types/popover-panel-options.ts)。

### types-popover-show-options

```json
{"name":"PopoverShowOptions","summary":"定义 PopoverShowOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type PopoverShowOptions = {
    delay?: number | boolean;
    event?: Event;
    hideOthers?: boolean;
};
```

来源：[PopoverShowOptions](src/vanilla/popover.ts)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

Popover 绑定触发元素，自动创建面板或使用 target 指定的已有面板；target 支持选择器、元素、回调及 $next（后一个元素）/ $target:选择器（最近祖先）。element 可是 DOM 或 Floating UI 虚拟元素。container 默认 body，默认 top、absolute、flip=true、arrow=true、offset=1；箭头默认 5px，会计入实际偏移。width='100%' 取触发元素宽度，尺寸数字为像素。

show({delay?,event?,hideOthers?})、hide(destroy?)、toggle(options?) 控制显示，updateLayout/updatePosition/layout 管理位置观察；delayHide 默认 150ms。onShow/onHide 返回 false 可取消，对应 show/shown/hide/hidden 事件无额外载荷；shown/hidden 基于库内计时器，不等价于 transitionend。mask 控制点击外部时隐藏，不生成 Modal 式遮罩。

默认触发 click；hover 带移入/移出延迟，manual 表示由使用方调用。静态 create(options?,element?) 返回实例，show(options) 创建并显示，默认设置 destroyOnHide=true；事件坐标定位应提供 event。destroy 清除定时器、自动定位监听、触发关联和动态面板；用户提供的静态 target 不由组件删除。PopoverPanel 只是内容渲染器，独立使用不会自动定位或显示控制。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](package.json)
- [主入口](src/main.ts)
- [Preact 入口](src/main-react.ts)
- [正式文档](docs/lib/components/index.md)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](../../.agents/skills/zui-standards/references/consumption.md)
