section: basic
id: responsive
description: 多种屏幕尺寸响应
icon: icon-tablet
filter: xiangyingshibuju xysbj
---

# 响应式设计 

现代 Web 应用应该支持响应式设计。栅格系统已提供良好的基础构建响应式设计页面，同时也提供一些辅助工具类来控制内容在不同设备的展现方式。

## 屏幕尺寸响应

在ZUI中提供针对 4 中不同尺寸的设备屏幕进行分别控制。

<table class="table table-bordered">
  <thead>
    <tr>
      <th>屏幕</th>
      <th>名称</th>
      <th>尺寸</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>超小屏幕（手机）<span class="label label-primary visible-xs inline">当前</span></td>
      <td>xs</td>
      <td>&lt;768px</td>
    </tr>
    <tr>
      <td>小屏幕（平板）<span class="label label-primary visible-sm inline">当前</span></td>
      <td>sm</td>
      <td>&gt;=768px</td>
    </tr>
    <tr>
      <td>中等屏幕（笔记本电脑）<span class="label label-primary visible-md inline">当前</span></td>
      <td>md</td>
      <td>&gt;=992px</td>
    </tr>
    <tr>
      <td>大屏幕（桌面电脑）<span class="label label-primary visible-lg inline">当前</span></td>
      <td>lg</td>
      <td>&gt;=1200px</td>
    </tr>
  </tbody>
</table>

针对 4 种屏幕类型各定义两种辅助类来在不同的设备上显示或隐藏内容。

<table class="table table-bordered">
  <thead>
    <tr>
      <th></th>
      <th>超小屏幕</th>
      <th>小屏幕</th>
      <th>中等屏幕</th>
      <th>大屏幕</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>.visible-xs</th>
      <td class="hl-success">可见</td>
      <td class="text-muted">隐藏</td>
      <td class="text-muted">隐藏</td>
      <td class="text-muted">隐藏</td>
    </tr>
    <tr>
      <th>.visible-sm</th>
      <td class="text-muted">隐藏</td>
      <td class="hl-success">可见</td>
      <td class="text-muted">隐藏</td>
      <td class="text-muted">隐藏</td>
    </tr>
    <tr>
      <th>.visible-md</th>
      <td class="text-muted">隐藏</td>
      <td class="text-muted">隐藏</td>
      <td class="hl-success">可见</td>
      <td class="text-muted">隐藏</td>
    </tr>
    <tr>
      <th>.visible-lg</th>
      <td class="text-muted">隐藏</td>
      <td class="text-muted">隐藏</td>
      <td class="text-muted">隐藏</td>
      <td class="hl-success">可见</td>
    </tr>
    <tr>
      <th>.hidden-xs</th>
      <td class="text-muted">隐藏</td>
      <td class="hl-success">可见</td>
      <td class="hl-success">可见</td>
      <td class="hl-success">可见</td>
    </tr>
    <tr>
      <th>.hidden-sm</th>
      <td class="hl-success">可见</td>
      <td class="text-muted">隐藏</td>
      <td class="hl-success">可见</td>
      <td class="hl-success">可见</td>
    </tr>
    <tr>
      <th>.hidden-md</th>
      <td class="hl-success">可见</td>
      <td class="hl-success">可见</td>
      <td class="text-muted">隐藏</td>
      <td class="hl-success">可见</td>
    </tr>
    <tr>
      <th>.hidden-lg</th>
      <td class="hl-success">可见</td>
      <td class="hl-success">可见</td>
      <td class="hl-success">可见</td>
      <td class="text-muted">隐藏</td>
    </tr>
  </tbody>
</table>

其中显示辅助类 `.visible-xs`、`.visible-sm`、`.visible-md`、`.visible-lg` 可以组合使用，同理对于隐藏辅助类也可以组合使用以达到不同的效果。但不要将显示辅助类和隐藏辅助类混合使用。

ZUI也提供用来控制打印机的显示与隐藏的辅助类。显示和隐藏不能同时使用。

