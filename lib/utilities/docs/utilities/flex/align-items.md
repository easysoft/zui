# align-items

使用 `items-*` 应用 CSS `align-items` 属性，设置 Flex 容器中子元素沿交叉轴的对齐方式。

<template v-for="item in alignItemsJson">
  <h3><code>{{item}}</code></h3>
  <Example>
    <div :class="item" class="flex flex-wrap h-48 gap-2 surface" >
      <div v-for="index in 10" class="secondary center basis-32 h-8 flex-grow">
        {{index}}
      </div>
    </div>
  </Example>
</template>

<script setup>
  const alignItemsJson = [
    'items-center',
    'items-start',
    'items-end',
    'items-baseline',
    'items-stretch',
  ]
</script>
