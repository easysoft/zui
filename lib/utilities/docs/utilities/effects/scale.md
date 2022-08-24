
# 缩放

<Example class="flex flex-wrap gap-3 h-full">
 <div v-for = "item in arrayScale" class="h-28 w-24 mt-4">
   <img src="/favicon.svg" :class="'scale-' + item" class="w-16 h-16">
   <div class="text-center mt-4">{{ 'scale-' + item}}</div>
 </div>
</Example>

```html
<img class="scale-150" src="...">
```

<script setup>
  const arrayScale = [
    150,
    125,
    110,
    105,
    100,
    50,
    0
  ]
</script>
