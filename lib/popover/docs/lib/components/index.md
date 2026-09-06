# 弹出面板

`Popover` 在按钮或其他目标旁显示补充内容，支持动态面板、已有 DOM、悬停触发和自动定位。

## 点击显示

通过 `zui-toggle="popover"` 声明触发按钮，用 `data-*` 传入简单选项。

::: tabs

== 示例

<Example>
  <button type="button" class="btn" zui-toggle="popover" data-title="发布详情" data-content="文档与构建产物均已准备就绪。" data-placement="bottom">查看发布详情</button>
</Example>

== HTML

```html
<button type="button" class="btn"
  zui-toggle="popover"
  data-title="发布详情"
  data-content="文档与构建产物均已准备就绪。"
  data-placement="bottom">
  查看发布详情
</button>
```

:::

再次点击触发按钮、点击关闭按钮或面板外区域可关闭面板。默认的 `mask: true` 控制点击外部关闭行为。

## JavaScript 初始化

也可以为一个普通按钮创建实例：

```html
<button type="button" class="btn" id="popoverTrigger">查看详情</button>
```

```js
const popover = new zui.Popover('#popoverTrigger', {
    title: '发布详情',
    content: '文档与构建产物均已准备就绪。',
    placement: 'bottom-start',
    width: 280,
});
```

同一个触发按钮选择一种初始化方式即可。`title`、`content` 和 `footer` 支持 ZUI 自定义内容定义。

## 悬停与手动触发

::: tabs

== 示例

<Example>
  <button type="button" class="btn" zui-toggle="popover" data-trigger="hover" data-content="适合简短的补充说明。" data-placement="right">悬停查看说明</button>
</Example>

== HTML

```html
<button type="button" class="btn" zui-toggle="popover"
  data-trigger="hover" data-content="适合简短的补充说明。"
  data-placement="right">悬停查看说明</button>
```

:::

悬停时可从触发元素移动到面板内，移出后延迟关闭。重要操作应提供点击入口，使键盘和触屏用户也能访问。

`trigger: 'manual'` 可用于由调用方管理显示，实例初始化完成后调用 `show()`、`hide()` 或 `toggle()`。`show: true` 可以在初始化后直接显示。

## 使用已有面板

指定 `target` 后使用已有 DOM，不再根据 `title`、`content` 等选项生成面板内容。

::: tabs

== 示例

<Example>
  <button type="button" class="btn" zui-toggle="popover" data-target="#existingPopover" data-placement="bottom">打开已有面板</button>
  <div class="popover popup" id="existingPopover">
    <div class="popover-heading">
      <strong class="popover-title">已有内容</strong>
      <button type="button" class="btn ghost square size-sm" data-dismiss="popover" aria-label="关闭"><span class="close" aria-hidden="true"></span></button>
    </div>
    <div class="popover-content">面板内容由页面维护。</div>
  </div>
</Example>

== HTML

```html
<button type="button" class="btn" zui-toggle="popover"
  data-target="#existingPopover" data-placement="bottom">打开已有面板</button>
<div class="popover popup" id="existingPopover">
  <div class="popover-heading">
    <strong class="popover-title">已有内容</strong>
    <button type="button" class="btn ghost square size-sm"
      data-dismiss="popover" aria-label="关闭"><span class="close" aria-hidden="true"></span></button>
  </div>
  <div class="popover-content">面板内容由页面维护。</div>
</div>
```

:::

## 定位与选项

`placement` 支持 `top`、`right`、`bottom`、`left`，以及 `-start`、`-end` 对齐方式。默认启用 `flip`，空间不足时可翻转方向。

<Props>
title?: CustomContentType; // 面板标题。
content?: CustomContentType; // 动态面板内容。
footer?: CustomContentType; // 动态面板底部内容。
target?: Selector | (() =&gt; HTMLElement); // 已有面板。
trigger?: string = "click"; // click、hover、manual 或自定义事件名。
placement?: Placement = "top"; // 初始显示方向。
strategy?: Strategy = "absolute"; // absolute 或 fixed 定位。
flip?: boolean = true; // 空间不足时翻转。
shift?: boolean | ShiftOptions; // 调整位置以避免溢出。
arrow?: boolean | number = true; // 箭头及其大小。
offset?: OffsetOptions = 1; // 定位偏移。
width?: number | "auto" | "100%" | (() =&gt; number | "auto"); // 面板宽度，100% 表示触发元素宽度。
height?: number | (() =&gt; number | "auto"); // 面板高度。
minWidth?: SizeSetting; // 最小宽度。
maxWidth?: SizeSetting; // 最大宽度。
maxHeight?: SizeSetting; // 最大高度。
container?: Selector; // 动态面板挂载位置。
closeBtn?: boolean = true; // 动态面板的关闭按钮。
mask?: boolean = true; // 点击外部时关闭。
delay?: number = 0; // 触发显示的延迟，单位为毫秒。
animation?: boolean | string = true; // 是否启用动画或指定动画类。
destroyOnHide?: boolean | number; // 隐藏后销毁实例，数字表示延迟毫秒数。
hideOthers?: boolean; // 显示时关闭其他面板。
</Props>

## 事件与方法

`onShow`、`onHide` 在切换前调用，返回 `false` 可阻止操作。`onShown`、`onHidden` 在切换完成后调用。也可通过 `popover.on('shown', handler)` 等实例事件监听 `show`、`shown`、`hide`、`hidden`。

```js
popover.show();
popover.hide();
popover.toggle();
popover.render({content: '更新后的内容'});
popover.updateLayout();
const shown = popover.shown;
const target = popover.target;
popover.destroy();
```

移除触发元素前应销毁实例。面板内包含可操作内容时，调用方应根据场景管理焦点移动、返回和关闭快捷键；需要完整对话框交互时可以使用 [模态框](/lib/components/modal/)。

## 模块引入

```ts
import {Popover, PopoverPanel} from '@zui/popover';
import {PopoverPanel as PopoverPanelView} from '@zui/popover/react';
```

`PopoverPanel` 只提供面板内容的渲染，定位和触发行为由 `Popover` 管理。使用 Preact 面板入口时还需引入 `@zui/popover/css`。
