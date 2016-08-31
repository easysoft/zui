section: view
id: list
description: 包含图文内容的列表
icon: icon-list
filter: liebiao lb
---

# 列表

列表视图用于展示一组包含图文的内容。

## 结构

列表使用 `.list` 作为父级容器，并使用如下特殊类标记子容器：

<table class="table">
  <tbody>
    <tr>
      <td style="width: 100px">`<header>`</td>
      <td style="width: 80px">头部</td>
      <td>标题等信息</td>
    </tr>
    <tr>
      <td>`.items`</td>
      <td>列表项组</td>
      <td>可以在 `.list` 内堆叠多个列表项组。</td>
    </tr>
    <tr>
      <td>`<footer>`</td>
      <td>底部</td>
      <td>显示分页信息等。</td>
    </tr>
  </tbody>
</table>

一般 HTML 结构如下：

```html
<div class="list">
  <!-- 列表头部 -->
  <header>
    <h1>列表标题</h1>
  </header>
  <!-- 列表项组 -->
  <section class="items">
    <div class="item"></div>
    ...
  </section>
  <!-- 列表底部 -->
  <footer>
    <ul class="pager pager-justify">
      <li class="previous"><a href="#"><i class="icon-arrow-left"></i> 上一页</a></li>
      <li class="next disabled"><a href="#">没有下一页 <i class="icon-arrow-right"></i></a></li>
    </ul>
  </footer>
</div>
```

列表项组 `.items` 也可以脱离列表容器 `.list` 单独使用。

## 列表项

为用作列表项的元素添加 `.item` 类，所有列表项都必须作为列表项组（`.items`）的直接子元素。

列表项内可以包含以下特殊类：

 - `.item-heading`，作为列表项标题容器；
 - `.item-content`，作为列表附加内容容器；
 - `.item-footer`，作为列表底部信息容器；
 - `.media`，作为缩略图容器，通常放置在 `.item-content` 内，和 `.pull-left` 或 `.pull-right` 一起使用。

###

<example>
  <div class="items">
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">维基</div>
        <h4><a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
  </div>
</example>

```html
<div class="items">
  <div class="item">
    <div class="item-heading">
      <div class="pull-right label label-success">维基</div>
      <h4><a href="###">HTML5 发展历史</a></h4>
    </div>
    <div class="item-content">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
    <div class="item-footer">
      <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
    </div>
  </div>
</div>
```

### 包含缩略图

在 `.item-content` 内使用 `.media` 包裹图片作为缩略图。

在 `.media` 上使用 `.pull-left` 或 `.pull-right` 来让缩略图居左或居右放置。此时默认情况下缩略图最大宽度为 `150px`，如果要更改缩略图大学，你可以手动为缩略图应用样式。

<example>
  <div class="items">
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">维基</div>
        <h4><a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="media pull-left"><img src="docs/img/img2.jpg" alt=""></div>
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">维基</div>
        <h4><a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="media pull-right"><img src="docs/img/img2.jpg" alt=""></div>
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">维基</div>
        <h4><a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="media"><img src="docs/img/slide1.jpg" alt=""></div>
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="items">
  <div class="item">
    <div class="item-heading">
      <div class="pull-right label label-success">维基</div>
      <h4><a href="###">HTML5 发展历史</a></h4>
    </div>
    <div class="item-content">
      <div class="media pull-left"><img src="docs/img/img2.jpg" alt=""></div>
      <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
    </div>
    <div class="item-footer">
      <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
    </div>
  </div>
  <div class="item">
    <div class="item-heading">
      <div class="pull-right label label-success">维基</div>
      <h4><a href="###">HTML5 发展历史</a></h4>
    </div>
    <div class="item-content">
      <div class="media pull-right"><img src="docs/img/img2.jpg" alt=""></div>
      <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
    </div>
    <div class="item-footer">
      <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
    </div>
  </div>
  <div class="item">
    <div class="item-heading">
      <div class="pull-right label label-success">维基</div>
      <h4><a href="###">HTML5 发展历史</a></h4>
    </div>
    <div class="item-content">
      <div class="media"><img src="docs/img/slide1.jpg" alt=""></div>
      <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
    </div>
    <div class="item-footer">
      <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
    </div>
  </div>
</div>
```

### 鼠标悬停效果

为 `.items` 添加  `.items-hover` 类可以为列表项添加鼠标悬停效果。

<example>
  <div class="items items-hover">
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">维基</div>
        <h4><a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="media pull-right"><img src="docs/img/img2.jpg" alt=""></div>
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
  </div>
</example>

```html
<div class="items items-hover">
  <div class="item">
    <div class="item-heading">
      <div class="pull-right label label-success">维基</div>
      <h4><a href="###">HTML5 发展历史</a></h4>
    </div>
    <div class="item-content">
      <div class="media pull-right"><img src="docs/img/img2.jpg" alt=""></div>
      <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
    </div>
    <div class="item-footer">
      <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
    </div>
  </div>
