# 列表

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"list","summary":"提供丰富条目、异步数据、选择与复选、分批显示和嵌套展开的原生及 Preact 列表。","keywords":["列表","List","NestedList","Listitem","异步加载","树形数据","复选"]}
```

## overview

List 在 [CommonList](../common-list/ai.md) 上增加丰富条目和状态管理；NestedList 增加父子结构和键路径。Menu、Tree、CardList、FileList 等复用本库。普通业务列表用 List；多级数据用 NestedList；需要菜单或树外观选择 [menu](../menu/ai.md) 或 [tree](../tree/ai.md)。

## setup

workspace `@zui/list` 导出原生 List、NestedList 与类型，加载样式和组件注册；`@zui/list/react` 导出 Preact List、NestedList、Listitem，以及额外 ItemInfo/MouseEventInfo 类型。没有 `/css` 入口，独立 JSX 用法另导入 `@zui/list`。基础主题、Avatar、Checkbox、Toolbar 等按所用内容纳入构建。browser 的 zui.List/zui.NestedList 需包含对应库的 JS/CSS。JSX 使用工作区 Preact 配置。

## vanilla

### vanilla-list

```json
{"name":"List / NestedList","summary":"在现有容器渲染普通或多级列表，包装 Preact 状态和方法。"}
```

`new List(selector, options?: Partial<ListProps>)`；`new NestedList(selector, options?: Partial<NestedListProps>)`。selector 必须匹配现有元素；同类重复实例化报错。ul 容器可能被替换，div 则作为外层容器。`render(options?, reset?): void` 更新，`$` 访问视图实例，`destroy(): void` 卸载，类的 `get(selector)` 获取已有实例；共有契约见 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)。

workspace：

```ts
import {List, NestedList} from '@zui/list';
const flat = document.createElement('div');
const nested = document.createElement('div');
document.body.append(flat, nested);
const list = new List(flat, {items: [{id: 'a', title: '项目 A'}], checkbox: true});
const tree = new NestedList(nested, {items: [{id: 'group', text: '分组', items: [{id: 'a', text: '项目 A'}]}]});
// 页面卸载时：list.destroy(); tree.destroy(); flat.remove(); nested.remove();
```

## preact

### preact-list

```json
{"name":"List","summary":"支持加载、激活、复选及分批显示的 Preact 列表。"}
```

入口 `@zui/list/react`，props 见 [ListProps](#types-list-props)。默认根 ul，普通 item 使用 Listitem；children 追加到数据条目后。ref 为类实例，继承 [CommonList 查询方法](../common-list/ai.md#preact-common-list)，并提供：

| 方法/属性 | 参数与返回 | 行为 |
| --- | --- | --- |
| `setItems(items?, error?)` | Item[]、Error；Promise | 更新加载结果；失败调用 onLoadFail |
| `load()` / `tryLoad()` | 无；void / boolean | 强制加载 / 必要时启动加载；load 不返回完成 Promise |
| `isLazyItems` | 只读 boolean | 是否为非数组动态数据来源 |
| `isChecked(key, index?, defaultChecked=false)` | string、number、CheckedType；CheckedType | 查当前复选状态 |
| `getChecks()` / `isAllChecked()` | 无；string[] / boolean | 获取 true 状态 key / 是否全选 |
| `toggleChecked(keyOrChange, checked?)` | string/string[]/状态映射、boolean；Promise<void> | 更新状态；数组未传 checked 取首项反值 |
| `toggleAllChecked(checked?)` | boolean；Promise<void> | 未传时反转全选 |
| `isActive(keyOrItem)` | string 或 Item；boolean | 判断激活 |
| `getActiveKeys()` / `getActiveKey()` | 无；string[] / string或undefined | 获取激活项 |
| `toggleActive(keys, active?)` | string/string[]、boolean；Promise<void> | 更新激活；省略 active 反转首项 |
| `getNextItem(key, condition?, step=1, items?)` | key 可 undefined；过滤函数 `(item,index)=>boolean`；Item或undefined | 循环寻找可用项；默认排除非 item、disabled、hidden 和未显示项 |
| `getPrevItem(key, condition?)` | 同上；Item或undefined | 反向寻找 |
| `activeNext(condition?, step=1)` / `activePrev(condition?)` / `activeFirst(condition?)` | 同类过滤函数；void | 激活下一、上一或首个可用项；不自动安装键盘事件 |

激活状态由 active props 与内部 activeMap 合并，不能将其简单视作完全受控值。复选用条目 checked 初值和内部状态，变化经 onCheck 通知。unmount 清理内部监听、分批显示观察器及 beforeDestroy 回调。

workspace：

```tsx
import {render} from 'preact';
import {List} from '@zui/list/react';
import '@zui/list';
const container = document.createElement('div');
document.body.append(container);
render(<List items={[{id: 'one', title: '第一项', subtitle: '详细说明'}]} />, container);
// 页面卸载时：render(null, container); container.remove();
```

### preact-nested-list

```json
{"name":"NestedList","summary":"复用 List，并通过冒号键路径管理多级展开、激活与复选联动。"}
```

入口 `@zui/list/react`。props 见 [NestedListProps](#types-nested-list-props)。`nestedShow` 非 undefined 时展开受控，onToggle 通知后由调用方回传；省略时内部状态使用 defaultNestedShow 和 preserve。上例将 List 换成 `<NestedList items={[{id: 'a', text: 'A', items: [{id: 'b', text: 'B'}]}]} />`，导入同名类即可。

额外方法：`toggle(keyPath: string, toggle?: boolean, reset?: boolean): Promise<void>` 指定/反转展开，reset 清除其他记忆；`toggleAll(show: boolean): void` 全部展开/收起；`isExpanded(keyPath)`、`isAllExpanded()` 返回 boolean；`getItemMap(useCache?: boolean): Map<string, ItemInfo>` 获取树映射；`getKeyPath(key: string): string` 将本层 key 加上父路径（根层原样返回）；`isRoot` 为只读 boolean，`nestedShow` 为当前展开配置。getItem/getRenderedItem、选择与导航方法以 keyPath 工作。`onToggle` 返回 false 取消；受控时 toggleAll 不更新内部状态。

### preact-listitem

```json
{"name":"Listitem","summary":"单项视图，组合标题、文字、图标、头像、复选框、动作和自定义内容。"}
```

入口 `@zui/list/react`，props 见 [ListitemProps](#types-listitem-props)，继承 HElement。ref 接收类实例；没有自有选择状态，selected/active/checked 由上层传入。默认内容容器由 innerComponent 决定；有 url 时标题可成为链接。workspace 最小用法沿用 List 的容器与清理，改为 `render(<Listitem title="标题" subtitle="说明" />, container)`。children 由 HElement/条目组合处理，不用于替代 items 数据。

## web-components

无。

## css

### css-list

```json
{"name":".list / .listitem","summary":"可独立使用的列表重置和单项布局。","role":"component"}
```

`.list` 去除列表标记和左缩进；`.listitem` 是水平 flex 条目，带间距、内边距和圆角。browser，已加载 list/主题 CSS：`<ul class="list"><li><div class="listitem"><span class="item-title">项目</span></div></li></ul>`。

### css-list-parts

```json
{"name":"条目部件和辅助状态类","summary":"配合 Listitem 管理内容布局、选择外观、懒显示和嵌套状态。","role":"helper"}
```

`item-icon`、`item-trailing-icon`、`item-avatar`、`item-trailing`、`item-actions` 固定自身尺寸；`item-leading`/`item-trailing` 水平排列；`item-text`/`item-content` 填满剩余宽度；`item-subtitle` 小号弱化；`item-checkbox` 微调间距。`.multiline > .item-content` 纵向布局；`.listitem.selected` 浅色选中，`.listitem.active` 主色激活。`.list-heading-inner .item-title` 为标题样式。`.with-hover-actions` 放在条目父层，悬停显示动作。

`.list-limited`、`.list-show-more` 为分批显示状态和整行按钮；`.is-nested-sub`、`.is-nested-collapsed`、`.nested-toggle-icon` 为嵌套布局和切换图标。JS 生成这些状态时应通过配置或实例方法更新，不手动切换隐藏类。`item-icon-placeholder` 仅用于对齐占位。

## css-variables

### css-list-indent

```json
{"name":"--list-indent / --list-nested-indent","summary":"由嵌套列表计算并用于各层缩进。"}
```

NestedList 渲染根 style 设置 `--list-indent` 为 indent 的 CSS 长度，`--list-nested-indent` 由当前层级和 indent 计算；默认 indent=20。`.list.is-nested-sub` 使用 `--list-indent`。通过 indent/level 配置调整，精确自定义可以在对应列表节点 style 覆盖；不要假设 :root 有这两个变量默认值。其他颜色来自基础主题。

## javascript

无独立工具函数。数据与状态方法见上面的 Preact 类条目。

## types

### types-list-props

```json
{"name":"ListProps / ListItemsSetting / ListItemsFetcher","summary":"列表数据、选择、加载、分批显示和生命周期的完整继承契约。"}
```

`ListProps<T extends Item = ListItem> extends CommonListProps<T>`。所有 [CommonListProps](../common-list/ai.md#types-common-list-props) 和 [HElementProps](../core/ai.md#types-helement-props) 保留，下列字段扩展或覆盖：

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `items` | `ListItemsSetting<T>` | 否 | 无 | 数组或 FetcherSetting<T[]>；函数/URL 等通过 fetchData 获取 |
| `maxVisibleItems` | number | 否 | 无 | 初始显示上限；非正数禁用 |
| `showMoreStep` | number | 否 | maxVisibleItems | 每次增加数量 |
| `autoShowMore` | boolean | 否 | false | 更多按钮进入可见范围时自动增加 |
| `showMoreText` | `string \| ((remaining:number)=>CustomContentType)` | 否 | 内置 i18n 文案 | 字符串 `{count}` 代入剩余数量 |
| `divider` / `multiline` | boolean | 否 | 无 | 条目分隔 / 多行布局 |
| `checkbox` | `boolean \| CheckboxProps` | 否 | 无 | 显示条目复选框 |
| `checkOnClick` | `boolean \| 'any' \| string` | 否 | 无 | true 匹配 .item-checkbox，any 匹配 .item-checkbox/.item-content/.item-icon，其他字符串作为目标选择器；需存在未禁用的复选项 |
| `selectOnChecked` | boolean | 否 | 无 | 勾选后选中外观 |
| `active` | `string \| string[] \| Record<string,boolean>` | 否 | 无 | 外部激活映射，与内部状态合并 |
| `multipleActive` / `activeOnHover` / `hoverItemActions` | boolean | 否 | 无 | 多激活 / 悬停激活 / 悬停动作 |
| `onActive` | `(keys:string[], active:boolean)=>void` | 否 | 无 | 激活状态变化后回调 |
| `onCheck` | `(change:Record<string,CheckedType>, checks:string[])=>void` | 否 | 无 | 勾选变化后回调，this 为列表实例 |
| `onLoad` | `(items:T[])=>void \| T[]` | 否 | 无 | 加载后可返回替代数组 |
| `onLoadFail` | `CustomContentType \| ((error:Error)=>CustomContentType \| void)` | 否 | 错误字符串 | 加载失败内容 |
| `beforeRender` | `(options:ListProps)=>void` | 否 | 无 | 渲染前 |
| `afterRender` | `(firstRender:boolean)=>void` | 否 | 无 | 每次挂载/更新后 |
| `beforeDestroy` | `()=>void` | 否 | 无 | 视图卸载前 |

`ListItemsSetting<T> = ItemsSetting<T> | ListItemsFetcher<T>`；`ListItemsFetcher<T> = FetcherSetting<T[]>`。FetcherSetting 的 URL、请求配置、函数及结果处理见 [core](../core/ai.md)。List 将非数组来源通过 fetchData 加载，并传入列表实例作为参数；不要把 load() 的 void 当作完成 Promise。`CheckedType` 来自 [checkbox](../checkbox/ai.md)。

### types-nested-list-props

```json
{"name":"NestedListProps / NestedItem / NestedListItem","summary":"多级数据、展开控制、图标和父子复选行为。"}
```

`NestedListProps<T extends NestedItem = NestedListItem> extends ListProps<T>`，以下均可省略：

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `parentKey` / `parent` | string / NestedItem | 无 | 内部子层上下文，普通根调用无需设置 |
| `indent` / `level` | number | 20 / 0 | 缩进长度与当前深度 |
| `preserve` | string | 无 | 非空时通过 store 保存展开状态，使用稳定且不同列表不冲突的键 |
| `accordion` | boolean | 无 | 同分支手风琴展开 |
| `nestedShow` | `boolean \| Record<string,boolean>` | 无 | 受控展开，显式传入时不自行修改 |
| `defaultNestedShow` | 同上 | false | 非受控初始展开 |
| `toggleIcons` | `{collapsed?:IconType; expanded?:IconType; normal?:IconType}` | 内置图标 | 三种展开图标 |
| `nestedToggle` | string | 无 | 除展开图标外可触发切换的选择器 |
| `renderCollapsedList` | boolean | 无 | 折叠时仍渲染子层，默认不渲染 |
| `checkedState` | `Record<string,boolean>` | 无 | 向子层传递共享复选映射 |
| `expandChildrenOnCheck` / `toggleOnActive` | boolean | 无 | 勾选后展开 / 激活时切换展开相关行为 |
| `onToggle` | `(key:string,toggle:boolean,reset?:boolean)=>false \| void` | 无 | 展开前通知；false 取消 |

`NestedItem extends Item` 增加 `items?: ListItemsSetting`、`listProps?: NestedListProps`、`expanded?: boolean`、`parentKey?: string`。`NestedListItem = (ListitemProps & NestedItem) | NestedItem | Item`。各层 keyPath 以冒号连接，子层 listProps 可覆盖继承配置。

### types-listitem-props

```json
{"name":"ListitemProps / ListItem","summary":"普通列表项的完整可配置内容和样式字段。"}
```

`ListitemProps extends Item`，所有字段可省略、默认无，行为默认值另外说明：

| 字段 | 类型与用途 |
| --- | --- |
| `innerComponent`, `innerClass`, `innerAttrs` | Preact组件或HTML标签、ClassNameLike、属性对象；配置内部内容节点 |
| `multiline`, `disabled`, `hover`, `active`, `divider`, `selected` | boolean；布局、交互与外观状态 |
| `checked`, `checkbox` | CheckedType、CheckboxProps；checked 非 undefined 时绘制复选框 |
| `toggleIcon`, `leading`, `trailing`, `text`, `title`, `subtitle`, `content` | CustomContentType；对应位置内容；title 未提供时使用 text 作为标题 |
| `icon`, `trailingIcon` | IconType；前后图标 |
| `iconClass`, `leadingClass`, `trailingClass`, `textClass`, `titleClass`, `subtitleClass`, `contentClass`, `trailingIconClass` | ClassNameLike；对应内容的类 |
| `titleAttrs`, `contentAttrs` | `Record<string,unknown>`；对应节点属性 |
| `avatar` | `AvatarOptions \| ((item:Item)=>AvatarOptions)`；头像 |
| `url`, `target` | string；链接和打开方式 |
| `actions` | `ToolbarSetting<[Item]>`；条目工具栏 |
| `hint`, `command` | string；提示和命令 |

继承 Item/HElementProps 见 [Item](../common-list/ai.md#types-item)。`ListItem = ListitemProps | Item`。自定义内容、头像、复选框和工具栏详细契约分别由 core/avatar/checkbox/toolbar 定义。

### types-list-state

```json
{"name":"ListState / NestedListState / ItemInfo / MouseEventInfo","summary":"列表状态快照及嵌套查询、点击信息的结构。"}
```

`ListState<T>` 包含 `items?:T[]`、`loading?:boolean`、`loadFailed?:CustomContentType`、必需 `checked:Record<string,CheckedType>`、`activeMap:Record<string,boolean>`、可选 `visibleItems:{revision:number;count:number}`。`NestedListState<T>` 增加 `nestedShow?:Record<string,boolean>` 和 `defaultShow?:boolean`。不要直接改 state，使用公开方法或 props。

仅 `/react` 额外导出 `ItemInfo`（key、level、keyPath、可选 parentKey/parent、children:ItemInfo[]、data:Item）和 `MouseEventInfo`（index、item、renderedItem、element、target、event、key、keyPath，可选 parentKey/hover）。主入口不转导这两个组件文件内类型。

## recipes

### recipe-limited-list

```json
{"name":"大量条目分批显示","summary":"通过初始上限和更多按钮减少一次渲染数量。"}
```

workspace，复用原生 list：`list.render({maxVisibleItems: 20, showMoreStep: 20, autoShowMore: true})`。该能力改变渲染数量，不是服务端分页；数据请求仍由应用或 items FetcherSetting 负责。

## constraints

- 不修改内部状态类或 Preact 子树。调用原生 destroy 或 Preact 卸载清理资源。
- 稳定 key 是选择、保存展开和数据更新的一致性前提；嵌套业务 key 避免冒号歧义。
- 无内置虚拟滚动；大数据可使用分批显示或 [virtualize](../virtualize/ai.md)。
- 程序 load() 只发起工作，完成应观察 onLoad/onLoadFail；类型和文档不能把它描述成 Promise。

## references

- [公开入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/list/package.json>)、[List](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/list/src/component/list.tsx>)、[NestedList](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/list/src/component/nested-list.tsx>)、[Listitem](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/list/src/component/listitem.tsx>)
- [类型出口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/list/src/types/index.ts>)、[样式](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/list/src/style/index.ts>)
