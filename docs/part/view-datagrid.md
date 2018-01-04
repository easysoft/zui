# 数据表格②

数据表格2（在下文中简称为数据表格）是一个全新的数据表格视图组件，相比较[数据表格](#view/datatable)提供更强大的功能，支持远程数据显示、排序、搜索以及海量数据显示。

## 综合示例

<div class="example">
  <div id="datagridExample" class="datagrid">
    <header class="clearfix">
      <div class="input-control search-box search-box-circle has-icon-left has-icon-right pull-right" id="searchboxExample1">
        <input id="inputSearchExample1" type="search" class="form-control search-input" placeholder="搜索">
        <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
      </div>
      <h3>数据表格功能综合演示</h3>
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

当所有选项都可以通过 `data-*` 属性设置时，则可以通过 `data-ride="datagrid"` 来在页面加载后自动进行初始化。

```html
<div id="datagridExample" class="datagrid" data-ride="datagrid"></div>
```

## 数据源

数据源是用于定义数据网格数据的格式和获取方式。数据源通过 `dataSource` 选项进行配置。`dataSource` 选项值为一个对象，可用的属性包括：

* `cols`：一个列定义对象数组，用于定义数据源上要显示的列，数组内对象的顺序即是列排列显示的顺序，列对象定义参见下文；
* `array`：可选，当使用静态数组定义数据时，使用此属性来定义所有数据；
* `remote`：可选，当从远程加载数据时，使用此属性来指定远程请求的地址，或者使用此属性指定一个函数用于动态生成每次请求所使用的 ajax 参数对象；
* `remoteConverter`：可选，当从远程加载数据时，使用此属性来转换远程内容，确保远程数据符合数据表格所要求的格式，如果远程数据已经通过 JSON 返回了符合要求的数据，则无需使用此属性进行转换操作；
* `getByIndex`：可选，当使用动态数据时，使用此属性指定一个函数用于动态返回数据项目；
* `cache`: 如果设置为 `true`，则启用数据查询缓存，如果设置为 `false`，则不启用数据查询缓存，默认为 `true`；
* `cacheSize`: 设置启用数据查询缓存时最大缓存数量，默认为 `10`。

### 数据项定义

数据项使用一个简单的 JavaScript 对象来表示。数据项对象中应该包含列定义（需要在界面上显示的列）中的所有属性，并且需要包含一个 `id` 属性用于行编号，如果没有指定 `id` 属性，则使用行序号作为行编号。

### 数据源列定义

数据表格上要显示的列通过列定义数组来设置。一个列定义对象数组，用于定义数据源上要显示的列，数组内对象的顺序即是列排列显示的顺序。每一个列定义对象包含如下属性：

* `name`: 列上要显示的数据属性名称；
* `label`: 可选，列标题文本，如果不定义此属性则使用 `name` 属性作为标题文本；
* `html`: 默认为 `false`，如果设置为 `true`，则在渲染列时将内容作为 html 源码更新到页面上；
* `style`: 可选，在该列上所以单元格元素上要添加的样式（使用 jQuery CSS 样式定义对象规则）；
* `width`: 列宽度，如果设置为小于 `1` 的浮点数，则将此值用于自适应时计算最终宽度的权值；
* `minWidth`：列最小宽度，当启用自适应时，最终计算的宽度不会小于该值；
* `className`: 可选，在该列上所有单元格元素上要添加的类名；
* `checkbox`: 默认为 `false`，如果设置为 `true`，则在此列单元格内显示勾选框；
* `valueType`：该列值类型，默认 `string`；
* `valueOperator`: 可选，该列上的值转换器；
* `sort`：是否为当前列开启排序功能，默认为 `true`，如果设置为 `false`，即便 `sortable` 选项设置为 `true` 也无法使用该列进行排序；
* `sortFunc`：可选，当使用该列排序时的比较函数。

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols:[
            {name: 'time', label: '时间', width: 132},
            {name: 'hero', label: '英雄', width: 134},
            {name: 'action', label: '动作', width: 109},
            {name: 'target', label: '目标', width: 109},
            {name: 'desc', label: '描述', width: 287}
        ],
        // ... Data source 其他属性
    },
    // ... 其他初始化选项
});
```

### 静态数据源

定义数据源最简单的方式是给定一个静态对象数组。

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols:[
            {name: 'time', label: '时间', width: 132},
            {name: 'hera', label: '英雄', width: 134},
            {name: 'action', label: '动作', width: 109},
            {name: 'target', label: '目标', width: 109},
            {name: 'desc', label: '描述', width: 287}
        ],
        array:[
            {time: '00:11:12', hero:'幻影刺客', action: '击杀', target: '斧王', desc: '幻影刺客击杀了斧王。'},
            {time: '00:13:22', hero:'幻影刺客', action: '购买了', target: '隐刀', desc: '幻影刺客购买了隐刀。'},
            {time: '00:19:36', hero:'斧王', action: '购买了', target: '黑皇杖', desc: '斧王购买了黑皇杖。'},
            {time: '00:21:43', hero:'力丸', action: '购买了', target: '隐刀', desc: '力丸购买了隐刀。'}
        ]
    },
    // ... 其他初始化选项
});
```

### 远程数据源

有时需要从远程获取数据，数据表格支持通过 Ajax 获取远程数据作为数据源，而且使用起来非常灵活。通过数据源对象的 `remote` 和 `remoteConverter` 属性来配置远程数据源。

#### 远程请求参数

远程请求参数通过 `remote` 属性来配置。如果是静态地址，则直接使用远程连接地址作为 `remote` 配置的值，如果要根据当前请求的页码和搜索文本等信息进行动态请求配置，则可以将 `remote` 配置的值指定为一个回调函数来动态返回配置。`remote` 配置回调函数参数定义如下：

* `params`: 请求的参数信息对象；
* `datagrid`: 数据网格实例对象。

其中 `params` 对象包含如下属性：

* `page`: 当前显示的页码；
* `recPerPage`: 当前设定每页显示的数据个数；
* `search`: 当前用于检索数据的文本；
* `sortBy`: 当前排序依据的列名；
* `order `: 当前排序的顺序，包括顺序（`'asc'`）和倒序（`'desc'`）。

