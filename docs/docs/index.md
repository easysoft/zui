---
layout: home
title: ZUI 3 - 开箱即用的组合式前端 UI 框架
titleTemplate: false
description: ZUI 3 为前端开发者提供 CSS 工具类和 JS 组件，无需绑定 JavaScript 框架，支持按需使用、深色模式与主题定制。
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:locale
      content: zh_CN
  - - meta
    - property: og:site_name
      content: ZUI 3
  - - meta
    - property: og:title
      content: ZUI 3 - 开箱即用的组合式前端 UI 框架
  - - meta
    - property: og:description
      content: CSS 工具类与 JS 组件按需组合，支持深色模式与主题定制。
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: ZUI 3 - 开箱即用的组合式前端 UI 框架
  - - meta
    - name: twitter:description
      content: CSS 工具类与 JS 组件按需组合，支持深色模式与主题定制。

hero:
  name: ZUI 3
  text: <span class="home-title-phrase">开箱即用的组合式</span> <span class="home-title-phrase">前端 UI 框架</span>
  tagline: 无需绑定框架，按需组合 CSS 工具类与 JS 组件。
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/start/
    - theme: alt
      text: GitHub
      link: https://github.com/easysoft/zui
features:
  - title: <i class="icon icon-code" aria-hidden="true"></i> 用类名搭出界面
    details: |
      导入样式后，用类名组合按钮、表单与布局。
      <code class="home-feature-code">&lt;button class="btn"&gt;
        确认
      &lt;/button&gt;</code>
      <a class="home-feature-link" href="./guide/start/">快速开始</a>
  - title: <i class="icon icon-cubes" aria-hidden="true"></i> 按页面需要组合组件
    details: |
      从菜单、弹窗到数据表格，通过选项配置所需交互。
      <a class="home-feature-link" href="./lib/components/menu/">查看菜单组件</a>
  - title: <i class="icon icon-sliders" aria-hidden="true"></i> 用主题统一外观
    details: |
      通过变量配置颜色、圆角与间距，适配浅色和深色界面。
      <a class="home-feature-link" href="./guide/config/base/color.html">配置主题颜色</a>
---

<style>
.VPContent.is-home {
  background: var(--color-canvas);
}
.VPContent.is-home .VPHomeHero {
  background: linear-gradient(125deg, transparent 55%, var(--color-primary-50) calc(55% + 1px), var(--color-primary-50) 75%, var(--color-primary-100) calc(75% + 1px));
}
.VPContent.is-home .VPHomeHero .container {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  align-items: center;
  gap: 56px;
  text-align: left;
}
.VPContent.is-home .VPHomeHero .main {
  order: 0;
  width: auto;
  min-width: 0;
  max-width: none;
}
.VPContent.is-home .VPHomeHero .name {
  margin: 0 0 16px;
  font-size: 24px;
  line-height: 1.2;
}
.VPContent.is-home .VPHomeHero .text {
  width: 100%;
  max-width: none;
  margin: 0;
  font-size: 48px;
  line-height: 1.2;
  white-space: normal;
}
.home-title-phrase {
  display: inline-block;
  white-space: nowrap;
}
.VPContent.is-home .VPHomeHero .tagline {
  margin: 0;
  max-width: 30em;
  padding-top: 20px;
  font-size: 18px;
  line-height: 1.7;
}
.VPContent.is-home .VPHomeHero .actions {
  justify-content: flex-start;
}
.VPContent.is-home .VPHomeHero .image {
  order: 1;
  min-width: 0;
  margin: 0;
}
.VPContent.is-home .VPHomeHero .image-container {
  width: 100%;
  height: auto;
  transform: none;
}
.VPContent.is-home .VPHomeHero .image-bg {
  display: none;
}
.VPContent.is-home .VPFeature {
  background: var(--color-surface);
  border-color: var(--vp-c-divider);
}
.VPContent.is-home .VPFeatures {
  padding-top: 32px;
}
.VPContent.is-home .VPFeatures .items {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 20px;
  margin: 0;
}
.VPContent.is-home .VPFeatures .item {
  width: auto;
  min-width: 0;
  padding: 0;
}
.VPContent.is-home .VPFeatures .item:first-child {
  grid-row: span 2;
}
.VPContent.is-home .VPFeatures .item:first-child .VPFeature {
  background: var(--color-primary-50);
}
.VPContent.is-home .VPFeatures .item:last-child .VPFeature {
  background: var(--color-canvas);
}
.VPContent.is-home .VPFeature .box {
  padding: 28px;
}
.VPContent.is-home .VPFeature .icon {
  color: var(--color-fore);
  background: transparent;
  margin-right: 8px;
}
.VPContent.is-home .VPFeature .title {
  color: var(--color-fore);
  font-size: 20px;
  line-height: 1.4;
}
.VPContent.is-home .VPFeature .details {
  color: var(--color-fore);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
}
.home-feature-code {
  display: block;
  margin-top: 24px;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--color-canvas);
  color: var(--color-fore);
  font: 14px/1.8 var(--vp-font-family-mono);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.home-feature-link {
  display: block;
  width: fit-content;
  margin-top: 20px;
  color: var(--vp-c-brand-1);
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  text-underline-offset: 4px;
}
.home-feature-link:hover {
  color: var(--vp-c-brand-1);
  text-decoration-thickness: 2px;
}
.VPContent.is-home + .VPFooter {
  background: var(--color-canvas);
}
@media (max-width: 959px) {
  .VPContent.is-home .VPHomeHero .container {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
  }
  .VPContent.is-home .VPHomeHero .image {
    width: 100%;
    max-width: 480px;
  }
}
@media (max-width: 767px) {
  .VPContent.is-home .VPHomeHero {
    background: none;
  }
  .VPContent.is-home .VPHomeHero .text {
    font-size: clamp(24px, 7.5vw, 36px);
  }
  .VPContent.is-home .VPHomeHero .tagline {
    font-size: 16px;
  }
  .VPContent.is-home .VPFeatures .items {
    grid-template-columns: minmax(0, 1fr);
  }
  .VPContent.is-home .VPFeatures .item:first-child {
    grid-row: auto;
  }
  .VPContent.is-home .VPFeature .box {
    padding: 24px;
  }
  .home-feature-code {
    padding: 16px;
    font-size: 12px;
  }
}
</style>
