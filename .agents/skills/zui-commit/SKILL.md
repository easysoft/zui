---
name: zui-commit
description: "按 ZUI 3 规范只读分析变更和生成英文 commit message，或在用户明确要求提交时审查、验证、按逻辑单元拆分并完成 Git 提交。Use when the user asks to inspect commit scope, generate a commit message, commit staged or current changes, 提交代码, 保存改动, or wrap up changes into commits in this repository. Message-only requests remain read-only; mutation requires explicit commit intent."
---

# ZUI 提交

## 操作边界

先判断用户意图，再执行对应模式：

- **只读模式**：用户仅要求分析变更、规划提交或生成 commit message 时，只读取仓库状态并返回建议，不运行 `git add`、`git commit` 或其他写操作。
- **提交模式**：仅在用户明确要求提交、保存或入库改动时，才暂存并提交请求范围内的变更。

始终遵守以下边界：

- 保留用户已有的暂存、未暂存和未跟踪改动，不修改或提交无关内容。
- 不擅自执行 `--amend`、`--no-verify`、push、force push、reset 或清理工作区。
- 遇到未解决冲突、正在进行但意图不明的 merge/rebase/cherry-pick，或无法可靠判断提交范围时，停止写操作并请求用户决定。

## 提交规范

- 首行格式：`<type> <scope>: <description>`
  - `<type>`：`*` = change、`+` = addition、`-` = removal。按提交的主要语义判断，不按文件的 A/M/D 状态机械拆分；新增功能即使同时修改旧文件，仍可使用 `+`。
  - `<scope>`：`lib/<name>/` 内的变更使用 `<name>`；仓库根、开发基础设施或不可拆分的跨库变更使用 `proj`。
  - `<description>`：使用简洁的英文祈使句，建议不超过 72 个字符且结尾不加句号。
- 提交信息全部使用英文，不使用 emoji。
- 如需详细说明，与首行空一行后用 Markdown 撰写，多条变更使用列表项。
- 不添加 `Co-authored-by` 等 Agent 相关信息。

示例：

```text
* form-builder: add textarea option to form field panel
+ utilities: add new whiteboard extension
* proj: update pnpm-lock.yaml after dependency bump
```

## 步骤

1. **收集上下文**：并行运行 `git status --short --branch`、`git diff --cached`、`git diff`、`git ls-files --others --exclude-standard`、`git log --oneline -10`。单独读取候选未跟踪文件的内容，因为普通 `git diff` 不会展示它们。
2. **确定候选范围**：
   - 暂存区已有变更时，将现有暂存快照视为用户主动点名的提交范围；忽略未暂存和未跟踪变更，除非用户明确要求纳入。
   - 对现有暂存快照的范围、逻辑归属或敏感性有任何不确定性时，停止写操作并询问用户，不自行改变暂存区或猜测意图。
   - 暂存区为空时，只选择用户点名或当前任务直接产生的变更，不默认暂存整个工作区。
   - 用户明确要求提交“全部当前改动”时，也先排除无关生成物以及 `.env*`、凭据、token、私钥、私有配置等敏感内容。
3. **规划原子提交**：先按逻辑目的分组，再决定 type 和 scope。
   - 现有暂存快照如无明显的范围、逻辑或敏感性问题，优先保持为一个提交；用户的主动暂存意图高于通常的按库拆分惯例。
   - 对尚未暂存、由本技能规划的范围，不同库通常分别提交；仓库级改动通常使用 `proj`。
   - 同一功能涉及新增、修改和删除文件时可以保持为一个提交。
   - 只有逻辑独立，或没有单一主要语义时，才继续拆分。
   - 已有暂存快照需要拆分时，先说明拆分方案并取得用户许可，再改变暂存区；不得破坏部分暂存内容。
4. **审查每组变更**：
   - 检查 `console.log`、`console.debug`、`debugger`、临时 `alert` 等调试残留。
   - 检查明显逻辑错误、遗漏的空值或异常分支、复制粘贴错误。
   - 检查公开导出的类、函数、方法、类型和常量是否缺少必要注释。
   - 检查无关文件、生成物和疑似敏感信息。

   发现问题时，按文件和行号报告。只读模式直接给出建议；提交模式询问用户是修复还是明确忽略，修复后重新收集上下文和审查。
5. **执行验证**：
   - 始终对候选或暂存变更运行相应的 `git diff --check`。
   - 根据改动范围运行相关检查；代码改动通常运行 `pnpm lint`，公共类型或构建管线改动按需运行构建。
   - 验证失败时报告结果，不绕过 Git hooks；仅在用户明确接受失败后继续提交。
6. **输出或提交**：
   - 只读模式：返回建议的提交分组及完整 commit message，然后停止。
   - 提交模式且暂存区为空：按组使用明确路径暂存，避免笼统执行 `git add .` 或 `git add -A`。
   - 每次提交前重新检查 `git diff --cached --name-status`、完整 cached diff 和 `git diff --cached --check`，确认暂存区只包含当前组。
   - 使用安全的参数或标准输入传递 commit message 并运行 `git commit`。若 hook 修改文件或提交失败，重新检查仓库状态，不使用 `--no-verify` 绕过。
7. **确认结果**：运行 `git status --short --branch`，报告每个 commit 的短 hash、标题、已运行的验证及仍保留的未提交改动。
