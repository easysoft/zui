# 打包

## 打包组件库

无参数构建全部符合筛选规则的内置库：

```sh
pnpm build
```

重复 `--lib` 精确选择入口，用 `--name` 指定产物名：

```sh
pnpm build --lib utilities --lib dtable --name zui-table
```

以上产物位于 `dist/zui-table/`，包含 ESM、UMD、CSS、资源和默认启用的 source map。UMD 全局名保持为 `zui`。`build` 不执行类型检查；使用 `pnpm check` 检查源码，使用 `pnpm test:build` 验证分发消费契约。`pnpm publish:npm` 在发布前自动执行这两项检查。

### npm 运行时与声明

```sh
pnpm build:npm
pnpm build:npm --out-dir ./dist/npm-preview
```

该命令使用完整 npm 预设，排除未就绪库，默认输出到 `dist/zui/`。运行时代码和 TypeScript 声明在同一次构建中生成，全部成功后更新输出目录。普通 `pnpm build` 继续只生成浏览器产物；不再单独执行声明脚本或读取上次构建留下的入口。

### 工作目录、并发与失败处理

每次构建在 `build/run-*` 中准备入口、依赖和资源，结束后只清理自己的工作目录。编译、声明和 ZIP 先在独立暂存路径完成，再更新最终目录；中途失败会保留旧产物，替换失败会尝试恢复备份。ZIP 返回成功时已经完成写入，归档根目录始终使用最终输出目录名。ZIP 可以位于输出目录内部，但不能覆盖其他生成文件，也不会把自身归档进去。

不同输出的内置库构建可以并行。同一输出、父子输出目录、共享 ZIP 或共享扩展源码集合被另一构建占用时，命令会立即报错，显示占用进程和锁路径；等待该构建结束后重试。扩展 prebuild 依次执行，资源复制与编译使用它完成后生成的文件。

为保持跨平台行为一致，占用检查将路径的大小写变体视为同一资源，即使当前文件系统区分大小写；实际输出路径的大小写保持原样。

锁位于当前用户的系统临时目录。强杀或断电后的锁不会自动抢占，须确认相关进程已结束后，按报错路径处理残留。此流程不提供崩溃自动恢复，也不保证输出目录与外置 ZIP 对并发读取者同时切换；恢复失败时会保留备份并报告路径，提交后的备份清理失败只提示残留。

### 常用参数

| 参数 | 用途 |
| --- | --- |
| `--config <file>` | 加载声明式 JSON 配置 |
| `--lib <name>` | 精确选择入口，可重复；内置库用短名，扩展库用完整包名 |
| `--exclude <name>` | 排除入口，可重复；不会禁止其他库内部导入依赖 |
| `--extensions` | 加载全部已注册扩展来源 |
| `--extension <组名或目录>` | 指定扩展来源，可重复；与 `--extensions` 互斥 |
| `--name <name>`、`--version <version>` | 指定产物名称、版本 |
| `--out-dir <directory>` | 指定产物目录 |
| `--minify`、`--no-minify` | 启用或关闭压缩；关闭时同时影响 JS 和 CSS |
| `--sourcemap`、`--no-sourcemap` | 启用或关闭 source map |
| `--include-wip` | 将 `zui.wip` 库纳入全量选择 |
| `--exclude-not-ready` | 排除 `zui.notReady` 库 |
| `--zip <path>` | 指定 ZIP 的完整输出路径，例如 `./dist/zui-custom.zip` |
| `--dry-run` | 输出归一化构建计划，不安装依赖、执行 prebuild 或修改构建目录 |
| `--help` | 显示参数说明 |

默认全量选择跳过 `zui.wip` 和 `zui.separately` 库；显式 `--lib` 可以选择它们。顶层 `package.json#wip` 库不参与发现。`--exclude-not-ready` 在显式选择时同样生效。

### 指定扩展来源

内置库始终可供选择。没有 `--lib` 时，会构建内置库以及已启用扩展中符合筛选规则的库；指定 `--lib` 后只构建列出的入口。

```sh
# 全部已注册扩展
pnpm build --extensions

# 指定一个或多个注册组
pnpm build --extension zentao --extension another-group

# 直接指定单库或扩展集合目录，无须先注册
pnpm build --extension ../zui_exts/zentao

# 从指定来源选择一个扩展库
pnpm build --extension zentao --lib @zentao/status-label
```

组名来自 `exts/libs.json`。相对目录使用 `./` 或 `../` 前缀，也支持绝对路径。来源缺失或无效时，构建在清理目录前报错。

### JSON 配置

保存以下内容为 `custom-build.json`，执行 `pnpm build --config ./custom-build.json`：

