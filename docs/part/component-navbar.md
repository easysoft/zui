section: component
id: navbar
description: 应用导航条
icon: icon-compass
filter: daohangtiao dht
---

# 导航条

## 简单导航条

简单导航条没有明显的外观设置，可以方便用于进行个性化定制。

在导航条 `.navbar` 内使用 `.container-fluid` 或 `.contianer` 来控制导航项目是否居中或者两端对齐。

<example>
  <nav class="navbar" role="navigation">
    <div class="container-fluid">
      <!-- 导航头部 -->
      <div class="navbar-header">
        <!-- 移动设备上的导航切换按钮 -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- 品牌名称或logo -->
        <a class="navbar-brand" href="#">ZUI</a>
      </div>
      <!-- 导航项目 -->
      <div class="collapse navbar-collapse navbar-collapse-example">
        <!-- 一般导航项目 -->
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">项目</a></li>
          <li><a href="#">需求</a></li>
          <li><a href="#">测试</a></li>
          <!-- 导航中的下拉菜单 -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">管理 <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">任务</a></li>
              <li><a href="#">待办</a></li>
              <li><a href="#">Bug</a></li>
              <li class="divider"></li>
              <li><a href="#">用例</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- END .navbar-collapse -->
    </div>
  </nav>
</example>

```
<nav class="navbar" role="navigation">
  <div class="container-fluid">
    <!-- 导航头部 -->
    <div class="navbar-header">
      <!-- 移动设备上的导航切换按钮 -->
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
        <span class="sr-only">切换导航</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <!-- 品牌名称或logo -->
      <a class="navbar-brand" href="your/nice/url">ZUI</a>
    </div>
    <!-- 导航项目 -->
    <div class="collapse navbar-collapse navbar-collapse-example">
      <!-- 一般导航项目 -->
      <ul class="nav navbar-nav">
        <li class="active"><a href="your/nice/url">项目</a></li>
        <li><a href="your/nice/url">需求</a></li>
        ...
        <!-- 导航中的下拉菜单 -->
        <li class="dropdown">
          <a href="your/nice/url" class="dropdown-toggle" data-toggle="dropdown">管理 <b class="caret"></b></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="your/nice/url">任务</a></li>
            ...
          </ul>
        </li>
      </ul>
    </div><!-- END .navbar-collapse -->
  </div>
</nav>
```

## 默认导航条

`.navbar-default`

<example>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- 导航头部 -->
      <div class="navbar-header">
        <!-- 移动设备上的导航切换按钮 -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- 品牌名称或logo -->
        <a class="navbar-brand" href="#">ZUI</a>
      </div>
      <!-- 导航项目 -->
      <div class="collapse navbar-collapse navbar-collapse-example">
        <!-- 一般导航项目 -->
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">项目</a></li>
          <li><a href="#">需求</a></li>
          <!-- 导航中的下拉菜单 -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">管理 <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">任务</a></li>
              <li><a href="#">待办</a></li>
              <li><a href="#">Bug</a></li>
              <li class="divider"></li>
              <li><a href="#">测试</a></li>
              <li><a href="#">用例</a></li>
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

## 深色导航条

`.navbar-inverse`

<example>
  <nav class="navbar navbar-inverse" role="navigation">
    <div class="container-fluid">
      <!-- 导航头部 -->
      <div class="navbar-header">
        <!-- 移动设备上的导航切换按钮 -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- 品牌名称或logo -->
        <a class="navbar-brand" href="#">ZUI</a>
      </div>
      <!-- 导航项目 -->
      <div class="collapse navbar-collapse navbar-collapse-example">
        <!-- 一般导航项目 -->
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">项目</a></li>
          <li><a href="#">需求</a></li>
          <!-- 导航中的下拉菜单 -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">管理 <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">任务</a></li>
              <li><a href="#">待办</a></li>
              <li><a href="#">Bug</a></li>
              <li class="divider"></li>
              <li><a href="#">测试</a></li>
              <li><a href="#">用例</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- END .navbar-collapse -->
    </div>
  </nav>
</example>

```
<nav class="navbar navbar-inverse" role="navigation">
  ...
</nav>
```

## 使用表单元素

