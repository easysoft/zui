# 容器

`container` 类设置一个元素的 `max-width` 来匹配当前断点的 `min-width`。如果您想为一组固定的屏幕尺寸设计，而不是试图适应一个完全流动的视窗，这很有用。

## 使用方法

```html
<div class="container">
  <!-- ... -->
</div>
```

::: tip 提示
请注意，容器不会自动居中，也没有任何内置的水平方向的内边距。
:::

## 默认类参考

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>修饰类</th>
        <th>断点</th>
        <th>定义</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in containerJson">
        <td>{{item.name}}</td>
        <td>{{item.breakpoint}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const containerJson = [
    {name: 'container', desc: 'width: 100%;', breakpoint: '无'},
    {name: 'container', desc: 'max-width: 640px;', breakpoint: 'sm (640px)'},
    {name: 'container', desc: 'max-width: 768px;', breakpoint: 'sm (768px)'},
    {name: 'container', desc: 'max-width: 1024px;', breakpoint: 'sm (1024px)'},
    {name: 'container', desc: 'max-width: 1280px;', breakpoint: 'sm (1280px)'},
    {name: 'container', desc: 'max-width: 1536px;', breakpoint: 'sm (1536px)'},
  ]
</script>