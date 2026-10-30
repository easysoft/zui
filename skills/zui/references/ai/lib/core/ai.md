# JS 核心模块

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "core",
  "summary": "提供组件生命周期、Preact 与 signals、DOM、请求、查询和资源加载基础设施。",
  "keywords": [
    "核心",
    "原生组件",
    "Preact",
    "signals",
    "AJAX",
    "query",
    "Web Components",
    "DOM"
  ]
}
```

## overview

ZUI 组件基础设施：Cash DOM、原生组件生命周期、Preact 渲染、signals、异步查询、AJAX、按需资源加载与自定义元素适配。业务 UI 优先查找具体组件库；纯日期/字符串工具使用 [helpers](../helpers/ai.md)。

## setup

workspace：从 `@zui/core` 导入公开成员，需 ZUI 的 TypeScript/Preact 构建配置和构建常量。browser：加载包含 core 的 ZUI 后使用 `zui.Member`。标准 npm 以目标包 `zui` 的实际运行时/类型导出为准，不推断 `zui/core` 或 `/react` 子入口。

主入口有浏览器副作用：设置 `window.$`、创建基于 document 的 bus、注册 Cash 扩展和默认组件/全局事件。不能在无 DOM 的 Node 中直接导入整个 core。core 不提供完整 UI CSS；实例所属库和基础样式必须单独包含。

## vanilla

### vanilla-component

```json
{"name": "Component", "summary": "原生组件的实例关联、选项和事件生命周期基类。"}
```

workspace：

```ts
import {Component} from '@zui/core';
class MyComponent extends Component<{text?: string}> {
    static NAME = 'MyComponent';
}
const host = document.createElement('div');
document.body.append(host);
const instance = new MyComponent(host, {text: 'hello'});
instance.destroy();
host.remove();
```

构造 `new Subclass(selector, options?)`；需要实际匹配元素和静态 NAME。同一元素不支持重复实例，除非 MULTI_INSTANCE=true。选项见 [ComponentOptions](#types-component-options)。构造同步执行 init/$onCreate，下一动画帧完成可选 $fetcher 后执行 afterInit、inited 事件和 $onInited。直接 new Component 未提供 NAME 会抛错。

| 成员 | 参数/返回与语义 |
| --- | --- |
| element / $element / $emitter | 原始宿主、Cash 宿主与事件目标 |
| options / key / gid / namespace | 当前选项、实例键、全局递增 ID、事件命名空间 |
| inited / destroyed | 初始化和销毁状态 |
| setOptions(options?, reset?) | 合并选项并返回最终选项；不等于刷新 UI |
| resetOptions(options?) | 重置选项：DEFAULT → dataset → 显式 options → $options |
| render(options?, reset?) | 更新选项及 $class/$style；子类负责视图 |
| on(name, callback, {once?}?) / one(name, callback) | 注册事件，回调接收 Event 和 `[instance, ...事件参数]` |
| off(name) | 移除该事件在本实例命名空间下的全部处理器 |
| emit(name, ...args): Event | 触发事件，返回事件对象 |
| destroy(): void | 幂等；清理实例注册、关联属性及命名空间监听，调用 $onDestroy |
| autoDestroy(delay=100): void | 延迟毫秒后检查是否脱离文档并销毁，是一次检查 |
| i18n(key, args?, defaultValue?): string | 按实例语言/词典/组件词典获取文本 |
| executeCommand(path, args): unknown | 访问实例路径并调用方法 |
| init() / afterInit() | 子类扩展生命周期；afterInit 可异步 |

静态：`get(selector,key?)` 查已有实例；`ensure(selector,options?)` 复用并更新选项或创建；`getAll(selector?,filter?)` 查实例（传 selector 时搜索后代）；`query(selector?,key?,filter?)` 查最近祖先或最近创建实例。`register(ComponentClass?,name?)` 注册名称与可选 WebComponent；`defineFn(name?)` 注册 Cash 便捷方法；`isValid(instance)` 默认 true。DEFAULT 默认 `{}`，MULTI_INSTANCE 默认 false；NAME、i18n、toggle、WebComponent 为子类配置。ALL/TYPED_ALL/map/toggleMap 为共享注册表，不宜由使用者直接修改。

无点事件名由 on/off 自动加实例命名空间；包含 `.` 的名称原样保留。手写其他 namespace 不会随 destroy 的 off(this.namespace) 自动清除，调用方需显式 off。

来源：[基类](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/component/component.ts>)、[创建器](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/component/creator.ts>)。


### vanilla-component-from-react

```json
{"name": "ComponentFromReact", "summary": "把 Preact 组件封装成原生构造器。"}
```

继承 [Component](#vanilla-component) 的构造器和生命周期；子类提供静态 Component，默认 replace=false。`render(options?,reset?)` 渲染 Preact；reset=true 时调用视图可选的 resetState。`$` 是视图 ref，首次异步渲染前为 null，销毁后重新置空；`destroy()` 卸载整个 Preact 子树再执行基类清理。

`$replace` 可覆盖静态 replace；匹配 HElement 时可替换目标节点。`executeCommand(path,args)` 先访问视图，失败再访问 wrapper。`renderHTML(options): string` 使用临时 DOM 渲染，不是无 DOM 的 SSR。

使用实例见 [Menu](../menu/ai.md#vanilla-menu)。继承 API 以当前基类为准，不推断每个视图都有相同方法。来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/component-from-react.ts>)。


### vanilla-custom

```json
{"name": "Custom", "summary": "将 CustomContent 放入原生组件容器。"}
```

`new Custom(selector, options: CustomContentProps)`，继承 ComponentFromReact，`content` 必需，`generatorThis/generatorArgs/children` 可选。支持 render 更新和 destroy 清理。

workspace：

```ts
import {Custom} from '@zui/core';
const host = document.createElement('div');
document.body.append(host);
const view = new Custom(host, {content: 'hello'});
view.render({content: 'updated'});
view.destroy();
host.remove();
```

内容语义见 [渲染器](#preact-content)。来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/custom.ts>)。


### vanilla-sticky

```json
{"name": "Sticky", "summary": "为元素添加吸附定位并跟踪 pinned 状态。"}
```

`new Sticky(selector, options?: StickyOptions)`。选项：side 默认 top（top/bottom/left/right）、offset 默认 1、zIndex 可选、pinnedClass 默认 is-pinned、targets 可选后代选择器、scrollContainer 可选最近祖先或后代容器。

设置 position:sticky 和对应边 0；无 scrollContainer 时用 IntersectionObserver，有容器时监听滚动并在动画帧判断吸附。`$targets` 返回目标 Cash 集合。`destroy()` 当前仅释放 observer/scroll/rAF，不调用基类 destroy，也不还原内联样式或组件注册。避免销毁后在同一宿主重新 new；这是当前实现限制。

workspace：`const sticky = new Sticky(element, {side:'top'}); sticky.destroy();`，element 是已存在且置于可滚动布局的 HTMLElement。来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/sticky.ts>)。

## preact

### preact-helement

```json
{"name": "HElement", "summary": "有 HTML 根节点、命令与查询生命周期的 Preact 基类。"}
```

Props 见 [HElementProps](#types-helement-props)。通常由库组件继承，静态 NAME 标识组件；component 默认由实现选择，tag 显式指定原生标签。实例公开 gid、element、commandScope、i18nData、i18n 方法及 Preact 生命周期。

`createQuery(options, client?)` 创建归组件持有的查询，挂载时订阅、卸载时销毁。客户端依次取显式参数、props.queryClient、QueryClientContext；使用 context 必须设置静态 contextType。不要在 render 内重复创建；覆盖 componentDidMount/componentWillUnmount 时调用 super。

workspace（JSX，已配置 Preact）：

```tsx
import {h, render, HElement, type HElementProps} from '@zui/core';
class Message extends HElement<HElementProps> {
    static NAME = 'Message';
}
const host = document.createElement('div');
document.body.append(host);
render(<Message tag="div">hello</Message>, host);
render(null, host);
host.remove();
```

不使用 hooks；状态可用 signals 或类状态。来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/components/h-element.ts>)。


### preact-content

```json
{"name": "HtmlContent / LazyContent / CustomContent / CustomContentClass / CustomRender / Icon", "summary": "渲染 HTML、异步内容、自定义内容和图标。"}
```

| 组件 | Props 和行为 |
| --- | --- |
| HtmlContent | HElementProps + 必需 html:string；executeScript 默认 false，内容直接作为 HTML |
| LazyContent | 必需 fetcher；fetcherArgs、fetcherThis、type(html/text/custom)、tag 默认 div、loadingText/errorText、loadingIndicator、clearBeforeLoad、loadingContent、contentClass/Style/Attrs、executeScript、transformContent 可选 |
| CustomContent / CustomContentClass | 必需 content；可为文本、VNode、内容描述对象、生成函数或数组；generatorThis/generatorArgs 为函数提供上下文 |
| CustomRender | 自定义 render 结果合并 attrs 和 children，tag 指定宿主；renderCustomResult 返回 `[attrs,children]` |
| Icon | icon 可选，接受 IconType；className 可选，其他属性传给图标节点；空图标返回 null |

`ContentRenderContext.Provider` 的 value 可提供 resolveContent、prepareElement、prepareHTML、prepareLazy、renderError；策略来自宿主，覆盖通用内容处理。`renderCustomContent(props,policy?)` 是对应函数；`getIconClass(icon,className?)` 计算 CSS 图标类。HTML/RAWJS/脚本能力只处理可信内容；需限制时由宿主策略清理和禁用执行。图标样式需 icons/css-icons。

workspace：

```tsx
import {h, render, CustomContent} from '@zui/core';
const host = document.createElement('div');
document.body.append(host);
render(<CustomContent content="普通文本" />, host);
render(null, host);
host.remove();
```

LazyContent 默认 type=html、loadingIndicator=true、clearBeforeLoad=true、loadingClass=loading；executeScript 未指定时，无 ContentRenderPolicy 默认 true，有 policy 默认 false。它与 HtmlContent 的 false 默认不同，使用 HTML 请求前应明确执行策略。

完整 Props 见 [内容类型](#types-content)。来源：[组件入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/components/index.ts>)、[宿主策略](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/components/content-render-context.ts>)。


### preact-bridge

```json
{"name": "ZUI / QueryClientProvider / QueryClientContext / Portal", "summary": "在 Preact 中托管原生组件、查询客户端与 portal。"}
```

`ZUI` 的 props 必需 $use（原生类或注册名称），$tagName 默认 div，$options 指定组件选项，$rootAttrs 指定容器属性，$forceUpdate 可触发强制更新；其他 props 也会合并为组件选项。实例 `$` 为被托管的原生实例。挂载创建，更新 render，卸载 destroy。切换 $use 会重新创建。

`QueryClientProvider({client,children})` 为客户端配对 mount/unmount，切换客户端不重绑已有 controller；重建 controller 或给 provider 设置 key。不清空共享缓存。QueryClientContext 默认 undefined；`resolveQueryClient(client?,contextClient?)` 都缺少时抛 Error。

`createPortal(vnode, container)` 将 VNode 渲染到其他 DOM 容器，Portal 为其底层视图。Preact 原语 `h/render/createRef/isValidElement/ReactComponent` 从 core 再导出，ReactComponent 指 Preact 类。

workspace（JSX）：

```tsx
import {h, render, QueryClient, QueryClientProvider} from '@zui/core';
const host = document.createElement('div');
const client = new QueryClient();
render(<QueryClientProvider client={client}><span>ready</span></QueryClientProvider>, host);
render(null, host);
```

来源：[ZUI](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/components/zui.tsx>)、[provider](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/query/query-client-context.tsx>)、[portal](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/components/portals.ts>)。

## web-components

### web-components-factory

```json
{"name": "ZuiElement / ComponentElement / PreactElement / createWebComponent / defineWebComponent / property", "summary": "构建和注册具有显式属性契约的自定义元素。"}
```

Core 提供基类和工厂，不自动注册通用 `zui-core` 标签。具体库是否提供标签看该库入口。

`createWebComponent(config)`、`createWebComponent(owner)` 或 `(component,config)` 返回元素构造器但不注册；`defineWebComponent` 接受相同来源及可选 name 并注册。配置有 properties（必需）、component、tagName、autoDefine、slots、getters、options(props,context)；owner 提供 NAME/WebComponent/WebComponentRenderer。命名可从 NAME 推导 `zui-kebab-name`。

| property 工厂 | 默认与转换 |
| --- | --- |
| property<T>(defaultValue?) | 仅 JS property，不从 attribute 解析复杂对象 |
| property.string(attribute,defaultValue='',reflect=true) | null 恢复默认，其他值 String 转换 |
| property.boolean(attribute) | 默认 false；HTML attribute 存在即 true，包括字符串 false |
| property.number(attribute,defaultValue,minimum=0) | 有限整数且不小于 minimum，否则回退默认 |
| property.booleanOrNumber(attribute,defaultValue) | 空串/true 为 true，false 为 false，正整数保留，其他回退 |

元素提供 `ready:Promise<void>`、只读 options、`setOptions(partial)`、focus(options?)。ready 表示该连接周期首次就绪，不代表每次属性刷新；更新排入微任务。断连后在微任务中确认仍 disconnected 才销毁 renderer；同一轮 DOM 移动保留实例与 ready，真正卸载后重连重新初始化。工厂 options 的 context 提供 element、set（内部同步，不伪造用户事件）、emit(name,detail,cancelable=false) 和 accessibleAttributes；事件冒泡且 composed。

Light DOM 的命名 slot 映射到组件内容 prop，没有隐含 Shadow DOM 隔离。readonly getters 从当前 props 计算；所有元素属性须在 properties 显式声明，不能直接把原生 options 全量当 attribute。

workspace：

```ts
import {h, defineWebComponent, property} from '@zui/core';
const DemoElement = defineWebComponent({
    tagName: 'demo-greeting',
    component: (props: {label: string}) => h('span', null, props.label),
    properties: {label: property.string('label', 'hello')},
});
const element = new DemoElement();
element.label = 'ZUI';
document.body.append(element);
await element.ready;
element.remove();
```

注册是全局的；相同标签/不同构造器不能覆盖。来源：[工厂](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/web-components/factory.ts>)、[基类](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/web-components/element.ts>)、[属性](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/web-components/properties.ts>)。

## css

Core 不提供独立 CSS 组件或工具样式；渲染器输出的布局、加载和图标类需从相应样式库加载。Sticky 的 is-pinned 等仅是状态标记，具体外观由使用方定义。

## css-variables

无。

## javascript

### javascript-cash

```json
{"name": "$ / cash", "summary": "使用 Cash DOM 集合及 ZUI 扩展。"}
```

`$(selector)` 接受选择器、元素、HTML 字符串或集合，返回 Cash 集合；`cash` 与 `$` 相同。导入 core 会设置 window.$。DOM/event API 是 Cash 子集，不保证完整 jQuery 兼容。

ZUI 增加 dataset/data、setClass、尺寸/CSS、事件、表单、zdata、zuiInit/zuiCall、scrollIntoView、resize、hotkeys、commands 等方法；对应能力的签名见下方条目和源码声明。AJAX helper 使用 `$.ajax/$.get/$.post/$.getJSON`，不是独立命名导出。

workspace：`import {$} from '@zui/core'; const node = $('<div>text</div>').appendTo(document.body); node.remove();`。来源：[Cash](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/cash/cash.ts>)、[AJAX 扩展](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/ajax/helper.ts>)。


### javascript-creator

```json
{"name": "create / init / getComponent / registerComponent / initGlobalComponents / defineFn", "summary": "注册原生组件并初始化声明式节点。"}
```

```ts
create(nameOrClass: string | ComponentClass, element: HTMLElement, options?: ComponentCreateOptions): Component<any, any, any> | null;
init(element: Selector, options?: ZUIInitOptions): void;
getComponent(name: string): ComponentClass | undefined;
registerComponent(component: ComponentClass, name?: string): void;
initGlobalComponents(name?: string): ComponentClass | undefined;
defineFn(name?: string): void;
```

create 未找到类返回 null；已有实例默认复用，$update=true 刷新、$update='reset' 重置。init(element,{update,runJS,beforeCreate,onCreate}) 扫描声明式节点；beforeCreate 返回 false 跳过，onCreate 返回 false 跳过或返回选项替换。动态脚本相关选项仅用于可信内容。注册与静态 Component 方法共享表。

browser（包含 Menu 资源）：`const host=document.createElement('div'); document.body.append(host); const menu=zui.create('menu',host,{items:[{text:'打开'}]}); menu?.destroy(); host.remove();`。来源：[创建器](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/component/creator.ts>)。


### javascript-signals

```json
{"name": "signal / computed / effect / batch / untracked / Signal", "summary": "使用不依赖 hooks 的响应式状态。"}
```

```ts
signal<T>(value: T): Signal<T>;
computed<T>(compute: () => T): ReadonlySignal<T>;
effect(callback: () => void | (() => void)): () => void;
batch<T>(callback: () => T): T;
untracked<T>(callback: () => T): T;
```

通过 `.value` 读写 Signal，computed 只读；effect 返回 disposer，callback 可返回本轮清理。batch 合并通知，untracked 不收集依赖。组件卸载必须调用 disposer，不把 effect 放在 render 中重复创建。Signal 类型还提供 peek/subscribe 等原生 signals 能力。此入口未导出 useSignal 等 hooks。

workspace：

```ts
import {signal, computed, effect, batch} from '@zui/core';
const count = signal(0);
const doubled = computed(() => count.value * 2);
const dispose = effect(() => console.log(doubled.value));
batch(() => { count.value = 2; });
dispose();
```

来源：[再导出](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/signals.ts>)。


### javascript-query

```json
{"name": "createQuery / createInfiniteQuery / createMutation / QueryClient", "summary": "通过 signals 读取共享查询缓存与 mutation 状态。"}
```

调用 `createQuery(client,options)`、`createInfiniteQuery(client,options)`、`createMutation(client,options)`。client 必需；query options 使用 queryKey/queryFn，infinite 还提供 initialPageParam/getNextPageParam，mutation 提供 mutationFn。返回 controller：client、只读 result signal、mount()、setOptions(完整配置)、destroy()。

query 增加 refetch(options?)；infinite 增加 fetchNextPage/fetchPreviousPage；mutation 增加 mutate(variables,options?)（Promise）和 reset()。创建时不自动订阅，query/infinite 需显式 mount；mutation.mutate 会自动 mount。destroy 幂等且终止使用，但不清空共享缓存；mutation 的 destroy/reset 不取消已发送请求。refetch 可在 mount 前调用，用 throwOnError 要求失败 reject。应用或 QueryClientProvider 持有 client.mount/unmount 生命周期。

同时再导出 QueryCache、MutationCache、keepPreviousData、skipToken 及 query-core 对应类型；不实现另一套缓存。具体扩展选项见 [公开 query 类型列表](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/query/index.ts>)。

workspace：

```ts
import {QueryClient, createQuery} from '@zui/core';
const client = new QueryClient();
client.mount();
const query = createQuery(client, {queryKey: ['demo'], queryFn: async () => ['one']});
query.mount();
await query.refetch();
console.log(query.result.value.data);
query.destroy();
client.unmount();
```

来源：[query](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/query/create-query.ts>)、[infinite](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/query/create-infinite-query.ts>)、[mutation](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/query/create-mutation.ts>)。


### javascript-ajax

```json
{"name": "Ajax / fetchData / isFetchSetting", "summary": "请求数据并统一处理响应、错误和取消。"}
```

`new Ajax<T>(setting:AjaxSetting)` 不自动发送；`send():Promise<[data?,error?,response?]>` 发送，默认失败返回 error，throws=true 时 reject。setting 的 url 必需，method/type 默认 GET，processData 默认 true，dataType 默认按 Content-Type 识别，timeout 单位毫秒。GET/HEAD 的 data 编入查询串；其他请求默认转 FormData。`dataType:'js'` 会解析 RAWJS，只用于可信响应。

公开 setting/data/error/response/url/request/completed；`on(name,callback)`、success/done、fail、complete/always 链式注册；then/catch/finally 是类自有 thenable 行为，不是原生 Promise 链。`abort(error?)` 未完成时取消返回 true，已完成返回 false；普通 AbortError 可不触发 error 回调，但 complete 仍执行。beforeSend 返回 false 取消；`getResponseHeader(name)` 读取响应头；静态 globalBeforeSends 是共享前置回调。

fetchData(setting,args=[],extraAjaxSetting?,thisObj?,ajaxGetter?) 返回 Promise<T>，默认 throws=true/dataType=json。setting 可为 URL、AjaxSetting 或函数；函数分支直接调用并等待结果。URL 用 args 格式化。isFetchSetting 是候选判别，不验证 URL 可达。

workspace，无真实网络示例：

```ts
import {fetchData} from '@zui/core';
const value = await fetchData((id: number) => ({id}), [42]);
console.log(value.id);
```

选项类型见 [AJAX 类型](#types-ajax)。来源：[Ajax](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/ajax/ajax.ts>)、[fetcher](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/ajax/fetcher.ts>)。


### javascript-classes

```json
{"name": "getClassList / classes", "summary": "组合条件类名，后出现的同名条件覆盖前者。"}
```

```ts
getClassList(...args: ClassNameLike[]): ClassNameSetting[];
classes(...args: ClassNameLike[]): string;
```

组合条件类名，后出现的同名条件覆盖前者；数组/对象/函数可嵌套，null 和布尔值忽略。

workspace：从 `@zui/core` 导入上述成员，`classes("a", {a:false, b:true})`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/classes.ts>)。


### javascript-data

```json
{"name": "storeData / takeData / clearData", "summary": "WeakMap 关联对象数据。"}
```

```ts
storeData(target: object, key: string | null, value?: unknown): void;
storeData(target: object, data: Record<string, unknown>): void;
takeData(target: object): Record<string, unknown>;
takeData(target: object, key: string): unknown;
takeData(target: object, key: string | undefined, mergeElementData: boolean): unknown;
clearData(target: object): void;
```

WeakMap 关联对象数据；storeData 的 null 清全部，undefined 删除单键；takeData 返回现存引用，可按 mergeElementData 合并 dataset。

workspace：从 `@zui/core` 导入上述成员，`storeData(document.body, "demo", 1); takeData(document.body, "demo"); clearData(document.body)`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/data.ts>)。


### javascript-raw-data

```json
{"name": "evalValue / parseRawData / jsRaw", "summary": "evalValue 用 new Function 求值。"}
```

```ts
evalValue<T = unknown>(value: string, ...args: [name: string, value: unknown][]): T;
parseRawData<T = unknown>(data: string, ...args: [name: string, value: unknown][]): T;
jsRaw(data: unknown): string;
```

evalValue 用 new Function 求值；parseRawData 普通内容用 JSON.parse，RAWJS 标记可执行；jsRaw 将函数序列化为标记。仅处理可信内容，受 CSP 限制，错误向外传播。

workspace：从 `@zui/core` 导入上述成员，`parseRawData("{\"count\":1}")`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/raw-data.ts>)。


### javascript-z

```json
{"name": "getZData / setZData", "summary": "读取/写入 z- 前缀属性。"}
```

```ts
getZData(selector: Selector, prefixOrOptions?: ZDataGetterOptions | string): Record<string, unknown> | undefined;
setZData(selector: Selector, data: Record<string, unknown>, prefix?: string): void;
```

读取/写入 z- 前缀属性；getZData 可配置 prefix/evalValue/getter，求值仅用于可信属性；无匹配元素返回 undefined。

workspace：从 `@zui/core` 导入上述成员，`setZData(document.body, {demo:1}); getZData(document.body)`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/z.ts>)。


### javascript-merge-props

```json
{"name": "mergeProps / removeUndefinedProps", "summary": "直接修改第一个 props 对象。"}
```

```ts
mergeProps<T extends Record<string, unknown> = Record<string, unknown>>(props: Record<string, unknown>, ...args: unknown[]): Record<string, unknown>;
removeUndefinedProps(props: Record<string, unknown>): Record<string, unknown>;
```

直接修改第一个 props 对象；类名和 children 合并，style/attrs/props 对象浅合并，removeUndefinedProps 删除 undefined 键。

workspace：从 `@zui/core` 导入上述成员，`mergeProps({className:"a"}, {className:"b"})`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/merge-props.ts>)。


### javascript-size

```json
{"name": "parseSize / toCssSize", "summary": "数字默认 px，百分比保留，分数转换百分比。"}
```

```ts
parseSize<A extends unknown[] = unknown[]>(size: SizeSetting, callbackArgs?: A): [value: number, type?: "px" | "%"];
toCssSize<A extends unknown[] = unknown[]>(size: SizeSetting | undefined | null, callbackArgs?: A): string | null;
```

数字默认 px，百分比保留，分数转换百分比；解析不到返回 NaN，toCssSize 对 null/undefined 返回 null、其他未知字符串原样返回。

workspace：从 `@zui/core` 导入上述成员，`toCssSize("1/2")`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/size.ts>)。


### javascript-is-diff

```json
{"name": "isDiff", "summary": "递归比较对象与数组，函数比较 toString。"}
```

```ts
isDiff(value1: unknown, value2: unknown): boolean;
```

递归比较对象与数组，函数比较 toString；非通用循环结构/Date/Map 深比较器，不传循环对象。

workspace：从 `@zui/core` 导入上述成员，`isDiff({x:1},{x:2})`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/is-diff.ts>)。


### javascript-gid

```json
{"name": "nextGid", "summary": "模块内递增数值，不是跨窗口或持久化唯一 ID。"}
```

```ts
nextGid(): number;
```

模块内递增数值，不是跨窗口或持久化唯一 ID。

workspace：从 `@zui/core` 导入上述成员，`nextGid()`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/gid.ts>)。


### javascript-delay

```json
{"name": "delay", "summary": "ms 为毫秒，setTimerID 可接收定时器 ID。"}
```

```ts
delay(ms: number, setTimerID?: (timerID: number) => void): Promise<unknown>;
```

ms 为毫秒，setTimerID 可接收定时器 ID；清除计时器不会自动完成 Promise。

workspace：从 `@zui/core` 导入上述成员，`await delay(10)`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/delay.ts>)。


### javascript-debounce

```json
{"name": "debounce", "summary": "默认 delay=0、immediate=false。"}
```

```ts
debounce<T extends (...args: any[]) => any>(func: T, optionsOrDelay?: DebounceOptions | number): DebouncedFunction<T>;
```

默认 delay=0、immediate=false；immediate=true 只在本轮首次调用执行。返回函数附带 cancel()，释放时取消；延后调用不直接返回原函数结果。

workspace：从 `@zui/core` 导入上述成员，`const run=debounce(() => console.log("done"), 100); run(); run.cancel()`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/debounce.ts>)。


### javascript-wait-until

```json
{"name": "waitUntil", "summary": "interval 默认100ms，timeout默认60000ms。"}
```

```ts
waitUntil<T>(condition: (returnValue: (value: T) => void, checkCount: number) => unknown | Promise<unknown>, optionsOrTimeout?: WaitUntilOptions<T> | number): Promise<T | void>;
```

interval 默认100ms，timeout默认60000ms；首次检查在 interval 后，避免并发检查。条件真时返回结果或 returnValue 指定值；超时用 timeoutValue，否则 undefined；abortSignal 在轮询时完成为 undefined；条件异常 reject。超时按检查次数计算，非严格墙钟。

workspace：从 `@zui/core` 导入上述成员，`await waitUntil(() => true, 1000)`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/wait-until.ts>)。


### javascript-try-exec

```json
{"name": "tryExec", "summary": "仅捕获同步调用异常，调用 onError 后返回 undefined。"}
```

```ts
tryExec<F extends (...args: any[]) => any>(fn: F, args: Parameters<F>, onError?: (error: Error) => void): ReturnType<F> | undefined;
```

仅捕获同步调用异常，调用 onError 后返回 undefined；不捕获返回 Promise 的异步拒绝。

workspace：从 `@zui/core` 导入上述成员，`tryExec(() => 1, [])`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/try-exec.ts>)。


### javascript-copy

```json
{"name": "copyText / copy", "summary": "copy 支持字符串、{text,html,MIME:Blob/string} 或 ClipboardItems。"}
```

```ts
copyText(text: string): void;
copy(contents: CopyContents): Promise<void>;
```

copy 支持字符串、{text,html,MIME:Blob/string} 或 ClipboardItems；无 clipboard 或文档无焦点退化到纯文本 execCommand。copyText 返回 void，不保证操作系统已经接受。

workspace：从 `@zui/core` 导入上述成员，`await copy("hello")`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/copy.ts>)。


### javascript-read-file

```json
{"name": "readFile", "summary": "FileReader 按 UTF-8 文本读取，读取错误 reject。"}
```

```ts
readFile(file: File): Promise<string>;
```

FileReader 按 UTF-8 文本读取，读取错误 reject。

workspace：从 `@zui/core` 导入上述成员，`await readFile(new File(["hello"], "hello.txt"))`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/read-file.ts>)。


### javascript-select-file

```json
{"name": "selectFile", "summary": "options 可为 accept 字符串或 {accept,multiple}。"}
```

```ts
selectFile(options?: string | { accept?: string; multiple?: false | undefined; }): Promise<File | null>;
selectFile(options: { accept?: string; multiple?: true; }): Promise<FileList | null>;
```

options 可为 accept 字符串或 {accept,multiple}；取消返回 null，多选返回 FileList，单选 File。需用户触发浏览器文件选择。

workspace：从 `@zui/core` 导入上述成员，`await selectFile({accept:"image/*"})`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/select-file.ts>)。


### javascript-download-file

```json
{"name": "downloadFile", "summary": "接受 Blob、Response 或 URL，触发下载并返回 Blob。"}
```

```ts
downloadFile(file: Blob | Response | string, fileName?: string): Promise<Blob>;
```

接受 Blob、Response 或 URL，触发下载并返回 Blob；对象 URL 延迟释放；URL 分支由 fetch 获取，网络错误 reject。

workspace：从 `@zui/core` 导入上述成员，`await downloadFile(new Blob(["hello"]), "hello.txt")`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/download-file.ts>)。


### javascript-scroll

```json
{"name": "disableScroll", "summary": "disable 默认 true，切换目标滚动锁定。"}
```

```ts
disableScroll(selector: Selector, disable?: boolean): void;
```

disable 默认 true，切换目标滚动锁定；使用结束传 false 恢复。

workspace：从 `@zui/core` 导入上述成员，`disableScroll(document.body, true); disableScroll(document.body, false)`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/scroll.ts>)。


### javascript-hotkeys

```json
{"name": "getHotkeysMap / bindHotkeys / unbindHotkeys / hotkeys", "summary": "getHotkeysMap 归并默认配置。"}
```

```ts
getHotkeysMap(settings: HotkeysSettings, defaultMap?: HotkeysMap): HotkeysBindingMap | undefined;
bindHotkeys(selector: Selector, bindingMap: HotkeysBindingMap, options?: HotkeysBindingOptions): Cash;
unbindHotkeys(selector: Selector, scope?: string): Cash;
hotkeys(target: Window | HTMLElement, keyBindingMap: KeyBindingMap, options?: KeyBindingOptions): () => void;
```

getHotkeysMap 归并默认配置；bindHotkeys 默认 keydown，支持 scope/when/timeout 并避开输入法组合期；unbindHotkeys 按 scope 清理。hotkeys 是 tinykeys 原函数，返回取消绑定函数。

workspace：从 `@zui/core` 导入上述成员，`bindHotkeys(document.body, {Escape: () => console.log("escape")}, {scope:"demo"}); unbindHotkeys(document.body,"demo")`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/hotkeys.ts>)。


### javascript-fullscreen

```json
{"name": "getFullscreenElement / enterFullscreen / toggleFullscreen", "summary": "进入使用目标 selector 或 {target,onError,onSuccess,afterEnter,afterExit}，依赖浏览器全屏权限。"}
```

```ts
getFullscreenElement(): Element | null | undefined;
enterFullscreen(options: Selector | EnterFullscreenOptions): Promise<void>;
toggleFullscreen(options?: Selector | EnterFullscreenOptions | false): Promise<boolean>;
```

进入使用目标 selector 或 {target,onError,onSuccess,afterEnter,afterExit}，依赖浏览器全屏权限；toggle(false) 强制退出。toggle 返回意图状态，不能代替实际 fullscreenElement 判断。

workspace：从 `@zui/core` 导入上述成员，`getFullscreenElement()`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/fullscreen.ts>)。


### javascript-commands

```json
{"name": "parseCommand / parseCommands / executeCommand / executeCommands / registerGlobalCommand / bindCommands / unbindCommands", "summary": "命令形如 /scope~name/参数?选项=值。"}
```

```ts
parseCommand(commandLike: CommandLike): CommandExecuteInfo | undefined;
parseCommands(commandsLike: CommandsLike): CommandsExecuteInfo;
executeCommand(command: CommandLike, options: CommandExecutionOptions, prevResult?: unknown): unknown;
executeCommands(commands: CommandsLike, options: CommandExecutionOptions): Promise<unknown[]>;
registerGlobalCommand(nameOrMap: string | Record<string, CommandCallback>, handler?: CommandCallback): void;
bindCommands(element?: Selector, options?: CommandsBindOptions | CommandCallback | string): void;
unbindCommands(element: Selector, scopes?: string | true): void;
```

命令形如 /scope~name/参数?选项=值；parseCommands 的 > 串行传 prevResult，| 并行。execute 接收 {name,scope,options,event,prevResult} 与参数数组。绑定默认 click，支持 scope/commands/onCommand，解绑按 scope。

workspace：从 `@zui/core` 导入上述成员，`parseCommand("/demo~open/42?mode=1")`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/commands.ts>)。


### javascript-global-event

```json
{"name": "registerGlobalListener", "summary": "设置 document 上委托的 zui-on/zui-on-事件/data-on 监听。"}
```

```ts
registerGlobalListener(events: string[]): void;
```

设置 document 上委托的 zui-on/zui-on-事件/data-on 监听；调用会替换 .zui.global 命名空间监听，不能当独立叠加订阅。属性中的条件和代码可求值，仅用于可信内容。

workspace：从 `@zui/core` 导入上述成员，`registerGlobalListener(["click", "change", "inited"])`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/global-event.ts>)。


### javascript-run-js

```json
{"name": "runJS", "summary": "执行目标节点中的脚本或指定 jsCode，可用 removeAfterRun 控制移除。"}
```

```ts
runJS(selector: Selector, jsCode?: string | null, removeAfterRun?: boolean): void;
```

执行目标节点中的脚本或指定 jsCode，可用 removeAfterRun 控制移除。仅对可信脚本使用，遵循浏览器 CSP。

workspace：从 `@zui/core` 导入上述成员，`runJS(document.createElement("div"), "void 0")`。

来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/run-js.ts>)。


### javascript-computed

```json
{"name": "Computed", "summary": "按显式依赖缓存计算结果。"}
```

`new Computed<T,D>(compute:()=>T, dependencies:D|(()=>D))`。value 调用 compute 检查变化；cache 返回旧缓存（未算过才计算）；depends(deps) 更新依赖并返回 this；compute(deps?) 返回 T；forceCompute(deps?) 丢弃旧缓存重新算。依赖比较使用 isDiff，嵌套 Computed 读取 value，不是 signals 自动跟踪。

workspace：`const value = new Computed(() => 2, []); value.value; value.forceCompute();`。来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/computed.ts>)。


### javascript-bus

```json
{"name": "Bus / bus", "summary": "提供基于 Cash 的 DOM 事件总线。"}
```

`new Bus(target:Selector)`；on/one 支持事件字符串或映射、可选委托 selector/data/callback，off 支持事件/handler 或事件映射，trigger(eventOrName,data?)。这些方法返回 this。共享 bus 绑定 document；`$.on/one/off/trigger` 代理它。

不同于 [event-bus](../event-bus/ai.md) 的 EventTarget 总线；请使用命名空间或精确 callback 清理，避免 bus.off() 清掉他人的监听。

workspace：`const handle=()=>{}; bus.on('saved.demo',handle); bus.trigger('saved.demo',{id:1}); bus.off('saved.demo',handle);`。来源：[实现](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/bus.ts>)。


### javascript-loader

```json
{"name": "getLib / registerLib / setLibRoot / loadJS / loadCSS / loadModule / LibLoader", "summary": "按需加载并缓存外部脚本、样式或模块。"}
```

```ts
getLib<T = unknown>(optionsOrSrc: string | string[] | GetLibOptions, optionsOrCallback?: Omit<GetLibOptions, "src"> | GetLibCallback, callback?: GetLibCallback): Promise<T | undefined>;
registerLib(name: string, options: GetLibOptions): void;
setLibRoot(root: string, libVersion?: string): void;
loadJS(options: string | LoadJSOptions): Promise<void>;
loadCSS(options: string | LoadCSSOptions): Promise<void>;
loadModule<T = unknown>(options: string | LoadJSModuleOptions): Promise<T>;
```

GetLibOptions 的 src 必需；可配置 name/id/root/version/type/css/dependencies/check/success/noCache 及脚本 async/defer/noModule/integrity。check 可为全局变量名、布尔或函数；依赖先加载。loadJS/loadCSS 失败 reject，已有相同资源可复用；noCache 强制重载。loadModule 接受 type:'module'、imports/srcList/globalVar/resolve 配置。

`new LibLoader<T>(name,options?)`；register(options) 登记，load({throwError?,noCache?}?) 返回模块或 undefined，默认缓存失败并静默，throwError=true 抛出，noCache=true 重试；loaded 表示模块为真值，Module 在未加载时抛错。加载不会自动卸载全局模块。

workspace：`const loader = new LibLoader('example', {src:'./example.js',check:'Example'}); await loader.load({throwError:true});`，example.js 为使用方部署并导出 window.Example 的脚本。来源：[加载器](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/get-lib.ts>)、[包装类](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/lib-loader.ts>)。


### javascript-dom

```json
{"name": "dom", "summary": "集中提供可见性、滚动、尺寸观察和选择文本方法。"}
```

主入口导出命名空间 `dom`，不要推断这些函数同时作为顶层导出。

| 方法 | 参数、返回与清理 |
| --- | --- |
| isViewVisible(rect,viewport,fullyCheck?) | 矩形交叠或完全包含，boolean |
| isVisible(selector,options?) | options 含 viewport/fullyCheck/checkZeroSize；默认只按几何交叠检查 |
| isElementDetached(element?) | 判断节点是否脱离 document，boolean |
| isDisabled(selector) | 识别 disabled 类/属性，boolean |
| scrollIntoView(selector,options?) | 继承原生 ScrollIntoViewOptions，另有 container/ifNeeded（默认 true），返回 Cash |
| listenResize(selector,callback) | 返回 ResizeObserver，使用完 disconnect() |
| selectText(selector) | 选择输入框/节点文本，boolean |

auto-height 模块通过 `$.fn.autoHeight` 提供 textarea 自动高度，并非 dom.autoHeight 导出；当前读取 scrollHeight 最小32px，尊重 max-height。

workspace：`const observer = dom.listenResize(document.body, () => {}); observer.disconnect();`。来源：[模块入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/dom/index.ts>)、[自动高度](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/dom/auto-height.ts>)。


### javascript-form-i18n-registry

```json
{"name": "createFormData / setFormDataValue / i18n / getLang / registerReactComponent / getReactComponent / html / jsx / VERSION / BUILD / BUILD_MODE / BUILD_HASH / shareData", "summary": "表单数据、词典、视图注册和构建信息。"}
```

```ts
createFormData(data: FormDataLike, existingFormData?: FormData): FormData;
setFormDataValue(formData: FormData, name: string, value: FormItemValue | FormItemValue[] | Record<string, FormItemValue>): void;
i18n<T = string>(maps: I18nLangMap | (I18nLangMap | undefined)[] | undefined, key: string, defaultValue?: T, langCode?: I18nLangCode, globalPrefix?: string): T | undefined;
i18n<T = string>(maps: I18nLangMap | (I18nLangMap | undefined)[] | undefined, key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: T, langCode?: I18nLangCode, globalPrefix?: string): T | undefined;
getLang<T = string>(key: string, args?: string | (string | number)[] | Record<string, string | number>, defaultValue?: T, langCode?: I18nLangCode): T | undefined;
registerReactComponent<P = object>(name: string, component?: ComponentType<P>): void;
registerReactComponent(componentMap: Record<string, unknown>): void;
getReactComponent<P = object>(name: string): ComponentType<P> | undefined;
```

createFormData 接受查询串/FormData/URLSearchParams/对象/键值对，可写入 existingFormData；setFormDataValue 修改 FormData。i18n 在给定 maps 和全局词典中按语言取值，getLang 使用全局词典，缺失返回 defaultValue 或 undefined，args 用于插值。

registerReactComponent 接受名称+组件或映射，getReactComponent 返回已注册 Preact 组件；reactComponentMap/reactComponents 为共享注册表。`html` 是 htm/vhtml 模板标签返回 HTML 字符串，`jsx` 返回 Preact VNode；表达式内插不需要 JSX 编译。VERSION/BUILD/BUILD_MODE/BUILD_HASH 来自构建注入。shareData 是共享可变对象，不是持久化存储。

workspace：`const data = createFormData({name:'ZUI'}); setFormDataValue(data,'count',2); const node = jsx\`<span>${'hello'}</span>\`;`。来源：[表单](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/form/helper.ts>)、[词典](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/i18n/i18n.ts>)、[模板](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/htm.ts>)、[注册](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/components/components.ts>)。

