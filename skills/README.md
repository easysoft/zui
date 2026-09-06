# ZUI 应用侧技能

本目录提供面向 **ZUI 用户** 的 Codex 技能：在已有应用中正确接入和使用 ZUI，或从零搭建不依赖构建工具的静态页面。

它们服务的是应用项目，而不是本仓库的 `lib/*` 开发。

| 技能目录 | 服务对象 |
| --- | --- |
| `.agents/skills/zui-*` | 本仓库内置库开发 |
| `skills-exts/zuix-*` | 独立扩展组件库项目 |
| `skills/zui`、`skills/zui-build` | 使用 ZUI 的应用或静态页面 |

三套技能使用不同名称，可以在同一环境中并存。若目标就是本仓库，并且请求会改 `lib/*`，不要使用本目录技能，改走 `.agents/skills/` 中的开发技能。

## 使用方式

建议把需要的技能复制到目标应用的 `.agents/skills/`：

```sh
mkdir -p <app-root>/.agents/skills
cp -R <zui-root>/skills/zui <app-root>/.agents/skills/
cp -R <zui-root>/skills/zui-build <app-root>/.agents/skills/
```

复制后可在请求中显式调用，例如：

```text
$zui 检查当前项目如何引入 ZUI，并用现有组件补一个列表页
$zui-build 从零做一个可直接打开的管理后台原型
```

- 已有应用、要安装/导入/排查 ZUI：用 `zui`。
- 空目录、不要 npm/bundler、只要能打开的静态页：用 `zui-build`。
- 不要用 `zui-build` 往已有项目里塞脚手架；它会拒绝写入非空目录。

## 技能一览

| 技能 | 用途 | 不要用于 |
| --- | --- | --- |
| `zui` | 识别项目里的 ZUI 版本与引入方式，按已安装的公开 API 写界面、接框架生命周期、配置主题/语言，并系统排查样式、初始化、打包和类型问题 | 开发本仓库 `lib/*`，或从零生成独立静态站 |
| `zui-build` | 用内置的已发布 ZUI 资源（默认 3.0.0）在空目录生成可运行页面，优先语义化标记和 `zui-create` / `zui-toggle` / `zui-on-*` | 往已有应用集成 ZUI；那种情况改用 `zui` |

## 配套脚本

`zui` 先盘点应用如何使用 ZUI（报告信号，不证明某个 API 一定正确）：

```sh
node skills/zui/scripts/inspect-zui-project.mjs --root <project-root> [--json]
```

`zui-build` 在空目录生成页面，并校验入口是否引用了可解析的 ZUI 资源：

```sh
node skills/zui-build/scripts/create-zui-page.mjs \
  --output <empty-page-directory> \
  --title "<page title>" \
  [--lang zh-CN] [--cdn]

node skills/zui-build/scripts/validate-zui-page.mjs --root <page-directory>
```

校验器只检查 ZUI 资源引用，不评价页面内容或交互写法。CSS-only 页面也算有效。

本仓库用 `pnpm test:skills` 运行 `zui` 盘点脚本的测试。

## 核心原则

- 以目标项目里已安装的版本、`exports`、类型和现有约定为准，不把本技能附带的 ZUI 3 参考当成任意版本的 API 清单。
- 先核对公开入口，再写 import、类名、组件名、选项或事件；不编造 API，不改 `node_modules`，不走私有深层路径。
- 能用语义 HTML + ZUI CSS 就不要上 JS；已有对应组件就不要重造行为。
- 框架应用里由宿主管理挂载与销毁；ZUI 一旦接管某个宿主的后代，就通过它的公开 API 更新，不要再从另一个渲染器改这些节点。
- 不把不可信数据插进会求值的声明式属性（`zui-create-*`、`zui-toggle-*`、`zui-on-*`、`zui-init`）。
- 做最小改动。未要求时不升级 ZUI、不更换引入方式、不顺带迁移无关界面。

每个技能目录都包含 `SKILL.md` 和 `agents/openai.yaml`。`zui/references/` 覆盖接入、组件模式、框架生命周期和排障；`zui-build/references/` 覆盖资源分发、声明式用法和页面质量。`zui-build/assets/` 内含起始模板和打包好的 ZUI 3.0.0 浏览器资源。
