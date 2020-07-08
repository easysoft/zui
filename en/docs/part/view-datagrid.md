# Datagrid

Datagrid is a new datagrid view component. Compared with [Datatable](#view/datatable), it provides more powerful features, such as remote data display, sort, search and display of massive data.

## Comprehensive examples

### Introduce resources

Datagrid is an independent component, so you need to introduce lib/ resources from local or CDN.

```html
<link href="lib/datagrid/zui.datagrid.min.css" rel="stylesheet">
<script src="lib/datagrid/zui.datagrid.min.js"></script>
```

<div class="example">
  <div id="datagridExample" class="datagrid datagrid-borderless">
    <header class="clearfix">
      <div class="input-control search-box search-box-circle has-icon-left has-icon-right pull-right" id="searchboxExample1">
        <input id="inputSearchExample1" type="search" class="form-control search-input" placeholder="search for">
        <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
      </div>
      <h3>Comprehensive demonstration of datagrid functions</h3>
    </header>
    <div class="datagrid-container"></div>
    <div class="pager"></div>
  </div>
</div>

```html
<div id="datagridExample" class="datagrid"></div>
```

```js
$('#datagridExample').datagrid({
    dataSource: [...],
    ...
});
```

If all options can be set by `data-*`, use `data-ride="datagrid"` to automatically initialize after the page is loaded.

```html
<div id="datagridExample" class="datagrid" data-ride="datagrid"></div>
```

## Datasource

Datasource is used to define the format and acquisition method of the data grid. Datasource uses `dataSource` to configure. `dataSource` value is an object, and its available properties are:

* `cols`: An array of column definition objects. It is used to define the columns to be displayed in the datasource. The order of the objects in the array is the order in which the columns are arranged. Column object definition can be refrred to below;
* `array`: Optional. When using static arrays to define data, use this property to define all data;
* `remote`: Optional. When loading data from a remote, use this property to specify the address of the remote request. Or use this property to specify a function to dynamically generate ajax parameter object used in each request;
* `remoteConverter`: Optional. When loading data from a remote, use this property to convert remote content. Ensure that the remote data conforms to the format required by the datagrid. If remote data has returned data that meets the requirements in Json, you do not need this property for conversion;
* `getByIndex`: Optional. When using dynamic data, use this property to specify a function to dynamically return data items;
* `cache`: If set as `true`, enable data query caching. If set as `false`, do not enable data query caching. The default is `true`;
* `cacheSize`: Set the maximum number of caches when data query caching is enabled. The default is `1`.

### Data item definition

Data items use a simple JavaScript object to represent. All properties of column definition should be included in the data item object(columns that need to be displayed on the interface), and `id` attribute for line number is required. If `id` is not specified, use the row number as the ID.

### Data source column definition

The columns to be displayed on the datagrid are set by the column defined array. An array of column defined objects are used to define the columns to display in the data source. The order of the objects in the array is the order in which the columns are arranged. Each column defined object contains the following properties:

* `name`: The name of the data property to be displayed in the column;
* `label`: Optional. Column header text. If this property is not defined, `name` will be used as header text;
* `html`: The default is `false`. If set as `true`, use the content as html code and update it to the page when rendering columns;
* `style`: Optional. The style to be added to th elements of the cell in this column(use jQuery CSS Style definition object rule);
* `width`: Column width. If set as less than `1`, use this value to calculate the weight of the final adaptive width;
* `minWidth`:Column minimum width. When adaptive is enabled, the final calculated width will not be less than this value;
* `className`: Optional. The class name to be added to all cell elements in this column;
* `checkbox`: The default is `false`. If set as `true`, display a check box in cells of this column;
* `valueType`: The column value type. Default: `string`;
* `valueOperator`: Optional. Value converter in this column;
* `sort`: Whether to enable sorting for the current column. The default is `true`. If set as `false`, it cannot sort in this column even you set `sortable` as `true`;
* `sortFunc`: Optional. Comparison function when using this column to sort.

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols:[
            {name: 'time', label: 'time', width: 132},
            {name: 'hero', label: 'hero', width: 134},
            {name: 'action', label: 'action', width: 109},
            {name: 'target', label: 'target', width: 109},
            {name: 'desc', label: 'description', width: 287}
        ],
        // ... Data source Other attributes
    },
    // ... Other initialization options
});
```

### Static data source

The easiest way to define a data source is to give an array of static objects.

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols:[
            {name: 'time', label: 'time', width: 132},
            {name: 'hero', label: 'hero', width: 134},
            {name: 'action', label: 'action', width: 109},
            {name: 'target', label: 'target', width: 109},
            {name: 'desc', label: 'description', width: 287}
        ],
        array:[
            {time: '00:11:12', hero:'Phantom Assassin', action: 'Killed', target: 'Axe king', desc: 'Phantom Assassin killed the Axe.'},
            {time: '00:13:22', hero:'Phantom Assassin', action: 'Bought', target: 'Hidden knife', desc: 'Phantom Assassin bought a hidden knife.'},
            {time: '00:19:36', hero:'Axe king', action: 'Bought', target: 'Black king', desc: 'Axe King bought the Black King.'},
            {time: '00:21:43', hero:'Limaru', action: 'Bought', target: 'Hidden knife', desc: 'Limao bought a hidden knife.'}
        ]
    },
    // ... Other initialization options
});
```

### Remote data source

Datagrid uses Ajax to get remote data as data source. Set data source objects `remote` and `remoteConverter` to configure remote data sources.

#### Remote request parameters

Remote request parameters use `remote` to configure. If it is a static address, use the remote connection address as `remote` value. If dynamic request configuration is required based on information such as the currently requested page number and search text, set `remote` as a callback function to dynamically return the configuration. The parameters of `remote` configuration callback function are defined as follows:

* `params`: Requested parameter information object;
* `datagrid`: Data grid instance object.

`params` object has the following properties:

* `page`: Page number displayer;
* `recPerPage`: The number of data displayed per page;
* `search`: The text used to retrieve data;
* `sortBy`: The column name by which the current column is sorted;
* `order `: Sorting order. `'asc'` and `'desc'`.

