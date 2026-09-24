# ZUI 组件规范

## 两个判断维度

先用 [library.md](library.md) 判断包角色，再独立选择实现架构。包角色相同的库可以使用不同架构，同一架构也可以服务不同包角色。

## 五种实现架构

| 架构 | 适用条件 | 典型信号/参考 |
| --- | --- | --- |
| 纯 CSS | 语义 DOM 已足够，只需外观、变量和状态类 | `label`、`panel` |
| Preact 渲染器 | 需要通过 props 生成结构，但不需要公共命令式实例 | `button`、`alert`、`form-control` |
| Preact + `ComponentFromReact` | 同时需要 Preact 视图和 `new X(element, options)` 等 vanilla API | `avatar`、`nav`、`pager`、`tree`、`progress-circle` |
| 原生 `Component` DOM 增强器 | 增强现有 DOM，结构由调用方提供，交互较直接 | `tabs`、`upload`、`split` |
| 控制器 + Preact 子视图 | 浮层、全局协调或复杂命令式生命周期由控制器管理，局部内容用 Preact | `dropdown`、`modal`、`popover`、`messager` |

选择时依次判断：

1. 是否只需要已有 DOM + CSS；
2. 是否必须根据数据生成复杂结构；
3. 是否需要命令式实例、方法、事件或自动创建；
4. 是否必须增强调用方已有 DOM；
5. 是否涉及 portal、浮层、全局栈、定位或控制器协调。

角色或架构尚不清楚时，按 [共享工作流](workflow.md) 检查所需的相近实现。

## 公开消费方式

在设计中明确实际支持的方式，不默认全部提供：

- 语义 HTML + CSS 类；
- Preact 组件导入；
- vanilla 构造器 `new Component(selector, options)`；
- 已实现适配的 Web Component 标签，如 `<zui-pager>`；
- `z-use-*` / `zui-create` 自动创建；
- `zui-toggle` / toggle 触发；
- 命令式方法、事件和实例查询。

`registerReactComponent()` 把 Preact 渲染器登记到自动渲染体系；`Component.register()` 登记 vanilla 组件与 declarative/toggle 能力。两者作用不同，只在公开消费方式需要时接入。

Web Component 是可选消费方式；一旦提供，定义必须在 `lib/<lib-name>/src/web-component/` 内实现，通过目录 `index.ts` 和 `src/main.ts` 导出。工厂配置和元素子类均遵循此要求，具体参照 [Web Component 目录与入口规范](web-component.md#所有权目录与公开入口)。它使用 Custom Elements 注册与连接生命周期，不依赖页面扫描来创建实例。

Vanilla 子类必须提供稳定的 `static NAME`。`ComponentFromReact` 子类还要提供正确的 `static Component`，并定义替换宿主、render/reset、ref 与 destroy 行为。

## 目录与入口

- 新库按需使用 `component/`、`vanilla/`、`web-component/`、`types/`、`style/`、`i18n/`。
- 已有库沿用其 `components/` 等合理命名。
- 局部 `index.ts` 与 `src/main.ts` 显式导出公开类型、组件和类。
- 样式、注册、i18n 等副作用导入必须从真实消费入口可达。
- 使用 Preact，不直接引入 React；TSX 配置遵循仓库的 `jsxImportSource: preact`。
- 跨库导入使用 `@zui/<name>`，不穿越 lib 相对导入。

不要为理论上的消费方式生成入口。`package.json` 的导出与 `zui.contributes` 必须和真实 API 一致。

## API 与状态

明确：

- options/props 的必选项、默认值、受控/非受控语义和更新方式；
- 事件名、触发顺序、参数和是否允许取消；
- 命令式方法、返回值、幂等性与销毁后行为；
- loading、empty、disabled、error 等状态；
- 异步竞态、重复调用、失败恢复与取消；
- DOM 所有权、实例缓存、监听器、observer、计时器、portal 和销毁清理。

优先复用 `Component`、`ComponentFromReact`、Cash、core helper 和现有控件，不重复建立基础设施。

### Preact 状态与副作用

- 禁止使用 hooks 机制：不导入或调用 `preact/hooks`，不使用自定义 hooks，也不使用 `useSignal`、`useComputed`、`useSignalEffect` 等 signals hooks。
- 响应式状态推荐使用 `signal`，派生值使用 `computed`，批量更新按需使用 `batch`；优先从 `@zui/core` 的公开入口复用这些 API。组件私有状态由实例持有，避免在每次 render 时重新创建。
- 副作用按需使用 `effect`，结合类组件或 vanilla 实例的生命周期管理；卸载或销毁时调用其返回的 disposer，并在 effect 的清理函数中释放监听器、计时器等资源。

## 布局与样式

- 组件实现、调试页和文档示例优先组合 `@zui/utilities` 辅助类。新增或修改布局类、示例容器类及可复制代码时，读取并执行 [CSS utilities 使用与核实](utilities.md)：核实公开选择器、实际效果和目标消费入口，再决定使用已有类或最少自定义 CSS。
- 使用稳定的组件根类，并让状态/元素类从根语义派生；复用辅助类时保留既有 DOM/CSS 公开契约。
- 公共可定制值使用 `--<component>-*` CSS 变量，提供合理默认值；确需运行时计算的值可通过 CSS 变量或 `style` 传入。
- 避免泄漏全局样式，复核 dark mode、响应式、RTL（若相关）及主题变量。

## 无障碍

- 优先正确语义标签；实现键盘操作、焦点进入/返回、可见 focus 样式和必要 ARIA。
- 动态内容和状态变化需要可被辅助技术理解；disabled 与只读语义不能只靠颜色。

## 计划与验收

计划规模、任务范围及必要澄清遵循 [共享工作流](workflow.md)；本规范提供本次相关设计的判断依据。

按共享工作流选择本次所需验证；新增或改变对应能力时，检查相关项目：

- 基础渲染与所有承诺消费方式；
- 默认、主要变体、disabled/loading/empty/error；
- 键盘、焦点和 ARIA；
- 事件顺序、方法、重复初始化与 destroy；
- 类型和目标库构建；
- 调试页中的主要交互及正式示例（若纳入范围）。
