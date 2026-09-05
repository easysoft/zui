---
name: zui-doc
description: "为指定 `lib/*` 撰写、补全、校对或优化 ZUI 3 官网正式文档，并维护 `docs/lib/*/index.md`。Use when a user asks for component/helper API docs, examples, usage guides, or documentation review; 意图明确时直接在文档边界内实施，不手工编辑生成目录 `docs/_`。"
---

# ZUI 正式文档

## 工作流

1. 从请求、已确认决定和目标现状定位仓库根目录及 `lib/<lib-name>`。按共享工作流先发现事实、合理沿用既有约定；仅有无法可靠消除且会实质改变文档目标或交付边界的歧义时询问，否则直接实施。
2. 完整读取根目录 `AGENTS.md`、`../zui-standards/references/workflow.md` 和 `../zui-standards/references/documentation.md`。
3. 阅读目标 `package.json`、入口、公开类型、component/vanilla、样式、i18n、`README.md`、`dev.ts`、现有正式文档及两个相似库文档。以源码为事实来源，不发明 API。
4. 优先沿用已有分类；否则按内容选择 `lib/<name>/docs/lib/<basic|components|forms|helpers>/index.md`。`index.md` 是默认主页面，仅在已有结构或用户明确要求时维护额外页面。
5. 第一屏提供可运行基础示例，再按实际 API 补充场景、选项、事件、方法、类型和引入方式。官网使用 `<Example>`、`::: tabs`、`<Props>` 与 `<ZUI use="...">`，不得混用调试页的 `html:example`。
6. 只修改正式文档及其明确需要的文档资源；不得手工编辑 `docs/_` 代替修改文档源，不得为了让文档成立而悄悄修改运行时代码。发现源码问题时单独报告。
7. 按共享工作流的验证隔离要求运行文档同步/构建或最小相关检查，核对链接、示例依赖和资源路径。
8. 汇报目标页面、覆盖内容、验证结果与源码/文档差异，不自动提交。

## 组合边界

- 独立调用且需求明确时不增加计划确认门禁。
- 作为其他 ZUI 技能的子流程时，只处理共享范围内的文档工作；按共享工作流复用已有批准，包括 wrap-lib，不重复确认。独立调用仍遵循本技能的直接实施或只读模式。
- 若用户只要求审阅或建议，保持只读。
