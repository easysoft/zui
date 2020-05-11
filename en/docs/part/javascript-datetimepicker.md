section: javascript
id: datetimepicker
description: Provide convenient date and time for text boxes
icon: icon-calendar
filter: riqixuanze rqxz
---

# Datetimepicker

Datetimepicker plugin helps users choose date and time more conveniently and accurately.

ZUI datetimepicker control is based on the open source project [DateTime Picker](http://www.malot.fr/bootstrap-datetimepicker/) and is customized.

## Usage and examples

Datetimepicker plugin is a separate component. You need to introduce resources in lib/ from local or CDN:

```html
<link href="lib/datetimepicker/datetimepicker.min.css" rel="stylesheet">
<script src="lib/datetimepicker/datetimepicker.min.js"></script>
```

You need to call the initialization function on `<input>`, and customize the datetimepicker range and format through configuration. All available configurations can be found in [DateTime Picker](http://www.malot.fr/bootstrap-datetimepicker/).

### Date picker

<div class="example">
  <input type="text" class="form-control form-date" placeholder="Select or enter a date: yyyy-MM-dd">
</div>

```html
<input type="text" class="form-control form-date" placeholder="Select or enter a date: yyyy-MM-dd">
```

```js
// Select date only
$(".form-date").datetimepicker(
{
    language:  "zh-CN",
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    format: "yyyy-mm-dd"
});
```

### Time picker

<div class="example">
  <input type="text" class="form-control form-time" placeholder="Select or enter time: hh:mm">
</div>

```html
<input type="text" class="form-control form-time" placeholder="Select or enter time: hh:mm">
```

```js
// select time
$(".form-time").datetimepicker({
    language:  "zh-CN",
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 1,
    minView: 0,
    maxView: 1,
    forceParse: 0,
    format: 'hh:ii'
});
```

### Date Time Picker

<div class="example">
  <input type="text" class="form-control form-datetime" placeholder="Select or enter date and time: yyyy-MM-dd hh:mm">
</div>

```html
<input type="text" class="form-control form-datetime" placeholder="Select or enter date and time: yyyy-MM-dd hh:mm">
```

```js
// Choose time and date
$(".form-datetime").datetimepicker(
{
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    showMeridian: 1,
    format: "yyyy-mm-dd hh:ii"
});
```

## Disable input

Users can either select a date or time. It is not allowed to edit the date manually. Add `readonly` to `input`.

<div class="example">
  <div class="row">
    <div class="col-md-4"><input type="text" class="form-control form-date" placeholder="Select or enter a date: yyyy-MM-dd" readonly="readonly"></div>
    <div class="col-md-4"><input type="text" class="form-control form-time" placeholder="Select or enter time: hh:mm" readonly="readonly"></div>
    <div class="col-md-4"><input type="text" class="form-control form-datetime" placeholder="Select or enter a date and time: yyyy-MM-dd hh:mm" readonly="readonly"></div>
  </div>
</div>

```html
<input type="text" class="form-control form-date" placeholder="Select or enter a date: yyyy-MM-dd" readonly="readonly">
```

```html
<input type="text" class="form-control form-time" placeholder="Select or enter a time: hh:mm" readonly="readonly">
```

```html
<input type="text" class="form-control form-datetime" placeholder="Select or enter a date and time: yyyy-MM-dd hh:mm" readonly="readonly">
```

## Use input group

Input group can be added with additional buttons to enable the datetimepicker plugin.

`.icon-remove` in the button is used to remove the date entered. `.icon-th`, `.icon-calendar`, and `.icon-time` is used to activate the calendar.

<div class="example">
  <div class="row">
    <div class="col-md-4">
      <div class="input-group date form-datetime" data-date="1979-09-16T05:25:07Z" data-date-format="dd MM yyyy - HH:ii p" data-link-field="dtp_input1">
        <input class="form-control" size="16" type="text" value="" readonly="">
        <span class="input-group-addon"><span class="icon-remove"></span></span>
        <span class="input-group-addon"><span class="icon-th"></span></span>
      </div>
    </div>
    <div class="col-md-4">
      <div class="input-group date form-date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
        <input class="form-control" size="16" type="text" value="" readonly="">
        <span class="input-group-addon"><span class="icon-remove"></span></span>
        <span class="input-group-addon"><span class="icon-calendar"></span></span>
      </div>
    </div>
    <div class="col-md-4">
      <div class="input-group date form-time" data-date="" data-date-format="hh:ii" data-link-field="dtp_input3" data-link-format="hh:ii">
        <input class="form-control" size="16" type="text" value="" readonly="">
        <span class="input-group-addon"><span class="icon-remove"></span></span>
        <span class="input-group-addon"><span class="icon-time"></span></span>
      </div>
    </div>
  </div>
</div>

```html
<div class="input-group date form-datetime" data-date="1979-09-16T05:25:07Z" data-date-format="dd MM yyyy - HH:ii p" data-link-field="dtp_input1">
  <input class="form-control" size="16" type="text" value="" readonly="">
  <span class="input-group-addon"><span class="icon-remove"></span></span>
  <span class="input-group-addon"><span class="icon-th"></span></span>
</div>
```

```js
// Choose time and date
$(".form-datetime").datetimepicker(
{
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    forceParse: 0,
    showMeridian: 1,
    format: "yyyy-mm-dd hh:ii"
});
```

```html
<div class="input-group date form-date" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
  <input class="form-control" size="16" type="text" value="" readonly="">
  <span class="input-group-addon"><span class="icon-remove"></span></span>
  <span class="input-group-addon"><span class="icon-calendar"></span></span>
</div>
```

```js
// Select date only
$(".form-date").datetimepicker(
{
    language:  "zh-CN",
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    format: "yyyy-mm-dd"
});
```

```html
<div class="input-group date form-time" data-date="" data-date-format="hh:ii" data-link-field="dtp_input3" data-link-format="hh:ii">
  <input class="form-control" size="16" type="text" value="" readonly="">
  <span class="input-group-addon"><span class="icon-remove"></span></span>
  <span class="input-group-addon"><span class="icon-time"></span></span>
</div>
```

```js
// select time
$(".form-time").datetimepicker({
    language:  "zh-CN",
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 1,
    minView: 0,
    maxView: 1,
    forceParse: 0,
    format: 'hh:ii'
});
```

<link rel="stylesheet" href="dist/lib/datetimepicker/datetimepicker.min.css">
<script>
function onPageClose() {
    if($.fn.datetimepicker) $('#pageBody').find('.form-date,.form-datetime,.form-time').datetimepicker('remove');
}
function onPageLoad() {
    onPageClose();
}
function afterPageLoad() {
    $.getScript('dist/lib/datetimepicker/datetimepicker.min.js', function() {
        if($.fn.datetimepicker) {
            $('#pageBody .form-datetime').datetimepicker({
                weekStart: 1,
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                forceParse: 0,
                showMeridian: 1,
                format: 'yyyy-mm-dd hh:ii'
            });
            $('#pageBody .form-date').datetimepicker({
                language:  'zh-CN',
                weekStart: 1,
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 2,
                minView: 2,
                forceParse: 0,
                format: 'yyyy-mm-dd'
            });
            $('#pageBody .form-time').datetimepicker({
                language:  'zh-CN',
                weekStart: 1,
                todayBtn:  1,
                autoclose: 1,
                todayHighlight: 1,
                startView: 1,
                minView: 0,
                maxView: 1,
                forceParse: 0,
                format: 'hh:ii'
            });
        }
    });
}
</script>