<example>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- 导航头部 -->
      <div class="navbar-header">
        <!-- 移动设备上的导航切换按钮 -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- 品牌名称或logo -->
        <a class="navbar-brand" href="#">ZUI</a>
      </div>
      <!-- 导航项目 -->
      <div class="collapse navbar-collapse navbar-collapse-example">
        <!-- 一般导航项目 -->
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">项目</a></li>
          <li><a href="#">需求</a></li>
          <!-- 导航中的下拉菜单 -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">管理 <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">任务</a></li>
              <li><a href="#">待办</a></li>
              <li><a href="#">Bug</a></li>
              <li class="divider"></li>
              <li><a href="#">测试</a></li>
              <li><a href="#">用例</a></li>
            </ul>
          </li>
        </ul>
        <!-- 导航中的表单 -->
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="搜索">
          </div>
          <button type="submit" class="btn btn-default">搜索</button>
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
      <!-- 导航中的表单 -->
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="搜索">
        </div>
        <button type="submit" class="btn btn-default">搜索</button>
      </form>
    </div>
  </div>
</nav>
```

## 将内容放置与导航右侧

<example>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <!-- 导航头部 -->
      <div class="navbar-header">
        <!-- 移动设备上的导航切换按钮 -->
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse-example">
          <span class="sr-only">切换导航</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- 品牌名称或logo -->
        <a class="navbar-brand" href="#">ZUI</a>
      </div>
      <!-- 导航项目 -->
      <div class="collapse navbar-collapse navbar-collapse-example">
        <!-- 一般导航项目 -->
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">项目</a></li>
          <li><a href="#">需求</a></li>
          <!-- 导航中的下拉菜单 -->
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">管理 <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">任务</a></li>
              <li><a href="#">待办</a></li>
              <li><a href="#">Bug</a></li>
              <li class="divider"></li>
              <li><a href="#">测试</a></li>
              <li><a href="#">用例</a></li>
            </ul>
          </li>
        </ul>
        <!-- 右侧的导航项目 -->
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">帮助</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">探索 <b class="caret"></b></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">敏捷开发</a></li>
              <li><a href="#">HTML5</a></li>
              <li><a href="#">Javascript</a></li>
              <li class="divider"></li>
              <li><a href="#">探索宇宙</a></li>
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
    <!-- 导航头部 -->
    <div class="navbar-header">
      ...
    </div>
    <!-- 导航项目 -->
    <div class="collapse navbar-collapse navbar-collapse-example">
      ...
      <!-- 右侧的导航项目 -->
      <ul class="nav navbar-nav navbar-right">
        <li><a href="your/nice/url">帮助</a></li>
        <li class="dropdown">
          <a href="your/nice/url" class="dropdown-toggle" data-toggle="dropdown">探索 <b class="caret"></b></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="your/nice/url">敏捷开发</a></li>
            <li><a href="your/nice/url">HTML5</a></li>
            <li><a href="your/nice/url">Javascript</a></li>
            <li class="divider"></li>
            <li><a href="your/nice/url">探索宇宙</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- END .navbar-collapse -->
  </div>
</nav>
```

## 自适应宽度

在`.nav`上添加`.nav-justified`。

<example>
  <nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
      <ul class="nav navbar-nav nav-justified">
        <li><a href="###">首页</a></li>
        <li><a href="###">项目</a></li>
        <li class="active"><a href="###">需求</a></li>
        <li><a href="###">测试</a></li>
        <li><a href="###">任务</a></li>
        <li><a href="###">论坛</a></li>
        <li><a href="###">帮助</a></li>
        <li><a href="###">探索</a></li>
      </ul>
    </div>
  </nav>
</example>

```html
<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
    <ul class="nav navbar-nav nav-justified">
      <li><a href="your/nice/url/1">首页</a></li>
      <li><a href="your/nice/url/2">项目</a></li>
      <li class="active"><a href="your/nice/url/3">需求</a></li>
      ...
    </ul>
  </div>
</nav>
```

<div class="alert">示例中当点击导航条目并应用高亮样式的效果是为演示方便有意添加的，并非导航自身交互功能。你仍然可以手动为导航 <code>.nav</code> 中的 <code>li</code> 添加 <code>.active</code> CLASS 来启用或移除高亮样式效果。</div>

<script>
function afterPageLoad() {
    $('#pageContent').on('click', '.navbar-nav > li > a', function() {
        var $item = $(this).parent('li');
        $item.parent().children('.active').removeClass('active');
        $item.addClass('active');
    });
}
</script>
