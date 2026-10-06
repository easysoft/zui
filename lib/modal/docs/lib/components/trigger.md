# 对话框触发器

通过触发按钮或 `zui.Modal.open()` 动态创建对话框，支持 Ajax HTML、iframe 页面和本地内容。

## Ajax 对话框

在对话框触发按钮上通过 `data-url` 指定内容地址。下面的示例加载一段包含 `.modal-dialog` 的 HTML。

将“完整代码”中的配套内容保存为站点根目录下的 `assets/modal/ajax-modal.html`，也可下载[配套 HTML 文件](/assets/modal/ajax-modal.html)。通过 HTTP 服务访问页面；使用其他地址时，同步修改按钮的 `data-url` 和 JS 中的 `url`。

::: tabs

== 示例

<Example>
  <button type="button" class="btn primary" data-toggle="modal" data-url="/assets/modal/ajax-modal.html">查看 Ajax 发布说明</button>
</Example>

== 完整代码

触发按钮：

```html
<button type="button" class="btn primary" data-toggle="modal" data-url="/assets/modal/ajax-modal.html">查看 Ajax 发布说明</button>
```

配套内容文件 `/assets/modal/ajax-modal.html`：

```html
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <div class="modal-title">客户门户 v1.2 发布说明</div>
        </div>
        <div class="modal-actions">
            <button type="button" class="btn square ghost" aria-label="关闭" data-dismiss="modal"><span class="close"></span></button>
        </div>
        <div class="modal-body">
            <p>本次更新支持工单附件预览，并优化了移动端图片上传。现有工单和附件将继续保留。</p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn primary" data-dismiss="modal">我已阅读</button>
        </div>
    </div>
</div>
```

:::

也可通过 `zui.Modal.open()` 打开同一个 Ajax 内容文件：

```js
zui.Modal.open({
    url: '/assets/modal/ajax-modal.html',
});
```

## iframe 对话框

通过 `data-type="iframe"` 指定 iframe 对话框，通过 `data-url` 指定内容页面地址。

将“完整代码”中的完整 HTML 页面保存为站点根目录下的 `assets/modal/iframe-modal.html`，也可下载[配套页面](/assets/modal/iframe-modal.html)。示例使用同源页面，通过 HTTP 服务访问；调整地址时同步修改 `data-url` 和 JS 中的 `url`。

::: tabs

== 示例

<Example>
  <button type="button" class="btn primary" data-toggle="modal" data-type="iframe" data-title="发布计划" data-url="/assets/modal/iframe-modal.html">查看 iframe 发布计划</button>
</Example>

== 完整代码

触发按钮：

```html
<button type="button" class="btn primary" data-toggle="modal" data-type="iframe" data-title="发布计划" data-url="/assets/modal/iframe-modal.html">查看 iframe 发布计划</button>
```

配套内容文件 `/assets/modal/iframe-modal.html`：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>客户门户 v1.2 发布计划</title>
</head>
<body>
    <h1>客户门户 v1.2 发布计划</h1>
    <p>客户门户 v1.2 已通过验收，计划于周五 18:00 发布。</p>
    <p>发布后检查登录、工单查询和附件上传，并汇总客户反馈。</p>
</body>
</html>
```

:::

也可通过 `zui.Modal.open()` 打开同一个 iframe 页面：

```js
zui.Modal.open({
    type: 'iframe',
    title: '发布计划',
    url: '/assets/modal/iframe-modal.html',
});
```

## 自定义信息提示弹窗

在对话框触发按钮上通过 `data-title` 属性指定对话框标题，通过 `data-content` 属性指定对话框内容。

::: tabs

== 示例

<Example>
  <button type="button" class="btn primary" data-toggle="modal" data-title="发布准备完成" data-content="客户门户 v1.2 已通过验收，计划于周五 18:00 发布。">查看发布计划</button>
</Example>

== 完整代码

```html
<button type="button" class="btn primary" data-toggle="modal" data-title="发布准备完成" data-content="客户门户 v1.2 已通过验收，计划于周五 18:00 发布。">查看发布计划</button>
```

:::

也可通过 `zui.Modal.open()` 指定标题和本地内容，需显式设置 `type: 'custom'`：

```js
zui.Modal.open({
    type: 'custom',
    title: '发布准备完成',
    content: '客户门户 v1.2 已通过验收，计划于周五 18:00 发布。',
});
```

## 系统对话框

### 警告框

通过 `zui.Modal.alert()` 方法可以打开一个警告框，该方法定义如下：

```ts
/* 直接指定要提示的消息文本 */
Modal.alert(message: string): Promise<string | undefined>;

