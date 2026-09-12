# 虚拟渲染

`VirtualList` 基于 TanStack Virtual，只渲染可见范围及其附近的条目，支持固定尺寸、动态测量、水平滚动和多列瀑布流。

## 基本使用

下面的列表包含 10,000 条数据，每项高度为 36px。

::: tabs

== 示例

<Example>
  <ZUI use="virtualList" :options="fixedOptions" :ready="trackInstance" />
</Example>

== HTML

```html
<div id="virtualList"></div>
```

== JS

```js
const list = new zui.VirtualList('#virtualList', {
    count: 10000,
    estimateSize: () => 36,
    height: 240,
    overscan: 5,
    className: 'border rounded',
    attrs: {'aria-label': '数据列表'},
    itemClassName: 'flex items-center px-3 border-b',
    renderItem: item => `条目 ${item.index + 1}`,
});
```

:::

`count` 是条目数量，`estimateSize(index)` 返回滚动方向上的尺寸，`renderItem(item, virtualizer)` 返回条目内容。组件负责条目容器和定位，回调无需设置 `position`、`transform` 或测量 ref。

滚动区域默认可聚焦。调用方应通过 `attrs` 提供有意义的 `aria-label`，并在 `renderItem` 中使用符合数据用途的语义和交互元素。

## 动态高度

内容高度未知时，设置 `dynamic: true`。`estimateSize` 提供初始估计，条目挂载和内容尺寸变化后自动测量。对于换行、图片等内容，选择接近实际高度的估计值，减少首次滚动时的位置调整。

::: tabs

== 示例

<Example>
  <ZUI use="virtualList" :options="dynamicOptions" :ready="trackInstance" />
</Example>

== JS

```js
const notes = Array.from({length: 500}, (_, index) => ({
    id: `note-${index}`,
    text: `记录 ${index + 1}\n${'内容长度决定条目实际高度。'.repeat(index % 6 + 1)}`,
}));

const list = new zui.VirtualList('#virtualList', {
    count: notes.length,
    getItemKey: index => notes[index].id,
    estimateSize: () => 80,
    dynamic: true,
    height: 280,
    className: 'border rounded',
    attrs: {'aria-label': '动态高度记录列表'},
    itemClassName: 'p-3 border-b',
    itemStyle: {whiteSpace: 'pre-wrap'},
    renderItem: item => notes[item.index].text,
});
```

:::

`dynamic` 默认为 `false`，此时组件直接使用 `estimateSize` 的返回值设置条目高度或宽度。动态测量会调整尚未确认的条目位置；需要准确跳转时使用默认即时滚动。

## 水平与多列

设置 `horizontal: true` 后，`estimateSize` 表示条目宽度。为滚动区域指定高度，宽度可以使用数字或 CSS 长度。

::: tabs

== 示例

<Example>
  <ZUI use="virtualList" :options="horizontalOptions" :ready="trackInstance" />
</Example>

== JS

```js
new zui.VirtualList('#virtualList', {
    count: 1000,
    estimateSize: () => 160,
    horizontal: true,
    height: 100,
    width: '100%',
    gap: 8,
    paddingStart: 8,
    paddingEnd: 8,
    className: 'border rounded',
    attrs: {'aria-label': '水平卡片列表'},
    itemClassName: 'flex items-center justify-center bg-surface rounded',
    renderItem: item => `卡片 ${item.index + 1}`,
});
```

:::

`lanes: 3` 可沿横向分成三列瀑布流，列宽自动均分；启用水平滚动时则分成三行。`gap` 控制条目间距。`lanes` 仍然只有一个滚动方向，不提供行、列同时虚拟化的双轴网格。

```js
new zui.VirtualList('#virtualList', {
    count: 600,
    estimateSize: index => 72 + (index % 4) * 24,
    height: 320,
    lanes: 3,
    gap: 8,
    renderItem: item => `第 ${item.lane + 1} 列 · 条目 ${item.index + 1}`,
});
```

## 数据更新与定位

