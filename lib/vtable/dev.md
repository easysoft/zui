# 高级表格 VTable

第一版支持固定行高、平面列、双轴虚拟化以及按实例组合的排序、行勾选、列宽调整插件。历史设计保留在 `spec.md`。

## 大数据与三个插件

点击表头循环升序、降序和取消排序；勾选框支持全选和半选，第 8 行禁用。拖动表头分隔线松手后提交宽度，也可聚焦分隔线后按左右键、Home、End；Escape 取消拖动。

```html:example
<div class="flex flex-wrap gap-2">
  <button type="button" class="btn" id="vtableSizeSmall">1,000 × 20</button>
  <button type="button" class="btn" id="vtableSizeLarge">100,000 × 20</button>
  <button type="button" class="btn" id="vtableSizeWide">10,000 × 200</button>
  <button type="button" class="btn" id="vtableStart">定位首行／首列</button>
  <button type="button" class="btn" id="vtableEnd">定位末行／末列</button>
  <button type="button" class="btn" id="vtableReplace">替换数据</button>
  <button type="button" class="btn" id="vtableClear">清空</button>
  <button type="button" class="btn" id="vtableResize">切换容器宽度</button>
  <button type="button" class="btn" id="vtableColumnWidth">切换列宽</button>
  <button type="button" class="btn" id="vtableDispose">销毁</button>
  <button type="button" class="btn" id="vtableRecreate">重建</button>
  <label>语言 <select id="vtableLang" aria-label="表格语言"><option value="zh_cn">简体中文</option><option value="zh_tw">繁體中文</option><option value="en">English</option></select></label>
</div>
<p><output id="vtableStatus" aria-live="polite"></output></p>
<div id="vtableDemo"></div>
```

数据固定生成，性能比较不受随机内容影响。控制台可访问 `window.vtableDemo`，其中 `table` 是原生实例，`setSize(rows, columns)`、`replace()`、`clear()`、`setLang(lang)`、`dispose()`、`recreate()` 对应上方操作。实例初始化后，`table.table` 为 TanStack Table；可调用 `setOptions()` 验证外部数据更新。

## 无插件基础表格与 CustomContent

表头使用标签对象，单元格分别返回文本、元素描述和 Preact 节点。渲染回调接收原生 TanStack header/cell context。

```html:example
<div id="vtableBasic"></div>
```

## 受控排序与勾选

状态由示例保存，更新回调接收更新器并立即通过 `render({state})` 回写。切换排序后勾选继续绑定稳定行 ID。

```html:example
<div id="vtableControlled"></div>
<p><output id="vtableControlledStatus" aria-live="polite"></output></p>
```

## Preact 类组件

通过 `/react` 入口直接挂载，与原生实例并存；页面重载或 HMR 会先卸载旧实例。

```html:example
<div id="vtablePreact"></div>
```

## Workspace 引入

```ts
import {VTable} from '@zui/vtable';
import {vtableSortingPlugin} from '@zui/vtable/plugins/sorting';
import {vtableRowSelectionPlugin, createVTableSelectionColumn} from '@zui/vtable/plugins/row-selection';
import {vtableColumnResizePlugin} from '@zui/vtable/plugins/column-resize';

new VTable(element, {
    data: [{id: 'task-1', title: '验证表格'}],
    columns: [createVTableSelectionColumn(), {id: 'title', accessorKey: 'title', header: '标题'}],
    getRowId: row => row.id,
    plugins: [vtableSortingPlugin, vtableRowSelectionPlugin, vtableColumnResizePlugin],
});
```

插件集合在创建时固定，修改集合需销毁重建。npm 聚合包只公开 VTable 核心；插件仅使用上述 workspace 子入口或 JSON 组合构建，详见正式文档。
