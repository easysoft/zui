---
name: zuix-review
description: "只读评审独立 ZUI 扩展项目的指定变更；默认评审当前扩展范围内的未提交改动，没有改动时评审未推送提交。适用于 diff 评审，不用于整库优化审计。"
---

# ZUI 扩展代码评审

## 操作边界与上下文

- 评审保持只读；“review”“检查代码”或“评审代码”不表示授权修复、格式化、暂存、提交、推送、切换分支或更新远端引用。
- 用户另行明确要求修复时，先完成评审，再按变更所属的扩展实施技能完成范围内修复；不要让修复诉求改变本次评审范围。
- 保留用户已有的暂存、未暂存和未跟踪内容。不要运行 `--fix`、会刷新生成目录或缓存的验证命令；用户明确要求相应验证或能够可靠使用仓库外临时输出时除外。
- 按 [扩展公共规范](../zuix-standards/SKILL.md) 和 [共享工作流](../zuix-standards/references/workflow.md) 解析目标真实路径、`EXT_ROOT` 和实际 `GIT_ROOT`，读取适用的 `AGENTS.md` 及本次需要的规范。已有且未变化的上下文直接复用；需要宿主契约或联合验证时再解析 `ZUI_ROOT` 与 `EXTS_NAME`。
- 所有 Git 命令使用 `git -C <GIT_ROOT>`。从宿主 `exts/` 软链接进入时，先解析到扩展源码的真实路径，不把宿主仓库当作文件所有者。下文命令均按此前缀执行。
- 除用户明确指定更广范围外，默认 path filter 为 `EXT_ROOT` 相对 `GIT_ROOT` 的路径；用户只点名某个库、目录或文件时收窄到其真实路径。`EXT_ROOT = GIT_ROOT` 且没有更窄范围时才可省略 filter。每个适用的 status、diff、log、ls-files 和 whitespace 检查命令都在 `--` 后附加该 pathspec，避免纳入父级 Git 根中的其他项目。用户明确要求跨 Git 根评审时，分别确定来源、基线并报告，不合并成一个 diff。

## 确定评审范围

按以下优先级选择唯一变更来源，并在输出中说明最终使用的路径范围和基线：

用户以功能或产物限定范围时，先映射为相关路径，再应用下列选择规则。范围外只收集必要的路径与状态，不展开其未提交或未跟踪内容；判断变更所需的基线上下文仍可只读查看。

1. **用户指定范围**：严格使用用户点名的暂存层级、提交、commit range、分支、diff 或 PR 作为变更来源，解析并验证引用，不混入其他来源；保留用户明确给出的 `..` / `...` 语义。单个普通提交按 parent-to-commit 评审；单个 merge commit 先检查其父提交，若用户需要的 parent 或 combined 语义仍不明确则询问，不擅自固定为 first-parent。用户只点名文件、目录或库时，将其作为 path filter，并在该 filter 内按下面规则确定变更来源。用户明确给出完整 diff 或更广路径范围时尊重该范围，不静默裁剪到扩展根。范围仍有多种实质解释且无法从上下文消除时，先提出最少必要问题。
2. **本地未提交改动**：用户未指定变更来源时，先运行 `git -C <GIT_ROOT> --no-optional-locks status --short --branch`，再用 `git -C <GIT_ROOT> --no-optional-locks status --porcelain=v1 --untracked-files=all -- <pathspec>` 判断当前范围。父级 Git 根中范围外的改动不参与来源选择。只要当前 filter 的 porcelain 存在 staged、unstaged、untracked 或冲突条目，就评审它们的并集：
   - 分别读取 `git diff --cached --no-ext-diff --find-renames` 与 `git diff --no-ext-diff --find-renames`，保留暂存和未暂存边界；
   - HEAD 可解析时，使用 `git diff --no-ext-diff HEAD` 理解 tracked 文件的最终组合状态；unborn branch 跳过该命令，以 cached、unstaged 和逐文件读取重建状态；
   - 使用 `git ls-files --others --exclude-standard -z` 枚举并逐个读取未跟踪文件，因为普通 diff 不包含它们；
   - 对部分暂存、重命名、删除、冲突和二进制文件单独确认真实状态，不因某一种 diff 为空而漏审。
3. **本地未推送提交**：只有当前 filter 没有未提交改动时，优先解析当前分支的 `@{push}` 作为基线。用 `git rev-list --left-right --count <base>...HEAD` 记录分支整体的 behind/ahead，用 `git log --reverse <base>..HEAD -- <pathspec>` 枚举当前 filter 内仅在本地可达且有相关改动的提交，并以 `git diff --no-ext-diff --find-renames <base>...HEAD -- <pathspec>` 评审相对 merge-base 的聚合结果。需要理解被聚合 diff 隐藏的重排、回退或提交意图时，再读取单个提交。

如果 `@{push}` 无法解析但 `@{upstream}` 能可靠解析，可以退回 upstream，并明确说明它不一定等于实际推送目标；两者都不可用时再请用户给出基线。未提交范围可按上述规则读取；需要从分支推导未推送范围时，遇到 detached HEAD、unborn branch、历史不完整、没有共同祖先或引用无法解析，不要猜测基线。ahead 为零，或 path filter 下的聚合 diff 为空，表示没有默认评审内容，直接报告这一事实；不要退而评审最近一次提交。不要擅自改用 `origin/dev`、默认分支或整个历史。分支已分叉时明确报告 ahead/behind 状态，但仍只评审基线两点范围中仅在本地可达的提交。push/upstream 远端跟踪引用只是本地缓存；默认不运行 `git fetch`，需要确认远端最新状态时必须由用户明确要求。

ignored 文件不属于默认未提交范围，用户点名时才纳入。显式 path filter 可能被普通 status 和 `--exclude-standard` 隐藏；先用 `git check-ignore -- <pathspec>` 识别，再以 `git ls-files --others --ignored --exclude-standard -z -- <pathspec>` 或直接逐文件读取，只纳入用户点名的 ignored 目标。子模块默认只评审父仓库记录的 gitlink 变化，不自动递归 dirty 子模块或嵌套仓库。所有 pathspec 放在 `--` 后；不要通过 `eval` 执行用户提供的 revision 或路径。

读取上下文时对齐评审快照：暂存范围以 index 内容为准，提交范围以对应 revision 为准，不能用当前工作区文件替代其终点。由 `zuix-commit` 等流程提供精确候选组时，将其视为显式范围，不重新选择默认来源或扩大到其他改动。

## 评审与输出

范围确定后读取[评审方法与输出](references/review-protocol.md)，按其证据要求、严重度和 findings 格式完成只读评审。提交技能可直接复用该参考，继续沿用其显式候选范围与授权。
