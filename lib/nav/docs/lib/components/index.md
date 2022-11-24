# 导航

## 基本用法

使用组件类`.nav`来获得导航外观 通常搭配`<ul>`,`<li>` 标签来使用

### 基础样式

<Example>
  <div>
    <menu class="nav">
      <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
      <li class="nav-item"><a><span class="text">产品</span></a></li>
      <li class="nav-item"><a><span class="text">价格</span></a></li>
      <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
      <li class="nav-divider"></li>
      <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown1">
        <span class="text">更多</span><span class="caret"></span>
      </a>
      </li>
      <li class="nav-space"></li>
      <li class="nav-btn-group">
      <div class="btn-group">
        <button type="button" class="btn">预定</button>
        <button type="button" class="btn">在线咨询</button>
      </div>
      </li>
      <li class="nav-space w-4 flex-none"></li>
      <li>
        <button type="button" class="btn primary-outline bg-none">登录</button>
        <button type="button" class="btn primary">注册</button>
      </li>
    </menu>
    <menu id="navDropdown1" class="dropdown-menu menu">
      <li class="menu-item"><a><span class="text">博客</span></a></li>
      <li class="menu-item"><a><span class="text">项目</span></a></li>
      <li class="menu-item"><a><span class="text">关于我们</span></a></li>
    </menu>
  </div>
</Example>

```html
<menu class="nav">
  <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li class="nav-item"><a><span class="text">产品</span></a></li>
  <li class="nav-item"><a><span class="text">价格</span></a></li>
  <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider"></li>
  <li class="nav-item">
  <a data-toggle="dropdown" href="#navDropdown1">
    <span class="text">更多</span><span class="caret"></span>
  </a>
  </li>
  <li class="nav-space"></li>
  <li class="nav-btn-group">
  <div class="btn-group">
    <button type="button" class="btn">预定</button>
    <button type="button" class="btn">在线咨询</button>
  </div>
  </li>
  <li class="nav-space w-4 flex-none"></li>
  <li>
    <button type="button" class="btn primary-outline bg-none">登录</button>
    <button type="button" class="btn primary">注册</button>
  </li>
</menu>
<menu id="navDropdown1" class="dropdown-menu menu">
  <li class="menu-item"><a><span class="text">博客</span></a></li>
  <li class="menu-item"><a><span class="text">项目</span></a></li>
  <li class="menu-item"><a><span class="text">关于我们</span></a></li>
</menu>
```

<script setup>
  const arrayNav = [
    {class: 'simple', name: '简单'},
    {class: 'primary', name: '主要'},
    {class: 'secondary', name: '次要'},
    {class: 'tabs', name: '标签风格'},
    {class: 'pills', name: '圆点'},
  ]
</script>

## 丰富的导航样式
<Example v-for="item in arrayNav" >
 <div class="text-lg pb-4 font-black">
   {{ item.name + '导航' }}
 </div>
 <div class="text-md pb-4 font-bold">
   {{ '使用 nav- ' + item.class + '修饰类获得' + item.name + '导航样式' }}
 </div>
 <menu class="nav" :class="'nav-' + item.class ">
   <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
   <li class="nav-item"><a><span class="text">产品</span></a></li>
   <li class="nav-item"><a><span class="text">价格</span></a></li>
   <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
   <li class="nav-item">
     <a data-toggle="dropdown" href="#navDropdown2">
       <span class="text">更多</span><span class="caret"></span>
     </a>
   </li>
 </menu>
 <menu id="navDropdown2" class="dropdown-menu menu">
   <li class="menu-item"><a><span class="text">博客</span></a></li>
   <li class="menu-item"><a><span class="text">项目</span></a></li>
   <li class="menu-item"><a><span class="text">关于我们</span></a></li>
 </menu>
</Example>

```html
 <menu class="nav nav-simple">
   ...
 </menu>

 <menu class="nav nav-primary">
   ...
 </menu>

 <menu class="nav nav-secondary">
   ...
 </menu>

 <menu class="nav nav-tabs">
   ...
 </menu>

 <menu class="nav nav-pills">
   ...
 </menu>
```

## 垂直排列的导航

使用修饰类 `nav-stacked` 使导航获得垂直排列样式 可搭配其他各种样式的导航使用

<Example class="flex gap-5">
 <div v-for="item in arrayNav" class="flex-1">
   <div class="text-md pb-4 font-bold">
     {{ 'nav- ' + item.class}}
   </div>
   <menu class="nav nav-stacked" :class="'nav-' + item.class ">
     <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
     <li class="nav-item"><a><span class="text">产品</span></a></li>
     <li class="nav-item"><a><span class="text">价格</span></a></li>
     <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
     <li class="nav-item">
       <a data-toggle="dropdown" href="#navDropdown2">
         <span class="text">更多</span><span class="caret"></span>
       </a>
     </li>
   </menu>
   <menu id="navDropdown2" class="dropdown-menu menu">
     <li class="menu-item"><a><span class="text">博客</span></a></li>
     <li class="menu-item"><a><span class="text">项目</span></a></li>
     <li class="menu-item"><a><span class="text">关于我们</span></a></li>
   </menu>
 </div>
