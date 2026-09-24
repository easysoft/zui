# 行数限制

## 定义

使用 `line-clamp-*` 工具类限制显示多少行文本，在文本超出时进行截断：

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in lineClampList" :key="item.name">
        <td class="font-mono w-32">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 示例

::: tabs

== 示例

<Example class="row gap-6 flex-wrap">
  <div v-for="item in lineClampList" :key="item.name" class="w-48">
    <h5 class="mb-2">至多显示 {{item.name.replace('line-', '')}} 行</h5>
    <p :class="item.name">客户门户 v1.2 将于周五 18:00 发布。本次更新支持图片和 PDF 附件在线预览，客户无需下载文件即可查看处理材料；移动端上传新增进度反馈，并在网络中断时保留已填写的工单描述。项目负责人需要在发布前确认验收结果、通知范围和回退步骤。发布后，值班成员将检查登录、工单查询、附件上传和消息提醒，并把客户反馈整理到下一轮迭代计划中。</p>
  </div>
</Example>

== HTML

```html
<div class="line-clamp-1 ...">...</div>
<div class="line-clamp-2 ...">...</div>
<div class="line-clamp-3 ...">...</div>
<div class="line-clamp-4 ...">...</div>
<div class="line-clamp-5 ...">...</div>
<div class="line-clamp-6 ...">...</div>
```

<script setup>
const lineClampList = [
    {name: 'line-clamp-1', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;'},
    {name: 'line-clamp-2', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;'},
    {name: 'line-clamp-3', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;'},
    {name: 'line-clamp-4', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4;'},
    {name: 'line-clamp-5', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 5;'},
    {name: 'line-clamp-6', desc: 'overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6;'},
];
</script>
