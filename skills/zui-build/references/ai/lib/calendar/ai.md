# 日历

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"calendar","summary":"展示按日期组织的日历事件及日历集，支持月视图导航和事件交互。","keywords":["日历","calendar","Calendar"]}
```

## overview

展示按日期组织的日历事件及日历集，支持月视图导航和事件交互。

当前实际主体始终渲染月视图；`CalendarViewMode` 虽含 month/week/day，不能据此声称已实现三种独立视图。事件 `start` 必填，`end` 可选；修改集按 id 合并而非直接覆盖整个数据集。缺省日期使用当前时间，默认类别 id 为 `DEFAULT`，categories/events 默认空，readonly 默认 false。`maxEventCount` 默认 5，月份/日期格式分别为 `yyyy-MM` / `yyyy-MM-dd`。DateLike 数字小于 10000000000 时按秒乘 1000，否则按毫秒，日期解析和显示使用本地 Date 语义。

`switchDate(date)` 更新日期；`modifyEvents`/`modifyCategories` 累加同 id 修改；`resetState(props?)` 清除修改并重置。`getDayEvents` 按开始日期匹配，不是任意跨天重叠查询。`onSwitchDate(date, mode)` 由响应式 effect 执行，初次初始化也可能触发；卸载释放 effect。`onClickEvent` 接收事件、类别、MouseEvent，`onClickDay` 接收 Date、MouseEvent。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/calendar`](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/calendar/react`](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/calendar` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-calendar

```json
{"name":"Calendar","summary":"创建和管理 Calendar 原生实例。"}
```

入口：`import {Calendar} from '@zui/calendar';`。

构造 `new Calendar(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {Calendar} from '@zui/calendar';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new Calendar(host, {date: new Date(), events: [{id: 'e1', title: '评审', start: new Date()}]});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[Calendar](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/vanilla/calendar.ts>)。

## preact

### preact-calendar

```json
{"name":"Calendar","summary":"渲染 Calendar Preact 视图。"}
```

入口：`import {Calendar} from '@zui/calendar/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

继承 [HElement](../core/ai.md#preact-helement)；通用 HTML 属性与自定义渲染能力见 [HElementProps](../core/ai.md#types-helement-props)。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps = {
        commands: {},
        maxEventCount: 5,
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `defaultCategoryID` | `(): string` |
| `date` | `(): number` |
| `mode` | `(): CalendarViewMode` |
| `readonly` | `(): boolean` |
| `categories$` | `(): ReadonlySignal<CalendarCategory[]>` |
| `categories` | `(): CalendarCategory[]` |
| `events$` | `(): ReadonlySignal<CalendarEvent[]>` |
| `events` | `(): CalendarEvent[]` |
| `resetState` | `(props?: RenderableProps<P>): void` |
| `switchDate` | `(date: DateLike): void` |
| `modifyEvents` | `(events: CalendarEvent[]): void` |
| `modifyCategories` | `(categories: CalendarCategory[]): void` |
| `clickEvent` | `(eventID: string, mouseEvent: MouseEvent): void` |
| `clickDay` | `(dateStr: string, mouseEvent: MouseEvent): void` |
| `getEvent` | `(eventID: string): CalendarEvent \| undefined` |
| `getDayEvents` | `(date: DateLike): CalendarEvent[]` |
| `getCategory` | `(categoryID: string): CalendarCategory \| undefined` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/calendar';
import {Calendar} from '@zui/calendar/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<Calendar date={new Date()} events={[{id: 'e1', title: '评审', start: new Date()}]} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[Calendar](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/component/calendar.tsx>)。

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
| `.calendar-header` | Flex 布局；交叉轴居中；`gap-4`（内部样式） |
| `.calendar-header-title` | 加粗 |
| `.calendar-header-nav` | `flex-auto`（内部样式） |
| `.calendar-event-list-item-time` | `text-gray-500`（内部样式）；`opacity-75`（内部样式） |
| `.calendar-event-list-item > .listitem` | `text-fore`（内部样式） |
| `.calendar-event-list-item > .listitem .item-title` | 不换行；`min-w-0`（内部样式）；隐藏溢出 |
| `.calendar-event-list-item > .listitem > .item-icon` | `min-w-4`（内部样式）；`-mx-0.5`（内部样式）；Flex 布局；交叉轴居中；主轴居中；`scale-75`（内部样式）；color: var(--calendar-event-color) |
| `.calendar-event-list-item > .listitem > .item-icon.icon-calendar-event-dot` | `scale-100`（内部样式） |
| `.icon-calendar-event-dot::before` | `content-['']`（内部样式）；块级显示；`w-2`（内部样式）；`h-2`（内部样式）；`rounded-full`（内部样式）；`min-w-2`（内部样式）；background: var(--calendar-event-color) |
| `.calendar-event-list-item-more` | 小字号；`text-gray-500`（内部样式）；`opacity-50`（内部样式）；`hover:-opacity-100`（内部样式） |
| `.calendar-month-view-row` | Flex 布局；`flex-row`（内部样式）；`flex-nowrap`（内部样式）；`items-stretch`（内部样式） |
| `.calendar-month-view-row + .calendar-month-view-row` | `border-t`（内部样式） |
| `.calendar-month-view-col` | `flex-1`（内部样式） |
| `.calendar-month-view-header-col` | `px-1`（内部样式）；`py-0.5`（内部样式） |
| `.calendar-month-view-week-name` | 加粗；`text-gray-500`（内部样式）；`text-center`（内部样式） |
| `.calendar-month-view-day` | `min-h-20`（内部样式）；`min-w-0`（内部样式） |
| `.calendar-month-view-day + .calendar-month-view-day` | `border-l`（内部样式） |
| `.calendar-month-view-day-head` | `px-1`（内部样式）；`py-0.5`（内部样式）；Flex 布局；交叉轴居中；`justify-end`（内部样式）；`gap-2`（内部样式） |
| `.calendar-month-view-month-name` | `px-1`（内部样式）；`rounded-full`（内部样式）；`bg-gray-400`（内部样式）；`text-canvas`（内部样式） |
| `.calendar-month-view-day-number` | `text-gray-500`（内部样式） |
| `.calendar-month-view .calendar-event-list-item > .listitem` | `py-px`（内部样式）；小字号；`gap-1`（内部样式） |
| `.calendar-month-view .calendar-event-list-item-more > .listitem` | `py-0`（内部样式）；`pl-5`（内部样式） |
| `.calendar-body` | 1px 边框；主题圆角 |
| `.calendar-header + .calendar-body` | `mt-2`（内部样式） |

来源：[src/styles/calendar-header.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/styles/calendar-header.css>), [src/styles/calendar-event-list.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/styles/calendar-event-list.css>), [src/styles/calendar-month-view.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/styles/calendar-month-view.css>)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.calendar-event-list-item.has-bg > .listitem` | `bg-[--calendar-event-background]`（内部样式） |
| `.is-today .calendar-month-view-day-number` | `px-1`（内部样式）；`rounded-full`（内部样式）；`bg-danger-500`（内部样式）；`text-canvas`（内部样式）；`min-w-5`（内部样式）；`text-center`（内部样式） |
| `.calendar-month-view-day.is-out-month` | `bg-gray-500/5`（内部样式） |
| `.calendar-month-view-day.is-out-month > *` | `opacity-50`（内部样式） |
| `.calendar-month-view-day.is-today` | `bg-warning-500/5`（内部样式） |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
## css-variables

本库没有新增可配置的 CSS 变量声明。依赖组件的变量按其 [AI 索引](../../ai.md) 查找；外部主题变量的使用不等于由本库定义。

## javascript

### javascript-calendar-helpers

```json
{"name": "mergeCategories / mergeEvents / getMonthViewInfo", "summary": "归并日历集和事件，并计算月份视图边界。"}
```

只从 `@zui/calendar/react` 公开，主入口不导出。环境为 DOM 可用的 `workspace`，不保证聚合入口可用于无 DOM 的 Node。

| 函数 | 参数与返回 | 行为 |
| --- | --- | --- |
| `mergeCategories(categories,defaultCategoryID?)` | `CalendarCategory[]`，可选字符串；返回 `CalendarCategory[]` | 按 id 深合并到新对象，默认 order 为加入顺序；指定默认 id 时补缺失类别，按 order 排序。 |
| `mergeEvents(events,defaultCategoryID?)` | `CalendarEvent[]`，可选字符串；返回 `CalendarEvent[]` | 过滤缺 start/无效 start，转换毫秒时间，按 id 合并到新对象；默认类别补齐；全天优先、再按开始时间和 order 排序。 |
| `getMonthViewInfo(year,month,weekStart=0)` | 整数年份、1–12 月、0–6 周起点；返回 `{days,startTime,firstDay,startDate,rows}` | days 为本月天数，firstDay/startTime 为毫秒时间戳，startDate 为首可见日期；至少 5 行。未校验越界，遵循原生 Date 进位。 |

没有原地修改传入数组；merge 使用新对象再累计，默认 id 名称查语言配置。所有日期按本地时区。

```ts
import {mergeEvents, getMonthViewInfo} from '@zui/calendar/react';
const events = mergeEvents([{id: 'a', title: '评审', start: new Date(2026, 9, 22)}], 'DEFAULT');
const month = getMonthViewInfo(2026, 10, 1);
console.log(events, month.rows);
```

来源：[日历工具](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/helpers/calendar-helper.ts>)。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-calendar-event

```json
{"name":"CalendarEvent","summary":"定义 CalendarEvent 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type CalendarEvent = {
    /** 日历事件的唯一标识 */
    id: string;

    /** 日历事件的标题 */
    title: string;

    /** 日历事件的所属日历集 */
    category?: string;

    /** 日历事件是否为全天事件 */
    allDay?: boolean;

    /** 日历事件的描述 */
    desc?: string;

    /** 日历事件的开始时间 */
    start: DateLike;

    /** 日历事件的结束时间 */
    end?: DateLike;

    /** 日历集的颜色 */
    color?: string;

    /** 日历集的背景颜色 */
    background?: string;

    /** 日历事件的图标 */
    icon?: IconType;

    /** 是否只读 */
    readonly?: boolean;

    /** 是否隐藏 */
    hidden?: boolean;

    /** 日历事件的排序 */
    order?: number;

    /** 日历事件的自定义数据 */
    data?: Record<string, unknown>;
};
```

来源：[CalendarEvent](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/types/calendar-event.ts>)。

### types-calendar-view-mode

```json
{"name":"CalendarViewMode","summary":"定义 CalendarViewMode 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type CalendarViewMode = 'month' | 'week' | 'day';
```

来源：[CalendarViewMode](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/types/calendar-view-mode.ts>)。

### types-calendar-category

```json
{"name":"CalendarCategory","summary":"定义 CalendarCategory 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type CalendarCategory = {
    /** 日历集的唯一标识 */
    id: string;

    /** 日历集的名称 */
    name?: string;

    /** 日历集的描述 */
    desc?: string;

    /** 日历集的颜色 */
    color?: string;

    /** 日历集的背景颜色 */
    background?: string;

    /** 日历集的图标 */
    icon?: IconType;

    /** 日历集的事件 */
    events?: CalendarEvent[];

    /** 是否只读 */
    readonly?: boolean;

    /** 日历集的排序 */
    order?: number;

    /** 是否隐藏 */
    hidden?: boolean;

    /** 日历集的自定义数据 */
    data?: Record<string, unknown>;
};
```

来源：[CalendarCategory](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/types/calendar-category.ts>)。

### types-calendar-props

```json
{"name":"CalendarProps","summary":"定义 CalendarProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type CalendarProps = HElementProps & {
    /** 头部标题 */
    headerTitle?: CustomContentType;

    /** 头部操作栏 */
    headerActions?: ToolbarSetting;

    /** 头部属性 */
    headerProps?: Partial<CalendarHeaderProps>;

    /** 当前日期 */
    date?: DateLike;

    /** 日历视图，默认 'month' */
    view?: CalendarViewMode;

    /** 日历集，默认 [] */
    categories?: CalendarCategory[];

    /** 日历事件，默认 [] */
    events?: CalendarEvent[];

    /** 默认日历集，默认 'DEFAULT' */
    defaultCategory?: string;

    /** 是否只读 */
    readonly?: boolean;

    /** 一周从星期几开始，默认 1 */
    weekStart?: number;

    /** 日期格式，默认 'yyyy-MM-dd' */
    dateFormat?: string | ((date: Date) => string);

    /** 月份格式，默认 'yyyy-MM' */
    monthFormat?: string | ((date: Date) => string);

    /** 操作栏配置 */
    actions?: ToolbarSetting;

    /** 渲染日历事件 */
    eventRender?: (event: CalendarEvent, category: CalendarCategory, item: ListitemProps) => Partial<ListitemProps> | void | false;

    /** 视图上最大日历事件数量 */
    maxEventCount?: number;

    /** 点击日历事件 */
    onClickEvent?: (event: CalendarEvent, category: CalendarCategory, mouseEvent: MouseEvent) => void;

    /** 点击日历日期 */
    onClickDay?: (date: Date, mouseEvent: MouseEvent) => void;

    /** 切换日期回调函数 */
    onSwitchDate?: (date: Date, mode: CalendarViewMode) => void;
};
```

来源：[CalendarProps](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/types/calendar-props.ts>)。

### types-calendar-state

```json
{"name":"CalendarState","summary":"定义 CalendarState 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type CalendarState = {
    /** 当前日期 */
    date: number;

    /** 日历视图 */
    mode: CalendarViewMode;

    /** 是否只读 */
    readonly: boolean;

    /** 修改的日历集 */
    modifidCategories: CalendarCategory[];

    /** 修改的日历事件 */
    modifiedEvents: CalendarEvent[];
};
```

来源：[CalendarState](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/types/calendar-state.ts>)。

### types-calendar-month-view-props

```json
{"name":"CalendarMonthViewProps","summary":"定义 CalendarMonthViewProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type CalendarMonthViewProps = {
    /** 当前日期 */
    date?: number;

    /** 一周从星期几开始，默认 1 */
    weekStart?: number;

    /** 视图上最大日历事件数量 */
    maxEventCount?: number;

    /** 日历集 */
    categories?: CalendarCategory[];

    /** 日历事件 */
    events?: CalendarEvent[];

    /** 日期格式，默认 'yyyy-MM-dd' */
    dateFormat?: string | ((date: Date) => string);

    /** 渲染日历事件 */
    eventRender?: (event: CalendarEvent, category: CalendarCategory, item: ListitemProps) => Partial<ListitemProps> | void | false;
};
```

来源：[CalendarMonthViewProps](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/types/calendar-month-view-props.ts>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

当前实际主体始终渲染月视图；`CalendarViewMode` 虽含 month/week/day，不能据此声称已实现三种独立视图。事件 `start` 必填，`end` 可选；修改集按 id 合并而非直接覆盖整个数据集。缺省日期使用当前时间，默认类别 id 为 `DEFAULT`，categories/events 默认空，readonly 默认 false。`maxEventCount` 默认 5，月份/日期格式分别为 `yyyy-MM` / `yyyy-MM-dd`。DateLike 数字小于 10000000000 时按秒乘 1000，否则按毫秒，日期解析和显示使用本地 Date 语义。

`switchDate(date)` 更新日期；`modifyEvents`/`modifyCategories` 累加同 id 修改；`resetState(props?)` 清除修改并重置。`getDayEvents` 按开始日期匹配，不是任意跨天重叠查询。`onSwitchDate(date, mode)` 由响应式 effect 执行，初次初始化也可能触发；卸载释放 effect。`onClickEvent` 接收事件、类别、MouseEvent，`onClickDay` 接收 Date、MouseEvent。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/calendar/docs/lib/components/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/.agents/skills/zui-standards/references/consumption.md>)
