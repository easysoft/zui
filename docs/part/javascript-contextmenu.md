# 上下文菜单

上下文菜单插件允许你让用户在鼠标所在的位置（或附近）弹出一个菜单面板，提供预设的列表选项供用户点击选择。

<div class="alert alert-warning">
  <h4>兼容性问题</h4>
  <p>在触摸屏及移动设备上无法启用需要右键点击触发的上下文菜单。</p>
</div>

有被动式和主动式两种方式来弹出上下文菜单。

## 被动式

被动式使用 `$().contextmenu(options)` 初始化上下文菜单。此方式自动监听所选操作元素上的 `contextmenu` 鼠标事件（可以通过 `trigger` 选项更改监听事件），在事件触发时弹出上下文菜单。

<div class="example hl-primary" id="contextMenuExample1">
在此区域点击右键显示上下文菜单。
  <div class="text-info"></div>
</div>

```html
<div class="hl-primary" id="contextMenuExample1">
在此区域点击右键显示上下文菜单。
  <div class="text-info"></div>
</div>
```

```js
$('#contextMenuExample1').contextmenu({
    items: [{
        label: '新建项目',
        onClick: function() {
            alert('你点击了新建项目');
        }
    }, {
      type: 'divider'
    }, {
        label: '复制',
    }, {
        label: '剪切',
    }, {
        label: '粘贴',
    }],
    onClickItem: function(item, e) {
        $('#contextMenuExample1 .text-info').text('你刚刚点击了 "' + item.label + '"');
    }
});
```

## 主动式

主动式使用 `$.zui.ContextMenu.show(items, options, callback)` 显示上下文菜单。此方式可以手动在合适的时机（如点击某个按钮时）主动弹出上下文菜单。

主动式 `$.zui.ContextMenu.show` 方法参数定义如下：

* `items`：菜单条目对象数组；
* `options`：菜单自定义选项；
* `callback`：菜单显示完成的回调函数。

<div class="example">
  <button id="contextMenuExample2" type="button" class="btn btn-primary">点击按钮弹出上下文菜单</button>
</div>

```html
<button id="contextMenuExample2" type="button" class="btn btn-primary">点击按钮弹出上下文菜单</button>
```

```js
$('#contextMenuExample2').on('click', function(e) {
    $.zui.ContextMenu.show([{
        label: '新建项目',
        onClick: function() {
            alert('你点击了新建项目');
        }
    }, {
        type: 'divider'
    }, {
        label: '复制',
    }, {
        label: '剪切',
    }, {
        label: '粘贴',
    }], {
        event: e
    }, function() {
        console.log('上下文菜单已显示。');
    });
});
```

## 选项

