---
name: zuix-i18n
description: "为独立 ZUI 扩展项目中的目标库审计、添加、接入、补全或验证国际化，包括 zh_cn、zh_tw、en、键结构、组件私有映射、带命名空间的全局语言及覆盖/回退行为。Use when a user asks to translate extension UI strings, bootstrap locales, complete missing keys, remove hard-coded user text, fix fallback/override behavior, or perform an i18n audit；意图明确时直接在国际化边界内实施。"
---

# ZUI 扩展库国际化

## 准备

1. 在采取其他任务动作前，完整读取 `../zuix-standards/SKILL.md`。
2. 从当前技能目录运行只读 resolver：

```sh
node ../zuix-standards/scripts/resolve-zui-ext-context.mjs --cwd <目标路径> --lib <目录名或包名> [--host <宿主根>] --json
```

3. 记录 resolver 输出的 `targetLibRoot`、`extensionRoot`、`gitRoot`、`zuiRoot`、`extsName`、`folderName`、`packageName`、`zuiName`、`publicPath` 和 `dependencyPolicy`。读取/导入模块使用真实 `packageName`；语言命名空间和宿主选择必须从现有契约及 `zuiName` 核对，不能从 `folderName` 机械推导。
4. 按 `zuix-standards` 的路由完整读取工作流与 i18n 规范。完整读取各层适用的 `AGENTS.md` 并检查 `gitRoot` 状态；所有源码通过 `targetLibRoot` 真实路径处理，不通过宿主 `exts/` 符号链接写入。
5. `zuiRoot` 或 `extsName` 未解析时不猜测。可以完成扩展项目本地审计和实现；需要宿主运行时验收时报告上下文缺口。
6. 阅读目标组件/helper、入口、公开 options/types、现有语言文件和两个相似实现。优先扩展项目内参考，不足时再读取当前 `zuiRoot` 的 i18n 基础设施与成熟内置库；不要根据历史快照猜测 `i18n` API。

## 盘点与模式

1. 枚举目标范围内所有用户可见字符串及其消费路径，包括标签、按钮、标题、placeholder、提示、可见错误和 schema 文案；排除协议值、事件名、CSS 类、icon、字段 key/name、注释与仅开发日志。
2. 盘点现有语言目录、注册入口、实际加载路径、三语言键结构、占位符、源码键引用、硬编码残留、实例覆盖与 fallback 行为。
3. 选择模式：
   - **audit**：用户只要求检查时保持只读，输出证据和建议；
   - **bootstrap**：没有 i18n 基础时建立当前扩展项目适用的最小结构；
   - **complete**：保留现有结构，补齐缺失语言、键、引用或加载；
   - **clean**：均符合当前契约时不制造无意义改动。
4. 按共享工作流先检查请求、已确认决定和目标现状，合理沿用既有约定；仅有无法可靠消除且会实质改变国际化目标、公开契约或交付边界的歧义时询问，否则直接在本领域内实施，不增加确认门禁。

## 实施

1. 判断组件静态 i18n 映射、带命名空间的全局注册或目标项目已有等价机制。组件私有文案不无理由进入全局空间；全局 namespace 必须稳定且与其他扩展和内置库不冲突。
2. namespace 优先沿用公开兼容契约；新建时结合真实 `packageName`、`zuiName`、宿主注册结果和扩展项目惯例设计并记录，禁止硬编码某个项目 scope 或只把 `folderName` 转 camelCase 就视为充分证据。
3. 默认按当前 ZUI 规范提供 `zh_cn`、`zh_tw`、`en`，但若扩展项目明确采用其他文件名或语言集合，服从其契约并说明兼容映射。以 `typeof`、`satisfies` 或共享类型保证所有语言键和嵌套结构一致。
4. 确保入口或真实消费路径加载语言注册。Preact + vanilla 组合要验证 `ComponentFromReact` 的静态映射和实例 options/props 覆盖路径。
5. 所有语言保留相同占位符。区分 ZUI i18n 插值与下游组件稍后处理的模板占位符，避免提前消费。
6. 明确并验证全局语言、实例 `lang`、实例 i18n 覆盖、缺失键默认值、不支持语言和语言码归一化。不要承诺当前源码没有实现的 fallback 链。
7. 动态切换语言时区分 render 内求值与模块级常量一次性求值；需要实时更新时设计可重新求值的数据路径，不让静态常量伪装成响应式。
8. 只修改 `targetLibRoot` 内国际化所需源码、类型与接线。依赖、lint、类型和测试从 `extensionRoot` 执行；不修改宿主源码、依赖、lockfile 或注册；宿主生成物和缓存写入遵循共享工作流的验证隔离与批准规则。
9. 文档、调试页和无关运行时 API 仅在用户请求或共享批准范围明确包含时修改，并分别完整读取 `../zuix-doc/SKILL.md` 或 `../zuix-dev/SKILL.md`。

## 验证与交付

宿主命令的执行位置、生成物与缓存写入统一遵循 [共享工作流](../zuix-standards/references/workflow.md) 的验证隔离与批准规则；下文 `zuiRoot` 表示宿主契约来源，不表示可直接写入原工作区。

1. 程序化比较语言键、嵌套和占位符；核对每个源码键引用已定义、每个语言文件从发布入口可达。
2. 从 `extensionRoot` 读取实际 package scripts，运行针对性 lint、类型和测试。至少验证三种语言的真实消费路径、实例覆盖、缺失键和动态行为（若承诺）。
3. 需要宿主构建时，只有 resolver 已确认 `zuiRoot` 与 `extsName` 才从 `zuiRoot` 使用准确 `zuiName`：

```sh
pnpm build -- --exts=buildIn,<extsName> --lib='<zuiName>' --noMinify
```

4. 需要语言切换调试时，按 `../zuix-dev/SKILL.md` 从 `zuiRoot` 启动扩展开发入口并验证，服务的启动、复用、重启和清理遵循共享工作流的开发服务管理规则。
5. 作为其他 ZUI 技能的子流程时，只处理共享范围内的 i18n 工作；按共享工作流复用已有批准，包括 wrap-lib，不重复确认。独立调用仍遵循本技能的直接实施或只读模式。
6. 汇报模式、namespace、键与接线变化、四层上下文、验证结果、疑似未使用键和待决术语，不自动提交、推送或发布。