Remote request parameter object can be used all options in [jQuery.ajax](https://github.com/easysoft/zui/commits/master).

#### Remote data format

Remote data must return one JSON object which contains the following properties:

```js
// Original data object
{
    // Data request result(required). If the value is 'succes', 'ok'. or, the request is successful.
    "result": "success",

    // Remote data content(required).
    "data": [
        // ... Original data object array
    ],

    // User interface prompt message. When the request fails, use this property to return text displayed on the user interface.
    "message": "",

    // Paging information object for remote data(required).
    "pager": {
        "page": 1,           // Page number corresponding to the current data
        "recTotal": 1001,    // Total number of data
        "recPerPage": 10,    // Number of data per page
    }
}
```

When the content returned by the remote request does not follow the format above, use `remoteConverter` to specify a callback function to convert remote data to a format that meets the requirements. `remoteConverter` callback function has the following parameters:

* `responseData`: Text content returned by the remote request;
* `textStatus`: Original request status;
* `jqXHR`: jQuery of xhr object;
* `datagrid`: Data grid instance object.

<div class="example">
  <div id="remoteDataGridExample" class="datagrid"></div>
</div>

```html
<div id="remoteDataGridExample" class="datagrid"></div>
```

```js
$('#remoteDataGridExample').datagrid({
    dataSource: {
        cols:[
            {name: 'time', label: 'time', width: 132},
            {name: 'hero', label: 'hero', width: 134},
            {name: 'action', label: 'action', width: 109},
            {name: 'target', label: 'target', width: 109},
            {name: 'desc', label: 'description', width: 287}
        ],
        remote: function(params) {
            return {
                // Original request address
                url: 'docs/partial/remote-data.json',
                // Request type
                type: 'GET',
                // type of data
                dataType: 'json'
            };
        }
    }
});
```

### Dynamic data

Dynamic data use a function to generate data. Data is obtained only when it is required to be displayed. In this way, hundreds of millions of massive data can be displayed.

To enable dynamic data source, set a callback function for `getByIndex` of a data source object(`dataSource` Option). Return the object corresponding to the index in the callback function. The callback function parameters are defined as follows:

* `index`: The data row index to get;
* `params`: Data retrieval parameter.

`params` object has the following properties:

* `page`: Page number displayed;
* `recPerPage`: The number of data displayed per page;
* `search`: The text currently used to retrieve data;
* `sortBy`: The column name by which it is sorted;
* `order `: Sort order, `'asc'` and `'desc'`.

<div class="alert alert-warning">
  <h4>Dynamic data source performance tips</h4>
  <p>If there is more data to be displayed at one time, sort, search, select in a row, etc. shoud be turned off due to limited computer performance. Otherwise it may cause the interface unresponsive.</p>
</div>

<div class="alert alert-primary">
  <h4>Dynamic data source usage restrictions</h4>
  <p>When using a dynamic data source, paging is not supported.</p>
</div>

<div class="example">
  <div id="dynamicDataGridExample" class="datagrid">
    <header>
      <h1>Dynamic data</h1>
      <p class="small">Use dynamic data sources to display hundreds of millions of massive data.</p>
    </header>
  </div>
</div>

```html
<div id="dynamicDataGridExample" class="datagrid"></div>
```

```js
$('#dynamicDataGridExample').datagrid({
    dataSource: {
        getByIndex: function(index, param) {
            return {
                // ...
            }
        }
    },
    checkable: false,    // Disable checkable
    sortable: false,     // Disable sortable
})；
```

### Use a native table to initialize

Like the data table in older version, datagrid supports initialization using a native data table.

<div class="example">
  <table class="table table-bordered" id="tableDataGridExample">
    <thead>
      <tr>
        <th>time</th>
        <th>hero</th>
        <th>action</th>
        <th>target</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>00:11:12</td>
        <td>Phantom Assassin</td>
        <td>Killed</td>
        <td>Axe king</td>
        <td>Phantom Assassin killed the Axe.</td>
      </tr>
      <tr>
        <td>00:13:22</td>
        <td>Phantom Assassin</td>
        <td>Bought</td>
        <td>Hidden knife</td>
        <td>Phantom Assassin bought a hidden knife.</td>
      </tr>
      <tr>
        <td>00:19:36</td>
        <td>Axe king</td>
        <td>Bought</td>
        <td>Black king</td>
        <td>Axe King bought the Black King.</td>
      </tr>
      <tr>
        <td>00:21:43</td>
        <td>Limaru</td>
        <td>Bought</td>
        <td>Hidden knife</td>
        <td>Limao bought a hidden knife.</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-bordered" id="tableDataGridExample">
  <thead>
    <tr>
      <th>time</th>
      <th>hero</th>
      <th>action</th>
      <th>target</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00:11:12</td>
      <td>Phantom Assassin</td>
      <td>Kill</td>
      <td>Axe king</td>
      <td>Phantom Assassin killed the Axe.</td>
    </tr>
    ...
  </tbody>
</table>
```

```js
$('#tableDataGridExample').datagrid();
```

## Fixed rows and columns

Datagrid supports fixed rows and columns to one side of the grid. When the view scrolls, fixed rows and columns remain in their original position. Fixed row and column can be set in `states`. For `states`, set the following properties to enable it:

* `fixedLeftUntil`: The end value of the fixed column index on the left. When the column index is less than or equal to the value, the column is fixed to the left side of the table. The default is `0`, which means the column with the left row number is fixed.
* `fixedRightFrom`: The starting value of the fixed column index on the right. When the column index is greater than or equal to the value, the column is fixed to the right of the table. The default is `-1`, which means not to fix on the right of the column;
* `fixedTopUntil`: The end value of the fixed column index on the top. Fix the column to the top, if the column index is less than or equal to the value. The default is `0`, which means to fix the column of the title;
* `fixedBottomFrom`: The starting value of the bottom fixed column index. Fix the column below the table, if the column index is greater than or equal to the value. The default is `-1`, which means not to fix it below the column.

<div class="example">
  <div id="datagridFixedExample" class="datagrid">
    <header class="clearfix">
      <h3>Datagird fixed row and column demo <small>Rows and columns can be fixed to the top, below, left, and right.</small></h3>
    </header>
    <div class="datagrid-container"></div>
  </div>
</div>

```html
<div id="datagridFixedExample" class="datagrid"></div>
```

```js
$('#datagridFixedExample').datagrid({
    dataSource: {...}
    states: {
        pager: {page: 1, recPerPage: 100},

        fixedLeftUntil: 0,    // Fix the first column on the left
        fixedRightFrom: 12,   // Fix colums from the 12th column to the right
        fixedTopUntil: 0,     // Fixed the first row(header)
        fixedBottomFrom: 100, // Fix to the bottom from the 100th row
    }
});
```

## Sort

Datagrid supports sorting by any column and the customizec sorting comparison function. To enable the sorting feature you will need to set `sortable` as `true`. When sorting is enabled, a sort icon will be displayed in the cell of the header(first row). Click the cells of the header and sort by the column. Sorting order will be switched on each click. Switching order is ascending, descending, and not sorting. If you need to disable sorting orders, set `sort` as `false`.

Default sorting algorithm used JavaScript built-in default comparison algorithm. If you need a custom sort function, set a callback function in `sortFunc`. The callback function parameters are defined as follows:

* `value1`: The first value to compare, `item1[sortBy]`;
* `value2`: The second value to compare, `item2[sortBy]`;
* `item1`: The first data item to compare;
* `item2`: The second data item to compare;
* `sortBy`: The column name currently used for sorting;
* `datagrid`: Current data table instance object.

When the first value is greater than the second value, the sort function should return a value greater than `0`. When the first value is less than the second one. the sort function should return a value less than `0`. Return `0` if the two values are the same.

If you only need to apply a custom sort function for a separate column, set `sortFunc` for this column. The definitions of column sort function parameter and the returned value should be the same as `sortFunc`.

<div class="alert alert-warning">
  <h4>Sort limitation</h4>
  <p>The built-in sorting feature only supports sorting local static data sources. If it is a remote data source, it will send sort parameters to the remote server and sort and return the sorted data on the server. The sorting of dynamic data sources also needs to be handled manually. You can apply sorting rules based on the callback function parameters.</p>
</div>

<div class="example">
  <div id="datagridSortExample" class="datagrid">
    <header class="clearfix">
      <h3>Datagrid sorting function demonstration <small>Click on the header to sort</small></h3>
    </header>
    <div class="datagrid-container"></div>
  </div>
</div>

```html
<div id="datagridSortExample" class="datagrid"></div>
```

```js
$('#datagridSortExample').datagrid({
    dataSource: {...},
    sortable: true
});
```

An instance method `sortBy(sortBy, order)` of datagrid can be used to manually sort columns. Its parameters are defined as follows:

* `sortBy`: The column name currently used for sorting;
* `order`: Sort order. Optional values are `asc` and `desc`.

```js
// Get a datagrid instance
var myDataGrid = $('#datagridSortExample').data('zui.datagrid');

// Descending sort by `name`
myDataGrid.sortBy('name', 'desc');
```

Use the following attributes of `states` to set the order in the initial state:

* `sortBy`：The column name currently used for sorting;
* `order`：Sort order. Optional values are `asc` and `desc`.

## Pagination

Datagrid supports data pagination for static data sources and remote data source. It can work with [Pager](#javascript/pagerjs). Set `pager` attributes of `states`. `pager` attribute is an object and has the following attributes:

* `page`: Page number. The default is`0`, which means not to enable pager.
* `recPerPage`: The number of records per page. The default is `10`.

Pagination works with [Pager](#javascript/pagerjs). Embed `.pager` elements in `.datagrid` to bind the pagination component automatically.

<div class="example">
  <div id="datagridPageExample" class="datagrid">
    <header class="clearfix">
      <h3>Datagrid pagination function demonstration</h3>
    </header>
    <div class="datagrid-container"></div>
    <div class="pager"></div>
  </div>
</div>

```html
<div id="datagridPageExample" class="datagrid">
  <div class="datagrid-container"></div>
  <div class="pager"></div>
</div>
```

```js
$('#datagridPageExample').datagrid({
    dataSource: {...},
    states: {
        pager: {page: 1, recPerPage: 20}
    }
});
```

An instance method `gotoPage(page)` of datagrid can be used to do manual pagination, and its parameters are defined as follows:

* `page`: The page number to switch.

```js
// Get a datagrid instance
var myDataGrid = $('#datagridPageExample').data('zui.datagrid');

// Go to the second page
myDataGrid.gotoPage(2);
```

<div class="alert alert-primary">
  <h4>No scrolling any more</h4>
  <p>When pagination is enabled, set `'page'` for `height`, then automatically adjust the height of the datagrid to the height of all the rows on the current page. Display all data of the current page without using vertical scrollbars.</p>
</div>

## Search

Datagrid supports search in static data sources and original data source data. When using a remote data source, it is done on the server. The server should filter the data based on the search string parameters. If it is static data, it is done in the browser. The default search allows search strings to contain multiple keywords by space and to automatically sort it according to the critical process which is a higher degree of criticism displayed in front of it(automatic search results are only valid when the user is not sorting).

When doing a browser-side search on a static data source, specify a search callback function in `searchFunc`to customize how to filter data. The function parameters are defined as follows:

* `item`: Whether data item object meets the requirements;
* `searchKeyArr`: Search keyword array;
* `index`: The index of the current item in the data source;
* `params`: Other search conditions;
* `datagrid`: Datagrid instance object.

`params` is an object which has the following attributes:

* `page`: Page number displayed;
* `recPerPage`: The number of data displayed per page;
* `search`: The text currently used to search for data;
* `sortBy`: The column name by which the column is sort;
* `order `: Sort order, `'asc'` and `'desc'`.

Embed [Search box component](#javascript/searchbox)  in `.datagrid`, then the datagrid will automatically listen the search box for change events and automatically updates the results.

<div class="example">
  <div id="datagridSearchExample" class="datagrid">
    <div class="input-control search-box search-box-circle has-icon-left has-icon-right" id="searchboxExample2" style="margin-bottom: 10px; max-width: 300px">
      <input id="inputSearchExample2" type="search" class="form-control search-input" placeholder="search for">
      <label for="inputSearchExample2" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
      <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
    </div>
    <div class="datagrid-container"></div>
  </div>
</div>

```html
<div id="datagridSearchExample" class="datagrid">
  <div class="input-control search-box search-box-circle has-icon-left has-icon-right" id="searchboxExample2" style="margin-bottom: 10px; max-width: 300px">
    <input id="inputSearchExample2" type="search" class="form-control search-input" placeholder="search for">
    <label for="inputSearchExample2" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
    <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
  </div>
  <div class="datagrid-container"></div>
</div>
```

```js
$('#datagridSearchExample').datagrid({
    // ...
});
```

An instance method `search(searchStr)` of a datagrid can be used to manually set search keywords, and its parameters are defined as follows:

* `searchStr`: A string for searching keywords. Separate multiple keywords by spaces.

```js
// Get a datagrid instance
var myDataGrid = $('#datagridPageExample').data('zui.datagrid');

// Search items including both 'data' with 'form'
myDataGrid.search('data form');
```

Use `search` in `states` to set initial search keyword strings.

## Row selection

The datagrid allows the user to select and mark a row by clicking it or dragging it on the interface. To enable row selection, set `checkable` as `true`. When row selection is enabled and [Selectable plugin](#javascript/selectable) has been imported to the page, the user can drag and drop multiple rows on the interface. Set `selectable` as `false` to disable this feature. `selectable` can also accept an object as the initialization parameter which can be used to customize the interaction of drag-and-drop selectable.

When row selection is enabled and the column of serial number is displayed, a checkbox will be added to the column of the serial number for users to check the row and check the selection status. If you do not need to display a check box, set `checkbox` of the serial number column as `false`. If you need a checkbox to be displayed on other columns, set `checkbox` as `true` on the corresponding column definition object.

When row selection is enabled, the user can change the selected state of the row by clicking anywhere of the page. If you don't need this feature, set `checkByClickRow` as `false`. In this way, only when the user clicks on the check box, the selected state will be changed.

<div class="example">
  <div id="datagridCheckableExample" class="datagrid">
    <div class="datagrid-container"></div>
  </div>
</div>

```html
<div id="datagridCheckableExample" class="datagrid">
  <div class="datagrid-container"></div>
</div>
```

```js
$('#datagridCheckableExample').datagrid({
    dataSource: {...},
    checkable: true,
    checkByClickRow: true
});
```

Use `getCheckItems()` to get the selected row data item.

```js
// Get a datagrid instance
var myDataGrid = $('#datagridPageExample').data('zui.datagrid');

// Get the selected row data item
var selectedItems = myDataGrid.getCheckItems();
```

Use `isRowChecked(rowId)` to check if the specified row is selected. `rowId` is used to check the row number.

```js
// Get a datagrid instance
var myDataGrid = $('#datagridPageExample').data('zui.datagrid');

// Check whether the 2nd row is selected
var isSelect = myDataGrid.isRowChecked(2);
```

Use `checkRow(rowIndex, checked)` to specify the state of row selection status, and its parameters are defined as follows:

* `rowIndex`: The row number to be set;
* `checked`：If set as `true`, it is selected. If `false`, it is not selected. Or switch to the other state according to the current state.

```js
// Get a datagrid instance
var myDataGrid = $('#datagridPageExample').data('zui.datagrid');

// Set the 2nd row as selected
var isSelect = myDataGrid.checkRow(2, true);
```

Use `states` and its `selections` attribute to set the row selection at the initial state.

```js
$('#myDataGrid').datagrid({
    states: {
        // Set Row 1 and Row 3 behaviors as selected at the initial state
        selections: {
            '1': true,
            '3': true,
        }
    }
})
```

## Cross-row and cross-column cells

Datagrid supports cells that cross rows and columns. Use `configs` to set it. For example, set the first cell of thefirst row horizontally cross two cells and set the third cell of the second row vertically cross three cells. `configs` settings are as follows:

<div class="example">
  <div id="datagridSpanExample" class="datagrid">
    <div class="datagrid-container"></div>
  </div>
</div>

```html
<div id="datagridSpanExample" class="datagrid">
  <div class="datagrid-container"></div>
</div>
```

```js
$('#datagridSpanExample').datagrid({
    configs: {
        R1C1: {colspan: 2},
        R2C3: {rowspan: 3}
    },
    // ...
});
```

## Value converter

Value converter is an object and its attributes are as follows. It is used to convert values when reading values and setting values. The following values can be embeded in the value converter:

* `getter`：Conversion function. It is used to convert to values displayed on the interface;
* `setter`：Conversion function. It is used to update user edited values to the data source(not supported yet).

Value converter function `getter` has the following parameters:

* `value`: Original value to be converted;
* `cell`: Current cell information object;
* `datagrid`: Current datagrid instance object.

<div class="example">
  <div id="datagridValueOperatorExample" class="datagrid">
    <header class="clearfix">
      <h3>Datagrid value converter example <small>Time is converted by a value converter</small></h3>
    </header>
    <div class="datagrid-container"></div>
  </div>
</div>

The value converter can be set up as follows.

Set `valueOperator` and it affects specific types of data. For example, converts all time stamp to Chinese date format.

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols: [
            {name: 'time', valueType: 'date', label: 'time'},
            // ... Other column definitions
        ]
    },
    valueOperator: {
        // date value converter will affect all valueType as `date` columns
        date: {
            getter: function(dataValue, cell, dataGrid) {
                return new Date(dataValue).toLocaleString();
            }
        }
    }
})
```

<div class="alert alert-primary">
  <h4>Built-in date value converter</h4>
  <p>Datagrid has built-in date type converter(`valueType` as `date`). Use `defaultDateFormater` to set the date format to be converted.</p>
</div>

Value converters can also be set via column definition parameters. The above example can be written as:

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols: [
            {
                name: 'time',
                label: 'time',
                // Value converter only works on the current column
                valueOperator: {
                    getter: function(dataValue, cell, dataGrid) {
                        return new Date(dataValue).toLocaleString();
                    }
                }
            },
            // ... Other column definitions
        ]
    }
});
```

Value converter can also set `configs` for a cell or a row separately. For example, only apply date value converter for the second row of the first column.

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols: [
            {name: 'time', valueType: 'date', label: 'time'},
            // ... Other column definitions
        ]
    },
    configs: {
        R2C1: {
            // Value converter only works on the second row of the first column
            valueOperator: {
                getter: function(dataValue, cell, dataGrid) {
                    return new Date(dataValue).toLocaleString();
                }
            }
        }
    }

})
```

