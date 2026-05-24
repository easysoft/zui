# AGENTS.md

## 项目概览

ZUI 3 是一个不依赖 JavaScript 框架的 Web UI 组件库。以 pnpm workspace 管理的 monorepo，使用 Vite 构建，TypeScript 编写，组件内部使用 Preact + Cash（jQuery 子集）实现。最终产物可以以 ESM、UMD 或直接通过 `<script>` 标签方式使用。

## 常用命令

包管理器固定为 **pnpm**（`preinstall` 钩子会拒绝其他包管理器），Node 要求 18+。

```sh
pnpm install               # 安装依赖
pnpm dev                   # 启动开发服务器，自动遍历 lib/* 生成左侧导航
pnpm dev:exts              # 带扩展库 (exts/) 一起开发
pnpm lint                  # 运行 ESLint（vite 也会通过 vite-plugin-eslint 实时检查）
pnpm build                 # 走自定义构建管线 scripts/build/index.ts，会汇总 lib/*、生成临时 build/ 目录后再调 build:vite
pnpm build:vite            # tsc 类型检查 + 单次 vite build（一般不直接用，由 scripts/build 调用）
pnpm docs:dev              # 准备并启动 VitePress 文档站；docs:dev-fast 跳过预处理
pnpm docs:build            # 构建文档（CI 中使用 .github/workflows/deploy-docs.yml）
pnpm extend-lib <path>     # 通过软链将外部目录加入 exts/ 并写入 exts/libs.json
pnpm publish:npm           # 构建并发布到 npm
```

`pnpm build` 支持的关键参数（透传给 `scripts/build/index.ts`）：

- `--lib=zui`、`--name=mybuild`、`--version=1.0.0`：定制构建名/版本；`--lib` 支持 `button dropdown +clipboard !icons` 这样的库组合 DSL（见 `scripts/build/config.ts` 注释）。
- `--exts=buildIn,exts`、`--ignoreNotReady`、`--includeWip`：控制是否纳入扩展库 / 未就绪 / WIP 的库。
- `--noMinify`、`--noSourceMap`、`--noCash`（cash-dom 外置）、`--zip=xx.zip`：构建产物细节。
- `--saveConfig[=path]`：把解析后的 build config 写到文件，便于排查。

单库本地调试：直接 `pnpm dev`，浏览器访问 `/<lib-name>/` 即可加载该 lib 的 `dev.ts`（见 `index.html` + `src/main.ts` + `src/libs.ts`，会按 `lib/*/package.json` 自动发现）。本仓库**没有单元测试套件**，验证依赖各 lib 自带的 `dev.ts` 演示页面与 `docs/lib/components/*.md` 中的示例。

## 仓库结构与构建模型

```
lib/<name>/         每个 UI 组件库一个目录（66 个内置库），都是 workspace 包，名为 @zui/<name>
  src/              组件源代码；通常拆 component/（preact JSX）+ vanilla/（原生 wrapper）+ style/ + types/
  dev.ts            pnpm dev 时该 lib 的 playground 入口；自由调用 onPageLoad/onPageUpdate
  docs/lib/components/*.md  组件文档，由 scripts/docs 同步进 docs/_ 给 VitePress
  package.json      额外的 `zui` 字段（type、displayName、contributes）描述该 lib 的元信息
config/             共享 Tailwind 主题
dev/                zui-dev 包：暴露 onPageLoad / onPageUpdate 等 dev 期辅助
docs/               VitePress 站点，源 markdown 由 lib/*/docs 同步生成
exts/               外部扩展库（gitignored）：通过 `pnpm extend-lib` 软链入 exts/，配置在 exts/libs.json
scripts/            构建/文档/lib 元信息处理（build, libs, docs, dev, utilities）
src/                pnpm dev 入口（开发首页 + lib 导航 + hot reload 桥接）
build/、dist/、publish/   构建中间产物 / 最终产物（gitignored）
```

### 库的"贡献"模型

`lib/*/package.json` 中 `zui` 字段是该 lib 的元数据契约（在 `scripts/libs/lib-info.ts`、`lib-type.ts`、`lib-contributes.ts` 定义）：

- `type` 决定其在构建/导航中的归类与排序（`config` → `css-base` → `control` → `js-helpers` → `component` → `js-ui` → `css-utilities` → `js-lib`）。
- `contributes.css = ['class', 'var']` 表示该 lib 输出 CSS 类与 CSS 变量；`contributes.js = ['class','var','method','module','component']` 表示输出哪些 JS 形态。`scripts/build` 会据此决定如何生成 `build/` 下的入口聚合代码与 tailwind 配置合并。
- `wip: true` / `zui.notReady: true` 会被默认排除，除非 `--includeWip` / `--ignoreNotReady`。