</div>
```

## 综合示例

<example>
  <div class="list">
    <header>
      <h3><i class="icon-list-ul"></i> 最新动态 <small>更新 123 条</small></h3>
    </header>
    <div class="items items-hover">
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><span class="text-muted">2013-11-11 16:14:37</span> &nbsp; <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a></div>
          <h4><a href="###">HTML5 发展历史</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right label label-success">维基</div>
          <h4><a href="###">HTML5 发展历史</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right label label-success">维基</div>
          <h4><a href="###">HTML5 发展历史</a></h4>
        </div>
        <div class="item-content">
          <div class="media pull-right"><img src="docs/img/img2.jpg" alt=""></div>
          <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> 编辑</a> &nbsp;<a href="#"><i class="icon-remove"></i> 删除</a></div>
          <h4><span class="label label-success">维基</span> <a href="###">HTML5 发展历史</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
    </div>
    <footer>
      <ul class="pager">
        <li class="previous"><a href="#">« 上一页</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">6</a></li>
        <li class="active"><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">12</a></li>
        <li class="next"><a href="#">下一页 »</a></li>
      </ul>
    </footer>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="list">
  <header>
    <h3><i class="icon-list-ul"></i> 最新动态 <small>更新 123 条</small></h3>
  </header>
  <div class="items items-hover">
    <div class="item">
      <div class="item-heading">
        <div class="pull-right"><span class="text-muted">2013-11-11 16:14:37</span> &nbsp; <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a></div>
        <h4><a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">维基</div>
        <h4><a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">维基</div>
        <h4><a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="media pull-right"><img src="docs/img/img2.jpg" alt=""></div>
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right"><a href="###"><i class="icon-pencil"></i> 编辑</a> &nbsp;<a href="#"><i class="icon-remove"></i> 删除</a></div>
        <h4><span class="label label-success">维基</span> <a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
  </div>
  <footer>
    <ul class="pager">
      <li class="previous"><a href="#">« 上一页</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">⋯</a></li>
      <li><a href="#">6</a></li>
      <li class="active"><a href="#">7</a></li>
      <li><a href="#">8</a></li>
      <li><a href="#">9</a></li>
      <li><a href="#">⋯</a></li>
      <li><a href="#">12</a></li>
      <li class="next"><a href="#">下一页 »</a></li>
    </ul>
  </footer>
</div>
```

## 更紧凑的列表

通过为 `.list` 添加 `list-condensed` 类来获得更加紧凑的列表视图，适合放置在没有内边距的容器内。

<example style="padding: 0">
  <div class="list list-condensed">
    <header>
      <h3><i class="icon-list-ul"></i> 最新动态 <small>更新 123 条</small></h3>
    </header>
    <div class="items items-hover">
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><span class="text-muted">2013-11-11 16:14:37</span> &nbsp; <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a></div>
          <h4><a href="###">HTML5 发展历史</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right label label-success">维基</div>
          <h4><a href="###">HTML5 发展历史</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right label label-success">维基</div>
          <h4><a href="###">HTML5 发展历史</a></h4>
        </div>
        <div class="item-content">
          <div class="media pull-right"><img src="docs/img/img2.jpg" alt=""></div>
          <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> 编辑</a> &nbsp;<a href="#"><i class="icon-remove"></i> 删除</a></div>
          <h4><span class="label label-success">维基</span> <a href="###">HTML5 发展历史</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
    </div>
    <footer>
      <ul class="pager">
        <li class="previous"><a href="#">« 上一页</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">6</a></li>
        <li class="active"><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">12</a></li>
        <li class="next"><a href="#">下一页 »</a></li>
      </ul>
    </footer>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="list list-condensed">
  <header>
    <h3><i class="icon-list-ul"></i> 最新动态 <small>更新 123 条</small></h3>
  </header>
  <div class="items items-hover">
    <div class="item">
      <div class="item-heading">
        <div class="pull-right"><span class="text-muted">2013-11-11 16:14:37</span> &nbsp; <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a></div>
        <h4><a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">维基</div>
        <h4><a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">维基</div>
        <h4><a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="media pull-right"><img src="docs/img/img2.jpg" alt=""></div>
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right"><a href="###"><i class="icon-pencil"></i> 编辑</a> &nbsp;<a href="#"><i class="icon-remove"></i> 删除</a></div>
        <h4><span class="label label-success">维基</span> <a href="###">HTML5 发展历史</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML 5草案的前身名为Web Applications 1.0，是在2004年由WHATWG提出。2008年1月22日，第一份正式草案发布。WHATWG表示该规范是目前仍在进行的工作，仍须多年的努力。[8]目前Mozilla Firefox、Google Chrome、Opera、Safari（版本4以上）、Internet Explorer（版本9以上）已支持HTML5技术。</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
  </div>
  <footer>
    <ul class="pager">
      <li class="previous"><a href="#">« 上一页</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">⋯</a></li>
      <li><a href="#">6</a></li>
      <li class="active"><a href="#">7</a></li>
      <li><a href="#">8</a></li>
      <li><a href="#">9</a></li>
      <li><a href="#">⋯</a></li>
      <li><a href="#">12</a></li>
      <li class="next"><a href="#">下一页 »</a></li>
    </ul>
  </footer>
</div>
```
