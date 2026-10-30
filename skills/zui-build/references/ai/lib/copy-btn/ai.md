# 复制按钮

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"copy-btn","summary":"为按钮提供文本或 HTML 复制、成功提示及异步复制回调。","keywords":["复制按钮","copy-btn","CopyBtn"]}
```

## overview

为按钮提供文本或 HTML 复制、成功提示及异步复制回调。

`copy` 优先于 `target`；target 未显式提供 copy 时同时读取目标 text/html。`onCopy(content)` 可同步/异步返回替代内容，返回 false 取消，undefined 保留原内容；不要在 onCopy 中返回未定义形状的对象。`copy()` 返回 Promise，复制失败会拒绝；复制期间重复调用不再开始第二次任务。成功才显示 tooltip/overlay 并触发 `onCopied()`。finally 清除 copying 状态，destroy 清除提示计时器和 Tooltip。

底层使用 core 的 [copy](../core/ai.md#javascript-copy)；浏览器剪贴板权限和安全上下文条件仍适用。copyingClass/copiedClass 只是状态标记，其默认名称不自带本库 CSS。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/copy-btn`](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/copy-btn/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/copy-btn/react`](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/copy-btn/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/copy-btn` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-copy-btn

```json
{"name":"CopyBtn","summary":"创建和管理 CopyBtn 原生实例。"}
```

入口：`import {CopyBtn} from '@zui/copy-btn';`。

构造、实例查询和选项/事件基础契约见 [Component](../core/ai.md#vanilla-component)。`setOptions` 合并参数不等于重建 DOM；本类特定方法如下。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

默认值（类内源码声明参考，不是独立脚本）：

```ts
static DEFAULT: Partial<CopyBtnOptions> = {
        mode: 'tooltip',
        duration: 3000,
        copiedClass: 'is-copied',
        overlayClass: 'success-pale',
        copyingClass: 'is-copying',
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `getContent` | `(): Promise<false \| CopyContents \| undefined>` |
| `copy` | `(): Promise<void>` |
| `destroy` | `(): void` |

带类名前缀的是 static 方法；其余在实例/ref 上使用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {CopyBtn} from '@zui/copy-btn';

const host = document.createElement('button');
host.textContent = '操作';
document.body.append(host);
const instance = new CopyBtn(host, {copy: 'Hello ZUI', onCopied: () => console.log('copied')});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[CopyBtn](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/copy-btn/src/vanilla/copy-btn.ts>)。

## preact

### preact-copy-btn

```json
{"name":"CopyBtn","summary":"渲染 CopyBtn Preact 视图。"}
```

入口：`import {CopyBtn} from '@zui/copy-btn/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static DEFAULT: Partial<CopyBtnProps> = {
        ...CopyBtnVanilla.DEFAULT,
    } as Partial<CopyBtnProps>;
```

| 成员 | 签名与返回值 |
| --- | --- |
| `copyBtn` | `(): CopyBtn \| undefined` |
| `coyBtn` | `(): CopyBtn \| undefined` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/copy-btn';
import {CopyBtn} from '@zui/copy-btn/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<CopyBtn copy="Hello ZUI" text="复制" />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[CopyBtn](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/copy-btn/src/components/copy-btn.tsx>)。

## web-components

无。公开入口未提供本库的自定义元素标签；Preact 注册或 `z-use-*` 自动初始化不等于 Web Components。

## css

### css-copy-state

```json
{"name":"is-copying / is-copied","summary":"复制过程中由原生组件维护的状态标记。","role":"helper"}
```

默认 copyingClass/copiedClass 分别为 is-copying/is-copied，加在复制触发元素上；可通过选项重命名。本库没有专属样式，overlay 使用 utilities 的 success-pale 皮肤，Tooltip 样式来自 tooltip。示例见 vanilla CopyBtn。

## css-variables

本库没有新增可配置的 CSS 变量声明。依赖组件的变量按其 [AI 索引](../../ai.md) 查找；外部主题变量的使用不等于由本库定义。

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-copy-btn-options

```json
{"name":"CopyBtnOptions","summary":"定义 CopyBtnOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type CopyBtnOptions = {
    /**
     * 提示方式，可选值为 工具提示（'tooltip'） 或 内容覆盖（'overlay'）
     */
    mode?: 'tooltip' | 'overlay';

    /**
     * 工具提示选项
     */
    tooltipOptions?: Partial<TooltipOptions>;

    /**
     * 内容覆盖时的 CSS 类
     */
    overlayClass?: string;

    /**
     * 复制时的 CSS 类
     */
    copyingClass?: string;

    /**
     * 复制成功后的文本
     */
    copiedText?: string;

    /**
     * 复制成功后的图标
     */
    copiedIcon?: string | IconClass;

    /**
     * 复制成功后的类
     */
    copiedClass?: string;

    /**
     * 复制成功后的持续时间
     */
    duration?: number;

    /**
     * 复制按钮的目标元素
     */
    target?: Selector;

    /**
     * 复制内容
     */
    copy?: CopyContents;

    /**
     * 复制前的回调
     */
    onCopy?: (content: CopyContents | undefined) => (CopyContents | Promise<CopyContents> | void | false);

    /**
     * 复制成功后的回调
     */
    onCopied?: () => void;
};
```

来源：[CopyBtnOptions](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/copy-btn/src/types/copy-btn-options.ts>)。

### types-copy-btn-props

```json
{"name":"CopyBtnProps","summary":"定义 CopyBtnProps 的字段、参数或取值范围。"}
```

通过 `@zui/copy-btn/react` 使用 `import type` 导入。

```ts
export type CopyBtnProps = CopyBtnOptions & ButtonProps;
```

来源：[CopyBtnProps](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/copy-btn/src/components/copy-btn.tsx>)。

## recipes

常规集成使用前面的最小示例。vanilla 更新选项前保留实例，页面卸载时 destroy；Preact 切换 Props 更新，卸载用 `render(null, host)`。由 Preact 生成的 DOM、弹层和状态类不应同时由外部代码维护。

## constraints

`copy` 优先于 `target`；target 未显式提供 copy 时同时读取目标 text/html。`onCopy(content)` 可同步/异步返回替代内容，返回 false 取消，undefined 保留原内容；不要在 onCopy 中返回未定义形状的对象。`copy()` 返回 Promise，复制失败会拒绝；复制期间重复调用不再开始第二次任务。成功才显示 tooltip/overlay 并触发 `onCopied()`。finally 清除 copying 状态，destroy 清除提示计时器和 Tooltip。

底层使用 core 的 [copy](../core/ai.md#javascript-copy)；浏览器剪贴板权限和安全上下文条件仍适用。copyingClass/copiedClass 只是状态标记，其默认名称不自带本库 CSS。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/copy-btn/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/copy-btn/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/copy-btn/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/copy-btn/docs/lib/components/index.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/.agents/skills/zui-standards/references/consumption.md>)
