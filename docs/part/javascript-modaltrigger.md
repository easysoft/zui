section: javascript
id: modaltrigger
description: 动态展示对话框
icon: icon-signout
filter: duihuakuangchufaqi dhkcfq motaikuang mtk
---

# 对话框触发器

对话框触发器允许你不需要书写静态对话框HTML，直接使用触发按钮或者一行Javascript代码即可让一个全新的对话框展现。支持使用Ajax从远程获取内容，或者通过iframe加载任何页面内容，当然不使用远程内容，直接使用本地内容也是很方便。

## 加载远程内容

这里提供两种方法（Ajax和iframe）来加载远程内容，使用起来几乎似乎没有任何区别，你只需要确保远程地址所提供的内容是正确的类型。

在获取远程内容到显示的过程中，会显示正在加载的图标动画。

### 使用Ajax

使用`data-remote="(ajax get url)"`属性来指定ajax片段获取地址。或者同时指定`data-type="ajax"`和`data-url="(ajax get url)"`属性。

<div class="example">
  <button type="button" class="btn btn-primary" data-remote="docs/partial/remote-modal.html" data-toggle="modal">Ajax对话框</button>
</div>

```html
<!-- 使用data-remote属性 -->
<button type="button" class="btn btn-primary" data-remote="partial/remote-modal.html" data-toggle="modal">Ajax对话框</button>

<!-- 使用data-type 和data-url属性 -->
<button type="button" class="btn btn-primary" data-type="ajax" data-url="partial/remote-modal.html" data-toggle="modal">Ajax对话框≶/button>
```

在返回的ajax片段中，你可以包含一个完整的`.modal-dialog`内容，或者仅包含`.modal-content`，甚至不是任何静态modal结构，触发器会根据所包含的内容自动补全对话框的缺失部分。

### 使用iframe（内嵌框架）

使用`data-iframe="(iframe url)"`属性来指定远程页面内容获取地址。或者同时指定`data-type="iframe"`和`data-url="(iframe url)"`属性。

<div class="example">
  <button type="button" class="btn btn-primary" data-waittime="5000" data-iframe="docs/partial/iframe-modal.html" data-toggle="modal" data-loading-icon="icon-spinner-snake" data-height="300">iframe对话框</button>
</div>

```html
<!-- 使用data-iframe属性 -->
<button type="button" class="btn btn-primary" data-iframe="partial/iframe-modal.html" data-toggle="modal">iframe对话框</button>

<!-- 使用data-type 和data-url属性 -->
<button type="button" class="btn btn-primary" data-type="iframe" data-url="partial/iframe-modal.html" data-toggle="modal">iframe对话框≶/button>
```

## 加载自定义内容

通过定义`custom`属性可以更灵活的为对话框更新内容。

### 指定内容文本

最简单的方法是为custom指定内容文本即可。同样可以使用`data-custom`属性。

<div class="example">
      <button type="button" class="btn btn-primary" data-custom="<h1>此内容是自定义的</h1><p>哈哈:)</p>" data-toggle="modal">指定内容文本</button>
    </div>

```html
<!-- 使用data-custom 属性 -->
<button type="button" class="btn btn-primary" data-custom="此内容是自定义的:)" data-toggle="modal">指定内容文本</button>
```

```js
/* 使用Javascript方法绑定在按钮上触发 */
$('#triggerButton').modalTrigger({custom: '<h1>此内容是自定义的</h1><p>哈哈:)</p>'});

/* 使用触发器对象直接显示 */
(new $.zui.ModalTrigger({custom: '自定义内容'})).show();
```

### 指定页面元素作为内容

通过指定一个jQuery选择器名称来获取其内容作为对话框的内容。

<div class="example">
  <div id="myModalAlert" class="alert alert-success with-icon">
    <i class="icon-ok"></i>
    <div class="content">我希望能够在对话框看到此消息。</div>
  </div>
  <button type="button" class="btn btn-primary" data-custom="#myModalAlert" data-toggle="modal">指定页面元素的内容</button>