```json
{
  "name": "custom",
  "libs": ["pager"],
  "outDir": "./dist/custom",
  "extensions": false,
  "exports": {
    "pager": [{"path": "web-component"}]
  },
  "externals": {"cash-dom": "$"},
  "sourcemap": true,
  "css": {"minify": true, "remToPx": false, "preflight": true}
}
```

配置使用 `name`、`version`、`libs`、`exclude`、`extensions`、`outDir`、`minify`、`sourcemap`、`includeWip`、`excludeNotReady`、`zip` 等字段。扩展来源支持 `false`、`true` 或组名／目录数组。

CLI 显式值优先于 JSON，再使用默认值。重复 `--lib` 整体替换 JSON 的 `libs`；扩展来源参数整体替换 `extensions`；`--exclude` 与 JSON 的 `exclude` 合并。CLI 路径相对当前工作目录，JSON 路径相对配置文件所在目录。

高级选项也放在 JSON：

- `dependencies` 声明额外 npm 入口，必须显式填写版本，例如 `"dependencies": {"clipboard": "^2.0.11"}`。
- `exports` 按库覆盖入口。`path` 是库的子入口；没有 `targets` 时导出全部公开成员。`"targets": {"default": "Clipboard"}` 表示默认导出别名，`{"foo": "bar"}` 表示具名导出别名，`{"*": "tools"}` 表示命名空间导出。`"sideEffect": true` 只导入副作用，与 `targets` 互斥。
- `externals` 将依赖名映射到 UMD 全局名，ESM 中保留包导入；使用外置 Cash 的 UMD 产物前须提供全局 `$`。
- `css` 独立配置 CSS 压缩、rem 转换和 preflight。`--no-minify` 总是同时关闭 JS/CSS 压缩；仅关闭 CSS 压缩使用 `"css": {"minify": false}`。
- `viteConfig` 指向 Vite 配置文件，支持异步配置和插件函数。入口、文件名、输出目录、压缩及样式管线由构建计划管理，不能在自定义 Vite 配置中重复设置。

### 从旧参数迁移

旧的短参数、位置参数、组合 DSL 和解析后的配置快照不再接受。常见迁移如下：

| 旧写法 | 新写法 |
| --- | --- |
| `--lib=zui` | 省略 `--lib` |
| `--lib="button dropdown"` 或位置参数 `button dropdown` | `--lib button --lib dropdown` |
| `--lib="zui !icons"`、`--ignore icons` | `--exclude icons` |
| `--exts=buildIn,exts --lib=zui*exts` | `--extensions` |
| `--exts=buildIn,zentao --lib=zui*zentao` | `--extension zentao` |
| `--lib=pager~web-component` | JSON `"libs": ["pager"], "exports": {"pager": [{"path": "web-component"}]}` |
| `+clipboard@^2.0.11` | JSON `"dependencies": {"clipboard": "^2.0.11"}` |
| `--noCash` | JSON `"externals": {"cash-dom": "$"}` |
| `--outDir`、`--noMinify`、`--noSourceMap` | `--out-dir`、`--no-minify`、`--no-sourcemap` |
| `--includeWip`、`--ignoreNotReady` | `--include-wip`、`--exclude-not-ready` |
| `--zip zui.zip --zipOut dist` | `--zip ./dist/zui.zip` |
| `--viteFile custom.vite.ts` | JSON `"viteConfig": "./custom.vite.ts"` |
| `--cssnano`、`--rem2px`、`--noPreflightStyle` | JSON `css.minify`、`css.remToPx`、`css.preflight` |
| `--save`、`--saveConfig` | `--dry-run`，需要保存时将标准输出重定向到文件 |
| `--config` 读取旧构建快照 | 改写为本文的声明式 JSON；计划输出仅供诊断 |
| `pnpm build:vite` | `pnpm build`；单独类型检查使用 `pnpm typecheck` |

开发服务的 `pnpm dev:exts -- --lib=...` 参数有独立含义，保持原有接口。

## 打包文档

执行如下命令进行打包文档网站：

```sh
pnpm docs:build
```

包含全部已注册扩展文档使用 `pnpm docs:build:exts`。需要限定扩展来源或入口时，先执行 `pnpm docs:prepare --copy --extension zentao --lib @zentao/status-label`，再在 `docs/` 执行 `pnpm build`。文档准备与组件构建共用选择规则，不提前清空 public 目录；`--build=no` 可只同步文档而跳过产物构建，并保留已有 ZUI 产物与 ZIP。文档清单和图标在构建成功后更新，整个文档站不作为一个事务替换。
