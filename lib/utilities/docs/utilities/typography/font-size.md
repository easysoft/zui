# 字体大小

使用 `text-*` 工具类控制元素的字体大小。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in fontSizeJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

<Example class="leading-7" background="light-circle">
  <div class="text-xs">text-xs 字体大小</div>
  <div class="text-sm">text-sm 字体大小</div>
  <div class="text-base">text-base 字体大小</div>
  <div class="text-md">text-md 字体大小</div>
  <div class="text-lg">text-lg 字体大小</div>
  <div class="text-xl">text-xl 字体大小</div>
  <div class="text-2xl">text-2xl 字体大小</div>
</Example>

```html
<div class="text-xs">text-xs 字体大小</div>
<div class="text-sm">text-sm 字体大小</div>
<div class="text-base">text-base 字体大小</div>
<div class="text-md">text-md 字体大小</div>
<div class="text-lg">text-lg 字体大小</div>
<div class="text-xl">text-xl 字体大小</div>
<div class="text-2xl">text-2xl 字体大小</div>
```

<script setup>
  const fontSizeJson = [
    {name: 'text-xs', desc: 'font-size: 0.75rem; line-height: 1rem;'},
    {name: 'text-sm', desc: 'font-size: 0.75rem; line-height: 1rem;'},
    {name: 'text-base', desc: 'font-size: 0.8125rem; line-height: 1.25rem;'},
    {name: 'text-lg', desc: 'font-size: 1rem; line-height: 1.5rem;'},
    {name: 'text-xl', desc: 'font-size: 1.125rem; line-height: 1.75rem;'},
    {name: 'text-2xl', desc: 'font-size: 1.5rem;line-height: 2rem;'},
  ]
</script>
