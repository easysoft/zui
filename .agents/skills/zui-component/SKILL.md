---
name: zui-component
description: "在指定 `lib/*` 中设计、实现或优化 ZUI 3 组件，覆盖纯 CSS、Preact、Preact + ComponentFromReact、原生 Component DOM 增强器、控制器 + Preact 子视图及外部库按需加载。Use when a user asks to add, refactor, extend, or fix a ZUI component, its public consumption modes, or its runtime integration with an external library; 需求理解与组件设计完成后必须先给出计划并等待明确确认，再修改代码。"
---

# ZUI 组件开发

## 准备

1. 定位仓库根目录和目标 `lib/<lib-name>`；若目标库名称无法从请求或仓库发现，先询问。
2. 完整读取根目录 `AGENTS.md`、兄弟技能 `../zui-standards/references/workflow.md` 和 `../zui-standards/references/component.md`。组件需要在运行时加载外部 JS/CSS 时再读 `../zui-standards/references/external-library.md`；涉及新包或元数据时再读 `../zui-standards/references/library.md`；涉及文档、调试页或国际化时再读对应 standards 参考。
3. 运行 `../zui-standards/scripts/inspect-zui-lib.mjs` 盘点目标和候选库，然后完整阅读目标库与两个最相近成熟实现的关键源码。已有库沿用合理的局部目录命名。
4. 检查工作区状态，保留用户已有改动，不修改目标库之外的内容，除非批准范围明确包含跨库依赖。

## 理解与设计

1. 从现有代码和请求中推断用途、场景、目标用户和约束。先检查同一术语是否可能代表不同的组件身份、视觉形态、包角色、实现架构或公开 API；若存在这种高影响歧义，提出 1–3 个最少必要问题并停止，不要选择一个假设继续输出实施计划。
2. 只询问无法从仓库发现且会改变设计的信息，通常包括：
   - 需要支持的 HTML/CSS、Preact、vanilla 构造器、`zui-create` 或 toggle 消费方式；
   - 受控或非受控状态、事件、命令式方法、异步和错误行为；
   - 视觉变体、响应式、键盘、焦点、ARIA 与国际化要求。
3. 提问前可以简述已从仓库确认的背景及每个问题会影响的设计，不要用单一“关键假设”替用户做高影响选择。得到答案后再继续设计。
4. 分别判断包角色和实现架构。不要因为包类型是 `component` 就默认使用 Preact，也不要因使用 Preact 就改变包角色。
5. 定义最小公开 API、状态或数据流、DOM 生命周期与清理策略。仅暴露真实需要的入口。

## 确认门禁

在任何文件修改前，给出一份决策完整的计划，至少包含：

- 类型判断：包角色、组件架构及两个相似实现；
- 目标、非目标和验收场景；
- 公开 API：消费方式、options/props、事件、方法、类型及兼容性；
- 实现方式：渲染、状态/数据流、生命周期、清理、无障碍和 i18n；
- 外部资源（若有）：`LibLoader` 所有权、注册名、资源/check/依赖、加载时机、失败重试、开发资源与销毁竞态；
- 文件集、入口导出、依赖和 `contributes` 影响；
- 正式文档与调试页是否纳入；
- 验证方式、边界场景和仍存在的假设。

明确请求用户确认，然后停止。问题回答、局部修订或继续讨论不算确认。

只有当 `zui-lib` 或 `zui-optimize` 已记录并展示“已批准范围”，且当前组件的目标、公开 API、文件边界和验收场景完全位于该范围内时，才能复用协调技能的一次确认。任何目标、公开 API 或范围变化都返回当前协调技能重新规划。始终服从当前协作模式；用户确认不能覆盖仍生效的 Plan Mode。

## 实施

1. 获得确认且当前模式允许编辑后，重新检查工作区状态并按批准计划实施。
2. 使用 Preact 而不是 React；跨库导入使用 `@zui/<name>`；显式维护局部和库入口导出。
3. 运行时外部依赖统一通过库内单例 `LibLoader<T>` 按需加载，并落实加载失败、重试、异步销毁竞态和第三方实例清理；不要在组件内直接调用 `$.getLib`、注入资源标签或维护第二份模块缓存。
4. 按实际需要实现样式根类、`--<component>-*` 变量、带 `-` 前缀的 Tailwind `@apply`、语义标签、键盘、焦点和 ARIA。
5. 仅在批准范围内调用或遵循 `$zui-i18n`、`$zui-doc`、`$zui-dev`；不要借机修改其他领域。
6. 运行与风险匹配的 lint、单库构建和调试页检查；仓库没有通用单测时，以类型检查、演示交互和文档示例覆盖验收场景。
7. 汇报实现文件、公开 API、验证结果和未验证风险，不自动提交。

多个技能直接组合时，共用这一份计划和一次确认；不得为同一批准范围重复设置门禁。
