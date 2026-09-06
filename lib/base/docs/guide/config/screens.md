# 屏幕

## 屏幕断点

在 ZUI 中定义了一系列屏幕断点，你可以通过这些断点来实现响应式布局。下面为断点配置信息：

| 屏幕断点 | 内部名称 | CSS 变量 | 尺寸范围 |
| --- | :---: | :---: | :---: |
| 超小尺寸 | `xs` | 无 | < <CssPropValue prop="--screen-sm" target="body" /> |
| 小尺寸 | `sm` | `--screen-sm` | ≥ <CssPropValue prop="--screen-sm" target="body" /> |
| 中等尺寸 | `md` | `--screen-md` | ≥ <CssPropValue prop="--screen-md" target="body" /> |
| 大尺寸 | `lg` | `--screen-lg` | ≥ <CssPropValue prop="--screen-lg" target="body" /> |
| 超大尺寸 | `xl` | `--screen-xl` | ≥ <CssPropValue prop="--screen-xl" target="body" /> |
| 2x 超大尺寸 | `2xl` | `--screen-2xl` | ≥ <CssPropValue prop="--screen-2xl" target="body" /> |

## 使用断点

### 通过 `.container` 工具类

使用屏幕断点最简单的方式为使用 CSS 工具类 `.container`，此工具类会让所属元素成为一个随屏幕宽度自动响应的容器。下面为一个示例：

<Example>
  <div class="container p-4 secondary">自适应容器</div>
</Example>

```html
<div class="container">自适应容器</div>
```

了解 `.container` 工具类的更多用法可以参考 [CSS 工具类 / 布局 / 容器](/utilities/layout/utilities/container) 文档。

### 通过 CSS 变量

你可以通过 CSS 变量来获取屏幕断点的值，下面为通过 CSS 变量实现 `.container` 工具类的示例：

```css
.-container {
  width: 100%;
}
@media (min-width: var(--screen-sm)) {
  .-container {
    max-width: var(--screen-sm);
  }
}
@media (min-width: var(--screen-md)) {
  .-container {
    max-width: var(--screen-md);
  }
}
@media (min-width: var(--screen-lg)) {
  .-container {
    max-width: var(--screen-lg);
  }
}
@media (min-width: var(--screen-xl)) {
  .-container {
    max-width: var(--screen-xl);
  }
}
@media (min-width: var(--screen-2xl)) {
  .-container {
    max-width: var(--screen-2xl);
  }
}
```

## 自定义断点

### 修改构建配置

响应式工具类的媒体查询在构建时生成。修改 `config/tailwind-theme/screens.cjs` 中的断点值后，需要重新构建 ZUI，具体参见[主题定制](/themes/#从源码构建主题)。

`--screen-sm`、`--screen-md` 等 CSS 变量可以供应用读取断点值，但覆盖这些变量不会改变已经生成的媒体查询。修改断点时应同时保持应用读取值与构建配置一致。
