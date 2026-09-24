# 组件基类


## Component 类

在 ZUI3 中所有 JS 组件继承自 `Component` 类，`Component` 类为组件提供了统一的属性和方法：

```ts
/**
 * 组件基类。
 */
class Component {
    /**
     * 组件名称。
     */
    static NAME: string;

    /**
     * 组件默认配置。
     */
    static DEFAULT: object;

    /**
     * 组件构造方法。
     *
     * @param element 组件对应的元素或用于获取对应元素的选择器。
     * @param options 组件的配置选项。
     */
    constructor(element: HTMLElement | string, options: object);

    /**
     * 渲染组件，可以选择在渲染组件时重新指定组件的部分配置。
     *
     * @param options 可选的组件的配置选项。
     */
    render(options?: object): void;

    /**
     * 销毁组件。
     */
    destroy(): void;

    /**
     * 监听组件事件。
     *
     * @param event 事件名称。
     * @param handler 事件处理函数。
     */
    on(event: string, handler: Function): void;

    /**
     * 取消监听组件事件。
     *
     * @param event 事件名称。
     */
    off(event: string): void;

    /**
     * 获取指定元素上的组件实例。
     *
     * @param element 元素或元素选择器。
     * @param key 组件的唯一标识。
     */
    static query(element: HTMLElement | string, key?: string): Component;
}
```

## 创建组件实例

每个组件通常对应一个元素，只有使用对应元素创建了组件实例，组件才会生效，例如：

::: tabs

== HTML

```html
<nav id="myNav"></nav>

<script>
const nav = new zui.Nav('#myNav', {
    items: [
        {text: '项目概览'},
        {text: '任务看板'},
    ]
});
</script>
```

== 示例

<Example>
  <nav zui-create zui-create-nav="{items: [{text: '项目概览'}, {text: '任务看板'}]}"></nav>
</Example>

:::