</Example>

```html
<menu class="nav nav-stacked ...">
  ...
</menu>
```

## 自适应宽度的导航

使用修饰类 `nav-justified` 使导航获得自适应宽度样式 可搭配其他各种样式的导航使用

自适应宽度修饰类不能和垂直排列修饰类混用

<Example>
 <div v-for="item in arrayNav" class="flex-1">
   <menu class="nav nav-justified py-4" :class="'nav-' + item.class ">
     <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
     <li class="nav-item"><a><span class="text">产品</span></a></li>
     <li class="nav-item"><a><span class="text">价格</span></a></li>
     <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
     <li class="nav-item">
       <a data-toggle="dropdown" href="#navDropdown2">
         <span class="text">更多</span><span class="caret"></span>
       </a>
     </li>
   </menu>
   <menu id="navDropdown2" class="dropdown-menu menu">
     <li class="menu-item"><a><span class="text">博客</span></a></li>
     <li class="menu-item"><a><span class="text">项目</span></a></li>
     <li class="menu-item"><a><span class="text">关于我们</span></a></li>
   </menu>
 </div>
</Example>

```html
<menu class="nav nav-justified ...">
  ...
</menu>
```

## 带标题的导航与禁用样式 

可以通过修饰类 'nav-heading' 给导航项设置标题样式, 通过修饰类 `disabled` 给导航项设置禁用样式。

<Example>
  <menu v-for="item in arrayNav" :class="'nav-' + item.class" class="nav nav-justified py-2">
    <li class="nav-heading">导航标题</li>
    <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
    <li class="nav-item"><a><span class="text">产品</span></a></li>
    <li class="nav-item"><a><span class="text">价格</span></a></li>
    <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
    <li class="nav-divider"></li>
    <li class="nav-item">
      <a data-toggle="dropdown" href="#navDropdown8">
        <span class="text">更多</span><span class="caret"></span>
      </a>
    </li>
  </menu>
  <div class="flex gap-3 pt-4">
    <menu v-for="item in arrayNav" :class="'nav-' + item.class" class="nav nav-stacked flex-1">
      <li class="nav-heading">导航标题</li>
      <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
      <li class="nav-item"><a><span class="text">产品</span></a></li>
      <li class="nav-item"><a><span class="text">价格</span></a></li>
      <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
      <li class="nav-divider"></li>
      <li class="nav-item">
        <a data-toggle="dropdown" href="#navDropdown8">
          <span class="text">更多</span><span class="caret"></span>
        </a>
      </li>
    </menu>
  </div>
</Example>

```html
<menu class="nav nav-stacked">
  <li class="nav-heading">导航标题</li>
  <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
  <li class="nav-item"><a><span class="text">产品</span></a></li>
  <li class="nav-item"><a><span class="text">价格</span></a></li>
  <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
  <li class="nav-divider"></li>
  <li class="nav-item">
    <a data-toggle="dropdown" href="#navDropdown8">
      <span class="text">更多</span><span class="caret"></span>
    </a>
  </li>
</menu>

...
```

## 带分隔线的导航
<Example>
 <div v-for="item in arrayNav" class="flex-1">
   <menu class="nav py-4" :class="'nav-' + item.class ">
     <li class="nav-item"><a class="active"><i class="icon icon-home"></i><span class="text">首页</span></a></li>
     <li class="nav-item"><a><span class="text">产品</span></a></li>
     <li class="nav-item"><a><span class="text">价格</span></a></li>
     <li class="nav-divider"></li>
     <li class="nav-item"><a class="disabled"><span class="text">动态</span></a></li>
     <li class="nav-item">
       <a data-toggle="dropdown" href="#navDropdown2">
         <span class="text">更多</span><span class="caret"></span>
       </a>
     </li>
   </menu>
   <menu id="navDropdown2" class="dropdown-menu menu">
     <li class="menu-item"><a><span class="text">博客</span></a></li>
     <li class="menu-item"><a><span class="text">项目</span></a></li>
     <li class="menu-item"><a><span class="text">关于我们</span></a></li>
   </menu>
 </div>
</Example>

## CSS 类

导航提供了如下CSS类

| 类        | 类型           | 作用  |
| ------------- |:-------------:| ----- |
| `nav`              | 实体类 | 元素导航组件 |
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
| --nav-radius                   | 导航圆角大小 |
| --nav-border-color             | 导航边框颜色 |
| --nav-secon-border-color       | 次要导航边框颜色 |
| --nav-heading-bg-color         | 导航标题背景颜色 |
| --nav-heading-color            | 导航标题字体颜色 |
| --nav-heading-color            | 导航标题字体颜色 |
| --nav-divider-color            | 导航分隔线颜色 |

