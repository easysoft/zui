# 行数限制

## 定义

使用 `line-*` 工具类限制显示多少行文本，在文本超出时进行截断：

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in lineClampList" :key="item.name">
        <td class="font-mono w-32">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 示例

::: tabs

== 示例

<Example class="row gap-6 flex-wrap">
  <div v-for="item in lineClampList" :key="item.name" class="w-48">
    <h5 class="mb-2">至多显示 {{item.name.replace('line-', '')}} 行</h5>
    <p :class="item.name">The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。The quick brown fox jumps over the lazy dog.白日依山尽，黄河入海流。欲穷千里目，更上一层楼。</p>
  </div>
</Example>

== HTML

```html
<div class="line-1 ...">...</div>
<div class="line-2 ...">...</div>
<div class="line-3 ...">...</div>
<div class="line-4 ...">...</div>
<div class="line-5 ...">...</div>
<div class="line-6 ...">...</div>
```

<script setup>
const lineClampList = [
    {name: 'line-1', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;'},
    {name: 'line-2', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;'},
    {name: 'line-3', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;'},
    {name: 'line-4', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4;'},
    {name: 'line-5', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 5;'},
    {name: 'line-6', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;'},
];
</script>
