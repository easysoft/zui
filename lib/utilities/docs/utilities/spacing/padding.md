# 内边距

## 定义

通过 `p-*` 工具类设置内边距，可用的工具类包括：

<Example padding="p-0" class="overflow-auto" style="max-height: 400px">
  <table class="table">
    <thead class="sticky top-0">
      <tr>
        <th>工具类</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="p in paddingList" :key="p">
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
  <div class="secondary-pale ring ring-secondary ring-opacity-50 p-3 rounded">
    <div class="secondary w-16 h-16 rounded"></div>
  </div>
  <div class="secondary-pale ring ring-secondary ring-opacity-50 pt-6 rounded">
    <div class="secondary w-16 h-16 rounded"></div>
  </div>
  <div class="secondary-pale ring ring-secondary ring-opacity-50 pr-4 rounded">
    <div class="secondary w-16 h-16 rounded"></div>
  </div>
  <div class="secondary-pale ring ring-secondary ring-opacity-50 pb-8 rounded">
    <div class="secondary w-16 h-16 rounded"></div>
  </div>
  <div class="secondary-pale ring ring-secondary ring-opacity-50 pl-2 rounded">
    <div class="secondary w-16 h-16 rounded"></div>
  </div>
</Example>

== HTML

```html
<div class="p-3 ..."></div>
<div class="pt-6 ..."></div>
<div class="pr-4 ..."></div>
<div class="pb-8 ..."></div>
<div class="pl-2 ..."></div>
```

:::

<script setup>
const paddingList = 'p-0,p-px,p-0.5,p-1,p-1.5,p-2,p-2.5,p-3,p-3.5,p-4,p-5,p-6,p-7,p-8,p-9,p-10,px-0,py-0,pt-0,pr-0,pb-0,pl-0,px-px,py-px,pt-px,pr-px,pb-px,pl-px,px-0.5,py-0.5,pt-0.5,pr-0.5,pb-0.5,pl-0.5,px-1,py-1,pt-1,pr-1,pb-1,pl-1,px-1.5,py-1.5,pt-1.5,pr-1.5,pb-1.5,pl-1.5,px-2,py-2,pt-2,pr-2,pb-2,pl-2,px-2.5,py-2.5,pt-2.5,pr-2.5,pb-2.5,pl-2.5,px-3,py-3,pt-3,pr-3,pb-3,pl-3,px-3.5,py-3.5,pt-3.5,pr-3.5,pb-3.5,pl-3.5,px-4,py-4,pt-4,pr-4,pb-4,pl-4,px-5,py-5,pt-5,pr-5,pb-5,pl-5,px-6,py-6,pt-6,pr-6,pb-6,pl-6,px-7,py-7,pt-7,pr-7,pb-7,pl-7,px-8,py-8,pt-8,pr-8,pb-8,pl-8,px-9,py-9,pt-9,pr-9,pb-9,pl-9,px-10,py-10,pt-10,pr-10,pb-10,pl-10'.split(',');
const paddingTypes = {
    pt: 'padding-top: {0};',
    pr: 'padding-right: {0};',
    pb: 'padding-bottom: {0};',
    pl: 'padding-left: {0};',
    p: 'padding: {0};',
    px: 'padding-left: {0}; padding-right: {0};',
    py: 'padding-top: {0}; padding-bottom: {0};',
};
const getPadding = (padding) => {
    const [type, value] = padding.split('-');
    const cssValue = `${value === 'px' ? 1 : (4 * value)}px`;
    return paddingTypes[type].replaceAll('{0}', cssValue);
};
</script>
