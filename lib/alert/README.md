# 消息框

## Alert

```html:example: gap-3
<div class="alert">Hi! 这条消息可能需要你注意。<a href="#more" class="alert-link">了解更多</a></div>
```

## With close button

```html:example: gap-3
<div class="alert">
  <div class="alert-content">
    Hi! 这条消息可能需要你注意。
  </div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

## With icon and headings

```html:example: gap-3
<div class="alert primary">
  <i class="icon icon-warning-sign icon-2x"></i>
  <div class="alert-content">
    <h3 class="alert-heading">注意</h3>
    <div class="alert-text">Hi! 这条消息可能需要你注意。</div>
  </div>
  <button type="button" class="alert-close btn ghost square"><span class="close"></span></button>
</div>
```

## Styles

```html:example: gap-3 space-y-4
<div class="alert primary">准备开始</div>
<div class="alert secondary">请点击下一步</div>
<div class="alert success">太好了！一切已准备就绪。</div>
<div class="alert warning">注意！看起来遇到一些问题。</div>
<div class="alert danger">确实遇到了问题，请立即处理吧。</div>
<div class="alert important">不要忘了勾选协议哦！</div>
<div class="alert special">你可能还需要深入了解ZUI3。</div>
<div class="alert lighter">采用基础 + 组件库模式，按需使用。</div>
<div class="alert light">丰富组件库，实现你的创意。</div>
<div class="alert gray">深色模式，自定义主题，定制打包。</div>
<div class="alert dark">ZUI3使用组件库来管理组件。</div>
<div class="alert darker">库中的每个组件可以被独立打包和使用。</div>
<div class="alert black">组件库采用 pnpm 的工作空间实现。</div>
<div class="alert inverse">每个组件作为一个单独的包进行管理。</div>
<div class="alert surface">组件名称只能以小写字母开头。</div>
```

```html:example: gap-3 space-y-4
<div class="alert primary-pale">准备开始</div>
<div class="alert secondary-pale">请点击下一步</div>
<div class="alert success-pale">太好了！一切已准备就绪。</div>
<div class="alert warning-pale">注意！看起来遇到一些问题。</div>
<div class="alert danger-pale">确实遇到了问题，请立即处理吧。</div>
<div class="alert important-pale">不要忘了勾选协议哦！</div>
<div class="alert special-pale">你可能还需要深入了解ZUI3。</div>
<div class="alert lighter-pale">采用基础 + 组件库模式，按需使用。</div>
<div class="alert light-pale">丰富组件库，实现你的创意。</div>
<div class="alert gray-pale">深色模式，自定义主题，定制打包。</div>
<div class="alert dark-pale">欢迎使用ZUI3。</div>
```
## Radius

```html:example: gap-3 space-y-4
<div class="alert primary rounded-none">准备开始。</div>
<div class="alert secondary rounded-sm">请点击下一步。</div>
<div class="alert success rounded">一切已准备就绪。</div>
<div class="alert warning rounded-md">注意！看起来遇到一些问题。</div>
<div class="alert danger rounded-lg">确实遇到了问题，请立即处理吧。</div>
<div class="alert light rounded-xl">你可能需要了解一些内容。</div>
<div class="alert important circle">欢迎使用ZUI3。</div>

```

## with icons

```html:example: gap-3 space-y-4
<div class="alert success">
  <i class="icon icon-check-circle"></i> 一切已准备就绪。
</div>
<div class="alert danger">
  <i class="icon icon-remove-sign"></i> 出现了一些错误。
</div>
<div class="alert warning-pale">
  <i class="icon icon-warning-sign"></i> 注意！可能存在潜在风险。
</div>
<div class="alert light-pale">
  <i class="icon icon-info-sign"></i> 你可能需要知道一些内容。
</div>
```

## with links

```html:example: gap-3 space-y-4
<div class="alert success">
  <i class="icon icon-check-circle"></i>
  <div class="alert-text">一切已<a class="alert-link">准备就绪</a>。</div>
</div>
<div class="alert danger">
  <i class="icon icon-remove-sign"></i>
  <div class="alert-text">出现了一些<a class="alert-link">错误</a>。</div>
</div>
<div class="alert warning-pale">
  <i class="icon icon-warning-sign"></i>
  <div class="alert-text">注意！可能存在<a class="alert-link">潜在风险</a>。</div>
</div>
<div class="alert light-pale">
  <i class="icon icon-info-sign"></i>
  <div class="alert-text">你可能需要知道<a class="alert-link">一些内容</a>。</div>
</div>
```
