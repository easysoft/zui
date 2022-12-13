# 提示消息

提示消息又称“工具提示”，在用户鼠标悬停在元素上时及时显示额外的内容。

## 基本用法

组件提供多种不同方向的展示方式，可以根据需求选择你要的效果。

<Example>
  <div class="w-2/4">
    <div class="flex justify-center gap-1">
      <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp2">上左</button>
      <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp3">上中</button>
      <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp4">上右</button>
    </div>
    <div class="flex justify-between">
      <div class="col gap-1">
        <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp5">左上</button>
        <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp6">左中</button>
        <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp7">左下</button>
      </div>
      <div class="col gap-1">
        <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp8">右上</button>
        <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp9">右中</button>
        <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp10">右下</button>
      </div>
    </div>
    <div class="flex justify-center gap-1">
      <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp11">下左</button>
      <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp12">下中</button>
      <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp13">下右</button>
    </div>
  </div>
</Example>

```html
<div class="flex justify-center gap-1">
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp2">上左</button>
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp3">上中</button>
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp4">上右</button>
</div>
<div class="flex justify-between">
  <div class="col gap-1">
    <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp5">左上</button>
    <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp6">左中</button>
    <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp7">左下</button>
  </div>
  <div class="col gap-1">
    <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp8">右上</button>
    <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp9">右中</button>
    <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp10">右下</button>
  </div>
</div>
<div class="flex justify-center gap-1">
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp11">下左</button>
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp12">下中</button>
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipExp13">下右</button>
</div>

<script>
    new zui.Tooltip('#tooltipExp2', {title: 'top-start 提示内容', placement: 'top-start'});
    new zui.Tooltip('#tooltipExp3', {title: 'top 提示内容', placement: 'top'});
    new zui.Tooltip('#tooltipExp4', {title: 'top-end 提示内容', placement: 'top-end'});
    new zui.Tooltip('#tooltipExp5', {title: 'left-start 提示内容', placement: 'left-start'});
    new zui.Tooltip('#tooltipExp6', {title: 'left 提示内容', placement: 'left'});
    new zui.Tooltip('#tooltipExp7', {title: 'left-end 提示内容', placement: 'left-end'});
    new zui.Tooltip('#tooltipExp8', {title: 'right-start 提示内容', placement: 'right-start'});
    new zui.Tooltip('#tooltipExp9', {title: 'right 提示内容', placement: 'right'});
    new zui.Tooltip('#tooltipExp10', {title: 'right-end 提示内容', placement: 'right-end'});
    new zui.Tooltip('#tooltipExp11', {title: 'bottom-start 提示内容', placement: 'bottom-start'});
    new zui.Tooltip('#tooltipExp12', {title: 'bottom 提示内容', placement: 'bottom'});
    new zui.Tooltip('#tooltipExp13', {title: 'bottom-end 提示内容', placement: 'bottom-end'});
</script>
```

## 触发方式

除了默认的鼠标悬浮展示信息外，组件也提供了点击触发的方式

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

## 结合其他标签使用

<Example>
  <div class="mt-4"><a class="text-primary -cursor-pointer" data-toggle="tooltip" id="tooltipLink">层叠样式表</a>，又称串样式列表、级联样式表、串接样式表、层叠样式表、階層式樣式表，一种用来为结构化文档添加样式（字体、间距和颜色等）的计算机语言，由 W3C 定义和维护。</div>
</Example>

```html
<div class="mt-4"><a class="text-primary" data-toggle="tooltip" id="tooltipLink">层叠样式表</a>，又称串样式列表、级联样式表、串接样式表、层叠样式表、階層式樣式表，一种用来为结构化文档添加样式（字体、间距和颜色等）的计算机语言，由 W3C 定义和维护。</div>

<script>
    new zui.Tooltip('#tooltipLink', {title: '英语：Cascading Style Sheets，简写CSS'});
</script>
```


## 外观

指定 `type` 选项来更改外观类型。

