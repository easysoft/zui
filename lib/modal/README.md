# modal 对话框

## 自定义对话框

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

## 动态展示

```html:example: flex gap-3
<button type="button" class="btn primary" data-toggle="modal" data-target="#myModal2">点击打开对话框</button>
<a class="btn" data-toggle="modal" href="#myModal2">点击打开</a>

<div class="modal" id="myModal2">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
        <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
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
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
        <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
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
<button type="button" class="btn primary" data-toggle="modal" data-size="sm" data-target="#sizeModal">小</button>

<button type="button" class="btn primary" data-toggle="modal" data-size="default" data-target="#sizeModal">默认</button>

<button type="button" class="btn primary" data-toggle="modal" data-size="lg" data-target="#sizeModal">大</button>

<button type="button" class="btn primary" data-toggle="modal" data-size="full" data-target="#sizeModal">全屏</button>

<button type="button" class="btn primary" data-toggle="modal" data-size='{"width": 400, "height": 300}' data-target="#sizeModal">400x300</button>

<div class="modal" id="sizeModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
        <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
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
<button type="button" class="btn primary" data-toggle="modal" data-title="自定义对话框" data-content="这里是对话框内容">点击打开自定义对话框</button>
```

## iframe 对话框

```html:example: flex gap-3
<button type="button" class="btn primary" data-toggle="modal" data-url="/lib/modal/dev/iframe-modal.html" data-title="iframe 对话框" data-type="iframe">点击打开 iframe 对话框</button>
```

## Ajax 对话框

```html:example: flex gap-3
<button type="button" class="btn primary" data-toggle="modal" data-type="ajax" data-url="/lib/modal/dev/ajax-modal.txt" data-title="Ajax 纯文本对话框"data-data-type="text">点击打开 Ajax 纯文本对话框</button>
<button type="button" class="btn primary" data-toggle="modal" data-type="ajax" data-url="/lib/modal/dev/ajax-modal.html" data-title="Ajax HTML 对话框" data-data-type="html">点击打开 Ajax HTML 对话框</button>
```

## 方法

### 打开对话框

```ts
Modal.open(options: ModalOptions): Promise<void>;
```

### 查找对话框实例

```ts
Modal.query(target: HTMLElement): void;
Modal.query(selector: string): void;
```

### 显示对话

```ts
Modal.show(target: HTMLElement): void;
Modal.show(selector: string): void;
```

### 隐藏对话框

```ts
Modal.hide(target: HTMLElement): void;
Modal.hide(selector: string): void;
```

### alert()

```ts
Modal.alert(message: string): Promise<string | undefined>;
Modal.alert(options: ModalAlertOptions): Promise<string | undefined>;
```

```html:example: flex gap-3
<button type="button" class="btn primary" onclick="Modal.alert('提示消息')">Modal.alert(message)</button>
<button type="button" class="btn primary" onclick="Modal.alert({title: '这是标题', message: '提示消息', icon: 'icon-flag'})">Modal.alert(options)</button>
```

### confirm()

```ts
Modal.confirm(message: string): Promise<string | undefined>;
Modal.confirm(options: ModalAlertOptions): Promise<string | undefined>;
```

```html:example: flex gap-3
<button type="button" class="btn primary" onclick="Modal.confirm('提示消息').then(console.log)">Modal.confirm(message)</button>
<button type="button" class="btn primary" onclick="Modal.confirm({title: '这是标题', message: '提示消息', icon: 'icon-flag'}).then(console.log)">Modal.confirm(options)</button>
```
