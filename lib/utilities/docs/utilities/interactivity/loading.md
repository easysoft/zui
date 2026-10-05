# 加载指示器

## 用法

通过为元素添加 `load-indicator` 来让其拥有加载指示器的能力，通过添加或移除 `loading` 类来控制加载指示器的显示与隐藏。

::: tabs

== 示例

<Example class="space-y-4">
  <div id="loadExample" class="load-indicator relative center h-40 secondary-pale">
    <p>正在加载项目工单，请稍候。</p>
  </div>
  <button type="button" class="btn primary" onclick="document.getElementById('loadExample').classList.toggle('loading')">切换加载状态</button>
</Example>

== HTML

```html
<div class="load-indicator relative loading">
  <p>正在加载项目工单，请稍候。</p>
</div>
```

:::

::: tip 提示
作为加载指示器的元素 `position` 属性必须为 `relative`、`absolute` 或 `fixed`。
:::

## 加载文本

通过 `data-loading` 属性设置加载文本，文本会在加载动画下方显示，并随 `loading` 类一起显示或隐藏。

::: tabs

== 示例

<Example>
  <div class="load-indicator loading relative h-40 secondary-pale" data-loading="正在加载项目工单，请稍候。"></div>
</Example>

== HTML

```html
<div class="load-indicator loading relative h-40" data-loading="正在加载项目工单，请稍候。"></div>
```

:::
