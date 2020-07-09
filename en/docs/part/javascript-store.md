section: javascript
id: store
description: Read data using browser local storage
icon: icon-hdd
filter: bendicunchu bdcc
---

# Local Storage

Local storage is a good way to store application data locally. Compared to cookies, it has more space, usually 5M under the same domain, and more flexible. It will not be sent to the server for every commit. Almost all browsers support local storage, including IE 8.

ZUI provides a set of methods for reading and writing local stored data.

Even if local storage is not available, these methods will work, only the data will be saved in memory and will not be saved after the browser is closed.

## Examples

<div class="example" id="storeExample">
  <div class="alert hide alert-success">
    <h4>Local storage is available. Your data will not be lost, if you refresh the page or close the browser.</h4>
  </div>
  <div class="alert hide alert-warning">
    <h4>Local storage is not available！</h4>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th style="width:80px">Index</th>
        <th style="width:40%">Name</th>
        <th>Value</th>
        <th></th>
      </tr>
    </thead>
    <tbody id="storeTable">
    </tbody>
    <tfoot>
      <tr>
        <td colspan="2">
          <div class="input-group">
            <span class="input-group-addon">Name</span>
            <input type="text" id="storeName" name="storeName" class="form-control">
            <span class="input-group-addon fix-border">Value</span>
            <input type="text" id="storeValue" name="storeValue" class="form-control">
            <span class="input-group-btn"><button type="button" id="storeAdd" class="btn btn-primary">Save</button></span>
          </div>
        </td>
        <td colspan="2"><button type="button" class="btn btn-danger" id="storeClear">Clear</button></td>
      </tr>
    </tfoot>
  </table>
</div>

## How to use it

Use $.zui.store` object directly. `store` provides a set of methods to manipulate locally stored data.

Below are properties and methods of store object：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Property/Method</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`store.enable`</td>
      <td>Property to show whether local storage is available.</td>
      <td>If the browser does not support local storage, the value is`false`.</td>
    </tr>
    <tr>
      <td>`store.storage`</td>
      <td>Property to return the browser `localStorage` object.</td>
      <td></td>
    </tr>
    <tr>
      <td>`store.length()`</td>
      <td>Method to return the number of local storage items.</td>
      <td>Return 0 even if local storage is not available.</td>
    </tr>
    <tr>
      <td>`store.remove(key)`</td>
      <td>Remove specified item.</td>
      <td>Parameter：

*   `key`：The name of the item that needs to be removed.</td>
    </tr>
    <tr>
      <td>`store.get(key)`</td>
      <td>Get the value of the stored item.</td>
      <td>parameter：

*   `key`：the name of the stored item.

Different from `getItem`, this method is deserializing and returns the original type of the stored value.</td>
    </tr>
    <tr>
      <td>`store.set(key, value)`</td>
      <td>Set the value of the stored item.</td>
      <td>Parameter：

*   `key`：the name of the stored item.
*   `value`：optional name of the stored item. If it is`null` or default, the previously stored value will be removed.

Different from `setItem`, it is serializing. Values can be of any type except function or object containing a function.</td>
    </tr>
    <tr>
      <td>`store.key(index)`</td>
      <td>Get the name of the stored item based on the index.</td>
      <td>Parameter：

*   `index`：item index, an integer.</td>
    </tr>
    <tr>
      <td>`store.forEach(callback)`</td>
      <td>Iterate through all stored items</td>
      <td>Parameter：

*   `callback`：It is an iterate function and provides two parameters. The first parameter is the name of the iterated item and the second one is the value.</td>
    </tr>
    <tr>
      <td>`store.serialize(value)`</td>
      <td>Serialize a value of any type into a string</td>
      <td>Parameter：

*   `value`：Serialized value.</td>
    </tr>
    <tr>
      <td>`store.deserialize(value)`</td>
      <td>Deserialize a string into a value or object.</td>
      <td>Parameter：

*   `value`：String that needs to be deserialized.</td>
    </tr>
    <tr>
      <td>`store.getAll()`</td>
      <td>Get all stored items.</td>
      <td>Return an object, the property and its values of which are recorded as stored items.</td>
    </tr>
    <tr>
      <td>`store.removeItem(key)`</td>
      <td>Alias of `store.remove()`.</td>
      <td>parameter：

*   `key`：The name of the item to be removed.</td>
    </tr>
    <tr>
      <td>`store.getItem(key)`</td>
      <td>Get the value of the item with the specified name</td>
      <td>It is equivalent to `localStorage.getItem(key)`. Its value is the string after serialization.

Parameter：

*   `key`：Item name.</td>

    </tr>
    <tr>
      <td>`store.setItem(key, value)`</td>
      <td>Set the stored value</td>
      <td>It is equivalent to `localStorage.setItem(key, value)`.

Parameter：

*   `key`：Stored name.
*   `value`：Stored value.</td>
    </tr>
  </tbody>
</table>

### Code examples

```js
$.zui.store.set('name', 'catouse');                      // Use local storage to set 'name' as 'catouse'.
$.zui.store.set('date', {year: 2014, month: 8, day: 6}); // Store an object to local storage.

