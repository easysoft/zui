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

执行上述命令之后，会在 `zui3/exts/zentao` 创建指向组件库目录的符号链接，同时在 `zui3/exts/libs.json` 中记录此扩展组的名称和路径。

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

当添加了多个扩展库时，上述命令会包含所有扩展库，有时只需要包含特定的扩展库，只需要自定义 `--lib` 参数即可：

```shell
$ pnpm dev:exts --lib=zui,zentao
```

## 启动文档服务器

要在文档网站服务模式中包含对扩展组件库的文档支持，只需要如下命令代替 `pnpm docs:dev` 命令即可：

```shell
$ pnpm docs:dev:exts
```

## 打包

使用 `--extensions` 加载全部已注册扩展来源，构建符合筛选规则的内置库和扩展库：

```shell
$ pnpm build --extensions --name zentao
```

只需要指定的扩展组时，重复使用 `--extension`：

```shell
$ pnpm build --extension zentao --extension another-group
```

也可以直接传入单库或扩展集合目录，无须先注册：

```shell
$ pnpm build --extension ../zui_exts/zentao
```

内置库始终可供选择。指定 `--lib` 后，仅以列出的库作为构建入口；扩展库使用 `package.json#name` 的完整包名：

```shell
$ pnpm build --extension zentao --lib label --lib @zentao/status-label
```

`--extensions` 与 `--extension` 互斥。CLI 扩展来源整体覆盖 JSON 中的 `extensions`；CLI 相对路径以工作目录为基准，JSON 相对路径以配置文件目录为基准。完整参数和旧 DSL 迁移表见 [打包指南](/guide/customize/build)。
