# 按钮

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"button","summary":"提供可独立使用的按钮样式和 Preact Button，支持链接、图标、尺寸、禁用及加载状态。","keywords":["按钮","button","操作","提交","链接按钮","加载状态"]}
```

## overview

用于页面操作、表单提交和按钮式链接。静态页面直接使用 `.btn`；需要由数据组合图标、文字或加载状态时使用 Preact `Button`。按钮组见 [btn-group](../btn-group/ai.md)，自动组合操作项见 [toolbar](../toolbar/ai.md)。本库不处理业务请求、确认弹窗或权限。

## setup

| 环境 | 入口 | 能力与依赖 |
| --- | --- | --- |
| workspace | `@zui/button` | 导出 `ButtonProps` 类型，加载样式并将 Preact 组件注册到 ZUI 组件表；不导出名为 `Button` 的运行时构造器 |
| workspace | `@zui/button/react` | 导出 Preact `Button` 和类型；单独使用时另导入 `@zui/button/css` |
| workspace | `@zui/button/css` | 加载按钮样式及 `@zui/css-icons` |
| browser | 包含 button 的 ZUI CSS | 使用本页 CSS 标记；字体、主题和基础样式需由对应构建提供 |

workspace 示例需要 ZUI 工作区解析 `@zui/*`、TypeScript 和 Preact JSX 配置。`/react` 是历史入口名，不表示支持 React。`@zui/*` 不作为独立 npm 包安装说明；标准 npm 包入口以实际分发包为准。

## vanilla

无。主入口没有原生 `Button` 类，不能使用 `new zui.Button(...)`。

## preact

### preact-button

```json
{"name":"Button","summary":"通过属性生成原生 button 或 a 元素，组合图标、文本、尺寸和交互状态。"}
```

入口：`import {Button} from '@zui/button/react'`。类继承 `HElement<ButtonProps>`。不提供内部受控值；`disabled`、`loading`、`active` 均由调用方通过 props 更新。默认渲染 `<button type="button">`，有 `url` 时渲染 `<a>`；`tag` 优先，其次 `component` 可覆盖元素。

#### 属性

以下属性均可省略。未设置的布尔属性按假值处理。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `type` | `string` | 否 | 无 | 追加到根节点的外观类；使用已加载的主题类，不是 HTML type |
| `btnType` | `'button' \| 'submit' \| 'reset' \| string` | 否 | `'button'` | 前三个值设置 button 的 HTML type；其他值作为外观类 |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| number` | 否 | 无 | 字符串生成 `size-*`；数值在根节点设置 `--btn-height: Npx` |
| `text` | `ComponentChildren` | 否 | 无 | 显示在 `.text` 中的内容；没有 text 时不创建文字节点 |
| `children` | `ComponentChildren` | 否 | 无 | 文字后的自定义内容；加载时隐藏 |
| `icon` / `trailingIcon` | `IconType` | 否 | 无 | 前置/尾部图标；可为名称、图标对象或 VNode |
| `iconClass` / `trailingIconClass` / `textClass` | `ClassNameLike` | 否 | 无 | 对应子元素的附加类 |
| `caret` | `boolean \| 'up' \| 'down' \| 'left' \| 'right'` | 否 | 无 | `true` 生成 `.caret`，字符串生成对应方向类；加载时隐藏 |
| `url` / `target` | `string` | 否 | 无 | 链接地址和窗口；非 a 元素用 `data-url` / `data-target`，不会因此自动执行导航 |
| `disabled` | `boolean` | 否 | 无 | button 使用原生 disabled；a 移除链接并拦截点击，设置 `aria-disabled` 和 `tabIndex=-1` |
| `loading` | `boolean` | 否 | 无 | 同时禁用、显示加载图标、隐藏 children/尾图标/箭头 |
| `loadingIcon` | `IconType` | 否 | 默认 spinner 图标 | 自定义加载图标会追加 `.spin` |
| `loadingText` | `string` | 否 | 无 | 加载时替代已有 text；没有 text 时不会单独生成文字节点 |
| `active` | `boolean` | 否 | 无 | 追加 `.active`；视觉效果取决于主题样式 |
| `square` | `boolean` | 否 | 根据内容计算 | 未指定时，无文字且无 children 的非纯箭头按钮自动方形 |
| `rounded` | `boolean \| string` | 否 | 无 | `true` 为 `.rounded`，字符串为 `.rounded-<value>`；可用类取决于样式构建 |
| `hint` | `string` | 否 | 无 | 根节点 title |
| `command` | `string` | 否 | 无 | 非禁用时生成 `zui-command`，由 core 命令机制处理 |
| `onClick` | `JSX.MouseEventHandler<HTMLAnchorElement>` | 否 | 无 | Preact 点击回调；类型沿用现有声明，实际根节点也可能为 button |

公共 `HElementProps` 包括 `tag`、`component`、`className`/`class`、`style`、`attrs`、`props`、`forwardRef`、`lang`、`i18n`、`queryClient`、`data`、`onCommand`、`commands`、`onMounted`、`onUnmount` 及 `data-*`/事件属性。`attrs` 用于 DOM 属性，`props` 用于底层组件属性，`forwardRef` 接收底层元素或组件；类组件 `ref` 接收 Button 实例，可读取 `.element`。完整公共契约见 [HElementProps](../core/ai.md#types-helement-props)。

#### 最小示例

workspace：

```tsx
import {render} from 'preact';
import {Button} from '@zui/button/react';
import '@zui/button/css';

const container = document.createElement('div');
document.body.append(container);
render(<Button text="保存" onClick={() => console.log('保存')} />, container);
// 页面卸载时：render(null, container); container.remove();
```

渲染时需要应用已加载 ZUI 基础主题。无自有事件总线和组件专有公开方法；更新使用 Preact 重新渲染，卸载使用 `render(null, container)`。

## web-components

无公开入口。源码中存在 `ZuiButtonElement` 和 `defineButton()` 定义，但主入口与 package exports 尚未导出，不能通过 `@zui/button` 导入或假设 `<zui-button>` 已注册。

## css

### css-btn

```json
{"name":".btn","summary":"可独立用于 button 或 a 的按钮布局与默认外观。","role":"component"}
```

根节点 `.btn` 提供行内 flex、间距、固定高度、边框和圆角；无需 JS。默认继承文字颜色。推荐操作使用 button、导航使用带 href 的 a。

browser，前提为已加载含 button 和基础主题的 CSS：

```html
<button type="button" class="btn">保存</button>
<a class="btn" href="/help">帮助</a>
```

### css-button-helpers

```json
{"name":"按钮外观、尺寸与内容辅助类","summary":"在 .btn 上调整链接外观、尺寸、方形和宽度。","role":"helper"}
```

| 类 | 使用节点与依赖 | 效果 |
| --- | --- | --- |
| `.btn-default` | `.btn` 根节点 | hover 继承文字色 |
| `.btn-link` | `.btn` 根节点 | 透明背景、下划线、链接/hover/visited 文字颜色 |
| `.size-xs` / `.size-sm` / `.size-md` / `.size-lg` / `.size-xl` | `.btn` 根节点或其直接父元素 | 高度分别为 1.25/1.5/1.75/2.5/3rem，并设置对应字号、内边距 |
| `.square` | `.btn` 根节点 | 方形、去掉横向内边距 |
| `.btn-caret` | `.btn` 根节点 | 为仅箭头内容缩小横向内边距 |
| `.btn-wide` | `.btn` 根节点 | 最小宽度 80px |

`.text` 是 Preact 的文字包裹节点，本库没有为其定义可独立使用的样式。`.disabled`、`.active`、`.loading` 是 Preact 生成的状态类；原生 button 仍须设置 `disabled` 属性，a 的禁用拦截由 Preact 实现。主题色、圆角和图标类属于其他库，不从名称推断任意值可用。

## css-variables

### css-button-variables

```json
{"name":"按钮变量","summary":"覆盖按钮的背景、边框、圆角和高度。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--btn-radius` | `var(--radius)` | 圆角长度 | `:root` | `.btn` 或主题容器 |
| `--btn-bg` | `var(--color-surface)` | 背景色；`.btn-link` 改为 transparent | `:root` | 目标 `.btn` |
| `--btn-border-color` | `var(--color-gray-300)` | 外圈颜色 | `:root` | `.btn` 或主题容器 |
| `--btn-height` | `2rem` | 按钮高度 | `:root` | `.btn`；尺寸类和数字 size 会覆盖 |

## javascript

无。运行时 Button 仅从 Preact 子入口提供，见 [preact-button](#preact-button)。

## types

### types-button-props

```json
{"name":"ButtonProps","summary":"Button 的公开属性类型，继承 core 的 HElementProps。"}
```

入口 `import type {ButtonProps} from '@zui/button'` 或 `@zui/button/react`。字段、默认值与行为见 [preact-button](#preact-button)。`ClassNameLike` 支持字符串、条件对象、数组、函数及空值；`IconType` 支持字符串、图标属性对象或 VNode。它们由 core 定义，完整契约见 [core](../core/ai.md)。

## recipes

### recipe-submit-and-loading

```json
{"name":"表单提交与加载反馈","summary":"用原生 submit 和调用方维护的 loading 状态表达操作进度。"}
```

browser 的原生表单按钮：`<button type="submit" class="btn">提交</button>`。workspace Preact 对应 `<Button btnType="submit" text="提交" />`；加载时重新渲染 `<Button text="提交" loading loadingText="提交中" />`。业务层负责完成后清除 loading。

## constraints

- `.btn` 只提供样式，给 a 加 `.disabled` 不会自动阻止链接导航。
- 图标按钮需通过 `attrs={{'aria-label': '关闭'}}` 等方式提供可访问名称；`hint` 仅设置 title。
- 基础变量和图标依赖必须在样式构建中可达；本库不承诺所有主题修饰类均由自身输出。
- 当前源码有未公开的 Web Component 定义；`zui-button` 选择器的样式存在不能证明元素已注册。

## references

- [包入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/button/package.json>)、[主入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/button/src/main.ts>)、[Preact 入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/button/src/main-react.ts>)
- [Button 实现](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/button/src/component/button.tsx>)、[属性定义](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/button/src/types/button-props.ts>)
- [样式入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/button/src/style/index.ts>)、[样式变量](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/button/src/style/vars.css>)
- [正式文档](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/button/docs/lib/components/index.md>)