### Vanilla / React 双形态组件

`@zui/core` 是基础设施（`lib/core/src/main.ts` 汇出 cash、i18n、ajax、helpers、dom、react、component）。

- 所有"JS 组件"继承 `Component`（`lib/core/src/component/component.ts`），提供 `NAME / KEY / NAMESPACE / ATTR_KEY (z-use-xxx)` 等约定、自动 DOM data 关联、事件命名空间、`Component.get(element)` 取实例等。
- 富交互组件常用模式：`component/xxx.tsx` 写 Preact 组件，`vanilla/xxx.ts` 继承 `ComponentFromReact` 把 Preact 组件包成"原生类"，对外暴露 `new Menu('#menu', options)` 这种形态（见 `lib/menu`）。`component/share.ts` 中 `registerReactComponent(components)` 把 React 组件登记到 `<z-use-xxx>` 元素自动初始化体系。
- 不要直接引入 React，**用 Preact**：`vite.config.ts` 把 `jsx` 注入为 `import {h} from 'preact'`，`jsxFactory: h`，`jsxFragment: Fragment`；`lib/*/tsconfig.json` 设 `"jsxImportSource": "preact"`。

### 路径别名与 lib 解析

`vite.config.ts` 注册了下列别名（写代码时直接引用即可）：

- `@zui/<name>` → `lib/<name>`（workspace symlinks 也行）
- `zui-dev` → `dev/`，`zui-config` → `config/`
- `~/` → 仓库根，`@/` → 当前 lib 根（会优先用当前 lib 的源文件解析）
- exts 中 `sourceType === 'exts'` 的库会按其 `name` 自动注册别名

`scripts/libs/query.ts` 的 `getLibs()` 是发现/合并 build-in 与 exts 库的统一入口；同时会做缓存（`.cache/`）。

### 文档与样式

- 文档源在每个 `lib/<name>/docs/lib/components/*.md`，`pnpm docs:dev` 会先跑 `scripts/docs/prepare.ts` 同步到 `docs/_`，再启 VitePress。监听阶段 `scripts/docs/watch.ts` 会增量同步。
- Tailwind 启用 **prefix `-`**（见 `tailwind.config.cjs`）。所以正常 utility 类是 `-flex -p-4 -bg-primary-800` 这种带前导短横的写法，不要把短横当成 bug 删掉。深色模式走 `media`，但开发首页 `index.html` 中也有 `class="dark"` 切换脚本。
- 全局 PostCSS 走 `postcss.config.cjs`，支持 `--cssnano`、`--rem2px` 等构建参数（通过 env 透传）。

## 代码风格与约定

- ESLint 配置 `eslint.config.js`：基于 `@stylistic` 自定义化 —— **4 空格缩进**、**末尾分号**、**1tbs 大括号**、对象大括号紧贴（`{a: 1}` 而非 `{ a: 1 }`）、`quoteProps: as-needed`。提交前跑 `pnpm lint` 或依赖 vite-plugin-eslint。
- 未使用变量以 `_` 开头可豁免（`argsIgnorePattern: '^_'`）。
- TS 严格模式开启，但 `noImplicitReturns: false`；类型路径走 `@zui/*` 别名。

## 代码提交

代码提交参考 `.claude/commands/zui-commit.md`。

## 容易踩的坑

- 修改某 lib 后想看效果：用 `pnpm dev` + 浏览器访问 `/<lib-name>/`，不要去找全局 demo 页；HMR 走自定义事件 `zui:lib-page-updated`（见 `src/main.ts`）。
- 想看打包后的整体结果：跑 `pnpm build`，输出在 `dist/dev/`（默认 outDir）。`build/` 是中间目录，每次构建会被清空。
- 引用其他 lib 走 `@zui/<name>`，**不要写相对路径**穿过 lib 边界，否则 build config 解析（`isExportPathInLib`）会拒绝。
- `lib/<name>/dev.ts` 里使用的 `onPageLoad`/`onPageUpdate` 是 `dev/` 注入的全局函数，仅在开发模式生效。
- exts/ 是 gitignored，CI 上没有；写代码不要硬依赖某个 ext lib 的存在。
