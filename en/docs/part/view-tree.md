section: view
id: tree
description: Tree menu reflects hierarchical relationships
icon: icon-th-list
filter: shuxingcaidan sxcd shuxcd
---

# Tree

<style>
.nav-examples > li > a > code {display: none}
.nav-examples > li.active > a > code {display: inline;}
</style>

Tree is a menu displaying a hierarchical view, such as the file system directory.

## Examples

A tree menu is shown below. If a link contains a submenu, unfold it by clicking the icon to the left of the link. The link in the submenu can also contain another submenu.

To build a tree menu, embed `<ul>` by levels and add `[data-ride="tree"]` to the top node.

<div class="example">
  <ul id="treeExample" class="tree" data-ride="tree" data-initial-state="preserve">
    <li>
      <a href="#">fruit</a>
      <ul>
        <li><a href="#">apple</a></li>
        <li>
          <a href="#">tropical fruit</a>
          <ul>
            <li><a href="#">banana</a></li>
            <li><a href="#">mango</a></li>
            <li><a href="#">coconut</a></li>
            <li><a href="#">pineapple</a></li>
          </ul>
        </li>
        <li><a href="#">pear</a></li>
        <li><a href="#">strawberry</a></li>
        <li><a href="#">apricot</a></li>
        <li><a href="#">peach</a></li>
        <li><a href="#">plum</a></li>
      </ul>
    </li>
    <li>
      <a href="#">vegetables</a>
      <ul>
        <li>
          <a href="#">my vegetables</a>
          <ul>
            <li><a href="#">greens</a></li>
            <li><a href="#">baby bokchoy</a></li>
            <li><a href="#">spinach</a></li>
            <li><a href="#">cabbage</a></li>
          </ul>
        </li>
        <li>
          <a href="#">your melons</a>
          <ul>
            <li><a href="#">cucumber</a></li>
            <li><a href="#">pumpkin</a></li>
            <li><a href="#">loofah</a></li>
            <li><a href="#">bitter gourd</a></li>
            <li><a href="#">papaya</a></li>
          </ul>
        </li>
        <li><a href="#">bok choy</a></li>
        <li><a href="#">potato</a></li>
        <li><a href="#">eggplant</a></li>
      </ul>
    </li>
    <li>
      <a href="#">dessert</a>
      <ul>
        <li><a href="#">cake</a></li>
        <li><a href="#">ice cream</a></li>
        <li><a href="#">jelly</a></li>
      </ul>
    </li>
    <li class="open">
      <a href="#">nut</a>
      <ul>
        <li><a href="#">melon seeds</a></li>
      </ul>
    </li>
    <li>
      <a href="#">drink</a>
      <ul>
        <li><a href="#">coffee</a></li>
        <li><a href="#">tea</a></li>
      </ul>
    </li>
    <li><a href="#">liquor</a></li>
    <li><a href="#">porridge</a></li>
  </ul>
</div>

```html
<ul class="tree" data-ride="tree">
  <li>
    <a href="#">fruit</a>
    <ul>
      <li><a href="#">apple</a></li>
      <li>
        <a href="#">tropical fruit</a>
        <ul>
          ...
        </ul>
      </li>
      <li><a href="#">pear</a></li>
      ...
    </ul>
  </li>
  <li><a href="#">porridge</a></li>
  ...
</ul>
```

## Tree menu

For `.tree`, add `.tree-menu` to add a tree navigation appearance.

<example>
  <nav class="menu" data-ride="menu" style="width: 200px">
    <ul id="treeMenu" class="tree tree-menu" data-ride="tree">
      <li><a href="#"><i class="icon icon-th"></i>Home</a></li>
      <li><a href="#"><i class="icon icon-user"></i>Profile</a></li>
      <li>
        <a href="#"><i class="icon icon-time"></i>Update Time</a>
        <ul>
          <li><a href="#">Today</a></li>
          <li><a href="#">Tomorrow</a></li>
          <li><a href="#">Yesterday</a></li>
          <li><a href="#">This Week</a></li>
        </ul>
      </li>
      <li><a href="#"><i class="icon icon-trash"></i>Trash Bin</a></li>
      <li><a href="#"><i class="icon icon-list-ul"></i>All</a></li>
      <li class="open">
        <a href="#"><i class="icon icon-tasks"></i>Status</a>
        <ul>
          <li>
            <a href="#"><i class="icon icon-circle-blank"></i>Ready</a>
            <ul>
              <li><a href="#">Cancelled</a></li>
              <li><a href="#">Closed</a></li>
            </ul>
          </li>
          <li class="active"><a href="#"><i class="icon icon-play-sign"></i>Processing</a></li>
          <li><a href="#"><i class="icon icon-ok-sign"></i>Completed</a></li>
        </ul>
      </li>
    </ul>
  </nav>
