---
name: zuix-review
description: "只读评审独立 ZUI 扩展项目的指定变更；默认评审当前扩展范围内的未提交改动，没有改动时评审未推送提交。适用于 diff 评审，不用于整库优化审计。"
---

# ZUI 扩展代码评审

## 操作边界与上下文

- 评审保持只读；“review”“检查代码”或“评审代码”不表示授权修复、格式化、暂存、提交、推送、切换分支或更新远端引用。
- 用户另行明确要求修复时，先完成评审，再按变更所属的扩展实施技能及其确认门禁处理；不要让修复诉求改变本次评审范围。
- 保留用户已有的暂存、未暂存和未跟踪内容。不要运行 `--fix`、会刷新生成目录或缓存的验证命令；用户明确要求相应验证或能够可靠使用仓库外临时输出时除外。
- 按 [扩展公共规范](../zuix-standards/SKILL.md) 和 [共享工作流](../zuix-standards/references/workflow.md) 解析目标真实路径、`EXT_ROOT` 和实际 `GIT_ROOT`，读取适用的 `AGENTS.md` 及本次需要的规范。已有且未变化的上下文直接复用；需要宿主契约或联合验证时再解析 `ZUI_ROOT` 与 `EXTS_NAME`。
- 所有 Git 命令使用 `git -C <GIT_ROOT>`。从宿主 `exts/` 软链接进入时，先解析到扩展源码的真实路径，不把宿主仓库当作文件所有者。下文命令均按此前缀执行。
- 除用户明确指定更广范围外，默认 path filter 为 `EXT_ROOT` 相对 `GIT_ROOT` 的路径；用户只点名某个库、目录或文件时收窄到其真实路径。`EXT_ROOT = GIT_ROOT` 且没有更窄范围时才可省略 filter。每个适用的 status、diff、log、ls-files 和 whitespace 检查命令都在 `--` 后附加该 pathspec，避免纳入父级 Git 根中的其他项目。用户明确要求跨 Git 根评审时，分别确定来源、基线并报告，不合并成一个 diff。

## 确定评审范围

按以下优先级选择唯一变更来源，并在输出中说明最终使用的路径范围和基线：

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

## 评审方法

1. 读取完整 diff、变更文件及必要上下文，不只看改动行。追踪相关入口、公共类型、调用方、消费者、测试/调试页、配置和生成源，确认变更实际进入的执行路径与公开契约。
2. 重点检查本次变更是否引入或暴露以下问题：
   - 逻辑错误、错误恢复缺口、空值与边界条件、异步竞态、重复执行和状态不同步；
   - 公共 API、类型、事件、DOM/CSS、序列化、包元数据或向后兼容性回归；
   - listener、timer、observer、portal、实例、缓存及其他资源的初始化、更新与销毁不对称；
   - 安全、数据损坏、无障碍、国际化及有可复现场景的性能退化；
   - ZUI 的 Preact/vanilla 双形态、组件注册、`contributes`、[辅助类优先](../zuix-standards/references/component.md#布局与样式)、Tailwind 前导 `-`、主题和 HMR 约定；
   - 扩展兄弟包与宿主库的真实公开 package name、依赖协议和导出契约，不通过相对路径或宿主 `exts/` 软链接跨包导入；从实际 package 与宿主实现核对 `ZUI_NAME`、`PUBLIC_PATH`、WIP/notReady 及资源加载、构建消费关系，不从目录名、包 scope 或注册组猜测；
   - 生成文件与 source-of-truth 不一致。遇到生成产物时找到生成器或映射并审查源头，不只评审生成结果。
3. 搜索相关符号、成熟实现和调用点来验证判断，优先扩展项目，需要时再读取宿主。发现看似异常的代码时，先确认是否为现有约定、兼容处理或基线问题。宿主源码和范围外调用方仅作为判断依据，不把它们的独立改动或历史缺陷纳入 findings。
4. 对 tracked Git diff 运行对应范围的 `git diff --check`。它不覆盖未跟踪文件；对未跟踪文本文件使用等价 whitespace 检查，或以 `git diff --no-index --check -- /dev/null <file>` 检查诊断内容，并注意 no-index 因“存在内容差异”返回非零不等于 whitespace 失败。按风险从 `EXT_ROOT` 实际 `package.json` 和规则选择不会修改工作区的目标 lint、类型或现有测试命令，不套用宿主脚本或臆造 `pnpm test`。lint 输出先作为验证结果，只有它证明本次变更引入真实缺陷或确定阻断既有门禁时才升级为 finding。
5. 需要宿主联合验证时，遵循 [共享工作流的验证隔离规则](../zuix-standards/references/workflow.md#实施与验证)。原宿主默认只读，不因解析到宿主就运行会刷新 `build/`、`dist/`、文档或缓存的命令；隔离验证须包含被评审快照，并保留宿主契约和注册关系。宿主或注册未唯一解析时继续可行的扩展侧检查，说明未覆盖项，不猜测命令、URL 或验收结论。扩展检查与宿主检查分别报告，并区分静态检查、构建和浏览器/runtime 验证；无法安全运行的验证说明原因和剩余风险，不把“未运行”写成“通过”。
6. 只报告由当前范围引入、可操作且有充分证据的问题。不要把以下内容列为 finding：纯风格偏好、没有具体后果的防御性建议、范围外历史缺陷、与改动无关的基线失败，或仅凭猜测成立的风险。测试缺口只有在明确导致关键行为无法验证或违反现有契约时才作为 finding；否则放入残余风险。

## 严重度

- `P0`：阻断发布或核心使用，或造成广泛安全问题、数据损坏、构建完全失败。
- `P1`：常见路径上的明确运行时故障、公共 API/兼容性回归或严重生命周期问题。
- `P2`：有现实触发条件的重要边界错误、资源泄漏、无障碍问题或显著行为偏差。
- `P3`：影响有限但真实、可操作的缺陷；不要用 P3 容纳风格和可选改进。

严重度按影响和触发概率判断，不按改动大小、文件数量或修复难度判断。

## 输出

1. 先列 findings，按 `P0` 到 `P3` 排序。每项只描述一个根因，使用简短标题，并包含最窄的文件/行号、触发场景、实际影响和判断依据；行号尽量落在当前评审终点的改动行上。纯删除导致的问题锚定最近的存续改动行并说明删除关系。宿主支持行内评论时使用行内评论，否则使用扩展源码真实路径的可点击链接与行号。
2. 不确定但值得关注的事项单列为风险或问题，不与已确认 findings 混排。
3. 没有 finding 时明确写“未发现可操作问题”，不要为了显得完整而制造建议。
4. 最后简要列出扩展根、Git 根、路径范围、变更来源和基线，以及运行过的验证及结果。需要宿主时补充其上下文，分别说明扩展侧和宿主侧未覆盖的 runtime/浏览器场景及其他残余风险。不要用 lint、构建或测试通过代替代码评审结论。
