section: basic
id: download
description: 下载、CDN、获取源码
icon: icon-download
filter: xiazaiyushiyong xzysy
---

# 下载与使用

ZUI（当前版本 v{version}） 提供了多种方式让你快速上手。你可以根据自己的需要选择合适的使用方式。

## 下载

<div class="row">
  <div class="col-sm-6">
    <h2>ZUI 生产包</h2>
    <p>包含编译及压缩后用于生产环境的 CSS、JavaScript 和字体文件（这些文件在源码包的 `dist` 目录下提供）。不包括文档和源码。</p>
    <a href="docs/download/zui-{version}-dist.zip" class="btn btn-lg btn-primary" target="_blank">下载 ZUI</a> &nbsp;
    <a href="https://github.com/easysoft/zui/releases/download/v{version}/zui-{version}-dist.zip" class="" target="_blank">从 Github 下载</a>
  </div>
  <div class="col-sm-6">
    <h2>ZUI 源码</h2>
      <p>ZUI 的完整项目代码，包括 Less、JavaScript 和字体等源码文件，你还可以使用内置 gulp 任务来定制自己的版本，另外还有完整的文档。</p>
      <a href="https://github.com/easysoft/zui/archive/v{version}.zip" class="btn btn-lg" target="_blank">下载源码</a> &nbsp;
    </div>
  </div>
</div>

## 使用免费 CDN

### 由 <a href="https://cdnjs.com/libraries/zui" target="_blank">cdnjs</a> 提供：

```html
<!-- ZUI 标准版压缩后的 CSS 文件 -->
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/zui/{version}/css/zui.min.css">

<!-- ZUI Javascript 依赖 jQuery -->
<script src="//cdnjs.cloudflare.com/ajax/libs/zui/{version}/lib/jquery/jquery.js"></script>
<!-- ZUI 标准版压缩后的 JavaScript 文件 -->
<script src="//cdnjs.cloudflare.com/ajax/libs/zui/{version}/js/zui.min.js"></script>
```

cdnjs 支持使用 `https:` 或 `http:` 协议访问 ZUI `dist` 目录下的所有文件，并且支持 ZUI 最新版本及所有历史版本，你可以按照如下格式获得 cdn 访问地址：

```html
//cdnjs.cloudflare.com/ajax/libs/zui/版本号/dist目录下的文件路径及名称
```

所有可用文件请参考 <a href="https://cdnjs.com/libraries/zui" target="_blank">ZUI 在 cdnjs 上的页面</a>。

### 由国内 <a href="http://www.bootcdn.cn/" target="_blank">BootCDN</a> 提供：

```html
<!-- ZUI 标准版压缩后的 CSS 文件 -->
<link rel="stylesheet" href="//cdn.bootcdn.net/ajax/libs/zui/{version}/css/zui.min.css">

<!-- ZUI Javascript 依赖 jQuery -->
<script src="//cdn.bootcdn.net/ajax/libs/zui/{version}/lib/jquery/jquery.js"></script>
<!-- ZUI 标准版压缩后的 JavaScript 文件 -->
<script src="//cdn.bootcdn.net/ajax/libs/zui/{version}/js/zui.min.js"></script>
```

BootCDN 支持使用 `https:` 或 `http:` 协议访问 ZUI `dist` 目录下的所有文件，并且支持 ZUI 最新版本及所有历史版本，你可以按照如下格式获得 cdn 访问地址：

```html
//cdn.bootcdn.net/ajax/libs/zui/版本号/dist目录下的文件路径及名称
```

所有可用文件请参考 <a href="https://www.bootcdn.cn/zui/" target="_blank">ZUI 在 BootCDN 上的页面</a>。

## 通过 npm 安装

通过 <a href="https://www.npmjs.com/package/zui">npm</a> 获取 ZUI 的生产文件及完整源码。

```html
npm install zui
```

目前你并不能通过 `require('zui')` 来使用 ZUI 的 JavaScript 文件。你需要在页面中手动引用 `node_modules/zui/` 目录下的文件：

```html
<!-- ZUI 标准版压缩后的 CSS 文件 -->
<link rel="stylesheet" href="node_modules/zui/dist/css/zui.min.css">

<!-- ZUI Javascript 依赖 jQuery -->
<script src="node_modules/zui/dist/lib/jquery/jquery.js"></script>
<!-- ZUI 标准版压缩后的 JavaScript 文件 -->
<script src="node_modules/zui/dist/js/zui.min.js"></script>
```

## 通过 Bower 安装

通过 Bower 获取 ZUI 的生产文件及完整源码。

```html
bower install zui
```
