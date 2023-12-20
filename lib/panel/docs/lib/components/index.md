# 面板

## 基本使用

一个面板通常包含标题，内容，底部三部分。标题，底部可按需选择使用。

::: tabs

== 示例

<Example>
  <div class="panel">
    <div class="panel-heading">
      <div class="panel-title">面板标题</div>
    </div>
    <div class="panel-body">
      <p>面板内容</p>
    </div>
    <div class="panel-footer">面板底部</div>
  </div>
</Example>

== HTML

```html
<div class="panel">
  <div class="panel-heading">
    <div class="panel-title">面板标题</div>
  </div>
  <div class="panel-body">
    <p>面板内容</p>
  </div>
  <div class="panel-footer">面板底部</div>
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
      <div class="panel-title">面板标题</div>
    </div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel secondary-pale">
    <div class="panel-heading">
      <div class="panel-title">面板标题</div>
    </div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel warning-outline">
    <div class="panel-heading">
      <div class="panel-title">面板标题</div>
    </div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel ring-danger danger">
    <div class="panel-heading">
      <div class="panel-title">面板标题</div>
    </div>
    <div class="panel-body canvas">面板内容</div>
  </div>
  <div class="panel black">
    <div class="panel-heading">
      <div class="panel-title">面板标题</div>
    </div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel gray">
    <div class="panel-heading">
      <div class="panel-title">面板标题</div>
    </div>
    <div class="panel-body">面板内容</div>
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
      <div class="panel-heading"><div class="panel-title">面板标题</div></div>
      <div class="panel-body">面板内容</div>
      <div class="panel-footer">面板底部</div>
    </div>
    <div class="panel">
      <div class="panel-heading"><div class="panel-title">面板标题</div></div>
      <div class="panel-body">面板内容</div>
      <div class="panel-footer">面板底部</div>
    </div>
    <div class="panel">
      <div class="panel-heading"><div class="panel-title">面板标题</div></div>
      <div class="panel-body">面板内容</div>
      <div class="panel-footer">面板底部</div>
    </div>
  </div>
</Example>

== HTML

```html
<div class="space-y-2">
  <div class="panel">
    <div class="panel-heading"><div class="panel-title">面板标题</div></div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板底部</div>
  </div>
  <div class="panel">
    <div class="panel-heading"><div class="panel-title">面板标题</div></div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板底部</div>
  </div>
  <div class="panel">
    <div class="panel-heading"><div class="panel-title">面板标题</div></div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板底部</div>
  </div>
</div>
```

:::

## 与表格组合使用

::: tabs

== 示例

<Example>
  <div class="panel">
    <div class="panel-heading gray-200"><div class="panel-title">包含表格</div></div>
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
          <td>ZUI1</td>
          <td>研发</td>
          <td>今天</td>
          <td>今天</td>
        </tr>
        <tr>
          <td>ZUI2</td>
          <td>研发</td>
          <td>明天</td>
          <td>明天</td>
        </tr>
        <tr>
          <td>ZUI3</td>
          <td>研发</td>
          <td>后天</td>
          <td>后天</td>
        </tr>
      </tbody>
    </table>
  </div>
</Example>

== HTML

```html
<div class="panel">
  <div class="panel-heading"><div class="panel-title">包含表格</div></div>
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
| `panel-body`      | 实体类 | 元素作为面板主体组件 |
| `panel-footer`      | 实体类 | 元素作为面板尾部组件 |

## CSS 变量

面板提供了如下 CSS 变量：

| 变量名称                | 变量含义     |
| ------------------------|--------------|
| `--panel-heading-bg`    | 标题背景色   |
| `--panel-footer-bg`     | 底部背景色   |
