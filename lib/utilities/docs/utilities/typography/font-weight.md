# 字体粗细

使用 `font-*` 工具类来控制元素字体粗细。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in fontWeightJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

<Example background="light-grid">
  <div class="font-thin">font-thin 字体粗细</div>
  <div class="font-light">font-light 字体粗细</div>
  <div class="font-medium">font-medium 字体粗细</div>
  <div class="font-semibold">font-semibold 字体粗细</div>
  <div class="font-bold">font-bold 字体粗细</div>
  <div class="font-black">font-black 字体粗细</div>
</Example>

```html
<div class="font-thin">font-thin 字体粗细</div>
<div class="font-light">font-light 字体粗细</div>
<div class="font-medium">font-medium 字体粗细</div>
<div class="font-semibold">font-semibold 字体粗细</div>
<div class="font-bold">font-bold 字体粗细</div>
<div class="font-black">font-black 字体粗细</div>
```

<script setup>
  const fontWeightJson = [
    {name: 'font-thin', desc: 'font-weight: 100;'},
    {name: 'font-light', desc: 'font-weight: 300;'},
    {name: 'font-medium', desc: 'font-weight: 500;'},
    {name: 'font-semibold', desc: 'font-weight: 600;'},
    {name: 'font-bold', desc: 'font-weight: 700;'},
    {name: 'font-black', desc: 'font-weight: 900;'},
  ]
</script>
