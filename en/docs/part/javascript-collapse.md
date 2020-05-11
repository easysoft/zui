section: javascript
id: collapse
description: Provide collapse features for elements
icon: icon-collapse
filter: zhedie zd
---

# Collapse

Collapse plugins use intuitive animation to display contents.

## Structure

Generally two elements are required to use collapse:

 - Collapse content element: Add `.collapse` class to switch between the showed or hidden contents by the animation. If the collapsed content is displayed from the beginning, `.in` class is required;
 - Trigger element: add `[data-toggle="collapse"]` and use `[href]` or `[data-target="#selector"]` to define the collapsed content elements.

### Examples

<example>
  <p>
    <button type="button" class="btn" data-toggle="collapse" data-target="#collapseExample">Use data-target attribute</button>
    <a href="#collapseExample" data-toggle="collapse" class="btn btn-link">Use href attribute</a>
  </p>
  <div class="collapse" id="collapseExample">
    <div class="bg-primary with-padding">
      <p>Collapsed element content</p>
      <p>Multiple trigger elements can be pointed to the same collapsed content.</p>
    </div>
  </div>
</example>

```html
<p>
  <button type="button" class="btn" data-toggle="collapse" data-target="#collapseExample">Use data-target attribute</button>
  <a href="#collapseExample" data-toggle="collapse" class="btn btn-link">Use href attribute</a>
</p>
<div class="collapse" id="collapseExample">
  <div class="bg-primary with-padding">
    <p>Collapsed element content</p>
    <p>Multiple trigger elements can be pointed to the same collapsed content.</p>
  </div>
</div>
```

## Collapse groups

Multiple collapses can create a collapse group (accordion effect), if placed inside the same parent container element. Just add `[data-parent="#selector"]` for each trigger element, and point them to the parent container.

<example>
  <div id="accordion">
    <p>
      <a href="#collapseExample1" data-toggle="collapse" data-parent="#accordion" class="btn btn-link">Collapse 1</a>
    </p>
    <div class="collapse in" id="collapseExample1">
      <div class="bg-primary with-padding">
        <p>Collapse element content</p>
        <p>Multiple trigger elements point to the same collapsed content.</p>
      </div>
    </div>
    <p>
      <a href="#collapseExample2" data-toggle="collapse" data-parent="#accordion" class="btn btn-link collapsed">Collapse 2</a>
    </p>
    <div class="collapse" id="collapseExample2">
      <div class="bg-success with-padding">
        <p>Collapse element content</p>
        <p>Multiple trigger elements point to the same collapsed content.</p>
      </div>
    </div>
    <p>
      <a href="#collapseExample3" data-toggle="collapse" data-parent="#accordion" class="btn btn-link collapsed">Collapse 3</a>
    </p>
    <div class="collapse" id="collapseExample3">
      <div class="bg-danger with-padding">
        <p>Collapse element content</p>
        <p>Multiple trigger elements point to the same collapsed content.</p>
      </div>
    </div>
  </div>
</example>

```html
<div id="accordion">
  <p>
    <a href="#collapseExample1" data-toggle="collapse" data-parent="#accordion" class="btn btn-link">Collapse 1</a>
  </p>
  <div class="collapse in" id="collapseExample1">
    <div class="bg-primary with-padding">
      <p>Collapse element content</p>
      <p>Multiple trigger elements point to the same collapsed content.</p>
    </div>
  </div>
  <p>
    <a href="#collapseExample2" data-toggle="collapse" data-parent="#accordion" class="btn btn-link collapsed">Collapse 2</a>
  </p>
  <div class="collapse" id="collapseExample2">
    <div class="bg-success with-padding">
      <p>Collapse element content</p>
      <p>Multiple trigger elements point to the same collapsed content.</p>
    </div>
  </div>
  <p>
    <a href="#collapseExample3" data-toggle="collapse" data-parent="#accordion" class="btn btn-link collapsed">Collapse 3</a>
  </p>
  <div class="collapse" id="collapseExample3">
    <div class="bg-danger with-padding">
      <p>Collapse element content</p>
      <p>Multiple trigger elements point to the same collapsed content</p>
    </div>
  </div>
</div>
```

