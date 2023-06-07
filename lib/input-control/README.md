# 输入框

## 带图标

```html:example:row gap-3
<div class="input-control has-prefix-icon">
  <input id="inputAccountExample1" type="text" class="form-control" placeholder="用户名">
  <label for="inputAccountExample1" class="input-control-prefix"><i class="icon icon-user"></i></label>
</div>
<div class="input-control has-prefix-icon has-suffix-icon">
  <input id="inputEmailExample1" type="email" class="form-control" placeholder="Email">
  <label for="inputEmailExample1" class="input-control-prefix"><i class="icon icon-envelope"></i></label>
  <label for="inputEmailExample1" class="input-control-suffix"><i class="icon icon-check"></i></label>
</div>
<div class="input-control has-suffix-icon">
  <input id="inputPasswordExample1" type="password" class="form-control" placeholder="密码">
  <label for="inputPasswordExample1" class="input-control-suffix"><i class="icon icon-key"></i></label>
</div>
<div class="input-control has-suffix-icon">
  <input id="inputPasswordExample2" type="password" class="form-control" placeholder="禁用" disabled>
  <label for="inputPasswordExample2" class="input-control-suffix"><i class="icon icon-remove"></i></label>
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
  <label for="inputEmailExample2" class="input-control-suffix"><i class="icon icon-check"></i></label>
</div>
<div class="input-control has-prefix has-suffix">
  <input id="inputGiftExample2" type="text" class="form-control" placeholder="礼品码">
  <label for="inputGiftExample2" class="input-control-prefix"><i class="icon icon-gift"></i></label>
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
  <label for="inputEmailExample2" class="input-control-suffix"><i class="icon icon-check"></i></label>
</div>
<div class="input-control has-prefix-sm has-suffix-sm">
  <input id="inputGiftExample2" type="text" class="form-control" placeholder="礼品码">
  <label for="inputGiftExample2" class="input-control-prefix"><i class="icon icon-gift"></i></label>
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
  <label for="inputEmailExample2" class="input-control-suffix"><i class="icon icon-check"></i></label>
</div>
<div class="input-control has-prefix-lg has-suffix-lg">
  <input id="inputGiftExample2" type="text" class="form-control" placeholder="礼品码">
  <label for="inputGiftExample2" class="input-control-prefix"><i class="icon icon-gift"></i></label>
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
  <label for="inputEmailExample2" class="input-control-suffix"><i class="icon icon-check"></i></label>
</div>
<div class="input-control has-prefix has-suffix size-lg">
  <input id="inputGiftExample2" type="text" class="form-control" placeholder="礼品码">
  <label for="inputGiftExample2" class="input-control-prefix"><i class="icon icon-gift"></i></label>
  <label for="inputPasswordExample2" class="input-control-suffix text-right text-red">享 8 折</label>
</div>
```
