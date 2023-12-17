# align-items

使用 `items-*` 应用CSS `align-items` 属性 属性设置 Flex 容器中的交叉轴方向上的对齐方式。

<template v-for="item in alignItemsJson">
  <h3><code>{{item}}</code></h3>
  <Example>
    <div :class="item" class="flex flex-wrap h-48 gap-2 surface" >
      <div v-for="index in 10" class="primary center basis-32 h-8 flex-grow">
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
