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

先在 `EXT_ROOT` 选择两个相近成熟库；样本不足时，从 `ZUI_ROOT` 补充。沿用目标扩展项目合理的 `component/` 或 `components/` 等局部命名，不为统一目录而迁移。

## 公开消费方式

只实现真实需要的方式：

- 语义 HTML + CSS 类；
- Preact 组件；
- vanilla 构造器；
- `z-use-*` / `zui-create` 自动创建；
- toggle；
- 命令式方法、事件和实例查询。

从当前 `ZUI_ROOT` 阅读 `Component`、`ComponentFromReact`、注册函数和现有实现，不凭技能快照猜 API。`ComponentFromReact` 要定义稳定名称、视图组件、宿主替换、reset/ref 和 destroy；不同注册体系不要混为一谈。

## 目录、入口与依赖

- 使用 Preact，不直接引入 React；TSX 配置服从 `EXT_ROOT`。
- 扩展兄弟库使用真实 `PACKAGE_NAME` 导入，宿主库使用宿主公开包名；不通过相对路径或 `exts/` 路径跨包。
- 局部 index 与 package 入口显式导出承诺 API；样式、注册和 i18n 副作用必须从真实消费入口可达。
- `zui.type`、`contributes`、exports 和依赖必须与真实产出一致。
- 运行时外部资源按 [external-library.md](external-library.md) 使用库内单例 `LibLoader<T>`。

## API、状态与生命周期

明确 options/props 的默认值、受控/非受控语义、更新方式；事件顺序、参数和取消；方法返回值、幂等性和销毁后行为；loading/empty/error/disabled；异步竞态和失败恢复；DOM、listener、observer、timer、portal 与缓存的所有权和清理。

优先复用当前宿主原语和公开组件，不复制基础设施。扩展实现可以替换宿主库时，额外验证 `zui.replace` 的公开兼容性。

## 样式与无障碍

- 使用稳定根类和局部状态/元素类；公共定制值使用组件 CSS 变量。
- Tailwind utility 前缀、主题、dark mode、RTL 和资源路径以 `EXT_ROOT` 与 `ZUI_ROOT` 当前配置为准。
- 使用正确语义、键盘路径、焦点管理、可见 focus、ARIA、reduced motion 和 disabled/readonly 语义。

## 计划与验收

修改前计划必须包含四层上下文、包角色、组件架构、两个参考库、公开消费方式、API、状态、生命周期、文件/入口/依赖、宿主影响、文档/dev/i18n、验收场景和验证命令。

验证先运行扩展项目 lint/type/test，再在唯一 `ZUI_ROOT + EXTS_NAME` 中以准确 `ZUI_NAME` 联合构建和调试。至少覆盖全部承诺消费方式、主要状态、键盘/焦点/ARIA、事件和方法、重复初始化、异步失败及 destroy。
