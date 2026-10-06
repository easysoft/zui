# 拖拽排序

`Sortable` 基于 SortableJS 为已有 DOM 列表添加拖拽排序。`SortableList`、`SortableTree` 则结合 ZUI 的列表和树组件，通过数据生成可排序内容。

## 基本使用

下面是待办需求的优先级列表，可按住条目前面的拖动区域调整处理顺序，也可使用“上移”“下移”按钮。每个条目使用稳定、唯一的 `data-id`，下方实时显示这些 ID 的排列顺序。

两组完整代码假设 ZUI 资源部署在 `/assets/zui/`，并保留其中的 `sortable/sortable.min.js`；路径不同时，请调整 `setLibRoot()` 的参数。

::: tabs

== 示例

<Example>
  <ZUI use="sortable" id="priorityTasks" class="col gap-2" role="list" aria-label="需求优先级" :beforeCreate="prepareSortable" :options="priorityOptions">
    <div class="flex flex-wrap items-center gap-2 p-2 border rounded" role="listitem" data-id="docs">
      <span class="drag-handle cursor-move" title="拖动排序" aria-hidden="true">⠿</span>
      <span class="flex-auto">补充使用指南</span>
      <div class="flex gap-1">
        <button type="button" class="btn size-sm" data-move="-1" aria-label="上移补充使用指南" disabled>上移</button>
        <button type="button" class="btn size-sm" data-move="1" aria-label="下移补充使用指南" disabled>下移</button>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-2 p-2 border rounded" role="listitem" data-id="export">
      <span class="drag-handle cursor-move" title="拖动排序" aria-hidden="true">⠿</span>
      <span class="flex-auto">修复报表导出</span>
      <div class="flex gap-1">
        <button type="button" class="btn size-sm" data-move="-1" aria-label="上移修复报表导出" disabled>上移</button>
        <button type="button" class="btn size-sm" data-move="1" aria-label="下移修复报表导出" disabled>下移</button>
      </div>
    </div>
    <div class="flex flex-wrap items-center gap-2 p-2 border rounded" role="listitem" data-id="preview">
      <span class="drag-handle cursor-move" title="拖动排序" aria-hidden="true">⠿</span>
      <span class="flex-auto">支持附件预览</span>
      <div class="flex gap-1">
        <button type="button" class="btn size-sm" data-move="-1" aria-label="上移支持附件预览" disabled>上移</button>
        <button type="button" class="btn size-sm" data-move="1" aria-label="下移支持附件预览" disabled>下移</button>
      </div>
    </div>
  </ZUI>
  <p id="priorityTasksStatus" class="mt-3 mb-0" role="status" aria-live="polite">正在加载排序功能…</p>
</Example>

== 完整代码

