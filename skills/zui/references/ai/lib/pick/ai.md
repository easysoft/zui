# 选择器

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"pick","summary":"提供选择器触发器、值同步和弹出层基础框架，供具体选择器组合。","keywords":["选择器","pick","Pick"]}
```

## overview

提供选择器触发器、值同步和弹出层基础框架，供具体选择器组合。

这是选择器基础设施，普通选项列表优先用 [Picker](../picker/ai.md)。Pick 本身没有 items 选项；通过 Trigger/Pop 组件替换或继承 Preact Pick 的渲染方法提供内容。vanilla Pick.replace=true，可能替换宿主；共享渲染与生命周期见 core。

value 外部值优先于 state，defaultValue 默认空串；setValue 会将 null/undefined 转为空串、其他值转 String，再等待 beforeChange（false 取消、字符串替换）。onChange(value,oldValue) 在值状态变化时通知。silent 仅抑制关联 input 的 DOM change；不保证抑制 onChange。open/close/toggle 返回 Promise<PickState>；disabled/readonly 会强制关闭。过渡状态为 opening/closing，分别等待约 50/200ms；卸载取消计时器。

name 设置时生成隐藏字段，或同步已存在的同 id input；PickTrigger 监听 change/syncValue，卸载解除。PickPop 挂载到 popContainer 下的共享 .pick-container，跟踪定位并监听文档外部点击；卸载停止观察和删除面板。onPopShow/Shown/Hide/Hidden 基于当前 open 状态变化触发，不承诺与 CSS transitionend 严格同步。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/pick`](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/pick/react`](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/pick` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-pick

```json
{"name":"Pick","summary":"创建和管理 Pick 原生实例。"}
```

入口：`import {Pick} from '@zui/pick';`。

构造 `new Pick(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

静态 `replace=true`：可能替换宿主节点，销毁后不要假设原节点仍在文档中。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {Pick} from '@zui/pick';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new Pick(host, {name: 'value', defaultValue: '示例值'});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[Pick](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/vanilla/pick.ts>)。

## preact

### preact-pick

```json
{"name":"Pick","summary":"渲染 Pick Preact 视图。"}
```

入口：`import {Pick} from '@zui/pick/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps: Partial<PickOptions> = {
        popContainer: 'body',
        popClass: 'popup',
        popWidth: '100%',
        popPlacement: 'auto',
        popMinWidth: 50,
        popMinHeight: 32,
        popMaxHeight: 300,
        limitPopInScreen: true,
        clickType: 'open',
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `id` | `(): string` |
| `pop` | `(): PickPop<S, PickPopProps<S>, object> \| null` |
| `trigger` | `(): PickTrigger<PickState, PickTriggerProps<PickState>, object> \| null` |
| `value` | `(): string` |
| `getDefaultState` | `(props?: RenderableProps<O> \| undefined): S` |
| `resetState` | `(props?: RenderableProps<O> \| undefined, init?: boolean \| undefined): void` |
| `changeState` | `(state: Partial<S> \| ((prevState: Readonly<S>) => Partial<S>), callback?: (() => void) \| undefined): Promise<S>` |
| `toggle` | `(open?: boolean \| undefined, state?: Partial<S> \| undefined): Promise<S>` |
| `open` | `(state?: Partial<S> \| undefined): Promise<S>` |
| `close` | `(state?: Partial<S> \| undefined): Promise<S>` |
| `setValue` | `(value: unknown, silent?: boolean \| undefined): Promise<S \| undefined>` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/pick';
import {Pick} from '@zui/pick/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<Pick name="value" defaultValue="示例值" />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[Pick](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/components/pick.tsx>)。

### preact-pick-pop

```json
{"name":"PickPop","summary":"渲染 PickPop Preact 视图。"}
```

入口：`import {PickPop} from '@zui/pick/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

| 成员 | 签名与返回值 |
| --- | --- |
| `trigger` | `(): HTMLElement \| null \| undefined` |
| `element` | `(): HTMLElement \| null \| undefined` |
| `container` | `(): HTMLElement \| undefined` |

这是组合用的子视图，需要 owner 提供 state、changeState/togglePop 或 onPick 等回调。下面通过完整 owner 装配；自定义替换时按对应 Props 保留必需回调，不单独 new 子视图。

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/pick';
import {Pick, PickPop, PickTrigger} from '@zui/pick/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<Pick defaultValue="初始值" Pop={PickPop} Trigger={PickTrigger} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[PickPop](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/components/pick-pop.tsx>)。

### preact-pick-trigger

```json
{"name":"PickTrigger","summary":"渲染 PickTrigger Preact 视图。"}
```

入口：`import {PickTrigger} from '@zui/pick/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

| 成员 | 签名与返回值 |
| --- | --- |
| `hasInput` | `(): boolean` |

这是组合用的子视图，需要 owner 提供 state、changeState/togglePop 或 onPick 等回调。下面通过完整 owner 装配；自定义替换时按对应 Props 保留必需回调，不单独 new 子视图。

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/pick';
import {Pick, PickPop, PickTrigger} from '@zui/pick/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<Pick defaultValue="初始值" Pop={PickPop} Trigger={PickTrigger} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[PickTrigger](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/components/pick-trigger.tsx>)。

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
| `.pick-container` | 绝对定位；`left-0`（内部样式）；`top-0`（内部样式）；`z-overlay`（内部样式）；忽略指针命中 |
| `.pick-pop` | Flex 布局；纵向布局；绝对定位；`z-dropdown`（内部样式）；透明；`transition-opacity`（内部样式）；`pointer-events-auto`（内部样式） |

来源：[src/style/pick.css](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/style/pick.css>)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.pick-pop.in` | 不透明 |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
## css-variables

本库没有新增可配置的 CSS 变量声明。依赖组件的变量按其 [AI 索引](../../ai.md) 查找；外部主题变量的使用不等于由本库定义。

## javascript

### javascript-event-pick

```json
{"name": "EVENT_PICK", "summary": "标记由 Pick 内部同步产生的 input change。"}
```

从 `@zui/pick/react` 导出的 `Symbol('EVENT_PICK')`，用于 Cash change 的附加参数，避免自身同步回流。正常值更新使用 setValue 或 input 的 syncValue；不要为任意业务事件伪造此标记。

环境：`workspace`。

```ts
import {EVENT_PICK} from '@zui/pick/react';
console.log(typeof EVENT_PICK); // symbol
```

来源：[PickTrigger](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/components/pick-trigger.tsx>)。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-pick-options

```json
{"name":"PickOptions","summary":"定义 PickOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface PickOptions<S extends PickState = PickState> {
    id?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    tagName?: keyof JSX.IntrinsicElements;
    pickerName?: string;
    attrs?: Record<string, unknown>;
    clickType?: 'toggle' | 'open';

    afterRender?: (info: {firstRender: boolean}) => void;
    beforeDestroy?: () => void;

    Trigger?: ComponentType<PickTriggerProps<S>>;
    Pop?: ComponentType<PickPopProps<S>>;

    value?: string;
    defaultValue?: string;
    disabled?: boolean;
    readonly?: boolean;
    name?: string;
    onChange?: (value: string, oldValue: string) => void;
    beforeChange?: (value: string, oldValue: string) => Promise<boolean | string | void> | boolean | string | void;
    onClick?: (event: MouseEvent) => void | boolean;
    onRenderValue?: (value: unknown, props: PickTriggerProps<S>) => ComponentChildren;

    hidePopWhenEmpty?: boolean;
    limitPopInScreen?: boolean;
    popClass?: ClassNameLike;
    popStyle?: JSX.CSSProperties;
    popContainer?: string | HTMLElement;
    popPlacement?: PickPopPlacement;
    popWidth?: number | 'auto' | '100%' | (() => number | 'auto');
    popHeight?: number | 'auto' | (() => number | 'auto');
    popMinHeight?: number | string;
    popMaxHeight?: number | string;
    popMaxWidth?: number | string;
    popMinWidth?: number | string;
    popHeader?: CustomContentType;
    popFooter?: CustomContentType;

    onPopLayout?: (layout: PickPopLayout) => PickPopLayout;
    onPopShow?: () => void;
    onPopShown?: () => void;
    onPopHide?: () => void;
    onPopHidden?: () => void;
    onClickItem?: (event: MouseEvent, value: string) => void;
}
```

来源：[PickOptions](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/types/pick-options.ts>)。

### types-pick-state

```json
{"name":"PickState","summary":"定义 PickState 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface PickState {
    value: string;
    open: boolean | 'opening' | 'closing';
}
```

来源：[PickState](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/types/pick-state.ts>)。

### types-picker-state-changer

```json
{"name":"PickerStateChanger","summary":"定义 PickerStateChanger 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type PickerStateChanger<S extends PickState = PickState> = (state: Partial<S> | ((prevState: S) => Partial<S>), callback?: () => void) => Promise<S>;
```

来源：[PickerStateChanger](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/types/pick-state.ts>)。

### types-pick-pop-props

```json
{"name":"PickPopProps","summary":"定义 PickPopProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface PickPopProps<S extends PickState = PickState> {
    id: string;
    state: S;
    disabled?: boolean;
    readonly?: boolean;
    empty?: boolean;
    changeState: PickerStateChanger<S>;
    togglePop: (open?: boolean, state?: Partial<S>) => Promise<S>;

    pickerName?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren;
    header?: CustomContentType;
    footer?: CustomContentType;
    afterRender?: (info: {firstRender: boolean}) => void;
    beforeDestroy?: () => void;
    onLayout?: (element: HTMLElement) => void;
    onClickItem?: (event: MouseEvent, state: string) => void;
    noFlipAfterShow?: boolean;

    limitInScreen?: boolean;
    placement?: PickPopPlacement;
    container?: string | HTMLElement;
    width?: number | 'auto' | '100%' | (() => number | 'auto');
    height?: number | 'auto' | (() => number | 'auto');
    minHeight?: number | string;
    maxHeight?: number | string;
    maxWidth?: number | string;
    minWidth?: number | string;
}
```

来源：[PickPopProps](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/types/pick-pop-props.ts>)。

### types-pick-trigger-props

```json
{"name":"PickTriggerProps","summary":"定义 PickTriggerProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface PickTriggerProps<S extends PickState = PickState> {
    id: string;
    state: S;
    disabled?: boolean;
    readonly?: boolean;
    empty?: boolean;
    changeState: PickerStateChanger<S>;
    togglePop: (open?: boolean, state?: Partial<S>) => Promise<S>;
    onClick?: (event: MouseEvent) => void | boolean;
    clickType?: 'toggle' | 'open';
    onRenderValue?: (value: unknown, props: PickTriggerProps<S>) => ComponentChildren;
    /** Commit external values through the picker's validation and normalization. */
    onSetValue?: (value: string | string[], silent?: boolean) => void;

    name?: string;

    pickerName?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren;
    attrs?: Record<string, unknown>;
    tagName?: keyof JSX.IntrinsicElements;
}
```

来源：[PickTriggerProps](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/types/pick-trigger-props.ts>)。

### types-pick-pop-layout

```json
{"name":"PickPopLayout","summary":"定义 PickPopLayout 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type PickPopLayout = {
    left: number;
    top: number;
    width: number;
    height: number;
};
```

来源：[PickPopLayout](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/types/pick-pop-layout.ts>)。

### types-pick-pop-placement

```json
{"name":"PickPopPlacement","summary":"定义 PickPopPlacement 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type PickPopPlacement = Placement | 'auto';
```

来源：[PickPopPlacement](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/types/pick-pop-placement.ts>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

这是选择器基础设施，普通选项列表优先用 [Picker](../picker/ai.md)。Pick 本身没有 items 选项；通过 Trigger/Pop 组件替换或继承 Preact Pick 的渲染方法提供内容。vanilla Pick.replace=true，可能替换宿主；共享渲染与生命周期见 core。

value 外部值优先于 state，defaultValue 默认空串；setValue 会将 null/undefined 转为空串、其他值转 String，再等待 beforeChange（false 取消、字符串替换）。onChange(value,oldValue) 在值状态变化时通知。silent 仅抑制关联 input 的 DOM change；不保证抑制 onChange。open/close/toggle 返回 Promise<PickState>；disabled/readonly 会强制关闭。过渡状态为 opening/closing，分别等待约 50/200ms；卸载取消计时器。

name 设置时生成隐藏字段，或同步已存在的同 id input；PickTrigger 监听 change/syncValue，卸载解除。PickPop 挂载到 popContainer 下的共享 .pick-container，跟踪定位并监听文档外部点击；卸载停止观察和删除面板。onPopShow/Shown/Hide/Hidden 基于当前 open 状态变化触发，不承诺与 CSS transitionend 严格同步。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/pick/docs/lib/forms/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/.agents/skills/zui-standards/references/consumption.md>)