另一种方式是[通过 `zui-create` 属性来声明组件](/guide/start/#%E4%BD%BF%E7%94%A8-zui-create-%E5%A3%B0%E6%98%8E%E7%BB%84%E4%BB%B6)，例如：

::: tabs

== HTML

```html
<div zui-create="datePicker"></div>
```

== 示例

<Example>
  <div zui-create="datePicker"></div>
</Example>

:::

## 调用组件方法

当创建了组件实例后，就可以调用组件实例上的方法，例如：

::: tabs

== HTML

```html
<nav id="myNav"></nav>
<button id="myNavRenderBtn">重新渲染</button>

<script>
const nav = new zui.Nav('#myNav', {
    items: [
        {text: '项目概览'},
        {text: '任务看板'},
    ]
});

$('#myNavRenderBtn').on('click', () => {
    nav.render({
        items: [
            {text: '项目概览', url: '#overview'},
            {text: '任务看板'},
            {text: '团队成员'},
        ]
    });
});
</script>
```

== 示例

<Example>
  <nav zui-create zui-create-nav="{items: [{text: '项目概览'}, {text: '任务看板'}]}"></nav>
  <button id="myNavRenderBtn1">重新渲染</button>
</Example>

:::

## 获取组件实例

在组件类上提供了一些静态方法用于获取指定元素上的组件实例，例如：

```html
<nav id="myNav"></nav>

<script>
new zui.Nav('#myNav', {
    items: [
        {text: '项目概览'},
        {text: '任务看板'},
    ]
});

const nav = zui.Nav.get('#myNav');
</script>
```


## 通过自定义元素使用组件

Web Component 由对应组件库提供，共用 `@zui/core` 的元素运行时。普通 ZUI 构建可以直接使用这些导出：

```js
zui.defineButton();
zui.definePicker();
// Pager 的独立 Web Component 模块在加载时注册标签。
```

```html
<zui-button text="保存" type="primary"></zui-button>
<zui-pager rec-total="120" rec-per-page="20"></zui-pager>
<zui-picker name="owner" placeholder="请选择负责人"></zui-picker>
```

源码模块按所属库引入：

```js
import {defineButton} from '@zui/button';
import {definePicker} from '@zui/picker';
import '@zui/pager';

defineButton();
definePicker();
```

| 组件 | 元素及注册方式 | 使用说明 |
| --- | --- | --- |
| Button | `ZuiButtonElement`、`defineButton()` | [按钮](/lib/components/button/index.html#web-component) |
| Pager | `ZuiPagerElement`，加载时自动注册 | [分页](/lib/components/pager/js.html#web-component) |
| Picker | `ZuiPickerElement`、`definePicker()` | [下拉选择器](/lib/forms/picker/index.html#web-component) |

重复调用同一实现的注册方法安全。复杂值通过 JavaScript property 设置，注册前赋值在升级时保留；属性更新按微任务合并。`ready` 只表示当前连接首次渲染完成，不代表远程数据加载完成。持续移出文档后释放资源，同一轮 DOM 移动保留实例。

组件采用 Light DOM，样式随所属库提供。运行时在浏览器中使用，Picker 还依赖 `ElementInternals` 的表单关联能力；类型可通过 `import type` 引入。

## 在组件外定义 Web Component

原生组件可以只负责自身行为，在另一个模块中调用 `defineWebComponent(Component, config, tagName?)` 定义自定义元素。原组件无需声明 `static WebComponent`：

```ts
import {Component, defineWebComponent, property} from '@zui/core';

type ExternalCounterOptions = {count: number};

class ExternalCounter extends Component<ExternalCounterOptions> {
    static NAME = 'ExternalCounter';

    afterInit() {
        this.render();
    }

    render(options?: Partial<ExternalCounterOptions>) {
        super.render(options);
        this.element.textContent = String(this.options.count);
    }
}

const externalConfig = {properties: {count: property.number('count', 0)}};
export const ExternalCounterElement = defineWebComponent(ExternalCounter, externalConfig);
```

默认标签为 `<zui-external-counter>`。也可以直接使用 Preact 类或函数；没有 `NAME` 时，通过配置的 `tagName` 或第三个参数指定标签：

```ts
defineWebComponent(
    ({count}: ExternalCounterOptions) => String(count),
    {...externalConfig, tagName: 'app-counter-text'},
);
```

单配置对象的写法同样支持独立定义，此时 `component` 必须显式提供：

```ts
defineWebComponent({
    ...externalConfig,
    component: ExternalCounter,
    tagName: 'app-native-counter',
});
```

`createWebComponent(Component, config)` 只创建构造器；`defineWebComponent()` 在浏览器中立即注册，不受 `autoDefine` 控制。缺少 `customElements` 时只创建构造器，以便模块仍可被引入；注册和渲染需要浏览器环境。标签名优先使用显式参数，其次是 `config.tagName`，最后从组件的 `NAME` 推导。

同一组件和同一外部配置对象复用构造器，不同组件或不同外部配置对象分别创建构造器。配置内容应在首次创建前确定；使用原配置对象可以重复注册同一个标签。若组件已有 `static WebComponent`，外部配置覆盖同名顶层字段，`properties`、`getters` 等对象整体替换。

## 由组件库声明 Web Component

组件库可以在类上提供 `static WebComponent` 配置。`register()` 读取该配置，只有 `autoDefine: true` 时自动注册自定义元素；没有配置的组件保持原有注册行为。以下是供组件库源码使用的 TypeScript 示例：

```ts
import {Component, property} from '@zui/core';
import type {WebComponentConfig} from '@zui/core';

type CounterOptions = {count: number};

class Counter extends Component<CounterOptions> {
    static NAME = 'Counter';

    static WebComponent: WebComponentConfig<CounterOptions> = {
        autoDefine: true,
        properties: {
            count: property.number('count', 0),
        },
    };

    afterInit() {
        this.render();
    }

    render(options?: Partial<CounterOptions>) {
        super.render(options);
        this.element.textContent = String(this.options.count);
    }
}

Counter.register();
```

加载该库后即可使用 `<zui-counter count="3"></zui-counter>`。标签默认由 `NAME` 转为 kebab-case 并添加 `zui-` 前缀，例如 `DatePicker` 对应 `zui-date-picker`；通过 `tagName` 可以显式指定名称。`register()` 的组件查找别名不改变自定义元素标签名。

当 `Component.register()` 或工厂接收到所属组件类时，`WebComponent.component` 可以省略。渲染目标按以下优先级决定：

1. 显式设置 `WebComponent.component` 时使用该值。
2. 所属类继承 `ComponentFromReact` 时使用其 `static Component`，直接渲染 Preact。
3. 所属类继承普通 `Component` 时使用该类自身，保留原生实例生命周期。

Pager 已将自定义元素定义放在独立模块中，通过 `defineWebComponent(PagerReact, config)` 接入；原生 Pager 类只负责自身注册。若需要保留 Pager wrapper 的参数处理和生命周期，可以显式配置 `component: Pager`。

确定目标后，工厂自动选择渲染与清理方式，无需额外声明模式：

| 配置中的组件类型 | 创建与更新 | 移除后的清理 |
| --- | --- | --- |
| ZUI `Component` 子类 | 创建原生实例，更新时调用 `setOptions()` 或 `render()` | 调用实例 `destroy()` |
| ZUI `ComponentFromReact` 子类 | 保留完整原生 wrapper，包括其参数处理和生命周期 | 调用 wrapper 的 `destroy()`，卸载内部 Preact 树 |
| Preact 组件类或函数 | 直接将转换后的 props 交给 Preact | 卸载整个 Preact 树 |

直接调用 `createWebComponent(config)` 或 `defineWebComponent(config, tagName)` 时没有所属类上下文，配置中必须提供 `component`，否则会报错。`ComponentFromReact` 未声明 `static Component` 且配置中未指定目标时也会报错。

### 配置与类型

`WebComponentConfig<P, O, G>` 中，`P` 是元素的可写属性，`O` 是原组件接收的 options/props，`G` 是只读计算属性。`O` 默认与 `P` 相同；不需要计算属性时可以省略 `G`。

| 配置 | 说明 |
| --- | --- |
| `autoDefine` | 仅值为 `true` 时随 `Component.register()` 自动注册 |
| `tagName` | 可选的自定义元素标签名 |
| `component` | 可选的原生 ZUI 组件或 Preact 组件；省略时从所属类推导，独立配置必须提供 |
| `properties` | 声明全部可写属性的默认值、转换和 attribute 映射 |
| `slots` | 可选的插槽名到内容 prop 的映射；空字符串表示默认插槽 |
| `getters` | 按名称提供 `(props) => value`，生成只读 property |
| `options` | `(props, context) => options`；属性可直接传给原组件时可以省略 |

`property.string()`、`property.boolean()` 和 `property.number()` 声明标量转换；`property.booleanOrNumber()` 声明布尔值或正整数的联合属性，例如 Picker 的 `multiple`。`property<T>()` 声明仅供 JavaScript 使用的数组、对象或函数属性，未指定默认值时初始值为 `undefined`；此时 `T` 应包含 `undefined`。属性名不能覆盖元素已有的属性或方法，例如 `title`、`focus`、`ready`。

`options()` 中的 `context` 提供以下能力：

- `element`：当前元素及其可写属性、只读计算属性。
- `set(partialProps)`：同步属性与 attribute，并合并更新；不会自动产生用户事件。
- `emit(name, detail, cancelable?)`：发出冒泡且 `composed: true` 的 `CustomEvent`，返回 `dispatchEvent()` 的结果。
- `accessibleAttributes()`：取得宿主的 `aria-label`、`aria-labelledby`、`aria-describedby` 和 `title`，由配置映射到内部组件。

### 内容插槽

通过 `slots` 将 HTML 直属子内容传给已有 Preact 组件的内容 props。以下为源码模块中的完整定义：

```tsx
import {defineWebComponent} from '@zui/core';
import type {ComponentChildren} from 'preact';

type SectionProps = {
    heading?: ComponentChildren;
    children?: ComponentChildren;
    actions?: ComponentChildren;
};

function SectionView({heading, children, actions}: SectionProps) {
    return (
        <section>
            <header>{heading}</header>
            <div>{children}</div>
            <footer>{actions}</footer>
        </section>
    );
}

export const ZuiSectionElement = defineWebComponent(SectionView, {
    tagName: 'zui-section',
    properties: {},
    slots: {'': 'children', heading: 'heading', actions: 'actions'},
    options: () => ({heading: '项目详情'}),
});
```

```html
<zui-section>
    <strong slot="heading">基本信息</strong>
    <span slot="heading"> · 可编辑</span>
    <p>客户门户计划于周五发布，当前已完成附件预览验收。</p>
    <button slot="actions" type="button">编辑</button>
</zui-section>
```

- 只收集宿主的直属文本和元素节点；无 `slot` 或 `slot=""` 的节点使用默认插槽。嵌套内容里的 `slot` 由其所属组件处理。
- 同名内容按声明顺序组合。每个插槽映射到不同的内容 prop，目标类型需能接收 Preact VNode；`children` 可以直接使用。
- 有内容时覆盖 `options()` 返回的同名 prop；没有内容或只有排版空白时保留原 prop，由组件提供回退内容。插槽不写入元素的 `options` 快照，也不会生成可写 property。
- 只接管已声明的插槽。未声明的内容保留在宿主原位置；按组件文档提供受支持的插槽名。
- 支持向宿主 `append()` / `prepend()` 内容、修改原节点的 `slot`、删除原节点及修改其内容，插槽映射会合并更新。原节点及其子树不会被复制，已有监听器和输入值会保留。
- 组件暂时不渲染某个内容 prop 时，节点会被暂存；恢复渲染时重新投放。真正断开连接后按原顺序恢复宿主子内容，重新连接后再次投放。

继承 `PreactElement` 的专用适配器可以声明 `static slots = {'': 'children'}`，在 `_renderView()` 中用 `this._slotProps()` 获取并合并插槽内容。原生组件目标需要自行渲染收到的内容 props；配置不会让 DOM 增强器自动具备内容渲染能力。

这是 Light DOM 内容投放：内部使用透明的 `<slot>` 容器显式放置原节点，节点的实际父级会改变，不提供 Shadow DOM 的 `assignedNodes()`、`slotchange` 或样式隔离语义。每个内容 prop 应只渲染到一个位置。调用方可以修改保留的原节点，但不要同时用另一个渲染器重建宿主或内部挂载树。普通属性更新不移动已投放的节点；初次投放、插槽改名或隐藏内容可能影响焦点，并触发嵌套自定义元素的连接回调。

### 手动创建与注册

若希望由使用方决定注册时机，在组件库中将 `autoDefine` 设为 `false`，然后调用工厂。以下代码继续使用上面的 Counter 配置：

```ts
import {createWebComponent, defineWebComponent} from '@zui/core';

// 创建并导出构造器，暂不注册标签。
export const ZuiCounterElement = createWebComponent(Counter);
export type ZuiCounterElement = InstanceType<typeof ZuiCounterElement>;

// 由使用方显式注册，默认使用配置的 tagName 或由 NAME 推导。
// 也可以调用 defineWebComponent(Counter, 'app-counter') 指定名称。
defineWebComponent(Counter);
```

同一个所属类重复调用工厂或 `register()` 会复用构造器；依靠推导的不同子类即使继承同一份配置，也会生成各自的构造器。显式提供 `component` 的配置仍按配置对象复用构造器，传入所属类或该配置得到相同结果。重复注册同一实现和标签是幂等的，同名标签被其他构造器占用时会报错；同一构造器不能注册为多个标签。

配置对象应在模块初始化时创建并保持稳定。修改配置、渲染目标或标签名后应重新加载页面；导入后关闭 `autoDefine` 不会撤销已完成的注册。

工厂生成 property 的类型，无需手写 `declare count`。需要让 `document.createElement()` 识别标签类型时，由组件库增加静态声明：

```ts
declare global {
    interface HTMLElementTagNameMap {
        'zui-counter': ZuiCounterElement;
    }
}
```

元素采用 Light DOM，工厂在宿主内部创建 `.zui-webc-mount` 挂载容器。组件库负责提供宿主及挂载容器的样式，例如 Counter 使用 `zui-counter { display: block; }` 和 `zui-counter > .zui-webc-mount { display: contents; }`。依赖宿主已有 DOM 的增强型组件需要额外适配。内容插槽需通过 `slots` 显式声明；表单关联和组件专属交互仍由专门适配器提供。

没有 Custom Elements API 时，`Component.register()` 跳过自动定义并继续原有组件注册。工厂的实际注册和渲染需要浏览器环境，这不代表支持服务端渲染。
