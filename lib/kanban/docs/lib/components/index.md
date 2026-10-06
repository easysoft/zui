# 看板

看板由泳道、列、卡片和可选的连线组成。`Kanban` 展示单个看板，`KanbanList` 组合多个看板。组件维护展示过程中的排序与布局状态，不改写传入的数据对象；业务数据的保存由应用负责。

## 基本使用

示例包含一个泳道和三个状态列。点击卡片可选择，拖动卡片可改变所在列。

::: tabs

== 示例

<Example>
  <div class="kanban-list kanban-doc-preview" tabindex="0" role="region" aria-label="基础发布看板，可横向滚动">
    <ZUI id="releaseKanban" use="kanban" :options="kanbanOptions" :beforeCreate="resetKanbanStatus" />
  </div>
  <p id="releaseKanbanStatus" class="text-sm text-gray mt-2" role="status">{{ kanbanStatus }}</p>
</Example>

== 完整代码

```html
<style>
.kanban-list.kanban-doc-preview {
    height: 12rem;
}
</style>

<div class="kanban-list kanban-doc-preview" tabindex="0" role="region" aria-label="基础发布看板，可横向滚动">
  <div id="releaseKanban"></div>
</div>
<p id="releaseKanbanStatus" class="text-sm text-gray mt-2" role="status">点击或拖动卡片</p>

<script>
const kanbanStatusElement = document.getElementById('releaseKanbanStatus');
const kanban = new zui.Kanban('#releaseKanban', {
    $replace: false,
    dragTypes: ['item'],
    colWidth: 'auto',
    minColWidth: 140,
    selectable: true,
    data: {
        lanes: [{name: 'team', title: '九月发布'}],
        cols: [
            {name: 'todo', title: '待处理'},
            {name: 'doing', title: '进行中'},
            {name: 'done', title: '已完成'},
        ],
        items: [
            {id: 'docs', lane: 'team', col: 'todo', title: '补充客户门户使用指南'},
            {id: 'build', lane: 'team', col: 'doing', title: '验证客户门户发布包'},
        ],
    },
    onSelect(selected) {
        kanbanStatusElement.textContent = selected.length ? `已选择：${selected.join(', ')}` : '未选择卡片';
    },
    onDrop(_changes, info) {
        kanbanStatusElement.textContent = `已移动：${info.drag.key}`;
        // 同步返回 false 可拒绝更新；其余返回值允许组件应用 changes。
    },
});
</script>
```

:::

<script setup>
import {ref} from 'vue';
const kanbanStatus = ref('点击或拖动卡片');
function resetKanbanStatus() {
    kanbanStatus.value = '点击或拖动卡片';
}
const kanbanOptions = {
    $replace: false,
    dragTypes: ['item'],
    colWidth: 'auto',
    minColWidth: 140,
    selectable: true,
    data: {
        lanes: [{name: 'team', title: '九月发布'}],
        cols: [
            {name: 'todo', title: '待处理'},
            {name: 'doing', title: '进行中'},
            {name: 'done', title: '已完成'},
        ],
        items: [
            {id: 'docs', lane: 'team', col: 'todo', title: '补充客户门户使用指南'},
            {id: 'build', lane: 'team', col: 'doing', title: '验证客户门户发布包'},
        ],
    },
    onSelect(selected) {
        kanbanStatus.value = selected.length ? `已选择：${selected.join(', ')}` : '未选择卡片';
    },
    onDrop(_changes, info) {
        kanbanStatus.value = `已移动：${info.drag.key}`;
    },
};
</script>

<style scoped>
.kanban-list.kanban-doc-preview {
    height: 12rem;
}
.kanban-list.kanban-release-board {
    height: 25rem;
}
.kanban-release-input {
    flex: 1 1 12rem;
    min-width: 0;
}
</style>

单独使用 `Kanban` 时，外层提供 `.kanban-list` 容器，供表头固定和尺寸测量使用。`KanbanList` 会自行提供此容器。

## 综合示例

以下为客户门户发布的虚构任务看板，按前端、服务端两条泳道展示进展。可以拖动卡片调整状态或所属团队，也可以通过卡片按钮完成状态流转。

::: tabs

== 示例

