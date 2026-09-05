---
name: zuix-doc
description: "为独立 ZUI 扩展项目中的目标库撰写、补全、校对或优化官网正式文档，并通过已注册的 ZUI 宿主扩展组同步和验证。Use when a user asks for extension component/helper API docs, examples, usage guides, documentation fixes, or documentation review；意图明确时直接在扩展库文档源边界内实施，不手工编辑宿主生成文档。"
---

# ZUI 扩展库正式文档

## 准备

1. 在采取其他任务动作前，完整读取 `../zuix-standards/SKILL.md`。
2. 从当前技能目录运行只读 resolver：

```sh
node ../zuix-standards/scripts/resolve-zui-ext-context.mjs --cwd <目标路径> --lib <目录名或包名> [--host <宿主根>] --json
```

3. 记录 resolver 输出的 `targetLibRoot`、`extensionRoot`、`gitRoot`、`zuiRoot`、`extsName`、`folderName`、`packageName`、`zuiName`、`publicPath` 和 `dependencyPolicy`。模块导入使用 `packageName`，宿主库选择与文档组件标识核对使用 `zuiName`，资源路径使用实际 `publicPath`；不要从目录名推导它们。
4. 按 `zuix-standards` 的路由完整读取工作流与正式文档规范。完整读取各层适用的 `AGENTS.md`，检查 `gitRoot` 状态；始终通过 `targetLibRoot` 的真实路径维护文档源，不通过宿主 `exts/` 符号链接写入。
5. `zuiRoot` 或 `extsName` 未解析时不猜测宿主、组名或文档命令。可以进行源码事实核对和源 Markdown 编辑；若请求要求同步、构建或浏览器验收，明确报告宿主上下文缺口。
6. 阅读目标 `package.json`、入口、公开类型、component/vanilla/helper、样式、i18n、`README.md`、`dev.md`、`dev.ts`、已有正式文档及两个相似库文档。优先扩展项目内参考，不足时再读当前 `zuiRoot` 的成熟内置文档。

## 写作与实施

1. 按共享工作流先检查请求、已确认决定和目标现状，合理沿用既有约定；仅有无法可靠消除且会实质改变文档目标、公开契约或交付边界的歧义时询问，否则直接在本领域内实施，不增加确认门禁。
2. 以目标源码和实际导出为事实来源，不根据 `folderName`、`packageName` 或 `zuiName` 猜测 API。发现源码与预期冲突时单独报告，不为让文档成立越界修改运行时代码。
3. 优先沿用已有分类；否则根据当前宿主文档规范和目标角色选择 `targetLibRoot/docs/lib/<category>/index.md`。`index.md` 是默认主页面，仅在已有结构或用户明确要求时维护额外页面。
4. 第一屏提供用途说明和可运行基础示例，随后按真实 API 补充常用场景、options/props、事件、方法、类型、CSS 类/变量、引入方式、无障碍与限制；不保留空章节。
5. 官网示例严格使用当前 `zuiRoot` 提供的 `<Example>`、tabs、`<Props>`、`<ZUI>` 等语法，不混用调试页 `html:example` fence。
6. 模块化示例使用真实 `packageName`。全局成员、声明式创建和 `<ZUI use>` 必须通过宿主联合构建确认，不能仅凭源码导出或目录名推断；相关标识通常关联 `zuiName`，仍以当前宿主发现结果为准。
7. 文档资源保存在目标扩展库约定位置，引用路径根据当前宿主同步规则和实际 `publicPath` 验证。不要硬编码某个扩展品牌、组名或本机绝对路径。
8. 只修改 `targetLibRoot` 内正式文档及明确需要的文档资源。源码 lint、依赖与静态检查从 `extensionRoot` 执行；不得手工编辑宿主生成文档代替修改文档源，也不得修改宿主源码、package、lockfile 和注册配置；文档同步的生成物及缓存写入遵循共享工作流的验证隔离与批准规则。

## 验证

宿主命令的执行位置、生成物与缓存写入统一遵循 [共享工作流](../zuix-standards/references/workflow.md) 的验证隔离与批准规则；下文 `zuiRoot` 表示宿主契约来源，不表示可直接写入原工作区。

1. 在 `extensionRoot` 运行扩展项目实际提供的 Markdown、链接、lint 或源文件检查；先读取 package scripts，不套用宿主命令。
2. 需要同步或构建时，只有 resolver 已确认 `zuiRoot`、`extsName` 及对应注册后，才从 `zuiRoot` 使用扩展文档入口。优先使用宿主实际提供的命令，例如：

```sh
pnpm docs:build:exts
```

   若当前宿主支持按扩展组筛选，使用准确 `extsName`；不发明不存在的参数。确认目标 `zuiName` 实际进入文档构建。
3. 需要浏览器验证时从 `zuiRoot` 启动 `pnpm docs:dev:exts` 或当前等价脚本，检查示例渲染、交互、资源、链接和控制台；服务的启动、复用、重启和清理遵循共享工作流的开发服务管理规则。
4. 区分源文件检查、宿主同步/构建、浏览器验证和宿主基线失败。不得把生成后的 `docs/_` 变化作为扩展库交付文件。

## 组合边界与交付

- 独立调用且需求明确时直接实施。
- 作为其他 ZUI 技能的子流程时，只处理共享范围内的文档工作；按共享工作流复用已有批准，包括 wrap-lib，不重复确认。独立调用仍遵循本技能的直接实施或只读模式。
- 用户只要求审阅或建议时保持只读。
- 交付时汇报目标源页面、覆盖内容、四层上下文、扩展检查、宿主验证及源码/文档差异，不自动提交、推送或发布。
