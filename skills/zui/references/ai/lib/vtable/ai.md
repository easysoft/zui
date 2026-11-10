# 高级表格

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"vtable","summary":"按可见行列渲染固定行高的宽表，提供可选的排序、勾选和列宽插件。","keywords":["高级表格","宽表","双轴虚拟化","vtable","TanStack Table"]}
```

## overview

VTable 使用 TanStack Table Core 9.2.4 管理行列模型，通过 [Virtualize](../virtualize/ai.md) 分别计算横向、纵向窗口，只创建可见范围与 overscan 范围内的单元格。适用于同步数组、平面列和固定行高的宽表。

与 [DTable](../dtable/ai.md) 独立并存，不兼容 DTable 选项，也不替代其固定列、树、分页、编辑等插件。虚拟化限制 DOM 数量，不消除全量行模型的初始化、排序和内存成本。

## setup

| 环境 | 接入方式 |
| --- | --- |
| workspace | `@zui/vtable` 导出原生类及公共类型，自动接入基础样式和组件注册；`@zui/vtable/react` 导出 Preact 类及公共类型；`@zui/vtable/css` 仅接入样式。必须解析工作区包并编译 TypeScript/Preact JSX。 |
| browser | 加载包含 `vtable` 的 ZUI JS/CSS 后使用 `zui.VTable`。默认全量构建只含核心；插件须通过 [组合构建配置](<https://github.com/easysoft/zui/blob/749985e4f151843879d42ab8aa842357bbc4d74f/lib/vtable/build.plugins.json>) 显式导出。 |
| npm | 当前源码的标准 `zui` 候选包导出核心 `VTable` 和 `VTable` 前缀类型，样式为 `zui/css`；不提供插件、Preact 或 `zui/vtable` 子路径。以目标已发布版本的实际导出为准。 |

原生主入口注册 `VTable`，可由 ZUI 创建器使用 `zui-create="vtable"`；复杂列定义和回调仍须由 JavaScript 传入。没有专属 Web Component。

插件的 workspace 子入口为 `@zui/vtable/plugins/sorting`、`@zui/vtable/plugins/row-selection`、`@zui/vtable/plugins/column-resize`。各插件导入其样式，行选择插件还复用 Checkbox。运行时依赖为 `@tanstack/table-core`、其 `@tanstack/store` 依赖、Preact、ZUI Core 和 Virtualize。

## vanilla

### vanilla-vtable

```json
{"name":"VTable","summary":"创建双轴虚拟表格，更新数据并按稳定 ID 定位行列。"}
```

#### 构造与选项

`new VTable<TData, TFeatures>(element, options)` 接受 ZUI Selector；继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react) 的实例关联、异步初始化、`render`、事件和销毁机制。

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `data` | `TData[]` | 是 | 无 | 同步行数据；更新时传入新数组。 |
| `columns` | `readonly VTableColumnDef<TData, TFeatures>[]` | 是 | 无 | 平面列，必须有唯一非空 `id`；不支持嵌套 columns。 |
| `getRowId` | `(row: TData, index: number) => string` | 是 | 无 | 返回唯一非空字符串，不随排序改变。 |
| `plugins` | `readonly VTablePlugin<TData, TFeatures>[]` | 否 | `[]` | 创建后不能更换集合或其中对象；改变插件须重建实例。 |
| `width` / `height` | `number \| string` | 否 | `'100%'` / `320` | 滚动区域尺寸；数字单位为 px。 |
| `rowHeight` | `number` | 否 | `36` | 行与表头的固定高度，必须为正有限数。 |
| `rowOverscan` / `columnOverscan` | `number` | 否 | `5` / `2` | 可见窗口前后预渲染的行数、列数。 |
| `empty` | `VTableContent<VTableEngine>` | 否 | 本地化空态 | 仅无行时显示；生成函数收到 engine 与组件上下文。 |
| `lang` / `i18n` | 继承 `HElementProps` | 否 | Core 当前语言 | 内置 `zh_cn`、`zh_tw`、`en`；支持运行时更新。 |
| `initialState` / `state` | TanStack Table 状态 | 否 | 引擎默认值 | 初始非受控值 / 调用方拥有的受控值。 |

其他 DOM/内容选项继承 [HElementProps](../core/ai.md#types-helement-props)，其余引擎选项继承 Table Core 9.2.4 的 `TableOptions`。`onSortingChange`、`onRowSelectionChange`、`onColumnSizingChange` 等回调收到新值或 `(previous) => next` 更新函数；受控时调用方必须回写 `state`，它们不是单纯通知事件。

#### 实例成员

| 成员 | 返回及行为 |
| --- | --- |
| `table` | 初始化前及销毁后为 `null`；挂载后为稳定的 TanStack Table 实例。 |
| `render(options?, reset?)` | 沿用基类返回 `void`；普通更新合并选项；`reset=true` 时传入完整必选项及需保留选项，重置引擎状态。 |
| `scrollToRow(id, options?)` | 返回 `boolean`；未挂载或当前行模型中不存在 ID 返回 `false`；接受后在下一次渲染完成时定位当前索引。 |
| `scrollToColumn(id, options?)` | 返回 `boolean`；未挂载或列不存在返回 `false`；接受后渲染并定位。 |
| `destroy()` | 沿用基类，卸载视图并清理订阅、虚拟器与插件。 |

定位选项为 Virtualize 的 `ScrollToOptions`，包括 `align: 'start' \| 'center' \| 'end' \| 'auto'` 和 `behavior: 'auto' \| 'smooth' \| 'instant'`。返回 `true` 表示已接受请求，不代表滚动动画结束。

稳定 ID、数据/列数组和插件冲突会抛出错误。原生静态 `NAME='VTable'`，`get/ensure/register` 等能力继承 [Component](../core/ai.md#vanilla-component)。

#### 最小示例

browser，先加载包含 VTable 的 ZUI CSS/JS：

```html
<div id="projects"></div>
<script>
const table = new zui.VTable('#projects', {
    data: [{id: 'p1', title: '项目一'}],
    columns: [{id: 'title', accessorKey: 'title', header: '项目', size: 240}],
    getRowId: row => row.id,
    height: 240,
});
// 数据变化时：table.render({data: nextRows});
// 宿主卸载时：table.destroy();
</script>
```

## preact

### preact-vtable

```json
{"name":"VTable","summary":"通过 Preact Props 渲染表格，并通过 ref 访问引擎与定位方法。"}
```

workspace，`@zui/vtable/react` 的 `VTable` 继承 HElement，是 Preact 类而非 React 组件。`VTableProps` 与上述 `VTableOptions` 相同，公开 `table`、`scrollToRow`、`scrollToColumn`、`resetState`。组件 ref 指向类实例；`forwardRef` 指向滚动根元素。数据、列和受控状态变化时提供新引用，卸载时自动清理资源。

```tsx
import {h, render} from 'preact';
import {VTable} from '@zui/vtable/react';

