# 显示类型

控制元素显示类型的工具类

## block

使用 `block` 创建一个块级元素。

<Example>
  <span>这是一个行内标签</span>
  <span class="block -bg-secondary-300 h-16">这是一个行内标签</span>
</Example>

```html
<span>这是一个 span 标签。</span>
<span class="block h-16">这是一个 span 标签。</span>
```

## inline-block

使用 `inline-block` 创建一个内联块级元素。

<Example>
  <span>这是一个 span 标签。</span>
  <span class="inline-block -bg-secondary-300 h-16">这是一个 span 标签。</span>
</Example>

```html
<span>这是一个 span 标签。</span>
<span class="inline-block h-16">这是一个 span 标签。</span>
```

## inline

使用 `inline` 创建一个内联元素。

<Example>
  <span>这是一个 span 标签。</span>
  <div class="inline -bg-secondary-300 h-16">这是一个 div 标签。</div>
</Example>

```html
<span>这是一个 span 标签。</span>
<div class="inline h-16">这是一个 div 标签。</div>
```

## flex

使用 `flex` 来创建一个块级的 `flex` 容器。

<Example>
  <div class="flex gap-2 h-12">
    <span class="-bg-secondary-300 text-white flex justify-center items-center w-12">1</span>
    <span class="-bg-secondary-300 text-white flex justify-center items-center w-12">2</span>
  </div>
</Example>

```html
 <div class="flex h-12">
  <span class="w-12">1</span>
  <span class="w-12">2</span>
</div>
```

## inline-flex

使用 `inline-flex` 来创建一个内联的 `flex` 容器。

<Example>
  <div class="inline-flex space-x-4">
    <div class="-bg-secondary-300 text-white rounded text-center px-6 py-4 flex-1">1</div>
    <div class="-bg-secondary-300 text-white rounded text-center px-6 py-4 flex-1">2</div>
    <div class="-bg-secondary-300 text-white rounded text-center px-6 py-4 flex-1">3</div>
  </div>
</Example>

```html
<div class="inline-flex">
  <div class="px-6 py-4 flex-1">1</div>
  <div class="px-6 py-4 flex-1">2</div>
  <div class="px-6 py-4 flex-1">3</div>
</div>
```

## table table-row table-cell

<Example>
  <div class="table w-full bg-surface">
    <div class="table-row-group">
      <div class="table-row">
        <div class="table-cell -bg-secondary-300 text-white text-center px-6 py-4">1</div>
        <div class="table-cell -bg-secondary-200 text-white text-center px-6 py-4">2</div>
        <div class="table-cell -bg-secondary-300 text-white text-center px-6 py-4">3</div>
      </div>
      <div class="table-row">
        <div class="table-cell -bg-secondary-200 text-white text-center px-6 py-4">4</div>
        <div class="table-cell -bg-secondary-300 text-white text-center px-6 py-4">5</div>
        <div class="table-cell -bg-secondary-200 text-white text-center px-6 py-4">6</div>
      </div>
    </div>
  </div>
</Example>

```html
<div class="table w-full">
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell">1</div>
      <div class="table-cell">2</div>
      <div class="table-cell">3</div>
    </div>
    <div class="table-row">
      <div class="table-cell">4</div>
      <div class="table-cell">5</div>
      <div class="table-cell">6</div>
    </div>
  </div>
</div>
```

## list-item

<Example>
  <div class="list-item">ZUI3</div>
  <div class="list-item">ZUI3</div>
  <div>ZUI3</div>
</Example>

```html
<div class="list-item">ZUI3</div>
<div class="list-item">ZUI3</div>
<div>ZUI3</div>
```

## hidden

使用 `hidden` 设置一个元素为 `display: none`，并从页面布局中移除(对比 <a href="#可见性">可见性</a> 部分的 `invisible`)。

<Example>
  <div class="flex space-x-4">
    <div class="-bg-secondary-300 text-white rounded text-center px-6 py-4 hidden">1</div>
    <div class="-bg-secondary-300 text-white rounded text-center px-6 py-4">2</div>
    <div class="-bg-secondary-300 text-white rounded text-center px-6 py-4">3</div>
  </div>
</Example>

```html
<div class="flex space-x-4">
  <div class="-bg-secondary-300 text-white rounded text-center px-6 py-4 hidden">1</div>
  <div class="-bg-secondary-300 text-white rounded text-center px-6 py-4">2</div>
  <div class="-bg-secondary-300 text-white rounded text-center px-6 py-4">3</div>
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
      <tr v-for="item in displayJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const displayJson = [
    {name: 'block', desc: 'display: block;'},
    {name: 'inline-block', desc: 'display: inline-block;'},
    {name: 'inline', desc: 'display: inline;'},
    {name: 'flex', desc: 'display: flex;'},
    {name: 'inline-flex', desc: 'display: inline-flex;'},
    {name: 'table', desc: 'display: table;'},
    {name: 'table-cell', desc: 'display: table-cell;'},
    {name: 'table-row', desc: 'display: table-row;'},
    {name: 'list-item', desc: 'display: list-item;'},
    {name: 'hidden', desc: 'display: hidden;'},
  ]
</script>