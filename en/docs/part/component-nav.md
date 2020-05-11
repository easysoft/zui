section: component
id: nav
description: Multiple styles of navigation menus
icon: icon-anchor
filter: daohang dh
---

# Navigations

## Primary navigations

`.nav-primary`

<div class="example">
  <ul class="nav nav-primary">
    <li class="active"><a href="###">Home</a></li>
    <li><a href="###">Dynamics <span class="label label-badge label-success">4</span></a></li>
    <li><a href="###">Project </a></li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="###">Task</a></li>
        <li><a href="###">Bug</a></li>
        <li><a href="###">Story</a></li>
        <li><a href="###">Example</a></li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-primary">
  <li class="active"><a href="your/nice/url">Home</a></li>
  <li><a href="your/nice/url">Dynamics <span class="label label-badge label-success">4</span></a></li>
  <li><a href="your/nice/url">Project </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="your/nice/url">More <span class="caret"></span></a>
    <ul class="dropdown-menu">
      <li><a href="your/nice/url">Task</a></li>
      <li><a href="your/nice/url">Bug</a></li>
      <li><a href="your/nice/url">Story</a></li>
      <li><a href="your/nice/url">Example</a></li>
    </ul>
  </li>
</ul>
```

## Secondary navigations

Usually they are used along with primary navigations.

`.nav-secondary`

<div class="example">
  <ul class="nav nav-secondary">
    <li class="active">
      <a href="###">Home</a>
    </li>
    <li>
      <a href="###">Dynamics</a>
    </li>
    <li>
      <a href="###">Project</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-secondary">
  <li class="active"><a href="your/nice/url">Home</a></li>
  <li><a href="your/nice/url">Dynamics <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## Tabs

`.nav-tabs`

<div class="example">
  <ul class="nav nav-tabs">
    <li class="active">
      <a href="###">Home</a>
    </li>
    <li>
      <a href="###">Dynamics</a>
    </li>
    <li>
      <a href="###">Project</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-tabs">
  <li class="active"><a href="your/noce/url">Home</a></li>
  <li><a href="your/noce/url">Dynamics <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## Pills

`.nav-pills`

<div class="example">
  <ul class="nav nav-pills">
    <li class="active">
      <a href="###">Home</a>
    </li>
    <li>
      <a href="###">Dynamics</a>
    </li>
    <li>
      <a href="###">Project</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-pills">
  <li class="active"><a href="your/noce/url">Home</a></li>
  <li><a href="your/noce/url">Dynamics <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## Disabled

Use `.disabled` to disable a navigation.

<div class="example">
  <ul class="nav nav-primary">
    <li class="active">
      <a href="###">Home</a>
    </li>
    <li>
      <a href="###">Dynamics</a>
    </li>
    <li class="disabled">
      <a href="###">Project</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-tabs">
    <li class="active">
      <a href="###">Home</a>
    </li>
    <li>
      <a href="###">Dynamics</a>
    </li>
    <li class="disabled">
      <a href="###">Project</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-pills">
    <li class="active">
      <a href="###">Home</a>
    </li>
    <li>
      <a href="###">Dynamics</a>
    </li>
    <li class="disabled">
      <a href="###">Project</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-secondary">
    <li class="active">
      <a href="###">Home</a>
    </li>
    <li>
      <a href="###">Dynamics</a>
    </li>
    <li class="disabled">
      <a href="###">Project</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-primary">
  <li class="disabled"><a disabled href="your/noce/url">Home</a></li>
  <li><a href="your/noce/url">Dynamics <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## Stacked

`.nav-stacked`

<div class="example">
  <div class="row">
    <div class="col-md-3">
      <ul class="nav nav-primary nav-stacked">
        <li class="active">
          <a href="###">Home </a>
        </li>
        <li>
          <a href="###">Dynamics <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">Project </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">Task</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">Story</a>
            </li>
            <li>
              <a href="">Example</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-3">
      <ul class="nav nav-stacked nav-tabs">
        <li class="active">
          <a href="###">Home </a>
        </li>
        <li>
          <a href="###">Dynamics <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">Project </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">Task</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">Story</a>
            </li>
            <li>
              <a href="">Example</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-3">
      <ul class="nav nav-secondary nav-stacked">
        <li class="active">
          <a href="###">Home </a>
        </li>
        <li>
          <a href="###">Dynamics <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">Project </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">Task</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">Story</a>
            </li>
            <li>
              <a href="">Example</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-3">
      <ul class="nav nav-stacked nav-pills">
        <li class="active">
          <a href="###">Home </a>
        </li>
        <li>
          <a href="###">Dynamics <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">Project </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">Task</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">Story</a>
            </li>
            <li>
              <a href="">Example</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

```html
<ul class="nav nav-primary nav-stacked">
  <li class="active"><a href="your/noce/url">Home</a></li>
  <li><a href="your/noce/url">Dynamics <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

