# 排版

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "typography",
  "summary": "提供正文、标题、引用、代码和文章区域的基础排版。",
  "keywords": [
    "排版",
    "文章",
    "标题",
    "typography"
  ]
}
```

## overview

包含全局原生标签规则和 `.article` 富文本容器；适合说明、文档和普通正文。主入口导入全部样式，会影响页面 a、列表、标题、blockquote、code、pre 等元素。

## setup

workspace：在 ZUI 源码工作区通过 `import '@zui/typography';` 加载；需要支持 TypeScript/CSS 与项目 PostCSS 配置，并加载 `@zui/base`。browser：加载包含本库的 ZUI CSS 后使用下述 HTML。npm：以目标发布包 `zui/css` 实际包含的样式为准，不推断 `zui/typography` 子入口。主入口没有运行时 JS 导出。

## vanilla

无。

## preact

无。

## web-components

无。

## css

### css-typography-blocks

```json
{"name": ".h1…h6 / .blockquote / .code", "summary": "在任意节点上使用标题、引用和行内代码样式。", "role": "component"}
```

真实有界名称为 `.h1`、`.h2`、`.h3`、`.h4`、`.h5`、`.h6`、`.blockquote`、`.code`。对应原生 h1…h6/blockquote/code 无须加类。标题字号依次 2、1.5、1.25、1、0.875、0.75rem，粗体和 normal 行高；视觉标题类不会改变语义层级。blockquote 有左边框；code 为粉色文字浅背景；pre code 撤去行内背景与 padding。

全局 a 普通/hover 使用 link/link-hover 色，focus-visible 有焦点外圈；ul/ol 为实心圆点/十进制并缩进 1.5em；dt 粗体、dd 缩进 2em；var/samp 粗体。

browser（已加载本库 CSS）：

```html
<blockquote><p>保持内容层级清晰。</p><figcaption>设计说明</figcaption></blockquote>
<p>调用 <code>render()</code> 更新视图。</p>
```

### css-article

```json
{"name": ".article", "summary": "为长文提供段落间距、换行与表格样式。", "role": "component"}
```

正文使用 `--font-size-article`，保留空白换行、自动断词。标题、段落、列表、媒体、表格、pre 与图片按变量增加垂直间距；表格有边框和单元格 padding，thead 背景取 table-head-bg 或 gray-100。代码块增加边框与浅背景。

browser（已加载本库 CSS）：

```html
<article class="article"><h1>发布说明</h1><p>本次更新完善表单交互。</p><ul><li>支持新增成员</li></ul></article>
```

### css-article-block

```json
{"name": ".article-block", "summary": "为文章自定义内容提供段落间距。", "role": "helper"}
```

仅在 `.article` 内使用，获得与段落相同的垂直间距和 1em 最小高度。列表与表格内部后代的 margin 会被清零。

## css-variables

### vars-typography

```json
{"name": "排版变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--article-p-space` | `0.5em` | 段落及块内容垂直间距 | `:root` | `.article` |
| `--article-heading-space` | `0.5em` | 标题垂直间距 | `:root` | `.article` |
| `--article-hr-space` | `1.5em` | 分隔线垂直间距 | `:root` | `.article` |
| `--article-cell-padding` | `0.25rem 0.75rem` | 表格单元格内边距 | `:root` | `.article` |
| `--font-h1-size` | `2.25rem` | 当前样式未消费此已声明变量 | `:root` | 不用于调整当前 h1 |
| `--font-size-article` | `0.875rem`（base 提供） | 文章字号 | base 的 `:root` | `.article` |
| `--table-head-bg` | 无；回退 `var(--color-gray-100)` | 文章表头背景 | 本库仅消费 | `.article` 或表格 |

## javascript

无。

## types

无。

## recipes

文章局部可用 `style="--article-p-space: 1em"` 调整段间距；应用层不要依赖 Markdown 渲染器默认样式。

## constraints

`.article` 使用 white-space: pre-wrap，源 HTML 的空白可能可见。标题字号由 Tailwind 主题编译决定，当前 `--font-h1-size` 声明不控制 h1。富文本仍须由调用者完成不可信 HTML 清理。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/typography/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/typography/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/typography/docs/lib/basic/index.md>)
- [源码 src/style/index.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/typography/src/style/index.ts>)
- [源码 src/style/vars.css](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/typography/src/style/vars.css>)
