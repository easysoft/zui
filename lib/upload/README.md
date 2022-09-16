# 上传文件

## 基本使用

```html:example: flex gap-3 flex-wrap
<div class="upload" id="example1"></div>
```

```js
const uploadElm1 = document.querySelector('#example1');
const upload1 = new Upload(uploadElm1, {
    name: 'upload1',
});
```


## 多文件上传

在 `input` 元素上添加 `multiple` 属性开启多文件上传

```html:example: flex gap-3 flex-wrap
<div class="upload" id="example2"></div>
```

```js
const uploadElm2 = document.querySelector('#example2');
const file1 = new File(['file1'], 'file1.txt', {
        type: 'text/plain',
});
const file2 = new File(['file2'], 'file2.txt', {
    type: 'text/plain',
});
const upload2 = new Upload(uploadElm2, {
    name: 'upload2',
    multiple: true,
    showDeleteBtn: true,
    showRenameBtn: true,
    defaultFileList: [file1, file2],
});
```
