# Input 输入框

## Input

```html:example: flex gap-3
<div class="input-control">
  <input type="text" class="form-control" placeholder="请填写" />
</div>
<div class="input-control prefix-sm suffix-sm">
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-prefix"><i class="icon icon-lock"></i></span>
  <span class="input-control-suffix"><i class="icon icon-eye-open"></i></span>
</div>
<div class="input-control prefix">
  <span class="input-control-prefix">用户名</span>
  <input type="text" class="form-control" placeholder="请填写"/>
</div>
<div class="input-control prefix">
  <span class="input-control-prefix">邮箱</span>
  <input type="text" class="form-control" placeholder="请填写"/>
</div>

```

## Disabled

```html:example: flex gap-3
<div class="input-control">
  <input type="text" class="form-control" placeholder="请填写" disabled="disabled" />
</div>
```

## Sizes

```html:example: col gap-2
<div class="flex gap-2">
  <p class="w-36">基本用法</p>
  <div class="col gap-2">
    <div class="input-control w-96">
      <input type="text" class="form-control size-sm" placeholder="请填写" />
    </div>
    <div class="input-control w-96">
      <input type="text" class="form-control" placeholder="请填写" />
    </div>
    <div class="input-control w-96">
      <input type="text" class="form-control size-lg" placeholder="请填写" />
    </div>
  </div>
</div>
<div class="flex gap-2">
  <p class="w-36">小号尺寸前后缀</p>
  <div class="col gap-2">
    <div class="input-control size-sm prefix-sm w-96">
      <span class="input-control-prefix"><i class="icon icon-user"></i></span>
      <input type="text" class="form-control size-sm" placeholder="请填写"/>
    </div>
    <div class="input-control size-sm prefix w-96">
      <span class="input-control-prefix">用户名</span>
      <input type="text" class="form-control size-sm" placeholder="请填写"/>
    </div>
    <div class="input-control size-sm prefix-lg w-96">
      <span class="input-control-prefix">有效身份证号</span>
      <input type="text" class="form-control size-sm" placeholder="请填写"/>
    </div>
  </div>
</div>

<div class="flex gap-2">
  <p class="w-36">默认尺寸前后缀</p>
  <div class="col gap-2">
    <div class="input-control prefix-sm w-96">
      <span class="input-control-prefix"><i class="icon icon-user"></i></span>
      <input type="text" class="form-control" placeholder="请填写"/>
    </div>
    <div class="input-control prefix w-96">
      <span class="input-control-prefix">用户名</span>
      <input type="text" class="form-control" placeholder="请填写"/>
    </div>
      <div class="input-control prefix-lg w-96">
      <span class="input-control-prefix">有效身份证号</span>
      <input type="text" class="form-control" placeholder="请填写"/>
    </div>
  </div>
</div>

<div class="flex gap-2">
  <p class="w-36">大号尺寸前后缀</p>
  <div class="col gap-2">
    <div class="input-control size-lg prefix-sm w-96">
      <span class="input-control-prefix"><i class="icon icon-user"></i></span>
      <input type="text" class="form-control size-lg" placeholder="请填写"/>
    </div>
    <div class="input-control size-lg prefix w-96">
      <span class="input-control-prefix">用户名</span>
      <input type="text" class="form-control size-lg" placeholder="请填写"/>
    </div>
    <div class="input-control size-lg prefix-lg w-96">
      <span class="input-control-prefix">有效身份证号</span>
      <input type="text" class="form-control size-lg" placeholder="请填写"/>
    </div>
  </div>
</div>

```

## Prefix/Suffix

```html:example: flex gap-3 flex-wrap
<div class="input-control prefix-sm">
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-prefix"><i class="icon icon-user"></i></span>
</div>
<div class="input-control suffix-sm">
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-suffix"><i class="icon icon-search"></i></span>
</div>
<div class="input-control prefix-sm suffix-sm">
  <span class="input-control-prefix"><i class="icon icon-user"></i></span>
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-suffix"><i class="icon icon-search"></i></span>
</div>
<div class="input-control prefix suffix">
  <span class="input-control-prefix">用户名</span>
  <input type="text" class="form-control" placeholder="请填写"/>
  <span class="input-control-suffix"><i class="icon icon-eye-open"></i></span>
</div>
<div class="input-control prefix-lg">
  <span class="input-control-prefix">有效身份证号码</span>
  <input type="text" class="form-control" placeholder="请填写"/>
</div>
```

## Radius

```html:example: flex gap-3 flex-wrap
<div class="input-control">
  <input type="text" class="form-control rounded-none" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control rounded-sm" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control rounded" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control rounded-md" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control  rounded-lg" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control rounded-xl" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control circle" placeholder="请填写" />
</div>
```

## Shadow

```html:example: flex gap-3 flex-wrap
<div class="input-control">
  <input type="text" class="form-control shadow-none" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control shadow-xs" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control shadow-sm" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control shadow" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control shadow-lg" placeholder="请填写" />
</div>
<div class="input-control">
  <input type="text" class="form-control shadow-xl" placeholder="请填写" />
</div>
```
