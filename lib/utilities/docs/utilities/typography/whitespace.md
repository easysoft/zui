# 空白处理

## 定义

用于控制元素的空格属性的工具类。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in whitespaceList" :key="item.name">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 示例

### 不保留空格不自动换行

使用 `nowrap` 来防止文本在元素中被包裹。换行和空格将被折叠。

::: tabs

== 示例

<Example background="light-circle">
  <div class="nowrap border canvas w-56" v-html="exampleText"></div>
</Example>

== HTML

```html
<div class="nowrap border canvas w-56">  The quick brown fox jumps over the lazy dog.
  白日依山尽，黄河入海流。
  欲穷千里目，更上一层楼。</div>
```

:::

### 保留空格不自动换行

使用 `pre` 来保留元素中的换行和空格。文本不会被包装。

::: tabs

== 示例

<Example background="light-circle">
  <div class="pre border canvas w-56" v-html="exampleText"></div>
</Example>

== HTML

```html
<div class="pre border canvas w-56">  The quick brown fox jumps over the lazy dog.
  白日依山尽，黄河入海流。
  欲穷千里目，更上一层楼。</div>
```

:::

### 不保留空格自动换行

使用 `pre-line` 保留换行，但不保留元素中的空格。文本将被正常包装。

::: tabs

== 示例

<Example background="light-circle">
  <div class="pre-line border canvas w-56" v-html="exampleText"></div>
</Example>

== HTML

```html
<div class="pre-line border canvas w-56">  The quick brown fox jumps over the lazy dog.
  白日依山尽，黄河入海流。
  欲穷千里目，更上一层楼。</div>上一层楼。</div>
```

:::

### 保留空格自动换行

使用 `pre-wrap` 来保留元素中的换行和空格。文本将被正常包装。

::: tabs

== 示例

<Example background="light-circle">
  <div class="pre-wrap border canvas w-56" v-html="exampleText"></div>
</Example>

== HTML

```html
<div class="pre-wrap border canvas w-56">  The quick brown fox jumps over the lazy dog.
  白日依山尽，黄河入海流。
  欲穷千里目，更上一层楼。</div>
```

:::

<script setup>
const whitespaceList = [
    {name: 'nowrap',   desc: 'white-space: nowrap;'},
    {name: 'pre',      desc: 'white-space: pre;'},
    {name: 'pre-line', desc: 'white-space: pre-line;'},
    {name: 'pre-wrap', desc: 'white-space: pre-wrap;'},
];
const exampleText = `  The quick brown fox jumps over the lazy dog.
  白日依山尽，黄河入海流。
  欲穷千里目，更上一层楼。`;
</script>
