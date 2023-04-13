# 按钮组生成器

常用于多项按钮操作的组件，通过 JS 动态生成，使用时方便快捷。

## 使用方法

<Example class="flex gap-2">
  <div id="btnGroup"></div>
  <div id="btnGroup2"></div>
</Example>

```html
<div id="btnGroup"></div>
<div id="btnGroup2"></div>

<script>
new zui.BtnGroup('#btnGroup', {
    items: [
        {text: '查看详情', active: true},
        {text: '编辑'},
        {text: '删除'},
    ],
    onClickItem: (info) => {
        console.log('> btnGroup.onClickItem', info);
    },
});
new zui.BtnGroup('#btnGroup2', {
    items: [
        {icon: 'icon-search', hint: '查看详情'},
        {icon: 'icon-edit', hint: '编辑'},
        {icon: 'icon-trash', hint: '删除'},
    ],
    onClickItem: (info) => {
        console.log('> btnGroup.onClickItem', info);
    },
});
</script>
```

## 按钮组外观

配合使用 [CSS 工具类](/utilities/) 来实现不同按钮组的外观。

<Example class="flex gap-1">
  <div id="iconBtnGroup"></div>
  <div id="iconBtnGroup2"></div>
  <div id="iconBtnGroup3"></div>
  <div id="btnGroup2"></div>
</Example>

```html
<div id="iconBtnGroup"></div>
<div id="iconBtnGroup2"></div>
<div id="iconBtnGroup3"></div>

<script>
new zui.BtnGroup('#iconBtnGroup', {
    defaultBtnProps: {className: 'ghost'},
    // items: ...,
});
new zui.BtnGroup('#iconBtnGroup2', {
    defaultBtnProps: {className: 'text-primary'},
    // items: ...,
});
new zui.BtnGroup('#iconBtnGroup3', {
    defaultBtnProps: {className: 'primary-outline bg-canvas'},
    // items: ...,
});
</script>
```

## 禁用

<Example>
  <div id="disabledBtnGroup"></div>
</Example>

```html
<div id="disabledBtnGroup"></div>

<script>
new zui.BtnGroup('#disabledBtnGroup', {
    items: [
        {icon: 'icon-search'},
        {icon: 'icon-edit'},
        {icon: 'icon-trash', disabled: true},
        {icon: 'icon-exclamation-sign'},
    ],
});
</script>
```

## 尺寸

按钮组组件提供除了默认值以外的四种尺寸，可以通过设置 `size` 属性在不同场景下选择合适的按钮尺寸。

<Example class="col gap-3">
  <div id="xsBtnGroup"></div>
  <div id="smBtnGroup"></div>
  <div id="defaultBtnGroup"></div>
  <div id="lgBtnGroup"></div>
  <div id="xlBtnGroup"></div>
</Example>

```html
<div id="xsBtnGroup"></div>
<div id="smBtnGroup"></div>
<div id="defaultBtnGroup"></div>
<div id="lgBtnGroup"></div>
<div id="xlBtnGroup"></div>

<script>
const btnGroup = new BtnGroup('#xsBtnGroup', {
    size: 'xs',
    items: [
        {icon: 'icon-search', hint: '查看详情'},
        {icon: 'icon-edit', hint: '编辑'},
        {icon: 'icon-trash', hint: '删除'},
    ],
});
const btnGroup = new BtnGroup('#smBtnGroup', {
    size: 'sm',
    // ...
});
const btnGroup = new BtnGroup('#defaultBtnGroup', {
    // ...
});
const btnGroup = new BtnGroup('#lgBtnGroup', {
    size: 'lg',
    // ...
});
const btnGroup = new BtnGroup('#xlBtnGroup', {
    size: 'xl',
    // ...
});
</script>
```

## 引入

### 通过 npm

```js
import {BtnGroup} from 'zui/btn-group';

const btnGroup = new BtnGroup(element, options);
```

### 通过全局对象 `zui`

```js
const btnGroup = new zui.BtnGroup(element, options);
```

### 使用 React 组件

```jsx
import {render} from 'react';
import {BtnGroup} from 'zui/btn-group/main-react';

render(element, <BtnGroup {...options} />);
```

