# 菜单生成器

菜单生成器允许通过 JS 动态创建一个[菜单](/lib/components/menu/index.html)。

## 示例

通过构造一个 `Menu` 实例，在一个空的 `<div>` 元素上创建一个菜单。

<Example>
  <div id="menu1" class="w-32"></div>
</Example>

<script>
export default {
    mounted() {
        onZUIReady(() => {
            const menu = new zui.Menu('#menu1', {
                items: [
                    {title: '复制', icon: 'icon-copy'},
                    {title: '粘贴', icon: 'icon-paste'},
                    {title: '剪切'},
                    {type: 'divider'},
                    {type: 'heading', title: '更多操作'},
                    {title: '导入', icon: 'icon-upload-alt'},
                    {title: '导出', icon: 'icon-download-alt'},
                    {title: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
                ],
                onClickItem: (item, index, event) => {
                    console.log('> menu.onClickItem', {item, index, event});
                },
            });
            console.log('> menu', menu);
        })
    },
};
</script>

```html
<div id="menu1" class="w-32"></div>

<script>
const menu = new Menu('#menu1', {
    items: [
        {title: '复制', icon: 'icon-copy'},
        {title: '粘贴', icon: 'icon-paste'},
        {title: '剪切'},
        {type: 'divider'},
        {type: 'heading', title: '更多操作'},
        {title: '导入', icon: 'icon-upload-alt'},
        {title: '导出', icon: 'icon-download-alt'},
        {title: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
    ],
    onClickItem: (item, index, event) => {
        console.log('> menu.onClickItem', {item, index, event});
    },
});
console.log('> menu', menu);
</script>
```

## 引入

### 通过 npm

```js
import {Menu} from 'zui/menu';

const menu = new Menu(element, options);
```

### 通过全局对象 `zui`

```js
const menu = new zui.Menu(element, options);
```

### 使用 React 组件

```jsx
import {render} from 'react';
import {Menu} from 'zui/menu/react';

render(element, <Menu {...options} />);
```

### 使用 jQuery 扩展

```js
$(element).menu(options);

const menu = $(element).data('zui.menu');
```

## 更新菜单项

## 动态菜单项

将选项 `items` 设置为一个函数，当需要显示菜单时会调用此函数来创建新的菜单项列表。

```js
new Menu('#menu', {
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

## 多层级菜单

## 选项

### `className`

类名。

* 类型：`string | object | array`
* 必选：否

### `items`

定义菜单项列表，可以通过一个函数动态返回菜单项列表。

* 类型：<code>[MenuListItem](#menulistitem)[] | () => [MenuListItem](#menulistitem)[] | () => Promise<[MenuListItem](#menulistitem)[]></code>
* 必选：否

### `hasIcons`

指定菜单项中是否包含左侧图标（方便对图标和文本进行对齐），当此选项为空时会自动根据实际菜单项进行判断。

* 类型：`boolean`
* 必选：否

### `subMenuTrigger`

指定触发打开子级菜单的事件。

* 类型：`'click' | 'hover' | 'always'`
* 必选：否

其中当指定为 `'always'` 时，子菜单将永远被渲染。

### `onRenderItem`

指定一个回调函数用于对组件渲染进行自定义。

* 类型：<code>(item: [MenuListItem](#menulistitem)) => Partial<[MenuListItem](#menulistitem)> | react.ComponentChildren | undefined</code>
* 必选：否

该回调函数不同内容拥有不同的行为：

* <code>Partial<[MenuListItem]</code>：对原列表项定义对象进行修改；
* `react.ComponentChildren`：返回自定义渲染内容；
* `undefined`：不对默认渲染行为进行干预。

### `afterRender`

指定一个回调函数在渲染之后调用。

### `afterRender`

指定一个回调函数在渲染之后调用。

## 方法

## 事件

## API

### `Menu`

### `MenuListItem`
