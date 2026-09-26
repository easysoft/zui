# 文件列表

展示附件名称、大小、图标、缩略图和操作，支持列表、卡片、内联卡片和网格布局。以下示例以已按[快速上手](/guide/start/)加载 ZUI 为前提。

## 基础用法

默认只显示文件名和自动格式化的大小，不显示图标或缩略图。

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

`fileIcon` 默认为 `false`。字符串指定统一图标，对象按 `extension` 匹配，未命中时使用 `file` 图标；函数接收补齐元信息的文件对象。使用图标时需包含相应图标资源。

`fileUrl` 可指定固定地址、使用 `'/files/{id}'` 这样的模板，或通过函数返回地址。此处链接仅定位本示例，业务中可改为真实下载地址。

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

## 两行布局

设置 `multiline: true` 将文件名和大小分为两行。启用缩略图时，默认 Avatar 大小从单行的 `sm` 改为 `md`；传入 `thumbnail: {size: 'lg'}` 可自行指定大小。

<div id="files-multiline" data-doc-example="files-multiline">

::: tabs

== 示例

<Example>
  <ZUI id="filesMultiline" use="fileList" :options="filesMultilineOptions" />
</Example>

== HTML

```html
<div id="filesMultiline"></div>

<script>
const instance = new zui.FileList('#filesMultiline', {
    items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}],
    multiline: true,
    thumbnail: true,
    fileIcon: {pdf: 'file-pdf'},
    fileSizeFormat: '大小：{size}',
});
</script>
```

:::

</div>

### 大小文本

`fileSizeFormat` 默认为 `'{size}'`，其中 `{size}` 是由字节数自动格式化的文本，例如 `2.00KB`。可以改为 `'大小：{size}'` 或 `'({size})'`。

设置 `fileSizeFormat: false` 或空字符串仅跳过模板替换，仍显示自动格式化的大小。需要隐藏大小时，使用 `itemProps: {subtitle: null}`。

## 缩略图与失败回退

`thumbnail` 默认为 `false`；`true` 使用默认 [Avatar](/lib/components/avatar/)，选项对象可自定义大小、圆角等外观。仅有文件名不会自动产生图片，需提供封面地址、原生图片文件或回退图标。

本例启用 `thumbnailPreview`，悬停图片可查看完整内容，默认最大宽高为 200 × 200px。第二条故意使用无法解码的图片，展示加载失败后回退到 `fileIcon`；图标不会触发悬停预览。

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

设置 `mode: 'cards'` 为每个文件添加卡片外观，并纵向排列。图标与缩略图仍由各自选项控制，切换模式不会自动开启它们。

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

设置 `mode: 'cards-inline'` 将卡片横向排列，空间不足时自动换行，适合在正文或详情页中展示附件。

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

## 网格模式

设置 `mode: 'grid'` 将缩略图放在文件名上方，网格随容器宽度自动换行。组件已提供网格样式，无需额外编写布局 CSS。

- `gridCellWidth` 控制单元格宽度，默认为 `120`，单位为 px；启用缩略图时也作为默认 Avatar 大小。
- `gridGap` 控制行列间距，默认为 `8`，单位为 px；支持 `0`。
- `multiline: true` 将大小显示在文件名下方。
- `hoverItemActions: true` 让网格操作栏在鼠标悬停或条目内获得键盘焦点时显示；省略时操作栏始终显示。

本例使用 `132px` 宽度和 `12px` 间距。点击“查看”只更新示例提示；可通过 Tab 键聚焦操作按钮，再按 Enter 执行。

<div id="files-grid" data-doc-example="files-grid">

::: tabs

== 示例

<Example>
  <ZUI id="filesGrid" use="fileList" :options="filesGridOptions" />
  <output id="filesGridResult" aria-live="polite">等待操作</output>
</Example>

== HTML