<Example>
  <div class="flex flex-wrap items-center justify-between gap-2">
    <strong>客户门户发布</strong>
    <span id="kanbanDemoSummary" class="text-sm text-gray">{{ demoSummary }}</span>
  </div>
  <form id="kanbanDemoForm" class="flex flex-wrap items-center gap-2 mt-3 mb-3" @submit.prevent="addDemoTask">
    <label for="kanbanDemoTaskTitle">任务名称</label>
    <input id="kanbanDemoTaskTitle" v-model="demoTaskTitle" class="form-control kanban-release-input" placeholder="例如：补充上传失败提示" maxlength="60" :disabled="!demoReady" />
    <button type="submit" class="btn primary" :disabled="!demoReady || !demoTaskTitle.trim()">新增任务</button>
    <button id="kanbanDemoReset" type="button" class="btn" :disabled="!demoReady" @click="resetDemo">重置</button>
  </form>
  <div class="kanban-list kanban-release-board" tabindex="0" role="region" aria-label="客户门户发布看板，可横向滚动">
    <ZUI id="kanbanReleaseDemo" :key="demoVersion" use="kanban" :options="demoOptions" :beforeCreate="prepareDemo" :ready="readyDemo" />
  </div>
  <p id="kanbanDemoStatus" class="text-sm mt-3 break-words" role="status">{{ demoStatus }}</p>
</Example>

== 完整代码

```html
<style>
.kanban-list.kanban-release-board {
    height: 25rem;
}
.kanban-release-input {
    flex: 1 1 12rem;
    min-width: 0;
}
</style>

<div class="flex flex-wrap items-center justify-between gap-2">
  <strong>客户门户发布</strong>
  <span id="kanbanDemoSummary" class="text-sm text-gray"></span>
</div>
<form id="kanbanDemoForm" class="flex flex-wrap items-center gap-2 mt-3 mb-3">
  <label for="kanbanDemoTaskTitle">任务名称</label>
  <input id="kanbanDemoTaskTitle" class="form-control kanban-release-input" placeholder="例如：补充上传失败提示" maxlength="60" disabled />
  <button type="submit" class="btn primary" disabled>新增任务</button>
  <button id="kanbanDemoReset" type="button" class="btn" disabled>重置</button>
</form>
<div class="kanban-list kanban-release-board" tabindex="0" role="region" aria-label="客户门户发布看板，可横向滚动">
  <div id="kanbanReleaseDemo"></div>
</div>
<p id="kanbanDemoStatus" class="text-sm mt-3 break-words" role="status">可拖动卡片，或使用卡片下方的按钮。</p>

<script>
const releaseForm = document.getElementById('kanbanDemoForm');
const releaseTitle = document.getElementById('kanbanDemoTaskTitle');
const releaseAdd = releaseForm.querySelector('button[type="submit"]');
const releaseReset = document.getElementById('kanbanDemoReset');
const releaseSummary = document.getElementById('kanbanDemoSummary');
const releaseStatus = document.getElementById('kanbanDemoStatus');
const releaseColumns = [
    {name: 'todo', title: '待处理'},
    {name: 'doing', title: '进行中'},
    {name: 'done', title: '已完成'},
];
const releaseLanes = [{name: 'web', title: '前端'}, {name: 'api', title: '服务端'}];
const releaseActions = {
    todo: {text: '开始处理', col: 'doing'},
    doing: {text: '标记完成', col: 'done'},
    done: {text: '重新打开', col: 'todo'},
};
let nextReleaseTaskId = 0;

function createReleaseKanban() {
    const instance = new zui.Kanban('#kanbanReleaseDemo', {
        $replace: false,
        colWidth: 'auto',
        minColWidth: 164,
        minLaneHeight: 164,
        dragTypes: ['item'],
        data: {
            cols: releaseColumns,
            lanes: releaseLanes,
            items: [
                {id: 'preview', lane: 'web', col: 'todo', title: '补充附件预览入口', subtitle: '陈晨 · 支持图片与 PDF'},
                {id: 'notification', lane: 'web', col: 'doing', title: '完善消息通知面板', subtitle: '周敏 · 区分已读与未读'},
                {id: 'navigation', lane: 'web', col: 'done', title: '适配手机端导航', subtitle: '何雨 · 覆盖窄屏布局'},
                {id: 'validation', lane: 'api', col: 'todo', title: '增加附件类型校验', subtitle: '李航 · 返回明确错误信息'},
                {id: 'push', lane: 'api', col: 'doing', title: '联调消息推送接口', subtitle: '赵阳 · 验证断线重连'},
                {id: 'permission', lane: 'api', col: 'done', title: '补齐权限检查', subtitle: '王宁 · 隔离项目数据'},
            ],
        },
        getItem: ({item}) => ({
            ...item,
            titleClass: 'min-w-0 break-words',
            footActions: [{
                text: releaseActions[item.col].text,
                className: 'ghost',
                attrs: {'aria-label': `${releaseActions[item.col].text}：${item.title}`},
                async onClick() {
                    const {col} = releaseActions[item.col];
                    await instance.$.updateItem({id: item.id, col});
                    if (instance.destroyed) return;
                    releaseStatus.textContent = `已将「${item.title}」移至「${releaseColumns.find(item => item.name === col).title}」。`;
                    instance.element.querySelector(`.kanban-item[z-key="${CSS.escape(item.id)}"] button`)?.focus();
                },
            }],
        }),
        onDrop(_changes, info) {
            const lane = releaseLanes.find(item => item.name === info.drop.lane);
            const col = releaseColumns.find(item => item.name === info.drop.col);
            releaseStatus.textContent = `已将「${info.drag.item.title}」移至「${lane.title} / ${col.title}」。`;
            // 返回非 false 值，让组件应用本次拖放变更。
        },
        afterRender() {
            const items = [...this.data.map.values()];
            releaseSummary.textContent = releaseColumns.map(col => `${col.title} ${items.filter(item => item.col === col.name).length}`).join(' · ');
            releaseTitle.disabled = false;
            releaseAdd.disabled = !releaseTitle.value.trim();
            releaseReset.disabled = false;
        },
        beforeDestroy() {
            releaseForm.onsubmit = null;
            releaseTitle.oninput = null;
            releaseReset.onclick = null;
            releaseTitle.disabled = releaseAdd.disabled = releaseReset.disabled = true;
        },
    });
    releaseTitle.oninput = () => {
        releaseAdd.disabled = !releaseTitle.value.trim();
    };
    releaseForm.onsubmit = async (event) => {
        event.preventDefault();
        const title = releaseTitle.value.trim();
        if (!title) return;
        const index = ++nextReleaseTaskId;
        await instance.$.addItem({
            id: `demo-task-${index}`,
            lane: 'web',
            col: 'todo',
            order: 100 + index,
            title,
            subtitle: '未指派 · 新增任务',
        });
        if (instance.destroyed) return;
        releaseTitle.value = '';
        releaseAdd.disabled = true;
        releaseStatus.textContent = `已新增「${title}」，位于「前端 / 待处理」。`;
    };
    releaseReset.onclick = () => {
        instance.destroy();
        nextReleaseTaskId = 0;
        releaseTitle.value = '';
        releaseKanban = createReleaseKanban();
        releaseStatus.textContent = '已恢复初始的 6 项任务。';
    };
    return instance;
}

let releaseKanban = createReleaseKanban();
</script>
```

