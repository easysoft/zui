# 菜单

## meta

```json
{"schemaVersion":1,"library":"menu","summary":"提供静态菜单样式、原生与 Preact 菜单生成器，支持嵌套、选择、动态数据及搜索过滤。","keywords":["菜单","menu","搜索菜单","多级菜单","导航","操作列表"]}
```

## overview

用于链接导航、操作列表、分组菜单及可搜索的嵌套菜单。固定内容可只用 CSS；从数据生成使用 `Menu`；过滤数据使用 `SearchMenu`。二者基于 [list](../list/ai.md) 的 NestedList。弹出定位、打开关闭及触发器由 [dropdown](../dropdown/ai.md) 或 [contextmenu](../contextmenu/ai.md) 提供，`popup` 只添加外观类。

## setup

| 环境 | 入口 | 说明 |
| --- | --- | --- |
| workspace | `@zui/menu` | 原生 `Menu`、`SearchMenu`、类型；加载本库样式并注册 Preact 组件名 |
| workspace | `@zui/menu/react` | Preact `Menu`、`SearchMenu` 和类型；单独使用另导入 `@zui/menu/css` |
| workspace | `@zui/menu/css` | 菜单 CSS；基础主题和需要的依赖样式仍应在应用构建中加载 |
| browser | `zui.Menu` / `zui.SearchMenu` | 前提为所用构建包含 menu 及其依赖的 JS/CSS |

workspace 示例要求解析工作区别名、编译 TypeScript；JSX 使用 Preact。`/react` 不表示 React 兼容；不推定独立 npm `@zui/menu` 包或 `zui/menu` 子路径存在。

## vanilla

### vanilla-menu

```json
{"name":"Menu","summary":"在现有容器中创建菜单，通过 render 更新数据并通过 $ 操作嵌套列表。"}
```

