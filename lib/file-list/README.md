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
