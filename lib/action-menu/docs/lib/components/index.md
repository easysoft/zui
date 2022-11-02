# 操作菜单

操作菜单是一个不包含具体外观的通用组件，需要通过 JS 动态调用，通常用于构建更复杂的组件，例如菜单、工具栏、列表等。

## 示例

通过构造一个 `Menu` 实例，在一个空的 `<div>` 元素上创建一个菜单。

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
                  {title: '剪切'},
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
        {title: '剪切'},
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

**监听**

## 多层级菜单

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

* 类型：`string | object | array`
* 必选：否

### `items`

定义菜单项列表，可以通过一个函数动态返回菜单项列表。

* 类型：<code>[MenuListItem](#menulistitem)[] | () => [MenuListItem](#menulistitem)[] | () => Promise<[MenuListItem](#menulistitem)[]></code>
* 必选：是

### `itemRender`

指定一个回调函数用于对组件渲染进行自定义。

* 类型：<code>(item: [MenuListItem](#menulistitem)) => Partial<[MenuListItem](#menulistitem)> | react.ComponentChildren | undefined</code>
* 必选：否

该回调函数不同内容拥有不同的行为：

* <code>Partial<[MenuListItem]></code>：对原列表项定义对象进行修改；
* `react.ComponentChildren`：返回自定义渲染内容；
* `undefined`：不对默认渲染行为进行干预。

### `beforeRender`

指定一个回调函数在渲染之后调用。

### `afterRender`

指定一个回调函数在渲染之后调用。

### `afterDestroy`

指定一个回调函数在渲染之后调用。

## 方法

### `render`

重新渲染，可以指定新的选项。

**定义：**

```ts
render(options: Partial<ActionMenuOptions>): void;
```

**参数：**

* `options`：需要重新设置的选项

## API

### `ActionMenuOptions`

选项定义对象。

```ts
interface ActionMenuOptions {
    items: MenuListItem[] | (() => MenuListItem[]);
    className?: string | object | array;
    hasIcons?: boolean;
    children?: ComponentChildren;
    subMenuTrigger?: 'click' | 'hover' | 'always';
    onClickItem?: (info: {menu: Menu, item: MenuItemOptions, index: number, event: MouseEvent}) => void;
    onRenderSubMenu?: (info: {menu: Menu, item: MenuItemOptions, h: typeof _h}) => ComponentChildren;
    afterRender?: (info: {menu: Menu, firstRender: boolean}) => void;
    beforeDestroy?: (info: {menu: Menu}) => void;
}
```

### `Menu`

菜单组件类。

**定义**

```ts
class Menu {
    constructor(element: string | HTMLElement, options: Partial<ActionMenuOptions>);

    options: ActionMenuOptions;

    element: HTMLElement;

    render(options: Partial<ActionMenuOptions>): void;

    setOptions(options?: Partial<ActionMenuOptions>): ActionMenuOptions;

    destroy(): void;

    toggleSubMenu(key: string | number, toggle?: boolean): void;

    clearAllSubMenu();

    isSubMenuShow(key: string | number);
}
```

### `MenuListItem`

菜单项定义对象。

**定义：**

```ts
type MenuListItem = MenuItemOptions | MenuHeadingOptions | MenuDividerOptions;
```

### `MenuItemOptions`

菜单操作项定义对象。

**定义：**

```ts
type MenuItemOptions = {
    rootClass?: ClassNameLike;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    url?: string;
    target?: string;
    disabled?: boolean;
    active?: boolean;
    icon?: string | VNode;
    title?: ComponentChildren;
    trailingIcon?: string | VNode;
    onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
    children?: ComponentChildren | (() => ComponentChildren);
    rootProps?: JSX.HTMLAttributes<HTMLElement>;
    type?: 'item',
    key?: string | number,
    items?: MenuListItem[],
};
```
