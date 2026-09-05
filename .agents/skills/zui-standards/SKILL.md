---
name: zui-standards
description: "查询 ZUI 主仓库的开发规范，为库开发及本地 exts 接入任务提供相关约束和仓库证据；规范查询保持只读。"
---

# ZUI 公共开发规范

## 工作流

1. 按 [references/workflow.md](references/workflow.md) 完成所需发现并复用已有上下文。
2. 按当前任务需要读取下列对应规范：
   - 库角色、包骨架或元数据：[references/library.md](references/library.md)
   - 将外部 ZUI 库接入当前仓库的 `exts/` 共同调试、构建或维护文档：[references/extension-library.md](references/extension-library.md)
   - UI 组件：[references/component.md](references/component.md)
   - 组件运行时按需加载外部 JS/CSS：[references/external-library.md](references/external-library.md)，并同时读取组件规范
   - helper、store 或 utils：[references/helper.md](references/helper.md)
   - 官网文档：[references/documentation.md](references/documentation.md)
   - `README.md` 与 `dev.ts`：[references/dev-page.md](references/dev-page.md)
   - 国际化：[references/i18n.md](references/i18n.md)
3. 需要定位目标或筛选参考实现时可运行盘点脚本；阅读范围和参考数量遵循共享工作流：

```sh
node <本技能目录>/scripts/inspect-zui-lib.mjs --root <repo-root>
node <本技能目录>/scripts/inspect-zui-lib.mjs --root <repo-root> --lib <name> --json
```

4. 从相关源码、类型或实际行为核实决策所需事实，按共享工作流的优先级解决冲突。
5. 本技能的规范查询阶段保持只读并给出仓库证据。用户已要求实施时，主流程完成查询后继续进入相应实施技能，直到其必要确认点或任务完成；仅指出技能名称不构成实施任务交付。由其他技能调用时只提供约束，不增加独立确认门禁，也不由本查询阶段修改文件。

## 输出要求

- 清楚区分仓库事实、相似实现惯例和建议。
- 指出目标包角色与实现架构；两者不是同一维度。
- 只报告当前任务需要的规范、证据路径、风险与建议验证方式。
- 不生成固定源码模板，不自动提交代码，不顺带迁移无关实现。
