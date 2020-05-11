section: javascript
id: carousel
description: Automatically switch pictures at regular intervals
icon: icon-forward
filter: lunbo lb
---

# Carousel

1: Use data attributes to control the positioning of the carousel. `data-slide` is used to set `prev` or `next`. You can also use `data-slide-to` and pass `0` as a subscript of a slide.`data-ride="carousel"` is used to mark the carousel component that starts after the page is loaded.

2：Use JS to start the carousel component: `$('.carousel').carousel()`.

## Basic Types

<div class="example no-padding">
  <div id="carouselExample1" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExample1" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExample1" data-slide-to="1" class=""></li>
      <li data-target="#carouselExample1" data-slide-to="2" class=""></li>
    </ol>
    <div class="carousel-inner">
      <div class="item active">
        <img alt="First slide" src="docs/img/slide1.jpg">
        <div class="carousel-caption">
          <h3>I am the first slide.</h3>
          <p>:)</p>
        </div>
      </div>
      <div class="item">
        <img alt="Second slide" src="docs/img/slide2.jpg">
        <div class="carousel-caption">
          <h3>I am the second slide.</h3>
          <p>0.0</p>
        </div>
      </div>
      <div class="item">
        <img alt="Third slide" src="docs/img/slide3.jpg">
        <div class="carousel-caption">
          <h3>I am the third slide.</h3>
          <p>The last one~</p>
        </div>
      </div>
    </div>
    <a class="left carousel-control" href="#carouselExample1" data-slide="prev">
      <span class="icon icon-chevron-left"></span>
    </a>
    <a class="right carousel-control" href="#carouselExample1" data-slide="next">
      <span class="icon icon-chevron-right"></span>
    </a>
  </div>
</div>

```html
<div id="myNiceCarousel" class="carousel slide" data-ride="carousel">
  <!-- Dot indicator -->
  <ol class="carousel-indicators">
    <li data-target="#myNiceCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myNiceCarousel" data-slide-to="1"></li>
    <li data-target="#myNiceCarousel" data-slide-to="2"></li>
  </ol>

  <!-- Carousel project -->
  <div class="carousel-inner">
    <div class="item active">
      <img alt="First slide" src="http://openzui.com/docs/img/slide1.jpg">
      <div class="carousel-caption">
        <h3>I am the first slide.</h3>
        <p>:)</p>
      </div>
    </div>
    <div class="item">
      <img alt="Second slide" src="http://openzui.com/docs/img/slide2.jpg">
      <div class="carousel-caption">
        <h3>I am the second slide.</h3>
        <p>0.0</p>
      </div>
    </div>
    <div class="item">
      <img alt="Third slide" src="http://openzui.com/docs/img/slide3.jpg">
      <div class="carousel-caption">
        <h3>I am the third slide.</h3>
        <p>The last one~</p>
      </div>
    </div>
  </div>

  <!-- Switching button -->
  <a class="left carousel-control" href="#myNiceCarousel" data-slide="prev">
    <span class="icon icon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#myNiceCarousel" data-slide="next">
    <span class="icon icon-chevron-right"></span>
  </a>
</div>
```

## Parameters

Use data attributes or JavaScript to pass options. For data attributes, put the option name after `data-`, e.g. `data-interval=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Name</th>
      <th style="width: 50px;">Type</th>
      <th style="width: 50px;">Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>interval</td>
      <td>number</td>
      <td>5000</td>
      <td>Waiting time for slide rotation. If false, the carousel will not automatically loop.</td>
    </tr>
    <tr>
      <td>pause</td>
      <td>string</td>
      <td>"hover"</td>
      <td>When hovering the slide area, the carousel stops displaying. Start the carousel when hovering is over.</td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>boolean</td>
      <td>true</td>
      <td>Whether the carousel loop is enabled.</td>
    </tr>
  </tbody>
</table>

## Methods and events

Use data attributes orJavaScript to pass options. For data attributes, put the option name after `data-`, e.g. `data-interval=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`.carousel(options)`</td>
      <td>Initialize the carousel component. Receive an optional parameter of object, and start the carousel loop.</td>
    </tr>
    <tr>
      <td>`.carousel('cycle')`</td>
      <td>Loop each frame from left to right.</td>
    </tr>
    <tr>
      <td>`.carousel('pause')`</td>
      <td>Stop the carousel.</td>
    </tr>
    <tr>
      <td>`.carousel(number)`</td>
      <td>Position the carousel on the specified frame(Frame subscript 0 as a Start, like an array).</td>
    </tr>
    <tr>
      <td>`.carousel('pre')`</td>
      <td>Return to the previous frame.</td>
    </tr>
    <tr>
      <td>`.carousel('next')`</td>
      <td>Go to the next frame.</td>
    </tr>
  </tbody>
</table>

### Event for listening

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Event Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>slide.zui.carousel</td>
      <td>This event is triggered when `slide` is called.</td>
    </tr>
    <tr>
      <td>slid.zui.carousel</td>
      <td>This event is triggered when all slides have been played.</td>
    </tr>
    <tr>
      <td colspan="2">`$('#myCarousel').on('slide.zui.carousel', function() {// do something…})`</td>
    </tr>
  </tbody>
</table>

<div class="alert with-icon">
  <i class="icon-smile"></i>
  <div class="content">
    <p>Thank <a class="alert-link" href="http://weibo.com/snowinfish" target="_blank">@snowinfish</a> for all the pictures used in the demo for this chapter.</p>
    <p class="margin-zero">Images are for ZUI Demo ONLY. Do not use it without being authorized by the owner.</p>
  </div>
</div>
