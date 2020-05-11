section: component
id: table
description: Beautiful and practical form
icon: icon-table
filter: biaoge bg table-bordered table-borderless table-auto table-striped table-hover
---

# Tables

## Types

<div class="example">
  <table class="table">
    <thead>
      <tr>
        <th class="col-md-2">Table</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Head <code>&lt;thead&gt;</code></td>
        <td>
        The first row of a table is generally used as the header which describes the data of each column in the tabl. In order to being distinguished from other rows in the table, the header is in a different style, e.g. bold, etc. In a table that displays a set of data vertically, the header is the first column.</td>
      </tr>
      <tr>
        <td>content <code>&lt;tbody&gt;</code></td>
        <td>
        Contents are usually left aligned in a cell, but it is better to align numbers right. Contents can be selected by cell or by row，and the selected are distinguished by different styles. In order to distinguish rows，background colors are used. Images and controls can also be applied in cells.</td>
      </tr>
      <tr>
        <td>Footer <code>&lt;tfoot&gt;</code></td>
        <td>It is like a header，or it is used to display supplementary data or actions related to the table.</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Table</th>
        <th>Description</th>
      </tr>
    </tfoot>
  </table>
</div>

```html
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

## Striped

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

```html
<table class="table table-striped">
  ...
</table>
```

## Hover

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

```html
<table class="table table-hover">
  ...
</table>
```

## Table with all borders

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

## Table with no borders

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

## Auto

`.table-auto`

Set the width of the table to be `auto`, and the maximum width does not exceed `100%`。

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

```html
<table class="table table-auto">
  ...
</table>
```

## Condensed

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

```html
<table class="table table-condensed">
  ...
</table>
```

## Fixed layout

`.table-fixed`

Set `table-layout` as `fixed`.

For a fixed layout，its horizontal layout depends on the width of the table, the column width, the border width, and cell spacing, but irrelevant to the content.

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

```html
<table class="table table-fixed">
  ...
</table>
```

## Colors

You can mark an entire row or a cell based on semantics.

<div class="example">
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Description</th>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="success">
        <td>1</td>
        <td>successful or positive behaviors</td>
        <td>01/04/2012</td>
        <td>Approved</td>
      </tr>
      <tr class="danger">
        <td>2</td>
        <td>dangerous or potentially dangerous behaviors</td>
        <td>02/04/2012</td>
        <td>Declined</td>
      </tr>
      <tr class="warning">
        <td>3</td>
        <td>warnings which require your attention</td>
        <td>03/04/2012</td>
        <td>Pending</td>
      </tr>
      <tr class="active">
        <td>4</td>
        <td>active rows</td>
        <td>04/04/2012</td>
        <td>Call in to confirm</td>
      </tr>
    </tbody>
  </table>
</div>

```html
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

## Responsive

`.table` is embedded in `.table-responsive` to enable a responsive table. If the screen width is less than `768px`, line breaks will be disabled for the content. If the width is not enough, horizontal scrolling is allowed to display all columns.

```html
<div class="table-responsive">
  <table class="table">
    ...
  </table>
</div>
```
