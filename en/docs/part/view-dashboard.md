section: view
id: dashboard
description: Panel grid that supports drag and drop adjustment
icon: icon-th-large
filter: yibiaopan ybp panel mianban mb
---

# Dashboard

Dashboards provide a flexible way to pass multiple panel groups(`.panel`) and use the grid to display the content.

<div class="alert alert-warning">
  <h4>Compatibility</h4>
  <p>Dashboard does not complete drag-and-drop sorting on touch screens.</p>
</div>

## Examples

### Introducing assets

Dashboard is an independent component. You need to introduce assets in lib/ from local or CDN:

```html
<link href="lib/dashboard/zui.dashboard.min.css" rel="stylesheet">
<script src="lib/dashboard/zui.dashboard.min.js"></script>
```

### Comprehensive examples

<example style="padding-bottom: 0">
  <div id="dashboard" class="dashboard dashboard-draggable" data-height="300">
    <section class="row">
      <div class="col-md-4 col-sm-6">
        <div class="panel" data-id="1">
          <div class="panel-heading">
            <i class="icon icon-list"></i>
            <span class="title">Panel Title</span>
          </div>
          <div class="panel-body">
            <p>Panel content.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="panel" data-id="2">
          <div class="panel-heading">
            <i class="icon icon-list"></i>
            <span class="title">List Group</span>
          </div>
          <div class="panel-body no-padding">
            <div class="list-group">
              <a href="" class="list-group-item">List group item 1</a>
              <a href="" class="list-group-item">List group item 2</a>
              <a href="" class="list-group-item">List group item 3</a>
              <a href="" class="list-group-item">List group item 4</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="panel" data-id="3">
          <div class="panel-heading">
            <i class="icon icon-table"></i>
            <span class="title">Table</span>
          </div>
          <div class="panel-body no-padding">
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
              <tr>
                <td>1526</td>
                <td>Little sloppy</td>
                <td>1056</td>
                <td class="text-red"><i class="icon icon-double-angle-up"></i> 1 </td>
              </tr>
              <tr>
                <td>1001</td>
                <td>Brave duckling</td>
                <td>999</td>
                <td class="text-red"><i class="icon icon-double-angle-up"></i> 12 </td>
              </tr>
              <tr>
                <td>1045</td>
                <td>Uncle chicken</td>
                <td>998</td>
                <td class="text-green"><i class="icon icon-double-angle-up"></i> 23 </td>
              </tr>
              <tr>
                <td>1025</td>
                <td>Fearless pig</td>
                <td>860</td>
                <td class="text-green"><i class="icon icon-double-angle-down"></i> 25 </td>
              </tr>
              <tr>
                <td>1102</td>
                <td>Bug</td>
                <td>749</td>
                <td class="text-red"><i class="icon icon-double-angle-up"></i> 30 </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="panel" data-id="4">
          <div class="panel-heading">
            <i class="icon icon-bolt"></i>
            <span class="title">Action Buttons</span>
            <div class="panel-actions">
              <a href="###" data-toggle="tooltip" title="edit"><i class="icon-pencil"></i></a>
              <button type="button" class="btn" data-toggle="tooltip" title="Collection"><i class="icon-heart-empty"></i></button>
              <div class="dropdown" data-toggle="tooltip" title="More actions">
                <button class="btn" data-toggle="dropdown" type="button"><i class="icon icon-ellipsis-v"></i></button>
                <ul class="dropdown-menu pull-right">
                  <li><a href="###"><i class="icon icon-ok"></i> Confirm</a></li>
                  <li><a href="###"><i class="icon icon-thumbs-o-up"></i> Custom action</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="panel-body">
            <p>At the head of the panel（<code>.panel-heading</code>）add links and buttons to customize actions.</p>
          </div>
        </div>
      </div>
      <div class="col-md-6" >
        <div class="panel" data-id="5" data-url="docs/partial/remote-panel.html">
          <div class="panel-heading">
            <i class="icon icon-globe"></i>
            <span class="title">Load remote content</span>
            <div class="panel-actions">
              <button type="button" class="btn refresh-panel" data-toggle="tooltip" title="Regain content from remote"><i class="icon-refresh"></i></button>
            </div>
          </div>
          <div class="panel-body">Waiting to load remote content.</div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="panel" data-id="6">
          <div class="panel-heading">
            <div class="title">Removable panel</div>
            <div class="panel-actions">
              <button type="button" class="btn remove-panel" data-toggle="tooltip" title="Remove panel"><i class="icon-remove"></i></button>
            </div>
          </div>
          <div class="panel-body">
            <p>Click on the top right <i class="icon icon-remove"></i> button to remove the panel.</p>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-sm-6">
        <div class="panel panel-loading" data-id="7">
          <div class="panel-heading"><code>.panel-loading</code></div>
          <div class="panel-body">
            <p>In <code>.panel</code>, add to <code>.panel-loading</code> class to load the appearance</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</example>

