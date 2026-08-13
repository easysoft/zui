---
name: zuix-wrap-lib
description: "将可直接由浏览器脚本加载并暴露稳定全局变量的第三方 UMD/IIFE 库封装为独立 ZUI 扩展项目中的 `lib/*` 包，使用 `LibLoader` 按需加载，并按真实需求提供 typed helper、vanilla Component、Preact 入口、样式、调试页和文档。Use when a user asks to wrap, vendor, integrate, or refactor a ready-to-use UMD library in a ZUI extension repository; resolve extension/Git/host context first and present one complete integration plan for explicit confirmation before editing."
---

# ZUI 扩展项目 UMD 库封装

## 目标与硬边界

把第三方 UMD/IIFE 做成薄而完整的 ZUI 扩展适配层：第三方实现保持外置，由 `LibLoader<T>` 首次使用时加载；目标扩展包负责类型、公开 API、生命周期、样式接线、调试和文档。

- 只接受已经能由浏览器普通 `<script>` 直接加载并暴露稳定全局变量的 UMD/IIFE 产物。
- 不把 ESM 转成 UMD，不调用转换技能，不用 bundler 重建、改写或内联第三方实现，也不把 ESM module loader 作为本技能兜底。
- 产物形态、来源或全局名不满足前提时停止，请求用户提供 ready-to-use UMD/IIFE 或缩小任务；不自行扩大范围。
- 不默认生成全部消费形态，只实现真实需求支持的 helper、vanilla、Preact、声明式创建或公开加载 API。
- 不自动提交、推送或发布。

## 准备与发现

1. 在采取其他任务动作前，完整读取 `../zuix-standards/SKILL.md`，再完整读取：
   - `../zuix-standards/references/workflow.md`
   - `../zuix-standards/references/library.md`
   - `../zuix-standards/references/extension-library.md`
   - `../zuix-standards/references/external-library.md`
   - UI 组件再读 component 规范；无状态函数或服务 facade 再读 helper 规范；纳入调试或正式文档时再读相应规范。
2. 完整读取 [references/wrapper-shapes.md](references/wrapper-shapes.md)。按范围完整读取 `../zuix-lib/SKILL.md`、`../zuix-component/SKILL.md`、`../zuix-helper/SKILL.md`、`../zuix-dev/SKILL.md`、`../zuix-doc/SKILL.md` 或 `../zuix-i18n/SKILL.md`；由本技能统一确认门禁。
3. 运行 resolver：

```sh
node ../zuix-standards/scripts/resolve-zui-ext-context.mjs --cwd <目标路径> --lib <目录名或包名> [--host <宿主根>] --json
```

4. 记录 `targetLibRoot`（新库时先用 resolver 的 `plannedTargetLibRoot`）、`extensionRoot`、`gitRoot`、`zuiRoot + extsName`，以及 `folderName`、`packageName`、`zuiName`、`publicPath`。新库还不存在时先解析其计划父项目，以兄弟包和项目配置推导命名；package 元数据保持未解析，不能从扩展组名或目录名硬编码 package scope。
5. 完整读取各层适用 `AGENTS.md`，检查 `gitRoot` 状态并保留已有修改。所有源码通过 `targetLibRoot`/`extensionRoot` 真实路径编辑，不通过宿主 `exts/` 符号链接写入。
6. 检查 UMD 产物和许可证，只提取资源位置、版本、全局名、构造器/函数、初始化参数、返回值、事件、更新/销毁 API、配套 CSS/资源。用文件内容和实际加载行为确认不是伪装成 `.js` 的 ESM。
7. 从 `zuiRoot` 读取当前 `LibLoader`/`getLib` 实现和外部库规范。在 `extensionRoot` 选择两个包角色、架构或消费方式相近的成熟包；不足时再选宿主实现。完整检查入口、类型、样式、调试页和文档。

只有缺口会改变目标库、公开 API、生命周期、UMD 来源/全局名或文件范围时才提问。`zuiRoot`/`extsName` 未解析不妨碍扩展侧设计，但不得猜测宿主路径、资源 URL 或联合命令。

## 设计封装

分别判断包角色和实现架构：

- 无状态函数/模块：异步 typed facade，通常不创建 `Component`。
- 增强已有 DOM 的有状态实例：原生 `Component` 持有第三方实例，负责更新和销毁。
- 需要 ZUI 根据 props 生成结构且真实需要 Preact/vanilla：按组件规范选择 Preact 与 `ComponentFromReact`，不为理论入口增加 TSX。
- 全局服务或单例：按 helper 规范定义所有权、重入、错误和清理，不伪装成 UI 组件。

