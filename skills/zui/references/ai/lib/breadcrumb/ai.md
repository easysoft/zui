# 面包屑

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "breadcrumb",
  "summary": "通过有序层级导航显示当前位置和上级入口。",
  "keywords": [
    "面包屑",
    "导航路径",
    "breadcrumb"
  ]
}
```

## overview

用于页面层级导航；由原生链接和列表组成，不负责路由、折叠或动态数据。只有 CSS 形态。

## setup

workspace：在 ZUI 源码工作区通过 `import '@zui/breadcrumb';` 加载；需要支持 TypeScript/CSS 与项目 PostCSS 配置，并加载 `@zui/base`。browser：加载包含本库的 ZUI CSS 后使用下述 HTML。npm：以目标发布包 `zui/css` 实际包含的样式为准，不推断 `zui/breadcrumb` 子入口。主入口没有运行时 JS 导出。

## vanilla

无。

## preact

无。

## web-components

无。

## css

### css-breadcrumb

```json
{"name": ".breadcrumb", "summary": "排列层级项目并自动添加分隔符。", "role": "component"}
```

根节点使用 `ol.breadcrumb` 或 `ul.breadcrumb`，每个层级必须为直接子 `li`。相邻 `li + li` 的 `::before` 提供分隔符；不要手工插入斜线元素。链接由原生 `a` 承担导航，当前位置可用 `aria-current="page"`。

browser（已加载本库 CSS）：

```html
<nav aria-label="页面位置">
  <ol class="breadcrumb">
    <li><a href="/">首页</a></li>
    <li class="active" aria-current="page">项目</li>
  </ol>
</nav>
```

### css-breadcrumb-active

```json
{"name": ".active", "summary": "标记面包屑当前项目。", "role": "helper"}
```

仅作用于 `.breadcrumb > .active` 直接子元素，设置当前位置文本颜色；不会自动设置 `aria-current` 或禁止链接点击。

## css-variables

### vars-breadcrumb

```json
{"name": "面包屑变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--breadcrumb-divider` | `"/"` | CSS content 值；字符串须保留引号 | `:root` | `.breadcrumb` 或 `:root` |
| `--breadcrumb-divider-color` | `var(--color-gray-500)` | 分隔符颜色 | `:root` | `.breadcrumb` |
| `--breadcrumb-color-active` | `var(--color-gray-500)` | 当前位置颜色 | `:root` | `.breadcrumb` |

## javascript

无。

## types

无。

## recipes

如需更换分隔符，在目标列表上设置 `style="--breadcrumb-divider: '›'"`；变量值需符合 CSS `content` 语法。

## constraints

CSS 只负责外观；页面语义由 `nav`、列表、真实链接及 `aria-current` 提供。长路径没有自动溢出处理。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/breadcrumb/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/breadcrumb/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/breadcrumb/docs/lib/components/index.md>)
- [源码 src/vars.css](<https://github.com/easysoft/zui/blob/9d2d0ebedb11d6ad944e110b9f0600f6c41505e5/lib/breadcrumb/src/vars.css>)