```html
<div id="dashboard" class="dashboard dashboard-draggable" data-height="300">
  <section class="row">
    <div class="col-md-4 col-sm-6">
      <div class="panel" data-id="1">
        <div class="panel-heading">
          <i class="icon icon-list"></i>
          <span class="title">Panel title</span>
        </div>
        <div class="panel-body">
          <p>Panel content。</p>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="panel" data-id="2">
        <div class="panel-heading">
          <i class="icon icon-list"></i>
          <span class="title">Include list group</span>
        </div>
        <div class="panel-body no-padding">
          <div class="list-group">
            ...
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="panel" data-id="3">
        <div class="panel-heading">
          <i class="icon icon-table"></i>
          <span class="title">Include form</span>
        </div>
        <div class="panel-body no-padding">
          <table class="table">
            ...
          </table>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel" data-id="4">
        <div class="panel-heading">
          <i class="icon icon-bolt"></i>
          <span class="title">Contains action buttons</span>
          <div class="panel-actions">
            <a href="###" data-toggle="tooltip" title="edit"><i class="icon-pencil"></i></a>
            <button type="button" class="btn" data-toggle="tooltip" title="Collection"><i class="icon-heart-empty"></i></button>
            <div class="dropdown" data-toggle="tooltip" title="More operations">
              <button class="btn" data-toggle="dropdown" type="button"><i class="icon icon-ellipsis-v"></i></button>
              <ul class="dropdown-menu pull-right">
                <li><a href="###"><i class="icon icon-ok"></i> confirm</a></li>
                <li><a href="###"><i class="icon icon-thumbs-o-up"></i> Custom operation</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel-body">
          <p>At the head of the panel（<code>.panel-heading</code>）Contains links and buttons to customize actions。</p>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel" data-id="5" data-url="docs/partial/remote-panel.html">
        <div class="panel-heading">
          <i class="icon icon-globe"></i>
          <span class="title">Load remote content</span>
          <div class="panel-actions">
            <button type="button" class="btn refresh-panel" data-toggle="tooltip" title="Regain content from remote"><i class="icon-refresh"></i></button>
          </div>
        </div>
        <div class="panel-body">Waiting to load remote content。</div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="panel" data-id="6">
        <div class="panel-heading">
          <div class="title">Removable panel</div>
          <div class="panel-actions">
            <button type="button" class="btn remove-panel" data-toggle="tooltip" title="Remove panel"><i class="icon-remove"></i></button>
          </div>
        </div>
        <div class="panel-body">
          <p>Click on the top right <i class="icon icon-remove"></i> Button to remove the panel。</p>
        </div>
      </div>
    </div>
    <div class="col-md-8 col-sm-6">
      <div class="panel panel-loading" data-id="6">
        <div class="panel-heading"><code>.panel-loading</code></div>
        <div class="panel-body">
          <p>for <code>.panel</code> Add to <code>.panel-loading</code> Class can achieve the appearance of loading。</p>
        </div>
      </div>
    </div>
  </section>
</div>
```

