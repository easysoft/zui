# justify-content

## 效果

使用 `justify-*` 设置 Flex 容器的 CSS `justify-content` 属性，控制项目沿主轴的对齐与剩余空间分配。在默认横向书写模式下，`.row` 的主轴为水平方向，`.col` 的主轴为垂直方向。

<template v-for="item in arrayJustify">
  <h3><code>{{item}}</code></h3>
  <Example>
    <div :class="item" class="flex flex-wrap gap-2 surface" >
      <div v-for="index in 4" class="secondary center w-16 h-8 flex-grow">
        {{index}}
      </div>
    </div>
  </Example>
</template>

<script setup>
const arrayJustify = [
    'justify-start',
    'justify-end',
    'justify-center',
    'justify-between',
    'justify-around',
    'justify-evenly',
];
</script>
