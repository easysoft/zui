# 文件上传

文件上传视图提供文件列表管理和文件批量上传功能，允许拖拽（需要 HTML5 支持）来添加上传文件，支持大文件分片上传，优先使用 HTML5 文件上传功能，旧的浏览器自动使用 Flash 和 Silverlight 的方式兼容，还可用轻松搭配七牛云存储 Javascript SDK 使用。该插件基于 <a href="http://www.plupload.com/" target="_blank">plupload</a> 开发。

<div class="alert alert-warning">
  <h4>兼容性提示</h4>
  <p>文件上传视图不支持 IE9 以下的浏览器。</p>
</div>

## 综合示例

在下面的例子中点击 “选择文件” 按钮或者拖拽文件到页面指示区域来选择文件，点击 “开始上传” 按钮来批量上传文件到服务器。

<div class="alert alert-primary">
  <h4>提示</h4>
  <p>在此页面内的测试文件上传时，你的文件会上传到服务器（<a target="_blank" class="alert-link text-hostname" href="http://httpbin.org/post"><strong>http://httpbin.org/</strong></a>），但不会在服务器保存你的文件，你可以放心进行测试。</p>
</div>


### 普通文件列表

<div class="example">
  <div id="uploaderExample" class="uploader" data-auto-upload="true">
    <div class="uploader-files file-list" data-drag-placeholder="请拖拽文件到此处"></div>
    <button type="button" class="btn btn-primary uploader-btn-browse"><i class="icon icon-cloud-upload"></i> 选择文件</button>
  </div>
</div>

```html
<div id="uploaderExample" class="uploader">
  <div class="file-list" data-drag-placeholder="请拖拽文件到此处"></div>
  <button type="button" class="btn btn-primary uploader-btn-browse"><i class="icon icon-cloud-upload"></i> 选择文件</button>
</div>
```

```js
$('#uploaderExample').uploader({
    autoUpload: true,            // 当选择文件后立即自动进行上传操作
    url: 'your/file/upload/url'  // 文件上传提交地址
});
```

### 大号文件列表

<div class="example">
  <div id='uploaderExample2' class="uploader">
    <div class="uploader-message text-center">
      <div class="content"></div>
      <button type="button" class="close">×</button>
    </div>
    <div class="uploader-files file-list file-list-lg" data-drag-placeholder="请拖拽文件到此处"></div>
    <div class="uploader-actions">
      <div class="uploader-status pull-right text-muted"></div>
      <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> 选择文件</button>
      <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
    </div>
  </div>
</div>

```html
<div id='uploaderExample2' class="uploader" data-ride="uploader" data-url="your/file/upload/url">
  <div class="uploader-message text-center">
    <div class="content"></div>
    <button type="button" class="close">×</button>
  </div>
  <div class="uploader-files file-list file-list-lg" data-drag-placeholder="请拖拽文件到此处"></div>
  <div class="uploader-actions">
    <div class="uploader-status pull-right text-muted"></div>
    <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> 选择文件</button>
    <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
  </div>
</div>
```

### 网格视图

<div class="example">
  <div id='uploaderExample3' class="uploader">
    <div class="uploader-message text-center">
      <div class="content"></div>
      <button type="button" class="close">×</button>
    </div>
    <div class="uploader-files file-list file-list-grid"></div>
    <div>
      <hr class="divider">
      <div class="uploader-status pull-right text-muted"></div>
      <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> 选择文件</button>
      <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
    </div>
  </div>
</div>

```html
<div id='uploaderExample3' class="uploader" data-ride="uploader" data-url="your/file/upload/url">
  <div class="uploader-message text-center">
    <div class="content"></div>
    <button type="button" class="close">×</button>
  </div>
  <div class="uploader-files file-list file-list-grid"></div>
  <div>
    <hr class="divider">
    <div class="uploader-status pull-right text-muted"></div>
    <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> 选择文件</button>
    <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
  </div>
</div>
```

## 使用

### 引入资源

文件上传为独立组件，你需要从本地或 CDN 单独引入 lib 目录下的资源：

```html
<link href="lib/uploader/zui.uploader.min.css" rel="stylesheet">
<script src="lib/uploader/zui.uploader.min.js"></script>
```

### 初始化 uploader

方式一，使用 `$().uploader()`：

```html
<div class="uploader" id="myUploader">
  ...
</div>
```

```js
var options = {
    // 初始化选项
};
$('#myUploader').uploader(options);
```

方式二，使用 `[data-ride="uploader"]`：

```html
<div class="uploader" data-ride="uploader" data-auto-upload="true">
  ...
</div>
```

### 获取 uploader 对象

当初始化之后你可以通过 `$().data('zui.uploader')` 获取 `uploader` 对象：

```js
var uploader = $('#myUploader').data('zui.uploader');
```

## 选项

