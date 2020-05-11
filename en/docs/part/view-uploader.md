# Uploader

File uploader view provides file list management and file bulk upload function, which allow drag-and-drop(HTML5 s required) to upload an file. Large file is uploaded in fragments. HTML5 is the first choice to upload files. Old browser use Flash and Silverlight to be compatible. It is also available for Javascript SDK. The plugin is based on <a href="http://www.plupload.com/" target="_blank">plupload</a>.

<div class="alert alert-warning">
  <h4>Compatibility</h4>
  <p>File uploader view is not supported in IE 9 and below.</p>
</div>

## Examples

Click “Select afile” Button of the example below or drag and drop files to the specified area. Click “Start uplad” Button to bulk upload files to the serve.

<div class="alert alert-primary">
  <h4>Tips</h4>
  <p>When testing file uploader on this page, your file will be uploaded to the server（<a target="_blank" class="alert-link text-hostname" href="http://httpbin.org/post"><strong>http://httpbin.org/</strong></a>）, but it is not saved on the server. You can test it worry-free.</p>
</div>


### Common file list

<div class="example">
  <div id="uploaderExample" class="uploader" data-auto-upload="true">
    <div class="uploader-files file-list" data-drag-placeholder="Please drag and drop files here"></div>
    <button type="button" class="btn btn-primary uploader-btn-browse"><i class="icon icon-cloud-upload"></i> Select a file</button>
  </div>
</div>

```html
<div id="uploaderExample" class="uploader">
  <div class="file-list" data-drag-placeholder="Please drag and drop files here"></div>
  <button type="button" class="btn btn-primary uploader-btn-browse"><i class="icon icon-cloud-upload"></i> Select a file</button>
</div>
```

```js
$('#uploaderExample').uploader({
    autoUpload: true,            // Upload immediately after selecting a file
    url: 'your/file/upload/url'  // File uploaded URL
});
```

### Large file list

<div class="example">
  <div id='uploaderExample2' class="uploader">
    <div class="uploader-message text-center">
      <div class="content"></div>
      <button type="button" class="close">×</button>
    </div>
    <div class="uploader-files file-list file-list-lg" data-drag-placeholder="Please drag and drop files here"></div>
    <div class="uploader-actions">
      <div class="uploader-status pull-right text-muted"></div>
      <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> Select a file</button>
      <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> Start upload</button>
    </div>
  </div>
</div>

```html
<div id='uploaderExample2' class="uploader" data-ride="uploader" data-url="your/file/upload/url">
  <div class="uploader-message text-center">
    <div class="content"></div>
    <button type="button" class="close">×</button>
  </div>
  <div class="uploader-files file-list file-list-lg" data-drag-placeholder="Please drag and drop files here"></div>
  <div class="uploader-actions">
    <div class="uploader-status pull-right text-muted"></div>
    <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> Select a file</button>
    <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> Start upload</button>
  </div>
</div>
```

### Grid view

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
      <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> Select a file</button>
      <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> Start upload</button>
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
    <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> Select a file</button>
    <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> Start upload</button>
  </div>
</div>
```

## Usage

### Introduce resources

File uploader is an independent component. You need to introduce lib/ resources from local or CDN:

```html
<link href="lib/uploader/zui.uploader.min.css" rel="stylesheet">
<script src="lib/uploader/zui.uploader.min.js"></script>
```

### Initialize uploader

method one，use `$().uploader()`：

```html
<div class="uploader" id="myUploader">
  ...
</div>
```

```js
var options = {
    // Initialize option
};
$('#myUploader').uploader(options);
```

Way two，use `[data-ride="uploader"]`：

```html
<div class="uploader" data-ride="uploader" data-auto-upload="true">
  ...