签名：`new Menu(selector, options?: Partial<MenuOptions>)`。selector 是可被 Cash 解析的 DOM 元素或选择器，必须找到元素；同一元素重复创建相同组件会报错。`options` 见 [menu-options](#types-menu-options)。`<menu>` 容器可能被同标签视图替换，普通 div 容器内渲染；不同时用另一渲染器管理该子树。

browser，已加载 ZUI JS/CSS：

```html
<div id="file-menu"></div>
<script>
const menu = new zui.Menu('#file-menu', {
    items: [
        {id: 'open', text: '打开', url: '/files'},
        {id: 'export', text: '导出', items: [{id: 'pdf', text: 'PDF'}]},
    ],
    nestedToggle: '.listitem',
    onClickItem({item, event}) {
        if (item.id === 'pdf') {
            event.preventDefault();
            console.log('导出 PDF');
        }
    },
});
// 页面卸载时：menu.destroy();
</script>
```

| 成员 | 参数及返回值 | 用法 |
| --- | --- | --- |
| `render(options?, reset?)` | `Partial<MenuOptions>`、`boolean`；返回 void | 合并新选项并渲染；reset 会调用视图的状态重置 |
| `$` | Preact Menu 实例或 null | 渲染完成后访问列表方法；销毁后为 null |
| `element` / `options` | DOM 元素 / 当前选项 | 读取实例当前宿主和配置 |
| `destroy()` | 无参数；void | 卸载整个 Preact 子树并清理组件绑定 |
| `Menu.get(selector)` | selector；已有实例或 undefined | 查找已创建实例，不创建 |

原生包装继承 `ComponentFromReact`/`Component`，公共初始化选项、事件及管理 API 见 [Component](../core/ai.md#vanilla-component) 和 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)。业务点击通过 options 回调处理，不要将 `onClickItem` 当作自定义 DOM 事件名。

### vanilla-search-menu

```json
{"name":"SearchMenu","summary":"创建带文本搜索和嵌套匹配的菜单，可显示搜索框及无结果提示。"}
```

签名 `new SearchMenu(selector, options?: Partial<SearchMenuOptions>)`；实例生命周期与 [Menu](#vanilla-menu) 相同。选项见 [search-menu-options](#types-search-menu-options)。

workspace：

```ts
import {SearchMenu} from '@zui/menu';

const container = document.createElement('div');
document.body.append(container);
const menu = new SearchMenu(container, {
    searchBox: true,
    noMatchHint: '没有匹配的操作',
    items: [{id: 'create', text: '新建'}, {id: 'archive', text: '归档'}],
});
// 页面卸载时：menu.destroy(); container.remove();
```

## preact

### preact-menu

```json
{"name":"Menu","summary":"Preact 嵌套菜单视图，使用 MenuOptions，并公开列表展开、选择和数据访问方法。"}
```

从 `@zui/menu/react` 导入。props 为 `MenuOptions`；`ref` 接收类组件实例。`nestedShow` 非 undefined 时展开受控，`toggle()` 只通知 `onToggle` 而不更改展开状态，调用方应回传新值；省略时使用 `defaultNestedShow` 作为初始状态。

workspace：

```tsx
import {render} from 'preact';
import {Menu} from '@zui/menu/react';
import '@zui/menu/css';

const container = document.createElement('div');
document.body.append(container);
render(<Menu items={[{id: 'home', text: '首页', url: '/'}]} />, container);
// 页面卸载时：render(null, container); container.remove();
```

#### 常用实例方法

以下方法在 Preact ref 上调用；原生包装通过 `menu.$` 访问。键路径为各层条目 key 以 `:` 连接，条目应具有稳定标识。

| 方法 | 参数及返回 | 行为 |
| --- | --- | --- |
| `toggle(keyPath, toggle?, reset?)` | string、boolean、boolean；`Promise<void>` | 指定或反转展开；reset 清除其他已记忆状态；`onToggle` 返回 false 可取消 |
| `toggleAll(show)` | boolean；void | 非受控模式全部展开/收起 |
| `isExpanded(keyPath)` / `isAllExpanded()` | string / 无；boolean | 读取展开状态 |
| `getItem(keyPath)` / `getRenderedItem(keyPath)` | string | 查询原始/渲染条目；未找到为 undefined |
| `getItemMap(useCache?)` | boolean；`Map<string, ItemInfo>` | 查询完整嵌套条目信息 |
| `setItems(items?, error?)` | Item[]、Error | 更新异步数据状态 |
| `load()` | 无；void | 重新启动动态数据加载；完成用 onLoad/onLoadFail 接收 |
| `toggleActive(keys, active?)` | string 或 string[]、boolean；Promise | 更新激活项 |
| `getActiveKeys()` / `getActiveKey()` | 无 | 获取激活项数组或首个 key |
| `getChecks()` | 无；string[] | 获取选中项键路径 |
| `toggleChecked(keyOrChange, checked?)` | key、key[] 或状态映射；boolean/复选状态 | 更新勾选及嵌套联动状态 |

其余列表查询、键盘导航辅助、异步来源与生命周期继承 [List](../list/ai.md#preact-list)；根 DOM 属性和公共类组件行为继承 [HElementProps](../core/ai.md#types-helement-props)。`Menu.render(setting, args, defaultProps?, thisObject?)` 静态方法见 [menu-render](#javascript-menu-render)。

### preact-search-menu

```json
{"name":"SearchMenu","summary":"Preact 可搜索菜单，复用 Menu 的选项与实例方法。"}
```

从 `@zui/menu/react` 导入，props 为 `SearchMenuOptions`。最小 workspace 用法是在上例中替换为 `<SearchMenu searchBox items={[{id: 'home', text: '首页'}]} />`。

省略 `search` 时内置搜索框管理关键词，初始值来自 `defaultSearch`。显式传 `search` 时外部控制过滤值，内置搜索框被禁用；外部更新 props 即可更新过滤。`nestedSearch` 默认 true，匹配后代时保留祖先；非匹配祖先显示为弱化且不可点击。卸载清理 hover 定时器和列表资源。

## web-components

无。没有公开自定义元素入口或注册函数；组件表注册不等同于 Custom Elements 注册。

## css

### css-menu

```json
{"name":".menu / .menu-item / .menu-heading","summary":"无需 JS 的菜单容器、链接条目和分组标题。","role":"component"}
```

`.menu` 提供背景、内边距和宽度约束；直接子项 `.menu-item` 中放 `<a>` 或 `.item-inner`；标题用 `.menu-heading`。browser，已加载菜单及基础主题 CSS：

```html
<menu class="menu">
  <li class="menu-heading">文件</li>
  <li class="menu-item"><a href="/files"><span class="text">浏览文件</span></a></li>
</menu>
```

### css-menu-helpers

```json
{"name":"菜单结构与状态辅助类","summary":"调整菜单布局、图标、紧凑程度和单项状态。","role":"helper"}
```

| 类 | 必需结构 / 使用节点 | 作用 |
| --- | --- | --- |
| `.menu-wrapper` | 包裹直接子 `.menu` | 纵向 flex；内部菜单可滚动并占据剩余空间 |
| `.compact` | `.menu` 根节点 | 减小条目上下间距和标题高度 |
| `.menu-nested` | 嵌套菜单根节点 | 为后代 `.menu`、搜索头尾设置缩进 |
| `.has-icons` | `.menu-item` 的父节点 | 对 `a > .item-icon` 设置固定尺寸和透明度 |
| `.divider` | `.menu` 直接子节点 | 分隔条间距；分隔线外观由基础样式提供 |
| `.selected` / `.active` / `.hover` | `.menu-item` 的内部链接或内容节点 | 选中或高亮背景和颜色 |
| `.no-hover` | `.menu-item > a` | 取消该链接的 hover 背景与文字色 |
| `.disabled` | `.menu-item` 或其 a | 限制 hover 外观；纯 CSS 不负责阻止导航 |
| `.text` / `.item-title` | 条目中的文本节点 | 弹性布局与文本裁剪 |

`popup`、滚动条、通用列表与图标样式由其他库提供；本库只按选项输出类名。

### css-search-menu

```json
{"name":".search-menu 及匹配状态类","summary":"SearchMenu 管理的头尾、匹配项和空结果提示样式。","role":"js-component"}
```

外层 `.search-menu` 配合内部 `.menu`。`.search-menu-header`、`.search-menu-footer` 为头尾容器；`.search-menu-no-match-hint` 和 `.search-menu-exceed-limit-hint` 显示提示；`.is-match-keys` 标记命中文字。`.is-not-match`、`.has-match-child`、`.no-match-child`、`.no-toggle-on-search` 由搜索组件维护，控制隐藏、祖先保留和展开图标交互；应更新组件选项或数据而非手工操作这些状态类。`.is-search-mode` 与 `.search-menu-on-top/bottom` 为输出的状态/位置标记，本库未单独定义它们的视觉规则。

## css-variables

### css-menu-variables

```json
{"name":"菜单主题与尺寸变量","summary":"控制背景、高亮、标题、图标及嵌套缩进。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--menu-bg` | `var(--color-canvas)` | 菜单背景 | `:root` | `.menu` 或主题容器 |
| `--menu-active-bg` | `var(--color-primary-500)` | 高亮背景 | `:root` | `.menu` |
| `--menu-active-color` | `var(--color-canvas)` | 高亮文字色 | `:root` | `.menu` |
| `--menu-selected-bg` | `var(--color-primary-50)` | 选中背景 | `:root` | `.menu` |
| `--menu-selected-color` | `var(--color-primary-500)` | 选中文字色 | `:root` | `.menu` |
| `--menu-icon-opacity` | `.5` | 图标不透明度 | `:root` | `.menu` |
| `--menu-icon-margin` | `1.75rem` | 已声明但本库当前 CSS 未消费 | `:root` | 不建议依靠其调整当前布局 |
| `--menu-min-width` | `3rem` | 最小宽度 | `:root` | `.menu` |
| `--menu-max-width` | 无 | 最大宽度；未定义时此项声明无效 | 本库不声明默认值 | `.menu` |
| `--menu-heading-color` | `var(--color-gray-500)` | 分组标题色 | `:root` | `.menu` |
| `--menu-indent` | `10px` | 嵌套菜单 CSS 缩进 | `.menu-nested` | 目标 `.menu-nested` |

## javascript

### javascript-menu-render

```json
{"name":"Menu.render","summary":"把数组、选项对象或选项工厂统一转换为 Preact 菜单 VNode。"}
```

仅是 `@zui/menu/react` 的 Preact 类静态成员，不是原生实例 `.render()`。签名 `Menu.render<T extends unknown[]>(setting: MenuSetting<T> | undefined, args: T, defaultProps?: Partial<MenuOptions> & Attributes, thisObject?: unknown)`。setting 为函数时以 args 调用，this 为 thisObject 或调用上下文；数组转为 `{items}`，setting 覆盖 defaultProps；无有效 setting 返回 undefined，否则返回菜单 VNode。

workspace 示例：`const view = Menu.render([{id: 'home', text: '首页'}], []);`，其中 Menu 从 `@zui/menu/react` 导入。

### javascript-search-menu-helpers

```json
{"name":"SearchMenu.getSearchKeys / isItemMatch / underlineKeys","summary":"从 Preact SearchMenu 类访问关键词解析、条目匹配和高亮片段生成。"}
```

均位于 `@zui/menu/react` 的 SearchMenu 静态成员，不是独立顶层导出。

| 方法 | 参数与默认值 | 返回与行为 |
| --- | --- | --- |
| `getSearchKeys(search = '')` | string | string[]；小写、按空格分隔、去空项与重复项 |
| `isItemMatch(item, searchKeys, searchProps = ['keys', 'text', 'title', 'subtitle'])` | Item、string[]、字段名或 `(item) => string \| undefined` 数组 | boolean；每个关键词均须匹配至少一个字符串字段；忽略大小写；空关键词匹配全部 |
| `underlineKeys(searchKeys, text, className = 'is-match-keys')` | string[]、string[]、string | `ComponentChild[]`；将命中片段包装为 span，保留原文字大小写 |

workspace：`SearchMenu.getSearchKeys('File  OPEN file')` 返回 `['file', 'open']`，其中 SearchMenu 从 `@zui/menu/react` 导入。传给 `isItemMatch` 的 searchKeys 应先规范为小写。

## types

### types-menu-options

```json
{"name":"MenuOptions / MenuItemOptions / MenuSetting","summary":"菜单选项、嵌套条目和动态菜单设置的公开类型。"}
```

均从 `@zui/menu` 或 `/react` 导入类型。`MenuOptions<T extends MenuItemOptions>` 继承 `NestedListProps<T>`；下表字段均可省略。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `items` | `ListItemsSetting<T>` | 否 | 无 | 数组、返回数组的函数或列表 FetcherSetting；异步来源遵循 list |
| `itemKey` | string | 否 | `'id'`（继承 CommonList） | 稳定键字段；回退到 key 或数组下标 |
| `wrap` | boolean | 否 | 无 | 包裹外层 menu，启用头尾、尺寸及 hover 监听 |
| `wrapAttrs` / `wrapClass` | `Record<string, unknown>` / `ClassNameLike` | 否 | 无 | 外层属性与附加类 |
| `height` / `maxHeight` | `SizeSetting` | 否 | 无 | 原样传入外层 style；需 wrap；推荐 CSS 长度或数值，不假设函数在此被求值 |
| `header` / `footer` | `CustomContentType` | 否 | 无 | 外层头尾内容；需 wrap |
| `popup` / `compact` | boolean | 否 | 无 | 弹出外观 / 紧凑样式，不负责显示定位 |
| `scrollbarThin` / `scrollbarHover` | boolean | 否 | 无 / true | wrap 时内层滚动条类 |
| `nestedTrigger` | `'click' \| 'hover'` | 否 | 未指定时使用点击路径 | hover 需 wrap 才安装容器监听 |
| `defaultNestedShow` | `boolean \| Record<string, boolean>` | 否 | false | 初始展开状态 |
| `nestedShow` | `boolean \| Record<string, boolean>` | 否 | 无 | 受控展开状态 |
| `nestedToggle` | string | 否 | 无 | 点击切换目标选择器；默认展开图标仍可点击 |
| `accordion` | boolean | 否 | 无 | 展开时收起同分支其他展开项 |
| `indent` / `level` | number | 否 | 20 / 0 | 继承列表的缩进与层级参数 |
| `onToggle` | `(key: string, toggle: boolean, reset?: boolean) => false \| void` | 否 | 无 | 展开前通知；false 取消 |
| `onClickItem` | `(info: {item: T; index: number; event: MouseEvent; renderedItem: T; relativeTarget?: unknown}) => void` | 否 | 无 | 单项点击；用 event.preventDefault 阻止链接默认行为 |

其他继承字段：`itemProps`、`itemPropsMap`、`getItem`、`getItems`、`itemRender`、`beforeRenderItem`、`relativeTarget` 见 [CommonListProps](../common-list/ai.md#types-common-list-props)；选择、复选、分页显示限制、加载、`onLoad`/`onLoadFail`、`beforeRender`/`afterRender`/`beforeDestroy`、展开状态保存与检查联动见 [ListProps](../list/ai.md#types-list-props) 和 [NestedListProps](../list/ai.md#types-nested-list-props)；根元素参数见 [HElementProps](../core/ai.md#types-helement-props)。本库没有删除这些继承字段。

`MenuItemOptions` 是 `NestedListItem` 别名。常用字段 `id`/`key` 为稳定标识，`type` 为 `'item'`、`'heading'`、`'divider'` 等条目类型，`text`/`title`/`subtitle`/`content` 为 CustomContentType，`icon`/`trailingIcon` 为 IconType，`url`/`target` 为 string，`disabled`/`active`/`selected` 为 boolean，`items` 为子项来源，`listProps` 为该层列表配置。单项 `onClick(event, data?)` 接收鼠标事件。详细条目类型继承 list/CommonList，无需将未用属性填满。

`MenuSetting<T extends unknown[] = []> = MenuItemOptions[] | MenuOptions | ((...args: T) => MenuItemOptions[] | MenuOptions)`，用于静态 `Menu.render()`。

### types-search-menu-options

```json
{"name":"SearchMenuOptions / SearchMenuState","summary":"搜索框、关键词、嵌套匹配和结果上限的公开选项。"}
```

`SearchMenuOptions` 继承 MenuOptions；额外默认值为 `wrap: true`、`defaultNestedShow: true`。以下均可省略。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `searchBox` | `boolean \| SearchBoxOptions` | 否 | 无 | true 显示搜索框，对象覆盖内置 compact/onChange 等搜索框选项 |
| `searchPlacement` | `'top' \| 'bottom'` | 否 | `'top'` | 搜索框位置；nestedSearch 时只在根菜单显示 |
| `search` / `defaultSearch` | string | 否 | 无 | 受控 / 初始关键词；search 优先且禁用内置输入 |
| `nestedSearch` | boolean | 否 | true | 搜索后代并保留命中祖先 |
| `expandOnSearch` | boolean | 否 | 无 | 有关键词时展开，并限制折叠图标交互 |
| `underlineKeys` | boolean | 否 | true | 高亮 text/title/subtitle/content 中的匹配文字 |
| `searchProps` | string[] | 否 | `['keys', 'text', 'title', 'subtitle']` | 默认匹配的字段 |
| `noMatchHint` | string | 否 | 无 | 无匹配提示 |
| `headerClass` / `footerClass` | `ClassNameLike` | 否 | 无 | 头尾容器附加类 |
| `limit` | number | 否 | 200 | 根层匹配项展示限制；0 关闭此限制 |
| `exceedLimitHint` | string | 否 | 无 | 超限提示；`{0}` 为超出数量 |
| `isItemMatch` | `(item: NestedItem, searchKeys: string[], index: number, parentKey: string \| undefined) => boolean` | 否 | 内置字段匹配 | 自定义匹配；在对应菜单实例上下文调用 |

`SearchMenuState extends NestedListState`，增加可选 `search?: string`；属于视图状态，外部应通过 props/实例公开方法更新，不直接修改 state。SearchBoxOptions 见 [search-box](../search-box/ai.md)。

## recipes

### recipe-update-menu

```json
{"name":"更新菜单与展开分支","summary":"通过包装实例更新数据，通过视图实例控制嵌套展开。"}
```

browser，复用 [Menu 示例](#vanilla-menu) 的实例：

```js
menu.render({items: [{id: 'export', text: '导出', items: [{id: 'csv', text: 'CSV'}]}]});
await menu.$?.toggle('export', true);
```

设置了受控 `nestedShow` 时改为 `menu.render({nestedShow: {export: true}})`。异步数据在 `onLoad` 或 `afterRender` 后访问已渲染条目；`load()` 返回 void，不能用 await load() 作为加载完成保证。

## constraints

- 本库不承担 popup 定位；静态 `.disabled` 只影响样式，需自行阻止操作。
- 嵌套 key 使用冒号串联，业务 key 应保持稳定并避免与路径分隔含义冲突。
- 设置 `search` 会禁用内置搜索框；若需要外部输入，应更新 search，不绕过状态修改内部 DOM。
- Menu 的 hover 监听安装在外层容器，需 `wrap: true`；SearchMenu 默认已开启 wrap。
- CustomContentType 可含动态内容，应用应按 core 内容契约处理可信 HTML，不能把任意字符串都当作可信标记。

## references

- [包与公开入口](package.json)、[原生包装](src/vanilla/index.ts)、[Preact 入口](src/main-react.ts)
- [Menu 实现](src/component/menu.tsx)、[SearchMenu 实现](src/component/search-menu.tsx)
- [类型出口](src/types/index.ts)、[样式](src/style/index.ts)
- [静态菜单文档](docs/lib/components/index.md)、[JS 文档](docs/lib/components/js.md)
