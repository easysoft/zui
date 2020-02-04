section: view
id: card
description: 可以展示图片和文本的卡片网格视图
icon: icon-th
filter: kapian kp
---

# 卡片

卡片视图使用网格（栅格）来集中展示一组卡片。

<style>
.example-cards {padding-bottom: 0;}
.example-cards > .card {width: 300px; max-width: 100%; margin-bottom: 20px;}
.example-cards > .cards-condensed {margin-bottom: 20px}
</style>

## 结构

卡片视图使用 `.cards` 类作为父级容器。因为 `.cards` 实际上具备栅格中的 `.row` 的行为，所以可以直接在 `.cards` 内包含 `.col-*` 来以栅格创建卡片排列布局。

卡片 `.card` 也可以单独使用，而不需要包含在 `.cards` 容器元素中。

通常卡片视图的 HTML 结构如下：

```html
<div class="cards">
  <div class="col-md-4">
    <div class="card">
      <img src="docs/img/img4.jpg" alt="">
    </div>
  </div>
  <!-- ... 更多的 .col-md-4 来包含卡片 -->
</div>
```

<div class="alert alert-primary-inverse">
  <h4>提示</h4>
  <p>为了方便用户创建多种尺寸的卡片，并没有限定卡片的高度，但为保证卡片视图排列正常，需要确保每个卡片的高度一致。</p>
</div>

## 简单示例

<example class="example-cards">
  <div class="cards">
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="docs/img/img1.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="docs/img/img2.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="docs/img/img3.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="docs/img/img4.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="docs/img/img5.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="docs/img/img1.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="docs/img/img2.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="docs/img/img3.jpg" alt=""></div>
    </div>
  </div>
</example>

```html
<div class="cards">
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="docs/img/img1.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="docs/img/img2.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="docs/img/img3.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="docs/img/img4.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="docs/img/img5.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="docs/img/img1.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="docs/img/img2.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="docs/img/img3.jpg" alt=""></div>
  </div>
</div>
```

## 卡片内容类型

卡片 `.card` 内可以包含各种内容，可以直接包含元素类型包括：

 - `<img>`
 - `.media-wrapper`，用来包裹 `<img>`
 - `.card-heading`，卡片标题容器
 - `.card-content`，卡片文本内容容器
 - `.card-actions`，卡片操作按钮容器
 - `.caption`，覆盖文本容器

如果在 `<a>` 元素上添加 `.card` 类则得到一个可以点击的卡片。

### 仅图片

<example class="example-cards">
  <div class="card">
    <img src="docs/img/img3.jpg" alt="">
  </div>
</example>

```html
<div class="card">
  <img src="docs/img/img3.jpg" alt="">
</div>
```

### 链接

<example class="example-cards">
  <a class="card" href="###">
    <img src="docs/img/img1.jpg" alt="">
  </a>
</example>

```html
<a class="card" href="path/to/card/detail/content">
  <img src="docs/img/img1.jpg" alt="">
</a>
```

### 标题与文字

<example class="example-cards">
  <a class="card" href="###">
    <img src="docs/img/img2.jpg" alt="">
    <div class="card-heading"><strong>良辰美景</strong></div>
    <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
  </a>
</example>

```html
<a class="card" href="###">
  <img src="docs/img/img2.jpg" alt="">
  <div class="card-heading"><strong>良辰美景</strong></div>
  <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
</a>
```

### 包含按钮

<example class="example-cards">
  <a class="card" href="###">
    <img src="docs/img/img2.jpg" alt="">
    <div class="card-heading"><strong>良辰美景</strong></div>
    <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    <div class="card-actions">
      <button type="button" class="btn btn-danger"><i class="icon-heart"></i> 喜欢</button>
      <div class="pull-right text-danger"><i class="icon-heart-empty"></i> 520 人喜欢</div>
    </div>
  </a>
</example>

```html
<a class="card" href="###">
  <img src="docs/img/img2.jpg" alt="">
  <div class="card-heading"><strong>良辰美景</strong></div>
  <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
  <div class="card-actions">
    <button type="button" class="btn btn-danger"><i class="icon-heart"></i> 喜欢</button>
    <div class="pull-right text-danger"><i class="icon-heart-empty"></i> 520 人喜欢</div>
  </div>
</a>
```

