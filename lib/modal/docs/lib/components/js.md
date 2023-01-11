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
