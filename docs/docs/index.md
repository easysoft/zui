---
layout: home
markdownStyles: false
pageClass: zui-home-page
title: 回归 HTML，声明即界面
description: 无需编译，无需搭建脚手架。引入 ZUI，直接书写 HTML，就能组合布局、表单、数据表格与丰富的交互组件。
head:
  - - meta
    - property: og:title
      content: ZUI 3 · 回归 HTML，声明即界面
  - - meta
    - property: og:description
      content: 无需编译，无需搭建脚手架。引入 ZUI，直接书写 HTML，就能组合布局、表单、数据表格与丰富的交互组件。
  - - meta
    - property: og:type
      content: website
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:title
      content: ZUI 3 · 回归 HTML，声明即界面
  - - meta
    - name: twitter:description
      content: 无需编译，无需搭建脚手架。引入 ZUI，直接书写 HTML，就能组合布局、表单、数据表格与丰富的交互组件。
---

<script setup>
import HomeLanding from './.vitepress/theme/components/home-landing.vue';
import HomeCode from './.vitepress/theme/components/home-code.vue';
</script>

<HomeLanding>
<template #demo-code>
<HomeCode label="代码">

```html
<link rel="stylesheet" href="./zui/zui.css">
<script src="./zui/zui.js"></script>

<button class="btn primary" type="button"
  onclick="zui.Messager.show('你好，ZUI！')">
  显示消息
</button>
```

</HomeCode>
</template>
<template #install-download>
<HomeCode label="下载构建">

```html
<link rel="stylesheet" href="./zui/zui.css">
<script src="./zui/zui.js"></script>
```

</HomeCode>
</template>
<template #install-cdn>
<HomeCode label="CDN">

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/zui@3.1.0/dist/zui.css">
<script src="https://cdn.jsdelivr.net/npm/zui@3.1.0/dist/zui.js"></script>
```

</HomeCode>
</template>
<template #install-npm>
<HomeCode label="npm 安装">

```sh
npm install zui@3.1.0
```

</HomeCode>
<HomeCode label="入口模块">

```js
import {Messager} from 'zui';
import 'zui/css';

Messager.show('你好，ZUI！');
```

</HomeCode>
</template>
</HomeLanding>
