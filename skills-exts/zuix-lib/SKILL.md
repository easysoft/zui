---
name: zuix-lib
description: "规划并实现独立 ZUI 扩展项目中的完整库，包括新建扩展库或为已有库增加跨领域功能，并编排组件、helper、国际化、正式文档和调试页。Use when a request spans package metadata and multiple ZUI extension development domains, or asks to create/extend a whole extension library；先解析扩展项目与宿主的四层上下文，汇总一份集成计划并只等待一次明确确认。"
---

# ZUI 扩展库开发

## 上下文与分析

1. 在采取其他任务动作前，完整读取 `../zuix-standards/SKILL.md`。
2. 从当前技能目录运行只读 resolver。已有库传目录名或包名；新库从预期扩展项目路径运行并传请求中的候选名：

```sh
node ../zuix-standards/scripts/resolve-zui-ext-context.mjs --cwd <目标或扩展项目路径> --lib <目录名或包名> [--host <宿主根>] --json
```

3. 以 resolver 输出建立四层上下文：
   - `targetLibRoot`：已有目标库的真实目录；新库时可为空，并另用 resolver 给出的 `plannedTargetLibRoot` 记录安全候选位置；
   - `extensionRoot`：源码、package、依赖、lockfile、lint、类型与测试的工作根；
   - `gitRoot`：Git 状态和变更所有权根；
   - `zuiRoot`：只用于扩展联合构建、调试和文档的 ZUI 主仓库；
   - `extsName`：宿主中指向当前扩展项目的组名；
   - `folderName`、`packageName`、`zuiName`、`publicPath`：目录、模块、宿主构建选择和公共资源标识；
   - `dependencyPolicy`：扩展兄弟包与宿主依赖的实际声明策略。
4. 新库尚无 package 元数据时，把缺失字段标为待设计，不从 `folderName` 自动生成 `@zui/*`、固定版本或 `zuiName`。从 `extensionRoot` 的 root package、workspace 配置、发布配置和成熟兄弟库发现命名、版本及 dependency policy。
5. `zuiRoot` 或 `extsName` 未解析时，不猜测宿主或扩展组，也不使用内置库命令代替。可以继续扩展项目设计；若联合验收是必要条件，在计划中明确缺口。
6. 按 `zuix-standards` 的路由完整读取工作流与库规范。完整读取 `gitRoot`、`extensionRoot`、目标路径及只读宿主范围内适用的 `AGENTS.md`；检查 `gitRoot` 状态，所有源文件通过扩展项目真实路径编辑，不通过 `zuiRoot/exts/<extsName>` 符号链接写入。
7. 判断新库或已有库，识别包角色、真实贡献、公开消费方式与两个成熟参考。优先扩展项目兄弟库，不足时再读取当前 `zuiRoot` 内置库；已有库保留合理局部目录、API 和发布策略。
8. 根据范围选择兄弟技能，并在规划前完整读取其 `SKILL.md` 及 `zuix-standards` 路由的对应规范：
   - UI 组件：`../zuix-component/SKILL.md`
   - helper/store/utils：`../zuix-helper/SKILL.md`
   - 国际化：`../zuix-i18n/SKILL.md`
   - 正式文档：`../zuix-doc/SKILL.md`
   - 调试页：`../zuix-dev/SKILL.md`

## 一次集成计划

尚无适用批准时，先完成所有选中领域的发现与设计，但不修改文件。输出一份拟实施集成计划，至少包含：

- 四层上下文、`targetLibRoot` / `plannedTargetLibRoot`、宿主注册状态、新库/已有库判断、包角色、两个参考库及理由；
- `folderName`、真实 `packageName`、版本策略、入口、依赖协议、`zui.type`、displayName、准确 `contributes`、`zuiName`、`publicPath` 和可选导出；
- 组件/helper 的分类、公开 API、状态/数据流、错误、生命周期、清理及精确文件集；
- i18n 的语言、namespace/静态映射和加载路径；
- 正式文档源类别、调试页场景和资源；
- 所有模块导入使用的真实 package 名，以及扩展兄弟依赖与主 ZUI 依赖各自的版本/协议；
- 在 `extensionRoot` 执行的依赖、lint、类型、测试，以及在 `zuiRoot` + `extsName` 使用准确 `zuiName` 执行的联合构建、调试和文档验证；
- 依赖顺序、跨库影响、非目标、验收场景、剩余假设；
- 明确标记的“拟实施范围”，精确列出目标库、公开 API、允许修改的扩展项目领域和文件边界，并声明宿主只读。

