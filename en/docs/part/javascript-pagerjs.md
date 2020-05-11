# Pager

The pager is a JavaScript component. Unlike a traditional [Component->Pager](#component/pager), it only requires some parameters to create a rich-looking pager.

## Example

For an empty `<ul class="pager">`, add `[data-ride="pager"]` to enable the pager. Use `data-page`, `data-rec-total`, and `data-rec-per-page` to specify the number of pages, the total number of records, and the number of records per page.

<div class="example">
  <ul class="pager" data-ride="pager" data-page="2" data-rec-total="89"></ul>
</div>

```html
<ul class="pager" data-ride="pager" data-page="2" data-rec-total="89"></ul>
```

## Interface elements

The pager has several types of interface elements built in . Use the `elements` to specify the element name and order. 

All available interface elements include：

<table class="table table-bordered" id="pagerPreviewTable">
  <thead>
    <tr>
      <th style="width: 120px">Element</th>
      <th style="width: 180px">Description</th>
      <th>Preview and source code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>prev</code></td>
      <td>a text button to display the previous page</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="prev" data-rec-total="100" data-page="2"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="prev" data-rec-total="100" data-page="2"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>next</code></td>
      <td>a text button to display the next page</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="next" data-rec-total="100"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="next" data-rec-total="100"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>prev_icon</code></td>
      <td>an icon button to display the previous page; use `prevIcon` to customize button icons</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="prev_icon" data-rec-total="100" data-page="2"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="prev_icon" data-rec-total="100" data-page="2"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>next_icon</code></td>
      <td>an icon button to display the next page; use `nextIcon` to customize button icons</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="next_icon" data-rec-total="100"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="next_icon" data-rec-total="100"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>first</code></td>
      <td>a button to display the first page</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="first" data-rec-total="100" data-page="2"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="first" data-rec-total="100" data-page="2"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>last</code></td>
      <td>a button to display the last page</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="last" data-rec-total="100"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="last" data-rec-total="100"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>first_icon</code></td>
      <td>an icon button to display the previous page; use `firstIcon` to customize button icons</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="first_icon" data-rec-total="100" data-page="2"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="first_icon" data-rec-total="100" data-page="2"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>last_icon</code></td>
      <td>an icon button to display the last page; use `lastIcon` to customize button icons</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="last_icon" data-rec-total="100"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="last_icon" data-rec-total="100"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>nav</code> or <code>pages</code></td>
      <td>Display page numbers for navigation; use `maxNavCount` to customize the maximum number of buttons on the navigation</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="nav" data-rec-total="1000" data-max-nav-count="6"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="nav" data-rec-total="1000" data-max-nav-count="6"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>goto</code></td>
      <td>Display page jump input</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="goto" data-rec-total="1000" data-max-nav-count="6"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="goto" data-rec-total="1000" data-max-nav-count="6"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>size_menu</code></td>
      <td>Display item-per-page dropdown, and the options are set by `pageSizeOptions`. Set `menuDirection` to define the  pop-out direction</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="size_menu" data-rec-total="1000" data-max-nav-count="6"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="size_menu" data-rec-total="1000" data-max-nav-count="6"&gt;&lt;/ul&gt;</code></td>
    </tr>
    <tr>
      <td><code>total_text</code></td>
      <td>Display the total number of records</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="total_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="total_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>page_text</code></td>
      <td>Display the current page number</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="page_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="page_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>total_page_text</code></td>
      <td>Display the total page number</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="total_page_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="total_page_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>page_of_total_text</code></td>
      <td>Display the page number and the total page number</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="page_of_total_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="page_of_total_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>items_range_text</code></td>
      <td>Display the range of the ordinals</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="items_range_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="items_range_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>page_size_text</code></td>
      <td>Display the number of records per page</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="page_size_text" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="page_size_text" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td><code>space</code> or <code>|</code></td>
      <td>Display a blank gap as a separater between elements</td>
      <td>
        <ul class="pager" data-ride="pager" data-elements="space" data-rec-total="1000"></ul>
        <pre><code>&lt;ul class="pager" data-ride="pager" data-elements="space" data-rec-total="1000"&gt;&lt;/ul&gt;</code></pre>
      </td>
    </tr>
  </tbody>
</table>

All the interface elements above can be used at the same time.

### Simple button combination

<div class="example">
  <ul class="pager" data-ride="pager" data-page="2" data-rec-total="89" data-max-nav-count="4" data-elements="prev_icon,nav,next_icon"></ul>
</div>

```html
<ul class="pager" data-ride="pager" data-page="2" data-rec-total="89" data-max-nav-count="4" data-elements="prev_icon,nav,next_icon"></ul>
```

### Simple page and page number combination

<div class="example">
  <ul class="pager" data-ride="pager" data-page="2" data-rec-total="89" data-max-nav-count="4" data-elements="prev_icon,page_of_total_text,next_icon"></ul>
</div>

```html
<ul class="pager" data-ride="pager" data-page="2" data-rec-total="89" data-max-nav-count="4" data-elements="prev_icon,page_of_total_text,next_icon"></ul>
```

## Options
 
Options are used to initialize the pager. For an empty `<ul class="pager">`, add `[data-ride="pager"]` to auto-initialize it. Use `[data-*]` to specify the initialization options.

Manual initialization is also available.

```js
// Manual initialization
$('#myPager').pager({
    page: 1,
    recTotal: 100
});
```

All available initialization options include：

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 140px">Option</th>
      <th style="width: 150px">Name</th>
      <th style="width: 150px">Available value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>page</code></td>
      <td>Current page number in the initial state</td>
      <td>The default is `1`</td>
      <td>An integer >= `1` and <= the total number of pages. Other content entered will be automatically converted to an integer within the range.</td>
    </tr>
    <tr>
      <td><code>recTotal</code></td>
      <td>Total number of records</td>
      <td>The default is `0`</td>
      <td>An integer >= `0`</td>
    </tr>
    <tr>
      <td><code>recPerPage</code></td>
      <td>Number of records per page</td>
      <td>The default is `10`</td>
      <td>An integer >=  `1`</td>
    </tr>
    <tr>
      <td><code>elements</code></td>
      <td>Define the order of interface element</td>
      <td>The default is ` ['first_icon', 'prev_icon', 'pages', 'next_icon', 'last_icon', 'page_of_total_text', 'items_range_text', 'total_text']`</td>
      <td>String arrays or comma-separated strings are used to specify element name alignment. For element name and corresponding appearance, refer to “Interface elemen above“.</td>
    </tr>
    <tr>
      <td><code>elementCreator</code></td>
      <td>Element creator</td>
      <td>The default is `null`</td>
      <td>A function or an object can be set. Refer to “Customiz” below.</td>
    </tr>
    <tr>
      <td><code>linkCreator</code></td>
      <td>Navigation link generator</td>
      <td>The default is `'#page={page}'`</td>
      <td>Set a string as a link template, e.g. default value `'#page={page}'`(If the page number is `1`, generated a link `'#page=1'`); Or use a callback function `function(page, pager)` to dynamically return the link address with `page` for the current page number and `pager` for other page number information.</td>
    </tr>
    <tr>
      <td><code>maxNavCount</code></td>
      <td>Maximum number of items on a page navigation</td>
      <td>The default is `10`</td>
      <td>An integer >= `1`</td>
    </tr>
    <tr>
      <td><code>prevIcon</code></td>
      <td>Previous page icon button</td>
      <td>The default is `icon-double-angle-left`</td>
      <td>Use icons in [Control->Icon](#control/icon)</td>
    </tr>
    <tr>
      <td><code>nextIcon</code></td>
      <td>Next page icon button</td>
      <td>The default is `icon-double-angle-right`</td>
      <td>Use icons in[Control->Icon](#control/icon)</td>
    </tr>
    <tr>
      <td><code>firstIcon</code></td>
      <td>First page icon button</td>
      <td>The default is `icon-step-backward`</td>
      <td>Use icons in [Control->Icon](#control/icon)</td>
    </tr>
    <tr>
      <td><code>lastIcon</code></td>
      <td>Last page icon button</td>
      <td>The default is `icon-step-forward`</td>
      <td>Use icons in [Control->Icon](#control/icon).</td>
    </tr>
    <tr>
      <td><code>menuDirection</code></td>
      <td>The direction for page number menu</td>
      <td>The default is `'dropdown'`</td>
      <td>
        <ul>
          <li>`dropdown`：Menu pops down；</li>
          <li>`dropup`：Menu pops up；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>pageSizeOptions</code></td>
      <td>Number of menus per page menu option</td>
      <td>The default is `[10, 20, 30, 50, 100]`</td>
      <td>Use an array of integers to specify the number of pages that the user is allowed to select.</td>
    </tr>
    <tr>
      <td><code>navEllipsisItem</code></td>
      <td>Ellipsis content on the navigation</td>
      <td>The default is `'<i class="icon icon-ellipsis-h"></i>'`</td>
      <td>Use HTML Code</td>
    </tr>
    <tr>
      <td><code>lang</code></td>
      <td>Current language</td>
      <td>The default is `'zh_cn'`</td>
      <td>
        <p>The available options include：</p>
        <ul>
          <li>`zh_cn`：Chinese simplified；</li>
          <li>`zh_tw`：Chinese traditional；</li>
          <li>`en`：English；</li>
          <li>
            <p>Or specify an object to customize the language, e.g.：</p>
            <pre><code>{
    prev: 'Previous page',
    next: 'Next page',
    first: 'First page',
    last: 'Last page',
    goto: 'Go to',
    pageOf: '<strong>{page}</strong> page of',
    totalPage: 'Total <strong>{totalPage}</strong> page',
    totalCount: 'Total <strong>{recTotal}</strong> item',
    pageSize: '<strong>{recPerPage}</strong> per page',
    itemsRange: 'First <strong>{start}</strong> ~ <strong>{end}</strong> item',
    pageOfTotal: 'First <strong>{page}</strong>/<strong>{totalPage}</strong> page'
}</code></pre>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>onPageChange</code></td>
      <td>Callback function used when page number changes</td>
      <td>The default is `null`</td>
      <td>See “ Listen page number changes below for how to use it.</td>
    </tr>
    <tr>
      <td><code>onRender</code></td>
      <td>Called when the pager interface is updated and rendered</td>
      <td>The default is `null`</td>
      <td>The event callback function contains a parameter `state` which is the object of the current page number status.</td>
    </tr>
  </tbody>
</table>

## Get page status information

Get the pager object instance `state` which contains the following properties：

* `page`：Current page number；
* `recPerPage`：Number of records per page；
* `recTotal`：Total number of records；
* `totalPage`：Total pages；
* `pageRecCount`：Record count on the current page；
* `skip`：Number of records skipped；
* `start`：Current page first record serial number；
* `end`：Last record number of the current page；
* `prev`：Previous page number; If there is no previous page, it is `0`；
* `next`：Next page number; If there is no next page, it is `0`。

Take the example of getting the number of records on the current page：

```js
// Get the pager instance object
var myPager = $('#myPager').data('zui.pager');

// Get page number status information object
var pageState = myPager.state;

// Print the number of records on the current page
console.log('The current number of page records is', pageState.pageRecCount);
```

## Listen page number changes

Use `onPageChange` to listen page status change events. The callback function parameters are defined as follows：

* `state`: New page number status object；
* `oldState`: Page number state object before it changes.

Listen by initializing options：

```
$('#myPager').pager({
    onPageChange: function(state, oldState) {
        if (state.page !== oldState.page) {
            console.log('Page number from', oldState.page, 'Change to', state.page);
        }
    }
});
```

Listen changes by jQuery：

```
$('#myPager').on('onPageChange', function(e, state, oldState) {
    if (state.page !== oldState.page) {
        console.log('Page number is changed from', oldState.page, 'to', state.page);
    }
});
```

## Customize

Use `linkCreator` to specify a string template or callback function to generate a link for the page number.

```html
<!-- If the total number of items is 10, the link for the first page is mypage.html?page=1&totalCount=10 -->
<ul data-ride="pager" class="pager" data-page="2" data-rec-total="89" data-link-creator="mypage.html?page={page}&totalCount={recTotal}"></ul>
```

```js
// Or use a function to dynamically return a link
$('#myPagerExample').pager({
    linkCreator: function(page, pager) {
        return 'mypage.html?page=' + page + '&totalCount=' + pager.recTotal;
    }
});
```

Use `elementCreator` to specify an element constructor to create a custom pager element.

`elementCreator` can be used to specify a callback function to dynamically create interface elements. This callback function `this` points to the pager instance object itself. The parameters are defined as follows：

* `element`: The name of the interface element to be created currently, e.g. `'page_text'`；
* `$pager`: Root element of the pager; `$pager.append(elementContent)` can be called to insert contents；
* `state`: Page number information object of current pager.

Return `false` within the element constructor, so the default constructor can be used continuously.

<div class="example">
  <ul id="myCustomPagerExample" class="pager" data-page="2" data-rec-total="89" data-elements="red_page_button,total_page_text"></ul>
</div>

```html
<ul id="myCustomPagerExample" class="pager" data-page="2" data-rec-total="89" data-elements="red_page_button,total_page_text"></ul>
```

```js
$('#myCustomPagerExample').pager({
    elementCreator: function(element, $pager, state) {
        if (element === 'red_page_button') {
            return $('<button class="btn btn-danger" type="button">' + state.page + '</button>');
        }
        return false;
    }
});
```

`elementCreator` can also be specified as an object. Each key name of the object corresponds to a name of the interface element that needs to be customized, and the key value is the corresponding element constructor function.

For example, the object format used above can be implemented using the following code：

```js
$('#myPageExample').page({
    elementCreator: {
        red_page_button: function(element, $pager, state) {
            return $('<button class="btn btn-danger" type="button">' + state.page + '</button>');
        }
    }
})
```

## Dynamic update

Page number status can be changed in addition to user clicks or manipulation of interface elements，Can also pass the instance method of the pager `set(page, recTotal, recPerPage)` Manually update interface elements in the program。

The parameters of this method are defined as follows：

* `page`: Set a new page number. If you do not change it, use `null` as the value；
* `recTotal`: Set the total number of records. If you do not change it, use `null` as the value；
* `recPerPage`: Set a new number of records per page. If you do not change it，use `null` as the value；

```js
// Get the pager instance object
var myPager = $('#myPager').data('zui.pager');

// Set the current page number to 2
myPager.set(2);

// Set the current page number to 3, and set the number of records per page to 20
myPager.set(3, null, 20);

// Set the current page number to 4, the total number of records to 100, and the number of records per page to 30
myPager.set(4, 100, 30);
```

Use `set(newState)` as a simple way to do it. As a object, `newState` can be specified with the property values as you required.

```js
// Get the pager instance object
var myPager = $('#myPager').data('zui.pager');

// Set the current page number to 4, the total number of records to 100, and the number of records per page to 30
myPager.set({
    page: 4,
    recTotal: 100,
    recPerPage: 30
});
```

<style>
.table .pager {margin: 0;}
#pagerPreviewTable td {vertical-align: middle;}
</style>
<script>
function afterPageLoad() {
    $('#pageBody [data-ride="pager"]').pager().on('onPageChange', function(e, state, oldState) {
    if (state.page !== oldState.page) {
        console.log('Page number from', oldState.page, 'Change to', state.page);
    }
});;

    $('#myCustomPagerExample').pager({
        elementCreator: function(element, $pager, state) {
            if (element === 'red_page_button') {
                return $('<button class="btn btn-danger" type="button">' + state.page + '</button>');
            }
            return false;
        }
    });
}
</script>
