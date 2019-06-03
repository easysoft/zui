# 标签管理器

<div class="alert alert-warning">
  <h4>兼容性提示</h4>
  <ul>
    <li>在移动设备上的浏览器上可能存在兼容性问题。</li>
  </ul>
</div>

## 综合示例

<div class="example">
  <div class="tabs" id="tabsExample"></div>
</div>

```html
<div class="tabs" id="tabsExample"></div>
```

```js
// 定义标签页
var tabs = [{
    title: 'iframe 例子',
    url: 'docs/partial/iframe-tab.html',
    type: 'iframe',
    forbidClose: true
}, {
    title: 'Ajax 例子',
    url: 'docs/partial/remote-tab.html',
    type: 'ajax'
}, {
    title: '自定义例子',
    icon: 'icon-star',
    type: 'custom',
    content: function() {
        return '<div class="alert alert-block alert-success"><p>这里的内容是通过函数动态生成的，每次刷新下面的时间都会更新。</p><p>' + (new Date().format('yyyy-MM-dd hh:mm:ss')) +   '</p></div>';
    }
}, {
    title: 'MZUI',
    url: 'http://zui.sexy/m',
    type: 'iframe'
}, {
    defaultTitle: '无法加载的标签页',
    url: 'http://zui1.sexy'
}];

// 初始化标签页管理器
$('#tabsExample').tabs({tabs: tabs});
```

## 选项

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
      <td><code>tabs</code></td>
      <td>初始标签页列表</td>
      <td>默认为 `[]`</td>
      <td>指定一个标签页对象数组用于定义在标签页管理器初始化后显示的标签页，标签页对象定义参加下文。</td>
    </tr>
    <tr>
      <td><code>defaultTab</code></td>
      <td>默认激活的标签页 ID</td>
      <td>默认为 `null`</td>
      <td>如果设置为空值（`null`）则会在标签页管理器初始化之后激活初始标签页列表中的第一个标签页。</td>
    </tr>
    <tr>
      <td><code>contextMenu</code></td>
      <td>是否启用上下文菜单</td>
      <td>默认为 `true`</td>
      <td>如果设置为 `true` 则在导航上启用上下文菜单方便用户操作标签页，当使用鼠标操作时，通常是点击鼠标右键显示一个菜单。</td>
    </tr>
    <tr>
      <td><code>defaultTabIcon</code></td>
      <td>默认标签页图标</td>
      <td>默认为 `'icon-window'`</td>
      <td>使用 [控件->图标]('#control/icon') 中的图标类名来设置标签页的图标。如果标签页对象中没有指定标签页图标属性则使用此选项作为默认图标。</td>
    </tr>
    <tr>
      <td><code>showMessage</code></td>
      <td>是否显示错误消息</td>
      <td>默认为 `true`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>errorTemplate</code></td>
      <td>错误消息模板字符串</td>
      <td>默认为 `'<div class="alert alert-block alert-danger with-icon"><i class="icon-warning-sign"></i><div class="content">{0}</div></div>'`</td>
      <td></td>
    </tr>
    <tr>
      <td><code>messagerOptions</code></td>
      <td>弹出消息选项</td>
      <td>`null`</td>
      <td>当显示弹出消息时，可以使用此选项定一个对象用于设置[弹出消息](javascript/messager)参数。</td>
    </tr>
    <tr>
      <td><code>lang</code></td>
      <td>当前界面语言</td>
      <td>默认为 `'zh_cn'`</td>
      <td>
        <p>所以可用的选项包括：</p>
        <ul>
          <li>`zh_cn`：使用中文简体界面；</li>
          <li>`zh_tw`：使用中文繁体界面；</li>
          <li>`en`：使用英文界面；</li>
          <li>
            <p>或者指定一个对象来自定义语言文本，例如：</p>
            <pre><code>{
    reload: '重新加载',
    close: '关闭',
    closeOthers: '关闭其他标签页',
    closeRight: '关闭右侧标签页',
    reopenLast: '恢复上次关闭的标签页',
    errorCannotFetchFromRemote: '无法从远程服务器（{0}）获取内容。'
}</code></pre>
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 标签页对象

