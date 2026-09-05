---
name: zui-wrap-lib
description: "将可直接由浏览器脚本加载并暴露全局变量的第三方 UMD/IIFE 库封装为 ZUI 3 `lib/*` 库，使用 `LibLoader` 按需加载，并按真实需求提供 typed helper、vanilla Component、Preact 入口、样式、调试页和文档。Use when a user asks to wrap or integrate a ready-to-use third-party UMD library as a ZUI component/library, vendor a UMD asset under `public/`, or refactor an existing wrapper to the ZUI external-library pattern; 本技能假定 UMD 产物已经可直接使用，不转换或重新打包第三方库，设计完成后先给出集成计划并等待明确确认。"
---

# ZUI UMD 库封装

## 目标与边界

把第三方 UMD/IIFE 库做成一层薄而完整的 ZUI 适配层：第三方实现保持外置，由 `LibLoader<T>` 首次使用时加载；ZUI 库负责类型、公开 API、组件生命周期、样式接线、调试和文档。

- 假定用户提供或指定的产物已经能被浏览器脚本直接加载，并暴露稳定的全局变量。
- 不调用或建议 `npm-umd-wrapper`，不把 ESM 转成 UMD，不使用打包器重建、改写或内联第三方实现。
- 若实际产物与上述前提冲突，停止并请求可直接使用的 UMD 产物或正确全局名，不自行扩大任务范围。
- 不默认生成全部消费方式；只实现用户需要且仓库契约支持的 helper、vanilla、Preact、声明式创建或公开加载 API。
- 不自动提交、推送或发布。

## 准备与发现

1. 定位同时包含 `AGENTS.md`、`pnpm-workspace.yaml` 和 `lib/` 的仓库根目录，完整读取根 `AGENTS.md`。
2. 完整读取以下公共规范：
   - `../zui-standards/references/workflow.md`
   - `../zui-standards/references/library.md`
   - `../zui-standards/references/external-library.md`
   - UI 组件再读 `../zui-standards/references/component.md`；无状态函数或服务 facade 再读 `../zui-standards/references/helper.md`。
   - 纳入 `README.md` / `dev.ts` 或正式文档时，再读对应的 `dev-page.md` / `documentation.md`。
3. 完整读取 [references/wrapper-shapes.md](references/wrapper-shapes.md)，再按范围读取 `../zui-lib/SKILL.md`、`../zui-component/SKILL.md`、`../zui-helper/SKILL.md`、`../zui-dev/SKILL.md` 或 `../zui-doc/SKILL.md`；由本技能统一它们的确认门禁。
4. 检查工作区状态并保留已有修改。确认目标是新建 `lib/<name>` 还是扩展已有库，不覆盖无关文件。
5. 检查 UMD 产物或其文档，只提取封装所需事实：资源位置、全局名、构造器/函数、初始化参数、返回值、事件、更新与销毁 API、配套 CSS/资源、版本和许可证。不要把“确认可直接使用”变成转制或重打包工作。
6. 阅读 `lib/core/src/helpers/lib-loader.ts`、`get-lib.ts`，并以 `lib/sortable/src/helper/sortable-loader.ts`、`lib/sortable/src/vanilla/sortable.ts` 为当前加载基准。再用 standards 盘点脚本选择一个在包角色和组件架构上相近的成熟库，完整检查其入口、类型、样式、调试页和文档。

先从仓库、产物和现有文档发现信息。只有缺口会改变目标库、公开 API、生命周期或文件范围时才提问，通常限于：无法确定的目标库名、UMD 资源位置/全局名，以及用户真正需要的消费方式。

## 设计封装

分别确定包角色与实现架构，不从“第三方库”或目录名机械推断 `zui.type`。按外部 API 和公开消费方式选择：

- 无状态函数/模块：提供异步 typed facade，通常不创建 `Component`。
- 增强已有 DOM 的有状态实例：使用原生 `Component`，持有第三方实例并负责更新和销毁。
- ZUI 需要根据 props 生成结构且同时提供 Preact/vanilla：按组件规范选择 Preact 与 `ComponentFromReact`，不要在没有消费需求时增加 TSX 层。
- 全局服务或单例：按 helper 规范明确所有权、重入、错误与清理，不伪装成 UI 组件。

