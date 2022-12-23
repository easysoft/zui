# 时间选择器

## 基本使用

<Example>
  <div class="input-control suffix-sm form-time w-40" id="timepickerExp">
    <input type="text" class="form-control" placeholder="请选择日期"/>
    <span class="input-control-suffix"><i class="icon icon-time"></i></span>
  </div>
</Example>

```html
<div class="input-control suffix-sm form-time w-40" id="timepickerExp">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>

<script>
const timepickerExp = document.getElementById('timepickerExp');
new zui.Timepicker('#timepickerExp', {
    onChange: (value) => {
        timepickerExp.querySelector('.form-control').value = value;
    },
});
</script>
```

## 选项

### `value`

默认选中时间。

* 类型：`string`;
* 必选：否；

### `showSeconds`

是否展示秒的一列。

* 类型：`boolean`;
* 必选：否；
* 默认：`false`。

### `className`

类名

* 类型：`string`;
* 必选：否。

### `arrow`

控制是否展示提示消息组件的箭头，也可控制其大小。

* 类型：`boolean | number`;
* 必选：否；
* 默认：`true`，大小为 5。

### `placement `

提示信息的弹出方向。

* 类型：`'string'`;
* 必选：否；
* 可选项：`'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' | 'right-start' | 'right' | 'right-end' | 'auto-start' | 'auto' | 'auto-end' `；
* 默认：`'top'`。

### `onChange`

时间选择器的类型。

* 类型：`function`;
* 必选：否。
* 参数：回调函数参数的更改后的时间值。

<script>
export default {
    mounted() {
        onZUIReady(() => {
            const timepickerExp = document.getElementById('timepickerExp');
            new zui.Timepicker('#timepickerExp', {
                onChange: (value) => {
                    timepickerExp.querySelector('.form-control').value = value;
                },
            });
        })
    },
}
</script>