# 上传图片

## 拖拽上传

在 `input` 元素上添加 `multiple` 属性开启多文件上传

```html:example
<div class="upload" id="example3"></div>
```

```js
const uploadElm3 = document.querySelector('#example3');
const upload3 = new Upload(uploadElm3, {
    name: 'upload3',
    multiple: true,
    deleteBtn: true,
    renameBtn: true,
    draggable: true,
});
```