</example>

```html
<nav class="menu" data-ride="menu" style="width: 200px">
  <ul id="treeMenu" class="tree tree-menu" data-ride="tree">
    <li><a href="#"><i class="icon icon-th"></i>Home</a></li>
    <li><a href="#"><i class="icon icon-user"></i>Profile</a></li>
    <li>
      <a href="#"><i class="icon icon-time"></i>Update Time</a>
      <ul>
        <li><a href="#">Today</a></li>
        <li><a href="#">Tomorrow</a></li>
        <li><a href="#">Yesterday</a></li>
        <li><a href="#">This Week</a></li>
      </ul>
    </li>
    <li><a href="#"><i class="icon icon-trash"></i>Trash Bin</a></li>
    <li><a href="#"><i class="icon icon-list-ul"></i>All</a></li>
    <li class="open">
      <a href="#"><i class="icon icon-tasks"></i>Status</a>
      <ul>
        <li>
          <a href="#"><i class="icon icon-circle-blank"></i>Ready</a>
          <ul>
            <li><a href="#">Cancelled</a></li>
            <li><a href="#">Closed</a></li>
          </ul>
        </li>
        <li class="active"><a href="#"><i class="icon icon-play-sign"></i>Processing</a></li>
        <li><a href="#"><i class="icon icon-ok-sign"></i>Completed</a></li>
      </ul>
    </li>
  </ul>
</nav>
```

```js
// Manually highlight menu items by clicking
$('#treeMenu').on('click', 'a', function() {
    $('#treeMenu li.active').removeClass('active');
    $(this).closest('li').addClass('active');
});
```

<script>
$('#treeMenu').on('click', 'a', function() {
    $('#treeMenu li.active').removeClass('active');
    $(this).closest('li').addClass('active');
});
</script>

## Appearance options

### Display the connection line between the hierarchical menus

`.tree-lines`

<div class="example">
  <ul class="tree tree-lines" data-ride="tree">
    <li class="open">
      <a href="#">fruit</a>
      <ul>
        <li><a href="#">apple</a></li>
        <li>
          <a href="#">tropical fruit</a>
          <ul>
            <li><a href="#">banana</a></li>
            <li><a href="#">mango</a></li>
            <li><a href="#">coconut</a></li>
            <li><a href="#">pineapple</a></li>
          </ul>
        </li>
        <li><a href="#">pear</a></li>
        <li><a href="#">strawberry</a></li>
        <li><a href="#">apricot</a></li>
        <li><a href="#">peach</a></li>
        <li>
          <a href="#">berry</a>
          <ul>
            <li><a href="">blackberries</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">vegetables</a>
      <ul>
        <li>
          <a href="#">my vegetables</a>
          <ul>
            <li><a href="#">vegetables</a></li>
            <li><a href="#">baby bokchoy</a></li>
            <li><a href="#">spinach</a></li>
            <li><a href="#">cabbage</a></li>
          </ul>
        </li>
        <li>
          <a href="#">Your melons</a>
          <ul>
            <li><a href="#">cucumber</a></li>
            <li><a href="#">pumpkin</a></li>
            <li><a href="#">loofah</a></li>
            <li><a href="#">bitter gourd</a></li>
            <li><a href="#">papaya</a></li>
          </ul>
        </li>
        <li><a href="#">bok choy</a></li>
        <li><a href="#">potato</a></li>
        <li><a href="#">eggplant</a></li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="tree tree-lines" data-ride="tree">
  ...
