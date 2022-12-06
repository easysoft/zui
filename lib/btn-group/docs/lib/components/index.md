# 按钮组

按钮组可以将多个按钮成组展示。

## 基本用法

将多个 [按钮](/lib/components/button/) 放置在 `<div class="btn-group">` 内即可创建一个按钮组。

<Example class="flex gap-1">
  <div class="btn-group">
    <button class="btn active" type="button"><span class="text">查看详情</span></button>
    <button class="btn" type="button"><span class="text">编辑</span></button>
    <button class="btn" type="button"><span class="text">删除</span></button>
  </div>
  <div class="btn-group">
    <button class="btn square" title="查看详情" type="button"><i class="icon icon-search"></i></button>
    <button class="btn square" title="编辑" type="button"><i class="icon icon-edit"></i></button>
    <button class="btn square" title="删除" type="button"><i class="icon icon-trash"></i></button>
  </div>
</Example>

```html
<div class="btn-group">
  <button class="btn active" type="button"><span class="text">查看详情</span></button>
  <button class="btn" type="button"><span class="text">编辑</span></button>
  <button class="btn" type="button"><span class="text">删除</span></button>
</div>
<div class="btn-group">
  <button class="btn square" title="查看详情" type="button"><i class="icon icon-search"></i></button>
  <button class="btn square" title="编辑" type="button"><i class="icon icon-edit"></i></button>
  <button class="btn square" title="删除" type="button"><i class="icon icon-trash"></i></button>
</div>
```

## 多组按钮

使用 [CSS 工具类](/utilities/) `.row` 搭配  `.space-*` 实现多组按钮效果。

<Example>
  <div class="row space-x-3">
    <div class="btn-group">
      <button type="button" class="btn"><span class="text">剪切</span></button>
      <button type="button" class="btn"><span class="text">复制</span></button>
      <button type="button" class="btn"><span class="text">粘贴</span></button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn"><span class="text">上传</span></button>
      <button type="button" class="btn"><span class="text">下载</span></button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn"><span class="text">预览</span></button>
    </div>
  </div>
</Example>

```html
<div class="flex space-x-3">
  <div class="btn-group">
    <button type="button" class="btn"><span class="text">剪切</span></button>
    <button type="button" class="btn"><span class="text">复制</span></button>
    <button type="button" class="btn"><span class="text">粘贴</span></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn"><span class="text">上传</span></button>
    <button type="button" class="btn"><span class="text">下载</span></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn"><span class="text">预览</span></button>
  </div>
</div>
```

## 禁用

使用 CSS 修饰类 `.disabled` 实现禁用效果。

<Example>
  <div class="btn-group">
    <button type="button" class="btn ghost"><span class="text">详情</span></button>
    <button type="button" class="btn ghost"><span class="text">编辑</span></button>
    <button type="button" class="btn ghost disabled"><span class="text">删除</span></button>
  </div>
</Example>

```html
<div class="btn-group disabled">
  <button type="button" class="btn ghost"><span class="text">详情</span></button>
  <button type="button" class="btn ghost"><span class="text">编辑</span></button>
  <button type="button" class="btn ghost disabled"><span class="text">删除</span></button>
</div>
```

## 尺寸

在按钮组编辑可以为按钮添加修饰类 `size-*` 来获得不同大小的按钮组。

<Example class="col gap-4">
  <div class="btn-group size-xs">
    <button class="btn" type="button"><i class="icon icon-search"></i></button>
    <button class="btn" type="button"><i class="icon icon-edit"></i></button>
    <button class="btn" type="button"><i class="icon icon-trash"></i></button>
  </div>
  <div class="btn-group size-sm">
    <button class="btn" type="button"><i class="icon icon-search"></i></button>
    <button class="btn" type="button"><i class="icon icon-edit"></i></button>
    <button class="btn" type="button"><i class="icon icon-trash"></i></button>
  </div>
  <div class="btn-group">
    <button class="btn" type="button"><i class="icon icon-search"></i></button>
    <button class="btn" type="button"><i class="icon icon-edit"></i></button>
    <button class="btn" type="button"><i class="icon icon-trash"></i></button>
  </div>
  <div class="btn-group size-lg">
    <button class="btn" type="button"><i class="icon icon-search"></i></button>
    <button class="btn" type="button"><i class="icon icon-edit"></i></button>
    <button class="btn" type="button"><i class="icon icon-trash"></i></button>
  </div>
  <div class="btn-group size-xl">
    <button class="btn" type="button"><i class="icon icon-search"></i></button>
    <button class="btn" type="button"><i class="icon icon-edit"></i></button>
    <button class="btn" type="button"><i class="icon icon-trash"></i></button>
  </div>
