# 标签

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "label",
  "summary": "展示简短分类、计数或圆点状态标记。",
  "keywords": [
    "标签",
    "徽标",
    "圆点",
    "label"
  ]
}
```

## overview

轻量 CSS 标签，不是表单 label 控件；用于分类、计数和状态提示。交互由外部按钮或链接实现。

## setup

workspace：在 ZUI 源码工作区通过 `import '@zui/label';` 加载；需要支持 TypeScript/CSS 与项目 PostCSS 配置，并加载 `@zui/base`。browser：加载包含本库的 ZUI CSS 后使用下述 HTML。npm：以目标发布包 `zui/css` 实际包含的样式为准，不推断 `zui/label` 子入口。主入口没有运行时 JS 导出。

## vanilla

无。

## preact

无。

## web-components

无。

## css

### css-label

```json
{"name": ".label", "summary": "显示带背景、边框和圆角的短标签。", "role": "component"}
```

默认高 1.25rem、最小宽 1.25rem，水平内边距 0.25rem，字号 0.75rem。支持文本换行，但长正文应使用排版组件。

browser（已加载本库 CSS）：

```html
<span class="label">开发中</span>
```

### css-label-variants

```json
{"name": ".label-dot / .size-sm / .size-lg", "summary": "调整标签尺寸或显示圆点。", "role": "helper"}
```

均加在 `.label` 根上。`size-sm` 高/最小宽 1rem；`size-lg` 高/最小宽 1.5rem，水平内边距 0.5rem、字号 0.8125rem。`label-dot` 隐去水平内边距，宽高比 1，默认高 0.5rem，小/大号分别 0.375rem/0.75rem。圆点须另提供状态文字或可访问名称。

browser（已加载本库 CSS）：

```html
<span class="label label-dot" aria-hidden="true"></span> 待处理
```

## css-variables

### vars-label

```json
{"name": "标签变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--label-bg` | `rgba(var(--color-canvas-rgb), .1)` | 背景颜色 | `.label` | 目标 `.label` |
| `--label-border-color` | `var(--color-gray-300)` | 1px 外圈颜色 | `.label` | 目标 `.label` |
| `--label-color` | `var(--color-gray-500)` | 文本颜色 | `.label` | 目标 `.label` |
| `--label-radius` | `var(--radius)` | 圆角长度 | `.label` | 目标 `.label` |

默认变量声明在组件根；在祖先覆盖同名变量可能被根声明覆盖。

## javascript

无。

## types

无。

## recipes

在标签根节点覆盖变量，例如 `style="--label-color: var(--color-danger-500)"`。完整主题皮肤由 [utilities](../utilities/ai.md) 提供，须另包含该库。

## constraints

不提供关闭按钮、选中状态或事件 API。样式类不会替代语义或键盘交互。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/label/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/label/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/label/docs/lib/components/index.md>)
- [源码 src/vars.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/label/src/vars.css>)
