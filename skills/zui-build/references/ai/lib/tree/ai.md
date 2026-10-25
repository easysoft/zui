# 树形列表

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"tree","summary":"提供 Tree 与 SearchTree，支持层级、连线、状态图标、分支动作和搜索。","keywords":["树","Tree","SearchTree","目录","层级"]}
```

## overview

Tree 是 Menu 的树形外观，SearchTree 在 SearchMenu 上增加树形图标与动作。适合目录、组织和层级分类。复选与展开继承 NestedList，不提供完整 ARIA tree 键盘行为。

## setup

workspace `@zui/tree` 导出原生 Tree/SearchTree、类型、注册和样式；`@zui/tree/react` 为 Preact Tree/SearchTree 与类型；`@zui/tree/css` 为样式。browser 需包含 tree/menu/list 等依赖。JSX 需 Preact，单独导入 /react 时另引 /css。

## vanilla

### vanilla-tree

```json
{"name":"Tree / SearchTree","summary":"创建树列表或可搜索树。"}
```

`new Tree(selector, options?:Partial<TreeOptions>)`、`new SearchTree(selector, options?:Partial<SearchTreeOptions>)`；selector 为现有元素。render 更新，destroy 卸载，$ 暴露视图方法；共有包装契约见 core。

workspace：

```ts
import {Tree, SearchTree} from '@zui/tree';
const first = document.createElement('div');
const second = document.createElement('div');
document.body.append(first, second);
const items = [{id: 'root', text: '目录', items: [{id: 'child', text: '文档'}]}];
const tree = new Tree(first, {items, lines: true});
const search = new SearchTree(second, {items, searchBox: true});
// 页面卸载时：tree.destroy(); search.destroy(); first.remove(); second.remove();
```

## preact

### preact-tree

```json
{"name":"Tree / SearchTree","summary":"菜单派生的树形视图，保留展开、查询和选择方法。"}
```

workspace（需配置工作区别名、TypeScript 与 Preact JSX）：

```tsx
import {render} from 'preact';
import {Tree} from '@zui/tree/react';
import '@zui/tree/css';
const container = document.createElement('div');
document.body.append(container);
render(<Tree items={[{id: 'a', text: '目录', items: [{id: 'b', text: '文档'}]}]} />, container);
// 页面卸载时：render(null, container); container.remove();
```
SearchTree 用法为替换组件并加 `searchBox`。Tree ref 方法见 [Menu](../menu/ai.md#preact-menu)，SearchTree 见 [SearchMenu](../menu/ai.md#preact-search-menu)。Tree 默认 indent=12，SearchTree 继承 SearchMenu 的 indent=20、wrap=true、defaultNestedShow=true 等默认值，不能套用 Tree 的 12。内部普通条目为 div。children 与状态约定继承相应父类。

## web-components

无。

## css

### css-tree

```json
{"name":".tree 及部件","summary":"配合树视图的行、图标、动作与选中布局。","role":"js-component"}
```

.tree-item-inner 使用 --list-nested-indent 设置缩进，内部图标和工具栏在 hover 增强；.tree-toggle 为展开图标区域；.tree-item > .active/.selected 使用 menu 的选中色；.tree-lines 在树根开启连线，后代 .tree 生成竖线。状态和层级由组件维护，普通使用不手工写展开/选中类。

## css-variables

### css-tree-vars

```json
{"name":"树缩进与主题","summary":"复用列表和菜单变量，并计算连接线缩进。"}
```

`--tree-line-indent: calc(var(--list-nested-indent) + 8px)` 声明在 `.tree-lines .tree-item`，用于后代连接线；推荐用 indent 选项控制层级，特殊外观在目标条目覆盖。`--list-nested-indent` 由 NestedList 按 level*indent 写入，`--menu-active-bg/color`、`--menu-selected-bg/color` 继承菜单主题，详见 [menu](../menu/ai.md#css-menu-variables)。

## javascript

### javascript-tree-item

```json
{"name":"Tree.getTreeItem","summary":"为树条目补默认图标和动作。"}
```

`Tree.getTreeItem(props:TreeOptions,item:false|NestedItem):false|NestedItem`，仅从 /react 的 Tree 类访问。false 原样返回；type=item 时只有 icon/actions 为 undefined 才补入。该函数直接修改传入 item，不是纯函数。workspace：`Tree.getTreeItem({normalIcon: 'file'}, {type: 'item', text: '文档'})`。

## types

### types-tree-options

```json
{"name":"TreeOptions / SearchTreeOptions / TreeState","summary":"树特有配置及完整继承关系。"}
```

`TreeOptions<T extends NestedItem=NestedListItem> extends MenuOptions<T>`；全部专有参数可选且默认无：`lines?:boolean` 开启连线；`itemActions?:ListitemProps['actions']` 为共享动作；`collapsedIcon/expandedIcon/normalIcon?:IconType` 分别是有子项折叠/展开、叶节点图标。条目显式 icon/actions 优先。

SearchTreeOptions 同时继承 SearchMenuOptions 和 TreeOptions，增加/保留相同动作和图标字段；搜索关键词、searchBox、limit、回调详见 [SearchMenuOptions](../menu/ai.md#types-search-menu-options)，普通菜单/嵌套参数见 [MenuOptions](../menu/ai.md#types-menu-options) 和 [NestedListProps](../list/ai.md#types-nested-list-props)。TreeState 是 NestedListState 别名，不直接修改，使用公开方法。

## recipes

### recipe-tree-expand

```json
{"name":"展开指定树节点","summary":"使用稳定键路径操作。"}
```

workspace，复用 tree：`await tree.$?.toggle('root', true)`；多级路径如 root:child。传入 nestedShow 时改为 render 回传受控映射。

## constraints

- 树图标和分支动作不自动请求或保存业务数据。
- SearchTree 搜索受控规则与 SearchMenu 相同：显式 search 会禁用内部搜索输入。

## references

- [入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/tree/package.json>)、[Tree](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/tree/src/components/tree.tsx>)、[SearchTree](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/tree/src/components/search-tree.tsx>)、[类型](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/tree/src/types/index.ts>)、[样式](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/tree/src/style/index.ts>)
