---
name: zui-dev
description: "为指定 `lib/*` 新建、补全或优化 ZUI 3 开发调试页，主要维护 `README.md` 与 `dev.ts`。Use when a user asks for a playground, demo matrix, local debug page, README examples, or dev lifecycle fixes; 意图明确时直接在调试页边界内实施。"
---

# ZUI 开发调试页

## 工作流

1. 从请求、已确认决定和目标现状定位仓库根目录及 `lib/<lib-name>`。按共享工作流先发现事实、合理沿用既有约定；仅有无法可靠消除且会实质改变调试页目标或交付边界的歧义时询问，否则直接实施。
2. 完整读取根目录 `AGENTS.md`、`../zui-standards/references/workflow.md` 和 `../zui-standards/references/dev-page.md`。
3. 阅读目标入口、公开 API、样式、现有 `README.md`、`dev.ts` 与两个相近库的调试页。覆盖主要状态、交互、边界和无障碍场景，不复制不存在的 API。
4. 在 `README.md` 中使用 info string 为 `html:example:<utility classes>` 的代码围栏构建实例 DOM；通过 `@/` 引用库内资源。
5. 在 `dev.ts` 中导入目标入口和演示依赖。DOM 每次重建后都要执行的初始化放进 `onPageUpdate`；真正的一次性全局设置才放进 `onPageLoad`。
6. 避免重复全局监听、冲突 ID、不可清理的计时器和遗留实例。不要修改正式文档或运行时 API，除非请求或共享批准范围明确包含它们。
7. 运行静态检查；适合时按共享工作流的服务规则复用或启动 `pnpm dev`，访问 `/<lib-name>/` 验证渲染与交互，并按服务归属和用途清理。
8. 汇报调试场景、生命周期处理、验证结果和未覆盖项，不自动提交。

## 组合边界

- 独立调用且目标明确时不设置额外确认门禁。
- 作为其他 ZUI 技能的子流程时，只处理共享范围内的调试页工作；按共享工作流复用已有批准，包括 wrap-lib，不重复确认。独立调用仍遵循本技能的直接实施或只读模式。
- 用户只要求评审时保持只读。
