# 屏幕尺寸

ZUI 支持使用媒体查询实现 Web 响应式设计，可以根据不同的屏幕大小，为不同的设备提供最佳的用户体验。

ZUI 默认断点设置如下：

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>名称</th>
        <th>大小</th>
        <th>实现</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in screenJson">
        <td>{{item.name}}</td>
        <td>{{item.size}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

<script setup>
  const screenJson = [
    {name: 'sm', size: '576px', desc: '@media (min-width: 576px) { ... }'},
    {name: 'md', size: '960px', desc: '@media (min-width: 960px) { ... }'},
    {name: 'lg', size: '1440px', desc: '@media (min-width: 1440px) { ... }'},
  ];
</script>
