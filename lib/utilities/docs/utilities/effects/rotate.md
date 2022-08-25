# 旋转

添加`rotate-*`设置元素翻转角度

<Example class="flex flex-wrap gap-3 h-full">
  <div v-for = "item in arrayRotate" class="h-28 w-24 mt-4">
    <img src="/assets/avatar/avatar.png" :class=" 'rotate-' + item" class="ml-4 w-16 h-16">
    <div class="text-center mt-4">{{ 'rotate-' + item}}</div>
  </div>
</Example>

```html
  <img class="rotate-180" ...> 
```

<script setup>
  const arrayRotate = [
    0,
    1,
    2,
    3,
    6,
    12,
    45,
    90,
    180
  ]
</script>
