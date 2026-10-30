# 时间标签

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"time-span","summary":"格式化显示日期时间或自动刷新的相对时间，并提供 timeago 工具函数。","keywords":["时间标签","time-span","TimeSpan","TimeAgo"]}
```

## overview

格式化显示日期时间或自动刷新的相对时间，并提供 timeago 工具函数。

`TimeSpan` 默认格式 yyyy-MM-dd hh:mm；无效日期显示 invalidText，未设置时显示 String(time)。`TimeAgo` 默认 hint=true，以 title 展示完整时间；hint 字符串直接作为提示，hint=false 关闭。指定 now 固定比较时间，同时停止该实例自动计时刷新。

TimeAgo 使用共享计时器：差值小于 60 秒时约每秒刷新，否则按分钟边界刷新；卸载从实例集合移除，最后一个实例卸载时取消计时器。TimeSpan 不自动刷新。time 为 DateLike，数字小于 10000000000 按秒，否则按毫秒；无时区信息的字符串遵循本地 Date 解析。没有自有 CSS 文件，time-span/time-ago/is-invalid 是生成的语义标记，可由业务 CSS 定制。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/time-span`](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/time-span/react`](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/time-span` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-time-span

```json
{"name":"TimeSpan","summary":"创建和管理 TimeSpan 原生实例。"}
```

入口：`import {TimeSpan} from '@zui/time-span';`。

构造 `new TimeSpan(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {TimeSpan} from '@zui/time-span';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new TimeSpan(host, {time: new Date(), format: 'yyyy-MM-dd'});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[TimeSpan](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/vanilla/timespan.ts>)。

### vanilla-time-ago

```json
{"name":"TimeAgo","summary":"创建和管理 TimeAgo 原生实例。"}
```

入口：`import {TimeAgo} from '@zui/time-span';`。

构造 `new TimeAgo(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {TimeAgo} from '@zui/time-span';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new TimeAgo(host, {time: Date.now() - 120000});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[TimeAgo](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/vanilla/timeago.ts>)。

## preact

### preact-time-span

```json
{"name":"TimeSpan","summary":"渲染 TimeSpan Preact 视图。"}
```

入口：`import {TimeSpan} from '@zui/time-span/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/time-span';
import {TimeSpan} from '@zui/time-span/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<TimeSpan time={new Date()} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[TimeSpan](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/component/timespan.tsx>)。

### preact-time-ago

```json
{"name":"TimeAgo","summary":"渲染 TimeAgo Preact 视图。"}
```

入口：`import {TimeAgo} from '@zui/time-span/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

| 成员 | 签名与返回值 |
| --- | --- |
| `update` | `(): void` |
| `TimeAgo.register` | `(instance: TimeAgo): void` |
| `TimeAgo.unregister` | `(instance: TimeAgo): void` |
| `TimeAgo.schedule` | `(): void` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/time-span';
import {TimeAgo} from '@zui/time-span/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<TimeAgo time={Date.now() - 120000} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[TimeAgo](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/component/timeago.tsx>)。

## web-components

无。公开入口未提供本库的自定义元素标签；Preact 注册或 `z-use-*` 自动初始化不等于 Web Components。

## css

### css-time-markers

```json
{"name":"time-span / time-ago / is-invalid","summary":"标识生成的时间内容，供业务样式选择。","role":"js-component"}
```

`time-span` / `time-ago` 在对应生成 span 上，`is-invalid` 在无效日期时由视图维护。本库没有为这些类定义专属 CSS；直接加类不会格式化日期。示例见前面的组件用法。

## css-variables

本库没有新增可配置的 CSS 变量声明。依赖组件的变量按其 [AI 索引](../../ai.md) 查找；外部主题变量的使用不等于由本库定义。

## javascript

### javascript-timeago

```json
{"name": "timeago", "summary": "将日期与基准时间的差值格式化为本地化相对时间。"}
```

`timeago(time: DateLike, now?: DateLike, lang?: string): string` 从主入口及 /react 导出。time 必填，无效返回空串；now 省略或无效使用当前时间；lang 省略按 i18n 当前语言。不修改输入，不创建计时器。

差值使用毫秒并向下取整：小于 10 秒为刚刚，随后为不足一分钟、分钟、小时；一天/过去两天使用昨天/明天/前天特殊文本，之后按天、周、30 天月、365 天年近似，不是日历月份差。正负决定“前/后”。

环境：`workspace`，浏览器 DOM 可用；DateLike 数字小于 10000000000 按秒，否则按毫秒。

```ts
import {timeago} from '@zui/time-span';
const now = Date.now();
console.log(timeago(now - 120000, now, 'zh_cn'));
```

来源：[实现](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/helper/timeago.ts>)。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-time-span-props

```json
{"name":"TimeSpanProps","summary":"定义 TimeSpanProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface TimeSpanProps {
    style?: CSSProperties;
    time: DateLike;
    format?: string | DateFormatter;
    invalidText?: string;
    className?: ClassNameLike;
}
```

来源：[TimeSpanProps](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/types/time-span-props.ts>)。

### types-time-ago-props

```json
{"name":"TimeAgoProps","summary":"定义 TimeAgoProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface TimeAgoProps {
    style?: CSSProperties;
    className?: ClassNameLike;
    time: DateLike;
    lang?: string;
    invalidText?: string;
    hint?: string | boolean;
    hintFormat?: string;
    now?: DateLike;
}
```

来源：[TimeAgoProps](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/types/time-ago-props.ts>)。

### types-time-ago-state

```json
{"name":"TimeAgoState","summary":"定义 TimeAgoState 的字段、参数或取值范围。"}
```

通过 `@zui/time-span/react` 使用 `import type` 导入。

```ts
export interface TimeAgoState {
    tick: number;
}
```

来源：[TimeAgoState](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/component/timeago.tsx>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

`TimeSpan` 默认格式 yyyy-MM-dd hh:mm；无效日期显示 invalidText，未设置时显示 String(time)。`TimeAgo` 默认 hint=true，以 title 展示完整时间；hint 字符串直接作为提示，hint=false 关闭。指定 now 固定比较时间，同时停止该实例自动计时刷新。

TimeAgo 使用共享计时器：差值小于 60 秒时约每秒刷新，否则按分钟边界刷新；卸载从实例集合移除，最后一个实例卸载时取消计时器。TimeSpan 不自动刷新。time 为 DateLike，数字小于 10000000000 按秒，否则按毫秒；无时区信息的字符串遵循本地 Date 解析。没有自有 CSS 文件，time-span/time-ago/is-invalid 是生成的语义标记，可由业务 CSS 定制。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/time-span/docs/lib/components/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/.agents/skills/zui-standards/references/consumption.md>)