在进行初始化时允许传入一个对象参数作为初始化选项。可以使用的选项如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 100px">选项</th>
      <th style="width: 130px">名称</th>
      <th style="width: 110px">值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`drop_element`</td>
      <td>触发文件拖放的元素</td>
      <td>默认 `'self'`</td>
      <td>
        <p>所有可用的值如下：</p>
        <ul>
          <li>`'self'`：使用 uploader 本身作为拖放文件的触发元素；</li>
          <li>`'fileList'`：使用文件列表；</li>
          <li>jQuery 对象；</li>
          <li>使用 jQuery 选择器来指定触发元素。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`browse_button`</td>
      <td>触发打开选择文件对话框按钮</td>
      <td>默认 `'hidden'`</td>
      <td>
        <p>所有可用的值如下：</p>
        <ul>
          <li>`null` 或 `'hidden'`：不显示按钮，此时仍然可以使用 '.uploader-btn-browse' 类来标记上传按钮；</li>
          <li>`'>.uploader-btn-browse'`：在 `.uploader` 内查找包含类 `.uploader-btn-browse` 的元素；</li>
          <li>`'#uploaderBtn'`：在页面内查找 ID 为 `uploaderBtn` 的元素；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`url`</td>
      <td>文件上传地址</td>
      <td>必填</td>
      <td>服务器端处理文件上传的地址，可用为完整地址或者相对于当前页面的相对地址。</td>
    </tr>
    <tr>
      <td>`qiniu`</td>
      <td>七牛 SDK 配置</td>
      <td>可选</td>
      <td>
        <p>如果要使用七牛 SDK 来上传文件，则需要配置此选项，否则请留空。七牛文件上传参见本文后续内容。</p>
      </td>
    </tr>
    <tr>
      <td>`filters`</td>
      <td>文件过滤器</td>
      <td>可选</td>
      <td>
        <p>用来过滤文件的类型、大小等。该选项为一个对象，可以包含如下属性的一项或全部：</p>
        <ul>
          <li>`mime_types`：用来设定允许上传的文件类型，该值为一个对象数组，每个对象包含 `title` 和 `extensions` 属性；</li>
          <li>`max_file_size`：最大允许上传的文件大小，例如 `1024`，单位为字节（b），也可用为一个字符串，包含数值或单位，例如 `128kb`；</li>
          <li>`prevent_duplicates`：是否允许选取重复的文件，默认为 `true` 不允许，如果两个文件名和大小都相同则被认为是重复的文件；</li>
        </ul>
        <p>此选项的一个完整示例如下：</p>
        <pre><code>{
    // 只允许上传图片或图标（.ico）
    mime_types: [
        {title: '图片', extensions: 'jpg,gif,png'},
        {title: '图标', extensions: 'ico'}
    ],
    // 最大上传文件为 1MB
    max_file_size: '1mb',
    // 不允许上传重复文件
    prevent_duplicates: true
}</code></pre>
      </td>
    </tr>
    <tr>
      <td>`fileList`</td>
      <td>文件列表容器元素</td>
      <td>默认为 `''`</td>
      <td>
        <p>可选值还包括：</p>
        <ul>
          <li>`'large'`：使用大号文件列表；</li>
          <li>`'grid'`：使用网格文件列表；</li>
          <li>`'>.file-list'`，在 `.uploader` 内查找包含 `.file-list` 类的元素作为文件列表容器；</li>
          <li>`'#myFileList'`，在页面内查找 ID 为 `myFileList` 的元素作为文件列表容器；</li>
          <li>`<div class="uploader-files file-list"></div>`：使用指定的 HTML 来创建文件列表容器元素。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`fileTemplate`</td>
      <td>文件显示元素模板</td>
      <td>默认 `''`</td>
      <td>当设置为空值时则使用默认模板 `<div class="file"><div class="file-progress-bar"></div><div class="file-wrapper"><div class="file-icon"><i class="icon icon-file-o"></i></div><div class="content"><div class="file-name"></div><div class="file-size small text-muted">0KB</div></div><div class="actions"><div class="file-status" data-toggle="tooltip"><i class="icon"></i> <span class="text"></span></div><a data-toggle="tooltip" class="btn btn-link btn-download-file" target="_blank"><i class="icon icon-download-alt"></i></a><button type="button" data-toggle="tooltip" class="btn btn-link btn-reset-file" title="Repeat"><i class="icon icon-repeat"></i></button><button type="button" data-toggle="tooltip" class="btn btn-link btn-rename-file" title="Rename"><i class="icon icon-pencil"></i></button><button type="button" data-toggle="tooltip" title="Remove" class="btn btn-link btn-delete-file"><i class="icon icon-trash text-danger"></i></button></div></div></div>`</td>
    </tr>
    <tr>
      <td>`fileFormater`</td>
      <td>文件显示元素格式化函数</td>
      <td>函数，可选</td>
      <td>
        <p>`function($file, file, status){}`</p>
        <p>其中各参数含义如下：</p>
        <ul>
          <li>`$file`：当前用于显示文件内容的元素（jQuery 对象）；</li>
          <li>`file`：当前用于显示的文件对象；</li>
          <li>`status`：当前文件状态；</li>
        </ul>
        <p>如果不指定此选项，则使用默认的格式化函数。</p>
      </td>
    </tr>
    <tr>
      <td>`fileIconCreator`</td>
      <td>文件图标生成器函数</td>
      <td>函数，可选</td>
      <td>
        <p>`function(fileType, file, uploader){}`</p>
        <p>其中各参数含义如下：</p>
        <ul>
          <li>`fileType`：当前文件类型，例如 `'image/gif'`；</li>
          <li>`file`：当前文件对象；</li>
          <li>`uploader`：当前 uploader 对象；</li>
        </ul>
        <p>在此选项指定的函数返回用于展示文件图标的 HTML 内容。如果不指定此选项，则使用默认的图标生成器函数。</p>
      </td>
    </tr>
    <tr>
      <td>`staticFiles`</td>
      <td>初始静态文件对象数组</td>
      <td>对象数组</td>
      <td>
        <p>在此选项中设定文件上传控件初始化显示在文件列表中的静态文件条目。对象数组的对象格式如下：</p>
        <pre><code>{
    id,              // 文件id
    name,            // 文件名，例如"myfile.gif"
    type,            // 文件类型，例如"image/jpeg"
    size,            // 文件大小，单位为字节，当启用了客户端压缩功能后，该值可能会改变
    origSize,        // 文件的原始大小，单位为字节
    lastModifiedDate // 文件的最后修改时间
}</code></pre>
      </td>
    </tr>
    <tr>
      <td>`rename`</td>
      <td>是否支持文件重命名</td>
      <td>默认为 `true`</td>
      <td></td>
    </tr>
    <tr>
      <td>`renameExtension`</td>
      <td>是否允许重命名文件扩展名</td>
      <td>默认为 `false`</td>
      <td></td>
    </tr>
    <tr>
      <td>`renameByClick`</td>
      <td>是否点击文件名即可重命名</td>
      <td>默认为 `true`</td>
      <td></td>
    </tr>
    <tr>
      <td>`autoUpload`</td>
      <td>是否自动上传文件</td>
      <td>默认为 `false`</td>
      <td></td>
    </tr>
    <tr>
      <td>`browseByClickList`</td>
      <td>是否点击文件列表上传文件</td>
      <td>默认为 `false`</td>
      <td>如果设置为 `true`，则可用通过点击文件列表来触发打开文件选择对话框事件，此时可能会忽略文件条目上的一些事件。</td>
    </tr>
    <tr>
      <td>`dropPlaceholder`</td>
      <td>拖放时的提示文本</td>
      <td>默认为 `true`</td>
      <td>设定字符串来指定用于拖放时的提示文本，如果设置为 `true` 则显示默认的提示文本。</td>
    </tr>
    <tr>
      <td>`previewImageIcon`</td>
      <td>使用图片预览图作为图标</td>
      <td>默认 `true`</td>
      <td>如果设置为 `true`，当文件类型为图片时使用图片的预览图代替文件图标。</td>
    </tr>
    <tr>
      <td>`sendFileName`</td>
      <td>发送文件名称</td>
      <td>默认为 `true`</td>
      <td>
        <p>可选值如下：</p>
        <ul>
          <li>`true`，使用表单 `'name'` 字段发送文件名称；</li>
          <li>`false`，不发送文件名称；</li>
          <li>指定一个字符串作为表单字段名称来发送文件名。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`sendFileId`</td>
      <td>发送文件 ID</td>
      <td>默认为 `true`</td>
      <td>
        <p>可选值如下：</p>
        <ul>
          <li>`true`，使用表单 `'name'` 字段发送文件 ID；</li>
          <li>`false`，不发送文件 ID；</li>
          <li>指定一个字符串作为表单字段 ID 来发送文件名。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`responseHandler`</td>
      <td>服务器响应处理</td>
      <td>`true`（默认）或函数</td>
      <td>
        <p>当设置为 `true` 时，使用默认的服务器响应处理函数（解析 json 对象并判断上传结果）；</p>
        <p>当设置为回调函数时，函数 `function(responseObject, file){}` 参数定义如下：</p>
        <ul>
          <li>`responseObject`：服务器响应数据对象；</li>
          <li>`file`：当前上传的文件对象。</li>
        </ul>
        <p>在此函数内返回的任何文本内容都会当作错误的消息文本并且视此次上传失败。</p>
      </td>
    </tr>
    <tr>
      <td>`limitFilesCount`</td>
      <td>限制文件上传数目</td>
      <td>`false`（默认）或数字</td>
      <td></td>
    </tr>
    <tr>
      <td>`deleteConfirm`</td>
      <td>移除文件进行确认</td>
      <td>`false`（默认）或字符串</td>
      <td>
        <p>可选值如下：</p>
        <ul>
          <li>`false`，不进行确认；</li>
          <li>`true`，进行确认；</li>
          <li>使用字符串来作为消息进行确认。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`removeUploaded`</td>
      <td>移除已上传文件</td>
      <td>`false`（默认）或 `true`</td>
      <td></td>
    </tr>
    <tr>
      <td>`statusCreator`</td>
      <td>上传状态文本生成器</td>
      <td>函数，可选</td>
      <td>
        <p>`function(total, state, uploader){}`</p>
        <p>其中各参数含义如下：</p>
        <ul>
          <li>`total`：当前文件队列进度对象；</li>
          <li>`state`：当前文件队列状态；</li>
          <li>`uploader`：当前 uploader 对象；</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`previewImageSize`</td>
      <td>预览图尺寸</td>
      <td>`{width, height}`</td>
      <td>默认 `{width: 200, height: 200}`</td>
    </tr>
    <tr>
      <td>`uploadedMessage`</td>
      <td>显示上传成功消息</td>
      <td>默认 `true`</td>
      <td>
        <p>所有可用的值如下：</p>
        <ul>
          <li>`true`：使用默认的提示消息；</li>
          <li>`false`：不显示提示消息；</li>
          <li>指定一个字符串用来格式化提示消息，例如 `已上传 {uploaded} 个文件，{failed} 个文件上传失败。`；</li>
          <li>指定一个函数来返回格式化提示消息，函数定义为：`function(result){}`，其中参数 `result` 为 `{uploaded, failed}`，包含了此次上传成功的数目和失败的数目。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`deleteActionOnDone`</td>
      <td>是否允许删除上传成功的文件</td>
      <td>默认 `false`</td>
      <td>
        <p>所有可用的值如下：</p>
        <ul>
          <li>`false`：不允许从文件列表删除上传成功的文件；</li>
          <li>
            <p>指定一个函数来决定是否删除文件，函数定义为 `function(file, doRemoveFile){}`，在此函数内返回 `true` 来确认删除文件，其中函数参数定义如下：</p>
            <ul>
              <li>`file`，将要删除的文件对象；</li>
              <li>`doRemoveFile`，一个回调函数对象，调用此函数则会直接删除。</li>
            </ul>
            <p>当文件上传成功之后如果想删除文件通常需要先在服务器将文件删除，你可用在此回调函数内向服务器发起请求，然后再从文件上传视图的文件列表中移除。</p>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`renameActionOnDone`</td>
      <td>是否允许重命名上传成功的文件</td>
      <td>默认 `false`</td>
      <td>
        <p>所有可用的值如下：</p>
        <ul>
          <li>`false`：不允许重命名上传成功的文件；</li>
          <li>
            <p>指定一个函数来决定是否重命名文件，函数定义为 `function(file, filename, doRenameFile){}`，在此函数内返回 `true` 来确认重命名文件，其中函数参数定义如下：</p>
            <ul>
              <li>`file`，将要重命名的文件对象；</li>
              <li>`filename`，新的文件名；</li>
              <li>`doRenameFile`，一个回调函数对象，调用此函数则会直接重命名。</li>
            </ul>
            <p>当文件上传成功之后如果想重命名文件通常需要先在服务器将文件重命名，你可用在此回调函数内向服务器发起请求，然后再在文件列表中更改文件名称。</p>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`headers`</td>
      <td>自定义头信息</td>
      <td>默认 `{}`</td>
      <td>使用一个对象中的属性和值作为键值对来定义上传到服务器请求的头信息。HTML 4 的上传方式不支持自定义头信息。</td>
    </tr>
    <tr>
      <td>`multipart`</td>
      <td>使用 `multipart/form-data`</td>
      <td>默认为 `true`</td>
      <td>如果为 `true`，则上传文件时以 `multipart/form-data` 来提交表单到服务器，如果为 `false` 则使用二进制的形式来上传文件。使用二进制的形式上传文件可能会存在问题，推荐使用 `multipart/form-data` 的形式。</td>
    </tr>
    <tr>
      <td>`multipart_params`</td>
      <td>multipart 附加参数</td>
      <td>函数或对象，默认 `{}`</td>
      <td>
        <p>当提交表单时附加到请求中的参数，如果是 php 服务器端可用使用 `$_POST` 获取到这些参数。例如：</p>
        <pre><code>{
    foo: 'foo',
    bar: ['bar1', 'bar2'],
    test: {
        attr1: 'attr1 value'
    }
}</code></pre>
        <p>当设置为回调函数时会在提交文件之前调用，使用返回值作为附加参数提交到服务器，该回调函数包含一个参数为当前提交的文件对象。</p>
        <pre><code>function(file, params) {
    return {filename: file.name, extension: file.ext};
}</code></pre>
        <p>回调函数参数定义如下：</p>
        <ul>
          <li><code>file</code>：当前准备上传的文件对象；</li>
          <li><code>params</code>：当前默认的参数对象，你可以修改这个对象并返回作为新的参数对象。</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`max_retries`</td>
      <td>最大尝试次数</td>
      <td>默认 `3`</td>
      <td>当上传失败时的最大尝试次数，如果为 `0` 表示不重试。</td>
    </tr>
    <tr>
      <td>`chunk_size`</td>
      <td>分片上传大小</td>
      <td>默认 `1mb`</td>
      <td>如果此值为一个数字，则默认单位为字节，如果为 `0`，则表示不启用分片上传。</td>
    </tr>
    <tr>
      <td>`resize`</td>
      <td>图片修改设置</td>
      <td>默认 `{}`</td>
      <td>
        <p>使用一个对象来设置如果在上传图片之前对图片进行修改。该对象可以包含如下属性的一项或全部：</p>
        <ul>
          <li>`width`：图片压缩后的宽度，如果不指定此属性则保持图片的原始宽度；</li>
          <li>`height`：图片压缩后的高度，如果不指定此属性则保持图片的原始高度；</li>
          <li>`crop`：是否对图片进行裁剪；</li>
          <li>`quality`：图片压缩质量，可取值为 `0~100`，数值越大，图片质量越高，压缩比例越小，文件体积也越大，默认为 `90`，只对 `.jpg` 图片有效；</li>
          <li>`preserve_headers`：是否保留图片的元数据，默认为 `true` 保留，如果为 `false` 不保留。</li>
        </ul>
        <p>该选项的一个完整示例如下：</p>
        <pre><code>{
    width: 128,
    height: 128,
    crop: true,
    quuality: 90,
    preserve_headers: false
}</code></pre>
      </td>
    </tr>
    <tr>
      <td>`multi_selection`</td>
      <td>是否可用一次选取多个文件</td>
      <td>默认 `true`</td>
    </tr>
    <tr>
      <td>`unique_names`</td>
      <td>为文件分配唯一文件名</td>
      <td>默认 `false`</td>
      <td>如果为 `true`，则会为每一个上传的文件生成一个唯一的文件名，并作为额外的参数提交到服务器。</td>
    </tr>
    <tr>
      <td>`runtimes`</td>
      <td>文件上传方式</td>
      <td>默认 `html5,flash,silverlight,html4`</td>
      <td>默认情况下会根据浏览器支持的情况自动配置此参数。</td>
    </tr>
    <tr>
      <td>`file_data_name`</td>
      <td>文件域在表单中的名称</td>
      <td>默认 `'file'`</td>
      <td>如果为 `'file'`，则可用在服务器通过 `$_FILES['file']` 来获取上传的文件信息。</td>
    </tr>
    <tr>
      <td>`flash_swf_url`</td>
      <td>flash 上传组件地址</td>
      <td>默认为 `lib/uploader/Moxie.swf`</td>
      <td>请确保在文件上传页面能够通过此地址访问到此文件。</td>
    </tr>
    <tr>
      <td>`silverlight_xap_url`</td>
      <td>silverlight 上传组件地址</td>
      <td>默认为 `lib/uploader/Moxie.xap`</td>
      <td>请确保在文件上传页面能够通过此地址访问到此文件。</td>
    </tr>
    <tr>
      <td>`lang`</td>
      <td>界面语言</td>
      <td>默认 `''`</td>
      <td>
        <p>默认情况下设置为空值，会从浏览器 `<html lang="">` 属性上获取语言设置，但有也可以手动指定为以下选项：</p>
        <ul>
          <li>`'zh_cn'`：简体中文；</li>
          <li>`'zh_tw'`：繁体中文；</li>
          <li>`'en'`'：英文；</li>
          <li>`{...}`：使用一个对象来自定义语言，自定义语言对象应该包含的属性值参考内置语言对象 `$.zui.Uploader.LANG`。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 对象及属性

