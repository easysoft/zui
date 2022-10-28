# 导航

## 基础导航

使用组件类 `.nav` 来获得导航外观，通常搭配 `<menu>`、`<li>` 标签来使用。
 
```html:example
<menu class="nav">
  <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li><a class="nav-item"><span class="text">产品</span></a></li>
  <li><a class="nav-item"><span class="text">价格</span></a></li>
  <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider"></li>
  <li>
    <a class="nav-item" data-toggle="dropdown" href="#navDropdown1">
      <span class="text">更多</span><span class="caret"></span>
    </a>
  </li>
  <li class="nav-space"></li>
  <li>
    <button type="button" class="btn primary-outline bg-none">登录</button>
    <button type="button" class="btn primary">注册</button>
  </li>
</menu>
<menu id="navDropdown1" class="dropdown-menu menu">
  <li><a class="menu-item"><span class="text">博客</span></a></li>
  <li><a class="menu-item"><span class="text">项目</span></a></li>
  <li><a class="menu-item"><span class="text">关于我们</span></a></li>
</menu>
```

## 主要导航

```html:example
<menu class="nav nav-primary">
  <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li><a class="nav-item"><span class="text">产品</span></a></li>
  <li><a class="nav-item"><span class="text">价格</span></a></li>
  <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
  <li>
    <a class="nav-item" data-toggle="dropdown" href="#navDropdown2">
      <span class="text">更多</span><span class="caret"></span>
    </a>
  </li>
</menu>
<menu id="navDropdown2" class="dropdown-menu menu">
  <li><a class="menu-item"><span class="text">博客</span></a></li>
  <li><a class="menu-item"><span class="text">项目</span></a></li>
  <li><a class="menu-item"><span class="text">关于我们</span></a></li>
</menu>
```

## 次要导航

 ```html:example
<menu class="nav nav-secondary">
  <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li><a class="nav-item"><span class="text">产品</span></a></li>
  <li><a class="nav-item"><span class="text">价格</span></a></li>
  <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider"></li>
  <li>
    <a class="nav-item" data-toggle="dropdown" href="#navDropdown3">
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
  <li><a class="menu-item"><span class="text">博客</span></a></li>
  <li><a class="menu-item"><span class="text">项目</span></a></li>
  <li><a class="menu-item"><span class="text">关于我们</span></a></li>
</menu>
 ```

## 标签页导航

 ```html:example
<menu class="nav nav-tabs">
  <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li><a class="nav-item"><span class="text">产品</span></a></li>
  <li><a class="nav-item"><span class="text">价格</span></a></li>
  <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider"></li>
  <li>
    <a class="nav-item" data-toggle="dropdown" href="#navDropdown4">
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
  <li><a class="menu-item"><span class="text">博客</span></a></li>
  <li><a class="menu-item"><span class="text">项目</span></a></li>
  <li><a class="menu-item"><span class="text">关于我们</span></a></li>
</menu>
 ```

## 圆点导航

 ```html:example
<menu class="nav nav-pills">
  <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li><a class="nav-item"><span class="text">产品</span></a></li>
  <li><a class="nav-item"><span class="text">价格</span></a></li>
  <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider"></li>
  <li>
    <a class="nav-item" data-toggle="dropdown" href="#navDropdown5">
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
  <li><a class="menu-item"><span class="text">博客</span></a></li>
  <li><a class="menu-item"><span class="text">项目</span></a></li>
  <li><a class="menu-item"><span class="text">关于我们</span></a></li>
</menu>
 ```

## 垂直排列

```html:example
<div class="-flex -gap-4">
  <menu class="nav nav-stacked -flex-auto">
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary nav-stacked -flex-auto">
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-secondary nav-stacked -flex-auto">
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs nav-stacked -flex-auto">
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills nav-stacked -flex-auto">
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</div>
<menu id="navDropdown6" class="dropdown-menu menu">
  <li><a class="menu-item"><span class="text">博客</span></a></li>
  <li><a class="menu-item"><span class="text">项目</span></a></li>
  <li><a class="menu-item"><span class="text">关于我们</span></a></li>
</menu>
```

## 自适应宽度

```html:example
<div class="-flex -flex-col -gap-4">
  <menu class="nav nav-justified -flex-auto">
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary nav-justified -flex-auto">
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-secondary nav-justified -flex-auto">
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs nav-justified -flex-auto">
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills nav-justified -flex-auto">
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</div>
<menu id="navDropdown7" class="dropdown-menu menu">
  <li><a class="menu-item"><span class="text">博客</span></a></li>
  <li><a class="menu-item"><span class="text">项目</span></a></li>
  <li><a class="menu-item"><span class="text">关于我们</span></a></li>
</menu>
```

## 带标题的导航

```html:example
<div class="-flex -flex-col -gap-4 mb-4">
  <menu class="nav">
    <li><div class="nav-heading">导航标题</div></li>
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary">
    <li><div class="nav-heading">导航标题</div></li>
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-secondary">
    <li><div class="nav-heading">导航标题</div></li>
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs">
    <li><div class="nav-heading">导航标题</div></li>
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills">
    <li><div class="nav-heading">导航标题</div></li>
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</div>
<div class="-flex -gap-4">
  <menu class="nav nav-stacked -flex-auto">
    <li><div class="nav-heading">导航标题</div></li>
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary nav-stacked -flex-auto">
    <li><div class="nav-heading">导航标题</div></li>
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-secondary nav-stacked -flex-auto">
    <li><div class="nav-heading">导航标题</div></li>
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs nav-stacked -flex-auto">
    <li><div class="nav-heading">导航标题</div></li>
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills nav-stacked -flex-auto">
    <li><div class="nav-heading">导航标题</div></li>
    <li><a class="nav-item active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li><a class="nav-item"><span class="text">产品</span></a></li>
    <li><a class="nav-item"><span class="text">价格</span></a></li>
    <li><a class="nav-item disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li>
      <a class="nav-item" data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</div>
<menu id="navDropdown8" class="dropdown-menu menu">
  <li><a class="menu-item"><span class="text">博客</span></a></li>
  <li><a class="menu-item"><span class="text">项目</span></a></li>
  <li><a class="menu-item"><span class="text">关于我们</span></a></li>
</menu>
```
