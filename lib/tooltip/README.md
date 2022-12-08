# 提示消息

提示消息又称“工具提示”，在用户鼠标悬停在元素上时及时显示额外的内容。

## 用法

使用组件类 `.btn` 来获得按钮外观，通常搭配 `<button>` 或 `<a>` 元素使用。

```html:example:
<button type="button" class="btn" data-toggle="tooltip" id="tooltipExp1">提示消息</button>
```

## 触发方式

```html:example:
<button type="button" class="btn" data-toggle="tooltip" id="tooltipClick">点击触发</button>
```

## 弹出方向

使用 `placement` 选项来指定工具提示相对于元素显示的位置。

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="btn" data-toggle="tooltip" id="tooltipExp2">左侧提示</button>
<button type="button" class="btn" data-toggle="tooltip" id="tooltipExp3">上侧提示</button>
<button type="button" class="btn" data-toggle="tooltip" id="tooltipExp4">下侧提示</button>
<button type="button" class="btn" data-toggle="tooltip" id="tooltipExp5">右侧提示</button>
```

## 外观

指定外观类型来更改颜色主题。

```html:example: -flex -gap-3 -flex-wrap
<button type="button" class="btn primary" data-toggle="tooltip" id="tooltipShow1">primary</button>
<button type="button" class="btn secondary" data-toggle="tooltip" id="tooltipShow2">secondary</button>
<button type="button" class="btn warning" data-toggle="tooltip" id="tooltipShow3">warning</button>
<button type="button" class="btn success" data-toggle="tooltip" id="tooltipShow4">success</button>
<button type="button" class="btn danger" data-toggle="tooltip" id="tooltipShow5">danger</button>
<button type="button" class="btn important" data-toggle="tooltip" id="tooltipShow6">important</button>
```
