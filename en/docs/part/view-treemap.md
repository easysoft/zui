# Treemap

## Comprehensive examples

### Created from <span class="code">data</span> options.

Use `data` options to specify the tree structure.

<example>
  <div id="treemapExample1"></div>
</example>

```html
<div id="treemapExample1"></div>
```

```js
$('#treemapExample1').treemap({
    data: {
        text: 'vegetables',
        children: [{
            html: '<i class="icon icon-heart text-danger"></i> my type',
            children: [{
                textColor: 'green',
                text: 'vegetables'
            }, {
                html: '<span class="text-info">spinach</span>'
            }]
        }, {
            text: 'your melon',
            style: {border: '1px solid green'},
            collapsed: true,
            tooltip: 'Click to expand or collapse',
            children: ['pumpkin', 'watermelon', 'loofah', 'bitter gourd']
        }, {
            text: 'cabbage',
            children: ['big cabbage']
        }, {
            color: 'orange',
            textColor: 'white',
            text: 'potato'
        }]
    }
});
```

### Created from <span class="code text-danger">&lt;ul class="treemap-data"&gt;</span> element.

Use `<li>` in `<ul class="treemap-data">` to specify the content of nodes. Embed `<ul>` to show the hierarchical structure. Add `[data-*=]` in `<li>` to set node properties. Use `<div class="content">` in `<li>` to set `html` attributes of nodes(set the content of nodes). Use `<div class="text">` to set the `text` attributes of nodes.

<example>
  <div id="treemapExample2" class="treemap">
    <ul class="treemap-data hide">
      <li>
        fruit
        <ul>
          <li>
            apple
            <ul>
              <li>
                big apple
                <ul>
                  <li><strong class="text-danger">big red apple</strong></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            tropical fruit
            <ul>
              <li>banana</li>
              <li>mango</li>
              <li>coconut</li>
              <li>pineapple</li>
            </ul>
          </li>
          <li>
            <div class="content">
              <strong>apricot</strong>
              <div><span class="label label-danger">Favorite</span></div>
            </div>
          </li>
          <li data-collapsed="true">
            peach
            <ul>
              <li>nectarine</li>
              <li>peach</li>
            </ul>
          </li>
          <li>plum</li>
        </ul>
      </li>
    </ul>
  </div>
</example>

```html
<div id="treemapExample2" class="treemap">
  <!-- Embed a ul Element to show the tree structure -->
  <ul class="treemap-data hide">
    <li>
      fruit
      <ul>
        <li>
          apple
          <ul>
            <li>
              big apple
              <ul>
                <li><strong class="text-danger">big red apple</strong></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          tropical fruit
          <ul>
            <li>banana</li>
            <li>mango</li>
            <li>coconut</li>
            <li>pineapple</li>
          </ul>
        </li>
        <li>
          <div class="content">
            <strong>apricot</strong>
            <div><span class="label label-danger">Favorite</span></div>
          </div>
        </li>
        <li data-collapsed="true">
          peach
          <ul>
            <li>nectarine</li>
            <li>peach</li>
          </ul>
        </li>
        <li>plum</li>
      </ul>
    </li>
  </ul>
</div>
```

```js
$('#treemapExample2').treemap();
```

## Usage

### Introduce assets

Treemap is an independent component. You need to introduce assets in lib/ from local or CDN:

```html
<link href="lib/treemap/zui.treemap.min.css" rel="stylesheet">
<script src="lib/treemap/zui.treemap.min.js"></script>
```

### Initialization

```html
<div class="treemap"></div>
```

```js
// Create via data options
$('#myTreemap').treemap({
    data: [Node data],
    // Other initialization options
});

// If there are no other options, you can directly use the data array of the node data array as a parameter.
$('#myTreemap').treemap([Node data]);
```

```js
// Create via <ul class="treemap-data">
$('#myTreemap').treemap();
```

## Node objects