```html
<div id="priorityTasks" class="col gap-2" role="list" aria-label="需求优先级">
  <div class="flex flex-wrap items-center gap-2 p-2 border rounded" role="listitem" data-id="docs">
    <span class="drag-handle cursor-move" title="拖动排序" aria-hidden="true">⠿</span>
    <span class="flex-auto">补充使用指南</span>
    <div class="flex gap-1">
      <button type="button" class="btn size-sm" data-move="-1" aria-label="上移补充使用指南" disabled>上移</button>
      <button type="button" class="btn size-sm" data-move="1" aria-label="下移补充使用指南" disabled>下移</button>
    </div>
  </div>
  <div class="flex flex-wrap items-center gap-2 p-2 border rounded" role="listitem" data-id="export">
    <span class="drag-handle cursor-move" title="拖动排序" aria-hidden="true">⠿</span>
    <span class="flex-auto">修复报表导出</span>
    <div class="flex gap-1">
      <button type="button" class="btn size-sm" data-move="-1" aria-label="上移修复报表导出" disabled>上移</button>
      <button type="button" class="btn size-sm" data-move="1" aria-label="下移修复报表导出" disabled>下移</button>
    </div>
  </div>
  <div class="flex flex-wrap items-center gap-2 p-2 border rounded" role="listitem" data-id="preview">
    <span class="drag-handle cursor-move" title="拖动排序" aria-hidden="true">⠿</span>
    <span class="flex-auto">支持附件预览</span>
    <div class="flex gap-1">
      <button type="button" class="btn size-sm" data-move="-1" aria-label="上移支持附件预览" disabled>上移</button>
      <button type="button" class="btn size-sm" data-move="1" aria-label="下移支持附件预览" disabled>下移</button>
    </div>
  </div>
</div>
<p id="priorityTasksStatus" class="mt-3 mb-0" role="status" aria-live="polite">正在加载排序功能…</p>

<script>
zui.setLibRoot('/assets/zui/');

function showPriorityOrder(sortable) {
    const order = sortable.toArray();
    document.getElementById('priorityTasksStatus').textContent = `当前顺序：${order.join(' → ')}`;
    Array.from(sortable.element.children).forEach((item, index) => {
        item.querySelector('[data-move="-1"]').disabled = index === 0;
        item.querySelector('[data-move="1"]').disabled = index === order.length - 1;
    });
}

const sortable = new zui.Sortable('#priorityTasks', {
    draggable: '[data-id]',
    handle: '.drag-handle',
    animation: 150,
    onSort(event) {
        showPriorityOrder(zui.Sortable.get(event.to));
    },
    $onInited() {
        if (this.destroyed) return;
        if (!this.module) {
            document.getElementById('priorityTasksStatus').textContent = '排序功能加载失败，请检查资源路径后刷新页面。';
            return;
        }
        showPriorityOrder(this);
        this.on('click', (event) => {
            const button = event.target.closest('button[data-move]');
            if (!button) return;
            const item = button.closest('[data-id]');
            const order = this.toArray();
            const from = order.indexOf(item.dataset.id);
            const to = from + Number(button.dataset.move);
            if (to < 0 || to >= order.length) return;
            [order[from], order[to]] = [order[to], order[from]];
            this.sort(order, true);
            showPriorityOrder(this);
            (button.disabled ? item.querySelector('button:not(:disabled)') : button).focus();
        });
    },
});
</script>
```

:::

排序功能初始化完成后按钮才可用；到达首尾时禁用对应方向。用 Tab 聚焦按钮，再按 Enter 或空格移动条目，操作后焦点保留在同一条目的可用按钮上。

拖拽会改变 DOM 顺序。`onSort` 中可通过 `toArray()` 获取条目 ID 顺序，由应用负责保存；组件不会自动更新服务器数据。按钮调用 `sort()` 后也要主动更新顺序提示。

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
draggable?: string; // 可以拖动的条目选择器，示例为 [data-id]。
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
sortable.sort(['preview', 'docs', 'export'], true);
sortable.option('disabled', true);
const disabled = sortable.option('disabled');
const item = sortable.closest(document.querySelector('.drag-handle'));
sortable.destroy();
```

`sort(order, useAnimation)` 按完整 ID 数组调整 DOM 顺序；程序调用排序后，应用应同步自己的数据。`save()` 调用配置的 `store.set`，仅在提供 `store` 时才能按相应规则持久化。

## 数据列表和树

`SortableList` 接受 [列表](/lib/components/list/) 的选项，额外通过 `sortable` 配置拖拽，通过 `onSort(event, orders)` 获取当前层级的条目键顺序。

拖动下面的条目即可调整顺序，`onSort` 回调将返回的条目键顺序显示在列表下方。

::: tabs

== 示例

<Example>
  <ZUI use="SortableList" id="taskList" :beforeCreate="prepareSortable" :options="taskListOptions" />
  <p id="taskListStatus" class="mt-3 mb-0" role="status" aria-live="polite">当前顺序：docs → export → preview</p>
</Example>

== 完整代码

```html
<div id="taskList"></div>
<p id="taskListStatus" class="mt-3 mb-0" role="status" aria-live="polite">当前顺序：docs → export → preview</p>

