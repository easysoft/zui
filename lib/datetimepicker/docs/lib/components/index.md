# 日期选择

日期选择插件可以帮助用户更方便准确的选择日期和时间。

## 基本用法

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
new zui.Datetimepicker('#datePicker1', {
    date: '2022-12-12',
    format: 'YYYY-MM-DD',
    onChange: (newDate) => {
        datePicker1.querySelector('.form-control').value = newDate;
    },
});
</script>
```

## 限制日期选择范围

<Example class="flex gap-2">
  <div>
    <div>限制天数</div>
    <div class="input-control suffix-sm form-datetime w-40" id="datePicker2">
      <input type="text" class="form-control" placeholder="请选择日期"/>
      <span class="input-control-suffix"><i class="icon icon-time"></i></span>
    </div>
  </div>
  <div>
    <div>限制年份</div>
    <div class="input-control suffix-sm form-datetime w-40" id="datePicker3">
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
<div>
  <div>限制年份</div>
  <div class="input-control suffix-sm form-datetime w-40" id="datePicker3">
    <input type="text" class="form-control" placeholder="请选择日期"/>
    <span class="input-control-suffix"><i class="icon icon-time"></i></span>
  </div>
</div>

<script>
const datePicker2 = document.getElementById('datePicker2');
new zui.Datetimepicker('#datePicker2', {
    date: '2022-12-12',
    format: 'YYYY-MM-DD',
    minDate: '2022-12-02',
    maxDate: '2022-12-30',
    onChange: (newDate) => {
        datePicker2.querySelector('.form-control').value = newDate;
    },
});
const datePicker3 = document.getElementById('datePicker3');
new zui.Datetimepicker('#datePicker3', {
    date: '2022-12-12',
    minYear: 2020,
    maxYear: 2023,
    onChange: (newDate) => {
        datePicker3.querySelector('.form-control').value = newDate;
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
new zui.Datetimepicker('#datePicker4', {
    date: '2022-12-12',
    showOtherMonth: false,
    onChange: (newDate) => {
        datePicker4.querySelector('.form-control').value = newDate;
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
new zui.Datetimepicker('#datePicker6', {
    date: '2022-12-12',
    tagDate: ['2022-12-24', '2022-12-25'],
    onChange: (newDate) => {
        datePicker6.querySelector('.form-control').value = newDate;
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


### `autoClose`

限制可否自动关闭。

* 类型：`boolean`;
* 必选：否；
* 默认：`true`。

### `minYear`

限制可选择的最小年份，默认全部可选。

* 类型：`number`;
* 必选：否。

### `maxYear`

限制可选择的最大年份，默认全部可选。

* 类型：`number`;
* 必选：否。

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
            new zui.Datetimepicker('#datePicker1', {
                date: '2022-12-12',
                format: 'YYYY-MM-DD',
                onChange: (newDate) => {
                    datePicker1.querySelector('.form-control').value = newDate;
                },
            });
            const datePicker2 = document.getElementById('datePicker2');
            new zui.Datetimepicker('#datePicker2', {
                date: '2022-12-12',
                format: 'YYYY-MM-DD',
                minDate: '2022-12-02',
                maxDate: '2022-12-30',
                onChange: (newDate) => {
                    datePicker2.querySelector('.form-control').value = newDate;
                },
            });
            const datePicker3 = document.getElementById('datePicker3');
            new zui.Datetimepicker('#datePicker3', {
                date: '2022-12-12',
                minYear: 2020,
                maxYear: 2023,
                onChange: (newDate) => {
                    datePicker3.querySelector('.form-control').value = newDate;
                },
            });
            const datePicker6 = document.getElementById('datePicker6');
            new zui.Datetimepicker('#datePicker6', {
                date: '2022-12-12',
                tagDate: ['2022-12-24', '2022-12-25'],
                onChange: (newDate) => {
                    datePicker6.querySelector('.form-control').value = newDate;
                },
            });
            const datePicker4 = document.getElementById('datePicker4');
            new zui.Datetimepicker('#datePicker4', {
                date: '2022-12-12',
                showOtherMonth: false,
                onChange: (newDate) => {
                    datePicker4.querySelector('.form-control').value = newDate;
                },
            });
        })
    },
}
</script>
