# order 

使用`order-*`应用CSS属性`order`设置当前元素在Flex容器中的排列顺序

<script setup>
  const arrayOrder = [
    'last',
    'first',
    'none',
  ]
</script>

<Example class="flex flex-wrap gap-3">
  <div v-for="index in 12 " :class="'order-' + (13-index) ">
    <div class="w-16 h-16 pt-5 bg-primary"> 
          <div class="text-canvas text-center">{{index}}</div>
    </div>
    <div class="text-center">{{'order-' + (13-index)}}</div>
  </div>
</Example>

```html
<div class="flex flex-wrap gap-3 ...">
  <div class="order-12">1</div>
  <div class="order-11">2</div>
  <div class="order-10">3</div>
  <div class="order-9">4</div>
  ...
</div>
```

使用`order-*`添加 first last nome 也可以改变flex 子元素排列顺序

<Example class="flex flex-wrap gap-3">
  <div v-for="(item, index) in arrayOrder" :class="'oreder-' + item">
    <div class="w-16 h-16 pt-5 bg-primary"> 
          <div class="text-canvas text-center">{{index}}</div>
    </div>
    <div class="text-center">{{'order-' + item }}</div>
  </div>
</Example>

```html
<div class="flex ...">
  <div class="order-last ...">1</div>
  <div class="order-first ...">2</div>
  <div class="order-none ...">3</div>
<div>
```