数据由调用方持有，通过 `render(options)` 更新列表选项。数据替换或排序后，为每个条目提供稳定且唯一的 `getItemKey`，并传入新的回调，让核心重新读取对应关系。

离开渲染范围的条目会卸载，不应依靠条目内部状态保存业务数据。

```js
let rows = [{id: 'a', text: '第一条'}, {id: 'b', text: '第二条'}];
const list = new zui.VirtualList('#virtualList', {
    count: rows.length,
    estimateSize: () => 36,
    getItemKey: index => rows[index].id,
    height: 240,
    renderItem: item => rows[item.index].text,
});
list.render(); // 需要立即调用定位方法时，主动完成首次渲染。

function replaceRows(nextRows) {
    rows = nextRows;
    list.render({
        count: rows.length,
        getItemKey: index => rows[index].id,
        renderItem: item => rows[item.index].text,
    });
    list.scrollToOffset(0);
}

list.scrollToIndex(1, {align: 'center'});
replaceRows([]); // 清空列表。
```

原生实例提供以下方法：

| 成员 | 说明 |
| --- | --- |
| `virtualizer` | 当前 TanStack `Virtualizer` 实例，组件挂载后可用。 |
| `scrollToIndex(index, options?)` | 滚动到指定索引，`align` 可为 `start`、`center`、`end` 或 `auto`。 |
| `scrollToOffset(offset, options?)` | 滚动到指定像素位置。 |
| `measure()` | 清除尺寸测量缓存并重新计算。 |
| `render(options?)` | 更新选项并渲染；未提供的选项保留当前值。 |
| `destroy()` | 卸载组件，清理观察器和滚动监听。 |

创建原生实例后，首次渲染由 ZUI 生命周期安排；需要读取核心实例时等待组件完成挂载，或先调用 `render()`。删除容器前调用 `destroy()`。

## 选项

尺寸单位为 CSS 像素，`overscan` 的单位为**条目数**。除以下适配层选项外，还可直接使用 TanStack 的 `initialOffset`、`initialRect`、`rangeExtractor`、`scrollPaddingStart`、`scrollPaddingEnd`、`onChange` 等核心选项。滚动元素、滚动观察和滚动方法由组件接入。

<Props>
count: number; // 数据条目总数。
estimateSize: (index: number) =&gt; number; // 固定尺寸或动态测量前的预估尺寸。
renderItem: (item: VirtualItem, virtualizer: Virtualizer) =&gt; ComponentChildren; // 渲染条目内容。
height?: number | string; // 滚动区域高度。
width?: number | string; // 滚动区域宽度。
dynamic?: boolean = false; // 根据真实 DOM 尺寸测量条目。
horizontal?: boolean = false; // 横向滚动。
overscan?: number = 1; // 可见范围前后额外渲染的条目数。
gap?: number = 0; // 条目间距。
paddingStart?: number = 0; // 滚动方向起始留白。
paddingEnd?: number = 0; // 滚动方向结束留白。
lanes?: number = 1; // 列数；横向滚动时为行数。
getItemKey?: (index: number) =&gt; string | number | bigint; // 默认使用索引。
itemClassName?: ClassNameLike; // 条目容器的辅助类。
itemStyle?: CSSProperties | ((item: VirtualItem) =&gt; CSSProperties); // 条目容器样式。
onChange?: (virtualizer: Virtualizer, sync: boolean) =&gt; void; // 核心状态变化；sync 表示当前处于滚动过程中。
</Props>

