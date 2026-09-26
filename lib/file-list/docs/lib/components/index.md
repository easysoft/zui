# 文件列表

展示附件名称、大小、图标、缩略图和操作，支持列表与卡片布局。以下示例以已按[快速上手](/guide/start/)加载 ZUI 为前提。

## 基础用法


<div id="files-basic" data-doc-example="files-basic">

::: tabs

== 示例

<Example>
  <ZUI id="filesBasic" use="fileList" :options="filesBasicOptions" />
</Example>

== HTML

```html
<div id="filesBasic"></div>

<script>
const instance = new zui.FileList('#filesBasic', {items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}]});
</script>
```

:::

</div>

## 图标与链接

默认 fileIcon: false。字符串指定统一图标，对象按扩展名匹配，函数接收补齐元信息的文件对象。使用图标时需包含相应图标资源。此处链接仅定位本示例，业务中可改为真实下载地址。
<div id="files-icons" data-doc-example="files-icons">

::: tabs

== 示例

<Example>
  <ZUI id="filesIcons" use="fileList" :options="filesIconsOptions" />
</Example>

== HTML

```html
<div id="filesIcons"></div>

<script>
const instance = new zui.FileList('#filesIcons', {items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}], fileIcon: {pdf: 'file-pdf'}, fileUrl: '#filesIcons'});
</script>
```

:::

</div>

## 缩略图与失败回退

thumbnail 默认 false；true 使用默认 Avatar，选项对象可自定义大小等外观。本例启用 thumbnailPreview，悬停图片可查看完整内容，默认最大宽高为 200 × 200px。第二条故意使用无法解码的图片，展示加载失败后回退到文件图标，图标不会触发悬停预览。
<div id="files-thumbnails" data-doc-example="files-thumbnails">

::: tabs

== 示例

<Example>
  <ZUI id="filesThumbnails" use="fileList" :options="filesThumbnailsOptions" />
</Example>

== HTML

```html
<div id="filesThumbnails"></div>

<script>
const instance = new zui.FileList('#filesThumbnails', {
    items: [
        {id: 'cover', title: '封面.pdf', extension: 'pdf', size: 2048, pathname: '', addedBy: '', addedDate: '', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='%231678ff'/%3E%3C/svg%3E"},
        {id: 'broken', title: '封面无法解码.pdf', extension: 'pdf', size: 1024, pathname: '', addedBy: '', addedDate: '', thumbnail: 'data:image/png;base64,AA=='},
    ],
    thumbnail: {size: 'lg'},
    thumbnailPreview: true,
    fileIcon: {pdf: 'file-pdf'},
});
</script>
```

:::

</div>

## 卡片模式


<div id="files-cards" data-doc-example="files-cards">

::: tabs

== 示例

<Example>
  <ZUI id="filesCards" use="fileList" :options="filesCardsOptions" />
</Example>

== HTML

```html
<div id="filesCards"></div>

<script>
const instance = new zui.FileList('#filesCards', {items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}], mode: 'cards', thumbnail: true, fileIcon: {pdf: 'file-pdf'}});
</script>
```

:::

</div>

## 内联卡片


<div id="files-inline" data-doc-example="files-inline">

::: tabs

== 示例

<Example>
  <ZUI id="filesInline" use="fileList" :options="filesInlineOptions" />
</Example>

== HTML

```html
<div id="filesInline"></div>

<script>
const instance = new zui.FileList('#filesInline', {items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}], mode: 'cards-inline', thumbnail: true, fileIcon: {pdf: 'file-pdf'}});
</script>
```

:::

</div>

## 文件操作与更新

调用 render({items: nextFiles}) 更新文件。这里的移除仅更新界面，不会删除服务器文件；清空后列表不再显示条目。
<div id="files-actions" data-doc-example="files-actions">

::: tabs

== 示例

<Example>
  <ZUI id="filesActions" use="fileList" :options="filesActionsOptions" />
<output id="filesActionsResult" aria-live="polite">等待操作</output>
</Example>

== HTML

```html
<div id="filesActions"></div>
<output id="filesActionsResult" aria-live="polite">等待操作</output>

<script>
const instance = new zui.FileList('#filesActions', {
    items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}],
    fileActions(file) {
        return [{text: '移除', icon: 'trash', onClick() {
            zui.FileList.get('#filesActions').render({items: []});
            document.querySelector('#filesActionsResult').textContent = '已移除：' + file.title;
        }}];
    },
});
</script>
```

:::

</div>

## 原生 File 与图片预览

选择本地图片即可预览，不会上传文件。通过 {file} 传入 File，组件补齐名称、扩展名、大小和 ID。
<div id="files-native" data-doc-example="files-native">

::: tabs

== 示例

<Example>
  <label for="filesNativeInput">选择本地图片</label>
<input id="filesNativeInput" type="file" accept="image/*" multiple onchange="zui.FileList.get('#filesNative').render({items: Array.from(this.files, file => ({file}))})">
  <ZUI id="filesNative" use="fileList" :options="filesNativeOptions" />
</Example>

== HTML

```html
<label for="filesNativeInput">选择本地图片</label>
<input id="filesNativeInput" type="file" accept="image/*" multiple onchange="zui.FileList.get('#filesNative').render({items: Array.from(this.files, file => ({file}))})">
<div id="filesNative"></div>

<script>
const instance = new zui.FileList('#filesNative', {items: [], thumbnail: true, fileIcon: 'file'});
</script>
```