## Adaptive column width

By default, the following widths are automatically adjusted. Adjust the width of other columns based on the minimum column width. Make sure the column width fills the horizontal space. If the horizontal space is not enough, the column can be scrolled horizontally. If you don't want this feature, set `responsive` as `false` and manually set the width for each column in the column definition.

When the adaptive column width feature is enabled，All columns that are not specified width will evenly divide the remaining horizontal space. You can still set a weight for the column widt, so columns with more weight will take more space. Use `width` to set the weight and the value should be less than `1`.

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols:[
            {name: 'time', label: 'time', width: 132},
            {name: 'hero', label: 'hero', width: 134},
            {name: 'action', label: 'action', width: 109},
            // Set Column target adaptive and take 1/4 of the remaining column width.
            {name: 'target', label: 'aims', width: 0.25},

            // Set Column description adaptive and take 1/4 of the remaining column width.
            {name: 'desc', label: 'description', width: 0.75}
        ],
    }
});
```

## Customization

Use `configs` to customize a row, a column, or a cell. `configs` is an object，and its key is the identifier of the row, column or cell with the corresponding value is the configuration item.

The configuration identifier format is usually `R row number C column number`, and it can be in the form belwo:

* `#10`: the row of a data item which ID is `10`;
* `R0`: Row 0, Header line, `#header`;
* `R1`: Row 1;
* `C0`: Column 0, an ordinal number;
* `C2`: Column 2;
* `R1C1`: Cell in Row and Column 1;
* `#11C2`: Cell which the column of a data item ID is `10` in Column 2.

