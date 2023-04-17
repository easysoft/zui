# 头像组

头像组用于将多个头像堆叠显示。

## 使用方法

将多个[头像](/lib/components/avatar/)放置在 `<div class="avatar-group">` 内即可创建一个头像组。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="avatar-group">
    <div class="avatar circle"><img src="/assets/avatar/avatar.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-1.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-2.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-3.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-4.png"></div>
    <div class="avatar circle gray-pale">+10</div>
  </div>
</Example>

```html
<div class="avatar-group">
  <div class="avatar circle"><img src="/assets/avatar/avatar.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-1.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-2.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-3.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-4.png"></div>
  <div class="avatar circle gray-pale">+10</div>
</div>
```

## 尺寸

当使用不同大小的头像时，可以通过为 `.avatar-group` 添加同样等级的 `size-*` 辅助类已获得统一的堆叠间距。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="avatar-group size-xs">
    <div class="avatar size-xs circle"><img src="/assets/avatar/avatar-1.png"></div>
    <div class="avatar size-xs circle"><img src="/assets/avatar/avatar-2.png"></div>
    <div class="avatar size-xs circle"><img src="/assets/avatar/avatar-3.png"></div>
  </div>
  <div class="avatar-group size-sm">
    <div class="avatar size-sm circle"><img src="/assets/avatar/avatar-4.png"></div>
    <div class="avatar size-sm circle"><img src="/assets/avatar/avatar-5.png"></div>
    <div class="avatar size-sm circle"><img src="/assets/avatar/avatar-6.png"></div>
  </div>
  <div class="avatar-group">
    <div class="avatar circle"><img src="/assets/avatar/avatar-7.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-8.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-9.png"></div>
  </div>
  <div class="avatar-group size-lg">
    <div class="avatar size-lg circle"><img src="/assets/avatar/avatar-10.png"></div>
    <div class="avatar size-lg circle"><img src="/assets/avatar/avatar-1.png"></div>
    <div class="avatar size-lg circle"><img src="/assets/avatar/avatar-2.png"></div>
  </div>
  <div class="avatar-group size-xl">
    <div class="avatar size-xl circle"><img src="/assets/avatar/avatar-3.png"></div>
    <div class="avatar size-xl circle"><img src="/assets/avatar/avatar-4.png"></div>
    <div class="avatar size-xl circle"><img src="/assets/avatar/avatar-5.png"></div>
  </div>
</Example>

```html
<div class="avatar-group size-xs gap-3">
  <div class="avatar size-xs circle"><img src="/assets/avatar/avatar-1.png"></div>
  <div class="avatar size-xs circle"><img src="/assets/avatar/avatar-2.png"></div>
  <div class="avatar size-xs circle"><img src="/assets/avatar/avatar-3.png"></div>
</div>
<div class="avatar-group size-sm">
  <div class="avatar size-sm circle"><img src="/assets/avatar/avatar-4.png"></div>
  <div class="avatar size-sm circle"><img src="/assets/avatar/avatar-5.png"></div>
  <div class="avatar size-sm circle"><img src="/assets/avatar/avatar-6.png"></div>
</div>
<div class="avatar-group">
  <div class="avatar circle"><img src="/assets/avatar/avatar-7.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-8.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-9.png"></div>
</div>
<div class="avatar-group size-lg">
  <div class="avatar size-lg circle"><img src="/assets/avatar/avatar-10.png"></div>
  <div class="avatar size-lg circle"><img src="/assets/avatar/avatar-1.png"></div>
  <div class="avatar size-lg circle"><img src="/assets/avatar/avatar-2.png"></div>
</div>
<div class="avatar-group size-xl">
  <div class="avatar size-xl circle"><img src="/assets/avatar/avatar-3.png"></div>
  <div class="avatar size-xl circle"><img src="/assets/avatar/avatar-4.png"></div>
  <div class="avatar size-xl circle"><img src="/assets/avatar/avatar-5.png"></div>
</div>
```

## 堆叠间距

使用工具类 `gap-*` 来调整堆叠间距。默认间距等同于 `gap-2.5`，小于 `2.5` 将使得间距比默认间距更小，反之则更大。

<Example class="flex gap-4 flex-wrap items-end">
  <div class="avatar-group gap-0">
    <div class="avatar circle"><img src="/assets/avatar/avatar-1.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-2.png"></div>
    <div class="avatar circle gray">0</div>
  </div>
  <div class="avatar-group gap-1">
    <div class="avatar circle"><img src="/assets/avatar/avatar-4.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-5.png"></div>
    <div class="avatar circle gray">1</div>
  </div>
  <div class="avatar-group gap-2">
    <div class="avatar circle"><img src="/assets/avatar/avatar-7.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-8.png"></div>
    <div class="avatar circle gray">2</div>
  </div>
  <div class="avatar-group">
    <div class="avatar circle"><img src="/assets/avatar/avatar-10.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-1.png"></div>
    <div class="avatar circle gray">2.5</div>
  </div>
  <div class="avatar-group gap-3">
    <div class="avatar circle"><img src="/assets/avatar/avatar-3.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-4.png"></div>
    <div class="avatar circle gray">3</div>
  </div>
  <div class="avatar-group gap-3.5">
    <div class="avatar circle"><img src="/assets/avatar/avatar-6.png"></div>
    <div class="avatar circle"><img src="/assets/avatar/avatar-7.png"></div>
    <div class="avatar circle gray">3.5</div>
  </div>
</Example>

```html
<div class="avatar-group gap-0">
  <div class="avatar circle"><img src="/assets/avatar/avatar-1.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-2.png"></div>
  <div class="avatar circle gray">0</div>
</div>
<div class="avatar-group gap-1">
  <div class="avatar circle"><img src="/assets/avatar/avatar-4.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-5.png"></div>
  <div class="avatar circle gray">1</div>
</div>
<div class="avatar-group gap-2">
  <div class="avatar circle"><img src="/assets/avatar/avatar-7.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-8.png"></div>
  <div class="avatar circle gray">2</div>
</div>
<div class="avatar-group">
  <div class="avatar circle"><img src="/assets/avatar/avatar-10.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-1.png"></div>
  <div class="avatar circle gray">2.5</div>
</div>
<div class="avatar-group gap-3">
  <div class="avatar circle"><img src="/assets/avatar/avatar-3.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-4.png"></div>
  <div class="avatar circle gray">3</div>
</div>
<div class="avatar-group gap-3.5">
  <div class="avatar circle"><img src="/assets/avatar/avatar-6.png"></div>
  <div class="avatar circle"><img src="/assets/avatar/avatar-7.png"></div>
  <div class="avatar circle gray">3.5</div>
</div>
```

## CSS 类

头像组提供了如下 CSS 类：

| 类             |  类型  | 作用                 |
| -------------- | :----: | -------------------- |
| `avatar-group` | 实体类 | 元素作为头像组组件   |
| `size-xs`      | 工具类 | 头像组使用超小号尺寸 |
| `size-sm`      | 工具类 | 头像组使用小号尺寸   |
| `size-lg`      | 工具类 | 头像组使用大号尺寸   |
| `size-xl`      | 工具类 | 头像组使用超大号尺寸 |