```html
<ul class="nav nav-tabs nav-stacked">
  <li class="active"><a href="your/noce/url">Home</a></li>
  <li><a href="your/noce/url">Dynamics <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

```html
<ul class="nav nav-secondary nav-stacked">
  <li class="active"><a href="your/noce/url">Home</a></li>
  <li><a href="your/noce/url">Dynamics <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

```html
<ul class="nav nav-pills nav-stacked">
  <li class="active"><a href="your/noce/url">Home</a></li>
  <li><a href="your/noce/url">Dynamics <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## Adaptive width

Adaptive width cannot be used simultaneously with stacked navigations.

`.nav-justified`

<div class="example">
  <ul class="nav nav-primary nav-justified">
    <li class="active">
      <a href="###">Home </a>
    </li>
    <li>
      <a href="###">Dynamics <span class="label label-badge label-success pull-right">4</span></a>
    </li>
    <li>
      <a href="###">Project </a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-justified nav-tabs">
    <li class="active">
      <a href="###">Home </a>
    </li>
    <li>
      <a href="###">Dynamics <span class="label label-badge label-success pull-right">4</span></a>
    </li>
    <li>
      <a href="###">Project </a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-secondary nav-justified">
    <li class="active">
      <a href="###">Home </a>
    </li>
    <li>
      <a href="###">Dynamics <span class="label label-badge label-success pull-right">4</span></a>
    </li>
    <li>
      <a href="###">Project </a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-justified nav-pills">
    <li class="active">
      <a href="###">Home </a>
    </li>
    <li>
      <a href="###">Dynamics <span class="label label-badge label-success pull-right">4</span></a>
    </li>
    <li>
      <a href="###">Project </a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-primary nav-justified">
  <li class="active"><a href="your/noce/url">Home</a></li>
  <li><a href="your/noce/url">Dynamics <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## Navigations with headings

<div class="example">
  <ul class="nav nav-tabs">
    <li class="nav-heading">This is a heading</li>
    <li class="active">
      <a href="###">Home</a>
    </li>
    <li>
      <a href="###">Dynamics</a>
    </li>
    <li class="disabled">
      <a href="###">Project</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-pills">
    <li class="nav-heading">This is a heading</li>
    <li class="active">
      <a href="###">Home</a>
    </li>
    <li>
      <a href="###">Dynamics</a>
    </li>
    <li class="disabled">
      <a href="###">Project</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-secondary">
    <li class="nav-heading">This is a heading</li>
    <li class="active">
      <a href="###">Home</a>
    </li>
    <li>
      <a href="###">Dynamics</a>
    </li>
    <li class="disabled">
      <a href="###">Project</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">Task</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">Story</a>
        </li>
        <li>
          <a href="">Example</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <div class="row">
    <div class="col-sm-4">
      <ul class="nav nav-primary nav-stacked">
        <li class="nav-heading">This is a heading</li>
        <li class="active">
          <a href="###">Home </a>
        </li>
        <li>
          <a href="###">Dynamics <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">Project </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">Task</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">Story</a>
            </li>
            <li>
              <a href="">Example</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-sm-4">
      <ul class="nav nav-secondary nav-stacked">
        <li class="nav-heading">THIS IS A  HEADING</li>
        <li class="active">
          <a href="###">Home </a>
        </li>
        <li>
          <a href="###">Dynamics <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">Project </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">Task</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">Story</a>
            </li>
            <li>
              <a href="">Example</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-sm-4">
      <ul class="nav nav-stacked nav-pills">
        <li class="nav-heading">THIS IS A HEADING</li>
        <li class="active">
          <a href="###">Home </a>
        </li>
        <li>
          <a href="###">Dynamics <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">Project </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">More <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">Task</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">Story</a>
            </li>
            <li>
              <a href="">Example</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

```html
<ul class="nav nav-stacked">
  <li class="nav-heading">This is a title</li>
  <li class="active"><a href="your/nice/url">Home</a></li>
  <li><a href="your/nice/url">Dynamics <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

<div class="alert">It is not the interaction of a navigation that the highlight applies when you click on the navigation. It is only for the demonstration. You can add <code>.active</code> CLASS to <code>li</code>  in  <code>.nav</code> to enable the highlight style.</div>

<script>
function afterPageLoad() {
    $('#pageContent').on('click', '.nav > li:not(.disabled) > a', function() {
        var $item = $(this).parent('li');
        $item.parent().children('.active').removeClass('active');
        $item.addClass('active');
    });
}
</script>