</ul>
```

### Use different icons

#### Built-in icons

<div class="example">
  <ul class="nav nav-tabs" id="treeIconsExampleNav" style="margin: -21px -21px 10px -21px; background-color: #fafafa">
    <li class="active"><a href="###">Default</a></li>
    <li><a href="folders">Folder`.tree-folders`</a></li>
    <li><a href="chevrons">V-shape`.tree-chevrons`</a></li>
    <li><a href="angles">Right angle`.tree-angles`</a></li>
  </ul>
  <ul class="tree tree-lines" id="treeIconsExample" data-ride="tree">
    <li class="open">
      <a href="#">fruit</a>
      <ul>
        <li><a href="#">apple</a></li>
        <li>
          <a href="#">tropical fruit</a>
          <ul>
            <li><a href="#">banana</a></li>
            <li><a href="#">mango</a></li>
            <li><a href="#">coconut</a></li>
            <li><a href="#">pineapple</a></li>
          </ul>
        </li>
        <li><a href="#">pear</a></li>
        <li><a href="#">strawberry</a></li>
        <li><a href="#">apricot</a></li>
        <li><a href="#">peach</a></li>
        <li><a href="#">plum</a></li>
      </ul>
    </li>
    <li>
      <a href="#">vegetables</a>
      <ul>
        <li>
          <a href="#">my vegetables</a>
          <ul>
            <li><a href="#">vegetables</a></li>
            <li><a href="#">baby bokchoy</a></li>
            <li><a href="#">spinach</a></li>
            <li><a href="#">cabbage</a></li>
          </ul>
        </li>
        <li>
          <a href="#">your melons</a>
          <ul>
            <li><a href="#">cucumber</a></li>
            <li><a href="#">pumpkin</a></li>
            <li><a href="#">loofah</a></li>
            <li><a href="#">bitter gourd</a></li>
            <li><a href="#">papaya</a></li>
          </ul>
        </li>
        <li><a href="#">bok choy</a></li>
        <li><a href="#">potato</a></li>
        <li><a href="#">eggplant</a></li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="tree tree-lines" data-ride="tree">
  ...
</ul>
```

#### Use CSS Custom icons

```css
tree-custom-icons > li > .list-toggle:before {content: '\e6dd'}
.tree-custom-icons > li.open > .list-toggle:before {content: '\e6df'}
```

### Enable animations

`data-animate="true"`

<div class="example">
  <ul class="tree tree-lines" data-ride="tree" data-animate="true">
    <li class="open in">
      <a href="#">fruit</a>
      <ul>
        <li><a href="#">apple</a></li>
        <li>
          <a href="#">tropical fruit</a>
          <ul>
            <li><a href="#">banana</a></li>
            <li><a href="#">mango</a></li>
            <li><a href="#">coconut</a></li>
            <li><a href="#">pineapple</a></li>
          </ul>
        </li>
        <li><a href="#">pear</a></li>
        <li><a href="#">strawberry</a></li>
        <li><a href="#">apricot</a></li>
        <li><a href="#">peach</a></li>
        <li><a href="#">plum</a></li>
      </ul>
    </li>
    <li>
      <a href="#">vegetables</a>
      <ul>
        <li>
          <a href="#">my vegetables</a>
          <ul>
            <li><a href="#">vegetables</a></li>
            <li><a href="#">baby bokchoy</a></li>
            <li><a href="#">spinach</a></li>
            <li><a href="#">cabbage</a></li>
          </ul>
        </li>
        <li>
          <a href="#">your melons</a>
          <ul>
            <li><a href="#">cucumber</a></li>
            <li><a href="#">pumpkin</a></li>
            <li><a href="#">loofah</a></li>
            <li><a href="#">bitter gourd</a></li>
            <li><a href="#">papaya</a></li>
          </ul>
        </li>
        <li><a href="#">bok choy</a></li>
        <li><a href="#">potato</a></li>
        <li><a href="#">eggplant</a></li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="tree tree-lines" data-animate="true" data-ride="tree">
  ...
</ul>
```

## How to use it

### Call method

You can call the tree menu in two ways:

*   For `ul.tree`, add `data-ride="tree"` attributes. It will automatically initialize the tree menu after the file is loaded;
*   Use jQuery to manually initialize the tree menu.

```js
$('#tree').tree(options);
```

### Options

Available options are as follows:

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
      <td>`animate`</td>
      <td>Animation</td>
      <td>*   `true`: Enable animation
*   `false`(default): Disable animation</td>
      <td></td>
    </tr>
    <tr>
      <td>`initialState`</td>
      <td>Initial state</td>
      <td>*   `'normal'`(default): Dependent on dom structure
*   `'expand'`: Expand all
*   `'collapse'`: Collapse all
*   `'preserve'`: Restore the status of last user action from local storage
*   `'active'`: Expand active node and its parents nodes</td>
      <td>If `'normal'` and `<li>` contains `.open` with internal submenu, the submenu(submenu that does not include submenus) will expand after the initialization. Otherwise, it is collapsed.</li></td>
    </tr>
    <tr>
      <td>`data`</td>
      <td>Tree node data</td>
      <td>Array. It contains all node objects. Optional.</td>
      <td>See **Data loading and updating** for the format</td>
    </tr>
    <tr>
      <td>`itemCreator`</td>
      <td>Node creation function</td>
      <td>function</td>
      <td>Refer to **Data loading and updating** for node creation function usage.</td>
    </tr>
    <tr>
      <td>`itemWrapper`</td>
      <td>Node wrapper</td>
      <td>*   `false`(default): Node wrapper is disabled.
*   `true`: Enable default node wrapper
*   E.g. `'<div class="my-tree-node/">'`: Create a node wrapper HTML text</div></td>
      <td>See **Data loading and updating** for usage</td>
    </tr>
  </tbody>
</table>

Parameters can be called manually in `$().tree(options)`, or specify in `data-*=""`.

### Methods

#### Expand node

The methods available are as follows:

*   **expand()**
*   **expand(params)**
*   **expand(params, disabledAnimate)**

The parameters are defined as follows:

*   `params`: A jQuery`<li>` object. Specify the nodes to be expanded. Expand all nodes when it is not used;
*   `disabledAnimate`: Whether to disable animation. Default: `false`;

```js
// Use tree instance
var myTree = $('#tree').data('zui.tree');
myTree.expand(params);

