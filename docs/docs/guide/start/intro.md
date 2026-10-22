# 介绍

ZUI 3 是一个开源 UI 组件库，提供了大量实用组件，支持最大限度的定制，不依赖任何其他 JS 框架，可以在任何 Web 应用中通过原生的方式使用。

## 功能特性

* <svg class="feature-icon" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 3v18M12 3v18M20 3v18M1 7h6M9 16h6M17 10h6" /></svg> **统一的 UI 配置**：基于 CSS 变量实现的全局 UI 配置，为组件提供了统一的风格基础，支持深色模式，方便定制主题；
* <span class="example-icon example-icon-magic" aria-hidden="true" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M4%2021L18%207l3%203L7%2024M6%201v6M3%204h6M17%201v3M15%203h4%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></span> **丰富的 CSS 工具类**：基于 [Tailwind CSS](https://tailwindcss.com/) 提供了丰富的 CSS 工具类，包括特别的语义化外观工具类，轻松实现常见布局、文字排版、动画、外观定义；
* <span class="example-icon example-icon-star" aria-hidden="true" style="display:inline-block;width:1em;height:1em;background-color:currentColor;mask:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M12%202l3%206%207%201-5%205%201%208-6-4-6%204%201-8-5-5%207-1z%22%20fill%3D%22none%22%20stroke%3D%22black%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E) center / contain no-repeat"></span> **实用的 CSS 组件**：提供了大量实用的 CSS 组件，无需借助 JS 即可实现界面基本功能，例如按钮、表单、导航、卡片、表格等；
* <svg class="feature-icon" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12l5 7-11 12L1 10zM1 10h22M6 3l6 19 6-19" /></svg> **强大的 JS 组件**：通过 JS 实现很多功能强大的组件，包括下拉菜单、工具提示、对话框、数据表格、文件上传等；
* <svg class="feature-icon" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7v10l10 5 10-5V7zM2 7l10 5 10-5M12 12v10" /></svg> **使用灵活**：不依赖具体的框架，所有 CSS 工具类开箱即用，所有 JS 组件支持原生调用，丰富的引入方式，支持通过 ESM 导入，或者直接在浏览器中引用整个 JS 和 CSS，支持打包定制自己的组合版本。

## 与 ZUI1 的区别

相比较 ZUI 1，ZUI 3 是一个全新的更加现代的 UI 组件库，主要有如下区别：

| 区别         | ZUI 1                      | ZUI 3                                  |
| ------------ | -------------------------- | -------------------------------------- |
| 外部依赖     | jQuery                     | 无                                     |
| 内部依赖     | Bootstrap 3                | 无                                     |
| 网格布局实现 | `float`                    | `Flex`                                 |
| 工具类       | 部分样式、布局、排版工具类 | 丰富的样式、布局、排版、交互效果工具类 |
| 主题定制     | CSS 覆盖                   | CSS 变量                               |
| CSS 组件     | 大部分由 Bootstrap 提供    | 全新的 CSS 组件，更方便定制外观        |
| JS 组件      | 基于 jQuery 实现           | 基于 Preact 实现，功能更强大           |