</div>
```

### Get uploader object

When initializing, use `$().data('zui.uploader')` to get `uploader`:

```js
var uploader = $('#myUploader').data('zui.uploader');
```

## Options

Allows an object parameter to be passed as an initialization option when initializing. The options available are as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 100px">Option</th>
      <th style="width: 130px">Name</th>
      <th style="width: 110px">Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`drop_element`</td>
      <td>The element that triggers drag-and-drop</td>
      <td>Default: `'self'`</td>
      <td>
        <p>All available values are as follows:</p>
        <ul>
          <li>`'self'`: Use uploader itself as trigger drag-and-drop;</li>
          <li>`'fileList'`: Use file list;</li>
          <li>jQuery Object;</li>
          <li>Use jQuery selector to specify the trigger element.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`browse_button`</td>
      <td>Trigger to open the dialog of Select File button</td>
      <td>Default: `'hidden'`</td>
      <td>
        <p>All available values are as follows:</p>
        <ul>
          <li>`null` or `'hidden'`: Button is not displayed, but '.uploader-btn-browse' class can still be used to mark the upload button;</li>
          <li>`'>.uploader-btn-browse'`: Search `.uploader-btn-browse` elements in `.uploader`;</li>
          <li>`'#uploaderBtn'`: Find elements with ID as `uploaderBtn`;</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`url`</td>
      <td>File upload URL</td>
      <td>Required</td>
      <td>URL that is processed on the server-side, and can be used as a full address or relative address to the current page.</td>
    </tr>
    <tr>
      <td>`qiniu`</td>
      <td>Qiniu SDK Configuration</td>
      <td>Optional</td>
      <td>
        <p>If you want to use Qiniu SDK to upload files, configure this option. Otherwise, leave it blank. See instructions about Qiniu file uploader below.</p>
      </td>
    </tr>
    <tr>
      <td>`filters`</td>
      <td>File filter</td>
      <td>Optional</td>
      <td>
        <p>Used to filter the file type, file size, etc. This option is an object which contains one or all of the following attributes:</p>
        <ul>
          <li>`mime_types`: Used to set the type of files allowed to be uploaded. The value is an array of objects. Every object contains `title` and `extensions`;</li>
          <li>`max_file_size`：Maximum file size allowed for upload，E.g `1024`，Unit is byte（b），Also available as a string，Contains values or units，E.g `128kb`；</li>
          <li>`prevent_duplicates`: Whether to allow duplicated files to be selected. The default is `true` which means not allowed. If both file names and sizes are the same, they are considered duplicated;</li>
        </ul>
        <p>A complete example of this option is as follows:</p>
        <pre><code>{
    // Only allow uploading of images or icons（.ico）
    mime_types: [
        {title: 'image', extensions: 'jpg,gif,png'},
        {title: 'icon', extensions: 'ico'}
    ],
    // The maximum file size is 1MB
    max_file_size: '1mb',
    // Uploading duplicated files is not allowed
    prevent_duplicates: true
}</code></pre>
      </td>
    </tr>
    <tr>
      <td>`fileList`</td>
      <td>File list container element</td>
      <td>Default: `''`</td>
      <td>
        <p>Optional values include:</p>
        <ul>
          <li>`'large'`: Use large file list;</li>
          <li>`'grid'`: Use grid file list;</li>
          <li>`'>.file-list'`: Search `.file-list` class element in `.uploader` as a file list container;</li>
          <li>`'#myFileList'`: Search the element with an ID as `myFileList` as a file list container;</li>
          <li>`<div class="uploader-files file-list"></div>`: Use specified HTML to create a file list container element.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`fileTemplate`</td>
      <td>File display element template</td>
      <td>Default: `''`</td>
      <td>Use default template when set as null `<div class="file"><div class="file-progress-bar"></div><div class="file-wrapper"><div class="file-icon"><i class="icon icon-file-o"></i></div><div class="content"><div class="file-name"></div><div class="file-size small text-muted">0KB</div></div><div class="actions"><div class="file-status" data-toggle="tooltip"><i class="icon"></i> <span class="text"></span></div><a data-toggle="tooltip" class="btn btn-link btn-download-file" target="_blank"><i class="icon icon-download-alt"></i></a><button type="button" data-toggle="tooltip" class="btn btn-link btn-reset-file" title="Repeat"><i class="icon icon-repeat"></i></button><button type="button" data-toggle="tooltip" class="btn btn-link btn-rename-file" title="Rename"><i class="icon icon-pencil"></i></button><button type="button" data-toggle="tooltip" title="Remove" class="btn btn-link btn-delete-file"><i class="icon icon-trash text-danger"></i></button></div></div></div>`</td>
    </tr>
    <tr>
      <td>`fileFormater`</td>
      <td>File display element formatting function</td>
      <td>Function. Optional.</td>
      <td>
        <p>`function($file, file, status){}`</p>
        <p>The meaning of each parameter is as follows:</p>
        <ul>
          <li>`$file`: The element currently used to display the contents of the file(jQuery Object);</li>
          <li>`file`: File object currently used for display;</li>
          <li>`status`: Current file status;</li>
        </ul>
        <p>If you do not specify this option, default formatting function is used.</p>
      </td>
    </tr>
    <tr>
      <td>`fileIconCreator`</td>
      <td>File icon generator function</td>
      <td>Function. Optional.</td>
      <td>
        <p>`function(fileType, file, uploader){}`</p>
        <p>The meaning of each parameter is as follows:</p>
        <ul>
          <li>`fileType`: File type, e.g. `'image/gif'`;</li>
          <li>`file`: File object;</li>
          <li>`uploader`: Uploader Object;</li>
        </ul>
        <p>Return the file HTML content used to display the icon in this function. If you do not specify this option, the default icon generator function is used.</p>
      </td>
    </tr>
    <tr>
      <td>`staticFiles`</td>
      <td>Initial static file object array</td>
      <td>Array of objects</td>
      <td>
        <p>In this option, set the file upload control to initialize the static file entries displayed in the file list. The object array of the object array is as follows:</p>
        <pre><code>{
    id,              // Fileid
    name,            // File name, e.g. "myfile.gif"
    type,            // File type, e.g. "image/jpeg"
    size,            // File size, in byte. When client compression is enabled, this value may change.
    origSize,        // Original size of the file in byte
    lastModifiedDate // Last modified time of the file
}</code></pre>
      </td>
    </tr>
    <tr>
      <td>`rename`</td>
      <td>Whether to support file renaming</td>
      <td>Default: `true`</td>
      <td></td>
    </tr>
    <tr>
      <td>`renameExtension`</td>
      <td>Whether to allow file extensions to be renamed</td>
      <td>Default: `false`</td>
      <td></td>
    </tr>
    <tr>
      <td>`renameByClick`</td>
      <td>Whether rename the file name by clicking is enabled.</td>
      <td>Default: `true`</td>
      <td></td>
    </tr>
    <tr>
      <td>`autoUpload`</td>
      <td>Whether automatic file uploading is enabled.</td>
      <td>Default: `false`</td>
      <td></td>
    </tr>
    <tr>
      <td>`browseByClickList`</td>
      <td>Whether clicking on the file list to upload files is enabled.</td>
      <td>Default: `false`</td>
      <td>If set as `true`, click the file list to trigger the event of opening file selection dialog. Some events on the file entry may be ignored.</td>
    </tr>
    <tr>
      <td>`dropPlaceholder`</td>
      <td>Prompt text when drag-and-drop</td>
      <td>Default:`true`</td>
      <td>Set a string to specify the prompt text for drag-and-drop. If set as `true`, the default prompt text is displayed.</td>
    </tr>
    <tr>
      <td>`previewImageIcon`</td>
      <td>Use image preview as an icon</td>
      <td>Default: `true`</td>
      <td>If set as `true`, use a preview of the image instead of the file icon if the file type is image.</td>
    </tr>
    <tr>
      <td>`sendFileName`</td>
      <td>Send file name</td>
      <td>Default: `true`</td>
      <td>
        <p>The optional values are as follows:</p>
        <ul>
          <li>`true`: Use form `'name'` to send file name;</li>
          <li>`false`: Do not send file name;</li>
          <li>Specify a string as the form field name to send the file name.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`sendFileId`</td>
      <td>Send File ID</td>
      <td>The default is `true`</td>
      <td>
        <p>The optional values are as follows:</p>
        <ul>
          <li>`true`: Use form `'name'` to send file ID;</li>
          <li>`false`: Do not send files ID;</li>
          <li>Specify a string as a form field ID to send the file name.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`responseHandler`</td>
      <td>Server response processing</td>
      <td>`true`(default) or a function</td>
      <td>
        <p>When set as `true`, use the default server response handler(parse Json object and judge the upload result);</p>
        <p>When set as a callback function, `function(responseObject, file){}` parameters are defined as follows:</p>
        <ul>
          <li>`responseObject`: Server response data object;</li>
          <li>`file`: Currently uploaded file object.</li>
        </ul>
        <p>Any text content returned within this function will be taken as the error message and as failed uploading.</p>
      </td>
    </tr>
    <tr>
      <td>`limitFilesCount`</td>
      <td>Limit the number of file uploads</td>
      <td>`false`（default）Or number</td>
      <td></td>
    </tr>
    <tr>
      <td>`deleteConfirm`</td>
      <td>Remove the file for confirmation</td>
      <td>`false` (default) or a string</td>
      <td>
        <p>The optional values are as follows:</p>
        <ul>
          <li>`false`: No confirm;</li>
          <li>`true`: Confirm;</li>
          <li>Use a string as a message to confirm.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`autoResetFails`</td>
      <td>Whether to automatically reset files that failed to upload</td>
      <td>`false`(default)</td>
      <td>
        <p>The optional values are as follows:</p>
        <ul>
          <li>`false`: Files that failed to upload are not reset;</li>
          <li>`true`: Files that failed to upload are not reset;</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`removeUploaded`</td>
      <td>Remove uploaded files</td>
      <td>`false`(default) or `true`</td>
      <td></td>
    </tr>
    <tr>
      <td>`statusCreator`</td>
      <td>Status creator</td>
      <td>Function. Optional.</td>
      <td>
        <p>`function(total, state, uploader){}`</p>
        <p>The meaning of each parameter is as follows:</p>
        <ul>
          <li>`total`: Current file queue progress object;</li>
          <li>`state`: Current file queue status;</li>
          <li>`uploader`: current uploader object;</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`previewImageSize`</td>
      <td>Preview size of images</td>
      <td>`{width, height}`</td>
      <td>Default: `{width: 200, height: 200}`</td>
    </tr>
    <tr>
      <td>`uploadedMessage`</td>
      <td>Display successfully upload  message</td>
      <td>Default: `true`</td>
      <td>
        <p>All available values are as follows:</p>
        <ul>
          <li>`true`: Use the default prompt message;</li>
          <li>`false`: Do not display a prompt message;</li>
          <li>Specify a string to format the prompt message, e.g. `uploaded {uploaded} files, {failed} files failed to upload;</li>
         <li>Specify a function to return a formatted prompt message. The function is defined as `function(result){}`. Its `result` parameter is `{uploaded, failed}` which contains the number of successful uploads and the number of failures.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`deleteActionOnDone`</td>
      <td>Whether the deletion of uploaded files is enabled.</td>
      <td>Default: `false`</td>
      <td>
        <p>All available values are as follows:</p>
        <ul>
          <li>`false`: It is not allowed to delete uploaded files from the file list;</li>
          <li>
            <p>Specify a function to decide whether to delete a file. The function is defined as `function(file, doRemoveFile){}`. Return `true` in this function to confirm the deletion of the file. The function parameters are defined as follows:</p>
            <ul>
              <li>`file`: The file to be deleted;</li>
              <li>`doRemoveFile`: A callback function object. Call this function and it will delete it directly.</li>
            </ul>
            <p>If you want to delete a file after the file is uploaded, delete the file on the server first. You can use this callback function to make a request to the server, then remove it from the file list in the file upload view.</p>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`renameActionOnDone`</td>
      <td>Whether to allow renaming of uploaded files</td>
      <td>Default: `false`</td>
      <td>
        <p>All available values are as follows:</p>
        <ul>
          <li>`false`: Renaming uploaded file is not allowed;</li>
          <li>
            <p>Specify a function to decide whether to rename the file. The function is defined as `function(file, filename, doRenameFile){}`. Return `true` in this function to confirm the renamed file. The function parameters are defined as follows:</p>
            <ul>
              <li>`file`: The file object to be renamed;</li>
              <li>`filename`: New file name;</li>
              <li>`doRenameFile`: A callback function object. Calling this function will rename it directly.</li>
            </ul>
            <p>If you want to rename a file after the file is uploaded, you need to rename the file on the server first. You can use this callback function to make a request to the server, then change the file name in the file list.</p>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`headers`</td>
      <td>Custom header information</td>
      <td>Default: `{}`</td>
      <td>Define the header information uploaded to the server using the attributes and values in an object as key-value pairs. Upload method in HTML 4 does not support custom header information.</td>
    </tr>
    <tr>
      <td>`multipart`</td>
      <td>Use `multipart/form-data`</td>
      <td>Default: `true`</td>
      <td>If `true`, upload the file as `multipart/form-data` to the server. If `false`, use binary form to upload files. Uploading a file in binary form may be problematic, so `multipart/form-data` form is recommended.</td>
    </tr>
    <tr>
      <td>`multipart_params`</td>
      <td>Additional parameters of multipart</td>
      <td>Function or object. Default: `{}`</td>
      <td>
        <p>Parameters attached to the request when the form is submitted. If it is a php sever, use `$_POST` to get these parameters, e.g.:</p>
        <pre><code>{
    foo: 'foo',
    bar: ['bar1', 'bar2'],
    test: {
        attr1: 'attr1 value'
    }
}</code></pre>
        <p>It is called before the file is submitted when set as a callback function. The returned value is used as an additional parameter to be submitted to the server. The callback function contains a parameter which is the file oject submitted.</p>
        <pre><code>function(file, params) {
    return {filename: file.name, extension: file.ext};
}</code></pre>
        <p>The callback function parameters are defined as follows:</p>
        <ul>
          <li><code>file</code>: The file object ready to be uploaded;</li>
          <li><code>params</code>: Default parameter object. You can modify this object and return it as a new parameter object.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`max_retries`</td>
      <td>Maximum number of attempts</td>
      <td>Default: `3`</td>
      <td>Maximum number of attempts failed to upload. If `0`, do not try again.</td>
    </tr>
    <tr>
      <td>`chunk_size`</td>
      <td>Chunk upload size</td>
      <td>Default: `1mb`</td>
      <td>If this value is a number, the default unit is byte. If `0`, chunk upload is not enabled.</td>
    </tr>
    <tr>
      <td>`resize`</td>
      <td>Image resize settings</td>
      <td>Default: `{}`</td>
      <td>
        <p>Use an object to set if the image is modified before uploaded. The object contains one or all of the following attributes:</p>
        <ul>
          <li>`width`: Image compressed width. If you do not specify this property, the original width of the image is used;</li>
          <li>`height`: The height of the image after compression. If you do not specify this property, the original height of the image is used;</li>
          <li>`crop`: Whether to crop the image；</li>
          <li>`quality`: Image compression quality with value `0~100`. The larger the value is, the higher quality the image is. The smaller the compression ratio is, the larger the file size is. The default is `90`, and only `.jpg` is valid;</li>
          <li>`preserve_headers`: Whether to retain the metadata of the image. If the default is `true`, it is reserved. If `false`, not reserved.</li>
        </ul>
        <p>A complete example of this option is as follows:</p>
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
      <td>Whether multiple files are allowed to be selected</td>
      <td>Default: `true`</td>
    </tr>
    <tr>
      <td>`unique_names`</td>
      <td>Assign a unique file name to the file</td>
      <td>Default: `false`</td>
      <td>If `true`, generate a unique filename for each file uploaded and submit it to the server as an additional parameter.</td>
    </tr>
    <tr>
      <td>`runtimes`</td>
      <td>File upload method</td>
      <td>Default: `html5,flash,silverlight,html4`</td>
      <td>This parameter is automatically configured by default based on browsers.</td>
    </tr>
    <tr>
      <td>`file_data_name`</td>
      <td>The name of the file field in the form</td>
      <td>Default: `'file'`</td>
      <td>If `'file'`, use `$_FILES['file']` on the server to get uploaded file information.</td>
    </tr>
    <tr>
      <td>`flash_swf_url`</td>
      <td>Uploaded component address of Flash</td>
      <td>Default: `lib/uploader/Moxie.swf`</td>
      <td>Please ensure that this file can be accessed from this address on the file upload page.</td>
    </tr>
    <tr>
      <td>`silverlight_xap_url`</td>
      <td>Uploaded component address of Silverlight</td>
      <td>Default: `lib/uploader/Moxie.xap`</td>
      <td>Please ensure that this file can be accessed from this address on the file upload page.</td>
    </tr>
    <tr>
      <td>`lang`</td>
      <td>Language on the interface</td>
      <td>Default: `''`</td>
      <td>
        <p>Set to null by default and will get language settings from `<html lang="">` of the browser. You can also manually set it as the following options:</p>
        <ul>
          <li>`'zh_cn'`: Simplified Chinese;</li>
          <li>`'zh_tw'`: Traditional Chinese;</li>
          <li>`'en'`': English;</li>
          <li>`{...}`: Use an object to customize the language. Custom language objects should refer to built-in language objects `$.zui.Uploader.LANG`.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Objects and properties

