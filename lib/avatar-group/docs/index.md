# 头像组

头像组是头像组合展现形式。

## 基本用法

使用 `.avatar-group` 类获得头像组合展示。

<Example class="flex gap-4">
  <div class="avatar-group">
    <div class="avatar"><img src="./img/avatar.png"></div>
    <div class="avatar  -success">头像</div>
    <div class="avatar -warning">Z</div>
  </div>
</Example>

```html
<div class="avatar-group ">
  <div class="avatar"><img src="./img/avatar.png"></div>
  <div class="avatar  -success">头像</div>
  <div class="avatar -warning">Z</div>
</div>
```

## 方形头像组

当与修饰类 `-square` 一起使用时则获得方形头像组。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="avatar-group">
    <div class="avatar -square"><img src="./img/avatar.png"></div>
    <div class="avatar  -success -square">头像</div>
    <div class="avatar -warning -square">Z</div>
  </div>
</Example>

```html
<div class="avatar-group">
  <div class="avatar -square"><img src="./img/avatar.png"></div>
  <div class="avatar  -success -square">头像</div>
  <div class="avatar -warning -square">Z</div>
</div>
```

## 外观类型

配合使用[CSS 工具类](/lib/utilities/)来实现不同头像的外观。下面展示各种工具类的外观效果。

### 描边头像组

搭配 CSS 工具类 `-outline` 和 `-*-outline` 展示描边头像组。

<Example class="flex gap-4 flex-wrap items-end">
<div class="avatar-group -outline">
  <div class="avatar -rounded-full -primary-outline">孙</div>
  <div class="avatar -rounded-full -secondary-outline">李</div>
  <div class="avatar -rounded-full -success-outline">周</div>
</div>
</Example>

```html
<div class="avatar-group -outline">
  <div class="avatar -rounded-full -primary-outline">孙</div>
  <div class="avatar -rounded-full -secondary-outline">李</div>
  <div class="avatar -rounded-full -success-outline">周</div>
</div>
```

### 头像组圆角

搭配 CSS 工具类 `-rounded-*` 为头像组应用不同的圆角样式。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="avatar-group">
    <div class="avatar -rounded-none"><img src="./img/avatar.png"></div>
    <div class="avatar -success -rounded-none">头像</div>
    <div class="avatar -warning -rounded-none">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -rounded-sm"><img src="./img/avatar.png"></div>
    <div class="avatar -success -rounded-sm">头像</div>
    <div class="avatar -warning -rounded-sm">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -rounded"><img src="./img/avatar.png"></div>
    <div class="avatar -success -rounded">头像</div>
    <div class="avatar -warning -rounded">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -rounded-md"><img src="./img/avatar.png"></div>
    <div class="avatar -success -rounded-md">头像</div>
    <div class="avatar -warning -rounded-md">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -rounded-lg"><img src="./img/avatar.png"></div>
    <div class="avatar -success -rounded-lg">头像</div>
    <div class="avatar -warning -rounded-lg">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -rounded-xl"><img src="./img/avatar.png"></div>
    <div class="avatar -success -rounded-xl">头像</div>
    <div class="avatar -warning -rounded-xl">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -rounded-full"><img src="./img/avatar.png"></div>
    <div class="avatar -success -rounded-full">头像</div>
    <div class="avatar -warning -rounded-full">Z</div>
  </div>
  <div class="avatar-group -show-rounded-none">
    <div class="avatar"><img src="./img/avatar.png"></div>
    <div class="avatar -success">头像</div>
    <div class="avatar -warning">Z</div>
  </div>
  <div class="avatar-group -show-rounded-sm">
    <div class="avatar"><img src="./img/avatar.png"></div>
    <div class="avatar -success">头像</div>
    <div class="avatar -warning">Z</div>
  </div>
  <div class="avatar-group -show-rounded">
    <div class="avatar"><img src="./img/avatar.png"></div>
    <div class="avatar -success">头像</div>
    <div class="avatar -warning">Z</div>
  </div>
  <div class="avatar-group -show-rounded-md">
    <div class="avatar"><img src="./img/avatar.png"></div>
    <div class="avatar -success">头像</div>
    <div class="avatar -warning">Z</div>
  </div>
  <div class="avatar-group -show-rounded-lg">
    <div class="avatar"><img src="./img/avatar.png"></div>
    <div class="avatar -success">头像</div>
    <div class="avatar -warning">Z</div>
  </div>
  <div class="avatar-group -show-rounded-xl">
    <div class="avatar"><img src="./img/avatar.png"></div>
    <div class="avatar -success">头像</div>
    <div class="avatar -warning">Z</div>
  </div>
  <div class="avatar-group -show-rounded-full">
    <div class="avatar"><img src="./img/avatar.png"></div>
    <div class="avatar -success">头像</div>
    <div class="avatar -warning">Z</div>
  </div>
</Example>

