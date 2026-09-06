# 菜单生成器

`Menu` 根据数据创建[菜单](/lib/components/menu/)，支持分组、图标、嵌套项和点击回调。使用原生实例时，通过 `render()` 更新选项，通过 `$` 访问菜单的交互方法。

## 基本使用

::: tabs

== 示例

<Example>
  <ZUI use="menu" :options="menuOptions" />
  <p class="text-sm text-gray mt-2" role="status">{{ menuAction }}</p>
</Example>

== HTML

```html
<div id="fileMenu"></div>
```

== JS

```js
const menu = new zui.Menu('#fileMenu', {
    className: 'w-48',
    nestedToggle: '.listitem',
    items: [
        {type: 'heading', text: '文件操作'},
        {id: 'copy', text: '复制', icon: 'copy'},
        {id: 'paste', text: '粘贴', icon: 'paste', disabled: true},
        {type: 'divider'},
        {id: 'export', text: '导出', icon: 'download-alt', items: [
            {id: 'pdf', text: 'PDF 文件'},
            {id: 'html', text: 'HTML 文件'},
        ]},
    ],
    onClickItem({item, event}) {
        if (!item.items) {
            event.preventDefault();
            console.log('执行操作', item.id);
        }
    },
});
```

:::

<script setup>
import {ref} from 'vue';
const menuAction = ref('请选择一个操作');
const menuOptions = {
    className: 'w-48',
    nestedToggle: '.listitem',
    items: [
        {type: 'heading', text: '文件操作'},
        {id: 'copy', text: '复制', icon: 'copy'},
        {id: 'paste', text: '粘贴', icon: 'paste', disabled: true},
        {type: 'divider'},
        {id: 'export', text: '导出', icon: 'download-alt', items: [
            {id: 'pdf', text: 'PDF 文件'},
            {id: 'html', text: 'HTML 文件'},
        ]},
    ],
    onClickItem({item, event}) {
        if (!item.items) {
            event.preventDefault();
            menuAction.value = `已选择：${item.text}`;
        }
    },
};
</script>

## 菜单项

`items` 的普通条目使用 `MenuItemOptions`，也支持 `type: 'heading'` 和 `type: 'divider'`。推荐为普通条目提供稳定的 `id`；`itemKey` 默认为 `id`。

<Props>
id?: string | number; // 条目标识。
text?: CustomContentType; // 显示文本。
icon?: IconType; // 前置图标。
url?: string; // 链接地址。
target?: string; // 链接打开目标。
disabled?: boolean; // 禁用条目交互。
active?: boolean; // 高亮条目。
trailingIcon?: IconType; // 尾部图标。
items?: NestedListItem[]; // 子菜单项。
onClick?: (event: MouseEvent, info: object) =&gt; void; // 单项点击回调。
</Props>

`onClickItem(info)` 接收原始 `item`、当前层级的 `index`、最终渲染数据 `renderedItem` 和鼠标 `event`。条目的 `onClick(event, info)` 也可以处理独立操作。需要阻止链接跳转时调用 `event.preventDefault()`。

## 子菜单

子菜单使用条目的 `items` 定义。默认点击展开图标可切换；示例设置 `nestedToggle: '.listitem'`，使整行点击也可切换。

- `defaultNestedShow` 设置初始展开状态，可为布尔值或键路径映射。
- `nestedShow` 可由调用方传入展开状态。
- `accordion: true` 在展开某个分支时收起其他分支。
- `nestedTrigger: 'hover'` 配合 `wrap: true` 可启用鼠标悬停展开；触屏场景应保留点击用法。

初始化后可通过内部菜单实例控制展开。多级键路径使用冒号分隔：

```js
await menu.$?.toggle('export', true);
await menu.$?.toggleAll(false);
const expanded = menu.$?.isExpanded('export');
```

## 动态数据与更新

`items` 支持数组、返回数组的函数和异步数据设置，加载规则与[列表](/lib/components/list/#异步数据)一致。更新数据时调用原生实例的 `render()`：

```js
menu.render({items: [
    {id: 'save', text: '保存', icon: 'save'},
    {id: 'close', text: '关闭'},
]});
```

需要重新请求同一个动态数据源时，可在初始化后调用 `await menu.$?.load()`。异步加载可通过 `onLoad(items)` 处理结果，通过 `onLoadFail(error)` 提供失败内容。

## 选项

<Props>
items?: ListItemsSetting; // 菜单项和动态数据设置。
itemKey?: string = "id"; // 条目键字段。
className?: ClassNameLike; // 菜单附加类名。
compact?: boolean; // 紧凑布局。
popup?: boolean; // 弹出菜单外观，不负责定位或显示切换。
wrap?: boolean; // 启用菜单外层容器。
wrapClass?: ClassNameLike; // 外层容器附加类名。
wrapAttrs?: Record&lt;string, unknown&gt;; // 外层容器 DOM 属性。
height?: SizeSetting; // 外层容器高度，需启用 wrap。
maxHeight?: SizeSetting; // 外层容器最大高度，需启用 wrap。
header?: CustomContentType; // 外层容器头部，需启用 wrap。
footer?: CustomContentType; // 外层容器底部，需启用 wrap。
scrollbarThin?: boolean; // 细滚动条，需启用 wrap。
scrollbarHover?: boolean = true; // 悬停显示滚动条，需启用 wrap。
nestedTrigger?: "click" | "hover"; // 子菜单触发方式，默认使用点击。
nestedToggle?: string; // 点击展开目标选择器。
defaultNestedShow?: boolean | Record&lt;string, boolean&gt; = false; // 初始展开状态。
accordion?: boolean; // 同时只展开一个分支。
onClickItem?: (info: object) =&gt; void; // 条目点击回调。
onToggle?: (key: string, toggle: boolean, reset?: boolean) =&gt; false | void; // 展开变化前回调，false 取消变化。
afterRender?: (firstRender: boolean) =&gt; void; // 每次渲染后回调。
beforeDestroy?: () =&gt; void; // 卸载前回调。
</Props>

自定义单项渲染使用 `itemRender`，渲染前调整数据使用 `getItem`、`getItems` 或 `beforeRenderItem`，详见[通用列表](/lib/components/common-list/)。弹出定位和触发行为由[下拉菜单](/lib/components/dropdown/)或[上下文菜单](/lib/components/contextmenu/)提供。

## 模块引入与销毁

```ts
import {Menu} from '@zui/menu';
import {Menu as MenuView} from '@zui/menu/react';
import type {MenuOptions, MenuItemOptions} from '@zui/menu';
```

Preact 入口使用 `import {render} from 'preact'`，调用顺序为 `render(<MenuView {...options} />, element)`，样式可单独引入 `@zui/menu/css`。

```js
const instance = zui.Menu.get('#fileMenu');
menu.destroy();
```

在单页应用卸载页面时销毁原生实例，避免保留菜单和事件监听。