### File queue and file status

`$.zui.Uploader.STATUS` object provides preset properties to represent the status of the file queue and file.

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Status</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`STOPPED`</td>
      <td>`1`</td>
      <td>File queue has not started uploading yet, or the uploading has been paused or been completed.</td>
    </tr>
    <tr>
      <td>`STARTED`</td>
      <td>`2`</td>
      <td>File queue is being uploaded.</td>
    </tr>
    <tr>
      <td>`QUEUED`</td>
      <td>`1`</td>
      <td>The file has been added to the queue for uploading.</td>
    </tr>
    <tr>
      <td>`UPLOADING`</td>
      <td>`2`</td>
      <td>File is being uploaded.</td>
    </tr>
    <tr>
      <td>`FAILED`</td>
      <td>`4`</td>
      <td>File uploading failed.</td>
    </tr>
    <tr>
      <td>`DONE`</td>
      <td>`5`</td>
      <td>The file has been uploaded to the server.</td>
    </tr>
  </tbody>
</table>

### File object properties and methods

File object information is given in many callback functions.

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Attributes/Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>File ID</td>
    </tr>
    <tr>
      <td>`name`</td>
      <td>File name, e.g. `'myFile.jpg'`</td>
    </tr>
    <tr>
      <td>`type`</td>
      <td>File type, e.g. `'image/jpeg'`</td>
    </tr>
    <tr>
      <td>`ext`</td>
      <td>File extension, e.g. `'.gif'`</td>
    </tr>
    <tr>
      <td>`isImage`</td>
      <td>Whether the file is an image</td>
    </tr>
    <tr>
      <td>`previewImage`</td>
      <td>Preview image address</td>
    </tr>
    <tr>
      <td>`size`</td>
      <td>File size. Its unit is byte(b).</td>
    </tr>
    <tr>
      <td>`origSize`</td>
      <td>Original size of the file. Its unit is byte(b).</td>
    </tr>
    <tr>
      <td>`loaded`</td>
      <td>The size of the file uploaded. Its unit is byte(b).</td>
    </tr>
    <tr>
      <td>`percent`</td>
      <td>The percentage of the file uploaded, e.g. `50` means that 60% of the file has been uploaded.</td>
    </tr>
    <tr>
      <td>`status`</td>
      <td>File status. It is an attribute value of `$.zui.Uploader.STATUS`.</td>
    </tr>
    <tr>
      <td>`lastModifiedDate`</td>
      <td>When the file was last modified</td>
    </tr>
    <tr>
      <td>`getNative()`</td>
      <td>Get native file objects</td>
    </tr>
    <tr>
      <td>`destroy()`</td>
      <td>Destroy file object</td>
    </tr>
  </tbody>
