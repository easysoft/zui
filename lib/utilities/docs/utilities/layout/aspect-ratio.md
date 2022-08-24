# 宽高比

为元素提供固定的宽高比。
详细配置可参考 [Tailwind 官网](https://www.tailwindcss.cn/docs/container)。

## 使用方法

<Example>
  <div class="inline-block bg-secondary mr-3 w-16 h-2 aspect-auto"></div>
  <div class="inline-block bg-secondary mr-3 w-16 aspect-square"></div>
  <div class="inline-block bg-secondary mr-3 w-16 aspect-video"></div>
</Example>

```html
<div class="w-16 h-2 aspect-auto"></div>
<div class="w-16 aspect-square"></div>
<div class="w-16 aspect-video"></div>
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
      <tr v-for= "item in aspectJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const aspectJson = [
    {name: 'aspect-auto', desc: 'aspect-ratio: auto;'},
    {name: 'aspect-square', desc: 'aspect-ratio: 1 / 1;'},
    {name: 'aspect-video', desc: 'aspect-ratio: 16 / 9;'},
  ]
</script>

