# 展开方向

使用`flex-*`设置flex布局下子元素的展开方向

<script setup>
  const arrayDirection = [
    'row',
    'row-reverse',
    'col',
    'col-reverse'
  ]
</script>

<Example>
  <template v-for="item in arrayDirection">
    <div :class="item" class="flex gap-3 mt-3" >
      <div v-for="index in 3" class="bg-primary w-full h-16">
        <div class="mt-5 text-canvas text-center">{{index}}</div>
      </div>
    </div>
    <div class="text-center">{{item}}</div>
  </template>
</Example>

```html
  <div class="flex row ...">
    ...
  </div>
```
