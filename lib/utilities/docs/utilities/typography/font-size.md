# 字体大小

## 定义

使用 `text-*` 工具类控制元素的字体大小。

<Example padding="p-0">
  <table class="table">
    <thead class="sticky top-0">
      <tr>
        <th>工具类</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="x in ['root', 'sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', '4xl']" :key="x">
        <td class="font-mono w-32">text-{{x}}</td>
        <td><code><CssPropValue prop="font-size" :fake="`text-${x}`" /></code></td>
      </tr>
    </tbody>
  </table>
</Example>

## 示例

::: tabs

== 示例

<Example class="leading-7" background="light-circle">
  <div class="text-root">text-root 字体大小</div>
  <div class="text-xs">text-xs 字体大小</div>
  <div class="text-sm">text-sm 字体大小</div>
  <div class="text-base">text-base 字体大小</div>
  <div class="text-md">text-md 字体大小</div>
  <div class="text-lg">text-lg 字体大小</div>
  <div class="text-xl">text-xl 字体大小</div>
  <div class="text-2xl">text-2xl 字体大小</div>
  <div class="text-3xl">text-3xl 字体大小</div>
  <div class="text-4xl">text-4xl 字体大小</div>
</Example>

== HTML

```html
<div class="text-root">text-root 字体大小</div>
<div class="text-xs">text-xs 字体大小</div>
<div class="text-sm">text-sm 字体大小</div>
<div class="text-base">text-base 字体大小</div>
<div class="text-md">text-md 字体大小</div>
<div class="text-lg">text-lg 字体大小</div>
<div class="text-xl">text-xl 字体大小</div>
<div class="text-2xl">text-2xl 字体大小</div>
<div class="text-3xl">text-3xl 字体大小</div>
<div class="text-4xl">text-4xl 字体大小</div>
```

:::
