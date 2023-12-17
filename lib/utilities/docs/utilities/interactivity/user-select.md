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
<div class="select-none">禁止选择文本</div>
<div class="select-text">允许选择文本</div>
<div class="select-all">点击自动选择所有文本</div>
<div class="select-auto">浏览器默认行为</div>
```

:::

<script setup>
const userSelectList = [
    {name: 'select-none', title: '禁止选择文本'},
    {name: 'select-text', title: '允许选择文本'},
    {name: 'select-all', title: '点击自动选择所有文本'},
    {name: 'select-auto', title: '浏览器默认行为'},
];
</script>
