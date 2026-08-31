# 仪表盘

仪表盘用于创建由多个区块构成的信息展示页面；区块可以灵活排列，并承载图表、表格、卡片等内容。

## 用法

### 一般用法

<Example>
  <div id="dashboardExample"></div>
</Example>

```html
<div id="dashboardExample"></div>

<script>
const dashboard = new zui.Dashboard('#dashboardExample', {
    blocks: [
        {id: 1},
        {id: 2, size: 'md'},
        {id: 3, size: {width: 4, height: 4}},
        {id: 4, placeholder: 'placeholder'},
        {id: 5},
        {id: 6, left: 8, top: 0},
        {id: 7, size: 'smWide'},
        {id: 8, size: 'xsLong'},
        {id: 9, size: 'xs'},
    ],
    blockFetch: '/dashboard/block-{id}.html',
});
</script>
```

## 选项

通过选项来定义仪表盘上显示的区块或进行其他设置，选项对象支持的属性包括：

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `responsive` | `boolean` | 预留的响应式选项，可选，默认 `false` |
| `blocks` | `BlockSetting[]` | 区块定义列表，可选，默认为 `[]` |
| `grid` | `number` | 网格水平个数，可选，默认为 `3` |
| `gap` | `number` | 区块之间的间隔，可选，默认为 `16` |
| `cellHeight` | `number` | 单个网格的高度，可选，默认为 `64` |
| `cache` | `boolean` \| `string` | 是否缓存异步区块内容；传入字符串时用作缓存命名空间，默认 `true` |
| `blockFetch` | `BlockFetcher` | 区块内容的获取方式，可选，默认为 `undefined` |
| `blockDefaultSize` | `[width: number, height: number]` \| `{width: number, height: number}` | 区块的默认大小，可选，默认为 `[1, 3]` |
| `blockSizeMap` | `Record<string, [width: number, height: number] \| {width: number, height: number}>` | 区块的大小映射表，可选；默认提供 `xs`、`sm`、`md`、`lg`、`xl` 及宽/长变体 |
| `blockMenu` | `ContextMenuOptions` | 定义区块操作菜单 |
| `emptyBlockContent` | `ComponentChildren \| {html: string}` | 未加载内容的占位内容 |
| `onlyLoadVisible` | `boolean` | 是否仅在区块进入可视区后加载，默认 `true` |
| `onLayoutChange` | `(layout: Record<string, {top: number; left: number; width: number; height: number}>) => void` | 区块布局变更回调函数 |

## 预设区块尺寸

```ts
blockSizeMap: {
    xs: [1, 3],
    sm: [1, 4],
    md: [1, 5],
    lg: [1, 6],
    xl: [1, 8],
    xsWide: [2, 3],
    smWide: [2, 4],
    mdWide: [2, 5],
    lgWide: [2, 6],
    xlWide: [2, 8],
    xsLong: [3, 3],
    smLong: [3, 4],
    mdLong: [3, 5],
    lgLong: [3, 6],
    xlLong: [3, 8],
}
```

## 区块定义

仪表盘上可以显示一个或多个区块，在初始化时需要按需传入响应的内容，每个区块定义对象支持的属性包括：

| 属性 | 类型 | 说明 |
| --- | --- | --- |
| `id` | `string` | 区块的唯一标识，必须 |
| `size` | `string` \| `{width: number, height: number}` \| `[width: number, height: number]` | 区块的大小，可选，默认为 `md` |
| `left` | `number` | 区块的左边距，可选，如果不指定位置则自动根据顺序排列 |
| `top` | `number` | 区块的上边距，可选，如果不指定位置则自动根据顺序排列 |
| `fetch` | `BlockFetcher` | 区块内容的获取方式，可选，默认为 `undefined` |
| `title` | `string` | 区块的标题，可选，默认为 `undefined` |
| `toolbar` | `ToolbarOptions` | 区块的工具栏，可选，默认为 `undefined` |
| `placeholder` | `ComponentChildren` | 区块的占位内容，可选，默认为 `undefined` |
| `content` | `ComponentChildren` \| `{html: string}` | 区块的内容，可选，默认为 `undefined`，当设置为 `{html: string}` 时可以设置 HTML。 |
| `menu` | `ContextMenuOptions` | 区块的右键菜单，可选，默认为 `undefined` |

