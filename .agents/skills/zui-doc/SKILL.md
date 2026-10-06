---
name: zui-doc
description: "维护 ZUI 主仓库 lib/* 的官网文档源、API 说明、示例与静态组件预览。需求明确时直接实施；只要求审阅时保持只读。"
---

# ZUI 正式文档

## 工作流

1. 按 [共享工作流](../zui-standards/references/workflow.md) 定位目标、检查已有改动并复用上下文；按其澄清规则消除影响本次交付的歧义，需求明确时直接实施。
2. 按需阅读 [documentation 规范](../zui-standards/references/documentation.md) 中与本次变更有关的部分；自定义元素文档同时读取 [Web Component 规范](../zui-standards/references/web-component.md)，区分元素 API 与原组件 API。
   - 新建组件库文档、维护组件外观说明或制作封面/展示墙时，读取[组件预览规范](../zui-standards/references/component-preview.md)，检查并按范围交付 `assets/preview.html` 及组件封面页入口。纯文案修订遵循该规范的范围边界。
3. 阅读目标文档和核实本次说明所需的公开类型、入口或实现；新建或重构页面时再检查相关页面结构和必要参考，不发明 API。新增或修改布局类、示例容器类或可复制代码时，读取并执行 [CSS utilities 核实流程](../zui-standards/references/utilities.md)。
4. 优先沿用已有分类；否则按内容选择 `lib/<name>/docs/lib/<basic|components|forms|helpers>/index.md`。`index.md` 是默认主页面，仅在已有结构或用户明确要求时维护额外页面。
5. 新建或重构文档时，第一屏提供可运行基础示例，再按实际 API 和请求范围补充场景、选项、事件、方法和类型；引入说明遵循[接入与构建说明](../zui-standards/references/documentation.md#接入与构建说明)，只补充影响使用步骤的特殊条件。官网使用 `<Example>`、`::: tabs`、`<Props>` 与 `<ZUI use="...">`，不得混用调试页的 `html:example`；可运行示例按[示例完整性与反馈](../zui-standards/references/documentation.md#示例完整性与反馈)补齐独立代码，并对齐预览的布局、配置和交互。
6. 只修改正式文档及其明确需要的文档资源和回归测试；不得手工编辑 `docs/_` 代替修改文档源，不得为了让文档成立而悄悄修改运行时代码。发现源码问题时单独报告。
7. 按共享工作流选择必要的文案、链接或同步/构建检查；运行示例变更按[示例验收](../zui-standards/references/documentation.md#示例验收)核实预览与复制代码，静态组件预览变更执行组件预览规范。修复本次引入且位于范围内的问题并复验，生成物遵循验证隔离要求。
8. 汇报目标页面、覆盖内容、验证结果与源码/文档差异，不自动提交。

## 组合边界

- 独立调用且需求明确时不增加计划确认门禁。
- 作为子流程时只处理共享范围内的本领域工作；上下文、任务范围及必要澄清统一遵循共享工作流。
- 若用户只要求审阅或建议，保持只读。
