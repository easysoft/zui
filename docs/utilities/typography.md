# 排版

## 字体

| 修饰类          | 定义                  |
|:--------------- |:-------------------- |
| `sans`    | `font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";` |
| `serif`   | `font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;` |
| `mono`    | `font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;` |

<Example class="leading-7" background="light-circle">
  <div class="sans"> sans 字体</div>
  <div class="serif"> serif 字体</div>
  <div class="mono"> mono 字体</div>
</Example>

```html
<div class="sans"> sans 字体</div>
<div class="serif"> serif 字体</div>
<div class="mono"> mono 字体</div>
```

## 字体大小

| 修饰类         | 定义                  |
|:------------- |:-------------------- |
| `text-xs`    | `font-size: 0.75rem;line-height: 1rem;` |
| `text-sm`    | `font-size: 0.75rem;line-height: 1rem;` |
| `text-base`  | `font-size: 0.8125rem;line-height: 1.25rem;` |
| `text-lg`    | `font-size: 1rem;line-height: 1.5rem;` |
| `text-xl`    | `font-size: 1.125rem;line-height: 1.75rem;` |
| `text-2xl`   | `font-size: 1.5rem;line-height: 2rem;` |

<Example class="leading-7" background="light-circle">
  <div class="text-xs"> text-xs 字体大小</div>
  <div class="text-sm"> text-sm 字体大小</div>
  <div class="text-base"> text-base 字体大小</div>
  <div class="text-lg"> text-lg 字体大小</div>
  <div class="text-xl"> text-xl 字体大小</div>
  <div class="text-2xl"> text-2xl 字体大小</div>
</Example>

```html
<div class="text-xs"> text-xs 字体大小</div>
<div class="text-sm"> text-sm 字体大小</div>
<div class="text-base"> text-base 字体大小</div>
<div class="text-lg"> text-lg 字体大小</div>
<div class="text-xl"> text-xl 字体大小</div>
<div class="text-2xl"> text-2xl 字体大小</div>
```

## 字体粗细

| 修饰类          | 定义                 |
|:-------------- |:-------------------- |
| `font-thin`   | `font-weight: 100;` |
| `font-light`  | `font-weight: 300;` |
| `font-medium` | `font-weight: 500;` |
| `font-bold`   | `font-weight: 700;` |
| `font-black`  | `font-weight: 900;` |

<Example class="leading-7" background="light-circle">
  <div class="font-thin"> font-thin 字体粗细</div>
  <div class="font-light"> font-light 字体粗细</div>
  <div class="font-medium"> font-medium 字体粗细</div>
  <div class="font-bold"> font-bold 字体粗细</div>
  <div class="font-black"> font-black 字体粗细</div>
</Example>

```html
<div class="font-thin"> font-thin 字体粗细</div>
<div class="font-light"> font-light 字体粗细</div>
<div class="font-medium"> font-medium 字体粗细</div>
<div class="font-bold"> font-bold 字体粗细</div>
<div class="font-black"> font-black 字体粗细</div>
```

## 行高

用于控制元素的前行距（行高）的工具类。

| 修饰类              | 定义                 |
|:------------------ |:-------------------- |
| `leading-3`       | `line-height: .75rem;` |
| `leading-4`       | `line-height: 1rem;` |
| `leading-5`       | `line-height: 1.25rem;` |
| `leading-6`       | `line-height: 1.5rem;` |
| `leading-7`       | `line-height: 1.75rem;` |
| `leading-8`       | `line-height: 2rem;` |
| `leading-9`       | `line-height: 2.25rem;` |
| `leading-10`      | `line-height: 2.5rem;` |
| `leading-none`    | `line-height: 1;` |
| `leading-tight`   | `line-height: 1.25;` |
| `leading-snug`    | `line-height: 1.375;` |
| `leading-normal`  | `line-height: 1.5;` |
| `leading-relaxed` | `line-height: 1.625;` |
| `leading-loose`   | `line-height: 2;` |