### 文件队列及文件状态

`$.zui.Uploader.STATUS` 对象提供一些预设的属性来表示文件队列和文件的各个状态信息。

<table class="table table-bordered">
  <thead>
    <tr>
      <th>状态</th>
      <th>值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`STOPPED`</td>
      <td>`1`</td>
      <td>文件队列还没有开始上传，或者上传已暂停或已上传完成。</td>
    </tr>
    <tr>
      <td>`STARTED`</td>
      <td>`2`</td>
      <td>文件队列正在上传中。</td>
    </tr>
    <tr>
      <td>`QUEUED`</td>
      <td>`1`</td>
      <td>文件已被添加到上传队列中等待上传。</td>
    </tr>
    <tr>
      <td>`UPLOADING`</td>
      <td>`2`</td>
      <td>文件正在上传中。</td>
    </tr>
    <tr>
      <td>`FAILED`</td>
      <td>`3`</td>
      <td>文件上传失败。</td>
    </tr>
    <tr>
      <td>`DONE`</td>
      <td>`4`</td>
      <td>文件已上传到服务器。</td>
    </tr>
  </tbody>
</table>

### 文件对象属性和方法

在很多回调函数中会给出文件对象信息。

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性/方法</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>文件 ID</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>文件名称，例如 `'myFile.jpg'`</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>文件类型，例如 `'image/jpeg'`</td>
    </tr>
    <tr>
      <td>`ext`</td>
      <td>文件扩展名，例如 `'.gif'`</td>
    </tr>
    <tr>
      <td>`isImage`</td>
      <td>文件是否为图片</td>
    </tr>
    <tr>
      <td>`previewImage`</td>
      <td>图片文件的预览图地址</td>
    </tr>
    <tr>
      <td>`size`</td>
      <td>文件大小，单位为字节（b）</td>
    </tr>
    <tr>
      <td>`origSize`</td>
      <td>文件的原始大小，单位为字节（b）</td>
    </tr>
    <tr>
      <td>`loaded`</td>
      <td>文件已上传部分的大小，单位为字节（b）</td>
    </tr>
    <tr>
      <td>`percent`</td>
      <td>文件已上传部分所占的百分比，例如 `50` 表示已上传了 50%</td>
    </tr>
    <tr>
      <td>`status`</td>
      <td>文件的状态，该值为 `$.zui.Uploader.STATUS` 对象上的一个属性值。</td>
    </tr>
    <tr>
      <td>`lastModifiedDate`</td>
      <td>文件上次修改的时间</td>
    </tr>
    <tr>
      <td>`getNative()`</td>
      <td>获取原生的文件对象</td>
    </tr>
    <tr>
      <td>`destroy()`</td>
      <td>销毁文件对象</td>
    </tr>
  </tbody>
