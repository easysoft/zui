# direction

使用 self-* 应用 CSS flex-direction 属性设置 Flex 容器中主轴的展开方向。

<script setup>
  const directionJson = [
    'row',
    'row-reverse',
    'col',
    'col-reverse'
  ];
</script>


<template v-for="item in directionJson">
  <Example class="mb-4">
  <h3>{{item}}</h3>
    <div :class="item" class="flex gap-3 mt-3" >
      <div v-for="index in 3" class="bg-primary w-full h-16">
        <div class="mt-5 text-canvas text-center">{{index}}</div>
      </div>
    </div>
  </Example>
</template>

```html
  <div class="flex row ...">
    ...
  </div>
```