</Example>

```html
<div class="btn-group size-xs">
  <button class="btn" type="button"><i class="icon icon-search"></i></button>
  <button class="btn" type="button"><i class="icon icon-edit"></i></button>
  <button class="btn" type="button"><i class="icon icon-trash"></i></button>
</div>
<div class="btn-group size-sm">
  <button class="btn" type="button"><i class="icon icon-search"></i></button>
  <button class="btn" type="button"><i class="icon icon-edit"></i></button>
  <button class="btn" type="button"><i class="icon icon-trash"></i></button>
</div>
<div class="btn-group">
  <button class="btn" type="button"><i class="icon icon-search"></i></button>
  <button class="btn" type="button"><i class="icon icon-edit"></i></button>
  <button class="btn" type="button"><i class="icon icon-trash"></i></button>
</div>
<div class="btn-group size-lg">
  <button class="btn" type="button"><i class="icon icon-search"></i></button>
  <button class="btn" type="button"><i class="icon icon-edit"></i></button>
  <button class="btn" type="button"><i class="icon icon-trash"></i></button>
</div>
<div class="btn-group size-xl">
  <button class="btn" type="button"><i class="icon icon-search"></i></button>
  <button class="btn" type="button"><i class="icon icon-edit"></i></button>
  <button class="btn" type="button"><i class="icon icon-trash"></i></button>
</div>
```

## 外观

在按钮上加 [CSS 工具类](/utilities/)，以获得不同的按钮外观显示。

<Example class="flex flex-wrap gap-4">
  <div class="btn-group">
    <button class="btn ghost square" title="详情" type="button"><i class="icon icon-search"></i></button>
    <button class="btn ghost square" title="编辑" type="button"><i class="icon icon-edit"></i></button>
    <button class="btn ghost square" title="删除" type="button"><i class="icon icon-trash"></i></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn primary"><span class="text">详情</span></button>
    <button type="button" class="btn primary"><span class="text">编辑</span></button>
    <button type="button" class="btn primary"><span class="text">删除</span></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn primary-outline"><span class="text">详情</span></button>
    <button type="button" class="btn primary-outline"><span class="text">编辑</span></button>
    <button type="button" class="btn primary-outline"><span class="text">删除</span></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn primary-pale"><span class="text">详情</span></button>
    <button type="button" class="btn primary-pale"><span class="text">编辑</span></button>
    <button type="button" class="btn primary-pale"><span class="text">删除</span></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn warning"><span class="text">详情</span></button>
    <button type="button" class="btn danger"><span class="text">编辑</span></button>
    <button type="button" class="btn success"><span class="text">删除</span></button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn primary-outline"><span class="text">详情</span></button>
    <button type="button" class="btn primary"><span class="text">编辑</span></button>
    <button type="button" class="btn primary-outline"><span class="text">删除</span></button>
  </div>
</Example>

