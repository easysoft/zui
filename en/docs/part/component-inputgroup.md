section: component
id: inputgroup
description: Multiple input cells
icon: icon-layout
filter: shuruzu srz
---

# Input Group

## Types

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="username">
        <span class="input-group-addon">@gmail.com</span>
      </div>
      <br>
      <div class="input-group">
        <span class="input-group-addon">@</span>
        <input type="text" class="form-control" placeholder="username">
      </div>
      <br>
      <div class="input-group">
        <span class="input-group-addon">@</span>
        <input type="text" class="form-control" placeholder="username">
        <span class="input-group-addon"><i class="icon icon-heart"></i></span>
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="username">
        <span class="input-group-addon fix-border"><i class="icon icon-star"></i></span>
        <input type="text" class="form-control" placeholder="password">
      </div>
      <br>
      <div class="input-group">
        <span class="input-group-addon"><i class="icon-user"></i></span>
        <input type="text" class="form-control" placeholder="username">
        <span class="input-group-addon fix-border"><i class="icon-key"></i></span>
        <input type="text" class="form-control" placeholder="password">
      </div>
      <br>
      <div class="input-group">
        <span class="input-group-addon"><i class="icon-user"></i></span>
        <input type="text" class="form-control" placeholder="username">
        <span class="input-group-addon fix-border"><i class="icon-key"></i></span>
        <input type="text" class="form-control" placeholder="password">
        <span class="input-group-addon"><i class="icon-ok"></i></span>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-group">
  <span class="input-group-addon">@</span>
  <input type="text" class="form-control" placeholder="username">
  <span class="input-group-addon"><i class="icon icon-heart"></i></span>
</div>
```

<div class="alert alert-warning">
  <h4>Eliminate double borders</h4>
  <p>If the button is between two text boxes, add <code>.fix-border</code> to <code>.input-group-addon</code> to fix double borders.</p>
</div>

## Segmented text boxes

Segmented text boxes can be created by adding an empty `.input-group-addon` between the two adjacent`.form-control`, elements and add a toolbar at the same time.

<div class="alert alert-warning">
  <h4>IE Browser</h4>
  <p>IE 8 does not support <code>:empty</code>, so add <code>.fix-padding</code> to <code>.input-group-addon</code>.</p>
</div>

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-group">
        <span class="input-group-addon">Name</span>
        <input type="text" class="form-control" placeholder="Last Name">
        <span class="input-group-addon fix-border fix-padding"></span>
        <input type="text" class="form-control" placeholder="First Name">
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Province">
        <span class="input-group-addon fix-border fix-padding"></span>
        <input type="text" class="form-control" placeholder="City">
        <span class="input-group-addon fix-border fix-padding"></span>
        <input type="text" class="form-control" placeholder="County/City">
        <span class="input-group-addon fix-border fix-padding"></span>
        <input type="text" class="form-control" placeholder="Town">
        <span class="input-group-addon fix-border fix-padding"></span>
        <input type="text" class="form-control" placeholder="Street Number">
      </div>
    </div>
  </div>
</div>

```html
<div class="input-group">
  <span class="input-group-addon">Name</span>
  <input type="text" class="form-control" placeholder="Last Name">
  <span class="input-group-addon fix-border fix-padding"></span>
  <input type="text" class="form-control" placeholder="First Name">
</div>
```

## Radio buttons and checkboxes

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-group">
        <span class="input-group-addon">
          <input type="checkbox">
        </span>
        <input type="text" class="form-control">
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-group">
        <span class="input-group-addon">
          <input type="radio">
        </span>
        <input type="text" class="form-control">
      </div>
    </div>
  </div>
</div>

```html
<!-- Checkbox -->
<div class="input-group">
  <span class="input-group-addon">
    <input type="checkbox">
  </span>
  <input type="text" class="form-control">
</div>
```

```html
<!-- Radio button -->
<div class="input-group">
  <span class="input-group-addon">
    <input type="radio">
  </span>
  <input type="text" class="form-control">
</div>
```

## Buttons

<div class="alert alert-warning">
  <h4>Eliminate double borders</h4>
  <p>If an button is between two text boxes, add <code>.fix-border</code> in <code>.input-group-btn</code>.</p>
</div>

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-group">
        <input type="text" class="form-control">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Search</button>
        </span>
      </div>
      <br>
      <div class="input-group">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Search</button>
        </span>
        <input type="text" class="form-control">
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-group">
        <span class="input-group-addon"><i class="icon-search"></i></span>
        <input type="text" class="form-control">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Search</button>
        </span>
      </div>
      <br>
      <div class="input-group">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Search</button>
        </span>
        <input type="text" class="form-control">
        <span class="input-group-btn fix-border">
          <button class="btn btn-default" type="button">Search</button>
        </span>
        <input type="text" class="form-control">
      </div>
    </div>
  </div>
</div>

```html
<div class="input-group">
  <input type="text" class="form-control">
  <span class="input-group-btn">
    <button class="btn btn-default" type="button">Search</button>
  </span>
