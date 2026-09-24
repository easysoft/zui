# ZUI Web Component 开发规范

## 适用范围与实现依据

用于在 ZUI 组件库中新增、维护或评审自定义元素适配，以及修改相关 core 工厂和运行时。是否提供 Web Component 由各库按实际需求决定，不要求所有组件自动具备该形态。

本规范依据 `dev_webc` 的实现（`b7877a08cb`）。先核实目标检出与实际构建是否包含下列源码；尚未合入或发布的能力不能当作当前版本已经提供的 API。

| 需要判断的内容 | 仓库内源码 |
| --- | --- |
| 工厂、配置与类型推导 | `lib/core/src/web-components/factory.ts` |
| 属性描述符 | `lib/core/src/web-components/properties.ts` |
| 注册、属性升级、连接与断开 | `lib/core/src/web-components/element.ts` |
| 原生实例与 Preact 生命周期 | `lib/core/src/web-components/component-element.ts`、`lib/core/src/web-components/preact-element.ts` |
| 独立工厂配置 | `lib/pager/src/web-component/pager.ts` |
| 元素专有方法与表单关联 | `lib/button/src/web-component/button.ts`、`lib/picker/src/web-component/picker.ts` |

## 所有权、目录与公开入口

具体组件的 Web Component 定义必须在所属库的单数目录 `lib/<lib-name>/src/web-component/` 内实现；独立工厂配置与元素子类均适用。`@zui/core` 的工厂、属性描述符和元素基类属于公共基础设施，保留在 `lib/core/src/web-components/`，不随具体组件的目录约定改名。

```text
lib/<lib-name>/src/
  component/                 # 已有 Preact 视图（若适用）
  vanilla/                   # 已有原生组件（若适用）
  web-component/
    <name>.ts                # 元素定义、专用配置/类型和必要的注册函数
    index.ts                 # 汇总该库的元素导出
  main.ts                    # export * from './web-component';
```

参考 Picker：[picker.ts](../../../../lib/picker/src/web-component/picker.ts) 实现元素类、专用类型、`definePicker()` 和标签类型映射，[index.ts](../../../../lib/picker/src/web-component/index.ts) 汇总导出，[main.ts](../../../../lib/picker/src/main.ts) 接入库入口。

- 元素类或工厂调用、Web Component 专用配置、注册函数及类型在 `src/web-component/` 内实现；不能只在该目录转导其他位置的定义。复用的原组件、选项类型和公共 helper 仍留在原有位置，由适配层导入。
- 不在 `src/vanilla/`、`src/component/` 或 `src/main.ts` 内联 Web Component 定义，也不以根级 `src/web-component.ts` 或具体组件库的复数目录 `src/web-components/` 替代。
- 新增适配采用独立工厂配置或元素子类，与原组件定义分离；原类无需声明 `static WebComponent`。工厂对已有静态配置的兼容支持不改变新增定义的目录要求。
- 元素类/构造器、公开选项、事件类型和必要的 `defineX()` 通过目录 `index.ts` 导出，`src/main.ts` 使用 `export * from './web-component';` 接入；在定义文件中声明对应的 `HTMLElementTagNameMap`。
- 不恢复独立的 `lib/web-components` 包，也不在各库复制 core 运行时；跨库使用公开的 `@zui/<name>` 入口。
- `./web-component`、`./vanilla` 等包子路径只在确有独立消费需求时提供，并同步 `package.json`、类型解析和构建消费验证。不要根据源码目录猜测包导出。
- 已有 Pager 提供 `/vanilla`、`/react` 和 `/web-component`；前两者不注册自定义元素，后者及聚合入口会注册。Button、Picker 的主入口导出显式注册函数。按目标库选择和说明注册行为，不将一种方式推广为所有库的默认值。
- 样式和必要的注册、i18n 副作用必须从承诺的消费入口可达，尤其检查独立入口和单库构建。

## 工厂配置与元素子类

按实际需求选择：

| 需求 | 实现方式 |
| --- | --- |
| 属性转换、计算属性、原组件 options 映射和事件转发 | `createWebComponent` / `defineWebComponent`，参考 Pager |
| 元素专有方法、表单关联或额外生命周期 | 扩展 `PreactElement`、`ComponentElement` 或 `ZuiElement`，参考 Button、Picker |