<Example background="light-circle">
  <div class="leading-3"> leading-3 行高展示</div>
  <div class="leading-4"> leading-4 行高展示</div>
  <div class="leading-5"> leading-5 行高展示</div>
  <div class="leading-6"> leading-6 行高展示</div>
  <div class="leading-7"> leading-7 行高展示</div>
  <div class="leading-8"> leading-8 行高展示</div>
  <div class="leading-9"> leading-9 行高展示</div>
  <div class="leading-10"> leading-10 行高展示</div>
  <div class="leading-none"> leading-none 行高展示</div>
  <div class="leading-tight"> leading-tight 行高展示</div>
  <div class="leading-snug"> leading-snug 行高展示</div>
  <div class="leading-normal"> leading-normal 行高展示</div>
  <div class="leading-relaxed"> leading-relaxed 行高展示</div>
  <div class="leading-loose"> leading-loose 行高展示</div>
</Example>

```html
<div class="leading-3"> leading-3 行高展示</div>
<div class="leading-4"> leading-4 行高展示</div>
<div class="leading-5"> leading-5 行高展示</div>
<div class="leading-6"> leading-6 行高展示</div>
<div class="leading-7"> leading-7 行高展示</div>
<div class="leading-8"> leading-8 行高展示</div>
<div class="leading-9"> leading-9 行高展示</div>
<div class="leading-10"> leading-10 行高展示</div>
<div class="leading-none"> leading-none 行高展示</div>
<div class="leading-tight"> leading-tight 行高展示</div>
<div class="leading-snug"> leading-snug 行高展示</div>
<div class="leading-normal"> leading-normal 行高展示</div>
<div class="leading-relaxed"> leading-relaxed 行高展示</div>
<div class="leading-loose"> leading-loose 行高展示</div>
```

## 控制文本行数

| 修饰类           | 定义                 |
|:--------------- |:-------------------- |
| `line-2` | `overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;` |
| `line-3` | `overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;` |
| `line-4` | `overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;` |
| `line-5` | `overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 5;` |
| `line-6` | `overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 6;` |

<Example>
  <div class="mb-4 bd line-2">ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</div>
  <div class="mb-4 bd line-3">ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</div>
  <div class="mb-4 bd line-4">ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</div>
  <div class="mb-4 bd line-5">ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</div>
  <div class="mb-4 bd line-6">ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</div>
</Example>

```html
<div class="mb-4 bd line-2">ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</div>
<div class="mb-4 bd line-3">ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</div>
<div class="mb-4 bd line-4">ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</div>
<div class="mb-4 bd line-5">ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</div>
<div class="mb-4 bd line-6">ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。ZUI3 开箱即用的组合式前端 UI 框架。</div>
```

## 文本对齐

| 修饰类          | 定义                 |
|:-------------- |:-------------------- |
| `text-left`   | `text-align: left;` |
| `text-center` | `text-align: center;` |
| `text-right`  | `text-align: right;` |
| `text-justify`| `text-align: justify;` |

<Example class="leading-7" background="light-circle">
  <p class="text-left">文本左对齐</p>
  <p class="-text-center">文本居中对齐</p>
  <p class="text-right">文本右对齐</p>
  <p class="text-justify">文本两端对齐</p>
</Example>

```html
<p class="text-left">文本左对齐</p>
<p class="-text-center">文本居中对齐</p>
<p class="text-right">文本右对齐</p>
<p class="text-justify">文本两端对齐</p>
```

## 垂直对齐

用于控制内联或表格单元格的垂直对齐的工具类。

| 修饰类            | 定义                 |
|:---------------- |:-------------------- |
| `align-middle`  | `vertical-align: middle;` |
| `align-top`     | `vertical-align: top;` |
| `align-bottom`  | `vertical-align: bottom;` |
| `align-sub`     | `vertical-align: sub;` |
| `align-super`   | `vertical-align: super;` |

<Example background="light-circle">
  <p class="text-xl mb-3">参照文本 <span class="align-middle text-xs">对齐</span></p>
  <p class="text-xl mb-3">参照文本 <span class="align-top text-xs">对齐</span></p>
  <p class="text-xl mb-3">参照文本 <span class="align-bottom text-xs">对齐</span></p>
  <p class="text-xl mb-3">参照文本 <span class="align-sub text-xs">对齐</span></p>
  <p class="text-xl mb-3">参照文本 <span class="align-super text-xs">对齐</span></p>
</Example>

