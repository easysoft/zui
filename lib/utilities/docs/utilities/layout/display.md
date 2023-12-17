# 显示类型

## 定义

在 ZUI 中提供了各种工具类来设置 CSS `display` 属性，主要包括：

<Example padding="p-0">
  <table class="table border-0 w-full">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in displayList" :key="item.name">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const displayList = [
    {name: 'block', desc: 'display: block;'},
    {name: 'inline-block', desc: 'display: inline-block;'},
    {name: 'inline', desc: 'display: inline;'},
    {name: 'flex', desc: 'display: flex;'},
    {name: 'inline-flex', desc: 'display: inline-flex;'},
    {name: 'table', desc: 'display: table;'},
    {name: 'table-cell', desc: 'display: table-cell;'},
    {name: 'table-row', desc: 'display: table-row;'},
    {name: 'list-item', desc: 'display: list-item;'},
    {name: 'hidden', desc: 'display: hidden;'},
  ]
</script>
