# 字体粗细

## 定义

使用 `font-*` 工具类来控制元素字体粗细。

<Example padding="p-0">
  <table class="table">
    <thead class="sticky top-0">
      <tr>
        <th>工具类</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="x in fontWeightList" :key="x">
        <td class="font-mono">{{x}}</td>
        <td><code><CssPropValue prop="font-weight" :fake="x" /></code></td>
      </tr>
    </tbody>
  </table>
</Example>

## 示例

::: tabs

== 示例

<Example background="light-circle">
  <div class="text-xl font-thin">font-thin 字体粗细</div>
  <div class="text-xl font-light">font-light 字体粗细</div>
  <div class="text-xl font-medium">font-medium 字体粗细</div>
  <div class="text-xl font-semibold">font-semibold 字体粗细</div>
  <div class="text-xl font-bold">font-bold 字体粗细</div>
  <div class="text-xl font-black">font-black 字体粗细</div>
</Example>

== HTML

```html
<div class="font-thin">font-thin 字体粗细</div>
<div class="font-light">font-light 字体粗细</div>
<div class="font-medium">font-medium 字体粗细</div>
<div class="font-semibold">font-semibold 字体粗细</div>
<div class="font-bold">font-bold 字体粗细</div>
<div class="font-black">font-black 字体粗细</div>
```

:::

<script setup>
const fontWeightList = [
   'font-thin',
   'font-light',
   'font-medium',
   'font-semibold',
   'font-bold',
   'font-black',
];
</script>
