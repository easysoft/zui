# flex

使用`flex-*`应用CSS`flex`属性设置当前元素在Grid或Flex容器中的伸缩方式。

<script setup>
  const flexJson = [
    'flex-1',
    'flex-initial',
    'flex-none',
  ];
</script>

<template v-for="item in flexJson">
  <h3>{{item}}</h3>
  <Example>
    <div :class="item === 'flex-initial' ? 'w-48' : 'w-full' " class="flex gap-3 mt-3 mt-4 -bg-stripes-blue" >
      <div :class="item" v-for="index in 3" class="bg-primary w-24 h-16">
        <div class="mt-5 text-canvas text-center">24 * 16</div>
      </div>
    </div>
    <div class="text-center">{{item.name}}</div>
  </Example>
</template>

```html
  <div class="flex ...">
    <div class="flex-1 ..."></div>
    <div class="flex-1 ..."></div>
    <div class="flex-1 ..."></div>
  </div>
```