```js
$('#dashboard').dashboard({draggable: true});
```

## Options

Allow incoming object parameters or use when initializing `[data-*]` Attribute as an initialization option。The options you can use are as follows：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Option</th>
      <th>name</th>
      <th>Optional value</th>
      <th>description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`height`</td>
      <td>Panel height</td>
      <td>default `360`</td>
      <td></td>
    </tr>
    <tr>
      <td>`sensitive`</td>
      <td>Whether to enable sensitive judgment</td>
      <td>`false`，`true`（default）</td>
      <td>When set to `true` Time，When dragging the panel，Even if the mouse is not moved for placement in another panel area，If the panel shadow element moved at this time has already overlapped with a panel that can be placed, it will be judged that it can be placed in this panel area.（Perform a reorder operation）。</td>
    </tr>
    <tr>
      <td>`draggable`</td>
      <td>Whether you can drag and drop sort</td>
      <td>`false`，`true`（default）</td>
      <td>If set to `true`，Then the user can drag the panel head（`.panel-heading`）To rearrange the panels。</td>
    </tr>
    <tr>
      <td>`resizable`</td>
      <td>Is it possible to change the grid size?</td>
      <td>`false`，`true`（default）</td>
      <td>If set to `true`，The user can drag the right edge of the panel to dynamically change the grid size.（Decide panel width）。</td>
    </tr>
    <tr>
      <td>`resizeMessage`</td>
      <td>Display size change message</td>
      <td>`false`，`true`（default）</td>
      <td>If set to `true`，A floating message is displayed to indicate the current raster size when the user drags and changes the grid size。</td>
    </tr>
    <tr>
      <td>`data`</td>
      <td>Initialize panel</td>
      <td>Array of objects</td>
      <td>Specify an array of objects to generate rasters and panels at initialization time。</td>
    </tr>
    <tr>
      <td>`onlyRefreshBody`</td>
      <td>Remote update method</td>
      <td>`true`（default）、`false`</td>
      <td>If set to `true`，Remote content is only used for updates `.panel-body` element，Otherwise it will be updated `.panel`。</td>
    </tr>
    <tr>
      <td>`afterPanelRemoved`</td>
      <td>Callback function when the panel is removed</td>
      <td>function</td>
      <td>When the user clicks `.panel-actions` inside `.remove-panel` Elements are removed and the callback function is called。</td>
    </tr>
    <tr>
      <td>`panelRemovingTip`</td>
      <td>Confirmation message before removing the panel</td>
      <td>`false`（default）Or a string used to format text</td>
      <td>If set to a string，A confirmation dialog pops up with this string as a message before the panel is removed.，Include formatting parameters in a string `'{0}'` To display the currently removed panel title。</td>
    </tr>
    <tr>
      <td>`afterOrdered`</td>
      <td>Callback function after reordering panels</td>
      <td>function</td>
      <td></td>
    </tr>
    <tr>
      <td>`onResize`</td>
      <td>Callback function when changing the grid size</td>
      <td>function</td>
      <td></td>
    </tr>
    <tr>
      <td>`afterRefresh`</td>
      <td>Callback function after remote loading is completed</td>
      <td>function</td>
      <td></td>
    </tr>
  </tbody>
</table>

Use option：

```js
// Defining option objects
var options = {
    height: 400,
    afterOrdered: function(e) {
        console.log('Sort completed：', e);
    },
    // Set more options...
};

// Pass in option arguments at initialization
$('#dashboard').dashboard(options)
```

## Structure

### Panel

`.panel` is a basic container element used to display contents on the dashboard.

`.panel-heading` and `.panel-body` are required.

`.panel-body` has padding by default. If you need to remove it, you can add `.no-padding` class to `.panel-body`. This is necessary for `.panel-body` to embed `<table>`, `<ul>` or `.list-group`, etc.

