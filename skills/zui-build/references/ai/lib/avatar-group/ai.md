# 头像组

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。本技能内置运行版本为 3.0.0；即使版本号相同，也不能据此推定 API 一致。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "avatar-group",
  "summary": "将多个头像叠放并使用描边区分相邻成员。",
  "keywords": [
    "头像组",
    "成员列表",
    "avatar group"
  ]
}
```

## overview

CSS 布局组件，适合短成员列表。本库 package.json 声明 avatar 依赖，但主入口只导入本库 CSS，使用者仍需显式包含头像样式。

## setup

workspace：先 `import '@zui/base'; import '@zui/avatar/css'; import '@zui/avatar-group';`。browser：加载包含 avatar 与 avatar-group 的 CSS。npm：核对 `zui/css` 包含这两个库；没有独立 JS、Preact 或自定义元素导出。

## vanilla

无。

## preact

无。

## web-components

无。

## css

### css-avatar-group

```json
{"name": ".avatar-group", "summary": "水平叠放直接子头像。", "role": "component"}
```

容器为 flex，gap 0.625rem，所有直接子元素添加外圈阴影，第二个起 margin-left 为 -1rem；默认实际重叠量为 0.375rem。组尺寸不会自动改变头像本身大小。

browser（已加载本库 CSS）：

```html
<div class="avatar-group size-sm" aria-label="项目成员">
  <span class="avatar size-sm" aria-label="张三">张</span>
  <span class="avatar size-sm" aria-label="李四">李</span>
</div>
```

### css-avatar-group-size

```json
{"name": ".size-xs / .size-sm / .size-lg / .size-xl", "summary": "改变头像组的堆叠距离。", "role": "helper"}
```

放在 `.avatar-group` 根。后续直接子项 margin-left：xs/sm 为 -0.875rem，lg 为 -1.25rem，xl 为 -1.5rem；减去固定 gap 后才是实际重叠。每个头像还需对应的 [avatar 尺寸类](../avatar/ai.md#css-avatar-size)。

## css-variables

### vars-avatar-group

```json
{"name": "头像组变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--avatar-group-ring-width` | `1px` | 相邻头像分隔外圈宽度 | `.avatar-group` | 目标 `.avatar-group` |
| `--avatar-group-ring-color` | `var(--color-canvas)` | 分隔外圈颜色 | `.avatar-group` | 目标 `.avatar-group` |

## javascript

无。

## types

无。

## recipes

更多人数可用最后一个 `.avatar` 显示 `+3`；成员裁剪、数量计算和详情提示由使用者实现。

## constraints

所有直接子项均参与阴影与负边距，非头像内容应放在容器外；本库不管理层级交互、加载或可访问名称。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/avatar-group/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/avatar-group/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/avatar-group/docs/lib/components/index.md>)
- [源码 src/vars.css](<https://github.com/easysoft/zui/blob/1c40b549c79612d1337bfd8f40f74498f1d89177/lib/avatar-group/src/vars.css>)