尚无适用批准时，请求用户对整份计划明确确认后再实施；批准状态及包含修订的授权回复遵循共享工作流。

按 [zuix 共享工作流](../zuix-standards/references/workflow.md) 复用本任务已有且仍完整适用的明确批准，包括 wrap-lib 的协调计划，不重复确认。超出批准范围时只暂停受影响部分及其依赖写操作，提交增量计划并确认；继续范围内不受影响的工作。始终服从当前协作模式。

## 编排实施

1. 确认且当前模式允许编辑后，重新运行 resolver 并检查 `gitRoot` 状态。解析结果、宿主注册或目标位置发生变化时停止核对。
2. 仅修改已批准的 `targetLibRoot`；新库则只在已批准的 `plannedTargetLibRoot` 创建文件。package、依赖安装、lockfile、源码 lint、类型检查和测试全部从 `extensionRoot` 处理；不得修改宿主源码、package、lockfile 或注册；宿主生成物和缓存写入遵循共享工作流的验证隔离与批准规则。
3. 新库按扩展项目当前契约创建最小准确骨架。package scope、版本、dependency protocol、TS/TSX 配置和发布字段从 `extensionRoot` 发现；禁止硬编码 `@zui/<name>`、`0.0.1` 或主仓库 workspace 习惯。
4. package 创建后重新运行 resolver，以实际输出确认 `targetLibRoot`、`packageName`、`zuiName` 和 `publicPath`。任何不一致先修正计划内元数据，不让目录名代替公共标识。
5. 按依赖顺序遵循选中技能：基础 helper → 组件 → i18n → 正式文档 → 调试页。向每个流程传递完整四层上下文和已批准范围；完全位于范围内时跳过子技能自己的确认。
6. 跨库导入使用被依赖库真实 `packageName`，不通过相对路径穿越扩展库、主仓库或符号链接。`zuiName` 仅用于宿主发现与构建 DSL。
7. 目标、公开 API、包角色、package 标识、宿主影响或文件边界需要超出批准范围时，按共享工作流暂停受影响部分，更新增量计划并再次确认；继续范围内不受影响的工作，不让子技能自行扩大范围。
8. 检查所有入口真实存在、运行时与开发依赖分类正确、公开类型可由消费者解析、文档和调试示例与 API 一致。

## 验证与交付

宿主命令的执行位置、生成物与缓存写入统一遵循 [共享工作流](../zuix-standards/references/workflow.md) 的验证隔离与批准规则；下文 `zuiRoot` 表示宿主契约来源，不表示可直接写入原工作区。

1. 在 `extensionRoot` 读取实际 package scripts，运行合并后的最小充分依赖检查、lint、类型、测试和扩展项目构建。不得以宿主命令替代扩展项目自己的基线。
2. resolver 已确认 `zuiRoot` 与 `extsName` 时，再从 `zuiRoot` 执行扩展联合构建，并使用准确 `zuiName`：

```sh
pnpm build -- --exts=buildIn,<extsName> --lib='<zuiName>' --noMinify
```

3. 按批准范围从 `zuiRoot` 使用 `pnpm dev:exts -- --lib=buildIn,<extsName>`、`pnpm docs:build:exts` 或宿主当前等价脚本进行调试和文档验证。先确认命令实际存在；不发明筛选参数。服务的启动、复用、重启和清理遵循共享工作流的开发服务管理规则。
4. 区分扩展项目检查、宿主联合构建、文档/浏览器验证、基线失败与未验证项。不得把宿主生成物带入扩展项目交付。
5. 汇报已完成范围、package 标识、关键 API、四层上下文、验证结果和剩余风险，不自动提交、推送或发布。

多个轻量技能直接组合时可以在其各自边界内直接实施；一旦使用本技能协调，或组合包含 component/helper，就统一使用本技能的一份计划和一次确认。
