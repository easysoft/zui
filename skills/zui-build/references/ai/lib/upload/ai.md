# 上传文件

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"upload","summary":"提供文件选择列表、拖放、重命名与大小数量限制，供表单提交文件。","keywords":["上传文件","upload","Upload"]}
```

## overview

提供文件选择列表、拖放、重命名与大小数量限制，供表单提交文件。

本库只选择、管理并填充隐藏 `<input type=file>`，没有 url/request 或网络上传接口。name 必填且用作 input 的 name/id，应在页面内唯一；表单提交由使用方实现。multiple 默认 true，false 时 limitCount 强制 1；limitSize=false 默认不限，多选时限制的是累计总字节数，单选限制该文件大小。

onAdd(file) 必须返回要加入的 File（可替换）或 null 取消；onDelete、onRename(newName,oldName)、onSizeChange(totalBytes) 通知变化。新增同名文件自动追加 (1)；onDuplicated 用于重命名时与现有文件重名的提示，不阻止新增文件的自动改名。accept 支持 MIME、MIME/*、扩展名。defaultFileList 是初始 File[]，不能用 URL 对象代替。核心添加/删除/重命名方法是 protected/private，不作为外部实例 API。

setOptions 只修改配置；初始化生成的 input/list 不会因任意 render 更新而重建，需改结构时销毁后重建。destroy 清理移除计时器及 Tooltip；宿主的 DOM 清理由所属页面按需处理。新项目需要静态文件回显可选择 [FileSelector](../file-selector/ai.md)。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/upload`](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/upload/src/main.ts>) 公开原生组件和相应类型。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/upload` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-upload

```json
{"name":"Upload","summary":"创建和管理 Upload 原生实例。"}
```

入口：`import {Upload} from '@zui/upload';`。

构造、实例查询和选项/事件基础契约见 [Component](../core/ai.md#vanilla-component)。`setOptions` 合并参数不等于重建 DOM；本类特定方法如下。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

默认值（类内源码声明参考，不是独立脚本）：

```ts
static DEFAULT: Partial<UploadOptions> = {
        uploadText: '上传文件',
        confirmText: '确定',
        cancelText: '取消',
        useIconBtn: true,
        renameBtn: true,
        renameText: '重命名',
        renameIcon: {className: 'i-edit', 'aria-hidden': true},
        renameClass: '',
        deleteBtn: true,
        deleteText: '删除',
        deleteIcon: {className: 'i-trash', 'aria-hidden': true},
        deleteClass: '',
        showIcon: true,
        multiple: true,
        listPosition: 'bottom',
        limitSize: false,
        icon: 'file-o',
        btnClass: '',
        tip: '',
        draggable: false,
        showSize: true,
        onAdd: file => file,
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `destroy` | `(): void` |

带类名前缀的是 static 方法；其余在实例/ref 上使用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {Upload} from '@zui/upload';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new Upload(host, {name: 'files[]', limitSize: '10MB'});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[Upload](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/upload/src/vanilla/upload.ts>)。

## preact

无。

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
| `.upload .upload-tip` | `text-gray-400`（内部样式） |
| `.upload .draggable-area` | border: 1px dashed var(--color-primary-300)；`bg-primary-50/20`（内部样式） |
| `.upload .draggable-area.dragover` | `bg-primary-500/10`（内部样式）；`border-solid`（内部样式） |

来源：[src/style/upload.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/upload/src/style/upload.css>)。最小结构由前面的组件示例生成。
## css-variables

本库没有新增可配置的 CSS 变量声明。依赖组件的变量按其 [AI 索引](../../ai.md) 查找；外部主题变量的使用不等于由本库定义。

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-upload-options

```json
{"name":"UploadOptions","summary":"定义 UploadOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type UploadOptions = {
    name: string;
} & Partial<{
    icon: string | IconClass;
    showIcon: boolean;
    showSize: boolean;
    multiple: boolean;
    listPosition: 'bottom' | 'top';
    uploadText: string;
    uploadIcon: string | IconClass;
    renameBtn: boolean;
    renameIcon: string | IconClass;
    renameText: string;
    renameClass: string;
    deleteBtn: boolean;
    deleteIcon: string | IconClass;
    deleteText: string;
    deleteClass: string;
    confirmText: string;
    cancelText: string;
    useIconBtn: boolean;
    tip: string;
    btnClass: string;
    onAdd: (file: File) => File | null;
    onDelete: (file: File) => void;
    onRename: (newName: string, oldName: string) => void;
    onSizeChange: (size: number) => void;
    draggable: boolean;
    limitCount: number;
    accept: string;
    defaultFileList: File[];
    limitSize: `${number}${'B' | 'KB' | 'MB' | 'GB'}` | false;
    duplicatedHint: string;
    onDuplicated: (name: string) => void;
    exceededSizeHint: string;
    onExceededSize: (limit: number) => void;
    exceededCountHint: string;
    onExceededCount: (limit: number) => void;
}>;
```

来源：[UploadOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/upload/src/types/upload-options.ts>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

本库只选择、管理并填充隐藏 `<input type=file>`，没有 url/request 或网络上传接口。name 必填且用作 input 的 name/id，应在页面内唯一；表单提交由使用方实现。multiple 默认 true，false 时 limitCount 强制 1；limitSize=false 默认不限，多选时限制的是累计总字节数，单选限制该文件大小。

onAdd(file) 必须返回要加入的 File（可替换）或 null 取消；onDelete、onRename(newName,oldName)、onSizeChange(totalBytes) 通知变化。新增同名文件自动追加 (1)；onDuplicated 用于重命名时与现有文件重名的提示，不阻止新增文件的自动改名。accept 支持 MIME、MIME/*、扩展名。defaultFileList 是初始 File[]，不能用 URL 对象代替。核心添加/删除/重命名方法是 protected/private，不作为外部实例 API。

setOptions 只修改配置；初始化生成的 input/list 不会因任意 render 更新而重建，需改结构时销毁后重建。destroy 清理移除计时器及 Tooltip；宿主的 DOM 清理由所属页面按需处理。新项目需要静态文件回显可选择 [FileSelector](../file-selector/ai.md)。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/upload/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/upload/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/upload/docs/lib/components/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/.agents/skills/zui-standards/references/consumption.md>)
