# 按钮组

按钮组可以将多个按钮成组展示。

## 使用方法

将多个 [按钮](/lib/components/button/) 放置在 `<div class="btn-group">` 内即可创建一个按钮组。

::: tabs

== 示例

<Example class="row gap-4">
  <div class="btn-group">
    <button class="btn active" type="button">详情</button>
    <button class="btn" type="button">编辑</button>
    <button class="btn" type="button">删除</button>
  </div>
</Example>

== HTML

```html
<div class="btn-group">
  <button class="btn active" type="button">查看详情</button>
  <button class="btn" type="button">编辑</button>
  <button class="btn" type="button">删除</button>
</div>
```

:::

## 多组按钮

使用 [CSS 工具类](/utilities/) `.row` 搭配  `.gap-*` 实现多组按钮效果。

::: tabs

== 示例

<Example>
  <div class="row gap-3">
    <div class="btn-group">
      <button type="button" class="btn">剪切</button>
      <button type="button" class="btn">复制</button>
      <button type="button" class="btn">粘贴</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn">上传</button>
      <button type="button" class="btn">下载</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn">预览</button>
    </div>
  </div>
</Example>

== HTML

```html
<div class="flex gap-3">
  <div class="btn-group">
    <button type="button" class="btn">剪切</button>
    <button type="button" class="btn">复制</button>
    <button type="button" class="btn">粘贴</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn">上传</button>
    <button type="button" class="btn">下载</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn">预览</button>
  </div>
</div>
```

:::

## 尺寸

在 `.btn-group` 上配合使用工具类 `size-*` 来获得不同大小的按钮组。

::: tabs

== 示例

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

== HTML

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

:::

## 外观

在按钮上加 [CSS 工具类](/utilities/)，以获得不同的按钮外观显示。


::: tabs

== 示例

<Example class="overflow-auto space-y-4" background="light-circle">
  <div class="btn-group">
    <button v-for="skin in zui.skin.accent" class="btn capitalize" type="button" :class="skin">{{skin}}</button>
  </div>
  <div class="btn-group">
    <button v-for="skin in zui.skin.gray" class="btn capitalize" type="button" :class="skin">{{skin}}</button>
  </div>
  <div class="btn-group">
    <button v-for="skin in zui.skin.outline" class="btn capitalize" type="button" :class="skin">{{skin}}</button>
  </div>
  <div class="btn-group">
    <button v-for="skin in zui.skin.ghost" class="btn capitalize" type="button" :class="skin">{{skin}}</button>
  </div>
</Example>

== HTML

```html
<div class="btn-group">
  <button class="btn primary">...</button>
  <button class="btn secondary">...</button>
</div>
```

:::

## 使用下拉菜单

可以在按钮组中使用[下拉菜单](/lib/components/dropdown/)，只需要将启用下拉菜单的按钮放置于按钮组中即可。

::: tabs

== 示例

<Example class="flex gap-4">
  <div class="btn-group">
    <button type="button" class="btn"><span class="text">创建项目</span></button>
    <button type="button" class="btn btn-caret" data-toggle="dropdown" data-target="#dropdownExample" data-placement="bottom-end"><span class="caret"></span></button>
  </div>
  <div class="dropdown-menu" id="dropdownExample">
    <menu class="menu menu-context">
      <li class="menu-item"><a><span class="text">快速创建</span></a></li>
      <li class="menu-item"><a><span class="text">批量创建</span></a></li>
    </menu>
  </div>
</Example>

== HTML

```html
<div class="btn-group">
  <button type="button" class="btn"><span class="text">创建项目</span></button>
  <button type="button" class="btn btn-caret" data-toggle="dropdown" data-target="#dropdownExample" data-placement="bottom-end"><span class="caret"></span></button>
</div>
<div class="dropdown-menu" id="dropdownExample">
  <menu class="menu menu-context">
    <li class="menu-item"><a><span class="text">快速创建</span></a></li>
    <li class="menu-item"><a><span class="text">批量创建</span></a></li>
  </menu>
</div>
```

:::

## CSS 类

按钮提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `btn-group`      | 实体类 | 元素作为按钮组组件 |
| `size-xs`      | 工具类      |   按钮组使用超小号尺寸 |
| `size-sm`      | 工具类      |   按钮组使用小号尺寸 |
| `size-lg`      | 工具类      |   按钮组使用大号尺寸 |
| `size-xl`      | 工具类      |   按钮组使用超大号尺寸 |

## 参考

* [按钮](/lib/components/button/)
* [下拉菜单](/lib/components/dropdown/)