```html
<div id="filesGrid"></div>
<output id="filesGridResult" aria-live="polite">等待操作</output>

<script>
const instance = new zui.FileList('#filesGrid', {
    items: [
        {id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'},
        {id: 'design', title: '界面设计与附件展示规范.pdf', extension: 'pdf', size: 8192, pathname: 'design.pdf', addedBy: '团队', addedDate: '2026-09-02'},
    ],
    mode: 'grid',
    gridCellWidth: 132,
    gridGap: 12,
    multiline: true,
    thumbnail: true,
    fileIcon: {pdf: 'file-pdf'},
    hoverItemActions: true,
    fileActions(file) {
        return [{text: '查看', icon: 'eye-open', onClick() {
            document.querySelector('#filesGridResult').textContent = '已选择：' + file.title;
        }}];
    },
});
</script>
```

:::

</div>

通过 `instance.render({gridCellWidth: 160, gridGap: 0})` 可更新网格尺寸。若同时指定 `thumbnail: {size: ...}`，该大小会覆盖缩略图的默认值，但不会改变单元格宽度。

## 分批展示

通过继承自 [List](/lib/components/list/) 的 `maxVisibleItems` 限制首次显示的数量，点击“显示更多”后按 `showMoreStep` 逐批展开。省略 `showMoreStep` 时，每次展开数量与 `maxVisibleItems` 相同；`maxVisibleItems` 未设置或不大于 `0` 时显示全部。

这是对已提供数据的分批展示，不会自动向服务器请求下一页。原生图片的预览 URL 只在条目实际显示时生成。

<div id="files-limited" data-doc-example="files-limited">

::: tabs

== 示例

<Example>
  <ZUI id="filesLimited" use="fileList" :options="filesLimitedOptions" />
</Example>

== HTML

```html
<div id="filesLimited"></div>

<script>
const instance = new zui.FileList('#filesLimited', {
    items: [
        {id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'},
        {id: 'design', title: '设计说明.pdf', extension: 'pdf', size: 4096, pathname: 'design.pdf', addedBy: '团队', addedDate: '2026-09-02'},
        {id: 'notes', title: '会议记录.txt', extension: 'txt', size: 1024, pathname: 'notes.txt', addedBy: '团队', addedDate: '2026-09-03'},
    ],
    maxVisibleItems: 2,
    showMoreStep: 1,
    showMoreText: '显示更多（剩余 {count} 个）',
});
</script>
```

:::

</div>

## 文件操作与更新

`fileActions(file)` 返回该文件的操作栏配置。调用 `render({items: nextFiles})` 更新文件；这里的移除仅更新界面，不会删除服务器文件，清空后列表不再显示条目。

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

选择本地图片即可预览，不会上传文件。通过 `{file}` 传入原生 `File`，组件补齐名称、扩展名、大小和 ID；启用 `thumbnailPreview: true` 后也可悬停预览。

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

`FileListProps<T>` 继承 [List](/lib/components/list/) 的选项，`T` 默认为 `FileInfoLike`。下表包含文件列表扩展和常用的继承选项；普通列表为默认显示效果，无需设置 `mode`。

