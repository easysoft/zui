# 指针事件

## 效果

通过工具类 `pointer-events-*` 来控制元素是否响应指向事件。

:::tabs

== 示例

<Example class="flex flex-wrap gap-6 p-6">
  <StyleTile
    label="pointer-events-auto"
    name="pointer-events-auto"
    tileClass="w-32 h-16"
    labelClass="font-mono text-sm"
  >
    <a class="pointer-events-auto btn">启用指针事件</a>
  </StyleTile>
  <StyleTile
    label="pointer-events-none"
    name="pointer-events-none"
    tileClass="w-32 h-16"
    labelClass="font-mono text-sm"
  >
    <a class="pointer-events-none btn">禁用指针事件</a>
  </StyleTile>
</Example>

== HTML

```html
<a class="pointer-events-auto btn">启用指针事件</a>
<a class="pointer-events-none btn">禁用指针事件</a>
```

:::
