section: javascript
id: store
description: 使用浏览器本地存储读取数据
icon: icon-hdd
filter: bendicunchu bdcc
---

# 本地存储

本地存储（Local storage）是在浏览器本地存储应用数据的好途径。相比较cookie拥有更大的存储空间（相同域下一般达到5M存储空间），使用更灵活，而且不会在每次提交中发送到服务器。几乎所有浏览器都支持本地存储，甚至包括IE8。

ZUI中提供了一系列方法用于读写本地存储数据。

当本地存储不可用，这些方法也会有效，但数据都会保存在内存中，当关闭浏览器后会消失。

## 实例

<div class="example" id="storeExample">
  <div class="alert hide alert-success">
    <h4>本地存储可用，刷新页面或关闭浏览器不会丢失你的数据。</h4>
  </div>
  <div class="alert hide alert-warning">
    <h4>本地存储不可用！</h4>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th style="width:80px">索引</th>
        <th style="width:40%">名称</th>
        <th>值</th>
        <th></th>
      </tr>
    </thead>
    <tbody id="storeTable">
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">
          <div class="input-group">
            <span class="input-group-addon">名称</span>
            <input type="text" id="storeName" name="storeName" class="form-control">
            <span class="input-group-addon fix-border">值</span>
            <input type="text" id="storeValue" name="storeValue" class="form-control">
            <span class="input-group-btn"><button type="button" id="storeAdd" class="btn btn-primary">保存</button></span>
          </div>
        </td>
        <td colspan="2"><button type="button" class="btn btn-danger" id="storeClear">清空</button></td>
      </tr>
    </tfoot>
  </table>
</div>

## 如何使用

要使用本地存储，直接使用`$.zui.store`对象。`store`提供了一系列方法来操作本地存储数据。

以下列出store对象提供的属性和方法：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性或方法</th>
      <th>说明</th>
      <th>参数和要点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`store.enable`</td>
      <td>属性，指示本地存储是否可用</td>
      <td>如果浏览器不支持本地存储，则该值为`false`。</td>
    </tr>
    <tr>
      <td>`store.storage`</td>
      <td>属性，返回浏览器原生`localStorage`对象</td>
      <td></td>
    </tr>
    <tr>
      <td>`store.length()`</td>
      <td>方法，返回本地存储条目数量</td>
      <td>即使本地存储不可用时也会返回0。</td>
    </tr>
    <tr>
      <td>`store.remove(key)`</td>
      <td>移除指定的条目</td>
      <td>参数：

*   `key`：需要移除的条目的名称。</td>
    </tr>
    <tr>
      <td>`store.get(key)`</td>
      <td>获取存储条目的值</td>
      <td>参数：

*   `key`：存储条目的名称。

与原生的`getItem`方法不同，该方法会进行反序列化操作，返回类型为存储的值的原类型。</td>
    </tr>
    <tr>
      <td>`store.set(key, value)`</td>
      <td>设置存储条目的值</td>
      <td>参数：

*   `key`：存储条目的名称。
*   `value`：可选，存储条目的名称，如果该值为`null`或者缺省，则会移除之前存储的值。

与原生的`setItem`方法不同，该方法会进行序列化操作，所有value可以为任意类型，但不能是函数或者对象属性包含函数。</td>
    </tr>
    <tr>
      <td>`store.key(index)`</td>
      <td>根据索引获取存储条目的名称</td>
      <td>参数：

*   `index`：条目索引，为自然数。</td>
    </tr>
    <tr>
      <td>`store.forEach(callback)`</td>
      <td>遍历所有存储条目</td>
      <td>参数：

*   `callback`：遍历函数，该函数提供两个参数，第一个参数为当前遍历条目的名称，第二个参数为值。</td>
    </tr>
    <tr>
      <td>`store.serialize(value)`</td>
      <td>将一个任意类型的值序列化为字符串</td>
      <td>参数：

*   `value`：需要序列化的值。</td>
    </tr>
    <tr>
      <td>`store.deserialize(value)`</td>
      <td>将一个字符串反序列化为值或对象。</td>
      <td>参数：

*   `value`：需要反序列化的字符串。</td>
    </tr>
    <tr>
      <td>`store.getAll()`</td>
      <td>获取所有存储的条目</td>
      <td>返回一个对象，该对象的属性和对应的属性值记为存储的条目。</td>
    </tr>
    <tr>
      <td>`store.removeItem(key)`</td>
      <td>方法`store.remove()`的别名写法</td>
      <td>参数：

*   `key`：需要移除的条目的名称。</td>
    </tr>
    <tr>
      <td>`store.getItem(key)`</td>
      <td>获取指定名称的条目值</td>
      <td>该方法相当于`localStorage.getItem(key)`，获取的值永远是序列化之后的字符串。

