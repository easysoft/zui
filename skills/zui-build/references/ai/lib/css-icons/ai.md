# CSS 图标

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "css-icons",
  "summary": "以 CSS 绘制操作、方向、时间、加载和气泡尖角图标。",
  "keywords": [
    "图标",
    "无需字体",
    "方向",
    "加载",
    "css icons"
  ]
}
```

## overview

无需字体资源，形状由伪元素、边框和 currentColor 绘制。适合按钮内常用操作；复杂品牌或大规模图库使用 icons 或自定义 SVG。

## setup

workspace：在 ZUI 源码工作区通过 `import '@zui/css-icons';` 加载；需要支持 TypeScript/CSS 与项目 PostCSS 配置，并加载 `@zui/base`。browser：加载包含本库的 ZUI CSS 后使用下述 HTML。npm：以目标发布包 `zui/css` 实际包含的样式为准，不推断 `zui/css-icons` 子入口。主入口没有运行时 JS 导出。

## vanilla

无。

## preact

无。

## web-components

无。

## css

### css-action-icons

```json
{"name": ".icon / .i-* / .close / .spinner / .magnifier / .more", "summary": "显示独立 CSS 操作与状态图标。", "role": "component"}
```

完整操作类：`i-plus`、`i-minus`、`i-check`、`i-edit`、`i-trash`、`i-info`、`i-first-page`、`i-last-page`、`i-upload`、`i-download`、`i-copy`、`i-paste`、`i-menu`、`i-move`、`i-time`、`i-calendar`。还有 `close`、`spinner`、`magnifier`、`more`、`more-vert`。操作图标通常 1em，i-calendar 高 .79em；more/more-vert 是固定 .125rem 圆点加阴影式三点，不随字号缩放。spinner 为 1s 无限旋转，调用者需按产品要求控制动画及状态说明。

`.icon` 是无字体基础槽（行内块/垂直居中），svg.icon 为 1em 方形；可与上述形状组合，并避免被可选旧字体样式强制设为 ZenIcon。

browser（已加载本库 CSS）：

```html
<span class="icon i-check" aria-hidden="true"></span> 已完成
<span class="icon spinner" aria-hidden="true"></span><span role="status">加载中</span>
```

### css-direction-icons

```json
{"name": ".caret* / .chevron-* / .toggle-icon*", "summary": "展示方向与展开收起图标。", "role": "component"}
```

有界类：`caret`（等同 down）、`caret-left`、`caret-right`、`caret-down`、`caret-up`，固定 .75rem；`chevron-left`、`chevron-right`、`chevron-down`、`chevron-up` 为 1em。`toggle-icon-collapse` 固定加号，`toggle-icon-expand` 固定减号；`toggle-icon` 按祖先 is-collapsed/is-expanded 显示加/减号。图标本身没有切换行为。

browser（已加载本库 CSS）：

```html
<span class="is-collapsed"><span class="toggle-icon" aria-hidden="true"></span></span>
```

### css-arrow

```json
{"name": ".arrow", "summary": "创建继承背景和边框的气泡尖角。", "role": "component"}
```

元素为 absolute，需要相对定位、带背景和边框的父容器。与一个方向辅助类组合，并由业务设置沿边的第二坐标；并非普通文本方向箭头。

browser（已加载本库 CSS）：

```html
<div style="position: relative; border: 1px solid; background: var(--color-canvas); padding: 1rem">提示<span class="arrow arrow-top" style="left: 1rem" aria-hidden="true"></span></div>
```

### css-icon-helpers

```json
{"name": "方向、展开状态与禁用辅助类", "summary": "配合 CSS 图标提供上下文状态。", "role": "helper"}
```

arrow 方向：`arrow-top`/`arrow-up`、`arrow-bottom`/`arrow-down`、`arrow-left`、`arrow-right`，必须与 `.arrow` 同节点；父 `.white` 时位置减去 1px，white 皮肤来自其他库。`is-collapsed`/`is-expanded` 放 toggle-icon 祖先；`disabled`/`readonly` 祖先仅令 `.caret`（不含其他方向类）应用透明度。各类不处理事件或禁用 DOM 控件。

## css-variables

### vars-css-icons

```json
{"name": "CSS 图标变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--arrow-size` | `5px` | 尖角基准大小，实际边长乘 1.4142 | `.arrow` | 目标 `.arrow` |
| `--toggle-icon-size` | `calc((var(--font-size-root) * 3 / 4) + 1px)` | 切换框宽高 | `:root` | 图标或祖先 |
| `--caret-opacity` | `.5` | disabled/readonly 祖先中的 caret 透明度 | `:root` | caret 或祖先 |

## javascript

无。

## types

无。

## recipes

图标按钮用真实 button，aria-label 放在按钮，内部图标标 aria-hidden。CSS 图标默认取 currentColor，可用业务 color 统一改变。

## constraints

不是任意 `i-*` 图标生成器；只支持列出的类。伪元素形状不产生可访问文字，加载动画本身也不表示真实请求进度。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/css-icons/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/css-icons/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/css-icons/docs/lib/icons/index.md>)
