# 文件选择

## 界面模式

文件选择器支持多种界面模式，包括按钮模式、方框模式、网格模式和图片选择。

### 按钮模式

默认模式为按钮模式，点击按钮选择文件，所选择的文件会显示在按钮上方。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.FileSelector();
</script>
```

:::

### 方框模式

通过设置 `mode` 属性为 `'box'` 可以切换为方框模式，所选择的文件会显示在方框下方。方框模式提供了更大的拖放文件放置区域。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-mode="box"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.FileSelector({
    mode: 'box'
});
</script>
```

:::

### 网格模式

通过设置 `mode` 属性为 `'grid'` 可以切换为网格模式，所选择的文件会显示在网格中。网格模式提供了更大的文件预览区域。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-mode="grid"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.FileSelector({
    mode: 'grid'
});
</script>
```

:::

## 图片选择

图片选择是基于网格模式的一种预设模式，通过 `ImageSelector` 可以快速创建一个图片选择器。

::: tabs

== 示例

<Example>
  <div zui-create="imageSelector"></div>
</Example>

== HTML

```html
<div id="imageSelector"></div>

<script>
const imageSelector = new zui.imageSelector();
// 等价于：
// const imageSelector = new zui.FileSelector({
//     mode: 'grid',
//     accept: 'image/*,.png,.jpg,.jpeg,.gif'
// });
</script>
```

:::

## 文件限制

### 限制文件类型

通过 `accept` 来限制文件类型，可以使用 MIME 类型、文件扩展名或通配符，定义与 [HTML 的 `accept` 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/accept)相同。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-accept="image/*,.png,.jpg,.jpeg,.gif" data-tip="只支持选择图片"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    accept: 'image/*,.png,.jpg,.jpeg,.gif',
    tip: '只支持选择图片'
});
</script>
```

:::

### 限制文件大小

通过 `maxFileSize` 来限制单个文件大小，通过 `totalFileSize` 来限制总文件大小。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-max-file-size="1MB" data-total-file-size="10MB" data-tip="单个文件不超过 1MB，总文件大小不超过 10MB"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    maxFileSize: '1MB',
    totalFileSize: '10MB',
    tip: '单个文件不超过 1MB，总文件大小不超过 10MB'
});
</script>
```

:::

### 限制文件数目

通过 `maxFileCount` 来限制文件数目，如果设置为非大于 `0` 的数则不限制。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-max-file-count="3" data-tip="最多选择 3 个文件"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    maxFileCount: 3,
    tip: '最多选择 3 个文件'
});
</script>
```

:::

## 预设文件

通过设置 `defaultFiles` 属性可以预设文件列表，预设文件不会触发 `onAdd` 回调函数和 `onSelect` 回调函数。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-default-files='[{"name": "file1.txt", "size": 1024}, {"name": "file2.txt", "size": 2048}, {"name": "avatar.png", "size": 4096, "url": "../../../../assets/avatar/avatar.png"}]'></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    defaultFiles: [
        {name: 'file1.txt', size: 1024},
        {name: 'file2.txt', size: 2048},
        {name: 'avatar.png', size: 4096, url: '../../../../assets/avatar/avatar.png'}
    ]
});
</script>
```

:::

## 禁用

通过设置 `disabled` 属性为 `true` 可以禁用文件选择器。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-disabled="true" data-default-files='[{"name": "file1.txt", "size": 1024}, {"name": "file2.txt", "size": 2048}, {"name": "avatar.png", "size": 4096, "url": "../../../../assets/avatar/avatar.png"}]'></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    disabled: true,
    defaultFiles: [
        {name: 'file1.txt', size: 1024},
        {name: 'file2.txt', size: 2048},
        {name: 'avatar.png', size: 4096, url: '../../../../assets/avatar/avatar.png'}
    ]
});
</script>
```

:::

## 个性化配置

### 文件图标

通过设置 `fileIcons` 属性可以为不同类型的文件（根据扩展名）显示不同的图标。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-file-icons='{"image": "image", "video": "video", "audio": "audio", "text": "text", "pdf": "pdf", "word": "word", "excel": "excel", "ppt": "ppt", "zip": "zip", "default": "file"}'></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    fileIcons: {
        image: 'image',
        video: 'video',
        audio: 'audio',
        text: 'text',
        pdf: 'pdf',
        word: 'word',
        excel: 'excel',
        ppt: 'ppt',
        zip: 'zip',
        file: 'file'
    }
});
</script>
```

:::

### 显示缩略图

默认会为图片文件显示缩略图，通过设置 `thumbnail` 属性为 `false` 可以关闭缩略图显示。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-thumbnail="false" data-tip="不显示缩略图"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    thumbnail: false,
    tip: '不显示缩略图'
});
</script>
```

