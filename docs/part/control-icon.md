section: control
id: icon
description: 使用和查找图标
icon: icon-star
filter: tubiao tb
---

# 图标

<style>
#iconsExample ul {padding: 0;}
#iconsExample li {
  cursor: pointer;
  float: left;
  width: 150px;
  line-height: 25px;
  list-style: none;
  padding: 2px 10px;
  white-space: nowrap;
  transition: all .3s;
}
#iconsExample li a {color: #333}
#iconsExample li a:hover {text-decoration: none}
#iconsExample li a > i {display: inline-block; width: 20px}
#iconsExample li:hover {background-color: #d5f1d7; transform: scale(1.2);}

.table-icons-example td {vertical-align: middle;}
.table-icons-example td pre {margin-bottom: 0;}

</style>

图标能在视觉上简洁有效的指引用户操作。特殊情况下，使用图标能够代替文本。

## 何时使用图标？

同一个应用程序中的图标应该具有一致的外观及用户行为响应，应该将整个图标集作为用户界面中的重要部分。一般图标用于如下情况：

*   用于应用程序头部，便于用户识别正在使用的应用；
*   用于按钮，对于一些常用的按钮可以使用图标取代按钮中的文本，使得界面更加简洁；
*   用于提示消息，图标能指明消息类型，便于用户无需仔细阅读消息内容就可以迅速做出决策；
*   用于一些简单但重要列表，在列表项目前面加上合适的图标能大大增强列表识别程度；
*   等同与标签，图标能简明表达项目或信息类型。

## 使用图标字体

