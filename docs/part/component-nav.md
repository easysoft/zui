section: component
id: nav
description: 多种样式的导航菜单
icon: icon-anchor
filter: daohang dh
---

# 导航

## 主要导航

`.nav-primary`

<div class="example">
  <ul class="nav nav-primary">
    <li class="active"><a href="###">首页</a></li>
    <li><a href="###">动态 <span class="label label-badge label-success">4</span></a></li>
    <li><a href="###">项目 </a></li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li><a href="###">任务</a></li>
        <li><a href="###">bug</a></li>
        <li><a href="###">需求</a></li>
        <li><a href="###">用例</a></li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-primary">
  <li class="active"><a href="your/nice/url">首页</a></li>
  <li><a href="your/nice/url">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="your/nice/url">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="your/nice/url">更多 <span class="caret"></span></a>
    <ul class="dropdown-menu">
      <li><a href="your/nice/url">任务</a></li>
      <li><a href="your/nice/url">bug</a></li>
      <li><a href="your/nice/url">需求</a></li>
      <li><a href="your/nice/url">用例</a></li>
    </ul>
  </li>
</ul>
```

## 次要导航

通常与主导航一起使用

`.nav-secondary`

<div class="example">
  <ul class="nav nav-secondary">
    <li class="active">
      <a href="###">首页</a>
    </li>
    <li>
      <a href="###">动态</a>
    </li>
    <li>
      <a href="###">项目</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-secondary">
  <li class="active"><a href="your/nice/url">首页</a></li>
  <li><a href="your/nice/url">动态 <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## 标签页导航

`.nav-tabs`

<div class="example">
  <ul class="nav nav-tabs">
    <li class="active">
      <a href="###">首页</a>
    </li>
    <li>
      <a href="###">动态</a>
    </li>
    <li>
      <a href="###">项目</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-tabs">
  <li class="active"><a href="your/noce/url">首页</a></li>
  <li><a href="your/noce/url">动态 <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## 圆点导航

`.nav-pills`

<div class="example">
  <ul class="nav nav-pills">
    <li class="active">
      <a href="###">首页</a>
    </li>
    <li>
      <a href="###">动态</a>
    </li>
    <li>
      <a href="###">项目</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-pills">
  <li class="active"><a href="your/noce/url">首页</a></li>
  <li><a href="your/noce/url">动态 <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## 禁用的导航链接

在禁用的项目上添加`.disabled`

<div class="example">
  <ul class="nav nav-primary">
    <li class="active">
      <a href="###">首页</a>
    </li>
    <li>
      <a href="###">动态</a>
    </li>
    <li class="disabled">
      <a href="###">项目</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-tabs">
    <li class="active">
      <a href="###">首页</a>
    </li>
    <li>
      <a href="###">动态</a>
    </li>
    <li class="disabled">
      <a href="###">项目</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-pills">
    <li class="active">
      <a href="###">首页</a>
    </li>
    <li>
      <a href="###">动态</a>
    </li>
    <li class="disabled">
      <a href="###">项目</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-secondary">
    <li class="active">
      <a href="###">首页</a>
    </li>
    <li>
      <a href="###">动态</a>
    </li>
    <li class="disabled">
      <a href="###">项目</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-primary">
  <li class="disabled"><a disabled href="your/noce/url">首页</a></li>
  <li><a href="your/noce/url">动态 <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## 垂直排列

`.nav-stacked`

<div class="example">
  <div class="row">
    <div class="col-md-3">
      <ul class="nav nav-primary nav-stacked">
        <li class="active">
          <a href="###">首页 </a>
        </li>
        <li>
          <a href="###">动态 <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">项目 </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">任务</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">需求</a>
            </li>
            <li>
              <a href="">用例</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-3">
      <ul class="nav nav-stacked nav-tabs">
        <li class="active">
          <a href="###">首页 </a>
        </li>
        <li>
          <a href="###">动态 <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">项目 </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">任务</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">需求</a>
            </li>
            <li>
              <a href="">用例</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-3">
      <ul class="nav nav-secondary nav-stacked">
        <li class="active">
          <a href="###">首页 </a>
        </li>
        <li>
          <a href="###">动态 <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">项目 </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">任务</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">需求</a>
            </li>
            <li>
              <a href="">用例</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-md-3">
      <ul class="nav nav-stacked nav-pills">
        <li class="active">
          <a href="###">首页 </a>
        </li>
        <li>
          <a href="###">动态 <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">项目 </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">任务</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">需求</a>
            </li>
            <li>
              <a href="">用例</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

```html
<ul class="nav nav-primary nav-stacked">
  <li class="active"><a href="your/noce/url">首页</a></li>
  <li><a href="your/noce/url">动态 <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

```html
<ul class="nav nav-tabs nav-stacked">
  <li class="active"><a href="your/noce/url">首页</a></li>
  <li><a href="your/noce/url">动态 <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

```html
<ul class="nav nav-secondary nav-stacked">
  <li class="active"><a href="your/noce/url">首页</a></li>
  <li><a href="your/noce/url">动态 <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

