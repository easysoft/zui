# 数据表格②

数据表格2（在下文中简称为数据表格）是一个全新的数据表格视图组件，相比较[数据表格](#view/datatable)提供更强大的功能，支持远程数据显示、排序、搜索以及海量数据显示。

## 综合示例

<div class="example">
  <div id="datagridExample" class="datagrid">
    <header class="clearfix">
      <div class="input-control search-box search-box-circle has-icon-left has-icon-right pull-right" id="searchboxExample">
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

### 数据源列定义

数据表格上要显示的列通过列定义数组来设置。一个列定义对象数组，用于定义数据源上要显示的列，数组内对象的顺序即是列排列显示的顺序。每一个列定义对象包含如下属性：

* `name`: 列上要显示的数据属性名称；
* `label`: 可选，列标题文本，如果不定义此属性则使用 `name` 属性作为标题文本；
* `html`: 默认为 `false`，如果设置为 `true`，则在渲染列时将内容作为 html 源码更新到页面上；
* `style`: 可选，在该列上所以单元格元素上要添加的样式（使用 jQuery CSS 样式定义对象规则）；
* `className`: 可选，在该列上所有单元格元素上要添加的类名；
* `valueType`：该列值类型，默认 `string`；
* `valueOperator`: 可选，该列上的值转换器；
* `sort`：是否为当前列开启排序功能，默认为 `true`，如果设置为 `false`，即便 `sortable` 选项设置为 `true` 也无法使用该列进行排序；
* `sortFunc`：可选，当使用该列排序时的比较函数。

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

数据表格支持安装任意列进行排序，并且可以自定义排序比较函数。要启用排序功能需要将 `sortable` 选项设置为 `true`。当启用排序功能后，标题行（第一行）上的单元格会显示排序指示图标，用户可以点击标题行上的单元格按照所在列进行排序，排序方式会在每次点击时进行顺序切换，切换顺序为升序排序、降序排序、不排序。如果需要禁用根据某些列排序，则可以在列定义中将 `sort` 属性设置为 `false`。

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
<div id="datagridPageExample" class="datagrid"></div>
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

## 搜索

数据表格支持对静态数据源和原创数据源数据进行检索。当使用远程数据源时，服务器应该使用

## 行选择

## 跨行跨列的单元格

## 可计算单元格

## 自适应列宽

## 自定义外观

## 选项

## 属性和方法

## 事件

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
                var luckNumber = Number.parseInt((Math.sin(index + 1) + '').substr(3));
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
            data: sampleData.generate(200),
            cache: true,
        },
        valueOperator: sampleData.valueOperator,
        states: {
            pager: {page: 1, recPerPage: 10},
        },
        height: 300,
        renderDelay: 200,
    });
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
        dataSource: {
            cols: sampleData.dataSource.cols,
            data: sampleData.generate(100),
        },
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
        dataSource: {
            cols: sampleData.dataSource.cols,
            data: sampleData.generate(2000),
        },
        states: {
            pager: {page: 1, recPerPage: 20},
        },
        valueOperator: sampleData.valueOperator,
        sortable: true,
        height: 300,
    });
}
</script>