```html
<p class="text-xl">参照文本 <span class="align-middle text-xs">对齐</span></p>
<p class="text-xl">参照文本 <span class="align-top text-xs">对齐</span></p>
<p class="text-xl">参照文本 <span class="align-bottom text-xs">对齐</span></p>
<p class="text-xl">参照文本 <span class="align-sub text-xs">对齐</span></p>
<p class="text-xl">参照文本 <span class="align-super text-xs">对齐</span></p>
```

## 文本颜色

| 修饰类          | 定义                 |
|:-------------- |:-------------------- |
| `text-primary`   | `color: #2b80ff` |
| `text-secondary`   | `color: #37b2fe` |
| `text-success`   | `color: #17ce97` |
| `text-warning`   | `color: #ffa34d` |
| `text-danger`   | `color: #ff5858` |
| `text-important`   | `color: #ff4f9e` |
| `text-special`   | `color: #9d5eff` |
| `text-white`   | `color: #fff` |
| `text-lighter`   | `color: #e3e4e9` |
| `text-light`   | `color: #e6eaf1` |
| `text-gray`   | `color: #9ea3b0` |
| `text-dark`   | `color: #5e626d` |
| `text-darker`   | `color: #1b1f28` |
| `text-black`   | `color: #000` |
| `text-canvas`   | `color: #fff` |
| `text-surface`   | `color: #f4f5f7` |
| `text-inverse`   | `color: #3c4353` |

<Example class="flex flex-wrap gap-2 -bg-danger-100">
  <span class="w-36 text-primary">text-primary</span>
  <span class="w-36 text-secondary">text-secondary</span>
  <span class="w-36 text-success">text-success</span>
  <span class="w-36 text-warning">text-warning</span>
  <span class="w-36 text-danger">text-danger</span>
  <span class="w-36 text-important">text-important</span>
  <span class="w-36 text-special">text-special</span>
  <span class="w-36 text-white">text-white</span>
  <span class="w-36 text-lighter">text-lighter</span>
  <span class="w-36 text-light">text-light</span>
  <span class="w-36 text-gray">text-gray</span>
  <span class="w-36 text-dark">text-dark</span>
  <span class="w-36 text-darker">text-darker</span>
  <span class="w-36 text-black">text-black</span>
  <span class="w-36 text-canvas">text-canvas</span>
  <span class="w-36 text-surface">text-surface</span>
  <span class="w-36 text-inverse">text-inverse</span>
</Example>

```html
<span class="text-primary">text-primary</span>
<span class="text-secondary">text-secondary</span>
<span class="text-success">text-success</span>
<span class="text-warning">text-warning</span>
<span class="text-danger">text-danger</span>
<span class="text-important">text-important</span>
<span class="text-special">text-special</span>
<span class="text-white">text-white</span>
<span class="text-lighter">text-lighter</span>
<span class="text-light">text-light</span>
<span class="text-gray">text-gray</span>
<span class="text-dark">text-dark</span>
<span class="text-darker">text-darker</span>
<span class="text-canvas">text-canvas</span>
<span class="text-surface">text-surface</span>
<span class="text-inverse">text-inverse</span>
```

## 文本溢出

| 修饰类          | 定义                 |
|:-------------- |:-------------------- |
| `ellipsis`   | `overflow: hidden;text-overflow: ellipsis;white-space: nowrap;` |
| `clip`  | `overflow: hidden;text-overflow: clip;white-space: nowrap;` |

使用 `ellipsis` 用省略号(…)来截断溢出的文本。

<Example background="light-circle">
  <p class="px-6 ellipsis">这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。</p>
  <p class="px-6 clip">这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。</p>
</Example>

```html
<p class="px-6 ellipsis">这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。</p>
<p class="px-6 clip">这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。这是一段内容。</p>

```

## 空格

| 修饰类       | 定义                 |
|:----------- |:-------------------- |
| `nowrap`    | `white-space: nowrap;` |
| `pre`       | `white-space: pre;` |
| `pre-line`  | `white-space: pre-line;` |
| `pre-wrap`  | `white-space: pre-wrap;` |

### No Wrap

使用 `nowrap` 来防止文本在元素中被包裹。换行和空格将被折叠。

<Example>
  <div class="bd mb-3 nowrap">曾子曰：“士不可以不弘毅，任重而道远。仁以为己任，不亦重乎？死而后已，不亦远乎？”
  子曰：“岁寒，然后知松柏之后凋也。”</div>
