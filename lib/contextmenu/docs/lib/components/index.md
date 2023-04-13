# 上下文菜单

自定义鼠标右击动态生成菜单。

## 使用方法

鼠标右击时，展开更多操作， 在响应的区域添加 `data-toggle="contextmenu"`。

### 静态用法

<Example class="flex gap-4">
  <div class="w-full h-32 primary-pale row items-center justify-center" data-toggle="contextmenu">
    在此区域使用右键菜单
  </div>
  <menu class="contextmenu menu">
    <li class="menu-item"><a>操作</a></li>
    <li class="menu-item"><a>另一个操作</a></li>
    <li class="menu-item"><a>更多操作</a></li>
  </menu>
</Example>

```html
<div class="w-full h-32 primary-pale row items-center justify-center" data-toggle="contextmenu">
  在此区域使用右键菜单
</div>
<menu class="contextmenu menu">
  <li class="menu-item"><a>操作</a></li>
  <li class="menu-item"><a>另一个操作</a></li>
  <li class="menu-item"><a>更多操作</a></li>
</menu>
```

### 动态生成

<Example class="flex gap-4">
  <div class="h-32 w-full primary-pale row items-center justify-center" id="menuToggle1">
    在此区域使用右键菜单
  </div>
</Example>

```html
<div class="h-32 w-full primary-pale row items-center justify-center" id="menuToggle1">
  在此区域使用右键菜单
</div>

<script>
new zui.ContextMenu('#menuToggle1', {
    items: [
        {text: '复制', icon: 'icon-copy'},
        {text: '粘贴', icon: 'icon-paste'},
        {text: '剪切'},
        {type: 'heading', text: '更多操作'},
        {text: '导入', icon: 'icon-upload-alt'},
        {text: '导出', icon: 'icon-download-alt'},
        {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
    ],
    menu: {
        onClickItem: (info) => {
            console.log('> menu.onClickItem', info);
        },
    },
});
</script>
```

## 引入

### 通过npm

```js
import {ContextMenu} from 'zui/contextmenu';
const contextMenu = new ContextMenu(element, options);
```

### 通过全局对象

```js
const contextMenu = new zui.ContextMenu(element, options);
```

### 使用React 组件

```js
import {render} from 'react';
import {ContextMenu} from 'zui/contextmenu/react';

render(element, <ContextMenu {...options} />);
```

### 使用Jquery 扩展

```js
$(element).contextMenu(options);

const contextMenu = $(element).data('zui.contextmenu');
```

## 多级菜单

<Example class="flex gap-4">
  <div class="h-32 w-full primary-pale row items-center justify-center" id="menuToggle3">
    在此区域使用右键菜单进行多级展示
  </div>
</Example>

```html
<div class="h-32 w-full primary-pale row items-center justify-center" id="menuToggl3">
  在此区域使用右键菜单
</div>

<script>
const contextMenu = new zui.ContextMenu('#menuToggle3', {
    items: [
        {text: '复制', icon: 'icon-copy'},
        {text: '粘贴', icon: 'icon-paste'},
        {text: '剪切'},
        {type: 'heading', text: '更多操作'},
        {text: '导入', icon: 'icon-upload-alt'},
        {text: '导出', icon: 'icon-download-alt'},
        {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
    ],
    menu: {
        onClickItem: (info) => {
            console.log('> menu.onClickItem', info);
        },
    },
});
</script>
```

## 主动展开菜单

上下文菜单不仅可以响应鼠标右键点击事件，还可以通过监听元素点击事件主动展示更多操作。

<Example class="flex gap-4">
  <button type="button" class="btn primary rounded" id="menuToggle2">点击打开菜单</button>
</Example>

```html
<div class="p-6 row items-center justify-center">
  <button type="button" class="btn primary rounded" id="menuToggle2">点击打开菜单</button>
</div>

<script>
document.getElementById('menuToggle2')?.addEventListener('click', (event) => {
    const contextmenu = ContextMenu.show({
        event,
        items: [
            {text: '复制', icon: 'icon-copy'},
            {text: '粘贴', icon: 'icon-paste'},
            {text: '剪切'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: 'icon-upload-alt'},
            {text: '导出', icon: 'icon-download-alt'},
            {text: '保存', icon: 'icon-save', onClick: (e) => console.log('> menuItem.clicked', e)},
        ],
        menu: {
            onClickItem: (info) => {
                console.log('> menu.onClickItem', info);
            },
        },
    });
    console.log('> contextmenu', contextmenu);
});
</script>
```

