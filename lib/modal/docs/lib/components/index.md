# 对话框

在保留当前页面状态的情况下，直接使用触发按钮即可展现对话框，告知用户展示相关操作。
## 基本用法

使用 `.modal` 与 `.modal-dialog` 类获得对话框的外观展示，通常用在元素 `<div>` 上。

<Example class="flex gap-4">
  <button type="button" class="btn primary" data-toggle="modal" data-target="#myModal">
    点击按钮打开对话框
  </button>
  <a class="btn" data-toggle="modal" href="#myModal">点击 a 标签按钮打开</a>

  <div class="modal" id="myModal">
    <div class="modal-dialog shadow">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">标题</div>
        </div>
        <div class="modal-actions">
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
</Example>

```html
<button type="button" class="btn primary" data-toggle="modal" data-target="#myModal">
  点击按钮打开对话框
</button>
<a class="btn" data-toggle="modal" href="#myModal">点击 a 标签按钮打开</a>

<div class="modal" id="myModal">
  <div class="modal-dialog shadow">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
      </div>
      <div class="modal-actions">
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

## 自定义位置

使用 `data-position` 自定义设置对话框位置。可设置 `fit`、`center` 或其具体像素值。

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn primary" data-position="fit" data-toggle="modal"
  data-target="#positionModal">默认</button>
  <button type="button" class="btn primary" data-position="center" data-toggle="modal"
  data-target="#positionModal">窗口中间</button>
  <button type="button" class="btn primary" data-position="0" data-toggle="modal"
  data-target="#positionModal">靠近上方</button>
  <button type="button" class="btn primary" data-position="100px" data-toggle="modal"
  data-target="#positionModal">距离上方100px</button>

  <div class="modal" id="positionModal">
    <div class="modal-dialog shadow">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">标题</div>
        </div>
        <div class="modal-actions">
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
</Example>

```html
<button type="button" class="btn primary" data-position="fit" data-toggle="modal"
data-target="#positionModal">默认</button>
<button type="button" class="btn primary" data-position="center" data-toggle="modal"
data-target="#positionModal">窗口中间</button>
<button type="button" class="btn primary" data-position="0" data-toggle="modal"
data-target="#positionModal">靠近上方</button>
<button type="button" class="btn primary" data-position="100px" data-toggle="modal"
data-target="#positionModal">距离上方100px</button>

<div class="modal" id="positionModal">
  <div class="modal-dialog shadow">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
      </div>
      <div class="modal-actions">
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

除了默认大小，还提供了额外的 3 种预设尺寸。

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn primary" data-toggle="modal" data-size="sm"
  data-target="#sizeModal">小对话框</button>

  <button type="button" class="btn primary" data-toggle="modal" data-size="default"
  data-target="#sizeModal">默认大小</button>

  <button type="button" class="btn primary" data-toggle="modal" data-size="lg"
  data-target="#sizeModal">大对话框</button>

  <button type="button" class="btn primary" data-toggle="modal" data-size="full"
  data-target="#sizeModal">全屏对话框</button>

  <div class="modal" id="sizeModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">标题</div>
        </div>
        <div class="modal-actions">
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
</Example>

```html
<button type="button" class="btn primary" data-toggle="modal" data-size="sm"
data-target="#sizeModal">小对话框</button>

<button type="button" class="btn primary" data-toggle="modal" data-size="default"
data-target="#sizeModal">默认大小</button>

<button type="button" class="btn primary" data-toggle="modal" data-size="lg"
data-target="#sizeModal">大对话框</button>

<button type="button" class="btn primary" data-toggle="modal" data-size="full"
data-target="#sizeModal">全屏对话框</button>

<div class="modal" id="sizeModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">标题</div>
      </div>
      <div class="modal-actions">
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

## 信息提示

展示各种类型的信息提示，只提供一个按钮用于关闭。

<Example class="flex gap-4 flex-wrap">
  <button type="button" class="btn primary" data-toggle="modal"
  data-target="#customModal">点击打开</button>

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
</Example>

```html
<button type="button" class="btn primary" data-toggle="modal"
data-target="#customModal">点击打开</button>

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

## 模态框

通过 `data-backdrop="false"` 动态控制，设置后可以操作模态框之外的交互。

<Example>
  <button type="button" class="btn primary" data-toggle="modal" data-backdrop="false" data-target="#myModal2">点击打开对话框</button>
  <div class="modal" id="myModal2">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">标题</div>
        </div>
        <div class="modal-actions">
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
</Example>

```html
<button type="button" class="btn primary" data-toggle="modal" data-backdrop="false" data-target="#myModal2">点击打开对话框</button>
<div class="modal" id="myModal2">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <div class="modal-title">标题</div>
      </div>
      <div class="modal-actions">
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

## CSS 类

对话框提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `modal`      | 实体类 | 元素作为对话框遮罩组件 |
| `modal-dialog`      | 实体类 | 元素作为对话框组件 |
| `size-sm`      | 修饰类      |   对话框使用小号尺寸 |
| `size-lg`      | 修饰类      |   对话框使用大号尺寸 |

## CSS 变量

对话框提供了如下 CSS 变量，可进行全局修改。

| CSS 变量名        | 作用           |
| ------------- |:------------- |
| `--modal-radius`      | 对话框默认圆角大小 |
| `--modal-bg`      | 对话框遮挡层颜色 |
| `--modal-sm`      | 对话框小号尺寸宽度 |
| `--modal-base`      | 对话框默认宽度 |
| `--modal-lg`      | 对话框大号尺寸宽度 |
