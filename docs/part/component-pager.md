section: component
id: pager
description: 为内容分页
icon: 123
filter: fenyetiao fyt
---

# 分页条

## 各种分页导航

<div class="example">
  <ul class="pager">
    <li class="previous"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager">
    <li class="previous"><a href="#">« 上一页</a></li>
    <li class="next"><a href="#">下一页 »</a></li>
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
    <li><a href="###" data-toggle="pager" data-placement="bottom">更多</a></li>
    <li><a href="#">12</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager">
    <li class="previous"><a href="#">« 上一页</a></li>
    <li><a href="#">1</a></li>
    <li><a href="###" data-toggle="pager" data-placement="top" data-url="?page=%">Pager</a></li>
    <li><a href="#">6</a></li>
    <li class="active"><a href="#">7</a></li>
    <li><a href="#">8</a></li>
    <li><a href="#">9</a></li>
    <li><a href="###" data-toggle="pager" data-placement="top">...</a></li>
    <li><a href="#">12</a></li>
    <li class="next"><a href="#">下一页 »</a></li>
  </ul>
</div>

```
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

## 禁用的导航

<div class="example">
  <ul class="pager">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager">
    <li class="previous"><a href="#">« 上一页</a></li>
    <li class="next disabled"><a href="#">下一页 »</a></li>
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

```
<ul class="pager">
  <li class="previous disabled">
    <a href="your/nice/url">«</a>
  </li>
  <li class="next">
    <a href="your/nice/url">»</a>
  </li>
</ul>
```

## 圆角样式

`.pager-pills`

<div class="example">
  <ul class="pager pager-pills">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-pills">
    <li class="previous"><a href="#">« 上一页</a></li>
    <li class="next disabled"><a href="#">下一页 »</a></li>
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

```
<ul class="pager pager-pills">
  ...
</ul>
```

## 宽松样式

`.pager-loose`

<div class="example">
  <ul class="pager pager-loose">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-loose">
    <li class="previous"><a href="#">« 上一页</a></li>
    <li class="next disabled"><a href="#">下一页 »</a></li>
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
    <li class="previous"><a href="#">« 上一页</a></li>
    <li class="next disabled"><a href="#">下一页 »</a></li>
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

```
<ul class="pager pager-loose">
  ...
</ul>
```

## 两端对齐

`.pager-justify`

<div class="example">
  <ul class="pager pager-justify">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-justify">
    <li class="previous"><a href="#">« 上一页</a></li>
    <li class="next disabled"><a href="#">下一页 »</a></li>
  </ul>
  <ul class="pager pager-justify pager-pills">
    <li class="previous disabled"><a href="#">«</a></li>
    <li class="next"><a href="#">»</a></li>
  </ul>
  <ul class="pager pager-justify pager-pills">
    <li class="previous"><a href="#">« 上一页</a></li>
    <li class="next disabled"><a href="#">下一页 »</a></li>
  </ul>
</div>

```
<ul class="pager pager-justify">
  ...
</ul>
```

<div class="alert">示例中当分页导航条目并应用高亮样式的效果是为演示方便有意添加的，并非自身交互功能。你仍然可以手动为 <code>.pager</code> 中的 <code>li</code> 添加 <code>.active</code> CLASS 来启用或移除高亮样式效果。</div>

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