远程请求参数对象可以使用 [jQuery.ajax](https://github.com/easysoft/zui/commits/master) 方法接受的所有选项。

#### 远程数据格式

远程数据必须返回一个 JSON 格式的对象，此对象包含如下属性：

```js
// 原创数据对象
{
    // 数据请求结果（必须），当值为 'succes'、'ok' 或 200 时则是为请求成功
    "result": "success",

    // 远程数据内容（必须）
    "data": [
        // ... 原创数据对象数组
    ],

    // 用户界面提示消息，当请求结果失败时，可以使用此属性返回文本显示在用户界面上
    "message": "",

    // 远程数据的分页信息对象（必须），其中 
    "pager": {
        "page": 1,           // 当前数据对应的页码
        "recTotal": 1001,    // 总的数据数目
        "recPerPage": 10,    // 每页数据数目
    }
}
```

当远程请求返回的内容不符合上面的格式时，则需要使用 `remoteConverter` 指定一个回调函数来将远程数据转换为符合要求的格式。`remoteConverter` 回调函数包含如下参数：

* `responseData`：远程请求返回的文本内容；
* `textStatus`：原创请求状态；
* `jqXHR`：jQuery 的 xhr 对象；
* `datagrid`：数据网格实例对象。

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
            {name: 'time', label: '时间', width: 132},
            {name: 'hera', label: '英雄', width: 134},
            {name: 'action', label: '动作', width: 109},
            {name: 'target', label: '目标', width: 109},
            {name: 'desc', label: '描述', width: 287}
        ],
        remote: function(params) {
            return {
                // 原创请求地址
                url: 'docs/partial/remote-data.json',
                // 请求类型
                type: 'GET',
                // 数据类型
                dataType: 'json'
            };
        }
    }
});
```

### 动态数据

动态数据允许使用一个函数来生成数据，数据只在需要显示的时候获取。通过这种方式，可以实现上亿的海量数据显示。

要启用动态数据源，只需要为数据源对象（`dataSource` 选项）的 `getByIndex` 属性设置一个回调函数，在该回调函数中返回对应索引的对象即可。该回调函数参数定义如下：

* `index`：要获取的数据行索引；
* `params`：数据检索参数。

其中 `params` 对象包含如下属性：

* `page`: 当前显示的页码；
* `recPerPage`: 当前设定每页显示的数据个数；
* `search`: 当前用于检索数据的文本；
* `sortBy`: 当前排序依据的列名；
* `order `: 当前排序的顺序，包括顺序（`'asc'`）和倒序（`'desc'`）。

<div class="alert alert-warning">
  <h4>动态数据源性能提示</h4>
  <p>当使用动态数据源时，如果一次性展示的数据比较多，受限于计算机性能，应该关闭排序、搜索、行选中等操作，否则可能导致界面无响应。</p>
</div>

<div class="alert alert-primary">
  <h4>动态数据源使用限制</h4>
  <p>当使用动态数据源时，不支持分页功能。</p>
</div>

<div class="example">
  <div id="dynamicDataGridExample" class="datagrid">
    <header>
      <h1>动态数据</h1>
      <p class="small">使用动态数据源实现上亿的海量数据展示。</p>
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
    checkable: false,    // 禁用勾选
    sortable: false,     // 禁用排序
})；
```

### 使用原生表格初始化

与旧版本数据表格一致，数据表格2仍然支持直接使用一个原生的数据表格进行初始化。

<div class="example">
  <table class="table table-bordered" id="tableDataGridExample">
    <thead>
      <tr>
        <th>时间</th>
        <th>英雄</th>
        <th>动作</th>
        <th>目标</th>
        <th>描述</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>00:11:12</td>
        <td>幻影刺客</td>
        <td>击杀</td>
        <td>斧王</td>
        <td>幻影刺客击杀了斧王。</td>
      </tr>
      <tr>
        <td>00:13:22</td>
        <td>幻影刺客</td>
        <td>购买了</td>
        <td>隐刀</td>
        <td>幻影刺客购买了隐刀。</td>
      </tr>
      <tr>
        <td>00:19:36</td>
        <td>斧王</td>
        <td>购买了</td>
        <td>黑皇杖</td>
        <td>斧王购买了黑皇杖。</td>
      </tr>
      <tr>
        <td>00:21:43</td>
        <td>力丸</td>
        <td>购买了</td>
        <td>隐刀</td>
        <td>力丸购买了隐刀。</td>
      </tr>
    </tbody>
  </table>
</div>

```html
<table class="table table-bordered" id="tableDataGridExample">
  <thead>
    <tr>
      <th>时间</th>
      <th>英雄</th>
      <th>动作</th>
      <th>目标</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00:11:12</td>
      <td>幻影刺客</td>
      <td>击杀</td>
      <td>斧王</td>
      <td>幻影刺客击杀了斧王。</td>
    </tr>
    ...
  </tbody>
</table>
```

```js
$('#tableDataGridExample').datagrid();
```

## 固定行和列

数据表格支持将行和列固定在表格的一侧，当视图滚动时，固定的行和列仍然保持原来的位置。固定行和列功能通过 `states` 选项进行设置，为 `states` 设置如下属性来启用该功能：

* `fixedLeftUntil`：左侧固定列索引的终止值，当列索引小于或等于该值时则将列固定在表格左侧，默认为 `0`（即固定左侧行编号所在列）；
* `fixedRightFrom`： 右侧固定列索引的起始值，当列索引大于或等于该值时则将列固定在表格右侧，默认为 `-1`（不在右侧固定列）；
* `fixedTopUntil`： 顶部固定列索引的终止值，当列索引小于或等于该值时则将列固定在表格上方，默认为 `0`（即固定上方标题所在列）；
* `fixedBottomFrom`： 底部固定列索引的起始值，当列索引大于或等于该值时则将列固定在表格下方，默认为 `-1`（不在下方固定列）。