## types

### types-component-options

```json
{"name": "ComponentOptions / ComponentBaseOptions", "summary": "原生组件共享选项和生命周期回调。"}
```

```ts
export type ComponentBaseOptions = {
    key?: string | number;
    lang?: string;
    i18n?: I18nLangMap;
    $optionsFromDataset?: boolean;
    $reset?: boolean;
    $notDestroyOnDetach?: boolean;
};
export type ComponentOptions<O extends object = object> = ComponentBaseOptions & O & {
    $options?: Partial<O> | ((element: HTMLElement, options: Partial<O>) => Partial<O> | undefined);
    $fetcher?: FetcherSetting<Partial<O>>;
    $onCreate?: () => void;
    $onInited?: () => void;
    $onDestroy?: () => void;
    $class?: ClassNameLike;
    $style?: JSX.CSSProperties;
};
```

来源：[src/component/types/component-options.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/component/types/component-options.ts>)。

$onCreate/$onInited/$onDestroy 的 this 是实例；$optionsFromDataset 默认启用，设 false 禁止读取。$options 在构造初始化或显式 reset 时同步派生选项，构造时先于 init 执行并从结果选项删除；普通 setOptions/render 不执行后来追加的 $options。$fetcher 在下一帧异步取选项。$class/$style 作用于 wrapper 宿主；$reset/$notDestroyOnDetach 属于共享类型但具体使用须看创建/销毁路径。


