# 宽高比

## 效果

通过 `aspect-*` 类来控制元素显示的比例。

::: tabs

== 示例

<Example background="light-circle">
  <div class="row gap-4 items-end">
    <StyleTile
      v-for="item in aspectList"
      :key="item.name"
      :label="true"
      tileClass="center secondary w-32"
      title="w-32"
      labelClass="font-mono text-sm text-center"
      v-bind="item"
    >
    </StyleTile>
  </div>
</Example>

== HTML

```html
<div class="aspect-auto center secondary w-32"></div>
<div class="aspect-square center secondary w-32"></div>
<div class="aspect-video center secondary w-32"></div>
```

:::

<script setup>
const aspectList = [
    {name: 'aspect-auto', hint: 'aspect-ratio: auto;'},
    {name: 'aspect-square', hint: 'aspect-ratio: 1 / 1;'},
    {name: 'aspect-video', hint: 'aspect-ratio: 16 / 9;'},
];
</script>
