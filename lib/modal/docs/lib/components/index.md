# 对话框

在保留当前页面状态的情况下，直接使用触发按钮即可展现对话框，告知用户展示相关操作。

## 使用方法

使用 `.modal` 与 `.modal-dialog` 类获得对话框的外观展示，通常用在元素 `<div>` 上。使用 `[data-toggle="modal"]` 指定对话框触发按钮，在触发按钮上通过 `data-target` 属性指定要打开的对话框。

::: tabs

== 示例

<Example class="flex gap-4">
  <button type="button" class="btn primary" data-toggle="modal" data-target="#myModal">
    查看发布说明
  </button>
  <a class="btn" data-toggle="modal" href="#myModal">发布说明（链接）</a>

  <div class="modal" id="myModal">
    <div class="modal-dialog shadow">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">客户门户 v1.2 发布说明</div>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
        </div>
        <div class="modal-body">
          <p>本次更新支持工单附件预览，并优化了移动端图片上传。现有工单和附件将继续保留。</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-dismiss="modal">关闭</button>
          <button type="button" class="btn primary" data-dismiss="modal">我已阅读</button>
        </div>
      </div>
    </div>
  </div>
</Example>

== HTML

```html
<button type="button" class="btn primary" data-toggle="modal" data-target="#myModal">
  查看发布说明
</button>
<a class="btn" data-toggle="modal" href="#myModal">发布说明（链接）</a>

<div class="modal" id="myModal">
  <div class="modal-dialog shadow">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">客户门户 v1.2 发布说明</div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
      </div>
      <div class="modal-body">
        <p>本次更新支持工单附件预览，并优化了移动端图片上传。现有工单和附件将继续保留。</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn primary" data-dismiss="modal">我已阅读</button>
      </div>
    </div>
  </div>
</div>
```

:::

## 自定义位置

使用 `data-position` 自定义设置对话框位置。可设置 `fit`、`center` 或其具体像素值。

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap items-end">
  <button type="button" class="btn primary" data-position="fit" data-toggle="modal"
  data-target="#positionModal">默认（稍稍靠近上方）</button>
  <button type="button" class="btn primary" data-position="center" data-toggle="modal"
  data-target="#positionModal">窗口中间</button>
  <button type="button" class="btn primary" data-position="0" data-toggle="modal"
  data-target="#positionModal">上方</button>
  <button type="button" class="btn primary" data-position="100px" data-toggle="modal"
  data-target="#positionModal">距离上方100px</button>

  <div class="modal" id="positionModal">
    <div class="modal-dialog shadow">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">客户门户 v1.2 发布说明</div>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
        </div>
        <div class="modal-body">
          本次更新支持工单附件预览，并优化了移动端图片上传。现有工单和附件将继续保留。
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-dismiss="modal">关闭</button>
          <button type="button" class="btn primary" data-dismiss="modal">我已阅读</button>
        </div>
      </div>
    </div>
  </div>
</Example>

== HTML

```html
<button type="button" class="btn primary" data-position="fit" data-toggle="modal"
  data-target="#positionModal">默认（稍稍靠近上方）</button>
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
        <div class="modal-title">客户门户 v1.2 发布说明</div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
      </div>
      <div class="modal-body">
        本次更新支持工单附件预览，并优化了移动端图片上传。现有工单和附件将继续保留。
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn primary" data-dismiss="modal">我已阅读</button>
      </div>
    </div>
  </div>
</div>
```

:::

## 尺寸

除了默认大小，还提供了额外的 3 种预设尺寸。

::: tabs

== 示例

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
          <div class="modal-title">客户门户 v1.2 发布说明</div>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
        </div>
        <div class="modal-body">
          <h4>交付范围</h4><p>客户门户 v1.2 新增工单附件预览，支持直接查看图片和 PDF。客户可以在工单详情中补充材料，处理人员可以按上传时间查看历史附件。</p>
          <h4>验收要点</h4><p>请使用普通客户和处理人员账号分别验收。重点检查图片预览、文件下载、无权限提示和手机上传；网络中断后应保留已填写的工单内容。</p>
          <h4>发布安排</h4><p>周五 15:00 进行发布评审，验收通过后于 18:00 更新客户门户。发布后由王宁检查登录、工单查询和附件上传，林悦汇总客户反馈并安排后续迭代。</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-dismiss="modal">关闭</button>
          <button type="button" class="btn primary" data-dismiss="modal">我已阅读</button>
        </div>
      </div>
    </div>
  </div>
</Example>

