# 导航

## 基础导航

使用组件类 `.nav` 来获得导航外观，通常搭配 `<menu>`、`<li>` 标签来使用。
 
```html:example
<menu class="nav">
  <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li class="nav-item"><a><span class="text">产品</span></a></li>
  <li class="nav-item"><a><span class="text">价格</span></a></li>
  <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider"></li>
  <li class="nav-item">
    <a data-toggle="dropdown" href="#navDropdown1">
      <span class="text">更多</span><span class="caret"></span>
    </a>
  </li>
  <li class="nav-space"></li>
  <li class="nav-btn-group">
    <div class="btn-group">
      <button type="button" class="btn">预定</button>
      <button type="button" class="btn">在线咨询</button>
    </div>
  </li>
  <li class="nav-space w-4 flex-none"></li>
  <li>
    <button type="button" class="btn primary-outline bg-none">登录</button>
    <button type="button" class="btn primary">注册</button>
  </li>
</menu>
<menu id="navDropdown1" class="dropdown-menu menu">
  <li class="menu-item"><a><span class="text">博客</span></a></li>
  <li class="menu-item"><a><span class="text">项目</span></a></li>
  <li class="menu-item"><a><span class="text">关于我们</span></a></li>
</menu>
```

## 主要导航

```html:example
<menu class="nav nav-primary">
  <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li class="nav-item"><a><span class="text">产品</span></a></li>
  <li class="nav-item"><a><span class="text">价格</span></a></li>
  <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-item">
    <a data-toggle="dropdown" href="#navDropdown2">
      <span class="text">更多</span><span class="caret"></span>
    </a>
  </li>
</menu>
<menu id="navDropdown2" class="dropdown-menu menu">
  <li class="menu-item"><a><span class="text">博客</span></a></li>
  <li class="menu-item"><a><span class="text">项目</span></a></li>
  <li class="menu-item"><a><span class="text">关于我们</span></a></li>
</menu>
```

## 次要导航

 ```html:example
<menu class="nav nav-secondary">
  <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li class="nav-item"><a><span class="text">产品</span></a></li>
  <li class="nav-item"><a><span class="text">价格</span></a></li>
  <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider"></li>
  <li class="nav-item">
    <a data-toggle="dropdown" href="#navDropdown3">
      <span class="text">更多</span><span class="caret"></span>
    </a>
  </li>
  <li class="nav-space"></li>
  <li>
    <button type="button" class="btn primary-outline bg-none">登录</button>
    <button type="button" class="btn primary">注册</button>
  </li>
</menu>
<menu id="navDropdown3" class="dropdown-menu menu">
  <li class="menu-item"><a><span class="text">博客</span></a></li>
  <li class="menu-item"><a><span class="text">项目</span></a></li>
  <li class="menu-item"><a><span class="text">关于我们</span></a></li>
</menu>
 ```

## 标签页导航

 ```html:example
<menu class="nav nav-tabs">
  <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li class="nav-item"><a><span class="text">产品</span></a></li>
  <li class="nav-item"><a><span class="text">价格</span></a></li>
  <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider"></li>
  <li class="nav-item">
    <a data-toggle="dropdown" href="#navDropdown4">
      <span class="text">更多</span><span class="caret"></span>
    </a>
  </li>
  <li class="nav-space"></li>
  <li>
    <button type="button" class="btn primary-outline bg-none">登录</button>
    <button type="button" class="btn primary">注册</button>
  </li>
</menu>
<menu id="navDropdown4" class="dropdown-menu menu">
  <li class="menu-item"><a><span class="text">博客</span></a></li>
  <li class="menu-item"><a><span class="text">项目</span></a></li>
  <li class="menu-item"><a><span class="text">关于我们</span></a></li>
</menu>
 ```

## 圆点导航

 ```html:example
<menu class="nav nav-pills">
  <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li class="nav-item"><a><span class="text">产品</span></a></li>
  <li class="nav-item"><a><span class="text">价格</span></a></li>
  <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider"></li>
  <li class="nav-item">
    <a data-toggle="dropdown" href="#navDropdown5">
      <span class="text">更多</span><span class="caret"></span>
    </a>
  </li>
  <li class="nav-space"></li>
  <li>
    <button type="button" class="btn primary-outline bg-none">登录</button>
    <button type="button" class="btn primary">注册</button>
  </li>
</menu>
<menu id="navDropdown5" class="dropdown-menu menu">
  <li class="menu-item"><a><span class="text">博客</span></a></li>
  <li class="menu-item"><a><span class="text">项目</span></a></li>
  <li class="menu-item"><a><span class="text">关于我们</span></a></li>
</menu>
 ```

## 垂直排列

```html:example
<div class="-flex -gap-4">
  <menu class="nav nav-stacked -flex-auto">
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary nav-stacked -flex-auto">
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-secondary nav-stacked -flex-auto">
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs nav-stacked -flex-auto">
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills nav-stacked -flex-auto">
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</div>
<menu id="navDropdown6" class="dropdown-menu menu">
  <li class="menu-item"><a><span class="text">博客</span></a></li>
  <li class="menu-item"><a><span class="text">项目</span></a></li>
  <li class="menu-item"><a><span class="text">关于我们</span></a></li>
</menu>
```

## 自适应宽度

```html:example
<div class="-flex -flex-col -gap-4">
  <menu class="nav nav-justified -flex-auto">
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary nav-justified -flex-auto">
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-secondary nav-justified -flex-auto">
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs nav-justified -flex-auto">
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills nav-justified -flex-auto">
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</div>
<menu id="navDropdown7" class="dropdown-menu menu">
  <li class="menu-item"><a><span class="text">博客</span></a></li>
  <li class="menu-item"><a><span class="text">项目</span></a></li>
  <li class="menu-item"><a><span class="text">关于我们</span></a></li>
</menu>
```

## 带标题的导航

```html:example
<div class="-flex -flex-col -gap-4 mb-4">
  <menu class="nav">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-secondary">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</div>
<div class="-flex -gap-4">
  <menu class="nav nav-stacked -flex-auto">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary nav-stacked -flex-auto">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-secondary nav-stacked -flex-auto">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs nav-stacked -flex-auto">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills nav-stacked -flex-auto">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</div>
<menu id="navDropdown8" class="dropdown-menu menu">
  <li class="menu-item"><a><span class="text">博客</span></a></li>
  <li class="menu-item"><a><span class="text">项目</span></a></li>
  <li class="menu-item"><a><span class="text">关于我们</span></a></li>
</menu>
```