</table>

There is no guarantee that all of the above attributes will be included in the file object at any time.

### Progress information of file upload queue

File upload queue progress information is an object, containsing the following attributes:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Attribute</th>
      <td>Description</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`size`</td>
      <td>The total size of all files in the upload queue. Its unit is byte(b).</td>
    </tr>
    <tr>
      <td>`loaded`</td>
      <td>The total size of uploaded files in the upload queue. Its unit is byte(b).</td>
    </tr>
    <tr>
      <td>`uploaded`</td>
      <td>Number of uploaded files in the upload queue</td>
    </tr>
    <tr>
      <td>`failed`</td>
      <td>Number of files failed to be uploaded in the upload queue</td>
    </tr>
    <tr>
      <td>`queued`</td>
      <td>Number of files waiting to be uploaded or being uploaded in the upload queue</td>
    </tr>
    <tr>
      <td>`percent`</td>
      <td>The percentage of the files in the upload queue that has been uploaded. Its range is `0~100`. If `50`, it means that `50%` of the files has been uploaded.</td>
    </tr>
    <tr>
      <td>`bytesPerSec`</td>
      <td>Upload speed. Its unit is byte/second, which is `b/s`.</td>
    </tr>
  </tbody>
</table>

### Error code properties

These properties are in `$.zui.Uploader.ERRORS` object.

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Attribute</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`GENERIC_ERROR`</td>
      <td>`-100`</td>
      <td>General error</td>
    </tr>
    <tr>
      <td>`HTTP_ERROR`</td>
      <td>`-200`</td>
      <td>HTTP Network Error</td>
    </tr>
    <tr>
      <td>`IO_ERROR`</td>
      <td>`-300`</td>
      <td>File read and write error. For example, the selected file cannot be read.</td>
    </tr>
    <tr>
      <td>`SECURITY_ERROR`</td>
      <td>`-400`</td>
      <td>Security error</td>
    </tr>
    <tr>
      <td>`INIT_ERROR`</td>
      <td>`-500`</td>
      <td>An error occurred during initialization.</td>
    </tr>
    <tr>
      <td>`FILE_SIZE_ERROR`</td>
      <td>`-600`</td>
      <td>File size does not meet the requirements.</td>
    </tr>
    <tr>
      <td>`FILE_EXTENSION_ERROR`</td>
      <td>`-601`</td>
      <td>File type does not meet the requirements.</td>
    </tr>
    <tr>
      <td>`FILE_DUPLICATE_ERROR`</td>
      <td>`-602`</td>
      <td>Duplicate file selected</td>
    </tr>
    <tr>
      <td>`IMAGE_FORMAT_ERROR`</td>
      <td>`-700`</td>
      <td>Image format error</td>
    </tr>
    <tr>
      <td>`IMAGE_MEMORY_ERROR`</td>
      <td>`-701`</td>
      <td>Memory error</td>
    </tr>
    <tr>
      <td>`IMAGE_DIMENSIONS_ERROR`</td>
      <td>`-702`</td>
      <td>Image file size is beyond the range that can be processed.</td>
    </tr>
  </tbody>
