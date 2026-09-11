# 列表

## 大量数据分批显示

数据包含 10000 项，`maxVisibleItems: 100` 使首次只渲染 100 项，`showMoreStep: 50` 使每次点击底部提示再显示 50 项；不设置 `showMoreStep` 时，每次默认追加 100 项。提示通过 `showMoreText` 回调定制；可在浏览器开发工具中观察条目 DOM 数量随点击增加。

```html:example
<div id="largeList"></div>
```

## 滚动时自动显示更多

数据包含 1000 项，首次显示 20 项。设置 `autoShowMore: true` 和 `showMoreStep: 10` 后，在下方容器内滚动至底部提示，即自动追加 10 项；追加后提示仍可见时继续分批追加，直到提示移出可见区域或全部条目显示完毕。也可以手动点击提示。

```html:example
<div id="autoMoreList" class="h-64 overflow-auto" tabindex="0" role="region" aria-label="自动分批显示列表"></div>
```

自动显示只使用已获取的数据，不发起远程分页请求；未启用 `autoShowMore` 的上方示例仍需手动点击。

## 远程数据

### 远程数据列表

```html:example
<div id="remoteSimpleList"></div>
```

### 仅根节点

```html:example
<div id="remoteNestedList"></div>
```

### 根节点和子节点

```html:example
<div id="remoteNestedList2"></div>
```

## 多层级列表

设置 `maxVisibleItems: 3`，根列表和每个子列表分别按 3 项递增。点击其中一层的提示，只增加该层的显示数量；勾选后追加条目，原有勾选状态保持不变。此处用包含 `{count}` 的字符串定制提示。

```html:example
<div id="nestedList"></div>
```

## 简单列表

```html:example
<div id="simpleList"></div>
```
