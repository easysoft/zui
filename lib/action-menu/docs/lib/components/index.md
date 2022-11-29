# 操作菜单

操作菜单是一个不包含具体外观的通用组件，需要通过 JS 动态调用，通常用于构建更复杂的组件，例如菜单、工具栏、列表等。

## 示例

通过构造一个 `ActionMenu` 实例，在一个空的 `<div>` 元素上创建一个菜单。

<Example>
  <div id="actionMenu"></div>
</Example>

<script>
export default {
    mounted() {
        onZUIReady(() => {
            const actionMenu = new zui.ActionMenu('#actionMenu', {
                className: 'row gap-3 items-center',
                items: [
                    {title: '复制', icon: 'icon-copy'},
                    {title: '粘贴', icon: 'icon-paste'},
                    {text: '剪切'},
                    {type: 'heading', title: '更多操作'},
                    {title: '导入', icon: 'icon-upload-alt'},
                    {title: '导出', icon: 'icon-download-alt'},
                    {title: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
                ],
                itemProps: {
                    item: {
                        className: 'flex-inline row items-center gap-2 state',
                    },
                },
                onClickItem: (info) => {
                    console.log('> actionMenu.onClickItem', info);
                },
            });
            console.log('> actionMenu', actionMenu);

            new zui.ActionMenu('#navExample', {
                name: 'nav',
                items: [
                    {text: '首页', icon: 'icon-home'},
                    {text: '动态'},
                    {text: '论坛'},
                    {type: 'divider'},
                    {text: '博客', icon: 'icon-rss'},
                    {text: '关注我们', icon: 'icon-group'},
                ],
                onClickItem: (info) => {
                    console.log('> nav.onClickItem', info);
                },
            });
            const nestedActionMenu = new zui.ActionMenuNested('#nestedActionMenu', {
                nestedTrigger: 'click',
                items: [
                    {type: 'heading', text: '更多操作'},
                    {text: '导入', icon: 'icon-upload-alt'},
                    {text: '导出', icon: 'icon-download-alt'},
                    {
                        text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event),
                        items: [
                            {text: '保存到云端'},
                            {
                                text: '下载到本地',
                                items: [
                                    {text: '下载为 PDF'},
                                    {text: '下载为 Excel'},
                                ],
                            },
                        ],
                    },
                ],                
                onClickItem: (info) => {
                    console.log('> menu.onClickItem', info);
                },
            });
            new zui.ActionMenu('#actionMenuItemRender', {
                className: 'row gap-3 items-center',
                items: [
                    {title: '复制', icon: 'icon-copy'},
                    {title: '粘贴', icon: 'icon-paste'},
                    {text: '剪切'},
                ],
                itemRender: (e) => {
                    e.text = 'itemRender';
                },
            });
        })
    },
};
</script>

```html
<div id="actionMenu"></div>

<script>
const actionMenu = new ActionMenu('#actionMenu', {
    className: 'row gap-3 items-center',
    items: [
        {title: '复制', icon: 'icon-copy'},
        {title: '粘贴', icon: 'icon-paste'},
        {text: '剪切'},
        {type: 'heading', title: '更多操作'},
        {title: '导入', icon: 'icon-upload-alt'},
        {title: '导出', icon: 'icon-download-alt'},
        {title: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
    ],
    itemProps: {
        item: {
            className: 'flex-inline row items-center gap-2 state',
        },
    },
    onClickItem: (info) => {
        console.log('> actionMenu.onClickItem', info);
    },
});
console.log('> actionMenu', actionMenu);
</script>
```

## 引入

### 通过 npm

```js
import {ActionMenu} from 'zui/action-menu';

const menu = new ActionMenu(element, options);
```

### 通过全局对象 `zui`

```js
const menu = new zui.ActionMenu(element, options);
```

### 使用 React 组件

```jsx
import {render} from 'react';
import {ActionMenu} from 'zui/action-menu/react';

render(element, <ActionMenu {...options} />);
```

### 使用 jQuery 扩展

```js
$(element).actionmenu(options);

const actionMenu = $(element).data('zui.actionmenu');
```

## 更新菜单项

调用菜单组件实例上的 `render` 方法来更新菜单项，并重新进行渲染：

```js
actionMenu.render({
    items: [
        // ... 新的菜单项
    ],
    // ... 可以传入其他新的选项
});
```

## 动态菜单项

将选项 `items` 设置为一个函数，当需要显示菜单时会调用此函数来创建新的菜单项列表。

```js
new ActionMenu('#actionMenu', {
    items: () => {
        const itemList = [
            {title: '剪切'},
            {title: '复制', icon: 'icon-copy'},
        ];

        if (clipboardHasContent) {
            itemList.push({title: '粘贴', icon: 'icon-paste'});
        }

        return itemList;
    }
})
```



## 监听点击事件

### `onClickItem`

**参数对象：**

* `event`：事件对象
* `item`：当前点击的单项数据
* `index`
* `menu`：组件信息


**监听**

## 多层级菜单

<Example class="flex gap-4">
  <div id="nestedActionMenu"></div>
</Example>

```html
<div id="nestedActionMenu"></div>

<script>
new zui.ActionMenuNested('#nestedActionMenu', {
    nestedTrigger: 'click',
    items: [
        {type: 'heading', text: '更多操作'},
        {text: '导入', icon: 'icon-upload-alt'},
        {type: 'divider'},
        {text: '导出', icon: 'icon-download-alt'},
        {
            text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event),
            items: [
                {text: '保存到云端'},
                {
                    text: '下载到本地',
                    items: [
                        {text: '下载为 PDF'},
                        {text: '下载为 Excel'},
                    ],
                },
            ],
        },
    ],
    onClickItem: (info) => {
        console.log('> menu.onClickItem', info);
    },
});
</script>
```

