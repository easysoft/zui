# 颜色选择器

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"color-picker","summary":"提供预设颜色弹出选择器和原生颜色输入框，支持颜色同步。","keywords":["颜色选择器","color-picker","ColorPicker","ColorInput"]}
```

## overview

提供预设颜色弹出选择器和原生颜色输入框，支持颜色同步。

`ColorPicker` 继承 [Pick](../pick/ai.md#preact-pick) 的值、弹层及清理契约；颜色列表可为字符串数组或逗号串。`custom` 开启/配置原生 `ColorInput`；内嵌输入框优先使用选择器当前的非空颜色，当前颜色为空时依次使用 `custom.value`、`custom.defaultValue` 和空字符串，显式的 `custom.value: ''` 会保留空值。备用颜色不会自动改变选择器值或表单值，清空后仍遵循此规则；是否显示自定义颜色的选中标记仅由选择器当前值是否属于预设颜色决定。`syncBackground`/`syncBorder`/`syncColor`/`syncValue` 是要修改的外部元素选择器，使用时确认元素归属。`required` 不应当作自动填入首个颜色或原生表单校验的保证。

`ColorInput` 用 `<input type="color">`，value 受控、defaultValue 初始化非受控状态；`onInput(value,event)` 即时通知，`onChange` 在提交变化时通知。原生颜色输入框收到空字符串时可显示黑色；隐藏字段保留用于提交的空字符串，不改变原生控件的规范化行为。`alpha` 虽在类型中声明，目前渲染没有使用它，不能承诺透明度编辑。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/color-picker`](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/main.ts>) 公开原生组件；选项类型由 `/react` 入口导出。

