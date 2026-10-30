# 输入组

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "input-group",
  "summary": "把输入框、附加文字与按钮连接成连续的横向控件。",
  "keywords": [
    "输入组",
    "前缀",
    "后缀",
    "input group"
  ]
}
```

## overview

用于带单位、前后缀或操作按钮的输入布局。本库主入口加载 form-control；按钮样式与行为按需另引入 button。

## setup

workspace：在 ZUI 源码工作区通过 `import '@zui/input-group';` 加载；需要支持 TypeScript/CSS 与项目 PostCSS 配置，并加载 `@zui/base`。browser：加载包含本库的 ZUI CSS 后使用下述 HTML。npm：以目标发布包 `zui/css` 实际包含的样式为准，不推断 `zui/input-group` 子入口。主入口没有运行时 JS 导出。

## vanilla

无。

## preact

无。

## web-components

无。

## css

### css-input-group

```json
{"name": ".input-group", "summary": "连接输入框及其直接子项。", "role": "component"}
```

根为 flex 容器，内部 `.form-control`、`.input-control` 可伸展。相邻子项及其内部表单控件去掉连接处圆角；焦点中的 `.form-control` 和 `.btn` 提升层级。不要在直接子项之间插入无关元素。

browser（已加载本库 CSS）：

```html
<div class="input-group">
  <span class="input-group-addon" id="amount-unit">金额</span>
  <input class="form-control" type="number" aria-labelledby="amount-unit">
  <span class="input-group-addon">元</span>
</div>
```

### css-input-group-parts

```json
{"name": ".input-group-addon / .input-group-control / .size-sm / .size-lg", "summary": "提供附加块、伸展包装与尺寸。", "role": "helper"}
```

`.input-group-addon` 位于输入组内，高 2rem，边框/圆角复用 form-control 变量；`.input-group-control` 使自定义控件包装 flex-auto。`size-sm`/`size-lg` 放输入组根，附加块高 1.5rem/2.5rem，并由 form-control 的父级尺寸规则同步直接输入框。默认中号无须加 `size-md`；该库未定义对应附加块规则。

## css-variables

### vars-input-group

```json
{"name": "输入组变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--input-group-addon-bg` | `var(--color-gray-50)` | 附加块背景颜色 | `:root` | 目标 `.input-group` 或附加块 |

边框、圆角和焦点还依赖 [form-control 变量](../form-control/ai.md#vars-form-control)。

## javascript

无。

## types

无。

## recipes

带搜索按钮时另加载 `@zui/button`，把真实 `<button class="btn">搜索</button>` 作为直接子项。组合下拉控件时须单独配置其行为。

## constraints

只组合布局，不自动关联 label、不处理提交、不传播 readonly/disabled。附加块使用的 aria-describedby/aria-labelledby 关系由调用者维护。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/input-group/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/input-group/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/input-group/docs/lib/forms/index.md>)
- [源码 src/style/index.ts](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/input-group/src/style/index.ts>)
- [源码 src/style/vars.css](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/input-group/src/style/vars.css>)
