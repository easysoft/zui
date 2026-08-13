# ZUI 扩展库优化审计清单

## 发现记录

每项发现同时标注状态、严重度和所有权层。

状态：

- `confirmed-defect`：源码控制流、复现、类型/构建结果或明确契约冲突已证实；
- `risk`：存在可信风险，但缺少运行时、宿主或契约证据；
- `gap`：缺少公开文档、示例、语言覆盖、无障碍或规范要求；
- `improvement`：不改变行为的可维护性、类型或结构改进。

严重度：

- `P0`：阻断构建、发布或核心使用路径；
- `P1`：公开 API 错误、数据损坏、明显运行时故障、严重生命周期或无障碍问题；
- `P2`：重要边界错误、文档误导、缺少主要示例/i18n 或显著维护风险；
- `P3`：低风险一致性、可读性或次要覆盖改善。

所有权层：

- `TARGET_LIB_ROOT`：单库源码、package、文档和资源；
- `EXT_ROOT`：共享配置、依赖、lockfile 或跨包基础；
- `GIT_ROOT`：状态与提交边界，不等于默认可修改范围；
- `ZUI_ROOT`：宿主契约或联合验证问题，默认只读且不纳入扩展修复。

不要按代码行数或风格定级。每项记录 `folderName`、`packageName`、`zuiName`、证据路径/行、影响、建议、owner skill、所有权层和验证方式。

## 审计维度

### 1. Package、扩展与宿主契约

- `packageName`、`zuiName`、`zui.type`、displayName、contributes 是否与真实产出和宿主类型定义一致；
- main/browser/module/exports/files 的目标是否存在，是否暴露不稳定深路径或遗漏公共入口；
- `zui.replace` 是否确有替换意图且无 alias 冲突；`publicPath` 是否与生产资源结果一致；
- 兄弟扩展包依赖是否使用真实公开 package name，协议是否符合 `EXT_ROOT` 的 workspace/link/version/peer 策略；
- 宿主库依赖和第三方运行时、类型、文档/调试依赖是否正确分类，发布类型是否可由消费者解析；
- 源码入口、局部入口、注册副作用和 `zui.contributes` 是否互相一致；
- 宿主是否以唯一 `extsName` 发现目标，package/name/replace alias、Tailwind 和 public 复制是否正确；
- 是否通过相对路径或 `exts/` 符号链接穿越包/仓库边界，或把本机注册、绝对路径和宿主 cache 当作可发布配置。

发现宿主实现缺陷时标记 `ZUI_ROOT` ownership；除非用户另行授权，不把它改造成扩展侧 workaround 或悄悄修改宿主。

### 2. 组件和 helper 质量

- 类型是否准确，是否以 `any`、断言或重复类型掩盖契约问题；
- 默认值、受控/非受控状态、事件参数/顺序、方法返回值是否一致；
- 重复初始化、更新、销毁、重入、异步竞态、加载失败和显式重试是否可靠；
- listener、timer、observer、portal、缓存、DOM 和第三方实例是否清理；
- store/helper 的副作用、序列化、浏览器全局、错误和回退是否明确；
- 是否复用当前宿主 core/Preact/Cash 与成熟扩展组件，而非复制基础设施；
- 热路径、列表渲染和缓存是否存在有证据的性能问题；
- 语义标签、键盘、焦点、ARIA、reduced motion 和 disabled 状态是否完整。

先复现或沿源码路径证实。仅有“可能”时标为 `risk`，在计划加入验证，不直接修复。

### 3. 外部资源与 LibLoader

- 第三方资源是静态依赖还是按需资源，选择是否合理；
- UMD/IIFE 全局、loader 注册名、`check`、dependencies、CSS 和生产路径是否准确；
- dev 覆盖是否使用已解析的 `extsName + folderName`，而非硬编码另一扩展项目；
- 多实例是否共享唯一 loader，组件是否错误维护第二份模块缓存；
- 首次加载、预载复用、失败缓存、显式重试和加载返回前 destroy 是否安全；
- public 资源版本、许可证、构建复制与 CSP/远程可用性是否有据可查。

### 4. 公开 API 与正式文档

- 公共组件、函数、类、构造器、options/props、方法、成员、事件和类型是否有准确 JSDoc；
- 默认值、错误、异步、生命周期、返回值、兼容性和宿主要求是否明确；
- 正式文档是否只描述真实导出，示例是否使用真实 `packageName` 和 API；
- 文档源第一屏是否有可运行基础示例；已承诺的 HTML/CSS、Preact、vanilla、自动创建/toggle 等消费方式是否覆盖；
- CSS 类/变量、public 资源、无障碍、限制和宿主联合使用说明是否与源码一致。

