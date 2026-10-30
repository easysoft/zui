# 高级表格

VTable 在固定区域中展示大量行列，按可见窗口渲染单元格，并可组合排序、行勾选和列宽调整插件。

## 基础用法

每行通过 `getRowId` 提供稳定且唯一的 ID，每列显式指定 `id`。默认高度为 320px、行高为 36px；表头固定，超出区域可以横向和纵向滚动。

::: tabs

== 示例

<Example>
  <ZUI id="projectTable" use="vtable" :options="basicOptions" />
</Example>

== HTML

```html
<div id="projectTable"></div>
```

== JS

```js
const table = new zui.VTable('#projectTable', {
    data: [
        {id: 'project-1', name: '移动端工单', owner: '周敏', progress: 47},
        {id: 'project-2', name: '客户服务中心', owner: '李明', progress: 82},
        {id: 'project-3', name: '研发工作台', owner: '陈华', progress: 26},
    ],
    columns: [
        {id: 'name', accessorKey: 'name', header: '项目', size: 240},
        {id: 'owner', accessorKey: 'owner', header: '负责人', size: 140},
        {id: 'progress', accessorKey: 'progress', header: '进度', size: 140, cell: context => `${context.getValue()}%`},
    ],
    getRowId: row => row.id,
    height: 220,
});
```

:::

更新数据或列定义时传入新数组。排序后行 ID 不变，因而选择状态和按 ID 定位仍指向同一条数据。

```js
table.render({data: nextRows});
table.render({columns: nextColumns});
table.scrollToRow('project-3', {align: 'center'});
table.scrollToColumn('progress', {align: 'end'});
table.destroy();
```

## 自定义内容与空态

`header`、`cell` 和 `empty` 支持 ZUI CustomContent：文本、Preact 节点、元素描述、HTML 描述或返回这些内容的函数。仅把可信 HTML 传入 `html`。表头和单元格回调的第一个参数分别是原生 TanStack header/cell context；第二个参数提供 `table`、`i18n()`、根元素和 `refresh()`。

::: tabs

== 示例

<Example>
  <ZUI id="vtableDocsEmpty" use="vtable" :options="emptyOptions" />
</Example>

== JS

```js
new zui.VTable(element, {
    data: [],
    columns: [{id: 'name', accessorKey: 'name', header: {tag: 'strong', children: '项目名称'}}],
    getRowId: row => row.id,
    empty: {tag: 'p', children: '暂无项目，请添加第一条记录。'},
    height: 180,
});
```

:::

未指定 `empty` 时使用内置文案。`lang` 支持 `zh_cn`、`zh_tw` 和 `en`；可通过 `render({lang: 'en'})` 更新语言。

## 选择插件与分发方式

插件是显式传入的对象，集合在实例创建时确定；增加或删除插件需销毁并重建实例。主入口只包含核心组件，未加载的插件不会隐式启用。

### Workspace 模块入口

在 ZUI workspace 或已配置相应包映射的应用中使用精确子入口：

```ts
import {VTable} from '@zui/vtable';
import {vtableSortingPlugin} from '@zui/vtable/plugins/sorting';
import {vtableRowSelectionPlugin, createVTableSelectionColumn} from '@zui/vtable/plugins/row-selection';
import {vtableColumnResizePlugin} from '@zui/vtable/plugins/column-resize';

const table = new VTable(element, {
    data: [
        {id: 'task-1', title: '完成表格', score: 20, disabled: false},
        {id: 'task-2', title: '验证性能', score: 10, disabled: true},
    ],
    columns: [
        createVTableSelectionColumn(),
        {id: 'title', accessorKey: 'title', header: '任务', size: 240, minSize: 120, maxSize: 600},
        {id: 'score', accessorKey: 'score', header: '分值', size: 140, sortFn: (a, b, columnId) => Number(a.getValue(columnId)) - Number(b.getValue(columnId))},
    ],
    getRowId: row => row.id,
    enableRowSelection: row => !row.original.disabled,
    plugins: [vtableSortingPlugin, vtableRowSelectionPlugin, vtableColumnResizePlugin],
});
```

| 插件 | 行为 |
| --- | --- |
| `vtableSortingPlugin` | 点击或用 Enter／空格操作表头按钮，循环升序、降序、取消；每次只对一列排序，支持列的 `sortFn`。 |
| `vtableRowSelectionPlugin` | 使用 `createVTableSelectionColumn()` 显式插入选择列；支持全选、半选与禁选行。全选范围是当前数据中全部可选行，包含视口外的行。 |
| `vtableColumnResizePlugin` | 拖动列分隔线，松手后提交宽度；拖动中按 Escape、失焦或取消指针时放弃调整。聚焦分隔线后左右键每次调整 10px，Home／End 调到列宽下限／上限。 |

### 浏览器组合构建

仓库提供 `lib/vtable/build.plugins.json`，运行下列命令可生成包含三个插件的 ESM、UMD 与 CSS：

```sh
pnpm build --config lib/vtable/build.plugins.json
```

自定义 JSON 的 `exports.vtable` 会替换默认导出列表，须保留 `{}` 才能同时导出 `VTable`：

```json
{
    "libs": ["vtable"],
    "exports": {
        "vtable": [
            {},
            {"path": "plugins/sorting"},
            {"path": "plugins/row-selection"},
            {"path": "plugins/column-resize"}
        ]
    }
}
```

加载组合产物后，浏览器通过 `zui.vtableSortingPlugin`、`zui.vtableRowSelectionPlugin`、`zui.vtableColumnResizePlugin` 和 `zui.createVTableSelectionColumn()` 使用插件。

