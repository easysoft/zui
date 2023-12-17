# 层级

## 定义

用于控制元素的堆叠层级的工具类。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in zIndexList">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

::: tabs

== 示例

<Example class="flex justify-center relative text-center -h-32" background="light-grid">
  <div class="relative w-14 h-14 bg-secondary text-white rounded flex justify-center items-center shadow-md z-50">z-50</div>
  <div class="relative w-14 h-14 --left-2 -top-2 bg-secondary text-white rounded flex justify-center items-center shadow-md z-40">z-40</div>
  <div class="relative w-14 h-14 --left-4 -top-3 bg-secondary text-white rounded flex justify-center items-center shadow-md z-30">z-30</div>
  <div class="relative w-14 h-14 --left-6 -top-4 bg-secondary text-white rounded flex justify-center items-center shadow-md z-20">z-20</div>
  <div class="relative w-14 h-14 --left-8 -top-6 bg-secondary text-white rounded flex justify-center items-center shadow-md z-10">z-10</div>
  <div class="relative w-14 h-14 --left-10 -top-8 bg-secondary text-white rounded flex justify-center items-center shadow-md z-0">z-0</div>
  <div class="relative w-14 h-14 --left-12 -top-10 bg-secondary text-white rounded flex justify-center items-center shadow-md z-auto">z-auto</div>
</Example>

== HTML

```html
<div class="z-50 ...">z-50</div>
<div class="z-40 ...">z-40</div>
<div class="z-30 ...">z-30</div>
<div class="z-20 ...">z-20</div>
<div class="z-10 ...">z-10</div>
<div class="z-0 ...">z-0</div>
<div class="z-auto ...">z-auto</div>
```

:::

<script setup>
const zIndexList = [
    {name: 'z-0', desc: 'z-index: 0;'},
    {name: 'z-10', desc: 'z-index: 10;'},
    {name: 'z-20', desc: 'z-index: 20;'},
    {name: 'z-30', desc: 'z-index: 30;'},
    {name: 'z-40', desc: 'z-index: 40;'},
    {name: 'z-50', desc: 'z-index: 50;'},
    {name: 'z-auto', desc: 'z-index: auto;'},
];
</script>
