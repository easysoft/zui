section: view
id: datatable
description: 可以固定列和表头的增强表格
icon: icon-table
filter: shujubiaoge sjbg
---

# 数据表格

<div class="alert alert-info">
  <h4>数据表格即将淘汰</h4>
  <p>数据表格即将淘汰，请使用全新的数据表格2，更多功能，<a class="alert-link" href="#view/datagrid">立即使用</a>。</p>
</div>

数据表格插件是一个展示大量数据的强力工具。

<div class="alert alert-warning">
  <h4>兼容性提示</h4>
  <ul>
    <li>在触摸屏上无法支持拖拽滚动功能；</li>
    <li>在小屏幕上无法获得最佳体验。</li>
  </ul>
</div>

数据表格的主要思路是将一个表格的列在水平方向上分为三部分（以下称为称左侧列，中间列和右侧列），他们分别有如下特性：

* 左侧列：所有左侧列的总宽度可以设置为表格的百分比或一个固定宽度，但设定后，不允许再次改变，左侧列中的所有列宽表现与普通表格一致，你可以单独设置某一列的宽度，其他列会自适应，推荐除了一个列宽设置为 auto，其他列都设置为固定列宽。
* 右侧列：右侧列的行为与中间列一致；
* 中间列：所有中间列的总宽度需要指定，最小值为表格宽度减去左侧列和右侧列宽度，超过最小值则允许水平滚动中间列（**也就是说如果需要中间的所有列水平滚动则需要保证中间所有列的宽度总和超过中间区域宽度**）。

## 简单应用

### 引入资源

数据表格为独立组件，你需要从本地或 CDN 单独引入 lib 目录下的资源：

```html
<link href="lib/datatable/zui.datatable.min.css" rel="stylesheet">
<script src="lib/datatable/zui.datatable.min.js"></script>
```

### 例子

在下面的例子中，表格左侧5列和右侧两列分别固定在两侧，其宽度不受外部容器宽度影响，中间位置的列则在宽度不够时会隐藏超出的部分，隐藏的列可以通过拖拽表头移动到可视区域，也可以使用下方的滚动条来调整隐藏的列显示区域。当向下滚动页面时，如果表头一旦处于不可见的位置时，则表头会调整样式而固定在页面顶端保持一直可见。

<div class="example">
  <div class="datatable"></div>
</div>

```html
<!-- HTML 代码 -->
<table class="table datatable">
  <thead>
    <tr>
      <!-- 以下两列左侧固定 -->
      <th>#</th>
      <th>时间</th>

      <!-- 以下三列中间可滚动 -->
      <th class="flex-col" data-width="100">事件类型</th> 
      <th class="flex-col" data-width="200">描述</th>
      <th class="flex-col" data-width="300">相关人物</th>

      <!-- 以下列右侧固定 -->
      <th>评分</th>
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
/* 初始化数据表格 */
$('table.datatable').datatable();
```

## 启用排序功能

只需要更改一个参数即可启用数据排序功能。DataTable支持对数字、日期或字符串进行升序和降序排序。

<div class="example">
  <div class="datatable" data-sortable="true"></div>
</div>

```js
$('table.datatable').datatable({sortable: true});
```

## 高亮选中行

<div class="example">
  <div class="datatable" data-checkable="true"></div>
</div>

```js
$('table.datatable').datatable({checkable: true});
```

## 综合示例

你可以启用所有增强选项。

<div class="example">
  <div class="datatable" data-checkable="true" data-sortable="true"></div>
</div>

```js
$('table.datatable').datatable({checkable: true, sortable: true});
```

## 选项

<table class="table-bordered table">
  <thead>
    <tr><th>参数</th>
    <th>可选值</th>
    <th>说明</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>`checkable`</td>
      <td>*   `false` (默认)
*   `true`</td>
      <td>是否启用行选中状态维护，启用后将在列首显示多选按钮</td>
    </tr>
    <tr>
      <td>`checkByClickRow`</td>
      <td>*   `false`
*   `true` (默认)</td>
      <td>是否点击行的任意位置来切换选中状态

仅在`checkable`选项为`true`时生效</td>
    </tr>
    <tr>
      <td>`checkedClass`</td>
      <td>字符串，默认为`"active"`</td>
      <td><tr></tr></td>
    </tr>
    <tr>
      <td>`storage`</td>
      <td>*   `false`
