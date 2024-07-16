# 教程

## 介绍

本教程用于快速了解 ZUI3 的概念内容和及其方法，ZUI 3 本身的介绍请参考 [介绍](/guide/start/intro.html) 部分。
如果仅仅想要快速上手 ZUI3，可以直接查看 [快速上手](/guide/start/index.html) 部分。

## 全局配置机制

全局配置机制通过 CSS 变量实现，包括[颜色](/guide/config/base/color.html)、[字体](/guide/config/base/font.html)、[圆角](/guide/config/base/rounded.html)、[屏幕断点](/guide/config/base/screens.html)、[阴影](/guide/config/base/shadow.html)和[间距](/guide/config/base/spacing.html)。

统一的全局配置有如下好处：

* 保证整个系统的 UI 风格统一；
* 方便实现定制主题，以及实现现代深色模式匹配；
* 方便维护。

通过修改这些配置可以对整个系统的 UI 样式风格进行定制，目前由两种方式进行配置：

* 修改 Tailwind CSS 配置，然后打包构建自定义版本；
* 通过定义 CSS 变量来进行覆盖。

上述两种方式也可以同时使用，通过修改 Tailwind CSS 配置来定义基础风格，通过定义 CSS 变量来定制个性化主题。

在实际开发沟通过程中，应该尽量通过名称来引用全局配置，而不是直接使用数值，这样可以保证在修改配置时也会同步进行修改。

## 使用 CSS 工具类

ZUI3 基于 Tailwind CSS 提供了丰富的 CSS 工具类，包括特别的语义化外观工具类，轻松实现常见布局、文字排版、动画、外观定义。下面是一些使用 CSS 工具类的建议：

* 在使用 ZUI3 组件时，如果需要修改组件的外观样式，优先使用 CSS 工具类，而不是直接修改组件的样式；
* 使用 CSS 工具类还可以实现一些简单的自定义界面样式；
* 当 CSS 工具类无法满足需求时，可以通过定义新的 CSS 工具类来实现，如果 ZUI3 中没有，但 Tailwind CSS 中有提供的情况下，可以直接定义 Tailwind CSS 同名类实现。

## 使用 CSS 组件

CSS 组件通常提供了界面所需的基本功能，例如按钮、表单、导航、卡片、表格等，这些组件通常不需要 JS 的支持，只需要在 HTML 中使用对应的类名即可，例如：

```html
<button class="btn primary">Primary Button</button>
```

CSS 组件通常可以配合 CSS 工具类来实现更多的外观样式。

## 使用 JS 组件

### 全局对象 `zui`

在没有使用 ES Module 的情况下，ZUI 3 会在全局对象 `zui` 上暴露所有的 JS 辅助方法和组件类，例如：

```js
const nav = new zui.Nav('#myNav', {
    items: [
        {text: 'Home'},
        {text: 'Blog'},
    ]
});

zui.Messager.show('你好，今天是：' + zui.formatDate(new Date(), 'yyyy年M月d日'));
```

### Component 类

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

### 创建组件实例

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

### 调用组件方法

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

### 获取组件实例

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

const nav = zui.Nav.query('#myNav');
</script>
```

### 通过 Cash 辅助方法使用组件

为了方便手动构造、调用组件，增加了一系列 jQuery 风格的方法，这些方法通过 Cash 实现，详情参考文档 [Cash 辅助方法](/lib/helpers/core/component.html#cash-%E8%BE%85%E5%8A%A9%E6%96%B9%E6%B3%95)。

### ComponentFromReact 类

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

### 点击触发调用

在 ZUI3 中，一些组件支持通过 `data-toggle` 属性来定义点击或鼠标悬停时的切换行为，例如下拉菜单、工具提示、对话框等：


```html
<button type="button" class="btn" data-toggle="popover" data-trigger="hover" data-title="这是提示标题" data-content="这是提示消息">Hover 显示 Popover</button>
```

### 特殊组件调用

一些特殊组件提供了静态方法来直接使用，例如 `Modal`、`Messager` 分别提供了 `open` 和 `show` 方法来直接打开对话框和消息提示框。

### 元素属性前缀

在使用 ZUI3 JS 组件时，可以通过 `zui-*` 属性来调用组件和配置组件行为，另外组件在渲染时也会自动添加一些属性，这些属性通常以 `z-` 为前缀，用于标识组件的状态、配置等信息。下面列举了一些常见的属性以及作用：

- `zui-create` 和 `zui-create-*`：用于声明组件，通过 `zui-create` 属性声明组件，通过 `zui-create-<component>` 来定义组件初始化选项。
- `zui-toggle` 和 `zui-toggle-*`：用于组件点击或鼠标悬停时的切换行为。
- `zui-key` 用于定义组件的唯一标识。
- `zui-on-*`：用于注册组件全局事件。
- `z-*`：组件渲染时自动添加的属性，用于标识组件的状态、配置等信息。

## 初始化脚本

在 ZUI3 中，可以通过元素 `zui-init` 属性来定义页面初始化脚本，这个脚本会在元素呈现到页面后自动执行，例如：

```html
<div zui-init="console.log('hello', $element)">hello</div>
```

传统方式是使用 jQuery 辅助方法实现：

```html
<div id="myElement">hello</div>

