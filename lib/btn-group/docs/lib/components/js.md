# 按钮组生成器

## 基本用法

<Example>
  <div id="btnGroup"></div>
</Example>

```js
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

具体如下：

| 属性名称      | 属性含义                   | 类型       | 默认值 | 可选项 |
| ------------ | ------------------------- | ---------- | ----- | ----- |
| `text`       | 名称                       | `string`  |  - | - |
| `size`       | 尺寸                       | `string`  |  - | `xs / sm / lg / xl` |
| `icon`       | 按钮左侧图标                | `string`  | -  | - | 
| `trailingIcon` | 右侧图标                 | `string`  | -  | - | 
| `url`        | 跳转链接地址               | `string`  |  - | - |
| `className`  | 设置 `a` 标签类名          | `string`  |  - | - |
| `style`      | 设置 `a` 标签样式          | `object`  |  - | - |
| `component`  | DOM 元素名称               | `string`  |  - | - |
| `target`     | 在何处打开链接地址          | `string`  | `_self` | ` _self / _black / _top / _parent` |
| `type`       | 按钮类型                 | `string`  | `item`  | `item / divider （分割线）/ heading / custom` |
| `disabled`   | 按钮禁用状态              | `boolean` | `false` | - |
| `active`     | 按钮激活状态              | `boolean` | `false` | - |
| `children`   | 子组件                     | `array`  | -  |  - |
| `onClick`    | 按钮的点击事件              | `function` | -  | -  |
| `square`     | 按钮是否展示为方形          | `boolean` | `true` | - |
| `hint`       | 按钮鼠标悬浮提示文案        | `string` | - | - |
| `caret`      | 箭头展示                   | `string / boolean`  |  - | `up / down / left / right / boolean` |
| `loading`    | 按钮加载状态                | `boolean` | `false` | - |

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
        });
    },
};
</script>