Configuration items support the following attributes:

* `html`: The default is `false`. If set as `true`,  use the content as the html source code and update it to the page when rendering the cell;
* `style`: Optional. The style to be added to the matched cell element(use jQuery CSS style to define object rules);
* `className`: Optional. The class name to be added to the matched cell element.

The following example is to add `.text-right` to right-align the text in Column 2 and change the text color and background color, and to add underlines to the first cell in Column 1;

<div class="example">
  <div id="datagridConfigsExample" class="datagrid"></div>
</div>

```html
<div id="datagridConfigsExample" class="datagrid"></div>
```

```js
$('#datagridConfigsExample').datagrid({
    dataSource: {...},
    configs: {
        C2: {
            className: 'text-right',
            style: {
                color: '#00b8d4',
                backgroundColor: '#e0f7fa'
            }
        },
        R1C1: {
            style: {textDecoration: 'underline'}
        }
    }
})
```

`configs` can also be a callback function which contains a parameter `selector` working as the identifier of the current configuration item to be obtained.

```js
$('#myDataGrid').datagrid({
    dataSource: {...},
    configs: function(selector) {
        if (selector === 'R1C1') {
            return {color: 'red'};
        }
    }
});
```

## Custom template

Provide an empty data table `.datagrid` to start initializeation. It supports to add contents to `.datagrid`. By default, rendering container element `.datagrid-container` in a datagrid is automatically added to the end of `.datagrid`. If you need control the position of `.datagrid-container`, manually add an empty `.datagrid-container`.

```html
<div class="datagrid">
  <h1>title</h1>
  <div class="search-box">...search bar</div>
  <div class="datagrid-container">...Datagrid displayed area</div>
  <div>Other contents</div>
</div>
```

## Appearance options

### Remove vertical border

Use `.datagrid-borderless` to remove the vertical border.

<div class="example">
  <div id="datagridBorderlessExample" class="datagrid datagrid-borderless"></div>