/* 通过一个选项对象定义个性化警告框 */
Modal.alert(options: ModalAlertOptions): Promise<string | undefined>;
```

其中参数定义如下：

* `message`：要提示的消息文本；
* `options`：一个警告框选项对象 `ModalAlertOptions`，定义如下：

```ts
interface ModalAlertOptions extends ModalCustomOptions {
    /* 提示消息 */
    message: string | {html: string};

    /* 提示消息前的图标名称 */
    icon?: string;

    /* 提示消息图标类名 */
    iconClass?: string;

    /* 自定义提示按钮 */
    actions?: ToolbarItemOptions[] | string | string[];

    /* 当点击提示按钮时的回调函数 */
    onClickAction?: (item: ToolbarItemOptions, modal: Modal) => false | void;
}
```

该方法会通过 `Promise` 异步返回用户点击的按钮名称。

下面为一个示例：

::: tabs

== 示例

<Example>
  <div class="flex flex-wrap gap-4">
      <button type="button" class="btn primary" zui-on-click="zui.Modal.alert('请先填写项目名称，再提交评审。')">Modal.alert(message)</button>
      <button type="button" class="btn primary" zui-on-click="zui.Modal.alert({title: '信息未填写完整', message: '请先填写项目名称，再提交评审。', icon: 'icon-flag'})">Modal.alert(options)</button>
  </div>
</Example>

== 完整代码

```html
<div class="flex flex-wrap gap-4">
    <button type="button" class="btn primary" zui-on-click="zui.Modal.alert('请先填写项目名称，再提交评审。')">Modal.alert(message)</button>
    <button type="button" class="btn primary" zui-on-click="zui.Modal.alert({title: '信息未填写完整', message: '请先填写项目名称，再提交评审。', icon: 'icon-flag'})">Modal.alert(options)</button>
</div>
```

:::

### 确认框

通过 `zui.Modal.confirm()` 方法可以打开一个确认框，该方法定义如下：

```ts
/* 直接指定要提示的消息文本 */
Modal.confirm(message: string): Promise<boolean>;

/* 通过一个选项对象定义个性化对话框 */
Modal.confirm(options: Partial<ModalConfirmOptions>): Promise<boolean>;
```

其中参数定义如下：

* `message`：要提示的消息文本；
* `options`：一个确认框选项对象，支持 `ModalConfirmOptions` 的部分属性，定义如下：

```ts
interface ModalConfirmOptions extends ModalAlertOptions {
    /* 当用户点击确认或取消时的回调函数 */
    onResult?: (confirmed: boolean, modal: Modal) => void;
}
```

该方法会通过 `Promise` 异步返回确认结果：点击确认返回 `true`，取消或关闭对话框返回 `false`。下面的示例将结果显示在按钮下方，仅演示选择结果。

下面为一个示例：

::: tabs

== 示例

<Example>
  <div class="flex flex-wrap gap-4">
      <button type="button" class="btn primary" zui-on-click="const result = document.getElementById('modal-confirm-result'); zui.Modal.confirm('放弃本次修改？未保存的项目设置将丢失。').then(confirmed => {result.textContent = confirmed ? '已确认：放弃本次修改。' : '已取消：继续编辑项目设置。';});">Modal.confirm(message)</button>
      <button type="button" class="btn primary" zui-on-click="const result = document.getElementById('modal-confirm-result'); zui.Modal.confirm({title: '放弃修改', message: '未保存的项目设置将丢失，是否继续？', icon: 'icon-flag'}).then(confirmed => {result.textContent = confirmed ? '已确认：放弃本次修改。' : '已取消：继续编辑项目设置。';});">Modal.confirm(options)</button>
  </div>
  <p id="modal-confirm-result" class="mt-3 mb-0" role="status" aria-live="polite">请选择一种确认框，再选择确认或取消。</p>
</Example>

== 完整代码

```html
<div class="flex flex-wrap gap-4">
    <button type="button" class="btn primary" zui-on-click="const result = document.getElementById('modal-confirm-result'); zui.Modal.confirm('放弃本次修改？未保存的项目设置将丢失。').then(confirmed => {result.textContent = confirmed ? '已确认：放弃本次修改。' : '已取消：继续编辑项目设置。';});">Modal.confirm(message)</button>
    <button type="button" class="btn primary" zui-on-click="const result = document.getElementById('modal-confirm-result'); zui.Modal.confirm({title: '放弃修改', message: '未保存的项目设置将丢失，是否继续？', icon: 'icon-flag'}).then(confirmed => {result.textContent = confirmed ? '已确认：放弃本次修改。' : '已取消：继续编辑项目设置。';});">Modal.confirm(options)</button>
</div>
<p id="modal-confirm-result" class="mt-3 mb-0" role="status" aria-live="polite">请选择一种确认框，再选择确认或取消。</p>
```

:::
