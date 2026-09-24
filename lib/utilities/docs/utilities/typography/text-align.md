# 文本对齐

## 定义

使用 `text-*` 工具类来控制元素的文本对齐方式。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in textAlignList" :key="item.name">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 示例

::: tabs

== 示例

<Example class="leading-7" background="light-grid">
  <p class="text-left">文本左对齐</p>
  <p class="text-center">文本居中对齐</p>
  <p class="text-right">文本右对齐</p>
  <p class="text-justify">客户门户 v1.2 将于周五 18:00 发布。本次更新支持图片和 PDF 附件在线预览，客户无需下载文件即可查看处理材料；移动端上传新增进度反馈，并在网络中断时保留已填写的工单描述。项目负责人需要在发布前确认验收结果、通知范围和回退步骤。发布后，值班成员将检查登录、工单查询、附件上传和消息提醒，并把客户反馈整理到下一轮迭代计划中。</p>
</Example>

== HTML

```html
<p class="text-left">文本左对齐</p>
<p class="text-center">文本居中对齐</p>
<p class="text-right">文本右对齐</p>
<p class="text-justify">客户门户 v1.2 将于周五 18:00 发布。本次更新支持图片和 PDF 附件在线预览，客户无需下载文件即可查看处理材料；移动端上传新增进度反馈，并在网络中断时保留已填写的工单描述。项目负责人需要在发布前确认验收结果、通知范围和回退步骤。发布后，值班成员将检查登录、工单查询、附件上传和消息提醒，并把客户反馈整理到下一轮迭代计划中。</p>
```

:::

<script setup>
const textAlignList = [
    {name: 'text-left', desc: 'text-align: left;'},
    {name: 'text-center', desc: 'text-align: center;'},
    {name: 'text-right', desc: 'text-align: right;'},
    {name: 'text-justify', desc: 'text-align: justify;'},
];
</script>
