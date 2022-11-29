script# 按钮组生成器

## 基本用法

<Example>
  <div id="btnGroup"></div>
</Example>

```html
<div id="btnGroup"></div>

<script>
const btnGroup = new BtnGroup('#btnGroup', {
    items: [
        {text: '复制', icon: 'icon-copy'},
        {text: '粘贴', icon: 'icon-paste'},
        {text: '剪切'},
        {type: 'heading', text: '更多操作', caret: true},
        {text: '导入', icon: 'icon-upload-alt'},
        {text: '导出', icon: 'icon-download-alt'},
        {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> btnGroupItem.clicked', event)},
    ],
    onClickItem: (info) => {
        console.log('> btnGroup.onClickItem', info);
    },
});
console.log('> btnGroup', btnGroup);
</script>
```

## 按钮外观

<Example>
  <div id="iconBtnGroup"></div>
</Example>

```html
<div id="iconBtnGroup"></div>

<script>
const iconBtnGroup = new zui.BtnGroup('#iconBtnGroup', {
    items: [
        {icon: 'icon-search', type: 'primary'},
        {icon: 'icon-refresh', type: 'secondary'},
        {icon: 'icon-check', type: 'success'},
        {icon: 'icon-exclamation-sign', type: 'warning'},
        {icon: 'icon-times', type: 'danger', onClick: (event) => console.log('> btnGroupItem.clicked', event)},
    ],
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
        {icon: 'icon-refresh', disabled: true},
        {icon: 'icon-check'},
    ],
});
</script>
```

## 尺寸

<Example class="col gap-3">
  <div id="xsBtnGroup"></div>
  <div id="smBtnGroup"></div>
  <div id="lgBtnGroup"></div>
  <div id="xlBtnGroup"></div>
</Example>

```html
<div id="xsBtnGroup"></div>
<div id="smBtnGroup"></div>
<div id="lgBtnGroup"></div>
<div id="xlBtnGroup"></div>

<script>
const btnGroup = new BtnGroup('#xsBtnGroup', {
    size: 'xs',
    items: [
        {icon: 'icon-copy'},
        {icon: 'icon-paste'},
        {type: 'heading', caret: true},
        {icon: 'icon-upload-alt'},
        {icon: 'icon-download-alt'},
        {icon: 'icon-save', onClick: (event) => console.log('> btnGroupItem.clicked', event)},
    ],
});
const btnGroup = new BtnGroup('#smBtnGroup', {
    size: 'sm',
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

### `items`

* 类型：<code>[ButtonProps](#buttonprops) </code>
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

* 类型：`string`；
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

按钮的外观类型。

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
            const btnGroup = new zui.BtnGroup('#btnGroup', {
                items: [
                    {text: '复制', icon: 'icon-copy'},
                    {text: '粘贴', icon: 'icon-paste'},
                    {text: '剪切'},
                    {type: 'heading', text: '更多操作', caret: true, children: [
                        {text: '复制', icon: 'icon-copy'},
                    ]},
                    {text: '导入', icon: 'icon-upload-alt'},
                    {text: '导出', icon: 'icon-download-alt'},
                    {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> btnGroupItem.clicked', event)},
                ],
                onClickItem: (info) => {
                    console.log('> btnGroup.onClickItem', info);
                },
            });
            console.log('> btnGroup', btnGroup);
            
            const iconBtnGroup = new zui.BtnGroup('#iconBtnGroup', {
                items: [
                    {icon: 'icon-search', type: 'primary'},
                    {icon: 'icon-refresh', type: 'secondary'},
                    {icon: 'icon-check', type: 'success'},
                    {icon: 'icon-exclamation-sign', type: 'warning'},
                    {icon: 'icon-times', type: 'danger', onClick: (event) => console.log('> btnGroupItem.clicked', event)},
                ],
            });
            const sizeList = ['xs', 'sm', 'lg', 'xl'];
            sizeList.forEach(item => {
                new zui.BtnGroup(`#${item}BtnGroup`, {
                    size: item,
                    items: [
                        {icon: 'icon-search'},
                        {icon: 'icon-refresh'},
                        {icon: 'icon-check'},
                        {icon: 'icon-exclamation-sign'},
                    ],
                });
            });
            new zui.BtnGroup('#disabledBtnGroup', {
                items: [
                    {icon: 'icon-search'},
                    {icon: 'icon-refresh', disabled: true},
                    {icon: 'icon-check'},
                ],
            });
        });
    },
};
</script>

