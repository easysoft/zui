# 提示消息

提示消息又称“工具提示”，在用户鼠标悬停在元素上时及时显示额外的内容。

## 用法

将鼠标移到按钮上可以查看提示消息。

<Example>
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp1">提示消息</button>
</Example>

```html
<button type="button" class="btn" data-toggle="tooltip" id="tooltipExp1">提示消息</button>

<script>
    new zui.Tooltip('#tooltipExp1', {title: '展示提示的内容'});
</script>
```

## 触发方式

除了默认的鼠标悬浮展示信息外，组件也提供了点击的触发方式

<Example class="flex gap-2">
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipHover">hover 触发</button>
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipClick">click 触发</button>
</Example>

```html
<button type="button" class="btn" data-toggle="tooltip" id="tooltipClick">点击触发</button>
<button type="button" class="btn" data-toggle="tooltip" id="tooltipHover">hover 触发</button>

<script>
    new zui.Tooltip('#tooltipHover', {title: '点击展示提示内容', trigger: 'hover'});
    new zui.Tooltip('#tooltipClick', {title: '点击展示提示内容', trigger: 'click'});
</script>
```

## 弹出方向

使用 `placement` 选项来指定工具提示相对于元素显示的位置。

<Example class="flex gap-2 flex-wrap">
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp2">左侧提示</button>
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp3">上侧提示</button>
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp4">下侧提示</button>
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp5">右侧提示</button>
</Example>

```html
<button type="button" class="btn" data-toggle="tooltip" id="tooltipExp2">左侧提示</button>
<button type="button" class="btn" data-toggle="tooltip" id="tooltipExp3">上侧提示</button>
<button type="button" class="btn" data-toggle="tooltip" id="tooltipExp4">下侧提示</button>
<button type="button" class="btn" data-toggle="tooltip" id="tooltipExp5">右侧提示</button>

<script>
    new zui.Tooltip('#tooltipExp2', {title: '左侧提示内容', placement: 'left'});
    new zui.Tooltip('#tooltipExp3', {title: '上侧提示内容', placement: 'top'});
    new zui.Tooltip('#tooltipExp4', {title: '下侧提示内容', placement: 'bottom'});
    new zui.Tooltip('#tooltipExp5', {title: '右侧提示内容', placement: 'right'});
</script>
```

## 外观

指定外观类型来更改颜色主题。

<Example class="flex gap-2 flex-wrap">
  <button type="button" class="btn primary" data-toggle="tooltip" id="tooltipShow1">primary</button>
  <button type="button" class="btn secondary" data-toggle="tooltip" id="tooltipShow2">secondary</button>
  <button type="button" class="btn warning" data-toggle="tooltip" id="tooltipShow3">warning</button>
  <button type="button" class="btn success" data-toggle="tooltip" id="tooltipShow4">success</button>
  <button type="button" class="btn danger" data-toggle="tooltip" id="tooltipShow5">danger</button>
  <button type="button" class="btn important" data-toggle="tooltip" id="tooltipShow6">important</button>
</Example>

```html
<button type="button" class="btn primary" data-toggle="tooltip" id="tooltipShow1">primary</button>
<button type="button" class="btn secondary" data-toggle="tooltip" id="tooltipShow2">secondary</button>
<button type="button" class="btn warning" data-toggle="tooltip" id="tooltipShow3">warning</button>
<button type="button" class="btn success" data-toggle="tooltip" id="tooltipShow4">success</button>
<button type="button" class="btn danger" data-toggle="tooltip" id="tooltipShow5">danger</button>
<button type="button" class="btn important" data-toggle="tooltip" id="tooltipShow6">important</button>

<script>
    new zui.Tooltip('#tooltipShow1', {title: 'primary 外观', type: 'primary'});
    new zui.Tooltip('#tooltipShow2', {title: 'secondary 外观', type: 'secondary'});
    new zui.Tooltip('#tooltipShow3', {title: 'warning 外观', type: 'warning'});
    new zui.Tooltip('#tooltipShow4', {title: 'success 外观', type: 'success'});
    new zui.Tooltip('#tooltipShow5', {title: 'danger 外观', type: 'danger'});
    new zui.Tooltip('#tooltipShow6', {title: 'important 外观', type: 'important'});
</script>
```

## 选项

组件属性：

### `placement `

提示信息的弹出方向。

* 类型：`'string'`;
* 必选：否；
* 可选项：`'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end' | 'auto-start' | 'auto' | 'auto-end' `。


### `title `

设定提示消息内容，可包含 HTML 格式源码。

* 类型：`'string'`;
* 必选：否。

### `trigger`

设定提示消息触发方式。

* 类型：`'string'`;
* 必选：否。

### `className`

设定提示消息类名。

* 类型：`'string'`;
* 必选：否。

### `type`

设定提示消息外观类型。

* 类型：`'string'`;
* 必选：否。

### `arrow`

控制提示消息组件的箭头的大小。

* 类型：`'number'`;
* 必选：否；
* 默认：5。

### `itemRender`

指定一个回调函数用于对组件渲染进行自定义。

**参数**：`items` 选项的单个配置；

**返回值**：`items` 选项的单个配置。

### `beforeRender`

指定一个回调函数在渲染之前调用，可重新配置组件选项。

**参数**：用户为按钮组组件件设置的 `options`；

**返回值**：组件选项数据。


### `afterRender`

指定一个回调函数在渲染之后调用。

**参数：**

* `firstRender`：判断是否第一次渲染；
* `menu`：组件信息。

### `beforeDestroy`

指定一个回调函数在组件销毁之前调用，无参数。


<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.Tooltip('#tooltipExp1', {title: '展示提示的内容'});
            new zui.Tooltip('#tooltipHover', {title: '鼠标悬浮展示提示内容', trigger: 'hover'});
            new zui.Tooltip('#tooltipClick', {title: '点击展示提示内容', trigger: 'click'});
            new zui.Tooltip('#tooltipExp2', {title: '左侧提示内容', placement: 'left'});
            new zui.Tooltip('#tooltipExp3', {title: '上侧提示内容', placement: 'top'});
            new zui.Tooltip('#tooltipExp4', {title: '下侧提示内容', placement: 'bottom'});
            new zui.Tooltip('#tooltipExp5', {title: '右侧提示内容', placement: 'right'});
            new zui.Tooltip('#tooltipShow1', {title: 'primary 外观', type: 'primary'});
            new zui.Tooltip('#tooltipShow2', {title: 'secondary 外观', type: 'secondary'});
            new zui.Tooltip('#tooltipShow3', {title: 'warning 外观', type: 'warning'});
            new zui.Tooltip('#tooltipShow4', {title: 'success 外观', type: 'success'});
            new zui.Tooltip('#tooltipShow5', {title: 'danger 外观', type: 'danger'});
            new zui.Tooltip('#tooltipShow6', {title: 'important 外观', type: 'important'});
        })
    },
}
</script>