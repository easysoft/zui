# 下拉选择器

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"picker","summary":"提供单选、多选、搜索、树形选项和远程数据的下拉选择器。","keywords":["下拉选择器","picker","Picker"]}
```

## overview

提供单选、多选、搜索、树形选项和远程数据的下拉选择器。

在 [Pick](../pick/ai.md#preact-pick) 上实现列表选择。items 必填，可使用 Menu 的数组/查询形式；值始终以 valueSplitter（默认逗号）连接的字符串保存。multiple=true 多选，默认单选；multiple 的数字类型在当前实现按真值判断，不能作为最大选择数量限制。search=true 默认搜索，数字同样按真值处理，不能作为选项数量阈值；creatable 默认 false。required 与 emptyValue 控制空值选择，不自动构成原生必填校验。

setValue/select/deselect/toggleValue/clear 走 beforeChange 和选项校验；onSelect/onDeselect 是变化后的通知，当前实现忽略其返回值；需要取消时使用 beforeChange。limitValueInList=true 默认限制在加载列表中，异步加载的未知值需按场景设置 false。load/update(force?)/tryUpdate 管理查询及缓存；非数组源加载默认延迟 500ms（searchDelay || 500），新请求取消旧请求，失败警告并按空列表处理；cache=true、clearSearchOnSelect=true。maxItemsCount 限制菜单展示项数量，不是已选值数量。shareSelections 让同组 picker 排除其他实例的选择，销毁后解绑共享记录。

公开属性 value/valueList 及 searchBox，方法详见视图成员表。Dropdown 是动作菜单，Picker 用于表单值；Pick 是构建基础，不应混用三者。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/picker`](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/picker/react`](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/picker` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-picker

```json
{"name":"Picker","summary":"创建和管理 Picker 原生实例。"}
```

入口：`import {Picker} from '@zui/picker';`。

构造 `new Picker(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {Picker} from '@zui/picker';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new Picker(host, {name: 'choice', items: [{value: 'a', text: '选项 A'}, {value: 'b', text: '选项 B'}]});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[Picker](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/vanilla/picker.ts>)。

## preact

### preact-picker

```json
{"name":"Picker","summary":"渲染 Picker Preact 视图。"}
```

入口：`import {Picker} from '@zui/picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

继承 [Pick](../pick/ai.md#preact-pick) 的 Props 和视图成员，并应用下面的覆盖。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps = {
        ...Pick.defaultProps,
        className: 'picker',
        valueSplitter: ',',
        limitValueInList: true,
        search: true,
        creatable: false,
        emptyValue: '',
        cache: true,
        hotkeys: true,
        clearSearchOnSelect: true,
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `valueList` | `(): string[]` |
| `firstEmptyValue` | `(): string` |
| `searchBox` | `(): PickerSearch \| null` |
| `value` | `(): string` |
| `focusSearch` | `(search?: string \| undefined): void` |
| `getDefaultState` | `(props?: RenderableProps<O> \| undefined): S & { loading: boolean; search: string; items: PickerItemOptions[]; createdItems: never[]; selections: never[]; }` |
| `isEmptyValue` | `(value: string): boolean` |
| `toggleValue` | `(value: string, toggle?: boolean \| undefined): Promise<S \| undefined> \| undefined` |
| `deselect` | `(values?: string \| string[]): void` |
| `deselectAll` | `(): void` |
| `clear` | `(): void` |
| `select` | `(values: string \| string[]): Promise<S \| undefined>` |
| `selectAll` | `(): Promise<S \| undefined> \| undefined` |
| `isSelected` | `(value: string): boolean` |
| `isSelectedAll` | `(): boolean` |
| `load` | `(): Promise<ListItem[]>` |
| `changeState` | `(state: Partial<S> \| ((prevState: Readonly<S>) => Partial<S>), callback?: (() => void) \| undefined): Promise<S>` |
| `update` | `(force?: boolean \| undefined): Promise<void>` |
| `tryUpdate` | `(): Promise<void>` |
| `formatValueList` | `(value: unknown, valueSplitter?: string \| undefined): string[]` |
| `formatValue` | `(value: string \| string[]): string` |
| `setValue` | `(value?: unknown, silent?: boolean \| undefined): Promise<S \| undefined>` |
| `Picker.getSharedSelections` | `(name: string): Set<string>` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/picker';
import {Picker} from '@zui/picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<Picker items={[{value: 'a', text: '选项 A'}]} name="choice" />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[Picker](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/component/picker.tsx>)。

### preact-picker-single-select

```json
{"name":"PickerSingleSelect","summary":"渲染 PickerSingleSelect Preact 视图。"}
```

入口：`import {PickerSingleSelect} from '@zui/picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

| 成员 | 签名与返回值 |
| --- | --- |
| `searchBox` | `(): PickerSearch \| null` |

这是组合用的子视图，需要 owner 提供 state、changeState/togglePop 或 onPick 等回调。下面通过完整 owner 装配；自定义替换时按对应 Props 保留必需回调，不单独 new 子视图。

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/picker';
import {Picker} from '@zui/picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<Picker items={[{value: "a", text: "选项 A"}]} multiple={true} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[PickerSingleSelect](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/component/picker-single-select.tsx>)。

### preact-picker-multi-select

```json
{"name":"PickerMultiSelect","summary":"渲染 PickerMultiSelect Preact 视图。"}
```

入口：`import {PickerMultiSelect} from '@zui/picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

| 成员 | 签名与返回值 |
| --- | --- |
| `searchBox` | `(): PickerSearch \| null` |

这是组合用的子视图，需要 owner 提供 state、changeState/togglePop 或 onPick 等回调。下面通过完整 owner 装配；自定义替换时按对应 Props 保留必需回调，不单独 new 子视图。

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/picker';
import {Picker} from '@zui/picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<Picker items={[{value: "a", text: "选项 A"}]} multiple={true} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[PickerMultiSelect](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/component/picker-multi-select.tsx>)。

### preact-picker-menu

```json
{"name":"PickerMenu","summary":"渲染 PickerMenu Preact 视图。"}
```

入口：`import {PickerMenu} from '@zui/picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

| 成员 | 签名与返回值 |
| --- | --- |
| `menu` | `(): SearchMenu<SearchMenuOptions<NestedListItem>> \| null` |
| `picker` | `(): Picker<PickerState, PickerOptions<PickerState>> \| undefined` |

这是组合用的子视图，需要 owner 提供 state、changeState/togglePop 或 onPick 等回调。下面通过完整 owner 装配；自定义替换时按对应 Props 保留必需回调，不单独 new 子视图。

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/picker';
import {Picker} from '@zui/picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<Picker items={[{value: "a", text: "选项 A"}]} multiple={true} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[PickerMenu](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/component/picker-menu.tsx>)。

### preact-picker-search

```json
{"name":"PickerSearch","summary":"渲染 PickerSearch Preact 视图。"}
```

入口：`import {PickerSearch} from '@zui/picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

| 成员 | 签名与返回值 |
| --- | --- |
| `$pop` | `(): Cash` |
| `focus` | `(): void` |
| `setSearch` | `(search: string, focus?: boolean): void` |
| `clear` | `(): void` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/picker';
import {PickerSearch} from '@zui/picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<PickerSearch id="example-search" onSearch={value => console.log(value)} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[PickerSearch](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/component/picker-search.tsx>)。

## web-components

当前公开入口未提供可用自定义元素。仓库存在 [ZuiPickerElement/definePicker 实现](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/web-component/picker.ts>)，但主入口和 package exports 未公开或注册它；不能通过 `@zui/picker` 自动获得 `<zui-picker>`，也不推荐绕过入口深层导入。普通 `z-use-*` 自动初始化与标准自定义元素是不同机制。

## css

### css-structure

```json
{"name": "结构与部件", "summary": "定义根节点和内部部件的样式。", "role": "js-component"}
```

选择器保留父子和同节点条件；生成部件由组件维护，不能仅添加类获得 JavaScript 行为。下表中标记“内部样式”的 token 仅说明 CSS 实现，不是额外公开类。

| 选择器或部件 | 功能/样式契约 |
| --- | --- |
| `.picker` | 相对定位 |
| `.picker-select` | Flex 布局；交叉轴居中；`gap-1`（内部样式）；主轴两端分布 |
| `.picker-select.form-control` | Flex 布局 |
| `.picker-select-placeholder` | `flex-auto`（内部样式）；`text-placeholder`（内部样式） |
| `.picker-select-multi .picker-select-placeholder` | `px-1`（内部样式） |
| `.picker-single-selection` | `flex-auto`（内部样式）；`min-w-0`（内部样式）；隐藏溢出；不换行 |
| `.picker-deselect-btn` | `p-1`（内部样式）；`rounded-full`（内部样式） |
| `.picker-deselect-btn:not(:hover)` | `opacity-70`（内部样式） |
| `.picker-select-multi.form-control` | `h-auto`（内部样式）；`min-h-8`（内部样式）；`p-0`（内部样式）；相对定位 |
| `.picker-multi-selections` | Flex 布局；允许换行；`gap-1`（内部样式）；`min-w-0`（内部样式）；`flex-auto`（内部样式）；`py-[--picker-selections-padding-y]`（内部样式）；`pl-1`（内部样式）；`pr-5`（内部样式） |
| `.picker-multi-caret` | 绝对定位；`top-0`（内部样式）；`right-0`（内部样式）；`bottom-0`（内部样式）；Flex 布局；交叉轴居中；主轴居中；`pr-2`（内部样式） |
| `.picker-multi-selection` | Flex 布局；交叉轴居中；1px 边框；`bg-surface`（内部样式）；`pl-2`（内部样式）；`rounded-full`（内部样式）；`max-w-full`（内部样式） |
| `.picker-multi-selection > .text` | `max-w-[180px]`（内部样式）；不换行；`overflow-clip`（内部样式）；`min-w-0`（内部样式） |
| `.picker-no-search` | `cursor-default`（内部样式） |
| `.picker-menu-list` | `shadow-none`（内部样式）；`border-none`（内部样式）；`flex-auto`（内部样式）；`min-h-0`（内部样式）；`overflow-y-auto`（内部样式） |
| `.picker-menu-search + .picker-menu-list.menu` | `pt-0`（内部样式）；`-mt-0.5`（内部样式） |
| `.picker-menu-list.tree` | `p-2`（内部样式） |
| `.picker-menu .search-menu-footer` | `border-t`（内部样式）；`py-1`（内部样式） |
| `.picker-create-option.btn` | 全宽；`justify-start`（内部样式）；`font-normal`（内部样式）；`text-link`（内部样式） |
| `.picker-create-option.btn:hover, .picker-create-option.btn:focus-visible` | `text-link-hover`（内部样式） |
| `.picker-search-input` | `pr-8`（内部样式）；`h-7`（内部样式）；`px-0`（内部样式）；`py-0`（内部样式）；`bg-transparent`（内部样式）；`border-transparent`（内部样式）；`ring-0`（内部样式）；`outline-0`（内部样式）；font: inherit |
| `.picker-search` | `flex-none`（内部样式）；相对定位；全宽 |
| `.picker-select-single > .picker-search, .picker-select-single .picker-search-input` | `h-auto`（内部样式） |
| `.picker-search > .magnifier` | 绝对定位；`right-0`（内部样式）；`top-1/2`（内部样式）；`-translate-y-1/2`（内部样式）；`opacity-50`（内部样式） |
| `.picker-search-clear.btn` | 绝对定位；`right-0`（内部样式）；`top-1/2`（内部样式）；`-translate-y-1/2`（内部样式）；`w-5`（内部样式）；`h-5`（内部样式）；`max-h-full`（内部样式）；指针光标 |
| `.picker-search-measure` | 绝对定位；`top-0`（内部样式）；`left-0`（内部样式）；`h-0`（内部样式）；隐藏溢出；不换行 |
| `zui-picker` | 块级显示 |
| `zui-picker > .zui-webc-mount` | `contents`（内部样式） |

来源：[src/style/picker.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/style/picker.css>), [src/style/picker-select.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/style/picker-select.css>), [src/style/picker-menu.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/style/picker-menu.css>), [src/style/picker-search.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/style/picker-search.css>), [src/style/web-component.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/style/web-component.css>)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.picker-select.form-control.disabled *` | 不透明 |
| `.size-sm > .picker-select-multi.form-control, .picker-select-multi.form-control.size-sm` | `min-h-6`（内部样式） |
| `.size-md > .picker-select-multi.form-control, .picker-select-multi.form-control.size-md` | `min-h-7`（内部样式） |
| `.size-lg > .picker-select-multi.form-control, .picker-select-multi.form-control.size-lg` | `min-h-10`（内部样式） |
| `.size-sm > .picker-select-multi .picker-deselect-btn, .picker-select-multi.size-sm .picker-deselect-btn` | `h-4`（内部样式）；`py-0`（内部样式） |
| `.readonly .picker-multi-selection` | `pr-2`（内部样式） |
| `.picker-menu-list .tree-item > .selected .item-content` | `font-normal`（内部样式） |
| `.picker-search.is-inline` | `w-16`（内部样式）；`min-w-[64px]`（内部样式） |
| `.is-inline > .picker-search-input` | `min-w-[64px]`（内部样式）；`px-1`（内部样式）；`h-auto`（内部样式） |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
## css-variables

### css-variables-config

```json
{"name":"CSS 变量","summary":"配置本库主题、尺寸和状态外观。"}
```

下表按实际声明节点列出默认表达式。主题颜色、圆角等上游变量见 [base](../base/ai.md) 与 [utilities](../utilities/ai.md#css-variables)；在表中所列实际节点覆盖，避免祖先值被组件同名声明盖过。长度按 CSS 单位、颜色按 CSS 颜色/渐变，opacity 为 0–1，duration/delay 为时间。

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--picker-selections-padding-y` | `.25rem` | 尺寸/间距长度 | `.picker-select-multi.form-control` | `.picker-select-multi.form-control` 的实际匹配元素 |
| `--picker-selections-padding-y` | `.125rem` | 尺寸/间距长度 | `.size-sm > .picker-select-multi.form-control, .picker-select-multi.form-control.size-sm` | `.size-sm > .picker-select-multi.form-control, .picker-select-multi.form-control.size-sm` 的实际匹配元素 |
| `--picker-selections-padding-y` | `.125rem` | 尺寸/间距长度 | `.size-md > .picker-select-multi.form-control, .picker-select-multi.form-control.size-md` | `.size-md > .picker-select-multi.form-control, .picker-select-multi.form-control.size-md` 的实际匹配元素 |

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-picker-options

```json
{"name":"PickerOptions","summary":"定义 PickerOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface PickerOptions<S extends PickerState = PickerState> extends PickOptions<S> {
    multiple?: boolean | number;
    placeholder?: string;
    required?: boolean;

    valueSplitter?: string;
    emptyValue?: string | false;
    limitValueInList?: boolean;
    tree?: TreeOptions | boolean;
    menu?: SearchTreeOptions;
    checkbox?: MenuOptions['checkbox'];
    items: MenuOptions['items'];
    shareSelections?: string;
    getSharedValues?: (shareSelections: string) => string[];
    maxItemsCount?: number;
    exceedLimitHint?: string;
    toolbar?: ToolbarSetting | boolean;
    cache?: boolean;
    searchDelay?: number;
    searchEmptyHint?: string;
    display?: string | ((values: string | string[], selections: PickerItemBasic[]) => CustomContentType);
    search?: boolean | number;
    searchHint?: string;
    creatable?: boolean | ((search: string) => PickerItemOptions | false);
    hotkeys?: HotkeysSettings;
    caretClass?: ClassNameLike;
    clearSearchOnSelect?: boolean;
    noNestedPick?: boolean;
    maxHeight?: SizeSetting;

    onDeselect?: (values: string | string[]) => false | void;
    onSelect?: (values: string | string[]) => false | void;
    onClear?: () => void;
}
```

来源：[PickerOptions](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/types/picker-options.ts>)。

### types-picker-menu-props

```json
{"name":"PickerMenuProps","summary":"定义 PickerMenuProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface PickerMenuProps<S extends PickerState = PickerState> extends PickPopProps<S> {
    multiple?: boolean | number;
    tree?: TreeOptions | boolean;
    menu?: MenuOptions;
    checkbox?: MenuOptions['checkbox'];
    search?: boolean | number;
    valueList: string[];
    header?: CustomContentType;
    footer?: CustomContentType;
    noMatchHint?: string;
    createHint?: string;
    maxItemsCount?: number;
    exceedLimitHint?: string;
    picker?: Picker;
    noNestedPick?: boolean;

    getItem?: (item: NestedItem, index: number) => NestedItem;
    onCreate?: (search: string) => void;
    onPick: (options: {toggle?: string; select?: string | string[]; diselect?: string | string[]}) => void;
    onSelect: (values: string | string[]) => void;
    onDeselect: (values: string | string[]) => void;
    onClear: () => void;
    onToggleValue: (value: string, toggle?: boolean) => void;
    onSetValue: (value: string | string[], silent?: boolean) => void;
}
```

来源：[PickerMenuProps](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/types/picker-menu-props.ts>)。

### types-picker-search-props

```json
{"name":"PickerSearchProps","summary":"定义 PickerSearchProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type PickerSearchProps = {
    id: string;
    inline?: boolean;
    defaultSearch?: string;
    placeholder?: string;
    debounce?: number;
    hotkeys?: HotkeysSettings;
    onSearch?: (search: string) => void;
    onClear?: () => void;
};
```

来源：[PickerSearchProps](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/types/picker-search-props.ts>)。

### types-picker-item-basic

```json
{"name":"PickerItemBasic","summary":"定义 PickerItemBasic 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface PickerItemBasic {
    value: string;
    keys?: string;
    text?: CustomContentType;
    disabled?: boolean;
}
```

来源：[PickerItemBasic](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/types/picker-item-options.ts>)。

### types-picker-item-options

```json
{"name":"PickerItemOptions","summary":"定义 PickerItemOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface PickerItemOptions extends PickerItemBasic, NestedItem {
}
```

来源：[PickerItemOptions](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/types/picker-item-options.ts>)。

### types-picker-item-props

```json
{"name":"PickerItemProps","summary":"定义 PickerItemProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type PickerItemProps = PickerItemOptions;
```

来源：[PickerItemProps](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/types/picker-item-props.ts>)。

### types-picker-select-props

```json
{"name":"PickerSelectProps","summary":"定义 PickerSelectProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface PickerSelectProps<S extends PickerState = PickerState> extends PickTriggerProps<S> {
    placeholder?: string;
    multiple?: boolean | number;
    search?: boolean | number;
    searchHint?: string;
    disabled?: boolean;
    clearable?: boolean;
    valueList: string[];
    emptyValue: string;
    hotkeys?: HotkeysSettings;
    display?: string | ((values: string | string[], selections: PickerItemBasic[]) => CustomContentType);
    caretClass?: ClassNameLike;
    maxHeight?: SizeSetting;

    onSelect: (values: string | string[]) => void;
    onDeselect: (values: string | string[]) => void;
    onClear: () => void;
    onToggleValue: (value: string, toggle?: boolean) => void;
    onSetValue: (value: string | string[], silent?: boolean) => void;
}
```

来源：[PickerSelectProps](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/types/picker-select-props.ts>)。

### types-picker-state

```json
{"name":"PickerState","summary":"定义 PickerState 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface PickerState extends PickState {
    loading: boolean;
    items: PickerItemOptions[];
    createdItems: PickerItemOptions[];
    selections: PickerItemBasic[];
    search: string;
    hoverItem?: string;
}
```

来源：[PickerState](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/types/picker-state.ts>)。

### types-picker-search-state

```json
{"name":"PickerSearchState","summary":"定义 PickerSearchState 的字段、参数或取值范围。"}
```

通过 `@zui/picker/react` 使用 `import type` 导入。

```ts
export type PickerSearchState = {
    search: string;
};
```

来源：[PickerSearchState](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/component/picker-search.tsx>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

在 [Pick](../pick/ai.md#preact-pick) 上实现列表选择。items 必填，可使用 Menu 的数组/查询形式；值始终以 valueSplitter（默认逗号）连接的字符串保存。multiple=true 多选，默认单选；multiple 的数字类型在当前实现按真值判断，不能作为最大选择数量限制。search=true 默认搜索，数字同样按真值处理，不能作为选项数量阈值；creatable 默认 false。required 与 emptyValue 控制空值选择，不自动构成原生必填校验。

setValue/select/deselect/toggleValue/clear 走 beforeChange 和选项校验；onSelect/onDeselect 是变化后的通知，当前实现忽略其返回值；需要取消时使用 beforeChange。limitValueInList=true 默认限制在加载列表中，异步加载的未知值需按场景设置 false。load/update(force?)/tryUpdate 管理查询及缓存；非数组源加载默认延迟 500ms（searchDelay || 500），新请求取消旧请求，失败警告并按空列表处理；cache=true、clearSearchOnSelect=true。maxItemsCount 限制菜单展示项数量，不是已选值数量。shareSelections 让同组 picker 排除其他实例的选择，销毁后解绑共享记录。

公开属性 value/valueList 及 searchBox，方法详见视图成员表。Dropdown 是动作菜单，Picker 用于表单值；Pick 是构建基础，不应混用三者。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/picker/docs/lib/forms/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/.agents/skills/zui-standards/references/consumption.md>)
