# modal 对话框

## 静态展示

```html:example: flex gap-3
<div class="modal-dialog -shadow" style="margin-top:50px;">
  <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
      <div class="modal-title">标题</div>
    </div>
    <div class="modal-body">
      <p>这是内容</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn" data-dismiss="modal">关闭</button>
      <button type="button" class="btn -primary">保存</button>
    </div>
  </div>
</div>
```

## 动态展示

```html:example: flex gap-3
<button type="button" class="btn -primary" data-toggle="modal" data-target="#myModal">点击打开对话框</button>
<a class="btn" data-toggle="modal" href="#myModal">点击打开</a>

<div class="modal" id="myModal">
  <div class="modal-dialog -shadow">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
        <div class="modal-title">标题</div>
      </div>
      <div class="modal-body">
        <p>这是内容</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn -primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

## 居中布局

```html:example: flex gap-3
<button type="button" class="btn -primary" data-toggle="modal" data-target="#centerModal">居中对话框</button>

<div class="modal" id="centerModal">
  <div class="modal-dialog -shadow">
    <div class="modal-content">
      <div class="modal-header text-center">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
        <div class="modal-title text-center">标题</div>
      </div>
      <div class="modal-body text-center">
        这是一段内容
        <p>其他的内容</p>
      </div>
      <div class="modal-footer text-center">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn -primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

## 显示位置

```html:example: flex gap-3
<button type="button" class="btn -primary" data-position="fit" data-toggle="modal" data-target="#positionModal">默认</button>
<button type="button" class="btn -primary" data-position="center" data-toggle="modal" data-target="#positionModal">窗口中间</button>
<button type="button" class="btn -primary" data-position="0" data-toggle="modal" data-target="#positionModal">靠近上方</button>
<button type="button" class="btn -primary" data-position="100px" data-toggle="modal" data-target="#positionModal">距离上方100px</button>

<div class="modal" id="positionModal">
  <div class="modal-dialog -shadow">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
        <div class="modal-title">标题</div>
      </div>
      <div class="modal-body">
        这是内容
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn -primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

## 尺寸

```html:example: flex gap-3
<button type="button" class="btn -primary" data-toggle="modal" data-target="#smModal">小</button>

<button type="button" class="btn -primary" data-toggle="modal" data-target="#baseModal">中</button>

<button type="button" class="btn -primary" data-toggle="modal" data-target="#lgModal">大</button>

<button type="button" class="btn -primary" data-toggle="modal" data-target="#fullModal">全屏</button>

<div class="modal" id="smModal">
  <div class="modal-dialog -shadow -sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
        <div class="modal-title">标题</div>
      </div>
      <div class="modal-body">
        这是一个小弹窗
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn -primary">保存</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="baseModal">
  <div class="modal-dialog -shadow -md">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
        <div class="modal-title">标题</div>
      </div>
      <div class="modal-body">
        这是一个默认弹窗
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn -primary">保存</button>
      </div>
    </div>
  </div>
</div>

<div class="modal" id="lgModal">
  <div class="modal-dialog -shadow -lg">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
        <div class="modal-title">标题</div>
      </div>
      <div class="modal-body">
        这是一个大弹窗
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn -primary">保存</button>
      </div>
    </div>
  </div>
</div>

<div class="modal -scroll-inside" id="fullModal">
  <div class="modal-dialog -shadow -fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
        <div class="modal-title">标题</div>
      </div>
      <div class="modal-body">
        这是一个全屏弹窗
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn -primary">保存</button>
      </div>
    </div>
  </div>
</div>
```

## 自定义信息提示弹窗

```html:example: flex gap-3
<button type="button" class="btn -primary" data-toggle="modal" data-target="#customModal">点击打开</button>

<div class="modal" id="customModal">
  <div class="modal-dialog -shadow -sm -border-none">
    <div class="modal-content">
      <div class="modal-body">
        <p>这是提示内容</p>
      </div>
      <div class="modal-footer"> 
        <button type="button" class="btn -primary -sm" data-dismiss="modal">知道了</button>
      </div>
    </div>
  </div>
</div>
```

## 是否可以通过点击 modal 关闭对话框

```html:example: flex gap-3
<button type="button" class="btn -primary" data-toggle="modal" data-target="#autoCloseModal">点击打开对话框</button>

<div class="modal" id="autoCloseModal" data-modal-closable="false">
  <div class="modal-dialog -shadow">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span></button>
        <div class="modal-title">标题</div>
      </div>
      <div class="modal-body">
        <p>这是内容</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn -primary">保存</button>
      </div>
    </div>
  </div>
</div>
```