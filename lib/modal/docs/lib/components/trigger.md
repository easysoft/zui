# 对话框触发器

对话框触发器允许你不需要书写静态对话框 HTML，直接使用触发按钮或者一行 JS 代码即可让一个全新的对话框展现。支持使用 Ajax 从远程获取内容，或者通过 iframe 加载任何页面内容，当然不使用远程内容，直接使用本地内容也是很方便。

## Ajax 对话框

在对话框触发按钮上通过 `data-url` 属性指定远程内容的 URL 地址。

::: tabs

== 示例

<Example class="flex gap-2">
  <button type="button" class="btn primary" data-toggle="modal" data-url="/assets/modal/ajax-modal.html">点击打开 Ajax HTML 对话框</button>
</Example>

== HTML

```html
<button type="button" class="btn primary" data-toggle="modal" data-url="/assets/modal/ajax-modal.html">点击打开 Ajax HTML 对话框</button>
```

:::

Ajax 对话框支持手动通过 `Modal.open` 方法按需打开：

```js
zui.Modal.open({
    url: '/assets/modal/ajax-modal.html',
});
```

## iframe 对话框

在对话框触发按钮上通过 `data-type="iframe"` 属性指定对话框类型为 iframe 对话框，然后通过 `data-url` 属性指定对话框内容页面地址。

::: tabs

== 示例

<Example class="flex gap-2">
  <button type="button" class="btn primary" data-toggle="modal" data-type="iframe" data-url="/assets/modal/iframe-modal.html">点击打开 iframe 对话框</button>
</Example>

== HTML

```html
<button type="button" class="btn primary" data-toggle="modal" data-type="iframe" data-url="/assets/modal/iframe-modal.html">点击打开 iframe 对话框</button>
```

:::

iframe 对话框支持手动通过 `Modal.open` 方法按需打开：

```js
zui.Modal.open({
    type: 'iframe',
    url: '/assets/modal/iframe-modal.html',
});
```

## 自定义信息提示弹窗

在对话框触发按钮上通过 `data-title` 属性指定对话框标题，通过 `data-content` 属性指定对话框内容。

::: tabs

== 示例

<Example>
  <button type="button" class="btn primary" data-toggle="modal" data-title="自定义对话框" data-content="这里是对话框内容">点击打开自定义对话框</button>
</Example>

== HTML

```html
<button type="button" class="btn primary" data-toggle="modal" data-title="自定义对话框" data-content="这里是对话框内容">点击打开自定义对话框</button>
```

:::

iframe 对话框支持手动通过 `Modal.open` 方法按需打开：

```js
zui.Modal.open({
    title: '自定义对话框',
    content: '这里是对话框内容',
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

<Example class="row gap-4">
  <button type="button" class="btn primary" onclick="zui.Modal.alert('提示消息')">Modal.alert(message)</button>
  <button type="button" class="btn primary" onclick="zui.Modal.alert({title: '这是标题', message: '提示消息', icon: 'icon-flag'})">Modal.alert(options)</button>
</Example>

== HTML

```html
<button
  type="button"
  class="btn primary"
  onclick="zui.Modal.alert('提示消息')"
>
  Modal.alert(message)
</button>
<button
  type="button"
  class="btn primary"
  onclick="zui.Modal.alert({title: '这是标题', message: '提示消息', icon: 'icon-flag'})"
>
  Modal.alert(options)
</button>
```

:::

### 确认框

通过 `Modal.confirm()` 方法可以打开一个确认框，该方法定义如下：

```ts
/* 直接指定要提示的消息文本 */
Modal.confirm(message: string): Promise<string | undefined>;

/* 通过一个选项对象定义个性化对话框 */
Modal.confirm(options: ModalComfirmOptions): Promise<string | undefined>;
```

其中参数定义如下：

* `message`：要提示的消息文本；
* `options`：一个警告框选项对象 `ModalConfirmOptions`，定义如下：

```ts
interface ModalConfirmOptions extends ModalAlertOptions {
    /* 当用户点击确认或取消时的回调函数 */
    onResult?: (confirmed: boolean, modal: Modal) => void;
}
```

该方法会通过 `Promise` 异步返回用户点击的按钮名称。

下面为一个示例：

::: tabs

== 示例

<Example class="row gap-4">
  <button type="button" class="btn primary" onclick="zui.Modal.confirm('提示消息').then(console.log)">Modal.confirm(message)</button>
  <button type="button" class="btn primary" onclick="zui.Modal.confirm({title: '这是标题', message: '提示消息', icon: 'icon-flag'}).then(console.log)">Modal.confirm(options)</button>
</Example>

== HTML

```html
<button
  type="button"
  class="btn primary"
  onclick="zui.Modal.confirm('提示消息').then(console.log)"
>
  Modal.confirm(message)
</button>
<button
  type="button"
  class="btn primary"
  onclick="zui.Modal.confirm({title: '这是标题', message: '提示消息', icon: 'icon-flag'}).then(console.log)"
>
  Modal.confirm(options)
</button>
```

:::
