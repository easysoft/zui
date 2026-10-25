# 输入框

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"input-control","summary":"为表单控件添加前后缀、图标与尺寸辅助样式。","keywords":["输入框","input-control"]}
```

## overview

为表单控件添加前后缀、图标与尺寸辅助样式。

纯 CSS 库，没有名为 InputControl 的原生/Preact 构造器。根 `.input-control` 直接包 `.form-control`，前后缀为同层 `.input-control-prefix` / `.input-control-suffix`。has-prefix/has-suffix 系列加在根节点设置控件留白；icon 版本使用 32px 并居中；size-sm/lg 调整输入与前后缀字号。焦点透明度选择器使用相邻兄弟，DOM 排序影响哪个前后缀响应。

可独立消费的表单控件样式来自 [form-control](../form-control/ai.md)，该库负责组合容器和辅助类；不提供输入值、校验或图标点击逻辑。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/input-control`](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/input-control/src/main.ts>) 加载样式，无运行时导出。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/input-control` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

无。

## preact

无。

## web-components

无。公开入口未提供本库的自定义元素标签；Preact 注册或 `z-use-*` 自动初始化不等于 Web Components。

## css

### css-structure

```json
{"name": "结构与部件", "summary": "定义根节点和内部部件的样式。", "role": "component"}
```

选择器保留父子和同节点条件；生成部件由组件维护，不能仅添加类获得 JavaScript 行为。下表中标记“内部样式”的 token 仅说明 CSS 实现，不是额外公开类。

| 选择器或部件 | 功能/样式契约 |
| --- | --- |
| `.input-control` | 相对定位 |
| `.input-control-suffix, .input-control-prefix` | 绝对定位；`left-0`（内部样式）；`top-0`（内部样式）；全高；Flex 布局；交叉轴居中；`opacity-50`（内部样式）；`px-2`（内部样式）；不换行；`w-[--input-control-prefix]`（内部样式）；`z-[1]`（内部样式） |
| `.input-control-suffix` | `justify-end`（内部样式）；`w-[--input-control-suffix]`（内部样式） |
| `.input-control-suffix` | `right-0`（内部样式）；`left-auto`（内部样式） |
| `.form-control:focus + .input-control-prefix, .form-control:focus + .input-control-suffix` | 不透明 |
| `.input-control > .form-control` | `pl-[--input-control-prefix]`（内部样式）；`pr-[--input-control-suffix]`（内部样式） |
| `.input-control > select.form-control` | padding-right: calc(var(--input-control-suffix) + 20px) |
| `.input-control > select.form-control` | background-position-x: calc(100% - var(--input-control-suffix) - 8px) |

来源：[src/style/vars.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/input-control/src/style/vars.css>), [src/style/input-control.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/input-control/src/style/input-control.css>), [src/style/size.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/input-control/src/style/size.css>)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.input-control.has-prefix-icon > .input-control-prefix, .input-control.has-suffix-icon > .input-control-suffix` | 主轴居中；`p-0`（内部样式） |
| `.input-control.size-sm > .form-control, .input-control.size-sm > .input-control-prefix, .input-control.size-sm > .input-control-suffix` | 小字号 |
| `.input-control.size-lg > .form-control, .input-control.size-lg > .input-control-prefix, .input-control.size-lg > .input-control-suffix` | 大字号 |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
### css-input-affixes

```json
{"name":"has-prefix / has-suffix / size-*","summary":"为输入组合保留前后缀空间并调整尺寸。","role":"helper"}
```

在 `.input-control` 根上使用 has-prefix/has-suffix、has-prefix-sm/lg、has-suffix-sm/lg 或 has-prefix-icon/has-suffix-icon；size-sm/size-lg 控制字号。必须保留直接子 .form-control，前后缀使用同层 .input-control-prefix/suffix；不提供任意 size-*。

环境：`browser`，已加载 base、form-control、input-control、utilities 样式。

