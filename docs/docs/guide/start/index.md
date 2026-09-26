# 快速上手

加载 ZUI 的 CSS 和 JavaScript，即可使用原生 HTML 样式与 JS 组件。下面从可直接保存为 index.html 的页面开始。

## 下载使用

下载本站当前构建，将压缩包的全部内容放入项目的 zui 目录，保留图标字体等配套资源的相对位置。

<a class="btn primary" :href="withBase(`/zui-${zui.version}.zip`)" download>下载本站构建</a>

```text
项目/
├── index.html
└── zui/
    ├── zui.css
    ├── zui.js
    ├── zui.esm.js
    └── 其他配套资源
```

通过项目的 HTTP 开发服务器访问页面。尤其是 ESM 示例，请勿直接以 file:// 打开。

<div data-doc-example="start-download">

```html
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ZUI 入门</title>
    <link rel="stylesheet" href="./zui/zui.css">
</head>
<body>
    <button id="hello" type="button" class="btn primary">显示消息</button>
    <script src="./zui/zui.js"></script>
    <script>
    document.querySelector('#hello').addEventListener('click', () => zui.Messager.show('你好，ZUI！'));
    </script>
</body>
</html>
```

</div>

## 使用 JS 组件

加载 zui.js 后，通过全局对象 zui 使用组件。下面是完整的导航示例。

<div data-doc-example="start-global">

::: tabs

== 示例

<Example><ZUI id="startNav" use="nav" :options="{items: [{text: '首页'}, {text: '文档'}]}" /></Example>

== HTML

```html
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ZUI 入门</title>
    <link rel="stylesheet" href="./zui/zui.css">
</head>
<body>
    <nav id="startNav"></nav>
    <script src="./zui/zui.js"></script>
    <script>
    const nav = new zui.Nav('#startNav', {items: [{text: '首页'}, {text: '文档'}]});
    </script>
</body>
</html>
```

:::

</div>

## 使用 ES Module

使用命名导入，并在 script 上声明 type="module"。此方式直接加载 zui.esm.js，无需再加载 zui.js。

<div data-doc-example="start-esm">

```html
<!doctype html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ZUI 入门</title>
    <link rel="stylesheet" href="./zui/zui.css">
</head>
<body>
    <nav id="moduleNav"></nav>
    <script type="module">
    import {Nav} from './zui/zui.esm.js';
    const nav = new Nav('#moduleNav', {items: [{text: '首页'}, {text: '文档'}]});
    </script>
</body>
</html>
```

</div>

## 使用 zui-create 声明组件

以下片段以 zui.js 和 zui.css 已加载为前提。页面加载完成时会自动扫描 zui-create；动态添加内容后，需要调用 zui.$(container).zuiInit()。

<div data-doc-example="start-declarative">

::: tabs

== 示例

<Example>
  <div zui-create="datePicker" data-placeholder="选择日期"></div>
</Example>

== HTML

```html
<div zui-create="datePicker" data-placeholder="选择日期"></div>
```

:::

</div>

需要复杂选项时，可以使用 zui-create-组件名：

<div data-doc-example="start-options">

::: tabs

== 示例

<Example>
  <div zui-create zui-create-list="{items: [{text: '设计'}, {text: '开发'}]}"></div>
</Example>

== HTML

```html
<div zui-create zui-create-list="{items: [{text: '设计'}, {text: '开发'}]}"></div>
```

:::

</div>

## 使用 CDN

CDN 使用 npm 上已发布的固定版本。将下载示例中的 CSS、UMD 脚本地址替换为以下地址即可；每行均为完整 URL：

| 资源 | jsDelivr | unpkg |
| --- | --- | --- |
| CSS | https://cdn.jsdelivr.net/npm/zui@3.0.0/dist/zui.css | https://unpkg.com/zui@3.0.0/dist/zui.css |
| UMD | https://cdn.jsdelivr.net/npm/zui@3.0.0/dist/zui.js | https://unpkg.com/zui@3.0.0/dist/zui.js |
| ESM | https://cdn.jsdelivr.net/npm/zui@3.0.0/dist/zui.esm.js | https://unpkg.com/zui@3.0.0/dist/zui.esm.js |

本站下载构建可能包含尚未发布到 npm 的修复和组件；体验本站示例时优先使用本站下载包。不要混用不同版本的 JS、CSS 和图标资源。

## 使用 npm

在支持 ESM 和 CSS 导入的构建工具项目中安装：

```sh
npm install zui@3.0.0
```

在页面准备好 `<nav id="npmNav"></nav>` 后，在入口模块中使用公开入口：

```js
import {Nav} from 'zui';
import 'zui/css';

const nav = new Nav('#npmNav', {items: [{text: '首页'}, {text: '文档'}]});
```

zui 是发布包；@zui/* 是源码工作区的库名，不作为上述 npm 安装方式的独立发布包使用。选择所需组件组合见[定制打包](/guide/customize/build.html)。

## 更新、销毁与框架接入

保存构造器返回的实例，通过 `instance.render(options)` 更新支持该方法的组件；容器卸载前调用 `instance.destroy()`。具体选项、事件和方法以组件页为准。

继续阅读[组件基类](/lib/basic/core/component.html)、[在 React 中使用 ZUI vanilla 组件](/lib/basic/core/use-zui-in-react.html)和[兼容性](/guide/start/compatibility.html)。

<script setup>
import {withBase} from 'vitepress';
</script>
