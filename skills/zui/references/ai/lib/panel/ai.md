# 面板

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"panel","summary":"提供带标题、操作区、正文和页脚的纯 CSS 面板布局。","keywords":["面板","panel","内容分组"]}
```

## overview

用于卡片式内容分组、设置区域和表单区域。本库只提供 CSS；需要数据生成卡片见 cards。

## setup

workspace 导入 `@zui/panel` 加载样式。package.json 未声明 exports，也没有独立 /css、/react 公共入口。browser 使用包含 panel 的 CSS；需要基础主题。

## vanilla

无。

## preact

无。

## web-components

无。

## css

### css-panel

```json
{"name":".panel 及结构部件","summary":"纯 HTML 面板容器。","role":"component"}
```

browser，已加载 panel 和主题 CSS：

```html
<section class="panel"><header class="panel-heading"><h2 class="panel-title">设置</h2><div class="panel-actions"></div></header><div class="panel-body">正文</div><footer class="panel-footer">说明</footer></section>
```

`.panel` 为圆角、裁剪和边框环；`.panel-heading` 为水平头部，`.panel-title` 占剩余空间，`.panel-actions` 为头部动作；`.panel-body` 提供正文内边距；`.panel-footer` 为水平页脚。头尾均可省略。
### css-panel-size

```json
{"name":".size-sm / .size-lg","summary":"调整面板头部、正文和页脚的内边距。","role":"helper"}
```

放在 `.panel` 根节点。size-sm 使用较小内边距，size-lg 使用更大内边距；本库只有这两种面板尺寸修饰。

## css-variables

### css-panel-vars

```json
{"name":"面板背景变量","summary":"控制头部和页脚背景。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--panel-heading-bg` | `transparent` | 头部背景 | `:root` | `.panel` 或 `.panel-heading` |
| `--panel-footer-bg` | `transparent` | 页脚背景 | `:root` | `.panel` 或 `.panel-footer` |

## javascript

无。

## types

无。

## recipes

### recipe-panel-form

```json
{"name":"在面板内放表单","summary":"用 panel-body 容纳表单控件，panel-footer 放操作。"}
```

browser：把上例正文替换为应用自己的 form，必要时使用 button 的 form 属性关联提交；panel 不自动创建表单关系。

## constraints

纯 CSS 不实现折叠、关闭、拖动或请求；这些行为由应用或其他组件负责。

## references

- [包配置](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/panel/package.json>)、[入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/panel/src/main.ts>)、[结构样式](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/panel/src/style/panel.css>)、[尺寸](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/panel/src/style/size.css>)、[变量](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/panel/src/style/vars.css>)
