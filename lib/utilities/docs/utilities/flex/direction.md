# direction

## 效果

应用 CSS `flex-direction` 属性设置 Flex 容器中主轴的展开方向。

<template v-for="item in directionJson">
  <h3><code>{{item}}</code></h3>
  <Example class="mb-4">
    <div :class="item" class="flex gap-3" >
      <div v-for="index in 3" class="secondary w-full h-8 center">
        {{index}}
      </div>
    </div>
  </Example>
</template>

<script setup>
  const directionJson = [
    'row',
    'row-reverse',
    'col',
    'col-reverse'
  ];
</script>
