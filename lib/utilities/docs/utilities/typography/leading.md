# 行高

## 定义

使用 `leading-*` 工具类来控制元素文字行高。

<Example padding="p-0">
  <table class="table">
    <thead class="sticky top-0">
      <tr>
        <th>工具类</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="x in leadingList" :key="x.name">
        <td class="font-mono">{{x.name}}</td>
        <td><code>{{x.desc}}</code></td>
      </tr>
    </tbody>
  </table>
</Example>

## 固定行高

使用 `leading-*` 工具类给一个元素一个固定的行高。

::: tabs

== 示例

<Example class="col gap-2" background="light-grid">
  <div class="leading-3 primary-pale">leading-3 行高展示</div>
  <div class="leading-4 secondary-pale">leading-4 行高展示</div>
  <div class="leading-5 success-pale">leading-5 行高展示</div>
  <div class="leading-6 warning-pale">leading-6 行高展示</div>
  <div class="leading-7 danger-pale">leading-7 行高展示</div>
  <div class="leading-8 important-pale">leading-8 行高展示</div>
  <div class="leading-9 special-pale">leading-9 行高展示</div>
  <div class="leading-10 gray-pale">leading-10 行高展示</div>
</Example>

== HTML

```html
<div class="leading-3">leading-3 行高展示</div>
<div class="leading-4">leading-4 行高展示</div>
<div class="leading-5">leading-5 行高展示</div>
<div class="leading-6">leading-6 行高展示</div>
<div class="leading-7">leading-7 行高展示</div>
<div class="leading-8">leading-8 行高展示</div>
<div class="leading-9">leading-9 行高展示</div>
<div class="leading-10">leading-10 行高展示</div>
```

:::

## 相对行高

使用 `leading-none`、 `leading-tight`、 `leading-snug`、 `leading-normal`、 `leading-relaxed` 和 `leading-loose` 等工具类，根据元素当前的字体大小，给它一个相对的行高。

::: tabs

== 示例

<Example class="col gap-4" background="light-grid">
  <div class="row items-end gap-2">
    <div class="primary-pale leading-none">leading-none 行高展示</div>
    <div class="success-pale leading-none text-lg">leading-none 行高展示</div>
    <div class="danger-pale leading-none text-xl">leading-none 行高展示</div>
  </div>
  <div class="row items-end gap-2">
    <div class=" primary-pale leading-tight">leading-tight 行高展示</div>
    <div class="success-pale leading-tight text-lg">leading-tight 行高展示</div>
    <div class="danger-pale leading-tight text-xl">leading-tight 行高展示</div>
  </div>
  <div class="row items-end gap-2">
    <div class=" primary-pale leading-snug">leading-snug 行高展示</div>
    <div class="success-pale leading-snug text-lg">leading-snug 行高展示</div>
    <div class="danger-pale leading-snug text-xl">leading-snug 行高展示</div>
  </div>
  <div class="row items-end gap-2">
    <div class="primary-pale leading-normal">leading-normal 行高展示</div>
    <div class="success-pale leading-normal text-lg">leading-normal 行高展示</div>
    <div class="danger-pale leading-normal text-xl">leading-normal 行高展示</div>
  </div>
  <div class="row items-end gap-2">
    <div class="primary-pale leading-relaxed">leading-relaxed 行高展示</div>
    <div class="success-pale leading-relaxed text-lg">leading-relaxed 行高展示</div>
    <div class="danger-pale leading-relaxed text-xl">leading-relaxed 行高展示</div>
  </div>
  <div class="row items-end gap-2">
    <div class="primary-pale leading-loose">leading-loose 行高展示</div>
    <div class="success-pale leading-loose text-lg">leading-loose 行高展示</div>
    <div class="danger-pale leading-loose text-xl">leading-loose 行高展示</div>
  </div>
</Example>

== HTML

```html
<div class="row items-end gap-2">
  <div class="leading-none">leading-none 行高展示</div>
  <div class="leading-none text-lg">leading-none 行高展示</div>
  <div class="leading-none text-xl">leading-none 行高展示</div>
</div>
<div class="row items-end gap-2">
  <div class=" leading-tight">leading-tight 行高展示</div>
  <div class="leading-tight text-lg">leading-tight 行高展示</div>
  <div class="leading-tight text-xl">leading-tight 行高展示</div>
</div>
<div class="row items-end gap-2">
  <div class=" leading-snug">leading-snug 行高展示</div>
  <div class="leading-snug text-lg">leading-snug 行高展示</div>
  <div class="leading-snug text-xl">leading-snug 行高展示</div>
</div>
<div class="row items-end gap-2">
  <div class="leading-normal">leading-normal 行高展示</div>
  <div class="leading-normal text-lg">leading-normal 行高展示</div>
  <div class="leading-normal text-xl">leading-normal 行高展示</div>
</div>
<div class="row items-end gap-2">
  <div class="leading-relaxed">leading-relaxed 行高展示</div>
  <div class="leading-relaxed text-lg">leading-relaxed 行高展示</div>
  <div class="leading-relaxed text-xl">leading-relaxed 行高展示</div>
</div>
<div class="row items-end gap-2">
  <div class="leading-loose">leading-loose 行高展示</div>
  <div class="leading-loose text-lg">leading-loose 行高展示</div>
  <div class="leading-loose text-xl">leading-loose 行高展示</div>
</div>
```

:::

<script setup>
const leadingList = [
    {name: 'leading-3', desc: 'line-height: .75rem;'},
    {name: 'leading-4', desc: 'line-height: 1rem;'},
    {name: 'leading-5', desc: 'line-height: 1.25rem;'},
    {name: 'leading-6', desc: 'line-height: 1.5rem;'},
    {name: 'leading-7', desc: 'line-height: 1.75rem;'},
    {name: 'leading-8', desc: 'line-height: 2rem;'},
    {name: 'leading-9', desc: 'line-height: 2.25rem;'},
    {name: 'leading-10', desc: 'line-height: 2.5rem;'},
    {name: 'leading-none', desc: 'line-height: 1;'},
    {name: 'leading-tight', desc: 'line-height: 1.25;'},
    {name: 'leading-snug', desc: 'line-height: 1.375;'},
    {name: 'leading-normal', desc: 'line-height: 1.5;'},
    {name: 'leading-relaxed', desc: 'line-height: 1.625;'},
    {name: 'leading-loose', desc: 'line-height: 2;'},
];
</script>