不为迁移目录而强行把专有元素子类改写成工厂配置；工厂没有现成支持的表单回调、方法和生命周期不能凭空写入 config。

独立工厂定义的最小完整示例，放在库的 `src/web-component/<name>.ts`：

```ts
import {defineWebComponent, property} from '@zui/core';
import type {WebComponentConfig} from '@zui/core';

type CounterOptions = {count: number};
type CounterComputed = {doubled: number};
const CounterView = ({count}: CounterOptions) => String(count);
const config: WebComponentConfig<CounterOptions, CounterOptions, CounterComputed> = {
    tagName: 'zui-counter',
    properties: {count: property.number('count', 0)},
    getters: {doubled: props => props.count * 2},
};

export const ZuiCounterElement = defineWebComponent(CounterView, config);
export type ZuiCounterElement = InstanceType<typeof ZuiCounterElement>;

declare global {
    interface HTMLElementTagNameMap {
        'zui-counter': ZuiCounterElement;
    }
}
```

真实组件复用已有视图或原生类。`WebComponentConfig<P, O, G>` 分别描述元素属性、目标组件 options、只读计算属性；让调用推导类型，映射较复杂时显式标注，避免用 `any` 掩盖差异。

### API 与目标推导

- `createWebComponent(Target, config)` 创建构造器；`defineWebComponent(Target, config, tagName?)` 还会在存在 `customElements` 时注册。两者均支持无静态配置的原生 `Component`、`ComponentFromReact` 以及 Preact 类或函数。
- 也支持单配置对象，此时必须提供 `component`；或传入已有 `static WebComponent` 的所属类，复用类内配置。
- 显式 `config.component` 优先，直接使用该目标。省略时，`ComponentFromReact` 从 `static Component` 推导 Preact 视图，普通 `Component` 使用原生类自身，直接传入的 Preact 类/函数使用自身。需要 wrapper 的参数处理与生命周期时，显式配置 `component: Wrapper`。
- 标签名优先级：显式参数 → `config.tagName` → `zui-` 加目标 `NAME` 的 kebab-case。无 `NAME` 的函数必须明确标签名，不从函数名猜测。
- `autoDefine` 只控制所属类的 `Component.register()` 是否自动定义元素；调用 `defineWebComponent()` 不受该开关控制。显式注册可导出 `createWebComponent()` 的结果，再在 `defineX()` 中调用其 `.define(tagName)`。
- `Component.register()` 的静态配置接入仍可用，但不是独立定义的前提。缺少 `customElements` 时工厂只创建构造器；元素 `.define()` 和手写 `defineX()` 必须在浏览器注册环境中调用。这不代表支持服务端渲染或 hydration。

### 配置身份与注册

同一目标和同一外部配置对象复用构造器；不同目标或不同配置对象分别创建。把会重复使用的配置保留为稳定对象，首次创建后不要修改它。已有静态配置与外部配置按顶层浅合并，`properties`、`getters` 整体替换。

重复注册同一构造器与标签应幂等；不同构造器占用同一标签必须报错。同一构造器也不能注册为多个标签。不要通过忽略冲突或重新创建配置来伪装幂等；HMR 换了构造器时需要整页刷新，浏览器不能撤销已有定义。

## 属性、状态和事件契约

属性统一使用 `@zui/core` 的 `property`，不再导入 `stringProperty`、`numberProperty` 等旧命名导出：

| 写法 | 语义 |
| --- | --- |
| `property.string(attribute, defaultValue?, reflect?)` | 字符串，默认空串并反射；第三个参数为 `false` 时不反射 |
| `property.boolean(attribute)` | HTML 存在性布尔属性；`disabled="false"` 仍为真 |
| `property.number(attribute, defaultValue, minimum?)` | 有限整数，默认最小值 0；非法值和越界值回退默认值 |
| `property.booleanOrNumber(attribute, defaultValue)` | 布尔值或正整数，支持字符串 `true` / `false` |
| `property<T>(defaultValue?)` | 只通过 JavaScript property 传递，不生成 attribute 映射 |

