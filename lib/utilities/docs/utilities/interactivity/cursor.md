# 光标

## 效果

通过 `cursor-*` 类可以改变光标的样式。

::: tabs

== 示例

<Example class="col gap-6" background="light-circle">
  <div class="row flex-wrap gap-4">
    <StyleTile
        v-for="item in cursorList"
        :key="item.name"
        :title="true"
        :label="true"
        tileClass="secondary-pale h-24 w-40"
        labelClass="text-sm font-mono text-center"
        copiedClass=""
        noHover
        v-bind="{...item}"
    />
  </div>
</Example>

== HTML

```html
<div class="cursor-auto">cursor-auto</div>
<div class="cursor-default">cursor-default</div>
<div class="cursor-pointer">cursor-pointer</div>
<div class="cursor-wait">cursor-wait</div>
<div class="cursor-text">cursor-text</div>
<div class="cursor-move">cursor-move</div>
<div class="cursor-help">cursor-help</div>
<div class="cursor-not-allowed">cursor-not-allowed</div>
```

:::

<script setup>
const cursorList = [
    {name: 'cursor-auto'},
    {name: 'cursor-default'},
    {name: 'cursor-pointer'},
    {name: 'cursor-wait'},
    {name: 'cursor-text'},
    {name: 'cursor-move'},
    {name: 'cursor-help'},
    {name: 'cursor-not-allowed'},
];
</script>
