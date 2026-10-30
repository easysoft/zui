# CSS 基础

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "base",
  "summary": "提供样式重置、全局字体和深浅主题基础变量。",
  "keywords": [
    "基础样式",
    "主题",
    "颜色",
    "字号",
    "base"
  ]
}
```

## overview

ZUI 样式基础。导入 Tailwind base/utilities/components 指令、主题变量插件和全局 html/body 规则。默认包含 preflight 重置，不导出 JS API；不是完整公开工具类集合。

## setup

workspace：`import '@zui/base';`，必须通过项目 PostCSS/Tailwind 配置构建。browser：加载包含 base 的 ZUI CSS。npm：使用目标包真实存在的 `zui/css`；不要把源码 CSS 指令文件直接交给浏览器。构建自定义主题遵循 [配置入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/config/tailwind-theme/index.cjs>)。

## vanilla

无。

## preact

无。

## web-components

无。

## css

### css-base-theme

```json
{"name": ".dark / .light-in-dark / .dark-auto", "summary": "为区域选择深浅主题变量。", "role": "utility"}
```

`.dark` 显式应用深色主题并设置正文前景色；`.light-in-dark` 在深色祖先内恢复浅色变量；`.dark-auto` 仅在 prefers-color-scheme: dark 媒体条件下切换色彩。它们可放 html 或局部容器，影响后代继承变量。

全局 html 字号取 `--font-size-root`；body 默认 canvas 背景、fore 前景、0.8125rem 字号和 1.5384615385 行高。所有元素和伪元素默认边框颜色取 border。`:focus-visible` 的透明 outline 由具体控件样式继续定义。

browser（已加载本库 CSS）：

```html
<section class="dark"><p>深色区域</p><div class="light-in-dark">浅色子区域</div></section>
```

## css-variables

### vars-base-layout

```json
{"name": "基础尺寸与阴影变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--screen-sm` | `640px` | 断点参考长度；不能用 var() 动态替换媒体查询 | `:root` | `:root` 或消费节点 |
| `--screen-md` | `768px` | 断点参考长度；不能用 var() 动态替换媒体查询 | `:root` | `:root` 或消费节点 |
| `--screen-lg` | `1024px` | 断点参考长度；不能用 var() 动态替换媒体查询 | `:root` | `:root` 或消费节点 |
| `--screen-xl` | `1280px` | 断点参考长度；不能用 var() 动态替换媒体查询 | `:root` | `:root` 或消费节点 |
| `--screen-2xl` | `1536px` | 断点参考长度；不能用 var() 动态替换媒体查询 | `:root` | `:root` 或消费节点 |
| `--radius-none` | `0px` | 圆角长度 | `:root` | `:root` 或消费节点 |
| `--radius-sm` | `0.125rem` | 圆角长度 | `:root` | `:root` 或消费节点 |
| `--radius` | `0.25rem` | 圆角长度 | `:root` | `:root` 或消费节点 |
| `--radius-md` | `0.375rem` | 圆角长度 | `:root` | `:root` 或消费节点 |
| `--radius-lg` | `0.5rem` | 圆角长度 | `:root` | `:root` 或消费节点 |
| `--radius-xl` | `0.75rem` | 圆角长度 | `:root` | `:root` 或消费节点 |
| `--radius-2xl` | `1rem` | 圆角长度 | `:root` | `:root` 或消费节点 |
| `--radius-3xl` | `1.5rem` | 圆角长度 | `:root` | `:root` 或消费节点 |
| `--radius-full` | `9999px` | 圆角长度 | `:root` | `:root` 或消费节点 |
| `--shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.1), 0 0 2px -1px rgb(0 0 0 / 0.05)` | CSS box-shadow 值 | `:root` | `:root` 或消费节点 |
| `--shadow` | `0 1px 4px 0 rgb(0 0 0 / 0.15), 0 1px 2px -1px rgb(0 0 0 / 0.1)` | CSS box-shadow 值 | `:root` | `:root` 或消费节点 |
| `--shadow-md` | `0 2px 6px -1px rgb(0 0 0 / 0.2), 0 1px 4px -2px rgb(0 0 0 / 0.15)` | CSS box-shadow 值 | `:root` | `:root` 或消费节点 |
| `--shadow-lg` | `0 5px 15px -3px rgb(0 0 0 / 0.2), 0 2px 6px -4px rgb(0 0 0 / 0.15)` | CSS box-shadow 值 | `:root` | `:root` 或消费节点 |
| `--shadow-xl` | `0 10px 25px -5px rgb(0 0 0 / 0.2), 0 4px 10px -6px rgb(0 0 0 / 0.15)` | CSS box-shadow 值 | `:root` | `:root` 或消费节点 |
| `--shadow-2xl` | `0 10px 50px -10px rgb(0 0 0 / 0.4), 0 8px 20px -10px rgb(0 0 0 / 0.3)` | CSS box-shadow 值 | `:root` | `:root` 或消费节点 |
| `--shadow-inner` | `inset 0 2px 4px 0 rgb(0 0 0 / 0.05)` | CSS box-shadow 值 | `:root` | `:root` 或消费节点 |
| `--shadow-none` | `none` | CSS box-shadow 值 | `:root` | `:root` 或消费节点 |
| `--space` | `0.25rem` | 基础间距单位 | `:root` | `:root` 或消费节点 |
| `--font-size-article` | `0.875rem` | 文章字号 | `:root` | `:root` 或消费节点 |
| `--font-size-root` | `16px` | 根字号 | `:root` | `:root` 或消费节点 |
| `--font-size-page-lineHeight` | `1.5384615385` | 页面行高配置产生的变量 | `:root` | `:root` 或消费节点 |

默认声明由现有主题插件生成。`--font-size-page-lineHeight` 当前没有配套 `--font-size-page`；body 字号和行高来自编译后的 text-page，不能依赖不存在的变量。

### vars-base-colors

```json
{"name": "主题色板与界面变量", "summary": "列出全部主题颜色及深浅映射。"}
```

调色板变量模板是 `--color-{palette}-{level}`；palette 仅为 gray/primary/secondary/success/warning/danger/important/special，level 仅为下表 11 个等级。下表为实际浅色值；深色对每个色板按相反顺序映射（50→950、100→900、200→800、300→700、400→600、500→500，其余对称）。

| 色板 | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| gray | `#f8fafc` | `#f1f5f9` | `#e2e8f0` | `#cbd5e1` | `#94a3b8` | `#64748b` | `#475569` | `#334155` | `#1e293b` | `#0f172a` | `#020617` |
| primary | `#eff6ff` | `#dbeafe` | `#bfdbfe` | `#93c5fd` | `#60a5fa` | `#3b82f6` | `#2563eb` | `#1d4ed8` | `#1e40af` | `#1e3a8a` | `#172554` |
| secondary | `#f0f9ff` | `#e0f2fe` | `#bae6fd` | `#7dd3fc` | `#38bdf8` | `#0ea5e9` | `#0284c7` | `#0369a1` | `#075985` | `#0c4a6e` | `#082f49` |
| success | `#f0fdf4` | `#dcfce7` | `#bbf7d0` | `#86efac` | `#4ade80` | `#22c55e` | `#16a34a` | `#15803d` | `#166534` | `#14532d` | `#052e16` |
| warning | `#fffbeb` | `#fef3c7` | `#fde68a` | `#fcd34d` | `#fbbf24` | `#f59e0b` | `#d97706` | `#b45309` | `#92400e` | `#78350f` | `#451a03` |
| danger | `#fef2f2` | `#fee2e2` | `#fecaca` | `#fca5a5` | `#f87171` | `#ef4444` | `#dc2626` | `#b91c1c` | `#991b1b` | `#7f1d1d` | `#450a0a` |
| important | `#fdf2f8` | `#fce7f3` | `#fbcfe8` | `#f9a8d4` | `#f472b6` | `#ec4899` | `#db2777` | `#be185d` | `#9d174d` | `#831843` | `#500724` |
| special | `#faf5ff` | `#f3e8ff` | `#e9d5ff` | `#d8b4fe` | `#c084fc` | `#a855f7` | `#9333ea` | `#7e22ce` | `#6b21a8` | `#581c87` | `#3b0764` |

界面颜色是编译时取值，不是运行时引用色板变量的 var 表达式；覆盖色板后，如需同时改变 link/canvas 等语义颜色，应一并覆盖它们。

| 变量 | 浅色值 | 深色覆盖值 |
| --- | --- | --- |
| `--color-inherit` | `inherit` | `inherit` |
| `--color-transparent` | `transparent` | `transparent` |
| `--color-current` | `currentColor` | `currentColor` |
| `--color-black` | `#000` | `#000` |
| `--color-white` | `#fff` | `#fff` |
| `--color-canvas` | `#fff` | `#020617` |
| `--color-canvas-light` | `#fff` | `#fff` |
| `--color-canvas-dark` | `#f8fafc` | `#f8fafc` |
| `--color-inverse` | `#000` | `#fff` |
| `--color-surface` | `#f1f5f9` | `#1e293b` |
| `--color-surface-light` | `#f8fafc` | `#0f172a` |
| `--color-surface-strong` | `#e2e8f0` | `#334155` |
| `--color-fore` | `#1e293b` | `#cbd5e1` |
| `--color-fore-in-light` | `#1e293b` | `#1e293b` |
| `--color-fore-in-dark` | `#fff` | `#fff` |
| `--color-focus` | `#bfdbfe` | `#1e40af` |
| `--color-link` | `#3b82f6` | `#3b82f6` |
| `--color-link-hover` | `#2563eb` | `#60a5fa` |
| `--color-link-visited` | `#1d4ed8` | `#93c5fd` |
| `--color-link-active` | `#1e40af` | `#bfdbfe` |
| `--color-placeholder` | `#94a3b8` | `#475569` |
| `--color-border` | `#e2e8f0` | `#1e293b` |
| `--color-border-strong` | `#cbd5e1` | `#334155` |
| `--color-border-light` | `#f1f5f9` | `#0f172a` |

每个值为十六进制颜色的变量还生成同名 `-rgb` 变量，值为逗号分隔十进制 R,G,B（如 `--color-primary-500-rgb: 59,130,246`）；在 rgba() 中使用。改变颜色时同步对应 RGB，避免透明色仍使用旧值。声明在 `:root`，深色覆盖在 `.dark`，`.light-in-dark` 恢复浅色，系统深色下 `.dark-auto` 使用深色。建议覆盖相同主题作用节点。

## javascript

无。

## types

无。

## recipes

局部主题可在区域根覆盖 `--color-primary-500` 与对应 `--color-primary-500-rgb`。全局字号在 `:root` 覆盖 `--font-size-root`，以 rem 为单位的控件尺寸随之变化。

## constraints

`@apply -xxx` 的内部 Tailwind 类不构成公开工具类；使用 [utilities](../utilities/ai.md) 查真实支持。主题屏幕变量仅是长度信息，CSS 媒体查询不能直接消费 var()。深色变量不保证未使用这些变量的外部控件也切换。

## references

- [公开入口](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/base/src/main.ts>)
- [全局规则](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/base/src/global.css>)
- [变量配置](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/config/tailwind-theme/variables.cjs>)
- [颜色配置](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/config/tailwind-theme/colors.cjs>)
- [深色配置](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/config/tailwind-theme/dark-colors.cjs>)
- [构建配置](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/scripts/build/css-config.cjs>)
- [主题说明](<https://github.com/easysoft/zui/blob/b9ff8a6070382039ef110dd01ed6b34318bc63fc/lib/base/docs/guide/config/color.md>)
