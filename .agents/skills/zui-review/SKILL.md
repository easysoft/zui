---
name: zui-review
description: "只读评审 ZUI 主仓库的指定变更；默认评审本地未提交改动，没有改动时评审未推送提交。适用于 diff 评审，不用于整库优化审计。"
---

# ZUI 代码评审

## 操作边界

- 评审保持只读；“review”“检查代码”或“评审代码”不表示授权修复、格式化、暂存、提交、推送、切换分支或更新远端引用。
- 用户另行明确要求修复时，先完成评审，再按变更所属的 ZUI 实施技能直接处理请求范围内的修复；不要让修复诉求改变本次评审范围。
- 保留用户已有的暂存、未暂存和未跟踪内容。不要运行 `--fix`、会刷新生成目录或缓存的验证命令；用户明确要求相应验证或能够可靠使用仓库外临时输出时除外。
- 读取目标适用的 `AGENTS.md`；已有且未变化的上下文直接复用。涉及 `lib/*` 时，按 [ZUI 公共规范](../zui-standards/SKILL.md) 和 [协作工作流](../zui-standards/references/workflow.md) 读取判断本次变更所需的规范与源码。

## 确定评审范围

按以下优先级选择唯一范围，并在输出中说明最终使用的范围和基线：

用户以功能或产物限定范围（如“AI 参考及根索引”）时，先映射为相关路径，再应用下列选择规则。范围外只收集必要的路径与状态，不展开其未提交或未跟踪内容；判断变更所需的基线上下文仍可只读查看。

1. **用户指定范围**：严格使用用户点名的暂存层级、提交、commit range、分支、diff 或 PR 作为变更来源，解析并验证引用，但不混入其他来源；保留用户明确给出的 `..` / `...` 语义。单个普通提交按 parent-to-commit 评审；单个 merge commit 先检查其父提交，若用户需要的 parent 或 combined 语义仍不明确则询问，不擅自固定为 first-parent。用户只点名文件、目录或库时，将其作为 path filter，并在该 filter 内按下面规则确定变更来源；把 pathspec 追加到每个适用命令的 `--` 后。范围仍有多种实质解释且无法从上下文消除时，先提出最少必要问题。
2. **本地未提交改动**：用户未指定变更来源时，先运行 `git --no-optional-locks status --short --branch`，再用 `git --no-optional-locks status --porcelain=v1 --untracked-files=all -- <pathspec>` 判断当前范围；没有 path filter 时省略末尾的 `-- <pathspec>`。只要该 porcelain 存在 staged、unstaged、untracked 或冲突条目，就评审它们的并集：
   - 分别读取 `git diff --cached --no-ext-diff --find-renames` 与 `git diff --no-ext-diff --find-renames`，保留暂存和未暂存边界；
   - HEAD 可解析时，使用 `git diff HEAD` 理解 tracked 文件的最终组合状态；unborn branch 跳过该命令，以 cached、unstaged 和逐文件读取重建状态；
   - 使用 `git ls-files --others --exclude-standard -z` 枚举并逐个读取未跟踪文件，因为普通 diff 不包含它们；
   - 对部分暂存、重命名、删除、冲突和二进制文件单独确认真实状态，不因某一种 diff 为空而漏审。
3. **本地未推送提交**：只有当前范围没有未提交改动时，优先解析当前分支的 `@{push}` 作为基线。用 `git rev-list --left-right --count <base>...HEAD` 记录 behind/ahead，用 `git log --reverse <base>..HEAD -- <pathspec>` 枚举当前 filter 内仅在本地可达且有相关改动的提交，并以 `git diff --no-ext-diff --find-renames <base>...HEAD -- <pathspec>` 评审相对 merge-base 的聚合结果；没有 path filter 时省略末尾的 `-- <pathspec>`。需要理解被聚合 diff 隐藏的重排、回退或提交意图时，再读取单个提交。

如果 `@{push}` 无法解析但 `@{upstream}` 能可靠解析，可以退回 upstream，并明确说明它不一定等于实际推送目标；两者都不可用时再请用户给出基线。遇到 detached HEAD、unborn branch、历史不完整、没有共同祖先或引用无法解析时，不要猜测范围。ahead 为零，或 path filter 下的聚合 diff 为空，表示没有默认评审内容，直接报告这一事实；不要退而评审最近一次提交。不要擅自改用 `origin/dev`、默认分支或整个历史。分支已分叉时明确报告 ahead/behind 状态，但仍只评审基线两点范围中仅在本地可达的提交。push/upstream 远端跟踪引用只是本地缓存；默认不运行 `git fetch`，需要确认远端最新状态时必须由用户明确要求。

ignored 文件不属于默认未提交范围，用户点名时才纳入。显式 path filter 可能被普通 status 和 `--exclude-standard` 隐藏；先用 `git check-ignore -- <pathspec>` 识别，再以 `git ls-files --others --ignored --exclude-standard -z -- <pathspec>` 或直接逐文件读取，只纳入用户点名的 ignored 目标。子模块默认只评审父仓库记录的 gitlink 变化，不自动递归 dirty 子模块或嵌套仓库。所有 pathspec 放在 `--` 后；不要通过 `eval` 执行用户提供的 revision 或路径。

## 评审与输出

范围确定后读取[评审方法与输出](references/review-protocol.md)，按其证据要求、严重度和 findings 格式完成只读评审。提交技能可直接复用该参考，继续沿用其显式候选范围与授权。