</table>

## Methods

Instance of upload has the following methods:

### <span class="code text-danger">showMessage(message, type, time)</span>

Display a message on the file uploading area. The method parameters are defined as follows:

* `message`: Message text to display;
* `type`: Message type. Its values include `'danger'`(Danger message, default), `'warning'`(caveat), `'info'`(general),`'success'`(success message).

To enable the display of message, you must provide `.uploader-message` element in `.upload`.

```html
<div class="uploader">
  <div class="uploader-message text-center">
    <div class="content"></div>
    <button type="button" class="close">×</button>
  </div>
</div>
```

### <span class="code text-danger">hideMessage()</span>

Hide messages on the interface.

### <span class="code text-danger">start()</span>

Start uploading files in the queue.

### <span class="code text-danger">stop()</span>

Stop uploading files in the queue.

### <span class="code text-danger">getState()</span>

Get the code of upload queue status. Status code is the attribute value of `$.zui.Uploader.STATUS`. Possible values include `$.zui.Uploader.STATUS.STARTED` and `$.zui.Uploader.STATUS.STOPPED`.

### <span class="code text-danger">isStarted()</span>

Check if the files in the queue are being uploaded. If `true`, it means that uploading has started. If`false`, it means that the file is not being uploaded.

### <span class="code text-danger">isStopped()</span>

Check if the files in the queue have been stopped uploading. If `true`, it means that the upload has not started yet, or the upload has been paused or completed. If`false`, it means that the file is being uploaded.

### <span class="code text-danger">getFiles()</span>

Get the files in the upload queue. Returns the result as an array of file objects.

### <span class="code text-danger">getTotal()</span>

Get file upload queue progress information. See [Objects and properties →Progress information of file upload queue P]。

### <span class="code text-danger">disableBrowse(disable)</span>

Set the disabled state of the Select File button. The parameters are defined as follows:

* `disable`: If `true`, set the Select File button as disabled. If `false`, cancel the disabled state of the Select File button.

### <span class="code text-danger">getFile(id)</span>

Get the file object via the file ID. The parameters are defined as follows:

* `id`: Unique ID of the file object.

### <span class="code text-danger">showFile(file)</span>

Display files on file list. If there is a file with the same ID on the file list, update it. Otherwise, add a new item to the file list. The parameters are defined as follows:

* `file`: File object to be displayed, or as an array of multiple file objects to be displayed.

### <span class="code text-danger">removeFile(file)</span>

Remove files from the file queue. The parameters are defined as follows:

* `file`: File object to be removed.

### <span class="code text-danger">destroy()</span>

Destroy `uploader` instance.

### <span class="code text-danger">showStatus()</span>

Refresh upload status. `.uploader-message` element is required.

### Call method

Start the upload method by calling `start()`. For example:

```js
// 1. Obtain uploader instance object
var uploader = $('#myUploader').data('zui.uploader');

// 2. Transfer start method
uploader.start();
```

## Events

### <span class="code text-danger">onInit</span>

Triggered when initialization is complete. The callback function is:

* `function()`

### <span class="code text-danger">onFilesAdded</span>

Triggered when a file is added to the upload queue. The callback function is:

* `function(files)`

The callback function parameters are defined as follows:

* `files`: An array of file objects added to the upload queue.

### <span class="code text-danger">onUploadProgress</span>

Triggered when the file upload progress changes. This callback function will be triggered repeatedly during file loading. The callback function is:

* `function(file)`

