# ZUI 扩展组件规范

## 先判断角色与架构

包角色决定宿主构建分类，组件架构决定源码组织，两者必须分别判断。常见架构包括：

| 架构 | 适用条件 |
| --- | --- |
| 纯 CSS | 调用方 DOM 已足够，只需外观和状态类 |
| Preact 渲染器 | props 生成结构，不需要公共命令式实例 |
| Preact + `ComponentFromReact` | 同时承诺 Preact 与 vanilla API |
| 原生 `Component` DOM 增强器 | 增强调用方已有 DOM |
| 控制器 + Preact 子视图 | 浮层、全局协调或复杂命令式生命周期 |

角色或架构尚不清楚时，按 [共享工作流](workflow.md) 选择所需的相近扩展实现，再按证据需要补充宿主参考。沿用目标扩展项目合理的 `component/` 或 `components/` 等局部命名，不为统一目录而迁移。

## 公开消费方式

只实现真实需要的方式：

- 语义 HTML + CSS 类；
- Preact 组件；
- vanilla 构造器；
- `z-use-*` / `zui-create` 自动创建；
- toggle；
- 命令式方法、事件和实例查询。

本次涉及基类或注册契约时，从当前 `ZUI_ROOT` 核实 `Component`、`ComponentFromReact`、注册函数或相关实现，不凭技能快照猜 API。`ComponentFromReact` 要定义稳定名称、视图组件、宿主替换、reset/ref 和 destroy；不同注册体系不要混为一谈。

## 目录、入口与依赖

- 使用 Preact，不直接引入 React；TSX 配置服从 `EXT_ROOT`。
- 扩展兄弟库使用真实 `PACKAGE_NAME` 导入，宿主库使用宿主公开包名；不通过相对路径或 `exts/` 路径跨包。
- 局部 index 与 package 入口显式导出承诺 API；样式、注册和 i18n 副作用必须从真实消费入口可达。
- `zui.type`、`contributes`、exports 和依赖必须与真实产出一致。
- 运行时外部资源按 [external-library.md](external-library.md) 使用库内单例 `LibLoader<T>`。

## API、状态与生命周期

明确 options/props 的默认值、受控/非受控语义、更新方式；事件顺序、参数和取消；方法返回值、幂等性和销毁后行为；loading/empty/error/disabled；异步竞态和失败恢复；DOM、listener、observer、timer、portal 与缓存的所有权和清理。

优先复用当前宿主原语和公开组件，不复制基础设施。扩展实现可以替换宿主库时，额外验证 `zui.replace` 的公开兼容性。

### Preact 状态与副作用

- 禁止使用 hooks 机制：不导入或调用 `preact/hooks`，不使用自定义 hooks，也不使用 `useSignal`、`useComputed`、`useSignalEffect` 等 signals hooks。
- 响应式状态推荐使用 `signal`，派生值使用 `computed`，批量更新按需使用 `batch`；优先从当前宿主 `@zui/core` 的公开入口复用这些 API，并核实目标宿主版本的导出。组件私有状态由实例持有，避免在每次 render 时重新创建。
- 副作用按需使用 `effect`，结合类组件或 vanilla 实例的生命周期管理；卸载或销毁时调用其返回的 disposer，并在 effect 的清理函数中释放监听器、计时器等资源。

## 布局与样式

- 扩展组件、调试页和文档示例统一优先在 HTML/JSX 的 `class` / `className` 中组合 `@zui/utilities` 辅助类，实现布局、间距、尺寸、排版、颜色等通用样式。只有现有辅助类无法快捷、清晰地实现目标时，才补充最少的自定义 CSS；不要用静态内联样式绕过这一原则。
- 按需从当前 `ZUI_ROOT/lib/utilities/docs/utilities/` 与 `ZUI_ROOT/lib/utilities/src/`，或扩展实际消费的已安装 ZUI CSS 核实公开类名及效果。HTML/JSX 使用实际公开类名，通常为 `flex`、`items-center`、`gap-2`、`p-4` 等无前缀类，不根据 Tailwind 名称、变体或任意值语法猜测可用类。
- 自定义 CSS 只处理辅助类未覆盖的部分，例如无法通过现有类表达的复合状态、伪元素或组件特有动画，并在实现说明中简述原因。把可直接组合的辅助类包装进新选择器仍属于自定义 CSS。
- 在 `TARGET_LIB_ROOT/src/style/*.css` 中定义样式时，尽可能使用当前 Tailwind 配置支持且语义等价的 `@apply`。前缀按扩展与宿主配置核实；使用 ZUI 常见的 `-` 前缀时，例如 `@apply -flex -p-4;`。内部 `@apply` 不受公开 utilities 类清单限制，但须核实当前配置与实际生成效果。
- CSS 变量定义、媒体查询、关键帧及无法清晰等价表达的声明按需保留原生 CSS；转换时保持选择器优先级、`!important`、回退值和主题语义，不为凑齐 `@apply` 改变行为。
- 使用 `src/style/` 时，该目录下所有 CSS 文件必须由 `src/style/index.ts` 逐个显式副作用导入，例如 `import './vars.css';`，保持变量、基础规则和变体所需的层叠顺序。普通 CSS 不需要额外 `export`。
- 提供样式的实际消费入口统一接入该 `style/index.ts` 模块，例如在 `src/main.ts` 或相应样式入口中使用 `import './style';`。新增、删除或重命名 CSS 文件时同步维护导入清单，清理重复的 CSS 导入链，保留既有带样式与无样式入口契约；不以调试页或文档的直接导入代替生产入口接线。规则针对 `src/style/`，不要求迁移已有合理的根级 CSS 或外部资源布局。
- 使用稳定根类和局部状态/元素类，复用辅助类时保留既有 DOM/CSS 公开契约；公共定制值使用组件 CSS 变量，确需运行时计算的值可通过 CSS 变量或 `style` 传入。
- 核实扩展的真实消费入口和联合构建会包含所用辅助类及组件样式，验证 `@apply` 的实际生成结果与层叠行为，并按消费方式维护必要依赖与样式接线；不能只因宿主开发页加载了完整 ZUI 就认为扩展产物也可用。验证隔离遵循 [共享工作流](workflow.md#实施与验证)。
- Tailwind utility 前缀、主题、dark mode、RTL 和资源路径以 `EXT_ROOT` 与 `ZUI_ROOT` 当前配置为准。

## 无障碍

- 使用正确语义、键盘路径、焦点管理、可见 focus、ARIA、reduced motion 和 disabled/readonly 语义。

## 计划与验收

计划规模、任务范围和必要澄清遵循共享工作流；本规范提供本次相关设计的判断依据。

按共享工作流选择本次所需的扩展与宿主检查。新增或改变对应能力时，检查相关消费方式、状态、键盘/焦点、事件、方法、重复初始化、异步失败或 destroy；联合验证使用已确认的宿主及注册组和准确的 `ZUI_NAME`。