### types-helement-props

```json
{"name": "HElementProps", "summary": "Preact HTML 根节点组件共享属性。"}
```

```ts
export interface HElementProps extends PreactDOMAttributes, Attributes {
    component?: ComponentType | keyof JSX.IntrinsicElements;
    tag?: keyof HTMLElementTagNameMap;
    className?: ClassNameLike;
    class?: ClassNameLike;
    style?: JSX.CSSProperties;
    attrs?: Record<string, unknown>;
    props?: Record<string, unknown>;
    queryClient?: QueryClient;
    data?: unknown;
    forwardRef?: RefObject<ComponentType | HTMLElement>;
    lang?: string;
    i18n?: I18nLangMap;
    [dataKey: `data-${string}` | `on${string}` | `zui-${string}`]: unknown;
    onCommand?: CommandCallback;
    commands?: Record<string, CommandCallback>;
    onMounted?: () => void;
    onUnmount?: () => void;
}
```

来源：[src/react/types/h-element-props.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/types/h-element-props.ts>)。


### types-ajax

```json
{"name": "AjaxSetting / FetcherSetting / AJAX 回调", "summary": "网络请求与数据提供器的完整选项。"}
```

```ts
export type AjaxBeforeSendCallback = (init: RequestInit) => undefined | Partial<RequestInit> | false;
export type AjaxCompleteCallback = (response: Response | undefined, statusText: string | undefined) => void;
export type AjaxErrorCallback = (error: Error, statusText: string | undefined, errorThrow: string | undefined) => void;
export type AjaxSuccessCallback = (data: unknown, statusText: string, response: Response) => unknown;
export type AjaxDataFilter = (data: unknown, dataType: string) => unknown;
export type AjaxDataConverter = (data: unknown, dataType: string) => unknown | Promise<unknown>;
export type AjaxFormData = string | FormData | URLSearchParams | Record<string, FormItemValue | FormItemValue[]> | [name: string, value: FormItemValue][];
export type AjaxCallbackMap = {
    success: AjaxSuccessCallback;
    error: AjaxErrorCallback;
    complete: AjaxCompleteCallback;
};
export interface AjaxSetting extends RequestInit {
    url: string;
    type?: string;
    data?: AjaxFormData;
    contentType?: string; // application/x-www-form-urlencoded, multipart/form-data, or text/plain
    accepts?: Record<string, string>;
    dataType?: 'json' | 'text' | 'blob' | 'js' | ({} & string);
    timeout?: number;
    processData?: boolean;
    jsonParser?: (text: string) => unknown;
    crossDomain?: boolean;
    traditional?: boolean;
    dataFilter?: AjaxDataFilter;
    beforeSend?: AjaxBeforeSendCallback;
    success?: AjaxSuccessCallback;
    error?: AjaxErrorCallback;
    complete?: AjaxCompleteCallback;
    convert?: AjaxDataConverter;
    throws?: boolean;
}
export type FetcherUrl = string;
export type FetcherInit = AjaxSetting;
export type FetcherFn<T = unknown, A extends unknown[] = unknown[], THIS = unknown> = (this: THIS, ...args: A) => Promise<T> | T;
export type FetcherSetting<T = unknown, A extends unknown[] = unknown[], THIS = unknown> = FetcherUrl | FetcherInit | FetcherFn<T, A, THIS>;
```