*   `.visible-print`：在打印时显示，在浏览器正常浏览时隐藏。
*   `.hidden-print`：在浏览器正常浏览时显示，在打印时隐藏。

默认情况下，响应式显示辅助类 `.visible-*` 会将元素的 CSS `display` 属性设置为 `block`（表格元素 `<tr>`、`<td>`、`<th>` 除外）。如果期望在显示时将 `display` 属性设置为 `inline` 或者 `inline-block`，应该将 `.visible-*` 与 `.inline` 或 `.inline-block` 一起使用。

在页面加载完成和页面窗口宽度变化时，`<html>` 标签上还会自动添加以下辅助类用于为不同的屏幕尺寸应用外观（此功能需要 ZUI 的 JavaScript 实现）：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>屏幕尺寸</th>
      <th><code>html</code> 标签上的辅助类</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>屏幕宽度&lt;768px</td>
      <td><code>.screen-phone</code></td>
    </tr>
    <tr>
      <td>768px&lt;=屏幕宽度&lt;992px</td>
      <td><code>.screen-tablet</code></td>
    </tr>
    <tr>
      <td>992px&lt;=屏幕宽度&lt;1200px</td>
      <td><code>.screen-desktop</code></td>
    </tr>
    <tr>
      <td>屏幕宽度&gt;=1200px</td>
      <td><code>.screen-desktop-wide</code></td>
    </tr>
    <tr>
      <td>屏幕宽度&gt;=992px</td>
      <td><code>.device-desktop</code></td>
    </tr>
    <tr>
      <td>屏幕宽度&lt;992px</td>
      <td><code>.device-mobile</code></td>
    </tr>
  </tbody>
</table>

## 设备类型和系统检测

针对不同的操作系统，会在页面加载时为 `<html>` 标签自动添加以下辅助类方便为不同的设备系统应用不同的样式（此功能需要 ZUI 的 JavaScript 实现）：

<table class="table table-bordered">
  <thead>
    <tr>
      <th>系统和功能类型</th>
      <th><code>html</code> 标签上的辅助类</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows 操作系统</td>
      <td><code>.os-windows</code></td>
    </tr>
    <tr>
      <td>Mac 操作系统</td>
      <td><code>.os-mac</code></td>
    </tr>
    <tr>
      <td>Android 系统</td>
      <td><code>.os-android</code></td>
    </tr>
    <tr>
      <td>iOS 系统</td>
      <td><code>.os-ios</code></td>
    </tr>
    <tr>
      <td>Linux 系统</td>
      <td><code>.os-linux</code></td>
    </tr>
    <tr>
      <td>Unix 系统</td>
      <td><code>.os-unix</code></td>
    </tr>
    <tr>
      <td>触摸屏设备</td>
      <td><code>.is-touchable</code></td>
    </tr>
  </tbody>
</table>


## 禁用响应式设计

有时你所开发应用仅针对一个设备或平台，并不需要响应式设计。

在 ZUI 中响应式设计是一个全局的思路，默认情况下大部分组件如有必要都会启用响应式设计。如果需要在你的网站中全面禁用该功能，请参考下面的建议：

*   移除 `<meta name="viewport" content="width=device-width, initial-scale=1">` 标签，禁用移动设备缩放可视窗口尺寸。
*   避免使用一些响应式工具类，例如`.visible-xs`、`.visible-sm`、`.visible-md`、`.visible-lg`等。
*   当使用栅格系统时避免使用 `.col-sm-*`、`.col-md-*`、`.col-lg-*`，统一使用 code>.col-xs-*。
*   使用固定宽度的布局容器（`.container-fixed`、`.container-fixed-md`、`.container-fixed-sm`、`.container-fixed-xs`）来代替响应式设计容器（`.container`）。
*   避免使用响应式组件，应该使用非响应式组件来代替，例如使用导航（`.nav`） 来代替响应式导航（`.navbar`）。

<div class="alert alert-info">即便 ZUI 为非响应式设计提供了方案，但还是建议使用响应式设计。实现响应式并不需要很多额外的代码和工作，实现响应式设计为跨屏提供了可能性。</div>
