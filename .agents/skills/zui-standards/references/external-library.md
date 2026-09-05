# ZUI 外部库按需加载规范

## 适用边界

当组件依赖未编入 ZUI 产物、需要在浏览器运行时从 `$.libRoot` 或指定地址加载的第三方 JS/CSS 时，统一通过 `@zui/core` 的 `LibLoader<T>` 按需加载。

- 始终需要且明确随包打包的依赖继续使用静态 `import` 和正常的 `dependencies`，不要为了形式统一改成动态资源。
- 组件实现不要直接调用 `$.getLib`、`$.registerLib`，不要自行插入 `<script>` / `<link>`，也不要另建静态字段缓存第三方模块。
- `dev.ts` 可以用同一注册名覆盖资源地址；`@zui/core` 的加载基础设施不受上述组件侧限制。

加载模式可参考 `lib/sortable/src/helper/sortable-loader.ts` 和 `lib/sortable/src/vanilla/sortable.ts`，以 `lib/core/src/helpers/lib-loader.ts`、`get-lib.ts` 的实际契约为准。按本次决策核实相关部分，需要时再参考架构相近的实现，不固定参考数量。

## Loader 所有权与注册

- 同一 ZUI 库内依赖同一外部库的组件共享一个模块级 `LibLoader<T>` 单例，默认放在私有 `src/helper/<name>-loader.ts`；只有消费者确实需要控制加载时才从公共入口导出。
- 跨 ZUI 库复用同一外部能力时，优先依赖已有的归属库及其公共加载 API，不要用相同注册名复制另一套 loader；确需隔离版本或配置时使用不同注册名并说明共存策略。
- 使用稳定、全局唯一的注册名。生产配置在构造 loader 时注册，确保从真实组件入口可达，不依赖 `dev.ts` 或调用方预先注册。
- 用准确的模块/构造器类型参数约束 loader；仅为类型使用第三方包时采用 `import type`，不要产生会把第三方实现编入 ZUI bundle 的运行时导入。
- 显式提供 `check`，描述加载完成后应存在的全局变量或检测函数；不要借用 `name` 表达全局变量名。
- 随库发布的资源放入目标库 `public/`，生产 `src` 使用构建后相对于 `$.libRoot` 的路径，例如 `<publicPath>/<file>`，不要使用仅开发服务器可识别的 `/lib/<name>/public/...`。
- 多个 JS/CSS、ES module 或前置库通过 `GetLibOptions.src`、`type`、`dependencies` 等配置表达，不在组件生命周期中手写加载顺序。

```ts
import {LibLoader} from '@zui/core';
import type {ExternalClass} from '../types';

/** 外部 UMD 包的按需加载器。 */
export const externalLoader = new LibLoader<ExternalClass>('external-lib', {
    src: 'example/external.min.js',
    check: 'ExternalLib',
});
```

## 组件接入与生命周期

- 在真正需要第三方能力的异步初始化阶段调用 loader；导入组件本身只能完成注册，不应立即下载资源。
- `await` 后同时检查加载结果与当前实例是否仍存活，再创建第三方实例。实例可能在资源返回前已被 `destroy()`。
- 复用 loader 的模块与错误缓存，不在组件类上维护可写的第二份模块缓存。确需保留兼容 API 时，使用只读 getter 委托 `loader.Module`。
- `loader.Module` 在尚未成功加载时会抛错，只用于明确要求“已加载模块”的同步访问；普通初始化使用 `await loader.load()` 的返回值。
- 明确定义加载完成前、加载失败后和销毁后命令式方法的行为，避免无说明的非空断言。
- `destroy()` 必须清理已创建的第三方实例、监听器、DOM 和其他资源；加载尚未完成时依靠存活检查阻止迟到初始化。

```ts
static get Module(): ExternalClass {
    return externalLoader.Module;
}

static loadModule(): Promise<ExternalClass | undefined> {
    return externalLoader.load();
}

async afterInit() {
    const External = await Example.loadModule();
    if (!External || this.destroyed) {
        return;
    }
    this._module = new External(this.element, this.options);
}
```

只在既有兼容性或明确消费场景需要时公开 `Module` / `loadModule()`；私有加载不为理论用途增加公共 API。

## 失败、缓存与重试

- `load()` 默认捕获并缓存首次错误，返回 `undefined`。组件必须处理空结果，不得继续实例化第三方模块。
- 外部库是必需能力且需要向调用方传播错误时，从第一次调用起使用 `load({throwError: true})`，并在组件 API 中定义 error 状态、事件或 Promise 行为。
- 缓存错误后的显式重试使用 `load({noCache: true})`；它会清除 loader 的错误缓存，并替换上一次加载失败的资源节点及失败的前置依赖节点。需要继续抛错时同时传入 `throwError: true`。不要通过循环或重复初始化制造隐式重试。
- 同一资源正在加载时，后续调用复用该请求；成功或失败都会结束所有等待者。失败节点会保留错误状态供诊断，只有显式重试才会移除并重新请求。
- 加载失败后的降级、静默停用或错误提示必须与组件用途一致，并在公开文档和调试场景中可验证。

## 开发资源与依赖声明

- `dev.ts` 可在组件模块导入后用相同注册名覆盖为本地资源，并重复声明正确的 `check`：

```ts
$.registerLib('external-lib', {
    src: '/lib/example/public/external.min.js',
    check: 'ExternalLib',
});
```

- 不让生产组件依赖这段开发注册；预先存在且通过 `check` 的全局模块应直接复用，不重复注入资源。
- 仅用于类型、构建或本地资源准备的第三方包通常属于 `devDependencies`；若发布的类型声明引用该包，必须按库规范确保消费者仍能解析这些类型。
- 入口、`package.json`、`zui.contributes` 和资源复制结果必须与真实消费方式一致，不因内部 loader 自动声明新的公共模块。

## 计划与验证

计划与批准遵循 [共享工作流](workflow.md)；本次涉及的加载决策包括注册与所有权、资源及 `check`、依赖与时机、公开 API、失败重试、销毁竞态及开发接线。未变化部分引用现状。

按共享工作流选择本次所需验证；新增封装或改变对应行为时检查：

- 未预载时首次使用才请求资源，成功后正常初始化；
- 已预载全局模块时不重复插入资源；
- 多实例或并发初始化不产生第二份模块缓存或重复资源标签，每个组件只创建自身需要的第三方实例；
- 加载失败、显式重试以及必需/可降级两种错误策略；
- 加载返回前销毁组件不会发生迟到初始化；
- `destroy()` 清理第三方实例及其副作用；
- `dev.ts` 本地地址、构建后 public 地址、类型解析、目标库 lint 与单库构建。