The callback function parameters are defined as follows:

* `file`: File object, the upload progress of which has changed.

### <span class="code text-danger">onFileUploaded</span>

Triggered when a file in the queue is uploaded. The callback function is:

* `function(file, responseObject)`

The callback function parameters are defined as follows：

* `file`: File object, the upload progress of which has changed;
* `responseObject`: Information object returned by the server, and contains the following attributes:
  - `response`: Text information returned by the server;
  - `responseHeaders`: Header information returned by the server;
  - `status`: HTTP status code, e.g. `200`.

### <span class="code text-danger">onUploadComplete</span>

Triggered when all files in the queue have been uploaded. The callback function is:

* `function(files)`

The callback function parameters are defined as follows:

* `files`: File object array that are uploaded.

### <span class="code text-danger">onFilesRemoved</span>

Triggered when the file is removed from the upload queue. The callback function is:

* `function(files)`

The callback function parameters are defined as follows:

* `files`: Array of file objects removed.

### <span class="code text-danger">onChunkUploaded</span>

Chunk upload option is enabled, then it is triggered when each file fragment is uploaded. The callback function is:

* `function(file, responseObject)`

The callback function parameters are defined as follows:

* `file`: File object, the upload progress of which has changed;
* `responseObject`: Information object returned by the server, and contains the following properties:
  - `offset`: The offset of the file fragment being uploaded in the total file size;
  - `response`: Text information returned by the server;
  - `responseHeaders`: Header information returned by the server:;
  - `status`: HTTP status code, e.g. `200`;
  - `total`: The total size of the file, and its unit is byte(b).

### <span class="code text-danger">onUploadFile</span>

Triggered when a file in the queue starts uploading. The callback function is:

* `function(file)`

The callback function parameters are defined as follows:

* `file`: File object that starts uploading.

### <span class="code text-danger">onBeforeUpload</span>

Triggered before a file in the queue starts uploading. The callback function is:

* `function(file)`

The callback function parameters are defined as follows:

* `file`: File object that starts uploading.

### <span class="code text-danger">onStateChanged</span>

Triggered when the file queue status changes. The callback function is:

* `function(state)`

The callback function parameters are defined as follows:

* `state`: File queue status and its values include `$.zui.Uploader.STATUS.STARTED` and `$.zui.Uploader.STATUS.STOPPED`.

### <span class="code text-danger">onQueueChanged</span>

Triggered when the file upload queue changes. The callback function is:

* `function()`

### <span class="code text-danger">onError</span>

Triggered when an error occurs. The callback function is:

* `function(error)`

The callback function parameters are defined as follows:

* `error`: Error message object, and contains the following properties:
  - `code`：Error code. Refer to error code attribute description;
  - `message`: Error message text;
  - `file`: Error related file object.

### Binding events

Method 1: Use jQuery `$().on(event, callback)`:

```js
$('#myUploader').uploader().on('onUploadFile', function(file) {
    console.log('Uploaded.', file);
});
```

Method 2: Bind as an option at initialization:

```js
$('#myUploader').uploader({
    url: '...',
    // ...,
    onUploadFile: function(file) {
       console.log('Uploaded.', file);
    }
});
```

### Access uploader objects in the event

`this` variables of all event callback functions are current `uploader` instance object.

## Static file

Used `staticFiles` option to specify an array of file objects when initializing pairs, which display the existing file in the file list on the server.

<div class="example">
  <div id="uploaderStaticFilesExample" class="uploader file-drag-area uploader-rename uploader-custom" data-drop-placeholder="Drag and drop files to here。">
    <div class="uploader-message text-center">
      <div class="content"></div>
      <button type="button" class="close">×</button>
    </div>
    <div class="uploader-files file-list file-list-lg file-rename-by-click" data-drag-placeholder="Please drag and drop files here"></div>
    <div class="uploader-actions">
      <div class="uploader-status pull-right text-muted"></div>
      <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> Select File</button>
      <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> Start upload</button>
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
          {name: 'zui.js', size: 216159, url: 'http://openzui.com'},
          {name: 'zui.css', size: 106091}
      ]
  });
```

## Customize UI

File upload view provides customization mechanism. You can customize the UI for your own file uploader.

### HTML structure

Some specific classes are defined in the file upload view to make your UI takes effect. Usually the HTML Structure of the file upload view is as follows:

```html
<div class="uploader">
  <div class="uploader-message">
    <div class="content"></div>
    <button type="button" class="close">×</button>
  </div>
  <div class="uploader-files file-list" data-drag-placeholder="Please drag and drop files here"></div>
  <div class="uploader-actions">
    <div class="uploader-status pull-right text-muted"></div>
    <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> Select File</button>
    <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> Start upload</button>
  </div>
