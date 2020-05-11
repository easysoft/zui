# Search box

Search box is  based on `.search-box` of [Input box](#component/input-control) with enhanced JavaScript, including clear search button, delayed listening to text in the search box, etc.

## Example

### Quick Start

Call `$().searchBox()` in `<input>` to enable enhanced search box for a normal text box.

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <input id="searchInputExample" autofocus="autofocus" type="search" class="form-control search-input search-example" placeholder="search for">
    </div>
  </div>
</div>

```html
<input id="searchInputExample" autofocus="autofocus" type="search" class="form-control search-input" placeholder="search for">
```

```js
$('#searchInputExample').searchBox({
    escToClear: true, // Set click ESC Key to clear the search box
    onSearchChange: function(searchKey, isEmpty) {
        console.log('Text change of a search box:', searchKey);
    }
});
```

### Input box components

Add `.search-box` class for `.input-control`, and add `.search-clear-btn` to get a trigger to clear the search box.

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-control search-box search-box-circle has-icon-left has-icon-right search-example" id="searchboxExample">
        <input id="inputSearchExample1" type="search" class="form-control search-input" placeholder="search">
        <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-control search-box search-box-circle has-icon-left has-icon-right" id="searchboxExample">
  <input id="inputSearchExample1" type="search" class="form-control search-input" placeholder="search">
  <label for="inputSearchExample1" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
  <a href="#" class="input-control-icon-right search-clear-btn"><i class="icon icon-remove"></i></a>
</div>
```

```js
// Initialize the search box，And specify the search text change event callback function in the options，This will be notified when the search box text changes.。
$('#searchboxExample').searchBox({
    escToClear: true, // Set click ESC Key to clear the search box
    onSearchChange: function(searchKey, isEmpty) {
        console.log('Search box text change：', searchKey);
    }
});
```

### Input groups

Place `.search-box` in `.input-group`.

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-group">
        <div class="input-control search-box search-box-circle has-icon-left has-icon-right search-example" id="searchboxExample">
          <input id="inputSearchExample3" type="search" class="form-control search-input" placeholder="search">
          <label for="inputSearchExample3" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        </div>
        <span class="input-group-btn">
          <button class="btn btn-primary" type="button">Search</button>
        </span>
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-group">
        <div class="input-control search-box has-icon-left has-icon-right search-example" id="searchboxExample">
          <input id="inputSearchExample4" type="search" class="form-control search-input" placeholder="search">
          <label for="inputSearchExample4" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
        </div>
        <span class="input-group-btn">
          <button class="btn btn-primary" type="button">Search</button>
        </span>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-group">
  <div class="input-control search-box search-box-circle has-icon-left has-icon-right search-example" id="searchboxExample">
    <input id="inputSearchExample3" type="search" class="form-control search-input" placeholder="search">
    <label for="inputSearchExample3" class="input-control-icon-left search-icon"><i class="icon icon-search"></i></label>
  </div>
  <span class="input-group-btn">
    <button class="btn btn-primary" type="button">search</button>
  </span>
</div>
```

## Options

In addition `onSearchChange` which is used to set the callback function for event changes, you can set more options to customize the search box, including：

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Option</th>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>inputSelector</code></td>
      <td> <code>input</code> selector for search boxes</td>
      <td><code>'input[type="search"],input[type="text"]'</code></td>
      <td>If multiple input elements in a search box, you might have to set one input that to be listened.</td>
    </tr>
    <tr>
      <td><code>listenEvent</code></td>
      <td>listen events for an input box</td>
      <td><code>'change input paste'</code></td>
      <td>If you don't want to be notified when users enter in the box, set it to <code>'change paste'</code>.</td>
    </tr>
    <tr>
      <td><code>changeDelay</code></td>
      <td>Listen event trigger delay(millisecond)</td>
      <td><code>500</code></td>
      <td>If set to <code>500</code>, <code>onSearchChange</code> is trigger only when no changes within 500 millisecond during the text of an input is changing.If set to <code>0</code>, trigger the event as soon as the text of the unput box changes.</td>
    </tr>
    <tr>
      <td><code>escToClear</code></td>
      <td>Whether enable <kbd>Esc</kbd> to clear the box</td>
      <td><code>false</code></td>
      <td>If set as <code>true</code>，press <kbd>Esc</kbd> to clear the text immediately.</td>
    </tr>
  </tbody>
</table>

## Methods

### `getSearch()`

Get the text in the search box.

```js
// Get the object of a search box.
var mySearchBox = $('#searchBox').data('zui.searchBox');

// Get the text in the search box.
var searchText = mySearchBox.getSearch();
```

### `setSearch(value)`

Get the text in the search box.

Parameters：

* `value`： set the text for the search box.

```js
// Get the object of a search box
var mySearchBox = $('#searchBox').data('zui.searchBox');

// Set the text in the search box as "search text"
mySearchBox.setSearch('search text');

// Clear search box
mySearchBox.setSearch('');
```

### `focus()`

Activate a search box.

```js
// Get the object of a search box.
var mySearchBox = $('#searchBox').data('zui.searchBox');

// Activate a search box.
mySearchBox.focus();
```

## Events

### `onSearchChange`

It is triggered when the text in the search box changes. Its callback function parameters include：

* `searchText`：texts in the search box；
* `isEmpty`：whether the search box contains anytext (Text is included in `""`)。

```js
// Set the event callback function when initiating
$('#searchBox').searchBox({
    onSearchChange: function(searchBox, isEmpty) {
        // Deal with search box text changes
    }
});
```

```js
// use jquery $().on() to listen events
$('#searchBox').on('onSearchChange', function(event, searchBox, isEmpty) {
    // Deal with search box text changes
});
```

### `onKeyDown`

It is triggered when the search box is activated and a button is clicked. Its callback function includes：

* `event`：jQuery event object.

Return `false` in the event callback function, and cancel the default button behavior. It is the same as calling `event.preventDefault()`.

```js
// Set the event callback function at when initiating
$('#searchBox').searchBox({
    onKeyDown: function(event) {
        // Deal with clicking Enter event
    }
})
```

```js
// use jquery $().on() to listen events
$('#searchBox').on('onKeyDown', function(e, event) {
    // Deal with clicking Enter events
});
```

### `onPressEnter`

When the search box is activated and <kbd>Enter</kbd> is clicked, it is triggered. Its callback function includes：

* `event`：jQuery Event object

```js
// Set the event callback function when initiating
$('#searchBox').searchBox({
    onPressEnter: function(event) {
        // Deal with clicking Enter event
    }
})
```

```js
// use jquery $().on() to listen events
$('#searchBox').on('onPressEnter', function(e, event) {
    // Deal with clicking Enter events
});
```

### `onFocus`

It is triggered when the search box is activated and gets focus. Its callback function includes：

* `event`：jQuery Event object

```js
// Set the event callback function when initiating
$('#searchBox').searchBox({
    onFocus: function(event) {
        // the search box to get the focus
    }
})
```

```js
// use jquery of $().on() Method listen event
$('#searchBox').on('onFocus', function(e, event) {
    // the search box to get the focus
});
```

### `onBlur`

It is triggered when the search box is activated and loses the focus. Its callback function includes：

* `event`：jQuery Event object。

```js
// Set the event callback function when initiating
$('#searchBox').searchBox({
    onBlur: function(event) {
        // the search box loses focus
    }
})
```

```js
// use jquery $().on() to listen events
$('#searchBox').on('onBlur', function(e, event) {
    // the search box loses focus
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
