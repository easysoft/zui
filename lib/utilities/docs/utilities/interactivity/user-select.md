# 用户选择

### 禁用文本选择

使用 `select-none` 来防止选择元素及其子元素中的文本。

<Example>
  <div class="px-6 py-2 -bg-secondary-100 select-none">此文本不可选择</div>
</Example>

```html
<div class="select-none">此文本不可选择</div>
```

### 允许选择文本

使用 `select-text` 允许选择元素及其子元素中的文本。

<Example>
  <div class="px-6 py-2 -bg-secondary-100 select-text">此文本可选择</div>
</Example>

```html
<div class="select-text">此文本可选择</div>
```

### 一键选择所有文本

使用 `select-all` 在用户点击时自动选择元素中的所有文本。

<Example>
  <div class="px-6 py-2 -bg-secondary-100 select-all">单击此文本中的任意位置以全选</div>
</Example>

```html
<div class="select-all">单击此文本中的任意位置以全选</div>
```

### 自动

使用 `select-auto` 来使用默认的浏览器行为来选择文本。对于撤销其他工具类（如 `.select-none`）在不同断点的行为时很有用。

<Example>
  <div class="px-6 py-2 -bg-secondary-100 select-auto">此文本可选择</div>
</Example>

```html
<div class="select-auto">此文本可选择</div>
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
      <tr v-for="item in userSelectJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const userSelectJson = [
    {name: 'select-none', desc: 'user-select: none;'},
    {name: 'select-text', desc: 'user-select: text;'},
    {name: 'select-all', desc: 'user-select: all;'},
    {name: 'select-auto', desc: 'user-select: auto;'},
  ]
</script>