</table>

并不保证任何时候文件对象中都包含以上全部属性。

### 文件上传队列进度信息

文件上传队列进度信息为一个对象，包含如下属性：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性</th>
      <td>说明</td> 
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`size`</td>
      <td>上传队列中所有文件的总大小，单位为字节（b）</td>
    </tr>
    <tr>
      <td>`loaded`</td>
      <td>上传队列中已上传文件的总大小，单位为字节（b）</td>
    </tr>
    <tr>
      <td>`uploaded`</td>
      <td>上传队列中已上传成功的文件数目</td>
    </tr>
    <tr>
      <td>`failed`</td>
      <td>上传队列上传失败的文件数目</td>
    </tr>
    <tr>
      <td>`queued`</td>
      <td>上传队列中等待上传或者正在上传的文件数目</td>
    </tr>
    <tr>
      <td>`percent`</td>
      <td>上传队列已完成上传占所有文件的百分比，为一个 `0~100` 数值，如果为 `50`，表示已上传了 `50%`</td>
    </tr>
    <tr>
      <td>`bytesPerSec`</td>
      <td>上传的速度，单位为字节/秒，即 `b/s`</td>
    </tr>
  </tbody>
</table>

### 错误代码属性

这些属性在 `$.zui.Uploader.ERRORS` 对象上。

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性</th>
      <th>值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`GENERIC_ERROR`</td>
      <td>`-100`</td>
      <td>通用错误</td>
    </tr>
    <tr>
      <td>`HTTP_ERROR`</td>
      <td>`-200`</td>
      <td>HTTP 网络错误</td>
    </tr>
    <tr>
      <td>`IO_ERROR`</td>
      <td>`-300`</td>
      <td>文件读写错误，例如无法读取所选择的文件</td>
    </tr>
    <tr>
      <td>`SECURITY_ERROR`</td>
      <td>`-400`</td>
      <td>安全错误</td>
    </tr>
    <tr>
      <td>`INIT_ERROR`</td>
      <td>`-500`</td>
      <td>初始化时发生错误</td>
    </tr>
    <tr>
      <td>`FILE_SIZE_ERROR`</td>
      <td>`-600`</td>
      <td>文件大小不符合要求</td>
    </tr>
    <tr>
      <td>`FILE_EXTENSION_ERROR`</td>
      <td>`-601`</td>
      <td>文件类型不符合要求</td>
    </tr>
    <tr>
      <td>`FILE_DUPLICATE_ERROR`</td>
      <td>`-602`</td>
      <td>选择了重复的文件</td>
    </tr>
    <tr>
      <td>`IMAGE_FORMAT_ERROR`</td>
      <td>`-700`</td>
      <td>图片格式错误</td>
    </tr>
    <tr>
      <td>`IMAGE_MEMORY_ERROR`</td>
      <td>`-701`</td>
      <td>内存错误</td>
    </tr>
    <tr>
      <td>`IMAGE_DIMENSIONS_ERROR`</td>
      <td>`-702`</td>
      <td>图片文件大小超出能处理的范围</td>
    </tr>
  </tbody>
