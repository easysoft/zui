# 上传图片

用于表单上传图片。

## 使用方法

手动在 Html 元素上调用初始化函数并通过配置指定表单字段名即可使用上传文件组件。

<Example>
    <div id="example1"></div>
</Example>

```html
<div id="example1"></div>
```

```js
const upload = new UploadImgs('#example1', {
    name: 'files1',
    tip: '可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png',
});
```

## 限制上传文件数量

开启多文件上传时可通过设置 `limitCount` 属性限制上传文件的数量。

<Example>
    <div id="example2"></div>
</Example>

```js
const upload = new UploadImgs('#example2', {
    name: 'files2',
    multiple: true,
    limitCount: 5,
    exceededCountHint: '超出上传文件数量限制',
    tip: '可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png',
});
```

## 限制上传文件大小

通过设置 `limitSize` 属性可限制上传文件的大小。

<Example>
    <div id="example3"></div>
</Example>

```js
const upload = new UploadImgs('#example3', {
    name: 'files3',
    multiple: true,
    limitSize: '50MB',
    exceededSizeHint: '超出上传文件大小限制',
    tip: '可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png',
});
```

## 选项

### `name`

表单字段名。

+ 类型：`string`
+ 必选：是

### `showSize`

是否显示文件大小。

+ 类型：`boolean`
+ 必选：否
+ 默认值：`true`

### `multiple`

是否开启多文件上传。

+ 类型：`boolean`
+ 必选：否
+ 默认值：`true`

### `uploadText`

上传按钮文本。

+ 类型：`string`
+ 必选：否
+ 默认值：`'上传文件'`

### `renameBtn`

是否启用重命名按钮。

+ 类型：`boolean`
+ 必选：否
+ 默认值：`true`

### `renameIcon`

重命名按钮图标。

+ 类型：`string`
+ 必选：否
+ 默认值：`'edit'`

### `renameText`

重命名按钮文本。

+ 类型：`string`
+ 必选：否
+ 默认值：`'重命名'`

### `renameClass`

重命名按钮类。

+ 类型：`string`
+ 必选：否

### `deleteBtn`

是否启用删除按钮。

+ 类型：`boolean`
+ 必选：否
+ 默认值：`true`

### `deleteIcon`

删除按钮图标。

+ 类型：`string`
+ 必选：否
+ 默认值：`'trash'`

### `deleteText`

删除按钮文本。

+ 类型：`string`
+ 必选：否
+ 默认值：`'删除'`

### `deleteClass`

删除按钮类。

+ 类型：`string`
+ 必选：否

### `tip`

文件上传提示。

+ 类型：`string`
+ 必选：否

### `btnClass`

上传按钮类。

+ 类型：`string`
+ 必选：否

### `onChange`

文件变更回调。

+ 类型：`(files: File[]) => void`
+ 必选：否

### `onDelete`

删除文件回调。

+ 类型：`(file: File) => void`
+ 必选：否

### `onRename`

重命名文件回调。

+ 类型：`(newName: string, oldName: string) => void`
+ 必选：否

### `onSizeChange`

文件大小变更回调。

+ 类型：`(size: number) => void`
+ 必选：否

### `limitCount`

上传文件最大数量限制。

+ 类型：`number`
+ 必选：否

### `accept`

上传文件类型。

+ 类型：`string`
+ 必选：否

### `defaultFileList`

默认文件列表。

+ 类型：`File[]`
+ 必选：否

### `limitSize`

上传文件最大大小限制。

+ 类型：`${number}${'B' | 'KB' | 'MB' | 'GB'}` | `false`
+ 必选：否

### `duplicatedHint`

重复文件提示。

+ 类型：`string`
+ 必选：否

### `exceededSizeHint`

超出大小限制提示。

+ 类型：`string`
+ 必选：否

### `exceededCountHint`

超过数量限制提示。

+ 类型：`string`
+ 必选：否

<script>
export default {
    mounted() {
        onZUIReady(() => {
            new zui.UploadImgs('#example1', {name: 'files1', tip: '可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png'});
            new zui.UploadImgs('#example2', {name: 'files2', multiple: true, limitCount: 5, exceededCountHint: '超出上传文件数量限制', tip: '可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png',});
            new zui.UploadImgs('#example3', {name: 'files3', multiple: true, limitSize: '50MB', exceededSizeHint: '超出上传文件大小限制', tip: '可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png',});
        });
    }
};
</script>



