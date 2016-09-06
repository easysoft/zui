section: javascript
id: imgcutter
description: 裁剪图片
icon: icon-crop
filter: tupianjianqie tpjq cj caijian
---

# 图片剪切

<style>
.img-cutter-info {margin-bottom: 10px}
</style>

通过本插件允许用户通过拖拽区域边框来选定裁剪区域。

<div class="alert alert-warning">
  <h4>提示</h4>
  <p>为兼容更多的浏览器，此插件实际并不会对图片进行剪裁操作。当确定裁剪区域后，你需要将剪裁区域数据上传到服务器，让服务器进行图片裁剪操作。</p>
  <p>你仍然可以通过监听<code>before</code>事件来自行处理确定裁剪区域后的操作，包括在本地对图片进行剪裁。</p>
</div>

<div class="alert alert-danger">
  <h4>兼容性问题</h4>
  <ul>
    <li>在 IE8-9 上有兼容性问题；</li>
    <li>在触摸屏上无法进行拖拽功能；</li>
    <li>在小屏幕上无法获得最佳体验。</li>
  </ul>
</div>

## 综合示例

<div class="example">
  <div class="img-cutter" id="imgCutter">
    <div class="canvas"><img src="docs/img/slide1.jpg" alt=""></div>
    <div class="actions">
      <h5>拖拽来剪切图片</h5>
      <div class="img-cutter-info small"></div>
      <button type="button" class="btn btn-primary img-cutter-submit">确认</button>
    </div>
  </div>
</div>

```
<!-- HTML结构 -->
<div class="img-cutter" id="imgCutter">
  <div class="canvas"><img src="image.jpg" alt=""></div>
  <div class="actions">
    <h5>拖拽来剪切图片</h5>
    <button type="button" class="btn btn-primary img-cutter-submit">确认</button>
  </div>
</div>
```

```
// 通过Javascript初始化
$('#imgCutter').imgCutter(options);
```

## 选项

<table class="table table-bordered">
  <thead>
    <tr>
      <th>参数</th>
      <th>名称</th>
      <th>可选值</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`coverColor`</td>
      <td>遮罩层颜色</td>
      <td>表示颜色的字符串，默认为`"#000"`</td>
      <td></td>
    </tr>
    <tr>
      <td>`coverOpacity`</td>
      <td>遮罩层透明度</td>
      <td>小于1的数字，默认为`0.6`</td>
      <td></td> 
    </tr>
    <tr>
      <td>`defaultWidth`</td>
      <td>默认图片宽度</td>
      <td>默认为`128`</td>
    </tr>
    <tr>
      <td>`defaultHeight`</td>
      <td>默认图片高度</td>
      <td>默认为`128`</td>
    </tr>
    <tr>
      <td>`fixedRatio`</td>
      <td>启用固定尺寸比例</td>
      <td>`false`（默认）|`true`</td>
      <td>如果启用固定尺寸比例，则用户在拖拽更改尺寸时会已初始比例进行同步缩放</td>
    </tr>
    <tr>
      <td>`minWidth`</td>
      <td>最小宽度</td>
      <td>默认为`48`</td>
    </tr>
    <tr>
      <td>`minHeight`</td>
      <td>最小高度</td>
      <td>默认为`48`</td>
    </tr>
    <tr>
      <td>`post`</td>
      <td>提交地址</td>
      <td>默认为`null`</td>
      <td>当用户确认裁剪尺寸区域后会将尺寸区域数据通过POST请求提交到此地址</td>
    </tr>
    <tr>
      <td>`get`</td>
      <td>提交地址</td>
      <td>默认为`null`</td>
      <td>当用户确认裁剪尺寸区域后会将尺寸区域数据通过GET请求提交到此地址</td>
    </tr>
  </tbody>
</table>

```
// 使用选项
$("#imgCutter").imgCutter({
    fixedRatio: true
});
```

## 方法

### <span class="code">resetImage(img)</span>

该方法可以重新设置要剪切的图片。其中参数 `img` 为新的图片地址。

### <span class="code">getData()</span>

获取当前图片剪切数据。该数据为一个对象，其属性定义如下：