大部分选项同时适用与主动式和被动式，一些特殊的选项只适用于单一方式会加以注明。

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
      <td><code>items</code></td>
      <td>菜单条目数组</td>
      <td>例如: `[{label: '复制'}]`，或者使用回调函数 `function(options)`</td>
      <td>菜单条目对象可用属性参加下文；当使用回调函数时可以使用函数动态的返回菜单条目来创建菜单，毁掉函数参数 `options` 为菜单创建的所有选项对象。</td>
    </tr>
    <tr>
      <td><code>x</code>（仅主动式）</td>
      <td>菜单弹出时水平方向位置（距离页面窗口左侧）</td>
      <td>例如 `100`</td>
      <td>如果是从页面鼠标事件对象获取，通常是 `event.clientX` 属性。</td>
    </tr>
    <tr>
      <td><code>y</code>（仅主动式）</td>
      <td>菜单弹出时垂直方向位置（距离页面窗口顶部）</td>
      <td>例如 `50`</td>
      <td>如果是从页面鼠标事件对象获取，通常是 `event.clientY` 属性。</td>
    </tr>
    <tr>
      <td><code>event</code>（仅主动式）</td>
      <td>菜单弹出触发时的鼠标事件对象</td>
      <td>例如点击按钮时回调函数的 `event` 对象</td>
      <td>如果指定了此对象，则 `x` 和 `y` 选项无需手动指定，会自动通过事件对象进行计算。</td>
    </tr>
    <tr>
      <td><code>trigger</code>（仅被动式）</td>
      <td>显示菜单的触发事件</td>
      <td>默认为 `'contextmenu'`</td>
      <td>可以为 `'mousedown'`、`'click'` 等鼠标事件。</td>
    </tr>
    <tr>
      <td><code>selector</code>（仅被动式）</td>
      <td>触发事件选择器</td>
      <td>默认为 `''`</td>
      <td>可以使用 jQuery 选择器来指定在哪些元素上响应触发事件，例如设置此选项为 `'li'`，则只在 `<li>` 元素上触法菜单显示。</td>
    </tr>
    <tr>
      <td><code>animation</code></td>
      <td>菜单显示时的动画选项</td>
      <td>默认为 `false`，不启用动画效果</td>
      <td>
        <p>可用的动画效果包括：</p>
        <ul>
          <li>`fade`：启用渐隐渐现效果；</li>
          <li>`scale`：启用缩放效果；</li>
          <li>`fade scale`：同时启用渐隐渐现效果和缩放效果。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>duration</code></td>
      <td>动画效果执行的时间</td>
      <td>默认为 `200`</td>
      <td>单位为毫秒</td>
    </tr>
    <tr>
      <td><code>itemCreator</code></td>
      <td>菜单条目元素生成器</td>
      <td>默认为 `null`，或 `function(item, index, options)`</td>
      <td>
        <p>如果指定了回调函数，则在创建菜单条目元素时，使用此方法来生成每个菜单条目的 $dom 元素，需要返回 html 代码或者 jQuery 元素对象。回调函数各项参数定义如下：</p>
        <ul>
          <li>`item`，当前操作的菜单项对象；</li>
          <li>`index`，当前操作的菜单项在菜单中的索引（从 0 开始）；</li>
          <li>`options`，要创建的菜单所有选项；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>onClickItem</code></td>
      <td>当用户点击了菜单项时的回调函数</td>
      <td>默认为 `null`，或 `function(item, $item, e)`</td>
      <td>
        <p>回调函数个参数定义如下：</p>
        <ul>
          <li>`item`，当前操作的菜单项对象；</li>
          <li>`$item`，当前点击的菜单项元素；</li>
          <li>`e`，鼠标点击事件对象；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>onShow</code></td>
      <td>准备显示菜单时的回调函数</td>
      <td>默认为 `null`，或 `function()`</td>
      <td>
      </td>
    </tr>
    <tr>
      <td><code>onShown</code></td>
      <td>已经完成显示菜单时的回调函数</td>
      <td>默认为 `null`，或 `function()`</td>
      <td>
      </td>
    </tr>
    <tr>
      <td><code>onHide</code></td>
      <td>准备隐藏菜单时的回调函数</td>
      <td>默认为 `null`，或 `function()`</td>
      <td>
      </td>
    </tr>
    <tr>
      <td><code>onHidden</code></td>
      <td>已经完成隐藏菜单时的回调函数</td>
      <td>默认为 `null`，或 `function()`</td>
      <td>
      </td>
    </tr>
  </tbody>
</table>


## 菜单条目对象属性