</div>

```html
<!-- 使用data-custom 属性 -->
<button type="button" class="btn btn-primary" data-custom="#myModalAlert" data-toggle="modal">指定页面元素的内容</button>
```

```js
/* 使用Javascript方法绑定在按钮上触发 */
$('#triggerButton').modalTrigger({custom: '#myModalAlert'});

/* 使用触发器对象直接显示 */
(new $.zui.ModalTrigger({custom: '#myModalAlert'})).show();
```

### 使用jQuery对象作为内容

直接为custom参数赋值为一个jQuery对象，此对象的内容将显示在对话框中。此方式无法使用data属性调用。

```js
/* 使用Javascript方法绑定在按钮上触发 */
$('#triggerButton').modalTrigger({custom: $('#myModalAlert')});

/* 使用触发器对象直接显示 */
(new $.zui.ModalTrigger({custom: $('#myModalAlert')})).show();
```

### 使用回调函数动态生成内容

将一个回调函数赋值给custom参数，触发器对象会自动调用此函数来实时获得动态内容并显示在对话框中。

回调函数提供一个参数对象，可以在生成内容时灵活运用。如果生成的内容是异步的时候，需要在内容准备就绪时调用参数提供的`.ready()`方法来显示对话框。

<div class="example">
  <button type="button" class="btn btn-primary" id="modalTriggerByFunc">使用函数生成内容</button>
</div>

```js
/* 使用Javascript方法绑定在按钮上触发 */
$('#triggerButton').modalTrigger({custom: function() {
    return "当对话框显示时，时间是：" + (new Date).toString();
}});

/* 使用触发器对象直接显示 */
(new $.zui.ModalTrigger({custom: function() {
    return "当对话框显示时，时间是：" + (new Date).toString();
}})).show();
```

如果你的回调函数是全局的，则只需要将custom参数指定为该函数的名称的字符串。

## 自动调整位置

当对话框内的内容发生更改导致对话框尺寸发生改变时，对话框会根据设置自动调整位置。

自动调整位置适合任何形式的对话框。

<div class="example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-custom="<div contenteditable='true' style='height: auto' class='form-control'>输入一些内容和换行来更改对话框大小</div>" id="modalTriggerByFunc">测试自动调整位置</button>
</div>

## 全屏对话框

<div class="example">
  <button type="button" class="btn btn-primary" data-custom="<h1>这是一个全屏对话框示例</h1>" data-toggle="modal" data-size="fullscreen">全屏对话框</button>
</div>

```html
<button type="button" class="btn btn-primary" data-custom="..." data-toggle="modal" data-size="fullscreen">全屏对话框</button>
```

## 自定义头部

### 不显示头部

不显示头部需要指定参数`showHeader`为`false`。

<div class="example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-custom="这个对话框不显示头部" data-show-header="false" id="modalTriggerByFunc">不显示头部</button>
</div>

```html
<!-- 使用data-showHeader 属性 -->
<button type="button" class="btn btn-primary" data-show-header="false" data-toggle="modal">不显示头部</button>
```

```js
/* 使用Javascript方法绑定在按钮上触发 */
$('#triggerButton').modalTrigger({showHeader: false});

/* 使用触发器对象直接显示 */
(new $.zui.ModalTrigger({showHeader: false})).show();
```

### 自定义对话框标题

如果不指定对话框的标题，会自动使用触发按钮的title属性或文本作为对话框的标题。

<div class="example"><button type="button" class="btn btn-primary" data-toggle="modal" data-custom="此对话框的标题是新的" data-title="新的标题很重要" id="modalTriggerByFunc">自定义标题</button></div>

```html
<!-- 使用data-title 属性 -->
<button type="button" class="btn btn-primary" data-title="新的标题" data-toggle="modal">不显示头部</button>
```