</table>

## 方法

upload 对象实例上有如下方法：

### <span class="code text-danger">showMessage(message, type, time)</span>

在上传文件界面区域上显示一个消息，该方法参数定义如下：

* `message`：要显示的消息文本；
* `type`：消息类型，可选值包括 `'danger'`（危险消息，默认）、`'warning'`（警告）、`'info'`（一般），`'success'`（成功消息）。

要启用显示消息功能，你必须在 `.upload` 元素内部提供 `.uploader-message` 元素。

```html
<div class="uploader">
  <div class="uploader-message text-center">
    <div class="content"></div>
    <button type="button" class="close">×</button>
  </div>
</div>
```

### <span class="code text-danger">hideMessage()</span>

隐藏界面上的消息。

### <span class="code text-danger">start()</span>

开始上传队列中的文件。

### <span class="code text-danger">stop()</span>

停止上传队列中的文件。

### <span class="code text-danger">getState()</span>

获取上传队列状态代码。状态代码为 `$.zui.Uploader.STATUS` 对象上的属性值，可能的值包括 `$.zui.Uploader.STATUS.STARTED` 和 `$.zui.Uploader.STATUS.STOPPED`。

### <span class="code text-danger">isStarted()</span>

检查是否正在上传队列中的文件。如果返回 `true` 则表示已开始上传，`false` 表示当前没有进行上传文件。

### <span class="code text-danger">isStopped()</span>

检查是否已停止上传队列中的文件。如果返回 `true` 则表示还没有开始上传，或者上传已暂停或已上传完成，`false` 表示正在进行上传文件。

### <span class="code text-danger">getFiles()</span>

获取上传队列中的文件，返回结果为文件对象数组。

### <span class="code text-danger">getTotal()</span>

获取文件上传队列进度信息。参见本页面 [对象及属性 → 文件上传队列进度信息]。

### <span class="code text-danger">disableBrowse(disable)</span>

设置上传按钮的禁用状态，参数定义如下：

* `disable`：如果为 `true` 则将上传按钮设置为禁用，如果为 `false` 则取消上传按钮的禁用状态。

### <span class="code text-danger">getFile(id)</span>

通过文件 ID 获取文件对象，参数定义如下：

* `id`：文件对象的唯一 ID 值。

### <span class="code text-danger">showFile(file)</span>

在文件列表上显示文件（根据文件对象 ID 属性来判断，如果文件列表上有相同 ID 的文件，则更新，否则在文件列表上新增一项），参数定义如下：

* `file`：要显示的文件对象，或者为多个要显示的文件对象数组。

### <span class="code text-danger">removeFile(file)</span>

将文件从文件队列中移除，参数定义如下：

* `file`：要移除的文件对象。

### <span class="code text-danger">destroy()</span>

销毁 `uploader` 实例。

### <span class="code text-danger">showStatus()</span>

刷新上传进度状态信息。需要有 `.uploader-message` 元素。

### 调用方法

以调用开始上传方法 `start()` 为例：

```js
// 1. 获取 uploader 实例对象
var uploader = $('#myUploader').data('zui.uploader');

// 2. 调用 start 方法
uploader.start();
```

## 事件

### <span class="code text-danger">onInit</span>

当初始化完成后触发，回调函数形式为：

* `function()`

### <span class="code text-danger">onFilesAdded</span>

当文件被添加到上传队列时触发，回调函数形式为：

* `function(files)`

回调函数参数定义如下：

* `files`：添加到上传队列的文件对象数组。

### <span class="code text-danger">onUploadProgress</span>

当文件上传进度发送变化时触发，此回调函数会在上传文件的过程中反复触发，回调函数形式为：

* `function(file)`

回调函数参数定义如下：

* `file`：上传进度发生变化的文件对象。

### <span class="code text-danger">onFileUploaded</span>

当队列中的一个文件上传完成后触发，回调函数形式为：

* `function(file, responseObject)`

回调函数参数定义如下：

* `file`：上传进度发生变化的文件对象；
* `responseObject`：服务器返回的信息对象，包含如下属性：
  - `response`：服务器返回的文本信息；
  - `responseHeaders`：服务器返回的头部信息；
  - `status`：HTTP 状态码，例如 `200`。

### <span class="code text-danger">onUploadComplete</span>

当队列中所有文件上传完成后触发，回调函数形式为：

* `function(files)`

回调函数参数定义如下：

* `files`：上传完成的文件对象数组。

### <span class="code text-danger">onFilesRemoved</span>

当文件从上传队列移除后触发，回调函数形式为：

* `function(files)`

回调函数参数定义如下：

* `files`：被移除的文件对象数组。

### <span class="code text-danger">onChunkUploaded</span>

当启用分片上传选项后，每个文件片段上传完成时触发，回调函数形式为：

* `function(file, responseObject)`

回调函数参数定义如下：

* `file`：上传进度发生变化的文件对象；
* `responseObject`：服务器返回的信息对象，包含如下属性：
  - `offset`：当前上传的文件片段在文件总大小中的偏移；
  - `response`：服务器返回的文本信息；
  - `responseHeaders`：服务器返回的头部信息；
  - `status`：HTTP 状态码，例如 `200`；
  - `total`：当前文件的总大小，单位为字节（b）。

### <span class="code text-danger">onUploadFile</span>

当队列中的某个文件开始上传时触发，回调函数形式为：

* `function(file)`

回调函数参数定义如下：

* `file`：开始上传的文件对象。

### <span class="code text-danger">onBeforeUpload</span>

当队列中的某个文件开始上传之前触发，回调函数形式为：

* `function(file)`

回调函数参数定义如下：

* `file`：开始上传的文件对象。

### <span class="code text-danger">onStateChanged</span>

当文件队列状态发生改变时触发，回调函数形式为：

* `function(state)`

回调函数参数定义如下：

