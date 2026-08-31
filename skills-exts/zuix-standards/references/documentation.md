# ZUI 扩展库正式文档规范

## 源文件与事实来源

正式文档源属于 `TARGET_LIB_ROOT`，常见路径为：

```text
docs/lib/<category>/index.md
```

具体分类、额外页面和语法以 `EXT_ROOT` 现有文档与 `ZUI_ROOT` 当前文档管线为准。宿主同步生成目录不属于扩展源码，绝不直接编辑或提交。

写作前读取目标 package、入口、公开类型、component/vanilla、helper、样式、i18n、调试页和现有正式文档，再检查两个相似库。源码和可执行行为是事实来源，不发明 API。

## 内容结构

- 第一屏给出当前宿主可运行的最小示例，随后按真实能力覆盖使用场景。
- 只记录承诺的 HTML/CSS、Preact、vanilla、自动创建/toggle 等消费方式。
- options/props、事件、方法、公共类型、CSS 类/变量、异步、错误、生命周期和兼容性与源码一致。
- 示例使用真实 `PACKAGE_NAME`、全局导出或宿主文档组件，不假设扩展包名属于 `@zui/*`。
- 使用宿主正式文档的 Example/tabs/Props/ZUI 等语法，不混用调试页 fence。
- 链接和资源路径经扩展文档构建验证，不使用本机绝对路径或 `exts/` 符号链接作为公开 URL。

## 修改边界

只修改批准的扩展文档源与必要资源。不得为了让文档成立而悄悄修改运行时 API；发现源码/文档冲突时报告并由相应技能处理。不得编辑 `ZUI_ROOT` 的生成文档、依赖或锁文件。

## 联合验证

先运行 Markdown/链接/示例的最小静态检查，再使用 `ZUI_ROOT` 的扩展文档脚本，例如：

```sh
pnpm docs:build:exts
```

确认脚本实际包含 `EXTS_NAME` 与 `ZUI_NAME`。若宿主提供可限定 group 的 prepare/build 参数，优先使用。浏览器验证时启动扩展 docs dev，检查示例、依赖、资源、dark mode 和锚点，完成后结束服务。

交付时报告扩展源页面、覆盖的消费方式、宿主验证结果、生成目录副作用和仍存在的源码/文档差异。
