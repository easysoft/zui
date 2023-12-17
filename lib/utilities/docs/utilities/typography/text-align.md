# 文本对齐

## 定义

使用 `text-*` 工具类来控制元素的文本对齐方式。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in textAlignList" :key="item.name">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 示例

::: tabs

== 示例

<Example class="leading-7" background="light-grid">
  <p class="text-left">文本左对齐</p>
  <p class="text-center">文本居中对齐</p>
  <p class="text-right">文本右对齐</p>
  <p class="text-justify">The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
</Example>

== HTML

```html
<p class="text-left">文本左对齐</p>
<p class="text-center">文本居中对齐</p>
<p class="text-right">文本右对齐</p>
<p class="text-justify">The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
```

:::

<script setup>
const textAlignList = [
    {name: 'text-left', desc: 'text-align: left;'},
    {name: 'text-center', desc: 'text-align: center;'},
    {name: 'text-right', desc: 'text-align: right;'},
    {name: 'text-justify', desc: 'text-align: justify;'},
];
</script>
