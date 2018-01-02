section: javascript
id: tab
description: 标签页式的导航菜单
icon: icon-credit
filter: biaoqianye bqy
---

# 标签页

标签页允许通过点击一个导航或列表项目来切换显示的内容。

## 结构

标签页一般配合[导航](#component/nav)使用，为导航上每个用于切换标签内容的链接添加 `[href]` 或 `[data-target]` 属性指向当前标签页内容的 ID，并添加 `[data-toggle="tab"]` 属性。

另一种快捷方法是为用于切换标签页的链接使用 `[data-tab]` 属性，属性值指向所切换的 `.tab-pane` 元素。这种方法不需要 `[data-target]` 和 `[data-toggle="tab"]` 属性。

标签页内容使用 `.tab-pane` 作为容器元素，所有供切换显示的 `.tab-pane` 放置在 `.tab-content` 容器元素内。

为确保在页面显示的时候标签页能够指示正确的标签和显示正确的内容，在初始状态需要为当前选中的导航项目 `<li>` 元素添加 `.active` 类，并且为当前显示的标签页内容元素 `.tab-pane` 添加 `.active` 类。

### 示例

<example class="example-tabs-with-nav">
  <ul class="nav nav-tabs">
    <li class="active"><a data-tab href="#tabContent1">标签1</a></li>
    <li><a data-tab href="#tabContent2">标签2</a></li>
    <li><a data-tab href="#tabContent3">标签3</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane active" id="tabContent1">
      <p>我是标签1。</p>
    </div>
    <div class="tab-pane" id="tabContent2">
      <p>标签2的内容。</p>
    </div>
    <div class="tab-pane" id="tabContent3">
      <p>这是标签3的内容。</p>
    </div>
  </div>
</example>

<style>
.example-tabs-with-nav .nav {margin-bottom: 20px;}
</style>

```html
<ul class="nav nav-tabs">
  <li class="active"><a data-tab href="#tabContent1">标签1</a></li>
  <li><a data-tab href="#tabContent2">标签2</a></li>
  <li><a data-tab href="#tabContent3">标签3</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane active" id="tabContent1">
    <p>我是标签1。</p>
  </div>
  <div class="tab-pane" id="tabContent2">
    <p>标签2的内容。</p>
  </div>
  <div class="tab-pane" id="tabContent3">
    <p>这是标签3的内容。</p>
  </div>
</div>
```

## 动画效果

为每个 `.tab-pane` 添加 `.fade` 类，可以使得标签内容在显示时获得渐变动画效果。在初始状态要显示的标签页内容 `.tab-pane` 不仅需要添加 `.active` 类，还需要添加 `.in` 类。

<example class="example-tabs-with-nav">
  <ul class="nav nav-tabs">
    <li class="active"><a href="###" data-target="#tab2Content1" data-toggle="tab">标签1</a></li>
    <li><a href="###" data-target="#tab2Content2" data-toggle="tab">标签2</a></li>
    <li><a href="###" data-target="#tab2Content3" data-toggle="tab">标签3</a></li>
  </ul>
  <div class="tab-content">
    <div class="tab-pane fade active in" id="tab2Content1">
      <p>我是标签1。</p>
    </div>
    <div class="tab-pane fade" id="tab2Content2">
      <p>标签2的内容。</p>
    </div>
    <div class="tab-pane fade" id="tab2Content3">
      <p>这是标签3的内容。</p>
    </div>
  </div>
</example>

```html
<ul class="nav nav-tabs">
  <li class="active"><a href="###" data-target="#tab2Content1" data-toggle="tab">标签1</a></li>
  <li><a href="###" data-target="#tab2Content2" data-toggle="tab">标签2</a></li>
  <li><a href="###" data-target="#tab2Content3" data-toggle="tab">标签3</a></li>
</ul>
<div class="tab-content">
  <div class="tab-pane fade active in" id="tab2Content1">
    <p>我是标签1。</p>
  </div>
  <div class="tab-pane fade" id="tab2Content2">
    <p>标签2的内容。</p>
  </div>
  <div class="tab-pane fade" id="tab2Content3">
    <p>这是标签3的内容。</p>
  </div>
</div>
```

## 垂直标签页

使用 `.nav-tabs.nav-stacked` 获得垂直排列的标签导航，使用 [栅格](#basic/grid) 来使得导航和标签页内容水平排列。

<example class="example-tabs-with-nav">
  <div class="row">
    <div class="col-xs-3">
      <ul class="nav nav-tabs nav-stacked">
        <li class="active"><a href="###" data-target="#tab3Content1" data-toggle="tab">标签1</a></li>
        <li><a href="###" data-target="#tab3Content2" data-toggle="tab">标签2</a></li>
        <li><a href="###" data-target="#tab3Content3" data-toggle="tab">标签3</a></li>
      </ul>
    </div>
    <div class="col-xs-9">
      <div class="tab-content col-xs-9">
        <div class="tab-pane fade active in" id="tab3Content1">
          <p>我是标签1。</p>
        </div>
        <div class="tab-pane fade" id="tab3Content2">
          <p>标签2的内容。</p>
        </div>
        <div class="tab-pane fade" id="tab3Content3">
          <p>这是标签3的内容。</p>
        </div>
      </div>
    </div>
  </div>
</example>

```html
<div class="row">
  <div class="col-xs-3">
    <ul class="nav nav-tabs nav-stacked">
      <li class="active"><a href="###" data-target="#tab3Content1" data-toggle="tab">标签1</a></li>
      <li><a href="###" data-target="#tab3Content2" data-toggle="tab">标签2</a></li>
      <li><a href="###" data-target="#tab3Content3" data-toggle="tab">标签3</a></li>
    </ul>
  </div>
  <div class="col-xs-9">
    <div class="tab-content col-xs-9">
      <div class="tab-pane fade active in" id="tab3Content1">
        <p>我是标签1。</p>
      </div>
      <div class="tab-pane fade" id="tab3Content2">
        <p>标签2的内容。</p>
      </div>
      <div class="tab-pane fade" id="tab3Content3">
        <p>这是标签3的内容。</p>
      </div>
    </div>
  </div>
</div>
```

## 方法

### 显示标签页内容

 - `$().tab('show')`

用于手动显示当前元素指示的标签页内容。

```js
$('#myTabLink').tab('show');
```

## 事件

当显示一个新的标签页时，这些事件会被触发：

 - `show.zui.tab`：当前标签页在显示时触发；
 - `shown.zui.tab`：当前标签页在显示后（动画执行完毕）触发。

```js
$('[data-tab]').on('shown.zui.tab', function(e) {
    console.log('当前被激活的标签页', e.target);
    console.log('上一个标签页', e.relatedTarget);
});
```

<div class="alert alert-primary">
  <h4>需要动态标签页？</h4>
  <p>[标签页管理器](#view/tabs) 提供远程或自定义标签的打开关闭功能。</p>
</div>
