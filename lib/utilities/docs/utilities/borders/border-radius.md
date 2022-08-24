# 边框圆角

使用'rounded-*' 设置元素边框圆角大小

  <Example>
   <div class="flex flex-wrap gap-3 mt-1">
     <div :key="item" v-for ="item in arrayRadius" class="w-24 h-28 mt-4" >
       <div :class="item"  class="bg-primary w-24 h-24" ></div>
       <div class="text-center h-4">
         <div>{{item}}</div>
       </div>
     </div>
   </div>
 </Example>

```html
<div class="rounded-sm ...">
</div>
```

<script setup>
 const arrayRadius =  [
   'rounded-sm',
   'rounded',
   'rounded-md',
   'rounded-lg',
   'rounded-xl',
   'cicle',
   'rounded-full',
   'rounded-none',
 ]
</script>
