# 工具栏

基于操作菜单 [操作菜单](/lib/components/action-menu/index) 实现的组件。

## 基本用法

<Example>
  <div id="toolbar"></div>
</Example>

```js
const toolbar = new zui.Toolbar('#toolbar', {
    items: [
        {text: '首页', icon: 'icon-home', active: true},
        {text: '动态'},
        {text: '论坛'},
        {type: 'divider'},
        {text: '博客', icon: 'icon-rss'},
        {text: '关注我们', icon: 'icon-group'},
        {type: 'space', flex: 1},
        {
            type: 'btn-group',
            items: [
                {text: '登录', icon: 'icon-user'},
                {text: '注册', icon: 'icon-lock'},
            ],
        },
    ],
    onClickItem: (info) => {
        console.log('> toolbar.onClickItem', info);
    },
});
console.log('> toolbar', toolbar);
```

## 存在下拉菜单

<Example>
  <div id="dropdownToolbar"></div>
</Example>

```js
const dropdownToolbar = new zui.Toolbar('#dropdownToolbar', {
    items: [
        {text: '首页', icon: 'icon-home', active: true},
        {
            type: 'dropdown',
            icon: 'icon-rss',
            dropdown: {
                items: [
                    {text: '查看'},
                    {text: '订阅'},
                    {text: '取消订阅'},
                ],
            },
        },
        {type: 'divider'},
        {
            type: 'dropdown',
            text: '关于我们',
            icon: 'icon-group',
            dropdown: {
                items: [
                    {text: '关于'},
                    {text: '我们是谁'},
                ],
            },
        },
    ],
    onClickItem: (info) => {
        console.log('> dropdownToolbar.onClickItem', info);
    },
});
console.log('> dropdownToolbar', dropdownToolbar);
```

## 仅图标

<Example class="col gap-2">
  <div id="iconToolbar"></div>
  <div id="btnTypeIconToolbar"></div>
</Example>

```js
const iconToolbar = new zui.Toolbar('#iconToolbar', {
    items: [
        {icon: 'icon-home', active: true},
        {type: 'divider'},
        {icon: 'icon-rss'},
        {icon: 'icon-group'},
    ],
    onClickItem: (info) => {
        console.log('> iconToolbar.onClickItem', info);
    },
});

const btnTypeIconToolbar = new zui.Toolbar('#btnTypeIconToolbar', {
    btnProps: {btnType: 'secondary', size: 'xs'},
    gap: 2,
    items: [
        {icon: 'icon-home'},
        {icon: 'icon-rss'},
        {icon: 'icon-group', type: 'primary'},
    ],
});
```

## 引入

### 通过 npm

```js
import {Toolbar} from 'zui/toolbar';

const toolbar = new Toolbar(element, options);
```

### 通过全局对象 `zui`

```js
const toolbar = new zui.Toolbar(element, options);
```

### 使用 React 组件

```jsx
import {render} from 'react';
import {Toolbar} from 'zui/toolbar/main-react';

render(element, <Toolbar {...options} />);
```

### 使用 jQuery 扩展

```js
$(element).toolbar(options);

const toolbar = $(element).data('zui.toolbar');
```

## 选项

