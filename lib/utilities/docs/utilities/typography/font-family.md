# 字体

控制元素字体的工具类。

## 使用方法

<Example class="flex gap-3 h-10 p-2" background="light-circle">
  <span class="text-lg sans">sans 字体</span>
  <span class="text-lg serif">serif 字体</span>
  <span class="text-lg mono">mono 字体</span>
</Example>

```html
<span class="sans">sans 字体</span>
<span class="serif">serif 字体</span>
<span class="mono">mono 字体</span>
```

使用 `sans` 可应用一个网络安全的无衬线字体；使用 `serif` 可应用网络安全的衬线字体；使用 `mono` 可应用一个网络安全的等宽字体。

## 默认类参考

<Example>
  <table class="table">
    <thead>
      <tr>
        <th class="w-20">修饰类</th>
        <th>定义</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in fontFamilyJson">
        <td>{{item.name}}</td>
        <td>{{item.desc}}</td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const fontFamilyJson = [
    {name: 'sans', desc: 'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'},
    {name: 'serif', desc: 'font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'},
    {name: 'mono', desc: 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'},
  ]
</script>