`[data-id]` attributes should be defined for each panel. Its value is a globally unique string used to track this block location and other actions. If it is not defined, a random string is generated as the identifier when the dashboard is initialized.

### Grid

Dashboard uses a grid to determine the panel size and placement.

Embed `.row` in `.dashboard` and  use `.col-*` in `.row` as a container.

All grid modifier classes are valid and fully responsive designed.

### HTML structure

Panels and grids also need to specific classes and structures to place contents. The general form is as follows:

```html
<div class="dashboard">
  <div class="row">
    <!-- Use a grid -->
    <div class="col-md-6">
      <!-- Panel. Define data-id for it -->
      <div class="panel" data-id="panel1">
        <!-- Panel head -->
        <div class="panel-heading">
          <!-- Panel icon -->
          <i class="icon"></i>
          <!-- Panel title -->
          <span class="title">title</span>
          <!-- Panel action button -->
          <div class="panel-actions">
            <!-- Remove panel button -->
            <a href="" class="remove-panel"><i class="icon-remove"></i></a>
            ...
          </div>
        </div>
        <div class="panel-body">
          <!-- Embed panel content here -->
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="panel" data-id="panel2">...</div>
    </div>
    ...
  </div>
</div>
```

### Use initialization data

Initialize the dashboard and specify `data` option to dynamically generate HTML structure required in a dashboard. `data` is an array containing panel configuration objects.

```html
<div class="dashboard" id="myDashboard"></div>
```

```js
// Define an array of configuration objects for all panels
var data = [{
    id: 'panel1',   // Panel number
    colWidth: '4',  // Grid size
    url: ''         // Set panel remote content update url
}, ...]

// Initialization
$('#myDashboard').dashboard({data: data});
```

Available properties for panel configuration objects include:

 - `id`: Globally unique panel number;
 - `colWidth`: Grid size with value `1-12`;
 - `url`: Set panel remote content update url;
 - `colAttrs`: Set the grid column element HTML attributes, e.g. `{title: ''}`;
 - `panelAttrs`: Set panel elements HTML attributes, e.g. `{title: ''}`;
 - `content`: HTML Code embedded in `.panel`. It can also be specified as a function to dynamically return the final HTML Source code.

## User customization

Dashboards provide a flexible way to interact and allow users to personalize panel content. The main interaction methods include:

 - Sort: Hold the mouse at the head of the panel(.panel-heading) and drag the entire panel to another panel to change the order in which the panels are displayed;
 - Change size: Hover your mouse over the right edge of the panel, then an icon appears to change the size of the panel. At this point, press and hold the edge area, and drag the mouse horizontally to change the panel width which is the size of the grid occupied by the panel.

**Shadow element** of the dragged panel element will be inserted into the document, and it will follow the mouse cursor position, which is used to indicate the current position.

<div class="alert alert-warning">
  <h4>Attention</h4>
  <p>These customized options are not stored after the user action is done. You need to save this customization after the user's action is complete.</p>
</div>

### Handle the customization

Specify `afterPanelRemoved`, `afterOrdered`, `onResize` callback functions to save the user's customization.

### <span class="code">afterPanelRemoved</span>

`afterPanelRemoved` callback function is called when the panel is removed. The callback function contains a parameter `id` which indicates the ID of the panel removed.

```js
$('#myDashboard').dashboard{
    afterPanelRemoved: function(id) {
        console.log('ID', id, 'Panel is removed.');
    }
}
```

### <span class="code">afterOrdered</span>

`afterOrdered` callback function is called when the panel is rearranged. It contains a parameter `newOrders` which indicates the order of the sorted panels.

`newOrders` parameter is an object. Its attribute name is a panel change. Its value is the display order of the corresponding panel.

```js
$('#myDashboard').dashboard{
    afterOrdered: function(newOrders) {
        console.log('The current panel is reordered. The new order is ', newOrders);
    }
}
```

### <span class="code">onResize</span>

