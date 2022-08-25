# 字体粗细

## 使用方法

使用 `font-*` 工具类来控制元素字体粗细。

<Example class="flex items-end gap-3 flex-wrap">
  <div class="font-thin">font-thin 字体粗细</div>
  <div class="font-light">font-light 字体粗细</div>
  <div class="font-medium">font-medium 字体粗细</div>
  <div class="font-bold">font-bold 字体粗细</div>
  <div class="font-black">font-black 字体粗细</div>
</Example>

```html
<div class="font-thin">font-thin 字体粗细</div>
<div class="font-light">font-light 字体粗细</div>
<div class="font-medium">font-medium 字体粗细</div>
<div class="font-bold">font-bold 字体粗细</div>
<div class="font-black">font-black 字体粗细</div>
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
      <tr v-for="item in fontWeightJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const fontWeightJson = [
    {name: 'font-thin', desc: 'font-weight: 100;'},
    {name: 'font-light', desc: 'font-weight: 300;'},
    {name: 'font-medium', desc: 'font-weight: 500;'},
    {name: 'font-bold', desc: 'font-weight: 700;'},
    {name: 'font-black', desc: 'font-weight: 900;'},
  ]
</script>