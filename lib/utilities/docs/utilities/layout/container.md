# 容器

## 定义

使用 `container` 类将元素宽度限制为当前[屏幕断点](/guide/config/base/screens.html)，具体规则如下：

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>屏幕断点</th>
        <th>CSS 属性</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>默认</td>
        <td><code>width: 100%;</code></td>
      </tr>
      <tr v-for="item in ['sm', 'md', 'lg', 'xl', '2xl']" :key="item">
        <td class="font-mono">@media (min-width: <CssPropValue :prop="`--screen-${item}`" target="body" />)</td>
        <td><code>max-width: <CssPropValue prop="--screen-sm" target="body" />;</code></td>
      </tr>
    </tbody>
   </table>
</Example>

::: tip 提示
`.container` 还会为元素添加 `margin-left: auto; margin-right: auto;`，使得元素默认居中显示。
:::

## 用法

::: tabs
== 示例

<Example background="blue-circle">
  <div class="container center canvas bg-opacity-50 backdrop-blur-lg h-56 font-mono">
    .container
  </div>
</Example>

== HTML

```html
<div class="container">
  .container
</div>
```
:::
