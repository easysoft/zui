# justify-content

使用`justify-*`应用CSS`justify-content`属性设置Flex容器中元素沿水平轴的对齐方式。

  <script setup>
    const arrayJustify = [
      'justify-start',
      'justify-end',
      'justify-center',
      'justify-between',
      'justify-around',
      'justify-evenly',
    ];
  </script>

<Example v-for="item in arrayJustify" class="mb-3">
  <h3>{{item}}</h3>
  <div :class="item" class="flex flex-wrap gap-3 -bg-stripes-blue" >
    <div v-for="index in 4" class="bg-primary w-16 h-16">
      <div class="mt-5 text-canvas text-center">{{index}}</div>
    </div>
  </div>
</Example>

 ```html
   <div class="justify-start flex flex-wrap ...">
     <div></div>
     ...
   </div>
 ```

