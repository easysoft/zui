section: javascript
id: kindeditor
description: use Kineditor to edit rich text
icon: icon-edit
filter: fuwenbenbianjiqi fwbbjq
---

# Rich text editor

Kindeditor and UEditor are two recommended rich text editors in ZUI.

ZUI customizes themes for Kindeditor and UEditor.

## Kindeditor

<div class="alert alert-danger">
  <h4>Compatibility</h4>
  <p>It is not the best experience on a touch screen or small screens.</p>
</div>

Visit Kindeditor official website: <a target="_blank" href="http://kindeditor.org/">http://kindeditor.org/</a> and its project <a target="_blank" href="https://github.com/kindsoft/kindeditor">https://github.com/kindsoft/kindeditor</a> for more.

### How to use Kindeditor

Kindeditor is an independent component, so you have to introduce JavaScript to your page.

```html
<script src="dist/lib/kindeditor/kindeditor.min.js"></script>
```

You do not need extra CSS files, because theme style file of Kindeditor is loaded via JavaScript.

<div class="alert alert-primary">
  <h4>Tips</h4>
  <p>If you need to use Kindeditor Advanced features(emoji, map, mage upload, etc.), you still need to save `lib/kindeditor/plugins.zip` to your server and unzip it. Make sure `kindeditor.min.js` as the `plugins` folder.</p>
</div>

### Default mode

<example>
  <textarea id="content" name="content" class="form-control kindeditor" style="height:150px;">Hello, World!</textarea>
</example>

```html
<textarea id="content" name="content" class="form-control kindeditor" style="height:150px;">Hello, World!</textarea>
```

```js
KindEditor.create('textarea.kindeditor', {
    basePath: '/dist/lib/kindeditor/',
    allowFileManager : true,
    bodyClass : 'article-content'
});
```

### Simple mode

Custom toolbar. Disable file upload.。

<example>
  <textarea id="contentSimple" name="content" class="form-control kindeditorSimple" style="height:150px;">Hello, World!</textarea>
</example>

```html
<textarea id="contentSimple" name="content" class="form-control kindeditorSimple" style="height:150px;">Hello, World!</textarea>
```

```js
KindEditor.create('textarea.kindeditorSimple', {
    basePath: '/dist/lib/kindeditor/',
    bodyClass : 'article-content',     // Make sure the content in the editor is also applied ZUI style.
    cssPath: '/dist/css/zui.css', // Make sure the content in the editor is also applied ZUI style.
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

### Kindeditor Enhanced

Compared with Kindeditor official version, Kindeditor in ZUI is enhanced and optimized, including:

* Editing table function is redone and the key features are：
  * Toolbar icon is redone; insert interaction is optimized. Now click the table icon, and enter the number of row and column, then a table can be quickly entered. After the table is inserted, the cursor will automatically be placed in the first cell;
  * <kbd>Tab</kbd> is used to switch the cursor in the table. A new line is automatically created when the cursor is already in the last cell in the table, and the cursor will be in the first cell of the new line;
  * Multiple cell selection is ennabled, which allows the following actions to select multiple cells:
    * Click on the left side of the first cell on each row to quickly select all cells on the entire row;
    * Click on the top side of the first cell on each column to quickly select all cells on the entire column.;
    * Click and drag one cell to another cell to select all cells in the range of the drag and drop area;
  * Apply styles or actions to selected cells, and the following actions are supported:
    * Merge all selected cells;
    * Delete the row or column of all selected cells;
    * Action on text styles, including bold, underline, strikethrough, font, text color, background color, etc;
    * Action on alignment, including left, center,right, etc.;
    * Action on content type changes, including list type change, etc.;
  * Redo table cell style and dialog style, and add settings for border size and text color of cells;
  * Optimize table style settings. Styles such as borders and interlaced colors are now applied directly to cell, instead of using CSS class names so ZUI styles will not be lost if the basic style is null;
  * Optimized items on the right-click menu. If items are not available, they are not displayed. For example, Merge Cells Down will not show, if the cursor is in the last cell;
  * Optimize the interaction of inserting a table into a table. Editing embeded table is supported;
  * Click the right mouse button on the cell, and cell-related menu items will be displayed on the popout;
* `placeholder` can be used to set set and display placeholder text for the editor if there is no content;
* `pasteImage` can be used to upload the pasted images automatically. Use this option to specify a URL to submit pasted images from the clipboard as Base64 Format content via POST Request;
* `spellcheck` enables(when the value of the option is `true`) or disables (when the value of the option is `false`) spell check;
* `transferTab` disables the function to press  <kbd>Tab</kbd> to insert spaces. Enable a form control to go to the next cell(When the value of the option is `true`, enable this feature.);
* `syncAfterBlur` automatically synchronizes(`sync()`) when the editor loses focus(When the value of the option is `true`, enable this feature.);
* `simpleWrap` optimizes source format. When this option is `true`, block element content in source code does not show as a new line;
* Optimize table indentation. The default is 2 spaces instead of Tab;
* Optimize the style of the preview interface.

<div class="alert alert-info">
  <h4>Note</h4>
  <p>ZUI Kindeditor depends on jQuery and ZUI basic styles and JS Plugins. So it cannot be used if jQuery is not introduced or used in ZUI environment.</p>
</div>

## UEditor

<div class="alert alert-danger">
  <h4>Compatibility</h4>
  <p>You might not get the best experience of UEditor on a touch screen or a small screen.</p>
</div>

### use UEditor

ZUI does not provide UEditor JavaScript file, because UEditor requires too many  files. Visit UEditor official website to download related resources. The followings are UEditor resource website:

 - Official customization: <a target="_blank" href="http://ueditor.baidu.com/website/download.html#ubuilder">http://ueditor.baidu.com/website/download.html#ubuilder</a>
 - Official download: <a target="_blank" href="http://ueditor.baidu.com/website/download.html">http://ueditor.baidu.com/website/download.html</a>
 - Official document: <a target="_blank" href="http://fex.baidu.com/ueditor/">http://fex.baidu.com/ueditor/</a>
 - Project address: <a target="_blank" href="https://github.com/fex-team/ueditor">https://github.com/fex-team/ueditor</a>

### Use ZUI to customize themes for UEditor

Use ZUI to customize themes for UEditor and change UEditor appearance to be consistent with ZUI Style.

ZUI `dist/lib/ueditor/ueditor.css` and `dist/lib/ueditor/ueditor.min.css` should replace `themes/default/css/` of UEditor CSS files.