Preact 入口 [`@zui/color-picker/react`](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/color-picker` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-color-picker

```json
{"name":"ColorPicker","summary":"创建和管理 ColorPicker 原生实例。"}
```

入口：`import {ColorPicker} from '@zui/color-picker';`。

构造 `new ColorPicker(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {ColorPicker} from '@zui/color-picker';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new ColorPicker(host, {defaultValue: '#ef4444', colors: ['#ef4444', '#22c55e']});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[ColorPicker](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/vanilla/color-picker.ts>)。

### vanilla-color-input

```json
{"name":"ColorInput","summary":"创建和管理 ColorInput 原生实例。"}
```

入口：`import {ColorInput} from '@zui/color-picker';`。

构造 `new ColorInput(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {ColorInput} from '@zui/color-picker';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new ColorInput(host, {name: 'color', defaultValue: '#2563eb'});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[ColorInput](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/vanilla/color-input.ts>)。

## preact

### preact-color-picker

```json
{"name":"ColorPicker","summary":"渲染 ColorPicker Preact 视图。"}
```

入口：`import {ColorPicker} from '@zui/color-picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

继承 [Pick](../pick/ai.md#preact-pick) 的 Props 和视图成员，并应用下面的覆盖。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps = {
        ...Pick.defaultProps,
        className: 'rounded btn square size-sm ghost',
        popClass: 'color-picker-pop popup',
        colors: ['#ef4444', '#f97316', '#eab308', '#84cc16', '#22c55e', '#14b8a6', '#0ea5e9', '#6366f1', '#a855f7', '#d946ef', '#ec4899'],
        closeBtn: true,
        popWidth: 'auto',
        popMinWidth: 184,
    } as Partial<PickOptions>;
```

| 成员 | 签名与返回值 |
| --- | --- |
| `getDefaultState` | `(props?: RenderableProps<ColorPickerOptions> \| undefined): PickState` |
| `getColors` | `(): string[]` |
| `syncColor` | `(): void` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/color-picker';
import {ColorPicker} from '@zui/color-picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<ColorPicker defaultValue="#ef4444" colors={['#ef4444', '#22c55e']} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[ColorPicker](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/components/color-picker.tsx>)。

### preact-color-input

```json
{"name":"ColorInput","summary":"渲染 ColorInput Preact 视图。"}
```

入口：`import {ColorInput} from '@zui/color-picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps = {
        defaultValue: '',
    } as Partial<ColorInputOptions>;
```

| 成员 | 签名与返回值 |
| --- | --- |
| `value` | `(): string` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/color-picker';
import {ColorInput} from '@zui/color-picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<ColorInput name="color" defaultValue="#2563eb" />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[ColorInput](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/components/color-input.tsx>)。

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
| `.color-input` | 相对定位；`ring-0`（内部样式）；`w-6`（内部样式）；`h-6`（内部样式） |
| `.color-input > label, .color-input > input` | 绝对定位；`inset-0`（内部样式）；`w-6`（内部样式）；`h-6`（内部样式）；指针光标 |
| `.color-input > input` | 透明 |
| `.color-input > label` | Flex 布局；交叉轴居中；主轴居中 |
| `.color-input > label::before` | `content-['']`（内部样式）；块级显示；`ring-1`（内部样式）；`ring-inverse/10`（内部样式）；`ring-inset`（内部样式）；`rounded-full`（内部样式）；`w-5`（内部样式）；`h-5`（内部样式）；`bg-[var(--color-input-value)]`（内部样式）；`m-0.5`（内部样式）；绝对定位；`inset-0`（内部样式） |
| `.color-input > label > .icon` | 相对定位；`z-10`（内部样式） |
| `.color-picker-heading` | Flex 布局；`flex-row`（内部样式）；主轴两端分布；`p-2`（内部样式）；`-mb-1`（内部样式）；交叉轴居中；加粗 |
| `.color-picker-row` | Flex 布局；允许换行；`gap-2`（内部样式）；`flex-row`（内部样式）；`p-3`（内部样式） |
| `.color-picker-item` | Flex 布局；主轴居中；交叉轴居中；`rounded-full`（内部样式）；`ring-0`（内部样式）；`w-5`（内部样式）；`h-5`（内部样式）；`px-0.5`（内部样式）；`text-canvas`（内部样式） |
| `.color-picker-custom > label, .color-picker-custom > input` | 全宽；全高 |
| `.color-picker-custom > label::before` | `m-0`（内部样式） |
| `.color-picker-item.color-input .i-check` | 透明；`scale-75`（内部样式） |
| `.color-picker-item.color-input > label::before` | background-image: var(--color-input-empty-bg) |

来源：[src/style/color-input.css](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/style/color-input.css>), [src/style/color-picker.css](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/style/color-picker.css>)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.color-input.is-empty > label::before` | background-image: var(--color-input-empty-bg) |
| `.color-picker-row.is-custom .color-picker-item.color-input .i-check` | 不透明 |
| `.color-picker-row.is-custom .color-picker-item.color-input > label::after` | `content-['']`（内部样式）；块级显示；绝对定位；`rounded-full`（内部样式）；`inset-0.5`（内部样式）；`bg-[--color-input-value]`（内部样式） |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
## css-variables

### css-variables-config

```json
{"name":"CSS 变量","summary":"配置本库主题、尺寸和状态外观。"}
```

下表按实际声明节点列出默认表达式。主题颜色、圆角等上游变量见 [base](../base/ai.md) 与 [utilities](../utilities/ai.md#css-variables)；在表中所列实际节点覆盖，避免祖先值被组件同名声明盖过。长度按 CSS 单位、颜色按 CSS 颜色/渐变，opacity 为 0–1，duration/delay 为时间。

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--color-input-empty-bg` | `radial-gradient(circle closest-side, #fff, #fff0), conic-gradient(#f00, #f0f, #00f, #0ff, #0f0, #ff0, #f00)` | 背景色或渐变 | `.color-input` | `.color-input` 的实际匹配元素 |

`--color-input-value` 由 ColorInput 根据当前值设置在根节点，用于色块背景；推荐通过 value 更新而非手工覆盖。

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-color-picker-options

```json
{"name":"ColorPickerOptions","summary":"定义 ColorPickerOptions 的字段、参数或取值范围。"}
```

通过 `@zui/color-picker/react` 使用 `import type` 导入。

```ts
export interface ColorPickerOptions extends PickOptions {
    required?: boolean;
    colors?: string | string[];
    custom?: boolean | ColorInputOptions;
    icon?: IconType;
    syncValue?: string;
    syncColor?: string;
    syncBackground?: string;
    syncBorder?: string;
    closeBtn?: boolean;
    heading?: ComponentChildren;
    hint?: string;
}
```

来源：[ColorPickerOptions](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/types/color-picker-options.ts>)。

### types-color-input-options

```json
{"name":"ColorInputOptions","summary":"定义 ColorInputOptions 的字段、参数或取值范围。"}
```

通过 `@zui/color-picker/react` 使用 `import type` 导入。

```ts
export type ColorInputOptions = {
    id?: string;
    className?: ClassNameLike;
    name?: string;
    value?: string;
    defaultValue?: string;
    alpha?: boolean;
    hint?: string;
    icon?: IconType;
    onChange?: (value: string, event: Event) => void;
    onInput?: (value: string, event: Event) => void;
};
```

来源：[ColorInputOptions](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/types/color-input-options.ts>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

`ColorPicker` 继承 [Pick](../pick/ai.md#preact-pick) 的值、弹层及清理契约；颜色列表可为字符串数组或逗号串。`custom` 开启/配置原生 `ColorInput`；内嵌输入框优先使用选择器当前的非空颜色，当前颜色为空时依次使用 `custom.value`、`custom.defaultValue` 和空字符串，显式的 `custom.value: ''` 会保留空值。备用颜色不会自动改变选择器值或表单值，清空后仍遵循此规则；是否显示自定义颜色的选中标记仅由选择器当前值是否属于预设颜色决定。`syncBackground`/`syncBorder`/`syncColor`/`syncValue` 是要修改的外部元素选择器，使用时确认元素归属。`required` 不应当作自动填入首个颜色或原生表单校验的保证。

`ColorInput` 用 `<input type="color">`，value 受控、defaultValue 初始化非受控状态；`onInput(value,event)` 即时通知，`onChange` 在提交变化时通知。原生颜色输入框收到空字符串时可显示黑色；隐藏字段保留用于提交的空字符串，不改变原生控件的规范化行为。`alpha` 虽在类型中声明，目前渲染没有使用它，不能承诺透明度编辑。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/color-picker/docs/lib/components/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/.agents/skills/zui-standards/references/consumption.md>)
