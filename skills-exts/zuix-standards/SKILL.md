---
name: zuix-standards
description: "查询独立 ZUI 扩展项目的开发规范，解析目标库、扩展工作区、Git 所有权及所需宿主上下文；始终只读。"
---

# ZUI 扩展库公共开发规范

## 工作流

1. 按 [references/workflow.md](references/workflow.md) 解析本次所需的目标、扩展、Git 和宿主上下文，并复用已有发现。
2. 按当前任务读取对应规范：
   - 包角色、骨架、元数据与依赖：[references/library.md](references/library.md)
   - 宿主注册、联合调试、构建和文档：[references/extension-library.md](references/extension-library.md)
   - UI 组件：[references/component.md](references/component.md)
   - 运行时按需加载外部 JS/CSS：[references/external-library.md](references/external-library.md)，以及相关组件或 helper 约束
   - helper、store 或 utils：[references/helper.md](references/helper.md)
   - 官网正式文档：[references/documentation.md](references/documentation.md)
   - `README.md` / `dev.md` 与 `dev.ts`：[references/dev-page.md](references/dev-page.md)
   - 国际化：[references/i18n.md](references/i18n.md)
3. 从相关源码、类型或实际行为核实本次决策所需事实，按共享工作流的优先级解决冲突。需要筛选目标或参考时可运行：

```sh
node <本技能目录>/scripts/inspect-zui-lib.mjs --root <EXT_ROOT> [--lib <目录名或包名>] --json
```

4. 本技能的规范查询阶段保持只读。用户已要求实施时，主流程完成查询后继续进入相应扩展版实施技能，直到其必要确认点或任务完成；仅指出技能名称不构成实施任务交付。由其他技能调用时只提供约束，不增加独立确认门禁，也不由本查询阶段修改文件。

## 输出要求

- 报告影响本次判断的已解析上下文和必要缺口，特别区分 `EXT_ROOT` 与 `GIT_ROOT`。
- 使用真实 `PACKAGE_NAME`、`ZUI_NAME`、`PUBLIC_PATH` 和依赖策略，不从目录名或扩展组名猜测。
- 清楚区分扩展仓库事实、宿主契约、相似实现惯例和建议。
- 只报告当前任务需要的规范、证据、风险与验证方式。
- 不修改源码、宿主注册、缓存或生成目录，不自动提交、推送或发布。
