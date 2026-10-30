# 表格

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{"schemaVersion":1,"library":"table","summary":"为原生 HTML table 提供表头、斑马纹、悬停、边框和紧凑布局样式。","keywords":["表格","table","静态表格","斑马纹"]}
```

## overview

用于语义化静态 HTML 表格。没有数据获取、排序、选择或虚拟渲染；复杂数据表格使用 [dtable](../dtable/ai.md)。

## setup

workspace 导入 `@zui/table`。package.json 无 exports，未提供 /react 或 /css 公共子入口。browser 加载包含 table 的 CSS 和基础主题。

## vanilla

无。

## preact

无。

## web-components

无。

## css

### css-table

```json
{"name":".table","summary":"原生 table 的全宽、行边框和单元格间距。","role":"component"}
```

browser：

```html
<table class="table"><caption>成员</caption><thead><tr><th scope="col">姓名</th></tr></thead><tbody><tr><td>张三</td></tr></tbody></table>
```

使用真实 table/thead/tbody/tr/th/td；规则针对 table 直接分组、分组下行和单元格，不给 div 模拟表格生效。
### css-table-helpers

```json
{"name":"表格修饰类","summary":"在 table 根节点组合斑马纹、悬停和尺寸。","role":"helper"}
```

| 类 | 作用 |
| --- | --- |
| `.table-striped` | tbody 偶数行背景 |
| `.table-hover` | tbody hover 行单元格背景 |
| `.bordered` | 配合 .table，所有单元格边框 |
| `.borderless` | 配合 .table，移除行和单元格边框 |
| `.condensed` | 配合 .table，减小单元格内边距 |
| `.table-fixed` | table-layout: fixed，单元格裁剪且不换行 |

同一 table 不同时选择互斥的 bordered/borderless。

## css-variables

### css-table-vars

```json
{"name":"表格变量","summary":"变量直接声明在 .table，因此优先在目标表格上覆盖。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--table-head-bg` | `var(--color-surface)` | 表头背景 | `.table` | 目标 table |
| `--table-striped-color` | `var(--color-gray-50)` | 斑马纹色 | `.table` | 目标 table |
| `--table-hover-color` | `rgba(var(--color-primary-500-rgb), .05)` | 悬停背景 | `.table` | 目标 table |
| `--table-border-color` | `var(--color-border)` | 边框色 | `.table` | 目标 table |

## javascript

无。

## types

无。

## recipes

### recipe-table-dense

```json
{"name":"紧凑可扫描表格","summary":"组合有限的表格修饰类。"}
```

browser：`<table class="table table-striped table-hover condensed">...</table>`；内容沿用上方完整 table 结构。

## constraints

CSS 不处理横向溢出、排序或键盘交互；宽表可由应用外层滚动容器承载。

## references

- [包配置](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/table/package.json>)、[入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/table/src/main.ts>)、[样式](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/table/src/table.css>)、[变量](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/table/src/vars.css>)
