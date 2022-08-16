# 面板

## panel

```html:example
<div class="panel">
  <div class="panel-body">
    默认的面板所做的只是提供基本的边界和内部，来包含内容。
  </div>
</div>
```

## with panel-heading

```html:example
<div class="panel">
  <div class="panel-heading">面板标题</div>
  <div class="panel-body">面板内容</div>
</div>
```

## width panel-footer

```html:example
<div class="panel">
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
```
## theme

```html:example: -flex -flex-col -gap-2
<div class="panel primary">
  <div class="panel-heading">panel-primary</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel secondary">
  <div class="panel-heading">panel-secondary</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel warning">
  <div class="panel-heading">panel-warning</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel danger">
  <div class="panel-heading">panel-danger</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel important">
  <div class="panel-heading">panel-important</div>
  <div class="panel-body">面板内容</div>
</div>
<div class="panel special">
  <div class="panel-heading">panel-special</div>
  <div class="panel-body">面板内容</div>
</div>
```

## width table

```html:example: flex gap-3
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
