# 禁用

## 效果

使用 `disabled` 类设置元素为禁用，禁用的元素会以半透明的形式显示，并强制使用灰度显示。

::: warning 注意

禁用元素仍然响应鼠标事件，如果需要完全禁用鼠标事件，需要添加 `pointer-events-none`，如果是表单元素或按钮则可以添加 `disabled="disabled"` 属性实现完全禁用。

:::

:::tabs

== 示例

<Example class="row gap-3 items-center p-4">
  <a class="disabled">禁用的链接</a>
  <a class="btn disabled">禁用展示</a>
  <button class="btn disabled" disabled>禁用按钮</button>
  <input type="text" class="form-control disabled w-32" disabled>
</Example>

== HTML

```html
<a class="disabled">禁用的链接</a>
<a class="btn disabled pointer-events-none">禁用展示</a>
<button class="btn disabled" disabled>禁用按钮</button>
<input type="text" class="form-control disabled w-32" disabled>
```

:::