来源：[src/ajax/types.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/ajax/types.ts>)。


### types-content

```json
{"name": "HtmlContentProps / LazyContentProps / CustomContentProps / IconProps", "summary": "内容渲染器的属性定义。"}
```

```ts
export interface HtmlContentProps extends HElementProps {
    html: string;
    executeScript?: boolean;
}
```

来源：[src/react/types/html-content-props.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/types/html-content-props.ts>)。

```ts
export interface LazyContentProps<T = string | CustomContentType, A extends unknown[] = unknown[], THIS = unknown> {
    tag?: keyof HTMLElementTagNameMap;
    id?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    attrs?: Record<string, unknown>;
    contentClass?: ClassNameLike;
    contentStyle?: JSX.CSSProperties;
    contentAttrs?: Record<string, unknown>;
    loadingClass?: ClassNameLike;
    loadingIndicator?: boolean;
    clearBeforeLoad?: boolean;
    loadingContent?: CustomContentType;
    fetcher: FetcherSetting<T, A, THIS>;
    fetcherArgs?: A;
    fetcherThis?: THIS;
    loadingText?: string;
    errorText?: string;
    type?: 'html' | 'text' | 'custom';
    executeScript?: boolean;
    transformContent?: (content: T) => CustomContentType;
}
```

来源：[src/react/types/lazy-content-props.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/types/lazy-content-props.ts>)。

