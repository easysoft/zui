# 上传文件

用于表单上传文件。

## 使用方法

手动在 Html 元素上调用初始化函数并通过配置指定表单字段名即可使用上传文件组件，默认已开启多文件上传、重命名和删除功能。

<Example>
    <div id="example1"></div>
</Example>

```html
<div id="example1"></div>
```

```js
const upload = new Upload('#example1', {
    name: 'files1'
});
```

## 单文件上传

将 `multiple` 属性设置为 `false` 可实现只允许上传 1 个文件，默认为 `true`。

<Example>
    <div id="example2"></div>
</Example>

```js
const upload = new Upload('#example2', {
    name: 'files2',
    multiple: false,
});
```

## 限制上传文件数量

开启多文件上传时可通过设置 `limitCount` 属性限制上传文件的数量。

<Example>
    <div id="example3"></div>
</Example>

```js
const upload = new Upload('#example3', {
    name: 'files3',
    multiple: true,
    limitCount: 5,
    exceededCountHint: '超出上传文件数量限制',
});
```

## 限制上传文件大小

通过设置 `limitSize` 属性可限制上传文件的大小。

<Example>
    <div id="example4"></div>
</Example>

```js
const upload = new Upload('#example4', {
    name: 'files4',
    multiple: true,
    limitSize: '50MB',
    exceededSizeHint: '超出上传文件大小限制',
});
```

## 删除和重命名功能

### 关闭删除和重命名功能

通过将 `deleteBtn` 和 `renameBtn` 属性设置为 `false` 可关闭删除和重命名功能，默认为 `true`。

<Example>
    <div id="example5"></div>
</Example>

```js
const upload = new Upload('#example5', {
    name: 'files5',
    renameBtn: false,
    deleteBtn: false,
});
```

### 使用文本按钮

将 `useIconBtn` 属性设置为 `false` 可启用文本按钮，默认为 `true`。

<Example>
    <div id="example6"></div>
</Example>

```js
const upload = new Upload('#example6', {
    name: 'files6',
    useIconBtn: false,
});
```

## 拖拽上传文件

将 `draggable` 属性设置为 `true` 可启用拖拽上传文件功能，默认为 `false`。

<Example>
    <div id="example7"></div>
</Example>

```js
const upload = new Upload('#example7', {
    name: 'files7',
    draggable: true,
    tip: '可点击添加或拖拽上传，不超过50M',
});
```

## 选项

### `name`

表单字段名。

+ 类型：`string`
+ 必选：是

### `icon`

文件图标。

+ 类型：`string`
+ 必选：否
+ 默认值：`'file-o'`

### `showIcon`

是否显示文件图标。

+ 类型：`boolean`
+ 必选：否
+ 默认值：`true`

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

### `listPosition`

文件列表位置。

+ 类型：`'bottom' | 'top'`
+ 必选：否
+ 默认值：`'bottom'`

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

### `confirmText`

确认重命名按钮文本。

+ 类型：`string`
+ 必选：否
+ 默认值：`'确定'`

### `cancelText`

取消重命名按钮文本。

+ 类型：`string`
+ 必选：否
+ 默认值：`'取消'`

### `useIconBtn`

是否使用图标按钮。

+ 类型：`boolean`
+ 必选：否
+ 默认值：`true`

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

### `draggable`

是否启用拖拽功能。

+ 类型：`boolean`
+ 必选：否
+ 默认值：`false`

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
            new zui.Upload('#example1', {name: 'files1'});
            new zui.Upload('#example2', {name: 'files2', multiple: false});
            new zui.Upload('#example3', {name: 'files3', multiple: true, limitCount: 5, exceededCountHint: '超出上传文件数量限制'});
            new zui.Upload('#example4', {name: 'files4', multiple: true, limitSize: '50MB', exceededSizeHint: '超出上传文件大小限制'});
            new zui.Upload('#example5', {name: 'files5', renameBtn: false, deleteBtn: false});
            new zui.Upload('#example6', {name: 'files6', useIconBtn: false});
            new zui.Upload('#example7', {name: 'files7', draggable: true, tip: '可点击添加或拖拽上传，不超过50M'});
        });
    }
};
</script>



