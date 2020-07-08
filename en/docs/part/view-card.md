section: view
id: card
description: Card grid view used to displays images and text
icon: icon-th
filter: kapian kp
---

# Card

Card view uses grid to display a set of cards.

<style>
.example-cards {padding-bottom: 0;}
.example-cards > .card {width: 300px; max-width: 100%; margin-bottom: 20px;}
.example-cards > .cards-condensed {margin-bottom: 20px}
</style>

## Structure

Card view use `.cards` class as a parent container. Because `.cards` actually has the behavior of `.row` in the grid, embed `.col-*` in `.cards` to create a card layout with a grid.

`.card` can also be used alone and not be embeded in the element of `.cards`.

Card view HTML Structure is as follows:

```html
<div class="cards">
  <div class="col-md-4">
    <div class="card">
      <img src="../docs/img/img4.jpg" alt="">
    </div>
  </div>
  <!-- ... Use more .col-md-4 to embed cards -->
</div>
```

<div class="alert alert-primary-inverse">
  <h4>Tips</h4>
  <p>To make it easy for users to create cards in various sizes, the height of the card is not limited. To ensure that the card view is aligned properly, each card should have the same height.</p>
</div>

## Simple examples

<example class="example-cards">
  <div class="cards">
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="../docs/img/img1.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="../docs/img/img2.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="../docs/img/img3.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="../docs/img/img4.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="../docs/img/img5.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="../docs/img/img1.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="../docs/img/img2.jpg" alt=""></div>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <div class="card"><img src="../docs/img/img3.jpg" alt=""></div>
    </div>
  </div>
</example>

```html
<div class="cards">
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="../docs/img/img1.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="../docs/img/img2.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="../docs/img/img3.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="../docs/img/img4.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="../docs/img/img5.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="../docs/img/img1.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="../docs/img/img2.jpg" alt=""></div>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <div class="card"><img src="../docs/img/img3.jpg" alt=""></div>
  </div>
</div>
```

## Card content types

`.card` can contain a variety of contents, including:

 - `<img>`
 - `.media-wrapper`: Used to wrap `<img>`
 - `.card-heading`: Card title container
 - `.card-content`: Card text content container
 - `.card-actions`: Card action button container
 - `.caption`: Caption text container

Add `.card` in `<a>` to get a clickable card.

### Image only

<example class="example-cards">
  <div class="card">
    <img src="../docs/img/img3.jpg" alt="">
  </div>
</example>

```html
<div class="card">
  <img src="../docs/img/img3.jpg" alt="">
</div>
```

### Link

<example class="example-cards">
  <a class="card" href="###">
    <img src="../docs/img/img1.jpg" alt="">
  </a>
</example>

```html
<a class="card" href="path/to/card/detail/content">
  <img src="../docs/img/img1.jpg" alt="">
</a>
```

### Title and text

<example class="example-cards">
  <a class="card" href="###">
    <img src="../docs/img/img2.jpg" alt="">
    <div class="card-heading"><strong>Good view</strong></div>
    <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
  </a>
</example>

```html
<a class="card" href="###">
  <img src="../docs/img/img2.jpg" alt="">
  <div class="card-heading"><strong>Good view</strong></div>
  <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
</a>
```

### Button

<example class="example-cards">
  <a class="card" href="###">
    <img src="../docs/img/img2.jpg" alt="">
    <div class="card-heading"><strong>Good view</strong></div>
    <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    <div class="card-actions">
      <button type="button" class="btn btn-danger"><i class="icon-heart"></i> Like</button>
      <div class="pull-right text-danger"><i class="icon-heart-empty"></i> 520 Like</div>
    </div>
  </a>
</example>

```html
<a class="card" href="###">
  <img src="../docs/img/img2.jpg" alt="">
  <div class="card-heading"><strong>Good view</strong></div>
  <div class="card-content text-muted">Good day and beautiful scenery. Who is happy family?</div>
  <div class="card-actions">
    <button type="button" class="btn btn-danger"><i class="icon-heart"></i> Like</button>
    <div class="pull-right text-danger"><i class="icon-heart-empty"></i> 520 Like</div>
  </div>
</a>
```