`onResize` callback function is called when the column size of the panel is changed. It contains a parameter `e`with attributes as follows:

 - `e.element`: The changed element of the grid;
 - `e.id`: The number of the panel that the grid contains;
 - `e.grid`: Changed grid size;
 - `e.old`: Change the previous grid size;
 - `e.revert`: A callback function. Call this callback function to undo the change action.

Call `e.revert()` in a callback function to undo grid change action. Return `false` in the callback function can also undo the action.

```js
$('#myDashboard').dashboard{
    onResize: function(e) {
        console.log('The current panel size is changed to ', e.grid);
    }
}
```

## Action buttons

`.panel-heading` for each panle can contain `.panel-actions`. In `.panel-actions`, embed several links or buttons, oreven `.dropdown`.

```html
<div class="panel-heading">
  ...
  <div class="panel-actions">
    <a href="###" data-toggle="tooltip" title="edit"><i class="icon-pencil"></i></a>
    <button type="button" class="btn" data-toggle="tooltip" title="Collection"><i class="icon-heart-empty"></i></button>
    <div class="dropdown" data-toggle="tooltip" title="More actions">
      <button class="btn" data-toggle="dropdown" type="button"><i class="icon icon-ellipsis-v"></i></button>
      <ul class="dropdown-menu pull-right">
        <li><a href="###"><i class="icon icon-ok"></i> confirm</a></li>
        <li><a href="###"><i class="icon icon-thumbs-o-up"></i> Custom action</a></li>
      </ul>
    </div>
  </div>
</div>
```

If special classes of link (`<a>`) and button(`.btn`) are set in `.panel-actions`, special actions are executed when clicking these buttons. These special classes and actions are defined as follows:

 - `.remove-panel`: Remove current panel;
 - `.refresh-panel`: Reload content from remote.

<div class="alert alert-warning">
  <h4>Attention</h4>
  <p>These user actions are not saved. You need to save these customizations to the server after the user action is complete.</p>
</div>

## Load from remote

Content of each panel(`.panel-body`) can be automatically loaded from a remote location with a given address. Just add `[data-url]` attributes to `.panel`. The attribute value is the address remotely loaded.

```html
<div class="panel" data-url="path/to/panel/content">
  <div class="panel-heading">
    ...
  </div>
  <div class="panel-body">
    ...
  </div>
</div>
```

If `[data-url]` is added, the content from this address will be obtained immediately and updated to `.panel-body`after the dashboard is initialized.

If `.panel-actions` contains `.refresh-panel`, click this button to update the action.

### <span class="code">afterRefresh</span>

Specify `afterRefresh` callback function to track remote update actions. The callback function contains a parameter `e` with attributes follows:

 - `e.result`: Whether the remote request action is successful;
 - `e.data`: Content obtained from a remote to update the panel.

```js
$('#myDashboard').dashboard{
    afterRefresh: function(e) {
        console.log('The result of the remote updated is ', e.true);
    }
}
```

### Manually remote update requests

In addition to clicking `.refresh-panel` to handle remote update requests, you can also manually call the dashboard instance `refresh()` Method to perform remote updates.

The methods are as follows:

 - `refresh(panel)`
 - `refresh(panel, onlyRefreshBody)`

`panel` uses CSS selector to specify the (`.panel`) object as the panel that needs to be updated; `onlyRefreshBody` is a boolean used to specify whether only update remote content to `.panel-body`.

```js
// Get a dashboard instance
var myDashboard = $('#myDashboard').data('zui.dashboard');

// Perform a remote update request
myDashboard.refresh('#myPanel1');
```

<script src="../dist/lib/dashboard/zui.dashboard.js"></script>
<link href="../dist/lib/dashboard/zui.dashboard.css" rel="stylesheet">
<script>
function onPageLoad() {
    if($.fn.dashboard) $('#dashboard').dashboard({
        shadowType: 'normal',
        afterOrdered: function(orders) {
            console.log(orders);
        }
    });
}
</script>
