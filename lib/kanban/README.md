# 看板

## JavaScript 组件

```js
new Kanban('#kanbanList', {
    data: {
        lanes: [{name: 'team-a'}],
        cols: [{name: 'todo'}],
        items: [{id: 'task-1', lane: 'team-a', col: 'todo', title: '任务'}],
    },
});
```

## 示例

```html:example: bg-surface
<div id="kanbanExample">
  <div id="kanbanDragItems" class="card-list card-grid mb-4 gap-2">
    <div class="card kanban-new-item">
      <div class="card-heading"><div class="card-title">卡片1</div></div>
    </div>
    <div class="card kanban-new-item">
      <div class="card-heading"><div class="card-title">卡片2</div></div>
    </div>
    <div class="card kanban-new-item">
      <div class="card-heading"><div class="card-title">卡片3</div></div>
    </div>
    <div class="card kanban-new-item">
      <div class="card-heading"><div class="card-title">卡片4</div></div>
    </div>
    <div class="card kanban-new-item">
      <div class="card-heading"><div class="card-title">卡片5</div></div>
    </div>
    <div class="card kanban-new-item">
      <div class="card-heading"><div class="card-title">卡片6</div></div>
    </div>
  </div>
  <div id="kanbanList"></div>
</div>
```
