# 导航生成器

`Nav` 根据数据生成[导航](/lib/components/nav/)，支持不同外观、激活状态和下拉条目。页面路由和内容切换由应用处理。

## 基本使用

::: tabs

== 示例

<Example>
  <ZUI use="nav" :options="navOptions" />
  <p class="text-sm text-gray mt-3" role="status">当前栏目：{{ currentNav }}</p>
</Example>

== HTML

```html
<div id="projectNav"></div>
```

== JS

```js
const nav = new zui.Nav('#projectNav', {
    type: 'tabs',
    active: 'overview',
    items: [
        {id: 'overview', text: '概览', icon: 'home'},
        {id: 'tasks', text: '任务'},
        {id: 'tests', text: '测试'},
        {id: 'more', type: 'dropdown', text: '更多', items: [
            {text: '发布记录', url: '#releases'},
            {text: '项目设置', url: '#settings'},
        ]},
    ],
    onClickItem({item, event}) {
        if (item.type !== 'dropdown') {
            event.preventDefault();
            this.toggleActive(String(item.id), true);
            console.log('切换栏目', item.id);
        }
    },
});
```

:::

<script setup>
import {ref} from 'vue';
const currentNav = ref('概览');
const navOptions = {
    type: 'tabs',
    active: 'overview',
    items: [
        {id: 'overview', text: '概览', icon: 'home'},
        {id: 'tasks', text: '任务'},
        {id: 'tests', text: '测试'},
        {id: 'more', type: 'dropdown', text: '更多', items: [
            {text: '发布记录', url: '#下拉条目'},
            {text: '项目设置', url: '#选项'},
        ]},
    ],
    onClickItem({item, event}) {
        if (item.type !== 'dropdown') {
            event.preventDefault();
            this.toggleActive(String(item.id), true);
            currentNav.value = item.text;
        }
    },
};
</script>

普通导航项的点击不会自动接管应用路由。示例在回调中调用 `toggleActive()` 更新高亮；若使用真实链接，可直接为条目设置 `url`，并由当前页面的路由状态提供 `active`。

## 外观与布局

`type` 支持 `primary`、`secondary`、`pills` 和 `tabs`，未指定时使用基础导航外观。`stacked: true` 使用纵向布局，`justified: true` 将条目均匀分布。

```js
nav.render({type: 'pills', justified: true});
```

条目过多、需要按宽度收纳到“更多”时，可以在渲染后的导航元素上使用[响应式导航](/lib/components/responsive-nav/)。

## 下拉条目

下拉项需明确设置 `type: 'dropdown'`，通过 `items` 或 `menu` 提供菜单内容。仅在普通条目上添加 `items` 不会自动将其转换为下拉按钮。

```js
nav.render({items: [
    {id: 'overview', text: '概览', url: '#overview'},
    {id: 'more', type: 'dropdown', text: '更多',
        props: {dropdown: {placement: 'bottom-end'}},
        items: [
            {text: '导入', icon: 'upload-alt', onClick() { console.log('导入'); }},
            {text: '导出', icon: 'download-alt', onClick() { console.log('导出'); }},
        ],
    },
]});
```

`props` 用于向下拉按钮传入额外选项。下拉菜单内的操作可通过菜单项自己的 `onClick` 或 `menu.onClickItem` 处理，完整菜单数据格式见[菜单生成器](/lib/components/menu/js.html)。

## 选项

<Props>
items?: ListItemsSetting; // 导航条目或动态数据设置。
itemKey?: string = "id"; // 条目标识字段。
type?: "primary" | "secondary" | "pills" | "tabs"; // 导航外观。
stacked?: boolean; // 纵向导航。
justified?: boolean; // 条目均匀分布。
className?: ClassNameLike; // 导航附加类名。
active?: string | string[] | Record&lt;string, boolean&gt;; // 激活的条目键。
multipleActive?: boolean; // 允许多个激活项。
activeOnHover?: boolean; // 悬停时激活条目。
itemProps?: Partial&lt;ListItem&gt;; // 共享条目选项。
onClickItem?: (info: object) =&gt; void; // 点击回调，含 item、index、renderedItem 和 event。
onActive?: (keys: string[], active: boolean) =&gt; void; // 激活状态变化回调。
afterRender?: (firstRender: boolean) =&gt; void; // 渲染后回调。
beforeDestroy?: () =&gt; void; // 卸载前回调。
</Props>

普通条目支持 `text`、`icon`、`url`、`target`、`disabled`、`active` 等[列表项选项](/lib/components/list/#列表项)。动态数据、自定义渲染和加载回调继承列表能力。

## 更新与实例方法

```js
nav.render({items: [
    {id: 'overview', text: '概览'},
    {id: 'tasks', text: '任务'},
]});

// 在初始化完成后调用交互方法。
await nav.$?.toggleActive('tasks', true);
const activeKeys = nav.$?.getActiveKeys();
const instance = zui.Nav.get('#projectNav');
nav.destroy();
```

使用 `items` 函数或异步数据源时，可以调用 `await nav.$?.load()` 重新加载。切换页面或移除导航时销毁原生实例。

## 模块引入

```ts
import {Nav} from '@zui/nav';
import {Nav as NavView} from '@zui/nav/react';
import type {NavOptions} from '@zui/nav';
```

Preact 用法为 `render(<NavView {...options} />, element)`，其中 `render` 从 `preact` 引入；样式可单独引入 `@zui/nav/css`。
