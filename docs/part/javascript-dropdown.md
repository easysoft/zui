section: javascript
id: dropdown
description: 浮动在页面之上的垂直菜单
icon: icon-align-justify
filter: xialacaidan xlcd
---

# 下拉菜单

## 基本类型

将下拉菜单触发器和下拉菜单都包裹在.dropdown里，或者另一个声明了 `position: relative;` 的元素。然后添加组成菜单的HTML代码。

通过是否指定data-toggle='dropdown'来开关下拉菜单。

<div class="example">
  <div class="dropdown">
    <button class="btn dropdown-toggle" type="button" data-toggle="dropdown">
      操作
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
      <li role="presentation" class="dropdown-header">Dropdown header</li>
      <li>
        <a href="#">编辑</a>
      </li>
      <li>
        <a href="#">删除</a>
      </li>
      <li class="divider"></li>
      <li role="presentation" class="dropdown-header">Dropdown header</li>
      <li>
        <a href="#">修改</a>
      </li>
    </ul>
  </div>
</div>

## 导航条下拉菜单

<div class="example">
  <ul class="nav nav-primary">
    <li class="active">
      <a href="#">首页</a>
    </li>
    <li>
      <a href="#">演示</a>
    </li>
    <li>
      <a href="#">下载</a>
    </li>
    <li>
      <a class="dropdown-toggle" data-toggle="dropdown" href="#">
        团队
        <span class="caret"></span>
      </a>
      <ul class="dropdown-menu">
        <li>
          <a href="#">关于我们</a>
        </li>
        <li>
          <a href="#">开发计划</a>
        </li>
        <li class="divider"></li>
        <li>
          <a href="#">开源代码</a>
        </li>
        <li>
          <a href="#">团队博客</a>
        </li>
      </ul>
    </li>
  </ul>
</div>

## 标签式下拉菜单

<div class="example">
  <div class="dropdown">
    <a id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="/page.html">
      操作
      <span class="caret"></span>
    </a>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
      <li>
        <a href="#">编辑</a>
      </li>
      <li>
        <a href="#">删除</a>
      </li>
      <li class="divider"></li>
      <li>
        <a href="#">修改</a>
      </li>
    </ul>
  </div>
</div>

## 按钮下拉菜单

<div class="example">
  <div class="btn-group">
    <button class="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
      操作
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
      <li>
        <a href="#">编辑</a>
      </li>
      <li>
        <a href="#">删除</a>
      </li>
      <li class="divider"></li>
      <li>
        <a href="#">修改</a>
      </li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn">操作</button>
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
      <span class="sr-only">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li>
        <a href="#">编辑</a>
      </li>
      <li>
        <a href="#">删除</a>
      </li>
      <li class="divider"></li>
      <li>
        <a href="#">增加</a>
      </li>
    </ul>
  </div>
</div>

## 改变弹出方向

<div class="example">
  <div class="btn-group">
    <button type="button" class="btn">默认向下</button>
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li>
        <a href="#">div.btn-group</a>
      </li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn">下右</button>
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu pull-right" role="menu">
      <li>
        <a href="#">div.btn-group &gt; ul.dropdown-menu.pull-right</a>
      </li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn">向上</button>
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li>
        <a href="#">div.btn-group.dropup</a>
      </li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn">向右</button>
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu pull-right" role="menu">
      <li>
        <a href="#">div.btn-group.dropup &gt; ul.dropdown-menu.pull-right</a>
      </li>
    </ul>
  </div>
</div>

## 包含多级子菜单

<div class="example">
  <div class="btn-group dropup" style="margin-left: 100px">
    <button type="button" class="btn">编辑</button>
    <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu">
      <li>
        <a tabindex="-1" href="#">关闭</a>
      </li>

      <li class="dropdown-submenu">
        <a tabindex="-1" href="#">评审</a>
        <ul class="dropdown-menu">
          <li>
            <a tabindex="-1" href="#">确认通过</a>
          </li>
          <li>
            <a tabindex="-1" href="#">有待明确</a>
          </li>
          <li class="dropdown-submenu">
            <a tabindex="-1" href="#">拒绝</a>
            <ul class="dropdown-menu">
              <li>
                <a tabindex="-1" href="#">已完成</a>
              </li>
              <li>
                <a tabindex="-1" href="#">延期</a>
              </li>
              <li>
                <a tabindex="-1" href="#">不做</a>
              </li>
              <li>
                <a tabindex="-1" href="#">已取消</a>
              </li>
              <li>
                <a tabindex="-1" href="#">设计如此</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li class="dropdown-submenu">
        <a tabindex="-1" href="#">计划</a>
        <ul class="dropdown-menu">
          <li>
            <a tabindex="-1" href="#">Plan A</a>
          </li>
          <li>
            <a tabindex="-1" href="#">Plan B</a>
          </li>
          <li>
            <a tabindex="-1" href="#">Plan C</a>
          </li>
          <li>
            <a tabindex="-1" href="#">Plan D</a>
          </li>
          <li>
            <a tabindex="-1" href="#">Plan E</a>
          </li>
        </ul>
      </li>

      <li class="dropdown-submenu">
        <a tabindex="-1" href="#">阶段</a>
        <ul class="dropdown-menu">
          <li>
            <a tabindex="-1" href="#">未开始</a>
          </li>
          <li>
            <a tabindex="-1" href="#">已计划</a>
          </li>
          <li>
            <a tabindex="-1" href="#">已立项</a>
          </li>
          <li>
            <a tabindex="-1" href="#">研发中</a>
          </li>
          <li>
            <a tabindex="-1" href="#">研发完毕</a>
          </li>
          <li>
            <a tabindex="-1" href="#">测试中</a>
          </li>
          <li>
            <a tabindex="-1" href="#">测试完毕</a>
          </li>
          <li>
            <a tabindex="-1" href="#">已验收</a>
          </li>
          <li>
            <a tabindex="-1" href="#">已发布</a>
          </li>
        </ul>
      </li>

      <li class="divider"></li>
      <li class="dropdown-submenu pull-left">
        <a tabindex="-1" href="#">.pull-left</a>
        <ul class="dropdown-menu">
          <li>
            <a tabindex="-1" href="#">Item1</a>
          </li>
          <li>
            <a tabindex="-1" href="#">Item2</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>

## 带标题和禁用项目

通过li.dropdown-header增加小标题，为li增加.disabled来禁用。

<div class="example">
  <div class="dropdown">
    <button class="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
      操作
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" role="menu">
      <li class="dropdown-header">基本操作</li>
      <li>
        <a href="#">编辑</a>
      </li>
      <li class="disabled">
        <a role="menuitem" tabindex="-1" href="#">修改</a>
      </li>
      <li class="divider"></li>
      <li class="dropdown-header">其他操作</li>
      <li>
        <a href="#">增加</a>
      </li>
    </ul>
  </div>
</div>
