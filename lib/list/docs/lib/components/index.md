# 列表

`List` 显示带图标、说明、操作和复选框的数据条目；`NestedList` 在此基础上支持多层级展开。需要更基础的渲染能力时，可以使用 [通用列表](/lib/components/common-list/)。

## 基本使用

::: tabs

== 示例

<Example>
  <ZUI use="list" :options="{items: [{id: 'guide', text: '使用指南', icon: 'icon-book', subtitle: '了解基础用法'}, {id: 'settings', text: '设置', icon: 'icon-cog', subtitle: '调整显示选项'}, {id: 'archive', text: '归档', disabled: true}]}" />
</Example>

== HTML

```html
<ul id="documentList"></ul>
```

== JS

```js
const list = new zui.List('#documentList', {
    items: [
        {id: 'guide', text: '使用指南', icon: 'icon-book', subtitle: '了解基础用法'},
        {id: 'settings', text: '设置', icon: 'icon-cog', subtitle: '调整显示选项'},
        {id: 'archive', text: '归档', disabled: true},
    ],
});
```

:::

默认用 `id` 生成字符串键，也可通过 `itemKey` 指定字段。每项应具有稳定且唯一的键。

## 大量数据分批显示

设置 `maxVisibleItems` 可以减少首次显示时创建的条目组件和 DOM。超过上限时，底部显示“剩余 N 项没有显示，点击显示更多”；每次点击按同样的数量追加，最后一批不足时显示剩余全部条目。

::: tabs

== 示例

<Example>
  <ZUI use="list" :options="{maxVisibleItems: 3, showMoreText: '还有 {count} 项，点击继续显示', items: [{id: 'doc-1', text: '使用指南'}, {id: 'doc-2', text: '安装说明'}, {id: 'doc-3', text: '组件目录'}, {id: 'doc-4', text: '主题配置'}, {id: 'doc-5', text: '更新记录'}, {id: 'doc-6', text: '常见问题'}, {id: 'doc-7', text: '贡献指南'}]}" />
</Example>

== HTML

```html
<ul id="largeDocumentList"></ul>
```

== JS

```js
const largeList = new zui.List('#largeDocumentList', {
    maxVisibleItems: 3,
    showMoreText: '还有 {count} 项，点击继续显示',
    items: [
        {id: 'doc-1', text: '使用指南'},
        {id: 'doc-2', text: '安装说明'},
        {id: 'doc-3', text: '组件目录'},
        {id: 'doc-4', text: '主题配置'},
        {id: 'doc-5', text: '更新记录'},
        {id: 'doc-6', text: '常见问题'},
        {id: 'doc-7', text: '贡献指南'},
    ],
});
```

:::

`showMoreText` 支持包含 `{count}` 的字符串，或接收剩余条目数量并返回 `CustomContentType` 的回调。未设置时，使用当前语言的默认提示，支持简体中文、繁体中文和英文。例如，10000 项数据可以每次显示 100 项：

```js
largeList.render({
    items: Array.from({length: 10000}, (_, index) => ({id: `item-${index}`, text: `条目 ${index + 1}`})),
    maxVisibleItems: 100,
    showMoreText: count => `剩余 ${count} 项，点击再显示 100 项`,
});
```

未设置 `maxVisibleItems`、值不大于 `0` 或不是有限数时，不限制显示数量。正数向下取整，小于 `1` 的正数按 `1` 处理。替换 `items` 数据来源或修改上限后，显示数量回到第一批。

分批显示保留完整数据、原始条目索引和勾选状态。普通列表会尽早限制条目处理范围，未显示条目的子列表也不会创建；搜索、自定义过滤和树形勾选仍可能扫描全部数据。随着点击追加，DOM 数量会持续增加，分批显示不等同于滚动虚拟化。

继承自 `List` 的组件同样支持这两个选项，包括 `NestedList`、`Menu`、`Tree`、`Nav` 和 `CardList`。嵌套列表的子级继承设置，每层独立按批次增加；`SearchMenu` 的 `limit` 仍控制允许显示的搜索结果总数，在此范围内再应用分批显示。底部提示可通过 Tab 聚焦，并使用 Enter 或空格键追加条目。

嵌套搜索遇到尚未加载的数据、自定义子级过滤或 `listProps` 覆盖时，会保留无法提前判断的候选分支；余数可能包含展开后才确认无匹配结果的分支，以避免提前加载和创建全部子列表。

## 列表项

| 字段 | 说明 |
| --- | --- |
| `text`、`title`、`subtitle` | 文本、标题和补充说明 |
| `icon`、`avatar` | 图标或头像 |
| `url`、`target` | 链接及打开目标 |
| `disabled` | 禁用条目 |
| `checked` | 初始勾选状态 |
| `active`、`selected` | 条目强调状态 |
| `leading`、`trailing`、`trailingIcon` | 前置、后置内容及后置图标 |
| `actions` | 条目工具栏 |
| `content` | 额外内容 |
| `className`、`style`、`attrs` | 根元素外观及 DOM 属性 |
| `innerComponent`、`innerAttrs` | 条目内部元素及其 DOM 属性 |

`text`、`title`、`subtitle` 等内容支持 `CustomContentType`。除普通条目外，还支持 `heading` 标题、`divider` 分割线和 `space` 间距项。

## 勾选条目

::: tabs

== 示例