```html
<div class="avatar-group">
  <div class="avatar -rounded-none"><img src="./img/avatar.png"></div>
  <div class="avatar -success -rounded-none">头像</div>
  <div class="avatar -warning -rounded-none">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded-sm"><img src="./img/avatar.png"></div>
  <div class="avatar -success -rounded-sm">头像</div>
  <div class="avatar -warning -rounded-sm">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded"><img src="./img/avatar.png"></div>
  <div class="avatar -success -rounded">头像</div>
  <div class="avatar -warning -rounded">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded-md"><img src="./img/avatar.png"></div>
  <div class="avatar -success -rounded-md">头像</div>
  <div class="avatar -warning -rounded-md">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded-lg"><img src="./img/avatar.png"></div>
  <div class="avatar -success -rounded-lg">头像</div>
  <div class="avatar -warning -rounded-lg">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded-xl"><img src="./img/avatar.png"></div>
  <div class="avatar -success -rounded-xl">头像</div>
  <div class="avatar -warning -rounded-xl">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded-full"><img src="./img/avatar.png"></div>
  <div class="avatar -success -rounded-full">头像</div>
  <div class="avatar -warning -rounded-full">Z</div>
</div>
<div class="avatar-group -show-rounded-none">
  <div class="avatar"><img src="./img/avatar.png"></div>
  <div class="avatar -success">头像</div>
  <div class="avatar -warning">Z</div>
</div>
<div class="avatar-group -show-rounded-sm">
  <div class="avatar"><img src="./img/avatar.png"></div>
  <div class="avatar -success">头像</div>
  <div class="avatar -warning">Z</div>
</div>
<div class="avatar-group -show-rounded">
  <div class="avatar"><img src="./img/avatar.png"></div>
  <div class="avatar -success">头像</div>
  <div class="avatar -warning">Z</div>
</div>
<div class="avatar-group -show-rounded-md">
  <div class="avatar"><img src="./img/avatar.png"></div>
  <div class="avatar -success">头像</div>
  <div class="avatar -warning">Z</div>
</div>
<div class="avatar-group -show-rounded-lg">
  <div class="avatar"><img src="./img/avatar.png"></div>
  <div class="avatar -success">头像</div>
  <div class="avatar -warning">Z</div>
</div>
<div class="avatar-group -show-rounded-xl">
  <div class="avatar"><img src="./img/avatar.png"></div>
  <div class="avatar -success">头像</div>
  <div class="avatar -warning">Z</div>
</div>
<div class="avatar-group -show-rounded-full">
  <div class="avatar"><img src="./img/avatar.png"></div>
  <div class="avatar -success">头像</div>
  <div class="avatar -warning">Z</div>
</div>
```

## 尺寸

除了默认大小，还提供了额外的 4 种预设尺寸。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="avatar-group -xs">
    <div class="avatar -xs -rounded-full"><img src="./img/avatar.png"></div>
    <div class="avatar -xs -rounded-full -success">头像</div>
    <div class="avatar -xs -rounded-full -warning">Z</div>
  </div>
  <div class="avatar-group -sm">
    <div class="avatar -sm -rounded-full"><img src="./img/avatar.png"></div> 
    <div class="avatar -sm -rounded-full -success">头像</div>
    <div class="avatar -sm -rounded-full -warning">Z</div>
  </div>
  <div class="avatar-group -lg">
    <div class="avatar -lg -rounded-full"><img src="./img/avatar.png"></div>
    <div class="avatar -lg -rounded-full -success">头像</div>
    <div class="avatar -lg -rounded-full -warning">Z</div>
  </div>
  <div class="avatar-group -xl">
    <div class="avatar -xl -rounded-full"><img src="./img/avatar.png"></div>
    <div class="avatar -xl -rounded-full -success">头像</div>
    <div class="avatar -xl -rounded-full -warning">Z</div>
  </div>
</Example>

```html
<div class="avatar-group -xs">
  <div class="avatar -xs -rounded-full"><img src="./img/avatar.png"></div>
  <div class="avatar -xs -rounded-full -success">头像</div>
  <div class="avatar -xs -rounded-full -warning">Z</div>
</div>
<div class="avatar-group -sm">
  <div class="avatar -sm -rounded-full"><img src="./img/avatar.png"></div> 
  <div class="avatar -sm -rounded-full -success">头像</div>
  <div class="avatar -sm -rounded-full -warning">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded-full"><img src="./img/avatar.png"></div>
  <div class="avatar -rounded-full -success">头像</div>
  <div class="avatar -rounded-full -warning">Z</div>
</div>
<div class="avatar-group -lg">
  <div class="avatar -lg -rounded-full"><img src="./img/avatar.png"></div>
  <div class="avatar -lg -rounded-full -success">头像</div>
  <div class="avatar -lg -rounded-full -warning">Z</div>
</div>
<div class="avatar-group -xl">
  <div class="avatar -xl -rounded-full"><img src="./img/avatar.png"></div>
  <div class="avatar -xl -rounded-full -success">头像</div>
  <div class="avatar -xl -rounded-full -warning">Z</div>
</div>
```
