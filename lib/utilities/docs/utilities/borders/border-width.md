# 边框大小

使用'bd-*' 设置元素边框圆角大小

  <Example>
   <div class="flex flex-wrap gap-3 mt-1">
     <div :key="item" v-for ="item in arrayRadius" class="w-12 h-16 mt-4" >
       <div :class="item"  class="bd bd-primary w-12 h-12" ></div>
       <div class="text-center h-4">
         <div>{{item}}</div>
       </div>
     </div>
   </div>
 </Example>

```html
<div class="bd ...">
</div>
```

<script setup>
 const arrayRadius =  [
   'bd',
   'bd-2',
   'bd-4',
   'bd-0',
   'bd-t-0',
   'bd-r-0',
   'bd-b-0',
   'bd-l-0',
 ]
</script>
