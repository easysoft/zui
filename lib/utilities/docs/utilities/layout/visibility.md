# 可见性

用于控制元素可见性的工具类。

## 使用方法

<Example>
  <div class="mb-3">可见</div>
  <div class="flex gap-4 mb-3">
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded">1</div>
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded visible">2</div>
  </div>
  <div class="mb-3">不可见</div>
  <div class="flex gap-4">
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded">1</div>
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded invisible">2</div>
  </div>

</Example>

```html
<div>可见</div>
<div>1</div>
<div class="visible">2</div>

<div>不可见</div>
<div>1</div>
<div class="invisible">2</div>
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
      <tr v-for="item in visibilityJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const visibilityJson = [
    {name: 'visible', desc: 'visibility: visible;'},
    {name: 'invisible', desc: 'visibility: hidden;'},
  ]
</script>