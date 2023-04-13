# 控制文本行数

使用 `line-*` 实用程序指定截断前应显示多少行文本：

<Example class="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in lineClampJson">
        <td class="-w-20">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

<Example>
  <span class="font-bold">显示2行文本</span>
  <div class="line-2 my-2">禅道是专业的研发项目管理软件。细分需求、任务、缺陷和用例；完整覆盖研发项目核心流程；完整软件生命周期管理。
  禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架；支持CMMI标准的落地实施。</div>
  <span class="font-bold">显示3行文本</span>
  <div class="line-3 my-2">禅道是专业的研发项目管理软件。细分需求、任务、缺陷和用例；完整覆盖研发项目核心流程；完整软件生命周期管理。
  禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架；支持CMMI标准的落地实施。
  禅道是灵活的项目管理软件。适用不同的管理场景，如软件公司，互联网企业等；功能可组合使用，可只做缺陷管理、需求管理或任务管理；可私有部署，也可以选择云计算方案。
  禅道是开源免费的项目管理软件。基于ZPL协议发布；源代码开放，不限商用；强大扩展机制，丰富插件。
  禅道是有保障的项目管理软件。；禅道开发团队从04年从事开源，坚持到现在；已为数以万计的公司提供即时有力的支持；版本迭代快速，为您提供更好的功能。</div>
  <span class="font-bold">显示4行文本</span>
  <div class="line-4 my-2">禅道是专业的研发项目管理软件。细分需求、任务、缺陷和用例；完整覆盖研发项目核心流程；完整软件生命周期管理。
  禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架；支持CMMI标准的落地实施。
  禅道是灵活的项目管理软件。适用不同的管理场景，如软件公司，互联网企业等；功能可组合使用，可只做缺陷管理、需求管理或任务管理；可私有部署，也可以选择云计算方案。
  禅道是开源免费的项目管理软件。基于ZPL协议发布；源代码开放，不限商用；强大扩展机制，丰富插件。
  禅道是有保障的项目管理软件。；禅道开发团队从04年从事开源，坚持到现在；已为数以万计的公司提供即时有力的支持；版本迭代快速，为您提供更好的功能。</div>
  <span class="font-bold">显示5行文本</span>
  <div class="line-5 my-2">禅道是专业的研发项目管理软件。细分需求、任务、缺陷和用例；完整覆盖研发项目核心流程；完整软件生命周期管理。
  禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架；支持CMMI标准的落地实施。
  禅道是灵活的项目管理软件。适用不同的管理场景，如软件公司，互联网企业等；功能可组合使用，可只做缺陷管理、需求管理或任务管理；可私有部署，也可以选择云计算方案。
  禅道是开源免费的项目管理软件。基于ZPL协议发布；源代码开放，不限商用；强大扩展机制，丰富插件。
  禅道是有保障的项目管理软件。；禅道开发团队从04年从事开源，坚持到现在；已为数以万计的公司提供即时有力的支持；版本迭代快速，为您提供更好的功能。</div>
  <span class="font-bold">显示6行文本</span>
  <div class="line-6 my-2">禅道是专业的研发项目管理软件。细分需求、任务、缺陷和用例；完整覆盖研发项目核心流程；完整软件生命周期管理。
  禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架；支持CMMI标准的落地实施。
  禅道是灵活的项目管理软件。适用不同的管理场景，如软件公司，互联网企业等；功能可组合使用，可只做缺陷管理、需求管理或任务管理；可私有部署，也可以选择云计算方案。
  禅道是开源免费的项目管理软件。基于ZPL协议发布；源代码开放，不限商用；强大扩展机制，丰富插件。
  禅道是有保障的项目管理软件。；禅道开发团队从04年从事开源，坚持到现在；已为数以万计的公司提供即时有力的支持；版本迭代快速，为您提供更好的功能。</div>
</Example>

```html
<div class="line-2 my-2">禅道是专业的研发项目管理软件。细分需求、任务、缺陷和用例；完整覆盖研发项目核心流程；完整软件生命周期管理。
禅道是通用的项目管理软件。完整支持敏捷项目模型、瀑布项目模型、看板模型；内置项目集、产品、项目和执行四个管理框架；支持CMMI标准的落地实施。</div>
...
```

<script setup>
  const lineClampJson = [
    {name: 'line-2', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;'},
    {name: 'line-3', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;'},
    {name: 'line-4', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4;'},
    {name: 'line-5', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 5;'},
    {name: 'line-6', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;'},
  ]
</script>