</div>
```

Special class description:

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 160px">Special class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`.uploader`</td>
      <td>Top container for file uploaded. You can use `[data-*=*]` on this element to set initialization options and `[data-ride="uploader"]` to enable automatic initialization when file loading is completed.</td>
    </tr>
    <tr>
      <td>`.uploader-files`</td>
      <td>
        <p>File list. You can also use one of the following classes below:</p>
        <ul>
          <li>`.file-list`: Use the default file list appearance;</li>
          <li>`.file-list.file-list-lg`: Use a large file list appearance;</li>
          <li>`.file-list.file-list-grid`: Use grid file list appearance.</li>
        </ul>
        <p>Use `[data-drag-placeholder=""]` to set the default prompt text for the file upload list.</p>
      </td>
    </tr>
    <tr>
      <td>`.uploader-message`</td>
      <td>
        <p>Used to display messages in the interaction process in this element. You can also place a `.close` in `.uploader-message` to specify a button to close this message and use `.content` to specify the elements of the message text to be displayed. A complete example is as follows:</p>
        <pre><code>&lt;div class=&quot;uploader-message&quot;&gt;
  &lt;div class=&quot;content&quot;&gt;&lt;/div&gt;
  &lt;button type=&quot;button&quot; class=&quot;close&quot;&gt;&times;&lt;/button&gt;
&lt;/div&gt;</code></pre>
      </td>
    </tr>
    <tr>
      <td>`.uploader-actions`</td>
      <td>Button for placing file upload actions.</td>
    </tr>
    <tr>
      <td>`.uploader-btn-browse`</td>
      <td>Usually used to mark a button. Click this button to open the file dialog.</td>
    </tr>
    <tr>
      <td>`.uploader-btn-start`</td>
      <td>Usually used to mark a button. Click this button to start (or recover) uploading files from the file queue to the server.</td>
    </tr>
    <tr>
      <td>`.uploader-btn-stop`</td>
      <td>Usually used to mark a button. Click this button to pause the uploading files from the file queue to the server.</td>
    </tr>
    <tr>
      <td>`.uploader-status`</td>
      <td>Used to display file upload status information in this element, including file upload progress, real-time speed or number of files, etc.</td>
    </tr>
  </tbody>
</table>

### Custom file element template

The file element template determines how a file is displayed on the file list. The default template is:

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

There are two ways to set file element templates. One is o use the initialization option `fileTemplate`:

```js
$('#myUploader').uploader({
    url: '...',
    // ...
    fileTemplate: "..." // Set file template string
});
```

The other is to use `.template` in `.uploader-files` to mark an element as a file template:

```html
<div id='uploaderExample2' class="uploader" data-ride="uploader" data-url="your/file/upload/url" data-auto-upload="true">
  <div class="uploader-files file-list" data-drag-placeholder="Please drag and drop files here">
    <div class="file template">
      <!-- File template element internal content -->
    </div>
  </div>
