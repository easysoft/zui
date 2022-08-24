# 上/右/下/左

用于控制定位元素的位置的工具类。

## 使用方法

<Example class="flex gap-4 flex-wrap">
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute inset-0 w-12 bg-secondary flex justify-center items-center rounded text-white">1</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute inset-x-0 top-0 h-12 bg-secondary flex justify-center items-center rounded text-white">2</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute inset-x-0 bottom-0 h-12 bg-secondary flex justify-center items-center rounded text-white">3</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute inset-y-0 right-0 w-12 bg-secondary flex justify-center items-center rounded text-white">4</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute inset-y-0 left-0 w-12 bg-secondary flex justify-center items-center rounded text-white">5</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute left-0 top-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">6</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute right-0 top-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">7</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute left-0 bottom-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">8</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute right-0 bottom-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">9</div>
  </div>
</Example>

```html
<div class="relative h-24 w-24">
  <div class="absolute inset-0 w-12">1</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute inset-x-0 top-0 h-12">2</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute inset-x-0 bottom-0 h-12">3</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute inset-y-0 right-0 w-12">4</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute inset-y-0 left-0 w-12">5</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute left-0 top-0 w-12 h-12">6</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute right-0 top-0 w-12 h-12">7</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute left-0 bottom-0 w-12 h-12">8</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute right-0 bottom-0 w-12 h-12">9</div>
</div>
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
      <tr v-for="item in positionJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const positionJson = [
    {name: 'inset-0', desc: 'top: 0px; right: 0px; bottom: 0px; left: 0px;'},
    {name: 'inset-auto', desc: 'top: auto; right: auto; bottom: auto; left: auto;'},
    {name: 'inset-x-0', desc: 'left: 0px; right: 0px;'},
    {name: 'inset-y-0', desc: 'top: 0px; bottom: 0px;'},
    {name: 'top-0', desc: 'top: 0px;'},
    {name: 'right-0', desc: 'right: 0px;'},
    {name: 'bottom-0', desc: 'bottom: 0px;'},
    {name: 'left-0', desc: 'left: 0px;'},
    {name: 'top-full', desc: 'top: 100%;'},
    {name: 'right-full', desc: 'right: 100%;'},
    {name: 'bottom-full', desc: 'bottom: 100%;'},
    {name: 'left-full', desc: 'left: 100%;'},
    {name: 'top-auto', desc: 'top: auto;'},
    {name: 'right-auto', desc: 'right: auto;'},
    {name: 'bottom-auto', desc: 'bottom: auto;'},
    {name: 'left-auto', desc: 'left: auto;'},
  ]
</script>