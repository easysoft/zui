# 主题

ZUI 通过 CSS 变量和构建配置定义颜色、圆角、阴影、字体及尺寸。已提供 CSS 变量的样式可以在页面中覆盖；字体工具类、媒体查询等编译后的规则需要调整构建配置并重新生成 CSS。

## 覆盖 CSS 变量

将自定义样式放在 ZUI 样式之后。下面调整全局圆角和阴影：

```html
<link rel="stylesheet" href="/assets/zui/zui.css">
<link rel="stylesheet" href="/assets/site-theme.css">
```

```css
/* site-theme.css */
:root {
  --radius: 0.5rem;
  --radius-lg: 0.75rem;
  --shadow: 0 2px 8px rgb(0 0 0 / 0.12);
}
```

也可以把变量限定在局部容器内，使其只影响该区域及后代元素：

<Example>
  <div class="p-4 border rounded shadow" style="--radius: 0.75rem; --shadow: 0 2px 8px rgb(0 0 0 / 0.12);">
    <p class="mb-2">此区域使用局部圆角和阴影。</p>
    <button type="button" class="btn primary rounded">示例按钮</button>
  </div>
</Example>

```css
.settings-panel {
  --radius: 0.75rem;
  --shadow: 0 2px 8px rgb(0 0 0 / 0.12);
}
```

弹出菜单、弹层等内容可能挂载在 `body` 下，不会继承局部容器的变量。需要一致外观时，在其实际挂载容器上应用对应主题。

## 颜色、圆角与阴影

- [颜色](/guide/config/base/color.html)：按调色板覆盖颜色，同时设置相应的 `-rgb` 变量，以保持透明度样式一致。
- [圆角](/guide/config/base/rounded.html)：覆盖 `--radius`、`--radius-sm`、`--radius-lg` 等变量。
- [阴影](/guide/config/base/shadow.html)：覆盖 `--shadow`、`--shadow-sm`、`--shadow-lg` 等变量。

按需覆盖组件自身的 CSS 变量，可以缩小主题影响范围。组件文档中的样式选项和变量表以该组件的当前实现为准。

## 字体、间距与断点

[字体](/guide/config/base/font.html)和[间距](/guide/config/base/spacing.html)提供默认取值说明。调整根字号会影响使用 `rem` 的尺寸；字体工具类中的具体字体、字号、字重，以及以固定值生成的间距规则，需要在源码构建时调整。

[屏幕断点](/guide/config/base/screens.html)用于生成媒体查询。修改 `--screen-sm` 等 CSS 变量不会重写已经生成的媒体查询，也不会改变 `sm:` 等响应式工具类的生效宽度。

## 从源码构建主题

在 ZUI 源码项目中，共享主题入口是 `config/tailwind-theme/index.cjs`。常用配置文件如下：

| 文件 | 配置内容 |
| --- | --- |
| `colors.cjs`、`dark-colors.cjs` | 常规及深色配色 |
| `border-radius.cjs` | 圆角 |
| `box-shadow.cjs` | 阴影 |
| `font-family.cjs`、`font-size.cjs` | 字体和字号 |
| `screens.cjs` | 响应式断点 |
| `variables.cjs` | 共享 CSS 变量 |

以上路径相对于 `config/tailwind-theme/`。这些是构建输入，修改后需在项目根目录重新构建：

```sh
pnpm build --name=my-theme
```

此命令生成 `dist/my-theme/` 下的分发资源。应整体使用本次构建的 CSS 和相关资源，避免在生成文件中手工修改主题。只覆盖已有 CSS 变量时不需要重新构建 ZUI。
