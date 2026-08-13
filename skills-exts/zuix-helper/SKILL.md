---
name: zuix-helper
description: "在独立 ZUI 扩展项目的目标库中设计、实现或优化辅助 API，包括纯函数、类型、状态类、store/单例、浏览器 DOM 模块和库内私有 helper。Use when a user asks for utils, data helpers, stores, browser helpers, shared classes, or helper refactors maintained outside the ZUI 主仓库；先解析扩展项目与宿主的四层上下文，完成需求与 API 设计后必须给出计划并等待明确确认。"
---

# ZUI 扩展 Helper 开发

## 准备与分析

1. 在采取其他任务动作前，完整读取 `../zuix-standards/SKILL.md`。
2. 从当前技能目录运行只读 resolver：

```sh
node ../zuix-standards/scripts/resolve-zui-ext-context.mjs --cwd <目标路径> --lib <目录名或包名> [--host <宿主根>] --json
```

3. 以 resolver 输出为准记录四层上下文：
   - `targetLibRoot`：目标库真实目录；
   - `extensionRoot`：源码、依赖、lint、类型和测试的执行根；
   - `gitRoot`：Git 状态与变更所有权根；
   - `zuiRoot`：只用于联合构建/调试/文档的 ZUI 宿主；
   - `extsName`：宿主扩展组；
   - `folderName`、`packageName`、`zuiName`、`publicPath`：不得互相代替；
   - `dependencyPolicy`：扩展兄弟包与宿主依赖的实际声明策略。
4. `zuiRoot` 或 `extsName` 未解析时不要猜测或使用内置库命令代替；本地分析可以继续，需要宿主验收时明确报告缺口。
5. 按 `zuix-standards` 的路由完整读取工作流和 helper 规范；涉及 package 角色、文档或调试页时再读对应规范。
6. 完整读取 `gitRoot`、`extensionRoot`、`targetLibRoot` 及只读宿主范围适用的 `AGENTS.md`。检查 `gitRoot` 状态，始终通过 `targetLibRoot` 真实路径编辑，不通过宿主 `exts/` 符号链接写入。
7. 盘点目标库并完整阅读两个最接近的成熟实现。优先扩展项目内实现，不足时再从当前 `zuiRoot` 选择内置参考；核对入口、真实 `packageName`、依赖、JSDoc、生命周期和错误约定。
8. 将需求分类为库内私有 helper、纯函数/常量/类型、状态类、store/单例或浏览器 DOM 模块。不要因“可能复用”擅自创建共享包或扩大公共 API。

## API 设计

1. 定义输入、输出、类型、空值和非法输入行为，以及同步/异步错误语义。
2. 对状态型 helper 定义所有权、更新/订阅顺序、重入、并发、失败恢复、reset 与 destroy。
3. 对持久化定义后端、序列化格式、版本兼容、损坏数据与不可用环境的处理。
4. 对浏览器模块定义 `window` / `document` / storage 的环境防护，以及 listener、observer、timer、缓存和 DOM 引用的清理。
5. 跨库调用使用被依赖库真实的 `packageName`；不要从 `folderName` 拼出 `@zui/<name>`，不要通过相对路径穿越扩展项目、主仓库或符号链接。
6. `zuiName` 只用于宿主发现和构建选择。公共模块导入、dependency 名称和类型解析均以 `packageName` 为准。

## 确认门禁

修改任何文件前给出决策完整的计划，至少包含：

- 四层上下文、目标库的 `folderName` / `packageName` / `zuiName`、helper 分类及两个参考实现；
- 目标、非目标、兼容性和可观察验收场景；
- 公开 API、类型、错误语义、导出路径与必要 JSDoc；
- 数据流、状态所有权、持久化/序列化与副作用；
- 浏览器监听、timer、observer、SSR/global 防护与清理策略；
- `targetLibRoot` 内精确文件集、入口、真实依赖和 `zui.contributes` 影响；
- 在 `extensionRoot` 执行的 dependency/lint/type/test，以及在 `zuiRoot` + `extsName` 执行的联合验证；
- 文档、调试页、剩余假设及明确标记的“已批准范围”。

请求用户明确确认，然后停止。回答问题或讨论计划不算确认。

只有 `../zuix-lib/SKILL.md` 或 `../zuix-optimize/SKILL.md` 展示的已批准范围完整覆盖当前目标、API、文件边界和验收场景时，才能复用该确认。公开 API、跨库影响或范围变化时返回协调技能重新规划。始终服从当前协作模式。

## 实施

1. 确认且当前模式允许编辑后，重新运行 resolver 并检查 `gitRoot` 状态；上下文变化时停止核对。
2. 仅修改 `targetLibRoot` 及已批准的扩展项目文件。安装依赖、更新扩展 lockfile、lint、类型检查和测试都从 `extensionRoot` 执行；不修改 `zuiRoot` 的源码、依赖、lockfile、注册或生成目录。
3. 默认保持纯函数无副作用且确定；状态型工具明确实例/单例所有权、重入、并发、失败和销毁行为。
4. 为公共 API 添加有价值的 JSDoc，并从局部入口和库入口显式导出；不让消费者依赖未承诺的深层路径。
5. 依赖分类服从扩展项目当前 package 策略。不要把主仓库的 `workspace:*`、namespace 或“不声明 @zui 依赖”等局部惯例机械套到扩展项目。
6. 若批准范围包含正式文档或调试页，完整读取并遵循 `../zuix-doc/SKILL.md` 或 `../zuix-dev/SKILL.md`；完全位于共享批准范围时不重复确认。

## 验证与交付

1. 从 `extensionRoot` 读取实际 package scripts，运行针对性 lint、类型、测试、公共导出和序列化/清理检查。覆盖空值、非法输入、重复调用、并发、失败与不可用浏览器 API 等适用场景。
2. 需要宿主联合构建时，只有 resolver 已确认 `zuiRoot` 与 `extsName` 才从 `zuiRoot` 运行，并用准确 `zuiName`：

```sh
pnpm build -- --exts=buildIn,<extsName> --lib='<zuiName>' --noMinify
```

3. 不以宿主构建替代扩展项目自己的质量检查，也不以宿主基线失败掩盖目标错误。
4. 汇报 API、修改文件、四层上下文、扩展检查、宿主联合验证及风险，不自动提交、推送或发布。

与其他技能组合且包含 component/helper 时，共用一份计划和一次确认。
