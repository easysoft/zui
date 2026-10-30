# 下拉菜单

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"dropdown","summary":"为触发元素展示下拉菜单，支持嵌套菜单与 Preact 下拉按钮。","keywords":["下拉菜单","dropdown","Dropdown"]}
```

## overview

为触发元素展示下拉菜单，支持嵌套菜单与 Preact 下拉按钮。

继承 [Popover](../popover/ai.md#vanilla-popover) 的选项、方法和事件，覆盖默认向下起点定位、无箭头/关闭按钮、fade 动画和可用空间限制。动态 items/menu 生成 DropdownMenu，已有静态面板可用 target。`menu` 是更细的菜单 Props，覆盖由顶层计算的菜单值；详细列表与搜索行为见 [Menu](../menu/ai.md#preact) 和 [List](../list/ai.md#preact)。

默认点击普通菜单项关闭；嵌套项、`.not-hide-menu,.form-control,input,label,.nested-toggle-icon` 保持打开。`notHideOnClick` 可更换判定。`DropdownButton` 继承 Button Props，默认 caret=true，挂载/更新时创建或更新 Dropdown，卸载时销毁。`DropdownMenu` 继承 SearchMenu：searchBox=false、placement=right-start、defaultNestedShow=false、expandOnSearch=false、nestedSearch=false、flip/shift=true、offset=1；tree=true 时嵌套内联，否则为子浮层。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/dropdown`](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/dropdown/react`](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/dropdown` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-dropdown

```json
{"name":"Dropdown","summary":"创建和管理 Dropdown 原生实例。"}
```

入口：`import {Dropdown} from '@zui/dropdown';`。

构造、实例查询和选项/事件基础契约见 [Component](../core/ai.md#vanilla-component)。`setOptions` 合并参数不等于重建 DOM；本类特定方法如下。

继承 [Popover](../popover/ai.md#vanilla-popover)，下列是当前类新增或覆盖的成员。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

默认值（类内源码声明参考，不是独立脚本）：

```ts
static DEFAULT: Partial<DropdownOptions> = {
        ...Popover.DEFAULT,
        name: 'dropdown',
        placement: 'bottom-start',
        arrow: false,
        closeBtn: false,
        animation: 'fade',
        limitSize: true,
        notHideOnClick: '.not-hide-menu,.form-control,input,label,.nested-toggle-icon',
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `menu` | `(): DropdownMenu<DropdownMenuOptions> \| null` |
| `handleClickTarget` | `(event: MouseEvent): boolean \| void` |

带类名前缀的是 static 方法；其余在实例/ref 上使用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {Dropdown} from '@zui/dropdown';

const host = document.createElement('button');
host.textContent = '操作';
document.body.append(host);
const instance = new Dropdown(host, {items: [{text: '刷新', onClick: () => console.log('refresh')}]});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[Dropdown](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/src/vanilla/dropdown.ts>)。

## preact

### preact-dropdown-button

```json
{"name":"DropdownButton","summary":"渲染 DropdownButton Preact 视图。"}
```

入口：`import {DropdownButton} from '@zui/dropdown/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

继承 [Button](../button/ai.md#preact) 的 Props 和视图成员，并应用下面的覆盖。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps: Partial<DropdownButtonOptions> = {
        caret: true,
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `triggerElement` | `(): HTMLElement` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/dropdown';
import {DropdownButton} from '@zui/dropdown/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<DropdownButton text="操作" items={[{text: '刷新', onClick: () => console.log('refresh')}]} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[DropdownButton](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/src/component/dropdown-button.tsx>)。

### preact-dropdown-menu

```json
{"name":"DropdownMenu","summary":"渲染 DropdownMenu Preact 视图。"}
```

入口：`import {DropdownMenu} from '@zui/dropdown/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

继承 [SearchMenu](../menu/ai.md#preact) 的 Props 和视图成员，并应用下面的覆盖。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps: Partial<DropdownMenuOptions> = {
        ...SearchMenu.defaultProps,
        searchBox: false,
        placement: 'right-start',
        defaultNestedShow: false,
        expandOnSearch: false,
        nestedSearch: false,
        flip: true,
        shift: true,
        offset: 1,
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `isHoverTrigger` | `(): boolean` |
| `dropdown` | `(): Dropdown<DropdownOptions> \| undefined` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/dropdown';
import {DropdownMenu} from '@zui/dropdown/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<DropdownMenu items={[{text: '菜单项'}]} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[DropdownMenu](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/src/component/dropdown-menu.tsx>)。

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
| `.dropdown.popover` | 绝对定位；`z-dropdown`（内部样式）；Flex 布局；纵向布局 |
| `.dropdown-menu` | 隐藏 |
| `.menu-wrapper .dropdown-menu, .dropdown > .dropdown-menu` | 相对定位 |
| `.popup .popup.search-menu` | `bg-[--menu-bg]`（内部样式） |
| `.dropdown > .menu-wrapper` | 全高 |
| `.dropdown > .menu-wrapper .menu-wrapper` | 绝对定位 |
| `.dropdown > .arrow` | `bg-canvas`（内部样式） |

来源：[src/style/dropdown.css](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/src/style/dropdown.css>)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.dropdown.show` | Flex 布局 |
| `.show > .dropdown-menu, .dropdown-menu.show, .menu-wrapper > .dropdown-menu` | 块级显示 |
| `.show > .menu-wrapper` | Flex 布局 |
| `.dropdown > .menu-wrapper.is-tree .menu-wrapper` | 相对定位 |
| `.is-contextmenu .is-nested-show > a:not(:hover)` | `bg-primary-100`（内部样式） |
| `.is-contextmenu .menu-item.is-nested > .item-inner > .nested-toggle-icon` | 绝对定位；`right-1`（内部样式）；`top-1.5`（内部样式） |
| `.is-contextmenu .menu-nested .menu-item > .item-inner` | `pl-2`（内部样式）；`pr-5`（内部样式） |
| `.is-contextmenu .menu-nested .menu-item > .item-inner > .item-content` | 隐藏溢出 |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
## css-variables

### css-variables-config

```json
{"name":"CSS 变量","summary":"配置本库主题、尺寸和状态外观。"}
```

下表按实际声明节点列出默认表达式。主题颜色、圆角等上游变量见 [base](../base/ai.md) 与 [utilities](../utilities/ai.md#css-variables)；在表中所列实际节点覆盖，避免祖先值被组件同名声明盖过。长度按 CSS 单位、颜色按 CSS 颜色/渐变，opacity 为 0–1，duration/delay 为时间。

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--menu-min-width` | `7rem` | 尺寸/间距长度 | `.dropdown-menu` | `.dropdown-menu` 的实际匹配元素 |
| `--menu-max-width` | `20rem` | 尺寸/间距长度 | `.dropdown-menu` | `.dropdown-menu` 的实际匹配元素 |

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-dropdown-menu-options

```json
{"name":"DropdownMenuOptions","summary":"定义 DropdownMenuOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface DropdownMenuOptions extends SearchMenuOptions {
    placement?: Placement;
    relativeTarget?: unknown;
    tree?: boolean;
    dropdown?: Dropdown;
    flip?: boolean;
    shift?: boolean | ShiftOptions | Derivable<ShiftOptions>;
    offset?: OffsetOptions;
}
```

来源：[DropdownMenuOptions](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/src/types/dropdown-menu-options.ts>)。

### types-dropdown-options

```json
{"name":"DropdownOptions","summary":"定义 DropdownOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type DropdownOptions = PopoverOptions & {
    tree?: boolean;
    menu?: Partial<DropdownMenuOptions>;
    items?: DropdownMenuOptions['items'];
    relativeTarget?: DropdownMenuOptions['relativeTarget'];
    onClickItem?: DropdownMenuOptions['onClickItem'];
    notHideOnClick?: Comparator;
};
```

来源：[DropdownOptions](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/src/types/dropdown-options.ts>)。

### types-dropdown-button-options

```json
{"name":"DropdownButtonOptions","summary":"定义 DropdownButtonOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface DropdownButtonOptions extends ButtonProps {
    menu?: DropdownOptions['menu'];
    dropdown?: DropdownOptions;
    trigger?: DropdownOptions['trigger'];
    placement?: DropdownOptions['placement'];
    items?: DropdownOptions['items'];
    relativeTarget?: DropdownOptions['relativeTarget'];
    onClickItem?: DropdownOptions['onClickItem'];
}
```

来源：[DropdownButtonOptions](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/src/types/dropdown-button-options.ts>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

继承 [Popover](../popover/ai.md#vanilla-popover) 的选项、方法和事件，覆盖默认向下起点定位、无箭头/关闭按钮、fade 动画和可用空间限制。动态 items/menu 生成 DropdownMenu，已有静态面板可用 target。`menu` 是更细的菜单 Props，覆盖由顶层计算的菜单值；详细列表与搜索行为见 [Menu](../menu/ai.md#preact) 和 [List](../list/ai.md#preact)。

默认点击普通菜单项关闭；嵌套项、`.not-hide-menu,.form-control,input,label,.nested-toggle-icon` 保持打开。`notHideOnClick` 可更换判定。`DropdownButton` 继承 Button Props，默认 caret=true，挂载/更新时创建或更新 Dropdown，卸载时销毁。`DropdownMenu` 继承 SearchMenu：searchBox=false、placement=right-start、defaultNestedShow=false、expandOnSearch=false、nestedSearch=false、flip/shift=true、offset=1；tree=true 时嵌套内联，否则为子浮层。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/dropdown/docs/lib/components/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/.agents/skills/zui-standards/references/consumption.md>)
