# 翻转

添加`flip-*`给元素添加翻转样式

 <Example class="flex flex-wrap gap-3 h-full">
  <div v-for = "item in arrayFlip" class="h-28 w-16 mt-4">
    <img src="/assets/avatar/avatar.png" :class="item" class="w-16 h-16">
    <div class="text-center mt-4">{{item}}</div>
  </div>
 </Example>

```html
  <img class="flip-x" src="...">
```
<script setup>
  const arrayFlip = [
    'flip-x',
    'flip-y',
  ]
</script>
