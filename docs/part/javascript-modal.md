section: javascript
id: modal
description: 浮动在页面之上的对话框
icon: icon-check-empty
filter: dhk mtk duihuakuang motaikuang
---

# 对话框

对话框允许以对话框的形式弹出，有半透明的页面遮罩层，并在显示和隐藏时支持动画。

## 实例

### 静态实例

<div class="example">
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
          <h4 class="modal-title">标题</h4>
        </div>
        <div class="modal-body">
          <p>主题内容...</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
          <button type="button" class="btn btn-primary">保存</button>
        </div>
      </div>
    </div>
  </div>
</div>

```
<div class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
        <h4 class="modal-title">标题</h4>
      </div>
      <div class="modal-body">
        <p>主题内容...</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

### 动态实例

点击按钮通过Javascript来启动一个对话框。

<div class="example">
  <button type="button" class="btn btn-lg btn-primary" data-toggle="modal" data-target="#myModal">启动对话框</button>
</div>

```
<!-- 对话框触发按钮 -->
<button type="button" class="btn btn-lg btn-primary" data-toggle="modal" data-target="#myModal">启动对话框</button>

<!-- 对话框HTML -->
<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
```

## 设置对话框显示位置

默认情况下对话框会根据自身内容高度展示在页面中心稍靠上方的位置。通过一些参数可以重新决定对话框的展现位置（具体参数参考“如何使用”章节）。

<div class="example">
  <button type="button" class="btn btn-primary" data-position="fit" data-toggle="modal" data-target="#myModal">默认位置</button>
  <button type="button" class="btn btn-primary" data-position="center" data-toggle="modal" data-target="#myModal">窗口中间</button>
  <button type="button" class="btn btn-primary" data-position="0" data-toggle="modal" data-target="#myModal">靠近上方</button>
  <button type="button" class="btn btn-primary" data-position="100px" data-toggle="modal" data-target="#myModal">距离上方100px</button>
</div>

```
<button type="button" class="btn" data-position="fit" data-toggle="modal" data-target="#myModal">默认位置</button>
<button type="button" class="btn" data-position="center" data-toggle="modal" data-target="#myModal">窗口中间</button>
<button type="button" class="btn" data-position="0" data-toggle="modal" data-target="#myModal">靠近上方</button>
<button type="button" class="btn" data-position="100px" data-toggle="modal" data-target="#myModal">距离上方100px</button>
```

## 更改对话框大小

对话框的默认宽度为`600px`，你可以通过为`.modal-dialog`应用CSS样式来更改对话框的宽度。在ZUI中也提供了额外两种预设的宽度，通过为`.modal-dialog`添加CSS类名来调整实现：

*   大对话框：添加`.modal-lg`CSS类名，宽度为`900px`；
*   小对话框：添加`.modal-sm`CSS类名，宽度为`300px`;
*   全屏对话框：添加`.modal-fullscreen`CSS类名。

<div class="example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myLgModal">大对话框</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mySmModal">小对话框</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myFullscreenModal">全屏对话框</button>
</div>

```
<!-- 大对话框 -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myLgModal">大对话框</button>

<div class="modal fade" id="myLgModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- 小对话框 -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#mySmModal">小对话框</button>

<div class="modal fade" id="mySmModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
```

## 可移动的对话框

开启此选项可以允许用户在对话框显示之后通过拖拽头部移动对话框。

要启用此功能需要手动设置`moveable`参数值为`true`，或者为`.modal-dialog`增加一个class`.modal-moveable`。

<div class="example">
  <button type="button" class="btn btn-primary" data-moveable="true" data-remember-pos="false" data-toggle="modal" data-target="#moveableModal" data-position="center"><i class="icon icon-move"></i> 打开我 拖动我</button>
</div>

```
<button type="button" class="btn" data-moveable="true" data-toggle="modal" data-target="#myModal">默认位置</button>
```

通过设置`rememberPos`为`true`来记住对话框移动之后的位置。`rememberPos`可取的值如下：

*   `false`（默认），不记住位置；
*   `true`，记住位置，但关闭页面或浏览器之后会复位；
*   一个在页面范围内值唯一的字符串，通过浏览器本地存储来存储数据，关闭页面或浏览器之后也不会忘记。

<div class="example">
  <button type="button" class="btn btn-primary" data-moveable="true" data-remember-pos="rememberMoveableModal" data-toggle="modal" data-target="#rememberMoveableModal"><i class="icon icon-move"></i> 打开我 拖动我</button>
</div>

## 禁用动画效果

对话框在弹出或隐藏时会伴随动画效果（淡入淡出效果），如果不需要，只需要移除`.modal`标签上的`.fade`类即可。

<div class="example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#fastModal">立即展现</button>
</div>

```
<!-- 禁用动画效果的对话框 -->
<div class="modal">
...
</div>

