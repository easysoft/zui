# 进度条

> 本参考描述 ZUI 3.1.0 源码快照，未经目标发布包验证。先确认应用实际运行版本、导出、类型和 CSS。 workspace 示例需要源码工作区，不能直接推定 npm 或浏览器构建具有同名能力。

> [版本与来源清单](../../manifest.json)；源码出处为固定提交的在线链接，跨库使用参考可离线读取。

## meta

```json
{
  "schemaVersion": 1,
  "library": "progress",
  "summary": "通过 CSS 或动态组件呈现有界百分比、条纹和分段进度。",
  "keywords": [
    "进度条",
    "百分比",
    "条纹",
    "ProgressBar"
  ]
}
```

## overview

适合任务完成比例或分段占比；动态 ProgressBar 创建单条进度，纯 CSS 可组合多个 progress-bar。无异步任务执行或自动计时。

## setup

workspace：主入口 `@zui/progress` 提供下述原生类和类型，`@zui/progress/react` 提供 Preact 组件（历史路径名不代表 React 支持）。JSX 需项目 Preact/TypeScript 配置；另加载 `@zui/base` 和 `@zui/progress/css` 的样式。browser：使用包含该库的 `zui` JS/CSS。npm：以目标发布包 `zui` / `zui/css` 的真实导出为准，不承诺独立子路径。

## vanilla

### vanilla-progress

```json
{"name": "ProgressBar", "summary": "以原生构造器创建和更新组件。"}
```

`new ProgressBar(selector, options?)`；选项见下文类型条目。构造、初始化异步时序、实例关联、`render(options?)`、`destroy()`、事件与 `$` 视图 ref 继承 [ComponentFromReact](../core/ai.md#vanilla-component-from-react)；`$` 首次渲染前可能为 null。选项可结合 [ComponentOptions](../core/ai.md#types-component-options)。调用 destroy() 卸载 Preact 子树；宿主由调用者按需移除。

主入口执行 ProgressBar.register() 并登记 Preact 组件。更新用 `view.render({percent: 80})`；没有 start/stop 方法。

workspace（包含所需 CSS）：

```ts
import '@zui/base';
import {ProgressBar} from '@zui/progress';
const host = document.createElement('div');
document.body.append(host);
const view = new ProgressBar(host, {percent: 35});
// 离开页面时：view.destroy(); host.remove();
```

## preact

### preact-progress

```json
{"name": "ProgressBar", "summary": "渲染带 ARIA 数值的进度条。"}
```

参数见 [ProgressBarOptions](#types-progress)。受 props 控制，没有内部进度状态或 onChange。根具有 role=progressbar、aria-valuemin/max/now，内部条标 aria-hidden；提供可访问名称可在外层语义布局完成，类型未公开任意 aria props。

workspace（JSX，已配置 Preact）：

```tsx
import '@zui/base';
import '@zui/progress/css';
import {render} from 'preact';
import {ProgressBar} from '@zui/progress/react';
const host = document.createElement('div');
document.body.append(host);
render(<ProgressBar percent={35} className="progress-striped" />, host);
// 离开页面时：render(null, host); host.remove();
```

## web-components

无。

## css

### css-progress

```json
{"name": ".progress / .progress-bar", "summary": "组成纯 CSS 进度容器和直接子进度段。", "role": "component"}
```

progress 默认高 1.25rem、flex；progress-bar 高 100%，宽度变化过渡 .5s，首末段继承外侧圆角。纯 CSS 使用者设置 width，并同步 ARIA 值。

browser（已加载本库 CSS）：

```html
<div class="progress" role="progressbar" aria-label="上传进度" aria-valuemin="0" aria-valuemax="100" aria-valuenow="35"><div class="progress-bar" style="width:35%"></div></div>
```

### css-progress-effects

```json
{"name": ".progress-striped / .active", "summary": "显示条纹与循环移动效果。", "role": "helper"}
```

progress-striped 放根，给直接子 progress-bar 增加 45 度条纹；active 放 progress 根，令全部后代条执行 2s 线性无限背景移动。通常同时使用；active 不是任务状态控制器。

## css-variables

### vars-progress

```json
{"name": "进度条变量", "summary": "配置外观变量及其作用节点。"}
```

| 变量 | 默认表达式 | 含义及取值 | 声明位置 | 推荐覆盖节点 |
| --- | --- | --- | --- | --- |
| `--progress-radius` | `var(--radius)` | 容器圆角 | `:root` | `.progress` |
| `--progress-striped-size` | `40px` | 条纹背景尺寸 | `:root` | `.progress` |
| `--progress-bg` | `var(--color-surface)` | 轨道背景 | `:root` | `.progress` |
| `--progress-bar-color` | `var(--color-primary-500)` | 进度段颜色 | `:root` | 根或单个 `.progress-bar` |

## javascript

无。

## types

### types-progress

```json
{"name": "ProgressBarOptions", "summary": "列出组件完整专有参数和回调约定。"}
```

| 参数 | 类型 | 必填 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| `className` | `string` | 否 | 无 | 根额外类 |
| `style` | `JSX.CSSProperties` | 否 | 无 | 根内联样式，合并在组件计算样式之后 |
| `percent` | `number` | 否 | `50` | 有限值限制到 0…100；NaN/Infinity 为 0 |
| `color` | `string` | 否 | 无；回退 CSS 变量默认 | 进度条背景 CSS 色 |
| `background` | `string` | 否 | 无；回退 CSS 变量默认 | 轨道背景 CSS 色 |
| `height` | `number` | 否 | `20` | 根高度，数值按 Preact CSS 像素处理 |
| `width` | `'auto' \| '100%' \| number \| string` | 否 | `auto` | 根宽度 |
| `children` | `ComponentChildren` | 否 | 无 | 追加在 progress-bar 后 |

## recipes

分段进度在 progress 内放多个 progress-bar 并分别设 width 与变量颜色，宽度总和由调用者控制。动态组件始终只有一个自动管理进度段。

## constraints

百分比有限值才有效；CSS 手写宽度不享受组件归一化。动画不自动响应 prefers-reduced-motion，可在业务样式按需要停用。

## references

- [包元数据](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/progress/package.json>)
- [公开入口](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/progress/src/main.ts>)
- [正式文档](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/progress/docs/lib/components/index.md>)
- [源码 src/main-react.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/progress/src/main-react.ts>)
- [源码 src/main-css.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/progress/src/main-css.ts>)
- [源码 src/types/index.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/progress/src/types/index.ts>)
- [源码 src/style/index.ts](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/progress/src/style/index.ts>)
- [源码 src/style/vars.css](<https://github.com/easysoft/zui/blob/c4c21db96c816bae14d178065ce59d2fbf8ea01d/lib/progress/src/style/vars.css>)
