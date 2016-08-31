section: javascript
id: kindeditor
description: 使用Kineditor来编辑富文本
icon: icon-edit
filter: fuwenbenbianjiqi fwbbjq
---

# 富文本编辑器

ZUI 推荐的富文本编辑器是 [Kindeditor](http://kindeditor.net/)。

在 ZUI 中 Kindeditor 的默认主题已经过定制与 ZUI 的风格保持一致。

## 默认模式

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

## 简单模式

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
