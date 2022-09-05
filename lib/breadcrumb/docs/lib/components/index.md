# 面包屑

## 基本用法

使用类 `.breadcrumb` 来实现面包屑，通常搭配 `<ol>`、`<li>` 元素使用。

<Example>
  <ol class="breadcrumb">
    <li><a href="your/url/">首页</a></li>
    <li><a href="your/url/">图书馆</a></li>
    <li class="active">数据</li>
  </ol>
</Example>

```html
<ol class="breadcrumb">
  <li><a href="your/url/">首页</a></li>
  <li><a href="your/url/">图书馆</a></li>
  <li class="active">数据</li>
</ol>
```
 ## CSS 类

 面包屑提供了如下CSS类

   | 类        | 类型           | 作用  |
   | ------------- |:-------------:| ----- |
   | `breadcrumb`      | 实体类 | 元素作为面包屑组件 |


 ## CSS 变量

  | 变量名称 | 变量含义 |
  | -------- | -------- |
  | --breadcrumb-divider           | 面包屑分割元素标签类型 |
  | --breadcrumb-divider-color     | 面包屑分割元素颜色 |
  | --breadcrumb-color-active      | 面包屑选中态元素颜色 |
