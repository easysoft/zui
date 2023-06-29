# 上传图片

## 拖拽上传

在 `input` 元素上添加 `multiple` 属性开启多文件上传

```html:example
<div class="upload" id="example"></div>
```

```js
const uploadElm = document.querySelector('#example');
const upload = new UploadImgs(uploadElm, {
    name: 'upload',
    multiple: true,
    deleteBtn: true,
    renameBtn: true,
    draggable: true,
    tip: '请拖拽文件到此处',
    commentText: '注：请上传"jpg, jpeg, gif, png"格式的图片，程序会以文件名作为标题，以图片作为内容。',
    duplicatedHint: '文件名重复',
    exceededCountHint: '超出上传文件数量限制',
    exceededSizeHint: '超出上传文件大小限制',
});
```
