---
name: zui-doc
description: "维护 ZUI 主仓库 lib/*/ai.md 使用参考、官网文档、API 示例与静态组件预览。需求明确时直接实施；只要求审阅时保持只读。"
---

# ZUI 文档与 AI 使用参考

## 共同工作流

1. 按 [共享工作流](../zui-standards/references/workflow.md) 定位目标、检查所有权并复用已有上下文。根据用户指定文件区分 AI 参考和官网文档，只进入对应流程；两者都在范围内时共享事实核实结果。
2. 阅读目标文档和判断本次说明所需的公开入口、类型、实现与测试。按 [消费规范](../zui-standards/references/consumption.md) 核实 workspace、npm 和 browser 的真实入口。自定义元素同时读取 [Web Component 规范](../zui-standards/references/web-component.md)，区分元素 API 与原组件 API。
3. 新增或修改布局类、示例容器类或可复制代码时，按 [CSS utilities 核实流程](../zui-standards/references/utilities.md) 确认实际支持和效果；不发明 API，也不为了让文档成立而修改无关运行时代码。源码问题单独报告。
4. 完成下列对应流程后，汇报覆盖内容、验证结果及仍存在的源码/文档差异；需求明确时直接实施，只要求审阅或建议时保持只读，不自动提交。

## AI 参考：lib/<name>/ai.md

1. 读取 [AI 使用参考规范](../zui-standards/references/ai-documentation.md)；新文件使用其模板，已有文件只更新受影响条目，保留固定章节、元信息和稳定 ID。包含必要接入、参数、示例及来源，不套用官网组件或目录规则。
2. 按 [AI 参考联动](../zui-standards/references/workflow.md#ai-参考联动) 维护库文档、生成根索引并检查；组合任务由主流程统一生成，独立任务自行完成。只读审阅仅检查和报告，不生成索引。
3. 对改变的示例选择必要的类型或运行验证。`ai:check` 只验证结构、链接和索引，不替代内容验收；纯 AI 参考修改无需官网构建、`docs/_` 同步或静态封面。

## 官网文档与静态组件预览

1. 按需读取 [官网文档规范](../zui-standards/references/documentation.md)。新建组件库官网文档、维护外观说明或制作封面/展示墙时，按 [组件预览规范](../zui-standards/references/component-preview.md) 检查并在范围内交付 `assets/preview.html` 及封面入口；纯文案修订遵循其范围边界。
2. 沿用已有分类，否则选择 `lib/<name>/docs/lib/<basic|components|forms|helpers>/index.md`；仅在已有结构或用户明确要求时维护额外页面。
3. 新建或重构页面时，第一屏提供可运行基础示例，再补充本次相关 API。按 [接入与构建说明](../zui-standards/references/documentation.md#接入与构建说明) 说明特殊条件；使用 `<Example>`、`::: tabs`、`<Props>` 与 `<ZUI use="...">`，不得混用调试页的 `html:example`。按 [示例完整性与反馈](../zui-standards/references/documentation.md#示例完整性与反馈) 补齐独立代码，并对齐预览配置和交互。
4. 只修改范围内的官网文档、必要资源和回归测试，不手工编辑 `docs/_`。按 [示例验收](../zui-standards/references/documentation.md#示例验收) 验证运行示例，静态预览执行对应规范；按共享工作流保护生成物、复用有效检查并修复本次引入的问题。

## 组合边界

- 独立调用且需求明确时不增加计划确认门禁。
- 作为子流程时只处理共享范围内的本领域工作；上下文、任务范围及必要澄清统一遵循共享工作流。
- 若用户只要求审阅或建议，保持只读。