Use one JS object to store each node of a treemap. The properties used in a treemap are:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Property</th>
      <th style="width: 80px">Name</th>
      <th style="width: 300px">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>Node ID</td>
      <td>String or number</td>
      <td>All nodes must have a unique value as ID in the treemap. If not specified, use  `$.zui.uuid()` to generate one。.</td>
    </tr>
    <tr>
      <td>`text`</td>
      <td>The text displayed on the node</td>
      <td>String. Default: `''`</td>
      <td>If neither `text` Attribute nor `html` is not specified, the content of the node is not displayed.</td>
    </tr>
    <tr>
      <td>`html`</td>
      <td>Display HTML text of the node</td>
      <td>String. Default: `''`</td>
      <td>If neither `text` nor `html` is specified, the content of the node is not displayed.</td>
    </tr>
    <tr>
      <td>`children`</td>
      <td>Child node</td>
      <td>Array of objects. Default: `[]`</td>
      <td>If there are no child nodes, it can be ignored.</td>
    </tr>
    <tr>
      <td>`order`</td>
      <td>Display order</td>
      <td>Default: `''`</td>
      <td>If specified, this attribute is used to compare nodes on the same level and reorder them. Otherwise the order set in the installation array is displayed.</td>
    </tr>
    <tr>
      <td>`style`</td>
      <td>Node style</td>
      <td>Object. Default: `{}`</td>
      <td>Use jQuery of CSS method parameter objects</td>
    </tr>
    <tr>
      <td>`textColor`</td>
      <td>Text color</td>
      <td>A string representing a color, e.g. `'#f00'`</td>
      <td></td>
    </tr>
    <tr>
      <td>`color`</td>
      <td>background color</td>
      <td>A string representing a color, e.g. `'#f00'`</td>
      <td></td>
    </tr>
    <tr>
      <td>`border`</td>
      <td>Border style</td>
      <td>A string that defines the border style in CSS format, e.g. `'1px solid #f00'`</td>
      <td>You can also specify one, e.g. `'#f00'`</td>
    </tr>
    <tr>
      <td>`title`</td>
      <td>Remarks</td>
      <td>String. Default: `''`</td>
      <td>The value of node element `title`</td>
    </tr>
    <tr>
      <td>`tooltip`</td>
      <td>tooltip</td>
      <td>String. Default: `''`</td>
      <td>Tooltip content displayed when the mouse is hovering over the node</td>
    </tr>
    <tr>
      <td>`className`</td>
      <td>Class Attributes of a node element</td>
      <td>Object. Default: ``</td>
      <td></td>
    </tr>
    <tr>
      <td>`attrs`</td>
      <td>Node element attributes</td>
      <td>Object. Default: `{}`</td>
      <td>Use as `$().attr(attrs)` parameter</td>
    </tr>
    <tr>
      <td>`foldable`</td>
      <td>Whether you can fold child nodes</td>
      <td>Default: `true`</td>
      <td>If set as `false`, the folded and expanded icons are not displayed below the node. `clickNodeToFold` option will not work.</td>
    </tr>
  </tbody>
</table>

An array of node objects is used to hold a set of nodes on the same level. The following is an example of storing a root node data object:

```js
{
        text: 'vegetables',
        children: [{
            html: '<i class="icon icon-heart text-danger"></i> my type',
            children: [{
                textColor: 'green',
                text: 'vegetables'
            }, {
                html: '<span class="text-info">spinach</span>'
            }]
        }, {
            text: 'your melon',
            style: {border: '1px solid green'},
            collapsed: true,
            tooltip: 'Click to expand or collapse',
            children: ['pumpkin', 'watermelon', 'loofah', 'bitter gourd']
        }, {
            text: 'cabbage',
            children: ['big cabbage']
        }, {
            color: 'orange',
            textColor: 'white',
            text: 'potato'
        }]
    }
}
```

## Options

