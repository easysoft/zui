section: component
id: navbar
description: Application navigation bar
icon: icon-compass
filter: daohangtiao dht
---

# Navigation bar

## Simple navigation bars

Simple navigation bars have no appearance settings and can be easily customized.

`.container-fluid` and `.contianer` are used in  `.navbar` to define whether an item is centered or justified.

<example>
  <nav class="navbar" role="navigation">
    <div class="container-fluid">
      <!-- Header -->
      <div class="navbar-header">
        <!-- Toggle buttons on mobile devices -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
          <span class="sr-only">Toggle</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- Brand name or logo -->
        <a class="navbar-brand" href="#">ZUI</a>
      </div>
      <!-- Navigation items -->
      <div class="collapse navbar-collapse navbar-collapse-example">
        <!-- General navigation items -->
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Project</a></li>
          <li><a href="#">Story</a></li>
          <li><a href="#">Test</a></li>
          <!-- Dropdowns in navigation -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Management <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Task</a></li>
              <li><a href="#">Todo</a></li>
              <li><a href="#">Bug</a></li>
              <li class="divider"></li>
              <li><a href="#">Example</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- END .navbar-collapse -->
    </div>
  </nav>
</example>

```html
<nav class="navbar" role="navigation">
  <div class="container-fluid">
    <!-- Header -->
    <div class="navbar-header">
      <!-- Toggle buttons on mobile devices -->
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
        <span class="sr-only">Toggle</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!-- Brand name or logo -->
      <a class="navbar-brand" href="your/nice/url">ZUI</a>
    </div>
    <!-- Navigation items -->
    <div class="collapse navbar-collapse navbar-collapse-example">
      <!-- General navigation items -->
      <ul class="nav navbar-nav">
        <li class="active"><a href="your/nice/url">Project</a></li>
        <li><a href="your/nice/url">Story</a></li>
        ...
        <!-- Dropdowns in navigation -->
        <li class="dropdown">
          <a href="your/nice/url" class="dropdown-toggle" data-toggle="dropdown">Management <b class="caret"></b></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="your/nice/url">Task</a></li>
            ...
          </ul>
        </li>
      </ul>
    </div><!-- END .navbar-collapse -->
  </div>
</nav>
```

## Default navigation bars

`.navbar-default`

<example>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- Header -->
      <div class="navbar-header">
        <!-- Toggle buttons on mobile devices -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
          <span class="sr-only">Toggle</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- Brand name or logo -->
        <a class="navbar-brand" href="#">ZUI</a>
      </div>
      <!-- Navigation items -->
      <div class="collapse navbar-collapse navbar-collapse-example">
        <!-- General navigation items -->
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Project</a></li>
          <li><a href="#">Story</a></li>
          <!-- Dropdowns in navigations -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Management <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Task</a></li>
              <li><a href="#">To</a></li>
              <li><a href="#">Bug</a></li>
              <li class="divider"></li>
              <li><a href="#">Test</a></li>
              <li><a href="#">Example</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- END .navbar-collapse -->
    </div>
  </nav>
</example>

```html
<nav class="navbar navbar-default" role="navigation">
  ...
</nav>
```

## Dark navigation bars

`.navbar-inverse`

<example>
  <nav class="navbar navbar-inverse" role="navigation">
    <div class="container-fluid">
      <!-- Header -->
      <div class="navbar-header">
        <!-- Toggle buttons on mobile devices -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
          <span class="sr-only">Toggle</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- Brand name or logo -->
        <a class="navbar-brand" href="#">ZUI</a>
      </div>
      <!-- Navigation items -->
      <div class="collapse navbar-collapse navbar-collapse-example">
        <!-- General navigation items -->
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Project</a></li>
          <li><a href="#">Story</a></li>
          <!-- Dropdowns in navigations -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Management <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Task</a></li>
              <li><a href="#">Todo</a></li>
              <li><a href="#">Bug</a></li>
              <li class="divider"></li>
              <li><a href="#">Test</a></li>
              <li><a href="#">Example</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- END .navbar-collapse -->
    </div>
  </nav>
</example>

```html
<nav class="navbar navbar-inverse" role="navigation">
  ...
</nav>
```

## Form elements

