# 浮动

## 定义

用于设置元素浮动或清除浮动影响的工具类。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in floatList">
        <td class="font-mono nowrap">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

::: tip 提示
浮动应当仅适用于实现文字环绕效果，布局请使用 [Flex 工具类](/utilities/flex/utilities/flex.html)。
:::

## 效果展示

### 向右浮动

使用工具类 `pull-right` 将一个元素浮动到其容器的右边。

::: tabs
== 示例

<Example background="light-grid">
  <div class="clearfix">
    <img class="pull-right ml-4 h-24" src="/favicon.svg">
    <p>The release review is scheduled for Friday at 15:00. The team will confirm the delivery scope, review the acceptance results, and check the upgrade instructions before publishing. After the update, the on-call engineer will verify sign-in, ticket search, and file uploads. Any remaining issues will be recorded with an owner and a follow-up date.</p>
    <p>本次迭代交付工单查询、附件预览和消息通知。发布前请核对验收结果与升级说明，确认负责人和回退步骤。发布后由值班成员检查核心操作，记录客户反馈，并安排下一轮改进。</p>
  </div>
</Example>

== HTML

```html
<div class="clearfix">
  <img class="pull-right ml-4 h-24" src="/favicon.svg">
  <p>The release review is scheduled for Friday at 15:00. The team will confirm the delivery scope, review the acceptance results, and check the upgrade instructions before publishing. After the update, the on-call engineer will verify sign-in, ticket search, and file uploads. Any remaining issues will be recorded with an owner and a follow-up date.</p>
  <p>本次迭代交付工单查询、附件预览和消息通知。发布前请核对验收结果与升级说明，确认负责人和回退步骤。发布后由值班成员检查核心操作，记录客户反馈，并安排下一轮改进。</p>
</div>
```

:::

### 向左浮动

使用工具类 `pull-left` 将一个元素浮动到其容器的左边。

::: tabs
== 示例

<Example background="light-grid">
  <div class="clearfix">
    <img class="pull-left mr-4 h-24" src="/favicon.svg">
    <p>The release review is scheduled for Friday at 15:00. The team will confirm the delivery scope, review the acceptance results, and check the upgrade instructions before publishing. After the update, the on-call engineer will verify sign-in, ticket search, and file uploads. Any remaining issues will be recorded with an owner and a follow-up date.</p>
    <p>本次迭代交付工单查询、附件预览和消息通知。发布前请核对验收结果与升级说明，确认负责人和回退步骤。发布后由值班成员检查核心操作，记录客户反馈，并安排下一轮改进。</p>
  </div>
</Example>

== HTML

```html
<div class="clearfix">
  <img class="pull-left mr-4 h-24" src="/favicon.svg">
  <p>The release review is scheduled for Friday at 15:00. The team will confirm the delivery scope, review the acceptance results, and check the upgrade instructions before publishing. After the update, the on-call engineer will verify sign-in, ticket search, and file uploads. Any remaining issues will be recorded with an owner and a follow-up date.</p>
  <p>本次迭代交付工单查询、附件预览和消息通知。发布前请核对验收结果与升级说明，确认负责人和回退步骤。发布后由值班成员检查核心操作，记录客户反馈，并安排下一轮改进。</p>
</div>
```

:::

<script setup>
const floatList = [
    {name: 'pull-right', desc: 'float: right;'},
    {name: 'pull-left', desc: 'float: left;'},
    {name: 'clearfix', desc: '.clearfix::after {content: ""; display: block; clear: both;}'},
];
</script>
