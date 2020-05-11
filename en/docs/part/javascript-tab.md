section: javascript
id: tab
description: Tabbed navigation menu
icon: icon-credit
filter: biaoqianye bqy
---

# Tab

Tabs allow user to switch displayed contents by clicking on a navigation or a list.

## Structure

Tabs are usually used with [navigation](#component/nav). Add `[href]` or `[data-target]` for each link that is used to switch tab contents on the naviagation and point to the ID of the tab content, then add `[data-toggle="tab"]`. 

You can also use `[data-tab]` for the link and point its value to `.tab-pane` element switched. This method does not need `[data-target]` or `[data-toggle="tab"]`.

Use `.tab-pane` as a container element for the tab content, and put all `.tab-pane` in `.tab-content`.

To ensure that the tab page indicate the right tab and display the right content, add `.active` class to `<li>` and `.tab-pane` when initiating it.

### Examples

<example class="example-tabs-with-nav">
  <ul class="nav nav-tabs">
    <li class="active"><a data-tab href="#tabContent1">Tab 1</a></li>
    <li><a data-tab href="#tabContent2">Tab 2</a></li>
    <li><a data-tab href="#tabContent3">Tab 3</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane active" id="tabContent1">
      <p>I am a tab.</p>
    </div>
    <div class="tab-pane" id="tabContent2">
      <p>Tab 2</p>
    </div>
    <div class="tab-pane" id="tabContent3">
      <p>This is Tab 3.</p>
    </div>
  </div>
</example>

<style>
.example-tabs-with-nav .nav {margin-bottom: 20px;}
</style>

```html
<ul class="nav nav-tabs">
  <li class="active"><a data-tab href="#tabContent1">Tab 1</a></li>
  <li><a data-tab href="#tabContent2">Tab 2</a></li>
  <li><a data-tab href="#tabContent3">Tab 3</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="tabContent1">
    <p>I am a Tab 1.</p>
  </div>
  <div class="tab-pane" id="tabContent2">
    <p>Tab 2</p>
  </div>
  <div class="tab-pane" id="tabContent3">
    <p>This is Tab 3.</p>
  </div>
</div>
```

## Animations

Add `.fade` to .tab-pane` to enable the gradient animation on the tab when displayed. Both `.active` class and `.in` class have to be added to display `.tab-pane`.

<example class="example-tabs-with-nav">
  <ul class="nav nav-tabs">
    <li class="active"><a href="###" data-target="#tab2Content1" data-toggle="tab">Tab 1</a></li>
    <li><a href="###" data-target="#tab2Content2" data-toggle="tab">Tab 2</a></li>
    <li><a href="###" data-target="#tab2Content3" data-toggle="tab">Tab 3</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane fade active in" id="tab2Content1">
      <p>I am a Tab 1.</p>
    </div>
    <div class="tab-pane fade" id="tab2Content2">
      <p>Tab 2</p>
    </div>
    <div class="tab-pane fade" id="tab2Content3">
      <p>This is Tab 3.</p>
    </div>
  </div>
</example>

```html
<ul class="nav nav-tabs">
  <li class="active"><a href="###" data-target="#tab2Content1" data-toggle="tab">Tab 1</a></li>
  <li><a href="###" data-target="#tab2Content2" data-toggle="tab">Tab 2</a></li>
  <li><a href="###" data-target="#tab2Content3" data-toggle="tab">Tab 3</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane fade active in" id="tab2Content1">
    <p>I am a Tab 1.</p>
  </div>
  <div class="tab-pane fade" id="tab2Content2">
    <p>Tab 2</p>
  </div>
  <div class="tab-pane fade" id="tab2Content3">
    <p>This is Tab 3.</p>
  </div>
</div>
```

## Stacked tabs

`.nav-tabs.nav-stacked` is to enable a stacked tab navigation. Use [Grid](#basic/grid) to enable horizontally navigation and tabs.

<example class="example-tabs-with-nav">
  <div class="row">
    <div class="col-xs-3">
      <ul class="nav nav-tabs nav-stacked">
        <li class="active"><a href="###" data-target="#tab3Content1" data-toggle="tab">Tab 1</a></li>
        <li><a href="###" data-target="#tab3Content2" data-toggle="tab">Tab 2</a></li>
        <li><a href="###" data-target="#tab3Content3" data-toggle="tab">Tab 3</a></li>
      </ul>
    </div>
    <div class="col-xs-9">
      <div class="tab-content col-xs-9">
        <div class="tab-pane fade active in" id="tab3Content1">
          <p>I am Tab 1.</p>
        </div>
        <div class="tab-pane fade" id="tab3Content2">
          <p>Tab 2</p>
        </div>
        <div class="tab-pane fade" id="tab3Content3">
          <p>This is Tab 3.</p>
        </div>
      </div>
    </div>
  </div>
</example>

```html
<div class="row">
  <div class="col-xs-3">
    <ul class="nav nav-tabs nav-stacked">
      <li class="active"><a href="###" data-target="#tab3Content1" data-toggle="tab">Tab 1</a></li>
      <li><a href="###" data-target="#tab3Content2" data-toggle="tab">Tab 2</a></li>
      <li><a href="###" data-target="#tab3Content3" data-toggle="tab">Tab 3</a></li>
    </ul>
  </div>
  <div class="col-xs-9">
    <div class="tab-content col-xs-9">
      <div class="tab-pane fade active in" id="tab3Content1">
        <p>I am Tab 1.</p>
      </div>
      <div class="tab-pane fade" id="tab3Content2">
        <p>Tab 2</p>
      </div>
      <div class="tab-pane fade" id="tab3Content3">
        <p>This is Tab 3.</p>
      </div>
    </div>
  </div>
</div>
```

## Methods

### Display tab content

 - `$().tab('show')`

It is to display the tab content that current element indicates.

```js
$('#myTabLink').tab('show');
```

## Events

When a tab is displayed, events below will be triggered:

 - `show.zui.tab`: The tab is triggered when it is displayed;
 - `shown.zui.tab`：The tab is triggered after it is triggered(The animation is executed).

```js
$('[data-tab]').on('shown.zui.tab', function(e) {
    console.log('Active tab', e.target);
    console.log('Previous tab', e.relatedTarget);
});
```

<div class="alert alert-primary">
  <h4>Need a dynamic tab?</h4>
  <p>[Tab manager](#view/tabs) provides open and close functions for remote or custom tags.</p>
</div>
