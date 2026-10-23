# 上传图片

## meta

```json
{"schemaVersion":1,"library":"upload-imgs","summary":"在 Upload 基础上提供图片预览网格和文件数量提示。","keywords":["上传图片","upload-imgs","UploadImgs"]}
```

## overview

在 Upload 基础上提供图片预览网格和文件数量提示。

继承 [Upload](../upload/ai.md#vanilla-upload) 的全部公开参数、回调、文件提交和清理约束，增加 totalCountText 模板。默认 draggable=true、showIcon=false、accept='image/jpg, image/jpeg, image/gif, image/png'、上传按钮文案“添加文件”；图像预览由 FileReader 读取为 data URL，destroy 时 abort 仍在读取的 FileReader。

不是上传服务，也不做图像压缩或格式转换。totalCountText 中两个 %s 当前都替换为 fileMap.size；静态模板可能包含 HTML，应使用应用自有文案。文件大小上限沿用 Upload 的累计字节语义。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/upload-imgs`](src/main.ts) 公开原生组件和相应类型。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/upload-imgs` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-upload-imgs

```json
{"name":"UploadImgs","summary":"创建和管理 UploadImgs 原生实例。"}
```

入口：`import {UploadImgs} from '@zui/upload-imgs';`。

构造、实例查询和选项/事件基础契约见 [Component](../core/ai.md#vanilla-component)。`setOptions` 合并参数不等于重建 DOM；本类特定方法如下。

继承 [Upload](../upload/ai.md#vanilla-upload)，下列是当前类新增或覆盖的成员。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

默认值（类内源码声明参考，不是独立脚本）：

```ts
static DEFAULT: Partial<UploadImgsOptions> = {
        ...Upload.DEFAULT,
        uploadText: '添加文件',
        renameBtn: true,
        renameText: '重命名',
        renameIcon: {className: 'i-edit', 'aria-hidden': true},
        renameClass: '',
        deleteBtn: true,
        deleteText: '删除',
        deleteIcon: {className: 'i-trash', 'aria-hidden': true},
        deleteClass: '',
        showIcon: false,
        multiple: true,
        limitSize: false,
        btnClass: '',
        draggable: true,
        accept: 'image/jpg, image/jpeg, image/gif, image/png',
        showSize: true,
        useIconBtn: true,
        totalCountText: '共 <span class="font-bold text-black">%s</span> 个文件 <span class="font-bold text-black">%s</span> 个文件等待上传。',
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
import {UploadImgs} from '@zui/upload-imgs';

const host = document.createElement('div');
host.textContent = '';
document.body.append(host);
const instance = new UploadImgs(host, {name: 'images[]', limitSize: '10MB'});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[UploadImgs](src/vanilla/upload-imgs.ts)。

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
| `.upload .upload-tip` | `text-[--color-slate-500]`（内部样式） |
| `.file-item > .img` | `w-[120px]`（内部样式）；`h-[120px]`（内部样式） |
| `.upload .file-item:hover .file-size` | Flex 布局 |

来源：[src/style/upload-imgs.css](src/style/upload-imgs.css)。最小结构由前面的组件示例生成。
## css-variables

本库没有新增可配置的 CSS 变量声明。依赖组件的变量按其 [AI 索引](../../ai.md) 查找；外部主题变量的使用不等于由本库定义。

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-upload-imgs-options

```json
{"name":"UploadImgsOptions","summary":"定义 UploadImgsOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type UploadImgsOptions = UploadOptions & Partial<{
    totalCountText: string;
}>;
```

来源：[UploadImgsOptions](src/types/upload-imgs-options.ts)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

继承 [Upload](../upload/ai.md#vanilla-upload) 的全部公开参数、回调、文件提交和清理约束，增加 totalCountText 模板。默认 draggable=true、showIcon=false、accept='image/jpg, image/jpeg, image/gif, image/png'、上传按钮文案“添加文件”；图像预览由 FileReader 读取为 data URL，destroy 时 abort 仍在读取的 FileReader。

不是上传服务，也不做图像压缩或格式转换。totalCountText 中两个 %s 当前都替换为 fileMap.size；静态模板可能包含 HTML，应使用应用自有文案。文件大小上限沿用 Upload 的累计字节语义。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](package.json)
- [主入口](src/main.ts)
- [正式文档](docs/lib/components/index.md)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](../../.agents/skills/zui-standards/references/consumption.md)
