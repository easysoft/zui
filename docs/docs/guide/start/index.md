# 快速开始

## 下载使用

你可以从如下地址下载 ZUI 的最新版本：

<div class="vp-raw row gap-4">
  <a class="btn primary size-lg rounded-full" href="/zui/zui.latest.zip" download><i class="icon icon-download-alt icon-lg"></i> 点击下载</a>
  <a class="btn outline size-lg rounded-full" :href="`https://github.com/easysoft/zui/releases/tag/v${version}`" target="_blank"><i class="icon icon-github icon-lg"></i> 从 GitHub 下载</a>
</div>

下载后将如下文件解压到你的项目中：

```text
zui/
├── zui.css
├── zui.js
└── zui.esm.js
```

下载后在页面中导入：

```html {7,12}
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ZUI</title>
    <link rel="stylesheet" href="./zui/zui.css">
  </head>
  <body>
    <h1>ZUI is awesome!</h1>
    <a class="btn" href="/">访问 ZUI 网站</a>
    <script src="./zui/zui.js"></script>
  </body>
</html>
```

## 使用 CDN

使用 CDN 可以快速使用 ZUI，与下载使用基本一样，只需要将相关资源文件替换为 CDN 上的地址即可：

::: code-group

```html-vue [jsdelivr] {7,12}
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ZUI</title>
    <link rel="stylesheet" href="///cdn.jsdelivr.net/npm/zui/dist/{{version}}/zui.css">
  </head>
  <body>
    <h1>ZUI is awesome!</h1>
    <a class="btn" href="/">访问 ZUI 网站</a>
    <script src="///cdn.jsdelivr.net/npm/zui/dist/{{version}}/zui.js" crossorigin="anonymous"></script>
  </body>
</html>
```

```html-vue [bootcdn] {7,12}
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ZUI</title>
    <link rel="stylesheet" href="///cdn.bootcdn.net/ajax/libs/zui/{{version}}/zui.css">
  </head>
  <body>
    <h1>ZUI is awesome!</h1>
    <a class="btn" href="/">访问 ZUI 网站</a>
    <script src="///cdn.bootcdn.net/ajax/libs/zui/{{version}}/zui.js" crossorigin="anonymous"></script>
  </body>
</html>
```

```html-vue [unpkg] {7,12}
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ZUI</title>
    <link rel="stylesheet" href="///unpkg.com/zui@{{version}}/zui.css">
  </head>
  <body>
    <h1>ZUI is awesome!</h1>
    <a class="btn" href="/">访问 ZUI 网站</a>
    <script src="///unpkg.com/zui@{{version}}/zui.js" crossorigin="anonymous"></script>
  </body>
</html>
```

:::

## 使用 JS 组件

无论是下载还是使用 CDN，导入 `zui.js` 之后，你就可以使用 ZUI 中的 JS 组件了，ZUI 提供的所有 JS 辅助方法和组件类都在全局对象 `zui` 上进行访问，例如：

```html
<nav id="nav"></nav>

<script>
const {Nav} = zui;
const nav = new Nav('#myNav', {
  items: [
    {text: 'Home'},
    {text: 'Blog'},
  ]
});

zui.Messager.show('Hello!');
</script>
```

## 使用 ES Module

ZUI 还提供了 ES Module 版本，你可以在 JS 代码中导入：

```html
<script type="module">
import zui from './zui/zui.esm.js';

zui.Messager.show('Hello!');
</script>
```

## 使用 npm

你可以使用 npm 安装 ZUI：

```bash
$ npm install zui
```

然后在 JS 代码中导入：

```js
import zui from 'zui';
import 'zui/css';

zui.Messager.show('Hello!');
```

如果你仅仅需要 ZUI 中的单个组件，例如 [数据表格](/lib/dtable/dtable/)，你可以这样导入：

```js
import {DTable} from 'zui/lib/dtable';
import 'zui/lib/dtable/css';
```

<script setup>
const version = __ZUI_VERSION__;
</script>