<Props>
items?: ListItemsSetting&lt;T&gt;; // 文件数据；常用写法为数组，也支持 List 的数据获取配置。
mode?: 'list' | 'cards' | 'cards-inline' | 'grid'; // 列表、卡片、内联卡片或网格。
heading?: ListitemProps; // 列表标题。
multiline?: boolean; // 是否将文件名和大小分为两行；默认显示在同一行。
fileIcon?: false | string | FileIconMap | FileIconGetter = false; // 文件图标。
thumbnail?: boolean | Partial&lt;AvatarOptions&gt; = false; // 显示缩略图，并可配置 Avatar。
thumbnailPreview?: boolean | {maxWidth?: number; maxHeight?: number; placement?: PopoverOptions['placement']} = false; // 悬停预览，需启用 thumbnail；最大宽高单位为 px，各自默认 200，位置默认 top-start。
getThumbnail?: (file: T &amp; FileInfo) => string; // 同步返回封面 URL；空字符串使用默认来源。
fileSizeFormat?: false | string = "{size}"; // 大小文本模板；false 仍显示自动格式化的大小。
gridCellWidth?: number = 120; // 网格单元格宽度，单位为 px，使用正数。
gridGap?: number = 8; // 网格行列间距，单位为 px，支持 0。
fileUrl?: string | ((file: T &amp; FileInfo) => string); // 链接模板支持 {id} 等文件字段。
fileActions?: (file: T &amp; FileInfo) => ListitemProps['actions']; // 根据文件返回操作栏配置。
hoverItemActions?: boolean; // 在网格中，仅悬停或条目内获得焦点时显示操作栏；默认始终显示。
itemProps?: Partial&lt;T&gt; &amp; ListitemProps; // 覆盖所有条目的外观与行为，例如 subtitle、titleAttrs。
maxVisibleItems?: number; // 首次显示的条目数，未设置或不大于 0 时不限制。
showMoreStep?: number; // 每次展开的条目数，默认与 maxVisibleItems 相同。
showMoreText?: string | ((remaining: number) => CustomContentType); // 展开按钮文案，字符串支持 {count} 占位符。
autoShowMore?: boolean; // 展开按钮进入视口时自动展开，默认不启用。
</Props>

### 缩略图来源与预览

缩略图来源按顺序选择 `getThumbnail(file)` 的非空结果、文件的 `thumbnail`、原生图片生成的预览。`thumbnail: false` 会禁用上述解析；`thumbnail` 选项对象中的 `src` 可进一步覆盖 Avatar 实际使用的地址。

`getThumbnail`、`fileUrl`、`fileActions` 以及列表条目回调取得的是补齐元信息后的数据，原生文件仍保留在 `file` 字段中。

`thumbnailPreview` 复用缩略图实际显示的图片地址，保持原始比例、不放大小图。默认在缩略图上方并左对齐（`top-start`），可通过 `placement` 调整偏好位置；组件会根据屏幕空间调整尺寸与位置。移入预览浮层时保持显示，离开缩略图和浮层后延迟 150ms 隐藏，按 Escape 可立即关闭。

```js
zui.FileList.get('#filesThumbnails').render({thumbnailPreview: {maxWidth: 320, maxHeight: 240, placement: 'right-start'}});
```

只配置一个维度时，另一个仍为 `200px`；设置 `thumbnailPreview: false` 关闭悬停预览。

## 文件数据与身份

`FileInfoLike = FileInfo | OriginFileInfo`。已有附件使用 `FileInfo`，本地文件使用 `OriginFileInfo`：它只要求 `file: File`，其余字段可选，显式传入的值优先于从原生文件补齐的值。

| `FileInfo` 字段 | 类型 | 说明 |
| --- | --- | --- |
| `id` | `string \| number`，可选 | 文件标识，同一列表内应唯一。 |
| `title` | `string` | 显示名称，通常包含扩展名。 |
| `extension` | `string` | 不带点的扩展名，例如 `pdf`；图标映射按此值匹配。 |
| `size` | `number` | 文件大小，单位为字节。 |
| `pathname` | `string` | 文件路径元数据；链接通过 `fileUrl` 配置。 |
| `addedBy` / `addedDate` | `string` | 添加者与添加时间元数据，列表默认不展示；无值时可传空字符串。 |
| `thumbnail` | `string`，可选 | 缩略图地址。 |
| `downloads` / `deleted` | `number` / `boolean`，可选 | 业务元数据，不会自动生成下载或删除操作。 |
| `file` | `File`，可选 | 原生文件；可用于自动补齐信息和生成图片预览。 |

省略 `id` 或使用空字符串时，组件自动生成标识；数字 `0` 会保留。更新或排序时保留原对象可维持自动 ID；同一 `File` 作为多条记录时，请保留各条记录对象，或显式指定不同 ID。输入对象不会被组件修改。

