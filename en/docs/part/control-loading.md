# Loaders

## Examples

Use `.load-indicator` and `.loading` to display a loader.

<div class="example">
  <div class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
</div>

```html
<div class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
```

<div class="alert alert-primary">
  <h4>Notes</h4>
  <p>Loader helper class <code>.load-indicator</code> will automatically use <code>position: relative</code> . It is usually OK, but you have to override <code>.load-indicator</code>, if <code>.load-indicator</code> has set <code>position</code> as <code>absolute</code> or <code>fixed</code>. Otherwise the style might not be as expected.</p>
</div>

## Loader Text

Use `[data-loading]` to set the text for loaders.

<div class="example">
  <div data-loading="Loading..." class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
</div>

```html
<div data-loading="Loading" class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
```

## JavaScript

Loaders are only in CSS styles. Use JavaScript to add `.loading` to `.load-indicator` to display the state of a loader, if you want to make it dynamic. Use JS to remove `.loading`, if you want to remove the state of loading.

<div class="example">
  <div data-loading="Loading..." class="load-indicator" style="width: 100px; height: 100px; background: #eee; margin-bottom: 10px" id="loadIndicator1"></div>
  <button type="button" class="btn btn-primary" id="loadIndicator1ToggleBtn">Show/Hide Loading</button>
</div>

```html
<div data-loading="Loading..." class="load-indicator" style="width: 100px; height: 100px; background: #eee; margin-bottom: 10px" id="loadIndicator1"></div>
<button type="button" class="btn btn-primary" id="loadIndicator1ToggleBtn">Show/Hide Loading</button>
```

```js
$('#loadIndicator1ToggleBtn').on('click', function() {
    $('#loadIndicator1').toggleClass('loading');
});
```

<script>
$(function() {
    $('#loadIndicator1ToggleBtn').on('click', function() {
        $('#loadIndicator1').toggleClass('loading');
    });
});
</script>

## Loader Icons

Use CSS to change the icons of loaders.

<div class="example">
  <div id="loadIndicator3" class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
</div>

<style>
#loadIndicator3.load-indicator:after {content: '\e97b'}
</style>

```html
<div class="load-indicator loading" style="width: 100px; height: 100px; background: #eee"></div>
```

```css
.load-indicator:after {content: '\e97b'}
```

## Components

`.load-indicator` and `.loading` can work with all components.

### Buttons

<div class="example">
    <button type="button" class="btn load-indicator loading">Button Example</button>
</div>

```html
<button type="button" class="btn load-indicator loading">Button Example</button>
```

### Panels

<div class="example">
  <div class="panel load-indicator loading" data-loading="In Progress...">
    <div class="panel-heading" contenteditable="">Head</div>
    <div class="panel-body" contenteditable="">Body</div>
  </div>
</div>

```html
<div class="panel load-indicator loading" data-loading="In Progress...">
  <div class="panel-heading" contenteditable="">Head</div>
  <div class="panel-body" contenteditable="">Body</div>
</div>
```

### Form

<div class="example">
<form class="form-horizontal load-indicator loading" data-loading="Saving. Please wait...">
  <div class="form-group">
    <label for="exampleInputAccount4" class="col-sm-2">Account</label>
    <div class="col-md-6 col-sm-10">
      <input type="text" class="form-control" id="exampleInputAccount4" placeholder="Email/Phone/Username">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword4" class="col-sm-2">Password</label>
    <div class="col-md-6 col-sm-10">
      <input type="password" class="form-control" id="exampleInputPassword4" placeholder="Password">
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputAddress1" class="col-sm-2">Address</label>
    <div class="col-sm-3">
      <select class="form-control" id="exampleInputAddress1">
        <option>Beijing</option>
        <option>Shanghai</option>
      </select>
    </div>
    <div class="col-sm-3">
      <input type="text" class="form-control" id="exampleInputAddress2" placeholder="City/County">
    </div>
    <div class="col-sm-4">
      <input type="text" class="form-control" id="exampleInputAddress3" placeholder="Address">
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Remember Me
        </label>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-default">Log In</button>
    </div>
  </div>
</form>
</div>