<div class="example">
  <div id="datagridFixedExample" class="datagrid">
    <header class="clearfix">
      <h3>数据表格固定行和列演示 <small>行和列分别可以固定在表格上、下、左、右四个方向</small></h3>
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

        fixedLeftUntil: 0,    // 固定左侧第一列
        fixedRightFrom: 12,   // 从第12列开始固定到右侧
        fixedTopUntil: 0,     // 固定顶部第一行（标题行）
        fixedBottomFrom: 100, // 从第100行（在此例中是最后一行）开始固定到底部
    }
});
```

## 排序

数据表格支持按照任意列进行排序，并且可以自定义排序比较函数。要启用排序功能需要将 `sortable` 选项设置为 `true`。当启用排序功能后，标题行（第一行）上的单元格会显示排序指示图标，用户可以点击标题行上的单元格按照所在列进行排序，排序方式会在每次点击时进行顺序切换，切换顺序为升序排序、降序排序、不排序。如果需要禁用根据某些列排序，则可以在列定义中将 `sort` 属性设置为 `false`。

默认排序算法使用 JavaScript 内置的默认比较算法，如果需要自定义排序函数，可以通过 `sortFunc` 选项设置一个回调函数，该回调函数参数定义如下：

* `value1`：第一个要比较的值，相当于 `item1[sortBy]`；
* `value2`：第二个要比较的值，相当于 `item2[sortBy]`；
* `item1`：第一个要比较的数据条目；
* `item2`：第二个要比较的数据条目；
* `sortBy`：当前用于排序的列名；
* `datagrid`：当前数据表格实例对象。

当第一个值大于第二个值时，排序函数应该返回大于 `0` 的数值，当第一个值小于第二个值时，排序函数应该返回小于 `0` 的值，如果相等则返回 `0`。

如果仅仅需要为单独的列应用自定义排序函数，则可以在列定义中使用 `sortFunc` 属性设置该列的排序函数，列排序函数参数定义及返回值约定与选项 `sortFunc` 一致。

<div class="example">
  <div id="datagridSortExample" class="datagrid">
    <header class="clearfix">
      <h3>数据表格排序功能演示 <small>点击表头进行排序</small></h3>
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

要手动操作排序，可以使用数据表格的实例方法 `sortBy(sortBy, order)`，该方法参数定义如下：

* `sortBy`：当前用于排序的列名；
* `order`：排序顺序，可选值包括 `asc`（升序），`desc`（降序）。

```js
// 获取数据表格实例
var myDataGrid = $('#datagridSortExample').data('zui.datagrid');

// 按照 `name` 列降序排序
myDataGrid.sortBy('name', 'desc');
```

可以通过选项 `states` 上的如下属性设置初始状态下的排序规则：

* `sortBy`：当前用于排序的列名；
* `order`：排序顺序，可选值包括 `asc`（升序，默认），`desc`（降序）。

## 分页

数据表格支持对数据进行分页，支持静态数据源和远程数据源分页操作，并且可以结合[分页器插件](#javascript/pagerjs)一起使用。要启用分页功能，需要为 `states` 选项设置 `pager` 属性。`pager` 属性为一个对象，包含如下属性：

* `page`：当前页码，默认为`0`（不启用分页）
* `recPerPage`: 每页记录数目，默认为 `10`。

分页可以与[分页器插件](#javascript/pagerjs)一起使用，在 `.datagrid` 元素内包含 `.pager` 元素即可自动绑定分页器组件。

<div class="example">
  <div id="datagridPageExample" class="datagrid">
    <header class="clearfix">
      <h3>数据表格分页功能演示</h3>
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

要手动操作分页，可以使用数据表格的实例方法 `gotoPage(page)`，方法参数定义如下：

* `page`：要切换的页码。

```js
// 获取数据表格实例
var myDataGrid = $('#datagridPageExample').data('zui.datagrid');

// 到第二页
myDataGrid.gotoPage(2);
```

<div class="alert alert-primary">
  <h4>不再需要滚动</h4>
  <p>当启用分页时，可以通过将 `height` 选项设置为特殊值 `'page'`，从而实现自动调整数据表格高度为当前页所有行的高度，实现没有垂直滚动条的情况下显示当前页的所以数据。</p>
</div>

## 搜索

数据表格支持对静态数据源和原创数据源数据进行检索。当使用远程数据源时，搜索是在服务器端进行的，服务器应该根据搜索字符串参数筛选数据；如果是静态数据，搜索是在浏览器进行的，默认的搜索策略非常到位，允许搜索字符串通过空格包含多个关键字，并且自动根据批评程序进行排序，批评程度更高的会显示在前面（搜索结果自动排序仅当用户没有进行排序时有效）。

当对静态数据源进行浏览器端搜索时，可以通过 `searchFunc` 选项指定一个搜索回调函数来自定义如何筛选数据，该函数参数定义如下：

* `item`：当前检测是否符合条件的数据条目对象；
* `searchKeyArr`：当前搜索关键词数组；
* `index`：当前条目在数据源中的索引；
* `params`：其他检索条件；
* `datagrid`：当前数据表格实例对象。

其中 `params` 参数为一个对象，包含如下属性：

* `page`: 当前显示的页码；
* `recPerPage`: 当前设定每页显示的数据个数；
* `search`: 当前用于检索数据的文本；
* `sortBy`: 当前排序依据的列名；
* `order `: 当前排序的顺序，包括顺序（`'asc'`）和倒序（`'desc'`）。

在 `.datagrid` 元素内包含一个[搜索框组件](#javascript/searchbox)，数据表格会自动监听搜索框变更事件并自动更新结果。

<div class="example">
  <div id="datagridSearchExample" class="datagrid">
    <div class="input-control search-box search-box-circle has-icon-left has-icon-right" id="searchboxExample2" style="margin-bottom: 10px; max-width: 300px">
      <input id="inputSearchExample2" type="search" class="form-control search-input" placeholder="搜索">
      <label for="inputSearchExample2" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
      <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
    </div>
    <div class="datagrid-container"></div>
  </div>
</div>

```html
<div id="datagridSearchExample" class="datagrid">
  <div class="input-control search-box search-box-circle has-icon-left has-icon-right" id="searchboxExample2" style="margin-bottom: 10px; max-width: 300px">
    <input id="inputSearchExample2" type="search" class="form-control search-input" placeholder="搜索">
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