:::

</div>

## 选项

FileList 继承 [List](/lib/components/list/)；常用扩展如下。FileInfoLike、FileInfo、OriginFileInfo 和 FileListProps 为公开类型。

<Props>
items?: FileInfoLike[]; // 文件数据，支持 FileInfo 和 {file: File}。
mode?: 'list' | 'cards' | 'cards-inline' | 'grid'; // 省略时显示普通列表；grid 需自行提供网格布局样式。
heading?: ListitemProps; // 列表标题。
fileIcon?: false | string | FileIconMap | FileIconGetter = false; // 文件图标。
thumbnail?: boolean | Partial&lt;AvatarOptions&gt; = false; // 显示缩略图，并可配置 Avatar。
thumbnailPreview?: boolean | {maxWidth?: number; maxHeight?: number; placement?: PopoverOptions['placement']} = false; // 悬停预览，需启用 thumbnail；最大宽高单位为 px，各自默认 200，位置默认 left-start。
getThumbnail?: (file: FileInfo) => string; // 同步返回封面 URL；空字符串使用默认来源。
fileSizeFormat?: string = "{size}"; // 格式化大小文本，{size} 为自动格式化后的大小。
fileUrl?: string | ((file: FileInfo) => string); // 链接模板支持 {id} 等文件字段。
fileActions?: (file: FileInfo) => ListitemProps['actions']; // 文件操作。
itemProps?: Partial&lt;FileInfoLike&gt; &amp; ListitemProps; // 列表项外观与行为。
</Props>

缩略图来源顺序为 getThumbnail(file)、文件的 thumbnail、原生图片生成的预览。thumbnail: false 会禁用上述解析。getThumbnail、fileUrl、fileActions 以及列表条目回调取得的是补齐元信息后的数据，原生文件仍保留在 file 字段中。

`thumbnailPreview` 复用缩略图实际显示的图片地址，保持原始比例、不放大小图。默认在缩略图左侧顶部对齐（`left-start`），可通过 `placement` 调整偏好位置；组件会根据屏幕空间调整尺寸与位置。移入预览浮层时保持显示，离开缩略图和浮层后延迟 150ms 隐藏，按 Escape 可立即关闭。

```js
zui.FileList.get('#filesThumbnails').render({thumbnailPreview: {maxWidth: 320, maxHeight: 240, placement: 'right-start'}});
```

只配置一个维度时，另一个仍为 `200px`；设置 `thumbnailPreview: false` 关闭悬停预览。

## 文件数据与身份

FileInfo 使用 title、extension、size、pathname、addedBy、addedDate 描述文件；thumbnail 是可选封面地址，id 可以是字符串或数字。OriginFileInfo 只要求 file，其余字段可选且显式值优先。

省略 id 或使用空字符串时，组件自动生成标识；数字 0 会保留。更新或排序时保留原对象可维持自动 ID；同一 File 作为多条记录时，请保留各条记录对象，或显式指定不同 ID。输入对象不会被组件修改。

## 事件、更新与销毁

- `onClickItem({item, index, event})`：点击文件条目；配置形式继承 List。
- `instance.render({items: nextFiles})`：替换显示数据。
- `instance.render({thumbnail: false})`：关闭缩略图。
- `instance.destroy()`：销毁列表并释放组件生成的预览 URL；调用方提供的 URL 由调用方管理。

未实际展示的条目不会生成原生图片预览；使用 maxVisibleItems 展开更多后才按需生成。设置真实文件地址时，下载权限由业务系统处理。

## 无障碍与接入

文件操作使用可聚焦按钮并提供文字，图标操作应配置 title 或 hint。选择文件的输入框通过 label 关联名称。框架接入见[在 React 中使用 ZUI vanilla 组件](/lib/basic/core/use-zui-in-react.html)，外观定制见 [Avatar](/lib/components/avatar/)。

<script setup>
const filesBasicOptions = {items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}]};

const filesIconsOptions = {items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}], fileIcon: {pdf: 'file-pdf'}, fileUrl: '#filesIcons'};

const filesThumbnailsOptions = {
    items: [
        {id: 'cover', title: '封面.pdf', extension: 'pdf', size: 2048, pathname: '', addedBy: '', addedDate: '', thumbnail: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect width='80' height='80' fill='%231678ff'/%3E%3C/svg%3E"},
        {id: 'broken', title: '封面无法解码.pdf', extension: 'pdf', size: 1024, pathname: '', addedBy: '', addedDate: '', thumbnail: 'data:image/png;base64,AA=='},
    ],
    thumbnail: {size: 'lg'},
    thumbnailPreview: true,
    fileIcon: {pdf: 'file-pdf'},
};

const filesCardsOptions = {items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}], mode: 'cards', thumbnail: true, fileIcon: {pdf: 'file-pdf'}};

const filesInlineOptions = {items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}], mode: 'cards-inline', thumbnail: true, fileIcon: {pdf: 'file-pdf'}};

const filesActionsOptions = {
    items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}],
    fileActions(file) {
        return [{text: '移除', icon: 'trash', onClick() {
            zui.FileList.get('#filesActions').render({items: []});
            document.querySelector('#filesActionsResult').textContent = '已移除：' + file.title;
        }}];
    },
};

const filesNativeOptions = {items: [], thumbnail: true, fileIcon: 'file'};
</script>
