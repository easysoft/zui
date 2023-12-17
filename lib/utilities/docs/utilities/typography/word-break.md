# 文本换行

## 定义

用于控制元素中的换行符的工具类。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in wordBreakList" :key="item.name">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 示例

### 字内换行

使用 `break-normal` 只在正常的换行点添加换行符。

::: tabs

== 示例

<Example background="light-circle">
  <div class="break-normal border canvas w-56" v-html="exampleText"></div>
</Example>

== HTML

```html
<div class="break-normal border canvas w-56">  The quick brown fox jumps over the lazy dog.
  白日依山尽，黄河入海流。
  欲穷千里目，更上一层楼。</div>上一层楼。</div>
```

:::

### 单词内换行

使用 `break-words` 在词中间添加换行符。

::: tabs

== 示例

<Example background="light-circle">
  <div class="break-words border canvas w-56" v-html="exampleText"></div>
</Example>

== HTML

```html
<div class="break-words border canvas w-56">  The quick brown fox jumps over the lazy dog.
  白日依山尽，黄河入海流。
  欲穷千里目，更上一层楼。</div>上一层楼。</div>
```

:::

### 任意字内断开

使用 `break-all` 在必要的时候添加换行符，而不是试图保留整个单词。

::: tabs

== 示例

<Example background="light-circle">
  <div class="break-all border canvas w-56" v-html="exampleText"></div>
</Example>

== HTML

```html
<div class="break-all border canvas w-56">  The quick brown fox jumps over the lazy dog.
  白日依山尽，黄河入海流。
  欲穷千里目，更上一层楼。</div>上一层楼。</div>
```

:::

<script setup>
const wordBreakList = [
    {name: 'break-normal', desc: 'overflow-wrap: normal;word-break: normal;'},
    {name: 'break-words', desc: 'overflow-wrap: break-word;'},
    {name: 'break-all', desc: 'word-break: break-all;'},
];
const exampleText = `  The quick brown fox jumps over the lazy dog.
  白日依山尽，黄河入海流。
  欲穷千里目，更上一层楼。`;
</script>
