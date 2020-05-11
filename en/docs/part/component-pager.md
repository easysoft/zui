section: component
id: pager
description: Pagination for content
icon: 123
filter: fenyetiao fyt
---

# Pager

## Pager navigations

<div class="example">
  <ul class="pager">
    <li class="previous"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager">
    <li class="previous"><a href="#">« Previous page</a></li>
    <li class="next"><a href="#">Next page »</a></li>
  </ul>
  <ul class="pager">
    <li class="previous"><a href="#">«</a></li>
    <li><a href="#">1</a></li>
    <li class="active"><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager">
    <li class="previous"><a href="#">«</a></li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li class="active"><a href="#">5</a></li>
    <li><a href="###" data-toggle="pager" data-placement="bottom">More</a></li>
    <li><a href="#">12</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager">
    <li class="previous"><a href="#">« Previous page</a></li>
    <li><a href="#">1</a></li>
    <li><a href="###" data-toggle="pager" data-placement="top" data-url="?page=%">Pager</a></li>
    <li><a href="#">6</a></li>
    <li class="active"><a href="#">7</a></li>
    <li><a href="#">8</a></li>
    <li><a href="#">9</a></li>
    <li><a href="###" data-toggle="pager" data-placement="top">...</a></li>
    <li><a href="#">12</a></li>
    <li class="next"><a href="#">Next page »</a></li>
  </ul>
</div>

```html
<ul class="pager">
  <li class="previous"><a href="your/nice/url">«</a></li>
  <li><a href="your/nice/url">1</a></li>
  <li class="active"><a href="your/nice/url">2</a></li>
  <li><a href="your/nice/url">3</a></li>
  <li><a href="your/nice/url">4</a></li>
  <li><a href="your/nice/url">5</a></li>
  <li class="next"><a href="your/nice/url">»</a></li>
</ul>
```

## Disabled navigation

<div class="example">
  <ul class="pager">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager">
    <li class="previous"><a href="#">« Previous page</a></li>
    <li class="next disabled"><a href="#">Next page »</a></li>
  </ul>
  <ul class="pager">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager">
    <li class="previous"><a href="#">«</a></li>
    <li><a href="#">1</a></li>
    <li><a href="###" data-toggle="pager">Pager</a></li>
    <li><a href="#">118</a></li>
    <li><a href="#">119</a></li>
    <li><a href="#">1110</a></li>
    <li><a href="#">1111</a></li>
    <li class="active"><a href="#">12</a></li>
    <li class="next disabled"><a href="#">»</a></li>
  </ul>
  <br>
</div>

```html
<ul class="pager">
  <li class="previous disabled">
    <a href="your/nice/url">«</a>
  </li>
  <li class="next">
    <a href="your/nice/url">»</a>
  </li>
</ul>
```

## Rounded

`.pager-pills`

<div class="example">
  <ul class="pager pager-pills">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-pills">
    <li class="previous"><a href="#">« Previous page</a></li>
    <li class="next disabled"><a href="#">Next page »</a></li>
  </ul>
  <ul class="pager pager-pills">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-pills">
    <li class="previous"><a href="#">«</a></li>
    <li><a href="#">1</a></li>
    <li><a href="###" data-toggle="pager" data-placement="top">...</a></li>
    <li><a href="#">8</a></li>
    <li><a href="#">9</a></li>
    <li><a href="#">10</a></li>
    <li><a href="#">11</a></li>
    <li class="active"><a href="#">12</a></li>
    <li class="next disabled"><a href="#">»</a></li>
  </ul>
  <br>
</div>

```html
<ul class="pager pager-pills">
  ...
</ul>
```

## Loose

`.pager-loose`

<div class="example">
  <ul class="pager pager-loose">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-loose">
    <li class="previous"><a href="#">« Previous page</a></li>
    <li class="next disabled"><a href="#">Next page »</a></li>
  </ul>
  <ul class="pager pager-loose">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-loose">
    <li class="previous"><a href="#">«</a></li>
    <li><a href="#">1</a></li>
    <li><a href="###" data-toggle="pager" data-placement="top">...</a></li>
    <li><a href="#">8</a></li>
    <li><a href="#">9</a></li>
    <li><a href="#">10</a></li>
    <li><a href="#">11</a></li>
    <li class="active"><a href="#">12</a></li>
    <li class="next disabled"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-loose pager-pills">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-loose pager-pills">
    <li class="previous"><a href="#">« Previous page</a></li>
    <li class="next disabled"><a href="#">Next page »</a></li>
  </ul>
  <ul class="pager pager-loose pager-pills">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="active"><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-loose pager-pills">
    <li class="previous"><a href="#">«</a></li>
    <li><a href="#">1</a></li>
    <li><a href="###" data-toggle="pager" data-placement="top">...</a></li>
    <li><a href="#">8</a></li>
    <li><a href="#">9</a></li>
    <li><a href="#">10</a></li>
    <li><a href="#">11</a></li>
    <li class="active"><a href="#">12</a></li>
    <li class="next disabled"><a href="#">»</a></li>
  </ul>
</div>

```html
<ul class="pager pager-loose">
  ...
</ul>
```

## Justified

`.pager-justify`

<div class="example">
  <ul class="pager pager-justify">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-justify">
    <li class="previous"><a href="#">« Previous page</a></li>
    <li class="next disabled"><a href="#">Next page »</a></li>
  </ul>
  <ul class="pager pager-justify pager-pills">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-justify pager-pills">
    <li class="previous"><a href="#">« Previous page</a></li>
    <li class="next disabled"><a href="#">Next page »</a></li>
  </ul>
</div>

```html
<ul class="pager pager-justify">
  ...
</ul>
```

<div class="alert">Not an interaction of a pager being highlighted when you click it. It is just for demonstration. You can add <code>.active</code> CLASS to <code>li</code> in <code>.pager</code> to enable the highlight style.</div>

<script>
function afterPageLoad() {
    $('#pageContent').on('click', '.pager > li > a', function() {
        var $item = $(this).parent('li');
        $item.parent().children('.active').removeClass('active');
        if(!isNaN(parseInt($item.text()))) {
            $item.addClass('active');
        }
    });
}
</script>