可以使用数据表格的实例方法 `search(searchStr)` 手动设置搜索关键字，方法参数定义如下：

* `searchStr`：用于搜索的关键字字符串，多个关键字使用空格连接。

```js
// 获取数据表格实例
var myDataGrid = $('#datagridPageExample').data('zui.datagrid');

// 搜索同时包含 '数据' 和 '表格' 两个关键字的条目
myDataGrid.search('数据 表格');
```

可以通过选项 `states` 上的 `search` 属性设置初始状态下搜索关键字字符串。

## 行选择

数据表格允许用户通过点击行或者在界面上拖拽来选定并标记行。要启用行选择功能，需要将 `checkable` 设置为 `true`。如果启用了行选中，并且页面已导入[拖拽选取插件](#javascript/selectable)，则允许用户在界面上进行拖拽框选多行，禁用此功能，可以将 `selectable` 设置为 `false`。`selectable` 还可以接受一个对象作为拖拽选取插件初始化参数，用于自定义拖拽选取交互方式。

当启用行选择功能，并且序号列设置为显示的情况下，会自动在序号列上添加勾选框，方便用户勾选行和查阅行选中状态。如果不需要显示勾选框，可以在序号列配置中将 `checkbox` 属性设置为 `false`，如果需要在其他列上显示勾选框，则可以在对应的列定义对象上将 `checkbox` 属性设置为 `true`。

当启用行选择功能，默认情况下，用户点击行上任意位置都会切换行的选中状态，如果不需要此功能，可以将 `checkByClickRow` 选项设置为 `false`，这样只有用户点击勾选框才能够切换选中状态。

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

通过 `getCheckItems()` 获取已选中的行数据项。

```js
// 获取数据表格实例
var myDataGrid = $('#datagridPageExample').data('zui.datagrid');

// 获取当前已选中的行数据项
var selectedItems = myDataGrid.getCheckItems();
```

通过 `isRowChecked(rowId)` 检查指定的行是否已选中，其中 `rowId` 为要检查的行编号。

```js
// 获取数据表格实例
var myDataGrid = $('#datagridPageExample').data('zui.datagrid');

// 检测编号为 2 的行是否选中
var isSelect = myDataGrid.isRowChecked(2);
```

通过 `checkRow(rowIndex, checked)` 手动设置指定行选中状态，其中参数定义如下：

* `rowIndex`：要设置的行序号；
* `checked`：如果为 `true` 设置为选中，如果为 `false` 设置为非选中，否则根据之前第状态切换为另一个状态。

```js
// 获取数据表格实例
var myDataGrid = $('#datagridPageExample').data('zui.datagrid');

// 将第2行设置为选中
var isSelect = myDataGrid.checkRow(2, true);
```

可以通过选项 `states` 上的 `selections` 属性设置初始状态下行选中的状态。

```js
$('#myDataGrid').datagrid({
    states: {
        // 设置初始状态下行编号为 1 和 3 的行为选中状态
        selections: {
            '1': true,
            '3': true,
        }
    }
})
```

## 跨行跨列的单元格

数据表格支持跨行跨列的单元格，该功能通过 `configs` 选项进行设置。例如设置第 1 行第一个单元格在水平方向上跨越 2 个单元格，设置第 2 行第 3 个单元格在垂直方向上跨越 3 行，则 `configs` 选项设置如下：

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

## 值转换器

值转换器为一个对象，包含如下属性，用于在读取值和设置值时对值进行转换操作。值转换器上可以包含如下属性：

* `getter`：转换函数，用于将值转换为界面上显示的值；
* `setter`：转换函数，用于将用户编辑的值更新到数据源中（暂不支持）。

值转换器 `getter` 函数包含如下参数：

* `value`：用于转换的原始值；
* `cell`：当前单元格信息对象；
* `datagrid`：当前数据表格实例对象。

<div class="example">
  <div id="datagridValueOperatorExample" class="datagrid">
    <header class="clearfix">
      <h3>数据表格值转换器例子 <small>时间列通过值转换器进行来转换操作</small></h3>
    </header>
    <div class="datagrid-container"></div>
  </div>
</div>

值转换器可以通过如下途径进行设置，不同途径生效范围不同。

通过 `valueOperator` 选项进行设置，会影响特定类型的数据，例如下例将所有事件戳类型转换为中文日期格式：

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols: [
            {name: 'time', valueType: 'date', label: '时间'},
            // ... 其他列定义
        ]
    },
    valueOperator: {
        // date 值转换器会影响所以 valueType 为 `date` 的列
        date: {
            getter: function(dataValue, cell, dataGrid) {
                return new Date(dataValue).toLocaleString();
            }
        }
    }
})
```

<div class="alert alert-primary">
  <h4>内置的日期值转换器</h4>
  <p>数据表格已经内置了对日期类型（`valueType` 为 `date`）的转换支持，可以简单的通过 `defaultDateFormater` 来设置转换的日期格式。</p>
</div>

值转换器还可以通过列定义参数进行设置。上例可以写为：

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols: [
            {
                name: 'time',
                label: '时间', 
                // 值转换器仅仅影响当前列
                valueOperator: {
                    getter: function(dataValue, cell, dataGrid) {
                        return new Date(dataValue).toLocaleString();
                    }
                }
            },
            // ... 其他列定义
        ]
    }
});
```

