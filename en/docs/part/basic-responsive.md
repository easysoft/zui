section: basic
id: responsive
description: 多种屏幕尺寸响应
icon: icon-tablet
filter: xiangyingshibuju xysbj
---

# Responsive Design 

Web applications should support responsive design. The grid system has provided a good foundation for responsive designed pages, as well as helper classes to control how content is rendered on different devices.

## Screen

ZUI controls four types of screens separately. 

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Screen</th>
      <th>Name</th>
      <th>Size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>extra-small screen(cellphone) <span class="label label-primary visible-xs inline">your screen</span></td>
      <td>xs</td>
      <td>&lt;768px</td>
    </tr>
    <tr>
      <td>small screen (tablet) <span class="label label-primary visible-sm inline">your screen</span></td>
      <td>sm</td>
      <td>&gt;=768px</td>
    </tr>
    <tr>
      <td>mediium screen (laptop) <span class="label label-primary visible-md inline">your screen</span></td>
      <td>md</td>
      <td>&gt;=992px</td>
    </tr>
    <tr>
      <td>large screen (desktop) <span class="label label-primary visible-lg inline">your screen</span></td>
      <td>lg</td>
      <td>&gt;=1200px</td>
    </tr>
  </tbody>
</table>

Two helper classes are defined for each screen to hide or show the content on different devices.

<table class="table table-bordered">
  <thead>
    <tr>
      <th></th>
      <th>extra small screen</th>
      <th>small screen</th>
      <th>medium screen</th>
      <th>large screen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>.visible-xs</th>
      <td class="hl-success">show</td>
      <td class="text-muted">hide</td>
      <td class="text-muted">hide</td>
      <td class="text-muted">hide</td>
    </tr>
    <tr>
      <th>.visible-sm</th>
      <td class="text-muted">hide</td>
      <td class="hl-success">show</td>
      <td class="text-muted">hide</td>
      <td class="text-muted">hide</td>
    </tr>
    <tr>
      <th>.visible-md</th>
      <td class="text-muted">hide</td>
      <td class="text-muted">hide</td>
      <td class="hl-success">show</td>
      <td class="text-muted">hide</td>
    </tr>
    <tr>
      <th>.visible-lg</th>
      <td class="text-muted">hide</td>
      <td class="text-muted">hide</td>
      <td class="text-muted">hide</td>
      <td class="hl-success">show</td>
    </tr>
    <tr>
      <th>.hidden-xs</th>
      <td class="text-muted">hide</td>
      <td class="hl-success">show</td>
      <td class="hl-success">show</td>
      <td class="hl-success">hide</td>
    </tr>
    <tr>
      <th>.hidden-sm</th>
      <td class="hl-success">show</td>
      <td class="text-muted">hide</td>
      <td class="hl-success">show</td>
      <td class="hl-success">show</td>
    </tr>
    <tr>
      <th>.hidden-md</th>
      <td class="hl-success">show</td>
      <td class="hl-success">show</td>
      <td class="text-muted">hide</td>
      <td class="hl-success">hide</td>
    </tr>
    <tr>
      <th>.hidden-lg</th>
      <td class="hl-success">show</td>
      <td class="hl-success">show</td>
      <td class="hl-success">show</td>
      <td class="text-muted">hide</td>
    </tr>
  </tbody>
</table>

`.visible-xs`, `.visible-sm`, `.visible-md`, and `.visible-lg` can be a combination, and so do hide helper classes for different experience. However, do not mix show helper classes with hide helper classes.

ZUI provides an helper class to show or hide a printer. Show and hide cannot be used at the same time.

*   `.visible-print`: show the printer when printing and hide it when the browser is working.
*   `.hidden-print`: show the printer when the browser is working and hide it when printing.

`.visible-*`  sets CSS `display` as `block`(excluding `<tr>`、`<td>`、`<th>`) by default. If `display` is set as `inline` or `inline-block`, use `.visible-*` along with `.inline` or `.inline-block`.

When a page is loaded or the width of a window changes, `<html>`  will automatically add the helper classes below tofit for different screens (ZUI JavaScript is required):

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Screen Size</th>
      <th><code>html</code> helper class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Screen Width&lt;768px</td>
      <td><code>.screen-phone</code></td>
    </tr>
    <tr>
      <td>768px&lt;=Screen Width&lt;992px</td>
      <td><code>.screen-tablet</code></td>
    </tr>
    <tr>
      <td>992px&lt;=Screen Width&lt;1200px</td>
      <td><code>.screen-desktop</code></td>
    </tr>
    <tr>
      <td>Screen Width&gt;=1200px</td>
      <td><code>.screen-desktop-wide</code></td>
    </tr>
    <tr>
      <td>Screen Width&gt;=992px</td>
      <td><code>.device-desktop</code></td>
    </tr>
    <tr>
      <td>Screen Width&lt;992px</td>
      <td><code>.device-mobile</code></td>
    </tr>
  </tbody>
</table>

## Devices and OS

For different operating systems, `<html>` will be automatically added with helper classes below to adjust styles for different systems (ZUI JavaScript is required), when loading a page.

<table class="table table-bordered">
  <thead>
    <tr>
      <th>OS and Functions</th>
      <th><code>html</code> helper class</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td><code>.os-windows</code></td>
    </tr>
    <tr>
      <td>Mac</td>
      <td><code>.os-mac</code></td>
    </tr>
    <tr>
      <td>Android</td>
      <td><code>.os-android</code></td>
    </tr>
    <tr>
      <td>iOS</td>
      <td><code>.os-ios</code></td>
    </tr>
    <tr>
      <td>Linux</td>
      <td><code>.os-linux</code></td>
    </tr>
    <tr>
      <td>Unix</td>
      <td><code>.os-unix</code></td>
    </tr>
    <tr>
      <td>touch screen</td>
      <td><code>.is-touchable</code></td>
    </tr>
  </tbody>
</table>


## Disable Responsive Design

Responsive design is not always a must.

Responsive design in ZUI is global, and by default most components enable responsive design if necessary. If you want to disable it, refer to the followings:

*   Remove `<meta name="viewport" content="width=device-width, initial-scale=1">` and disbale visial viewpoint on mobile deveices.
*   Do not use responsive tools, e.g. `.visible-xs`, `.visible-sm`, `.visible-md`, `.visible-lg` etc.
*   Do not use `.col-sm-*`, `.col-md-*`, or `.col-lg-*` in your grid system. Use code>.col-xs-*.
*   Use fixed-width containers(`.container-fixed`, `.container-fixed-md`, `.container-fixed-sm`, `.container-fixed-xs`) instead of responsive containers(`.container`).
*   Do not use responsive components. Use non-responsie ones, e.g. use (`.nav`) instead of (`.navbar`).

<div class="alert alert-info"> Although ZUI provides a solution to non-responsive design, try to use responsive designs. It does not take much extra code or work to implement a responsive design which offers the basis for cross-screening.</div>
