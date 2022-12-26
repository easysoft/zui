# 日期选择

日期选择插件可以帮助用户更方便准确的选择日期和时间。

## 基本用法

你需要手动在 `<input>` 元素上调用初始化函数，并通过配置来定制日期选择格式，然后就可以在浮层中可以选择日期。

<Example>
  <div class="input-control suffix-sm form-datetime w-40" id="datePicker1">
    <input type="text" class="form-control" placeholder="请选择日期"/>
    <span class="input-control-suffix"><i class="icon icon-time"></i></span>
  </div>
</Example>

```html
<div class="input-control suffix-sm form-datetime w-40" id="datePicker1">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>

<script>
new zui.Datepicker('#datePicker1', {
    onChange: (newDate) => {
        datePicker1.querySelector('.form-control').value = newDate;
    },
});
</script>
```

## 限制日期选择范围

使用 `minDate` 或 `maxDate` 属性，可以自定义日期选择范围；使用 `minYear` 或 `maxYear` 属性，可以自定义年份选择范围。

<Example class="flex gap-2">
  <div>
    <div>限制天数</div>
    <div class="input-control suffix-sm form-datetime w-40" id="datePicker2">
      <input type="text" class="form-control" placeholder="请选择日期"/>
      <span class="input-control-suffix"><i class="icon icon-time"></i></span>
    </div>
  </div>
</Example>

```html
<div>限制天数</div>
<div class="input-control suffix-sm form-datetime w-40" id="datePicker2">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>

<script>
const datePicker2 = document.getElementById('datePicker2');
new zui.Datepicker('#datePicker2', {
    minDate: '2022-12-02',
    maxDate: '2022-12-30',
    onChange: (newDate) => {
        datePicker2.querySelector('.form-control').value = newDate;
    },
});
</script>
```

## 高亮显示默认日期

使用 `date` 属性，高亮展示默认日期。

<Example>
  <div class="input-control suffix-sm form-datetime w-40" id="datePicker5">
    <input type="text" class="form-control" placeholder="请选择日期"/>
    <span class="input-control-suffix"><i class="icon icon-time"></i></span>
  </div>
</Example>

```html
<div class="input-control suffix-sm form-datetime w-40" id="datePicker5">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>

<script>
datePicker5.querySelector('.form-control').value = '2022-12-12';
new zui.Datepicker('#datePicker5', {
    date: '2022-12-12',
    format: 'YYYY-MM-DD',
    onChange: (newDate) => {
        datePicker5.querySelector('.form-control').value = newDate;
    },
});
</script>
```

## 是否展示其他月份

<Example>
  <div class="input-control suffix-sm form-datetime w-40" id="datePicker4">
    <input type="text" class="form-control" placeholder="请选择日期"/>
    <span class="input-control-suffix"><i class="icon icon-time"></i></span>
  </div>
</Example>

```html
<div class="input-control suffix-sm form-datetime w-40" id="datePicker4">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>

<script>
const datePicker4 = document.getElementById('datePicker4');
new zui.Datepicker('#datePicker4', {
    showOtherMonth: false,
    onChange: (newDate) => {
        datePicker4.querySelector('.form-control').value = newDate;
    },
});
</script>
``` 

## 日期格式

使用 `format` 属性，可以自定义日期显示格式。

<Example>
  <div class="input-control suffix-sm form-datetime w-40" id="datePicker7">
    <input type="text" class="form-control" placeholder="请选择日期"/>
    <span class="input-control-suffix"><i class="icon icon-time"></i></span>
  </div>
</Example>

```html
<div class="input-control suffix-sm form-datetime w-40" id="datePicker7">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>

<script>
const datePicker7 = document.getElementById('datePicker7');
new zui.Datepicker('#datePicker7', {
    date: '2022-12-12',
    showOtherMonth: false,
    onChange: (newDate) => {
        datePicker7.querySelector('.form-control').value = newDate;
    },
});
</script>
``` 

## 标记日期

<Example>
  <div class="input-control suffix-sm form-datetime w-40" id="datePicker6">
    <input type="text" class="form-control" placeholder="请选择日期"/>
    <span class="input-control-suffix"><i class="icon icon-time"></i></span>
  </div>
</Example>

```html
<div class="input-control suffix-sm form-datetime w-40" id="datePicker6">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>

<script>
const datePicker6 = document.getElementById('datePicker6');
new zui.Datepicker('#datePicker6', {
    tagDate: ['2022-12-24', '2022-12-25'],
    onChange: (newDate) => {
        datePicker6.querySelector('.form-control').value = newDate;
    },
});
</script>
```