</div>
```

## Buttons with dropdowns

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-group">
        <div class="input-group-btn">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Options<span class="caret"></span></button>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Option</a></li>
            <li><a href="#">Another option</a></li>
            <li><a href="#">More options</a></li>
            <li class="divider"></li>
            <li><a href="#">Special content</a></li>
          </ul>
        </div><!-- /btn-group -->
        <input type="text" class="form-control">
      </div><!-- /input-group -->
    </div><!-- /.col-md-6 -->
    <div class="col-md-6">
      <div class="input-group">
        <input type="text" class="form-control">
        <div class="input-group-btn">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Option <span class="caret"></span></button>
          <ul class="dropdown-menu pull-right" role="menu">
            <li><a href="#">Option</a></li>
            <li><a href="#">Another option</a></li>
            <li><a href="#">More options</a></li>
            <li class="divider"></li>
            <li><a href="#">Special content</a></li>
          </ul>
        </div><!-- /btn-group -->
      </div><!-- /input-group -->
    </div><!-- /.col-md-6 -->
  </div>
</div>

```html
<div class="input-group">
  <input type="text" class="form-control">
  <div class="input-group-btn">
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">Options<span class="caret"></span></button>
    <ul class="dropdown-menu pull-right" role="menu">
      <li><a href="#">Option</a></li>
      <li><a href="#">Another option</a></li>
      <li><a href="#">More options</a></li>
      <li class="divider"></li>
      <li><a href="#">Special content</a></li>
    </ul>
  </div>
</div>
```

## Select

<div class="alert alert-danger">
  <h4>Browser compatibility</h4>
  <p>It is usually not recommended to use the select element in input box groups, for it causes compatibility issues.Use <strong>Dropdown</strong> or <strong>Chosen</strong> to replace the dropdown.</p>
</div>

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-group">
        <select class="form-control">
          <option value="eat">eat</option>
          <option value="sleep">sleep</option>
          <option value="code">code</option>
        </select>
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Search</button>
        </span>
      </div>
    </div>
    <div class="col-md-6">
      <div class="input-group">
        <span class="input-group-addon">Address</span>
        <select class="form-control">
          <option value="1">Province</option>
          <option value="2">Beijing</option>
          <option value="3">Shanghai</option>
          <option value="3">Guangzhou</option>
        </select>
        <span class="input-group-addon fix-border fix-padding"></span>
        <select class="form-control">
          <option value="1">City/County</option>
          <option value="1">...</option>
        </select>
        <span class="input-group-addon fix-border fix-padding"></span>
        <input type="text" class="form-control" placeholder="Town">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">Confirm</button>
        </span>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-group">
  <select class="form-control">
    <option value="eat">eat</option>
    <option value="sleep">sleep</option>
    <option value="code">code</option>
  </select>
  <span class="input-group-btn">
    <button class="btn btn-default" type="button">Search</button>
  </span>
</div>
```

## Segmented buttons

<div class="example">
  <div class="row">
    <div class="col-md-6">
      <div class="input-group">
        <div class="input-group-btn">
          <button type="button" class="btn btn-default" tabindex="-1">Main options</button>
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" tabindex="-1">
            <span class="caret"></span>
            <span class="sr-only">More options</span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Option</a></li>
            <li><a href="#">Another option</a></li>
            <li><a href="#">More options</a></li>
            <li class="divider"></li>
            <li><a href="#">Special content</a></li>
          </ul>
        </div>
        <input type="text" class="form-control">
      </div><!-- /.input-group -->
    </div><!-- /.col-md-6 -->
    <div class="col-md-6">
      <div class="input-group">
        <input type="text" class="form-control">
        <div class="input-group-btn">
          <button type="button" class="btn btn-default" tabindex="-1">Main options</button>
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" tabindex="-1">
            <span class="caret"></span>
            <span class="sr-only">More options</span>
          </button>
          <ul class="dropdown-menu pull-right" role="menu">
            <li><a href="#">Option</a></li>
            <li><a href="#">Another option</a></li>
            <li><a href="#">More options</a></li>
            <li class="divider"></li>
            <li><a href="#">Special content</a></li>
          </ul>
        </div>
      </div><!-- /.input-group -->
    </div><!-- /.col-md-6 -->
  </div>
</div>

```html
<div class="input-group">
  <input type="text" class="form-control">
  <div class="input-group-btn">
    <button type="button" class="btn btn-default" tabindex="-1">Main options</button>
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" tabindex="-1">
      <span class="caret"></span>
      <span class="sr-only">More options</span>
    </button>
    <ul class="dropdown-menu pull-right" role="menu">
      <li><a href="#">Option</a></li>
      <li><a href="#">Another option</a></li>
      <li><a href="#">More options</a></li>
      <li class="divider"></li>
      <li><a href="#">Special content</a></li>
    </ul>
  </div>
</div>
```