**当前源码的 npm 聚合包仅交付核心 `VTable`**，没有插件 npm 子路径；本版本不单独发布 `@zui/vtable` 包。不要将 workspace 路径理解为独立 npm 安装承诺。

## 受控状态

默认状态由引擎管理。受控使用时，`state` 必须与对应的 `onSortingChange`、`onRowSelectionChange` 或 `onColumnSizingChange` 配对。回调收到新值或更新函数，调用方负责计算并回写状态；它们并非只用于通知的事件。

```js
// 此示例使用包含 sorting 插件的组合产物。
let sorting = [];
const table = new zui.VTable(element, {
    data: [{id: 'task-1', title: '验证受控排序'}],
    columns: [{id: 'title', accessorKey: 'title', header: '任务'}],
    getRowId: row => row.id,
    plugins: [zui.vtableSortingPlugin],
    state: {sorting},
    onSortingChange(updater) {
        sorting = typeof updater === 'function' ? updater(sorting) : updater;
        table.render({state: {sorting}});
    },
});
```

实例的 `table` 属性在初始化前为 `null`，初始化后为稳定的 TanStack Table。`table.table.setOptions()` 同样会触发视图更新，排序、选择、列宽操作可以直接使用引擎 API。销毁组件即可清理订阅、虚拟器和插件资源，无需调用引擎的销毁方法。

## Preact

Workspace `/react` 入口提供 Preact 类组件，并公开 `table`、`scrollToRow()`、`scrollToColumn()`：

```tsx
import {VTable} from '@zui/vtable/react';

<VTable
    data={[{id: 'task-1', title: '验证 Preact'}]}
    columns={[{id: 'title', accessorKey: 'title', header: '任务'}]}
    getRowId={row => row.id}
    height={240}
/>
```

## 选项与方法

<Props>
data: TData[]; // 同步行数据；更新时使用新数组。
columns: VTableColumnDef&lt;TData&gt;[]; // 平面列定义，id 必须稳定且唯一。
getRowId: (row: TData, index: number) =&gt; string; // 返回稳定且唯一的行 ID。
plugins?: VTablePlugin&lt;TData&gt;[]; // 创建时确定的插件集合。
width?: number | string = "100%"; // 组件宽度。
height?: number | string = 320; // 滚动区域高度。
rowHeight?: number = 36; // 固定行高及表头高度，必须为正数。
rowOverscan?: number = 5; // 纵向预渲染行数。
columnOverscan?: number = 2; // 横向预渲染列数。
empty?: VTableContent; // 自定义空态内容。
lang?: string; // 显示语言。
</Props>

列的 `size`、`minSize`、`maxSize` 及功能状态沿用 TanStack Table Core 9.2.4。通过 `initialState` 设置初始值，`state` 设置受控值。

| 方法 | 说明 |
| --- | --- |
| `render(options?, reset?)` | 更新原生组件；第二参为 `true` 时沿用 Component 生命周期重置选项及内部引擎状态，须传入完整的 `data`、`columns`、`getRowId` 和需要保留的其他选项，受控状态仍由调用方维护。 |
| `scrollToRow(id, options?)` | 按当前展示顺序定位行，支持 `align`、`behavior`；未挂载或不存在目标时返回 `false`。 |
| `scrollToColumn(id, options?)` | 按 ID 定位列，返回规则同上。 |
| `destroy()` | 销毁原生实例，并清理子组件与插件。 |

公共类型均使用 `VTable` 前缀，包括 `VTableOptions`、`VTableColumnDef`、`VTableEngine`、`VTablePlugin` 和 `VTablePluginContext`。

## 自定义插件

`VTablePlugin` 至少包含 `id`，可提供原生 `features`、`decorateHeader(context)` 和 `mount(context)`。挂载回调返回清理函数；上下文提供 `table`、`rootElement`、`scrollElement`、`i18n()` 和 `refresh()`。

表头装饰通过 `content` 替换标题内容、通过 `extra` 添加独立控件、通过 `attrs` 设置属性。把拖动手柄放在 `extra`，避免嵌套到排序按钮中。重复插件 ID 或互相冲突的 feature 定义会报错，普通单元格通过列定义定制。

## 限制与无障碍

首版支持同步数组、平面列和固定行高。固定列、分页、筛选、树、合并格、编辑、单元格选区、远程数据及可变行高不在当前范围。VTable 与 [DTable](/lib/components/dtable/) 独立并存，不兼容 DTable 旧选项。

表格提供逻辑行列索引和可访问的控件标签。使用 Tab 在控件间移动，按空格操作勾选框，按 Enter／空格排序；首版不提供电子表格式方向键导航。虚拟化仅减少已渲染 DOM，首次构建行模型仍会处理全部数据。

<script setup>
const rows = [
    {id: 'project-1', name: '移动端工单', owner: '周敏', progress: 47},
    {id: 'project-2', name: '客户服务中心', owner: '李明', progress: 82},
    {id: 'project-3', name: '研发工作台', owner: '陈华', progress: 26},
];
const basicOptions = {
    data: rows,
    columns: [
        {id: 'name', accessorKey: 'name', header: '项目', size: 240},
        {id: 'owner', accessorKey: 'owner', header: '负责人', size: 140},
        {id: 'progress', accessorKey: 'progress', header: '进度', size: 140, cell: context => `${context.getValue()}%`},
    ],
    getRowId: row => row.id,
    height: 220,
};
const emptyOptions = {
    data: [],
    columns: [{id: 'name', accessorKey: 'name', header: {tag: 'strong', children: '项目名称'}}],
    getRowId: row => row.id,
    empty: {tag: 'p', children: '暂无项目，请添加第一条记录。'},
    height: 180,
};
</script>
