# 打包

## 打包组件库

执行如下命令进行打包操作：

```sh
pnpm build
```

该命令提供了一些参数用户个性化打包，例如打包命令后可以直接指定需要打包的组件库，通过 `--name` 来指定打包生成的文件名：

```sh
pnpm build -- utilities dtable --name=zui-table
```

## 打包文档

执行如下命令进行打包文档网站：

```sh
pnpm docs:build
```
