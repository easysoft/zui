# 可见性

## 定义

用于控制元素可见性的工具类。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in visibilityList">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

::: tabs

== 示例

<Example background="light-grid">
  <div class="mb-3">可见</div>
  <div class="flex gap-4 mb-23">
    <div class="w-14 h-14 bg-secondary text-white flex justify-center items-center rounded visible"></div>
  </div>
  <div class="mb-2 mt-6">不可见</div>
  <div class="flex gap-4">
    <div class="w-14 h-14 bg-secondary text-white flex justify-center items-center rounded invisible"></div>
  </div>
</Example>

== HTML

```html
<div>可见</div>
<div class="visible ..."></div>
<div>不可见</div>
<div class="invisible ..."></div>
```

:::

<script setup>
const visibilityList = [
    {name: 'visible', desc: 'visibility: visible;'},
    {name: 'invisible', desc: 'visibility: hidden;'},
];
</script>
