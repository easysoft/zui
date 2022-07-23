# Input 输入框

## Input

```html:example: flex gap-3
<div class="input-control">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
```

## Disabled

```html:example: flex gap-3
<div class="input-control">
    <input type="text" class="form-control" placeholder="请填写" disabled="disabled" />
</div>
```

## Sizes

```html:example: flex gap-3 items-end
<div class="input-control -xs">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -sm">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -lg">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -xl">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
```

## Prefix/Suffix

```html:example: flex gap-3 flex-wrap
<div class="input-control -prefix">
    <input type="text" class="form-control" placeholder="请填写"/>
    <span class="input-control_prefix">pr<slot name="prefix"></slot></span>
</div>
<div class="input-control -suffix">
    <input type="text" class="form-control" placeholder="请填写"/>
    <span class="input-control_suffix">su<slot name="suffix"></slot></span>
</div>
<div class="input-control -prefix -suffix">
    <input type="text" class="form-control" placeholder="请填写"/>
    <span class="input-control_prefix">pr<slot name="prefix"></slot></span>
    <span class="input-control_suffix">su<slot name="suffix"></slot></span>
</div>
```

## Radius

```html:example: flex gap-3 flex-wrap
<div class="input-control -rounded-none">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -rounded-sm">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -rounded">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -rounded-md">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -rounded-lg">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -rounded-xl">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -rounded-full">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
```

## Shadow

```html:example: flex gap-3 flex-wrap
<div class="input-control -shadow-none">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -shadow-xs">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -shadow-sm">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -shadow">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -shadow-lg">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control -shadow-xl">
    <input type="text" class="form-control" placeholder="请填写" />
</div>
```
