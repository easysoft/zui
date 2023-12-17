# 加载指示器

## 用法

通过为元素添加 `load-indicator` 来让其拥有加载指示器的能力，通过添加或移除 `loading` 类来控制加载指示器的显示与隐藏。

::: tabs

== 示例

<Example class="space-y-4">
  <div id="loadExample" class="load-indicator relative center h-40 secondary-pale">
    <p>Hello ZUI!</p>
  </div>
  <button type="button" class="btn primary" onclick="document.getElementById('loadExample').classList.toggle('loading')">切换加载状态</button>
</Example>

== HTML

```html
<div class="load-indicator relative loading">
  <p>Hello ZUI!</p>
</div>
```

::: tip 提示
作为加载指示器的元素 `position` 属性必须为 `relative`、`absolute` 或 `fixed`。
:::
