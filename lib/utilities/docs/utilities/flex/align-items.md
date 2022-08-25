# align-items

使用`items-*`应用CSS`align-items`属性 属性设置 Flex 容器中的交叉轴方向上的对齐方式。

  <script setup>
    const arrayAlignItems = [
      'start',
      'end',
      'center',
      'baseline',
      'stretch',
    ]
  </script>

 <template v-for="item in arrayAlignItems">
   <Example class="py-8 bd-2 bd bd-t-0 bd-l-0 bd-r-0 bd-gray">
      <div :class="'items-' + item" class="flex flex-wrap bd bd-solid px-8 h-48 gap-3 " >
        <div v-for="index in 6" class="bg-primary w-16 h-16">
          <div class="mt-5 text-canvas text-center">{{index}}</div>
        </div>
      </div>
      <div class="text-center text-2xl mb-8">{{'items-' +  item}}</div>
   </Example>
 </template>

 ```html
   <div class="items-start flex flex-wrap ...">
     <div></div>
     ...
   </div>
 ```