```ts
export interface CustomContentProps {
    content: CustomContentType | CustomContentType[];
    generatorThis?: unknown;
    generatorArgs?: unknown[];
    children?: ComponentChildren;
    [prop: string]: unknown;
}
```

来源：[src/react/types/custom-content-props.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/types/custom-content-props.ts>)。

```ts
export type CustomContentStatic = ComponentChildren | HtmlContentProps | HElementProps | LazyContentProps;
```

来源：[src/react/types/custom-content-static.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/types/custom-content-static.ts>)。

```ts
export type CustomContentGenerator = (this: unknown | undefined, ...args: unknown[]) => CustomContentStatic;
```

来源：[src/react/types/custom-content-generator.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/types/custom-content-generator.ts>)。

```ts
export type CustomContentType = CustomContentStatic | CustomContentGenerator;
```

来源：[src/react/types/custom-content-type.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/types/custom-content-type.ts>)。

```ts
export type IconProps = {
    icon?: IconType;
    className?: ClassNameLike;
    [key: string]: unknown;
};
```

来源：[src/react/types/icon-props.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/types/icon-props.ts>)。

```ts
export type IconClass = JSX.HTMLAttributes<HTMLElement> & {icon?: string};
export type IconType = string | IconClass | VNode;
```

来源：[src/react/types/icon-type.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/types/icon-type.ts>)。


