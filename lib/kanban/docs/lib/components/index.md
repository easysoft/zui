# 看板

看板由泳道、列、卡片和可选的连线组成。`Kanban` 展示单个看板，`KanbanList` 组合多个看板。组件维护展示过程中的排序与布局状态，不改写传入的数据对象；业务数据的保存由应用负责。

## 基本使用

示例包含一个泳道和三个状态列。点击卡片可选择，拖动卡片可改变所在列。

::: tabs

== 示例

<Example>
  <div class="kanban-list">
    <ZUI use="kanban" :options="kanbanOptions" />
  </div>
  <p class="text-sm text-gray mt-2" role="status">{{ kanbanStatus }}</p>
</Example>

== HTML

```html
<div class="kanban-list">
  <div id="releaseKanban"></div>
</div>
```

== JS

```js
const kanban = new zui.Kanban('#releaseKanban', {
    colWidth: 'auto',
    minColWidth: 140,
    selectable: true,
    data: {
        lanes: [{name: 'team', title: '发布'}],
        cols: [
            {name: 'todo', title: '待处理'},
            {name: 'doing', title: '进行中'},
            {name: 'done', title: '已完成'},
        ],
        items: [
            {id: 'docs', lane: 'team', col: 'todo', title: '完善文档'},
            {id: 'build', lane: 'team', col: 'doing', title: '验证构建'},
        ],
    },
    onSelect(selected) {
        console.log('已选择', selected);
    },
    onDrop(changes, info) {
        console.log('拖放变更', changes, info);
        // 同步返回 false 可拒绝更新；其余返回值允许组件应用 changes。
    },
});
```

:::

<script setup>
import {ref} from 'vue';
const kanbanStatus = ref('点击或拖动卡片');
const kanbanOptions = {
    colWidth: 'auto',
    minColWidth: 140,
    selectable: true,
    data: {
        lanes: [{name: 'team', title: '发布'}],
        cols: [
            {name: 'todo', title: '待处理'},
            {name: 'doing', title: '进行中'},
            {name: 'done', title: '已完成'},
        ],
        items: [
            {id: 'docs', lane: 'team', col: 'todo', title: '完善文档'},
            {id: 'build', lane: 'team', col: 'doing', title: '验证构建'},
        ],
    },
    onSelect(selected) {
        kanbanStatus.value = selected.length ? `已选择：${selected.join(', ')}` : '未选择卡片';
    },
    onDrop(changes, info) {
        kanbanStatus.value = `已移动：${info.drag.key}`;
    },
};
</script>

单独使用 `Kanban` 时，外层提供 `.kanban-list` 容器，供表头固定和尺寸测量使用。`KanbanList` 会自行提供此容器。

## 数据结构

`data` 使用 `KanbanDataset`：

| 字段 | 内容 |
| --- | --- |
| `lanes` | 泳道数组，每项用唯一的 `name` 标识，可设置 `title`、`color`、`order` |
| `cols` | 列数组，每项用唯一的 `name` 标识，可设置 `title`、`width`、`color`、`subCols` |
| `items` | 卡片数组，或按泳道、列分组的对象 |
| `links` | 可选的卡片连线数组 |

卡片默认通过 `id` 标识，`itemKey` 可改用其他字段。数组格式中的 `lane`、`col` 对应泳道和列的 `name`，`order` 控制排序；`title`、`subtitle`、`icon` 等内容使用[卡片](/lib/components/cards/)的显示能力。推荐统一使用字符串键。

也可以按泳道和列组织卡片：

```js
const data = {
    lanes: [{name: 'team', title: '发布'}],
    cols: [{name: 'todo', title: '待处理'}, {name: 'done', title: '已完成'}],
    items: {
        team: {
            todo: [{id: 'docs', title: '完善文档'}],
            done: [{id: 'build', title: '验证构建'}],
        },
    },
};
```

## 布局与内容

