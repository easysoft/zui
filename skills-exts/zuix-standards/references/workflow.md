# ZUI 扩展库技能协作工作流

## 四层上下文

开始任何分析或实施前，分别解析下列上下文；它们可以是四个不同目录：

| 名称 | 含义 | 用途 |
| --- | --- | --- |
| `TARGET_LIB_ROOT` | 目标 `package.json` 所在库目录 | 读取和修改目标库 |
| `EXT_ROOT` | 包含扩展库集合和自身配置的项目根 | 依赖、lint、类型检查和扩展项目规则 |
| `GIT_ROOT` | 实际拥有目标文件的 Git 根 | 状态、diff、提交范围和历史 |
| `ZUI_ROOT` + `EXTS_NAME` | 提供 ZUI 运行时/构建管线的宿主及目标注册组 | 联合 dev、build 和 docs |

同时记录：

- `LIB_FOLDER`：`TARGET_LIB_ROOT` 的目录名；
- `PACKAGE_NAME`：目标 `package.json#name`；
- `ZUI_NAME`：显式 `package.json#zui.name`，否则仅对 `@zui/*` 去掉 scope，其余保持完整 `PACKAGE_NAME`；
- `PUBLIC_PATH`：显式 `zui.publicPath`，否则由当前宿主构建实现推导；
- `DEPENDENCY_POLICY`：扩展项目当前使用的 `workspace:*`、`link:`、版本范围、路径映射或其他策略。

运行上下文解析器：

```sh
node <本技能目录>/../zuix-standards/scripts/resolve-zui-ext-context.mjs \
  --cwd <目标路径> [--lib <目录名或包名>] [--host <宿主根>] --json
```

`--cwd` 可以是扩展根、`lib/`、目标库或通过宿主 `exts/` 进入的符号链接路径。解析器先使用真实路径，避免把宿主误判成扩展根。`--lib` 可使用目录名、`PACKAGE_NAME` 或 `ZUI_NAME`。未找到唯一宿主或注册组时，`zuiRoot` / `extsName` 返回 `null`；这不妨碍扩展侧只读分析，但禁止猜测并运行宿主命令。

## 规则优先级

遇到冲突时按以下顺序执行：

1. 用户当前明确要求；
2. 目标路径、`EXT_ROOT`、`GIT_ROOT` 与 `ZUI_ROOT` 各自适用的 `AGENTS.md`；
3. 扩展项目当前 package、配置、源码和脚本；
4. 当前宿主 ZUI 的构建脚本、类型定义和运行时；
5. 扩展项目中的成熟相似库，再是宿主相似库；
6. 本技能参考规范。

宿主规定兼容契约，扩展项目规定目标源码的命名、依赖和验证习惯。发现规范与当前基础设施不一致时，以可验证事实为准并报告差异。

## 探索与所有权

- 先读取仓库、目标库与宿主，再询问无法发现的事实。
- 设计或审查源码时至少检查两个相似实现。优先选择扩展项目实现；不足时使用宿主实现补充。
- 检查 `GIT_ROOT` 状态，并用 `git -C <GIT_ROOT>` 限定真实路径。不要从宿主符号链接误判目标文件属于宿主仓库。
- 扩展兄弟包导入使用其真实公开 `PACKAGE_NAME`；导入宿主库使用宿主公开包名。不要通过相对路径穿越包边界或通过 `exts/` 路径导入。
- 默认只修改 `EXT_ROOT` 内用户授权的目标。宿主源码、注册、依赖、锁文件、缓存与生成目录不在隐含授权内。

## 确认门禁

| 技能 | 独立调用 |
| --- | --- |
| `zuix-standards` | 始终只读 |
| `zuix-component` | 先给出设计计划，明确确认后实施 |
| `zuix-helper` | 先给出 API 计划，明确确认后实施 |
| `zuix-doc` | 需求明确后在文档源边界内直接实施 |
| `zuix-dev` | 需求明确后在调试页边界内直接实施 |
| `zuix-i18n` | 需求明确后在 i18n 边界内直接实施 |
| `zuix-lib` | 汇总一份集成计划，只确认一次 |
| `zuix-wrap-lib` | 汇总资源、包与 facade 计划，只确认一次 |
| `zuix-optimize` | 审计只读；优化先统一规划，大范围分批确认 |

组合包含 component/helper 时共用一份计划和一次确认。协调技能的已批准范围必须精确覆盖目标、公开 API、文件边界和验收场景；发生变化时重新规划。

## 实施与验证

分开执行扩展项目检查和宿主联合检查：

```sh
# EXT_ROOT 或 GIT_ROOT：以项目实际脚本为准
git -C <GIT_ROOT> diff --check -- <EXT_ROOT 相对路径>
pnpm exec eslint lib/<LIB_FOLDER>
pnpm exec tsc --noEmit -p lib/<LIB_FOLDER>/tsconfig.json

# ZUI_ROOT：仅在 ZUI_ROOT + EXTS_NAME 已唯一解析时
pnpm build -- --exts=buildIn,<EXTS_NAME> --lib='<ZUI_NAME>' --noMinify
pnpm dev:exts -- --lib=buildIn,<EXTS_NAME>
pnpm docs:build:exts
```

这些是当前常见形式，不得替代各仓库 `AGENTS.md` 和 `package.json#scripts`。若目标为 WIP/notReady，按宿主实际参数加入对应 opt-in。持续进程完成后结束，不遗留后台服务。

依赖安装与锁文件更新在 `EXT_ROOT` 按其包管理策略完成；宿主只提供联合验证，不为消除扩展解析错误而修改宿主依赖或锁文件。交付时分别报告扩展检查、宿主检查、基线失败和未验证项。
