---
name: zui-i18n
description: "为指定 `lib/*` 添加、接入、补全或验证 ZUI 3 国际化，包括 `zh_cn`、`zh_tw`、`en` 语言文件、类型一致性、组件私有映射和带命名空间的全局语言。Use when a user asks to translate UI strings, add locales, fix fallback/override behavior, or wire ZUI i18n; 意图明确时直接在国际化边界内实施。"
---

# ZUI 国际化

## 工作流

1. 定位仓库根目录和目标 `lib/<lib-name>`。若缺少会改变翻译范围、术语或加载方式的信息，先询问；否则直接实施。
2. 完整读取根目录 `AGENTS.md`、`../zui-standards/references/workflow.md` 和 `../zui-standards/references/i18n.md`。
3. 阅读目标组件/helper、入口、options 类型、现有语言文件和两个相似实现。枚举目标范围内所有用户可见字符串及其消费路径。
4. 判断使用组件静态 `i18n` 映射，还是使用带命名空间的全局 `i18n.addLang`/当前仓库等价 API；不要把私有文案无理由放入全局命名空间。
5. 默认实现 `zh_cn`、`zh_tw`、`en`，以 `typeof zh_cn` 或等价类型约束键结构。确保入口或消费组件真实加载语言文件。
6. 使用 `{0}` 或 `{name}` 占位符，保留运行时覆盖参数；核对语言码归一化、缺失键回退和默认值行为。
7. 只修改国际化所需源码、类型与接线；文档、调试页和无关 API 仅在请求或共享批准范围明确包含时修改。
8. 运行键一致性、类型、单库构建和针对性的语言覆盖/回退检查，汇报结果，不自动提交。

## 组合边界

- 独立调用且目标明确时不增加计划确认门禁。
- 由 `$zui-component`、`$zui-helper`、`$zui-lib` 或 `$zui-optimize` 调用时，只实施共享计划内的 i18n 范围，不重复确认。
- 用户只要求审阅时保持只读。
