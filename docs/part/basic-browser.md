section: basic
id: browser
description: 检阅所支持的浏览器版本
icon: icon-ie
filter: shouzhichidipingtai szcdpt
---

# 浏览器可用性

## 受支持的平台

### 桌面浏览器

*   IE 8+
*   Opera 12+
*   Firefox 8+
*   Safari 6+
*   Chrome 20+

### 移动浏览器

*   IOS 6+ Safari
*   Chrome for Android 4+
*   Chrome for iOS
*   Windows 10 Mobile Edage

<div class="alert alert-warning-inverse">
  <p>在最新的浏览器都能获得最佳体验，但一些古老的浏览器上（例如IE8）ZUI中的部分特性（例如圆角或阴影效果）无法使用。</p>
</div>

## 浏览器检测

浏览器检测提供对IE6~IE9版本间的检测功能，不检测更高版本的IE浏览器和Microsoft edge浏览器。

### IE版本辅助类

为方便开发者更加方便的处理IE系列浏览器的兼容性问题，ZUI中内置了IE版本检测功能，并为`<body>`元素增加了一些辅助类。使用辅助类可以方便的为特定版本或者一系列版本的IE浏览器应用单独的样式，或者使用JS来作单独处理。

可能使用的辅助类含义如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>类名</th>
      <th>对应的IE版本</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`.support-ie`</td>
      <td>IE版本&gt;=8</td>
      <td>此浏览器为ZUI中受支持的IE版本</td>
    </tr>
    <tr>
      <td>`.outdated-ie`</td>
      <td>IE版本&gt;=8</td>
      <td>此浏览器为ZUI中不受支持的IE版本</td>
    </tr>
    <tr>
      <td>`.ie-α`</td>
      <td>IE版本=α</td>
      <td>如果当前IE版本为8，则为`.ie-8`</td>
    </tr>
    <tr>
      <td>`.gt-ie-α`</td>
      <td>IE版本&lt;α</td>
      <td>`.gt-ie-7`则表示当前浏览器版本大于7，即大于或等于版本8</td>
    </tr>
    <tr>
      <td>`.gte-ie-α`</td>
      <td>IE版本&gt;=α</td>
      <td>`.gte-ie-8`则表示当前浏览器版本大于等于8</td>
    </tr>
    <tr>
      <td>`.lt-ie-α`</td>
      <td>IE版本&lt;α</td>
      <td>`.lt-ie-8`则表示当前浏览器版本小于8</td>
    </tr>
    <tr>
      <td>`.lte-ie-α`</td>
      <td>IE版本&lt;=α</td>
      <td>`.lte-ie-7`则表示当前浏览器版本小于等于7</td>
    </tr>
  </tbody>
</table>

### 在Javascript中判断浏览器版本

ZUI提供`$.zui.browser`对象来检测IE版本。此对象包含以下方法和属性：

<table class="table table-bordered">
  <tbody>
    <tr>
      <td>`$.zui.browser.ie`</td>
      <td>获取当前IE版本值</td>
    </tr>
    <tr>
      <td>`$.zui.browser.isIE(version)`</td>
      <td>判断当前浏览器是否是特定IE版本，如果满足条件返回`true`，反之返回`false`；version参数可选，如果为空，则只要是IE浏览器就返回`true`</td>
    </tr>
  </tbody>
</table>

### 显示低版本提示

当用户使用一个较低版本的不受ZUI支持的浏览器时，页面可能无法得到最低预期效果。此时建议向用户显示一个信息，并提示用户升级到最新的浏览器。

ZUI提供`$.zui.browser.tip()`方法在页面顶部显示一条友好的信息，并引导用户访问[browsehappy.com](http://browsehappy.com/)来升级到更好的浏览器。此方法接受一个参数用来自定义自己的消息文本。

<div class="example">
  <button type="button" class="btn btn-primary show-low-version-tip">显示低版本浏览器提示信息</button>
  <button type="button" class="btn show-low-version-tip" data-content="哇~~~你的浏览器版本太低了，快快升级吧！">自定义的提示信息</button>
</div>

```js
// 显示低版本提示信息
$.zui.browser.tip();

// 显示自定义的低版本提示信息
$.zui.browser.tip('哇~~~你的浏览器版本也太低了，快快升级吧！');
```

<div class="alert alert-primary-inverse">
  <h5>提示</h5>
  <p>在IE7及更低IE版本的浏览器上会自动显示低版本提示信息，所以一般情况下，你无须自己手动调用此方法。</p>
</div>

<script>
function afterPageLoad() {
    $('.show-low-version-tip').click(function(){
      $.zui.browser.tip($(this).data('content'));
    });
}
</script>
