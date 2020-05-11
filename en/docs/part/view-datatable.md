section: view
id: datatable
description: Enhanced table with fixed columns and headers
icon: icon-table
filter: shujubiaoge sjbg
---

# Datatable

<div class="alert alert-info">
  <h4>Datatable is obsolete</h4>
  <p>Datatable will be eliminated. Please use the datagrid with more features. <a class="alert-link" href="#view/datagrid">Try now</a>.</p>
</div>

The datatable plugin is a powerful tool for displaying large data.

<div class="alert alert-warning">
  <h4>Compatibility</h4>
  <ul>
    <li>Drag, drop and scroll are not supported on the touch screens;</li>
    <li>The best experience is not on a small screens.</li>
  </ul>
</div>

The main idea of the datatable is to divide the column of a table into three parts horizontally, the left, the middle, and the right columns. They have the following characteristics:

* Left column: The width of all left columns can be set to a percentage of the table or a fixed width. But it is not allowed to change it again once set. All column widths in the left column are consistent with the table. You can set the width of a column separately, then other columns will adapt to it. It is recommended to set a column width as auto and other columns as fixed.
* Right column: The behavior of the right column is the same as the middle column;
* Middle column: The width of all middle columns needs to be fixed. The minimum value is the table width minus the left column width and the right column width. If it exceeds the minimum value, horizontal scrolling of the middle column is enabled. **In other words, if you want all the middle columns to scroll horizontally, you need to ensure that the sum of the widths of all the middle columns exceeds the width of the middle area.**

## Simple application

### Introduce assets

Datatable is an independent component. You need to introduce assets in lib/ from local or CDN:

```html
<link href="lib/datatable/zui.datatable.min.css" rel="stylesheet">
<script src="lib/datatable/zui.datatable.min.js"></script>
```

### Examples

In the example below, the five left columns and the two right columns are fixed, so the widths are not subjected to the width of the outer container. If the width of middle columns exceed the width of the remained width, the exceeded column will be hidden. Hidden columns can be moved to the visible area by dragging its header. You can also use the scroll bar below to adjust the hidden column display area. When scrolling down the page and the header is in an invisible position, the header will adjust the style and remain fixed at the top of the page.

<div class="example">
  <div class="datatable"></div>
</div>

```html
<!-- HTML Code -->
<table class="table datatable">
  <thead>
    <tr>
      <!-- The two columns below are fixed to the left -->
      <th>#</th>
      <th>time</th>

      <!-- The three columns below can be scrolled in the middle -->
      <th class="flex-col" data-width="100">Event type</th>
      <th class="flex-col" data-width="200">description</th>
      <th class="flex-col" data-width="300">Related person</th>

      <!-- Fix the columns below to the right -->
      <th>score</th>
      ...
    </tr>
  </thead>
  <tbody>
    <tr>...</tr>
    <tr>...</tr>
    ...
  </tbody>
</table>
```

```js
/* Initialize the datatable */
$('table.datatable').datatable();
```

## Enable sorting

Just change one parameter and sorting will be enabled. Datatable supports sorting numbers, dates, and strings in ascending and descending orders.

<div class="example">
  <div class="datatable" data-sortable="true"></div>
</div>

```js
$('table.datatable').datatable({sortable: true});
```

## Highlight selected rows

<div class="example">
  <div class="datatable" data-checkable="true"></div>
</div>

```js
$('table.datatable').datatable({checkable: true});
```

## Comprehensive examples

You can enable all enhanced options.

<div class="example">
  <div class="datatable" data-checkable="true" data-sortable="true"></div>
</div>

```js
$('table.datatable').datatable({checkable: true, sortable: true});
```

## Options

<table class="table-bordered table">
  <thead>
    <tr><th>Parameter</th>
    <th>Value</th>
    <th>Description</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>`checkable`</td>
      <td>*   `false` (default)
*   `true`</td>
      <td>Whether to enable row selection. If enabled, the multi-select button will be displayed at the beginning of the column.</td>
    </tr>
    <tr>
      <td>`checkByClickRow`</td>
      <td>*   `false`
*   `true` (default)</td>
      <td>Whether to switch the selected state by clicking anywhere in the row.

Valid only when `checkable` is`true`.</td>
    </tr>
    <tr>
      <td>`checkedClass`</td>
      <td>String. Default: `"active"`</td>
      <td><tr></tr></td>
    </tr>
    <tr>
      <td>`storage`</td>
      <td>*   `false`
