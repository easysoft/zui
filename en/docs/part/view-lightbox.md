section: view
id: lightbox
description: Lightbox image browsing
icon: icon-carousel
filter: tupianliulan tpll dxs tp dengxiangshi tupian tpyl
---

# Lightbox

This lightbox plugin allows users to browse images on the lightbox page.

## Examples

### Simple examples

Add `data-toggle="lightbox"` attributes for buttons or links. Click the button or the image to view a larger image.

Add `data-caption="*"` attributes to add descriptive text to the image.

<div class="example">
  <div class="row">
    <div class="col-sm-2">
      <a href="docs/img/img2.jpg" data-group="example-1" data-toggle="lightbox" class="btn btn-primary"><i class="icon icon-picture"></i> View Image</a>
    </div>
    <div class="col-sm-4">
      <img data-group="example-2" data-toggle="lightbox" data-caption="Enlarge the small image" src="docs/img/img4.jpg" class="img-thumbnail" alt="" width="200">
    </div>
  </div>
</div>

```html
<!-- Use a button -->
<a href="image.jpg" data-toggle="lightbox" class="btn btn-primary">View Image</a>
```

```html
<!-- Use images -->
<img data-toggle="lightbox" src="small-image.jpg" data-image="large-image.jpg" data-caption="Enlarge the small image" class="img-thumbnail" alt="" width="200">
```

### Lightbox group

Specify the same`data-group="*"` attributes for multiple `data-toggle="lightbox"` to enable group browsing. Image switching buttons will be displayed on the left and the right of the images.

<div class="example">
  <div class="row">
    <div class="col-xs-6 col-sm-4 col-md-3"><a href="docs/img/img1.jpg" data-group="example-3" data-toggle="lightbox" data-caption="img1.jpg"><img src="../docs/img/img1.jpg" class="img-rounded" alt=""></a></div>
    <div class="col-xs-6 col-sm-4 col-md-3"><a href="docs/img/img2.jpg" data-group="example-3" data-toggle="lightbox" data-caption="img2.jpg"><img src="../docs/img/img2.jpg" class="img-rounded" alt=""></a></div>
    <div class="col-xs-6 col-sm-4 col-md-3"><a href="docs/img/img3.jpg" data-group="example-3" data-toggle="lightbox"><img src="../docs/img/img3.jpg" class="img-rounded" alt=""></a></div>
    <div class="col-xs-6 col-sm-4 col-md-3"><a href="docs/img/img4.jpg" data-group="example-3" data-toggle="lightbox" data-caption="last one"><img src="../docs/img/img4.jpg" class="img-rounded" alt=""></a></div>
  </div>
</div>

```html
<!-- Group image browsing -->
<a href="image-1.jpg" data-toggle="lightbox" data-group="image-group-1"><img src="small-image-1.jpg" class="img-rounded" alt=""></a>
<a href="image-2.jpg" data-toggle="lightbox" data-group="image-group-1"><img src="small-image-2.jpg" class="img-rounded" alt=""></a>
<a href="image-3.jpg" data-toggle="lightbox" data-group="image-group-1"><img src="small-image-3.jpg" class="img-rounded" alt=""></a>
...
```

## Usage

Add `data-toggle="lightbox"` for links to automatically initialize the lightbox. You can also manually initialize thelightbox for links and images.

```js
$('a.lightbox-toggle').lightbox({
    image: 'http://your/image/url.jpg',
    caption: 'illustrate'
});
```

If you want to manually set the image description dynamically, you can call `setImage(image, caption)` method on the instance object after initialization:

```js
// Get the instance object
var myLightBox = $('#lightBoxToggle').data('zui.lightbox');

// Update image and description
myLightBox.setImage('http://new/image/url.jpg', 'New picture');

// A new image will pop out when the user clicks on the trigger element.
```

If you want to display the image manually, you can call `setImage(image, caption)` method on the instance object after initialization. The instance method can also receive two parameters `image` and `caption` to automatically call `setImage` method to update images and its description before it is displayed.

```js
// Get the instance object
var myLightBox = $('#lightBoxToggle').data('zui.lightbox');

// Show immediately
myLightBox.show();

// Update the image and its description, and display it immediately.
myLightBox.show('http://new/image/url.jpg', 'New picture');
```

<script>
function afterPageLoad() {
    $('[data-toggle="lightbox"]').lightbox();
}
</script>
