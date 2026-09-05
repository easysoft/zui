# ZUI 扩展库 package 规范

## 先发现命名与策略

不要把 `LIB_FOLDER`、`PACKAGE_NAME`、`ZUI_NAME` 和 `EXTS_NAME` 当成同一个名字。

- `PACKAGE_NAME` 直接读取目标 `package.json#name`。
- `ZUI_NAME` 优先读取 `package.json#zui.name`；未声明时，以当前宿主的 `createLibFromPackageJson` 逻辑为准。当前常见规则仅对 `@zui/*` 去掉 scope，其他 scoped 包通常保留完整包名。
- 新包的 scope、版本、`files`、exports 和依赖协议从 `EXT_ROOT` 的成熟同类包、根配置与发布策略推导；不要硬编码 `@zui/`、`0.0.1` 或 `workspace:*`。
- `zui.replace` 是宿主解析别名契约；只有明确替换另一公开包时声明，并检查冲突。
- `PUBLIC_PATH` 优先使用显式 `zui.publicPath`；未声明时检查宿主构建对 `zui.name` 的默认路径处理，尤其注意 scoped 名称。

## 包角色与贡献

从 `ZUI_ROOT` 当前的库类型和 contributes 类型定义读取有效值。常见角色包括 `config`、`css-base`、`control`、`component`、`js-ui`、`css-utilities`、`js-helpers`、`js-lib`；不要只按名称推断。

`zui.contributes` 描述构建后真实公开产出，而不是源码目录。常见值包括：

- `css`: `class`、`var`
- `js`: `class`、`var`、`method`、`module`、`component`
- `config`: `tailwind`

以当前宿主类型定义为准，只声明入口真实提供的能力。包角色与实现架构是两个独立判断。

## 新包最小契约

按扩展项目现状创建最小骨架：

- 与项目命名规则一致的目录和 `PACKAGE_NAME`；
- 项目约定的初始版本与描述；
- 真实存在的主入口，通常是 `src/main.ts`；
- 必要且真实的 `files`、`exports`、`browser` 或 `module`；
- 准确的 `zui.type`、`displayName`、`contributes`，以及确有需要的 `name`、`replace`、`publicPath`；
- 只包含真实导入和发布类型解析需要的依赖；
- 含 TS/TSX 时提供符合扩展项目的 `tsconfig.json`，TSX 使用 Preact。

不要创建空目录或不存在的子路径导出。`wip`、`notReady`、`separately`、`prebuild`、`defaultExport` 等字段仅在当前宿主支持且需求明确时添加。

## 依赖分类

本次涉及依赖策略时，读取 `EXT_ROOT` 相关配置，必要时参考成熟兄弟包，核实：

- 扩展兄弟包使用 `workspace:*`、`link:../peer` 还是版本范围；
- 宿主 `@zui/*` 依赖是显式声明、peer dependency，还是由路径映射和宿主管线提供；
- 第三方运行时、仅类型、调试/文档和构建依赖分别放在哪里；
- 公共 `.d.ts` 引用的包是否能被消费者解析。

沿用可验证的项目策略，但不要把历史例外提升为规则。运行时 import 通常需要 `dependencies`；纯开发依赖通常属于 `devDependencies`；若扩展项目有更严格的 peer/publish 策略，以其事实为准。

跨包导入始终使用真实公开包名，不写穿越 `lib/`、`exts/` 或仓库边界的相对路径。

## 验证

按 [共享工作流](workflow.md) 选择本次所需检查；新包或改变相应契约时核对：

- 解析 `package.json` 并确认所有入口、exports、files 和 public 目标存在。
- 对照源码 import 与发布类型检查依赖分类。
- 对照宿主类型定义检查 `zui.type`、`contributes`、`replace` 和 `publicPath`。
- 在 `EXT_ROOT` 运行受影响的现有检查；改变宿主发现、入口、依赖、资源或分发时，以准确 `EXTS_NAME` 与 `ZUI_NAME` 补充所需联合验证。
- 验证不得修改宿主 package、锁文件或扩展注册状态。