`FileInfoLike`、`FileInfo`、`OriginFileInfo`、`FileListProps`、`FileListMode`、`FileIconSetting`、`FileIconMap` 和 `FileIconGetter` 均从 `@zui/file-list` 导出。Preact 组件入口为 `@zui/file-list/react`。

## 事件、更新与销毁

- `onClickItem({item, index, event})`：点击文件条目；配置形式继承 List。
- `instance.render({items: nextFiles})`：替换显示数据。
- `instance.render({thumbnail: false})`：关闭缩略图。
- `instance.destroy()`：销毁列表并释放组件生成的预览 URL；调用方提供的 URL 由调用方管理。

`render()` 可只传需要更新的选项。替换或移除文件、关闭缩略图时，组件会清理不再使用的原生图片预览 URL。设置真实文件地址时，下载权限由业务系统处理。

## 样式定制

`mode` 会生成对应的 `.file-list-cards`、`.file-list-cards-inline` 或 `.file-list-grid` 类名；内联卡片同时具有两个卡片类名。需要定制单个列表时，可通过 `className` 添加业务类名，避免影响其他实例。

| CSS 变量 | 来源 | 作用 |
| --- | --- | --- |
| `--file-list-grid-cell-width` | `gridCellWidth`，默认 `120px` | 网格单元格宽度。 |
| `--file-list-grid-gap` | `gridGap`，默认 `8px` | 网格行列间距。 |

网格变量由选项写入行内样式，调整时优先使用 `gridCellWidth` 和 `gridGap`。缩略图通过 `thumbnail` 传入 [Avatar 选项](/lib/components/avatar/) 定制。

## 无障碍与接入

文件操作优先提供 `text`；仅用图标时，通过 `hint` 提供提示，必要时使用 `attrs: {'aria-label': '下载文件'}` 指定可访问名称。网格操作按钮支持 Tab / Shift+Tab 聚焦，并在获得焦点时显示。缩略图悬停预览按 Escape 关闭，重要信息应同时以文件名或文字提供。

选择文件的输入框通过 `label` 关联名称。框架接入见[在 React 中使用 ZUI vanilla 组件](/lib/basic/core/use-zui-in-react.html)。

<script setup>
const filesBasicOptions = {items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}]};

const filesIconsOptions = {items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}], fileIcon: {pdf: 'file-pdf'}, fileUrl: '#filesIcons'};

const filesMultilineOptions = {
    items: [{id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'}],
    multiline: true,
    thumbnail: true,
    fileIcon: {pdf: 'file-pdf'},
    fileSizeFormat: '大小：{size}',
};

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

const filesGridOptions = {
    items: [
        {id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'},
        {id: 'design', title: '界面设计与附件展示规范.pdf', extension: 'pdf', size: 8192, pathname: 'design.pdf', addedBy: '团队', addedDate: '2026-09-02'},
    ],
    mode: 'grid',
    gridCellWidth: 132,
    gridGap: 12,
    multiline: true,
    thumbnail: true,
    fileIcon: {pdf: 'file-pdf'},
    hoverItemActions: true,
    fileActions(file) {
        return [{text: '查看', icon: 'eye-open', onClick() {
            document.querySelector('#filesGridResult').textContent = '已选择：' + file.title;
        }}];
    },
};

const filesLimitedOptions = {
    items: [
        {id: 'guide', title: '使用指南.pdf', extension: 'pdf', size: 2048, pathname: 'guide.pdf', addedBy: '团队', addedDate: '2026-09-01'},
        {id: 'design', title: '设计说明.pdf', extension: 'pdf', size: 4096, pathname: 'design.pdf', addedBy: '团队', addedDate: '2026-09-02'},
        {id: 'notes', title: '会议记录.txt', extension: 'txt', size: 1024, pathname: 'notes.txt', addedBy: '团队', addedDate: '2026-09-03'},
    ],
    maxVisibleItems: 2,
    showMoreStep: 1,
    showMoreText: '显示更多（剩余 {count} 个）',
};

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