:::

### 文件拖放

默认情况下用户可以拖放文件到文件选择器中，通过设置 `draggable` 属性为 `false` 可以禁用拖放。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-draggable="false" data-mode="grid" data-tip="禁用拖放"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    draggable: false,
    mode: 'grid',
    tip: '禁用拖放'
});
</script>
```

:::

### 一次选择一个文件

默认情况下用户可以在操作系统文件选择对话框中一次选择多个文件，通过设置 `multiple` 属性为 `false` 可以限制一次只能选择一个文件。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-multiple="false" data-tip="一次只能选择一个文件"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    multiple: false,
    tip: '一次只能选择一个文件'
});
</script>
```

:::

### 网格模式配置

网格模式下可以通过设置 `gridWidth`、`gridHeight` 和 `gridGap` 来调整网格的宽度、高度和间距。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-mode="grid" data-grid-width="200px" data-grid-height="200px" data-grid-gap="20px"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    mode: 'grid',
    gridWidth: '200px',
    gridHeight: '200px',
    gridGap: '20px'
});

</script>
```

:::

### 自定义文件上传按钮

通过设置 `uploadBtn` 属性可以自定义文件上传按钮。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-upload-btn='{"text": "上传文件", "icon": "upload", "className": "rounded primary", "size": "lg"}'></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    uploadBtn: {
        text: '上传文件',
        icon: 'upload',
        className: 'rounded primary',
        size: 'lg'
    }
});
</script>
```

:::

## 文件操作

### 文件重命名

默认情况下支持对文件进行重命名，通过设置 `renameBtn` 属性为 `false` 可以禁用重命名按钮，通过为 `renameBtn` 属性设置字符串可以自定义重命名按钮的文字，通过为 `renameBtn` 属性设置对象可以自定义重命名按钮。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-rename-btn='{"text": "重命名", "icon": "edit", "className": "rounded primary"}' data-default-files='[{"name": "file1.txt", "size": 1024}, {"name": "file2.txt", "size": 2048}, {"name": "avatar.png", "size": 4096, "url": "../../../../assets/avatar/avatar.png"}]'></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    renameBtn: {
        text: '重命名',
        icon: 'edit',
        className: 'rounded primary',
        defaultFiles: [
            {name: 'file1.txt', size: 1024},
            {name: 'file2.txt', size: 2048},
            {name: 'avatar.png', size: 4096, url: '../../../../assets/avatar/avatar.png'}
        ]
    }
});
</script>
```

:::

### 文件移除

默认情况下支持对文件进行移除，通过设置 `removeBtn` 属性为 `false` 可以禁用移除按钮，通过为 `removeBtn` 属性设置字符串可以自定义移除按钮的文字，通过为 `removeBtn` 属性设置对象可以自定义移除按钮。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-remove-btn='{"text": "删除", "icon": "trash", "className": "rounded danger"}' data-default-files='[{"name": "file1.txt", "size": 1024}, {"name": "file2.txt", "size": 2048}, {"name": "avatar.png", "size": 4096, "url": "../../../../assets/avatar/avatar.png"}]'></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    removeBtn: {
        text: '删除',
        icon: 'trash',
        className: 'rounded danger',
        defaultFiles: [
            {name: 'file1.txt', size: 1024},
            {name: 'file2.txt', size: 2048},
            {name: 'avatar.png', size: 4096, url: '../../../../assets/avatar/avatar.png'}
        ]
    }
});
</script>
```

:::

### 自定义操作提示信息

