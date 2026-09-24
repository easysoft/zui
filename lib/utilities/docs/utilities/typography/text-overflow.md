# 文本溢出

## 定义

文字溢出包括两种方式，分布为省略和裁剪，在 ZUI 中可以通过如下工具类实现：

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in textOverflowList" :key="item.name">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 文字省略 `text-ellipsis`

使用 `text-ellipsis` 用省略号（…）来截断溢出的文本。

::: tabs

== 示例

<Example background="light-circle">
  <p class="text-ellipsis">客户门户 v1.2 将于周五 18:00 发布。本次更新支持图片和 PDF 附件在线预览，客户无需下载文件即可查看处理材料；移动端上传新增进度反馈，并在网络中断时保留已填写的工单描述。项目负责人需要在发布前确认验收结果、通知范围和回退步骤。发布后，值班成员将检查登录、工单查询、附件上传和消息提醒，并把客户反馈整理到下一轮迭代计划中。</p>
</Example>

== HTML

```html
<p class="text-ellipsis">客户门户 v1.2 将于周五 18:00 发布。本次更新支持图片和 PDF 附件在线预览，客户无需下载文件即可查看处理材料；移动端上传新增进度反馈，并在网络中断时保留已填写的工单描述。项目负责人需要在发布前确认验收结果、通知范围和回退步骤。发布后，值班成员将检查登录、工单查询、附件上传和消息提醒，并把客户反馈整理到下一轮迭代计划中。</p>
```

:::

## 文字裁剪 `text-clip`

使用 `text-clip` 在内容区域的极限处截断文本。

::: tabs

== 示例

<Example background="light-circle">
  <p class="text-clip">客户门户 v1.2 将于周五 18:00 发布。本次更新支持图片和 PDF 附件在线预览，客户无需下载文件即可查看处理材料；移动端上传新增进度反馈，并在网络中断时保留已填写的工单描述。项目负责人需要在发布前确认验收结果、通知范围和回退步骤。发布后，值班成员将检查登录、工单查询、附件上传和消息提醒，并把客户反馈整理到下一轮迭代计划中。</p>
</Example>

== HTML

```html
<p class="text-clip">客户门户 v1.2 将于周五 18:00 发布。本次更新支持图片和 PDF 附件在线预览，客户无需下载文件即可查看处理材料；移动端上传新增进度反馈，并在网络中断时保留已填写的工单描述。项目负责人需要在发布前确认验收结果、通知范围和回退步骤。发布后，值班成员将检查登录、工单查询、附件上传和消息提醒，并把客户反馈整理到下一轮迭代计划中。</p>
```

:::

<script setup>
const textOverflowList = [
    {name: 'text-ellipsis', desc: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;'},
    {name: 'text-clip', desc: 'overflow: hidden; text-overflow: clip; white-space: nowrap;'},
];
</script>
