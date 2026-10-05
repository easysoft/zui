# 上传文件

用于表单上传文件。

## 使用方法

通过 `new zui.Upload(element, options)` 在指定容器内初始化，并用 `name` 指定表单字段名，默认已开启多文件上传、重命名和删除功能。

::: tabs

== 示例

<Example>
  <ZUI id="uploadBasic" use="upload" :options="{name: 'projectAttachments'}" />
</Example>

== HTML

```html
<div id="uploadBasic"></div>

<script>
new zui.Upload('#uploadBasic', {
    name: 'projectAttachments',
});
</script>
```

:::

## 单文件上传

将 `multiple` 属性设置为 `false` 可实现只允许上传 1 个文件，默认为 `true`。

::: tabs

== 示例

<Example>
  <ZUI
    id="uploadSingle"
    use="upload"
    :options="{
        name: 'acceptanceReport',
        multiple: false,
    }"
  />
</Example>

== HTML

```html
<div id="uploadSingle"></div>

<script>
new zui.Upload('#uploadSingle', {
    name: 'acceptanceReport',
    multiple: false,
});
</script>
```

:::

## 限制上传文件数量

开启多文件上传时可通过设置 `limitCount` 属性限制上传文件的数量。

::: tabs

== 示例

<Example>
  <ZUI
    id="uploadCount"
    use="upload"
    :options="{
        name: 'reviewAttachments',
        multiple: true,
        limitCount: 5,
        exceededCountHint: '最多添加 5 份评审附件，请移除不需要的文件。',
    }"
  />
</Example>

== HTML

```html
<div id="uploadCount"></div>

<script>
new zui.Upload('#uploadCount', {
    name: 'reviewAttachments',
    multiple: true,
    limitCount: 5,
    exceededCountHint: '最多添加 5 份评审附件，请移除不需要的文件。',
});
</script>
```

:::

## 限制上传文件大小

通过设置 `limitSize` 属性限制所选文件的总大小；单文件模式下限制当前文件的大小。

::: tabs

== 示例

<Example>
  <ZUI
    id="uploadSize"
    use="upload"
    :options="{
        name: 'designFiles',
        multiple: true,
        limitSize: '50MB',
        exceededSizeHint: '设计文件总大小不能超过 50 MB，请移除部分文件后重试。',
    }"
  />
</Example>

== HTML

```html
<div id="uploadSize"></div>

<script>
new zui.Upload('#uploadSize', {
    name: 'designFiles',
    multiple: true,
    limitSize: '50MB',
    exceededSizeHint: '设计文件总大小不能超过 50 MB，请移除部分文件后重试。',
});
</script>
```

:::

## 删除和重命名功能

### 关闭删除和重命名功能

通过将 `deleteBtn` 和 `renameBtn` 属性设置为 `false` 可关闭删除和重命名功能，默认为 `true`。

::: tabs

== 示例

<Example>
  <ZUI
    id="uploadReadonly"
    use="upload"
    :options="{
        name: 'archivedAttachments',
        renameBtn: false,
        deleteBtn: false,
    }"
  />
</Example>

== HTML

```html
<div id="uploadReadonly"></div>

<script>
new zui.Upload('#uploadReadonly', {
    name: 'archivedAttachments',
    renameBtn: false,
    deleteBtn: false,
});
</script>
```

:::

### 使用文本按钮

将 `useIconBtn` 属性设置为 `false` 可启用文本按钮，默认为 `true`。

::: tabs

== 示例

<Example>
  <ZUI
    id="uploadTextButtons"
    use="upload"
    :options="{
        name: 'releaseAttachments',
        useIconBtn: false,
    }"
  />
</Example>

== HTML

```html
<div id="uploadTextButtons"></div>

<script>
new zui.Upload('#uploadTextButtons', {
    name: 'releaseAttachments',
    useIconBtn: false,
});
</script>
```

:::

## 拖拽上传文件

将 `draggable` 属性设置为 `true` 可启用拖拽上传文件功能，默认为 `false`。

::: tabs

== 示例

<Example>
  <ZUI
    id="uploadDrag"
    use="upload"
    :options="{
        name: 'handoffFiles',
        draggable: true,
        limitSize: '50MB',
        tip: '添加交付材料，总大小不超过 50 MB',
    }"
  />
</Example>

== HTML

```html
<div id="uploadDrag"></div>

<script>
new zui.Upload('#uploadDrag', {
    name: 'handoffFiles',
    draggable: true,
    limitSize: '50MB',
    tip: '添加交付材料，总大小不超过 50 MB',
});
</script>
```

:::

## 默认文件列表

通过设置 `defaultFileList` 属性为组件添加默认文件列表。

::: tabs

== 示例

<Example>
  <ZUI id="uploadDefaultFiles" use="upload" :options="{name: 'releaseDocuments', defaultFileList}" />
</Example>

== HTML

```html
<div id="uploadDefaultFiles"></div>

<script>
const file1 = new File(['客户门户 v1.2：新增附件预览，优化移动端上传。'], '发布说明.txt', {
    type: 'text/plain',
});
const file2 = new File(['验收清单：登录、工单查询、附件预览、移动端上传。'], '验收清单.txt', {
    type: 'text/plain',
});
new zui.Upload('#uploadDefaultFiles', {
    name: 'releaseDocuments',
    defaultFileList: [file1, file2],
});
</script>
```

:::

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

### `uploadIcon`

上传按钮图标。

+ 类型：`string`
+ 必选：否

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

### `onAdd`

文件加入前回调，返回 `null` 可跳过该文件，返回 `File` 可替换最终加入的文件。

+ 类型：`(file: File) => File | null`
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

所选文件的总大小上限；单文件模式下为当前文件的大小上限。

+ 类型：`${number}${'B' | 'KB' | 'MB' | 'GB'}` | `false`
+ 必选：否

### `duplicatedHint`

重复文件提示。

+ 类型：`string`
+ 必选：否

### `onDuplicated`

文件重复回调。

+ 类型：`(name: string) => void`
+ 必选：否

### `exceededSizeHint`

超出大小限制提示。

+ 类型：`string`
+ 必选：否

### `onExceededSize`

超出大小限制回调。

+ 类型：`(limit: number) => void`
+ 必选：否

### `exceededCountHint`

超过数量限制提示。

+ 类型：`string`
+ 必选：否

### `onExceededCount`

超过数量限制回调

+ 类型：`(limit: number) => void`
+ 必选：否

<script setup>
const defaultFileList = [
    new File(['客户门户 v1.2：新增附件预览，优化移动端上传。'], '发布说明.txt', {type: 'text/plain'}),
    new File(['验收清单：登录、工单查询、附件预览、移动端上传。'], '验收清单.txt', {type: 'text/plain'}),
];
</script>
