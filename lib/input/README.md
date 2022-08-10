# Input 输入框

## Input

```html:example: -flex -gap-3
<div class="input-control">
  <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -square-prefix -square-suffix">
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-prefix">pr</span>
  <span class="input-control-suffix">su</span>
</div>
<div class="input-control -prefix">
  <span class="input-control-prefix">用户名</span>
  <input type="text" class="form-control" placeholder="请填写"/>
</div>
<div class="input-control -prefix">
  <span class="input-control-prefix">登录密码</span>
  <input type="text" class="form-control" placeholder="请填写"/>
</div>

```

## Disabled

```html:example: -flex -gap-3
<div class="input-control">
  <input type="text" class="form-control" placeholder="请填写" disabled="disabled" />
</div>
```

## Sizes

```html:example: -flex -gap-3 -items-end
<div class="input-control">
  <input type="text" class="form-control -sm" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control -lg" placeholder="请填写" />
</div>
```

## Prefix/Suffix

```html:example: -flex -gap-3 flex-wrap
<div class="input-control -square-prefix">
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-prefix">pr</span>
</div>
<div class="input-control -square-suffix">
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-suffix">su</span>
</div>
<div class="input-control -square-prefix -square-suffix">
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-prefix">pr</span>
  <span class="input-control-suffix">su</span>
</div>
```

## Radius

```html:example: -flex -gap-3 flex-wrap
<div class="input-control">
  <input type="text" class="form-control -rounded-none" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control -rounded-sm" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control -rounded" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control -rounded-md" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control  -rounded-lg" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control -rounded-xl" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control -circle" placeholder="请填写" />
</div>
```

## Shadow

```html:example: -flex -gap-3 flex-wrap
<div class="input-control">
  <input type="text" class="form-control -sd-none" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control -sd-xs" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control -sd-sm" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control -sd" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control -sd-lg" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control -sd-xl" placeholder="请填写" />
</div>
```
