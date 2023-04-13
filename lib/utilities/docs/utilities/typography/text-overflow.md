# 文本溢出

用于控制元素中文本溢出的工具类。

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in textOverflowJson">
        <td>{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

### 省略

使用 `ellipsis` 用省略号(…)来截断溢出的文本。

<Example background="light-circle">
  <p class="ellipsis">禅道是有保障的项目管理软件。禅道开发团队从04年从事开源，坚持到现在；已为数以万计的公司提供即时有力的支持；版本迭代快速，为您提供更好的功能</p>
</Example>

```html
<p class="ellipsis">禅道是有保障的项目管理软件。禅道开发团队从04年从事开源，坚持到现在；已为数以万计的公司提供即时有力的支持；版本迭代快速，为您提供更好的功能</p>
```

### 裁剪

使用 `clip` 在内容区域的极限处截断文本。

<Example background="light-circle">
  <p class="clip">禅道是有保障的项目管理软件。禅道开发团队从04年从事开源，坚持到现在；已为数以万计的公司提供即时有力的支持；版本迭代快速，为您提供更好的功能</p>
</Example>

```html
<p class="clip">禅道是有保障的项目管理软件。禅道开发团队从04年从事开源，坚持到现在；已为数以万计的公司提供即时有力的支持；版本迭代快速，为您提供更好的功能</p>
```

<script setup>
  const textOverflowJson = [
    {name: 'ellipsis', desc: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'},
    {name: 'clip', desc: 'overflow: hidden; text-overflow: clip; white-space: nowrap;'},
  ]
</script>
