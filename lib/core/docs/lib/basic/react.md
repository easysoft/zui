# React 组件

在 ZUI3 中一些组件使用 Preact 开发，这些组件继承自 `ComponentFromReact` 类，`ComponentFromReact` 类本身继承自 `Component` 类，提供了一些额外的方法：

```ts
class ComponentFromReact extends Component {
    /**
     * 获取组件的 React 实例。
     */
    get $(): React.Component;

    /**
     * 将 React 组件渲染为 HTML。
     *
     * @param options 组件的配置选项。
     */
    static renderHTML(options: object): string;
}
```

React 组件相比较普通的组件有如下特点：

* 组件采用 Preact 开发，当重新进行渲染时，只会更新组件的部分内容，而不是整个元素；
* 组件对应的元素内部禁止直接进行修改，因为每次渲染时都会重新生成组件的内容。

React 组件实例上的 `$` 属性是组件的 React 实例，可以通过这个属性来访问组件的属性和方法。
