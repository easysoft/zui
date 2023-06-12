# 组件库扩展

ZUI3 组件库内置了大量组件，并支持集中开发、调试和打包，其中打包还支持只选择指定的组件进行个性化定制，同步输出组件库文档。但当需求扩展到组件库之外时，就需要用到扩展组件库了。ZUI3 支持扩展组件库模式，可以从其他位置引入一个或多个组件库目录，享受集中开发、调试和打包。下面介绍扩展组件库的使用方法。

## 定义扩展库

扩展组件库可以来自本地系统的任意位置，只需要提供一个路径，例如：

```txt
/Users/TaiJi/Projects/zui3_exts/lib/
```

扩展组件库的目录结构与 ZUI3 `/lib/` 下的目录结构一致，下面的每个子目录为一个独立的组件，详细定义参考 [开发文档](/guide/customize/dev)。

## 添加扩展库

在 `zui3` 项目根目录执行：

```shell
$ pnpm extend-lib -- <ext_lib_path> <lib_name>
```

其中参数 `ext_lib_path` 为扩展组件库路径，`<lib_name>` 为扩展组件库名称。例如：

```shell
$ pnpm extend-lib -- /Users/TaiJi/Projects/zui3_exts/lib/ zentao
```

执行上述命令之后，会将组件库目录文件拷贝到 `zui3/lib_name` 目录下，同时会在 `zui3/exts/libs.json` 文件中记录此扩展库的名称和路径。

```json
{
    "zentao": "/Users/TaiJi/Projects/zui3_exts/lib/*"
}
```

实际上，你也可以通过自己编辑这个文件来添加扩展库。

## 启动开发服务

要在开发模式中包含对扩展组件库的开发调试，只需要执行如下命令代替 `pnpm dev` 命令即可：

```shell
$ pnpm dev:exts
```

## 启动文档服务器

要在文档网站服务模式中包含对扩展组件库的文档支持，只需要如下命令代替 `pnpm docs:dev` 命令即可：

```shell
$ pnpm docs:dev:exts
```

## 打包

打包时如果需要将扩展库中的组件也进行打包，则需要添加 `--exts` 参数，然后就可以在需要打包的组件清单中指定扩展库中的组件名称：

```shell
$ pnpm build -- label @zentao/status-label --exts
```

如果不指定名称，则默认打包仍然只打包内置组件库的组件，例如下面的命令仍然相当于 `pnpm build`：

```shell
$ pnpm build -- --exts
```

如果需要将所有内置组件库和扩展库中的所有组件一并打包，可以使用如下命令：

```shell
$ pnpm build -- zui+exts --exts --name=zentao
```
