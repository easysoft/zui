# 上传图片

用于表单上传图片。

## 使用方法

通过 `new zui.UploadImgs(element, options)` 在指定容器内初始化，并用 `name` 指定表单字段名。

::: tabs

== 示例

<Example>
  <ZUI
    id="uploadImgsBasic"
    use="uploadImgs"
    :options="{
        name: 'issueScreenshots',
        tip: '添加问题截图，支持 JPG、JPEG、GIF 和 PNG',
    }"
  />
</Example>

== HTML

```html
<div id="uploadImgsBasic"></div>

<script>
new zui.UploadImgs('#uploadImgsBasic', {
    name: 'issueScreenshots',
    tip: '添加问题截图，支持 JPG、JPEG、GIF 和 PNG',
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
    id="uploadImgsCount"
    use="uploadImgs"
    :options="{
        name: 'reviewScreenshots',
        multiple: true,
        limitCount: 5,
        exceededCountHint: '最多添加 5 张问题截图。',
        tip: '添加问题截图，支持 JPG、JPEG、GIF 和 PNG',
    }"
  />
</Example>

== HTML

```html
<div id="uploadImgsCount"></div>

<script>
new zui.UploadImgs('#uploadImgsCount', {
    name: 'reviewScreenshots',
    multiple: true,
    limitCount: 5,
    exceededCountHint: '最多添加 5 张问题截图。',
    tip: '添加问题截图，支持 JPG、JPEG、GIF 和 PNG',
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
    id="uploadImgsSize"
    use="uploadImgs"
    :options="{
        name: 'designPreviews',
        multiple: true,
        limitSize: '5MB',
        exceededSizeHint: '预览图总大小不能超过 5 MB，请移除部分图片后重试。',
        tip: '添加设计预览图，总大小不超过 5 MB',
    }"
  />
</Example>

== HTML

```html
<div id="uploadImgsSize"></div>

<script>
new zui.UploadImgs('#uploadImgsSize', {
    name: 'designPreviews',
    multiple: true,
    limitSize: '5MB',
    exceededSizeHint: '预览图总大小不能超过 5 MB，请移除部分图片后重试。',
    tip: '添加设计预览图，总大小不超过 5 MB',
});
</script>
```

:::

## 限制图片类型

通过设置 `accept` 属性限制上传图片的类型。

::: tabs

== 示例

<Example>
  <ZUI
    id="uploadImgsType"
    use="uploadImgs"
    :options="{
        name: 'coverImage',
        multiple: false,
        tip: '选择封面图片，仅支持 JPG 和 JPEG',
        accept: 'image/jpeg,.jpg,.jpeg',
    }"
  />
</Example>

== HTML

```html
<div id="uploadImgsType"></div>

<script>
new zui.UploadImgs('#uploadImgsType', {
    name: 'coverImage',
    multiple: false,
    tip: '选择封面图片，仅支持 JPG 和 JPEG',
    accept: 'image/jpeg,.jpg,.jpeg',
});
</script>
```

:::

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
+ 默认值：`'添加文件'`

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

### `totalCountText`

文件数量提示。

+ 类型：`string`
+ 必选：否
+ 默认值：`'共 <span class="font-bold text-black">%s</span> 个文件 <span class="font-bold text-black">%s</span> 个文件等待上传。'`
