# JSON UI

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "json-ui",
  "summary": "将 JSON 节点或带状态的文档渲染为已注册组件，连接宿主事件并约束内容权限。",
  "keywords": [
    "JSON UI",
    "声明式界面",
    "状态",
    "表达式",
    "绑定",
    "宿主动作",
    "JsonUI",
    "validateJsonUI"
  ]
}
```

## overview

支持两种输入：无内置状态的 `JsonUINode` 节点树，以及 `version:1`、含 state/computed/actions/watch/ui 的 `JsonUIDocument`。用于配置化界面、宿主预览或 AI 返回的受约束 UI 描述。schema 是 UI 数据，不是 JSON Schema 标准，也不是某个业务表单库的字段协议。

渲染复用 core 的 CustomContent 与组件注册表；只有公开的 JsonUI 构造器/Preact 组件、validateJsonUI、JsonUIError 和类型。runtime/document/expression/json 文件是内部实现，不提供可跨库导入的公共子入口。

## setup

workspace：原生类与类型从 `@zui/json-ui` 导入，Preact 从 `@zui/json-ui/react` 导入；两入口都导出 validateJsonUI 与全部公开类型。主入口执行 JsonUI.register() 并登记 Preact JsonUI。/react 不承诺 React 支持，需要 Preact JSX/TypeScript 配置。browser：使用包含本库的 `zui.JsonUI` 与 `zui.validateJsonUI`。npm：以目标包 `zui` 的真实导出为准，不推断 `zui/json-ui` 子路径。

本库没有独立 CSS。必须事先加载 schema 使用的组件、注册表与样式；不会按 component 名自动下载。`component` 名不区分大小写，`tag` 永远表示原生元素。可由宿主调用 core.registerReactComponent() 注册自己的 Preact 组件。依赖 core/DOMPurify 的浏览器 DOM 环境，不把聚合入口当作无 DOM 的 Node API。

## vanilla

### vanilla-json-ui

```json
{"name": "JsonUI", "summary": "创建界面、更新 schema 并管理文档状态。"}
```

`new JsonUI(selector, options: JsonUIProps)`；schema 必填。宿主选项见 [JsonUIOptions](#types-json-ui)。生命周期、render、事件和 `$` ref 继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)。初始化在下一动画帧完成；状态方法须在 `$` 已挂载且 schema 为文档时使用。

| 方法 | 参数与返回 | 行为 |
| --- | --- | --- |
| `render(options?, reset?)` | Partial<JsonUIProps>；继承更新方法 | 合并配置并重新渲染；普通 schema 更新保留文档当前状态，reset=true 可从新文档 state 重新初始化 |
| `getState()` | 返回 `Record<string, JsonUIValue>` | 返回隔离副本；修改副本不会改变界面 |
| `patchState(patch)` | 顶层 JSON 对象 → 更新后的隔离状态 | 浅合并顶层字段，在一个事务内完成 watcher 和最终 UI 校验；嵌套对象作为整体替换 |
| `resetState()` | 无参数 → 重置后的隔离状态 | 恢复最新成功接入文档的 state 默认值，重置本身不触发 watch |
| `destroy()` | void | 卸载子树、销毁文档运行时及继承资源；宿主节点由调用者按需移除 |

挂载前/销毁后调用状态方法抛 JsonUIError（view not mounted）；节点树模式调用则抛“State methods require a version 1 document”。patchState 的事务错误同步抛出，失败不提交状态。

workspace（节点协议，完整示例）：

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
{"name": "JsonUI", "summary": "使用 Preact 管理节点树或有状态文档。"}
```

Props 与原生选项一致。ref 可调用 getState/patchState/resetState；`resetState()` 恢复默认值，`resetState(props: Partial<JsonUIProps>): void` 是供 wrapper 重建 state 的重载，传 schema 时标记下一次 render 重新初始化，业务使用无参数形式。不是 HElement 子类，没有自动透传任意根 DOM 属性；外层容器由调用者提供。

普通文档更新保留已有 state，不自动合并新文档初始字段；需要新增默认字段可显式 patchState，或 resetState。有效文档切换到节点模式会释放文档状态。非法 schema 更新保留上次有效界面与运行时选项，首次失败显示错误占位。props/actions/renderMarkdown 更新在下一次渲染使用，不自动重新请求已加载 lazy 内容。

