# 通用列表

`CommonList` 将数据渲染为一组元素，是菜单、工具栏等组件的基础。它不自带选中、搜索或远程加载行为；普通数据列表可使用 `List`。

## 基本使用

下面用内置的 `text` 条目展示文本。`id` 默认用作条目键，应为每项提供稳定且唯一的值。

::: tabs

== 示例

<Example>
  <ZUI use="commonList" :options="{className: 'list-disc pl-5', items: [{id: 'plan', type: 'text', text: '确认发布范围'}, {id: 'docs', type: 'text', text: '完善使用文档'}, {id: 'check', type: 'text', text: '验证发布产物'}]}" />
</Example>

== HTML

```html
<ul id="releaseSteps"></ul>
```

== JS

```js
const list = new zui.CommonList('#releaseSteps', {
    className: 'list-disc pl-5',
    items: [
        {id: 'plan', type: 'text', text: '确认发布范围'},
        {id: 'docs', type: 'text', text: '完善使用文档'},
        {id: 'check', type: 'text', text: '验证发布产物'},
    ],
});
```

:::

根节点默认为 `<ul>`，条目默认为 `<li>`。`component` 可指定其他根元素；通过 `itemProps.component` 设置条目元素时，应保持合理的 HTML 结构。

## 条目定义

| 字段 | 说明 |
| --- | --- |
| `id` | 默认的稳定键字段；可通过 `itemKey` 指定其他字段 |
| `type` | 条目类型，默认为 `item` |
| `children` | 默认条目的内容 |
| `text` | `type: 'text'` 的文本内容 |
| `className`、`style`、`attrs` | 条目的类名、样式和 DOM 属性 |
| `onClick(event, info)` | 当前条目的点击回调 |

内置类型还包括 `divider` 分割线和 `space` 间距项。`space` 条目通过 `space` 设置宽高，通过 `flex` 设置伸缩比例。

```js
list.render({
    className: 'row items-center gap-3',
    items: [
        {id: 'title', type: 'text', text: '文档'},
        {id: 'divider', type: 'divider'},
        {id: 'status', type: 'text', text: '待发布'},
    ],
});
```

## 数据转换与自定义内容

`items` 可以是数组或同步返回数组的函数。需要筛选数据时，可在 `getItems` 中返回新数组：

```js
list.render({
    items: [
        {id: 'public', type: 'text', text: '公开内容', visible: true},
        {id: 'hidden', type: 'text', text: '隐藏内容', visible: false},
    ],
    getItems(items) {
        return items.filter(item => item.visible);
    },
});
```

`itemProps` 定义所有条目的公共属性，`itemPropsMap` 按类型设置公共属性。`getItem` 可在公共属性合并后转换单个条目；`beforeRenderItem` 可在渲染前调整条目。不要在这些回调中直接修改外部共享数据。

`itemRender` 可使用一个函数，或按 `type` 提供函数映射。返回 `undefined` 时使用默认渲染；返回自定义内容时，需要自行选择符合列表结构的元素：

```js
list.render({
    items: [{id: 'docs', text: '使用文档', count: 3}],
    itemRender(item) {
        return {component: 'li', children: `${item.text}（${item.count}）`};
    },
});
```

## 点击事件

`onClickItem(info)` 接收原始条目 `item`、渲染后的条目 `renderedItem`、索引 `index`、鼠标事件 `event` 和可选的 `relativeTarget`。组件随后调用原始条目的 `onClick`。

```js
list.render({
    onClickItem({item}) {
        zui.Messager.show(`点击了 ${item.id}`);
    },
});
```

点击回调不会自动赋予普通列表项键盘交互。需要执行操作时，应把内容渲染为 `<button>` 或链接；需要菜单行为时优先使用菜单组件。

## 选项

<Props>
name?: string; // 根节点的名称及类名前缀，默认为 CommonList。
itemName?: string = "item"; // 条目的公共类名。
itemKey?: string = "id"; // 条目键对应的字段。
items?: Item[] | (() =&gt; Item[]); // 数据或同步数据函数。
itemProps?: Partial&lt;Item&gt;; // 所有条目的公共属性。
itemPropsMap?: Record&lt;string, Partial&lt;Item&gt;&gt;; // 按类型设置公共属性。
getItems?: (items: Item[]) =&gt; Item[] | undefined; // 转换整个数据数组。
getItem?: (item: Item, index: number) =&gt; Item | false | undefined; // 转换单个条目。
beforeRenderItem?: (item: Item, index: number) =&gt; Item | void; // 渲染前调整条目。
itemRender?: ItemRender | Record&lt;string, ItemRender&gt;; // 自定义条目渲染。
onClickItem?: (info: object) =&gt; void; // 条目点击事件。
relativeTarget?: unknown; // 传入点击事件的关联数据。
</Props>

## 更新与查询

原生实例使用 `render(options)` 更新内容，`$` 访问内部 Preact 实例。初始化完成后可以查询数据：

```js
list.render({items: [{id: 'done', type: 'text', text: '已完成'}]});
list.$?.getItems();
list.$?.getItemByIndex(0);
list.$?.getKey(0);
list.destroy();
```

## 模块引入

```ts
import {CommonList} from '@zui/common-list';
import {CommonList as CommonListView} from '@zui/common-list/react';
import type {CommonListProps, Item} from '@zui/common-list';
```

`CommonList` 本身不提供专用外观；示例中的列表样式来自 ZUI 的基础样式和工具类。