`colWidth` 可为像素数、`'auto'` 或按列返回宽度的函数。自动列宽在 `minColWidth`、`maxColWidth` 之间分配可用空间；列自身的 `width`、`minWidth`、`maxWidth` 可以覆盖共享设置。

`laneHeight`、`minLaneHeight`、`maxLaneHeight` 控制泳道高度，`laneNameWidth` 控制泳道名称区域，`colsGap`、`lanesGap` 控制列和泳道间距。`itemCountPerRow` 和 `itemGap` 控制卡片排列。

通过 `laneProps`、`colProps`、`itemProps` 设置共享属性，通过 `getLane`、`getCol`、`getItem` 调整数据或返回 `false` 过滤内容。`itemRender({item, lane, col})` 可自定义卡片内容。

## 选择与点击

`selectable: true` 启用卡片选择；`defaultSelected` 设置初始卡片键，`onSelect(newSelected, oldSelected)` 通知变化。`onClickItem(event, info)` 中的 `info` 包含 `item`、`lane`、`col`，返回 `false` 会取消这次点击的默认选择行为。

```js
await kanban.$?.select(['docs']);  // 替换选择集合
await kanban.$?.select('build', true); // 切换指定卡片的选中状态
await kanban.$?.select([]);        // 清空选择
```

这些交互方法在原生实例初始化完成后通过 `$` 调用。

## 拖放规则与保存

`draggable` 默认为 `true`，默认 `dragTypes` 为 `['item', 'newItem']`。可以加入 `lane`、`col` 允许泳道或列排序，或设为 `false` 关闭拖放。

拖放产生变化时，`onDrop(changes, info)` 接收增量数据以及拖动对象、目标和落点方向。当前实现需要配置 `onDrop` 才会应用计算出的数据变更。同步返回 `false` 拒绝本次变更；回调不会等待 Promise。

拖放规则和回调应在创建实例时配置。当前实现不会在 `render()` 后重新绑定拖放选项；需要改变这些设置时重新创建实例。

需要保存成功后再改变界面时，先同步返回 `false`，保存成功后通过 `update(changes)` 应用同一份变更。以下 `data` 使用前面的数据集，容器仍需置于 `.kanban-list` 中：

```js
const savedKanban = new zui.Kanban('#savedKanban', {
    data,
    onDrop(changes) {
        fetch('/api/kanban/changes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(changes),
        }).then(response => {
            if (!response.ok) throw new Error('保存失败');
            return savedKanban.$?.update(changes);
        }).catch(() => zui.Messager.show('保存失败，请重试'));
        return false;
    },
});
```

示例接口地址需替换为业务接口。复杂并发场景由应用处理请求次序，避免旧结果覆盖新操作。

`dropRules` 按来源列或 `泳道:列` 指定允许的目标，值可为布尔值或目标数组：

```js
const dropRules = {
    todo: ['todo', 'doing'],
    doing: ['todo', 'doing', 'done'],
    done: false,
};
```

在创建选项中传入 `dropRules`。更复杂的条件可通过 `canDrop(dragInfo, dropInfo)` 判断。卡片配置了 `dropRules` 时按该规则判断，不会再叠加调用 `canDrop`。`onDragStart(info)` 返回 `false` 可阻止拖动；`onDropNewItem(info)` 用于将外部新条目转换为卡片数据。

## 异步加载与实例更新

`data` 可以是异步函数或 ZUI 获取数据配置，结果需符合上述数据结构：

```js
kanban.render({
    data: async () => {
        const response = await fetch('/api/kanban');
        if (!response.ok) throw new Error('加载失败');
        return response.json();
    },
    onLoad(data) {
        return data;
    },
    onLoadFail() {
        return '看板加载失败，请稍后重试';
    },
});
```

`load()` 发起重新加载，通过 `onLoad` 或 `onLoadFail` 观察完成结果；它本身不返回可等待的加载 Promise。

