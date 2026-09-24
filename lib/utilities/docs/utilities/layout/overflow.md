# 溢出

## 定义

用于控制元素如何处理超出容器的内容的工具类。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in overflowList">
        <td class="font-mono">{{item.name}}</td>
        <td><code>{{item.desc}}</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 效果展示

### 自动

使用工具类 `overflow-auto` 在一个元素的内容溢出该元素的边界时为其添加滚动条。不像 `overflow-scroll` 总是显示滚动条，这个工具类只在需要滚动时才会显示。

::: tabs
== 示例

<Example>
  <div class="border overflow-auto h-24">
    <h4>客户门户发布记录</h4>
    <p><small>2026-09-25 · 发布负责人：林悦</small></p>
    <p>
      09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。<br>11:00 陈晨完成附件预览修复，并将更新部署到测试环境。<br>
      15:00 王宁提交验收报告，核心场景全部通过。<br>18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。
    </p>
  </div>
</Example>

== HTML

```html
<div class="overflow-auto h-24">
  <h4>客户门户发布记录</h4>
  <p><small>2026-09-25 · 发布负责人：林悦</small></p>
  <p>
    09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。<br>11:00 陈晨完成附件预览修复，并将更新部署到测试环境。<br>
    15:00 王宁提交验收报告，核心场景全部通过。<br>18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。
  </p>
</div>
```

:::

### 隐藏

使用工具类 `overflow-hidden` 来剪切元素中任何溢出该元素边界的内容。

::: tabs
== 示例

<Example>
  <div class="border overflow-hidden h-24">
    <h4>客户门户发布记录</h4>
    <p><small>2026-09-25 · 发布负责人：林悦</small></p>
    <p>
      09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。<br>11:00 陈晨完成附件预览修复，并将更新部署到测试环境。<br>
      15:00 王宁提交验收报告，核心场景全部通过。<br>18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。
    </p>
  </div>
</Example>

== HTML

```html
<div class="overflow-hidden h-24">
  <h4>客户门户发布记录</h4>
  <p><small>2026-09-25 · 发布负责人：林悦</small></p>
  <p>
    09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。<br>11:00 陈晨完成附件预览修复，并将更新部署到测试环境。<br>
    15:00 王宁提交验收报告，核心场景全部通过。<br>18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。
  </p>
</div>
```

:::

### 可见

使用工具类 `overflow-visible` 来防止元素内的内容被剪切。请注意，任何溢出元素边界的内容都将是可见的。

::: tabs
== 示例

<Example>
  <div class="border overflow-visible h-24">
    <h4>客户门户发布记录</h4>
    <p><small>2026-09-25 · 发布负责人：林悦</small></p>
    <p>
      09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。<br>11:00 陈晨完成附件预览修复，并将更新部署到测试环境。<br>
      15:00 王宁提交验收报告，核心场景全部通过。<br>18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。
    </p>
  </div>
</Example>

== HTML

```html
<div class="overflow-visible h-24">
  <h4>客户门户发布记录</h4>
  <p><small>2026-09-25 · 发布负责人：林悦</small></p>
  <p>
    09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。<br>11:00 陈晨完成附件预览修复，并将更新部署到测试环境。<br>
    15:00 王宁提交验收报告，核心场景全部通过。<br>18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。
  </p>
</div>
```

:::

### 需要时水平滚动

如果需要，使用工具类 `overflow-x-auto` 来允许水平滚动。

::: tabs
== 示例

<Example>
  <div class="border overflow-x-auto nowrap">
    <h4>客户门户发布记录</h4>
    <p><small>2026-09-25 · 发布负责人：林悦</small></p>
    <p>09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。11:00 陈晨完成附件预览修复，并将更新部署到测试环境。15:00 王宁提交验收报告，核心场景全部通过。18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。</p>
  </div>
</Example>

== HTML

```html
<div class="overflow-x-auto nowrap">
  <h4>客户门户发布记录</h4>
  <p><small>2026-09-25 · 发布负责人：林悦</small></p>
  <p>09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。11:00 陈晨完成附件预览修复，并将更新部署到测试环境。15:00 王宁提交验收报告，核心场景全部通过。18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。</p>
</div>
```

:::

### 需要时垂直滚动

如果需要，使用工具类 `overflow-y-auto` 来允许垂直滚动。

::: tabs
== 示例

<Example>
  <div class="border overflow-y-auto h-24">
    <h4>客户门户发布记录</h4>
    <p><small>2026-09-25 · 发布负责人：林悦</small></p>
    <p>09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。11:00 陈晨完成附件预览修复，并将更新部署到测试环境。15:00 王宁提交验收报告，核心场景全部通过。18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。</p>
  </div>
</Example>

== HTML

```html
<div class="overflow-y-auto h-24">
  <h4>客户门户发布记录</h4>
  <p><small>2026-09-25 · 发布负责人：林悦</small></p>
  <p>09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。11:00 陈晨完成附件预览修复，并将更新部署到测试环境。15:00 王宁提交验收报告，核心场景全部通过。18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。</p>
</div>
```

