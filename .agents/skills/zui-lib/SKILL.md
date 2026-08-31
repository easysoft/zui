---
name: zui-lib
description: "规划并实现完整的 ZUI 3 库，包括新建 `lib/*` 或为已有库增加功能，并编排组件、helper、国际化、正式文档和调试页。Use when a request spans package metadata and multiple ZUI development domains, or asks to create/extend a whole library; 先汇总一份集成计划并只等待一次明确确认，再按已批准范围实施。"
---

# ZUI 库开发

## 分析

1. 定位仓库根目录，完整读取根目录 `AGENTS.md`、`../zui-standards/references/workflow.md` 和 `../zui-standards/references/library.md`。
2. 判断目标是新库还是已有库，并检查工作区状态。已有库保持合理的局部目录与 API 风格，不顺带迁移无关代码。
3. 使用盘点脚本和源码识别包角色、现有贡献、消费方式及两个相似成熟库。只询问无法发现且会改变库角色、显示名、公开输出或验收结果的信息。
4. 根据请求选择需要的兄弟技能，并在规划前完整读取其 `SKILL.md` 和对应 standards 参考：
   - UI 组件：`../zui-component/SKILL.md`
   - helper/store/utils：`../zui-helper/SKILL.md`
   - 国际化：`../zui-i18n/SKILL.md`
   - 正式文档：`../zui-doc/SKILL.md`
   - 调试页：`../zui-dev/SKILL.md`

## 一次集成计划

先完成所有选中技能的发现与设计，但不要修改文件。输出一份集成计划，至少包含：

- 新库/已有库判断、包角色、相似库及理由；
- package 名称、版本、入口、依赖、`zui.type`、`displayName`、准确 `contributes` 和可选导出；
- 组件与 helper 的类型、公开 API、状态/数据流、生命周期及文件集；
- i18n 的语言、命名空间/静态映射和加载路径；
- 正式文档类别、调试页场景和资源；
- 依赖顺序、跨库影响、非目标、验收场景、验证命令和假设；
- 明确标记的“已批准范围”，列出目标库、公开 API、允许修改的领域与文件边界。

请求用户对整份计划明确确认，然后停止。只出现这一个确认门禁；讨论、回答问题或局部修改计划不算确认。若本技能由 `zui-optimize` 调用，且当前库目标、公开 API、文件边界和验收场景已完整包含在其“已批准范围”中，则复用该确认；范围变化时返回 `zui-optimize` 重新规划。用户确认不能覆盖当前仍生效的 Plan Mode。

## 编排实施

1. 确认且当前模式允许编辑后，重新检查工作区状态。
2. 新库先创建最小准确骨架：`@zui/<kebab-name>`、`0.0.1`、`package.json`、`src/main.ts`、`files`、正确元数据，以及实际需要的 `tsconfig.json`。已有库只调整批准范围内的骨架或元数据。
3. 按依赖顺序遵循选中的兄弟技能：基础 helper → 组件 → i18n → 正式文档 → 调试页。向每个子流程传递已批准范围；完全位于范围内时跳过它自己的确认。
4. 一旦目标、公开 API、包角色或文件边界需要变化，停止实施，回到本技能更新集成计划并再次确认；不要让子技能自行扩大范围。
5. 检查所有入口真实存在、内部依赖分类正确、文档和调试示例与 API 一致。
6. 运行合并后的最小充分验证，包括 lint/类型、目标库构建、文档同步/构建及调试页交互。修复范围内问题；范围外问题单独报告。
7. 汇报已完成范围、关键 API、验证结果和剩余风险，不自动提交。

多个轻量技能直接组合时可以统一直接实施；一旦组合包含 component 或 helper，就使用本节的一份计划和一次确认。
