# modal 对话框

## 静态展示

```html:example:flex gap-3 items-center justify-center p-8
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <div class="modal-title">标题</div>
    </div>
    <div class="modal-actions">
      <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
    </div>
    <div class="modal-body">
      HTML5是HTML最新的修订版本，2014年10月由万维网联盟（W3C）完成标准制定。目标是替换1999年所制定的HTML 4.01和XHTML 1.0标准，以期能在互联网应用迅速发展的时候，使网络标准达到匹配当代的网络需求。广义论及HTML5时，实际指的是包括HTML、CSS和JavaScript在内的一套技术组合。它希望能够减少网页浏览器对于需要插件的丰富性网络应用服务（Plug-in-Based Rich Internet Application，RIA），例如：AdobeFlash、Microsoft Silverlight与Oracle JavaFX的需求，并且提供更多能有效加强网络应用的标准集。
    </div>
    <div class="modal-footer">
      <button type="button" class="btn" data-dismiss="modal">关闭</button>
      <button type="button" class="btn primary">确认</button>
    </div>
  </div>
</div>
```

## 去掉 `.modal-content` 展示

```html:example: flex gap-3
<button type="button" class="btn primary" data-toggle="modal" data-target="#myModal">点击打开对话框</button>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
      </div>
      <div class="modal-body">
        HTML5是HTML最新的修订版本，2014年10月由万维网联盟（W3C）完成标准制定。目标是替换1999年所制定的HTML 4.01和XHTML 1.0标准，以期能在互联网应用迅速发展的时候，使网络标准达到匹配当代的网络需求。广义论及HTML5时，实际指的是包括HTML、CSS和JavaScript在内的一套技术组合。它希望能够减少网页浏览器对于需要插件的丰富性网络应用服务（Plug-in-Based Rich Internet Application，RIA），例如：AdobeFlash、Microsoft Silverlight与Oracle JavaFX的需求，并且提供更多能有效加强网络应用的标准集。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn primary">确认</button>
      </div>
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

## 方法

### showModal(modal: $modal, position: string);
手动显示对话框。`position` 参数为可选的，用来指定显示的位置。

### hideModal(modal: $modal);
手动隐藏对话框。

### adjustPosition(target: $modal, position: string);
手动更新弹窗位置。


```html:example: flex gap-3
<button type="button" class="btn primary" data-toggle="modal" data-target="#modalForFunc">点击打开对话框</button>
<button type="button" class="btn primary" data-toggle="modal" data-target="#modalForFunc">点击打开对话框</button>
<button type="button" class="btn primary" data-toggle="modal" data-target="#modalForFunc">点击打开对话框</button>
<button type="button" class="btn primary" data-toggle="modal" data-target="#modalForFunc">点击打开对话框</button>

<div class="modal" id="modalForFunc" data-modal-closable="false">
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
