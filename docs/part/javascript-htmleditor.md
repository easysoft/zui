section: javascript
id: kindeditor
description: 使用Kineditor来编辑富文本
icon: icon-edit
filter: fuwenbenbianjiqi fwbbjq
---

# 富文本编辑器

ZUI 推荐两种富文本编辑器解决方案：Kindeitor 和 UEditor。

ZUI 专为 Kindeitor 和 UEditor 定制了与 ZUI 风格一致的主题。

## Kindeitor

<div class="alert alert-danger">
  <h4>兼容性问题</h4>
  <p>在触摸屏或小屏幕上无法获取最佳体验。</p>
</div>

详细用法请访问 Kindeitor 官方网站：<a target="_blank" href="http://kindeditor.org/">http://kindeditor.org/</a>，项目地址：<a target="_blank" href="https://github.com/kindsoft/kindeditor">https://github.com/kindsoft/kindeditor</a>。

### 使用 Kindeitor

Kindeitor 是作为独立组件，你手动引入 JavaScript 文件到你的页面。

```html
<script src="dist/lib/kindeditor/kindeditor.min.js"></script>
```

你不需要额外引入 CSS 文件，因为 Kindeitor 的主题样式文件是通过 JavaScript 加载的。

<div class="alert alert-primary">
  <h4>重要提示</h4>
  <p>如果你需要使用 Kindeitor 的高级功能（例如表情、地图、图片上传等），你还需要将 `lib/kindeditor/plugins.zip` 文件在你的服务器上进行解压缩，确保 `kindeditor.min.js` 文件所在的目录下有 `plugins` 文件夹。</p>
</div>

### 默认模式

<example>
  <textarea id="content" name="content" class="form-control kindeditor" style="height:150px;">Hello, world!</textarea>
</example>

```html
<textarea id="content" name="content" class="form-control kindeditor" style="height:150px;">Hello, world!</textarea>
```

```js
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

```js
KindEditor.create('textarea.kindeditorSimple', {
    basePath: '/dist/lib/kindeditor/',
    bodyClass : 'article-content',     // 确保编辑器内的内容也应用 ZUI 排版样式
    cssPath: '/dist/css/zui.css', // 确保编辑器内的内容也应用 ZUI 排版样式
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
                basePath: 'dist/lib/kindeditor/',
                allowFileManager : true,
                bodyClass : 'article-content',
                cssPath: '/dist/css/zui.css'
            });

            K.create('textarea.kindeditorSimple', {
                basePath: '/dist/lib/kindeditor/',
                bodyClass : 'article-content',
                cssPath: '/dist/css/zui.css',
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

    $.getScript('dist/lib/kindeditor/kindeditor.min.js', initKindeditor);

    $(document).on('click', '.ke-dialog-mask, .ke-dialog', function(e){
        e.stopPropagation();
    });
}
</script>

### Kindeditor 增强功能

相比较 Kindeditor 官方的版本，ZUI 中的 Kindeditor 功能进行了增强和优化，主要包含如下部分：

* 重做了表格编辑功能，包含如下关键特性：
  * 重做 了工具栏图标，优化了插入表格交互体验，现在点击表格图标按钮，弹出行列选择面板，滑动鼠标选择要插入的表格行数和列数即可实现表格快速插入，插入表格后，光标会自动置于第一个单元格内；
  * 通过 <kbd>Tab</kbd> 键来在单元格中切换光标的功能，当光标已经处于表格中的最后一个单元格时会自动创建一个新行，并将光标移到新行的第一个单元格中；
  * 实现选择多个单元格功能，允许使用如下方式来进行多选操作：
    * 点击每一行的第一个单元格左侧可以快速选择整行上的所有单元格；
    * 点击每一列的第一个单元格上侧可以快速选择整列上的所有单元格；
    * 在一个单元格上点击并按住拖动到另一个单元格，可以选中拖放矩形区域范围内所有单元格；
  * 对选中的多个单元格一并应用样式或进行操作的功能，目前支持如下操作：
    * 对所有选中的单元格进行合并操作；
    * 删除所有选中的单元格所在行或列；
    * 对文本基础样式的操作，包括加粗、下划线、删除线、字体、文字颜色和背景色等；
    * 对内容对齐方式的操作，包括居左、居中、局右等；
    * 对内容类型的变更操作，包括切换列表类型等；
  * 重做了表格单元格样式设置对话框样式，新增了对单元格边框大小和文字颜色的设置；
  * 优化表格样式设置，现在边框和隔行变色等样式会直接应用在单元格上，而不是通过 CSS 类名，避免在 ZUI 基础样式缺失的情况下丢失样式；
  * 优化了右键菜单上的项目，当一些条目在特定情况下不可用时不会显示，例如当光标处于最后一行时不会出现“向下合并单元格”菜单项；
  * 优化 了在表格中插入表格的交互，支持对嵌套表格进行编辑；
  * 修复了有时在单元格上点击鼠标右键，弹出的右键菜单上没有包含单元格相关菜单项的问题；
* 通过 `placeholder` 选项为编辑器设置并显示没有内容时的占位提示文本；
* 通过 `pasteImage` 选项实现贴图自动上传功能，使用该选项指定一个 URL 用于将用户从剪切板粘贴的图片 Base64 格式内容通过 POST 请求提交；
* 通过 `spellcheck` 选项启用（当选项的值为 `true` 时）或禁用（当选项的值为 `false` 时）拼写检查功能；
* 通过 `transferTab` 选项禁用编辑器内 <kbd>Tab</kbd> 键插入空格功能，转而实现激活编辑器在页面上下一个表单控件（当选项的值为 `true` 时启用该特性）；
* 通过 `syncAfterBlur` 选项实现自动在编辑器失去焦点时执行同步（`sync()`）操作（当选项的值为 `true` 时启用该特性）；
* 通过 `simpleWrap` 选项来优化源码格式化功能，当该选项为 `true` 时，源码中当块级元素内容不会显示为新的行；
* 优化表格缩进样式，现在默认缩进 2 个空格，而不是 Tab；
* 优化预览界面样式。

<div class="alert alert-info">
  <h4>注意</h4>
  <p>ZUI 中的 Kindeditor 依赖 jQuery 以及 ZUI 基础样式和 JS 插件，所以无法在没有引入 jQuery 和 ZUI 的环境中使用。</p>
</div>

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