在图标字体没有普及之前，图标通常是通过图片来展示，如今图标字体是展示图标的更好方式。使用图标字体能使用CSS对图标进行调整，例如定义大小、颜色及特殊效果。在ZUI中将使用图标字体作为系统图标集方案。采用开源web图标字体[Font Awesome](http://fortawesome.github.io/Font-Awesome/)是一个不错的选择。

ZUI基于FontAwesome 4.3定制，去除了一些不常用的图标，并加入了一些适合中国使用的图标。

## ZUI中的图标

在ZUI中提供了<span class="icons-count">?</span>个图标：

<div class="example" id="iconsExample">
  <div class="text-center text-muted"><i class="icon icon-spin icon-spinner-indicator"></i> 请稍后...</div>
</div>

## 如何使用图标？

### 用法

使用一个单独的`<span>`标签或者`<i>`并增加对应的CSS类名即可，用来作为图标的标签不需要包含任何文本也不应该如此。

```html
<i class="icon icon-star"></i>
```

### 注意要点

使用图标字体有一个好处就是图标就是文本字符，所有能用于文本的样式都可以用于图标，这样就可以随意定义图标的大小、颜色，甚至一些CSS3特效。但应该在同一个应用程序中图标应具有统一的样式，包含如下内容：

*   图标应具备统一的颜色，如果有交互行为样式也应该保持一致；
*   图标的大小应该保持一致，正文中的图标大小应为14px，标题中的图标可以为28px；
*   图标应与所指示的内容对应，不同地方的同一个指示内容应该使用同一个图标。

<div class="alert alert-danger">
  <p>
  不要将在任何控件标签上直接应用图标CSS类名，应该嵌套一个单独的<code>&lt;span&gt;</code>标签或者<code>&lt;i&gt;</code>标签。</p>
</div>

### 等宽图标

通常情况下 `.icon-*` 不需要和 `.icon` 类一起使用，但由于不同的图标外形不同，其在文字行中所占据的宽度也不同，如果需要使图标的宽度一致，则需要为 `.icon-*` 添加 `.icon` 类，这样就得到等宽图标。

等宽图标对于在一个列表中用于垂直对其图标非常有必要。

<example>
  <div class="row">
    <div class="col-sm-6">
      <ul style="margin: 0">
        <li><i class="icon-flag"></i> 普通图标</li>
        <li><i class="icon-heart"></i> <span class="code">icon-heart</span></li>
        <li><i class="icon-resize-v"></i> <span class="code">icon-resize-v</span></li>
        <li><i class="icon-film"></i> <span class="code">icon-film</span></li>
      </ul>
    </div>
    <div class="col-sm-6">
      <ul style="margin: 0">
        <li><i class="icon icon-flag"></i> 等宽图标</li>
        <li><i class="icon icon-heart"></i> <span class="code">icon icon-heart</span></li>
        <li><i class="icon icon-resize-v"></i> <span class="code">icon icon-resize-v</span></li>
        <li><i class="icon icon-film"></i> <span class="code">icon icon-film</span></li>
      </ul>
    </div>
  </div>
</example>

```html
<ul>
  <li><i class="icon-flag"></i> 普通图标</li>
  <li><i class="icon-heart"></i> icon-heart</li>
  <li><i class="icon-resize-v"></i> icon-resize-v</li>
  <li><i class="icon-film"></i> icon-film</li>
</ul>

<ul>
  <li><i class="icon icon-flag"></i> 等宽图标</li>
  <li><i class="icon icon-heart"></i> icon icon-heart</li>
  <li><i class="icon icon-resize-v"></i> icon icon-resize-v</li>
  <li><i class="icon icon-film"></i> icon icon-film</li>
</ul>
```

### 预设的图标尺寸

<div class="example">
  <table class="table table-icons-example">
    <tbody><tr>
      <td>正常大小</td>
      <td><i class="icon icon-star"></i></td>
      <td><pre><code>&lt;i class="icon icon-star"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-2x</code></td>
      <td><i class="icon icon-star icon-2x"></i></td>
      <td><pre><code>&lt;i class="icon icon-star <em>icon-2x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-3x</code></td>
      <td><i class="icon icon-star icon-3x"></i></td>
      <td><pre><code>&lt;i class="icon icon-star <em>icon-3x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-4x</code></td>
      <td><i class="icon icon-star icon-4x"></i></td>
      <td><pre><code>&lt;i class="icon icon-star <em>icon-4x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-5x</code></td>
      <td><i class="icon icon-star icon-5x"></i></td>
      <td><pre><code>&lt;i class="icon icon-star <em>icon-5x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
  </tbody></table>
</div>

### 旋转

<div class="example">
  <table class="table table-icons-example">
    <tbody><tr>
      <td>不旋转</td>
      <td><i class="icon icon-2x icon-flag"></i></td>
      <td><pre><code>&lt;i class="icon icon-flag"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-rotate-90</code></td>
      <td><i class="icon icon-2x icon-flag icon-rotate-90"></i></td>
      <td><pre><code>&lt;i class="icon icon-flag <em>icon-rotate-90</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-rotate-180</code></td>
      <td><i class="icon icon-2x icon-flag icon-rotate-180"></i></td>
      <td><pre><code>&lt;i class="icon icon-flag <em>icon-rotate-180</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-rotate-270</code></td>
      <td><i class="icon icon-2x icon-flag icon-rotate-270"></i></td>
      <td><pre><code>&lt;i class="icon icon-flag <em>icon-rotate-270</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-flip-horizontal</code></td>
      <td><i class="icon icon-2x icon-flag icon-flip-horizontal"></i></td>
      <td><pre><code>&lt;i class="icon icon-flag <em>icon-flip-horizontal</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.icon-flip-vertical</code></td>
      <td><i class="icon icon-2x icon-flag icon-flip-vertical"></i></td>
      <td><pre><code>&lt;i class="icon icon-flag <em>icon-flip-vertical</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
  </tbody></table>
</div>

#### 旋转动画

使用旋转动画方便制作用于加载指示的动画效果。

<div class="example">
  <i class="icon icon-spin icon-spinner-snake"></i> &nbsp; 
  <i class="icon icon-spin icon-spinner-indicator"></i> &nbsp; 
  <i class="icon icon-spin icon-circle-o-notch"></i> &nbsp; 
  <i class="icon icon-spin icon-cog"></i> &nbsp; 
  <i class="icon icon-spin icon-refresh"></i> &nbsp; 
  <i class="icon icon-spin icon-spinner"></i>
</div>

```html
<i class="icon icon-spin icon-spinner-snake"></i>
```

```html
<i class="icon icon-spin icon-spinner-indicator"></i>
```

```html
<i class="icon icon-spin icon-circle-o-notch"></i>
```

```html
<i class="icon icon-spin icon-cog"></i>
```

```html
<i class="icon icon-spin icon-refresh"></i>
```

```html
<i class="icon icon-spin icon-spinner"></i>
```

<script>
function afterPageLoad() {
    if($.doc) {
        var url = $('body').hasClass('layout-page') ? '../icons.json' : 'docs/icons.json';
        $.doc.loadData(url, function(data) {
            var iconCount = 0;
            var $list = $('<ul class="clearfix"></ul>');
            $.each(data, function(name, icon) {
                iconCount++;
                var $li = $('<li><a href="#search/icon-' + name + '"><i class="icon-' + name + '"></i> ' + name + '</a></li>');
                icon.id = name;
                $li.data('icon', icon);
                $list.append($li);
            });
            $('#iconsExample').empty().append($list);
            $('#pageBody .icons-count').text(iconCount);
        });
    }
}
</script>
