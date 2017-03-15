section: javascript
id: carousel
description: 定时自动切换的图片内存
icon: icon-forward
filter: lunbo lb
---

# 轮播

使用方法一：通过data属性可以很容易的控制轮播的定位。 `data-slide` 可以接受控制播放位置的 `prev` 或 `next` 关键字。另外，还可以通过 `data-slide-to` 传递以 `0` 开始的幻灯片下标。 `data-ride="carousel"` 属性用来标记在页面加载之后即开始启动的轮播组件。

使用方法二：通过js手动启动轮播组件： `$('.carousel').carousel()`

## 基本类型

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
          <h3>我是第一张幻灯片</h3>
          <p>:)</p>
        </div>
      </div>
      <div class="item">
        <img alt="Second slide" src="docs/img/slide2.jpg">
        <div class="carousel-caption">
          <h3>我是第二张幻灯片</h3>
          <p>0.0</p>
        </div>
      </div>
      <div class="item">
        <img alt="Third slide" src="docs/img/slide3.jpg">
        <div class="carousel-caption">
          <h3>我是第三张幻灯片</h3>
          <p>最后一张咯~</p>
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
  <!-- 圆点指示器 -->
  <ol class="carousel-indicators">
    <li data-target="#myNiceCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myNiceCarousel" data-slide-to="1"></li>
    <li data-target="#myNiceCarousel" data-slide-to="2"></li>
  </ol>

  <!-- 轮播项目 -->
  <div class="carousel-inner">
    <div class="item active">
      <img alt="First slide" src="http://zui.sexy/docs/img/slide1.jpg">
      <div class="carousel-caption">
        <h3>我是第一张幻灯片</h3>
        <p>:)</p>
      </div>
    </div>
    <div class="item">
      <img alt="Second slide" src="http://zui.sexy/docs/img/slide2.jpg">
      <div class="carousel-caption">
        <h3>我是第二张幻灯片</h3>
        <p>0.0</p>
      </div>
    </div>
    <div class="item">
      <img alt="Third slide" src="http://zui.sexy/docs/img/slide3.jpg">
      <div class="carousel-caption">
        <h3>我是第三张幻灯片</h3>
        <p>最后一张咯~</p>
      </div>
    </div>
  </div>

  <!-- 项目切换按钮 -->
  <a class="left carousel-control" href="#myNiceCarousel" data-slide="prev">
    <span class="icon icon-chevron-left"></span>
  </a>
  <a class="right carousel-control" href="#myNiceCarousel" data-slide="next">
    <span class="icon icon-chevron-right"></span>
  </a>
</div>
```

## 参数

可以将选项通过data属性或JavaScript传递。对于data属性，需要将选项名称放到 `data-` 之后，例如 `data-interval=""` 。

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">名称</th>
      <th style="width: 50px;">类型</th>
      <th style="width: 50px;">默认值</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>interval</td>
      <td>number</td>
      <td>5000</td>
      <td>幻灯片轮换的等待时间。如果为false，轮播将不会自动开始循环。</td>
    </tr>
    <tr>
      <td>pause</td>
      <td>string</td>
      <td>"hover"</td>
      <td>鼠标停留在幻灯片区域即暂停轮播，鼠标离开即启动轮播。</td>
    </tr>
    <tr>
      <td>wrap</td>
      <td>boolean</td>
      <td>true</td>
      <td>轮播是否持续循环。</td>
    </tr>
  </tbody>
</table>

## 方法和事件

可以将选项通过data属性或JavaScript传递。对于data属性，需要将选项名称放到 `data-` 之后，例如 `data-interval=""` 。

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">方法</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`.carousel(options)`</td>
      <td>初始化轮播组件，接受一个可选的object类型的options参数，并开始幻灯片循环。</td>
    </tr>
    <tr>
      <td>`.carousel('cycle')`</td>
      <td>从左到右循环各帧。</td>
    </tr>
    <tr>
      <td>`.carousel('pause')`</td>
      <td>停止轮播。</td>
    </tr>
    <tr>
      <td>`.carousel(number)`</td>
      <td>将轮播定位到指定的帧上（帧下标以0开始，类似数组）。</td>
    </tr>
    <tr>
      <td>`.carousel('pre')`</td>
      <td>返回上一帧。</td>
    </tr>
    <tr>
      <td>`.carousel('next')`</td>
      <td>转到下一帧。</td>
    </tr>
  </tbody>
</table>

### 用于监听的事件

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">事件类型</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>slide.zui.carousel</td>
      <td>此事件在 `slide` 方法被调用之后立即出发。</td>
    </tr>
    <tr>
      <td>slide.zui.carousel</td>
      <td>当所有幻灯片播放完之后被触发。</td>
    </tr>
    <tr>
      <td colspan="2">`$('#myCarousel').on('slide.zui.carousel', function() {// do something…})`</td>
    </tr>
  </tbody>
</table>

<div class="alert with-icon">
  <i class="icon-smile"></i>
  <div class="content">
    <p>非常感谢 <a class="alert-link" href="http://weibo.com/snowinfish" target="_blank">@snowinfish</a> 为本章节提供演示所用的全部图片。</p>
    <p class="margin-zero">图片仅供 ZUI 演示使用，未经作者授权，不得用作他用。</p>
  </div>
</div>
