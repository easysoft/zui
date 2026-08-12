# ZUI 3

[English](./README.en.md)

> 开箱即用、可组合、可定制的 Web UI 组件库。

ZUI 3 不绑定特定的 JavaScript 框架，在原生 Web 项目以及各类前端框架中都可以使用。它同时提供 CSS 工具类、CSS 组件与 JavaScript 组件，并支持通过浏览器脚本、ES Module 或定制构建引入。

[官网](https://openzui.com/) · [开发文档](https://easysoft.github.io/zui/dev/) · [GitHub](https://github.com/easysoft/zui) · [更新日志](./CHANGELOG.md)

## 核心特性

- **框架无关**：对外提供原生 DOM API，可以独立使用，也可以集成到现有应用中。
- **组件丰富**：覆盖按钮、表单、导航、卡片、表格、下拉菜单、对话框、数据表格和文件上传等常见场景。
- **风格统一**：使用 CSS 变量管理全局设计配置，支持主题定制与深色模式。
- **灵活引入**：提供 UMD 和 ESM 产物，既可以直接通过 `<script>` 使用，也可以配合现代构建工具。
- **可组合构建**：每个功能都是独立的 workspace 库，可以按项目需求生成定制组合版本。

## Codex 插件

本仓库也是一个仅包含技能的 Codex 插件，提供两种互补工作流：

- `$zui`：识别现有项目的 ZUI 版本和接入方式，并安全地安装、集成、重构或排查 ZUI 3。
- `$zui-build`：从需求描述创建无需安装依赖或构建工具即可运行的独立 ZUI 3 页面或小型静态站点。

### 从 GitHub marketplace 安装

先添加本仓库提供的 marketplace，再安装 `zui` 插件：

```sh
codex plugin marketplace add easysoft/zui
codex plugin add zui@zui
```

安装后请重新启动 Codex，并新建一个会话，让新会话加载插件中的技能。

在已有应用中使用 ZUI 时，可以这样开始：

```text
使用 $zui 检查当前项目，并按现有技术栈接入 ZUI 3。
```

需要从零创建独立页面时，使用：

```text
使用 $zui-build 根据这份需求创建一个可直接运行的响应式页面：……
```

## 快速开始

### 通过 CDN 使用

将 ZUI 的 CSS 和 JavaScript 引入页面，即可使用组件样式与全局 `zui` 对象：

```html
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZUI 3 Demo</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zui/dist/zui.css">
</head>
<body>
    <button id="helloZui" type="button" class="btn primary">Hello ZUI</button>

    <script src="https://cdn.jsdelivr.net/npm/zui/dist/zui.js"></script>
    <script>
        document.querySelector('#helloZui').addEventListener('click', () => {
            zui.Messager.show('ZUI 3 已就绪！');
        });
    </script>
</body>
</html>
```

> 生产环境中建议在 CDN 地址中固定明确的 ZUI 版本。

### 通过包管理器使用

```sh
pnpm add zui
```

```js
import 'zui/css';
import {Messager} from 'zui';

Messager.show('ZUI 3 已就绪！');
```

完整的引入方式、组件 API 与示例请查看 [ZUI 文档](https://openzui.com/)。

## 源码开发

### 环境要求

- Node.js 18+
- pnpm 8+

### 启动本地开发服务

```sh
git clone https://github.com/easysoft/zui.git
cd zui
pnpm install
pnpm dev
```

开发服务默认运行在 `http://localhost:5173/`。访问 `http://localhost:5173/<lib-name>/` 可以直接打开指定库的调试页，例如 `http://localhost:5173/button/`。

### 常用命令

| 命令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动内置库的开发服务 |
| `pnpm dev:exts` | 启动包含 `exts/` 扩展库的开发服务 |
| `pnpm lint` | 运行 ESLint 检查 |
| `pnpm build` | 构建完整的 ZUI 产物 |
| `pnpm docs:dev` | 准备并启动 VitePress 文档服务 |
| `pnpm docs:build` | 构建文档站点 |

本项目以各库的 `dev.ts` 作为交互调试入口。修改 `lib/<lib-name>/` 后，应在对应的单库页面验证功能与样式。

### 定制构建

构建命令可以按需组合多个库：

```sh
pnpm build -- --lib="button dropdown" --name=zui-custom
```

产物将输出到 `dist/zui-custom/`。更多构建选项请查看 [定制构建文档](https://easysoft.github.io/zui/dev/guide/customize/build.html)。

## 仓库结构

| 目录 | 职责 |
| --- | --- |
| `lib/` | 内置组件、辅助 API、样式、调试页与文档源文件 |
| `config/` | 共享的 Tailwind 主题配置 |
| `dev/` | 本地调试页的开发辅助工具 |
| `docs/` | VitePress 文档站点与基础文档 |
| `scripts/` | 构建、文档同步和库元数据处理脚本 |
| `exts/` | 通过 `pnpm extend-lib <path>` 接入的本地扩展库 |

## 技术栈

ZUI 3 使用 [TypeScript](https://www.typescriptlang.org/)、[Preact](https://preactjs.com/)、[Cash](https://github.com/fabiospampinato/cash)、[Tailwind CSS](https://tailwindcss.com/)、[Vite](https://vitejs.dev/) 和 [VitePress](https://vitepress.dev/) 开发。

## 参与贡献

欢迎通过 [Issue](https://github.com/easysoft/zui/issues) 报告问题或提交建议，也欢迎提交 Pull Request。提交代码前，请至少运行 `pnpm lint`，并在对应的单库调试页中完成验证。

> 正在寻找 ZUI 1？请访问 [ZUI 1 官网](https://openzui.com/1/) 或 [`zui1` 分支](https://github.com/easysoft/zui/tree/zui1)。

## 开源许可

ZUI 3 基于 [MIT License](./LICENSE) 开源。
