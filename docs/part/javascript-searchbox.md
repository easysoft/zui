# 搜索框

搜索框基于[输入框](#component/input-control)提供的 `.search-box` 外观开发了 JavaScript 增强功能，包括清除搜索按钮、延时监听搜索框文本更改事件等。

## 示例

### 简单使用

直接在 `<input>` 上调用 `$().searchBox()` 方法来为一个普通的文本框启用搜索框增强功能。

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <input id="searchInputExample" autofocus="autofocus" type="search" class="form-control search-input search-example" placeholder="搜索">
    </div>
  </div>
</div>

```html
<input id="searchInputExample" autofocus="autofocus" type="search" class="form-control search-input" placeholder="搜索">
```

```js
$('#searchInputExample').searchBox({
    escToClear: true, // 设置点击 ESC 键清空搜索框
    onSearchChange: function(searchKey, isEmpty) {
        console.log('搜索框文本变更：', searchKey);
    }
});
```

### 配合输入框组件使用

为 `.input-control` 添加 `.search-box` 类，为按钮添加 `.search-clear-btn` 来获得一个清除搜索框内容的触发按钮。

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control search-box search-box-circle has-icon-left has-icon-right search-example" id="searchboxExample">
        <input id="inputSearchExample1" type="search" class="form-control search-input" placeholder="搜索">
        <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control search-box search-box-circle has-icon-left has-icon-right" id="searchboxExample">
  <input id="inputSearchExample1" type="search" class="form-control search-input" placeholder="搜索">
  <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
  <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
</div>
```

```js
// 初始化搜索框，并在选项中指定搜索文本变更事件回调函数，这样当搜索框文本发送变化时获得通知。
$('#searchboxExample').searchBox({
    escToClear: true, // 设置点击 ESC 键清空搜索框
    onSearchChange: function(searchKey, isEmpty) {
        console.log('搜索框文本变更：', searchKey);
    }
});
```

### 配合输入组使用

将 `.search-box` 放置在 `.input-group` 中。

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-group">
        <div class="input-control search-box search-box-circle has-icon-left has-icon-right search-example" id="searchboxExample">
          <input id="inputSearchExample3" type="search" class="form-control search-input" placeholder="搜索">
          <label for="inputSearchExample3" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        </div>
        <span class="input-group-btn">
          <button class="btn btn-primary" type="button">搜索</button>
        </span>
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-group">
        <div class="input-control search-box has-icon-left has-icon-right search-example" id="searchboxExample">
          <input id="inputSearchExample4" type="search" class="form-control search-input" placeholder="搜索">
          <label for="inputSearchExample4" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        </div>
        <span class="input-group-btn">
          <button class="btn btn-primary" type="button">搜索</button>
        </span>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-group">
  <div class="input-control search-box search-box-circle has-icon-left has-icon-right search-example" id="searchboxExample">
    <input id="inputSearchExample3" type="search" class="form-control search-input" placeholder="搜索">
    <label for="inputSearchExample3" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
  </div>
  <span class="input-group-btn">
    <button class="btn btn-primary" type="button">搜索</button>
  </span>
</div>
```

## 选项

除了使用 `onSearchChange` 来设置变更事件回调函数，还有更多的选项来定制搜索框。所有可用的选项包括：

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">选项</th>
      <th style="width: 100px;">名称</th>
      <th style="width: 50px;">默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>inputSelector</code></td>
      <td>搜索框 <code>input</code> 元素选择器</td>
      <td><code>'input[type="search"],input[type="text"]'</code></td>
      <td>当你的搜索框内有多个 input 元素时则可能需要设置此选项来指明哪个 input 作为搜索框的输入监听控件。</td>
    </tr>
    <tr>
      <td><code>listenEvent</code></td>
      <td>输入框监听事件</td>
      <td><code>'change input paste'</code></td>
      <td>如果你不需要在用户键入时获得通知，只需要将此选项值设置为 <code>'change paste'</code>。</td>
    </tr>
    <tr>
      <td><code>changeDelay</code></td>
      <td>监听事件触发延迟（毫秒）</td>
      <td><code>500</code></td>
      <td>当设置为 <code>500</code> 时，则只有输入框文本发生变更的过程中，只有超过 500 毫秒没有发生变化才触发 <code>onSearchChange</code> 事件；如果设置为 <code>0</code>，则只要文本框文本发生变更立即触发事件。</td>
    </tr>
    <tr>
      <td><code>escToClear</code></td>
      <td>是否启用按 <kbd>Esc</kbd> 键清除</td>
      <td><code>false</code></td>
      <td>如果设置为 <code>true</code>，则当用户激活输入框的时候按 <kbd>Esc</kbd> 立即清除已输入的文本。</td>
    </tr>
  </tbody>
</table>

## 方法

### `getSearch()`

获取搜索框内的文本。

```js
// 获取搜索框实例对象
var mySearchBox = $('#searchBox').data('zui.searchBox');

// 获取搜索框内的文本
var searchText = mySearchBox.getSearch();
```

### `setSearch(value)`

获取搜索框内的文本。

参数：

* `value`：要设置的搜索框文本。

```js
// 获取搜索框实例对象
var mySearchBox = $('#searchBox').data('zui.searchBox');

// 设置搜索框内的文本为 "search text"
mySearchBox.setSearch('search text');

// 清空搜索框
mySearchBox.setSearch('');
```

### `focus()`

激活搜索框。

```js
// 获取搜索框实例对象
var mySearchBox = $('#searchBox').data('zui.searchBox');

// 激活搜索框
mySearchBox.focus();
```

## 事件

### `onSearchChange`

当搜索框文本变更时触发。事件回调函数参数包括：

* `searchText`：当前的搜索框文本；
* `isEmpty`：当前搜索框是否没有文本（文本为 `""`）。

```js
// 在初始化的时候设置事件回调函数
$('#searchBox').searchBox({
    onSearchChange: function(searchBox, isEmpty) {
        // 处理搜索框文本变更
    }
});
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#searchBox').on('onSearchChange', function(event, searchBox, isEmpty) {
    // 处理搜索框文本变更
});
```

### `onKeyDown`

当搜索框激活按下按键时触发。事件回调函数包括：

* `event`：jQuery 事件对象。

在事件回调函数内返回 `false`，可以取消默认的按键行为，相当于调用了 `event.preventDefault()`。

```js
// 在初始化的时候设置事件回调函数
$('#searchBox').searchBox({
    onKeyDown: function(event) {
        // 处理按下按键事件
    }
})
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#searchBox').on('onKeyDown', function(e, event) {
    // 处理按下按键事件
});
```

### `onPressEnter`

当搜索框激活按下 <kbd>Enter</kbd> 键时触发。事件回调函数包括：

* `event`：jQuery 事件对象。

```js
// 在初始化的时候设置事件回调函数
$('#searchBox').searchBox({
    onPressEnter: function(event) {
        // 处理按下 Enter 键事件
    }
})
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#searchBox').on('onPressEnter', function(e, event) {
    // 处理按下 Enter 键事件
});
```

### `onFocus`

当搜索框激活获得焦点时触发。事件回调函数包括：

* `event`：jQuery 事件对象。

```js
// 在初始化的时候设置事件回调函数
$('#searchBox').searchBox({
    onFocus: function(event) {
        // 处理搜索框获得焦点事件
    }
})
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#searchBox').on('onFocus', function(e, event) {
    // 处理搜索框获得焦点事件
});
```

### `onBlur`

当搜索框激活失去焦点时触发。事件回调函数包括：

* `event`：jQuery 事件对象。

```js
// 在初始化的时候设置事件回调函数
$('#searchBox').searchBox({
    onBlur: function(event) {
        // 处理搜索框失去焦点事件
    }
})
```

```js
// 使用 jquery 的 $().on() 方法监听事件
$('#searchBox').on('onBlur', function(e, event) {
    // 处理搜索框失去焦点事件
});
```

<script>
function afterPageLoad(){
    $('.search-example').searchBox({
        escToClear: true,
        onSearchChange: function(searchKey, isEmpty) {
            console.log('Search box example: SearchKey', searchKey, isEmpty ? 'empty' : 'notEmpty');
        },
        onPressEnter: function() {
            console.log('ZUI - Searchbox: You press enter.');
        },
        onKeyDown: function() {
            console.log('ZUI - Searchbox: You press any key down.');
        },
        onFocus: function() {
            console.log('ZUI - Searchbox: Search box focus.');
        },
        onBlur: function() {
            console.log('ZUI - Searchbox: Search box blur.');
        }
    });
}
</script>
