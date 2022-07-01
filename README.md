# ZUI 3

## 组件库

ZUI 3 使用组件库 `lib/` 来管理组件。库中的每个组件在独立的源码和资源目录中开发（例如 `lib/button`），可以被独立打包和使用。

### 组件名称

组件名称使用英文小写字母、数字和 `_` 下划线组成，但只能以小写字母开头，名称应该尽可能简短且贴合组件功能，例如 `button`，通常下划线用于连接多个有意义的单词，例如 `input_group`。

### 组件目录结构

每个组件根据其名称在 `lib/` 目录下有一个以组件名称命名的目录来管理源码、文档和配置相关文件，通常目录结构如下：

```
component_name         # 组件目录
├── package.json       # 组件元信息定义文件（兼容 npm 包定义）
├── index.html         # 组件开发和测试所使用的 HTML 文件
├── README.md          # 组件开发和测试的说明文件
├── src                # 源码目录
│   ├── vars.css       # 组件用到的 CSS 变量定义
│   ├── style.css      # 组件用到的 CSS 样式定义
│   └── main.ts        # 组件 JS 模块入口文件，也是作为 rollup 打包时的入口文件
├── doc                # 组件文档目录
│   ├── index.md       # 组件文档主要页面
│   └── xxxxx.md       # 组件文档其他页面
```


### package.json

`package.json` 文件用于描述组件的元信息，格式兼容 [npm 包定义文件](https://docs.npmjs.com/cli/v7/configuring-npm/package-json/)，下面说明用于描述组件新的关键属性：



### index.html

### 源码

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

在开发模式下，当组件源码目录

针对特定组件启动开发模式可以使用 `--com` 参数，例如启动按钮组件（`button`）的开发模式：

```sh
$ pnpm dev -- button
```

### 打包

执行：

```
$ pnpm build
```

## 目录结构



## 技术栈

* Node.js 14+
* 包管理器：[pnpm](https://pnpm.io/zh/)
* 构建工具：[vite](https://cn.vitejs.dev/)
* CSS 工具库：[TailwindCSS](https://tailwindcss.com/)
* TypeScript
