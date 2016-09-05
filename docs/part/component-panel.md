section: component
id: panel
description: 包含头部和脚部的面板
icon: icon-list-alt
filter: mianban mb
---

# 面板

## 基本类型

<div class="example">
  <div class="panel">
    <div class="panel-body" contenteditable="">默认的.panel所做的只是提供基本的边界和内部，来包含内容。</div>
  </div>
</div>

```
<div class="panel">
  <div class="panel-body">
    ...
  </div>
</div>
```

## 带标题的面板

<div class="example">
  <div class="panel">
    <div class="panel-heading" contenteditable="">面板标题</div>
    <div class="panel-body" contenteditable="">面板内容</div>
  </div>
</div>

```
<div class="panel">
  <div class="panel-heading">
    ...
  </div>
  <div class="panel-body">
    ...
  </div>
</div>
```

## 带脚注的面板

<div class="example">
  <div class="panel">
    <div class="panel-body" contenteditable="">面板内容</div>
    <div class="panel-footer" contenteditable="">面板脚注</div>
  </div>
</div>

```
<div class="panel">
  <div class="panel-body">
    ...
  </div>
  <div class="panel-footer">
    ...
  </div>
</div>
```

## 色彩主题

<div class="example">
  <div class="panel panel-primary">
    <div class="panel-heading" contenteditable="">.panel-primary</div>
    <div class="panel-body"  contenteditable="">面板内容</div>
  </div>
  <div class="panel panel-success">
    <div class="panel-heading" contenteditable="">.panel-success</div>
    <div class="panel-body"  contenteditable="">面板内容</div>
  </div>
  <div class="panel panel-warning">
    <div class="panel-heading" contenteditable="">.panel-warning</div>
    <div class="panel-body"  contenteditable="">面板内容</div>
  </div>
  <div class="panel panel-danger">
    <div class="panel-heading" contenteditable="">.panel-danger</div>
    <div class="panel-body"  contenteditable="">面板内容</div>
  </div>
  <div class="panel panel-info">
    <div class="panel-heading" contenteditable="">.panel-info</div>
    <div class="panel-body"  contenteditable="">面板内容</div>
  </div>
</div>

```
<div class="panel panel-primary">
  ...
</div>
```

```
<div class="panel panel-success">
  ...
</div>
```

```
<div class="panel panel-warning">
  ...
</div>
```

```
<div class="panel panel-danger">
  ...
</div>
```

```
<div class="panel panel-info">
  ...
</div>
```

## 包含表格

<div class="example">
  <div class="panel">
    <div class="panel-heading" contenteditable="">Panel heading</div>
    <table class="table">
      <thead>
        <tr>
          <th>Lorem ipsum.</th>
          <th>Repudiandae, harum!</th>
          <th>Tenetur, corporis.</th>
          <th>Perspiciatis, porro?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Lorem ipsum.</td>
          <td>Officiis, non.</td>
          <td>Molestias, qui.</td>
          <td>Odit, ducimus.</td>
        </tr>
        <tr>
          <td>Lorem ipsum.</td>
          <td>Repellendus, exercitationem!</td>
          <td>Velit, eos.</td>
          <td>Eius, officiis.</td>
        </tr>
        <tr>
          <td>Lorem ipsum.</td>
          <td>Amet, esse!</td>
          <td>Quis, pariatur!</td>
          <td>Totam, quae.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

```
<div class="panel">
  <div class="panel-heading">
    ...
  </div>
  <table class="table">
    ...
  </table>
</div>
```

## 包含列表

<div class="example">
  <div class="panel">
    <div class="panel-heading">项目</div>
    <ul class="list-group">
      <li class="list-group-item">待办</li>
      <li class="list-group-item">需求</li>
      <li class="list-group-item">任务</li>
      <li class="list-group-item">Bug</li>
      <li class="list-group-item">用例</li>
    </ul>
  </div>
</div>

```
<div class="panel">
  <div class="panel-heading">
    ...
  </div>
  <ul class="list-group">
    ...
  </ul>
</div>
```

## 面板组

<div class="example">
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
</div>

```
<div class="panel-group">
  <div class="panel">
    ...
  </div>
  <div class="panel">
    ...
  </div>
  <div class="panel">
    ...
  </div>
  ...
</div>
```
