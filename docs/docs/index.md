---
layout: home
title: 组合式前端 UI 框架
description: ZUI 3 提供 CSS 工具类与 JS 组件，支持按需组合、深色模式和主题定制。

hero:
  name: ZUI 3
  text: 组合式前端 UI 框架
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/start/
    - theme: alt
      text: GitHub
      link: https://github.com/easysoft/zui
features:
  - icon: '<svg class="feature-icon" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M14 2L4 14h7l-1 8 10-13h-7z" /></svg>'
    title: 按需使用，灵活组合
    details: 基础样式、CSS 工具类与 JS 组件按需搭配
  - icon: '<svg class="feature-icon" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12l5 7-11 12L1 10zM1 10h22M6 3l6 19 6-19" /></svg>'
    title: 常用组件，覆盖日常开发
    details: 按钮、表单、菜单、弹窗与数据表格
  - icon: '<svg class="feature-icon" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M14 3a6 6 0 0 0-7 8L2 17a3 3 0 0 0 5 5l6-6a6 6 0 0 0 8-7l-4 4-5-5z" /></svg>'
    title: 统一主题，自由定制
    details: 支持深色模式、主题变量与定制打包
---

<style>
.VPContent.is-home {
  background: linear-gradient(125deg, var(--color-primary-50) 0%, var(--color-primary-50) 40%, var(--color-primary-100) calc(40% + 1px), var(--color-primary-100) 60%, var(--color-primary-200) calc(60% + 1px), var(--color-primary-200) 72%, var(--color-primary-500) calc(72% + 1px), var(--color-primary-500) 100%);
}
.VPContent.is-home .VPFeature {
  border-color: rgba(var(--color-inverse-rgb), .1);
}
.VPContent.is-home .VPFeature .icon > .feature-icon {
  font-size: 24px;
  color: var(--vp-c-brand-1);
}
.VPContent.is-home + .VPFooter {
  background: var(--color-primary-50);
}
</style>