*   `true` (default)</td>
      <td>Whether local storage is enabled to enhance the user experience. If enabled, sorting status and selected rows will be the previous state after refreshing the page.</td>
    </tr>
    <tr>
      <td>`sortable`</td>
      <td>*   `false` (default)
*   `true`</td>
      <td>Whether to enable sorting. Click on the header to sort the data by the column.</td>
    </tr>
    <tr>
      <td>`fixedHeader`</td>
      <td>*   `false` (default)
*   `true`</td>
      <td>Whether to fix the header. If enabled, fix the header to the top of the page when scrolling down causes the header invisible. <span class="text-warning">Fixedheader is for page element `<body>`. If the datatable is already in a fixed element, this feature might not work.</span></td>
    </tr>
    <tr>
      <td>`fixedHeaderOffset`</td>
      <td>Number. Default: `0`</td>
      <td>The height from the top when the title is fixed. It needs to be adjusted, if the top of the page contains other fixed content.

Valid when `fixedHeader` is `true`.</td>
    </tr>
    <tr>
      <td>`fixedLeftWidth`</td>
      <td>Number or string. Default: `"30%"`</td>
      <td>The width of all columns fixed on the left. It can be fixed percentage.</td>
    </tr>
    <tr>
      <td>`fixedRightWidth`</td>
      <td>Number or string. Default: `"30%"`</td>
      <td>The width of all columns fixed on the right. It can be fixed percentage.</td>
    </tr>
    <tr>
      <td>`flexHeadDrag`</td>
      <td>*   `false`
*   `true` (default)</td>
      <td>Whether to adjust the visible area by dragging the header</td>
    </tr>
    <tr>
      <td>`scrollPos`</td>
      <td>*   `'in'` (default)
*   `'out'`</td>
      <td>Scroll bar position</td>
    </tr>
    <tr>
      <td>`rowHover`</td>
      <td>*   `false`
*   `true` (default)</td>
      <td>Whether to enable mouseover style on the row</td>
    </tr>
    <tr>
      <td>`colHover`</td>
      <td>*   `false`
*   `true` (default)</td>
      <td>Whether to enable mouseover style on the column. Valid when the mouse hovers over the header.</td>
    </tr>