```js
kanban.$?.load();
await kanban.$?.updateItem({id: 'docs', title: '文档已补齐'});
await kanban.$?.addItem({id: 'publish', lane: 'team', col: 'todo', title: '发布版本'});
await kanban.$?.deleteItem('publish');
const item = kanban.$?.getItem('docs');
kanban.$?.updateLayout();
```

`update(changes)` 按键合并增量数据；泳道和列分别使用 `addLane/updateLane/deleteLane`、`addCol/updateCol/deleteCol`。隐藏面板变为可见或外部布局变化时，可以调用 `updateLayout()` 重新计算尺寸。

## 连线与多个看板

`data.links` 中的每条连线用 `from`、`to` 指定卡片 ID，可设置 `shape: 'straight' | 'fold' | 'curve'`、`lineStyle`、`color`、`text`、`fromSide` 和 `toSide`。

`editLinks: true` 开启连线编辑，通过 `onAddLink`、`onDeleteLink` 处理新增和删除。这两个回调支持 Promise，返回 `false` 可取消。程序更新连线使用 `addLink()`、`updateLink()`、`deleteLink()`。

`KanbanList` 的 `items` 接受单个看板配置或分区配置，`kanbanProps` 设置共享看板属性。跨看板连线放在列表的 `links` 中，并用 `fromKanban`、`toKanban` 指定对应看板。`KanbanRegion` 是 Preact 入口提供的分区组件，用于嵌套布局。

## 常用选项

<Props>
data: KanbanDataSetting; // 数据集或异步获取配置。
itemKey?: string = "id"; // 卡片键字段。
colWidth?: number | "auto" | Function = 200; // 共享列宽。
minColWidth?: number = 150; // 默认最小列宽。
maxColWidth?: number = 600; // 默认最大列宽。
colsGap?: number = 8; // 列间距，像素。
responsive?: boolean | string = true; // 按容器尺寸适配，字符串指定容器。
sticky?: boolean = true; // 固定表头和泳道名称。
selectable?: boolean; // 启用卡片选择。
defaultSelected?: string | string[]; // 初始选择的卡片键。
draggable?: boolean | DraggableOptions = true; // 拖放开关及设置。
dragTypes?: KanbanDnDType | KanbanDnDType[]; // 可拖动对象类型。
onDrop?: (changes: Partial&lt;KanbanData&gt;, info: KanbanDropInfo, restore: () =&gt; void) =&gt; void | false; // 拖放数据变化回调。
onSelect?: (selected: string[], oldSelected: string[]) =&gt; void; // 选择变化。
onLoad?: (data: KanbanData) =&gt; KanbanData | void; // 异步数据加载成功。
onLoadFail?: CustomContentType | Function; // 异步数据加载失败。
afterRender?: (firstRender: boolean) =&gt; void; // 渲染完成回调。
beforeDestroy?: () =&gt; void; // 卸载前回调。
</Props>

`onDrop` 的第三个参数 `restore` 可以保存为独立回调，在异步保存失败时调用，将看板数据恢复到本次拖放前的快照，包括此前已应用的本地修改。回滚会撤销快照之后的数据变化；允许连续操作时，应用需要协调保存请求和回滚顺序。本页保存示例采用先保存、再 `update()` 的流程。

## 模块引入与销毁

```ts
import {Kanban, KanbanList} from '@zui/kanban';
import '@zui/kanban/css';
import {Kanban as KanbanView, KanbanRegion} from '@zui/kanban/react';
import type {KanbanProps, KanbanDataset, KanbanDropInfo} from '@zui/kanban';
```

Preact 的 `render` 从 `preact` 引入，调用形式为 `render(<KanbanView data={data} />, element)`。移除看板时调用 `kanban.destroy()` 释放拖放、尺寸监听和组件实例。

## 综合示例

以下保留多个看板、泳道和连线的组合示例。

<Example>
  <div id="kanbanList"></div>
</Example>

<script>
import index from './index.js';
export default index;
</script>
