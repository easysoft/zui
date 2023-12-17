# 文本溢出

## 定义

文字溢出包括两种方式，分布为省略和裁剪，在 ZUI 中可以通过如下工具类实现：

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in textOverflowList" :key="item.name">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 文字省略 `text-ellipsis`

使用 `text-ellipsis` 用省略号（…）来截断溢出的文本。

::: tabs

== 示例

<Example background="light-circle">
  <p class="text-ellipsis">The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
</Example>

== HTML

```html
<p class="text-ellipsis">The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
```

:::

## 文字裁剪 `text-clip`

使用 `text-clip` 在内容区域的极限处截断文本。

::: tabs

== 示例

<Example background="light-circle">
  <p class="text-clip">The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
</Example>

== HTML

```html
<p class="text-clip">The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
```

:::

<script setup>
const textOverflowList = [
    {name: 'text-ellipsis', desc: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'},
    {name: 'text-clip', desc: 'overflow: hidden; text-overflow: clip; white-space: nowrap;'},
];
</script>