*   `true` (默认)</td>
      <td>是否启用本地存储来增强用户体验。启用该选项之后，表格排序状态及选中的行在用户刷新页面之后仍然会还原为之前的状态。</td>
    </tr>
    <tr>
      <td>`sortable`</td>
      <td>*   `false` (默认)
*   `true`</td>
      <td>是否启用表格排序，点击表头能够以该列来为数据排序</td>
    </tr>
    <tr>
      <td>`fixedHeader`</td>
      <td>*   `false` (默认)
*   `true`</td>
      <td>是否固定表格头部，如果启用当页面滚动到下方导致表头不可见时重新定位表头到页面顶部保持可见。<span class="text-warning">固定头部是相对页面 `<body>` 元素，如果数据表格已经在一个已被固定的元素中，此功能可能无法生效。</span></td>
    </tr>
    <tr>
      <td>`fixedHeaderOffset`</td>
      <td>数字，默认值为`0`</td>
      <td>当标题固定时距离顶部的高度，当页面顶部包含其他固定的内容时需要调整该值

仅在`fixedHeader`选项为`true`时生效</td>
    </tr>
    <tr>
      <td>`fixedLeftWidth`</td>
      <td>数字或者表示百分比的字符串，默认值为`"30%"`</td>
      <td>左侧固定的所有列的宽度，可以指定为百分比</td>
    </tr>
    <tr>
      <td>`fixedRightWidth`</td>
      <td>数字或者表示百分比的字符串，默认值为`"30%"`</td>
      <td>右侧固定的所有列的宽度，可以指定为百分比</td>
    </tr>
    <tr>
      <td>`flexHeadDrag`</td>
      <td>*   `false`
*   `true` (默认)</td>
      <td>是否能够通告拖拽可变区域的头部来调整可见区域</td>
    </tr>
    <tr>
      <td>`scrollPos`</td>
      <td>*   `'in'` (默认)
*   `'out'`</td>
      <td>滚动条位置</td>
    </tr>
    <tr>
      <td>`rowHover`</td>
      <td>*   `false`
*   `true` (默认)</td>
      <td>是否在行上启用鼠标悬停样式</td>
    </tr>
    <tr>
      <td>`colHover`</td>
      <td>*   `false`
*   `true` (默认)</td>
      <td>是否在列上启用鼠标悬停样式，仅当鼠标悬停表头时生效</td>
    </tr>
