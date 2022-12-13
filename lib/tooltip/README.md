# 提示消息

提示消息又称“工具提示”，在用户鼠标悬停在元素上时及时显示额外的内容。

## 用法

使用组件类 `.btn` 来获得按钮外观，通常搭配 `<button>` 或 `<a>` 元素使用。

```html:example:
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
```

```js
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
```   

## 触发方式

```html:example:
<button type="button" class="btn" data-toggle="tooltip" id="tooltipClick">点击触发</button>
```

```js
new Tooltip('#tooltipClick', {title: '点击展示提示内容', trigger: 'click'});
``` 

## 外观

指定外观类型来更改颜色主题。

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="btn" data-toggle="tooltip" id="tooltipShow7">white</button>
<button type="button" class="btn primary" data-toggle="tooltip" id="tooltipShow1">primary</button>
<button type="button" class="btn secondary" data-toggle="tooltip" id="tooltipShow2">secondary</button>
<button type="button" class="btn warning" data-toggle="tooltip" id="tooltipShow3">warning</button>
<button type="button" class="btn success" data-toggle="tooltip" id="tooltipShow4">success</button>
<button type="button" class="btn danger" data-toggle="tooltip" id="tooltipShow5">danger</button>
<button type="button" class="btn important" data-toggle="tooltip" id="tooltipShow6">important</button>
```

```js
new Tooltip('#tooltipShow7', {title: 'white 外观', type: 'white',  className: 'text-darker border border-light'});
new Tooltip('#tooltipShow1', {title: 'primary 外观', type: 'primary'});
new Tooltip('#tooltipShow2', {title: 'secondary 外观', type: 'secondary'});
new Tooltip('#tooltipShow3', {title: 'warning 外观', type: 'warning'});
new Tooltip('#tooltipShow4', {title: 'success 外观', type: 'success'});
new Tooltip('#tooltipShow5', {title: 'danger 外观', type: 'danger'});
new Tooltip('#tooltipShow6', {title: 'important 外观', type: 'important'});
``` 
