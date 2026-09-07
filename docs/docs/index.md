---
layout: home

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
.VPContent.is-home .VPFeature .details {
  color: var(--color-fore);
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
}
</style>