通过设置 `removeConfirm`、`duplicatedTip`、`exceededSizeTip`、`exceededTotalSizeTip` 和 `exceededCountTip` 属性可以自定义操作提示信息。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-remove-confirm='{"title": "删除文件", "content": "确定要删除文件吗？"}' data-duplicated-tip='{"title": "重名文件", "content": "文件名已存在，是否保留重名文件？"}' data-exceeded-size-tip='{"title": "超出大小", "content": "文件大小超出限制，是否保留超出大小文件？"}' data-exceeded-total-size-tip='{"title": "超出总大小", "content": "总文件大小超出限制，是否保留超出总大小文件？"}' data-exceeded-count-tip='{"title": "超出数量", "content": "文件数量超出限制，是否保留超出数量文件？"}'></div>

</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    removeConfirm: {
        title: '删除文件',
        content: '确定要删除文件吗？'
    },
    duplicatedTip: {
        title: '重名文件',
        content: '文件名已存在，是否保留重名文件？'
    },
    exceededSizeTip: {
        title: '超出大小',
        content: '文件大小超出限制，是否保留超出大小文件？'
    },
    exceededTotalSizeTip: {
        title: '超出总大小',
        content: '总文件大小超出限制，是否保留超出总大小文件？'
    },
    exceededCountTip: {
        title: '超出数量',
        content: '文件数量超出限制，是否保留超出数量文件？'
    }
});
</script>
```

:::

### 操作拦截

通过设置 `onRename`、`onRemove`、`onAdd`、`onRemove` 选项设置回调函数可以拦截文件操作，通常在回调函数中返回 `false` 可以阻止继续操作，相关回调函数定义参加选项和 API。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-on-rename="RAWJS<(file)=>console.log('> Rename file', file)>RAWJS" data-on-remove="RAWJS<(file)=>console.log('> Remove file', file)>RAWJS" data-on-add="RAWJS<(file)=>console.log('> On add file', file)>RAWJS" data-on-select="RAWJS<(file)=>console.log('> On select file', file)>RAWJS"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    onRename: (newName, oldName, file) => {
        console.log('Rename file', file);
    },
    onRemove: (file) => {
        console.log('Remove file', file);
    },
    onAdd: (file) => {
        console.log('On add file', file);
    },
    onSelect: (files) => {
        console.log('On select file', files);
    }
});
</script>
```

:::

### 文件限制拦截

通过设置 `onDuplicated`、`onExceededSize`、`onExceededTotalSize` 和 `onExceededCount` 选项可以在触发文件限制时拦截文件操作，通过在回调函数中返回 `true` 来忽略文件限制，相关回调函数定义参加选项和 API。

::: tabs

== 示例

<Example>
  <div zui-create="fileSelector" data-on-duplicated="RAWJS<(name, currentFile, existFile)=>console.log('> Duplicated file', name, currentFile, existFile)>RAWJS" data-on-exceeded-size="RAWJS<(limit, file)=>console.log('> Exceeded size', limit, file)>RAWJS" data-on-exceeded-total-size="RAWJS<(limit, file)=>console.log('> Exceeded total size', limit, file)>RAWJS" data-on-exceeded-count="RAWJS<(limit, file)=>console.log('> Exceeded count', limit, file)>RAWJS"></div>
</Example>

== HTML

```html
<div id="fileSelector"></div>

<script>
const fileSelector = new zui.fileSelector({
    onDuplicated: (name, currentFile, existFile) => {
        console.log('Duplicated file', name, currentFile, existFile);
    },
    onExceededSize: (limit, file) => {
        console.log('Exceeded size', limit, file);
    },
    onExceededTotalSize: (limit, file) => {
        console.log('Exceeded total size', limit, file);
    },
    onExceededCount: (limit, file) => {
        console.log('Exceeded count', limit, file);
    }
});

</script>
```

:::

## 选项

### `FileSelectorProps`