值转换器还可以通过 `configs` 选项单独为某个单元格或某行进行设置。例如仅仅为第 2 行第 1 列应用日期值转换器“

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols: [
            {name: 'time', valueType: 'date', label: '时间'},
            // ... 其他列定义
        ]
    },
    configs: {
        R2C1: {
            // 值转换器仅影响第 2 行第 1 列的单元格
            valueOperator: {
                getter: function(dataValue, cell, dataGrid) {
                    return new Date(dataValue).toLocaleString();
                }
            }
        }
    }

})
```

## 自适应列宽

默认情况下列宽如果没有指定的话会自动进行调整，在保证最小列宽的情况下自动根据调整其他列的宽度，确保所以列宽能够填满水平空间，如果水平空间不够显示所以列，则会允许用户在水平方向上滚动浏览其他列。如果不需要自适应列宽功能可以将 `responsive` 选项设置为 `false`，并且在列定义中为每一列手动设置宽度。

当启用自适应列宽功能时，所有没有指定宽度的列会平分剩余的水平空间，但仍然可以通过配置为列宽设置一个权值，使得拥有更大权值的列获得更多的空间。权值通过 列定义的 `width` 属性设置，必须小于 `1`。

```js
$('#myDataGrid').datagrid({
    dataSource: {
        cols:[
            {name: 'time', label: '时间', width: 132},
            {name: 'hera', label: '英雄', width: 134},
            {name: 'action', label: '动作', width: 109},

            // target 列自适应，占据剩余列宽的 1/4
            {name: 'target', label: '目标', width: 0.25},

            // desc 列自适应，占据剩余列宽的 3/4
            {name: 'desc', label: '描述', width: 0.75}
        ],
    }
});
```

## 个性化配置

通过 `configs` 选项可以为某行、某列或某个单元格应用个性化配置。`configs` 选项为一个对象，键值为要配置的行、列或单元格标识，对应值为配置项。

配置标识格式通常是 `R行号C列号`，可以是如下形式：

* `#10`：表示数据项 ID 属性为 `10` 的数据对应的行；
* `R0`：表示第 0 行，即标题行，相当于 `#header`；
* `R1`：表示第 1 行；
* `C0`：表示第 0 列，即序号列；
* `C2`：表示第 2 行；
* `R1C1`：表示第 1 行第 1 列的单元格；
* `#11C2`：表示数据项 ID 属性为 `10` 的数据对应的行，第 2 列的单元格。

配置项支持如下属性：

* `html`: 默认为 `false`，如果设置为 `true`，则在渲染所匹配单元格时将内容作为 html 源码更新到页面上；
* `style`: 可选，在所匹配的单元格元素上要添加的样式（使用 jQuery CSS 样式定义对象规则）；
* `className`: 可选，在所匹配的单元格元素上要添加的类名。

下面的例子中将第 2 列的单元格添加 `.text-right` 类实现单元格内文本靠右对齐，并且更改文本颜色和背景色，将第 1 列 第 1 个单元格添加下划线样式：

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

`configs` 选项还可以为一个回调函数，该回调函数包含一个参数 `selector` 为当前要获取配置项的标识。

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

## 自定义模板

只需要为数据表格提供一个空的 `.datagrid` 元素即可进行初始化。在 `.datagrid` 元素内添加其他内容仍然是受支持的。默认情况下，数据表格渲染容器元素 `.datagrid-container` 是被自动添加到 `.datagrid` 元素内部最后位置，如果需要控制 `.datagrid-container` 的位置，只需要手动在合适到位置添加一个空的 `.datagrid-container` 元素。

```html
<div class="datagrid">
  <h1>标题</h1>
  <div class="search-box">...搜索框</div>
  <div class="datagrid-container">...数据表格显示区域</div>
  <div>其他内容</div>
</div>
```

## 选项

