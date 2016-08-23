section: component
id: alert
description: 使用消息框引起用户注意
icon: icon-warning-sign
filter: xiaoxikuang xxk
---

# 消息框

消息框能够轻松展示一些需要引起用户注意的内容。

## 不同感情色彩的消息框

这里提供了5中色彩的消息框用于不同场合。

<div class="example">
  <div class="alert">
    <h4>你好</h4>
    <hr>
    <p>有一些内容你可能需要知道。</p>
  </div>
  <div class="alert alert-primary">
    <h4>Hello</h4>
    <hr>
    <p>World.</p>
  </div>
  <div class="alert alert-success">
    <h4>太好了!</h4>
    <hr>
    <strong>一切已准备就绪。</strong>
  </div>
  <div class="alert alert-info">
    <strong>Hi!</strong> 这条消息可能需要你注意。
  </div>
  <div class="alert alert-warning">
    <strong>注意!</strong> 看起来遇到一些问题。
  </div>
  <div class="alert alert-danger">
    <h4>不好了!</h4>
    <p>确实遇到了问题，请立即处理吧。</p>
  </div>
</div>

```
<div class="alert">...</div>
<div class="alert alert-primary">...</div>
<div class="alert alert-danger">...</div>
<div class="alert alert-success">...</div>
<div class="alert alert-warning">...</div>
<div class="alert alert-info">...</div>
```

## 使用图标

在消息框中使用醒目的合适的图标能更容易让用户接收。需要使`.alert`配合`.with-icon`参数一起使用。

<div class="example">
  <div class="alert with-icon">
    <i class="icon-inbox"></i>
    <div class="content">
      <h4>你好</h4>
      <hr>
      <p>有一些内容你可能需要知道。</p>
    </div>
  </div>
  <div class="alert alert-success with-icon">
    <i class="icon-ok-sign"></i>
    <div class="content">
      <h4>太好了!</h4>
      <hr>
      <strong>一切已准备就绪。</strong>
    </div>
  </div>
  <div class="alert alert-primary with-icon">
    <i class="icon-star"></i>
    <div class="content">
      <h4>Hello</h4>
      <hr>
      <p>World.</p>
    </div>
  </div>
  <div class="alert alert-info with-icon">
    <i class="icon-info-sign"></i>
    <div class="content"><strong>Hi!</strong> 这条消息可能需要你注意。</div>
  </div>
  <div class="alert alert-warning with-icon">
    <i class="icon-frown"></i>
    <div class="content"><strong>注意!</strong> 看起来遇到一些问题。</div>
  </div>
  <div class="alert alert-danger with-icon">
    <i class="icon-remove-sign"></i>
    <div class="content">
      <h4>不好了!</h4>
      <p>确实遇到了问题，请立即处理吧。</p>
    </div>
  </div>
</div>

```html
<div class="alert alert-success with-icon">
  <i class="icon-ok-sign"></i>
  <div class="content">...</div>
</div>
```

## 使用反色主题

<div class="example">
  <div class="alert alert-inverse with-icon">
    <i class="icon-inbox"></i>
    <div class="content">
      <h4>你好</h4>
      <hr>
      <p>有一些内容你可能需要知道。</p>
    </div>
  </div>
  <div class="alert alert-primary-inverse with-icon">
    <i class="icon-star"></i>
    <div class="content">
      <h4>Hello</h4>
      <hr>
      <p>World.</p>
    </div>
  </div>
  <div class="alert alert-success-inverse with-icon">
    <i class="icon-ok-sign"></i>
    <div class="content">
      <h4>太好了!</h4>
      <hr>
      <strong>一切已准备就绪。</strong>
    </div>
  </div>
  <div class="alert alert-info-inverse with-icon">
    <i class="icon-info-sign"></i>
    <div class="content"><strong>Hi!</strong> 这条消息可能需要你注意。</div>
  </div>
  <div class="alert alert-warning-inverse with-icon">
    <i class="icon-frown"></i>
    <div class="content"><strong>注意!</strong> 看起来遇到一些问题。</div>
  </div>
  <div class="alert alert-danger-inverse with-icon">
    <i class="icon-remove-sign"></i>
    <div class="content">
      <h4>不好了!</h4>
      <p>确实遇到了问题，请立即处理吧。</p>
    </div>
  </div>
</div>

```html
<div class="alert alert-inverse">...</div>
<div class="alert alert-primary-inverse">...</div>
<div class="alert alert-danger-inverse">...</div>
<div class="alert alert-success-inverse">...</div>
<div class="alert alert-warning-inverse">...</div>
<div class="alert alert-info-inverse">...</div>
```

## 块级消息

块级消息框将没有外边距和边框圆角，适合用在页面顶部或者浮现在页面之上

<div class="example no-padding borderless">
  <div class="alert alert-success alert-block with-icon">
    <i class="icon-ok-sign"></i>
    <div class="content"><strong>太好了!</strong> 一切已准备就绪。</div>
  </div>
</div>

```html
<div class="alert alert-block">...</div>
```

## 消息框中的链接

当消息框中包含链接时，推荐使用工具栏`.alert-link`来使得链接的样式与消息框类型保持一致。

<div class="example">
  <div class="alert with-icon">
    <i class="icon-inbox"></i>
    <div class="content"><strong>你好!</strong> <a class="alert-link" href="###">有一些内容</a>你可能需要知道。</div>
  </div>
  <div class="alert alert-primary with-icon">
    <i class="icon-star"></i>
    <div class="content">
      <h4>Hello</h4>
      <hr>
      <p><a href="###">World.</a></p>
    </div>
  </div>
  <div class="alert with-icon alert-success">
    <i class="icon-ok-sign"></i>
    <div class="content"><strong>太好了!</strong> 一切已<a class="alert-link" href="###">准备就绪</a>。</div>
  </div>
  <div class="alert with-icon alert-info">
    <i class="icon-info-sign"></i>
    <div class="content"><strong>Hi!</strong> 这条消息可能<a class="alert-link" href="###">需要你注意</a>。</div>
  </div>
  <div class="alert with-icon alert-warning">
    <i class="icon-frown"></i>
    <div class="content"><strong>注意!</strong> 看起来遇到<a class="alert-link" href="###">一些问题</a>。</div>
  </div>
  <div class="alert with-icon alert-danger">
    <i class="icon-remove-sign"></i>
    <div class="content"><strong>不好了!</strong> 确实遇到了问题，请<a class="alert-link" href="###">立即处理</a>吧。</div>
  </div>
</div>

```html
<div class="alert">注意消息框中的<a class="alert-link" href="your/url/">链接</a>。</div>
```

## 可以关闭的消息框

可以用一个可选的`.alert-dismissable`和关闭按钮。

<div class="example example-alert-dismissable">
  <div class="alert alert-warning alert-dismissable">
    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
    <strong>注意!</strong> 看起来遇到一些问题。
    <p>您可以点击右上角的 <i class="icon-remove"></i> 来关闭这条消息。</p>
  </div>
</div>

```html
<div class="alert alert-warning alert-dismissable">
  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
  <p>您可以点击右上角的 <i class="icon-remove"></i> 来关闭这条消息。</p>
</div>
```
