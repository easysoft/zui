# 文件上传

文件上传视图提供文件列表管理和文件批量上传功能，允许拖拽（需要 HTML5 支持）来添加上传文件，支持大文件分片上传，优先使用 HTML5 文件上传功能，旧的浏览器自动使用 Flash 和 Silverlight 的方式兼容，还可用轻松搭配七牛云存储 Javascript SDK 使用。该插件基于 <a href="http://www.plupload.com/" target="_blank">plupload</a> 开发。

## 综合示例

在下面的例子中点击 “选择文件” 按钮或者拖拽文件到页面指示区域来选择文件，点击 “开始上传” 按钮来批量上传文件到服务器。

<div class="alert alert-primary">
  <h4>提示</h4>
  <p>在此页面内的测试文件上传时，你的文件会上传到服务器（<a target="_blank" class="alert-link text-hostname" href="http://httpbin.org/post"><strong>http://httpbin.org/</strong></a>），但不会在服务器保存你的文件，你可以放心进行测试。</p>
</div>


### 普通文件列表

<div class="example">
  <div id="uploaderExample" class="uploader" data-auto-upload="true">
    <div class="file-list" data-drag-placeholder="请拖拽文件到此处"></div>
    <button type="button" class="btn btn-primary uploader-btn-browse"><i class="icon icon-cloud-upload"></i> 选择文件</button>
  </div>
</div>

```html
<div id="uploaderExample" class="uploader">
  <div class="file-list" data-drag-placeholder="请拖拽文件到此处"></div>
  <button type="button" class="btn btn-primary uploader-btn-browse"><i class="icon icon-cloud-upload"></i> 选择文件</button>
</div>
```

```javascript
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
    <div class="file-list file-list-lg" data-drag-placeholder="请拖拽文件到此处"></div>
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
  <div class="file-list file-list-lg" data-drag-placeholder="请拖拽文件到此处"></div>
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
    <div class="file-list file-list-grid"></div>
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
  <div class="file-list file-list-grid"></div>
  <div>
    <hr class="divider">
    <div class="uploader-status pull-right text-muted"></div>
    <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> 选择文件</button>
    <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> 开始上传</button>
  </div>
</div>
```

## HTML 结构

你可以按自己需要定制自己的文件上传视图 UI，在文件上传视图中约定了一些特定的类来使得你的 UI 交互生效。通常情况下文件上传视图的 HTML 结构如下：

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
      <td>默认 `>.uploader-btn-browse`</td>
      <td>
        <p>所有可用的值如下：</p>
        <ul>
          <li>`null` 或 `'hidden'`：不显示按钮；</li>
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
          <li>`prevent_duplicates`：是否允许选取重复的文件，默认为 `false` 不允许，如果两个文件名和大小都相同则被认为是重复的文件；</li>
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
        <p>`function(uploader, $file, file, status){}`</p>
        <p>其中各参数含义如下：</p>
        <ul>
          <li>`uploader`：当前 uploader 对象；</li>
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
      <td>默认 `{}`</td>
      <td>
        <p>当提交表单时附加到请求中的参数，如果是 php 服务器端可用使用 `$_POST` 获取到这些参数。例如：</p>
        <pre><code>{
    foo: 'foo',
    bar: ['bar1', 'bar2'],
    test: {
        attr1: 'attr1 value'
    }
}</code></pre>
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
      <td>`$.zui.Uploader.STATUS.STOPPED`</td>
      <td>`1`</td>
      <td>文件队列还没有开始上传，或者上传已暂停或已上传完成。</td>
    </tr>
    <tr>
      <td>`$.zui.Uploader.STATUS.STARTED`</td>
      <td>`2`</td>
      <td>文件队列正在上传中。</td>
    </tr>
    <tr>
      <td>`$.zui.Uploader.STATUS.QUEUED`</td>
      <td>`1`</td>
      <td>文件已被添加到上传队列中等待上传。</td>
    </tr>
    <tr>
      <td>`$.zui.Uploader.STATUS.UPLOADING`</td>
      <td>`2`</td>
      <td>文件正在上传中。</td>
    </tr>
    <tr>
      <td>`$.zui.Uploader.STATUS.FAILED`</td>
      <td>`3`</td>
      <td>文件上传失败。</td>
    </tr>
    <tr>
      <td>`$.zui.Uploader.STATUS.DONE`</td>
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
      <td>说明</td>
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

并不保证任何适合都包含以上全部属性。

## 事件

## 使用

### 初始化 uploader

方式一：

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

方式二：

```html
<div class="uploader" data-ride="uploader" data-auto-upload="true">
  ...
</div>
```

### 获取 uploader 对象

当初始化之后你可以通过 `$().uploader('zui.uploader')` 获取 `uploader` 对象：

```js
var uploader = $('#myUploader').uploader('zui.uploader');
```

### 获取 plupload 对象

文件上传视图基于 <a href="http://www.plupload.com/" target="_blank">plupload</a> 开发，你仍然可以从 `uploader` 对象上获取到原始的 `plupload` 对象。

```js
// 获取 uploader 对象
var uploader = $('#myUploader').uploader('zui.uploader');
// 获取 plupload 对象
var plupload = uploader.plupload;
```

`plupload` 对象上可用的属性和方法如下：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>属性/方法</th>
      <td>说明</td>
    </tr>
  </thead>
</table>

## 自定义 UI

### 自定义模板

### 自定义文件图标

## 处理服务器结果

## 使用七牛 Javascript SDK



<script src="dist/lib/uploader/zui.uploader.js"></script>
<link href="dist/lib/uploader/zui.uploader.css" rel="stylesheet">

<script>
function afterPageLoad() {
    $('.uploader').uploader({
        chunk_size: '50kb',
        url: window.location.protocol + '//httpbin.org/post'
    });
}
</script>

