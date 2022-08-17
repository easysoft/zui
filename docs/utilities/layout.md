# 布局

详细配置可参考 [Tailwind 官网](https://www.tailwindcss.cn/docs/container)。

## 宽高比

| 修饰类        | 定义  |
|:------------- |:----- |
| `-aspect-auto`  | `aspect-ratio: auto;` |
| `-aspect-square`  | `aspect-ratio: 1 / 1;` |
| `-aspect-video`  | `aspect-ratio: 16 / 9;` |

## 容器

| 修饰类        | 断点 | 定义  |
|:------------- |:---- |:----- |
| `-container`  | 无 | `width: 100%;` |
| `-container` | sm (640px) | `max-width: 640px;` |
| `-container` | sm (768px) | `max-width: 768px;` |
| `-container` | sm (1024px) | `max-width: 1024px;` |
| `-container` | sm (1280px) | `max-width: 1280px;` |
| `-container` | sm (1536px) | `max-width: 1536px;` |

## 显示类型

| 修饰类        | 定义  |
|:------------- |:----- |
| `-block`        | `display: block;` |
| `-inline-block` | `display: inline-block;` |
| `-inline`       | `display: inline;` |
| `-flex`         | `display: flex;` |
| `-inline-flex`  | `display: inline-flex;` |
| `-table`        | `display: table;` |
| `-table-cell`   | `display: table-cell;` |
| `-table-row`    | `display: table-row;` |
| `-list-item`    | `display: list-item;` |
| `-hidden`       | `display: hidden;` |

## 浮动

| 修饰类        | 定义  |
|:------------- |:----- |
| `-float-right`        | `float: right;` |
| `-float-left`        | `float: left;` |

向右浮动 使用 `-float-right` 将一个元素浮动到其容器的右边。

<Example>
  <img class="-float-right -mt-2 -mr-0 -mb-4 -ml-10 -h-28" src="../../lib/avatar/assets/avatar-14.png">
  <p>ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</p>
</Example>

```html
<img class="-float-right ..." src="../../lib/avatar/assets/avatar-14.png">
<p>ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</p>
```

向左浮动 使用 `-float-left` 将一个元素浮动到其容器的右边。

<Example>
  <img class="-float-left mt-2 -mr-4 mb-4 ml-0 h-28" src="../../lib/avatar/assets/avatar-14.png">
  <p>ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</p>
</Example>

```html
<img class="-float-left ..." src="../../lib/avatar/assets/avatar-14.png">
<p>ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</p>
```

## 内容适配 Object Fit

元素的内容应该如何去适应指定容器的高度与宽度。

| 修饰类        | 定义  |
|:------------- |:----- |
| `-object-contain`        | `object-fit: contain;` |
| `-object-cover`        | `object-fit: cover;` |
| `-object-fill`        | `object-fit: fill;` |
| `-object-none`        | `object-fit: none;` |
| `-object-scale-down`        | `object-fit: scale-down;` |

### 使用方法

Contain —— 使用 .-object-contain 调整元素内容的大小，使其保持在容器内。

<Example>
  <div class="bg-surface p-4">
    <img src="../../lib/avatar/assets/avatar-14.png" class="h-48 w-full -object-contain">
  </div>
</Example>

```html
<div class="bg-surface p-4">
  <img src="../../lib/avatar/assets/avatar-14.png" class="h-48 w-full -object-contain">
</div>
```

Cover —— 使用 .-object-cover 调整元素内容的大小以覆盖其容器。

<Example>
  <div class="rounded bg-surface p-4">
    <img src="../../lib/avatar/assets/avatar-14.png" class="h-48 w-full -object-cover">
  </div>
</Example>

```html
<div class="rounded bg-surface p-4">
  <img src="../../lib/avatar/assets/avatar-14.png" class="h-48 w-full -object-cover">
</div>
```

Fill —— 使用 .-object-fill 拉伸元素的内容以适应其容器。

<Example>
  <div class="rounded bg-surface p-4">
    <img src="../../lib/avatar/assets/avatar-14.png" class="h-48 w-full -object-fill">
  </div>
</Example>

```html
<div class="rounded bg-surface p-4">
  <img src="../../lib/avatar/assets/avatar-14.png" class="h-48 w-full -object-fill">
</div>
```

None —— 使用 .-object-none 以原始大小显示元素的内容，忽略容器大小。

<Example>
  <div class="rounded bg-surface p-4">
    <img src="../../lib/avatar/assets/avatar-14.png" class="h-48 w-full -object-none">
  </div>
</Example>

```html
<div class="rounded bg-surface p-4">
  <img src="../../lib/avatar/assets/avatar-14.png" class="h-48 w-full -object-none">
</div>
```

Scale Down —— 以原始大小显示元素的内容，但必要时使用 .-object-scale-down 将其缩小以适应其容器。

<Example>
  <div class="rounded bg-surface p-4">
    <img src="../../lib/avatar/assets/avatar-14.png" class="h-48 w-full -object-scale-down">
  </div>
</Example>

```html
<div class="rounded bg-surface p-4">
  <img src="../../lib/avatar/assets/avatar-14.png" class="h-48 w-full -object-scale-down">
</div>
```

## 溢出

| 修饰类        | 定义  |
|:------------- |:----- |
| `-overflow-auto`        | `overflow: auto;` |
| `-overflow-hidden`        | `overflow: hidden;` |
| `-overflow-clip`        | `text-overflow: clip;` |
| `-overflow-visible`        | `overflow: visible;` |
| `-overflow-scroll`        | `overflow: scroll;` |
| `-overflow-x-auto`        | `overflow-x: auto;` |
| `-overflow-y-auto`        | `overflow-y: auto;` |
| `-overflow-x-hidden`        | `overflow-x: hidden;` |
| `-overflow-y-hidden`        | `overflow-y: hidden;` |
| `-overflow-x-visible`        | `overflow-x: visible;` |
| `-overflow-y-visible`        | `overflow-y: visible;` |
| `-overflow-x-scroll`        | `overflow-x: scroll;` |
| `-overflow-y-scroll`        | `overflow-y: scroll;` |

### 自动

<Example>
  <div class="-overflow-auto -h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

```html
<div class="-overflow-auto -h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 隐藏

<Example>
  <div class="-overflow-hidden -h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

```html
<div class="-overflow-hidden -h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 可见

<Example>
  <div class="-overflow-visible -h-24">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>
      春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
      雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
    </p>
  </div>
</Example>

```html
<div class="-overflow-visible -h-24">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```

### 水平滚动

<Example>
  <div class="-overflow-x-auto -whitespace-nowrap">
    <h4>虞美人·春花秋月何时了</h4>
    <p><small>五代·李煜</small></p>
    <p>春花秋月何时了？往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流</p>
  </div>
</Example>

```html
<div class="-overflow-x-auto -w-16">
  <h4>虞美人·春花秋月何时了</h4>
  <p><small>五代·李煜</small></p>
  <p>
    春花秋月何时了？往事知多少。<br>小楼昨夜又东风，故国不堪回首月明中。<br>
    雕栏玉砌应犹在，只是朱颜改。<br>问君能有几多愁？恰似一江春水向东流
  </p>
</div>
```


## 定位

| 修饰类        | 定义  |
|:------------- |:----- |
| `-static`        | `position: static;` |
| `-fixed`        | `position: fixed;` |
| `-absolute`        | `position: absolute;` |
| `-relative`        | `position: relative;` |
| `-sticky`        | `position: sticky;` |

### 使用方法

使用 static 根据常规的文档流来定位元素，浏览器默认 position 取值就是 static。

使用 relative 根据常规的文档流来定位元素。

使用 absolute 将一个元素定位在文档常规流之外，使相邻元素的行为就像该元素不存在一样。

使用 fixed 来定位一个元素相对于浏览器窗视口的位置。

<Example class="-relative">
  <div class="-static bg-surface -h-20">
    <p>Static 父元素</p>
    <div class="-absolute -bottom-0 -left-0">
      <p class="w-32 h-8 bg-secondary text-white text-center leading-8">Absolute 子元素</p>
    </div>
  </div>
</Example>
<Example>
  <div class="-relative bg-surface -h-20">
    <p>Relative 父元素</p>
    <div class="-absolute -bottom-0 -left-0">
      <p class="w-32 h-8 bg-secondary text-white text-center leading-8">Absolute 子元素</p>
    </div>
  </div>
</Example>

```html
<div class="-static -h-20">
  <p>Static 父元素</p>
  <div class="-absolute -bottom-0 -left-0">
    <p>Absolute 子元素</p>
  </div>
</div>
<div class="-relative -h-20">
  <p>Relative 父元素</p>
  <div class="-absolute -bottom-0 -left-0">
    <p>Absolute 子元素</p>
  </div>
</div>
<div class="-fixed ...">
  Fixed 子元素
</div>
```

偏移量是相对于元素的正常位置计算的，且该元素将作为其绝对定位的子元素的位置参考。

<Example>
  <div class="-h-48 -overflow-auto">
    <div class="-sticky -top-0 bg-secondary ">Sticky 1</div>
    <div class="py-4">
      <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
      <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
    </div>
    <div class="-sticky -top-0 bg-secondary ">Sticky 2</div>
    <div class="py-4">
      <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
      <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
    </div>
    <div class="-sticky -top-0 bg-secondary ">Sticky 3</div>
    <div class="py-4">
      <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
      <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
    </div>
  </div>
</Example>

```html
<div class="-h-48 -overflow-auto">
  <div class="-sticky -top-0">Sticky 1</div>
  <div class="py-4">
    <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
    <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
  </div>
  <div class="-sticky -top-0">Sticky 2</div>
  <div class="py-4">
    <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
    <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
  </div>
  <div class="-sticky -top-0">Sticky 3</div>
  <div class="py-4">
    <h4>虞美人·春花秋月何时了</h4><p><small>五代·李煜</small></p>
    <p><br>春花秋月何时了？<br>往事知多少。<br>小楼昨夜又东风，<br>故国不堪回首月明中。<br><br>雕栏玉砌应犹在，<br>只是朱颜改。<br>问君能有几多愁？<br>恰似一江春水向东流</p><br>
  </div>
</div>
```

## 定位元素位置 Top / Right / Bottom / Left

用于控制定位元素的位置的功能类。

| 修饰类        | 定义  |
|:------------- |:----- |
| `-inset-0`        | `top: 0px; right: 0px; bottom: 0px; left: 0px;` |
| `-inset-auto`        | `top: auto; right: auto; bottom: auto; left: auto;` |
| `-inset-x-0`        | `left: 0px; right: 0px;` |
| `-inset-y-0`        | `top: 0px; bottom: 0px;` |
| `-top-0`        | `top: 0px;` |
| `-right-0`        | `right: 0px;` |
| `-bottom-0`        | `bottom: 0px;` |
| `-left-0`        | `left: 0px;` |
| `-top-full`        | `top: 100%;` |
| `-right-full`        | `right: 100%;` |
| `-bottom-full`        | `bottom: 100%;` |
| `-left-full`        | `left: 100%;` |
| `-top-auto`        | `top: auto;` |
| `-right-auto`        | `right: auto;` |
| `-bottom-auto`        | `bottom: auto;` |
| `-left-auto`        | `left: auto;` |

### 使用方法

<Example class="flex gap-4 flex-wrap">
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute -inset-0 w-12 bg-secondary flex justify-center items-center rounded text-white">1</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute -inset-x-0 -top-0 h-12 bg-secondary flex justify-center items-center rounded text-white">2</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute -inset-x-0 -bottom-0 h-12 bg-secondary flex justify-center items-center rounded text-white">3</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute -inset-y-0 -right-0 w-12 bg-secondary flex justify-center items-center rounded text-white">4</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute -inset-y-0 -left-0 w-12 bg-secondary flex justify-center items-center rounded text-white">5</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute -left-0 -top-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">6</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute -right-0 -top-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">7</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute -left-0 -bottom-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">8</div>
  </div>
  <div class="relative h-24 w-24 bg-surface">
    <div class="absolute -right-0 -bottom-0 w-12 h-12 bg-secondary flex justify-center items-center rounded text-white">9</div>
  </div>
</Example>

```html
<div class="relative h-24 w-24">
  <div class="absolute -inset-0 w-12">1</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute -inset-x-0 -top-0 h-12">2</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute -inset-x-0 -bottom-0 h-12">3</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute -inset-y-0 -right-0 w-12">4</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute -inset-y-0 -left-0 w-12">5</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute -left-0 -top-0 w-12 h-12">6</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute -right-0 -top-0 w-12 h-12">7</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute -left-0 -bottom-0 w-12 h-12">8</div>
</div>
<div class="relative h-24 w-24">
  <div class="absolute -right-0 -bottom-0 w-12 h-12">9</div>
</div>
```

## 可见性

用于控制元素可见性的功能类。

| 修饰类        | 定义  |
|:------------- |:----- |
| `-visible`        | `visibility: visible;` |
| `-invisible`        | `visibility: hidden;` |

### 使用方法

<Example>
  <div class="-mb-3">可见</div>
  <div class="flex gap-4 -mb-3">
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded">1</div>
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded -visible">2</div>
  </div>
  <div class="-mb-3">不可见</div>
  <div class="flex gap-4">
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded">1</div>
    <div class="w-14 h-14 bg-surface flex justify-center items-center rounded -invisible">2</div>
  </div>
 
</Example>

```html
<div>可见</div>
<div>1</div>
<div class="-visible">2</div>

<div>不可见</div>
<div>1</div>
<div class="-invisible">2</div>
```

## 层级

| 修饰类        | 定义  |
|:------------- |:----- |
| `-z-0`        | `z-index: 0;` |
| `-z-10`        | `z-index: 10;` |
| `-z-20`        | `z-index: 20;` |
| `-z-30`        | `z-index: 30;` |
| `-z-40`        | `z-index: 40;` |
| `-z-50`        | `z-index: 50;` |
| `-z-auto`        | `z-index: auto;` |

### 使用方法

<Example class="flex justify-center relative text-center -h-32">
  <div class="relative w-14 h-14 bg-surface rounded flex justify-center items-center shadow-md -z-50">-z-50</div>
  <div class="relative w-14 h-14 --left-2 -top-2 bg-surface rounded flex justify-center items-center shadow-md -z-40">-z-40</div>
  <div class="relative w-14 h-14 --left-4 -top-3 bg-surface rounded flex justify-center items-center shadow-md -z-30">-z-30</div>
  <div class="relative w-14 h-14 --left-6 -top-4 bg-surface rounded flex justify-center items-center shadow-md -z-20">-z-20</div>
  <div class="relative w-14 h-14 --left-8 -top-6 bg-surface rounded flex justify-center items-center shadow-md -z-10">-z-10</div>
</Example>

```html
<div class="-z-50">-z-50</div>
<div class="-z-40">-z-40</div>
<div class="-z-30">-z-30</div>
<div class="-z-20">-z-20</div>
<div class="-z-10">-z-10</div>
```