You can pass an object to set options during initialization, or add `[data-*=]` in `.treemap` to specify options. Available options are as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Option</th>
      <th style="width: 80px">Name</th>
      <th style="width: 300px">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`data`</td>
      <td>Treemap structure data</td>
      <td>Object or array. Default: `null`</td>
      <td>Decide which nodes are shown in the chart and the hierarchy of nodes</td>
    </tr>
    <tr>
      <td>`rowSpace`</td>
      <td>Spacing between node levels</td>
      <td>Number. Default: `30`</td>
      <td></td>
    </tr>
    <tr>
      <td>`nodeSpace`</td>
      <td>Spacing between adjacent nodes on the same level</td>
      <td>Number. Default: `20`</td>
      <td></td>
    </tr>
    <tr>
      <td>`foldable`</td>
      <td>Whether child nodes cam be folded</td>
      <td>Default: `true`</td>
      <td>If set as `false`, the folded and expanded icons are not displayed below the node, and `clickNodeToFold` will not work.</td>
    </tr>
    <tr>
      <td>`clickNodeToFold`</td>
      <td>Whether clicking the node will fold the child node</td>
      <td>Default: `true`</td>
      <td>If you turn off this option, you cannot click on a node to collapse and expand a child node. But you still can do it by clicking the collapse icon below the node.</td>
    </tr>
    <tr>
      <td>`sort`</td>
      <td>Whether to enable sorting</td>
      <td>Boolean or function. Default: `false`</td>
      <td>If set as a function, use this function to compare nodes. If set as `true`, use `order` of the node to compare.</td>
    </tr>
    <tr>
      <td>`cableWdth`</td>
      <td>Cable width</td>
      <td>Number. Default: `1`</td>
      <td>If `0`, the cable is not displayed.</td>
    </tr>
    <tr>
      <td>`cableColor`</td>
      <td>Cable color</td>
      <td>A string representing a color. Default: `#808080`</td>
      <td>If `0`, the cable is not displayed.</td>
    </tr>
    <tr>
      <td>`cableStyle`</td>
      <td>Cable style</td>
      <td>A string that defines a cable style. Default: `solid`</td>
      <td>You can use all values of CSS `border-style`.</td>
    </tr>
    <tr>
      <td>`listenNodeResize`</td>
      <td>Monitor node size change</td>
      <td>Default: `true`</td>
      <td>If `true`, redraw the cable when any of the node sizes change. If the node size does not change after the treemap is drawn, set it as `false` to turn off this option to avoid additional program execution.</td>
    </tr>
    <tr>
      <td>`tooltip`</td>
      <td>Tooltip options</td>
      <td>Object. Default: `{}`</td>
      <td>You can use the options of the tooltip plugin to set how tooltips on a node are displayed.</td>
    </tr>
    <tr>
      <td>`nodeStyle`</td>
      <td>Define the default style of the node</td>
      <td>Object. Default: `{}`</td>
      <td>Use jQuery CSS Method parameter object</td>
    </tr>
    <tr>
      <td>`nodeTemplate`</td>
      <td>Node element template</td>
      <td>String or function</td>
      <td>The default is `<div class="treemap-node"><a class="treemap-node-wrapper"></a></div>`. If set as a function, return the created node element (jQuery Object) through the function. The first parameter of this function is a node object.</td>
    </tr>
  </tbody>
</table>

## Methods

### <span class="code text-danger">$().treemap('render')</span>

Re-rendering the treemap. Usually you don't have to call this method manually, for it automatically renders after initialization. If the treemap is found rendered incorrectly or misaligned, you can call this method to correct the actual effect.

```js
// Simple call
$('#myTreemap').treemap('render');
```

```js
// You can also call it like this
// Get a treemap instance
var myTreemap = $('#myTreemap').data('zui.treemap');
// Call instance method
myTreemap.render();
```

### <span class="code text-danger">$().treemap('render', data)</span>

Render a treemap with new data. Call this method to update the treemap immediately.

```js
// Simple call
var myTreemapData = [...];
$('#myTreemap').treemap('render', myTreemapData);
```

