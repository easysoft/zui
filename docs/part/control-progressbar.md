section: control
id: progressbar
description: 使用进度条
icon: %
filter: jindutiao jdt
---

# 进度条

<style>
.progress {margin-bottom: 0;}
</style>

提供工作或动作的实时反馈，只用简单且灵活的进度条。

进度条使用了CSS3的transition和animation属性来完成一些效果。这些特性在Internet Explorer 9或以下版本中、Firefox的老版本中没有被支持。Opera 12不支持animation属性。

## 基本类型

<table class="table">
  <tbody>
    <tr>
      <th width="40%">进度条</th>
      <th>描述</th>
    </tr>
    <tr>
      <td><div class="progress">

<div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only"><span class="progressbar-value">40</span>% Complete (success)</span></div>

</div>

**<span class="progressbar-value">40</span>%**</td>
      <td>
<pre><code>&lt;div class=&quot;progress&quot;&gt;
  &lt;div class=&quot;progress-bar&quot; role=&quot;progressbar&quot; aria-valuenow=&quot;40&quot; aria-valuemin=&quot;0&quot; aria-valuemax=&quot;100&quot; style=&quot;width: 40%&quot;&gt;
  &lt;span class=&quot;sr-only&quot;&gt;40% Complete (success)&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

默认的进度条。为`.progress-bar`应用CSS的width值（%）来更改进度值。</td>
    </tr>
  </tbody>
</table>

## 颜色主题

为了一致的样式，进度条颜色使用与按钮相同的类。

<table class="table">
  <tbody><tr>
    <th width="40%">进度条。</th>
    <th>描述</th>
  </tr>
  <tr>
    <td><div class="progress">

<div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only"><span class="progressbar-value">40</span>% Complete (success)</span></div>

</div>

**<span class="progressbar-value">40</span>%**</td>
    <td>主要/默认</td>
  </tr>
  <tr>
    <td><div class="progress">

<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only"><span class="progressbar-value">40</span>% Complete (success)</span></div>

</div>

**<span class="progressbar-value">40</span>%**</td>
    <td>`.progress-bar-info`</td>
  </tr>
  <tr>
    <td><div class="progress">

<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only"><span class="progressbar-value">40</span>% Complete (success)</span></div>

</div>

**<span class="progressbar-value">40</span>%**</td>
    <td>`.progress-bar-success`</td>
  </tr>
  <tr>
    <td><div class="progress">

<div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"><span class="sr-only"><span class="progressbar-value">60</span>% Complete (warning)</span></div>

</div>

**<span class="progressbar-value">40</span>%**</td>
    <td>`.progress-bar-warning`</td>
  </tr>
  <tr>
    <td><div class="progress">

<div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style="width: 80%"><span class="sr-only"><span class="progressbar-value">80</span>% Complete (danger)</span></div>

</div>

**<span class="progressbar-value">40</span>%**</td>
      <td>`.progress-bar-danger`</td>
    </tr>
  </tbody>
</table>

## 特殊效果

用一个渐变可以创建条纹效果，在IE8中不可用。

<table class="table">
  <tbody><tr>
    <th width="40%">进度条</th>
    <th>描述</th>
  </tr>
  <tr>
    <td><div class="progress progress-striped">

<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only"><span class="progressbar-value">40</span>% Complete (success)</span></div>

</div>

**<span class="progressbar-value">40</span>%**</td>
    <td>条纹效果：`.progress-striped`</td>
  </tr>
  <tr>
    <td><div class="progress progress-striped active">

<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%"><span class="sr-only"><span class="progressbar-value">45</span>% Complete</span></div>

</div>

**<span class="progressbar-value">40</span>%**</td>
    <td>动画效果。给`.progress-striped`加上`.active`使它由右向左运动。在IE的所有版本不可用。</td>
  </tr>
  <tr>
    <td><div class="progress">

<div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only"><span class="progressbar-value">35</span>% Complete (success)</span></div>

<div class="progress-bar progress-bar-warning" style="width: 20%"><span class="sr-only"><span class="progressbar-value">20</span>% Complete (warning)</span></div>

<div class="progress-bar progress-bar-danger" style="width: 10%"><span class="sr-only"><span class="progressbar-value">10</span>% Complete (danger)</span></div>

</div></td>
    <td>堆叠效果。把多个进度条放入同一个`.progress`，使它们堆叠。</td>
  </tr>
</tbody>
</table>

```
<!-- 条纹效果 -->
<div class="progress progress-striped">
  <div class="progress-bar" role="progressbar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
    <span class="sr-only">40% Complete (success)</span>
  </div>
</div>
```

```
<!-- 动画效果 -->
<div class="progress progress-striped active">
  <div class="progress-bar" role="progressbar progress-bar-success" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
    <span class="sr-only">40% Complete (success)</span>
  </div>
</div>
```

```
<!-- 堆叠效果 -->
<div class="progress">
  <div class="progress-bar progress-bar-success" style="width: 35%">
    <span class="sr-only">35% Complete (success)</span>
  </div>
  <div class="progress-bar progress-bar-warning" style="width: 20%">
    <span class="sr-only">20% Complete (warning)</span>
  </div>
  <div class="progress-bar progress-bar-danger" style="width: 10%">
    <span class="sr-only">10% Complete (danger)</span>
  </div>
</div>
```

<div class="alert">
  <h4>提示</h4>
  <p>本页面内的鼠标悬停在进度条上导致进度随机变化的动态效果仅仅作为演示，实际使用时你需要自己来设定或在适当实际更改要显示的进度。</p>
</div>

<script>
function afterPageLoad() {
    var changeProgressBar = function() {
        var $progressbar = $(this);
        var $bar = $progressbar.children('.progress-bar');
        console.log("change", $bar);
        if($bar.length === 1) {
            var val = Math.round(Math.random() *  100);
            $bar.css('width', val + '%').closest('tr').find('.progressbar-value').text(val);
        } else {
            var total = 100;
            $bar.each(function() {
                var val = Math.round(Math.random() *  Math.min(70, total));
                total -= val;
                $(this).css('width', val + '%').find('.progressbar-value').text(val);
            })
        }
    }
    $('#pageContent').on('mouseenter', '.progress', changeProgressBar);
}
</script>
