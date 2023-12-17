# align-self

使用 `self-*` 应用 CSS `align-self` 属性设置当前元素在 Grid 或 Flex 容器中的交叉轴方向上的对齐方式。

<template v-for="item in alignSelfJson">
  <h3><code>{{item}}</code></h3>
  <Example>
    <div class="flex items-center h-48 gap-2 surface">
      <template v-for="index in 5">
        <div :class="index === 1 ? item : ''" class="secondary grow center" :style="{'min-height': index * 20 + 'px'}">
          {{index === 1 ? item : 'default'}}
        </div>
      </template>
    </div>
  </Example>
</template>

<script setup>
const alignSelfJson = [
    'self-auto',
    'self-start',
    'self-end',
    'self-center',
    'self-stretch',
    'self-baseline',
];
</script>
