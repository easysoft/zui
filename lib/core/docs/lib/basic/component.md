# 组件基类


## Component 类

在 ZUI3 中所有 JS 组件继承自 `Component` 类，`Component` 类为组件提供了统一的属性和方法：

```ts
/**
 * 组件基类。
 */
class Component {
    /**
     * 组件名称。
     */
    static NAME: string;

    /**
     * 组件默认配置。
     */
    static DEFAULT: object;

    /**
     * 组件构造方法。
     *
     * @param element 组件对应的元素或用于获取对应元素的选择器。
     * @param options 组件的配置选项。
     */
    constructor(element: HTMLElement | string, options: object);

    /**
     * 渲染组件，可以选择在渲染组件时重新指定组件的部分配置。
     *
     * @param options 可选的组件的配置选项。
     */
    render(options?: object): void;

    /**
     * 销毁组件。
     */
    destroy(): void;

    /**
     * 监听组件事件。
     *
     * @param event 事件名称。
     * @param handler 事件处理函数。
     */
    on(event: string, handler: Function): void;

    /**
     * 取消监听组件事件。
     *
     * @param event 事件名称。
     */
    off(event: string): void;

    /**
     * 获取指定元素上的组件实例。
     *
     * @param element 元素或元素选择器。
     * @param key 组件的唯一标识。
     */
    static query(element: HTMLElement | string, key?: string): Component;
}
```

## 创建组件实例

每个组件通常对应一个元素，只有使用对应元素创建了组件实例，组件才会生效，例如：

::: tabs

== HTML

```html
<nav id="myNav"></nav>

<script>
const nav = new zui.Nav('#myNav', {
    items: [
        {text: 'Home'},
        {text: 'Blog'},
    ]
});
</script>
```

== 示例

<Example>
  <nav zui-create zui-create-nav="{items: [{text: 'Home'}, {text: 'Blog'}]}"></nav>
</Example>

:::

另一种方式是[通过 `zui-create` 属性来声明组件](/guide/start/#%E4%BD%BF%E7%94%A8-zui-create-%E5%A3%B0%E6%98%8E%E7%BB%84%E4%BB%B6)，例如：

::: tabs

== HTML

```html
<div zui-create="datePicker"></div>
```

== 示例

<Example>
  <div zui-create="datePicker"></div>
</Example>

:::

## 调用组件方法

当创建了组件实例后，就可以调用组件实例上的方法，例如：

::: tabs

== HTML

```html
<nav id="myNav"></nav>
<button id="myNavRenderBtn">重新渲染</button>

<script>
const nav = new zui.Nav('#myNav', {
    items: [
        {text: 'Home'},
        {text: 'Blog'},
    ]
});

$('#myNavRenderBtn').on('click', () => {
    nav.render({
        items: [
            {text: 'Home', url: '#home'},
            {text: 'Blog'},
            {text: 'About'},
        ]
    });
});
</script>
```

== 示例

<Example>
  <nav zui-create zui-create-nav="{items: [{text: 'Home'}, {text: 'Blog'}]}"></nav>
  <button id="myNavRenderBtn1">重新渲染</button>
</Example>

:::

## 获取组件实例

在组件类上提供了一些静态方法用于获取指定元素上的组件实例，例如：

```html
<nav id="myNav"></nav>

<script>
new zui.Nav('#myNav', {
    items: [
        {text: 'Home'},
        {text: 'Blog'},
    ]
});

const nav = zui.Nav.get('#myNav');
</script>
```
