# 日历

日历（Calendar）以月视图的形式展示一段时间范围内的日历事件，支持多日历集（Category）分组、事件着色、头部导航与自定义操作栏，常用于待办、日程、排班等场景。

## 使用方法

通过 `new zui.Calendar(element, options)` 在指定容器内渲染一个日历，最少只需要传入 `events` 数据。

<Example>
  <div id="calendarBasic"></div>
</Example>

```html
<div id="calendarBasic"></div>

<script>
new zui.Calendar('#calendarBasic', {
    headerTitle: '我的日程',
    events: [
        {id: '1', title: '项目周会',  start: Date.now()},
        {id: '2', title: '提交版本',  start: Date.now() + 86400000, allDay: true},
        {id: '3', title: '客户拜访',  start: Date.now() + 2 * 86400000, color: 'var(--color-warning-500)'},
    ],
});
</script>
```

## 引入

### 通过 npm

```js
import {Calendar} from '@zui/calendar';

const calendar = new Calendar(element, options);
```

### 通过全局对象

```js
const calendar = new zui.Calendar(element, options);
```

## 头部与操作栏

通过 `headerTitle` 设置标题，通过 `headerActions` 配置头部右侧的操作按钮（基于 [工具栏](/lib/components/toolbar/) ）。

<Example>
  <div id="calendarHeader"></div>
</Example>

```html
<div id="calendarHeader"></div>

<script>
new zui.Calendar('#calendarHeader', {
    headerTitle: '团队日历',
    headerActions: [
        {text: '导出'},
        {text: '新建日程', btnType: 'primary'},
    ],
    events: [
        {id: '1', title: '需求评审', start: Date.now()},
    ],
});
</script>
```

## 日历集分组

通过 `categories` 定义多个日历集，每个事件通过 `category` 字段关联到对应日历集；未指定 `category` 的事件会归入 `defaultCategory`（默认 `DEFAULT`）。日历集的 `color` 会作为关联事件的默认颜色。

<Example>
  <div id="calendarCategories"></div>
</Example>

```html
<div id="calendarCategories"></div>

<script>
new zui.Calendar('#calendarCategories', {
    headerTitle: '多日历集',
    categories: [
        {id: 'work',     name: '工作', color: 'var(--color-primary-500)'},
        {id: 'personal', name: '个人', color: 'var(--color-success-500)'},
        {id: 'travel',   name: '出行', color: 'var(--color-warning-500)'},
    ],
    events: [
        {id: '1', title: '版本发布',   category: 'work',     start: Date.now()},
        {id: '2', title: '健身',       category: 'personal', start: Date.now() + 86400000},
        {id: '3', title: '出差北京',   category: 'travel',   start: Date.now() + 2 * 86400000, allDay: true},
    ],
});
</script>
```

## 自定义事件样式

通过事件自身的 `color` 与 `background` 可覆盖日历集的默认颜色，通过 `icon` 可在事件前添加图标。

```js
new zui.Calendar('#calendar', {
    events: [
        {id: '1', title: '提醒',  start: Date.now(), icon: 'icon-bell', color: 'var(--color-danger-500)'},
        {id: '2', title: '完成',  start: Date.now(), background: 'var(--color-success-500)', color: '#fff'},
    ],
});
```

## 自定义事件渲染

通过 `eventRender` 可以拦截每个事件项的渲染，返回新的 [列表项](/lib/components/list/) 属性进行覆盖；返回 `false` 可隐藏该事件。

```js
new zui.Calendar('#calendar', {
    events: [...],
    eventRender: (event, category, item) => {
        if (event.data?.cancelled) return false;
        return {
            ...item,
            title: `[${category.name}] ${event.title}`,
        };
    },
});
```

## 点击交互

`onClickDay` 与 `onClickEvent` 分别响应日期格与事件项的点击。回调函数内 `this` 指向 Calendar 实例，可以调用其方法获取上下文。

```js
new zui.Calendar('#calendar', {
    events: [...],
    onClickDay(date, mouseEvent) {
        const dayEvents = this.getDayEvents(date);
        console.log('点击了日期', date, '当日事件：', dayEvents);
    },
    onClickEvent(event, category, mouseEvent) {
        console.log('点击了事件', event, '所属日历集：', category);
    },
    onSwitchDate(date, mode) {
        console.log('切换到', date, mode);
    },
});
```

<script setup>
import {onMounted} from 'vue';

const today = Date.now();
const day = 86400000;

onMounted(() => {
    onZUIReady(() => {
        new zui.Calendar('#calendarBasic', {
            headerTitle: '我的日程',
            events: [
                {id: '1', title: '项目周会', start: today},
                {id: '2', title: '提交版本', start: today + day, allDay: true},
                {id: '3', title: '客户拜访', start: today + 2 * day, color: 'var(--color-warning-500)'},
            ],
        });
        new zui.Calendar('#calendarHeader', {
            headerTitle: '团队日历',
            headerActions: [
                {text: '导出'},
                {text: '新建日程', btnType: 'primary'},
            ],
            events: [
                {id: '1', title: '需求评审', start: today},
            ],
        });
        new zui.Calendar('#calendarCategories', {
            headerTitle: '多日历集',
            categories: [
                {id: 'work',     name: '工作', color: 'var(--color-primary-500)'},
                {id: 'personal', name: '个人', color: 'var(--color-success-500)'},
                {id: 'travel',   name: '出行', color: 'var(--color-warning-500)'},
            ],
            events: [
                {id: '1', title: '版本发布', category: 'work',     start: today},
                {id: '2', title: '健身',     category: 'personal', start: today + day},
                {id: '3', title: '出差北京', category: 'travel',   start: today + 2 * day, allDay: true},
            ],
        });
    });
});
</script>

