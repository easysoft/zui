# ZUI 3

[简体中文](./README.md)

> A ready-to-use, composable, and customizable Web UI library.

ZUI 3 is not tied to a specific JavaScript framework. It works in vanilla Web projects as well as applications built with any front-end framework. It provides CSS utilities, CSS components, and interactive JavaScript components, with support for browser scripts, ES modules, and custom builds.

[Website](https://openzui.com/) · [Development Docs](https://easysoft.github.io/zui/dev/) · [GitHub](https://github.com/easysoft/zui) · [Changelog](./CHANGELOG.md)

## Core Features

- **Framework agnostic**: Native DOM APIs work on their own and integrate easily into existing applications.
- **Comprehensive component set**: Covers common scenarios such as buttons, forms, navigation, cards, tables, dropdowns, dialogs, data grids, and file uploads.
- **Consistent design**: Global design tokens are managed with CSS variables, with built-in support for theme customization and dark mode.
- **Flexible consumption**: UMD and ESM bundles work with both classic `<script>` tags and modern build tools.
- **Composable builds**: Each feature is an independent workspace library, allowing projects to create bundles that contain only the libraries they need.

## Codex Plugin

This repository is also a skills-only Codex plugin with two complementary workflows:

- `$zui`: Detect the ZUI version and consumption mode in an existing project, then safely install, integrate, refactor, or troubleshoot ZUI 3.
- `$zui-build`: Turn a brief into a standalone ZUI 3 page or small static site that runs without installing dependencies or using a build tool.

### Install from the GitHub marketplace

Add the marketplace provided by this repository, then install the `zui` plugin:

```sh
codex plugin marketplace add easysoft/zui
codex plugin add zui@zui
```

After installation, restart Codex and open a new conversation so the new session loads the plugin skills.

For an existing application, start with a prompt such as:

```text
Use $zui to inspect this project and integrate ZUI 3 with its existing stack.
```

To create a standalone page from scratch, use:

```text
Use $zui-build to create a runnable responsive page from this brief: ...
```

## Quick Start

### Use the CDN

Include the ZUI CSS and JavaScript files to use its component styles and the global `zui` object:

```html
<!doctype html>
<html lang="en">
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
            zui.Messager.show('ZUI 3 is ready!');
        });
    </script>
</body>
</html>
```

> Pin ZUI to an explicit version in CDN URLs when using it in production.

### Use a Package Manager

```sh
pnpm add zui
```

```js
import 'zui/css';
import {Messager} from 'zui';

Messager.show('ZUI 3 is ready!');
```

See the [ZUI documentation](https://openzui.com/) for all installation methods, component APIs, and examples.

## Source Development

### Requirements

- Node.js 22.13+
- pnpm 11.21.0

### Start the Local Development Server

```sh
git clone https://github.com/easysoft/zui.git
cd zui
pnpm install
pnpm dev
```

The development server runs at `http://localhost:5173/` by default. Open `http://localhost:5173/<lib-name>/` to go directly to a library playground, for example `http://localhost:5173/button/`.

### Common Commands

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server with built-in libraries |
| `pnpm dev:exts` | Start the development server with libraries from `exts/` |
| `pnpm lint` | Run ESLint checks |
| `pnpm typecheck` | Type-check source, tooling, and tests |
| `pnpm test` | Run Vitest unit and DOM component tests |
| `pnpm test:coverage` | Run unit and DOM tests with coverage |
| `pnpm test:build` | Verify representative ESM, UMD, CSS, source map, ZIP, and external Cash outputs |
| `pnpm test:e2e` | Run Playwright browser tests in Chromium |
| `pnpm test:e2e:all` | Run browser tests in Chromium, Firefox, and WebKit |
| `pnpm check` | Run lint, typecheck, unit/DOM tests, and skills tests |
| `pnpm build` | Build the complete ZUI distribution |
| `pnpm docs:dev` | Prepare and start the VitePress documentation server |
| `pnpm docs:build` | Build the documentation site |

Each library uses its `dev.ts` file as the interactive playground entry point. After changing `lib/<lib-name>/`, verify its behavior and styles on the corresponding library page.

See the [automated testing guide](./docs/docs/guide/customize/testing.md) for the test layers, browser installation, and visual baseline workflow.

### Custom Builds

Pass a space-separated list of libraries to create a custom bundle:

```sh
pnpm build -- --lib="button dropdown" --name=zui-custom
```

The generated files are written to `dist/zui-custom/`. See the [custom build documentation](https://easysoft.github.io/zui/dev/guide/customize/build.html) for additional options.

## Repository Layout

| Directory | Purpose |
| --- | --- |
| `lib/` | Built-in components, helper APIs, styles, playgrounds, and documentation sources |
| `config/` | Shared Tailwind theme configuration |
| `dev/` | Development utilities for local playgrounds |
| `docs/` | VitePress documentation site and base documentation |
| `scripts/` | Build, documentation synchronization, and library metadata scripts |
| `tests/` | Unit, DOM, distribution-consumer, and Playwright browser tests |
| `exts/` | Local extension libraries added with `pnpm extend-lib <path>` |

## Technology

ZUI 3 is built with [TypeScript](https://www.typescriptlang.org/), [Preact](https://preactjs.com/), [Cash](https://github.com/fabiospampinato/cash), [Tailwind CSS](https://tailwindcss.com/), [Vite](https://vitejs.dev/), and [VitePress](https://vitepress.dev/).

## Contributing

Use [GitHub Issues](https://github.com/easysoft/zui/issues) to report bugs or propose improvements. Pull requests are also welcome. Before submitting code, run `pnpm check`, then add the representative build, browser, and library-playground checks that match the change.

> Looking for ZUI 1? Visit the [ZUI 1 website](https://openzui.com/1/) or the [`zui1` branch](https://github.com/easysoft/zui/tree/zui1).

## License

ZUI 3 is available under the [MIT License](./LICENSE).
