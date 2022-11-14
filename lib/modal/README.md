# modal 对话框

## 静态展示

```html:example: flex gap-3
<div class="modal-dialog shadow" style="margin-top:50px;">
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-title">标题</div>
      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
    </div>
    <div class="modal-body">
      <p>这是内容</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn" data-dismiss="modal">关闭</button>
      <button type="button" class="btn primary">保存</button>
    </div>
  </div>
</div>
```

## 去掉 `.modal-content` 展示

```html:example: flex gap-3
<button type="button" class="btn primary" data-toggle="modal" data-target="#noContentModal">点击打开对话框</button>

<div class="modal" id="noContentModal">
  <div class="modal-dialog shadow">
    <div class="modal-header">
      <div class="modal-title">标题</div>
      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
    </div>
    <div class="modal-body">
      <p>这是内容</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn" data-dismiss="modal">关闭</button>
      <button type="button" class="btn primary">保存</button>
    </div>
  </div>
</div>
```

## 动态展示

```html:example: flex gap-3
<button type="button" class="btn primary" data-toggle="modal" data-target="#myModal">点击打开对话框</button>
<a class="btn" data-toggle="modal" href="#myModal">点击打开</a>

<div class="modal" id="myModal">
  <div class="modal-dialog shadow">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
      </div>
      <div class="modal-body">
        <p>这是内容</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

## 显示位置

```html:example: flex gap-3
<button type="button" class="btn primary" data-position="fit" data-toggle="modal" data-target="#positionModal">默认</button>
<button type="button" class="btn primary" data-position="center" data-toggle="modal" data-target="#positionModal">窗口中间</button>
<button type="button" class="btn primary" data-position="0" data-toggle="modal" data-target="#positionModal">靠近上方</button>
<button type="button" class="btn primary" data-position="100px" data-toggle="modal" data-target="#positionModal">距离上方100px</button>

<div class="modal" id="positionModal">
  <div class="modal-dialog shadow">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
      </div>
      <div class="modal-body">
        这是内容
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

## 尺寸

```html:example: flex gap-3
<button type="button" class="btn primary" data-toggle="modal" data-target="#smModal">小</button>

<button type="button" class="btn primary" data-toggle="modal" data-target="#baseModal">默认</button>

<button type="button" class="btn primary" data-toggle="modal" data-target="#lgModal">大</button>

<button type="button" class="btn primary" data-toggle="modal" data-target="#fullModal">全屏</button>

<div class="modal" id="smModal">
  <div class="modal-dialog shadow size-sm">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
      </div>
      <div class="modal-body">
        这是一个小弹窗
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn primary">保存</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="baseModal">
  <div class="modal-dialog shadow">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
      </div>
      <div class="modal-body">
        这是一个默认弹窗
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn primary">保存</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="lgModal">
  <div class="modal-dialog shadow size-lg">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
      </div>
      <div class="modal-body">
        这是一个大弹窗
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn primary">保存</button>
      </div>
    </div>
  </div>
</div>

<div class="modal scroll-inside" id="fullModal">
  <div class="modal-dialog shadow size-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
      </div>
      <div class="modal-body">
        <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
        <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
        <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
        <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
        <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
        <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

## 自定义信息提示弹窗

```html:example: flex gap-3
<button type="button" class="btn primary" data-toggle="modal" data-target="#customModal">点击打开</button>

<div class="modal" id="customModal">
  <div class="modal-dialog shadow size-sm bd-none">
    <div class="modal-content">
      <div class="modal-body">
        <p>这是提示内容</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn primary size-sm" data-dismiss="modal">知道了</button>
      </div>
    </div>
  </div>
</div>
```

## 模态对话框

```html:example: flex gap-3
<button type="button" class="btn primary" data-toggle="modal" data-target="#autoCloseModal">点击打开对话框</button>

<div class="modal" id="autoCloseModal" data-modal-closable="false">
  <div class="modal-dialog shadow">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
      </div>
      <div class="modal-body">
        <p>这是内容</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

## 引入对话框生成器组件

```html:example

<script>
const modal = new Modal('#modalTrigger', {
  name:'',
  backdrop:'',
  keyboard:'',
  show:'',
  position:'',
  moveable:'',
  rememberPos:'',
  scrollInside:'',
  title:'', /* 弹窗标题 */
  body:'',/* 内嵌于modal-body的内容 (html) 默认为空 */
  footer:'',/* 对话框底部的html默认为关闭和保存按钮 */
  isUpdatedHidden:'' /* Boolean 关闭弹窗时是否销毁body和footer内部zui组件的初始化状态 默认false */
  isDestoryedHidden:'' /* Boolean 关闭弹窗时是否销毁body和footer内部所有dom 默认false */
})
</script>
```

## 方法

### const modal = new Modal('$selector', options);
使用参数对象来初始化对话框

### modal.render(options);
使用参数对象来更新对话框

### modal.update();
将所有modal内部的zui组件回归到未初始化的状态

### modal.destory();
销毁modal组件

### modal.show(position);
手动显示对话框。`position` 参数为可选的，用来指定显示的位置。

### modal.hide();
手动隐藏对话框。

### modal.adjustPosition(position);
手动更新弹窗伪装。

## 事件

 | 事件 | 描述  |
 | ------------- | ----- |
 | `show.zui.modal` | 当 `show` 方法被调用时，此事件将被立即触发。|
 | `shown.zui.modal` | 当模态对话框呈现到用户面前时（会等待过渡效果执行结束）此事件被触发。 |
 | `hide.zui.modal` | 当 `hide` 方法被调用时，此事件将被立即触发。| 
 | `hidden.zui.modal` | 当模态对话框被隐藏（而且过渡效果执行完毕）之后，此事件将被触发。|
 | `escaping.zui.modal`  |当用户按下 `esc` 键来关闭对话框之前会调用此方法，如果在事件回调函数中返回false，则会终止对话框关闭过程。 |
 | `mounted.zui.modal`   | 当 `new` 方法被调用后(弹窗组件第一次初始化成功时)，此事件将被立即触发。|
 | `updated.zui.modal`   | 当 `update` 方法被调后，此事件将被立即触发。|
 | `destoryed.zui.modal` | 当 'destory' 方法被调用后, 此事件将被触发。|

