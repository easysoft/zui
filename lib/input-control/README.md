# 输入框

## 带图标

```html:example:row gap-3
<div class="input-control has-prefix-icon">
  <input id="inputAccountExample1" type="text" class="form-control" placeholder="用户名">
  <label for="inputAccountExample1" class="input-control-prefix"><i class="example-icon example-icon-user" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M8%207a4%204%200%201%200%208%200%204%204%200%201%200-8%200M4%2021v-3c0-6%2016-6%2016%200v3z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></label>
</div>
<div class="input-control has-prefix-icon has-suffix-icon">
  <input id="inputEmailExample1" type="email" class="form-control" placeholder="Email">
  <label for="inputEmailExample1" class="input-control-prefix"><i class="example-icon example-icon-envelope" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M2%204h20v16H2zM2%204l10%209L22%204%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></label>
  <label for="inputEmailExample1" class="input-control-suffix"><i class="i-check"></i></label>
</div>
<div class="input-control has-suffix-icon">
  <input id="inputPasswordExample1" type="password" class="form-control" placeholder="密码">
  <label for="inputPasswordExample1" class="input-control-suffix"><i class="example-icon example-icon-key" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%208a5%205%200%201%200%2010%200%205%205%200%201%200-10%200M12%2012l9%209m-3-3%203-3m-6%200%203-3%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></label>
</div>
<div class="input-control has-suffix-icon">
  <input id="inputPasswordExample2" type="password" class="form-control" placeholder="禁用" disabled>
  <label for="inputPasswordExample2" class="input-control-suffix"><i class="close"></i></label>
</div>
```

## 带标签

### `has-prefix` `has-suffix`

```html:example:row gap-3
<div class="input-control has-prefix">
  <input id="inputAccountExample2" type="text" class="form-control" placeholder="">
  <label for="inputAccountExample2" class="input-control-prefix">用户名:</label>
</div>
<div class="input-control has-prefix has-suffix">
  <input id="inputEmailExample2" type="email" class="form-control" placeholder="">
  <label for="inputEmailExample2" class="input-control-prefix">邮箱:</label>
  <label for="inputEmailExample2" class="input-control-suffix"><i class="i-check"></i></label>
</div>
<div class="input-control has-prefix has-suffix">
  <input id="inputGiftExample2" type="text" class="form-control" placeholder="礼品码">
  <label for="inputGiftExample2" class="input-control-prefix"><i class="example-icon example-icon-gift" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%209h18v4H3zM5%2013v9h14v-9M12%209v13M12%209C0%209%207-4%2012%209c12%200%205-13%200%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></label>
  <label for="inputPasswordExample2" class="input-control-suffix text-right text-red">享 8 折</label>
</div>
<div class="input-control has-prefix has-suffix">
  <input id="inputPasswordExample2" type="password" class="form-control" placeholder="">
  <label for="inputPasswordExample2" class="input-control-prefix">密码:</label>
  <label for="inputPasswordExample2" class="input-control-suffix text-right text-success">安全!!!</label>
</div>
```

### `has-prefix-sm` `has-suffix-sm`

```html:example:row gap-3
<div class="input-control has-prefix-sm">
  <input id="inputAccountExample2" type="text" class="form-control" placeholder="">
  <label for="inputAccountExample2" class="input-control-prefix">用户名:</label>
</div>
<div class="input-control has-prefix-sm has-suffix-sm">
  <input id="inputEmailExample2" type="email" class="form-control" placeholder="">
  <label for="inputEmailExample2" class="input-control-prefix">邮箱:</label>
  <label for="inputEmailExample2" class="input-control-suffix"><i class="i-check"></i></label>
</div>
<div class="input-control has-prefix-sm has-suffix-sm">
  <input id="inputGiftExample2" type="text" class="form-control" placeholder="礼品码">
  <label for="inputGiftExample2" class="input-control-prefix"><i class="example-icon example-icon-gift" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%209h18v4H3zM5%2013v9h14v-9M12%209v13M12%209C0%209%207-4%2012%209c12%200%205-13%200%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></label>
  <label for="inputPasswordExample2" class="input-control-suffix text-right text-red">享 8 折</label>
</div>
<div class="input-control has-prefix-sm has-suffix-sm">
  <input id="inputPasswordExample2" type="password" class="form-control" placeholder="">
  <label for="inputPasswordExample2" class="input-control-prefix">密码:</label>
  <label for="inputPasswordExample2" class="input-control-suffix text-right text-success">安全!!!</label>
</div>
```

### `has-prefix-lg` `has-suffix-lg`

```html:example:row gap-3
<div class="input-control has-prefix-lg">
  <input id="inputAccountExample2" type="text" class="form-control" placeholder="">
  <label for="inputAccountExample2" class="input-control-prefix">用户名:</label>
</div>
<div class="input-control has-prefix-lg has-suffix-lg">
  <input id="inputEmailExample2" type="email" class="form-control" placeholder="">
  <label for="inputEmailExample2" class="input-control-prefix">邮箱:</label>
  <label for="inputEmailExample2" class="input-control-suffix"><i class="i-check"></i></label>
</div>
<div class="input-control has-prefix-lg has-suffix-lg">
  <input id="inputGiftExample2" type="text" class="form-control" placeholder="礼品码">
  <label for="inputGiftExample2" class="input-control-prefix"><i class="example-icon example-icon-gift" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%209h18v4H3zM5%2013v9h14v-9M12%209v13M12%209C0%209%207-4%2012%209c12%200%205-13%200%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></label>
  <label for="inputPasswordExample2" class="input-control-suffix text-right text-red">享 8 折</label>
</div>
<div class="input-control has-prefix-lg has-suffix-lg">
  <input id="inputPasswordExample2" type="password" class="form-control" placeholder="">
  <label for="inputPasswordExample2" class="input-control-prefix">密码:</label>
  <label for="inputPasswordExample2" class="input-control-suffix text-right text-success">安全!!!</label>
</div>
```


### `size-*`

```html:example:row gap-3
<div class="input-control has-prefix has-suffix size-sm">
  <input id="inputAccountExample2" type="text" class="form-control" placeholder="">
  <label for="inputAccountExample2" class="input-control-prefix">用户名:</label>
</div>
<div class="input-control has-prefix has-suffix">
  <input id="inputEmailExample2" type="email" class="form-control" placeholder="">
  <label for="inputEmailExample2" class="input-control-prefix">邮箱:</label>
  <label for="inputEmailExample2" class="input-control-suffix"><i class="i-check"></i></label>
</div>
<div class="input-control has-prefix has-suffix size-lg">
  <input id="inputGiftExample2" type="text" class="form-control" placeholder="礼品码">
  <label for="inputGiftExample2" class="input-control-prefix"><i class="example-icon example-icon-gift" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M3%209h18v4H3zM5%2013v9h14v-9M12%209v13M12%209C0%209%207-4%2012%209c12%200%205-13%200%200%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></i></label>
  <label for="inputPasswordExample2" class="input-control-suffix text-right text-red">享 8 折</label>
</div>
```