<!--       <tr>
      <td><code>customizable</code></td>
      <td>
        <ul>
          <li><code>false</code> (default)</li>
          <li><code>true</code></li>
        </ul>
      </td>
      <td>Whether to change the column width by dragging the edge of the header</td>
    </tr> -->
    <tr>
      <td>`fixCellHeight`</td>
      <td>`true`(default),`false`</td>
      <td>Whether to automatically adjust the cell height after rendering. The datatable divides the column into several parts, so there may be different row height on the same row. Turn on this option on to adjust it automatically and turn it off to improve table rendering efficiency. CSS can still be used to limit the row height even if it is turned off.</td>
    </tr>
    <tr>
      <td>`minColWidth`</td>
      <td>Number. Default: `20`</td>
      <td>Minimum width of the column</td>
    </tr>
    <tr>
      <td>`minFixedLeftWidth`</td>
      <td>Number. Default: `200`</td>
      <td>Minimum width of all fixed columns on the left</td>
    </tr>
    <tr>
      <td>`minFixedRightWidth`</td>
      <td>Number. Default: `200`</td>
      <td>Minimum width of all fixed columns on the right</td>
    </tr>
    <tr>
      <td>`minFlexAreaWidth`</td>
      <td>Number. Default: 200`</td>
      <td>Minimum width of variable area in the middle</td>
    </tr>
    <tr>
      <td>`selectable`</td>
      <td>`true`(default),`false`, `{...}`</td>
      <td>Whether to enable [Selectable](#javascript/selectable) features. If enabled, you can directly set the value of this option supported by the selectable plugin.</td>
    </tr>
  </tbody>
</table>

```js
$('table.datatable').datatable({
    checkable: true,
    sortable: true,
    checkedClass: "checked",
    minFixedLeftWidth: 300
    // More parameters...
});
```

Options can also be written in `data-*` to be enhance HTML tags.

## Events

Datatable events can be bound in jQuery native methods or  be written in the options.

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Event</th>
      <th>jQuery event name</th>
      <th>Description</th>
      <th>Event parameter</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`afterLoad`</td>
      <td>`"afterLoad.zui.datatable"`</td>
      <td>Called after the data is loaded</td>
      <td>*   `event.data` Tabular data</td>
    </tr>
    <tr>
      <td>`ready`</td>
      <td>`"ready.zui.datatable"`</td>
      <td>Called after rendering. Other events for DOM can also be bound in this option.</td>
      <td>n/a</td>
    </tr>
    <tr>
      <td>`sort`</td>
      <td>`"sort.zui.datatable"`</td>
      <td>Called after the table is sorted</td>
      <td>*   `event.sorter.index`: Number, the column number on which the sorting is based;
*   `event.sorter.sortUp`: Sorting direction, `true` as ascending and `false` as descending.</td>
    </tr>
    <tr>
      <td>`sizeChanged`</td>
      <td>`"sizeChanged.zui.datatable"`</td>
      <td>Called when the column width changes</td>
      <td>*   `event.changes.change`: String, the type of change; `"fixedLeftWidth"`: Change the total width of all fixed columns on the left;  `"fixedRightWidth"`: Change the total width of all fixed columns on the right side; `"colWidth"`: Change for a single column width;
*   `event.changes.oldWidth`: Number, the width value before the change;
*   `event.changes.newWidth`: Number, the new width value;
*   `event.changes.colIndex`: Number. If a single column width changes, the value is the sequence number of the changed column.</td>
    </tr>
    <tr>
      <td>`checksChanged`</td>
      <td>`"checksChanged.zui.datatable"`</td>
      <td>Called when the selected state of the row changes</td>
      <td>*   `event.checks.checkedAll`: If `true`, all current rows are selected. Otherwise, at least one row is selected.
*   `event.checks.checks`: Array, all IDs of selected rows.</td>
    </tr>
  </tbody>
</table>

#### Use options to handle events

```js
$('table.datatable').datatable({
    sort: function(event) {
        console.log(event);
        // console.log("Table has been reordered！");
        // Handle sorting event
        // ...
    }
});
```

#### Use jQuery method binding event

```js
$('table.datatable').datatable().on("sort.zui.datatable", function(event) {
    console.log(event);
    // console.log("Table has been reordered！");
    // Handle sorting event
    // ...
});
```

## Attributes

When `checkable` is enabled, you can use the datatable instance `checks` to get the status of the currently selected row.

```js
// Get the datatable instance object
var myDatatable = $('table.datatable').data('zui.datatable');

// Get selected data in the row
var checksStatus = myDatatable.checks;
```

`checks` value is an object containing the following attributes:

 - `checkedAll`: Whether all rows have been selected;
 - `checks`: An array contains all the selected row numbers;

## Data configuration

### Enhance tables

Enhance a regular datatable with full headers and data directly. DataTable can automatically get data from all headers and rows, and configure related options.

```html
<!-- Use Datatable to enhance the following native forms -->
<table class="table datatable">
  <!-- Define the header -->
  <thead>
    <tr>
      <th data-type="number" data-width="80">#</th>
      <th data-type="date">time</th>
      <th data-col-class="text-primary">name</th>
      ...
    </tr>
  </thead>
  <!-- Define table data. Every tr corresponds to one record. Cross-line content is not supported -->
  <tbody>
    <tr>...</tr>
    <tr>...</tr>
    ...
  </tbody>
