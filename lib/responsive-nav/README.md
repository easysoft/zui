# 自适应导航

## ResponsiveNavHelper

适用于静态导航。

```html:example
<menu class="nav relative z-10 w-full" zui-create zui-create-responsivenavhelper>
  <li class="item nav-item"><a class="active"><span class="text">Home</span></a></li>
  <li class="item nav-item"><a><span class="text">Products</span></a></li>
  <li class="item nav-item"><a><span class="text">Price</span></a></li>
  <li class="item nav-item"><a><span class="text">Services</span></a></li>
  <li class="item nav-item"><a><span class="text">Cases</span></a></li>
  <li class="item nav-item"><a class="disabled"><span class="text">Dynamic</span></a></li>
  <li class="divider"></li>
  <li class="item nav-item"><a><span class="text">Store</span></a></li>
  <li class="item nav-item"><a><span class="text">Project</span></a></li>
  <li class="item nav-item"><a><span class="text">Download</span></a></li>
  <li class="item nav-item"><a><span class="text">Documentation</span></a></li>
  <li class="item nav-item"><a class="active"><span class="text">Forum</span></a></li>
  <li class="item nav-item"><a><span class="text">Q&A</span></a></li>
    <li class="item nav-item"><input type="search" class="form-control mx-2" placeholder="Search"></li>
  <li class="item nav-item is-rsh-fixed"><a><span class="text">Feedback</span></a></li>
  <li class="divider"></li>
  <li class="item nav-item"><button type="button" class="btn mx-2">Lucky</button></li>
  <li class="item nav-item">
    <a data-toggle="dropdown" data-items='[{"text":"Life"},{"text":"Share"},{"text":"Feed"}]'><span class="text">Blog</span><span class="caret"></span></a>
  </li>
  <li class="item nav-item"><a><span class="text">About Us</span></a></li>
</menu>
```
