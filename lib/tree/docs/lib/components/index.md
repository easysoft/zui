# 树形菜单

## 一般用法

<Example>
 <div id="treeExample"></div>
</Example>

```html
<div id="treeExample"></div>

<script>
const tree = new zui.Tree('#treeExample', {
    items: [
        {
            text: '研发',
            url: '#研发',
            items: [
                {text: '前端', url: '#前端'},
                {
                    text: '产品',
                    url: '#产品',
                    items: [
                        {text: '桌面端', url: '#桌面端'},
                        {text: '移动端', url: '#移动端'},
                    ]
                },
                {text: '测试', url: '#测试'},
                {text: '运维', url: '#运维'},
            ]
        },
        {text: '市场', url: '#市场'},
        {text: '技术支持', url: '#技术支持'},
        {text: '财务', url: '#财务'},
        {text: '行政', url: '#行政'},
    ],
});
</script>
```

## 添加图标

<Example>
 <div id="treeWithIcons"></div>
</Example>

```html
<div id="treeWithIcons"></div>

<script>
const tree = new zui.Tree('#treeExample', {
    collapsedIcon: 'folder',
    expandedIcon: 'folder-open',
    normalIcon: 'file',
    items: [...],
});
</script>
```

## 鼠标悬停效果

<Example>
 <div id="treeHover"></div>
</Example>

```html
<div id="treeHover"></div>

<script>
const tree = new zui.Tree('#treeHover', {
    collapsedIcon: 'folder',
    expandedIcon: 'folder-open',
    normalIcon: 'file',
    hover: true,
    items: [...],
});
</script>
```

## 添加工具栏

通过选项 `itemActions` 来设置工具栏，可用选项参考 [工具栏](/lib/components/toolbar/) 文档。

<Example>
 <div id="treeWithActions"></div>
</Example>

```html
<div id="treeWithActions"></div>

<script>
const tree = new zui.Tree('#treeWithActions', {
    collapsedIcon: 'folder',
    expandedIcon: 'folder-open',
    normalIcon: 'file',
    hover: true,
    itemActions: {
        items: [
            {
                key: 'edit',
                icon: 'edit',
                hint: '编辑',
                onClick: (e) => console.log(e),
            },
            {
                key: 'delete',
                icon: 'trash',
                hint: '删除',
                onClick: (e) => console.log(e),
            },
            {
                type: 'dropdown',
                key: 'more',
                icon: 'ellipsis-v',
                caret: false,
                hint: '更多操作',
                dropdown: {
                    placement: 'bottom-end',
                    items: [
                        {text: '分享', key: 'share'},
                        {text: '下载', key: 'download'},
                    ],
                },
            },
        ],
        onClick: (event, item, index) => console.log('你点击了', {event, item, index}),
    },
    items: [...],
});
</script>
```

<script setup>
import {onMounted} from 'vue';

const items = [
    {
        text: '研发',
        url: '#研发',
        items: [
            {text: '前端', url: '#前端'},
            {
                text: '产品',
                url: '#产品',
                items: [
                    {text: '桌面端', url: '#桌面端'},
                    {text: '移动端', url: '#移动端'},
                ]
            },
            {text: '测试', url: '#测试'},
            {text: '运维', url: '#运维'},
        ]
    },
    {text: '市场', url: '#市场'},
    {text: '技术支持', url: '#技术支持'},
    {text: '财务', url: '#财务'},
    {text: '行政', url: '#行政'},
];

const actions = [
    {
        key: 'edit',
        icon: 'edit',
        hint: '编辑',
        onClick: (e) => console.log(e),
    },
    {
        key: 'delete',
        icon: 'trash',
        hint: '删除',
        onClick: (e) => console.log(e),
    },
    {
        type: 'dropdown',
        key: 'more',
        icon: 'ellipsis-v',
        caret: false,
        hint: '更多操作',
        dropdown: {
            placement: 'bottom-end',
            items: [
                {text: '分享', key: 'share'},
                {text: '下载', key: 'download'},
            ],
        },
    },
];