<!--       <tr>
      <td><code>customizable</code></td>
      <td>
        <ul>
          <li><code>false</code> (默认)</li>
          <li><code>true</code></li>
        </ul>
      </td>
      <td>是否能够通过拖拽表头边缘来更改列宽</td>
    </tr> -->
    <tr>
      <td>`fixCellHeight`</td>
      <td>`true`（默认），`false`</td>
      <td>是否在渲染之后自动调整单元格行高，因为数据表格将列分成多个部分，可能存在同一行上的行高不一致，开启该选项可以自动进行调整，关闭此选项可以提高表格渲染效率（关闭后仍然可以使用 CSS 来限制行高）。</td>
    </tr>
    <tr>
      <td>`minColWidth`</td>
      <td>数字，默认为`20`</td>
      <td>列的最小宽度</td>
    </tr>
    <tr>
      <td>`minFixedLeftWidth`</td>
      <td>数字，默认为`200`</td>
      <td>左侧所有固定列的最小宽度</td>
    </tr>
    <tr>
      <td>`minFixedRightWidth`</td>
      <td>数字，默认为`200`</td>
      <td>右侧所有固定列的最小宽度</td>
    </tr>
    <tr>
      <td>`minFlexAreaWidth`</td>
      <td>数字，默认为`200`</td>
      <td>中间可变区域最小宽度</td>
    </tr>
    <tr>
      <td>`selectable`</td>
      <td>`true`（默认），`false`，`{...}`</td>
      <td>是否启用 [拖拽选取](#javascript/selectable) 功能，如果启用则可以直接将该选项的值设置为拖拽选取插件所支持的选项。</td>
    </tr>
  </tbody>
</table>

```js
$('table.datatable').datatable({
    checkable: true,
    sortable: true,
    checkedClass: "checked",
    minFixedLeftWidth: 300
    // 更多参数...
});
```

选项也可以直接使用`data-*`属性写在要增强的HTML标签上。

## 事件

Datatable中的事件既可以使用jQuery原生方法来绑定，也可以写在选项中。

<table class="table table-bordered">
  <thead>
    <tr>
      <th>事件名称</th>
      <th>jQuery事件名称</th>
      <th>说明</th>
      <th>事件参数</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`afterLoad`</td>
      <td>`"afterLoad.zui.datatable"`</td>
      <td>数据加载完毕后调用</td>
      <td>*   `event.data` 表格数据</td>
    </tr>
    <tr>
      <td>`ready`</td>
      <td>`"ready.zui.datatable"`</td>
      <td>渲染完毕后调用，可以在此事件中为DOM绑定其他事件</td>
      <td>无</td>
    </tr>
    <tr>
      <td>`sort`</td>
      <td>`"sort.zui.datatable"`</td>
      <td>表格重新排序之后</td>
      <td>*   `event.sorter.index` 数字，排序所依据的列序号
*   `event.sorter.sortUp` 排序方向，`true`为升序，`false` 为降序</td>
    </tr>
    <tr>
      <td>`sizeChanged`</td>
      <td>`"sizeChanged.zui.datatable"`</td>
      <td>列宽发生更改时发生</td>
      <td>*   `event.changes.change` 字符串，变化的类型，`"fixedLeftWidth"` 为左侧所有固定列总宽度发生变化，`"fixedRightWidth"` 为右侧所有固定列总宽度发生变化，`"colWidth"` 为单个列宽度发生变化
*   `event.changes.oldWidth` 数字，发生变化之前的宽度值
*   `event.changes.newWidth` 数字，新的宽度值
*   `event.changes.colIndex` 数字，如果是单个列宽发生变化，则该值指示发生变化列的序号</td>
    </tr>
    <tr>
      <td>`checksChanged`</td>
      <td>`"checksChanged.zui.datatable"`</td>
      <td>当行的选中状态发生变化时发生</td>
      <td>*   `event.checks.checkedAll` 如果为`true` 标识当前所有行都被选中，反之则表示至少有一行为被选中
*   `event.checks.checks` 数字数组，包含所有已选中的行的ID</td>
    </tr>
  </tbody>
</table>

#### 使用选项处理事件

```js
$('table.datatable').datatable({
    sort: function(event) {
        console.log(event);
        // console.log("表格已重新排序！");
        // 处理 sort 事件
        // ...
    }
});
```

#### 使用jQuery方法绑定事件处理函数

```js
$('table.datatable').datatable().on("sort.zui.datatable", function(event) {
    console.log(event);
    // console.log("表格已重新排序！");
    // 处理 sort 事件
    // ...
});
```

## 属性

当 `checkable` 选项被启用时可以使用数据表格实例上的 `checks` 属性来获取当前已选择行的状态。

```js
// 获取数据表格实例对象
var myDatatable = $('table.datatable').data('zui.datatable');

// 获取行选中数据
var checksStatus = myDatatable.checks;
```

`checks` 属性值为一个对象包含如下属性：

 - `checkedAll`：是否已选中所有行；
 - `checks`：一个数组包含所有被选中的行编号；

## 数据配置

### 增强现有表格

直接对一个包含完整头部和数据的普通表格进行增强。DataTable或自动获取所有表头和行上的数据，并配置相关选项。

```html
<!-- 使用Datatable来增强下面的原生表格 -->
<table class="table datatable">
  <!-- 定义表头 -->
  <thead>
    <tr>
      <th data-type="number" data-width="80">#</th>
      <th data-type="date">时间</th>
      <th data-col-class="text-primary">名称</th>
      ...
    </tr>
  </thead>
  <!-- 定义表格数据，每一个tr对应一个数据，不支持跨行内容 -->
  <tbody>
    <tr>...</tr>
    <tr>...</tr>
    ...
  </tbody>
</table>
```

```js
/* 初始化数据表格 */
$('table.datatable').datatable(options);
```

<div class="alert alert-primary-inverse">
  <p>使用增强现有表格的方式能够在DataTable组件不可用时也能够正常显示原表格数据。</p>
</div>

### 在启动选项中初始化数据

通过设置启动选项的`data`属性来初始化数据。

```html
<!-- 使用一个div来显示数据表格 -->
<div class="datatable" data-checkable="true" data-sortable="true"></div>
```

```js
/* 使用选项选项来初始化数据 */
$('table.datatable').datatable({
    data: {
        cols: [
            {width: 80, text: '#', type: 'number', flex: false, colClass: 'text-center'},
            {width: 160, text: '时间', type: 'date', flex: false, sort: 'down'},
            {width: 80, text: '名称', type: 'string', flex: true, colClass: ''}
        ],
        rows: [
            {checked: false, data: [1, '2016-01-18 11:05:15', '名称示例1']},
            {checked: false, data: [2, '2016-01-20 12:06:16', '名称示例2']},
            // 更多数据
        ]
    },
    // 其他选项选项
});
```

### 数据格式

一个完整的数据包含列定义和行数据。类定义在javascript代码中为一个数组，在DOM中为`thead`中的`tr`标签。行数据在javascript中为一个数组，在DOM中为`tbody`中的`td`标签。

```js
{
    // 列定义
    cols: [
        {width: 80, text: '#', type: 'number', flex: false, colClass: 'text-center'},
        {width: 160, text: '时间', type: 'date', flex: false, sort: 'down'},
        {width: 80, text: '名称', type: 'string', flex: true, colClass: ''}
    ],

    // 行数据
    rows: [
        {checked: false, data: [1, '2016-01-18 11:05:15', '名称示例1']},
        {checked: false, data: [2, '2016-01-20 12:06:16', '名称示例2']},
        // 更多数据
    ]
}
```

列定义和行数据定义的大部分非数据属性都可以在原始表格中的`th`和`tr`标签上以`data-*`属性的形式定义。

#### 列定义

每列的可定义属性如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性名称</th>
      <th style="width: 30%">合法值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`text`</td>
      <td>字符串</td>
      <td>定义此列在界面上显示的名称。</td>
    </tr>
    <tr>
      <td>`width`</td>
      <td>`80` | `'80px'` | `'80%'` | `'auto'`(默认)</td>
      <td>定义此列的宽度。</td>
    </tr>
    <tr>
      <td>`flex`</td>
      <td>`true` | `false`(默认)</td>
      <td>定义此列在数据表格中显示在为水平可滚动的区域，在此列之前的没有定义`flex=true`的列则固定在左侧，在此列之后的没有定义`flex=true`的列会固定在右侧。必须为连续的多列的`flex`属性定义为`true`。在DOM中可以为`th`标签增加CLASS `flex-col` 实现，等同于`flex=true`。</td>
    </tr>
    <tr>
      <td>`cssClass`</td>
      <td>字符串</td>
      <td>定义数据表格中此列的附加的CSS CLASS值。</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>`string`(默认) | `number` | `date`</td>
      <td>定义此列数据的类型，目前支持字符串、数字和日期。</td>
    </tr>
    <tr>
      <td>`sort`</td>
      <td>*   `true`（默认）：支持排序；
*   `false`：不支持排序；
*   `'down'`：默认使用降序排序；
*   `'up'`：默认使用升序排序；</td>
      <td>如果排序启用时定义此列是否可以排序。</td>
    </tr>
    <tr>
      <td>`ignore`</td>
      <td>`true` | `false`(默认)</td>
      <td>是否在构建数据表格时忽略该列，不会在页面显示。</td>
    </tr>
  </tbody>
</table>

#### 行数据

每行数据的可定义属性如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性名称</th>
      <th>合法值</th>
      <th>说明</th>
    </tr>
    <tr>
      <td>`id`</td>
      <td>全局唯一字符串</td>
      <td>该行的唯一编号，如果不指定则由程序按顺序生成。</td>
    </tr>
    <tr>
      <td>`checked`</td>
      <td>`true` | `false`(默认)</td>
      <td>此行数据在开始时是否为选中状态。</td>
    </tr>
    <tr>
      <td>`cssClass`</td>
      <td>字符串，默认 `''`</td>
      <td>用于添加到生成的行元素 `<tr>` 上的 CSS 类。</td>
    </tr>
    <tr>
      <td>`css`</td>
      <td>字符串，默认 `''`</td>
      <td>用设置 `<tr>` 上的 `[style]` 属性，用于自定义行样式。</td>
    </tr>
    <tr>
      <td>`data`</td>
      <td>数组</td>
      <td>依次表示此行中每列对应的数据。</td>
    </tr>
  </thead>
</table>

### 更新数据

当数据表格所依据的原始数据或原始表格发生变更时，需要手动调用`load()`方法来更新数据表格。`load(data)`方法允许增加一个参数来使用需要更新的数据。

`data`参数可以为一个回调函数，此回调函数的第一个参数为原始数据，可以直接在回调函数中修改原始数据。

<div class="example">
  <div id="datatableChangeExample" class="datatable datatable-update-example" data-checkable="true" data-sortable="true"></div>
  <button class="btn btn-primary" type="button" id="datatableChangeBtn">更新评分</button>
</div>

```js
// 更改原始表格数据内容
$('table.datatable-origin').find('td.data-for-change').text('更新此单元格');

// 当原始数据发生变更时：
$('table.datatable').datatable('load');
```

```js
// 使用data参数更新数据：
$('table.datatable').datatable('load', {
    cols: [
        {width: 80, text: '#', type: 'number', flex: false, colClass: 'text-center'},
        {width: 160, text: '时间', type: 'date', flex: false, sort: 'down'},
        {width: 80, text: '名称', type: 'string', flex: true, colClass: ''}
    ],
    rows: [
        {checked: false, data: [1, '2016-01-18 11:09:36', '新的名称示例1']},
        {checked: false, data: [2, '2016-01-22 12:06:16', '新的名称示例2']},
        // 更多数据
    ]}
});
```

```js
// 使用data参数可以使用一个回调函数来修改之前的数据：
$('table.datatable').datatable('load', function(data) {
    // 修改第1行的第3列数据值为'新的名称示例1'
    data.rows[0].data[2] = '新的名称示例1';
    // 更多的修改...
});
```

<script src="dist/lib/datatable/zui.datatable.js"></script>
<link href="dist/lib/datatable/zui.datatable.css" rel="stylesheet">
<script>
function onPageLoad() {
    return false;
}
function afterPageLoad() {
    var now = new Date();
    var start = now.getSeconds(),
        calendars = ['success', 'danger', 'important', 'warning', 'info', 'specail', 'primary'],
        rooms = ['A003', 'A004', 'A010', 'A143', 'B008', 'B098', 'B487', 'B340', 'Z000', 'Z431', 'Z018', 'Z864'],
        peoples = ['奥特曼', '行者孙', '地卜师', '绿巨人', 'Catouse', '路人丙'],
        events = ['进食', '喝水', '交谈', '睡觉', '捶打墙壁', '自言自语', '搬动椅子', '唱歌', '上网', '梦游', '观望天花板'],
        eventsTypes = ['happy', 'sad', ':]'],
        tools = ['桌子', '椅子', '水杯', '枪', '随从'],
        descs = ['没有完成', '这次失败了', '徒劳', '很满意', '禁止再次发生', '也行', '情况不明', '发现未知征兆'];
    var dtDataGenerater = function(rowsCount) {
        var data = {
            cols: [
                {width: 100, text: '#', type: 'number', flex: false, colClass: 'text-center'},
                {sort: 'down', width: 160, text: '时间', type: 'date', flex: false, colClass: ''},
                {width: 80, text: '房间', type: 'string', flex: false, colClass: ''},
                {width: 100, text: '人物', type: 'string', flex: false, colClass: ''},
                {width: 'auto', text: '事件', type: 'string', flex: false, colClass: ''},
                {width: 100, text: '事件类型', type: 'string', flex: true, colClass: 'text-center'},
                {sort: false, width: 200, text: '描述', type: 'string', flex: true, colClass: ''},
                {width: 100, text: '相关人物', type: 'string', flex: true, colClass: ''},
                {width: 100, text: '相关物品', type: 'string', flex: true, colClass: ''},
                {width: 60, text: '评分', type: 'number', flex: false, colClass: 'text-center text-important'},
                {sort: false, width: 'auto', text: '操作', type: 'string', flex: false, colClass: ''},
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
