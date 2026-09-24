# 列表样式

## 定义

使用工具类 `list-*` 为元素（通常是 `<ul>` 或 `<ol>`）设置 CSS 属性 `list-style`。

<Example padding="p-0">
  <table class="table">
    <thead>
      <tr>
        <th>工具类</th>
        <th>属性</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-mono">list-unstyled</td>
        <td><code>list-style-type: none; padding-left: 0;</code></td>
      </tr>
      <tr>
        <td class="font-mono">list-none</td>
        <td><code>list-style-type: none;</code></td>
      </tr>
      <tr>
        <td class="font-mono">list-disc</td>
        <td><code>list-style-type: disc;</code></td>
      </tr>
      <tr>
        <td class="font-mono">list-decimal</td>
        <td><code>list-style-type: decimal;</code></td>
      </tr>
    </tbody>
   </table>
</Example>

## 示例

### 无样式 `list-unstyled`

::: tabs

== 示例

<Example>
  <ul class="list-unstyled">
    <li>确认交付范围</li>
    <li>完成研发与代码评审</li>
    <li>安排验收测试</li>
    <li>
      准备发布材料
      <ul class="list-unstyled">
        <li>整理发布说明</li>
        <li>确认数据备份</li>
        <li>记录回退步骤</li>
      </ul>
    </li>
  </ul>
</Example>

== HTML

```html
<ul class="list-unstyled">
  <li>确认交付范围</li>
  <li>完成研发与代码评审</li>
  <li>安排验收测试</li>
  <li>
    准备发布材料
    <ul class="list-unstyled">
      <li>整理发布说明</li>
      <li>确认数据备份</li>
      <li>记录回退步骤</li>
    </ul>
  </li>
</ul>
```

:::

### 空白样式 `list-none`

::: tabs

== 示例

<Example>
  <ul class="list-none">
    <li>确认交付范围</li>
    <li>完成研发与代码评审</li>
    <li>安排验收测试</li>
    <li>
      准备发布材料
      <ul class="list-none">
        <li>整理发布说明</li>
        <li>确认数据备份</li>
        <li>记录回退步骤</li>
      </ul>
    </li>
  </ul>
</Example>

== HTML

```html
<ul class="list-none">
  <li>确认交付范围</li>
  <li>完成研发与代码评审</li>
  <li>安排验收测试</li>
  <li>
    准备发布材料
    <ul class="list-none">
      <li>整理发布说明</li>
      <li>确认数据备份</li>
      <li>记录回退步骤</li>
    </ul>
  </li>
</ul>
```

:::

### 圆点样式 `list-disc`

::: tabs

== 示例

<Example>
  <ul class="list-disc">
    <li>确认交付范围</li>
    <li>完成研发与代码评审</li>
    <li>安排验收测试</li>
    <li>
      准备发布材料
      <ul class="list-disc">
        <li>整理发布说明</li>
        <li>确认数据备份</li>
        <li>记录回退步骤</li>
      </ul>
    </li>
  </ul>
</Example>

== HTML

```html
<ul class="list-disc">
  <li>确认交付范围</li>
  <li>完成研发与代码评审</li>
  <li>安排验收测试</li>
  <li>
    准备发布材料
    <ul class="list-disc">
      <li>整理发布说明</li>
      <li>确认数据备份</li>
      <li>记录回退步骤</li>
    </ul>
  </li>
</ul>
```

:::

### 序号样式 `list-decimal`

::: tabs

== 示例

<Example>
  <ul class="list-decimal">
    <li>确认交付范围</li>
    <li>完成研发与代码评审</li>
    <li>安排验收测试</li>
    <li>
      准备发布材料
      <ul class="list-decimal">
        <li>整理发布说明</li>
        <li>确认数据备份</li>
        <li>记录回退步骤</li>
      </ul>
    </li>
  </ul>
</Example>

== HTML

```html
<ul class="list-decimal">
  <li>确认交付范围</li>
  <li>完成研发与代码评审</li>
  <li>安排验收测试</li>
  <li>
    准备发布材料
    <ul class="list-decimal">
      <li>整理发布说明</li>
      <li>确认数据备份</li>
      <li>记录回退步骤</li>
    </ul>
  </li>
</ul>
```

:::
