---
name: zui-doc
description: "为指定 `lib/*` 撰写、补全、校对或优化 ZUI 3 官网正式文档，并维护 `docs/lib/*/index.md`。Use when a user asks for component/helper API docs, examples, usage guides, or documentation review; 意图明确时直接在文档边界内实施，不编辑生成目录 `docs/_`。"
---

# ZUI 正式文档

## 工作流

1. 定位仓库根目录和目标 `lib/<lib-name>`。若缺少会改变目标库、文档类别或受众的信息，先询问；否则直接实施。
2. 完整读取根目录 `AGENTS.md`、`../zui-standards/references/workflow.md` 和 `../zui-standards/references/documentation.md`。
3. 阅读目标 `package.json`、入口、公开类型、component/vanilla、样式、i18n、`README.md`、`dev.ts`、现有正式文档及两个相似库文档。以源码为事实来源，不发明 API。
4. 优先沿用已有分类；否则按内容选择 `lib/<name>/docs/lib/<basic|components|forms|helpers>/index.md`。`index.md` 是默认主页面，仅在已有结构或用户明确要求时维护额外页面。
5. 第一屏提供可运行基础示例，再按实际 API 补充场景、选项、事件、方法、类型和引入方式。官网使用 `<Example>`、`::: tabs`、`<Props>` 与 `<ZUI use="...">`，不得混用调试页的 `html:example`。
6. 只修改正式文档及其明确需要的文档资源；不得编辑 `docs/_`，不得为了让文档成立而悄悄修改运行时代码。发现源码问题时单独报告。
7. 运行文档同步/构建或最小相关检查，核对链接、示例依赖和资源路径。
8. 汇报目标页面、覆盖内容、验证结果与源码/文档差异，不自动提交。

## 组合边界

- 独立调用且需求明确时不增加计划确认门禁。
- 若与 `$zui-component`、`$zui-helper`、`$zui-lib` 或 `$zui-optimize` 组合，只实施共享计划的已批准文档范围，不重复确认。
- 若用户只要求审阅或建议，保持只读。
