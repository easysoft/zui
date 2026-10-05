# 兼容性

## 支持的浏览器

ZUI 3 的发布产物以以下浏览器版本为最低编译目标：

* Chrome：107+
* Firefox：104+
* Safari：16+
* Edge：107+
* Chrome for Android：126+
* iOS Safari：16+

持续集成会使用项目锁定的 Playwright 版本，在最新版 Chromium、Firefox 和 WebKit 引擎上运行 smoke、交互和自动化可访问性检查。Playwright 的当前引擎检查不能替代最低版本、Android 或真实 iOS 设备验证；涉及兼容性边界的改动仍需在对应环境人工确认。

## 用到的第三方库

以下清单覆盖内置库运行时使用的第三方库，包括间接依赖和按需加载的资源；具体包含哪些库取决于构建时选择的组件。

* [Preact](https://preactjs.com/)（`preact`）- JS 组件渲染，通过封装支持原生调用，也复用了其 Portal 实现。
* [Preact Signals](https://github.com/preactjs/signals)（`@preact/signals`、`@preact/signals-core`）- 响应式状态、计算值与副作用。
* [Cash](https://github.com/fabiospampinato/cash)（`cash-dom`）- 提供类 jQuery 的 DOM 操作能力。
* [Floating UI](https://floating-ui.com/)（`@floating-ui/dom`、`@floating-ui/core`、`@floating-ui/utils`）- 下拉菜单、弹出层等浮动元素的定位。
* [TanStack Query](https://github.com/TanStack/query)（`@tanstack/query-core`）- 查询缓存、异步数据请求、分页查询与数据变更。
* [TanStack Virtual](https://github.com/TanStack/virtual)（`@tanstack/virtual-core`）- 虚拟列表的可见区域计算与滚动管理。
* [htm](https://github.com/developit/htm) 与 [vhtml](https://github.com/developit/vhtml) - 为 `jsx` 和 `html` 提供模板字符串渲染能力。
* [tinykeys](https://github.com/jamiebuilds/tinykeys) - 快捷键绑定。
* [DOMPurify](https://github.com/cure53/DOMPurify)（`dompurify`）- JSON UI 中 HTML 内容的净化。
* [Split.js](https://github.com/nathancahill/split)（`split.js`）- 分割面板布局与尺寸调整。
* [SortableJS](https://github.com/SortableJS/Sortable)（`sortablejs`）- 拖拽排序，运行时按需加载分发包中的 `sortable/sortable.min.js`。

样式与图标还复用了 css.gg 的历史版 spinner 源码、Material Design Icons 的 `check-bold`，以及 Font Awesome、IcoMoon Free、Brankic 1979、Steadysets 和 Taobao 的部分字形。各项授权及尚待核实的图标来源见[第三方依赖](/guide/about/dependencies)。开发、构建和测试工具不计入此清单。

## 技术栈

下列版本是参与源码开发和构建 ZUI 3 的工具要求，不是应用使用 ZUI 运行时产物的要求：

* Node.js 22.13+
* 包管理器：[pnpm 12.5.1](https://pnpm.io/zh/)
* 构建工具：[Vite](https://cn.vitejs.dev/)
* CSS 工具库：[TailwindCSS](https://tailwindcss.com/)
* 静态文档网站生成：[VitePress](https://vitepress.dev/)
* TypeScript 5.9+
* 字体图标生成：[Fantasticon](https://github.com/tancredi/fantasticon)
* JS 组件开发 [preact.js](https://preactjs.com/)
