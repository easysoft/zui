# 文本对齐

使用 `text-left`、`text-center`、`text-right` 和 `text-justify` 工具类来控制元素的文本对齐方式。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in textAlignJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

<Example class="leading-7" background="light-grid">
  <p class="text-left">文本左对齐</p>
  <p class="text-center">文本居中对齐</p>
  <p class="text-right">文本右对齐</p>
  <p class="text-justify">文本两端对齐 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</Example>

```html
<p class="text-left">文本左对齐</p>
<p class="text-center">文本居中对齐</p>
<p class="text-right">文本右对齐</p>
<p class="text-justify">文本两端对齐 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
```

<script setup>
  const textAlignJson = [
    {name: 'text-left', desc: 'text-align: left;'},
    {name: 'text-center', desc: 'text-align: center;'},
    {name: 'text-right', desc: 'text-align: right;'},
    {name: 'text-justify', desc: 'text-align: justify;'},
  ]
</script>
