section: view
id: lightbox
description: 灯箱式图片浏览
icon: icon-carousel
filter: tupianliulan tpll dxs tp dengxiangshi tupian tpyl
---

# 图片浏览 (Lightbox)

此插件允许用户进入灯箱式浏览页面上的图片。

## 实例

### 简单例子

为按钮或链接增加`data-toggle="lightbox"`属性，点击按钮或图片来浏览图片大图。

增加`data-caption="*"`属性来为图片增加额外的描述文本。

<div class="example">
  <div class="row">
    <div class="col-sm-2">
      <a href="docs/img/img2.jpg" data-group="example-1" data-toggle="lightbox" class="btn btn-primary"><i class="icon icon-picture"></i> 浏览图片</a>
    </div>
    <div class="col-sm-4">
      <img data-group="example-2" data-toggle="lightbox" data-caption="小图看大图" src="docs/img/img4.jpg" class="img-thumbnail" alt="" width="200">
    </div>
  </div>
</div>

```html
<!-- 使用按钮 -->
<a href="image.jpg" data-toggle="lightbox" class="btn btn-primary">浏览图片</a>
```

```html
<!-- 使用图片 -->
<img data-toggle="lightbox" src="small-image.jpg" data-image="large-image.jpg" data-caption="小图看大图" class="img-thumbnail" alt="" width="200">
```

### 浏览分组

为多个`data-toggle="lightbox"`指定相同的`data-group="*"`属性，会启动分组浏览。图片左右两侧会显示图片切换按钮。

<div class="example">
  <div class="row">
    <div class="col-xs-6 col-sm-4 col-md-3"><a href="docs/img/img1.jpg" data-group="example-3" data-toggle="lightbox" data-caption="img1.jpg"><img src="docs/img/img1.jpg" class="img-rounded" alt=""></a></div>
    <div class="col-xs-6 col-sm-4 col-md-3"><a href="docs/img/img2.jpg" data-group="example-3" data-toggle="lightbox" data-caption="img2.jpg"><img src="docs/img/img2.jpg" class="img-rounded" alt=""></a></div>
    <div class="col-xs-6 col-sm-4 col-md-3"><a href="docs/img/img3.jpg" data-group="example-3" data-toggle="lightbox"><img src="docs/img/img3.jpg" class="img-rounded" alt=""></a></div>
    <div class="col-xs-6 col-sm-4 col-md-3"><a href="docs/img/img4.jpg" data-group="example-3" data-toggle="lightbox" data-caption="最后一张"><img src="docs/img/img4.jpg" class="img-rounded" alt=""></a></div>
  </div>
</div>

```html
<!-- 分组图片浏览 -->
<a href="image-1.jpg" data-toggle="lightbox" data-group="image-group-1"><img src="small-image-1.jpg" class="img-rounded" alt=""></a>
<a href="image-2.jpg" data-toggle="lightbox" data-group="image-group-1"><img src="small-image-2.jpg" class="img-rounded" alt=""></a>
<a href="image-3.jpg" data-toggle="lightbox" data-group="image-group-1"><img src="small-image-3.jpg" class="img-rounded" alt=""></a>
...
```

## 用法

为链接增加`data-toggle="lightbox"`属性会自动初始化灯箱式式浏览效果。也可以手动为链接和图片进行初始化。

```js
$('a.lightbox-toggle').lightbox({
    image: 'http://your/image/url.jpg',
    caption: '图片说明'
});
```

如果要手动动态设置显示的图片描述文本，则可以在初始化之后调用实例对象上的 `setImage(image, caption)` 方法：

```js
// 获取实例对象
var myLightBox = $('#lightBoxToggle').data('zui.lightbox');

// 更新图片和说明
myLightBox.setImage('http://new/image/url.jpg', '新的图片');

// 这样在用户下次点击触发元素时就会弹出显示新的图片.
```

如果要手动显示图片，则可以在初始化之后调用实例对象上的 `show()` 方法，该实例方法还可以接收两个参数 `image` 和 `caption` 在显示之前自动调用 `setImage` 方法更新图片和说明文本。

```js
// 获取实例对象
var myLightBox = $('#lightBoxToggle').data('zui.lightbox');

// 立即显示
myLightBox.show();

// 更新图片和描述文本并立即显示
myLightBox.show('http://new/image/url.jpg', '新的图片');
```

<script>
function afterPageLoad() {
    $('[data-toggle="lightbox"]').lightbox();
}
</script>