</Example>

```html
<div class="bd mb-3 nowrap">曾子曰：“士不可以不弘毅，任重而道远。仁以为己任，不亦重乎？死而后已，不亦远乎？”
子曰：“岁寒，然后知松柏之后凋也。”</div>
```

### Pre

使用 `pre` 来保留元素中的换行和空格。文本不会被包装。

<Example>
  <div class="bd mb-3 pre">曾子曰：“士不可以不弘毅，任重而道远。仁以为己任，不亦重乎？死而后已，不亦远乎？”
  子曰：“岁寒，然后知松柏之后凋也。”</div>
</Example>

```html
<div class="bd mb-3 pre">曾子曰：“士不可以不弘毅，任重而道远。仁以为己任，不亦重乎？死而后已，不亦远乎？”
子曰：“岁寒，然后知松柏之后凋也。”</div>
```

### Pre Line

使用 `pre-line` 保留换行，但不保留元素中的空格。文本将被正常包装。

<Example>
  <div class="bd mb-3 pre-line">曾子曰：“士不可以不弘毅，任重而道远。仁以为己任，不亦重乎？死而后已，不亦远乎？”
  子曰：“岁寒，然后知松柏之后凋也。”</div>
</Example>

```html
<div class="bd mb-3 pre-line">曾子曰：“士不可以不弘毅，任重而道远。仁以为己任，不亦重乎？死而后已，不亦远乎？”
子曰：“岁寒，然后知松柏之后凋也。”</div>
```

### Pre Wrap

使用 `pre-wrap` 来保留元素中的换行和空格。文本将被正常包装。

<Example>
  <div class="bd pre-wrap">曾子曰：“士不可以不弘毅，任重而道远。仁以为己任，不亦重乎？死而后已，不亦远乎？”
  子曰：“岁寒，然后知松柏之后凋也。”</div>
</Example>

```html
<div class="bd pre-wrap">曾子曰：“士不可以不弘毅，任重而道远。仁以为己任，不亦重乎？死而后已，不亦远乎？”
  子曰：“岁寒，然后知松柏之后凋也。”</div>
```

## 文本换行

| 修饰类          | 定义                 |
|:-------------- |:-------------------- |
| `break-normal`   | `overflow-wrap: normal;word-break: normal;` |
| `break-words`   | `overflow-wrap: break-word;` |
| `break-all`   | `word-break: break-all;` |

### Normal

使用 `break-normal` 只在正常的换行点添加换行符。

<Example>
  <div class="px-6 break-words bg-surface">艺术，在某种程度上永远是关于如何从杂乱中理出条理。
    Art is always to an extent about trying to create order out of chaos. 
    ——威尔·贡培兹《现代艺术150年》
  </div>
</Example>

```html
<div class="px-6 break-words bg-surface">艺术，在某种程度上永远是关于如何从杂乱中理出条理。
  Art is always to an extent about trying to create order out of chaos. 
  ——威尔·贡培兹《现代艺术150年》
</div>
```

### Break Words

使用 `break-words` 在词中间添加换行符。

<Example>
  <div class="px-6 break-words bg-surface">艺术，在某种程度上永远是关于如何从杂乱中理出条理。
    Art is always to an extent about trying to create order out of chaos. 
    ——威尔·贡培兹《现代艺术150年》
  </div>
</Example>

```html
<div class="px-6 break-words bg-surface">艺术，在某种程度上永远是关于如何从杂乱中理出条理。
  Art is always to an extent about trying to create order out of chaos. 
  ——威尔·贡培兹《现代艺术150年》
</div>
```

### Break All

使用 `break-all` 在必要的时候添加换行符，而不是试图保留整个单词。

<Example>
  <div class="px-6 break-all bg-surface">艺术，在某种程度上永远是关于如何从杂乱中理出条理。
    Art is always to an extent about trying to create order out of chaos. 
    ——威尔·贡培兹《现代艺术150年》
  </div>
</Example>

```html
<div class="px-6 break-all bg-surface">艺术，在某种程度上永远是关于如何从杂乱中理出条理。
  Art is always to an extent about trying to create order out of chaos. 
  ——威尔·贡培兹《现代艺术150年》
</div>
```