</div>

```html
<div id="datagridBorderlessExample" class="datagrid datagrid-borderless"></div>
```

### Striped rows

<div class="example">
  <div id="datagridStripedExample" class="datagrid datagrid-striped"></div>
</div>

```html
<div id="datagridStripedExample" class="datagrid datagrid-striped"></div>
```

## Options

All available options are:

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 140px">Option</th>
      <th style="width: 150px">Name</th>
      <th style="width: 150px">value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>width</code></td>
      <td>Width of displayed area</td>
      <td>Default:`'auto'`</td>
      <td>CSS width style is supported.</td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>Height of displayed area</td>
      <td>Default: `400`</td>
      <td>When pager is enabled，If set as `'page'`, set the height of displayed area as the sum of the heights of all the rows on the page.</td>
    </tr>
    <tr>
      <td><code>dataSource</code></td>
      <td>Data source</td>
      <td>Default:`null`</td>
      <td>See "Data source" related information above.</td>
    </tr>
    <tr>
      <td><code>configs</code></td>
      <td>Personalized configuration</td>
      <td>Default: `null`</td>
      <td>See "Customization" and other related content above.</td>
    </tr>
    <tr>
      <td><code>states</code></td>
      <td>Initialization state</td>
      <td>Default: `null`</td>
      <td>
        <p>The following attributes are supported:</p>
        <ul>
          <li>`pager`: Pager information in the initial state. See “Paginatio” above;</li>
          <li>`sortBy`: Initial order. See “Sorable”above;</li>
          <li>`order`: Sort order in initial state. See “Sorable” above;</li>
          <li>`selections`: Row selection state in initial state. See “Row selection above;</li>
          <li>`search`: Search keywords in the initial state. See “earch”content above;</li>
          <li>`fixedLeftUntil`: Maximum value of fixed column on the left. See “Fixed row and colmn” above;</li>
          <li>`fixedTopUntil`: Maximum value of fixed row on the top. See “Fixed row and column above;</li>
          <li>`fixedRightFrom`: Minimum value of fixed column on the right. See “Fixed row and column above;</li>
          <li>`fixedBottomFrom`: Minimum value of fixed at the bottom. See “Fixed row and column above;</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>borderWidth</code></td>
      <td>Width of cell border</td>
      <td>Default:`1`</td>
      <td>If set as `0`, cell borders are not displayed.</td>
    </tr>
    <tr>
      <td><code>rowDefaultHeight</code></td>
      <td>Row height</td>
      <td>Default: `36`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>colAutoDefaultWidth</code></td>
      <td>Adaptive column default width</td>
      <td>Default:`80`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>colAutoMinWidth</code></td>
      <td>Adaptive column minimum width</td>
      <td>Default: `50`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>showHeader</code></td>
      <td>Whether to display the header</td>
      <td>Default: `true`</td>
      <td>If set as `false`, the header is not displayed. It is the row with `0` as its index. </td>
    </tr>
    <tr>
      <td><code>headerHeight</code></td>
      <td>Header row height</td>
      <td>Default: `36`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>showRowIndex</code></td>
      <td>Whether to display the row ID</td>
      <td>Default: `true`</td>
      <td>If set as `false`, the row ID is not displayed. It is the column with `0` as its index.</td>
    </tr>
    <tr>
      <td><code>rowIndexWidth</code></td>
      <td>Row index width</td>
      <td>Default: `'auto'`</td>
      <td>Automatically calculate row index width</td>
    </tr>
    <tr>
      <td><code>hoverRow</code></td>
      <td>Whether to display the row hovering</td>
      <td>Default: `true`</td>
      <td>After it is enabled, hovering the row highlights the row.</td>
    </tr>
    <tr>
      <td><code>hoverCol</code></td>
      <td>Whether to display column hovering</td>
      <td>Default: `true`</td>
      <td>After it is enabled, hovering the column header highlights the corresponding column.</td>
    </tr>
    <tr>
      <td><code>hoverCell</code></td>
      <td>Whether to display cell hovering</td>
      <td>Default: `false`</td>
      <td>After it is enabled, hovering a cell highlights the cell.</td>
    </tr>
    <tr>
      <td><code>responsive</code></td>
      <td>Whether to enable adaptive column width</td>
      <td>Default: `true`</td>
      <td>See "Adaptive column width" above.</td>
    </tr>
    <tr>
      <td><code>valueOperator</code></td>
      <td>Type value converter</td>
      <td>Default: `null`</td>
      <td>See "Value converter" above.</td>
    </tr>
    <tr>
      <td><code>defaultDateFormater</code></td>
      <td>Default date conversion format</td>
      <td>Default: `yyyy-MM-dd hh:mm`</td>
      <td>See "Value converter" above.</td>
    </tr>
    <tr>
      <td><code>partialRendering</code></td>
      <td>Whether to enable local rendering</td>
      <td>Default: `'auto'`</td>
      <td>When pager is enabled, this option is automatically set as `true`. Otherwise it is enabled by default.</td>
    </tr>
    <tr>
      <td><code>scrollDelay</code></td>
      <td>Scrolling event response delay</td>
      <td>Default: `0`</td>
      <td>Millisecond. Increase this value to improve performance, but the scrolling effect might be delayed.</td>
    </tr>
    <tr>
      <td><code>renderDelay</code></td>
      <td>Rendering delay</td>
      <td>Default: `100`</td>
      <td>Millisecond. Increase this value to improve performance, but it might be a slower update.</td>
    </tr>
    <tr>
      <td><code>searchFunc</code></td>
      <td>Search filter function</td>
      <td>Default: `null`</td>
      <td>See "Search" above.</td>
    </tr>
    <tr>
      <td><code>sortFunc</code></td>
      <td>Sorting comparison function</td>
      <td>Default: `null`</td>
      <td>See "Sortable" above.</td>
    </tr>
    <tr>
      <td><code>sortable</code></td>
      <td>Whether to enable sorting</td>
      <td>Default: `false`</td>
      <td>When set as `true`, click on the header to sort. See "Sortable" above.</td>
    </tr>
    <tr>
      <td><code>checkable</code></td>
      <td>Whether to enable row selection</td>
      <td>Default: `false`</td>
      <td>When set as `true`, users are allowed to select the row. See "Row selection" above.</td>
    </tr>
    <tr>
      <td><code>checkByClickRow</code></td>
      <td>Whether to allow users to click on any row to select it</td>
      <td>Default: `true`</td>
      <td>When `checkable` is set as `true`, it works. See "Row selection" above.</td>
    </tr>
    <tr>
      <td><code>selectable</code></td>
      <td>Whether to allow the user to dragging area to select the row</td>
      <td>Default: `true`</td>
      <td>when `checkable` is set as `true`, it works. See "Row selection" above.</td>
    </tr>
    <tr>
      <td><code>cellCreator</code></td>
      <td>Cell generator</td>
      <td>Default: `null`</td>
      <td>
        <p>You can set a callback function to create a cell element. Callback function parameters are:</p>
        <ul>
          <li>`cell`: The cell object to be created;</li>
          <li>`datagrid`: Datagrid object instance.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>cellFormator</code></td>
      <td>Cell formatting function</td>
      <td>Default: `null`</td>
      <td>
        <p>You can set a callback function to format a cell element. Callback function parameters include:</p>
        <ul>
          <li>`$cell`: The cell element to be formatted;</li>
          <li>`cell`: Current cell object;</li>
          <li>`datagrid`: Datagrid object instance.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>rowCreator</code></td>
      <td>Row generator</td>
      <td>Default: `null`</td>
      <td>
        <p>You can set a callback function to create a row element. Callback function parameters include:</p>
        <ul>
          <li>`rowIndex`: The row number to be created;</li>
          <li>`datagrid`: Data table object instance.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>showMessage</code></td>
      <td>Whether to display a message when an error occurs</td>
      <td>Default: `true`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>mouseWheelFactor</code></td>
      <td>Scrolling speed when scrolling the mouse wheel</td>
      <td>Default: `1`</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Attributes and methods

