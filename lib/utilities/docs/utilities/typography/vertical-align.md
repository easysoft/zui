# 垂直对齐

## 定义

用于控制内联或表格单元格的垂直对齐的工具类。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in verticalAlignList" :key="item.name">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 示例

::: tabs

== 示例

<Example background="light-circle">
  <p class="text-xl mb-3">参照文本<span class="align-middle text-sm">中部对齐</span></p>
  <p class="text-xl mb-3">参照文本<span class="align-top text-sm">顶端对齐</span></p>
  <p class="text-xl mb-3">参照文本<span class="align-bottom text-sm">底部对齐</span></p>
  <p class="text-xl mb-3">会议室面积：32 m<span class="align-super text-sm">2</span></p>
  <p class="text-xl mb-3">水分子：H<span class="align-sub text-sm">2</span>O</p>
</Example>

== HTML

```html
<p class="text-xl">参照文本<span class="align-middle text-sm">中部对齐</span></p>
<p class="text-xl">参照文本<span class="align-top text-sm">顶端对齐</span></p>
<p class="text-xl">参照文本<span class="align-bottom text-sm">底部对齐</span></p>
<p class="text-xl">会议室面积：32 m<span class="align-super text-sm">2</span></p>
<p class="text-xl">水分子：H<span class="align-sub text-sm">2</span>O</p>
```

:::

<script setup>
const verticalAlignList = [
    {name: 'align-middle', desc: 'vertical-align: middle;'},
    {name: 'align-top', desc: 'vertical-align: top;'},
    {name: 'align-bottom', desc: 'vertical-align: bottom;'},
    {name: 'align-sub', desc: 'vertical-align: sub;'},
    {name: 'align-super', desc: 'vertical-align: super;'},
];
</script>
