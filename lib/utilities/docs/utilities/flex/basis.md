# basis

## 效果

使用 `basis-*` 设置 Flex 项目的 CSS `flex-basis` 属性，定义项目分配剩余空间前沿主轴的初始尺寸。

<Example class="flex flex-wrap gap-3">
  <div :class="'basis-' + item" v-for="(item,index) in basisJson" >
    <div class="secondary w-full h-8"></div>
    <div class="mt-0.5 text-center">{{item}}</div>
  </div>
</Example>

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
  ];
</script>