<Props>
name?: string; // 作为表单字段的名称。
accept?: string; // 限制文件类型。
disabled?: boolean; // 是否禁用。
mode?: 'button' | 'box' | 'grid' = "button"; // 界面模式。
tip?: string; // 提示信息。
thumbnail?: boolean=true; // 是否显示缩略图。
gridWidth?: string | number; // 网格模式的宽度。
gridHeight?: string | number; // 网格模式的高度。
gridGap?: string | number; // 网格模式的间距。
defaultFiles?: DefaltFileInfo[]; // 默认显示的文件列表。
multiple?: boolean = true; // 是否允许在文件选择对话框中一次性选择多个文件（需要操作系统支持）。
itemProps?: ButtonProps | FileButtonGenerator; // 文件项的属性。
draggable?: boolean = true; // 是否允许拖拽。
fileIcons?: IconType | Record&lt;string, IconType&gt; = "file"; // 文件图标。
uploadBtn?: string | ButtonProps; // 上传按钮。
renameBtn?: boolean | string | ButtonProps | FileButtonGenerator = true; // 重命名按钮。
removeBtn?: boolean | string | ButtonProps | FileButtonGenerator = true; // 删除按钮。
removeConfirm?: string | ModalConfirmOptions; // 删除确认提示。
maxFileSize?: FileSize = "100MB";  // 限制文件大小。
maxFileCount?: number = 0; // 限制文件数目，如果设置为非大于 `0` 的数则不限制。
totalFileSize?: FileSize; // 限制总文件大小，如果设置为非大于 `0` 的数则不限制。
allowSameName?: boolean;  // 是否允许同名文件。
duplicatedTip?: string | ModalAlertOptions; // 重名提示。
exceededSizeTip?: string | ModalAlertOptions; // 超出大小提示。
exceededTotalSizeTip?: string | ModalAlertOptions; // 超出总大小提示。
exceededCountTip?: string | ModalAlertOptions; // 超出数量提示。
onSelect?: FileSelectCallback; // 选择文件时的回调。
onAdd?: FileAddCallback; // 添加文件时的回调。
onRemove?: RemoveFileCallback; // 删除文件时的回调。
onRename?: RenameFileCallback; // 重命名文件时的回调，返回 `false` 取消重命名。
onDuplicated?: DuplicatedCallback; // 重名时的回调，返回 `true` 保留重复文件。
onExceededSize?: ExceededLimitCallback; // 超出大小时的回调，返回 `true` 保留超出大小文件。
onExceededTotalSize?: ExceededLimitCallback; // 超出总大小时的回调，返回 `true` 保留超出总大小文件。
onExceededCount?: ExceededLimitCallback; // 超出数量时的回调，返回 `true` 保留超出数量文件。
</Props>

## API

### `FileInfo`

文件信息对象。

<Props>
name: string; // 文件名。
size: number; // 文件大小。
id: string;  // 文件唯一标识。
type: string; // 文件类型。
ext: string;  // 文件扩展名。
url?: string; // 文件地址。
file?: File; // 文件对象。
</Props>

### `StaticFileInfo`

预设文件信息对象。

<Props>
name: string; // 文件名。
size: FileSize; // 文件大小。
type?: string; // 文件类型。
id?: string; // 文件唯一标识。
url?: string; // 文件地址。
</Props>

### `FileSize`

文件大小，字节数或带单位的大小，例如 `1024` 或 `'1KB'`。

```ts
type FileSize = number | `${number}${'B' | 'KB' | 'MB' | 'GB' | 'TB'}`;
```

### `DefaltFileInfo`

默认文件信息对象。

```ts
type DefaltFileInfo = File | FileInfo | StaticFileInfo;
```

### `FileButtonGenerator`

文件操作按钮属性生成器，返回 `false` 不显示按钮，返回 `true` 使用默认按钮，返回字符串使用默认按钮并设置文字，返回对象使用自定义按钮。

```ts
type FileButtonGenerator = ((file: FileInfo) => (boolean | string | ButtonProps));
```

### `FileAddCallback`

添加文件时的回调函数，返回 `false` 取消添加文件。

```ts
type FileAddCallback = (file: FileInfo) => void | false;
```

### `FileSelectCallback`

选择文件时的回调函数。

```ts
type FileSelectCallback = (files: File[] | FileList) => void | false;
```

### `RemoveFileCallback`

删除文件时的回调函数。

```ts
(file: FileInfo) => void | false | Promise<void | false>;
```

### `RenameFileCallback`

重命名文件时的回调函数，返回 `false` 取消重命名。

```ts
type RenameFileCallback = (newName: string, oldName: string, file: FileInfo) => void | false | Promise<void | false>;
```

### `DuplicatedCallback`

重名时的回调，返回 `true` 保留重复文件。

```ts
type DuplicatedCallback = (name: string, currentFile: FileInfo, existFile: FileInfo) => void | true;
```


### `ExceededLimitCallback`

超出限制时的回调函数，返回 `true` 忽略限制，否则取消添加文件。

```ts
type ExceededLimitCallback = (limit: number, file: FileInfo) => void | true;
```
