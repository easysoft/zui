# ZUI 3 开发指南

## 组件库

ZUI 3 使用组件库来管理组件。库中的每个组件在独立的源码和资源目录中开发（例如 `lib/button`），可以被独立打包和使用。

组件库采用 [pnpm 的工作空间](https://pnpm.io/zh/workspaces)实现，每个组件作为一个单独的包进行管理，包含独立的版本号和依赖定义。

### 组件名称

组件名称使用英文小写字母、数字和 `-` 短横线组成，但只能以小写字母开头，名称应该尽可能简短且贴合组件功能，例如 `button`，通常短横线用于连接多个有意义的单词，例如 `input-group`。

### 组件目录结构

每个组件根据其名称在工作空间根目录 `lib/` 下有一个以组件名称命名的目录来管理源码、文档和配置相关文件，通常目录结构如下：

```sh
component-name         # 组件目录
├── package.json       # 组件元信息定义文件（兼容 npm 包定义）
├── index.html         # 组件开发和测试所使用的 HTML 文件
├── README.md          # 组件开发和测试的说明文件
├── src/               # 源码目录
│   ├── vars.css       # 组件用到的 CSS 变量定义
│   └── main.ts        # 组件 JS 模块入口文件，也是作为 rollup 打包时的入口文件
├── doc/               # 组件文档目录
│   ├── README.md      # 组件文档主要页面
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
| `keywords`     | 关键词，例如 `["button", "menu", "dropdown", "zui:component"]`，通过 `'zui:TYPE'` 的形式来定义组件类型 |
| `main`         | 组件模块入口文件，默认为 `"src/main.ts"`                     |
| `browser`      | 为浏览器环境提供的入口文件  |
| `module`      | 为 NodeJS 环境提供的入口文件  |
| `zui`      | ZUI 专属配置  |
| `dependencies` | 该组件依赖的其他组件，例如 `{"@zui/icon": "workspace:^1.0.0"}` |
| `browserslist` | 使用 [browserslist](https://github.com/browserslist/browserslist) 语法声明该组件支持的浏览器，例如 `["not ie < 11", "> 0.2%"]` |

其他属性与 npm 中的定义一致，例如 `homepage`、`license`、`author`。


### 组件类型

| 类型            | 定义                 | 打包顺序 |
| --------------- | -------------------- | -------- |
| `css-base`      | CSS 基础样式         | 1        |
| `css-utilities` | CSS 辅助类           | 5        |
| `control`       | 基础控件，不包括 CSS | 2        |
| `component`     | UI 组件              | 4        |
| `js-helpers`    | JS 辅助方法          | 3        |
| `js-lib`        | JS 库                | 6        |

在 `package.json` 的 `keywords` 属性中来定义组件类型，定义方法为 `zui:组件类型`，当没有定义组件类型时，默认组件类型为 `component`。

不同的组件类型打包引入顺序不一样，其中"CSS 基础样式"（`css-base`）永远被首先打包，"CSS 辅助类"（`css-utilities`）永远被首先打包。

### 组件产物类型

组件产物类型包括：

| 类型    | 说明           |
| ------- | -------------- |
| `css`   | CSS            |
| `js`    | JavaScript     |
| `media` | 图片等媒体文件 |
| `fonts` | 字体           |

应该在 `package.json` 的 `keywords` 属性中来指定当前组件包含的产物类型，例如 `["css", "js"]`。

### 组件开发页面

每个组件都应该包含一个 `README.md` 文件作为开发页面。该文件支持 Markdown 语法，在实际访问时会渲染为 HTML，自动引用当前组件的入口文件 `/src/main.ts`。应该在此文件中提供使用该组件的相关示例代码。

该文件的另一个作用是进行自动化测试，当改组件包含 UI 呈现部分时，需要在该文件中定义完整使用示例，方便进行自动化测试。

下面为一个 `README.md` 文件示例：

````md
# 按钮

## Button

```html:example: flex gap-3
<button type="button" class="btn">Button</button>
<button type="button" class="btn">中文按钮</button>
<button type="button" class="btn" disabled="disabled">禁用的按钮</button>
```

## Button Square

使用工具类 `.-square` 获得方形按钮外观。

```html:example: flex gap-3
<button type="button" class="btn -square">S</button>
<button type="button" class="btn -square">中</button>
<button type="button" class="btn -square" disabled="disabled">禁</button>
```
````

其中代码块语言类型字符串中的 `:example` 用于指定此代码需要渲染为实际的 HTML，`:example: ` 之后可以添加渲染为 HTML 时的 `<div class="example">` 元素上需要添加的额外的 CSS 类名。

### 源码

组件相关的源码存放在 `src/` 目录，通常包含如下几个文件：

**main.ts**

该组件的模块入口文件，作为 rollup 打包时的入口。下面为一个示例：

```ts
import './vars.css';     // 引入该组件用到的 CSS 变量定义文件
import './style.css';    // 引入该组件用到的 CSS 文件
import './dropdown.ts';  // 引入该组件的 JS 文件
```

**vars.css**

定义该组件可以被重新设置的 CSS 变量，该文件通常被 `style.css` 导入使用。例如：

```css
:root {
  --btn-radius:       var(--radius);
  --btn-background:   var(--color-gray-50);
  --btn-border-color: var(--color-gray-300);
}
```

**style.css**

定义该组件相关样式。例如：

```css
@import url('./vars.css');

.btn {
  @apply px-3 h-8;
  border: 1px solid var(--btn-border-color);
  background: var(--btn-background);
  border-radius: var(--btn-radius);
}
```

### 依赖

组件或库可以依赖其他组件或库进行实现。

根据依赖引入的位置，可以是内部的，也可以是外部的。内部通常来自当前项目 `lib/*` 目录，外部来自 `npm` 仓库。

根据依赖引入的作用包括基础公共依赖、普通依赖和开发依赖，下面分别进行介绍。

**基础公共依赖**

这是所有组件都需要的依赖，不需要声明。目前公共依赖包括：`tailwindcss`。在 `/lib/` 目录下的任务组件中功能的 `.css` 文件中都可以自由使用 TailwindCSS 的相关指令（Directives）。

**普通依赖**

普通依赖用于定义组件对另一个组件或库的依赖，例如头像组 `avatar-group` 依赖头像 `avatar`。普通依赖需要在组件对应的 `package.json` 文件中通过 `dependencies` 属性进行声明，例如：

```json
{
    "dependencies": {
        "@zui/avatar": "workspace:^1.0.0"
    }
}
```

**开发依赖**

开发依赖通常作为当前组件或库在开发脚本、开发调试页面中的依赖。开发依赖需要在组件对应的 package.json 文件中通过 `devDependencies` 属性进行声明，例如：

```json
{
    "devDependencies": {
        "jquery": "^3.6.0"
    }
}
```

**普通依赖和开发依赖的区别**

|              | 普通依赖                                                     | 开发依赖                                                     |
| ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **作用**     | 作为当前组件或库的实现的一部分，没有此依赖，当前组件或库功能不完整 | 作为开发工具或开发页面实现的一部分，当前组件或库的功能不依赖开发依赖 |
| **使用方式** | 在源码中直接使用                                             | 不能在源码中直接引用，可能用在开发脚本或开发页面中           |
| **打包范围** | 单独打包此组件也会将普通依赖进行打包                         | 单独打包此组件，不会包含开发依赖的部分                       |

### 组件开发原则

* 每个组件功能尽可能单一，支持独立打包
* 组件内的源码可以单独引用（使用 package.json 的 `files` 属性定义）
* 组件的样式变量仅用于快速变更主题风格，包括（颜色、圆角等关键设置）
* 为每个组件添加开发主页（`index.html`），全方位展示组件的用法（区别于文档，此页面面向测试人员和组件开发人员）

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

开发时启动的 Web 服务地址通常为 http://localhost:5173/ ，要对特定组件进行调试开发，只需要添加路径 `/component-name/` 即可，例如开发调试按钮页面地址为：http://localhost:5173/button/ 。

### 打包

**默认打包**

执行：

```shell
$ pnpm build
```

**定制打包**

打包脚本支持通过参数指定需要打包的组件（库），依次将需要打包的组件名称或第三方库名称追加到命令之后即可，例如以下命令将 ZUI 中的按钮、下拉菜单和面板打包为一个定制版本：

```shell
$ pnpm build -- buttton dropdown panel
```

一个更复杂的例子：

```shell
$ pnpm build -- --name=zentao-zui --version=1.0.0 button dropdown panel +jquery@^2.0
```

打包配置还可以通过一个外部的文件来指定：

```shell
$ pnpm build -- ./zentao-zui-build-config.json
```

其中 `./zentao-zui-build-config.json` 文件示例内容如下：

```json
{
    "name": "zentao-zui",
    "version": "1.0.0",
    "libs": [
        {"name": "@zui/button", "version": "workspace:latest"},
      	{"name": "@zui/dropdown", "version": "workspace:latest"},
      	{"name": "@zui/panel", "version": "workspace:latest"},
      	{"name": "jquery", "version": "^2.0"},
    ]
}
```

**打包脚本命令完整参数**

* `--lib, -l`  指定需要进行打包的组件或库
  * 多个组件或库通过空格或逗号拼接，例如 `--lib="button dropdown panel"` 或 `--lib=button,dropdown,panel`
  * 如果省略该参数，则默认打包 ZUI 内置的所有组件
  * 当需要打包第三方库时，可以直接指定库在 npm 上的名称，但需要添加 `+` 作为前缀，例如 `-l +jquery`
* `--name, -n` 指定进行打包的名称
  * 如果省略该参数，则默认名称为 `zui-custom`
* `--version, -v` 指定此次打包的版本号
  * 如果省略该参数，则使用 ZUI 当前版本号
* `--config， -c` 指定打包配置文件
* `--viteFile -V` 指定打包使用的额外的 Vite 配置文件

## 用户文档网站

**开发**

```sh
$ pnpm docs:dev
```

## 目录结构　

```
zui/                   # 项目根目录
├── package.json
├── index.html         # 开发调试时的入口文件
├── README.md          # 开发指南文档
├── config/            # 打包配置管理，包括 Tailwind CSS 打包配置
├── src/               # 调试模式 Web 服务源码
├── lib/               # 组件库目录
├── docs/              # 文档网站目录
├── test/              # 测试脚本目录
├── tools/             # 工具类脚本目录
```

## 技术栈

* Node.js 14+
* 包管理器：[pnpm](https://pnpm.io/zh/)
* 构建工具：[vite](https://cn.vitejs.dev/)
* CSS 工具库：[TailwindCSS](https://tailwindcss.com/)
* 静态文档网站生成：[VuePress](https://v2.vuepress.vuejs.org/zh/)
* TypeScript 4.5+
* 字体图标生成：[Fantasticon](https://github.com/tancredi/fantasticon)
