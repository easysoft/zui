# 文本大小写

## 定义

在 ZUI 中，你可以通过如下工具类来设置文本大小写显示规则：

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in textTransformList" :key="item.name">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 示例

### 显示为大写 `uppercase`

::: tabs

== 示例

<Example background="light-circle">
  <p class="uppercase">The quick brown fox jumps over the lazy dog. </p>
</Example>

== HTML

```html
<p class="uppercase">The quick brown fox jumps over the lazy dog. </p>
```

:::

### 显示为小写 `lowercase`

::: tabs

== 示例

<Example background="light-circle">
  <p class="lowercase">The quick brown fox jumps over the lazy dog. </p>
</Example>

== HTML

```html
<p class="lowercase">The quick brown fox jumps over the lazy dog. </p>
```

:::

### 显示为单词首字母大写 `capitalize`

::: tabs

== 示例

<Example background="light-circle">
  <p class="capitalize">The quick brown fox jumps over the lazy dog. </p>
</Example>

== HTML

```html
<p class="capitalize">The quick brown fox jumps over the lazy dog. </p>
```

:::

### 默认大小写 `normal-case`

::: tabs

== 示例

<Example background="light-circle">
  <p class="normal-case">The quick brown fox jumps over the lazy dog. </p>
</Example>

== HTML

```html
<p class="normal-case">The quick brown fox jumps over the lazy dog. </p>
```

:::

<script setup>
const textTransformList = [
    {name: 'uppercase', desc: 'text-transform: uppercase;'},
    {name: 'lowercase', desc: 'text-transform: lowercase;'},
    {name: 'capitalize', desc: 'text-transform: capitalize;'},
    {name: 'normal-case', desc: 'text-transform: none;'},
];
</script>