数组、对象和函数通过 JavaScript property 传入，不把所有 options 序列化成 HTML，更不在 attribute 中执行代码。小数或其他转换需求使用明确的 `ElementProperty<T>`，不要误用只接受整数的 `property.number()`。

- `properties` 显式列出元素选项；`setOptions()` 拒绝未知字段，`options` 是快照。getter 和选项不能与已有 HTMLElement/运行时成员冲突。
- `options(props, context)` 将元素属性映射到组件参数；`context.set()` 只同步已声明属性，不合成用户事件。避免在映射中制造反复更新的状态循环。
- 使用 `context.emit()` 或 `_emit()` 转发明确的 DOM 自定义事件；事件默认冒泡且 `composed: true`，取消语义按实际行为设置。区分用户操作、程序赋值和内部规范化，并导出事件 detail 类型。
- 不直接把原组件全部 options、回调或实例方法当作元素 API；例如 Pager 的 `pageTotal` 是只读 getter，Button 的 `click()` 与 Picker 的 `show()` 由各自适配提供。

## 生命周期、样式与表单

- 使用 Light DOM，元素保留宿主并持有 `.zui-webc-mount`。框架或调用方不应同时管理其渲染子树；按库提供宿主和挂载容器样式，不默认引入 Shadow DOM。
- core 负责注册前 property 升级、微任务合并更新、同轮 DOM 移动保留实例，以及真正断开后的销毁。`ready` 等待当前连接首次渲染，不是每次属性更新的完成通知；渲染失败会拒绝该 Promise 并发送 `zui-error`。
- 原生适配由 `ComponentElement` 管理实例、更新和销毁，并禁用宿主替换、dataset 二次读取与原组件自行脱离销毁。Preact 适配卸载整棵视图；额外 observer、timer、effect 和外部监听按实例清理，继承时保留基类清理。
- 用 `context.accessibleAttributes()` 或 `_accessibleAttributes()` 将可访问名称转发到交互节点，核实焦点、键盘、禁用和加载行为。表单关联不能只靠宿主 `name` 属性模拟。
- 需要表单关联时参考 Picker 的 `ElementInternals`：区分当前 value 与默认 attribute，覆盖提交、reset、restore、fieldset disabled 和校验；避免原组件隐藏输入与元素重复提交。

## 示例与验证

开发页和正式文档沿用各自的语法；示例直接使用自定义标签，不用 `zui-create` 或文档 `<ZUI>` 再包一层原生实例。说明实际注册步骤、CSS 入口、attribute/property 区别、事件 detail 和必要的平台能力。

开发页按目标入口调用 `defineX()` 或导入会注册的模块；每次 `onPageUpdate` 重新查询元素、设置复杂 property 并绑定局部事件，不对旧 DOM 保留闭包。官网预览在客户端挂载并等待 ZUI 可用后注册和赋值，核实文档渲染器能保留自定义标签；卸载时清理页面副作用，元素随断开自行清理。

先检查实际定义文件位于 `lib/<lib-name>/src/web-component/`，并追踪其经目录 `index.ts` 到 `src/main.ts` 的导出链；仅存在目录或转导文件不足以通过此项检查。再按变更风险复用现有检查，不为纯目录移动新增重复测试：

- 类型与 DOM：配置推导、目标识别、注册幂等/冲突、注册前赋值、attribute 反射和非法值、程序赋值与用户事件、移动/断开/重连、异步初始化和资源清理。参考 `tests/dom/web-components-*.test.ts*`。
- 公共入口或构建变化：增加 `pnpm test:build`，验证单库、已承诺独立入口、CSS 和缺少 Custom Elements API 时的导入；不能只验证开发服务器。
- 浏览器交互或表单变化：按需运行 `tests/e2e/web-components*.spec.ts`，重点验证键盘、焦点、真实表单与 ESM/UMD 消费。真实 `ElementInternals` 行为不能只用 DOM 模拟测试替代。
- 工厂/core 变化同时覆盖配置式 Pager 与继承式 Button/Picker，检查多个库共享同一 core 运行时。构建、文档生成和开发服务的所有权仍遵循共享工作流。
