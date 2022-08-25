# flex 

使用`flex-*`应用CSS`flex`属性设置当前元素在Grid或Flex容器中的伸缩方式。

  <script setup>
    const arrayFlex = [
      {name:'flex-1',},
      {name:'flex-initial',},
      {name:'flex-none',}
    ]
  </script> 

<Example>
  <template v-for="item in arrayFlex">
     <div :class=" item.name=== 'flex-initial' ? 'w-48' : 'w-full' " class="flex gap-3 mt-3 mt-4" >
       <div :class="item.name" v-for="index in 3" class="bg-primary w-24 h-16">
         <div class="mt-5 text-canvas text-center">{{index}}</div>
       </div>
     </div>
     <div class="text-center">{{item.name}}</div>
  </template>
</Example>

```html
  <div class="flex ...">
    <div class="flex-1 ..."></div>
    <div class="flex-1 ..."></div>
    <div class="flex-1 ..."></div>
  </div>
```
