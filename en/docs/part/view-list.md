section: view
id: list
description: Contains a list of graphic content
icon: icon-list
filter: liebiao lb
---

# List

List view is used to display a set of content containing graphics.

## Structure

Use `.list` as a parent container. The following special classes to mark child containers:

<table class="table">
  <tbody>
    <tr>
      <td style="width: 100px">`<header>`</td>
      <td style="width: 80px">header</td>
      <td>Title and other information</td>
    </tr>
    <tr>
      <td>`.items`</td>
      <td>List item group</td>
      <td>Stack multiple list item groups in `.list`</td>
    </tr>
    <tr>
      <td>`<footer>`</td>
      <td>bottom</td>
      <td>Display pager information, etc.</td>
    </tr>
  </tbody>
</table>

HTML Structure is as follows:

```html
<div class="list">
  <!-- List header -->
  <header>
    <h1>List title</h1>
  </header>
  <!-- List item group -->
  <section class="items">
    <div class="item"></div>
    ...
  </section>
  <!-- Bottom of the list -->
  <footer>
    <ul class="pager pager-justify">
      <li class="previous"><a href="#"><i class="icon-arrow-left"></i> Previous page</a></li>
      <li class="next disabled"><a href="#">No next page <i class="icon-arrow-right"></i></a></li>
    </ul>
  </footer>
</div>
```

`.items` can also be used alone and independent of `.list`.

## List item

Add `.item` classes to elements used as list items. All list items must be used as child elements of list item groups(`.items`).

The following special classes can be embeded in a list item:

 - `.item-heading`: A list item header container;
 - `.item-content`: Addtional content container in a list;
 - `.item-footer`: As the bottom information container；
 - `.media`: A thumbnail container. Usually placed in `.item-content` to work with `.pull-left` or `.pull-right`.

###

<example>
  <div class="items">
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">Wiki</div>
        <h4><a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the latest multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
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
      <div class="pull-right label label-success">Wiki</div>
      <h4><a href="###">HTML5 Development History</a></h4>
    </div>
    <div class="item-content">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the latemultimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
    <div class="item-footer">
      <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
    </div>
  </div>
</div>
```

### Thumbnails

Use `.media` in `.item-content` to wrap images as a thumbnails.

Use `.pull-left` or `.pull-right` in `.media` to make the thumbnails align left or right. The maximum width of the thumbnail is `150px` by default. If you want to change the thumbnail size, you can manually apply styles to thumbnails.

<example>
  <div class="items">
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">Wiki</div>
        <h4><a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="media pull-left"><img src="../docs/img/img2.jpg" alt=""></div>
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update     and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">Wiki</div>
        <h4><a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="media pull-right"><img src="../docs/img/img2.jpg" alt=""></div>
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">Wiki</div>
        <h4><a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="media"><img src="../docs/img/slide1.jpg" alt=""></div>
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
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
      <div class="pull-right label label-success">Wiki</div>
      <h4><a href="###">HTML5 Development History</a></h4>
    </div>
    <div class="item-content">
      <div class="media pull-left"><img src="../docs/img/img2.jpg" alt=""></div>
      <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the latemultimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
    </div>
    <div class="item-footer">
      <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
    </div>
  </div>
  <div class="item">
    <div class="item-heading">
      <div class="pull-right label label-success">Wiki</div>
      <h4><a href="###">HTML5 Development History</a></h4>
    </div>
    <div class="item-content">
      <div class="media pull-right"><img src="../docs/img/img2.jpg" alt=""></div>
      <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
    </div>
    <div class="item-footer">
      <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
    </div>
  </div>
  <div class="item">
    <div class="item-heading">
      <div class="pull-right label label-success">Wiki</div>
      <h4><a href="###">HTML5 Development History</a></h4>
    </div>
    <div class="item-content">
      <div class="media"><img src="../docs/img/slide1.jpg" alt=""></div>
      <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
    </div>
    <div class="item-footer">
      <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
    </div>
  </div>
</div>
```

### Mouse hovering

Add `.items-hover` classes for `.items` to add mouse hovering effects to the list items.

<example>
  <div class="items items-hover">
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">Wiki</div>
        <h4><a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="media pull-right"><img src="../docs/img/img2.jpg" alt=""></div>
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
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
      <div class="pull-right label label-success">Wiki</div>
      <h4><a href="###">HTML5 Development History</a></h4>
    </div>
    <div class="item-content">
      <div class="media pull-right"><img src="../docs/img/img2.jpg" alt=""></div>
      <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
    </div>
    <div class="item-footer">
      <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
    </div>
  </div>