<script>
$(function() {
    console.log('hello', $('#myElement'));
});
```

## 便捷事件机制

[便捷事件机制](/lib/helpers/@zentao/helpers/events.html)允许通过 HTML 元素属性 [data-on] 来绑定事件。

## 使用 JS 辅助工具

在 ZUI3 中提供了大量 JS 辅助工具，包括：

* [本地存储](/lib/helpers/store/)
* [js-cookie](/lib/helpers/@zentao/cookie/)
* [日期辅助方法](/lib/helpers/helpers/date-helper.html)
* [字符串辅助方法](/lib/helpers/helpers/string-helper.html)

## 自定义组件

### 自定义 CSS 组件

要定义 CSS 组件只需要定义一系列类名以及对应样式即可，推荐按照如下方式：

* 组件名类名，例如 `component-name`，通常用在组件根元素上。
* 组件内部部分元素类名，例如 `component-name-item`，通常用在组件内部的元素上。
* 组件状态类名，例如 `component-name-active`，通常用在组件的激活状态上。
* 通用状态，例如 `disabled`、`is-collapsed` 等。

### 自定义 JS 组件

自定义 JS 组件需要继承自 `Component` 类，然后实现组件的构造方法、渲染方法、销毁方法等，例如：

```js
/** Steps editor component. */
class StepsEditor extends zui.Component
{
    static NAME = 'StepsEditor';

    static DEFAULT =
    {
        name: 'steps',
        expectsName: 'expects',
        data: ['1', '2', '3'],
        sameLevelIcon: 'plus',
        subLevelIcon: 'split',
        moveIcon: 'move',
        deleteIcon: 'trash',
        expectDisabledTip: '',
        deleteStepTip: '',
        dragNestedTip: '',
        changeLevelByDrag: false,
    };

    init()
    {
        this.reset(this.options.data, true);
    }

    afterInit()
    {
        this.render();
    }

    _renderRow(item, $preRow, $list, $rows)
    {
    }

    render()
    {
        const items = this._items;
        let rootIndex = 0;
        items.forEach(item =>
        {
            updateItemName(item);
            if(item.level === 1)
            {
                item.index = rootIndex;
                rootIndex++;
                updateItemName(item, `${rootIndex}`);
            }
            if(item.children)
            {
                item.children.forEach((subItem, subIndex) =>
                {
                    subItem.index = subIndex;
                    updateItemName(subItem, `${item.name}.${subIndex + 1}`);
                });
            }
        });
        items.sort((a, b) => a.order - b.order);

        const $list = this.$element.find('.steps-editor-body');
        const $rows = $list.find('.steps-editor-item').addClass('is-expired');
        let $preRow = null;
        items.forEach(item =>
        {
            $preRow = this._renderRow(item, $preRow, $list, $rows);
        });
        $rows.filter('.is-expired').remove();
    }

    deleteStep(name)
    {
    }

    focus(name)
    {
    }

    addSub(fromName)
    {
    }

    addSib(fromName, focus = true)
    {
    }

    moveAfter(fromName, toName)
    {
    }

    moveBefore(fromName, toName)
    {
    }
}

/* Define $.fn.stepsEditor() helper. */
StepsEditor.register(); // Register as jQuery plugin.

/* Extend StepsEditor to zui object. */
$.extend(zui, {StepsEditor});
```

## 开发定制入门

参考[打包](/guide/customize/build.html)、[开发](/guide/customize/dev.html)、[扩展](/guide/customize/exts-lib.html)文档。