</table>
```

```js
/* Initialize the datatable */
$('table.datatable').datatable(options);
```

<div class="alert alert-primary-inverse">
  <p>Use enhanced tables to display the data when the DataTable component is not available.</p>
</div>

### Initialize data in startup options

Set the startup option `data` to initialize the data.

```html
<!-- Use div to display the datatable -->
<div class="datatable" data-checkable="true" data-sortable="true"></div>
```

```js
/* Use options to initialize the data */
$('table.datatable').datatable({
    data: {
        cols: [
            {width: 80, text: '#', type: 'number', flex: false, colClass: 'text-center'},
            {width: 160, text: 'date', type: 'date', flex: false, sort: 'down'},
            {width: 80, text: 'name', type: 'string', flex: true, colClass: ''}
        ],
        rows: [
            {checked: false, data: [1, '2016-01-18 11:05:15', 'Name example 1']},
            {checked: false, data: [2, '2016-01-20 12:06:16', 'Name example 2']},
            // More data
        ]
    },
    // Other options
});
```

### Data Format

A complete data contains column definitions and row data. Class definition in JavaScript code is an array or a `tr` tag in `thead` of DOM. Row data in JavaScript is an arra or a `td` of `tbody` in DOM.

```js
{
    // Column definition
    cols: [
        {width: 80, text: '#', type: 'number', flex: false, colClass: 'text-center'},
        {width: 160, text: 'date', type: 'date', flex: false, sort: 'down'},
        {width: 80, text: 'name', type: 'string', flex: true, colClass: ''}
    ],

    // Row data
    rows: [
        {checked: false, data: [1, '2016-01-18 11:05:15', 'Name example 1']},
        {checked: false, data: [2, '2016-01-20 12:06:16', 'Name example 2']},
        // More data
    ]
}
```

Most of the non-data attributes defined by column definitions and row data can be defined in the original table as `data-*` in `th` and `tr`.

#### Column definition

The attributes of columns can be defined as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Attribute</th>
      <th style="width: 30%">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`text`</td>
      <td>String</td>
      <td>Define the name of this column to be displayed on the interface.</td>
    </tr>
    <tr>
      <td>`width`</td>
      <td>`80` | `'80px'` | `'80%'` | `'auto'`(default)</td>
      <td>Define the width of this column</td>
    </tr>
    <tr>
      <td>`flex`</td>
      <td>`true` | `false`(default)</td>
      <td>Define this column data to be displayed in the horizontally scrollable area of the datatable. Columns with no `flex=true` defined and is before this column will be fixed on the left. Columns with no `flex=true` defined and is after this column will be fixed to the right. `flex` of consecutive columns should be defined as`true`, which can be done via adding `flex-col` to `th` in DOM, equivalent to`flex=true`.</td>
    </tr>
    <tr>
      <td>`cssClass`</td>
      <td>String</td>
      <td>Define additional CSS CLASS value for this column in the datatable.</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>`string`(default) | `number` | `date`</td>
      <td>Define the type of data for this column.</td>
    </tr>
    <tr>
      <td>`sort`</td>
      <td>*   `true`(default): Support sorting;
*   `false`: Sorting is not supported;
*   `'down'`: Sort by descending;
*   `'up'`: Sort by ascending by default;</td>
      <td>Define if this column can be sorted when sorting is enabled.</td>
    </tr>
    <tr>
      <td>`ignore`</td>
      <td>`true` | `false`(default)</td>
      <td>Whether to ignore this column when creating a datatable. It will not be shown on the page.</td>
    </tr>
  </tbody>
</table>

#### Row data

The attributes of each row can be defined as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>`id`</td>
      <td>Globally unique string</td>
      <td>The unique number of the row. If not specified, it is generated in order.</td>
    </tr>
    <tr>
      <td>`checked`</td>
      <td>`true` | `false`(default)</td>
      <td>Whether the data of this row is selected at the beginning.</td>
    </tr>
    <tr>
      <td>`cssClass`</td>
      <td>String，default `''`</td>
      <td>Used to add CSS class to the row element `<tr>` generated.</td>
    </tr>
    <tr>
      <td>`css`</td>
      <td>String. Default: `''`</td>
      <td>Used to set `[style]` of `<tr>`. For custom row styles.</td>
    </tr>
    <tr>
      <td>`data`</td>
      <td>Array</td>
      <td>Display the data corresponding to each column in this row.</td>
    </tr>
  </thead>
</table>

### Update data

When the original data or original table on which the datatable is based changes, manually call `load()` method to update the datatable. `load(data)` method allows a parameter to be added to update the data.

`data` parameter can be a callback function. The first parameter of this callback function is the original data which can be modified directly in the callback function.

<div class="example">
  <div id="datatableChangeExample" class="datatable datatable-update-example" data-checkable="true" data-sortable="true"></div>
  <button class="btn btn-primary" type="button" id="datatableChangeBtn">Update rating</button>
</div>

```js
// Change the original table data
$('table.datatable-origin').find('td.data-for-change').text('Update this cell');

