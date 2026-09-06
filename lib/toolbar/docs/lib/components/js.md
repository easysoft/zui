# 工具栏生成器

`Toolbar` 通过数据组合按钮、下拉菜单、按钮组、分隔线和间距。它继承[按钮组](/lib/components/btn-group/)和[通用列表](/lib/components/common-list/)的能力，适合表格操作区、编辑操作区等场景。

## 基本使用

::: tabs

== 示例

<Example>
  <ZUI use="toolbar" :options="toolbarOptions" />
  <p class="text-sm text-gray mt-2" role="status">{{ toolbarAction }}</p>
</Example>

== HTML

```html
<div id="documentToolbar"></div>
```

== JS

```js
const toolbar = new zui.Toolbar('#documentToolbar', {
    gap: 2,
    itemKey: 'id',
    items: [
        {id: 'save', text: '保存', icon: 'save', btnType: 'primary'},
        {id: 'preview', text: '预览', icon: 'eye-open'},
        {type: 'divider'},
        {id: 'more', type: 'dropdown', text: '更多', items: [
            {text: '导出', icon: 'download-alt', onClick() { console.log('导出'); }},
            {text: '复制链接', icon: 'link', onClick() { console.log('复制链接'); }},
        ]},
        {id: 'delete', text: '删除', disabled: true},
    ],
    onClickItem({item}) {
        if (item.id === 'save' || item.id === 'preview') {
            console.log('执行操作', item.id);
        }
    },
});
```

:::

<script setup>
import {ref} from 'vue';
const toolbarAction = ref('请选择一个操作');
const toolbarOptions = {
    gap: 2,
    itemKey: 'id',
    items: [
        {id: 'save', text: '保存', icon: 'save', btnType: 'primary'},
        {id: 'preview', text: '预览', icon: 'eye-open'},
        {type: 'divider'},
        {id: 'more', type: 'dropdown', text: '更多', items: [
            {text: '导出', icon: 'download-alt', onClick() { toolbarAction.value = '已选择：导出'; }},
            {text: '复制链接', icon: 'link', onClick() { toolbarAction.value = '已选择：复制链接'; }},
        ]},
        {id: 'delete', text: '删除', disabled: true},
    ],
    onClickItem({item}) {
        if (item.id === 'save' || item.id === 'preview') {
            toolbarAction.value = `已选择：${item.text}`;
        }
    },
};
</script>

## 条目类型

| `type` | 内容 | 主要选项 |
| --- | --- | --- |
| `item` 或省略 | 普通按钮 | `text`、`icon`、`btnType`、`url`、`disabled`、`onClick` |
| `dropdown` | 下拉按钮 | `items`、`menu`、`dropdown`、`caret` |
| `btn-group` | 嵌套按钮组 | `items`、`btnProps`、`size` |
| `divider` | 分隔线 | 可用 `className` 调整样式 |
| `space` | 占位间距 | `space` 设置尺寸，`flex` 设置弹性 |
| `angle` | 右向分隔箭头 | 可用 `className` 调整样式 |

`type` 决定条目类型，按钮的配色和外观使用 `btnType`。普通条目带有 `items` 或 `dropdown` 且未指定类型时，会按下拉按钮处理。

```js
toolbar.render({items: [
    {type: 'btn-group', items: [
        {text: '左对齐', icon: 'align-left'},
        {text: '居中', icon: 'align-center'},
        {text: '右对齐', icon: 'align-right'},
    ]},
    {type: 'space', flex: 1},
    {text: '完成', btnType: 'primary'},
]});
```

嵌套按钮组的操作应在其自身的 `onClickItem` 或按钮 `onClick` 中处理。下拉菜单项的回调也在菜单内部定义，详见[菜单生成器](/lib/components/menu/js.html)。

## 共享样式与布局

`btnProps` 为按钮设置共享属性，`btnType`、`size` 提供统一外观；单项配置可以覆盖共享配置。工具栏默认共享 `btnType: 'ghost'`。

```js
toolbar.render({
    size: 'sm',
    btnType: 'secondary',
    gap: '0.75rem',
});
```

数值 `gap` 生成公开的 `gap-*` 工具类，例如 `gap: 2` 对应 `gap-2`；CSS 长度使用字符串。需要换行时使用 `className: 'flex-wrap'`。图标按钮应通过 `attrs: {'aria-label': '保存'}` 提供可访问名称，`hint` 可提供悬停提示。

## 点击、动态条目和更新

`onClickItem(info)` 接收原始 `item`、`index`、最终的 `renderedItem`、`event` 和 `relativeTarget`。单项 `onClick(event, info)` 可以处理独立操作。

`items` 支持数组或同步返回数组的函数。工具栏不直接加载异步数据；先完成请求，再调用 `render({items})` 更新：

```js
toolbar.render({items: [
    {id: 'save', text: '保存', icon: 'save', disabled: false},
    {id: 'publish', text: '发布', btnType: 'primary'},
]});
```

只通过 `setOptions()` 更新配置不会完成 UI 更新；需要重新渲染时使用 `render()`。

## 选项

<Props>
items?: Item[] | (() =&gt; Item[]); // 条目数组或同步生成函数。
itemKey?: string; // 条目标识字段；未设置时使用 key 或条目索引。
className?: ClassNameLike; // 工具栏附加类名。
gap?: number | string; // 工具类级别或 CSS 间距值。
size?: "xs" | "sm" | "md" | "lg" | "xl"; // 共享按钮尺寸。
btnType?: string; // 共享按钮外观。
btnProps?: Partial&lt;ButtonProps&gt;; // 共享按钮属性，默认 btnType 为 ghost。
itemProps?: Partial&lt;Item&gt;; // 共享条目属性。
relativeTarget?: unknown; // 关联业务对象，可在点击回调中取得。
onClickItem?: (info: object) =&gt; void; // 顶层条目点击回调。
getItems?: (items: Item[]) =&gt; Item[] | undefined; // 渲染前转换条目数组。
itemRender?: ItemRender | Record&lt;string, ItemRender&gt;; // 自定义条目内容。
</Props>

按钮、下拉按钮和按钮组的完整选项分别参见[按钮](/lib/components/button/)、[下拉菜单](/lib/components/dropdown/)和[按钮组](/lib/components/btn-group/)。

## 模块引入与销毁

```ts
import {Toolbar} from '@zui/toolbar';
import {Toolbar as ToolbarView} from '@zui/toolbar/react';
import type {ToolbarOptions, ToolbarItemOptions} from '@zui/toolbar';
```

Preact 用法为 `render(<ToolbarView {...options} />, element)`，其中 `render` 从 `preact` 引入；页面需加载 ZUI 样式。

```js
const instance = zui.Toolbar.get('#documentToolbar');
toolbar.destroy();
```

在单页应用移除工具栏时销毁原生实例。
