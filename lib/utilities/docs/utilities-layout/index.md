# 布局

详细配置可参考 [Tailwind 官网](https://www.tailwindcss.cn/docs/container)。

## 宽高比

| 修饰类        | 定义  |
|:------------- |:----- |
| `aspect-auto`  | `aspect-ratio: auto;` |
| `aspect-square`  | `aspect-ratio: 1 / 1;` |
| `aspect-video`  | `aspect-ratio: 16 / 9;` |

### 使用方法

为元素提供固定的宽高比。

<Example>
  <div class="inline-block bg-secondary mr-3 w-16 h-2 aspect-auto"></div>
  <div class="inline-block bg-secondary mr-3 w-16 aspect-square"></div>
  <div class="inline-block bg-secondary mr-3 w-16 aspect-video"></div>
</Example>

```html
<div class="w-16 h-2 aspect-auto"></div>
<div class="w-16 aspect-square"></div>
<div class="w-16 aspect-video"></div>
```

## 容器

| 修饰类        | 断点 | 定义  |
|:------------- |:---- |:----- |
| `container`  | 无 | `width: 100%;` |
| `container` | sm (640px) | `max-width: 640px;` |
| `container` | sm (768px) | `max-width: 768px;` |
| `container` | sm (1024px) | `max-width: 1024px;` |
| `container` | sm (1280px) | `max-width: 1280px;` |
| `container` | sm (1536px) | `max-width: 1536px;` |


### 使用方法

`container` 类设置一个元素的 `max-width` 来匹配当前断点的 `min-width`。如果您想为一组固定的屏幕尺寸设计，而不是试图适应一个完全流动的视窗，这很有用。

请注意，容器不会自动居中，也没有任何内置的水平方向的内边距。

```html
<div class="container">
    <!-- ... -->
</div>
```

## 显示类型

| 修饰类        | 定义  |
|:------------- |:----- |
| `block`        | `display: block;` |
| `inline-block` | `display: inline-block;` |
| `inline`       | `display: inline;` |
| `flex`         | `display: flex;` |
| `inline-flex`  | `display: inline-flex;` |
| `table`        | `display: table;` |
| `table-cell`   | `display: table-cell;` |
| `table-row`    | `display: table-row;` |
| `list-item`    | `display: list-item;` |
| `hidden`       | `display: hidden;` |

### block

使用 `block` 创建一个块级元素。

<Example>
  <span>这是一个行内标签</span>
  <span class="block bg-secondary h-16">这是一个行内标签</span>
</Example>

```html
<span>这是一个 span 标签。</span>
<span class="block h-16">这是一个 span 标签。</span>
```

### inline-block

使用 `inline-block` 创建一个内联块级元素。

<Example>
  <span>这是一个 span 标签。</span>
  <span class="inline-block bg-secondary h-16">这是一个 span 标签。</span>
</Example>

```html
<span>这是一个 span 标签。</span>
<span class="inline-block h-16">这是一个 span 标签。</span>
```

### inline

使用 `inline` 创建一个内联元素。

<Example>
  <span>这是一个 span 标签。</span>
  <div class="inline bg-secondary h-16">这是一个 div 标签。</div>
</Example>

```html
<span>这是一个 span 标签。</span>
<div class="inline h-16">这是一个 div 标签。</div>
```

### flex

使用 `flex` 来创建一个块级的 `flex` 容器。

<Example>
  <div class="flex gap-2 h-12">
    <span class="bg-secondary text-white flex justify-center items-center w-12">1</span>
    <span class="bg-secondary text-white flex justify-center items-center w-12">2</span>
  </div>
</Example>

```html
 <div class="flex h-12">
  <span class="w-12">1</span>
  <span class="w-12">2</span>
</div>
```

### inline-flex

使用 `inline-flex` 来创建一个内联的 `flex` 容器。

<Example>
  <div class="inline-flex space-x-4">
    <div class="bg-secondary text-white rounded text-center px-6 py-4 flex-1">1</div>
    <div class="bg-secondary text-white rounded text-center px-6 py-4 flex-1">2</div>
    <div class="bg-secondary text-white rounded text-center px-6 py-4 flex-1">3</div>
  </div>
</Example>

```html
<div class="inline-flex">
  <div class="px-6 py-4 flex-1">1</div>
  <div class="px-6 py-4 flex-1">2</div>
  <div class="px-6 py-4 flex-1">3</div>
</div>
```

### table table-row table-cell

<Example>
  <div class="table w-full bg-surface">
    <div class="table-row-group">
      <div class="table-row">
        <div class="table-cell bg-secondary text-white text-center px-6 py-4">1</div>
        <div class="table-cell -bg-secondary-300 text-white text-center px-6 py-4">2</div>
        <div class="table-cell bg-secondary text-white text-center px-6 py-4">3</div>
      </div>
      <div class="table-row">
        <div class="table-cell -bg-secondary-300 text-white text-center px-6 py-4">4</div>
        <div class="table-cell bg-secondary text-white text-center px-6 py-4">5</div>
        <div class="table-cell -bg-secondary-300 text-white text-center px-6 py-4">6</div>
      </div>
    </div>
  </div>
</Example>

```html
<div class="table w-full">
  <div class="table-row-group">
    <div class="table-row">
      <div class="table-cell">1</div>
      <div class="table-cell">2</div>
      <div class="table-cell">3</div>
    </div>
    <div class="table-row">
      <div class="table-cell">4</div>
      <div class="table-cell">5</div>
      <div class="table-cell">6</div>
    </div>
  </div>
</div>
```

### list-item

<Example>
  <div class="list-item">ZUI3</div>
  <div class="list-item">ZUI3</div>
  <div>ZUI3</div>
</Example>

```html
<div class="list-item">ZUI3</div>
<div class="list-item">ZUI3</div>
<div>ZUI3</div>
```

### hidden

使用 `hidden` 设置一个元素为 `display: none`，并从页面布局中移除(对比 <a href="#可见性">可见性</a> 部分的 `invisible`)。

<Example>
  <div class="flex space-x-4">
    <div class="bg-secondary text-white rounded text-center px-6 py-4 hidden">1</div>
    <div class="bg-secondary text-white rounded text-center px-6 py-4">2</div>
    <div class="bg-secondary text-white rounded text-center px-6 py-4">3</div>
  </div>
</Example>

```html
<div class="flex space-x-4">
  <div class="bg-secondary text-white rounded text-center px-6 py-4 hidden">1</div>
  <div class="bg-secondary text-white rounded text-center px-6 py-4">2</div>
  <div class="bg-secondary text-white rounded text-center px-6 py-4">3</div>
</div>
```

## 浮动

| 修饰类        | 定义  |
|:------------- |:----- |
| `pull-right`  | `float: right;` |
| `pull-left`   | `float: left;` |

### pull-right

使用 `pull-right` 将一个元素浮动到其容器的右边。

<Example>
  <img class="pull-right mt-2 mr-0 mb-4 ml-10 h-28" src="/assets/avatar/avatar.png">
  <p>ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</p>
</Example>

```html
<img class="pull-right ..." src="/assets/avatar/avatar.png">
<p>ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</p>
```

### pull-left

使用 `pull-left` 将一个元素浮动到其容器的左边。

<Example>
  <img class="pull-left mt-2 mr-4 mb-4 ml-0 h-28" src="/assets/avatar/avatar.png">
  <p>ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</p>
</Example>

```html
<img class="pull-left ..." src="/assets/avatar/avatar.png">
<p>ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</p>
```

## 内容适配 Object Fit

元素的内容应该如何去适应指定容器的高度与宽度。

| 修饰类        | 定义  |
|:------------- |:----- |
| `obj-contain`        | `object-fit: contain;` |
| `obj-cover`        | `object-fit: cover;` |
| `obj-fill`        | `object-fit: fill;` |
| `obj-none`        | `object-fit: none;` |
| `obj-scale-down`        | `object-fit: scale-down;` |

### Contain

使用 `obj-contain` 调整元素内容的大小，使其保持在容器内。

<Example>
  <div class="bg-surface p-4">
    <img src="/assets/avatar/avatar.png" class="h-48 w-full object-contain">
  </div>
</Example>

```html
<div class="bg-surface p-4">
  <img src="/assets/avatar/avatar.png" class="h-48 w-full object-contain">
</div>
```

### Cover

使用 `obj-cover` 调整元素内容的大小以覆盖其容器。

<Example>
  <div class="rounded bg-surface p-4">
    <img src="/assets/avatar/avatar.png" class="h-48 w-full obj-cover">
  </div>
</Example>

```html
<div class="rounded bg-surface p-4">
  <img src="/assets/avatar/avatar.png" class="h-48 w-full obj-cover">
</div>
```

### Fill

使用 `obj-fill` 拉伸元素的内容以适应其容器。

<Example>
  <div class="rounded bg-surface p-4">
    <img src="/assets/avatar/avatar.png" class="h-48 w-full obj-fill">
  </div>
</Example>

```html
<div class="rounded bg-surface p-4">
  <img src="/assets/avatar/avatar.png" class="h-48 w-full obj-fill">
</div>
```

### None

使用 `obj-none` 以原始大小显示元素的内容，忽略容器大小。

<Example>
  <div class="rounded bg-surface p-4">
    <img src="/assets/avatar/avatar.png" class="h-48 w-full obj-none">
  </div>
</Example>

```html
<div class="rounded bg-surface p-4">
  <img src="/assets/avatar/avatar.png" class="h-48 w-full obj-none">
</div>
```

### Scale Down

以原始大小显示元素的内容，但必要时使用 `obj-scale-down` 将其缩小以适应其容器。

<Example>
  <div class="rounded bg-surface p-4">
    <img src="/assets/avatar/avatar.png" class="h-48 w-full obj-scale-down">
  </div>
</Example>

```html
<div class="rounded bg-surface p-4">
  <img src="/assets/avatar/avatar.png" class="h-48 w-full obj-scale-down">
</div>
```

## 溢出

| 修饰类        | 定义  |
|:------------- |:----- |
| `of-auto`        | `overflow: auto;` |
| `of-hidden`        | `overflow: hidden;` |
| `of-clip`        | `text-overflow: clip;` |
| `of-visible`        | `overflow: visible;` |
| `of-scroll`        | `overflow: scroll;` |
| `of-x-auto`        | `overflow-x: auto;` |
| `of-y-auto`        | `overflow-y: auto;` |
| `of-x-hidden`        | `overflow-x: hidden;` |
| `of-y-hidden`        | `overflow-y: hidden;` |
| `of-x-visible`        | `overflow-x: visible;` |
| `of-y-visible`        | `overflow-y: visible;` |
| `of-x-scroll`        | `overflow-x: scroll;` |
| `of-y-scroll`        | `overflow-y: scroll;` |

### 自动

使用 `of-auto` 在一个元素的内容溢出该元素的边界时为其添加滚动条。不像 `of-scroll` 总是显示滚动条，这个工具类只在需要滚动时才会显示。

<Example>
  <div class="of-auto h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

```html
<div class="of-auto h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 隐藏

使用 `of-hidden` 来剪切元素中任何溢出该元素边界的内容。

<Example>
  <div class="of-hidden h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

```html
<div class="of-hidden h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 可见

使用 `of-visible` 来防止元素内的内容被剪切。请注意，任何溢出元素边界的内容都将是可见的。

<Example>
  <div class="of-visible h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

```html
<div class="of-visible h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 需要时水平滚动

如果需要，使用 `of-x-auto` 来允许水平滚动。

<Example>
  <div class="of-x-auto nowrap">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

```html
<div class="of-x-auto w-16">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 需要时垂直滚动

如果需要，使用 `of-y-auto` 来允许垂直滚动。

<Example>
  <div class="of-y-auto h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

```html
<div class="of-y-auto h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 始终水平滚动

如果需要，使用 `of-x-scroll` 来允许水平滚动。

<Example>
  <div class="of-x-scroll">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

```html
<div class="of-x-scroll">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 始终垂直滚动

如果需要，使用 `of-y-scroll` 来允许水平滚动。

<Example>
  <div class="of-y-scroll h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

```html
<div class="of-y-scroll h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
</div>
```

### 在所有方向上滚动

如果需要，使用 `of-scroll` 来允许水平滚动。

<Example>
  <div class="of-scroll h-24 nowrap">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

```html
<div class="of-scroll h-24 nowrap">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
</div>
```

## 定位

| 修饰类        | 定义  |
|:------------- |:----- |
| `static`        | `position: static;` |
| `fixed`        | `position: fixed;` |
| `absolute`        | `position: absolute;` |
| `relative`        | `position: relative;` |
| `sticky`        | `position: sticky;` |

### 使用方法

使用 `static` 根据常规的文档流来定位元素，浏览器默认 position 取值就是 static。

使用 `relative` 根据常规的文档流来定位元素。

使用 `absolute` 将一个元素定位在文档常规流之外，使相邻元素的行为就像该元素不存在一样。

使用 `fixed` 来定位一个元素相对于浏览器窗视口的位置。

<Example class="relative">
  <div class="static bg-surface h-20">
    <p>Static 父元素</p>
    <div class="absolute bottom-0 left-0">
      <p class="w-32 h-8 bg-secondary text-white text-center leading-8">Absolute 子元素</p>
    </div>
  </div>
</Example>
<Example>
  <div class="relative bg-surface h-20">
    <p>Relative 父元素</p>
    <div class="absolute bottom-0 left-0">
      <p class="w-32 h-8 bg-secondary text-white text-center leading-8">Absolute 子元素</p>
    </div>
  </div>
</Example>

```html
<div class="static h-20">
  <p>Static 父元素</p>
  <div class="absolute bottom-0 left-0">
    <p>Absolute 子元素</p>
  </div>
</div>
<div class="relative h-20">
  <p>Relative 父元素</p>
  <div class="absolute bottom-0 left-0">
    <p>Absolute 子元素</p>
  </div>
</div>
<div class="fixed ...">
  Fixed 子元素
</div>
```

偏移量是相对于元素的正常位置计算的，且该元素将作为其绝对定位的子元素的位置参考。

<Example>
  <div class="h-48 of-auto">
    <div class="sticky top-0 bg-secondary ">Sticky 1</div>
    <div class="py-4">
      <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
      <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
    </div>
    <div class="sticky top-0 bg-secondary ">Sticky 2</div>
    <div class="py-4">
      <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
      <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
    </div>
    <div class="sticky top-0 bg-secondary ">Sticky 3</div>
    <div class="py-4">
      <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
      <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
    </div>
  </div>
</Example>

```html
<div class="h-48 of-auto">
  <div class="sticky top-0">Sticky 1</div>
  <div class="py-4">
    <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
    <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
  </div>
  <div class="sticky top-0">Sticky 2</div>
  <div class="py-4">
    <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
    <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
  </div>
  <div class="sticky top-0">Sticky 3</div>
  <div class="py-4">
    <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
    <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
  </div>
</div>
```

## 定位元素位置 Top / Right / Bottom / Left

用于控制定位元素的位置的工具类。

| 修饰类        | 定义  |
|:------------- |:----- |
| `inset-0`        | `top: 0px; right: 0px; bottom: 0px; left: 0px;` |
| `inset-auto`        | `top: auto; right: auto; bottom: auto; left: auto;` |
| `inset-x-0`        | `left: 0px; right: 0px;` |
| `inset-y-0`        | `top: 0px; bottom: 0px;` |
| `top-0`        | `top: 0px;` |
| `right-0`        | `right: 0px;` |
| `bottom-0`        | `bottom: 0px;` |
| `left-0`        | `left: 0px;` |
| `top-full`        | `top: 100%;` |
| `right-full`        | `right: 100%;` |
| `bottom-full`        | `bottom: 100%;` |
| `left-full`        | `left: 100%;` |
| `top-auto`        | `top: auto;` |
| `right-auto`        | `right: auto;` |
| `bottom-auto`        | `bottom: auto;` |
| `left-auto`        | `left: auto;` |

### 使用方法

<Example class="flex gap-4 flex-wrap">
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute inset-0 w-12 bg-secondary flex justify-center items-center rounded text-white">1</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute inset-x-0 top-0 h-12 bg-secondary flex justify-center items-center rounded text-white">2</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute inset-x-0 bottom-0 h-12 bg-secondary flex justify-center items-center rounded text-white">3</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute inset-y-0 right-0 w-12 bg-secondary flex justify-center items-center rounded text-white">4</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute inset-y-0 left-0 w-12 bg-secondary flex justify-center items-center rounded text-white">5</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute left-0 top-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">6</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute right-0 top-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">7</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute left-0 bottom-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">8</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute right-0 bottom-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">9</div>
  </div>
</Example>

```html
<div class="relative h-24 w-24">
  <div class="absolute inset-0 w-12">1</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute inset-x-0 top-0 h-12">2</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute inset-x-0 bottom-0 h-12">3</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute inset-y-0 right-0 w-12">4</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute inset-y-0 left-0 w-12">5</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute left-0 top-0 w-12 h-12">6</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute right-0 top-0 w-12 h-12">7</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute left-0 bottom-0 w-12 h-12">8</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute right-0 bottom-0 w-12 h-12">9</div>
</div>
```

## 可见性

用于控制元素可见性的工具类。

| 修饰类        | 定义  |
|:------------- |:----- |
| `visible`        | `visibility: visible;` |
| `invisible`        | `visibility: hidden;` |

### 使用方法

<Example>
  <div class="mb-3">可见</div>
  <div class="flex gap-4 mb-3">
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded">1</div>
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded visible">2</div>
  </div>
  <div class="mb-3">不可见</div>
  <div class="flex gap-4">
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded">1</div>
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded invisible">2</div>
  </div>

</Example>

```html
<div>可见</div>
<div>1</div>
<div class="visible">2</div>

<div>不可见</div>
<div>1</div>
<div class="invisible">2</div>
```

## 层级

| 修饰类        | 定义  |
|:------------- |:----- |
| `z-0`        | `z-index: 0;` |
| `z-10`        | `z-index: 10;` |
| `z-20`        | `z-index: 20;` |
| `z-30`        | `z-index: 30;` |
| `z-40`        | `z-index: 40;` |
| `z-50`        | `z-index: 50;` |
| `z-auto`        | `z-index: auto;` |

### 使用方法

<Example class="flex justify-center relative text-center -h-32">
  <div class="relative w-14 h-14 bg-surface rounded flex justify-center items-center shadow-md z-50">z-50</div>
  <div class="relative w-14 h-14 --left-2 -top-2 bg-surface rounded flex justify-center items-center shadow-md z-40">z-40</div>
  <div class="relative w-14 h-14 --left-4 -top-3 bg-surface rounded flex justify-center items-center shadow-md z-30">z-30</div>
  <div class="relative w-14 h-14 --left-6 -top-4 bg-surface rounded flex justify-center items-center shadow-md z-20">z-20</div>
  <div class="relative w-14 h-14 --left-8 -top-6 bg-surface rounded flex justify-center items-center shadow-md z-10">z-10</div>
</Example>

```html
<div class="z-50">z-50</div>
<div class="z-40">z-40</div>
<div class="z-30">z-30</div>
<div class="z-20">z-20</div>
<div class="z-10">z-10</div>
```