### `setPager(page, recTotal, recPerPage)`

Set pager information. The parameters are defined as follows:

* `page`: Current page number to be set. If its value is `-1`, it is not set;
* `recTotal`: Total number of records. If its value is `-1`, it is not;
* `recPerPage`: The number of records per page. If its value is `-1`, it is not set.

`setPager(pager)` is the other parameter for this method. `pager` is an object and its attributes are parameters mentioned above.

```js
// Get a datagrid instance
var myDataGrid = $('#myDataGrid').data('zui.datagrid');

// Set the second page
myDataGrid.setPager(2);
```

### `gotoPage(page)`

Set current page number, and render the interface again. Its parameters are defined as follows:

* `page`：Current page number to be set;

```js
// Get a datagrid instance
var myDataGrid = $('#myDataGrid').data('zui.datagrid');

// Set the second page
myDataGrid.gotoPage(2);
```

### `setSearch(searchString)`

Set search keywords and its parameters are defined as follows:

* `searchString`: String for search keywords. Separate keywords by spaces.

```js
// Get a datagrid instance
var myDataGrid = $('#myDataGrid').data('zui.datagrid');

// Search for “tiger”
myDataGrid.setSearch('tiger');
```

### `search(searchString)`

Equivalent to `setSearch(searchString)`. However, the interface will be rendered again after the execution.

### `setSorter(sortBy, order)`

Set rules for sorting. Its parameters are defined as follows:

* `sortBy`: The column name currently used for sorting;
* `order`: Sort order. Optional values are asc(ascending) and desc(descending).

```js
// Get a datagrid instance
var myDataGrid = $('#myDataGrid').data('zui.datagrid');

// Sort by name descending
myDataGrid.setSorter('name', 'desc');
```

### `sortBy(sortBy, order)`

Equivalent to `setSorter(sortBy, order)`. However, the interface will be rendered again after the execution.

### `setDataSource(dataSource)`

Reset data source. The parameters are defined as follows:

* `dataSource`: The new data source object to be set.

### `getFilterParams()`

Get current data filtering information. It returns an object containing the following properties:

* `page`: Page number to be displayed;
* `recPerPage`: The number of data displayed per page;
* `search`: The text currently used to search data;
* `sortBy`: The column by which it is sorted;
* `order`: Sort order, including `'asc'` and `'desc'`.

### `showMessage(message, type, autoCloseTime)`

Display a message on the interface. The parameters are defined as follows:

* `message`: Message text to be displayed;
* `type`: Message type. Its values are `'primary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, and `'default'`;
*  `autoCloseTime`: The time that the message is automatically closed. The default is `5000`. If set as `0`, it is not automatically closed.

```js
// Get a datagrid instance
var myDataGrid = $('#myDataGrid').data('zui.datagrid');