* `state`：文件队列状态，可能的值包括 `$.zui.Uploader.STATUS.STARTED` 和 `$.zui.Uploader.STATUS.STOPPED`。

### <span class="code text-danger">onQueueChanged</span>

当文件上传队列发生变化时触发，回调函数形式为：

* `function()`

### <span class="code text-danger">onError</span>

当发生错误时触发，回调函数形式为：

* `function(error)`

回调函数参数定义如下：

* `error`：错误信息对象，包含如下属性：
  - `code`：错误代码，参见错误代码属性说明；
  - `message`：错误消息文本；
  - `file`：发生错误相关的文件对象。

### 绑定事件

方式一，使用 jQuery `$().on(event, callback)` 方式：

```js
$('#myUploader').uploader().on('onUploadFile', function(file) {
    console.log('上传成功', file);
});
```

方式二，在初始化时作为选项绑定：

```js
$('#myUploader').uploader({
    url: '...',
    // ...,
    onUploadFile: function(file) {
       console.log('上传成功', file);
    }
});
```

### 在事件中访问 uploader 对象

所有事件回调函数的 `this` 变量都为当前 `uploader` 实例对象。

## 静态文件

在初始化对时候使用 `staticFiles` 选项指定一个文件对象数组，可以实现在文件列表显示服务器中已存在对文件。

<div class="example">
  <div id="uploaderStaticFilesExample" class="uploader file-drag-area uploader-rename uploader-custom" data-drop-placeholder="将文件拖放至在此处。">
    <div class="uploader-message text-center">
      <div class="content"></div>
      <button type="button" class="close">×</button>
    </div>
    <div class="uploader-files file-list file-list-lg file-rename-by-click" data-drag-placeholder="请拖拽文件到此处"></div>
    <div class="uploader-actions">
      <div class="uploader-status pull-right text-muted"></div>
      <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> 选择文件</button>
      <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
    </div>
  <div class="uploader-btn-browse uploader-btn-hidden" style="z-index: 1;"></div><div id="html5_1c2e40kps1grtfnu12e91e0r1nb77_container" class="moxie-shim moxie-shim-html5" style="position: absolute; top: -1px; left: -1px; width: 1px; height: 1px; overflow: hidden; z-index: 0;"><input id="html5_1c2e40kps1grtfnu12e91e0r1nb77" type="file" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" multiple="" accept=""></div></div>
</div>

```js
$('#uploaderStaticFilesExample').uploader({
      chunk_size: '50kb',
      url: 'http://your/post/url',
      deleteActionOnDone: function(file, doRemoveFile) {
          doRemoveFile();
      },
      staticFiles: [
          {name: 'zui.js', size: 216159, url: 'http://zui.sexy'},
          {name: 'zui.css', size: 106091}
      ]
  });
```

## 自定义 UI

文件上传视图提供了最大限度的定制机制，你可以定制自己的文件上传 UI。

### HTML 结构

在文件上传视图中约定了一些特定的类来使得你的 UI 交互生效。通常情况下文件上传视图的 HTML 结构如下：

```html
<div class="uploader">
  <div class="uploader-message">
    <div class="content"></div>
    <button type="button" class="close">×</button>
  </div>
  <div class="uploader-files file-list" data-drag-placeholder="请拖拽文件到此处"></div>
  <div class="uploader-actions">
    <div class="uploader-status pull-right text-muted"></div>
    <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> 选择文件</button>
    <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
  </div>
</div>
```

约定的特殊类说明：

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 160px">特殊类</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`.uploader`</td>
      <td>文件上传顶层容器，你可用在此元素上使用 `[data-*=*]` 来设置初始化选项，使用 `[data-ride="uploader"]` 来启用文件加载完成时自动进行初始化。</td>
    </tr>
    <tr>
      <td>`.uploader-files`</td>
      <td>
        <p>文件列表，还可用同时使用如下外观类中的一个：</p>
        <ul>
          <li>`.file-list`：使用默认文件列表外观；</li>
          <li>`.file-list.file-list-lg`：使用大号文件列表外观；</li>
          <li>`.file-list.file-list-grid`：使用网格文件列表外观。</li>
        </ul>
        <p>使用 `[data-drag-placeholder=""]`，来设置文件上传列表的预设提示文本。</p>
      </td>
    </tr>
    <tr>
      <td>`.uploader-message`</td>
      <td>
        <p>用于在此元素中显示交互过程中的消息。在 `.uploader-message` 内你还可以放置一个 `.close` 来指定用于关闭此消息的按钮，使用 `.content` 来指定消息文本显示的元素。一个完整的示例如下：</p>
        <pre><code>&lt;div class=&quot;uploader-message&quot;&gt;
  &lt;div class=&quot;content&quot;&gt;&lt;/div&gt;
  &lt;button type=&quot;button&quot; class=&quot;close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td>`.uploader-actions`</td>
      <td>用于放置文件上传操作相关按钮。</td>
    </tr>
    <tr>
      <td>`.uploader-btn-browse`</td>
      <td>通常用于标记一个按钮，点击此按钮会打开文件对话框。</td>
    </tr>
    <tr>
      <td>`.uploader-btn-start`</td>
      <td>通常用于标记一个按钮，点击此按钮会开始（或恢复）上传文件队列中的文件到服务器。</td>
    </tr>
    <tr>
      <td>`.uploader-btn-stop`</td>
      <td>通常用于标记一个按钮，点击此按钮会暂停上传文件队列中的文件到服务器。</td>
    </tr>
    <tr>
      <td>`.uploader-status`</td>
      <td>用于在此元素中显示文件上传状态信息，包括文件上传进度、实时速度或文件数量等。</td>
    </tr>
  </tbody>
</table>

### 自定义文件元素模板

文件元素模板决定如何在文件列表上显示一个文件条目。默认的模板为：

```html
<div class="file">
  <div class="file-progress-bar"></div>
  <div class="file-wrapper">
    <div class="file-icon"><i class="icon icon-file-o"></i></div>
    <div class="content">
      <div class="file-name"></div>
      <div class="file-size small text-muted">0KB</div>
    </div>
    <div class="actions">
      <div class="file-status" data-toggle="tooltip"><i class="icon"></i> <span class="text"></span></div>
      <a data-toggle="tooltip" class="btn btn-link btn-download-file" target="_blank"><i class="icon icon-download-alt"></i></a>
      <button type="button" data-toggle="tooltip" class="btn btn-link btn-reset-file" title="Repeat"><i class="icon icon-repeat"></i></button>
      <button type="button" data-toggle="tooltip" class="btn btn-link btn-rename-file" title="Rename"><i class="icon icon-pencil"></i></button>
      <button type="button" data-toggle="tooltip" title="Remove" class="btn btn-link btn-delete-file"><i class="icon icon-trash text-danger"></i></button>
    </div>
  </div>
</div>
```

有两种方式来设置文件元素模板。方式一是通过初始化选项 `fileTemplate`：

