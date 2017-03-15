section: javascript
id: collapse
description: 为元素提供折叠和展开功能
icon: icon-collapse
filter: zhedie zd
---

# 折叠

折叠插件使用直观的动画来展示或显示内容。

## 结构

要实现折叠，一般需要两个元素：

 - 折叠内容元素，包含使用动画来切换显示或隐藏的内容，需要添加 `.collapse` 类，如果被折叠内容在一开始就是显示的，还需要为其添加 `.in` 类；
 - 触发元素，需要添加 `[data-toggle="collapse"]` 属性，并且使用 `[href]` 或 `[data-target="#selector"]` 属性来自定用于折叠内容元素。

### 示例

<example>
  <p>
    <button type="button" class="btn" data-toggle="collapse" data-target="#collapseExample">使用 data-target 属性</button>
    <a href="#collapseExample" data-toggle="collapse" class="btn btn-link">直接使用 href 属性</a>
  </p>
  <div class="collapse" id="collapseExample">
    <div class="bg-primary with-padding">
      <p>被折叠元素内容。</p>
      <p>多个触发元素可以指向同一个折叠内容。</p>
    </div>
  </div>
</example>

```html
<p>
  <button type="button" class="btn" data-toggle="collapse" data-target="#collapseExample">使用 data-target 属性</button>
  <a href="#collapseExample" data-toggle="collapse" class="btn btn-link">直接使用 href 属性</a>
</p>
<div class="collapse" id="collapseExample">
  <div class="bg-primary with-padding">
    <p>被折叠元素内容。</p>
    <p>多个触发元素可以指向同一个折叠内容。</p>
  </div>
</div>
```

## 折叠分组

多个折叠如果放置在同一个父级容器元素内，可以创建一个折叠分组（手风琴效果），只需要为每个触发元素添加 `[data-parent="#selector"]` 属性，其属性值指向父级容器即可。

<example>
  <div id="accordion">
    <p>
      <a href="#collapseExample1" data-toggle="collapse" data-parent="#accordion" class="btn btn-link">折叠 1</a>
    </p>
    <div class="collapse in" id="collapseExample1">
      <div class="bg-primary with-padding">
        <p>被折叠元素内容。</p>
        <p>多个触发元素可以指向同一个折叠内容。</p>
      </div>
    </div>
    <p>
      <a href="#collapseExample2" data-toggle="collapse" data-parent="#accordion" class="btn btn-link collapsed">折叠 2</a>
    </p>
    <div class="collapse" id="collapseExample2">
      <div class="bg-success with-padding">
        <p>被折叠元素内容。</p>
        <p>多个触发元素可以指向同一个折叠内容。</p>
      </div>
    </div>
    <p>
      <a href="#collapseExample3" data-toggle="collapse" data-parent="#accordion" class="btn btn-link collapsed">折叠 3</a>
    </p>
    <div class="collapse" id="collapseExample3">
      <div class="bg-danger with-padding">
        <p>被折叠元素内容。</p>
        <p>多个触发元素可以指向同一个折叠内容。</p>
      </div>
    </div>
  </div>
</example>

<style>
#accordion > div + p {padding-top: 10px;}
</style>

### 结合面板组使用

<example>
  <div class="panel-group" id="accordionPanels" aria-multiselectable="true">
    <div class="panel panel-default">
      <div class="panel-heading" id="headingOne">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordionPanels" href="#collapseOne">
            折叠面板 1
          </a>
        </h4>
      </div>
      <div id="collapseOne" class="panel-collapse collapse in">
        <div class="panel-body">折叠面板内容 1</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" id="headingTwo">
        <h4 class="panel-title">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordionPanels" href="#collapseTwo">
            折叠面板 2
          </a>
        </h4>
      </div>
      <div id="collapseTwo" class="panel-collapse collapse">
        <div class="panel-body">折叠面板内容 2</div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading" id="headingThree">
        <h4 class="panel-title">
          <a class="collapsed" data-toggle="collapse" data-parent="#accordionPanels" href="#collapseThree">
            折叠面板 3
          </a>
        </h4>
      </div>
      <div id="collapseThree" class="panel-collapse collapse">
        <div class="panel-body">折叠面板内容 3</div>
      </div>
    </div>
  </div>
</example>

```html
<div class="panel-group" id="accordionPanels" aria-multiselectable="true">
  <div class="panel panel-default">
    <div class="panel-heading" id="headingOne">
      <h4 class="panel-title">
        <a data-toggle="collapse" data-parent="#accordionPanels" href="#collapseOne">
          折叠面板 1
        </a>
      </h4>
    </div>
    <div id="collapseOne" class="panel-collapse collapse in">
      <div class="panel-body">折叠面板内容 1</div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" id="headingTwo">
      <h4 class="panel-title">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionPanels" href="#collapseTwo">
          折叠面板 2
        </a>
      </h4>
    </div>
    <div id="collapseTwo" class="panel-collapse collapse">
      <div class="panel-body">折叠面板内容 2</div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-heading" id="headingThree">
      <h4 class="panel-title">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionPanels" href="#collapseThree">
          折叠面板 3
        </a>
      </h4>
    </div>
    <div id="collapseThree" class="panel-collapse collapse">
      <div class="panel-body">折叠面板内容 3</div>
    </div>
  </div>
</div>
```

## 使用方法

### 手动初始化

通常情况下，直接使用 `[data-*]` 属性就可以使折叠正常工作，但也提供了手动使用 JavaScript 代码进行初始化方式。

 - `$().collapse()`
 - `$().collapse(options)`

其中 `options` 参数为可以选的，用于指定初始化的选项，可用选项如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>选项</th>
      <th>类型</th>
      <th>默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`parent`</td>
      <td>selector | `false`</td>
      <td>`false`</td>
      <td>可用设定一个选择器字符串，用于指定折叠分组的父级元素。</td>
    </tr>
    <tr>
      <td>`toggle`</td>
      <td>'true' | `false`</td>
      <td>`true`</td>
      <td>是否在初始化时显示折叠内容。</td>
    </tr>
  </tbody>
</table>

```js
$('#myCollapseContent').collapse({
   toggle: false
});
```

### 方法

#### `$().collapse('show')`

显示折叠内容。

#### `$().collapse('hide')`

隐藏折叠内容。

#### `$().collapse('toggle')`

切换显示折叠内容。

#### 调用方法

```js
// 显示折叠内容
$('#myCollapseContent').collapse('show')
```

### 事件

当折叠内容显示或隐藏时会在折叠内容元素上触发以下事件：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>事件</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`show.zui.collapse`</td>
      <td>当折叠内容显示时触发。</td>
    </tr>
    <tr>
      <td>`shown.zui.collapse`</td>
      <td>当折叠内容显示后触发，此时动画已执行完毕。</td>
    </tr>
    <tr>
      <td>`hide.zui.collapse`</td>
      <td>当折叠内容隐藏时触发。</td>
    </tr>
    <tr>
      <td>`hidden.zui.collapse`</td>
      <td>当折叠内容隐藏后触发，此时动画已执行完毕。</td>
    </tr>
  </tbody>
</table>

```
$('#myCollapseContent').on('hidden.zui.collapse', function () {
    console.log('折叠内容已隐藏。');
})
```