```js
// You can also call it like this
// Get a treemap instance
var myTreemap = $('#myTreemap').data('zui.treemap');
// Call instance method
var myTreemapData = [...];
myTreemap.render(myTreemapData);
```

### <span class="code text-danger">$().treemap('drawLines')</span>

Recalculate and draw the cable. This method is usually called manually. If the treemap is found rendered incorrectly or misaligned, you can call this method to correct the actual effect.


```js
// Simple call
$('#myTreemap').treemap('drawLines');
```

```js
// You can also call it like this
// Get a treemap instance
var myTreemap = $('#myTreemap').data('zui.treemap');
// Call instance method
myTreemap.drawLines();
```

### <span class="code text-danger">$().treemap('toggle', $node, toggle)</span>

Collapse or expand the specified node. This method also has the following:

* `toggle()`: Collapse or expand the first root node;
* `toggle($node)`: Collapse or expand the specified node. `$node` is the specified `.treemap-node`;
* `toggle(toggle)`: Collapse or expand the first root node. If `toggle` is `true`, expand the node. If `false`, collapse it;
* `toggle($node, toggle)`: Collapse or expand the specified node. `$node` is the specified `.treemap-node`. If `toggle` is `true`, expand the node, If `false`, collapse it;

```js
// Collapse or expand the root node
$('#myTreemap').treemap('toggle');

// Collapse or expand the specified node
var $node = $('.treemap-node[data="1497683935614002"]');
$('#myTreemap').treemap('toggle', $node);

// Expand the root node
$('#myTreemap').treemap('toggle', true);

// Switch the specified node
var $node = $('.treemap-node[data="1497683935614002"]');
$('#myTreemap').treemap('toggle', $node, false);
```

```js
// You can also call it like this

// Get a treemap instance
var myTreemap = $('#myTreemap').data('zui.treemap');

// Call instance method

// Collapse or expand the root node
myTreemap.toggle();

// Collapse or expand the specified node
var $node = $('.treemap-node[data="1497683935614002"]');
myTreemap.toggle($node);

// Expand the root node
myTreemap.toggle(true);

// Switch the specified node
var $node = $('.treemap-node[data="1497683935614002"]');
myTreemap.toggle($node, false);
```

### <span class="code text-danger">showLevel(level)</span>

Expand nodes by level. `level` is the node level to be expanded. `0` is the root node.

```js
// Get a treemap instance
var myTreemap = $('#myTreemap').data('zui.treemap');

// Call instance method

// Expand all secondary nodes
myTreemap.showLevel(2);
```

## Events

### event <span class="code text-danger">afterRender</span>

The event is trigered when rendering is completed.

```js
// use jQuery.on() method to bind events
$('#myTreemap').on('afterRender', function() {
    console.log('Treemap is finished.');
});
```

```
// Listen events using options during initialization
$('#myTreemap').treemap({
    // ...
    'afterRender': function() {
        console.log('Treemap is finished.');
    }
});
```

### event <span class="code text-danger">afterDrawLines</span>

This event is triggered after a cable is redrawn.

```js
// Use jQuery.on() method to bind events
$('#myTreemap').on('afterDrawLines', function() {
    console.log('The cable is redrawn.');
});
```

```
// Listen events via options during initialization
$('#myTreemap').treemap({
    // ...
    'afterDrawLines': function() {
        console.log('The cable is redrawn.');
    }
});
```

### event <span class="code text-danger">onNodeClick</span>

This event is triggered when the user clicks on a node element. The event callback function contains a node obejct being clicked as a paramenter.

```js
// Use jQuery.on() method to bind events
$('#myTreemap').on('onNodeClick', function(node) {
    console.log('The node being clicked is', node);
});
```

```
// Listen events via options during initialization
$('#myTreemap').treemap({
    // ...
    'onNodeClick': function(node) {
        console.log('The node being clicked is', node);
    }
});
```

## Other problems

### Redraw the chart

When you changed the content of the node element, its size is changed and the cable is misaligned. Then you can call `drawLines` to redraw the cable.

