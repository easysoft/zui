# 列表

## 大量数据分批显示

数据包含 10000 项，`maxVisibleItems: 100` 使首次只渲染 100 项，每次点击底部提示再显示 100 项。提示通过 `showMoreText` 回调定制；可在浏览器开发工具中观察条目 DOM 数量随点击增加。

```html:example
<div id="largeList"></div>
```

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