## 方法

### `load`

手动重新载入指定区块的内容。可选的 `fetcher` 会覆盖该区块当前的获取方式：

```ts
function load(id: string, fetcher?: BlockFetcher): void;
```

### `update`

更新指定区块的属性；当 `fetch` 发生变化时，区块会重新进入待加载状态：

```ts
function update(info: Partial<BlockInfo> & {id: string}, callback?: () => void): void;
```

### `add`

向仪表盘添加一个或多个区块：

```ts
function add(blocks: BlockSetting | BlockSetting[]): void;
```

### `delete`

移除指定区块：

```ts
function delete(id: string): void;
```

### `reset`

使用新的区块定义重置仪表盘，并取消旧区块的待处理加载结果：

```ts
function reset(blockSettings: BlockSetting[]): void;
```

通过原生组件实例的 `$` 属性可访问这些方法，例如 `dashboard.$?.load('sales')`；Cash 插件调用也支持 `$('#dashboard').zuiDashboard('load', 'sales')`。

### `render`

原生组件实例的 `render` 方法可传入新的选项以重新渲染仪表盘：

```ts
function render(options?: Partial<DashboardOptions>, reset?: boolean): void;
```

## API

### `BlockFetcher`

```ts
type BlockFetchUrl = string;

type BlockFetchInit = RequestInit & {url: string};

type BlockFetchFn = (id: string, block: BlockSetting) => BlockFetchInit;

type BlockFetcher = BlockFetchInit | BlockFetchUrl | BlockFetchFn;
```

### `BlockSetting`

```ts
type BlockInfo = {
    id: string | number;
    size?: string | {width: number, height: number} | [width: number, height: number];
    left?: number;
    top?: number;
    fetch?: BlockFetcher;
    title?: string;
    toolbar?: ToolbarOptions;
    placeholder?: ComponentChildren;
    content?: ComponentChildren | {html: string};
    menu?: ContextMenuOptions;
};
```

### `DashboardOptions`

```ts
type DashboardOptions =  {
    responsive?: boolean;
    blocks?: BlockSetting[];
    grid?: number;
    gap?: number;
    cellHeight?: number;
    cache?: boolean | string;
    blockFetch?: BlockFetcher;
    blockDefaultSize?: [width: number, height: number] | {width: number, height: number};
    blockSizeMap?: Record<string, [width: number, height: number] | {width: number, height: number}>;
    blockMenu?: ContextMenuOptions;
    emptyBlockContent?: ComponentChildren | {html: string};
    onlyLoadVisible?: boolean;
    onClickMenu?: (info: {item: MenuItemOptions; event: MouseEvent}, block: BlockInfo) => void;
    onLayoutChange?: (layout: Record<string, {top: number; left: number; width: number; height: number}>) => void;
    onLoad?: (info: BlockInfo) => void;
    onLoadFail?: (error: Error, info: BlockInfo) => void;
};
```

<script setup>
import {onMounted} from 'vue';
import {withBase} from 'vitepress';

onMounted(() => {
    onZUIReady(() => {
        const dashboard = new zui.Dashboard('#dashboardExample', {
            blocks: [
                {id: 1},
                {id: 2, size: 'md'},
                {id: 3, size: {width: 3, height: 4}},
                {id: 4, placeholder: 'placeholder'},
                {id: 5},
                {id: 6, left: 2, top: 0},
                {id: 7, size: 'smWide'},
                {id: 8, size: 'xsLong'},
                {id: 9, size: 'xs'},
            ],
            blockFetch: withBase('/dashboard/block-{id}.html'),
        });
    });
});
</script>
