# 侧边栏

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"sidebar","summary":"提供可拖动调宽、折叠、宽度保存与同步的侧边栏原生组件和 Preact 包装。","keywords":["侧边栏","Sidebar","拖动调宽","折叠"]}
```

## overview

用于页面左右侧边栏的拖动调宽、折叠、恢复和跨实例宽度同步。需由应用提供有尺寸的父容器与主内容区；不创建整个页面布局。

## setup

workspace `@zui/sidebar` 为原生 Sidebar、类型、注册及样式；`@zui/sidebar/react` 导出 Preact Sidebar 与 SidebarProps；`@zui/sidebar/css` 只加载样式。内部依赖 split、dnd、store、css-icons。browser 使用包含 sidebar 依赖的 JS/CSS。JSX 使用 Preact 工作区配置。

## vanilla

### vanilla-sidebar

```json
{"name":"Sidebar","summary":"管理现有侧栏元素的宽度和折叠。"}
```

`new Sidebar(selector, options?:Partial<SidebarOptions>)`，selector 为有父节点的侧栏元素。`width`、`side` 为只读当前数值/方向；`$parent` 为容器 Cash。`update(width:number, immediately?:boolean):void` 设置像素宽度，默认下一动画帧应用；true 立即应用；`toggle(collapsed?:boolean):void` 指定或反转折叠，0 表示折叠；`render():void` 根据当前内部状态同步 DOM（不是合并 options 的通用 render）。destroy 清理拖动和动画帧；Sidebar.get(selector) 取已有实例。

workspace：

```ts
import {Sidebar} from '@zui/sidebar';
const layout = document.createElement('div');
layout.style.cssText = 'display:flex;width:800px;height:300px;gap:8px';
const aside = document.createElement('aside');
aside.className = 'sidebar';
aside.textContent = '侧栏内容';
layout.append(aside);
document.body.append(layout);
const sidebar = new Sidebar(aside, {width: 200});
// 页面卸载时：sidebar.destroy(); layout.remove();
```

宽度变化后 onResize(width) 和组件 sidebarResize 事件通知新像素宽；跨越 0 时调用 onToggle(collapsed)。回调不是可取消协议。常规事件和实例 API 见 [Component](../core/ai.md#vanilla-component)。

## preact

### preact-sidebar

```json
{"name":"Sidebar","summary":"挂载后创建原生 Sidebar 的 Preact 包装。"}
```

workspace（需配置工作区别名、TypeScript 与 Preact JSX）：

```tsx
import {render} from 'preact';
import {Sidebar} from '@zui/sidebar/react';
import '@zui/sidebar/css';
const container = document.createElement('div');
document.body.append(container);
render(<Sidebar width={200} children="侧栏内容" />, container);
// 页面卸载时：render(null, container); container.remove();
```
示例容器需由应用设置可测量父宽度。ref 接收 Preact 实例，其 `.sidebar` 是原生 Sidebar 或 undefined。默认 className='w-40'、side='left'；children 放在 .sidebar-content；style/contentStyle 和 className/contentClass 分别设置根/内容。包装只在首次挂载创建原生实例，没有 componentDidUpdate 同步 options；后续调宽通过 ref.sidebar.update，不能假设修改 width prop 会重新初始化行为。卸载自动 destroy。

## web-components

无。

## css

### css-sidebar

```json
{"name":"侧栏及拖动槽样式","summary":"配合原生实例控制侧栏、折叠和调宽。","role":"js-component"}
```

.sidebar 固定 flex 份额且 relative；.sidebar-left/.sidebar-right 定位左右 gutter；.sidebar-gutter 为拖动区域；.is-collapsed 隐藏内容保留 gutter，.is-expanded/.is-animating 处理展开过渡。父级 .has-sidebar-animation 激活过渡，.is-sidebar-resizing 为拖动光标。状态由实例维护。拖动槽基础外观来自 split。

## css-variables

### css-sidebar-vars

```json
{"name":"侧栏尺寸变量","summary":"由实例和样式共同维护宽度及过渡。"}
```

| 变量 | 默认表达式 | 声明位置 / 覆盖方式 |
| --- | --- | --- |
| --gutter-width | 1px，实例按 gutterWidth 或父 gap 写入 | .sidebar；使用 gutterWidth 选项 |
| --sidebar-duration | 200ms；数字 animation 写入 Nms | .sidebar；使用 animation 选项 |
| --sidebar-left-width / --sidebar-right-width | 实例计算的像素宽度 | 父容器；实例维护，使用 update 设置 |

直接在 :root 写宽度会被实例父容器值遮盖。

## javascript

无。

## types

### types-sidebar-options

```json
{"name":"SidebarOptions / SidebarProps","summary":"侧栏选项和 Preact 外观扩展。"}
```

以下 SidebarOptions 全部可选，主入口和 /react 导出：

| 字段 | 类型 | 默认值 / 行为 |
| --- | --- | --- |
| parent | Selector | 元素父节点；无匹配回退父节点 |
| side | 'left' 或 'right' | 原生从 sidebar-right 类推断，否则 left |
| width | SizeSetting | 当前元素宽度；百分比按父宽度计算 |
| minWidth / maxWidth | SizeSetting | 40 / Number.MAX_SAFE_INTEGER，最终受父容器宽度限制 |
| gutterWidth | number | 父节点 gap 数值或 1；像素 |
| toggleBtn | boolean | true；显示折叠按钮 |
| animation | boolean 或 number | true；数字单位 ms |
| dragToResize | boolean | true；启用拖动 |
| dblclick | 'toggle' 或 'reset' | reset；双击 gutter 的动作 |
| preserve | string | 无；用 store 键 SIDEBAR:<值>:width 保存宽度 |
| shareWidth | string | 无；同非空分组的已初始化实例同步宽度，各自受边界约束 |
| onToggle | (collapsed:boolean)=>void | 无；折叠状态变化 |
| onResize | (width:number)=>void | 无；宽度实际变化 |

宽度小于 minWidth 时，toggleBtn=true 会折叠；否则夹到最小宽度。非有限宽度回退初始默认宽度。SidebarProps 仅 /react 导出，在 SidebarOptions 上增加 className/contentClass:ClassNameLike、style/contentStyle:JSX.CSSProperties、children:ComponentChildren。

## recipes

### recipe-sidebar-share

```json
{"name":"同步两个侧栏宽度","summary":"使用非空 shareWidth 分组。"}
```

workspace：初始化各 Sidebar 时均传 `{shareWidth: 'project-panel'}`，随后 `sidebar.update(240)` 将同步已初始化同组实例。preserve 负责持久化，shareWidth 负责当前实例间同步，两者分开选择。

## constraints

- 初始化时父容器必须有有效尺寸。
- Preact props 更新不会自动重建原生选项；使用实例方法调整已运行的侧栏。
- destroy 清理资源，不承诺自动恢复全部附加 DOM/样式；页面卸载一并移除容器。

## references

- [入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/sidebar/package.json>)、[原生实现](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/sidebar/src/vanilla/sidebar.ts>)、[Preact 包装](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/sidebar/src/components/sidebar.tsx>)、[选项](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/sidebar/src/types/sidebar-options.ts>)、[样式](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/sidebar/src/style/sidebar.css>)
