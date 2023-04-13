# 显示类型

控制元素显示类型的工具类。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in displayJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

### 块级元素

使用工具类 `block` 创建一个块级元素。

<Example>
  <span>span 元素</span>
  <span class="block bg-secondary-300">span 元素</span>
</Example>

```html
<span>span 元素</span>
<span class="block ...">span 元素</span>
```

### 行内块元素

使用工具类 `inline-block` 创建一个内联块级元素。

<Example>
  <span>这是一个 span 标签。</span>
  <span class="inline-block bg-secondary-300 h-16">这是一个 span 标签。</span>
</Example>

```html
<span>这是一个 span 标签。</span>
<span class="inline-block h-16 ...">这是一个 span 标签。</span>
```

### 行内元素

使用工具类 `inline` 创建一个内联元素。

<Example>
  <span>这是一个 span 元素。</span>
  <div class="inline bg-secondary-300">这是一个 div 元素。</div>
</Example>

```html
<span>这是一个 span 元素。</span>
<div class="inline ...">这是一个 div 元素。</div>
```

### flex 容器

使用工具类 `flex` 来创建一个块级的 `flex` 容器。

<Example>
  <div class="flex gap-2 h-12">
    <span class="bg-secondary-300 text-white flex justify-center items-center w-12">1</span>
    <span class="bg-secondary-300 text-white flex justify-center items-center w-12">2</span>
  </div>
</Example>

```html
<div class="flex gap-2 ...">
  <span class="flex justify-center items-center ...">1</span>
  <span class="flex justify-center items-center ...">2</span>
</div>
```

### 内联块级 flex 容器

使用工具类 `inline-flex` 来创建一个内联的 `flex` 容器。

<Example>
  <div class="inline-flex gap-2">
    <div class="bg-secondary-300 text-white rounded text-center px-6 py-4 flex-1">1</div>
    <div class="bg-secondary-300 text-white rounded text-center px-6 py-4 flex-1">2</div>
    <div class="bg-secondary-300 text-white rounded text-center px-6 py-4 flex-1">3</div>
  </div>
</Example>

```html
<div class="inline-flex gap-2">
  <div class="flex-1 ...">1</div>
  <div class="flex-1 ...">2</div>
  <div class="flex-1 ...">3</div>
</div>
```

### 块级表格/表格行/表格单元格

<Example>
  <div class="table w-full bg-surface">
    <div class="table-row-group">
      <div class="table-row">
        <div class="table-cell bg-secondary-300 text-white text-center px-6 py-4">1</div>
        <div class="table-cell bg-secondary-200 text-white text-center px-6 py-4">2</div>
        <div class="table-cell bg-secondary-300 text-white text-center px-6 py-4">3</div>
      </div>
      <div class="table-row">
        <div class="table-cell bg-secondary-200 text-white text-center px-6 py-4">4</div>
        <div class="table-cell bg-secondary-300 text-white text-center px-6 py-4">5</div>
        <div class="table-cell bg-secondary-200 text-white text-center px-6 py-4">6</div>
      </div>
    </div>
  </div>
</Example>

```html
<div class="table ...">
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell ...">1</div>
      <div class="table-cell ...">2</div>
      <div class="table-cell ...">3</div>
    </div>
    <div class="table-row">
      <div class="table-cell ...">4</div>
      <div class="table-cell ...">5</div>
      <div class="table-cell ...">6</div>
    </div>
  </div>
</div>
```

### 列表

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

### 隐藏元素

使用工具类 `hidden` 设置一个元素为 `display: none`，并从页面布局中移除(对比 <a href="#可见性">可见性</a> 部分的 `invisible`)。

<Example>
  <div class="flex space-x-4">
    <div class="bg-secondary-300 text-white rounded text-center px-6 py-4 hidden">1</div>
    <div class="bg-secondary-300 text-white rounded text-center px-6 py-4">2</div>
    <div class="bg-secondary-300 text-white rounded text-center px-6 py-4">3</div>
  </div>
</Example>

```html
<div class="flex space-x-4">
  <div class="hidden ...">1</div>
  <div class="...">2</div>
  <div class="...">3</div>
</div>
```

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
