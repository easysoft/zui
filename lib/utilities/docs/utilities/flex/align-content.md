
# align-content

使用`content-*`应用CSS`align-content`属性设置Flex容器中多行子元素沿交叉轴的对齐方式。

## 效果展示

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

<template v-for="item in alignContentJson">
  <h3>{{item}}</h3>
  <Example class="p-0">
     <div :class="item" class="flex flex-wrap h-96 gap-2 -bg-slate-200" >
       <div v-for="index in 10" class="bg-primary -basis-32 h-16 -flex-grow">
         <div class="mt-5 text-canvas text-center">{{index}}</div>
       </div>
     </div>
  </Example>
</template>
