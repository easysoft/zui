# 状态响应

## 效果

通过为元素添加工具类 `state` 让按钮响应用户的鼠标交互，包括鼠标悬停、鼠标按下、获得焦点时拥有不同的样式。

::: tabs
== 示例

<Example class="col gap-2 items-start">
  <a>普通链接</a>
  <a class="state">State 链接</a>
  <div>普通 DIV</div>
  <div class="state">State DIV</div>
  <a class="state disabled">State Disabled</a>
  <a class="state active">State Active</a>
</Example>

== HTML

```html
<a>普通链接</a>
<a class="state">State 链接</a>
<div>普通 DIV</div>
<div class="state">State DIV</div>
<a class="state disabled">State Disabled</a>
<a class="state active">State Active</a>
```
:::

::: tip 提示
在按钮（`.btn`）和导航中的链接（`.nav > li > a` ）已经默认应用了 `state` 工具类，无需再次添加。
:::