<style>
#accordion > div + p {padding-top: 10px;}
</style>

### Panel group

<example>
  <div class="panel-group" id="accordionPanels" aria-multiselectable="true">
    <div class="panel panel-default">
      <div class="panel-heading" id="headingOne">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordionPanels" href="#collapseOne">
            Collapsed panel 1
          </a>
        </h4>
      </div>
      <div id="collapseOne" class="panel-collapse collapse in">
        <div class="panel-body">Collapsed panel content 1</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" id="headingTwo">
        <h4 class="panel-title">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordionPanels" href="#collapseTwo">
            Collapsed panel 2
          </a>
        </h4>
      </div>
      <div id="collapseTwo" class="panel-collapse collapse">
        <div class="panel-body">Collapsed panel content 2</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" id="headingThree">
        <h4 class="panel-title">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordionPanels" href="#collapseThree">
            Collapsed panel 3
          </a>
        </h4>
      </div>
      <div id="collapseThree" class="panel-collapse collapse">
        <div class="panel-body">Collapsed panel content 3</div>
      </div>
    </div>
  </div>
</example>

```html
<div class="panel-group" id="accordionPanels" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" id="headingOne">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordionPanels" href="#collapseOne">
          Collapsed panel 1
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in">
      <div class="panel-body">Collapsed panel content 1</div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" id="headingTwo">
      <h4 class="panel-title">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionPanels" href="#collapseTwo">
          Collapsed panel 2
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse">
      <div class="panel-body">Collapsed panel content 2</div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" id="headingThree">
      <h4 class="panel-title">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionPanels" href="#collapseThree">
          Collapsed panel 3
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse">
      <div class="panel-body">Collapsed panel content 3</div>
    </div>
  </div>
</div>
```

## How to use it

### Manual initialization

Use `[data-*]`to enable the collapse. You can also use JavaScript to initialize.

 - `$().collapse()`
 - `$().collapse(options)`

`options` is optional and used to specify initialization options. Options available are as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Option</th>
      <th>Types</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`parent`</td>
      <td>selector | `false`</td>
      <td>`false`</td>
      <td>Set a selector string to specify the parent element of the collapsed group.</td>
    </tr>
    <tr>
      <td>`toggle`</td>
      <td>'true' | `false`</td>
      <td>`true`</td>
      <td>Whether the collapsed content is displayed at the initialization.</td>
    </tr>
  </tbody>
</table>

```js
$('#myCollapseContent').collapse({
   toggle: false
});
```

### Methods

#### `$().collapse('show')`

Show collapsed contents.

#### `$().collapse('hide')`

Hide collapsed contents.

#### `$().collapse('toggle')`

Switch collapsed contents.

#### Call methods

```js
// Show collapsed content
$('#myCollapseContent').collapse('show')
```

### Events

The following events are triggered on the collapsed content element when the collapsed content is shown or hidden:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Event</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`show.zui.collapse`</td>
      <td>Triggered when the collapsed content is displayed.</td>
    </tr>
    <tr>
      <td>`shown.zui.collapse`</td>
      <td>Triggered when the collapsed content is displayed, and the animation has been executed.</td>
    </tr>
    <tr>
      <td>`hide.zui.collapse`</td>
      <td>Triggered when the collapsed content is hidden.</td>
    </tr>
    <tr>
      <td>`hidden.zui.collapse`</td>
      <td>Triggered when the collapsed content is hidden and the animation has been executed.</td>
    </tr>
  </tbody>
</table>

```js
$('#myCollapseContent').on('hidden.zui.collapse', function () {
    console.log('Collapsed content is hidden.');
})
```
