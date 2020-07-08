section: basic
id: download
description: Download, CDN, source code
icon: icon-download
filter: xiazaiyushiyong xzysy
---

# Download and Install

ZUI(v{$version}) offer you both package and source code for a quick start.

## Download

<div class="row">
  <div class="col-sm-6">
    <h2>ZUI Package</h2>
    <p>Ready to use complied and minified CSS, JavaScript and font files (in the dist directory of source code files). Document and source code are not included. </p>
    <a href="docs/download/zui-{$version}-dist.zip" class="btn btn-lg btn-primary" target="_blank">Download ZUI</a> &nbsp;
    <a href="https://github.com/easysoft/zui/releases/download/v{$version}/zui-{$version}-dist.zip" class="" target="_blank">Download from  Github</a>
  </div>
  <div class="col-sm-6">
    <h2>ZUI Source</h2>
      <p>Complete project code, including source code files of Less, JavaScript, font, etc. You can use Gulp to customize your own project and a complete document is provided.</p>
      <a href="https://github.com/easysoft/zui/archive/v{$version}.zip" class="btn btn-lg" target="_blank">Download Source</a> &nbsp;
    </div>
  </div>
</div>

## Free CDN

### powered by <a href="https://cdnjs.com/libraries/zui" target="_blank">cdnjs</a>:

```html
<!-- ZUI Standard zipped CSS files -->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/zui/{$version}/css/zui.min.css">

<!-- ZUI Javascript depends on jQuery -->
<script src="//cdnjs.cloudflare.com/ajax/libs/zui/{$version}/lib/jquery/jquery.js"></script>
<!-- ZUI Standard zipped JavaScript files -->
<script src="//cdnjs.cloudflare.com/ajax/libs/zui/{$version}/js/zui.min.js"></script>
```

cdnjs uses `https:` or `http:` to access files in ZUI `dist` and supports all versions of ZUI. You can get the address to visit CDN following the format below:

```html
//cdnjs.cloudflare.com/ajax/libs/zui/version/distFilePathAndName
```

Refer to  <a href="https://cdnjs.com/libraries/zui" target="_blank">ZUI on cdnjs pages</a> for all files available.

### Powered by <a href="http://www.bootcdn.cn/" target="_blank">BootCDN</a>:

```html
<!-- ZUI Standard zipped CSS files -->
<link rel="stylesheet" href="//cdn.bootcss.com/zui/{$version}/css/zui.min.css">

<!-- ZUI Javascript depends on jQuery -->
<script src="//cdn.bootcss.com/zui/{$version}/lib/jquery/jquery.js"></script>
<!-- ZUI Standard zipped JavaScript files -->
<script src="//cdn.bootcss.com/zui/{$version}/js/zui.min.js"></script>
```

BootCDN uses `https:` or `http:` to access all files in ZUI `dist` and supports all versions of ZUI. You can get the address to visit CDN following the format below:

```html
//cdn.bootcss.com/zui/version/distFilePathAndName

```

Refer to <a href="http://www.bootcdn.cn/zui/" target="_blank">ZUI on BootCDN pages</a> for all available files.

## npm

Install ZUI with <a href="https://www.npmjs.com/package/zui">npm</a> packages.

```html
npm install zui
```

You cannot use JavaScript in ZUI via `require('zui')`. Refer files below in `node_modules/zui/` to use it:

```html
<!-- ZUI Standard zipped CSS files -->
<link rel="stylesheet" href="node_modules/zui/dist/css/zui.min.css">

<!-- ZUI Javascript depends on jQuery -->
<script src="node_modules/zui/dist/lib/jquery/jquery.js"></script>
<!-- ZUI Standard zipped JavaScript files -->
<script src="node_modules/zui/dist/js/zui.min.js"></script>
```

## Bower

Install ZUI via Bower.

```html
bower install zui
```
