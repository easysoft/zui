# ZUIX 扩展库开发技能

`ZUIX` 表示 **ZUI Extension**。本目录提供一套面向独立 ZUI 扩展组件库项目的 Codex 技能，覆盖规范查询、组件与 helper 开发、整库编排、国际化、文档、调试、变更评审、优化、第三方库封装和 Git 提交。

主仓库的 `.agents/skills/zui-*` 服务于 ZUI 内置 `lib/*`；这里的 `zuix-*` 专门处理扩展项目与宿主 ZUI 分离的开发模型。两套技能使用不同前缀，可以在同一环境中并存。

## 使用方式

建议把整套技能复制到扩展项目的 `.agents/skills/`。技能之间会互相引用，其中 `zuix-standards` 是所有开发技能的公共底座。

```sh
mkdir -p <extension-root>/.agents/skills
cp -R <zui-root>/skills-exts/zuix-* <extension-root>/.agents/skills/
```

复制后可在请求中显式调用，例如：

```text
$zuix-standards 检查 lib/my-component 的包信息和宿主集成方式
$zuix-component 为 lib/my-component 增加一个 vanilla + Preact 组件
$zuix-lib 在当前扩展项目中新建一个完整组件库
$zuix-review
$zuix-review 评审 lib/my-component 的改动
$zuix-commit
$zuix-commit 分析当前扩展项目的提交范围并生成 commit message
```

直接调用 `$zuix-commit` 会审查并提交当前扩展项目的改动，必要检查通过后不再确认；有暂存变更时使用已有快照，暂存区为空且未指定范围时选择扩展项目内的可提交改动。明确要求只分析、评审或生成提交信息时保持只读。

指定 diff 的只读评审使用 `$zuix-review`；默认评审 `EXT_ROOT` 内暂存、未暂存和未跟踪改动的并集，没有未提交改动时才在同一路径范围内评审未推送提交，用户显式指定的范围优先。评审不自动修复或提交。整库、多库质量审计使用 `$zuix-optimize`。

这套技能是自包含的，运行时不依赖宿主仓库中的 `.agents/skills/zui-*`。

## 四层上下文

扩展库开发不能把源码仓库、Git 仓库和宿主 ZUI 当成同一个目录。按 [共享工作流](zuix-standards/references/workflow.md) 解析任务所需上下文并复用已有发现；宿主只在相关契约或联合验证需要时解析：

| 上下文 | 含义 | 主要用途 |
| --- | --- | --- |
| `TARGET_LIB_ROOT` | 目标扩展包的真实目录 | 源码、类型、样式、文档和调试页 |
| `EXT_ROOT` | 扩展项目或 workspace 根 | 依赖、lockfile、lint、类型检查和测试 |
| `GIT_ROOT` | 实际拥有扩展文件的 Git 根 | status、diff、历史和提交 |
| `ZUI_ROOT` + `EXTS_NAME` | 宿主 ZUI 及其扩展注册组 | 联合 dev、build 和 docs |

`TARGET_LIB_ROOT`、`EXT_ROOT` 和 `GIT_ROOT` 可能互不相同；从宿主的 `exts/` 软链接进入时，也必须回到扩展源码的真实路径操作。

可以直接运行公共解析器查看上下文：

```sh
node .agents/skills/zuix-standards/scripts/resolve-zui-ext-context.mjs \
  --cwd <target-path> [--lib <folder-or-package>] [--host <zui-root>] --json
```

盘点扩展项目中的库：

```sh
node .agents/skills/zuix-standards/scripts/inspect-zui-lib.mjs \
  --root <extension-root> [--lib <folder-or-package>] --json
```

## 技能一览

| 技能 | 用途 | 默认门禁 |
| --- | --- | --- |
| `zuix-standards` | 解析上下文并查询扩展开发规范 | 始终只读 |
| `zuix-component` | 开发 CSS、Preact、vanilla 或组合组件 | 先给出完整计划并确认 |
| `zuix-helper` | 开发函数、类型、store、类和浏览器 helper | 先给出 API 计划并确认 |
| `zuix-lib` | 新建完整扩展包或编排跨领域改动 | 汇总一份计划，只确认一次 |
| `zuix-i18n` | 审计、接入和完善国际化 | 目标明确时直接实施 |
| `zuix-doc` | 维护扩展包官网正式文档源 | 目标明确时直接实施 |
| `zuix-dev` | 维护 README/dev 页面和 `dev.ts` | 目标明确时直接实施 |
| `zuix-review` | 只读评审指定 diff，默认未提交改动或未推送提交 | 始终只读 |
| `zuix-optimize` | 审计或优化一个、多个或全部扩展包 | 审计只读；修改前统一确认 |
| `zuix-wrap-lib` | 将 ready-to-use UMD/IIFE 封装为扩展包 | 先给出集成计划并确认 |
| `zuix-commit` | 审查并提交，或按请求只读分析和生成 message | 直接调用即授权提交；检查通过后不再确认 |

## 核心原则

- 从目标项目事实推导 `packageName`、`zuiName`、`publicPath`、包 scope 和依赖协议，不硬编码某个扩展项目的约定。
- 扩展源码、依赖和质量检查归 `EXT_ROOT`；Git 操作归 `GIT_ROOT`；联合开发、构建和文档归 `ZUI_ROOT`。
- 跨包导入使用真实公开 package name，不通过相对路径或宿主 `exts/` 软链接穿越包边界。
- 宿主 ZUI 默认只用于读取规范和联合验证，不修改其源码、依赖、lockfile 或注册。原宿主生成物与缓存写入仍须明确批准；优先按 [共享工作流](zuix-standards/references/workflow.md) 隔离验证。
- 读取目标适用的 `AGENTS.md`，复用本任务中未变化的规则和上下文，保留已有工作区改动。开发任务不自动提交；用户直接调用 `zuix-commit` 即授权按其范围规则提交，不自动推送或发布。
- 宿主或扩展注册无法唯一解析时，继续可行的扩展侧工作，但不猜测宿主命令、URL 或构建参数。

每个技能目录都包含 `SKILL.md` 和 `agents/openai.yaml`。共享规范与上下文脚本位于 `zuix-standards/`；领域专用审计和封装参考分别位于 `zuix-optimize/` 与 `zuix-wrap-lib/`。
