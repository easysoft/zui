# 头像

## meta

```json
{
  "schemaVersion": 1,
  "library": "avatar",
  "summary": "展示图片、图标或文字缩写，并根据身份生成稳定背景色。",
  "keywords": [
    "头像",
    "成员",
    "缩写",
    "图片回退",
    "Avatar"
  ]
}
```

## overview

CSS 可直接显示图片/文字；动态组件增加缩写、配色和图片失败回退。多个成员叠放使用 [avatar-group](../avatar-group/ai.md)。

## setup

workspace：主入口 `@zui/avatar` 提供下述原生类和类型，`@zui/avatar/react` 提供 Preact 组件（历史路径名不代表 React 支持）。JSX 需项目 Preact/TypeScript 配置；另加载 `@zui/base` 和 `@zui/avatar/css` 的样式。browser：使用包含该库的 `zui` JS/CSS。npm：以目标发布包 `zui` / `zui/css` 的真实导出为准，不承诺独立子路径。circle、rounded-sm/md/lg 等形状来自 utilities，使用对应 props 时必须加载 @zui/utilities。css-icons 随头像样式导入；字体图标仍需 icons。

## vanilla

### vanilla-avatar

```json
{"name": "Avatar", "summary": "以原生构造器创建和更新组件。"}
```

`new Avatar(selector, options?)`；选项见下文类型条目。构造、初始化异步时序、实例关联、`render(options?)`、`destroy()`、事件与 `$` 视图 ref 继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；`$` 首次渲染前可能为 null。选项可结合 [ComponentOptions](../core/ai.md#types-component-options)。调用 destroy() 卸载 Preact 子树；宿主由调用者按需移除。

主入口登记 Preact 组件；本原生类源码未主动调用 Avatar.register()，使用直接 new 不依赖额外名称注册。更新用 render；没有独立图片加载事件 API。

workspace（包含所需 CSS）：

```ts
import '@zui/base';
import {Avatar} from '@zui/avatar';
const host = document.createElement('div');
document.body.append(host);
const view = new Avatar(host, {text: '张三', size: 'sm'});
// 离开页面时：view.destroy(); host.remove();
```

## preact

### preact-avatar

```json
{"name": "Avatar", "summary": "按图片、图标、文字优先级渲染头像。"}
```

参数见 [AvatarOptions](#types-avatar)。优先级为有效 src → icon → text/displayText；图片错误记录当前 src，换 src 后重试。children 始终追加。纯中文与空白组成的长文本取末尾 maxTextLength 个字符；纯英文/数字/空白取首字符大写；其他文本取前 maxTextLength。displayText 绕过缩写。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/avatar/css';
import {render} from 'preact';
import {Avatar} from '@zui/avatar/react';
const host = document.createElement('div');
document.body.append(host);
render(<Avatar text="张三" size="sm" />, host);
// 离开页面时：render(null, host); host.remove();
```

## web-components

无。

## css

### css-avatar

```json
{"name": ".avatar", "summary": "显示裁剪为方形的图片、文字或图标。", "role": "component"}
```

默认宽 2rem、aspect-ratio=1、圆角变量、overflow:hidden，内容居中。直接子 img 占满宽高并 object-fit:cover；直接子 .icon 字号继承。

browser（已加载本库 CSS）：

```html
<span class="avatar" aria-label="张三">张</span>
<span class="avatar"><img src="/users/zhang.png" alt="张三"></span>
```

### css-avatar-size

```json
{"name": ".size-xs / .size-sm / .size-lg / .size-xl", "summary": "设置头像预设大小。", "role": "helper"}
```

加到 avatar 根，宽度分别 1.25/1.5/3/5rem，字号分别 .75/.75/1.5/2.25rem；默认无尺寸类。circle 与 rounded-* 是 utilities 类，不由本库定义。

### css-avatar-generated

```json
{"name": ".avatar-img / .avatar-text / .has-img / .has-icon / .has-text", "summary": "标识 Avatar 生成的内容和状态。", "role": "js-component"}
```

由组件依据当前内容维护；avatar-img 为 img，avatar-text 为缩写容器。has-text-N 中 N 为实际显示字符串长度，当前没有对应样式族，因此不是可独立配置的有界公共工具类。不要手动修改这些标记来切换头像内容。

## css-variables

### vars-avatar

```json
{"name": "头像变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--avatar-radius` | `12.5%` | 默认圆角 | `:root` | 目标 `.avatar` |
| `--avatar-bg` | `var(--color-surface)` | CSS 静态头像背景 | `:root` | 目标 `.avatar` |

动态 Avatar 通常生成内联 background，因此动态配色用 background prop 覆盖，而非只改 --avatar-bg。

## javascript

无。

## types

### types-avatar

```json
{"name": "AvatarOptions", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `className` | `ClassNameLike` | 否 | 无 | 根附加类 |
| `style` | `JSX.CSSProperties` | 否 | 无 | 根样式；组件计算的背景/尺寸等会覆盖同名字段 |
| `size` | `'xs' \| 'sm' \| 'lg' \| 'xl' \| number` | 否 | 默认 32px | 预设 20/24/48/80px；数值为 px |
| `circle` | `boolean` | 否 | `false` | 添加 utilities 的 circle 类 |
| `rounded` | `boolean \| 'sm' \| 'md' \| 'lg' \| number` | 否 | 无 | 数值为 px；字符串添加 rounded-*；true 当前会生成 rounded-true，未提供对应公开样式，推荐显式值 |
| `background` | `string` | 否 | 无时按 code/text 计算 HSL | 非图片背景 |
| `foreColor` | `string` | 否 | 未给时按背景对比度计算 | 文本/图标颜色 |
| `icon` | `IconType` | 否 | 无 | 图片不存在或失败后优先使用图标 |
| `text` | `string` | 否 | 无 | 完整文本，同时用于图片 alt 和默认配色键 |
| `displayText` | `string` | 否 | 无 | 直接覆盖缩写文本 |
| `code` | `string \| number` | 否 | `text ?? displayText ?? ''` | 用于稳定配色的键 |
| `maxTextLength` | `number` | 否 | `2` | 中文/其他文本缩写长度 |
| `saturation` | `number` | 否 | `0.4` | HSL 饱和度比例 |
| `lightness` | `number` | 否 | `0.6` | HSL 明度比例 |
| `hueDistance` | `number` | 否 | `43` | 配色键乘数，最终 hue %360 |
| `src` | `string` | 否 | 无 | 图片 URL；加载失败回退图标/文字 |
| `children` | `ComponentChildren \| (() => ComponentChildren)` | 否 | 无 | 内容后追加；函数 this 为视图 |

ClassNameLike、IconType 和 ComponentChildren 见 [core 内容类型](../core/ai.md#types-content)。数值颜色参数未作范围校验，应提供有效比例。

## recipes

希望多处同一用户显示一致颜色时显式设置 code；图片失败后默认回退 icon，再到 text/displayText，给 text 还能生成图片 alt。

## constraints

rounded=true 当前不会命中可用 rounded-true 样式；使用 rounded="md" 或数字。纯 CSS 头像不会自动生成缩写或图片失败回退。配色计算不会检测整个页面的最终背景对比度。

## references

- [包元数据](package.json)
- [公开入口](src/main.ts)
- [正式文档](docs/lib/components/index.md)
- [源码 src/main-react.ts](src/main-react.ts)
- [源码 src/main-css.ts](src/main-css.ts)
- [源码 src/types/index.ts](src/types/index.ts)
- [源码 src/style/index.ts](src/style/index.ts)
- [源码 src/style/vars.css](src/style/vars.css)
