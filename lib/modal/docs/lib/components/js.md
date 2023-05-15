# 对话框触发器

对话框触发器允许你不需要书写静态对话框HTML，直接使用触发按钮或者一行Javascript代码即可让一个全新的对话框展现。支持使用Ajax从远程获取内容，或者通过iframe加载任何页面内容，当然不使用远程内容，直接使用本地内容也是很方便。

## iframe 对话框

<Example class="flex gap-2">
  <button type="button" class="btn primary" data-toggle="modal" data-url="/lib/modal/dev/iframe-modal.html" data-title="iframe 对话框">点击打开 iframe 对话框</button>
</Example>

```html
<button type="button" class="btn primary" data-toggle="modal" data-url="/lib/modal/dev/iframe-modal.html" data-title="iframe 对话框">点击打开 iframe 对话框</button>
```

## Ajax 对话框

<Example class="flex gap-2">
  <button type="button" class="btn primary" data-toggle="modal" data-type="ajax" data-url="/lib/modal/dev/ajax-modal.html" data-title="Ajax HTML 对话框" data-data-type="html">点击打开 Ajax HTML 对话框</button>
</Example>

```html
<button type="button" class="btn primary" data-toggle="modal" data-type="ajax" data-url="/lib/modal/dev/ajax-modal.html" data-title="Ajax HTML 对话框" data-data-type="html">点击打开 Ajax HTML 对话框</button>
```

## 自定义信息提示弹窗

<Example>
  <button type="button" class="btn primary" data-toggle="modal" data-title="自定义对话框" data-content="这里是对话框内容">点击打开自定义对话框</button>
</Example>

```html
<button type="button" class="btn primary" data-toggle="modal" data-title="自定义对话框" data-content="这里是对话框内容">点击打开自定义对话框</button>
```

## 模态框

通过 `data-backdrop="false"` 动态控制，设置后可以操作模态框之外的交互。

<Example>
  <button type="button" class="btn primary" data-backdrop="false" data-toggle="modal" data-title="自定义对话框" data-content="这里是对话框内容">点击打开模态对话框</button>
</Example>

```html
<button type="button" class="btn primary" data-backdrop="false" data-toggle="modal" data-title="自定义对话框" data-content="这里是对话框内容">点击打开模态对话框</button>
```

## 系统对话框

### 警告框

通过 `Modal.alert()` 方法可以打开一个警告框，该方法定义如下：

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
      message: string;

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

<Example class="row gap-4">
  <button type="button" class="btn primary" onclick="zui.Modal.alert('提示消息')">Modal.alert(message)</button>
  <button type="button" class="btn primary" onclick="zui.Modal.alert({title: '这是标题', message: '提示消息', icon: 'icon-flag'})">Modal.alert(options)</button>
</Example>

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

<Example class="row gap-4">
  <button type="button" class="btn primary" onclick="zui.Modal.confirm('提示消息').then(console.log)">Modal.confirm(message)</button>
  <button type="button" class="btn primary" onclick="zui.Modal.confirm({title: '这是标题', message: '提示消息', icon: 'icon-flag'}).then(console.log)">Modal.confirm(options)</button>
</Example>

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

## 选项

### `className`

类名。

* 类型：`string`；
* 必选：否。

### `style`

样式。

* 类型：`JSX.CSSProperties`；
* 必选：否。

### `size`

尺寸大小。

* 类型：`'sm' | 'lg' | 'md' | 'full' | number | {width: number, height: number};`；
* 必选：否。

### `position`

位置。

* 类型：`'fit' | 'center' | 'bottom' | 'top' | number | {left: number, top: number, width: number, height: number}`；
* 必选：否；
* 默认：`fit`。

### `backdrop`

是否启用背景遮罩。

* 类型：`'static' | boolean`；
* 必选：否；
* 默认：`true`。

### `show`

是否展示弹窗

* 类型：`boolean`；
* 必选：否；
* 默认：`true`。

### `keyboard`

是否启用按键关闭对话框。

* 类型：`boolean`；
* 必选：否；
* 默认：`true`。

### `moveable`

是否可移动。

* 类型：`boolean`；
* 必选：否；
* 默认：`false`。

### `animation`

是否启用动画效果。

* 类型：`boolean`；
* 必选：否；
* 默认：`true`。

### `transTime`

过渡时间。

* 类型：`number`；
* 必选：否；
* 默认：`300`。

### `responsive`

是否自使用。

* 类型：`boolean`；
* 必选：否；
* 默认：`true`。
