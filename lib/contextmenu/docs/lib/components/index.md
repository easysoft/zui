# 上下文菜单

通过鼠标右键触发弹出菜单，或者主动在指定位置展示菜单。

## 使用方法

通过 `new zui.ContextMenu(element, options)` 在响应右键操作的区域初始化上下文菜单。

### 静态用法

通过 `target: '$next'` 将组件关联到紧随其后的菜单元素，右击该区域即可展开菜单。

::: tabs

== 示例

<Example class="flex gap-4">
  <ZUI
    id="contextMenuStatic" use="contextMenu" class="w-full h-32 primary-pale row items-center justify-center"
    :options="{target: '$next'}"
  >
    项目周报.pdf · 右键查看文件操作
  </ZUI>
  <menu class="contextmenu menu popup">
    <li class="menu-item"><a>预览文件</a></li>
    <li class="menu-item"><a>复制链接</a></li>
    <li class="menu-item"><a>下载文件</a></li>
  </menu>
</Example>

== HTML

```html
<div id="contextMenuStatic" class="w-full h-32 primary-pale row items-center justify-center">
  项目周报.pdf · 右键查看文件操作
</div>
<menu class="contextmenu menu popup">
  <li class="menu-item"><a>预览文件</a></li>
  <li class="menu-item"><a>复制链接</a></li>
  <li class="menu-item"><a>下载文件</a></li>
</menu>

<script>
new zui.ContextMenu('#contextMenuStatic', {target: '$next'});
</script>
```

:::

### 动态生成

通过 `items` 提供菜单项数据，右击下方区域查看动态生成的菜单。

::: tabs

== 示例

<Example class="flex gap-4">
  <ZUI
    id="contextMenuDynamic" use="contextMenu" class="w-full h-32 primary-pale row items-center justify-center"
    :options="{
        items: [
            {text: '复制', icon: 'icon-copy'},
            {text: '粘贴', icon: 'icon-paste'},
            {text: '剪切'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: 'icon-upload-alt'},
            {text: '导出', icon: 'icon-download-alt'},
            {text: '保存', icon: 'icon-save'},
        ],
    }"
  >
    项目周报.pdf · 右键查看文件操作
  </ZUI>
</Example>

== HTML

```html
<div id="contextMenuDynamic" class="w-full h-32 primary-pale row items-center justify-center">
  项目周报.pdf · 右键查看文件操作
</div>

<script>
new zui.ContextMenu('#contextMenuDynamic', {
    items: [
        {text: '复制', icon: 'icon-copy'},
        {text: '粘贴', icon: 'icon-paste'},
        {text: '剪切'},
        {type: 'heading', text: '更多操作'},
        {text: '导入', icon: 'icon-upload-alt'},
        {text: '导出', icon: 'icon-download-alt'},
        {text: '保存', icon: 'icon-save'},
    ],
});
</script>
```

:::

## 引入

### 通过 npm

标准 npm 包从 `zui` 导入组件，并通过 `zui/css` 加载样式。以下示例沿用上方的 `#contextMenuDynamic` 容器；与全局对象用法选择一种初始化方式即可。

```js
import {ContextMenu} from 'zui';
import 'zui/css';

const contextMenu = new ContextMenu('#contextMenuDynamic', {
    items: [{text: '复制链接'}, {text: '下载文件'}],
});
```

### 获取实例

```js
const contextMenu = zui.ContextMenu.get('#contextMenuDynamic');
```

上下文菜单提供原生实例 API，没有独立的 Preact 组件入口。在框架中使用时，在容器挂载后创建实例，并在卸载时调用 `contextMenu.destroy()`。

## 多级菜单

在菜单项的 `items` 中定义子菜单。展开“保存 → 下载到本地”可选择文件格式。

::: tabs

== 示例

<Example class="flex gap-4">
  <ZUI
    id="contextMenuNested" use="contextMenu" class="w-full h-32 primary-pale row items-center justify-center"
    :options="{
        items: [
            {text: '复制', icon: 'icon-copy'},
            {text: '粘贴', icon: 'icon-paste'},
            {text: '剪切'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: 'icon-upload-alt'},
            {text: '导出', icon: 'icon-download-alt'},
            {
                text: '保存',
                icon: 'icon-save',
                items: [
                    {text: '保存到团队文档库'},
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
    }"
  >
    项目周报.pdf · 右键查看文件操作
  </ZUI>
</Example>

== HTML

```html
<div id="contextMenuNested" class="w-full h-32 primary-pale row items-center justify-center">
  项目周报.pdf · 右键查看文件操作
</div>

<script>
new zui.ContextMenu('#contextMenuNested', {
    items: [
        {text: '复制', icon: 'icon-copy'},
        {text: '粘贴', icon: 'icon-paste'},
        {text: '剪切'},
        {type: 'heading', text: '更多操作'},
        {text: '导入', icon: 'icon-upload-alt'},
        {text: '导出', icon: 'icon-download-alt'},
        {
            text: '保存',
            icon: 'icon-save',
            items: [
                {text: '保存到团队文档库'},
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
</script>
```

:::

## 主动展开菜单

设置 `trigger: 'manual'` 后，在按钮点击回调中调用实例的 `show({event})`，即可在点击位置展示菜单。

::: tabs

== 示例

<Example class="flex gap-4">
  <ZUI
    id="contextMenuManual" use="contextMenu"
    :options="{
        trigger: 'manual',
        items: [
            {text: '复制', icon: 'icon-copy'},
            {text: '粘贴', icon: 'icon-paste'},
            {text: '剪切'},
            {type: 'heading', text: '更多操作'},
            {text: '导入', icon: 'icon-upload-alt'},
            {text: '导出', icon: 'icon-download-alt'},
            {text: '保存', icon: 'icon-save'},
        ],
    }"
  >
    <button type="button" class="btn primary rounded" id="contextMenuManualTrigger" @click="showContextMenu">文件操作</button>
  </ZUI>
</Example>

== HTML

```html
<div id="contextMenuManual">
  <button type="button" class="btn primary rounded" id="contextMenuManualTrigger">文件操作</button>
</div>

<script>
const contextMenu = new zui.ContextMenu('#contextMenuManual', {
    trigger: 'manual',
    items: [
        {text: '复制', icon: 'icon-copy'},
        {text: '粘贴', icon: 'icon-paste'},
        {text: '剪切'},
        {type: 'heading', text: '更多操作'},
        {text: '导入', icon: 'icon-upload-alt'},
        {text: '导出', icon: 'icon-download-alt'},
        {text: '保存', icon: 'icon-save'},
    ],
});
document.getElementById('contextMenuManualTrigger').addEventListener('click', (event) => {
    contextMenu.show({event});
});
</script>
```

:::

<script setup>
function showContextMenu(event) {
    zui.ContextMenu.get('#contextMenuManual')?.show({event});
}
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

```js
new zui.ContextMenu('#contextMenuDynamic', {
    items: [
        {text: '复制', icon: 'icon-copy'},
        {text: '粘贴', icon: 'icon-paste'},
    ],
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
<button type="button" class="btn primary rounded" id="menuShowByBtn">文件操作</button>

<script>
document.getElementById('menuShowByBtn')?.addEventListener('click', (event) => {
    zui.ContextMenu.show({
        event,
        items: [{text: '复制链接'}, {text: '下载文件'}],
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