// Use tree()
$('#tree').tree('expand', params);
```

#### Collapse node

The methods available are as follows:

*   **collapse()**
*   **collapse(params)**
*   **collapse(params, disabledAnimate)**

The parameters are defined as follows:

*   `params`: A jQuery`<li>`Object. Specify the nodes that need to be collapsed. Collapse all nodes when this parameter is not used;
*   `disabledAnimate`: Whether to disable animation. Default: `false`;

```js
// Use tree instance
var myTree = $('#tree').data('zui.tree');
myTree.collapse(params);

// Use tree()
$('#tree').tree('collapse', params);
```

#### Toggle node

Toggle node is used to switch between expanded or collapsed.

The methods available are as follows:

*   **toggle()**
*   **toggle(params)**
*   **toggle(params, disabledAnimate)**

The parameters are defined as follows:

*   `params`: A jQuery`<li>` object. Specify the node to switch. Switch all nodes when this parameter is not used;
*   `disabledAnimate`: Whether to disable animation. Default: `false`;

```js
// Use tree instance
var myTree = $('#tree').data('zui.tree');
myTree.toggle(params);

// Use tree()
$('#tree').tree('toggle', params);
```

#### Show node

Expand current node and all child nodes.

The methods available are as follows:

*   **show()**
*   **show(params)**
*   **show(params, disabledAnimate)**

The parameters are defined as follows：

*   `params`：A jQuery`<li>`. Specify the nodes that need to be displayed. Show all nodes when this parameter is not used;
*   `disabledAnimate`: Whether to disable animation. Default: `false`;

```js
// Use tree instance
var myTree = $('#tree').data('zui.tree');
myTree.show(params);

// Use tree()
$('#tree').tree('show', params);
```

#### Add node

There are two ways to add nodes to a tree. One is to use jQuery to insert a DOM node that into the meet the requirements in the tree. The other is to use the tree instance method `add($element, items)` to add node data, and its optional forms are:

*   **add($element, items)**
*   **add($element, items, expand)**
*   **add($element, items, expand, disabledAnimate)**

The last three parameters can be omitted. The parameters are defined as follows:

*   `$element`: The parent node to be inserted(jQuery instance), `<ul>` or `<li>`;
*   `items`: Array. Node data to be inserted;
*   `expand`: Whether to expand immediately after the insertion;
*   `disabledAnimate`: If you need to expand immediately after inserting, disable the animation.

```js
// Obtain tree instance
var myTree = $('#myTree').data('zui.tree');

// Prepare the inserted data
var newItems = [{title: 'New node'}, ...];

// Insert data into the root node
myTree.add('#myTree', newItems);
```

#### Export tree data

When a new node is added or the node is removed, use `toData([$ul], [filter])` to get the updated data of the current tree. The methods has the following forms:

*   **toData()**
*   **toData($ul)**
*   **toData(filter)**
*   **toData($ul, filter)**

The parameters are defined as follows:

*   **$ul**: Specify the `<ul>` node of the which export the data. The default is the root node of the tree and export all node data for the entire tree.
*   **filter**: Specify a callback function to convert the data to the right format. The callback function includes two parameters: `item`, node data being exported; and `$li`, exporting `<li>` node object. A JavaScript Object should be returned in this callback function.

```js
// Get tree instance
var myTree = $('#myTree').data('zui.tree');

// Here you can update the tree structure

// Get updated tree data
var myTreeData = myTree.toData(function(item, $li) {
    item._id = $li.data('id');
    return item;
});
```

### Events

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Event</th>
      <th>jQuery event name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`expand`</td>
      <td>`expand.zui.tree`</td>
      <td>This event is triggered when the menu is expanded.</td>
    </tr>
    <tr>
      <td>`collapse`</td>
      <td>`collapse.zui.tree`</td>
      <td>This event is triggered when the menu is collapsed.</td>
    </tr>
  </tbody>
</table>

#### Listen events

```js
// Use jQuery to bind events
$('#tree').on('expand.zui.tree', function(){...});

