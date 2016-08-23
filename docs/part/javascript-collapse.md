section: javascript
id: collapse
description: 为元素提供折叠和展开功能
icon: icon-collapse
filter: zhedie zd
---

# 折叠

## 使用方法

需要 [transition.js](http://v3.bootcss.com/javascript/#transitions) 支持。

`.collapse` 隐藏条目, `.collapse.in` 显示条目。

调用方式一：仅仅通过向页面元素添加 `data-toggle="collapse"` 和 `data-target` 就可以为其赋予控制可折叠页面元素的能力。 `data-target` 属性接受一个CSS选择器作为其控制对象。请确保为可折叠页面元素添加 `.collapse` 。 如果你希望可折叠页面元素的默认状态是展开的，请添加 `.in` 。 为了给一组可折叠页面元素添加控制器，添加 `data-parent="#selector"` 即可

调用方式二：手动触发 `$(".collapse").collapse()`

## 结合面板使用

<div class="example">
  <div class="panel-group" id="accordion">
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Item 1</a>
        </h4>
      </div>
      <div id="collapseOne" class="panel-collapse collapse fade">
        <div class="panel-body">
          The content of Item1.
          <code>.panel-collapse .collapse .fade</code>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Item 2</a>
        </h4>
      </div>
      <div id="collapseTwo" class="panel-collapse collapse in">
        <div class="panel-body">
          <p>
            The content of Item2.
            <code>.panel-collapse .collapse .in</code>
            默认显示。
          </p>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <h4 class="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Item 3</a>
        </h4>
      </div>
      <div id="collapseThree" class="panel-collapse collapse">
        <div class="panel-body">
          The content of item3.
          <code>.panel-collapse .collapse</code>
        </div>
      </div>
    </div>
  </div>
</div>

## 结合按钮使用

<div class="example" contenteditable="true">
  <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#collapseButton">hulala</button>
  <div id="collapseButton" class="in" style="height: auto;">Ho la la hu la la, hu la hu la.</div>
</div>

## 方法和事件

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 80px;">方法</th>
      <th>例子</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>.collapse(options)</td>
      <td>`$('#myCollapse').collapse({ toggle: false })`</td>
      <td>赋予页面元素可折叠功能。接受一个可选的object作为参数。</td>
    </tr>
    <tr>
      <td>.collapse('toggle')</td>
      <td>`$('#myCollapse').collapse('toggle')`</td>
      <td>展示或隐藏一个可折叠的页面元素。</td>
    </tr>
    <tr>
      <td>.collapse('show')</td>
      <td>`$('#myCollapse').collapse('show')`</td>
      <td>展示一个可折叠页面元素。</td>
    </tr>
    <tr>
      <td>.collapse('hide')</td>
      <td>`$('#myCollapse').collapse('hide')`</td>
      <td>隐藏一个可折叠页面元素。</td>
    </tr>
  </tbody>
</table>

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 80px;">事件</th>
      <th>使用</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.zui.collapse</td>
      <td>`$('#myCollapse').on('show.zui.collapse', function () { // do something… })`</td>
      <td>当 `show` 方法被调用时，此事件将被立即触发。</td>
    </tr>
    <tr>
      <td>shown.zui.collapse</td>
      <td>`$('#myCollapse').on('shown.zui.collapse', function () { // do something… })`</td>
      <td>当可折叠页面元素显示出来之后（同时CSS过渡效果也已执行完毕），此事件被触发。</td>
    </tr>
    <tr>
      <td>hide.zui.collapse</td>
      <td>`$('#myCollapse').on('hide.zui.collapse', function () { // do something… })`</td>
      <td>当 `hide` 方法被调用时，此事件将被立即触发。</td>
    </tr>
    <tr>
      <td>hidden.zui.collapse</td>
      <td>`$('#myCollapse').on('hidden.zui.collapse', function () { // do something… })`</td>
      <td>当可折叠页面元素隐藏之后（同时CSS过渡效果也已执行完毕），此事件被触发。</td>
    </tr>
  </tbody>
</table>
