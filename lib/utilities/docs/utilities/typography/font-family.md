# 字体风格

## 定义

在 ZUI 中提供了一些 CSS 工具类方便为元素设置不同风格的字体，包括：

<Example padding="p-0">
  <table class="table">
    <thead class="sticky top-0">
      <tr>
        <th>工具类</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="x in ['sans', 'serif', 'mono']" :key="x">
        <td class="font-mono w-32">font-{{x}}</td>
        <td><code><CssPropValue prop="font-family" :fake="`font-${x}`" /></code></td>
      </tr>
    </tbody>
  </table>
</Example>

## 无衬线字体 `font-sans`

::: tabs

== 示例

<Example class="font-sans text-xl">
  <p>The quick brown fox jumps over the lazy dog.</p>
  <p>白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
</Example>

== HTML

```html
<div class="font-sans">
  <p>The quick brown fox jumps over the lazy dog.</p>
  <p>白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
</div>
```

:::

## 衬线字体 `font-serif`

::: tabs

== 示例

<Example class="font-serif text-xl">
  <p>The quick brown fox jumps over the lazy dog.</p>
  <p>白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
</Example>

== HTML

```html
<div class="font-serif">
  <p>The quick brown fox jumps over the lazy dog.</p>
  <p>白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
</div>
```

:::

## 等宽字体 `font-mono`

::: tabs

== 示例

<Example class="font-mono text-xl">
  <p>The quick brown fox jumps over the lazy dog.</p>
  <p>白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
</Example>

== HTML

```html
<div class="font-mono">
  <p>The quick brown fox jumps over the lazy dog.</p>
  <p>白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
</div>
```

:::

## 参考

* [指引 → 全局配置 → 字体](/guide/config/base/font.html)
