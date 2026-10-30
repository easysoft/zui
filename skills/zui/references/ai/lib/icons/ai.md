# 字体图标

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "icons",
  "summary": "通过 ZenIcon 字体提供有界图标名称和尺寸辅助类。",
  "keywords": [
    "图标",
    "字体图标",
    "ZenIcon",
    "icons"
  ]
}
```

## overview

适合需要现有 ZenIcon 字形及兼容旧图标名称的页面。基础操作图标可使用无需字体请求的 [css-icons](../css-icons/ai.md)。本库不公开 JS Icon 组件；通用渲染器由 core 提供。

## setup

workspace：`import '@zui/base'; import '@zui/icons';`，构建工具解析字体 URL。browser：同时部署生成的 CSS 及其引用的字体资源（woff/ttf/eot/svg），保持路径可达；仅复制 CSS 不够。npm：核对目标 `zui/css` 及资产部署结果。

## vanilla

无。

## preact

无。

## web-components

无。

## css

### css-font-icons

```json
{"name": ".icon 与 icon 字形类", "summary": "渲染字体字形并固定基础对齐。", "role": "component"}
```

用 `.icon` 加一个确切的 `icon-名称` 类；默认字体 ZenIcon、字号 14px、行高 1，`.icon::before` 最小宽 14px。选择器也覆盖以 icon- 开头或包含独立 icon- 类的节点，但推荐保留 `.icon`。装饰图标 `aria-hidden="true"`，有意义的图标须有可访问名称。

browser（已加载本库 CSS）：

```html
<i class="icon icon-check" aria-hidden="true"></i><span>已完成</span>
```

实际支持的字形类（包含同字形别名）完整列表：

- `icon-resize`、`icon-expand-full`、`icon-arrows-alt`、`icon-fullscreen`、`icon-collapse-full`、`icon-yinyang`、`icon-taiji`、`icon-window`、`icon-window-alt`、`icon-carousel`
- `icon-spinner-snake`、`icon-spinner-indicator`、`icon-check-board`、`icon-bar-chart`、`icon-bar-chart-o`、`icon-github`、`icon-dot-circle`、`icon-dot-circle-o`、`icon-cube-alt`、`icon-cubes`
- `icon-file-pdf`、`icon-file-word`、`icon-file-excel`、`icon-file-powerpoint`、`icon-file-image`、`icon-file-photo`、`icon-file-picture`、`icon-file-archive`、`icon-file-zip`、`icon-file-audio`
- `icon-file-sound`、`icon-file-movie`、`icon-file-video`、`icon-file-code`、`icon-circle-o-notch`、`icon-chanzhi`、`icon-chanzhi-pro`、`icon-zsite`、`icon-zsite-pro`、`icon-qq`
- `icon-wechat`、`icon-weixin`、`icon-history`、`icon-circle-thin`、`icon-sliders`、`icon-newspaper-o`、`icon-calculator`、`icon-paint-brush`、`icon-area-chart`、`icon-pie-chart`
- `icon-line-chart`、`icon-toggle-off`、`icon-toggle-on`、`icon-diamond`、`icon-venus`、`icon-mars`、`icon-server`、`icon-music`、`icon-search`、`icon-envelope`
- `icon-heart`、`icon-star`、`icon-star-empty`、`icon-user`、`icon-film`、`icon-th-large`、`icon-th`、`icon-th-list`、`icon-ok`、`icon-check`
- `icon-remove`、`icon-times`、`icon-zoom-in`、`icon-zoom-out`、`icon-off`、`icon-cog`、`icon-trash`、`icon-home`、`icon-file-o`、`icon-file-alt`
- `icon-time`、`icon-download-alt`、`icon-download`、`icon-upload`、`icon-inbox`、`icon-play-circle`、`icon-repeat`、`icon-refresh`、`icon-list-alt`、`icon-lock`
- `icon-flag`、`icon-headphones`、`icon-volume-off`、`icon-volume-up`、`icon-qrcode`、`icon-barcode`、`icon-tag`、`icon-tags`、`icon-book`、`icon-bookmark`
- `icon-print`、`icon-camera`、`icon-font`、`icon-bold`、`icon-italic`、`icon-header`、`icon-underline`、`icon-strikethrough`、`icon-eraser`、`icon-align-justify`
- `icon-list`、`icon-picture`、`icon-pencil`、`icon-map-marker`、`icon-adjust`、`icon-tint`、`icon-edit`、`icon-share`、`icon-checked`、`icon-move`
- `icon-arrows`、`icon-step-backward`、`icon-fast-backward`、`icon-backward`、`icon-play`、`icon-pause`、`icon-stop`、`icon-forward`、`icon-fast-forward`、`icon-step-forward`
- `icon-eject`、`icon-chevron-left`、`icon-chevron-right`、`icon-plus-sign`、`icon-minus-sign`、`icon-remove-sign`、`icon-ok-sign`、`icon-check-circle`、`icon-question-sign`、`icon-info-sign`
- `icon-remove-circle`、`icon-ok-circle`、`icon-check-circle-o`、`icon-ban-circle`、`icon-arrow-left`、`icon-arrow-right`、`icon-arrow-up`、`icon-arrow-down`、`icon-share-alt`、`icon-resize-full`
- `icon-resize-small`、`icon-plus`、`icon-minus`、`icon-asterisk`、`icon-exclamation-sign`、`icon-gift`、`icon-leaf`、`icon-eye-open`、`icon-eye-close`、`icon-warning-sign`
- `icon-plane`、`icon-calendar`、`icon-random`、`icon-comment`、`icon-chevron-up`、`icon-chevron-down`、`icon-shopping-cart`、`icon-folder-close`、`icon-folder-open`、`icon-resize-v`
- `icon-resize-h`、`icon-bar-chart-alt`、`icon-camera-retro`、`icon-key`、`icon-cogs`、`icon-comments`、`icon-thumbs-o-up`、`icon-thumbs-o-down`、`icon-star-half`、`icon-heart-empty`
- `icon-signout`、`icon-pushpin`、`icon-external-link`、`icon-signin`、`icon-trophy`、`icon-upload-alt`、`icon-lemon`、`icon-phone`、`icon-check-empty`、`icon-bookmark-empty`
- `icon-phone-sign`、`icon-credit`、`icon-rss`、`icon-hdd`、`icon-bullhorn`、`icon-bell`、`icon-certificate`、`icon-hand-right`、`icon-hand-left`、`icon-hand-up`
- `icon-hand-down`、`icon-circle-arrow-left`、`icon-circle-arrow-right`、`icon-circle-arrow-up`、`icon-circle-arrow-down`、`icon-globe`、`icon-wrench`、`icon-tasks`、`icon-filter`、`icon-group`
- `icon-link`、`icon-cloud`、`icon-beaker`、`icon-cut`、`icon-copy`、`icon-paper-clip`、`icon-save`、`icon-sign-blank`、`icon-bars`、`icon-reorder`
- `icon-list-ul`、`icon-list-ol`、`icon-table`、`icon-magic`、`icon-caret-down`、`icon-caret-up`、`icon-caret-left`、`icon-caret-right`、`icon-columns`、`icon-sort`
- `icon-sort-down`、`icon-sort-up`、`icon-envelope-alt`、`icon-undo`、`icon-dashboard`、`icon-comment-alt`、`icon-comments-alt`、`icon-bolt`、`icon-sitemap`、`icon-umbrella`
- `icon-paste`、`icon-lightbulb`、`icon-exchange`、`icon-cloud-download`、`icon-cloud-upload`、`icon-bell-alt`、`icon-coffee`、`icon-file-text-o`、`icon-file-text-alt`、`icon-building`
- `icon-double-angle-left`、`icon-double-angle-right`、`icon-double-angle-up`、`icon-double-angle-down`、`icon-angle-left`、`icon-angle-right`、`icon-angle-up`、`icon-angle-down`、`icon-desktop`、`icon-laptop`
- `icon-tablet`、`icon-mobile`、`icon-circle-blank`、`icon-quote-left`、`icon-quote-right`、`icon-spinner`、`icon-circle`、`icon-reply`、`icon-folder-close-alt`、`icon-folder-open-alt`
- `icon-expand-alt`、`icon-collapse-alt`、`icon-smile`、`icon-frown`、`icon-meh`、`icon-gamepad`、`icon-keyboard`、`icon-flag-alt`、`icon-flag-checkered`、`icon-terminal`
- `icon-code`、`icon-reply-all`、`icon-star-half-full`、`icon-location-arrow`、`icon-crop`、`icon-code-fork`、`icon-unlink`、`icon-question`、`icon-info`、`icon-shield`
- `icon-calendar-empty`、`icon-rocket`、`icon-chevron-sign-left`、`icon-chevron-sign-right`、`icon-chevron-sign-up`、`icon-chevron-sign-down`、`icon-html5`、`icon-anchor`、`icon-unlock-alt`、`icon-bullseye`
- `icon-ellipsis-h`、`icon-ellipsis-v`、`icon-rss-sign`、`icon-play-sign`、`icon-minus-sign-alt`、`icon-plus-sign-alt`、`icon-check-minus`、`icon-check-plus`、`icon-level-up`、`icon-level-down`
- `icon-check-sign`、`icon-edit-sign`、`icon-external-link-sign`、`icon-share-sign`、`icon-compass`、`icon-collapse`、`icon-collapse-top`、`icon-expand`、`icon-dollar`、`icon-yen`
- `icon-file`、`icon-file-text`、`icon-sort-by-alphabet`、`icon-sort-by-alphabet-alt`、`icon-sort-by-attributes`、`icon-sort-by-attributes-alt`、`icon-sort-by-order`、`icon-sort-by-order-alt`、`icon-thumbs-up`、`icon-thumbs-down`
- `icon-long-arrow-down`、`icon-long-arrow-up`、`icon-long-arrow-left`、`icon-long-arrow-right`、`icon-apple`、`icon-windows`、`icon-android`、`icon-linux`、`icon-sun`、`icon-moon`
- `icon-archive`、`icon-bug`、`icon-zhifubao`、`icon-alipay`、`icon-zhifubao-square`、`icon-alipay-square`、`icon-taobao`、`icon-weibo`、`icon-chrome`、`icon-firefox`
- `icon-ie`、`icon-opera`、`icon-safari`、`icon-node`、`icon-layout`、`icon-usecase`、`icon-stack`、`icon-branch`、`icon-chat`、`icon-chat-line`
- `icon-comment-line`、`icon-chat-dot`、`icon-cube`、`icon-database`、`icon-align-left`

### css-icon-size

```json
{"name": ".icon-lg / .icon-2x / .icon-3x / .icon-4x / .icon-5x", "summary": "调整字体图标尺寸。", "role": "helper"}
```

与图标类同节点使用。icon-lg 只放大伪元素至 1.3333333em 并调 vertical-align；2x/3x/4x/5x 字号分别 28/42/56/70px。不是任意 icon-Nx 规则。颜色继承 currentColor，可由业务 CSS 或真实 utilities 设置。

## css-variables

无。

## javascript

无。

## types

无。

## recipes

仅图标按钮应使用真实 button 并写 aria-label；字体图标放按钮内部并标 aria-hidden。加载失败时不要以私用区字符作为有意义文本替代。

## constraints

font-display: block，字体加载期间图标可能暂不可见；图标字体类与普通文本不能混用。没有公开的独立 CSS 变量，尺寸默认写死在规则中。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/icons/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/icons/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/icons/docs/lib/icons/index.md>)
- [源码 src/style/index.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/icons/src/style/index.ts>)