## 基于此创建新组件
 
通过继承 [ActionMenu 组件](https://github.com/easysoft/zui/blob/zui3_dev/lib/action-menu/src/component/action-menu.tsx) 类来创建一个新的 JS 组件，例如创建一个导航：

```js
class Nav extends ActionMenu {
    // ...此处可选的对 ActionMenu 成员进行重写
}
```

<Example>
  <div id="navExample"></div>
</Example>

```html
<div id="navExample"></div>

<script>
const nav = new Nav('#navExample', {
    // name: 'nav', // 不再需要，会自动根据 Nav 类名使用 `nav` 作为组件类名
    items: [
        {text: '首页', icon: 'icon-home'},
        {text: '动态'},
        {text: '论坛'},
        {type: 'divider'},
        {text: '博客', icon: 'icon-rss'},
        {text: '关注我们', icon: 'icon-group'},
    ],
    onClickItem: (info) => {
        console.log('> nav.onClickItem', info);
    },
});
console.log('> nav', nav);
</script>
```

## 构造方法

**定义：**

```ts
constructor(element: HTMLElement | string, options: ActionMenuOptions);
```

**参数：**

* `element`：指定用于创建菜单的容器元素，或者通过字符串指定用于查找容器元素的选择器
* `options`：指定选项

**示例：**

```ts
new ActionMenu('#menu', {
    items: [
        {title: '复制', icon: 'icon-copy'},
        {title: '粘贴', icon: 'icon-paste'},
    ]
});
```

## 选项

### `className`

类名。

* 类型：`string | object | array`；
* 必选：否。

### `hasIcons`

指定操作菜单项中是否包含左侧图标（方便对图标和文本进行对齐），当此选项为空时会自动根据实际项进行判断。

* 类型：`boolean`。

### `name`

自定义生成的操作菜单类名。

* 类型：`string`；
* 必选：否。

### `items`

定义菜单项列表，可以通过一个函数动态返回菜单项列表。

* 类型：<code>[ActionMenuItemOptions](#actionmenuitemoptions)[]|((menu: ([ActionMenuItemOptions](#actionmenuitemoptions))<[ActionMenuItemOptions](#actionmenuitemoptions)>) => [ActionMenuItemOptions](#actionmenuitemoptions)[])</code>；
* 必选：是。

### `children`

子项内容。

* 类型：`ComponentChildren`；
* 必选：否。

### `itemRender`

指定一个回调函数用于对组件渲染进行自定义。

* 类型：`Record<string, ComponentType> | ActionMenuItemRender<T>`；
* 必选：否。

该回调函数不同内容拥有不同的行为：

* <code>Partial<[MenuListItem]></code>：对原列表项定义对象进行修改；
* `react.ComponentChildren`：返回自定义渲染内容；
* `undefined`：不对默认渲染行为进行干预。

**参数**

* `key`：键值；
* 其他数据：每个子项的信息。


<Example>
  <div id="actionMenuItemRender"></div>
</Example>

```html
<div id="actionMenuItemRender"></div>

<script>
 const actionMenuItemRender = new zui.ActionMenu('#actionMenuItemRender', {
    className: 'row gap-3 items-center',
    items: [
        {title: '复制', icon: 'icon-copy'},
        {title: '粘贴', icon: 'icon-paste'},
        {text: '剪切'},
    ],
    itemRender: (e) => {
        e.text = 'itemRender';
    },
});
</script>
```

### `onClickItem`

操作菜单的点击回调事件。

### `beforeRender`

指定一个回调函数在渲染之前调用。

### `afterRender`

指定一个回调函数在渲染之后调用。

**参数：**

* `firstRender`：判断是否第一次渲染；
* `menu`：组件信息。

### `afterDestroy`

指定一个回调函数在组件销毁之后调用。

## 方法

### `render`

重新渲染，可以指定新的选项。

**定义：**

```ts
render(options: Partial<ActionMenuOptions>): void;
```

**参数：**

* `options`：需要重新设置的选项。


## API

### `ActionMenuItemOptions`

操作菜单项定义对象。

#### `icon`

左侧图标。

* 类型：`string | VNode`；
* 必选：否。

#### `trailingIcon`

右侧图标。

* 类型：`string | VNode`；
* 必选：否。


#### `type`

操作项类型。

* 类型：`string`；
* 必选：否；
* 可选项：`item | divider | heading | custom`。

#### `className`

类名。

* 类型：`string`；
* 必选：否。

#### `style`

样式。

* 类型：`ClassNameLike`；
* 必选：否。

#### `url`

跳转链接地址。

* 类型：`string`；
* 必选：否。

#### `target`

在何处打开链接地址。

* 类型：`string`；
* 必选：否；
* 可选项： `_self | _self | _black | _top | _parent` 。

#### `disabled`

是否禁用。

* 类型：`boolean`；
* 必选：否；
* 默认： `false`。

#### `active`

是否是激活状态。

* 类型：`boolean`；
* 必选：否；
* 默认： `false`。

#### `key`

键值。

* 类型：`string | number`；
* 必选：否。

#### `onClick`

鼠标点击的回调方法。

* 类型：`function`；
* 必选：否。

#### `rootProps`

根节点自定义属性对象。

* 类型：`object`；
* 必选：否。

#### `items`

子级操作数据。

* 类型：`array`；
* 必选：否。

#### `rootClass`

与 `action-menu-item` 同级类名。

* 类型：`string`；
* 必选：否。
