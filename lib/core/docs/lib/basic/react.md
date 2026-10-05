# Preact 组件与原生包装层

<a id="react-组件"></a>

ZUI 的部分界面使用 Preact 实现，`ComponentFromReact` 将这些 Preact 组件包装为可通过 `new zui.Nav(...)` 等方式调用的原生 JavaScript 组件。类名中的 `React` 是现有 API 名称，内部视图使用的是 Preact。

如果你正在 React 应用中接入 ZUI，请阅读 [在 React 中使用 ZUI 组件](/lib/basic/core/use-zui-in-react.html)。本页面向 ZUI 组件开发者，说明包装层与内部视图的关系。

## 两层组件的职责

| 层次 | 职责 |
| --- | --- |
| 原生包装层 `ComponentFromReact` | 继承 [Component](/lib/basic/core/component.html)，负责 DOM 容器、配置、实例获取、事件与销毁 |
| 内部 Preact 组件 | 由包装类的 `static Component` 指定，接收 props 并渲染界面 |

应用通常使用包装层公开的 `render()` 和 `destroy()` 等方法。重新渲染时由 Preact 协调更新 DOM；不要在外部直接修改它管理的子树，以免后续更新覆盖这些改动。

## 访问内部实例

包装实例的 `$` 属性返回内部 Preact 实例，类型为具体组件类型或 `null`。首次渲染前及销毁后可能为 `null`，需要访问时先检查实例是否存在，并以具体组件公开的属性和方法为准。

`ComponentFromReact` 默认在初始化后的 `afterInit()` 阶段首次渲染。调用包装层的 `render(options)` 会合并配置，再将适用的选项传给内部 Preact 组件；调用 `destroy()` 会卸载内部 Preact 树并清空 `$`。

## 渲染为 HTML

具体包装类提供静态方法 `renderHTML(options)`，返回其渲染出的 HTML 字符串。该方法会创建 DOM 元素并调用渲染逻辑，需要浏览器的 `document`，不作为服务端渲染接口。

## 关联用法

- [组件基类](/lib/basic/core/component.html)：创建、获取和更新原生实例。
- [在 React 中使用 ZUI 组件](/lib/basic/core/use-zui-in-react.html)：在 React 生命周期中创建、同步和清理 ZUI 实例。
- [Web Component 使用与开发](/lib/basic/core/web-component.html)：将原生包装层或 Preact 视图接入自定义元素。
