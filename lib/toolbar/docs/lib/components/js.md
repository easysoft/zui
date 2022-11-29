# 工具栏生成器

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

可在选项 `btnProps` 中设置 `btnType` 属性展示出视觉效果良好的工具栏组件。

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
        {icon: 'icon-group', btnType: 'primary'},
    ],
});
```

## 禁用

<Example class="col gap-2">
  <div id="disabledToolbar"></div>
</Example>

```js
const disabledToolbar = new zui.Toolbar('#disabledToolbar', {
    items: [
        {icon: 'icon-home'},
        {type: 'divider'},
        {icon: 'icon-rss', disabled: true},
        {icon: 'icon-group'},
    ],
    onClickItem: (info) => {
        console.log('> disabledToolbar.onClickItem', info);
    },
});
```

## 尺寸

当使用不同大小的工具栏组件时，可以在选项 `btnProps` 中设置 `size` 属性获取其他尺寸外观。

<Example class="col gap-2">
  <div id="xsToolbar"></div>
  <div id="smToolbar"></div>
  <div id="lgToolbar"></div>
  <div id="xlToolbar"></div>
</Example>

```js
const xsToolbar = new zui.Toolbar('#xsToolbar', {
    btnProps: {btnType: 'primary', size: 'xs'},
    gap: 2,
    items: [
        {icon: 'icon-home'},
        {icon: 'icon-rss'},
        {icon: 'icon-group'},
    ],
});
const smToolbar = new zui.Toolbar('#smToolbar', {
    btnProps: {btnType: 'primary', size: 'sm'},
    // ...
});
const lgIconToolbar = new zui.Toolbar('#lgToolbar', {
    btnProps: {btnType: 'primary', size: 'lg'},
    // ...
});
const lgIconToolbar = new zui.Toolbar('#xlToolbar', {
    btnProps: {btnType: 'primary', size: 'xl'},
    // ...
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

继承按钮组件的属性， 自定义工具栏单项属性。

* 类型：<code>[ButtonProps](#buttonprops) </code>
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

### `ButtonProps`

继承按钮的属性。

#### `text`

标题。

* 类型：`ComponentChildren`；
* 必选：否。

#### `icon`

左侧图标。

* 类型：`string | VNode`；
* 必选：否。

#### `trailingIcon`

右侧图标。

* 类型：`string | VNode`；
* 必选：否。

#### `hint`

按钮鼠标悬浮提示文案。

* 类型：`string`；
* 必选：否；

#### `component`

标签类型

* 类型：`string | ComponentType`；
* 必选：否。

#### `btnType`

工具栏项的类型。

* 类型：`string`；
* 必选：否；
* 可选项：`primary, secondary ...`。

#### `size`

工具栏项的尺寸

* 类型：`string`；
* 必选：否；
* 可选项：`'xs' | 'sm' | 'lg' | 'xl'`。

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

#### `loading`

加载中状态。

* 类型：`boolean`；
* 必选：否；
* 默认： `false`。

#### `square`

是否展示为正方形。

* 类型：`boolean`；
* 必选：否；
* 默认： `true`。

#### `caret`

工具栏项展示箭头。

* 类型：`string | boolean`；
* 必选：否；
* 可选项：`up | down | left | right | boolean`；
* 默认： `false`。

#### `onClick`

鼠标点击的回调方法。

* 类型：`function`；
* 必选：否。

#### `children`

子元素。

* 类型：`ComponentChildren | (() => ComponentChildren)`；
* 必选：否。

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
            console.log('toolbar ->', toolbar);
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
            console.log('dropdownToolbar ->', dropdownToolbar);
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
            console.log('iconToolbar ->', iconToolbar);
            const btnTypeIconToolbar = new zui.Toolbar('#btnTypeIconToolbar', {
                btnProps: {btnType: 'secondary', size: 'xs'},
                gap: 1,
                items: [
                    {icon: 'icon-home'}, 
                    {icon: 'icon-rss'},
                    {icon: 'icon-group', btnType: 'primary'},
                ],
            });
            console.log('btnTypeIconToolbar ->', btnTypeIconToolbar);
            const toolbarSizeList = ['xs', 'sm', 'lg', 'xl'];
            toolbarSizeList.forEach(item => {
                new zui.Toolbar(`#${item}Toolbar`, {
                    btnProps: {btnType: 'primary', size: item},
                    gap: 2,
                    items: [
                        {icon: 'icon-home'},
                        {icon: 'icon-rss'},
                        {icon: 'icon-group'},
                    ],
                });
            });
            new zui.Toolbar('#disabledToolbar', {
                items: [
                    {icon: 'icon-home'},
                    {type: 'divider'},
                    {icon: 'icon-rss', disabled: true},
                    {icon: 'icon-group'},
                ],
                onClickItem: (info) => {
                    console.log('> disabledToolbar.onClickItem', info);
                },
            });
        });
    },
};
</script>
