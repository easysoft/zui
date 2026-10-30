# 模态框

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"modal","summary":"提供静态模态框、动态内容对话框，以及 alert、confirm、prompt 异步交互。","keywords":["模态框","modal","ModalBase","Modal","ModalTrigger"]}
```

## overview

提供静态模态框、动态内容对话框，以及 alert、confirm、prompt 异步交互。

`ModalBase` 管理已有 `.modal > .modal-dialog > .modal-content` 结构；`Modal` 构建 custom/ajax/iframe 内容；`ModalTrigger` 为点击触发元素选择静态或动态对话框。基础默认 show=true、position=fit、keyboard/animation/backdrop/responsive=true、transTime=300ms。动态 Modal 默认 loadTimeout=10000ms、destroyOnHide=true。

`Modal.open(options)` 返回在 hidden 事件后 resolve 的 Promise<Modal>，不是“打开完成”Promise；需要立即持有实例时通过 options.ref 获取。`alert` 返回被选 action 字符串或 undefined，`confirm` 返回 boolean，`prompt` 返回输入字符串或 null（取消）。`show/hide` 返回是否执行成功，onHide 返回 false 可阻止关闭。公开事件是 show/shown/hide/hidden，均无额外载荷；不要推导 load/loaded 事件。hideOthers/closeOthers 会影响其他模态框，具体布局由 position/size 规则控制。

Ajax 模式会请求 url，`executeScript` 默认为 true，控制返回脚本的执行，内容应来自可信来源；iframe 的高度观察需要同源可读文档。销毁清除布局监听/观察器并卸载内容；不要把 ModalDialog 纯视图当作具有定位遮罩行为的完整 Modal。

## setup

环境：`workspace`。需要 ZUI 源码工作区的 TypeScript、`@zui/*` 别名和 Vite/PostCSS 配置；涉及 JSX 时使用 Preact，不能使用 React 或 hooks。页面需要 DOM 和基础主题，示例统一先导入 `@zui/base` 与 `@zui/utilities`。

主入口 [`@zui/modal`](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/main.ts>) 公开原生组件和相应类型。

Preact 入口 [`@zui/modal/react`](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/main-react.ts>)，其历史 `/react` 命名不表示 React 支持。为完整包含本库及依赖样式，JSX 示例同时导入主入口。

标准 npm 入口按目标包实际 `zui` / `zui/css` 导出核实，不能推导 `zui/modal` 子路径。普通浏览器脚本只在构建包含该库时使用 `zui` 全局成员；本页示例不声称已发布版本与源码一致。

## vanilla

### vanilla-modal-base

```json
{"name":"ModalBase","summary":"创建和管理 ModalBase 原生实例。"}
```

入口：`import {ModalBase} from '@zui/modal';`。

构造、实例查询和选项/事件基础契约见 [Component](../core/ai.md#vanilla-component)。`setOptions` 合并参数不等于重建 DOM；本类特定方法如下。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

默认值（类内源码声明参考，不是独立脚本）：

```ts
static DEFAULT: Partial<ModalBaseOptions> = {
        position: 'fit',
        show: true,
        keyboard: true,
        animation: true,
        backdrop: true,
        responsive: true,
        transTime: 300,
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `ModalBase.SELECTOR` | `(): string` |
| `modalElement` | `(): HTMLElement` |
| `shown` | `(): boolean` |
| `dialog` | `(): HTMLElement \| null` |
| `rob` | `(): ResizeObserver \| undefined` |
| `destroy` | `(): void` |
| `show` | `(options?: Partial<T> \| undefined): boolean` |
| `hideForOther` | `(): void` |
| `hide` | `(): boolean` |
| `layout` | `(position?: ModalPositionSetting \| undefined, size?: ModalSizeSetting \| undefined): void` |
| `ModalBase.last` | `(target?: string \| HTMLDivElement \| undefined): ModalBase<ModalBaseOptions> \| undefined` |
| `ModalBase.hide` | `(target?: string \| HTMLDivElement \| undefined): void` |
| `ModalBase.show` | `(target?: string \| HTMLDivElement \| undefined): void` |

带类名前缀的是 static 方法；其余在实例/ref 上使用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {ModalBase} from '@zui/modal';

const host = document.createElement('div');
host.className = 'modal';
host.innerHTML = '<div class="modal-dialog"><div class="modal-content"><div class="modal-body">内容</div></div></div>';
document.body.append(host);
const instance = new ModalBase(host, {show: true});
// 所属页面退出时：instance.destroy(); host.remove();
```

来源：[ModalBase](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/vanilla/modal-base.ts>)。

### vanilla-modal

```json
{"name":"Modal","summary":"创建和管理 Modal 原生实例。"}
```

入口：`import {Modal} from '@zui/modal';`。

构造、实例查询和选项/事件基础契约见 [Component](../core/ai.md#vanilla-component)。`setOptions` 合并参数不等于重建 DOM；本类特定方法如下。

继承 [ModalBase](#vanilla-modal-base)，下列是当前类新增或覆盖的成员。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

默认值（类内源码声明参考，不是独立脚本）：

```ts
static DEFAULT = {
        ...ModalBase.DEFAULT,
        loadTimeout: 10000,
        destroyOnHide: true,
    } as Partial<ModalOptions>;
```

| 成员 | 签名与返回值 |
| --- | --- |
| `id` | `(): string` |
| `loading` | `(): boolean \| undefined` |
| `shown` | `(): boolean` |
| `modalElement` | `(): HTMLElement` |
| `$emitter` | `(): Cash` |
| `autoDestroy` | `(delay?: number): void` |
| `show` | `(options?: Partial<T> \| undefined): boolean` |
| `destroy` | `(): void` |
| `buildDialog` | `(): Promise<boolean>` |
| `Modal.isValid` | `(modal: Modal<ModalOptions>): boolean` |
| `Modal.open` | `(options: ModalTypedOptions & { container?: string \| HTMLElement \| undefined; ref?: RefObject<Modal<ModalOptions>> \| undefined; }): Promise<Modal<ModalOptions>>` |
| `Modal.alert` | `(options: string \| Partial<ModalAlertOptions>): Promise<string \| undefined>` |
| `Modal.confirm` | `(options: string \| Partial<ModalConfirmOptions>): Promise<boolean>` |
| `Modal.prompt` | `(options: string \| Partial<ModalPromptOptions>): Promise<string \| null>` |

带类名前缀的是 static 方法；其余在实例/ref 上使用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {Modal} from '@zui/modal';

void Modal.open({type: 'custom', custom: {title: '说明', body: '对话框内容'}}).then(instance => {
    console.log('对话框已关闭', instance.shown);
    // 默认 destroyOnHide=true；不要把 then 当作打开完成。
});
```

来源：[Modal](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/vanilla/modal.tsx>)。

### vanilla-modal-trigger

```json
{"name":"ModalTrigger","summary":"创建和管理 ModalTrigger 原生实例。"}
```

入口：`import {ModalTrigger} from '@zui/modal';`。

构造、实例查询和选项/事件基础契约见 [Component](../core/ai.md#vanilla-component)。`setOptions` 合并参数不等于重建 DOM；本类特定方法如下。

参数与回调的完整字段、必填/可选及联合类型见 [types](#types)。未设置的可选字段没有统一默认值；以下显式默认值与 overview 中的运行时补充值共同适用。

| 成员 | 签名与返回值 |
| --- | --- |
| `modal` | `(): ModalBase<ModalBaseOptions> \| undefined` |
| `container` | `(): HTMLElement` |
| `show` | `(): boolean \| undefined` |
| `hide` | `(): boolean \| undefined` |

带类名前缀的是 static 方法；其余在实例/ref 上使用。

环境：`workspace`，在浏览器中执行；示例保留实例供页面生命周期清理。

```ts
import '@zui/base';
import '@zui/utilities';
import {ModalTrigger} from '@zui/modal';

const host = document.createElement('button');
host.textContent = '打开对话框';
document.body.append(host);
const instance = new ModalTrigger(host, {type: 'custom', custom: {title: '说明', body: '内容'}});
// 所属页面退出时：instance.modal?.destroy(); instance.destroy(); host.remove();
```

来源：[ModalTrigger](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/vanilla/modal-trigger.ts>)。

## preact

### preact-modal-dialog

```json
{"name":"ModalDialog","summary":"渲染 ModalDialog Preact 视图。"}
```

入口：`import {ModalDialog} from '@zui/modal/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps = {closeBtn: true};
```

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/modal';
import {ModalDialog} from '@zui/modal/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<ModalDialog title="标题" body="内容" />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[ModalDialog](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/component/modal-dialog.tsx>)。

### preact-modal-iframe-content

```json
{"name":"ModalIframeContent","summary":"渲染 ModalIframeContent Preact 视图。"}
```

入口：`import {ModalIframeContent} from '@zui/modal/react';`。Props 完整定义见 [types](#types)，与同名 vanilla wrapper 共享选项；ref 指向此 Preact 类实例，不能用 vanilla 类代替 JSX 组件。

默认值（类内源码声明参考，不是独立脚本；展开引用的基类默认值仍适用）：

```ts
static defaultProps: Partial<ModalIframeContentProps> = {
        watchHeight: true,
    };
```

| 成员 | 签名与返回值 |
| --- | --- |
| `iframeDoc` | `(): Document \| undefined` |

环境：`workspace`，需 Preact JSX 编译；挂载前导入样式，所属页面卸载时调用返回的清理函数。

```tsx
import {h, render} from 'preact';
import '@zui/base';
import '@zui/utilities';
import '@zui/modal';
import {ModalIframeContent} from '@zui/modal/react';

function mountExample() {
    const host = document.createElement('div');
    document.body.append(host);
    render(<ModalIframeContent url="about:blank" />, host);
    return () => {render(null, host); host.remove();};
}
const dispose = mountExample();
// 所属页面卸载时：dispose();
```

来源：[ModalIframeContent](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/component/modal-iframe-content.tsx>)。

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
| `.modal` | 隐藏；隐藏溢出；固定定位；`inset-0`（内部样式）；交叉轴居中；主轴居中；`z-modal`（内部样式）；`bg-[--modal-bg]`（内部样式） |
| `.modal.load-indicator::before` | `bg-transparent`（内部样式）；`transition-none`（内部样式） |
| `.modal-no-backdrop` | `bg-transparent`（内部样式）；忽略指针命中 |
| `.modal-hide` | 透明 |
| `.modal-dialog` | 相对定位；`bg-canvas`（内部样式）；`bg-opacity-90`（内部样式）；`shadow-2xl`（内部样式）；`max-h-screen`（内部样式）；`pointer-events-auto`（内部样式）；`ring-1`（内部样式）；`ring-inverse`（内部样式）；`ring-opacity-5`（内部样式）；`backdrop-blur`（内部样式）；`w-[--modal-base]`（内部样式）；`rounded-[--modal-radius]`（内部样式） |
| `.modal-content` | Flex 布局；纵向布局；全高；`max-h-screen`（内部样式） |
| `.modal-header` | 相对定位；`px-5`（内部样式）；`py-4`（内部样式）；Flex 布局；交叉轴居中；`flex-nowrap`（内部样式）；`flex-none`（内部样式）；`gap-4`（内部样式） |
| `.modal-title` | 加粗；大字号；`flex-auto`（内部样式） |
| `.modal-actions` | 绝对定位；`right-3`（内部样式）；`top-3`（内部样式）；`z-[15]`（内部样式） |
| `.modal-body` | `flex-auto`（内部样式）；`px-5`（内部样式）；`py-4`（内部样式）；可滚动溢出 |
| `.modal-footer` | `flex-none`（内部样式）；`p-5`（内部样式）；Flex 布局；交叉轴居中；`gap-3`（内部样式） |
| `.modal-iframe` | 全宽；`flex-auto`（内部样式） |
| `.modal-trans` | 透明；`duration-200`（内部样式）；`transition-opacity`（内部样式） |
| `.modal-trans > .modal-dialog` | transition-property: transform, opacity；透明；`scale-95`（内部样式）；`duration-300`（内部样式） |
| `.modal-alert .modal-footer` | `justify-end`（内部样式） |
| `.modal-alert .modal-header` | `-mb-4`（内部样式） |
| `.modal-alert .modal-body` | `whitespace-pre-line`（内部样式）；`break-words`（内部样式） |
| `.modal-alert .modal-actions + .modal-body` | `pr-12`（内部样式） |
| `.modal-alert .modal-header + .modal-actions + .modal-body` | `pr-5`（内部样式） |

来源：[src/style/vars.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/style/vars.css>), [src/style/modal.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/style/modal.css>), [src/style/modal-dialog.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/style/modal-dialog.css>), [src/style/modal-header.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/style/modal-header.css>), [src/style/modal-body.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/style/modal-body.css>), [src/style/modal-footer.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/style/modal-footer.css>), [src/style/modal-size.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/style/modal-size.css>), [src/style/modal-builder.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/style/modal-builder.css>), [src/style/modal-trans.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/style/modal-trans.css>), [src/style/modal-alert.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/style/modal-alert.css>)。最小结构由前面的组件示例生成。

### css-modifiers

```json
{"name": "状态与尺寸辅助类", "summary": "在指定组件节点和上下文中修改显示或交互外观。", "role": "helper"}
```

这些选择器要求已有本库根/部件结构。尺寸类可按选项配置；显示、加载、选择、只读等状态通常由 JS 组件维护，不应与实例状态分开修改。

| 条件选择器 | 效果 |
| --- | --- |
| `.modal.loading::after` | `text-canvas`（内部样式） |
| `.modal.loading .modal-dialog` | 透明 |
| `.modal.show` | Flex 布局 |
| `.loading > .modal-dialog > .modal-content` | 透明；不可见 |
| `.modal-dialog.loading` | `bg-transparent`（内部样式） |
| `.modal-dialog.loading > .modal-content` | 隐藏 |
| `.modal-dialog.size-full, .modal-dialog[data-size="full"]` | `w-screen`（内部样式）；`h-screen`（内部样式）；`rounded-none`（内部样式） |
| `.modal-dialog.size-sm, .modal-dialog[data-size="sm"]` | `w-[--modal-sm]`（内部样式） |
| `.modal-dialog.size-lg, .modal-dialog[data-size="lg"]` | `w-[--modal-lg]`（内部样式） |
| `.modal-dialog.size-xl, .modal-dialog[data-size="xl"]` | `w-[--modal-xl]`（内部样式） |
| `.modal-trans.in` | 不透明 |
| `.modal-trans.in > .modal-dialog` | 不透明；`scale-100`（内部样式） |

使用环境和组件最小示例见前文，需已加载基础样式及本库样式。
## css-variables

### css-variables-config

```json
{"name":"CSS 变量","summary":"配置本库主题、尺寸和状态外观。"}
```

下表按实际声明节点列出默认表达式。主题颜色、圆角等上游变量见 [base](../base/ai.md) 与 [utilities](../utilities/ai.md#css-variables)；在表中所列实际节点覆盖，避免祖先值被组件同名声明盖过。长度按 CSS 单位、颜色按 CSS 颜色/渐变，opacity 为 0–1，duration/delay 为时间。

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--modal-radius` | `var(--radius-lg)` | 圆角长度 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--modal-bg` | `rgba(var(--color-inverse-rgb), .4)` | 背景色或渐变 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--modal-sm` | `37.5rem` | 尺寸/间距长度 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--modal-base` | `50rem` | 尺寸/间距长度 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--modal-lg` | `75rem` | 尺寸/间距长度 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |
| `--modal-xl` | `90rem` | 尺寸/间距长度 | `:root` | 需要全局修改时 :root；局部在实际使用元素 |

## javascript

无。

## types

下列声明保留字段可选标记、完整参数/回调和联合类型；它们是 API 参考，不是可以单独粘贴执行的模块。跨库类型如 HElementProps、CustomContentType、MenuOptions 等分别遵循 [core](../core/ai.md#types)、[menu](../menu/ai.md#types)、[list](../list/ai.md#types)、[toolbar](../toolbar/ai.md#types) 的定义；DateLike 来自 [helpers](../helpers/ai.md#types)。未列默认值的可选项默认未设置，运行时明确默认值见对应组件条目与 overview。

### types-modal-position

```json
{"name":"ModalPosition","summary":"定义 ModalPosition 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalPosition = number | {left: number; top: number; width: number; height: number};
```

来源：[ModalPosition](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-position-setting.ts>)。

### types-modal-position-preset

```json
{"name":"ModalPositionPreset","summary":"定义 ModalPositionPreset 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalPositionPreset = 'fit' | 'center' | 'bottom' | 'top';
```

来源：[ModalPositionPreset](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-position-setting.ts>)。

### types-modal-position-callback

```json
{"name":"ModalPositionCallback","summary":"定义 ModalPositionCallback 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalPositionCallback = (size: {width: number; height: number}) => ModalPosition;
```

来源：[ModalPositionCallback](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-position-setting.ts>)。

### types-modal-position-setting

```json
{"name":"ModalPositionSetting","summary":"定义 ModalPositionSetting 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalPositionSetting = ModalPosition | ModalPositionPreset | ModalPositionCallback;
```

来源：[ModalPositionSetting](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-position-setting.ts>)。

### types-modal-backdrop-type

```json
{"name":"ModalBackdropType","summary":"定义 ModalBackdropType 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalBackdropType = 'static' | boolean;
```

来源：[ModalBackdropType](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-backdrop-type.ts>)。

### types-modal-size-preset

```json
{"name":"ModalSizePreset","summary":"定义 ModalSizePreset 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalSizePreset = 'sm' | 'lg' | 'md' | 'full';
```

来源：[ModalSizePreset](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-size-setting.ts>)。

### types-modal-size-setting

```json
{"name":"ModalSizeSetting","summary":"定义 ModalSizeSetting 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalSizeSetting = ModalSizePreset | number | {width: number; height: number};
```

来源：[ModalSizeSetting](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-size-setting.ts>)。

### types-modal-base-options

```json
{"name":"ModalBaseOptions","summary":"定义 ModalBaseOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalBaseOptions = {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    size?: ModalSizeSetting;
    position?: ModalPositionSetting;
    backdrop?: ModalBackdropType;
    show?: boolean;
    hideOthers?: boolean;
    closeOthers?: boolean;
    keyboard?: boolean;
    moveable?: boolean;
    animation?: boolean;
    transTime?: number;
    responsive?: boolean;
    onShown?: (this: ModalBase) => void;
    onHidden?: (this: ModalBase) => void;
    onShow?: (this: ModalBase) => void;
    onHide?: (this: ModalBase) => void | boolean;
};
```

来源：[ModalBaseOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-base-options.ts>)。

### types-modal-events

```json
{"name":"ModalEvents","summary":"定义 ModalEvents 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalEvents = {
    show: [];
    shown: [];
    hide: [];
    hidden: [];
};
```

来源：[ModalEvents](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-events.ts>)。

### types-modal-trigger-static-options

```json
{"name":"ModalTriggerStaticOptions","summary":"定义 ModalTriggerStaticOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalTriggerStaticOptions = ModalBaseOptions & {target?: string};
```

来源：[ModalTriggerStaticOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-trigger-options.ts>)。

### types-modal-trigger-options

```json
{"name":"ModalTriggerOptions","summary":"定义 ModalTriggerOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalTriggerOptions = (ModalOptions | ModalTriggerStaticOptions) & {
    container?: string | HTMLElement;
};
```

来源：[ModalTriggerOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-trigger-options.ts>)。

### types-modal-dialog-options

```json
{"name":"ModalDialogOptions","summary":"定义 ModalDialogOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalDialogOptions = {
    className?: ClassNameLike;
    contentClass?: ClassNameLike;
    bodyClass?: ClassNameLike;
    style?: JSX.CSSProperties;
    title?: ComponentChildren;
    header?: CustomContentType;
    headerClass?: ClassNameLike;
    body?: CustomContentType;
    actions?: ToolbarOptions;
    closeBtn?: boolean;
    children?: ComponentChildren;
    footer?: CustomContentType;
    footerClass?: ClassNameLike;
    footerActions?: ToolbarOptions;
    waitShowEvent?: string;
    afterRender?: (info: {firstRender: boolean}) => void;
    beforeDestroy?: () => void;
};
```

来源：[ModalDialogOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-dialog-options.ts>)。

### types-modal-dialog-state

```json
{"name":"ModalDialogState","summary":"定义 ModalDialogState 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalDialogState = {
    showed?: boolean;
};
```

来源：[ModalDialogState](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-dialog-state.ts>)。

### types-modal-options

```json
{"name":"ModalOptions","summary":"定义 ModalOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalOptions = ModalBaseOptions & {
    type: string;
    id?: string;
    key?: string;
    loadingText?: string;
    loadTimeout?: number;
    loadingClass?: string;
    failedTip?: string;
    timeoutTip?: string;
    title?: string;
    destroyOnHide?: boolean;
    modal?: boolean;
    cache?: boolean;
    [prop: string]: unknown;
};
```

来源：[ModalOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-options.ts>)。

### types-modal-custom-options

```json
{"name":"ModalCustomOptions","summary":"定义 ModalCustomOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface ModalCustomOptions extends ModalOptions {
    type: 'custom';
    closeBtn?: boolean;
    content?: CustomContentType;
    custom: ModalDialogOptions | (() => ModalDialogOptions);
}
```

来源：[ModalCustomOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-options.ts>)。

### types-modal-ajax-options

```json
{"name":"ModalAjaxOptions","summary":"定义 ModalAjaxOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface ModalAjaxOptions extends ModalOptions {
    type: 'ajax';
    url: string;
    request?: RequestInit;
    dataType?: 'json' | 'html' | 'text';
    replace?: boolean;
    custom?: Partial<ModalDialogOptions>;
    executeScript?: boolean;
}
```

来源：[ModalAjaxOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-options.ts>)。

### types-modal-iframe-options

```json
{"name":"ModalIframeOptions","summary":"定义 ModalIframeOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface ModalIframeOptions extends ModalOptions {
    type: 'iframe';
    url: string;
    custom?: Partial<ModalDialogOptions>;
}
```

来源：[ModalIframeOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-options.ts>)。

### types-modal-alert-options

```json
{"name":"ModalAlertOptions","summary":"定义 ModalAlertOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface ModalAlertOptions extends ModalCustomOptions {
    message: CustomContentType;
    icon?: IconType;
    iconClass?: string;
    actions?: ToolbarItemOptions[] | string | string[];
    onClickAction?: (item: ToolbarItemOptions, modal: Modal) => false | void;
}
```

来源：[ModalAlertOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-options.ts>)。

### types-modal-confirm-options

```json
{"name":"ModalConfirmOptions","summary":"定义 ModalConfirmOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface ModalConfirmOptions extends ModalAlertOptions {
    onResult?: (confirmed: boolean, modal: Modal) => void;
}
```

来源：[ModalConfirmOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-options.ts>)。

### types-modal-prompt-options

```json
{"name":"ModalPromptOptions","summary":"定义 ModalPromptOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export interface ModalPromptOptions extends ModalAlertOptions {
    defaultValue?: string;
    placeholder?: string;
    multiline?: boolean;
    onResult?: (value: string, modal: Modal) => void;
}
```

来源：[ModalPromptOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-options.ts>)。

### types-modal-typed-options

```json
{"name":"ModalTypedOptions","summary":"定义 ModalTypedOptions 的字段、参数或取值范围。"}
```

通过 主入口 使用 `import type` 导入。

```ts
export type ModalTypedOptions = ModalCustomOptions | ModalAjaxOptions | ModalIframeOptions;
```

来源：[ModalTypedOptions](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/types/modal-options.ts>)。

### types-modal-iframe-content-props

```json
{"name":"ModalIframeContentProps","summary":"定义 ModalIframeContentProps 的字段、参数或取值范围。"}
```

通过 `@zui/modal/react` 使用 `import type` 导入。

```ts
export type ModalIframeContentProps = {
    url: string;
    watchHeight?: boolean;
    iframeBodyClass?: string;
    onLoad?: (this: ModalIframeContent) => void;
};
```

来源：[ModalIframeContentProps](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/component/modal-iframe-content.tsx>)。

## recipes

### recipe-confirm

```json
{"name":"确认后执行动作","summary":"使用 Promise 获得用户的确认结果。"}
```

环境：`workspace`，页面加载 base、utilities 和 modal。

```ts
import '@zui/base';
import '@zui/utilities';
import {Modal} from '@zui/modal';

async function confirmAction() {
    if (await Modal.confirm('继续操作？')) {
        console.log('已确认');
    }
}
void confirmAction();
```

## constraints

带背景遮罩的最上层 Modal 将 Tab／Shift+Tab 焦点限制在当前 `.modal-dialog` 的可用控件内，跳过隐藏、禁用和 inert 内容；无可聚焦控件时回到对话框本身。`keyboard: false` 仅禁止 Escape 关闭，焦点循环仍生效；`backdrop: false` 不限制 Tab。子控件已取消默认键盘行为时 Modal 不再接管。跨域 iframe 内部的键盘事件不进入父文档，该路径需宿主另行处理。

`ModalBase` 管理已有 `.modal > .modal-dialog > .modal-content` 结构；`Modal` 构建 custom/ajax/iframe 内容；`ModalTrigger` 为点击触发元素选择静态或动态对话框。基础默认 show=true、position=fit、keyboard/animation/backdrop/responsive=true、transTime=300ms。动态 Modal 默认 loadTimeout=10000ms、destroyOnHide=true。

`Modal.open(options)` 返回在 hidden 事件后 resolve 的 Promise<Modal>，不是“打开完成”Promise；需要立即持有实例时通过 options.ref 获取。`alert` 返回被选 action 字符串或 undefined，`confirm` 返回 boolean，`prompt` 返回输入字符串或 null（取消）。`show/hide` 返回是否执行成功，onHide 返回 false 可阻止关闭。公开事件是 show/shown/hide/hidden，均无额外载荷；不要推导 load/loaded 事件。hideOthers/closeOthers 会影响其他模态框，具体布局由 position/size 规则控制。

Ajax 模式会请求 url，`executeScript` 默认为 true，控制返回脚本的执行，内容应来自可信来源；iframe 的高度观察需要同源可读文档。销毁清除布局监听/观察器并卸载内容；不要把 ModalDialog 纯视图当作具有定位遮罩行为的完整 Modal。

本页依据当前源码入口、类型和实际默认分支整理；结构检查不代表浏览器交互验收。不要推断未公开的深层入口、未导出的类型或未注册的自定义元素。

## references

- [包元信息](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/src/main-react.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/modal/docs/lib/components/trigger.md>)
- [组件生命周期](../core/ai.md#vanilla-component)
- [工作区与发布消费边界](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/.agents/skills/zui-standards/references/consumption.md>)
