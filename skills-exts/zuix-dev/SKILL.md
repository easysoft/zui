---
name: zuix-dev
description: "为独立 ZUI 扩展项目中的目标库新建、补全或优化开发调试页，维护实际页面源（README.md 或 dev.md）与 dev.ts，并通过已注册的 ZUI 宿主扩展组联合验证。Use when a user asks for an extension-library playground, demo matrix, local debug page, README/dev.md examples, HMR behavior, or dev lifecycle fixes；意图明确时在调试页边界内直接实施。"
---

# ZUI 扩展库开发调试页

## 准备

1. 在采取其他任务动作前，完整读取 `../zuix-standards/SKILL.md`。
2. 从当前技能目录运行只读 resolver：

```sh
node ../zuix-standards/scripts/resolve-zui-ext-context.mjs --cwd <目标路径> --lib <目录名或包名> [--host <宿主根>] --json
```

3. 记录 resolver 给出的 `targetLibRoot`、`extensionRoot`、`gitRoot`、`zuiRoot`、`extsName`、`folderName`、`packageName`、`zuiName`、`publicPath` 和 `dependencyPolicy`。这些分别表示目标库、扩展工作根、Git 所有权、联合宿主、扩展组、目录名、模块包名、构建选择名、资源目录和依赖策略，不得混用。
4. 按 `zuix-standards` 的路由完整读取工作流与调试页规范。完整读取各层适用的 `AGENTS.md` 并检查 `gitRoot` 状态；所有源文件通过 `targetLibRoot` 的真实路径编辑，不通过 `zuiRoot/exts/<extsName>` 符号链接写入。
5. `zuiRoot` 或 `extsName` 未解析时禁止猜测。可以完成不依赖运行时的源码分析和静态改进，但若请求要求真实交互/HMR 验收，必须报告宿主上下文缺失。
6. 阅读目标库的 package、入口、公开 API、样式、现有 `README.md`、`dev.md`、`dev.ts`，再阅读两个相近库的调试页。优先扩展项目内参考，不足时再读当前宿主内置库。
7. 确认宿主实际页面源：开发管线通常优先 `dev.md`、缺失时回退 `README.md`，但以当前 `zuiRoot` 源码和目标现状为准。维护已有真实页面源，不无理由迁移或同时复制两份。

## 实施

1. 缺少会改变演示目标、公开消费方式或交互验收的信息时先询问；否则直接在调试页边界内实施，不增加确认门禁。
2. 在实际页面源中使用当前宿主支持的 `html:example` fence 和 utility class 语法构建实例 DOM；资源通过扩展开发管线实际支持的路径引用，不硬编码某个扩展品牌或组名。
3. `dev.ts` 中用真实 `packageName` 导入目标入口和演示依赖；不要把 `folderName` 或 `zuiName` 当成模块包名。库内相对入口可沿用目标现状。
4. DOM 首次建立和 HMR 重建后都必须执行的实例化、查询和局部绑定放入 `onPageUpdate`；真正一次性的全局设置才放入 `onPageLoad`。
5. 避免重复全局监听、冲突 ID、不可清理的 timer/observer 和遗留实例。组件可销毁时，在重建或重新实例化前清理旧实例。
6. 若调试页需要覆盖 `LibLoader` 的本地资源，使用同一 loader 注册名和 check，并从 resolver 的 `extsName`、`folderName`、`publicPath` 及宿主实际 URL 规则构造路径；禁止写死项目名或假定三者相同。
7. 只修改 `targetLibRoot` 中调试页及批准的演示资源。源码 lint、类型、依赖与测试从 `extensionRoot` 执行；不修改 `zuiRoot` 的源码、package、lockfile、注册、缓存或生成目录。
8. 不为使演示成立而悄悄修改运行时 API、正式文档或 i18n。发现越界问题时单独报告。

## 宿主联合验证

1. 先在 `extensionRoot` 读取实际 package scripts，运行调试页相关静态、lint 和类型检查。
2. 仅当 resolver 确认 `zuiRoot` 与 `extsName`，且宿主注册指向当前 `extensionRoot` 时，从 `zuiRoot` 启动扩展开发入口，例如：

```sh
pnpm dev:exts -- --lib=buildIn,<extsName>
```

3. 从宿主实际库发现/导航结果进入目标页，不从 `folderName`、`packageName` 或 `zuiName` 猜测 URL。
4. 验证首次加载、主要状态与交互、键盘/焦点/ARIA、错误边界、销毁重建及页面源修改后的 HMR。检查控制台没有重复初始化和异常。
5. 持续进程验证完成后主动结束，不遗留后台服务。宿主命令写入的生成物不得加入扩展项目提交范围。

## 组合边界与交付

- 独立调用且目标明确时直接实施。
- 由 `../zuix-component/SKILL.md`、`../zuix-helper/SKILL.md`、`../zuix-lib/SKILL.md` 或 `../zuix-optimize/SKILL.md` 编排时，只处理共享已批准范围内的调试页，不重复确认。
- 用户只要求评审时保持只读。
- 交付时汇报实际页面源、演示矩阵、生命周期处理、四层上下文、本地与宿主验证结果及未覆盖项，不自动提交、推送或发布。
