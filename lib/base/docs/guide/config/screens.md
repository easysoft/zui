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

### 覆盖 CSS 变量

最方便自定义屏幕断点的方式是覆盖 CSS 变量。下面为一个例子：

```css
:root {
  --screen-sm:  640px;
  --screen-md:  768px;
  --screen-lg:  1024px;
  --screen-xl:  1280px;
  --screen-2xl: 1536px;
}
```

### 自定义主题

可以通过定制主题来修改屏幕断点设置，具体参见 [主题](/guide/theme/) 文档。
