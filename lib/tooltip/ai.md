# 提示消息

## meta

```json
{"schemaVersion":1,"library":"tooltip","summary":"提供基于 Popover 的工具提示与无需 JavaScript 的 CSS hint。","keywords":["提示消息","tooltip","Tooltip"]}
```

## overview

提供基于 Popover 的工具提示与无需 JavaScript 的 CSS hint。

继承 [Popover](../popover/ai.md#vanilla-popover)，默认 hover 触发，delay=500ms、closeBtn=false、popup=false、name=tooltip、fade 动画、destroyOnHide=5000ms、hideOthers=true、hideNewOnHide=false。content 未提供时 title 转为正文；同时有 title/content 时分标题和内容。type 用作样式类，不验证固定枚举。

CSS hint 用 data-hint 和伪元素，不依赖 JS，但默认只响应 hover、不自动提供键盘提示/ARIA，也不能承载交互内容；需要复杂内容或生命周期控制选择 Tooltip。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/tooltip`](src/main.ts) 公开原生组件和相应类型。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/tooltip` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-tooltip

```json
{"name":"Tooltip","summary":"创建和管理 Tooltip 原生实例。"}
```

入口：`import {Tooltip} from '@zui/tooltip';`。

构造、实例查询和选项/事件基础契约见 [Component](../core/ai.md#vanilla-component)。`setOptions` 合并参数不等于重建 DOM；本类特定方法如下。

继承 [Popover](../popover/ai.md#vanilla-popover)，下列是当前类新增或覆盖的成员。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

默认值（类内源码声明参考，不是独立脚本）：

```ts
static DEFAULT: Partial<TooltipOptions> = {
        ...Popover.DEFAULT,
        trigger: 'hover',
        delay: 500,
        closeBtn: false,
        popup: false,
        name: 'tooltip',
        animation: 'fade',
        destroyOnHide: 5000,
        hideOthers: true,
        hideNewOnHide: false,
    };
```

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {Tooltip} from '@zui/tooltip';

const host = document.createElement('button');
host.textContent = '操作';
document.body.append(host);
const instance = new Tooltip(host, {title: '提示内容'});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[Tooltip](src/vanilla/tooltip.ts)。

## preact

无。

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
| `.tooltip` | `z-tooltip`（内部样式）；主题圆角；`bg-[--tooltip-bg]`（内部样式）；`border-[--tooltip-color]`（内部样式）；`text-[--tooltip-text]`（内部样式）；`py-1`（内部样式）；`px-2`（内部样式）；`text-xs`（内部样式）；`max-w-md`（内部样式）；`whitespace-pre-wrap`（内部样式） |
| `.tooltip-has-title` | `shadow-xl`（内部样式）；`px-3`（内部样式）；`pt-2`（内部样式）；`pb-3`（内部样式）；`bg-opacity-80`（内部样式）；`backdrop-blur`（内部样式） |
| `.tooltip-has-title > .arrow` | `opacity-75`（内部样式） |
| `.tooltip-heading` | Flex 布局；交叉轴居中；`gap-4`（内部样式）；主轴两端分布；加粗；基础字号；`p-1`（内部样式） |
| `.tooltip-heading > .btn-close` | `-mr-1`（内部样式） |
| `.tooltip-content` | `p-1`（内部样式） |
| `.tooltip.light, .tooltip.white` | `bg-canvas`（内部样式）；`text-fore`（内部样式）；`border-border-strong`（内部样式）；1px 边框；`border-solid`（内部样式） |
| `.tooltip.light > .arrow, .tooltip.white > .arrow` | `border-inherit`（内部样式） |

来源：[src/style/vars.css](src/style/vars.css), [src/style/hint.css](src/style/hint.css), [src/style/tooltip.css](src/style/tooltip.css)。最小结构由前面的组件示例生成。
### css-hint

```json
{"name":"hint","summary":"用伪元素与 data-hint 显示无需 JS 的提示。","role":"component"}
```

单个元素使用 hint 或明确的 hint-* 类，内容来自 data-hint。默认在上方；hint-bottom/left/right 改方向，hint-sm/md/lg/xl 宽度分别 4/8/16/24rem，hint-primary/success/danger/warning/important/special 改背景。只有这些变体有定义，通用前缀匹配不表示任意变体。伪元素绝对定位，可能被 overflow 祖先裁切。

环境：`browser`，已加载 base、tooltip CSS。

```html
<button type="button" class="hint hint-bottom" data-hint="提示内容" aria-label="保存">保存</button>
```

## css-variables

### css-variables-config

```json
{"name":"CSS 变量","summary":"配置本库主题、尺寸和状态外观。"}
```

下表按实际声明节点列出默认表达式。主题颜色、圆角等上游变量见 [base](../base/ai.md) 与 [utilities](../utilities/ai.md#css-variables)；在表中所列实际节点覆盖，避免祖先值被组件同名声明盖过。长度按 CSS 单位、颜色按 CSS 颜色/渐变，opacity 为 0–1，duration/delay 为时间。

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--tooltip-bg` | `var(--skin-color, var(--color-inverse))` | 背景色或渐变 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--tooltip-text` | `var(--skin-text, var(--color-canvas))` | 颜色 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--tooltip-arrow` | `6px` | 尺寸/间距长度 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--tooltip-delay` | `0.5s` | 动画/过渡时间 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--tooltip-bg` | `var(--color-primary-500)` | 背景色或渐变 | `.hint-primary` | `.hint-primary` 的实际匹配元素 |
| `--tooltip-bg` | `var(--color-success-500)` | 背景色或渐变 | `.hint-success` | `.hint-success` 的实际匹配元素 |
| `--tooltip-bg` | `var(--color-danger-500)` | 背景色或渐变 | `.hint-danger` | `.hint-danger` 的实际匹配元素 |
| `--tooltip-bg` | `var(--color-warning-500)` | 背景色或渐变 | `.hint-warning` | `.hint-warning` 的实际匹配元素 |
| `--tooltip-bg` | `var(--color-important-500)` | 背景色或渐变 | `.hint-important` | `.hint-important` 的实际匹配元素 |
| `--tooltip-bg` | `var(--color-special-500)` | 背景色或渐变 | `.hint-special` | `.hint-special` 的实际匹配元素 |

`--tooltip-color` 在 hint 边框中消费但未声明默认值，当前组件没有可见 border-width 的默认承诺。

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-tooltip-options

```json
{"name":"TooltipOptions","summary":"定义 TooltipOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type TooltipOptions = PopoverOptions & {
    type?: string;
};
```

来源：[TooltipOptions](src/types/tooltip-options.ts)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

继承 [Popover](../popover/ai.md#vanilla-popover)，默认 hover 触发，delay=500ms、closeBtn=false、popup=false、name=tooltip、fade 动画、destroyOnHide=5000ms、hideOthers=true、hideNewOnHide=false。content 未提供时 title 转为正文；同时有 title/content 时分标题和内容。type 用作样式类，不验证固定枚举。

CSS hint 用 data-hint 和伪元素，不依赖 JS，但默认只响应 hover、不自动提供键盘提示/ARIA，也不能承载交互内容；需要复杂内容或生命周期控制选择 Tooltip。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](package.json)
- [主入口](src/main.ts)
- [正式文档](docs/lib/components/index.md)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](../../.agents/skills/zui-standards/references/consumption.md)
