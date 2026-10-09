# 第三方依赖

本页列出当前内置库 `lib/*` 实际使用的第三方运行时依赖、随组件使用的第三方源码和图标资源，以及开发、构建、测试和文档站的第三方依赖。自定义构建可能只包含部分运行时依赖与资源。

## 运行时依赖

| 项目 | 授权协议与版权文件 | 在 ZUI 中的使用方式 |
| --- | --- | --- |
| [Preact](https://preactjs.com/)（`preact`） | [MIT](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-preact.txt) | JS 组件渲染；`core` 中的 Portal 实现也改编自 Preact compat 源码 |
| [Preact Signals](https://github.com/preactjs/signals)（`@preact/signals`、`@preact/signals-core`） | [MIT](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-preact-signals.txt) | `core` 导出的响应式状态、计算值与副作用；`signals-core` 是其运行时依赖 |
| [Cash](https://github.com/fabiospampinato/cash)（`cash-dom`） | [MIT](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-cash-dom.txt) | `core` 的 DOM 操作基础，提供类 jQuery 的辅助方法 |
| [Floating UI](https://floating-ui.com/)（`@floating-ui/dom`、`@floating-ui/core`、`@floating-ui/utils`） | [MIT](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-floating-ui.txt) | 下拉菜单、弹出层和选择器的浮动定位；包含 `dom` 依赖的 `core`、`utils` |
| [TanStack Query](https://github.com/TanStack/query)（`@tanstack/query-core`） | [MIT](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-tanstack-query-core.txt) | `core` 中的查询缓存、异步请求、无限分页查询与数据变更 |
| [TanStack Virtual](https://github.com/TanStack/virtual)（`@tanstack/virtual-core`） | [MIT](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-tanstack-virtual-core.txt) | `virtualize` 的可见区域计算与滚动管理 |
| [htm](https://github.com/developit/htm)（`htm`） | [Apache-2.0](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-htm.txt) | 解析模板字符串，与 Preact、vhtml 分别绑定为 `jsx`、`html` |
| [vhtml](https://github.com/developit/vhtml)（`vhtml`） | [MIT](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-vhtml.txt) | 将 `html` 模板渲染为 HTML 字符串 |
| [tinykeys](https://github.com/jamiebuilds/tinykeys)（`tinykeys`） | [MIT](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-tinykeys.txt) | `core` 中的快捷键绑定与按键处理 |
| [DOMPurify](https://github.com/cure53/DOMPurify)（`dompurify`） | [Apache-2.0](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-dompurify.txt) 或 [MPL-2.0](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-dompurify-MPL.txt) | 净化 `json-ui` 接收的 HTML 内容；保留上游双重授权原文 |
| [Split.js](https://github.com/nathancahill/split)（`split.js`） | [MIT](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-split.js.txt) | `split` 的分割面板布局与尺寸调整 |
| [SortableJS](https://github.com/SortableJS/Sortable)（`sortablejs`） | [MIT](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-sortablejs.txt) | 拖拽排序；使用随库提供的 1.15.0 脚本，运行时按需加载 `sortable/sortable.min.js` |

## 复用源码与图标资源

这里记录直接用于组件的第三方源码与字形。ZenIcon 的来源依据仓库中的图标元数据、实际选中字形及字体文件核对。

| 项目 | 授权协议与版权文件 | 在 ZUI 中的使用方式 |
| --- | --- | --- |
| [css.gg](https://github.com/astrit/css.gg/tree/8a6913598e4e2b10aaf69b9cb7e10e7213828965) | [MIT（所参考的历史版本）](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-css.gg.txt) | `css-icons` 中的 spinner 样式，2022 年引入并适配为 ZUI 样式；此处不代表 css.gg 后续版本的授权 |
| [Material Design Icons / Pictogrammers](https://github.com/Templarian/MaterialDesign) | [Apache-2.0（图标）](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-material-design-icons.txt) | `checkbox` 样式中内嵌的 `check-bold` SVG，设置白色填充后作为背景图使用 |
| [Font Awesome](https://fontawesome.com/v4/) | [SIL OFL 1.1（字体）](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-font-awesome.txt) | ZenIcon 中来自 Dave Gandy 的部分字形，经筛选、重命名后组合进字体 |
| [IcoMoon Free](https://github.com/Keyamoon/IcoMoon-Free) | [CC BY 4.0 或 GPL](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-icomoon-free.txt) | 来自 Keyamoon 的 `spinner-snake`、`spinner-indicator`、`check-board`、`firefox`、`opera`、`node`、`stack` 字形；版权文件保留上游授权声明并附 CC BY 4.0 全文 |
| Brankic 1979 | [Custom，原始条款待补](https://github.com/easysoft/zui/blob/main/licenses/NOTICE-zenicon-sources.txt) | ZenIcon 中的 `resize`、`collapse-full`、`yingyang` / `taiji` 字形 |
| [Steadysets](https://dribbble.com/shots/929153-Steady-set-of-icons) | [Custom，完整条款待补](https://github.com/easysoft/zui/blob/main/licenses/NOTICE-zenicon-sources.txt) | ZenIcon 中的 `window`、`window-alt`、`carousel` 字形；保留元数据中的作者信息和原作者页面的使用声明 |
| Taobao / iconfont | [原始授权待核实](https://github.com/easysoft/zui/blob/main/licenses/NOTICE-zenicon-sources.txt) | ZenIcon 中的支付宝、支付宝方形与淘宝字形；仓库只记录了通用来源网址，缺少具体图标链接和授权条款 |

版权文件统一保存在仓库的 [licenses](https://github.com/easysoft/zui/tree/main/licenses) 目录。Brankic 1979、Steadysets 和 Taobao 图标的缺失信息已记录在来源说明中，仍需补充原始授权凭据，不能将它们视为已完成授权核实。

## 开发、构建与测试依赖

以下汇总根目录、内置库和文档工作区声明的第三方直接开发依赖，并包含文档站使用的 Vue。SortableJS 虽声明在开发依赖中，其随库脚本会在运行时加载，已列入上方运行时清单。

| 用途 | 第三方依赖 |
| --- | --- |
| 包管理器 | `pnpm` 12.10.1（含 `@pnpm/exe.*` 平台包）；[MIT 版权文件](https://github.com/easysoft/zui/blob/main/licenses/LICENSE-pnpm.txt) |
| 开发服务器与编译 | `vite`、`@preact/preset-vite`、`typescript`、`tsx` |
| 构建脚本与辅助工具 | `fs-extra`、`fast-glob`、`chokidar`、`colorette`、`minimist`、`jszip`、`pinyin-pro` |
| CSS 生成与处理 | `tailwindcss`、`@mertasan/tailwindcss-variables`、`postcss`、`postcss-import`、`postcss-inset`、`postcss-rem-to-pixel`、`autoprefixer`、`cssnano` |
| 代码检查 | `eslint`、`@eslint/js`、`@stylistic/eslint-plugin`、`@typescript-eslint/parser`、`typescript-eslint` |
| 单元、DOM、浏览器与可访问性测试 | `vitest`、`@vitest/coverage-v8`、`jsdom`、`@testing-library/jest-dom`、`@testing-library/preact`、`@testing-library/user-event`、`@playwright/test`、`@axe-core/playwright`、`jquery` |
| 文档站与调试示例 | `vue`、`vitepress`、`vitepress-plugin-tabs`、`markdown-it`、`markdown-it-anchor`、`markdown-it-toc-done-right`、`highlight.js`、`@faker-js/faker`、`js-yaml` |
| TypeScript 类型声明 | `@types/babel__core`、`@types/fs-extra`、`@types/glob`、`@types/js-yaml`、`@types/jsdom`、`@types/markdown-it`、`@types/minimist`、`@types/node`、`@types/sortablejs`、`@types/vhtml` |

其中 `@types/sortablejs` 和 `@types/vhtml` 也由 npm 发布包声明为依赖，供消费方检查 ZUI 的类型声明。
