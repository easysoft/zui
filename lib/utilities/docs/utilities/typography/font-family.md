# 字体

控制元素字体的工具类。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th class="w-20">工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in fontFamilyJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

`sans` 是网络安全的无衬线字体；`serif` 是网络安全的衬线字体；`mono` 是网络安全的等宽字体。

<Example background="light-circle">
  <div class="text-lg font-sans">sans 字体</div>
  <div class="text-lg font-serif">serif 字体</div>
  <div class="text-lg font-mono">mono 字体</div>
</Example>

```html
<div class="font-sans">sans 字体</div>
<div class="font-serif">serif 字体</div>
<div class="font-mono">mono 字体</div>
```


<script setup>
  const fontFamilyJson = [
    {name: 'sans', desc: 'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'},
    {name: 'serif', desc: 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'},
    {name: 'mono', desc: 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'},
  ]
</script>
