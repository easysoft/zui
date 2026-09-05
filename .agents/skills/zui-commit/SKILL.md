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

## 与代码评审技能协作

候选范围、写操作授权、验证编排和最终提交结果始终由本技能负责。审查候选组时，完整读取 [ZUI 代码评审](../zui-review/SKILL.md)，只复用其中与评审阶段有关的只读边界、评审方法、严重度和 findings 输出规则。

- 将当前候选提交组声明为显式评审范围，不让代码评审技能重新执行默认范围选择。
- 现有暂存快照只评审 cached 内容；尚未暂存的候选组只评审精确 diff、pathspec 或 hunk；用户明确给出的 revision/range 保留原有语义。
- 不混入其他工作区改动；候选组为空时直接报告无可提交内容，不回退评审未推送提交。
- 确认所有被当前变更新增引用的兄弟技能和 reference 已在基线中受跟踪，或被纳入同一原子候选组；否则引用断链本身就是 finding。
- 评审阶段保持只读。仅有提交授权时，只允许后续按已确认范围暂存和提交，不包含修复代码、刷新生成物或推送。提交模式下，若本任务已有仍适用的修复授权，且相应实施确认要求已满足，则在评审后完成范围内修复、重新评审和验证，再继续提交；不重复询问是否修复。
- 验证由本技能统一编排；同一候选快照已有的有效结果可以复用，快照变化后必须重新评审并补充受影响验证。

## 步骤

1. **收集上下文**：先并行运行 `git --no-optional-locks status --short --branch`、`git diff --cached --name-status`、`git diff --name-status`、`git ls-files --others --exclude-standard -z` 和 `git log --oneline -10`，只收集分层状态、路径和历史，不读取全部无关变更内容。
2. **确定候选范围**：
   - 用户明确点名的文件、hunk、暂存层级或其他提交范围优先。若非空暂存快照与该范围不一致，不得把范围外暂存内容一并提交，也不得自行改写暂存区；先说明差异并取得用户对暂存区处理方式的许可，除非当前请求已经明确授权相应的整体调整。
   - 用户未指定不同范围且暂存区已有变更时，将现有暂存快照视为用户主动点名的提交范围；忽略未暂存和未跟踪变更，除非用户明确要求纳入。
   - 对现有暂存快照的范围、逻辑归属或敏感性有任何不确定性时，停止写操作并询问用户，不自行改变暂存区或猜测意图。
   - 暂存区为空时，只选择用户点名或当前任务直接产生的变更，不默认暂存整个工作区。
   - 用户明确要求提交“全部当前改动”时，也先排除无关生成物以及 `.env*`、凭据、token、私钥、私有配置等敏感内容。
   - 候选范围确定后，才读取该范围的 `git diff --cached --no-ext-diff --find-renames`、`git diff --no-ext-diff --find-renames` 和候选未跟踪文件；pathspec 始终放在 `--` 后。不要读取候选范围外的未提交变更内容；评审时仍可只读查看判断所需的基线源码、调用方、测试和引用目标。
3. **规划原子提交**：先按逻辑目的分组，再决定 type 和 scope。
   - 现有暂存快照如无明显的范围、逻辑或敏感性问题，优先保持为一个提交；用户的主动暂存意图高于通常的按库拆分惯例。
   - 对尚未暂存、由本技能规划的范围，不同库通常分别提交；仓库级改动通常使用 `proj`。
   - 同一功能涉及新增、修改和删除文件时可以保持为一个提交。
   - 只有逻辑独立，或没有单一主要语义时，才继续拆分。
   - 已有暂存快照需要拆分时，先说明拆分方案并取得用户许可，再改变暂存区；不得破坏部分暂存内容。
4. **审查每组变更**：
   - 按“与代码评审技能协作”审查当前候选快照。
   - 另外检查提交专属问题：`console.log`、`console.debug`、`debugger`、临时 `alert` 等调试残留，无关文件或生成物，source-of-truth 不一致，以及 `.env*`、凭据、token、私钥和私有配置等疑似敏感信息。

   有 confirmed finding 或疑似敏感信息时先按严重度和文件/行号报告。只读模式将 commit message 标记为“修复或明确接受后可用”；只有剩余变化仍构成独立完整提交时，才另外给出不含问题部分的分组建议。提交模式先核对本任务已有的修复授权；已有适用批准时按前述流程修复，没有修复授权或需要接受未解决问题时，暂停受影响的写操作并由用户决定；不确定事项单列为风险，不冒充 finding。修复或候选范围变化后，重新收集上下文、审查并验证。
