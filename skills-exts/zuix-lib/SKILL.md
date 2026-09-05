---
name: zuix-lib
description: "新建独立 ZUI 扩展项目的完整库，或编排已有库的跨领域功能开发；用一份集成计划统一实施批准。"
---

# ZUI 扩展库开发

## 上下文与分析

按 [共享工作流](../zuix-standards/references/workflow.md) 解析本次所需上下文、读取适用规则并检查所有权；已有且未变化的发现直接复用。读取 [库规范](../zuix-standards/references/library.md) 的相关部分。

判断新库或已有库。新库使用 resolver 的 `plannedTargetLibRoot` 记录安全候选位置；scope、版本、依赖和发布策略从扩展项目现状发现，缺失字段留给本次设计，不从目录名猜测。已有库保留合理的局部目录和 API。

根据请求选择领域，规划时读取影响本次决策的技能和参考部分，实施时沿用这些发现：

- UI 组件：`../zuix-component/SKILL.md`
- helper/store/utils：`../zuix-helper/SKILL.md`
- 国际化：`../zuix-i18n/SKILL.md`
- 正式文档：`../zuix-doc/SKILL.md`
- 调试页：`../zuix-dev/SKILL.md`

## 一次集成计划

尚无适用批准时，完成本次必要的发现与设计，不修改文件。按共享工作流输出拟实施集成计划；以下仅展开本次相关决策：

- 四层上下文、`targetLibRoot` / `plannedTargetLibRoot`、宿主注册状态、新库/已有库判断、包角色及必要参考依据；
- `folderName`、真实 `packageName`、版本策略、入口、依赖协议、`zui.type`、displayName、准确 `contributes`、`zuiName`、`publicPath` 和可选导出；
- 组件/helper 的分类、公开 API、状态/数据流、错误、生命周期、清理及精确文件集；
- i18n 的语言、namespace/静态映射和加载路径；
- 正式文档源类别、调试页场景和资源；
- 所有模块导入使用的真实 package 名，以及扩展兄弟依赖与主 ZUI 依赖各自的版本/协议；
- 在 `extensionRoot` 执行的依赖、lint、类型、测试，以及在 `zuiRoot` + `extsName` 使用准确 `zuiName` 执行的联合构建、调试和文档验证；
- 依赖顺序、跨库影响、非目标、验收场景、剩余假设；
- 明确标记的“拟实施范围”，精确列出目标库、公开 API、允许修改的扩展项目领域和文件边界，并声明宿主只读。

尚无适用批准时，等待用户对计划明确确认后再实施。

批准复用、修订回复、增量范围和等待期间的推进遵循共享工作流，始终服从当前协作模式。

## 编排实施

1. 确认且当前模式允许编辑后检查 `gitRoot` 状态，按共享工作流复用或刷新受影响的上下文。
2. 仅修改已批准的 `targetLibRoot`；新库则只在已批准的 `plannedTargetLibRoot` 创建文件。package、依赖安装、lockfile、源码 lint、类型检查和测试全部从 `extensionRoot` 处理；不得修改宿主源码、package、lockfile 或注册；宿主生成物和缓存写入遵循共享工作流的验证隔离与批准规则。
3. 新库按扩展项目当前契约创建最小准确骨架。package scope、版本、dependency protocol、TS/TSX 配置和发布字段从 `extensionRoot` 发现；禁止硬编码 `@zui/<name>`、`0.0.1` 或主仓库 workspace 习惯。
4. package 创建后重新运行 resolver，以实际输出确认 `targetLibRoot`、`packageName`、`zuiName` 和 `publicPath`。任何不一致先修正计划内元数据，不让目录名代替公共标识。
5. 按实际依赖顺序遵循选中的领域技能，传递已有发现和已批准范围；子流程按共享工作流复用上下文及批准。
6. 跨库导入使用被依赖库真实 `packageName`，不通过相对路径穿越扩展库、主仓库或符号链接。`zuiName` 仅用于宿主发现与构建 DSL。
7. 目标、公开 API、包角色、package 标识、宿主影响或文件边界需要超出批准范围时，按共享工作流暂停受影响部分，更新增量计划并再次确认；继续范围内不受影响的工作，不让子技能自行扩大范围。
8. 检查所有入口真实存在、运行时与开发依赖分类正确、公开类型可由消费者解析、文档和调试示例与 API 一致。

## 验证与交付

按共享工作流合并本次所需的扩展侧与宿主侧验证，复用有效结果，修复本次引入且位于范围内的问题并复跑受影响检查。

新包或改变相应契约时，核对 package 标识、入口、依赖、公开类型和必要的宿主发现、联合构建、文档或交互。宿主命令使用已确认的 `zuiRoot + extsName`、准确 `zuiName` 和当前脚本，实际执行位置及服务管理遵循共享规则。

交付时报告已完成范围、关键 API、影响交付的上下文及分层验证结果，不自动提交、推送或发布。
