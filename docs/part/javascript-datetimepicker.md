section: javascript
id: datetimepicker
description: 为文本框提供方便的日期时间选择功能
icon: icon-calendar
filter: riqixuanze rqxz
---

# 日期选择

日期选择插件可以帮助用户更方便准确的选择日期和时间。

在ZUI中包含的日期选择控件基于开源项目 [DateTime Picker](http://www.malot.fr/bootstrap-datetimepicker/) 定制开发。

## 日期选择

<div class="example">
  <input type="text" class="form-control form-date" placeholder="选择或者输入一个日期：yyyy-MM-dd">
</div>

## 时间选择

<div class="example">
  <input type="text" class="form-control form-time" placeholder="选择或者输入一个时间：hh:mm">
</div>

## 日期+时间选择

<div class="example">
  <input type="text" class="form-control form-datetime" placeholder="选择或者输入一个日期+时间：yyyy-MM-dd hh:mm">
</div>

## 禁用输入

只允许用户选择一个日期或时间，而不允许自行编辑日期，只需要给`input`加上`readonly`属性。

<div class="example">
  <div class="row">
    <div class="col-md-4"><input type="text" class="form-control form-date" placeholder="选择或者输入一个日期：yyyy-MM-dd" readonly=""></div>
    <div class="col-md-4"><input type="text" class="form-control form-time" placeholder="选择或者输入一个时间：hh:mm" readonly=""></div>
    <div class="col-md-4"><input type="text" class="form-control form-datetime" placeholder="选择或者输入一个日期+时间：yyyy-MM-dd hh:mm" readonly=""></div>
  </div>
</div>

## 使用输入框组

输入框组可以添加额外的按钮来操作日期选择插件。

按钮中的`.icon-remove`用来移除输入的日期。`.icon-th`,`.icon-calendar`,`.icon-time`用来激活日期选择框。

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

## 用法

```
// 选择时间和日期
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

// 仅选择日期
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

// 选择时间
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

<script>
function afterPageLoad() {
    $.getScript('/dist/lib/datetimepicker/datetimepicker.min.js', function() {
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
