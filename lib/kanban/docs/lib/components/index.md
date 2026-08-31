# 看板

看板由泳道、列、卡片和可选的连线组成；`data` 可以是同步数据集，也可以是异步获取配置。组件会将展示过程中的排序和布局数据保留在自身状态中，不会改写传入的数据对象。

## 模块化使用

原生组件、样式和 Preact 组件分别使用公开入口导入：

```ts
import {Kanban} from '@zui/kanban';
import '@zui/kanban/css';

new Kanban('#kanbanList', {
    data: {
        lanes: [{name: 'team-a'}],
        cols: [{name: 'todo'}, {name: 'doing'}],
        items: [{id: 'task-1', lane: 'team-a', col: 'todo', title: '任务'}],
    },
});
```

```tsx
import {Kanban} from '@zui/kanban/react';

<Kanban data={{lanes: [], cols: [], items: []}} />
```

`KanbanList` 用于组合多个看板，`KanbanRegion` 用于嵌套布局。异步 `data`、拖放、选择和连线编辑均可通过对应的回调选项接入。

## 示例

<Example>
    <div id="kanbanList"></div>
</Example>


<script>
import index from './index.js';
export default index;
</script>
