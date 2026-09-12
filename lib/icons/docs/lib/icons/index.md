# 字体图标

`icons` 使用 ZenIcon 字体显示图标。为元素添加 `.icon` 和具体的 `.icon-*` 类即可使用；少量纯 CSS 图形见 [CSS 图标](/lib/icons/css-icons/)。

## 基本使用

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <span><i class="icon icon-check" aria-hidden="true"></i> 已完成</span>
  <span><i class="icon icon-search" aria-hidden="true"></i> 搜索</span>
  <button type="button" class="btn primary"><i class="icon icon-plus" aria-hidden="true"></i> 新建</button>
</Example>

== HTML

```html
<span><i class="icon icon-check" aria-hidden="true"></i> 已完成</span>
<span><i class="icon icon-search" aria-hidden="true"></i> 搜索</span>
<button type="button" class="btn primary">
  <i class="icon icon-plus" aria-hidden="true"></i> 新建
</button>
```

:::

图标继承文本颜色。添加 `.icon` 可以让图标字形拥有最小 `14px` 的固定宽度，方便对齐。

## 尺寸与颜色

::: tabs

== 示例

<Example class="flex items-center gap-4">
  <i class="icon icon-star" aria-hidden="true"></i>
  <i class="icon icon-star icon-lg" aria-hidden="true"></i>
  <i class="icon icon-star icon-2x text-primary" aria-hidden="true"></i>
  <i class="icon icon-star icon-3x text-success" aria-hidden="true"></i>
  <i class="icon icon-star icon-4x" aria-hidden="true"></i>
  <i class="icon icon-star icon-5x" aria-hidden="true"></i>
</Example>

== HTML

```html
<i class="icon icon-star" aria-hidden="true"></i>
<i class="icon icon-star icon-lg" aria-hidden="true"></i>
<i class="icon icon-star icon-2x text-primary" aria-hidden="true"></i>
<i class="icon icon-star icon-3x text-success" aria-hidden="true"></i>
<i class="icon icon-star icon-4x" aria-hidden="true"></i>
<i class="icon icon-star icon-5x" aria-hidden="true"></i>
```

:::

| 类名 | 字号 |
| --- | --- |
| `.icon` | `14px` |
| `.icon-lg` | 伪元素字号为当前字号的约 `1.33` 倍，同时调整垂直位置 |
| `.icon-2x` | `28px` |
| `.icon-3x` | `42px` |
| `.icon-4x` | `56px` |
| `.icon-5x` | `70px` |

也可使用 `style="font-size: 20px"` 指定字号。

## 常用图标

<Example class="flex flex-wrap gap-4">
  <span><i class="icon icon-user" aria-hidden="true"></i> icon-user</span>
  <span><i class="icon icon-home" aria-hidden="true"></i> icon-home</span>
  <span><i class="icon icon-search" aria-hidden="true"></i> icon-search</span>
  <span><i class="icon icon-plus" aria-hidden="true"></i> icon-plus</span>
  <span><i class="icon icon-minus" aria-hidden="true"></i> icon-minus</span>
  <span><i class="icon icon-check" aria-hidden="true"></i> icon-check</span>
  <span><i class="icon icon-edit" aria-hidden="true"></i> icon-edit</span>
  <span><i class="icon icon-trash" aria-hidden="true"></i> icon-trash</span>
  <span><i class="icon icon-calendar" aria-hidden="true"></i> icon-calendar</span>
  <span><i class="icon icon-star" aria-hidden="true"></i> icon-star</span>
  <span><i class="icon icon-expand-full" aria-hidden="true"></i> icon-expand-full</span>
  <span><i class="icon icon-collapse-full" aria-hidden="true"></i> icon-collapse-full</span>
</Example>

例如 `.icon-expand-full` 的别名包括 `.icon-arrows-alt` 和 `.icon-fullscreen`，它们显示同一个字形。可以查看 [图标名称与别名数据](/assets/icons/icons.json) 查找其他名称；实际可用类名以所用版本的 CSS 为准。

## 只有图标的按钮

装饰性图标使用 `aria-hidden="true"`，按钮本身提供清晰的可访问名称。

::: tabs

== 示例

<Example>
  <button type="button" class="btn square" aria-label="搜索"><i class="icon icon-search" aria-hidden="true"></i></button>
</Example>

== HTML

```html
<button type="button" class="btn square" aria-label="搜索">
  <i class="icon icon-search" aria-hidden="true"></i>
</button>
```

:::

图标单独传达信息时，可以在外层使用 `role="img"` 和 `aria-label` 描述含义，避免辅助技术直接读取字体编码。

## 引入与部署

使用构建工具时可单独引入：

```js
import '@zui/icons';
```

自定义构建需要包含 `icons` 库。部署时保留构建输出中的字体文件及其与 CSS 的相对路径；加载失败时先检查浏览器网络面板中的字体请求。使用跨域字体地址时，服务端还需允许相应的跨域请求。