// Display 'haha' message on the interface
myDataGrid.showMessage('haha', 'success');
```

### `renderLoading(loading)`

Switch indicators of loading. Its parameters are defined as follows：

* `loading`: If set as `true`, display the status indicator during loading. Otherwise hide status indicator. You can also set it as a string to display the prompt text on the indicator when loading.

```js
var myDataGrid = $('#myDataGrid').data('zui.datagrid');
myDataGrid.renderLoading('Efforts to get data...');
```

### `getData()`

Get the data displayed on the current interface.

### `getRowLayout(rowIndex)`

Get the layout of the specified row. The parameters are defined as follows:

* `rowIndex`: The row index to be obtained.

### `updateLayout()`

Update layout information.

### `getCell(rowIndex, colIndex)`

Get the specified cell information. The parameters are defined as follows:

* `rowIndex`: The row index of the cell to be obtained;
* `colIndex`：The column index of the cell to be obtained.

### `getRowConfig(rowIndex)`

Get row configuration. The parameters are defined as follows:

* `rowIndex`: The row index to be obtained.

### `getColConfig(colIndex)`

Get column configuration. The parameters are defined as follows:

* `colIndex`: Column index to be obtained.


### `getColConfigByName(colName)`

Get column configuration based on the column name. The parameters are defined as follows:

* `colName`: The column name to get.

### `getCellConfig(rowIndex, colIndex)`

Get the specified cell configuration. The parameters are defined as follows:

* `rowIndex`：The row index of the cell to be obtained;
* `colIndex`：The column index of the cell to be obtained.

### `isRowChecked(rowId)`

Check if the specified row is selected. The parameters are defined as follows:

* `rowId`: The row ID to be checked.

### `checkRow(rowIndex, checked)`

Manually set the status of the specified row. The parameters are defined as follows:

* `rowIndex`: The row ID to be set;
* `checked`: If set as true, it is selected. If false, unselected. Otherwise switch to the state according to the current state.

### `getCheckItems()`

Get all selected data items.

### `renderCell(rowIndex, colIndex)`

Render a cell. The parameters are defined as follows:

* `rowIndex`: The row number of the cell to be operated;
* `colIndex`: The column number of the cell to be operated.

### `renderRow(rowIndex)`

Render a row. The parameters are defined as follows:

* `rowIndex`: Row number to be operated.

### `renderData()`

Render all rows and cells.

### `renderScrolls()`

Render the scroll bar.

### `renderFixeds()`

Render fixed rows and columns.

### `render()`

Retrieve data from the data source and render the entire datagrid, including the row, column, scroll bar, etc.

### `setScrollbarOffset(offsetX, offsetY)`

Set the scroll bar position. The parameters are defined as follows:

* `offsetX`: The distance from the scroll bar to the left. If set as `null`, the distance of the left scroll bar is not set;
* `offsetY`: The distance from the scroll bar to the top. If set as `null`, the distance of the top scroll bar is not set.

### `scroll(scrollLeft, scrollTop)`

Set the distance to scroll. The parameters are defined as follows:

* `scrollLeft`: Horizontal scrolling distance. If set as `null`, the horizontal distance of the scrolling is not set;
* `scrollTop`: Vertical scrolling distance. If set as `null`, the vertical distance of scrolling is not set.

## Events

### `onRender`

Triggered when the datagrid is rendered.

```js
// Set the event callback function at the initialization
$('#dataGrid').datagrid({
    onRender: function() {
        // The datagrid has been rendered.
    }
});
```

```js
// Use jQuery $().on() to listen events
$('#dataGrid').on('onRender', function(event) {
    // The datagrid has been rendered.
});
```

### `onScroll`

Triggered when the scrolling position changes. The callback function parameters include:

* `scrollLeft`: Horizontal scrolling distance;
* `scrollTop`: Vertical scrolling distance;
* `scrollInfo`: Other information.

```js
// Set the event callback function at the initialization
$('#dataGrid').datagrid({
    onScroll: function(scrollLeft, scrollLeft, scrollInfo) {
        // Handling actions after scrolling
    }
});
```

```js
// Use jQuery $().on() to listen events
$('#dataGrid').on('onScroll', function(event, scrollLeft, scrollLeft, scrollInfo) {
    // Handling actions after scrolling
});
```

### `onLoad`

Triggered when data is reloaded from the data source. The callback function parameters include:

* `result`: If loading is successful, it is the loaded datagrid. Otherwise `false`.

```js
// Set the event callback function at the initialization
$('#dataGrid').datagrid({
    onLoad: function(result) {
        if (result !== false) {
            console.log('Data loading is done.', result);
        }
    }
});
```

```js
// Use jQuery $().on() to listen events
$('#dataGrid').on('onLoad', function(event, result) {
    if (result === false) {
        console.log('Data loading failed.');
    }
});
```

### `onSelectRow`

Triggered when a row is selected or unselected. The callback function parameters include:

* `rowId`: The ID of the selected row which status is change;
* `checked`: `true` means selected and `false` means unselected;
* `selections`: All selected rows.

```js
// Set the event callback function at the initialization
$('#dataGrid').datagrid({
    onSelectRow: function(rowId, checked, selections) {
        console.log('Row', rowID, checked ? 'Selected' : 'Unselected');
    }
});
```

```js
// Use jQuery of $().on() to listen events
$('#dataGrid').on('onLoad', function(event, result) {
    if (result === false) {
        console.log('Data loading failed.');
    }
});
```

### `onClickCell`

When a user clicks a cell, this event it triggered. The callback function parameters include:

* `event`: mouse click event object
* `cell`: click cell
* `$cell`: cell DOM element

```js
// Set the event callback function at the initialization
$('#dataGrid').datagrid({
    onClickCell: function(event, cell, $cell) {
        console.log('点击了单元格第', cell.rowIndex, '行', cell.colIndex, '列');
    }
});
```

```js
// use JQuery $().on() to listen the event
$('#dataGrid').on('onClickCell', function(event, cell, $cell) {
    console.log('点击了单元格第', cell.rowIndex, '行', cell.colIndex, '列');
});
```

<script src="../../dist/lib/selectable/zui.selectable.js"></script>
<script src="../../dist/lib/datagrid/zui.datagrid.js"></script>
<link href="../../dist/lib/datagrid/zui.datagrid.css" rel="stylesheet">
<script>
function afterPageLoad() {
    // Get sample data
    var getSampleData = function() {
        var getRandomInt = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
        var getRandomData = function(arr, start, end) {
            if (start === undefined) {
                start = 0;
            }
            if (end === undefined) {
                end = arr.length;
            }
            return arr[getRandomInt(start, end - 1)];
        };
        var getLuckInt = window.getLuckInt = function(min, max, luck) {
            return (luck % (max - min) + min);
        };
        var getLuckData = window.getLuckData = function(arr, start, end, luck) {
            if (start === undefined || start === null) {
                start = 0;
            }
            if (end === undefined || end === null) {
                end = arr.length;
            }
            return arr[getLuckInt(start, end - 1, luck)];
        };
        var createDataSample = function(size) {
            size = size || 100;
            var heros = ['Limaru', 'Phantom Assassin', 'prayer', 'Axe king', 'Witch doctor', 'Radiant Defense Tower', 'Roshan', 'Bloodthirsty', 'Zeus', 'Shadow magic', 'Mibo', 'Tree guard'];
            var actions = ['Kill', 'Pick up', 'buy', 'treatment'];
            var items = ['Holy sword', 'Blade of the Ethereal', 'True gems', 'Heart of fear', 'Travel shoes', 'Treatment ring', 'Black king', 'Refresh the ball', 'Gold hoop', 'butterfly', 'Fog of mist', 'Dust of development', 'Detective guard', 'Sentry guard', 'swirl', 'The top of heaven', 'Blade armor', 'Guardian of Shiva', 'Assault Breastplate', 'Stick of Athos', 'Silver Moon Crystal', 'Eye of Scarlett', 'Exquisite heart', 'Satan&#39;s evil power', 'Veto ornaments', 'Hidden knife', 'Blood spine', 'Evil sickle', 'Silver front', 'Hui Yao', 'Daedalus', 'Phantom axe', 'Lincoln Ball', 'Akhalim Scepter', 'Necronomic book'];
            var runes = ['Bounty charm', 'Double rune', 'Magical rune', 'Extreme speed', 'Immortal guardian', 'cheese'];
            var cols = [
                {label: 'time', name: 'time', width: 130, valueType: 'gametime', sort: true},
                {label: 'hero', name: 'hero', width: 80},
                {label: 'action', name: 'action', width: 80},
                {label: 'teammate', name: 'teammate', width: 80},
                {label: 'enemy', name: 'enemy', width: 80},
                {label: 'article/Rune', name: 'item', width: 80},
                {label: 'get experience', name: 'gotexps', width: 80, valueType: 'number'},
                {label: 'Get money', name: 'gotgolds', width: 80, valueType: 'number'},
                {label: 'Cumulative experience', name: 'exps', width: 80, valueType: 'number'},
                {label: 'Remaining money', name: 'golds', width: 80, valueType: 'number'},
                {label: 'description', name: 'desc', width: 'auto', minWidth: 200},
                {label: 'Cumulative head', name: 'kills', width: 110, valueType: 'number'},
            ];
            var createDataItem = function(index) {
                var luckNumber = parseInt((Math.sin(index + 1) + '').substr(3));
                var time = 600 + 5*index + getLuckInt(0, 5, luckNumber);
                var action = getLuckData(actions, null, null, luckNumber);
                var heroIndex = getLuckInt(0, action === 'Kill' ? 6 : 4, luckNumber);
                var hero = heros[heroIndex];
                var teammate, enemy, item;
                var heroData = {
                    golds: heroIndex*500*heroIndex + 71*index + getLuckInt(0, 71, luckNumber),
                    exps: heroIndex*300*heroIndex + 43*index + getLuckInt(0, 43, luckNumber),
                    kills: heroIndex + Math.floor(index/10)
                };
                var gotExps = 0;
                var gotGolds = 0;
                switch (action) {
                    case 'Kill':
                        enemy = getLuckData(heros, 6, 9, luckNumber);
                        gotExps += getLuckInt(0, 1000 + index * 10, luckNumber);
                        gotGolds += getLuckInt(0, 200 + index * 8, luckNumber);
                        if (hero === 'Limaru') {
                            action = 'Stealing';
                        } else if (hero === 'Axe king') {
                            action = 'Kill';
                        }
                        break;
                    case 'buy':
                        item = getLuckData(items, null, null, luckNumber);
                        break;
                    case 'Pick up':
                        item = getLuckData(runes, null, null, luckNumber);
                        if (item === 'Bounty charm') {
                            gotExps += getLuckInt(0, 50 + index, luckNumber);
                            gotGolds += getLuckInt(0, 50 + index * 2, luckNumber);
                        }
                        break;
                    case 'treatment':
                        teammate = getLuckData(heros, 0, 4, luckNumber);
                        if (hero === 'Witch doctor') {
                            action = 'milk';
                        }
                        break;
                }
                heroData.golds += gotGolds;
                heroData.exps += gotExps;
                var desc = hero + action + 'Up“' + (item || teammate || enemy) + '”';
                if (gotGolds) {
                    desc += '，Got money ' + gotGolds;
                }
                if (gotExps) {
                    desc += '，' + (gotGolds ? 'and' : '') + 'Gained experience ' + gotExps;
                }
                desc += '。';
                var dataItem = {
                    id: time,
                    time: time,
                    hero: hero,
                    action: action,
                    teammate: teammate || '',
                    enemy: enemy || '',
                    item: item || '',
                    gotgolds: gotGolds || '',
                    gotexps: gotExps || '',
                    exps: heroData.exps,
                    golds: heroData.golds,
                    kills: heroData.kills,
                    desc: desc
                };
                return dataItem;
            };
            return {
                dataSource: {
                    cols: cols,
                    length: size,
                    getByIndex: createDataItem
                },
                valueOperator: {
                    gametime: {
                        getter: function(time) {
                            var hours = Math.floor(time/3600);
                            if (hours < 10) {
                                hours = '0' + hours;
                            }
                            var mins = Math.floor(time/60)%60;
                            if (mins < 10) {
                                mins = '0' + mins;
                            }
                            var secs = time%60;
                            if (secs < 10) {
                                secs = '0' + secs;
                            }
                            return hours + ':' + mins + ':' + secs;
                        }
                    }
                },
                generate: function (size) {
                    var result = [];
                    for(var i = 0; i < size; ++i) {
                        result.push(createDataItem(i));
                    }
                    return result;
                }
            };
        };
        var sampleSize = 10000000000000;
        return createDataSample(sampleSize);
    };
    var sampleData = getSampleData();
    $('#datagridExample,#datagridBorderlessExample,#datagridStripedExample').datagrid({
        configs: {
            'R0C0': {
              label: '#'
            },
            'C1': {
              style: {textAlign: 'right'}
            },
            'C2': {
              style: {fontWeight: 'bold'}
            }
        },
        dataSource: {
            cols: sampleData.dataSource.cols,
            data: sampleData.generate(100),
            cache: true,
        },
        valueOperator: sampleData.valueOperator,
        states: {
            pager: {page: 1, recPerPage: 10},
        },
        height: 300,
        renderDelay: 200,
        checkable: true,
        sortable: true,
        hoverCell: true,
        onSelectRow: function(rowIndex, checked, selections) {
          console.log('>', rowIndex, checked, selections);
        }
    });
    var simpleDataSource = {
          cols: sampleData.dataSource.cols,
          data: sampleData.generate(50),
      };
    $('#tableDataGridExample').datagrid({
        height: 184
    });
    $('#remoteDataGridExample').datagrid({
        height: 'page',
        states: {
            pager: {page: 1, recPerPage: 5},
        },
        dataSource: {
            cache: false,
            cols:[
                {name: 'time', label: 'time', width: 132},
                {name: 'hero', label: 'hero', width: 134},
                {name: 'action', label: 'action', width: 109},
                {name: 'target', label: 'target', width: 109},
                {name: 'desc', label: 'description', width: 287}
            ],
            remote: function(params) {
                return {
                    // Original request address
                    url: 'docs/partial/remote-data-' + params.page + '.json',
                    // Request type
                    type: 'GET',
                    // type of data
                    dataType: 'json'
                };
            }
        },
    });
    $('#dynamicDataGridExample').datagrid($.extend({
        defaultDateFormater: 'hh:mm:ss',
        states: {
            fixedTopUntil: 0,
            fixedBottomFrom: sampleData.dataSource.length,
            fixedRightFrom: 12,
            pager: {page: 0}
        },
        configs: {
            'C1': {
              style: {textAlign: 'right'}
            },
            'C2': {
              style: {fontWeight: 'bold', color: '#448aff'}
            }
        },
        renderDelay: 200,
        checkable: false,
        sortable: false,
    }, sampleData));
    $('#datagridFixedExample').datagrid({
        dataSource: simpleDataSource,
        valueOperator: sampleData.valueOperator,
        states: {
            pager: {page: 1, recPerPage: 100},
            fixedLeftUntil: 0,
            fixedRightFrom: 12,
            fixedTopUntil: 0,
            fixedBottomFrom: 100,
        },
        height: 300,
    });
    $('#datagridSortExample').datagrid({
        dataSource: {
            cols: sampleData.dataSource.cols,
            data: sampleData.generate(100),
        },
        valueOperator: sampleData.valueOperator,
        sortable: true,
        height: 300,
    });
    $('#datagridPageExample').datagrid({
        dataSource: simpleDataSource,
        states: {
            pager: {page: 1, recPerPage: 20},
        },
        valueOperator: sampleData.valueOperator,
        sortable: true,
        height: 300,
    });
    $('#datagridSearchExample').datagrid({
        dataSource: simpleDataSource,
        states: {
            pager: {page: 1, recPerPage: 20},
        },
        valueOperator: sampleData.valueOperator,
        sortable: true,
        height: 300,
    });
    $('#datagridCheckableExample').datagrid({
        dataSource: simpleDataSource,
        states: {
            pager: {page: 1, recPerPage: 20},
        },
        valueOperator: sampleData.valueOperator,
        checkable: true,
        height: 300,
    });
    $('#datagridSpanExample').datagrid({
        dataSource: simpleDataSource,
        states: {
            pager: {page: 1, recPerPage: 20},
        },
        configs: {
            R1C1: {colspan: 2},
            R2C3: {rowspan: 3}
        },
        valueOperator: sampleData.valueOperator,
        height: 300,
    });
    $('#datagridValueOperatorExample').datagrid({
        dataSource: simpleDataSource,
        states: {
            pager: {page: 1, recPerPage: 20},
        },
        valueOperator: {
            // date Value converter will affect so valueType for `date` Column
            gametime: {
                getter: function(dataValue, cell, dataGrid) {
                    return 'First' + (Math.floor(dataValue%60)) + 'Minute' + (dataValue%60) + 'second';
                }
            }
        },
        height: 300,
    });
    $('#datagridConfigsExample').datagrid({
        dataSource: simpleDataSource,
        states: {
            pager: {page: 1, recPerPage: 20},
        },
        configs: {
            C2: {
                className: 'text-right',
                style: {
                    color: '#00b8d4',
                    backgroundColor: '#e0f7fa'
                }
            },
            R1C1: {
                style: {textDecoration: 'underline'}
            }
        },
        height: 300,
    });
}
</script>