每个标签页使用一个对象来存储相关信息，通过定义一个标签页对象数组在初始化时传递给初始化函数来定义标签页管理器上的默认标签，当需要动态打开一个标签页时也需要定义标签页对象。标签页对象支持的属性包括：

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
      <td><code>id</code></td>
      <td>标签页的唯一标识</td>
      <td>默认自动生成</td>
      <td>一般不需要指定，如果需要自己管理标签对象，则需要设置一个全局唯一的字符串用于下次获取标签页对象。</td>
    </tr>
    <tr>
      <td><code>type</code></td>
      <td>标签页内容类型</td>
      <td>默认为 `'auto'`</td>
      <td>
        <p>所有可用值包括</p>
        <ul>
          <li>`'iframe'`：使用 iframe 来加载远程页面；</li>
          <li>`'ajax'`：使用 ajax 来加载远程内容；</li>
          <li>`'custom'`：使用 `content` 属性的值做为内容，如果 `content` 属性为函数则使用函数返回值作为内容；</li>
          <li>`'auto'`：自动根据其他属性决定，如果设置了 `url` 属性且设置了 `ajax` 属性则为 `ajax`，否则则为 `iframe` 类型，如果没有设置 `url` 属性为 `custom` 类型。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>url</code></td>
      <td>远程内容地址</td>
      <td>默认 `''`</td>
      <td>当 `type` 属性为 `iframe` 时，此地址为远程页面地址，当 `type` 为 `ajax`，此地址作为远程内容请求地址。</td>
    </tr>
    <tr>
      <td><code>ajax</code></td>
      <td>ajax 请求参数</td>
      <td>默认 `{type: 'GET'}`</td>
      <td>可以使用一个对象来定义 jQuery 的 Ajax 请求参数。</td>
    </tr>
    <tr>
      <td><code>icon</code></td>
      <td>标签页图标</td>
      <td>默认为 `'icon-window'`</td>
      <td>使用 [控件->图标]('#control/icon') 中的图标类名来设置标签页的图标。默认为 `'icon-window'`，此默认值可以使用选项 `defaultTabIcon` 进行设置。</td>
    </tr>
    <tr>
      <td><code>title</code></td>
      <td>标签页标题</td>
      <td>默认为 `''`</td>
      <td>当标签页标题设置为空 `''` 且标签页类型(`type`) 为 `'iframe'` 时会尝试从iframe页面中获取页面标题作为标签页标题。</td>
    </tr>
    <tr>
      <td><code>defaultTitle</code></td>
      <td>标签页默认标题</td>
      <td>默认为 `''`</td>
      <td>当标签页标题设置为空 `''` 且标签页类型(`type`) 为 `'iframe'` 时会尝试从iframe页面中获取页面标题作为标签页标题，如果标签页还没有加载时会使用默认标题。</td>
    </tr>
    <tr>
      <td><code>forbidClose</code></td>
      <td>是否禁止标签页被手动关闭</td>
      <td>默认为 `false`</td>
      <td>如果设置为 `true`，则不允许用户关闭此标签页。</td>
    </tr>
    <tr>
      <td><code>onCreate</code></td>
      <td>当标签页创建后的回调函数</td>
      <td>默认为 `null`</td>
      <td>此回调函数包含一个参数为标签页对象。</td>
    </tr>
    <tr>
      <td><code>onOpen</code></td>
      <td>当标签页打开时的回调函数</td>
      <td>默认为 `null`</td>
      <td>此回调函数包含一个参数为标签页对象。</td>
    </tr>
    <tr>
      <td><code>onClose</code></td>
      <td>当标签页关闭时的回调函数</td>
      <td>默认为 `null`</td>
      <td>此回调函数包含一个参数为标签页对象。</td>
    </tr>
    <tr>
      <td><code>createTime</code>（只读）</td>
      <td>标签页对象创建的时间戳</td>
      <td>默认为 `0`</td>
      <td>当标签页在管理器中创建后可以通过此属性来获取标签页对象创建的时间戳。</td>
    </tr>
    <tr>
      <td><code>openTime</code>（只读）</td>
      <td>标签页上次打开的时间戳</td>
      <td>默认为 `0`</td>
      <td>当标签页在管理器中创建后可以通过此属性来获取标签页上次打开的时间戳。</td>
    </tr>
    <tr>
      <td><code>loaded</code>（只读）</td>
      <td>标签页上次内容加载的时间戳</td>
      <td>默认为 `0`</td>
      <td>当标签页在管理器中创建后可以通过此属性来获取标签页上次内容加载的时间戳。</td>
    </tr>
  </tbody>
</table>

## 方法

### `open(tab)`

打开并激活一个标签页，如果此标签页是首次打开，则打开后自动加载标签页内容。此方法参数定义：

* `tab`：标签页对象，或者使用一个远程服务器地址字符串作为参数自动创建一个标签页对象；
* `forceReload`：可选参数，如果设置为 `true`，则强制标签页重新加载内容，即使标签页内容已经加载过，相当于重新载入（刷新）功能。

```js
// 获取标签页管理器对象实例
var myTabs = $('#myTabs').data('zui.tabs');

// 要打开的标签页对象
var myTab = {
    url: 'http://zui.sexy',
    type: 'iframe',
    defaultTitle: 'ZUI 官方网站'
};
// 打开标签页
myTabs.open(myTab);
```

```js
// 当标签页类型为 iframe 时，还可以直接使用 iframe 地址作为参数
myTabs.open('http://zui.sexy');
```

### `close(tabId, forceClose)`

关闭标签页。此方法参数定义：

* `tabId`：要关闭的标签对象 ID 值；
* `forceClose`：可选参数，如果设置为 `true`，则强制关闭强制关闭标签页，即使标签页属性 `forbidClose` 被设置为 `true`。

```js
// 获取标签页管理器对象实例
var myTabs = $('#myTabs').data('zui.tabs');

// 关闭标签页
myTabs.close('myCloseTabId');
```

### `getTab(tabId)`

根据标签页 ID 获取标签页对象。此方法参数定义：

* `tabId`：要获取的标签对象 ID 值。

