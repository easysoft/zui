
# 容器沿交叉轴对齐方式

使用`content-*`设置弹性布局下容器中的对齐方式


 <script setup>
   const arrayContent = [
     'content-center',
     'content-start',
     'content-end',
     'content-between',
     'content-around',
     'content-evenly',
   ]
 </script>

<template v-for="item in arrayContent">
  <Example class="py-8 bd-2 bd bd-t-0 bd-l-0 bd-r-0 bd-gray">
     <div :class="item" class="flex flex-wrap bd bd-solid px-8 h-96 gap-3 " >
       <div v-for="index in 10" class="bg-primary w-32 h-16">
         <div class="mt-5 text-canvas text-center">{{index}}</div>
       </div>
     </div>
     <div class="text-center text-2xl mb-8">{{item}}</div>
  </Example>
</template>

```html
  <div class="content-center flex flex-wrap ...">
    <div></div>
    ...
  </div>
```


 
