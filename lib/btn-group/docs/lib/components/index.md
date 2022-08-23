# 按钮组

按钮组可以将多个按钮成组展示。

## 基本用法

将多个[按钮](/lib/components/button/)放置在 `<div class="btn-group">` 内即可创建一个按钮组。

<Example>
  <div class="btn-group">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
</Example>

```html
<div class="btn-group">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
```

## 多组按钮

使用 CSS 工具类 `.row` 搭配  `.space-*` 实现多组按钮效果。

<Example>
  <div class="row space-x-3">
    <div class="btn-group ">
      <button type="button" class="btn">剪切</button>
      <button type="button" class="btn">复制</button>
      <button type="button" class="btn">粘贴</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn">上传</button>
      <button type="button" class="btn">下载</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn primary">预览</button>
    </div>
  </div>
</Example>

```html
<div class="flex space-x-2">
  <div class="btn-group">
    <button type="button" class="btn">剪切</button>
    <button type="button" class="btn">复制</button>
    <button type="button" class="btn">粘贴</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn">( $ _ $ )</button>
    <button type="button" class="btn">O(∩_∩)O</button>
    <button type="button" class="btn">（*＾-＾*）</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn">登录</button>
  </div>
</div>
```

## 尺寸

在按钮组中可以为按钮添加修饰类 `size-*` 来获得不同大小的按钮组。

<Example class="flex gap-4 items-end">
  <div class="btn-group">
    <button type="button" class="btn size-xs">左</button>
    <button type="button" class="btn size-xs">中</button>
    <button type="button" class="btn size-xs">右</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn size-sm">左</button>
    <button type="button" class="btn size-sm">中</button>
    <button type="button" class="btn size-sm">右</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn size-lg">左</button>
    <button type="button" class="btn size-lg">中</button>
    <button type="button" class="btn size-lg">右</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn size-xl">左</button>
    <button type="button" class="btn size-xl">中</button>
    <button type="button" class="btn size-xl">右</button>
  </div>
</Example>

```html
<div class="btn-group">
  <button type="button" class="btn size-xs">左</button>
  <button type="button" class="btn size-xs">中</button>
  <button type="button" class="btn size-xs">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn size-sm">左</button>
  <button type="button" class="btn size-sm">中</button>
  <button type="button" class="btn size-sm">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn size-lg">左</button>
  <button type="button" class="btn size-lg">中</button>
  <button type="button" class="btn size-lg">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn size-xl">左</button>
  <button type="button" class="btn size-xl">中</button>
  <button type="button" class="btn size-xl">右</button>
</div>
```

## 外观

在按钮上加 [CSS 工具类](/utilities/)，以获得不同的按钮外观显示。

<Example class="flex flex-wrap gap-4">
  <div class="btn-group">
    <button type="button" class="btn primary">左</button>
    <button type="button" class="btn primary">中</button>
    <button type="button" class="btn primary">右</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn primary-outline">左</button>
    <button type="button" class="btn primary-outline">中</button>
    <button type="button" class="btn primary-outline">右</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn primary-pale">左</button>
    <button type="button" class="btn primary-pale">中</button>
    <button type="button" class="btn primary-pale">右</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn warning">左</button>
    <button type="button" class="btn danger">中</button>
    <button type="button" class="btn success">右</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn primary-outline">左</button>
    <button type="button" class="btn primary">中</button>
    <button type="button" class="btn primary-outline">右</button>
  </div>
</Example>

```html
<div class="btn-group">
  <button type="button" class="btn primary">左</button>
  <button type="button" class="btn primary">中</button>
  <button type="button" class="btn primary">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn primary-outline">左</button>
  <button type="button" class="btn primary-outline">中</button>
  <button type="button" class="btn primary-outline">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn primary-pale">左</button>
  <button type="button" class="btn primary-pale">中</button>
  <button type="button" class="btn primary-pale">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn warning">左</button>
  <button type="button" class="btn danger">中</button>
  <button type="button" class="btn success">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn primary-outline">左</button>
  <button type="button" class="btn primary">中</button>
  <button type="button" class="btn primary-outline">右</button>
</div>
```

## 使用下拉菜单

可以在按钮组中使用下拉菜单，只需要将 `<div class="dropdown">` 放置在按钮组 `<div class="btn-group">` 中即可。

<Example class="flex gap-4">
  <div class="btn-group">
    <button type="button" class="btn">创建</button>
    <div class="dropdown">
      <button type="button" class="btn" data-toggle="dropdown">
        <span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a href>快速创建</a></li>
        <li><a href>批量创建</a></li>
      </ul>
    </div>
  </div>
  <div class="btn-group">
    <button type="button" class="btn">复制</button>
    <button type="button" class="btn">粘贴</button>
    <div class="dropdown">
      <button type="button" class="btn" data-toggle="dropdown">
        编辑<span class="caret"></span>
      </button>
      <ul class="dropdown-menu">
        <li><a href>移动</a></li>
        <li><a href>删除</a></li>
      </ul>
    </div>
  </div>
</Example>

```html
<div class="btn-group">
  <button type="button" class="btn">创建</button>
  <div class="dropdown">
    <button type="button" class="btn" data-toggle="dropdown">
      <span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href>快速创建</a></li>
      <li><a href>批量创建</a></li>
    </ul>
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn">复制</button>
  <button type="button" class="btn">粘贴</button>
  <div class="dropdown">
    <button type="button" class="btn" data-toggle="dropdown">
      编辑<span class="caret"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href>移动</a></li>
      <li><a href>删除</a></li>
    </ul>
  </div>
</div>
```
## CSS 类

按钮提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `btn-group`      | 实体类 | 元素作为按钮组组件 |
