# 层级

用于控制元素的堆栈顺序的工具类。

## 使用方法

<Example class="flex justify-center relative text-center -h-32">
  <div class="relative w-14 h-14 bg-surface rounded flex justify-center items-center shadow-md z-50">z-50</div>
  <div class="relative w-14 h-14 --left-2 -top-2 bg-surface rounded flex justify-center items-center shadow-md z-40">z-40</div>
  <div class="relative w-14 h-14 --left-4 -top-3 bg-surface rounded flex justify-center items-center shadow-md z-30">z-30</div>
  <div class="relative w-14 h-14 --left-6 -top-4 bg-surface rounded flex justify-center items-center shadow-md z-20">z-20</div>
  <div class="relative w-14 h-14 --left-8 -top-6 bg-surface rounded flex justify-center items-center shadow-md z-10">z-10</div>
</Example>

```html
<div class="z-50">z-50</div>
<div class="z-40">z-40</div>
<div class="z-30">z-30</div>
<div class="z-20">z-20</div>
<div class="z-10">z-10</div>
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
      <tr v-for="item in zIndexJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const zIndexJson = [
    {name: 'z-0', desc: 'z-index: 0;'},
    {name: 'z-10', desc: 'z-index: 10;'},
    {name: 'z-20', desc: 'z-index: 20;'},
    {name: 'z-30', desc: 'z-index: 30;'},
    {name: 'z-40', desc: 'z-index: 40;'},
    {name: 'z-50', desc: 'z-index: 50;'},
    {name: 'z-auto', desc: 'z-index: auto;'},
  ]
</script>