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

在 ZUI 3 中使用了一些精心挑选的第三方库，这些库通常足够小巧但实用：

* [preact](https://preactjs.com/) - 基于 Preact 实现了大部分 JS 组件，通过封装支持原生调用
* [cash-dom](https://hmble.github.io/cash/) - 提供了大量辅助方法方便操作 DOM，同时提供了对 jQuery 的兼容实用方式
* [floating UI](https://floating-ui.com/) - 实现浮动交互定位，例如下拉菜单、工具提示等
* [tinykeys](https://github.com/jamiebuilds/tinykeys/) - 实现快捷键功能

## 技术栈

下列版本是参与源码开发和构建 ZUI 3 的工具要求，不是应用使用 ZUI 运行时产物的要求：

* Node.js 22.13+
* 包管理器：[pnpm 11.21.0](https://pnpm.io/zh/)
* 构建工具：[Vite](https://cn.vitejs.dev/)
* CSS 工具库：[TailwindCSS](https://tailwindcss.com/)
* 静态文档网站生成：[VitePress](https://vitepress.dev/)
* TypeScript 5.9+
* 字体图标生成：[Fantasticon](https://github.com/tancredi/fantasticon)
* JS 组件开发 [preact.js](https://preactjs.com/)