### types-helper-options

```json
{"name": "ClassNameLike / SizeSetting / DebounceOptions / WaitUntilOptions / GetLibOptions 等", "summary": "工具方法选项与公开类型入口。"}
```

```ts
type ClassNameLike = string | null | undefined | boolean | Record<string, unknown> | (() => ClassNameLike) | ClassNameLike[];
type ClassNameSetting = [name: string, toggle: boolean];
type SizeSetting<A extends unknown[] = unknown[]> = number | string | ((...args: A) => SizeSetting);
type DebounceOptions = {delay?: number; immediate?: boolean};
type DebouncedFunction<T extends (...args: any[]) => any> = T & {cancel: () => void};
type WaitUntilOptions<T> = {
    interval?: number; timeout?: number; timerRef?: {current?: number};
    timeoutValue?: (checkCount: number) => T | Promise<T>; abortSignal?: AbortSignal;
};
```

其他公开类型按对应能力使用：CommandContext/CommandCallback/CommandExecutionOptions/CommandsBindOptions、HotkeysBindingOptions/HotkeysMap、LoadJSOptions/LoadCSSOptions/GetLibOptions、CopyContents/CopyDataMap、FormDataLike/FormItemValue、I18nLangMap/I18nLangCode、ComponentEvents/ComponentEventCallback、WebComponentConfig/ElementProperty、QueryController/InfiniteQueryController/MutationController。完整字段在对应条目和[helpers 入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/index.ts>)、[组件类型入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/component/types/index.ts>)、[查询入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/query/index.ts>)、[元素工厂](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/web-components/factory.ts>)中定位。

