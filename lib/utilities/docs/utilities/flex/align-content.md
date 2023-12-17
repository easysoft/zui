
# align-content

使用 `content-*` 应用CSS `align-content` 属性设置 Flex 容器中多行子元素沿交叉轴的对齐方式。

## 效果展示

<template v-for="item in alignContentJson">
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
  const alignContentJson = [
    'content-center',
    'content-start',
    'content-end',
    'content-between',
    'content-around',
    'content-evenly',
  ];
</script>
