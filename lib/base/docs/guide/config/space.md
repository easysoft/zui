# 间距

默认情况下，一个间距单位等于 0.25rem，在通用浏览器中默认为 4px。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>名称</th>
        <th>大小</th>
        <th>像素</th>
        <th>效果展示</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in spaceJson">
        <td>{{item.name}}</td>
        <td>{{item.size}}</td>
        <td>{{item.pixel}}</td>
        <td><div class="h-2 bg-secondary" :class="item.className"></div></td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const spaceJson = [
    {name: '0', size: '0', pixel:'0', className: 'w-0'},
    {name: 'px', size: '1px', pixel:'1px', className: 'w-px'},
    {name: '0.5', size: '0.125rem', pixel:'2px', className: 'w-0.5'},
    {name: '1', size: '0.25rem', pixel:'4px', className: 'w-1'},
    {name: '1.5', size: '0.375rem', pixel:'6px', className: 'w-1.5'},
    {name: '2', size: '0.5rem', pixel:'8px', className: 'w-2'},
    {name: '2.5', size: '0.625rem', pixel:'10px', className: 'w-2.5'},
    {name: '3', size: '0.75rem', pixel:'12px', className: 'w-3'},
    {name: '3.5', size: '0.875rem', pixel:'14px', className: 'w-3.5'},
    {name: '4', size: '1rem', pixel:'16px', className: 'w-4'},
    {name: '5', size: '1.25rem', pixel:'20px', className: 'w-5'},
    {name: '6', size: '1.5rem', pixel:'24px', className: 'w-6'},
    {name: '7', size: '1.75rem', pixel:'28px', className: 'w-7'},
    {name: '8', size: '2rem', pixel:'32px', className: 'w-8'},
  ];
</script>