<table class="table table-bordered table-condensed">
  <thead>
    <th>属性</th>
    <th>示例值</th>
    <th>说明</th>
  </thead>
  <tbody>
    <tr>
      <th>`originWidth`</th>
      <td>`800`</td>
      <td>原始图片宽度</td>
    </tr>
    <tr>
      <th>`originHeight`</th>
      <td>`533`</td>
      <td>原始图片高度</td>
    </tr>
    <tr>
      <th>`scaled`</th>
      <td>`false`</td>
      <td>裁剪之前是否对原始图片进行了缩放</td>
    </tr>
    <tr>
      <th>`scaleHeight`</th>
      <td>`533`</td>
      <td>原始图片缩放后的高度</td>
    </tr>
    <tr>
      <th>`scaleWidth`</th>
      <td>`800`</td>
      <td>原始图片缩放后的宽度</td>
    </tr>
    <tr>
      <th>`width`</th>
      <td>`128`</td>
      <td>裁剪后的宽度</td>
    </tr>
    <tr>
      <th>`height`</th>
      <td>`128`</td>
      <td>裁剪后的高度</td>
    </tr>
    <tr>
      <th>`left`</th>
      <td>`327`</td>
      <td>裁剪位置距离左侧的距离</td>
    </tr>
    <tr>
      <th>`right`</th>
      <td>`455`</td>
      <td>裁剪位置距离右侧的距离</td>
    </tr>
    <tr>
      <th>`top`</th>
      <td>`237`</td>
      <td>裁剪位置距离上边的距离</td>
    </tr>
    <tr>
      <th>`bottom`</th>
      <td>`365`</td>
      <td>裁剪位置距离下边的距离</td>
    </tr>
  </tbody>
</table>

### 调用方法

调用方法需要先获取插件实例。

```javascript
// 获取 imgCutter 实例
var myImgCutter = $('#imgCutter').data('zui.imgCutter');

// 调用 resetImg 方法
myImgCutter.resetImage('http://zui.sexy/docs/img/img1.jpg');

// 调用 getData 方法
var myImgCutterData = myImgCutter.getData();
```

## 事件

<table class="table table-bordered">
  <thead>
    <tr>
      <th>事件</th>
      <th>jquery事件名称</th>
      <th>说明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`ready`</td>
      <td>ready.zui.imgcutter</td>
      <td>当初始化之后时触发此事件</td>
    </tr>
    <tr>
      <td>`change`</td>
      <td>change.zui.imgcutter</td>
      <td>当用户更改所选择的区域时触发</td>
    </tr>
    <tr>
      <td>`before`</td>
      <td>before.zui.imgcutter</td>
      <td>当用户确认提交所选择的区域时触发，在该事件回调函数中返回`false`可以取消此次提交</td>
    </tr>
    <tr>
      <td>`done`</td>
      <td>done.zui.imgcutter</td>
      <td>当提交数据到服务器成功后触发</td>
    </tr>
    <tr>
      <td>`fail`</td>
      <td>fail.zui.imgcutter</td>
      <td>当提交数据到服务器失败后触发</td>
    </tr>
    <tr>
      <td>`always`</td>
      <td>always.zui.imgcutter</td>
      <td>当提交数据到服务器完成后触发</td>
    </tr>
  </tbody>
</table>

<script src="../../dist/lib/imgcutter/zui.imgcutter.js"></script>
<link rel="stylesheet" href="../../dist/lib/imgcutter/zui.imgcutter.css">
<script>
function afterPageLoad() {
    var $imgCutterInfo = $('.img-cutter-info');
    $("#imgCutter").imgCutter({
        fixedRatio: true, 
        before: function(e) {
            console.log(e);
            window.bootbox.alert('<h3>准备提交的数据</h3><table class="table table-bordered table-condensed"><thead><th>属性</th><th>实际值</th><th>说明</th></thead><tbody><tr><th>originWidth</th><td>{originWidth}</td><td>原始图片宽度</td></tr><tr><th>originHeight</th><td>{originHeight}</td><td>原始图片高度</td></tr><tr><th>scaled</th><td>{scaled}</td><td>裁剪之前是否对原始图片进行了缩放</td></tr><tr><th>scaleHeight</th><td>{scaleHeight}</td><td>原始图片缩放后的高度</td></tr><tr><th>scaleWidth</th><td>{scaleWidth}</td><td>原始图片缩放后的宽度</td></tr><tr><th>width</th><td>{width}</td><td>裁剪后的宽度</td></tr><tr><th>height</th><td>{height}</td><td>裁剪后的高度</td></tr><tr><th>left</th><td>{left}</td><td>裁剪位置距离左侧的距离</td></tr><tr><th>right</th><td>{right}</td><td>裁剪位置距离右侧的距离</td></tr><tr><th>top</th><td>{top}</td><td>裁剪位置距离上边的距离</td></tr><tr><th>bottom</th><td>{bottom}</td><td>裁剪位置距离下边的距离</td></tr></tbody></table>'.format(e));
        },
        change: function(e) {
            $imgCutterInfo.text("宽度：{width}px，高度：{height}px，上边：{top}px，下边：{bottom}px，左边：{left}px，右边：{right}px".format(e));
        }
    });
}
</script>