// Specify the event callback method by parameter
$('#tree').tree({expand: function(){...}});
```

<script>
function afterPageLoad() {
    var $nav = $('#treeIconsExampleNav'),
        $example = $('#treeIconsExample'),
        $nameInCode = $('#treeIconsNameForExample');
    $nav.on('click', 'a', function(e) {
        var $a = $(this);
        $nav.find('li.active').removeClass('active');
        $a.parent('li').addClass('active');
        var name = $a.attr('href').replace(/#/g, '');
        if(name) name = ' tree-' + name;
        $nameInCode.text(name);
        $example.attr('class', 'tree tree-lines' + name);
        e.preventDefault();
    });

    $('[data-ride=tree]').tree();
}
</script>

## Data loading and updating

### Use data to initialize

When initializing the tree menu, use `data` to specify data for users to build the tree. This allows you to show the tree at the right time. For example, get the data from a remote server and then display it.

User initialized data is an array. Each array contains several objects to create nodes in the tree(Hereinafter referred to as a node object).

The attributes that may be included in the node object are as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 90px">Attribute</th>
      <th style="width: 250px">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`title`</td>
      <td>`'First node'`</td>
      <td>Text displayed on the node.</td>
    </tr>
    <tr>
      <td>`url`</td>
      <td>`'http://openzui.com'`</td>
      <td>Optional. Display nodes as links. Specify link address.</td>
    </tr>
    <tr>
      <td>`html`</td>
      <td>`'<strong>Emphasize nodes</strong>'`</td>
      <td>Optional. Used to set as a node HTML. If you specify this option, `title` can be omitted.</td>
    </tr>
    <tr>
      <td>`children`</td>
      <td>`[{title: 'Child node1'}, {title: 'Child node2'}, ...]`</td>
      <td>Optional. Set all child nodes of this node as an array. The child node is set in the same way as the initialization data. This recursive structure is consistent with the nested structure of the tree itself.</td>
    </tr>
    <tr>
      <td>`open`</td>
      <td>`true`, `false`（default）</td>
      <td>Optional. If the node contains child nodes, whether the current node is expanded.</td>
    </tr>
    <tr>
      <td>`id`</td>
      <td>Not set by default</td>
      <td>Used to set `[data-id]` of `<li>`. If you set this property, make sure that the value of each node is unique in the tree.</li></td>
    </tr>
  </tbody>
</table>

In addition to the naming attributes already defined above, you can still include custom properties and data in the node data.

The following code demonstrates using data to initialize an empty `<ul class="tree">`:

```html
<!-- Create an empty tree. Need to include .tree CLASS -->
<ul class="tree" id="myTree"></ul>
```

```js
var myTreeData = [{
    title: 'fruit',
    url: 'http://openzui.com',
    open: true,
    children: [
        {title: 'orange'},
        {
            title: 'melon',
            children: [
              {title: 'watermelon'},
              {title: 'cucumber'}
            ]
        }
    ]
}, {
    title: 'nut',
    children: [
        {title: 'sunflower'},
        {title: 'melon seeds'}
    ]
}, {
    title: 'vegetables'
}];

$('#myTree').tree({data: myTreeData});
```

### Dynamically update data

When the tree is initialized, `reload(data)` is still available to dynamically update data.

```js
// Get tree instance
var myTree = $('#myTree').data('zui.tree');

// Prepare new data
var myNewTreeData = [...];

// Update data
myTree.reload(myNewTreeData);
```

### Using the node constructor

It can be easy to customize the node constructor DOM content using the node constructor. Use initialization options `itemCreator` to define the node constructor callback function. The node constructor is called when initializing node data or updating node data. Its forms are as follows:

*   **function($li, item)**

The parameters are defined as follows:

*   `$li`: The node instance currently being constructed;
*   `item`: Node data currently used for construction.

Construct a node by directly manipulating the node instance in the node constructor callback function:

```js
// Constructor callback function in initialization options
$('#myTree').tree({
    data: [...],
    itemCreator: function($li, item) {
        $li.append($('<a/>', {href: item.url}).text(item.title));

        // return false; // If you want to ignore the current node, returned false.
    }
})
```

### Remove or empty nodes

Use jQuery to select the node you want to remove. Call jQuery instance `remove()` or `empty()`.

```js
// Remove one of the nodes
$('#myTree li[data-id="myTreeNodeId"]').remove();

// Empty the entire tree node
$('#myTree').empty();
```