== HTML

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
        <div class="modal-title">客户门户 v1.2 发布说明</div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
      </div>
      <div class="modal-body">
        <h4>交付范围</h4><p>客户门户 v1.2 新增工单附件预览，支持直接查看图片和 PDF。客户可以在工单详情中补充材料，处理人员可以按上传时间查看历史附件。</p>
        <h4>验收要点</h4><p>请使用普通客户和处理人员账号分别验收。重点检查图片预览、文件下载、无权限提示和手机上传；网络中断后应保留已填写的工单内容。</p>
        <h4>发布安排</h4><p>周五 15:00 进行发布评审，验收通过后于 18:00 更新客户门户。发布后由王宁检查登录、工单查询和附件上传，林悦汇总客户反馈并安排后续迭代。</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-dismiss="modal">关闭</button>
        <button type="button" class="btn primary" data-dismiss="modal">我已阅读</button>
      </div>
    </div>
  </div>
</div>
```

:::

## 信息提示

展示各种类型的信息提示，只提供一个按钮用于关闭。

::: tabs

== 示例

<Example class="flex gap-4 flex-wrap">
  <button type="button" class="btn primary" data-toggle="modal"
  data-target="#customModal">点击打开</button>

  <div class="modal" id="customModal">
    <div class="modal-dialog shadow size-sm bd-none">
      <div class="modal-content">
        <div class="modal-actions top-1.5 right-1.5">
          <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
        </div>
        <div class="modal-body">
          <p>验收报告已生成，可在项目文档库中查看。</p>
        </div>
      </div>
    </div>
  </div>
</Example>

== HTML

```html
<button type="button" class="btn primary" data-toggle="modal"
  data-target="#customModal">点击打开</button>

<div class="modal" id="customModal">
  <div class="modal-dialog shadow size-sm bd-none">
    <div class="modal-content">
      <div class="modal-actions top-1.5 right-1.5">
        <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
      </div>
      <div class="modal-body">
        <p>验收报告已生成，可在项目文档库中查看。</p>
      </div>
    </div>
  </div>
</div>
```

:::

## 控制遮罩层

通过 `data-backdrop="false"` 移除遮罩层，设置后可以操作模态框之外的交互。

::: tabs

== 示例

<Example>
  <button type="button" class="btn primary" data-toggle="modal" data-backdrop="false" data-target="#myModal2">查看发布说明</button>
  <div class="modal" id="myModal2">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">客户门户 v1.2 发布说明</div>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
        </div>
        <div class="modal-body">
            <p>本次更新支持工单附件预览，并优化了移动端图片上传。现有工单和附件将继续保留。</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn" data-dismiss="modal">关闭</button>
            <button type="button" class="btn primary" data-dismiss="modal">我已阅读</button>
        </div>
      </div>
    </div>
  </div>
</Example>

== HTML

```html
<button type="button" class="btn primary" data-toggle="modal" data-backdrop="false" data-target="#myModal2">查看发布说明</button>
<div class="modal" id="myModal2">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <div class="modal-title">客户门户 v1.2 发布说明</div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn square ghost" data-dismiss="modal"><span class="close"></span></button>
      </div>
      <div class="modal-body">
          <p>本次更新支持工单附件预览，并优化了移动端图片上传。现有工单和附件将继续保留。</p>
      </div>
      <div class="modal-footer">
          <button type="button" class="btn" data-dismiss="modal">关闭</button>
          <button type="button" class="btn primary" data-dismiss="modal">我已阅读</button>
      </div>
    </div>
  </div>
</div>
```

:::

## CSS 类

对话框提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `modal`      | 实体类 | 元素作为对话框遮罩组件 |
| `modal-dialog`      | 实体类 | 元素作为对话框组件 |
| `size-sm`      | 工具类      |   对话框使用小号尺寸 |
| `size-lg`      | 工具类      |   对话框使用大号尺寸 |
| `size-xl`      | 工具类      |   对话框使用超大号尺寸 |

## CSS 变量

对话框提供了如下 CSS 变量，可进行全局修改。

| CSS 变量名        | 作用           |
| ------------- |:------------- |
| `--modal-radius`      | 对话框默认圆角大小 |
| `--modal-bg`      | 对话框遮挡层颜色 |
| `--modal-sm`      | 对话框小号尺寸宽度 |
| `--modal-base`      | 对话框默认宽度 |
| `--modal-lg`      | 对话框大号尺寸宽度 |
| `--modal-xl`      | 对话框超大号尺寸宽度 |