```js
$('#myUploader').uploader({
    url: '...',
    // ...
    fileTemplate: "..." // 设置文件模板字符串
});
```

方式二是通过在 `.uploader-files` 元素内使用 `.template` 类来标记一个元素作为文件模板：

```html
<div id='uploaderExample2' class="uploader" data-ride="uploader" data-url="your/file/upload/url" data-auto-upload="true">
  <div class="uploader-files file-list" data-drag-placeholder="请拖拽文件到此处">
    <div class="file template">
      <!-- 文件模板元素内部内容 -->
    </div>
  </div>
</div>
```

文件元素模板中可以使用如下约定的特殊类：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>类</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`.file`</td>
      <td>文件元素容器类</td>
    </tr>
    <tr>
      <td>`.file-progress-bar`</td>
      <td>文件上传进度条</td>
    </tr>
    <tr>
      <td>`.file-icon`</td>
      <td>用于显示文件图标</td>
    </tr>
    <tr>
      <td>`.file-name`</td>
      <td>用于显示文件名</td>
    </tr>
    <tr>
      <td>`.file-size`</td>
      <td>用于显示文件大小</td>
    </tr>
    <tr>
      <td>`.file-status`</td>
      <td>用于显示文件状态信息</td>
    </tr>
    <tr>
      <td>`.btn-download-file`</td>
      <td>用户点击此元素触发文件下载操作</td>
    </tr>
    <tr>
      <td>`.btn-reset-file`</td>
      <td>用户点击此元素触发重新上传操作</td>
    </tr>
    <tr>
      <td>`.btn-rename-file`</td>
      <td>用户点击此元素触发文件重命名操作</td>
    </tr>
    <tr>
      <td>`.btn-delete-file`</td>
      <td>用户点击此元素触发移除文件操作</td>
    </tr>
  </tbody>
</table>

文件模板中也可以完全不用约定的特殊类（`.file` 类除外），通过初始化选项 `fileFormater` 指定一个回调函数来格式化文件元素，该回调函数定义为：

* `function($file, file, status)`

参数定义如下：

* `$file`：要格式化的文件元素；
* `file`：当前文件对象；
* `status`：当前文件状态。

回调函数中 `this` 变量为当前 `uploader` 实例。

简单的回调函数例子：

```js
$('#myUploader').uploader({
    url: '...',
    // ...
    fileFormater: function($file, file, status) {
        $file.find('.file-name').text(file.name);
        // ...
    }
});
```

### 自定义文件图标

默认情况下会为不同的文件类型显示不同的文件图标，也可以通过初始化选项 `fileIconCreator` 指定一个回调函数来返回用于显示图标的 HTML 源码，该回调函数定义为：

* `function(fileType, file, uploader)`

回调函数参数定义如下：

* `fileType`：文件类型，例如 `'image/jpeg'`；
* `file`：文件对象；
* `uploader`：uploader 实例对象。

例子：

```js
$('#myUploader').uploader({
    url: '...',
    // ...
    fileIconCreator: function(fileType, file, uploader) {
        if(fileType.indexOf('image') === 0) {
            // 如果文件是图片，返回图片图标
            return '<i class="icon icon-file-image"></i>';
        } else {
            // 处理其他非图片文件情况
        }
    }
})
```

### 定制示例

下面给出一个用表格来显示文件列表的例子。

<example>
  <div id="tableUploader" class="uploader">
    <div class="uploader-message text-center">
      <div class="content"></div>
      <button type="button" class="close">×</button>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th colspan="2">文件名</th>
          <th style="width: 100px">大小</th>
          <th style="width: 160px; text-align: center;">状态/操作</th>
        </tr>
      </thead>
      <tbody class="uploader-files">
        <tr class="file template">
          <td style="width: 38px; padding: 3px"><div class="file-icon"></div></td>
          <td style="padding: 0">
            <div style="position: relative; padding: 8px;">
              <strong class="file-name"></strong>
              <div class="file-progress-bar"></div>
            </div>
          </td>
          <td><span class="file-size text-muted"></span></td>
          <td class="actions text-right" style="padding: 0 4px;">
            <div class="file-status" data-toggle="tooltip" style="margin: 8px;"><i class="icon"></i> <span class="text"></span></div>
            <a data-toggle="tooltip" class="btn btn-link btn-download-file" target="_blank"><i class="icon icon-download-alt"></i></a>
            <button type="button" data-toggle="tooltip" class="btn btn-link btn-reset-file" title="Repeat"><i class="icon icon-repeat"></i></button>
            <button type="button" data-toggle="tooltip" class="btn btn-link btn-rename-file" title="Rename"><i class="icon icon-pencil"></i></button>
            <button type="button" data-toggle="tooltip" title="Remove" class="btn btn-link btn-delete-file"><i class="icon icon-trash text-danger"></i></button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" style="padding: 4px 0">
            <div style="position: relative;">
              <div class="uploader-status pull-right text-muted" style="margin-top: 5px;"></div>
              <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> 选择文件</button>
              <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
            </div>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</example>

```html
<div id="tableUploader" class="uploader">
  <div class="uploader-message text-center">
    <div class="content"></div>
    <button type="button" class="close">×</button>
  </div>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th colspan="2">文件名</th>
        <th style="width: 100px">大小</th>
        <th style="width: 160px; text-align: center;">状态/操作</th>
      </tr>
    </thead>
    <tbody class="uploader-files">
      <tr class="file template">
        <td style="width: 38px; padding: 3px"><div class="file-icon"></div></td>
        <td style="padding: 0">
          <div style="position: relative; padding: 8px;">
            <strong class="file-name"></strong>
            <div class="file-progress-bar"></div>
          </div>
        </td>
        <td><span class="file-size text-muted"></span></td>
        <td class="actions text-right" style="padding: 0 4px;">
          <div class="file-status" data-toggle="tooltip" style="margin: 8px;"><i class="icon"></i> <span class="text"></span></div>
          <a data-toggle="tooltip" class="btn btn-link btn-download-file" target="_blank"><i class="icon icon-download-alt"></i></a>
          <button type="button" data-toggle="tooltip" class="btn btn-link btn-reset-file" title="Repeat"><i class="icon icon-repeat"></i></button>
          <button type="button" data-toggle="tooltip" class="btn btn-link btn-rename-file" title="Rename"><i class="icon icon-pencil"></i></button>
          <button type="button" data-toggle="tooltip" title="Remove" class="btn btn-link btn-delete-file"><i class="icon icon-trash text-danger"></i></button>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="4" style="padding: 4px 0">
          <div style="position: relative;">
            <div class="uploader-status pull-right text-muted" style="margin-top: 5px;"></div>
            <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> 选择文件</button>
            <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</div>
```

```js
$('#tableUploader').uploader({
    url: 'url/for/upload/file'
});
```

## 处理服务器结果

### 默认处理方式

