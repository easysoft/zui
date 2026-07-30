---
name: zui-helper
description: "在指定 `lib/*` 中设计、实现或优化 ZUI 3 辅助 API，包括纯函数、类、store/单例、浏览器 DOM 模块和库内私有 helper。Use when a user asks for store, utils, data helpers, browser helpers, shared classes, or helper refactors; 完成需求分析与 API 设计后必须先给出计划并等待明确确认，再修改代码。"
---

# ZUI 辅助工具开发

## 准备与分析

1. 定位仓库根目录与目标 `lib/<lib-name>`；目标不明确时先询问，且不要擅自把私有 helper 提升为共享包。
2. 完整读取根目录 `AGENTS.md`、`../zui-standards/references/workflow.md` 和 `../zui-standards/references/helper.md`。涉及包角色、文档或调试页时按需读取对应规范。
3. 使用盘点脚本筛选候选库，再完整阅读目标库和两个最相近成熟实现，核对入口、依赖、JSDoc、生命周期及错误约定。
4. 将需求分类为纯函数/常量/类型、状态类、store/单例、浏览器 DOM 模块或库内私有 helper。定义副作用、确定性、错误、序列化、生命周期和清理边界。

## 确认门禁

在修改前给出计划，至少包含：

- 类型判断、放置目标及相似实现；
- 目标、非目标和验收场景；
- 公开 API、类型、错误语义、导出路径和必要 JSDoc；
- 数据流、状态所有权、持久化/序列化以及副作用；
- 浏览器监听、计时器、observer、SSR/global 防护和清理策略（若适用）；
- 文件集、依赖、入口和 `contributes` 影响；
- 文档/调试需求、验证方式和假设。

请求明确确认并停止。只有 `zui-lib` 或 `zui-optimize` 展示的已批准范围完整覆盖当前目标、API、文件和验收场景时，才能跳过本门禁；范围或公开 API 改变时返回当前协调技能重新规划。服从当前协作模式。

## 实施

1. 确认后重新检查工作区状态，仅实现批准范围。
2. 默认保持纯函数无副作用、确定性和完整类型；状态型工具明确所有权、重入、并发、失败和销毁行为。
3. 对公开 API 添加有价值的 JSDoc，并从局部 `index.ts` 与库入口显式导出；不要依赖未承诺的深层路径。
4. 仅在范围内组合 `$zui-doc` 或 `$zui-dev`，不要为文档或演示修改不相关运行时代码。
5. 运行类型、lint、单库构建及针对性可执行检查，覆盖空值、非法输入、重复调用、失败、序列化和清理场景。
6. 汇报 API、文件、验证结果和风险，不自动提交。

与其他技能组合且包含 component/helper 时，共用一份计划和一次确认。
