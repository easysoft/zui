section: javascript
id: tab
description: 标签页式的导航菜单
icon: icon-credit
filter: biaoqianye bqy
---

# 标签页

一般结合导航使用。

## 基本类型

通过 `ul.nav + div.tab-content` 的方式实现。

<div class="example">
  <ul id="myTab" class="nav nav-tabs">
    <li class="active">
      <a href="#tab1" data-toggle="tab">Tab1</a>
    </li>
    <li>
      <a href="#tab2" data-toggle="tab">Tab2</a>
    </li>
    <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        Other tabs <b class="caret"></b>
      </a>
      <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1">
        <li>
          <a href="#tab3" tabindex="-1" data-toggle="tab">Tab3</a>
        </li>
        <li>
          <a href="#tab4" tabindex="-1" data-toggle="tab">Tab4</a>
        </li>
      </ul>
    </li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane in active" id="tab1">
      <p>口是心非你深情的承诺</p>
      <p>都随着西风飘渺远走</p>
      <p>痴人梦话我钟情的倚托</p>
      <p>就像枯萎凋零的花朵</p>
    </div>
    <div class="tab-pane" id="tab2">
      <p>星火燎原我热情的眼眸</p>
      <p>曾点亮最灿烂的天空</p>
      <p>晴天霹雳你绝情的放手</p>
      <p>在我最需要你的时候</p>
      <p>于是爱恨交错人消瘦</p>
    </div>

    <div class="tab-pane" id="tab3">
      <p>怕是怕这些苦没来由</p>
      <p>于是悲欢起落人静默</p>
      <p>等一等这些伤会自由</p>
      <p>于是爱恨交错人消瘦</p>
      <p>怕是怕这些苦没来由</p>
      <p>于是悲欢起落人静默</p>
      <p>等一等这些伤会自由</p>
    </div>
    <div class="tab-pane" id="tab4">
      <p>口是心非你矫情的面容</p>
      <p>都烙印在心灵的角落</p>
      <p>无话可说我纵情的结果</p>
      <p>就像残破光秃的山头</p>
      <p>浑然天成我纯情的悸动</p>
      <p>曾奔放最滚烫的节奏</p>
      <p>不可收拾你滥情的抛空</p>
    </div>
  </div>
</div>

## 导航样式

`ul.nav.nav-pills`，通过修改ul的.nav-*来修改导航样式，具体见导航控件。

<div class="example">
  <ul id="myTab2" class="nav nav-pills">
    <li class="active">
      <a href="#tab11" data-toggle="tab">Tab1</a>
    </li>
    <li>
      <a href="#tab22" data-toggle="tab">Tab2</a>
    </li>
    <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        Other tabs <b class="caret"></b>
      </a>
      <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1">
        <li>
          <a href="#tab33" tabindex="-1" data-toggle="tab">Tab3</a>
        </li>
        <li>
          <a href="#tab44" tabindex="-1" data-toggle="tab">Tab4</a>
        </li>
      </ul>
    </li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane in active" id="tab11">
      <p>口是心非你深情的承诺</p>
      <p>都随着西风飘渺远走</p>
      <p>痴人梦话我钟情的倚托</p>
      <p>就像枯萎凋零的花朵</p>
    </div>
    <div class="tab-pane" id="tab22">
      <p>星火燎原我热情的眼眸</p>
      <p>曾点亮最灿烂的天空</p>
      <p>晴天霹雳你绝情的放手</p>
      <p>在我最需要你的时候</p>
      <p>于是爱恨交错人消瘦</p>
    </div>

    <div class="tab-pane" id="tab33">
      <p>怕是怕这些苦没来由</p>
      <p>于是悲欢起落人静默</p>
      <p>等一等这些伤会自由</p>
      <p>于是爱恨交错人消瘦</p>
      <p>怕是怕这些苦没来由</p>
      <p>于是悲欢起落人静默</p>
      <p>等一等这些伤会自由</p>
    </div>
    <div class="tab-pane" id="tab44">
      <p>口是心非你矫情的面容</p>
      <p>都烙印在心灵的角落</p>
      <p>无话可说我纵情的结果</p>
      <p>就像残破光秃的山头</p>
      <p>浑然天成我纯情的悸动</p>
      <p>曾奔放最滚烫的节奏</p>
      <p>不可收拾你滥情的抛空</p>
    </div>
  </div>
