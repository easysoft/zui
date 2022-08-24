# 文本颜色

## 使用方法

使用 `text-*` 工具类控制元素的文字颜色。

<Example class="flex flex-wrap gap-2 -bg-danger-100 p-3">
  <span class="w-36 text-primary">text-primary 文本色</span>
  <span class="w-36 text-secondary">text-secondary 文本色</span>
  <span class="w-36 text-success">text-success 文本色</span>
  <span class="w-36 text-warning">text-warning 文本色</span>
  <span class="w-36 text-danger">text-danger 文本色</span>
  <span class="w-36 text-important">text-important 文本色</span>
  <span class="w-36 text-special">text-special 文本色</span>
  <span class="w-36 text-white">text-white 文本色</span>
  <span class="w-36 text-lighter">text-lighter 文本色</span>
  <span class="w-36 text-light">text-light 文本色</span>
  <span class="w-36 text-gray">text-gray 文本色</span>
  <span class="w-36 text-dark">text-dark 文本色</span>
  <span class="w-36 text-darker">text-darker 文本色</span>
  <span class="w-36 text-black">text-black 文本色</span>
  <span class="w-36 text-canvas">text-canvas 文本色</span>
  <span class="w-36 text-surface">text-surface 文本色</span>
  <span class="w-36 text-inverse">text-inverse 文本色</span>
</Example>

```html
<span class="text-primary">text-primary 文本色</span>
<span class="text-secondary">text-secondary 文本色</span>
<span class="text-success">text-success 文本色</span>
...
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
      <tr v-for="item in textColorJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const textColorJson = [
    {name: 'text-primary', desc: 'color: #2b80ff;'},
    {name: 'text-secondary', desc: 'color: #37b2fe;'},
    {name: 'text-success', desc: 'color: #17ce97;'},
    {name: 'text-warning', desc: 'color: #ffa34d;'},
    {name: 'text-danger', desc: 'color: #ff5858;'},
    {name: 'text-important', desc: 'color: #ff4f9e;'},
    {name: 'text-special', desc: 'color: #9d5eff;'},
    {name: 'text-white', desc: 'color: #fff;'},
    {name: 'text-lighter', desc: 'color: #e3e4e9;'},
    {name: 'text-light', desc: 'color: #e6eaf1;'},
    {name: 'text-gray', desc: 'color: #9ea3b0;'},
    {name: 'text-dark', desc: 'color: #5e626d;'},
    {name: 'text-darker', desc: 'color: #1b1f28;'},
    {name: 'text-black', desc: 'color: #000;'},
    {name: 'text-canvas', desc: 'color: #fff;'},
    {name: 'text-surface', desc: 'color: #f4f5f7;'},
    {name: 'text-inverse', desc: 'color: #3c4353;'},
  ]
</script>