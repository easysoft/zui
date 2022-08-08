# 导航

## 基本用法

使用组件类`.nav`来获得导航外观 通常搭配`<ul>`,`<li>` 标签来使用

### 基础样式

<Example>
<ul class="nav">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a href="">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>

```html
<ul class="nav">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
```

### 简单导航
<Example>
<ul class="nav -simple">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>

```html
<ul class="nav -simple">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
```


## 有等级区分的导航

### 一级导航

使用.-nav-primary修饰类获得一级导航样式 

<Example>
<ul class="nav -nav-primary">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>


```html
<ul class="nav -nav-primary">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
```

### 二级导航

使用.-nav-secondary修饰类获取二级导航样式，通常搭配一级导航使用。

<Example>
<ul class="nav -nav-secondary">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>

```html
<ul class="nav -nav-secondary">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
```

## 标签风格的导航

使用.-nav-tabs 修饰类获取标签页风格导航样式

<Example>
<ul class="nav -nav-tabs">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>


```html
<ul class="nav -nav-tabs">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
```

## 垂直排列的导航

<Example>
<ul class="nav -nav-stacked">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>


```html
<ul class="nav -stacked">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
```
## 自适应宽度的导航

自适应宽度修饰类不能和垂直排列修饰类混用

<Example>
<ul class="nav -nav-justified">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>


```html
<ul class="nav -nav-justified">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
```

## 圆点导航

<Example>
<ul class="nav -nav-circle">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>


```html
<ul class="nav -nav-justified">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
```

## 禁用导航

<Example>
<ul class="nav">
  <li class="active"><a href="###">首页</a></li>
  <li class="-disabled"><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>


```html
<ul class="nav -nav-justified">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
```

## 带标题的导航

<Example>
<ul class="nav">
  <li class="li-title">这是一个标题</li>
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 </a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>


```html
<ul class="nav -nav-justified">
  <li class="active"><a href="###">首页</a></li>
  <li><a href="###">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="###">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="###">更多 <span class="caret"></span></a>
  </li>
</ul>
```



<script>
    window.onload = function () {
        const $nav = document.querySelectorAll('ul.nav');
        console.log($nav);
        $nav.forEach(ele=>{
          ele.onclick = function (e) {
              if (e !== null && e.target instanceof HTMLElement && e.target.tagName == 'A') {
                  console.log(e.target.parentNode.classList, 'pNode');
                  if (e.target.parentNode.classList.contains('-disabled')) {
                      return;
                  }
                  const element = e.target.parentNode.parentNode.querySelector('.active');
                  if (element) {
                      element.classList.remove('active');
                  }
                  e.target.parentNode.classList.add('active');
              }
          }
        });
    };
</script>
