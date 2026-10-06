---
version: alpha
name: ZUI 3 文档站
description: 以真实组件和可复制代码为中心的中文开发文档
colors:
  primary: "#3b82f6"
  canvas: "#ffffff"
  fore: "#1e293b"
  surface: "#f1f5f9"
  darkCanvas: "#020617"
typography:
  sans:
    fontFamily: "Fira Sans, -apple-system, PingFang SC, Microsoft YaHei, sans-serif"
  mono:
    fontFamily: "Fira Code, ui-monospace, SFMono-Regular, monospace"
rounded:
  DEFAULT: "0.25rem"
  lg: "0.5rem"
spacing:
  unit: "0.25rem"
  section: "1.5rem"
---

# ZUI 3 文档站设计约定

## Overview

面向使用 ZUI 3 的开发者，主要任务是阅读、运行示例及复制接入代码。中文界面沿用现有 VitePress 文档导航与字体，不扩展为新的品牌视觉。主题编辑器是一张可操作的组件样本：调节颜色时，整个站点与真实按钮、表单同步变化。避免装饰性数据、营销式大标题和独立于 ZUI 的演示组件皮肤。

运行时变量的唯一基础来源为 `../config/tailwind-theme/`；本文件记录默认意图，不生成 CSS。文档适配路径为基础变量 → `_/.vitepress/theme/vars.css` → VitePress 界面。自定义主题经 `theme-model.ts` 生成同名 ZUI 变量，`theme-editor.css` 在启用定制时将站点的背景、文字和边框映射到这些变量。默认契约由 `../tests/unit/docs-theme.test.ts` 与实际 Tailwind 生成结果核对。

## Colors

默认使用 blue 品牌色和 slate 中性色。成功、警告、危险保留各自语义及文字说明。深色通过反转色阶并替换基础表面颜色实现。主题编辑器沿用 ZUI 实心皮肤的白字契约，不额外覆盖组件的 `--skin-text`。主题编辑器允许用户改变颜色；输入无效时保留上一次有效主题，界面给出字段级说明。用户配色的对比度需要在其实际产品中验收。

## Typography

正文使用现有 `--vp-font-family-base`，CSS 变量与代码使用 `--vp-font-family-mono`。保留中文回退字体，无外部字体请求。编辑器标题 16px、字段 14px、辅助文字 12px；预览使用 rem，以展示 `--font-size-root` 的实际效果。

## Layout

保留文档左侧导航。主题页关闭右侧文章目录，桌面采用设置与预览双列，1100px 以下改为单列；预设在窄屏为两列。页面自然滚动，导出代码在固定高度文本域中独立滚动。基础间距来自既有 4px 节奏，分节留 24px。

## Elevation & Depth

页面以边界和表面色区分区域，预览面板使用 ZUI 的阴影变量。主题选中态同时展示边框与勾选标记。预览可在桌面粘附，移动端恢复自然流。

## Shapes

基础 ZUI 圆角为 4px。编辑器控件保持稳定几何，组件预览遵循 `--radius` 系列，用户修改基础圆角后按既有比例生成其余圆角。

## Components

主题页使用 Vue；示例按钮、表单、标签使用现有 ZUI CSS。颜色选择采用浏览器原生拾色器，接受平台弹窗行为，同时提供可键盘编辑的 HEX 输入；滑杆可用方向键调节。外观复用 VitePress `isDark` 及其保存机制。复制反馈复用 `copy-feedback.ts`，失败时仍可选择代码或下载。

主题保存为当前 origin 的本地偏好，写入失败明确提示并保留当前效果。首屏通过校验后的数值／颜色缓存恢复，客户端重新校验设置并生成变量；其他标签页的修改通过 storage 事件同步。预设与恢复默认是立即生效的本地操作，不使用确认弹窗。复制、保存、下载反馈使用稳定位置的 live region。

顶部主题按钮在桌面和移动端均可见，以当前主色色点标识入口。点击展开两列预设、深浅色选项和自定义主题链接，复用编辑器的主题状态与外观持久化。弹层不靠悬停打开，使用普通按钮及链接的 Tab 顺序；Escape 关闭并返回按钮焦点，外部点击、焦点离开及页面跳转关闭。窄屏弹层约束在视口内，内容过高时内部滚动。

滚动条复用 ZUI 的全局 `--scrollbar-*` 样式，文档补充标准 `scrollbar-color` 并在强制颜色模式交由系统处理。所有操作保留焦点轮廓；不添加装饰动画。

## Do's and Don'ts

- 使用已存在的 ZUI 变量，颜色与 RGB 变量同步导出。
- 用实际组件验证主题，并覆盖浅色、深色、窄屏、键盘、存储受限与重载。
- 不把文档站专有的 VitePress 布局变量导出到用户主题。
- 不引入第二套外观持久化或复制反馈机制。
