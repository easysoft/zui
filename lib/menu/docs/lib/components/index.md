# 菜单

菜单用于展示一个操作列表，也可以用于构建更复杂的组件，例如右键菜单、下拉菜单等。

## 基本用法

使用类 `.menu` 和 `.menu-item` 按照如下结构来构建一个静态菜单：

<Example>
  <menu class="menu w-32">
    <li><a class="menu-item">剪切</a></li>
    <li><a class="menu-item">复制</a></li>
    <li><a class="menu-item">粘贴</a></li>
  </menu>
</Example>

```html
<menu class="menu w-32">
  <li><a class="menu-item">剪切</a></li>
  <li><a class="menu-item">复制</a></li>
  <li><a class="menu-item">粘贴</a></li>
</menu>
```

## 标题

使用类 `.menu-heading` 来创建一个标题：

<Example>
  <menu class="menu w-32">
    <li><div class="menu-heading">更多操作</div></li>
    <li><a class="menu-item">剪切</a></li>
    <li><a class="menu-item">复制</a></li>
    <li><a class="menu-item">粘贴</a></li>
  </menu>
</Example>

```html
<menu class="menu w-32">
  <li><div class="menu-heading">更多操作</div></li>
  <li><a class="menu-item">剪切</a></li>
  <li><a class="menu-item">复制</a></li>
  <li><a class="menu-item">粘贴</a></li>
</menu>
```

## 分割线

使用类 `.menu-divider` 来添加一个分割线：

<Example>
  <menu class="menu w-32">
    <li><a class="menu-item">剪切</a></li>
    <li><hr class="menu-divider" /></li>
    <li><a class="menu-item">复制</a></li>
    <li><a class="menu-item">粘贴</a></li>
  </menu>
</Example>

```html
<menu class="menu w-32">
  <li><a class="menu-item">剪切</a></li>
  <li><hr class="menu-divider" /></li>
  <li><a class="menu-item">复制</a></li>
  <li><a class="menu-item">粘贴</a></li>
</menu>
```

## 包含图标

可以在菜单项内添加图标，但如果是部分菜单项拥有图标，可以通过为 `.menu` 添加修饰类 `.has-icons` 来让图标以及文本进行对其：

<Example>
  <menu class="menu has-icons w-32">
    <li><a class="menu-item"><i class="icon icon-copy"></i> 复制</a></li>
    <li><a class="menu-item"><i class="icon icon-paste"></i> 粘贴</a></li>
    <li><a class="menu-item">剪切</a></li>
  </menu>
</Example>

```html
<menu class="menu has-icons w-32">
  <li><a class="menu-item"><i class="icon icon-copy"></i> 复制</a></li>
  <li><a class="menu-item"><i class="icon icon-paste"></i> 粘贴</a></li>
  <li><a class="menu-item">剪切</a></li>
</menu>
```

## 禁用的菜单项

为 `.menu-item` 添加工具类 `.disabled` 来将菜单项禁用：

<Example>
  <menu class="menu w-32">
    <li><a class="menu-item">复制</a></li>
    <li><a class="menu-item disabled">粘贴</a></li>
    <li><a class="menu-item">剪切</a></li>
  </menu>
</Example>

```html
<menu class="menu w-32">
  <li><a class="menu-item">复制</a></li>
  <li><a class="menu-item disabled">粘贴</a></li>
  <li><a class="menu-item">剪切</a></li>
</menu>
```

## 标记激活项

为 `.menu-item` 添加修饰类 `.active` 来将菜单项标记为激活状态：

<Example>
  <menu class="menu w-32">
    <li><a class="menu-item">复制</a></li>
    <li><a class="menu-item active">粘贴</a></li>
    <li><a class="menu-item">剪切</a></li>
  </menu>
</Example>

```html
<menu class="menu w-32">
  <li><a class="menu-item">复制</a></li>
  <li><a class="menu-item active">粘贴</a></li>
  <li><a class="menu-item">剪切</a></li>
</menu>
```

## 尾部图标

直接将图标 `.icon` 元素添加到菜单项 `.menu-item` 内尾部，图标将自动靠右侧对齐：

<Example>
  <menu class="menu w-32">
    <li><a class="menu-item active">已复制 <i class="icon icon-check text-success"></i></a></li>
    <li><a class="menu-item">粘贴</a></li>
    <li><a class="menu-item">剪切</a></li>
  </menu>