```js
// 获取标签页管理器对象实例
var myTabs = $('#myTabs').data('zui.tabs');

// 获取当前激活的标签页对象
var mySpecialTab = myTabs.getTab('mySpecialTabId');
console.log('获取的签页标题为', mySpecialTab.title);
```

### `getActiveTab()`

获取当前激活的标签页对象。

```js
// 获取标签页管理器对象实例
var myTabs = $('#myTabs').data('zui.tabs');

// 获取当前激活的标签页对象
var myActiveTab = myTabs.getActiveTab();
console.log('当前激活的标签页标题为', myActiveTab.title);
```

### `reload(tab)`

重新载入标签页内容。此方法参数定义：

* `tab`：要重新载入的标签页对象，如果不指定此参数则重新载入当前激活的标签页。

```js
// 获取标签页管理器对象实例
var myTabs = $('#myTabs').data('zui.tabs');

// 重新载入当前激活的标签页
myTabs.reload();

// 获取要载入的标签页对象
var myTab = myTabs.getTab('reloadTabId');

// 重新载入标签页
myTabs.reload(myTab);
```

### `closeOthers(tabId)`

关闭当前标签页之外的其他标签页。该方法参数定义：

`tabId`：当前标签页ID。

```js
// 获取标签页管理器对象实例
var myTabs = $('#myTabs').data('zui.tabs');

// 关闭当前标签页之外的其他标签页
myTabs.closeOthers('tabID');
```

### `closeRight(tabId)`

关闭导航上当前标签页右侧的标签页。该方法参数定义：

`tabId`：当前标签页ID。

```js
// 获取标签页管理器对象实例
var myTabs = $('#myTabs').data('zui.tabs');

// 关闭导航上当前标签页右侧的标签页
myTabs.closeRight('tabID');
```

### `closeAll()`

关闭导航所有标签页。

```js
// 获取标签页管理器对象实例
var myTabs = $('#myTabs').data('zui.tabs');

// 关闭所有标签页
myTabs.closeAll();
```

### `reopen()`

重新打开上次关闭的标签页。

```js
// 获取标签页管理器对象实例
var myTabs = $('#myTabs').data('zui.tabs');

// 重新打开上次关闭的标签页
myTabs.reopen();
```

## 事件

### `onOpen`

当标签页被打开时触发。事件回调函数 `this` 为当前标签页管理器实例，参数定义如下：

* `tab`：当前被打开的标签页对象。

```js
// 在初始化的时候设置事件回调函数
$('#myTabs').tabs({
    onOpen: function(tab) {
        console.log('标签页 ' + tab.title + ' 被打开了。');
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#myTabs').on('onOpen', function(event, tab) {
    console.log('标签页 ' + tab.title + ' 被打开了。');
});
```

### `onLoad`

当标签页加载完成时触发。事件回调函数 `this` 为当前标签页管理器实例，参数定义如下：

* `tab`：当前加载完成的标签页对象。

```js
// 在初始化的时候设置事件回调函数
$('#myTabs').tabs({
    onLoad: function(tab) {
        console.log('标签页 ' + tab.title + ' 加载完成了。');
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#myTabs').on('onLoad', function(event, tab) {
    console.log('标签页 ' + tab.title + ' 加载完成了。');
});
```

### `onClose`

当标签页被关闭时触发。事件回调函数 `this` 为当前标签页管理器实例，参数定义如下：

* `tab`：当前被关闭的标签页对象。

```js
// 在初始化的时候设置事件回调函数
$('#myTabs').tabs({
    onClose: function(tab) {
        console.log('标签页 ' + tab.title + ' 被关闭了。');
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#myTabs').on('onClose', function(event, tab) {
    console.log('标签页 ' + tab.title + ' 被关闭了。');
});
```

## 自定义

在标签页初始化元素中可以使用 `.tabs-navbar` 元素和 `.tabs-container` 元素来自定义导航和标签页内容的父级元素。

``` html
<div id="myTabs" class="tabs">
  <nav class="tabs-navbar"></nav>
  <nav class="tabs-container"></nav>
</div>
```

<script src="dist/lib/tabs/zui.tabs.js"></script>
<link href="dist/lib/tabs/zui.tabs.css" rel="stylesheet">
<script>
function afterPageLoad() {
    $('#tabsExample').tabs({
        tabs: [{
            title: 'iframe 例子',
            url: 'docs/partial/iframe-tab.html',
            type: 'iframe',
            forbidClose: true
        }, {
            title: 'Ajax 例子',
            url: 'docs/partial/remote-tab.html',
            type: 'ajax'
        }, {
            title: '自定义例子',
            icon: 'icon-star',
            type: 'custom',
            content: function() {
                return '<div class="alert alert-block alert-success"><p>这里的内容是通过函数动态生成的，每次刷新下面的时间都会更新。</p><p>' + (new Date().format('yyyy-MM-dd hh:mm:ss')) +   '</p></div>';
            }
        }, {
            title: 'MZUI',
            url: 'http://zui.sexy/m',
            type: 'iframe'
        }, {
            defaultTitle: '无法加载的标签页',
            url: 'http://zui1.sexy'
        }]
    });
}
</script>
