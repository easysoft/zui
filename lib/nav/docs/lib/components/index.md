# 导航

## 基础用法

使用组件类 `.nav` 来获得导航外观 通常搭配 `<ul>`、`<menu>` 和 `<li>` 标签来使用。

::: tabs

== 示例

<Example>
  <menu class="nav">
    <li class="item nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="item nav-item"><a><span class="text">产品</span></a></li>
    <li class="item nav-item"><a><span class="text">价格</span></a></li>
    <li class="item nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="divider"></li>
    <li class="item nav-item">
      <a data-toggle="dropdown" href="#navDropdown">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
    <li class="nav-space"></li>
    <li>
      <div class="btn-group">
        <button type="button" class="btn">预定</button>
        <button type="button" class="btn">在线咨询</button>
      </div>
    </li>
    <li class="nav-space w-4 flex-none"></li>
    <li class="toolbar gap-2">
      <button type="button" class="btn primary-outline bg-none">登录</button>
      <button type="button" class="btn primary">注册</button>
    </li>
  </menu>
  <menu id="navDropdown" class="dropdown-menu menu">
    <li class="menu-item"><a><span class="text">博客</span></a></li>
    <li class="menu-item"><a><span class="text">项目</span></a></li>
    <li class="menu-item"><a><span class="text">关于我们</span></a></li>
  </menu>
</Example>

== HTML

```html
<menu class="nav">
  <li class="item nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li class="item nav-item"><a><span class="text">产品</span></a></li>
  <li class="item nav-item"><a><span class="text">价格</span></a></li>
  <li class="item nav-item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="divider"></li>
  <li class="item nav-item">
    <a data-toggle="dropdown" href="#navDropdown">
      <span class="text">更多</span><span class="caret"></span>
    </a>
  </li>
  <li class="nav-space"></li>
  <li>
    <div class="btn-group">
      <button type="button" class="btn">预定</button>
      <button type="button" class="btn">在线咨询</button>
    </div>
  </li>
  <li class="nav-space w-4 flex-none"></li>
  <li class="toolbar gap-2">
    <button type="button" class="btn primary-outline bg-none">登录</button>
    <button type="button" class="btn primary">注册</button>
  </li>
</menu>
<menu id="navDropdown" class="dropdown-menu menu">
  <li class="menu-item"><a><span class="text">博客</span></a></li>
  <li class="menu-item"><a><span class="text">项目</span></a></li>
  <li class="menu-item"><a><span class="text">关于我们</span></a></li>
</menu>
```

:::

## 带标题的导航

可以通过 CSS 类 `nav-heading` 给导航项设置标题样式。

<Example>
  <menu class="nav">
    <li class="nav-heading">导航标题</li>
    <li class="item nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="item nav-item"><a><span class="text">产品</span></a></li>
    <li class="item nav-item"><a><span class="text">价格</span></a></li>
    <li class="item nav-item disabled pointer-events-none"><a><span class="text">动态</span></a></li>
    <li class="divider"></li>
    <li class="item nav-item">
      <a data-toggle="dropdown" href="#navDropdown">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</Example>

```html
<menu class="nav">
  <li class="nav-heading">导航标题</li>
  ...
</menu>
```

## 导航样式

除了默认样式，还可以通过修饰类为导航应用不同的样式。

### 主要导航 `.nav-primary`

::: tabs

== 示例

<Example>
  <menu class="nav nav-primary">
    <li class="nav-heading">主要导航</li>
    <li class="item nav-item">
      <a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a>
    </li>
    <li class="item nav-item">
      <a><span class="text">产品</span></a>
    </li>
    <li class="item nav-item">
      <a><span class="text">价格</span></a>
    </li>
    <li class="item nav-item">
      <a class="disabled"><span class="text">动态</span></a>
    </li>
    <li class="item nav-item">
      <a data-toggle="dropdown" href="#navDropdown">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</Example>

== HTML

```html
<menu class="nav nav-primary">
  ...
</menu>
```

:::

### 次要导航 `.nav-secondary`

::: tabs

== 示例

<Example>
  <menu class="nav nav-secondary">
    <li class="nav-heading">次要导航</li>
    <li class="item nav-item">
      <a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a>
    </li>
    <li class="item nav-item">
      <a><span class="text">产品</span></a>
    </li>
    <li class="item nav-item">
      <a><span class="text">价格</span></a>
    </li>
    <li class="item nav-item">
      <a class="disabled"><span class="text">动态</span></a>
    </li>
    <li class="item nav-item">
      <a data-toggle="dropdown" href="#navDropdown">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</Example>

== HTML

```html
<menu class="nav nav-secondary">
  ...
</menu>
```

:::

### 圆点导航 `.nav-pills`

::: tabs

== 示例

<Example>
  <menu class="nav nav-pills">
    <li class="nav-heading">圆点导航</li>
    <li class="item nav-item">
      <a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a>
    </li>
    <li class="item nav-item">
      <a><span class="text">产品</span></a>
    </li>
    <li class="item nav-item">
      <a><span class="text">价格</span></a>
    </li>
    <li class="item nav-item">
      <a class="disabled"><span class="text">动态</span></a>
    </li>
    <li class="item nav-item">
      <a data-toggle="dropdown" href="#navDropdown">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</Example>

== HTML

```html
<menu class="nav nav-pills">
  ...
</menu>
```

:::

### 标签导航 `.nav-tabs`

::: tabs

== 示例