### Tags

<example class="example-cards">
  <a class="card" href="###">
    <img src="../docs/img/img2.jpg" alt="">
    <div class="card-heading"><strong>Good view</strong></div>
    <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    <div class="card-actions">
      <span class="label label-warning">Peony Pavilion</span>
      <div class="pull-right"><i class="icon-comments-alt"></i> 520</div>
    </div>
  </a>
</example>

```html
<a class="card" href="###">
  <img src="../docs/img/img2.jpg" alt="">
  <div class="card-heading"><strong>Good view</strong></div>
  <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
  <div class="card-actions">
    <span class="label label-warning">Peony Pavilion</span>
    <div class="pull-right"><i class="icon-comments-alt"></i> 520</div>
  </div>
</a>
```

### Caption text

Embed `.caption` in `.card` to display the caption text. Caption will show when the cursor hovers over the card and be hidden when the cursor leaves the card.

<example class="example-cards">
  <a class="card" href="###">
    <img src="../docs/img/img2.jpg" alt="">
    <div class="caption">“Good view” From《Peony Pavilion》</div>
    <div class="card-heading"><strong>Good view</strong></div>
    <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
  </a>
</example>

```html
<a class="card" href="###">
  <img src="../docs/img/img2.jpg" alt="">
  <div class="caption">“Good view” From《Peony Pavilion》</div>
  <div class="card-heading"><strong>Good view</strong></div>
  <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
</a>
```

### Use `.media-wrapper` container

Add .media-wrapper container to an image to fix size and to set special effects for icons.

<example class="example-cards">
  <a class="card" href="###">
    <div class="media-wrapper">
      <img src="../docs/img/img2.jpg" alt="">
    </div>
    <div class="caption">“Good view” From《Peony Pavilion》</div>
    <div class="card-heading"><strong>Good view</strong></div>
    <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
  </a>
</example>

```html
<a class="card" href="###">
  <div class="media-wrapper">
    <img src="../docs/img/img2.jpg" alt="">
  </div>
  <div class="caption">“Good view” From《Peony Pavilion》</div>
  <div class="card-heading"><strong>Good view</strong></div>
  <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
</a>
```

## Borderless view

Add `.cards-borderless` class in `.cards` to remove the border of the card.

<example class="example-cards">
  <div class="cards cards-borderless">
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img2.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img1.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img5.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img4.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img3.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img2.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img1.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img5.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="cards cards-borderless">
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img2.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img1.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img5.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img4.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img3.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img2.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img1.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img5.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
</div>
```

## Condensed view

Add `.cards-condensed` in `.cards` to get a more condensed view. There will be no spacing between cards.

<example class="example-cards">
  <div class="cards cards-condensed">
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img2.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img1.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img5.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img4.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img3.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img2.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img1.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
    <div class="col-md-4 col-sm-6 col-lg-3">
      <a class="card" href="###">
        <img src="../docs/img/img5.jpg" alt="">
        <div class="caption">“Good view” From《Peony Pavilion》</div>
        <div class="card-heading"><strong>Good view</strong></div>
        <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
      </a>
    </div>
  </div>
</example>

<template class="pre-scrollable linenums"/>

```html
<div class="cards cards-condensed">
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img2.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img1.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img5.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img4.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img3.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img2.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img1.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
  <div class="col-md-4 col-sm-6 col-lg-3">
    <a class="card" href="###">
      <img src="../docs/img/img5.jpg" alt="">
      <div class="caption">“Good view” From《Peony Pavilion》</div>
      <div class="card-heading"><strong>Good view</strong></div>
      <div class="card-content text-muted">Good day and beautiful scenery. Who is happy?</div>
    </a>
  </div>
</div>
```

<div class="alert with-icon">
  <i class="icon-smile"></i>
  <div class="content">
    <p>Thank <a class="alert-link" href="http://weibo.com/snowinfish" target="_blank">@snowinfish</a> for all the images used in the demo.</p>
    <p class="margin-zero">Images are for ZUI Demo only. Do not use any image without authorized by the author.</p>
  </div>
</div>
