# 按钮组

按钮组可以将多个按钮成组展示。

## 使用方法

将多个 [按钮](/lib/components/button/) 放置在 `<div class="btn-group">` 内即可创建一个按钮组。

::: tabs

== 示例

<Example class="row gap-4">
  <div class="btn-group">
    <button class="btn active" type="button">概览</button>
    <button class="btn" type="button">成员</button>
    <button class="btn" type="button">动态</button>
  </div>
</Example>

== HTML

```html
<div class="btn-group">
  <button class="btn active" type="button">概览</button>
  <button class="btn" type="button">成员</button>
  <button class="btn" type="button">动态</button>
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
    <button class="btn" type="button" aria-label="查找文件"><i class="icon icon-search"></i></button>
    <button class="btn" type="button" aria-label="编辑文件"><i class="icon icon-edit"></i></button>
    <button class="btn" type="button" aria-label="删除文件"><i class="icon icon-trash"></i></button>
  </div>
  <div class="btn-group size-sm">
    <button class="btn" type="button" aria-label="查找文件"><i class="icon icon-search"></i></button>
    <button class="btn" type="button" aria-label="编辑文件"><i class="icon icon-edit"></i></button>
    <button class="btn" type="button" aria-label="删除文件"><i class="icon icon-trash"></i></button>
  </div>
  <div class="btn-group">
    <button class="btn" type="button" aria-label="查找文件"><i class="icon icon-search"></i></button>
    <button class="btn" type="button" aria-label="编辑文件"><i class="icon icon-edit"></i></button>
    <button class="btn" type="button" aria-label="删除文件"><i class="icon icon-trash"></i></button>
  </div>
  <div class="btn-group size-lg">
    <button class="btn" type="button" aria-label="查找文件"><i class="icon icon-search"></i></button>
    <button class="btn" type="button" aria-label="编辑文件"><i class="icon icon-edit"></i></button>
    <button class="btn" type="button" aria-label="删除文件"><i class="icon icon-trash"></i></button>
  </div>
  <div class="btn-group size-xl">
    <button class="btn" type="button" aria-label="查找文件"><i class="icon icon-search"></i></button>
    <button class="btn" type="button" aria-label="编辑文件"><i class="icon icon-edit"></i></button>
    <button class="btn" type="button" aria-label="删除文件"><i class="icon icon-trash"></i></button>
  </div>
</Example>

== HTML

```html
<div class="btn-group size-xs">
  <button class="btn" type="button" aria-label="查找文件"><i class="icon icon-search"></i></button>
  <button class="btn" type="button" aria-label="编辑文件"><i class="icon icon-edit"></i></button>
  <button class="btn" type="button" aria-label="删除文件"><i class="icon icon-trash"></i></button>
</div>
<div class="btn-group size-sm">
  <button class="btn" type="button" aria-label="查找文件"><i class="icon icon-search"></i></button>
  <button class="btn" type="button" aria-label="编辑文件"><i class="icon icon-edit"></i></button>
  <button class="btn" type="button" aria-label="删除文件"><i class="icon icon-trash"></i></button>
</div>
<div class="btn-group">
  <button class="btn" type="button" aria-label="查找文件"><i class="icon icon-search"></i></button>
  <button class="btn" type="button" aria-label="编辑文件"><i class="icon icon-edit"></i></button>
  <button class="btn" type="button" aria-label="删除文件"><i class="icon icon-trash"></i></button>
</div>
<div class="btn-group size-lg">
  <button class="btn" type="button" aria-label="查找文件"><i class="icon icon-search"></i></button>
  <button class="btn" type="button" aria-label="编辑文件"><i class="icon icon-edit"></i></button>
  <button class="btn" type="button" aria-label="删除文件"><i class="icon icon-trash"></i></button>
</div>
<div class="btn-group size-xl">
  <button class="btn" type="button" aria-label="查找文件"><i class="icon icon-search"></i></button>
  <button class="btn" type="button" aria-label="编辑文件"><i class="icon icon-edit"></i></button>
  <button class="btn" type="button" aria-label="删除文件"><i class="icon icon-trash"></i></button>
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
  <button class="btn capitalize primary" type="button">primary</button>
  <button class="btn capitalize secondary" type="button">secondary</button>
  <button class="btn capitalize success" type="button">success</button>
  <button class="btn capitalize warning" type="button">warning</button>
  <button class="btn capitalize danger" type="button">danger</button>
  <button class="btn capitalize important" type="button">important</button>
  <button class="btn capitalize special" type="button">special</button>
  <button class="btn capitalize gray" type="button">gray</button>
</div>
<div class="btn-group">
  <button class="btn capitalize gray-50" type="button">gray-50</button>
  <button class="btn capitalize gray-100" type="button">gray-100</button>
  <button class="btn capitalize gray-200" type="button">gray-200</button>
  <button class="btn capitalize gray-300" type="button">gray-300</button>
  <button class="btn capitalize gray-400" type="button">gray-400</button>
  <button class="btn capitalize gray-500" type="button">gray-500</button>
  <button class="btn capitalize gray-600" type="button">gray-600</button>
  <button class="btn capitalize gray-700" type="button">gray-700</button>
  <button class="btn capitalize gray-800" type="button">gray-800</button>
  <button class="btn capitalize gray-900" type="button">gray-900</button>
  <button class="btn capitalize gray-950" type="button">gray-950</button>
</div>
<div class="btn-group">
  <button class="btn capitalize outline" type="button">outline</button>
  <button class="btn capitalize primary-outline" type="button">primary-outline</button>
  <button class="btn capitalize secondary-outline" type="button">secondary-outline</button>
  <button class="btn capitalize success-outline" type="button">success-outline</button>
  <button class="btn capitalize warning-outline" type="button">warning-outline</button>
  <button class="btn capitalize danger-outline" type="button">danger-outline</button>
  <button class="btn capitalize important-outline" type="button">important-outline</button>
  <button class="btn capitalize special-outline" type="button">special-outline</button>
</div>
<div class="btn-group">
  <button class="btn capitalize ghost" type="button">ghost</button>
  <button class="btn capitalize primary-ghost" type="button">primary-ghost</button>
  <button class="btn capitalize secondary-ghost" type="button">secondary-ghost</button>
  <button class="btn capitalize success-ghost" type="button">success-ghost</button>
  <button class="btn capitalize warning-ghost" type="button">warning-ghost</button>
  <button class="btn capitalize danger-ghost" type="button">danger-ghost</button>
  <button class="btn capitalize important-ghost" type="button">important-ghost</button>
  <button class="btn capitalize special-ghost" type="button">special-ghost</button>
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
