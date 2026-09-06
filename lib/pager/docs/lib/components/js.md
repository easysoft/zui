# 分页生成器

`Pager` 根据总记录数、每页条数和当前页生成[分页控件](/lib/components/pager/)。它负责分页信息和操作界面，数据请求、列表刷新及地址跳转由应用接入。

## 基本使用

::: tabs

== 示例

<Example>
  <ZUI use="pager" :options="pagerOptions" />
  <p class="text-sm text-gray mt-2" role="status">{{ pagerStatus }}</p>
</Example>

== HTML

```html
<div id="resultPager"></div>
```

== JS

```js
const pager = new zui.Pager('#resultPager', {
    page: 1,
    recTotal: 101,
    recPerPage: 10,
    useState: true,
    items: [
        {type: 'info', text: '共 {recTotal} 项'},
        {type: 'link', page: 'prev', text: '上一页'},
        {type: 'nav', count: 5},
        {type: 'link', page: 'next', text: '下一页'},
        {type: 'size-menu', text: '每页 {recPerPage} 项', items: [10, 20, 50]},
    ],
    onChangePageInfo(info, event) {
        console.log('加载分页数据', info.page, info.recPerPage);
    },
});
```

:::

<script setup>
import {ref} from 'vue';
const pagerStatus = ref('第 1 页，每页 10 项');
const pagerOptions = {
    page: 1,
    recTotal: 101,
    recPerPage: 10,
    useState: true,
    items: [
        {type: 'info', text: '共 {recTotal} 项'},
        {type: 'link', page: 'prev', text: '上一页'},
        {type: 'nav', count: 5},
        {type: 'link', page: 'next', text: '下一页'},
        {type: 'size-menu', text: '每页 {recPerPage} 项', items: [10, 20, 50]},
    ],
    onChangePageInfo(info) {
        pagerStatus.value = `第 ${info.page} 页，每页 ${info.recPerPage} 项`;
    },
};
</script>

## 状态与数据请求

`useState: true` 让页码按钮和每页条数菜单更新内部分页状态，适合在 `onChangePageInfo(info, event)` 中请求新数据。组件不会自动请求业务接口。

未启用 `useState` 时，界面以传入的 `page`、`recTotal`、`recPerPage` 为准。应用处理变化后，需要调用 `pager.render(info)` 同步新的分页信息。需要从外部精确设置页码时，推荐使用这种方式。

```js
const pager = new zui.Pager('#resultPager', {
    page: 1,
    recTotal: 101,
    recPerPage: 10,
    items: [{type: 'nav'}],
    onChangePageInfo(info) {
        pager.render(info);
        // 在这里请求并显示该页数据。
    },
});
```

`pageTotal` 根据 `recTotal / recPerPage` 向上取整计算。无记录时 `page` 和 `pageTotal` 都是 `0`；有记录时页码限制在 `1` 到 `pageTotal` 内。每页条数最小为 `1`。

## 分页条目

| `type` | 用途 | 主要选项 |
| --- | --- | --- |
| `info` | 显示分页信息 | `text` 支持 `{page}`、`{recTotal}`、`{recPerPage}`、`{pageTotal}` |
| `link` | 单个翻页按钮 | `page` 支持页码及 `first`、`prev`、`next`、`last`、`current` |
| `nav` | 连续页码和省略号 | `count` 默认 `12`，实际至少显示 5 个位置 |
| `size-menu` | 选择每页条数 | `items` 为数值数组，`text` 支持分页占位符，`dropdown` 配置下拉菜单 |
| `goto` | 输入目标页码并跳转 | `text` 设置按钮文字，`onChange({info, event})` 处理跳转 |

其他条目和按钮选项继承[工具栏生成器](/lib/components/toolbar/js.html)。页码链接在当前页及首尾边界会自动设置不可操作状态。

## 输入页码跳转

`goto` 条目有独立的 `onChange`，不会自动通过页码按钮的内部更新路径刷新分页。无页面跳转的场景可以在该回调中更新控件和业务数据，并返回 `false` 阻止默认链接行为：

```js
const pager = new zui.Pager('#resultPager', {
    page: 1,
    recTotal: 101,
    recPerPage: 10,
    items: [
        {type: 'info', text: '第 {page} / {pageTotal} 页'},
        {type: 'goto', text: '跳转', onChange({info}) {
            pager.render(info);
            return false;
        }},
    ],
});
```

若 `goto.onChange` 需要继续通过链接跳转，应返回 `true`。输入的目标页会限制在有效页码范围内。

## 链接跳转与外观

多页面场景使用 `linkCreator` 生成分页链接：

```js
pager.render({linkCreator: '/tasks?page={page}&recPerPage={recPerPage}'});
```

也可以传入 `(info) => string`。若使用异步加载，应保持 `linkCreator` 为空，或在相应事件中阻止默认跳转。修改每页条数时不会自动重置为第一页；如需重置，由应用计算并回传 `page: 1`。

通过 `size`、`btnType`、`btnProps` 调整按钮外观，通过条目 `btnType` 覆盖单个按钮。例如 `pager.render({btnType: 'secondary', size: 'sm'})`；样式取值参见[按钮](/lib/components/button/)。

## 选项与实例

<Props>
page?: number = 1; // 当前页。
recTotal?: number = 0; // 总记录数。
recPerPage?: number = 10; // 每页条数。
useState?: boolean; // 使用内部翻页状态；默认界面以传入选项为准。
items?: Item[]; // 分页条目，需显式提供。
linkCreator?: string | ((info: PagerInfo) =&gt; string); // 生成翻页地址。
onChangePageInfo?: (info: PagerInfo, event: Event) =&gt; void; // 页码或每页条数菜单发生变化。
size?: "xs" | "sm" | "md" | "lg" | "xl"; // 按钮尺寸。
btnType?: string; // 按钮外观。
btnProps?: Partial&lt;ButtonProps&gt;; // 共享按钮属性。
</Props>

`PagerInfo` 包含数值字段 `page`、`recTotal`、`recPerPage`、`pageTotal`。顶层 `onChange` 不作为通用翻页通知使用；监听页码和条数变化使用 `onChangePageInfo`，监听跳转输入使用条目的 `onChange`。

```js
pager.render({page: 1, recTotal: 58, recPerPage: 20});
const instance = zui.Pager.get('#resultPager');
pager.destroy();
```

外部 `page` 更新应配合未启用 `useState` 的方式使用。移除分页控件时销毁原生实例。

## 模块引入

```ts
import {Pager} from '@zui/pager';
import {Pager as PagerView} from '@zui/pager/react';
import type {PagerOptions, PagerInfo} from '@zui/pager';
```

Preact 的 `render` 从 `preact` 引入，用法为 `render(<PagerView {...options} />, element)`；样式可单独引入 `@zui/pager/css`。