在 [操作菜单](/lib/components/action-menu/index.html#选项) 选项基础上添加新的参数选项。

### `wrap`

限制工具栏按钮过多超出时是否换行。

* 类型：`boolean`；
* 必选：否；
* 默认值：`false`。

### `gap`

自定义工具栏按钮的间距，与 `.toolbar` 同级生成 [`.gap-*`](/utilities/flex/utilities/gap.html) 的工具类控制按钮间距。
 
* 类型：`number | string`
* 必选：否

### `btnProps`

工具栏所有子项属性。

* 类型：`object`
* 必选：否


### `items`

基于 [操作菜单](/lib/components/action-menu/index.html#选项) 选项和按钮选项。

#### `btnType`

设置单个工具栏子项的展示类型。

* 类型：`string`；
* 必选：否；
* 默认：`ghost`。


### `itemRender`

指定一个回调函数用于对组件渲染进行自定义。

### `beforeRender`

指定一个回调函数在渲染之前调用。

### `afterRender`

指定一个回调函数在渲染之后调用。

**参数：**

* `firstRender`：判断是否第一次渲染；
* `menu`：组件信息。

### `afterDestroy`

指定一个回调函数在组件销毁之后调用。

## API

### Toolbar

属性如下：

| 属性名称      | 属性含义                  | 类型       | 必选  |  默认 |
| ------------ | ------------------------ | ---------- | ----- | ------|
| `wrap`       | 超出标签是否换行           | `boolean`   |  否 | `false` |
| `gap`        | 自定义工具栏按钮的间距     | `number \ string` | 否 | — |
| `btnProps`   | 工具栏所有子项属性。       | `object` | 否 | — |
| `items`      | 工具栏子项属性。           | `array` | 是 | — | 

### Toolbar.btnProps

继承按钮的属性。

```ts
type ButtonProps = {
    component?: string | ComponentType;
    btnType?: string; // primary, secondary ...
    size?: 'xs' | 'sm' | 'lg' | 'xl',
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren | (() => ComponentChildren);
    onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;
    url?: string;
    target?: string;
    disabled?: boolean;
    active?: boolean;
    icon?: string | VNode;
    text?: ComponentChildren;
    square?: boolean;
    trailingIcon?: string | VNode;
    caret?: 'up' | 'down' | 'left' | 'right' | boolean;
    hint?: string;
    loading?: boolean;
};
```

### Toolbar.items

继承 [操作菜单](/lib/components/action-menu/index.html#选项) 的属性。


<script>
export default {
    mounted() {
        onZUIReady(() => {
            const toolbar = new zui.Toolbar('#toolbar', {
                items: [
                    {text: '首页', icon: 'icon-home', active: true},
                    {text: '动态'},
                    {text: '论坛'},
                    {type: 'divider'},
                    {text: '博客', icon: 'icon-rss'},
                    {text: '关注我们', icon: 'icon-group'},
                    {type: 'space', flex: 1},
                    {
                        type: 'btn-group',
                        items: [
                            {text: '登录', icon: 'icon-user'},
                            {text: '注册', icon: 'icon-lock'},
                        ],
                    },
                ],
                onClickItem: (info) => {
                    console.log('> toolbar.onClickItem', info);
                },
            });
            const dropdownToolbar = new zui.Toolbar('#dropdownToolbar', {
                items: [
                    {text: '首页', icon: 'icon-home', active: true},
                    {
                        type: 'dropdown',
                        icon: 'icon-rss',
                        dropdown: {
                            items: [
                                {text: '查看'},
                                {text: '订阅'},
                                {text: '取消订阅'},
                            ],
                        },
                    },
                    {type: 'divider'},
                    {
                        type: 'dropdown',
                        text: '关于我们',
                        icon: 'icon-group',
                        dropdown: {
                            items: [
                                {text: '关于'},
                                {text: '我们是谁'},
                            ],
                        },
                    },
                ],
                onClickItem: (info) => {
                    console.log('> dropdownToolbar.onClickItem', info);
                },
            });
            const iconToolbar = new zui.Toolbar('#iconToolbar', {
                items: [
                    {icon: 'icon-home', active: true},
                    {type: 'divider'},
                    {icon: 'icon-rss'},
                    {icon: 'icon-group'},
                ],
                onClickItem: (info) => {
                    console.log('> iconToolbar.onClickItem', info);
                },
            });
            const btnTypeIconToolbar = new zui.Toolbar('#btnTypeIconToolbar', {
                btnProps: {btnType: 'secondary', size: 'xs'},
                gap: 1,
                items: [
                    {icon: 'icon-home'}, 
                    {icon: 'icon-rss'},
                    {icon: 'icon-group', type: 'primary',},
                ],
            });
        });
    },
};
</script>
