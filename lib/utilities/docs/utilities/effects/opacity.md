# 不透明度

使用`fade-*`设置元素的不透明度

<Example>
  <div class="flex flex-wrap gap-3 mt-1">
    <div :key="item" v-for ="item in arrayOpacity" class="w-16 h-16 mt-4" >
      <div :class="'fade-' + item"  class="bg-primary w-16 h-12" ></div>
      <div class="text-center">
        <div>{{'fade-' + item}}</div>
      </div>
    </div>
  </div>
</Example>

```html
<div class="fade-0 ...">
</div>
```

<script setup>
  const arrayOpacity = [
    0,
    5,
    10,
    20,
    25,
    30,
    40,
    50,
    60,
    70,
    75,
    80,
    90,
    95,
    100
  ]
</script>
