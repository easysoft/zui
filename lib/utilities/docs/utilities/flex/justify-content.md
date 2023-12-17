# justify-content

## 效果

使用 `justify-*` 应用 CSS `justify-content` 属性设置Flex容器中元素沿水平轴的对齐方式。

<template v-for="item in arrayJustify">
  <h3><code>{{item}}</code></h3>
  <Example>
    <div :class="item" class="flex flex-wrap gap-2 surface" >
      <div v-for="index in 4" class="primary center w-16 h-8 flex-grow">
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