原生 wrapper 的 render(..., true) 还会按继承规则重置配置，需要继续使用的 actions/onError 等宿主选项须一并传入。无参数 resetState() 只恢复文档初始状态，不重置宿主选项。

workspace（JSX，文档协议）：

```tsx
import '@zui/base';
import {createRef, render} from 'preact';
import {JsonUI} from '@zui/json-ui/react';
import type {JsonUIDocument} from '@zui/json-ui';
const schema: JsonUIDocument = {
    version: 1,
    state: {count: 0},
    ui: {
        tag: 'button',
        props: {type: 'button'},
        bind: {children: {$ref: 'state.count'}},
        events: {onClick: {type: 'set', path: 'state.count', value: {$op: 'add', args: [{$ref: 'state.count'}, 1]}}},
    },
};
const host = document.createElement('div');
document.body.append(host);
const ref = createRef<JsonUI>();
render(<JsonUI ref={ref} schema={schema} onStateChange={state => console.log(state)} />, host);
ref.current?.patchState({count: 2});
// 离开页面：render(null, host); host.remove();
```

不使用 hooks；每个实例持有独立状态，卸载后不能继续写入。

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
{"name": "validateJsonUI", "summary": "不渲染、不加载远程内容地校验 UI 协议。"}
```

```ts
import {validateJsonUI} from '@zui/json-ui';
const errors = validateJsonUI({tag: 'p', children: '说明'});
if (errors.length) console.error(errors[0].path, errors[0].message);
```

workspace；签名 `validateJsonUI(schema: unknown, options?: JsonUIOptions): JsonUIError[]`。返回空数组表示当前结构、注册组件、宿主动作、内容权限及文档投影通过；失败仅返回首个错误，不收集所有分支错误。校验不调用宿主 actions/renderMarkdown，不发送 lazy 请求，也不逐项验证目标组件的业务 props。

文档模式会编译动作/绑定/观察规则，并计算全部 computed（包括未在 UI 使用者）；循环依赖、非法路径、表达式类型/有限值错误以及当前投影的内容策略可在此阶段发现。事件实际 args 值及远程响应仍须到运行时校验。需要校验宿主动作节点时给出相同 actions，未注册动作会失败。

### javascript-error

```json
{"name": "JsonUIError", "summary": "提供可定位 JSON 路径的标准错误。"}
```

`new JsonUIError(path: string, message: string)`；继承 Error，name=`JsonUIError`，只读 path 保存路径，message=`${path}: ${message}`。输入错误常见路径 `$`、`$.ui`、`$.computed.name`、`$.children[0]`；内部 CustomContent 常用 `$content`，远程内容路径以 `.response` 结尾。渲染错误传给 onError；同一错误对象在运行时只报告一次。

## types

### types-json-ui

```json
{"name": "JsonUIProps / JsonUIOptions 与完整协议类型", "summary": "定义公开节点、文档、动作、权限和状态类型。"}
```

以下为当前公共类型；所有协议节点只能放 JSON 数据，函数仅存在于宿主选项。类型的可选字段还须遵守后续运行时限制。

```ts
import type {ComponentChildren} from 'preact';

/** Serializable values passed to component properties. */
export type JsonUIValue = null | boolean | number | string | JsonUIValue[] | {[key: string]: JsonUIValue};

/** Expressions are interpreted only in explicitly documented expression positions. */
export type JsonUIExpression = JsonUIValue;

export type JsonUIModel = {
    path: string;
    event: string;
    value: JsonUIExpression;
};

export type JsonUICommand
    = | {action: string}
        | {type: 'set'; path: string; value: JsonUIExpression}
        | {type: 'reset'; path?: string}
        | {type: 'if'; condition: JsonUIExpression; then: JsonUICommands; else?: JsonUICommands}
        | {type: 'return'; value: JsonUIExpression};

export type JsonUICommands = JsonUICommand | JsonUICommand[];

export type JsonUIWatch = {
    paths: string[];
    do: JsonUICommands;
};

export type JsonUIDocument = {
    version: 1;
    state: Record<string, JsonUIValue>;
    computed?: Record<string, JsonUIExpression>;
    actions?: Record<string, JsonUICommands>;
    watch?: JsonUIWatch[];
    ui: JsonUINode;
};

