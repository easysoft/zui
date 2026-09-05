---
name: zuix-commit
description: "按独立 ZUI 扩展项目自身规范只读分析变更、生成英文 commit message，或在用户明确要求提交时审查、验证、按逻辑单元完成 Git 提交。Use when the user asks to inspect commit scope, generate a commit message, commit staged or current changes, 提交代码, 保存改动, or wrap up work owned by a ZUI extension repository; always distinguish the extension root from its actual Git root and infer scope from applicable AGENTS.md plus recent history."
---

# ZUI 扩展项目提交

## 解析所有权与规则

1. 在采取其他任务动作前，完整读取 `../zuix-standards/SKILL.md`，再完整读取 `../zuix-standards/references/workflow.md`。
2. 从当前技能目录运行只读 resolver：

```sh
node ../zuix-standards/scripts/resolve-zui-ext-context.mjs --cwd <目标路径> [--lib <目录名或包名>] [--host <宿主根>] --json
```

3. 记录 `extensionRoot`（扩展源码、依赖与质量检查工作目录）和 `gitRoot`（Git 状态、diff、历史与提交所有权边界）。它们可能不同；所有 Git 命令都使用 `git -C <gitRoot>`，不得从宿主 `exts/` 符号链接误把 ZUI 主仓库当成所有者。
4. 完整读取 `gitRoot`、`extensionRoot` 及目标路径适用的 `AGENTS.md`。若 resolver 同时得到 `targetLibRoot`、`folderName`、`packageName` 和 `zuiName`，只把它们用于定位和理解变更，不用来猜 commit scope。
5. 从适用 `AGENTS.md` 的提交规范和 `git -C <gitRoot> log --oneline -20` 的稳定历史共同推导 type、scope、语言、标题格式和正文惯例。显式规范优先于历史；历史样本不足或相互冲突时，先报告不确定性，不硬编码 `@zui`、扩展组名、目录名、`proj` 或任何产品前缀。

## 操作边界

先判断用户意图：

- **只读模式**：用户只要求分析、规划或生成 commit message 时，只读取并返回建议，不运行 `git add`、`git commit` 或其他写操作。
- **提交模式**：只有用户明确要求提交、保存或入库改动时，才暂存并提交请求范围内的变更。

始终遵守：

- 保留已有暂存、未暂存和未跟踪改动，不修改或提交无关内容。
- 不擅自执行 `--amend`、`--no-verify`、push、force push、reset、clean 或删除操作。
- 不修改 `zuiRoot` 的源码、注册、依赖或锁文件；宿主联合验证的生成物和缓存写入遵循共享工作流的验证隔离与批准规则；若用户明确把宿主改动也纳入提交，它属于另一个 Git 根，必须单独分析和提交。
- 遇到未解决冲突、意图不明的 merge/rebase/cherry-pick、多 Git 根混杂，或无法可靠判断提交范围时，停止写操作并请求用户决定。

除非扩展项目规范另有规定，保留 ZUI 常用语义：`*` 表示修改、`+` 表示新增、`-` 表示移除；按提交的主要目的判断，不按文件 A/M/D 状态机械拆分。标题使用简洁英文祈使句，不添加 emoji、句号或 Agent `Co-authored-by`。

## 工作流

1. **收集上下文**：并行运行：
   - `git -C <gitRoot> status --short --branch`
   - `git -C <gitRoot> diff --cached`
   - `git -C <gitRoot> diff`
   - `git -C <gitRoot> ls-files --others --exclude-standard`
   - `git -C <gitRoot> log --oneline -20`

   单独读取候选未跟踪文件；普通 diff 不包含其内容。记录 `extensionRoot` 相对 `gitRoot` 的路径，确认每个候选文件确由该 Git 根拥有。
2. **确定候选范围**：
   - 暂存区已有变更时，将现有暂存快照视为用户主动点名的提交范围；忽略未暂存和未跟踪内容，除非用户明确要求纳入。
   - 对暂存快照的范围、逻辑归属或敏感性有疑问时，不改变暂存区，先询问。
   - 暂存区为空时，只选择用户点名或当前任务直接产生的文件，不默认暂存整个工作区。
   - 用户明确要求“全部当前改动”时，仍排除无关生成物和 `.env*`、凭据、token、私钥、私有配置等敏感内容。
3. **规划原子提交**：先按逻辑目的分组，再应用已推导的 type/scope。
   - 无明显问题的既有暂存快照优先保持为一个提交；用户的主动暂存意图高于通常拆分惯例。
   - 未暂存范围中，不同目标库通常分别提交；共享基础与消费者只有在一个不可分割的功能中才合并。
   - 同一功能涉及新增、修改和删除文件时可以保持一个提交。
   - 需要拆分既有暂存快照时，先说明方案并取得用户许可，不破坏部分暂存内容。
4. **审查每组变更**：检查调试残留、明显逻辑错误、遗漏的异常/空值分支、复制错误、公共 API 注释、无关文件、生成物和敏感信息。按文件与行号报告问题；仅有提交授权不包含修复；提交模式下，本任务已有仍适用的修复授权且相应实施确认要求已满足时，在评审后完成范围内修复、重新评审和验证，再继续提交。没有修复授权或需要接受未解决问题时，仍由用户决定；修复后重新收集上下文。
5. **执行验证**：始终对候选或暂存变更运行相应 `git diff --check`。根据变更从 `extensionRoot` 的实际 scripts、配置和 `AGENTS.md` 选择 lint、类型或测试；需要宿主联合验证时只在 resolver 唯一解析 `zuiRoot + extsName` 后运行，并把结果与扩展侧检查分开。验证失败时不绕过 hooks；只有用户明确接受失败才继续。
6. **输出或提交**：
   - 只读模式返回建议分组、scope 推导证据和完整 commit message，然后停止。
   - 提交模式且暂存区为空时，按组使用 `git -C <gitRoot> add -- <明确路径...>`；不使用 `git add .` 或 `git add -A`。
   - 每次提交前重新检查 cached name-status、完整 cached diff 和 cached `diff --check`，确认只包含当前组。
   - 用不会触发 shell 插值的参数或标准输入传递 message。hook 修改文件或提交失败后重新检查状态，不使用 `--no-verify`。
7. **确认结果**：运行 `git -C <gitRoot> status --short --branch`，报告每个 commit 的短 hash、标题、scope 依据、验证结果和仍保留的未提交改动。
