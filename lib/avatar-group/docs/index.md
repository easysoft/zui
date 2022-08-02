# 头像组

头像组是头像组合展现形式。

## 基本用法

使用 `.avatar-group` 类获得头像组合展示。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="avatar-group">
    <div class="avatar -rounded-none"><img src="/favicon.svg"></div>
    <div class="avatar -success -rounded-none">头像</div>
    <div class="avatar -warning -rounded-none">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -rounded-sm"><img src="/favicon.svg"></div>
    <div class="avatar -success -rounded-sm">头像</div>
    <div class="avatar -warning -rounded-sm">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -rounded-md"><img src="/favicon.svg"></div>
    <div class="avatar -success -rounded-md">头像</div>
    <div class="avatar -warning -rounded-md">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar"><img src="/favicon.svg"></div>
    <div class="avatar  -success">头像</div>
    <div class="avatar -warning">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -rounded-lg"><img src="/favicon.svg"></div>
    <div class="avatar -success -rounded-lg">头像</div>
    <div class="avatar -warning -rounded-lg">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -rounded-xl"><img src="/favicon.svg"></div>
    <div class="avatar -success -rounded-xl">头像</div>
    <div class="avatar -warning -rounded-xl">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -rounded-full"><img src="/favicon.svg"></div>
    <div class="avatar -success -rounded-full">头像</div>
    <div class="avatar -warning -rounded-full">Z</div>
  </div>
  <div class="avatar-group -outline">
    <div class="avatar -rounded-full -primary-outline">Z</div>
    <div class="avatar -rounded-full -secondary-outline">Z</div>
    <div class="avatar -rounded-full -success-outline">Z</div>
  </div>
</Example>

```html
<div class="avatar-group">
  <div class="avatar -rounded-none"><img src="/favicon.svg"></div>
  <div class="avatar -success -rounded-none">头像</div>
  <div class="avatar -warning -rounded-none">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded-sm"><img src="/favicon.svg"></div>
  <div class="avatar -success -rounded-sm">头像</div>
  <div class="avatar -warning -rounded-sm">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded-md"><img src="/favicon.svg"></div>
  <div class="avatar -success -rounded-md">头像</div>
  <div class="avatar -warning -rounded-md">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar"><img src="/favicon.svg"></div>
  <div class="avatar  -success">头像</div>
  <div class="avatar -warning">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded-lg"><img src="/favicon.svg"></div>
  <div class="avatar -success -rounded-lg">头像</div>
  <div class="avatar -warning -rounded-lg">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded-xl"><img src="/favicon.svg"></div>
  <div class="avatar -success -rounded-xl">头像</div>
  <div class="avatar -warning -rounded-xl">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -rounded-full"><img src="/favicon.svg"></div>
  <div class="avatar -success -rounded-full">头像</div>
  <div class="avatar -warning -rounded-full">Z</div>
</div>
<div class="avatar-group -outline">
  <div class="avatar -rounded-full -primary-outline">Z</div>
  <div class="avatar -rounded-full -secondary-outline">Z</div>
  <div class="avatar -rounded-full -success-outline">Z</div>
</div>
```

## 尺寸

除了默认大小，还提供了额外的 4 种预设尺寸。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="avatar-group -overlap-xs">
    <div class="avatar -xs -rounded-full"><img src="/favicon.svg"></div>
    <div class="avatar -xs -rounded-full -success">头像</div>
    <div class="avatar -xs -rounded-full -warning">Z</div>
  </div>
  <div class="avatar-group -overlap-sm">
    <div class="avatar -sm -rounded-full"><img src="/favicon.svg"></div> 
    <div class="avatar -sm -rounded-full -success">头像</div>
    <div class="avatar -sm -rounded-full -warning">Z</div>
  </div>
  <div class="avatar-group">
    <div class="avatar -sm -rounded-full"><img src="/favicon.svg"></div> 
    <div class="avatar -sm -rounded-full -success">头像</div>
    <div class="avatar -sm -rounded-full -warning">Z</div>
  </div>
  <div class="avatar-group -overlap-lg">
    <div class="avatar -lg -rounded-full"><img src="/favicon.svg"></div>
    <div class="avatar -lg -rounded-full -success">头像</div>
    <div class="avatar -lg -rounded-full -warning">Z</div>
  </div>
  <div class="avatar-group -overlap-xl">
    <div class="avatar -xl -rounded-full"><img src="/favicon.svg"></div>
    <div class="avatar -xl -rounded-full -success">头像</div>
    <div class="avatar -xl -rounded-full -warning">Z</div>
  </div>
</Example>

```html
<div class="avatar-group -overlap-xs">
  <div class="avatar -xs -rounded-full"><img src="/favicon.svg"></div>
  <div class="avatar -xs -rounded-full -success">头像</div>
  <div class="avatar -xs -rounded-full -warning">Z</div>
</div>
<div class="avatar-group -overlap-sm">
  <div class="avatar -sm -rounded-full"><img src="/favicon.svg"></div> 
  <div class="avatar -sm -rounded-full -success">头像</div>
  <div class="avatar -sm -rounded-full -warning">Z</div>
</div>
<div class="avatar-group">
  <div class="avatar -sm -rounded-full"><img src="/favicon.svg"></div> 
  <div class="avatar -sm -rounded-full -success">头像</div>
  <div class="avatar -sm -rounded-full -warning">Z</div>
</div>
<div class="avatar-group -overlap-lg">
  <div class="avatar -lg -rounded-full"><img src="/favicon.svg"></div>
  <div class="avatar -lg -rounded-full -success">头像</div>
  <div class="avatar -lg -rounded-full -warning">Z</div>
</div>
<div class="avatar-group -overlap-xl">
  <div class="avatar -xl -rounded-full"><img src="/favicon.svg"></div>
  <div class="avatar -xl -rounded-full -success">头像</div>
  <div class="avatar -xl -rounded-full -warning">Z</div>
</div>
```

## CSS 类

头像组提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `avatar-group`      | 实体类 | 元素作为头像组组件 |
| `-xs`      | 修饰类      |   头像组使用超小号尺寸 |
| `-sm`      | 修饰类      |   头像组使用小号尺寸 |
| `-lg`      | 修饰类      |   头像组使用大号尺寸 |
| `-xl`      | 修饰类      |   头像组使用超大号尺寸 |
