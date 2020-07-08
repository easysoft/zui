# Selectable

<div class="alert alert-warning">
  <h4>Compatibility</h4>
  <p>Selectable is not supported on the touch screen, so multi-select is not supported, but click-and-select single element is supported.</p>
</div>

## Examples

Selectable is used to select an element by pressing the left-click to drag.

Select or deselect elements by clicking the left mouse button on the target element.

The selected element will be canceled when selected and dragged again. When you hold <kbd>Ctrl</kbd> and drag it at the same time, the last selected element is not deselected. It is good for batch multi-select.

<style>
.selectable-example {padding: 10px;}
.selectable-example > .message {margin: -10px -10px 10px; background-color: #e5e5e5; padding: 8px 10px;}
#selectableExample1 > .tile {text-align: center; padding: 20px 0; background-color: #e5e5e5; margin: 10px; float: left; width: 70px; font-size: 20px;}
#selectableExample1 > .tile.active {background-color: #3280FC; color: #fff;}

#selectableExample3 {position: relative; height: 300px;}
#selectableExample3 > .shape {text-align: center; border: transparent 4px solid; background-color: #e5e5e5; position: absolute; font-size: 12px;}
#selectableExample3 > .shape.selected {border-color: #3280FC; background-color: #fff}
#shape-sqaure1 {width: 150px; height: 150px; line-height: 150px; left: 50%;}
#shape-sqaure2 {width: 100px; height: 100px; line-height: 100px; left: 20%; bottom: 10px}
#shape-sqaure3 {width: 80px; height: 120px; line-height: 120px; left: 0; bottom: 50px}
#shape-sqaure4 {width: 180px; height: 60px; line-height: 60px; left: 10%;}
#shape-circle1 {width: 70px; height: 70px; line-height: 70px; left: 35%; border-radius: 50%;}
#shape-circle2 {width: 100px; height: 100px; line-height: 100px; right: 20px; top: 50px; border-radius: 50%;}
#shape-circle3 {width: 160px; height: 60px; line-height: 60px; right: 10%; bottom: 50px; border-radius: 30px;}
@keyframes example-move-circle {
  0% { left: 0%; }
  100% { left: 80%; }
}
#shape-circle4 {width: 100px; height: 60px; line-height: 60px; left: 0%; bottom: 110px; border-radius: 30px; animation: example-move-circle 10s infinite alternate linear; box-shadow: 0 1px 6px rgba(50,128,252,.3);}
</style>

<example class="clearfix selectable-example" id="selectableExample1">
  <div class="message">Click and with the cursor to select a square below.</div>
</example>

```html
<div id="selectableExample1">
  <div class="tile" data-id="1">1</div>
  <div class="tile" data-id="2">2</div>
  <div class="tile" data-id="3">3</div>
  ....
</div>
```

```css
// Apply a different look to the selected element
#selectableExample1 > .tile.active {
  background: blue;
  color: #fff;
}
```

```js
$('#selectableExample1').selectable({
    selector: '.tile',
    select: function(e) {
        console.log('You selected the square #' + e.id + '. Total ' + e.selected.length + '  selected.');
    }
});
```

## Select irregular elements

Selectable element does not have to be in certain size and position. You can apply it to a form, a ist, or an element of any shape by `selector` to specify a selector to define all the elements that might be selected.

<example class="selectable-example" id="selectableExample2">
  <div class="message">Select a row of the table.</div>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Point</th>
        <th>Ranking</th>
      </tr>
    </thead>
    <tbody>
      <tr data-id="1526">
        <td>1526</td>
        <td>Little Sloppy</td>
        <td>1056</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 1 </td>
      </tr>
      <tr data-id="1001">
        <td>1001</td>
        <td>Brave Duckling</td>
        <td>999</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 12 </td>
      </tr>
      <tr data-id="1045">
        <td>1045</td>
        <td>Uncle Chicken</td>
        <td>998</td>
        <td class="text-green"><i class="icon icon-double-angle-up"></i> 23 </td>
      </tr>
      <tr data-id="1025">
        <td>1025</td>
        <td>Fearless Pig</td>
        <td>860</td>
        <td class="text-green"><i class="icon icon-double-angle-down"></i> 25 </td>
      </tr>
      <tr data-id="1102">
        <td>1102</td>
        <td>Bug</td>
        <td>749</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 30 </td>
      </tr>
    </tbody>
  </table>
</example>

```js
$('#selectableExample2').selectable({
    selector: 'tr',
    select: function(e) {
        console.log('You selected the Row #' + e.id + '. Total ' + e.selected.length + ' rows.');
    }
});
```

<example class="selectable-example" id="selectableExample3">
  <div class="message">Select shapes below</div>
  <div class="shape" id="shape-sqaure1" data-id="sqaure1">Square 1</div>
  <div class="shape" id="shape-sqaure2" data-id="sqaure2">Square 2</div>
  <div class="shape" id="shape-sqaure3" data-id="sqaure3">Rectangle 1</div>
  <div class="shape" id="shape-sqaure4" data-id="sqaure4">Rectangle 2</div>
  <div class="shape" id="shape-circle1" data-id="circle1">Circle 1</div>
  <div class="shape" id="shape-circle2" data-id="circle2">Circle 2</div>
  <div class="shape" id="shape-circle3" data-id="circle3">Circle 3</div>
  <div class="shape" id="shape-circle4" data-id="circle4">Circle 4</div>
</example>

```js
$('#selectableExample3').selectable({
    selector: '.shape',
    selectClass: 'selected',
    select: function(e) {
        console.log('You have selected shape #' + e.id + '. Total ' + e.selected.length + ' selected.');
    }
});
```

## How to use it

### Introduce resources

Selectable is an independent component. You need to introduce resources in lib/ from local or CDN:

```html
<script src="lib/selectable/zui.selectable.min.js"></script>
```

### Set target element ID

```html
<div id="selectableExample1">
  <div class="tile" data-id="1">1</div>
  <div class="tile" data-id="2">2</div>
  <div class="tile" data-id="3">3</div>
  ....
</div>
```

`[data-id]` attributes should be set for all target elements that can be selected, which makes it easy to keep track of elements being selected. If ID is not set ID, generate an ID randomly.

### Options

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 100px;">Option</th>
      <th style="width: 100px;">Name</th>
      <th style="width: 180px;">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`selector`</td>
      <td>To-be-selected target element selector</td>
      <td>Valid CSS selector string. Default: `"li,tr,div"`</td>
      <td></td>
    </tr>
    <tr>
      <td>`trigger`</td>
      <td>Selectable trigger selector</td>
      <td>Valid CSS selector string. Default:`null`</td>
      <td>If set as null, the entire parent container can trigger the drag event.</td>
    </tr>
    <tr>
      <td>`selectClass`</td>
      <td>Selected item CLASS</td>
      <td>Default:`active`</td>
      <td>If set as `''`, CLASS will not be added to the selected item.</td>
    </tr>
    <tr>
      <td>`rangeStyle`</td>
      <td>The rectangle indicating the style sheet when dragging</td>
      <td>Default: <br> <pre style="padding: 5px; margin: 0">{
    border: '1px solid #3280fc',
    backgroundColor: 'rgba(50, 128, 252, 0.2)'
}</pre></td>
      <td>The default is the blue border and translucent rectangle.</td>
    </tr>
    <tr>
      <td>`clickBehavior`</td>
      <td>Click to select behavior</td>
      <td>
        <ul>
          <li>`"toggle"`(default);</li>
          <li>`"multi"`:</li>
          <li>`"single"`.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>`"toggle"`: Click on the target element to switch its selection status. Each selection (click or drag) will cancel all previous selections unless pressed while selected <kbd>Ctrl</kbd>;</li>
          <li>`"multi"`: Click on the target element to switch its selection status. It will not cancel the previous selection. Selectable will cancel all previous selections, unless pressed while selected <kbd>Ctrl</kbd>;</li>
          <li>`"single"`: Click on the target element tp cancel the selected element and to select the currently clicked element. Selectable will cancel all previous selections, unless pressed while selected <kbd>Ctrl</kbd>.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`mouseButton`</td>
      <td>Responsive mouse button</td>
      <td>Default:`'all'`</td>
      <td>
        <p>All responsive mouse buttons refer to <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MouseEvent/button" target="_blank"><code>MouseEvent.button</code></a>:</p>
        <ul>
          <li>`'all'` or `-1`: Respond to all mouse buttons;</li>
          <li>`'left'` or `0`: Respond to the left mouse button;</li>
          <li>`'middle'` or `1`: Respond to the mouse wheel(Middle button);</li>
          <li>`'right'` or `2`: Respond to right mouse button.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`ignoreVal`</td>
      <td>Ignored value when selecting a range</td>
      <td>Default: `3` in pixel</td>
      <td>When the range dragged by the mouse is less than this value, ignore this selectable action.</td>
    </tr>
    <tr>
      <td>`listenClick`</td>
      <td>Whether to listen for mouse click events</td>
      <td>Default: `true`</td>
      <td>If set as `false`, it does not select anything by clicking the element when there is no selectable action.</td>
    </tr>
    <tr>
      <td>`start`</td>
      <td>Callback event before selectable</td>
      <td>
        Not set by default. The valid callback function is: <br>
        <pre style="padding: 5px; margin: 0">function(e) {}</pre>
      </td>
      <td>Return `false` in this callback event to cancel this selectable action.</td>
    </tr>
    <tr>
      <td>`finish`</td>
      <td>Callback event at the end of the selectable action</td>
      <td>
        Not set by default. The valid callback function is:
        <pre style="padding: 5px; margin: 0">function(data) {}</pre>
      </td>
      <td>
        `data` parameter is an object with the following attributes:
        <ul>
          <li>`data.selections`: Selected or unselected state of all elements, e.g. `{1: true, 2: false, ...}`;</li>
          <li>`data.selected`: Array of all selected elements ID, e.g. `["1", "3"]`.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`select`</td>
      <td>Callback event when a target element is selected</td>
      <td>
        Not set by default. The valid callback function is:
        <pre style="padding: 5px; margin: 0">function(data) {}</pre>
      </td>
      <td>
        `data` parameter is an object with the following attributes:
        <ul>
          <li>`id`: The ID of the target element being selected;</li>
          <li>`data.selections`: Selected or unselected state of all elements, e.g. `{1: true, 2: false, ...}`;</li>
          <li>`data.selected`: Array of all selected elements ID, e.g. `["1", "3"]`.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`unselect`</td>
      <td>Callback event when a target element is unselected</td>
      <td>
        Not set by default. The valid callback function is:
        <pre style="padding: 5px; margin: 0">function(data) {}</pre>
      </td>
      <td>
        `data` parameter is an object with the following attributes:
        <ul>
          <li>`id`：Target element currently being unchecked ID；</li>
          <li>`data.selections`：Selected or unselected state of all elements, e.g. `{1: true, 2: false, ...}`；</li>
          <li>`data.selected`：Array of all selected elements ID, e.g. `["1", "3"]`。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

#### Initialize and get the selected element

```js
var options = {
    selector: 'div', // All div within #selectable can be selected.
    rangeStyle: {
      border: '1px solid red' // Set the rectangle border of the selectable as red.
    },
    finish: function(data) {  // The callback function retured after it is selected.
        // Selected or unselected state of all elements.
        console.log(data.selections);

        // Array of all selected elements ID.
        console.log(data.selected);
    }
};

$('#selectable').selectable(options);
```

### Methods

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 120px;">Method</th>
      <th style="width: 200px;">Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`toggle()`</td>
      <td></td>
      <td>Toggle selected or unselected all target elements.</td>
    </tr>
    <tr>
      <td>`toggle(elementOrId)`</td>
      <td>`elementOrId`: The target element or its ID to be switched.</td>
      <td>Toggle the selected or unselected state of the specified target element.</td>
    </tr>
    <tr>
      <td>`select()`</td>
      <td></td>
      <td>Select all target elements.</td>
    </tr>
    <tr>
      <td>`select(elementOrId)`</td>
      <td>`elementOrId`: The target element or its ID to be selected.</td>
      <td>Check the specified target element。</td>
    </tr>
    <tr>
      <td>`unselect()`</td>
      <td></td>
      <td>Unselect all target elements.</td>
    </tr>
    <tr>
      <td>`unselect(elementOrId)`</td>
      <td>`elementOrId`: The target element or its ID to be unselected.</td>
      <td>Unselect the specified target element.</td>
    </tr>
    <tr>
      <td>`syncSelectionsFromClass()`</td>
      <td></td>
      <td>Sunchronize the selected and unselected states of the class of the element.</td>
    </tr>
  </tbody>
</table>

#### Call method

```js
// initialization
$('#selectable').selectable();

// Get selectable instance
var mySelectable = $('#selectable').data('zui.selectable');

// Call select-all method
mySelectable.select();

// Select the target element with ID 1030.
mySelectable.select('1030');
```


## Data table

ZUI [Data table](#view/datatable) supports selectable. Set `selectable` as `true` to use it, or set this option directly as the object supported in `selectable`.

<example class="selectable-example">
  <div class="message">Enable selectable for datatables</div>
  <table class="table" id="selectableDatableExample">
    <thead>
      <tr>
        <th>ID</th>
        <th class="flex-col">Name</th>
        <th class="flex-col">Integral</th>
        <th>Ranking</th>
      </tr>
    </thead>
    <tbody>
      <tr data-id="1526">
        <td>1526</td>
        <td>Little Sloppy</td>
        <td>1056</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 1 </td>
      </tr>
      <tr data-id="1001">
        <td>1001</td>
        <td>Brave Duckling</td>
        <td>999</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 12 </td>
      </tr>
      <tr data-id="1045">
        <td>1045</td>
        <td>Uncle Chicken</td>
        <td>998</td>
        <td class="text-green"><i class="icon icon-double-angle-up"></i> 23 </td>
      </tr>
      <tr data-id="1025">
        <td>1025</td>
        <td>Fearless Pig</td>
        <td>860</td>
        <td class="text-green"><i class="icon icon-double-angle-down"></i> 25 </td>
      </tr>
      <tr data-id="1102">
        <td>1102</td>
        <td>Bug</td>
        <td>749</td>
        <td class="text-red"><i class="icon icon-double-angle-up"></i> 30 </td>
      </tr>
    </tbody>
  </table>
</example>

```javasript
$('#selectableDatableExample').datatable({
    checkable: true, // Enable datatable selectable
    selectable: {    // Set options for selectable
        finish: function(e) {
            console.log('The number of selected rows:', e.selected.length);
        }
    }
});
```

<script src="../../dist/lib/datatable/zui.datatable.min.js"></script>
<link href="../../dist/lib/datatable/zui.datatable.min.css" rel="stylesheet">
<script src="../../dist/lib/selectable/zui.selectable.min.js"></script>
<script>
$(function() {
    var onTileSelect = function(e, that, a) {
      this.$.children('.message').html('You have selected <strong>#' + e.id + '</strong>. Total  <strong> selected.' + e.selected.length + '</strong> One。');
    };

    var $example1 = $('#selectableExample1');
    for(var i = 0; i < 36; ++i) {
        $example1.append('<div class="tile" data-id="' + (i + 1) + '">' + (i + 1) + '</div>');
    }
    $example1.selectable({
        selector: '.tile',
        clickBehavior: 'single',
        select: onTileSelect,
        unselect: onTileSelect
    });

    $('#selectableExample2').selectable({
        selector: 'tr',
        select: onTileSelect,
        unselect: onTileSelect
    });

    $('#selectableExample3').selectable({
        selectClass: 'selected',
        selector: '.shape',
        select: onTileSelect,
        unselect: onTileSelect
    });

    $('#selectableDatableExample').datatable({
        checkable: true,
        selectable: {
            finish: function(e) {
                $('#selectableDatableExample').prev('.message').html('You have selected  <strong>' + e.selected.length + '</strong> in total.');
            }
        }
    });
});
</script>