Preact 的 JSX/ComponentChildren/VNode/Ref/RefObject/CSSProperties 和 signals/query-core 类型是公开再导出；使用 `import type`，不能当作运行时类实例化。

### types-command-options

```json
{"name":"CommandContext / CommandCallback / CommandsBindOptions / CommandExecutionOptions","summary":"命令解析、参数、回调与批量执行结构。"}
```

以下为工作区公开类型定义，使用 import type；同名运行时工具的默认值与例子见对应 javascript 条目。外部 Preact、TanStack Query 与 tinykeys 类型沿用依赖包。

```ts
export interface CommandContext {
    name: string;
    options?: Record<string, unknown>;
    event?: Event;
    scope?: string;
    prevResult?: unknown;
    element?: HTMLElement;
    abort?: () => void;
}

export type CommandCallback = (context: CommandContext, params: any[]) => any;

export type CommandEventCallback = (event: Event, data: [context: CommandContext, params: unknown[]]) => void;

export type CommandsBindOptions = {
    scope?: string;
    events?: string;
    onCommand?: CommandCallback;
    commands?: Record<string, CommandCallback>;
    scoped?: boolean;
};

export type CommandsBindInfo = CommandsBindOptions & {
    element: HTMLElement;
    gid: number;
};

export interface CommandExecutionOptions {
    execute: (context: CommandContext, params: unknown[]) => unknown;
    event: Event;
    scope?: string;
    options?: Record<string, unknown>;
    signal?: AbortSignal;
}

export interface CommandExecuteInfo {
    name: string;
    scope: string;
    options: Record<string, unknown>;
    params: unknown[];
}

export interface CommandsExecuteInfo {
    async?: boolean;
    commands: CommandExecuteInfo[];
}

export type CommandLike = string | CommandExecuteInfo | undefined;

export type CommandsLike = string | CommandsExecuteInfo | (string | CommandExecuteInfo)[];
```

来源：[helpers/commands.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/commands.ts>)。

### types-loading-options

```json
{"name":"LoadJSOptions / LoadJSModuleOptions / LoadCSSOptions / GetLibOptions","summary":"异步脚本、样式和命名模块的加载配置。"}
```

以下为工作区公开类型定义，使用 import type；同名运行时工具的默认值与例子见对应 javascript 条目。外部 Preact、TanStack Query 与 tinykeys 类型沿用依赖包。

```ts
export type GetLibCallback = () => void;

export interface LoadJSOptions {
    src: string;
    id?: string;
    async?: boolean;
    defer?: boolean;
    noModule?: boolean;
    type?: string;
    integrity?: string;
    version?: string;
    noCache?: boolean;
}

export interface LoadJSModuleOptions<T = unknown> extends LoadJSOptions {
    type: 'module';
    imports?: string | Record<string, string>;
    srcList?: {src: string; imports?: string | Record<string, string>}[];
    globalVar?: boolean | string;
    resolve?: (result: T) => void;
}

export interface LoadCSSOptions {
    src: string;
    id?: string;
    type?: 'css';
    version?: string;
    noCache?: boolean;
}

export type GetLibOptions = {
    src: string | (string | LoadJSOptions | LoadCSSOptions)[];
    id?: string;
    async?: boolean;
    defer?: boolean;
    noModule?: boolean;
    type?: string;
    integrity?: string;
    version?: string;
    name?: string;
    root?: string;
    css?: string;
    check?: string | boolean | (() => boolean | Promise<boolean>);
    dependencies?: string[];
    success?: GetLibCallback;
    noCache?: boolean;
};
```

来源：[helpers/get-lib.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/get-lib.ts>)。

### types-interaction-options

```json
{"name":"HotkeysBindingOptions / HotkeysMap / CopyContents / EnterFullscreenOptions / StickyOptions / GlobalEventOptions","summary":"键盘、剪贴板、全屏、吸附与全局事件选项。"}
```

以下为工作区公开类型定义，使用 import type；同名运行时工具的默认值与例子见对应 javascript 条目。外部 Preact、TanStack Query 与 tinykeys 类型沿用依赖包。

```ts
export type HotkeysBindingOptions = KeyBindingHandlerOptions & {
    scope?: string;
    event?: 'keydown' | 'keyup' | 'keypress';
    when?: (event: KeyboardEvent) => boolean;
};

export type HotkeysBindingMap = KeyBindingMap;

export type HotkeyBindingCallback = (event: KeyboardEvent) => void;

export type HotkeySetting = {
    keys: string | string[];
    handler: HotkeyBindingCallback;
    optional?: boolean;
};

export type HotkeyName = string;

export type HotkeysMap = Record<HotkeyName, HotkeySetting>;

export type HotkeysSettings = boolean | Record<HotkeyName, HotkeySetting | boolean>;
```

来源：[helpers/hotkeys.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/hotkeys.ts>)。

```ts
export type CopyDataMap = {
    text?: string | Blob;
    html?: string | Blob;
    [key: string]: string | Blob | undefined;
};

export type CopyContents = string | CopyDataMap | ClipboardItems;
```

来源：[helpers/copy.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/copy.ts>)。

```ts
export type EnterFullscreenOptions = {
    target: Selector;
    onError?: (error: Error) => void;
    onSuccess?: () => void;
    afterEnter?: (event: Event) => void;
    afterExit?: (event: Event) => void;
};
```

来源：[helpers/fullscreen.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/fullscreen.ts>)。

```ts
export type StickyOptions = {
    side?: 'top' | 'bottom' | 'left' | 'right';
    offset?: number;
    zIndex?: number;
    pinnedClass?: string;
    targets?: string;
    scrollContainer?: string;
};
```

来源：[helpers/sticky.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/sticky.ts>)。

```ts
export type GlobalEventOptions = {
    on: string;
    selector?: string;
    prevent?: boolean;
    stop?: boolean;
    call?: string | ((...args: unknown[]) => void);
    self?: boolean;
    params?: unknown[] | string;
    once?: boolean;
    if?: string | ((...args: unknown[]) => boolean);
    do?: string | ((...args: unknown[]) => void);
    [option: string]: unknown;
};
```

来源：[helpers/global-event.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/global-event.ts>)。

### types-component-events

```json
{"name":"ComponentEvents / ComponentToggleConfig / ComponentCreateOptions / ZUIInitOptions","summary":"组件事件、初始化与触发配置。"}
```

以下为工作区公开类型定义，使用 import type；同名运行时工具的默认值与例子见对应 javascript 条目。外部 Preact、TanStack Query 与 tinykeys 类型沿用依赖包。

```ts
export type ComponentEvents = Record<string, unknown[]>;

export type ComponentEventsDefnition = ComponentEvents | [ComponentEvents, ComponentEvents];

export interface ComponentBaseEvents {
    inited: [ComponentOptions];
    destroyed: [];
}

export type ComponentEventName<E extends ComponentEventsDefnition> = ((E extends [infer E1, infer E2] ? (keyof E1 | keyof E2) : keyof E) | keyof ComponentBaseEvents | keyof HTMLElementEventMap) & string;

export type ComponentEventArgs<E extends ComponentEventsDefnition, N extends ComponentEventName<E>> = [
    ...(N extends keyof ComponentBaseEvents ? ComponentBaseEvents[N] : never),
] | (
    E extends [infer E1, infer E2] ? (
        [...(N extends keyof E1 ? (E1[N] extends unknown[] ? E1[N] : never) : never)] | [...(N extends keyof E2 ? (E2[N] extends unknown[] ? E2[N] : never) : never)]
    ) : [
        ...(N extends keyof E ? (E[N] extends unknown[] ? E[N] : never) : never),
    ]
) | [
    ...(N extends keyof HTMLElementEventMap ? [] : never),
];
```