onMounted(() => {
    onZUIReady(() => {
        new zui.Tree('#treeExample', {
            items
        });

        new zui.Tree('#treeWithIcons', {
            items,
            collapsedIcon: 'folder',
            expandedIcon: 'folder-open',
            normalIcon: 'file',
        });

        new zui.Tree('#treeHover', {
            hover: true,
            items,
            collapsedIcon: 'folder',
            expandedIcon: 'folder-open',
            normalIcon: 'file',
        });

        new zui.Tree('#treeWithActions', {
            hover: true,
            items,
            itemActions: {
                items: actions,
                onClick: (event, item, index) => console.log('你点击了', {event, item, index}),
            },
            collapsedIcon: 'folder',
            expandedIcon: 'folder-open',
            normalIcon: 'file',
        });
    });
});
</script>

## 选项

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `items` | `array` | `null` | 树的数据 |
| `collapsedIcon` | `string` | `null` | 折叠图标 |
| `expandedIcon` | `string` | `null` | 展开图标 |
| `normalIcon` | `string` | `null` | 普通图标 |
| `hover` | `boolean` | `false` | 鼠标悬停效果 |
| `itemActions` | `array` `object` `function` | `null` | 工具栏选项，可用选项参考 [工具栏](/lib/components/toolbar/) 文档 |
| `defaultNestedShow` | `object` | `null` | 默认的折叠状态 |
| `indent` | `number` | `20` | 缩进大小 |
| `onClickItem` | `function` | `null` | 点击菜单项的回调函数 |
| `className` | `string` | `null` | 类名 |
| `style` | `object` | `null` | 自定义 CSS 样式 |

其中 `itemActions` 可以为工具栏按钮定义列表或工具栏对象或通过函数返回工具栏对象，函数接收参数为当前节点的数据。

## 菜单条目定义

```ts
type TreeItemOptions = {
    /** 作为链接的 URL。 */
    url?: string;

    /** 作为链接的目标。 */
    target?: string;

    /** 是否禁用。 */
    disabled?: boolean;

    /** 是否激活。 */
    active?: boolean;

    /** 图标。 */
    icon?: IconType;

    /** 是否选中。 */
    checked?: boolean;

    /** 菜单项文本。 */
    text?: ComponentChildren;

    /** 尾部图标。 */
    trailingIcon?: IconType;

    /** 提示文本。 */
    hint?: string;

    /** 根元素类名。 */
    rootClass?: ClassNameLike;

    /** 根元素属性。 */
    rootAttrs?: JSX.HTMLAttributes<HTMLLIElement>;

    /** 根元素样式。 */
    rootStyle?: JSX.CSSProperties;

    /** 菜单项组件名称。 */
    component?: string | ComponentType;

    /** 内部键。 */
    key?: ActionMenuItemKey;

    /** 菜单项类型。 */
    type?: string;

    /** 菜单项元素属性。 */
    attrs?: JSX.HTMLAttributes<HTMLElement> & {[key: `data-${string}`]: unknown};

    /** 菜单项元素类名。 */
    className?: ClassNameLike;

    /** 菜单项元素样式。 */
    style?: JSX.CSSProperties;

    /** 菜单项自定义内容。 */
    content?: CustomContentType<[ActionBasicProps]>;

    /** 菜单项点击事件。 */
    onClick?: JSX.MouseEventHandler<HTMLAnchorElement>;

    /** 菜单项关联数据。 */
    data?: Record<string, unknown>;

    /** 是否默认展开。 */
    show?: boolean;

    /** 子级菜单列表。 */
    items?: T[] | ((currentItem: ActionNestedItemProps<T>, menu: ActionMenuNested<T>) => T[])

    /** 工具栏定义。 */
    actions?: ToolbarOptions | ToolbarItemOptions[];
};
```
