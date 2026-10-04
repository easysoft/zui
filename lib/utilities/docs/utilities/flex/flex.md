# flex

## 效果

使用 `flex-*` 设置 Flex 项目的 CSS `flex` 简写属性，组合控制增长、收缩和基准尺寸。

<script setup>
  const flexJson = [
    'flex-auto',
    'flex-1',
    'flex-initial',
    'flex-none',
  ];
</script>

<template v-for="item in flexJson">
  <h3><code>{{item}}</code></h3>
  <Example>
    <div :class="item === 'flex-initial' ? 'w-48' : 'w-full' " class="flex gap-3 surface" >
      <div :class="item" v-for="index in 3" class="secondary center w-24 h-8">
        24 &times; 8
      </div>
    </div>
    <div class="text-center">{{item.name}}</div>
  </Example>
</template>

## 混合使用

<Example>
  <div class="row gap-3 surface" >
    <div v-for="item in flexJson" :key="item" :class="item" class="secondary center w-24 h-8 font-mono">
      {{item}}
    </div>
  </div>
</Example>