</div>

## 载入效果

为每个.tab-pane添加.fade可以让标签页具有淡入的特效。同时第一个标签页所对应的的内容区必须也添加.in

<div class="example">
  <ul id="myTab3" class="nav nav-pills">
    <li class="active">
      <a href="#tab111" data-toggle="tab">fade in</a>
    </li>
    <li>
      <a href="#tab222" data-toggle="tab">in</a>
    </li>
    <li class="dropdown">
      <a href="#" class="dropdown-toggle" data-toggle="dropdown">
        Other tabs
        <b class="caret"></b>
      </a>
      <ul class="dropdown-menu" role="menu" aria-labelledby="myTabDrop1">
        <li>
          <a href="#tab333" tabindex="-1" data-toggle="tab">fade</a>
        </li>
        <li>
          <a href="#tab444" tabindex="-1" data-toggle="tab">fade</a>
        </li>
      </ul>
    </li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane fade in active" id="tab111">
      <p>口是心非你深情的承诺</p>
      <p>都随着西风飘渺远走</p>
      <p>痴人梦话我钟情的倚托</p>
      <p>就像枯萎凋零的花朵</p>
    </div>
    <div class="tab-pane fade" id="tab222">
      <p>星火燎原我热情的眼眸</p>
      <p>曾点亮最灿烂的天空</p>
      <p>晴天霹雳你绝情的放手</p>
      <p>在我最需要你的时候</p>
      <p>于是爱恨交错人消瘦</p>
    </div>

    <div class="tab-pane fade" id="tab333">
      <p>怕是怕这些苦没来由</p>
      <p>于是悲欢起落人静默</p>
      <p>等一等这些伤会自由</p>
      <p>于是爱恨交错人消瘦</p>
      <p>怕是怕这些苦没来由</p>
      <p>于是悲欢起落人静默</p>
      <p>等一等这些伤会自由</p>
    </div>
    <div class="tab-pane fade" id="tab444">
      <p>口是心非你矫情的面容</p>
      <p>都烙印在心灵的角落</p>
      <p>无话可说我纵情的结果</p>
      <p>就像残破光秃的山头</p>
      <p>浑然天成我纯情的悸动</p>
      <p>曾奔放最滚烫的节奏</p>
      <p>不可收拾你滥情的抛空</p>
    </div>
  </div>
</div>

## 方法和事件

<h3></h3>

<table class="table table-bordered table-striped">
  <tbody>
    <tr>
      <td>方法</td>
      <td>例子</td>
      <td>描述</td>
    </tr>
    <tr>
      <td>`.tab('show')`</td>
      <td>`$("#myTab a:last").tab('show')`</td>
      <td>激活标签页和内容区</td>
    </tr>
  </tbody>
</table>

<table class="table table-bordered table-striped">
  <tbody>
    <tr>
      <td>事件</td>
      <td>使用</td>
      <td>描述</td>
    </tr>
    <tr>
      <td>show.zui.tab</td>
      <td>$('a[data-toggle="tab"]').on('show.zui.tab', function (e) { e.target // activated tab e.relatedTarget // previous tab })</td>
      <td>当要激活标签页和标签内容的时候激活该事件</td>
    </tr>
    <tr>
      <td>shown.zui.tab</td>
      <td>$('a[data-toggle="tab"]').on('shown.zui.tab', function (e) { e.target // activated tab e.relatedTarget // previous tab })</td>
      <td>当标签页和标签内容载入完毕后，激活该事件</td>
    </tr>
  </tbody>
</table>

关于 `e.target` 和 `e.relatedTarget` 分别表示当前激活标签对象和前一个标签对象。

可遍历对象查看对象各个属性和值：

```
$('#myTab a[data-toggle="tab"]').on('shown.zui.tab', function (e)
{
    $.each(e.target, function(n, value)
    {
        if(value) alert(n + ': ' + value);
    })
})
```
