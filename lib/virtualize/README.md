# 虚拟渲染

基于 `@tanstack/virtual-core`，只为可见范围和预渲染范围创建条目。滚动区域可以获得键盘焦点，使用方向键、Page Up、Page Down 继续浏览。

## 固定高度 · 10,000 条

每行 36px，`overscan: 5` 表示可见范围前后各预渲染 5 **条**。按钮用于检查定位、替换数据和空列表。

```html:example
<div class="flex flex-wrap gap-2 mb-3">
  <button type="button" class="btn" id="virtualListStart">回到开头</button>
  <button type="button" class="btn" id="virtualListMiddle">定位中间</button>
  <button type="button" class="btn" id="virtualListEnd">定位末尾</button>
  <button type="button" class="btn" id="virtualListReplace">替换为 250 条</button>
  <button type="button" class="btn" id="virtualListClear">清空</button>
  <button type="button" class="btn" id="virtualListReset">恢复 10,000 条</button>
</div>
<p id="virtualListStatus" class="text-gray mb-3" role="status" aria-live="polite">等待初始化</p>
<div id="virtualListFixed"></div>
```

## 动态高度

开启 `dynamic` 后，根据条目实际高度测量。切换内容长度，检查可见条目变化后的尺寸和滚动位置。

```html:example
<button type="button" class="btn mb-3" id="virtualListDynamicExpand" aria-pressed="false">展开长文本</button>
<div id="virtualListDynamic"></div>
```

## 水平列表

1,000 张固定宽度卡片，每项宽 180px，间距 8px。

```html:example
<div id="virtualListHorizontal"></div>
```

## 多列瀑布流

`lanes: 3` 把条目分配到三列，滚动方向仍是纵向。它不是同时虚拟化行和列的双轴网格。

```html:example
<div id="virtualListLanes"></div>
```

使用 `count`、`estimateSize`、`getItemKey` 和 `renderItem` 配置列表。完整选项和无界面控制器见正式文档。
