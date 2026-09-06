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
- `z-use-*` / `zui-create` 自动创建；
- `zui-toggle` / toggle 触发；
- 命令式方法、事件和实例查询。

`registerReactComponent()` 把 Preact 渲染器登记到自动渲染体系；`Component.register()` 登记 vanilla 组件与 declarative/toggle 能力。两者作用不同，只在公开消费方式需要时接入。

Vanilla 子类必须提供稳定的 `static NAME`。`ComponentFromReact` 子类还要提供正确的 `static Component`，并定义替换宿主、render/reset、ref 与 destroy 行为。

## 目录与入口

- 新库按需使用 `component/`、`vanilla/`、`types/`、`style/`、`i18n/`。
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

## 布局与样式

- 组件实现、调试页和文档示例统一优先在 HTML/JSX 的 `class` / `className` 中组合 `@zui/utilities` 辅助类，实现布局、间距、尺寸、排版、颜色等通用样式。只有现有辅助类无法快捷、清晰地实现目标时，才补充最少的自定义 CSS；不要用静态内联样式绕过这一原则。
- 使用前按需查阅 `lib/utilities/docs/utilities/` 和 `lib/utilities/src/`，核实公开类名及效果。HTML/JSX 使用 `flex`、`items-center`、`gap-2`、`p-4` 等实际公开的无前缀类名，不假设每个 Tailwind utility、变体或任意值语法都有对应的公开类。
- 自定义 CSS 只处理辅助类未覆盖的部分，例如无法通过现有类表达的复合状态、伪元素或组件特有动画，并在实现说明中简述原因。确需 CSS 时，Tailwind `@apply` 使用仓库前缀形式，例如 `@apply -flex -gap-2`；把可直接组合的辅助类包装进新选择器仍属于自定义 CSS。
- 使用稳定的组件根类，并让状态/元素类从根语义派生；复用辅助类时保留既有 DOM/CSS 公开契约。
- 公共可定制值使用 `--<component>-*` CSS 变量，提供合理默认值；确需运行时计算的值可通过 CSS 变量或 `style` 传入。
- 核实真实消费入口和目标构建会包含所用辅助类的样式，并按消费方式维护必要依赖与样式接线；不能只因开发页加载了完整 ZUI 就认为单库消费也可用。
- 避免泄漏全局样式，复核 dark mode、响应式、RTL（若相关）及主题变量。

## 无障碍

- 优先正确语义标签；实现键盘操作、焦点进入/返回、可见 focus 样式和必要 ARIA。
- 动态内容和状态变化需要可被辅助技术理解；disabled 与只读语义不能只靠颜色。

## 计划与验收

计划规模、首次批准、批准复用和增量范围遵循 [共享工作流](workflow.md)；本规范提供本次相关设计的判断依据。

按共享工作流选择本次所需验证；新增或改变对应能力时，检查相关项目：

- 基础渲染与所有承诺消费方式；
- 默认、主要变体、disabled/loading/empty/error；
- 键盘、焦点和 ARIA；
- 事件顺序、方法、重复初始化与 destroy；
- 类型和目标库构建；
- 调试页中的主要交互及正式示例（若纳入范围）。