```

## 关闭对话框

在静态对话框HTML中增加一个按钮并添加data属性`data-dismiss="modal"`，这样当点击该按钮时会关闭此对话框。你可以将该属性添加至对话框内的任何元素。

```
<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
```

## 如何使用

### 使用data属性

一般情况下不需要手动调用Javascript来使用对话框，只需要在触发对话框的按钮或链接上增加两个额外的data属性即可：`data-toggle="modal"`和`data-target="#myModal"`。

其中`data-toggle`属性声明该按钮或链接点击后会显示或隐藏对话框。`data-target`属性指明静态对话框的ID属性。

如果使用`<a>`触发对话框，可以直接将静态模块框的ID写在`href`属性内，`data-target`属性则可以忽略。

使用data属性也可以来为对话框提供其他参数。

```
<!-- 使用按钮 -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">启动对话框</button>

<!-- 使用超链接 -->
<a data-toggle="modal" href="#myModal">启动对话框</a>
```

### 手动调用Javascript

不使用按钮或链接来触发对话框也可以使用Javascript来手动触发。

```
$('#myModal').modal(options)
```

### 参数

参数既可以在手动调用的时候指定，也可以在静态对话框或者触发器上使用data属性来指定。

可用的参数如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>参数</th>
      <th style="width: 80px">名称</th>
      <th style="width: 300px">可选值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`name`</td>
      <td>对话框名称</td>
      <td>字符串，默认为`'triggerModal'`</td>
      <td>此参数会指定对话框DOM的id属性和iframe的id属性和name属性。</td>
    </tr>
    <tr>
      <td>`backdrop`</td>
      <td>背景遮罩</td>
      <td>*   `'static'`
*   `true`（默认）
*   `false`</td>
      <td>使用布尔值来启用或禁用背景遮罩，如果指定为`'static'`则会启动背景遮罩，但点击背景遮罩时不会触发关闭对话框的过程。</td>
    </tr>
    <tr>
      <td>`keyboard`</td>
      <td>按键</td>
      <td>*   `true`（默认）
*   `false`</td>
      <td>当为`ture`时，按下`esc`键会关闭对话框。</td>
    </tr>
    <tr>
      <td>`show`</td>
      <td>立即显示</td>
      <td>*   `true`（默认）
*   `false`</td>
      <td>是否在对话框初始化之后立即显示出来。</td>
    </tr>
    <tr>
      <td>`position`</td>
      <td>显示位置</td>
      <td>*   `'fit'`（默认），最佳位置；
*   `'center'`，显示在窗口中间；
*   `''`，显示在最顶部；
*   `200`，数字用来指定距离顶部的像素；
*   CSS支持的所有表示位置的值，用来指定距离顶部的偏移；</td>
      <td>默认位置是在窗口中部稍偏上的地方。</td>
    </tr>
    <tr>
      <td>`moveable`</td>
      <td>可移动的</td>
      <td>*   `false`（默认），不启用；
*   `true`，启用；</td>
      <td>是否启用对话框拖拽移动功能</td>
    </tr>
    <tr>
      <td>`rememberPos`</td>
      <td>记住移动的位置</td>
      <td>*   `false`（默认），不记住位置；
*   `true`，记住位置；
*   页面内值唯一的字符串，使用本地存储记住位置；</td>
      <td>当该值为一个在页面范围内值唯一的字符串时，通过浏览器本地存储来存储数据，关闭页面或浏览器之后也不会忘记。</td>
    </tr>
  </tbody>
</table>

### 方法

#### .modal(options)

使用参数对象来初始化对话框。

```
$('#myModal').modal({
    keyboard : false,
    show     : true
})
```

#### .modal('toggle', position)

手动显示或隐藏对话框。`position`参数为可选的，用来指定显示的位置。

```
$('#myModal').modal('toggle', 'center')
```

#### .modal('show', position)

手动显示对话框。`position`参数为可选的，用来指定显示的位置。

```
$('#myModal').modal('show', 'fit')
```

#### .modal('hide', position)

手动隐藏对话框。`position`参数为可选的，用来指定显示的位置。

```
$('#myModal').modal('hide', 'fit')
```

#### .modal('ajustPosition', position)

手动重新调整对话框显示位置。`position`参数为可选的，用来指定显示的位置。

```
$('#myModal').modal('ajustPosition', 'fit')
```

### 事件

对话框提供了一系列事件用于监听对话框运行状态，便于在合适的时机运行你自己的代码。

<table class="table table-bordered">
  <thead>
   <tr>
     <th style="width: 80px;">事件</th>
     <th>描述</th>
   </tr>
  </thead>
  <tbody>
   <tr>
     <td>`show.zui.modal`</td>
     <td>当`show`方法被调用时，此事件将被立即触发。</td>
   </tr>
   <tr>
     <td>`shown.zui.modal`</td>
     <td>当模态对话框呈现到用户面前时（会等待过渡效果执行结束）此事件被触发。</td>
   </tr>
   <tr>
     <td>`hide.zui.modal`</td>
     <td>当`hide`方法被调用时，此事件将被立即触发。</td>
   </tr>
   <tr>
     <td>`hidden.zui.modal`</td>
     <td>当模态对话框被隐藏（而且过渡效果执行完毕）之后，此事件将被触发。</td>
   </tr>
   <tr>
     <td>`escaping.zui.modal`</td>
     <td>当用户按下`esc`键来关闭对话框之前会调用此方法，如果在事件回调函数中返回`false`，则会终止对话框关闭过程。</td>
   </tr>
  </tbody>
</table>

监听事件使用jQuery的on方法：

```
$('#myModal').on('shown.zui.modal', function() {
  alert('对话框已显示。');
})
```

### 使用要点

*   不能在一个对话框上重叠另一个对话框，也不支持在遮罩层同时显示两个以上的对话框；
*   静态对话框的HTML代码应该放在文档最高层级内，作为`<body>`的直接子元素，以避免与文档中的其他组件冲突；
*   对话框继承自Bootstrap对话框(v3.2)，包含其所有功能和接口。参考：[英](http://getbootstrap.com/javascript/#modals)，[中](http://v3.bootcss.com/javascript/#modals)。

<div class="modal modal-for-page fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
        <h4 class="modal-title">对话框标题</h4>
      </div>
      <div class="modal-body">
        <h4>虞美人·春花秋月何时了 <small>五代·李煜</small></h4>
        <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。<br>雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary">确定</button>
      </div>
    </div>
  </div>
</div>

<div class="modal modal-for-page fade" id="myLgModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
        <h4 class="modal-title">大对话框</h4>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<div class="modal modal-for-page fade" id="mySmModal">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
        <h4 class="modal-title">小对话框</h4>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<div class="modal modal-for-page fade" id="myFullscreenModal">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
        <h4 class="modal-title">全屏对话框</h4>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<div class="modal modal-for-page" id="fastModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
        <h4 class="modal-title">禁用动画效果演示</h4>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<div class="modal modal-for-page fade" id="moveableModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
        <h4 class="modal-title">可拖拽的对话框</h4>
      </div>
      <div class="modal-body">
        <h1 class="text-warning">:)</h1>
        <p>拖动我的头部来更改我的位置。</p>
      </div>
    </div>
  </div>
</div>

<div class="modal modal-for-page fade" id="rememberMoveableModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
        <h4 class="modal-title">可拖拽的对话框</h4>
      </div>
      <div class="modal-body">
        <h1 class="text-warning">:)</h1>
        <p>拖动我的头部来更改我的位置。</p>
        <p>关闭此页面或浏览器再次打开我，对话框会在上次显示的位置显示。</p>
      </div>
    </div>
  </div>
</div>

<div class="modal modal-for-page" id="fastModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">关闭</span></button>
        <h4 class="modal-title">禁用动画效果演示</h4>
      </div>
      <div class="modal-body">...</div>
    </div>
  </div>
</div>

<style>
#pageContent .example > .modal {display: block; position: static;}
</style>

<script>
function afterPageLoad() {
    $('#modalToBody .modal-for-page').appendTo('body').on('click', function(e) {
        e.stopPropagation();
    });
}

function onPageClose() {
    $('body > .modal-for-page').remove();
}
</script>