`renderItem` 收到的 `VirtualItem` 包含 `index`、`key`、`start`、`end`、`size` 和 `lane`。完整核心选项见 [TanStack Virtualizer API](https://tanstack.com/virtual/latest/docs/api/virtualizer)。

## Preact 入口

从 `/react` 引入同名类组件。项目使用 Preact，不需要 React 或 hooks。

```tsx
import {VirtualList} from '@zui/virtualize/react';

<VirtualList
    count={10000}
    estimateSize={() => 36}
    height={240}
    renderItem={item => `条目 ${item.index + 1}`}
/>;
```

## 无界面控制器

需要自定义 DOM 结构或自行组合多个虚拟器时，使用 `createVirtualizer`。它只管理核心实例和生命周期，由调用方渲染条目。

其他组件或 ESM 项目可以从独立入口 `@zui/virtualize/virtualizer` 引入，不会加载 ZUI 列表组件、自动注册或样式：

```ts
import {createVirtualizer, createWindowVirtualizer} from '@zui/virtualize/virtualizer';
import type {ElementVirtualizerOptions, VirtualItem} from '@zui/virtualize/virtualizer';
```

该入口也导出 `VirtualizerController`、`Virtualizer`、`defaultRangeExtractor` 和相关核心类型。使用整库脚本时，仍通过 `zui.createVirtualizer` 访问。

```js
const viewport = document.querySelector('#viewport');
const content = document.querySelector('#content');
const controller = zui.createVirtualizer({
    count: 10000,
    getScrollElement: () => viewport,
    estimateSize: () => 36,
    onChange: renderItems,
});

function renderItems() {
    const virtualizer = controller.instance;
    content.style.height = `${virtualizer.getTotalSize()}px`;
    content.replaceChildren(...virtualizer.getVirtualItems().map(item => {
        const element = document.createElement('div');
        element.textContent = `条目 ${item.index + 1}`;
        element.style.cssText = `position:absolute;top:0;left:0;width:100%;height:${item.size}px;transform:translateY(${item.start}px)`;
        return element;
    }));
    controller.update(); // DOM 提交后同步核心。
}

controller.mount(); // 容器进入 DOM 后挂载。
renderItems();
// 离开页面时调用 controller.destroy()。
```

对应容器：

```html
<div id="viewport" style="height:240px;overflow:auto" tabindex="0" role="region" aria-label="虚拟列表">
    <div id="content" style="position:relative"></div>
</div>
```

`controller.setOptions(options)` 使用完整选项替换当前配置，本身不提交 DOM；重新渲染后调用 `controller.update()`。需要以浏览器窗口为滚动容器时使用 `createWindowVirtualizer`，其返回值和生命周期方法相同。

<script setup>
import {onBeforeUnmount} from 'vue';

const instances = [];
let disposed = false;

function trackInstance(instance) {
    if (disposed) {
        instance.destroy();
    } else {
        instances.push(instance);
    }
}

onBeforeUnmount(() => {
    disposed = true;
    instances.forEach(instance => instance.destroy());
});

const fixedOptions = {
    count: 10000,
    estimateSize: () => 36,
    height: 240,
    overscan: 5,
    className: 'border rounded',
    attrs: {'aria-label': '数据列表'},
    itemClassName: 'flex items-center px-3 border-b',
    renderItem: item => `条目 ${item.index + 1}`,
};

const notes = Array.from({length: 500}, (_, index) => ({
    id: `note-${index}`,
    text: `记录 ${index + 1}\n${'内容长度决定条目实际高度。'.repeat(index % 6 + 1)}`,
}));

const dynamicOptions = {
    count: notes.length,
    getItemKey: index => notes[index].id,
    estimateSize: () => 80,
    dynamic: true,
    height: 280,
    className: 'border rounded',
    attrs: {'aria-label': '动态高度记录列表'},
    itemClassName: 'p-3 border-b',
    itemStyle: {whiteSpace: 'pre-wrap'},
    renderItem: item => notes[item.index].text,
};

const horizontalOptions = {
    count: 1000,
    estimateSize: () => 160,
    horizontal: true,
    height: 100,
    width: '100%',
    gap: 8,
    paddingStart: 8,
    paddingEnd: 8,
    className: 'border rounded',
    attrs: {'aria-label': '水平卡片列表'},
    itemClassName: 'flex items-center justify-center bg-surface rounded',
    renderItem: item => `卡片 ${item.index + 1}`,
};
</script>