### 包含标签

<example class="example-cards">
  <a class="card" href="###">
    <img src="docs/img/img2.jpg" alt="">
    <div class="card-heading"><strong>良辰美景</strong></div>
    <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    <div class="card-actions">
      <span class="label label-warning">牡丹亭</span>
      <div class="pull-right"><i class="icon-comments-alt"></i> 520</div>
    </div>
  </a>
</example>

```html
<a class="card" href="###">
  <img src="docs/img/img2.jpg" alt="">
  <div class="card-heading"><strong>良辰美景</strong></div>
  <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
  <div class="card-actions">
    <span class="label label-warning">牡丹亭</span>
    <div class="pull-right"><i class="icon-comments-alt"></i> 520</div>
  </div>
</a>
```

### 覆盖文本

可以在 `.card` 内包含一个 `.caption` 用来展示覆盖文本。覆盖文本将在光标悬停在卡片上时滑动展现，光标离开卡片时隐藏。

<example class="example-cards">
  <a class="card" href="###">
    <img src="docs/img/img2.jpg" alt="">
    <div class="caption">“良辰美景” 出自《牡丹亭》</div>
    <div class="card-heading"><strong>良辰美景</strong></div>
    <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
  </a>
</example>

```html
<a class="card" href="###">
  <img src="docs/img/img2.jpg" alt="">
  <div class="caption">“良辰美景” 出自《牡丹亭》</div>
  <div class="card-heading"><strong>良辰美景</strong></div>
  <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
</a>
```

### 使用 `.media-wrapper` 容器

为图片增加 .media-wrapper 容器，用来为图标固定尺寸和设置特殊效果。

<example class="example-cards">
  <a class="card" href="###">
    <div class="media-wrapper">
      <img src="docs/img/img2.jpg" alt="">
    </div>
    <div class="caption">“良辰美景” 出自《牡丹亭》</div>
    <div class="card-heading"><strong>良辰美景</strong></div>
    <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
  </a>
</example>

```html
<a class="card" href="###">
  <div class="media-wrapper">
    <img src="docs/img/img2.jpg" alt="">
  </div>
  <div class="caption">“良辰美景” 出自《牡丹亭》</div>
  <div class="card-heading"><strong>良辰美景</strong></div>
  <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
</a>
```

## 无边框视图

为 `.cards` 添加 `.cards-borderless` 类来移除卡片的边框。

<example class="example-cards">
  <div class="cards cards-borderless">
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img2.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img1.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img5.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img4.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img3.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img2.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img1.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img5.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="cards cards-borderless">
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img2.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img1.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img5.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img4.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img3.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img2.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img1.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img5.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
</div>
```

## 紧凑视图

为 `.cards` 添加 `.cards-condensed` 类可以得到更为紧凑的视图，卡片之间将没有间距。

<example class="example-cards">
  <div class="cards cards-condensed">
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img2.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img1.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img5.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img4.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img3.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img2.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img1.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="docs/img/img5.jpg" alt="">
        <div class="caption">“良辰美景” 出自《牡丹亭》</div>
        <div class="card-heading"><strong>良辰美景</strong></div>
        <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
      </a>
    </div>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="cards cards-condensed">
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img2.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img1.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img5.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img4.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img3.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img2.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img1.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="docs/img/img5.jpg" alt="">
      <div class="caption">“良辰美景” 出自《牡丹亭》</div>
      <div class="card-heading"><strong>良辰美景</strong></div>
      <div class="card-content text-muted">良辰美景奈何天，赏心乐事谁家院。</div>
    </a>
  </div>
</div>
```

<div class="alert with-icon">
  <i class="icon-smile"></i>
  <div class="content">
    <p>非常感谢 <a class="alert-link" href="http://weibo.com/snowinfish" target="_blank">@snowinfish</a> 为本章节提供演示所用的全部图片。</p>
    <p class="margin-zero">图片仅供 ZUI 演示使用，未经作者授权，不得用作他用。</p>
  </div>
</div>
