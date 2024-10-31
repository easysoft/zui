# ZUI 3

ZUI 3 是一个全新的开源 UI 组件库，提供了丰富的实用组件，并提供自由的定制使用方式，不依赖任何 JavaScript 框架，可以在任何 Web 应用中通过原生的方式使用。

访问 https://openzui.com/ 来提前预览组件库。

👉 如果你需要访问 ZUI 1，请访问 https://openzui.com/1/ ，ZUI 1 源码已经转移到 `zui1` 分支。
如需了解开发中的文档，请访问：https://easysoft.github.io/zui/dev/ 。

## 特性

* 📡 **统一的 UI 配置**：基于 CSS 变量实现的全局 UI 配置，为组件提供了统一的风格基础，支持深色模式，方便定制主题；
* 👔 **丰富的 CSS 工具类**：基于 [Tailwind CSS](https://tailwindcss.com/) 提供了丰富的 CSS 工具类，包括特别的语义化外观工具类，轻松实现常见布局、文字排版、动画、外观定义；
* ⭐️ **实用的 CSS 组件**：提供了大量实用的 CSS 组件，无需借助 JS 即可实现界面基本功能，例如按钮、表单、导航、卡片、表格等；
* 💎 **强大的 JS 组件**：通过 JS 实现很多功能强大的组件，包括下拉菜单、工具提示、对话框、数据表格、文件上传等；
* 📦 **使用灵活**：不依赖具体的框架，所有 CSS 工具类开箱即用，所有 JS 组件支持原生调用，丰富的引入方式，支持通过 ESM 导入，或者直接在浏览器中引用整个 JS 和 CSS，支持打包定制自己的组合版本。

## 快速预览

### 使用 CSS 工具类

```html
<button class="btn primary">ZUI 3</button>
<button class="btn primary-outline">Read more</button>
```

### 使用 JS 组件

```html
<menu id="colorPicker"></menu>

<script>
const colorPicker = new ColorPicker('#colorPicker', {
    heading: '选择颜色',
    defaultValue: '#0ea5e9',
});
</script>
```

## 开发

### 安装

```sh
$ pnpm install
```

### 启动开发服务器

```sh
$ pnpm dev
```

### 构建

```sh
$ pnpm build
```

### 文档开发预览

```sh
$ pnpm docs:dev
```

### 文档构建

```sh
$ pnpm docs:build
```

## 技术栈

* Node.js 18+
* 包管理器：[pnpm](https://pnpm.io/zh/)
* 构建工具：[Vite](https://cn.vitejs.dev/)
* CSS 工具库：[TailwindCSS](https://tailwindcss.com/)
* 静态文档网站生成：[VitePress](https://vitepress.dev/)
* TypeScript 4.5+
* 字体图标生成：[Fantasticon](https://github.com/tancredi/fantasticon)
* JS 组件开发 [preact.js](https://preactjs.com/)
