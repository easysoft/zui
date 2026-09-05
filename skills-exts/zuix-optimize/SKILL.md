---
name: zuix-optimize
description: "审计独立 ZUI 扩展项目的整库质量，或编排多个包、多个开发领域的优化。Use for whole-library quality audits, multi-package or cross-domain optimization, or explicit zuix-optimize requests. 单独的文档、调试页和 i18n 需求优先使用对应技能，不要仅因出现优化或完善而触发；审计只读，实施仍须完整计划的明确批准。"
---

# ZUI 扩展库优化

## 解析上下文、范围与模式

1. 在采取其他任务动作前，完整读取 `../zuix-standards/SKILL.md`、`../zuix-standards/references/workflow.md`、`../zuix-standards/references/extension-library.md` 和 [references/audit.md](references/audit.md)。
2. 从当前技能目录运行只读 resolver：

```sh
node ../zuix-standards/scripts/resolve-zui-ext-context.mjs --cwd <目标路径> [--lib <目录名或包名>] [--host <宿主根>] --json
```

3. 记录四层上下文：
   - `targetLibRoot`：单个目标包的真实路径；
   - `extensionRoot`：扩展项目源码、依赖与项目级检查；
   - `gitRoot`：Git 状态、diff 和变更所有权；
   - `zuiRoot + extsName`：宿主联合 dev/build/docs。

   对每个目标另记 `folderName`、`packageName`、`zuiName`、`publicPath`。这些字段用途不同，不能从目录名、scope 或扩展组名互相猜测。
4. 完整读取目标、`extensionRoot`、`gitRoot` 及只读宿主范围内适用的 `AGENTS.md`。使用 `git -C <gitRoot>` 检查状态；通过真实路径读取和修改扩展源码，不通过宿主 `exts/` 符号链接写入。
5. 将用户范围解析为：
   - 单库：一个目录名、`packageName` 或 `zuiName`；
   - 多库：明确名称列表，逐库使用 resolver 消歧；
   - 全库：`extensionRoot` 当前实际发现的所有扩展 package。不要硬编码数量；WIP/notReady 在只读盘点中保留并单独标记，是否实施由批准范围决定。

   宿主内置库只作为规范或相似实现，默认不属于修改范围。跨扩展项目或宿主源码优化需要用户明确授权并分别解析所有权。
6. 区分请求模式：
   - 只要求审计、检查或报告：全过程只读，输出发现和建议，不请求实施确认；
   - 要求优化、完善或修复：先只读审计，再进入统一确认门禁。
7. 确认前只运行不会写入任一仓库、生成目录或缓存的检查。不要运行 build、docs 同步、开发服务器、lint `--fix` 或会刷新 `build/`、`dist/`、`docs/_`、lockfile、cache 的命令。用户明确要求带构建的只读审计时，优先配置仓库外临时输出；无法隔离则先说明副作用并取得许可。

`zuiRoot` 或 `extsName` 未唯一解析时仍可完成扩展侧审计，但不得猜测宿主命令、资源路径或验收结论。需要联合验证才能确认的问题标为 `risk`。

## 盘点与审计

1. 使用扩展 standards 的盘点脚本盘点 `extensionRoot` 全部或指定目标。脚本信号只能筛选，不能替代源码判断。
2. 对单库或当前计划批次中的每个目标，完整读取 package、入口、公开类型、实现、样式、i18n、正式文档、README/dev 内容和 `dev.ts`。优先从扩展项目选择两个包角色、架构或消费方式相近的成熟包；样本不足时再读取当前 `zuiRoot` 实现。
3. 大范围任务先依据全部 package 元数据、依赖图、宿主发现结果和现有验证状态浅层分组，再深读本批目标。浅审不能宣称源码缺陷，也不要在整体优先级形成前随机修改第一个库。
4. 按发现领域完整读取并遵循对应扩展版兄弟技能：
   - 规范与 package/宿主契约：`../zuix-standards/SKILL.md`
   - UI 组件：`../zuix-component/SKILL.md`
   - helper/store/utils：`../zuix-helper/SKILL.md`
   - 正式文档：`../zuix-doc/SKILL.md`
   - 调试页：`../zuix-dev/SKILL.md`
   - 国际化：`../zuix-i18n/SKILL.md`
   - 单库跨领域/package 契约：`../zuix-lib/SKILL.md`
