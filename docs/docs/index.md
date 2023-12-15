---
layout: home

hero:
  name: ZUI 3
  text: 开箱即用的组合式前端 UI 框架
  tagline: v3.0.0
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
  background: linear-gradient(125deg, var(--color-primary-50) 0%, var(--color-primary-50) 40%, var(--color-primary-100) calc(40% + 1px), var(--color-primary-100) 60%, var(--color-primary-200) calc(60% + 1px), var(--color-primary-200) 72%, var(--color-primary-500) calc(72% + 1px), var(--color-primary-500) 100%);
}
.VPContent.is-home .VPFeature {
  background: rgba(var(--color-inverse-rgb), .05);
  backdrop-filter: blur(10px);
  border-color: rgba(var(--color-inverse-rgb), .1);
}
.VPContent.is-home + .VPFooter {
  background: var(--color-primary-50);
}
</style>
