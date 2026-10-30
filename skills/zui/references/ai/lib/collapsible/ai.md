# 折叠

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "collapsible",
  "summary": "用原生 details 或动态组件按需显示内容。",
  "keywords": [
    "折叠",
    "details",
    "收起",
    "Collapsible"
  ]
}
```

## overview

简单内容使用 details.details 即可；需要标题操作、动态内容、受控状态时使用 Collapsible。组件底层保留原生 details/summary 行为与 open 状态。

## setup

workspace：主入口 `@zui/collapsible` 提供下述原生类和类型，`@zui/collapsible/react` 提供 Preact 组件（历史路径名不代表 React 支持）。JSX 需项目 Preact/TypeScript 配置；另加载 `@zui/base` 和 `@zui/collapsible/css` 的样式。browser：使用包含该库的 `zui` JS/CSS。npm：以目标发布包 `zui` / `zui/css` 的真实导出为准，不承诺独立子路径。切换按钮需另外加载 @zui/button；actions 工具栏按需加载 @zui/toolbar。/css 包含 css-icons。源码入口没有专用 Web Component 定义。

## vanilla

### vanilla-collapsible

```json
{"name": "Collapsible", "summary": "以原生构造器创建和更新组件。"}
```

`new Collapsible(selector, options?)`；选项见下文类型条目。构造、初始化异步时序、实例关联、`render(options?)`、`destroy()`、事件与 `$` 视图 ref 继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；`$` 首次渲染前可能为 null。选项可结合 [ComponentOptions](../core/ai.md#types-component-options)。调用 destroy() 卸载 Preact 子树；宿主由调用者按需移除。

静态 replace=`details`：传入 details 时可复用目标，传 div 时在内部渲染。`view.$?.toggle(collapsed?)` 通过标题激活切换；无参数反转，指定 boolean 设置目标折叠态，返回 void。遵守 onChange、disabled 与受控约束。

workspace（包含所需 CSS）：

```ts
import '@zui/base';
import '@zui/button';
import {Collapsible} from '@zui/collapsible';
const host = document.createElement('div');
document.body.append(host);
const view = new Collapsible(host, {title: '高级设置', defaultCollapsed: true, content: '按需显示的内容'});
// 离开页面时：view.destroy(); host.remove();
```

## preact

### preact-collapsible

```json
{"name": "Collapsible", "summary": "渲染可受控、带标题操作的原生折叠区域。"}
```

Props 见 [CollapsibleProps](#types-collapsible)，继承 HElementProps。ref 可读 `collapsed` 并调用 `toggle(collapsed?: boolean): void`。`collapsed` prop 优先；受控模式仅通知 onChange，调用者决定新值。原生 toggle 事件会同步或恢复 open；不要同时直接改 open 和提供 collapsed。

标题中的链接、输入、普通按钮按自身默认行为操作，不顺带切换；标题操作区及 role=button 内容阻止 summary 默认折叠。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/button';
import '@zui/collapsible/css';
import {render} from 'preact';
import {Collapsible} from '@zui/collapsible/react';
const host = document.createElement('div');
document.body.append(host);
render(<Collapsible title="高级设置" defaultCollapsed content="通知设置" onChange={(collapsed: boolean) => console.log(collapsed)} />, host);
// 离开页面时：render(null, host); host.remove();
```

## web-components

无。

## css

### css-details

```json
{"name": ".details", "summary": "给原生 details 提供箭头和显隐过渡。", "role": "component"}
```

结构必须为 details.details 的首个 summary 以及内容，open 属性控制初始展开。默认动画 .2s，系统减少动态效果时关闭；内容高度过渡依赖 ::details-content/calc-size 支持，原生开合不依赖它们。

browser（已加载本库 CSS）：

```html
<details class="details"><summary>发布说明</summary><p>本次更新增加通知设置。</p></details>
```

### css-collapsible

```json
{"name": ".collapsible 及标题/内容部件", "summary": "定义动态折叠组件生成的结构样式。", "role": "js-component"}
```

