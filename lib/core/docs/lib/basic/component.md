# 组件基类

`Component` 是 ZUI 原生 JavaScript 组件的共同基类，提供创建、更新、事件和销毁等能力。本页先介绍组件实例的日常使用，再列出基类接口。

使用 Preact 开发组件时，继续阅读 [Preact 组件与原生包装层](/lib/basic/core/react.html)；通过自定义元素接入时，阅读 [Web Component 使用与开发](/lib/basic/core/web-component.html)。

## 创建组件实例
每个组件通常对应一个元素，只有使用对应元素创建了组件实例，组件才会生效，例如：

::: tabs

== 示例

<Example>
  <nav zui-create zui-create-nav="{items: [{text: '项目概览'}, {text: '任务看板'}]}"></nav>
</Example>

== HTML

```html
<nav id="myNav"></nav>

<script>
const nav = new zui.Nav('#myNav', {
    items: [
        {text: '项目概览'},
        {text: '任务看板'},
    ]
});
</script>
```

:::

另一种方式是[通过 `zui-create` 属性来声明组件](/guide/start/#%E4%BD%BF%E7%94%A8-zui-create-%E5%A3%B0%E6%98%8E%E7%BB%84%E4%BB%B6)，例如：

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

## 调用组件方法

当创建了组件实例后，就可以调用组件实例上的方法，例如：

::: tabs

== 示例

<Example>
  <ZUI use="Nav" :options="{items: [{text: '项目概览'}, {text: '任务看板'}]}" :ready="instance => nav = instance" />
  <button type="button" class="btn" :disabled="!nav" @click="nav.render({items: [{text: '项目概览', url: '#overview'}, {text: '任务看板'}, {text: '团队成员'}]})">重新渲染</button>
</Example>

== HTML

```html
<nav id="myNav"></nav>
<button id="myNavRenderBtn">重新渲染</button>

<script>
const nav = new zui.Nav('#myNav', {
    items: [
        {text: '项目概览'},
        {text: '任务看板'},
    ]
});

$('#myNavRenderBtn').on('click', () => {
    nav.render({
        items: [
            {text: '项目概览', url: '#overview'},
            {text: '任务看板'},
            {text: '团队成员'},
        ]
    });
});
</script>
```

:::

## 获取组件实例

在组件类上提供了一些静态方法用于获取指定元素上的组件实例，例如：

```html
<nav id="myNav"></nav>

<script>
new zui.Nav('#myNav', {
    items: [
        {text: '项目概览'},
        {text: '任务看板'},
    ]
});

const nav = zui.Nav.get('#myNav');
</script>
```

## Component 类

在 ZUI 3 中所有 JS 组件继承自 `Component` 类，`Component` 类为组件提供了统一的属性和方法：

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

## 通过自定义元素使用组件

ZUI 3.1 标准发布构建提供通用封装能力，由应用定义和注册自定义元素，不导出具体组件的 Web Component 封装。基础示例见 [Web Component 基本使用](/lib/basic/core/web-component.html#通过自定义元素使用组件)，工厂和适配层的详细说明见：

<a id="在组件外定义-web-component"></a>

- [在组件外定义 Web Component](/lib/basic/core/web-component.html#在组件外定义-web-component)

<a id="由组件库声明-web-component"></a>

- [由组件库声明 Web Component](/lib/basic/core/web-component.html#由组件库声明-web-component)

<a id="配置与类型"></a>

- [配置与类型](/lib/basic/core/web-component.html#配置与类型)

<a id="内容插槽"></a>

- [内容插槽](/lib/basic/core/web-component.html#内容插槽)

<a id="手动创建与注册"></a>

- [手动创建与注册](/lib/basic/core/web-component.html#手动创建与注册)

<script setup>
import {shallowRef} from 'vue';

const nav = shallowRef();
</script>
