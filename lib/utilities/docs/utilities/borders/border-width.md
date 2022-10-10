# 边框大小

使用'border-*' 设置元素边框圆角大小

  <Example>
   <div class="flex flex-wrap gap-3 mt-1">
     <div :key="item" v-for ="item in arrayRadius" class="w-12 h-16 mt-4" >
       <div :class="item"  class="border border-primary w-12 h-12" ></div>
       <div class="text-center h-4">
         <div>{{item}}</div>
       </div>
     </div>
   </div>
 </Example>

```html
<div class="border ...">
</div>
```

<script setup>
 const arrayRadius =  [
   'border',
   'border-2',
   'border-4',
   'border-0',
   'border-t-0',
   'border-r-0',
   'border-b-0',
   'border-l-0',
 ]
</script>