菜单条目数组中的每个对象对应菜单列表上的一个条目。每一个菜单条目对象上的可用属性包括：

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
      <td><code>type</code></td>
      <td>条目类型</td>
      <td>默认 `''`</td>
      <td>
        <p>默认可用的类型包括：</p>
        <ul>
          <li>`''` 或 `'item'`：默认可点击的条目；</li>
          <li>`divider` 或 `'seperator'`：分割线；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>label</code></td>
      <td>条目显示的内容</td>
      <td>`''`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>html</code></td>
      <td>是否使用将条目内容作为 html 显示</td>
      <td>`false`(默认)</td>
      <td>如果使用 `true` 则会使用 jQuery 的 `$().html()` 方法来插入内容到界面上，要启用此选项确保要插入的内容是安全的。</td>
    </tr>
    <tr>
      <td><code>url</code></td>
      <td>条目作为链接时的链接地址</td>
      <td>默认 `'###'`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>className</code></td>
      <td>条目元素上要添加的类</td>
      <td>默认 `''`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>style</code></td>
      <td>条目元素上要添加的样式</td>
      <td>默认 `null`</td>
      <td>例如 `{color: 'red'}`</td>
    </tr>
    <tr>
      <td><code>onClick</code></td>
      <td>当点击此条目时的回调函数</td>
      <td>默认为 `null`, function(event)</td>
      <td>
        <p>回调函数参数定义如下：</p>
        <ul>
          <li>`event`：鼠标点击事件对象；</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

当一个菜单条目对象只有显示文本时关键信息或该对象表示分割线时还可以简单使用字符串来表示。

例如：

* `'divider'`、`'-'`、`'|'` 都相当于 `{type: 'divider'}`；
* `'复制'` 相当于 `{label: '复制'}`。

菜单条目数组也可以简写完如下形式：

```js
// 简写形式
var items1 = ['新建项目', '-', '复制', '粘贴'];

// 完整写法
var items2 = [
    {label: '新建项目'},
    {type: 'divider'},
    {label: '复制'},
    {label: '粘贴'}
];
```

## 方法

### `show(options, callback)`

立即显示菜单。当使用主动式时，该方法还有如下形式：`show(items, options, callback)`。

主动式用法：

```js
var items = ['新建项目', '-', '复制', '粘贴'];
$.zui.ContextMenu.show(items, {x: 100, y: 100});
```

被动式用法：

```js
// 获取实例对象
var contextMenu = $('#myContextMenu').data('zui.contextmenu');

// 调用实例方法
contextMenu.show({x: 100, y: 100});
```

### `hide(callback)`

立即隐藏菜单。

主动式用法：

```js
$.zui.ContextMenu.hide();
```

被动式用法：

```js
// 获取实例对象
var contextMenu = $('#myContextMenu').data('zui.contextmenu');

// 调用实例方法
contextMenu.hide();
```

### `listenMouseMove()`（仅主动式）

监听鼠标移动位置。调用此方法之后，会自动监听并记录当前用户鼠标位置，在调用 `show()` 方法时不再需要使用 `x`、`y`、`event` 等选项来手动指定弹出位置。

用法：

```js
$.zui.ContextMenu.listenMouseMove();
```

### `stopListenMouse()`（仅主动式）

停止监听鼠标移动位置。

用法：

```js
$.zui.ContextMenu.stopListenMouse();
```

### `destory()`（仅被动式）

销毁元素上绑定的对象实例，执行此方法之后不再监听特定事件自动弹出显示上下文菜单。

用法：

```js
// 获取实例对象
var contextMenu = $('#myContextMenu').data('zui.contextmenu');

// 调用实例方法
contextMenu.destory();
```

<script>
function afterPageLoad() {
    $('#contextMenuExample1').contextmenu({
        items: [{
            label: '新建项目',
            onClick: function() {
                alert('你点击了新建项目');
            }
        }, {
          type: 'divider'
        }, {
            label: '复制',
        }, {
            label: '剪切',
        }, {
            label: '粘贴',
        }],
        onClickItem: function(item, e) {
            $('#contextMenuExample1 .text-info').text('你刚刚点击了 "' + item.label + '"');
        }
    });

    $('#contextMenuExample2').on('click', function(e) {
        $.zui.ContextMenu.show([{
            label: '新建项目',
            onClick: function() {
                alert('你点击了新建项目');
            }
        }, {
            type: 'divider'
        }, {
            label: '复制',
        }, {
            label: '剪切',
        }, {
            label: '粘贴',
        }], {
            event: e
        }, function() {
            console.log('上下文菜单已显示。');
        });
    });
}
</script>