只编辑扩展项目的文档源，不编辑宿主同步生成目录。

### 5. 开发调试页

- README/dev markdown 是否覆盖默认、主要变体、交互和边界，而非仅静态外观；
- `dev.ts` 是否正确导入真实 package/依赖并把 DOM 重建放在宿主约定生命周期；
- selector 是否唯一，实例、全局 listener、timer 和 observer 是否在 HMR/页面更新时清理；
- 是否能观察事件、方法、更新、destroy、错误、loader 失败和语言切换；
- 宿主导航/路由、`extsName`、public 地址、样式、HMR 和跨包 alias 是否真实运行。

“更多示例”必须增加可验证行为，不机械复制 DOM。

### 6. 国际化

- 用户可见字符串是否硬编码；语言集合是否符合扩展项目和用户要求；
- 语言对象的键、嵌套、类型和占位符是否一致；
- 私有静态映射或全局命名空间选择是否正确且不与兄弟包冲突；
- 语言文件是否从真实发布入口加载；
- 全局语言、实例 lang/i18n 覆盖、缺失键回退和动态变化是否生效；
- 文档/调试是否覆盖真实语言与 fallback。

不要把某个参考扩展项目的 package scope、camelCase namespace、中文默认值或文件名强制推广为通用规则。

### 7. 规范与样式

- 新代码是否同时遵循目标/扩展/Git/宿主适用的 `AGENTS.md`；
- 合理局部目录和 API 风格是否保留；
- Preact、Cash、路径别名和跨包公开 import 是否符合当前上下文；
- CSS 根类、变量、Tailwind prefix、主题和 dark mode 是否与 `EXT_ROOT` 配置及宿主合并结果一致；
- 是否存在无关迁移、格式化或隐式公共契约破坏。

## 范围策略

### 单库

完成深审后形成覆盖选中领域的集成计划。只读审计直接输出完整发现、上下文缺口和修复顺序。

### 多库

先建立扩展包依赖和共享问题：

- 共享 helper/core 缺陷单独成项，先于消费者；
- 相同表象但不同根因分别处理；
- 公共基础修改与消费者适配放在同一可验收批次；
- 每库保留独立扩展侧与宿主侧验证结果。

### 全库或大范围

1. 从 `EXT_ROOT` 实际 package 建立清单，保留 WIP/notReady；
2. 浅审全部包，按角色、依赖、严重度、领域和宿主注册分组；
3. 优先 P0/P1 与共享基础，再处理 P2/P3；
4. 拆成可独立验证的相关批次，通常每批约 3–8 个包但不固定；
5. 每批深审后提交决策完整计划，完成验证后再进入下一批。

不要把尚未读源码的项目写成“预计修复”。

## 基线与验收

确认前只用 package 解析、源码、`git -C <GIT_ROOT> diff` 和不会写 cache/产物的检查记录基线。不要运行会更新 build/dist/docs、宿主 cache、依赖或 lockfile 的命令。

确认实施后按影响选择：

- 在 `EXT_ROOT` 执行目标 lint、TypeScript、测试和依赖检查；
- 使用 `git -C <GIT_ROOT> diff --check -- <扩展相对路径>`；
- resolver 唯一确认 `ZUI_ROOT + EXTS_NAME` 后，以准确 `ZUI_NAME` 运行扩展联合构建；
- 宿主扩展 docs 同步/构建；
- 宿主扩展 dev 下的首次加载、public 资源、HMR 和主要交互；
- 多库批次的组合构建和依赖方回归。

命令必须从当前 `AGENTS.md`、package scripts 和宿主脚本发现，不能把主仓库或参考扩展命令硬编码为通用事实。区分本次失败与基线失败；无法运行时说明原因，不宣称通过。

## 计划记录格式

| 字段 | 内容 |
| --- | --- |
| Context | 四层根、`extsName` 与真实 package/name/public 字段 |
| Library | 精确目标包 |
| Finding | 状态、严重度、所有权层与证据 |
| Change | 具体优化与非目标 |
| Compatibility | API、DOM、CSS、事件、依赖与宿主影响 |
| Owner skill | `zuix-lib`、`zuix-component`、`zuix-helper`、`zuix-doc`、`zuix-dev` 或 `zuix-i18n` |
| Files | 允许修改的真实路径边界 |
| Acceptance | 可观察验收场景 |
| Validation | 扩展侧与宿主侧命令/人工检查 |

实施中新增项必须先进入记录；超出批准范围时移到后续批次或重新确认。
