---
name: zuix-wrap-lib
description: "将已经可用的 UMD/IIFE 资源封装为独立 ZUI 扩展包，通过 LibLoader 按需加载。不转换资源格式，实施须批准集成计划。"
---

# ZUI 扩展项目 UMD 库封装

## 目标与硬边界

把第三方 UMD/IIFE 做成薄而完整的 ZUI 扩展适配层：第三方实现保持外置，由 `LibLoader<T>` 首次使用时加载；目标扩展包负责类型、公开 API、生命周期、样式接线、调试和文档。

- 只接受已经能由浏览器普通 `<script>` 直接加载并暴露稳定全局变量的 UMD/IIFE 产物。
- 不把 ESM 转成 UMD，不调用转换技能，不用 bundler 重建、改写或内联第三方实现，也不把 ESM module loader 作为本技能兜底。
- 先从用户指定版本的产物和文档核实格式、路径与全局名。仍缺少可用资源时，只暂停依赖该资源的封装工作，报告缺口并请求必要信息；继续不受影响的已授权事项。不自行转换、重打包或换用未经批准的资源。
- 不默认生成全部消费形态，只实现真实需求支持的 helper、vanilla、Preact、声明式创建或公开加载 API。
- 不自动提交、推送或发布。

## 准备与发现

按 [共享工作流](../zuix-standards/references/workflow.md) 解析本次所需上下文、读取适用规则并检查所有权；已有且未变化的发现直接复用。新库使用 `plannedTargetLibRoot` 记录安全候选位置，包标识从目标扩展项目的契约推导。

按需读取 library、external-library 及宿主相关的 extension-library 规范；从 [references/wrapper-shapes.md](references/wrapper-shapes.md) 读取形态判断与所选形态约束。涉及组件/helper、调试页、正式文档或 i18n 时，再读对应 `zuix-*` 技能中影响本次决策的部分，由本技能统一确认门禁。

检查用户指定版本的产物和许可证，核实资源位置、全局名、实际调用的 API 及相关 CSS/资源；文件后缀不能证明它是 UMD。核实本次涉及的当前宿主 `LibLoader`/`getLib` 契约，必要时参考相近的扩展或宿主实现。

只有无法从现有材料发现、且会改变目标、公开 API、生命周期、资源或文件范围的信息才询问。宿主未解析时可以继续可行的扩展侧设计，不写猜测的宿主路径、URL 或命令。

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

尚无适用批准时，在修改任何文件前按共享工作流输出可直接实施的拟实施计划，并等待用户明确确认；以下仅展开本次相关决策：

- 四层上下文、新建/已有库、真实命名字段、包角色、架构及必要参考依据；
- UMD 来源、版本、许可证、目标 `public/` 路径、全局名、loader 注册和资源依赖；
- 扩展项目现行 package scope、初始版本、依赖协议、入口和 `zui` 元数据；
- 类型策略、公开 API、消费方式、数据流、error/retry、update/destroy；
- `extensionRoot` 内精确文件集，以及 README/dev、正式文档、样式、i18n 的纳入/排除；
- 扩展侧检查与 `zuiRoot + extsName` 宿主联合验收、剩余假设；
- 明确标记的“拟实施范围”。

批准复用、修订回复、增量范围和等待期间的推进遵循共享工作流，始终服从当前协作模式。

## 实施

1. 确认后检查 `gitRoot` 状态，按共享工作流复用或刷新受影响的上下文，仅修改批准范围。新库最小 package 建立后重新解析，把 `plannedTargetLibRoot` 升级为真实 `targetLibRoot` 并核对实际标识。
2. 新包的 scope、版本、description、入口、exports、依赖协议和 `zui` 元数据从 `extensionRoot` 当前配置及成熟兄弟包推导；不用 `@zui/*`、`workspace:*`、`link:` 或固定版本模板代替事实。`publicPath` 只在宿主实际要求或非默认路径时声明。
3. 将用户提供的 UMD/CSS/license 原样放入批准的 `targetLibRoot/public/`，或使用已批准且版本固定的绝对 URL；不编辑、压缩、转译或生成第三方产物。
4. 在目标包私有 helper 中创建唯一 `LibLoader<T>`，显式配置 `src` 和 `check`。多个 facade 共享 loader，不在组件类维护第二份模块缓存。
5. 优先使用与 UMD 全局形状一致的第三方类型声明；只使用 `import type`。没有可靠声明时手写 facade 实际需要的窄接口；公共类型引用第三方包时确保消费者可解析。
6. 每次异步加载后检查模块结果和实例存活状态；定义加载前方法、失败和显式重试行为；`destroy()` 清理第三方实例、监听、DOM 及其他副作用。
7. 只创建真实需要的入口、component/vanilla/helper/types/style 和注册副作用；沿用扩展项目合理局部目录风格，不公开私有 loader，不创建空目录。
8. 批准范围包含调试页时，按扩展版 `zuix-dev` 完成调试源：生产入口先注册相对资源，再用相同注册名和 `check` 覆盖宿主实际 `/exts/<extsName>/<folderName>/public/...` 地址；`extsName` 未解析时不得写猜测值。HMR 重建前销毁旧实例。正式文档只在批准范围内实施。
9. 依赖和 lockfile 在 `extensionRoot` 按实际 pnpm 策略更新；不修改宿主依赖、锁文件或注册；宿主生成物和缓存写入遵循共享工作流的验证隔离与批准规则。

## 验证与交付

宿主命令的执行位置、生成物与缓存写入统一遵循 [共享工作流](../zuix-standards/references/workflow.md) 的验证隔离与批准规则；下文 `zuiRoot` 表示宿主契约来源，不表示可直接写入原工作区。

按共享工作流选择覆盖本次变更的验证，完成范围内修复和复验。新增封装或改变相应契约时，按涉及的行为选择：

- `git -C <gitRoot> diff --check -- <extensionRoot 相对路径>`；
- `extensionRoot` 的目标 lint、类型、测试和依赖解析；
- 在 resolver 唯一确认 `zuiRoot + extsName` 后，使用准确 `zuiName` 的扩展联合构建；
- 调试需要时从宿主启动扩展 dev，按宿主发现结果进入页面，不从 `folderName` 猜路由；
- 首次使用才加载、预载全局不重复加载、并发/多实例、失败与显式重试、加载返回前销毁、更新、重复初始化、最终清理；
- 构建后的 public 路径、license 和第三方类型解析。

交付时分开报告扩展侧与宿主侧结果、修改文件、公开 API、UMD/global、基线失败和未验证风险，并保留用户既有改动。
