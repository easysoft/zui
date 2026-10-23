# JSON UI

## meta

```json
{
  "schemaVersion": 1,
  "library": "json-ui",
  "summary": "将 JSON 节点渲染为已注册组件，连接宿主事件并约束内容权限。",
  "keywords": [
    "JSON UI",
    "声明式界面",
    "宿主动作",
    "JsonUI",
    "validateJsonUI"
  ]
}
```

## overview

将 `JsonUINode` 节点树渲染为原生元素或已经注册的 Preact 组件，适用于配置化界面、宿主预览或 AI 返回的受约束 UI 描述。schema 是 UI 数据，不是 JSON Schema 标准，也不是某个业务表单库的字段协议。业务数据、组件联动和事件副作用由宿主维护；本库不提供内置状态协议、表达式或动作脚本。

渲染复用 core 的 CustomContent 与组件注册表；公开 API 为 JsonUI 构造器/Preact 组件、validateJsonUI、JsonUIError 和类型。JsonUIRuntime 是内部实现，未从公共入口导出，不能跨库导入。

## setup

workspace：原生类与类型从 `@zui/json-ui` 导入，Preact 从 `@zui/json-ui/react` 导入；两入口都导出 validateJsonUI 与全部公开类型。主入口执行 JsonUI.register() 并登记 Preact JsonUI。/react 需要 Preact JSX/TypeScript 配置。browser：使用包含本库的 `zui.JsonUI` 与 `zui.validateJsonUI`。npm：以目标包 `zui` 的真实导出为准，不推断 `zui/json-ui` 子路径。

本库没有独立 CSS。必须事先加载 schema 使用的组件、注册表与样式；不会按 component 名自动下载。`component` 名不区分大小写，`tag` 永远表示原生元素。宿主可用 core.registerReactComponent() 注册自己的 Preact 组件。依赖 core/DOMPurify 的浏览器 DOM 环境，不把聚合入口当作无 DOM 的 Node API。

## vanilla

### vanilla-json-ui

```json
{"name": "JsonUI", "summary": "创建或更新 JSON 节点界面，并在销毁时卸载子树。"}
```

