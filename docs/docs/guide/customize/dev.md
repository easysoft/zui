# 开发

## 开发服务

执行如下命令启动开发服务：

```shell
$ pnpm dev
```

开发服务器启动后，默认情况下可以通过网址：`http://localhost:5173/` 来访问开发服务页面。通过页面上的组件导航，可以访问对应的组件开发页面。也可以将组件名附加到网址后面，直接访问对应的组件页面，例如 `http://localhost:5173/button/`。

在开发服务页面上支持热更新，当开发文件变更后会自动反馈到开发服务页面上。

## 对组件进行开发调试

### 组件开发目录

ZUI3 每个组件在一个独立的目录内，拥有自己的 `package.json` 文件，使得组件可以独立作为 npm 包来使用，也可以单独作为子项目进行开发维护。

::: tip 提示
通常组件通过在 `package.json` 文件中设置属性 `private: true` 来让包仅在 zui3 [工作空间](https://pnpm.io/zh/workspaces)内可用，但组件仍然拥有作为公开的包发布到 npm 上进行独立使用。
:::

## 文档开发服务

启动 ZUI 文档网站开发服务执行如下命令：

```shell
$ pnpm docs:dev
```

此命令会先打包 ZUI 并启动文档开发服务器，默认情况下可以通过网址：`http://localhost:5174/` 来访问文档开发服务页面。在文档开发服务启动时，修改文档源文件，会自动更新文档页面。
