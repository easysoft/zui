# 面板

可以将某些DOM内容放在面板组件中。

## 基本使用

`.panel-heading` ， `.panel-body`， `.panel-footer` 三部分可以根据需求单独使用。
<Example>
  <div class="panel">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
</Example>

```html
<div class="panel">
  <div class="panel-heading">面板标题</div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
```

## 不同主题

除默认主体外，另外提供6种主体样式。

<Example>
  <div class="panel panel-primary">
    <div class="panel-heading">panel-primary</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel panel-secondary">
    <div class="panel-heading">panel-secondary</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel panel-warning">
    <div class="panel-heading">panel-warning</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel panel-danger">
    <div class="panel-heading">panel-danger</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel panel-important">
    <div class="panel-heading">panel-important</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel panel-special">
    <div class="panel-heading">panel-special</div>
    <div class="panel-body">面板内容</div>
  </div>
</Example>

```html
<div class="panel panel-primary">
  <div class="panel-heading">panel-primary</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel panel-secondary">
  <div class="panel-heading">panel-secondary</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel panel-warning">
  <div class="panel-heading">panel-warning</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel panel-danger">
  <div class="panel-heading">panel-danger</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel panel-important">
  <div class="panel-heading">panel-important</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel panel-special">
  <div class="panel-heading">panel-special</div>
  <div class="panel-body">面板内容</div>
</div>
```

## 面板组

`.panel-group` 可包含多个面板组件。

<Example>
  <div class="panel-group">
    <div class="panel">
      <div class="panel-heading">面板标题</div>
      <div class="panel-body">面板内容</div>
      <div class="panel-footer">面板脚注</div>
    </div>
    <div class="panel">
      <div class="panel-heading">面板标题</div>
      <div class="panel-body">面板内容</div>
      <div class="panel-footer">面板脚注</div>
    </div>
    <div class="panel">
      <div class="panel-heading">面板标题</div>
      <div class="panel-body">面板内容</div>
      <div class="panel-footer">面板脚注</div>
    </div>
  </div>
</Example>

```html
<div class="panel-group">
  <div class="panel">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
  <div class="panel">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
  <div class="panel">
    <div class="panel-heading">面板标题</div>
    <div class="panel-body">面板内容</div>
    <div class="panel-footer">面板脚注</div>
  </div>
</div>
```

## 与表格组合使用

<Example>
  <div class="panel">
    <div class="panel-heading">包含表格</div>
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
          <td>禅道开源版</td>
          <td>禅道研发</td>
          <td>今天</td>
          <td>今天</td>
        </tr>
        <tr>
          <td>禅道旗舰版</td>
          <td>禅道研发</td>
          <td>明天</td>
          <td>明天</td>
        </tr>
        <tr>
          <td>禅道开源版</td>
          <td>禅道研发</td>
          <td>后天</td>
          <td>后天</td>
        </tr>
      </tbody>
    </table>
  </div>
</Example>


```html
<div class="panel">
  <div class="panel-heading">包含表格</div>
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
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>今天</td>
        <td>今天</td>
      </tr>
      <tr>
        <td>禅道旗舰版</td>
        <td>禅道研发</td>
        <td>明天</td>
        <td>明天</td>
      </tr>
      <tr>
        <td>禅道开源版</td>
        <td>禅道研发</td>
        <td>后天</td>
        <td>后天</td>
      </tr>
    </tbody>
  </table>
</div>
```