</div>
```

## Comprehensive examples

<example>
  <div class="list">
    <header>
      <h3><i class="icon-list-ul"></i> Latest News <small>Update 123 articles</small></h3>
    </header>
    <div class="items items-hover">
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><span class="text-muted">2013-11-11 16:14:37</span> &nbsp; <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a></div>
          <h4><a href="###">HTML5 Development History</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right label label-success">Wiki</div>
          <h4><a href="###">HTML5 Development History</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right label label-success">Wiki</div>
          <h4><a href="###">HTML5 Development History</a></h4>
        </div>
        <div class="item-content">
          <div class="media pull-right"><img src="../docs/img/img2.jpg" alt=""></div>
          <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><span class="label label-success">Wiki</span> <a href="###">HTML5 Development History</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
    </div>
    <footer>
      <ul class="pager">
        <li class="previous"><a href="#">« Previous page</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">6</a></li>
        <li class="active"><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">12</a></li>
        <li class="next"><a href="#">Next page »</a></li>
      </ul>
    </footer>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="list">
  <header>
    <h3><i class="icon-list-ul"></i> Latest News <small>Update 123 articles</small></h3>
  </header>
  <div class="items items-hover">
    <div class="item">
      <div class="item-heading">
        <div class="pull-right"><span class="text-muted">2013-11-11 16:14:37</span> &nbsp; <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a></div>
        <h4><a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">Wiki</div>
        <h4><a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">Wiki</div>
        <h4><a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="media pull-right"><img src="../docs/img/img2.jpg" alt=""></div>
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
        <h4><span class="label label-success">Wiki</span> <a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
  </div>
  <footer>
    <ul class="pager">
      <li class="previous"><a href="#">« Previous page</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">⋯</a></li>
      <li><a href="#">6</a></li>
      <li class="active"><a href="#">7</a></li>
      <li><a href="#">8</a></li>
      <li><a href="#">9</a></li>
      <li><a href="#">⋯</a></li>
      <li><a href="#">12</a></li>
      <li class="next"><a href="#">Next page »</a></li>
    </ul>
  </footer>
</div>
```

## Condensed list

Add `list-condensed` classes in `.list` to get a more condensed list view. It is to be placed in containers without paddings.

<example style="padding: 0">
  <div class="list list-condensed">
    <header>
      <h3><i class="icon-list-ul"></i> Latest News <small>Update 123 articles</small></h3>
    </header>
    <div class="items items-hover">
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><span class="text-muted">2013-11-11 16:14:37</span> &nbsp; <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a></div>
          <h4><a href="###">HTML5 Development History</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right label label-success">Wiki</div>
          <h4><a href="###">HTML5 Development History</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right label label-success">Wiki</div>
          <h4><a href="###">HTML5 Development History</a></h4>
        </div>
        <div class="item-content">
          <div class="media pull-right"><img src="../docs/img/img2.jpg" alt=""></div>
          <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
      <div class="item">
        <div class="item-heading">
          <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
          <h4><span class="label label-success">Wiki</span> <a href="###">HTML5 Development History</a></h4>
        </div>
        <div class="item-content">
          <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
        </div>
        <div class="item-footer">
          <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
        </div>
      </div>
    </div>
    <footer>
      <ul class="pager">
        <li class="previous"><a href="#">« Previous page</a></li>
        <li><a href="#">1</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">6</a></li>
        <li class="active"><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">⋯</a></li>
        <li><a href="#">12</a></li>
        <li class="next"><a href="#">Next page »</a></li>
      </ul>
    </footer>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="list list-condensed">
  <header>
    <h3><i class="icon-list-ul"></i> Latest News <small>Update 123 articles</small></h3>
  </header>
  <div class="items items-hover">
    <div class="item">
      <div class="item-heading">
        <div class="pull-right"><span class="text-muted">2013-11-11 16:14:37</span> &nbsp; <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a></div>
        <h4><a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">Wiki</div>
        <h4><a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right label label-success">Wiki</div>
        <h4><a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="media pull-right"><img src="../docs/img/img2.jpg" alt=""></div>
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
    <div class="item">
      <div class="item-heading">
        <div class="pull-right"><a href="###"><i class="icon-pencil"></i> edit</a> &nbsp;<a href="#"><i class="icon-remove"></i> delete</a></div>
        <h4><span class="label label-success">Wiki</span> <a href="###">HTML5 Development History</a></h4>
      </div>
      <div class="item-content">
        <div class="text">HTML5 was first released in public-facing form on 22 January 2008, with a major update and "W3C Recommendation" status in October 2014. Its goals were to improve the language with support for the late multimedia and other new features; to keep the language both easily readable by humans and consistently understood by computers and devices such as web browsers, parsers, etc., without XHTML's rigidity; and to remain backward-compatible with older software. HTML5 is intended to subsume not only HTML 4, but also XHTML 1 and DOM Level 2 HTML.</div>
      </div>
      <div class="item-footer">
        <a href="#" class="text-muted"><i class="icon-comments"></i> 243</a> &nbsp; <span class="text-muted">2013-11-11 16:14:37</span>
      </div>
    </div>
  </div>
  <footer>
    <ul class="pager">
      <li class="previous"><a href="#">« Previous page</a></li>
      <li><a href="#">1</a></li>
      <li><a href="#">⋯</a></li>
      <li><a href="#">6</a></li>
      <li class="active"><a href="#">7</a></li>
      <li><a href="#">8</a></li>
      <li><a href="#">9</a></li>
      <li><a href="#">⋯</a></li>
      <li><a href="#">12</a></li>
      <li class="next"><a href="#">Next page »</a></li>
    </ul>
  </footer>
</div>
```
