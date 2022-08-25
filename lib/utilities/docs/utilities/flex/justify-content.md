# justify-content

使用`justify-*`应用CSS`justify-content`属性设置Flex容器中元素沿水平轴的对齐方式。

  <script setup>
    const arrayJustify = [
      'start',
      'end',
      'center',
      'between',
      'around',
      'evenly',
    ]
  </script>

 <template v-for="item in arrayJustify">
   <Example> 
      <div :class="'justify-' + item" class="flex flex-wrap bd bd-solid px-8 h-full gap-3 " >
        <div v-for="index in 4" class="bg-primary w-16 h-16">
          <div class="mt-5 text-canvas text-center">{{index}}</div>
        </div>
      </div>
      <div class="text-center text-2xl mb-8">{{'justify-' + item}}</div>
   </Example>
 </template>

 ```html
   <div class="justify-start flex flex-wrap ...">
     <div></div>
     ...
   </div>
 ```

