# 子元素对齐方式

使用`self-*`设置自身在弹性布局下的对齐方式

 <script setup>
   const arrayAlignSelf = [
     'self-auto',
     'self-start',
     'self-end',
     'self-center',
     'self-stretch',
     'self-baseline',
   ]
 </script>

 <Example>
   <template v-for="item in arrayAlignSelf">
     <div class="flex flex-wrap gap-3 mt-3 h-96" >
       <div v-for="index in 10" :class="item" class="bg-primary w-24 h-16">
         <div class="mt-5 text-canvas text-center">{{index}}</div>
       </div>
     </div>
     <div class="text-center">{{item}}</div>
   </template>
 </Example>

 ```html
   <div class="flex flex-wrap ...">
     <div class="align-auto ...">
     ...
   </div>
 ```
