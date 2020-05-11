section: control
id: progressbar
description: 使用进度条
icon: %
filter: jindutiao jdt
---

# Progress Bar

<style>
.progress {margin-bottom: 0;}
</style>

Progress bar is easy and flexible to provide real-time feedback on work or actions.

Progress bar use transition and animation property of CSS3. These attributes are not supported in Internet Explorer 9 and down, or older version Firefox. Opera 12 does not support animation property.

## Types

<table class="table">
  <tbody>
    <tr>
      <th width="40%">Progress Bar</th>
      <th>Description</th>
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

Default. Change the width of `.progress-bar` to change its value.</td>
    </tr>
  </tbody>
</table>

## Colors

The color of progress bars and button color are the same for a consistent style.

<table class="table">
  <tbody><tr>
    <th width="40%">Progress Bar</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><div class="progress">

<div class="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only"><span class="progressbar-value">40</span>% Complete (success)</span></div>

</div>

**<span class="progressbar-value">40</span>%**</td>
    <td>Primary/Default</td>
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

## Effects

A gradient can be used to create a stripe. It is not available in IE 8.

<table class="table">
  <tbody><tr>
    <th width="40%">Progress</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><div class="progress progress-striped">

<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%"><span class="sr-only"><span class="progressbar-value">40</span>% Complete (success)</span></div>

</div>

**<span class="progressbar-value">40</span>%**</td>
    <td>Stripe: `.progress-striped`</td>
  </tr>
  <tr>
    <td><div class="progress progress-striped active">

<div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 45%"><span class="sr-only"><span class="progressbar-value">45</span>% Complete</span></div>

</div>

**<span class="progressbar-value">40</span>%**</td>
    <td>Animation: add `.active` to `.progress-striped` to make it move from the right to the left. Not available in IE browsers.</td>
  </tr>
  <tr>
    <td><div class="progress">

<div class="progress-bar progress-bar-success" style="width: 35%"><span class="sr-only"><span class="progressbar-value">35</span>% Complete (success)</span></div>

<div class="progress-bar progress-bar-warning" style="width: 20%"><span class="sr-only"><span class="progressbar-value">20</span>% Complete (warning)</span></div>

<div class="progress-bar progress-bar-danger" style="width: 10%"><span class="sr-only"><span class="progressbar-value">10</span>% Complete (danger)</span></div>

</div></td>
    <td>Stacked. Put several progress bars into a `.progress` and stack them.</td>
  </tr>
</tbody>
</table>

```html
<!-- Stripe -->
<div class="progress progress-striped">
  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
    <span class="sr-only">40% Complete (success)</span>
  </div>
</div>
```

```html
<!-- Animation -->
<div class="progress progress-striped active">
  <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
    <span class="sr-only">40% Complete (success)</span>
  </div>
</div>
```

```html
<!-- Stacked -->
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
  <h4>Note</h4>
  <p>The changes of the progress when the mouse hovering on the progress on this page is only a demonstration. You should set it or make the progress displayed according to your requirement.</p>
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
