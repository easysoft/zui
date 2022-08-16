# 按钮组

使用 `.btn-group` 容器把一组按钮放在同一行里，实现按钮组功能。

## 基本用法

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

使用CSS工具类 `flex` 搭配  `.space-*` 实现多组按钮效果。

<Example>
  <div class="flex space-x-2">
    <div class="btn-group ">
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

除了默认大小，按钮组还提供了额外的4中预设尺寸。

<Example class="flex gap-4">
  <div class="btn-group size-xl">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
  <div class="btn-group size-lg">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
  <div class="btn-group">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
  <div class="btn-group size-sm">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
  <div class="btn-group size-xs">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
</Example>

```html
<div class="btn-group size-xl">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group size-lg">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group size-sm">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group size-xs">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
```

## 外观

在按钮上加修饰类，以实现不同的按钮外观显示。

<Example class="flex flex-wrap gap-4">
    <div class="btn-group">
      <button type="button" class="btn primary">Primary</button>
      <button type="button" class="btn primary">左</button>
      <button type="button" class="btn primary">中</button>
      <button type="button" class="btn primary">右</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn primary-outline">Outline</button>
      <button type="button" class="btn primary-outline">左</button>
      <button type="button" class="btn primary-outline">中</button>
      <button type="button" class="btn primary-outline">右</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn primary-pale">Pale</button>
      <button type="button" class="btn primary-pale">左</button>
      <button type="button" class="btn primary-pale">中</button>
      <button type="button" class="btn primary-pale">右</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn text-primary">Text Primary</button>
      <button type="button" class="btn text-primary">左</button>
      <button type="button" class="btn text-primary">中</button>
      <button type="button" class="btn text-primary">右</button>
    </div>
    <div class="btn-group">
      <button type="button" class="btn bd-primary">Border Primary</button>
      <button type="button" class="btn bd-primary">左</button>
      <button type="button" class="btn bd-primary">中</button>
      <button type="button" class="btn bd-primary">右</button>
    </div>
</Example>

```html
<div class="btn-group">
  <button type="button" class="btn primary">Primary</button>
  <button type="button" class="btn primary">左</button>
  <button type="button" class="btn primary">中</button>
  <button type="button" class="btn primary">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn primary-outline">Outline</button>
  <button type="button" class="btn primary-outline">左</button>
  <button type="button" class="btn primary-outline">中</button>
  <button type="button" class="btn primary-outline">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn primary-pale">Pale</button>
  <button type="button" class="btn primary-pale">左</button>
  <button type="button" class="btn primary-pale">中</button>
  <button type="button" class="btn primary-pale">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn text-primary">Text Primary</button>
  <button type="button" class="btn text-primary">左</button>
  <button type="button" class="btn text-primary">中</button>
  <button type="button" class="btn text-primary">右</button>
</div>
<div class="btn-group">
  <button type="button" class="btn bd-primary">Border Primary</button>
  <button type="button" class="btn bd-primary">左</button>
  <button type="button" class="btn bd-primary">中</button>
  <button type="button" class="btn bd-primary">右</button>
</div>
```

### 圆角

提供以下几种预设圆角尺寸供选择。

<Example class="flex gap-4 flex-wrap">
  <div class="btn-group rounded-none">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
  <div class="btn-group rounded-sm">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
  <div class="btn-group rounded">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
  <div class="btn-group rounded-md">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
  <div class="btn-group rounded-lg">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
  <div class="btn-group rounded-xl">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
  <div class="btn-group circle">
    <button type="button" class="btn">左</button>
    <button type="button" class="btn">中</button>
    <button type="button" class="btn">右</button>
  </div>
</Example>

```html
<div class="btn-group rounded-none">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group rounded-sm">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group rounded">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group rounded-md">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group rounded-lg">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group rounded-xl">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
<div class="btn-group circle">
  <button type="button" class="btn">左</button>
  <button type="button" class="btn">中</button>
  <button type="button" class="btn">右</button>
</div>
```
## 与下拉菜单组合使用

可以在 `.btn-group` 容器中嵌套 `.dropdown` 组合使用。

<Example class="flex gap-4">
  <div class="btn-group">
    <button type="button" class="btn">春天</button>
    <button type="button" class="btn">夏天</button>
    <div class="dropdown">
      <button type="button" class="btn" data-toggle="dropdown">未来 <span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><a href="###">秋天</a></li>
        <li><a href="###">冬天</a></li>
      </ul>
    </div>
  </div>

  <div class="btn-group">
    <button type="button" class="btn">操作</button>
    <div class="dropdown dropup">
      <button type="button" class="btn" data-toggle="dropdown"><span class="caret"></span></button>
      <ul class="dropdown-menu">
        <li><a href="###">编辑</a></li>
        <li><a href="###">删除</a></li>
        <li class="divider"></li>
        <li><a href="###">撤销</a></li>
      </ul>
    </div>
  </div>
</Example>

```html
<div class="btn-group">
  <button type="button" class="btn">春天</button>
  <button type="button" class="btn">夏天</button>
  <div class="dropdown">
    <button type="button" class="btn" data-toggle="dropdown">未来 <span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="###">秋天</a></li>
      <li><a href="###">冬天</a></li>
    </ul>
  </div>
</div>

<div class="btn-group">
  <button type="button" class="btn">操作</button>
  <div class="dropdown dropup">
    <button type="button" class="btn" data-toggle="dropdown"><span class="caret"></span></button>
    <ul class="dropdown-menu">
      <li><a href="###">编辑</a></li>
      <li><a href="###">删除</a></li>
      <li class="divider"></li>
      <li><a href="###">撤销</a></li>
    </ul>
  </div>
</div>
```
## CSS 类

按钮提供了如下 CSS 类：

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `btn-group`      | 实体类 | 元素作为按钮组组件 |
| `size-xs`        | 修饰类 | 按钮组使用超小号尺寸 |
| `size-sm`        | 修饰类 | 按钮组使用小号尺寸 |
| `size-lg`        | 修饰类 | 按钮组使用大号尺寸 |
| `size-xl`        | 修饰类 | 按钮组使用超大号尺寸 |