## 弹出位置

可以通过 `placement` 手动指定弹出的位置。

<Example>
  <div id="btnGroupPlacement"></div>
  <div class="input-control suffix-sm form-datetime w-40 mt-4" id="datePicker8">
    <input type="text" class="form-control" placeholder="请选择日期"/>
    <span class="input-control-suffix"><i class="icon icon-time"></i></span>
  </div>
</Example>

```html
<script>
const datePicker8 = document.getElementById('datePicker8');
const datePickerComponent = new zui.Datepicker('#datePicker8', {
    placement: 'auto',
    onChange: (newDate) => {
        datePicker8.querySelector('.form-control').value = newDate;
    },
});
</script>
```

## 选项

### `date`

默认选中时间。

* 类型：`string`;
* 必选：否；
* 默认：当天。

### `format`

默认选中时间。

* 类型：`'YYYY-MM-DD' | 'YYYY-MM-DD HH:mm:ss | 'YYYY-MM-DD HH:mm:ss`;
* 必选：否；
* 默认：`'YYYY-MM-DD'`。

### `minDate`

限制可选择的最小日期，默认全部可选。

* 类型：`string`;
* 必选：否。

### `maxDate`

限制可选择的最大日期，默认全部可选。

* 类型：`string`;
* 必选：否。

### `tagDate`

标记某个日期。

* 类型：`string[]`;
* 必选：否。

### `showToday`

是否展示今天的按钮。

* 类型：`boolean`;
* 必选：否；
* 默认：`true`。

### `showOtherMonth`

是否展示其他月份日期。

* 类型：`boolean`;
* 必选：否；
* 默认：`true`。

### `className`

类名

* 类型：`string`;
* 必选：否。

### `arrow`

控制是否展示提示消息组件的箭头，也可控制其大小。

* 类型：`boolean | number`;
* 必选：否；
* 默认：`true`，大小为 5。

### `type`

时间选择器的类型。

* 类型：`string`;
* 必选：否。

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
            const datePicker1 = document.getElementById('datePicker1');
            new zui.Datepicker('#datePicker1', {
                onChange: (newDate) => {
                    datePicker1.querySelector('.form-control').value = newDate;
                },
            });
            const datePicker2 = document.getElementById('datePicker2');
            new zui.Datepicker('#datePicker2', {
                minDate: '2022-12-02',
                maxDate: '2022-12-30',
                onChange: (newDate) => {
                    datePicker2.querySelector('.form-control').value = newDate;
                },
            });
            const datePicker6 = document.getElementById('datePicker6');
            new zui.Datepicker('#datePicker6', {
                tagDate: ['2022-12-24', '2022-12-25'],
                onChange: (newDate) => {
                    datePicker6.querySelector('.form-control').value = newDate;
                },
            });
            const datePicker4 = document.getElementById('datePicker4');
            new zui.Datepicker('#datePicker4', {
                showOtherMonth: false,
                onChange: (newDate) => {
                    datePicker4.querySelector('.form-control').value = newDate;
                },
            });
            const datePicker5 = document.getElementById('datePicker5');
            datePicker5.querySelector('.form-control').value = '2022-12-12';
            new zui.Datepicker('#datePicker5', {
                date: '2022-12-12',
                format: 'YYYY-MM-DD',
                onChange: (newDate) => {
                    datePicker5.querySelector('.form-control').value = newDate;
                },
            });
            const datePicker7 = document.getElementById('datePicker7');
            datePicker7.querySelector('.form-control').value = '2022/12/12';
            new zui.Datepicker('#datePicker7', {
                date: '2022/12/12',
                format: 'YYYY/MM/DD',
                onChange: (newDate) => {
                    datePicker7.querySelector('.form-control').value = newDate;
                },
            });
            const datePicker8 = document.getElementById('datePicker8');
            const datePickerComponent = new zui.Datepicker('#datePicker8', {
                onChange: (newDate) => {
                    datePicker8.querySelector('.form-control').value = newDate;
                },
            });
            new zui.BtnGroup('#btnGroupPlacement', {
                items: [
                    {text: 'auto'},
                    {text: 'top-start'},
                    {text: 'top-end'},
                    {text: 'bottom-start'},
                    {text: 'bottom-end'},
                ],
                onClickItem: (info) => {
                    const fElement = info.event.target.closest('.btn-group');
                    const btns = fElement.querySelectorAll('.btn');
                    btns.forEach(element => {
                        element.classList.remove('primary');
                    });
                    info.event.target.classList.toggle('primary');
                    datePickerComponent.render({placement: info.item.text});
                },
            });
        })
    },
}
</script>
