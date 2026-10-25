# 提示消息

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"alert","summary":"提供静态提示消息布局和 Preact Alert，组合图标、标题、内容、操作和关闭按钮。","keywords":["提示消息","Alert","警告","通知"]}
```

## overview

用于页面内提示、操作反馈和警告内容。静态 HTML 使用 .alert；动态组合使用 Preact Alert。不会自动消失或弹出，浮动消息使用 messager。

## setup

workspace 主入口 `@zui/alert` 只加载样式，不导出运行时 Alert 或 AlertOptions；`@zui/alert/react` 导出函数组件和 AlertOptions；`@zui/alert/css` 为样式入口。基础主题以及所用 Button/Toolbar 依赖样式需随构建加载。browser 只使用已加载 CSS 的静态标记，不使用 new zui.Alert。

## vanilla

无。

## preact

### preact-alert

```json
{"name":"Alert","summary":"无内部关闭状态的提示内容函数组件。"}
```

workspace（需配置工作区别名、TypeScript 与 Preact JSX）：

```tsx
import {render} from 'preact';
import {Alert} from '@zui/alert/react';
import '@zui/alert/css';
const container = document.createElement('div');
document.body.append(container);
render(<Alert content="保存成功" close onClose={() => console.log('请求关闭')} />, container);
// 页面卸载时：render(null, container); container.remove();
```

props 见下方 AlertOptions。close 只发出回调，不自行卸载；调用方更新渲染决定是否关闭。children 追加到最后；函数组件不提供实例 ref。字符串 content 才生成 alert-content/heading/text 结构；非字符串 content 直接由 CustomContent 渲染，heading 不单独生成。

## web-components

无。

## css

### css-alert

```json
{"name":"提示消息布局及部件","summary":"以 .alert 包裹图标、内容、动作和关闭按钮。","role":"component"}
```

browser，已加载 alert 与主题 CSS：

```html
<div class="alert" role="status"><div class="alert-content"><div class="alert-heading">完成</div><div class="alert-text">保存成功</div></div></div>
```

`.alert` 水平 flex、间距、背景和圆角；`.alert-content` 纵向弹性内容；`.alert-heading` 加粗；`.alert-text` 保留换行；`.alert-actions` 水平动作容器。静态内容按用途自行设置 role。
### css-alert-helpers

```json
{"name":".alert-close / .alert-link","summary":"消息内部关闭按钮和链接辅助样式。","role":"helper"}
```

`.alert-close` 放在关闭按钮上调整边距；`.alert-link` 放在内部链接上继承色、加粗并 hover 下划线。CSS 不赋予关闭行为。

## css-variables

### css-alert-variables

```json
{"name":"--alert-bg","summary":"提示消息背景变量。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--alert-bg` | `var(--color-surface)` | 背景色 | `:root` | `.alert` 或主题容器 |

## javascript

无。

## types

### types-alert-options

```json
{"name":"AlertOptions","summary":"完整提示消息属性，全部可选。"}
```

仅从 `@zui/alert/react` 导入类型。

| 参数 | 类型 | 默认值与行为 |
| --- | --- | --- |
| className / style | ClassNameLike / JSX.CSSProperties | 无；根 div 样式 |
| actions | ToolbarSetting | 无；由 Toolbar.render 生成 |
| icon / iconClass | IconType / string | 无；前置图标 |
| heading / content | CustomContentType | 无；标题/正文，content 字符串时生成标准正文布局 |
| contentClass | ClassNameLike | 无；标准正文容器类 |
| children | ComponentChildren | 无；追加子内容 |
| close | boolean 或 ButtonProps 或 ComponentChildren | 无；true 为标准关闭按钮，对象为按钮配置，VNode 原样插入；普通字符串当前不会生成按钮 |
| onClose | (event: MouseEvent) => void | 无；请求关闭。close 对象的 onClick 先执行，preventDefault 会阻止再调用 onClose |

ButtonProps 见 [button](../button/ai.md#types-button-props)，actions 见 [toolbar](../toolbar/ai.md#types-toolbar-items)，CustomContentType/IconType 见 [core](../core/ai.md)。

## recipes

### recipe-alert-close

```json
{"name":"关闭提示","summary":"由应用控制提示是否继续渲染。"}
```

workspace 复用示例的 container，将 onClose 设置为 `() => render(null, container)` 可卸载提示。异步请求的成功/失败处理由应用负责。

## constraints

- 主入口仅 CSS，不推断原生类或 Web Component。
- 自定义 close VNode 自行绑定事件；不会自动执行 onClose。
- 提示角色由应用按内容选择，组件没有自动 role=alert。

## references

- [入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/alert/package.json>)、[Alert](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/alert/src/component/alert.tsx>)、[类型](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/alert/src/types/alert-options.ts>)、[样式](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/alert/src/style/alert.css>)
