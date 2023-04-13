# 圆角

当前 ZUI 的默认圆角大小。

<Example>
  <table class="table">
    <thead>
      <tr>
        <th>名称</th>
        <th>大小</th>
        <th>效果展示</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in globalRound">
        <td class="font-medium">{{item.name}}</td>
        <td>{{item.size}}</td>
        <td><div class="w-8 h-8 bg-secondary" :class="item.className"></div></td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
const globalRound = [
    {name: 'none', size: '0', className: 'rounded-none'},
    {name: 'sm', size: '0.125rem', className: 'rounded-sm'},
    {name: 'default', size: '0.25rem', className: 'rounded'},
    {name: 'md', size: '0.375rem', className: 'rounded-md'},
    {name: 'lg', size: '0.5rem', className: 'rounded-lg'},
    {name: 'xl', size: '0.75rem', className: 'rounded-xl'},
    {name: 'full(circle)', size: '9999px', className: 'rounded-full'}
];
</script>
