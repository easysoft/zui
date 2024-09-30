# 便捷组件声明


在 ZUI 中，所有 JS 组件支持通过声明 `zui-create` 属性来自动创建，例如：

::: tabs

== 示例

<Example>
  <div zui-create="datePicker"></div>
</Example>

== HTML

```html
<div zui-create="datePicker"></div>
```

:::

使用 `zui-create-<component>` 来定义组件选项，例如：

::: tabs

== 示例

<Example>
  <div zui-create zui-create-list="{items: [{text: 'item1'}, {text: 'item2'}], onClickItem: (e) => console.log('You clicked', e)}"></div>
</Example>

== HTML

```html
<div zui-create zui-create-list="
  {
    items: [{text: 'item1'}, {text: 'item2'}],
    onClickItem: (e) => console.log('You clicked', e)
  }
"></div>
```

:::

::: warning 注意
通过 `zui-create` 创建的组件，只会在页面加载完成后自动扫描一次，如果需要在动态添加的元素上利用 `zui-create` 创建组件，需要手动执行 `$(element).zuiInit()` 初始化。
:::