```html
<div class="btn-group">
  <button class="btn ghost square" title="详情" type="button"><i class="icon icon-search"></i></button>
  <button class="btn ghost square" title="编辑" type="button"><i class="icon icon-edit"></i></button>
  <button class="btn ghost square" title="删除" type="button"><i class="icon icon-trash"></i></button>
</div>
<div class="btn-group">
  <button type="button" class="btn primary"><span class="text">详情</span></button>
  <button type="button" class="btn primary"><span class="text">编辑</span></button>
  <button type="button" class="btn primary"><span class="text">删除</span></button>
</div>
<div class="btn-group">
  <button type="button" class="btn primary-outline"><span class="text">详情</span></button>
  <button type="button" class="btn primary-outline"><span class="text">编辑</span></button>
  <button type="button" class="btn primary-outline"><span class="text">删除</span></button>
</div>
<div class="btn-group">
  <button type="button" class="btn primary-pale"><span class="text">详情</span></button>
  <button type="button" class="btn primary-pale"><span class="text">编辑</span></button>
  <button type="button" class="btn primary-pale"><span class="text">删除</span></button>
</div>
<div class="btn-group">
  <button type="button" class="btn warning"><span class="text">详情</span></button>
  <button type="button" class="btn danger"><span class="text">编辑</span></button>
  <button type="button" class="btn success"><span class="text">删除</span></button>
</div>
<div class="btn-group">
  <button type="button" class="btn primary-outline"><span class="text">详情</span></button>
  <button type="button" class="btn primary"><span class="text">编辑</span></button>
  <button type="button" class="btn primary-outline"><span class="text">删除</span></button>
</div>
```

## 使用下拉菜单

可以在按钮组编辑使用下拉菜单，只需要将 `<div class="dropdown">` 放置在按钮组 `<div class="btn-group">` 编辑即可。

<Example class="flex gap-4">
  <div class="btn-group">
    <button type="button" class="btn"><span class="text">创建</span></button>
    <div class="dropdown">
      <button type="button" class="btn" data-toggle="dropdown" href="#dropdown1">
        <span class="caret"></span>
      </button>
      <div class="dropdown-menu" id="dropdown1" data-popper-placement="bottom-start" >
        <menu class="menu menu-context">
          <li class="menu-item"><a><span class="text">快速创建</span></a></li>
          <li class="menu-item"><a><span class="text">批量创建</span></a></li>
        </menu>
      </div>
    </div>
  </div>
  <div class="btn-group">
    <button type="button" class="btn"><span class="text">复制</span></button>
    <button type="button" class="btn"><span class="text">粘贴</span></button>
    <div class="dropdown">
      <button type="button" class="btn" data-toggle="dropdown" href="#dropdown2">
        编辑<span class="caret"></span>
      </button>
      <div class="dropdown-menu" id="dropdown2" data-popper-placement="bottom-start" >
        <menu class="menu menu-context">
          <li class="menu-item"><a><span class="text">移动</span></a></li>
          <li class="menu-item"><a><span class="text">删除</span></a></li>
        </menu>
      </div>
    </div>
  </div>
</Example>

```html
<div class="btn-group">
  <button type="button" class="btn"><span class="text">创建</span></button>
  <div class="dropdown">
    <button type="button" class="btn" data-toggle="dropdown" href="#dropdown1">
      <span class="caret"></span>
    </button>
    <div class="dropdown-menu" id="dropdown1" data-popper-placement="bottom-start" >
      <menu class="menu menu-context">
        <li class="menu-item"><a><span class="text">快速创建</span></a></li>
        <li class="menu-item"><a><span class="text">批量创建</span></a></li>
      </menu>
    </div>
  </div>
</div>
<div class="btn-group">
  <button type="button" class="btn"><span class="text">复制</span></button>
  <button type="button" class="btn">><span class="text">粘贴</span></button>
  <div class="dropdown">
    <button type="button" class="btn" data-toggle="dropdown" href="#dropdown2">
      编辑<span class="caret"></span>
    </button>
    <div class="dropdown-menu" id="dropdown2" data-popper-placement="bottom-start" >
      <menu class="menu menu-context">
        <li class="menu-item"><a><span class="text">移动</span></a></li>
        <li class="menu-item"><a><span class="text">删除</span></a></li>
      </menu>
    </div>
  </div>
</div>
```
## CSS 类

按钮提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `btn-group`      | 实体类 | 元素作为按钮组组件 |
| `size-xs`      | 修饰类      |   按钮组使用超小号尺寸 |
| `size-sm`      | 修饰类      |   按钮组使用小号尺寸 |
| `size-lg`      | 修饰类      |   按钮组使用大号尺寸 |
| `size-xl`      | 修饰类      |   按钮组使用超大号尺寸 |
| `disabled`      | 修饰类  |   与 `.btn` 一起使用，标记按钮为禁用状态 |