5. 按 audit reference 检查扩展源码质量、package 与宿主契约、公开 API、调试、i18n 和规范一致性。每项记录证据、影响、置信状态、严重度、建议、owner skill、文件所有权层和验证方式。
6. 不把风格偏好包装成缺陷。无法从源码、复现或只读结果确认的问题标为 `risk`，加入验证/修复计划，不进行猜测性修改。宿主契约本身的问题单独报告，不把宿主修复偷渡进扩展优化范围。

## 统一确认门禁

尚无适用批准时，在任何文件修改、依赖安装或生成产物前输出决策完整的拟实施优化计划，至少包含：

- 四层上下文、目标库清单与真实命名字段、排除项、工作区基线和相似实现；
- 按库列出的 confirmed defect、risk、文档/调试/i18n/package/宿主缺口及优先级；
- 每项优化的目标、非目标、公开 API/兼容性/宿主影响和验收场景；
- owner skill、`targetLibRoot`/`extensionRoot` 内精确文件边界、依赖顺序和跨库影响；
- JSDoc、正式文档、调试页、i18n、public 资源和 package 元数据的纳入范围；
- 扩展侧验证、宿主联合验证、基线失败、批次顺序和剩余假设；
- 明确标记的“拟实施范围”，精确列出本次允许修改的库、问题、领域与所有权边界。

单库或少量库能一次形成完整计划时，只等待一次明确确认。全库或大范围默认先给出只读路线图，并为首个可独立验收批次提交完整计划；后续批次深审后分别确认，除非用户已明确批准其中每项具体修改。一次笼统的“优化全部”不能授权未知变更。

尚无适用批准时，请求用户明确确认后再实施；批准状态、包含批次选择或优先级调整的授权回复及等待期间的推进方式遵循共享工作流。用户只要求审计时不请求实施确认，也不修改文件。始终服从当前协作模式。

## 编排实施

宿主命令的执行位置、生成物与缓存写入统一遵循 [共享工作流](../zuix-standards/references/workflow.md) 的验证隔离与批准规则；下文 `zuiRoot` 表示宿主契约来源，不表示可直接写入原工作区。

1. 确认后重新运行 resolver 并检查 `gitRoot` 状态；上下文、注册、目标或基线变化时先核对，只实施批准范围。
2. 单库跨领域可用 `$zuix-lib` 作为执行器；窄领域直接用相应技能。把已批准范围传给子技能，范围内不重复确认；目标、公开 API、兼容性、宿主影响或文件边界需要超出批准范围时，按共享工作流仅暂停受影响部分，并返回本技能提出增量计划及确认。
3. 先处理共享基础/helper，再处理依赖它们的组件，随后处理 i18n、正式文档和调试页。互不依赖的包可并行，但每库保持独立验收记录。
4. 仅在真实 `targetLibRoot` 和批准的 `extensionRoot` 文件内修改。依赖与 lockfile 按扩展项目策略在 `extensionRoot` 处理；不修改宿主源码、依赖、lockfile 或注册；宿主生成物和缓存写入遵循共享工作流的验证隔离与批准规则。
5. 只修复证据充分且已批准的问题。新发现先记入下一批；不顺手扩张。保留合理局部结构与 API，避免无关格式化、重命名、迁移和公共契约破坏。
6. 每完成一个库运行扩展侧针对性检查并更新账本；批次结束后，在 `zuiRoot + extsName` 已唯一解析时运行批准的组合构建、文档和浏览器验证。服务的启动、复用、重启和清理遵循共享工作流的开发服务管理规则。

## 交付

- 按库汇报 defect、质量、API/JSDoc、package/宿主契约、正式文档、调试和 i18n 变化。
- 分开记录扩展侧通过、宿主侧通过、基线阻断、未执行与未验证项。
- 对比可验证行为，不用文件数代替质量结果。
- 不手工编辑宿主生成目录代替修改源文件；验证产物和服务管理遵循共享工作流，不自动提交、推送或发布。