:::

### 始终水平滚动

如果需要，使用工具类 `overflow-x-scroll` 来允许水平滚动。

::: tabs
== 示例

<Example>
  <div class="border overflow-x-scroll nowrap">
    <h4>客户门户发布记录</h4>
    <p><small>2026-09-25 · 发布负责人：林悦</small></p>
    <p>09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。11:00 陈晨完成附件预览修复，并将更新部署到测试环境。15:00 王宁提交验收报告，核心场景全部通过。18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。</p>
  </div>
</Example>

== HTML

```html
<div class="overflow-x-scroll nowrap">
  <h4>客户门户发布记录</h4>
  <p><small>2026-09-25 · 发布负责人：林悦</small></p>
  <p>09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。11:00 陈晨完成附件预览修复，并将更新部署到测试环境。15:00 王宁提交验收报告，核心场景全部通过。18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。</p>
</div>
```

:::

### 始终垂直滚动

如果需要，使用工具类 `overflow-y-scroll` 来允许水平滚动。

::: tabs
== 示例

<Example>
  <div class="border overflow-y-scroll h-24">
    <h4>客户门户发布记录</h4>
    <p><small>2026-09-25 · 发布负责人：林悦</small></p>
    <p>09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。11:00 陈晨完成附件预览修复，并将更新部署到测试环境。15:00 王宁提交验收报告，核心场景全部通过。18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。</p>
  </div>
</Example>

== HTML

```html
<div class="overflow-y-scroll h-24">
  <h4>客户门户发布记录</h4>
  <p><small>2026-09-25 · 发布负责人：林悦</small></p>
  <p>09:00 林悦确认发布范围，包含工单查询、附件预览、移动端上传和消息通知，要求各负责人在评审前补充验收结果。11:00 陈晨完成附件预览修复，并将更新部署到测试环境。15:00 王宁提交验收报告，核心场景全部通过。18:00 周敏发布客户门户 v1.2，并检查登录和文件上传。</p>
</div>
```

:::

### 在所有方向上滚动

如果需要，使用工具类 `overflow-scroll` 来允许水平滚动。

::: tabs
== 示例

<Example>
  <div class="border overflow-scroll h-24 nowrap">
    <h4>发布前检查</h4>
    <p><small>2026-09-25 · 林悦</small></p>
    <p>15:00 团队核对功能范围、验收报告、升级说明、数据库备份和回退步骤，确认工单查询、附件预览、消息提醒及成员权限均通过检查。</p>
    <h4>执行发布</h4>
    <p><small>2026-09-25 · 周敏</small></p>
    <p>18:00 开始发布客户门户 v1.2，暂停写入、执行升级、恢复服务并记录版本号；如发现核心操作异常，由发布负责人决定是否回退。</p>
    <h4>发布后观察</h4>
    <p><small>2026-09-25 · 王宁</small></p>
    <p>18:20 登录、工单查询、附件上传和消息提醒检查完成；值班成员继续观察错误日志和客户反馈，未解决问题登记负责人及下一次检查时间。</p>
  </div>
</Example>

== HTML

```html
<div class="overflow-scroll h-24 nowrap">
  <h4>发布前检查</h4>
  <p><small>2026-09-25 · 林悦</small></p>
  <p>15:00 团队核对功能范围、验收报告、升级说明、数据库备份和回退步骤，确认工单查询、附件预览、消息提醒及成员权限均通过检查。</p>
  <h4>执行发布</h4>
  <p><small>2026-09-25 · 周敏</small></p>
  <p>18:00 开始发布客户门户 v1.2，暂停写入、执行升级、恢复服务并记录版本号；如发现核心操作异常，由发布负责人决定是否回退。</p>
  <h4>发布后观察</h4>
  <p><small>2026-09-25 · 王宁</small></p>
  <p>18:20 登录、工单查询、附件上传和消息提醒检查完成；值班成员继续观察错误日志和客户反馈，未解决问题登记负责人及下一次检查时间。</p>
</div>
```

:::

<script setup>
  const overflowList = [
    {name: 'overflow-auto', desc: 'overflow: auto;'},
    {name: 'overflow-hidden', desc: 'overflow: hidden;'},
    {name: 'overflow-clip', desc: 'text-overflow: clip;'},
    {name: 'overflow-visible', desc: 'overflow: visible;'},
    {name: 'overflow-scroll', desc: 'overflow: scroll;'},
    {name: 'overflow-x-auto', desc: 'overflow-x: auto;'},
    {name: 'overflow-y-auto', desc: 'overflow-y: auto;'},
    {name: 'overflow-x-hidden', desc: 'overflow-x: hidden;'},
    {name: 'overflow-y-hidden', desc: 'overflow-y: hidden;'},
    {name: 'overflow-x-visible', desc: 'overflow-x: visible;'},
    {name: 'overflow-y-visible', desc: 'overflow-y: visible;'},
    {name: 'overflow-x-scroll', desc: 'overflow-x: scroll;'},
    {name: 'overflow-y-scroll', desc: 'overflow-y: scroll;'},
  ]
</script>