```html
<div class="input-control has-prefix">
  <input class="form-control" aria-label="金额">
  <span class="input-control-prefix">金额</span>
</div>
```

## css-variables

### css-variables-config

```json
{"name":"CSS 变量","summary":"配置本库主题、尺寸和状态外观。"}
```

下表按实际声明节点列出默认表达式。主题颜色、圆角等上游变量见 [base](../base/ai.md) 与 [utilities](../utilities/ai.md#css-variables)；在表中所列实际节点覆盖，避免祖先值被组件同名声明盖过。长度按 CSS 单位、颜色按 CSS 颜色/渐变，opacity 为 0–1，duration/delay 为时间。

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--input-control-fix-width-sm` | `2rem` | 尺寸/间距长度 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--input-control-fix-width` | `4.375rem` | 尺寸/间距长度 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--input-control-fix-width-lg` | `6.75rem` | 尺寸/间距长度 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--input-control-prefix` | `8px` | 尺寸/间距长度 | `.input-control` | `.input-control` 的实际匹配元素 |
| `--input-control-suffix` | `8px` | 尺寸/间距长度 | `.input-control` | `.input-control` 的实际匹配元素 |
| `--input-control-prefix` | `var(--input-control-fix-width)` | 尺寸/间距长度 | `.has-prefix` | `.has-prefix` 的实际匹配元素 |
| `--input-control-suffix` | `var(--input-control-fix-width)` | 尺寸/间距长度 | `.has-suffix` | `.has-suffix` 的实际匹配元素 |
| `--input-control-prefix` | `var(--input-control-fix-width-sm)` | 尺寸/间距长度 | `.has-prefix-sm` | `.has-prefix-sm` 的实际匹配元素 |
| `--input-control-suffix` | `var(--input-control-fix-width-sm)` | 尺寸/间距长度 | `.has-suffix-sm` | `.has-suffix-sm` 的实际匹配元素 |
| `--input-control-prefix` | `var(--input-control-fix-width-lg)` | 尺寸/间距长度 | `.has-prefix-lg` | `.has-prefix-lg` 的实际匹配元素 |
| `--input-control-suffix` | `var(--input-control-fix-width-lg)` | 尺寸/间距长度 | `.has-suffix-lg` | `.has-suffix-lg` 的实际匹配元素 |
| `--input-control-prefix` | `32px` | 尺寸/间距长度 | `.has-prefix-icon` | `.has-prefix-icon` 的实际匹配元素 |
| `--input-control-suffix` | `32px` | 尺寸/间距长度 | `.has-suffix-icon` | `.has-suffix-icon` 的实际匹配元素 |
| `--input-control-prefix` | `32px` | 尺寸/间距长度 | `.input-control.has-prefix-icon` | `.input-control.has-prefix-icon` 的实际匹配元素 |
| `--input-control-suffix` | `32px` | 尺寸/间距长度 | `.input-control.has-suffix-icon` | `.input-control.has-suffix-icon` 的实际匹配元素 |

## javascript

无。

## types

无。

## recipes

组合示例见 [前后缀](#css-input-affixes)；JS 工作区先导入 `@zui/input-control`。

## constraints

纯 CSS 库，没有名为 InputControl 的原生/Preact 构造器。根 `.input-control` 直接包 `.form-control`，前后缀为同层 `.input-control-prefix` / `.input-control-suffix`。has-prefix/has-suffix 系列加在根节点设置控件留白；icon 版本使用 32px 并居中；size-sm/lg 调整输入与前后缀字号。焦点透明度选择器使用相邻兄弟，DOM 排序影响哪个前后缀响应。

可独立消费的表单控件样式来自 [form-control](../form-control/ai.md)，该库负责组合容器和辅助类；不提供输入值、校验或图标点击逻辑。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/input-control/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/input-control/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/input-control/docs/lib/forms/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/.agents/skills/zui-standards/references/consumption.md>)
