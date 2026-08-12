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

- Node.js 18+
- pnpm 8+

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
| `pnpm build` | Build the complete ZUI distribution |
| `pnpm docs:dev` | Prepare and start the VitePress documentation server |
| `pnpm docs:build` | Build the documentation site |

Each library uses its `dev.ts` file as the interactive playground entry point. After changing `lib/<lib-name>/`, verify its behavior and styles on the corresponding library page.

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
| `exts/` | Local extension libraries added with `pnpm extend-lib <path>` |

## Technology

ZUI 3 is built with [TypeScript](https://www.typescriptlang.org/), [Preact](https://preactjs.com/), [Cash](https://github.com/fabiospampinato/cash), [Tailwind CSS](https://tailwindcss.com/), [Vite](https://vitejs.dev/), and [VitePress](https://vitepress.dev/).

## Contributing

Use [GitHub Issues](https://github.com/easysoft/zui/issues) to report bugs or propose improvements. Pull requests are also welcome. Before submitting code, run at least `pnpm lint` and verify your changes on the corresponding library playground.

> Looking for ZUI 1? Visit the [ZUI 1 website](https://openzui.com/1/) or the [`zui1` branch](https://github.com/easysoft/zui/tree/zui1).

## License

ZUI 3 is available under the [MIT License](./LICENSE).
