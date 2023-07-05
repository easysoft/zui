# 日期时间选择器

## 日期选择器

<Example>
  <div id="datePickerExample"></div>
</Example>

```html
<div id="datePickerExample"></div>

<script>
const picker = new zui.Picker('#datePickerExample', {
});
</script>
```

## 时间选择器

<Example>
  <div id="timePickerExample"></div>
</Example>

```html
<div id="timePickerExample"></div>

<script>
const picker = new zui.Picker('#timePickerExample', {
});
</script>
```

## 日期时间选择器

<Example>
  <div id="datetimePickerExample"></div>
</Example>

```html
<div id="datetimePickerExample"></div>

<script>
const picker = new zui.Picker('#datetimePickerExample', {
});
</script>
```

<script setup>
import {onMounted} from 'vue';

onMounted(() => {
    onZUIReady(() => {
    });
});
</script>
