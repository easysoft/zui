# 全局触发调用

## 使用

全局触发调用允许在元素上通过 `zui-toggle` 属性来声明组件调用，在某个事件（通常为点击）触发时，自动使用选项进行初始化，并执行操作。例如下拉菜单按钮，在点击时声明下拉菜单组件，并打开下拉菜单。下面为一个下拉菜单的例子：

::: tabs

== 示例

<Example>
  <button type="button" class="btn primary" zui-toggle="dropdown" zui-toggle-dropdown='{"items": [{"text": "复制"}, {"text": "粘贴"}]}'>下拉菜单</button>
</Example>

== HTML

```html
<button type="button" class="btn primary" zui-toggle="dropdown" zui-toggle-dropdown='{"items": [{"text": "复制"}, {"text": "粘贴"}]}'>下拉菜单</button>
```

:::

## 兼容模式

在兼容模式下，可以通过 `data-toggle` 属性生命组件，使用其他 `data-*` 属性声明组件初始化选项。

::: tabs

== 示例

<Example>
  <button type="button" class="btn primary" data-toggle="dropdown" data-items='[{"text": "复制"}, {"text": "粘贴"}]'>下拉菜单</button>
</Example>

== HTML

```html
<button type="button" class="btn primary" zui-toggle="dropdown" data-toggle-dropdown="{items: [{text: '复制'}, {text: '粘贴'}]}">下拉菜单</button>
```

:::

## 支持的组件

支持全局触发调用的组件包括：

* [工具提示](/lib/components/tooltip/)
* [下拉菜单](/lib/components/dropdown/)
* [标签页](/lib/components/tabs/)
