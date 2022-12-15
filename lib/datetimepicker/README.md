# 日期选择

## 用法

```html:example:
<div class="input-control suffix-sm form-datetime w-40" id="datePicker1">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>
```

```js
const datePicker1 = document.getElementById('datePicker1');
new Datetimepicker('#datePicker1', {
    date: '2022-12-12',
    onChange: (newDate) => {
        datePicker1.querySelector('.form-control').value = newDate;
    },
});
``` 

## 禁用

```html:example:
<div class="input-control suffix-sm form-datetime w-40 disabled" id="datePicker2">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>
```

## 是否展示其他月份

```html:example:
<div class="input-control suffix-sm form-datetime w-40" id="datePicker3">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>
```

```js
const datePicker3 = document.getElementById('datePicker3');
new Datetimepicker('#datePicker3', {
    date: '2022-12-12',
    showOtherMonth: false,
    onChange: (newDate) => {
        datePicker3.querySelector('.form-control').value = newDate;
    },
});
``` 

## 限制日期选择范围

```html:example: -flex -gap-2
<div>
  <div>限制天数</div>
  <div class="input-control suffix-sm form-datetime w-40" id="datePicker4">
    <input type="text" class="form-control" placeholder="请选择日期"/>
    <span class="input-control-suffix"><i class="icon icon-time"></i></span>
  </div>
</div>
<div>
  <div>限制年份</div>
  <div class="input-control suffix-sm form-datetime w-40" id="datePicker5">
    <input type="text" class="form-control" placeholder="请选择日期"/>
    <span class="input-control-suffix"><i class="icon icon-time"></i></span>
  </div>
</div>
```

```js
const datePicker4 = document.getElementById('datePicker4');
new Datetimepicker('#datePicker4', {
    date: '2022-12-12',
    minDate: '2022-12-02',
    maxDate: '2022-12-30',
    onChange: (newDate) => {
        datePicker4.querySelector('.form-control').value = newDate;
    },
});
const datePicker5 = document.getElementById('datePicker5');
new Datetimepicker('#datePicker5', {
    date: '2022-12-12',
    minYear: 2020,
    maxYear: 2023,
    onChange: (newDate) => {
        datePicker5.querySelector('.form-control').value = newDate;
    },
});
``` 

## 标记日期

```html:example:
<div class="input-control suffix-sm form-datetime w-40" id="datePicker6">
  <input type="text" class="form-control" placeholder="请选择日期"/>
  <span class="input-control-suffix"><i class="icon icon-time"></i></span>
</div>
```

```js
const datePicker6 = document.getElementById('datePicker6');
new Datetimepicker('#datePicker6', {
    date: '2022-12-12',
    tagDate: ['2022-12-24', '2022-12-25'],
    onChange: (newDate) => {
        datePicker6.querySelector('.form-control').value = newDate;
    },
});
``` 


