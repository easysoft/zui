# 仪表盘

仪表盘用于创建由多个区块构成的信息展示页面，这些区块可以灵活排练，可以是图表、表格、卡片等。

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
| `responsive` | `boolean` | 是否响应式，可选，默认为 `true` |
| `blocks` | `BlockSetting[]` | 区块定义列表，可选，默认为 `[]` |
| `grid` | `number` | 网格水平个数，可选，默认为 `12` |
| `gap` | `number` | 区块之间的间隔，可选，默认为 `16` |
| `leftStop` | `number` | 停靠间隔，可选，默认为 `4` |
| `cellHeight` | `number` | 单个网格的高度，可选，默认为 `64` |
| `blockFetch` | `BlockFetcher` | 区块内容的获取方式，可选，默认为 `undefined` |
| `blockDefaultSize` | `[width: number, height: number]` \| `{width: number, height: number}` | 区块的默认大小，可选，默认为 `[4, 4]` |
| `blockSizeMap` | `Record<string, [width: number, height: number] \| {width: number, height: number}>` | 区块的大小映射表，可选，默认为 `{}` |
| `blockMenu` | `ContextMenuOptions` | 定义区块操作菜单 |
| `onLayoutChange` | `(blocks: BlockSetting[]) => void` | 区块布局变更回调函数 |

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
| `content` | `ComponentChildren` | 区块的内容，可选，默认为 `undefined` |
| `menu` | `ContextMenuOptions` | 区块的右键菜单，可选，默认为 `undefined` |

## 方法

### `load`

该方法用于手动重新载入指定区块的内容，定义为：

```ts
function load(id: string): void;
```

### `render`

通过该方法来手动渲染仪表盘，可以传入新的选项来覆盖原有的选项，定义为：

```ts
function render(options: DashboardOptions): void;
```

### `addBlock`

通过该方法向仪表盘添加一个新的区块，定义为：

```ts
function addBlock(block: BlockSetting): void;
```

### `removeBlock`

通过该方法向仪表盘移除一个区块，定义为：

```ts
function removeBlock(id: string): void;
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
    content?: ComponentChildren;
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
    leftStop?: number;
    cellHeight?: number;
    blockFetch?: BlockFetcher;
    blockDefaultSize?: [width: number, height: number] | {width: number, height: number};
    blockSizeMap: Record<string, [width: number, height: number] | {width: number, height: number}>;
    blockMenu?: ContextMenuOptions;
    onLayoutChange?: (blocks: BlockSetting[]) => void;
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
                {id: 3, size: {width: 4, height: 4}},
                {id: 4, placeholder: 'placeholder'},
                {id: 5},
                {id: 6, left: 8, top: 0},
                {id: 7, size: 'smWide'},
                {id: 8, size: 'xsLong'},
                {id: 9, size: 'xs'},
            ],
            blockFetch: withBase('/dashboard/block-{id}.html'),
        });
    });
});
</script>
