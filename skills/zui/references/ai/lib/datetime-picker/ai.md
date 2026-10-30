# 日期时间选择器

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"datetime-picker","summary":"提供日期、时间和日期时间输入选择器，以及可组合的日期与时间菜单。","keywords":["日期时间选择器","datetime-picker","TimePicker","DatePicker","DatetimePicker"]}
```

## overview

提供日期、时间和日期时间输入选择器，以及可组合的日期与时间菜单。

三个选择器继承 [Pick](../pick/ai.md#preact-pick)。`DatePicker` 默认格式 `yyyy-MM-dd`，`TimePicker` 为 `hh:mm`，`DatetimePicker` 为 `yyyy-MM-dd hh:mm`；分钟步长默认 5，图标默认显示。传入 value 表示外部值，defaultValue 用于初始化；日期字符串可使用 today 及相对偏移，TimePicker 的初值 now 会格式化为当前时间。

`DatePicker.setDate(value,force?,silent?)` 先检查 disabled/readonly（force 可绕过），再等待 beforeChange；false 取消，字符串替换输入。日期通过 minDate/maxDate 钳制，isAllowDate 限制可选日期；无效值可由 onInvalid 替换，allowInvalid=true 可保留原串，否则退回空串或 required 时 defaultValue。`setValue` 强制走该流程；silent 只抑制关联输入的 change，不应当作所有回调都不触发。TimePicker.setTime 支持字符串或 {hour,minute}，getTime 返回元组或 null；DatetimePicker.getTime 返回含秒元组。

本库内部 MiniCalendar/ValueSelector 没有从 /react 导出；MiniCalendarProps 被导出不等于 MiniCalendar 组件可导入。所有 Date 计算是本地时区；DateLike 数字小于 10000000000 时按秒处理，否则按毫秒；需要避免歧义时传 Date 对象。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/datetime-picker`](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/datetime-picker/react`](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/datetime-picker` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-time-picker

```json
{"name":"TimePicker","summary":"创建和管理 TimePicker 原生实例。"}
```

入口：`import {TimePicker} from '@zui/datetime-picker';`。

构造 `new TimePicker(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {TimePicker} from '@zui/datetime-picker';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new TimePicker(host, {name: 'time', defaultValue: '09:30'});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[TimePicker](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/vanilla/time-picker.ts>)。

### vanilla-date-picker

```json
{"name":"DatePicker","summary":"创建和管理 DatePicker 原生实例。"}
```

入口：`import {DatePicker} from '@zui/datetime-picker';`。

构造 `new DatePicker(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {DatePicker} from '@zui/datetime-picker';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new DatePicker(host, {name: 'date', defaultValue: '2026-10-22'});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[DatePicker](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/vanilla/date-picker.ts>)。

### vanilla-datetime-picker

```json
{"name":"DatetimePicker","summary":"创建和管理 DatetimePicker 原生实例。"}
```

入口：`import {DatetimePicker} from '@zui/datetime-picker';`。

构造 `new DatetimePicker(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {DatetimePicker} from '@zui/datetime-picker';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new DatetimePicker(host, {name: 'dateTime', defaultValue: '2026-10-22 09:30'});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[DatetimePicker](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/vanilla/datetime-picker.ts>)。

## preact

### preact-time-picker

```json
{"name":"TimePicker","summary":"渲染 TimePicker Preact 视图。"}
```

入口：`import {TimePicker} from '@zui/datetime-picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

继承 [Pick](../pick/ai.md#preact-pick) 的 Props 和视图成员，并应用下面的覆盖。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps = {
        ...Pick.defaultProps,
        popWidth: 'auto',
        popMaxHeight: 320,
        minuteStep: 5,
        format: 'hh:mm',
        icon: true,
    } as Partial<PickOptions>;
```

| 成员 | 签名与返回值 |
| --- | --- |
| `getDefaultState` | `(props?: RenderableProps<TimePickerOptions> \| undefined): PickState` |
| `setTime` | `(value: string \| { hour?: number \| undefined; minute?: number \| undefined; }, force?: boolean \| undefined, silent?: boolean \| undefined): Promise<PickState \| undefined> \| undefined` |
| `setValue` | `(value: string, silent?: boolean \| undefined): Promise<PickState>` |
| `getTime` | `(): [hour: number, minute: number] \| null` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/datetime-picker';
import {TimePicker} from '@zui/datetime-picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<TimePicker name="time" defaultValue="09:30" />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[TimePicker](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/component/time-picker.tsx>)。

### preact-time-picker-menu

```json
{"name":"TimePickerMenu","summary":"渲染 TimePickerMenu Preact 视图。"}
```

入口：`import {TimePickerMenu} from '@zui/datetime-picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/datetime-picker';
import {TimePickerMenu} from '@zui/datetime-picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<TimePickerMenu time={[9, 30]} onChange={(type, value) => console.log(type, value)} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[TimePickerMenu](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/component/time-picker-menu.tsx>)。

### preact-date-picker

```json
{"name":"DatePicker","summary":"渲染 DatePicker Preact 视图。"}
```

入口：`import {DatePicker} from '@zui/datetime-picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

继承 [Pick](../pick/ai.md#preact-pick) 的 Props 和视图成员，并应用下面的覆盖。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps = {
        ...Pick.defaultProps,
        popWidth: 'auto',
        popMaxHeight: 320,
        format: 'yyyy-MM-dd',
        icon: true,
        limitPopInScreen: false,
    } as Partial<PickOptions>;
```

| 成员 | 签名与返回值 |
| --- | --- |
| `getDefaultState` | `(props?: RenderableProps<T> \| undefined): PickState` |
| `getDate` | `(): Date \| null \| undefined` |
| `setDate` | `(value: string, force?: boolean \| undefined, silent?: boolean \| undefined): Promise<PickState \| undefined>` |
| `setValue` | `(value: string, silent?: boolean \| undefined): Promise<PickState>` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/datetime-picker';
import {DatePicker} from '@zui/datetime-picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<DatePicker name="date" defaultValue="2026-10-22" />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[DatePicker](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/component/date-picker.tsx>)。

### preact-date-picker-menu

```json
{"name":"DatePickerMenu","summary":"渲染 DatePickerMenu Preact 视图。"}
```

入口：`import {DatePickerMenu} from '@zui/datetime-picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/datetime-picker';
import {DatePickerMenu} from '@zui/datetime-picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<DatePickerMenu date={new Date()} onChange={date => console.log(date)} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[DatePickerMenu](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/component/date-picker-menu.tsx>)。

### preact-datetime-picker

```json
{"name":"DatetimePicker","summary":"渲染 DatetimePicker Preact 视图。"}
```

入口：`import {DatetimePicker} from '@zui/datetime-picker/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

继承 [DatePicker](#preact-date-picker) 的 Props 和视图成员，并应用下面的覆盖。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps = {
        ...DatePicker.defaultProps,
        popMaxHeight: 310,
        format: 'yyyy-MM-dd hh:mm',
        minuteStep: 5,
    } as Partial<PickOptions>;
```

| 成员 | 签名与返回值 |
| --- | --- |
| `getTime` | `(): [hour: number, minute: number, second: number] \| null` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/datetime-picker';
import {DatetimePicker} from '@zui/datetime-picker/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<DatetimePicker name="datetime" defaultValue="2026-10-22 09:30" />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[DatetimePicker](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/component/datetime-picker.tsx>)。

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
| `.date-picker-menu .mini-calendar` | `-mt-3`（内部样式） |
| `.date-pick-menu-month, .date-pick-menu-years` | `max-h-[237px]`（内部样式）；`px-2`（内部样式）；Flex 布局；`flex-row`（内部样式）；`gap-px`（内部样式）；允许换行；`pb-2`（内部样式） |
| `.date-pick-menu-years > .btn` | `w-10`（内部样式） |
| `.date-pick-menu-month > .btn` | `w-12`（内部样式） |
| `.date-picker-menu-footer` | Flex 布局；`flex-row`（内部样式）；`border-t`（内部样式）；`p-1`（内部样式） |
| `.date-picker-menu-footer > .toolbar` | `flex-auto`（内部样式）；主轴居中 |
| `.date-picker-menu > .menu` | `border-r`（内部样式） |
| `.date-picker-menu .menu-item` | `text-primary-500`（内部样式） |
| `.time-picker-menu` | `max-h-[inherit]`（内部样式） |
| `.time-picker-menu .menu-item > a` | 主轴居中；`px-0`（内部样式）；`text-center`（内部样式） |
| `.datetime-picker-menu` | `max-h-[inherit]`（内部样式） |
| `.mini-calendar` | `p-2`（内部样式） |
| `.mini-calendar > .row > .col` | `w-[14.2857%]`（内部样式）；交叉轴居中；主轴居中 |
| `.mini-calendar-day` | `h-8`（内部样式） |
| `.mini-calendar-day > .btn` | `w-8`（内部样式） |

来源：[src/style/date-picker.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/style/date-picker.css>), [src/style/time-picker.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/style/time-picker.css>), [src/style/datetime-picker.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/style/datetime-picker.css>), [src/style/mini-calendar.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/style/mini-calendar.css>)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.date-pick-menu-years > .btn.is-current` | `bg-primary-100`（内部样式）；`text-primary-500`（内部样式） |
| `.date-pick-menu-month > .btn.active, .date-pick-menu-years > .btn.active` | `bg-primary-500`（内部样式）；`text-canvas`（内部样式） |
| `.mini-calendar-day.disabled` | 忽略指针命中；`opacity-50`（内部样式）；`bg-gray-200`（内部样式） |
| `.mini-calendar-day.is-weekend > .btn` | `text-gray-500`（内部样式） |
| `.mini-calendar-day.active > .btn, .mini-calendar-day.is-today > .btn` | `bg-primary-100`（内部样式）；`text-primary-500`（内部样式） |
| `.mini-calendar-day.selected > .btn` | `bg-primary-500`（内部样式）；`text-canvas`（内部样式） |
| `.mini-calendar-day.is-out-month` | `opacity-50`（内部样式） |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
## css-variables

### css-variables-config

```json
{"name":"CSS 变量","summary":"配置本库主题、尺寸和状态外观。"}
```

下表按实际声明节点列出默认表达式。主题颜色、圆角等上游变量见 [base](../base/ai.md) 与 [utilities](../utilities/ai.md#css-variables)；在表中所列实际节点覆盖，避免祖先值被组件同名声明盖过。长度按 CSS 单位、颜色按 CSS 颜色/渐变，opacity 为 0–1，duration/delay 为时间。

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--menu-bg` | `none` | 背景色或渐变 | `.date-picker-menu` | `.date-picker-menu` 的实际匹配元素 |

## javascript

### javascript-date-helpers

```json
{"name": "getDate / campDate", "summary": "解析日期设置并按上下界钳制日期。"}
```

只从 `@zui/datetime-picker/react` 公开。`getDate(date?: DateSetting | null): Date | null` 接受 DateLike 或无参返回 DateLike 的函数；undefined/null 返回 null，today 开头字符串计算当前日期及偏移，其他输入走 createDate；无效日期返回 null。函数输入同步执行，其异常不被捕获。

`campDate(date: Date,minDate?: Date | null,maxDate?: Date | null): Date` 保留源码拼写 campDate；小于 minDate 返回同一个 minDate，大于 maxDate 返回同一个 maxDate，否则返回原 date，不克隆、不修改 Date。无效或反向边界未额外校验。

环境：`workspace`，DOM 可用并配置工作区解析；本地时区、DateLike 数字小于 10000000000 时按秒，否则按毫秒。

```ts
import {getDate, campDate} from '@zui/datetime-picker/react';
const date = getDate('2026-10-22');
if (date) console.log(campDate(date, new Date(2026, 0, 1), new Date(2026, 11, 31)));
```

来源：[实现](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/helpers/date-helper.ts>)。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-date-getter

```json
{"name":"DateGetter","summary":"定义 DateGetter 的字段、参数或取值范围。"}
```

通过 `@zui/datetime-picker/react` 使用 `import type` 导入。

```ts
export type DateGetter = () => DateLike;
```

来源：[DateGetter](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/types/date-setting.ts>)。

### types-date-setting

```json
{"name":"DateSetting","summary":"定义 DateSetting 的字段、参数或取值范围。"}
```

通过 `@zui/datetime-picker/react` 使用 `import type` 导入。

```ts
export type DateSetting = DateLike | DateGetter;
```

来源：[DateSetting](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/types/date-setting.ts>)。

### types-time-picker-options

```json
{"name":"TimePickerOptions","summary":"定义 TimePickerOptions 的字段、参数或取值范围。"}
```

通过 `@zui/datetime-picker/react` 使用 `import type` 导入。

```ts
export interface TimePickerOptions extends PickOptions {
    minuteStep?: number;
    placeholder?: string;
    format?: string;
    icon?: IconType | boolean;
    required?: boolean;
    onInvalid?: (value: string) => void | string;
}
```

来源：[TimePickerOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/types/time-picker-options.ts>)。

### types-time-picker-menu-props

```json
{"name":"TimePickerMenuProps","summary":"定义 TimePickerMenuProps 的字段、参数或取值范围。"}
```

通过 `@zui/datetime-picker/react` 使用 `import type` 导入。

```ts
export type TimePickerMenuProps = {
    onChange?: (type: 'hour' | 'minute', value: number) => void;
    minuteStep?: number;
    time?: [hour: number, minute: number];
    hour?: number;
    minute?: number;
};
```

来源：[TimePickerMenuProps](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/types/time-picker-menu-props.ts>)。

### types-date-picker-options

```json
{"name":"DatePickerOptions","summary":"定义 DatePickerOptions 的字段、参数或取值范围。"}
```

通过 `@zui/datetime-picker/react` 使用 `import type` 导入。

```ts
export interface DatePickerOptions extends PickOptions {
    required?: boolean;
    readonly?: boolean;
    placeholder?: string;
    format?: string | ((date: Date) => string);
    display?: (value: string, date: Date | undefined | null) => string;
    icon?: IconType | boolean;
    weekNames?: string[];
    monthNames?: string[];
    yearText?: string;
    todayText?: string;
    clearText?: string;
    weekStart?: number;
    minDate?: DateLike | ((value?: string) => DateLike);
    maxDate?: DateLike | ((value?: string) => DateLike);
    isAllowDate?: (date: Date) => boolean | {allow: boolean; hint?: string};
    menu?: NavSetting;
    actions?: ToolbarSetting;
    allowInvalid?: boolean;
    onInvalid?: (value: string) => void | string;
}
```

来源：[DatePickerOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/types/date-picker-options.ts>)。

### types-date-picker-menu-props

```json
{"name":"DatePickerMenuProps","summary":"定义 DatePickerMenuProps 的字段、参数或取值范围。"}
```

通过 `@zui/datetime-picker/react` 使用 `import type` 导入。

```ts
export type DatePickerMenuProps = {
    onChange?: (date: string) => void;
    date?: Date | null;
    weekNames?: string[];
    monthNames?: string[];
    yearText?: string;
    todayText?: string;
    clearText?: string;
    weekStart?: number;
    menu?: MenuSetting;
    actions?: ToolbarSetting;
    minDate?: Date | null;
    maxDate?: Date | null;
    isAllowDate?: (date: Date) => boolean | {allow: boolean; hint?: string};
};
```

来源：[DatePickerMenuProps](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/types/date-picker-menu-props.ts>)。

### types-date-picker-menu-state

```json
{"name":"DatePickerMenuState","summary":"定义 DatePickerMenuState 的字段、参数或取值范围。"}
```

通过 `@zui/datetime-picker/react` 使用 `import type` 导入。

```ts
export type DatePickerMenuState = {
    select: 'year' | 'month' | 'day';
    year: number;
    month: number;
};
```

来源：[DatePickerMenuState](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/types/date-picker-menu-state.ts>)。

### types-datetime-picker-options

```json
{"name":"DatetimePickerOptions","summary":"定义 DatetimePickerOptions 的字段、参数或取值范围。"}
```

通过 `@zui/datetime-picker/react` 使用 `import type` 导入。

```ts
export type DatetimePickerOptions = DatePickerOptions & TimePickerOptions;
```

来源：[DatetimePickerOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/types/datetime-picker-options.ts>)。

### types-mini-calendar-props

```json
{"name":"MiniCalendarProps","summary":"定义 MiniCalendarProps 的字段、参数或取值范围。"}
```

通过 `@zui/datetime-picker/react` 使用 `import type` 导入。

```ts
export type MiniCalendarProps = {
    weekStart?: number;
    weekNames?: string[];
    monthNames?: string[];
    minDate?: DateLike;
    maxDate?: DateLike;
    isAllowDate?: (date: Date) => boolean | {allow: boolean; hint?: string};
    year?: number;
    month?: number;
    selections?: DateLike | DateLike[];
    highlights?: DateLike | DateLike[];
    onClickDate?: (date: string) => void;
};
```

来源：[MiniCalendarProps](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/types/mini-calendar-props.ts>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

三个选择器继承 [Pick](../pick/ai.md#preact-pick)。`DatePicker` 默认格式 `yyyy-MM-dd`，`TimePicker` 为 `hh:mm`，`DatetimePicker` 为 `yyyy-MM-dd hh:mm`；分钟步长默认 5，图标默认显示。传入 value 表示外部值，defaultValue 用于初始化；日期字符串可使用 today 及相对偏移，TimePicker 的初值 now 会格式化为当前时间。

`DatePicker.setDate(value,force?,silent?)` 先检查 disabled/readonly（force 可绕过），再等待 beforeChange；false 取消，字符串替换输入。日期通过 minDate/maxDate 钳制，isAllowDate 限制可选日期；无效值可由 onInvalid 替换，allowInvalid=true 可保留原串，否则退回空串或 required 时 defaultValue。`setValue` 强制走该流程；silent 只抑制关联输入的 change，不应当作所有回调都不触发。TimePicker.setTime 支持字符串或 {hour,minute}，getTime 返回元组或 null；DatetimePicker.getTime 返回含秒元组。

本库内部 MiniCalendar/ValueSelector 没有从 /react 导出；MiniCalendarProps 被导出不等于 MiniCalendar 组件可导入。所有 Date 计算是本地时区；DateLike 数字小于 10000000000 时按秒处理，否则按毫秒；需要避免歧义时传 Date 对象。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/datetime-picker/docs/lib/forms/date.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/.agents/skills/zui-standards/references/consumption.md>)