```js
/* 使用Javascript方法绑定在按钮上触发 */
$('#triggerButton').modalTrigger({title: '新的标题'});

/* 使用触发器对象直接显示 */
(new $.zui.ModalTrigger({title: '新的标题'})).show();
```

### 使用图标

通过指定`icon`属性来在标题前面增加一个图标。

图标的定义请参考“控件->图标”章节。

<div class="example"><button type="button" class="btn btn-primary" data-toggle="modal" data-custom="此对话框标题包含一个图标" data-icon="heart" data-title="图标很重要" id="modalTriggerByFunc">看看图标是什么</button></div>

```html
<!-- 使用data-title 属性 -->
<button type="button" class="btn btn-primary" data-icon="heart" data-toggle="modal">不显示头部</button>
```

```js
/* 使用Javascript方法绑定在按钮上触发 */
$('#triggerButton').modalTrigger({icon: 'heart'});

/* 使用触发器对象直接显示 */
(new $.zui.ModalTrigger({icon: 'heart'})).show();
```

## 可拖动的对话框

开启此选项可以允许用户在对话框显示之后通过拖拽头部移动对话框。完整例子参见 [JS 插件 -> 对话框](#javascript/modaltrigger/5)。

<div class="example">
  <button type="button" class="btn btn-primary" data-icon="move" data-moveable="true" data-toggle="modal" data-custom="<div><p>拖动我的头部来移动此对话框。</p><h1>:)</h1></div>" id="modalTriggerMoveable"><i class="icon icon-move"></i> 打开我 拖动我</button>
</div>

```html
<button type="button" class="btn btn-primary" data-moveable="true" data-toggle="modal" data-custom="..."><i class="icon icon-move"></i> 打开我 拖动我</button>
```

## 如何使用

### 使用data属性来调用

使用在触发按钮上设置data属性即可使用。此方法与常规对话框触发按钮属性书写方式完全一致，只不过需要增加几个特殊属性，包括`data-remote`、`data-iframe`和`data-custom`。

使用dta属性来调用请参考上面的实例章节。

### 使用Javascript手动调用

Javascript方法也十分灵活。

### jQuery对象方法

使得一个jquery对象能够监听事件（一般为点击）并启动对话框。

```js
$('#triggerButton').modalTrigger(options);
```

也可以使用`modalTrigger`的别名方法`modal`，这样与传统对话框的初始化方法完全一致。

### 使用预设的modalTrigger实例

在`$.zui`对象上已默认绑定了一个对话框触发器对象，可以直接使用`方法`并传递不同的参数来随时启动对话框。

```js
$.zui.modalTrigger.show(options);
```

### 创建新的触发器对象

创建一个新的对话框触发器来保存配置并启动对话框。

```js
var myModalTrigger = new $.zui.ModalTrigger(options);
myModalTrigger.show();
```

### 参数

在初始化对话框或者显示时都能够使用参数来个性化你的对话框。

<table class="table table-bordered">
  <thead>
    <tr>
      <th>参数</th>
      <th>名称</th>
      <th>可选值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`name`</td>
      <td>对话框元素名称</td>
      <td>可选，默认为 `'triggerModal'`</td>
      <td>该名称会作为内部表示此触发器实例使用，并且会作为最终生成的 `.modal` 元素的 ID 属性</td>
    </tr>
    <tr>
      <td>`className`</td>
      <td>对话框元素类名</td>
      <td>可选，默认为 `''`</td>
      <td>添加到最终生成的 `.modal` 元素的 CLASS 属性上</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>对话框类型</td>
      <td>*   `'custom'`（默认），自定义类型
*   `'iframe'`
*   `'ajax'`</td>
      <td>通常该参数和参数`url`一起使用，当指定了`custom`、`remote`和`iframe`参数时该参数可以忽略</td>
    </tr>
    <tr>
      <td>`url`</td>
      <td>远程内容地址</td>
      <td>远程地址字符串</td>
      <td>通常该参数和`type`一起似乎用，当指定了`custom`、`remote`和`iframe`参数时该参数可以忽略</td>
    </tr>
    <tr>
      <td>`remote`</td>
      <td>Ajax内容地址</td>
      <td>远程地址字符串</td>
      <td>如果使用该参数，则参数`type`和`url`可以忽略</td>
    </tr>
    <tr>
      <td>`iframe`</td>
      <td>iframe页面地址</td>
      <td>远程地址字符串</td>
      <td>如果使用该参数，则参数`type`和`url`可以忽略</td>
    </tr>
    <tr>
      <td>`size`</td>
      <td>对话框大小</td>
      <td>*   `''`（默认），默认大小
*   `'lg'`，大对话框
*   `'sm'`，小对话框
*   `'fullscreen'`，全屏显示</td>
      <td></td>
    </tr>
    <tr>
      <td>`width`</td>
      <td>对话框宽度</td>
      <td>*   `null`（默认），默认宽度
*   其他表示宽度的CSS值字符串</td>
      <td>如果使用`size`参数，则可以忽略该参数</td>
    </tr>
    <tr>
      <td>`height`</td>
      <td>对话框高度</td>
      <td>*   `'auto'`（默认），自动根据内容调整
*   其他表示高度的CSS值字符串</td>
      <td>如果指定了高度不是`'auto'`则可能出现内容与高度不匹配的情况。</td>
    </tr>
    <tr>
      <td>`showHeader`</td>
      <td>是否显示标题</td>
      <td>*   `true`（默认）
*   `false`</td>
      <td></td>
    </tr>
    <tr>
      <td>`title`</td>
      <td>对话框标题文本</td>
      <td>字符串</td>
      <td>当参数`showHeader`为`false`则此参数无效。</td>
    </tr>
    <tr>
      <td>`icon`</td>
      <td>对话框标题图标</td>
      <td>图标名称字符串</td>
      <td>当参数`showHeader`为`false`则此参数无效。</td>
    </tr>
    <tr>
      <td>`fade`</td>
      <td>是否使用淡入淡出动画</td>
      <td>*   `true`（默认）
*   `false`</td>
      <td></td>
    </tr>
    <tr>
      <td>`position`</td>
      <td>对话框位置</td>
      <td>*   `'fit'`（默认），最佳位置
*   `'center'`，显示在窗口中间
*   数字，按像素计算与顶部的距离
*   `''`，显示在顶部
*   标识距离的CSS字符串，具体顶部的偏移</td>
      <td>最佳位置在窗口中间稍偏上的位置。</td>
    </tr>
    <tr>
      <td>`backdrop`</td>
      <td>背景遮罩</td>
      <td>*   `true`（默认）
*   `false`
*   `'static'`</td>
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
      <td>`moveable`</td>
      <td>可移动的</td>
      <td>
        <ul>
          <li><code>false</code>：不启用（默认）；</li>
          <li><code>true</code>：启用；</li>
          <li><code>'inside'</code>：启用并限制对话框只能移动到窗口内部。</li>
        </ul>
      </td>
      <td>是否启用对话框拖拽移动功能</td>
    </tr>
    <tr>
      <td>`rememberPos`</td>
      <td>记住移动的位置</td>
      <td>*   `false`（默认），不记住位置；
*   `true`，记住位置；
*   页面内值唯一的字符串，使用本地存储记住位置；</td>
      <td>启用该选项需要同时启用 `moveable` 选项，当该值为一个在页面范围内值唯一的字符串时，通过浏览器本地存储来存储数据，关闭页面或浏览器之后也不会忘记。</td>
    </tr>
    <tr>
      <td>`waittime`</td>
      <td>加载远程内容时的最大等待时间</td>
      <td>整数，代表等待的毫秒数，默认为`0`</td>
      <td>在指定的时间之后会直接显示对话框，不管远程内容是否加载完毕；默认值为`0`，表示一直等待直到远程内容加载完毕才显示对话框。在等待时会显示正在加载的动画。</td>
    </tr>
    <tr>
      <td>`loadingIcon`</td>
      <td>加载时显示的动画所使用的图标</td>
      <td>*   以`icon-*`形式定义的图标名称
*   自定义加载动画所使用的html</td>
      <td>`icon-*`定义的图标名称请参考[图标](#search/icon:spin)。</td>
    </tr>
  </tbody>
</table>

### 方法

### 获取触发器对象实例

要使用触发器方法，需要首先获取触发器对象的实例。

##### 通过触发按钮的data属性

```js
var modalTrigger = $('#triggerButton').data('zui.modaltrigger');
```

##### 使用预设的$.zui对象绑定的触发器

```js
var myTrigger = $.zui.modalTrigger;
```

##### 创建新的触发器实例

```js
var newTrigger = new $.zui.ModalTrigger(options);
```

### 显示对话框

在显示对话框时，可以重新传入新的参数，而不影响触发器对象原来的参数。

```js
myModalTrigger.show(options);
```

### 关闭对话框

```js
myModalTrigger.close();
```

### 切换显示和关闭状态

如果对话框没有显示，则立即显示，如果已经显示则关闭。

在切换显示和关闭状态时，可以重新传入新的参数，而不影响触发器对象原来的参数。

```js
myModalTrigger.toggle(options);
```

### 重新调整位置

使用新的位置参数来重新设置对话框的显示位置。

```js
myModalTrigger.ajustPosition(options);
```

### 事件

因为对话框的DOM内容是动态生成的，不方便使用jQuery方法来绑定事件，不过可以将监听事件的回调函数传入参数中。

<table class="table table-bordered">
  <thead>
    <tr>
      <th>事件</th>
      <th>jquery事件名称</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`onShow`</td>
      <td>`show.zui.modal`</td>
      <td>当对话框的show方法被调用时立即发生</td>
    </tr>
    <tr>
      <td>`shown`</td>
      <td>`shown.zui.modal`</td>
      <td>当对话框完全显示后发生（执行完显示动画之后）</td>
    </tr>
    <tr>
      <td>`onHide`</td>
      <td>`hide.zui.modal`</td>
      <td>当对话框hide方法被调用是立即发生</td>
    </tr>
    <tr>
      <td>`hidden`</td>
      <td>`hidden.zui.modal`</td>
      <td>当对话框完全隐藏后发生（执行完隐藏动画之后）</td>
    </tr>
    <tr>
      <td>`loaded`</td>
      <td>`loaded.zui.modal`</td>
      <td>当远程内容加载完成后发生</td>
    </tr>
    <tr>
      <td>`broken`</td>
      <td>`broken.zui.modal`</td>
      <td>当加载远程内容失败之后调用，在次回调方法中返回字符串会更新对话框现实的内容（例如在对话框中显示一个加载失败之后的帮助信息）。</td>
    </tr>
  </tbody>
</table>

```js
myModalTrigger.show({shown: function() {
    alert('对话框已显示。');
}});
```

如果对话框的`name`参数是已知的，则可以获取对话框的jquery对象实例通过jQuery对象的on方法来绑定事件。

```js
$('#triggerModal').on('shown.zui.modal', function() {...});
```

<style>
.modal > .loader {
  opacity: 1;
  height: auto;
  transform: scale(1);
}
</style>

<script>
function afterPageLoad() {
    $(document).on('click', '.modal-backdrop.in, .modal', function(e) {
        e.stopPropagation();
    });

    /* modal trigger */
    var $trigger = $('#modalTriggerByFunc');
    if(!$trigger.data('modalTriggerSetup')) {
        $trigger.modalTrigger({moveable: true, custom: function() {
            return "当对话框显示时，时间是：" + (new Date).toString();
        }});
        $trigger.data('modalTriggerSetup', 1)
    }
}
</script>
