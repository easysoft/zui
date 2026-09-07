---
layout: home

hero:
  name: ZUI 3
  text: 开箱即用的组合式前端 UI 框架
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/start/
    - theme: alt
      text: GitHub
      link: https://github.com/easysoft/zui
features:
  - icon: ⚡️
    title: 开箱即用，按需加载
    details: 采用基础 + 组件库模式，按需使用
  - icon: 💎
    title: 丰富的组件库
    details: 实用 CSS 工具类 + 强大的 JS 组件库
  - icon: 🛠️
    title: 丰富主题，灵活定制
    details: 深色模式，自定义主题，定制打包
---

<style>
.VPContent.is-home {
  background: var(--color-canvas);
}
.VPContent.is-home .VPHomeHero {
  background: linear-gradient(125deg, transparent 55%, var(--color-primary-50) calc(55% + 1px), var(--color-primary-50) 75%, var(--color-primary-100) calc(75% + 1px));
}
.VPContent.is-home .VPFeature {
  background: var(--color-surface);
  border-color: var(--vp-c-divider);
}
.VPContent.is-home .VPFeature .details {
  color: var(--color-fore);
}
.VPContent.is-home + .VPFooter {
  background: var(--color-canvas);
}
@media (max-width: 767px) {
  .VPContent.is-home .VPHomeHero {
    background: none;
  }
}
</style>