<Example>
  <ZUI use="list" :options="{checkbox: true, checkOnClick: true, items: [{id: 'docs', text: '检查文档'}, {id: 'build', text: '检查构建'}]}" />
</Example>

== JS

```js
list.render({
    checkbox: true,
    checkOnClick: true,
    items: [{id: 'docs', text: '检查文档'}, {id: 'build', text: '检查构建'}],
    onCheck(change) {
        const checkedKeys = this.getChecks();
        zui.Messager.show(`已勾选 ${checkedKeys.length} 项`);
    },
});
```

:::

`checkbox` 可以为 `true` 或复选框选项。`checkOnClick: true` 只响应复选框区域；设为 `'any'` 后还响应条目内容和图标，也可传入自定义选择器。`onCheck` 的第一个参数是本次修改的键与状态映射；使用回调中的 `this.getChecks()` 查询完整的当前勾选项。不要把勾选状态与 `active` 激活状态混为一谈。

## 多层级列表

使用 `NestedList`，通过条目的 `items` 定义子级。

::: tabs

== 示例

<Example>
  <ZUI use="nestedList" :options="{items: [{id: 'docs', text: '文档', items: [{id: 'intro', text: '介绍'}, {id: 'api', text: 'API'}]}, {id: 'changes', text: '更新记录'}]}" />
</Example>

== HTML

```html
<ul id="nestedDocuments"></ul>
```

== JS

```js
const nested = new zui.NestedList('#nestedDocuments', {
    items: [
        {id: 'docs', text: '文档', items: [{id: 'intro', text: '介绍'}, {id: 'api', text: 'API'}]},
        {id: 'changes', text: '更新记录'},
    ],
    defaultNestedShow: false,
    accordion: false,
});
```

:::

`defaultNestedShow` 设置初始展开状态；`nestedShow` 可由调用方控制展开状态。两者可以是布尔值或键路径映射。`accordion: true` 用于手风琴式展开，`indent` 默认为 `20` 像素。

嵌套节点通过键路径定位，子级使用父级键加冒号连接，例如 `docs:intro`。`onToggle(keyPath, show, reset)` 返回 `false` 可阻止切换。

## 异步数据

`items` 可使用 ZUI Fetcher 配置，或返回数组的异步函数。组件首次挂载时加载数据，替换数据配置后会重新加载。

```js
list.render({
    items: async () => {
        const response = await fetch('/api/documents');
        if (!response.ok) throw new Error('文档加载失败');
        return response.json(); // 返回列表项数组。
    },
    onLoad(items) {
        return items.filter(item => !item.archived);
    },
    onLoadFail: '暂时无法加载文档，请稍后重试。',
});
```

`onLoad` 可转换加载结果；`onLoadFail` 可使用内容或错误处理函数。需要刷新同一配置时，在实例初始化完成后调用 `list.$?.load()`。

## 常用选项与事件

除 [通用列表选项](/lib/components/common-list/#选项) 外，还支持：

<Props>
maxVisibleItems?: number; // 首次显示及每次追加的条目数量；默认不限制。
showMoreText?: string | ((remaining: number) =&gt; CustomContentType); // 底部提示，字符串中的 {count} 替换为剩余条目数。
divider?: boolean; // 显示条目分割线。
multiline?: boolean; // 多行条目外观。
checkbox?: boolean | CheckboxProps; // 显示复选框。
checkOnClick?: boolean | string; // 点击条目时勾选，可指定匹配元素的选择器。
selectOnChecked?: boolean; // 勾选时应用选中外观。
active?: string | string[] | Record&lt;string, boolean&gt;; // 激活的条目键。
multipleActive?: boolean; // 是否允许多项激活。
activeOnHover?: boolean; // 悬停时激活条目。
hoverItemActions?: boolean; // 悬停时显示条目工具栏。
onActive?: (keys: string[], active: boolean) =&gt; void; // 激活状态变化。
onCheck?: (change: object, checks: string[]) =&gt; void; // 勾选状态变化。
onLoad?: (items: ListItem[]) =&gt; void | ListItem[]; // 数据加载完成。
onLoadFail?: CustomContentType | ((error: Error) =&gt; CustomContentType | void); // 加载失败内容。
afterRender?: (firstRender: boolean) =&gt; void; // 每次渲染后调用。
beforeDestroy?: () =&gt; void; // 销毁前调用。
</Props>

## 实例方法

原生实例使用 `render(options)` 更新选项，内部 Preact 实例通过 `$` 访问。以下方法在初始化完成后使用：

```js
list.render({items: [{id: 'new', text: '新条目'}]});
await list.$?.toggleChecked('new', true);
const checks = list.$?.getChecks();
await list.$?.toggleActive('new', true);
const activeKeys = list.$?.getActiveKeys();
await list.$?.toggleAllChecked(false);
list.destroy();
```

`NestedList` 额外提供 `toggle(keyPath, show?)`、`toggleAll(show)` 和 `isExpanded(keyPath)`。删除容器前应调用原生实例的 `destroy()`。

## 模块引入与键盘交互

```ts
import {List, NestedList} from '@zui/list';
import {List as ListView, NestedList as NestedListView} from '@zui/list/react';
import type {ListProps, ListItem, NestedListProps} from '@zui/list';
```

Preact 入口使用时还需加载包含列表样式的 ZUI CSS。列表不会自动成为键盘菜单；导航项应使用链接，操作项应提供可聚焦的按钮，勾选场景可使用复选框的原生键盘操作。