无论选择哪种形态，都要定义：

- 唯一 loader 注册名、生产资源路径、`check` 全局名、前置 JS/CSS 和 dev 覆盖路径；
- loader 是否保持私有，是否确有必要公开 `loadModule()` / `Module`；
- loading、失败传播/降级、缓存错误与显式重试语义；
- 类型来源及发布后的可解析性，严禁第三方库的运行时 `import` 混入 ZUI bundle；
- 异步初始化期间销毁、重复初始化、多实例、更新和第三方实例清理；
- package 入口、依赖、`zui.type`、`contributes`、public 资源、样式、调试页与正式文档边界。

## 一次集成计划

尚无适用批准时，在修改任何目标库文件前输出一份可直接实施的拟实施计划，并请求用户明确确认；批准状态和等待期间的推进方式遵循共享工作流。计划至少包含：

- 新建/已有库、包角色、实现架构、两个参考库及理由；
- UMD 来源与版本、目标 `public/` 路径或绝对 URL、全局名、loader 注册与资源依赖；
- package 名称、入口、依赖、`zui` 元数据和 publicPath 决策；
- 类型策略、公开 API、消费方式、状态/数据流、错误重试、更新与 destroy；
- 精确文件集，以及 README/dev、正式文档、样式和 i18n 的纳入/排除；
- 运行时验收场景、静态验证、仍存在的假设和明确标记的“拟实施范围”。

按 [zui 共享工作流](../zui-standards/references/workflow.md) 复用本任务已有且仍完整适用的明确批准，包括 wrap-lib 的协调计划，不重复确认。超出批准范围时只暂停受影响部分及其依赖写操作，提交增量计划并确认；继续范围内不受影响的工作。始终服从当前协作模式。

## 实施

1. 确认后重新检查工作区状态，仅修改批准范围。
2. 新库按 `@zui/<kebab-name>`、`0.0.1`、真实入口、准确依赖和 `zui.contributes` 创建最小骨架；`publicPath` 只在构建后的资源目录不同于库名时声明。已有库沿用合理结构，不顺带规范化。
3. 将用户提供的 UMD/CSS/许可证文件原样放入批准的 `public/` 位置，或为已批准的绝对 URL 配置 loader。不要编辑、压缩、转译或生成第三方产物。
4. 在库内私有 helper 中创建唯一的 `LibLoader<T>`，显式配置 `src` 和 `check`；多个组件共享同一个 loader，不在组件类维护第二份模块缓存。
5. 优先使用第三方声明的 `import type`；没有可靠声明时只手写封装实际使用的窄接口。公共类型引用第三方包时，确保消费者能解析相应依赖。
6. 按批准形态实现 facade。每次异步加载后检查模块结果和实例存活状态；定义加载前方法行为；在 `destroy()` 中清理第三方实例、监听、DOM 和其他副作用。
7. 仅创建真实需要的局部入口、`src/main.ts`、Preact 子入口、注册副作用和样式。不要公开私有 loader，也不要为理论消费方式创建空目录或导出。
8. 按 `zui-dev` 完成 `README.md` 与 `dev.ts`：先导入生产入口，再用相同注册名和 `check` 覆盖本地 `/lib/<name>/public/...` 路径，并在 HMR 重建前销毁旧实例。正式文档只在批准范围内按 `zui-doc` 实施。
9. 若修改依赖，使用 pnpm 更新安装状态和锁文件；不要使用 npm、yarn 或 npx。

## 验证与交付

至少运行并记录：

```sh
git diff --check
pnpm exec eslint lib/<name>
pnpm build -- --lib=<name> --noMinify
```

根据范围补充类型检查、文档同步/构建和 `pnpm dev` 的 `/<name>/` 交互验证。开发服务管理遵循共享工作流及 `AGENTS.md`，按归属和临时验证/持续预览用途处理。

运行时验证至少覆盖：首次使用才加载、预载全局不重复加载、多实例、加载失败与批准的重试/降级策略、加载返回前销毁、更新、重复初始化和最终清理；同时核对构建后的 public 资源路径及第三方类型解析。

交付时报告新增/修改文件、公开 API、UMD 资源与全局名、已运行验证和未验证风险，并保留用户原有未提交改动。