</Example>

```html
<menu class="menu w-32">
  <li><a class="menu-item active">已复制 <i class="icon icon-check text-success"></i></a></li>
  <li><a class="menu-item">粘贴</a></li>
  <li><a class="menu-item">剪切</a></li>
</menu>
```

## 简单外观

使用工具类 `shadow-none`、`border-none`、`rounded-none` 分别移除阴影、边框和圆角，从而获得一个简单外观：

<Example>
  <menu class="menu shadow-none border-none rounded-none w-32">
    <li><a class="menu-item">剪切</a></li>
    <li><a class="menu-item">复制</a></li>
    <li><a class="menu-item">粘贴</a></li>
  </menu>
</Example>

```html
<menu class="menu shadow-none border-none rounded-none w-32">
  <li><a class="menu-item">剪切</a></li>
  <li><a class="menu-item">复制</a></li>
  <li><a class="menu-item">粘贴</a></li>
</menu>
```

## 自定义菜单项

在 `.menu` 内可以放置其他内容来自定义菜单项：

<Example>
  <menu class="menu -w-36">
    <li class="row items-center gap-2 py-1 px-2">
      <div class="avatar circle flex-none"><img src="/assets/avatar/avatar.png"></div>
      <div class="flex-auto">
        <div>张三</div>
        <div class="text-gray text-sm">zhangsan</div>
      </div>
    </li>
    <li class="menu-divider"></li>
    <li><a class="menu-item" href="#">个人资料</a></li>
    <li><a class="menu-item" href="#">修改密码</a></li>
    <li><a class="menu-item" href="#">主题</a></li>
    <li class="menu-divider"></li>
    <li class="text-danger"><a class="menu-item" href="#">退出</a></li>
  </menu>
</Example>

```html
<menu class="menu -w-36">
  <li class="row items-center gap-2 py-1 px-2">
    <div class="avatar circle flex-none"><img src="/assets/avatar/avatar.png"></div>
    <div class="flex-auto">
      <div>张三</div>
      <div class="text-gray text-sm">zhangsan</div>
    </div>
  </li>
  <li class="menu-divider"></li>
  <li><a class="menu-item" href="#">个人资料</a></li>
  <li><a class="menu-item" href="#">修改密码</a></li>
  <li><a class="menu-item" href="#">主题</a></li>
  <li class="menu-divider"></li>
  <li class="text-danger"><a class="menu-item" href="#">退出</a></li>
</menu>
```

## CSS 类

头像提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `menu`      | 实体类 | 元素作为菜单 |
| `menu-item`      | 实体类 | 元素作为菜单项 |
| `menu-heading`      | 实体类      |   元素作为菜单标题 |
| `menu-divider`      | 实体类      |   元素作为分割线 |
| `has-icons`      | 修饰类      |   与 `menu` 一起使用，标记菜单内包含图标 |
| `active`      | 修饰类      |   与 `menu-item` 一起使用，标记菜单项为激活状态 |
| `disabled`      | 修饰类      |   与 `menu-item` 一起使用，标记菜单项为禁用状态 |

## CSS 变量

头像提供了如下 CSS 变量，可进行全局修改：

| CSS 变量名        | 作用           | 默认值 |
| ------------- |:------------- | --- |
| `--menu-radius` | 菜单圆角 | `var(--radius) |
| `--menu-bg` | 菜单背景颜色 | `var(--color-canvas) |
| `--menu-border` | 菜单边框颜色 | `1px solid var(--color-border) |
| `--menu-shadow` | 菜单阴影 | `var(--shadow-lg) |
| `--menu-hover-bg` | 菜单项鼠标悬停背景色 | `var(--color-primary-500) |
| `--menu-hover-color` | 菜单项鼠标悬停文字颜色 | `var(--color-canvas) |
| `--menu-active-bg` | 菜单项激活状态背景色 | `var(--color-primary-50) |
| `--menu-active-color` | 菜单项激活状态文字颜色 | `var(--color-primary-500) |
| `--menu-icon-opacity` | 菜单项图标透明度 | `.5` |
| `--menu-heading-color` | 菜单标题文字颜色 | `var(--color-gray-500) |