```js
// Simple call
$('#myTreemap').treemap('drawLines');
```

```js
// You can also call it like this
// Get a treemap instance
var myTreemap = $('#myTreemap').data('zui.treemap');
// Call instance method
myTreemap.drawLines();
```

### Custom node template

Usually node elements are automatically generated from node objects. You can also use `nodeTemplate` to specify a callback function to create a node element.

The following example is to add an icon in front of each node element based on the node object `icon`:

<example>
  <div id="treemapExample3" class="treemap"></div>
</example>

```html
<div id="treemapExample3" class="treemap"></div>
```

```js
$('#treemapExample3').treemap({
    data: {
        text: 'star',
        icon: 'star',
        children: [
            {text: 'heart', icon: 'heart'},
            {text: 'eye', icon: 'eye-open'},
            {text: 'gift', icon: 'gift'}
        ]
    },
    nodeTemplate: function(node, tree) {
        var $node = $('<div class="treemap-node"></div>');
        $node.append('<a class="treemap-node-wrapper">' + node.text + '</a>');
        $node.find('.treemap-node-wrapper').prepend('<i class="icon icon-' + node.icon + '"></i> ');
        return $node;
    }
});
```

### Multiple root nodes

Multiple root nodes can exist in the same treemap. This allows you to draw multiple treemaps at once. Just use the array to pass multiple root node data at the initialization.

<example>
  <div id="treemapExample4" class="treemap"></div>
</example>

```html
<div id="treemapExample4" class="treemap"></div>
```

```js
$('#treemapExample4').treemap({
    data: [
        {
            text: 'Figure 1',
            children: [
                {text: 'heart'},
                {text: 'eye'},
                {text: 'gift'}
            ]
        }, {
            text: 'Figure II',
            children: [
                {text: 'sun'},
                {text: 'moon'},
                {text: 'Earth'}
            ]
        }
    ]
});
```

<script src="../../dist/lib/treemap/zui.treemap.js"></script>
<link href="../../dist/lib/treemap/zui.treemap.css" rel="stylesheet">

<script>
function afterPageLoad() {
    setTimeout(function() {
      $('#treemapExample1').treemap({
          data: {
              text: 'vegetables',
              children: [{
                  html: '<i class="icon icon-heart text-danger"></i> my type',
                  children: [{
                      textColor: 'green',
                      text: 'vegetables'
                  }, {
                      html: '<span class="text-info">spinach</span>'
                  }]
              }, {
                  text: 'Your melon',
                  style: {border: '1px solid green'},
                  collapsed: true,
                  tooltip: 'Click to expand or collapse',
                  children: ['pumpkin', 'watermelon', 'Loofah', 'Bitter gourd']
              }, {
                  text: 'Cabbage',
                  children: ['Big cabbage']
              }, {
                  color: 'orange',
                  textColor: 'white',
                  text: 'potato'
              }]
          }
      });
      $('#treemapExample2').treemap();
      $('#treemapExample3').treemap({
          data: {
              text: 'star',
              icon: 'star',
              children: [
                  {text: 'heart', icon: 'heart'},
                  {text: 'eye', icon: 'eye-open'},
                  {text: 'gift', icon: 'gift'}
              ]
          },
          nodeTemplate: function(node, tree) {
              var $node = $('<div class="treemap-node"></div>');
              $node.append('<a class="treemap-node-wrapper">' + node.text + '</a>');
              $node.find('.treemap-node-wrapper').prepend('<i class="icon icon-' + node.icon + '"></i> ');
              return $node;
          }
      });
      $('#treemapExample4').treemap({
          data: [
              {
                  text: 'Figure 1',
                  children: [
                      {text: 'heart'},
                      {text: 'eye'},
                      {text: 'gift'}
                  ]
              }, {
                  text: 'Figure II',
                  children: [
                      {text: 'sun'},
                      {text: 'moon'},
                      {text: 'Earth'}
                  ]
              }
          ]
      });
    }, 1000);
}
</script>
