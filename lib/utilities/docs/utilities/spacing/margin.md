# 外边距

## 定义

通过 `m-*` 工具类设置外边距，可用的工具类包括：

<Example padding="p-0" class="overflow-auto" style="max-height: 400px">
  <table class="table">
    <thead class="sticky top-0">
      <tr>
        <th>工具类</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="p in marginList" :key="p">
        <td class="font-mono">{{p}}</td>
        <td><code>{{getPadding(p)}}</code></td>
      </tr>
    </tbody>
  </table>
</Example>

## 示例

::: tabs

== 示例

<Example class="row justify-around items-center">
  <div class="ring-strong surface-strong rounded">
    <div class="secondary w-16 h-16 rounded m-3"></div>
  </div>
  <div class="ring-strong surface-strong rounded">
    <div class="secondary w-16 h-16 rounded mt-6"></div>
  </div>
  <div class="ring-strong surface-strong rounded">
    <div class="secondary w-16 h-16 rounded mr-4"></div>
  </div>
  <div class="ring-strong surface-strong rounded">
    <div class="secondary w-16 h-16 rounded mb-8"></div>
  </div>
  <div class="ring-strong surface-strong rounded">
    <div class="secondary w-16 h-16 rounded ml-2"></div>
  </div>
</Example>

== HTML

```html
<div class="m-3 ..."></div>
<div class="mt-6 ..."></div>
<div class="mr-4 ..."></div>
<div class="mb-8 ..."></div>
<div class="ml-2 ..."></div>
```

:::

<script setup>
const marginList = 'm-auto,mx-auto,my-auto,mt-auto,mr-auto,mb-auto,ml-auto,m-0,m-px,m-0.5,m-1,m-1.5,m-2,m-2.5,m-3,m-3.5,m-4,m-5,m-6,m-7,m-8,m-9,m-10,mx-0,my-0,mt-0,mr-0,mb-0,ml-0,mx-px,my-px,mt-px,mr-px,mb-px,ml-px,mx-0.5,my-0.5,mt-0.5,mr-0.5,mb-0.5,ml-0.5,mx-1,my-1,mt-1,mr-1,mb-1,ml-1,mx-1.5,my-1.5,mt-1.5,mr-1.5,mb-1.5,ml-1.5,mx-2,my-2,mt-2,mr-2,mb-2,ml-2,mx-2.5,my-2.5,mt-2.5,mr-2.5,mb-2.5,ml-2.5,mx-3,my-3,mt-3,mr-3,mb-3,ml-3,mx-3.5,my-3.5,mt-3.5,mr-3.5,mb-3.5,ml-3.5,mx-4,my-4,mt-4,mr-4,mb-4,ml-4,mx-5,my-5,mt-5,mr-5,mb-5,ml-5,mx-6,my-6,mt-6,mr-6,mb-6,ml-6,mx-7,my-7,mt-7,mr-7,mb-7,ml-7,mx-8,my-8,mt-8,mr-8,mb-8,ml-8,mx-9,my-9,mt-9,mr-9,mb-9,ml-9,mx-10,my-10,mt-10,mr-10,mb-10,ml-10'.split(',');
const marginTypes = {
    mt: 'margin-top: {0};',
    mr: 'margin-right: {0};',
    mb: 'margin-bottom: {0};',
    ml: 'margin-left: {0};',
    m: 'margin: {0};',
    mx: 'margin-left: {0}; margin-right: {0};',
    my: 'margin-top: {0}; margin-bottom: {0};',
};
const getPadding = (margin) => {
    const [type, value] = margin.split('-');
    const cssValue = value === 'auto' ? 'auto' : (`${value === 'px' ? 1 : (4 * value)}px`);
    return marginTypes[type].replaceAll('{0}', cssValue);
};
</script>