<script>
zui.setLibRoot('/assets/zui/');
const list = new zui.SortableList('#taskList', {
    className: 'border rounded',
    attrs: {'aria-label': '待办需求列表'},
    items: [
        {id: 'docs', text: '补充使用指南'},
        {id: 'export', text: '修复报表导出'},
        {id: 'preview', text: '支持附件预览'},
    ],
    sortable: {animation: 150},
    onSort(_event, orders) {
        document.getElementById('taskListStatus').textContent = `当前顺序：${orders.join(' → ')}`;
    },
});
</script>
```

:::

`sortable: false` 可在创建时关闭拖拽。`canSortTo(event, from, to)` 可返回 `false` 拒绝本次移动；`from`、`to` 为列表数据项。

`SortableTree` 接受 [树形菜单](/lib/components/tree/) 的选项。其 `onSort(event, orders, parentKey)` 和 `canSortTo(event, from, to, parentKey)` 额外给出父级键；`orders` 只包含本层级的直接子项。若应用还会重新渲染列表或树，应在排序回调中同步业务数据，避免后续渲染覆盖 DOM 排序结果。

## 源码工作区入口与键盘替代操作

以下入口用于 ZUI 源码工作区，需要解析 `@zui/*` 并编译 TypeScript；使用 JSX 时还需配置 Preact。标准 npm 包通过 `zui` 和 `zui/css` 接入，额外的排序资源按前文说明部署。

```ts
import {Sortable, SortableList, SortableTree} from '@zui/sortable';
import {SortableList as SortableListView, SortableTree as SortableTreeView} from '@zui/sortable/react';
import type {SortableOptions, SortableEvent} from '@zui/sortable';
```

列表、树及拖动状态的样式需随 ZUI 样式一起加载。拖拽排序本身不提供键盘排序；实际页面应提供“上移”“下移”等按钮，调整业务顺序后调用 `sort()` 或重新渲染，并保留操作后的焦点。

<script setup>
import {withBase} from 'vitepress';

function prepareSortable() {
    zui.registerLib('sortablejs', {src: 'sortable/sortable.min.js', root: withBase('/zui/'), check: 'Sortable'});
}

function showPriorityOrder(sortable) {
    const order = sortable.toArray();
    document.getElementById('priorityTasksStatus').textContent = `当前顺序：${order.join(' → ')}`;
    Array.from(sortable.element.children).forEach((item, index) => {
        item.querySelector('[data-move="-1"]').disabled = index === 0;
        item.querySelector('[data-move="1"]').disabled = index === order.length - 1;
    });
}

const priorityOptions = {
    draggable: '[data-id]',
    handle: '.drag-handle',
    animation: 150,
    onSort(event) {
        showPriorityOrder(zui.Sortable.get(event.to));
    },
    $onInited() {
        if (this.destroyed) return;
        if (!this.module) {
            document.getElementById('priorityTasksStatus').textContent = '排序功能加载失败，请检查资源路径后刷新页面。';
            return;
        }
        showPriorityOrder(this);
        this.on('click', (event) => {
            const button = event.target.closest('button[data-move]');
            if (!button) return;
            const item = button.closest('[data-id]');
            const order = this.toArray();
            const from = order.indexOf(item.dataset.id);
            const to = from + Number(button.dataset.move);
            if (to < 0 || to >= order.length) return;
            [order[from], order[to]] = [order[to], order[from]];
            this.sort(order, true);
            showPriorityOrder(this);
            (button.disabled ? item.querySelector('button:not(:disabled)') : button).focus();
        });
    },
};

const taskListOptions = {
    className: 'border rounded',
    attrs: {'aria-label': '待办需求列表'},
    items: [
        {id: 'docs', text: '补充使用指南'},
        {id: 'export', text: '修复报表导出'},
        {id: 'preview', text: '支持附件预览'},
    ],
    sortable: {animation: 150},
    onSort(_event, orders) {
        document.getElementById('taskListStatus').textContent = `当前顺序：${orders.join(' → ')}`;
    },
};
</script>
