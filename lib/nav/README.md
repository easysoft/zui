# 导航

## 导航生成器

```html:example
<div id="nav"></div>
```

```js
const nav = new Nav('#nav', {
    items: [
        {text: '首页', icon: {"className": "example-icon example-icon-home", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}, active: true},
        {text: '动态'},
        {text: '论坛'},
        {type: 'divider'},
        {text: '博客', icon: {"className": "example-icon example-icon-rss", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%204a16%2016%200%200%201%2016%2016M4%2010a10%2010%200%200%201%2010%2010M4%2018h2v2H4z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}},
        {text: '关注我们', icon: {"className": "example-icon example-icon-group", "aria-hidden": true, "style": {"display": "inline-block", "width": "1em", "height": "1em", "backgroundColor": "currentColor", "mask": "url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M7%207a3%203%200%201%200%206%200%203%203%200%201%200-6%200M3%2021v-3c0-6%2014-6%2014%200v3zM17%204a3%203%200%200%201%200%206m2%204c3%201%203%204%203%207%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"}}},
    ],
    onClickItem: (info) => {
        console.log('> nav.onClickItem', info);
    },
});
console.log('> nav', nav);
```

## 基础导航

使用组件类 `.nav` 来获得导航外观，通常搭配 `<menu>`、`<li>` 标签来使用。
 
```html:example
<menu class="nav">
  <li class="nav-item item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
  <li class="nav-item item"><a><span class="text">产品</span></a></li>
  <li class="nav-item item"><a><span class="text">价格</span></a></li>
  <li class="nav-item item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider divider"></li>
  <li class="nav-item item">
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

## 紧凑模式

```html:example
<menu class="nav nav-compact">
  <li class="nav-item item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
  <li class="nav-item item"><a><span class="text">产品</span></a></li>
  <li class="nav-item item"><a><span class="text">价格</span></a></li>
  <li class="nav-item item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider divider"></li>
  <li class="nav-item item">
    <a data-toggle="dropdown" href="#navDropdown1">
      <span class="text">更多</span><span class="caret"></span>
    </a>
  </li>
  <li class="nav-space"></li>
  <li class="nav-btn-group">
    <div class="btn-group size-sm">
      <button type="button" class="btn">预定</button>
      <button type="button" class="btn">在线咨询</button>
    </div>
  </li>
  <li class="nav-space w-4 flex-none"></li>
  <li>
    <button type="button" class="btn size-sm primary-outline bg-none">登录</button>
    <button type="button" class="btn size-sm primary">注册</button>
  </li>
</menu>
```

## 主要导航

```html:example
<menu class="nav nav-primary">
  <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
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
  <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
  <li class="nav-item"><a><span class="text">产品</span></a></li>
  <li class="nav-item"><a><span class="text">价格</span></a></li>
  <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider divider"></li>
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
  <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
  <li class="nav-item"><a><span class="text">产品</span></a></li>
  <li class="nav-item"><a><span class="text">价格</span></a></li>
  <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider divider"></li>
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
  <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
  <li class="nav-item"><a><span class="text">产品</span></a></li>
  <li class="nav-item"><a><span class="text">价格</span></a></li>
  <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider divider"></li>
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

## 步骤条

```html:example: flex justify-start p-4 surface
<menu class="nav nav-steps canvas">
  <li class="nav-item item"><a><span class="text">普通步骤1</span></a></li>
  <li class="nav-item item"><a class="selected"><span class="text">已激活步骤1</span></a></li>
  <li class="nav-item item"><a class="selected"><span class="text">已激活步骤2</span></a></li>
  <li class="nav-item item"><a class="active"><span class="text">当前步骤</span></a></li>
  <li class="nav-item item"><a class="selected"><span class="text">已激活步骤3</span></a></li>
  <li class="nav-item item"><a><span class="text">可点击步骤1</span></a></li>
  <li class="nav-item item"><a><span class="text">可点击步骤2</span></a></li>
  <li class="nav-item item"><a class="disabled"><span class="text">不可点击步骤</span></a></li>
</menu>
```

## 垂直排列

```html:example
<div class="-flex -gap-4">
  <menu class="nav nav-stacked -flex-auto">
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary nav-stacked -flex-auto">
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
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
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs nav-stacked -flex-auto">
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown6">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills nav-stacked -flex-auto">
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
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
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary nav-justified -flex-auto">
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
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
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs nav-justified -flex-auto">
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown7">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills nav-justified -flex-auto">
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
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
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
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
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
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
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-primary nav-stacked -flex-auto">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
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
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-tabs nav-stacked -flex-auto">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <menu class="nav nav-pills nav-stacked -flex-auto">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="example-icon example-icon-home" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%2011l9-8%209%208M5%2010v11h14V10M9%2021v-7h6v7%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider divider"></li>
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
