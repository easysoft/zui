# 文件上传

文件上传提供文件列表管理和文件批量上传功能，允许拖拽来添加上传文件，支持大文件自动分片上传，优先使用 HTML5 文件上传功能，旧的浏览器自动使用 Flash 和 Silverlight 的方式兼容。该视图插件基于 <a href="http://www.plupload.com/" target="_blank">plupload</a> 开发。

## 综合示例

在下面的例子中点击 “添加文件” 按钮或者拖拽文件到页面指示区域来添加文件，点击 “开始上传” 按钮来批量上传文件到服务器。

<div class="alert alert-primary">
  <h4>提示</h4>
  <p>在此页面内的测试文件上传时，你的文件会上传到服务器（<strong class="text-hostname"></strong>），但不会在服务器保存你的文件，你可以放心进行测试。</p>
</div>


### 普遍文件列表

<div class="example">
  <div id="uploaderExample" class="uploader" data-ride="uploader" data-url="docs/partial/remote-modal.html" data-auto-upload="true">
    <div class="file-list" data-drag-placeholder="请拖拽文件到此处"></div>
    <button type="button" class="btn btn-primary btn-uploader-browse"><i class="icon icon-cloud-upload"></i> 上传文件</button>
  </div>
</div>

```html
<div id="uploaderExample" class="uploader">
  <div class="file-list" data-drag-placeholder="请拖拽文件到此处"></div>
  <button type="button" class="btn btn-primary btn-uploader-browse"><i class="icon icon-cloud-upload"></i> 上传文件</button>
</div>
```

```javascript
$('#uploaderExample').uploader({
    autoUpload: true,            // 当添加文件后立即自动进行上传操作
    url: 'your/file/upload/url'  // 文件上传提交地址
});
```

### 大号文件列表

<div class="example">
  <div id='uploaderExample2' class="uploader" data-ride="uploader" data-url="docs/partial/remote-modal.html">
    <div class="uploader-message text-center">
      <div class="content"></div>
      <button type="button" class="close">×</button>
    </div>
    <div class="file-list file-list-lg" data-drag-placeholder="请拖拽文件到此处"></div>
    <div class="uploader-actions">
      <div class="uploader-status pull-right text-muted"></div>
      <button type="button" class="btn btn-link btn-uploader-browse"><i class="icon icon-plus"></i> 添加文件</button>
      <button type="button" class="btn btn-link btn-uploader-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
    </div>
  </div>
</div>

```html
<div id='uploaderExample2' class="uploader" data-ride="uploader" data-url="your/file/upload/url">
  <div class="uploader-message text-center">
    <div class="content"></div>
    <button type="button" class="close">×</button>
  </div>
  <div class="file-list file-list-lg" data-drag-placeholder="请拖拽文件到此处"></div>
  <div class="uploader-actions">
    <div class="uploader-status pull-right text-muted"></div>
    <button type="button" class="btn btn-link btn-uploader-browse"><i class="icon icon-plus"></i> 添加文件</button>
    <button type="button" class="btn btn-link btn-uploader-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
  </div>
</div>
```

### 文件网格视图

<div class="example">
  <div id='uploaderExample3' class="uploader" data-ride="uploader" data-url="docs/partial/remote-modal.html">
    <div class="uploader-message text-center">
      <div class="content"></div>
      <button type="button" class="close">×</button>
    </div>
    <div class="file-list file-list-grid"></div>
    <div>
      <hr class="divider">
      <div class="uploader-status pull-right text-muted"></div>
      <button type="button" class="btn btn-link btn-uploader-browse"><i class="icon icon-plus"></i> 添加文件</button>
      <button type="button" class="btn btn-link btn-uploader-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
    </div>
  </div>
</div>

```html
<div id='uploaderExample3' class="uploader" data-ride="uploader" data-url="your/file/upload/url">
  <div class="uploader-message text-center">
    <div class="content"></div>
    <button type="button" class="close">×</button>
  </div>
  <div class="file-list file-list-grid"></div>
  <div>
    <hr class="divider">
    <div class="uploader-status pull-right text-muted"></div>
    <button type="button" class="btn btn-link btn-uploader-browse"><i class="icon icon-plus"></i> 添加文件</button>
    <button type="button" class="btn btn-link btn-uploader-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
  </div>
</div>
```

<script src="dist/lib/uploader/zui.uploader.js"></script>
<link href="dist/lib/uploader/zui.uploader.css" rel="stylesheet">

<script>
function afterPageLoad() {
    $('.text-hostname').text(window.location.hostname);
}
</script>

## 选项
