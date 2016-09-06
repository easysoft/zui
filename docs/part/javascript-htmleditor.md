section: javascript
id: kindeditor
description: 使用Kineditor来编辑富文本
icon: icon-edit
filter: fuwenbenbianjiqi fwbbjq
---

# 富文本编辑器

ZUI 推荐两种富文本编辑器解决方案：UEditor 和 Kindeitor。

ZUI 专为 UEditor 和 Kindeitor 定制了与 ZUI 风格一致的主题。

## UEditor

<div class="alert alert-danger">
  <h4>兼容性问题</h4>
  <p>在触摸屏或小屏幕上无法获取最佳体验。</p>
</div>

### 使用 UEditor

因为 UEditor 用到的文件比较多，ZUI 并不提供 UEditor JavaScript 文件。你需要访问 UEditor 官方网站来下载相关资源，以下为 UEditor 相关资源网站：

 - 官方定制：<a target="_blank" href="http://ueditor.baidu.com/website/download.html#ubuilder">http://ueditor.baidu.com/website/download.html#ubuilder</a>
 - 官方下载：<a target="_blank" href="http://ueditor.baidu.com/website/download.html">http://ueditor.baidu.com/website/download.html</a>
 - 官方文档：<a target="_blank" href="http://fex.baidu.com/ueditor/">http://fex.baidu.com/ueditor/</a>
 - 项目地址：<a target="_blank" href="https://github.com/fex-team/ueditor">https://github.com/fex-team/ueditor</a>

### 使用 ZUI 为 UEditor 定制的主题

使用 ZUI 为 UEditor 定制的主题可以更改 UEditor 界面外观与 ZUI 风格保持一致。

你需要将 ZUI `dist/lib/ueditor/ueditor.css` 和 `dist/lib/ueditor/ueditor.min.css` 文件替换在 UEditor 的 `themes/default/css/` 目录下的 CSS 文件。

## Kindeitor

<div class="alert alert-danger">
  <h4>兼容性问题</h4>
  <p>在触摸屏或小屏幕上无法获取最佳体验。</p>
</div>

详细用法请访问 Kindeitor 官方网站：<a target="_blank" href="http://kindeditor.org/">http://kindeditor.org/</a>，项目地址：<a target="_blank" href="hhttps://github.com/kindsoft/kindeditor">hhttps://github.com/kindsoft/kindeditor</a>。

### 使用 Kindeitor

Kindeitor 是作为独立组件，你手动引入 JavaScript 文件到你的页面。

```html
<script src="dist/lib/kindeditor/kindeditor.min.js"></script>
```

你不需要额外引入 CSS 文件，因为 Kindeitor 的主题样式文件是通过 JavaScript 加载的。

### 默认模式

<example>
  <textarea id="content" name="content" class="form-control kindeditor" style="height:150px;">Hello, world!</textarea>
</example>

```html
<textarea id="content" name="content" class="form-control kindeditor" style="height:150px;">Hello, world!</textarea>
```

```javascript
KindEditor.create('textarea.kindeditor', {
    basePath: '/dist/lib/kindeditor/',
    allowFileManager : true,
    bodyClass : 'article-content'
});
```

### 简单模式

自定义工具栏，禁用文件上传。

<example>
  <textarea id="contentSimple" name="content" class="form-control kindeditorSimple" style="height:150px;">Hello, world!</textarea>
</example>

```html
<textarea id="contentSimple" name="content" class="form-control kindeditorSimple" style="height:150px;">Hello, world!</textarea>
```

```javascript
KindEditor.create('textarea.kindeditor', {
    basePath: '/dist/lib/kindeditor/',
    bodyClass : 'article-content',
    resizeType : 1,
    allowPreviewEmoticons : false,
    allowImageUpload : false,
    items : [
        'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
        'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
        'insertunorderedlist', '|', 'emoticons', 'image', 'link'
    ]
});
```

<script>
function onPageLoad() {
  return false;
}
function afterPageLoad() {
    var initKindeditor = function(){
        var K = window.KindEditor;
        if(K) {
            K.create('textarea.kindeditor', {
                basePath: '/dist/lib/kindeditor/',
                allowFileManager : true,
                bodyClass : 'article-content'
            });

            K.create('textarea.kindeditorSimple', {
                basePath: '/dist/lib/kindeditor/',
                bodyClass : 'article-content',
                resizeType : 1,
                allowPreviewEmoticons : false,
                allowImageUpload : false,
                items : [
                    'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
                    'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
                    'insertunorderedlist', '|', 'emoticons', 'image', 'link'
                ]
            });
        }
        setTimeout($.doc.stopPageLoading, 500);
    };

    $.getScript('/dist/lib/kindeditor/kindeditor.min.js', initKindeditor);

    $(document).on('click', '.ke-dialog-mask, .ke-dialog', function(e){
        e.stopPropagation();
    });
}
</script>
