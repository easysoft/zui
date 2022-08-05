# 导航

## 基本用法

使用组件类`.nav`来获得导航外观 通常搭配`<ul>`,`<li>` 标签来使用

```html:example
<ul class="nav">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>
```

### -simple

```html:example
<ul class="nav -simple">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>
```

## 主要导航

```html:example
<ul class="nav -nav-primary">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>
```

## 次要导航

 ```html:example
 <ul class="nav -nav-secondary">
   <li class="active"><a href="###">首页</a></li>
   <li><a href="###">动态 </a></li>
   <li><a href="###">项目 </a></li>
 </ul>
 ```

## 标签页导航

 ```html:example
 <ul class="nav -nav-tabs">
   <li><a href="###">首页</a></li>
   <li class="active"><a class="active" href="###">动态 </a></li>
   <li><a href="###">项目 </a></li>
 </ul>
 ```

## 丰富样式

### 圆点导航

```html:example
<ul class="nav -nav-circle">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>
```
### 垂直排列

```html:example
<ul class="nav -nav-primary -nav-stacked">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>

<ul class="nav -nav-tabs -nav-stacked">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>

<ul class="nav -nav-secondary -nav-stacked">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>
```


### 自适应宽度

自适应宽度不能和垂直布局一起使用
``` html:example

<ul class="nav -nav-primary -nav-justified">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul> 
<ul class="nav -nav-secondary -nav-justified">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul> 
<ul class="nav -nav-tabs -nav-justified">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul> 
<ul class="nav -nav-circle -nav-justified">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul> 
```

### 带标题的导航

```html:example:gap-3

<ul class="nav -nav-tabs">
  <li class="li-title">这是标题</li>
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>
<ul class="nav">
  <li class="li-title">这是标题</li>
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>
<ul class="nav -simple">
  <li class="li-title">这是标题</li>
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>
<ul class="nav -nav-primary">
  <li class="li-title">这是标题</li>
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>

<ul class="nav -nav-secondary">
  <li class="li-title">这是标题</li>
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>
<ul class="nav -nav-primary -nav-stacked">
  <li class="li-title">这是标题</li>
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>
<ul class="nav -nav-stacked -nav-circle">
  <li class="li-title">这是标题</li>
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
</ul>
```
<style>
.nav{
  margin-bottom:15px;
}
</style>