<Example>
  <menu class="nav nav-tabs">
    <li class="nav-heading">标签导航</li>
    <li class="item nav-item">
      <a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a>
    </li>
    <li class="item nav-item">
      <a><span class="text">产品</span></a>
    </li>
    <li class="item nav-item">
      <a><span class="text">价格</span></a>
    </li>
    <li class="item nav-item">
      <a class="disabled"><span class="text">动态</span></a>
    </li>
    <li class="item nav-item">
      <a data-toggle="dropdown" href="#navDropdown">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
</Example>

== HTML

```html
<menu class="nav nav-tabs">
  ...
</menu>
```

:::

### 步骤条 `.nav-steps`

::: tabs

== 示例

<Example background="light-circle" class="overflow-auto">
  <menu class="nav nav-steps canvas">
    <li class="nav-item item"><a class="selected"><span class="text">已激活步骤1</span></a></li>
    <li class="nav-item item"><a class="selected"><span class="text">已激活步骤2</span></a></li>
    <li class="nav-item item"><a class="active"><span class="text">当前步骤</span></a></li>
    <li class="nav-item item"><a class="selected"><span class="text">已激活步骤3</span></a></li>
    <li class="nav-item item"><a><span class="text">可点击步骤1</span></a></li>
    <li class="nav-item item"><a><span class="text">可点击步骤2</span></a></li>
    <li class="nav-item item"><a class="disabled"><span class="text">不可点击步骤</span></a></li>
  </menu>
</Example>

== HTML

```html
<menu class="nav nav-steps">
  <li class="nav-item item"><a class="selected"><span class="text">已激活步骤1</span></a></li>
  <li class="nav-item item"><a class="selected"><span class="text">已激活步骤2</span></a></li>
  <li class="nav-item item"><a class="active"><span class="text">当前步骤</span></a></li>
  <li class="nav-item item"><a class="selected"><span class="text">已激活步骤3</span></a></li>
  <li class="nav-item item"><a><span class="text">可点击步骤1</span></a></li>
  <li class="nav-item item"><a><span class="text">可点击步骤2</span></a></li>
  <li class="nav-item item"><a class="disabled"><span class="text">不可点击步骤</span></a></li>
</menu>
```

:::

## 垂直排列

使用修饰类 `nav-stacked` 使导航获得垂直排列样式，可搭配其他各种样式的导航使用。

::: tabs

== 示例

<Example class="flex gap-5">
  <div v-for="navType in ['primary', 'secondary', 'pills', 'tabs']" class="flex-1">
    <div class="text-md pb-4 font-bold">
      <code>.nav-{{navType}}</code>
    </div>
    <menu class="nav nav-stacked" :class="`nav-${navType}`">
      <li class="nav-heading">{{({primary: '主要导航', secondary: '次要导航', pills: '圆点导航', tabs: '标签导航'})[navType]}}</li>
      <li class="item nav-item">
        <a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a>
      </li>
      <li class="item nav-item">
        <a><span class="text">产品</span></a>
      </li>
      <li class="item nav-item">
        <a><span class="text">价格</span></a>
      </li>
      <li class="item nav-item">
        <a class="disabled"><span class="text">动态</span></a>
      </li>
      <li class="item nav-item">
        <a data-toggle="dropdown" href="#navDropdown">
          <span class="text">更多</span><span class="caret"></span>
        </a>
      </li>
    </menu>
  </div>
</Example>

== HTML

```html
<menu class="nav nav-stacked ...">
  ...
</menu>
```

:::

## 自适应宽度的导航

使用修饰类 `nav-justified` 使导航获得自适应宽度样式，可搭配其他各种样式的导航使用。

::: tabs

== 示例

<Example class="col gap-4">
  <div v-for="item in navTypes">
    <menu class="nav nav-justified" :class="'nav-' + item.class ">
      <li class="item nav-item">
        <a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a>
      </li>
      <li class="item nav-item">
        <a><span class="text">产品</span></a>
      </li>
      <li class="item nav-item">
        <a><span class="text">价格</span></a>
      </li>
      <li class="item nav-item">
        <a class="disabled"><span class="text">动态</span></a>
      </li>
      <li class="item nav-item">
        <a data-toggle="dropdown" href="#navDropdown">
          <span class="text">更多</span><span class="caret"></span>
        </a>
      </li>
    </menu>
  </div>
</Example>

== HTML

```html
<menu class="nav nav-justified">
  ...
</menu>
```

:::

::: tip 提示
自适应宽度修饰类不能和垂直排列修饰类混用。
:::

## CSS 类

导航提供了如下 CSS 类

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `nav`              | 实体类 | 元素导航组件 |
| `nav-item`         | 实体类 | 元素导航条目组件 |
| `nav-heading`      | 实体类 | 导航标题组件 |
| `nav-divider`      | 实体类 | 导航分割线组件 |
| `active`           | 修饰类 | 为导航元素启用选中态样式 |
| `nav-simple`       | 修饰类 | 为导航元素启用简单样式 |
| `nav-primary`      | 修饰类 | 为导航元素启用主要导航样式 |
| `nav-secondary`    | 修饰类 | 为导航元素启用次要导航样式 |
| `nav-tabs`         | 修饰类 | 为导航元素启用标签风格导航样式 |
| `nav-pills`        | 修饰类 | 为导航元素启用标签风格导航样式 |
| `nav-stacked`      | 修饰类 | 为导航元素启用垂直排列导航样式 |
| `nav-justified`    | 修饰类 | 为导航元素启用自适应宽度导航样式 |


## CSS 变量

| 变量名称 | 变量含义 |
| -------- | -------- |
| --nav-heading-color            | 导航标题字体颜色 |

<script setup>
const navTypes = [
    {class: 'primary', name: '主要'},
    {class: 'secondary', name: '次要'},
    {class: 'tabs', name: '标签风格'},
    {class: 'pills', name: '圆点'},
];
</script>