`new JsonUI(selector, options: JsonUIProps)`；schema 必填。宿主选项见 [JsonUIOptions](#types-json-ui)。生命周期、render、事件和 `$` ref 继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)。初始化渲染在下一动画帧完成。

| 方法或属性 | 参数与返回 | 行为 |
| --- | --- | --- |
| `render(options?, reset?)` | `Partial<JsonUIProps>`；`reset?: boolean`，默认 false；返回 void | 默认合并配置并重新渲染；reset 使用继承的配置重置行为，不提供业务状态重置 API |
| `$` | `JsonUI` Preact 实例或 null | 挂载后可访问底层实例；本库没有额外状态读写方法 |
| `destroy()` | 无参数，返回 void | 卸载子树、终止其中的 LazyContent 请求并释放继承资源；宿主节点由调用者按需移除 |

workspace（完整示例）：

```ts
import '@zui/base';
import '@zui/button';
import {JsonUI} from '@zui/json-ui';
const host = document.createElement('div');
document.body.append(host);
const view = new JsonUI(host, {
    schema: {component: 'Button', props: {text: '保存'}, events: {onClick: 'save'}},
    actions: {save: () => console.log('保存')},
    onError: error => console.error(error.path, error.message),
});
// 更新：view.render({schema: {tag: 'p', children: '已保存'}});
// 离开页面：view.destroy(); host.remove();
```

## preact

### preact-json-ui

```json
{"name": "JsonUI", "summary": "使用 Preact 渲染 JSON 节点树并保留上次有效界面。"}
```

Props 与原生选项一致。它是 Preact Component 子类，不是 HElement 子类，没有自动透传任意根 DOM 属性；外层容器由调用者提供。业务数据和事件逻辑由宿主管理，通过新的 schema/props 更新视图。

非法 schema 更新会通知 onError，并保留上次编译成功的界面和运行时选项；首次失败显示错误占位。actions/renderMarkdown/onError 更新在成功渲染后生效；只更新这些回调不会自动重新请求已加载的 lazy 内容。capabilities 与 allowRequest 在创建时固定，修改权限应卸载重建。

workspace（JSX，完整示例）：

```tsx
import '@zui/base';
import {render} from 'preact';
import {JsonUI} from '@zui/json-ui/react';
import type {JsonUINode} from '@zui/json-ui';
const host = document.createElement('div');
document.body.append(host);
const schema: JsonUINode = {
    tag: 'button',
    props: {type: 'button'},
    children: '保存',
    events: {onClick: 'save'},
};
render(<JsonUI schema={schema} actions={{save: () => console.log('保存')}} />, host);
// 离开页面：render(null, host); host.remove();
```

不使用 hooks；卸载时会清理子树组件的资源。

## web-components

无。

## css

### css-json-ui-error

```json
{"name": ".json-ui-error", "summary": "标识内容或协议失败时生成的错误占位。", "role": "js-component"}
```

运行时生成 `<span role="alert" class="json-ui-error">路径及错误信息</span>`；本库没有对应默认 CSS，应用可自行设置外观。不要靠增删此类控制错误状态。实际组件及 LazyContent 生成的类和变量分别归其所属库。

## css-variables

无。

## javascript

### javascript-validate

```json
{"name": "validateJsonUI", "summary": "不渲染、不加载远程内容地校验 JSON 节点协议。"}
```

workspace：

```ts
import {validateJsonUI} from '@zui/json-ui';
const errors = validateJsonUI({tag: 'p', children: '说明'});
if (errors.length) console.error(errors[0].path, errors[0].message);
```

签名 `validateJsonUI(schema: unknown, options?: JsonUIOptions): JsonUIError[]`。返回空数组表示当前节点结构、注册组件、宿主动作引用和内容权限检查通过；失败仅返回首个错误，不收集所有分支错误。校验不调用宿主 actions/renderMarkdown，不发送 lazy 请求，也不逐项验证目标组件的业务 props。

校验带事件的节点时应传入与实际渲染相同的 actions，校验 HTML 或跨源 lazy 内容时也应提供相同权限选项。远程 custom 响应到达后仍须重新校验，不由初次 validateJsonUI 结果保证。

### javascript-error

```json
{"name": "JsonUIError", "summary": "提供包含 JSON 路径的标准错误。"}
```

`new JsonUIError(path: string, message: string)`；继承 Error，name=`JsonUIError`，只读 path 保存路径，message=`${path}: ${message}`。输入错误常见路径 `$`、`$.children[0]`；内部 CustomContent 常用 `$content`，远程内容路径以 `.response` 结尾。

渲染与内容策略错误传给 onError，同一错误对象在运行时只报告一次。宿主 actions 直接按目标组件的调用方式执行，其抛错与异步失败不保证转交 onError，宿主自行处理。

## types

### types-json-ui

```json
{"name": "JsonUIProps / JsonUIOptions 与完整协议类型", "summary": "定义公开节点、宿主动作和权限类型。"}
```

以下为当前公共类型；所有协议节点只能放 JSON 数据，函数仅存在于宿主选项。类型的可选字段还须遵守后续运行时限制。

```ts
import type {ComponentChildren} from 'preact';

/** Serializable values passed to component properties. */
export type JsonUIValue = null | boolean | number | string | JsonUIValue[] | {[key: string]: JsonUIValue};

export type JsonUIElement = {
    key?: string | number;
    tag?: keyof HTMLElementTagNameMap;
    component?: string;
    props?: Record<string, JsonUIValue>;
    children?: JsonUINode;
    events?: Record<string, string>;
};

export type JsonUIHTML = {
    key?: string | number;
    html: string;
    tag?: keyof HTMLElementTagNameMap;
    props?: Record<string, JsonUIValue>;
    executeScript?: boolean;
};

export type JsonUIMarkdown = {
    key?: string | number;
    markdown: string;
    inline?: boolean;
    props?: Record<string, JsonUIValue>;
};

export type JsonUILazy = {
    key?: string | number;
    fetcher: string;
    type: 'html' | 'text' | 'custom';
    tag?: keyof HTMLElementTagNameMap;
    props?: Record<string, JsonUIValue>;
    executeScript?: boolean;
    loadingContent?: JsonUINode;
    loadingText?: string;
    errorText?: string;
    clearBeforeLoad?: boolean;
    loadingIndicator?: boolean;
};

/** A UI description, not a JSON Schema validation document. */
export type JsonUINode = null | string | number | JsonUIElement | JsonUIHTML | JsonUIMarkdown | JsonUILazy | JsonUINode[];

/** Callback arguments and return values follow each registered component's API. */
export type JsonUIAction = (...args: never[]) => unknown;

export type JsonUICapabilities = {
    html?: boolean;
    lazyHtml?: boolean;
    executeScript?: boolean;
};

export class JsonUIError extends Error {
    constructor(public readonly path: string, message: string) {
        super(`${path}: ${message}`);
        this.name = 'JsonUIError';
    }
}

export type JsonUIOptions = {
    actions?: Record<string, JsonUIAction>;
    /** Called only when rendering; omitted to display the Markdown source as text. */
    renderMarkdown?: (node: JsonUIMarkdown, path: string) => ComponentChildren;
    /** Fixed when the view is created; recreate it to change permissions. */
    capabilities?: JsonUICapabilities;
    /** HTTP(S) requests are same-origin by default. Fixed when the view is created. */
    allowRequest?: (url: URL) => boolean;
    onError?: (error: JsonUIError) => void;
};

export type JsonUIProps = JsonUIOptions & {
    schema: JsonUINode;
};
```

| 宿主选项 | 必填 | 默认值 | 语义 |
| --- | --- | --- | --- |
| schema | 是 | 无 | JsonUINode；不能是 Promise/函数 |
| actions | 否 | 空映射 | 宿主函数表；events 中的动作名必须存在于此表自身属性中 |
| renderMarkdown | 否 | 显示 markdown 原文 | `(node,path) => ComponentChildren`；只在实际渲染时调用；返回 null/undefined/false 表示空内容 |
| capabilities.html | 否 | false | 允许直接 HTML |
| capabilities.lazyHtml | 否 | false | 允许异步 HTML |
| capabilities.executeScript | 否 | false | 配合 HTML 能力和节点 executeScript:true 才执行脚本 |
| allowRequest | 否 | 同源 HTTP(S) | `(url:URL)=>boolean` 替代默认来源判断；不能放行非 HTTP(S) 或带账号密码 URL |
| onError | 否 | 无 | `(error:JsonUIError)=>void`，通知渲染或内容策略错误 |

`capabilities` 与 `allowRequest` 在视图创建时固定；更新它们应销毁重建。其他宿主回调可通过 render/props 更新。JsonUIAction 的 `never[]` 是公开类型中的参数承接约定，实际参数、this、返回值仍由目标组件决定。

### types-nodes

```json
{"name": "JsonUINode 与节点形态", "summary": "说明每种节点的字段、默认值和递归位置。"}
```

基础节点为 null、string、有限 number 或节点数组；boolean 不是 UI 节点，但可作为 props 中的 JSON 数据。每个对象只允许其形态列出的字段；不能把 html/markdown/fetcher/element 形态混用。

| 形态 | 字段与默认 |
| --- | --- |
| 原生元素/注册组件 | tag 与 component 必选且互斥；key? 为 string/number；props? 默认{}；children? 默认无；events? 默认{} |
| HTML | html:string 必填，空串合法；tag? 默认 div；key?；props? 默认{}；executeScript? 默认false |
| Markdown | markdown:string 必填，空串合法；inline? 为 boolean，未提供时由宿主解释；key?；props? 默认{} |
| Lazy | fetcher:URL字符串、type:'html'/'text'/'custom' 必填；tag? 默认div；key?；props? 默认{}；executeScript? false；loadingContent? 无；loadingText? 无；errorText? 未提供时展示错误占位；clearBeforeLoad? true；loadingIndicator? true |

原生 tag 允许的固定集合：`a abbr address area article aside audio b bdi bdo blockquote br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr i img input ins kbd label legend li main map mark menu meter nav noscript ol optgroup option output p picture pre progress q rp rt ruby s samp search section select slot small source span strong sub summary sup table tbody td textarea tfoot th thead time tr track u ul var video wbr`。不接受自定义元素名或 script/style/iframe/object/embed。类型虽使用 keyof HTMLElementTagNameMap，运行时集合更窄。

`component:'Button'` 只查已注册组件，不存在就报错；`tag:'button'` 永远生成原生 button。props 是目标 API 的 JSON 数据，不递归猜测 items/data/schema 等字段为 UI。只有 children、loadingContent 与被目标明确交给 CustomContent 的内容进入内容解释路径。稳定 key 保持重排身份，不会自动成为 DOM id。

只有元素节点支持 events，值必须是宿主动作名字符串；HTML、Markdown、Lazy 节点不支持 events 字段。内容控制字段放在 HTML/Lazy 节点顶层，不能藏进 props。Lazy custom 响应仍须是同一节点协议；不会解释任意远程 JavaScript。

## recipes

### recipe-host-and-permissions

```json
{"name": "宿主事件、Markdown、HTML 与异步内容", "summary": "为声明式节点提供受控的宿主能力。"}
```

宿主事件通过 `events:{onClick:'save'}` 连接 `options.actions.save`。回调名必须符合 `on` 后大写字母、其后仅字母数字的形式，并是真实组件 API；函数保持原有参数顺序、this 和返回值，使用普通 function 才能读取组件提供的 this。不要在 JSON props 里写 onClick 字符串或函数源码。

Markdown 的 renderMarkdown 收到校验后节点的副本与路径，返回 Preact 内容；无回调显示原文（其中 HTML 也按文本）。inline/props 只交给宿主，不自动创建容器或设置 DOM 属性。宿主负责解析、样式和其生成 HTML 的处理；回调抛错通过节点路径 onError 报告。

HTML 需 html:true；lazy html 需 lazyHtml:true；执行脚本还需 executeScript:true 能力和节点同名显式 true。非脚本 HTML 经过 DOMPurify 清洗，并移除 z-/zui-/data- 属性及命令链接。开启脚本的 HTML 交给现有 HtmlContent 执行路径，不承诺清洗或隔离。

workspace（只加载同源文本）：

```ts
import {JsonUI} from '@zui/json-ui';
const host = document.createElement('div');
document.body.append(host);
const view = new JsonUI(host, {
    schema: {fetcher: '/help.txt', type: 'text', loadingText: '加载说明', errorText: '说明加载失败'},
    allowRequest: url => url.origin === location.origin,
});
// 离开页面：view.destroy(); host.remove();
```

fetcher 必须是 URL 字符串，按 document.baseURI 解析；HTTP(S) GET，禁止 URL 凭据。allowRequest 替代同源策略，仍受浏览器 CORS 限制。custom 请求按 JSON 读取并复校节点，text/html 要求字符串；函数 fetcher、复杂 Ajax 配置、fetcherArgs 插值不在协议中。fetcher 或 type 变更会触发重载；卸载中止进行中的 LazyContent 请求，过期响应不会覆盖新内容。

## constraints

输入必须是有限、无循环的纯 JSON 数据；整份描述受100层嵌套、10000值限制，禁止函数、非有限数字及保留键 `__proto__`、`prototype`、`constructor`、`__k`、`__v`、`__e`。宿主应传入解析后的 JSON 数据，不传带自定义原型或执行行为的对象。

原生属性拒绝字符串事件、srcdoc、可执行 URL（javascript/vbscript/data）与 ZUI 自动初始化/命令入口；href 的 `#!` 命令也拒绝。props 的 ref、forwardRef、transformContent、generatorThis/generatorArgs、fetcherThis/fetcherArgs 等宿主专属字段不可由 JSON 提供。嵌套 JsonUI 不能覆盖 capabilities/actions/allowRequest/onError/renderMarkdown。

权限策略覆盖 CustomContent、HElement、HtmlContent、LazyContent 及其注册别名。已注册组件与宿主 Markdown 渲染器仍是信任代码；其自行操作 DOM、请求或另建渲染树不属于沙箱。协议校验不能证明每个组件的业务参数正确，也不能代替实际交互验收。

## references

- [包元数据](package.json)
- [主入口](src/main.ts)
- [Preact 入口](src/main-react.ts)
- [公开类型](src/types.ts)
- [原生 wrapper](src/vanilla.ts)
- [Preact 实现](src/component/json-ui.tsx)
- [协议和内容策略](src/runtime.ts)
- [正式文档](docs/lib/components/index.md)
- [节点协议测试](../../tests/dom/json-ui.test.tsx)