<example>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- Header -->
      <div class="navbar-header">
        <!-- Toggle buttons on mobile devices -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
          <span class="sr-only">Toggle</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- Brand name or logo -->
        <a class="navbar-brand" href="#">ZUI</a>
      </div>
      <!-- Navigation items -->
      <div class="collapse navbar-collapse navbar-collapse-example">
        <!-- General navigation items -->
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Project</a></li>
          <li><a href="#">Story</a></li>
          <!-- Dropdowns in navigations -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Management <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Task</a></li>
              <li><a href="#">Todo</a></li>
              <li><a href="#">Bug</a></li>
              <li class="divider"></li>
              <li><a href="#">Test</a></li>
              <li><a href="#">Example</a></li>
            </ul>
          </li>
        </ul>
        <!-- Forms in navigations -->
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="search">
          </div>
          <button type="submit" class="btn btn-default">search</button>
        </form>
      </div><!-- END .navbar-collapse -->
    </div>
  </nav>
</example>

```html
<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <div class="navbar-header">
      ...
    </div>
    <div class="collapse navbar-collapse navbar-collapse-example">
      ...
      <!-- Form in navigation -->
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="search for">
        </div>
        <button type="submit" class="btn btn-default">search for</button>
      </form>
    </div>
  </div>
</nav>
```

## Place content on the right side of the navigation

<example>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- Navigation head -->
      <div class="navbar-header">
        <!-- Navigation toggle button on mobile device -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
          <span class="sr-only">Switch navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- Brand name orlogo -->
        <a class="navbar-brand" href="#">ZUI</a>
      </div>
      <!-- Navigation project -->
      <div class="collapse navbar-collapse navbar-collapse-example">
        <!-- General navigation project -->
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">project</a></li>
          <li><a href="#">demand</a></li>
          <!-- Drop-down menu in navigation -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">management <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">task</a></li>
              <li><a href="#">Upcoming</a></li>
              <li><a href="#">Bug</a></li>
              <li class="divider"></li>
              <li><a href="#">test</a></li>
              <li><a href="#">Example</a></li>
            </ul>
          </li>
        </ul>
        <!-- Navigation item on the right -->
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">help</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">explore <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Agile development</a></li>
              <li><a href="#">HTML5</a></li>
              <li><a href="#">Javascript</a></li>
              <li class="divider"></li>
              <li><a href="#">Explore the universe</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- END .navbar-collapse -->
    </div>
  </nav>
</example>

```html
<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <!-- Navigation head -->
    <div class="navbar-header">
      ...
    </div>
    <!-- Navigation project -->
    <div class="collapse navbar-collapse navbar-collapse-example">
      ...
      <!-- Navigation item on the right -->
      <ul class="nav navbar-nav navbar-right">
        <li><a href="your/nice/url">help</a></li>
        <li class="dropdown">
          <a href="your/nice/url" class="dropdown-toggle" data-toggle="dropdown">explore <b class="caret"></b></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="your/nice/url">Agile development</a></li>
            <li><a href="your/nice/url">HTML5</a></li>
            <li><a href="your/nice/url">Javascript</a></li>
            <li class="divider"></li>
            <li><a href="your/nice/url">Explore the universe</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- END .navbar-collapse -->
  </div>
</nav>
```

## Adaptive width

in`.nav`Add on`.nav-justified`。

<example>
  <nav class="navbar navbar-default" role="navigation">
    <ul class="nav navbar-nav nav-justified">
      <li><a href="###">Home</a></li>
      <li><a href="###">project</a></li>
      <li class="active"><a href="###">demand</a></li>
      <li><a href="###">test</a></li>
      <li><a href="###">task</a></li>
      <li><a href="###">forum</a></li>
      <li><a href="###">help</a></li>
      <li><a href="###">explore</a></li>
    </ul>
  </nav>
</example>

```html
<nav class="navbar navbar-default" role="navigation">
  <ul class="nav navbar-nav nav-justified">
    <li><a href="your/nice/url/1">Home</a></li>
    <li><a href="your/nice/url/2">project</a></li>
    <li class="active"><a href="your/nice/url/3">demand</a></li>
    ...
  </ul>
</nav>
```

<div class="alert">In the example, when you click on the navigation item and apply the highlight style, the effect is intentionally added for the demonstration.，Not navigational interactions。You can still manually navigate <code>.nav</code> middle <code>li</code> Add to <code>.active</code> CLASS To enable or remove highlight style effects。</div>

<script>
function afterPageLoad() {
    $('#pageContent').on('click', '.navbar-nav > li > a', function() {
        var $item = $(this).parent('li');
        $item.parent().children('.active').removeClass('active');
        $item.addClass('active');
    });
}
</script>
