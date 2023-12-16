# gap

## 效果

使用 `gap-*` 应用CSS属性 `gap` 设置 Flex 容器中元素间距。

<template v-for="item in arrayGap">
  <h3><code>{{item}}</code></h3>
  <Example>
    <div :class="item" class="inline-flex flex-wrap surface" >
      <div v-for="index in 12" class="center primary w-32 h-8">
        {{index}}
      </div>
    </div>
  </Example>
</template>

<script setup>
const arrayGap = [
    'gap-0',
    'gap-x-0',
    'gap-y-0',
    'gap-1',
    'gap-x-1',
    'gap-y-1',
    'gap-2',
    'gap-x-2',
    'gap-y-2',
    'gap-3',
    'gap-x-3',
    'gap-y-3',
    'gap-4',
    'gap-x-4',
    'gap-y-4',
    'gap-5',
    'gap-x-5',
    'gap-y-5',
    'gap-6',
    'gap-x-6',
    'gap-y-6',
    'gap-7',
    'gap-x-7',
    'gap-y-7',
    'gap-8',
    'gap-x-8',
    'gap-y-8',
];
</script>
