# 导航

## 基本用法

使用组件类`.nav`来获得导航外观 通常搭配`<ul>`,`<li>` 标签来使用

<Example>
<ul class="nav">
  <li class="active"><a href="your/nice/url">首页</a></li>
  <li><a href="your/nice/url">动态 </a></li>
  <li><a href="your/nice/url">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="your/nice/url">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>

```html
<ul class="nav">
  <li class="active"><a href="your/nice/url">首页</a></li>
  <li><a href="your/nice/url">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="your/nice/url">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="your/nice/url">更多 <span class="caret"></span></a>
  </li>
</ul>
```

<Example>
<ul class="nav -simple">
  <li class="active"><a href="your/nice/url">首页</a></li>
  <li><a href="your/nice/url">动态 </a></li>
  <li><a href="your/nice/url">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="your/nice/url">更多 <span class="caret"></span></a>
  </li>
</ul>
</Example>

```html
<ul class="nav -simple">
  <li class="active"><a href="your/nice/url">首页</a></li>
  <li><a href="your/nice/url">动态 <span class="label label-badge label-success">4</span></a></li>
  <li><a href="your/nice/url">项目 </a></li>
  <li>
    <a class="dropdown-toggle" data-toggle="dropdown" href="your/nice/url">更多 <span class="caret"></span></a>
  </li>
</ul>
```
window.onload = function () {
    const $nav = document.querySelectorAll('ul.nav');
    console.log($nav);
    document.onclick = function (e) {
        if (e !== null && e.target instanceof HTMLElement && e.target.tagName == 'A') {
            const element = e.target.parentNode.parentNode.querySelector('.active');
            if (element) {
                element.classList.remove('active');
            }
            e.target.parentNode.classList.add('active');
        }
    };
};