<Example class="flex gap-2 flex-wrap">
  <button type="button" class="btn" data-toggle="tooltip" id="tooltipShow7">white</button>
  <button type="button" class="btn primary" data-toggle="tooltip" id="tooltipShow1">primary</button>
  <button type="button" class="btn secondary" data-toggle="tooltip" id="tooltipShow2">secondary</button>
  <button type="button" class="btn warning" data-toggle="tooltip" id="tooltipShow3">warning</button>
  <button type="button" class="btn success" data-toggle="tooltip" id="tooltipShow4">success</button>
  <button type="button" class="btn danger" data-toggle="tooltip" id="tooltipShow5">danger</button>
  <button type="button" class="btn important" data-toggle="tooltip" id="tooltipShow6">important</button>
</Example>

```html
<button type="button" class="btn" data-toggle="tooltip" id="tooltipShow7">white</button>
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
    new zui.Tooltip('#tooltipShow7', {title: 'white 外观', type: 'white', className: 'text-darker border border-light'});
</script>
```

## 选项

组件属性：

### `placement `

提示信息的弹出方向。

* 类型：`'string'`;
* 必选：否；
* 可选项：`'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end' | 'auto-start' | 'auto' | 'auto-end' `；
* 默认：`'top'`。


### `title `

设定提示消息内容，可包含 HTML 格式源码。

* 类型：`'string'`;
* 必选：否。

### `trigger`

设定提示消息触发方式。

* 类型：`'click' | 'hover'`;
* 必选：否。

### `html`

是否允许消息内容包含 HTML 格式源码。

* 类型：`boolean`;
* 必选：`false`。

### `className`

设定提示消息类名。

* 类型：`'string'`;
* 必选：否。

### `type`

设定提示消息外观类型。

* 类型：`'string'`;
* 必选：否。

### `animation`

决定是否应用淡入淡出动画。

* 类型：`boolean`;
* 必选：否；
* 默认：`true`。

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
            new zui.Tooltip('#tooltipLink', {title: '英语：Cascading Style Sheets，简写CSS'});
            new zui.Tooltip('#tooltipHover', {title: '鼠标悬浮展示提示内容', trigger: 'hover'});
            new zui.Tooltip('#tooltipClick', {title: '点击展示提示内容', trigger: 'click'});
            
            new zui.Tooltip('#tooltipExp2', {title: 'top-start 提示内容', placement: 'top-start'});
            new zui.Tooltip('#tooltipExp3', {title: 'top 提示内容', placement: 'top'});
            new zui.Tooltip('#tooltipExp4', {title: 'top-end 提示内容', placement: 'top-end'});
            new zui.Tooltip('#tooltipExp5', {title: 'left-start 提示内容', placement: 'left-start'});
            new zui.Tooltip('#tooltipExp6', {title: 'left 提示内容', placement: 'left'});
            new zui.Tooltip('#tooltipExp7', {title: 'left-end 提示内容', placement: 'left-end'});
            new zui.Tooltip('#tooltipExp8', {title: 'right-start 提示内容', placement: 'right-start'});
            new zui.Tooltip('#tooltipExp9', {title: 'right 提示内容', placement: 'right'});
            new zui.Tooltip('#tooltipExp10', {title: 'right-end 提示内容', placement: 'right-end'});
            new zui.Tooltip('#tooltipExp11', {title: 'bottom-start 提示内容', placement: 'bottom-start'});
            new zui.Tooltip('#tooltipExp12', {title: 'bottom 提示内容', placement: 'bottom'});
            new zui.Tooltip('#tooltipExp13', {title: 'bottom-end 提示内容', placement: 'bottom-end'});
            new zui.Tooltip('#tooltipShow1', {title: 'primary 外观', type: 'primary'});
            new zui.Tooltip('#tooltipShow2', {title: 'secondary 外观', type: 'secondary'});
            new zui.Tooltip('#tooltipShow3', {title: 'warning 外观', type: 'warning'});
            new zui.Tooltip('#tooltipShow4', {title: 'success 外观', type: 'success'});
            new zui.Tooltip('#tooltipShow5', {title: 'danger 外观', type: 'danger'});
            new zui.Tooltip('#tooltipShow6', {title: 'important 外观', type: 'important'});
            new zui.Tooltip('#tooltipShow7', {title: 'white 外观', type: 'white', className: 'text-darker border border-light'});
        })
    },
}
</script>
