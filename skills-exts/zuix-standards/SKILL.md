---
name: zuix-standards
description: "查询并应用 ZUI 3 扩展组件库开发规范，识别目标库、扩展工作区、Git 根、宿主 ZUI 和 exts 注册组。Use when Codex needs to inspect any `lib/*` package in an independent ZUI extension project, resolve package metadata and host integration, or answer how extension libraries should be implemented, debugged, built, documented, and validated; 本技能始终只读。"
---

# ZUI 扩展库公共开发规范

## 工作流

1. 从请求涉及的路径解析四层上下文：`TARGET_LIB_ROOT`、`EXT_ROOT`、`GIT_ROOT`、`ZUI_ROOT + EXTS_NAME`。优先运行：

```sh
node <本技能目录>/scripts/resolve-zui-ext-context.mjs --cwd <目标路径> [--lib <目录名或包名>] [--host <宿主根>] --json
```

2. 完整读取 `EXT_ROOT` 中适用于目标的 `AGENTS.md`。若 `GIT_ROOT` 或 `ZUI_ROOT` 另有适用的 `AGENTS.md`，也完整读取；不要把不同根目录的规则互相覆盖。
3. 完整读取 [references/workflow.md](references/workflow.md)，再按任务读取所需规范：
   - 包角色、骨架、元数据与依赖：[references/library.md](references/library.md)
   - 宿主注册、联合调试、构建和文档：[references/extension-library.md](references/extension-library.md)
   - UI 组件：[references/component.md](references/component.md)
   - 运行时按需加载外部 JS/CSS：[references/external-library.md](references/external-library.md)，并同时读取组件或 helper 规范
   - helper、store 或 utils：[references/helper.md](references/helper.md)
   - 官网正式文档：[references/documentation.md](references/documentation.md)
   - `README.md` / `dev.md` 与 `dev.ts`：[references/dev-page.md](references/dev-page.md)
   - 国际化：[references/i18n.md](references/i18n.md)
4. 涉及源码、API 或架构判断时，在 `EXT_ROOT` 中选择两个包角色、实现架构或公开消费方式最相近的成熟库；扩展项目没有足够样本时，再从 `ZUI_ROOT` 选择宿主实现。可用盘点脚本筛选：

```sh
node <本技能目录>/scripts/inspect-zui-lib.mjs --root <EXT_ROOT>
node <本技能目录>/scripts/inspect-zui-lib.mjs --root <EXT_ROOT> --lib <目录名或包名> --json
```

5. 完整阅读目标与候选实现的入口、类型、源码、样式、`package.json`、文档和调试页。脚本信号只用于筛选，不能单独证明架构或 API 正确。
6. 按“用户要求 > 适用的 `AGENTS.md` > 扩展项目事实 > 当前宿主构建脚本与运行时 > 成熟相似实现 > 本技能规范”的顺序解决冲突。
7. 始终保持只读。用户要求实施时，指出应组合的扩展版 ZUI 技能；若由其他技能调用，只提供约束，不增加独立确认门禁。

## 输出要求

- 先报告已解析和未解析的上下文，特别区分 `EXT_ROOT` 与 `GIT_ROOT`。
- 使用真实 `PACKAGE_NAME`、`ZUI_NAME`、`PUBLIC_PATH` 和依赖策略，不从目录名或扩展组名猜测。
- 清楚区分扩展仓库事实、宿主契约、相似实现惯例和建议。
- 只报告当前任务需要的规范、证据、风险与验证方式。
- 不修改源码、宿主注册、缓存或生成目录，不自动提交、推送或发布。