所有可用的选项包括：

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 140px">选项</th>
      <th style="width: 150px">名称</th>
      <th style="width: 150px">可用值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>width</code></td>
      <td>显示区域宽度</td>
      <td>默认为 `'auto'`</td>
      <td>允许设置为 CSS 所支持的宽度表示形式。</td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>显示区域高度</td>
      <td>默认为 `400`</td>
      <td>当启用分页功能时，如果设置为 `'page'`，则自动将显示区域高度设置为当前页所有行的高度总和。</td>
    </tr>
    <tr>
      <td><code>dataSource</code></td>
      <td>数据源</td>
      <td>默认为 `null`</td>
      <td>参见上文 "数据源" 相关内容。</td>
    </tr>
    <tr>
      <td><code>configs</code></td>
      <td>个性化配置</td>
      <td>默认为 `null`</td>
      <td>参见上文 "个性化配置" 等章节相关内容。</td>
    </tr>
    <tr>
      <td><code>states</code></td>
      <td>初始化状态</td>
      <td>默认为 `null`</td>
      <td>
        <p>支持如下属性：</p>
        <ul>
          <li>`pager`：初始状态下的分页信息，参见上文“分页”内容；</li>
          <li>`sortBy`：初始状态下的排序列，参见上文“排序”内容；</li>
          <li>`order`：初始状态下的排序顺序，参见上文“排序”内容；</li>
          <li>`selections`：初始状态下的行选中状态，参见上文“行选中”内容；</li>
          <li>`search`：初始状态下的搜索关键字，参见上文“搜索”内容；</li>
          <li>`fixedLeftUntil`：左侧固定列序号最大值，参见上文“固定行和列”内容；</li>
          <li>`fixedTopUntil`：上方侧固定行序号最大值，参见上文“固定行和列”内容；</li>
          <li>`fixedRightFrom`：右侧固定列序号最小值，参见上文“固定行和列”内容；</li>
          <li>`fixedBottomFrom`：底部侧固定行序号最小值，参见上文“固定行和列”内容；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>borderWidth</code></td>
      <td>单元格边框宽度</td>
      <td>默认为 `1`</td>
      <td>如果设置为 `0`，则不显示单元格边框。</td>
    </tr>
    <tr>
      <td><code>rowDefaultHeight</code></td>
      <td>行高</td>
      <td>默认为 `30`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>colAutoDefaultWidth</code></td>
      <td>自适应列默认宽度</td>
      <td>默认为 `80`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>colAutoMinWidth</code></td>
      <td>自适应列最小宽度</td>
      <td>默认为 `50`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>showHeader</code></td>
      <td>是否显示标题行</td>
      <td>默认为 `true`</td>
      <td>如果设置为 `false`，则不显示标题行，即行序号为 `0` 的行。</td>
    </tr>
    <tr>
      <td><code>showMessage</code></td>
      <td>标题行高度</td>
      <td>默认为 `30`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>showRowIndex</code></td>
      <td>是否显示行序号列</td>
      <td>默认为 `true`</td>
      <td>如果设置为 `false`，则不显示行序号列，即列序号为 `0` 的列。</td>
    </tr>
    <tr>
      <td><code>rowIndexWidth</code></td>
      <td>行序号列宽度</td>
      <td>默认为 `'auto'`</td>
      <td>自动计算行序号列宽度</td>
    </tr>
    <tr>
      <td><code>hoverRow</code></td>
      <td>是否显示行悬停效果</td>
      <td>默认为 `true`</td>
      <td>启用后，鼠标悬停在行上会高亮行。</td>
    </tr>
    <tr>
      <td><code>hoverCol</code></td>
      <td>是否显示列悬停效果</td>
      <td>默认为 `true`</td>
      <td>启用后，鼠标悬停在列标题上会高亮对应的列。</td>
    </tr>
    <tr>
      <td><code>hoverCell</code></td>
      <td>是否显示单元格悬停效果</td>
      <td>默认为 `false`</td>
      <td>启用后，鼠标悬停在单元格上会高亮单元格。</td>
    </tr>
    <tr>
      <td><code>responsive</code></td>
      <td>是否启用自适应列宽</td>
      <td>默认为 `true`</td>
      <td>参见上文"自适应列宽"内容。</td>
    </tr>
    <tr>
      <td><code>valueOperator</code></td>
      <td>类型值转换器</td>
      <td>默认为 `null`</td>
      <td>参见上文"值转换器"内容。</td>
    </tr>
    <tr>
      <td><code>defaultDateFormater</code></td>
      <td>默认日期转换格式</td>
      <td>默认为 `yyyy-MM-dd hh:mm`</td>
      <td>参见上文"值转换器"内容。</td>
    </tr>
    <tr>
      <td><code>partialRendering</code></td>
      <td>是否启用局部渲染</td>
      <td>默认为 `'auto'`</td>
      <td>当启用分页时，此选项自动设置为 `true`，否则默认开启。</td>
    </tr>
    <tr>
      <td><code>scrollDelay</code></td>
      <td>滚动事件响应延迟</td>
      <td>默认为 `0`</td>
      <td>单位毫秒，当提高此值可以提高性能，但滚动效果存在延迟。</td>
    </tr>
    <tr>
      <td><code>renderDelay</code></td>
      <td>渲染延迟</td>
      <td>默认为 `100`</td>
      <td>单位毫秒，当提高此值可以提高性能，但可能存在更新较慢的情况。</td>
    </tr>
    <tr>
      <td><code>searchFunc</code></td>
      <td>搜索筛选函数</td>
      <td>默认为 `null`</td>
      <td>参见上文"搜索"内容。</td>
    </tr>
    <tr>
      <td><code>sortFunc</code></td>
      <td>排序比较函数</td>
      <td>默认为 `null`</td>
      <td>参见上文"排序"内容。</td>
    </tr>
    <tr>
      <td><code>sortable</code></td>
      <td>是否启用排序</td>
      <td>默认为 `false`</td>
      <td>当设置为 `true` 后允许用户点击标题行进行排序，参见上文"排序"内容。</td>
    </tr>
    <tr>
      <td><code>checkable</code></td>
      <td>是否启用行选择</td>
      <td>默认为 `false`</td>
      <td>当设置为 `true` 后允许用户选中行，参见上文"行选中"内容。</td>
    </tr>
    <tr>
      <td><code>checkByClickRow</code></td>
      <td>是否允许用户点击行任意位置选中行</td>
      <td>默认为 `true`</td>
      <td>当 `checkable` 设置为 `true` 时生效，参见上文"行选中"内容。</td>
    </tr>
    <tr>
      <td><code>selectable</code></td>
      <td>是否允许用户拖拽范围选中行</td>
      <td>默认为 `true`</td>
      <td>当 `checkable` 设置为 `true` 时生效，参见上文"行选中"内容。</td>
    </tr>
    <tr>
      <td><code>cellCreator</code></td>
      <td>单元格生存器</td>
      <td>默认为 `null`</td>
      <td>
        <p>可以设置一个回调函数用于创建单元格元素，回调函数参数包括：</p>
        <ul>
          <li>`cell`：要创建的单元格对象；</li>
          <li>`datagrid`：数据表格对象实例。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>cellFormator</code></td>
      <td>单元格格式化函数</td>
      <td>默认为 `null`</td>
      <td>
        <p>可以设置一个回调函数用于格式化单元格元素，回调函数参数包括：</p>
        <ul>
          <li>`$cell`：要格式化的单元格元素；</li>
          <li>`cell`：当前单元格对象；</li>
          <li>`datagrid`：数据表格对象实例。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>rowCreator</code></td>
      <td>行生存器</td>
      <td>默认为 `null`</td>
      <td>
        <p>可以设置一个回调函数用于创建行元素，回调函数参数包括：</p>
        <ul>
          <li>`rowIndex`：要创建的行序号；</li>
          <li>`datagrid`：数据表格对象实例。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>showMessage</code></td>
      <td>出现错误时是否显示消息</td>
      <td>默认为 `true`</td>
      <td>该选项还可以设置为一个对象，用于指定漂浮消息初始化选项。</td>
    </tr>
  </tbody>
</table>

## 属性和方法

### `setPager(page, recTotal, recPerPage)`

设置分页信息，参数定义如下：

* `page`：要设置的当前页码，如果传递值为 `-1`，则不设置此值；
* `recTotal`：记录总数，如果传递值为 `-1`，则不设置此值；
* `recPerPage`：每页记录数，如果传递值为 `-1`，则不设置此值。

该方法还有另一种参数形式：`setPager(pager)`，其中 `pager` 参数为一个对象，对象上的属性涵盖列上述参数。

```js
// 获取数据表格实例
var myDataGrid = $('#myDataGrid').data('zui.datagrid');

// 设置第 2 页
myDataGrid.setPager(2);
```

### `gotoPage(page)`

