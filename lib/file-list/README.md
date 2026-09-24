# 文件列表

展示文件名称、大小、链接和操作按钮，支持 Preact 组件和原生构造器。

## 示例

默认不显示文件类型图标。

```html:example
<div id="fileList"></div>
```

## 可选图标

通过 `fileIcon` 指定图标；调用方负责引入相应图标资源。本例使用 `@zui/icons`，并通过 Preact 组件的 `FileList.getFileIconMap()` 取得对应映射。

```html:example
<div id="fileListWithIcons"></div>
```

`fileIcon` 支持以下配置：

| 值 | 行为 |
| --- | --- |
| `false` 或省略 | 不显示文件类型图标 |
| 字符串 | 所有文件使用同一图标 |
| 映射表 | 按文件扩展名指定图标，未命中时使用 `file` |
| `(file) => icon` | 按文件数据动态选择图标 |

## 卡片模式

卡片模式下，文件列表显示为卡片样式，每个文件显示为一张卡片，卡片上显示文件名称、大小、链接和操作按钮。

```html:example
<div id="fileListCards"></div>
```

卡片内联模式下，文件列表显示为卡片样式，每个文件显示为一张卡片，卡片上显示文件名称、大小、链接和操作按钮。

```html:example
<div id="fileListCardsInline"></div>
```

## 使用

```ts
import {FileList} from '@zui/file-list';

const fileList = new FileList('#files', {
    items: files,
    fileUrl: '/files/{id}',
    fileIcon: false,
});
```

Preact 组件从 `@zui/file-list/react` 导入。`FileInfo`、`FileListProps` 和图标配置类型从包主入口或 `/react` 导入。其余列表配置沿用 `@zui/list`。

```tsx
import {FileList} from '@zui/file-list/react';
import '@zui/icons';

<FileList items={files} fileIcon={{pdf: 'file-pdf', md: 'file-code'}} />;
```

## 原生文件

通过 `OriginFileInfo` 的 `{file}` 形式传入原生 `File`，可与已有 `FileInfo` 混合使用。组件自动读取文件名、扩展名（小写）、大小和目录选择时的相对路径，显式提供的元信息优先。

```ts
const file = new File(['Hello ZUI'], 'hello.txt', {type: 'text/plain'});
fileList.render({
    items: [{file}, {file: new File(['Notes'], 'notes.md'), title: '项目笔记'}],
});
```

省略 `id` 或设为空字符串时会自动生成 ID；同一列表实例中，同一个原生 `File` 或普通文件信息对象在更新、排序后保持 ID 不变，数字 `0` 和非空字符串 ID 会保留。组件不会修改传入对象。

图标、链接、操作及列表项回调均可取得补齐的元信息，原生文件引用保留在 `file` 字段中。原生文件没有的 `addedBy`、`addedDate` 以及未选择目录时的 `pathname` 默认为空字符串；链接仍通过 `fileUrl` 配置。
