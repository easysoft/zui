# 文本对齐

## 使用方法

使用 `text-left`、`text-center`、`text-right` 和 `text-justify` 工具类来控制元素的文本对齐方式。

<Example class="leading-7" background="light-circle">
  <p class="text-left">文本左对齐</p>
  <p class="text-center">文本居中对齐</p>
  <p class="text-right">文本右对齐</p>
  <p class="text-justify">文本两端对齐</p>
</Example>

```html
<p class="text-left">文本左对齐</p>
<p class="text-center">文本居中对齐</p>
<p class="text-right">文本右对齐</p>
<p class="text-justify">文本两端对齐</p>
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
      <tr v-for="item in textAlignJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const textAlignJson = [
    {name: 'text-left', desc: 'text-align: left;'},
    {name: 'text-center', desc: 'text-align: center;'},
    {name: 'text-right', desc: 'text-align: right;'},
    {name: 'text-justify', desc: 'text-align: justify;'},
  ]
</script>