5. **执行验证**：
   - 始终对候选或暂存的 tracked diff 运行相应的 `git diff --check`；未跟踪文本文件使用 `zui-review` 的等价 whitespace 检查。
   - 选择覆盖候选风险的最小充分组合，不机械运行全部命令：
     - 仓库内 `.agents/skills/*`、`skills/*` 和 `skills-exts/*` 使用 `skill-creator` 的 `quick_validate.py` 并检查引用；另行解析 `agents/openai.yaml`，核对界面字段、`$skill-name` 默认提示及资源路径，因为 quick validator 不覆盖该文件。修改 `skills/zui` 的脚本或检查器时再运行 `pnpm test:skills`。
     - 普通 TS/TSX/JS、工具和测试改动通常运行 `pnpm check`；只有范围窄、目标检查能明确覆盖且完整检查成本不相称时，才改用目标 lint、类型检查及相关 unit/DOM 测试，并说明收窄后的覆盖边界。
     - 公共导出、包元数据、依赖锁、构建脚本、Vite/Tailwind 或分发契约改动增加 `pnpm test:build`，并在代表性构建未覆盖目标库时增加目标库构建。
     - 文档管线或导航改动仅在隔离快照中增加 `pnpm docs:build`，因为它会刷新 ignored 的 `docs/_` 生成内容；无法隔离时报告未运行及残余风险，不在当前工作区直接执行。CSS 或视觉改动增加目标构建和浏览器/人工视觉验证；浏览器行为、焦点、portal 或无障碍改动增加目标 Chromium E2E 或 `pnpm test:e2e`。仅在兼容性风险明确时运行跨浏览器测试。
     - 完整 `zui` 构建、覆盖率和发布级检查只用于构建图、测试基础设施、发布契约等相应高风险变更，不作为每次提交的固定成本。
   - 确认命令实际覆盖候选范围：`pnpm check` 不覆盖 CSS、文档、`dev.ts` 和真实浏览器行为，`test:build` 与 E2E 也只覆盖代表性库。未覆盖部分必须使用目标验证或明确列为残余风险，不能用笼统通过代替。
   - 运行会写入或清理 `build/`、`dist/`、`docs/_`、`coverage/`、`test-results/` 等目录的验证前，先确认现有内容是否属于用户工作，并优先使用精确包含已评审候选快照的隔离副本或显式临时输出。只清理本次创建且路径已确认的临时目录；不得删除、覆盖或自动暂存候选范围外产物。无法安全隔离时先请求许可或报告未运行。
   - 只读模式不运行会刷新生成目录、覆盖率或浏览器结果的命令，除非用户明确要求；提交模式可运行候选所需验证。验证失败时区分本次引入、已有基线和环境问题，不绕过 Git hooks；仅在用户明确接受相应风险后继续提交。
6. **输出或提交**：
   - 只读模式：有 finding 时先输出 findings，再返回建议的提交分组、完整 commit message、验证结果和残余风险，然后停止。
   - 提交模式且暂存区为空：按组使用明确路径暂存，避免笼统执行 `git add .` 或 `git add -A`。
   - 每次提交前重新检查 `git diff --cached --name-status`、完整 cached diff 和 `git diff --cached --check`，确认暂存区只包含当前组且与已评审、已验证范围一致；任何差异都返回步骤 4 重新审查并补充验证。
   - 使用安全的参数或标准输入传递 commit message 并运行 `git commit`。若 hook 修改文件或提交失败，重新检查仓库状态，不使用 `--no-verify` 绕过。
7. **确认结果**：运行 `git status --short --branch`，报告每个 commit 的短 hash、标题、评审结论、已运行的验证、用户明确接受的问题或风险，以及仍保留的未提交改动。