### 使用 jQuery 扩展

```js
$(element).btnGroup(options);

const btnGroup = $(element).data('zui.btngroup');
```

## 构造方法

**定义：**

```ts
constructor(element: HTMLElement | string, options: BtnGroupOptions);
```

**参数：**

* `element`：指定用于创建按钮组的容器元素，或者通过字符串指定用于查找容器元素的选择器
* `options`：指定选项

**示例：**

```ts
new BtnGroup('#btnGroup', {
    items: [
        {text: '复制', icon: 'icon-copy'},
        {text: '粘贴', icon: 'icon-paste'},
        {text: '剪切'},
    ],
});
```

## 选项

### `className`

类名。

* 类型：`string`
* 必选：否

### `defaultBtnProps`

继承 [按钮属性](/lib/components/button/js.html#选项)。

* 类型：<code>[ButtonProps](/lib/components/button/js.html#选项) </code>
* 必选：否

### `items`

* 类型：<code>[BtnProps](#btnprops) </code>
* 必选：是

### `size`

按钮尺寸。

* 类型：`string`
* 可选项： `xs | sm | lg | xl`
* 必选：否

### `type`

按钮组类型。

* 类型：`string`
* 必选：否

### `itemRender`

指定一个回调函数用于对组件渲染进行自定义。

**参数**：`items` 选项的单个配置；

**返回值**：`items` 选项的单个配置。

### `beforeRender`

指定一个回调函数在渲染之前调用，可重新配置组件选项。

**参数**：用户为按钮组组件件设置的 `options`；

**返回值**：组件选项数据。


### `afterRender`

指定一个回调函数在渲染之后调用。

**参数：**

* `firstRender`：判断是否第一次渲染；
* `menu`：组件信息。

### `beforeDestroy`

指定一个回调函数在组件销毁之前调用，无参数。

## API

### `btnProps`

按钮组子项属性：

```ts
type BtnProps = ButtonProps & {key?: string | number | symbol};
```

继承[按钮组件 ButtonProps](/lib/components/button/js.html#选项)属性，同时添加了 `key` 属性。

#### `key`

指定单个按钮键值，用户可根据该属性进行特殊处理。

* 类型：`string | number | symbol`；
* 必选：否。

<script>
export default {
    mounted() {
        onZUIReady(() => {
            const btnGroupItems = [
                {icon: 'icon-search', hint: '查看详情'},
                {icon: 'icon-edit', hint: '编辑'},
                {icon: 'icon-trash', hint: '删除'},
            ];
            new zui.BtnGroup('#btnGroup', {
                items: [
                    {text: '查看详情', active: true},
                    {text: '编辑'},
                    {text: '删除'},
                ],
                onClickItem: (info) => {
                    console.log('> btnGroup.onClickItem', info);
                },
            });
            new zui.BtnGroup('#btnGroup2', {
                items: btnGroupItems,
                onClickItem: (info) => {
                    console.log('> btnGroup.onClickItem', info);
                },
            });

            const btnGroupProps = [
                {id: '#iconBtnGroup', className: 'ghost'},
                {id: '#iconBtnGroup2', className: 'text-primary'},
                {id: '#iconBtnGroup3', className: 'primary-outline bg-canvas'},
            ];
            btnGroupProps.forEach(item => {
                new zui.BtnGroup(item.id, {
                    defaultBtnProps: {className: item.className},
                    items: btnGroupItems,
                });
            });

            const sizeList = ['xs', 'sm', 'lg', 'xl'];
            sizeList.forEach(item => {
                new zui.BtnGroup(`#${item}BtnGroup`, {
                    size: item,
                    items: btnGroupItems,
                });
            });
            new zui.BtnGroup('#defaultBtnGroup', {
                items: btnGroupItems,
            });

            new zui.BtnGroup('#disabledBtnGroup', {
                items: [
                    {icon: 'icon-search'},
                    {icon: 'icon-edit'},
                    {icon: 'icon-trash', disabled: true},
                    {icon: 'icon-exclamation-sign'},
                ],
            });
        });
    },
};
</script>