<script>
export default {
    mounted() {
        onZUIReady(() => {
            const contextMenu1 = new zui.ContextMenu('#menuToggle1', {
                items: [
                    {text: '复制', icon: 'icon-copy'},
                    {text: '粘贴', icon: 'icon-paste'},
                    {text: '剪切'},
                    {type: 'heading', text: '更多操作'},
                    {text: '导入', icon: 'icon-upload-alt'},
                    {text: '导出', icon: 'icon-download-alt'},
                    {text: '保存', icon: 'icon-save', onClick: (event) => console.log('> menuItem.clicked', event)},
                ],
                menu: {
                    onClickItem: (info) => {
                        console.log('> menu.onClickItem', info);
                    },
                },
            });
            const contextMenu3 = new zui.ContextMenu('#menuToggle3', {
                items: [
                    {text: '复制', icon: 'icon-copy' },
                    {text: '粘贴', icon: 'icon-paste'},
                    {text: '剪切'},
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
            });
            document.getElementById('menuToggle2')?.addEventListener('click', (event) => {
                const contextmenuByBtn = zui.ContextMenu.show({
                    event,
                    items: [
                        {text: '复制', icon: 'icon-copy'},
                        {text: '粘贴', icon: 'icon-paste'},
                        {text: '剪切'},
                        {type: 'heading', text: '更多操作'},
                        {text: '导入', icon: 'icon-upload-alt'},
                        {text: '导出', icon: 'icon-download-alt'},
                        {text: '保存', icon: 'icon-save', onClick: (e) => console.log('> menuItem.clicked', e)},
                    ],
                    menu: {
                        onClickItem: (info) => {
                            console.log('> menu.onClickItem', info);
                        },
                    },
                });
            });
        })
    },
};
</script>

## 构造方法

右键菜单组件基于 [菜单生成器](/lib/components/menu/js) 进行开发。

**定义：**

```ts
constructor(element: HTMLElement | string, options: ContextMenuOptions);
```

**参数：**

* `element`：指定用于创建上下文菜单的容器元素，或者通过字符串指定用于查找容器元素的选择器
* `options`：指定选项

**示例：**

```ts
new ContextMenu('#contextMenu', {
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
基于 [菜单](/lib/components/menu/js.html) 选项和。

* 类型：`array`
* 必选：是

### `placement`

操作菜单展开位置。

* 类型：`string`
* 可选项：  `auto `（默认） | `auto-start` | `auto-end`
  | `top`
  | `top-start`
  | `top-end`
  | `bottom`
  | `bottom-start`
  | `bottom-end`
  | `right`
  | `right-start`
  | `right-end`
  | `left`
  | `left-start`
  | `left-end`;

### `strategy`

操作菜单定位方式。

* 类型：`string`
* 可选项： `absolute` | `fixed`
* 必选：否
* 默认：`fixed`

### `hasIcons`

指定菜单项中是否包含左侧图标（方便对图标和文本进行对齐），当此选项为空时会自动根据实际菜单项进行判断。

* 类型：`boolean`
* 必选：否

## 事件

### `show`

展示菜单。

```html
<button type="button" class="btn primary rounded" id="menuShowByBtn">点击打开菜单</button>

<script>
document.getElementById('menuShowByBtn')?.addEventListener('click', (event) => {
    ContextMenu.show({
        event,
        ...
    });
});
</script>
```

## API

### `items` 的单个对象属性

#### `text`

名称。

* 类型：`string`；
* 必选：否。

#### `icon`

左侧图标。

* 类型：`string`；
* 必选：否。

#### `trailingIcon`

右侧图标。

* 类型：`string | VNode`；
* 必选：否。

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

#### `type`

单项类型。

* 类型：`string`；
* 必选：否；
* 可选项：`item | divider | heading | custom`；
* 默认： `item`。

#### `rootClass`

与 `menu-item` 同级类名。

* 类型：`string`；
* 必选：否。

#### `items`

子级操作数据。

* 类型：`array`；
* 必选：否。

#### `onClick`

点击操作菜单项的回调事件。

* 类型：`function`；
* 必选：否。
