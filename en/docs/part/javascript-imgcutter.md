section: javascript
id: imgcutter
description: Crop images
icon: icon-crop
filter: tupianjianqie tpjq cj caijian
---

# Image Cutter

<style>
.img-cutter-info {margin-bottom: 10px}
</style>

This plugin allows the user to crop images by dragging the area border.

<div class="alert alert-warning">
  <h4>Tips</h4>
  <p>This plugin does not actually crop the images in order to be compatible with browseres. When the cropped area is selected, you need to upload the cropped area to the server and the server will do image cutting.</p>
  <p>You can still listen <code>before</code> event to proces sactions after the cropped area is selected, including cutting the image locally.</p>
</div>

<div class="alert alert-danger">
  <h4>Compatibility</h4>
  <ul>
    <li>Compatibility issues in IE 8 and IE 9;</li>
    <li>Drag-and-drop is not available on the touch screen;</li>
    <li>Its best experience is not available on a small screen.</li>
  </ul>
</div>

## Comprehensive examples

### Introduce assets

Imagecutter is an independent components. so you need to introduce assets in lib/ from local or CDN:

```html
<link href="lib/imgcutter/zui.imgcutter.min.css" rel="stylesheet">
<script src="lib/imgcutter/zui.imgcutter.min.js"></script>
```

### Examples

<div class="example">
  <div class="img-cutter" id="imgCutter">
    <div class="canvas"><img src="docs/img/slide1.jpg" alt=""></div>
    <div class="actions">
      <h5>Drag and drop to cut the picture</h5>
      <div class="img-cutter-info small"></div>
      <button type="button" class="btn btn-primary img-cutter-submit">confirm</button>
    </div>
  </div>
</div>

```html
<!-- HTML structure -->
<div class="img-cutter" id="imgCutter">
  <div class="canvas"><img src="image.jpg" alt=""></div>
  <div class="actions">
    <h5>Drag and drop to cut the picture</h5>
    <button type="button" class="btn btn-primary img-cutter-submit">Confirm</button>
  </div>
</div>
```

```js
// byJavascriptinitialization
$('#imgCutter').imgCutter(options);
```

## Options

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Name</th>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`coverColor`</td>
      <td>Mask layer color</td>
      <td>A string representing a color. Default: `"#000"`</td>
      <td></td>
    </tr>
    <tr>
      <td>`coverOpacity`</td>
      <td>Mask layer transparency</td>
      <td>Less than 1. Default: `0.6`</td>
      <td></td>
    </tr>
    <tr>
      <td>`defaultWidth`</td>
      <td>Default image width</td>
      <td>Default: `128`</td>
    </tr>
    <tr>
      <td>`defaultHeight`</td>
      <td>Default picture height</td>
      <td>Default: `128`</td>
    </tr>
    <tr>
      <td>`fixedRatio`</td>
      <td>Enable fixed size ratio</td>
      <td>`false`(default)|`true`</td>
      <td>If fixed size ratio is enabled, the image will have the initial size as a fixed ratio to zoom when being dragged to change the size.</td>
    </tr>
    <tr>
      <td>`minWidth`</td>
      <td>Minimum width</td>
      <td>Default: `48`</td>
    </tr>
    <tr>
      <td>`minHeight`</td>
      <td>Minimum height</td>
      <td>Default: `48`</td>
    </tr>
    <tr>
      <td>`post`</td>
      <td>Submit the address</td>
      <td>Default: `null`</td>
      <td>When the cropped area is done, its data is passed as POST Request to be submitted to this address.</td>
    </tr>
    <tr>
      <td>`get`</td>
      <td>Submit the address</td>
      <td>Default: `null`</td>
      <td>When the cropped area is done, its data is passed as GET Request to be submitted to this address.</td>
    </tr>
  </tbody>
</table>

```js
// Use options
$("#imgCutter").imgCutter({
    fixedRatio: true
});
```

## Methods

### <span class="code">resetImage(img)</span>

This method can reset the image to be cut. `img` is for new image address.

### <span class="code">getData()</span>

Get the data of the image being cut. The data is an object, and its attributes are defined as follows:

<table class="table table-bordered table-condensed">
  <thead>
    <th>Attributes</th>
    <th>Sample value</th>
    <th>Description</th>
  </thead>
  <tbody>
    <tr>
      <th>`originWidth`</th>
      <td>`800`</td>
      <td>Original width</td>
    </tr>
    <tr>
      <th>`originHeight`</th>
      <td>`533`</td>
      <td>Original height</td>
    </tr>
    <tr>
      <th>`scaled`</th>
      <td>`false`</td>
      <td>Whether to scale the original image before cropping</td>
    </tr>
    <tr>
      <th>`scaleHeight`</th>
      <td>`533`</td>
      <td>The height of the original image after scaling</td>
    </tr>
    <tr>
      <th>`scaleWidth`</th>
      <td>`800`</td>
      <td>The width of the original image after scaling</td>
    </tr>
    <tr>
      <th>`width`</th>
      <td>`128`</td>
      <td>Cropped width</td>
    </tr>
    <tr>
      <th>`height`</th>
      <td>`128`</td>
      <td>Cropped height</td>
    </tr>
    <tr>
      <th>`left`</th>
      <td>`327`</td>
      <td>The distance from the cropping to the left</td>
    </tr>
    <tr>
      <th>`right`</th>
      <td>`455`</td>
      <td>The distance from the cropping to the right</td>
    </tr>
    <tr>
      <th>`top`</th>
      <td>`237`</td>
      <td>The distance from the cropping to the top</td>
    </tr>
    <tr>
      <th>`bottom`</th>
      <td>`365`</td>
      <td>The distance from the ceopping to the bottom</td>
    </tr>
  </tbody>
</table>

### Call methods

It requires to get a plugin instance before calling.

```js
// Get imgCutter instance
var myImgCutter = $('#imgCutter').data('zui.imgCutter');

// Call resetImg method
myImgCutter.resetImage('http://openzui.com/docs/img/img1.jpg');

// Call getData method
var myImgCutterData = myImgCutter.getData();
```

## Events

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Event</th>
      <th>jQuery event name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`ready`</td>
      <td>ready.zui.imgcutter</td>
      <td>This event is triggered after initialization.</td>
    </tr>
    <tr>
      <td>`change`</td>
      <td>change.zui.imgcutter</td>
      <td>Triggered when the user changes the selected area.</td>
    </tr>
    <tr>
      <td>`before`</td>
      <td>before.zui.imgcutter</td>
      <td>Triggered when the user confirms submitting the selected area. Return `false` in the event callback function to cancel submitting.</td>
    </tr>
    <tr>
      <td>`done`</td>
      <td>done.zui.imgcutter</td>
      <td>Triggered after the data is submitted to the server.</td>
    </tr>
    <tr>
      <td>`fail`</td>
      <td>fail.zui.imgcutter</td>
      <td>Triggered when submitting data to the server failed.</td>
    </tr>
    <tr>
      <td>`always`</td>
      <td>always.zui.imgcutter</td>
      <td>Triggered after the data is submitted to the server.</td>
    </tr>
  </tbody>
</table>

<link href="../dist/lib/bootbox/bootbox.min.css" rel="stylesheet">
<link rel="stylesheet" href="dist/lib/imgcutter/zui.imgcutter.css">
<script src="../dist/lib/imgcutter/zui.imgcutter.js"></script>
<script src="../dist/lib/bootbox/bootbox.min.js"></script>
<script>
function afterPageLoad() {
    var $imgCutterInfo = $('.img-cutter-info');
    $("#imgCutter").imgCutter({
        fixedRatio: true,
        before: function(e) {
            (window.bootbox || window).alert('<h3>Prepare submitted data</h3><table class="table table-bordered table-condensed"><thead><th>Attributes</th><th>Actual value</th><th>Description</th></thead><tbody><tr><th>originWidth</th><td>{originWidth}</td><td>Original image width</td></tr><tr><th>originHeight</th><td>{originHeight}</td><td>Original picture height</td></tr><tr><th>scaled</th><td>{scaled}</td><td>Whether to scale the original image before cropping</td></tr><tr><th>scaleHeight</th><td>{scaleHeight}</td><td>The height of the original image after scaling</td></tr><tr><th>scaleWidth</th><td>{scaleWidth}</td><td>The width of the original image after scaling</td></tr><tr><th>width</th><td>{width}</td><td>Cropped width</td></tr><tr><th>height</th><td>{height}</td><td>Cropped height</td></tr><tr><th>left</th><td>{left}</td><td>The distance from the clipping position to the left</td></tr><tr><th>right</th><td>{right}</td><td>The distance from the crop position to the right</td></tr><tr><th>top</th><td>{top}</td><td>The distance from the clipping position to the upper side</td></tr><tr><th>bottom</th><td>{bottom}</td><td>The distance from the clipping position to the bottom</td></tr></tbody></table>'.format(e));
        },
        change: function(e) {
            $imgCutterInfo.text("width：{width}px，height：{height}px，Above：{top}px，below：{bottom}px，left：{left}px，right：{right}px".format(e));
        }
    });
}
</script>
