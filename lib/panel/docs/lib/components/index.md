# 面板

## 基本使用

一个面板通常包含标题，内容，底部三部分。标题，底部可按需选择使用。

::: tabs

== 示例

<Example>
  <div class="panel">
    <div class="panel-heading">
      <div class="panel-title">本周迭代</div>
    </div>
    <div class="panel-body">
      <p>计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</p>
    </div>
    <div class="panel-footer">下次评审：周五 15:00</div>
  </div>
</Example>

== HTML

```html
<div class="panel">
  <div class="panel-heading">
    <div class="panel-title">本周迭代</div>
  </div>
  <div class="panel-body">
    <p>计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</p>
  </div>
  <div class="panel-footer">下次评审：周五 15:00</div>
</div>
```

:::

## 不同主题

除默认主题外，另外提供6种主题样式。

::: tabs

== 示例

<Example class="space-y-4">
  <div class="panel primary">
    <div class="panel-heading">
      <div class="panel-title">本周迭代</div>
    </div>
    <div class="panel-body">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
  </div>
  <div class="panel secondary-pale">
    <div class="panel-heading">
      <div class="panel-title">本周迭代</div>
    </div>
    <div class="panel-body">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
  </div>
  <div class="panel warning-outline">
    <div class="panel-heading">
      <div class="panel-title">本周迭代</div>
    </div>
    <div class="panel-body">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
  </div>
  <div class="panel ring-danger danger">
    <div class="panel-heading">
      <div class="panel-title">本周迭代</div>
    </div>
    <div class="panel-body canvas">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
  </div>
  <div class="panel black">
    <div class="panel-heading">
      <div class="panel-title">本周迭代</div>
    </div>
    <div class="panel-body">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
  </div>
  <div class="panel gray">
    <div class="panel-heading">
      <div class="panel-title">本周迭代</div>
    </div>
    <div class="panel-body">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
  </div>
</Example>

== HTML

```html
<div class="panel primary">
  ...
</div>
```

:::

## 面板组

搭配CSS工具类 `space-*` 可实现面板组效果。

::: tabs

== 示例

<Example>
  <div class="space-y-2">
    <div class="panel">
      <div class="panel-heading"><div class="panel-title">本周迭代</div></div>
      <div class="panel-body">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
      <div class="panel-footer">下次评审：周五 15:00</div>
    </div>
    <div class="panel">
      <div class="panel-heading"><div class="panel-title">本周迭代</div></div>
      <div class="panel-body">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
      <div class="panel-footer">下次评审：周五 15:00</div>
    </div>
    <div class="panel">
      <div class="panel-heading"><div class="panel-title">本周迭代</div></div>
      <div class="panel-body">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
      <div class="panel-footer">下次评审：周五 15:00</div>
    </div>
  </div>
</Example>

== HTML

```html
<div class="space-y-2">
  <div class="panel">
    <div class="panel-heading"><div class="panel-title">本周迭代</div></div>
    <div class="panel-body">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
    <div class="panel-footer">下次评审：周五 15:00</div>
  </div>
  <div class="panel">
    <div class="panel-heading"><div class="panel-title">本周迭代</div></div>
    <div class="panel-body">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
    <div class="panel-footer">下次评审：周五 15:00</div>
  </div>
  <div class="panel">
    <div class="panel-heading"><div class="panel-title">本周迭代</div></div>
    <div class="panel-body">计划交付 8 项任务，已完成 5 项，剩余 3 项待验收。</div>
    <div class="panel-footer">下次评审：周五 15:00</div>
  </div>
</div>
```

:::

## 与表格组合使用

::: tabs

== 示例

<Example>
  <div class="panel">
    <div class="panel-heading gray-200"><div class="panel-title">项目交付计划</div></div>
    <table class="table">
      <thead>
        <tr>
          <th>项目名称</th>
          <th>负责人</th>
          <th>计划开始</th>
          <th>计划完成</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>客户门户升级</td>
          <td>陈晨</td>
          <td>2026-09-01</td>
          <td>2026-09-18</td>
        </tr>
        <tr>
          <td>移动端工单</td>
          <td>周敏</td>
          <td>2026-09-14</td>
          <td>2026-10-09</td>
        </tr>
        <tr>
          <td>团队知识库</td>
          <td>林悦</td>
          <td>2026-10-12</td>
          <td>2026-10-30</td>
        </tr>
      </tbody>
    </table>
  </div>
</Example>

== HTML

```html
<div class="panel">
  <div class="panel-heading"><div class="panel-title">项目交付计划</div></div>
  <table class="table">
    ...
  </table>
</div>
```

:::

## CSS 类

面板提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `panel`      | 实体类 | 元素作为面板组件 |
| `panel-heading`      | 实体类 | 元素作为面板头部组件 |
| `panel-title`      | 实体类 | 元素作为面板头部标题组件 |
| `panel-actions`      | 实体类 | 元素作为面板头部操作区组件，通常放置在标题右侧 |
| `panel-body`      | 实体类 | 元素作为面板主体组件 |
| `panel-footer`      | 实体类 | 元素作为面板尾部组件 |
| `size-sm`      | 修饰类 | 与 `panel` 搭配使用，使面板各部分使用更紧凑的内边距 |
| `size-lg`      | 修饰类 | 与 `panel` 搭配使用，使面板各部分使用更宽松的内边距 |

## CSS 变量

面板提供了如下 CSS 变量：

| 变量名称                | 变量含义     | 默认值        |
| ------------------------|--------------|---------------|
| `--panel-heading-bg`    | 标题背景色   | `transparent` |
| `--panel-footer-bg`     | 底部背景色   | `transparent` |
