# Input 输入框

## Input

```html:example: flex gap-3
<div class="input">
    <input type="text" placeholder="请填写" />
</div>
```

## Disabled

```html:example: flex gap-3
<div class="input">
    <input type="text" placeholder="请填写" disabled="disabled" />
</div>
```

## Sizes

```html:example: flex gap-3 items-end
<div class="input -xs">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -sm">
    <input type="text" placeholder="请填写" />
</div>
<div class="input">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -lg">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -xl">
    <input type="text" placeholder="请填写" />
</div>
```

## Prefix/Suffix

```html:example: flex gap-3
<div class="input -prefix">
    <input type="text" placeholder="请填写"/>
    <span class="input_prefix">pr<slot name="prefix"></slot></span>
</div>
<div class="input -suffix">
    <input type="text" placeholder="请填写"/>
    <span class="input_suffix">su<slot name="suffix"></slot></span>
</div>
<div class="input -prefix -suffix">
    <input type="text" placeholder="请填写"/>
    <span class="input_prefix">pr<slot name="prefix"></slot></span>
    <span class="input_suffix">su<slot name="suffix"></slot></span>
</div>
```

## Clearable

```html:example: flex gap-3
<div class="input -suffix -clearable" data-clearable="true" id="newInput">
    <input type="text" placeholder="请填写" />
    <span class="input_suffix" data-clear="true" id="clear">x</span>
</div>  
```

## Radius

```html:example: flex gap-3
<div class="input -rounded-none">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -rounded-sm">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -rounded">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -rounded-md">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -rounded-lg">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -rounded-xl">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -rounded-full">
    <input type="text" placeholder="请填写" />
</div>
```

## Shadow

```html:example: flex gap-3
<div class="input -shadow-none">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -shadow-xs">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -shadow-sm">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -shadow">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -shadow-lg">
    <input type="text" placeholder="请填写" />
</div>
<div class="input -shadow-xl">
    <input type="text" placeholder="请填写" />
</div>
```

## Prepend/Append

```html:example: flex gap-3
<div class="input -prepend">
    <div class="prepend">前</div>
    <input type="text" placeholder="请填写" />
</div>
<div class="input -append">
    <input type="text" placeholder="请填写" />
    <div class="append">后</div>
</div>
<div class="input -prepend -append">
    <div class="prepend">前</div>
    <input type="text" placeholder="请填写" />
    <div class="append">后</div>
</div>
```