设置当前页码，并重新渲染界面，参数定义如下：

* `page`：要设置的当前页码；

```js
// 获取数据表格实例
var myDataGrid = $('#myDataGrid').data('zui.datagrid');

// 设置第 2 页
myDataGrid.gotoPage(2);
```

### `setSearch(searchString)`

设置搜索关键字，参数定义如下：

* `searchString`：用于搜索的关键字字符串，多个关键字使用空格分隔。

```js
// 获取数据表格实例
var myDataGrid = $('#myDataGrid').data('zui.datagrid');

// 搜索 “老虎”
myDataGrid.setSearch('老虎');
```

### `search(searchString)`

相当于 `setSearch(searchString)`，但执行完后会重新渲染界面。

### `setSorter(sortBy, order)`

设置排序规则，参数定义如下：

* `sortBy`：当前用于排序的列名；
* `order`：排序顺序，可选值包括 asc（升序），desc（降序）。

```js
// 获取数据表格实例
var myDataGrid = $('#myDataGrid').data('zui.datagrid');

// 按照名称 name 降序排列
myDataGrid.setSorter('name', 'desc');
```

### `sortBy(sortBy, order)`

相当于 `setSorter(sortBy, order)`，但执行完后会重新渲染界面。

### `setDataSource(dataSource)`

重新设置数据源，参数定义如下：

* `dataSource`：要设置的新的数据源对象。

### `getFilterParams()`

获取当前数据筛选信息，返回一个对象包含如下属性：

* `page`: 当前显示的页码；
* `recPerPage`: 当前设定每页显示的数据个数；
* `search`: 当前用于检索数据的文本；
* `sortBy`: 当前排序依据的列名；
* `order`: 当前排序的顺序，包括顺序（`'asc'`）和倒序（`'desc'`）。

### `showMessage(message, type, autoCloseTime)`

在界面上显示一个消息，参数定义如下：

* `message`：要显示的消息文本；
* `type`：消息类型，允许值包括 `'primary'`、 `'success'`、 `'danger'`、 `'warning'`、 `'info'`、 `'default'`；
*  `autoCloseTime`：消息自动关闭的时间，默认为 `5000`，如果设置为 `0`，则不自动关闭。

```js
// 获取数据表格实例
var myDataGrid = $('#myDataGrid').data('zui.datagrid');

// 在界面上显示 'haha' 消息。
myDataGrid.showMessage('haha', 'success');
```

### `renderLoading(loading)`

切换显示加载中状态指示器，其中参数定义如下：

* `loading`：当设置为 `true` 时则显示加载中状态指示器，否则隐藏状态指示器，也可以设置为一个字符串，用于显示加载中指示器上的提示文本。

```js
var myDataGrid = $('#myDataGrid').data('zui.datagrid');
myDataGrid.renderLoading('正在努力获取数据...');
```

### `getData()`

获取当前界面上显示对数据。

### `getRowLayout(rowIndex)`

获取指定行布局信息，其中参数定义如下：

* `rowIndex`：要获取的行序号。

### `updateLayout()`

更新布局信息。

### `getCell(rowIndex, colIndex)`

获取指定单元格信息，其中参数定义如下：

* `rowIndex`：要获取的单元格所在行序号；
* `colIndex`：要获取的单元格所在列序号。

### `getRowConfig(rowIndex)`

获取行配置信息，其中参数定义如下：

* `rowIndex`：要获取的行序号。

### `getColConfig(colIndex)`

获取列配置信息，其中参数定义如下：

* `colIndex`：要获取的列序号。


### `getColConfigByName(colName)`

根据列名称获取列配置信息，其中参数定义如下：

* `colName`：要获取的列名称。

### `getCellConfig(rowIndex, colIndex)`

获取指定单元格配置信息，其中参数定义如下：

* `rowIndex`：要获取的单元格所在行序号；
* `colIndex`：要获取的单元格所在列序号。

### `isRowChecked(rowId)`

检查指定的行是否被选中，其中参数定义如下：

* `rowId`：要要检查对行编号。

### `checkRow(rowIndex, checked)`

手动设置指定行选中状态，其中参数定义如下：

* `rowIndex`：要设置的行序号；
* `checked`：如果为 true 设置为选中，如果为 false 设置为非选中，否则根据之前第状态切换为另一个状态。

### `getCheckItems()`

获取所有被选中的数据项。

### `renderCell(rowIndex, colIndex)`

重新渲染单元格，其中参数定义如下：

* `rowIndex`：要操作的单元格所在行序号；
* `colIndex`：要操作的单元格所在列序号。

### `renderRow(rowIndex)`

重新渲染行，其中参数定义如下：

* `rowIndex`：要操作的行序号。

### `renderData()`

重新渲染所有行及单元格。

### `renderScrolls()`

重新渲染滚动条。

### `renderFixeds()`

重新渲染固定的行和列。

### `render()`

重新从数据源获取数据并渲染整个数据表格，包括行、列、滚动条等。

### `setScrollbarOffset(offsetX, offsetY)`

设置滚动条位置，其中参数定义如下：

* `offsetX`：滚动条距离左侧的距离，如果设置为 `null`，则不设置左侧滚动条距离；
* `offsetY`：滚动条距离上方的距离，如果设置为 `null`，则不设置上方滚动条距离。

### `scroll(scrollLeft, scrollTop)`

设置滚动距离，其中参数定义如下：

* `scrollLeft`：水平滚动距离，如果设置为 `null`，则不设置水平滚动距离；
* `scrollTop`：垂直滚动距离，如果设置为 `null`，则不设置垂直滚动距离。

## 事件

### `onRender`

当数据表格重新渲染后触发。

```js
// 在初始化的时候设置事件回调函数
$('#dataGrid').datagrid({
    onRender: function() {
        // 表格已重新渲染
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#dataGrid').on('onRender', function(event) {
    // 表格已重新渲染
});
```

### `onScroll`

当滚动位置发生变更时触发，其中回调函数参数包括：

* `scrollLeft`：水平滚动距离；
* `scrollTop`：垂直滚动距离；
* `scrollInfo`：其他信息。