同时定义：

- 唯一 loader 注册名、生产资源路径、`check` 全局名、前置 JS/CSS 和宿主 dev 覆盖路径；
- loader 私有性和是否确需公开加载 API；
- loading、失败传播/降级、缓存错误、显式重试；
- 类型来源与发布后解析，禁止第三方运行时 import 混入 bundle；
- 异步初始化期间 destroy、重复初始化、多实例、更新与第三方清理；
- `packageName`、入口、依赖策略、`zui.type`/`contributes`、`zuiName`、`publicPath`、public 资源、样式、调试与文档边界。

## 一次集成计划

修改任何文件前，输出可直接实施的计划并请求用户明确确认，然后停止。计划至少包含：

- 四层上下文、新建/已有库、真实命名字段、包角色、架构、两个参考实现；
- UMD 来源、版本、许可证、目标 `public/` 路径、全局名、loader 注册和资源依赖；
- 扩展项目现行 package scope、初始版本、依赖协议、入口和 `zui` 元数据；
- 类型策略、公开 API、消费方式、数据流、error/retry、update/destroy；
- `extensionRoot` 内精确文件集，以及 README/dev、正式文档、样式、i18n 的纳入/排除；
- 扩展侧检查与 `zuiRoot + extsName` 宿主联合验收、剩余假设；
- 明确标记的“已批准范围”。

本技能只设置这一次确认。完全落入批准范围的 component/helper/dev/doc 子流程不重复确认；目标、公开 API、包角色、UMD 资源、宿主影响或文件边界变化时重新规划。

## 实施

1. 确认后重新运行 resolver 并检查 `gitRoot` 状态，仅修改批准范围。新库最小 package 建立后再次运行 resolver，把 `plannedTargetLibRoot` 升级为真实 `targetLibRoot` 并核对所有命名字段；上下文或注册变化时先停止核对。
2. 新包的 scope、版本、description、入口、exports、依赖协议和 `zui` 元数据从 `extensionRoot` 当前配置及成熟兄弟包推导；不用 `@zui/*`、`workspace:*`、`link:` 或固定版本模板代替事实。`publicPath` 只在宿主实际要求或非默认路径时声明。
3. 将用户提供的 UMD/CSS/license 原样放入批准的 `targetLibRoot/public/`，或使用已批准且版本固定的绝对 URL；不编辑、压缩、转译或生成第三方产物。
4. 在目标包私有 helper 中创建唯一 `LibLoader<T>`，显式配置 `src` 和 `check`。多个 facade 共享 loader，不在组件类维护第二份模块缓存。
5. 优先使用与 UMD 全局形状一致的第三方类型声明；只使用 `import type`。没有可靠声明时手写 facade 实际需要的窄接口；公共类型引用第三方包时确保消费者可解析。
6. 每次异步加载后检查模块结果和实例存活状态；定义加载前方法、失败和显式重试行为；`destroy()` 清理第三方实例、监听、DOM 及其他副作用。
7. 只创建真实需要的入口、component/vanilla/helper/types/style 和注册副作用；沿用扩展项目合理局部目录风格，不公开私有 loader，不创建空目录。
8. 按扩展版 `zuix-dev` 完成调试源：生产入口先注册相对资源，再用相同注册名和 `check` 覆盖宿主实际 `/exts/<extsName>/<folderName>/public/...` 地址；`extsName` 未解析时不得写猜测值。HMR 重建前销毁旧实例。正式文档只在批准范围内实施。
9. 依赖和 lockfile 在 `extensionRoot` 按实际 pnpm 策略更新；不修改 `zuiRoot` 的依赖、锁文件、注册或缓存。

## 验证与交付

至少分别验证：

- `git -C <gitRoot> diff --check -- <extensionRoot 相对路径>`；
- `extensionRoot` 的目标 lint、类型、测试和依赖解析；
- 在 resolver 唯一确认 `zuiRoot + extsName` 后，使用准确 `zuiName` 的扩展联合构建；
- 调试需要时从宿主启动扩展 dev，按宿主发现结果进入页面，不从 `folderName` 猜路由；
- 首次使用才加载、预载全局不重复加载、并发/多实例、失败与显式重试、加载返回前销毁、更新、重复初始化、最终清理；
- 构建后的 public 路径、license 和第三方类型解析。

交付时分开报告扩展侧与宿主侧结果、修改文件、公开 API、UMD/global、基线失败和未验证风险，并保留用户既有改动。