JS 根为 `.details.collapsible`；部件 `.collapsible-header`、`.collapsible-toggle-btn`、`.collapsible-header-title`、`.collapsible-header-caption`、`.collapsible-body` 由组件生成。header-actions 作为事件边界类使用，本库无独立外观规则。不要手工删除生成的 summary 或状态属性。

### css-collapsible-helpers

```json
{"name": ".bordered / .no-transition", "summary": "为折叠区域添加边框或禁用过渡。", "role": "helper"}
```

`.bordered` 与 `.collapsible` 同节点，body 加上边框；`.no-transition` 与 `.details` 同节点停止 CSS 过渡。panel-heading 的对齐规则只在 details 直接 summary 上起作用，panel 样式需另包含 panel。

## css-variables

### vars-collapsible

```json
{"name": "折叠变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--details-duration` | `0.2s` | 内容和箭头过渡时长 | `.details` | 目标 `.details` |

## javascript

无。

## types

### types-collapsible

```json
{"name": "CollapsibleProps / CollapsibleState", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `collapsed` | `boolean` | 否 | 无 | 受控折叠值；true 收起 |
| `defaultCollapsed` | `boolean` | 否 | `false` | 非受控初值 |
| `animation` | `boolean` | 否 | `true` | false 添加 no-transition |
| `bordered` | `boolean` | 否 | `false` | 边框外观 |
| `disabled` | `boolean` | 否 | `false` | 禁止用户切换 |
| `title` | `CustomContentType` | 否 | 无 | 标题 |
| `caption` | `CustomContentType` | 否 | 无 | 副标题 |
| `header` | `CustomContentType` | 否 | 无 | 标题后额外内容 |
| `actions` | `ToolbarSetting` | 否 | 无 | 标题操作工具栏 |
| `toggleOnClickHeader` | `boolean` | 否 | `true` | 是否允许标题空白区切换；切换按钮仍独立处理 |
| `onlyHideOnCollapsed` | `boolean` | 否 | `true` | true 保留隐藏内容；false 收起时不渲染 body |
| `toggleButton` | `Partial<ButtonProps>` | 否 | 无 | 切换按钮覆盖；可用 attrs 设置 aria-label |
| `headerClass` | `ClassNameLike` | 否 | 无 | summary 附加类 |
| `content` | `CustomContentType` | 否 | 无 | body 内容 |
| `contentClass` | `ClassNameLike` | 否 | 无 | body 类 |
| `contentStyle` | `JSX.CSSProperties` | 否 | 无 | body 样式 |
| `children` | `ComponentChildren` | 否 | 无 | 追加到 content 后 |
| `collapsedIcon` | `IconType` | 否 | 无 | 收起图标，默认 chevron-right |
| `expandedIcon` | `IconType` | 否 | 无 | 展开图标，默认 chevron-down |
| `onChange` | `(collapsed: boolean) => void \| false` | 否 | 无 | 切换前回调，false 阻止，this 为视图 |

继承 [HElementProps](../core/ai.md#types-helement-props)；`CollapsibleState={collapsed:boolean}`。ButtonProps 见 [button](../button/ai.md)，ToolbarSetting 见 [toolbar](../toolbar/ai.md)，内容与图标类型见 [core](../core/ai.md#types-content)。

## recipes

保留复杂子组件状态时使用默认 onlyHideOnCollapsed=true；希望收起时卸载子树时传 false。取消切换可在 onChange 返回 false。

## constraints

关闭动画只影响表现，不改变事件时序。标题图标按钮应提供可访问名称；title 为字符串时默认作为 aria-label，否则用 toggleButton.attrs 显式设置。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/collapsible/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/collapsible/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/collapsible/docs/lib/components/index.md>)
- [源码 src/main-react.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/collapsible/src/main-react.ts>)
- [源码 src/main-css.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/collapsible/src/main-css.ts>)
- [源码 src/types/index.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/collapsible/src/types/index.ts>)
- [源码 src/style/index.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/collapsible/src/style/index.ts>)