来源：[component/types/component-events.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/component/types/component-events.ts>)。

```ts
export type ComponentToggleTrigger = 'click' | 'hover';

export type ComponentToggleConfig = {
    name?: string;
    trigger?: ComponentToggleTrigger | ComponentToggleTrigger[];
    skip?: Comparator;
    check?: (this: typeof Component, element: HTMLElement, type: ComponentToggleTrigger, event: Event) => boolean;
    handler?: (this: typeof Component, element: HTMLElement, options: ComponentOptions, type: ComponentToggleTrigger, event: Event) => void;
    getOptions?: (this: typeof Component, element: HTMLElement, options: Record<string, unknown>, event: Event) => Record<string, unknown>;
    setOptions?: boolean;
    convertHref?: boolean | {selector?: string; url?: string};
    prevent?: boolean;
    onGet?: (this: typeof Component, element: HTMLElement) => Component | undefined;
    onCreate?: (this: typeof Component, element: HTMLElement, event: Event, options: ComponentOptions) => Component | false;
    onToggle?: (this: typeof Component, component: Component, element: HTMLElement, event: Event) => void | false;
};
```

来源：[component/types/component-toggle-config.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/component/types/component-toggle-config.ts>)。

```ts
export type ComponentCreateOptions = ComponentOptions & {
    $update?: boolean | 'reset';
    $reset?: boolean;
};

export type ZUIInitOptions = {
    update?: boolean | 'reset';
    runJS?: boolean;
    beforeCreate?: BeforeCreateCallback;
    onCreate?: OnCreateCallback;
};

export type BeforeCreateCallback = (element: HTMLElement) => boolean | undefined;

export type OnCreateCallback = (name: string, options: Record<string, unknown>) => false | Record<string, unknown> | undefined;
```

来源：[component/creator.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/component/creator.ts>)。

### types-web-component-config

```json
{"name":"WebComponentConfig / ElementProperty / ElementSlotMap 及工厂类型","summary":"自定义元素属性转换、注册、slot和适配配置。"}
```

以下为工作区公开类型定义，使用 import type；同名运行时工具的默认值与例子见对应 javascript 条目。外部 Preact、TanStack Query 与 tinykeys 类型沿用依赖包。

```ts
export type ElementProperty<T = unknown> = {
    attribute?: string;
    defaultValue?: T;
    reflect?: boolean;
    fromAttribute?: (value: string | null) => T;
    normalize?: (value: unknown) => T;
    toAttribute?: (value: unknown) => string | null;
};
```

来源：[web-components/properties.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/web-components/properties.ts>)。

```ts
export type WebComponentInstance<P extends object, G extends object = object> = ZuiElement<P> & P & Readonly<G>;

export type WebComponentConstructor<P extends object, G extends object = object> = {
    new(): WebComponentInstance<P, G>;
    readonly properties: Record<string, ElementProperty>;
    readonly slots: ElementSlotMap;
    define(name: string): void;
};

export type WebComponentNativeComponent<O extends object> = new(container: HTMLElement, options: ElementComponentOptions<O>) => Component<O>;

export type WebComponentContext<P extends object, G extends object = object> = {
    readonly element: WebComponentInstance<P, G>;
    /** Synchronize properties/attributes without synthesizing user events. */
    set(options: Partial<P>): void;
    emit<T>(name: string, detail: T, cancelable?: boolean): boolean;
    accessibleAttributes(): Record<string, string>;
};

export type WebComponentConfig<P extends object, O extends object = P, G extends object = object> = {
    /** Opt in to automatic definition when the owning Component is registered. */
    autoDefine?: boolean;
    /** Defaults to zui-<kebab-case source.NAME> when a named component is supplied. */
    tagName?: string;
    /** Inferred from the component argument when omitted; required for standalone configurations. */
    component?: WebComponentTarget<O>;
    properties: {[K in keyof P]-?: ElementProperty<P[K]>};
    /** Map original light-DOM children to the target component's content props. */
    slots?: ElementSlotMap<O>;
    getters?: {[K in keyof G]: (props: Readonly<P>) => G[K]};
    /** Omit when element properties can be passed to the component unchanged. */
    options?: (props: Readonly<P>, context: WebComponentContext<P, G>) => O;
};

export type WebComponentRegistration = {
    autoDefine?: boolean;
    tagName?: string;
    component?: unknown;
    properties: Record<string, ElementProperty>;
    slots?: ElementSlotMap;
};

export type WebComponentOwner<P extends object, O extends object = P, G extends object = object> = {
    new(...args: never[]): object;
    readonly NAME: string;
    readonly WebComponent: WebComponentConfig<P, O, G>;
    readonly WebComponentRenderer: unknown;
};
```

来源：[web-components/factory.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/web-components/factory.ts>)。

```ts
export type ElementComponentOptions<O extends object> = Partial<ComponentOptions<O>> & {$replace?: boolean};
```

来源：[web-components/component-element.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/web-components/component-element.ts>)。

```ts
export type PropertyChangeSource = 'attribute' | 'property' | 'internal';
```

来源：[web-components/element.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/web-components/element.ts>)。

```ts
export type ElementSlotMap<O extends object = Record<string, unknown>> = Readonly<Record<string, 'children' | {
    [K in keyof O]-?: VNode extends O[K] ? Extract<K, string> : never;
}[keyof O]>>;
```

来源：[web-components/slots.tsx](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/web-components/slots.tsx>)。

### types-query-controllers

```json
{"name":"QueryController / InfiniteQueryController / MutationController / QueryClientProviderProps","summary":"查询生命周期和数据泛型。"}
```

以下为工作区公开类型定义，使用 import type；同名运行时工具的默认值与例子见对应 javascript 条目。外部 Preact、TanStack Query 与 tinykeys 类型沿用依赖包。

```ts
export type QueryController<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
> = ReturnType<typeof createQuery<TQueryFnData, TError, TData, TQueryKey>>;
```

来源：[query/create-query.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/query/create-query.ts>)。

```ts
export type InfiniteQueryController<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = InfiniteData<TQueryFnData>,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown,
> = ReturnType<typeof createInfiniteQuery<TQueryFnData, TError, TData, TQueryKey, TPageParam>>;
```

来源：[query/create-infinite-query.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/query/create-infinite-query.ts>)。

```ts
export type MutationController<TData = unknown, TError = DefaultError, TVariables = void, TOnMutateResult = unknown> = ReturnType<
    typeof createMutation<TData, TError, TVariables, TOnMutateResult>
>;
```

来源：[query/create-mutation.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/query/create-mutation.ts>)。

```ts
export type QueryClientProviderProps = {
    client: QueryClient;
    children?: ComponentChildren;
};
```

来源：[query/query-client-context.tsx](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/query/query-client-context.tsx>)。

## recipes

以同一个 core 提供状态、异步等待和清理，workspace：

```ts
import {signal, effect, debounce} from '@zui/core';
const text = signal('');
const dispose = effect(() => console.log(text.value));
const update = debounce((value: string) => { text.value = value; }, 150);
update('ZUI');
// 页面卸载时：
update.cancel();
dispose();
```

组件继承契约通过本页固定锚点共享；具体组件的 Props、方法和标签入口以所属库为准。

## constraints

- core 主入口依赖 window/document 和构建常量，不能作为无 DOM 的纯工具入口。
- 原生组件、Preact 视图、自定义元素的事件和就绪语义分别使用，不互相替代；DOM 挂载前不读取 `$` 视图 ref。
- 不使用 hooks；effect、订阅、observer、计时器和事件按所有者生命周期释放。Query controller 的 destroy 不销毁共享 QueryClient。
- RAWJS、HTML executeScript、全局声明式事件和 runJS 会执行代码，只用于宿主控制的内容；HTML 安全策略由宿主明确提供。
- `Sticky.destroy` 的基类清理限制、Ajax thenable 和全屏返回语义见相应条目。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/main.ts>)
- [原生组件](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/component/component.ts>)
- [Preact 基类](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/react/components/h-element.ts>)
- [工具入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/helpers/index.ts>)
- [自定义元素入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/web-components/index.ts>)
- [查询入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/core/src/query/index.ts>)
