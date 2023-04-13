# align-items

使用`items-*`应用CSS`align-items`属性 属性设置 Flex 容器中的交叉轴方向上的对齐方式。

<script setup>
  const alignItemsJson = [
    'items-center',
    'items-start',
    'items-end',
    'items-baseline',
    'items-stretch',
  ]
</script>

<template v-for="item in alignItemsJson">
  <h3>{{item}}</h3>
  <Example class="p-0">
    <div :class="item" class="flex h-48 gap-2 -bg-slate-200" >
      <div v-for="index in 5" class="bg-primary -flex-grow -flex -items-center -justify-center" :style="{'min-height': index * 20 + 'px'}">
        <div class="text-canvas">{{index}}</div>
      </div>
    </div>
  </Example>
</template>
