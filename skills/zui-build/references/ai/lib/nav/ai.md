# 导航

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"nav","summary":"提供原生及 Preact 数据导航和多种纯 CSS 导航外观。","keywords":["导航","Nav","标签导航","胶囊","步骤"]}
```

## overview

静态导航使用 .nav；数据驱动使用 Nav。提供横向、纵向、等宽、主次、胶囊和标签外观。内容面板切换使用 [tabs](../tabs/ai.md)，响应式收纳使用 [responsive-nav](../responsive-nav/ai.md)。

## setup

workspace `@zui/nav` 为原生 Nav、类型、注册与样式；`@zui/nav/react` 为 Preact Nav 和类型；`@zui/nav/css` 为样式。browser 构建包含 nav 及其依赖后使用 zui.Nav。JSX 采用 Preact 工作区配置，单独 /react 需要导入 /css。

## vanilla

### vanilla-nav

```json
{"name":"Nav","summary":"从数据创建导航列表。"}
```

`new Nav(selector, options?:Partial<NavOptions>)`，selector 为现有元素。render(options?,reset?) 更新，$ 为 Preact 实例，destroy 清理，Nav.get(selector) 查实例。共享契约见 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)。

workspace：

```ts
import {Nav} from '@zui/nav';
const container = document.createElement('div');
document.body.append(container);
const nav = new Nav(container, {type: 'tabs', active: 'home', items: [{id: 'home', text: '首页', url: '/'}]});
// 页面卸载时：nav.destroy(); container.remove();
```

## preact

### preact-nav

```json
{"name":"Nav","summary":"List 派生的导航类组件。"}
```

workspace（需配置工作区别名、TypeScript 与 Preact JSX）：

```tsx
import {render} from 'preact';
import {Nav} from '@zui/nav/react';
import '@zui/nav/css';
const container = document.createElement('div');
document.body.append(container);
render(<Nav type="tabs" items={[{id: 'home', text: '首页', url: '/'}]} />, container);
// 页面卸载时：render(null, container); container.remove();
```

根 ul、条目 li、内部 a。ref 及激活、选择、加载、查询、children 契约继承 [List](../list/ai.md#preact-list)。Nav 本身不负责路由匹配；由应用传入 active 或用实例方法更新。

## web-components

无。

## css

### css-nav

```json
{"name":".nav / .nav-item / .nav-heading","summary":"可独立使用的导航结构。","role":"component"}
```

browser：`<ul class="nav"><li class="nav-item"><a href="/" class="active"><span class="text">首页</span></a></li></ul>`，已加载 nav 和主题 CSS。nav 水平 flex，nav-item 包裹链接；nav-heading 为分组标题；nav-divider 或直接 divider 为分隔，nav-space 为弹性空白。
### css-nav-variants

```json
{"name":"导航变体与状态类","summary":"在导航根和内部链接上设置外观。","role":"helper"}
```

根节点可用 `.nav-primary`（连体边框）、`.nav-secondary`（底线）、`.nav-tabs`（标签边框）、`.nav-pills`（胶囊）、`.nav-steps`（步骤箭头）、`.nav-stacked`（纵向）、`.nav-justified`（等宽）、`.nav-compact`（紧凑）。primary/secondary/tabs/pills 有 stacked 对应规则。内部 a 的 active/selected/disabled 决定状态变量；纯 CSS disabled 不阻止导航。steps 仅 CSS 变体，不在 NavOptions.type 联合中，使用 className 显式设置。

## css-variables

### css-nav-vars

```json
{"name":"导航变量","summary":"导航尺寸、色彩及分隔设置。"}
```

下表变量均在 :root 声明，推荐在目标 .nav 覆盖。状态规则在链接上覆盖 item-color/item-bg；nav-compact 和 nav-steps 在根重新设置相关值。

| 变量 | 默认表达式 | 含义 |
| --- | --- | --- |
| --nav-radius | var(--radius) | 圆角 |
| --nav-active-color / --nav-active-bg | var(--color-primary-500) / var(--color-inherit) | 激活色/背景 |
| --nav-heading-color | var(--color-gray-500) | 标题颜色 |
| --nav-gap / --nav-item-gap | .25rem / .75rem | 链接内部/条目间距 |
| --nav-item-color / --nav-item-bg | inherit / transparent | 普通链接色/背景 |
| --nav-item-padding / --nav-item-height | 1rem / 2rem | 横向内边距/高度 |
| --nav-divider-height / --nav-divider-margin | calc(var(--nav-item-height) / 2) / .5rem | 分隔尺寸 |

`--nav-selected-color/bg`、`--nav-disabled-color/bg` 被状态消费，根无默认值；按主题需要在 .nav 设置。nav-steps 将 item-bg/active-bg/active-color/selected-bg/selected-color 设置为 canvas/primary-500/canvas/secondary-500/canvas；hover 会在链接上进一步改变 item-bg。nav-compact 的 gap/item-gap/item-height/item-padding/divider-margin 分别为 .25rem/.5rem/1.75rem/.5rem/.25rem。

## javascript

### javascript-nav-render

```json
{"name":"Nav.render","summary":"将导航设置转换为 VNode。"}
```

仅 Preact 类静态成员：`Nav.render<T extends unknown[]>(setting:NavSetting<T>|undefined,args:T,defaultProps?:Partial<NavOptions>&Attributes,thisObject?:unknown)`；函数按 args 调用，数组包装为 items，设置覆盖 defaultProps，无设置返回 undefined，否则 VNode。workspace：`Nav.render([{text: '首页', url: '/'}], [])`，Nav 来自 /react。

## types

### types-nav-options

```json
{"name":"NavOptions / NavSetting / NavItemOptions","summary":"导航外观与条目配置。"}
```

NavOptions 继承全部 [ListProps](../list/ai.md#types-list-props)，新增 `type?:'primary'|'secondary'|'pills'|'tabs'`、`stacked?:boolean`、`justified?:boolean`，默认均无。items、active、onActive/onClickItem、转换、异步加载与生命周期保持 List 契约。

NavLinkOptions=ListitemProps；NavDropdownOptions=DropdownButtonOptions & Item；NavDividerOptions={type:'divider'} & Item；NavSpaceOptions={type:'space'} & Item；NavBtnGroupOptions={type:'btn-group'} & BtnGroupOptions & Item。NavItemOptions 是这五者联合。运行时专门处理 dropdown，其他类型按 List/注册组件映射处理，不把类型联合当作所有分组渲染都自动安装的证据。

`NavSetting<T extends unknown[]=[]> = NavItemOptions[] | NavOptions | ((...args:T)=>NavItemOptions[]|NavOptions)`。对应字段细节见 [ListitemProps](../list/ai.md#types-listitem-props)、[dropdown](../dropdown/ai.md)、[btn-group](../btn-group/ai.md)。

## recipes

### recipe-nav-active

```json
{"name":"回传当前路由的激活项","summary":"将业务路由映射为条目 key。"}
```

workspace，复用 nav：`nav.render({active: 'home'})`。该更新不切换 tab-pane，也不读取浏览器地址。

## constraints

Nav 的 active 不自动安装完整 tab 键盘模型；普通页面导航使用链接，内容标签页按 tabs 的约定接入。

## references

- [入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/nav/package.json>)、[组件](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/nav/src/component/nav.tsx>)、[类型](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/nav/src/types/index.ts>)、[样式](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/nav/src/style/index.ts>)
