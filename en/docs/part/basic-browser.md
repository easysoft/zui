section: basic
id: browser
description: All supported browsers
icon: icon-ie
filter: shouzhichidipingtai szcdpt
---

# Browsers

## Supported Browsers

### Desktop

*   IE 8+
*   Opera 12+
*   Firefox 8+
*   Safari 6+
*   Chrome 20+

### Mobile

*   IOS 6+ Safari
*   Chrome for Android 4+
*   Chrome for iOS
*   Windows 10 Mobile Edage

<div class="alert alert-warning-inverse">
  <p>The best experience is available in the latest browsers, but some features, e.g. rounded or shadows, in ZUI are not available in older versions, e.g. IE 8.</p>
</div>

## Validators

Validators are for detecting IE 6~IE 9, and do not detect IE 9+ or Microsoft Edge.

### Auxiliary Classes for IE Browsers

ZUI has IE validators built in and added auxiliary classes for `<body>` to make it easier for developers to deal with the compatibility issues of IE browsers.

Definition of auxiliary classes are:

<table class="table table-bordered">
  <thead>
    <tr>
      <th>Class</th>
      <th>IE version</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`.support-ie`</td>
      <td>IE&gt;=8</td>
      <td>This version is supported by ZUI.</td>
    </tr>
    <tr>
      <td>`.outdated-ie`</td>
      <td>IE&gt;=8</td>
      <td>This version is not supported by ZUI.</td>
    </tr>
    <tr>
      <td>`.ie-α`</td>
      <td>IE=α</td>
      <td>If the IE version is 8, then`.ie-8`</td>
    </tr>
    <tr>
      <td>`.gt-ie-α`</td>
      <td>IE&lt;α</td>
      <td>`.gt-ie-7` means the IE version > 7, which is >= 8.</td>
    </tr>
    <tr>
      <td>`.gte-ie-α`</td>
      <td>IE&gt;=α</td>
      <td>`.gte-ie-8` means the IE version >= 8.</td>
    </tr>
    <tr>
      <td>`.lt-ie-α`</td>
      <td>IE&lt;α</td>
      <td>`.lt-ie-8` means the IE version < 8.</td>
    </tr>
    <tr>
      <td>`.lte-ie-α`</td>
      <td>IE&lt;=α</td>
      <td>`.lte-ie-7` means the IE version =< 7.</td>
    </tr>
  </tbody>
</table>

### JavaScript Validators

`$.zui.browser` is provided in ZUI for detecting IE veresions. Its method and properties are:

<table class="table table-bordered">
  <tbody>
    <tr>
      <td>`$.zui.browser.ie`</td>
      <td>Get the value of IE version</td>
    </tr>
    <tr>
      <td>`$.zui.browser.isIE(version)`</td>
      <td>Validate whether the IE version is a specified one. If yes, return `true`, else `false`. The values of the version is selectable. If blank, return `true`, which means it is any version of IE.</td>
    </tr>
  </tbody>
</table>

### Low Version Tip

When a user uses an older version that is not supported by ZUI, the page may not display as expected. It is recommended to prompt a tip for the user to update its browser.

ZUI provides `$.zui.browser.tip()` to display a tip at the top of the page to guide users to visit [browsehappy.com](http://browsehappy.com/) to download a better browse. This method can set customized texts.

<div class="example">
  <button type="button" class="btn btn-primary show-low-version-tip">Display a tip</button>
  <button type="button" class="btn show-low-version-tip" data-content="Oops..Your version is too low. Update now!">Customize the tip</button>
</div>

```js
// Display a tip
$.zui.browser.tip();

// Display a customized tip
$.zui.browser.tip('Oops..Your version is too low. Update now!');
```

<div class="alert alert-primary-inverse">
  <h5>Tips</h5>
  <p>IE 7 and down will display the tip automatically, so usually you do not have to call this method.</p>
</div>

<script>
function afterPageLoad() {
    $('.show-low-version-tip').click(function(){
      $.zui.browser.tip($(this).data('content'));
    });
}
</script>
