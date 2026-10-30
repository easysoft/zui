# 分页

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"pager","summary":"按记录总数生成分页信息、页码导航、条数菜单和跳转输入，提供原生、Preact 与 zui-pager 自定义元素。","keywords":["分页","pager","pagination","页码","每页条数","翻页"]}
```

## overview

用于表格、搜索结果及列表的分页导航。组件计算分页信息并发出用户操作通知；业务请求、列表刷新和路由由调用方处理。原生或 Preact 形态通过 `items` 配置控件；Web Component 默认显示 7 个位置的页码导航。复杂列表的数据和显示见 [list](../list/ai.md)，分页按钮和分组行为基于 [button](../button/ai.md)、[toolbar](../toolbar/ai.md)。

## setup

| 环境 | 入口 | 能力与副作用 |
| --- | --- | --- |
| workspace | `@zui/pager` | 原生 Pager、公共类型、样式及 Preact 组件表注册；不注册 zui-pager |
| workspace | `@zui/pager/vanilla` | 原生 Pager 并执行 Pager.register()；需另加载 `@zui/pager/css`；不注册 zui-pager |
| workspace | `@zui/pager/react` | Preact Pager、分页子组件、updatePagerInfo、公共类型；需另加载 `@zui/pager/css` |
| workspace | `@zui/pager/web-component` | 导出 ZuiPagerElement、PagerElementOptions、PagerChangeDetail；模块求值时注册 zui-pager 并加载样式 |
| workspace | `@zui/pager/css` | 本库分页和 css-icons 样式；应用还需基础主题及所用按钮、菜单等依赖样式 |
| browser | `zui.Pager` | 前提为已加载包含 pager 及其依赖的构建 JS/CSS；不据此推定自定义元素或 Preact 子入口可用 |

workspace 示例要求 ZUI 工作区别名、TypeScript 和 Preact JSX 配置。标准 npm 包是否导出对应成员须以实际 `zui` 包为准，不推定 `@zui/*` 独立发布或 `zui/pager` 子路径存在。

## vanilla

### vanilla-pager

```json
{"name":"Pager","summary":"在 DOM 容器内创建分页控件，使用 render 更新分页信息，destroy 清理实例。"}
```

构造 `new Pager(selector, options?: Partial<PagerOptions>)`。selector 为现有元素或 Cash 可解析选择器；无匹配元素或同一元素重复创建会报错。选项见 [pager-options](#types-pager-options)。

browser，已加载 ZUI JS/CSS：

```html
<div id="result-pager"></div>
<script>
const pager = new zui.Pager('#result-pager', {
    page: 1,
    recTotal: 101,
    recPerPage: 10,
    useState: true,
    items: [
        {type: 'info', text: '共 {recTotal} 条'},
        {type: 'link', page: 'prev', text: '上一页'},
        {type: 'nav', count: 5},
        {type: 'link', page: 'next', text: '下一页'},
        {type: 'size-menu', text: '每页 {recPerPage} 条', items: [10, 20, 50]},
    ],
    onChangePageInfo(info, event) {
        console.log('加载分页数据', info.page, info.recPerPage);
    },
});
// 页面卸载时：pager.destroy();
</script>
```

实例 `render(options?: Partial<PagerOptions>, reset?: boolean): void` 合并选项并重新渲染；`destroy(): void` 卸载视图、清理 effect 和组件事件；`Pager.get(selector)` 返回已有实例或 undefined。`element` 是挂载元素，`options` 是包装配置，`$` 是已挂载 Preact 实例或 null。完整共有契约见 [Component](../core/ai.md#vanilla-component) 和 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)。

`useState: true` 时用户翻页和条数菜单改变内部状态；外部需要精确控制 page 时省略 useState，在 `onChangePageInfo` 中调用 `pager.render(info)` 回传新值。修改条数不会自动重置为第一页。没有自有 `goToPage()` 等实例方法，不要按名称猜 API。

## preact

### preact-pager

```json
{"name":"Pager","summary":"Preact 分页工具栏，以 PagerOptions 配置分页状态与条目。"}
```

入口 `@zui/pager/react`，props 为 `PagerOptions`，继承 Toolbar。`ref` 接收类组件实例。默认展示由 page/recTotal/recPerPage props 决定；`useState` 启用内部交互状态。children 和 DOM 属性继承 Toolbar/HElement，分页条目仍应通过 items 配置。

workspace：

```tsx
import {render} from 'preact';
import {Pager} from '@zui/pager/react';
import type {PagerInfo} from '@zui/pager';
import '@zui/pager/css';

const container = document.createElement('div');
document.body.append(container);
render(<Pager
    page={1} recTotal={101} recPerPage={10} pageTotal={11}
    useState items={[{type: 'nav', count: 5}]}
    onChangePageInfo={(info: PagerInfo) => console.log(info.page)}
/>, container);
// 页面卸载时：render(null, container); container.remove();
```

直接 JSX 的 PagerOptions 声明要求四个 PagerInfo 数值字段；运行时仍从 recTotal/recPerPage 重算 pageTotal。`Pager.format()` 是此 Preact 类的静态方法，见 [pager-format](#javascript-pager-format)。

### preact-pager-items

```json
{"name":"PagerInfoItem / PagerLink / PagerNav / PagerSizeMenu / PagerGoto","summary":"可由 Pager items 驱动，也可从 Preact 子入口单独渲染的分页部件。"}
```

从 `@zui/pager/react` 导出。推荐通过 Pager 的 items 使用，由 Pager 注入 `pagerInfo`、`linkCreator` 和必要交互。单独渲染这些函数组件时需传入对应完整 props，并自行响应事件；没有类组件 ref 或内部生命周期方法。

| 组件 | 对应条目 type | 专有属性、默认值与行为 |
| --- | --- | --- |
| `PagerInfoItem` | `'info'` | `page?: PageName`；`text?: string \| ((info: PagerInfo) => string)` 默认空串，支持占位符；渲染 children 后追加文字 |
| `PagerLink` | `'link'` | `page?: PageName`；`format?: string \| ((info) => string)` 在无 text/icon 时生成文本；未显式 disabled 且目标页等于当前页时禁用 |
| `PagerNav` | `'nav'` | `count?: number` 默认 12、向下取整且最少 5；显示首尾页与省略号，当前页禁用；没有记录时不渲染 |
| `PagerSizeMenu` | `'size-menu'` | `items?: number[]` 默认 5/10/15/20/25/30/35/40/45/50/100/200/500/1000/2000；`text` 默认为空串；`itemProps`、`dropdown`、`menu` 覆盖下拉条目和菜单 |
| `PagerGoto` | `'goto'` | `page?: PageName`；`text` 为按钮文本；`onChange?: ({info, event}) => boolean`；输入有限整数页码，提交时限制范围；返回 false 阻止默认跳转 |

独立调用时，除对应 `Pager*Props` 外还需 `pagerInfo: PagerInfo`；Link/Nav/SizeMenu/Goto 的声明另要求 `linkCreator: PageLinkCreator`。InfoItem 的声明另要求 `children`、`key`。Link/Nav/Goto/SizeMenu 复用 ButtonProps，按钮外观由 `btnType` 传递；type 保留为条目类型。PagerNav 的 `format` 虽在类型声明中存在，当前实现按页码直接生成数字，不用它格式化页码文字。

workspace 独立导航示例：

```tsx
import {render} from 'preact';
import {PagerNav} from '@zui/pager/react';
import '@zui/pager/css';

const container = document.createElement('div');
document.body.append(container);
render(<PagerNav type="nav" count={5}
    pagerInfo={{page: 1, recTotal: 50, recPerPage: 10, pageTotal: 5}}
    linkCreator="/items?page={page}"
/>, container);
// 页面卸载时：render(null, container); container.remove();
```

其余条目最小配置与 [原生 Pager 示例](#vanilla-pager) 共用；goto 示例见 [跳转处理](#recipe-goto)。

## web-components

### web-component-pager

```json
{"name":"zui-pager / ZuiPagerElement","summary":"自动注册的分页自定义元素，以属性设置页码和记录数，通过 zui-change 通知用户操作。"}
```

workspace 导入 `@zui/pager/web-component` 后注册 `<zui-pager>`。需要支持 Custom Elements 的浏览器；主入口、vanilla、react 不执行此注册。元素使用 Light DOM，内部 `.zui-webc-mount` 由运行时管理；没有公开内容 slot，也不参与表单值提交。

| HTML attribute | JS property | 类型 / 默认值 | 转换与反射 |
| --- | --- | --- | --- |
| `page` | `page` | number / 1 | 有限非负整数；非法、空值或负数回退 1；渲染时按实际页数规范为 0 或有效页码并反射 |
| `rec-total` | `recTotal` | number / 0 | 有限非负整数，非法值回退 0，反射 |
| `rec-per-page` | `recPerPage` | number / 10 | 有限正整数，非法值回退 10，反射 |
| 无 | `items` | PagerOptions['items'] / 默认 `[{type: 'nav', count: 7}]` | JS property 传递；不序列化到 HTML |
| 无 | `linkCreator` | PageLinkCreator / undefined | JS property 传递；不序列化到 HTML |

`pageTotal: number` 为只读 getter，计算 `Math.ceil(recTotal / recPerPage)`。`options` 是上述声明属性的只读快照，`setOptions(partial): void` 批量更新且拒绝未知字段。`ready: Promise<void>` 等待当前连接的首次渲染，不是每次属性更新完成的通知。

事件 `zui-change`：用户使用页码按钮或每页条数菜单后触发；detail 为 `{page, recTotal, recPerPage, pageTotal, originalEvent}`，即 `PagerChangeDetail`；默认冒泡、composed，不能通过取消阻止已完成的状态更新。程序赋值、初始化及内部页码规范化不合成该用户事件。goto 有独立回调路径，见限制。

workspace：

```ts
import '@zui/pager/web-component';
import type {PagerChangeDetail} from '@zui/pager/web-component';

const pager = document.createElement('zui-pager');
pager.setAttribute('aria-label', '搜索结果分页');
pager.recTotal = 101;
pager.recPerPage = 10;
pager.addEventListener('zui-change', event => {
    const {page, recPerPage} = (event as CustomEvent<PagerChangeDetail>).detail;
    console.log('加载数据', page, recPerPage);
});
document.body.append(pager);
await pager.ready;
// 页面卸载时：pager.remove();
```

宿主可访问属性由运行时转发到内部导航根节点，默认 role 为 navigation、aria-label 为 Pagination。更新在微任务合并；同轮 DOM 移动保留实例，真正断开后卸载 Preact 子树，再连接可重新渲染。首次渲染失败会拒绝 ready 并触发 `zui-error`。公共元素机制见 [core](../core/ai.md)。

## css

### css-pager

```json
{"name":".pager","summary":"可独立组合按钮与说明文字的分页行布局。","role":"component"}
```

根节点 `.pager` 提供水平 flex、居中对齐、固定间距和不换行。无 JS 时它只负责排版，页面导航用 a 或应用自己的事件。browser，已加载 pager、button 和主题 CSS：

```html
<nav class="pager" aria-label="结果分页">
  <a class="btn" href="?page=1">1</a>
  <a class="btn" href="?page=2">2</a>
</nav>
```

### css-pager-parts

```json
{"name":".pager-size-menu / .pager-goto-group","summary":"配合分页条数菜单和跳转输入的部件样式。","role":"js-component"}
```

`.menu.pager-size-menu` 位于条数下拉菜单根节点，使用三列网格；直接 `.menu-item > a` 有附加间距。`.pager .pager-goto-group > .form-control` 设置输入宽度 3rem；`.input-group-addon` 在该组内设置背景边框。部件由 Preact 生成，独立静态组合时仍需 menu/form-control/input-group 基础类及样式。

`.pager > .pager-nav.active` 设置当前页高亮颜色和外圈。Pager 的通用条目处理为 `type: 'nav'` 注入 `.pager-nav`，再由 PagerNav 传到按钮；独立渲染 PagerNav 时若需要此规则，应显式设置 `className="pager-nav"` 并放入 `.pager` 容器。`zui-pager` 为 block，直接挂载容器使用 display: contents。

## css-variables

无本库专有变量。分页样式消费主题变量 `--color-primary-500` 等，并复用按钮、菜单、输入组件变量；在对应组件或主题容器覆盖，见 [button](../button/ai.md#css-button-variables)、[menu](../menu/ai.md#css-menu-variables) 和 [base](../base/ai.md)。

## javascript

### javascript-pager-format

```json
{"name":"Pager.format","summary":"从记录数与每页条数计算总页数，并将页码限制在有效范围。"}
```

仅从 `@zui/pager/react` 的 Preact Pager 类访问。`Pager.format(pagerInfo: PagerInfo): PagerInfo` 返回新对象，不修改输入，同步执行，无网络/DOM 操作。运行时缺失字段默认 page=1、recTotal=0、recPerPage=10；数值通过一元加转换，非有限总数回退 0，每页条数最少 1；pageTotal 始终重新计算，空数据 page=pageTotal=0，其他页码限制在 1..pageTotal。普通 JS 数值不主动取整；Web Component 数字属性额外限制整数。

workspace：

```ts
import {Pager} from '@zui/pager/react';
const info = Pager.format({page: 99, recTotal: 101, recPerPage: 10, pageTotal: 0});
// {page: 11, recTotal: 101, recPerPage: 10, pageTotal: 11}
```

### javascript-update-pager-info

```json
{"name":"updatePagerInfo","summary":"按目标页名称或页码计算新的分页信息，保留有效的显式总页数。"}
```

入口 `@zui/pager/react`。签名 `updatePagerInfo(info: PagerInfo, page?: PageName): PagerInfo`；同步返回新对象，不修改输入。`info.recTotal` 非有限时为 0，`recPerPage` 非有限时为 1，分别限制下界为 0/1；有效且大于 0 的 info.pageTotal 优先，否则计算总页数。

`page` 可为 `'first'`、`'last'`、`'prev'`、`'next'`、`'current'` 或 number；省略时使用 info.page；负数按 `pageTotal + page` 解释，因此 -1 表示倒数第二页。最终限制有效区间，空总页数返回 page=pageTotal=0。输入 PagerInfo 应先规范为有限 page；该函数不把所有非法 info.page 自动转为 1。

workspace：

```ts
import {updatePagerInfo} from '@zui/pager/react';
const next = updatePagerInfo({page: 2, recTotal: 101, recPerPage: 10, pageTotal: 11}, 'next');
// next.page === 3
```

这是轻量计算函数，但公开入口同时导入 Preact 组件与依赖，不据函数实现推定整个 `/react` 入口适合无 DOM 服务端环境。

## types

### types-pager-options

```json
{"name":"PagerOptions / PagerInfo / PageName / PageLinkCreator","summary":"分页信息、页码名称、链接生成及顶层控件选项。"}
```

从 `@zui/pager` 或 `/react` 导入类型：

```ts
type PagerInfo = {page: number; recTotal: number; recPerPage: number; pageTotal: number};
type PageName = 'first' | 'last' | 'prev' | 'next' | 'current' | number;
type PageLinkCreator = string | ((info: PagerInfo) => string);
```

`PagerOptions extends ToolbarOptions, PagerInfo`。PagerInfo 在类型上必填，原生构造接收 Partial；表中默认值为运行时值。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `page` | number | JSX 是 / 原生否 | 1 | 当前页，按总页数规范 |
| `recTotal` | number | JSX 是 / 原生否 | 0 | 总记录数 |
| `recPerPage` | number | JSX 是 / 原生否 | 10 | 每页条数，下界 1 |
| `pageTotal` | number | JSX 是 / 原生否 | 计算 | 控件从记录数和每页条数重算 |
| `items` | ToolbarOptions['items'] | 否 | 无 | 明确提供控件条目；原生/Preact 无默认导航 |
| `useState` | boolean | 否 | 无 | 真值使用内部交互分页状态 |
| `linkCreator` | PageLinkCreator | 否 | 无 | 模板支持 `{page}`/`{recTotal}`/`{recPerPage}`/`{pageTotal}`，或函数返回链接 |
| `onChangePageInfo` | `(info: PagerInfo, event: Event) => void` | 否 | 无 | 页码按钮或条数菜单操作通知 |
| `onChange` | `(data: {info: PagerInfo; event: Event}) => void` | 否 | 无 | 历史类型字段；当前 Pager 不调用它作为通用翻页通知 |

工具栏继承字段 `size`、`type`、`btnType`、`btnProps` 调整按钮，`gap` 调整间距；`itemProps`、`itemPropsMap`、`getItem`、`getItems`、`itemRender`、`beforeRenderItem`、`onClickItem`、`relativeTarget` 及 DOM/命令属性继续可用，完整契约见 [ToolbarOptions](../toolbar/ai.md#types-toolbar-options)、[CommonListProps](../common-list/ai.md#types-common-list-props) 与 [HElementProps](../core/ai.md#types-helement-props)。分页默认条目外观 `btnType: 'ghost'`、`size: 'sm'`。所有专有条目见 [pager-item-props](#types-pager-item-props)。

### types-pager-item-props

```json
{"name":"PagerInfoProps / PagerLinkProps / PagerNavProps / PagerSizeMenuProps / PagerGotoProps","summary":"分页 items 各种 type 的公开配置类型。"}
```

五种类型从主入口或 `/react` 导出，其必填 `type` 与具体字段见 [分页部件](#preact-pager-items)。其中 Link/Nav/SizeMenu/Goto 继承 `Omit<Item, 'key'>` 与 `Omit<ButtonProps, 'type'>`，InfoProps 继承 Item。它们复用 [ButtonProps](../button/ai.md#types-button-props) 的 icon、text、url、disabled、className 等字段；type 固定为对应分页类型，不能用它设置按钮主题。

SizeMenu 的 `itemProps?: Partial<MenuItemOptions>`、`dropdown?: DropdownButtonOptions`、`menu?: DropdownMenuOptions` 分别覆盖条目和下拉行为；菜单配置见 [menu](../menu/ai.md#types-menu-options)、[dropdown](../dropdown/ai.md)。独立 Preact 部件所需的附加参数不包含在这些 item 配置类型中。

### types-pager-element

```json
{"name":"PagerElementOptions / PagerChangeDetail / ZuiPagerElement","summary":"仅 Web Component 子入口导出的元素选项、事件载荷及实例类型。"}
```

入口 `@zui/pager/web-component`：

```ts
type PagerElementOptions = Pick<PagerInfo, 'page' | 'recTotal' | 'recPerPage'>
    & Pick<PagerOptions, 'items' | 'linkCreator'>;
type PagerChangeDetail = PagerInfo & {originalEvent: Event};
type ZuiPagerElement = InstanceType<typeof ZuiPagerElement>;
```

元素属性与只读 pageTotal、ready、options、setOptions 行为见 [web-component-pager](#web-component-pager)。类型映射扩展 `HTMLElementTagNameMap['zui-pager']`，导入该子入口后 `document.createElement('zui-pager')` 获得元素类型。

## recipes

### recipe-goto

```json
{"name":"输入页码并刷新数据","summary":"通过 goto 的独立 onChange 更新分页，并控制是否继续链接导航。"}
```

browser，使用已加载的 ZUI JS/CSS 和现有 `<div id="goto-pager"></div>`：

```js
const pager = new zui.Pager('#goto-pager', {
    page: 1, recTotal: 101, recPerPage: 10,
    items: [{type: 'goto', text: '跳转', onChange({info}) {
        pager.render(info);
        console.log('加载', info.page);
        return false;
    }}],
});
// 页面卸载时：pager.destroy();
```

goto 不自动进入页码按钮的内部更新路径；回调返回 false 阻止默认跳转，若希望继续 linkCreator 导航则返回 true。无记录时跳转输入与按钮禁用。

## constraints

- 使用 AJAX 分页时通常不设置 linkCreator，或在业务回调里阻止默认链接跳转；组件不会自动请求数据。
- PagerOptions 的顶层 onChange 不替代 onChangePageInfo。goto 使用条目自己的 onChange，也不会自动发出 Web Component 的 zui-change。
- `useState: true` 时外部 page 不用作精确跳页控制；需要外部控制时省略 useState 并回传分页信息。
- 页码链接与当前页的禁用由按钮实现；只拼 `.pager` 的静态 HTML 不具备这些行为。
- Web Component 只映射五个声明选项，不接受完整 PagerOptions；数组、对象、函数必须用 property 赋值。

## references

- [包入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/pager/package.json>)、[原生入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/pager/src/vanilla/index.ts>)、[Preact 入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/pager/src/main-react.ts>)
- [Pager 实现](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/pager/src/component/pager.tsx>)、[子组件导出](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/pager/src/component/index.ts>)、[公开类型](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/pager/src/types/index.ts>)
- [Web Component 定义](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/pager/src/web-component/pager.ts>)、[分页计算](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/pager/src/helpers/update-pager-info.ts>)
- [样式](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/pager/src/style/pager.css>)、[正式 JS 文档](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/pager/docs/lib/components/js.md>)、[静态文档](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/pager/docs/lib/components/index.md>)
