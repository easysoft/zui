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
  <div class="panel-heading">
    <div class="panel-title">面板标题</div>
  </div>
  <div class="panel-body">面板内容</div>
</div>
```

```html:example
<div class="panel">
  <div class="panel-heading">
    <div class="panel-title">面板标题 + 右侧工具栏</div>
    <div class="panel-actions">
      <nav class="toolbar">
        <button class="btn ghost toolbar-item active" type="button"><i class="icon icon-user"></i><span class="text">登录</span></button>
        <button class="btn ghost toolbar-item active" type="button"><i class="icon icon-lock"></i><span class="text">注册</span></button>
      </nav>
    </div>
  </div>
  <div class="panel-body">面板内容</div>
</div>
```

## width panel-footer

```html:example
<div class="panel">
  <div class="panel-heading">
    <div class="panel-title">面板标题</div>
  </div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
```

## more borders and background

```html:example
<div class="panel ring">
  <div class="panel-heading ring bg-surface">
    <div class="panel-title">面板标题 （normal）</div>
  </div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer ring bg-surface">面板脚注</div>
</div>
```

## sizes

```html:example: -flex -flex-row -gap-4 -items-start
<div class="panel size-sm">
  <div class="panel-heading">
    <div class="panel-title">面板标题 （size-sm）</div>
  </div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
<div class="panel">
  <div class="panel-heading">
    <div class="panel-title">面板标题 （normal）</div>
  </div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
<div class="panel size-lg">
  <div class="panel-heading">
    <div class="panel-title">面板标题 （size-lg）</div>
  </div>
  <div class="panel-body">面板内容</div>
  <div class="panel-footer">面板脚注</div>
</div>
```

## theme

```html:example: -flex -flex-row -gap-4
<div class="flex-auto -flex -flex-col -gap-2">
  <div class="panel primary">
    <div class="panel-heading">panel-primary</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel secondary">
    <div class="panel-heading">panel-secondary</div>
    <div class="panel-body">面板内容</div>
  </div>
  <div class="panel success">
    <div class="panel-heading">panel-success</div>
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
</div>
<div class="flex-auto -flex -flex-col -gap-2">
  <div class="border panel primary">
    <div class="panel-heading">panel-primary</div>
    <div class="panel-body canvas">面板内容</div>
  </div>
  <div class="border panel secondary">
    <div class="panel-heading">panel-secondary</div>
    <div class="panel-body canvas">面板内容</div>
  </div>
  <div class="border panel success">
    <div class="panel-heading">panel-success</div>
    <div class="panel-body canvas">面板内容</div>
  </div>
  <div class="border panel warning">
    <div class="panel-heading">panel-warning</div>
    <div class="panel-body canvas">面板内容</div>
  </div>
  <div class="border panel danger">
    <div class="panel-heading">panel-danger</div>
    <div class="panel-body canvas">面板内容</div>
  </div>
  <div class="border panel important">
    <div class="panel-heading">panel-important</div>
    <div class="panel-body canvas">面板内容</div>
  </div>
  <div class="border panel special">
    <div class="panel-heading">panel-special</div>
    <div class="panel-body canvas">面板内容</div>
  </div>
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
