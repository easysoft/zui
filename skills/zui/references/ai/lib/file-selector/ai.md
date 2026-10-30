# 文件选择器

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"file-selector","summary":"选择、预览、校验、重命名与移除文件，支持静态文件回显及图片网格。","keywords":["文件选择器","file-selector","FileSelector","ImageSelector"]}
```

## overview

选择、预览、校验、重命名与移除文件，支持静态文件回显及图片网格。

只管理文件选择与表单字段，不执行网络上传。`FileSelector` 默认 button 模式，`ImageSelector` 继承它并默认 grid 模式、图片 accept。`value` 是 defaultFiles 的初始化别名，不是自动跟随 Props 的受控值；后续替换使用视图 setFiles/setValue。默认单文件上限 100MB；设置 totalFileSize 后单文件上限不会超过总上限。multiple 未设置时由 name 是否以 [] 结尾决定，maxFileCount=1 强制单选，maxFileCount=0 不限数量。

`selectFiles` 依序检查数量、重复、单文件与总大小；`onSelect`/`onAdd` 返回 false 取消，onRemove/onRename 支持 Promise 并可返回 false。onDuplicated/onExceeded* 返回 true 表示已处理提示，不代表放行违规文件。默认同名不允许；checkBuffer 可进行 Blob 内容比较。`files` 返回待提交真实 FileList，`state.files` 包括静态回显；size/count 统计展示列表。deleteName/renameName 用于回显文件的删除/重命名提交信息。FileSize 数字为字节，单位串经 convertBytes 转换。需要浏览器 File/DataTransfer API，移除或重命名不修改服务器资源。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/file-selector`](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/file-selector/react`](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/file-selector` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-file-selector

```json
{"name":"FileSelector","summary":"创建和管理 FileSelector 原生实例。"}
```

入口：`import {FileSelector} from '@zui/file-selector';`。

构造 `new FileSelector(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

静态 `replace=true`：可能替换宿主节点，销毁后不要假设原节点仍在文档中。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {FileSelector} from '@zui/file-selector';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new FileSelector(host, {name: 'files[]', maxFileCount: 3});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[FileSelector](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/vanilla/file-selector.ts>)。

### vanilla-image-selector

```json
{"name":"ImageSelector","summary":"创建和管理 ImageSelector 原生实例。"}
```

入口：`import {ImageSelector} from '@zui/file-selector';`。

构造 `new ImageSelector(selector, options?)`，宿主须真实存在。继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；首次异步渲染完成后通过实例 `$` 访问下节同名 Preact 视图的成员。`render(options?,reset?)` 更新，`destroy()` 卸载视图、监听及资源。

静态 `replace=true`：可能替换宿主节点，销毁后不要假设原节点仍在文档中。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {ImageSelector} from '@zui/file-selector';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new ImageSelector(host, {name: 'images[]', maxFileCount: 3});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[ImageSelector](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/vanilla/image-selector.ts>)。

## preact

### preact-file-selector

```json
{"name":"FileSelector","summary":"渲染 FileSelector Preact 视图。"}
```

入口：`import {FileSelector} from '@zui/file-selector/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

继承 [HElement](../core/ai.md#preact-helement)；通用 HTML 属性与自定义渲染能力见 [HElementProps](../core/ai.md#types-helement-props)。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps: Partial<FileSelectorProps> = {
        mode: 'button',
        fileIcons: 'file',
        renameBtn: true,
        removeBtn: true,
        draggable: true,
        thumbnail: true,
        maxFileCount: 0,
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `size` | `(): number` |
| `count` | `(): number` |
| `multiple` | `(): boolean` |
| `info` | `(): { size: string; maxFileSize: string; maxFileCount: number; count: number; }` |
| `files` | `(): FileList` |
| `getFile` | `(id: string): FileInfo \| undefined` |
| `getFileByName` | `(name: string): FileInfo \| undefined` |
| `select` | `(): void` |
| `setFiles` | `(files: (FileInfo \| StaticFileInfo \| File)[]): void` |
| `setValue` | `(value: (FileInfo \| StaticFileInfo \| File)[]): void` |
| `selectFiles` | `(files: FileList \| File[]): Promise<void>` |
| `findSameFile` | `(file: File): Promise<FileInfo \| undefined>` |
| `addFile` | `(file: File): Promise<boolean>` |
| `startRenameFile` | `(id: string): void` |
| `replaceFileName` | `(fileInfo: FileInfo, newName: string): File \| undefined` |
| `renameFile` | `(id: string, newName: string): Promise<void>` |
| `stopRenameFile` | `(): void` |
| `cancelRenameFile` | `(): void` |
| `removeFile` | `(id: string): Promise<void>` |
| `FileSelector.getExt` | `(name: string): string` |
| `FileSelector.getInfo` | `(file: FileInfo \| StaticFileInfo \| File): FileInfo` |
| `FileSelector.isAccept` | `(file: FileInfo \| File \| { type: string; name: string; }, accept: string \| string[]): boolean` |
| `FileSelector.isImage` | `(file: FileInfo \| File \| { type: string; name: string; }): boolean` |
| `FileSelector.filterFiles` | `(files: FileList \| (File \| { type: string; name: string; size: number; })[], accept: string \| undefined): FileList \| (File \| { type: string; name: string; size: number; })[]` |
| `FileSelector.isSame` | `(file1: Blob, file2: Blob): Promise<boolean>` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/file-selector';
import {FileSelector} from '@zui/file-selector/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<FileSelector name="files[]" maxFileCount={3} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[FileSelector](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/components/file-selector.tsx>)。

### preact-image-selector

```json
{"name":"ImageSelector","summary":"渲染 ImageSelector Preact 视图。"}
```

入口：`import {ImageSelector} from '@zui/file-selector/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

继承 [FileSelector](#preact-file-selector) 的 Props 和视图成员，并应用下面的覆盖。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps: Partial<ImageSelectorProps> = {
        ...FileSelector.defaultProps,
        mode: 'grid',
        accept: FileSelector.imageAccepts,
    };
```

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/file-selector';
import {ImageSelector} from '@zui/file-selector/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<ImageSelector name="images[]" maxFileCount={3} />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[ImageSelector](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/components/image-selector.tsx>)。

## web-components

无。公开入口未提供本库的自定义元素标签；Preact 注册或 `z-use-*` 自动初始化不等于 Web Components。

## css

### css-structure

```json
{"name": "结构与部件", "summary": "定义根节点和内部部件的样式。", "role": "js-component"}
```

选择器保留父子和同节点条件；生成部件由组件维护，不能仅添加类获得 JavaScript 行为。下表中标记“内部样式”的 token 仅说明 CSS 实现，不是额外公开类。

| 选择器或部件 | 功能/样式契约 |
| --- | --- |
| `.file-selector` | Flex 布局；纵向布局；`gap-2`（内部样式）；全宽 |
| `.file-selector-box` | 相对定位；`px-3`（内部样式）；`py-2`（内部样式）；`gap-0`（内部样式）；Flex 布局；`h-auto`（内部样式）；纵向布局；主轴居中；`bg-primary-50/30`（内部样式）；1px 边框；`border-dashed`（内部样式）；`border-primary-400`（内部样式）；`ring-transparent`（内部样式） |
| `.file-selector-box .text` | `text-primary-500`（内部样式） |
| `.file-selector-btn` | 相对定位；Flex 布局；`gap-2`（内部样式）；交叉轴居中 |
| `.file-selector-input` | 绝对定位；`inset-0`（内部样式）；`opacity-10`（内部样式）；指针光标；`appearance-none`（内部样式） |
| `.file-selector-tip` | `text-gray-400`（内部样式） |
| `.file-selector-item .item-avatar` | `text-gray-500`（内部样式）；`bg-gray-50`（内部样式） |
| `.file-selector-item .item-subtitle` | `text-gray-400`（内部样式） |
| `.file-selector-item .item-content` | `flex-none`（内部样式）；`mr-1`（内部样式）；`max-w-full`（内部样式） |
| `.file-selector-item > .listitem:hover` | `bg-gray-500/5`（内部样式） |
| `.file-selector-rename-text` | 相对定位；`max-w-full`（内部样式）；`min-w-[100px]`（内部样式） |
| `.file-selector-rename-text > div` | 不可见；忽略指针命中；不换行；隐藏溢出 |
| `.file-selector-rename-input` | 绝对定位；`inset-0`（内部样式） |
| `.file-selector-grid` | `p-2`（内部样式）；`bg-surface-light`（内部样式）；Flex 布局；`flex-row`（内部样式）；允许换行；`gap-[--file-selector-grid-gap]`（内部样式）；`items-start`（内部样式）；1px 边框；`border-transparent`（内部样式）；主题圆角 |
| `.file-selector-grid-item` | `w-[--file-selector-grid-width]`（内部样式）；`h-[--file-selector-grid-height]`（内部样式） |
| `.file-selector-grid-btn` | `p-2`（内部样式）；`gap-0`（内部样式）；Flex 布局；纵向布局；主轴居中；`bg-primary-50/30`（内部样式）；1px 边框；`border-dashed`（内部样式）；`border-primary-400`（内部样式）；`ring-transparent`（内部样式）；`aspect-square`（内部样式）；`w-[--file-selector-grid-width]`（内部样式）；`h-auto`（内部样式） |
| `.file-selector-grid-btn .text` | `text-primary-500`（内部样式） |
| `.file-selector-grid-item .listitem` | 相对定位；全宽；全高；纵向布局；`p-0`（内部样式） |
| `.file-selector-grid-item .item-avatar` | 全宽；主题圆角；`text-gray-500`（内部样式）；1px 边框 |
| `.file-selector-grid-item .item-content, .file-selector-grid-item .toolbar` | 绝对定位；全宽；`aspect-square`（内部样式）；`top-0`（内部样式）；`right-0`（内部样式）；`left-0`（内部样式） |
| `.file-selector-grid-item .item-title` | 绝对定位；`-bottom-5`（内部样式）；小字号；`left-0`（内部样式）；`right-6`（内部样式）；隐藏溢出；不换行 |
| `.file-selector-grid-item .item-subtitle` | 绝对定位；`text-xs`（内部样式）；`bottom-1`（内部样式）；`left-1`（内部样式）；`bg-fore`（内部样式）；`text-canvas`（内部样式）；`px-1`（内部样式）；`rounded-full`（内部样式）；透明；`transition-opacity`（内部样式） |
| `.file-selector-grid-item:hover .item-subtitle` | 不透明 |
| `.file-selector-grid-item .toolbar .btn[data-remove-file]` | 绝对定位；`top-px`（内部样式）；`right-px`（内部样式）；`bg-inverse/50`（内部样式）；`text-canvas`（内部样式）；`p-1.5`（内部样式） |
| `.file-selector-grid-item .toolbar .btn[data-rename-file]` | 绝对定位；`-bottom-6`（内部样式）；`right-0`（内部样式）；`p-0`（内部样式） |
| `.file-selector-grid .file-selector-rename` | 绝对定位；`top-auto`（内部样式）；`bottom-0`（内部样式）；`h-6`（内部样式） |
| `.file-selector-grid .file-selector-rename-text` | 全宽 |
| `.file-selector-grid .file-selector-rename > .item-title` | 隐藏 |

来源：[src/style/file-selector.css](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/style/file-selector.css>)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.is-dragging .file-selector-box` | `border-solid`（内部样式） |
| `.is-dragging .file-selector-btn` | `bg-primary-50`（内部样式） |
| `.file-selector.is-mode-button` | `flex-col-reverse`（内部样式） |
| `.file-selector-list.is-empty` | 隐藏 |
| `.file-selector-item.is-renaming .item-avatar + .item-content` | max-width: calc(100% - 32px) |
| `.file-selector-grid-item .item-avatar.has-icon > .icon` | font-size: calc(var(--file-selector-grid-width) / 2) |
| `.is-dragging .file-selector-grid` | `bg-primary-50`（内部样式）；1px 边框；`border-primary-400`（内部样式） |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
## css-variables

### css-variables-config

```json
{"name":"CSS 变量","summary":"配置本库主题、尺寸和状态外观。"}
```

下表按实际声明节点列出默认表达式。主题颜色、圆角等上游变量见 [base](../base/ai.md) 与 [utilities](../utilities/ai.md#css-variables)；在表中所列实际节点覆盖，避免祖先值被组件同名声明盖过。长度按 CSS 单位、颜色按 CSS 颜色/渐变，opacity 为 0–1，duration/delay 为时间。

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--state-color` | `rgba(var(--color-primary-500-rgb), .05)` | 颜色 | `.file-selector-box` | `.file-selector-box` 的实际匹配元素 |
| `--state-color` | `rgba(var(--color-primary-500-rgb), .05)` | 颜色 | `.file-selector-grid-btn` | `.file-selector-grid-btn` 的实际匹配元素 |

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-file-size

```json
{"name":"FileSize","summary":"定义 FileSize 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FileSize = number | `${number}${'B' | 'KB' | 'MB' | 'GB' | 'TB'}`;
```

来源：[FileSize](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/types/file-size.ts>)。

### types-file-info

```json
{"name":"FileInfo","summary":"定义 FileInfo 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FileInfo = {
    name: string;
    size: number;
    id: string;
    type: string;
    ext: string;
    url?: string;
    file?: File;
};
```

来源：[FileInfo](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/types/file-info.ts>)。

### types-static-file-info

```json
{"name":"StaticFileInfo","summary":"定义 StaticFileInfo 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type StaticFileInfo = {
    name: string;
    size: FileSize;
    type?: string;
    id?: string;
    url?: string;
};
```

来源：[StaticFileInfo](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/types/static-file-info.ts>)。

### types-file-selector-mode

```json
{"name":"FileSelectorMode","summary":"定义 FileSelectorMode 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type FileSelectorMode = 'button' | 'box' | 'grid';
```

来源：[FileSelectorMode](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/types/file-selector-mode.ts>)。

### types-file-selector-props

```json
{"name":"FileSelectorProps","summary":"定义 FileSelectorProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface FileSelectorProps extends HElementProps {
    name?: string;
    deleteName?: string;
    renameName?: string;
    disabled?: boolean;
    accept?: string;
    mode?: FileSelectorMode;
    tip?: CustomContentType;
    thumbnail?: boolean;
    gridWidth?: SizeSetting;
    gridHeight?: SizeSetting;
    gridGap?: SizeSetting;
    defaultFiles?: (StaticFileInfo | FileInfo | File)[];
    /** Alias of defaultFiles. */
    value?: (StaticFileInfo | FileInfo | File)[];
    multiple?: boolean;
    itemProps?: Partial<ListitemProps> | ((file: FileInfo) => Partial<ListitemProps>);
    draggable?: boolean;
    fileIcons?: string | Record<'default' | (string & {}), IconType>;
    uploadBtn?: string | ButtonProps;
    renameBtn?: boolean | string | ButtonProps | ((file: FileInfo) => (boolean | string | ButtonProps));
    removeBtn?: boolean | string | ButtonProps | ((file: FileInfo) => (boolean | string | ButtonProps));
    removeConfirm?: string | ModalConfirmOptions;
    maxFileCount?: number;
    maxFileSize?: FileSize;
    totalFileSize?: FileSize;
    allowSameName?: boolean;
    checkBuffer?: boolean;
    duplicatedTip?: string | ModalAlertOptions;
    exceededSizeTip?: string | ModalAlertOptions;
    exceededTotalSizeTip?: string | ModalAlertOptions;
    exceededCountTip?: string | ModalAlertOptions;

    onSelect?: (files: File[] | FileList) => void | false;
    onAdd?: (file: FileInfo) => void | false;
    onRemove?: (file: FileInfo) => void | Promise<void | false>;
    onChange?: (event: Event) => void;
    onRename?: (newName: string, oldName: string, file: FileInfo) => void | false | Promise<void | false>;
    onDuplicated?: (name: string, currentFile: FileInfo, existFile: FileInfo) => void | true | Promise<void | true>;
    onExceededSize?: (limit: number, file: FileInfo) => void | true;
    onExceededTotalSize?: (limit: number, file: FileInfo) => void | true;
    onExceededCount?: (limit: number, file: FileInfo) => void | true;
}
```

来源：[FileSelectorProps](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/types/file-selector-props.ts>)。

### types-file-selector-state

```json
{"name":"FileSelectorState","summary":"定义 FileSelectorState 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface FileSelectorState {
    files: FileInfo[];
    renaming: string;
    inputKey: number;
    newName?: string;
    dragging?: boolean;
    deletedFiles?: string[];
    renamedFiles?: Record<string, string>;
}
```

来源：[FileSelectorState](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/types/file-selector-state.ts>)。

### types-image-selector-props

```json
{"name":"ImageSelectorProps","summary":"定义 ImageSelectorProps 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ImageSelectorProps = FileSelectorProps;
```

来源：[ImageSelectorProps](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/types/image-selector-props.ts>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

只管理文件选择与表单字段，不执行网络上传。`FileSelector` 默认 button 模式，`ImageSelector` 继承它并默认 grid 模式、图片 accept。`value` 是 defaultFiles 的初始化别名，不是自动跟随 Props 的受控值；后续替换使用视图 setFiles/setValue。默认单文件上限 100MB；设置 totalFileSize 后单文件上限不会超过总上限。multiple 未设置时由 name 是否以 [] 结尾决定，maxFileCount=1 强制单选，maxFileCount=0 不限数量。

`selectFiles` 依序检查数量、重复、单文件与总大小；`onSelect`/`onAdd` 返回 false 取消，onRemove/onRename 支持 Promise 并可返回 false。onDuplicated/onExceeded* 返回 true 表示已处理提示，不代表放行违规文件。默认同名不允许；checkBuffer 可进行 Blob 内容比较。`files` 返回待提交真实 FileList，`state.files` 包括静态回显；size/count 统计展示列表。deleteName/renameName 用于回显文件的删除/重命名提交信息。FileSize 数字为字节，单位串经 convertBytes 转换。需要浏览器 File/DataTransfer API，移除或重命名不修改服务器资源。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/file-selector/docs/lib/components/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/.agents/skills/zui-standards/references/consumption.md>)