</div>
```

Special classes that can be used in the file element template as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`.file`</td>
      <td>File element container class</td>
    </tr>
    <tr>
      <td>`.file-progress-bar`</td>
      <td>File upload progress bar</td>
    </tr>
    <tr>
      <td>`.file-icon`</td>
      <td>Used to display file icons</td>
    </tr>
    <tr>
      <td>`.file-name`</td>
      <td>Used to display the file name</td>
    </tr>
    <tr>
      <td>`.file-size`</td>
      <td>Used to display file size</td>
    </tr>
    <tr>
      <td>`.file-status`</td>
      <td>Used to display file status information</td>
    </tr>
    <tr>
      <td>`.btn-download-file`</td>
      <td>User clicks on this element to trigger a file downloading</td>
    </tr>
    <tr>
      <td>`.btn-reset-file`</td>
      <td>User clicks on this element to trigger a re-uploading</td>
    </tr>
    <tr>
      <td>`.btn-rename-file`</td>
      <td>User clicks on this element to trigger a file renaming</td>
    </tr>
    <tr>
      <td>`.btn-delete-file`</td>
      <td>User clicks on this element to trigger a file removal</td>
    </tr>
  </tbody>
</table>

Special classes that is not defined (`.file` Except for classes) can also be used in the file template. Use initialization options `fileFormater` to specify a callback function to format file elements. The callback function is defined as:

* `function($file, file, status)`

The parameters are defined as follows:

* `$file`: The file element to be formatted;
* `file`: The file object;
* `status`: Current file status.

`this` variable of the callback function is the current `uploader` instance.

Simple callback function example:

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

### Custom file icons

Different file icons are displayed by default for different file types. You can also initialize it in `fileIconCreator` to specify a callback function to return the HTML source code of the icon. The callback function is defined as:

* `function(fileType, file, uploader)`

The callback function parameters are defined as follows:

* `fileType`: file type, e.g. `'image/jpeg'`;
* `file`: File object;
* `uploader`: uploader instance object.

Example:

```js
$('#myUploader').uploader({
    url: '...',
    // ...
    fileIconCreator: function(fileType, file, uploader) {
        if(fileType.indexOf('image') === 0) {
            // If the file is an image, return the image icon.
            return '<i class="icon icon-file-image"></i>';
        } else {
            // Handling other non-image files
        }
    }
})
```

### Custom example

Here is an example of using a table to display a list of files.

<example>
  <div id="tableUploader" class="uploader">
    <div class="uploader-message text-center">
      <div class="content"></div>
      <button type="button" class="close">×</button>
    </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th colspan="2">File name</th>
          <th style="width: 100px">Size</th>
          <th style="width: 160px; text-align: center;">Status/Action</th>
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
              <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> Select a document</button>
              <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> Start upload</button>
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
        <th colspan="2">File name</th>
        <th style="width: 100px">Size</th>
        <th style="width: 160px; text-align: center;">Status/Action</th>
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
            <button type="button" class="btn btn-link uploader-btn-browse"><i class="icon icon-plus"></i> Select File</button>
            <button type="button" class="btn btn-link uploader-btn-start"><i class="icon icon-cloud-upload"></i> Start upload</button>
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

## Processing server results

### Default processing

If the HTTP request status of the uploaded file on the server is `200`, it is considered as a successful uploading. Otherwise it is failed. If you need to return a more detailed error message, return JSON object string. Set the value of `result` or `status` in JSON as `'ok'`, `'success'`, or `200`, then it is considered as a successful file uploading. Otherwise it is considered as a failure.

If the file uploading fails, use `message` to return an error message to be displayed on the interface to remind the user. The following is a complete JSON object instance when the file uploading fails:

```js
{
    result: 'failed',               // File uploading failed
    message: 'File content contains illegal content'    // Message used to remind the user on the interface
}
```

When the file is uploaded successfully，use `id` Attribute to return the unique identifier of the file on the server，use `url` Property returns the download address of the file。The download button for the file is displayed on the file list when the download address is specified。The following is a complete when the file is uploaded successfully. JSON Object example：

```js
{
    result: 'ok',     // File upload succeeded
    id: 10001,        // The unique identifier of the file on the server
    url: 'http://example.com/file-10001.jpg'        // File download address
}
```

### Custom processing

In addition to directly returning the JSON object as predefined to judge the result of the upload, you can also pass initialization options `responseHandler` to set a callback function to customize the processing results.

The callback function is defined as:

* `function(responseObject, file)`

The parameter is defined as:

* `responseObject`: Information object returned by the server and contains the following attributes:
  - `response`: Text information returned by the server;
  - `responseHeaders`: Header information returned by the server;
  - `status`: HTTP status code, e.g. `200`.
* `file`: File object being uploaded.

`this` variable of the callback function points to the uploader instance. If any string returned in the callback function, it is considered as an uploading failure. The returned string will be displayed as an error message on the user interface.

```js
$('#myUploader').uploader({
    url: 'url/for/upload/file',
    // ...
    responseHandler: function(responseObject, file) {
        // If the text content returned by the server contains `'error'`, it is considered as failed uploading.
        if(responseObject.response.indexOf('error')) {
            return 'Uploading failed. The server returns an error: ' + responseObject.response;
        }
    }
});
```

## Qiniu JavaScript SDK

File uploader supports Qiniu Cloud Storage. When it detects that the page is loaded <a href="http://github.com/qiniu/js-sdk" target="_blank">Qiniu JavaScript SDK</a>, initialize the option `qiniu` API related information to upload files to Qiniu.

Initialization option `qiniu` is an object and it should contain the following properties:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`domain`</td>
      <td>**Required**, bucket domain name, and it is used when uploading and downloading resources, e.g. 'http://xxx.bkt.clouddn.com/'</td>
    </tr>
    <tr>
      <td>`uptoken`</td>
      <td>An upload token generated by other programs</td>
    </tr>
    <tr>
      <td>`uptoken_url`</td>
      <td>URL used in Ajax to request uptoken. **It is Highly recommended to set it.**( provided by the server side)</td>
    </tr>
    <tr>
      <td>`uptoken_func`</td>
      <td>Called when accessing uptoken.</td>
    </tr>
  </tbody>
</table>

You have to specifiy at least one of the three properties, `uptoken`, `uptoken_url`, or `uptoken_func`. The following is a complete Qiniu configuration object:

```js
{
    uptoken : 'u0nP4wf4t7V3-5gniRcZ3EdvScOLpZkokruvCB7V:apjkB76CaKkP2nNFwuoEvmxE9NU=:eyJzY29wZSI6ImNhdG91c2UiLCJkZWFkbGluZSI6MTQ4MTcyODAzMH0=',
    domain: 'http://7xjyuk.com1.z0.glb.clouddn.com'
}
```

For more details, please refer to <a href="https://developer.qiniu.com/kodo/sdk/javascript" target="_blank">Qiniu official documents</a>。

### Steps to use the Qiniu uploader

Step 1: Introduce Qiniu on the page [js-sdk](https://github.com/qiniu/js-sdk)：

```html
<!-- Before loading zui.js and uploader.js, introduce Qiniu js-sdk -->
<script src="https://cdn.staticfile.org/qiniu-js-sdk/1.0.14-beta/qiniu.min.js"></script>
```

Step 2: Specify `qiniu` configuration object in the initialization options:

```js
$('#myUploader').uploader({
    qiniu: {
        uptoken : '',
        domain: 'http://7xjyuk.com1.z0.glb.clouddn.com'
    }
});
```

After `qiniu` configuration is specified, you do not need to specify `url`.

<div class="example">
  <div class="input-group" style="margin-bottom: 10px; max-width: 400px">
    <span class="input-group-addon">Qiniu SDK token</span>
    <input id="qiniuToken" type="text" class="form-control" placeholder="Enter token to test it below" value="">
  </div>
  <div id="qiniuUploaderExample" class="uploader uploader-custom">
    <div class="uploader-files file-list" data-drag-placeholder="Please drag and drop files here. The file will be uploaded to Qiniu."></div>
    <button type="button" class="btn btn-primary uploader-btn-browse"><i class="icon icon-cloud-upload"></i> Select File</button>
    <button type="button" class="btn btn-primary uploader-btn-start"><i class="icon icon-cloud-upload"></i> Start uploading files to Qiniu</button>
  </div>
</div>

If you only need to test the Qiniu file upload function, use <a target="_blank" href="http://jsfiddle.net/gh/get/extjs/4.2/icattlecoder/jsfiddle/tree/master/uptoken">Upload Credentials Online Generation Tool</a>。

## Obtain plupload object

File upload view is based on <a href="http://www.plupload.com/" target="_blank">plupload</a>. You can get the original `plupload` object from `uploader`.

```js
// Obtain uploader object
var uploader = $('#myUploader').data('zui.uploader');
// Obtain plupload object
var plupload = uploader.plupload;
```

`plupload` properties and methods available on the object are as follows:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Property/Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`id`</td>
      <td>plupload ID. Unique value on the page.</td>
    </tr>
    <tr>
      <td>`state`</td>
      <td>Current upload queue status. Its values are `$.zui.Uploader.STATUS.STARTED` and `$.zui.Uploader.STATUS.STOPPED`.</td>
    </tr>
    <tr>
      <td>`runtime`</td>
      <td>Current upload method</td>
    </tr>
    <tr>
      <td>`files`</td>
      <td>Files in the current upload queue. Its value is an array containing all file objects.</td>
    </tr>
    <tr>
      <td>`settings`</td>
      <td>Current configuration option object</td>
    </tr>
    <tr>
      <td>`total`</td>
      <td>File upload queue progress information</td>
    </tr>
  </tbody>
</table>

<div class="alert alert-warning">
  <h4>Tips</h4>
  <p>It is not recommended to use `plupload` object directly. Under normal circumstances `uploader` object methods can implement most of the functions.</p>
</div>

<!-- in zui.js with uploader.js Introducing seven cattle before loading js-sdk -->
<script src="https://cdn.staticfile.org/qiniu-js-sdk/1.0.14-beta/qiniu.min.js"></script>
<script src="../dist/lib/uploader/zui.uploader.js"></script>
<link href="../dist/lib/uploader/zui.uploader.css" rel="stylesheet">

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
            {name: 'zui.js', size: 216159, url: 'http://openzui.com'},
            {name: 'zui.css', size: 106091}
        ]
    });

    $('#qiniuUploaderExample').uploader({
        qiniu: {
            uptoken : 'fake-qiniu-token',
            domain: 'http://7xjyuk.com1.z0.glb.clouddn.com'
        },
        multipart_params: function(file) {
            return {
                token: $('#qiniuToken').val()
            };
        }
    })
}
</script>
