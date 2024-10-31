# 快速上手

## 下载使用

你可以从如下地址下载 ZUI 的最新版本：

<div class="gap-4 vp-raw row">
  <a class="rounded-full btn primary size-lg" :href="withBase(`/zui-${zui.version}.zip`)" download><i class="icon icon-download-alt icon-lg"></i> 点击下载</a>
  <a class="rounded-full btn outline size-lg" :href="`https://github.com/easysoft/zui/releases/tag/v${zui.version}`" target="_blank"><i class="icon icon-github icon-lg"></i> 从 GitHub 下载</a>
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
    <link rel="stylesheet" href="///cdn.jsdelivr.net/npm/zui/dist/{{zui.version}}/zui.css">
  </head>
  <body>
    <h1>ZUI is awesome!</h1>
    <a class="btn" href="/">访问 ZUI 网站</a>
    <script src="///cdn.jsdelivr.net/npm/zui/dist/{{zui.version}}/zui.js" crossorigin="anonymous"></script>
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
    <link rel="stylesheet" href="///cdn.bootcdn.net/ajax/libs/zui/{{zui.version}}/zui.css">
  </head>
  <body>
    <h1>ZUI is awesome!</h1>
    <a class="btn" href="/">访问 ZUI 网站</a>
    <script src="///cdn.bootcdn.net/ajax/libs/zui/{{zui.version}}/zui.js" crossorigin="anonymous"></script>
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
    <link rel="stylesheet" href="///unpkg.com/zui@{{zui.version}}/zui.css">
  </head>
  <body>
    <h1>ZUI is awesome!</h1>
    <a class="btn" href="/">访问 ZUI 网站</a>
    <script src="///unpkg.com/zui@{{zui.version}}/zui.js" crossorigin="anonymous"></script>
  </body>
</html>
```

:::

## 使用 JS 组件

无论是下载还是使用 CDN，导入 `zui.js` 之后，你就可以使用 ZUI 中的 JS 组件了，ZUI 提供的所有 JS 辅助方法和组件类都在全局对象 `zui` 上进行访问，例如：

```html [全局对象]
<nav id="myNav"></nav>

<script>
const {Nav, Messager} = zui;

const nav = new Nav('#myNav', {
  items: [
    {text: 'Home'},
    {text: 'Blog'},
  ]
});

Messager.show('你好，今天是：' + zui.formatDate(new Date(), 'yyyy年M月d日'));
</script>
```

## 使用 ES Module

ZUI 还提供了 ES Module 版本，上例中的 JS 代码可以改为：

```html
<nav id="myNav"></nav>

<script>
import {Nav, Messager, formatDate} from './zui/zui.esm.js';

const nav = new Nav('#myNav', {
  items: [
    {text: 'Home'},
    {text: 'Blog'},
  ]
});

Messager.show('你好，今天是：' + formatDate(new Date(), 'yyyy年M月d日'));
</script>
```

## 使用 `zui-create` 声明组件

在 ZUI 中，所有 JS 组件支持通过声明 `zui-create` 属性来自动创建，例如：

::: tabs

== 示例

<Example>
  <div zui-create="datePicker"></div>
</Example>

== HTML

```html
<div zui-create="datePicker"></div>
```

:::

使用 `zui-create-<component>` 来定义组件选项，例如：

::: tabs

== 示例

<Example>
  <div zui-create zui-create-list="{items: [{text: 'item1'}, {text: 'item2'}], onClickItem: (e) => console.log('You clicked', e)}"></div>
</Example>

== HTML

```html
<div zui-create zui-create-list="
  {
    items: [{text: 'item1'}, {text: 'item2'}],
    onClickItem: (e) => console.log('You clicked', e)
  }
"></div>
```

:::

::: warning 注意
通过 `zui-create` 创建的组件，只会在页面加载完成后自动扫描一次，如果需要在动态添加的元素上利用 `zui-create` 创建组件，需要手动执行 `$(element).zuiInit()` 初始化。
:::

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

const myTable = new DTable('#myTable', {...});
```

<script setup>
import {withBase} from 'vitepress';
</script>
