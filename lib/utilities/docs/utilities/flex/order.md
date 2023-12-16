# order

## 效果

使用 `order-*` 应用CSS属性 `order` 设置当前元素在 Flex 容器中的排列顺序。

<Example class="flex flex-wrap gap-3">
  <div v-for="index in 12" :class="'order-' + (13 - index) ">
    <div class="w-16 h-8 center primary">
        {{index}}
    </div>
    <div class="text-center text-gray font-mono">{{'order-' + (13-index)}}</div>
  </div>
</Example>

使用 `order-first`、`order-last`、`order-none` 也可以改变 Flex 子元素排列顺序。

<Example class="flex flex-wrap gap-3">
  <div v-for="(item, index) in arrayOrder" :class="'order-' + item">
    <div class="w-16 h-8 center primary">
        {{index}}
    </div>
    <div class="text-center text-gray font-mono">{{'order-' + item}}</div>
  </div>
</Example>

<script setup>
const arrayOrder = [
    'last',
    'first',
    'none',
];
</script>
