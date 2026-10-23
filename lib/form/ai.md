# 表单

## meta

```json
{
  "schemaVersion": 1,
  "library": "form",
  "summary": "提供表单字段、标签、提示、横向与栅格布局样式。",
  "keywords": [
    "表单",
    "横向表单",
    "字段布局",
    "form"
  ]
}
```

## overview

纯 CSS 表单布局库；主入口同时加载 checkbox、form-control、input-group。需要数据提交、校验或动态字段时由业务代码或其他表单库承担。

## setup

workspace：在 ZUI 源码工作区通过 `import '@zui/form';` 加载；需要支持 TypeScript/CSS 与项目 PostCSS 配置，并加载 `@zui/base`。browser：加载包含本库的 ZUI CSS 后使用下述 HTML。npm：以目标发布包 `zui/css` 实际包含的样式为准，不推断 `zui/form` 子入口。主入口没有运行时 JS 导出。

## vanilla

无。

## preact

无。

## web-components

无。

## css

### css-form

```json
{"name": ".form", "summary": "纵向组织表单字段与操作区。", "role": "component"}
```

根为列向 flex，字段间 gap 1rem。常用结构为 `.form-group` 内含 `.form-label > .form-label-text`、控件和 `.form-tip`；`.form-actions` 是居中的操作区。fieldset 在 `.form` 下获得分组间距，legend 下可放 `.form-title`。

browser（已加载本库 CSS）：

```html
<form class="form">
  <div class="form-group">
    <label class="form-label required" for="project-name"><span class="form-label-text">项目名称</span></label>
    <input id="project-name" name="name" class="form-control" required aria-describedby="project-tip">
    <span id="project-tip" class="form-tip">请输入便于识别的名称。</span>
  </div>
  <div class="form-actions"><button type="submit">保存</button></div>
</form>
```

### css-form-layout

```json
{"name": ".form-horz / .form-grid", "summary": "为表单启用水平标签和多列布局。", "role": "helper"}
```

与 `.form` 组合。`.form-horz` 的 `.form-group` 预留标签宽度，标签绝对定位；`.form-row` 横向排列，`.is-single-row` 可令表单自身回到列方向。`.form-grid` 令表单横向换行，字段按半间距加 padding；宽度需使用核实过的 utilities 或业务样式指定。两者可组合。

栅格部件：`.form-grid-wrap` 强制占满一行；`.form-grid-rows` 负外边距包装；`.form-grid-row` 横向行；`.form-grid-col` 列内边距；`.has-wrap-after` 在栅格中的伪元素占满宽；`.form-item-errors` 仅提供栅格水平内边距。

### css-form-parts

```json
{"name": "表单部件与状态类", "summary": "定义标签、提示、字段包装与状态展示。", "role": "helper"}
```

`.form-label` 为高 2rem 的标签行；`.form-label-text` 截断标签；`.form-label-actions` 放标签末尾动作；`.form-tip` 放控件说明；`.form-title` 放 legend 标题；`.form-actions` 放操作。`.required` 只在 form-label 上加星号，祖先 `.no-required` 隐藏星号。`.has-error`/`.has-warning`/`.has-success` 祖先改变 form-tip 颜色，不执行校验。`.no-label` 用于水平表单无标签字段；`.is-static-text` 调整水平标签高度。`.form-group-wrapper` 在 form/form-horz 内伸展，配合 `.flex-none` 取消伸展；`.form-grid .form-actions.is-pinned` 只补上边框，不自动吸底。

## css-variables

### vars-form

```json
{"name": "表单布局变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--form-tip-color` | `var(--color-gray-400)` | 提示颜色 | `:root` | 表单根或 `.form-tip` |
| `--form-label-color` | `var(--color-gray-700)` | 标签颜色 | `:root` | 表单根或 `.form-label` |
| `--form-horz-label-width` | `6rem` | 水平标签宽度与字段左留白 | `:root` | `.form-horz` |
| `--form-grid-gap-x` | `1.25rem` | 栅格水平间距 | `:root` | `.form-grid` |
| `--form-grid-gap-y` | `.75rem` | 栅格垂直间距 | `:root` | `.form-grid` |
| `--form-grid-gap-x-half` | `calc(var(--form-grid-gap-x) / 2)` | 内部派生半水平间距 | `.form-grid` | 优先改原始 gap-x |
| `--form-grid-gap-y-half` | `calc(var(--form-grid-gap-y) / 2)` | 内部派生半垂直间距 | `.form-grid` | 优先改原始 gap-y |

## javascript

无。

## types

无。

## recipes

将 `.form-horz` 加到示例 form 并设置 `style="--form-horz-label-width: 8rem"` 可扩展标签区。多列布局还需为 `.form-group` 提供明确宽度。

## constraints

`required` 类只绘制星号；仍应给真实输入添加 required。状态类不产生校验错误、不提交表单，也不会自动写 aria-invalid。

## references

- [包元数据](package.json)
- [公开入口](src/main.ts)
- [正式文档](docs/lib/forms/index.md)
- [源码 src/style/index.ts](src/style/index.ts)
- [源码 src/style/vars.css](src/style/vars.css)
