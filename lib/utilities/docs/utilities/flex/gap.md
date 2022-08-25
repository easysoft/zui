# 子元素间距

使用`align-*`设置弹性布局下容器中的元素间距

 <script setup>
   const arrayGap = [
     '0',
     'x-0',
     'y-0',
     '1',
     'x-1',
     'y-1',
     '2',
     'x-2',
     'y-2',
     '3',
     'x-3',
     'y-3',
     '4',
     'x-4',
     'y-4',
     '5',
     'x-5',
     'y-5',
     '6',
     'x-6',
     'y-6',
     '7',
     'x-7',
     'y-7',
     '8',
     'x-8',
     'y-8',
   ]
 </script>

   <Example v-for="item in arrayGap"> 
      <div :class="'gap-' + item" class="flex flex-wrap bd bd-solid px-8 h-full" >
        <div v-for="index in 10" class="bg-primary w-32 h-16">
          <div class="mt-5 text-canvas text-center">{{index}}</div>
        </div>
      </div>
      <div class="text-center text-2xl mb-8">{{'gap-' + item}}</div>
   </Example>

```html
<div class="flex flex-wrap gap-* ...">
</div>
```
