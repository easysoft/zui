# 拖拽排序

`Sortable` 基于 SortableJS 为已有 DOM 列表添加拖拽排序。`SortableList`、`SortableTree` 则结合 ZUI 的列表和树组件，通过数据生成可排序内容。

## 基本使用

按住条目前面的拖动区域调整顺序。每个条目使用稳定、唯一的 `data-id`，用于读取和保存排序结果。

::: tabs

== 示例

<Example>
  <ul id="sortableDemo" class="col gap-2">
    <li class="flex items-center gap-2 p-2 border rounded" data-id="docs"><span class="drag-handle cursor-move" title="拖动排序">⠿</span>完善文档</li>
    <li class="flex items-center gap-2 p-2 border rounded" data-id="build"><span class="drag-handle cursor-move" title="拖动排序">⠿</span>验证构建</li>
    <li class="flex items-center gap-2 p-2 border rounded" data-id="release"><span class="drag-handle cursor-move" title="拖动排序">⠿</span>发布版本</li>
  </ul>
</Example>

== HTML

```html
<ul id="releaseSteps" class="col gap-2">
  <li class="flex gap-2 p-2 border rounded" data-id="docs"><span class="drag-handle cursor-move">⠿</span>完善文档</li>
  <li class="flex gap-2 p-2 border rounded" data-id="build"><span class="drag-handle cursor-move">⠿</span>验证构建</li>
  <li class="flex gap-2 p-2 border rounded" data-id="release"><span class="drag-handle cursor-move">⠿</span>发布版本</li>
</ul>
```

== JS

```js
const sortable = new zui.Sortable('#releaseSteps', {
    draggable: 'li',
    handle: '.drag-handle',
    animation: 150,
    onEnd(event) {
        console.log(event.oldIndex, event.newIndex, sortable.toArray());
    },
});
```

:::

拖拽会改变 DOM 顺序。`onEnd` 中可通过 `toArray()` 获取条目 ID 顺序，由应用负责保存；组件不会自动更新服务器数据。

<script setup>
import {onMounted, onBeforeUnmount} from 'vue';
let sortableDemo;
let disposed = false;
onMounted(() => {
    onZUIReady(() => {
        if (disposed) return;
        zui.registerLib('sortablejs', {src: 'sortable/sortable.min.js', root: '/zui/', check: 'Sortable'});
        sortableDemo = new zui.Sortable('#sortableDemo', {draggable: 'li', handle: '.drag-handle'});
    });
});
onBeforeUnmount(() => {
    disposed = true;
    sortableDemo?.destroy();
});
</script>

## 按需资源与初始化

第一次创建实例时会异步加载 `sortable/sortable.min.js`。部署时保留 ZUI 分发包中的此目录，并在创建实例前配置资源根目录。例如资源放在 `/assets/zui/` 时：

```js
zui.setLibRoot('/assets/zui/');
```

这会使排序脚本从 `/assets/zui/sortable/sortable.min.js` 加载。未配置根目录时，相对路径会按当前页面地址解析。

构造完成不代表 SortableJS 已加载。调用 `sort()`、`toArray()`、`save()` 或 `closest()` 前，应等待 `inited` 事件并确认 `module` 存在：

```js
sortable.on('inited', () => {
    if (sortable.module) {
        console.log(sortable.toArray());
    }
});
```

也可以提前调用 `await zui.Sortable.loadModule()` 预加载资源。模块加载后，实例仍需完成自己的初始化。

## 常用选项

<Props>
animation?: number = 150; // 条目移动动画时长，毫秒。
draggable?: string; // 可以拖动的条目选择器，示例为 li。
handle?: string; // 开始拖动的把手选择器；不设置时使用整个条目。
dataIdAttr?: string = "data-id"; // toArray 和 sort 使用的条目 ID 属性。
disabled?: boolean = false; // 禁止拖拽。
sort?: boolean = true; // 允许在当前列表内部排序。
group?: string | object; // 跨列表拖动分组；对象可设置 name、pull、put。
filter?: string | Function; // 不允许开始拖动的目标。
preventOnFilter?: boolean = true; // 对命中过滤条件的事件阻止默认行为。
direction?: "vertical" | "horizontal" | Function; // 排序方向，未指定时自动判断。
ghostClass?: string; // 占位条目的类名。
chosenClass?: string; // 被选中条目的类名。
dragClass?: string; // 拖动中条目的类名。
forceFallback?: boolean = false; // 使用模拟拖拽而非原生 HTML5 拖拽。
dragShadow?: boolean | HTMLElement; // ZUI 扩展；false 隐藏原生拖影，元素用于自定义拖影。
onStart?: (event: SortableEvent) =&gt; void; // 开始拖动。
onEnd?: (event: SortableEvent) =&gt; void; // 拖动结束，包括顺序未变的情况。
onSort?: (event: SortableEvent) =&gt; void; // 列表顺序发生变化。
onAdd?: (event: SortableEvent) =&gt; void; // 条目从其他列表移入。
onRemove?: (event: SortableEvent) =&gt; void; // 条目移入其他列表。
</Props>

`event.item` 是被拖动元素，`from`、`to` 是原容器和目标容器，`oldIndex`、`newIndex` 是变更前后的 DOM 索引。列表混有不可拖动元素时，可使用 `oldDraggableIndex`、`newDraggableIndex` 获取可拖动条目中的索引。

## 实例方法

以下方法在模块初始化完成后调用：

```js
const order = sortable.toArray();
sortable.sort(['release', 'docs', 'build'], true);
sortable.option('disabled', true);
const disabled = sortable.option('disabled');
const item = sortable.closest(document.querySelector('.drag-handle'));
sortable.destroy();
```

`sort(order, useAnimation)` 按完整 ID 数组调整 DOM 顺序；程序调用排序后，应用应同步自己的数据。`save()` 调用配置的 `store.set`，仅在提供 `store` 时才能按相应规则持久化。

## 数据列表和树

`SortableList` 接受 [列表](/lib/components/list/) 的选项，额外通过 `sortable` 配置拖拽，通过 `onSort(event, orders)` 获取当前层级的条目键顺序。

```js
const list = new zui.SortableList('#taskList', {
    items: [
        {id: 'docs', text: '完善文档'},
        {id: 'build', text: '验证构建'},
        {id: 'release', text: '发布版本'},
    ],
    sortable: {animation: 150},
    onSort(event, orders) {
        console.log('新顺序', orders);
    },
});
```

`sortable: false` 可在创建时关闭拖拽。`canSortTo(event, from, to)` 可返回 `false` 拒绝本次移动；`from`、`to` 为列表数据项。

`SortableTree` 接受 [树形菜单](/lib/components/tree/) 的选项。其 `onSort(event, orders, parentKey)` 和 `canSortTo(event, from, to, parentKey)` 额外给出父级键；`orders` 只包含本层级的直接子项。若应用还会重新渲染列表或树，应在排序回调中同步业务数据，避免后续渲染覆盖 DOM 排序结果。

## 模块引入与键盘替代操作

```ts
import {Sortable, SortableList, SortableTree} from '@zui/sortable';
import {SortableList as SortableListView, SortableTree as SortableTreeView} from '@zui/sortable/react';
import type {SortableOptions, SortableEvent} from '@zui/sortable';
```

列表、树及拖动状态的样式需随 ZUI 样式一起加载。拖拽排序本身不提供键盘排序；实际页面应提供“上移”“下移”等按钮，调整业务顺序后调用 `sort()` 或重新渲染，并保留操作后的焦点。
