# 可见性

用于控制元素可见性的工具类。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in visibilityJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>


## 效果展示

<Example background="light-grid">
  <div class="mb-3">可见</div>
  <div class="flex gap-4 mb-3">
    <div class="w-14 h-14 bg-secondary text-white flex justify-center items-center rounded">1</div>
    <div class="w-14 h-14 bg-secondary text-white flex justify-center items-center rounded visible">2</div>
  </div>
  <div class="mb-3">不可见</div>
  <div class="flex gap-4">
    <div class="w-14 h-14 bg-secondary text-white flex justify-center items-center rounded">1</div>
    <div class="w-14 h-14 bg-secondary text-white flex justify-center items-center rounded invisible">2</div>
  </div>

</Example>

```html
<div>可见</div>
<div class="...">
  <div class="...">1</div>
  <div class="visible ...">2</div>
</div>

<div>不可见</div>
<div class="...">
  <div class="...">1</div>
  <div class="invisible ...">2</div>
</div>
```

<script setup>
  const visibilityJson = [
    {name: 'visible', desc: 'visibility: visible;'},
    {name: 'invisible', desc: 'visibility: hidden;'},
  ]
</script>
