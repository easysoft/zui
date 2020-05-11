section: control
id: icon
description: 使用和查找图标
icon: icon-star
filter: tubiao tb
---

# Icons

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
#iconsExample li a > i {display: inline-block; min-width: 20px}
#iconsExample li:hover {background-color: #d5f1d7; transform: scale(1.2);}

.table-icons-example td {vertical-align: middle;}
.table-icons-example td pre {margin-bottom: 0;}

</style>

An icon visually guides the user in a simple and effective way. It can replace text under some circumstances.

## What to use icons?

Icons in an application should have a consistent look and user behavior response. The icon set should be an important part of the user interface. General icons are used in the following situations:

*   Header of an application: help the user identify the application being used;
*   Buttons: for buttons often used, an icon can replace the text in the button to make the interface more concise;
*   Prompt messages: show the type of a message, so that users can make decisions quickly without reading the whole message;
*   Lists: a suitable icon can make the list identified easily;
*   Like tags, icons can show the type of an item or information in a concise way.

## Icon Fonts

Icons were usually displayed as images before icon fonts are univeral. Icon fonts are now a better way to display icons. Icon fonts can be used to set icons in CSS, such as defining the size, colors, and special effects. Icon fonts are used as an icon set in ZUI. Try [Font Awesome](http://fortawesome.github.io/Font-Awesome/),an open source web icon fonts.

Icon fonts of ZUI are based on FontAwesome 4.3. It has icons for Chinese scenarios and remove icons that are not often used.

## ZUI Icons

ZUI provides <span class="icons-count">?</span> icons:

<div class="example" id="iconsExample">
  <div class="text-center text-muted"><i class="icon icon-spin icon-spinner-indicator"></i> Please wait...</div>
</div>

## How to use icons?

### Usage

Use `<span>` or `<i>` and add a CSS class. Tags used as icons do not contain any text, neither should they do.

```html
<i class="icon icon-star"></i>
```

### Notes

One advantage of using icon fonts is that icons are like texts, and all styles that can be used for texts can be used for icons, so you can define the size, colors, and even  CSS3 effects for them. All icons in an application should follow the same styles, including:

*   Icons should be the same color, and interactive behavior patterns should be the same too;
*   Sizes of icons should be the same, e.g. icons in the body are 14px, and the icons in the title are 28px;
*   Icons should correspond to the indications, and the same indication in different positions should use the same icon.

<div class="alert alert-danger">
  <p>
  Do not use CSS class in any tags of a control. Use <code>&lt;span&gt;</code> or <code>&lt;i&gt;</code>.</p>
</div>

### Monospace Icons

Usually `.icon-*` is not used with `.icon` classes. However, icons have different shapes, and the widths in the text are different too. If you need monospace icons, add `.icon` classes for `.icon-*`， then you will have it.

Monospace icons is are necessary for vertical alignment of icons in a list.

<example>
  <div class="row">
    <div class="col-sm-6">
      <ul style="margin: 0">
        <li><i class="icon-flag"></i> Icons</li>
        <li><i class="icon-heart"></i> <span class="code">icon-heart</span></li>
        <li><i class="icon-resize-v"></i> <span class="code">icon-resize-v</span></li>
        <li><i class="icon-film"></i> <span class="code">icon-film</span></li>
      </ul>
    </div>
    <div class="col-sm-6">
      <ul style="margin: 0">
        <li><i class="icon icon-flag"></i> Monospace Icons</li>
        <li><i class="icon icon-heart"></i> <span class="code">icon icon-heart</span></li>
        <li><i class="icon icon-resize-v"></i> <span class="code">icon icon-resize-v</span></li>
        <li><i class="icon icon-film"></i> <span class="code">icon icon-film</span></li>
      </ul>
    </div>
  </div>
</example>

```html
<ul>
  <li><i class="icon-flag"></i> Icons</li>
  <li><i class="icon-heart"></i> icon-heart</li>
  <li><i class="icon-resize-v"></i> icon-resize-v</li>
  <li><i class="icon-film"></i> icon-film</li>
</ul>

<ul>
  <li><i class="icon icon-flag"></i> Monospace Icons</li>
  <li><i class="icon icon-heart"></i> icon icon-heart</li>
  <li><i class="icon icon-resize-v"></i> icon icon-resize-v</li>
  <li><i class="icon icon-film"></i> icon icon-film</li>
</ul>
```

### Preset Icon Size

<div class="example">
  <table class="table table-icons-example">
    <tbody><tr>
      <td>Default Size</td>
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

### Rotate

<div class="example">
  <table class="table table-icons-example">
    <tbody><tr>
      <td>No rotate</td>
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

#### Spinner

Spinners are convenient to create animation for loading instructions.

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