export type JsonUIElement = {
    key?: string | number;
    tag?: keyof HTMLElementTagNameMap;
    component?: string;
    props?: Record<string, JsonUIValue>;
    children?: JsonUINode;
    events?: Record<string, string | JsonUICommands>;
    /** Document-only bindings to props.<path> or textual children. */
    bind?: Record<string, JsonUIExpression>;
    /** Document-only controlled properties and their change events. */
    model?: Record<string, JsonUIModel>;
    /** Document-only boolean expression; false unmounts this node. */
    when?: JsonUIExpression;
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

export type JsonUISchema = JsonUINode | JsonUIDocument;

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
    /** Called once after a successful state transaction, with isolated snapshots. */
    onStateChange?: (state: Record<string, JsonUIValue>, previous: Record<string, JsonUIValue>) => void;
};

export type JsonUIProps = JsonUIOptions & {
    schema: JsonUISchema;
};
```


| 宿主选项 | 必填 | 默认值 | 语义 |
| --- | --- | --- | --- |
| schema | 是 | 无 | JsonUINode 或 JsonUIDocument；不能是 Promise/函数 |
| actions | 否 | 空映射 | 宿主函数表，与文档内 actions 命令表是不同对象 |
| renderMarkdown | 否 | 显示 markdown 原文 | `(node,path) => ComponentChildren`；只在实际渲染时调用，返回 null/undefined/false 表示空内容 |
| capabilities.html | 否 | false | 允许直接 HTML |
| capabilities.lazyHtml | 否 | false | 允许异步 HTML |
| capabilities.executeScript | 否 | false | 配合 HTML 能力和节点 executeScript:true 才执行脚本 |
| allowRequest | 否 | 同源 HTTP(S) | `(url:URL)=>boolean` 替代默认来源判断；不能放行非 HTTP(S) 或带账号密码 URL |
| onError | 否 | 无 | `(error:JsonUIError)=>void`，渲染或文档事件错误通知 |
| onStateChange | 否 | 无 | 每次实际状态改变成功提交后一次 `(state,previous)`，两者均隔离副本 |

`capabilities` 与 `allowRequest` 在视图创建时固定；更新它们应销毁重建。其他宿主回调可通过 render/props 更新。JsonUIAction 的 `never[]` 是公开类型中的参数承接约定，实际参数、this、返回值仍由目标组件决定。

### types-nodes

```json
{"name": "JsonUINode 与五种节点", "summary": "说明每种节点的字段、默认值和递归位置。"}
```

基础节点为 null、string、有限 number 或节点数组；boolean 不是 UI 节点（可在 JSON 数据和表达式中使用）。每个对象只允许其形态列出的字段；不能把 html/markdown/fetcher/element 形态混用。

| 形态 | 字段与默认 |
| --- | --- |
| 原生元素/注册组件 | tag 与 component 必选且互斥；key? 为 string/number；props? 默认{}；children? 默认无；events? 默认{} |
| HTML | html:string 必填，空串合法；tag? 默认 div；key?；props? 默认{}；executeScript? 默认false |
| Markdown | markdown:string 必填，空串合法；inline? 为 boolean，未提供时由宿主解释；key?；props? 默认{} |
| Lazy | fetcher:URL字符串、type:'html'/'text'/'custom' 必填；tag? 默认div；key?；props? 默认{}；executeScript? false；loadingContent? 无；loadingText? 无；errorText? 未提供时展示错误占位；clearBeforeLoad? true；loadingIndicator? true |

原生 tag 允许的固定集合：`a abbr address area article aside audio b bdi bdo blockquote br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 header hgroup hr i img input ins kbd label legend li main map mark menu meter nav noscript ol optgroup option output p picture pre progress q rp rt ruby s samp search section select slot small source span strong sub summary sup table tbody td textarea tfoot th thead time tr track u ul var video wbr`。不接受自定义元素名或 script/style/iframe/object/embed。类型虽使用 keyof HTMLElementTagNameMap，运行时集合更窄。

`component:'Button'` 只查已注册组件，不存在就报错；`tag:'button'` 永远生成原生 button。props 是目标 API 的不透明 JSON 数据，不递归猜测 items/data/schema 等字段为 UI。只有 children、loadingContent 与被目标明确交给 CustomContent 的内容进入内容解释路径。稳定 key 保持重排身份，不会自动成为 DOM id。

普通节点协议的 events 值只接受宿主动作名字符串；bind/model/when/命令对象只能用于文档内的元素节点。HTML、Markdown、Lazy 节点不直接支持这些扩展。Lazy 的 custom 响应仍须是节点协议，不接受 version 文档，也不会自动继承外层 state 作为新响应的表达式上下文。

### types-document

```json
{"name": "JsonUIDocument / bind / model / when", "summary": "定义有状态文档及受控绑定。"}
```

文档必须作为 JsonUI 根 schema，包含 `version:1`、`state:Record<string,JsonUIValue>`、`ui:JsonUINode`；computed/actions 默认空映射，watch 默认[]。首次挂载深拷贝 state，后续普通文档更新保留运行中状态；成功更新后的 state 字段成为 reset 的新默认值。

- `computed` 的键是单段名称（不能含点），值是表达式；只读、按依赖计算，可引用 state 与其他 computed，禁止循环和不存在的 computed 引用。
- `bind` 是目标路径到表达式的映射：目标仅 `props.<路径>` 或 `children`；props 绑定可创建中间对象。children 绑定只接受 string/number/null，不能生成节点或数组。多个绑定不能祖先/后代重叠。
- `model` 的键是单个受控 prop 名，例如 value/checked；值必须含 path（state 下非根路径）、event（onChange/onInput 等真实回调名）、value（从事件提取新值的表达式）。它同时生成读绑定和写回。一个属性不能同时 bind 和 model。
- `when` 必须求值为 boolean，false 返回 null 并卸载该节点；状态仍属于文档。隐藏分支的组件名和程序结构仍在启用前校验。

不能绑定回调字段、children 的子路径、ref/forwardRef/transformContent/generatorThis/generatorArgs/fetcherThis/fetcherArgs。model 同一事件的多个写入先读取候选值，再一起写入事务；若全部与当前值相同，该事件不再执行关联命令或宿主回调。

### types-expressions

```json
{"name": "JsonUIExpression", "summary": "使用受限 JSON 表达式读取和组合数据。"}
```

表达式只在 computed、bind、when、model.value、命令 value/condition 中求值；普通 props/state 对象中的 `$ref` 等键仍是数据，不扫描字符串模板、不执行 JavaScript。

| 形式 | 语义 |
| --- | --- |
| 普通 JSON 值 | 直接深拷贝为字面量；数组/对象内部不递归解释表达式 |
| `{"$ref":"state.name","default":""}` | 只读指定路径；缺失时返回可选 default 字面量，否则报错 |
| `{"$literal":{...}}` | 强制按字面量处理，适合顶层包含 `$ref`/`$op` 的业务对象 |
| `{"$op":"add","args":[1,2]}` | 执行下表固定操作，args 中每项作为表达式 |

路径使用点分段，仅允许字母/数字/下划线/$/连字符；数组索引用 `.0`，不支持方括号、调用或任意 JS。禁止 `__proto__`、`prototype`、`constructor`、`__k`、`__v`、`__e`。只读自身 JSON 数据属性，拒绝 getter、原型、DOM 或函数遍历。缺失路径 fallback 不会把 null 当缺失。

computed/bind/when/watch 命令可读取 `state`、`computed.<name>`。元素事件命令和 model.value 还可读取 `args.<index>` 与投影的 event 字段。event 包含找到的第一个原生 Event 的 type；KeyboardEvent 另含 key；原生 input/textarea/select 另含 value；input 另含 checked。缺少相应事件时字段不存在，可设置 default。args 中的 DOM Event 不能当 JSON 遍历，应读取 event.value/checked。

| $op | 参数数量 | 类型与语义 |
| --- | --- | --- |
| eq / ne | 2 | JSON 深相等/不等，不做字符串数字隐式转换 |
| gt / gte / lt / lte | 2 | 两个有限数字比较 |
| and / or | 1…100 | 仅 boolean，短路求值 |
| not | 1 | 仅 boolean，取反 |
| add / sub / mul / div | 2 | 仅数字，结果必须有限；除零产生非有限数即失败 |
| get | 2…3 | JSON 对象/数组、安全字符串或数字 key、可选缺失默认表达式；缺失且无默认返回 null |
| length | 1 | string 或 array 长度 |
| concat | 1…100 | 仅 string/number/boolean 拼接为字符串 |
| coalesce | 1…100 | 短路取首个非 null 结果；全 null 则 null |
| if | 3 | 条件必须 boolean，只求值选中分支 |

其他以 `$` 开头的顶层表达式标记拒绝；用 $literal 保留业务对象。没有循环/map/filter、正则、日期、网络或任意函数调用操作。

### types-commands

```json
{"name": "JsonUICommand / JsonUICommands / JsonUIWatch", "summary": "在同步事务中修改 state、分支、返回和响应字段变化。"}
```

命令可为单个对象或按顺序执行的数组。文档 `actions` 是命令表，`events` 可直接放命令或 `{action:'name'}`；事件值是字符串时仍表示宿主 actions 函数名，二者不会互相代替。

| 命令 | 必填与可选字段 | 行为 |
| --- | --- | --- |
| `{action}` | action:string | 展开同文档 actions 中的命令，禁止循环引用 |
| `{type:'set',path,value}` | path 为 state 根或子路径，value 为表达式 | 写入私有草稿；替换 state 根时值必须是对象 |
| `{type:'reset',path?}` | 默认 path='state' | 全量恢复最新默认 state；指定子路径时恢复该路径的默认值 |
| `{type:'if',condition,then,else?}` | condition 表达式、then 命令；else 默认[] | boolean 条件分支 |
| `{type:'return',value}` | value 表达式 | 同步返回 JSON 值并停止当前命令链；仅当目标组件原回调支持时，返回 false 才会取消其默认行为 |

写路径的父节点必须已存在，不能通过 state 写入自动补中间对象；数组索引必须是已有位置，不能借 set 追加数组。向 state 根赋对象可整体替换状态。嵌套 reset 目标必须存在于默认 state。

watch 每项 `{paths:string[],do:JsonUICommands}`，paths 至少一个且仅允许 state 路径；比较自身 JSON 值变化，同一事务内可链式触发。默认初始化与全量 reset 本身不触发 watch；子路径 reset 作为普通写入可触发。观察命令不能读 args/event。依赖分析按读路径与可能写路径的祖先/后代重叠检测，拒绝自身及跨规则循环，即使某个条件分支暂不触发。

事务顺序为 model 写入 → 当前事件命令 → watch 收敛 → JSON/computed/最终 UI 权限校验 → 提交 → onStateChange。任何校验错误回滚；最多32轮观察收敛，禁止重入。状态实际未变化时不触发 onStateChange。文档事件内错误通过 onError 报告并恢复受控视图；宿主 patchState 错误同步抛出。

同一事件同时有 model 和宿主动作时，成功提交后才以原参数/this 调用宿主，宿主返回值优先；宿主代码本身不属于状态事务回滚范围。宿主动作可做异步业务，但 JSON 命令是同步有限操作，没有 await/请求/宿主函数调用命令。

## recipes

### recipe-native-model

```json
{"name": "原生输入双向绑定", "summary": "利用 event 投影更新文档 state。"}
```

以下 JSON 作为 schema 传给 JsonUI（workspace 或 browser，基础渲染环境已加载）。用户输入只更新 state.name，下面文本绑定同步改变；不需要宿主回调。

```json
{
  "version": 1,
  "state": {"name": ""},
  "computed": {"greeting": {"$op": "concat", "args": ["你好，", {"$ref": "state.name"}]}},
  "ui": [
    {"tag": "input", "props": {"aria-label": "姓名"}, "model": {"value": {"path": "state.name", "event": "onInput", "value": {"$ref": "event.value"}}}},
    {"tag": "p", "bind": {"children": {"$ref": "computed.greeting"}}}
  ]
}
```

接入已注册组件时按真实回调签名取值，例如 Input/Picker 通常读 args.0，Checkbox 的 onChange 新值在 args.1；不要统一猜 event.target.value。注册与 props 语义查目标库。

### recipe-local-cascade

```json
{"name": "本地省市联动", "summary": "通过 computed、model 和 watch 连接两个 Picker，无需业务回调。", "keywords": ["级联选择", "Picker", "组件联动"]}
```

完整可直接作为 schema 的纯 JSON 见 [state-ui.json](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/assets/state-ui.json>)。先加载并注册 Picker 与 Button（workspace 使用 `import '@zui/picker'; import '@zui/button';`；browser 使用包含这些库的 ZUI 资源）。这个示例的全部数据都在 JSON 内，无需请求服务端。

流程：两个 Picker 的 value 分别 model 到 state.province/state.city，onChange 读取 args.0；computed.cities 用 get 从本地映射取当前省份的城市，bind 到城市 Picker 的 props.items；watch 监听 state.province 并清空 state.city。省份为空时 props.disabled 为 true。用户选择和宿主 patchState({province: 'zj'}) 都经过同一条联动链；初次挂载与全量 reset 保留默认值。

状态是唯一数据源，不保存组件实例引用，也不通过选择器调用另一个组件的方法。目标组件须支持受控属性；组件内部私有状态不会自动变成文档 state。

### recipe-host-and-permissions

```json
{"name": "宿主事件、Markdown、HTML 与异步内容", "summary": "为声明式节点提供受控的宿主能力。"}
```

宿主事件通过 `events:{onClick:'save'}` 连接 `options.actions.save`。回调名必须符合 on 后大写字符形式并是真实组件 API；函数保持原有参数顺序、this 和返回值，使用普通 function 才能读取组件提供的 this。不要在 JSON props 里写 onClick 字符串或函数源码。

Markdown 的 renderMarkdown 收到校验后的节点副本与路径，返回 Preact 内容；无回调显示原文（其中 HTML 也按文本）。inline/props 只交给宿主，不自动创建容器或设置 DOM 属性。宿主负责解析、样式和其生成 HTML 的处理；回调抛错通过节点路径 onError 报告。

HTML 需 html:true；lazy html 需 lazyHtml:true；执行脚本还需 executeScript:true 能力和节点同名显式 true。非脚本 HTML 经过 DOMPurify 清洗，并移除 z-/zui-/data- 自动初始化属性及命令链接。开启脚本的 HTML 交给现有 HtmlContent 执行路径，不承诺清洗或隔离。

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

fetcher 必须是 URL 字符串，按 document.baseURI 解析；HTTP(S) GET，禁止 URL 凭据。allowRequest 替代同源策略，仍受浏览器 CORS 限制。custom 请求按 JSON 读取并复校节点，text/html 要求字符串；函数 fetcher、复杂 Ajax 配置、fetcherArgs 插值不在协议中。卸载中止进行中的 LazyContent 请求，过期响应不会覆盖新内容。

## constraints

输入必须是有限、无循环的纯 JSON 数据；整份描述及被校验的数据受100层嵌套、10000值限制，禁止函数、Symbol、访问器、原型污染保留键及非有限数字。文档求值有10000步预算，动作引用展开也限制10000步；watch 最多32轮，不能将本协议当通用脚本引擎。

当前阶段只支持本地状态、绑定和组件联动；没有 dataSources、自动请求、远程缓存或异步 JSON 动作。既有 fetcher 节点用于加载内容，不能当作连接文档状态的远程数据源。

原生属性拒绝字符串事件、srcdoc、可执行 URL（javascript/vbscript/data）与 ZUI 自动初始化/命令入口；href 的 `#!` 命令也拒绝。props 的 ref 等宿主专属字段不可由 JSON 提供。嵌套 JsonUI 不能覆盖 capabilities/actions/allowRequest/onError/renderMarkdown/onStateChange。

权限策略覆盖 CustomContent、HElement、HtmlContent、LazyContent 及其注册别名。已注册组件与宿主 Markdown 渲染器仍是信任代码；其自行操作 DOM、请求或另建渲染树不属于沙箱。协议校验不能证明每个组件的业务参数正确，也不能代替实际交互验收。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/package.json>)
- [主入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/src/main.ts>)
- [Preact 入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/src/main-react.ts>)
- [公开类型](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/src/types.ts>)
- [原生 wrapper](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/src/vanilla.ts>)
- [Preact 实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/src/component/json-ui.tsx>)
- [协议和内容策略](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/src/runtime.ts>)
- [文档状态与命令实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/src/document.ts>)
- [表达式实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/src/expression.ts>)
- [JSON 与路径约束](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/src/json.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/json-ui/docs/lib/components/index.md>)
- [文档协议测试](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/tests/dom/json-ui-document.test.tsx>)
- [节点协议测试](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/tests/dom/json-ui.test.tsx>)
