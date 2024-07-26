# 便捷事件绑定

## 介绍

便捷事件机制允许通过 HTML 元素属性 `[zui-on-*]` 来绑定事件。下面为一个例子：

::: tabs

== 示例

<Example>
  <button type="button" class="btn" zui-on-click="alert('Hello World!')">Click Me</button>
</Example>

== HTML

```html
<button type="button" class="btn" zui-on-click="alert('Hello World!')">Click Me</button>
```

:::

上例中，通过 `[zui-on-click]` 属性绑定点击事件，通过属性指定需要执行的 JS 代码，从而实现当点击按钮时，将会弹出一个对话框。

::: tip 提示
编辑事件机制实际原理为在 `document` 元素上绑定了一个事件监听器，当事件触发时，会检查事件源元素是否存在 `[data-on-*]` 属性，如果存在，则会根据 `[data-on-*]` 属性的值来执行 JS 代码。根据此原理，需要被监听的元素上的事件能够被冒泡到 `document` 上。
:::

## 事件类型

在 ZUI3 中默认支持的便捷绑定事件类型包括：

* `click`：点击事件；
* `inited`：组件初始化事件；
* `change`：变更事件。

## 自定义选项

除了可以直接指定要执行的 JS 代码，还可以通过一个对象来指定事件绑定选项，例如：

::: tabs

== 示例

<Example>
  <button type="button" class="btn" zui-on-click="{call: 'alert', params: [1 + 2], prevent: true}">1+2=?</button>
</Example>

== HTML

```html
<button type="button" class="btn" zui-on-click="{call: 'alert', params: [1 + 2], prevent: true}">1+2=?</button>
```

:::

所有可用的选项包括：

| 选项 | 说明 |
| -- | -- |
| `on` | 事件类型，必须，目前支持点击（`'click'`）和变更（`'change'`）事件 |
| `selector` | 事件是否仅能触发在符合指定选择器的内部元素上，相当于事件委托 |
| `do` | 要执行的 JS 代码，可选 |
| `call` | 要执行的回调函数，可选 |
| `params` | 需要传递给 JS 代码的参数，多个参数使用 `,` 分隔，也可以通过 JSON 数组的形式指定 |
| `if` | 在执行 JS 代码和回调函数之前进行判断，如果结果为 `false` 则不会执行 |
| `once` | 是否只执行一次，默认 `false` |
| `stop` | 是否阻止事件冒泡，相当于调用 `stopPropagation`，默认 `false` |
| `prevent` | 是否阻止默认行为，相当于调用 `preventDefault`，默认 `false` |
| `self` | 是否尽在点击自身时触发。 |


## 内置参数

在指定执行代码和回调函数参数时有一些内置参数可以直接通过约定名称引用，包括：

* `event`：事件对象；
* `options`：事件绑定选项；
* `$element`：事件源元素（`Cash` 类型）。

例如：

::: tabs

== 示例

<Example>
  <button type="button" class="btn" zui-on-click="{call: 'console.log', params: ['事件', event]}">事件类型</button>
</Example>

== HTML

```html
<button type="button" class="btn" zui-on-click="{call: 'console.log', params: ['事件', event]}">事件类型</button>
```

:::

内置参数还可以直接用于 `do` 代码中和 `call` 回调函数定义中，例如：

::: tabs

== 示例

<Example>
<button type="button" class="btn" zui-on-click="{do: alert('事件类型：' + event.type)}" data-on="click">显示事件类型</button>
</Example>

== HTML

```html
<button type="button" class="btn" zui-on-click="{do: alert('事件类型：' + event.type)}" data-on="click">显示事件类型</button>
```

:::
