# basis

使用 `basis-*` 应用 CSS `flex-basis` 属性设置当前元素在 Grid 或 Flex 容器中弹性盒伸缩的基准值。

<script setup>
  const basisJson = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    14,
    16,
    20,
    24,
    28,
    32,
    36,
    40,
    44,
    48,
    52,
    56,
    60,
    64,
    72,
    80,
    96,
    'full',
    'auto',
    'px',
  ]
</script>

<Example class="flex flex-wrap gap-3">
  <div :class="'basis-' + item" v-for="(item,index) in basisJson" >
    <div class="bg-primary w-full h-16"></div>
    <div class="mt-5 text-center">{{item}}</div>
  </div>
</Example>

```html
  <div class="flex flex-wrap ...">
    <div class="basis-* ..."></div>
    ...
  </div>
```
