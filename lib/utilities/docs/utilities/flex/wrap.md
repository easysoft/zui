# wrap

添加 `flex-*` 应用 CSS `flex-wrap` 相关属性设置 Flex 容器中换行方式。

<template v-for="item in arrayWrap">
  <h3><code>{{item}}</code></h3>
  <Example>
    <div :class="item" class="flex gap-3 surface">
      <div v-for="index in 10" class="primary center w-24 h-8">
        {{index}}
      </div>
    </div>
  </Example>
</template>

<script setup>
const arrayWrap = [
    'flex-wrap',
    'flex-wrap-reverse',
    'flex-nowrap'
];
</script>
