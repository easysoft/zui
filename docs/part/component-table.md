section: component
id: table
description: 美观实用的表格
icon: icon-table
filter: biaoge bg table-bordered table-borderless table-auto table-striped table-hover
---

# 表格

## 基本类型

<div class="example">
  <table class="table">
    <thead>
      <tr>
        <th class="col-md-2">名称</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>表头 <code>&lt;thead&gt;</code></td>
        <td>
        一般表格的第一行作为表头，用于描述表中每一列数据名称。为区别于表格其他行，表头具备不同的样式，例如字体加粗等。在垂直显示一组数据的表格中，表头也可能是垂直的第一列，而不是行。</td>
      </tr>
      <tr>
        <td>内容 <code>&lt;tbody&gt;</code></td>
        <td>
        一般内容会在单元格内靠左对齐，对于数字可能靠右对齐比较好。在一些表格中，内容可以按单元格选择或者按行选择，选中的部分会以不同的样式区分。为了使得行与行便于区分，通常也会使得行交替使用不同的背景色。图片或其他控件也可以应用单元格中。</td>
      </tr>
      <tr>
        <td>表尾 <code>&lt;tfoot&gt;</code></td>
        <td>与表头作用相同，或者用来放置与表相关补充数据或操作。</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>名称</th>
        <th>描述</th>
      </tr>
    </tfoot>
  </table>
</div>

```
<table class="table">
  <thead>
    <tr>
      <th>...</th>
      <th>...</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>...</td>
      <td>...</td>
    </tr>
  </tfoot>
</table>
```

## 隔行交替样式

`.table-striped`

<div class="example">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Sunshine</td>
        <td>Sunday</td>
        <td>catouse</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Sunday</td>
        <td>Sunshine</td>
        <td>catouse</td>
      </tr>
      <tr>
        <td>2</td>
        <td>catouse</td>
        <td>azhi</td>
        <td>zenUI</td>
      </tr>
      <tr>
        <td>3</td>
        <td>God</td>
        <td>Lady Gaga</td>
        <td>catouse</td>
      </tr>
    </tbody>
  </table>
</div>

```
<table class="table table-striped">
  ...
</table>
```

## 响应鼠标悬停

`.table-hover`

<div class="example">
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Sunshine</td>
        <td>Sunday</td>
        <td>catouse</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Sunday</td>
        <td>Sunshine</td>
        <td>catouse</td>
      </tr>
      <tr>
        <td>2</td>
        <td>catouse</td>
        <td>azhi</td>
        <td>zenUI</td>
      </tr>
      <tr>
        <td>3</td>
        <td>God</td>
        <td>Lady Gaga</td>
        <td>catouse</td>
      </tr>
    </tbody>
  </table>
</div>

```
<table class="table table-hover">
  ...
</table>
```

## 带所有边框的表格

`.table-bordered`

<div class="example">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Sunshine</td>
        <td>Sunday</td>
        <td>catouse</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Sunday</td>
        <td>Sunshine</td>
        <td>catouse</td>
      </tr>
      <tr>
        <td>2</td>
        <td>catouse</td>
        <td>azhi</td>
        <td>zenUI</td>
      </tr>
      <tr>
        <td>3</td>
        <td>God</td>
        <td>Lady Gaga</td>
        <td>catouse</td>
      </tr>
    </tbody>
  </table>
  <pre><code>&lt;table class="table <em>table-bordered</em>"&gt;
...
&lt;/table&gt;</code></pre>
</div>

## 不带边框的表格

`.table-borderless`

<div class="example">
  <table class="table table-borderless">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Sunshine</td>
        <td>Sunday</td>
        <td>catouse</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Sunday</td>
        <td>Sunshine</td>
        <td>catouse</td>
      </tr>
      <tr>
        <td>2</td>
        <td>catouse</td>
        <td>azhi</td>
        <td>zenUI</td>
      </tr>
      <tr>
        <td>3</td>
        <td>God</td>
        <td>Lady Gaga</td>
        <td>catouse</td>
      </tr>
    </tbody>
  </table>
  <pre><code>&lt;table class="table <em>table-borderless</em>"&gt;
...
&lt;/table&gt;</code></pre>
</div>

## 自动宽度的表格

`.table-auto`

将表格的宽度设置为 `auto`，但最大宽度不超过 `100%`。

<div class="example">
  <table class="table table-auto">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>catouse</td>
        <td>hello</td>
        <td>world</td>
      </tr>
      <tr>
        <td>2</td>
        <td>jay</td>
        <td>thks</td>
        <td>jajaja</td>
      </tr>
      <tr>
        <td>3</td>
        <td>JK row</td>
        <td>thks</td>
        <td>Pa</td>
      </tr>
    </tbody>
  </table>
</div>

```
<table class="table table-auto">
  ...
</table>
```

## 更为紧凑的表格

`.table-condensed`

<div class="example">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>catouse</td>
        <td>hello</td>
        <td>world</td>
      </tr>
      <tr>
        <td>2</td>
        <td>jay</td>
        <td>thks</td>
        <td>jajaja</td>
      </tr>
      <tr>
        <td>3</td>
        <td>JK row</td>
        <td>thks</td>
        <td>Pa</td>
      </tr>
    </tbody>
  </table>
</div>

```
<table class="table table-condensed">
  ...
</table>
```

## 固定布局的表格

`.table-fixed`

将表格的 `table-layout` 属性设置为 `fixed`。

在固定表格布局中，水平布局仅取决于表格宽度、列宽度、表格边框宽度、单元格间距，而与单元格的内容无关。

<div class="example">
  <table class="table table-fixed">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>catouse</td>
        <td>hello</td>
        <td>world</td>
      </tr>
      <tr>
        <td>2</td>
        <td>jay</td>
        <td>thks</td>
        <td>jajaja</td>
      </tr>
      <tr>
        <td>3</td>
        <td>JK row</td>
        <td>thks</td>
        <td>Pa</td>
      </tr>
    </tbody>
  </table>
</div>

```
<table class="table table-fixed">
  ...
</table>
```

## 色彩主题

可以根据语义标记整行或者某一单元格

<div class="example">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>描述</th>
        <th>Payment Taken</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="success">
        <td>1</td>
        <td>表示成功或积极的行为。</td>
        <td>01/04/2012</td>
        <td>Approved</td>
      </tr>
      <tr class="danger">
        <td>2</td>
        <td>表示一个危险或存有潜在危险的行为。</td>
        <td>02/04/2012</td>
        <td>Declined</td>
      </tr>
      <tr class="warning">
        <td>3</td>
        <td>表示警告，可能需要注意。</td>
        <td>03/04/2012</td>
        <td>Pending</td>
      </tr>
      <tr class="active">
        <td>4</td>
        <td>标记为激活行。</td>
        <td>04/04/2012</td>
        <td>Call in to confirm</td>
      </tr>
    </tbody>
  </table>
</div>

```
<table class="table">
  <tbody>
    <tr class="success">
      ...
    </tr>
    <tr class="danger">
      ...
    </tr>
    <tr class="warning">
      ...
    </tr>
    <tr class="active">
      ...
    </tr>
  </tbody>
</table>
```

## 响应式表格

将 `.table` 包裹在 `.table-responsive` 容器元素内即可实现响应式表格。当设备屏幕宽度小于 `768px` 时，表格内容会禁用换行，当宽度不够时，允许在水平方向上进行滚动以浏览所有列。

```
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```
