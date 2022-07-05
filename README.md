# ZUI 3 开发指南

## 组件库

ZUI 3 使用组件库来管理组件。库中的每个组件在独立的源码和资源目录中开发（例如 `lib/button`），可以被独立打包和使用。

组件库采用 [pnpm 的工作空间](https://pnpm.io/zh/workspaces)实现，每个组件作为一个单独的包进行管理，包含独立的版本号和依赖定义。

### 组件名称

组件名称使用英文小写字母、数字和 `_` 下划线组成，但只能以小写字母开头，名称应该尽可能简短且贴合组件功能，例如 `button`，通常下划线用于连接多个有意义的单词，例如 `input_group`。

### 组件目录结构

每个组件根据其名称在工作空间根目录 `lib/` 下有一个以组件名称命名的目录来管理源码、文档和配置相关文件，通常目录结构如下：

```sh
component_name         # 组件目录
├── package.json       # 组件元信息定义文件（兼容 npm 包定义）
├── index.html         # 组件开发和测试所使用的 HTML 文件
├── README.md          # 组件开发和测试的说明文件
├── src/               # 源码目录
│   ├── vars.css       # 组件用到的 CSS 变量定义
│   ├── style.css      # 组件用到的 CSS 样式定义
│   └── main.ts        # 组件 JS 模块入口文件，也是作为 rollup 打包时的入口文件
├── doc/               # 组件文档目录
│   ├── index.md       # 组件文档主要页面
│   └── xxxxx.md       # 组件文档其他页面
├── test/              # 测试文件目录
│   └── test.ts        # 测试脚本
```


### package.json

`package.json` 文件用于描述组件的元信息，格式兼容 [npm 包定义文件](https://docs.npmjs.com/cli/v7/configuring-npm/package-json/)，下面说明用于描述组件新的关键属性：

| 属性           | 描述                                                         |
| -------------- | ------------------------------------------------------------ |
| `name`         | 组件名称，根据工作空间约定，名称需要统一添加前缀 ` @zui`，例如 `'@zui/dropdown'` |
| `description`  | 组件显示名称，例如 `"Dropdown Menu"`                         |
| `version`      | 版本，例如 `"1.0.0"`                                         |
| `keywords`     | 关键词，例如 `["button", "menu", "dropdown"]`                |
| `main`         | 组件模块入口文件，默认为 `"src/main.ts"`                     |
| `dependencies` | 该组件依赖的其他组件，例如 `{"@zui/icon": "workspace:^1.0.0"}` |
| `browserslist` | 使用 [browserslist](https://github.com/browserslist/browserslist) 语法声明该组件支持的浏览器，例如 `["not ie < 11", ">0.2%"]` |

其他属性与 npm 中的定义一致，例如 `homepage`、`license`、`author`

### index.html

每个组件都应该包含一个 `index.html` 文件，该文件引用当前组件的入口文件 `/src/main.ts`，并提供使用该组件的相关示例代码。在开发时会通过 vite 打开该文件进行开发调试。

该文件的另一个作用是进行自动化测试，当改组件包含 UI 呈现部分时，需要在该文件中定义完整使用示例，方便进行自动化测试。

下面为一个 `index.html` 文件示例：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="../../favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button - ZUI</title>
  </head>
  <body>
    <div id="app">
      <button type="btn" class="btn">按钮</button>
    </div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

### 源码

组件相关的源码存放在 `src/` 目录，通常包含如下几个文件：

**main.ts**

该组件的模块入口文件，作为 rollup 打包时的入口。下面为一个示例：

```ts
import './style.css';    // 引入该组件用到的 CSS 文件
import './dropdown.ts';  // 引入该组件的 JS 文件
```

**vars.css**

定义该组件可以被重新设置的 CSS 变量，该文件通常被 `style.css` 导入使用。例如：

```css
:root {
  --btn-size-base: 32px;
  --btn-size-sm: 24px;
  --btn-size-xs: 20px;
  --btn-size-lg: 40px;
  --btn-size-xl: 48px;
}
```

**style.css**

定义该组件相关样式。例如：

```css
@import url('./vars.css');

.btn {
  color: var(--btn-size-base)
}
```

### 依赖

组件依赖包括如下几种情况：

**基础公共依赖**

这是所有组件都需要的依赖，不需要声明。目前公共依赖包括：`tailwindcss`。

**内部依赖**

组件库内部依赖，例如 `dropdown` 依赖 `context-menu`。内部依赖需要在组件对应的 package.json 文件中通过 `dependencies` 属性进行声明，例如：

```json
{
  "dependencies": {
    "@zui/icon": "workspace:^1.0.0"
  }
}
```

**外部依赖**

外部依赖通常为 npm 上的包，声明方式与通用做法一致，也需要在组件对应的 package.json 文件中通过 `dependencies` 属性进行声明，例如：

```json
{
  "dependencies": {
    "jquery": "^3.6.0"
  }
}
```

## 开发

### 项目安装

执行：

```sh
$ pnpm install
```

### 调试

执行下面的命令打开一个 Web 服务来进入调试模式：

```sh
$ pnpm dev
```

开发时启动的 Web 服务地址通常为 http://localhost:3000/ ，要对特定组件进行调试开发，只需要添加路径 `lib/component_name` 即可，例如开发调试按钮页面地址为：http://localhost:3000/lib/button 。

### 打包

执行：

```
$ pnpm build
```

## 目录结构

```
zui/                   # 项目根目录
├── package.json
├── index.html         # 开发调试时的入口文件
├── README.md
├── lib/               # 组件库目录
├── src/               # 基础源码目录
├── docs/              # 文档网站目录
├── test/              # 测试脚本目录
```

## 技术栈

* Node.js 14+
* 包管理器：[pnpm](https://pnpm.io/zh/)
* 构建工具：[vite](https://cn.vitejs.dev/)
* CSS 工具库：[TailwindCSS](https://tailwindcss.com/)
* TypeScript 4.5+