render(<VTable
    data={[{id: 'p1', title: '项目一'}]}
    columns={[{id: 'title', accessorKey: 'title', header: '项目'}]}
    getRowId={row => row.id}
    height={240}
/>, document.getElementById('projects')!);
// 宿主卸载时调用 render(null, host)。
```

## web-components

无。

## css

### css-vtable

```json
{"name":".vtable","summary":"VTable 管理的滚动根节点与表格部件。","role":"js-component"}
```

由组件生成 `.vtable`、`.vtable-header`、`.vtable-header-cell`、`.vtable-header-content`、`.vtable-body`、`.vtable-row`、`.vtable-cell`、`.vtable-empty`。不要手工改写虚拟行列节点。表头 sticky、行列绝对定位，尺寸由引擎与虚拟器设置；根节点可获得键盘焦点。

插件维护 `.vtable-sort-button`、`.vtable-sort-indicator`、`.vtable-selection`、`.vtable-selection-label`、`.vtable-resize-handle`、`.vtable-resize-guide`；这些部件不构成独立 CSS 组件。

## css-variables

### vars-vtable

```json
{"name":"VTable CSS 变量","summary":"在目标表格节点定制表头、边框和单元格间距。","role":"js-component"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--vtable-row-height` | `36px` | 由 `rowHeight` 写入内联值，行与表头高度 | `.vtable` | 通过 `rowHeight` 选项更新 |
| `--vtable-border-color` | `var(--color-border)` | 边框色 | `.vtable` | 目标 `.vtable` |
| `--vtable-header-bg` | `var(--color-surface)` | 表头背景 | `.vtable` | 目标 `.vtable` |
| `--vtable-cell-padding` | `8px` | 单元格水平内边距 | `.vtable` | 目标 `.vtable` |
| `--vtable-resize-handle-width` | 回退 `8px` | 列宽拖动手柄宽度 | `.vtable-resize-handle` 使用处 | 目标 `.vtable` |
| `--vtable-resize-color` | 回退 `var(--color-primary-500, #006aff)` | 拖动指示线、手柄及插件焦点颜色 | 插件样式使用处 | 目标 `.vtable` |

## javascript

### javascript-vtable-plugins

```json
{"name":"VTable 可选插件","summary":"按需组合排序、行勾选和列宽调整，不进入默认核心入口。"}
```

| 导出及 workspace 入口 | 行为 |
| --- | --- |
| `vtableSortingPlugin`，`@zui/vtable/plugins/sorting` | 表头按钮循环升序、降序、取消，支持列 `sortFn`；一次只排序一列。 |
| `vtableRowSelectionPlugin`，`@zui/vtable/plugins/row-selection` | 接入选择状态，搭配显式插入的选择列；全选覆盖当前数据的全部可选行，包括视口外的行。 |
| `createVTableSelectionColumn(options?)`，同上 | 返回显示列，可指定 `id`（默认 `__selection`）、`size`（默认 `44`）、`minSize/maxSize`（默认同 size）、`selectAllLabel`、`selectRowLabel`（字符串或 `(row) => string`）。使用 `enableRowSelection` 禁选行。 |
| `vtableColumnResizePlugin`，`@zui/vtable/plugins/column-resize` | 拖动时仅移动指示线，松手后提交宽度；Escape、失焦或取消指针放弃修改。左右键每次调整 10px，Home/End 调整至列宽上下限。 |

`plugins` 是对象列表，不是字符串注册名。自定义插件通过 `features` 组合引擎功能，`decorateHeader` 返回标题、额外控件和属性，`mount` 返回销毁时运行的清理函数。重复 ID 或不同实现的同名 feature 会报错。完整类型见下一节。

## types

### types-vtable

```json
{"name":"VTable 公共类型","summary":"定义数据、平面列、插件、引擎与渲染上下文的泛型契约。"}
```

`@zui/vtable` 和 `/react` 导出 [types.ts](<https://github.com/easysoft/zui/blob/749985e4f151843879d42ab8aa842357bbc4d74f/lib/vtable/src/types.ts>) 中全部 `VTable` 前缀类型。`TData` 保留业务行形状，`TFeatures` 描述插件组合。主要成员如下：

| 类型 | 契约 |
| --- | --- |
| `VTableFeatures<TFeatures>` | 在调用方 feature 集合上加入 `coreReactivityFeature` 和 `columnSizingFeature`。 |
| `VTableEngine<TData, TFeatures>` | `Table<VTableFeatures<TFeatures>, TData>`。 |
| `VTableColumnDef<TData, TFeatures>` | `ColumnDefBase` 去掉 `header/cell` 后加入必选 `id: string`，可选 `accessorKey`、`accessorFn`、`header`、`cell`；列宽为 `size/minSize/maxSize`。 |
| `VTableContent<TContext, TData, TFeatures>` | `CustomContentStatic` 或 `(context: TContext, vtable: VTableRenderContext) => CustomContentStatic`；类型包含文本、Preact 节点和元素/HTML 描述。 |
| `VTableRenderContext<TData, TFeatures>` | `{table, rootElement: HTMLElement \| null, scrollElement: HTMLElement \| null, refresh: () => void, i18n: (key: string, args?: (string \| number)[], defaultValue?: string) => string}`。 |
| `VTablePluginContext<TData, TFeatures>` | 渲染上下文，但挂载回调中的根元素和滚动元素保证非空。 |
| `VTableHeaderContext<TData, TFeatures>` | 渲染上下文加 `header: Header`、`content: ComponentChildren`。 |
| `VTableHeaderDecoration` | `{content?: ComponentChildren, extra?: ComponentChildren, attrs?: JSX.HTMLAttributes<HTMLDivElement>}`。 |
| `VTablePlugin<TData, TFeatures>` | `{id: string, features?: TFeatures, decorateHeader?: (context: VTableHeaderContext) => VTableHeaderDecoration \| void, mount?: (context: VTablePluginContext) => (() => void) \| void}`。 |
| `VTableOptions<TData, TFeatures>` / `VTableProps` | 前述组件选项，加 HElement DOM/内容选项及 TableOptions；组件拥有 `features`、`columns`、`getRowId` 的约束。 |
| `VTableScrollOptions` | Virtualize 的 `ScrollToOptions` 别名。 |
| `VTableSelectionColumnOptions<TData>` | 仅从 row-selection 插件入口导出；字段见 `createVTableSelectionColumn`。 |

表头生成函数接收 `HeaderContext`，单元格生成函数接收 `CellContext`，空态生成函数接收 `VTableEngine`；第二参均为 `VTableRenderContext`。引擎类型以所用 9.2.4 包声明为准，不使用 DTable 的 `cols/rowKey` 等旧类型。

## recipes

### recipe-vtable-sorting

```json
{"name":"受控排序","summary":"显式加载排序插件，并将状态更新回写到组件。"}
```

workspace，先准备 `<div id="projects"></div>`，加载 ZUI 基础/工具样式：

```ts
import {VTable} from '@zui/vtable';
import {vtableSortingPlugin} from '@zui/vtable/plugins/sorting';

let sorting: {id: string; desc: boolean}[] = [];
const table = new VTable('#projects', {
    data: [{id: 'p1', title: '项目一'}],
    columns: [{id: 'title', accessorKey: 'title', header: '项目'}],
    getRowId: row => row.id,
    plugins: [vtableSortingPlugin],
    state: {sorting},
    onSortingChange(updater) {
        sorting = typeof updater === 'function' ? updater(sorting) : updater;
        table.render({state: {sorting}});
    },
});
// 宿主卸载时：table.destroy();
```

## constraints

- 仅支持同步数组、平面列和固定行高；不支持固定列、分页、筛选、树、合并格、编辑、单元格选区、远程数据和可变行高。
- 更新数据和列时使用新数组；避免原地改变 ID、列定义或插件集合。引擎 `setOptions` 也遵守同一数据验证规则。
- 受控状态由调用方管理；只设置回调却不回写状态会阻止相应交互状态更新。
- Tab/空格/Enter 操作可见控件，缩放列支持键盘；没有电子表格式方向键导航。焦点所在虚拟行移出后，焦点回到表格根节点。
- CustomContent 中的 HTML 描述仅用于可信内容；纯文本可直接传字符串。
- 原生实例持有引擎但不提供额外销毁协议，使用 `destroy()`；Preact 使用正常卸载。插件清理异常会在尝试其他资源清理后汇总抛出。
- [性能记录](<https://github.com/easysoft/zui/blob/749985e4f151843879d42ab8aa842357bbc4d74f/lib/vtable/performance.md>) 来自旧分支的历史测量，不表示当前主线的速度或跨环境性能承诺。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/749985e4f151843879d42ab8aa842357bbc4d74f/lib/vtable/package.json>)
- [正式文档](<https://github.com/easysoft/zui/blob/749985e4f151843879d42ab8aa842357bbc4d74f/lib/vtable/docs/lib/components/index.md>)
- [原生入口](<https://github.com/easysoft/zui/blob/749985e4f151843879d42ab8aa842357bbc4d74f/lib/vtable/src/vanilla/index.ts>)
- [Preact 实现](<https://github.com/easysoft/zui/blob/749985e4f151843879d42ab8aa842357bbc4d74f/lib/vtable/src/component/vtable.tsx>)
- [完整公共类型](<https://github.com/easysoft/zui/blob/749985e4f151843879d42ab8aa842357bbc4d74f/lib/vtable/src/types.ts>)
- [插件源码](<https://github.com/easysoft/zui/blob/749985e4f151843879d42ab8aa842357bbc4d74f/lib/vtable/src/plugins/row-selection.tsx>)
- [样式变量及布局](<https://github.com/easysoft/zui/blob/749985e4f151843879d42ab8aa842357bbc4d74f/lib/vtable/src/style/vtable.css>)