// When the original data changes
$('table.datatable').datatable('load');
```

```js
// Use data parameter to update data
$('table.datatable').datatable('load', {
    cols: [
        {width: 80, text: '#', type: 'number', flex: false, colClass: 'text-center'},
        {width: 160, text: 'date', type: 'date', flex: false, sort: 'down'},
        {width: 80, text: 'name', type: 'string', flex: true, colClass: ''}
    ],
    rows: [
        {checked: false, data: [1, '2016-01-18 11:09:36', 'New name example 1']},
        {checked: false, data: [2, '2016-01-22 12:06:16', 'New name example 2']},
        // More data
    ]}
});
```

```js
// data parameters can be used as a callback function to modify previous data
$('table.datatable').datatable('load', function(data) {
    // Modified Row 1 Column 3 data value 'New name example 1'
    data.rows[0].data[2] = 'New name example 1';
    // More modifications...
});
```

<script src="../dist/lib/datatable/zui.datatable.js"></script>
<link href="../dist/lib/datatable/zui.datatable.css" rel="stylesheet">
<script>
function onPageLoad() {
    return false;
}
function afterPageLoad() {
    var now = new Date();
    var start = now.getSeconds(),
        calendars = ['success', 'danger', 'important', 'warning', 'info', 'specail', 'primary'],
        rooms = ['A003', 'A004', 'A010', 'A143', 'B008', 'B098', 'B487', 'B340', 'Z000', 'Z431', 'Z018', 'Z864'],
        peoples = ['Altman', 'Walker', 'Geoscientist', 'Hulk', 'Catouse', 'Passerby C'],
        events = ['Eating', 'Drink water', 'chat', 'go to bed', 'Beat the wall', 'Self-talk', 'Moving the chair', 'Sing', 'Internet access', 'Sleepwalking', 'Watching the ceiling'],
        eventsTypes = ['happy', 'sad', ':]'],
        tools = ['table', 'chair', 'Water cup', 'gun', 'Follower'],
        descs = ['not done', 'This time failed', 'In vain', 'very satisfied', 'Prohibit recurrence', 'also', 'Unknown situation', 'Found unknown signs'];
    var dtDataGenerater = function(rowsCount) {
        var data = {
            cols: [
                {width: 100, text: '#', type: 'number', flex: false, colClass: 'text-center'},
                {sort: 'down', width: 160, text: 'time', type: 'date', flex: false, colClass: ''},
                {width: 80, text: 'room', type: 'string', flex: false, colClass: ''},
                {width: 100, text: 'character', type: 'string', flex: false, colClass: ''},
                {width: 'auto', text: 'event', type: 'string', flex: false, colClass: ''},
                {width: 100, text: 'Event type', type: 'string', flex: true, colClass: 'text-center'},
                {sort: false, width: 200, text: 'description', type: 'string', flex: true, colClass: ''},
                {width: 100, text: 'Related person', type: 'string', flex: true, colClass: ''},
                {width: 100, text: 'Related items', type: 'string', flex: true, colClass: ''},
                {width: 60, text: 'score', type: 'number', flex: false, colClass: 'text-center text-important'},
                {sort: false, width: 'auto', text: 'operating', type: 'string', flex: false, colClass: ''},
            ],
            rows: []
        };

        for (var i = 0; i < rowsCount; i++) {
            var row = {checked: Math.random() > 0.9, data: [
                start + i + 101000,
                now.format('yyyy-MM-dd hh:mm:ss'),
                rooms[Math.floor(Math.random()*rooms.length)],
                peoples[Math.floor(Math.random()*peoples.length)],
                events[Math.floor(Math.random()*events.length)],
                eventsTypes[Math.floor(Math.random()*eventsTypes.length)],
                descs[Math.floor(Math.random()*descs.length)],
                peoples[Math.floor(Math.random()*peoples.length)],
                tools[Math.floor(Math.random()*tools.length)],
                Math.floor(Math.random()*100)/10,
                "<a href='###'><i class='icon-ok-sign'></i></a> &nbsp; <a href='###' class='text-danger'><i class='icon-trash'></i></a> "
            ]};
            data.rows.push(row);
            now = new Date(now.getTime() - (Math.random()*1000*60*60));
        };

        return data;
    };

    $('#pageContent .datatable').each(function() {
        var $this = $(this);
        var data = dtDataGenerater($this.data('rows') || 5);
        if($this.attr('id') === 'datatableChangeExample') {
            $this.data('origin-data', data);
        }
        $this.datatable({fixedLeftWidth: '60%', fixedRightWidth: '15%', data: data, scrollContainer: '#pageBody', fixedHeaderOffset: 60});
    });

    var $datatableChangeExample = $('#datatableChangeExample');
    $('#datatableChangeBtn').click(function() {
        var data = $datatableChangeExample.data('origin-data');
        if(data) {
            $.each(data.rows, function(rowIndex, row) {
                row.data[9] = Math.floor(Math.random()*100)/10;
            });
            $datatableChangeExample.datatable('load', data);
        }
    });

    $.doc.stopPageLoading();
}
</script>