## 选项

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `date` | `DateLike` | 当前时间 | 初始展示的日期 |
| `view` | `'month' \| 'week' \| 'day'` | `'month'` | 视图模式（当前实现以月视图为主） |
| `events` | `CalendarEvent[]` | `[]` | 日历事件数据 |
| `categories` | `CalendarCategory[]` | `[]` | 日历集数据 |
| `defaultCategory` | `string` | `'DEFAULT'` | 未指定 `category` 的事件归属的日历集 ID |
| `readonly` | `boolean` | `false` | 是否只读 |
| `weekStart` | `number` | `1` | 一周从星期几开始（0 表示周日，1 表示周一） |
| `dateFormat` | `string \| (date) => string` | `'yyyy-MM-dd'` | 日期格式 |
| `monthFormat` | `string \| (date) => string` | `'yyyy-MM'` | 月份格式 |
| `maxEventCount` | `number` | `5` | 单日格内最多展示的事件数，超出折叠为「更多」 |
| `headerTitle` | `CustomContentType` | — | 头部标题，可为字符串、VNode 或渲染函数 |
| `headerActions` | `ToolbarSetting` | — | 头部右侧操作栏，参考 [工具栏](/lib/components/toolbar/) |
| `headerProps` | `Partial<CalendarHeaderProps>` | — | 头部组件附加属性 |
| `actions` | `ToolbarSetting` | — | 全局操作配置 |
| `eventRender` | `function` | — | 自定义事件项渲染，返回 `false` 可隐藏 |
| `onClickEvent` | `(event, category, e) => void` | — | 事件项点击回调 |
| `onClickDay` | `(date, e) => void` | — | 日期格点击回调 |
| `onSwitchDate` | `(date, mode) => void` | — | 切换日期回调 |

## 实例方法

| 方法 | 说明 |
| --- | --- |
| `switchDate(date)` | 切换当前展示的日期 |
| `getDayEvents(date)` | 获取指定日期的全部事件 |
| `getEvent(id)` | 按 ID 查找事件 |
| `getCategory(id)` | 按 ID 查找日历集 |
| `modifyEvents(events)` | 增量更新事件（与已有数据按 `id` 合并） |
| `modifyCategories(categories)` | 增量更新日历集 |

## 数据结构

### `CalendarEvent`

```ts
type CalendarEvent = {
    /** 唯一标识 */
    id: string;
    /** 标题 */
    title: string;
    /** 所属日历集 ID */
    category?: string;
    /** 是否全天事件 */
    allDay?: boolean;
    /** 描述 */
    desc?: string;
    /** 开始时间 */
    start: DateLike;
    /** 结束时间 */
    end?: DateLike;
    /** 文字颜色 */
    color?: string;
    /** 背景颜色 */
    background?: string;
    /** 图标 */
    icon?: IconType;
    /** 是否只读 */
    readonly?: boolean;
    /** 是否隐藏 */
    hidden?: boolean;
    /** 排序 */
    order?: number;
    /** 自定义数据 */
    data?: Record<string, unknown>;
};
```

### `CalendarCategory`

```ts
type CalendarCategory = {
    /** 唯一标识 */
    id: string;
    /** 名称 */
    name?: string;
    /** 描述 */
    desc?: string;
    /** 默认文字颜色 */
    color?: string;
    /** 默认背景颜色 */
    background?: string;
    /** 默认图标 */
    icon?: IconType;
    /** 该日历集下的事件（与 `events` 选项中的事件一并合并） */
    events?: CalendarEvent[];
    /** 是否只读 */
    readonly?: boolean;
    /** 排序 */
    order?: number;
    /** 是否隐藏 */
    hidden?: boolean;
    /** 自定义数据 */
    data?: Record<string, unknown>;
};
```

## CSS 类

| 类 | 作用 |
| --- | --- |
| `calendar` | 日历根元素 |
| `calendar-header` | 头部容器 |
| `calendar-header-title` | 头部标题 |
| `calendar-header-nav` | 头部导航按钮（今天 / 上月 / 下月） |
| `calendar-header-actions` | 头部右侧操作栏 |
| `calendar-body` | 日历主体容器 |
| `calendar-month-view` | 月视图容器 |
| `calendar-month-view-row` | 月视图周行 |
| `calendar-month-view-day` | 月视图日期格 |
| `calendar-month-view-day.is-today` | 当天日期格 |
| `calendar-month-view-day.is-out-month` | 非当月日期格 |
| `calendar-event-list-item` | 事件项 |
| `calendar-event-list-item-more` | 「更多事件」入口 |

## CSS 变量

| 变量 | 作用 | 默认值 |
| --- | --- | --- |
| `--calendar-event-color` | 事件项的默认主题色 | `var(--color-primary-500)` |
