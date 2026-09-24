# 文本选择

用于控制用户能否选中文本的工具类。

## 效果

通过工具类 `select-*` 来控制用户能否选中元素中的文本。

::: tabs

== 示例

<Example class="col gap-6" background="light-circle">
  <div class="row flex-wrap gap-4">
    <StyleTile
        v-for="item in userSelectList"
        :key="item.name"
        :title="true"
        :label="true"
        tileClass="canvas h-24 w-40"
        labelClass="text-sm font-mono text-center"
        copiedClass=""
        noHover
        v-bind="{...item}"
    />
  </div>
</Example>

== HTML

```html
<div class="select-none">拖动手柄：调整任务顺序</div>
<div class="select-text">验收结论：附件预览通过</div>
<div class="select-all">PORTAL-2026-018</div>
<div class="select-auto">负责人：林悦</div>
```

:::

<script setup>
const userSelectList = [
    {name: 'select-none', title: '拖动手柄：调整任务顺序'},
    {name: 'select-text', title: '验收结论：附件预览通过'},
    {name: 'select-all', title: 'PORTAL-2026-018'},
    {name: 'select-auto', title: '负责人：林悦'},
];
</script>