:::

输入任务名称后按回车或点击“新增任务”，新卡片会加入“前端 / 待处理”。“重置”恢复初始的六项任务；所有修改仅保留在当前示例，切换代码标签再返回也会恢复初始状态。窄屏下可以横向滚动看板，卡片上的按钮也支持键盘操作。

示例使用 `onDrop` 应用拖放变更，通过 `addItem()` 新增卡片、`updateItem()` 切换状态。重置时销毁旧实例，再使用原配置和初始数据创建看板。移除完整示例前调用 `releaseKanban.destroy()`，同时解除表单事件。标题和操作区放在看板外；如果使用 `KanbanList` 分区，则应将 `heading` 与包含看板配置的 `items` 配套传入。

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
    lanes: [{name: 'team', title: '九月发布'}],
    cols: [{name: 'todo', title: '待处理'}, {name: 'done', title: '已完成'}],
    items: {
        team: {
            todo: [{id: 'docs', title: '补充客户门户使用指南'}],
            done: [{id: 'build', title: '验证客户门户发布包'}],
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

`dropRules`、`canDrop`、`onDragStart` 和 `onDrop` 可以通过 `render({...})` 更新，无需重建实例。每次拖动开始时按当前规则筛选放置目标，事件发生时调用当前回调。`dragTypes` 和底层 `draggable` 设置仍在创建时确定，改变它们时需重新创建实例。

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

在创建选项中传入 `dropRules`，也可以通过 `kanban.render({dropRules})` 更新。更复杂的条件可通过 `canDrop(dragInfo, dropInfo)` 判断。卡片配置了 `dropRules` 时按该规则判断，不会再叠加调用 `canDrop`。`onDragStart(info)` 返回 `false` 可阻止拖动；`onDropNewItem(info)` 用于将外部新条目转换为卡片数据。

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
await kanban.$?.updateItem({id: 'docs', title: '客户门户使用指南已补齐'});
await kanban.$?.addItem({id: 'publish', lane: 'team', col: 'todo', title: '发布客户门户九月版本'});
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

## 源码工作区入口与销毁

以下入口用于 ZUI 源码工作区，需要解析 `@zui/*` 并编译 TypeScript；使用 JSX 时还需配置 Preact。标准 npm 包通过 `zui` 和 `zui/css` 接入。

```ts
import {Kanban, KanbanList} from '@zui/kanban';
import '@zui/kanban/css';
import {Kanban as KanbanView, KanbanRegion} from '@zui/kanban/react';
import type {KanbanProps, KanbanDataset, KanbanDropInfo} from '@zui/kanban';
```

Preact 的 `render` 从 `preact` 引入，调用形式为 `render(<KanbanView data={data} />, element)`。移除看板时调用 `kanban.destroy()` 释放拖放、尺寸监听和组件实例。

<script>
import index from './index.js';
export default index;
</script>