```html
<ul class="nav nav-pills nav-stacked">
  <li class="active"><a href="your/noce/url">首页</a></li>
  <li><a href="your/noce/url">动态 <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## 自适应宽度

自适应宽度不能与垂直排列同时使用

`.nav-justified`

<div class="example">
  <ul class="nav nav-primary nav-justified">
    <li class="active">
      <a href="###">首页 </a>
    </li>
    <li>
      <a href="###">动态 <span class="label label-badge label-success pull-right">4</span></a>
    </li>
    <li>
      <a href="###">项目 </a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-justified nav-tabs">
    <li class="active">
      <a href="###">首页 </a>
    </li>
    <li>
      <a href="###">动态 <span class="label label-badge label-success pull-right">4</span></a>
    </li>
    <li>
      <a href="###">项目 </a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-secondary nav-justified">
    <li class="active">
      <a href="###">首页 </a>
    </li>
    <li>
      <a href="###">动态 <span class="label label-badge label-success pull-right">4</span></a>
    </li>
    <li>
      <a href="###">项目 </a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-justified nav-pills">
    <li class="active">
      <a href="###">首页 </a>
    </li>
    <li>
      <a href="###">动态 <span class="label label-badge label-success pull-right">4</span></a>
    </li>
    <li>
      <a href="###">项目 </a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

```html
<ul class="nav nav-primary nav-justified">
  <li class="active"><a href="your/noce/url">首页</a></li>
  <li><a href="your/noce/url">动态 <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

## 带标题的导航

<div class="example">
  <ul class="nav nav-tabs">
    <li class="nav-heading">这是标题</li>
    <li class="active">
      <a href="###">首页</a>
    </li>
    <li>
      <a href="###">动态</a>
    </li>
    <li class="disabled">
      <a href="###">项目</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-pills">
    <li class="nav-heading">这是标题</li>
    <li class="active">
      <a href="###">首页</a>
    </li>
    <li>
      <a href="###">动态</a>
    </li>
    <li class="disabled">
      <a href="###">项目</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <ul class="nav nav-secondary">
    <li class="nav-heading">This is heading</li>
    <li class="active">
      <a href="###">首页</a>
    </li>
    <li>
      <a href="###">动态</a>
    </li>
    <li class="disabled">
      <a href="###">项目</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
      <ul class="dropdown-menu">
        <li>
          <a href="">任务</a>
        </li>
        <li>
          <a href="">Bug</a>
        </li>
        <li>
          <a href="">需求</a>
        </li>
        <li>
          <a href="">用例</a>
        </li>
      </ul>
    </li>
  </ul>
  <br>
  <div class="row">
    <div class="col-sm-4">
      <ul class="nav nav-primary nav-stacked">
        <li class="nav-heading">这是标题</li>
        <li class="active">
          <a href="###">首页 </a>
        </li>
        <li>
          <a href="###">动态 <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">项目 </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">任务</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">需求</a>
            </li>
            <li>
              <a href="">用例</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-sm-4">
      <ul class="nav nav-secondary nav-stacked">
        <li class="nav-heading">THIS IS HEADINGS</li>
        <li class="active">
          <a href="###">首页 </a>
        </li>
        <li>
          <a href="###">动态 <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">项目 </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">任务</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">需求</a>
            </li>
            <li>
              <a href="">用例</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="col-sm-4">
      <ul class="nav nav-stacked nav-pills">
        <li class="nav-heading">THIS IS HEADINGS</li>
        <li class="active">
          <a href="###">首页 </a>
        </li>
        <li>
          <a href="###">动态 <span class="label label-badge label-success pull-right">4</span></a>
        </li>
        <li>
          <a href="###">项目 </a>
        </li>
        <li>
          <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li>
              <a href="">任务</a>
            </li>
            <li>
              <a href="">Bug</a>
            </li>
            <li>
              <a href="">需求</a>
            </li>
            <li>
              <a href="">用例</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>

```html
<ul class="nav nav-stacked">
  <li class="nav-heading">这是标题</li>
  <li class="active"><a href="your/nice/url">首页</a></li>
  <li><a href="your/nice/url">动态 <span class="label label-badge label-success">4</span></a></li>
  ...
</ul>
```

<div class="alert">示例中当点击导航条目并应用高亮样式的效果是为演示方便有意添加的，并非导航自身交互功能。你仍然可以手动为导航 <code>.nav</code> 中的 <code>li</code> 添加 <code>.active</code> CLASS 来启用或移除高亮样式效果。</div>

<script>
function afterPageLoad() {
    $('#pageContent').on('click', '.nav > li:not(.disabled) > a', function() {
        var $item = $(this).parent('li');
        $item.parent().children('.active').removeClass('active');
        $item.addClass('active');
    });
}
</script>
