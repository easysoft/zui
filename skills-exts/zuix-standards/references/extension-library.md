# ZUI 扩展项目与宿主协同规范

## 边界

扩展源码归 `EXT_ROOT` / `GIT_ROOT` 所有；`ZUI_ROOT` 通过 `exts/<EXTS_NAME>` 符号链接和 `exts/libs.json` 发现它。宿主注册是本机开发环境配置，不是扩展源码或可发布配置。

不要把本机制与浏览器运行时第三方资源加载混淆：宿主 `exts/` 用于联合开发和构建，`LibLoader<T>` 用于产品运行时加载外部 JS/CSS。

## 解析宿主与注册组

优先运行上下文解析器；按以下顺序选择 `ZUI_ROOT`：

1. 用户显式 `--host`；
2. 当前工作目录本身是有效宿主；
3. 扩展项目配置或 `AGENTS.md` 中能解析出的宿主路径；
4. 与扩展项目有明确相邻关系且通过宿主契约检查的候选。

有效宿主至少应包含 `lib/core`、`scripts/libs/query.ts` 和支持扩展开发的 package scripts。不要仅因目录名叫 `zui` 就接受。

在候选宿主中读取 `exts/libs.json`，去掉映射末尾的 `/*` 后比较真实路径；映射应匹配 `EXT_ROOT/lib`、`TARGET_LIB_ROOT` 或其明确集合根。同时核对 `exts/<EXTS_NAME>` 的真实链接目标。只有得到唯一匹配时才运行宿主命令。

未注册时仍可运行扩展侧只读分析、lint 和类型检查。若任务需要联合验证，报告缺失并建议用户从宿主执行其 `extend-lib` 命令；本规范始终只读，不自行注册、替换或删除链接。多个宿主或注册组同样匹配时，请用户指定 `--host`，不要任选。

## 宿主发现契约

当前常见宿主行为是：

- `exts/libs.json` 记录“组名 → 单库路径或集合 glob”；
- 单库根含带 `zui` 元数据的 `package.json`；库集合只扫描直接子目录；
- 扩展包获得 `sourceType: exts` 和 `extsName`；
- Vite 为真实 `PACKAGE_NAME` 及 `zui.replace` 建立 alias；
- 扩展 Tailwind 配置进入联合开发；
- scoped 包的 `ZUI_NAME` 可能是完整包名。

始终以 `ZUI_ROOT` 当前脚本为准。不要把 `exts/libs.json`、绝对路径或符号链接提交为扩展项目的可移植配置。

## 联合调试

在 `ZUI_ROOT` 使用实际脚本，常见命令为：

```sh
pnpm dev:exts -- --lib=buildIn,<EXTS_NAME>
```

从宿主导航取得页面 URL。短目录名唯一时通常可访问 `/<LIB_FOLDER>/`；冲突时宿主可能使用 `<scope>_<folder>` 等安全形式，不能硬编码。

开发资源路径由宿主管线验证。当前常见扩展路径是：

```text
/exts/<EXTS_NAME>/<LIB_FOLDER>/public/<asset>
```

新增/删除包或修改 package 元数据后，核对是否需要重启服务，并按 [共享工作流](workflow.md) 及适用 `AGENTS.md` 的服务归属规则处理。只有用户授权且证据确认缓存陈旧时，才由实施技能处理宿主精确缓存；本规范不修改缓存。

## 联合构建与文档

以下命令使用宿主管线，执行位置及宿主生成物、缓存写入遵循 [共享工作流](workflow.md) 的验证隔离与批准规则。

宿主构建通常同时需要发现来源和选择目标：

```sh
pnpm build -- --exts=buildIn,<EXTS_NAME> --lib='<ZUI_NAME>' --noMinify
```

`--exts` 选择候选来源，`--lib` 使用准确 `ZUI_NAME`；不能用 `LIB_FOLDER` 或 `PACKAGE_NAME` 猜测替代。WIP/notReady 按宿主实际参数显式加入。

正式文档通过宿主扩展脚本同步和构建，例如：

```sh
pnpm docs:dev:exts
pnpm docs:build:exts
```

运行前核对这些脚本是否能限定或包含目标 `EXTS_NAME`。宿主生成目录不是扩展源码，不手工编辑代替源文件修改，也不纳入扩展提交。

## 验收

按共享工作流及本次接入范围选择相关项目：

- `TARGET_LIB_ROOT`、`EXT_ROOT`、`GIT_ROOT` 各自正确，符号链接与真实路径一致；
- `ZUI_ROOT/exts/libs.json` 与链接唯一匹配 `EXTS_NAME`；
- 宿主发现的 `PACKAGE_NAME`、`ZUI_NAME`、`zui.replace`、`PUBLIC_PATH` 与目标元数据一致；
- 交付包含联合调试时，验证本次涉及的导航、入口、样式、跨包导入、public 资源或 HMR；
- 构建与文档使用准确 group/name，并保留两边既有改动；
- 宿主未因扩展开发产生不应提交的依赖或锁文件变化。
