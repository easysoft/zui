# 上传文件

## 基本使用

```html:example: flex gap-3 flex-wrap
<div class="upload">
    <input name="example1" id="example1" type="file" />
    <label for="example1" class="btn primary">
        上传文件
    </label>
    <ul class="file-list" id="example1-list"></ul>
</div>
```

```js
const fileElm = document.querySelector('#example1');
const listElm = document.querySelector('#example1-list');
const upload = new Upload(fileElm, {
    listElm
});
```


## 多文件上传

在 `input` 元素上添加 `multiple` 属性开启多文件上传

```html:example: flex gap-3 flex-wrap
<div class="upload">
    <input name="example2" id="example2" type="file" multiple />
    <label for="example2" class="btn primary">
        上传文件
    </label>
    <ul class="file-list" id="example2-list"></ul>
</div>
```

```js
const fileElm = document.querySelector('#example2');
const listElm = document.querySelector('#example2-list');
const upload = new Upload(fileElm, {
    listElm
});
```