console.log($.zui.store.get('name'));                    // Get 'name' value from local storage.
console.log($.zui.store.get('date').year);               // Get year property of 'date' from local storage.

$.zui.store.forEach(function(key, value) {               // Iterate all locally stored items.
    console.log(value);
});

console.log($.zui.store.key(0));                         // Get the name of the first item of local storage.

$.zui.store.remove('name');                              // Remove ‘name value from local storage.
$.zui.store.clear();                                     // Clear all items of local storage.
```

## Page Local Storage

The values of items with the same name on different pages need to be saved separately. `store` objects provide a set of methods and properties to read and write items on the same page with the same path.

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Property/Method</th>
      <th>Description</th>
      <th>Parameters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`store.page`</td>
      <td>Property which is the data object stored on the current page.</td>
      <td>*   This property or its value of the object is the corresponding item.
*   These properties can be read and written. If any change, call`store.pageSave()` to save it locally. If the property is set to `null`, the property will be removed when `pageSave()` is called.</td>
    </tr>
    <tr>
      <td>`store.pageGet(key)`</td>
      <td>Get the value of the specified name on the current page.</td>
      <td>Parameter：

*   `key`：Specify the name of the item.</td>
    </tr>
    <tr>
      <td>`store.pageSet(key,value)`</td>
      <td>Settings</td>
      <td>Parameters：

*   `key`：name
*   `value`：value</td>
    </tr>
    <tr>
      <td>`store.pageClear()`</td>
      <td>Clear all stored items on the current page.</td>
      <td></td>
    </tr>
    <tr>
      <td>`store.pageRemove(key)`</td>
      <td>Remove the specified item from the current page.</td>
      <td>Parameters：

*   `key`：Specify the name of the item.</td>
    </tr>
    <tr>
      <td>`store.pageSave()`</td>
      <td>Save the items on the current page to local storage immediately.</td>
      <td>This method does not have to be called, unless you want to change `store.page` properties.</td>
    </tr>
  </tbody>
</table>

### Code examples

```js
/* The key values for the following actions are only for the current page */
$.zui.store.pageSet('name', 'catouse');                      // Use local storage to set 'name' as 'catouse'.
$.zui.store.pageSet('date', {year: 2014, month: 8, day: 6}); // Save an object to local storage.

console.log($.zui.store.pageGet('name'));                    // Get 'name' value from local storage.
console.log($.zui.store.pageGet('date').year);               // Get year property of 'date' from local storage.

$.zui.store.pageRemove('name');                              // Remove ‘name value from local storage.
$.zui.store.pageClear();                                     // Clear all locally stored items.
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
            $storeTable.append(('<tr><td>{' + '0' + '}</td><td class="store-name">' + '{' + '1' + '}</td><td><pre style="padding: 5px; margin: 0" class="prettyprint">{2}</pre></td><td><a href="javascript:;" class="text-danger store-delete"><i class="icon-trash"></i></a></td></tr>').format(String(index++), key, typeof value === 'object' ? JSON.stringify(value, null, 2) : (typeof value === 'string' ? ('"' + value + '"') : value)));
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
            bootbox.alert('Name is required.');
        }
    });

    $('#storeClear').click(function() {
        $.zui.store.clear();
        refershStore();
    });

    refershStore();
}
</script>
