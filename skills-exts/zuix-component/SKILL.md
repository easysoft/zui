---
name: zuix-component
description: "在独立 ZUI 扩展项目的目标库中设计、实现或优化组件，覆盖纯 CSS、Preact、Preact + ComponentFromReact、原生 Component DOM 增强器、控制器 + Preact 子视图及外部库按需加载。Use when a user asks to add, refactor, extend, or fix a component maintained outside the ZUI 主仓库；先解析扩展项目与宿主的四层上下文，完成需求理解与组件设计后必须给出计划并等待明确确认。"
---

# ZUI 扩展组件开发

## 准备

1. 在采取其他任务动作前，完整读取 `../zuix-standards/SKILL.md`。
2. 从当前技能目录运行只读 resolver：

```sh
node ../zuix-standards/scripts/resolve-zui-ext-context.mjs --cwd <目标路径> --lib <目录名或包名> [--host <宿主根>] --json
```

3. 以 resolver 输出为唯一上下文映射，记录：
   - `targetLibRoot`：目标库真实目录；
   - `extensionRoot`：扩展项目的源码、依赖与质量检查工作目录；
   - `gitRoot`：Git 状态与变更所有权边界；
   - `zuiRoot`：ZUI 主仓库宿主，仅用于联合构建、调试和文档；
   - `extsName`：宿主中的扩展组；
   - `folderName`、`packageName`、`zuiName`、`publicPath`：分别用于文件定位、代码导入、宿主构建选择和公共资源路径；
   - `dependencyPolicy`：扩展兄弟包与宿主依赖的实际声明策略。
4. `zuiRoot` 或 `extsName` 未解析时，禁止猜测路径、组名或退回主仓库内置库命令。可以继续本地分析；若验收必须依赖宿主，先报告缺失上下文。
5. 按 `zuix-standards` 的路由完整读取工作流和组件规范；运行时加载外部 JS/CSS 时再读其外部库规范，涉及 package 元数据、文档、调试页或国际化时再读对应规范。
6. 完整读取 `gitRoot`、`extensionRoot`、`targetLibRoot` 和只读宿主范围内适用的 `AGENTS.md`。检查 `gitRoot` 状态；所有目标源码通过 `targetLibRoot` 的真实路径编辑，不通过 `zuiRoot/exts/<extsName>` 符号链接写入。
7. 盘点目标库并完整阅读两个最相近的成熟实现。优先选择扩展项目中的相似库，证据不足时再读取 `zuiRoot` 中当前版本的内置库；匹配包角色、实现架构和公开消费方式，不只匹配名称。

## 理解与设计

1. 从请求、目标源码和 package 元数据推断用途、用户、约束及兼容要求。分别判断包角色和实现架构；不要因为 `zui.type` 是 `component` 就默认使用 Preact。
2. 只询问无法从两个仓库发现且会改变设计的信息。高影响歧义通常包括：
   - HTML/CSS、Preact、vanilla 构造器、自动创建或 toggle 中哪些是公开消费方式；
   - 受控/非受控状态、事件、命令式方法、异步与错误行为；
   - 视觉变体、响应式、键盘、焦点、ARIA 和 i18n 要求。
3. 定义最小公开 API、状态与数据流、DOM 所有权、生命周期、异步竞态、更新与销毁策略。仅暴露真实需要的入口。
4. 跨库导入使用被依赖库真实的 `packageName`，不要从目录名拼接 `@zui/<name>`，也不要通过相对路径穿越扩展库、宿主库或符号链接边界。
5. 主 ZUI 的 `Component`、`ComponentFromReact`、Preact、Cash、注册机制和 `LibLoader` 契约以当前 `zuiRoot` 源码为准；扩展项目局部惯例以 `extensionRoot` 的成熟实现为准。

## 确认门禁

修改任何文件前，给出一份决策完整的计划，至少包含：

- 四层上下文、目标库的 `folderName` / `packageName` / `zuiName`、包角色、组件架构及两个参考实现；
- 目标、非目标、兼容性与可观察验收场景；
- 公开消费方式、options/props、事件、方法、类型及导出；
- 渲染、状态/数据流、生命周期、异步行为、清理、无障碍和 i18n；
- 外部资源（若有）的 loader 所有权、注册名、资源/check/依赖、加载时机、失败重试和销毁竞态；
- `targetLibRoot` 内的精确文件集、入口、样式及 package 元数据影响；
- 在 `extensionRoot` 执行的依赖、lint、类型或测试，以及在 `zuiRoot` + `extsName` 执行的联合验证；
- 正式文档和调试页是否纳入、剩余假设及明确标记的“已批准范围”。

明确请求用户确认，然后停止。回答问题、局部修订计划或继续讨论不算确认。

只有 `../zuix-lib/SKILL.md` 或 `../zuix-optimize/SKILL.md` 已展示且记录的已批准范围完整覆盖当前目标、公开 API、文件边界和验收场景时，才能复用其一次确认。任何目标、公开 API、宿主影响或文件范围变化都返回协调技能重新规划。始终服从当前协作模式。

## 实施

1. 获得确认且当前模式允许编辑后，重新运行 resolver 并检查 `gitRoot` 状态；上下文或注册发生变化时先停止核对。
2. 仅在 `targetLibRoot` 和批准的扩展项目文件内实施。依赖安装、lockfile、lint、类型检查和扩展项目测试都从 `extensionRoot` 执行；不修改 `zuiRoot` 的源码、依赖、lockfile、生成目录或注册配置。
3. 使用 Preact 而不是 React。跨库导入使用真实 `packageName`；显式维护局部入口、库入口及必要副作用导入。`zuiName` 只用于宿主发现/构建选择，不能代替模块包名。
4. 运行时外部依赖统一通过目标库内单例 `LibLoader<T>` 按需加载，落实加载失败、显式重试、异步销毁竞态及第三方实例清理；不要在组件中维护第二份模块缓存。
5. 按实际需要实现样式根类、CSS 变量、语义标签、键盘、焦点和 ARIA。Tailwind、Preact 和 CSS 约定以当前宿主规范与扩展项目配置共同验证。
6. 若批准范围包含其他领域，完整读取并遵循相应兄弟技能：
   - 国际化：`../zuix-i18n/SKILL.md`
   - 正式文档：`../zuix-doc/SKILL.md`
   - 调试页：`../zuix-dev/SKILL.md`

   这些子流程完全位于共享批准范围时不重复确认。

## 验证与交付

1. 在 `extensionRoot` 运行扩展项目实际提供的针对性 lint、类型、测试和依赖检查；先读取 package scripts，不把主仓库命令当作扩展项目命令。
2. 需要联合构建时，仅在 resolver 已确认 `zuiRoot` 与 `extsName` 后，从 `zuiRoot` 使用扩展发现参数和准确 `zuiName`，例如：

```sh
pnpm build -- --exts=buildIn,<extsName> --lib='<zuiName>' --noMinify
```

3. 需要交互验证时，从 `zuiRoot` 启动扩展开发入口，例如 `pnpm dev:exts -- --lib=buildIn,<extsName>`，再通过宿主实际发现结果进入目标页；不要从 `folderName` 猜测路由。完成后结束持续进程。
4. 分别记录扩展项目检查、宿主联合验证和未执行项；宿主基线失败不能宣称目标库通过。
5. 汇报实现文件、公开 API、四层上下文、验证结果和未验证风险，不自动提交、推送或发布。

多个技能直接组合时，共用一份计划和一次确认；不得为同一批准范围重复设置门禁。