```js
// 在初始化的时候设置事件回调函数
$('#dataGrid').datagrid({
    onScroll: function(scrollLeft, scrollLeft, scrollInfo) {
        // 处理滚动后的操作
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#dataGrid').on('onScroll', function(event, scrollLeft, scrollLeft, scrollInfo) {
    // 处理滚动后的操作
});
```

### `onLoad`

当重新从数据源加载数据后触发，其中回调函数参数包括：

* `result`：如果加载成功，则为加载后的数据列表，否则为 `false`。

```js
// 在初始化的时候设置事件回调函数
$('#dataGrid').datagrid({
    onLoad: function(result) {
        if (result !== false) {
            console.log('数据加载成功', result);
        }
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#dataGrid').on('onLoad', function(event, result) {
    if (result === false) {
        console.log('数据加载失败。');
    }
});
```

<script src="dist/lib/selectable/zui.selectable.js"></script>
<script src="dist/lib/datagrid/zui.datagrid.js"></script>
<link href="dist/lib/datagrid/zui.datagrid.css" rel="stylesheet">
<script>
function afterPageLoad() {
    // 获取示例数据
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
            var heros = ['力丸', '幻影刺客', '祈求者', '斧王', '巫医', '天辉防御塔', 'Roshan', '嗜血狂魔', '宙斯', '影魔', '米波', '树精卫士'];
            var actions = ['击杀', '拾取', '购买', '治疗'];
            var items = ['圣剑', '虚灵之刃', '真视宝石', '恐鳌之心', '远行鞋', '治疗指环', '黑皇杖', '刷新球', '金箍棒', '蝴蝶', '诡计之雾', '显影之尘', '侦查守卫', '岗哨守卫', '漩涡', '天堂之戟', '刃甲', '希瓦的守护', '强袭胸甲', '阿托斯之棍', '银月之晶', '斯嘉蒂之眼', '玲珑心', '撒旦之邪力', '否决挂饰', '隐刀', '血棘', '邪恶镰刀', '白银之锋', '辉耀', '代达罗斯之殇', '幻影斧', '林肯法球', '阿哈利姆神杖', '死灵书'];
            var runes = ['赏金神符', '双倍神符', '魔法神符', '极速神符', '不朽之守护', '奶酪'];
            var cols = [
                {label: '时间', name: 'time', width: 130, valueType: 'gametime', sort: true},
                {label: '英雄', name: 'hero', width: 80},
                {label: '动作', name: 'action', width: 80},
                {label: '队友', name: 'teammate', width: 80},
                {label: '敌人', name: 'enemy', width: 80},
                {label: '物品/神符', name: 'item', width: 80},
                {label: '获得经验', name: 'gotexps', width: 80, valueType: 'number'},
                {label: '获得金钱', name: 'gotgolds', width: 80, valueType: 'number'},
                {label: '累计经验', name: 'exps', width: 80, valueType: 'number'},
                {label: '剩余金钱', name: 'golds', width: 80, valueType: 'number'},
                {label: '描述', name: 'desc', width: 'auto', minWidth: 200},
                {label: '累计人头', name: 'kills', width: 110, valueType: 'number'},
            ];
            var createDataItem = function(index) {
                var luckNumber = parseInt((Math.sin(index + 1) + '').substr(3));
                var time = 600 + 5*index + getLuckInt(0, 5, luckNumber);
                var action = getLuckData(actions, null, null, luckNumber);
                var heroIndex = getLuckInt(0, action === '击杀' ? 6 : 4, luckNumber);
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
                    case '击杀':
                        enemy = getLuckData(heros, 6, 9, luckNumber);
                        gotExps += getLuckInt(0, 1000 + index * 10, luckNumber);
                        gotGolds += getLuckInt(0, 200 + index * 8, luckNumber);
                        if (hero === '力丸') {
                            action = '偷摸';
                        } else if (hero === '斧王') {
                            action = '斩杀';
                        }
                        break;
                    case '购买':
                        item = getLuckData(items, null, null, luckNumber);
                        break;
                    case '拾取':
                        item = getLuckData(runes, null, null, luckNumber);
                        if (item === '赏金神符') {
                            gotExps += getLuckInt(0, 50 + index, luckNumber);
                            gotGolds += getLuckInt(0, 50 + index * 2, luckNumber);
                        }
                        break;
                    case '治疗':
                        teammate = getLuckData(heros, 0, 4, luckNumber);
                        if (hero === '巫医') {
                            action = '奶';
                        }
                        break;
                }
                heroData.golds += gotGolds;
                heroData.exps += gotExps;
                var desc = hero + action + '了“' + (item || teammate || enemy) + '”';
                if (gotGolds) {
                    desc += '，获得了金钱 ' + gotGolds;
                }
                if (gotExps) {
                    desc += '，' + (gotGolds ? '并' : '') + '获得了经验 ' + gotExps;
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
    $('#datagridExample').datagrid({
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
        hoverCell: true
    });
    var simpleDataSource = {
          cols: sampleData.dataSource.cols,
          data: sampleData.generate(50),
      };
    $('#tableDataGridExample').datagrid({
        height: 180
    });
    $('#remoteDataGridExample').datagrid({
        height: 'page',
        states: {
            pager: {page: 1, recPerPage: 5},
        },
        dataSource: {
            cols:[
                {name: 'time', label: '时间', width: 132},
                {name: 'hera', label: '英雄', width: 134},
                {name: 'action', label: '动作', width: 109},
                {name: 'target', label: '目标', width: 109},
                {name: 'desc', label: '描述', width: 287}
            ],
            remote: function(params) {
                return {
                    // 原创请求地址
                    url: 'docs/partial/remote-data-' + params.page + '.json',
                    // 请求类型
                    type: 'GET',
                    // 数据类型
                    dataType: 'json'
                };
            }
        }
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
            // date 值转换器会影响所以 valueType 为 `date` 的列
            gametime: {
                getter: function(dataValue, cell, dataGrid) {
                    return '第' + (Math.floor(dataValue%60)) + '分钟第' + (dataValue%60) + '秒';
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
