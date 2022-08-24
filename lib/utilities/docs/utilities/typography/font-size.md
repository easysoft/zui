# 字体大小

## 使用方法

使用 `text-*` 工具类控制元素的字体大小。

<Example class="leading-7" background="light-circle">
  <div class="text-xs">text-xs 字体大小</div>
  <div class="text-sm">text-sm 字体大小</div>
  <div class="text-base">text-base 字体大小</div>
  <div class="text-lg">text-lg 字体大小</div>
  <div class="text-xl">text-xl 字体大小</div>
  <div class="text-2xl">text-2xl 字体大小</div>
</Example>

```html
<div class="text-xs">text-xs 字体大小</div>
<div class="text-sm">text-sm 字体大小</div>
<div class="text-base">text-base 字体大小</div>
<div class="text-lg">text-lg 字体大小</div>
<div class="text-xl">text-xl 字体大小</div>
<div class="text-2xl">text-2xl 字体大小</div>
```

## 默认类参考

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>修饰类</th>
        <th>定义</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in fontSizeJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

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