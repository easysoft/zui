---
name: zui-standards
description: "查询并应用 ZUI 3 公共开发规范。Use when Codex needs to inspect ZUI library roles, package metadata, component architectures, local `exts/` extension-library integration and joint debugging, on-demand external library loading, helper APIs, documentation, playground pages, or internationalization conventions; 在分析或实施任何 `lib/*` 相关开发任务前使用，也用于把外部 ZUI 扩展库接入当前仓库开发或只读回答“ZUI 应该如何实现”之类的规范问题。"
---

# ZUI 公共开发规范

## 工作流

1. 从目标路径向上定位同时包含 `AGENTS.md`、`pnpm-workspace.yaml` 和 `lib/` 的仓库根目录。
2. 完整读取仓库根目录的 `AGENTS.md`，再完整读取 [references/workflow.md](references/workflow.md)。
3. 按任务类型读取下列对应规范，不要无差别加载全部参考文件：
   - 库角色、包骨架或元数据：[references/library.md](references/library.md)
   - 将外部 ZUI 库接入当前仓库的 `exts/` 共同调试、构建或维护文档：[references/extension-library.md](references/extension-library.md)
   - UI 组件：[references/component.md](references/component.md)
   - 组件运行时按需加载外部 JS/CSS：[references/external-library.md](references/external-library.md)，并同时读取组件规范
   - helper、store 或 utils：[references/helper.md](references/helper.md)
   - 官网文档：[references/documentation.md](references/documentation.md)
   - `README.md` 与 `dev.ts`：[references/dev-page.md](references/dev-page.md)
   - 国际化：[references/i18n.md](references/i18n.md)
4. 涉及库源码、API 或架构判断时，检查目标库并选择两个在“包角色、实现架构或公开消费方式”上最相近的成熟库。纯 `exts/` 注册只核对扩展库契约与注册结果，不机械寻找相似实现。需要筛选时可先运行盘点脚本：

```sh
node <本技能目录>/scripts/inspect-zui-lib.mjs --root <repo-root>
node <本技能目录>/scripts/inspect-zui-lib.mjs --root <repo-root> --lib <name> --json
```

5. 需要判断实现时，完整阅读目标实现和两个相似实现的关键源码、入口、`package.json`、文档及调试页。脚本只提供架构信号，不能代替源码判断。
6. 按“用户要求 > `AGENTS.md` > 构建脚本与类型定义 > 成熟相似库 > 本技能参考规范”的顺序解决冲突。
7. 始终保持只读并给出基于仓库证据的结论；用户要求实施时，指出应组合的 ZUI 技能，但不要由本技能修改文件。如果由其他 ZUI 技能调用，只提供约束，不增加独立确认门禁。

## 输出要求

- 清楚区分仓库事实、相似实现惯例和建议。
- 指出目标包角色与实现架构；两者不是同一维度。
- 只报告当前任务需要的规范、证据路径、风险与建议验证方式。
- 不生成固定源码模板，不自动提交代码，不顺带迁移无关实现。
