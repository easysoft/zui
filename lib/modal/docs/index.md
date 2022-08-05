# 对话框

在保留当前页面状态的情况下，直接使用触发按钮即可展现对话框，告知用户展示相关操作。
## 基本用法

使用 `.modal` 与 `.modal-dialog` 类获得对话框的外观展示，通常用在元素 `<div>` 上。

<Example class="flex gap-4">
  <button type="button" class="btn -primary" data-toggle="modal" data-target="#myModal">
    点击按钮打开对话框
  </button>
  <a class="btn" data-toggle="modal" href="#myModal">点击 a 标签按钮打开</a>

  <div class="modal" id="myModal">
    <div class="modal-dialog -shadow">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
          </button>
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
</Example>

```html
<button type="button" class="btn -primary" data-toggle="modal" data-target="#myModal">
  点击按钮打开对话框
</button>
<a class="btn" data-toggle="modal" href="#myModal">点击 a 标签按钮打开</a>

<div class="modal" id="myModal">
  <div class="modal-dialog -shadow">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
        </button>
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

## 自定义位置

使用 `data-position` 自定义设置对话框位置。可设置 `fit`、`center` 或其具体像素值。

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn -primary" data-position="fit" data-toggle="modal"
  data-target="#positionModal">默认</button>
  <button type="button" class="btn -primary" data-position="center" data-toggle="modal"
  data-target="#positionModal">窗口中间</button>
  <button type="button" class="btn -primary" data-position="0" data-toggle="modal"
  data-target="#positionModal">靠近上方</button>
  <button type="button" class="btn -primary" data-position="100px" data-toggle="modal"
  data-target="#positionModal">距离上方100px</button>

  <div class="modal" id="positionModal">
    <div class="modal-dialog -shadow">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
          </button>
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
</Example>

```html
<button type="button" class="btn -primary" data-position="fit" data-toggle="modal"
data-target="#positionModal">默认</button>
<button type="button" class="btn -primary" data-position="center" data-toggle="modal"
data-target="#positionModal">窗口中间</button>
<button type="button" class="btn -primary" data-position="0" data-toggle="modal"
data-target="#positionModal">靠近上方</button>
<button type="button" class="btn -primary" data-position="100px" data-toggle="modal"
data-target="#positionModal">距离上方100px</button>

<div class="modal" id="positionModal">
  <div class="modal-dialog -shadow">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
        </button>
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

除了默认大小，还提供了额外的 3 种预设尺寸。

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn -primary" data-toggle="modal"
  data-target="#smModal">小对话框</button>

  <button type="button" class="btn -primary" data-toggle="modal"
  data-target="#baseModal">中对话框</button>

  <button type="button" class="btn -primary" data-toggle="modal"
  data-target="#lgModal">大对话框</button>

  <button type="button" class="btn -primary" data-toggle="modal"
  data-target="#fullModal">全屏对话框</button>

  <div class="modal" id="smModal">
    <div class="modal-dialog -shadow -sm">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
          </button>
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
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
          </button>
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
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
          </button>
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
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
          </button>
          <div class="modal-title">标题</div>
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
          <button type="button" class="btn -primary">保存</button>
        </div>
      </div>
    </div>
</div>
</Example>

```html
<button type="button" class="btn -primary" data-toggle="modal"
data-target="#smModal">小对话框</button>

<button type="button" class="btn -primary" data-toggle="modal"
data-target="#baseModal">中对话框</button>

<button type="button" class="btn -primary" data-toggle="modal"
data-target="#lgModal">大对话框</button>

<button type="button" class="btn -primary" data-toggle="modal"
data-target="#fullModal">全屏对话框</button>

<div class="modal" id="smModal">
  <div class="modal-dialog -shadow -sm">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
        </button>
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
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
        </button>
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
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
        </button>
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
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
        </button>
        <div class="modal-title">标题</div>
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
        <button type="button" class="btn -primary">保存</button>
      </div>
    </div>
  </div>
</div>
```


## 居中布局

<Example class="flex gap-4 flex-wrap">
  <button type="button" class="btn -primary" data-toggle="modal"
  data-target="#centerModal">居中对话框</button>

  <div class="modal" id="centerModal">
    <div class="modal-dialog -shadow">
      <div class="modal-content">
        <div class="modal-header text-center">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
          </button>
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
</Example>

```html
<button type="button" class="btn -primary" data-toggle="modal"
data-target="#centerModal">居中对话框</button>

<div class="modal" id="centerModal">
  <div class="modal-dialog -shadow">
    <div class="modal-content">
      <div class="modal-header text-center">
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
        </button>
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
## 信息提示

展示各种类型的信息提示，只提供一个按钮用于关闭。

<Example class="flex gap-4 flex-wrap">
  <button type="button" class="btn -primary" data-toggle="modal"
  data-target="#customModal">点击打开</button>

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
</Example>

```html
<button type="button" class="btn -primary" data-toggle="modal"
data-target="#customModal">点击打开</button>

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

通过 `data-modal-closable` 动态控制，默认 `true` 可以通过点击 modal 关闭对话框。

<Example class="flex gap-4 flex-wrap">
  <button type="button" class="btn -primary" data-toggle="modal"
  data-target="#autoCloseModal">点击打开对话框</button>

  <div class="modal" id="autoCloseModal" data-modal-closable="false">
    <div class="modal-dialog -shadow">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <span aria-hidden="true">×</span>
          </button>
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
</Example>

```html
<button type="button" class="btn -primary" data-toggle="modal"
data-target="#autoCloseModal">点击打开对话框</button>

<div class="modal" id="autoCloseModal" data-modal-closable="false">
  <div class="modal-dialog -shadow">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">
          <span aria-hidden="true">×</span>
        </button>
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

## CSS 类

对话框提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `modal`      | 实体类 | 元素作为对话框遮罩组件 |
| `modal-dialog`      | 实体类 | 元素作为对话框组件 |
| `-sm`      | 修饰类      |   对话框使用小号尺寸 |
| `-lg`      | 修饰类      |   对话框使用大号尺寸 |
| `-fullscreen`      | 修饰类      |   对话框使用全屏尺寸 |