通常当服务器对上传的文件的 HTTP 请求状态为 `200` 则视为文件上传成功，否则视为文件上传失败。如果需要返回更加详细的错误信息，可以返回 JSON 对象字符串。在 JSON 对象中设置 `result` 或 `status` 属性值为 `'ok'`、`'success'`、`200` 中的一个则视为文件上传成功，否则视为文件上传失败。

当文件上传失败时，使用 `message` 属性返回一个错误消息在界面上显示来提示用户。下面为当文件上传失败时一个完整的 JSON 对象示例：

```js
{
    result: 'failed',               // 文件上传失败
    message: '文件内容包含违规内容'    // 用于在界面上提示用户的消息
}
```

当文件上传成功时，使用 `id` 属性来返回文件在服务器上的唯一标识，使用 `url` 属性返回文件的下载地址。当下载地址指定时会在文件列表上显示该文件的下载按钮。下面为当文件上传成功时的一个完整的 JSON 对象示例：

```js
{
    result: 'ok',     // 文件上传成功
    id: 10001,        // 文件在服务器上的唯一标识
    url: 'http://example.com/file-10001.jpg'        // 文件的下载地址
}
```

### 自定义处理方式

除了直接通过返回约定格式的 JSON 对象来判断上传结果之外，还可以通过初始化选项 `responseHandler` 设置一个回调函数来自定义处理结果。

该回调函数定义为：

* `function(responseObject, file)`

参数定义为：

* `responseObject`：服务器返回的信息对象，包含如下属性：
  - `response`：服务器返回的文本信息；
  - `responseHeaders`：服务器返回的头部信息；
  - `status`：HTTP 状态码，例如 `200`。
* `file`：当前上传的文件对象。

该回调函数的 `this` 变量指向 uploader 当前实例。在该回调函数中返回任何字符串都视为上传失败，并将返回的字符串作为错误消息显示在用户界面上。

```js
$('#myUploader').uploader({
    url: 'url/for/upload/file',
    // ...
    responseHandler: function(responseObject, file) {
        // 当服务器返回的文本内容包含 `'error'` 文本时视为上传失败
        if(responseObject.response.indexOf('error')) {
            return '上传失败。服务器返回了一个错误：' + responseObject.response;
        }
    }
});
```

## 使用七牛 Javascript SDK

文件上传支持配合七牛云存储使用，当检测到页面加载了 <a href="http://github.com/qiniu/js-sdk" target="_blank">七牛 JavaScript SDK</a> 后，只需要在初始化选项 `qiniu` 指定七牛 API 相关信息即可将文件上传到七牛。

初始化选项 `qiniu` 为一个对象，应该包含如下属性：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`domain`</td>
      <td>**必需**，bucket 域名，上传下载资源时用到，如：'http://xxx.bkt.clouddn.com/'</td>
    </tr>
    <tr>
      <td>`uptoken`</td>
      <td>是上传凭证，由其他程序生成</td>
    </tr>
    <tr>
      <td>`uptoken_url`</td>
      <td>Ajax 请求 uptoken 的 Url，**强烈建议设置**（服务端提供）</td>
    </tr>
    <tr>
      <td>`uptoken_func`</td>
      <td>在需要获取 uptoken 时，该方法会被调用</td>
    </tr>
  </tbody>
</table>

属性 `uptoken`、`uptoken_url`、`uptoken_func` 至少且仅需指定一个。以下为一个完整的七牛配置对象：

```js
{
    uptoken : 'u0nP4wf4t7V3-5gniRcZ3EdvScOLpZkokruvCB7V:apjkB76CaKkP2nNFwuoEvmxE9NU=:eyJzY29wZSI6ImNhdG91c2UiLCJkZWFkbGluZSI6MTQ4MTcyODAzMH0=',
    domain: 'http://7xjyuk.com1.z0.glb.clouddn.com'
}
```

更多内容请参考 <a href="https://developer.qiniu.com/kodo/sdk/javascript" target="_blank">七牛官方文档</a>。

### 使用七牛上传的步骤

第一步：在页面引入七牛 [js-sdk](https://github.com/qiniu/js-sdk)：

```html
<!-- 在 zui.js 和 uploader.js 加载之前引入七牛 js-sdk -->
<script src="https://cdn.staticfile.org/qiniu-js-sdk/1.0.14-beta/qiniu.min.js"></script>
```

第二步：在初始化选项中指定 `qiniu` 配置对象：

```js
$('#myUploader').uploader({
    qiniu: {
        uptoken : 'u0nP4wf4t7V3-5gniRcZ3EdvScOLpZkokruvCB7V:apjkB76CaKkP2nNFwuoEvmxE9NU=:eyJzY29wZSI6ImNhdG91c2UiLCJkZWFkbGluZSI6MTQ4MTcyODAzMH0=',
        domain: 'http://7xjyuk.com1.z0.glb.clouddn.com'
    }
});
```

在选项中指定了 `qiniu` 配置对象之后，无需指定 `url` 选项。

## 获取 plupload 对象

文件上传视图基于 <a href="http://www.plupload.com/" target="_blank">plupload</a> 开发，你仍然可以从 `uploader` 对象上获取到原始的 `plupload` 对象。

```js
// 获取 uploader 对象
var uploader = $('#myUploader').data('zui.uploader');
// 获取 plupload 对象
var plupload = uploader.plupload;
```

`plupload` 对象上可用的属性和方法如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性/方法</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>plupload 的 ID，在页面上值唯一</td>
    </tr>
    <tr>
      <td>`state`</td>
      <td>当前的上传队列状态，可选值包括：`$.zui.Uploader.STATUS.STARTED` 和 `$.zui.Uploader.STATUS.STOPPED`</td>
    </tr>
    <tr>
      <td>`runtime`</td>
      <td>当前使用的上传方式</td>
    </tr>
    <tr>
      <td>`files`</td>
      <td>当前上传队列中的文件，值为一个包含所有文件对象的数组</td>
    </tr>
    <tr>
      <td>`settings`</td>
      <td>当前的配置选项对象</td>
    </tr>
    <tr>
      <td>`total`</td>
      <td>文件上传队列进度信息</td>
    </tr>
  </tbody>
</table>

<div class="alert alert-warning">
  <h4>提示</h4>
  <p>不推荐直接操作 `plupload` 对象，一般情况下 `uploader` 对象方法可以实现绝大部分功能。</p>
</div>

<script src="dist/lib/uploader/zui.uploader.js"></script>
<link href="dist/lib/uploader/zui.uploader.css" rel="stylesheet">

<script>
function afterPageLoad() {
    $('.uploader:not(.uploader-custom)').uploader({
        chunk_size: '50kb',
        url: window.location.protocol + '//httpbin.org/post'
    });

    $('#uploaderStaticFilesExample').uploader({
        chunk_size: '50kb',
        url: window.location.protocol + '//httpbin.org/post',
        deleteActionOnDone: function(file, doRemoveFile) {
            doRemoveFile();
        },
        staticFiles: [
            {name: 'zui.js', size: 216159, url: 'http://zui.sexy'},
            {name: 'zui.css', size: 106091}
        ]
    });
}
</script>

