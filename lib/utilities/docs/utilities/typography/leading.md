# 行高

用于控制元素的前行距（行高）的工具类。

## 固定行高

使用 `leading-*` 工具类给一个元素一个固定的行高，而不管当前的字体大小。

<Example class="flex items-end gap-2 flex-wrap">
  <div class="bd px-2 mb-4 leading-3">leading-3 行高展示</div>
  <div class="bd px-2 mb-4 leading-4">leading-4 行高展示</div>
  <div class="bd px-2 mb-4 leading-5">leading-5 行高展示</div>
  <div class="bd px-2 mb-4 leading-6">leading-6 行高展示</div>
  <div class="bd px-2 mb-4 leading-7">leading-7 行高展示</div>
  <div class="bd px-2 mb-4 leading-8">leading-8 行高展示</div>
  <div class="bd px-2 mb-4 leading-9">leading-9 行高展示</div>
  <div class="bd px-2 mb-4 leading-10">leading-10 行高展示</div>
</Example>

```html
<div class="leading-3">leading-3 行高展示</div>
<div class="leading-4">leading-4 行高展示</div>
...
```

## 相对行高

使用 `leading-none`、 `leading-tight`、 `leading-snug`、 `leading-normal`、 `leading-relaxed` 和 `leading-loose` 等工具类，根据元素当前的字体大小，给它一个相对的行高。

<Example>
  <div class="flex items-end gap-2 mb-4">
    <div class="bd px-2 leading-none">leading-none 行高展示</div>
    <div class="bd px-2 leading-none text-lg">leading-none 行高展示</div>
    <div class="bd px-2 leading-none text-xl">leading-none 行高展示</div>
  </div>
  <div class="flex items-end gap-2 mb-4">
    <div class="bd px-2 leading-tight">leading-tight 行高展示</div>
    <div class="bd px-2 leading-tight text-lg">leading-tight 行高展示</div>
    <div class="bd px-2 leading-tight text-xl">leading-tight 行高展示</div>
  </div>
  <div class="flex items-end gap-2 mb-4">
    <div class="bd px-2 leading-snug">leading-snug 行高展示</div>
    <div class="bd px-2 leading-snug text-lg">leading-snug 行高展示</div>
    <div class="bd px-2 leading-snug text-xl">leading-snug 行高展示</div>
  </div>
  <div class="flex items-end gap-2 mb-4">
    <div class="bd px-2 leading-normal">leading-normal 行高展示</div>
    <div class="bd px-2 leading-normal text-lg">leading-normal 行高展示</div>
    <div class="bd px-2 leading-normal text-xl">leading-normal 行高展示</div>
  </div>
  <div class="flex items-end gap-2 mb-4">
    <div class="bd px-2 leading-relaxed">leading-relaxed 行高展示</div>
    <div class="bd px-2 leading-relaxed text-lg">leading-relaxed 行高展示</div>
    <div class="bd px-2 leading-relaxed text-xl">leading-relaxed 行高展示</div>
  </div>
  <div class="flex items-end gap-2 mb-4">
    <div class="bd px-2 leading-loose">leading-loose 行高展示</div>
    <div class="bd px-2 leading-loose text-lg">leading-loose 行高展示</div>
    <div class="bd px-2 leading-loose text-xl">leading-loose 行高展示</div>
  </div>
</Example>

```html
<div>
  <div class="leading-none">leading-none 行高展示</div>
  <div class="leading-none text-lg">leading-none 行高展示</div>
  <div class="leading-none text-xl">leading-none 行高展示</div>
</div>
<div>
  <div class="leading-tight">leading-tight 行高展示</div>
  <div class="leading-tight text-lg">leading-tight 行高展示</div>
  <div class="leading-tight text-xl">leading-tight 行高展示</div>
</div>
...

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
      <tr v-for="item in leadingJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const leadingJson = [
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
  ]
</script>