参数：

*   `key`：条目名称。</td>
      
    </tr>
    <tr>
      <td>`store.setItem(key, value)`</td>
      <td>设置存储的值</td>
      <td>该方法相当于`localStorage.setItem(key, value)`

参数：

*   `key`：存储的名称
*   `value`：存储的值</td>
    </tr>
  </tbody>
</table>

### 代码示例

```
$.zui.store.set('name', 'catouse');                      // 使用本地存储设置'name'值为'catouse'
$.zui.store.set('date', {year: 2014, month: 8, day: 6}); // 将一个对象存储到本地存储

console.log($.zui.store.get('name'));                    // 从本地存储获取'name'的值
console.log($.zui.store.get('date').year);               // 从本地存储获取'date'值的year属性

$.zui.store.forEach(function(key, value) {               // 遍历所有本地存储的条目
    console.log(value);
});

console.log($.zui.store.key(0));                         // 获取本地存储第一个条目的名称

$.zui.store.remove('name');                              // 从本地存储移除‘name’的值
$.zui.store.clear();                                     // 清空所有本地存储的条目
```

## 本地页面存储

很多时候，不同页面相同名称的条目的值需要分别保存。`store`对象提供了一系列方法和属性来读写同一页面（相同路径）的条目。

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性或方法</th>
      <th>说明</th>
      <th>参数和要点</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`store.page`</td>
      <td>属性，当前页面存储的数据对象</td>
      <td>*   该对象的属性或对应的值即为对应的条目。
*   这些属性都可以读写，如果进行了更改操作，需要调用`store.pageSave()`方法来存储到本地。如果将属性设置为`null`，则会在下次调用`pageSave()`时移除该属性。</td>
    </tr>
    <tr>
      <td>`store.pageGet(key)`</td>
      <td>获取当前页面指定名称的值</td>
      <td>参数：

*   `key`：指定条目的名称。</td>
    </tr>
    <tr>
      <td>`store.pageSet(key,value)`</td>
      <td>设置值</td>
      <td>参数：

*   `key`：名称
*   `value`：值</td>
    </tr>
    <tr>
      <td>`store.pageClear()`</td>
      <td>清除当前页面所有存储的条目</td>
      <td></td>
    </tr>
    <tr>
      <td>`store.pageRemove(key)`</td>
      <td>移除当前页面存储的指定条目</td>
      <td>参数：

*   `key`：指定条目的名称。</td>
    </tr>
    <tr>
      <td>`store.pageSave()`</td>
      <td>立即保存当前页面存储的条目到本地存储</td>
      <td>一般情况下不需要调用此方法，除非手动更改`store.page`属性。</td>
    </tr>
  </tbody>
</table>

### 代码示例

```
/* 以下操作的键值仅针对当前页面 */
$.zui.store.pageSet('name', 'catouse');                      // 使用本地存储设置'name'值为'catouse'
$.zui.store.pageSet('date', {year: 2014, month: 8, day: 6}); // 将一个对象存储到本地存储

console.log($.zui.store.pageGet('name'));                    // 从本地存储获取'name'的值
console.log($.zui.store.pageGet('date').year);               // 从本地存储获取'date'值的year属性

$.zui.store.pageRemove('name');                              // 从本地存储移除‘name’的值
$.zui.store.pageClear();                                     // 清空所有本地存储的条目
```

<script>
function afterPageLoad(){
    $('#storeExample .alert-' + ($.zui.store.enable ? 'success' : 'warning')).removeClass('hide');

    var $storeTable = $('#storeTable');
    function refershStore() {
        $storeTable.empty();
        var index = 0;
        $.zui.store.forEach(function(key,value) {
            if(key.indexOf('//') === 0) return;
            $storeTable.append('<tr><td>{0}</td><td class="store-name">{1}</td><td><pre style="padding: 5px; margin: 0" class="prettyprint">{2}</pre></td><td><a href="javascript:;" class="text-danger store-delete"><i class="icon-trash"></i></a></td></tr>'.format(index++, key, typeof value === 'object' ? JSON.stringify(value, null, 2) : (typeof value === 'string' ? ('"' + value + '"') : value)));
        });
        $storeTable.find('.store-delete').click(function() {
            $.zui.store.remove($(this).closest('tr').children('.store-name').text());
            refershStore();
        });
        window.prettyPrint();
    }
    $storeTable.click()
    $('#storeAdd').click(function() {
        var key = $('#storeName').val(),
            val = $('#storeValue').val();
        if(key) {
            $.zui.store.setItem(key, val);
            refershStore();
        } else {
            bootbox.alert('必须填写名称。');
        }
    });

    $('#storeClear').click(function() {
        $.zui.store.clear();
        refershStore();
    });

    refershStore();
}
</script>
