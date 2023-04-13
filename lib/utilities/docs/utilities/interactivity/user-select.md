# 用户选择

用于控制用户能否选中文本的工具类。

<Example class ="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in userSelectJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

### 禁用文本选择

使用工具类 `select-none` 来防止选择元素及其子元素中的文本。

<Example>
  <div class="select-none px-6 py-2 -bg-secondary-100">此文本不可选择</div>
</Example>

```html
<div class="select-none ...">此文本不可选择</div>
```

### 允许选择文本

使用工具类 `select-text` 允许选择元素及其子元素中的文本。

<Example>
  <div class="select-text px-6 py-2 -bg-secondary-100">此文本可选择</div>
</Example>

```html
<div class="select-text ...">此文本可选择</div>
```

### 一键选择所有文本

使用工具类 `select-all` 在用户点击时自动选择元素中的所有文本。

<Example>
  <div class="select-all px-6 py-2 bg-secondary-100">单击此文本中的任意位置以全选</div>
</Example>

```html
<div class="select-all ...">单击此文本中的任意位置以全选</div>
```

### 自动

使用工具类 `select-auto` 来使用默认的浏览器行为来选择文本。对于撤销其他工具类（如 `.select-none`）在不同断点的行为时很有用。

<Example>
  <div class="select-auto px-6 py-2 -bg-secondary-100">此文本可选择</div>
</Example>

```html
<div class="select-auto ...">此文本可选择</div>
```

<script setup>
  const userSelectJson = [
    {name: 'select-none', desc: 'user-select: none;'},
    {name: 'select-text', desc: 'user-select: text;'},
    {name: 'select-all', desc: 'user-select: all;'},
    {name: 'select-auto', desc: 'user-select: auto;'},
  ]
</script>
